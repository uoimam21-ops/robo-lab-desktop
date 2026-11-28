import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css            */import{P as nt,k as H,x as dt,u as ot,r as z,E as J,b as ut,c as ht,d as pt,i as mt,e as gt}from"./index-3AuamFDQ.js";import{s as bt}from"./split-DJAd-vnY.js";import{c as ft,h as yt}from"./index-DfO21ISx.js";import{j as xt}from"./index-B8nDxooR.js";import{p as kt}from"./acorn-DkYm1ITT.js";import{t as _t}from"./task-peek-pvl45LCS.js";import{p as wt}from"./projio-B9MQew-p.js";import{a as vt,T as p,i as N}from"./common-Cu4stVfo.js";import"./lab-tours-DVw_e6oZ.js";import"./kbfix-DXdTXjVo.js";vt({شغّل:"Run","تحديث تلقائي":"Auto refresh","🌐 صفحة ويب":"🌐 Web page","⌨ JavaScript بس":"⌨ JavaScript only","اسم المشروع":"Project name","💾 حفظ":"💾 Save","⬇ تحميل":"⬇ Download","أمثلة جاهزة":"Ready examples","✨ أمثلة جاهزة":"✨ Ready examples","🌐 الصفحة":"🌐 Page","↗ تاب جديد":"↗ New tab","🧹 امسح":"🧹 Clear","المشاريع محفوظة على الجهاز ده.":"Projects are saved on this device.","📄 مشروع جديد":"📄 New project","أدوات المحرر":"Editor tools","نوع المشروع":"Project type",الكود:"Code",النتيجة:"Output","افتح الصفحة في تاب جديد":"Open the page in a new tab","معاينة الصفحة":"Page preview","👋 صفحة عني":"👋 About me page",'<h1>أنا اسمي روبو 🤖</h1>\n<p>عندي <b>10</b> سنين وبحب البرمجة والكورة.</p>\n<ul>\n  <li>بحب الرسم 🎨</li>\n  <li>بحب الروبوتات 🦾</li>\n</ul>\n<button id="hello">دوس هنا</button>':`<h1>My name is Robo 🤖</h1>
<p>I am <b>10</b> years old and I love coding and football.</p>
<ul>
  <li>I love drawing 🎨</li>
  <li>I love robots 🦾</li>
</ul>
<button id="hello">Click here</button>`,'const btn = document.getElementById("hello");\n\nbtn.addEventListener("click", function () {\n  btn.textContent = "أهلاً بيك! 🎉";\n  console.log("حد داس على الزرار");\n});':`const btn = document.getElementById("hello");

btn.addEventListener("click", function () {
  btn.textContent = "Welcome! 🎉";
  console.log("Someone clicked the button");
});`,"🎨 زرار بيغيّر اللون":"🎨 A colour-changing button",'<div id="box">غيّرني!</div>\n<button id="go">لون جديد 🎲</button>':`<div id="box">Change me!</div>
<button id="go">New colour 🎲</button>`,"🔢 عدّاد":"🔢 Counter","⭐ لعبة: امسك النجمة":"⭐ Game: catch the star",'<p>النقط: <b id="score">0</b></p>\n<div id="star">⭐</div>':`<p>Score: <b id="score">0</b></p>
<div id="star">⭐</div>`,"✖️ جدول الضرب (Console)":"✖️ Times table (Console)","📦 المصفوفات (Console)":"📦 Arrays (Console)",'const fruits = ["🍎", "🍌", "🍇"];\nfruits.push("🍓");\n\nconsole.log("عندي", fruits.length, "فواكه");\nfor (const f of fruits) {\n  console.log("بحب", f);\n}\nconsole.log(fruits);':`const fruits = ["🍎", "🍌", "🍇"];
fruits.push("🍓");

console.log("I have", fruits.length, "fruits");
for (const f of fruits) {
  console.log("I love", f);
}
console.log(fruits);`,"🔁 لوب مالوش آخر (جرّب)":"🔁 A loop that never ends (try it)","// اللوب ده مش هيخلص لوحده!\n// المحرر هيوقفه ويقولك إيه اللي حصل\nlet i = 0;\nwhile (true) {\n  i++;\n}":`// This loop never ends by itself!
// The editor stops it and tells you what happened
let i = 0;
while (true) {
  i++;
}`,"فيه اسم مش معروف: يمكن متغير أو دالة اتكتبت غلط (JavaScript بيفرّق بين الحروف الكبيرة والصغيرة)، أو استخدمته قبل ما تعمله بـ let.":"An unknown name: maybe a variable or function is misspelled (JavaScript cares about capital and small letters), or you used it before making it with let.","بتستخدم حاجة بطريقة غلط. أشهر سبب: getElementById مش لاقي العنصر، فاتأكد إن الـ id في HTML هو نفسه اللي في JS.":"Something is used the wrong way. The usual reason: getElementById can’t find the element, so check the id in HTML is the same as in JS.",'فيه غلطة في كتابة الكود: يمكن قوس ( أو { ناقص، أو علامة " ناقصة.':'There is a typing mistake in the code: maybe a ( or { is missing, or a ".',"رقم برّه الحدود المسموحة، أو دالة بتنادي نفسها من غير ما تقف.":"A number outside the allowed range, or a function that keeps calling itself.","🔁 لوب مالوش آخر!":"🔁 A loop that never ends!","اللوب فضل شغّال كتير ومخلصش، فوقّفناه عشان الصفحة متهنّجش. اتأكد إن شرط اللوب بيبقى false في الآخر (زي i++).":"The loop kept running and never finished, so we stopped it to keep the page from freezing. Make sure the loop’s condition becomes false in the end (like i++).","حصلت غلطة":"An error happened",صفحتي:"My page","💾 اتحفظ":"💾 Saved","مقدرتش أحفظ على الجهاز ده":"Could not save on this device",مشروع:"Project","<h1>صفحة جديدة</h1>":"<h1>New page</h1>","صفحة ويب":"Web page",'<li class="empty">لسه مفيش مشاريع</li>':'<li class="empty">No projects yet</li>',"متأكد؟":"Sure?","مثال محلول: صفحة عني 👀":"Solved example: about me page 👀","الصفحة جاهزة: HTML بيعمل المحتوى، و CSS بيلوّنه، و JS بيخلّي الزرار يشتغل. اتفرّج على التلات تابات، وغيّر اسم روبو للاسم بتاعك.":"The page is ready: HTML makes the content, CSS colours it and JS makes the button work. Look at the three tabs and change Robo’s name to yours.","العنوان والفقرة":"Heading and paragraph","اكتب عنوان كبير باسمك بـ <h1>، وتحته فقرة بـ <p> فيها جملة عنك. كل tag بيتفتح <p> ويتقفل </p>.":"Write a big heading with your name using <h1>, and under it a paragraph with <p> with a sentence about you. Every tag opens <p> and closes </p>.","<!-- اكتب الصفحة هنا -->":"<!-- write the page here -->",القوائم:"Lists","اعمل قائمة بأكتر 3 أكلات بتحبها: <ul> وجواها 3 <li>.":"Make a list of your 3 favourite foods: <ul> with 3 <li> inside.","<h1>أكلاتي المفضلة</h1>":"<h1>My favourite foods</h1>","صورة ولينك":"Image and link",'حط صورة بـ <img src="..." alt="..."> (جرّب https://roboegypt.com/assets/logo-light.png)، ولينك بـ <a href="https://roboegypt.com">Robo Egypt</a>.':'Add an image with <img src="..." alt="..."> (try https://roboegypt.com/assets/logo-light.png), and a link with <a href="https://roboegypt.com">Robo Egypt</a>.',"<h1>صفحتي</h1>":"<h1>My page</h1>","مشروع: صفحة عن نفسي 🏆":"Project: a page about me 🏆","اعمل صفحة عنك: عنوان <h1> باسمك، وفقرة <p>، وقائمة فيها 3 حاجات بتحبها، ولينك لموقع بتحبه.":"Make a page about you: an <h1> heading with your name, a <p> paragraph, a list of 3 things you love, and a link to a site you like.","<!-- صفحة عني -->":"<!-- about me page -->","مثال محلول: CSS بيلوّن 👀":"Solved example: CSS colours 👀","CSS بيقول لكل حاجة شكلها إيه: body ليه خلفية، و h1 ليه لون وحجم. افتح تاب CSS وغيّر الألوان.":"CSS tells each thing how it looks: body has a background, h1 has a colour and size. Open the CSS tab and change the colours.","<h1>Robo Egypt</h1>\n<p>أنا بتعلّم CSS!</p>":`<h1>Robo Egypt</h1>
<p>I am learning CSS!</p>`,"لوّن العنوان":"Colour the heading","من تاب CSS: خلّي العنوان h1 بلون غير الأسود (color) وحجمه 40px أو أكبر (font-size).":"In the CSS tab: make the h1 heading a colour other than black (color) and 40px or bigger (font-size).","<h1>Robo Egypt</h1>\n<p>أكاديمية البرمجة والروبوتات</p>":`<h1>Robo Egypt</h1>
<p>The coding and robotics academy</p>`,"الصندوق: padding و border":"The box: padding and border","خلّي .box ليه مسافة جوه padding: 20px أو أكتر، وإطار border بسُمك 3px أو أكتر، وحواف مدوّرة border-radius.":"Give .box space inside with padding: 20px or more, a border 3px or thicker, and rounded corners with border-radius.",'<div class="box">أنا صندوق 📦</div>':'<div class="box">I am a box 📦</div>',"Flexbox: جنب بعض":"Flexbox: side by side","الكروت التلاتة تحت بعض. خلّيهم جنب بعض بـ display: flex على .row، وزوّد مسافة بينهم بـ gap.":"The three cards are on top of each other. Put them side by side with display: flex on .row, and add space between them with gap.","🔧 صلّح الـ 3 أخطاء: CSS":"🔧 Fix the 3 bugs: CSS","الـ CSS ده فيه 3 أخطاء مستخبية، فالشكل مش طالع زي المطلوب. المطلوب: العنوان أحمر، والفقرة حجمها 24px، والصندوق أزرق وجواه مسافة 20px.":"This CSS has 3 hidden bugs, so the page doesn’t look as it should. Goal: the heading is red, the paragraph is 24px, and the box is blue with 20px of space inside.","مشروع: كارت لاعب 🏆":"Project: a player card 🏆","اعمل كارت للاعب بتحبه أو لنفسك: .card فيه اسم واسم الفريق، وليه خلفية، و padding، وحواف مدوّرة، والاسم بلون مختلف.":"Make a card for a player you like or for yourself: .card with a name and a team name, a background, padding, rounded corners, and the name in a different colour.","مثال محلول: الزرار بيتكلم 👀":"Solved example: the talking button 👀","لما تدوس الزرار، JavaScript بيغيّر الكلام اللي عليه. اقرا تاب JS: getElementById بيجيب الزرار، و onclick بيقول هيحصل إيه لما يتداس.":"When you click the button, JavaScript changes its words. Read the JS tab: getElementById gets the button, and onclick says what happens when it is clicked.",'<button id="hello">دوس هنا</button>':'<button id="hello">Click here</button>','const btn = document.getElementById("hello");\n\nbtn.onclick = function () {\n  btn.textContent = "أهلاً بيك! 🎉";\n};':`const btn = document.getElementById("hello");

btn.onclick = function () {
  btn.textContent = "Welcome! 🎉";
};`,"المتغيرات و console.log":"Variables and console.log","اعمل متغير name فيه اسمك، ومتغير age فيه سنك (بـ let)، واطبعهم في الـ Console بـ console.log.":"Make a variable name with your name and a variable age with your age (with let), and print them in the Console with console.log.","// اكتب الكود هنا":"// write your code here","العدّاد ➕":"The counter ➕","لما تدوس ➕ الرقم يزيد 1. اعمل متغير count، ولما الزرار plus يتداس: زوّد count واكتبه في num بـ textContent.":"When you click ➕ the number goes up by 1. Make a variable count, and when the plus button is clicked: add 1 to count and write it in num with textContent.","زرار بيغيّر اللون 🎨":"A colour-changing button 🎨","لما زرار go يتداس، غيّر لون خلفية box بـ box.style.background.":"When the go button is clicked, change the background colour of box with box.style.background.",'<div id="box"></div>\n<button id="go">غيّر اللون</button>':`<div id="box"></div>
<button id="go">Change the colour</button>`,"🔧 صلّح الـ 3 أخطاء: JavaScript":"🔧 Fix the 3 bugs: JavaScript","الكود ده فيه 3 أخطاء مستخبية! دوس على الزرار، واقرا رسالة الخطأ في الـ Console. المطلوب: كل ما تدوس +1 الرقم يزيد 1 (1، 2، 3…).":"This code has 3 hidden bugs! Click the button and read the error in the Console. Goal: every click on +1 makes the number go up by 1 (1, 2, 3…).","مشروع: امسك النجمة ⭐🏆":"Project: catch the star ⭐🏆","لعبة! كل ما تدوس على النجمة: السكور يزيد 1، والنجمة تتنقل لمكان عشوائي (style.left و style.top مع Math.random).":"A game! Every time you click the star: the score goes up by 1 and the star jumps to a random place (style.left and style.top with Math.random).","محتاج عنوان <h1> فيه كلام.":"You need an <h1> heading with words in it.","محتاج فقرة <p> فيها جملة.":"You need a <p> paragraph with a sentence in it.","محتاج قائمة <ul>.":"You need a <ul> list.","القائمة محتاجة 3 عناصر <li> على الأقل.":"The list needs at least 3 <li> items.",'محتاج صورة <img src="...">.':'You need an <img src="..."> image.','محتاج لينك <a href="...">.':'You need an <a href="..."> link.',"اكتب كلام جوه اللينك.":"Write some words inside the link.","غيّر لون العنوان بـ color.":"Change the heading’s colour with color.","كبّر العنوان: font-size 40px أو أكتر.":"Make the heading bigger: font-size 40px or more.","زوّد padding.":"Add padding.","زوّد إطار border بسُمك 3px على الأقل.":"Add a border at least 3px thick.","دوّر الحواف بـ border-radius.":"Round the corners with border-radius.","استخدم display: flex على .row.":"Use display: flex on .row.","الكروت لازم تبقى جنب بعض.":"The cards must be side by side.","لسه فيه أخطاء! قارن الشكل بالمطلوب.":"There are still bugs! Compare the page with the goal.",'محتاج عنصر class="card".':'You need an element with class="card".',"ادّي الكارت لون خلفية.":"Give the card a background colour.","لوّن الاسم بلون غير الأسود.":"Colour the name with a colour other than black.","الزرار مش موجود: اتأكد من الـ id.":"The button is missing: check the id.","الكلام لازم يتغيّر لما الزرار يتداس.":"The words must change when the button is clicked.","اطبع حاجتين على الأقل بـ console.log.":"Print at least two things with console.log.","لما تدوس 3 مرات الرقم لازم يبقى 3.":"After 3 clicks the number must be 3.","اللون لازم يتغيّر لما الزرار يتداس.":"The colour must change when the button is clicked.",'النجمة مش موجودة: id="star".':'The star is missing: id="star".',"كل ضغطة على النجمة لازم تزوّد السكور 1.":"Every click on the star must add 1 to the score.","النجمة لازم تتنقل لمكان تاني لما تتداس.":"The star must jump to another place when clicked.","تدريب: جدول (table)":"Practice: a table","تدريب: اصنع جدولًا لدرجاتك: <table>، وفيه صف عناوين بـ <th> (المادة والدرجة)، ثم 3 صفوف <tr> على الأقل، وكل خانة بـ <td>.":"Practice: make a table of your marks: <table>, with a header row using <th> (subject and mark), then at least 3 <tr> rows, each cell with <td>.","<h1>درجاتي</h1>":"<h1>My marks</h1>","🔧 أصلح خطأً واحدًا: الوسم المفتوح":"🔧 Fix one bug: the open tag","كل الصفحة صارت عنوانًا كبيرًا! وسم <h1> لم يُغلق: الإغلاق يحتاج / هكذا </h1>.":"The whole page became a big heading! The <h1> tag was not closed: closing needs a / like this </h1>.","تدريب: شبكة 2 × 2 (Grid)":"Practice: a 2 × 2 grid","تدريب: اجعل الكروت الأربعة شبكة من عمودين: display: grid و grid-template-columns: 1fr 1fr على .grid، ومسافة gap بينها.":"Practice: make the four cards a two-column grid: display: grid and grid-template-columns: 1fr 1fr on .grid, with a gap between them.","🔧 أصلح خطأً واحدًا: flex في المكان الخطأ":"🔧 Fix one bug: flex in the wrong place","الكروت ما زالت تحت بعضها! display: flex وُضع على .card، لكنه يجب أن يكون على الصندوق الذي يحملها.":"The cards are still on top of each other! display: flex was put on .card, but it must be on the box that holds them.","تدريب: العدّ التنازلي ➖":"Practice: the countdown ➖","تدريب: الرقم يبدأ من 10. كلما ضغطت الزر minus ينقص 1. اصنع متغيّرًا count = 10، وعند الضغط: count = count - 1 واكتبه في num.":"Practice: the number starts at 10. Each click on the minus button takes away 1. Make a variable count = 10, and on click: count = count - 1 and write it in num.","🔧 أصلح خطأً واحدًا: 0111 بدل 3":"🔧 Fix one bug: 0111 instead of 3",'اضغط +1 ثلاث مرات فيظهر 0111 بدل 3! "1" بين علامتين كلام وليس رقمًا، والكلام يلتصق.':'Click +1 three times and 0111 shows instead of 3! "1" in quotes is text, not a number, and text sticks together.',"تدريب: if في JavaScript":"Practice: if in JavaScript","تدريب: count يبدأ من 2، والزر minus ينقص 1. لكن الرقم لا ينزل أبدًا تحت 0: if (count > 0) قبل النقص.":"Practice: count starts at 2 and the minus button takes away 1. But the number never goes below 0: if (count > 0) before taking away.",'let count = 2;\nconst btn = document.getElementById("minus");\n\nbtn.onclick = function () {\n  // only if count > 0 (فقط إذا كان أكبر من 0)\n  count = count - 1;\n  document.getElementById("num").textContent = count;\n};':`let count = 2;
const btn = document.getElementById("minus");

btn.onclick = function () {
  // only if count > 0
  count = count - 1;
  document.getElementById("num").textContent = count;
};`,"تدريب: اقرأ ما يكتبه الزائر ⌨":"Practice: read what the visitor types ⌨","تدريب: اكتب الاسم في خانة name ثم اضغط go، فيظهر في out: Hello, والاسم!. القيمة المكتوبة في الخانة هي .value.":"Practice: type a name in the name box then click go, and Hello, and the name! shows in out. The value typed in the box is .value.",'<input id="name" placeholder="اسمك">\n<button id="go">go</button>\n<h2 id="out"></h2>':`<input id="name" placeholder="Your name">
<button id="go">go</button>
<h2 id="out"></h2>`,"تحدٍّ: قائمة المهام ✅🏆":"Challenge: a to-do list ✅🏆",'تحدٍّ: اكتب مهمة في خانة task واضغط add، فتُضاف إلى القائمة list عنصرًا جديدًا <li>. استعمل document.createElement("li") و appendChild، وامسح الخانة بعد الإضافة.':'Challenge: type a task in the task box and click add, and it is added to the list as a new <li> item. Use document.createElement("li") and appendChild, and clear the box after adding.','<input id="task" placeholder="مهمة جديدة">\n<button id="add">add</button>\n<ul id="list"></ul>':`<input id="task" placeholder="New task">
<button id="add">add</button>
<ul id="list"></ul>`,"اصنع جدولًا بـ <table>.":"Make a table with <table>.","أضف صف عناوين بـ <th>.":"Add a header row with <th>.","أضف 3 صفوف فيها <td> على الأقل.":"Add at least 3 rows with <td>.","أغلق العنوان: </h1>.":"Close the heading: </h1>.","استعمل display: grid على .grid.":"Use display: grid on .grid.","عمودان: grid-template-columns: 1fr 1fr.":"Two columns: grid-template-columns: 1fr 1fr.","بعد 3 ضغطات يجب أن يصير الرقم 7.":"After 3 clicks the number must be 7.","الرقم لا ينزل تحت 0: if (count > 0).":"The number never goes below 0: if (count > 0).","اكتب في out: Hello, والاسم من .value.":"Write in out: Hello, and the name from .value.","كل ضغطة على add تضيف <li> فيه المهمة.":"Every click on add adds an <li> with the task.","🎉 برافو! خلصت":"🎉 Well done! You finished","✨ مشروع":"✨ Project",'const colors = ["tomato", "gold", "mediumseagreen", "dodgerblue", "orchid"];\nconst box = document.getElementById("box");\n\ndocument.getElementById("go").onclick = function () {\n  const i = Math.floor(Math.random() * colors.length);\n  box.style.background = colors[i];\n  console.log("اللون دلوقتي:", colors[i]);\n};':`const colors = ["tomato", "gold", "mediumseagreen", "dodgerblue", "orchid"];
const box = document.getElementById("box");

document.getElementById("go").onclick = function () {
  const i = Math.floor(Math.random() * colors.length);
  box.style.background = colors[i];
  console.log("The colour now:", colors[i]);
};`});const St=nt.highest(H.of([{key:"Mod-d",run:dt,preventDefault:!0}])),Ct=nt.highest(H.of([{key:"Mod-z",run:ot,preventDefault:!0},{key:"Mod-y",run:z,preventDefault:!0},{key:"Mod-Shift-z",run:z,preventDefault:!0}])),o=e=>document.getElementById(e),Tt="٠١٢٣٤٥٦٧٨٩",L=e=>N?String(e):String(e).replace(/\d/g,t=>Tt[t]),f=[{n:"👋 صفحة عني",mode:"page",html:`<h1>أنا اسمي روبو 🤖</h1>
<p>عندي <b>10</b> سنين وبحب البرمجة والكورة.</p>
<ul>
  <li>بحب الرسم 🎨</li>
  <li>بحب الروبوتات 🦾</li>
</ul>
<button id="hello">دوس هنا</button>
`,css:`body {
  font-family: Tahoma, sans-serif;
  background: #EEF3FF;
  text-align: center;
  direction: rtl;
}
h1 {
  color: #5B3DF5;
}
button {
  font-size: 20px;
  padding: 10px 24px;
  border: 0;
  border-radius: 20px;
  background: #18B37E;
  color: white;
}
`,js:`const btn = document.getElementById("hello");

btn.addEventListener("click", function () {
  btn.textContent = "أهلاً بيك! 🎉";
  console.log("حد داس على الزرار");
});
`},{n:"🎨 زرار بيغيّر اللون",mode:"page",html:`<div id="box">غيّرني!</div>
<button id="go">لون جديد 🎲</button>
`,css:`body { font-family: Tahoma; text-align: center; padding-top: 30px; }
#box {
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  border-radius: 30px;
  background: orange;
  display: grid;
  place-items: center;
  font-size: 24px;
  color: white;
  transition: background 0.4s;
}
button { font-size: 20px; padding: 10px 20px; }
`,js:`const colors = ["tomato", "gold", "mediumseagreen", "dodgerblue", "orchid"];
const box = document.getElementById("box");

document.getElementById("go").onclick = function () {
  const i = Math.floor(Math.random() * colors.length);
  box.style.background = colors[i];
  console.log("اللون دلوقتي:", colors[i]);
};
`},{n:"🔢 عدّاد",mode:"page",html:`<h1 id="num">0</h1>
<button id="minus">➖</button>
<button id="plus">➕</button>
`,css:`body { font-family: Tahoma; text-align: center; }
h1 { font-size: 90px; margin: 20px; color: #1E7BFF; }
button { font-size: 32px; width: 80px; height: 80px; border-radius: 50%; border: 0; background: #FFC93C; }
`,js:`let count = 0;
const show = document.getElementById("num");

function update() {
  show.textContent = count;
}

document.getElementById("plus").onclick = function () { count = count + 1; update(); };
document.getElementById("minus").onclick = function () { count = count - 1; update(); };
`},{n:"⭐ لعبة: امسك النجمة",mode:"page",html:`<p>النقط: <b id="score">0</b></p>
<div id="star">⭐</div>
`,css:`body { font-family: Tahoma; margin: 0; height: 100vh; background: #1E1B4B; color: white; overflow: hidden; }
p { font-size: 22px; padding: 10px 16px; margin: 0; }
#star { position: absolute; font-size: 54px; cursor: pointer; user-select: none; }
`,js:`let score = 0;
const star = document.getElementById("star");

function move() {
  star.style.left = Math.random() * (innerWidth - 60) + "px";
  star.style.top = 50 + Math.random() * (innerHeight - 110) + "px";
}

star.onclick = function () {
  score = score + 1;
  document.getElementById("score").textContent = score;
  move();
};

move();
setInterval(move, 1200);
`},{n:"✖️ جدول الضرب (Console)",mode:"js",html:"",css:"",js:`const n = 7;

for (let i = 1; i <= 10; i++) {
  console.log(n + " × " + i + " = " + n * i);
}
`},{n:"📦 المصفوفات (Console)",mode:"js",html:"",css:"",js:`const fruits = ["🍎", "🍌", "🍇"];
fruits.push("🍓");

console.log("عندي", fruits.length, "فواكه");
for (const f of fruits) {
  console.log("بحب", f);
}
console.log(fruits);
`},{n:"🔁 لوب مالوش آخر (جرّب)",mode:"js",html:"",css:"",js:`// اللوب ده مش هيخلص لوحده!
// المحرر هيوقفه ويقولك إيه اللي حصل
let i = 0;
while (true) {
  i++;
}
`}].map(e=>Object.assign({},e,{n:p(e.n),html:e.html&&p(e.html),css:e.css&&p(e.css),js:e.js&&p(e.js)})),W=f[0],Et={html:yt(),css:ft(),js:xt()};let M="html",y="page";const d={html:"",css:"",js:""};function at(e,t){return ut.create({doc:t,extensions:[St,Ct,ht,pt,Et[e],mt.of("  "),H.of([{key:"Mod-Enter",run:()=>(b(),!0)},{key:"Mod-s",run:()=>(m(!0),!0)},gt]),J.updateListener.of(n=>{n.docChanged&&(d[e]=n.state.doc.toString(),Mt())}),J.contentAttributes.of({"aria-label":e.toUpperCase()+" code",spellcheck:"false"})]})}const u=new J({parent:o("editor"),state:at("html","")}),q={};function U(e){["html","css","js"].forEach(t=>{d[t]=e[t]||"",q[t]=at(t,d[t])}),u.setState(q[M])}function _(e){q[M]=u.state,M=e,u.setState(q[e]),document.querySelectorAll("#codeTabs [role=tab]").forEach(t=>t.setAttribute("aria-selected",String(t.dataset.t===e)))}document.querySelectorAll("#codeTabs [role=tab]").forEach(e=>e.onclick=()=>_(e.dataset.t));function T(e){y=e,document.body.classList.toggle("jsOnly",e==="js"),o("mPage").classList.toggle("on",e==="page"),o("mJs").classList.toggle("on",e==="js"),o("mPage").setAttribute("aria-pressed",String(e==="page")),o("mJs").setAttribute("aria-pressed",String(e==="js")),document.querySelectorAll("#codeTabs [data-t=html],#codeTabs [data-t=css]").forEach(t=>t.hidden=e==="js"),e==="js"&&M!=="js"&&_("js")}o("mPage").onclick=()=>{T("page"),m(!1),b()};o("mJs").onclick=()=>{T("js"),m(!1),b()};function it(e){let t;try{t=kt(e,{ecmaVersion:"latest",sourceType:"script",allowReturnOutsideFunction:!0})}catch{return e}const n=[];(function s(r){if(!(!r||typeof r.type!="string")){if(/^(For|While|DoWhile|ForIn|ForOf)Statement$/.test(r.type)){const a=r.body;a.type==="BlockStatement"?n.push([a.start+1,"if(__lp())break;"]):(n.push([a.start,"{if(__lp())break;"]),n.push([a.end,"}"]))}for(const a in r){const h=r[a];a!=="parent"&&(Array.isArray(h)?h.forEach(s):h&&typeof h.type=="string"&&s(h))}}})(t),n.sort((s,r)=>r[0]-s[0]);let l=e;for(const[s,r]of n)l=l.slice(0,s)+r+l.slice(s);return l}let k="";const jt=e=>`(function(){var T=${JSON.stringify(e)};
function f(v){try{if(typeof v==="string")return v;if(v instanceof Error)return v.name+": "+v.message;if(v===undefined)return "undefined";if(typeof v==="function")return "function "+(v.name||"");var s=JSON.stringify(v);return s===undefined?String(v):s}catch(e){return String(v)}}
window.__logs=[];function send(k,a){var x=Array.prototype.map.call(a,f);if(k==="log"||k==="info")window.__logs.push(x.join(" "));try{parent.postMessage({__robo:T,k:k,a:x},"*")}catch(e){}}
window.__q=function(s){return document.querySelector(s)};window.__qa=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};window.__cs=function(el,p){return el?getComputedStyle(el)[p]:""};window.__txt=function(s){var e=document.querySelector(s);return e?e.textContent:""};window.__sleep=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
window.addEventListener("message",function(e){var m=e.data;if(!m||m.__robo!==T||m.k!=="probe")return;var fn;try{fn=new Function("return (async function(){"+m.code+"})()")}catch(err){return parent.postMessage({__robo:T,k:"probe",r:"err"},"*")}
Promise.resolve().then(fn).then(function(r){parent.postMessage({__robo:T,k:"probe",r:r===undefined?null:r},"*")},function(err){parent.postMessage({__robo:T,k:"probe",r:"err"},"*")})});
["log","info","warn","error"].forEach(function(k){var o=console[k];console[k]=function(){send(k,arguments);try{o.apply(console,arguments)}catch(e){}}});
window.addEventListener("error",function(ev){var e=ev.error;parent.postMessage({__robo:T,k:"err",name:e&&e.name||"Error",msg:e&&e.message||ev.message,line:ev.lineno},"*")});
var t0=Date.now(),n=0;setInterval(function(){t0=Date.now()},100);
window.__lp=function(){if(++n%500===0&&Date.now()-t0>1500){t0=Date.now();parent.postMessage({__robo:T,k:"loop"},"*");throw new Error("__ROBO_LOOP__")}return false};
})();`,Bt=e=>e.replace(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi,(t,n,l)=>"<script"+n+">"+it(l)+"<\/script>");let v=0;function A(e){const t=y==="page"?d.css:"",n=y==="page"?d.html:"",l=e?it(d.js):d.js,s='<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'+(e?"<script>"+jt(k)+"<\/script>":"")+(t?`<style>
`+t+`
</style>`:""),r=e?Bt(n):n;let a;if(/<html[\s>]/i.test(r))a=r.replace(/<head([^>]*)>/i,"<head$1>"+s),/<head/i.test(r)||(a=a.replace(/<html([^>]*)>/i,"<html$1><head>"+s+"</head>")),v=a.replace(/<\/body>[\s\S]*$/i,"").split(`
`).length,a=/<\/body>/i.test(a)?a.replace(/<\/body>/i,`<script>
`+l+`
<\/script></body>`):a+`<script>
`+l+`
<\/script>`;else{const h='<!doctype html><html lang="ar" dir="rtl"><head>'+s+`</head><body>
`+r+`
`;v=h.split(`
`).length,a=h+`<script>
`+l+`
<\/script></body></html>`}return a}function b(){k=Math.random().toString(36).slice(2),st(),o("preview").srcdoc=A(!0),m(!1),g&&C&&Ft()}let K=0,C=!1;function Mt(){C=!0,clearTimeout(Q),Q=setTimeout(()=>m(!1),700),o("autoRun").checked&&(clearTimeout(K),K=setTimeout(b,700))}o("runBtn").onclick=()=>{C=!0,b()};o("newWin").onclick=()=>{const e=URL.createObjectURL(new Blob([A(!1)],{type:"text/html"}));window.open(e,"_blank","noopener"),setTimeout(()=>URL.revokeObjectURL(e),6e4)};const x=o("out");let B=0;function $(e,t){const n=document.createElement("div");for(t&&(n.className=t),n.textContent=e,x.appendChild(n),B++;x.childNodes.length>400;)x.firstChild.remove();x.scrollTop=x.scrollHeight,o("cCount").textContent=B?"("+L(B)+")":""}function st(){x.textContent="",B=0,o("cCount").textContent="",o("errBox").hidden=!0}o("clrBtn").onclick=st;const qt={ReferenceError:"فيه اسم مش معروف: يمكن متغير أو دالة اتكتبت غلط (JavaScript بيفرّق بين الحروف الكبيرة والصغيرة)، أو استخدمته قبل ما تعمله بـ let.",TypeError:"بتستخدم حاجة بطريقة غلط. أشهر سبب: getElementById مش لاقي العنصر، فاتأكد إن الـ id في HTML هو نفسه اللي في JS.",SyntaxError:'فيه غلطة في كتابة الكود: يمكن قوس ( أو { ناقص، أو علامة " ناقصة.',RangeError:"رقم برّه الحدود المسموحة، أو دالة بتنادي نفسها من غير ما تقف."};let V=0;addEventListener("message",e=>{const t=e.data;if(!(!t||t.__robo!==k||e.source!==o("preview").contentWindow)){if(t.k==="loop"){Date.now()-V>1e3&&(V=Date.now(),X("🔁 لوب مالوش آخر!","اللوب فضل شغّال كتير ومخلصش، فوقّفناه عشان الصفحة متهنّجش. اتأكد إن شرط اللوب بيبقى false في الآخر (زي i++).",0,""));return}if(t.k==="err"){if(/__ROBO_LOOP__/.test(t.msg))return;const n=t.line&&t.line>v&&t.line-v<=d.js.split(`
`).length?t.line-v:0;$(t.name+": "+t.msg,"e"),X(n?N?"Line "+n+" in JS":"السطر رقم "+L(n)+" في JS":p("حصلت غلطة"),p(qt[t.name]||""),n,t.name+": "+t.msg);return}$(t.a.join(" "),t.k==="error"?"e":t.k==="warn"?"w":t.k==="info"?"i":"")}});function X(e,t,n,l){const s=o("errBox");s.hidden=!1,s.innerHTML="";const r=document.createElement("b");if(r.textContent="🤔 "+e,s.appendChild(r),t&&s.appendChild(document.createTextNode(t+" ")),l){const a=document.createElement("code");a.textContent=l,s.appendChild(a)}if(n){const a=document.createElement("button");a.className="go",a.textContent=N?" → go to the line":" ← روح للسطر",a.onclick=()=>{_("js");const h=u.state.doc.line(Math.min(n,u.state.doc.lines));u.dispatch({selection:{anchor:h.from,head:h.to},scrollIntoView:!0}),u.focus()},s.appendChild(a)}}const rt="robo-lab-web";let c=(()=>{try{return JSON.parse(localStorage.getItem(rt))||null}catch{return null}})()||{cur:null,list:[]};const w=()=>{try{return localStorage.setItem(rt,JSON.stringify(c)),!0}catch{return!1}},P=()=>c.list.find(e=>e.id===c.cur),Y=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);let Q=0;function m(e){if(g)return;let t=P();t||(t={id:Y()},c.list.unshift(t),c.cur=t.id),Object.assign(t,{name:(o("pname").value||"").trim()||p("صفحتي"),mode:y,html:d.html,css:d.css,js:d.js,t:Date.now()});const n=w();e&&It(n?"💾 اتحفظ":"مقدرتش أحفظ على الجهاز ده")}function I(e){const t=c.list.find(n=>n.id===e);t&&(c.cur=e,w(),o("pname").value=t.name,U(t),T(t.mode||"page"),b())}function E(e){P()&&m(!1);const t=e||{n:p("مشروع")+" "+L(c.list.length+1),mode:"page",html:p("<h1>صفحة جديدة</h1>")+`
`,css:`body { font-family: Tahoma; }
`,js:""},n={id:Y(),name:t.n.replace(/^\S+\s/,""),mode:t.mode,html:t.html,css:t.css,js:t.js,t:Date.now()};c.list.unshift(n),w(),I(n.id)}o("pname").addEventListener("change",()=>m(!1));o("saveBtn").onclick=()=>m(!0);f.forEach((e,t)=>{const n=document.createElement("option");n.value=t,n.textContent=e.n,o("examples").appendChild(n)});o("examples").onchange=()=>{const e=f[o("examples").value];o("examples").value="",e&&E(e)};o("dlBtn").onclick=()=>{const e=((o("pname").value||"robo").trim().replace(/[\\/:*?"<>|]+/g,"").replace(/\s+/g,"_")||"robo")+(y==="js"?".js":".html"),t=y==="js"?d.js:A(!1),n=document.createElement("a");n.href=URL.createObjectURL(new Blob([t],{type:y==="js"?"text/javascript":"text/html"})),n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)};function ct(){const e=o("projList");e.innerHTML=c.list.map(t=>'<li class="'+(t.id===c.cur?"cur":"")+'"><span class="nm"><b dir="auto"></b><small>'+(t.mode==="js"?"JavaScript":"صفحة ويب")+'</small></span><button class="btn ghost small" data-open="'+t.id+'">افتح</button><button class="btn ghost small" data-del="'+t.id+'" aria-label="امسح">🗑</button></li>').join("")||'<li class="empty">لسه مفيش مشاريع</li>',e.querySelectorAll("li b").forEach((t,n)=>t.textContent=c.list[n].name),e.querySelectorAll("[data-open]").forEach(t=>t.onclick=()=>{m(!1),I(t.dataset.open),j()}),e.querySelectorAll("[data-del]").forEach(t=>t.onclick=()=>{if(t.dataset.sure!=="1"){t.dataset.sure="1",t.textContent="متأكد؟";return}c.list=c.list.filter(n=>n.id!==t.dataset.del),c.cur===t.dataset.del&&(c.cur=null,c.list.length?I(c.list[0].id):E(W)),w(),ct()})}const j=()=>{o("projModal").hidden=!0};o("myBtn").onclick=()=>{m(!1),ct(),o("projModal").hidden=!1,o("pmClose").focus()};o("pmClose").onclick=j;o("newBtn").onclick=()=>{E(),j()};o("projModal").addEventListener("click",e=>{e.target.id==="projModal"&&j()});addEventListener("keydown",e=>{e.key==="Escape"&&j()});addEventListener("beforeunload",()=>m(!1));let Z=0;function It(e){const t=o("toast");t.textContent=e,t.hidden=!1,clearTimeout(Z),Z=setTimeout(()=>t.hidden=!0,2200)}const i=(e,t,n,l)=>({html:p(e||""),css:p(t||""),js:p(n||""),mode:l||"page"}),G={h0:{t:"مثال محلول: صفحة عني 👀",say:"الصفحة جاهزة: HTML بيعمل المحتوى، و CSS بيلوّنه، و JS بيخلّي الزرار يشتغل. اتفرّج على التلات تابات، وغيّر اسم روبو للاسم بتاعك.",s:i(f[0].html,f[0].css,f[0].js),check:'return !!__q("h1")'},h1:{t:"العنوان والفقرة",say:"اكتب عنوان كبير باسمك بـ <h1>، وتحته فقرة بـ <p> فيها جملة عنك. كل tag بيتفتح <p> ويتقفل </p>.",s:i(`<!-- اكتب الصفحة هنا -->
`,`body { font-family: Tahoma; }
`),check:'const h=__q("h1");if(!h||!h.textContent.trim())return "h1";return __qa("p").some(p=>p.textContent.trim().length>4)||"p";'},h2:{t:"القوائم",say:"اعمل قائمة بأكتر 3 أكلات بتحبها: <ul> وجواها 3 <li>.",s:i(`<h1>أكلاتي المفضلة</h1>
`,`body { font-family: Tahoma; }
`),check:'if(!__q("ul,ol"))return "ul";return __qa("li").filter(l=>l.textContent.trim()).length>=3||"li3";'},h3:{t:"صورة ولينك",say:'حط صورة بـ <img src="..." alt="..."> (جرّب https://roboegypt.com/assets/logo-light.png)، ولينك بـ <a href="https://roboegypt.com">Robo Egypt</a>.',s:i(`<h1>صفحتي</h1>
`,`body { font-family: Tahoma; }
img { width: 120px; }
`),check:'if(!__q("img[src]"))return "img";const a=__q("a[href]");if(!a)return "a";return a.textContent.trim().length>0||"aText";'},hP:{t:"مشروع: صفحة عن نفسي 🏆",say:"اعمل صفحة عنك: عنوان <h1> باسمك، وفقرة <p>، وقائمة فيها 3 حاجات بتحبها، ولينك لموقع بتحبه.",s:i(`<!-- صفحة عني -->
`,`body { font-family: Tahoma; }
`),check:'if(!__q("h1"))return "h1";if(!__qa("p").some(p=>p.textContent.trim()))return "p";if(__qa("li").length<3)return "li3";return !!__q("a[href]")||"a";'},c0:{t:"مثال محلول: CSS بيلوّن 👀",say:"CSS بيقول لكل حاجة شكلها إيه: body ليه خلفية، و h1 ليه لون وحجم. افتح تاب CSS وغيّر الألوان.",s:i(`<h1>Robo Egypt</h1>
<p>أنا بتعلّم CSS!</p>
`,`body {
  background: #EEF3FF;
  font-family: Tahoma;
  text-align: center;
}
h1 {
  color: #5B3DF5;
  font-size: 48px;
}
p {
  color: #18B37E;
}
`),check:'return __cs(document.body,"backgroundColor")!=="rgba(0, 0, 0, 0)"'},c1:{t:"لوّن العنوان",say:"من تاب CSS: خلّي العنوان h1 بلون غير الأسود (color) وحجمه 40px أو أكبر (font-size).",s:i(`<h1>Robo Egypt</h1>
<p>أكاديمية البرمجة والروبوتات</p>
`,`body { font-family: Tahoma; text-align: center; }
`),check:'const h=__q("h1");if(__cs(h,"color")==="rgb(0, 0, 0)")return "h1Color";return parseFloat(__cs(h,"fontSize"))>=40||"h1Size";'},c2:{t:"الصندوق: padding و border",say:"خلّي .box ليه مسافة جوه padding: 20px أو أكتر، وإطار border بسُمك 3px أو أكتر، وحواف مدوّرة border-radius.",s:i(`<div class="box">أنا صندوق 📦</div>
`,`body { font-family: Tahoma; }
.box {
  background: #FFF3D6;
}
`),check:'const b=__q(".box");if(parseFloat(__cs(b,"paddingTop"))<20)return "pad";if(parseFloat(__cs(b,"borderTopWidth"))<3)return "border";return parseFloat(__cs(b,"borderTopLeftRadius"))>=8||"radius";'},c3:{t:"Flexbox: جنب بعض",say:"الكروت التلاتة تحت بعض. خلّيهم جنب بعض بـ display: flex على .row، وزوّد مسافة بينهم بـ gap.",s:i(`<div class="row">
  <div class="card">🤖</div>
  <div class="card">🚀</div>
  <div class="card">⭐</div>
</div>
`,`body { font-family: Tahoma; }
.card {
  background: #E8F0FF;
  font-size: 40px;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
}
`),check:'const r=__q(".row");if(__cs(r,"display")!=="flex")return "flex";const c=__qa(".card");return c.length===3&&c.every(x=>Math.abs(x.offsetTop-c[0].offsetTop)<3)||"side";'},cF:{t:"🔧 صلّح الـ 3 أخطاء: CSS",say:"الـ CSS ده فيه 3 أخطاء مستخبية، فالشكل مش طالع زي المطلوب. المطلوب: العنوان أحمر، والفقرة حجمها 24px، والصندوق أزرق وجواه مسافة 20px.",s:i(`<h1>Hello</h1>
<p>Welcome to my page</p>
<div class="box">Box</div>
`,`h1 {
  colr: red;
}
p {
  font-size: 24;
}
.box {
  color: white;
  background: blue
  padding: 20px;
}
`),check:'if(__cs(__q("h1"),"color")!=="rgb(255, 0, 0)")return "fix";if(parseFloat(__cs(__q("p"),"fontSize"))!==24)return "fix";const b=__q(".box");return __cs(b,"backgroundColor")==="rgb(0, 0, 255)"&&parseFloat(__cs(b,"paddingTop"))===20||"fix";'},cP:{t:"مشروع: كارت لاعب 🏆",say:"اعمل كارت للاعب بتحبه أو لنفسك: .card فيه اسم واسم الفريق، وليه خلفية، و padding، وحواف مدوّرة، والاسم بلون مختلف.",s:i(`<div class="card">
  <h2>Mo Salah</h2>
  <p>Liverpool ⚽</p>
</div>
`,`body { font-family: Tahoma; }
`),check:'const c=__q(".card");if(!c)return "card";if(__cs(c,"backgroundColor")==="rgba(0, 0, 0, 0)")return "cardBg";if(parseFloat(__cs(c,"paddingTop"))<10)return "pad";if(parseFloat(__cs(c,"borderTopLeftRadius"))<8)return "radius";const h=__q(".card h2,.card h1,.card h3");return h&&__cs(h,"color")!=="rgb(0, 0, 0)"||"nameColor";'},j0:{t:"مثال محلول: الزرار بيتكلم 👀",say:"لما تدوس الزرار، JavaScript بيغيّر الكلام اللي عليه. اقرا تاب JS: getElementById بيجيب الزرار، و onclick بيقول هيحصل إيه لما يتداس.",s:i(`<button id="hello">دوس هنا</button>
`,`body { font-family: Tahoma; text-align: center; padding: 30px; }
button { font-size: 22px; padding: 10px 24px; }
`,`const btn = document.getElementById("hello");

btn.onclick = function () {
  btn.textContent = "أهلاً بيك! 🎉";
};
`),check:'const b=__q("#hello");if(!b)return "noBtn";const t=b.textContent;b.click();await __sleep(30);return b.textContent!==t||"textChange";'},j1:{t:"المتغيرات و console.log",say:"اعمل متغير name فيه اسمك، ومتغير age فيه سنك (بـ let)، واطبعهم في الـ Console بـ console.log.",s:i("","",`// اكتب الكود هنا
`,"js"),check:'return (window.__logs||[]).length>=2||"log2"'},j2:{t:"العدّاد ➕",say:"لما تدوس ➕ الرقم يزيد 1. اعمل متغير count، ولما الزرار plus يتداس: زوّد count واكتبه في num بـ textContent.",s:i(`<h1 id="num">0</h1>
<button id="plus">➕</button>
`,`body { font-family: Tahoma; text-align: center; }
h1 { font-size: 80px; }
button { font-size: 30px; padding: 10px 30px; }
`,`// اكتب الكود هنا
`),check:'const b=__q("#plus");if(!b)return "noBtn";for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="3"||"count3";'},j3:{t:"زرار بيغيّر اللون 🎨",say:"لما زرار go يتداس، غيّر لون خلفية box بـ box.style.background.",s:i(`<div id="box"></div>
<button id="go">غيّر اللون</button>
`,`body { font-family: Tahoma; text-align: center; }
#box { width: 160px; height: 160px; margin: 20px auto; background: orange; border-radius: 20px; }
`,`// اكتب الكود هنا
`),check:'const box=__q("#box"),g=__q("#go");if(!box||!g)return "noBtn";const c0=__cs(box,"backgroundColor");g.click();await __sleep(60);return __cs(box,"backgroundColor")!==c0||"colorChange";'},jF:{t:"🔧 صلّح الـ 3 أخطاء: JavaScript",say:"الكود ده فيه 3 أخطاء مستخبية! دوس على الزرار، واقرا رسالة الخطأ في الـ Console. المطلوب: كل ما تدوس +1 الرقم يزيد 1 (1، 2، 3…).",s:i(`<h1 id="num">0</h1>
<button id="btn">+1</button>
`,`body { font-family: Tahoma; text-align: center; }
h1 { font-size: 80px; }
button { font-size: 30px; padding: 10px 30px; }
`,`let count = 0;
const btn = document.getElementById("Btn");

btn.onclick = function () {
  count = count + "1";
  document.getElementById("num").textcontent = count;
};
`),check:'const b=__q("#btn");for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="3"||"fix";'},jP:{t:"مشروع: امسك النجمة ⭐🏆",say:"لعبة! كل ما تدوس على النجمة: السكور يزيد 1، والنجمة تتنقل لمكان عشوائي (style.left و style.top مع Math.random).",s:i(`<p>Score: <b id="score">0</b></p>
<div id="star">⭐</div>
`,`body { font-family: Tahoma; margin: 0; height: 100vh; background: #1E1B4B; color: white; overflow: hidden; }
p { font-size: 22px; padding: 10px 16px; margin: 0; }
#star { position: absolute; left: 100px; top: 100px; font-size: 54px; cursor: pointer; }
`,`// اكتب الكود هنا
`),check:'const s=__q("#star");if(!s)return "noStar";const p0=s.getBoundingClientRect();s.click();await __sleep(30);s.click();await __sleep(30);if(__txt("#score").trim()!=="2")return "score2";const p1=s.getBoundingClientRect();return p0.left!==p1.left||p0.top!==p1.top||"moveStar";'}},O={h1:"محتاج عنوان <h1> فيه كلام.",p:"محتاج فقرة <p> فيها جملة.",ul:"محتاج قائمة <ul>.",li3:"القائمة محتاجة 3 عناصر <li> على الأقل.",img:'محتاج صورة <img src="...">.',a:'محتاج لينك <a href="...">.',aText:"اكتب كلام جوه اللينك.",h1Color:"غيّر لون العنوان بـ color.",h1Size:"كبّر العنوان: font-size 40px أو أكتر.",pad:"زوّد padding.",border:"زوّد إطار border بسُمك 3px على الأقل.",radius:"دوّر الحواف بـ border-radius.",flex:"استخدم display: flex على .row.",side:"الكروت لازم تبقى جنب بعض.",fix:"لسه فيه أخطاء! قارن الشكل بالمطلوب.",card:'محتاج عنصر class="card".',cardBg:"ادّي الكارت لون خلفية.",nameColor:"لوّن الاسم بلون غير الأسود.",noBtn:"الزرار مش موجود: اتأكد من الـ id.",textChange:"الكلام لازم يتغيّر لما الزرار يتداس.",log2:"اطبع حاجتين على الأقل بـ console.log.",count3:"لما تدوس 3 مرات الرقم لازم يبقى 3.",colorChange:"اللون لازم يتغيّر لما الزرار يتداس.",noStar:'النجمة مش موجودة: id="star".',score2:"كل ضغطة على النجمة لازم تزوّد السكور 1.",moveStar:"النجمة لازم تتنقل لمكان تاني لما تتداس."},R=`body { font-family: Tahoma; text-align: center; }
h1 { font-size: 70px; }
button { font-size: 26px; padding: 8px 24px; }
`;Object.assign(G,{hT:{t:"تدريب: جدول (table)",say:"تدريب: اصنع جدولًا لدرجاتك: <table>، وفيه صف عناوين بـ <th> (المادة والدرجة)، ثم 3 صفوف <tr> على الأقل، وكل خانة بـ <td>.",s:i(`<h1>درجاتي</h1>
`,`body { font-family: Tahoma; }
td, th { border: 1px solid #999; padding: 6px 12px; }
`),check:'if(!__q("table"))return "table";if(!__q("th"))return "th";return __qa("tr").filter(r=>r.querySelector("td")).length>=3||"rows3";'},hF:{t:"🔧 أصلح خطأً واحدًا: الوسم المفتوح",say:"كل الصفحة صارت عنوانًا كبيرًا! وسم <h1> لم يُغلق: الإغلاق يحتاج / هكذا </h1>.",s:i(`<h1>My page<h1>
<p>I love robots.</p>
`,`body { font-family: Tahoma; }
`),check:'const h=__qa("h1");return h.length===1&&h[0].textContent.trim()==="My page"&&!__q("h1 p")||"closeTag";'},cG:{t:"تدريب: شبكة 2 × 2 (Grid)",say:"تدريب: اجعل الكروت الأربعة شبكة من عمودين: display: grid و grid-template-columns: 1fr 1fr على .grid، ومسافة gap بينها.",s:i(`<div class="grid">
  <div class="card">🤖</div>
  <div class="card">🚀</div>
  <div class="card">⭐</div>
  <div class="card">🎮</div>
</div>
`,`body { font-family: Tahoma; }
.card {
  background: #E8F0FF;
  font-size: 40px;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
}
`),check:'const g=__q(".grid");if(__cs(g,"display")!=="grid")return "grid";const c=__qa(".card");return c.length===4&&Math.abs(c[0].offsetTop-c[1].offsetTop)<3&&c[2].offsetTop>c[0].offsetTop+10&&Math.abs(c[0].offsetLeft-c[2].offsetLeft)<3||"grid2";'},cFF:{t:"🔧 أصلح خطأً واحدًا: flex في المكان الخطأ",say:"الكروت ما زالت تحت بعضها! display: flex وُضع على .card، لكنه يجب أن يكون على الصندوق الذي يحملها.",s:i(`<div class="row">
  <div class="card">🤖</div>
  <div class="card">🚀</div>
  <div class="card">⭐</div>
</div>
`,`body { font-family: Tahoma; }
.row {
  gap: 12px;
}
.card {
  display: flex;
  background: #E8F0FF;
  font-size: 40px;
  padding: 20px;
  border-radius: 14px;
}
`),check:'const r=__q(".row");if(__cs(r,"display")!=="flex")return "flex";const c=__qa(".card");return c.length===3&&c.every(x=>Math.abs(x.offsetTop-c[0].offsetTop)<3)||"side";'},jT:{t:"تدريب: العدّ التنازلي ➖",say:"تدريب: الرقم يبدأ من 10. كلما ضغطت الزر minus ينقص 1. اصنع متغيّرًا count = 10، وعند الضغط: count = count - 1 واكتبه في num.",s:i(`<h1 id="num">10</h1>
<button id="minus">➖</button>
`,R,`// اكتب الكود هنا
`),check:'const b=__q("#minus");if(!b)return "noBtn";for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="7"||"down7";'},jFF:{t:"🔧 أصلح خطأً واحدًا: 0111 بدل 3",say:'اضغط +1 ثلاث مرات فيظهر 0111 بدل 3! "1" بين علامتين كلام وليس رقمًا، والكلام يلتصق.',s:i(`<h1 id="num">0</h1>
<button id="btn">+1</button>
`,R,`let count = 0;
const btn = document.getElementById("btn");

btn.onclick = function () {
  count = count + "1";
  document.getElementById("num").textContent = count;
};
`),check:'const b=__q("#btn");for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="3"||"count3";'},jI:{t:"تدريب: if في JavaScript",say:"تدريب: count يبدأ من 2، والزر minus ينقص 1. لكن الرقم لا ينزل أبدًا تحت 0: if (count > 0) قبل النقص.",s:i(`<h1 id="num">2</h1>
<button id="minus">➖</button>
`,R,`let count = 2;
const btn = document.getElementById("minus");

btn.onclick = function () {
  // only if count > 0 (فقط إذا كان أكبر من 0)
  count = count - 1;
  document.getElementById("num").textContent = count;
};
`),check:'const b=__q("#minus");if(!b)return "noBtn";for(let i=0;i<4;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="0"||"notBelow0";'},jIn:{t:"تدريب: اقرأ ما يكتبه الزائر ⌨",say:"تدريب: اكتب الاسم في خانة name ثم اضغط go، فيظهر في out: Hello, والاسم!. القيمة المكتوبة في الخانة هي .value.",s:i(`<input id="name" placeholder="اسمك">
<button id="go">go</button>
<h2 id="out"></h2>
`,`body { font-family: Tahoma; text-align: center; padding: 20px; }
input, button { font-size: 20px; padding: 6px 12px; }
`,`// اكتب الكود هنا
`),check:'const i=__q("#name"),g=__q("#go");if(!i||!g)return "noBtn";i.value="Ali";g.click();await __sleep(40);const t=__txt("#out");return /hello/i.test(t)&&t.includes("Ali")||"helloName";'},jC:{t:"تحدٍّ: قائمة المهام ✅🏆",say:'تحدٍّ: اكتب مهمة في خانة task واضغط add، فتُضاف إلى القائمة list عنصرًا جديدًا <li>. استعمل document.createElement("li") و appendChild، وامسح الخانة بعد الإضافة.',s:i(`<input id="task" placeholder="مهمة جديدة">
<button id="add">add</button>
<ul id="list"></ul>
`,`body { font-family: Tahoma; padding: 20px; }
input, button { font-size: 20px; padding: 6px 12px; }
li { font-size: 20px; margin: 6px 0; }
`,`// اكتب الكود هنا
`),check:'const i=__q("#task"),a=__q("#add");if(!i||!a)return "noBtn";i.value="Homework";a.click();await __sleep(30);i.value="Football";a.click();await __sleep(30);const L=__qa("#list li").map(x=>x.textContent.trim());return L.length===2&&L[0].includes("Homework")&&L[1].includes("Football")||"todo2";'}});Object.assign(O,{table:"اصنع جدولًا بـ <table>.",th:"أضف صف عناوين بـ <th>.",rows3:"أضف 3 صفوف فيها <td> على الأقل.",closeTag:"أغلق العنوان: </h1>.",grid:"استعمل display: grid على .grid.",grid2:"عمودان: grid-template-columns: 1fr 1fr.",down7:"بعد 3 ضغطات يجب أن يصير الرقم 7.",notBelow0:"الرقم لا ينزل تحت 0: if (count > 0).",helloName:"اكتب في out: Hello, والاسم من .value.",todo2:"كل ضغطة على add تضيف <li> فيه المهمة."});const lt=new URLSearchParams(location.search),F=lt.get("task"),g=G[F]||null;let S=!1,D="",tt=0;function Ft(){clearTimeout(tt),tt=setTimeout(()=>{let e=o("probeFrame");e||(e=document.createElement("iframe"),e.id="probeFrame",e.setAttribute("sandbox","allow-scripts"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1,e.style.cssText="position:fixed;left:-9999px;top:0;width:800px;height:600px;border:0;visibility:hidden",document.body.appendChild(e));const t=k;k=D="p"+Math.random().toString(36).slice(2);const n=A(!0);k=t,e.onload=()=>setTimeout(()=>{try{e.contentWindow.postMessage({__robo:D,k:"probe",code:g.check},"*")}catch{}},350),e.srcdoc=n},250)}addEventListener("message",e=>{const t=e.data,n=o("probeFrame");if(!(!g||!t||t.k!=="probe"||t.__robo!==D||!n||e.source!==n.contentWindow))if(t.r===!0&&!S){S=!0,o("taskBar").classList.add("done"),o("taskMsg").textContent="🎉 برافو! خلصت";try{parent.postMessage({type:"robo-task",tool:"web",task:F,ok:!0},location.origin)}catch{}}else S||(o("taskMsg").textContent=typeof t.r=="string"&&O[t.r]?"💡 "+O[t.r]:"")});function et(){S=!1,U(g.s),C=!1,T(g.s.mode),_(g.s.mode==="js"?"js":F[0]==="c"?"css":F[0]==="j"?"js":"html"),o("taskBar").classList.remove("done"),o("taskMsg").textContent="",b(),C=!1}if(g){document.body.classList.add("task"),lt.get("embed")&&document.body.classList.add("embed");const e=document.createElement("div");e.className="taskBar",e.id="taskBar",e.innerHTML='<b></b><span></span><em id="taskMsg"></em><button class="btn ghost small" id="taskReset">↺ من الأول</button>',e.querySelector("b").textContent=g.t,e.querySelector("span").textContent=g.say,document.querySelector("main").before(e),_t(e),o("taskReset").onclick=et,et()}else{const e=t=>JSON.stringify([t.html,t.css,t.js,t.mode]);c.list=c.list.filter(t=>!(t.blank&&t.blank===e(t))),c.list.forEach(t=>{delete t.blank}),c.cur=null,E(Object.assign({},W,{n:"✨ مشروع "+L(c.list.length+1)}));{const t=P();t&&(t.blank=e(t),w())}}window.__web={demo:()=>{!(d.html+d.css+d.js).replace(/<!--[\s\S]*?-->/g,"").trim()&&!u.state.doc.toString().trim()&&U(W)},get taskDone(){return S},TASKS:G,run:b,setMode:T,showTab:_,get docs(){return d},set:(e,t)=>{_(e),u.dispatch({changes:{from:0,to:u.state.doc.length,insert:t}})},newProject:E,EX:f};(function(){const e=document.querySelector(".panes");if(!e)return;const t=document.createElement("div");t.className="viewSw",t.setAttribute("role","tablist"),t.innerHTML='<button role="tab" data-v="code">✏️ الكود</button><button role="tab" data-v="out">👁 النتيجة</button>',e.before(t);const n=s=>{document.body.dataset.view=s,t.querySelectorAll("button").forEach(r=>r.setAttribute("aria-selected",String(r.dataset.v===s)))};t.onclick=s=>{const r=s.target.closest("[data-v]");r&&n(r.dataset.v)},n("code");const l=document.getElementById("runBtn");l&&l.addEventListener("click",()=>{matchMedia("(max-width: 760px)").matches&&n("out")})})();o("undoBtn").onclick=()=>{ot(u),u.focus()};o("redoBtn").onclick=()=>{z(u),u.focus()};bt({box:document.querySelector(".panes"),a:document.querySelector(".edPane"),b:document.querySelector(".outPane"),cssVar:"--pA",key:"robo-split-web",min:260,minB:260});{const e=document.querySelector("#projModal .mcard");wt({bar:document.getElementById("myBtn"),lab:"web",host:e,before:e&&e.querySelector(".sub"),get:()=>(m(!1),P()),put:t=>{t.id=Y(),t.t=Date.now(),c.list.unshift(t),w(),I(t.id),o("projModal").hidden=!0}})}
