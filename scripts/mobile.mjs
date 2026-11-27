// Builds mobile/www for the Android app (Capacitor): the same labs as the desktop app (www/, with the vendored
// libraries — run "npm run vendor" first). The app opens on its home (index.html = launcher/home.html: two cards + a bar), and the labs page («روبو لاب»)
// is lab/index.html, opened from the journey's menu. Then: npx cap sync android
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { SCIPY } from './scipy.mjs';

if (!existsSync('www/vendor/pyodide')) { console.error('www/vendor is missing — run "npm run vendor" first.'); process.exit(1); }
const OUT = 'mobile/www';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
// scipy (47 MB) stays out of the phone app to keep it small: on the phone it comes from jsDelivr when a program needs it
cpSync('www', OUT, { recursive: true, filter: (src) => !src.endsWith(SCIPY) });
cpSync('launcher', OUT + '/launcher', { recursive: true });
writeFileSync(OUT + '/lab/index.html', readFileSync('launcher/index.html', 'utf8'));
writeFileSync(OUT + '/index.html', readFileSync('launcher/home.html', 'utf8'));   // the app opens on its home: two cards + a bar that stays (16 Nov 2026)
// the app serves plain files (no address rewriting like the desktop app does): point the fonts at the one CSS file
const walk = (d) => readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = d + '/' + e.name;
  if (e.isDirectory()) { if (!p.endsWith('/vendor/pyodide')) walk(p); return; }
  if (!/\.(html|js|css)$/.test(e.name)) return;
  const s = readFileSync(p, 'utf8'), o = s.split('/vendor/fonts/css2?').join('/vendor/fonts/fonts.css?');
  if (o !== s) writeFileSync(p, o);
});
walk(OUT);
console.log('mobile/www ready');
