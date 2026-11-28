const Q={btn:{ar:"زر",en:"Button",ic:"🔘"},lbl:{ar:"نص",en:"Label",ic:"🔤"},inp:{ar:"مربع كتابة",en:"Text box",ic:"⌨️"},img:{ar:"صورة",en:"Image",ic:"🖼️"},sw:{ar:"مفتاح",en:"Switch",ic:"🔀"},sld:{ar:"شريط",en:"Slider",ic:"🎚️"},spc:{ar:"مسافة",en:"Space",ic:"↕️"},cnv:{ar:"لوحة ألعاب",en:"Canvas",ic:"🎮"},spr:{ar:"شخصية",en:"Sprite",ic:"👾"},row:{ar:"صف أفقي",en:"Horizontal",ic:"↔️"},col:{ar:"عمود رأسي",en:"Vertical",ic:"↕️"},tbl:{ar:"جدول",en:"Table",ic:"▦"}},ee={btn:"Button",lbl:"Label",inp:"TextBox",img:"Image",sw:"Switch",sld:"Slider",spc:"Space",cnv:"Canvas",spr:"Sprite",row:"HorizontalArrangement",col:"VerticalArrangement",tbl:"TableArrangement"},te={row:1,col:1,tbl:1},ne={btn:{text:"اضغط هنا",bg:"#5B3DF5",color:"#FFFFFF",size:20,w:"full"},lbl:{text:"مرحبًا",color:"#1B2350",size:22,align:"center",bold:!0},inp:{hint:"اكتب هنا",text:"",size:18},img:{src:"🤖",size:120},sw:{text:"شغّال",on:!1,color:"#1B2350",size:18},sld:{min:0,max:100,val:50},spc:{h:24},cnv:{h:380,bg:"#E8F4FF"},spr:{src:"⭐",size:48,x:160,y:60,angle:0},row:{align:"center",gap:8,bg:"",scroll:!1},col:{gap:8,bg:"",h:0,scroll:!1},tbl:{cols:2,gap:8,bg:""}},K=String.raw`
const $s=document.getElementById('scr'),post=m=>{try{parent.postMessage(Object.assign({robo:'app'},m),'*')}catch(_){}};
const els={},H={click:{},change:{},ctap:{},cdrag:{}},timers=[],touches=[];
const isSpr=c=>c.k==='spr';
function css(e,c){e.style.color=c.color||'';if(c.k!=='spr')e.style.fontSize=(c.size||18)+'px';e.style.display=c.vis===false?'none':'';
  if(c.k==='btn'){e.style.background=c.bg||'#5B3DF5';e.style.width=c.w==='auto'?'auto':'100%'}
  if(c.k==='lbl'){e.style.textAlign=c.align||'center';e.style.fontWeight=c.bold?'800':'500';e.style.background=c.bg||'transparent'}
  if(c.k==='img'||c.k==='spr'){const z=+c.size||(c.k==='spr'?48:120);e.style.height=e.style.minHeight=z+'px';e.style.fontSize=Math.round(z*.82)+'px';
    if(e.dataset.src!==String(c.src)){e.dataset.src=String(c.src);e.innerHTML='';if(/^(data:|https?:)/.test(c.src||'')){const i=document.createElement('img');i.src=c.src;i.alt='';i.draggable=false;e.appendChild(i)}else e.textContent=c.src||'🖼️'}}
  if(c.k==='spr'){const z=+c.size||48;e.style.width=z+'px';e.style.left=((+c.x||0)-z/2)+'px';e.style.top=((+c.y||0)-z/2)+'px';e.style.transform='rotate('+(+c.angle||0)+'deg)'}
  if(c.k==='cnv'){e.style.height=(c.h||380)+'px';e.style.background=c.bg||'#E8F4FF'}
  if(c.k==='spc'){e.style.height=(c.h||24)+'px'}
  if(c.k==='row'||c.k==='col'||c.k==='tbl'){e.style.gap=(c.gap==null?8:+c.gap)+'px';e.style.background=c.bg||'';e.classList.toggle('scroll',!!c.scroll);e.classList.toggle('filled',!!c.bg);e.style.display=c.vis===false?'none':''}
  if(c.k==='row')e.style.justifyContent=c.align==='start'?'flex-start':c.align==='end'?'flex-end':'center';
  if(c.k==='col'){e.style.height=+c.h>0?(+c.h)+'px':'';e.style.overflowY=c.scroll?'auto':''}
  if(c.k==='tbl')e.style.gridTemplateColumns='repeat('+Math.max(1,Math.min(6,+c.cols||2))+',minmax(0,1fr))'}
function make(c){let e;
  if(c.k==='btn'){e=document.createElement('button');e.textContent=c.text}
  else if(c.k==='lbl'){e=document.createElement('div');e.textContent=c.text}
  else if(c.k==='inp'){e=document.createElement('input');e.placeholder=c.hint||'';e.value=c.text||'';e.dir='auto'}
  else if(c.k==='sw'){e=document.createElement('label');e.innerHTML='<input type=checkbox><span></span>';e.querySelector('span').textContent=c.text;e.querySelector('input').checked=!!c.on}
  else if(c.k==='sld'){e=document.createElement('input');e.type='range';e.min=c.min;e.max=c.max;e.value=c.val}
  else if(c.k==='cnv'){e=document.createElement('div');e.innerHTML='<canvas></canvas>'}
  else e=document.createElement('div');
  e.className='c '+c.k;e.dataset.id=c.id;css(e,c);return e}
const cnvOf=c=>{const cs=APP.comps.filter(x=>x.k==='cnv');return cs.find(x=>x.id===c.in)||cs[0]};
APP.comps.forEach(c=>{if(isSpr(c))return;const e=make(c);els[c.id]={e,c}});
// a part inside a row, a column or a table goes in it; the rest on the screen, in order
APP.comps.forEach(c=>{if(isSpr(c))return;const p=c.in&&els[c.in]&&/^(row|col|tbl)$/.test(els[c.in].c.k)&&c.in!==c.id?els[c.in].e:$s;p.appendChild(els[c.id].e)});
APP.comps.forEach(c=>{if(!isSpr(c))return;const e=make(c),cv=cnvOf(c);els[c.id]={e,c};(cv&&els[cv.id]?els[cv.id].e:$s).appendChild(e)});
function fitCanvas(c){const e=els[c.id].e,k=e.querySelector('canvas'),r=e.getBoundingClientRect();if(k.width!==Math.round(r.width)||k.height!==Math.round(r.height)){const im=k.width?k.getContext('2d').getImageData(0,0,k.width,k.height):null;k.width=Math.round(r.width);k.height=Math.round(r.height);if(im)k.getContext('2d').putImageData(im,0,0)}}
APP.comps.filter(c=>c.k==='cnv').forEach(fitCanvas);
document.body.style.background=APP.bg||'#fff';document.title=APP.title||'';
const C=id=>{const x=els[id];if(!x)throw new Error('NOPART:'+id);return x};
const box=id=>{const{c}=C(id),z=+c.size||48;return{l:+c.x-z/2,r:+c.x+z/2,t:+c.y-z/2,b:+c.y+z/2,z}};
const app={L:0,tx:0,ty:0,tiltx:0,tilty:0,heading:0,ax:0,ay:0,az:0,lat:0,lng:0,heard:'',
  on(ev,id,fn){if(ev==='start'||ev==='bt'||ev==='shake')H[ev]=(H[ev]||[]).concat(fn);else(H[ev][id]=H[ev][id]||[]).push(fn)},
  every(s,fn){H.every=(H.every||[]).concat([[s,fn]])},
  touch(a,b,fn){touches.push({a,b,fn,was:false})},
  async fire(fns){for(const f of fns||[]){app.L=200000;try{await f()}catch(e){fail(e)}}},
  set(id,p,v){const{e,c}=C(id);
    if(p==='text'){c.text=String(v);if(c.k==='inp')e.value=c.text;else if(c.k==='sw')e.querySelector('span').textContent=c.text;else if(c.k==='spr'){c.src=c.text;css(e,c)}else e.textContent=c.text}
    else if(p==='val'){if(c.k==='sw'){c.on=!!v;e.querySelector('input').checked=c.on}else if(c.k==='sld'){e.value=v}else if(c.k==='inp'){e.value=String(v)}else return app.set(id,'text',v)}
    else if(p==='vis'){c.vis=!!v;css(e,c)}else if(p==='size'||p==='x'||p==='y'||p==='angle'){c[p]=+v||0;css(e,c)}else{c[p]=v;css(e,c)}
    if(p==='x'||p==='y')return;post({t:'set',id,prop:p,v:p==='src'?String(v).slice(0,40):v})},
  get(id,p){const{e,c}=C(id);
    if(p==='val'||(p==='text'&&c.k==='inp'))return c.k==='sw'?e.querySelector('input').checked:c.k==='sld'?+e.value:c.k==='inp'?e.value:c.text;
    if(p==='text')return c.k==='spr'?c.src:c.text;if(p==='vis')return c.vis!==false;if(p==='x'||p==='y'||p==='size'||p==='angle')return +c[p]||0;return c[p]},
  moveTo(id,x,y){const{e,c}=C(id);c.x=+x||0;c.y=+y||0;css(e,c)},
  moveBy(id,x,y){const{e,c}=C(id);c.x=(+c.x||0)+(+x||0);c.y=(+c.y||0)+(+y||0);css(e,c)},
  touching(a,b){if(a===b)return false;const A=box(a),B=box(b),ca=C(a).c,cb=C(b).c;if(ca.vis===false||cb.vis===false)return false;const m=Math.min(A.z,B.z)*.18;return A.l+m<B.r&&A.r-m>B.l&&A.t+m<B.b&&A.b-m>B.t},
  edge(id,w){const{c}=C(id),cv=cnvOf(c),W=cv?els[cv.id].e.clientWidth:320,Hh=cv?els[cv.id].e.clientHeight:400,B=box(id);
    const l=B.l<=0,r=B.r>=W,t=B.t<=0,b=B.b>=Hh;return w==='l'?l:w==='r'?r:w==='t'?t:w==='b'?b:(l||r||t||b)},
  csize(id,a){const{e}=C(id);return a==='w'?e.clientWidth:e.clientHeight},
  dot(id,x,y,r,k){const{e}=C(id),g=e.querySelector('canvas').getContext('2d');g.fillStyle=k||'#5B3DF5';g.beginPath();g.arc(+x||0,+y||0,Math.max(1,+r||6),0,7);g.fill()},
  cclear(id){const k=C(id).e.querySelector('canvas');k.getContext('2d').clearRect(0,0,k.width,k.height)},
  screen(p,v){if(p==='bg'){document.body.style.background=v;post({t:'set',id:'',prop:'bg',v})}},
  toast(t){const d=document.getElementById('toast');d.textContent=String(t);d.hidden=false;clearTimeout(app.tt);app.tt=setTimeout(()=>d.hidden=true,2200);post({t:'toast',text:String(t)})},
  say(t){t=String(t);post({t:'say',text:t});if(window.RoboAndroid&&RoboAndroid.say){RoboAndroid.say(t);return}try{const u=new SpeechSynthesisUtterance(t);u.lang=/[؀-ۿ]/.test(t)?'ar-EG':'en-US';speechSynthesis.cancel();speechSynthesis.speak(u)}catch(_){}},
  vibrate(){post({t:'vibrate'});if(window.RoboAndroid&&RoboAndroid.vibrate){RoboAndroid.vibrate(200)}else try{navigator.vibrate&&navigator.vibrate(200)}catch(_){}const b=document.body;b.classList.remove('shk');void b.offsetWidth;b.classList.add('shk')},
  note(f,ms){post({t:'note',f});try{const A=app.ac||(app.ac=new(window.AudioContext||window.webkitAudioContext)()),o=A.createOscillator(),g=A.createGain();o.frequency.value=f;o.connect(g);g.connect(A.destination);g.gain.setValueAtTime(.25,A.currentTime);g.gain.exponentialRampToValueAtTime(.001,A.currentTime+(ms||300)/1000);o.start();o.stop(A.currentTime+(ms||300)/1000)}catch(_){}},
  wait(s){return new Promise(r=>setTimeout(r,Math.max(0,+s||0)*1000))},
  time(w){const d=new Date(),p=n=>String(n).padStart(2,'0');return w==='h'?d.getHours():w==='m'?d.getMinutes():w==='s'?d.getSeconds():w==='d'?d.getDate():w==='mo'?d.getMonth()+1:w==='y'?d.getFullYear():w==='wd'?['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'][d.getDay()]:w==='t'?p(d.getHours())+':'+p(d.getMinutes()):w==='ms'?Date.now():d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())},
  // the phone's place: the page around the app asks (a sandboxed app can't), or the Android app itself
  locate(){if(window.RoboAndroid&&RoboAndroid.locate){RoboAndroid.locate();return new Promise(r=>{app.geoW=r;setTimeout(()=>{if(app.geoW===r){app.geoW=null;r()}},20000)})}
    if(window.parent===window&&navigator.geolocation)return new Promise(r=>navigator.geolocation.getCurrentPosition(p=>{app.lat=+p.coords.latitude.toFixed(6);app.lng=+p.coords.longitude.toFixed(6);r()},()=>r(),{enableHighAccuracy:true,timeout:15000}));
    post({t:'geo'});return new Promise(r=>{app.geoW=r;setTimeout(()=>{if(app.geoW===r){app.geoW=null;r()}},20000)})},
  listen(){if(window.RoboAndroid&&RoboAndroid.listen){RoboAndroid.listen(document.documentElement.dir==='ltr'?'en-US':'ar-EG');return new Promise(r=>{app.heardW=r;setTimeout(()=>{if(app.heardW===r){app.heardW=null;r()}},30000)})}
    post({t:'listen'});return new Promise(r=>{app.heardW=r;setTimeout(()=>{if(app.heardW===r){app.heardW=null;r()}},30000)})},
  pick(id){return new Promise(r=>{const i=document.createElement('input');i.type='file';i.accept='image/*';i.setAttribute('capture','environment');
    i.onchange=()=>{const f=i.files&&i.files[0];if(!f)return r();const im=new Image();im.onload=()=>{const k=Math.min(1,480/Math.max(im.width,im.height)),cv=document.createElement('canvas');cv.width=im.width*k;cv.height=im.height*k;cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);app.set(id,'src',cv.toDataURL('image/jpeg',.85));r()};im.src=URL.createObjectURL(f)};i.click()})},
  sound(w){post({t:'sound',w});const S={pop:[[600,.06]],coin:[[988,.08],[1319,.25]],win:[[523,.12],[659,.12],[784,.12],[1047,.3]],lose:[[392,.18],[330,.18],[262,.4]],jump:[[300,.05],[500,.05],[800,.1]],laser:[[1400,.05],[900,.05],[500,.1]]}[w]||[[440,.2]];
    try{const A=app.ac||(app.ac=new(window.AudioContext||window.webkitAudioContext)());let t=A.currentTime;S.forEach(([f,d])=>{const o=A.createOscillator(),g=A.createGain();o.type=w==='laser'?'sawtooth':'square';o.frequency.value=f;o.connect(g);g.connect(A.destination);g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.start(t);o.stop(t+d);t+=d})}catch(_){}},
  rnd(a,b){a=Math.ceil(+a);b=Math.floor(+b);if(a>b)[a,b]=[b,a];return a+Math.floor(Math.random()*(b-a+1))},
  // Bluetooth: the Android app (RoboAndroid) talks to HC-05 itself; on a web page the page around the app does it (Web Bluetooth,
  // or the lab's test device), so the app asks it by message
  bt:{on:false,data:'',wait:null,
    connect(){if(window.RoboAndroid&&RoboAndroid.btConnect){RoboAndroid.btConnect();return new Promise(r=>app.bt.wait=r)}post({t:'bt',op:'connect'});return new Promise(r=>{app.bt.wait=r;setTimeout(()=>{if(app.bt.wait===r){app.bt.wait=null;r()}},60000)})},
    send(v){v=String(v);post({t:'bt',op:'send',v});if(window.RoboAndroid&&RoboAndroid.btSend)RoboAndroid.btSend(v)}},
};
window.__btState=on=>{app.bt.on=!!on;const w=app.bt.wait;app.bt.wait=null;if(w)w()};
window.__btRecv=v=>{app.bt.data=String(v);post({t:'btin',v:String(v)});app.fire(H.bt)};
addEventListener('message',e=>{const d=e.data;if(!d)return;
  if(d.robo==='bt'){if(d.op==='state')__btState(d.on);if(d.op==='recv')__btRecv(d.v)}
  if(d.robo==='geo'){if(d.lat!=null){app.lat=d.lat;app.lng=d.lng}const w=app.geoW;app.geoW=null;if(w)w()}
  if(d.robo==='heard')__heard(d.text)});
window.__geo=(la,ln)=>{if(la!=null){app.lat=+(+la).toFixed(6);app.lng=+(+ln).toFixed(6)}const w=app.geoW;app.geoW=null;if(w)w()};
window.__heard=t=>{app.heard=String(t||'');post({t:'heard',text:app.heard});const w=app.heardW;app.heardW=null;if(w)w()};
function fail(e){const m=String(e&&e.message||e);post({t:'err',msg:m});const d=document.getElementById('err');d.hidden=false;
  d.textContent=m.startsWith('NOPART:')?'⚠️ لا يوجد جزء اسمه «'+m.slice(7)+'»':m==='LOOP'?'⚠️ التكرار لا ينتهي':'⚠️ '+m}
if(MODE==='edit'){document.body.classList.add('edit');
  $s.addEventListener('click',ev=>{const t=ev.target.closest('.c');ev.preventDefault();post({t:'sel',id:t?t.dataset.id:''})},true);
  if(SEL&&els[SEL])els[SEL].e.classList.add('sel')}
else{
  try{new Function('app',CODE)(app)}catch(e){fail(e)}
  Object.values(els).forEach(({e,c})=>{
    if(c.k==='btn'||c.k==='img'||c.k==='spr')e.addEventListener('click',ev=>{ev.stopPropagation();post({t:'ev',ev:'click',id:c.id});app.fire(H.click[c.id])});
    const ch=()=>{post({t:'ev',ev:'change',id:c.id,v:app.get(c.id,'val')});app.fire(H.change[c.id])};
    if(c.k==='inp')e.addEventListener('input',ch);if(c.k==='sld')e.addEventListener('input',ch);if(c.k==='sw')e.querySelector('input').addEventListener('change',ch);
    if(c.k==='cnv'){let down=false;const xy=ev=>{const r=e.getBoundingClientRect();app.tx=Math.round(ev.clientX-r.left);app.ty=Math.round(ev.clientY-r.top)};
      e.style.touchAction='none';
      e.addEventListener('pointerdown',ev=>{if(ev.target.closest('.spr'))return;down=true;xy(ev);post({t:'ev',ev:'ctap',id:c.id});app.fire(H.ctap[c.id]);app.fire(H.cdrag[c.id])});
      e.addEventListener('pointermove',ev=>{if(!down)return;xy(ev);app.fire(H.cdrag[c.id])});
      addEventListener('pointerup',()=>down=false)}});
  // the phone's tilt (on a computer: the arrow keys)
  addEventListener('deviceorientation',ev=>{if(ev.gamma!=null){app.tiltx=Math.round(ev.gamma);app.tilty=Math.round(ev.beta||0);app.heading=Math.round(ev.webkitCompassHeading!=null?ev.webkitCompassHeading:(360-(ev.alpha||0))%360)}});
  let shook=0;addEventListener('devicemotion',ev=>{const a=ev.accelerationIncludingGravity;if(!a)return;app.ax=+(a.x||0).toFixed(1);app.ay=+(a.y||0).toFixed(1);app.az=+(a.z||0).toFixed(1);
    const m=Math.hypot(a.x||0,a.y||0,a.z||0);if(m>22&&Date.now()-shook>900){shook=Date.now();post({t:'ev',ev:'shake'});app.fire(H.shake)}});
  addEventListener('keydown',e=>{if(e.key==='s'&&!/INPUT|TEXTAREA/.test((document.activeElement||{}).tagName||'')){post({t:'ev',ev:'shake'});app.fire(H.shake)}});
  const K={ArrowLeft:['tiltx',-30],ArrowRight:['tiltx',30],ArrowUp:['tilty',-30],ArrowDown:['tilty',30]};
  addEventListener('keydown',e=>{const k=K[e.key];if(k){app[k[0]]=k[1];e.preventDefault()}});addEventListener('keyup',e=>{const k=K[e.key];if(k)app[k[0]]=0});
  (H.every||[]).forEach(([s,fn])=>{let busy=false;timers.push(setInterval(async()=>{if(busy)return;busy=true;await app.fire([fn]);busy=false},Math.max(.03,+s||1)*1000))});
  if(touches.length){const loop=()=>{touches.forEach(t=>{let now=false;try{now=app.touching(t.a,t.b)}catch(_){}if(now&&!t.was){post({t:'ev',ev:'touch',id:t.a});app.fire([t.fn])}t.was=now});requestAnimationFrame(loop)};requestAnimationFrame(loop)}
  app.fire(H.start);post({t:'ready'})}
`,I=`*{box-sizing:border-box}html,body{margin:0;min-height:100%}body{font-family:"IBM Plex Sans Arabic",Cairo,Tahoma,system-ui,sans-serif;color:#1B2350;-webkit-tap-highlight-color:transparent}
#scr{display:flex;flex-direction:column;align-items:center;gap:12px;padding:18px 16px 40px}
.c{max-width:100%}.btn{border:0;border-radius:16px;padding:12px 18px;font-weight:800;font-family:inherit;cursor:pointer;box-shadow:0 4px 0 rgba(0,0,0,.18)}.btn:active{transform:translateY(3px);box-shadow:0 1px 0 rgba(0,0,0,.18)}
.lbl{width:100%;line-height:1.5;border-radius:10px;padding:2px 6px;white-space:pre-wrap;overflow-wrap:anywhere}
.inp{width:100%;border:2px solid #C9D3EE;border-radius:14px;padding:10px 12px;font-family:inherit;background:#fff}
.img{display:flex;align-items:center;justify-content:center;line-height:1;width:100%}.img img{max-height:100%;max-width:100%;object-fit:contain;border-radius:12px}
.sw{display:flex;align-items:center;gap:10px;width:100%;font-weight:700}.sw input{width:26px;height:26px;accent-color:#5B3DF5}
.sld{width:100%;accent-color:#5B3DF5;height:30px}.spc{width:100%}
.row{display:flex;flex-direction:row;align-items:center;width:100%;border-radius:12px}.row>.c{flex:1 1 0;min-width:0}.row.scroll{overflow-x:auto;justify-content:flex-start!important}.row.scroll>.c{flex:0 0 auto;width:auto;max-width:none}
.col{display:flex;flex-direction:column;align-items:center;width:100%;border-radius:12px}.tbl{display:grid;width:100%;border-radius:12px;align-items:center}.tbl>.c{width:100%}
.filled{padding:8px}body.edit .row,body.edit .col,body.edit .tbl{min-height:46px;padding:6px;outline:2px dashed rgba(24,179,126,.6)}
.cnv{position:relative;width:100%;border-radius:16px;overflow:hidden;user-select:none;-webkit-user-select:none}.cnv canvas{position:absolute;inset:0;width:100%;height:100%}
.spr{position:absolute;display:flex;align-items:center;justify-content:center;line-height:1;cursor:pointer;user-select:none;-webkit-user-select:none}.spr img{width:100%;height:100%;object-fit:contain}
body.edit .c{outline:1.5px dashed rgba(91,61,245,.35);outline-offset:3px;cursor:pointer}body.edit .c.sel{outline:3px solid #FF8A1F}body.edit .spr{outline-offset:0}body.edit .spc{background:repeating-linear-gradient(45deg,#EEF2FA 0 6px,#fff 6px 12px)}
#toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#1B2350;color:#fff;padding:10px 18px;border-radius:14px;font-weight:700;max-width:86%;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.25)}
#err{position:fixed;inset:auto 8px 8px;background:#FFE4E4;color:#9B1C1C;border:2px solid #E5484D;border-radius:12px;padding:8px 12px;font-weight:700}
[hidden]{display:none!important}.shk{animation:shk .35s}@keyframes shk{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}`,C=e=>JSON.stringify(e).replace(/</g,"\\u003c"),q=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function ie(e,t,n,i,o){return'<!doctype html><html lang="ar" dir="'+(e.dir||"rtl")+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>'+q(e.title||"")+"</title><style>"+I+'</style></head><body><div id="scr"></div><div id="toast" hidden></div><div id="err" hidden></div><script>const APP='+C(e)+",MODE="+C(n)+",SEL="+C(i||"")+",CODE="+C(t||"")+";"+K+"<\/script></body></html>"}const m=new TextEncoder,y=()=>globalThis.crypto.subtle,l=(...e)=>{const t=e.reduce((o,s)=>o+s.length,0),n=new Uint8Array(t);let i=0;for(const o of e)n.set(o,i),i+=o.length;return n},r=e=>new Uint8Array([e&255,e>>>8&255]),c=e=>new Uint8Array([e&255,e>>>8&255,e>>>16&255,e>>>24&255]),B=e=>l(c(e%4294967296),c(Math.floor(e/4294967296))),p=e=>l(c(e.length),e),x=(e,t)=>e[t]|e[t+1]<<8,v=(e,t)=>(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0;let F=null;function N(e){if(!F){F=new Uint32Array(256);for(let n=0;n<256;n++){let i=n;for(let o=0;o<8;o++)i=i&1?3988292384^i>>>1:i>>>1;F[n]=i>>>0}}let t=4294967295;for(let n=0;n<e.length;n++)t=F[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}async function j(e){const t=new Blob([e]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(t).arrayBuffer())}const H=async e=>new Uint8Array(await y().digest("SHA-256",e));function z(e,t,n=0){e:for(let i=n;i<=e.length-t.length;i++){for(let o=0;o<t.length;o++)if(e[i+o]!==t[o])continue e;return i}return-1}const A=e=>{const t=new Uint8Array(e.length*2);for(let n=0;n<e.length;n++)t[2*n]=e.charCodeAt(n)&255,t[2*n+1]=e.charCodeAt(n)>>>8;return t};function V(e){const t=e instanceof Uint8Array?e:new Uint8Array(e);let n=t.length-22;for(;n>=0&&v(t,n)!==101010256;)n--;if(n<0)throw new Error("not a zip");const i=x(t,n+10),o=v(t,n+16),s=[];for(let d=0,a=o;d<i;d++){const h=x(t,a+10),f=v(t,a+16),g=v(t,a+20),b=v(t,a+24),w=x(t,a+28),S=x(t,a+30),E=x(t,a+32),R=v(t,a+42),W=new TextDecoder().decode(t.subarray(a+46,a+46+w)),T=R+30+x(t,R+26)+x(t,R+28);s.push({name:W,method:h,crc:f,csize:g,usize:b,data:t.subarray(T,T+g)}),a+=46+w+S+E}return s}async function L(e){return e.method===0?e.data:j(e.data)}function $(e){const t=[],n=[];let i=0;for(const a of e){const h=m.encode(a.name);let f=0;if(a.method===0){const w=i+30+h.length;w%4&&(f=4+(4-(w+4)%4)%4)}const g=f?l(r(55605),r(f-4),new Uint8Array(f-4)):new Uint8Array(0),b=l(c(67324752),r(20),r(2048),r(a.method),r(0),r(33),c(a.crc),c(a.csize),c(a.usize),r(h.length),r(g.length),h,g);t.push(b,a.data),n.push(l(c(33639248),r(20),r(20),r(2048),r(a.method),r(0),r(33),c(a.crc),c(a.csize),c(a.usize),r(h.length),r(0),r(0),r(0),r(0),c(0),c(i),h)),i+=b.length+a.data.length}const o=l(...t),s=l(...n),d=l(c(101010256),r(0),r(0),r(e.length),r(e.length),c(s.length),c(o.length),r(0));return{body:o,cd:s,eocd:d}}const P=(e,t)=>({name:e,method:0,crc:N(t),csize:t.length,usize:t.length,data:t});function X(e,t){const n=z(e,A("com.roboegypt.app.aaaaaaaaaaaa"));if(n<0)throw new Error("package placeholder not found");const i=e.slice();return i.set(A(t),n+A("com.roboegypt.app.").length),i}const D="ROBOAPPNAME_ROBOAPPNAME_ROBOAPPNAME_ROBOAPPNAME_ROBOAPPNAME_";function Y(e,t){const n=e.slice();let i=z(n,m.encode(D));if(i>=0){let s="",d=new Uint8Array(0);for(const a of Array.from(t)){const h=m.encode(s+a);if(h.length>60)break;s+=a,d=h}if(n[i-2]!==60||n[i-1]!==60)throw new Error("name placeholder looks different");return n[i-2]=s.length,n[i-1]=d.length,n.fill(0,i,i+61),n.set(d,i),n}if(i=z(n,A(D)),i<0)throw new Error("name placeholder not found");const o=Array.from(t).join("").slice(0,60);return n[i-2]=o.length&255,n[i-1]=o.length>>>8,n.fill(0,i,i+122),n.set(A(o),i),n}function u(e,t){const n=t.length,i=n<128?[n]:n<256?[129,n]:n<65536?[130,n>>8,n&255]:[131,n>>16,n>>8&255,n&255];return l(new Uint8Array([e,...i]),t)}const k=(...e)=>u(48,l(...e)),O=e=>{const t=e.split(".").map(Number),n=[40*t[0]+t[1]];for(const i of t.slice(2)){const o=[];let s=i;do o.unshift(s&127),s>>=7;while(s);for(let d=0;d<o.length-1;d++)o[d]|=128;n.push(...o)}return u(6,new Uint8Array(n))},U=()=>k(O("1.2.840.113549.1.1.11"),new Uint8Array([5,0])),_=e=>k(u(49,k(O("2.5.4.3"),u(12,m.encode(e)))));async function G(e,t){const n=globalThis.crypto.getRandomValues(new Uint8Array(8));n[0]=n[0]&127|1;const i=k(u(160,u(2,new Uint8Array([2]))),u(2,n),U(),_("Robo Apps"),k(u(23,m.encode("260101000000Z")),u(24,m.encode("20510101000000Z"))),_("Robo Apps"),t),o=new Uint8Array(await y().sign("RSASSA-PKCS1-v1_5",e.privateKey,i));return k(i,U(),u(3,l(new Uint8Array([0]),o)))}async function oe(){const e=await y().generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["sign","verify"]),t=new Uint8Array(await y().exportKey("spki",e.publicKey)),n=new Uint8Array(await y().exportKey("pkcs8",e.privateKey)),i=await G(e,t),o=s=>btoa(String.fromCharCode(...s));return{pkcs8:o(n),spki:o(t),cert:o(i)}}const M=e=>Uint8Array.from(atob(e),t=>t.charCodeAt(0));async function Z(e){const t=[];for(const n of e)for(let i=0;i<n.length;i+=1048576){const o=n.subarray(i,Math.min(n.length,i+1048576));t.push(await H(l(new Uint8Array([165]),c(o.length),o)))}return H(l(new Uint8Array([90]),c(t.length),...t))}async function J(e,t){const n=await y().importKey("pkcs8",M(t.pkcs8),{name:"RSASSA-PKCS1-v1_5",hash:"SHA-256"},!1,["sign"]),i=M(t.spki),o=M(t.cert),s=e.eocd.slice();s.set(c(e.body.length),16);const d=await Z([e.body,e.cd,s]),a=l(p(p(l(c(259),p(d)))),p(p(o)),p(new Uint8Array(0))),h=new Uint8Array(await y().sign("RSASSA-PKCS1-v1_5",n,a)),f=l(p(a),p(p(l(c(259),p(h)))),p(i)),g=p(p(f)),b=l(B(4+g.length),c(1896449818),g),w=b.length+8+16,S=l(B(w),b,B(w),m.encode("APK Sig Block 42")),E=e.eocd.slice();return E.set(c(e.body.length+S.length),16),l(e.body,S,e.cd,E)}async function ae(e,t){if(!/^[a-z]{12}$/.test(t.id12))throw new Error("id12 must be 12 letters a–z");const n=[];for(const i of V(e))i.name.startsWith("META-INF/")||(i.name==="AndroidManifest.xml"?n.push(P(i.name,X(await L(i),t.id12))):i.name==="resources.arsc"?n.push(P(i.name,Y(await L(i),t.name||"Robo App"))):i.name==="assets/index.html"?n.push(P(i.name,m.encode(t.html))):t.icon&&/ic_launcher[^/]*\.png$/.test(i.name)?n.push(P(i.name,t.icon)):n.push(i));return J($(n),t.key)}export{te as B,ne as D,ee as I,Q as K,ie as a,ae as m,oe as n};
