// Builds mobile/www for the Android app (Capacitor): the same labs as the desktop app (www/, with the vendored
// libraries — run "npm run vendor" first). The app opens on the journey (index.html), and the labs page («روبو لاب»)
// is lab/index.html, opened from the journey's menu. Then: npx cap sync android
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

if (!existsSync('www/vendor/pyodide')) { console.error('www/vendor is missing — run "npm run vendor" first.'); process.exit(1); }
const OUT = 'mobile/www';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('www', OUT, { recursive: true });
cpSync('launcher', OUT + '/launcher', { recursive: true });
writeFileSync(OUT + '/lab/index.html', readFileSync('launcher/index.html', 'utf8'));
writeFileSync(OUT + '/index.html', '<!doctype html><meta charset="utf-8"><title>رحلة روبو</title><meta http-equiv="refresh" content="0;url=/journey.html"><script>location.replace("/journey.html")</script>');
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
