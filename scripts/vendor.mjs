// Puts the libraries the labs load from the internet into www/vendor/, from node_modules (pinned in package.json).
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const NM = resolve('node_modules'), V = resolve('www', 'vendor');
rmSync(V, { recursive: true, force: true });
mkdirSync(V, { recursive: true });

// Python (Pyodide core: enough for the Python lab and Robo Code; extra packages need internet)
mkdirSync(join(V, 'pyodide'));
for (const f of ['pyodide.mjs', 'pyodide.js', 'pyodide.asm.js', 'pyodide.asm.wasm', 'python_stdlib.zip', 'pyodide-lock.json'])
  cpSync(join(NM, 'pyodide', f), join(V, 'pyodide', f));

// Blockly (Robo Block)
mkdirSync(join(V, 'blockly', 'msg'), { recursive: true });
cpSync(join(NM, 'blockly', 'blockly_compressed.js'), join(V, 'blockly', 'blockly_compressed.js'));
for (const m of ['ar', 'en']) cpSync(join(NM, 'blockly', 'msg', m + '.js'), join(V, 'blockly', 'msg', m + '.js'));
cpSync(join(NM, 'blockly', 'media'), join(V, 'blockly', 'media'), { recursive: true });

// Supabase (sign-in and cloud save; only works when online, but the script itself is local)
cpSync(join(NM, '@supabase', 'supabase-js', 'dist', 'umd', 'supabase.js'), join(V, 'supabase.js'));

// Fonts: the journey's fonts + the 3D lab's word fonts (fonts.js)
const FONTS = [
  ['Baloo Bhaijaan 2', 'baloo-bhaijaan-2', [600, 800]], ['Cairo', 'cairo', [400, 600, 700, 800]], ['Lalezar', 'lalezar', [400]],
  ['Changa', 'changa', [800]], ['Reem Kufi', 'reem-kufi', [700]], ['El Messiri', 'el-messiri', [700]], ['Marhey', 'marhey', [700]],
  ['Rakkas', 'rakkas', [400]], ['Aref Ruqaa', 'aref-ruqaa', [700]], ['Amiri', 'amiri', [700]], ['Fredoka', 'fredoka', [700]],
  ['Bungee', 'bungee', [400]], ['Bebas Neue', 'bebas-neue', [400]], ['Pacifico', 'pacifico', [400]], ['Lobster', 'lobster', [400]],
  ['Permanent Marker', 'permanent-marker', [400]], ['Press Start 2P', 'press-start-2p', [400]],
];
const RANGES = { arabic: 'U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC',
  latin: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
  'latin-ext': 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF' };
mkdirSync(join(V, 'fonts'));
let css = '/* offline copy of the Google Fonts the labs use (from @fontsource) */\n', files = 0;
for (const [fam, id, ws] of FONTS) {
  const dir = join(NM, '@fontsource', id, 'files');
  for (const w of ws) for (const sub of Object.keys(RANGES)) {
    const f = id + '-' + sub + '-' + w + '-normal.woff2';
    if (!existsSync(join(dir, f))) continue;
    cpSync(join(dir, f), join(V, 'fonts', f)); files++;
    css += "@font-face{font-family:'" + fam + "';font-style:normal;font-weight:" + w + ';font-display:swap;src:url(/vendor/fonts/' + f + ") format('woff2');unicode-range:" + RANGES[sub] + '}\n';
  }
}
writeFileSync(join(V, 'fonts', 'fonts.css'), css);
console.log('vendor ready: pyodide, blockly, supabase, ' + files + ' font files');
