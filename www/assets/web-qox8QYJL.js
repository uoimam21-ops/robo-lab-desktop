import"./kbfix-BD_lgBp6.js";import{P as rt,n as X,w as at,j as A,u as it,r as ct,k as lt,l as dt,m as ut,o as pt}from"./index-D-kCwvry.js";import{s as mt}from"./split-DJAd-vnY.js";import{j as ft,c as ht,h as bt}from"./index-9y3Z7dt_.js";import{p as gt}from"./acorn-DkYm1ITT.js";import{t as _t}from"./task-peek-pvl45LCS.js";const yt=rt.highest(X.of([{key:"Mod-d",run:at,preventDefault:!0}])),o=n=>document.getElementById(n),xt="٠١٢٣٤٥٦٧٨٩",L=n=>String(n).replace(/\d/g,t=>xt[t]),b=[{n:"👋 صفحة عني",mode:"page",html:`<h1>أنا اسمي روبو 🤖</h1>
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
`}],D=b[0],kt={html:bt(),css:ht(),js:ft()};let B="html",g="page";const d={html:"",css:"",js:""};function Q(n,t){return lt.create({doc:t,extensions:[yt,dt,kt[n],ut.of("  "),X.of([{key:"Mod-Enter",run:()=>(h(),!0)},{key:"Mod-s",run:()=>(m(!0),!0)},pt]),A.updateListener.of(e=>{e.docChanged&&(d[n]=e.state.doc.toString(),St())}),A.contentAttributes.of({"aria-label":n.toUpperCase()+" code",spellcheck:"false"})]})}const u=new A({parent:o("editor"),state:Q("html","")}),q={};function P(n){["html","css","js"].forEach(t=>{d[t]=n[t]||"",q[t]=Q(t,d[t])}),u.setState(q[B])}function x(n){q[B]=u.state,B=n,u.setState(q[n]),document.querySelectorAll("#codeTabs [role=tab]").forEach(t=>t.setAttribute("aria-selected",String(t.dataset.t===n)))}document.querySelectorAll("#codeTabs [role=tab]").forEach(n=>n.onclick=()=>x(n.dataset.t));function S(n){g=n,document.body.classList.toggle("jsOnly",n==="js"),o("mPage").classList.toggle("on",n==="page"),o("mJs").classList.toggle("on",n==="js"),o("mPage").setAttribute("aria-pressed",String(n==="page")),o("mJs").setAttribute("aria-pressed",String(n==="js")),document.querySelectorAll("#codeTabs [data-t=html],#codeTabs [data-t=css]").forEach(t=>t.hidden=n==="js"),n==="js"&&B!=="js"&&x("js")}o("mPage").onclick=()=>{S("page"),m(!1),h()};o("mJs").onclick=()=>{S("js"),m(!1),h()};function Z(n){let t;try{t=gt(n,{ecmaVersion:"latest",sourceType:"script",allowReturnOutsideFunction:!0})}catch{return n}const e=[];(function a(i){if(!(!i||typeof i.type!="string")){if(/^(For|While|DoWhile|ForIn|ForOf)Statement$/.test(i.type)){const s=i.body;s.type==="BlockStatement"?e.push([s.start+1,"if(__lp())break;"]):(e.push([s.start,"{if(__lp())break;"]),e.push([s.end,"}"]))}for(const s in i){const p=i[s];s!=="parent"&&(Array.isArray(p)?p.forEach(a):p&&typeof p.type=="string"&&a(p))}}})(t),e.sort((a,i)=>i[0]-a[0]);let l=n;for(const[a,i]of e)l=l.slice(0,a)+i+l.slice(a);return l}let y="";const vt=n=>`(function(){var T=${JSON.stringify(n)};
function f(v){try{if(typeof v==="string")return v;if(v instanceof Error)return v.name+": "+v.message;if(v===undefined)return "undefined";if(typeof v==="function")return "function "+(v.name||"");var s=JSON.stringify(v);return s===undefined?String(v):s}catch(e){return String(v)}}
window.__logs=[];function send(k,a){var x=Array.prototype.map.call(a,f);if(k==="log"||k==="info")window.__logs.push(x.join(" "));try{parent.postMessage({__robo:T,k:k,a:x},"*")}catch(e){}}
window.__q=function(s){return document.querySelector(s)};window.__qa=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};window.__cs=function(el,p){return el?getComputedStyle(el)[p]:""};window.__txt=function(s){var e=document.querySelector(s);return e?e.textContent:""};window.__sleep=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
window.addEventListener("message",function(e){var m=e.data;if(!m||m.__robo!==T||m.k!=="probe")return;var fn;try{fn=new Function("return (async function(){"+m.code+"})()")}catch(err){return parent.postMessage({__robo:T,k:"probe",r:"err"},"*")}
Promise.resolve().then(fn).then(function(r){parent.postMessage({__robo:T,k:"probe",r:r===undefined?null:r},"*")},function(err){parent.postMessage({__robo:T,k:"probe",r:"err"},"*")})});
["log","info","warn","error"].forEach(function(k){var o=console[k];console[k]=function(){send(k,arguments);try{o.apply(console,arguments)}catch(e){}}});
window.addEventListener("error",function(ev){var e=ev.error;parent.postMessage({__robo:T,k:"err",name:e&&e.name||"Error",msg:e&&e.message||ev.message,line:ev.lineno},"*")});
var t0=Date.now(),n=0;setInterval(function(){t0=Date.now()},100);
window.__lp=function(){if(++n%500===0&&Date.now()-t0>1500){t0=Date.now();parent.postMessage({__robo:T,k:"loop"},"*");throw new Error("__ROBO_LOOP__")}return false};
})();`,wt=n=>n.replace(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi,(t,e,l)=>"<script"+e+">"+Z(l)+"<\/script>");let k=0;function M(n){const t=g==="page"?d.css:"",e=g==="page"?d.html:"",l=n?Z(d.js):d.js,a='<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'+(n?"<script>"+vt(y)+"<\/script>":"")+(t?`<style>
`+t+`
</style>`:""),i=n?wt(e):e;let s;if(/<html[\s>]/i.test(i))s=i.replace(/<head([^>]*)>/i,"<head$1>"+a),/<head/i.test(i)||(s=s.replace(/<html([^>]*)>/i,"<html$1><head>"+a+"</head>")),k=s.replace(/<\/body>[\s\S]*$/i,"").split(`
`).length,s=/<\/body>/i.test(s)?s.replace(/<\/body>/i,`<script>
`+l+`
<\/script></body>`):s+`<script>
`+l+`
<\/script>`;else{const p='<!doctype html><html lang="ar" dir="rtl"><head>'+a+`</head><body>
`+i+`
`;k=p.split(`
`).length,s=p+`<script>
`+l+`
<\/script></body></html>`}return s}function h(){y=Math.random().toString(36).slice(2),tt(),o("preview").srcdoc=M(!0),m(!1),f&&w&&jt()}let N=0,w=!1;function St(){w=!0,clearTimeout(K),K=setTimeout(()=>m(!1),700),o("autoRun").checked&&(clearTimeout(N),N=setTimeout(h,700))}o("runBtn").onclick=()=>{w=!0,h()};o("newWin").onclick=()=>{const n=URL.createObjectURL(new Blob([M(!1)],{type:"text/html"}));window.open(n,"_blank","noopener"),setTimeout(()=>URL.revokeObjectURL(n),6e4)};const _=o("out");let C=0;function U(n,t){const e=document.createElement("div");for(t&&(e.className=t),e.textContent=n,_.appendChild(e),C++;_.childNodes.length>400;)_.firstChild.remove();_.scrollTop=_.scrollHeight,o("cCount").textContent=C?"("+L(C)+")":""}function tt(){_.textContent="",C=0,o("cCount").textContent="",o("errBox").hidden=!0}o("clrBtn").onclick=tt;const Tt={ReferenceError:"فيه اسم مش معروف: يمكن متغير أو دالة اتكتبت غلط (JavaScript بيفرّق بين الحروف الكبيرة والصغيرة)، أو استخدمته قبل ما تعمله بـ let.",TypeError:"بتستخدم حاجة بطريقة غلط. أشهر سبب: getElementById مش لاقي العنصر، فاتأكد إن الـ id في HTML هو نفسه اللي في JS.",SyntaxError:'فيه غلطة في كتابة الكود: يمكن قوس ( أو { ناقص، أو علامة " ناقصة.',RangeError:"رقم برّه الحدود المسموحة، أو دالة بتنادي نفسها من غير ما تقف."};let W=0;addEventListener("message",n=>{const t=n.data;if(!(!t||t.__robo!==y||n.source!==o("preview").contentWindow)){if(t.k==="loop"){Date.now()-W>1e3&&(W=Date.now(),$("🔁 لوب مالوش آخر!","اللوب فضل شغّال كتير ومخلصش، فوقّفناه عشان الصفحة متهنّجش. اتأكد إن شرط اللوب بيبقى false في الآخر (زي i++).",0,""));return}if(t.k==="err"){if(/__ROBO_LOOP__/.test(t.msg))return;const e=t.line&&t.line>k&&t.line-k<=d.js.split(`
`).length?t.line-k:0;U(t.name+": "+t.msg,"e"),$(e?"السطر رقم "+L(e)+" في JS":"حصلت غلطة",Tt[t.name]||"",e,t.name+": "+t.msg);return}U(t.a.join(" "),t.k==="error"?"e":t.k==="warn"?"w":t.k==="info"?"i":"")}});function $(n,t,e,l){const a=o("errBox");a.hidden=!1,a.innerHTML="";const i=document.createElement("b");if(i.textContent="🤔 "+n,a.appendChild(i),t&&a.appendChild(document.createTextNode(t+" ")),l){const s=document.createElement("code");s.textContent=l,a.appendChild(s)}if(e){const s=document.createElement("button");s.className="go",s.textContent=" ← روح للسطر",s.onclick=()=>{x("js");const p=u.state.doc.line(Math.min(e,u.state.doc.lines));u.dispatch({selection:{anchor:p.from,head:p.to},scrollIntoView:!0}),u.focus()},a.appendChild(s)}}const nt="robo-lab-web";let c=(()=>{try{return JSON.parse(localStorage.getItem(nt))||null}catch{return null}})()||{cur:null,list:[]};const T=()=>{try{return localStorage.setItem(nt,JSON.stringify(c)),!0}catch{return!1}},J=()=>c.list.find(n=>n.id===c.cur),et=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);let K=0;function m(n){if(f)return;let t=J();t||(t={id:et()},c.list.unshift(t),c.cur=t.id),Object.assign(t,{name:(o("pname").value||"").trim()||"صفحتي",mode:g,html:d.html,css:d.css,js:d.js,t:Date.now()});const e=T();n&&Et(e?"💾 اتحفظ":"مقدرتش أحفظ على الجهاز ده")}function z(n){const t=c.list.find(e=>e.id===n);t&&(c.cur=n,T(),o("pname").value=t.name,P(t),S(t.mode||"page"),h())}function E(n){J()&&m(!1);const t=n||{n:"مشروع "+L(c.list.length+1),mode:"page",html:`<h1>صفحة جديدة</h1>
`,css:`body { font-family: Tahoma; }
`,js:""},e={id:et(),name:t.n.replace(/^\S+\s/,""),mode:t.mode,html:t.html,css:t.css,js:t.js,t:Date.now()};c.list.unshift(e),T(),z(e.id)}o("pname").addEventListener("change",()=>m(!1));o("saveBtn").onclick=()=>m(!0);b.forEach((n,t)=>{const e=document.createElement("option");e.value=t,e.textContent=n.n,o("examples").appendChild(e)});o("examples").onchange=()=>{const n=b[o("examples").value];o("examples").value="",n&&E(n)};o("dlBtn").onclick=()=>{const n=((o("pname").value||"robo").trim().replace(/[\\/:*?"<>|]+/g,"").replace(/\s+/g,"_")||"robo")+(g==="js"?".js":".html"),t=g==="js"?d.js:M(!1),e=document.createElement("a");e.href=URL.createObjectURL(new Blob([t],{type:g==="js"?"text/javascript":"text/html"})),e.download=n,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),2e3)};function ot(){const n=o("projList");n.innerHTML=c.list.map(t=>'<li class="'+(t.id===c.cur?"cur":"")+'"><span class="nm"><b dir="auto"></b><small>'+(t.mode==="js"?"JavaScript":"صفحة ويب")+'</small></span><button class="btn ghost small" data-open="'+t.id+'">افتح</button><button class="btn ghost small" data-del="'+t.id+'" aria-label="امسح">🗑</button></li>').join("")||'<li class="empty">لسه مفيش مشاريع</li>',n.querySelectorAll("li b").forEach((t,e)=>t.textContent=c.list[e].name),n.querySelectorAll("[data-open]").forEach(t=>t.onclick=()=>{m(!1),z(t.dataset.open),j()}),n.querySelectorAll("[data-del]").forEach(t=>t.onclick=()=>{if(t.dataset.sure!=="1"){t.dataset.sure="1",t.textContent="متأكد؟";return}c.list=c.list.filter(e=>e.id!==t.dataset.del),c.cur===t.dataset.del&&(c.cur=null,c.list.length?z(c.list[0].id):E(D)),T(),ot()})}const j=()=>{o("projModal").hidden=!0};o("myBtn").onclick=()=>{m(!1),ot(),o("projModal").hidden=!1,o("pmClose").focus()};o("pmClose").onclick=j;o("newBtn").onclick=()=>{E(),j()};o("projModal").addEventListener("click",n=>{n.target.id==="projModal"&&j()});addEventListener("keydown",n=>{n.key==="Escape"&&j()});addEventListener("beforeunload",()=>m(!1));let G=0;function Et(n){const t=o("toast");t.textContent=n,t.hidden=!1,clearTimeout(G),G=setTimeout(()=>t.hidden=!0,2200)}const r=(n,t,e,l)=>({html:n||"",css:t||"",js:e||"",mode:l||"page"}),H={h0:{t:"مثال محلول: صفحة عني 👀",say:"الصفحة جاهزة: HTML بيعمل المحتوى، و CSS بيلوّنه، و JS بيخلّي الزرار يشتغل. اتفرّج على التلات تابات، وغيّر اسم روبو للاسم بتاعك.",s:r(b[0].html,b[0].css,b[0].js),check:'return !!__q("h1")'},h1:{t:"العنوان والفقرة",say:"اكتب عنوان كبير باسمك بـ <h1>، وتحته فقرة بـ <p> فيها جملة عنك. كل tag بيتفتح <p> ويتقفل </p>.",s:r(`<!-- اكتب الصفحة هنا -->
`,`body { font-family: Tahoma; }
`),check:'const h=__q("h1");if(!h||!h.textContent.trim())return "h1";return __qa("p").some(p=>p.textContent.trim().length>4)||"p";'},h2:{t:"القوائم",say:"اعمل قائمة بأكتر 3 أكلات بتحبها: <ul> وجواها 3 <li>.",s:r(`<h1>أكلاتي المفضلة</h1>
`,`body { font-family: Tahoma; }
`),check:'if(!__q("ul,ol"))return "ul";return __qa("li").filter(l=>l.textContent.trim()).length>=3||"li3";'},h3:{t:"صورة ولينك",say:'حط صورة بـ <img src="..." alt="..."> (جرّب https://roboegypt.com/assets/logo-light.png)، ولينك بـ <a href="https://roboegypt.com">Robo Egypt</a>.',s:r(`<h1>صفحتي</h1>
`,`body { font-family: Tahoma; }
img { width: 120px; }
`),check:'if(!__q("img[src]"))return "img";const a=__q("a[href]");if(!a)return "a";return a.textContent.trim().length>0||"aText";'},hP:{t:"مشروع: صفحة عن نفسي 🏆",say:"اعمل صفحة عنك: عنوان <h1> باسمك، وفقرة <p>، وقائمة فيها 3 حاجات بتحبها، ولينك لموقع بتحبه.",s:r(`<!-- صفحة عني -->
`,`body { font-family: Tahoma; }
`),check:'if(!__q("h1"))return "h1";if(!__qa("p").some(p=>p.textContent.trim()))return "p";if(__qa("li").length<3)return "li3";return !!__q("a[href]")||"a";'},c0:{t:"مثال محلول: CSS بيلوّن 👀",say:"CSS بيقول لكل حاجة شكلها إيه: body ليه خلفية، و h1 ليه لون وحجم. افتح تاب CSS وغيّر الألوان.",s:r(`<h1>Robo Egypt</h1>
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
`),check:'return __cs(document.body,"backgroundColor")!=="rgba(0, 0, 0, 0)"'},c1:{t:"لوّن العنوان",say:"من تاب CSS: خلّي العنوان h1 بلون غير الأسود (color) وحجمه 40px أو أكبر (font-size).",s:r(`<h1>Robo Egypt</h1>
<p>أكاديمية البرمجة والروبوتات</p>
`,`body { font-family: Tahoma; text-align: center; }
`),check:'const h=__q("h1");if(__cs(h,"color")==="rgb(0, 0, 0)")return "h1Color";return parseFloat(__cs(h,"fontSize"))>=40||"h1Size";'},c2:{t:"الصندوق: padding و border",say:"خلّي .box ليه مسافة جوه padding: 20px أو أكتر، وإطار border بسُمك 3px أو أكتر، وحواف مدوّرة border-radius.",s:r(`<div class="box">أنا صندوق 📦</div>
`,`body { font-family: Tahoma; }
.box {
  background: #FFF3D6;
}
`),check:'const b=__q(".box");if(parseFloat(__cs(b,"paddingTop"))<20)return "pad";if(parseFloat(__cs(b,"borderTopWidth"))<3)return "border";return parseFloat(__cs(b,"borderTopLeftRadius"))>=8||"radius";'},c3:{t:"Flexbox: جنب بعض",say:"الكروت التلاتة تحت بعض. خلّيهم جنب بعض بـ display: flex على .row، وزوّد مسافة بينهم بـ gap.",s:r(`<div class="row">
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
`),check:'const r=__q(".row");if(__cs(r,"display")!=="flex")return "flex";const c=__qa(".card");return c.length===3&&c.every(x=>Math.abs(x.offsetTop-c[0].offsetTop)<3)||"side";'},cF:{t:"🔧 صلّح الـ 3 أخطاء: CSS",say:"الـ CSS ده فيه 3 أخطاء مستخبية، فالشكل مش طالع زي المطلوب. المطلوب: العنوان أحمر، والفقرة حجمها 24px، والصندوق أزرق وجواه مسافة 20px.",s:r(`<h1>Hello</h1>
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
`),check:'if(__cs(__q("h1"),"color")!=="rgb(255, 0, 0)")return "fix";if(parseFloat(__cs(__q("p"),"fontSize"))!==24)return "fix";const b=__q(".box");return __cs(b,"backgroundColor")==="rgb(0, 0, 255)"&&parseFloat(__cs(b,"paddingTop"))===20||"fix";'},cP:{t:"مشروع: كارت لاعب 🏆",say:"اعمل كارت للاعب بتحبه أو لنفسك: .card فيه اسم واسم الفريق، وليه خلفية، و padding، وحواف مدوّرة، والاسم بلون مختلف.",s:r(`<div class="card">
  <h2>Mo Salah</h2>
  <p>Liverpool ⚽</p>
</div>
`,`body { font-family: Tahoma; }
`),check:'const c=__q(".card");if(!c)return "card";if(__cs(c,"backgroundColor")==="rgba(0, 0, 0, 0)")return "cardBg";if(parseFloat(__cs(c,"paddingTop"))<10)return "pad";if(parseFloat(__cs(c,"borderTopLeftRadius"))<8)return "radius";const h=__q(".card h2,.card h1,.card h3");return h&&__cs(h,"color")!=="rgb(0, 0, 0)"||"nameColor";'},j0:{t:"مثال محلول: الزرار بيتكلم 👀",say:"لما تدوس الزرار، JavaScript بيغيّر الكلام اللي عليه. اقرا تاب JS: getElementById بيجيب الزرار، و onclick بيقول هيحصل إيه لما يتداس.",s:r(`<button id="hello">دوس هنا</button>
`,`body { font-family: Tahoma; text-align: center; padding: 30px; }
button { font-size: 22px; padding: 10px 24px; }
`,`const btn = document.getElementById("hello");

btn.onclick = function () {
  btn.textContent = "أهلاً بيك! 🎉";
};
`),check:'const b=__q("#hello");if(!b)return "noBtn";const t=b.textContent;b.click();await __sleep(30);return b.textContent!==t||"textChange";'},j1:{t:"المتغيرات و console.log",say:"اعمل متغير name فيه اسمك، ومتغير age فيه سنك (بـ let)، واطبعهم في الـ Console بـ console.log.",s:r("","",`// اكتب الكود هنا
`,"js"),check:'return (window.__logs||[]).length>=2||"log2"'},j2:{t:"العدّاد ➕",say:"لما تدوس ➕ الرقم يزيد 1. اعمل متغير count، ولما الزرار plus يتداس: زوّد count واكتبه في num بـ textContent.",s:r(`<h1 id="num">0</h1>
<button id="plus">➕</button>
`,`body { font-family: Tahoma; text-align: center; }
h1 { font-size: 80px; }
button { font-size: 30px; padding: 10px 30px; }
`,`// اكتب الكود هنا
`),check:'const b=__q("#plus");if(!b)return "noBtn";for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="3"||"count3";'},j3:{t:"زرار بيغيّر اللون 🎨",say:"لما زرار go يتداس، غيّر لون خلفية box بـ box.style.background.",s:r(`<div id="box"></div>
<button id="go">غيّر اللون</button>
`,`body { font-family: Tahoma; text-align: center; }
#box { width: 160px; height: 160px; margin: 20px auto; background: orange; border-radius: 20px; }
`,`// اكتب الكود هنا
`),check:'const box=__q("#box"),g=__q("#go");if(!box||!g)return "noBtn";const c0=__cs(box,"backgroundColor");g.click();await __sleep(60);return __cs(box,"backgroundColor")!==c0||"colorChange";'},jF:{t:"🔧 صلّح الـ 3 أخطاء: JavaScript",say:"الكود ده فيه 3 أخطاء مستخبية! دوس على الزرار، واقرا رسالة الخطأ في الـ Console. المطلوب: كل ما تدوس +1 الرقم يزيد 1 (1، 2، 3…).",s:r(`<h1 id="num">0</h1>
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
`),check:'const b=__q("#btn");for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="3"||"fix";'},jP:{t:"مشروع: امسك النجمة ⭐🏆",say:"لعبة! كل ما تدوس على النجمة: السكور يزيد 1، والنجمة تتنقل لمكان عشوائي (style.left و style.top مع Math.random).",s:r(`<p>Score: <b id="score">0</b></p>
<div id="star">⭐</div>
`,`body { font-family: Tahoma; margin: 0; height: 100vh; background: #1E1B4B; color: white; overflow: hidden; }
p { font-size: 22px; padding: 10px 16px; margin: 0; }
#star { position: absolute; left: 100px; top: 100px; font-size: 54px; cursor: pointer; }
`,`// اكتب الكود هنا
`),check:'const s=__q("#star");if(!s)return "noStar";const p0=s.getBoundingClientRect();s.click();await __sleep(30);s.click();await __sleep(30);if(__txt("#score").trim()!=="2")return "score2";const p1=s.getBoundingClientRect();return p0.left!==p1.left||p0.top!==p1.top||"moveStar";'}},R={h1:"محتاج عنوان <h1> فيه كلام.",p:"محتاج فقرة <p> فيها جملة.",ul:"محتاج قائمة <ul>.",li3:"القائمة محتاجة 3 عناصر <li> على الأقل.",img:'محتاج صورة <img src="...">.',a:'محتاج لينك <a href="...">.',aText:"اكتب كلام جوه اللينك.",h1Color:"غيّر لون العنوان بـ color.",h1Size:"كبّر العنوان: font-size 40px أو أكتر.",pad:"زوّد padding.",border:"زوّد إطار border بسُمك 3px على الأقل.",radius:"دوّر الحواف بـ border-radius.",flex:"استخدم display: flex على .row.",side:"الكروت لازم تبقى جنب بعض.",fix:"لسه فيه أخطاء! قارن الشكل بالمطلوب.",card:'محتاج عنصر class="card".',cardBg:"ادّي الكارت لون خلفية.",nameColor:"لوّن الاسم بلون غير الأسود.",noBtn:"الزرار مش موجود: اتأكد من الـ id.",textChange:"الكلام لازم يتغيّر لما الزرار يتداس.",log2:"اطبع حاجتين على الأقل بـ console.log.",count3:"لما تدوس 3 مرات الرقم لازم يبقى 3.",colorChange:"اللون لازم يتغيّر لما الزرار يتداس.",noStar:'النجمة مش موجودة: id="star".',score2:"كل ضغطة على النجمة لازم تزوّد السكور 1.",moveStar:"النجمة لازم تتنقل لمكان تاني لما تتداس."},I=`body { font-family: Tahoma; text-align: center; }
h1 { font-size: 70px; }
button { font-size: 26px; padding: 8px 24px; }
`;Object.assign(H,{hT:{t:"تدريب: جدول (table)",say:"تدريب: اصنع جدولًا لدرجاتك: <table>، وفيه صف عناوين بـ <th> (المادة والدرجة)، ثم 3 صفوف <tr> على الأقل، وكل خانة بـ <td>.",s:r(`<h1>درجاتي</h1>
`,`body { font-family: Tahoma; }
td, th { border: 1px solid #999; padding: 6px 12px; }
`),check:'if(!__q("table"))return "table";if(!__q("th"))return "th";return __qa("tr").filter(r=>r.querySelector("td")).length>=3||"rows3";'},hF:{t:"🔧 أصلح خطأً واحدًا: الوسم المفتوح",say:"كل الصفحة صارت عنوانًا كبيرًا! وسم <h1> لم يُغلق: الإغلاق يحتاج / هكذا </h1>.",s:r(`<h1>My page<h1>
<p>I love robots.</p>
`,`body { font-family: Tahoma; }
`),check:'const h=__qa("h1");return h.length===1&&h[0].textContent.trim()==="My page"&&!__q("h1 p")||"closeTag";'},cG:{t:"تدريب: شبكة 2 × 2 (Grid)",say:"تدريب: اجعل الكروت الأربعة شبكة من عمودين: display: grid و grid-template-columns: 1fr 1fr على .grid، ومسافة gap بينها.",s:r(`<div class="grid">
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
`),check:'const g=__q(".grid");if(__cs(g,"display")!=="grid")return "grid";const c=__qa(".card");return c.length===4&&Math.abs(c[0].offsetTop-c[1].offsetTop)<3&&c[2].offsetTop>c[0].offsetTop+10&&Math.abs(c[0].offsetLeft-c[2].offsetLeft)<3||"grid2";'},cFF:{t:"🔧 أصلح خطأً واحدًا: flex في المكان الخطأ",say:"الكروت ما زالت تحت بعضها! display: flex وُضع على .card، لكنه يجب أن يكون على الصندوق الذي يحملها.",s:r(`<div class="row">
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
`),check:'const r=__q(".row");if(__cs(r,"display")!=="flex")return "flex";const c=__qa(".card");return c.length===3&&c.every(x=>Math.abs(x.offsetTop-c[0].offsetTop)<3)||"side";'},jT:{t:"تدريب: العدّ التنازلي ➖",say:"تدريب: الرقم يبدأ من 10. كلما ضغطت الزر minus ينقص 1. اصنع متغيّرًا count = 10، وعند الضغط: count = count - 1 واكتبه في num.",s:r(`<h1 id="num">10</h1>
<button id="minus">➖</button>
`,I,`// اكتب الكود هنا
`),check:'const b=__q("#minus");if(!b)return "noBtn";for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="7"||"down7";'},jFF:{t:"🔧 أصلح خطأً واحدًا: 0111 بدل 3",say:'اضغط +1 ثلاث مرات فيظهر 0111 بدل 3! "1" بين علامتين كلام وليس رقمًا، والكلام يلتصق.',s:r(`<h1 id="num">0</h1>
<button id="btn">+1</button>
`,I,`let count = 0;
const btn = document.getElementById("btn");

btn.onclick = function () {
  count = count + "1";
  document.getElementById("num").textContent = count;
};
`),check:'const b=__q("#btn");for(let i=0;i<3;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="3"||"count3";'},jI:{t:"تدريب: if في JavaScript",say:"تدريب: count يبدأ من 2، والزر minus ينقص 1. لكن الرقم لا ينزل أبدًا تحت 0: if (count > 0) قبل النقص.",s:r(`<h1 id="num">2</h1>
<button id="minus">➖</button>
`,I,`let count = 2;
const btn = document.getElementById("minus");

btn.onclick = function () {
  // only if count > 0 (فقط إذا كان أكبر من 0)
  count = count - 1;
  document.getElementById("num").textContent = count;
};
`),check:'const b=__q("#minus");if(!b)return "noBtn";for(let i=0;i<4;i++){b.click();await __sleep(30)}return __txt("#num").trim()==="0"||"notBelow0";'},jIn:{t:"تدريب: اقرأ ما يكتبه الزائر ⌨",say:"تدريب: اكتب الاسم في خانة name ثم اضغط go، فيظهر في out: Hello, والاسم!. القيمة المكتوبة في الخانة هي .value.",s:r(`<input id="name" placeholder="اسمك">
<button id="go">go</button>
<h2 id="out"></h2>
`,`body { font-family: Tahoma; text-align: center; padding: 20px; }
input, button { font-size: 20px; padding: 6px 12px; }
`,`// اكتب الكود هنا
`),check:'const i=__q("#name"),g=__q("#go");if(!i||!g)return "noBtn";i.value="Ali";g.click();await __sleep(40);const t=__txt("#out");return /hello/i.test(t)&&t.includes("Ali")||"helloName";'},jC:{t:"تحدٍّ: قائمة المهام ✅🏆",say:'تحدٍّ: اكتب مهمة في خانة task واضغط add، فتُضاف إلى القائمة list عنصرًا جديدًا <li>. استعمل document.createElement("li") و appendChild، وامسح الخانة بعد الإضافة.',s:r(`<input id="task" placeholder="مهمة جديدة">
<button id="add">add</button>
<ul id="list"></ul>
`,`body { font-family: Tahoma; padding: 20px; }
input, button { font-size: 20px; padding: 6px 12px; }
li { font-size: 20px; margin: 6px 0; }
`,`// اكتب الكود هنا
`),check:'const i=__q("#task"),a=__q("#add");if(!i||!a)return "noBtn";i.value="Homework";a.click();await __sleep(30);i.value="Football";a.click();await __sleep(30);const L=__qa("#list li").map(x=>x.textContent.trim());return L.length===2&&L[0].includes("Homework")&&L[1].includes("Football")||"todo2";'}});Object.assign(R,{table:"اصنع جدولًا بـ <table>.",th:"أضف صف عناوين بـ <th>.",rows3:"أضف 3 صفوف فيها <td> على الأقل.",closeTag:"أغلق العنوان: </h1>.",grid:"استعمل display: grid على .grid.",grid2:"عمودان: grid-template-columns: 1fr 1fr.",down7:"بعد 3 ضغطات يجب أن يصير الرقم 7.",notBelow0:"الرقم لا ينزل تحت 0: if (count > 0).",helloName:"اكتب في out: Hello, والاسم من .value.",todo2:"كل ضغطة على add تضيف <li> فيه المهمة."});const st=new URLSearchParams(location.search),F=st.get("task"),f=H[F]||null;let v=!1,O="",V=0;function jt(){clearTimeout(V),V=setTimeout(()=>{let n=o("probeFrame");n||(n=document.createElement("iframe"),n.id="probeFrame",n.setAttribute("sandbox","allow-scripts"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1,n.style.cssText="position:fixed;left:-9999px;top:0;width:800px;height:600px;border:0;visibility:hidden",document.body.appendChild(n));const t=y;y=O="p"+Math.random().toString(36).slice(2);const e=M(!0);y=t,n.onload=()=>setTimeout(()=>{try{n.contentWindow.postMessage({__robo:O,k:"probe",code:f.check},"*")}catch{}},350),n.srcdoc=e},250)}addEventListener("message",n=>{const t=n.data,e=o("probeFrame");if(!(!f||!t||t.k!=="probe"||t.__robo!==O||!e||n.source!==e.contentWindow))if(t.r===!0&&!v){v=!0,o("taskBar").classList.add("done"),o("taskMsg").textContent="🎉 برافو! خلصت";try{parent.postMessage({type:"robo-task",tool:"web",task:F,ok:!0},location.origin)}catch{}}else v||(o("taskMsg").textContent=typeof t.r=="string"&&R[t.r]?"💡 "+R[t.r]:"")});function Y(){v=!1,P(f.s),w=!1,S(f.s.mode),x(f.s.mode==="js"?"js":F[0]==="c"?"css":F[0]==="j"?"js":"html"),o("taskBar").classList.remove("done"),o("taskMsg").textContent="",h(),w=!1}if(f){document.body.classList.add("task"),st.get("embed")&&document.body.classList.add("embed");const n=document.createElement("div");n.className="taskBar",n.id="taskBar",n.innerHTML='<b></b><span></span><em id="taskMsg"></em><button class="btn ghost small" id="taskReset">↺ من الأول</button>',n.querySelector("b").textContent=f.t,n.querySelector("span").textContent=f.say,document.querySelector("main").before(n),_t(n),o("taskReset").onclick=Y,Y()}else{const n=t=>JSON.stringify([t.html,t.css,t.js,t.mode]);c.list=c.list.filter(t=>!(t.blank&&t.blank===n(t))),c.list.forEach(t=>{delete t.blank}),c.cur=null,E(Object.assign({},D,{n:"✨ مشروع "+L(c.list.length+1)}));{const t=J();t&&(t.blank=n(t),T())}}window.__web={demo:()=>{!(d.html+d.css+d.js).replace(/<!--[\s\S]*?-->/g,"").trim()&&!u.state.doc.toString().trim()&&P(D)},get taskDone(){return v},TASKS:H,run:h,setMode:S,showTab:x,get docs(){return d},set:(n,t)=>{x(n),u.dispatch({changes:{from:0,to:u.state.doc.length,insert:t}})},newProject:E,EX:b};(function(){const n=document.querySelector(".panes");if(!n)return;const t=document.createElement("div");t.className="viewSw",t.setAttribute("role","tablist"),t.innerHTML='<button role="tab" data-v="code">✏️ الكود</button><button role="tab" data-v="out">👁 النتيجة</button>',n.before(t);const e=a=>{document.body.dataset.view=a,t.querySelectorAll("button").forEach(i=>i.setAttribute("aria-selected",String(i.dataset.v===a)))};t.onclick=a=>{const i=a.target.closest("[data-v]");i&&e(i.dataset.v)},e("code");const l=document.getElementById("runBtn");l&&l.addEventListener("click",()=>{matchMedia("(max-width: 760px)").matches&&e("out")})})();o("undoBtn").onclick=()=>{it(u),u.focus()};o("redoBtn").onclick=()=>{ct(u),u.focus()};mt({box:document.querySelector(".panes"),a:document.querySelector(".edPane"),b:document.querySelector(".outPane"),cssVar:"--pA",key:"robo-split-web",min:260,minB:260});
