// Smoke test of an INSTALLED Robo Lab (run in CI on Windows after the silent install).
// Usage: node tests/smoke.mjs "<path to Robo Lab.exe>" <label>
// Checks, with the internet blocked: the home screen, every lab opens, Python runs, Robo Block loads,
// the Arduino toolchain compiles (upload to a missing port must fail at the upload step), and the USB-driver check works.
import { _electron } from 'playwright';
import { mkdirSync } from 'node:fs';

const [exe, label = 'app'] = process.argv.slice(2);
const shots = 'test-results/' + label; mkdirSync(shots, { recursive: true });
const fails = [], ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails.push(m); };

const app = await _electron.launch({ executablePath: exe, timeout: 90000 });
const w = await app.firstWindow();
const errs = []; w.on('pageerror', (e) => errs.push(e.message));
await w.context().route(/^https?:/, (r) => r.abort());      // no internet
await w.waitForLoadState('load'); await w.waitForTimeout(1500);

console.log('[' + label + '] ' + JSON.stringify(await w.evaluate(() => window.roboDesktop.info())));
ok((await w.$$('.card')).length === 9, 'home screen shows 9 labs');
await w.screenshot({ path: shots + '/home.png' });

const drv = await w.evaluate(() => window.roboDesktop.arduino.driver());
ok(drv.needed === true && drv.available === true, 'CH340 driver bundled (installed on this machine: ' + drv.installed + ')');

for (const [path, name] of [['/lab/junior.html', 'Robo Junior'], ['/lab/ai.html', 'AI'], ['/lab/circuits.html', 'Robo Circuits'], ['/lab/arduino.html', 'Robo Maker'],
  ['/lab/3d.html', 'Robo CAD'], ['/lab/web.html', 'Robo Web'], ['/lab/code.html', 'Robo Code']]) {
  const r = await w.goto('robo://lab' + path); await w.waitForTimeout(1200);
  ok(r && r.status() === 200 && await w.evaluate(() => crossOriginIsolated), name + ' opens (isolated)');
}
await w.goto('robo://lab/lab/roboblock?go=free'); await w.waitForTimeout(4000);
ok(await w.evaluate(() => typeof Blockly !== 'undefined' && !!document.querySelector('.blocklySvg')), 'Robo Block loads Blockly offline');
await w.screenshot({ path: shots + '/roboblock.png' });

await w.goto('robo://lab/lab/python.html'); await w.waitForTimeout(1500);
await w.click('#runBtn');
let py = false; for (let i = 0; i < 60 && !py; i++) { await w.waitForTimeout(1000); py = await w.evaluate(() => { const f = document.getElementById('inForm'); return !!f && !f.hidden; }); }
ok(py, 'Python runs offline (waits for input())');
await w.screenshot({ path: shots + '/python.png' });

await w.goto('robo://lab/lab/arduino.html'); await w.waitForTimeout(2000);
ok(await w.isVisible('#upBtn'), 'Robo Maker shows «upload to Arduino»');
for (const board of ['uno', 'nanoOld', 'mega']) {
  const r = await w.evaluate((b) => window.roboDesktop.arduino.upload({ board, port: 'COM99',
    code: '#include <Servo.h>\nServo s;\nvoid setup(){pinMode(13,OUTPUT);s.attach(9);}\nvoid loop(){digitalWrite(13,HIGH);delay(300);digitalWrite(13,LOW);delay(300);}\n' }, () => {}), board);
  ok(r.stage === 'upload' && r.why === 'noport', board + ': compiles, upload to a missing port says «board not found» (' + r.stage + '/' + r.why + ')');
}
const bad = await w.evaluate(() => window.roboDesktop.arduino.upload({ board: 'uno', port: 'COM99', code: 'void setup(){\n  pinMode(13,OUTPUT)\n}\nvoid loop(){}\n' }, () => {}));
ok(bad.why === 'compile' && bad.line === 3, 'a code mistake is reported with its line (' + bad.line + ')');
const ports = await w.evaluate(() => window.roboDesktop.arduino.ports());
ok(ports.ok, 'port scan works (' + ports.ports.length + ' ports)');

ok(errs.filter((e) => !/WebGL/.test(e)).length === 0, 'no page errors' + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : ''));
await app.close().catch(() => {});
console.log('[' + label + '] ' + (fails.length ? fails.length + ' FAILED' : 'all passed'));
process.exit(fails.length ? 1 : 0);
