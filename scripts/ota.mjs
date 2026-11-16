// Live updates of the journey and the labs (Youssef, 16 Nov 2026, option «C»): the apps (Android, Windows, Mac, Microsoft Store)
// download the website part of www/ (the journey, the labs, their assets) when a newer one is published, without a new store
// version. Native code (Android, Electron) still needs a real update.
//
//   node scripts/ota.mjs base        writes www/ota-base.json: the hash of every website file inside this build (shipped in the app)
//   node scripts/ota.mjs pack OUT    writes OUT/ota.json + one OUT/<sha256>.gz per file, uploaded to the latest release of
//                                    uoimam21-ops/robo-lab-download; the apps fetch …/releases/latest/download/ota.json
//
// ota.json: { v: app version, native: the lowest NATIVE the files need (ota-native.txt), files: { "lab/x.html": "<sha256>" } }
// A file's download name is its hash, so an app only downloads the files that changed since its own build.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join, relative, resolve, sep } from 'node:path';

const WWW = resolve('www');
const PARTS = ['journey.html', 'coi-sw.js', 'lab', 'assets'];   // what sync-site.mjs copies from the website (not vendor/)
const files = {};
const walk = (p) => {
  if (!existsSync(p)) return;
  if (statSync(p).isDirectory()) return readdirSync(p).forEach((f) => walk(join(p, f)));
  if (/\.map$/.test(p)) return;
  const rel = relative(WWW, p).split(sep).join('/');
  if (rel === 'lab/index.html') return;   // the app's own labs page (launcher/), not the website's
  files[rel] = createHash('sha256').update(readFileSync(p)).digest('hex');
};
PARTS.forEach((d) => walk(join(WWW, d)));

const [cmd, out] = process.argv.slice(2);
const version = JSON.parse(readFileSync('package.json', 'utf8')).version;
if (cmd === 'base') {
  writeFileSync(join(WWW, 'ota-base.json'), JSON.stringify({ v: version, files }));
  console.log('ota-base.json: ' + Object.keys(files).length + ' files, v' + version);
} else if (cmd === 'pack' && out) {
  mkdirSync(out, { recursive: true });
  const native = existsSync('ota-native.txt') ? +readFileSync('ota-native.txt', 'utf8').trim() || 1 : 1;
  let bytes = 0;
  for (const [p, h] of Object.entries(files)) {
    const f = join(out, h + '.gz');
    if (existsSync(f)) continue;
    const gz = gzipSync(readFileSync(join(WWW, p)), { level: 9 }); writeFileSync(f, gz); bytes += gz.length;
  }
  writeFileSync(join(out, 'ota.json'), JSON.stringify({ v: version, native, built: new Date().toISOString(), files }));
  console.log('ota pack v' + version + ': ' + Object.keys(files).length + ' files, ' + Math.round(bytes / 1024) + ' KB gzipped');
} else {
  console.error('usage: node scripts/ota.mjs base | pack OUT_DIR'); process.exit(1);
}
