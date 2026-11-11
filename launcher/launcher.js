// The labs, as on roboegypt.com/lab/ (lib/site.ts → LABS). Robo Block opens its own page.
const LABS = [
  ['/lab/junior.html', 'junior', 'روبو جونيور', 'من ٥ سنين: برمجة بالصور والأيقونات، وحرّك الشخصيات واعمل قصة.', '#E06A00'],
  ['/lab/roboblock?go=free', 'block', 'روبو بلوك', 'اسحب البلوكات واعمل ألعاب وقصص وأنيميشن بشخصية روبو.', '#6E33E0'],
  ['/lab/ai.html', 'ai', 'مختبر الذكاء الاصطناعي', 'درّب الكمبيوتر يفرّق بين الرسومات والصور والجمل، واعمل شات بوت.', '#7A2FE0'],
  ['/lab/circuits.html', 'robo-circuits', 'Robo Circuits', 'بطاريات ولمبات ومقاومات ومكثفات وترانزستور. شوف التيار وهو بيجري.', '#C2410C'],
  ['/lab/arduino.html', 'robo-maker', 'Robo Maker', 'الأردوينو والروبوتات: وصّل وبرمج بالبلوكات أو بالكود.', '#0B8A60'],
  ['/lab/3d.html', 'cad', 'روبو كاد', 'صمّم أشكال 3D بالملّي، وصدّر ملف STL للطباعة.', '#1E5BD8'],
  ['/lab/web.html', 'web', 'روبو ويب', 'صمّم مواقع بـ HTML و CSS و JavaScript.', '#1A8A34'],
  ['/lab/python.html', 'python', 'روبو بايثون', 'اكتب كود Python واعمل برامج وألعاب.', '#2557C9'],
  ['/lab/code.html', 'robo-code', 'روبو كود', 'Python و JavaScript و HTML/CSS و SQL و Lua في مكان واحد.', '#0F766E'],
];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
document.getElementById('labs').innerHTML = LABS.map(([href, img, name, desc, c]) =>
  '<li><a class="card" href="' + href + '" style="--c:' + c + '"><img src="/assets/labs/' + img + '.webp" alt="" width="485" height="410">' +
  '<b>' + esc(name) + '</b><small>' + esc(desc) + '</small><span class="go">افتح ←</span></a></li>').join('');
const net = () => { document.getElementById('net').hidden = navigator.onLine; };
addEventListener('online', net); addEventListener('offline', net); net();
if (window.roboDesktop) window.roboDesktop.info().then((i) => { document.getElementById('ver').textContent = 'v' + i.version + (i.electron.startsWith('22.') ? ' · Windows 7' : ''); });

// first launch on Windows: offer the CH340 USB driver (needed to upload to most Uno/Nano boards) until it's installed
(function driverPrompt() {
  const A = window.roboDesktop && window.roboDesktop.arduino;
  if (!A || !A.driver) return;
  const K = 'robo-drv-ask';
  let pref = ''; try { pref = localStorage.getItem(K) || ''; } catch (_) {}
  if (pref === 'never' || (pref && +pref > Date.now())) return;
  A.driver().then((d) => {
    if (!d || !d.needed || d.installed || !d.available) return;
    const $ = (id) => document.getElementById(id), note = (t, c) => { $('drvNote').textContent = t; $('drvNote').className = 'note ' + (c || ''); };
    const close = () => { $('drv').hidden = true; };
    $('drv').hidden = false; $('drvGo').focus();
    $('drvLater').onclick = () => { try { localStorage.setItem(K, String(Date.now() + 3 * 864e5)); } catch (_) {} close(); };   // ask again in 3 days
    $('drvNever').onclick = () => { try { localStorage.setItem(K, 'never'); } catch (_) {} close(); };
    $('drvGo').onclick = async () => {
      const r = await A.installDriver();
      if (!r.ok) { note('مقدرتش أفتح برنامج التثبيت. جرّب تاني، أو اطلب من المدرّب.', 'bad'); return; }
      note('اتفتح برنامج التثبيت… كمّل فيه، وبعد ما يخلص دوس «خلصت».');
      $('drvGo').textContent = '✓ خلصت';
      $('drvGo').onclick = async () => {
        const d2 = await A.driver();
        if (d2.installed) { note('🎉 الدرايفر اتثبّت! تقدر ترفع على الأردوينو من Robo Maker.', 'good'); setTimeout(close, 1800); }
        else note('لسه مش شايف الدرايفر. لو ظهرت رسالة نجاح في برنامج التثبيت، وصّل البوردة وجرّب، أو دوس «ثبّت» تاني.', 'bad');
      };
    };
  }).catch(() => {});
})();
