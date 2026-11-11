// Smoke test of an INSTALLED Robo Lab (run in CI on Windows after the silent install).
// Usage: node tests/smoke.mjs "<path to Robo Lab.exe>" <label>
// Checks, with the internet blocked: the home screen, every lab opens, Python runs, Robo Block loads,
// the Arduino toolchain compiles (upload to a missing port must fail at the upload step), and the USB-driver check works.
import { _electron } from 'playwright';
import { mkdirSync } from 'node:fs';

const [exe, label = 'app'] = process.argv.slice(2);
const PORT = process.platform === 'win32' ? 'COM99' : '/dev/cu.robo-missing';   // a port that isn't there
const shots = 'test-results/' + label; mkdirSync(shots, { recursive: true });
const fails = [], ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails.push(m); };

// no internet: every http(s) request goes to a proxy that isn't there (works on Electron 22 and 44; route() crashes Electron 22)
const extra = (process.env.SMOKE_ARGS || '').split(' ').filter(Boolean);
const app = await _electron.launch({ executablePath: exe, args: ['--proxy-server=http://127.0.0.1:9', '--proxy-bypass-list=<-loopback>', ...extra], timeout: 90000 });
// the app's own messages, so a crash says why
app.process().stderr.on('data', (d) => { const s = String(d); if (/error|crash|fatal|gpu/i.test(s)) process.stdout.write('  [app] ' + s.slice(0, 400)); });
app.on('close', () => console.log('  [app closed]'));
const w = await app.firstWindow();
const errs = []; w.on('pageerror', (e) => errs.push(e.message));
await w.waitForLoadState('load'); await w.waitForTimeout(1500);

console.log('[' + label + '] ' + JSON.stringify(await w.evaluate(() => window.roboDesktop.info())));
ok(await w.evaluate(() => fetch('https://roboegypt.com/', { mode: 'no-cors' }).then(() => false, () => true)), 'internet is blocked for this test');
ok((await w.$$('.card')).length === 10, 'home screen shows 9 labs + the Journey');
await w.screenshot({ path: shots + '/home.png' });

const drv = await w.evaluate(() => window.roboDesktop.arduino.driver());
if (process.platform === 'win32') ok(drv.needed === true && drv.available === true, 'CH340 driver bundled (installed on this machine: ' + drv.installed + ')');
else ok(drv.needed === false, 'no driver needed on ' + process.platform);

for (const [path, name] of [['/lab/junior.html', 'Robo Junior'], ['/lab/ai.html', 'AI'], ['/lab/circuits.html', 'Robo Circuits'], ['/lab/arduino.html', 'Robo Maker'],
  ['/lab/3d.html', 'Robo CAD'], ['/lab/web.html', 'Robo Web'], ['/lab/code.html', 'Robo Code']]) {
  // custom-protocol pages give Playwright no response object: check the page itself
  await w.goto('robo://lab' + path).catch(() => {}); await w.waitForTimeout(1500);
  const pg = await w.evaluate(() => ({ iso: crossOriginIsolated, title: document.title, main: !!document.querySelector('main, .jr, .ide, .ard, .circ, .d3') }));
  ok(pg.iso && pg.main && /Robo Egypt/.test(pg.title), name + ' opens (isolated) — ' + pg.title);
}
await w.goto('robo://lab/lab/roboblock?go=free'); await w.waitForTimeout(4000);
ok(await w.evaluate(() => typeof Blockly !== 'undefined' && !!document.querySelector('.blocklySvg')), 'Robo Block loads Blockly offline');
await w.screenshot({ path: shots + '/roboblock.png' });

// the Journey opens on its start screen; without internet its accounts can't load, the page must still work
await w.goto('robo://lab/journey.html').catch(() => {}); await w.waitForTimeout(3000);
ok(await w.evaluate(() => !!document.getElementById('landing') && !location.pathname.startsWith('/lab/roboblock')), 'the Journey opens');
await w.goto('robo://lab/journey.html?go=login').catch(() => {}); await w.waitForTimeout(1500);
ok(await w.evaluate(() => !!document.getElementById('aForm') && !document.getElementById('gBtn')), 'Journey sign-in: e-mail form, no Google button in the app');

await w.goto('robo://lab/lab/python.html'); await w.waitForTimeout(1500);
await w.click('#runBtn');
let py = false; for (let i = 0; i < 60 && !py; i++) { await w.waitForTimeout(1000); py = await w.evaluate(() => { const f = document.getElementById('inForm'); return !!f && !f.hidden; }); }
ok(py, 'Python runs offline (waits for input())');
await w.screenshot({ path: shots + '/python.png' });

await w.goto('robo://lab/lab/arduino.html'); await w.waitForTimeout(2000);
ok(await w.isVisible('#upBtn'), 'Robo Maker shows «upload to Arduino»');
for (const board of ['uno', 'nanoOld', 'mega']) {
  const r = await w.evaluate(([board, PORT]) => window.roboDesktop.arduino.upload({ board, port: PORT,
    code: '#include <Servo.h>\nServo s;\nvoid setup(){pinMode(13,OUTPUT);s.attach(9);}\nvoid loop(){digitalWrite(13,HIGH);delay(300);digitalWrite(13,LOW);delay(300);}\n' }, () => {}), [board, PORT]);
  ok(r.stage === 'upload' && r.why === 'noport', board + ': compiles, upload to a missing port says «board not found» (' + r.stage + '/' + r.why + ')');
}
const bad = await w.evaluate((PORT) => window.roboDesktop.arduino.upload({ board: 'uno', port: PORT, code: 'void setup(){\n  pinMode(13,OUTPUT)\n}\nvoid loop(){}\n' }, () => {}), PORT);
ok(bad.why === 'compile' && bad.line === 3, 'a code mistake is reported with its line (' + bad.line + ')');
const ports = await w.evaluate(() => window.roboDesktop.arduino.ports());
ok(ports.ok, 'port scan works (' + ports.ports.length + ' ports)');

ok(errs.filter((e) => !/WebGL/.test(e)).length === 0, 'no page errors' + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : ''));
await app.close().catch(() => {});
console.log('[' + label + '] ' + (fails.length ? fails.length + ' FAILED' : 'all passed'));
process.exit(fails.length ? 1 : 0);
