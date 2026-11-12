// Smoke test of an INSTALLED «رحلة روبو» (Robo Journey) app (run in CI on Windows after the silent install).
// Usage: node tests/smoke.mjs "<path to Robo Journey.exe>" <label>
// Checks, with the internet blocked: the app opens on the journey, the labs page, every lab opens, Python runs, Robo Block loads,
// the Arduino toolchain compiles (upload to a missing port must fail at the upload step), and the USB-driver check works.
import { _electron } from 'playwright';
import { mkdirSync } from 'node:fs';

const [exe, label = 'app'] = process.argv.slice(2);
const PORT = process.platform === 'win32' ? 'COM99' : '/dev/cu.robo-missing';   // a port that isn't there
const shots = 'test-results/' + label; mkdirSync(shots, { recursive: true });
let last = 'start';
const fails = [], ok = (c, m) => { last = m; console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails.push(m); };
// a test that hangs must fail, not keep the CI machine busy for hours: stop after 20 minutes and say where it was
setTimeout(() => { console.log('  ✗ the test took more than 30 minutes; last step: ' + last); process.exit(1); }, 30 * 60e3).unref();
// one Arduino compile + upload attempt may take a few minutes the first time (Rosetta on Apple Silicon); the app itself stops
// a compile after 6 minutes and an upload after 2, so 7 minutes here means the app didn't answer at all
const within = (p, ms, what) => Promise.race([p, new Promise((r) => setTimeout(() => r({ stage: 'timeout', why: what + ' took more than ' + ms / 60e3 + ' min' }), ms))]);

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
ok(await w.evaluate(() => location.pathname === '/journey' && !!document.getElementById('landing')), 'the app opens on the journey');
ok(await w.evaluate(() => { const b = document.getElementById('labBtn'); return !!b && !b.hidden && /روبو لاب/.test(b.textContent); }), 'the journey menu has «روبو لاب»');
await w.screenshot({ path: shots + '/home.png' });
await w.evaluate(() => document.getElementById('labBtn').click()); await w.waitForTimeout(1500);
ok((await w.$$('.card')).length === 9 && !!(await w.$('a.back[href="/journey.html"]')), 'the labs page («روبو لاب») shows the 9 labs and a way back to the journey');
await w.screenshot({ path: shots + '/labs.png' });

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
  const r = await within(w.evaluate(([board, PORT]) => { window.__ardLog = []; return window.roboDesktop.arduino.upload({ board, port: PORT,
    code: '#include <Servo.h>\nServo s;\nvoid setup(){pinMode(13,OUTPUT);s.attach(9);}\nvoid loop(){digitalWrite(13,HIGH);delay(300);digitalWrite(13,LOW);delay(300);}\n' }, (l) => window.__ardLog.push(l)); }, [board, PORT]), 7 * 60e3, board);
  if (!(r.stage === 'upload' && r.why === 'noport')) console.log('    last lines: ' + JSON.stringify(await w.evaluate(() => (window.__ardLog || []).slice(-6)).catch(() => [])));
  ok(r.stage === 'upload' && r.why === 'noport', board + ': compiles, upload to a missing port says «board not found» (' + r.stage + '/' + r.why + ')');
}
const bad = await within(w.evaluate((PORT) => window.roboDesktop.arduino.upload({ board: 'uno', port: PORT, code: 'void setup(){\n  pinMode(13,OUTPUT)\n}\nvoid loop(){}\n' }, () => {}), PORT), 5 * 60e3, 'compile error check');
ok(bad.why === 'compile' && bad.line === 3, 'a code mistake is reported with its line (' + bad.line + ')');
const ports = await w.evaluate(() => window.roboDesktop.arduino.ports());
ok(ports.ok, 'port scan works (' + ports.ports.length + ' ports)');

ok(errs.filter((e) => !/WebGL/.test(e)).length === 0, 'no page errors' + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : ''));
await app.close().catch(() => {});
console.log('[' + label + '] ' + (fails.length ? fails.length + ' FAILED' : 'all passed'));
process.exit(fails.length ? 1 : 0);
