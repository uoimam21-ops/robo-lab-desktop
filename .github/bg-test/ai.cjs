// usage: node ai.cjs <dir> <base> <mock|real> <img>
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');const [,,D,BASE,MODE,IMG]=process.argv;
(async () => { const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 1366, height: 860 }, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' });
  if(fs.existsSync('/tmp/claude-0/scr/bl/package'))await ctx.route('https://cdn.jsdelivr.net/npm/blockly@10.4.3/**', r => { const f = path.join('/tmp/claude-0/scr/bl/package', new URL(r.request().url()).pathname.split('blockly@10.4.3/')[1]); fs.existsSync(f) ? r.fulfill({ path: f }) : r.abort(); });
  await ctx.route(/supabase-js/, r => r.fulfill({ contentType: 'text/javascript', body: '' })); await ctx.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  if(MODE==='mock')await ctx.route(/robo-bg\/worker\.js/,r=>r.fulfill({contentType:'text/javascript',body:`onmessage=async e=>{const {id,w,h}=e.data;for(let i=1;i<=4;i++){postMessage({t:'load',p:i/4,mb:115});await new Promise(r=>setTimeout(r,100))}postMessage({t:'work'});const m=new Uint8Array(w*h);for(let y=0;y<h;y++)for(let x=0;x<w;x++)m[y*w+x]=Math.hypot(x-w/2,y-h/2)<Math.min(w,h)*.3?255:0;postMessage({t:'done',id,mask:m},[m.buffer])}`}));
  const p = await ctx.newPage(); p.on('pageerror', e => console.log('ERR', (e.stack || e.message).split('\n').slice(0, 3).join(' | ')));p.on('console',m=>{if(m.type()==='error')console.log('console',m.text().slice(0,200))});
  await p.goto(BASE+'/lab/painter.html'); await p.waitForTimeout(3000);
  await p.setInputFiles('#pnFile',IMG);await p.waitForTimeout(1500);
  await p.click('[data-l="adj"]');await p.waitForTimeout(300);const t0=Date.now();await p.click('.pnpop [data-a="ai"]');
  let last='';for(let i=0;i<900;i++){const s=await p.textContent('#pnAiMsg').catch(()=>'');if(s!==last){console.log(((Date.now()-t0)/1000).toFixed(1)+'s',s);last=s}if(/خلصت|ماشتغلش/.test(s))break;await p.waitForTimeout(1000)}
  const al=await p.evaluate(()=>new Promise(r=>{const o=window.__PN().V.cur(),im=new Image();im.onload=()=>{const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const g=c.getContext('2d');g.drawImage(im,0,0);const a=(x,y)=>g.getImageData(Math.floor(x*im.width),Math.floor(y*im.height),1,1).data[3];r({corner:a(.02,.02),grass:a(.05,.9),ball:a(.5,.45),aim:!!o.aim})};im.src=o.src}));console.log('alpha',al);
  await p.screenshot({path:D+'/ai1.png'});
  // off and on again uses the kept mask, no new run
  await p.click('.pnpop [data-a="ai"]');await p.waitForTimeout(500);console.log('off',await p.textContent('#pnAiMsg'));await p.click('.pnpop [data-a="ai"]');await p.waitForTimeout(800);console.log('on again',await p.evaluate(()=>!!window.__PN().V.cur().adj.ai));
  await p.$eval('.pnpop [data-k="b"]',x=>{x.value=40;x.dispatchEvent(new Event('input'))});await p.waitForTimeout(800);
  await p.mouse.click(5,5);await p.waitForTimeout(300);await p.screenshot({path:D+'/ai2.png'});await b.close(); })();
