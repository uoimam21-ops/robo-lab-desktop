// The labs in the app («روبو لاب»), in the same order as roboegypt.com/lab/ (lib/site.ts → LABS). One list for the labs page
// (launcher.js) and the home card's count (home.js). Links end in .html: the Android app serves files as they are (no pretty paths).
// A lab the website adds is copied by scripts/sync-site.mjs on its own; add its card here (sync-site.mjs warns until it is).
window.ROBO_LABS = [
  ['/lab/junior.html', 'v2/junior', 'روبو جونيور', 'من ٥ سنوات: برمجة بالصور والأيقونات، حرّك الشخصيات واصنع قصة.', '#E06A00'],
  ['/lab/roboblock.html?go=free', 'v2/block', 'روبو بلوك', 'اسحب البلوكات واصنع ألعابًا وقصصًا ورسومًا متحركة مع روبو.', '#6E33E0'],
  ['/lab/painter.html', 'v2/painter', 'روبو الرسام', 'ارسم ولوّن بالفرشاة والأشكال، واحفظ رسمتك صورة.', '#D9468F'],
  ['/lab/montage.html', 'v2/montage', 'روبو المونتير', 'اصنع فيديو من صورك وفيديوهاتك: نصوص وأصوات وانتقالات ومؤثرات.', '#E0457B'],
  ['/lab/apps.html', 'v2/apps', 'روبو تطبيقات', 'صمّم تطبيق موبايل بالأزرار والصور، وبرمجه بالبلوكات، وثبّته على هاتفك.', '#4C97FF'],
  ['/lab/ai.html', 'v2/ai', 'مختبر الذكاء الاصطناعي', 'درّب الكمبيوتر ليفرّق بين الرسومات والصور والجمل، واصنع روبوت محادثة.', '#7A2FE0'],
  ['/lab/circuits.html', 'v2/circuits', 'روبو سيركتس', 'بطاريات ومصابيح ومقاومات ومكثفات وترانزستور. شاهد التيار وهو يسري.', '#C2410C'],
  ['/lab/arduino.html', 'v2/maker', 'روبو ميكر', 'الأردوينو والروبوتات: وصّل وبرمج بالبلوكات أو بالكود.', '#0B8A60'],
  ['/lab/3d.html', 'v2/cad', 'روبو كاد', 'صمّم أشكالًا ثلاثية الأبعاد بالمليمتر، وصدّر ملف STL للطباعة.', '#1E5BD8'],
  ['/lab/web.html', 'v2/web', 'روبو ويب', 'صمّم مواقع بـ HTML و CSS و JavaScript.', '#1A8A34'],
  ['/lab/python.html', 'v2/python', 'روبو بايثون', 'اكتب كود Python واصنع برامج وألعابًا.', '#2557C9'],
  ['/lab/code.html', 'v2/code', 'روبو كود', 'Python و JavaScript و C و HTML/CSS و SQL و Lua في مكان واحد.', '#0F766E'],
];
// Arabic-Indic digits for the counts («١٢ مختبرًا»)
window.roboNum = (n) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
