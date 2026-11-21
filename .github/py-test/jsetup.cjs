// shared: open the journey as a guest, age 12, everything open
module.exports=async function(p,base){await p.goto(base+'/journey.html');await p.waitForTimeout(2500);
  if(await p.locator('text=جرّب من غير حساب').count()){await p.click('text=جرّب من غير حساب');await p.waitForTimeout(600);await p.fill('#suName','تست');await p.click('button:has-text("١٢")');await p.click('text=يلا نبدأ');await p.waitForTimeout(1500)}
  await p.evaluate(()=>{const k='bibo-progress2',o=JSON.parse(localStorage.getItem(k)||'{}');o.all=true;localStorage.setItem(k,JSON.stringify(o))})}
