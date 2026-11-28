import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css            */import{s as Rg}from"./split-DJAd-vnY.js";import{u as Lg,f as Rp,F as Uc,l as Xo,a as Lp}from"./fonts-BTYzBcCs.js";import{t as Dg}from"./task-peek-pvl45LCS.js";import{s as Ig}from"./spot-steps-D9vjl6mE.js";import{p as Fg}from"./projio-B9MQew-p.js";import{a as Nc,T as Fn,i as Ir}from"./common-Cu4stVfo.js";import"./lab-tours-DVw_e6oZ.js";import"./kbfix-DXdTXjVo.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="160",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ug=0,Oh=1,Ng=2,Dp=1,Og=2,Ii=3,_i=0,xn=1,pn=2,fs=0,Fr=1,Bh=2,zh=3,kh=4,Bg=5,Ls=100,zg=101,kg=102,Hh=103,Gh=104,Hg=200,Gg=201,Vg=202,Wg=203,xu=204,_u=205,Xg=206,Yg=207,qg=208,jg=209,Zg=210,$g=211,Kg=212,Jg=213,Qg=214,t0=0,e0=1,n0=2,xc=3,i0=4,s0=5,r0=6,o0=7,Ip=0,a0=1,c0=2,ds=0,l0=1,u0=2,h0=3,f0=4,d0=5,p0=6,Fp=300,Br=301,zr=302,yu=303,vu=304,Oc=306,Mu=1e3,oi=1001,Su=1002,dn=1003,Vh=1004,nl=1005,Wn=1006,m0=1007,Fo=1008,ps=1009,g0=1010,x0=1011,ju=1012,Up=1013,as=1014,cs=1015,Uo=1016,Np=1017,Op=1018,Bs=1020,_0=1021,ai=1023,y0=1024,v0=1025,zs=1026,kr=1027,M0=1028,Bp=1029,S0=1030,zp=1031,kp=1033,il=33776,sl=33777,rl=33778,ol=33779,Wh=35840,Xh=35841,Yh=35842,qh=35843,Hp=36196,jh=37492,Zh=37496,$h=37808,Kh=37809,Jh=37810,Qh=37811,tf=37812,ef=37813,nf=37814,sf=37815,rf=37816,of=37817,af=37818,cf=37819,lf=37820,uf=37821,al=36492,hf=36494,ff=36495,b0=36283,df=36284,pf=36285,mf=36286,Gp=3e3,ks=3001,E0=3200,w0=3201,Vp=0,T0=1,Xn="",$e="srgb",ki="srgb-linear",Zu="display-p3",Bc="display-p3-linear",_c="linear",Me="srgb",yc="rec709",vc="p3",Qs=7680,gf=519,A0=512,C0=513,P0=514,Wp=515,R0=516,L0=517,D0=518,I0=519,xf=35044,_f="300 es",bu=1035,Bi=2e3,Mc=2001;class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yf=1234567;const Ur=Math.PI/180,No=180/Math.PI;function Zs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function ke(n,t,e){return Math.max(t,Math.min(e,n))}function $u(n,t){return(n%t+t)%t}function F0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function U0(n,t,e){return n!==t?(e-n)/(t-n):0}function vo(n,t,e){return(1-e)*n+e*t}function N0(n,t,e,i){return vo(n,t,1-Math.exp(-e*i))}function O0(n,t=1){return t-Math.abs($u(n,t*2)-t)}function B0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function z0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function k0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function H0(n,t){return n+Math.random()*(t-n)}function G0(n){return n*(.5-Math.random())}function V0(n){n!==void 0&&(yf=n);let t=yf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function W0(n){return n*Ur}function X0(n){return n*No}function Eu(n){return(n&n-1)===0&&n!==0}function Y0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function q0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),h=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wi={DEG2RAD:Ur,RAD2DEG:No,generateUUID:Zs,clamp:ke,euclideanModulo:$u,mapLinear:F0,inverseLerp:U0,lerp:vo,damp:N0,pingpong:O0,smoothstep:B0,smootherstep:z0,randInt:k0,randFloat:H0,randFloatSpread:G0,seededRandom:V0,degToRad:W0,radToDeg:X0,isPowerOfTwo:Eu,ceilPowerOfTwo:Y0,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:q0,normalize:hn,denormalize:wr};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,s,r,o,a,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],y=s[0],m=s[3],p=s[6],_=s[1],x=s[4],v=s[7],E=s[2],T=s[5],b=s[8];return r[0]=o*y+a*_+c*E,r[3]=o*m+a*x+c*T,r[6]=o*p+a*v+c*b,r[1]=l*y+u*_+f*E,r[4]=l*m+u*x+f*T,r[7]=l*p+u*v+f*b,r[2]=h*y+d*_+g*E,r[5]=h*m+d*x+g*T,r[8]=h*p+d*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=f*y,t[1]=(s*l-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cl=new Qt;function Xp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function bc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function j0(){const n=bc("canvas");return n.style.display="block",n}const vf={};function Mo(n){n in vf||(vf[n]=!0,console.warn(n))}const Mf=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sf=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[ki]:{transfer:_c,primaries:yc,toReference:n=>n,fromReference:n=>n},[$e]:{transfer:Me,primaries:yc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bc]:{transfer:_c,primaries:vc,toReference:n=>n.applyMatrix3(Sf),fromReference:n=>n.applyMatrix3(Mf)},[Zu]:{transfer:Me,primaries:vc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sf),fromReference:n=>n.applyMatrix3(Mf).convertLinearToSRGB()}},Z0=new Set([ki,Bc]),me={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Z0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=aa[t].toReference,s=aa[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return aa[n].primaries},getTransfer:function(n){return n===Xn?_c:aa[n].transfer}};function Nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ll(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let tr;class Yp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tr===void 0&&(tr=bc("canvas")),tr.width=t.width,tr.height=t.height;const i=tr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=tr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Nr(e[i]/255)*255):e[i]=Nr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $0=0;class qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Zs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ul(s[o].image)):r.push(ul(s[o]))}else r=ul(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K0=0;class Tn extends js{constructor(t=Tn.DEFAULT_IMAGE,e=Tn.DEFAULT_MAPPING,i=oi,s=oi,r=Wn,o=Fo,a=ai,c=ps,l=Tn.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Zs(),this.name="",this.source=new qp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ks?$e:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mu:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Su:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mu:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Su:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?ks:Gp}set encoding(t){Mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ks?$e:Xn}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Fp;Tn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(d+1)/2,E=(p+1)/2,T=(u+h)/4,b=(f+y)/4,P=(g+m)/4;return x>v&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=b/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=P/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=b/r,s=P/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-y)/_,this.z=(h-u)/_,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J0 extends js{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(Mo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ks?$e:Xn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vs extends J0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class jp extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q0 extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(f!==y||c!==h||l!==d||u!==g){let m=1-a;const p=c*h+l*d+u*g+f*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),T=Math.atan2(E,p*_);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}const v=a*_;if(c=c*m+h*v,l=l*m+d*v,u=u*m+g*v,f=f*m+y*v,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hl.copy(this).projectOnVector(t),this.sub(hl)}reflect(t){return this.sub(hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hl=new w,bf=new Oe;class pe{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ca.copy(i.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jr),la.subVectors(this.max,Jr),er.subVectors(t.a,Jr),nr.subVectors(t.b,Jr),ir.subVectors(t.c,Jr),qi.subVectors(nr,er),ji.subVectors(ir,nr),ys.subVectors(er,ir);let e=[0,-qi.z,qi.y,0,-ji.z,ji.y,0,-ys.z,ys.y,qi.z,0,-qi.x,ji.z,0,-ji.x,ys.z,0,-ys.x,-qi.y,qi.x,0,-ji.y,ji.x,0,-ys.y,ys.x,0];return!fl(e,er,nr,ir,la)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,er,nr,ir,la))?!1:(ua.crossVectors(qi,ji),e=[ua.x,ua.y,ua.z],fl(e,er,nr,ir,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new w,new w,new w,new w,new w,new w,new w,new w],Qn=new w,ca=new pe,er=new w,nr=new w,ir=new w,qi=new w,ji=new w,ys=new w,Jr=new w,la=new w,ua=new w,vs=new w;function fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vs.fromArray(n,r);const a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),c=t.dot(vs),l=e.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const tx=new pe,Qr=new w,dl=new w;class Yo{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):tx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);const e=Qr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(dl)),this.expandByPoint(Qr.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new w,pl=new w,ha=new w,Zi=new w,ml=new w,fa=new w,gl=new w;class Yr{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pl.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(pl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ha),a=Zi.dot(this.direction),c=-Zi.dot(ha),l=Zi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pl).addScaledVector(ha,h),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,r){ml.subVectors(e,t),fa.subVectors(i,t),gl.crossVectors(ml,fa);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);const c=a*this.direction.dot(fa.crossVectors(Zi,fa));if(c<0)return null;const l=a*this.direction.dot(ml.cross(Zi));if(l<0||c+l>o)return null;const u=-a*Zi.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,s,r,o,a,c,l,u,f,h,d,g,y,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,f,h,d,g,y,m)}set(t,e,i,s,r,o,a,c,l,u,f,h,d,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/sr.setFromMatrixColumn(t,0).length(),r=1/sr.setFromMatrixColumn(t,1).length(),o=1/sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,y=l*f;e[0]=h+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ex,t,nx)}lookAt(t,e,i){const s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),$i.crossVectors(i,Ln),$i.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),$i.crossVectors(i,Ln)),$i.normalize(),da.crossVectors(Ln,$i),s[0]=$i.x,s[4]=da.x,s[8]=Ln.x,s[1]=$i.y,s[5]=da.y,s[9]=Ln.y,s[2]=$i.z,s[6]=da.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],y=i[6],m=i[10],p=i[14],_=i[3],x=i[7],v=i[11],E=i[15],T=s[0],b=s[4],P=s[8],S=s[12],M=s[1],L=s[5],I=s[9],O=s[13],D=s[2],F=s[6],k=s[10],W=s[14],q=s[3],V=s[7],tt=s[11],et=s[15];return r[0]=o*T+a*M+c*D+l*q,r[4]=o*b+a*L+c*F+l*V,r[8]=o*P+a*I+c*k+l*tt,r[12]=o*S+a*O+c*W+l*et,r[1]=u*T+f*M+h*D+d*q,r[5]=u*b+f*L+h*F+d*V,r[9]=u*P+f*I+h*k+d*tt,r[13]=u*S+f*O+h*W+d*et,r[2]=g*T+y*M+m*D+p*q,r[6]=g*b+y*L+m*F+p*V,r[10]=g*P+y*I+m*k+p*tt,r[14]=g*S+y*O+m*W+p*et,r[3]=_*T+x*M+v*D+E*q,r[7]=_*b+x*L+v*F+E*V,r[11]=_*P+x*I+v*k+E*tt,r[15]=_*S+x*O+v*W+E*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*h+i*l*h+s*a*d-i*c*d)+y*(+e*c*d-e*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+m*(+e*l*f-e*a*d-r*o*f+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-e*c*f+e*a*h+s*o*f-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],_=f*m*l-y*h*l+y*c*d-a*m*d-f*c*p+a*h*p,x=g*h*l-u*m*l-g*c*d+o*m*d+u*c*p-o*h*p,v=u*y*l-g*f*l+g*a*d-o*y*d-u*a*p+o*f*p,E=g*f*c-u*y*c-g*a*h+o*y*h+u*a*m-o*f*m,T=e*_+i*x+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=_*b,t[1]=(y*h*r-f*m*r-y*s*d+i*m*d+f*s*p-i*h*p)*b,t[2]=(a*m*r-y*c*r+y*s*l-i*m*l-a*s*p+i*c*p)*b,t[3]=(f*c*r-a*h*r-f*s*l+i*h*l+a*s*d-i*c*d)*b,t[4]=x*b,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*d+e*c*d)*b,t[8]=v*b,t[9]=(g*f*r-u*y*r-g*i*d+e*y*d+u*i*p-e*f*p)*b,t[10]=(o*y*r-g*a*r+g*i*l-e*y*l-o*i*p+e*a*p)*b,t[11]=(u*a*r-o*f*r-u*i*l+e*f*l+o*i*d-e*a*d)*b,t[12]=E*b,t[13]=(u*y*s-g*f*s+g*i*h-e*y*h-u*i*m+e*f*m)*b,t[14]=(g*a*s-o*y*s-g*i*c+e*y*c+o*i*m-e*a*m)*b,t[15]=(o*f*s-u*a*s+u*i*c-e*f*c-o*i*h+e*a*h)*b,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,y=o*u,m=o*f,p=a*f,_=c*l,x=c*u,v=c*f,E=i.x,T=i.y,b=i.z;return s[0]=(1-(y+p))*E,s[1]=(d+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(h+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+x)*b,s[9]=(m-_)*b,s[10]=(1-(h+y))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=sr.set(s[0],s[1],s[2]).length();const o=sr.set(s[4],s[5],s[6]).length(),a=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ti.copy(this);const l=1/r,u=1/o,f=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,e.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Bi){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let d,g;if(a===Bi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Mc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Bi){const c=this.elements,l=1/(e-t),u=1/(i-s),f=1/(o-r),h=(e+t)*l,d=(i+s)*u;let g,y;if(a===Bi)g=(o+r)*f,y=-2*f;else if(a===Mc)g=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const sr=new w,ti=new ae,ex=new w(0,0,0),nx=new w(1,1,1),$i=new w,da=new w,Ln=new w,Ef=new ae,wf=new Oe;class Xi{constructor(t=0,e=0,i=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ef,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wf.setFromEuler(this),this.setFromQuaternion(wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ix=0;const Tf=new w,rr=new Oe,Ti=new ae,pa=new w,to=new w,sx=new w,rx=new Oe,Af=new w(1,0,0),Cf=new w(0,1,0),Pf=new w(0,0,1),ox={type:"added"},ax={type:"removed"};class Fe extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new w,e=new Xi,i=new Oe,s=new w(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Qt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(Af,t)}rotateY(t){return this.rotateOnAxis(Cf,t)}rotateZ(t){return this.rotateOnAxis(Pf,t)}translateOnAxis(t,e){return Tf.copy(t).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Af,t)}translateY(t){return this.translateOnAxis(Cf,t)}translateZ(t){return this.translateOnAxis(Pf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pa.copy(t):pa.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(to,pa,this.up):Ti.lookAt(pa,to,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Ti),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ox)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ax)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,sx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,rx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new w(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new w,Ai=new w,xl=new w,Ci=new w,or=new w,ar=new w,Rf=new w,_l=new w,yl=new w,vl=new w;let ma=!1;class Se{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ei.subVectors(t,e),s.cross(ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ei.subVectors(s,e),Ai.subVectors(i,e),xl.subVectors(t,e);const o=ei.dot(ei),a=ei.dot(Ai),c=ei.dot(xl),l=Ai.dot(Ai),u=Ai.dot(xl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(t,e,i,s,r,o,a,c){return ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ma=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(o,Ci.y),c.addScaledVector(a,Ci.z),c)}static isFrontFacing(t,e,i,s){return ei.subVectors(i,e),Ai.subVectors(t,e),ei.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Se.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Se.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ma=!0),Se.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return Se.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Se.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Se.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;or.subVectors(s,i),ar.subVectors(r,i),_l.subVectors(t,i);const c=or.dot(_l),l=ar.dot(_l);if(c<=0&&l<=0)return e.copy(i);yl.subVectors(t,s);const u=or.dot(yl),f=ar.dot(yl);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(or,o);vl.subVectors(t,r);const d=or.dot(vl),g=ar.dot(vl);if(g>=0&&d<=g)return e.copy(r);const y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ar,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Rf.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Rf,a);const p=1/(m+y+h);return o=y*p,a=h*p,e.copy(i).addScaledVector(or,o).addScaledVector(ar,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=i,me.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=me.workingColorSpace){if(t=$u(t,1),e=ke(e,0,1),i=ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Zp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}copyLinearToSRGB(t){return this.r=ll(t.r),this.g=ll(t.g),this.b=ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return me.fromWorkingColorSpace(en.copy(this),t),Math.round(ke(en.r*255,0,255))*65536+Math.round(ke(en.g*255,0,255))*256+Math.round(ke(en.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(en.copy(this),e);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=$e){me.fromWorkingColorSpace(en.copy(this),t);const e=en.r,i=en.g,s=en.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(ga);const i=vo(Ki.h,ga.h,e),s=vo(Ki.s,ga.s,e),r=vo(Ki.l,ga.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new oe;oe.NAMES=Zp;let cx=0;class qr extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Fr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=_u,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xu&&(i.blendSrc=this.blendSrc),this.blendDst!==_u&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $s extends qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new w,xa=new Q;class sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=hn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xf&&(t.usage=this.usage),t}}class $p extends sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Kp extends sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let lx=0;const zn=new ae,Sl=new Fe,cr=new w,Dn=new pe,eo=new pe,Ze=new w;class Ge extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xp(t)?Kp:$p)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Dn.min,eo.min),Dn.expandByPoint(Ze),Ze.addVectors(Dn.max,eo.max),Dn.expandByPoint(Ze)):(Dn.expandByPoint(eo.min),Dn.expandByPoint(eo.max))}Dn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ze.fromBufferAttribute(a,l),c&&(cr.fromBufferAttribute(t,l),Ze.add(cr)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let M=0;M<a;M++)l[M]=new w,u[M]=new w;const f=new w,h=new w,d=new w,g=new Q,y=new Q,m=new Q,p=new w,_=new w;function x(M,L,I){f.fromArray(s,M*3),h.fromArray(s,L*3),d.fromArray(s,I*3),g.fromArray(o,M*2),y.fromArray(o,L*2),m.fromArray(o,I*2),h.sub(f),d.sub(f),y.sub(g),m.sub(g);const O=1/(y.x*m.y-m.x*y.y);isFinite(O)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-y.y).multiplyScalar(O),_.copy(d).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(O),l[M].add(p),l[L].add(p),l[I].add(p),u[M].add(_),u[L].add(_),u[I].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let M=0,L=v.length;M<L;++M){const I=v[M],O=I.start,D=I.count;for(let F=O,k=O+D;F<k;F+=3)x(i[F+0],i[F+1],i[F+2])}const E=new w,T=new w,b=new w,P=new w;function S(M){b.fromArray(r,M*3),P.copy(b);const L=l[M];E.copy(L),E.sub(b.multiplyScalar(b.dot(L))).normalize(),T.crossVectors(P,L);const O=T.dot(u[M])<0?-1:1;c[M*4]=E.x,c[M*4+1]=E.y,c[M*4+2]=E.z,c[M*4+3]=O}for(let M=0,L=v.length;M<L;++M){const I=v[M],O=I.start,D=I.count;for(let F=O,k=O+D;F<k;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,u=new w,f=new w;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new ae,Ms=new Yr,_a=new Yo,Df=new w,lr=new w,ur=new w,hr=new w,bl=new w,ya=new w,va=new Q,Ma=new Q,Sa=new Q,If=new w,Ff=new w,Uf=new w,ba=new w,Ea=new w;class pt extends Fe{constructor(t=new Ge,e=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(bl.fromBufferAttribute(f,t),o?ya.addScaledVector(bl,u):ya.addScaledVector(bl.sub(e),u))}e.add(ya)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(_a.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(_a,Df)===null||Ms.origin.distanceToSquared(Df)>(t.far-t.near)**2))&&(Lf.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,E=x;v<E;v+=3){const T=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);s=wa(this,p,t,i,l,u,f,T,b,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=wa(this,o,t,i,l,u,f,_,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,E=x;v<E;v+=3){const T=v,b=v+1,P=v+2;s=wa(this,p,t,i,l,u,f,T,b,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const _=m,x=m+1,v=m+2;s=wa(this,o,t,i,l,u,f,_,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ux(n,t,e,i,s,r,o,a){let c;if(t.side===xn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===_i,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ea);return l<e.near||l>e.far?null:{distance:l,point:Ea.clone(),object:n}}function wa(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,lr),n.getVertexPosition(c,ur),n.getVertexPosition(l,hr);const u=ux(n,t,e,i,lr,ur,hr,ba);if(u){s&&(va.fromBufferAttribute(s,a),Ma.fromBufferAttribute(s,c),Sa.fromBufferAttribute(s,l),u.uv=Se.getInterpolation(ba,lr,ur,hr,va,Ma,Sa,new Q)),r&&(va.fromBufferAttribute(r,a),Ma.fromBufferAttribute(r,c),Sa.fromBufferAttribute(r,l),u.uv1=Se.getInterpolation(ba,lr,ur,hr,va,Ma,Sa,new Q),u.uv2=u.uv1),o&&(If.fromBufferAttribute(o,a),Ff.fromBufferAttribute(o,c),Uf.fromBufferAttribute(o,l),u.normal=Se.getInterpolation(ba,lr,ur,hr,If,Ff,Uf,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new w,materialIndex:0};Se.getNormal(lr,ur,hr,f.normal),u.face=f}return u}class _e extends Ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function g(y,m,p,_,x,v,E,T,b,P,S){const M=v/b,L=E/P,I=v/2,O=E/2,D=T/2,F=b+1,k=P+1;let W=0,q=0;const V=new w;for(let tt=0;tt<k;tt++){const et=tt*L-O;for(let ut=0;ut<F;ut++){const Z=ut*M-I;V[y]=Z*_,V[m]=et*x,V[p]=D,l.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=T>0?1:-1,u.push(V.x,V.y,V.z),f.push(ut/b),f.push(1-tt/P),W+=1}}for(let tt=0;tt<P;tt++)for(let et=0;et<b;et++){const ut=h+et+F*tt,Z=h+et+F*(tt+1),nt=h+(et+1)+F*(tt+1),yt=h+(et+1)+F*tt;c.push(ut,Z,yt),c.push(Z,nt,yt),q+=6}a.addGroup(d,q,S),d+=q,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function fn(n){const t={};for(let e=0;e<n.length;e++){const i=Hr(n[e]);for(const s in i)t[s]=i[s]}return t}function hx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jp(n){return n.getRenderTarget()===null?n.outputColorSpace:me.workingColorSpace}const fx={clone:Hr,merge:fn};var dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ws extends qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hr(t.uniforms),this.uniformsGroups=hx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Qp extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends Qp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fr=-90,dr=1;class mx extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(fr,dr,t,e);s.layers=this.layers,this.add(s);const r=new In(fr,dr,t,e);r.layers=this.layers,this.add(r);const o=new In(fr,dr,t,e);o.layers=this.layers,this.add(o);const a=new In(fr,dr,t,e);a.layers=this.layers,this.add(a);const c=new In(fr,dr,t,e);c.layers=this.layers,this.add(c);const l=new In(fr,dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class tm extends Tn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Br,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gx extends Vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Mo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ks?$e:Xn),this.texture=new tm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _e(5,5,5),r=new Ws({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:fs});r.uniforms.tEquirect.value=e;const o=new pt(s,r),a=e.minFilter;return e.minFilter===Fo&&(e.minFilter=Wn),new mx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const El=new w,xx=new w,_x=new Qt;class Mn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=El.subVectors(i,e).cross(xx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(El),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_x.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Yo,Ta=new w;class Ju{constructor(t=new Mn,e=new Mn,i=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],y=s[10],m=s[11],p=s[12],_=s[13],x=s[14],v=s[15];if(i[0].setComponents(c-r,h-l,m-d,v-p).normalize(),i[1].setComponents(c+r,h+l,m+d,v+p).normalize(),i[2].setComponents(c+o,h+u,m+g,v+_).normalize(),i[3].setComponents(c-o,h-u,m-g,v-_).normalize(),i[4].setComponents(c-a,h-f,m-y,v-x).normalize(),e===Bi)i[5].setComponents(c+a,h+f,m+y,v+x).normalize();else if(e===Mc)i[5].setComponents(a,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function em(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function yx(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,u){const f=l.array,h=l.usage,d=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),l.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,l),d.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let y=0,m=g.length;y<m;y++){const p=g[y];e?n.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):n.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}class qo extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const _=p*h-o;for(let x=0;x<l;x++){const v=x*f-r;g.push(v,-_,0),y.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const x=_+l*p,v=_+l*(p+1),E=_+1+l*(p+1),T=_+1+l*p;d.push(x,v,T),d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.widthSegments,t.heightSegments)}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ex=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,U_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,N_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,py=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,By=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ky=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:vx,alphahash_pars_fragment:Mx,alphamap_fragment:Sx,alphamap_pars_fragment:bx,alphatest_fragment:Ex,alphatest_pars_fragment:wx,aomap_fragment:Tx,aomap_pars_fragment:Ax,batching_pars_vertex:Cx,batching_vertex:Px,begin_vertex:Rx,beginnormal_vertex:Lx,bsdfs:Dx,iridescence_fragment:Ix,bumpmap_pars_fragment:Fx,clipping_planes_fragment:Ux,clipping_planes_pars_fragment:Nx,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Bx,color_fragment:zx,color_pars_fragment:kx,color_pars_vertex:Hx,color_vertex:Gx,common:Vx,cube_uv_reflection_fragment:Wx,defaultnormal_vertex:Xx,displacementmap_pars_vertex:Yx,displacementmap_vertex:qx,emissivemap_fragment:jx,emissivemap_pars_fragment:Zx,colorspace_fragment:$x,colorspace_pars_fragment:Kx,envmap_fragment:Jx,envmap_common_pars_fragment:Qx,envmap_pars_fragment:t_,envmap_pars_vertex:e_,envmap_physical_pars_fragment:d_,envmap_vertex:n_,fog_vertex:i_,fog_pars_vertex:s_,fog_fragment:r_,fog_pars_fragment:o_,gradientmap_pars_fragment:a_,lightmap_fragment:c_,lightmap_pars_fragment:l_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:h_,lights_pars_begin:f_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:x_,lights_physical_fragment:__,lights_physical_pars_fragment:y_,lights_fragment_begin:v_,lights_fragment_maps:M_,lights_fragment_end:S_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:w_,logdepthbuf_vertex:T_,map_fragment:A_,map_pars_fragment:C_,map_particle_fragment:P_,map_particle_pars_fragment:R_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:D_,morphcolor_vertex:I_,morphnormal_vertex:F_,morphtarget_pars_vertex:U_,morphtarget_vertex:N_,normal_fragment_begin:O_,normal_fragment_maps:B_,normal_pars_fragment:z_,normal_pars_vertex:k_,normal_vertex:H_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:W_,clearcoat_pars_fragment:X_,iridescence_pars_fragment:Y_,opaque_fragment:q_,packing:j_,premultiplied_alpha_fragment:Z_,project_vertex:$_,dithering_fragment:K_,dithering_pars_fragment:J_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:sy,skinbase_vertex:ry,skinning_pars_vertex:oy,skinning_vertex:ay,skinnormal_vertex:cy,specularmap_fragment:ly,specularmap_pars_fragment:uy,tonemapping_fragment:hy,tonemapping_pars_fragment:fy,transmission_fragment:dy,transmission_pars_fragment:py,uv_pars_fragment:my,uv_pars_vertex:gy,uv_vertex:xy,worldpos_vertex:_y,background_vert:yy,background_frag:vy,backgroundCube_vert:My,backgroundCube_frag:Sy,cube_vert:by,cube_frag:Ey,depth_vert:wy,depth_frag:Ty,distanceRGBA_vert:Ay,distanceRGBA_frag:Cy,equirect_vert:Py,equirect_frag:Ry,linedashed_vert:Ly,linedashed_frag:Dy,meshbasic_vert:Iy,meshbasic_frag:Fy,meshlambert_vert:Uy,meshlambert_frag:Ny,meshmatcap_vert:Oy,meshmatcap_frag:By,meshnormal_vert:zy,meshnormal_frag:ky,meshphong_vert:Hy,meshphong_frag:Gy,meshphysical_vert:Vy,meshphysical_frag:Wy,meshtoon_vert:Xy,meshtoon_frag:Yy,points_vert:qy,points_frag:jy,shadow_vert:Zy,shadow_frag:$y,sprite_vert:Ky,sprite_frag:Jy},xt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},gi={basic:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new oe(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:fn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:fn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new oe(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:fn([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:fn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:fn([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:fn([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:fn([xt.common,xt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:fn([xt.lights,xt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};gi.physical={uniforms:fn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Aa={r:0,b:0,g:0};function Qy(n,t,e,i,s,r,o){const a=new oe(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?y(a,c):x&&x.isColor&&(y(x,1),_=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Oc)?(u===void 0&&(u=new pt(new _e(1,1,1),new Ws({name:"BackgroundCubeMaterial",uniforms:Hr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=me.getTransfer(x.colorSpace)!==Me,(f!==x||h!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pt(new qo(2,2),new Ws({name:"BackgroundMaterial",uniforms:Hr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=me.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(Aa,Jp(n)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function tv(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function f(D,F,k,W,q){let V=!1;if(o){const tt=y(W,k,F);l!==tt&&(l=tt,d(l.object)),V=p(D,W,k,q),V&&_(D,W,k,q)}else{const tt=F.wireframe===!0;(l.geometry!==W.id||l.program!==k.id||l.wireframe!==tt)&&(l.geometry=W.id,l.program=k.id,l.wireframe=tt,V=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,P(D,F,k,W),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function y(D,F,k){const W=k.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let V=q[F.id];V===void 0&&(V={},q[F.id]=V);let tt=V[W];return tt===void 0&&(tt=m(h()),V[W]=tt),tt}function m(D){const F=[],k=[],W=[];for(let q=0;q<s;q++)F[q]=0,k[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:W,object:D,attributes:{},index:null}}function p(D,F,k,W){const q=l.attributes,V=F.attributes;let tt=0;const et=k.getAttributes();for(const ut in et)if(et[ut].location>=0){const nt=q[ut];let yt=V[ut];if(yt===void 0&&(ut==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),ut==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),nt===void 0||nt.attribute!==yt||yt&&nt.data!==yt.data)return!0;tt++}return l.attributesNum!==tt||l.index!==W}function _(D,F,k,W){const q={},V=F.attributes;let tt=0;const et=k.getAttributes();for(const ut in et)if(et[ut].location>=0){let nt=V[ut];nt===void 0&&(ut==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),ut==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));const yt={};yt.attribute=nt,nt&&nt.data&&(yt.data=nt.data),q[ut]=yt,tt++}l.attributes=q,l.attributesNum=tt,l.index=W}function x(){const D=l.newAttributes;for(let F=0,k=D.length;F<k;F++)D[F]=0}function v(D){E(D,0)}function E(D,F){const k=l.newAttributes,W=l.enabledAttributes,q=l.attributeDivisors;k[D]=1,W[D]===0&&(n.enableVertexAttribArray(D),W[D]=1),q[D]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),q[D]=F)}function T(){const D=l.newAttributes,F=l.enabledAttributes;for(let k=0,W=F.length;k<W;k++)F[k]!==D[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function b(D,F,k,W,q,V,tt){tt===!0?n.vertexAttribIPointer(D,F,k,q,V):n.vertexAttribPointer(D,F,k,W,q,V)}function P(D,F,k,W){if(i.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const q=W.attributes,V=k.getAttributes(),tt=F.defaultAttributeValues;for(const et in V){const ut=V[et];if(ut.location>=0){let Z=q[et];if(Z===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const nt=Z.normalized,yt=Z.itemSize,Tt=e.get(Z);if(Tt===void 0)continue;const Et=Tt.buffer,Bt=Tt.type,Gt=Tt.bytesPerElement,Ct=i.isWebGL2===!0&&(Bt===n.INT||Bt===n.UNSIGNED_INT||Z.gpuType===Up);if(Z.isInterleavedBufferAttribute){const Vt=Z.data,N=Vt.stride,ht=Z.offset;if(Vt.isInstancedInterleavedBuffer){for(let K=0;K<ut.locationSize;K++)E(ut.location+K,Vt.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let K=0;K<ut.locationSize;K++)v(ut.location+K);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let K=0;K<ut.locationSize;K++)b(ut.location+K,yt/ut.locationSize,Bt,nt,N*Gt,(ht+yt/ut.locationSize*K)*Gt,Ct)}else{if(Z.isInstancedBufferAttribute){for(let Vt=0;Vt<ut.locationSize;Vt++)E(ut.location+Vt,Z.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Vt=0;Vt<ut.locationSize;Vt++)v(ut.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Vt=0;Vt<ut.locationSize;Vt++)b(ut.location+Vt,yt/ut.locationSize,Bt,nt,yt*Gt,yt/ut.locationSize*Vt*Gt,Ct)}}else if(tt!==void 0){const nt=tt[et];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(ut.location,nt);break;case 3:n.vertexAttrib3fv(ut.location,nt);break;case 4:n.vertexAttrib4fv(ut.location,nt);break;default:n.vertexAttrib1fv(ut.location,nt)}}}}T()}function S(){I();for(const D in a){const F=a[D];for(const k in F){const W=F[k];for(const q in W)g(W[q].object),delete W[q];delete F[k]}delete a[D]}}function M(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const k in F){const W=F[k];for(const q in W)g(W[q].object),delete W[q];delete F[k]}delete a[D.id]}function L(D){for(const F in a){const k=a[F];if(k[D.id]===void 0)continue;const W=k[D.id];for(const q in W)g(W[q].object),delete W[q];delete k[D.id]}}function I(){O(),u=!0,l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:I,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function ev(n,t,e,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,f){n.drawArrays(r,u,f),e.update(f,r,1)}function c(u,f,h){if(h===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,f,h),e.update(f,r,h)}function l(u,f,h){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function nv(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,v=o||t.has("OES_texture_float"),E=x&&v,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:T}}function iv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Mn,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const _=r?0:i,x=_*4;let v=p.clippingState||null;c.value=v,v=u(g,h,x,d);for(let E=0;E!==x;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=d+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==y;++x,v+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function sv(n){let t=new WeakMap;function e(o,a){return a===yu?o.mapping=Br:a===vu&&(o.mapping=zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yu||a===vu)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gx(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class nm extends Qp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Tr=4,Nf=[.125,.215,.35,.446,.526,.582],Ds=20,wl=new nm,Of=new oe;let Tl=null,Al=0,Cl=0;const Cs=(1+Math.sqrt(5))/2,pr=1/Cs,Bf=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Cs,pr),new w(0,Cs,-pr),new w(pr,0,Cs),new w(-pr,0,Cs),new w(Cs,pr,0),new w(-Cs,pr,0)];class zf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,Al,Cl),t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Br||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Uo,format:ai,colorSpace:ki,depthBuffer:!1},s=kf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rv(r)),this._blurMaterial=ov(r,t,e)}return s}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,i,s){const a=new In(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Of),u.toneMapping=ds,u.autoClear=!1;const d=new $s({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new pt(new _e,d);let y=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(Of),y=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ca(s,_*x,p>2?x:0,x,x),u.setRenderTarget(s),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Br||t.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ca(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,wl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bf[(s-1)%Bf.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pt(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):Ds;m>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);const p=[];let _=0;for(let b=0;b<Ds;++b){const P=b/y,S=Math.exp(-P*P/2);p.push(S),b===0?_+=S:b<m&&(_+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const v=this._sizeLods[s],E=3*v*(s>x-Tr?s-x+Tr:0),T=4*(this._cubeSize-v);Ca(e,E,T,3*v,2*v),c.setRenderTarget(e),c.render(f,wl)}}function rv(n){const t=[],e=[],i=[];let s=n;const r=n-Tr+1+Nf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Tr?c=Nf[o-n+Tr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const b=T%3*2/3-1,P=T>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];_.set(S,y*g*T),x.set(h,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const E=new Ge;E.setAttribute("position",new sn(_,y)),E.setAttribute("uv",new sn(x,m)),E.setAttribute("faceIndex",new sn(v,p)),t.push(E),s>Tr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kf(n,t,e){const i=new Vs(n,t,e);return i.texture.mapping=Oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ov(n,t,e){const i=new Float32Array(Ds),s=new w(0,1,0);return new Ws({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Hf(){return new Ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Gf(){return new Ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function av(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===yu||c===vu,u=c===Br||c===zr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new zf(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&s(f)){e===null&&(e=new zf(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function cv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lv(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const y=d[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],n.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,g=f.attributes.position;let y=0;if(d!==null){const _=d.array;y=d.version;for(let x=0,v=_.length;x<v;x+=3){const E=_[x+0],T=_[x+1],b=_[x+2];h.push(E,T,T,b,b,E)}}else if(g!==void 0){const _=g.array;y=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){const E=x+0,T=x+1,b=x+2;h.push(E,T,T,b,b,E)}}else return;const m=new(Xp(h)?Kp:$p)(h,1);m.version=y;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function uv(n,t,e,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,g){n.drawElements(r,g,a,d*c),e.update(g,r,1)}function f(d,g,y){if(y===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,y),e.update(g,r,y)}function h(d,g,y){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,y);let p=0;for(let _=0;_<y;_++)p+=g[_];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function hv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fv(n,t){return n[0]-t[0]}function dv(n,t){return Math.abs(t[1])-Math.abs(n[1])}function pv(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new be,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let y=r.get(u);if(y===void 0||y.count!==g){let D=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",D)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let P=0;_===!0&&(P=1),x===!0&&(P=2),v===!0&&(P=3);let S=u.attributes.position.count*P,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const L=new Float32Array(S*M*4*g),I=new jp(L,S,M,g);I.type=cs,I.needsUpdate=!0;const O=P*4;for(let F=0;F<g;F++){const k=E[F],W=T[F],q=b[F],V=S*M*4*F;for(let tt=0;tt<k.count;tt++){const et=tt*O;_===!0&&(o.fromBufferAttribute(k,tt),L[V+et+0]=o.x,L[V+et+1]=o.y,L[V+et+2]=o.z,L[V+et+3]=0),x===!0&&(o.fromBufferAttribute(W,tt),L[V+et+4]=o.x,L[V+et+5]=o.y,L[V+et+6]=o.z,L[V+et+7]=0),v===!0&&(o.fromBufferAttribute(q,tt),L[V+et+8]=o.x,L[V+et+9]=o.y,L[V+et+10]=o.z,L[V+et+11]=q.itemSize===4?o.w:1)}}y={count:g,texture:I,size:new Q(S,M)},r.set(u,y),u.addEventListener("dispose",D)}let m=0;for(let _=0;_<h.length;_++)m+=h[_];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",y.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const d=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<d;x++){const v=g[x];v[0]=x,v[1]=h[x]}g.sort(dv);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(fv);const y=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const v=a[x],E=v[0],T=v[1];E!==Number.MAX_SAFE_INTEGER&&T?(y&&u.getAttribute("morphTarget"+x)!==y[E]&&u.setAttribute("morphTarget"+x,y[E]),m&&u.getAttribute("morphNormal"+x)!==m[E]&&u.setAttribute("morphNormal"+x,m[E]),s[x]=T,p+=T):(y&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const _=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function mv(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class im extends Tn{constructor(t,e,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:zs,u!==zs&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zs&&(i=as),i===void 0&&u===kr&&(i=Bs),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sm=new Tn,rm=new im(1,1);rm.compareFunction=Wp;const om=new jp,am=new Q0,cm=new tm,Vf=[],Wf=[],Xf=new Float32Array(16),Yf=new Float32Array(9),qf=new Float32Array(4);function jr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Vf[s];if(r===void 0&&(r=new Float32Array(s),Vf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function zc(n,t){let e=Wf[t];e===void 0&&(e=new Int32Array(t),Wf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function gv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function _v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function vv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,i))return;qf.set(i),n.uniformMatrix2fv(this.addr,!1,qf),Ye(e,i)}}function Mv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,i))return;Yf.set(i),n.uniformMatrix3fv(this.addr,!1,Yf),Ye(e,i)}}function Sv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,i))return;Xf.set(i),n.uniformMatrix4fv(this.addr,!1,Xf),Ye(e,i)}}function bv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function Tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function Av(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function Pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function Rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function Lv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?rm:sm;e.setTexture2D(t||r,s)}function Dv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||am,s)}function Iv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||cm,s)}function Fv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||om,s)}function Uv(n){switch(n){case 5126:return gv;case 35664:return xv;case 35665:return _v;case 35666:return yv;case 35674:return vv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return Ev;case 35668:case 35672:return wv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Cv;case 36295:return Pv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Fv}}function Nv(n,t){n.uniform1fv(this.addr,t)}function Ov(n,t){const e=jr(t,this.size,2);n.uniform2fv(this.addr,e)}function Bv(n,t){const e=jr(t,this.size,3);n.uniform3fv(this.addr,e)}function zv(n,t){const e=jr(t,this.size,4);n.uniform4fv(this.addr,e)}function kv(n,t){const e=jr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hv(n,t){const e=jr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gv(n,t){const e=jr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Vv(n,t){n.uniform1iv(this.addr,t)}function Wv(n,t){n.uniform2iv(this.addr,t)}function Xv(n,t){n.uniform3iv(this.addr,t)}function Yv(n,t){n.uniform4iv(this.addr,t)}function qv(n,t){n.uniform1uiv(this.addr,t)}function jv(n,t){n.uniform2uiv(this.addr,t)}function Zv(n,t){n.uniform3uiv(this.addr,t)}function $v(n,t){n.uniform4uiv(this.addr,t)}function Kv(n,t,e){const i=this.cache,s=t.length,r=zc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sm,r[o])}function Jv(n,t,e){const i=this.cache,s=t.length,r=zc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||am,r[o])}function Qv(n,t,e){const i=this.cache,s=t.length,r=zc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cm,r[o])}function tM(n,t,e){const i=this.cache,s=t.length,r=zc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||om,r[o])}function eM(n){switch(n){case 5126:return Nv;case 35664:return Ov;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return jv;case 36295:return Zv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return tM}}class nM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Uv(e.type)}}class iM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eM(e.type)}}class sM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function jf(n,t){n.seq.push(t),n.map[t.id]=t}function rM(n,t,e){const i=n.name,s=i.length;for(Pl.lastIndex=0;;){const r=Pl.exec(i),o=Pl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jf(e,l===void 0?new nM(a,n,t):new iM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new sM(a),jf(e,f)),e=f}}}class lc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);rM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Zf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const oM=37297;let aM=0;function cM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function lM(n){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(n);let i;switch(t===e?i="":t===vc&&e===yc?i="LinearDisplayP3ToLinearSRGB":t===yc&&e===vc&&(i="LinearSRGBToLinearDisplayP3"),n){case ki:case Bc:return[i,"LinearTransferOETF"];case $e:case Zu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $f(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cM(n.getShaderSource(t),o)}else return s}function uM(n,t){const e=lM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function hM(n,t){let e;switch(t){case l0:e="Linear";break;case u0:e="Reinhard";break;case h0:e="OptimizedCineon";break;case f0:e="ACESFilmic";break;case p0:e="AgX";break;case d0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function fM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function dM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ar).join(`
`)}function pM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function mM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ar(n){return n!==""}function Kf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(gM,_M)}const xM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _M(n,t){let e=$t[t];if(e===void 0){const i=xM.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wu(e)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(n){return n.replace(yM,vM)}function vM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function MM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Og?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function SM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Br:case zr:t="ENVMAP_TYPE_CUBE";break;case Oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function EM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ip:t="ENVMAP_BLENDING_MULTIPLY";break;case a0:t="ENVMAP_BLENDING_MIX";break;case c0:t="ENVMAP_BLENDING_ADD";break}return t}function wM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function TM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=MM(e),l=SM(e),u=bM(e),f=EM(e),h=wM(e),d=e.isWebGL2?"":fM(e),g=dM(e),y=pM(r),m=s.createProgram();let p,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ar).join(`
`),p.length>0&&(p+=`
`),_=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ar).join(`
`),_.length>0&&(_+=`
`)):(p=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),_=[d,td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ds?"#define TONE_MAPPING":"",e.toneMapping!==ds?$t.tonemapping_pars_fragment:"",e.toneMapping!==ds?hM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=wu(o),o=Kf(o,e),o=Jf(o,e),a=wu(a),a=Kf(a,e),a=Jf(a,e),o=Qf(o),a=Qf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===_f?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=x+p+o,E=x+_+a,T=Zf(s,s.VERTEX_SHADER,v),b=Zf(s,s.FRAGMENT_SHADER,E);s.attachShader(m,T),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function P(I){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(b).trim();let k=!0,W=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,b);else{const q=$f(s,T,"vertex"),V=$f(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+q+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||F==="")&&(W=!1);W&&(I.diagnostics={runnable:k,programLog:O,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:_}})}s.deleteShader(T),s.deleteShader(b),S=new lc(s,m),M=mM(s,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,oM)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}let AM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new PM(t),e.set(t,i)),i}}class PM{constructor(t){this.id=AM++,this.code=t,this.usedTimes=0}}function RM(n,t,e,i,s,r,o){const a=new Ku,c=new CM,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,M,L,I,O){const D=I.fog,F=O.geometry,k=S.isMeshStandardMaterial?I.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),q=W&&W.mapping===Oc?W.image.height:null,V=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=tt!==void 0?tt.length:0;let ut=0;F.morphAttributes.position!==void 0&&(ut=1),F.morphAttributes.normal!==void 0&&(ut=2),F.morphAttributes.color!==void 0&&(ut=3);let Z,nt,yt,Tt;if(V){const an=gi[V];Z=an.vertexShader,nt=an.fragmentShader}else Z=S.vertexShader,nt=S.fragmentShader,c.update(S),yt=c.getVertexShaderID(S),Tt=c.getFragmentShaderID(S);const Et=n.getRenderTarget(),Bt=O.isInstancedMesh===!0,Gt=O.isBatchedMesh===!0,Ct=!!S.map,Vt=!!S.matcap,N=!!W,ht=!!S.aoMap,K=!!S.lightMap,ct=!!S.bumpMap,J=!!S.normalMap,Lt=!!S.displacementMap,vt=!!S.emissiveMap,C=!!S.metalnessMap,A=!!S.roughnessMap,G=S.anisotropy>0,at=S.clearcoat>0,st=S.iridescence>0,it=S.sheen>0,At=S.transmission>0,_t=G&&!!S.anisotropyMap,Mt=at&&!!S.clearcoatMap,Nt=at&&!!S.clearcoatNormalMap,Yt=at&&!!S.clearcoatRoughnessMap,rt=st&&!!S.iridescenceMap,ee=st&&!!S.iridescenceThicknessMap,U=it&&!!S.sheenColorMap,ot=it&&!!S.sheenRoughnessMap,gt=!!S.specularMap,lt=!!S.specularColorMap,Dt=!!S.specularIntensityMap,ne=At&&!!S.transmissionMap,ce=At&&!!S.thicknessMap,Kt=!!S.gradientMap,mt=!!S.alphaMap,z=S.alphaTest>0,ft=!!S.alphaHash,dt=!!S.extensions,Ot=!!F.attributes.uv1,It=!!F.attributes.uv2,he=!!F.attributes.uv3;let fe=ds;return S.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(fe=n.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:nt,defines:S.defines,customVertexShaderID:yt,customFragmentShaderID:Tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Gt,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ki,map:Ct,matcap:Vt,envMap:N,envMapMode:N&&W.mapping,envMapCubeUVHeight:q,aoMap:ht,lightMap:K,bumpMap:ct,normalMap:J,displacementMap:h&&Lt,emissiveMap:vt,normalMapObjectSpace:J&&S.normalMapType===T0,normalMapTangentSpace:J&&S.normalMapType===Vp,metalnessMap:C,roughnessMap:A,anisotropy:G,anisotropyMap:_t,clearcoat:at,clearcoatMap:Mt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Yt,iridescence:st,iridescenceMap:rt,iridescenceThicknessMap:ee,sheen:it,sheenColorMap:U,sheenRoughnessMap:ot,specularMap:gt,specularColorMap:lt,specularIntensityMap:Dt,transmission:At,transmissionMap:ne,thicknessMap:ce,gradientMap:Kt,opaque:S.transparent===!1&&S.blending===Fr,alphaMap:mt,alphaTest:z,alphaHash:ft,combine:S.combine,mapUv:Ct&&y(S.map.channel),aoMapUv:ht&&y(S.aoMap.channel),lightMapUv:K&&y(S.lightMap.channel),bumpMapUv:ct&&y(S.bumpMap.channel),normalMapUv:J&&y(S.normalMap.channel),displacementMapUv:Lt&&y(S.displacementMap.channel),emissiveMapUv:vt&&y(S.emissiveMap.channel),metalnessMapUv:C&&y(S.metalnessMap.channel),roughnessMapUv:A&&y(S.roughnessMap.channel),anisotropyMapUv:_t&&y(S.anisotropyMap.channel),clearcoatMapUv:Mt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:U&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ot&&y(S.sheenRoughnessMap.channel),specularMapUv:gt&&y(S.specularMap.channel),specularColorMapUv:lt&&y(S.specularColorMap.channel),specularIntensityMapUv:Dt&&y(S.specularIntensityMap.channel),transmissionMapUv:ne&&y(S.transmissionMap.channel),thicknessMapUv:ce&&y(S.thicknessMap.channel),alphaMapUv:mt&&y(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(J||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:It,vertexUv3s:he,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Ct||mt),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ct&&S.map.isVideoTexture===!0&&me.getTransfer(S.map.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:dt&&S.extensions.derivatives===!0,extensionFragDepth:dt&&S.extensions.fragDepth===!0,extensionDrawBuffers:dt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(_(M,S),x(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function v(S){const M=g[S.type];let L;if(M){const I=gi[M];L=fx.clone(I.uniforms)}else L=S.uniforms;return L}function E(S,M){let L;for(let I=0,O=l.length;I<O;I++){const D=l[I];if(D.cacheKey===M){L=D,++L.usedTimes;break}}return L===void 0&&(L=new TM(n,M,S,r),l.push(L)),L}function T(S){if(--S.usedTimes===0){const M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),S.destroy()}}function b(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:P}}function LM(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function DM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ed(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,h,d,g,y,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=y,p.group=m),t++,p}function a(f,h,d,g,y,m){const p=o(f,h,d,g,y,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,h,d,g,y,m){const p=o(f,h,d,g,y,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,h){e.length>1&&e.sort(f||DM),i.length>1&&i.sort(h||ed),s.length>1&&s.sort(h||ed)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function IM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new nd,n.set(i,[o])):s>=r.length?(o=new nd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function FM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new oe};break;case"SpotLight":e={position:new w,direction:new w,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function UM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let NM=0;function OM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function BM(n,t){const e=new FM,i=UM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new w);const r=new w,o=new ae,a=new ae;function c(u,f){let h=0,d=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let y=0,m=0,p=0,_=0,x=0,v=0,E=0,T=0,b=0,P=0,S=0;u.sort(OM);const M=f===!0?Math.PI:1;for(let I=0,O=u.length;I<O;I++){const D=u[I],F=D.color,k=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*k*M,d+=F.g*k*M,g+=F.b*k*M;else if(D.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(D.sh.coefficients[V],k);S++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const tt=D.shadow,et=i.get(D);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=D.shadow.matrix,v++}s.directional[y]=V,y++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(F).multiplyScalar(k*M),V.distance=W,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,s.spot[p]=V;const tt=D.shadow;if(D.map&&(s.spotLightMap[b]=D.map,b++,tt.updateMatrices(D),D.castShadow&&P++),s.spotLightMatrix[p]=tt.matrix,D.castShadow){const et=i.get(D);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,s.spotShadow[p]=et,s.spotShadowMap[p]=q,T++}p++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(F).multiplyScalar(k),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),s.rectArea[_]=V,_++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*M),V.distance=D.distance,V.decay=D.decay,D.castShadow){const tt=D.shadow,et=i.get(D);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,s.pointShadow[m]=et,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=D.shadow.matrix,E++}s.point[m]=V,m++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(k*M),V.groundColor.copy(D.groundColor).multiplyScalar(k*M),s.hemi[x]=V,x++}}_>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=g;const L=s.hash;(L.directionalLength!==y||L.pointLength!==m||L.spotLength!==p||L.rectAreaLength!==_||L.hemiLength!==x||L.numDirectionalShadows!==v||L.numPointShadows!==E||L.numSpotShadows!==T||L.numSpotMaps!==b||L.numLightProbes!==S)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+b-P,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=S,L.directionalLength=y,L.pointLength=m,L.spotLength=p,L.rectAreaLength=_,L.hemiLength=x,L.numDirectionalShadows=v,L.numPointShadows=E,L.numSpotShadows=T,L.numSpotMaps=b,L.numLightProbes=S,s.version=NM++)}function l(u,f){let h=0,d=0,g=0,y=0,m=0;const p=f.matrixWorldInverse;for(let _=0,x=u.length;_<x;_++){const v=u[_];if(v.isDirectionalLight){const E=s.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(v.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const E=s.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){const E=s.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function id(n,t){const e=new BM(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function zM(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new id(n,t),e.set(r,[c])):o>=a.length?(c=new id(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class kM extends qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HM extends qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(n,t,e){let i=new Ju;const s=new Q,r=new Q,o=new be,a=new kM({depthPacking:w0}),c=new HM,l={},u=e.maxTextureSize,f={[_i]:xn,[xn]:_i,[pn]:pn},h=new Ws({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new pt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let p=this.type;this.render=function(T,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),I=n.state;I.setBlending(fs),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==Ii&&this.type===Ii,D=p===Ii&&this.type!==Ii;for(let F=0,k=T.length;F<k;F++){const W=T[F],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const V=q.getFrameExtents();if(s.multiply(V),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,q.mapSize.y=r.y)),q.map===null||O===!0||D===!0){const et=this.type!==Ii?{minFilter:dn,magFilter:dn}:{};q.map!==null&&q.map.dispose(),q.map=new Vs(s.x,s.y,et),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const tt=q.getViewportCount();for(let et=0;et<tt;et++){const ut=q.getViewport(et);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),I.viewport(o),q.updateMatrices(W,et),i=q.getFrustum(),v(b,P,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===Ii&&_(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,L)};function _(T,b){const P=t.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Vs(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,P,h,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,P,d,y,null)}function x(T,b,P,S){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=M.uuid,O=b.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let F=D[O];F===void 0&&(F=M.clone(),D[O]=F,b.addEventListener("dispose",E)),M=F}if(M.visible=b.visible,M.wireframe=b.wireframe,S===Ii?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=P}return M}function v(T,b,P,S,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=t.update(T),D=T.material;if(Array.isArray(D)){const F=O.groups;for(let k=0,W=F.length;k<W;k++){const q=F[k],V=D[q.materialIndex];if(V&&V.visible){const tt=x(T,V,S,M);T.onBeforeShadow(n,T,b,P,O,tt,q),n.renderBufferDirect(P,null,O,tt,T,q),T.onAfterShadow(n,T,b,P,O,tt,q)}}}else if(D.visible){const F=x(T,D,S,M);T.onBeforeShadow(n,T,b,P,O,F,null),n.renderBufferDirect(P,null,O,F,T,null),T.onAfterShadow(n,T,b,P,O,F,null)}}const I=T.children;for(let O=0,D=I.length;O<D;O++)v(I[O],b,P,S,M)}function E(T){T.target.removeEventListener("dispose",E);for(const P in l){const S=l[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function XM(n,t,e){const i=e.isWebGL2;function s(){let z=!1;const ft=new be;let dt=null;const Ot=new be(0,0,0,0);return{setMask:function(It){dt!==It&&!z&&(n.colorMask(It,It,It,It),dt=It)},setLocked:function(It){z=It},setClear:function(It,he,fe,qe,an){an===!0&&(It*=qe,he*=qe,fe*=qe),ft.set(It,he,fe,qe),Ot.equals(ft)===!1&&(n.clearColor(It,he,fe,qe),Ot.copy(ft))},reset:function(){z=!1,dt=null,Ot.set(-1,0,0,0)}}}function r(){let z=!1,ft=null,dt=null,Ot=null;return{setTest:function(It){It?Gt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(It){ft!==It&&!z&&(n.depthMask(It),ft=It)},setFunc:function(It){if(dt!==It){switch(It){case t0:n.depthFunc(n.NEVER);break;case e0:n.depthFunc(n.ALWAYS);break;case n0:n.depthFunc(n.LESS);break;case xc:n.depthFunc(n.LEQUAL);break;case i0:n.depthFunc(n.EQUAL);break;case s0:n.depthFunc(n.GEQUAL);break;case r0:n.depthFunc(n.GREATER);break;case o0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=It}},setLocked:function(It){z=It},setClear:function(It){Ot!==It&&(n.clearDepth(It),Ot=It)},reset:function(){z=!1,ft=null,dt=null,Ot=null}}}function o(){let z=!1,ft=null,dt=null,Ot=null,It=null,he=null,fe=null,qe=null,an=null;return{setTest:function(ye){z||(ye?Gt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(ye){ft!==ye&&!z&&(n.stencilMask(ye),ft=ye)},setFunc:function(ye,cn,fi){(dt!==ye||Ot!==cn||It!==fi)&&(n.stencilFunc(ye,cn,fi),dt=ye,Ot=cn,It=fi)},setOp:function(ye,cn,fi){(he!==ye||fe!==cn||qe!==fi)&&(n.stencilOp(ye,cn,fi),he=ye,fe=cn,qe=fi)},setLocked:function(ye){z=ye},setClear:function(ye){an!==ye&&(n.clearStencil(ye),an=ye)},reset:function(){z=!1,ft=null,dt=null,Ot=null,It=null,he=null,fe=null,qe=null,an=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,E=null,T=null,b=null,P=null,S=new oe(0,0,0),M=0,L=!1,I=null,O=null,D=null,F=null,k=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(tt)[1]),q=V>=1):tt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),q=V>=2);let et=null,ut={};const Z=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),yt=new be().fromArray(Z),Tt=new be().fromArray(nt);function Et(z,ft,dt,Ot){const It=new Uint8Array(4),he=n.createTexture();n.bindTexture(z,he),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<dt;fe++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(ft,0,n.RGBA,1,1,Ot,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(ft+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return he}const Bt={};Bt[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),Bt[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Bt[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Bt[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Gt(n.DEPTH_TEST),c.setFunc(xc),vt(!1),C(Oh),Gt(n.CULL_FACE),J(fs);function Gt(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Ct(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Vt(z,ft){return d[z]!==ft?(n.bindFramebuffer(z,ft),d[z]=ft,i&&(z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ft),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ft)),!0):!1}function N(z,ft){let dt=y,Ot=!1;if(z)if(dt=g.get(ft),dt===void 0&&(dt=[],g.set(ft,dt)),z.isWebGLMultipleRenderTargets){const It=z.texture;if(dt.length!==It.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let he=0,fe=It.length;he<fe;he++)dt[he]=n.COLOR_ATTACHMENT0+he;dt.length=It.length,Ot=!0}}else dt[0]!==n.COLOR_ATTACHMENT0&&(dt[0]=n.COLOR_ATTACHMENT0,Ot=!0);else dt[0]!==n.BACK&&(dt[0]=n.BACK,Ot=!0);Ot&&(e.isWebGL2?n.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ht(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const K={[Ls]:n.FUNC_ADD,[zg]:n.FUNC_SUBTRACT,[kg]:n.FUNC_REVERSE_SUBTRACT};if(i)K[Hh]=n.MIN,K[Gh]=n.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(K[Hh]=z.MIN_EXT,K[Gh]=z.MAX_EXT)}const ct={[Hg]:n.ZERO,[Gg]:n.ONE,[Vg]:n.SRC_COLOR,[xu]:n.SRC_ALPHA,[Zg]:n.SRC_ALPHA_SATURATE,[qg]:n.DST_COLOR,[Xg]:n.DST_ALPHA,[Wg]:n.ONE_MINUS_SRC_COLOR,[_u]:n.ONE_MINUS_SRC_ALPHA,[jg]:n.ONE_MINUS_DST_COLOR,[Yg]:n.ONE_MINUS_DST_ALPHA,[$g]:n.CONSTANT_COLOR,[Kg]:n.ONE_MINUS_CONSTANT_COLOR,[Jg]:n.CONSTANT_ALPHA,[Qg]:n.ONE_MINUS_CONSTANT_ALPHA};function J(z,ft,dt,Ot,It,he,fe,qe,an,ye){if(z===fs){p===!0&&(Ct(n.BLEND),p=!1);return}if(p===!1&&(Gt(n.BLEND),p=!0),z!==Bg){if(z!==_||ye!==L){if((x!==Ls||T!==Ls)&&(n.blendEquation(n.FUNC_ADD),x=Ls,T=Ls),ye)switch(z){case Fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,E=null,b=null,P=null,S.set(0,0,0),M=0,_=z,L=ye}return}It=It||ft,he=he||dt,fe=fe||Ot,(ft!==x||It!==T)&&(n.blendEquationSeparate(K[ft],K[It]),x=ft,T=It),(dt!==v||Ot!==E||he!==b||fe!==P)&&(n.blendFuncSeparate(ct[dt],ct[Ot],ct[he],ct[fe]),v=dt,E=Ot,b=he,P=fe),(qe.equals(S)===!1||an!==M)&&(n.blendColor(qe.r,qe.g,qe.b,an),S.copy(qe),M=an),_=z,L=!1}function Lt(z,ft){z.side===pn?Ct(n.CULL_FACE):Gt(n.CULL_FACE);let dt=z.side===xn;ft&&(dt=!dt),vt(dt),z.blending===Fr&&z.transparent===!1?J(fs):J(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),a.setMask(z.colorWrite);const Ot=z.stencilWrite;l.setTest(Ot),Ot&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),G(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Gt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(z){I!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),I=z)}function C(z){z!==Ug?(Gt(n.CULL_FACE),z!==O&&(z===Oh?n.cullFace(n.BACK):z===Ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),O=z}function A(z){z!==D&&(q&&n.lineWidth(z),D=z)}function G(z,ft,dt){z?(Gt(n.POLYGON_OFFSET_FILL),(F!==ft||k!==dt)&&(n.polygonOffset(ft,dt),F=ft,k=dt)):Ct(n.POLYGON_OFFSET_FILL)}function at(z){z?Gt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function st(z){z===void 0&&(z=n.TEXTURE0+W-1),et!==z&&(n.activeTexture(z),et=z)}function it(z,ft,dt){dt===void 0&&(et===null?dt=n.TEXTURE0+W-1:dt=et);let Ot=ut[dt];Ot===void 0&&(Ot={type:void 0,texture:void 0},ut[dt]=Ot),(Ot.type!==z||Ot.texture!==ft)&&(et!==dt&&(n.activeTexture(dt),et=dt),n.bindTexture(z,ft||Bt[z]),Ot.type=z,Ot.texture=ft)}function At(){const z=ut[et];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function _t(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(z){yt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),yt.copy(z))}function ne(z){Tt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Tt.copy(z))}function ce(z,ft){let dt=f.get(ft);dt===void 0&&(dt=new WeakMap,f.set(ft,dt));let Ot=dt.get(z);Ot===void 0&&(Ot=n.getUniformBlockIndex(ft,z.name),dt.set(z,Ot))}function Kt(z,ft){const Ot=f.get(ft).get(z);u.get(ft)!==Ot&&(n.uniformBlockBinding(ft,Ot,z.__bindingPointIndex),u.set(ft,Ot))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},et=null,ut={},d={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,E=null,T=null,b=null,P=null,S=new oe(0,0,0),M=0,L=!1,I=null,O=null,D=null,F=null,k=null,yt.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Gt,disable:Ct,bindFramebuffer:Vt,drawBuffers:N,useProgram:ht,setBlending:J,setMaterial:Lt,setFlipSided:vt,setCullFace:C,setLineWidth:A,setPolygonOffset:G,setScissorTest:at,activeTexture:st,bindTexture:it,unbindTexture:At,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:gt,texImage3D:lt,updateUBOMapping:ce,uniformBlockBinding:Kt,texStorage2D:U,texStorage3D:ot,texSubImage2D:Nt,texSubImage3D:Yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ee,scissor:Dt,viewport:ne,reset:mt}}function YM(n,t,e,i,s,r,o){const a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,A){return d?new OffscreenCanvas(C,A):bc("canvas")}function y(C,A,G,at){let st=1;if((C.width>at||C.height>at)&&(st=at/Math.max(C.width,C.height)),st<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const it=A?Sc:Math.floor,At=it(st*C.width),_t=it(st*C.height);f===void 0&&(f=g(At,_t));const Mt=G?g(At,_t):f;return Mt.width=At,Mt.height=_t,Mt.getContext("2d").drawImage(C,0,0,At,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+At+"x"+_t+")."),Mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Eu(C.width)&&Eu(C.height)}function p(C){return a?!1:C.wrapS!==oi||C.wrapT!==oi||C.minFilter!==dn&&C.minFilter!==Wn}function _(C,A){return C.generateMipmaps&&A&&C.minFilter!==dn&&C.minFilter!==Wn}function x(C){n.generateMipmap(C)}function v(C,A,G,at,st=!1){if(a===!1)return A;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it=A;if(A===n.RED&&(G===n.FLOAT&&(it=n.R32F),G===n.HALF_FLOAT&&(it=n.R16F),G===n.UNSIGNED_BYTE&&(it=n.R8)),A===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.R8UI),G===n.UNSIGNED_SHORT&&(it=n.R16UI),G===n.UNSIGNED_INT&&(it=n.R32UI),G===n.BYTE&&(it=n.R8I),G===n.SHORT&&(it=n.R16I),G===n.INT&&(it=n.R32I)),A===n.RG&&(G===n.FLOAT&&(it=n.RG32F),G===n.HALF_FLOAT&&(it=n.RG16F),G===n.UNSIGNED_BYTE&&(it=n.RG8)),A===n.RGBA){const At=st?_c:me.getTransfer(at);G===n.FLOAT&&(it=n.RGBA32F),G===n.HALF_FLOAT&&(it=n.RGBA16F),G===n.UNSIGNED_BYTE&&(it=At===Me?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function E(C,A,G){return _(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==Wn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function T(C){return C===dn||C===Vh||C===nl?n.NEAREST:n.LINEAR}function b(C){const A=C.target;A.removeEventListener("dispose",b),S(A),A.isVideoTexture&&u.delete(A)}function P(C){const A=C.target;A.removeEventListener("dispose",P),L(A)}function S(C){const A=i.get(C);if(A.__webglInit===void 0)return;const G=C.source,at=h.get(G);if(at){const st=at[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(C),Object.keys(at).length===0&&h.delete(G)}i.remove(C)}function M(C){const A=i.get(C);n.deleteTexture(A.__webglTexture);const G=C.source,at=h.get(G);delete at[A.__cacheKey],o.memory.textures--}function L(C){const A=C.texture,G=i.get(C),at=i.get(A);if(at.__webglTexture!==void 0&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(G.__webglFramebuffer[st]))for(let it=0;it<G.__webglFramebuffer[st].length;it++)n.deleteFramebuffer(G.__webglFramebuffer[st][it]);else n.deleteFramebuffer(G.__webglFramebuffer[st]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[st])}else{if(Array.isArray(G.__webglFramebuffer))for(let st=0;st<G.__webglFramebuffer.length;st++)n.deleteFramebuffer(G.__webglFramebuffer[st]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let st=0;st<G.__webglColorRenderbuffer.length;st++)G.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[st]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let st=0,it=A.length;st<it;st++){const At=i.get(A[st]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(A[st])}i.remove(A),i.remove(C)}let I=0;function O(){I=0}function D(){const C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function F(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function k(C,A){const G=i.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const at=C.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(G,C,A);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+A)}function W(C,A){const G=i.get(C);if(C.version>0&&G.__version!==C.version){yt(G,C,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+A)}function q(C,A){const G=i.get(C);if(C.version>0&&G.__version!==C.version){yt(G,C,A);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+A)}function V(C,A){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Tt(G,C,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+A)}const tt={[Mu]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Su]:n.MIRRORED_REPEAT},et={[dn]:n.NEAREST,[Vh]:n.NEAREST_MIPMAP_NEAREST,[nl]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[m0]:n.LINEAR_MIPMAP_NEAREST,[Fo]:n.LINEAR_MIPMAP_LINEAR},ut={[A0]:n.NEVER,[I0]:n.ALWAYS,[C0]:n.LESS,[Wp]:n.LEQUAL,[P0]:n.EQUAL,[D0]:n.GEQUAL,[R0]:n.GREATER,[L0]:n.NOTEQUAL};function Z(C,A,G){if(G?(n.texParameteri(C,n.TEXTURE_WRAP_S,tt[A.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,tt[A.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,tt[A.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,et[A.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,et[A.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==oi||A.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==dn&&A.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ut[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===dn||A.minFilter!==nl&&A.minFilter!==Fo||A.type===cs&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Uo&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(C,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function nt(C,A){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",b));const at=A.source;let st=h.get(at);st===void 0&&(st={},h.set(at,st));const it=F(A);if(it!==C.__cacheKey){st[it]===void 0&&(st[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[it].usedTimes++;const At=st[C.__cacheKey];At!==void 0&&(st[C.__cacheKey].usedTimes--,At.usedTimes===0&&M(A)),C.__cacheKey=it,C.__webglTexture=st[it].texture}return G}function yt(C,A,G){let at=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(at=n.TEXTURE_3D);const st=nt(C,A),it=A.source;e.bindTexture(at,C.__webglTexture,n.TEXTURE0+G);const At=i.get(it);if(it.version!==At.__version||st===!0){e.activeTexture(n.TEXTURE0+G);const _t=me.getPrimaries(me.workingColorSpace),Mt=A.colorSpace===Xn?null:me.getPrimaries(A.colorSpace),Nt=A.colorSpace===Xn||_t===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Yt=p(A)&&m(A.image)===!1;let rt=y(A.image,Yt,!1,s.maxTextureSize);rt=vt(A,rt);const ee=m(rt)||a,U=r.convert(A.format,A.colorSpace);let ot=r.convert(A.type),gt=v(A.internalFormat,U,ot,A.colorSpace,A.isVideoTexture);Z(at,A,ee);let lt;const Dt=A.mipmaps,ne=a&&A.isVideoTexture!==!0&&gt!==Hp,ce=At.__version===void 0||st===!0,Kt=E(A,rt,ee);if(A.isDepthTexture)gt=n.DEPTH_COMPONENT,a?A.type===cs?gt=n.DEPTH_COMPONENT32F:A.type===as?gt=n.DEPTH_COMPONENT24:A.type===Bs?gt=n.DEPTH24_STENCIL8:gt=n.DEPTH_COMPONENT16:A.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===zs&&gt===n.DEPTH_COMPONENT&&A.type!==ju&&A.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=as,ot=r.convert(A.type)),A.format===kr&&gt===n.DEPTH_COMPONENT&&(gt=n.DEPTH_STENCIL,A.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Bs,ot=r.convert(A.type))),ce&&(ne?e.texStorage2D(n.TEXTURE_2D,1,gt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,gt,rt.width,rt.height,0,U,ot,null));else if(A.isDataTexture)if(Dt.length>0&&ee){ne&&ce&&e.texStorage2D(n.TEXTURE_2D,Kt,gt,Dt[0].width,Dt[0].height);for(let mt=0,z=Dt.length;mt<z;mt++)lt=Dt[mt],ne?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,lt.width,lt.height,U,ot,lt.data):e.texImage2D(n.TEXTURE_2D,mt,gt,lt.width,lt.height,0,U,ot,lt.data);A.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(n.TEXTURE_2D,Kt,gt,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,U,ot,rt.data)):e.texImage2D(n.TEXTURE_2D,0,gt,rt.width,rt.height,0,U,ot,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ne&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,gt,Dt[0].width,Dt[0].height,rt.depth);for(let mt=0,z=Dt.length;mt<z;mt++)lt=Dt[mt],A.format!==ai?U!==null?ne?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,lt.width,lt.height,rt.depth,U,lt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,gt,lt.width,lt.height,rt.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,lt.width,lt.height,rt.depth,U,ot,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,gt,lt.width,lt.height,rt.depth,0,U,ot,lt.data)}else{ne&&ce&&e.texStorage2D(n.TEXTURE_2D,Kt,gt,Dt[0].width,Dt[0].height);for(let mt=0,z=Dt.length;mt<z;mt++)lt=Dt[mt],A.format!==ai?U!==null?ne?e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,lt.width,lt.height,U,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,lt.width,lt.height,U,ot,lt.data):e.texImage2D(n.TEXTURE_2D,mt,gt,lt.width,lt.height,0,U,ot,lt.data)}else if(A.isDataArrayTexture)ne?(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,gt,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,U,ot,rt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,rt.width,rt.height,rt.depth,0,U,ot,rt.data);else if(A.isData3DTexture)ne?(ce&&e.texStorage3D(n.TEXTURE_3D,Kt,gt,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,U,ot,rt.data)):e.texImage3D(n.TEXTURE_3D,0,gt,rt.width,rt.height,rt.depth,0,U,ot,rt.data);else if(A.isFramebufferTexture){if(ce)if(ne)e.texStorage2D(n.TEXTURE_2D,Kt,gt,rt.width,rt.height);else{let mt=rt.width,z=rt.height;for(let ft=0;ft<Kt;ft++)e.texImage2D(n.TEXTURE_2D,ft,gt,mt,z,0,U,ot,null),mt>>=1,z>>=1}}else if(Dt.length>0&&ee){ne&&ce&&e.texStorage2D(n.TEXTURE_2D,Kt,gt,Dt[0].width,Dt[0].height);for(let mt=0,z=Dt.length;mt<z;mt++)lt=Dt[mt],ne?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,U,ot,lt):e.texImage2D(n.TEXTURE_2D,mt,gt,U,ot,lt);A.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(n.TEXTURE_2D,Kt,gt,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,U,ot,rt)):e.texImage2D(n.TEXTURE_2D,0,gt,U,ot,rt);_(A,ee)&&x(at),At.__version=it.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Tt(C,A,G){if(A.image.length!==6)return;const at=nt(C,A),st=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const it=i.get(st);if(st.version!==it.__version||at===!0){e.activeTexture(n.TEXTURE0+G);const At=me.getPrimaries(me.workingColorSpace),_t=A.colorSpace===Xn?null:me.getPrimaries(A.colorSpace),Mt=A.colorSpace===Xn||At===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Nt=A.isCompressedTexture||A.image[0].isCompressedTexture,Yt=A.image[0]&&A.image[0].isDataTexture,rt=[];for(let mt=0;mt<6;mt++)!Nt&&!Yt?rt[mt]=y(A.image[mt],!1,!0,s.maxCubemapSize):rt[mt]=Yt?A.image[mt].image:A.image[mt],rt[mt]=vt(A,rt[mt]);const ee=rt[0],U=m(ee)||a,ot=r.convert(A.format,A.colorSpace),gt=r.convert(A.type),lt=v(A.internalFormat,ot,gt,A.colorSpace),Dt=a&&A.isVideoTexture!==!0,ne=it.__version===void 0||at===!0;let ce=E(A,ee,U);Z(n.TEXTURE_CUBE_MAP,A,U);let Kt;if(Nt){Dt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,lt,ee.width,ee.height);for(let mt=0;mt<6;mt++){Kt=rt[mt].mipmaps;for(let z=0;z<Kt.length;z++){const ft=Kt[z];A.format!==ai?ot!==null?Dt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z,0,0,ft.width,ft.height,ot,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z,lt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z,0,0,ft.width,ft.height,ot,gt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z,lt,ft.width,ft.height,0,ot,gt,ft.data)}}}else{Kt=A.mipmaps,Dt&&ne&&(Kt.length>0&&ce++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,lt,rt[0].width,rt[0].height));for(let mt=0;mt<6;mt++)if(Yt){Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,rt[mt].width,rt[mt].height,ot,gt,rt[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,rt[mt].width,rt[mt].height,0,ot,gt,rt[mt].data);for(let z=0;z<Kt.length;z++){const dt=Kt[z].image[mt].image;Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z+1,0,0,dt.width,dt.height,ot,gt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z+1,lt,dt.width,dt.height,0,ot,gt,dt.data)}}else{Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ot,gt,rt[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,ot,gt,rt[mt]);for(let z=0;z<Kt.length;z++){const ft=Kt[z];Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z+1,0,0,ot,gt,ft.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,z+1,lt,ot,gt,ft.image[mt])}}}_(A,U)&&x(n.TEXTURE_CUBE_MAP),it.__version=st.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Et(C,A,G,at,st,it){const At=r.convert(G.format,G.colorSpace),_t=r.convert(G.type),Mt=v(G.internalFormat,At,_t,G.colorSpace);if(!i.get(A).__hasExternalTextures){const Yt=Math.max(1,A.width>>it),rt=Math.max(1,A.height>>it);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,it,Mt,Yt,rt,A.depth,0,At,_t,null):e.texImage2D(st,it,Mt,Yt,rt,0,At,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),J(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,st,i.get(G).__webglTexture,0,ct(A)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,st,i.get(G).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(C,A,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let at=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||J(A)){const st=A.depthTexture;st&&st.isDepthTexture&&(st.type===cs?at=n.DEPTH_COMPONENT32F:st.type===as&&(at=n.DEPTH_COMPONENT24));const it=ct(A);J(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,at,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,at,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,at,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const at=ct(A);G&&J(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,A.width,A.height):J(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const at=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0;st<at.length;st++){const it=at[st],At=r.convert(it.format,it.colorSpace),_t=r.convert(it.type),Mt=v(it.internalFormat,At,_t,it.colorSpace),Nt=ct(A);G&&J(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Mt,A.width,A.height):J(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,Mt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const at=i.get(A.depthTexture).__webglTexture,st=ct(A);if(A.depthTexture.format===zs)J(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(A.depthTexture.format===kr)J(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Ct(C){const A=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Gt(A.__webglFramebuffer,C)}else if(G){A.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[at]),A.__webglDepthbuffer[at]=n.createRenderbuffer(),Bt(A.__webglDepthbuffer[at],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Bt(A.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(C,A,G){const at=i.get(C);A!==void 0&&Et(at.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ct(C)}function N(C){const A=C.texture,G=i.get(C),at=i.get(A);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=A.version,o.memory.textures++);const st=C.isWebGLCubeRenderTarget===!0,it=C.isWebGLMultipleRenderTargets===!0,At=m(C)||a;if(st){G.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[_t]=[];for(let Mt=0;Mt<A.mipmaps.length;Mt++)G.__webglFramebuffer[_t][Mt]=n.createFramebuffer()}else G.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let _t=0;_t<A.mipmaps.length;_t++)G.__webglFramebuffer[_t]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(it)if(s.drawBuffers){const _t=C.texture;for(let Mt=0,Nt=_t.length;Mt<Nt;Mt++){const Yt=i.get(_t[Mt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&J(C)===!1){const _t=it?A:[A];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Mt=0;Mt<_t.length;Mt++){const Nt=_t[Mt];G.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Mt]);const Yt=r.convert(Nt.format,Nt.colorSpace),rt=r.convert(Nt.type),ee=v(Nt.internalFormat,Yt,rt,Nt.colorSpace,C.isXRRenderTarget===!0),U=ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,U,ee,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,G.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),Z(n.TEXTURE_CUBE_MAP,A,At);for(let _t=0;_t<6;_t++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Et(G.__webglFramebuffer[_t][Mt],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt);else Et(G.__webglFramebuffer[_t],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);_(A,At)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const _t=C.texture;for(let Mt=0,Nt=_t.length;Mt<Nt;Mt++){const Yt=_t[Mt],rt=i.get(Yt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),Z(n.TEXTURE_2D,Yt,At),Et(G.__webglFramebuffer,C,Yt,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,0),_(Yt,At)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?_t=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,at.__webglTexture),Z(_t,A,At),a&&A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Et(G.__webglFramebuffer[Mt],C,A,n.COLOR_ATTACHMENT0,_t,Mt);else Et(G.__webglFramebuffer,C,A,n.COLOR_ATTACHMENT0,_t,0);_(A,At)&&x(_t),e.unbindTexture()}C.depthBuffer&&Ct(C)}function ht(C){const A=m(C)||a,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let at=0,st=G.length;at<st;at++){const it=G[at];if(_(it,A)){const At=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_t=i.get(it).__webglTexture;e.bindTexture(At,_t),x(At),e.unbindTexture()}}}function K(C){if(a&&C.samples>0&&J(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,at=C.height;let st=n.COLOR_BUFFER_BIT;const it=[],At=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(C),Mt=C.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Nt=0;Nt<A.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Nt=0;Nt<A.length;Nt++){it.push(n.COLOR_ATTACHMENT0+Nt),C.depthBuffer&&it.push(At);const Yt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Yt===!1&&(C.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),Mt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Nt]),Yt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[At]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[At])),Mt){const rt=i.get(A[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,G,at,0,0,G,at,st,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Nt=0;Nt<A.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Nt]);const Yt=i.get(A[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function ct(C){return Math.min(s.maxSamples,C.samples)}function J(C){const A=i.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(C){const A=o.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function vt(C,A){const G=C.colorSpace,at=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===bu||G!==ki&&G!==Xn&&(me.getTransfer(G)===Me?a===!1?t.has("EXT_sRGB")===!0&&at===ai?(C.format=bu,C.minFilter=Wn,C.generateMipmaps=!1):A=Yp.sRGBToLinear(A):(at!==ai||st!==ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=J}function qM(n,t,e){const i=e.isWebGL2;function s(r,o=Xn){let a;const c=me.getTransfer(o);if(r===ps)return n.UNSIGNED_BYTE;if(r===Np)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Op)return n.UNSIGNED_SHORT_5_5_5_1;if(r===g0)return n.BYTE;if(r===x0)return n.SHORT;if(r===ju)return n.UNSIGNED_SHORT;if(r===Up)return n.INT;if(r===as)return n.UNSIGNED_INT;if(r===cs)return n.FLOAT;if(r===Uo)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_0)return n.ALPHA;if(r===ai)return n.RGBA;if(r===y0)return n.LUMINANCE;if(r===v0)return n.LUMINANCE_ALPHA;if(r===zs)return n.DEPTH_COMPONENT;if(r===kr)return n.DEPTH_STENCIL;if(r===bu)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===M0)return n.RED;if(r===Bp)return n.RED_INTEGER;if(r===S0)return n.RG;if(r===zp)return n.RG_INTEGER;if(r===kp)return n.RGBA_INTEGER;if(r===il||r===sl||r===rl||r===ol)if(c===Me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===il)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===il)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ol)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===Xh||r===Yh||r===qh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hp)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jh||r===Zh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===jh)return c===Me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Zh)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$h||r===Kh||r===Jh||r===Qh||r===tf||r===ef||r===nf||r===sf||r===rf||r===of||r===af||r===cf||r===lf||r===uf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$h)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kh)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jh)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qh)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tf)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sf)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===of)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cf)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===al||r===hf||r===ff)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===al)return c===Me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===b0||r===df||r===pf||r===mf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===al)return a.COMPRESSED_RED_RGTC1_EXT;if(r===df)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class jM extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zi extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class $M extends js{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const y=e.getContextAttributes();let m=null,p=null;const _=[],x=[],v=new Q;let E=null;const T=new In;T.layers.enable(1),T.viewport=new be;const b=new In;b.layers.enable(2),b.viewport=new be;const P=[T,b],S=new jM;S.layers.enable(1),S.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=_[Z];return nt===void 0&&(nt=new Rl,_[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=_[Z];return nt===void 0&&(nt=new Rl,_[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=_[Z];return nt===void 0&&(nt=new Rl,_[Z]=nt),nt.getHandSpace()};function I(Z){const nt=x.indexOf(Z.inputSource);if(nt===-1)return;const yt=_[nt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,l||o),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",D);for(let Z=0;Z<_.length;Z++){const nt=x[Z];nt!==null&&(x[Z]=null,_[Z].disconnect(nt))}M=null,L=null,t.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",O),s.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Vs(d.framebufferWidth,d.framebufferHeight,{format:ai,type:ps,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let nt=null,yt=null,Tt=null;y.depth&&(Tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=y.stencil?kr:zs,yt=y.stencil?Bs:as);const Et={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Et),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),p=new Vs(h.textureWidth,h.textureHeight,{format:ai,type:ps,depthTexture:new im(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Bt=t.properties.get(p);Bt.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(Z){for(let nt=0;nt<Z.removed.length;nt++){const yt=Z.removed[nt],Tt=x.indexOf(yt);Tt>=0&&(x[Tt]=null,_[Tt].disconnect(yt))}for(let nt=0;nt<Z.added.length;nt++){const yt=Z.added[nt];let Tt=x.indexOf(yt);if(Tt===-1){for(let Bt=0;Bt<_.length;Bt++)if(Bt>=x.length){x.push(yt),Tt=Bt;break}else if(x[Bt]===null){x[Bt]=yt,Tt=Bt;break}if(Tt===-1)break}const Et=_[Tt];Et&&Et.connect(yt)}}const F=new w,k=new w;function W(Z,nt,yt){F.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(yt.matrixWorld);const Tt=F.distanceTo(k),Et=nt.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,Gt=Et[14]/(Et[10]-1),Ct=Et[14]/(Et[10]+1),Vt=(Et[9]+1)/Et[5],N=(Et[9]-1)/Et[5],ht=(Et[8]-1)/Et[0],K=(Bt[8]+1)/Bt[0],ct=Gt*ht,J=Gt*K,Lt=Tt/(-ht+K),vt=Lt*-ht;nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(Lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const C=Gt+Lt,A=Ct+Lt,G=ct-vt,at=J+(Tt-vt),st=Vt*Ct/A*C,it=N*Ct/A*C;Z.projectionMatrix.makePerspective(G,at,st,it,C,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function q(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;S.near=b.near=T.near=Z.near,S.far=b.far=T.far=Z.far,(M!==S.near||L!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,L=S.far);const nt=Z.parent,yt=S.cameras;q(S,nt);for(let Tt=0;Tt<yt.length;Tt++)q(yt[Tt],nt);yt.length===2?W(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),V(Z,S,nt)};function V(Z,nt,yt){yt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=No*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let tt=null;function et(Z,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){const yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Tt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,Tt=!0);for(let Et=0;Et<yt.length;Et++){const Bt=yt[Et];let Gt=null;if(d!==null)Gt=d.getViewport(Bt);else{const Vt=f.getViewSubImage(h,Bt);Gt=Vt.viewport,Et===0&&(t.setRenderTargetTextures(p,Vt.colorTexture,h.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(p))}let Ct=P[Et];Ct===void 0&&(Ct=new In,Ct.layers.enable(Et),Ct.viewport=new be,P[Et]=Ct),Ct.matrix.fromArray(Bt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Bt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Et===0&&(S.matrix.copy(Ct.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Tt===!0&&S.cameras.push(Ct)}}for(let yt=0;yt<_.length;yt++){const Tt=x[yt],Et=_[yt];Tt!==null&&Et!==void 0&&Et.update(Tt,nt,l||o)}tt&&tt(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ut=new em;ut.setAnimationLoop(et),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}}function KM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Jp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JM(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){const v=x.program;i.uniformBlockBinding(_,v)}function l(_,x){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(_,E);const T=t.render.frame;r[_.id]!==T&&(h(_),r[_.id]=T)}function u(_){const x=f();_.__bindingPointIndex=x;const v=n.createBuffer(),E=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=s[_.id],v=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,b=v.length;T<b;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=P.length;S<M;S++){const L=P[S];if(d(L,T,S,E)===!0){const I=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let F=0;F<O.length;F++){const k=O[F],W=y(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,I+D,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,x,v,E){const T=_.value,b=x+"_"+v;if(E[b]===void 0)return typeof T=="number"||typeof T=="boolean"?E[b]=T:E[b]=T.clone(),!0;{const P=E[b];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return E[b]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(_){const x=_.uniforms;let v=0;const E=16;for(let b=0,P=x.length;b<P;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,L=S.length;M<L;M++){const I=S[M],O=Array.isArray(I.value)?I.value:[I.value];for(let D=0,F=O.length;D<F;D++){const k=O[D],W=y(k),q=v%E;q!==0&&E-q<W.boundary&&(v+=E-q),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=W.storage}}}const T=v%E;return T>0&&(v+=E-T),_.__size=v,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class th{constructor(t={}){const{canvas:e=j0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=ds,this.toneMappingExposure=1;const x=this;let v=!1,E=0,T=0,b=null,P=-1,S=null;const M=new be,L=new be;let I=null;const O=new oe(0);let D=0,F=e.width,k=e.height,W=1,q=null,V=null;const tt=new be(0,0,F,k),et=new be(0,0,F,k);let ut=!1;const Z=new Ju;let nt=!1,yt=!1,Tt=null;const Et=new ae,Bt=new Q,Gt=new w,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return b===null?W:1}let N=i;function ht(R,H){for(let Y=0;Y<R.length;Y++){const j=R[Y],X=e.getContext(j,H);if(X!==null)return X}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qu}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),N=ht(H,R),N===null)throw ht(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let K,ct,J,Lt,vt,C,A,G,at,st,it,At,_t,Mt,Nt,Yt,rt,ee,U,ot,gt,lt,Dt,ne;function ce(){K=new cv(N),ct=new nv(N,K,t),K.init(ct),lt=new qM(N,K,ct),J=new XM(N,K,ct),Lt=new hv(N),vt=new LM,C=new YM(N,K,J,vt,ct,lt,Lt),A=new sv(x),G=new av(x),at=new yx(N,ct),Dt=new tv(N,K,at,ct),st=new lv(N,at,Lt,Dt),it=new mv(N,st,at,Lt),U=new pv(N,ct,C),Yt=new iv(vt),At=new RM(x,A,G,K,ct,Dt,Yt),_t=new KM(x,vt),Mt=new IM,Nt=new zM(K,ct),ee=new Qy(x,A,G,J,it,h,c),rt=new WM(x,it,ct),ne=new JM(N,Lt,ct,J),ot=new ev(N,K,Lt,ct),gt=new uv(N,K,Lt,ct),Lt.programs=At.programs,x.capabilities=ct,x.extensions=K,x.properties=vt,x.renderLists=Mt,x.shadowMap=rt,x.state=J,x.info=Lt}ce();const Kt=new $M(x,N);this.xr=Kt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=K.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=K.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(F,k,!1))},this.getSize=function(R){return R.set(F,k)},this.setSize=function(R,H,Y=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,k=H,e.width=Math.floor(R*W),e.height=Math.floor(H*W),Y===!0&&(e.style.width=R+"px",e.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(F*W,k*W).floor()},this.setDrawingBufferSize=function(R,H,Y){F=R,k=H,W=Y,e.width=Math.floor(R*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,H,Y,j){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,H,Y,j),J.viewport(M.copy(tt).multiplyScalar(W).floor())},this.getScissor=function(R){return R.copy(et)},this.setScissor=function(R,H,Y,j){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,H,Y,j),J.scissor(L.copy(et).multiplyScalar(W).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(R){J.setScissorTest(ut=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(R=!0,H=!0,Y=!0){let j=0;if(R){let X=!1;if(b!==null){const St=b.texture.format;X=St===kp||St===zp||St===Bp}if(X){const St=b.texture.type,Ft=St===ps||St===as||St===ju||St===Bs||St===Np||St===Op,zt=ee.getClearColor(),Wt=ee.getClearAlpha(),Jt=zt.r,jt=zt.g,Zt=zt.b;Ft?(d[0]=Jt,d[1]=jt,d[2]=Zt,d[3]=Wt,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=Jt,g[1]=jt,g[2]=Zt,g[3]=Wt,N.clearBufferiv(N.COLOR,0,g))}else j|=N.COLOR_BUFFER_BIT}H&&(j|=N.DEPTH_BUFFER_BIT),Y&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Mt.dispose(),Nt.dispose(),vt.dispose(),A.dispose(),G.dispose(),it.dispose(),Dt.dispose(),ne.dispose(),At.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",an),Kt.removeEventListener("sessionend",ye),Tt&&(Tt.dispose(),Tt=null),cn.stop()};function mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=Lt.autoReset,H=rt.enabled,Y=rt.autoUpdate,j=rt.needsUpdate,X=rt.type;ce(),Lt.autoReset=R,rt.enabled=H,rt.autoUpdate=Y,rt.needsUpdate=j,rt.type=X}function ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){const H=R.target;H.removeEventListener("dispose",dt),Ot(H)}function Ot(R){It(R),vt.remove(R)}function It(R){const H=vt.get(R).programs;H!==void 0&&(H.forEach(function(Y){At.releaseProgram(Y)}),R.isShaderMaterial&&At.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Y,j,X,St){H===null&&(H=Ct);const Ft=X.isMesh&&X.matrixWorld.determinant()<0,zt=Tg(R,H,Y,j,X);J.setMaterial(j,Ft);let Wt=Y.index,Jt=1;if(j.wireframe===!0){if(Wt=st.getWireframeAttribute(Y),Wt===void 0)return;Jt=2}const jt=Y.drawRange,Zt=Y.attributes.position;let Ue=jt.start*Jt,Rn=(jt.start+jt.count)*Jt;St!==null&&(Ue=Math.max(Ue,St.start*Jt),Rn=Math.min(Rn,(St.start+St.count)*Jt)),Wt!==null?(Ue=Math.max(Ue,0),Rn=Math.min(Rn,Wt.count)):Zt!=null&&(Ue=Math.max(Ue,0),Rn=Math.min(Rn,Zt.count));const je=Rn-Ue;if(je<0||je===1/0)return;Dt.setup(X,j,zt,Y,Wt);let bi,Ae=ot;if(Wt!==null&&(bi=at.get(Wt),Ae=gt,Ae.setIndex(bi)),X.isMesh)j.wireframe===!0?(J.setLineWidth(j.wireframeLinewidth*Vt()),Ae.setMode(N.LINES)):Ae.setMode(N.TRIANGLES);else if(X.isLine){let ie=j.linewidth;ie===void 0&&(ie=1),J.setLineWidth(ie*Vt()),X.isLineSegments?Ae.setMode(N.LINES):X.isLineLoop?Ae.setMode(N.LINE_LOOP):Ae.setMode(N.LINE_STRIP)}else X.isPoints?Ae.setMode(N.POINTS):X.isSprite&&Ae.setMode(N.TRIANGLES);if(X.isBatchedMesh)Ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Ae.renderInstances(Ue,je,X.count);else if(Y.isInstancedBufferGeometry){const ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Jc=Math.min(Y.instanceCount,ie);Ae.renderInstances(Ue,je,Jc)}else Ae.render(Ue,je)};function he(R,H,Y){R.transparent===!0&&R.side===pn&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,oa(R,H,Y),R.side=_i,R.needsUpdate=!0,oa(R,H,Y),R.side=pn):oa(R,H,Y)}this.compile=function(R,H,Y=null){Y===null&&(Y=R),m=Nt.get(Y),m.init(),_.push(m),Y.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),R!==Y&&R.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights);const j=new Set;return R.traverse(function(X){const St=X.material;if(St)if(Array.isArray(St))for(let Ft=0;Ft<St.length;Ft++){const zt=St[Ft];he(zt,Y,X),j.add(zt)}else he(St,Y,X),j.add(St)}),_.pop(),m=null,j},this.compileAsync=function(R,H,Y=null){const j=this.compile(R,H,Y);return new Promise(X=>{function St(){if(j.forEach(function(Ft){vt.get(Ft).currentProgram.isReady()&&j.delete(Ft)}),j.size===0){X(R);return}setTimeout(St,10)}K.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let fe=null;function qe(R){fe&&fe(R)}function an(){cn.stop()}function ye(){cn.start()}const cn=new em;cn.setAnimationLoop(qe),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(R){fe=R,Kt.setAnimationLoop(R),R===null?cn.stop():cn.start()},Kt.addEventListener("sessionstart",an),Kt.addEventListener("sessionend",ye),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(H),H=Kt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,H,b),m=Nt.get(R,_.length),m.init(),_.push(m),Et.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(Et),yt=this.localClippingEnabled,nt=Yt.init(this.clippingPlanes,yt),y=Mt.get(R,p.length),y.init(),p.push(y),fi(R,H,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(q,V),this.info.render.frame++,nt===!0&&Yt.beginShadows();const Y=m.state.shadowsArray;if(rt.render(Y,R,H),nt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(y,R),m.setupLights(x._useLegacyLights),H.isArrayCamera){const j=H.cameras;for(let X=0,St=j.length;X<St;X++){const Ft=j[X];Lh(y,R,Ft,Ft.viewport)}}else Lh(y,R,H);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(x,R,H),Dt.resetDefaultState(),P=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function fi(R,H,Y,j){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){j&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Ft=it.update(R),zt=R.material;zt.visible&&y.push(R,Ft,zt,Y,Gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ft=it.update(R),zt=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Gt.copy(Ft.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(zt)){const Wt=Ft.groups;for(let Jt=0,jt=Wt.length;Jt<jt;Jt++){const Zt=Wt[Jt],Ue=zt[Zt.materialIndex];Ue&&Ue.visible&&y.push(R,Ft,Ue,Y,Gt.z,Zt)}}else zt.visible&&y.push(R,Ft,zt,Y,Gt.z,null)}}const St=R.children;for(let Ft=0,zt=St.length;Ft<zt;Ft++)fi(St[Ft],H,Y,j)}function Lh(R,H,Y,j){const X=R.opaque,St=R.transmissive,Ft=R.transparent;m.setupLightsView(Y),nt===!0&&Yt.setGlobalState(x.clippingPlanes,Y),St.length>0&&wg(X,St,H,Y),j&&J.viewport(M.copy(j)),X.length>0&&ra(X,H,Y),St.length>0&&ra(St,H,Y),Ft.length>0&&ra(Ft,H,Y),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function wg(R,H,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const St=ct.isWebGL2;Tt===null&&(Tt=new Vs(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Uo:ps,minFilter:Fo,samples:St?4:0})),x.getDrawingBufferSize(Bt),St?Tt.setSize(Bt.x,Bt.y):Tt.setSize(Sc(Bt.x),Sc(Bt.y));const Ft=x.getRenderTarget();x.setRenderTarget(Tt),x.getClearColor(O),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const zt=x.toneMapping;x.toneMapping=ds,ra(R,Y,j),C.updateMultisampleRenderTarget(Tt),C.updateRenderTargetMipmap(Tt);let Wt=!1;for(let Jt=0,jt=H.length;Jt<jt;Jt++){const Zt=H[Jt],Ue=Zt.object,Rn=Zt.geometry,je=Zt.material,bi=Zt.group;if(je.side===pn&&Ue.layers.test(j.layers)){const Ae=je.side;je.side=xn,je.needsUpdate=!0,Dh(Ue,Y,j,Rn,je,bi),je.side=Ae,je.needsUpdate=!0,Wt=!0}}Wt===!0&&(C.updateMultisampleRenderTarget(Tt),C.updateRenderTargetMipmap(Tt)),x.setRenderTarget(Ft),x.setClearColor(O,D),x.toneMapping=zt}function ra(R,H,Y){const j=H.isScene===!0?H.overrideMaterial:null;for(let X=0,St=R.length;X<St;X++){const Ft=R[X],zt=Ft.object,Wt=Ft.geometry,Jt=j===null?Ft.material:j,jt=Ft.group;zt.layers.test(Y.layers)&&Dh(zt,H,Y,Wt,Jt,jt)}}function Dh(R,H,Y,j,X,St){R.onBeforeRender(x,H,Y,j,X,St),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,H,Y,j,R,St),X.transparent===!0&&X.side===pn&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,x.renderBufferDirect(Y,H,j,X,R,St),X.side=_i,X.needsUpdate=!0,x.renderBufferDirect(Y,H,j,X,R,St),X.side=pn):x.renderBufferDirect(Y,H,j,X,R,St),R.onAfterRender(x,H,Y,j,X,St)}function oa(R,H,Y){H.isScene!==!0&&(H=Ct);const j=vt.get(R),X=m.state.lights,St=m.state.shadowsArray,Ft=X.state.version,zt=At.getParameters(R,X.state,St,H,Y),Wt=At.getProgramCacheKey(zt);let Jt=j.programs;j.environment=R.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(R.isMeshStandardMaterial?G:A).get(R.envMap||j.environment),Jt===void 0&&(R.addEventListener("dispose",dt),Jt=new Map,j.programs=Jt);let jt=Jt.get(Wt);if(jt!==void 0){if(j.currentProgram===jt&&j.lightsStateVersion===Ft)return Fh(R,zt),jt}else zt.uniforms=At.getUniforms(R),R.onBuild(Y,zt,x),R.onBeforeCompile(zt,x),jt=At.acquireProgram(zt,Wt),Jt.set(Wt,jt),j.uniforms=zt.uniforms;const Zt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Yt.uniform),Fh(R,zt),j.needsLights=Cg(R),j.lightsStateVersion=Ft,j.needsLights&&(Zt.ambientLightColor.value=X.state.ambient,Zt.lightProbe.value=X.state.probe,Zt.directionalLights.value=X.state.directional,Zt.directionalLightShadows.value=X.state.directionalShadow,Zt.spotLights.value=X.state.spot,Zt.spotLightShadows.value=X.state.spotShadow,Zt.rectAreaLights.value=X.state.rectArea,Zt.ltc_1.value=X.state.rectAreaLTC1,Zt.ltc_2.value=X.state.rectAreaLTC2,Zt.pointLights.value=X.state.point,Zt.pointLightShadows.value=X.state.pointShadow,Zt.hemisphereLights.value=X.state.hemi,Zt.directionalShadowMap.value=X.state.directionalShadowMap,Zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Zt.spotShadowMap.value=X.state.spotShadowMap,Zt.spotLightMatrix.value=X.state.spotLightMatrix,Zt.spotLightMap.value=X.state.spotLightMap,Zt.pointShadowMap.value=X.state.pointShadowMap,Zt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=jt,j.uniformsList=null,jt}function Ih(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=lc.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Fh(R,H){const Y=vt.get(R);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Tg(R,H,Y,j,X){H.isScene!==!0&&(H=Ct),C.resetTextureUnits();const St=H.fog,Ft=j.isMeshStandardMaterial?H.environment:null,zt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ki,Wt=(j.isMeshStandardMaterial?G:A).get(j.envMap||Ft),Jt=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,jt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Zt=!!Y.morphAttributes.position,Ue=!!Y.morphAttributes.normal,Rn=!!Y.morphAttributes.color;let je=ds;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(je=x.toneMapping);const bi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ae=bi!==void 0?bi.length:0,ie=vt.get(j),Jc=m.state.lights;if(nt===!0&&(yt===!0||R!==S)){const Bn=R===S&&j.id===P;Yt.setState(j,R,Bn)}let Le=!1;j.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Jc.state.version||ie.outputColorSpace!==zt||X.isBatchedMesh&&ie.batching===!1||!X.isBatchedMesh&&ie.batching===!0||X.isInstancedMesh&&ie.instancing===!1||!X.isInstancedMesh&&ie.instancing===!0||X.isSkinnedMesh&&ie.skinning===!1||!X.isSkinnedMesh&&ie.skinning===!0||X.isInstancedMesh&&ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ie.instancingColor===!1&&X.instanceColor!==null||ie.envMap!==Wt||j.fog===!0&&ie.fog!==St||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Yt.numPlanes||ie.numIntersection!==Yt.numIntersection)||ie.vertexAlphas!==Jt||ie.vertexTangents!==jt||ie.morphTargets!==Zt||ie.morphNormals!==Ue||ie.morphColors!==Rn||ie.toneMapping!==je||ct.isWebGL2===!0&&ie.morphTargetsCount!==Ae)&&(Le=!0):(Le=!0,ie.__version=j.version);let xs=ie.currentProgram;Le===!0&&(xs=oa(j,H,X));let Uh=!1,Kr=!1,Qc=!1;const Qe=xs.getUniforms(),_s=ie.uniforms;if(J.useProgram(xs.program)&&(Uh=!0,Kr=!0,Qc=!0),j.id!==P&&(P=j.id,Kr=!0),Uh||S!==R){Qe.setValue(N,"projectionMatrix",R.projectionMatrix),Qe.setValue(N,"viewMatrix",R.matrixWorldInverse);const Bn=Qe.map.cameraPosition;Bn!==void 0&&Bn.setValue(N,Gt.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&Qe.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Qe.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Kr=!0,Qc=!0)}if(X.isSkinnedMesh){Qe.setOptional(N,X,"bindMatrix"),Qe.setOptional(N,X,"bindMatrixInverse");const Bn=X.skeleton;Bn&&(ct.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),Qe.setValue(N,"boneTexture",Bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Qe.setOptional(N,X,"batchingTexture"),Qe.setValue(N,"batchingTexture",X._matricesTexture,C));const tl=Y.morphAttributes;if((tl.position!==void 0||tl.normal!==void 0||tl.color!==void 0&&ct.isWebGL2===!0)&&U.update(X,Y,xs),(Kr||ie.receiveShadow!==X.receiveShadow)&&(ie.receiveShadow=X.receiveShadow,Qe.setValue(N,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_s.envMap.value=Wt,_s.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),Kr&&(Qe.setValue(N,"toneMappingExposure",x.toneMappingExposure),ie.needsLights&&Ag(_s,Qc),St&&j.fog===!0&&_t.refreshFogUniforms(_s,St),_t.refreshMaterialUniforms(_s,j,W,k,Tt),lc.upload(N,Ih(ie),_s,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(lc.upload(N,Ih(ie),_s,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Qe.setValue(N,"center",X.center),Qe.setValue(N,"modelViewMatrix",X.modelViewMatrix),Qe.setValue(N,"normalMatrix",X.normalMatrix),Qe.setValue(N,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Bn=j.uniformsGroups;for(let el=0,Pg=Bn.length;el<Pg;el++)if(ct.isWebGL2){const Nh=Bn[el];ne.update(Nh,xs),ne.bind(Nh,xs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xs}function Ag(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Cg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,H,Y){vt.get(R.texture).__webglTexture=H,vt.get(R.depthTexture).__webglTexture=Y;const j=vt.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){const Y=vt.get(R);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Y=0){b=R,E=H,T=Y;let j=!0,X=null,St=!1,Ft=!1;if(R){const Wt=vt.get(R);Wt.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(N.FRAMEBUFFER,null),j=!1):Wt.__webglFramebuffer===void 0?C.setupRenderTarget(R):Wt.__hasExternalTextures&&C.rebindTextures(R,vt.get(R.texture).__webglTexture,vt.get(R.depthTexture).__webglTexture);const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ft=!0);const jt=vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[H])?X=jt[H][Y]:X=jt[H],St=!0):ct.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?X=vt.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?X=jt[Y]:X=jt,M.copy(R.viewport),L.copy(R.scissor),I=R.scissorTest}else M.copy(tt).multiplyScalar(W).floor(),L.copy(et).multiplyScalar(W).floor(),I=ut;if(J.bindFramebuffer(N.FRAMEBUFFER,X)&&ct.drawBuffers&&j&&J.drawBuffers(R,X),J.viewport(M),J.scissor(L),J.setScissorTest(I),St){const Wt=vt.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Wt.__webglTexture,Y)}else if(Ft){const Wt=vt.get(R.texture),Jt=H||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Wt.__webglTexture,Y||0,Jt)}P=-1},this.readRenderTargetPixels=function(R,H,Y,j,X,St,Ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt){J.bindFramebuffer(N.FRAMEBUFFER,zt);try{const Wt=R.texture,Jt=Wt.format,jt=Wt.type;if(Jt!==ai&&lt.convert(Jt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zt=jt===Uo&&(K.has("EXT_color_buffer_half_float")||ct.isWebGL2&&K.has("EXT_color_buffer_float"));if(jt!==ps&&lt.convert(jt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(jt===cs&&(ct.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-j&&Y>=0&&Y<=R.height-X&&N.readPixels(H,Y,j,X,lt.convert(Jt),lt.convert(jt),St)}finally{const Wt=b!==null?vt.get(b).__webglFramebuffer:null;J.bindFramebuffer(N.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(R,H,Y=0){const j=Math.pow(2,-Y),X=Math.floor(H.image.width*j),St=Math.floor(H.image.height*j);C.setTexture2D(H,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,R.x,R.y,X,St),J.unbindTexture()},this.copyTextureToTexture=function(R,H,Y,j=0){const X=H.image.width,St=H.image.height,Ft=lt.convert(Y.format),zt=lt.convert(Y.type);C.setTexture2D(Y,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment),H.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,j,R.x,R.y,X,St,Ft,zt,H.image.data):H.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,j,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,Ft,H.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,j,R.x,R.y,Ft,zt,H.image),j===0&&Y.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(R,H,Y,j,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=R.max.x-R.min.x+1,Ft=R.max.y-R.min.y+1,zt=R.max.z-R.min.z+1,Wt=lt.convert(j.format),Jt=lt.convert(j.type);let jt;if(j.isData3DTexture)C.setTexture3D(j,0),jt=N.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),jt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);const Zt=N.getParameter(N.UNPACK_ROW_LENGTH),Ue=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rn=N.getParameter(N.UNPACK_SKIP_PIXELS),je=N.getParameter(N.UNPACK_SKIP_ROWS),bi=N.getParameter(N.UNPACK_SKIP_IMAGES),Ae=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,R.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,R.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,R.min.z),Y.isDataTexture||Y.isData3DTexture?N.texSubImage3D(jt,X,H.x,H.y,H.z,St,Ft,zt,Wt,Jt,Ae.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(jt,X,H.x,H.y,H.z,St,Ft,zt,Wt,Ae.data)):N.texSubImage3D(jt,X,H.x,H.y,H.z,St,Ft,zt,Wt,Jt,Ae),N.pixelStorei(N.UNPACK_ROW_LENGTH,Zt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ue),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bi),X===0&&j.generateMipmaps&&N.generateMipmap(jt),J.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,J.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zu?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===Bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?ks:Gp}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ks?$e:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class QM extends th{}QM.prototype.isWebGL1Renderer=!0;class lm extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class jo extends qr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sd=new w,rd=new w,od=new ae,Ll=new Yr,Pa=new Yo;class Fi extends Fe{constructor(t=new Ge,e=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)sd.fromBufferAttribute(e,s-1),rd.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=sd.distanceTo(rd);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;od.copy(s).invert(),Ll.copy(t.ray).applyMatrix4(od);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,u=new w,f=new w,h=new w,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let x=p,v=_-1;x<v;x+=d){const E=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,T),Ll.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(h);P<t.near||P>t.far||e.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=p,v=_-1;x<v;x+=d){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ll.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ad=new w,cd=new w;class eh extends Fi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ad.fromBufferAttribute(e,s),cd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ad.distanceTo(cd);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tS extends Tn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Q:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new w,s=[],r=[],o=[],a=new w,c=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ke(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nh extends Mi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const i=e||new Q,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class eS extends nh{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ra=new w,Dl=new ih,Il=new ih,Fl=new ih;class nS extends Mi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new w){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ra.subVectors(s[0],s[1]).add(s[0]),l=Ra);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Dl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,y,m),Il.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,y,m),Fl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Il.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Fl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(Dl.calc(c),Il.calc(c),Fl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ld(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function iS(n,t){const e=1-n;return e*e*t}function sS(n,t){return 2*(1-n)*n*t}function rS(n,t){return n*n*t}function So(n,t,e,i){return iS(n,t)+sS(n,e)+rS(n,i)}function oS(n,t){const e=1-n;return e*e*e*t}function aS(n,t){const e=1-n;return 3*e*e*n*t}function cS(n,t){return 3*(1-n)*n*n*t}function lS(n,t){return n*n*n*t}function bo(n,t,e,i,s){return oS(n,t)+aS(n,e)+cS(n,i)+lS(n,s)}class um extends Mi{constructor(t=new Q,e=new Q,i=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(t,s.x,r.x,o.x,a.x),bo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uS extends Mi{constructor(t=new w,e=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(t,s.x,r.x,o.x,a.x),bo(t,s.y,r.y,o.y,a.y),bo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hm extends Mi{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hS extends Mi{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fm extends Mi{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(So(t,s.x,r.x,o.x),So(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fS extends Mi{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(So(t,s.x,r.x,o.x),So(t,s.y,r.y,o.y),So(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(ld(a,c.x,l.x,u.x,f.x),ld(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:eS,CatmullRomCurve3:nS,CubicBezierCurve:um,CubicBezierCurve3:uS,EllipseCurve:nh,LineCurve:hm,LineCurve3:hS,QuadraticBezierCurve:fm,QuadraticBezierCurve3:fS,SplineCurve:dm});class dS extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Tu[s.type]().fromJSON(s))}return this}}class Oo extends dS{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new hm(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new fm(this.currentPoint.clone(),new Q(t,e),new Q(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new um(this.currentPoint.clone(),new Q(t,e),new Q(i,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new dm(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new nh(t,e,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Or extends Ge{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new w,h=new Q,d=new w,g=new w,y=new w;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let _=0;_<=e;_++){const x=i+_*u*s,v=Math.sin(x),E=Math.cos(x);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*v,f.y=t[T].y,f.z=t[T].x*E,o.push(f.x,f.y,f.z),h.x=_/e,h.y=T/(t.length-1),a.push(h.x,h.y);const b=c[3*T+0]*v,P=c[3*T+1],S=c[3*T+0]*E;l.push(b,P,S)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){const v=x+_*t.length,E=v,T=v+t.length,b=v+t.length+1,P=v+1;r.push(E,T,P),r.push(b,P,T)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("uv",new de(a,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.points,t.segments,t.phiStart,t.phiLength)}}class sh extends Or{constructor(t=1,e=1,i=4,s=8){const r=new Oo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new sh(t.radius,t.length,t.capSegments,t.radialSegments)}}class De extends Ge{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const y=[],m=i/2;let p=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function _(){const v=new w,E=new w;let T=0;const b=(e-t)/i;for(let P=0;P<=r;P++){const S=[],M=P/r,L=M*(e-t)+t;for(let I=0;I<=s;I++){const O=I/s,D=O*c+a,F=Math.sin(D),k=Math.cos(D);E.x=L*F,E.y=-M*i+m,E.z=L*k,f.push(E.x,E.y,E.z),v.set(F,b,k).normalize(),h.push(v.x,v.y,v.z),d.push(O,1-M),S.push(g++)}y.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=y[S][P],L=y[S+1][P],I=y[S+1][P+1],O=y[S][P+1];u.push(M,L,O),u.push(L,I,O),T+=6}l.addGroup(p,T,0),p+=T}function x(v){const E=g,T=new Q,b=new w;let P=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*M,0),h.push(0,M,0),d.push(.5,.5),g++;const L=g;for(let I=0;I<=s;I++){const D=I/s*c+a,F=Math.cos(D),k=Math.sin(D);b.x=S*k,b.y=m*M,b.z=S*F,f.push(b.x,b.y,b.z),h.push(0,M,0),T.x=F*.5+.5,T.y=k*.5*M+.5,d.push(T.x,T.y),g++}for(let I=0;I<s;I++){const O=E+I,D=L+I;v===!0?u.push(D,D+1,O):u.push(D+1,D,O),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rh extends Ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new w,v=new w,E=new w;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],v),d(e[T+2],E),c(x,v,E,_)}function c(_,x,v,E){const T=E+1,b=[];for(let P=0;P<=T;P++){b[P]=[];const S=_.clone().lerp(v,P/T),M=x.clone().lerp(v,P/T),L=T-P;for(let I=0;I<=L;I++)I===0&&P===T?b[P][I]=S:b[P][I]=S.clone().lerp(M,I/L)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const M=Math.floor(S/2);S%2===0?(h(b[P][M+1]),h(b[P+1][M]),h(b[P][M])):(h(b[P][M+1]),h(b[P+1][M+1]),h(b[P+1][M]))}}function l(_){const x=new w;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const _=new w;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];const v=m(_)/2/Math.PI+.5,E=p(_)/Math.PI+.5;o.push(v,1-E)}g(),f()}function f(){for(let _=0;_<o.length;_+=6){const x=o[_+0],v=o[_+2],E=o[_+4],T=Math.max(x,v,E),b=Math.min(x,v,E);T>.9&&b<.1&&(x<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function d(_,x){const v=_*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const _=new w,x=new w,v=new w,E=new w,T=new Q,b=new Q,P=new Q;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),E.copy(_).add(x).add(v).divideScalar(3);const L=m(E);y(T,M+0,_,L),y(b,M+2,x,L),y(P,M+4,v,L)}}function y(_,x,v,E){E<0&&_.x===1&&(o[x]=_.x-1),v.x===0&&v.z===0&&(o[x]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.vertices,t.indices,t.radius,t.details)}}const La=new w,Da=new w,Ul=new w,Ia=new Se;class pS extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ur*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:y,b:m,c:p}=Ia;if(y.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ia.getNormal(Ul),f[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){const x=(_+1)%3,v=f[_],E=f[x],T=Ia[u[_]],b=Ia[u[x]],P=`${v}_${E}`,S=`${E}_${v}`;S in h&&h[S]?(Ul.dot(h[S].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(b.x,b.y,b.z)),h[S]=null):P in h||(h[P]={index0:l[_],index1:l[x],normal:Ul.clone()})}}for(const g in h)if(h[g]){const{index0:y,index1:m}=h[g];La.fromBufferAttribute(a,y),Da.fromBufferAttribute(a,m),d.push(La.x,La.y,La.z),d.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new de(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gr extends Oo{constructor(t){super(t),this.uuid=Zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Oo().fromJSON(s))}return this}}const mS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=pm(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,d;if(i&&(r=vS(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)f=n[g],h=n[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Bo(r,o,e,a,c,d,0),o}};function pm(n,t,e,i,s){let r,o;if(s===LS(n,t,e,i)>0)for(r=t;r<e;r+=i)o=ud(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=ud(r,n[r],n[r+1],o);return o&&kc(o,o.next)&&(ko(o),o=o.next),o}function Xs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(kc(e,e.next)||Pe(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Bo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&wS(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?xS(n,i,s,r):gS(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),ko(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=_S(Xs(n),t,e),Bo(n,t,e,i,s,r,2)):o===2&&yS(n,t,e,i,s,r):Bo(Xs(n),t,e,i,s,r,1);break}}}function gS(n){const t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Cr(s,a,r,c,o,l,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xS(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,y=a>c?a>l?a:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,p=Au(d,g,t,e,i),_=Au(y,m,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=_;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cr(a,u,c,f,l,h,x.x,x.y)&&Pe(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Cr(a,u,c,f,l,h,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cr(a,u,c,f,l,h,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Cr(a,u,c,f,l,h,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _S(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!kc(s,r)&&mm(s,i,i.next,r)&&zo(s,r)&&zo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ko(i),ko(i.next),i=n=r),i=i.next}while(i!==n);return Xs(i)}function yS(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&CS(o,a)){let c=gm(o,a);o=Xs(o,o.next),c=Xs(c,c.next),Bo(o,t,e,i,s,r,0),Bo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function vS(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=pm(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(AS(l));for(s.sort(MS),r=0;r<s.length;r++)e=SS(s[r],e);return e}function MS(n,t){return n.x-t.x}function SS(n,t){const e=bS(n,t);if(!e)return t;const i=gm(e,n);return Xs(i,i.next),Xs(e,e.next)}function bS(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Cr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),zo(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&ES(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function ES(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function wS(n,t,e,i){let s=n;do s.z===0&&(s.z=Au(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,TS(s)}function TS(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Au(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function AS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Cr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function CS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!PS(n,t)&&(zo(n,t)&&zo(t,n)&&RS(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||kc(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function kc(n,t){return n.x===t.x&&n.y===t.y}function mm(n,t,e,i){const s=Ua(Pe(n,t,e)),r=Ua(Pe(n,t,i)),o=Ua(Pe(e,i,n)),a=Ua(Pe(e,i,t));return!!(s!==r&&o!==a||s===0&&Fa(n,e,t)||r===0&&Fa(n,i,t)||o===0&&Fa(e,n,i)||a===0&&Fa(e,t,i))}function Fa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ua(n){return n>0?1:n<0?-1:0}function PS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&mm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function zo(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function RS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function gm(n,t){const e=new Cu(n.i,n.x,n.y),i=new Cu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ud(n,t,e,i){const s=new Cu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ko(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cu(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function LS(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Eo{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Eo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];hd(t),fd(i,t);let o=t.length;e.forEach(hd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,fd(i,e[c]);const a=mS.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function hd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function fd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Hc extends Ge{constructor(t=new Gr([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:DS;let x,v=!1,E,T,b,P;p&&(x=p.getSpacedPoints(u),v=!0,h=!1,E=p.computeFrenetFrames(u,!1),T=new w,b=new w,P=new w),h||(m=0,d=0,g=0,y=0);const S=a.extractPoints(l);let M=S.shape;const L=S.holes;if(!Eo.isClockWise(M)){M=M.reverse();for(let N=0,ht=L.length;N<ht;N++){const K=L[N];Eo.isClockWise(K)&&(L[N]=K.reverse())}}const O=Eo.triangulateShape(M,L),D=M;for(let N=0,ht=L.length;N<ht;N++){const K=L[N];M=M.concat(K)}function F(N,ht,K){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ht,K)}const k=M.length,W=O.length;function q(N,ht,K){let ct,J,Lt;const vt=N.x-ht.x,C=N.y-ht.y,A=K.x-N.x,G=K.y-N.y,at=vt*vt+C*C,st=vt*G-C*A;if(Math.abs(st)>Number.EPSILON){const it=Math.sqrt(at),At=Math.sqrt(A*A+G*G),_t=ht.x-C/it,Mt=ht.y+vt/it,Nt=K.x-G/At,Yt=K.y+A/At,rt=((Nt-_t)*G-(Yt-Mt)*A)/(vt*G-C*A);ct=_t+vt*rt-N.x,J=Mt+C*rt-N.y;const ee=ct*ct+J*J;if(ee<=2)return new Q(ct,J);Lt=Math.sqrt(ee/2)}else{let it=!1;vt>Number.EPSILON?A>Number.EPSILON&&(it=!0):vt<-Number.EPSILON?A<-Number.EPSILON&&(it=!0):Math.sign(C)===Math.sign(G)&&(it=!0),it?(ct=-C,J=vt,Lt=Math.sqrt(at)):(ct=vt,J=C,Lt=Math.sqrt(at/2))}return new Q(ct/Lt,J/Lt)}const V=[];for(let N=0,ht=D.length,K=ht-1,ct=N+1;N<ht;N++,K++,ct++)K===ht&&(K=0),ct===ht&&(ct=0),V[N]=q(D[N],D[K],D[ct]);const tt=[];let et,ut=V.concat();for(let N=0,ht=L.length;N<ht;N++){const K=L[N];et=[];for(let ct=0,J=K.length,Lt=J-1,vt=ct+1;ct<J;ct++,Lt++,vt++)Lt===J&&(Lt=0),vt===J&&(vt=0),et[ct]=q(K[ct],K[Lt],K[vt]);tt.push(et),ut=ut.concat(et)}for(let N=0;N<m;N++){const ht=N/m,K=d*Math.cos(ht*Math.PI/2),ct=g*Math.sin(ht*Math.PI/2)+y;for(let J=0,Lt=D.length;J<Lt;J++){const vt=F(D[J],V[J],ct);Et(vt.x,vt.y,-K)}for(let J=0,Lt=L.length;J<Lt;J++){const vt=L[J];et=tt[J];for(let C=0,A=vt.length;C<A;C++){const G=F(vt[C],et[C],ct);Et(G.x,G.y,-K)}}}const Z=g+y;for(let N=0;N<k;N++){const ht=h?F(M[N],ut[N],Z):M[N];v?(b.copy(E.normals[0]).multiplyScalar(ht.x),T.copy(E.binormals[0]).multiplyScalar(ht.y),P.copy(x[0]).add(b).add(T),Et(P.x,P.y,P.z)):Et(ht.x,ht.y,0)}for(let N=1;N<=u;N++)for(let ht=0;ht<k;ht++){const K=h?F(M[ht],ut[ht],Z):M[ht];v?(b.copy(E.normals[N]).multiplyScalar(K.x),T.copy(E.binormals[N]).multiplyScalar(K.y),P.copy(x[N]).add(b).add(T),Et(P.x,P.y,P.z)):Et(K.x,K.y,f/u*N)}for(let N=m-1;N>=0;N--){const ht=N/m,K=d*Math.cos(ht*Math.PI/2),ct=g*Math.sin(ht*Math.PI/2)+y;for(let J=0,Lt=D.length;J<Lt;J++){const vt=F(D[J],V[J],ct);Et(vt.x,vt.y,f+K)}for(let J=0,Lt=L.length;J<Lt;J++){const vt=L[J];et=tt[J];for(let C=0,A=vt.length;C<A;C++){const G=F(vt[C],et[C],ct);v?Et(G.x,G.y+x[u-1].y,x[u-1].x+K):Et(G.x,G.y,f+K)}}}nt(),yt();function nt(){const N=s.length/3;if(h){let ht=0,K=k*ht;for(let ct=0;ct<W;ct++){const J=O[ct];Bt(J[2]+K,J[1]+K,J[0]+K)}ht=u+m*2,K=k*ht;for(let ct=0;ct<W;ct++){const J=O[ct];Bt(J[0]+K,J[1]+K,J[2]+K)}}else{for(let ht=0;ht<W;ht++){const K=O[ht];Bt(K[2],K[1],K[0])}for(let ht=0;ht<W;ht++){const K=O[ht];Bt(K[0]+k*u,K[1]+k*u,K[2]+k*u)}}i.addGroup(N,s.length/3-N,0)}function yt(){const N=s.length/3;let ht=0;Tt(D,ht),ht+=D.length;for(let K=0,ct=L.length;K<ct;K++){const J=L[K];Tt(J,ht),ht+=J.length}i.addGroup(N,s.length/3-N,1)}function Tt(N,ht){let K=N.length;for(;--K>=0;){const ct=K;let J=K-1;J<0&&(J=N.length-1);for(let Lt=0,vt=u+m*2;Lt<vt;Lt++){const C=k*Lt,A=k*(Lt+1),G=ht+ct+C,at=ht+J+C,st=ht+J+A,it=ht+ct+A;Gt(G,at,st,it)}}}function Et(N,ht,K){c.push(N),c.push(ht),c.push(K)}function Bt(N,ht,K){Ct(N),Ct(ht),Ct(K);const ct=s.length/3,J=_.generateTopUV(i,s,ct-3,ct-2,ct-1);Vt(J[0]),Vt(J[1]),Vt(J[2])}function Gt(N,ht,K,ct){Ct(N),Ct(ht),Ct(ct),Ct(ht),Ct(K),Ct(ct);const J=s.length/3,Lt=_.generateSideWallUV(i,s,J-6,J-3,J-2,J-1);Vt(Lt[0]),Vt(Lt[1]),Vt(Lt[3]),Vt(Lt[1]),Vt(Lt[2]),Vt(Lt[3])}function Ct(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function Vt(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return IS(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Tu[s.type]().fromJSON(s)),new Hc(i,t.options)}}const DS={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new Q(r,o),new Q(a,c),new Q(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-f),new Q(h,1-g),new Q(y,1-p)]:[new Q(a,1-c),new Q(u,1-f),new Q(d,1-g),new Q(m,1-p)]}};function IS(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pr extends rh{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pr(t.radius,t.detail)}}class Zr extends Ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new w,h=new w,d=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const _=[],x=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const T=E/e;f.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(T+v,1-x),_.push(l++)}u.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const x=u[p][_+1],v=u[p][_],E=u[p+1][_],T=u[p+1][_+1];(p!==0||o>0)&&d.push(x,v,T),(p!==i-1||c<Math.PI)&&d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ss extends Ge{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new w,f=new w,h=new w;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const y=g/s*r,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const y=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(y,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zo extends qr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xm extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class FS extends xm{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Nl=new ae,dd=new w,pd=new w;class US{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ju,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(dd),pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pd),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class NS extends US{constructor(){super(new nm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OS extends xm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new NS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gc{constructor(t,e,i=0,s=1/0){this.ray=new Yr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ku,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Pu(t,this,i,e),i.sort(md),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Pu(t[s],this,i,e);return i.sort(md),i}}function md(n,t){return n.distance-t.distance}function Pu(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Pu(s[r],t,e,!0)}}class gd{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xd=new Q;class BS{constructor(t=new Q(1/0,1/0),e=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xd.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xd).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _d=new w,Na=new w;class $n{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){_d.subVectors(t,this.start),Na.subVectors(this.end,this.start);const i=Na.dot(Na);let r=Na.dot(_d)/i;return e&&(r=ke(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class _m extends eh{constructor(t=10,e=10,i=4473924,s=8947848){i=new oe(i),s=new oe(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,d=0,g=-a;h<=e;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const y=h===r?i:s;y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3}const u=new Ge;u.setAttribute("position",new de(c,3)),u.setAttribute("color",new de(l,3));const f=new jo({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Oa=new pe;class zS extends eh{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Ge;r.setIndex(new sn(i,1)),r.setAttribute("position",new sn(s,3)),super(r,new jo({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Oa.setFromObject(this.object),Oa.isEmpty())return;const e=Oa.min,i=Oa.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);const yd={type:"change"},Ol={type:"start"},vd={type:"end"},Ba=new Yr,Md=new Mn,kS=Math.cos(70*Wi.DEG2RAD);class HS extends js{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",it),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",it),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(yd),i.update(),r=s.NONE},this.update=function(){const U=new w,ot=new Oe().setFromUnitVectors(t.up,new w(0,1,0)),gt=ot.clone().invert(),lt=new w,Dt=new Oe,ne=new w,ce=2*Math.PI;return function(mt=null){const z=i.object.position;U.copy(z).sub(i.target),U.applyQuaternion(ot),a.setFromVector3(U),i.autoRotate&&r===s.NONE&&L(S(mt)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ft=i.minAzimuthAngle,dt=i.maxAzimuthAngle;isFinite(ft)&&isFinite(dt)&&(ft<-Math.PI?ft+=ce:ft>Math.PI&&(ft-=ce),dt<-Math.PI?dt+=ce:dt>Math.PI&&(dt-=ce),ft<=dt?a.theta=Math.max(ft,Math.min(dt,a.theta)):a.theta=a.theta>(ft+dt)/2?Math.max(ft,a.theta):Math.min(dt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*l),U.setFromSpherical(a),U.applyQuaternion(gt),z.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Ot=!1;if(i.zoomToCursor&&T){let It=null;if(i.object.isPerspectiveCamera){const he=U.length();It=V(he*l);const fe=he-It;i.object.position.addScaledVector(v,fe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const he=new w(E.x,E.y,0);he.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Ot=!0;const fe=new w(E.x,E.y,0);fe.unproject(i.object),i.object.position.sub(fe).add(he),i.object.updateMatrixWorld(),It=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;It!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(It).add(i.object.position):(Ba.origin.copy(i.object.position),Ba.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ba.direction))<kS?t.lookAt(i.target):(Md.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ba.intersectPlane(Md,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Ot=!0);return l=1,T=!1,Ot||lt.distanceToSquared(i.object.position)>o||8*(1-Dt.dot(i.object.quaternion))>o||ne.distanceToSquared(i.target)>0?(i.dispatchEvent(yd),lt.copy(i.object.position),Dt.copy(i.object.quaternion),ne.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Mt),i.domElement.removeEventListener("pointerdown",vt),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",st),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",A),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",it),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new gd,c=new gd;let l=1;const u=new w,f=new Q,h=new Q,d=new Q,g=new Q,y=new Q,m=new Q,p=new Q,_=new Q,x=new Q,v=new w,E=new Q;let T=!1;const b=[],P={};function S(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function M(U){const ot=Math.abs(U)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ot)}function L(U){c.theta-=U}function I(U){c.phi-=U}const O=function(){const U=new w;return function(gt,lt){U.setFromMatrixColumn(lt,0),U.multiplyScalar(-gt),u.add(U)}}(),D=function(){const U=new w;return function(gt,lt){i.screenSpacePanning===!0?U.setFromMatrixColumn(lt,1):(U.setFromMatrixColumn(lt,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(gt),u.add(U)}}(),F=function(){const U=new w;return function(gt,lt){const Dt=i.domElement;if(i.object.isPerspectiveCamera){const ne=i.object.position;U.copy(ne).sub(i.target);let ce=U.length();ce*=Math.tan(i.object.fov/2*Math.PI/180),O(2*gt*ce/Dt.clientHeight,i.object.matrix),D(2*lt*ce/Dt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(gt*(i.object.right-i.object.left)/i.object.zoom/Dt.clientWidth,i.object.matrix),D(lt*(i.object.top-i.object.bottom)/i.object.zoom/Dt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(U,ot){if(!i.zoomToCursor)return;T=!0;const gt=i.domElement.getBoundingClientRect(),lt=U-gt.left,Dt=ot-gt.top,ne=gt.width,ce=gt.height;E.x=lt/ne*2-1,E.y=-(Dt/ce)*2+1,v.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function tt(U){f.set(U.clientX,U.clientY)}function et(U){q(U.clientX,U.clientX),p.set(U.clientX,U.clientY)}function ut(U){g.set(U.clientX,U.clientY)}function Z(U){h.set(U.clientX,U.clientY),d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ot=i.domElement;L(2*Math.PI*d.x/ot.clientHeight),I(2*Math.PI*d.y/ot.clientHeight),f.copy(h),i.update()}function nt(U){_.set(U.clientX,U.clientY),x.subVectors(_,p),x.y>0?k(M(x.y)):x.y<0&&W(M(x.y)),p.copy(_),i.update()}function yt(U){y.set(U.clientX,U.clientY),m.subVectors(y,g).multiplyScalar(i.panSpeed),F(m.x,m.y),g.copy(y),i.update()}function Tt(U){q(U.clientX,U.clientY),U.deltaY<0?W(M(U.deltaY)):U.deltaY>0&&k(M(U.deltaY)),i.update()}function Et(U){let ot=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),ot=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),ot=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),ot=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),ot=!0;break}ot&&(U.preventDefault(),i.update())}function Bt(U){if(b.length===1)f.set(U.pageX,U.pageY);else{const ot=ee(U),gt=.5*(U.pageX+ot.x),lt=.5*(U.pageY+ot.y);f.set(gt,lt)}}function Gt(U){if(b.length===1)g.set(U.pageX,U.pageY);else{const ot=ee(U),gt=.5*(U.pageX+ot.x),lt=.5*(U.pageY+ot.y);g.set(gt,lt)}}function Ct(U){const ot=ee(U),gt=U.pageX-ot.x,lt=U.pageY-ot.y,Dt=Math.sqrt(gt*gt+lt*lt);p.set(0,Dt)}function Vt(U){i.enableZoom&&Ct(U),i.enablePan&&Gt(U)}function N(U){i.enableZoom&&Ct(U),i.enableRotate&&Bt(U)}function ht(U){if(b.length==1)h.set(U.pageX,U.pageY);else{const gt=ee(U),lt=.5*(U.pageX+gt.x),Dt=.5*(U.pageY+gt.y);h.set(lt,Dt)}d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ot=i.domElement;L(2*Math.PI*d.x/ot.clientHeight),I(2*Math.PI*d.y/ot.clientHeight),f.copy(h)}function K(U){if(b.length===1)y.set(U.pageX,U.pageY);else{const ot=ee(U),gt=.5*(U.pageX+ot.x),lt=.5*(U.pageY+ot.y);y.set(gt,lt)}m.subVectors(y,g).multiplyScalar(i.panSpeed),F(m.x,m.y),g.copy(y)}function ct(U){const ot=ee(U),gt=U.pageX-ot.x,lt=U.pageY-ot.y,Dt=Math.sqrt(gt*gt+lt*lt);_.set(0,Dt),x.set(0,Math.pow(_.y/p.y,i.zoomSpeed)),k(x.y),p.copy(_);const ne=(U.pageX+ot.x)*.5,ce=(U.pageY+ot.y)*.5;q(ne,ce)}function J(U){i.enableZoom&&ct(U),i.enablePan&&K(U)}function Lt(U){i.enableZoom&&ct(U),i.enableRotate&&ht(U)}function vt(U){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",A)),Nt(U),U.pointerType==="touch"?At(U):G(U))}function C(U){i.enabled!==!1&&(U.pointerType==="touch"?_t(U):at(U))}function A(U){Yt(U),b.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",A)),i.dispatchEvent(vd),r=s.NONE}function G(U){let ot;switch(U.button){case 0:ot=i.mouseButtons.LEFT;break;case 1:ot=i.mouseButtons.MIDDLE;break;case 2:ot=i.mouseButtons.RIGHT;break;default:ot=-1}switch(ot){case es.DOLLY:if(i.enableZoom===!1)return;et(U),r=s.DOLLY;break;case es.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;ut(U),r=s.PAN}else{if(i.enableRotate===!1)return;tt(U),r=s.ROTATE}break;case es.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;tt(U),r=s.ROTATE}else{if(i.enablePan===!1)return;ut(U),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ol)}function at(U){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;Z(U);break;case s.DOLLY:if(i.enableZoom===!1)return;nt(U);break;case s.PAN:if(i.enablePan===!1)return;yt(U);break}}function st(U){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(U.preventDefault(),i.dispatchEvent(Ol),Tt(U),i.dispatchEvent(vd))}function it(U){i.enabled===!1||i.enablePan===!1||Et(U)}function At(U){switch(rt(U),b.length){case 1:switch(i.touches.ONE){case ns.ROTATE:if(i.enableRotate===!1)return;Bt(U),r=s.TOUCH_ROTATE;break;case ns.PAN:if(i.enablePan===!1)return;Gt(U),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case ns.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Vt(U),r=s.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(U),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ol)}function _t(U){switch(rt(U),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;ht(U),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;K(U),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(U),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Lt(U),i.update();break;default:r=s.NONE}}function Mt(U){i.enabled!==!1&&U.preventDefault()}function Nt(U){b.push(U.pointerId)}function Yt(U){delete P[U.pointerId];for(let ot=0;ot<b.length;ot++)if(b[ot]==U.pointerId){b.splice(ot,1);return}}function rt(U){let ot=P[U.pointerId];ot===void 0&&(ot=new Q,P[U.pointerId]=ot),ot.set(U.pageX,U.pageY)}function ee(U){const ot=U.pointerId===b[0]?b[1]:b[0];return P[ot]}i.domElement.addEventListener("contextmenu",Mt),i.domElement.addEventListener("pointerdown",vt),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",st,{passive:!1}),this.update()}}const bs=new Gc,nn=new w,Ji=new w,we=new Oe,Sd={X:new w(1,0,0),Y:new w(0,1,0),Z:new w(0,0,1)},Bl={type:"change"},bd={type:"mouseDown"},Ed={type:"mouseUp",mode:null},wd={type:"objectChange"};class GS extends Fe{constructor(t,e){super(),e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const i=new jS;this._gizmo=i,this.add(i);const s=new ZS;this._plane=s,this.add(s);const r=this;function o(_,x){let v=x;Object.defineProperty(r,_,{get:function(){return v!==void 0?v:x},set:function(E){v!==E&&(v=E,s[_]=E,i[_]=E,r.dispatchEvent({type:_+"-changed",value:E}),r.dispatchEvent(Bl))}}),r[_]=x,s[_]=x,i[_]=x}o("camera",t),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new w,c=new w,l=new Oe,u=new Oe,f=new w,h=new Oe,d=new w,g=new w,y=new w,m=0,p=new w;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",u),o("cameraPosition",f),o("cameraQuaternion",h),o("pointStart",d),o("pointEnd",g),o("rotationAxis",y),o("rotationAngle",m),o("eye",p),this._offset=new w,this._startNorm=new w,this._endNorm=new w,this._cameraScale=new w,this._parentPosition=new w,this._parentQuaternion=new Oe,this._parentQuaternionInv=new Oe,this._parentScale=new w,this._worldScaleStart=new w,this._worldQuaternionInv=new Oe,this._worldScale=new w,this._positionStart=new w,this._quaternionStart=new Oe,this._scaleStart=new w,this._getPointer=VS.bind(this),this._onPointerDown=XS.bind(this),this._onPointerHover=WS.bind(this),this._onPointerMove=YS.bind(this),this._onPointerUp=qS.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;bs.setFromCamera(t,this.camera);const e=zl(this._gizmo.picker[this.mode],bs);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t.button!==0)&&this.axis!==null){bs.setFromCamera(t,this.camera);const e=zl(this._plane,bs,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,bd.mode=this.mode,this.dispatchEvent(bd)}}pointerMove(t){const e=this.axis,i=this.mode,s=this.object;let r=this.space;if(i==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t.button!==-1)return;bs.setFromCamera(t,this.camera);const o=zl(this._plane,bs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(we.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(nn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(nn.setFromMatrixPosition(s.parent.matrixWorld))));else if(i==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ji.set(a,a,a)}else nn.copy(this.pointStart),Ji.copy(this.pointEnd),nn.applyQuaternion(this._worldQuaternionInv),Ji.applyQuaternion(this._worldQuaternionInv),Ji.divide(nn),e.search("X")===-1&&(Ji.x=1),e.search("Y")===-1&&(Ji.y=1),e.search("Z")===-1&&(Ji.z=1);s.scale.copy(this._scaleStart).multiply(Ji),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(nn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(nn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Sd[e]),nn.copy(Sd[e]),r==="local"&&nn.applyQuaternion(this.worldQuaternion),nn.cross(this.eye),nn.length()===0?c=!0:this.rotationAngle=this._offset.dot(nn.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(we.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(we.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Bl),this.dispatchEvent(wd)}}pointerUp(t){t.button===0&&(this.dragging&&this.axis!==null&&(Ed.mode=this.mode,this.dispatchEvent(Ed)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Bl),this.dispatchEvent(wd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return bs}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function VS(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const t=this.domElement.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width*2-1,y:-(n.clientY-t.top)/t.height*2+1,button:n.button}}}function WS(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function XS(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function YS(n){this.enabled&&this.pointerMove(this._getPointer(n))}function qS(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function zl(n,t,e){const i=t.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||e)return i[s];return!1}const za=new Xi,xe=new w(0,1,0),Td=new w(0,0,0),Ad=new ae,ka=new Oe,uc=new Oe,di=new w,Cd=new ae,go=new w(1,0,0),Ps=new w(0,1,0),xo=new w(0,0,1),Ha=new w,no=new w,io=new w;class jS extends Fe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new $s({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new jo({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const f=t.clone();f.opacity=.25;const h=t.clone();h.color.setHex(16776960),h.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const y=new De(0,.04,.1,12);y.translate(0,.05,0);const m=new _e(.08,.08,.08);m.translate(0,.04,0);const p=new Ge;p.setAttribute("position",new de([0,0,0,1,0,0],3));const _=new De(.0075,.0075,.5,3);_.translate(0,.25,0);function x(F,k){const W=new ss(F,.0075,3,64,k*Math.PI*2);return W.rotateY(Math.PI/2),W.rotateX(Math.PI/2),W}function v(){const F=new Ge;return F.setAttribute("position",new de([0,0,0,1,1,1],3)),F}const E={X:[[new pt(y,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(y,r),[-.5,0,0],[0,0,Math.PI/2]],[new pt(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pt(y,o),[0,.5,0]],[new pt(y,o),[0,-.5,0],[Math.PI,0,0]],[new pt(_,o)]],Z:[[new pt(y,a),[0,0,.5],[Math.PI/2,0,0]],[new pt(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pt(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new pt(new Pr(.1,0),f.clone()),[0,0,0]]],XY:[[new pt(new _e(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new pt(new _e(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new _e(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new pt(new De(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new De(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new De(.2,0,.6,4),i),[0,.3,0]],[new pt(new De(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new De(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pt(new De(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pt(new Pr(.2,0),i)]],XY:[[new pt(new _e(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pt(new _e(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new _e(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},b={START:[[new pt(new Pr(.01,2),s),null,null,null,"helper"]],END:[[new pt(new Pr(.01,2),s),null,null,null,"helper"]],DELTA:[[new Fi(v(),s),null,null,null,"helper"]],X:[[new Fi(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Fi(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Fi(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new pt(x(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new pt(x(.5,.5),r)]],Y:[[new pt(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pt(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pt(x(.75,1),h),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Fi(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new pt(new Zr(.25,10,8),i)]],X:[[new pt(new ss(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pt(new ss(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pt(new ss(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pt(new ss(.75,.1,2,24),i)]]},L={X:[[new pt(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(_,r),[0,0,0],[0,0,-Math.PI/2]],[new pt(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pt(m,o),[0,.5,0]],[new pt(_,o)],[new pt(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pt(m,a),[0,0,.5],[Math.PI/2,0,0]],[new pt(_,a),[0,0,0],[Math.PI/2,0,0]],[new pt(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pt(new _e(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pt(new _e(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new _e(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new _e(.1,.1,.1),f.clone())]]},I={X:[[new pt(new De(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new De(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new De(.2,0,.6,4),i),[0,.3,0]],[new pt(new De(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new De(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pt(new De(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pt(new _e(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pt(new _e(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new _e(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new _e(.2,.2,.2),i),[0,0,0]]]},O={X:[[new Fi(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Fi(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Fi(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function D(F){const k=new Fe;for(const W in F)for(let q=F[W].length;q--;){const V=F[W][q][0].clone(),tt=F[W][q][1],et=F[W][q][2],ut=F[W][q][3],Z=F[W][q][4];V.name=W,V.tag=Z,tt&&V.position.set(tt[0],tt[1],tt[2]),et&&V.rotation.set(et[0],et[1],et[2]),ut&&V.scale.set(ut[0],ut[1],ut[2]),V.updateMatrix();const nt=V.geometry.clone();nt.applyMatrix4(V.matrix),V.geometry=nt,V.renderOrder=1/0,V.position.set(0,0,0),V.rotation.set(0,0,0),V.scale.set(1,1,1),k.add(V)}return k}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=D(E)),this.add(this.gizmo.rotate=D(P)),this.add(this.gizmo.scale=D(L)),this.add(this.picker.translate=D(T)),this.add(this.picker.rotate=D(M)),this.add(this.picker.scale=D(I)),this.add(this.helper.translate=D(b)),this.add(this.helper.rotate=D(S)),this.add(this.helper.scale=D(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:uc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(we.setFromEuler(za.set(0,0,0)),o.quaternion.copy(i).multiply(we),Math.abs(xe.copy(go).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(we.setFromEuler(za.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(we),Math.abs(xe.copy(Ps).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(we.setFromEuler(za.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(we),Math.abs(xe.copy(xo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(we.setFromEuler(za.set(0,Math.PI/2,0)),xe.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Ad.lookAt(Td,xe,Ps)),o.quaternion.multiply(we),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),nn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),nn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(nn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(xe.copy(go).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(xe.copy(Ps).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(xe.copy(xo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(xe.copy(xo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(xe.copy(go).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(xe.copy(Ps).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ka.copy(i),xe.copy(this.eye).applyQuaternion(we.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Ad.lookAt(this.eye,Td,Ps)),o.name==="X"&&(we.setFromAxisAngle(go,Math.atan2(-xe.y,xe.z)),we.multiplyQuaternions(ka,we),o.quaternion.copy(we)),o.name==="Y"&&(we.setFromAxisAngle(Ps,Math.atan2(xe.x,xe.z)),we.multiplyQuaternions(ka,we),o.quaternion.copy(we)),o.name==="Z"&&(we.setFromAxisAngle(xo,Math.atan2(xe.y,xe.x)),we.multiplyQuaternions(ka,we),o.quaternion.copy(we))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class ZS extends pt{constructor(){super(new qo(1e5,1e5,2,2),new $s({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ha.copy(go).applyQuaternion(e==="local"?this.worldQuaternion:uc),no.copy(Ps).applyQuaternion(e==="local"?this.worldQuaternion:uc),io.copy(xo).applyQuaternion(e==="local"?this.worldQuaternion:uc),xe.copy(no),this.mode){case"translate":case"scale":switch(this.axis){case"X":xe.copy(this.eye).cross(Ha),di.copy(Ha).cross(xe);break;case"Y":xe.copy(this.eye).cross(no),di.copy(no).cross(xe);break;case"Z":xe.copy(this.eye).cross(io),di.copy(io).cross(xe);break;case"XY":di.copy(io);break;case"YZ":di.copy(Ha);break;case"XZ":xe.copy(io),di.copy(no);break;case"XYZ":case"E":di.set(0,0,0);break}break;case"rotate":default:di.set(0,0,0)}di.length()===0?this.quaternion.copy(this.cameraQuaternion):(Cd.lookAt(nn.set(0,0,0),di,xe),this.quaternion.setFromRotationMatrix(Cd)),super.updateMatrixWorld(t)}}class $S{parse(t,e={}){e=Object.assign({binary:!1},e);const i=e.binary,s=[];let r=0;t.traverse(function(p){if(p.isMesh){const _=p.geometry,x=_.index,v=_.getAttribute("position");r+=x!==null?x.count/3:v.count/3,s.push({object3d:p,geometry:_})}});let o,a=80;if(i===!0){const p=r*2+r*3*4*4+80+4,_=new ArrayBuffer(p);o=new DataView(_),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;const c=new w,l=new w,u=new w,f=new w,h=new w,d=new w;for(let p=0,_=s.length;p<_;p++){const x=s[p].object3d,v=s[p].geometry,E=v.index,T=v.getAttribute("position");if(E!==null)for(let b=0;b<E.count;b+=3){const P=E.getX(b+0),S=E.getX(b+1),M=E.getX(b+2);g(P,S,M,T,x)}else for(let b=0;b<T.count;b+=3){const P=b+0,S=b+1,M=b+2;g(P,S,M,T,x)}}return i===!1&&(o+=`endsolid exported
`),o;function g(p,_,x,v,E){c.fromBufferAttribute(v,p),l.fromBufferAttribute(v,_),u.fromBufferAttribute(v,x),E.isSkinnedMesh===!0&&(E.applyBoneTransform(p,c),E.applyBoneTransform(_,l),E.applyBoneTransform(x,u)),c.applyMatrix4(E.matrixWorld),l.applyMatrix4(E.matrixWorld),u.applyMatrix4(E.matrixWorld),y(c,l,u),m(c),m(l),m(u),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function y(p,_,x){f.subVectors(x,_),h.subVectors(p,_),f.cross(h).normalize(),d.copy(f).normalize(),i===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function m(p){i===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):o+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}const so=new w;function kn(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;so.copy(t),so[i]=0,so.normalize();const l=.5*o/(o+a),u=1-so.angleTo(n)/c;return Math.sign(so[e])===1?u*l:a/(o+a)+l+l*(1-u)}class KS extends _e{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new w,c=new w,l=new w(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,d=u.length/6,g=new w,y=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),u[m+0]=l.x*Math.sign(a.x)+c.x*r,u[m+1]=l.y*Math.sign(a.y)+c.y*r,u[m+2]=l.z*Math.sign(a.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),h[p+0]=kn(g,c,"z","y",r,i),h[p+1]=1-kn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),h[p+0]=1-kn(g,c,"z","y",r,i),h[p+1]=1-kn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),h[p+0]=1-kn(g,c,"x","z",r,t),h[p+1]=kn(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),h[p+0]=1-kn(g,c,"x","z",r,t),h[p+1]=1-kn(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),h[p+0]=1-kn(g,c,"x","y",r,t),h[p+1]=1-kn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),h[p+0]=kn(g,c,"x","y",r,t),h[p+1]=1-kn(g,c,"y","x",r,e);break}}}const ym=0,JS=1,QS=2,Pd=2,kl=1.25,Rd=1,wo=6*4+4+4,Vc=65535,tb=Math.pow(2,-24),Hl=Symbol("SKIP_GENERATION");function eb(n){return n.index?n.index.count:n.attributes.position.count}function $r(n){return eb(n)/3}function nb(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function ib(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=nb(e,i);n.setIndex(new sn(s,1));for(let r=0;r<e;r++)s[r]=r}}function vm(n){const t=$r(n),e=n.drawRange,i=e.start/3,s=(e.start+e.count)/3,r=Math.max(0,i),o=Math.min(t,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Mm(n){if(!n.groups||!n.groups.length)return vm(n);const t=[],e=new Set,i=n.drawRange,s=i.start/3,r=(i.start+i.count)/3;for(const a of n.groups){const c=a.start/3,l=(a.start+a.count)/3;e.add(Math.max(s,c)),e.add(Math.min(r,l))}const o=Array.from(e.values()).sort((a,c)=>a-c);for(let a=0;a<o.length-1;a++){const c=o[a],l=o[a+1];t.push({offset:Math.floor(c),count:Math.floor(l-c)})}return t}function sb(n){if(n.groups.length===0)return!1;const t=$r(n),e=Mm(n).sort((r,o)=>r.offset-o.offset),i=e[e.length-1];i.count=Math.min(t-i.offset,i.count);let s=0;return e.forEach(({count:r})=>s+=r),t!==s}function Gl(n,t,e,i,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,d=1/0,g=-1/0,y=-1/0,m=-1/0;for(let p=t*6,_=(t+e)*6;p<_;p+=6){const x=n[p+0],v=n[p+1],E=x-v,T=x+v;E<r&&(r=E),T>c&&(c=T),x<f&&(f=x),x>g&&(g=x);const b=n[p+2],P=n[p+3],S=b-P,M=b+P;S<o&&(o=S),M>l&&(l=M),b<h&&(h=b),b>y&&(y=b);const L=n[p+4],I=n[p+5],O=L-I,D=L+I;O<a&&(a=O),D>u&&(u=D),L<d&&(d=L),L>m&&(m=L)}i[0]=r,i[1]=o,i[2]=a,i[3]=c,i[4]=l,i[5]=u,s[0]=f,s[1]=h,s[2]=d,s[3]=g,s[4]=y,s[5]=m}function rb(n,t=null,e=null,i=null){const s=n.attributes.position,r=n.index?n.index.array:null,o=$r(n),a=s.normalized;let c;t===null?(c=new Float32Array(o*6*4),e=0,i=o):(c=t,e=e||0,i=i||o);const l=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let d=e;d<e+i;d++){const g=d*3,y=d*6;let m=g+0,p=g+1,_=g+2;r&&(m=r[m],p=r[p],_=r[_]),a||(m=m*f+u,p=p*f+u,_=_*f+u);for(let x=0;x<3;x++){let v,E,T;a?(v=s[h[x]](m),E=s[h[x]](p),T=s[h[x]](_)):(v=l[m+x],E=l[p+x],T=l[_+x]);let b=v;E<b&&(b=E),T<b&&(b=T);let P=v;E>P&&(P=E),T>P&&(P=T);const S=(P-b)/2,M=x*2;c[y+M+0]=b+S,c[y+M+1]=S+(Math.abs(b)+S)*tb}}return c}function Ce(n,t,e){return e.min.x=t[n],e.min.y=t[n+1],e.min.z=t[n+2],e.max.x=t[n+3],e.max.y=t[n+4],e.max.z=t[n+5],e}function Ld(n){let t=-1,e=-1/0;for(let i=0;i<3;i++){const s=n[i+3]-n[i];s>e&&(e=s,t=i)}return t}function Dd(n,t){t.set(n)}function Id(n,t,e){let i,s;for(let r=0;r<3;r++){const o=r+3;i=n[r],s=t[r],e[r]=i<s?i:s,i=n[o],s=t[o],e[o]=i>s?i:s}}function Ga(n,t,e){for(let i=0;i<3;i++){const s=t[n+2*i],r=t[n+2*i+1],o=s-r,a=s+r;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function ro(n){const t=n[3]-n[0],e=n[4]-n[1],i=n[5]-n[2];return 2*(t*e+e*i+i*t)}const Ui=32,ob=(n,t)=>n.candidate-t.candidate,Qi=new Array(Ui).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Va=new Float32Array(6);function ab(n,t,e,i,s,r){let o=-1,a=0;if(r===ym)o=Ld(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===JS)o=Ld(n),o!==-1&&(a=cb(e,i,s,o));else if(r===QS){const c=ro(n);let l=kl*s;const u=i*6,f=(i+s)*6;for(let h=0;h<3;h++){const d=t[h],m=(t[h+3]-d)/Ui;if(s<Ui/4){const p=[...Qi];p.length=s;let _=0;for(let v=u;v<f;v+=6,_++){const E=p[_];E.candidate=e[v+2*h],E.count=0;const{bounds:T,leftCacheBounds:b,rightCacheBounds:P}=E;for(let S=0;S<3;S++)P[S]=1/0,P[S+3]=-1/0,b[S]=1/0,b[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0;Ga(v,e,T)}p.sort(ob);let x=s;for(let v=0;v<x;v++){const E=p[v];for(;v+1<x&&p[v+1].candidate===E.candidate;)p.splice(v+1,1),x--}for(let v=u;v<f;v+=6){const E=e[v+2*h];for(let T=0;T<x;T++){const b=p[T];E>=b.candidate?Ga(v,e,b.rightCacheBounds):(Ga(v,e,b.leftCacheBounds),b.count++)}}for(let v=0;v<x;v++){const E=p[v],T=E.count,b=s-E.count,P=E.leftCacheBounds,S=E.rightCacheBounds;let M=0;T!==0&&(M=ro(P)/c);let L=0;b!==0&&(L=ro(S)/c);const I=Rd+kl*(M*T+L*b);I<l&&(o=h,l=I,a=E.candidate)}}else{for(let x=0;x<Ui;x++){const v=Qi[x];v.count=0,v.candidate=d+m+x*m;const E=v.bounds;for(let T=0;T<3;T++)E[T]=1/0,E[T+3]=-1/0}for(let x=u;x<f;x+=6){let T=~~((e[x+2*h]-d)/m);T>=Ui&&(T=Ui-1);const b=Qi[T];b.count++,Ga(x,e,b.bounds)}const p=Qi[Ui-1];Dd(p.bounds,p.rightCacheBounds);for(let x=Ui-2;x>=0;x--){const v=Qi[x],E=Qi[x+1];Id(v.bounds,E.rightCacheBounds,v.rightCacheBounds)}let _=0;for(let x=0;x<Ui-1;x++){const v=Qi[x],E=v.count,T=v.bounds,P=Qi[x+1].rightCacheBounds;E!==0&&(_===0?Dd(T,Va):Id(T,Va,Va)),_+=E;let S=0,M=0;_!==0&&(S=ro(Va)/c);const L=s-_;L!==0&&(M=ro(P)/c);const I=Rd+kl*(S*_+M*L);I<l&&(o=h,l=I,a=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function cb(n,t,e,i){let s=0;for(let r=t,o=t+e;r<o;r++)s+=n[r*6+i*2];return s/e}class Vl{constructor(){this.boundingData=new Float32Array(6)}}function lb(n,t,e,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let f=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=f}for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function ub(n,t,e,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=n[o];n[o]=n[a],n[a]=u;for(let f=0;f<6;f++){let h=e[o*6+f];e[o*6+f]=e[a*6+f],e[a*6+f]=h}o++,a--}else return o}}function En(n,t){return t[n+15]===65535}function Un(n,t){return t[n+6]}function Yn(n,t){return t[n+14]}function qn(n){return n+8}function jn(n,t){return t[n+6]}function Sm(n,t){return t[n+7]}let bm,_o,hc,Em;const hb=Math.pow(2,32);function Ru(n){return"count"in n?1:1+Ru(n.left)+Ru(n.right)}function fb(n,t,e){return bm=new Float32Array(e),_o=new Uint32Array(e),hc=new Uint16Array(e),Em=new Uint8Array(e),Lu(n,t)}function Lu(n,t){const e=n/4,i=n/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)bm[e+o]=r[o];if(s)if(t.buffer){const o=t.buffer;Em.set(new Uint8Array(o),n);for(let a=n,c=n+o.byteLength;a<c;a+=wo){const l=a/2;En(l,hc)||(_o[a/4+6]+=e)}return n+o.byteLength}else{const o=t.offset,a=t.count;return _o[e+6]=o,hc[i+14]=a,hc[i+15]=Vc,n+wo}else{const o=t.left,a=t.right,c=t.splitAxis;let l;if(l=Lu(n+wo,o),l/4>hb)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return _o[e+6]=l/4,l=Lu(l,a),_o[e+7]=c,l}}function db(n,t){const e=(n.index?n.index.count:n.attributes.position.count)/3,i=e>2**16,s=i?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function pb(n,t,e,i,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=s,f=n._indirectBuffer,h=n.geometry,d=h.index?h.index.array:null,g=u?ub:lb,y=$r(h),m=new Float32Array(6);let p=!1;const _=new Vl;return Gl(t,e,i,_.boundingData,m),v(_,e,i,m),_;function x(E){l&&l(E/y)}function v(E,T,b,P=null,S=0){if(!p&&S>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),b<=a||S>=r)return x(T+b),E.offset=T,E.count=b,E;const M=ab(E.boundingData,P,t,T,b,c);if(M.axis===-1)return x(T+b),E.offset=T,E.count=b,E;const L=g(f,d,t,T,b,M);if(L===T||L===T+b)x(T+b),E.offset=T,E.count=b;else{E.splitAxis=M.axis;const I=new Vl,O=T,D=L-T;E.left=I,Gl(t,O,D,I.boundingData,m),v(I,O,D,m,S+1);const F=new Vl,k=L,W=b-D;E.right=F,Gl(t,k,W,F.boundingData,m),v(F,k,W,m,S+1)}return E}}function mb(n,t){const e=n.geometry;t.indirect&&(n._indirectBuffer=db(e,t.useSharedArrayBuffer),sb(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||ib(e,t);const i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=rb(e),r=t.indirect?vm(e):Mm(e);n._roots=r.map(o=>{const a=pb(n,s,o.offset,o.count,t),c=Ru(a),l=new i(wo*c);return fb(0,a,l),l})}class Hi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}setFromPoints(t,e){let i=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}Hi.prototype.setFromBox=function(){const n=new w;return function(e,i){const s=i.min,r=i.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){n.x=s.x*c+r.x*(1-c),n.y=s.y*l+r.y*(1-l),n.z=s.z*u+r.z*(1-u);const f=e.dot(n);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const gb=function(){const n=new w,t=new w,e=new w;return function(s,r,o){const a=s.start,c=n,l=r.start,u=t;e.subVectors(a,l),n.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-h*h;let p,_;m!==0?p=(f*h-g*d)/m:p=0,_=(f+p*h)/d,o.x=p,o.y=_}}(),oh=function(){const n=new Q,t=new w,e=new w;return function(s,r,o,a){gb(s,r,n);let c=n.x,l=n.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;const h=t,d=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(d);return}}}}(),xb=function(){const n=new w,t=new w,e=new Mn,i=new $n;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:f}=o;if(i.start=l,i.end=u,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a||(i.start=l,i.end=f,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a)||(i.start=u,i.end=f,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a))return!0;const y=o.getPlane(e);if(Math.abs(y.distanceToPoint(c))<=a){const p=y.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}}(),_b=1e-15;function Wl(n){return Math.abs(n)<_b}class Jn extends Se{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new w),this.satBounds=new Array(4).fill().map(()=>new Hi),this.points=[this.a,this.b,this.c],this.sphere=new Yo,this.plane=new Mn,this.needsUpdate=!0}intersectsSphere(t){return xb(t,this)}update(){const t=this.a,e=this.b,i=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);const f=r[2],h=o[2];f.subVectors(e,i),h.setFromPoints(f,s);const d=r[3],g=o[3];d.subVectors(i,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Jn.prototype.closestPointToSegment=function(){const n=new w,t=new w,e=new $n;return function(s,r=null,o=null){const{start:a,end:c}=s,l=this.points;let u,f=1/0;for(let h=0;h<3;h++){const d=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[d]),oh(e,s,n,t),u=n.distanceToSquared(t),u<f&&(f=u,r&&r.copy(n),o&&o.copy(t))}return this.closestPointToPoint(a,n),u=a.distanceToSquared(n),u<f&&(f=u,r&&r.copy(n),o&&o.copy(a)),this.closestPointToPoint(c,n),u=c.distanceToSquared(n),u<f&&(f=u,r&&r.copy(n),o&&o.copy(c)),Math.sqrt(f)}}();Jn.prototype.intersectsTriangle=function(){const n=new Jn,t=new Array(3),e=new Array(3),i=new Hi,s=new Hi,r=new w,o=new w,a=new w,c=new w,l=new w,u=new $n,f=new $n,h=new $n,d=new w;function g(y,m,p){const _=y.points;let x=0,v=-1;for(let E=0;E<3;E++){const{start:T,end:b}=u;T.copy(_[E]),b.copy(_[(E+1)%3]),u.delta(o);const P=Wl(m.distanceToPoint(T));if(Wl(m.normal.dot(o))&&P){p.copy(u),x=2;break}const S=m.intersectLine(u,d);if(!S&&P&&d.copy(T),(S||P)&&!Wl(d.distanceTo(b))){if(x<=1)(x===1?p.start:p.end).copy(d),P&&(v=x);else if(x>=2){(v===1?p.start:p.end).copy(d),x=2;break}if(x++,x===2&&v===-1)break}}return x}return function(m,p=null,_=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(n.copy(m),n.update(),m=n);const x=this.plane,v=m.plane;if(Math.abs(x.normal.dot(v.normal))>1-1e-10){const E=this.satBounds,T=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let S=0;S<4;S++){const M=E[S],L=T[S];if(i.setFromPoints(L,e),M.isSeparated(i))return!1}const b=m.satBounds,P=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let S=0;S<4;S++){const M=b[S],L=P[S];if(i.setFromPoints(L,t),M.isSeparated(i))return!1}for(let S=0;S<4;S++){const M=T[S];for(let L=0;L<4;L++){const I=P[L];if(r.crossVectors(M,I),i.setFromPoints(r,t),s.setFromPoints(r,e),i.isSeparated(s))return!1}}return p&&(_||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const E=g(this,v,f);if(E===1&&m.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(E!==2)return!1;const T=g(m,x,h);if(T===1&&this.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(a),h.delta(c),a.dot(c)<0){let O=h.start;h.start=h.end,h.end=O}const b=f.start.dot(a),P=f.end.dot(a),S=h.start.dot(a),M=h.end.dot(a),L=P<S,I=b<M;return b!==M&&S!==P&&L===I?!1:(p&&(l.subVectors(f.start,h.start),l.dot(a)>0?p.start.copy(f.start):p.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(a)<0?p.end.copy(f.end):p.end.copy(h.end)),!0)}}}();Jn.prototype.distanceToPoint=function(){const n=new w;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();Jn.prototype.distanceToTriangle=function(){const n=new w,t=new w,e=["a","b","c"],i=new $n,s=new $n;return function(o,a=null,c=null){const l=a||c?i:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h;const d=e[f],g=o[d];this.closestPointToPoint(g,n),h=g.distanceToSquared(n),h<u&&(u=h,a&&a.copy(n),c&&c.copy(g));const y=this[d];o.closestPointToPoint(y,n),h=y.distanceToSquared(n),h<u&&(u=h,a&&a.copy(y),c&&c.copy(n))}for(let f=0;f<3;f++){const h=e[f],d=e[(f+1)%3];i.set(this[h],this[d]);for(let g=0;g<3;g++){const y=e[g],m=e[(g+1)%3];s.set(o[y],o[m]),oh(i,s,n,t);const p=n.distanceToSquared(t);p<u&&(u=p,a&&a.copy(n),c&&c.copy(t))}}return Math.sqrt(u)}}();class vn{constructor(t,e,i){this.isOrientedBox=!0,this.min=new w,this.max=new w,this.matrix=new ae,this.invMatrix=new ae,this.points=new Array(8).fill().map(()=>new w),this.satAxes=new Array(3).fill().map(()=>new w),this.satBounds=new Array(3).fill().map(()=>new Hi),this.alignedSatBounds=new Array(3).fill().map(()=>new Hi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}vn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,i=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*l|2*u|4*f,d=s[h];d.x=l?i.x:e.x,d.y=u?i.y:e.y,d.z=f?i.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){const u=o[l],f=r[l],h=1<<l,d=s[h];u.subVectors(a,d),f.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();vn.prototype.intersectsBox=function(){const n=new Hi;return function(e){this.needsUpdate&&this.update();const i=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=s.x,a[0].isSeparated(n)||(n.min=i.y,n.max=s.y,a[1].isSeparated(n))||(n.min=i.z,n.max=s.z,a[2].isSeparated(n)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(n.setFromBox(l,e),u.isSeparated(n))return!1}return!0}}();vn.prototype.intersectsTriangle=function(){const n=new Jn,t=new Array(3),e=new Hi,i=new Hi,s=new w;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const d=a[h],g=c[h];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){const d=l[h],g=u[h];if(e.setFromPoints(g,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){const d=c[h];for(let g=0;g<4;g++){const y=u[g];if(s.crossVectors(d,y),e.setFromPoints(s,t),i.setFromPoints(s,f),e.isSeparated(i))return!1}}return!0}}();vn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();vn.prototype.distanceToPoint=function(){const n=new w;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();vn.prototype.distanceToBox=function(){const n=["x","y","z"],t=new Array(12).fill().map(()=>new $n),e=new Array(12).fill().map(()=>new $n),i=new w,s=new w;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,i),o.closestPointToPoint(i,s),c&&c.copy(i),l&&l.copy(s)),0;const u=a*a,f=o.min,h=o.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(f,h);const _=p.distanceToSquared(s);if(_<g&&(g=_,c&&c.copy(p),l&&l.copy(s),_<u))return Math.sqrt(_)}let y=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){const x=(m+1)%3,v=(m+2)%3,E=p<<x|_<<v,T=1<<m|p<<x|_<<v,b=d[E],P=d[T];t[y].set(b,P);const M=n[m],L=n[x],I=n[v],O=e[y],D=O.start,F=O.end;D[M]=f[M],D[L]=p?f[L]:h[L],D[I]=_?f[I]:h[L],F[M]=h[M],F[L]=p?f[L]:h[L],F[I]=_?f[I]:h[L],y++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){s.x=m?h.x:f.x,s.y=p?h.y:f.y,s.z=_?h.z:f.z,this.closestPointToPoint(s,i);const x=s.distanceToSquared(i);if(x<g&&(g=x,c&&c.copy(i),l&&l.copy(s),x<u))return Math.sqrt(x)}for(let m=0;m<12;m++){const p=t[m];for(let _=0;_<12;_++){const x=e[_];oh(p,x,i,s);const v=i.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(i),l&&l.copy(s),v<u))return Math.sqrt(v)}}return Math.sqrt(g)}}();class ah{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class yb extends ah{constructor(){super(()=>new Jn)}}const Zn=new yb;class vb{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Ee=new vb;let ls,Rr;const mr=[],Wa=new ah(()=>new pe);function Mb(n,t,e,i,s,r){ls=Wa.getPrimitive(),Rr=Wa.getPrimitive(),mr.push(ls,Rr),Ee.setBuffer(n._roots[t]);const o=Du(0,n.geometry,e,i,s,r);Ee.clearBuffer(),Wa.releasePrimitive(ls),Wa.releasePrimitive(Rr),mr.pop(),mr.pop();const a=mr.length;return a>0&&(Rr=mr[a-1],ls=mr[a-2]),o}function Du(n,t,e,i,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=Ee;let u=n*2;if(En(u,c)){const h=Un(n,l),d=Yn(u,c);return Ce(n,a,ls),i(h,d,!1,o,r+n,ls)}else{let M=function(I){const{uint16Array:O,uint32Array:D}=Ee;let F=I*2;for(;!En(F,O);)I=qn(I),F=I*2;return Un(I,D)},L=function(I){const{uint16Array:O,uint32Array:D}=Ee;let F=I*2;for(;!En(F,O);)I=jn(I,D),F=I*2;return Un(I,D)+Yn(F,O)};const h=qn(n),d=jn(n,l);let g=h,y=d,m,p,_,x;if(s&&(_=ls,x=Rr,Ce(g,a,_),Ce(y,a,x),m=s(_),p=s(x),p<m)){g=d,y=h;const I=m;m=p,p=I,_=x}_||(_=ls,Ce(g,a,_));const v=En(g*2,c),E=e(_,v,m,o+1,r+g);let T;if(E===Pd){const I=M(g),D=L(g)-I;T=i(I,D,!0,o+1,r+g,_)}else T=E&&Du(g,t,e,i,s,r,o+1);if(T)return!0;x=Rr,Ce(y,a,x);const b=En(y*2,c),P=e(x,b,p,o+1,r+y);let S;if(P===Pd){const I=M(y),D=L(y)-I;S=i(I,D,!0,o+1,r+y,x)}else S=P&&Du(y,t,e,i,s,r,o+1);return!!S}}const oo=new w,Xl=new w;function Sb(n,t,e={},i=0,s=1/0){const r=i*i,o=s*s;let a=1/0,c=null;if(n.shapecast({boundsTraverseOrder:u=>(oo.copy(t).clamp(u.min,u.max),oo.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,oo);const h=t.distanceToSquared(oo);return h<a&&(Xl.copy(oo),a=h,c=f),h<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(Xl):e.point=Xl.clone(),e.distance=l,e.faceIndex=c,e}const gr=new w,xr=new w,_r=new w,Xa=new Q,Ya=new Q,qa=new Q,Fd=new w,Ud=new w,Nd=new w,ja=new w;function bb(n,t,e,i,s,r){let o;return r===xn?o=n.intersectTriangle(i,e,t,!0,s):o=n.intersectTriangle(t,e,i,r!==pn,s),o===null?null:{distance:n.origin.distanceTo(s),point:s.clone()}}function Eb(n,t,e,i,s,r,o,a,c){gr.fromBufferAttribute(t,r),xr.fromBufferAttribute(t,o),_r.fromBufferAttribute(t,a);const l=bb(n,gr,xr,_r,ja,c);if(l){i&&(Xa.fromBufferAttribute(i,r),Ya.fromBufferAttribute(i,o),qa.fromBufferAttribute(i,a),l.uv=Se.getInterpolation(ja,gr,xr,_r,Xa,Ya,qa,new Q)),s&&(Xa.fromBufferAttribute(s,r),Ya.fromBufferAttribute(s,o),qa.fromBufferAttribute(s,a),l.uv1=Se.getInterpolation(ja,gr,xr,_r,Xa,Ya,qa,new Q)),e&&(Fd.fromBufferAttribute(e,r),Ud.fromBufferAttribute(e,o),Nd.fromBufferAttribute(e,a),l.normal=Se.getInterpolation(ja,gr,xr,_r,Fd,Ud,Nd,new w),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:r,b:o,c:a,normal:new w,materialIndex:0};Se.getNormal(gr,xr,_r,u.normal),l.face=u,l.faceIndex=r}return l}function Wc(n,t,e,i,s){const r=i*3;let o=r+0,a=r+1,c=r+2;const l=n.index;n.index&&(o=l.getX(o),a=l.getX(a),c=l.getX(c));const{position:u,normal:f,uv:h,uv1:d}=n.attributes,g=Eb(e,u,f,h,d,o,a,c,t);return g?(g.faceIndex=i,s&&s.push(g),g):null}function He(n,t,e,i){const s=n.a,r=n.b,o=n.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=i.getX(a),s.y=i.getY(a),s.z=i.getZ(a),r.x=i.getX(c),r.y=i.getY(c),r.z=i.getZ(c),o.x=i.getX(l),o.y=i.getY(l),o.z=i.getZ(l)}function wb(n,t,e,i,s,r){const{geometry:o,_indirectBuffer:a}=n;for(let c=i,l=i+s;c<l;c++)Wc(o,t,e,c,r)}function Tb(n,t,e,i,s){const{geometry:r,_indirectBuffer:o}=n;let a=1/0,c=null;for(let l=i,u=i+s;l<u;l++){let f;f=Wc(r,t,e,l),f&&f.distance<a&&(c=f,a=f.distance)}return c}function Ab(n,t,e,i,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=n,f=t+n;u<f;u++){let h;if(h=u,He(o,h*3,c,l),o.needsUpdate=!0,i(o,h,s,r))return!0}return!1}function Cb(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,g=!1){const y=h*2;if(a[y+15]===Vc){const p=o[h+6],_=a[y+14];let x=1/0,v=1/0,E=1/0,T=-1/0,b=-1/0,P=-1/0;for(let S=3*p,M=3*(p+_);S<M;S++){let L=i[S];const I=s.getX(L),O=s.getY(L),D=s.getZ(L);I<x&&(x=I),I>T&&(T=I),O<v&&(v=O),O>b&&(b=O),D<E&&(E=D),D>P&&(P=D)}return c[h+0]!==x||c[h+1]!==v||c[h+2]!==E||c[h+3]!==T||c[h+4]!==b||c[h+5]!==P?(c[h+0]=x,c[h+1]=v,c[h+2]=E,c[h+3]=T,c[h+4]=b,c[h+5]=P,!0):!1}else{const p=h+8,_=o[h+6],x=p+d,v=_+d;let E=g,T=!1,b=!1;t?E||(T=t.has(x),b=t.has(v),E=!T&&!b):(T=!0,b=!0);const P=E||T,S=E||b;let M=!1;P&&(M=f(p,d,E));let L=!1;S&&(L=f(_,d,E));const I=M||L;if(I)for(let O=0;O<3;O++){const D=p+O,F=_+O,k=c[D],W=c[D+3],q=c[F],V=c[F+3];c[h+O]=k<q?k:q,c[h+O+3]=W>V?W:V}return I}}}const Od=new pe;function gs(n,t,e,i){return Ce(n,t,Od),e.intersectBox(Od,i)}function Pb(n,t,e,i,s,r){const{geometry:o,_indirectBuffer:a}=n;for(let c=i,l=i+s;c<l;c++){let u=a?a[c]:c;Wc(o,t,e,u,r)}}function Rb(n,t,e,i,s){const{geometry:r,_indirectBuffer:o}=n;let a=1/0,c=null;for(let l=i,u=i+s;l<u;l++){let f;f=Wc(r,t,e,o?o[l]:l),f&&f.distance<a&&(c=f,a=f.distance)}return c}function Lb(n,t,e,i,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=n,f=t+n;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),He(o,h*3,c,l),o.needsUpdate=!0,i(o,h,s,r))return!0}return!1}const Bd=new w;function Db(n,t,e,i,s){Ee.setBuffer(n._roots[t]),Iu(0,n,e,i,s),Ee.clearBuffer()}function Iu(n,t,e,i,s){const{float32Array:r,uint16Array:o,uint32Array:a}=Ee,c=n*2;if(En(c,o)){const u=Un(n,a),f=Yn(c,o);wb(t,e,i,u,f,s)}else{const u=qn(n);gs(u,r,i,Bd)&&Iu(u,t,e,i,s);const f=jn(n,a);gs(f,r,i,Bd)&&Iu(f,t,e,i,s)}}const zd=new w,Ib=["x","y","z"];function Fb(n,t,e,i){Ee.setBuffer(n._roots[t]);const s=Fu(0,n,e,i);return Ee.clearBuffer(),s}function Fu(n,t,e,i){const{float32Array:s,uint16Array:r,uint32Array:o}=Ee;let a=n*2;if(En(a,r)){const l=Un(n,o),u=Yn(a,r);return Tb(t,e,i,l,u)}else{const l=Sm(n,o),u=Ib[l],h=i.direction[u]>=0;let d,g;h?(d=qn(n),g=jn(n,o)):(d=jn(n,o),g=qn(n));const m=gs(d,s,i,zd)?Fu(d,t,e,i):null;if(m){const x=m.point[u];if(h?x<=s[g+l]:x>=s[g+l+3])return m}const _=gs(g,s,i,zd)?Fu(g,t,e,i):null;return m&&_?m.distance<=_.distance?m:_:m||_||null}}const Za=new pe,yr=new Jn,vr=new Jn,ao=new ae,kd=new vn,$a=new vn;function Ub(n,t,e,i){Ee.setBuffer(n._roots[t]);const s=Uu(0,n,e,i);return Ee.clearBuffer(),s}function Uu(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Ee;let c=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),kd.set(e.boundingBox.min,e.boundingBox.max,i),s=kd),En(c,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,y=Un(n,a),m=Yn(c,o);if(ao.copy(i).invert(),e.boundsTree)return Ce(n,r,$a),$a.matrix.copy(ao),$a.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>$a.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(i),_.b.applyMatrix4(i),_.c.applyMatrix4(i),_.needsUpdate=!0;for(let x=y*3,v=(m+y)*3;x<v;x+=3)if(He(vr,x,f,h),vr.needsUpdate=!0,_.intersectsTriangle(vr))return!0;return!1}});for(let p=y*3,_=(m+y)*3;p<_;p+=3){He(yr,p,f,h),yr.a.applyMatrix4(ao),yr.b.applyMatrix4(ao),yr.c.applyMatrix4(ao),yr.needsUpdate=!0;for(let x=0,v=d.count;x<v;x+=3)if(He(vr,x,d,g),vr.needsUpdate=!0,yr.intersectsTriangle(vr))return!0}}else{const u=n+8,f=a[n+6];return Ce(u,r,Za),!!(s.intersectsBox(Za)&&Uu(u,t,e,i,s)||(Ce(f,r,Za),s.intersectsBox(Za)&&Uu(f,t,e,i,s)))}}const Ka=new ae,Yl=new vn,co=new vn,Nb=new w,Ob=new w,Bb=new w,zb=new w;function kb(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Yl.set(t.boundingBox.min,t.boundingBox.max,e),Yl.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=Zn.getPrimitive(),d=Zn.getPrimitive();let g=Nb,y=Ob,m=null,p=null;s&&(m=Bb,p=zb);let _=1/0,x=null,v=null;return Ka.copy(e).invert(),co.matrix.copy(Ka),n.shapecast({boundsTraverseOrder:E=>Yl.distanceToBox(E),intersectsBounds:(E,T,b)=>b<_&&b<o?(T&&(co.min.copy(E.min),co.max.copy(E.max),co.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:P=>co.distanceToBox(P),intersectsBounds:(P,S,M)=>M<_&&M<o,intersectsRange:(P,S)=>{for(let M=P,L=P+S;M<L;M++){He(d,3*M,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let I=E,O=E+T;I<O;I++){He(h,3*I,l,c),h.needsUpdate=!0;const D=h.distanceToTriangle(d,g,m);if(D<_&&(y.copy(g),p&&p.copy(m),_=D,x=I,v=M),D<r)return!0}}}});{const b=$r(t);for(let P=0,S=b;P<S;P++){He(d,3*P,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=E,L=E+T;M<L;M++){He(h,3*M,l,c),h.needsUpdate=!0;const I=h.distanceToTriangle(d,g,m);if(I<_&&(y.copy(g),p&&p.copy(m),_=I,x=M,v=P),I<r)return!0}}}}}),Zn.releasePrimitive(h),Zn.releasePrimitive(d),_===1/0?null:(i.point?i.point.copy(y):i.point=y.clone(),i.distance=_,i.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Ka),y.applyMatrix4(Ka),s.distance=y.sub(s.point).length(),s.faceIndex=v),i)}function Hb(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,g=!1){const y=h*2;if(a[y+15]===Vc){const p=o[h+6],_=a[y+14];let x=1/0,v=1/0,E=1/0,T=-1/0,b=-1/0,P=-1/0;for(let S=p,M=p+_;S<M;S++){const L=3*n.resolveTriangleIndex(S);for(let I=0;I<3;I++){let O=L+I;O=i?i[O]:O;const D=s.getX(O),F=s.getY(O),k=s.getZ(O);D<x&&(x=D),D>T&&(T=D),F<v&&(v=F),F>b&&(b=F),k<E&&(E=k),k>P&&(P=k)}}return c[h+0]!==x||c[h+1]!==v||c[h+2]!==E||c[h+3]!==T||c[h+4]!==b||c[h+5]!==P?(c[h+0]=x,c[h+1]=v,c[h+2]=E,c[h+3]=T,c[h+4]=b,c[h+5]=P,!0):!1}else{const p=h+8,_=o[h+6],x=p+d,v=_+d;let E=g,T=!1,b=!1;t?E||(T=t.has(x),b=t.has(v),E=!T&&!b):(T=!0,b=!0);const P=E||T,S=E||b;let M=!1;P&&(M=f(p,d,E));let L=!1;S&&(L=f(_,d,E));const I=M||L;if(I)for(let O=0;O<3;O++){const D=p+O,F=_+O,k=c[D],W=c[D+3],q=c[F],V=c[F+3];c[h+O]=k<q?k:q,c[h+O+3]=W>V?W:V}return I}}}const Hd=new w;function Gb(n,t,e,i,s){Ee.setBuffer(n._roots[t]),Nu(0,n,e,i,s),Ee.clearBuffer()}function Nu(n,t,e,i,s){const{float32Array:r,uint16Array:o,uint32Array:a}=Ee,c=n*2;if(En(c,o)){const u=Un(n,a),f=Yn(c,o);Pb(t,e,i,u,f,s)}else{const u=qn(n);gs(u,r,i,Hd)&&Nu(u,t,e,i,s);const f=jn(n,a);gs(f,r,i,Hd)&&Nu(f,t,e,i,s)}}const Gd=new w,Vb=["x","y","z"];function Wb(n,t,e,i){Ee.setBuffer(n._roots[t]);const s=Ou(0,n,e,i);return Ee.clearBuffer(),s}function Ou(n,t,e,i){const{float32Array:s,uint16Array:r,uint32Array:o}=Ee;let a=n*2;if(En(a,r)){const l=Un(n,o),u=Yn(a,r);return Rb(t,e,i,l,u)}else{const l=Sm(n,o),u=Vb[l],h=i.direction[u]>=0;let d,g;h?(d=qn(n),g=jn(n,o)):(d=jn(n,o),g=qn(n));const m=gs(d,s,i,Gd)?Ou(d,t,e,i):null;if(m){const x=m.point[u];if(h?x<=s[g+l]:x>=s[g+l+3])return m}const _=gs(g,s,i,Gd)?Ou(g,t,e,i):null;return m&&_?m.distance<=_.distance?m:_:m||_||null}}const Ja=new pe,Mr=new Jn,Sr=new Jn,lo=new ae,Vd=new vn,Qa=new vn;function Xb(n,t,e,i){Ee.setBuffer(n._roots[t]);const s=Bu(0,n,e,i);return Ee.clearBuffer(),s}function Bu(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Ee;let c=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Vd.set(e.boundingBox.min,e.boundingBox.max,i),s=Vd),En(c,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,y=Un(n,a),m=Yn(c,o);if(lo.copy(i).invert(),e.boundsTree)return Ce(n,r,Qa),Qa.matrix.copy(lo),Qa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Qa.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(i),_.b.applyMatrix4(i),_.c.applyMatrix4(i),_.needsUpdate=!0;for(let x=y,v=m+y;x<v;x++)if(He(Sr,3*t.resolveTriangleIndex(x),f,h),Sr.needsUpdate=!0,_.intersectsTriangle(Sr))return!0;return!1}});for(let p=y,_=m+y;p<_;p++){const x=t.resolveTriangleIndex(p);He(Mr,3*x,f,h),Mr.a.applyMatrix4(lo),Mr.b.applyMatrix4(lo),Mr.c.applyMatrix4(lo),Mr.needsUpdate=!0;for(let v=0,E=d.count;v<E;v+=3)if(He(Sr,v,d,g),Sr.needsUpdate=!0,Mr.intersectsTriangle(Sr))return!0}}else{const u=n+8,f=a[n+6];return Ce(u,r,Ja),!!(s.intersectsBox(Ja)&&Bu(u,t,e,i,s)||(Ce(f,r,Ja),s.intersectsBox(Ja)&&Bu(f,t,e,i,s)))}}const tc=new ae,ql=new vn,uo=new vn,Yb=new w,qb=new w,jb=new w,Zb=new w;function $b(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ql.set(t.boundingBox.min,t.boundingBox.max,e),ql.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=Zn.getPrimitive(),d=Zn.getPrimitive();let g=Yb,y=qb,m=null,p=null;s&&(m=jb,p=Zb);let _=1/0,x=null,v=null;return tc.copy(e).invert(),uo.matrix.copy(tc),n.shapecast({boundsTraverseOrder:E=>ql.distanceToBox(E),intersectsBounds:(E,T,b)=>b<_&&b<o?(T&&(uo.min.copy(E.min),uo.max.copy(E.max),uo.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree){const b=t.boundsTree;return b.shapecast({boundsTraverseOrder:P=>uo.distanceToBox(P),intersectsBounds:(P,S,M)=>M<_&&M<o,intersectsRange:(P,S)=>{for(let M=P,L=P+S;M<L;M++){const I=b.resolveTriangleIndex(M);He(d,3*I,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let O=E,D=E+T;O<D;O++){const F=n.resolveTriangleIndex(O);He(h,3*F,l,c),h.needsUpdate=!0;const k=h.distanceToTriangle(d,g,m);if(k<_&&(y.copy(g),p&&p.copy(m),_=k,x=O,v=M),k<r)return!0}}}})}else{const b=$r(t);for(let P=0,S=b;P<S;P++){He(d,3*P,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=E,L=E+T;M<L;M++){const I=n.resolveTriangleIndex(M);He(h,3*I,l,c),h.needsUpdate=!0;const O=h.distanceToTriangle(d,g,m);if(O<_&&(y.copy(g),p&&p.copy(m),_=O,x=M,v=P),O<r)return!0}}}}}),Zn.releasePrimitive(h),Zn.releasePrimitive(d),_===1/0?null:(i.point?i.point.copy(y):i.point=y.clone(),i.distance=_,i.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(tc),y.applyMatrix4(tc),s.distance=y.sub(s.point).length(),s.faceIndex=v),i)}function Kb(){return typeof SharedArrayBuffer<"u"}const To=new Ee.constructor,Ec=new Ee.constructor,is=new ah(()=>new pe),br=new pe,Er=new pe,jl=new pe,Zl=new pe;let $l=!1;function Jb(n,t,e,i){if($l)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");$l=!0;const s=n._roots,r=t._roots;let o,a=0,c=0;const l=new ae().copy(e).invert();for(let u=0,f=s.length;u<f;u++){To.setBuffer(s[u]),c=0;const h=is.getPrimitive();Ce(0,To.float32Array,h),h.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(Ec.setBuffer(r[u]),o=ni(0,0,e,l,i,a,c,0,0,h),Ec.clearBuffer(),c+=r[d].length,!o);d++);if(is.releasePrimitive(h),To.clearBuffer(),a+=s[u].length,o)break}return $l=!1,o}function ni(n,t,e,i,s,r=0,o=0,a=0,c=0,l=null,u=!1){let f,h;u?(f=Ec,h=To):(f=To,h=Ec);const d=f.float32Array,g=f.uint32Array,y=f.uint16Array,m=h.float32Array,p=h.uint32Array,_=h.uint16Array,x=n*2,v=t*2,E=En(x,y),T=En(v,_);let b=!1;if(T&&E)u?b=s(Un(t,p),Yn(t*2,_),Un(n,g),Yn(n*2,y),c,o+t,a,r+n):b=s(Un(n,g),Yn(n*2,y),Un(t,p),Yn(t*2,_),a,r+n,c,o+t);else if(T){const P=is.getPrimitive();Ce(t,m,P),P.applyMatrix4(e);const S=qn(n),M=jn(n,g);Ce(S,d,br),Ce(M,d,Er);const L=P.intersectsBox(br),I=P.intersectsBox(Er);b=L&&ni(t,S,i,e,s,o,r,c,a+1,P,!u)||I&&ni(t,M,i,e,s,o,r,c,a+1,P,!u),is.releasePrimitive(P)}else{const P=qn(t),S=jn(t,p);Ce(P,m,jl),Ce(S,m,Zl);const M=l.intersectsBox(jl),L=l.intersectsBox(Zl);if(M&&L)b=ni(n,P,e,i,s,r,o,a,c+1,l,u)||ni(n,S,e,i,s,r,o,a,c+1,l,u);else if(M)if(E)b=ni(n,P,e,i,s,r,o,a,c+1,l,u);else{const I=is.getPrimitive();I.copy(jl).applyMatrix4(e);const O=qn(n),D=jn(n,g);Ce(O,d,br),Ce(D,d,Er);const F=I.intersectsBox(br),k=I.intersectsBox(Er);b=F&&ni(P,O,i,e,s,o,r,c,a+1,I,!u)||k&&ni(P,D,i,e,s,o,r,c,a+1,I,!u),is.releasePrimitive(I)}else if(L)if(E)b=ni(n,S,e,i,s,r,o,a,c+1,l,u);else{const I=is.getPrimitive();I.copy(Zl).applyMatrix4(e);const O=qn(n),D=jn(n,g);Ce(O,d,br),Ce(D,d,Er);const F=I.intersectsBox(br),k=I.intersectsBox(Er);b=F&&ni(S,O,i,e,s,o,r,c,a+1,I,!u)||k&&ni(S,D,i,e,s,o,r,c,a+1,I,!u),is.releasePrimitive(I)}}return b}const ec=new vn,Wd=new pe,Qb={strategy:ym,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class ch{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,s=t._roots,r=t._indirectBuffer,o=i.getIndex();let a;return e.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:s,index:o.array,indirectBuffer:r},a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:s,roots:r,indirectBuffer:o}=t,a=new ch(e,{...i,[Hl]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const c=e.getIndex();if(c===null){const l=new sn(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Qb,[Hl]:!1},e),e.useSharedArrayBuffer&&!Kb())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Hl]||(mb(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new pe)));const{_indirectBuffer:i}=this;this.resolveTriangleIndex=e.indirect?s=>i[s]:s=>s}refit(t=null){return(this.indirect?Hb:Cb)(this,t)}traverse(t,e=0){const i=this._roots[e],s=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,c=0){const l=a*2,u=r[l+15]===Vc;if(u){const f=s[a+6],h=r[l+14];t(c,u,new Float32Array(i,a*4,6),f,h)}else{const f=a+wo/4,h=s[a+6],d=s[a+7];t(c,u,new Float32Array(i,a*4,6),d)||(o(f,c+1),o(h,c+1))}}}raycast(t,e=_i){const i=this._roots,s=this.geometry,r=[],o=e.isMaterial,a=Array.isArray(e),c=s.groups,l=o?e.side:e,u=this.indirect?Gb:Db;for(let f=0,h=i.length;f<h;f++){const d=a?e[c[f].materialIndex].side:l,g=r.length;if(u(this,f,d,t,r),a){const y=c[f].materialIndex;for(let m=g,p=r.length;m<p;m++)r[m].face.materialIndex=y}}return r}raycastFirst(t,e=_i){const i=this._roots,s=this.geometry,r=e.isMaterial,o=Array.isArray(e);let a=null;const c=s.groups,l=r?e.side:e,u=this.indirect?Wb:Fb;for(let f=0,h=i.length;f<h;f++){const d=o?e[c[f].materialIndex].side:l,g=u(this,f,d,t);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=c[f].materialIndex))}return a}intersectsGeometry(t,e){let i=!1;const s=this._roots,r=this.indirect?Xb:Ub;for(let o=0,a=s.length;o<a&&(i=r(this,o,t,e),!i);o++);return i}shapecast(t){const e=Zn.getPrimitive(),i=this.indirect?Lb:Ab;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const f=o;o=(h,d,g,y,m)=>f(h,d,g,y,m)?!0:i(h,d,this,a,g,y,e)}else o||(a?o=(f,h,d,g)=>i(f,h,this,a,d,g,e):o=(f,h,d)=>d);let c=!1,l=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const d=u[f];if(c=Mb(this,f,r,o,s,l),c)break;l+=d.byteLength}return Zn.releasePrimitive(e),c}bvhcast(t,e,i){let{intersectsRanges:s,intersectsTriangles:r}=i;const o=Zn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const y=this.resolveTriangleIndex(g);He(o,y*3,a,c)}:g=>{He(o,g*3,a,c)},u=Zn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?g=>{const y=t.resolveTriangleIndex(g);He(u,y*3,f,h)}:g=>{He(u,g*3,f,h)};if(r){const g=(y,m,p,_,x,v,E,T)=>{for(let b=p,P=p+_;b<P;b++){d(b),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=y,M=y+m;S<M;S++)if(l(S),o.needsUpdate=!0,r(o,u,S,b,x,v,E,T))return!0}return!1};if(s){const y=s;s=function(m,p,_,x,v,E,T,b){return y(m,p,_,x,v,E,T,b)?!0:g(m,p,_,x,v,E,T,b)}}else s=g}return Jb(this,t,e,s)}intersectsBox(t,e){return ec.set(t.min,t.max,e),ec.needsUpdate=!0,this.shapecast({intersectsBounds:i=>ec.intersectsBox(i),intersectsTriangle:i=>ec.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},s={},r=0,o=1/0){return(this.indirect?$b:kb)(this,t,e,i,s,r,o)}closestPointToPoint(t,e={},i=0,s=1/0){return Sb(this,t,e,i,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{Ce(0,new Float32Array(i),Wd),t.union(Wd)}),t}}const wm=1e-6,tE=wm*.5,Tm=Math.pow(10,-Math.log10(wm)),eE=tE*Tm;function xi(n){return~~(n*Tm+eE)}function nE(n){return`${xi(n.x)},${xi(n.y)}`}function Xd(n){return`${xi(n.x)},${xi(n.y)},${xi(n.z)}`}function iE(n){return`${xi(n.x)},${xi(n.y)},${xi(n.z)},${xi(n.w)}`}function sE(n,t,e){e.direction.subVectors(t,n).normalize();const i=n.dot(e.direction);return e.origin.copy(n).addScaledVector(e.direction,-i),e}function Am(){return typeof SharedArrayBuffer<"u"}function rE(n){if(n.buffer instanceof SharedArrayBuffer)return n;const t=n.constructor,e=n.buffer,i=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(i).set(s,0),new t(i)}function oE(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function aE(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=oE(e,i);n.setIndex(new sn(s,1));for(let r=0;r<e;r++)s[r]=r}}function cE(n){return n.index?n.index.count:n.attributes.position.count}function lh(n){return cE(n)/3}const lE=1e-8,uE=new w;function hE(n){return~~(n/3)}function fE(n){return n%3}function Yd(n,t){return n.start-t.start}function qd(n,t){return uE.subVectors(t,n.origin).dot(n.direction)}function dE(n,t,e,i=lE){n.sort(Yd),t.sort(Yd);for(let a=0;a<n.length;a++){const c=n[a];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||n.splice(a+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const f=c.end;c.end=u.start,u.start=f}else if(c.start>=u.start&&c.end>=u.end){const f=u.end;u.end=c.start,c.start=f}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),o(u)&&(t.splice(l,1),l--),o(c)){n.splice(a,1),a--;break}}}s(n),s(t);function s(a){for(let c=0;c<a.length;c++)o(a[c])&&(a.splice(c,1),c--)}function r(a,c){return Math.abs(c-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const jd=1e-5,Zd=1e-4;class pE{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,i=t.clone();i.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(o(u,t)&&o(u,i))continue;const f=a(u,t),h=a(u,i),d=Math.min(f,h);d<s&&(s=d,r=u)}return r;function o(c,l){const u=c.origin.distanceTo(l.origin)>jd;return c.direction.angleTo(l.direction)>Zd||u}function a(c,l){const u=c.origin.distanceTo(l.origin),f=c.direction.angleTo(l.direction);return u/jd+f/Zd}}}const Kl=new w,Jl=new w,nc=new Yr;function mE(n,t,e){const i=n.attributes,s=n.index,r=i.position,o=new Map,a=new Map,c=Array.from(t),l=new pE;for(let u=0,f=c.length;u<f;u++){const h=c[u],d=hE(h),g=fE(h);let y=3*d+g,m=3*d+(g+1)%3;s&&(y=s.getX(y),m=s.getX(m)),Kl.fromBufferAttribute(r,y),Jl.fromBufferAttribute(r,m),sE(Kl,Jl,nc);let p,_=l.findClosestRay(nc);_===null&&(_=nc.clone(),l.addRay(_)),a.has(_)||a.set(_,{forward:[],reverse:[],ray:_}),p=a.get(_);let x=qd(_,Kl),v=qd(_,Jl);x>v&&([x,v]=[v,x]),nc.direction.dot(_.direction)<0?p.reverse.push({start:x,end:v,index:h}):p.forward.push({start:x,end:v,index:h})}return a.forEach(({forward:u,reverse:f},h)=>{dE(u,f,o,e),u.length===0&&f.length===0&&a.delete(h)}),{disjointConnectivityMap:o,fragmentMap:a}}const gE=new Q,Ql=new w,xE=new be,tu=["","",""];class _E{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:i,matchDisjointEdges:s,degenerateEpsilon:r}=this,o=e?x:_,a=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,f=c.position;let h=lh(t);const d=h;let g=0;i&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(h=~~(t.drawRange.count/3)));let y=this.data;(!y||y.length<3*d)&&(y=new Int32Array(3*d)),y.fill(-1);let m=0,p=new Set;for(let v=g,E=h*3+g;v<E;v+=3){const T=v;for(let b=0;b<3;b++){let P=T+b;u&&(P=u.getX(P)),tu[b]=o(P)}for(let b=0;b<3;b++){const P=(b+1)%3,S=tu[b],M=tu[P],L=`${M}_${S}`;if(a.has(L)){const I=T+b,O=a.get(L);y[I]=O,y[O]=I,a.delete(L),m+=2,p.delete(O)}else{const I=`${S}_${M}`,O=T+b;a.set(I,O),p.add(O)}}}if(s){const{fragmentMap:v,disjointConnectivityMap:E}=mE(t,p,r);p.clear(),v.forEach(({forward:T,reverse:b})=>{T.forEach(({index:P})=>p.add(P)),b.forEach(({index:P})=>p.add(P))}),this.unmatchedDisjointEdges=v,this.disjointConnections=E,m=h*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=y;function _(v){return Ql.fromBufferAttribute(f,v),Xd(Ql)}function x(v){let E="";for(let T=0,b=l.length;T<b;T++){const P=c[l[T]];let S;switch(P.itemSize){case 1:S=xi(P.getX(v));break;case 2:S=nE(gE.fromBufferAttribute(P,v));break;case 3:S=Xd(Ql.fromBufferAttribute(P,v));break;case 4:S=iE(xE.fromBufferAttribute(P,v));break}E!==""&&(E+="|"),E+=S}return E}}}class wc extends pt{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new ae,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,i=t.elements,s=e.elements;for(let r=0;r<16;r++)if(i[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,i=Am();if(i)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=rE(r.array)}if(t.boundsTree||(aE(t,{useSharedArrayBuffer:i}),t.boundsTree=new ch(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:i})),t.halfEdges||(t.halfEdges=new _E(t)),!t.groupIndices){const s=lh(t),r=new Uint16Array(s),o=t.groups;for(let a=0,c=o.length;a<c;a++){const{start:l,count:u}=o[a];for(let f=l/3,h=(l+u)/3;f<h;f++)r[f]=a}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const yE=1e-14,eu=new w,$d=new w,Kd=new w;function rs(n,t=yE){eu.subVectors(n.b,n.a),$d.subVectors(n.c,n.a),Kd.subVectors(n.b,n.c);const e=eu.angleTo($d),i=eu.angleTo(Kd),s=Math.PI-e-i;return Math.abs(e)<t||Math.abs(i)<t||Math.abs(s)<t||n.a.distanceToSquared(n.b)<t||n.a.distanceToSquared(n.c)<t||n.b.distanceToSquared(n.c)<t}const nu=1e-10,ho=1e-10,vE=1e-10,Pi=new $n,Ne=new $n,Ri=new w,iu=new w,Jd=new w,ic=new Mn,su=new Jn;class ME{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new Se),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class SE{constructor(){this.trianglePool=new ME,this.triangles=[],this.normal=new w,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:i,normal:s}=this;if(Array.isArray(t))for(let r=0,o=t.length;r<o;r++){const a=t[r];if(r===0)a.getNormal(s);else if(Math.abs(1-a.getNormal(Ri).dot(s))>nu)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=i.getTriangle();c.copy(a),e.push(c)}else{t.getNormal(s);const r=i.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:i}=this;if(t.getNormal(iu).normalize(),Math.abs(1-Math.abs(iu.dot(e)))<vE){this.coplanarTriangleUsed=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const o=(r+1)%3,a=s[r],c=s[o];Ri.subVectors(c,a).normalize(),Jd.crossVectors(iu,Ri),ic.setFromNormalAndCoplanarPoint(Jd,a),this.splitByPlane(ic,t)}}else t.getPlane(ic),this.splitByPlane(ic,t)}splitByPlane(t,e){const{triangles:i,trianglePool:s}=this;su.copy(e),su.needsUpdate=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];if(!su.intersectsTriangle(a,Pi,!0))continue;const{a:c,b:l,c:u}=a;let f=0,h=-1,d=!1,g=[],y=[];const m=[c,l,u];for(let p=0;p<3;p++){const _=(p+1)%3;Pi.start.copy(m[p]),Pi.end.copy(m[_]);const x=t.distanceToPoint(Pi.start),v=t.distanceToPoint(Pi.end);if(Math.abs(x)<ho&&Math.abs(v)<ho){d=!0;break}if(x>0?g.push(p):y.push(p),Math.abs(x)<ho)continue;let E=!!t.intersectLine(Pi,Ri);!E&&Math.abs(v)<ho&&(Ri.copy(Pi.end),E=!0),E&&!(Ri.distanceTo(Pi.start)<nu)&&(Ri.distanceTo(Pi.end)<nu&&(h=p),f===0?Ne.start.copy(Ri):Ne.end.copy(Ri),f++)}if(!d&&f===2&&Ne.distance()>ho)if(h!==-1){h=(h+1)%3;let p=0;p===h&&(p=(p+1)%3);let _=p+1;_===h&&(_=(_+1)%3);const x=s.getTriangle();x.a.copy(m[_]),x.b.copy(Ne.end),x.c.copy(Ne.start),rs(x)||i.push(x),a.a.copy(m[p]),a.b.copy(Ne.start),a.c.copy(Ne.end),rs(a)&&(i.splice(r,1),r--,o--)}else{const p=g.length>=2?y[0]:g[0];if(p===0){let T=Ne.start;Ne.start=Ne.end,Ne.end=T}const _=(p+1)%3,x=(p+2)%3,v=s.getTriangle(),E=s.getTriangle();m[_].distanceToSquared(Ne.start)<m[x].distanceToSquared(Ne.end)?(v.a.copy(m[_]),v.b.copy(Ne.start),v.c.copy(Ne.end),E.a.copy(m[_]),E.b.copy(m[x]),E.c.copy(Ne.start)):(v.a.copy(m[x]),v.b.copy(Ne.start),v.c.copy(Ne.end),E.a.copy(m[_]),E.b.copy(m[x]),E.c.copy(Ne.end)),a.a.copy(m[p]),a.b.copy(Ne.end),a.c.copy(Ne.start),rs(v)||i.push(v),rs(E)||i.push(E),rs(a)&&(i.splice(r,1),r--,o--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function bE(n){return n=~~n,n+4-n%4}class Qd{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,i=Am()?SharedArrayBuffer:ArrayBuffer,s=new e(new i(bE(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:i}=this;i+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[i+s]=t[s];this.length+=t.length}clear(){this.length=0}}class EE{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:i}=this;let s=0;for(let r=0;r<e;r++){const o=i[r];s+=o[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const i=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in i){const o=i[r],a=new Qd(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,s[r]=a}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:i}=this;if(!i[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,i,s){const{groupAttributes:r}=this,a=r[0][t];if(a){if(a.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=i,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new Qd(e);u.itemSize=i,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const i in e)e[i].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class tp{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:i,ids:s}=this;i[t]||(i[t]=[],s.push(t)),i[t].push(e)}}const Tc=0,uh=1,wE=2,TE=3,AE=4,Cm=5,Pm=6,Hn=new Yr,ep=new ae,ln=new Se,Li=new w,np=new be,ip=new be,sp=new be,ru=new be,sc=new be,rc=new be,rp=new $n,ou=new w,au=1e-8,CE=1e-15,Is=-1,Fs=1,fc=-2,dc=2,Ao=0,Es=1,hh=2,PE=1e-14;let pc=null;function op(n){pc=n}function Rm(n,t){n.getMidpoint(Hn.origin),n.getNormal(Hn.direction);const e=t.raycastFirst(Hn,pn);return!!(e&&Hn.direction.dot(e.face.normal)>0)?Is:Fs}function RE(n,t){function e(){return Math.random()-.5}n.getNormal(ou),Hn.direction.copy(ou),n.getMidpoint(Hn.origin);const i=3;let s=0,r=1/0;for(let o=0;o<i;o++){Hn.direction.x+=e()*au,Hn.direction.y+=e()*au,Hn.direction.z+=e()*au,Hn.direction.multiplyScalar(-1);const a=t.raycastFirst(Hn,pn);if(!!(a&&Hn.direction.dot(a.face.normal)>0)&&s++,a!==null&&(r=Math.min(r,a.distance)),r<=CE)return a.face.normal.dot(ou)>0?dc:fc;if(s/i>.5||(o-s+1)/i>.5)break}return s/i>.5?Is:Fs}function LE(n,t){const e=new tp,i=new tp;return ep.copy(n.matrixWorld).invert().multiply(t.matrixWorld),n.geometry.boundsTree.bvhcast(t.geometry.boundsTree,ep,{intersectsTriangles(s,r,o,a){if(!rs(s)&&!rs(r)){let c=s.intersectsTriangle(r,rp,!0);if(!c){const l=s.plane,u=r.plane,f=l.normal,h=u.normal;f.dot(h)===1&&Math.abs(l.constant-u.constant)<PE&&(c=!0)}if(c){let l=n.geometry.boundsTree.resolveTriangleIndex(o),u=t.geometry.boundsTree.resolveTriangleIndex(a);e.add(l,u),i.add(u,l),pc&&(pc.addEdge(rp),pc.addIntersectingTriangles(o,s,a,r))}}return!1}}),{aIntersections:e,bIntersections:i}}function DE(n,t,e,i,s,r,o=!1){const a=e.attributes,c=e.index,l=n*3,u=c.getX(l+0),f=c.getX(l+1),h=c.getX(l+2);for(const d in r){const g=a[d],y=r[d];if(!(d in a))throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);const m=g.itemSize;d==="position"?(ln.a.fromBufferAttribute(g,u).applyMatrix4(i),ln.b.fromBufferAttribute(g,f).applyMatrix4(i),ln.c.fromBufferAttribute(g,h).applyMatrix4(i),cu(ln.a,ln.b,ln.c,t,3,y,o)):d==="normal"?(ln.a.fromBufferAttribute(g,u).applyNormalMatrix(s),ln.b.fromBufferAttribute(g,f).applyNormalMatrix(s),ln.c.fromBufferAttribute(g,h).applyNormalMatrix(s),o&&(ln.a.multiplyScalar(-1),ln.b.multiplyScalar(-1),ln.c.multiplyScalar(-1)),cu(ln.a,ln.b,ln.c,t,3,y,o,!0)):(np.fromBufferAttribute(g,u),ip.fromBufferAttribute(g,f),sp.fromBufferAttribute(g,h),cu(np,ip,sp,t,m,y,o))}}function IE(n,t,e,i,s,r,o,a=!1){lu(n,i,s,r,o,a),lu(a?e:t,i,s,r,o,a),lu(a?t:e,i,s,r,o,a)}function Lm(n,t,e=!1){switch(n){case Tc:if(t===Fs||t===dc&&!e)return Es;break;case uh:if(e){if(t===Is)return Ao}else if(t===Fs||t===fc)return Es;break;case wE:if(e){if(t===Fs||t===fc)return Es}else if(t===Is)return Ao;break;case AE:if(t===Is)return Ao;if(t===Fs)return Es;break;case TE:if(t===Is||t===dc&&!e)return Es;break;case Cm:if(!e&&(t===Fs||t===fc))return Es;break;case Pm:if(!e&&(t===Is||t===dc))return Es;break;default:throw new Error(`Unrecognized CSG operation enum "${n}".`)}return hh}function cu(n,t,e,i,s,r,o=!1,a=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};ru.set(0,0,0,0).addScaledVector(n,i.a.x).addScaledVector(t,i.a.y).addScaledVector(e,i.a.z),sc.set(0,0,0,0).addScaledVector(n,i.b.x).addScaledVector(t,i.b.y).addScaledVector(e,i.b.z),rc.set(0,0,0,0).addScaledVector(n,i.c.x).addScaledVector(t,i.c.y).addScaledVector(e,i.c.z),a&&(ru.normalize(),sc.normalize(),rc.normalize()),c(ru),o?(c(rc),c(sc)):(c(sc),c(rc))}function lu(n,t,e,i,s,r=!1){for(const o in s){const a=t[o],c=s[o];if(!(o in t))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const l=a.itemSize;o==="position"?(Li.fromBufferAttribute(a,n).applyMatrix4(e),c.push(Li.x,Li.y,Li.z)):o==="normal"?(Li.fromBufferAttribute(a,n).applyNormalMatrix(i),r&&Li.multiplyScalar(-1),c.push(Li.x,Li.y,Li.z)):(c.push(a.getX(n)),l>1&&c.push(a.getY(n)),l>2&&c.push(a.getZ(n)),l>3&&c.push(a.getW(n)))}}class FE{constructor(t){this.triangle=new Se().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new Se().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const i in e)t.push(e[i]);return t}}class ap{constructor(){this.data={}}addTriangleIntersection(t,e,i,s){const{data:r}=this;r[t]||(r[t]=new FE(e)),r[t].addTriangle(i,s)}getTrianglesAsArray(t=null){const{data:e}=this,i=[];if(t!==null)t in e&&i.push(e[t].triangle);else for(const s in e)i.push(e[s].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(t=null,e=null){const{data:i}=this,s=new Set,r=[],o=a=>{if(i[a])if(e!==null)i[a].intersects[e]&&r.push(i[a].intersects[e]);else{const c=i[a].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)o(t);else for(const a in i)o(a);return r}reset(){this.data={}}}class UE{constructor(){this.enabled=!1,this.triangleIntersectsA=new ap,this.triangleIntersectsB=new ap,this.intersectionEdges=[]}addIntersectingTriangles(t,e,i,s){const{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(t,e,i,s),o.addTriangleIntersection(i,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),op(this))}complete(){this.enabled&&op(null)}}const us=new ae,Ac=new Qt,ws=new Se,oc=new Se,ts=new Se,ac=new Se,ci=[],Hs=[];function NE(n){for(const t of n)return t}function OE(n,t,e,i,s,r={}){const{useGroups:o=!0}=r,{aIntersections:a,bIntersections:c}=LE(n,t),l=[];let u=null,f;return f=o?0:-1,cp(n,t,a,e,!1,i,s,f),lp(n,t,a,e,!1,s,f),e.findIndex(d=>d!==Pm&&d!==Cm)!==-1&&(f=o?n.geometry.groups.length||1:-1,cp(t,n,c,e,!0,i,s,f),lp(t,n,c,e,!0,s,f)),ci.length=0,Hs.length=0,{groups:l,materials:u}}function cp(n,t,e,i,s,r,o,a=0){const c=n.matrixWorld.determinant()<0;us.copy(t.matrixWorld).invert().multiply(n.matrixWorld),Ac.getNormalMatrix(n.matrixWorld).multiplyScalar(c?-1:1);const l=n.geometry.groupIndices,u=n.geometry.index,f=n.geometry.attributes.position,h=t.geometry.boundsTree,d=t.geometry.index,g=t.geometry.attributes.position,y=e.ids,m=e.intersectionSet;for(let p=0,_=y.length;p<_;p++){const x=y[p],v=a===-1?0:l[x]+a,E=3*x,T=u.getX(E+0),b=u.getX(E+1),P=u.getX(E+2);ws.a.fromBufferAttribute(f,T).applyMatrix4(us),ws.b.fromBufferAttribute(f,b).applyMatrix4(us),ws.c.fromBufferAttribute(f,P).applyMatrix4(us),r.reset(),r.initialize(ws);const S=m[x];for(let L=0,I=S.length;L<I;L++){const O=3*S[L],D=d.getX(O+0),F=d.getX(O+1),k=d.getX(O+2);oc.a.fromBufferAttribute(g,D),oc.b.fromBufferAttribute(g,F),oc.c.fromBufferAttribute(g,k),r.splitByTriangle(oc)}const M=r.triangles;for(let L=0,I=M.length;L<I;L++){const O=M[L],D=r.coplanarTriangleUsed?RE(O,h):Rm(O,h);ci.length=0,Hs.length=0;for(let F=0,k=i.length;F<k;F++){const W=Lm(i[F],D,s);W!==hh&&(Hs.push(W),ci.push(o[F].getGroupAttrSet(v)))}if(ci.length!==0){ws.getBarycoord(O.a,ac.a),ws.getBarycoord(O.b,ac.b),ws.getBarycoord(O.c,ac.c);for(let F=0,k=ci.length;F<k;F++){const W=ci[F],V=Hs[F]===Ao;DE(x,ac,n.geometry,n.matrixWorld,Ac,W,c!==V)}}}}return y.length}function lp(n,t,e,i,s,r,o=0){const a=n.matrixWorld.determinant()<0;us.copy(t.matrixWorld).invert().multiply(n.matrixWorld),Ac.getNormalMatrix(n.matrixWorld).multiplyScalar(a?-1:1);const c=t.geometry.boundsTree,l=n.geometry.groupIndices,u=n.geometry.index,f=n.geometry.attributes,h=f.position,d=[],g=n.geometry.halfEdges,y=new Set,m=lh(n.geometry);for(let p=0,_=m;p<_;p++)p in e.intersectionSet||y.add(p);for(;y.size>0;){const p=NE(y);y.delete(p),d.push(p);const _=3*p,x=u.getX(_+0),v=u.getX(_+1),E=u.getX(_+2);ts.a.fromBufferAttribute(h,x).applyMatrix4(us),ts.b.fromBufferAttribute(h,v).applyMatrix4(us),ts.c.fromBufferAttribute(h,E).applyMatrix4(us);const T=Rm(ts,c);Hs.length=0,ci.length=0;for(let b=0,P=i.length;b<P;b++){const S=Lm(i[b],T,s);S!==hh&&(Hs.push(S),ci.push(r[b]))}for(;d.length>0;){const b=d.pop();for(let P=0;P<3;P++){const S=g.getSiblingTriangleIndex(b,P);S!==-1&&y.has(S)&&(d.push(S),y.delete(S))}if(ci.length!==0){const P=3*b,S=u.getX(P+0),M=u.getX(P+1),L=u.getX(P+2),I=o===-1?0:l[b]+o;if(ts.a.fromBufferAttribute(h,S),ts.b.fromBufferAttribute(h,M),ts.c.fromBufferAttribute(h,L),!rs(ts))for(let O=0,D=ci.length;O<D;O++){const F=Hs[O],k=ci[O].getGroupAttrSet(I),W=F===Ao;IE(S,M,L,f,n.matrixWorld,Ac,k,W!==a)}}}}}function BE(n){for(let t=0;t<n.length-1;t++){const e=n[t],i=n[t+1];if(e.materialIndex===i.materialIndex){const s=e.start,r=i.start+i.count;i.start=s,i.count=r-s,n.splice(t,1),t--}}}function zE(n,t,e,i){e.clear();const s=n.attributes;for(let r=0,o=i.length;r<o;r++){const a=i[r],c=s[a];e.initializeArray(a,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)i.includes(r)||e.delete(r);for(const r in t.attributes)i.includes(r)||(t.deleteAttribute(r),t.dispose())}function kE(n,t,e){let i=!1,s=-1;const r=n.attributes,o=t.groupAttributes[0];for(const c in o){const l=t.getTotalLength(c),u=t.getType(c),f=t.getItemSize(c),h=t.getNormalized(c);let d=r[c];(!d||d.array.length<l)&&(d=new sn(new u(l),f,h),n.setAttribute(c,d),i=!0);let g=0;for(let y=0,m=Math.min(e.length,t.groupCount);y<m;y++){const p=e[y].index,{array:_,type:x,length:v}=t.groupAttributes[p][c],E=new x(_.buffer,0,v);d.array.set(E,g),g+=E.length}d.needsUpdate=!0,s=l/d.itemSize}if(n.index){const c=n.index.array;if(c.length<s)n.index=null,i=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let a=0;n.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:f}=e[c],h=t.getCount(u);h!==0&&(n.addGroup(a,h,f),a+=h)}n.setDrawRange(0,s),n.boundsTree=null,i&&n.dispose()}function up(n,t){let e=t;return Array.isArray(t)||(e=[],n.forEach(i=>{e[i.materialIndex]=t})),e}class HE{constructor(){this.triangleSplitter=new SE,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new UE}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,i,s=new wc){let r=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s],r=!1),s.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:c,useGroups:l,consolidateGroups:u,debug:f}=this;for(;a.length<s.length;)a.push(new EE);s.forEach((p,_)=>{zE(t.geometry,p.geometry,a[_],c)}),f.init(),OE(t,e,i,o,a,{useGroups:l}),f.complete();const h=this.getGroupRanges(t.geometry),d=up(h,t.material),g=this.getGroupRanges(e.geometry),y=up(g,e.material);g.forEach(p=>p.materialIndex+=d.length);let m=[...h,...g].map((p,_)=>({...p,index:_}));if(l){const p=[...d,...y];u&&(m=m.map(x=>{const v=p[x.materialIndex];return x.materialIndex=p.indexOf(v),x}).sort((x,v)=>x.materialIndex-v.materialIndex));const _=[];for(let x=0,v=p.length;x<v;x++){let E=!1;for(let T=0,b=m.length;T<b;T++){const P=m[T];P.materialIndex===x&&(E=!0,P.materialIndex=_.length)}E&&_.push(p[x])}s.forEach(x=>{x.material=_})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(p=>{p.material=d[0]});return s.forEach((p,_)=>{const x=p.geometry;kE(x,a[_],m),u&&BE(x.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new wc){t.updateMatrixWorld(!0);const i=(r,o)=>{const a=r.children;for(let c=0,l=a.length;c<l;c++){const u=a[c];u.isOperationGroup?i(u,o):o(u)}},s=r=>{const o=r.children;let a=!1;for(let l=0,u=o.length;l<u;l++){const f=o[l];a=s(f)||a}const c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let l;return i(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return a||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}Nc({"تصميم 3D":"3D design","اسم المشروع":"Project name","ارسم واكتب":"Draw and write","✏️ رسم حر":"✏️ Free draw","🖊️ قلم":"🖊️ Pen","➕ نص":"➕ Text",فتحة:"Hole","حط الفتحة جوه الشكل، وهي بتخرّمه على طول":"Put the hole inside the shape and it cuts right through it",الأشكال:"Shapes","دوس على شكل يتحط على السطح، أو اسحبه وحطه في المكان اللي انت عايزه. «نص» كمان: اسحبه، وبعدين اكتب الكلمة وغيّر شكلها.":"Click a shape to put it on the workplane, or drag it to the place you want. «Text» too: drag it, then type the word and change its style.","نماذج جاهزة":"Ready models","روبو وعربية وبيت… كل جزء بلونه، وتقدر تغيّره":"A robot, a car, a house… each part in its own colour, and you can change it",رجوع:"Undo",قدّام:"Redo",حرّك:"Move",لف:"Turn",المقاس:"Size","تحديد متعدد":"Multi-select",قفل:"Lock",رصّ:"Align",نسخة:"Copy","على السطح":"To floor",جمّع:"Group",فك:"Ungroup",امسح:"Delete","امسح الكل":"Delete all",مغناطيس:"Snap",خطوة:"Step","١ ملّي":"1 mm","٥ ملّي":"5 mm","١٠ ملّي":"10 mm",بحرية:"Free","ℹ️ معلومات واختصارات":"ℹ️ Help and shortcuts","النقط البيضا والسودا تغيّر المقاس، واللي فوق تغيّر الارتفاع · دبل كليك على النص تعدّله · كليك يمين واسحب عشان تلف الكاميرا · كليك شمال يختار، واسحب مستطيل تختار أكتر من شكل · العجلة للتقريب · Shift + يمين يحرّك المنظر · Shift مع التكبير = نفس النسبة":"The white and black dots change the size and the top one changes the height · double-click text to edit it · right-click and drag to turn the camera · left-click selects, drag a rectangle to select several · wheel to zoom · Shift + right-drag moves the view · Shift while resizing = same proportions",شكل:"Shape","🎨 مُصمت":"🎨 Solid","⬚ فتحة":"⬚ Hole","✂️ نفّذ الفتحة":"✂️ Apply the hole",النص:"Text","عدد الأوجه":"Number of sides","تدوير الحواف":"Rounded edges",العرض:"Width",ملّي:"mm",العمق:"Depth",الارتفاع:"Height","⛓️‍💥 حر":"⛓️‍💥 Free","المكان (ملّي)":"Position (mm)","Y ارتفاع":"Y height","دوران ربع لفة":"Quarter turn","حول X":"Around X","حول Y":"Around Y","حول Z":"Around Z","عكس Y":"Reverse Y","زاوية الدوران (درجة)":"Turn angle (degrees)","حوالين X":"Around X","حوالين Y":"Around Y","حوالين Z":"Around Z","الأسهم في الكيبورد بتحرّك الشكل، و Shift + ↑↓ بترفعه وتنزّله، و Shift + ←→ خطوة ١٠ أضعاف.":"The arrow keys move the shape, Shift + ↑↓ raises and lowers it, and Shift + ←→ moves 10 times further.","بالماوس واللمس":"Mouse and touch","دوس على شكل من الجنب يتحط على السطح، أو اسحبه وحطه في المكان اللي انت عايزه":"Click a shape on the side to put it on the workplane, or drag it to the place you want","«نص»: اسحبه، وبعدين اكتب الكلمة وغيّر شكلها · دبل كليك على النص تعدّله":"«Text»: drag it, then type the word and change its style · double-click the text to edit it","النقط البيضا والسودا تغيّر المقاس، واللي فوق تغيّر الارتفاع":"The white and black dots change the size, and the top one changes the height","كليك شمال يختار، واسحب مستطيل تختار أكتر من شكل":"Left-click selects, and drag a rectangle to select several shapes","كليك يمين واسحب عشان تلف الكاميرا · Shift + يمين يحرّك المنظر · العجلة للتقريب":"Right-click and drag to turn the camera · Shift + right-drag moves the view · wheel to zoom","على التليفون: صباع واحد يلف الكاميرا، وصباعين يقرّبوا ويحرّكوا · اضغط مطوّل على شكل تختاره مع اللي قبله":"On a phone: one finger turns the camera, two fingers zoom and move · long-press a shape to add it to the selection","اختصارات الكيبورد":"Keyboard shortcuts","لف الشكل ١٥° شمال أو يمين":"Turn the shape 15° left or right","نزّل الشكل على السطح":"Drop the shape to the floor",الأسهم:"Arrows","حرّك الشكل خطوة (مع":"Move the shape one step (with","+ ←→: ١٠ خطوات)":"+ ←→: 10 steps)","(أو":"(or","طلّع الشكل لفوق أو نزّله":"Raise or lower the shape","مع التكبير":"while resizing","كبّر بنفس النسبة":"Resize with the same proportions",انسخ:"Copy",قص:"Cut",الزق:"Paste","نسخة جنبه على طول":"Duplicate right next to it","اختار كل الأشكال":"Select all shapes","جمّع الأشكال المختارة":"Group the selected shapes","فك المجموعة":"Ungroup",احفظ:"Save","امسح الشكل":"Delete the shape","الغي الاختيار":"Clear the selection","التصاميم محفوظة على الجهاز ده.":"Designs are saved on this device.","📄 تصميم جديد":"📄 New design","ملف للطباعة ثلاثية الأبعاد":"A file for 3D printing","أدوات الرسم والنص":"Drawing and text tools","ارسم شكل بصباعك أو بالماوس، ويبقى مجسّم":"Draw a shape with your finger or the mouse and it becomes 3D","حط نقط، وتطلع شكل بخطوط مستقيمة أو منحنية":"Place points to make a shape with straight or curved lines","نوع الخط":"Font","روبو Robo":"Robo","ضيف النص":"Add the text","مساحة التصميم":"Design area",أدوات:"Tools","تراجع (Ctrl+Z)":"Undo (Ctrl+Z)","إعادة (Ctrl+Shift+Z أو Ctrl+Y)":"Redo (Ctrl+Shift+Z or Ctrl+Y)","نوع التحريك":"Move mode","حرّك (W)":"Move (W)","لف (E)":"Turn (E)","كبّر وصغّر (R)":"Resize (R)","تحديد أكتر من شكل: دوس على الأشكال واحد واحد، أو اسحب مستطيل. على الموبايل: اضغط مطوّل على الشكل":"Select several shapes: click the shapes one by one, or drag a rectangle. On mobile: long-press the shape","اقفل الشكل عشان ميتحركش":"Lock the shape so it doesn’t move","رصّ الأشكال (Align) — اختار شكلين أو أكتر":"Align shapes — select two or more","نسخة (Ctrl+D) · انسخ Ctrl+C · الزق Ctrl+V":"Duplicate (Ctrl+D) · copy Ctrl+C · paste Ctrl+V","نزّله على السطح (D)":"Drop it to the floor (D)","جمّع (Ctrl+G)":"Group (Ctrl+G)","فك التجميع":"Ungroup","امسح (Delete)":"Delete (Delete)","امسح كل الأشكال":"Delete all shapes","المغناطيس: الأشكال بتلزق في حروف بعض لما تقرّب، والشكل اللي بتسحبه من الجنب بيقعد فوق الشكل":"Snap: shapes stick to each other’s edges when close, and a shape you drag in from the side sits on top of the shape","كبّر أو صغّر شريط الأدوات":"Make the toolbar bigger or smaller","اسحب لفوق أو لتحت عشان تصغّر أو تكبّر شريط الأدوات (دبل كليك يرجّعه)":"Drag up or down to shrink or grow the toolbar (double-click resets it)","مساحة التصميم الثلاثي الأبعاد":"The 3D design area","دوس على وش المكعب عشان تبص من الناحية دي":"Click a face of the cube to look from that side","مكعب الاتجاهات":"View cube",الكاميرا:"Camera","الرؤية الرئيسية":"Home view","ركّز على التصميم":"Focus on the design",قرّب:"Zoom in",بعّد:"Zoom out","اطوي القائمة":"Fold the menu","نوع الشكل":"Shape type","الفتحة بتخرّم الشكل وبيبقوا قطعة واحدة، ومش هتتحرك لوحدها تاني":"The hole cuts the shape and they become one part that won’t move apart again",الألوان:"Colours","كبّر وصغّر بنفس النسبة (أو اضغط Shift وانت بتكبّر)":"Resize with the same proportions (or hold Shift while resizing)","دوران الشكل":"Turn the shape","دوران ربع لفة حول المحور X":"Quarter turn around the X axis","دوران ربع لفة حول المحور Y":"Quarter turn around the Y axis","دوران ربع لفة حول المحور Z":"Quarter turn around the Z axis","دوران ربع لفة حول Y في الاتجاه العكسي":"Quarter turn around Y the other way","مراية يمين وشمال":"Mirror left–right","مراية فوق وتحت":"Mirror up–down","مراية قدام وورا":"Mirror front–back",مكعب:"Cube",أسطوانة:"Cylinder",كورة:"Sphere",مخروط:"Cone",هرم:"Pyramid",سقف:"Roof",مثلث:"Triangle",خماسي:"Pentagon",سداسي:"Hexagon",سباعي:"Heptagon",ثماني:"Octagon",بيضاوي:"Oval",معيّن:"Diamond","طيارة ورق":"Kite",ماسورة:"Tube",حلقة:"Ring",نجمة:"Star",قلب:"Heart",منحدر:"Ramp","نص كورة":"Half sphere",كبسولة:"Capsule",عجلة:"Wheel",ترس:"Gear",بوابة:"Arch","علامة +":"Plus sign",روبو:"Robo",عربية:"Car",بيت:"House",شجرة:"Tree","✂️ الفتحة اتنفّذت! الشكل بقى قطعة واحدة":"✂️ The hole was applied! The shape is one part now",تصميمي:"My design","💾 اتحفظ":"💾 Saved",تصميم:"Design","عدّل النص":"Edit the text","✍️ اكتب الكلام الجديد ودوس Enter":"✍️ Type the new words and press Enter","🔒 الشكل مقفول":"🔒 The shape is locked",بالملّي:"in mm","🧲 المغناطيس شغال: الأشكال بتلزق في بعض لما تقرّب":"🧲 Snap is on: shapes stick together when close","المغناطيس اتقفل: الشكل بيتحرك بحرية":"Snap is off: the shape moves freely",'<button class="tkTog" type="button" aria-expanded="false" title="أدوات الشكل: دوران حول X و Y و Z، نسخة، حذف"><i>🛠</i><span>أدوات</span><b aria-hidden="true">▾</b></button>':'<button class="tkTog" type="button" aria-expanded="false" title="Shape tools: turn around X, Y and Z, duplicate, delete"><i>🛠</i><span>Tools</span><b aria-hidden="true">▾</b></button>',"٠°":"0°","دوس ↻ «لف» يلفّه ربع لفة، أو اسحب الزرار ⟳ حوالين الشكل لأي زاوية":"Click ↻ «Turn» to turn it a quarter, or drag the ⟳ button around the shape to any angle",نص:"Text","جاهز! كل جزء تقدر تغيّره، أو دوس «جمّع» يبقى قطعة واحدة":"Ready! You can change every part, or click «Group» to make it one part","🔒 فيه شكل مقفول. افتح القفل الأول":"🔒 A shape is locked. Unlock it first","اختار شكلين أو أكتر الأول (Shift + ضغطة)":"Select two or more shapes first (Shift + click)","مقدرتش أجمّع الأشكال دي، جرّب تحرّكهم شوية":"I couldn’t group these shapes; try moving them a little","✨ الفتحة خرّمت الشكل!":"✨ The hole cut the shape!","✨ اتجمّعوا في شكل واحد":"✨ Grouped into one shape","اكتب كلمة الأول ✍️":"Type a word first ✍️","✏️ عدّل الرسمة":"✏️ Edit the drawing","🖊️ القلم":"🖊️ The pen","ارسم بصباعك أو بالماوس، والخط بيطلع مجسّم زي ما رسمته بالظبط (مش بيتقفل). ارسم تاني لو عايز تبدأ من الأول.":"Draw with your finger or the mouse, and the line becomes 3D exactly as you drew it (it doesn’t close). Draw again to start over.","دوس عشان تحط نقط، واسحب أي نقطة تحرّكها. دوس على أول نقطة (أو «حطه») عشان تقفل الشكل.":"Click to place points, and drag any point to move it. Click the first point (or «Place it») to close the shape.","ارسم خط أطول شوية ✏️":"Draw a slightly longer line ✏️","محتاج ٣ نقط على الأقل 🖊️":"You need at least 3 points 🖊️","الشكل صغير قوي، ارسمه أكبر شوية":"The shape is very small; draw it a bit bigger","دوس تاني عشان تمسح كل الأشكال 🧹":"Click again to delete all shapes 🧹","🧹 اتمسح كل حاجة (تقدر ترجّع بـ ↶)":"🧹 Everything was deleted (you can bring it back with ↶)","🔗 نفس النسبة":"🔗 Same proportions","🔗 المقاس هيكبر ويصغر بنفس النسبة":"🔗 The size will grow and shrink in the same proportions","كل اتجاه لوحده (Shift للنسبة)":"Each direction on its own (Shift for proportions)","فتحة مربعة":"Square hole","فتحة دايرة":"Round hole","سيب الشكل فوق مساحة التصميم":"Drop the shape over the design area",البداية:"Start",النهاية:"End",مجموعة:"Group",رسمة:"Drawing",مربع:"Square",تساعي:"Nonagon",عشاري:"Decagon","اثنا عشري":"Dodecagon",مضلع:"Polygon",أوجه:"sides","افتح القائمة":"Open the menu","🔒 اتقفل: مش هيتحرك ولا يتغيّر":"🔒 Locked: it won’t move or change","🔓 اتفتح":"🔓 Unlocked",مقفول:"Locked","⇤ أول":"⇤ First","⊕ نص":"⊕ Middle","⇥ آخر":"⇥ Last","Y ↕ ارتفاع":"Y ↕ Height","⤓ تحت":"⤓ Bottom","⤒ فوق":"⤒ Top","Z ⤢ عمق":"Z ⤢ Depth","اختار شكلين أو أكتر الأول (☑ تحديد متعدد)":"Select two or more shapes first (☑ Multi-select)","☑ دوس على الأشكال اللي عايزها، أو اسحب صباعك على مكان فاضي ترسم مستطيل":"☑ Click the shapes you want, or drag on an empty place to draw a rectangle","رجعنا للتحديد العادي، واتلغى التحديد":"Back to normal selection; the selection was cleared","مفيش أشكال مُصمتة تتطبع":"There are no solid shapes to print","⬇ اتنزّل":"⬇ Downloaded",'<li class="empty">لسه مفيش تصاميم</li>':'<li class="empty">No designs yet</li>',"✂️ اتقص. دوس Ctrl+V عشان تحطه":"✂️ Cut. Press Ctrl+V to put it back","📋 اتنسخ":"📋 Copied",الشكل:"The shape","مفيش حاجة منسوخة. اختار شكل ودوس Ctrl+C":"Nothing is copied. Select a shape and press Ctrl+C","📌 اتلزق":"📌 Pasted","ضيف ٣ أشكال مختلفة 🧊":"Add 3 different shapes 🧊","دوس على ٣ أشكال مختلفة من على الجنب (مكعب، كورة، أسطوانة…).":"Click 3 different shapes on the side (cube, sphere, cylinder…).","لوّن الأشكال 🎨":"Colour the shapes 🎨","الأشكال دي كلها بيضا. دوس على كل شكل واختار له لون، وخلّي كل واحد لونه مختلف.":"These shapes are all white. Click each shape and choose a colour, and make each one a different colour.","ابني برج 🗼":"Build a tower 🗼","حط شكل فوق شكل. اسحب السهم الأخضر لفوق، أو خلّي الشكل على السطح وارفعه.":"Put a shape on top of a shape. Drag the green arrow up, or put the shape on the floor and raise it.","كبّر الشكل 📏":"Make the shape bigger 📏","دوس على شكل واكتب الارتفاع ٤٠ ملّي أو أكتر (أو استخدم «المقاس»).":"Click a shape and type a height of 40 mm or more (or use «Size»).","اعمل فتحة ⬚":"Make a hole ⬚","حط مكعب، وحط «فتحة دايرة» جواه: هتشوفها بتخرّم المكعب لوحدها. وبعدين دوس «✂️ نفّذ الفتحة».":"Put a cube, and put a «Round hole» inside it: you’ll see it cut the cube by itself. Then click «✂️ Apply the hole».","مشروع: جسم روبو 🤖":"Project: Robo’s body 🤖","اعمل روبو: جسم وراس فوقه، و٤ أشكال على الأقل، و٢ ألوان أو أكتر.":"Make a robot: a body with a head on top, at least 4 shapes, and 2 colours or more.","مقاس بالظبط 📐":"An exact size 📐","اعمل مكعب مقاسه ٣٠ × ٣٠ × ١٠ ملّي بالظبط (العرض والعمق ٣٠، والارتفاع ١٠).":"Make a cube exactly 30 × 30 × 10 mm (width and depth 30, height 10).","على السطح وفي النص 🎯":"On the floor and in the middle 🎯","خلّي أسطوانة قاعدتها على السطح بالظبط (y = 0) ومركزها في نص السطح (x = 0 و z = 0).":"Put a cylinder with its base exactly on the floor (y = 0) and its centre in the middle of the workplane (x = 0 and z = 0).","ميدالية 🏷":"A key ring 🏷","اعمل ميدالية: شكل مسطح ارتفاعه من ٣ لـ ٦ ملّي، وفيها فتحة دايرة للسلسلة، وبعدين دوس «✂️ نفّذ الفتحة».":"Make a key ring: a flat shape 3 to 6 mm high, with a round hole for the chain, then click «✂️ Apply the hole».","حامل موتور ⚙️":"A motor holder ⚙️","اعمل قطعة فيها فتحة دايرة قطرها ٢٤ ملّي (زي مقاس موتور صغير). استخدم «فتحة دايرة» وخلّي عرضها وعمقها ٢٤، وبعدين دوس «✂️ نفّذ الفتحة».":"Make a part with a round hole 24 mm across (the size of a small motor). Use «Round hole», make its width and depth 24, then click «✂️ Apply the hole».","مشروع: صمّم هيكل عربيتك 🚗":"Project: design your car’s body 🚗","صمّم جسم عربية: قاعدة، و٤ عجلات (أسطوانات)، وفتحة واحدة على الأقل لتوصيل الأسلاك (حط الفتحة ودوس «✂️ نفّذ الفتحة»).":"Design a car body: a base, 4 wheels (cylinders), and at least one hole for the wires (place the hole and click «✂️ Apply the hole»).","أضف 3 أشكال مختلفة 🧊":"Add 3 different shapes 🧊","اضغط على 3 أشكال مختلفة من القائمة الجانبية (مكعب، كرة، أسطوانة…).":"Click 3 different shapes in the side list (cube, sphere, cylinder…).","كل هذه الأشكال بيضاء. اضغط على كل شكل واختر له لونًا، وليكن لكل شكل لون مختلف.":"All these shapes are white. Click each shape and choose a colour for it, and give each shape a different colour.","ابنِ برجًا 🗼":"Build a tower 🗼","ضع شكلًا فوق شكل. اسحب السهم الأخضر إلى أعلى، أو استعمل Shift مع ↑.":"Put a shape on top of a shape. Drag the green arrow up, or use Shift with ↑.","اضغط على شكل واجعل ارتفاعه 40 ملّي أو أكثر: اسحب النقطة العليا، أو اضغط عليها واكتب الرقم.":"Click a shape and make it 40 mm high or more: drag the top dot, or click it and type the number.","اصنع فتحة (Hole) ⬚":"Make a hole ⬚","ضع مكعبًا، ثم ضع «فتحة دائرية» داخله: ستراها تثقب المكعب وحدها.":"Put a cube, then put a «Round hole» inside it: you’ll see it cut the cube by itself.","اصنع روبو: جسمًا ورأسًا فوقه، و4 أشكال على الأقل، ولونين أو أكثر.":"Make a robot: a body and a head on top, at least 4 shapes, and two colours or more.","مكعب وكرة ⚽":"A cube and a sphere ⚽","تدريب: أضف مكعبًا (Cube) وكرة (Sphere). ابحث عنهما في القائمة.":"Practice: add a cube and a sphere. Look for them in the list.","أربعة ألوان 🌈":"Four colours 🌈","تدريب: أعطِ كل شكل من الأشكال الأربعة لونًا مختلفًا.":"Practice: give each of the four shapes a different colour.","برج من 3 أدوار 🏢":"A 3-storey tower 🏢","تدريب: ضع 3 أشكال بعضها فوق بعض: الأول على السطح، والثاني فوقه، والثالث فوق الثاني.":"Practice: put 3 shapes on top of each other: the first on the floor, the second on it, and the third on the second.","جسر عريض 🌉":"A wide bridge 🌉","تدريب: اجعل مكعبًا عرضه 50 ملّي أو أكثر. اسحب النقطة الجانبية، أو اضغط عليها واكتب الرقم.":"Practice: make a cube 50 mm wide or more. Drag the side dot, or click it and type the number.","لُفّ الشكل (Rotate) 🔄":"Rotate the shape 🔄","اختر شكلًا، ثم افتح «🛠 أدوات» واضغط «حول X» أو «حول Z»: الشكل ينام على جنبه.":"Select a shape, then open «🛠 Tools» and click «Around X» or «Around Z»: the shape lies on its side.","فتحتان في شكل واحد 🧀":"Two holes in one shape 🧀","تدريب: ضع فتحتين (Holes) داخل المكعب، فيصير فيه ثقبان.":"Practice: put two holes inside the cube, so it has two holes through it.","اجمع شكلين (Group) 🧲":"Group two shapes 🧲","اختر «تحديد متعدد»، ثم اضغط على الشكلين، ثم اضغط «جمّع»: يصيران قطعة واحدة.":"Choose «Multi-select», click both shapes, then click «Group»: they become one part.","انسخ الشجرة (Copy) 🌳🌳":"Copy the tree 🌳🌳","اختر الشجرة واضغط «نسخة» مرتين: صار عندك 3 أشجار. رتّبها جنب بعض.":"Select the tree and click «Copy» twice: now you have 3 trees. Arrange them side by side.","🔧 أصلح خطأً واحدًا: الرأس الطائر":"🔧 Fix one bug: the flying head","رأس الروبو يطير في الهواء! ضعه فوق الجسم تمامًا، فلا يبقى شكل معلّق في الهواء.":"The robot’s head is flying in the air! Put it right on top of the body, so no shape hangs in the air.","مشروع: بيت روبو 🏠":"Project: Robo’s house 🏠","مشروع: ابنِ بيتًا لروبو: جسمًا (مكعب)، وسقفًا فوقه (هرم أو سقف)، وبابًا (فتحة) في الجسم، ولونين أو أكثر.":"Project: build a house for Robo: a body (cube), a roof on top (pyramid or roof), a door (hole) in the body, and two colours or more.","تدريب: لوح 60 × 40 × 5 📐":"Practice: a 60 × 40 × 5 board 📐","تدريب: اصنع لوحًا (مكعب) عرضه 60 ملّي، وعمقه 40، وارتفاعه 5 بالضبط. اضغط على النقاط واكتب الأرقام.":"Practice: make a board (cube) exactly 60 mm wide, 40 deep and 5 high. Click the dots and type the numbers.","تدريب: كرة فوق المنتصف 🎯":"Practice: a sphere over the middle 🎯","تدريب: ضع كرة (Sphere) فوق المكعب تمامًا: قاعدتها على سطحه العلوي، ومركزها فوق منتصفه (x = 0 و z = 0). استعمل خانات الموضع (Position).":"Practice: put a sphere right on top of the cube: its base on the cube’s top face and its centre over the middle (x = 0 and z = 0). Use the position boxes.","🔧 أصلح خطأً واحدًا: القطعة الغارقة":"🔧 Fix one bug: the sunken part","هذه القطعة لن تُطبع صحيحة! جزء منها غارق تحت السطح (y أقل من 0). الطابعة تبدأ من السطح، فاجعل قاعدتها على السطح تمامًا (y = 0).":"This part won’t print right! Part of it is sunk under the floor (y less than 0). The printer starts from the floor, so put its base exactly on the floor (y = 0).","تحدٍّ: هرم الدرجات 🏆":"Challenge: the step pyramid 🏆","تحدٍّ: ثلاثة مكعبات بعضها فوق بعض في المنتصف: عرض الأول 60، والثاني 40، والثالث 20 (والعمق مثل العرض)، وارتفاع كل واحد 10.":"Challenge: three cubes on top of each other in the middle: the first 60 wide, the second 40 and the third 20 (depth the same as width), each 10 high.","تدريب: مسطرة بثلاث فتحات 📏":"Practice: a ruler with three holes 📏","تدريب: في هذا اللوح ضع 3 فتحات دائرية (Holes) قطر كل واحدة 5 ملّي أو أكثر، لتعلّقه بثلاثة مسامير.":"Practice: on this board put 3 round holes, each 5 mm across or more, to hang it on three nails.","🔧 أصلح خطأً واحدًا: فتحة الموتور الصغيرة":"🔧 Fix one bug: the small motor hole","الموتور قطره 24 ملّي، لكن الفتحة في الحامل أصغر منه، فلن يدخل! اختر الفتحة واجعل قطرها 24 (العرض والعمق).":"The motor is 24 mm across, but the hole in the holder is smaller, so it won’t fit! Select the hole and make it 24 across (width and depth).","مسافة السماح (Tolerance) 🖨":"Tolerance 🖨","الطابعة ثلاثية الأبعاد ليست دقيقة 100٪: الفتحة تخرج أضيق قليلًا. لذلك نزيد الفتحة نصف ملّي تقريبًا (مسافة السماح). اصنع حاملًا لموتور قطره 24: اجعل الفتحة بين 24.3 و 25 ملّي.":"A 3D printer isn’t 100% exact: holes come out a little tighter. So we make the hole about half a millimetre bigger (the tolerance). Make a holder for a 24 mm motor: make the hole between 24.3 and 25 mm.","تدريب: عجلة العربية 🛞":"Practice: the car’s wheel 🛞","تدريب: اصنع عجلة: أسطوانة قطرها 40 ملّي وارتفاعها 8، وفي منتصفها فتحة للمحور قطرها 5 ملّي.":"Practice: make a wheel: a cylinder 40 mm across and 8 high, with a 5 mm hole for the axle in its middle.","مشروع: حامل حساس المسافة 📡":"Project: a distance sensor holder 📡","مشروع: حساس المسافة (Ultrasonic) له «عينان» قطر كل واحدة 16 ملّي، والمسافة بين مركزيهما 26 ملّي. صمّم لوحًا فيه فتحتان بهذين المقاسين بالضبط، فيدخل الحساس فيه.":"Project: the distance sensor (ultrasonic) has two «eyes», each 16 mm across, 26 mm apart centre to centre. Design a board with two holes of exactly these sizes so the sensor fits in it.","🎉 برافو! التصميم تمام":"🎉 Well done! The design is right","اظهر لوحة الأشكال":"Show the shapes panel","اخفي لوحة الأشكال وكبّر مكان الرسم":"Hide the shapes panel and enlarge the drawing area","كبّر مكان الرسم على الشاشة كلها":"Enlarge the drawing area to the whole screen","فك التثبيت":"Unpin","ثبّت الشريط في مكانه":"Pin the bar","افتح شريط الأدوات":"Open the toolbar","أغلق شريط الأدوات":"Close the toolbar","📌 الشريط مثبّت. اضغط 📌 لفك التثبيت":"📌 The bar is pinned. Click 📌 to unpin"});Nc({"re:^☑ اخترت ([0-9٠-٩]+) أشكال — اضغط مطوّل على شكل تاني تضيفه$":"☑ $1 shapes selected — long-press another shape to add it","☑ اضغط مطوّل على شكل تاني عشان تختار الاتنين":"☑ Long-press another shape to select both","re:^اخترت ([0-9٠-٩]+) (أشكال|شكل)$":"$1 selected","re:^اخترت ([0-9٠-٩]+) أشكال(.*)$":"$1 shapes selected$2","re:^رصّ ([0-9٠-٩]+) أشكال$":"Align $1 shapes","re:^([0-9٠-٩]+) شكل$":"$1 shapes","العرض بالملّي":"Width in mm","الارتفاع بالملّي":"Height in mm","العمق بالملّي":"Depth in mm","⊕ جمّعهم":"⊕ Group them","«جمّعهم» بيخليهم قطعة واحدة تتحرك مع بعض.":"«Group them» makes them one part that moves together.","رصّهم (Align)":"Align them",أدوات:"Tools","اسحبني حوالين الشكل عشان تلفّه بأي زاوية":"Drag me around the shape to turn it to any angle","لف بأي زاوية":"Turn to any angle","زاوية الدوران لكل ضغطة":"Turn angle per click","زاوية الدوران بالدرجات":"Turn angle in degrees","دوران حول المحور X":"Turn around the X axis","دوران حول المحور Y":"Turn around the Y axis","دوران حول المحور Z":"Turn around the Z axis","حول X":"Around X","حول Y":"Around Y","حول Z":"Around Z","نسخة (Ctrl+D)":"Duplicate (Ctrl+D)",نسخة:"Copy","حذف (Delete)":"Delete (Delete)",حذف:"Delete",الأداة:"Tool","✏️ رسم حر":"✏️ Free draw","🖊️ قلم":"🖊️ Pen",منحني:"Curved","مساحة الرسم: ١٠٠ × ١٠٠ ملّي":"Drawing area: 100 × 100 mm",الارتفاع:"Height",ملّي:"mm","سُمك الخط":"Line width","↶ آخر نقطة":"↶ Last point","🧹 امسح":"🧹 Clear",إلغاء:"Cancel","✓ حطه في التصميم":"✓ Put it in the design",نص:"Text","اسحب لنقل شريط الأدوات":"Drag to move the toolbar","ثبّت الشريط في مكانه":"Pin the bar","تصميم 3D: صمّم مجسّمات 3D واطبعها زي تنكركاد":"Robo CAD: design 3D models and print them, like Tinkercad","re:^📋 اتنسخ الشكل\\. دوس Ctrl\\+V عشان تلزقه$":"📋 The shape was copied. Press Ctrl+V to paste it","re:^📋 اتنسخ ([0-9٠-٩]+) أشكال\\. دوس Ctrl\\+V عشان تلزقه$":"📋 $1 shapes copied. Press Ctrl+V to paste them"});Nc({"روبو كاد: تصميم 3D زي تنكركاد (Tinkercad) بالعربي للأطفال وطباعة ثلاثية الأبعاد":"Robo CAD: 3D design like Tinkercad for kids, and 3D printing","أدوات الشكل: دوران حول X و Y و Z، نسخة، حذف":"Shape tools: turn around X, Y and Z, duplicate, delete","لسه مفيش تصاميم":"No designs yet"});Nc({"حامل قلم ✏️":"A pen holder ✏️","صمّم حامل قلم: أسطوانة قطرها 30 ملّي وارتفاعها 40، وفي نصّها فتحة (Hole) قطرها بين 12 و 20 ملّي يدخل فيها القلم.":"Design a pen holder: a cylinder 30 mm across and 40 high, with a hole 12 to 20 mm across in its middle for the pen.","لوحة اسم 🏷":"A name plate 🏷","لوح 80 × 20 × 4 ملّي، وفوقه اسمك بالنص (Text) واقف على سطحه، مش طاير ولا غارق.":"A plate 80 × 20 × 4 mm, with your name in Text standing on its top, not floating and not sunk.","🔧 أصلح خطأً واحدًا: العجلتين مش زي بعض":"🔧 Fix one mistake: the two wheels are not the same","العربية هتمشي عوجة! العجلة اليمين قطرها 40 والشمال أصغر. خلّي الاتنين 40 ملّي بالظبط (العرض والعمق).":"The car will drive crooked! The right wheel is 40 across and the left one is smaller. Make both exactly 40 mm (width and depth).","مشروع: حامل الأردوينو 🛠":"Project: an Arduino mount 🛠","مشروع: لوح يتركّب عليه الأردوينو: 70 × 55 ملّي على الأقل وسُمكه من 3 لـ 5، وفيه 4 فتحات للمسامير قطر كل واحدة 3 ملّي أو أكتر.":"Project: a plate the Arduino is fixed on: at least 70 × 55 mm, 3 to 5 thick, with 4 screw holes, each 3 mm across or more.","هنا الأشكال. اضغط على شكل فيظهر على السطح":"Here are the shapes. Tap one and it appears on the board","اضغط على شكل لتختاره، فتظهر الألوان على الجانب. اختر لونًا":"Tap a shape to pick it, and the colours show at the side. Pick a colour","«حرّك»: اسحب السهم الأخضر إلى أعلى لترفع الشكل فوق الآخر":"«Move»: drag the green arrow up to lift the shape onto the other one","«المقاس»: اختر الشكل واسحب النقاط لتكبّره، أو اكتب الارتفاع":"«Size»: pick the shape and drag the dots to make it bigger, or type the height","اختر الشكل أولًا، ثم افتح «🛠 أدوات» فوقه واضغط «حول X»":"Pick the shape first, then open «🛠 Tools» above it and press «around X»","هذه الفتحات (Hole): اسحب واحدة وضعها داخل الشكل فتثقبه وحدها":"These are the holes: drag one inside the shape and it cuts it by itself","«تحديد متعدد»: اضغطه، ثم اضغط على الشكلين":"«Multi-select»: press it, then tap both shapes","ثم «جمّع»: يصير الشكلان قطعة واحدة":"Then «Group»: the two shapes become one piece","«نسخة»: اختر الشكل واضغطها فتظهر نسخة مثله تمامًا":"«Copy»: pick the shape and press it, and a copy just like it appears","اختر «مكعب» من هنا":"Choose «Box» here","ثم اكتب المقاس بالملّي: العرض والعمق والارتفاع":"Then type the size in mm: width, depth and height","اختر «أسطوانة»":"Choose «Cylinder»","المكان: X و Z صفر يعني في نصّ السطح، و Y الارتفاع عن السطح":"Place: X and Z at zero means the centre of the bed, Y is the height above it","الفتحات هنا: ضع فتحة دائرة داخل الشكل المسطّح":"The holes are here: put a round hole inside the flat shape","ثم اضغط «✂️ نفّذ الفتحة»":"Then press «✂️ Make the hole»","فتحة دائرة، واجعل عرضها وعمقها 24 ملّي":"A round hole, 24 mm wide and deep"});Lg();const B=n=>document.getElementById(n),GE="٠١٢٣٤٥٦٧٨٩",Cn=n=>Ir?String(n):String(n).replace(/\d/g,t=>GE[t]);function pi(n){const t=new Gr;return n.forEach(([e,i],s)=>s?t.lineTo(e,i):t.moveTo(e,i)),t.closePath(),t}const mc=(n,t,e)=>new Hc(n,e?{depth:Math.max(.2,t-2*e),bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:5,curveSegments:24}:{depth:t,bevelEnabled:!1,curveSegments:24});function mi(n,t,e){const i=mc(n,t,Math.min(e||0,t/2-.1));return i.rotateX(-Math.PI/2),i}const Gi=33;function Dm(n,t){n=Math.max(3,Math.min(Gi,n|0));const e=n>=Gi;if(!t)return e?new De(10,10,20,64):new De(10,10,20,n);const i=new Gr;if(e)i.absarc(0,0,10,0,Math.PI*2,!1);else for(let s=0;s<n;s++){const r=Math.PI/2+s*2*Math.PI/n;s?i.lineTo(Math.cos(r)*10,Math.sin(r)*10):i.moveTo(Math.cos(r)*10,Math.sin(r)*10)}return mi(i,20,Math.min(t,9))}const gn={box:{ar:"مكعب",rd:1,make:n=>n?new KS(20,20,20,5,Math.min(n,9.5)):new _e(20,20,20)},cyl:{ar:"أسطوانة",rd:1,sides:1,make:()=>new De(10,10,20,48)},sphere:{ar:"كورة",make:()=>new Zr(10,48,32)},cone:{ar:"مخروط",sides:1,make:()=>new De(0,10,20,48)},pyramid:{ar:"هرم",make:()=>{const n=new De(0,20/Math.SQRT2,20,4);return n.rotateY(Math.PI/4),n}},roof:{ar:"سقف",rd:1,make:n=>mc(pi([[-10,-10],[10,-10],[0,10]]),20,Math.min(n||0,4))},tri:{ar:"مثلث",poly:3},pent:{ar:"خماسي",poly:5},hex:{ar:"سداسي",poly:6},hept:{ar:"سباعي",poly:7},oct:{ar:"ثماني",poly:8},oval:{ar:"بيضاوي",rd:1,make:n=>{const t=new Gr;return t.absellipse(0,0,14,9,0,Math.PI*2,!1),mi(t,20,n)}},rhomb:{ar:"معيّن",rd:1,make:n=>mi(pi([[0,-12],[8,0],[0,12],[-8,0]]),6,n)},kite:{ar:"طيارة ورق",rd:1,make:n=>mi(pi([[0,-13],[9,4],[0,9],[-9,4]]),6,n)},tube:{ar:"ماسورة",make:()=>new Or([[6,-10],[10,-10],[10,10],[6,10],[6,-10]].map(([n,t])=>new Q(n,t)),48)},torus:{ar:"حلقة",make:()=>{const n=new ss(7,3,24,64);return n.rotateX(Math.PI/2),n}},star:{ar:"نجمة",rd:1,make:n=>{const t=[];for(let e=0;e<10;e++){const i=e%2?4.5:10,s=Math.PI/2+e*Math.PI/5;t.push([Math.cos(s)*i,Math.sin(s)*i])}return mi(pi(t),6,Math.min(n||0,1.2))}},heart:{ar:"قلب",rd:1,make:n=>{const t=new Gr;return t.moveTo(0,-9),t.bezierCurveTo(-4,-5,-11,-1,-10,4),t.bezierCurveTo(-9,9,-2,10,0,5),t.bezierCurveTo(2,10,9,9,10,4),t.bezierCurveTo(11,-1,4,-5,0,-9),mi(t,6,n)}},wedge:{ar:"منحدر",rd:1,make:n=>mc(pi([[-10,-10],[10,-10],[-10,10]]),20,Math.min(n||0,3))},halfsph:{ar:"نص كورة",make:()=>{const n=[new Q(0,0)];for(let t=0;t<=24;t++){const e=t/24*Math.PI/2;n.push(new Q(t===24?0:Math.cos(e)*10,Math.sin(e)*10))}return new Or(n,48)}},capsule:{ar:"كبسولة",make:()=>new sh(6,8,10,32)},wheel:{ar:"عجلة",make:()=>{const n=new Or([[2.5,-3],[10,-3],[10,3],[2.5,3],[2.5,-3]].map(([t,e])=>new Q(t,e)),48);return n.rotateZ(Math.PI/2),n}},gear:{ar:"ترس",rd:1,make:n=>{const t=[];for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=Math.PI/12;[[8,o-a*.55],[10,o-a*.3],[10,o+a*.3],[8,o+a*.55]].forEach(([c,l])=>t.push([Math.cos(l)*c,Math.sin(l)*c]))}const i=pi(t),s=new Oo;return s.absarc(0,0,2.5,0,Math.PI*2,!0),i.holes.push(s),mi(i,6,Math.min(n||0,.8))}},arch:{ar:"بوابة",rd:1,make:n=>{const t=[[-10,-10],[-5,-10]];for(let e=0;e<=16;e++){const i=Math.PI-e/16*Math.PI;t.push([Math.cos(i)*5,-3+Math.sin(i)*5])}return t.push([5,-10],[10,-10],[10,10],[-10,10]),mc(pi(t),10,Math.min(n||0,2))}},plus:{ar:"علامة +",rd:1,make:n=>mi(pi([[-3,-10],[3,-10],[3,-3],[10,-3],[10,3],[3,3],[3,10],[-3,10],[-3,3],[-10,3],[-10,-3],[-3,-3]]),6,Math.min(n||0,1.4))}},Di=(n,t,e,i)=>({t:"box",s:n,p:t,c:e,r:[0,0,0]}),Ts=(n,t,e,i)=>({t:"cyl",s:n,p:t,c:e,r:i||[0,0,0]}),fo=Math.PI/2,Vi={robo:{ar:"روبو",parts:[Ts([.5,.3,.5],[-9,5,0],"#3A3F4B",[0,0,fo]),Ts([.5,.3,.5],[9,5,0],"#3A3F4B",[0,0,fo]),Di([1.2,1.1,.8],[0,17,0],"#1E7BFF"),Di([.2,.6,.25],[-14,18,0],"#FF8A1F"),Di([.2,.6,.25],[14,18,0],"#FF8A1F"),Di([1,.8,.8],[0,36,0],"#00B8D9"),Ts([.2,.1,.2],[-4,37,9],"#FFFFFF",[fo,0,0]),Ts([.2,.1,.2],[4,37,9],"#FFFFFF",[fo,0,0]),Di([.4,.1,.1],[0,31.5,8.5],"#3A3F4B"),Ts([.1,.3,.1],[0,47,0],"#3A3F4B"),{t:"sphere",s:[.25,.25,.25],p:[0,52.5,0],c:"#E5484D",r:[0,0,0]}]},car:{ar:"عربية",parts:[Di([2.4,.4,1.4],[0,9,0],"#E5484D"),Di([1.2,.6,1.2],[-3,19,0],"#FFC93C"),...[[-14,-17],[14,-17],[-14,17],[14,17]].map(([n,t])=>Ts([.7,.3,.7],[n,7,t],"#3A3F4B",[fo,0,0]))]},house:{ar:"بيت",parts:[Di([1.6,1.2,1.4],[0,12,0],"#FFC93C"),{t:"roof",s:[1.7,.8,1.5],p:[0,32,0],c:"#E5484D",r:[0,0,0]},Di([.4,.6,.1],[0,6,14.5],"#8B5A2B")]},tree:{ar:"شجرة",parts:[Ts([.4,1,.4],[0,10,0],"#8B5A2B"),{t:"cone",s:[1.6,1.4,1.6],p:[0,34,0],c:"#18B37E",r:[0,0,0]}]}},Cc=()=>getComputedStyle(document.body).fontFamily||"Tahoma, Arial, sans-serif",yo=new Map;function Im(n,t){const e=t?Lp(t):null,i=120,s=document.createElement("canvas"),r=s.getContext("2d"),o=e?e[2]+" "+i+'px "'+e[0]+'", '+Cc():"800 "+i+"px "+Cc(),a=/[\u0600-\u06FF]/.test(n);r.font=o;const c=Math.ceil(r.measureText(n).width)+24,l=Math.ceil(i*1.6);s.width=Math.max(8,c),s.height=l,r.font=o,r.direction=a?"rtl":"ltr",r.textAlign="center",r.textBaseline="middle",r.fillStyle="#000",r.fillText(n,s.width/2,l/2);const u=s.width,f=s.height,h=r.getImageData(0,0,u,f).data,d=(M,L)=>M>=0&&L>=0&&M<u&&L<f&&h[(L*u+M)*4+3]>110,g=new Map,y=(M,L)=>M+","+L,m=(M,L,I,O)=>{const D=y(M,L);(g.get(D)||g.set(D,[]).get(D)).push([I,O])};for(let M=0;M<f;M++)for(let L=0;L<u;L++)d(L,M)&&(d(L,M-1)||m(L,M,L+1,M),d(L+1,M)||m(L+1,M,L+1,M+1),d(L,M+1)||m(L+1,M+1,L,M+1),d(L-1,M)||m(L,M+1,L,M));const p=[];for(const[M,L]of g)for(;L.length;){const[I,O]=M.split(",").map(Number);let[D,F]=[I,O],[k,W]=L.shift();const q=[[I,O]];for(let V=0;V<2e5;V++){const tt=k-D,et=W-F;if(D=k,F=W,D===I&&F===O)break;q.push([D,F]);const ut=g.get(y(D,F));if(!ut||!ut.length)break;let Z=0;if(ut.length>1){const nt=[[-et,tt],[tt,et],[et,-tt]];Z=Math.max(0,ut.findIndex(([yt,Tt])=>yt-D===nt[0][0]&&Tt-F===nt[0][1]))}[k,W]=ut.splice(Z,1)[0]}q.length>3&&p.push(q)}const _=(M,L)=>{if(M.length<3)return M;const[I,O]=[M[0],M[M.length-1]];let D=0,F=0;for(let k=1;k<M.length-1;k++){const[W,q]=M[k],V=Math.abs((O[1]-I[1])*W-(O[0]-I[0])*q+O[0]*I[1]-O[1]*I[0])/(Math.hypot(O[0]-I[0],O[1]-I[1])||1);V>F&&(F=V,D=k)}return F>L?_(M.slice(0,D+1),L).slice(0,-1).concat(_(M.slice(D),L)):[I,O]},x=22/i,v=p.map(M=>{const L=Math.floor(M.length/2);return _(M.slice(0,L+1),.9).slice(0,-1).concat(_(M.slice(L).concat([M[0]]),.9).slice(0,-1)).map(([O,D])=>new Q((O-u/2)*x,(f/2-D)*x))}).filter(M=>M.length>=3),E=M=>M.reduce((L,I,O)=>L+I.x*M[(O+1)%M.length].y-M[(O+1)%M.length].x*I.y,0)/2,T=(M,L)=>{let I=!1;for(let O=0,D=L.length-1;O<L.length;D=O++){const F=L[O],k=L[D];F.y>M.y!=k.y>M.y&&M.x<(k.x-F.x)*(M.y-F.y)/(k.y-F.y)+F.x&&(I=!I)}return I},b=v.filter(M=>E(M)<0),P=v.filter(M=>E(M)>0),S=b.map(M=>new Gr(M));return P.forEach(M=>{let L=-1,I=1/0;b.forEach((O,D)=>{const F=-E(O);F<I&&T(M[0],O)&&(I=F,L=D)}),L>=0&&S[L].holes.push(new Oo(M))}),S}function Fm(n,t){const e=n+"|"+(t||"");if(yo.has(e))return yo.get(e);if(t){const o=Lp(t);document.fonts.check(o[2]+' 120px "'+o[0]+'"',n)||Xo(t,n).then(()=>{document.fonts.check(o[2]+' 120px "'+o[0]+'"',n)&&(yo.delete(e),Co.clear(),Re())})}const i=Im(n||"?",t),s=i.length?new Hc(i,{depth:5,bevelEnabled:!1,curveSegments:1}):new _e(10,10,5);s.computeBoundingBox();const r=new w;return s.boundingBox.getCenter(r),s.translate(-r.x,-r.y,-r.z),s.computeBoundingBox(),s.computeVertexNormals(),yo.set(e,s),s}const ms={},yi={},zu=n=>{n.computeBoundingBox();const t=new w;return n.boundingBox.getCenter(t),n.translate(-t.x,-t.y,-t.z),n.computeBoundingBox(),n.computeVertexNormals(),n},uu=new Map;function VE(n){const t=n.n,e=n.rd||0;if(!t&&!e&&ms[n.t])return ms[n.t];const i=n.t+"|"+(t||"")+"|"+e;if(uu.has(i))return uu.get(i);let s;const r=gn[n.t];return n.t==="poly"||n.t==="cyl"&&(t||e)?s=Dm(t||Gi,e):n.t==="cone"?s=t&&t<Gi?new De(0,10,20,t):gn.cone.make():r&&r.make?s=r.make(e):s=ms[n.t],s=zu(s),uu.set(i,s),s}for(const n in gn){const t=gn[n].poly?Dm(gn[n].poly,0):gn[n].make(0);t.computeBoundingBox();const e=new w;t.boundingBox.getCenter(e),t.translate(-e.x,-e.y,-e.z),t.computeBoundingBox(),t.computeVertexNormals(),ms[n]=t;const i=new w;t.boundingBox.getSize(i),yi[n]=i}const Um={box:'<rect x="10" y="14" width="26" height="26" rx="2" fill="#4F8BFF"/><path d="M10 14l8-8h26l-8 8z" fill="#8FB6FF"/><path d="M36 14l8-8v26l-8 8z" fill="#2E64D6"/>',cyl:'<ellipse cx="24" cy="12" rx="14" ry="5" fill="#FFB547"/><path d="M10 12v24a14 5 0 0 0 28 0V12a14 5 0 0 1-28 0z" fill="#F08C00"/>',sphere:'<circle cx="24" cy="24" r="16" fill="#18B37E"/><circle cx="18" cy="18" r="5" fill="#7FE3B8"/>',cone:'<path d="M24 6L38 38a14 5 0 0 1-28 0z" fill="#E5484D"/><ellipse cx="24" cy="38" rx="14" ry="5" fill="#B5262B"/>',pyramid:'<path d="M24 6L8 36l16 6z" fill="#F7C948"/><path d="M24 6l16 30-16 6z" fill="#D4A017"/>',roof:'<path d="M18 16L34 8L44 30L28 40z" fill="#7A3FB0"/><path d="M4 40L18 16L28 40z" fill="#B06AE0"/><path d="M18 16L34 8" stroke="#E2C6F7" stroke-width="1.5"/>',tube:'<ellipse cx="24" cy="12" rx="14" ry="5" fill="#9AA6B8"/><ellipse cx="24" cy="12" rx="7" ry="2.5" fill="#EAF0FB"/><path d="M10 12v24a14 5 0 0 0 28 0V12a14 5 0 0 1-28 0z" fill="#6B778A"/>',torus:'<ellipse cx="24" cy="24" rx="17" ry="9" fill="#FF7AB6"/><ellipse cx="24" cy="23" rx="8" ry="3.5" fill="#EAF0FB"/>',star:'<path d="M24 5l5.6 12 13 1.4-9.8 8.8 2.8 12.8L24 33.6 12.4 40l2.8-12.8L5.4 18.4l13-1.4z" fill="#FFC93C"/>',heart:'<path d="M24 41S7 30 7 18a8.5 8.5 0 0 1 17-2 8.5 8.5 0 0 1 17 2c0 12-17 23-17 23z" fill="#FF4D6D"/>',wedge:'<path d="M8 40h26V14z" fill="#18B37E"/><path d="M34 14l8-6v26l-8 6z" fill="#0E8A60"/><path d="M8 40L34 14l8-6L16 34z" fill="#5FD6A8"/>',halfsph:'<path d="M6 34a18 18 0 0 1 36 0z" fill="#1E7BFF"/><ellipse cx="24" cy="34" rx="18" ry="5" fill="#1559C4"/><circle cx="17" cy="24" r="4" fill="#8FB6FF"/>',hex:'<path d="M16 8h16l8 8v16l-8 8H16l-8-8V16z" fill="#5B3DF5"/><path d="M16 8h16l8 8H8z" fill="#9C88FF"/>',tri:'<path d="M24 6L42 40H6z" fill="#7CC63B"/><path d="M24 6L42 40H30z" fill="#5A9E22"/>',pent:'<path d="M24 5l18 13-7 22H13L6 18z" fill="#8B5A2B"/><path d="M24 5l18 13-7 22H24z" fill="#6E4520"/>',hept:'<path d="M24 5l14 7 4 15-10 13H18L8 27l4-15z" fill="#FF1FA6"/><path d="M24 5l14 7 4 15-10 13H24z" fill="#D10F86"/>',oct:'<path d="M17 5h14l10 10v14L31 41H17L7 29V15z" fill="#FF8A1F"/><path d="M24 5h7l10 10v14L31 41h-7z" fill="#E06E00"/>',oval:'<ellipse cx="24" cy="24" rx="20" ry="13" fill="#7B2FD6"/><ellipse cx="18" cy="19" rx="7" ry="3.5" fill="#B48CF0"/>',rhomb:'<path d="M24 4l11 20-11 20-11-20z" fill="#22E5F0"/><path d="M24 4l11 20-11 20z" fill="#12B8C2"/>',kite:'<path d="M24 44L39 15L24 4L9 15z" fill="#FF4F7B"/><path d="M24 44L39 15L24 4z" fill="#D9325D"/>',capsule:'<rect x="15" y="5" width="18" height="38" rx="9" fill="#FF7AB6"/><rect x="19" y="9" width="5" height="14" rx="2.5" fill="#FFC2DD"/>',wheel:'<circle cx="24" cy="24" r="17" fill="#3A3F4B"/><circle cx="24" cy="24" r="10" fill="#9AA6B8"/><circle cx="24" cy="24" r="3.5" fill="#3A3F4B"/>',gear:'<path d="M21 4h6l1 5 4 2 4-3 4 4-3 4 2 4 5 1v6l-5 1-2 4 3 4-4 4-4-3-4 2-1 5h-6l-1-5-4-2-4 3-4-4 3-4-2-4-5-1v-6l5-1 2-4-3-4 4-4 4 3 4-2z" fill="#9AA6B8"/><circle cx="24" cy="24" r="6" fill="#EAF0FB"/>',arch:'<path d="M6 42V8h36v34H31V28a7 7 0 0 0-14 0v14z" fill="#FF8A1F"/>',plus:'<path d="M19 6h10v13h13v10H29v13H19V29H6V19h13z" fill="#E5484D"/>',robo:'<rect x="13" y="6" width="22" height="16" rx="3" fill="#00B8D9"/><circle cx="19" cy="14" r="2.6" fill="#fff"/><circle cx="29" cy="14" r="2.6" fill="#fff"/><path d="M24 6V2" stroke="#3A3F4B" stroke-width="2"/><circle cx="24" cy="2.5" r="2" fill="#E5484D"/><rect x="11" y="23" width="26" height="15" rx="3" fill="#1E7BFF"/><rect x="5" y="25" width="5" height="10" rx="2" fill="#FF8A1F"/><rect x="38" y="25" width="5" height="10" rx="2" fill="#FF8A1F"/><circle cx="16" cy="42" r="4.5" fill="#3A3F4B"/><circle cx="32" cy="42" r="4.5" fill="#3A3F4B"/>',car:'<rect x="14" y="10" width="16" height="12" rx="2" fill="#FFC93C"/><rect x="4" y="20" width="40" height="12" rx="3" fill="#E5484D"/><circle cx="13" cy="35" r="6" fill="#3A3F4B"/><circle cx="35" cy="35" r="6" fill="#3A3F4B"/>',house:'<path d="M4 22L24 6l20 16z" fill="#E5484D"/><rect x="9" y="22" width="30" height="20" fill="#FFC93C"/><rect x="20" y="30" width="8" height="12" fill="#8B5A2B"/>',tree:'<path d="M24 4L40 34H8z" fill="#18B37E"/><rect x="20" y="34" width="8" height="10" fill="#8B5A2B"/>'},fh=["#E5484D","#FF8A1F","#FFC93C","#18B37E","#1E7BFF","#5B3DF5","#FF7AB6","#8B5A2B","#FFFFFF","#9AA6B8","#3A3F4B","#00B8D9"],Ht=B("c3"),Pn=B("stage3"),dh=new th({canvas:Ht,antialias:!0,preserveDrawingBuffer:!0});dh.setPixelRatio(Math.min(2,devicePixelRatio));const _n=new lm;_n.background=new oe("#EAF0FB");const qt=new In(45,1,1,5e3),Nm=new w(170,150,210);qt.position.copy(Nm);_n.add(new FS("#ffffff","#b8c4dc",1.1));const Om=new OS("#ffffff",1.4);Om.position.set(120,260,160);_n.add(Om);const ph=new pt(new qo(200,200),new Zo({color:"#FFFFFF",roughness:1}));ph.rotation.x=-Math.PI/2;ph.position.y=-.05;_n.add(ph);const WE=new _m(200,40,"#C9D5EA","#DDE5F3");_n.add(WE);const Bm=new _m(200,20,"#9FB2D6","#9FB2D6");Bm.position.y=.02;_n.add(Bm);const Pt=new HS(qt,Ht);Pt.target.set(0,10,0);Pt.enableDamping=!0;Pt.mouseButtons={LEFT:-1,MIDDLE:es.PAN,RIGHT:es.ROTATE};Pt.maxDistance=4e3;Pt.minDistance=6;Pt.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN};Pt.update();Ht.addEventListener("wheel",n=>{if(!Pt.enabled||n.ctrlKey&&Math.abs(n.deltaY)<1)return;n.preventDefault(),n.stopImmediatePropagation();const t=Math.max(-150,Math.min(150,n.deltaY*(n.deltaMode===1?33:n.deltaMode===2?400:1))),e=qt.position.clone().sub(Pt.target),i=Wi.clamp(e.length()*Math.pow(1.0006,t),Pt.minDistance,Pt.maxDistance);qt.position.copy(Pt.target).add(e.setLength(i)),qt.updateMatrixWorld(),Pt.update()},{capture:!0,passive:!1});Ht.addEventListener("pointerdown",n=>{const t=n.pointerType!=="mouse";Pt.rotateSpeed=t?.55:1,Pt.zoomSpeed=t?1.2:1},!0);{const n=new Map;let t=null;const e=()=>{const s=[...n.values()];return[s.reduce((r,o)=>r+o[0],0)/s.length,s.reduce((r,o)=>r+o[1],0)/s.length]};Ht.addEventListener("pointerdown",s=>{s.pointerType!=="mouse"&&(n.set(s.pointerId,[s.clientX,s.clientY]),n.size>=3&&(Pt.enabled=!1,t=e(),s.stopImmediatePropagation()))},!0),Ht.addEventListener("pointermove",s=>{if(!n.has(s.pointerId)||(n.set(s.pointerId,[s.clientX,s.clientY]),!t||n.size<3))return;const r=e(),o=r[0]-t[0],a=r[1]-t[1];t=r;const c=Ht.clientHeight||1,l=qt.position.distanceTo(Pt.target),u=2*l*Math.tan(Wi.degToRad(qt.fov/2))/c,f=new w().setFromMatrixColumn(qt.matrix,0),h=new w().setFromMatrixColumn(qt.matrix,1),d=f.multiplyScalar(-o*u).add(h.multiplyScalar(a*u));qt.position.add(d),Pt.target.add(d),s.stopImmediatePropagation()},!0);const i=s=>{n.delete(s.pointerId)&&(n.size<3&&t&&(t=null,n.size===0&&(Pt.enabled=!0)),n.size===0&&(Pt.enabled=!0))};Ht.addEventListener("pointerup",i,!0),Ht.addEventListener("pointercancel",i,!0)}const wt=new GS(qt,Ht);wt.setSize(1.45);_n.add(wt);let Ho=matchMedia("(pointer:coarse)").matches;Ht.addEventListener("pointerdown",n=>{if(n.pointerType==="mouse"||(Ho||(Ho=!0,wt.setSize(1.9)),!wt.object||!wt.enabled||!wt.visible||n.button!==0||wt.dragging))return;const t=wt._getPointer(n);if(wt.pointerHover(t),wt.axis)return;const e=Ht.getBoundingClientRect();for(const i of[12,22,32])for(let s=0;s<8;s++){const r=s*Math.PI/4,o={x:t.x+Math.cos(r)*i/e.width*2,y:t.y+Math.sin(r)*i/e.height*2,button:0};if(wt.pointerHover(o),!!wt.axis){n.stopImmediatePropagation();try{Ht.setPointerCapture(n.pointerId)}catch{}Ht.addEventListener("pointermove",wt._onPointerMove),wt.pointerDown(t);return}}wt.axis=null},!0);Ho&&wt.setSize(1.9);const We=new Fe;_n.add(We);Pt.addEventListener("end",()=>{wt.object===We&&$.length===1&&!wt.dragging&&$o(te.get($[0]))});const zm=new w;let Lr=null,gc=null;function $o(n){n.updateMatrixWorld();const t=new pe().setFromObject(n),e=new w,i=new w;t.getCenter(e),t.getSize(i);const s=new w().subVectors(Pt.target,qt.position);s.y=0,s.lengthSq()<1e-6&&s.set(0,0,-1),s.normalize();const r=new w(-s.z,0,s.x),o=Math.hypot(i.x,i.z)/2+9;We.position.set(e.x+r.x*o,t.min.y,e.z+r.z*o),zm.subVectors(We.position,n.position)}const km={translate:1.45,rotate:1.1,scale:1};function Hm(){const n=$.length===1&&!Xt($[0]).lk?te.get($[0]):null;if(!n){wt.detach();return}wt.setSize(km[wt.mode]||1),wt.mode==="translate"?($o(n),wt.setTranslationSnap(null),wt.attach(We)):(wt.setTranslationSnap(hi||null),wt.attach(n)),wt.mode==="rotate"&&wt.detach(),wt.showX=wt.showZ=!0}const Vr=new zi;_n.add(Vr);function Gm(){const n=Pn.clientWidth,t=Pn.clientHeight;dh.setSize(n,t,!1),qt.aspect=n/Math.max(1,t),qt.updateProjectionMatrix()}new ResizeObserver(Gm).observe(Pn);Gm();let Vm=0;const Wm=()=>performance.now()<Vm;document.querySelector(".shapes").addEventListener("scroll",()=>{Vm=performance.now()+180},{passive:!0});(function n(){if(!Wm()){if(Pt.update(),wt.object===We&&!wt.dragging&&$.length===1){const t=te.get($[0]);t&&We.position.copy(t.position).add(zm)}KE&&(QE(),ui&&Qo()),dh.render(_n,qt)}requestAnimationFrame(n)})();let Rt=[],$=[];const yn=()=>Math.random().toString(36).slice(2,9),te=new Map,Gs=new HE;Gs.attributes=["position","normal"];Gs.useGroups=!1;const Co=new Map;function Xc(n){const t=new ae;return t.compose(new w(...n.p),new Oe().setFromEuler(new Xi(...n.r)),new w(...n.s)),t}function Xm(n){const t=new Ge,e=n.index?n.toNonIndexed():n;return t.setAttribute("position",e.getAttribute("position").clone()),t.computeVertexNormals(),t}function Ym(n){const t=JSON.stringify([n.kids,n.o]);if(Co.has(t))return Co.get(t);let e=null,i=null;for(const o of n.kids){const a=Xm(mh(o)),c=Xc(o);if(a.applyMatrix4(c),c.determinant()<0){const u=a.getAttribute("position");for(let f=0;f<u.count;f+=3){const h=u.getX(f+1),d=u.getY(f+1),g=u.getZ(f+1);u.setXYZ(f+1,u.getX(f+2),u.getY(f+2),u.getZ(f+2)),u.setXYZ(f+2,h,d,g)}a.computeVertexNormals()}const l=new wc(a);l.updateMatrixWorld(),o.h?i=i?Gs.evaluate(i,l,Tc):l:e=e?Gs.evaluate(e,l,Tc):l}const r=(e?i?Gs.evaluate(e,i,uh):e:i).geometry.clone();return r.translate(-n.o[0],-n.o[1],-n.o[2]),r.computeVertexNormals(),r.computeBoundingBox(),Co.set(t,r),r}const mh=n=>n.t==="group"?Ym(n):n.t==="text"?Fm(n.txt,n.fnt):n.t==="draw"?lg(n):VE(n),Ko=n=>{if(n.t!=="group"&&n.t!=="text"&&n.t!=="draw"&&!n.n&&!n.rd&&yi[n.t])return yi[n.t];const t=new w;return mh(n).boundingBox.getSize(t),t},Yc=new Zo({color:"#AEB7C6",transparent:!0,opacity:.6,roughness:.7,depthWrite:!1,side:pn});Yc.onBeforeCompile=n=>{const t=Math.min(2,devicePixelRatio||1).toFixed(2);n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (mod(gl_FragCoord.x + gl_FragCoord.y, 22.0 * `+t+") < 11.0 * "+t+") gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.97), 0.55);")};const XE=new jo({color:"#4A5568",transparent:!0,opacity:.85,depthWrite:!1}),hp=new Map,YE=n=>{let t=hp.get(n.uuid);return t||(t=new pS(n,25),hp.set(n.uuid,t)),t};function qE(n){return n.h?Yc:new Zo({color:n.c,roughness:.55,metalness:.05,side:pn})}const Ys=new Map;function fp(n,t){const e=Xm(n);if(e.applyMatrix4(t),t.determinant()<0){const s=e.getAttribute("position");for(let r=0;r<s.count;r+=3){const o=s.getX(r+1),a=s.getY(r+1),c=s.getZ(r+1);s.setXYZ(r+1,s.getX(r+2),s.getY(r+2),s.getZ(r+2)),s.setXYZ(r+2,o,a,c)}e.computeVertexNormals()}const i=new wc(e);return i.updateMatrixWorld(),i}const dp=n=>n.geometry.uuid+":"+n.matrixWorld.elements.map(t=>t.toFixed(2)).join(","),ku=n=>(n.geometry.boundingBox||n.geometry.computeBoundingBox(),n.geometry.boundingBox.clone().applyMatrix4(n.matrixWorld));function hu(n){const t=Ys.get(n);t&&(t.view.parent&&(t.view.parent.material.visible=!0,t.view.parent.remove(t.view)),t.view.geometry.dispose(),t.view.material.dispose(),Ys.delete(n))}function qc(){Vr.updateMatrixWorld(!0);const n=Rt.filter(t=>t.h&&te.has(t.id)).map(t=>{const e=te.get(t.id);return{m:e,box:ku(e)}});for(const t of Rt){const e=te.get(t.id);if(!e||t.h){hu(t.id);continue}const i=ku(e),s=n.filter(u=>u.box.intersectsBox(i));if(!s.length){hu(t.id);continue}const r=dp(e)+"|"+s.map(u=>dp(u.m)).join("|"),o=Ys.get(t.id);if(o&&o.key===r&&o.view.parent===e)continue;let a;try{let u=null;for(const f of s){const h=fp(f.m.geometry,f.m.matrixWorld);u=u?Gs.evaluate(u,h,Tc):h}a=Gs.evaluate(fp(e.geometry,e.matrixWorld),u,uh)}catch{continue}hu(t.id);const c=a.geometry.clone();c.applyMatrix4(e.matrixWorld.clone().invert()),c.computeVertexNormals(),c.computeBoundingBox();const l=new pt(c,e.material.clone());l.material.visible=!0,l.raycast=()=>{},l.renderOrder=1,e.material.visible=!1,e.add(l),Ys.set(t.id,{key:r,view:l})}Hu()}function qm(){if($.length!==1)return null;const n=Xt($[0]);if(!n||n.lk)return null;Vr.updateMatrixWorld(!0);const t=r=>ku(te.get(r)),e=(r,o)=>o.filter(a=>t(a.id).intersectsBox(t(r.id))),i=Rt.filter(r=>r.h&&te.has(r.id)),s=Rt.filter(r=>!r.h&&te.has(r.id));if(n.h){const r=e(n,s);return r.length?{solids:r,holesOf:o=>e(o,i)}:null}return Ys.has(n.id)?{solids:[n],holesOf:r=>e(r,i)}:null}function jE(){const n=qm();if(!n)return;const t=new Set,e=[];n.solids.forEach(i=>{const s=n.holesOf(i);if(!s.length)return;s.forEach(o=>t.add(o.id));const r=s.map(o=>{const a=JSON.parse(JSON.stringify(o));return a.id=yn(),a});Rt.push(...r),$=[i.id,...r.map(o=>o.id)],ia(!0),e.push($[0])}),Rt=Rt.filter(i=>!t.has(i.id)),Re(),$=e.slice(0,1),rn(),re(),ue("✂️ الفتحة اتنفّذت! الشكل بقى قطعة واحدة")}function Hu(){const n=B("pApplyHole");n&&(n.hidden=!qm())}B("pApplyHole").onclick=jE;let fu=0;function jc(){fu||(fu=setTimeout(()=>{fu=0,qc()},90))}function Re(){wt.detach(),te.forEach(n=>{Vr.remove(n),n.material!==Yc&&n.material.dispose()}),te.clear();for(const n of Rt){const t=new pt(mh(n),qE(n));if(t.position.set(...n.p),t.rotation.set(...n.r),t.scale.set(...n.s),t.userData.id=n.id,t.renderOrder=n.h?2:1,n.h){const e=new eh(YE(t.geometry),XE);e.raycast=()=>{},e.renderOrder=3,t.add(e)}Vr.add(t),te.set(n.id,t)}$=$.filter(n=>te.has(n)),rn(),qc()}function ZE(n){const t=te.get(n.id);n.p=t.position.toArray().map(kt),n.r=[t.rotation.x,t.rotation.y,t.rotation.z],n.s=t.scale.toArray()}const kt=n=>Math.round(n*10)/10,Xt=n=>Rt.find(t=>t.id===n);function ge(n){const t=te.get(n.id);return t.updateMatrixWorld(),new pe().setFromObject(t)}let Sn=[],An=-1;function re(n=!0){qc(),Sn=Sn.slice(0,An+1),Sn.push(JSON.stringify(Rt)),Sn.length>80&&Sn.shift(),An=Sn.length-1,Rh(),Vn?v1():n&&Yi(!1)}function jm(n){Rt=JSON.parse(n),$=$.filter(t=>Rt.some(e=>e.id===t)),Re(),rn(),Rh(),Yi(!1)}B("undoBtn").onclick=()=>{An>0&&(An--,jm(Sn[An]))};B("redoBtn").onclick=()=>{An<Sn.length-1&&(An++,jm(Sn[An]))};const Zm="robo-lab-3d";let Te=(()=>{try{return JSON.parse(localStorage.getItem(Zm))||null}catch{return null}})()||{cur:null,list:[]};const Jo=()=>{try{return localStorage.setItem(Zm,JSON.stringify(Te)),!0}catch{return!1}},gh=()=>Te.list.find(n=>n.id===Te.cur);function Yi(n){if(Vn)return;let t=gh();t||(t={id:yn(),name:Fn("تصميمي"),objs:[],t:0},Te.list.unshift(t),Te.cur=t.id),t.objs=Rt,t.name=(B("pname").value||"").trim()||Fn("تصميمي"),t.t=Date.now();const e=Jo();n&&ue(e?"💾 اتحفظ":"مقدرتش أحفظ على الجهاز ده")}function Go(n){const t=Te.list.find(e=>e.id===n);t&&(Te.cur=n,Jo(),B("pname").value=t.name,Rt=JSON.parse(JSON.stringify(t.objs||[])),$=[],Re(),Sn=[],An=-1,re(!1))}function $m(){Yi(!1);const n={id:yn(),name:Fn("تصميم")+" "+Cn(Te.list.length+1),objs:[],t:Date.now()};Te.list.unshift(n),Go(n.id)}B("pname").addEventListener("change",()=>Yi(!1));addEventListener("beforeunload",()=>Yi(!1));const Po=[];function rn(){Po.forEach(n=>_n.remove(n)),Po.length=0,$.forEach(n=>{const t=new zS(te.get(n),"#FF8A1F");_n.add(t),Po.push(t)}),Hm(),On(),Rh(),typeof Hu=="function"&&Hu()}function Si(){Po.forEach(n=>n.update())}function Nn(n,t){n?t?$=$.includes(n)?$.filter(e=>e!==n):$.concat(n):$=[n]:$=[],rn()}const vi=new Gc,pp=new Q;let si=null,ze=null,Pc=0,Rc=!1,As={id:null,t:0};function Km(n){const t=document.querySelector(".txtEdit");t&&t.remove();const e=ge(n),i=new w;e.getCenter(i),i.y=e.max.y;const s=i.project(qt),r=Ht.getBoundingClientRect(),o=Pn.getBoundingClientRect(),a=document.createElement("input");a.className="txtEdit",a.dir="auto",a.maxLength=24,a.value=n.txt||"",a.setAttribute("aria-label","عدّل النص"),a.style.left=r.left-o.left+(s.x+1)/2*r.width+"px",a.style.top=r.top-o.top+(1-s.y)/2*r.height+"px",Pn.appendChild(a),a.focus(),a.select();const c=n.txt;let l=0;a.addEventListener("input",()=>{clearTimeout(l),l=setTimeout(()=>{const h=a.value.trim().slice(0,24);h&&h!==n.txt&&Do(n,h,!1)},200)});let u=!1;const f=h=>{if(u)return;u=!0,clearTimeout(l);const d=a.value.trim().slice(0,24);a.remove(),h&&d?d!==n.txt?Do(n,d,!0):Sn[An]!==JSON.stringify(Rt)&&re():n.txt!==c&&Do(n,c,!1)};a.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Enter"?f(!0):h.key==="Escape"&&f(!1)}),a.addEventListener("blur",()=>f(!0)),ue("✍️ اكتب الكلام الجديد ودوس Enter")}const Ks=n=>{const t=Ht.getBoundingClientRect();pp.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),vi.setFromCamera(pp,qt)};let Gn=null;const Wr=document.createElement("div");Wr.className="marquee";Wr.hidden=!0;Pn.appendChild(Wr);Ht.addEventListener("contextmenu",n=>n.preventDefault());Ht.addEventListener("pointerdown",n=>{if(si=[n.clientX,n.clientY],n.button!==0||wt.axis)return;Ks(n);const t=vi.intersectObjects([...te.values()],!1)[0];if(!t){(n.pointerType==="mouse"||bn)&&(Gn={x:n.clientX,y:n.clientY,add:n.shiftKey||bn,moved:!1},Ht.setPointerCapture(n.pointerId),bn&&(Pt.enabled=!1,n.stopImmediatePropagation()));return}if(n.shiftKey||bn)return;const e=t.object.userData.id,i=Xt(e);if(!i)return;if(clearTimeout(Pc),Rc=!1,n.pointerType!=="mouse"){const a=$.slice();Pc=setTimeout(()=>{if(!(ze&&ze.moved)){Rc=!0,ze=null,Pt.enabled=!0,$=a.includes(e)?a.filter(c=>c!==e):a.concat(e),rn();try{navigator.vibrate&&navigator.vibrate(30)}catch{}ue($.length>1?"☑ اخترت "+Cn($.length)+" أشكال — اضغط مطوّل على شكل تاني تضيفه":"☑ اضغط مطوّل على شكل تاني عشان تختار الاتنين")}},480)}$.includes(e)||Nn(e);const s=$.map(Xt).filter(a=>a&&!a.lk);if(!s.length){i.lk&&ue("🔒 الشكل مقفول");return}const r=new Mn(new w(0,1,0),-t.point.y),o=new w;vi.ray.intersectPlane(r,o)&&(ze={plane:r,start:o,from:s.map(a=>[a,a.p.slice()]),moved:!1},Pt.enabled=!1,Ht.setPointerCapture(n.pointerId))});Ht.addEventListener("pointermove",n=>{if(Gn){const a=Pn.getBoundingClientRect(),c=Math.min(Gn.x,n.clientX),l=Math.min(Gn.y,n.clientY),u=Math.abs(n.clientX-Gn.x),f=Math.abs(n.clientY-Gn.y);u+f>6&&(Gn.moved=!0),Gn.moved&&(Wr.hidden=!1,Object.assign(Wr.style,{left:c-a.left+"px",top:l-a.top+"px",width:u+"px",height:f+"px"}));return}if(!ze)return;Ks(n);const t=new w;if(!vi.ray.intersectPlane(ze.plane,t))return;let e=t.x-ze.start.x,i=t.z-ze.start.z;Math.hypot(e,i)>.5&&(ze.moved=!0);const s=hi||0;s&&(e=Math.round(e/s)*s,i=Math.round(i/s)*s),ze.moved&&clearTimeout(Pc),ze.from.forEach(([a,c])=>{a.p[0]=kt(c[0]+e),a.p[2]=kt(c[2]+i),te.get(a.id).position.set(...a.p)});const[r,o]=Lc(ze.from.map(a=>a[0]));(r||o)&&ze.from.forEach(([a])=>{a.p[0]=kt(a.p[0]+r),a.p[2]=kt(a.p[2]+o),te.get(a.id).position.set(...a.p)}),Wo(!!(r||o)),Si(),Ht.style.cursor="grabbing"});Ht.addEventListener("pointerup",n=>{if(Gn){const i=Gn;if(Gn=null,Wr.hidden=!0,Pt.enabled=!0,i.moved){const s=Ht.getBoundingClientRect(),r=Math.min(i.x,n.clientX),o=Math.max(i.x,n.clientX),a=Math.min(i.y,n.clientY),c=Math.max(i.y,n.clientY),l=Rt.filter(u=>{const f=ge(u),h=new w;f.getCenter(h),h.project(qt);const d=s.left+(h.x+1)/2*s.width,g=s.top+(1-h.y)/2*s.height;return h.z<1&&d>=r&&d<=o&&g>=a&&g<=c}).map(u=>u.id);$=i.add?[...new Set($.concat(l))]:l,rn(),l.length&&ue("اخترت "+Cn(l.length)+(l.length>1?" أشكال":" شكل")),si=null;return}}if(clearTimeout(Pc),Wo(!1),Rc){Rc=!1,ze=null,Pt.enabled=!0,si=null;return}if(ze){const i=ze.moved;if(ze=null,Pt.enabled=!0,Ht.style.cursor="",i){si=null,re(),On();return}}if(!si||Math.hypot(n.clientX-si[0],n.clientY-si[1])>5||wt.dragging){si=null;return}si=null,Ks(n);const t=vi.intersectObjects([...te.values()],!1)[0],e=n.shiftKey||bn;if(t){const i=t.object.userData.id,s=performance.now(),r=Xt(i);if(!e&&As.id===i&&s-As.t<450&&r&&r.t==="text"&&!r.lk){As={id:null,t:0},$.includes(i)||Nn(i),Km(r);return}if(!e&&As.id===i&&s-As.t<450&&r&&r.t==="draw"&&!r.lk){As={id:null,t:0},$.includes(i)||Nn(i),wh("pen",r);return}As={id:i,t:s}}t&&!e&&$.includes(t.object.userData.id)||!t&&bn||Nn(t?t.object.userData.id:null,e)});Ht.addEventListener("pointermove",n=>{ze||wt.dragging||n.buttons||(Ks(n),Ht.style.cursor=vi.intersectObjects([...te.values()],!1).length?"grab":"")});const Vo=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,t])=>({k:"c",sx:n,sz:t})).concat([[0,-1],[1,0],[0,1],[-1,0]].map(([n,t])=>({k:"s",sx:n,sz:t})),[{k:"h",sx:0,sz:0}]),Kn=new zi;_n.add(Kn);const po=n=>new $s({color:n,depthTest:!1,depthWrite:!1,transparent:!0}),mp=new Zr(1,20,14),gp=new Zr(1,20,14,0,Math.PI);function $E(n){const t=new zi,e=new pt(mp,po(n==="c"?"#2B2F3A":"#FFFFFF"));if(e.scale.setScalar(1.4),e.renderOrder=20,t.add(e),n==="h"){const i=new pt(gp,po("#FFFFFF")),s=new pt(gp,po("#2B2F3A"));s.rotation.y=Math.PI,i.renderOrder=s.renderOrder=21,t.add(i,s),e.material=po("#FF8A1F")}else{const i=new pt(mp,po(n==="c"?"#FFFFFF":"#2B2F3A"));i.renderOrder=21,t.add(i)}return t}Vo.forEach(n=>Kn.add($E(n.k)));Kn.visible=!1;var KE=!0;let Gu="",ii=null,mn=null;const Zc=document.createElement("div");Zc.className="hlabel";Zc.hidden=!0;Pn.appendChild(Zc);function JE(n,t,e){const i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2;return n.k==="h"?new w(i,t.max.y,s):new w(n.sx?n.sx>0?t.max.x:t.min.x:i,t.min.y,n.sz?n.sz>0?t.max.z:t.min.z:s)}let Ro=!1;Ht.addEventListener("pointermove",n=>{if(n.pointerType!=="mouse"||mn||!ii||$.length!==1){Ro&&(Ro=!1);return}const t=[],e=ii;for(const o of[e.min.x,e.max.x])for(const a of[e.min.y,e.max.y])for(const c of[e.min.z,e.max.z])t.push(li(new w(o,a,c)));const i=t.map(o=>o[0]),s=t.map(o=>o[1]),r=70;Ro=n.clientX<Math.min(...i)-r||n.clientX>Math.max(...i)+r||n.clientY<Math.min(...s)-r-40||n.clientY>Math.max(...s)+r});Ht.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&!mn&&(Ro=!0)});function QE(){const n=$.length===1?Xt($[0]):null,t=n&&!n.lk?te.get(n.id):null;if(Kn.visible=!!t&&!Ro,!t)return;t.updateMatrixWorld();const e=n.id+"|"+t.geometry.uuid+"|"+t.matrixWorld.elements.map(u=>u.toFixed(3)).join(",");e!==Gu&&(Gu=e,ii=new pe().setFromObject(t));const i=2*Math.tan(Wi.degToRad(qt.fov/2))/Math.max(1,Ht.clientHeight),s=Ho?1.35:1,r=ii.getSize(new w),o=[];for(const u of[ii.min.x,ii.max.x])for(const f of[ii.min.y,ii.max.y])for(const h of[ii.min.z,ii.max.z])o.push(new w(u,f,h).project(qt));const a=(Math.max(...o.map(u=>u.x))-Math.min(...o.map(u=>u.x)))/2*Ht.clientWidth,c=(Math.max(...o.map(u=>u.y))-Math.min(...o.map(u=>u.y)))/2*Ht.clientHeight,l=r.lengthSq()?Math.max(.45,Math.min(1,Math.min(a,c)/140)):1;{const u=Ho?1.9:km[wt.mode]||1,f=+(u*Math.max(.6,l)).toFixed(2);wt.size!==f&&wt.setSize(f)}Vo.forEach((u,f)=>{const h=Kn.children[f],d=JE(u,ii),g=qt.position.distanceTo(d),y=g*i*(u.k==="h"?7.5:5.2)*s*l;u.k==="h"&&(d.y+=y*2.4),h.position.copy(d),h.scale.setScalar(y)})}const li=n=>{const t=n.clone().project(qt),e=Ht.getBoundingClientRect();return[e.left+(t.x+1)/2*e.width,e.top+(1-t.y)/2*e.height,t.z]};Ht.addEventListener("pointerdown",n=>{if(!Kn.visible||n.button!==0||mn)return;const t=n.pointerType==="mouse"?13:26;let e=-1,i=1/0;if(Kn.children.forEach((d,g)=>{const[y,m,p]=li(d.position),_=Math.hypot(y-n.clientX,m-n.clientY),x=_+(Vo[g].k==="h"?t*.6:0);p<1&&_<t&&x<i&&(i=x,e=g)}),e<0)return;n.stopImmediatePropagation(),n.preventDefault(),si=null;const s=Xt($[0]),r=te.get(s.id),o=Vo[e],a=new pe().setFromObject(r),c=new w;a.getSize(c);const l=Kn.children[e].position.clone(),u=new Mn;o.k==="h"?u.setFromNormalAndCoplanarPoint(new w(qt.position.x-l.x,0,qt.position.z-l.z).normalize(),l):u.set(new w(0,1,0),-a.min.y),Ks(n);const f=new w;if(!vi.ray.intersectPlane(u,f))return;const h=[0,1,2].map(d=>{const g=new w(d===0?1:0,d===1?1:0,d===2?1:0).applyQuaternion(r.quaternion),y=[Math.abs(g.x),Math.abs(g.y),Math.abs(g.z)];return y.indexOf(Math.max(...y))});mn={o:s,m:r,h:o,B0:a,d0:c,s0:s.s.slice(),p0:s.p.slice(),plane:u,start:f,axisMap:h},Pt.enabled=!1;try{Ht.setPointerCapture(n.pointerId)}catch{}Qm(mn,!1)},!0);Ht.addEventListener("pointermove",n=>{if(!mn)return;n.stopImmediatePropagation(),Ks(n);const t=new w;if(!vi.ray.intersectPlane(mn.plane,t))return;const{o:e,m:i,h:s,B0:r,d0:o,s0:a,p0:c,axisMap:l}=mn,u=t.sub(mn.start),f=hi||.1,h=v=>Math.max(1,Math.round(v/f)*f);let d=o.x,g=o.y,y=o.z;if(s.k==="h")g=h(o.y+u.y);else if(s.sx&&(d=h(o.x+u.x*s.sx)),s.sz&&(y=h(o.z+u.z*s.sz)),s.k==="c"&&(os||ta||n.shiftKey)){const v=Math.max(d/o.x,y/o.z);d=h(o.x*v),y=h(o.z*v)}const m=[d/(o.x||1),g/(o.y||1),y/(o.z||1)];e.s=a.map((v,E)=>v*m[l[E]]),e.p=c.slice(),i.scale.set(...e.s),i.position.set(...e.p),i.updateMatrixWorld();const p=new pe().setFromObject(i),_=(v,E)=>(v.min[E]+v.max[E])/2,x=(v,E)=>E>0?r.min[v]-p.min[v]:E<0?r.max[v]-p.max[v]:_(r,v)-_(p,v);e.p=[kt(c[0]+x("x",s.sx)),kt(c[1]+r.min.y-p.min.y),kt(c[2]+x("z",s.sz))],i.position.set(...e.p),mn.moved=!0,Si(),jc(),Pn.getBoundingClientRect(),Qo()},!0);const Jm=n=>{if(!mn)return;n.stopImmediatePropagation();const t=!mn.moved&&n.type==="pointerup",e=mn;mn=null,Zc.hidden=!0,Pt.enabled=!0,si=null,re(),On(),Si(),t?e1(e):xh()},wn=document.createElement("div");wn.className="dimLayer";wn.hidden=!0;wn.innerHTML="<svg></svg>";Pn.appendChild(wn);const du=wn.firstChild;let ui=null;const t1=["dW","dH","dD"];function Qm(n,t){const e=n.h.k==="h"?[1]:n.h.k==="s"?[n.h.sx?0:2]:[0,2];if(ui={h:n.h,edit:t,rows:e.map(i=>({w:i,id:t1[Math.max(0,n.axisMap.indexOf(i))]}))},wn.querySelectorAll("input").forEach(i=>i.remove()),ui.rows.forEach(i=>{const s=document.createElement("input");s.type="number",s.inputMode="decimal",s.min="1",s.max="400",s.step="any",s.dataset.for=i.id,s.readOnly=!t,s.setAttribute("aria-label",["العرض","الارتفاع","العمق"][i.w]+" بالملّي"),i.inp=s,wn.appendChild(s)}),wn.hidden=!1,wn.classList.toggle("edit",!!t),Qo(),t){const i=ui.rows[0].inp;i.focus(),i.select()}}const xh=()=>{ui&&ui.edit&&_h(),ui=null,wn.hidden=!0};function Qo(){if(!ui)return;const n=$.length===1?Xt($[0]):null,t=n&&te.get(n.id);if(!t){ui=null,wn.hidden=!0;return}t.updateMatrixWorld();const e=new pe().setFromObject(t),i=Pn.getBoundingClientRect();Ht.getBoundingClientRect();const s=(g,y,m)=>{const[p,_]=li(new w(g,y,m));return[p-i.left,_-i.top]},r=qt.position,o=(e.min.x+e.max.x)/2,a=(e.min.z+e.max.z)/2,c=r.z>a?e.max.z:e.min.z,l=r.x>o?e.max.x:e.min.x,u=s(o,(e.min.y+e.max.y)/2,a),f=new w;e.getSize(f);const h={0:[s(e.min.x,e.min.y,c),s(e.max.x,e.min.y,c)],2:[s(l,e.min.y,e.min.z),s(l,e.min.y,e.max.z)],1:[s(l,e.min.y,c),s(l,e.max.y,c)]};let d="";ui.rows.forEach(g=>{const[y,m]=h[g.w],p=m[0]-y[0],_=m[1]-y[1],x=Math.hypot(p,_)||1;let v=[-_/x,p/x];const E=(y[0]+m[0])/2,T=(y[1]+m[1])/2;v[0]*(E-u[0])+v[1]*(T-u[1])<0&&(v=[-v[0],-v[1]]);const b=34,P=[y[0]+v[0]*b,y[1]+v[1]*b],S=[m[0]+v[0]*b,m[1]+v[1]*b],M=[p/x,_/x],L=7,I=(k,W,q,V)=>'<line x1="'+k.toFixed(1)+'" y1="'+W.toFixed(1)+'" x2="'+q.toFixed(1)+'" y2="'+V.toFixed(1)+'"/>';d+=I(y[0]+v[0]*6,y[1]+v[1]*6,P[0]+v[0]*8,P[1]+v[1]*8)+I(m[0]+v[0]*6,m[1]+v[1]*6,S[0]+v[0]*8,S[1]+v[1]*8)+I(P[0],P[1],S[0],S[1]),[[P,1],[S,-1]].forEach(([k,W])=>{const q=k[0]+M[0]*L*W,V=k[1]+M[1]*L*W;d+='<path d="M'+k[0].toFixed(1)+" "+k[1].toFixed(1)+"L"+(q+v[0]*3).toFixed(1)+" "+(V+v[1]*3).toFixed(1)+"L"+(q-v[0]*3).toFixed(1)+" "+(V-v[1]*3).toFixed(1)+'Z"/>'});const O=g.inp,D=(P[0]+S[0])/2+v[0]*22,F=(P[1]+S[1])/2+v[1]*22;O.style.left=Math.max(4,Math.min(i.width-76,D-36))+"px",O.style.top=Math.max(4,Math.min(i.height-34,F-15))+"px",document.activeElement!==O&&(O.value=kt(f.getComponent(g.w)))}),du.setAttribute("width",i.width),du.setAttribute("height",i.height),du.innerHTML=d}const _h=()=>{wn.querySelectorAll("input").forEach(n=>{const t=B(n.dataset.for);!t||n.readOnly||!(+n.value>0)||String(t.value)===n.value||(t.value=n.value,t.dispatchEvent(new Event("change")))})};wn.addEventListener("keydown",n=>{n.stopPropagation(),n.key==="Escape"?xh():n.key==="Enter"&&(n.preventDefault(),_h(),Qo(),n.target.select())});wn.addEventListener("change",()=>{_h(),Qo()});document.addEventListener("pointerdown",n=>{ui&&!(n.target.closest&&n.target.closest(".dimLayer input"))&&xh()},!0);const e1=n=>Qm(n,!0);Ht.addEventListener("pointerup",Jm,!0);Ht.addEventListener("pointercancel",Jm,!0);let hi=1,Us=!0;const xp=3;function Lc(n){if(!Us||!n.length)return[0,0];const t=new Set(n.map(r=>r.id)),e=Rt.filter(r=>!t.has(r.id));if(!e.length)return[0,0];const i=new pe;n.forEach(r=>i.union(ge(r)));const s=e.map(ge);return["x","z"].map((r,o)=>{const a=o?"x":"z",c=[i.min[r],i.max[r],(i.min[r]+i.max[r])/2];let l=xp+1;return s.forEach(u=>{Math.max(u.min[a]-i.max[a],i.min[a]-u.max[a])>25||[u.min[r],u.max[r],(u.min[r]+u.max[r])/2].forEach(f=>c.forEach(h=>{const d=f-h;Math.abs(d)<Math.abs(l)&&(l=d)}))}),Math.abs(l)<=xp&&Math.abs(l)>.01?l:0})}let _p=!1;function Wo(n){n!==_p&&(_p=n,Po.forEach(t=>t.material.color.set(n?"#18B37E":"#FF8A1F")))}function tg(){wt.setTranslationSnap(wt.object===We?null:hi||null),wt.setRotationSnap(Wi.degToRad(15)),wt.setScaleSnap(null)}tg();B("snapSel").onchange=()=>{hi=+B("snapSel").value,tg()};B("magBtn").onclick=()=>{Us=!Us,B("magBtn").classList.toggle("on",Us),B("magBtn").setAttribute("aria-pressed",String(Us)),ue(Us?"🧲 المغناطيس شغال: الأشكال بتلزق في بعض لما تقرّب":"المغناطيس اتقفل: الشكل بيتحرك بحرية")};wt.addEventListener("dragging-changed",n=>{if(Pt.enabled=!n.value,n.value||Wo(!1),!n.value&&$.length===1){const t=Xt($[0]);if(ZE(t),wt.mode==="scale"&&hi){const e=Ko(t);t.s=t.s.map((i,s)=>Math.max(1,Math.round(e.getComponent(s)*i/hi)*hi)/e.getComponent(s)),te.get(t.id).scale.set(...t.s)}wt.mode!=="translate"&&ea(t),Lr=null,re(),On(),Si(),wt.object===We&&$o(te.get(t.id))}});let ta=!1,os=!1,Rs=null;addEventListener("keydown",n=>{n.key==="Shift"&&(ta=!0)});addEventListener("keyup",n=>{n.key==="Shift"&&(ta=!1)});addEventListener("blur",()=>ta=!1);wt.addEventListener("mouseDown",()=>{const n=wt.object;Rs=n?n.scale.clone():null,n===We&&$.length===1&&(Lr=te.get($[0]).position.clone(),gc=We.position.clone())});wt.addEventListener("objectChange",()=>{jc();const n=wt.object;if(n&&wt.mode==="scale"&&(ta||os)&&Rs){const t=(wt.axis||"X").replace(/[^XYZ]/g,"")[0]||"X",e=t.toLowerCase(),i=Rs[e]?n.scale[e]/Rs[e]:1;n.scale.set(Rs.x*i,Rs.y*i,Rs.z*i)}if(n===We&&wt.dragging&&$.length===1&&Lr){const t=te.get($[0]),e=hi||0,i=r=>e?Math.round(r/e)*e:r;t.position.set(i(Lr.x+We.position.x-gc.x),i(Lr.y+We.position.y-gc.y),i(Lr.z+We.position.z-gc.z));const s=Xt($[0]);if(s){const[r,o]=Lc([s]);t.position.x+=r,t.position.z+=o,Wo(!!(r||o))}}else if(n&&wt.mode==="translate"&&wt.dragging&&$.length===1){const t=Xt($[0]);if(t){const[e,i]=Lc([t]);n.position.x+=e,n.position.z+=i,Wo(!!(e||i))}}Si()});const Ie=document.createElement("div");Ie.className="turnKnob";Ie.hidden=!0;Ie.innerHTML='<button class="tkTog" type="button" aria-expanded="false" title="أدوات الشكل: دوران حول X و Y و Z، نسخة، حذف"><i>🛠</i><span>أدوات</span><b aria-hidden="true">▾</b></button><button class="tkGrip" title="اسحبني حوالين الشكل عشان تلفّه بأي زاوية" aria-label="لف بأي زاوية"><i>⟳</i><b>٠°</b></button><label class="tkDeg" title="زاوية الدوران لكل ضغطة"><input type="number" inputmode="numeric" min="1" max="360" step="1" value="45" aria-label="زاوية الدوران بالدرجات"><b>°</b></label><button class="tkBig" data-q="x" title="دوران حول المحور X"><i class="ax ax-x">↻</i><span>حول X</span></button><button class="tkBig" data-q="y" title="دوران حول المحور Y"><i class="ax ax-y">↻</i><span>حول Y</span></button><button class="tkBig" data-q="z" title="دوران حول المحور Z"><i class="ax ax-z">↻</i><span>حول Z</span></button><span class="tkSep" aria-hidden="true"></span><button class="tkBig" data-q="dup" title="نسخة (Ctrl+D)"><i>⧉</i><span>نسخة</span></button><button class="tkBig danger" data-q="del" title="حذف (Delete)"><i>🗑</i><span>حذف</span></button>';Pn.appendChild(Ie);const Vu=Ie.querySelector(".tkTog"),eg={get(){try{return localStorage.getItem("robo-3d-tools")}catch{return null}},set(n){try{localStorage.setItem("robo-3d-tools",n)}catch{}}};function yh(n){Ie.classList.toggle("fold",!n),Vu.setAttribute("aria-expanded",String(n)),Vu.querySelector("b").textContent=n?"▴":"▾",eg.set(n?"open":"closed"),requestAnimationFrame(()=>typeof Wu=="function"&&Wu())}yh(eg.get()==="open");Vu.onclick=()=>yh(Ie.classList.contains("fold"));window.__cadTools=n=>yh(n!==!1);const ri=document.createElement("div");ri.className="turnRing";ri.hidden=!0;Pn.appendChild(ri);const ng=new w(0,1,0),vh=n=>{const t=te.get(n.id),e=ge(n);return{m:t,q0:t.quaternion.clone(),c0:e.getCenter(new w),y0:Math.max(0,e.min.y)}};function Mh(n,t,e,i=ng){const{m:s,q0:r,c0:o,y0:a}=t;s.quaternion.copy(r).premultiply(new Oe().setFromAxisAngle(i,e));const c=new Xi().setFromQuaternion(s.quaternion),l=h=>{const d=Math.round(h/(Math.PI/180))*(Math.PI/180);return Math.abs(d-h)<1e-4?d:h};n.r=[l(c.x),l(c.y),l(c.z)],s.rotation.set(...n.r),s.updateMatrixWorld();const u=ge(n).getCenter(new w);n.p=[kt(n.p[0]+o.x-u.x),n.p[1],kt(n.p[2]+o.z-u.z)],s.position.set(...n.p);const f=ge(n);n.p[1]=kt(n.p[1]+a-f.min.y),s.position.y=n.p[1],s.updateMatrixWorld(),Si(),jc()}{let n=null;const t=i=>Math.hypot(i[0].clientX-i[1].clientX,i[0].clientY-i[1].clientY)||1;Ht.addEventListener("touchstart",i=>{i.touches.length===2&&(n={d:t(i.touches),dist:qt.position.distanceTo(Pt.target)},Pt.enabled=!1,i.preventDefault())},{passive:!1}),Ht.addEventListener("touchmove",i=>{if(!n||i.touches.length!==2)return;i.preventDefault();const s=Math.max(Pt.minDistance,Math.min(Pt.maxDistance,n.dist*n.d/t(i.touches))),r=qt.position.clone().sub(Pt.target).normalize();qt.position.copy(Pt.target).add(r.multiplyScalar(s)),qt.updateMatrixWorld()},{passive:!1});const e=i=>{n&&i.touches.length<2&&(n=null,Pt.enabled=!0,Pt.update())};Ht.addEventListener("touchend",e),Ht.addEventListener("touchcancel",e)}let pu=!1;function mo(n,t,e){if(pu)return;pu=!0;const i=vh(n),s=performance.now(),r=280;(function o(){const a=Math.min(1,(performance.now()-s)/r),c=a<1?1-Math.pow(1-a,3):1;Mh(n,i,e*c,t),a<1?requestAnimationFrame(o):(pu=!1,re(),On(),wt.object===We&&$o(te.get(n.id)))})()}const n1=()=>{const{fwd:n,right:t}=pg();return{fwd:new w(n[0],0,n[1]),right:new w(t[0],0,t[1])}};function i1(n){const t=Xt($[0]);if(!t)return;if(n==="dup")return bh();if(n==="del")return $c();if(t.lk){ue("🔒 الشكل مقفول");return}const{fwd:e,right:i}=n1(),s=Ie.querySelector(".tkDeg input"),r=Math.max(1,Math.min(360,+(s&&s.value)||45)),o=-r*Math.PI/180;try{localStorage.setItem("robo-3d-turndeg",String(r))}catch{}n==="y"?mo(t,ng,o):n==="x"?mo(t,new w(1,0,0),o):n==="z"?mo(t,new w(0,0,1),o):n==="tip"?mo(t,i,Math.PI/2):mo(t,e,-Math.PI/2)}Ie.querySelectorAll("[data-q]").forEach(n=>n.onclick=()=>i1(n.dataset.q));{const n=Ie.querySelector(".tkDeg input");try{const t=+localStorage.getItem("robo-3d-turndeg");t>=1&&t<=360&&(n.value=t)}catch{}["pointerdown","keydown","click"].forEach(t=>n.addEventListener(t,e=>e.stopPropagation()))}const s1=()=>$.length===1&&Xt($[0])&&!(ze&&ze.moved)&&!wt.dragging&&!mn&&!Gn,r1=n=>(n<0?"−":"")+Cn(Math.abs(Math.round(n)))+"°";let Je=null;function Wu(){if(!s1()){Ie.hidden=ri.hidden=!0;return}const n=Xt($[0]),t=ge(n),e=t.getCenter(new w),i=e.clone();i.y=t.max.y;const s=Pn.getBoundingClientRect(),[r,o]=li(e),[a,c,l]=li(i);if(l>1){Ie.hidden=ri.hidden=!0;return}Ie.hidden=!1,Ie.classList.toggle("rot",wt.mode==="rotate"&&!n.lk),Ie.classList.toggle("lk",!!n.lk);let u=c,f=c;for(const p of[t.min.x,t.max.x])for(const _ of[t.min.y,t.max.y])for(const x of[t.min.z,t.max.z]){const v=li(new w(p,_,x));v[2]<1&&(u=Math.min(u,v[1]),f=Math.max(f,v[1]))}const h=Vo.findIndex(p=>p.k==="h");if(Kn.visible&&h>=0){const p=Kn.children[h],_=li(p.position),x=li(p.position.clone().add(new w(0,p.scale.x*1.4,0)));_[2]<1&&(u=Math.min(u,_[1]-Math.abs(_[1]-x[1])-4))}const d=Ie.offsetHeight||44,g=Ie.offsetWidth||300,y=Math.max(g/2+8,Math.min(s.width-g/2-8,a-s.left));let m=u-s.top-18;if(m-d<8&&(m=Math.min(s.height-8,f-s.top+18+d)),Ie.style.left=y+"px",Ie.style.top=m+"px",Je){ri.hidden=!1;const p=Math.max(46,Math.hypot(Je.px-r,Je.py-o));ri.style.left=r-s.left+"px",ri.style.top=o-s.top+"px",ri.style.width=ri.style.height=2*p+"px"}else ri.hidden=!0}const qs=Ie.querySelector(".tkGrip");qs.addEventListener("pointerdown",n=>{const t=Xt($[0]);if(!t||t.lk)return;n.preventDefault(),n.stopPropagation(),qs.setPointerCapture(n.pointerId);const e=ge(t),[i,s]=li(e.getCenter(new w));Je={o:t,st:vh(t),cx:i,cy:s,a0:Math.atan2(n.clientY-s,n.clientX-i),px:n.clientX,py:n.clientY,d:0},Pt.enabled=!1,Ie.classList.add("on")});qs.addEventListener("pointermove",n=>{if(!Je)return;Je.px=n.clientX,Je.py=n.clientY;let t=Math.atan2(n.clientY-Je.cy,n.clientX-Je.cx)-Je.a0;t=Math.atan2(Math.sin(t),Math.cos(t));const e=qt.position.y>=Pt.target.y?1:-1,i=n.shiftKey?1:15,s=Math.round(-t*e*180/Math.PI/i)*i;s!==Je.d&&(Je.d=s,Mh(Je.o,Je.st,Wi.degToRad(s)),qs.querySelector("b").textContent=r1(s))});const ig=()=>{if(!Je)return;const n=Je.d!==0;Je=null,Pt.enabled=!0,Ie.classList.remove("on"),qs.querySelector("b").textContent="٠°",n&&(re(),On())};qs.addEventListener("pointerup",ig);qs.addEventListener("pointercancel",ig);(function n(){Wu(),requestAnimationFrame(n)})();function Lo(n){wt.setMode(n),Hm(),n==="rotate"&&$.length===1&&ue("دوس ↻ «لف» يلفّه ربع لفة، أو اسحب الزرار ⟳ حوالين الشكل لأي زاوية"),document.querySelectorAll(".tb.mode").forEach(t=>t.classList.toggle("on",t.dataset.mode===n))}document.querySelectorAll(".tb.mode").forEach(n=>n.onclick=()=>Lo(n.dataset.mode));function ea(n){const t=ge(n);t.min.y<0&&(n.p[1]=kt(n.p[1]-t.min.y),te.get(n.id).position.y=n.p[1])}function sg(){$.length&&($.forEach(n=>{const t=Xt(n),e=ge(t);t.p[1]=kt(t.p[1]-e.min.y),te.get(n).position.y=t.p[1]}),Si(),re())}B("dropBtn").onclick=sg;function Sh(n,t){const e=Rt.map(a=>ge(a)),i=6,s=n+i,r=t+i,o=(a,c)=>{const l=new pe(new w(a-n/2-i/2,-1e3,c-t/2-i/2),new w(a+n/2+i/2,1e3,c+t/2+i/2));return!e.some(u=>u.intersectsBox(l))};for(let a=0;a<8;a++)for(let c=0;c<12;c++){const l=c===0?0:(c%2?1:-1)*Math.ceil(c/2),u=a===0?0:(a%2?1:-1)*Math.ceil(a/2)*r,f=l*s,h=Math.round(f/5)*5,d=Math.round(u/5)*5;if(o(h,d))return[h,d]}return[Math.round(Rt.length*s/5)*5,0]}function na(n,t,e,i){if(Vi[n])return o1(n,i);const s=n==="text"&&!e;s&&(e="نص");const r=n==="text"?B("txtFont").value:null,o=n==="text"?Ko({t:n,txt:e,fnt:r}):yi[n],[a,c]=i||Sh(o.x,o.z),l=i&&i[2]||0,u={id:yn(),t:n,c:t?"#8E9AAF":fh[Rt.length%7],h:!!t,p:[a,kt(l+o.y/2),c],r:[0,0,0],s:[1,1,1]};gn[n]&&gn[n].poly&&(u.t="poly",u.n=gn[n].poly),n==="text"&&(u.txt=e,r&&r!==Uc[0][0]&&(u.fnt=r)),Rt.push(u),Re(),Nn(u.id),re(),n==="text"&&s&&setTimeout(()=>Km(u),60)}function rg(n){const t=new pe;return Vi[n].parts.forEach(e=>{const i=new pt(ms[e.t]);i.position.set(...e.p),i.rotation.set(...e.r),i.scale.set(...e.s),i.updateMatrixWorld(),t.union(new pe().setFromObject(i))}),t}function o1(n,t){const e=rg(n),i=new w;e.getSize(i);const[s,r]=t||Sh(i.x,i.z),o=t&&t[2]||0,a=Vi[n].parts.map(c=>({id:yn(),t:c.t,c:c.c,h:!1,p:[kt(c.p[0]+s),kt(c.p[1]+o-e.min.y),kt(c.p[2]+r)],r:c.r.slice(),s:c.s.slice()}));Rt.push(...a),Re(),$=a.map(c=>c.id),rn(),re(),ue("✨ "+Vi[n].ar+" جاهز! كل جزء تقدر تغيّره، أو دوس «جمّع» يبقى قطعة واحدة")}function bh(){if(!$.length)return;const n=[];$.forEach(t=>{const e=JSON.parse(JSON.stringify(Xt(t)));e.id=yn(),e.p[0]+=25,e.p[2]+=25,e.kids&&e.kids.forEach(i=>{i.p[0]+=25,i.p[2]+=25}),e.o&&(e.o[0]+=25,e.o[2]+=25),Rt.push(e),n.push(e.id)}),Re(),$=n,rn(),re()}function $c(){if($.length){if($.some(n=>Xt(n).lk)){ue("🔒 فيه شكل مقفول. افتح القفل الأول");return}Rt=Rt.filter(n=>!$.includes(n.id)),$=[],Re(),re()}}function ia(n){if(n=n===!0,$.length<2){ue("اختار شكلين أو أكتر الأول (Shift + ضغطة)");return}!n&&bn&&(bn=!1,B("multiBtn").classList.remove("on"),B("multiBtn").setAttribute("aria-pressed","false"));const t=[];Rt.filter(a=>$.includes(a.id)).forEach(a=>{if(a.t==="group"){const c=Xc(a).multiply(new ae().makeTranslation(-a.o[0],-a.o[1],-a.o[2]));a.kids.forEach(l=>t.push(og(l,c,a.h)))}else t.push(JSON.parse(JSON.stringify(a)))}),t.some(a=>!a.h)||t.forEach(a=>a.h=!0);const e={t:"group",kids:t,o:[0,0,0]};let i;try{i=Ym(e)}catch{ue("مقدرتش أجمّع الأشكال دي، جرّب تحرّكهم شوية");return}const s=new w;i.boundingBox.getCenter(s);const r=[kt(s.x),kt(s.y),kt(s.z)],o={id:yn(),t:"group",kids:t,o:r.slice(),c:(t.find(a=>!a.h)||t[0]).c,h:t.every(a=>a.h),p:r.slice(),r:[0,0,0],s:[1,1,1]};if(Rt=Rt.filter(a=>!$.includes(a.id)).concat(o),n){$=[o.id];return}Re(),Nn(o.id),re(),ue(t.some(a=>a.h)&&t.some(a=>!a.h)?"✨ الفتحة خرّمت الشكل!":"✨ اتجمّعوا في شكل واحد")}function og(n,t,e){const i=t.clone().multiply(Xc(n)),s=new w,r=new Oe,o=new w;i.decompose(s,r,o);const a=new Xi().setFromQuaternion(r);return Object.assign(JSON.parse(JSON.stringify(n)),{id:yn(),p:s.toArray().map(kt),r:[a.x,a.y,a.z],s:o.toArray(),h:n.h||!!e&&n.h})}function Eh(){const n=Rt.filter(e=>$.includes(e.id)&&e.t==="group");if(!n.length)return;let t=[];n.forEach(e=>{const i=Xc(e).multiply(new ae().makeTranslation(-e.o[0],-e.o[1],-e.o[2])),s=e.kids.map(r=>og(r,i));t=t.concat(s)}),Rt=Rt.filter(e=>!n.includes(e)).concat(t),Re(),$=t.map(e=>e.id),rn(),re()}async function ag(){const n=(B("txtIn").value||"").trim().slice(0,24);if(!n){ue("اكتب كلمة الأول ✍️"),B("txtIn").focus();return}try{await document.fonts.load("800 120px "+Cc(),n)}catch{}await Xo(B("txtFont").value,n),na("text",!1,n)}B("txtFont").innerHTML=Rp(Uc[0][0]);B("pFont").innerHTML=Rp(Uc[0][0]);B("txtFont").addEventListener("change",()=>{B("txtIn").style.fontFamily='"'+B("txtFont").value+'"',Xo(B("txtFont").value)});B("pFont").addEventListener("change",async()=>{const n=Xt($[0]);if(!n||n.t!=="text"||n.lk)return;await Xo(B("pFont").value,n.txt);const t=Math.abs(ge(n).min.y)<.6;n.fnt=B("pFont").value,Re(),t&&ea(n),Nn(n.id),re()});B("txtAdd").onclick=ag;B("txtIn").addEventListener("keydown",n=>{n.key==="Enter"&&ag()});const hs=100,Oi=400,a1=Oi/hs;function cg(n,t=10){const e=n.length,i=[];for(let s=0;s<e;s++){const r=n[(s-1+e)%e],o=n[s],a=n[(s+1)%e],c=n[(s+2)%e];for(let l=0;l<t;l++){const u=l/t,f=u*u,h=f*u;i.push([0,1].map(d=>.5*(2*o[d]+(-r[d]+a[d])*u+(2*r[d]-5*o[d]+4*a[d]-c[d])*f+(-r[d]+3*o[d]-3*a[d]+c[d])*h)))}}return i}const cc=new Map;function c1(n,t){const e=n.filter((h,d)=>!d||Math.hypot(h[0]-n[d-1][0],h[1]-n[d-1][1])>1e-6),i=e.length;if(i<2)return null;const s=h=>{const d=e[h],g=e[h+1],y=Math.hypot(g[0]-d[0],g[1]-d[1])||1;return[(g[0]-d[0])/y,(g[1]-d[1])/y]},r=[],o=[];for(let h=0;h<i;h++){const d=s(Math.max(0,h-1)),g=s(Math.min(i-2,h)),y=[-d[1],d[0]],m=[-g[1],g[0]];let p=y[0]+m[0],_=y[1]+m[1];const x=Math.hypot(p,_)||1;p/=x,_/=x;const v=t/Math.max(.45,p*m[0]+_*m[1]);r.push([e[h][0]+p*v,e[h][1]+_*v]),o.push([e[h][0]-p*v,e[h][1]-_*v])}const a=(h,d,g=8)=>{const y=[];for(let m=1;m<g;m++){const p=d-Math.PI*m/g;y.push([h[0]+Math.cos(p)*t,h[1]+Math.sin(p)*t])}return y},c=s(i-2),l=s(0),u=Math.atan2(c[0],-c[1]),f=Math.atan2(-l[0],l[1]);return r.concat(a(e[i-1],u),o.reverse(),a(e[0],f))}function lg(n){const t=JSON.stringify([n.pts,n.sm?1:0,n.rd||0,n.open?n.lw||3:0]);if(cc.has(t))return cc.get(t);if(n.open){let s;try{const r=c1(n.pts.map(([o,a])=>[o,-a]),(n.lw||3)/2);s=mi(pi(r),10,0)}catch{s=new _e(10,10,10)}return s=zu(s),cc.set(t,s),s}const e=(n.sm?cg(n.pts):n.pts).map(([s,r])=>[s,-r]);let i;try{i=mi(pi(e),10,Math.min(n.rd||0,2))}catch{i=new _e(10,10,10)}return i=zu(i),cc.set(t,i),i}function Xu(n,t){if(n.length<3)return n;const e=n[0],i=n[n.length-1];let s=0,r=0;for(let o=1;o<n.length-1;o++){const[a,c]=n[o],l=Math.abs((i[1]-e[1])*a-(i[0]-e[0])*c+i[0]*e[1]-i[1]*e[0])/(Math.hypot(i[0]-e[0],i[1]-e[1])||1);l>r&&(r=l,s=o)}return r>t?Xu(n.slice(0,s+1),t).slice(0,-1).concat(Xu(n.slice(s),t)):[e,i]}let bt=null;function wh(n,t){let e=B("drawModal");if(!e){e=document.createElement("div"),e.className="modal",e.id="drawModal",e.hidden=!0,e.innerHTML='<div class="mcard drawcard" role="dialog" aria-modal="true" aria-labelledby="drT"><h2 id="drT"></h2><p class="sub" id="drSay"></p><div class="drmodes" role="radiogroup" aria-label="الأداة"><button class="btn ghost small" data-dm="free">✏️ رسم حر</button><button class="btn ghost small" data-dm="pen">🖊️ قلم</button><label class="drsm" id="drSmL"><input type="checkbox" id="drSm"> منحني</label></div><canvas id="drCan" width="'+Oi+'" height="'+Oi+'" aria-label="مساحة الرسم: ١٠٠ × ١٠٠ ملّي"></canvas><div class="drrow"><label>الارتفاع <input type="number" id="drH" min="1" max="100" step="1" value="10"> ملّي</label><label id="drWL">سُمك الخط <input type="number" id="drW" min="1" max="20" step="0.5" value="3"> ملّي</label><span class="sub" id="drSize"></span></div><div class="drrow"><button class="btn ghost small" id="drUndo">↶ آخر نقطة</button><button class="btn ghost small" id="drClear">🧹 امسح</button><span style="flex:1"></span><button class="btn ghost small" id="drCancel">إلغاء</button><button class="btn run small" id="drOk">✓ حطه في التصميم</button></div></div>',document.body.appendChild(e);const i=B("drCan");e.querySelectorAll("[data-dm]").forEach(o=>o.onclick=()=>{bt.mode=o.dataset.dm,bt.pts=[],yp()}),B("drSm").onchange=()=>{bt.sm=B("drSm").checked,Ni()},B("drW").oninput=()=>{bt.lw=Math.max(1,Math.min(20,+B("drW").value||3)),Ni()},B("drUndo").onclick=()=>{bt.pts.pop(),Ni()},B("drClear").onclick=()=>{bt.pts=[],Ni()},B("drCancel").onclick=()=>{e.hidden=!0,bt=null},e.addEventListener("click",o=>{o.target===e&&(e.hidden=!0,bt=null)}),B("drOk").onclick=vp;const s=o=>{const a=i.getBoundingClientRect();return[Math.round(((o.clientX-a.left)/a.width*hs-hs/2)*2)/2,Math.round(((o.clientY-a.top)/a.height*hs-hs/2)*2)/2]};i.addEventListener("pointerdown",o=>{if(!bt)return;o.preventDefault(),i.setPointerCapture(o.pointerId);const a=s(o);if(bt.mode==="free")bt.pts=[a],bt.down=!0;else{const c=bt.pts.findIndex(l=>Math.hypot(l[0]-a[0],l[1]-a[1])<3.5);if(c===0&&bt.pts.length>=3){vp();return}c>=0?bt.move=c:(bt.pts.push(a),bt.move=bt.pts.length-1)}Ni()}),i.addEventListener("pointermove",o=>{if(!bt)return;const a=s(o);if(bt.mode==="free"&&bt.down){const c=bt.pts[bt.pts.length-1];Math.hypot(c[0]-a[0],c[1]-a[1])>=1&&(bt.pts.push(a),Ni())}else bt.mode==="pen"&&bt.move!=null&&(bt.pts[bt.move]=a,Ni())});const r=()=>{bt&&(bt.mode==="free"&&bt.down&&(bt.down=!1,bt.pts=Xu(bt.pts,.5),Ni()),bt.move=null)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("contextmenu",o=>o.preventDefault())}bt={mode:n,pts:t?t.pts.map(i=>i.slice()):[],sm:t?!!t.sm:!1,edit:t||null,move:null,lw:t&&t.lw||3},t&&(bt.mode=t.open?"free":"pen"),B("drW").value=bt.lw,B("drH").value=t?Math.max(1,Math.round(10*(t.s[1]||1))):10,e.hidden=!1,yp()}function yp(){B("drT").textContent=bt.edit?"✏️ عدّل الرسمة":bt.mode==="free"?"✏️ رسم حر":"🖊️ القلم",B("drSay").textContent=bt.mode==="free"?"ارسم بصباعك أو بالماوس، والخط بيطلع مجسّم زي ما رسمته بالظبط (مش بيتقفل). ارسم تاني لو عايز تبدأ من الأول.":"دوس عشان تحط نقط، واسحب أي نقطة تحرّكها. دوس على أول نقطة (أو «حطه») عشان تقفل الشكل.",document.querySelectorAll("#drawModal [data-dm]").forEach(n=>n.setAttribute("aria-checked",String(n.dataset.dm===bt.mode))||n.classList.toggle("on",n.dataset.dm===bt.mode)),B("drSmL").hidden=bt.mode!=="pen",B("drWL").hidden=bt.mode!=="free",B("drSm").checked=bt.sm,B("drUndo").hidden=bt.mode!=="pen",Ni()}function l1(){return bt.mode==="pen"&&bt.sm&&bt.pts.length>=3?cg(bt.pts):bt.pts}function Ni(){const n=B("drCan").getContext("2d"),t=a1,e=o=>(o+hs/2)*t;n.clearRect(0,0,Oi,Oi),n.fillStyle="#fff",n.fillRect(0,0,Oi,Oi);for(let o=0;o<=hs;o+=5)n.strokeStyle=o%10?"#EEF1F8":"#DCE2EF",o===hs/2&&(n.strokeStyle="#B9C3D8"),n.lineWidth=1,n.beginPath(),n.moveTo(o*t+.5,0),n.lineTo(o*t+.5,Oi),n.moveTo(0,o*t+.5),n.lineTo(Oi,o*t+.5),n.stroke();const i=l1();if(!i.length){B("drSize").textContent="";return}n.beginPath(),i.forEach(([o,a],c)=>c?n.lineTo(e(o),e(a)):n.moveTo(e(o),e(a))),bt.mode==="free"?(n.strokeStyle="rgba(30,123,255,.55)",n.lineWidth=Math.max(2,(bt.lw||3)*t),n.lineJoin=n.lineCap="round",n.stroke(),n.lineCap="butt"):(i.length>=3&&(n.closePath(),n.fillStyle="rgba(30,123,255,.18)",n.fill()),n.strokeStyle="#1E7BFF",n.lineWidth=3,n.lineJoin="round",n.stroke()),bt.mode==="pen"&&bt.pts.forEach(([o,a],c)=>{n.beginPath(),n.arc(e(o),e(a),c===0?8:6,0,Math.PI*2),n.fillStyle=c===0?"#FF8A1F":"#fff",n.fill(),n.strokeStyle="#1E7BFF",n.lineWidth=2.5,n.stroke()});const s=i.map(o=>o[0]),r=i.map(o=>o[1]);B("drSize").textContent=i.length>=(bt.mode==="free"?2:3)?Cn(Math.round(Math.max(...s)-Math.min(...s)))+" × "+Cn(Math.round(Math.max(...r)-Math.min(...r)))+" ملّي":""}function vp(){if(!bt)return;let n=bt.pts;const t=bt.mode==="free",e=bt.lw||3;if(n.length<(t?2:3)){ue(t?"ارسم خط أطول شوية ✏️":"محتاج ٣ نقط على الأقل 🖊️");return}const i=n.map(l=>l[0]),s=n.map(l=>l[1]);if(t?Math.max(Math.max(...i)-Math.min(...i),Math.max(...s)-Math.min(...s))<2:Math.max(...i)-Math.min(...i)<2||Math.max(...s)-Math.min(...s)<2){ue("الشكل صغير قوي، ارسمه أكبر شوية");return}const r=(Math.max(...i)+Math.min(...i))/2,o=(Math.max(...s)+Math.min(...s))/2;n=n.map(([l,u])=>[Math.round((l-r)*2)/2,Math.round((u-o)*2)/2]);const a=Math.max(1,Math.min(100,+B("drH").value||10)),c=bt.mode==="pen"&&bt.sm;if(bt.edit){const l=bt.edit;Ah(l,()=>{l.pts=n,l.sm=c,l.s=[1,a/10,1],t?(l.open=1,l.lw=e):(delete l.open,delete l.lw)})}else{const l=lg(t?{pts:n,open:1,lw:e}:{pts:n,sm:c}),u=new w;l.boundingBox.getSize(u);const[f,h]=Sh(u.x,u.z),d={id:yn(),t:"draw",pts:n,sm:c,c:fh[Rt.length%7],h:!1,p:[f,kt(a/2),h],r:[0,0,0],s:[1,a/10,1]};t&&(d.open=1,d.lw=e,delete d.sm),Rt.push(d),Re(),Nn(d.id),re()}B("drawModal").hidden=!0,bt=null}B("drawFree").onclick=()=>wh("free");B("drawPen").onclick=()=>wh("pen");B("textTool")&&(B("textTool").onclick=()=>{const n=B("txtRow");n.hidden=!n.hidden,B("textTool").classList.toggle("on",!n.hidden),n.hidden||B("txtIn").focus()});async function Do(n,t,e){if(!n||n.t!=="text"||n.lk||!t)return;try{await document.fonts.load("800 120px "+Cc(),t)}catch{}if(!Rt.includes(n)&&!Xt(n.id))return;const i=Math.abs(ge(n).min.y)<.6;n.txt=t,Re(),i&&ea(n),$[0]===n.id&&rn(),e&&re()}B("pTxt").addEventListener("change",()=>{const n=Xt($[0]),t=(B("pTxt").value||"").trim().slice(0,24);!n||!t||(t!==n.txt?Do(n,t,!0):Sn[An]!==JSON.stringify(Rt)&&re())});{let n=0;B("pTxt").addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>{const t=Xt($[0]),e=(B("pTxt").value||"").trim().slice(0,24);t&&e&&e!==t.txt&&Do(t,e,!1)},250)})}document.fonts&&Promise.all([...new Set(Rt.flatMap(n=>[n,...n.kids||[]]).filter(n=>n.fnt).map(n=>n.fnt))].map(n=>Xo(n))).then(()=>document.fonts.ready).then(()=>{Rt.some(n=>n.t==="text"||(n.kids||[]).some(t=>t.t==="text"))&&(yo.clear(),Co.clear(),Re())});function u1(){const n=B("clearAll");if(Rt.length){if(n.dataset.sure!=="1"){n.dataset.sure="1",n.classList.add("armed"),ue("دوس تاني عشان تمسح كل الأشكال 🧹"),setTimeout(()=>{n.dataset.sure="",n.classList.remove("armed")},2500);return}n.dataset.sure="",n.classList.remove("armed"),Rt=[],$=[],Re(),re(),ue("🧹 اتمسح كل حاجة (تقدر ترجّع بـ ↶)")}}B("clearAll").onclick=u1;B("ratioBtn").onclick=()=>{os=!os,B("ratioBtn").classList.toggle("on",os),B("ratioBtn").textContent=os?"🔗 نفس النسبة":"⛓️‍💥 حر",ue(os?"🔗 المقاس هيكبر ويصغر بنفس النسبة":"كل اتجاه لوحده (Shift للنسبة)")};B("dupBtn").onclick=bh;B("delBtn").onclick=$c;B("groupBtn").onclick=ia;B("ungroupBtn").onclick=Eh;const ug=n=>'<svg viewBox="0 0 48 48" aria-hidden="true">'+Um[n]+"</svg>",mu=n=>'<button class="shp" data-s="'+n+'">'+ug(n)+gn[n].ar+"</button>";B("shapeList").innerHTML=mu("box")+mu("cyl")+'<button class="shp" data-s="text"><svg viewBox="0 0 48 48" aria-hidden="true"><text class="txtIco" x="24" y="31" text-anchor="middle">نص</text></svg>نص</button>'+Object.keys(gn).filter(n=>n!=="box"&&n!=="cyl").map(mu).join("");B("presetList").innerHTML=Object.keys(Vi).map(n=>'<button class="shp" data-s="'+n+'">'+ug(n)+Vi[n].ar+"</button>").join("");B("holeList").innerHTML=["box","cyl"].map(n=>'<button class="shp" data-h="'+n+'"><svg viewBox="0 0 48 48" aria-hidden="true" style="opacity:.55;filter:grayscale(1)">'+Um[n]+"</svg>"+(n==="box"?"فتحة مربعة":"فتحة دايرة")+"</button>").join("");document.querySelectorAll("[data-s]").forEach(n=>n.onclick=()=>{n._dragged||performance.now()-(n._dragT||0)<600||na(n.dataset.s,!1)});document.querySelectorAll("[data-h]").forEach(n=>n.onclick=()=>{n._dragged||performance.now()-(n._dragT||0)<600||na(n.dataset.h,!0)});const h1=()=>getComputedStyle(document.querySelector(".shapes")).flexDirection==="row";document.querySelectorAll(".shp[data-s], .shp[data-h]").forEach(n=>n.addEventListener("pointerdown",t=>{if(t.button!==0)return;const e=t.clientX,i=t.clientY,s=t.pointerType!=="mouse",r=n.dataset.s||n.dataset.h,o=!!n.dataset.h;let a=null,c=null,l=null;const u=d=>{const g=d.clientX-e,y=d.clientY-i;if(!a){if(Math.hypot(g,y)<10)return;if(s&&(h1()?Math.abs(y)<Math.abs(g):Math.abs(g)<Math.abs(y))){h();return}a=document.createElement("div"),a.className="shpGhost",a.innerHTML=n.querySelector("svg").outerHTML,document.body.appendChild(a),n._dragged=!0;try{n.setPointerCapture(d.pointerId)}catch{}}d.preventDefault(),a.style.left=d.clientX+"px",a.style.top=d.clientY+"px";const m=document.elementFromPoint(d.clientX,d.clientY)===Ht;a.classList.toggle("ok",m),l=m?Mp(d,r,o):null,l&&!c&&(c=f1(r,o)),c&&(c.visible=!!l,l&&d1(c,r,l)),a.classList.toggle("over3d",!!l)},f=d=>{if(a){n._dragT=performance.now();const g=document.elementFromPoint(d.clientX,d.clientY)===Ht;if(a.remove(),a=null,g){const y=Mp(d,r,o);y&&na(r,o,void 0,y)}else ue("سيب الشكل فوق مساحة التصميم");setTimeout(()=>n._dragged=!1,600)}h()},h=()=>{removeEventListener("pointermove",u),removeEventListener("pointerup",f),removeEventListener("pointercancel",f),a&&(a.remove(),a=null),c&&(_n.remove(c),c=null)};addEventListener("pointermove",u,{passive:!1}),addEventListener("pointerup",f),addEventListener("pointercancel",f)}));function Mp(n,t,e){Ks(n);const i=new w;if(!vi.ray.intersectPlane(new Mn(new w(0,1,0),0),i))return null;let s=0;if(Us&&!e){const o=vi.intersectObjects([...te.values()],!1).find(a=>a.face&&a.face.normal.clone().transformDirection(a.object.matrixWorld).y>.6&&!Xt(a.object.userData.id).h);o&&(i.copy(o.point),s=kt(o.point.y))}const r=hi||1;return[Math.round(i.x/r)*r,Math.round(i.z/r)*r,s]}const Sp=new Zo({color:"#1E7BFF",transparent:!0,opacity:.55,roughness:.5,depthWrite:!1});function f1(n,t){const e=new zi;if(Vi[n])Vi[n].parts.forEach(i=>{const s=new pt(ms[i.t],new Zo({color:i.c,transparent:!0,opacity:.7,depthWrite:!1}));s.position.set(...i.p),s.rotation.set(...i.r),s.scale.set(...i.s),e.add(s)});else if(ms[n])e.add(new pt(ms[n],t?Yc:Sp));else if(n==="text")try{e.add(new pt(Fm("نص",B("txtFont").value),Sp))}catch{}return e.renderOrder=3,_n.add(e),e}function d1(n,t,e){const i=Vi[t]?-rg(t).min.y:yi[t]?yi[t].y/2:t==="text"?Ko({t:"text",txt:"نص",fnt:B("txtFont").value}).y/2:0;n.position.set(e[0],e[2]+i,e[1])}B("swatches").innerHTML=fh.map(n=>'<button data-c="'+n+'" style="background:'+n+'" aria-label="'+n+'"></button>').join("");function On(){const n=$.length===1?Xt($[0]):null;if(B("props").hidden=!n,B("multi").hidden=$.length<2,$.length>=2&&(B("multi").innerHTML="اخترت "+Cn($.length)+' أشكال<button class="btn run small" id="mGroup">⊕ جمّعهم</button><small class="sub">«جمّعهم» بيخليهم قطعة واحدة تتحرك مع بعض.</small><b class="lbl">رصّهم (Align)</b><div class="alignG">'+[["X",["⇤","⊕","⇥"]],["Y",["⤓","⊕","⤒"]],["Z",["⇤","⊕","⇥"]]].map(([i,s],r)=>"<span>"+i+"</span>"+s.map((o,a)=>'<button class="tb" data-al="'+r+","+a+'" title="'+i+" "+["البداية","النص","النهاية"][a]+'">'+o+"</button>").join("")).join("")+"</div>",B("mGroup").onclick=ia,B("multi").querySelectorAll("[data-al]").forEach(i=>i.onclick=()=>{const[s,r]=i.dataset.al.split(",").map(Number);mg(s,r)})),!n)return;B("pTitle").textContent=n.t==="group"?"مجموعة":n.t==="text"?"نص":n.t==="draw"?"رسمة":n.t==="poly"?hg(n.n):gn[n.t].ar,Th(n),B("pTxtRow").hidden=n.t!=="text",n.t==="text"&&document.activeElement!==B("pTxt")&&(B("pTxt").value=n.txt),n.t==="text"&&(B("pFont").value=n.fnt||Uc[0][0]),B("pSolid").classList.toggle("on",!n.h),B("pHole").classList.toggle("on",n.h),B("swatches").querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.c===n.c&&!n.h));const t=Ko(n);B("dW").value=kt(t.x*Math.abs(n.s[0])),B("dD").value=kt(t.z*Math.abs(n.s[2])),B("dH").value=kt(t.y*Math.abs(n.s[1]));const e=ge(n);B("pX").value=kt(n.p[0]),B("pZ").value=kt(n.p[2]),B("pY").value=kt(e.min.y),["rX","rY","rZ"].forEach((i,s)=>B(i).value=Math.round(Wi.radToDeg(n.r[s]))),["dW","dD","dH","pX","pY","pZ","rX","rY","rZ"].forEach(i=>B(i).disabled=!!n.lk)}const p1={3:"مثلث",4:"مربع",5:"خماسي",6:"سداسي",7:"سباعي",8:"ثماني",9:"تساعي",10:"عشاري",12:"اثنا عشري"},hg=n=>n>=Gi?"أسطوانة":p1[n]||"مضلع "+Cn(n)+" أوجه",fg=n=>n.t==="poly"||n.t==="cyl"||n.t==="cone",dg=n=>n.t==="poly"||!!(gn[n.t]&&gn[n.t].rd),m1=n=>n.t==="box"||n.t==="poly"||n.t==="cyl"||n.t==="oval"?9:n.t==="roof"?4:n.t==="wedge"?3:n.t==="arch"?2:1.5;function Th(n){const t=fg(n)&&!n.lk,e=dg(n)&&!n.lk;if(B("pShape").hidden=!t&&!e,B("pSidesRow").hidden=!t,B("pRoundRow").hidden=!e,t){const i=n.n||Gi;B("pSides").value=i,B("pSidesV").textContent=i>=Gi?"◯":Cn(i)}e&&(B("pRound").max=m1(n),B("pRound").value=n.rd||0,B("pRoundV").textContent=Cn(kt(n.rd||0))+" ملّي")}function Ah(n,t){const e=Math.abs(ge(n).min.y)<.6;t(),n.n>=Gi&&n.t!=="poly"&&delete n.n,n.rd||delete n.rd,Re(),e&&ea(n),Si(),Gu=""}B("pSides").addEventListener("input",()=>{const n=Xt($[0]);!n||!fg(n)||(Ah(n,()=>{n.n=+B("pSides").value}),Th(n),B("pTitle").textContent=n.t==="poly"?hg(n.n||Gi):gn[n.t].ar)});B("pRound").addEventListener("input",()=>{const n=Xt($[0]);!n||!dg(n)||(Ah(n,()=>{n.rd=kt(+B("pRound").value)}),Th(n))});["pSides","pRound"].forEach(n=>B(n).addEventListener("change",()=>re()));B("pClose").onclick=()=>Nn(null);B("pFold").onclick=()=>{const n=B("props").classList.toggle("folded"),t=B("pFold");t.setAttribute("aria-expanded",String(!n)),t.title=n?"افتح القائمة":"اطوي القائمة",t.setAttribute("aria-label",t.title)};B("pSolid").onclick=()=>{const n=Xt($[0]);n.h&&(n.h=!1,n.kids&&n.kids.every(t=>t.h)&&n.kids.forEach(t=>t.h=!1),Re(),rn(),re())};B("pHole").onclick=()=>{const n=Xt($[0]);n.h||(n.h=!0,Re(),rn(),re())};B("swatches").onclick=n=>{const t=n.target.closest("[data-c]");if(!t||!$.length)return;const e=Xt($[0]);e.c=t.dataset.c,e.h=!1,Re(),rn(),re()};[["dW",0,"x"],["dH",1,"y"],["dD",2,"z"]].forEach(([n,t,e])=>B(n).addEventListener("change",()=>{const i=Xt($[0]);if(!i)return;const s=Math.min(400,Math.max(1,+B(n).value||1)),r=Ko(i);if(i.lk)return;const o=Math.abs(ge(i).min.y)<.6,a=Math.sign(i.s[t]||1)*s/r[e];if(os){const c=a/(i.s[t]||1);i.s=i.s.map(l=>l*c)}else i.s[t]=a;if(te.get(i.id).scale.set(...i.s),o){const c=ge(i);i.p[1]=kt(i.p[1]-c.min.y),te.get(i.id).position.y=i.p[1]}Si(),re(),On()}));const Js=n=>{const t=te.get(n.id);t.position.set(...n.p),t.rotation.set(...n.r),t.scale.set(...n.s),Si(),jc()};[["pX",0],["pZ",2]].forEach(([n,t])=>B(n).addEventListener("change",()=>{const e=Xt($[0]);!e||e.lk||(e.p[t]=kt(+B(n).value||0),Js(e),re(),On())}));B("pY").addEventListener("change",()=>{const n=Xt($[0]);if(!n||n.lk)return;const t=+B("pY").value||0,e=ge(n);n.p[1]=kt(n.p[1]+t-e.min.y),Js(n),re(),On()});["rX","rY","rZ"].forEach((n,t)=>B(n).addEventListener("change",()=>{const e=Xt($[0]);!e||e.lk||(e.r[t]=Wi.degToRad((+B(n).value||0)%360),Js(e),ea(e),re(),On())}));document.querySelectorAll("[data-turn]").forEach(n=>n.onclick=()=>{const t=Xt($[0]);if(!t||t.lk)return;const[e,i]=n.dataset.turn.split(","),s=te.get(t.id),r=new w(e==="x"?1:0,e==="y"?1:0,e==="z"?1:0),o=ge(t),a=o.getCenter(new w);s.quaternion.premultiply(new Oe().setFromAxisAngle(r,(e==="y"?-1:1)*+i*Math.PI/2));const c=new Xi().setFromQuaternion(s.quaternion),l=h=>{const d=Math.round(h/(Math.PI/12))*(Math.PI/12);return Math.abs(d-h)<1e-4?d:h};t.r=[l(c.x),l(c.y),l(c.z)],s.rotation.set(...t.r),s.updateMatrixWorld();const u=ge(t).getCenter(new w);t.p=[kt(t.p[0]+a.x-u.x),t.p[1],kt(t.p[2]+a.z-u.z)],s.position.set(...t.p);const f=ge(t);t.p[1]=kt(t.p[1]+Math.max(0,o.min.y)-f.min.y),s.position.y=t.p[1],Js(t),re(),On(),wt.object===We&&$o(s)});B("lockBtn").onclick=()=>{const n=$.map(Xt).filter(Boolean);if(!n.length)return;const t=!n.every(e=>e.lk);n.forEach(e=>e.lk=t),rn(),re(),ue(t?"🔒 اتقفل: مش هيتحرك ولا يتغيّر":"🔓 اتفتح")};document.querySelectorAll("[data-mirror]").forEach(n=>n.onclick=()=>{const t=Xt($[0]);!t||t.lk||(t.s[+n.dataset.mirror]*=-1,Js(t),re())});let bp=0;function Ep(n,t,e){const i=$.map(Xt).filter(s=>s&&!s.lk);i.length&&(i.forEach(s=>{s.p[0]=kt(s.p[0]+n),s.p[1]=kt(Math.max(s.p[1]+t,s.p[1]-ge(s).min.y)),s.p[2]=kt(s.p[2]+e),Js(s)}),On(),clearTimeout(bp),bp=setTimeout(()=>re(),350))}function pg(){const n=new w().subVectors(Pt.target,qt.position);n.y=0,n.normalize();const t=Math.abs(n.x)>Math.abs(n.z)?[Math.sign(n.x),0]:[0,Math.sign(n.z)];return{fwd:t,right:[-t[1],t[0]]}}function mg(n,t){const e=$.map(Xt).filter(o=>o&&!o.lk);if(e.length<2)return;const i=new pe;$.forEach(o=>i.union(ge(Xt(o))));const s=["x","y","z"][n],r=t===0?i.min[s]:t===2?i.max[s]:(i.min[s]+i.max[s])/2;e.forEach(o=>{const a=ge(o),c=t===0?a.min[s]:t===2?a.max[s]:(a.min[s]+a.max[s])/2;o.p[n]=kt(o.p[n]+r-c),Js(o)}),re()}let Dc=null;function Kc(n,t){const e=qt.position.clone(),i=Pt.target.clone(),s=performance.now();Dc=()=>{const r=Math.min(1,(performance.now()-s)/350),o=r*(2-r);qt.position.lerpVectors(e,n,o),Pt.target.lerpVectors(i,t,o),Pt.update(),r>=1&&(Dc=null)}}B("homeBtn").onclick=()=>Kc(Nm.clone(),new w(0,10,0));B("fitBtn").onclick=()=>{const n=$.length?$.map(Xt):Rt;if(!n.length)return B("homeBtn").onclick();const t=new pe;n.forEach(o=>t.union(ge(o)));const e=new w,i=new w;t.getCenter(e),t.getSize(i);const s=Math.max(60,i.length()*1.6),r=new w().subVectors(qt.position,Pt.target).normalize();Kc(e.clone().add(r.multiplyScalar(s)),e)};const gg=n=>{const t=new w().subVectors(qt.position,Pt.target),e=Wi.clamp(t.length()*n,Pt.minDistance,Pt.maxDistance);Kc(Pt.target.clone().add(t.setLength(e)),Pt.target.clone())};B("zoomIn").onclick=()=>gg(.75);B("zoomOut").onclick=()=>gg(1.33);const Xr=B("vcube"),xg=new th({canvas:Xr,antialias:!0,alpha:!0});xg.setPixelRatio(1);const Ch=new lm,Dr=new In(30,1,.1,50);function g1(n,t){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.fillStyle="rgba(108,92,231,.10)",[[0,0,128,28],[0,100,128,28],[0,28,28,72],[100,28,28,72]].forEach(r=>i.fillRect(...r)),i.fillStyle="rgba(108,92,231,.22)",[[0,0],[100,0],[0,100],[100,100]].forEach(([r,o])=>i.fillRect(r,o,28,28)),i.strokeStyle="#B9C3D6",i.lineWidth=6,i.strokeRect(3,3,122,122),i.fillStyle="#3A4256",i.font="700 26px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const s=new tS(e);return s.colorSpace=$e,s}const x1=[["RIGHT","#F4F6FA"],["LEFT","#F4F6FA"],["TOP","#FFFFFF"],["BOTTOM","#E9EDF4"],["FRONT","#F9FAFC"],["BACK","#F4F6FA"]],Ph=new pt(new _e(2,2,2),x1.map(([n,t])=>new $s({map:g1(n,t)})));Ch.add(Ph);const _g=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];(function n(){if(Wm()){requestAnimationFrame(n);return}Dc&&Dc();const t=new w().subVectors(qt.position,Pt.target).normalize().multiplyScalar(7.5);Dr.position.copy(t),Dr.up.copy(qt.up),Dr.lookAt(0,0,0),xg.render(Ch,Dr),requestAnimationFrame(n)})();const Os=new pt(new _e(1,1,1),new $s({color:7101671,transparent:!0,opacity:.45,depthTest:!1}));Os.visible=!1;Ch.add(Os);Xr.addEventListener("pointermove",n=>{const t=Xr.getBoundingClientRect(),e=new Q((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),i=new Gc;i.setFromCamera(e,Dr);const s=i.intersectObject(Ph)[0];if(!s){Os.visible=!1;return}const r=_g[s.face.materialIndex],o=s.point,a=["x","y","z"].map((c,l)=>r[l]?r[l]:Math.abs(o[c])>.56?Math.sign(o[c]):0);Os.scale.set(...a.map(c=>c?.5:1.42)),Os.position.set(...a.map(c=>c*.78)),Os.visible=!0});Xr.addEventListener("pointerleave",()=>Os.visible=!1);Xr.addEventListener("click",n=>{const t=Xr.getBoundingClientRect(),e=new Q((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),i=new Gc;i.setFromCamera(e,Dr);const s=i.intersectObject(Ph)[0];if(!s)return;const r=s.point.clone(),o=_g[s.face.materialIndex],a=new w(...["x","y","z"].map((l,u)=>o[u]?o[u]:Math.abs(r[l])>.56?Math.sign(r[l]):0)),c=qt.position.distanceTo(Pt.target);!a.x&&!a.z&&a.add(new w(0,0,.002)),Kc(Pt.target.clone().add(a.normalize().multiplyScalar(c)),Pt.target.clone())});function Rh(){B("undoBtn").disabled=An<=0,B("redoBtn").disabled=An>=Sn.length-1,B("dupBtn").disabled=B("delBtn").disabled=B("dropBtn").disabled=!$.length,B("groupBtn").disabled=$.length<2,B("ungroupBtn").disabled=!$.some(e=>(Xt(e)||{}).t==="group");const n=$.map(Xt).filter(Boolean),t=n.length&&n.every(e=>e.lk);B("lockBtn").disabled=!n.length,B("lockBtn").classList.toggle("on",!!t),B("lockBtn").querySelector("i").textContent=t?"🔒":"🔓",B("lockBtn").querySelector("span").textContent=t?"مقفول":"قفل",B("alignBtn").disabled=$.length<2,$.length<2?B("alignPop").hidden=!0:B("alignPop").hidden||yg()}function yg(){B("alignPop").innerHTML="<b>رصّ "+Cn($.length)+' أشكال</b><div class="alignG">'+[["X ↔",["⇤ أول","⊕ نص","⇥ آخر"]],["Y ↕ ارتفاع",["⤓ تحت","⊕ نص","⤒ فوق"]],["Z ⤢ عمق",["⇤ أول","⊕ نص","⇥ آخر"]]].map(([n,t],e)=>"<span>"+n+"</span>"+t.map((i,s)=>'<button class="tb" data-al="'+e+","+s+'">'+i+"</button>").join("")).join("")+"</div>",B("alignPop").querySelectorAll("[data-al]").forEach(n=>n.onclick=()=>{const[t,e]=n.dataset.al.split(",").map(Number);mg(t,e)})}B("alignBtn").onclick=()=>{if($.length<2){ue("اختار شكلين أو أكتر الأول (☑ تحديد متعدد)");return}B("alignPop").hidden=!B("alignPop").hidden,B("alignPop").hidden||yg()};let bn=!1;B("multiBtn").onclick=()=>{bn=!bn,bn||Nn(null),B("multiBtn").classList.toggle("on",bn),B("multiBtn").setAttribute("aria-pressed",String(bn)),ue(bn?"☑ دوس على الأشكال اللي عايزها، أو اسحب صباعك على مكان فاضي ترسم مستطيل":"رجعنا للتحديد العادي، واتلغى التحديد")};{const n=B("tbar"),t=B("tbGrip");let e=(()=>{try{return+localStorage.getItem("robo-3d-tbz")||1}catch{return 1}})();const i=s=>{e=Math.max(.55,Math.min(1.35,s)),n.style.zoom=e.toFixed(2);try{localStorage.setItem("robo-3d-tbz",e.toFixed(2))}catch{}};matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)").matches&&(e=1),i(e),t.addEventListener("pointerdown",s=>{s.preventDefault();const r=s.clientY,o=e;t.setPointerCapture(s.pointerId),t.classList.add("on");const a=l=>i(o+(l.clientY-r)/140),c=()=>{t.classList.remove("on"),t.removeEventListener("pointermove",a),t.removeEventListener("pointerup",c),t.removeEventListener("pointercancel",c)};t.addEventListener("pointermove",a),t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}),t.addEventListener("dblclick",()=>i(1))}B("stlBtn").onclick=()=>{const n=Rt.filter(r=>!r.h);if(!n.length){ue("مفيش أشكال مُصمتة تتطبع");return}qc(),Vr.updateMatrixWorld(!0);const t=new zi;n.forEach(r=>{const o=te.get(r.id),a=Ys.get(r.id),c=new pt(a?a.view.geometry:o.geometry);c.matrixAutoUpdate=!1,c.matrix.copy(o.matrixWorld),t.add(c)}),t.rotation.x=Math.PI/2,t.updateMatrixWorld(!0);const e=new $S().parse(t,{binary:!0}),i=((B("pname").value||"robo-3d").trim().replace(/[\\/:*?"<>|]+/g,"").replace(/\s+/g,"_")||"robo-3d")+".stl",s=document.createElement("a");s.href=URL.createObjectURL(new Blob([e],{type:"model/stl"})),s.download=i,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3),ue("⬇ اتنزّل "+i)};function vg(){const n=B("projList");n.innerHTML=Te.list.map(t=>'<li class="'+(t.id===Te.cur?"cur":"")+'"><span class="nm"><b dir="auto"></b><small>'+Cn((t.objs||[]).length)+' شكل</small></span><button class="btn ghost small" data-open="'+t.id+'">افتح</button><button class="btn ghost small" data-del="'+t.id+'" aria-label="امسح">🗑</button></li>').join("")||'<li class="empty">لسه مفيش تصاميم</li>',n.querySelectorAll("li b").forEach((t,e)=>t.textContent=Te.list[e].name),n.querySelectorAll("[data-open]").forEach(t=>t.onclick=()=>{Yi(!1),Go(t.dataset.open),sa()}),n.querySelectorAll("[data-del]").forEach(t=>t.onclick=()=>{if(t.dataset.sure!=="1"){t.dataset.sure="1",t.textContent="متأكد؟";return}Te.list=Te.list.filter(e=>e.id!==t.dataset.del),Te.cur===t.dataset.del&&(Te.list.length?Go(Te.list[0].id):$m()),Jo(),vg()})}const sa=()=>{B("projModal").hidden=!0};B("myBtn").onclick=()=>{Yi(!1),vg(),B("projModal").hidden=!1,B("pmClose").focus()};B("pmClose").onclick=sa;B("newBtn").onclick=()=>{$m(),sa()};B("projModal").addEventListener("click",n=>{n.target.id==="projModal"&&sa()});const Mg="robo-3d-clip";let Yu=0;function wp(n){if(!$.length)return;const t=$.map(Xt).filter(Boolean);try{localStorage.setItem(Mg,JSON.stringify(t))}catch{}if(Yu=0,n){if(t.some(e=>e.lk)){ue("🔒 فيه شكل مقفول. افتح القفل الأول");return}$c(),ue("✂️ اتقص. دوس Ctrl+V عشان تحطه")}else ue("📋 اتنسخ "+(t.length>1?Cn(t.length)+" أشكال":"الشكل")+". دوس Ctrl+V عشان تلزقه")}function _1(){let n=null;try{n=JSON.parse(localStorage.getItem(Mg)||"null")}catch{}if(!Array.isArray(n)||!n.length){ue("مفيش حاجة منسوخة. اختار شكل ودوس Ctrl+C");return}Yu++;const t=20*Yu,e=[];n.forEach(i=>{const s=JSON.parse(JSON.stringify(i));s.id=yn(),delete s.lk,s.p[0]=kt(s.p[0]+t),s.p[2]=kt(s.p[2]+t),s.kids&&s.kids.forEach(r=>{r.p[0]+=t,r.p[2]+=t}),s.o&&(s.o[0]+=t,s.o[2]+=t),Rt.push(s),e.push(s.id)}),Re(),$=e,rn(),re(),ue("📌 اتلزق")}addEventListener("keydown",n=>{if(n.target.closest&&n.target.closest("input,select,textarea,[contenteditable]"))return;const t=n.ctrlKey||n.metaKey,e=n.code,i=n.key.toLowerCase();if(bt&&!B("drawModal").hidden){t&&e==="KeyZ"?(n.preventDefault(),B("drUndo").click()):i==="escape"&&B("drCancel").click();return}if(t&&e==="KeyZ")n.preventDefault(),B(n.shiftKey?"redoBtn":"undoBtn").click();else if(t&&e==="KeyY")n.preventDefault(),B("redoBtn").click();else if(t&&e==="KeyC")n.preventDefault(),wp(!1);else if(t&&e==="KeyX")n.preventDefault(),wp(!0);else if(t&&e==="KeyV")n.preventDefault(),_1();else if(t&&e==="KeyD")n.preventDefault(),bh();else if(t&&e==="KeyA")n.preventDefault(),$=Rt.map(s=>s.id),rn();else if(t&&e==="KeyG")n.preventDefault(),n.shiftKey?Eh():ia();else if(t&&e==="KeyS")n.preventDefault(),Yi(!0);else if(i.startsWith("arrow")&&$.length){n.preventDefault();const s=(t||n.shiftKey)&&(i==="arrowup"||i==="arrowdown"),r=(hi||1)*(n.shiftKey&&!s?10:1);if(s)Ep(0,i==="arrowup"?r:-r,0);else{const{fwd:o,right:a}=pg(),c=i==="arrowup"?o:i==="arrowdown"?[-o[0],-o[1]]:i==="arrowright"?a:[-a[0],-a[1]];Ep(c[0]*r,0,c[1]*r)}}else{if(t)return;if(i==="delete"||i==="backspace")$c();else if(i==="escape")Nn(null),sa();else if(e==="KeyW")Lo("translate");else if(e==="KeyE")Lo("rotate");else if(e==="KeyR")Lo("scale");else if(e==="KeyD")sg();else if(e==="BracketLeft"||e==="BracketRight"){const s=Xt($[0]);s&&!s.lk&&$.length===1&&(Mh(s,vh(s),(e==="BracketLeft"?1:-1)*Math.PI/12),re(),On())}}});setTimeout(()=>document.body.classList.add("quiet"),3e4);B("keysBtn").onclick=()=>{B("keysModal").hidden=!1,B("kmClose").focus()};B("kmClose").onclick=()=>{B("keysModal").hidden=!0};B("keysModal").addEventListener("click",n=>{n.target===B("keysModal")&&(B("keysModal").hidden=!0)});addEventListener("keydown",n=>{n.key==="Escape"&&!B("keysModal").hidden&&(B("keysModal").hidden=!0)});let Tp=0;function ue(n){const t=B("toast");t.textContent=n,t.hidden=!1,clearTimeout(Tp),Tp=setTimeout(()=>t.hidden=!0,2600)}const Io=new URLSearchParams(location.search),Ke=n=>ge(n),ve=n=>{const t=Ke(n),e=new w;return t.getSize(e),e},le=()=>Rt.filter(n=>!n.h),Ic=()=>{const n=le();return n.some(t=>n.some(e=>{if(t===e)return!1;const i=Ke(t),s=Ke(e);return i.min.y>=s.max.y-2&&i.min.y>1&&i.min.x<s.max.x&&i.max.x>s.min.x&&i.min.z<s.max.z&&i.max.z>s.min.z}))},Sg=()=>Rt.some(n=>n.t==="group"&&n.kids.some(t=>t.h)&&n.kids.some(t=>!t.h)&&!n.h),se=(n,t,e=1)=>Math.abs(n-t)<=e,on={k1:{t:"ضيف ٣ أشكال مختلفة 🧊",spot:[["#shapeList","هنا الأشكال. اضغط على شكل فيظهر على السطح"]],say:"دوس على ٣ أشكال مختلفة من على الجنب (مكعب، كورة، أسطوانة…).",check:()=>new Set(le().map(n=>n.t)).size>=3},k2:{t:"لوّن الأشكال 🎨",spot:[["#c3","اضغط على شكل لتختاره، فتظهر الألوان على الجانب. اختر لونًا"]],say:"الأشكال دي كلها بيضا. دوس على كل شكل واختار له لون، وخلّي كل واحد لونه مختلف.",pre:[{t:"box",p:[-40,10,0]},{t:"sphere",p:[0,10,0]},{t:"cyl",p:[40,10,0]}].map((n,t)=>({id:"w"+t,c:"#FFFFFF",h:!1,r:[0,0,0],s:[1,1,1],...n})),check:()=>le().every(n=>n.c!=="#FFFFFF")&&new Set(le().map(n=>n.c)).size>=3},k3:{t:"ابني برج 🗼",spot:[['[data-mode="translate"]',"«حرّك»: اسحب السهم الأخضر إلى أعلى لترفع الشكل فوق الآخر"]],say:"حط شكل فوق شكل. اسحب السهم الأخضر لفوق، أو خلّي الشكل على السطح وارفعه.",check:()=>Ic()},k4:{t:"كبّر الشكل 📏",spot:[['[data-mode="scale"]',"«المقاس»: اختر الشكل واسحب النقاط لتكبّره، أو اكتب الارتفاع"]],say:"دوس على شكل واكتب الارتفاع ٤٠ ملّي أو أكتر (أو استخدم «المقاس»).",check:()=>le().some(n=>ve(n).y>=39)},k5:{t:"اعمل فتحة ⬚",spot:[["#holeList","هذه الفتحات (Hole): اسحب واحدة وضعها داخل الشكل فتثقبه وحدها"]],say:"حط مكعب، وحط «فتحة دايرة» جواه: هتشوفها بتخرّم المكعب لوحدها. وبعدين دوس «✂️ نفّذ الفتحة».",check:()=>Sg()},k6:{t:"مشروع: جسم روبو 🤖",say:"اعمل روبو: جسم وراس فوقه، و٤ أشكال على الأقل، و٢ ألوان أو أكتر.",check:()=>le().length>=4&&Ic()&&new Set(le().map(n=>n.c)).size>=2},s1:{t:"مقاس بالظبط 📐",say:"اعمل مكعب مقاسه ٣٠ × ٣٠ × ١٠ ملّي بالظبط (العرض والعمق ٣٠، والارتفاع ١٠).",check:()=>le().some(n=>n.t==="box"&&se(ve(n).x,30)&&se(ve(n).z,30)&&se(ve(n).y,10))},s2:{t:"على السطح وفي النص 🎯",say:"خلّي أسطوانة قاعدتها على السطح بالظبط (y = 0) ومركزها في نص السطح (x = 0 و z = 0).",check:()=>le().some(n=>n.t==="cyl"&&se(Ke(n).min.y,0,.6)&&se(n.p[0],0,1)&&se(n.p[2],0,1))},s3:{t:"ميدالية 🏷",say:"اعمل ميدالية: شكل مسطح ارتفاعه من ٣ لـ ٦ ملّي، وفيها فتحة دايرة للسلسلة، وبعدين دوس «✂️ نفّذ الفتحة».",check:()=>Rt.some(n=>n.t==="group"&&!n.h&&n.kids.some(t=>t.h)&&ve(n).y>=2.5&&ve(n).y<=6.5)},s4:{t:"حامل موتور ⚙️",say:"اعمل قطعة فيها فتحة دايرة قطرها ٢٤ ملّي (زي مقاس موتور صغير). استخدم «فتحة دايرة» وخلّي عرضها وعمقها ٢٤، وبعدين دوس «✂️ نفّذ الفتحة».",check:()=>Rt.some(n=>n.t==="group"&&!n.h&&n.kids.some(t=>t.h&&t.t==="cyl"&&se(yi.cyl.x*t.s[0],24,1)&&se(yi.cyl.z*t.s[2],24,1)))},s5:{t:"مشروع: صمّم هيكل عربيتك 🚗",say:"صمّم جسم عربية: قاعدة، و٤ عجلات (أسطوانات)، وفتحة واحدة على الأقل لتوصيل الأسلاك (حط الفتحة ودوس «✂️ نفّذ الفتحة»).",check:()=>Rt.filter(n=>!n.h).reduce((n,t)=>n+(t.t==="cyl"?1:t.t==="group"?t.kids.filter(e=>e.t==="cyl"&&!e.h).length:0),0)>=4&&Rt.some(n=>n.t==="group"&&n.kids.some(t=>t.h))}},bg=()=>Sg()||Ys.size>0,Ve=(n,t,e)=>({id:yn(),t:n,p:t,c:"#FFFFFF",h:!1,r:[0,0,0],s:[1,1,1],...e||{}}),Eg=()=>{const n=le();return n.some(t=>{const e=Ke(t);return e.min.y<=1?!1:!n.some(i=>{if(t===i)return!1;const s=Ke(i);return e.min.y<=s.max.y+2&&e.min.x<s.max.x&&e.max.x>s.min.x&&e.min.z<s.max.z&&e.max.z>s.min.z})})},y1=()=>{const n=le().map(Ke).sort((i,s)=>i.min.y-s.min.y);if(!n.length)return 0;let t=1,e=n[0].max.y;for(const i of n.slice(1))i.min.y<=e+2&&i.min.y>=e-2&&(t++,e=i.max.y);return t};Object.assign(on.k1,{t:"أضف 3 أشكال مختلفة 🧊",say:"اضغط على 3 أشكال مختلفة من القائمة الجانبية (مكعب، كرة، أسطوانة…)."});Object.assign(on.k2,{t:"لوّن الأشكال 🎨",say:"كل هذه الأشكال بيضاء. اضغط على كل شكل واختر له لونًا، وليكن لكل شكل لون مختلف."});Object.assign(on.k3,{t:"ابنِ برجًا 🗼",say:"ضع شكلًا فوق شكل. اسحب السهم الأخضر إلى أعلى، أو استعمل Shift مع ↑."});Object.assign(on.k4,{t:"كبّر الشكل 📏",say:"اضغط على شكل واجعل ارتفاعه 40 ملّي أو أكثر: اسحب النقطة العليا، أو اضغط عليها واكتب الرقم."});Object.assign(on.k5,{t:"اصنع فتحة (Hole) ⬚",say:"ضع مكعبًا، ثم ضع «فتحة دائرية» داخله: ستراها تثقب المكعب وحدها.",check:()=>bg()});Object.assign(on.k6,{t:"مشروع: جسم روبو 🤖",say:"اصنع روبو: جسمًا ورأسًا فوقه، و4 أشكال على الأقل، ولونين أو أكثر."});Object.assign(on,{kb:{t:"مكعب وكرة ⚽",say:"تدريب: أضف مكعبًا (Cube) وكرة (Sphere). ابحث عنهما في القائمة.",check:()=>le().some(n=>n.t==="box")&&le().some(n=>n.t==="sphere")},kc:{t:"أربعة ألوان 🌈",say:"تدريب: أعطِ كل شكل من الأشكال الأربعة لونًا مختلفًا.",pre:[Ve("box",[-60,10,0]),Ve("cyl",[-20,10,0]),Ve("cone",[20,10,0]),Ve("pyramid",[60,10,0])],check:()=>le().every(n=>n.c!=="#FFFFFF")&&new Set(le().map(n=>n.c)).size>=4},kt:{t:"برج من 3 أدوار 🏢",say:"تدريب: ضع 3 أشكال بعضها فوق بعض: الأول على السطح، والثاني فوقه، والثالث فوق الثاني.",check:()=>y1()>=3},kw:{t:"جسر عريض 🌉",say:"تدريب: اجعل مكعبًا عرضه 50 ملّي أو أكثر. اسحب النقطة الجانبية، أو اضغط عليها واكتب الرقم.",check:()=>le().some(n=>n.t==="box"&&ve(n).x>=49)},kr:{t:"لُفّ الشكل (Rotate) 🔄",spot:[["#c3","اختر الشكل أولًا، ثم افتح «🛠 أدوات» فوقه واضغط «حول X»"]],say:"اختر شكلًا، ثم افتح «🛠 أدوات» واضغط «حول X» أو «حول Z»: الشكل ينام على جنبه.",pre:[Ve("cyl",[0,0,0],{c:"#4C97FF"})],check:()=>le().some(n=>Math.abs(n.r[0])>.3||Math.abs(n.r[2])>.3)},kh:{t:"فتحتان في شكل واحد 🧀",say:"تدريب: ضع فتحتين (Holes) داخل المكعب، فيصير فيه ثقبان.",pre:[Ve("box",[0,0,0],{c:"#FFBF00",s:[2,1,1]})],check:()=>{const n=le()[0]&&Ke(le()[0]);return n?Rt.filter(t=>t.h).filter(t=>Ke(t).intersectsBox(n)).length>=2||Rt.some(t=>t.t==="group"&&!t.h&&t.kids.filter(e=>e.h).length>=2):!1}},kg:{t:"اجمع شكلين (Group) 🧲",spot:[["#multiBtn","«تحديد متعدد»: اضغطه، ثم اضغط على الشكلين"],["#groupBtn","ثم «جمّع»: يصير الشكلان قطعة واحدة"]],say:"اختر «تحديد متعدد»، ثم اضغط على الشكلين، ثم اضغط «جمّع»: يصيران قطعة واحدة.",pre:[Ve("box",[0,0,0],{c:"#FF6680"}),Ve("sphere",[0,20,0],{c:"#FFBF00"})],check:()=>Rt.some(n=>n.t==="group"&&!n.h&&n.kids.filter(t=>!t.h).length>=2)},kd:{t:"انسخ الشجرة (Copy) 🌳🌳",spot:[["#dupBtn","«نسخة»: اختر الشكل واضغطها فتظهر نسخة مثله تمامًا"]],say:"اختر الشجرة واضغط «نسخة» مرتين: صار عندك 3 أشجار. رتّبها جنب بعض.",pre:[Ve("cone",[0,0,0],{c:"#0FBD8C"})],check:()=>le().filter(n=>n.t==="cone").length>=3},kf:{t:"🔧 أصلح خطأً واحدًا: الرأس الطائر",say:"رأس الروبو يطير في الهواء! ضعه فوق الجسم تمامًا، فلا يبقى شكل معلّق في الهواء.",pre:[Ve("box",[0,0,0],{c:"#4C97FF",s:[1,1.4,1]}),Ve("sphere",[70,60,30],{c:"#FFBF00"})],check:()=>Ic()&&!Eg()},kp:{t:"مشروع: بيت روبو 🏠",say:"مشروع: ابنِ بيتًا لروبو: جسمًا (مكعب)، وسقفًا فوقه (هرم أو سقف)، وبابًا (فتحة) في الجسم، ولونين أو أكثر.",check:()=>Ic()&&le().some(n=>n.t==="pyramid"||n.t==="roof"||n.t==="cone"||n.t==="group"&&n.kids.some(t=>/pyramid|roof|cone/.test(t.t)))&&bg()&&new Set(le().map(n=>n.c)).size>=2}});const Ns=()=>Rt.flatMap(n=>n.t==="group"?n.kids.filter(t=>t.h).map(t=>({k:t,cut:!0})):n.h?[{k:n,cut:le().some(t=>Ke(n).intersectsBox(Ke(t)))}]:[]).filter(({k:n,cut:t})=>n.t==="cyl"&&t).map(({k:n})=>({d:yi.cyl.x*n.s[0],dz:yi.cyl.z*n.s[2],x:n.p[0],z:n.p[2]})),Ap=(n,t=1.5)=>{const e=Ke(n);return se((e.min.x+e.max.x)/2,0,t)&&se((e.min.z+e.max.z)/2,0,t)};Object.assign(on,{sa:{t:"تدريب: لوح 60 × 40 × 5 📐",say:"تدريب: اصنع لوحًا (مكعب) عرضه 60 ملّي، وعمقه 40، وارتفاعه 5 بالضبط. اضغط على النقاط واكتب الأرقام.",check:()=>le().some(n=>n.t==="box"&&se(ve(n).x,60)&&se(ve(n).z,40)&&se(ve(n).y,5))},sb:{t:"تدريب: كرة فوق المنتصف 🎯",say:"تدريب: ضع كرة (Sphere) فوق المكعب تمامًا: قاعدتها على سطحه العلوي، ومركزها فوق منتصفه (x = 0 و z = 0). استعمل خانات الموضع (Position).",pre:[Ve("box",[0,0,0],{c:"#4C97FF",s:[1.5,1,1.5]})],check:()=>{const n=le().find(e=>e.t==="box"),t=le().find(e=>e.t==="sphere");return!n||!t?!1:se(Ke(t).min.y,Ke(n).max.y,1)&&Ap(t)}},sF:{t:"🔧 أصلح خطأً واحدًا: القطعة الغارقة",say:"هذه القطعة لن تُطبع صحيحة! جزء منها غارق تحت السطح (y أقل من 0). الطابعة تبدأ من السطح، فاجعل قاعدتها على السطح تمامًا (y = 0).",pre:[Ve("box",[0,-6,0],{c:"#FF8C1A",s:[2,1,1]})],check:()=>{const n=le();return n.length>0&&n.every(t=>se(Ke(t).min.y,0,.6))}},sC:{t:"تحدٍّ: هرم الدرجات 🏆",say:"تحدٍّ: ثلاثة مكعبات بعضها فوق بعض في المنتصف: عرض الأول 60، والثاني 40، والثالث 20 (والعمق مثل العرض)، وارتفاع كل واحد 10.",check:()=>{const n=le().filter(e=>e.t==="box").map(e=>({d:ve(e),B:Ke(e),o:e})).sort((e,i)=>e.B.min.y-i.B.min.y);return n.length<3?!1:[60,40,20].every((e,i)=>n[i]&&se(n[i].d.x,e,1.5)&&se(n[i].d.z,e,1.5)&&se(n[i].d.y,10,1)&&se(n[i].B.min.y,i*10,1)&&Ap(n[i].o))}},sk:{t:"تدريب: مسطرة بثلاث فتحات 📏",say:"تدريب: في هذا اللوح ضع 3 فتحات دائرية (Holes) قطر كل واحدة 5 ملّي أو أكثر، لتعلّقه بثلاثة مسامير.",pre:[Ve("box",[0,0,0],{c:"#FFBF00",s:[4,.15,1.2]})],check:()=>Ns().filter(n=>n.d>=4.5).length>=3},sm:{t:"🔧 أصلح خطأً واحدًا: فتحة الموتور الصغيرة",say:"الموتور قطره 24 ملّي، لكن الفتحة في الحامل أصغر منه، فلن يدخل! اختر الفتحة واجعل قطرها 24 (العرض والعمق).",pre:[Ve("box",[0,0,0],{c:"#9966FF",s:[2,.3,2]}),Ve("cyl",[0,-2,0],{h:!0,s:[.9,.5,.9],c:"#888888"})],check:()=>Ns().some(n=>se(n.d,24,1)&&se(n.dz,24,1))},sT:{t:"مسافة السماح (Tolerance) 🖨",say:"الطابعة ثلاثية الأبعاد ليست دقيقة 100٪: الفتحة تخرج أضيق قليلًا. لذلك نزيد الفتحة نصف ملّي تقريبًا (مسافة السماح). اصنع حاملًا لموتور قطره 24: اجعل الفتحة بين 24.3 و 25 ملّي.",pre:[Ve("box",[0,0,0],{c:"#0FBD8C",s:[2,.3,2]})],check:()=>Ns().some(n=>n.d>=24.25&&n.d<=25.05&&n.dz>=24.25&&n.dz<=25.05)},sw:{t:"تدريب: عجلة العربية 🛞",say:"تدريب: اصنع عجلة: أسطوانة قطرها 40 ملّي وارتفاعها 8، وفي منتصفها فتحة للمحور قطرها 5 ملّي.",check:()=>le().filter(t=>t.t==="cyl"||t.t==="group").some(t=>se(ve(t).x,40,1)&&se(ve(t).z,40,1)&&se(ve(t).y,8,1))&&Ns().some(t=>se(t.d,5,.6))},sP2:{t:"مشروع: حامل حساس المسافة 📡",say:"مشروع: حساس المسافة (Ultrasonic) له «عينان» قطر كل واحدة 16 ملّي، والمسافة بين مركزيهما 26 ملّي. صمّم لوحًا فيه فتحتان بهذين المقاسين بالضبط، فيدخل الحساس فيه.",check:()=>{const n=Ns().filter(t=>se(t.d,16,1)&&se(t.dz,16,1));return n.some((t,e)=>n.some((i,s)=>s>e&&se(Math.hypot(t.x-i.x,t.z-i.z),26,1)))}}});Object.assign(on,{e1:{t:"حامل قلم ✏️",say:"صمّم حامل قلم: أسطوانة قطرها 30 ملّي وارتفاعها 40، وفي نصّها فتحة (Hole) قطرها بين 12 و 20 ملّي يدخل فيها القلم.",check:()=>le().some(n=>se(ve(n).x,30,1.5)&&se(ve(n).z,30,1.5)&&se(ve(n).y,40,1.5))&&Ns().some(n=>n.d>=11.5&&n.d<=20.5)},e2:{t:"لوحة اسم 🏷",say:"لوح 80 × 20 × 4 ملّي، وفوقه اسمك بالنص (Text) واقف على سطحه، مش طاير ولا غارق.",check:()=>{const n=le().find(e=>e.t==="box"&&se(ve(e).x,80,1.5)&&se(ve(e).z,20,1.5)&&se(ve(e).y,4,1)),t=le().find(e=>e.t==="text");return!!(n&&t)&&se(Ke(t).min.y,Ke(n).max.y,1.2)&&!Eg()}},e3:{t:"🔧 أصلح خطأً واحدًا: العجلتين مش زي بعض",say:"العربية هتمشي عوجة! العجلة اليمين قطرها 40 والشمال أصغر. خلّي الاتنين 40 ملّي بالظبط (العرض والعمق).",pre:[Ve("cyl",[-35,0,0],{c:"#1B2350",s:[2,.4,2]}),Ve("cyl",[35,0,0],{c:"#1B2350",s:[1.5,.4,1.5]})],check:()=>{const n=le().filter(t=>t.t==="cyl");return n.length>=2&&n.every(t=>se(ve(t).x,40,1)&&se(ve(t).z,40,1))}},eP:{t:"مشروع: حامل الأردوينو 🛠",say:"مشروع: لوح يتركّب عليه الأردوينو: 70 × 55 ملّي على الأقل وسُمكه من 3 لـ 5، وفيه 4 فتحات للمسامير قطر كل واحدة 3 ملّي أو أكتر.",check:()=>le().some(n=>n.t==="box"&&ve(n).x>=68.5&&ve(n).z>=53.5&&ve(n).y>=2.5&&ve(n).y<=5.5)&&Ns().filter(n=>n.d>=2.9).length>=4}});Object.assign(on.s1,{spot:[["#shapeList","اختر «مكعب» من هنا"],["#dW","ثم اكتب المقاس بالملّي: العرض والعمق والارتفاع"]]});Object.assign(on.s2,{spot:[["#shapeList","اختر «أسطوانة»"],["#pX","المكان: X و Z صفر يعني في نصّ السطح، و Y الارتفاع عن السطح"]]});Object.assign(on.s3,{spot:[["#holeList","الفتحات هنا: ضع فتحة دائرة داخل الشكل المسطّح"],["#pApplyHole","ثم اضغط «✂️ نفّذ الفتحة»"]]});Object.assign(on.s4,{spot:[["#holeList","فتحة دائرة، واجعل عرضها وعمقها 24 ملّي"]]});const Ut=(n,t,e,i,s,r,o,a,c)=>Object.assign({id:yn(),t:n,c:a||"#4C97FF",h:!1,p:[t,e+r/2,i],r:[0,0,0],s:[s/20,r/20,o/20]},c||{}),un=(n,t,e,i,s)=>Ut("cyl",n,t,e,i,s,i,"#8E9AAF",{h:!0}),gu={k1:()=>[Ut("box",-35,0,0,20,20,20,"#FF6680"),Ut("sphere",0,0,0,20,20,20,"#FFBF00"),Ut("cyl",35,0,0,20,20,20,"#4C97FF")],k2:()=>[Ut("box",-40,0,0,20,20,20,"#FF6680"),Ut("sphere",0,0,0,20,20,20,"#0FBD8C"),Ut("cyl",40,0,0,20,20,20,"#9966FF")],k3:()=>[Ut("box",0,0,0,24,20,24,"#4C97FF"),Ut("box",0,20,0,18,16,18,"#FFBF00"),Ut("cone",0,36,0,16,18,16,"#FF6680")],k4:()=>[Ut("box",0,0,0,20,44,20,"#0FBD8C")],k5:()=>[Ut("box",0,0,0,40,20,40,"#FFBF00"),un(0,-2,0,16,24)],k6:()=>[Ut("box",0,0,0,26,30,18,"#4C97FF"),Ut("box",0,30,0,18,16,16,"#FFBF00"),Ut("cyl",-18,6,0,8,20,8,"#FF6680"),Ut("cyl",18,6,0,8,20,8,"#FF6680"),Ut("sphere",0,46,0,6,6,6,"#FF6680")],kb:()=>[Ut("box",-20,0,0,20,20,20,"#4C97FF"),Ut("sphere",20,0,0,20,20,20,"#FFBF00")],kc:()=>[Ut("box",-60,0,0,20,20,20,"#FF6680"),Ut("cyl",-20,0,0,20,20,20,"#FFBF00"),Ut("cone",20,0,0,20,20,20,"#0FBD8C"),Ut("pyramid",60,0,0,20,20,20,"#9966FF")],kt:()=>[Ut("box",0,0,0,26,18,26,"#FF6680"),Ut("cyl",0,18,0,20,18,20,"#FFBF00"),Ut("box",0,36,0,14,14,14,"#4C97FF")],kw:()=>[Ut("box",0,0,0,54,20,20,"#FF8C1A")],kr:()=>[Ut("cyl",0,0,0,20,20,20,"#4C97FF",{r:[0,0,Math.PI/2]})],kh:()=>[Ut("box",0,0,0,40,20,20,"#FFBF00"),un(-10,-2,0,10,24),un(10,-2,0,10,24)],kg:()=>[Ut("box",0,0,0,20,20,20,"#FF6680"),Ut("sphere",0,20,0,20,20,20,"#FFBF00")],kd:()=>[-30,0,30].flatMap(n=>[Ut("cyl",n,0,0,6,8,6,"#8B5A2B"),Ut("cone",n,8,0,20,24,20,"#0FBD8C")]),kp:()=>[Ut("box",0,0,0,40,30,40,"#FF6680"),Ut("pyramid",0,30,0,44,22,44,"#FFBF00"),Ut("box",0,-1,18,12,20,8,"#8E9AAF",{h:!0})],s1:()=>[Ut("box",0,0,0,30,10,30,"#4C97FF")],s2:()=>[Ut("cyl",0,0,0,20,20,20,"#0FBD8C")],s3:()=>[Ut("cyl",0,0,0,40,4,40,"#FFBF00"),un(0,-1,13,6,6)],s4:()=>[Ut("box",0,0,0,40,10,40,"#9966FF"),un(0,-1,0,24,12)],s5:()=>[Ut("box",0,6,0,80,8,44,"#FF6680"),...[[-28,24],[28,24],[-28,-24],[28,-24]].map(([n,t])=>Ut("cyl",n,0,t,20,6,20,"#333333",{r:[Math.PI/2,0,0],p:[n,10,t]})),un(0,5,0,10,10)],sa:()=>[Ut("box",0,0,0,60,5,40,"#4C97FF")],sb:()=>[Ut("box",0,0,0,30,20,30,"#4C97FF"),Ut("sphere",0,20,0,20,20,20,"#FFBF00")],sC:()=>[Ut("box",0,0,0,60,10,60,"#FF6680"),Ut("box",0,10,0,40,10,40,"#FFBF00"),Ut("box",0,20,0,20,10,20,"#0FBD8C")],sk:()=>[Ut("box",0,0,0,80,4,20,"#FFBF00"),un(-28,-1,0,6,6),un(0,-1,0,6,6),un(28,-1,0,6,6)],sT:()=>[Ut("box",0,0,0,40,10,40,"#9966FF"),un(0,-1,0,24.5,12)],sw:()=>[Ut("cyl",0,0,0,40,8,40,"#333333"),un(0,-1,0,5,10)],sP2:()=>[Ut("box",0,0,0,60,4,32,"#0FBD8C"),un(-13,-1,0,16,6),un(13,-1,0,16,6)],e1:()=>[Ut("cyl",0,0,0,30,40,30,"#FF8C1A"),un(0,6,0,16,36)],eP:()=>[Ut("box",0,0,0,72,4,56,"#4C97FF"),...[[-30,-22],[30,-22],[-30,22],[30,22]].map(([n,t])=>un(n,-1,t,3.5,6))]},Vn=on[Io.get("task")]?Io.get("task"):null;let Fc=!1;function v1(){if(Fc)return;let n=!1;try{n=!!on[Vn].check()}catch{}if(n){Fc=!0,B("taskBar").classList.add("done"),B("taskMsg").textContent="🎉 برافو! التصميم تمام";try{parent.postMessage({type:"robo-task",tool:"3d",task:Vn,ok:!0},location.origin)}catch{}}}var Cp;if(Vn){const n=on[Vn];Io.get("embed")&&document.body.classList.add("embed");const t=document.createElement("div");t.className="taskBar",t.id="taskBar",t.innerHTML='<b></b><span></span><em id="taskMsg"></em>'+(gu[Vn]?'<button class="btn ghost small tbGoal" id="taskGoal">🎯 '+Fn("الهدف")+"</button>":"")+'<button class="btn ghost small" id="taskReset">↺ من الأول</button>',t.querySelector("b").textContent=n.t,t.querySelector("span").textContent=n.say,document.querySelector(".stagewrap").prepend(t);const e=()=>{Rt=JSON.parse(JSON.stringify(n.pre||[])),$=[],Re(),Sn=[],An=-1,Fc=!1,t.classList.remove("done"),B("taskMsg").textContent="",re(!1)};if(Io.get("pic")&&Io.get("goal")&&gu[Vn])document.body.classList.add("pic","goal3"),Rt=gu[Vn](),$=[],Re(),Fc=!0,Pt.autoRotate=!0,Pt.autoRotateSpeed=2.4,setTimeout(()=>{B("fitBtn").onclick()},120);else{Dg(t),B("taskReset").onclick=e,e(),Ig(n.spot,Fn);const i=()=>{let s=B("goalDlg");s||(s=document.createElement("div"),s.id="goalDlg",s.className="goalDlg",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.innerHTML='<div class="gcard"><b>🎯 '+Fn("مثال على الهدف")+'</b><iframe tabindex="-1" title="goal" src="?task='+encodeURIComponent(Vn)+'&embed=1&pic=1&goal=1"></iframe><p>'+Fn("هذا مثال على ما يمكن أن تصممه. صمّم بطريقتك: أي تصميم ينفّذ المطلوب صحيح.")+'</p><button class="btn small" type="button">'+Fn("فهمت، أبدأ")+"</button></div>",s.onclick=r=>{(r.target===s||r.target.tagName==="BUTTON")&&(s.hidden=!0)},document.body.appendChild(s)),s.hidden=!1,s.querySelector("button").focus()};if(B("taskGoal")){B("taskGoal").onclick=i;const s="robo-goal:3d-"+Vn;let r=!1;try{r=!!localStorage.getItem(s),localStorage.setItem(s,"1")}catch{}r||setTimeout(i,600)}}}else{const n=document.createElement("button");n.id="sideTog",n.type="button";const t=s=>{document.body.classList.toggle("noSide",s),n.innerHTML=s?'<b aria-hidden="true">◀</b><span>'+(Ir?"Shapes":"الأشكال")+"</span>":'<b aria-hidden="true">▶</b>',n.title=s?Ir?"Show the shapes":"اظهر لوحة الأشكال":Ir?"Hide the shapes for a bigger drawing area":"اخفي لوحة الأشكال وكبّر مكان الرسم",n.setAttribute("aria-label",n.title),n.setAttribute("aria-expanded",String(!s));try{sessionStorage.setItem("robo-3d-noside",s?"1":""),localStorage.removeItem("robo-3d-noside")}catch{}requestAnimationFrame(()=>dispatchEvent(new Event("resize")))};n.onclick=()=>t(!document.body.classList.contains("noSide")),B("stage3").appendChild(n);let e=!1;try{e=sessionStorage.getItem("robo-3d-noside")==="1"}catch{}t(e);const i=document.createElement("button");i.id="fullBtn",i.type="button",i.title="كبّر مكان الرسم على الشاشة كلها",i.setAttribute("aria-label",i.title),i.textContent="⛶",i.onclick=()=>{var r;const s=document.documentElement;document.fullscreenElement?(r=document.exitFullscreen)==null||r.call(document):(s.requestFullscreen?s.requestFullscreen():Promise.reject()).catch(()=>{document.body.classList.toggle("bigStage"),dispatchEvent(new Event("resize"))})},document.addEventListener("fullscreenchange",()=>{document.body.classList.toggle("bigStage",!!document.fullscreenElement),i.textContent=document.fullscreenElement?"🗗":"⛶",dispatchEvent(new Event("resize"))}),(Cp=document.querySelector(".camtools"))==null||Cp.appendChild(i)}{const n=B("tbar"),t=n&&n.parentElement;if(n&&t){getComputedStyle(t).position==="static"&&(t.style.position="relative");const e=document.createElement("div");e.className="tbctl",e.innerHTML='<span class="tbgrip" title="اسحب لنقل شريط الأدوات" aria-hidden="true">⠿</span><button type="button" class="tbfold"></button><button type="button" class="tbpin" title="ثبّت الشريط في مكانه" aria-pressed="false">📌</button>',n.prepend(e);const i=e.querySelector(".tbfold"),s=e.querySelector(".tbgrip"),r=e.querySelector(".tbpin"),o=h=>{h?(n.style.width=n.offsetWidth+"px",n.style.height=n.offsetHeight+"px"):n.style.width=n.style.height="",n.classList.toggle("pinned",h),r.setAttribute("aria-pressed",String(h)),r.title=h?"فك التثبيت":"ثبّت الشريط في مكانه";try{localStorage.setItem("robo-3d-tbpin",h?"1":"")}catch{}};r.onclick=()=>o(!n.classList.contains("pinned"));const a=()=>{if(!n.classList.contains("float")){n.classList.remove("vert");return}const h=parseFloat(n.style.left)||0,d=t.clientWidth;n.classList.toggle("vert",h<30||h+n.offsetWidth>d-30)},c=h=>{n.classList.toggle("fold",h),i.textContent=h?"▶":"◀",i.title=h?"افتح شريط الأدوات":"أغلق شريط الأدوات",i.setAttribute("aria-label",i.title),i.setAttribute("aria-expanded",String(!h));try{localStorage.setItem("robo-3d-tbfold",h?"1":"")}catch{}requestAnimationFrame(()=>dispatchEvent(new Event("resize")))};i.onclick=()=>c(!n.classList.contains("fold"));const l=(h,d)=>{const g=t.clientWidth,y=t.clientHeight;return h=Math.max(4,Math.min(g-n.offsetWidth-4,h)),d=Math.max(4,Math.min(y-n.offsetHeight-4,d)),n.classList.add("float"),n.style.left=h+"px",n.style.top=d+"px",[h,d]},u=(h,d)=>{const g=l(h,d);a();const y=t.clientWidth;return n.classList.contains("vert")&&(n.style.left=(h<y/2?4:y-n.offsetWidth-4)+"px"),g};let f=null;s.addEventListener("pointerdown",h=>{if(h.preventDefault(),n.classList.contains("pinned")){ue&&ue("📌 الشريط مثبّت. اضغط 📌 لفك التثبيت");return}const d=n.getBoundingClientRect(),g=t.getBoundingClientRect();f=[h.clientX-d.left,h.clientY-d.top,g],s.setPointerCapture(h.pointerId),n.classList.add("drag"),n.classList.contains("float")||(l(d.left-g.left,d.top-g.top),requestAnimationFrame(()=>dispatchEvent(new Event("resize"))))}),s.addEventListener("pointermove",h=>{if(!f)return;const d=t.getBoundingClientRect();u(h.clientX-d.left-f[0],h.clientY-d.top-f[1])}),s.addEventListener("pointerup",()=>{if(f){f=null,n.classList.remove("drag");try{localStorage.setItem("robo-3d-tbpos",JSON.stringify([parseFloat(n.style.left),parseFloat(n.style.top)]))}catch{}}}),s.addEventListener("dblclick",()=>{if(!n.classList.contains("pinned")){n.classList.remove("float","vert"),n.style.left=n.style.top="";try{localStorage.removeItem("robo-3d-tbpos")}catch{}requestAnimationFrame(()=>dispatchEvent(new Event("resize")))}});try{if(localStorage.getItem("robo-3d-tbfold")==="1"?c(!0):c(!1),!matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)").matches){const h=JSON.parse(localStorage.getItem("robo-3d-tbpos")||"null");h&&requestAnimationFrame(()=>{u(h[0],h[1]),dispatchEvent(new Event("resize"))}),o(localStorage.getItem("robo-3d-tbpin")==="1")}}catch{c(!1)}}}var Pp;{const n=B("tbar"),t=matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)").matches;if(n&&t){document.body.classList.add("tbDock"),n.classList.remove("float","vert","pinned","drag"),n.style.left=n.style.top=n.style.width=n.style.height="",n.style.zoom="";try{["robo-3d-tbpos","robo-3d-tbpin","robo-3d-tbz"].forEach(a=>localStorage.removeItem(a))}catch{}const e=n.querySelector(".tbgrip"),i=n.querySelector(".tbpin"),s=document.createElement("button");s.type="button",s.className="tbdock",e?e.replaceWith(s):(Pp=n.querySelector(".tbctl"))==null||Pp.prepend(s),i&&i.remove();const r=a=>{document.body.classList.toggle("tbSide",a),s.textContent=a?"⬒":"◨",s.title=a?Ir?"Put the tool bar on top":"حطّ شريط الأدوات فوق":Ir?"Put the tool bar on the side":"حطّ شريط الأدوات في الجنب",s.setAttribute("aria-label",s.title);try{localStorage.setItem("robo-3d-tbdock",a?"side":"top")}catch{}requestAnimationFrame(()=>dispatchEvent(new Event("resize")))};s.onclick=()=>r(!document.body.classList.contains("tbSide"));let o=!1;try{o=localStorage.getItem("robo-3d-tbdock")==="side"}catch{}r(o)}}{const n=B("hint3"),t=s=>{try{return localStorage.getItem(s)}catch{return null}},e=(s,r)=>{try{localStorage.setItem(s,r)}catch{}};if(n){const s=document.createElement("button");s.type="button",s.className="barX",s.textContent="▾",s.title=Fn("اخفِ الشرح"),s.setAttribute("aria-label",s.title),n.prepend(s);const r=a=>{document.body.classList.toggle("hintOff",a),e("robo-3d-hint",a?"off":"on")};s.onclick=()=>r(!0),t("robo-3d-hint")==="off"&&r(!0);const o=B("keysBtn");o&&o.addEventListener("click",()=>{document.body.classList.contains("hintOff")&&!document.body.classList.contains("quiet")&&r(!1)})}const i=document.querySelector(".d3>.shapes");if(i){const s=document.createElement("button");s.type="button",s.className="shpFold";const r=o=>{document.body.classList.toggle("shpOff",o),s.textContent=o?"▲ "+Fn("الأشكال"):"▼",s.title=o?Fn("افتح الأشكال"):Fn("اقفل الأشكال"),s.setAttribute("aria-label",s.title),s.setAttribute("aria-expanded",String(!o)),e("robo-3d-shp",o?"off":"on"),requestAnimationFrame(()=>dispatchEvent(new Event("resize")))};s.onclick=()=>r(!document.body.classList.contains("shpOff")),i.prepend(s),r(t("robo-3d-shp")==="off")}}if(!Vn){const n=e=>JSON.stringify(e.objs||[]);Te.list=Te.list.filter(e=>!(e.blank&&e.blank===n(e))),Te.list.forEach(e=>{delete e.blank}),Te.cur=null;const t={id:yn(),name:Fn("تصميم")+" "+Cn(Te.list.length+1),objs:[{id:yn(),t:"box",c:"#1E7BFF",h:!1,p:[0,10,0],r:[0,0,0],s:[1.5,1,1.5]}],t:Date.now()};Te.list.unshift(t),Go(t.id);{const e=gh();e&&(e.blank=n(e),Jo())}}window.__d3={pick:n=>Nn(n),arrow:n=>{const t=qt.position.distanceTo(We.position),e=t*Math.min(1.9*Math.tan(Math.PI*qt.fov/360),7)*wt.size/4*.55,i=We.position.clone();return i.setComponent(n,i.getComponent(n)+e),li(i).slice(0,2)},handles:()=>Kn.visible?Kn.children.map(n=>li(n.position).slice(0,2).map(Math.round)):[],magnetize:Lc,worldBox:n=>{const t=ge(Xt(n));return[t.min.toArray().map(kt),t.max.toArray().map(kt)]},toScreen:(n,t,e)=>{const i=new w(n,t,e).project(qt),s=Ht.getBoundingClientRect();return[s.left+(i.x+1)/2*s.width,s.top+(1-i.y)/2*s.height]},camera:qt,apply:n=>{n(Rt),Re(),re()},get objs(){return Rt},select:Nn,addShape:na,group:ia,ungroup:Eh,setMode:Lo,get sel(){return $},trace:n=>Im(n).map(t=>[t.getPoints().length,t.holes.length,(()=>{const e=new BS().setFromPoints(t.getPoints());return[e.min.x,e.min.y,e.max.x,e.max.y].map(kt)})()]),cam:()=>qt.position.toArray().map(n=>Math.round(n)).join(","),geoInfo:n=>{const t=te.get(n).geometry;t.computeBoundingBox();const e=new w;return t.boundingBox.getSize(e),[t.getAttribute("position").count,e.toArray().map(kt)]}};Rg({box:document.querySelector(".d3"),a:document.querySelector(".d3 > .shapes"),b:document.querySelector(".d3 > .stagewrap"),cssVar:"--dA",key:"robo-split-3d",min:160,minB:360});{const n=document.querySelector("#projModal .mcard");Fg({bar:document.getElementById("myBtn"),lab:"cad",host:n,before:n&&n.querySelector(".sub"),get:()=>(Yi(!1),gh()),put:t=>{t.id=yn(),t.t=Date.now(),Te.list.unshift(t),Jo(),Go(t.id),B("projModal").hidden=!0}})}
