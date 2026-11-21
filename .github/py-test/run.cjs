// TEMPORARY: solve journey Python levels with the real Python (Pyodide from the internet) using the new editor's ▶ button
const { chromium } = require('playwright');const setup=require('./jsetup.cjs');
(async () => { const b = await chromium.launch(); const ctx=await b.newContext({viewport:{width:1366,height:860},userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'});
  const p=await ctx.newPage();p.on('pageerror',e=>console.log('ERR',e.message.slice(0,140)));await setup(p,'http://localhost:8812');let ok=0,n=0;
  for(const code of ['PY-1','PY-2','PY-4','PY-6','PY2-2','PYA-2']){n++;await p.goto('http://localhost:8812/journey.html#'+code);await p.waitForTimeout(800);await p.reload();await p.waitForTimeout(4000);
    for(const t of ['يلا نجرّب!','تخطّي']){const l=p.locator('button:has-text("'+t+'")');if(await l.count()&&await l.first().isVisible()){await l.first().click();await p.waitForTimeout(300)}}
    const cm=await p.locator('#pyEd .cm-editor').count();if(!cm){console.log(code,'no editor (lesson?)');continue}
    // first a wrong run (the starting code), then «💡 شوف الحل» twice, then run the solution with the new ▶
    await p.click('#pyGo');for(let i=0;i<90;i++){await p.waitForTimeout(1000);if(await p.evaluate(()=>!document.getElementById('pyGo').disabled&&!!document.querySelector('.pop:not([hidden]), #pop:not([hidden])')||!document.getElementById('solBtn').hidden))break}
    console.log(code,'first run msg:',(await p.textContent('#msg')).slice(0,60),'| out:',(await p.textContent('#pyOut')).slice(0,60).replace(/\n/g,' / '));
    await p.keyboard.press('Escape');for(const t of ['تمام','حاضر','OK']){const l=p.locator('.pop button:has-text("'+t+'")');if(await l.count()&&await l.first().isVisible())await l.first().click()}
    if(await p.isHidden('#solBtn')){console.log(code,'no solution button');continue}
    await p.click('#solBtn');await p.waitForTimeout(300);await p.click('#solBtn');await p.waitForTimeout(800);
    const shown=await p.evaluate(()=>document.querySelector('#pyEd .cm-content').textContent.slice(0,40));
    await p.click('#pyGo');let won=false;for(let i=0;i<60;i++){await p.waitForTimeout(1000);won=await p.evaluate(()=>/شُفت الحل شغّال|لاقيت|برافو/.test(document.getElementById('msg').textContent)||!!document.getElementById('wpRetry'));if(won)break}
    const msg=(await p.textContent('#msg')).slice(0,80);if(won)ok++;console.log(code,'editor:',shown,'| win:',won,'|',msg);await p.screenshot({path:'/tmp/py/'+code+'.png'})}
  console.log('RESULT',ok+'/'+n);await b.close()})();
