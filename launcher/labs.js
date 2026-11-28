// The labs in the app («روبو لاب»), in the same order as roboegypt.com/lab/ (lib/site.ts → LABS). Links end in .html: the
// Android app serves files as they are (no pretty paths). A lab the website adds is copied by scripts/sync-site.mjs on its own;
// add its card here (sync-site.mjs warns until it is).
// [address, picture, Arabic name, Arabic line, colour, English name, English line]
window.ROBO_LABS = [
  ['/lab/junior.html', 'v2/junior', 'روبو جونيور', 'من ٥ سنوات: برمجة بالصور والأيقونات، حرّك الشخصيات واصنع قصة.', '#E06A00', 'Robo Junior', 'From age 5: code with pictures and icons, move the characters and make a story.'],
  ['/lab/roboblock.html?go=free', 'v2/block', 'روبو بلوك', 'اسحب البلوكات واصنع ألعابًا وقصصًا ورسومًا متحركة مع روبو.', '#6E33E0', 'Robo Block', 'Drag blocks to make games, stories and animations with Robo.'],
  ['/lab/painter.html', 'v2/painter', 'روبو الرسام', 'ارسم ولوّن بالفرشاة والأشكال، واحفظ رسمتك صورة.', '#D9468F', 'Robo Painter', 'Draw and colour with brushes, shapes and templates, and save your picture.'],
  ['/lab/montage.html', 'v2/montage', 'روبو المونتير', 'اصنع فيديو من صورك: طبقات ونصوص وأشكال وانتقالات ومؤثرات صوتية.', '#E0457B', 'Robo Montage', 'Make videos from your pictures: layers, text, shapes, transitions, voice and sound effects.'],
  ['/lab/apps.html', 'v2/apps', 'روبو تطبيقات', 'صمّم تطبيق موبايل بالأزرار والصور، وبرمجه بالبلوكات، وثبّته على هاتفك.', '#4C97FF', 'Robo Apps', 'Design a phone app with buttons and pictures, program it with blocks, and install it on your phone.'],
  ['/lab/ai.html', 'v2/ai', 'مختبر الذكاء الاصطناعي', 'درّب الكمبيوتر ليفرّق بين الرسومات والصور والجمل، واصنع روبوت محادثة.', '#7A2FE0', 'AI Lab', 'Teach the computer to tell drawings, pictures and sentences apart, and make a chatbot.'],
  ['/lab/circuits.html', 'v2/circuits', 'روبو سيركتس', 'بطاريات ومصابيح ومقاومات ومكثفات وترانزستور. شاهد التيار وهو يسري.', '#C2410C', 'Robo Circuits', 'Batteries, bulbs, resistors, capacitors and transistors. Watch the current flow.'],
  ['/lab/arduino.html', 'v2/maker', 'روبو ميكر', 'الأردوينو والروبوتات: وصّل وبرمج بالبلوكات أو بالكود.', '#0B8A60', 'Robo Maker', 'Arduino and robots: wire them and program with blocks or code.'],
  ['/lab/3d.html', 'v2/cad', 'روبو كاد', 'صمّم أشكالًا ثلاثية الأبعاد بالمليمتر، وصدّر ملف STL للطباعة.', '#1E5BD8', 'Robo CAD', 'Design 3D shapes in millimetres and export an STL file to print.'],
  ['/lab/web.html', 'v2/web', 'روبو ويب', 'صمّم مواقع بـ HTML و CSS و JavaScript.', '#1A8A34', 'Robo Web', 'Build websites with HTML, CSS and JavaScript.'],
  ['/lab/python.html', 'v2/python', 'روبو بايثون', 'اكتب كود Python واصنع برامج وألعابًا.', '#2557C9', 'Robo Python', 'Write Python code and make programs and games.'],
  ['/lab/code.html', 'v2/code', 'روبو كود', 'Python و JavaScript و C و HTML/CSS و SQL و Lua في مكان واحد.', '#0F766E', 'Robo Code', 'Python, JavaScript, C, HTML/CSS, SQL and Lua in one place.'],
];
