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
