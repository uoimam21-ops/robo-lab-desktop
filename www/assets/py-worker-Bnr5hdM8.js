(function(){"use strict";let r=null,n=null,u=null,i=null;const o=(f,e={})=>self.postMessage({type:f,...e});let a=[];const c=()=>{a.length&&(o("turtle",{steps:a}),a=[])};self._tstep=(f,e,s,t,l,d,p,h)=>{a.push([f,e,s,t,l,d,p,h]),a.length>=100&&c()},self._tcmd=(f,e,s)=>{a.push({cmd:f,a:e,b:s})};const _=new TextDecoder;function m(f){const e=Math.random().toString(36).slice(2)+Date.now().toString(36);for(o("input",{prompt:f,id:e});;){const s=new XMLHttpRequest;try{s.open("GET","/__robo_input__?id="+e,!1),s.send(null)}catch{throw new Error("NO_INPUT")}if(s.status!==200)throw new Error("NO_INPUT");if(s.responseText!=="\0AGAIN")return s.responseText==="\0STOP"?null:s.responseText}}self._rinput=f=>{if(c(),!n)return m(String(f));const e=new Int32Array(n,4,1),s=new Int32Array(n,8,1);if(Atomics.store(e,0,0),o("input",{prompt:String(f)}),Atomics.wait(e,0,0),Atomics.load(e,0)===2)return Atomics.store(e,0,0),null;const t=_.decode(new Uint8Array(u,0,Atomics.load(s,0)).slice());return Atomics.store(e,0,0),t};const w=String.raw`
import sys, math, types, builtins, js
class _Stopped(BaseException): pass
def _input(prompt=""):
    try:
        r = js._rinput(str(prompt))
    except Exception as e:
        if "NO_INPUT" in str(e):
            raise RuntimeError("NO_INPUT") from None
        raise
    if r is None:
        raise KeyboardInterrupt()
    print(str(prompt) + r)
    return r
builtins.input = _input

class Turtle:
    def __init__(self):
        self._x = 0.0; self._y = 0.0; self._h = 0.0; self._down = True; self._c = "black"; self._fc = "black"; self._w = 1.0; self._v = True; self._fill = False
        self._send()
    def _send(self): js._tstep(self._x, self._y, self._h, self._down, self._c, self._w, self._v, self._fc if self._fill else "")
    def forward(self, d):
        d = float(d); a = math.radians(self._h)
        self._x += d * math.cos(a); self._y += d * math.sin(a); self._send()
    fd = forward
    def backward(self, d): self.forward(-float(d))
    bk = backward; back = backward
    def left(self, a): self._h = (self._h + float(a)) % 360; self._send()
    lt = left
    def right(self, a): self.left(-float(a))
    rt = right
    def setheading(self, a): self._h = float(a) % 360; self._send()
    seth = setheading
    def penup(self): self._down = False
    pu = penup; up = penup
    def pendown(self): self._down = True
    pd = pendown; down = pendown
    def isdown(self): return self._down
    def color(self, *c):
        if len(c) == 1: self._c = self._fc = str(c[0])
        elif len(c) >= 2: self._c = str(c[0]); self._fc = str(c[1])
        return self._c
    def pencolor(self, *c):
        if c: self._c = str(c[0])
        return self._c
    def fillcolor(self, *c):
        if c: self._fc = str(c[0])
        return self._fc
    def begin_fill(self): self._fill = True; js._tcmd("bfill", self._fc, 0); self._send()
    def end_fill(self): self._fill = False; js._tcmd("efill", self._fc, 0)
    def pensize(self, w=None):
        if w is not None: self._w = float(w)
        return self._w
    width = pensize
    def goto(self, x, y=None):
        if y is None: x, y = x
        self._x = float(x); self._y = float(y); self._send()
    setpos = goto; setposition = goto
    def setx(self, x): self.goto(x, self._y)
    def sety(self, y): self.goto(self._x, y)
    def home(self): self.goto(0, 0); self.setheading(0)
    def circle(self, r, extent=360, steps=None):
        r = float(r); extent = float(extent); n = int(steps or max(12, min(72, abs(extent) / 6)))
        step = 2 * abs(r) * math.sin(math.radians(abs(extent) / n / 2)); turn = extent / n * (1 if r >= 0 else -1)
        self.left(turn / 2)
        for _ in range(n):
            self.forward(step); self.left(turn)
        self.left(-turn / 2)
    def dot(self, size=None, *c): js._tcmd("dot", float(size or max(self._w + 4, self._w * 2)), str(c[0]) if c else self._c)
    def stamp(self): pass
    def speed(self, *a): js._tcmd("speed", float(a[0]) if a and isinstance(a[0], (int, float)) else 6, 0)
    def shape(self, *a): pass
    def hideturtle(self): self._v = False; self._send()
    ht = hideturtle
    def showturtle(self): self._v = True; self._send()
    st = showturtle
    def write(self, txt, *a, **k): js._tcmd("write", str(txt), self._c)
    def xcor(self): return round(self._x, 2)
    def ycor(self): return round(self._y, 2)
    def heading(self): return self._h
    def position(self): return (round(self._x, 2), round(self._y, 2))
    pos = position
    def distance(self, x, y=None):
        if y is None: x, y = x
        return math.hypot(self._x - float(x), self._y - float(y))
    def clear(self): js._tcmd("clear", 0, 0)
    def reset(self): js._tcmd("clear", 0, 0); self.__init__()
class _Screen:
    def bgcolor(self, *a):
        if a: js._tcmd("bg", str(a[0]), 0)
    def title(self, *a): pass
    def setup(self, *a, **k): pass
    def exitonclick(self): pass
    def mainloop(self): pass
    def tracer(self, *a): pass
    def update(self): pass
    def colormode(self, *a): pass
_tm = types.ModuleType("turtle")
_tm.Turtle = Turtle; _tm.Pen = Turtle; _tm.Screen = lambda: _Screen()
_tm.done = lambda: None; _tm.mainloop = lambda: None; _tm.exitonclick = lambda: None
_tm.bgcolor = lambda *a: _Screen().bgcolor(*a)
_default = []
def _dt():
    if not _default: _default.append(Turtle())
    return _default[0]
for _n in ["forward","fd","backward","bk","back","left","lt","right","rt","setheading","seth","penup","pu","up","pendown","pd","down","isdown","color","pencolor","fillcolor","begin_fill","end_fill","pensize","width","goto","setpos","setposition","setx","sety","home","circle","dot","speed","shape","hideturtle","ht","showturtle","st","write","xcor","ycor","heading","position","pos","distance","clear","reset"]:
    setattr(_tm, _n, (lambda n: lambda *a, **k: getattr(_dt(), n)(*a, **k))(_n))
sys.modules["turtle"] = _tm
`;self.onmessage=async f=>{const e=f.data;if(e.type==="init"){try{n=e.ctl||null,u=e.inp||null;const s=[e.url,"https://fastly.jsdelivr.net/pyodide/v0.26.4/full/",self.location.origin+"/vendor/pyodide/"].filter((l,d,p)=>l&&p.indexOf(l)===d);let t=null;for(const l of s)try{const{loadPyodide:d}=await import(l+"pyodide.mjs");r=await d({indexURL:l});break}catch(d){t=d,r=null}if(!r)throw t||new Error("pyodide");n&&r.setInterruptBuffer(new Uint8Array(n,0,1)),r.setStdout({write:l=>(o("out",{s:_.decode(l)}),l.length)}),r.setStderr({write:l=>(o("out",{s:_.decode(l),err:1}),l.length)}),r.runPython(w),o("ready",{sab:!!n})}catch(s){o("fail",{msg:String(s&&s.message||s)})}return}if(e.type==="run"){n&&(new Uint8Array(n,0,1)[0]=0),a=[],i=r.globals.get("dict")(),i.set("__name__","__main__");let s=null;try{try{await r.loadPackagesFromImports(e.code,{messageCallback:()=>{},errorCallback:()=>{}})}catch{}r.runPython(e.code,{globals:i,filename:"<exec>"})}catch(t){s={msg:String(t&&t.message||t),type:t&&t.type||""}}try{i.destroy()}catch{}c(),o("done",{error:s})}}})();
