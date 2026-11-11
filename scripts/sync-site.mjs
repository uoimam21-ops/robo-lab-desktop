// Copies the labs from a built robo-egypt-site checkout into www/, and points every online library
// (Pyodide, Blockly, Supabase, Google Fonts) at the copies in www/vendor/ so the app works without internet.
// Usage: (in the site repo) npm run build   then   (here) npm run sync -- ../robo-egypt-site
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const SITE = resolve(process.argv[2] || '../robo-egypt-site');
const DIST = join(SITE, 'dist');
const WWW = resolve('www');
if (!existsSync(join(DIST, 'lab', 'junior.html'))) {
  console.error('No built site in ' + DIST + ' — run "npm run build" in the site repo first.');
  process.exit(1);
}

const LABS = ['3d', 'ai', 'arduino', 'circuits', 'code', 'junior', 'python', 'web'];
for (const d of ['lab', 'assets']) rmSync(join(WWW, d), { recursive: true, force: true });
mkdirSync(join(WWW, 'lab'), { recursive: true });
for (const l of LABS) cpSync(join(DIST, 'lab', l + '.html'), join(WWW, 'lab', l + '.html'));
cpSync(join(DIST, 'journey.html'), join(WWW, 'lab', 'roboblock.html'));   // Robo Block lives inside the journey page
for (const d of ['blockly-media', 'parts']) cpSync(join(DIST, 'lab', d), join(WWW, 'lab', d), { recursive: true });
// shared images + the labs' JS/CSS chunks; leave out the photo folders only the website uses
cpSync(join(DIST, 'assets'), join(WWW, 'assets'), {
  recursive: true,
  filter: (src) => !/[\\/]assets[\\/](academy|articles|projects)([\\/]|$)/.test(src) && !/hero-kids/.test(src),
});

// online → offline
const SWAPS = [
  ['https://cdn.jsdelivr.net/pyodide/v0.26.4/full/', '/vendor/pyodide/'],
  ['https://cdn.jsdelivr.net/npm/blockly@10.4.3/', '/vendor/blockly/'],
  ['https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js', '/vendor/supabase.js'],
  ['https://fonts.googleapis.com/css2?', '/vendor/fonts/css2?'],
  ['<link rel="preconnect" href="https://fonts.googleapis.com">', ''],
  ['<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>', ''],
];
let n = 0;
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return walk(p);
  if (!/\.(html|js|css)$/.test(f)) return;
  let s = readFileSync(p, 'utf8'), o = s;
  for (const [a, b] of SWAPS) s = s.split(a).join(b);
  if (s !== o) { writeFileSync(p, s); n++; }
});
walk(WWW);
const left = [];
const scan = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return scan(p);
  if (!p.includes(join('www', 'vendor')) && /\.(html|js)$/.test(f) && /cdn\.jsdelivr\.net|fonts\.googleapis\.com/.test(readFileSync(p, 'utf8'))) left.push(p);
});
scan(WWW);
console.log('synced labs from ' + SITE + ' — rewrote ' + n + ' files' + (left.length ? '; still online: ' + left.join(', ') : ''));
