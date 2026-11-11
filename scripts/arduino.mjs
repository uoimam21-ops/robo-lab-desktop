// Bundles everything needed to compile and upload to a real Arduino without internet, into arduino/:
//   arduino/bin/<platform-arch>/arduino-cli(.exe)   arduino-cli 0.35.2 (the last one that runs on Windows 7)
//   arduino/data/    the AVR boards (Uno, Nano, Mega) with avr-gcc and avrdude, for the platform this runs on
//   arduino/user/libraries/   the libraries Robo Maker's blocks use
// Run it on the same OS as the installer you build (CI runs it on Windows). Needs internet once.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync, createWriteStream } from 'node:fs';
import { join, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const CLI = '0.35.2', AVR = 'arduino:avr@1.8.6';
const LIBS = ['Servo@1.2.2', 'LiquidCrystal I2C@1.1.2', 'LedControl@1.0.6', 'DHT sensor library@1.4.6', 'Adafruit Unified Sensor@1.1.14'];
const OUT = resolve('arduino');
const win = process.platform === 'win32';
const BUILDS = win ? [['win-x64', 'Windows_64bit.zip'], ['win-ia32', 'Windows_32bit.zip']]
  : process.platform === 'darwin' ? [['mac-' + process.arch, 'macOS_64bit.tar.gz']] : [['linux-x64', 'Linux_64bit.tar.gz']];

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'data'), { recursive: true }); mkdirSync(join(OUT, 'user'), { recursive: true });

async function get(url, file) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(url + ' → ' + r.status);
  await pipeline(Readable.fromWeb(r.body), createWriteStream(file));
}
for (const [dir, asset] of BUILDS) {
  const d = join(OUT, 'bin', dir), f = join(OUT, asset);
  mkdirSync(d, { recursive: true });
  await get('https://downloads.arduino.cc/arduino-cli/arduino-cli_' + CLI + '_' + asset, f);
  if (asset.endsWith('.zip')) execFileSync(win ? 'tar' : 'unzip', win ? ['-xf', f, '-C', d] : ['-q', '-o', f, '-d', d]);
  else execFileSync('tar', ['-xzf', f, '-C', d]);
  rmSync(f);
}
const exe = join(OUT, 'bin', BUILDS[0][0], win ? 'arduino-cli.exe' : 'arduino-cli');
const cfg = join(OUT, 'build.yaml');
writeFileSync(cfg, ['directories:', '  data: ' + JSON.stringify(join(OUT, 'data')), '  downloads: ' + JSON.stringify(join(OUT, 'staging')),
  '  user: ' + JSON.stringify(join(OUT, 'user')), 'metrics:', '  enabled: false', 'updater:', '  enable_notification: false', ''].join('\n'));
const run = (...a) => { console.log('> arduino-cli ' + a.join(' ')); execFileSync(exe, [...a, '--config-file', cfg], { stdio: 'inherit' }); };
run('core', 'update-index');
run('core', 'install', AVR);
run('lib', 'update-index');
for (const l of LIBS) run('lib', 'install', l);
// shrink: only the chips of Uno/Nano (avr5) and Mega (avr6, avr51 for 1284) stay; drop the 60 MB library index
const GCC = join(OUT, 'data', 'packages', 'arduino', 'tools', 'avr-gcc');
const KEEP = new Set(['avr5', 'avr51', 'avr6']), ARCH = /^(avr\d+|avrxmega\d+|avrtiny|tiny-stack)$/;
for (const v of readdirSync(GCC)) for (const lib of [join(GCC, v, 'avr', 'lib'), join(GCC, v, 'lib', 'gcc', 'avr')]) {
  if (!existsSync(lib)) continue;
  const dirs = lib.endsWith(join('gcc', 'avr')) ? readdirSync(lib).map((x) => join(lib, x)) : [lib];
  for (const d of dirs) for (const x of readdirSync(d)) if (ARCH.test(x) && !KEEP.has(x)) rmSync(join(d, x), { recursive: true, force: true });
}
for (const x of ['library_index.json', 'library_index.json.sig', 'tmp']) rmSync(join(OUT, 'data', x), { recursive: true, force: true });
for (const x of ['share', 'doc', 'man', 'info']) rmSync(join(GCC, readdirSync(GCC)[0], x), { recursive: true, force: true });
// smoke test: a sketch with every library must compile for each board we offer
const sk = join(OUT, 'test', 'test'); mkdirSync(sk, { recursive: true });
writeFileSync(join(sk, 'test.ino'), '#include <Servo.h>\n#include <LiquidCrystal_I2C.h>\n#include <LedControl.h>\n#include <DHT.h>\nvoid setup(){pinMode(13,OUTPUT);}\nvoid loop(){digitalWrite(13,HIGH);delay(500);digitalWrite(13,LOW);delay(500);}\n');
for (const b of ['arduino:avr:uno', 'arduino:avr:nano:cpu=atmega328old', 'arduino:avr:mega:cpu=atmega2560']) run('compile', '--fqbn', b, sk);
for (const x of ['staging', 'test', 'build.yaml']) rmSync(join(OUT, x), { recursive: true, force: true });
// USB driver for the cheap boards (CH340/CH341 chip): WCH's official installer, works on Windows 7 → 11.
// The app offers it on first launch and in the upload window (electron/arduino.js).
mkdirSync(join(OUT, 'drivers'), { recursive: true });
const DRV = join(OUT, 'drivers', 'CH341SER.EXE');
await get('https://www.wch-ic.com/download/file?id=65', DRV);
{ const { readFileSync } = await import('node:fs'); const h = readFileSync(DRV).subarray(0, 2).toString(); if (h !== 'MZ') throw new Error('CH341SER.EXE download is not a Windows program'); }
console.log('arduino bundle ready in ' + OUT + (existsSync(exe) ? '' : ' (missing cli!)'));
