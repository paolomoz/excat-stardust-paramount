#!/usr/bin/env node
/**
 * publish-to-da.mjs — push the Paramount Variant A homepage to Document Authoring.
 *
 * Prereqs:
 *   1. Block code pushed to GitHub main (Code Sync builds hero/brands/careers/relief).
 *   2. DA_TOKEN exported (IMS token from the DA admin / sidekick).
 *
 * Usage:
 *   DA_TOKEN=xxxx node stardust/deploy/publish-to-da.mjs            # full run
 *   DA_TOKEN=xxxx node stardust/deploy/publish-to-da.mjs --no-publish  # write+preview only
 *
 * What it does (idempotent):
 *   A. Upload the 15 page images to  admin.da.live/source/<org>/<repo>/media/home/<file>
 *   B. Write 3 body fragments        admin.da.live/source/<org>/<repo>/{index,nav,footer}.html
 *   C. Preview each                  admin.hlx.page/preview/<org>/<repo>/main/<path>
 *   D. Publish each (unless --no-publish)  admin.hlx.page/live/<org>/<repo>/main/<path>
 */
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const ORG = 'paolomoz';
const REPO = 'excat-stardust-paramount';
const BRANCH = 'main';
const TOKEN = process.env.DA_TOKEN;
const NO_PUBLISH = process.argv.includes('--no-publish');
const MEDIA_DIR = 'stardust/current/assets/media';

if (!TOKEN) {
  console.error('FATAL: DA_TOKEN not set. Export the IMS token and re-run.');
  process.exit(1);
}
const auth = { Authorization: `Bearer ${TOKEN}` };

const CT = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp',
};

const PAGES = [
  { src: 'stardust/deploy/index.publish.html', path: 'index' },
  { src: 'stardust/deploy/nav.publish.html', path: 'nav' },
  { src: 'stardust/deploy/footer.publish.html', path: 'footer' },
];

const IMAGES = [
  'career-person-01-720x738-55868c.png', 'cbsmornings-gayleking-767x767-cc9055.jpg',
  'cc-brandimage-767x767-v2-7fc1f8.jpg', 'featured-image-09bff6.png', 'ghosts-767x767-1--b309b5.jpg',
  'homepage-header-ip-images-sbsp-1280x956-0ac135.png', 'nateburleson-767x767-e03e97.jpg',
  'pluto-brandimage-767x767-ef12b4.jpg', 'pp-brandimage-767x767-d4c7d2.jpg', 'rupaul-767x767-82c5fa.jpg',
  'sistas-767x767-1--196161.jpg', 'skydane-animation-2x3-0fd057.png', 'spongebob-brandfeature-304x456-237535.jpg',
  'startrek-discovery-767x767-a19454.jpg', 'wordmark-white-tech.svg',
];

async function putSource(daPath, body, contentType, filename) {
  const url = `https://admin.da.live/source/${ORG}/${REPO}/${daPath}`;
  const fd = new FormData();
  const blob = new Blob([body], { type: contentType });
  fd.append('data', blob, filename);
  const r = await fetch(url, { method: 'PUT', headers: auth, body: fd });
  return r.status;
}

async function hook(stage, p) {
  const url = `https://admin.hlx.page/${stage}/${ORG}/${REPO}/${BRANCH}/${p}`;
  const r = await fetch(url, { method: 'POST', headers: auth });
  return r.status;
}

(async () => {
  console.log(`Publishing to ${ORG}/${REPO}@${BRANCH}${NO_PUBLISH ? ' (no-publish)' : ''}\n`);

  // A. images
  console.log('A. Uploading images -> media/home/');
  for (const img of IMAGES) {
    const fp = path.join(MEDIA_DIR, img);
    if (!existsSync(fp)) { console.log(`   SKIP (missing): ${img}`); continue; }
    const ext = path.extname(img).toLowerCase();
    const status = await putSource(`media/home/${img}`, readFileSync(fp), CT[ext] || 'application/octet-stream', img);
    console.log(`   ${status} ${img}`);
  }

  // B. pages
  console.log('\nB. Writing pages');
  for (const pg of PAGES) {
    const html = readFileSync(pg.src, 'utf8');
    const status = await putSource(`${pg.path}.html`, html, 'text/html', `${pg.path}.html`);
    console.log(`   ${status} ${pg.path}.html`);
  }

  // C. preview
  console.log('\nC. Preview');
  for (const pg of PAGES) {
    const status = await hook('preview', pg.path);
    console.log(`   ${status} preview/${pg.path}`);
  }

  // D. publish
  if (!NO_PUBLISH) {
    console.log('\nD. Publish (live)');
    for (const pg of PAGES) {
      const status = await hook('live', pg.path);
      console.log(`   ${status} live/${pg.path}`);
    }
  } else {
    console.log('\nD. Publish skipped (--no-publish). Preview URLs:');
  }

  console.log(`\nDone. Preview: https://${BRANCH}--${REPO}--${ORG}.aem.page/`);
  if (!NO_PUBLISH) console.log(`Live:    https://${BRANCH}--${REPO}--${ORG}.aem.live/`);
})();
