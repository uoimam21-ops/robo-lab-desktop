// «روبو لاب»: the labs page (16 Nov 2026: the same new 3D icons and Robo Lab logo as roboegypt.com/lab/) of the «رحلة روبو» app (the app opens on the journey; this page is in its menu). Same labs as
// roboegypt.com/lab/ (lib/site.ts → LABS). Robo Block opens its own page.
// Links end in .html: the Android app serves files as they are (no pretty paths).
// [address, picture, Arabic name, Arabic line, colour, English name, English line] (English: 21 Nov 2026)
const LABS = [
  ['/lab/junior.html', 'v2/junior', 'روبو جونيور', 'من ٥ سنين: برمجة بالصور والأيقونات، وحرّك الشخصيات واعمل قصة.', '#E06A00', 'Robo Junior', 'From age 5: code with pictures and icons, move the characters and make a story.'],
  ['/lab/roboblock.html?go=free', 'v2/block', 'روبو بلوك', 'اسحب البلوكات واعمل ألعاب وقصص وأنيميشن بشخصية روبو.', '#6E33E0', 'Robo Block', 'Drag blocks to make games, stories and animations with Robo.'],
  ['/lab/painter.html', 'v2/painter', 'روبو الرسام', 'ارسم ولوّن بالفرشاة والأشكال، واحفظ رسمتك صورة.', '#D9468F', 'Robo Painter', 'Draw and colour with brushes, shapes and templates, and save your picture.'],
  ['/lab/ai.html', 'v2/ai', 'مختبر الذكاء الاصطناعي', 'درّب الكمبيوتر يفرّق بين الرسومات والصور والجمل، واعمل شات بوت.', '#7A2FE0', 'AI Lab', 'Teach the computer to tell drawings, pictures and sentences apart, and make a chatbot.'],
  ['/lab/circuits.html', 'v2/circuits', 'روبو سيركتس', 'بطاريات ولمبات ومقاومات ومكثفات وترانزستور. شوف التيار وهو بيجري.', '#C2410C', 'Robo Circuits', 'Batteries, bulbs, resistors, capacitors and transistors. Watch the current flow.'],
  ['/lab/arduino.html', 'v2/maker', 'روبو ميكر', 'الأردوينو والروبوتات: وصّل وبرمج بالبلوكات أو بالكود.', '#0B8A60', 'Robo Maker', 'Arduino and robots: wire them and program with blocks or code.'],
  ['/lab/3d.html', 'v2/cad', 'روبو كاد', 'صمّم أشكال 3D بالملّي، وصدّر ملف STL للطباعة.', '#1E5BD8', 'Robo CAD', 'Design 3D shapes in millimetres and export an STL file to print.'],
  ['/lab/web.html', 'v2/web', 'روبو ويب', 'صمّم مواقع بـ HTML و CSS و JavaScript.', '#1A8A34', 'Robo Web', 'Build websites with HTML, CSS and JavaScript.'],
  ['/lab/python.html', 'v2/python', 'روبو بايثون', 'اكتب كود Python واعمل برامج وألعاب.', '#2557C9', 'Robo Python', 'Write Python code and make programs and games.'],
  ['/lab/code.html', 'v2/code', 'روبو كود', 'Python و JavaScript و HTML/CSS و SQL و Lua في مكان واحد.', '#0F766E', 'Robo Code', 'Python, JavaScript, HTML/CSS, SQL and Lua in one place.'],
  ['/lab/montage.html', 'v2/montage', 'روبو المونتير', 'اعمل فيديو من صورك: طبقات وكلام وأشكال وانتقالات ومؤثرات صوتية.', '#E0457B', 'Robo Montage', 'Make videos from your pictures: layers, text, shapes, transitions, voice and sound effects.'],
];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function paintLabs() {
  const en = !!(window.roboPrefs && roboPrefs.en());
  document.title = (en ? 'Robo Lab | Robo Journey' : 'روبو لاب | رحلة روبو');
  document.getElementById('labs').innerHTML = LABS.map(([href, img, name, desc, c, eName, eDesc]) =>
    '<li><a class="card" href="' + href + '" style="--c:' + c + '"><img src="/assets/labs/' + img + '.webp" alt="" width="485" height="410">' +
    '<b>' + esc(en ? eName : name) + '</b><small>' + esc(en ? eDesc : desc) + '</small><span class="go">' + (en ? 'Open →' : 'افتح ←') + '</span></a></li>').join('');
}
paintLabs(); document.addEventListener('robo-lang', paintLabs); addEventListener('storage', (e) => { if (e.key === 'robo-lang') paintLabs(); });
const net = () => { document.getElementById('net').hidden = navigator.onLine; };
addEventListener('online', net); addEventListener('offline', net); net();
if (window.roboDesktop) window.roboDesktop.info().then((i) => { document.getElementById('ver').textContent = 'v' + i.version + (i.electron.startsWith('22.') ? ' · Windows 7' : ''); });

// first visit to the labs on Windows: offer the CH340 USB driver (needed to upload to most Uno/Nano boards) until it's installed
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
