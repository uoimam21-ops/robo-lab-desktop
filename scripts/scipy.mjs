// scipy for Python without internet (27 Nov 2026). It is 47 MB: bigger than one file on the website's Cloudflare may be (25 MB),
// so the website loads it from jsDelivr the first time a program imports scipy or sklearn, and the desktop app keeps its own copy.
// Downloaded once into node_modules/.cache, and checked against the sha256 in pyodide-lock.json before it is used.
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export const SCIPY = 'scipy-1.12.0-cp312-cp312-pyodide_2024_0_wasm32.whl';
const URLS = ['https://cdn.jsdelivr.net/pyodide/v0.26.4/full/', 'https://fastly.jsdelivr.net/pyodide/v0.26.4/full/'];
const sha = (b) => createHash('sha256').update(b).digest('hex');

export async function addScipy(pyodideDir, cacheDir) {
  const want = JSON.parse(readFileSync(join(pyodideDir, 'pyodide-lock.json'), 'utf8')).packages.scipy.sha256;
  const cached = join(cacheDir, SCIPY);
  if (!(existsSync(cached) && sha(readFileSync(cached)) === want)) {
    let ok = false;
    for (const base of URLS) {
      try {
        const r = await fetch(base + SCIPY);
        if (!r.ok) continue;
        const b = Buffer.from(await r.arrayBuffer());
        if (sha(b) !== want) { console.warn('scipy from ' + base + ': wrong sha256, skipped'); continue; }
        mkdirSync(dirname(cached), { recursive: true }); writeFileSync(cached, b); ok = true; break;
      } catch (e) { console.warn('scipy from ' + base + ': ' + e.message); }
    }
    if (!ok) {
      console.warn('⚠ scipy was NOT added: the app works, but «import scipy / sklearn» will need internet. Put ' + SCIPY + ' in ' + cacheDir + ' and run again.');
      return false;
    }
  }
  cpSync(cached, join(pyodideDir, SCIPY));
  return true;
}
