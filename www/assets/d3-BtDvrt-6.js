import"./lab-Ck2xiEv5.js";import{s as cm}from"./split-DJAd-vnY.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $l="160",Ci={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lm=0,Du=1,um=2,xd=1,hm=2,ri=3,Xn=0,nn=1,tn=2,Hi=0,lr=1,Iu=2,Uu=3,Nu=4,fm=5,ls=100,dm=101,pm=102,Fu=103,Ou=104,mm=200,gm=201,_m=202,xm=203,Sl=204,El=205,vm=206,ym=207,Mm=208,Sm=209,Em=210,bm=211,Tm=212,wm=213,Am=214,Rm=0,Pm=1,Cm=2,Na=3,Lm=4,Dm=5,Im=6,Um=7,vd=0,Nm=1,Fm=2,Gi=0,Om=1,Bm=2,zm=3,km=4,Hm=5,Gm=6,yd=300,dr=301,pr=302,bl=303,Tl=304,Za=306,wl=1e3,Nn=1001,Al=1002,Qe=1003,Bu=1004,dc=1005,vn=1006,Vm=1007,oo=1008,Vi=1009,Wm=1010,Xm=1011,Kl=1012,Md=1013,Ni=1014,Fi=1015,ao=1016,Sd=1017,Ed=1018,ms=1020,Ym=1021,Fn=1023,qm=1024,jm=1025,gs=1026,mr=1027,Zm=1028,bd=1029,$m=1030,Td=1031,wd=1033,pc=33776,mc=33777,gc=33778,_c=33779,zu=35840,ku=35841,Hu=35842,Gu=35843,Ad=36196,Vu=37492,Wu=37496,Xu=37808,Yu=37809,qu=37810,ju=37811,Zu=37812,$u=37813,Ku=37814,Ju=37815,Qu=37816,th=37817,eh=37818,nh=37819,ih=37820,sh=37821,xc=36492,rh=36494,oh=36495,Km=36283,ah=36284,ch=36285,lh=36286,Rd=3e3,_s=3001,Jm=3200,Qm=3201,Pd=0,tg=1,Mn="",Ge="srgb",fi="srgb-linear",Jl="display-p3",$a="display-p3-linear",Fa="linear",he="srgb",Oa="rec709",Ba="p3",Ps=7680,uh=519,eg=512,ng=513,ig=514,Cd=515,sg=516,rg=517,og=518,ag=519,hh=35044,fh="300 es",Rl=1035,li=2e3,za=2001;class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const ur=Math.PI/180,co=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function Ql(n,t){return(n%t+t)%t}function cg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function lg(n,t,e){return n!==t?(e-n)/(t-n):0}function jr(n,t,e){return(1-e)*n+e*t}function ug(n,t,e,i){return jr(n,t,1-Math.exp(-e*i))}function hg(n,t=1){return t-Math.abs(Ql(n,t*2)-t)}function fg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function dg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function pg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function mg(n,t){return n+Math.random()*(t-n)}function gg(n){return n*(.5-Math.random())}function _g(n){n!==void 0&&(dh=n);let t=dh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xg(n){return n*ur}function vg(n){return n*co}function Pl(n){return(n&n-1)===0&&n!==0}function yg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ka(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mg(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),h=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bs={DEG2RAD:ur,RAD2DEG:co,generateUUID:Es,clamp:Ce,euclideanModulo:Ql,mapLinear:cg,inverseLerp:lg,lerp:jr,damp:ug,pingpong:hg,smoothstep:fg,smootherstep:dg,randInt:pg,randFloat:mg,randFloatSpread:gg,seededRandom:_g,degToRad:xg,radToDeg:vg,isPowerOfTwo:Pl,ceilPowerOfTwo:yg,floorPowerOfTwo:ka,setQuaternionFromProperEuler:Mg,normalize:Ke,denormalize:nr};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,s,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],x=s[1],_=s[4],y=s[7],E=s[2],T=s[5],b=s[8];return r[0]=o*v+a*x+c*E,r[3]=o*m+a*_+c*T,r[6]=o*d+a*y+c*b,r[1]=l*v+u*x+f*E,r[4]=l*m+u*_+f*T,r[7]=l*d+u*y+f*b,r[2]=h*v+p*x+g*E,r[5]=h*m+p*_+g*T,r[8]=h*d+p*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,p=l*r-o*c,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*l-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vc.makeScale(t,e)),this}rotate(t){return this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new Xt;function Ld(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sg(){const n=Ha("canvas");return n.style.display="block",n}const ph={};function Zr(n){n in ph||(ph[n]=!0,console.warn(n))}const mh=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gh=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[fi]:{transfer:Fa,primaries:Oa,toReference:n=>n,fromReference:n=>n},[Ge]:{transfer:he,primaries:Oa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$a]:{transfer:Fa,primaries:Ba,toReference:n=>n.applyMatrix3(gh),fromReference:n=>n.applyMatrix3(mh)},[Jl]:{transfer:he,primaries:Ba,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gh),fromReference:n=>n.applyMatrix3(mh).convertLinearToSRGB()}},Eg=new Set([fi,$a]),ae={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Eg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=wo[t].toReference,s=wo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return wo[n].primaries},getTransfer:function(n){return n===Mn?Fa:wo[n].transfer}};function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cs;class Dd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=Ha("canvas")),Cs.width=t.width,Cs.height=t.height;const i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ha("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hr(e[i]/255)*255):e[i]=hr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bg=0;class Id{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Es(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mc(s[o].image)):r.push(Mc(s[o]))}else r=Mc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tg=0;class cn extends Ss{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,i=Nn,s=Nn,r=vn,o=oo,a=Fn,c=Vi,l=cn.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Es(),this.name="",this.source=new Id(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_s?Ge:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wl:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wl:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?_s:Rd}set encoding(t){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===_s?Ge:Mn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=yd;cn.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(p+1)/2,E=(d+1)/2,T=(u+h)/4,b=(f+v)/4,L=(g+m)/4;return _>y&&_>E?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=b/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=L/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=b/r,s=L/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wg extends Ss{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_s?Ge:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Id(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends wg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ud extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ag extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ne{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==h||l!==p||u!==g){let m=1-a;const d=c*h+l*p+u*g+f*v,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const E=Math.sqrt(_),T=Math.atan2(E,d*x);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}const y=a*x;if(c=c*m+h*y,l=l*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*p-l*h,t[e+1]=c*g+u*h+l*f-a*p,t[e+2]=l*g+u*p+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Sc.copy(this).projectOnVector(t),this.sub(Sc)}reflect(t){return this.sub(Sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new w,_h=new Ne;class le{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),Ro.subVectors(this.max,Rr),Ls.subVectors(t.a,Rr),Ds.subVectors(t.b,Rr),Is.subVectors(t.c,Rr),vi.subVectors(Ds,Ls),yi.subVectors(Is,Ds),Ji.subVectors(Ls,Is);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Ji.z,Ji.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Ji.z,0,-Ji.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Ji.y,Ji.x,0];return!Ec(e,Ls,Ds,Is,Ro)||(e=[1,0,0,0,1,0,0,0,1],!Ec(e,Ls,Ds,Is,Ro))?!1:(Po.crossVectors(vi,yi),e=[Po.x,Po.y,Po.z],Ec(e,Ls,Ds,Is,Ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new w,new w,new w,new w,new w,new w,new w,new w],Pn=new w,Ao=new le,Ls=new w,Ds=new w,Is=new w,vi=new w,yi=new w,Ji=new w,Rr=new w,Ro=new w,Po=new w,Qi=new w;function Ec(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Rg=new le,Pr=new w,bc=new w;class mo{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Rg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);const e=Pr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(bc)),this.expandByPoint(Pr.copy(t.center).sub(bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new w,Tc=new w,Co=new w,Mi=new w,wc=new w,Lo=new w,Ac=new w;class Mr{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Tc.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Tc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=Mi.dot(this.direction),c=-Mi.dot(Co),l=Mi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tc).addScaledVector(Co,h),p}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){wc.subVectors(e,t),Lo.subVectors(i,t),Ac.crossVectors(wc,Lo);let o=this.direction.dot(Ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const c=a*this.direction.dot(Lo.crossVectors(Mi,Lo));if(c<0)return null;const l=a*this.direction.dot(wc.cross(Mi));if(l<0||c+l>o)return null;const u=-a*Mi.dot(Ac);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,i,s,r,o,a,c,l,u,f,h,p,g,v,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,f,h,p,g,v,m)}set(t,e,i,s,r,o,a,c,l,u,f,h,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,p=c*f,g=l*u,v=l*f;e[0]=h+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,p=c*f,g=l*u,v=l*f;e[0]=h-v*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*f+g,e[10]=h-v*f}else if(t.order==="XZY"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pg,t,Cg)}lookAt(t,e,i){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Si.crossVectors(i,hn),Si.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Si.crossVectors(i,hn)),Si.normalize(),Do.crossVectors(hn,Si),s[0]=Si.x,s[4]=Do.x,s[8]=hn.x,s[1]=Si.y,s[5]=Do.y,s[9]=hn.y,s[2]=Si.z,s[6]=Do.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],x=i[3],_=i[7],y=i[11],E=i[15],T=s[0],b=s[4],L=s[8],S=s[12],M=s[1],C=s[5],I=s[9],O=s[13],D=s[2],U=s[6],z=s[10],X=s[14],Z=s[3],G=s[7],Q=s[11],tt=s[15];return r[0]=o*T+a*M+c*D+l*Z,r[4]=o*b+a*C+c*U+l*G,r[8]=o*L+a*I+c*z+l*Q,r[12]=o*S+a*O+c*X+l*tt,r[1]=u*T+f*M+h*D+p*Z,r[5]=u*b+f*C+h*U+p*G,r[9]=u*L+f*I+h*z+p*Q,r[13]=u*S+f*O+h*X+p*tt,r[2]=g*T+v*M+m*D+d*Z,r[6]=g*b+v*C+m*U+d*G,r[10]=g*L+v*I+m*z+d*Q,r[14]=g*S+v*O+m*X+d*tt,r[3]=x*T+_*M+y*D+E*Z,r[7]=x*b+_*C+y*U+E*G,r[11]=x*L+_*I+y*z+E*Q,r[15]=x*S+_*O+y*X+E*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*c*f-s*l*f-r*a*h+i*l*h+s*a*p-i*c*p)+v*(+e*c*p-e*l*h+r*o*h-s*o*p+s*l*u-r*c*u)+m*(+e*l*f-e*a*p-r*o*f+i*o*p+r*a*u-i*l*u)+d*(-s*a*u-e*c*f+e*a*h+s*o*f-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],x=f*m*l-v*h*l+v*c*p-a*m*p-f*c*d+a*h*d,_=g*h*l-u*m*l-g*c*p+o*m*p+u*c*d-o*h*d,y=u*v*l-g*f*l+g*a*p-o*v*p-u*a*d+o*f*d,E=g*f*c-u*v*c-g*a*h+o*v*h+u*a*m-o*f*m,T=e*x+i*_+s*y+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=x*b,t[1]=(v*h*r-f*m*r-v*s*p+i*m*p+f*s*d-i*h*d)*b,t[2]=(a*m*r-v*c*r+v*s*l-i*m*l-a*s*d+i*c*d)*b,t[3]=(f*c*r-a*h*r-f*s*l+i*h*l+a*s*p-i*c*p)*b,t[4]=_*b,t[5]=(u*m*r-g*h*r+g*s*p-e*m*p-u*s*d+e*h*d)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*b,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*p+e*c*p)*b,t[8]=y*b,t[9]=(g*f*r-u*v*r-g*i*p+e*v*p+u*i*d-e*f*d)*b,t[10]=(o*v*r-g*a*r+g*i*l-e*v*l-o*i*d+e*a*d)*b,t[11]=(u*a*r-o*f*r-u*i*l+e*f*l+o*i*p-e*a*p)*b,t[12]=E*b,t[13]=(u*v*s-g*f*s+g*i*h-e*v*h-u*i*m+e*f*m)*b,t[14]=(g*a*s-o*v*s-g*i*c+e*v*c+o*i*m-e*a*m)*b,t[15]=(o*f*s-u*a*s+u*i*c-e*f*c-o*i*h+e*a*h)*b,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,p=r*u,g=r*f,v=o*u,m=o*f,d=a*f,x=c*l,_=c*u,y=c*f,E=i.x,T=i.y,b=i.z;return s[0]=(1-(v+d))*E,s[1]=(p+y)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(h+d))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+_)*b,s[9]=(m-x)*b,s[10]=(1-(h+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const l=1/r,u=1/o,f=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,e.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=li){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let p,g;if(a===li)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===za)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=li){const c=this.elements,l=1/(e-t),u=1/(i-s),f=1/(o-r),h=(e+t)*l,p=(i+s)*u;let g,v;if(a===li)g=(o+r)*f,v=-2*f;else if(a===za)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Us=new w,Cn=new Kt,Pg=new w(0,0,0),Cg=new w(1,1,1),Si=new w,Do=new w,hn=new w,xh=new Kt,vh=new Ne;class Ts{constructor(t=0,e=0,i=0,s=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vh.setFromEuler(this),this.setFromQuaternion(vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lg=0;const yh=new w,Ns=new Ne,Jn=new Kt,Io=new w,Cr=new w,Dg=new w,Ig=new Ne,Mh=new w(1,0,0),Sh=new w(0,1,0),Eh=new w(0,0,1),Ug={type:"added"},Ng={type:"removed"};class Ae extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new w,e=new Ts,i=new Ne,s=new w(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Xt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(Sh,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(Sh,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Io.copy(t):Io.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Cr,Io,this.up):Jn.lookAt(Io,Cr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ug)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ng)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new w(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new w,Qn=new w,Rc=new w,ti=new w,Fs=new w,Os=new w,bh=new w,Pc=new w,Cc=new w,Lc=new w;let Uo=!1;class de{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),Qn.subVectors(i,e),Rc.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(Qn),c=Ln.dot(Rc),l=Qn.dot(Qn),u=Qn.dot(Rc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(t,e,i,s,r,o,a,c){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),Qn.subVectors(t,e),Ln.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Ln.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return de.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return de.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),de.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return de.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return de.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return de.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Os.subVectors(r,i),Pc.subVectors(t,i);const c=Fs.dot(Pc),l=Os.dot(Pc);if(c<=0&&l<=0)return e.copy(i);Cc.subVectors(t,s);const u=Fs.dot(Cc),f=Os.dot(Cc);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Fs,o);Lc.subVectors(t,r);const p=Fs.dot(Lc),g=Os.dot(Lc);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Os,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return bh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(bh,a);const d=1/(m+v+h);return o=v*d,a=h*d,e.copy(i).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},No={h:0,s:0,l:0};function Dc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Ql(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Dc(o,r,t+1/3),this.g=Dc(o,r,t),this.b=Dc(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const i=Nd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=yc(t.r),this.g=yc(t.g),this.b=yc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ae.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ce(Xe.r*255,0,255))*65536+Math.round(Ce(Xe.g*255,0,255))*256+Math.round(Ce(Xe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Xe.copy(this),e);const i=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ge){ae.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,s=Xe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(No);const i=jr(Ei.h,No.h,e),s=jr(Ei.s,No.s,e),r=jr(Ei.l,No.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new $t;$t.NAMES=Nd;let Fg=0;class Sr extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=lr,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=El,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ws extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new w,Fo=new J;class qe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=nr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hh&&(t.usage=this.usage),t}}class Fd extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Od extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Og=0;const gn=new Kt,Ic=new Ae,Bs=new w,fn=new le,Lr=new le,ke=new w;class De extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?Od:Fd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return Ic.lookAt(t),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new le);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(fn.min,Lr.min),fn.expandByPoint(ke),ke.addVectors(fn.max,Lr.max),fn.expandByPoint(ke)):(fn.expandByPoint(Lr.min),fn.expandByPoint(Lr.max))}fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ke.fromBufferAttribute(a,l),c&&(Bs.fromBufferAttribute(t,l),ke.add(Bs)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let M=0;M<a;M++)l[M]=new w,u[M]=new w;const f=new w,h=new w,p=new w,g=new J,v=new J,m=new J,d=new w,x=new w;function _(M,C,I){f.fromArray(s,M*3),h.fromArray(s,C*3),p.fromArray(s,I*3),g.fromArray(o,M*2),v.fromArray(o,C*2),m.fromArray(o,I*2),h.sub(f),p.sub(f),v.sub(g),m.sub(g);const O=1/(v.x*m.y-m.x*v.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(O),x.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(O),l[M].add(d),l[C].add(d),l[I].add(d),u[M].add(x),u[C].add(x),u[I].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let M=0,C=y.length;M<C;++M){const I=y[M],O=I.start,D=I.count;for(let U=O,z=O+D;U<z;U+=3)_(i[U+0],i[U+1],i[U+2])}const E=new w,T=new w,b=new w,L=new w;function S(M){b.fromArray(r,M*3),L.copy(b);const C=l[M];E.copy(C),E.sub(b.multiplyScalar(b.dot(C))).normalize(),T.crossVectors(L,C);const O=T.dot(u[M])<0?-1:1;c[M*4]=E.x,c[M*4+1]=E.y,c[M*4+2]=E.z,c[M*4+3]=O}for(let M=0,C=y.length;M<C;++M){const I=y[M],O=I.start,D=I.count;for(let U=O,z=O+D;U<z;U+=3)S(i[U+0]),S(i[U+1]),S(i[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,u=new w,f=new w;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new qe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new Kt,ts=new Mr,Oo=new mo,wh=new w,zs=new w,ks=new w,Hs=new w,Uc=new w,Bo=new w,zo=new J,ko=new J,Ho=new J,Ah=new w,Rh=new w,Ph=new w,Go=new w,Vo=new w;class _t extends Ae{constructor(t=new De,e=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Uc.fromBufferAttribute(f,t),o?Bo.addScaledVector(Uc,u):Bo.addScaledVector(Uc.sub(e),u))}e.add(Bo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Oo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Oo,wh)===null||ts.origin.distanceToSquared(wh)>(t.far-t.near)**2))&&(Th.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Th),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,E=_;y<E;y+=3){const T=a.getX(y),b=a.getX(y+1),L=a.getX(y+2);s=Wo(this,d,t,i,l,u,f,T,b,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=Wo(this,o,t,i,l,u,f,x,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,E=_;y<E;y+=3){const T=y,b=y+1,L=y+2;s=Wo(this,d,t,i,l,u,f,T,b,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=m,_=m+1,y=m+2;s=Wo(this,o,t,i,l,u,f,x,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Bg(n,t,e,i,s,r,o,a){let c;if(t.side===nn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Xn,a),c===null)return null;Vo.copy(a),Vo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Vo);return l<e.near||l>e.far?null:{distance:l,point:Vo.clone(),object:n}}function Wo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,zs),n.getVertexPosition(c,ks),n.getVertexPosition(l,Hs);const u=Bg(n,t,e,i,zs,ks,Hs,Go);if(u){s&&(zo.fromBufferAttribute(s,a),ko.fromBufferAttribute(s,c),Ho.fromBufferAttribute(s,l),u.uv=de.getInterpolation(Go,zs,ks,Hs,zo,ko,Ho,new J)),r&&(zo.fromBufferAttribute(r,a),ko.fromBufferAttribute(r,c),Ho.fromBufferAttribute(r,l),u.uv1=de.getInterpolation(Go,zs,ks,Hs,zo,ko,Ho,new J),u.uv2=u.uv1),o&&(Ah.fromBufferAttribute(o,a),Rh.fromBufferAttribute(o,c),Ph.fromBufferAttribute(o,l),u.normal=de.getInterpolation(Go,zs,ks,Hs,Ah,Rh,Ph,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new w,materialIndex:0};de.getNormal(zs,ks,Hs,f.normal),u.face=f}return u}class fe extends De{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function g(v,m,d,x,_,y,E,T,b,L,S){const M=y/b,C=E/L,I=y/2,O=E/2,D=T/2,U=b+1,z=L+1;let X=0,Z=0;const G=new w;for(let Q=0;Q<z;Q++){const tt=Q*C-O;for(let lt=0;lt<U;lt++){const j=lt*M-I;G[v]=j*x,G[m]=tt*_,G[d]=D,l.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[d]=T>0?1:-1,u.push(G.x,G.y,G.z),f.push(lt/b),f.push(1-Q/L),X+=1}}for(let Q=0;Q<L;Q++)for(let tt=0;tt<b;tt++){const lt=h+tt+U*Q,j=h+tt+U*(Q+1),et=h+(tt+1)+U*(Q+1),vt=h+(tt+1)+U*Q;c.push(lt,j,vt),c.push(j,et,vt),Z+=6}a.addGroup(p,Z,S),p+=Z,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=gr(n[e]);for(const s in i)t[s]=i[s]}return t}function zg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bd(n){return n.getRenderTarget()===null?n.outputColorSpace:ae.workingColorSpace}const kg={clone:gr,merge:Je};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zd extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends zd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ur*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gs=-90,Vs=1;class Vg extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Gs,Vs,t,e);s.layers=this.layers,this.add(s);const r=new dn(Gs,Vs,t,e);r.layers=this.layers,this.add(r);const o=new dn(Gs,Vs,t,e);o.layers=this.layers,this.add(o);const a=new dn(Gs,Vs,t,e);a.layers=this.layers,this.add(a);const c=new dn(Gs,Vs,t,e);c.layers=this.layers,this.add(c);const l=new dn(Gs,Vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kd extends cn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wg extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===_s?Ge:Mn),this.texture=new kd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),r=new ys({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Hi});r.uniforms.tEquirect.value=e;const o=new _t(s,r),a=e.minFilter;return e.minFilter===oo&&(e.minFilter=vn),new Vg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Nc=new w,Xg=new w,Yg=new Xt;class rn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Nc.subVectors(i,e).cross(Xg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Nc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yg.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new mo,Xo=new w;class eu{constructor(t=new rn,e=new rn,i=new rn,s=new rn,r=new rn,o=new rn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],x=s[13],_=s[14],y=s[15];if(i[0].setComponents(c-r,h-l,m-p,y-d).normalize(),i[1].setComponents(c+r,h+l,m+p,y+d).normalize(),i[2].setComponents(c+o,h+u,m+g,y+x).normalize(),i[3].setComponents(c-o,h-u,m-g,y-x).normalize(),i[4].setComponents(c-a,h-f,m-v,y-_).normalize(),e===li)i[5].setComponents(c+a,h+f,m+v,y+_).normalize();else if(e===za)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qg(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,u){const f=l.array,h=l.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),l.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,f){const h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,l),p.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){const d=g[v];e?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}class go extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const x=d*h-o;for(let _=0;_<l;_++){const y=_*f-r;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<a;x++){const _=x+l*d,y=x+l*(d+1),E=x+1+l*(d+1),T=x+1+l*d;p.push(_,y,T),p.push(y,E,T)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.width,t.height,t.widthSegments,t.heightSegments)}}var jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
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
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t0=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_0=`#define PI 3.141592653589793
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
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`
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
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,q0=`struct PhysicalMaterial {
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
}`,j0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c_=`#ifdef USE_MORPHNORMALS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,u_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g_=`#ifdef USE_NORMALMAP
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
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D_=`float getShadowMask() {
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
}`,I_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,N_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,cx=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,ux=`#define LAMBERT
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
}`,hx=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,_x=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,yx=`#define TOON
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
}`,Mx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,bx=`uniform vec3 color;
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
}`,Tx=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:jg,alphahash_pars_fragment:Zg,alphamap_fragment:$g,alphamap_pars_fragment:Kg,alphatest_fragment:Jg,alphatest_pars_fragment:Qg,aomap_fragment:t0,aomap_pars_fragment:e0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:o0,iridescence_fragment:a0,bumpmap_pars_fragment:c0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:f0,color_fragment:d0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:_0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:v0,displacementmap_pars_vertex:y0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:E0,colorspace_fragment:b0,colorspace_pars_fragment:T0,envmap_fragment:w0,envmap_common_pars_fragment:A0,envmap_pars_fragment:R0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:H0,envmap_vertex:C0,fog_vertex:L0,fog_pars_vertex:D0,fog_fragment:I0,fog_pars_fragment:U0,gradientmap_pars_fragment:N0,lightmap_fragment:F0,lightmap_pars_fragment:O0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:z0,lights_pars_begin:k0,lights_toon_fragment:G0,lights_toon_pars_fragment:V0,lights_phong_fragment:W0,lights_phong_pars_fragment:X0,lights_physical_fragment:Y0,lights_physical_pars_fragment:q0,lights_fragment_begin:j0,lights_fragment_maps:Z0,lights_fragment_end:$0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:t_,map_fragment:e_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:o_,morphcolor_vertex:a_,morphnormal_vertex:c_,morphtarget_pars_vertex:l_,morphtarget_vertex:u_,normal_fragment_begin:h_,normal_fragment_maps:f_,normal_pars_fragment:d_,normal_pars_vertex:p_,normal_vertex:m_,normalmap_pars_fragment:g_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:v_,iridescence_pars_fragment:y_,opaque_fragment:M_,packing:S_,premultiplied_alpha_fragment:E_,project_vertex:b_,dithering_fragment:T_,dithering_pars_fragment:w_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:C_,shadowmap_vertex:L_,shadowmask_pars_fragment:D_,skinbase_vertex:I_,skinning_pars_vertex:U_,skinning_vertex:N_,skinnormal_vertex:F_,specularmap_fragment:O_,specularmap_pars_fragment:B_,tonemapping_fragment:z_,tonemapping_pars_fragment:k_,transmission_fragment:H_,transmission_pars_fragment:G_,uv_pars_fragment:V_,uv_pars_vertex:W_,uv_vertex:X_,worldpos_vertex:Y_,background_vert:q_,background_frag:j_,backgroundCube_vert:Z_,backgroundCube_frag:$_,cube_vert:K_,cube_frag:J_,depth_vert:Q_,depth_frag:tx,distanceRGBA_vert:ex,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:cx,meshlambert_vert:lx,meshlambert_frag:ux,meshmatcap_vert:hx,meshmatcap_frag:fx,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:_x,meshphysical_frag:xx,meshtoon_vert:vx,meshtoon_frag:yx,points_vert:Mx,points_frag:Sx,shadow_vert:Ex,shadow_frag:bx,sprite_vert:Tx,sprite_frag:wx},gt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Gn={basic:{uniforms:Je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Je([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Je([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Je([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Je([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Je([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Je([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Je([gt.common,gt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Je([gt.lights,gt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Gn.physical={uniforms:Je([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Yo={r:0,b:0,g:0};function Ax(n,t,e,i,s,r,o){const a=new $t(0);let c=r===!0?0:1,l,u,f=null,h=0,p=null;function g(m,d){let x=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Za)?(u===void 0&&(u=new _t(new fe(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:gr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ae.getTransfer(_.colorSpace)!==he,(f!==_||h!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new _t(new go(2,2),new ys({name:"BackgroundMaterial",uniforms:gr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ae.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,d){m.getRGB(Yo,Bd(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function Rx(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function f(D,U,z,X,Z){let G=!1;if(o){const Q=v(X,z,U);l!==Q&&(l=Q,p(l.object)),G=d(D,X,z,Z),G&&x(D,X,z,Z)}else{const Q=U.wireframe===!0;(l.geometry!==X.id||l.program!==z.id||l.wireframe!==Q)&&(l.geometry=X.id,l.program=z.id,l.wireframe=Q,G=!0)}Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,L(D,U,z,X),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,U,z){const X=z.wireframe===!0;let Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let G=Z[U.id];G===void 0&&(G={},Z[U.id]=G);let Q=G[X];return Q===void 0&&(Q=m(h()),G[X]=Q),Q}function m(D){const U=[],z=[],X=[];for(let Z=0;Z<s;Z++)U[Z]=0,z[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:X,object:D,attributes:{},index:null}}function d(D,U,z,X){const Z=l.attributes,G=U.attributes;let Q=0;const tt=z.getAttributes();for(const lt in tt)if(tt[lt].location>=0){const et=Z[lt];let vt=G[lt];if(vt===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),et===void 0||et.attribute!==vt||vt&&et.data!==vt.data)return!0;Q++}return l.attributesNum!==Q||l.index!==X}function x(D,U,z,X){const Z={},G=U.attributes;let Q=0;const tt=z.getAttributes();for(const lt in tt)if(tt[lt].location>=0){let et=G[lt];et===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));const vt={};vt.attribute=et,et&&et.data&&(vt.data=et.data),Z[lt]=vt,Q++}l.attributes=Z,l.attributesNum=Q,l.index=X}function _(){const D=l.newAttributes;for(let U=0,z=D.length;U<z;U++)D[U]=0}function y(D){E(D,0)}function E(D,U){const z=l.newAttributes,X=l.enabledAttributes,Z=l.attributeDivisors;z[D]=1,X[D]===0&&(n.enableVertexAttribArray(D),X[D]=1),Z[D]!==U&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),Z[D]=U)}function T(){const D=l.newAttributes,U=l.enabledAttributes;for(let z=0,X=U.length;z<X;z++)U[z]!==D[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function b(D,U,z,X,Z,G,Q){Q===!0?n.vertexAttribIPointer(D,U,z,Z,G):n.vertexAttribPointer(D,U,z,X,Z,G)}function L(D,U,z,X){if(i.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const Z=X.attributes,G=z.getAttributes(),Q=U.defaultAttributeValues;for(const tt in G){const lt=G[tt];if(lt.location>=0){let j=Z[tt];if(j===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const et=j.normalized,vt=j.itemSize,bt=e.get(j);if(bt===void 0)continue;const Et=bt.buffer,It=bt.type,Nt=bt.bytesPerElement,wt=i.isWebGL2===!0&&(It===n.INT||It===n.UNSIGNED_INT||j.gpuType===Md);if(j.isInterleavedBufferAttribute){const Ft=j.data,F=Ft.stride,ut=j.offset;if(Ft.isInstancedInterleavedBuffer){for(let $=0;$<lt.locationSize;$++)E(lt.location+$,Ft.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let $=0;$<lt.locationSize;$++)y(lt.location+$);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let $=0;$<lt.locationSize;$++)b(lt.location+$,vt/lt.locationSize,It,et,F*Nt,(ut+vt/lt.locationSize*$)*Nt,wt)}else{if(j.isInstancedBufferAttribute){for(let Ft=0;Ft<lt.locationSize;Ft++)E(lt.location+Ft,j.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ft=0;Ft<lt.locationSize;Ft++)y(lt.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Ft=0;Ft<lt.locationSize;Ft++)b(lt.location+Ft,vt/lt.locationSize,It,et,vt*Nt,vt/lt.locationSize*Ft*Nt,wt)}}else if(Q!==void 0){const et=Q[tt];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(lt.location,et);break;case 3:n.vertexAttrib3fv(lt.location,et);break;case 4:n.vertexAttrib4fv(lt.location,et);break;default:n.vertexAttrib1fv(lt.location,et)}}}}T()}function S(){I();for(const D in a){const U=a[D];for(const z in U){const X=U[z];for(const Z in X)g(X[Z].object),delete X[Z];delete U[z]}delete a[D]}}function M(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const z in U){const X=U[z];for(const Z in X)g(X[Z].object),delete X[Z];delete U[z]}delete a[D.id]}function C(D){for(const U in a){const z=a[U];if(z[D.id]===void 0)continue;const X=z[D.id];for(const Z in X)g(X[Z].object),delete X[Z];delete z[D.id]}}function I(){O(),u=!0,l!==c&&(l=c,p(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:I,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function Px(n,t,e,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,f){n.drawArrays(r,u,f),e.update(f,r,1)}function c(u,f,h){if(h===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,f,h),e.update(f,r,h)}function l(u,f,h){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Cx(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||t.has("OES_texture_float"),E=_&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:T}}function Lx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new rn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const x=r?0:i,_=x*4;let y=d.clippingState||null;c.value=y,y=u(g,h,_,p);for(let E=0;E!==_;++E)y[E]=e[E];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Dx(n){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=dr:a===Tl&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bl||a===Tl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Wg(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gd extends zd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,Ch=[.125,.215,.35,.446,.526,.582],us=20,Fc=new Gd,Lh=new $t;let Oc=null,Bc=0,zc=0;const os=(1+Math.sqrt(5))/2,Ws=1/os,Dh=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,os,Ws),new w(0,os,-Ws),new w(Ws,0,os),new w(-Ws,0,os),new w(os,Ws,0),new w(-os,Ws,0)];class Ih{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Bc,zc),t.scissorTest=!1,qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ao,format:Fn,colorSpace:fi,depthBuffer:!1},s=Uh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Ux(r,t,e)}return s}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,Fc)}_sceneToCubeUV(t,e,i,s){const a=new dn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Lh),u.toneMapping=Gi,u.autoClear=!1;const p=new ws({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new _t(new fe,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Lh),v=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):x===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const _=this._cubeSize;qo(s,x*_,d>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===dr||t.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;qo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Fc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dh[(s-1)%Dh.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _t(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const d=[];let x=0;for(let b=0;b<us;++b){const L=b/v,S=Math.exp(-L*L/2);d.push(S),b===0?x+=S:b<m&&(x+=2*S)}for(let b=0;b<d.length;b++)d[b]=d[b]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[s],E=3*y*(s>_-ir?s-_+ir:0),T=4*(this._cubeSize-y);qo(e,E,T,3*y,2*y),c.setRenderTarget(e),c.render(f,Fc)}}function Ix(n){const t=[],e=[],i=[];let s=n;const r=n-ir+1+Ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ir?c=Ch[o-n+ir-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,L=T>2?0:-1,S=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];x.set(S,v*g*T),_.set(h,m*g*T);const M=[T,T,T,T,T,T];y.set(M,d*g*T)}const E=new De;E.setAttribute("position",new qe(x,v)),E.setAttribute("uv",new qe(_,m)),E.setAttribute("faceIndex",new qe(y,d)),t.push(E),s>ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Uh(n,t,e){const i=new vs(n,t,e);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ux(n,t,e){const i=new Float32Array(us),s=new w(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Nh(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Fh(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function Nx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===bl||c===Tl,u=c===dr||c===pr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Ih(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&s(f)){e===null&&(e=new Ih(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Fx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ox(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],n.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const E=x[_+0],T=x[_+1],b=x[_+2];h.push(E,T,T,b,b,E)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const E=_+0,T=_+1,b=_+2;h.push(E,T,T,b,b,E)}}else return;const m=new(Ld(h)?Od:Fd)(h,1);m.version=v;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Bx(n,t,e,i){const s=i.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(r,g,a,p*c),e.update(g,r,1)}function f(p,g,v){if(v===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,v),e.update(g,r,v)}function h(p,g,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<v;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let d=0;for(let x=0;x<v;x++)d+=g[x];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function zx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kx(n,t){return n[0]-t[0]}function Hx(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Gx(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new pe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let D=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let S=u.attributes.position.count*L,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const C=new Float32Array(S*M*4*g),I=new Ud(C,S,M,g);I.type=Fi,I.needsUpdate=!0;const O=L*4;for(let U=0;U<g;U++){const z=E[U],X=T[U],Z=b[U],G=S*M*4*U;for(let Q=0;Q<z.count;Q++){const tt=Q*O;x===!0&&(o.fromBufferAttribute(z,Q),C[G+tt+0]=o.x,C[G+tt+1]=o.y,C[G+tt+2]=o.z,C[G+tt+3]=0),_===!0&&(o.fromBufferAttribute(X,Q),C[G+tt+4]=o.x,C[G+tt+5]=o.y,C[G+tt+6]=o.z,C[G+tt+7]=0),y===!0&&(o.fromBufferAttribute(Z,Q),C[G+tt+8]=o.x,C[G+tt+9]=o.y,C[G+tt+10]=o.z,C[G+tt+11]=Z.itemSize===4?o.w:1)}}v={count:g,texture:I,size:new J(S,M)},r.set(u,v),u.addEventListener("dispose",D)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const p=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<p;_++){const y=g[_];y[0]=_,y[1]=h[_]}g.sort(Hx);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(kx);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let _=0;_<8;_++){const y=a[_],E=y[0],T=y[1];E!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+_)!==v[E]&&u.setAttribute("morphTarget"+_,v[E]),m&&u.getAttribute("morphNormal"+_)!==m[E]&&u.setAttribute("morphNormal"+_,m[E]),s[_]=T,d+=T):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const x=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Vx(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Vd extends cn{constructor(t,e,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:gs,u!==gs&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gs&&(i=Ni),i===void 0&&u===mr&&(i=ms),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wd=new cn,Xd=new Vd(1,1);Xd.compareFunction=Cd;const Yd=new Ud,qd=new Ag,jd=new kd,Oh=[],Bh=[],zh=new Float32Array(16),kh=new Float32Array(9),Hh=new Float32Array(4);function Er(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ka(n,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Wx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function jx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),Oe(e,i)}}function Zx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;kh.set(i),n.uniformMatrix3fv(this.addr,!1,kh),Oe(e,i)}}function $x(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;zh.set(i),n.uniformMatrix4fv(this.addr,!1,zh),Oe(e,i)}}function Kx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function Qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function ev(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function rv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Xd:Wd;e.setTexture2D(t||r,s)}function ov(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qd,s)}function av(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||jd,s)}function cv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yd,s)}function lv(n){switch(n){case 5126:return Wx;case 35664:return Xx;case 35665:return Yx;case 35666:return qx;case 35674:return jx;case 35675:return Zx;case 35676:return $x;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(n,t){n.uniform1fv(this.addr,t)}function hv(n,t){const e=Er(t,this.size,2);n.uniform2fv(this.addr,e)}function fv(n,t){const e=Er(t,this.size,3);n.uniform3fv(this.addr,e)}function dv(n,t){const e=Er(t,this.size,4);n.uniform4fv(this.addr,e)}function pv(n,t){const e=Er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mv(n,t){const e=Er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gv(n,t){const e=Er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _v(n,t){n.uniform1iv(this.addr,t)}function xv(n,t){n.uniform2iv(this.addr,t)}function vv(n,t){n.uniform3iv(this.addr,t)}function yv(n,t){n.uniform4iv(this.addr,t)}function Mv(n,t){n.uniform1uiv(this.addr,t)}function Sv(n,t){n.uniform2uiv(this.addr,t)}function Ev(n,t){n.uniform3uiv(this.addr,t)}function bv(n,t){n.uniform4uiv(this.addr,t)}function Tv(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wd,r[o])}function wv(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qd,r[o])}function Av(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jd,r[o])}function Rv(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yd,r[o])}function Pv(n){switch(n){case 5126:return uv;case 35664:return hv;case 35665:return fv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return Ev;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}class Cv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lv(e.type)}}class Lv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pv(e.type)}}class Dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function Gh(n,t){n.seq.push(t),n.map[t.id]=t}function Iv(n,t,e){const i=n.name,s=i.length;for(kc.lastIndex=0;;){const r=kc.exec(i),o=kc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gh(e,l===void 0?new Cv(a,n,t):new Lv(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Dv(a),Gh(e,f)),e=f}}}class Ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Iv(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Vh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Uv=37297;let Nv=0;function Fv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Ov(n){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n);let i;switch(t===e?i="":t===Ba&&e===Oa?i="LinearDisplayP3ToLinearSRGB":t===Oa&&e===Ba&&(i="LinearSRGBToLinearDisplayP3"),n){case fi:case $a:return[i,"LinearTransferOETF"];case Ge:case Jl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fv(n.getShaderSource(t),o)}else return s}function Bv(n,t){const e=Ov(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zv(n,t){let e;switch(t){case Om:e="Linear";break;case Bm:e="Reinhard";break;case zm:e="OptimizedCineon";break;case km:e="ACESFilmic";break;case Gm:e="AgX";break;case Hm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function Hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sr).join(`
`)}function Gv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function sr(n){return n!==""}function Xh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(n){return n.replace(Wv,Yv)}const Xv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yv(n,t){let e=Gt[t];if(e===void 0){const i=Xv.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(qv,jv)}function jv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function $v(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Jv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vd:t="ENVMAP_BLENDING_MULTIPLY";break;case Nm:t="ENVMAP_BLENDING_MIX";break;case Fm:t="ENVMAP_BLENDING_ADD";break}return t}function Qv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ty(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Zv(e),l=$v(e),u=Kv(e),f=Jv(e),h=Qv(e),p=e.isWebGL2?"":kv(e),g=Hv(e),v=Gv(r),m=s.createProgram();let d,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(sr).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(sr).join(`
`),x.length>0&&(x+=`
`)):(d=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),x=[p,jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Gi?zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Bv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=Cl(o),o=Xh(o,e),o=Yh(o,e),a=Cl(a),a=Xh(a,e),a=Yh(a,e),o=qh(o),a=qh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+d+o,E=_+x+a,T=Vh(s,s.VERTEX_SHADER,y),b=Vh(s,s.FRAGMENT_SHADER,E);s.attachShader(m,T),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(I){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(b).trim();let z=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,b);else{const Z=Wh(s,T,"vertex"),G=Wh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+Z+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||U==="")&&(X=!1);X&&(I.diagnostics={runnable:z,programLog:O,vertexShader:{log:D,prefix:d},fragmentShader:{log:U,prefix:x}})}s.deleteShader(T),s.deleteShader(b),S=new Ra(s,m),M=Vv(s,m)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,Uv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nv++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}let ey=0;class ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new iy(t),e.set(t,i)),i}}class iy{constructor(t){this.id=ey++,this.code=t,this.usedTimes=0}}function sy(n,t,e,i,s,r,o){const a=new tu,c=new ny,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,M,C,I,O){const D=I.fog,U=O.geometry,z=S.isMeshStandardMaterial?I.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),Z=X&&X.mapping===Za?X.image.height:null,G=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,tt=Q!==void 0?Q.length:0;let lt=0;U.morphAttributes.position!==void 0&&(lt=1),U.morphAttributes.normal!==void 0&&(lt=2),U.morphAttributes.color!==void 0&&(lt=3);let j,et,vt,bt;if(G){const je=Gn[G];j=je.vertexShader,et=je.fragmentShader}else j=S.vertexShader,et=S.fragmentShader,c.update(S),vt=c.getVertexShaderID(S),bt=c.getFragmentShaderID(S);const Et=n.getRenderTarget(),It=O.isInstancedMesh===!0,Nt=O.isBatchedMesh===!0,wt=!!S.map,Ft=!!S.matcap,F=!!X,ut=!!S.aoMap,$=!!S.lightMap,at=!!S.bumpMap,K=!!S.normalMap,At=!!S.displacementMap,yt=!!S.emissiveMap,R=!!S.metalnessMap,A=!!S.roughnessMap,H=S.anisotropy>0,ot=S.clearcoat>0,it=S.iridescence>0,nt=S.sheen>0,Tt=S.transmission>0,xt=H&&!!S.anisotropyMap,Mt=ot&&!!S.clearcoatMap,Lt=ot&&!!S.clearcoatNormalMap,Bt=ot&&!!S.clearcoatRoughnessMap,st=it&&!!S.iridescenceMap,Yt=it&&!!S.iridescenceThicknessMap,N=nt&&!!S.sheenColorMap,rt=nt&&!!S.sheenRoughnessMap,mt=!!S.specularMap,ct=!!S.specularColorMap,Rt=!!S.specularIntensityMap,qt=Tt&&!!S.transmissionMap,Jt=Tt&&!!S.thicknessMap,Vt=!!S.gradientMap,pt=!!S.alphaMap,B=S.alphaTest>0,ht=!!S.alphaHash,ft=!!S.extensions,Dt=!!U.attributes.uv1,Pt=!!U.attributes.uv2,ee=!!U.attributes.uv3;let ne=Gi;return S.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ne=n.toneMapping),{isWebGL2:u,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:et,defines:S.defines,customVertexShaderID:vt,customFragmentShaderID:bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Nt,instancing:It,instancingColor:It&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:fi,map:wt,matcap:Ft,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:Z,aoMap:ut,lightMap:$,bumpMap:at,normalMap:K,displacementMap:h&&At,emissiveMap:yt,normalMapObjectSpace:K&&S.normalMapType===tg,normalMapTangentSpace:K&&S.normalMapType===Pd,metalnessMap:R,roughnessMap:A,anisotropy:H,anisotropyMap:xt,clearcoat:ot,clearcoatMap:Mt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Bt,iridescence:it,iridescenceMap:st,iridescenceThicknessMap:Yt,sheen:nt,sheenColorMap:N,sheenRoughnessMap:rt,specularMap:mt,specularColorMap:ct,specularIntensityMap:Rt,transmission:Tt,transmissionMap:qt,thicknessMap:Jt,gradientMap:Vt,opaque:S.transparent===!1&&S.blending===lr,alphaMap:pt,alphaTest:B,alphaHash:ht,combine:S.combine,mapUv:wt&&v(S.map.channel),aoMapUv:ut&&v(S.aoMap.channel),lightMapUv:$&&v(S.lightMap.channel),bumpMapUv:at&&v(S.bumpMap.channel),normalMapUv:K&&v(S.normalMap.channel),displacementMapUv:At&&v(S.displacementMap.channel),emissiveMapUv:yt&&v(S.emissiveMap.channel),metalnessMapUv:R&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:xt&&v(S.anisotropyMap.channel),clearcoatMapUv:Mt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:N&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:rt&&v(S.sheenRoughnessMap.channel),specularMapUv:mt&&v(S.specularMap.channel),specularColorMapUv:ct&&v(S.specularColorMap.channel),specularIntensityMapUv:Rt&&v(S.specularIntensityMap.channel),transmissionMapUv:qt&&v(S.transmissionMap.channel),thicknessMapUv:Jt&&v(S.thicknessMap.channel),alphaMapUv:pt&&v(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(K||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Pt,vertexUv3s:ee,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(wt||pt),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,useLegacyLights:n._useLegacyLights,decodeVideoTexture:wt&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ft&&S.extensions.derivatives===!0,extensionFragDepth:ft&&S.extensions.fragDepth===!0,extensionDrawBuffers:ft&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const M=g[S.type];let C;if(M){const I=Gn[M];C=kg.clone(I.uniforms)}else C=S.uniforms;return C}function E(S,M){let C;for(let I=0,O=l.length;I<O;I++){const D=l[I];if(D.cacheKey===M){C=D,++C.usedTimes;break}}return C===void 0&&(C=new ty(n,M,S,r),l.push(C)),C}function T(S){if(--S.usedTimes===0){const M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),S.destroy()}}function b(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:L}}function ry(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function oy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Zh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $h(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,h,p,g,v,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),t++,d}function a(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(f,h){e.length>1&&e.sort(f||oy),i.length>1&&i.sort(h||Zh),s.length>1&&s.sort(h||Zh)}function u(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function ay(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new $h,n.set(i,[o])):s>=r.length?(o=new $h,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function cy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new $t};break;case"SpotLight":e={position:new w,direction:new w,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function ly(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let uy=0;function hy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fy(n,t){const e=new cy,i=ly(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new w);const r=new w,o=new Kt,a=new Kt;function c(u,f){let h=0,p=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let v=0,m=0,d=0,x=0,_=0,y=0,E=0,T=0,b=0,L=0,S=0;u.sort(hy);const M=f===!0?Math.PI:1;for(let I=0,O=u.length;I<O;I++){const D=u[I],U=D.color,z=D.intensity,X=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*z*M,p+=U.g*z*M,g+=U.b*z*M;else if(D.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(D.sh.coefficients[G],z);S++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const Q=D.shadow,tt=i.get(D);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,s.directionalShadow[v]=tt,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=D.shadow.matrix,y++}s.directional[v]=G,v++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(U).multiplyScalar(z*M),G.distance=X,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,s.spot[d]=G;const Q=D.shadow;if(D.map&&(s.spotLightMap[b]=D.map,b++,Q.updateMatrices(D),D.castShadow&&L++),s.spotLightMatrix[d]=Q.matrix,D.castShadow){const tt=i.get(D);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,s.spotShadow[d]=tt,s.spotShadowMap[d]=Z,T++}d++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),s.rectArea[x]=G,x++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*M),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Q=D.shadow,tt=i.get(D);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=D.shadow.matrix,E++}s.point[m]=G,m++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(z*M),G.groundColor.copy(D.groundColor).multiplyScalar(z*M),s.hemi[_]=G,_++}}x>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const C=s.hash;(C.directionalLength!==v||C.pointLength!==m||C.spotLength!==d||C.rectAreaLength!==x||C.hemiLength!==_||C.numDirectionalShadows!==y||C.numPointShadows!==E||C.numSpotShadows!==T||C.numSpotMaps!==b||C.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+b-L,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=S,C.directionalLength=v,C.pointLength=m,C.spotLength=d,C.rectAreaLength=x,C.hemiLength=_,C.numDirectionalShadows=y,C.numPointShadows=E,C.numSpotShadows=T,C.numSpotMaps=b,C.numLightProbes=S,s.version=uy++)}function l(u,f){let h=0,p=0,g=0,v=0,m=0;const d=f.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const y=u[x];if(y.isDirectionalLight){const E=s.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),h++}else if(y.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const E=s.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function Kh(n,t){const e=new fy(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function dy(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Kh(n,t),e.set(r,[c])):o>=a.length?(c=new Kh(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class py extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class my extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`;function xy(n,t,e){let i=new eu;const s=new J,r=new J,o=new pe,a=new py({depthPacking:Qm}),c=new my,l={},u=e.maxTextureSize,f={[Xn]:nn,[nn]:Xn,[tn]:tn},h=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:gy,fragmentShader:_y}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let d=this.type;this.render=function(T,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Hi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=d!==ri&&this.type===ri,D=d===ri&&this.type!==ri;for(let U=0,z=T.length;U<z;U++){const X=T[U],Z=X.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const G=Z.getFrameExtents();if(s.multiply(G),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,Z.mapSize.y=r.y)),Z.map===null||O===!0||D===!0){const tt=this.type!==ri?{minFilter:Qe,magFilter:Qe}:{};Z.map!==null&&Z.map.dispose(),Z.map=new vs(s.x,s.y,tt),Z.map.texture.name=X.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const Q=Z.getViewportCount();for(let tt=0;tt<Q;tt++){const lt=Z.getViewport(tt);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),I.viewport(o),Z.updateMatrices(X,tt),i=Z.getFrustum(),y(b,L,Z.camera,X,this.type)}Z.isPointLightShadow!==!0&&this.type===ri&&x(Z,L),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,C)};function x(T,b){const L=t.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vs(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,L,h,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,L,p,v,null)}function _(T,b,L,S){let M=null;const C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=M.uuid,O=b.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let U=D[O];U===void 0&&(U=M.clone(),D[O]=U,b.addEventListener("dispose",E)),M=U}if(M.visible=b.visible,M.wireframe=b.wireframe,S===ri?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=L}return M}function y(T,b,L,S,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ri)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const O=t.update(T),D=T.material;if(Array.isArray(D)){const U=O.groups;for(let z=0,X=U.length;z<X;z++){const Z=U[z],G=D[Z.materialIndex];if(G&&G.visible){const Q=_(T,G,S,M);T.onBeforeShadow(n,T,b,L,O,Q,Z),n.renderBufferDirect(L,null,O,Q,T,Z),T.onAfterShadow(n,T,b,L,O,Q,Z)}}}else if(D.visible){const U=_(T,D,S,M);T.onBeforeShadow(n,T,b,L,O,U,null),n.renderBufferDirect(L,null,O,U,T,null),T.onAfterShadow(n,T,b,L,O,U,null)}}const I=T.children;for(let O=0,D=I.length;O<D;O++)y(I[O],b,L,S,M)}function E(T){T.target.removeEventListener("dispose",E);for(const L in l){const S=l[L],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function vy(n,t,e){const i=e.isWebGL2;function s(){let B=!1;const ht=new pe;let ft=null;const Dt=new pe(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!B&&(n.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){B=Pt},setClear:function(Pt,ee,ne,Be,je){je===!0&&(Pt*=Be,ee*=Be,ne*=Be),ht.set(Pt,ee,ne,Be),Dt.equals(ht)===!1&&(n.clearColor(Pt,ee,ne,Be),Dt.copy(ht))},reset:function(){B=!1,ft=null,Dt.set(-1,0,0,0)}}}function r(){let B=!1,ht=null,ft=null,Dt=null;return{setTest:function(Pt){Pt?Nt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(Pt){ht!==Pt&&!B&&(n.depthMask(Pt),ht=Pt)},setFunc:function(Pt){if(ft!==Pt){switch(Pt){case Rm:n.depthFunc(n.NEVER);break;case Pm:n.depthFunc(n.ALWAYS);break;case Cm:n.depthFunc(n.LESS);break;case Na:n.depthFunc(n.LEQUAL);break;case Lm:n.depthFunc(n.EQUAL);break;case Dm:n.depthFunc(n.GEQUAL);break;case Im:n.depthFunc(n.GREATER);break;case Um:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=Pt}},setLocked:function(Pt){B=Pt},setClear:function(Pt){Dt!==Pt&&(n.clearDepth(Pt),Dt=Pt)},reset:function(){B=!1,ht=null,ft=null,Dt=null}}}function o(){let B=!1,ht=null,ft=null,Dt=null,Pt=null,ee=null,ne=null,Be=null,je=null;return{setTest:function(ue){B||(ue?Nt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(ue){ht!==ue&&!B&&(n.stencilMask(ue),ht=ue)},setFunc:function(ue,Ze,kn){(ft!==ue||Dt!==Ze||Pt!==kn)&&(n.stencilFunc(ue,Ze,kn),ft=ue,Dt=Ze,Pt=kn)},setOp:function(ue,Ze,kn){(ee!==ue||ne!==Ze||Be!==kn)&&(n.stencilOp(ue,Ze,kn),ee=ue,ne=Ze,Be=kn)},setLocked:function(ue){B=ue},setClear:function(ue){je!==ue&&(n.clearStencil(ue),je=ue)},reset:function(){B=!1,ht=null,ft=null,Dt=null,Pt=null,ee=null,ne=null,Be=null,je=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,d=!1,x=null,_=null,y=null,E=null,T=null,b=null,L=null,S=new $t(0,0,0),M=0,C=!1,I=null,O=null,D=null,U=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=G>=2);let tt=null,lt={};const j=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),vt=new pe().fromArray(j),bt=new pe().fromArray(et);function Et(B,ht,ft,Dt){const Pt=new Uint8Array(4),ee=n.createTexture();n.bindTexture(B,ee),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<ft;ne++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(ht+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return ee}const It={};It[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),It[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(It[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),It[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Nt(n.DEPTH_TEST),c.setFunc(Na),yt(!1),R(Du),Nt(n.CULL_FACE),K(Hi);function Nt(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function wt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Ft(B,ht){return p[B]!==ht?(n.bindFramebuffer(B,ht),p[B]=ht,i&&(B===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ht),B===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function F(B,ht){let ft=v,Dt=!1;if(B)if(ft=g.get(ht),ft===void 0&&(ft=[],g.set(ht,ft)),B.isWebGLMultipleRenderTargets){const Pt=B.texture;if(ft.length!==Pt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ne=Pt.length;ee<ne;ee++)ft[ee]=n.COLOR_ATTACHMENT0+ee;ft.length=Pt.length,Dt=!0}}else ft[0]!==n.COLOR_ATTACHMENT0&&(ft[0]=n.COLOR_ATTACHMENT0,Dt=!0);else ft[0]!==n.BACK&&(ft[0]=n.BACK,Dt=!0);Dt&&(e.isWebGL2?n.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function ut(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const $={[ls]:n.FUNC_ADD,[dm]:n.FUNC_SUBTRACT,[pm]:n.FUNC_REVERSE_SUBTRACT};if(i)$[Fu]=n.MIN,$[Ou]=n.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&($[Fu]=B.MIN_EXT,$[Ou]=B.MAX_EXT)}const at={[mm]:n.ZERO,[gm]:n.ONE,[_m]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[Em]:n.SRC_ALPHA_SATURATE,[Mm]:n.DST_COLOR,[vm]:n.DST_ALPHA,[xm]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[Sm]:n.ONE_MINUS_DST_COLOR,[ym]:n.ONE_MINUS_DST_ALPHA,[bm]:n.CONSTANT_COLOR,[Tm]:n.ONE_MINUS_CONSTANT_COLOR,[wm]:n.CONSTANT_ALPHA,[Am]:n.ONE_MINUS_CONSTANT_ALPHA};function K(B,ht,ft,Dt,Pt,ee,ne,Be,je,ue){if(B===Hi){d===!0&&(wt(n.BLEND),d=!1);return}if(d===!1&&(Nt(n.BLEND),d=!0),B!==fm){if(B!==x||ue!==C){if((_!==ls||T!==ls)&&(n.blendEquation(n.FUNC_ADD),_=ls,T=ls),ue)switch(B){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFunc(n.ONE,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,E=null,b=null,L=null,S.set(0,0,0),M=0,x=B,C=ue}return}Pt=Pt||ht,ee=ee||ft,ne=ne||Dt,(ht!==_||Pt!==T)&&(n.blendEquationSeparate($[ht],$[Pt]),_=ht,T=Pt),(ft!==y||Dt!==E||ee!==b||ne!==L)&&(n.blendFuncSeparate(at[ft],at[Dt],at[ee],at[ne]),y=ft,E=Dt,b=ee,L=ne),(Be.equals(S)===!1||je!==M)&&(n.blendColor(Be.r,Be.g,Be.b,je),S.copy(Be),M=je),x=B,C=!1}function At(B,ht){B.side===tn?wt(n.CULL_FACE):Nt(n.CULL_FACE);let ft=B.side===nn;ht&&(ft=!ft),yt(ft),B.blending===lr&&B.transparent===!1?K(Hi):K(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);const Dt=B.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),H(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Nt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(B){I!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),I=B)}function R(B){B!==lm?(Nt(n.CULL_FACE),B!==O&&(B===Du?n.cullFace(n.BACK):B===um?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),O=B}function A(B){B!==D&&(Z&&n.lineWidth(B),D=B)}function H(B,ht,ft){B?(Nt(n.POLYGON_OFFSET_FILL),(U!==ht||z!==ft)&&(n.polygonOffset(ht,ft),U=ht,z=ft)):wt(n.POLYGON_OFFSET_FILL)}function ot(B){B?Nt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function it(B){B===void 0&&(B=n.TEXTURE0+X-1),tt!==B&&(n.activeTexture(B),tt=B)}function nt(B,ht,ft){ft===void 0&&(tt===null?ft=n.TEXTURE0+X-1:ft=tt);let Dt=lt[ft];Dt===void 0&&(Dt={type:void 0,texture:void 0},lt[ft]=Dt),(Dt.type!==B||Dt.texture!==ht)&&(tt!==ft&&(n.activeTexture(ft),tt=ft),n.bindTexture(B,ht||It[B]),Dt.type=B,Dt.texture=ht)}function Tt(){const B=lt[tt];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function xt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(B){vt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),vt.copy(B))}function qt(B){bt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),bt.copy(B))}function Jt(B,ht){let ft=f.get(ht);ft===void 0&&(ft=new WeakMap,f.set(ht,ft));let Dt=ft.get(B);Dt===void 0&&(Dt=n.getUniformBlockIndex(ht,B.name),ft.set(B,Dt))}function Vt(B,ht){const Dt=f.get(ht).get(B);u.get(ht)!==Dt&&(n.uniformBlockBinding(ht,Dt,B.__bindingPointIndex),u.set(ht,Dt))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,lt={},p={},g=new WeakMap,v=[],m=null,d=!1,x=null,_=null,y=null,E=null,T=null,b=null,L=null,S=new $t(0,0,0),M=0,C=!1,I=null,O=null,D=null,U=null,z=null,vt.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Nt,disable:wt,bindFramebuffer:Ft,drawBuffers:F,useProgram:ut,setBlending:K,setMaterial:At,setFlipSided:yt,setCullFace:R,setLineWidth:A,setPolygonOffset:H,setScissorTest:ot,activeTexture:it,bindTexture:nt,unbindTexture:Tt,compressedTexImage2D:xt,compressedTexImage3D:Mt,texImage2D:mt,texImage3D:ct,updateUBOMapping:Jt,uniformBlockBinding:Vt,texStorage2D:N,texStorage3D:rt,texSubImage2D:Lt,texSubImage3D:Bt,compressedTexSubImage2D:st,compressedTexSubImage3D:Yt,scissor:Rt,viewport:qt,reset:pt}}function yy(n,t,e,i,s,r,o){const a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,A){return p?new OffscreenCanvas(R,A):Ha("canvas")}function v(R,A,H,ot){let it=1;if((R.width>ot||R.height>ot)&&(it=ot/Math.max(R.width,R.height)),it<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const nt=A?ka:Math.floor,Tt=nt(it*R.width),xt=nt(it*R.height);f===void 0&&(f=g(Tt,xt));const Mt=H?g(Tt,xt):f;return Mt.width=Tt,Mt.height=xt,Mt.getContext("2d").drawImage(R,0,0,Tt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Tt+"x"+xt+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Pl(R.width)&&Pl(R.height)}function d(R){return a?!1:R.wrapS!==Nn||R.wrapT!==Nn||R.minFilter!==Qe&&R.minFilter!==vn}function x(R,A){return R.generateMipmaps&&A&&R.minFilter!==Qe&&R.minFilter!==vn}function _(R){n.generateMipmap(R)}function y(R,A,H,ot,it=!1){if(a===!1)return A;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=A;if(A===n.RED&&(H===n.FLOAT&&(nt=n.R32F),H===n.HALF_FLOAT&&(nt=n.R16F),H===n.UNSIGNED_BYTE&&(nt=n.R8)),A===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(nt=n.R8UI),H===n.UNSIGNED_SHORT&&(nt=n.R16UI),H===n.UNSIGNED_INT&&(nt=n.R32UI),H===n.BYTE&&(nt=n.R8I),H===n.SHORT&&(nt=n.R16I),H===n.INT&&(nt=n.R32I)),A===n.RG&&(H===n.FLOAT&&(nt=n.RG32F),H===n.HALF_FLOAT&&(nt=n.RG16F),H===n.UNSIGNED_BYTE&&(nt=n.RG8)),A===n.RGBA){const Tt=it?Fa:ae.getTransfer(ot);H===n.FLOAT&&(nt=n.RGBA32F),H===n.HALF_FLOAT&&(nt=n.RGBA16F),H===n.UNSIGNED_BYTE&&(nt=Tt===he?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function E(R,A,H){return x(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==Qe&&R.minFilter!==vn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===Qe||R===Bu||R===dc?n.NEAREST:n.LINEAR}function b(R){const A=R.target;A.removeEventListener("dispose",b),S(A),A.isVideoTexture&&u.delete(A)}function L(R){const A=R.target;A.removeEventListener("dispose",L),C(A)}function S(R){const A=i.get(R);if(A.__webglInit===void 0)return;const H=R.source,ot=h.get(H);if(ot){const it=ot[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&M(R),Object.keys(ot).length===0&&h.delete(H)}i.remove(R)}function M(R){const A=i.get(R);n.deleteTexture(A.__webglTexture);const H=R.source,ot=h.get(H);delete ot[A.__cacheKey],o.memory.textures--}function C(R){const A=R.texture,H=i.get(R),ot=i.get(A);if(ot.__webglTexture!==void 0&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(H.__webglFramebuffer[it]))for(let nt=0;nt<H.__webglFramebuffer[it].length;nt++)n.deleteFramebuffer(H.__webglFramebuffer[it][nt]);else n.deleteFramebuffer(H.__webglFramebuffer[it]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[it])}else{if(Array.isArray(H.__webglFramebuffer))for(let it=0;it<H.__webglFramebuffer.length;it++)n.deleteFramebuffer(H.__webglFramebuffer[it]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let it=0;it<H.__webglColorRenderbuffer.length;it++)H.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[it]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let it=0,nt=A.length;it<nt;it++){const Tt=i.get(A[it]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(A[it])}i.remove(A),i.remove(R)}let I=0;function O(){I=0}function D(){const R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function U(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function z(R,A){const H=i.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ot=R.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(H,R,A);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+A)}function X(R,A){const H=i.get(R);if(R.version>0&&H.__version!==R.version){vt(H,R,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+A)}function Z(R,A){const H=i.get(R);if(R.version>0&&H.__version!==R.version){vt(H,R,A);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+A)}function G(R,A){const H=i.get(R);if(R.version>0&&H.__version!==R.version){bt(H,R,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+A)}const Q={[wl]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},tt={[Qe]:n.NEAREST,[Bu]:n.NEAREST_MIPMAP_NEAREST,[dc]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Vm]:n.LINEAR_MIPMAP_NEAREST,[oo]:n.LINEAR_MIPMAP_LINEAR},lt={[eg]:n.NEVER,[ag]:n.ALWAYS,[ng]:n.LESS,[Cd]:n.LEQUAL,[ig]:n.EQUAL,[og]:n.GEQUAL,[sg]:n.GREATER,[rg]:n.NOTEQUAL};function j(R,A,H){if(H?(n.texParameteri(R,n.TEXTURE_WRAP_S,Q[A.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Q[A.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Q[A.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,tt[A.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,tt[A.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Nn||A.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Qe&&A.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,lt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qe||A.minFilter!==dc&&A.minFilter!==oo||A.type===Fi&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===ao&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(R,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function et(R,A){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",b));const ot=A.source;let it=h.get(ot);it===void 0&&(it={},h.set(ot,it));const nt=U(A);if(nt!==R.__cacheKey){it[nt]===void 0&&(it[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[nt].usedTimes++;const Tt=it[R.__cacheKey];Tt!==void 0&&(it[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(A)),R.__cacheKey=nt,R.__webglTexture=it[nt].texture}return H}function vt(R,A,H){let ot=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ot=n.TEXTURE_3D);const it=et(R,A),nt=A.source;e.bindTexture(ot,R.__webglTexture,n.TEXTURE0+H);const Tt=i.get(nt);if(nt.version!==Tt.__version||it===!0){e.activeTexture(n.TEXTURE0+H);const xt=ae.getPrimaries(ae.workingColorSpace),Mt=A.colorSpace===Mn?null:ae.getPrimaries(A.colorSpace),Lt=A.colorSpace===Mn||xt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Bt=d(A)&&m(A.image)===!1;let st=v(A.image,Bt,!1,s.maxTextureSize);st=yt(A,st);const Yt=m(st)||a,N=r.convert(A.format,A.colorSpace);let rt=r.convert(A.type),mt=y(A.internalFormat,N,rt,A.colorSpace,A.isVideoTexture);j(ot,A,Yt);let ct;const Rt=A.mipmaps,qt=a&&A.isVideoTexture!==!0&&mt!==Ad,Jt=Tt.__version===void 0||it===!0,Vt=E(A,st,Yt);if(A.isDepthTexture)mt=n.DEPTH_COMPONENT,a?A.type===Fi?mt=n.DEPTH_COMPONENT32F:A.type===Ni?mt=n.DEPTH_COMPONENT24:A.type===ms?mt=n.DEPTH24_STENCIL8:mt=n.DEPTH_COMPONENT16:A.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===gs&&mt===n.DEPTH_COMPONENT&&A.type!==Kl&&A.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ni,rt=r.convert(A.type)),A.format===mr&&mt===n.DEPTH_COMPONENT&&(mt=n.DEPTH_STENCIL,A.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ms,rt=r.convert(A.type))),Jt&&(qt?e.texStorage2D(n.TEXTURE_2D,1,mt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,mt,st.width,st.height,0,N,rt,null));else if(A.isDataTexture)if(Rt.length>0&&Yt){qt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Vt,mt,Rt[0].width,Rt[0].height);for(let pt=0,B=Rt.length;pt<B;pt++)ct=Rt[pt],qt?e.texSubImage2D(n.TEXTURE_2D,pt,0,0,ct.width,ct.height,N,rt,ct.data):e.texImage2D(n.TEXTURE_2D,pt,mt,ct.width,ct.height,0,N,rt,ct.data);A.generateMipmaps=!1}else qt?(Jt&&e.texStorage2D(n.TEXTURE_2D,Vt,mt,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,N,rt,st.data)):e.texImage2D(n.TEXTURE_2D,0,mt,st.width,st.height,0,N,rt,st.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){qt&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Vt,mt,Rt[0].width,Rt[0].height,st.depth);for(let pt=0,B=Rt.length;pt<B;pt++)ct=Rt[pt],A.format!==Fn?N!==null?qt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,ct.width,ct.height,st.depth,N,ct.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,mt,ct.width,ct.height,st.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,ct.width,ct.height,st.depth,N,rt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,mt,ct.width,ct.height,st.depth,0,N,rt,ct.data)}else{qt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Vt,mt,Rt[0].width,Rt[0].height);for(let pt=0,B=Rt.length;pt<B;pt++)ct=Rt[pt],A.format!==Fn?N!==null?qt?e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,ct.width,ct.height,N,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(n.TEXTURE_2D,pt,0,0,ct.width,ct.height,N,rt,ct.data):e.texImage2D(n.TEXTURE_2D,pt,mt,ct.width,ct.height,0,N,rt,ct.data)}else if(A.isDataArrayTexture)qt?(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Vt,mt,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,N,rt,st.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,st.width,st.height,st.depth,0,N,rt,st.data);else if(A.isData3DTexture)qt?(Jt&&e.texStorage3D(n.TEXTURE_3D,Vt,mt,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,N,rt,st.data)):e.texImage3D(n.TEXTURE_3D,0,mt,st.width,st.height,st.depth,0,N,rt,st.data);else if(A.isFramebufferTexture){if(Jt)if(qt)e.texStorage2D(n.TEXTURE_2D,Vt,mt,st.width,st.height);else{let pt=st.width,B=st.height;for(let ht=0;ht<Vt;ht++)e.texImage2D(n.TEXTURE_2D,ht,mt,pt,B,0,N,rt,null),pt>>=1,B>>=1}}else if(Rt.length>0&&Yt){qt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Vt,mt,Rt[0].width,Rt[0].height);for(let pt=0,B=Rt.length;pt<B;pt++)ct=Rt[pt],qt?e.texSubImage2D(n.TEXTURE_2D,pt,0,0,N,rt,ct):e.texImage2D(n.TEXTURE_2D,pt,mt,N,rt,ct);A.generateMipmaps=!1}else qt?(Jt&&e.texStorage2D(n.TEXTURE_2D,Vt,mt,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,N,rt,st)):e.texImage2D(n.TEXTURE_2D,0,mt,N,rt,st);x(A,Yt)&&_(ot),Tt.__version=nt.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function bt(R,A,H){if(A.image.length!==6)return;const ot=et(R,A),it=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const nt=i.get(it);if(it.version!==nt.__version||ot===!0){e.activeTexture(n.TEXTURE0+H);const Tt=ae.getPrimaries(ae.workingColorSpace),xt=A.colorSpace===Mn?null:ae.getPrimaries(A.colorSpace),Mt=A.colorSpace===Mn||Tt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Lt=A.isCompressedTexture||A.image[0].isCompressedTexture,Bt=A.image[0]&&A.image[0].isDataTexture,st=[];for(let pt=0;pt<6;pt++)!Lt&&!Bt?st[pt]=v(A.image[pt],!1,!0,s.maxCubemapSize):st[pt]=Bt?A.image[pt].image:A.image[pt],st[pt]=yt(A,st[pt]);const Yt=st[0],N=m(Yt)||a,rt=r.convert(A.format,A.colorSpace),mt=r.convert(A.type),ct=y(A.internalFormat,rt,mt,A.colorSpace),Rt=a&&A.isVideoTexture!==!0,qt=nt.__version===void 0||ot===!0;let Jt=E(A,Yt,N);j(n.TEXTURE_CUBE_MAP,A,N);let Vt;if(Lt){Rt&&qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,ct,Yt.width,Yt.height);for(let pt=0;pt<6;pt++){Vt=st[pt].mipmaps;for(let B=0;B<Vt.length;B++){const ht=Vt[B];A.format!==Fn?rt!==null?Rt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B,0,0,ht.width,ht.height,rt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B,ct,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B,0,0,ht.width,ht.height,rt,mt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B,ct,ht.width,ht.height,0,rt,mt,ht.data)}}}else{Vt=A.mipmaps,Rt&&qt&&(Vt.length>0&&Jt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,ct,st[0].width,st[0].height));for(let pt=0;pt<6;pt++)if(Bt){Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,st[pt].width,st[pt].height,rt,mt,st[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ct,st[pt].width,st[pt].height,0,rt,mt,st[pt].data);for(let B=0;B<Vt.length;B++){const ft=Vt[B].image[pt].image;Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B+1,0,0,ft.width,ft.height,rt,mt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B+1,ct,ft.width,ft.height,0,rt,mt,ft.data)}}else{Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,rt,mt,st[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ct,rt,mt,st[pt]);for(let B=0;B<Vt.length;B++){const ht=Vt[B];Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B+1,0,0,rt,mt,ht.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,B+1,ct,rt,mt,ht.image[pt])}}}x(A,N)&&_(n.TEXTURE_CUBE_MAP),nt.__version=it.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Et(R,A,H,ot,it,nt){const Tt=r.convert(H.format,H.colorSpace),xt=r.convert(H.type),Mt=y(H.internalFormat,Tt,xt,H.colorSpace);if(!i.get(A).__hasExternalTextures){const Bt=Math.max(1,A.width>>nt),st=Math.max(1,A.height>>nt);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,Mt,Bt,st,A.depth,0,Tt,xt,null):e.texImage2D(it,nt,Mt,Bt,st,0,Tt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),K(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,it,i.get(H).__webglTexture,0,at(A)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,it,i.get(H).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(R,A,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ot=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||K(A)){const it=A.depthTexture;it&&it.isDepthTexture&&(it.type===Fi?ot=n.DEPTH_COMPONENT32F:it.type===Ni&&(ot=n.DEPTH_COMPONENT24));const nt=at(A);K(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,ot,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,ot,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ot,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ot=at(A);H&&K(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,A.width,A.height):K(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ot=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0;it<ot.length;it++){const nt=ot[it],Tt=r.convert(nt.format,nt.colorSpace),xt=r.convert(nt.type),Mt=y(nt.internalFormat,Tt,xt,nt.colorSpace),Lt=at(A);H&&K(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,Mt,A.width,A.height):K(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,Mt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const ot=i.get(A.depthTexture).__webglTexture,it=at(A);if(A.depthTexture.format===gs)K(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(A.depthTexture.format===mr)K(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function wt(R){const A=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Nt(A.__webglFramebuffer,R)}else if(H){A.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ot]),A.__webglDepthbuffer[ot]=n.createRenderbuffer(),It(A.__webglDepthbuffer[ot],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),It(A.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,A,H){const ot=i.get(R);A!==void 0&&Et(ot.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&wt(R)}function F(R){const A=R.texture,H=i.get(R),ot=i.get(A);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=A.version,o.memory.textures++);const it=R.isWebGLCubeRenderTarget===!0,nt=R.isWebGLMultipleRenderTargets===!0,Tt=m(R)||a;if(it){H.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[xt]=[];for(let Mt=0;Mt<A.mipmaps.length;Mt++)H.__webglFramebuffer[xt][Mt]=n.createFramebuffer()}else H.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let xt=0;xt<A.mipmaps.length;xt++)H.__webglFramebuffer[xt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(nt)if(s.drawBuffers){const xt=R.texture;for(let Mt=0,Lt=xt.length;Mt<Lt;Mt++){const Bt=i.get(xt[Mt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&K(R)===!1){const xt=nt?A:[A];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Mt=0;Mt<xt.length;Mt++){const Lt=xt[Mt];H.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Mt]);const Bt=r.convert(Lt.format,Lt.colorSpace),st=r.convert(Lt.type),Yt=y(Lt.internalFormat,Bt,st,Lt.colorSpace,R.isXRRenderTarget===!0),N=at(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,N,Yt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,H.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),It(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),j(n.TEXTURE_CUBE_MAP,A,Tt);for(let xt=0;xt<6;xt++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Et(H.__webglFramebuffer[xt][Mt],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Mt);else Et(H.__webglFramebuffer[xt],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(A,Tt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const xt=R.texture;for(let Mt=0,Lt=xt.length;Mt<Lt;Mt++){const Bt=xt[Mt],st=i.get(Bt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),j(n.TEXTURE_2D,Bt,Tt),Et(H.__webglFramebuffer,R,Bt,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,0),x(Bt,Tt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?xt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ot.__webglTexture),j(xt,A,Tt),a&&A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Et(H.__webglFramebuffer[Mt],R,A,n.COLOR_ATTACHMENT0,xt,Mt);else Et(H.__webglFramebuffer,R,A,n.COLOR_ATTACHMENT0,xt,0);x(A,Tt)&&_(xt),e.unbindTexture()}R.depthBuffer&&wt(R)}function ut(R){const A=m(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ot=0,it=H.length;ot<it;ot++){const nt=H[ot];if(x(nt,A)){const Tt=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(nt).__webglTexture;e.bindTexture(Tt,xt),_(Tt),e.unbindTexture()}}}function $(R){if(a&&R.samples>0&&K(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ot=R.height;let it=n.COLOR_BUFFER_BIT;const nt=[],Tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(R),Mt=R.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Lt=0;Lt<A.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Lt=0;Lt<A.length;Lt++){nt.push(n.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&nt.push(Tt);const Bt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Bt===!1&&(R.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),Mt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Lt]),Bt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),Mt){const st=i.get(A[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,H,ot,0,0,H,ot,it,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Lt=0;Lt<A.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Lt]);const Bt=i.get(A[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function at(R){return Math.min(s.maxSamples,R.samples)}function K(R){const A=i.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function At(R){const A=o.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function yt(R,A){const H=R.colorSpace,ot=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Rl||H!==fi&&H!==Mn&&(ae.getTransfer(H)===he?a===!1?t.has("EXT_sRGB")===!0&&ot===Fn?(R.format=Rl,R.minFilter=vn,R.generateMipmaps=!1):A=Dd.sRGBToLinear(A):(ot!==Fn||it!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=K}function My(n,t,e){const i=e.isWebGL2;function s(r,o=Mn){let a;const c=ae.getTransfer(o);if(r===Vi)return n.UNSIGNED_BYTE;if(r===Sd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ed)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Wm)return n.BYTE;if(r===Xm)return n.SHORT;if(r===Kl)return n.UNSIGNED_SHORT;if(r===Md)return n.INT;if(r===Ni)return n.UNSIGNED_INT;if(r===Fi)return n.FLOAT;if(r===ao)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ym)return n.ALPHA;if(r===Fn)return n.RGBA;if(r===qm)return n.LUMINANCE;if(r===jm)return n.LUMINANCE_ALPHA;if(r===gs)return n.DEPTH_COMPONENT;if(r===mr)return n.DEPTH_STENCIL;if(r===Rl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Zm)return n.RED;if(r===bd)return n.RED_INTEGER;if(r===$m)return n.RG;if(r===Td)return n.RG_INTEGER;if(r===wd)return n.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===_c)if(c===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_c)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zu||r===ku||r===Hu||r===Gu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===zu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ku)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ad)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vu||r===Wu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vu)return c===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wu)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xu||r===Yu||r===qu||r===ju||r===Zu||r===$u||r===Ku||r===Ju||r===Qu||r===th||r===eh||r===nh||r===ih||r===sh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xu)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yu)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qu)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ju)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zu)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$u)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ku)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ju)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qu)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===th)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eh)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nh)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xc||r===rh||r===oh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===xc)return c===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Km||r===ah||r===ch||r===lh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===xc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ms?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Sy extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ui extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class by extends Ss{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const v=e.getContextAttributes();let m=null,d=null;const x=[],_=[],y=new J;let E=null;const T=new dn;T.layers.enable(1),T.viewport=new pe;const b=new dn;b.layers.enable(2),b.viewport=new pe;const L=[T,b],S=new Sy;S.layers.enable(1),S.layers.enable(2);let M=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=x[j];return et===void 0&&(et=new Hc,x[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=x[j];return et===void 0&&(et=new Hc,x[j]=et),et.getGripSpace()},this.getHand=function(j){let et=x[j];return et===void 0&&(et=new Hc,x[j]=et),et.getHandSpace()};function I(j){const et=_.indexOf(j.inputSource);if(et===-1)return;const vt=x[et];vt!==void 0&&(vt.update(j.inputSource,j.frame,l||o),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",D);for(let j=0;j<x.length;j++){const et=_[j];et!==null&&(_[j]=null,x[j].disconnect(et))}M=null,C=null,t.setRenderTarget(m),p=null,h=null,f=null,s=null,d=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",O),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new vs(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let et=null,vt=null,bt=null;v.depth&&(bt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=v.stencil?mr:gs,vt=v.stencil?ms:Ni);const Et={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Et),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),d=new vs(h.textureWidth,h.textureHeight,{format:Fn,type:Vi,depthTexture:new Vd(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const It=t.properties.get(d);It.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(j){for(let et=0;et<j.removed.length;et++){const vt=j.removed[et],bt=_.indexOf(vt);bt>=0&&(_[bt]=null,x[bt].disconnect(vt))}for(let et=0;et<j.added.length;et++){const vt=j.added[et];let bt=_.indexOf(vt);if(bt===-1){for(let It=0;It<x.length;It++)if(It>=_.length){_.push(vt),bt=It;break}else if(_[It]===null){_[It]=vt,bt=It;break}if(bt===-1)break}const Et=x[bt];Et&&Et.connect(vt)}}const U=new w,z=new w;function X(j,et,vt){U.setFromMatrixPosition(et.matrixWorld),z.setFromMatrixPosition(vt.matrixWorld);const bt=U.distanceTo(z),Et=et.projectionMatrix.elements,It=vt.projectionMatrix.elements,Nt=Et[14]/(Et[10]-1),wt=Et[14]/(Et[10]+1),Ft=(Et[9]+1)/Et[5],F=(Et[9]-1)/Et[5],ut=(Et[8]-1)/Et[0],$=(It[8]+1)/It[0],at=Nt*ut,K=Nt*$,At=bt/(-ut+$),yt=At*-ut;et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(yt),j.translateZ(At),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Nt+At,A=wt+At,H=at-yt,ot=K+(bt-yt),it=Ft*wt/A*R,nt=F*wt/A*R;j.projectionMatrix.makePerspective(H,ot,it,nt,R,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;S.near=b.near=T.near=j.near,S.far=b.far=T.far=j.far,(M!==S.near||C!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,C=S.far);const et=j.parent,vt=S.cameras;Z(S,et);for(let bt=0;bt<vt.length;bt++)Z(vt[bt],et);vt.length===2?X(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),G(j,S,et)};function G(j,et,vt){vt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=co*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let Q=null;function tt(j,et){if(u=et.getViewerPose(l||o),g=et,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let bt=!1;vt.length!==S.cameras.length&&(S.cameras.length=0,bt=!0);for(let Et=0;Et<vt.length;Et++){const It=vt[Et];let Nt=null;if(p!==null)Nt=p.getViewport(It);else{const Ft=f.getViewSubImage(h,It);Nt=Ft.viewport,Et===0&&(t.setRenderTargetTextures(d,Ft.colorTexture,h.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(d))}let wt=L[Et];wt===void 0&&(wt=new dn,wt.layers.enable(Et),wt.viewport=new pe,L[Et]=wt),wt.matrix.fromArray(It.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(It.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Et===0&&(S.matrix.copy(wt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),bt===!0&&S.cameras.push(wt)}}for(let vt=0;vt<x.length;vt++){const bt=_[vt],Et=x[vt];bt!==null&&Et!==void 0&&Et.update(bt,et,l||o)}Q&&Q(j,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const lt=new Hd;lt.setAnimationLoop(tt),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}function Ty(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Bd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,x,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wy(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function l(x,_){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(x,E);const T=t.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function u(x){const _=f();x.__bindingPointIndex=_;const y=n.createBuffer(),E=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=s[x.id],y=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,b=y.length;T<b;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,M=L.length;S<M;S++){const C=L[S];if(p(C,T,S,E)===!0){const I=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let U=0;U<O.length;U++){const z=O[U],X=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,I+D,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,_,y,E){const T=x.value,b=_+"_"+y;if(E[b]===void 0)return typeof T=="number"||typeof T=="boolean"?E[b]=T:E[b]=T.clone(),!0;{const L=E[b];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return E[b]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(x){const _=x.uniforms;let y=0;const E=16;for(let b=0,L=_.length;b<L;b++){const S=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,C=S.length;M<C;M++){const I=S[M],O=Array.isArray(I.value)?I.value:[I.value];for(let D=0,U=O.length;D<U;D++){const z=O[D],X=v(z),Z=y%E;Z!==0&&E-Z<X.boundary&&(y+=E-Z),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=X.storage}}}const T=y%E;return T>0&&(y+=E-T),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class iu{constructor(t={}){const{canvas:e=Sg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const _=this;let y=!1,E=0,T=0,b=null,L=-1,S=null;const M=new pe,C=new pe;let I=null;const O=new $t(0);let D=0,U=e.width,z=e.height,X=1,Z=null,G=null;const Q=new pe(0,0,U,z),tt=new pe(0,0,U,z);let lt=!1;const j=new eu;let et=!1,vt=!1,bt=null;const Et=new Kt,It=new J,Nt=new w,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return b===null?X:1}let F=i;function ut(P,k){for(let Y=0;Y<P.length;Y++){const q=P[Y],V=e.getContext(q,k);if(V!==null)return V}return null}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){const k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),F=ut(k,P),F===null)throw ut(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let $,at,K,At,yt,R,A,H,ot,it,nt,Tt,xt,Mt,Lt,Bt,st,Yt,N,rt,mt,ct,Rt,qt;function Jt(){$=new Fx(F),at=new Cx(F,$,t),$.init(at),ct=new My(F,$,at),K=new vy(F,$,at),At=new zx(F),yt=new ry,R=new yy(F,$,K,yt,at,ct,At),A=new Dx(_),H=new Nx(_),ot=new qg(F,at),Rt=new Rx(F,$,ot,at),it=new Ox(F,ot,At,Rt),nt=new Vx(F,it,ot,At),N=new Gx(F,at,R),Bt=new Lx(yt),Tt=new sy(_,A,H,$,at,Rt,Bt),xt=new Ty(_,yt),Mt=new ay,Lt=new dy($,at),Yt=new Ax(_,A,H,K,nt,h,c),st=new xy(_,nt,at),qt=new wy(F,At,at,K),rt=new Px(F,$,At,at),mt=new Bx(F,$,At,at),At.programs=Tt.programs,_.capabilities=at,_.extensions=$,_.properties=yt,_.renderLists=Mt,_.shadowMap=st,_.state=K,_.info=At}Jt();const Vt=new by(_,F);this.xr=Vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=$.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=$.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(U,z,!1))},this.getSize=function(P){return P.set(U,z)},this.setSize=function(P,k,Y=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,z=k,e.width=Math.floor(P*X),e.height=Math.floor(k*X),Y===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(U*X,z*X).floor()},this.setDrawingBufferSize=function(P,k,Y){U=P,z=k,X=Y,e.width=Math.floor(P*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(Q)},this.setViewport=function(P,k,Y,q){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,k,Y,q),K.viewport(M.copy(Q).multiplyScalar(X).floor())},this.getScissor=function(P){return P.copy(tt)},this.setScissor=function(P,k,Y,q){P.isVector4?tt.set(P.x,P.y,P.z,P.w):tt.set(P,k,Y,q),K.scissor(C.copy(tt).multiplyScalar(X).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(P){K.setScissorTest(lt=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){G=P},this.getClearColor=function(P){return P.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(P=!0,k=!0,Y=!0){let q=0;if(P){let V=!1;if(b!==null){const St=b.texture.format;V=St===wd||St===Td||St===bd}if(V){const St=b.texture.type,Ct=St===Vi||St===Ni||St===Kl||St===ms||St===Sd||St===Ed,Ut=Yt.getClearColor(),Ot=Yt.getClearAlpha(),Wt=Ut.r,kt=Ut.g,Ht=Ut.b;Ct?(p[0]=Wt,p[1]=kt,p[2]=Ht,p[3]=Ot,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=Wt,g[1]=kt,g[2]=Ht,g[3]=Ot,F.clearBufferiv(F.COLOR,0,g))}else q|=F.COLOR_BUFFER_BIT}k&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Mt.dispose(),Lt.dispose(),yt.dispose(),A.dispose(),H.dispose(),nt.dispose(),Rt.dispose(),qt.dispose(),Tt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",je),Vt.removeEventListener("sessionend",ue),bt&&(bt.dispose(),bt=null),Ze.stop()};function pt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=At.autoReset,k=st.enabled,Y=st.autoUpdate,q=st.needsUpdate,V=st.type;Jt(),At.autoReset=P,st.enabled=k,st.autoUpdate=Y,st.needsUpdate=q,st.type=V}function ht(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ft(P){const k=P.target;k.removeEventListener("dispose",ft),Dt(k)}function Dt(P){Pt(P),yt.remove(P)}function Pt(P){const k=yt.get(P).programs;k!==void 0&&(k.forEach(function(Y){Tt.releaseProgram(Y)}),P.isShaderMaterial&&Tt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,Y,q,V,St){k===null&&(k=wt);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Ut=sm(P,k,Y,q,V);K.setMaterial(q,Ct);let Ot=Y.index,Wt=1;if(q.wireframe===!0){if(Ot=it.getWireframeAttribute(Y),Ot===void 0)return;Wt=2}const kt=Y.drawRange,Ht=Y.attributes.position;let Te=kt.start*Wt,un=(kt.start+kt.count)*Wt;St!==null&&(Te=Math.max(Te,St.start*Wt),un=Math.min(un,(St.start+St.count)*Wt)),Ot!==null?(Te=Math.max(Te,0),un=Math.min(un,Ot.count)):Ht!=null&&(Te=Math.max(Te,0),un=Math.min(un,Ht.count));const ze=un-Te;if(ze<0||ze===1/0)return;Rt.setup(V,q,Ut,Y,Ot);let Zn,xe=rt;if(Ot!==null&&(Zn=ot.get(Ot),xe=mt,xe.setIndex(Zn)),V.isMesh)q.wireframe===!0?(K.setLineWidth(q.wireframeLinewidth*Ft()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(V.isLine){let jt=q.linewidth;jt===void 0&&(jt=1),K.setLineWidth(jt*Ft()),V.isLineSegments?xe.setMode(F.LINES):V.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else V.isPoints?xe.setMode(F.POINTS):V.isSprite&&xe.setMode(F.TRIANGLES);if(V.isBatchedMesh)xe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)xe.renderInstances(Te,ze,V.count);else if(Y.isInstancedBufferGeometry){const jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,lc=Math.min(Y.instanceCount,jt);xe.renderInstances(Te,ze,lc)}else xe.render(Te,ze)};function ee(P,k,Y){P.transparent===!0&&P.side===tn&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,To(P,k,Y),P.side=Xn,P.needsUpdate=!0,To(P,k,Y),P.side=tn):To(P,k,Y)}this.compile=function(P,k,Y=null){Y===null&&(Y=P),m=Lt.get(Y),m.init(),x.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),P!==Y&&P.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(_._useLegacyLights);const q=new Set;return P.traverse(function(V){const St=V.material;if(St)if(Array.isArray(St))for(let Ct=0;Ct<St.length;Ct++){const Ut=St[Ct];ee(Ut,Y,V),q.add(Ut)}else ee(St,Y,V),q.add(St)}),x.pop(),m=null,q},this.compileAsync=function(P,k,Y=null){const q=this.compile(P,k,Y);return new Promise(V=>{function St(){if(q.forEach(function(Ct){yt.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){V(P);return}setTimeout(St,10)}$.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ne=null;function Be(P){ne&&ne(P)}function je(){Ze.stop()}function ue(){Ze.start()}const Ze=new Hd;Ze.setAnimationLoop(Be),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(P){ne=P,Vt.setAnimationLoop(P),P===null?Ze.stop():Ze.start()},Vt.addEventListener("sessionstart",je),Vt.addEventListener("sessionend",ue),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(k),k=Vt.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,k,b),m=Lt.get(P,x.length),m.init(),x.push(m),Et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Et),vt=this.localClippingEnabled,et=Bt.init(this.clippingPlanes,vt),v=Mt.get(P,d.length),v.init(),d.push(v),kn(P,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Z,G),this.info.render.frame++,et===!0&&Bt.beginShadows();const Y=m.state.shadowsArray;if(st.render(Y,P,k),et===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(v,P),m.setupLights(_._useLegacyLights),k.isArrayCamera){const q=k.cameras;for(let V=0,St=q.length;V<St;V++){const Ct=q[V];wu(v,P,Ct,Ct.viewport)}}else wu(v,P,k);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(_,P,k),Rt.resetDefaultState(),L=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function kn(P,k,Y,q){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||j.intersectsSprite(P)){q&&Nt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Et);const Ct=nt.update(P),Ut=P.material;Ut.visible&&v.push(P,Ct,Ut,Y,Nt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||j.intersectsObject(P))){const Ct=nt.update(P),Ut=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Nt.copy(P.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Nt.copy(Ct.boundingSphere.center)),Nt.applyMatrix4(P.matrixWorld).applyMatrix4(Et)),Array.isArray(Ut)){const Ot=Ct.groups;for(let Wt=0,kt=Ot.length;Wt<kt;Wt++){const Ht=Ot[Wt],Te=Ut[Ht.materialIndex];Te&&Te.visible&&v.push(P,Ct,Te,Y,Nt.z,Ht)}}else Ut.visible&&v.push(P,Ct,Ut,Y,Nt.z,null)}}const St=P.children;for(let Ct=0,Ut=St.length;Ct<Ut;Ct++)kn(St[Ct],k,Y,q)}function wu(P,k,Y,q){const V=P.opaque,St=P.transmissive,Ct=P.transparent;m.setupLightsView(Y),et===!0&&Bt.setGlobalState(_.clippingPlanes,Y),St.length>0&&im(V,St,k,Y),q&&K.viewport(M.copy(q)),V.length>0&&bo(V,k,Y),St.length>0&&bo(St,k,Y),Ct.length>0&&bo(Ct,k,Y),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function im(P,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const St=at.isWebGL2;bt===null&&(bt=new vs(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ao:Vi,minFilter:oo,samples:St?4:0})),_.getDrawingBufferSize(It),St?bt.setSize(It.x,It.y):bt.setSize(ka(It.x),ka(It.y));const Ct=_.getRenderTarget();_.setRenderTarget(bt),_.getClearColor(O),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Ut=_.toneMapping;_.toneMapping=Gi,bo(P,Y,q),R.updateMultisampleRenderTarget(bt),R.updateRenderTargetMipmap(bt);let Ot=!1;for(let Wt=0,kt=k.length;Wt<kt;Wt++){const Ht=k[Wt],Te=Ht.object,un=Ht.geometry,ze=Ht.material,Zn=Ht.group;if(ze.side===tn&&Te.layers.test(q.layers)){const xe=ze.side;ze.side=nn,ze.needsUpdate=!0,Au(Te,Y,q,un,ze,Zn),ze.side=xe,ze.needsUpdate=!0,Ot=!0}}Ot===!0&&(R.updateMultisampleRenderTarget(bt),R.updateRenderTargetMipmap(bt)),_.setRenderTarget(Ct),_.setClearColor(O,D),_.toneMapping=Ut}function bo(P,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let V=0,St=P.length;V<St;V++){const Ct=P[V],Ut=Ct.object,Ot=Ct.geometry,Wt=q===null?Ct.material:q,kt=Ct.group;Ut.layers.test(Y.layers)&&Au(Ut,k,Y,Ot,Wt,kt)}}function Au(P,k,Y,q,V,St){P.onBeforeRender(_,k,Y,q,V,St),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),V.onBeforeRender(_,k,Y,q,P,St),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,_.renderBufferDirect(Y,k,q,V,P,St),V.side=Xn,V.needsUpdate=!0,_.renderBufferDirect(Y,k,q,V,P,St),V.side=tn):_.renderBufferDirect(Y,k,q,V,P,St),P.onAfterRender(_,k,Y,q,V,St)}function To(P,k,Y){k.isScene!==!0&&(k=wt);const q=yt.get(P),V=m.state.lights,St=m.state.shadowsArray,Ct=V.state.version,Ut=Tt.getParameters(P,V.state,St,k,Y),Ot=Tt.getProgramCacheKey(Ut);let Wt=q.programs;q.environment=P.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(P.isMeshStandardMaterial?H:A).get(P.envMap||q.environment),Wt===void 0&&(P.addEventListener("dispose",ft),Wt=new Map,q.programs=Wt);let kt=Wt.get(Ot);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===Ct)return Pu(P,Ut),kt}else Ut.uniforms=Tt.getUniforms(P),P.onBuild(Y,Ut,_),P.onBeforeCompile(Ut,_),kt=Tt.acquireProgram(Ut,Ot),Wt.set(Ot,kt),q.uniforms=Ut.uniforms;const Ht=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ht.clippingPlanes=Bt.uniform),Pu(P,Ut),q.needsLights=om(P),q.lightsStateVersion=Ct,q.needsLights&&(Ht.ambientLightColor.value=V.state.ambient,Ht.lightProbe.value=V.state.probe,Ht.directionalLights.value=V.state.directional,Ht.directionalLightShadows.value=V.state.directionalShadow,Ht.spotLights.value=V.state.spot,Ht.spotLightShadows.value=V.state.spotShadow,Ht.rectAreaLights.value=V.state.rectArea,Ht.ltc_1.value=V.state.rectAreaLTC1,Ht.ltc_2.value=V.state.rectAreaLTC2,Ht.pointLights.value=V.state.point,Ht.pointLightShadows.value=V.state.pointShadow,Ht.hemisphereLights.value=V.state.hemi,Ht.directionalShadowMap.value=V.state.directionalShadowMap,Ht.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ht.spotShadowMap.value=V.state.spotShadowMap,Ht.spotLightMatrix.value=V.state.spotLightMatrix,Ht.spotLightMap.value=V.state.spotLightMap,Ht.pointShadowMap.value=V.state.pointShadowMap,Ht.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function Ru(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=Ra.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function Pu(P,k){const Y=yt.get(P);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function sm(P,k,Y,q,V){k.isScene!==!0&&(k=wt),R.resetTextureUnits();const St=k.fog,Ct=q.isMeshStandardMaterial?k.environment:null,Ut=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:fi,Ot=(q.isMeshStandardMaterial?H:A).get(q.envMap||Ct),Wt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ht=!!Y.morphAttributes.position,Te=!!Y.morphAttributes.normal,un=!!Y.morphAttributes.color;let ze=Gi;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ze=_.toneMapping);const Zn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=Zn!==void 0?Zn.length:0,jt=yt.get(q),lc=m.state.lights;if(et===!0&&(vt===!0||P!==S)){const mn=P===S&&q.id===L;Bt.setState(q,P,mn)}let Se=!1;q.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==lc.state.version||jt.outputColorSpace!==Ut||V.isBatchedMesh&&jt.batching===!1||!V.isBatchedMesh&&jt.batching===!0||V.isInstancedMesh&&jt.instancing===!1||!V.isInstancedMesh&&jt.instancing===!0||V.isSkinnedMesh&&jt.skinning===!1||!V.isSkinnedMesh&&jt.skinning===!0||V.isInstancedMesh&&jt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&jt.instancingColor===!1&&V.instanceColor!==null||jt.envMap!==Ot||q.fog===!0&&jt.fog!==St||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Bt.numPlanes||jt.numIntersection!==Bt.numIntersection)||jt.vertexAlphas!==Wt||jt.vertexTangents!==kt||jt.morphTargets!==Ht||jt.morphNormals!==Te||jt.morphColors!==un||jt.toneMapping!==ze||at.isWebGL2===!0&&jt.morphTargetsCount!==xe)&&(Se=!0):(Se=!0,jt.__version=q.version);let $i=jt.currentProgram;Se===!0&&($i=To(q,k,V));let Cu=!1,Ar=!1,uc=!1;const Ve=$i.getUniforms(),Ki=jt.uniforms;if(K.useProgram($i.program)&&(Cu=!0,Ar=!0,uc=!0),q.id!==L&&(L=q.id,Ar=!0),Cu||S!==P){Ve.setValue(F,"projectionMatrix",P.projectionMatrix),Ve.setValue(F,"viewMatrix",P.matrixWorldInverse);const mn=Ve.map.cameraPosition;mn!==void 0&&mn.setValue(F,Nt.setFromMatrixPosition(P.matrixWorld)),at.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Ar=!0,uc=!0)}if(V.isSkinnedMesh){Ve.setOptional(F,V,"bindMatrix"),Ve.setOptional(F,V,"bindMatrixInverse");const mn=V.skeleton;mn&&(at.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Ve.setValue(F,"boneTexture",mn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ve.setOptional(F,V,"batchingTexture"),Ve.setValue(F,"batchingTexture",V._matricesTexture,R));const hc=Y.morphAttributes;if((hc.position!==void 0||hc.normal!==void 0||hc.color!==void 0&&at.isWebGL2===!0)&&N.update(V,Y,$i),(Ar||jt.receiveShadow!==V.receiveShadow)&&(jt.receiveShadow=V.receiveShadow,Ve.setValue(F,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ki.envMap.value=Ot,Ki.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Ar&&(Ve.setValue(F,"toneMappingExposure",_.toneMappingExposure),jt.needsLights&&rm(Ki,uc),St&&q.fog===!0&&xt.refreshFogUniforms(Ki,St),xt.refreshMaterialUniforms(Ki,q,X,z,bt),Ra.upload(F,Ru(jt),Ki,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ra.upload(F,Ru(jt),Ki,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ve.setValue(F,"center",V.center),Ve.setValue(F,"modelViewMatrix",V.modelViewMatrix),Ve.setValue(F,"normalMatrix",V.normalMatrix),Ve.setValue(F,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const mn=q.uniformsGroups;for(let fc=0,am=mn.length;fc<am;fc++)if(at.isWebGL2){const Lu=mn[fc];qt.update(Lu,$i),qt.bind(Lu,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function rm(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function om(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,k,Y){yt.get(P.texture).__webglTexture=k,yt.get(P.depthTexture).__webglTexture=Y;const q=yt.get(P);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,k){const Y=yt.get(P);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,Y=0){b=P,E=k,T=Y;let q=!0,V=null,St=!1,Ct=!1;if(P){const Ot=yt.get(P);Ot.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(F.FRAMEBUFFER,null),q=!1):Ot.__webglFramebuffer===void 0?R.setupRenderTarget(P):Ot.__hasExternalTextures&&R.rebindTextures(P,yt.get(P.texture).__webglTexture,yt.get(P.depthTexture).__webglTexture);const Wt=P.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ct=!0);const kt=yt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?V=kt[k][Y]:V=kt[k],St=!0):at.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?V=yt.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?V=kt[Y]:V=kt,M.copy(P.viewport),C.copy(P.scissor),I=P.scissorTest}else M.copy(Q).multiplyScalar(X).floor(),C.copy(tt).multiplyScalar(X).floor(),I=lt;if(K.bindFramebuffer(F.FRAMEBUFFER,V)&&at.drawBuffers&&q&&K.drawBuffers(P,V),K.viewport(M),K.scissor(C),K.setScissorTest(I),St){const Ot=yt.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,Y)}else if(Ct){const Ot=yt.get(P.texture),Wt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.__webglTexture,Y||0,Wt)}L=-1},this.readRenderTargetPixels=function(P,k,Y,q,V,St,Ct){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=yt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){K.bindFramebuffer(F.FRAMEBUFFER,Ut);try{const Ot=P.texture,Wt=Ot.format,kt=Ot.type;if(Wt!==Fn&&ct.convert(Wt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=kt===ao&&($.has("EXT_color_buffer_half_float")||at.isWebGL2&&$.has("EXT_color_buffer_float"));if(kt!==Vi&&ct.convert(kt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Fi&&(at.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-q&&Y>=0&&Y<=P.height-V&&F.readPixels(k,Y,q,V,ct.convert(Wt),ct.convert(kt),St)}finally{const Ot=b!==null?yt.get(b).__webglFramebuffer:null;K.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(P,k,Y=0){const q=Math.pow(2,-Y),V=Math.floor(k.image.width*q),St=Math.floor(k.image.height*q);R.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,P.x,P.y,V,St),K.unbindTexture()},this.copyTextureToTexture=function(P,k,Y,q=0){const V=k.image.width,St=k.image.height,Ct=ct.convert(Y.format),Ut=ct.convert(Y.type);R.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,P.x,P.y,V,St,Ct,Ut,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,P.x,P.y,k.mipmaps[0].width,k.mipmaps[0].height,Ct,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,q,P.x,P.y,Ct,Ut,k.image),q===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(P,k,Y,q,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=P.max.x-P.min.x+1,Ct=P.max.y-P.min.y+1,Ut=P.max.z-P.min.z+1,Ot=ct.convert(q.format),Wt=ct.convert(q.type);let kt;if(q.isData3DTexture)R.setTexture3D(q,0),kt=F.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),kt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Ht=F.getParameter(F.UNPACK_ROW_LENGTH),Te=F.getParameter(F.UNPACK_IMAGE_HEIGHT),un=F.getParameter(F.UNPACK_SKIP_PIXELS),ze=F.getParameter(F.UNPACK_SKIP_ROWS),Zn=F.getParameter(F.UNPACK_SKIP_IMAGES),xe=Y.isCompressedTexture?Y.mipmaps[V]:Y.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,P.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,P.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,P.min.z),Y.isDataTexture||Y.isData3DTexture?F.texSubImage3D(kt,V,k.x,k.y,k.z,St,Ct,Ut,Ot,Wt,xe.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(kt,V,k.x,k.y,k.z,St,Ct,Ut,Ot,xe.data)):F.texSubImage3D(kt,V,k.x,k.y,k.z,St,Ct,Ut,Ot,Wt,xe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te),F.pixelStorei(F.UNPACK_SKIP_PIXELS,un),F.pixelStorei(F.UNPACK_SKIP_ROWS,ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zn),V===0&&q.generateMipmaps&&F.generateMipmap(kt),K.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),K.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,K.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Jl?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===$a?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?_s:Rd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===_s?Ge:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ay extends iu{}Ay.prototype.isWebGL1Renderer=!0;class Zd extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class _o extends Sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jh=new w,Qh=new w,tf=new Kt,Gc=new Mr,jo=new mo;class oi extends Ae{constructor(t=new De,e=new _o){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Jh.fromBufferAttribute(e,s-1),Qh.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Jh.distanceTo(Qh);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,t.ray.intersectsSphere(jo)===!1)return;tf.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,u=new w,f=new w,h=new w,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=p){const E=g.getX(_),T=g.getX(_+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,T),Gc.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(h);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=p){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Gc.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ef=new w,nf=new w;class su extends oi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ef.fromBufferAttribute(e,s),nf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ef.distanceTo(nf);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ry extends cn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new J:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new w,s=[],r=[],o=[],a=new w,c=new Kt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ce(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ru extends jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const i=e||new J,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Py extends ru{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ou(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Zo=new w,Vc=new ou,Wc=new ou,Xc=new ou;class Cy extends jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new w){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Zo.subVectors(s[0],s[1]).add(s[0]),l=Zo);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Vc.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,v,m),Wc.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,v,m),Xc.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Wc.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Xc.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(Vc.calc(c),Wc.calc(c),Xc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sf(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function Ly(n,t){const e=1-n;return e*e*t}function Dy(n,t){return 2*(1-n)*n*t}function Iy(n,t){return n*n*t}function $r(n,t,e,i){return Ly(n,t)+Dy(n,e)+Iy(n,i)}function Uy(n,t){const e=1-n;return e*e*e*t}function Ny(n,t){const e=1-n;return 3*e*e*n*t}function Fy(n,t){return 3*(1-n)*n*n*t}function Oy(n,t){return n*n*n*t}function Kr(n,t,e,i,s){return Uy(n,t)+Ny(n,e)+Fy(n,i)+Oy(n,s)}class $d extends jn{constructor(t=new J,e=new J,i=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new J){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class By extends jn{constructor(t=new w,e=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y),Kr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kd extends jn{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zy extends jn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jd extends jn{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ky extends jn{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y),$r(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qd extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(sf(a,c.x,l.x,u.x,f.x),sf(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var Ll=Object.freeze({__proto__:null,ArcCurve:Py,CatmullRomCurve3:Cy,CubicBezierCurve:$d,CubicBezierCurve3:By,EllipseCurve:ru,LineCurve:Kd,LineCurve3:zy,QuadraticBezierCurve:Jd,QuadraticBezierCurve3:ky,SplineCurve:Qd});class Hy extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ll[s.type]().fromJSON(s))}return this}}class lo extends Hy{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Kd(this.currentPoint.clone(),new J(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Jd(this.currentPoint.clone(),new J(t,e),new J(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new $d(this.currentPoint.clone(),new J(t,e),new J(i,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Qd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new ru(t,e,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fr extends De{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ce(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new w,h=new J,p=new w,g=new w,v=new w;let m=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let x=0;x<=e;x++){const _=i+x*u*s,y=Math.sin(_),E=Math.cos(_);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*y,f.y=t[T].y,f.z=t[T].x*E,o.push(f.x,f.y,f.z),h.x=x/e,h.y=T/(t.length-1),a.push(h.x,h.y);const b=c[3*T+0]*y,L=c[3*T+1],S=c[3*T+0]*E;l.push(b,L,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const y=_+x*t.length,E=y,T=y+t.length,b=y+t.length+1,L=y+1;r.push(E,T,L),r.push(b,L,T)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.points,t.segments,t.phiStart,t.phiLength)}}class au extends fr{constructor(t=1,e=1,i=4,s=8){const r=new lo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new au(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ee extends De{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const v=[],m=i/2;let d=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function x(){const y=new w,E=new w;let T=0;const b=(e-t)/i;for(let L=0;L<=r;L++){const S=[],M=L/r,C=M*(e-t)+t;for(let I=0;I<=s;I++){const O=I/s,D=O*c+a,U=Math.sin(D),z=Math.cos(D);E.x=C*U,E.y=-M*i+m,E.z=C*z,f.push(E.x,E.y,E.z),y.set(U,b,z).normalize(),h.push(y.x,y.y,y.z),p.push(O,1-M),S.push(g++)}v.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=v[S][L],C=v[S+1][L],I=v[S+1][L+1],O=v[S][L+1];u.push(M,C,O),u.push(C,I,O),T+=6}l.addGroup(d,T,0),d+=T}function _(y){const E=g,T=new J,b=new w;let L=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const D=I/s*c+a,U=Math.cos(D),z=Math.sin(D);b.x=S*z,b.y=m*M,b.z=S*U,f.push(b.x,b.y,b.z),h.push(0,M,0),T.x=U*.5+.5,T.y=z*.5*M+.5,p.push(T.x,T.y),g++}for(let I=0;I<s;I++){const O=E+I,D=C+I;y===!0?u.push(D,D+1,O):u.push(D+1,D,O),L+=3}l.addGroup(d,L,y===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cu extends De{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new w,y=new w,E=new w;for(let T=0;T<e.length;T+=3)p(e[T+0],_),p(e[T+1],y),p(e[T+2],E),c(_,y,E,x)}function c(x,_,y,E){const T=E+1,b=[];for(let L=0;L<=T;L++){b[L]=[];const S=x.clone().lerp(y,L/T),M=_.clone().lerp(y,L/T),C=T-L;for(let I=0;I<=C;I++)I===0&&L===T?b[L][I]=S:b[L][I]=S.clone().lerp(M,I/C)}for(let L=0;L<T;L++)for(let S=0;S<2*(T-L)-1;S++){const M=Math.floor(S/2);S%2===0?(h(b[L][M+1]),h(b[L+1][M]),h(b[L][M])):(h(b[L][M+1]),h(b[L+1][M+1]),h(b[L+1][M]))}}function l(x){const _=new w;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(x),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){const x=new w;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const y=m(x)/2/Math.PI+.5,E=d(x)/Math.PI+.5;o.push(y,1-E)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const _=o[x+0],y=o[x+2],E=o[x+4],T=Math.max(_,y,E),b=Math.min(_,y,E);T>.9&&b<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function p(x,_){const y=x*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const x=new w,_=new w,y=new w,E=new w,T=new J,b=new J,L=new J;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),E.copy(x).add(_).add(y).divideScalar(3);const C=m(E);v(T,M+0,x,C),v(b,M+2,_,C),v(L,M+4,y,C)}}function v(x,_,y,E){E<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.vertices,t.indices,t.radius,t.details)}}const $o=new w,Ko=new w,Yc=new w,Jo=new de;class Gy extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ur*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:d}=Jo;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),Jo.getNormal(Yc),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=f[x],E=f[_],T=Jo[u[x]],b=Jo[u[_]],L=`${y}_${E}`,S=`${E}_${y}`;S in h&&h[S]?(Yc.dot(h[S].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(b.x,b.y,b.z)),h[S]=null):L in h||(h[L]={index0:l[x],index1:l[_],normal:Yc.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];$o.fromBufferAttribute(a,v),Ko.fromBufferAttribute(a,m),p.push($o.x,$o.y,$o.z),p.push(Ko.x,Ko.y,Ko.z)}this.setAttribute("position",new se(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class _r extends lo{constructor(t){super(t),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new lo().fromJSON(s))}return this}}const Vy={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=tp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,p;if(i&&(r=jy(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)f=n[g],h=n[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return uo(r,o,e,a,c,p,0),o}};function tp(n,t,e,i,s){let r,o;if(s===rM(n,t,e,i)>0)for(r=t;r<e;r+=i)o=rf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=rf(r,n[r],n[r+1],o);return o&&Ja(o,o.next)&&(fo(o),o=o.next),o}function Ms(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ja(e,e.next)||Me(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function uo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Qy(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Xy(n,i,s,r):Wy(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),fo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Yy(Ms(n),t,e),uo(n,t,e,i,s,r,2)):o===2&&qy(n,t,e,i,s,r):uo(Ms(n),t,e,i,s,r,1);break}}}function Wy(n){const t=n.prev,e=n,i=n.next;if(Me(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&rr(s,a,r,c,o,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xy(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,p=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,v=a>c?a>l?a:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,d=Dl(p,g,t,e,i),x=Dl(v,m,t,e,i);let _=n.prevZ,y=n.nextZ;for(;_&&_.z>=d&&y&&y.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&rr(a,u,c,f,l,h,_.x,_.y)&&Me(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,u,c,f,l,h,y.x,y.y)&&Me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&rr(a,u,c,f,l,h,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,u,c,f,l,h,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Yy(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Ja(s,r)&&ep(s,i,i.next,r)&&ho(s,r)&&ho(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),fo(i),fo(i.next),i=n=r),i=i.next}while(i!==n);return Ms(i)}function qy(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nM(o,a)){let c=np(o,a);o=Ms(o,o.next),c=Ms(c,c.next),uo(o,t,e,i,s,r,0),uo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function jy(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=tp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(eM(l));for(s.sort(Zy),r=0;r<s.length;r++)e=$y(s[r],e);return e}function Zy(n,t){return n.x-t.x}function $y(n,t){const e=Ky(n,t);if(!e)return t;const i=np(e,n);return Ms(i,i.next),Ms(e,e.next)}function Ky(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&rr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),ho(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&Jy(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function Jy(n,t){return Me(n.prev,n,t.prev)<0&&Me(t.next,n,n.next)<0}function Qy(n,t,e,i){let s=n;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tM(s)}function tM(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Dl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function eM(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function nM(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!iM(n,t)&&(ho(n,t)&&ho(t,n)&&sM(n,t)&&(Me(n.prev,n,t.prev)||Me(n,t.prev,t))||Ja(n,t)&&Me(n.prev,n,n.next)>0&&Me(t.prev,t,t.next)>0)}function Me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ja(n,t){return n.x===t.x&&n.y===t.y}function ep(n,t,e,i){const s=ta(Me(n,t,e)),r=ta(Me(n,t,i)),o=ta(Me(e,i,n)),a=ta(Me(e,i,t));return!!(s!==r&&o!==a||s===0&&Qo(n,e,t)||r===0&&Qo(n,i,t)||o===0&&Qo(e,n,i)||a===0&&Qo(e,t,i))}function Qo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ta(n){return n>0?1:n<0?-1:0}function iM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ep(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ho(n,t){return Me(n.prev,n,n.next)<0?Me(n,t,n.next)>=0&&Me(n,n.prev,t)>=0:Me(n,t,n.prev)<0||Me(n,n.next,t)<0}function sM(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function np(n,t){const e=new Il(n.i,n.x,n.y),i=new Il(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function rf(n,t,e,i){const s=new Il(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Il(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rM(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Jr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Jr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];of(t),af(i,t);let o=t.length;e.forEach(of);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,af(i,e[c]);const a=Vy.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function of(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function af(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Qa extends De{constructor(t=new _r([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:oM;let _,y=!1,E,T,b,L;d&&(_=d.getSpacedPoints(u),y=!0,h=!1,E=d.computeFrenetFrames(u,!1),T=new w,b=new w,L=new w),h||(m=0,p=0,g=0,v=0);const S=a.extractPoints(l);let M=S.shape;const C=S.holes;if(!Jr.isClockWise(M)){M=M.reverse();for(let F=0,ut=C.length;F<ut;F++){const $=C[F];Jr.isClockWise($)&&(C[F]=$.reverse())}}const O=Jr.triangulateShape(M,C),D=M;for(let F=0,ut=C.length;F<ut;F++){const $=C[F];M=M.concat($)}function U(F,ut,$){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(ut,$)}const z=M.length,X=O.length;function Z(F,ut,$){let at,K,At;const yt=F.x-ut.x,R=F.y-ut.y,A=$.x-F.x,H=$.y-F.y,ot=yt*yt+R*R,it=yt*H-R*A;if(Math.abs(it)>Number.EPSILON){const nt=Math.sqrt(ot),Tt=Math.sqrt(A*A+H*H),xt=ut.x-R/nt,Mt=ut.y+yt/nt,Lt=$.x-H/Tt,Bt=$.y+A/Tt,st=((Lt-xt)*H-(Bt-Mt)*A)/(yt*H-R*A);at=xt+yt*st-F.x,K=Mt+R*st-F.y;const Yt=at*at+K*K;if(Yt<=2)return new J(at,K);At=Math.sqrt(Yt/2)}else{let nt=!1;yt>Number.EPSILON?A>Number.EPSILON&&(nt=!0):yt<-Number.EPSILON?A<-Number.EPSILON&&(nt=!0):Math.sign(R)===Math.sign(H)&&(nt=!0),nt?(at=-R,K=yt,At=Math.sqrt(ot)):(at=yt,K=R,At=Math.sqrt(ot/2))}return new J(at/At,K/At)}const G=[];for(let F=0,ut=D.length,$=ut-1,at=F+1;F<ut;F++,$++,at++)$===ut&&($=0),at===ut&&(at=0),G[F]=Z(D[F],D[$],D[at]);const Q=[];let tt,lt=G.concat();for(let F=0,ut=C.length;F<ut;F++){const $=C[F];tt=[];for(let at=0,K=$.length,At=K-1,yt=at+1;at<K;at++,At++,yt++)At===K&&(At=0),yt===K&&(yt=0),tt[at]=Z($[at],$[At],$[yt]);Q.push(tt),lt=lt.concat(tt)}for(let F=0;F<m;F++){const ut=F/m,$=p*Math.cos(ut*Math.PI/2),at=g*Math.sin(ut*Math.PI/2)+v;for(let K=0,At=D.length;K<At;K++){const yt=U(D[K],G[K],at);Et(yt.x,yt.y,-$)}for(let K=0,At=C.length;K<At;K++){const yt=C[K];tt=Q[K];for(let R=0,A=yt.length;R<A;R++){const H=U(yt[R],tt[R],at);Et(H.x,H.y,-$)}}}const j=g+v;for(let F=0;F<z;F++){const ut=h?U(M[F],lt[F],j):M[F];y?(b.copy(E.normals[0]).multiplyScalar(ut.x),T.copy(E.binormals[0]).multiplyScalar(ut.y),L.copy(_[0]).add(b).add(T),Et(L.x,L.y,L.z)):Et(ut.x,ut.y,0)}for(let F=1;F<=u;F++)for(let ut=0;ut<z;ut++){const $=h?U(M[ut],lt[ut],j):M[ut];y?(b.copy(E.normals[F]).multiplyScalar($.x),T.copy(E.binormals[F]).multiplyScalar($.y),L.copy(_[F]).add(b).add(T),Et(L.x,L.y,L.z)):Et($.x,$.y,f/u*F)}for(let F=m-1;F>=0;F--){const ut=F/m,$=p*Math.cos(ut*Math.PI/2),at=g*Math.sin(ut*Math.PI/2)+v;for(let K=0,At=D.length;K<At;K++){const yt=U(D[K],G[K],at);Et(yt.x,yt.y,f+$)}for(let K=0,At=C.length;K<At;K++){const yt=C[K];tt=Q[K];for(let R=0,A=yt.length;R<A;R++){const H=U(yt[R],tt[R],at);y?Et(H.x,H.y+_[u-1].y,_[u-1].x+$):Et(H.x,H.y,f+$)}}}et(),vt();function et(){const F=s.length/3;if(h){let ut=0,$=z*ut;for(let at=0;at<X;at++){const K=O[at];It(K[2]+$,K[1]+$,K[0]+$)}ut=u+m*2,$=z*ut;for(let at=0;at<X;at++){const K=O[at];It(K[0]+$,K[1]+$,K[2]+$)}}else{for(let ut=0;ut<X;ut++){const $=O[ut];It($[2],$[1],$[0])}for(let ut=0;ut<X;ut++){const $=O[ut];It($[0]+z*u,$[1]+z*u,$[2]+z*u)}}i.addGroup(F,s.length/3-F,0)}function vt(){const F=s.length/3;let ut=0;bt(D,ut),ut+=D.length;for(let $=0,at=C.length;$<at;$++){const K=C[$];bt(K,ut),ut+=K.length}i.addGroup(F,s.length/3-F,1)}function bt(F,ut){let $=F.length;for(;--$>=0;){const at=$;let K=$-1;K<0&&(K=F.length-1);for(let At=0,yt=u+m*2;At<yt;At++){const R=z*At,A=z*(At+1),H=ut+at+R,ot=ut+K+R,it=ut+K+A,nt=ut+at+A;Nt(H,ot,it,nt)}}}function Et(F,ut,$){c.push(F),c.push(ut),c.push($)}function It(F,ut,$){wt(F),wt(ut),wt($);const at=s.length/3,K=x.generateTopUV(i,s,at-3,at-2,at-1);Ft(K[0]),Ft(K[1]),Ft(K[2])}function Nt(F,ut,$,at){wt(F),wt(ut),wt(at),wt(ut),wt($),wt(at);const K=s.length/3,At=x.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);Ft(At[0]),Ft(At[1]),Ft(At[3]),Ft(At[1]),Ft(At[2]),Ft(At[3])}function wt(F){s.push(c[F*3+0]),s.push(c[F*3+1]),s.push(c[F*3+2])}function Ft(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return aM(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ll[s.type]().fromJSON(s)),new Qa(i,t.options)}}const oM={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new J(r,o),new J(a,c),new J(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-f),new J(h,1-g),new J(v,1-d)]:[new J(a,1-c),new J(u,1-f),new J(p,1-g),new J(m,1-d)]}};function aM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class or extends cu{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class br extends De{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new w,h=new w,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const x=[],_=d/i;let y=0;d===0&&o===0?y=.5/e:d===i&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const T=E/e;f.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),f.y=t*Math.cos(o+_*a),f.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(T+y,1-_),x.push(l++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<e;x++){const _=u[d][x+1],y=u[d][x],E=u[d+1][x],T=u[d+1][x+1];(d!==0||o>0)&&p.push(_,y,T),(d!==i-1||c<Math.PI)&&p.push(y,E,T)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Di extends De{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new w,f=new w,h=new w;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(v,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xo extends Sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ip extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class cM extends ip{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qc=new Kt,cf=new w,lf=new w;class lM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eu,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lf),e.updateMatrixWorld(),qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uM extends lM{constructor(){super(new Gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hM extends ip{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new uM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tc{constructor(t,e,i=0,s=1/0){this.ray=new Mr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ul(t,this,i,e),i.sort(uf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ul(t[s],this,i,e);return i.sort(uf),i}}function uf(n,t){return n.distance-t.distance}function Ul(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Ul(s[r],t,e,!0)}}class hf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ff=new J;class fM{constructor(t=new J(1/0,1/0),e=new J(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ff.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ff).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const df=new w,ea=new w;class wn{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){df.subVectors(t,this.start),ea.subVectors(this.end,this.start);const i=ea.dot(ea);let r=ea.dot(df)/i;return e&&(r=Ce(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class sp extends su{constructor(t=10,e=10,i=4473924,s=8947848){i=new $t(i),s=new $t(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,p=0,g=-a;h<=e;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const v=h===r?i:s;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const u=new De;u.setAttribute("position",new se(c,3)),u.setAttribute("color",new se(l,3));const f=new _o({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const na=new le;class dM extends su{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new De;r.setIndex(new qe(i,1)),r.setAttribute("position",new qe(s,3)),super(r,new _o({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&na.setFromObject(this.object),na.isEmpty())return;const e=na.min,i=na.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);const pf={type:"change"},jc={type:"start"},mf={type:"end"},ia=new Mr,gf=new rn,pM=Math.cos(70*bs.DEG2RAD);class mM extends Ss{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",nt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",nt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pf),i.update(),r=s.NONE},this.update=function(){const N=new w,rt=new Ne().setFromUnitVectors(t.up,new w(0,1,0)),mt=rt.clone().invert(),ct=new w,Rt=new Ne,qt=new w,Jt=2*Math.PI;return function(pt=null){const B=i.object.position;N.copy(B).sub(i.target),N.applyQuaternion(rt),a.setFromVector3(N),i.autoRotate&&r===s.NONE&&C(S(pt)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ht=i.minAzimuthAngle,ft=i.maxAzimuthAngle;isFinite(ht)&&isFinite(ft)&&(ht<-Math.PI?ht+=Jt:ht>Math.PI&&(ht-=Jt),ft<-Math.PI?ft+=Jt:ft>Math.PI&&(ft-=Jt),ht<=ft?a.theta=Math.max(ht,Math.min(ft,a.theta)):a.theta=a.theta>(ht+ft)/2?Math.max(ht,a.theta):Math.min(ft,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=G(a.radius):a.radius=G(a.radius*l),N.setFromSpherical(a),N.applyQuaternion(mt),B.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Dt=!1;if(i.zoomToCursor&&T){let Pt=null;if(i.object.isPerspectiveCamera){const ee=N.length();Pt=G(ee*l);const ne=ee-Pt;i.object.position.addScaledVector(y,ne),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ee=new w(E.x,E.y,0);ee.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Dt=!0;const ne=new w(E.x,E.y,0);ne.unproject(i.object),i.object.position.sub(ne).add(ee),i.object.updateMatrixWorld(),Pt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Pt).add(i.object.position):(ia.origin.copy(i.object.position),ia.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ia.direction))<pM?t.lookAt(i.target):(gf.setFromNormalAndCoplanarPoint(i.object.up,i.target),ia.intersectPlane(gf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Dt=!0);return l=1,T=!1,Dt||ct.distanceToSquared(i.object.position)>o||8*(1-Rt.dot(i.object.quaternion))>o||qt.distanceToSquared(i.target)>0?(i.dispatchEvent(pf),ct.copy(i.object.position),Rt.copy(i.object.quaternion),qt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Mt),i.domElement.removeEventListener("pointerdown",yt),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",it),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",A),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",nt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new hf,c=new hf;let l=1;const u=new w,f=new J,h=new J,p=new J,g=new J,v=new J,m=new J,d=new J,x=new J,_=new J,y=new w,E=new J;let T=!1;const b=[],L={};function S(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function M(N){const rt=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*rt)}function C(N){c.theta-=N}function I(N){c.phi-=N}const O=function(){const N=new w;return function(mt,ct){N.setFromMatrixColumn(ct,0),N.multiplyScalar(-mt),u.add(N)}}(),D=function(){const N=new w;return function(mt,ct){i.screenSpacePanning===!0?N.setFromMatrixColumn(ct,1):(N.setFromMatrixColumn(ct,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(mt),u.add(N)}}(),U=function(){const N=new w;return function(mt,ct){const Rt=i.domElement;if(i.object.isPerspectiveCamera){const qt=i.object.position;N.copy(qt).sub(i.target);let Jt=N.length();Jt*=Math.tan(i.object.fov/2*Math.PI/180),O(2*mt*Jt/Rt.clientHeight,i.object.matrix),D(2*ct*Jt/Rt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(mt*(i.object.right-i.object.left)/i.object.zoom/Rt.clientWidth,i.object.matrix),D(ct*(i.object.top-i.object.bottom)/i.object.zoom/Rt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(N,rt){if(!i.zoomToCursor)return;T=!0;const mt=i.domElement.getBoundingClientRect(),ct=N-mt.left,Rt=rt-mt.top,qt=mt.width,Jt=mt.height;E.x=ct/qt*2-1,E.y=-(Rt/Jt)*2+1,y.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function G(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function Q(N){f.set(N.clientX,N.clientY)}function tt(N){Z(N.clientX,N.clientX),d.set(N.clientX,N.clientY)}function lt(N){g.set(N.clientX,N.clientY)}function j(N){h.set(N.clientX,N.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const rt=i.domElement;C(2*Math.PI*p.x/rt.clientHeight),I(2*Math.PI*p.y/rt.clientHeight),f.copy(h),i.update()}function et(N){x.set(N.clientX,N.clientY),_.subVectors(x,d),_.y>0?z(M(_.y)):_.y<0&&X(M(_.y)),d.copy(x),i.update()}function vt(N){v.set(N.clientX,N.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),U(m.x,m.y),g.copy(v),i.update()}function bt(N){Z(N.clientX,N.clientY),N.deltaY<0?X(M(N.deltaY)):N.deltaY>0&&z(M(N.deltaY)),i.update()}function Et(N){let rt=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),rt=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),rt=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),rt=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),rt=!0;break}rt&&(N.preventDefault(),i.update())}function It(N){if(b.length===1)f.set(N.pageX,N.pageY);else{const rt=Yt(N),mt=.5*(N.pageX+rt.x),ct=.5*(N.pageY+rt.y);f.set(mt,ct)}}function Nt(N){if(b.length===1)g.set(N.pageX,N.pageY);else{const rt=Yt(N),mt=.5*(N.pageX+rt.x),ct=.5*(N.pageY+rt.y);g.set(mt,ct)}}function wt(N){const rt=Yt(N),mt=N.pageX-rt.x,ct=N.pageY-rt.y,Rt=Math.sqrt(mt*mt+ct*ct);d.set(0,Rt)}function Ft(N){i.enableZoom&&wt(N),i.enablePan&&Nt(N)}function F(N){i.enableZoom&&wt(N),i.enableRotate&&It(N)}function ut(N){if(b.length==1)h.set(N.pageX,N.pageY);else{const mt=Yt(N),ct=.5*(N.pageX+mt.x),Rt=.5*(N.pageY+mt.y);h.set(ct,Rt)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const rt=i.domElement;C(2*Math.PI*p.x/rt.clientHeight),I(2*Math.PI*p.y/rt.clientHeight),f.copy(h)}function $(N){if(b.length===1)v.set(N.pageX,N.pageY);else{const rt=Yt(N),mt=.5*(N.pageX+rt.x),ct=.5*(N.pageY+rt.y);v.set(mt,ct)}m.subVectors(v,g).multiplyScalar(i.panSpeed),U(m.x,m.y),g.copy(v)}function at(N){const rt=Yt(N),mt=N.pageX-rt.x,ct=N.pageY-rt.y,Rt=Math.sqrt(mt*mt+ct*ct);x.set(0,Rt),_.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),z(_.y),d.copy(x);const qt=(N.pageX+rt.x)*.5,Jt=(N.pageY+rt.y)*.5;Z(qt,Jt)}function K(N){i.enableZoom&&at(N),i.enablePan&&$(N)}function At(N){i.enableZoom&&at(N),i.enableRotate&&ut(N)}function yt(N){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",A)),Lt(N),N.pointerType==="touch"?Tt(N):H(N))}function R(N){i.enabled!==!1&&(N.pointerType==="touch"?xt(N):ot(N))}function A(N){Bt(N),b.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",A)),i.dispatchEvent(mf),r=s.NONE}function H(N){let rt;switch(N.button){case 0:rt=i.mouseButtons.LEFT;break;case 1:rt=i.mouseButtons.MIDDLE;break;case 2:rt=i.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case Ci.DOLLY:if(i.enableZoom===!1)return;tt(N),r=s.DOLLY;break;case Ci.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;lt(N),r=s.PAN}else{if(i.enableRotate===!1)return;Q(N),r=s.ROTATE}break;case Ci.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;Q(N),r=s.ROTATE}else{if(i.enablePan===!1)return;lt(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(jc)}function ot(N){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;j(N);break;case s.DOLLY:if(i.enableZoom===!1)return;et(N);break;case s.PAN:if(i.enablePan===!1)return;vt(N);break}}function it(N){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(N.preventDefault(),i.dispatchEvent(jc),bt(N),i.dispatchEvent(mf))}function nt(N){i.enabled===!1||i.enablePan===!1||Et(N)}function Tt(N){switch(st(N),b.length){case 1:switch(i.touches.ONE){case Rs.ROTATE:if(i.enableRotate===!1)return;It(N),r=s.TOUCH_ROTATE;break;case Rs.PAN:if(i.enablePan===!1)return;Nt(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ft(N),r=s.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(jc)}function xt(N){switch(st(N),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;ut(N),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;$(N),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;K(N),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(N),i.update();break;default:r=s.NONE}}function Mt(N){i.enabled!==!1&&N.preventDefault()}function Lt(N){b.push(N.pointerId)}function Bt(N){delete L[N.pointerId];for(let rt=0;rt<b.length;rt++)if(b[rt]==N.pointerId){b.splice(rt,1);return}}function st(N){let rt=L[N.pointerId];rt===void 0&&(rt=new J,L[N.pointerId]=rt),rt.set(N.pageX,N.pageY)}function Yt(N){const rt=N.pointerId===b[0]?b[1]:b[0];return L[rt]}i.domElement.addEventListener("contextmenu",Mt),i.domElement.addEventListener("pointerdown",yt),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",it,{passive:!1}),this.update()}}const ns=new tc,Ye=new w,bi=new w,ge=new Ne,_f={X:new w(1,0,0),Y:new w(0,1,0),Z:new w(0,0,1)},Zc={type:"change"},xf={type:"mouseDown"},vf={type:"mouseUp",mode:null},yf={type:"objectChange"};class gM extends Ae{constructor(t,e){super(),e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const i=new SM;this._gizmo=i,this.add(i);const s=new EM;this._plane=s,this.add(s);const r=this;function o(x,_){let y=_;Object.defineProperty(r,x,{get:function(){return y!==void 0?y:_},set:function(E){y!==E&&(y=E,s[x]=E,i[x]=E,r.dispatchEvent({type:x+"-changed",value:E}),r.dispatchEvent(Zc))}}),r[x]=_,s[x]=_,i[x]=_}o("camera",t),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new w,c=new w,l=new Ne,u=new Ne,f=new w,h=new Ne,p=new w,g=new w,v=new w,m=0,d=new w;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",u),o("cameraPosition",f),o("cameraQuaternion",h),o("pointStart",p),o("pointEnd",g),o("rotationAxis",v),o("rotationAngle",m),o("eye",d),this._offset=new w,this._startNorm=new w,this._endNorm=new w,this._cameraScale=new w,this._parentPosition=new w,this._parentQuaternion=new Ne,this._parentQuaternionInv=new Ne,this._parentScale=new w,this._worldScaleStart=new w,this._worldQuaternionInv=new Ne,this._worldScale=new w,this._positionStart=new w,this._quaternionStart=new Ne,this._scaleStart=new w,this._getPointer=_M.bind(this),this._onPointerDown=vM.bind(this),this._onPointerHover=xM.bind(this),this._onPointerMove=yM.bind(this),this._onPointerUp=MM.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;ns.setFromCamera(t,this.camera);const e=$c(this._gizmo.picker[this.mode],ns);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t.button!==0)&&this.axis!==null){ns.setFromCamera(t,this.camera);const e=$c(this._plane,ns,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,xf.mode=this.mode,this.dispatchEvent(xf)}}pointerMove(t){const e=this.axis,i=this.mode,s=this.object;let r=this.space;if(i==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t.button!==-1)return;ns.setFromCamera(t,this.camera);const o=$c(this._plane,ns,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(ge.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Ye.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Ye.setFromMatrixPosition(s.parent.matrixWorld))));else if(i==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),bi.set(a,a,a)}else Ye.copy(this.pointStart),bi.copy(this.pointEnd),Ye.applyQuaternion(this._worldQuaternionInv),bi.applyQuaternion(this._worldQuaternionInv),bi.divide(Ye),e.search("X")===-1&&(bi.x=1),e.search("Y")===-1&&(bi.y=1),e.search("Z")===-1&&(bi.z=1);s.scale.copy(this._scaleStart).multiply(bi),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Ye.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ye.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(_f[e]),Ye.copy(_f[e]),r==="local"&&Ye.applyQuaternion(this.worldQuaternion),Ye.cross(this.eye),Ye.length()===0?c=!0:this.rotationAngle=this._offset.dot(Ye.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(ge.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(ge.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Zc),this.dispatchEvent(yf)}}pointerUp(t){t.button===0&&(this.dragging&&this.axis!==null&&(vf.mode=this.mode,this.dispatchEvent(vf)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Zc),this.dispatchEvent(yf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ns}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function _M(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const t=this.domElement.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width*2-1,y:-(n.clientY-t.top)/t.height*2+1,button:n.button}}}function xM(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function vM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function yM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function MM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function $c(n,t,e){const i=t.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||e)return i[s];return!1}const sa=new Ts,ce=new w(0,1,0),Mf=new w(0,0,0),Sf=new Kt,ra=new Ne,Pa=new Ne,Hn=new w,Ef=new Kt,Wr=new w(1,0,0),as=new w(0,1,0),Xr=new w(0,0,1),oa=new w,Dr=new w,Ir=new w;class SM extends Ae{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new ws({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new _o({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const f=t.clone();f.opacity=.25;const h=t.clone();h.color.setHex(16776960),h.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const v=new Ee(0,.04,.1,12);v.translate(0,.05,0);const m=new fe(.08,.08,.08);m.translate(0,.04,0);const d=new De;d.setAttribute("position",new se([0,0,0,1,0,0],3));const x=new Ee(.0075,.0075,.5,3);x.translate(0,.25,0);function _(U,z){const X=new Di(U,.0075,3,64,z*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function y(){const U=new De;return U.setAttribute("position",new se([0,0,0,1,1,1],3)),U}const E={X:[[new _t(v,r),[.5,0,0],[0,0,-Math.PI/2]],[new _t(v,r),[-.5,0,0],[0,0,Math.PI/2]],[new _t(x,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new _t(v,o),[0,.5,0]],[new _t(v,o),[0,-.5,0],[Math.PI,0,0]],[new _t(x,o)]],Z:[[new _t(v,a),[0,0,.5],[Math.PI/2,0,0]],[new _t(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new _t(x,a),null,[Math.PI/2,0,0]]],XYZ:[[new _t(new or(.1,0),f.clone()),[0,0,0]]],XY:[[new _t(new fe(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new _t(new fe(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new fe(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new _t(new Ee(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new Ee(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new Ee(.2,0,.6,4),i),[0,.3,0]],[new _t(new Ee(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new Ee(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _t(new Ee(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new _t(new or(.2,0),i)]],XY:[[new _t(new fe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _t(new fe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new fe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},b={START:[[new _t(new or(.01,2),s),null,null,null,"helper"]],END:[[new _t(new or(.01,2),s),null,null,null,"helper"]],DELTA:[[new oi(y(),s),null,null,null,"helper"]],X:[[new oi(d,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new oi(d,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new oi(d,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new _t(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new _t(_(.5,.5),r)]],Y:[[new _t(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new _t(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new _t(_(.75,1),h),null,[0,Math.PI/2,0]]]},S={AXIS:[[new oi(d,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new _t(new br(.25,10,8),i)]],X:[[new _t(new Di(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new _t(new Di(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new _t(new Di(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new _t(new Di(.75,.1,2,24),i)]]},C={X:[[new _t(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new _t(x,r),[0,0,0],[0,0,-Math.PI/2]],[new _t(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new _t(m,o),[0,.5,0]],[new _t(x,o)],[new _t(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new _t(m,a),[0,0,.5],[Math.PI/2,0,0]],[new _t(x,a),[0,0,0],[Math.PI/2,0,0]],[new _t(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new _t(new fe(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _t(new fe(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new fe(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new fe(.1,.1,.1),f.clone())]]},I={X:[[new _t(new Ee(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new Ee(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new Ee(.2,0,.6,4),i),[0,.3,0]],[new _t(new Ee(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new Ee(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _t(new Ee(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new _t(new fe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _t(new fe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new fe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new fe(.2,.2,.2),i),[0,0,0]]]},O={X:[[new oi(d,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new oi(d,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new oi(d,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function D(U){const z=new Ae;for(const X in U)for(let Z=U[X].length;Z--;){const G=U[X][Z][0].clone(),Q=U[X][Z][1],tt=U[X][Z][2],lt=U[X][Z][3],j=U[X][Z][4];G.name=X,G.tag=j,Q&&G.position.set(Q[0],Q[1],Q[2]),tt&&G.rotation.set(tt[0],tt[1],tt[2]),lt&&G.scale.set(lt[0],lt[1],lt[2]),G.updateMatrix();const et=G.geometry.clone();et.applyMatrix4(G.matrix),G.geometry=et,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),z.add(G)}return z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=D(E)),this.add(this.gizmo.rotate=D(L)),this.add(this.gizmo.scale=D(C)),this.add(this.picker.translate=D(T)),this.add(this.picker.rotate=D(M)),this.add(this.picker.scale=D(I)),this.add(this.helper.translate=D(b)),this.add(this.helper.rotate=D(S)),this.add(this.helper.scale=D(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Pa;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ge.setFromEuler(sa.set(0,0,0)),o.quaternion.copy(i).multiply(ge),Math.abs(ce.copy(Wr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ge.setFromEuler(sa.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(ge),Math.abs(ce.copy(as).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ge.setFromEuler(sa.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(ge),Math.abs(ce.copy(Xr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ge.setFromEuler(sa.set(0,Math.PI/2,0)),ce.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Sf.lookAt(Mf,ce,as)),o.quaternion.multiply(ge),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ye.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ye.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ye),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ce.copy(Wr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ce.copy(as).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ce.copy(Xr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ce.copy(Xr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ce.copy(Wr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ce.copy(as).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ra.copy(i),ce.copy(this.eye).applyQuaternion(ge.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Sf.lookAt(this.eye,Mf,as)),o.name==="X"&&(ge.setFromAxisAngle(Wr,Math.atan2(-ce.y,ce.z)),ge.multiplyQuaternions(ra,ge),o.quaternion.copy(ge)),o.name==="Y"&&(ge.setFromAxisAngle(as,Math.atan2(ce.x,ce.z)),ge.multiplyQuaternions(ra,ge),o.quaternion.copy(ge)),o.name==="Z"&&(ge.setFromAxisAngle(Xr,Math.atan2(ce.y,ce.x)),ge.multiplyQuaternions(ra,ge),o.quaternion.copy(ge))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class EM extends _t{constructor(){super(new go(1e5,1e5,2,2),new ws({visible:!1,wireframe:!0,side:tn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),oa.copy(Wr).applyQuaternion(e==="local"?this.worldQuaternion:Pa),Dr.copy(as).applyQuaternion(e==="local"?this.worldQuaternion:Pa),Ir.copy(Xr).applyQuaternion(e==="local"?this.worldQuaternion:Pa),ce.copy(Dr),this.mode){case"translate":case"scale":switch(this.axis){case"X":ce.copy(this.eye).cross(oa),Hn.copy(oa).cross(ce);break;case"Y":ce.copy(this.eye).cross(Dr),Hn.copy(Dr).cross(ce);break;case"Z":ce.copy(this.eye).cross(Ir),Hn.copy(Ir).cross(ce);break;case"XY":Hn.copy(Ir);break;case"YZ":Hn.copy(oa);break;case"XZ":ce.copy(Ir),Hn.copy(Dr);break;case"XYZ":case"E":Hn.set(0,0,0);break}break;case"rotate":default:Hn.set(0,0,0)}Hn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ef.lookAt(Ye.set(0,0,0),Hn,ce),this.quaternion.setFromRotationMatrix(Ef)),super.updateMatrixWorld(t)}}class bM{parse(t,e={}){e=Object.assign({binary:!1},e);const i=e.binary,s=[];let r=0;t.traverse(function(d){if(d.isMesh){const x=d.geometry,_=x.index,y=x.getAttribute("position");r+=_!==null?_.count/3:y.count/3,s.push({object3d:d,geometry:x})}});let o,a=80;if(i===!0){const d=r*2+r*3*4*4+80+4,x=new ArrayBuffer(d);o=new DataView(x),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;const c=new w,l=new w,u=new w,f=new w,h=new w,p=new w;for(let d=0,x=s.length;d<x;d++){const _=s[d].object3d,y=s[d].geometry,E=y.index,T=y.getAttribute("position");if(E!==null)for(let b=0;b<E.count;b+=3){const L=E.getX(b+0),S=E.getX(b+1),M=E.getX(b+2);g(L,S,M,T,_)}else for(let b=0;b<T.count;b+=3){const L=b+0,S=b+1,M=b+2;g(L,S,M,T,_)}}return i===!1&&(o+=`endsolid exported
`),o;function g(d,x,_,y,E){c.fromBufferAttribute(y,d),l.fromBufferAttribute(y,x),u.fromBufferAttribute(y,_),E.isSkinnedMesh===!0&&(E.applyBoneTransform(d,c),E.applyBoneTransform(x,l),E.applyBoneTransform(_,u)),c.applyMatrix4(E.matrixWorld),l.applyMatrix4(E.matrixWorld),u.applyMatrix4(E.matrixWorld),v(c,l,u),m(c),m(l),m(u),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function v(d,x,_){f.subVectors(_,x),h.subVectors(d,x),f.cross(h).normalize(),p.copy(f).normalize(),i===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):(o+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,o+=`		outer loop
`)}function m(d){i===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):o+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}const Ur=new w;function _n(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ur.copy(t),Ur[i]=0,Ur.normalize();const l=.5*o/(o+a),u=1-Ur.angleTo(n)/c;return Math.sign(Ur[e])===1?u*l:a/(o+a)+l+l*(1-u)}class TM extends fe{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new w,c=new w,l=new w(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,p=u.length/6,g=new w,v=.5/s;for(let m=0,d=0;m<u.length;m+=3,d+=2)switch(a.fromArray(u,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),u[m+0]=l.x*Math.sign(a.x)+c.x*r,u[m+1]=l.y*Math.sign(a.y)+c.y*r,u[m+2]=l.z*Math.sign(a.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),h[d+0]=_n(g,c,"z","y",r,i),h[d+1]=1-_n(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),h[d+0]=1-_n(g,c,"z","y",r,i),h[d+1]=1-_n(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),h[d+0]=1-_n(g,c,"x","z",r,t),h[d+1]=_n(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),h[d+0]=1-_n(g,c,"x","z",r,t),h[d+1]=1-_n(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),h[d+0]=1-_n(g,c,"x","y",r,t),h[d+1]=1-_n(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),h[d+0]=_n(g,c,"x","y",r,t),h[d+1]=1-_n(g,c,"y","x",r,e);break}}}const rp=0,wM=1,AM=2,bf=2,Kc=1.25,Tf=1,Qr=6*4+4+4,ec=65535,RM=Math.pow(2,-24),Jc=Symbol("SKIP_GENERATION");function PM(n){return n.index?n.index.count:n.attributes.position.count}function Tr(n){return PM(n)/3}function CM(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function LM(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=CM(e,i);n.setIndex(new qe(s,1));for(let r=0;r<e;r++)s[r]=r}}function op(n){const t=Tr(n),e=n.drawRange,i=e.start/3,s=(e.start+e.count)/3,r=Math.max(0,i),o=Math.min(t,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function ap(n){if(!n.groups||!n.groups.length)return op(n);const t=[],e=new Set,i=n.drawRange,s=i.start/3,r=(i.start+i.count)/3;for(const a of n.groups){const c=a.start/3,l=(a.start+a.count)/3;e.add(Math.max(s,c)),e.add(Math.min(r,l))}const o=Array.from(e.values()).sort((a,c)=>a-c);for(let a=0;a<o.length-1;a++){const c=o[a],l=o[a+1];t.push({offset:Math.floor(c),count:Math.floor(l-c)})}return t}function DM(n){if(n.groups.length===0)return!1;const t=Tr(n),e=ap(n).sort((r,o)=>r.offset-o.offset),i=e[e.length-1];i.count=Math.min(t-i.offset,i.count);let s=0;return e.forEach(({count:r})=>s+=r),t!==s}function Qc(n,t,e,i,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,p=1/0,g=-1/0,v=-1/0,m=-1/0;for(let d=t*6,x=(t+e)*6;d<x;d+=6){const _=n[d+0],y=n[d+1],E=_-y,T=_+y;E<r&&(r=E),T>c&&(c=T),_<f&&(f=_),_>g&&(g=_);const b=n[d+2],L=n[d+3],S=b-L,M=b+L;S<o&&(o=S),M>l&&(l=M),b<h&&(h=b),b>v&&(v=b);const C=n[d+4],I=n[d+5],O=C-I,D=C+I;O<a&&(a=O),D>u&&(u=D),C<p&&(p=C),C>m&&(m=C)}i[0]=r,i[1]=o,i[2]=a,i[3]=c,i[4]=l,i[5]=u,s[0]=f,s[1]=h,s[2]=p,s[3]=g,s[4]=v,s[5]=m}function IM(n,t=null,e=null,i=null){const s=n.attributes.position,r=n.index?n.index.array:null,o=Tr(n),a=s.normalized;let c;t===null?(c=new Float32Array(o*6*4),e=0,i=o):(c=t,e=e||0,i=i||o);const l=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let p=e;p<e+i;p++){const g=p*3,v=p*6;let m=g+0,d=g+1,x=g+2;r&&(m=r[m],d=r[d],x=r[x]),a||(m=m*f+u,d=d*f+u,x=x*f+u);for(let _=0;_<3;_++){let y,E,T;a?(y=s[h[_]](m),E=s[h[_]](d),T=s[h[_]](x)):(y=l[m+_],E=l[d+_],T=l[x+_]);let b=y;E<b&&(b=E),T<b&&(b=T);let L=y;E>L&&(L=E),T>L&&(L=T);const S=(L-b)/2,M=_*2;c[v+M+0]=b+S,c[v+M+1]=S+(Math.abs(b)+S)*RM}}return c}function ve(n,t,e){return e.min.x=t[n],e.min.y=t[n+1],e.min.z=t[n+2],e.max.x=t[n+3],e.max.y=t[n+4],e.max.z=t[n+5],e}function wf(n){let t=-1,e=-1/0;for(let i=0;i<3;i++){const s=n[i+3]-n[i];s>e&&(e=s,t=i)}return t}function Af(n,t){t.set(n)}function Rf(n,t,e){let i,s;for(let r=0;r<3;r++){const o=r+3;i=n[r],s=t[r],e[r]=i<s?i:s,i=n[o],s=t[o],e[o]=i>s?i:s}}function aa(n,t,e){for(let i=0;i<3;i++){const s=t[n+2*i],r=t[n+2*i+1],o=s-r,a=s+r;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function Nr(n){const t=n[3]-n[0],e=n[4]-n[1],i=n[5]-n[2];return 2*(t*e+e*i+i*t)}const ai=32,UM=(n,t)=>n.candidate-t.candidate,Ti=new Array(ai).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ca=new Float32Array(6);function NM(n,t,e,i,s,r){let o=-1,a=0;if(r===rp)o=wf(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===wM)o=wf(n),o!==-1&&(a=FM(e,i,s,o));else if(r===AM){const c=Nr(n);let l=Kc*s;const u=i*6,f=(i+s)*6;for(let h=0;h<3;h++){const p=t[h],m=(t[h+3]-p)/ai;if(s<ai/4){const d=[...Ti];d.length=s;let x=0;for(let y=u;y<f;y+=6,x++){const E=d[x];E.candidate=e[y+2*h],E.count=0;const{bounds:T,leftCacheBounds:b,rightCacheBounds:L}=E;for(let S=0;S<3;S++)L[S]=1/0,L[S+3]=-1/0,b[S]=1/0,b[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0;aa(y,e,T)}d.sort(UM);let _=s;for(let y=0;y<_;y++){const E=d[y];for(;y+1<_&&d[y+1].candidate===E.candidate;)d.splice(y+1,1),_--}for(let y=u;y<f;y+=6){const E=e[y+2*h];for(let T=0;T<_;T++){const b=d[T];E>=b.candidate?aa(y,e,b.rightCacheBounds):(aa(y,e,b.leftCacheBounds),b.count++)}}for(let y=0;y<_;y++){const E=d[y],T=E.count,b=s-E.count,L=E.leftCacheBounds,S=E.rightCacheBounds;let M=0;T!==0&&(M=Nr(L)/c);let C=0;b!==0&&(C=Nr(S)/c);const I=Tf+Kc*(M*T+C*b);I<l&&(o=h,l=I,a=E.candidate)}}else{for(let _=0;_<ai;_++){const y=Ti[_];y.count=0,y.candidate=p+m+_*m;const E=y.bounds;for(let T=0;T<3;T++)E[T]=1/0,E[T+3]=-1/0}for(let _=u;_<f;_+=6){let T=~~((e[_+2*h]-p)/m);T>=ai&&(T=ai-1);const b=Ti[T];b.count++,aa(_,e,b.bounds)}const d=Ti[ai-1];Af(d.bounds,d.rightCacheBounds);for(let _=ai-2;_>=0;_--){const y=Ti[_],E=Ti[_+1];Rf(y.bounds,E.rightCacheBounds,y.rightCacheBounds)}let x=0;for(let _=0;_<ai-1;_++){const y=Ti[_],E=y.count,T=y.bounds,L=Ti[_+1].rightCacheBounds;E!==0&&(x===0?Af(T,ca):Rf(T,ca,ca)),x+=E;let S=0,M=0;x!==0&&(S=Nr(ca)/c);const C=s-x;C!==0&&(M=Nr(L)/c);const I=Tf+Kc*(S*x+M*C);I<l&&(o=h,l=I,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function FM(n,t,e,i){let s=0;for(let r=t,o=t+e;r<o;r++)s+=n[r*6+i*2];return s/e}class tl{constructor(){this.boundingData=new Float32Array(6)}}function OM(n,t,e,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let f=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=f}for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function BM(n,t,e,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=n[o];n[o]=n[a],n[a]=u;for(let f=0;f<6;f++){let h=e[o*6+f];e[o*6+f]=e[a*6+f],e[a*6+f]=h}o++,a--}else return o}}function on(n,t){return t[n+15]===65535}function pn(n,t){return t[n+6]}function Sn(n,t){return t[n+14]}function En(n){return n+8}function bn(n,t){return t[n+6]}function cp(n,t){return t[n+7]}let lp,Yr,Ca,up;const zM=Math.pow(2,32);function Nl(n){return"count"in n?1:1+Nl(n.left)+Nl(n.right)}function kM(n,t,e){return lp=new Float32Array(e),Yr=new Uint32Array(e),Ca=new Uint16Array(e),up=new Uint8Array(e),Fl(n,t)}function Fl(n,t){const e=n/4,i=n/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)lp[e+o]=r[o];if(s)if(t.buffer){const o=t.buffer;up.set(new Uint8Array(o),n);for(let a=n,c=n+o.byteLength;a<c;a+=Qr){const l=a/2;on(l,Ca)||(Yr[a/4+6]+=e)}return n+o.byteLength}else{const o=t.offset,a=t.count;return Yr[e+6]=o,Ca[i+14]=a,Ca[i+15]=ec,n+Qr}else{const o=t.left,a=t.right,c=t.splitAxis;let l;if(l=Fl(n+Qr,o),l/4>zM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Yr[e+6]=l/4,l=Fl(l,a),Yr[e+7]=c,l}}function HM(n,t){const e=(n.index?n.index.count:n.attributes.position.count)/3,i=e>2**16,s=i?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function GM(n,t,e,i,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=s,f=n._indirectBuffer,h=n.geometry,p=h.index?h.index.array:null,g=u?BM:OM,v=Tr(h),m=new Float32Array(6);let d=!1;const x=new tl;return Qc(t,e,i,x.boundingData,m),y(x,e,i,m),x;function _(E){l&&l(E/v)}function y(E,T,b,L=null,S=0){if(!d&&S>=r&&(d=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),b<=a||S>=r)return _(T+b),E.offset=T,E.count=b,E;const M=NM(E.boundingData,L,t,T,b,c);if(M.axis===-1)return _(T+b),E.offset=T,E.count=b,E;const C=g(f,p,t,T,b,M);if(C===T||C===T+b)_(T+b),E.offset=T,E.count=b;else{E.splitAxis=M.axis;const I=new tl,O=T,D=C-T;E.left=I,Qc(t,O,D,I.boundingData,m),y(I,O,D,m,S+1);const U=new tl,z=C,X=b-D;E.right=U,Qc(t,z,X,U.boundingData,m),y(U,z,X,m,S+1)}return E}}function VM(n,t){const e=n.geometry;t.indirect&&(n._indirectBuffer=HM(e,t.useSharedArrayBuffer),DM(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||LM(e,t);const i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=IM(e),r=t.indirect?op(e):ap(e);n._roots=r.map(o=>{const a=GM(n,s,o.offset,o.count,t),c=Nl(a),l=new i(Qr*c);return kM(0,a,l),l})}class di{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}setFromPoints(t,e){let i=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}di.prototype.setFromBox=function(){const n=new w;return function(e,i){const s=i.min,r=i.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){n.x=s.x*c+r.x*(1-c),n.y=s.y*l+r.y*(1-l),n.z=s.z*u+r.z*(1-u);const f=e.dot(n);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const WM=function(){const n=new w,t=new w,e=new w;return function(s,r,o){const a=s.start,c=n,l=r.start,u=t;e.subVectors(a,l),n.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(c),p=u.dot(u),g=e.dot(c),m=c.dot(c)*p-h*h;let d,x;m!==0?d=(f*h-g*p)/m:d=0,x=(f+d*h)/p,o.x=d,o.y=x}}(),lu=function(){const n=new J,t=new w,e=new w;return function(s,r,o,a){WM(s,r,n);let c=n.x,l=n.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;const h=t,p=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=p.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(p);return}}}}(),XM=function(){const n=new w,t=new w,e=new rn,i=new wn;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:f}=o;if(i.start=l,i.end=u,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a||(i.start=l,i.end=f,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a)||(i.start=u,i.end=f,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a))return!0;const v=o.getPlane(e);if(Math.abs(v.distanceToPoint(c))<=a){const d=v.projectPoint(c,t);if(o.containsPoint(d))return!0}return!1}}(),YM=1e-15;function el(n){return Math.abs(n)<YM}class Rn extends de{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new w),this.satBounds=new Array(4).fill().map(()=>new di),this.points=[this.a,this.b,this.c],this.sphere=new mo,this.plane=new rn,this.needsUpdate=!0}intersectsSphere(t){return XM(t,this)}update(){const t=this.a,e=this.b,i=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);const f=r[2],h=o[2];f.subVectors(e,i),h.setFromPoints(f,s);const p=r[3],g=o[3];p.subVectors(i,t),g.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Rn.prototype.closestPointToSegment=function(){const n=new w,t=new w,e=new wn;return function(s,r=null,o=null){const{start:a,end:c}=s,l=this.points;let u,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[p]),lu(e,s,n,t),u=n.distanceToSquared(t),u<f&&(f=u,r&&r.copy(n),o&&o.copy(t))}return this.closestPointToPoint(a,n),u=a.distanceToSquared(n),u<f&&(f=u,r&&r.copy(n),o&&o.copy(a)),this.closestPointToPoint(c,n),u=c.distanceToSquared(n),u<f&&(f=u,r&&r.copy(n),o&&o.copy(c)),Math.sqrt(f)}}();Rn.prototype.intersectsTriangle=function(){const n=new Rn,t=new Array(3),e=new Array(3),i=new di,s=new di,r=new w,o=new w,a=new w,c=new w,l=new w,u=new wn,f=new wn,h=new wn,p=new w;function g(v,m,d){const x=v.points;let _=0,y=-1;for(let E=0;E<3;E++){const{start:T,end:b}=u;T.copy(x[E]),b.copy(x[(E+1)%3]),u.delta(o);const L=el(m.distanceToPoint(T));if(el(m.normal.dot(o))&&L){d.copy(u),_=2;break}const S=m.intersectLine(u,p);if(!S&&L&&p.copy(T),(S||L)&&!el(p.distanceTo(b))){if(_<=1)(_===1?d.start:d.end).copy(p),L&&(y=_);else if(_>=2){(y===1?d.start:d.end).copy(p),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,d=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(n.copy(m),n.update(),m=n);const _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const E=this.satBounds,T=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let S=0;S<4;S++){const M=E[S],C=T[S];if(i.setFromPoints(C,e),M.isSeparated(i))return!1}const b=m.satBounds,L=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let S=0;S<4;S++){const M=b[S],C=L[S];if(i.setFromPoints(C,t),M.isSeparated(i))return!1}for(let S=0;S<4;S++){const M=T[S];for(let C=0;C<4;C++){const I=L[C];if(r.crossVectors(M,I),i.setFromPoints(r,t),s.setFromPoints(r,e),i.isSeparated(s))return!1}}return d&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const E=g(this,y,f);if(E===1&&m.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(E!==2)return!1;const T=g(m,_,h);if(T===1&&this.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(a),h.delta(c),a.dot(c)<0){let O=h.start;h.start=h.end,h.end=O}const b=f.start.dot(a),L=f.end.dot(a),S=h.start.dot(a),M=h.end.dot(a),C=L<S,I=b<M;return b!==M&&S!==L&&C===I?!1:(d&&(l.subVectors(f.start,h.start),l.dot(a)>0?d.start.copy(f.start):d.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(a)<0?d.end.copy(f.end):d.end.copy(h.end)),!0)}}}();Rn.prototype.distanceToPoint=function(){const n=new w;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();Rn.prototype.distanceToTriangle=function(){const n=new w,t=new w,e=["a","b","c"],i=new wn,s=new wn;return function(o,a=null,c=null){const l=a||c?i:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h;const p=e[f],g=o[p];this.closestPointToPoint(g,n),h=g.distanceToSquared(n),h<u&&(u=h,a&&a.copy(n),c&&c.copy(g));const v=this[p];o.closestPointToPoint(v,n),h=v.distanceToSquared(n),h<u&&(u=h,a&&a.copy(v),c&&c.copy(n))}for(let f=0;f<3;f++){const h=e[f],p=e[(f+1)%3];i.set(this[h],this[p]);for(let g=0;g<3;g++){const v=e[g],m=e[(g+1)%3];s.set(o[v],o[m]),lu(i,s,n,t);const d=n.distanceToSquared(t);d<u&&(u=d,a&&a.copy(n),c&&c.copy(t))}}return Math.sqrt(u)}}();class sn{constructor(t,e,i){this.isOrientedBox=!0,this.min=new w,this.max=new w,this.matrix=new Kt,this.invMatrix=new Kt,this.points=new Array(8).fill().map(()=>new w),this.satAxes=new Array(3).fill().map(()=>new w),this.satBounds=new Array(3).fill().map(()=>new di),this.alignedSatBounds=new Array(3).fill().map(()=>new di),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}sn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,i=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*l|2*u|4*f,p=s[h];p.x=l?i.x:e.x,p.y=u?i.y:e.y,p.z=f?i.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){const u=o[l],f=r[l],h=1<<l,p=s[h];u.subVectors(a,p),f.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();sn.prototype.intersectsBox=function(){const n=new di;return function(e){this.needsUpdate&&this.update();const i=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=s.x,a[0].isSeparated(n)||(n.min=i.y,n.max=s.y,a[1].isSeparated(n))||(n.min=i.z,n.max=s.z,a[2].isSeparated(n)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(n.setFromBox(l,e),u.isSeparated(n))return!1}return!0}}();sn.prototype.intersectsTriangle=function(){const n=new Rn,t=new Array(3),e=new di,i=new di,s=new w;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const p=a[h],g=c[h];if(e.setFromPoints(g,t),p.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){const p=l[h],g=u[h];if(e.setFromPoints(g,f),p.isSeparated(e))return!1}for(let h=0;h<3;h++){const p=c[h];for(let g=0;g<4;g++){const v=u[g];if(s.crossVectors(p,v),e.setFromPoints(s,t),i.setFromPoints(s,f),e.isSeparated(i))return!1}}return!0}}();sn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();sn.prototype.distanceToPoint=function(){const n=new w;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();sn.prototype.distanceToBox=function(){const n=["x","y","z"],t=new Array(12).fill().map(()=>new wn),e=new Array(12).fill().map(()=>new wn),i=new w,s=new w;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,i),o.closestPointToPoint(i,s),c&&c.copy(i),l&&l.copy(s)),0;const u=a*a,f=o.min,h=o.max,p=this.points;let g=1/0;for(let m=0;m<8;m++){const d=p[m];s.copy(d).clamp(f,h);const x=d.distanceToSquared(s);if(x<g&&(g=x,c&&c.copy(d),l&&l.copy(s),x<u))return Math.sqrt(x)}let v=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){const _=(m+1)%3,y=(m+2)%3,E=d<<_|x<<y,T=1<<m|d<<_|x<<y,b=p[E],L=p[T];t[v].set(b,L);const M=n[m],C=n[_],I=n[y],O=e[v],D=O.start,U=O.end;D[M]=f[M],D[C]=d?f[C]:h[C],D[I]=x?f[I]:h[C],U[M]=h[M],U[C]=d?f[C]:h[C],U[I]=x?f[I]:h[C],v++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){s.x=m?h.x:f.x,s.y=d?h.y:f.y,s.z=x?h.z:f.z,this.closestPointToPoint(s,i);const _=s.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(i),l&&l.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const d=t[m];for(let x=0;x<12;x++){const _=e[x];lu(d,_,i,s);const y=i.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(i),l&&l.copy(s),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}}();class uu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class qM extends uu{constructor(){super(()=>new Rn)}}const Tn=new qM;class jM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const me=new jM;let Oi,ar;const Xs=[],la=new uu(()=>new le);function ZM(n,t,e,i,s,r){Oi=la.getPrimitive(),ar=la.getPrimitive(),Xs.push(Oi,ar),me.setBuffer(n._roots[t]);const o=Ol(0,n.geometry,e,i,s,r);me.clearBuffer(),la.releasePrimitive(Oi),la.releasePrimitive(ar),Xs.pop(),Xs.pop();const a=Xs.length;return a>0&&(ar=Xs[a-1],Oi=Xs[a-2]),o}function Ol(n,t,e,i,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=me;let u=n*2;if(on(u,c)){const h=pn(n,l),p=Sn(u,c);return ve(n,a,Oi),i(h,p,!1,o,r+n,Oi)}else{let M=function(I){const{uint16Array:O,uint32Array:D}=me;let U=I*2;for(;!on(U,O);)I=En(I),U=I*2;return pn(I,D)},C=function(I){const{uint16Array:O,uint32Array:D}=me;let U=I*2;for(;!on(U,O);)I=bn(I,D),U=I*2;return pn(I,D)+Sn(U,O)};const h=En(n),p=bn(n,l);let g=h,v=p,m,d,x,_;if(s&&(x=Oi,_=ar,ve(g,a,x),ve(v,a,_),m=s(x),d=s(_),d<m)){g=p,v=h;const I=m;m=d,d=I,x=_}x||(x=Oi,ve(g,a,x));const y=on(g*2,c),E=e(x,y,m,o+1,r+g);let T;if(E===bf){const I=M(g),D=C(g)-I;T=i(I,D,!0,o+1,r+g,x)}else T=E&&Ol(g,t,e,i,s,r,o+1);if(T)return!0;_=ar,ve(v,a,_);const b=on(v*2,c),L=e(_,b,d,o+1,r+v);let S;if(L===bf){const I=M(v),D=C(v)-I;S=i(I,D,!0,o+1,r+v,_)}else S=L&&Ol(v,t,e,i,s,r,o+1);return!!S}}const Fr=new w,nl=new w;function $M(n,t,e={},i=0,s=1/0){const r=i*i,o=s*s;let a=1/0,c=null;if(n.shapecast({boundsTraverseOrder:u=>(Fr.copy(t).clamp(u.min,u.max),Fr.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Fr);const h=t.distanceToSquared(Fr);return h<a&&(nl.copy(Fr),a=h,c=f),h<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(nl):e.point=nl.clone(),e.distance=l,e.faceIndex=c,e}const Ys=new w,qs=new w,js=new w,ua=new J,ha=new J,fa=new J,Pf=new w,Cf=new w,Lf=new w,da=new w;function KM(n,t,e,i,s,r){let o;return r===nn?o=n.intersectTriangle(i,e,t,!0,s):o=n.intersectTriangle(t,e,i,r!==tn,s),o===null?null:{distance:n.origin.distanceTo(s),point:s.clone()}}function JM(n,t,e,i,s,r,o,a,c){Ys.fromBufferAttribute(t,r),qs.fromBufferAttribute(t,o),js.fromBufferAttribute(t,a);const l=KM(n,Ys,qs,js,da,c);if(l){i&&(ua.fromBufferAttribute(i,r),ha.fromBufferAttribute(i,o),fa.fromBufferAttribute(i,a),l.uv=de.getInterpolation(da,Ys,qs,js,ua,ha,fa,new J)),s&&(ua.fromBufferAttribute(s,r),ha.fromBufferAttribute(s,o),fa.fromBufferAttribute(s,a),l.uv1=de.getInterpolation(da,Ys,qs,js,ua,ha,fa,new J)),e&&(Pf.fromBufferAttribute(e,r),Cf.fromBufferAttribute(e,o),Lf.fromBufferAttribute(e,a),l.normal=de.getInterpolation(da,Ys,qs,js,Pf,Cf,Lf,new w),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:r,b:o,c:a,normal:new w,materialIndex:0};de.getNormal(Ys,qs,js,u.normal),l.face=u,l.faceIndex=r}return l}function nc(n,t,e,i,s){const r=i*3;let o=r+0,a=r+1,c=r+2;const l=n.index;n.index&&(o=l.getX(o),a=l.getX(a),c=l.getX(c));const{position:u,normal:f,uv:h,uv1:p}=n.attributes,g=JM(e,u,f,h,p,o,a,c,t);return g?(g.faceIndex=i,s&&s.push(g),g):null}function Le(n,t,e,i){const s=n.a,r=n.b,o=n.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=i.getX(a),s.y=i.getY(a),s.z=i.getZ(a),r.x=i.getX(c),r.y=i.getY(c),r.z=i.getZ(c),o.x=i.getX(l),o.y=i.getY(l),o.z=i.getZ(l)}function QM(n,t,e,i,s,r){const{geometry:o,_indirectBuffer:a}=n;for(let c=i,l=i+s;c<l;c++)nc(o,t,e,c,r)}function tS(n,t,e,i,s){const{geometry:r,_indirectBuffer:o}=n;let a=1/0,c=null;for(let l=i,u=i+s;l<u;l++){let f;f=nc(r,t,e,l),f&&f.distance<a&&(c=f,a=f.distance)}return c}function eS(n,t,e,i,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=n,f=t+n;u<f;u++){let h;if(h=u,Le(o,h*3,c,l),o.needsUpdate=!0,i(o,h,s,r))return!0}return!1}function nS(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){const v=h*2;if(a[v+15]===ec){const d=o[h+6],x=a[v+14];let _=1/0,y=1/0,E=1/0,T=-1/0,b=-1/0,L=-1/0;for(let S=3*d,M=3*(d+x);S<M;S++){let C=i[S];const I=s.getX(C),O=s.getY(C),D=s.getZ(C);I<_&&(_=I),I>T&&(T=I),O<y&&(y=O),O>b&&(b=O),D<E&&(E=D),D>L&&(L=D)}return c[h+0]!==_||c[h+1]!==y||c[h+2]!==E||c[h+3]!==T||c[h+4]!==b||c[h+5]!==L?(c[h+0]=_,c[h+1]=y,c[h+2]=E,c[h+3]=T,c[h+4]=b,c[h+5]=L,!0):!1}else{const d=h+8,x=o[h+6],_=d+p,y=x+p;let E=g,T=!1,b=!1;t?E||(T=t.has(_),b=t.has(y),E=!T&&!b):(T=!0,b=!0);const L=E||T,S=E||b;let M=!1;L&&(M=f(d,p,E));let C=!1;S&&(C=f(x,p,E));const I=M||C;if(I)for(let O=0;O<3;O++){const D=d+O,U=x+O,z=c[D],X=c[D+3],Z=c[U],G=c[U+3];c[h+O]=z<Z?z:Z,c[h+O+3]=X>G?X:G}return I}}}const Df=new le;function Xi(n,t,e,i){return ve(n,t,Df),e.intersectBox(Df,i)}function iS(n,t,e,i,s,r){const{geometry:o,_indirectBuffer:a}=n;for(let c=i,l=i+s;c<l;c++){let u=a?a[c]:c;nc(o,t,e,u,r)}}function sS(n,t,e,i,s){const{geometry:r,_indirectBuffer:o}=n;let a=1/0,c=null;for(let l=i,u=i+s;l<u;l++){let f;f=nc(r,t,e,o?o[l]:l),f&&f.distance<a&&(c=f,a=f.distance)}return c}function rS(n,t,e,i,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=n,f=t+n;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Le(o,h*3,c,l),o.needsUpdate=!0,i(o,h,s,r))return!0}return!1}const If=new w;function oS(n,t,e,i,s){me.setBuffer(n._roots[t]),Bl(0,n,e,i,s),me.clearBuffer()}function Bl(n,t,e,i,s){const{float32Array:r,uint16Array:o,uint32Array:a}=me,c=n*2;if(on(c,o)){const u=pn(n,a),f=Sn(c,o);QM(t,e,i,u,f,s)}else{const u=En(n);Xi(u,r,i,If)&&Bl(u,t,e,i,s);const f=bn(n,a);Xi(f,r,i,If)&&Bl(f,t,e,i,s)}}const Uf=new w,aS=["x","y","z"];function cS(n,t,e,i){me.setBuffer(n._roots[t]);const s=zl(0,n,e,i);return me.clearBuffer(),s}function zl(n,t,e,i){const{float32Array:s,uint16Array:r,uint32Array:o}=me;let a=n*2;if(on(a,r)){const l=pn(n,o),u=Sn(a,r);return tS(t,e,i,l,u)}else{const l=cp(n,o),u=aS[l],h=i.direction[u]>=0;let p,g;h?(p=En(n),g=bn(n,o)):(p=bn(n,o),g=En(n));const m=Xi(p,s,i,Uf)?zl(p,t,e,i):null;if(m){const _=m.point[u];if(h?_<=s[g+l]:_>=s[g+l+3])return m}const x=Xi(g,s,i,Uf)?zl(g,t,e,i):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const pa=new le,Zs=new Rn,$s=new Rn,Or=new Kt,Nf=new sn,ma=new sn;function lS(n,t,e,i){me.setBuffer(n._roots[t]);const s=kl(0,n,e,i);return me.clearBuffer(),s}function kl(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=me;let c=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Nf.set(e.boundingBox.min,e.boundingBox.max,i),s=Nf),on(c,o)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,g=e.attributes.position,v=pn(n,a),m=Sn(c,o);if(Or.copy(i).invert(),e.boundsTree)return ve(n,r,ma),ma.matrix.copy(Or),ma.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>ma.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let _=v*3,y=(m+v)*3;_<y;_+=3)if(Le($s,_,f,h),$s.needsUpdate=!0,x.intersectsTriangle($s))return!0;return!1}});for(let d=v*3,x=(m+v)*3;d<x;d+=3){Le(Zs,d,f,h),Zs.a.applyMatrix4(Or),Zs.b.applyMatrix4(Or),Zs.c.applyMatrix4(Or),Zs.needsUpdate=!0;for(let _=0,y=p.count;_<y;_+=3)if(Le($s,_,p,g),$s.needsUpdate=!0,Zs.intersectsTriangle($s))return!0}}else{const u=n+8,f=a[n+6];return ve(u,r,pa),!!(s.intersectsBox(pa)&&kl(u,t,e,i,s)||(ve(f,r,pa),s.intersectsBox(pa)&&kl(f,t,e,i,s)))}}const ga=new Kt,il=new sn,Br=new sn,uS=new w,hS=new w,fS=new w,dS=new w;function pS(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),il.set(t.boundingBox.min,t.boundingBox.max,e),il.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=Tn.getPrimitive(),p=Tn.getPrimitive();let g=uS,v=hS,m=null,d=null;s&&(m=fS,d=dS);let x=1/0,_=null,y=null;return ga.copy(e).invert(),Br.matrix.copy(ga),n.shapecast({boundsTraverseOrder:E=>il.distanceToBox(E),intersectsBounds:(E,T,b)=>b<x&&b<o?(T&&(Br.min.copy(E.min),Br.max.copy(E.max),Br.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:L=>Br.distanceToBox(L),intersectsBounds:(L,S,M)=>M<x&&M<o,intersectsRange:(L,S)=>{for(let M=L,C=L+S;M<C;M++){Le(p,3*M,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let I=E,O=E+T;I<O;I++){Le(h,3*I,l,c),h.needsUpdate=!0;const D=h.distanceToTriangle(p,g,m);if(D<x&&(v.copy(g),d&&d.copy(m),x=D,_=I,y=M),D<r)return!0}}}});{const b=Tr(t);for(let L=0,S=b;L<S;L++){Le(p,3*L,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let M=E,C=E+T;M<C;M++){Le(h,3*M,l,c),h.needsUpdate=!0;const I=h.distanceToTriangle(p,g,m);if(I<x&&(v.copy(g),d&&d.copy(m),x=I,_=M,y=L),I<r)return!0}}}}}),Tn.releasePrimitive(h),Tn.releasePrimitive(p),x===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=x,i.faceIndex=_,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(ga),v.applyMatrix4(ga),s.distance=v.sub(s.point).length(),s.faceIndex=y),i)}function mS(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){const v=h*2;if(a[v+15]===ec){const d=o[h+6],x=a[v+14];let _=1/0,y=1/0,E=1/0,T=-1/0,b=-1/0,L=-1/0;for(let S=d,M=d+x;S<M;S++){const C=3*n.resolveTriangleIndex(S);for(let I=0;I<3;I++){let O=C+I;O=i?i[O]:O;const D=s.getX(O),U=s.getY(O),z=s.getZ(O);D<_&&(_=D),D>T&&(T=D),U<y&&(y=U),U>b&&(b=U),z<E&&(E=z),z>L&&(L=z)}}return c[h+0]!==_||c[h+1]!==y||c[h+2]!==E||c[h+3]!==T||c[h+4]!==b||c[h+5]!==L?(c[h+0]=_,c[h+1]=y,c[h+2]=E,c[h+3]=T,c[h+4]=b,c[h+5]=L,!0):!1}else{const d=h+8,x=o[h+6],_=d+p,y=x+p;let E=g,T=!1,b=!1;t?E||(T=t.has(_),b=t.has(y),E=!T&&!b):(T=!0,b=!0);const L=E||T,S=E||b;let M=!1;L&&(M=f(d,p,E));let C=!1;S&&(C=f(x,p,E));const I=M||C;if(I)for(let O=0;O<3;O++){const D=d+O,U=x+O,z=c[D],X=c[D+3],Z=c[U],G=c[U+3];c[h+O]=z<Z?z:Z,c[h+O+3]=X>G?X:G}return I}}}const Ff=new w;function gS(n,t,e,i,s){me.setBuffer(n._roots[t]),Hl(0,n,e,i,s),me.clearBuffer()}function Hl(n,t,e,i,s){const{float32Array:r,uint16Array:o,uint32Array:a}=me,c=n*2;if(on(c,o)){const u=pn(n,a),f=Sn(c,o);iS(t,e,i,u,f,s)}else{const u=En(n);Xi(u,r,i,Ff)&&Hl(u,t,e,i,s);const f=bn(n,a);Xi(f,r,i,Ff)&&Hl(f,t,e,i,s)}}const Of=new w,_S=["x","y","z"];function xS(n,t,e,i){me.setBuffer(n._roots[t]);const s=Gl(0,n,e,i);return me.clearBuffer(),s}function Gl(n,t,e,i){const{float32Array:s,uint16Array:r,uint32Array:o}=me;let a=n*2;if(on(a,r)){const l=pn(n,o),u=Sn(a,r);return sS(t,e,i,l,u)}else{const l=cp(n,o),u=_S[l],h=i.direction[u]>=0;let p,g;h?(p=En(n),g=bn(n,o)):(p=bn(n,o),g=En(n));const m=Xi(p,s,i,Of)?Gl(p,t,e,i):null;if(m){const _=m.point[u];if(h?_<=s[g+l]:_>=s[g+l+3])return m}const x=Xi(g,s,i,Of)?Gl(g,t,e,i):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const _a=new le,Ks=new Rn,Js=new Rn,zr=new Kt,Bf=new sn,xa=new sn;function vS(n,t,e,i){me.setBuffer(n._roots[t]);const s=Vl(0,n,e,i);return me.clearBuffer(),s}function Vl(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=me;let c=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Bf.set(e.boundingBox.min,e.boundingBox.max,i),s=Bf),on(c,o)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,g=e.attributes.position,v=pn(n,a),m=Sn(c,o);if(zr.copy(i).invert(),e.boundsTree)return ve(n,r,xa),xa.matrix.copy(zr),xa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>xa.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let _=v,y=m+v;_<y;_++)if(Le(Js,3*t.resolveTriangleIndex(_),f,h),Js.needsUpdate=!0,x.intersectsTriangle(Js))return!0;return!1}});for(let d=v,x=m+v;d<x;d++){const _=t.resolveTriangleIndex(d);Le(Ks,3*_,f,h),Ks.a.applyMatrix4(zr),Ks.b.applyMatrix4(zr),Ks.c.applyMatrix4(zr),Ks.needsUpdate=!0;for(let y=0,E=p.count;y<E;y+=3)if(Le(Js,y,p,g),Js.needsUpdate=!0,Ks.intersectsTriangle(Js))return!0}}else{const u=n+8,f=a[n+6];return ve(u,r,_a),!!(s.intersectsBox(_a)&&Vl(u,t,e,i,s)||(ve(f,r,_a),s.intersectsBox(_a)&&Vl(f,t,e,i,s)))}}const va=new Kt,sl=new sn,kr=new sn,yS=new w,MS=new w,SS=new w,ES=new w;function bS(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),sl.set(t.boundingBox.min,t.boundingBox.max,e),sl.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=Tn.getPrimitive(),p=Tn.getPrimitive();let g=yS,v=MS,m=null,d=null;s&&(m=SS,d=ES);let x=1/0,_=null,y=null;return va.copy(e).invert(),kr.matrix.copy(va),n.shapecast({boundsTraverseOrder:E=>sl.distanceToBox(E),intersectsBounds:(E,T,b)=>b<x&&b<o?(T&&(kr.min.copy(E.min),kr.max.copy(E.max),kr.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree){const b=t.boundsTree;return b.shapecast({boundsTraverseOrder:L=>kr.distanceToBox(L),intersectsBounds:(L,S,M)=>M<x&&M<o,intersectsRange:(L,S)=>{for(let M=L,C=L+S;M<C;M++){const I=b.resolveTriangleIndex(M);Le(p,3*I,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let O=E,D=E+T;O<D;O++){const U=n.resolveTriangleIndex(O);Le(h,3*U,l,c),h.needsUpdate=!0;const z=h.distanceToTriangle(p,g,m);if(z<x&&(v.copy(g),d&&d.copy(m),x=z,_=O,y=M),z<r)return!0}}}})}else{const b=Tr(t);for(let L=0,S=b;L<S;L++){Le(p,3*L,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let M=E,C=E+T;M<C;M++){const I=n.resolveTriangleIndex(M);Le(h,3*I,l,c),h.needsUpdate=!0;const O=h.distanceToTriangle(p,g,m);if(O<x&&(v.copy(g),d&&d.copy(m),x=O,_=M,y=L),O<r)return!0}}}}}),Tn.releasePrimitive(h),Tn.releasePrimitive(p),x===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=x,i.faceIndex=_,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(va),v.applyMatrix4(va),s.distance=v.sub(s.point).length(),s.faceIndex=y),i)}function TS(){return typeof SharedArrayBuffer<"u"}const to=new me.constructor,Ga=new me.constructor,Li=new uu(()=>new le),Qs=new le,tr=new le,rl=new le,ol=new le;let al=!1;function wS(n,t,e,i){if(al)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");al=!0;const s=n._roots,r=t._roots;let o,a=0,c=0;const l=new Kt().copy(e).invert();for(let u=0,f=s.length;u<f;u++){to.setBuffer(s[u]),c=0;const h=Li.getPrimitive();ve(0,to.float32Array,h),h.applyMatrix4(l);for(let p=0,g=r.length;p<g&&(Ga.setBuffer(r[u]),o=Dn(0,0,e,l,i,a,c,0,0,h),Ga.clearBuffer(),c+=r[p].length,!o);p++);if(Li.releasePrimitive(h),to.clearBuffer(),a+=s[u].length,o)break}return al=!1,o}function Dn(n,t,e,i,s,r=0,o=0,a=0,c=0,l=null,u=!1){let f,h;u?(f=Ga,h=to):(f=to,h=Ga);const p=f.float32Array,g=f.uint32Array,v=f.uint16Array,m=h.float32Array,d=h.uint32Array,x=h.uint16Array,_=n*2,y=t*2,E=on(_,v),T=on(y,x);let b=!1;if(T&&E)u?b=s(pn(t,d),Sn(t*2,x),pn(n,g),Sn(n*2,v),c,o+t,a,r+n):b=s(pn(n,g),Sn(n*2,v),pn(t,d),Sn(t*2,x),a,r+n,c,o+t);else if(T){const L=Li.getPrimitive();ve(t,m,L),L.applyMatrix4(e);const S=En(n),M=bn(n,g);ve(S,p,Qs),ve(M,p,tr);const C=L.intersectsBox(Qs),I=L.intersectsBox(tr);b=C&&Dn(t,S,i,e,s,o,r,c,a+1,L,!u)||I&&Dn(t,M,i,e,s,o,r,c,a+1,L,!u),Li.releasePrimitive(L)}else{const L=En(t),S=bn(t,d);ve(L,m,rl),ve(S,m,ol);const M=l.intersectsBox(rl),C=l.intersectsBox(ol);if(M&&C)b=Dn(n,L,e,i,s,r,o,a,c+1,l,u)||Dn(n,S,e,i,s,r,o,a,c+1,l,u);else if(M)if(E)b=Dn(n,L,e,i,s,r,o,a,c+1,l,u);else{const I=Li.getPrimitive();I.copy(rl).applyMatrix4(e);const O=En(n),D=bn(n,g);ve(O,p,Qs),ve(D,p,tr);const U=I.intersectsBox(Qs),z=I.intersectsBox(tr);b=U&&Dn(L,O,i,e,s,o,r,c,a+1,I,!u)||z&&Dn(L,D,i,e,s,o,r,c,a+1,I,!u),Li.releasePrimitive(I)}else if(C)if(E)b=Dn(n,S,e,i,s,r,o,a,c+1,l,u);else{const I=Li.getPrimitive();I.copy(ol).applyMatrix4(e);const O=En(n),D=bn(n,g);ve(O,p,Qs),ve(D,p,tr);const U=I.intersectsBox(Qs),z=I.intersectsBox(tr);b=U&&Dn(S,O,i,e,s,o,r,c,a+1,I,!u)||z&&Dn(S,D,i,e,s,o,r,c,a+1,I,!u),Li.releasePrimitive(I)}}return b}const ya=new sn,zf=new le,AS={strategy:rp,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class hu{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,s=t._roots,r=t._indirectBuffer,o=i.getIndex();let a;return e.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:s,index:o.array,indirectBuffer:r},a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:s,roots:r,indirectBuffer:o}=t,a=new hu(e,{...i,[Jc]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const c=e.getIndex();if(c===null){const l=new qe(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...AS,[Jc]:!1},e),e.useSharedArrayBuffer&&!TS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Jc]||(VM(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new le)));const{_indirectBuffer:i}=this;this.resolveTriangleIndex=e.indirect?s=>i[s]:s=>s}refit(t=null){return(this.indirect?mS:nS)(this,t)}traverse(t,e=0){const i=this._roots[e],s=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,c=0){const l=a*2,u=r[l+15]===ec;if(u){const f=s[a+6],h=r[l+14];t(c,u,new Float32Array(i,a*4,6),f,h)}else{const f=a+Qr/4,h=s[a+6],p=s[a+7];t(c,u,new Float32Array(i,a*4,6),p)||(o(f,c+1),o(h,c+1))}}}raycast(t,e=Xn){const i=this._roots,s=this.geometry,r=[],o=e.isMaterial,a=Array.isArray(e),c=s.groups,l=o?e.side:e,u=this.indirect?gS:oS;for(let f=0,h=i.length;f<h;f++){const p=a?e[c[f].materialIndex].side:l,g=r.length;if(u(this,f,p,t,r),a){const v=c[f].materialIndex;for(let m=g,d=r.length;m<d;m++)r[m].face.materialIndex=v}}return r}raycastFirst(t,e=Xn){const i=this._roots,s=this.geometry,r=e.isMaterial,o=Array.isArray(e);let a=null;const c=s.groups,l=r?e.side:e,u=this.indirect?xS:cS;for(let f=0,h=i.length;f<h;f++){const p=o?e[c[f].materialIndex].side:l,g=u(this,f,p,t);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=c[f].materialIndex))}return a}intersectsGeometry(t,e){let i=!1;const s=this._roots,r=this.indirect?vS:lS;for(let o=0,a=s.length;o<a&&(i=r(this,o,t,e),!i);o++);return i}shapecast(t){const e=Tn.getPrimitive(),i=this.indirect?rS:eS;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const f=o;o=(h,p,g,v,m)=>f(h,p,g,v,m)?!0:i(h,p,this,a,g,v,e)}else o||(a?o=(f,h,p,g)=>i(f,h,this,a,p,g,e):o=(f,h,p)=>p);let c=!1,l=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const p=u[f];if(c=ZM(this,f,r,o,s,l),c)break;l+=p.byteLength}return Tn.releasePrimitive(e),c}bvhcast(t,e,i){let{intersectsRanges:s,intersectsTriangles:r}=i;const o=Tn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const v=this.resolveTriangleIndex(g);Le(o,v*3,a,c)}:g=>{Le(o,g*3,a,c)},u=Tn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,p=t.indirect?g=>{const v=t.resolveTriangleIndex(g);Le(u,v*3,f,h)}:g=>{Le(u,g*3,f,h)};if(r){const g=(v,m,d,x,_,y,E,T)=>{for(let b=d,L=d+x;b<L;b++){p(b),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=v,M=v+m;S<M;S++)if(l(S),o.needsUpdate=!0,r(o,u,S,b,_,y,E,T))return!0}return!1};if(s){const v=s;s=function(m,d,x,_,y,E,T,b){return v(m,d,x,_,y,E,T,b)?!0:g(m,d,x,_,y,E,T,b)}}else s=g}return wS(this,t,e,s)}intersectsBox(t,e){return ya.set(t.min,t.max,e),ya.needsUpdate=!0,this.shapecast({intersectsBounds:i=>ya.intersectsBox(i),intersectsTriangle:i=>ya.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},s={},r=0,o=1/0){return(this.indirect?bS:pS)(this,t,e,i,s,r,o)}closestPointToPoint(t,e={},i=0,s=1/0){return $M(this,t,e,i,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{ve(0,new Float32Array(i),zf),t.union(zf)}),t}}const hp=1e-6,RS=hp*.5,fp=Math.pow(10,-Math.log10(hp)),PS=RS*fp;function Vn(n){return~~(n*fp+PS)}function CS(n){return`${Vn(n.x)},${Vn(n.y)}`}function kf(n){return`${Vn(n.x)},${Vn(n.y)},${Vn(n.z)}`}function LS(n){return`${Vn(n.x)},${Vn(n.y)},${Vn(n.z)},${Vn(n.w)}`}function DS(n,t,e){e.direction.subVectors(t,n).normalize();const i=n.dot(e.direction);return e.origin.copy(n).addScaledVector(e.direction,-i),e}function dp(){return typeof SharedArrayBuffer<"u"}function IS(n){if(n.buffer instanceof SharedArrayBuffer)return n;const t=n.constructor,e=n.buffer,i=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(i).set(s,0),new t(i)}function US(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function NS(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=US(e,i);n.setIndex(new qe(s,1));for(let r=0;r<e;r++)s[r]=r}}function FS(n){return n.index?n.index.count:n.attributes.position.count}function fu(n){return FS(n)/3}const OS=1e-8,BS=new w;function zS(n){return~~(n/3)}function kS(n){return n%3}function Hf(n,t){return n.start-t.start}function Gf(n,t){return BS.subVectors(t,n.origin).dot(n.direction)}function HS(n,t,e,i=OS){n.sort(Hf),t.sort(Hf);for(let a=0;a<n.length;a++){const c=n[a];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||n.splice(a+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const f=c.end;c.end=u.start,u.start=f}else if(c.start>=u.start&&c.end>=u.end){const f=u.end;u.end=c.start,c.start=f}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),o(u)&&(t.splice(l,1),l--),o(c)){n.splice(a,1),a--;break}}}s(n),s(t);function s(a){for(let c=0;c<a.length;c++)o(a[c])&&(a.splice(c,1),c--)}function r(a,c){return Math.abs(c-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const Vf=1e-5,Wf=1e-4;class GS{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,i=t.clone();i.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(o(u,t)&&o(u,i))continue;const f=a(u,t),h=a(u,i),p=Math.min(f,h);p<s&&(s=p,r=u)}return r;function o(c,l){const u=c.origin.distanceTo(l.origin)>Vf;return c.direction.angleTo(l.direction)>Wf||u}function a(c,l){const u=c.origin.distanceTo(l.origin),f=c.direction.angleTo(l.direction);return u/Vf+f/Wf}}}const cl=new w,ll=new w,Ma=new Mr;function VS(n,t,e){const i=n.attributes,s=n.index,r=i.position,o=new Map,a=new Map,c=Array.from(t),l=new GS;for(let u=0,f=c.length;u<f;u++){const h=c[u],p=zS(h),g=kS(h);let v=3*p+g,m=3*p+(g+1)%3;s&&(v=s.getX(v),m=s.getX(m)),cl.fromBufferAttribute(r,v),ll.fromBufferAttribute(r,m),DS(cl,ll,Ma);let d,x=l.findClosestRay(Ma);x===null&&(x=Ma.clone(),l.addRay(x)),a.has(x)||a.set(x,{forward:[],reverse:[],ray:x}),d=a.get(x);let _=Gf(x,cl),y=Gf(x,ll);_>y&&([_,y]=[y,_]),Ma.direction.dot(x.direction)<0?d.reverse.push({start:_,end:y,index:h}):d.forward.push({start:_,end:y,index:h})}return a.forEach(({forward:u,reverse:f},h)=>{HS(u,f,o,e),u.length===0&&f.length===0&&a.delete(h)}),{disjointConnectivityMap:o,fragmentMap:a}}const WS=new J,ul=new w,XS=new pe,hl=["","",""];class YS{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:i,matchDisjointEdges:s,degenerateEpsilon:r}=this,o=e?_:x,a=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,f=c.position;let h=fu(t);const p=h;let g=0;i&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(h=~~(t.drawRange.count/3)));let v=this.data;(!v||v.length<3*p)&&(v=new Int32Array(3*p)),v.fill(-1);let m=0,d=new Set;for(let y=g,E=h*3+g;y<E;y+=3){const T=y;for(let b=0;b<3;b++){let L=T+b;u&&(L=u.getX(L)),hl[b]=o(L)}for(let b=0;b<3;b++){const L=(b+1)%3,S=hl[b],M=hl[L],C=`${M}_${S}`;if(a.has(C)){const I=T+b,O=a.get(C);v[I]=O,v[O]=I,a.delete(C),m+=2,d.delete(O)}else{const I=`${S}_${M}`,O=T+b;a.set(I,O),d.add(O)}}}if(s){const{fragmentMap:y,disjointConnectivityMap:E}=VS(t,d,r);d.clear(),y.forEach(({forward:T,reverse:b})=>{T.forEach(({index:L})=>d.add(L)),b.forEach(({index:L})=>d.add(L))}),this.unmatchedDisjointEdges=y,this.disjointConnections=E,m=h*3-d.size}this.matchedEdges=m,this.unmatchedEdges=d.size,this.data=v;function x(y){return ul.fromBufferAttribute(f,y),kf(ul)}function _(y){let E="";for(let T=0,b=l.length;T<b;T++){const L=c[l[T]];let S;switch(L.itemSize){case 1:S=Vn(L.getX(y));break;case 2:S=CS(WS.fromBufferAttribute(L,y));break;case 3:S=kf(ul.fromBufferAttribute(L,y));break;case 4:S=LS(XS.fromBufferAttribute(L,y));break}E!==""&&(E+="|"),E+=S}return E}}}class Wl extends _t{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Kt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,i=t.elements,s=e.elements;for(let r=0;r<16;r++)if(i[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,i=dp();if(i)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=IS(r.array)}if(t.boundsTree||(NS(t,{useSharedArrayBuffer:i}),t.boundsTree=new hu(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:i})),t.halfEdges||(t.halfEdges=new YS(t)),!t.groupIndices){const s=fu(t),r=new Uint16Array(s),o=t.groups;for(let a=0,c=o.length;a<c;a++){const{start:l,count:u}=o[a];for(let f=l/3,h=(l+u)/3;f<h;f++)r[f]=a}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const qS=1e-14,fl=new w,Xf=new w,Yf=new w;function Ii(n,t=qS){fl.subVectors(n.b,n.a),Xf.subVectors(n.c,n.a),Yf.subVectors(n.b,n.c);const e=fl.angleTo(Xf),i=fl.angleTo(Yf),s=Math.PI-e-i;return Math.abs(e)<t||Math.abs(i)<t||Math.abs(s)<t||n.a.distanceToSquared(n.b)<t||n.a.distanceToSquared(n.c)<t||n.b.distanceToSquared(n.c)<t}const dl=1e-10,Hr=1e-10,jS=1e-10,ei=new wn,we=new wn,ni=new w,pl=new w,qf=new w,Sa=new rn,ml=new Rn;class ZS{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new de),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class $S{constructor(){this.trianglePool=new ZS,this.triangles=[],this.normal=new w,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:i,normal:s}=this;if(Array.isArray(t))for(let r=0,o=t.length;r<o;r++){const a=t[r];if(r===0)a.getNormal(s);else if(Math.abs(1-a.getNormal(ni).dot(s))>dl)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=i.getTriangle();c.copy(a),e.push(c)}else{t.getNormal(s);const r=i.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:i}=this;if(t.getNormal(pl).normalize(),Math.abs(1-Math.abs(pl.dot(e)))<jS){this.coplanarTriangleUsed=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const o=(r+1)%3,a=s[r],c=s[o];ni.subVectors(c,a).normalize(),qf.crossVectors(pl,ni),Sa.setFromNormalAndCoplanarPoint(qf,a),this.splitByPlane(Sa,t)}}else t.getPlane(Sa),this.splitByPlane(Sa,t)}splitByPlane(t,e){const{triangles:i,trianglePool:s}=this;ml.copy(e),ml.needsUpdate=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];if(!ml.intersectsTriangle(a,ei,!0))continue;const{a:c,b:l,c:u}=a;let f=0,h=-1,p=!1,g=[],v=[];const m=[c,l,u];for(let d=0;d<3;d++){const x=(d+1)%3;ei.start.copy(m[d]),ei.end.copy(m[x]);const _=t.distanceToPoint(ei.start),y=t.distanceToPoint(ei.end);if(Math.abs(_)<Hr&&Math.abs(y)<Hr){p=!0;break}if(_>0?g.push(d):v.push(d),Math.abs(_)<Hr)continue;let E=!!t.intersectLine(ei,ni);!E&&Math.abs(y)<Hr&&(ni.copy(ei.end),E=!0),E&&!(ni.distanceTo(ei.start)<dl)&&(ni.distanceTo(ei.end)<dl&&(h=d),f===0?we.start.copy(ni):we.end.copy(ni),f++)}if(!p&&f===2&&we.distance()>Hr)if(h!==-1){h=(h+1)%3;let d=0;d===h&&(d=(d+1)%3);let x=d+1;x===h&&(x=(x+1)%3);const _=s.getTriangle();_.a.copy(m[x]),_.b.copy(we.end),_.c.copy(we.start),Ii(_)||i.push(_),a.a.copy(m[d]),a.b.copy(we.start),a.c.copy(we.end),Ii(a)&&(i.splice(r,1),r--,o--)}else{const d=g.length>=2?v[0]:g[0];if(d===0){let T=we.start;we.start=we.end,we.end=T}const x=(d+1)%3,_=(d+2)%3,y=s.getTriangle(),E=s.getTriangle();m[x].distanceToSquared(we.start)<m[_].distanceToSquared(we.end)?(y.a.copy(m[x]),y.b.copy(we.start),y.c.copy(we.end),E.a.copy(m[x]),E.b.copy(m[_]),E.c.copy(we.start)):(y.a.copy(m[_]),y.b.copy(we.start),y.c.copy(we.end),E.a.copy(m[x]),E.b.copy(m[_]),E.c.copy(we.end)),a.a.copy(m[d]),a.b.copy(we.end),a.c.copy(we.start),Ii(y)||i.push(y),Ii(E)||i.push(E),Ii(a)&&(i.splice(r,1),r--,o--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function KS(n){return n=~~n,n+4-n%4}class jf{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,i=dp()?SharedArrayBuffer:ArrayBuffer,s=new e(new i(KS(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:i}=this;i+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[i+s]=t[s];this.length+=t.length}clear(){this.length=0}}class JS{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:i}=this;let s=0;for(let r=0;r<e;r++){const o=i[r];s+=o[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const i=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in i){const o=i[r],a=new jf(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,s[r]=a}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:i}=this;if(!i[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,i,s){const{groupAttributes:r}=this,a=r[0][t];if(a){if(a.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=i,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new jf(e);u.itemSize=i,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const i in e)e[i].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class Zf{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:i,ids:s}=this;i[t]||(i[t]=[],s.push(t)),i[t].push(e)}}const Xl=0,pp=1,QS=2,tE=3,eE=4,mp=5,gp=6,xn=new Mr,$f=new Kt,$e=new de,ii=new w,Kf=new pe,Jf=new pe,Qf=new pe,gl=new pe,Ea=new pe,ba=new pe,td=new wn,_l=new w,xl=1e-8,nE=1e-15,hs=-1,fs=1,La=-2,Da=2,eo=0,is=1,du=2,iE=1e-14;let Ia=null;function ed(n){Ia=n}function _p(n,t){n.getMidpoint(xn.origin),n.getNormal(xn.direction);const e=t.raycastFirst(xn,tn);return!!(e&&xn.direction.dot(e.face.normal)>0)?hs:fs}function sE(n,t){function e(){return Math.random()-.5}n.getNormal(_l),xn.direction.copy(_l),n.getMidpoint(xn.origin);const i=3;let s=0,r=1/0;for(let o=0;o<i;o++){xn.direction.x+=e()*xl,xn.direction.y+=e()*xl,xn.direction.z+=e()*xl,xn.direction.multiplyScalar(-1);const a=t.raycastFirst(xn,tn);if(!!(a&&xn.direction.dot(a.face.normal)>0)&&s++,a!==null&&(r=Math.min(r,a.distance)),r<=nE)return a.face.normal.dot(_l)>0?Da:La;if(s/i>.5||(o-s+1)/i>.5)break}return s/i>.5?hs:fs}function rE(n,t){const e=new Zf,i=new Zf;return $f.copy(n.matrixWorld).invert().multiply(t.matrixWorld),n.geometry.boundsTree.bvhcast(t.geometry.boundsTree,$f,{intersectsTriangles(s,r,o,a){if(!Ii(s)&&!Ii(r)){let c=s.intersectsTriangle(r,td,!0);if(!c){const l=s.plane,u=r.plane,f=l.normal,h=u.normal;f.dot(h)===1&&Math.abs(l.constant-u.constant)<iE&&(c=!0)}if(c){let l=n.geometry.boundsTree.resolveTriangleIndex(o),u=t.geometry.boundsTree.resolveTriangleIndex(a);e.add(l,u),i.add(u,l),Ia&&(Ia.addEdge(td),Ia.addIntersectingTriangles(o,s,a,r))}}return!1}}),{aIntersections:e,bIntersections:i}}function oE(n,t,e,i,s,r,o=!1){const a=e.attributes,c=e.index,l=n*3,u=c.getX(l+0),f=c.getX(l+1),h=c.getX(l+2);for(const p in r){const g=a[p],v=r[p];if(!(p in a))throw new Error(`CSG Operations: Attribute ${p} not available on geometry.`);const m=g.itemSize;p==="position"?($e.a.fromBufferAttribute(g,u).applyMatrix4(i),$e.b.fromBufferAttribute(g,f).applyMatrix4(i),$e.c.fromBufferAttribute(g,h).applyMatrix4(i),vl($e.a,$e.b,$e.c,t,3,v,o)):p==="normal"?($e.a.fromBufferAttribute(g,u).applyNormalMatrix(s),$e.b.fromBufferAttribute(g,f).applyNormalMatrix(s),$e.c.fromBufferAttribute(g,h).applyNormalMatrix(s),o&&($e.a.multiplyScalar(-1),$e.b.multiplyScalar(-1),$e.c.multiplyScalar(-1)),vl($e.a,$e.b,$e.c,t,3,v,o,!0)):(Kf.fromBufferAttribute(g,u),Jf.fromBufferAttribute(g,f),Qf.fromBufferAttribute(g,h),vl(Kf,Jf,Qf,t,m,v,o))}}function aE(n,t,e,i,s,r,o,a=!1){yl(n,i,s,r,o,a),yl(a?e:t,i,s,r,o,a),yl(a?t:e,i,s,r,o,a)}function xp(n,t,e=!1){switch(n){case Xl:if(t===fs||t===Da&&!e)return is;break;case pp:if(e){if(t===hs)return eo}else if(t===fs||t===La)return is;break;case QS:if(e){if(t===fs||t===La)return is}else if(t===hs)return eo;break;case eE:if(t===hs)return eo;if(t===fs)return is;break;case tE:if(t===hs||t===Da&&!e)return is;break;case mp:if(!e&&(t===fs||t===La))return is;break;case gp:if(!e&&(t===hs||t===Da))return is;break;default:throw new Error(`Unrecognized CSG operation enum "${n}".`)}return du}function vl(n,t,e,i,s,r,o=!1,a=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};gl.set(0,0,0,0).addScaledVector(n,i.a.x).addScaledVector(t,i.a.y).addScaledVector(e,i.a.z),Ea.set(0,0,0,0).addScaledVector(n,i.b.x).addScaledVector(t,i.b.y).addScaledVector(e,i.b.z),ba.set(0,0,0,0).addScaledVector(n,i.c.x).addScaledVector(t,i.c.y).addScaledVector(e,i.c.z),a&&(gl.normalize(),Ea.normalize(),ba.normalize()),c(gl),o?(c(ba),c(Ea)):(c(Ea),c(ba))}function yl(n,t,e,i,s,r=!1){for(const o in s){const a=t[o],c=s[o];if(!(o in t))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const l=a.itemSize;o==="position"?(ii.fromBufferAttribute(a,n).applyMatrix4(e),c.push(ii.x,ii.y,ii.z)):o==="normal"?(ii.fromBufferAttribute(a,n).applyNormalMatrix(i),r&&ii.multiplyScalar(-1),c.push(ii.x,ii.y,ii.z)):(c.push(a.getX(n)),l>1&&c.push(a.getY(n)),l>2&&c.push(a.getZ(n)),l>3&&c.push(a.getW(n)))}}class cE{constructor(t){this.triangle=new de().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new de().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const i in e)t.push(e[i]);return t}}class nd{constructor(){this.data={}}addTriangleIntersection(t,e,i,s){const{data:r}=this;r[t]||(r[t]=new cE(e)),r[t].addTriangle(i,s)}getTrianglesAsArray(t=null){const{data:e}=this,i=[];if(t!==null)t in e&&i.push(e[t].triangle);else for(const s in e)i.push(e[s].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(t=null,e=null){const{data:i}=this,s=new Set,r=[],o=a=>{if(i[a])if(e!==null)i[a].intersects[e]&&r.push(i[a].intersects[e]);else{const c=i[a].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)o(t);else for(const a in i)o(a);return r}reset(){this.data={}}}class lE{constructor(){this.enabled=!1,this.triangleIntersectsA=new nd,this.triangleIntersectsB=new nd,this.intersectionEdges=[]}addIntersectingTriangles(t,e,i,s){const{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(t,e,i,s),o.addTriangleIntersection(i,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),ed(this))}complete(){this.enabled&&ed(null)}}const Bi=new Kt,Va=new Xt,ss=new de,Ta=new de,wi=new de,wa=new de,On=[],xs=[];function uE(n){for(const t of n)return t}function hE(n,t,e,i,s,r={}){const{useGroups:o=!0}=r,{aIntersections:a,bIntersections:c}=rE(n,t),l=[];let u=null,f;return f=o?0:-1,id(n,t,a,e,!1,i,s,f),sd(n,t,a,e,!1,s,f),e.findIndex(p=>p!==gp&&p!==mp)!==-1&&(f=o?n.geometry.groups.length||1:-1,id(t,n,c,e,!0,i,s,f),sd(t,n,c,e,!0,s,f)),On.length=0,xs.length=0,{groups:l,materials:u}}function id(n,t,e,i,s,r,o,a=0){const c=n.matrixWorld.determinant()<0;Bi.copy(t.matrixWorld).invert().multiply(n.matrixWorld),Va.getNormalMatrix(n.matrixWorld).multiplyScalar(c?-1:1);const l=n.geometry.groupIndices,u=n.geometry.index,f=n.geometry.attributes.position,h=t.geometry.boundsTree,p=t.geometry.index,g=t.geometry.attributes.position,v=e.ids,m=e.intersectionSet;for(let d=0,x=v.length;d<x;d++){const _=v[d],y=a===-1?0:l[_]+a,E=3*_,T=u.getX(E+0),b=u.getX(E+1),L=u.getX(E+2);ss.a.fromBufferAttribute(f,T).applyMatrix4(Bi),ss.b.fromBufferAttribute(f,b).applyMatrix4(Bi),ss.c.fromBufferAttribute(f,L).applyMatrix4(Bi),r.reset(),r.initialize(ss);const S=m[_];for(let C=0,I=S.length;C<I;C++){const O=3*S[C],D=p.getX(O+0),U=p.getX(O+1),z=p.getX(O+2);Ta.a.fromBufferAttribute(g,D),Ta.b.fromBufferAttribute(g,U),Ta.c.fromBufferAttribute(g,z),r.splitByTriangle(Ta)}const M=r.triangles;for(let C=0,I=M.length;C<I;C++){const O=M[C],D=r.coplanarTriangleUsed?sE(O,h):_p(O,h);On.length=0,xs.length=0;for(let U=0,z=i.length;U<z;U++){const X=xp(i[U],D,s);X!==du&&(xs.push(X),On.push(o[U].getGroupAttrSet(y)))}if(On.length!==0){ss.getBarycoord(O.a,wa.a),ss.getBarycoord(O.b,wa.b),ss.getBarycoord(O.c,wa.c);for(let U=0,z=On.length;U<z;U++){const X=On[U],G=xs[U]===eo;oE(_,wa,n.geometry,n.matrixWorld,Va,X,c!==G)}}}}return v.length}function sd(n,t,e,i,s,r,o=0){const a=n.matrixWorld.determinant()<0;Bi.copy(t.matrixWorld).invert().multiply(n.matrixWorld),Va.getNormalMatrix(n.matrixWorld).multiplyScalar(a?-1:1);const c=t.geometry.boundsTree,l=n.geometry.groupIndices,u=n.geometry.index,f=n.geometry.attributes,h=f.position,p=[],g=n.geometry.halfEdges,v=new Set,m=fu(n.geometry);for(let d=0,x=m;d<x;d++)d in e.intersectionSet||v.add(d);for(;v.size>0;){const d=uE(v);v.delete(d),p.push(d);const x=3*d,_=u.getX(x+0),y=u.getX(x+1),E=u.getX(x+2);wi.a.fromBufferAttribute(h,_).applyMatrix4(Bi),wi.b.fromBufferAttribute(h,y).applyMatrix4(Bi),wi.c.fromBufferAttribute(h,E).applyMatrix4(Bi);const T=_p(wi,c);xs.length=0,On.length=0;for(let b=0,L=i.length;b<L;b++){const S=xp(i[b],T,s);S!==du&&(xs.push(S),On.push(r[b]))}for(;p.length>0;){const b=p.pop();for(let L=0;L<3;L++){const S=g.getSiblingTriangleIndex(b,L);S!==-1&&v.has(S)&&(p.push(S),v.delete(S))}if(On.length!==0){const L=3*b,S=u.getX(L+0),M=u.getX(L+1),C=u.getX(L+2),I=o===-1?0:l[b]+o;if(wi.a.fromBufferAttribute(h,S),wi.b.fromBufferAttribute(h,M),wi.c.fromBufferAttribute(h,C),!Ii(wi))for(let O=0,D=On.length;O<D;O++){const U=xs[O],z=On[O].getGroupAttrSet(I),X=U===eo;aE(S,M,C,f,n.matrixWorld,Va,z,X!==a)}}}}}function fE(n){for(let t=0;t<n.length-1;t++){const e=n[t],i=n[t+1];if(e.materialIndex===i.materialIndex){const s=e.start,r=i.start+i.count;i.start=s,i.count=r-s,n.splice(t,1),t--}}}function dE(n,t,e,i){e.clear();const s=n.attributes;for(let r=0,o=i.length;r<o;r++){const a=i[r],c=s[a];e.initializeArray(a,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)i.includes(r)||e.delete(r);for(const r in t.attributes)i.includes(r)||(t.deleteAttribute(r),t.dispose())}function pE(n,t,e){let i=!1,s=-1;const r=n.attributes,o=t.groupAttributes[0];for(const c in o){const l=t.getTotalLength(c),u=t.getType(c),f=t.getItemSize(c),h=t.getNormalized(c);let p=r[c];(!p||p.array.length<l)&&(p=new qe(new u(l),f,h),n.setAttribute(c,p),i=!0);let g=0;for(let v=0,m=Math.min(e.length,t.groupCount);v<m;v++){const d=e[v].index,{array:x,type:_,length:y}=t.groupAttributes[d][c],E=new _(x.buffer,0,y);p.array.set(E,g),g+=E.length}p.needsUpdate=!0,s=l/p.itemSize}if(n.index){const c=n.index.array;if(c.length<s)n.index=null,i=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let a=0;n.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:f}=e[c],h=t.getCount(u);h!==0&&(n.addGroup(a,h,f),a+=h)}n.setDrawRange(0,s),n.boundsTree=null,i&&n.dispose()}function rd(n,t){let e=t;return Array.isArray(t)||(e=[],n.forEach(i=>{e[i.materialIndex]=t})),e}class mE{constructor(){this.triangleSplitter=new $S,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new lE}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,i,s=new Wl){let r=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s],r=!1),s.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:c,useGroups:l,consolidateGroups:u,debug:f}=this;for(;a.length<s.length;)a.push(new JS);s.forEach((d,x)=>{dE(t.geometry,d.geometry,a[x],c)}),f.init(),hE(t,e,i,o,a,{useGroups:l}),f.complete();const h=this.getGroupRanges(t.geometry),p=rd(h,t.material),g=this.getGroupRanges(e.geometry),v=rd(g,e.material);g.forEach(d=>d.materialIndex+=p.length);let m=[...h,...g].map((d,x)=>({...d,index:x}));if(l){const d=[...p,...v];u&&(m=m.map(_=>{const y=d[_.materialIndex];return _.materialIndex=d.indexOf(y),_}).sort((_,y)=>_.materialIndex-y.materialIndex));const x=[];for(let _=0,y=d.length;_<y;_++){let E=!1;for(let T=0,b=m.length;T<b;T++){const L=m[T];L.materialIndex===_&&(E=!0,L.materialIndex=x.length)}E&&x.push(d[_])}s.forEach(_=>{_.material=x})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(d=>{d.material=p[0]});return s.forEach((d,x)=>{const _=d.geometry;pE(_,a[x],m),u&&fE(_.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new Wl){t.updateMatrixWorld(!0);const i=(r,o)=>{const a=r.children;for(let c=0,l=a.length;c<l;c++){const u=a[c];u.isOperationGroup?i(u,o):o(u)}},s=r=>{const o=r.children;let a=!1;for(let l=0,u=o.length;l<u;l++){const f=o[l];a=s(f)||a}const c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let l;return i(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return a||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const Yi=[["Baloo Bhaijaan 2","بالو · Baloo",800,"ar"],["Cairo","القاهرة · Cairo",800,"ar"],["Lalezar","لاله‌زار · Lalezar",400,"ar"],["Changa","تشانجا · Changa",800,"ar"],["Reem Kufi","ريم كوفي · Reem Kufi",700,"ar"],["El Messiri","المسيري · Messiri",700,"ar"],["Marhey","مرحي · Marhey",700,"ar"],["Rakkas","رقّاص · Rakkas",400,"ar"],["Aref Ruqaa","رقعة · Ruqaa",700,"ar"],["Amiri","أميري · Amiri",700,"ar"],["Fredoka","Fredoka",700,"en"],["Bungee","Bungee",400,"en"],["Bebas Neue","Bebas Neue",400,"en"],["Pacifico","Pacifico",400,"en"],["Lobster","Lobster",400,"en"],["Permanent Marker","Permanent Marker",400,"en"],["Press Start 2P","Press Start 2P",400,"en"]],gE="/vendor/fonts/css2?"+Yi.map(([n,,t])=>"family="+n.replace(/ /g,"+")+":wght@"+t).join("&")+"&display=swap";function _E(){if(document.getElementById("kidFonts"))return;const n=document.createElement("link");n.id="kidFonts",n.rel="stylesheet",n.href=gE,document.head.appendChild(n)}const pu=n=>Yi.find(t=>t[0]===n)||Yi[0],vp=n=>Yi.map(([t,e,,i])=>'<option value="'+t+'"'+(t===n?" selected":"")+` style="font-family:'`+t+`'">`+(i==="en"?"🔤 ":"ع ")+e+"</option>").join("");async function vo(n,t){const[e,,i]=pu(n);try{await document.fonts.load(i+' 120px "'+e+'"',t||"aبج")}catch{}}_E();const W=n=>document.getElementById(n),xE="٠١٢٣٤٥٦٧٨٩",an=n=>String(n).replace(/\d/g,t=>xE[t]);function Ai(n){const t=new _r;return n.forEach(([e,i],s)=>s?t.lineTo(e,i):t.moveTo(e,i)),t.closePath(),t}const Ua=(n,t,e)=>new Qa(n,e?{depth:Math.max(.2,t-2*e),bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:5,curveSegments:24}:{depth:t,bevelEnabled:!1,curveSegments:24});function Pi(n,t,e){const i=Ua(n,t,Math.min(e||0,t/2-.1));return i.rotateX(-Math.PI/2),i}const pi=33;function yp(n,t){n=Math.max(3,Math.min(pi,n|0));const e=n>=pi;if(!t)return e?new Ee(10,10,20,64):new Ee(10,10,20,n);const i=new _r;if(e)i.absarc(0,0,10,0,Math.PI*2,!1);else for(let s=0;s<n;s++){const r=Math.PI/2+s*2*Math.PI/n;s?i.lineTo(Math.cos(r)*10,Math.sin(r)*10):i.moveTo(Math.cos(r)*10,Math.sin(r)*10)}return Pi(i,20,Math.min(t,9))}const en={box:{ar:"مكعب",rd:1,make:n=>n?new TM(20,20,20,5,Math.min(n,9.5)):new fe(20,20,20)},cyl:{ar:"أسطوانة",rd:1,sides:1,make:()=>new Ee(10,10,20,48)},sphere:{ar:"كورة",make:()=>new br(10,48,32)},cone:{ar:"مخروط",sides:1,make:()=>new Ee(0,10,20,48)},pyramid:{ar:"هرم",make:()=>{const n=new Ee(0,20/Math.SQRT2,20,4);return n.rotateY(Math.PI/4),n}},roof:{ar:"سقف",rd:1,make:n=>Ua(Ai([[-10,-10],[10,-10],[0,10]]),20,Math.min(n||0,4))},tri:{ar:"مثلث",poly:3},pent:{ar:"خماسي",poly:5},hex:{ar:"سداسي",poly:6},hept:{ar:"سباعي",poly:7},oct:{ar:"ثماني",poly:8},oval:{ar:"بيضاوي",rd:1,make:n=>{const t=new _r;return t.absellipse(0,0,14,9,0,Math.PI*2,!1),Pi(t,20,n)}},rhomb:{ar:"معيّن",rd:1,make:n=>Pi(Ai([[0,-12],[8,0],[0,12],[-8,0]]),6,n)},kite:{ar:"طيارة ورق",rd:1,make:n=>Pi(Ai([[0,-13],[9,4],[0,9],[-9,4]]),6,n)},tube:{ar:"ماسورة",make:()=>new fr([[6,-10],[10,-10],[10,10],[6,10],[6,-10]].map(([n,t])=>new J(n,t)),48)},torus:{ar:"حلقة",make:()=>{const n=new Di(7,3,24,64);return n.rotateX(Math.PI/2),n}},star:{ar:"نجمة",rd:1,make:n=>{const t=[];for(let e=0;e<10;e++){const i=e%2?4.5:10,s=Math.PI/2+e*Math.PI/5;t.push([Math.cos(s)*i,Math.sin(s)*i])}return Pi(Ai(t),6,Math.min(n||0,1.2))}},heart:{ar:"قلب",rd:1,make:n=>{const t=new _r;return t.moveTo(0,-9),t.bezierCurveTo(-4,-5,-11,-1,-10,4),t.bezierCurveTo(-9,9,-2,10,0,5),t.bezierCurveTo(2,10,9,9,10,4),t.bezierCurveTo(11,-1,4,-5,0,-9),Pi(t,6,n)}},wedge:{ar:"منحدر",rd:1,make:n=>Ua(Ai([[-10,-10],[10,-10],[-10,10]]),20,Math.min(n||0,3))},halfsph:{ar:"نص كورة",make:()=>{const n=[new J(0,0)];for(let t=0;t<=24;t++){const e=t/24*Math.PI/2;n.push(new J(t===24?0:Math.cos(e)*10,Math.sin(e)*10))}return new fr(n,48)}},capsule:{ar:"كبسولة",make:()=>new au(6,8,10,32)},wheel:{ar:"عجلة",make:()=>{const n=new fr([[2.5,-3],[10,-3],[10,3],[2.5,3],[2.5,-3]].map(([t,e])=>new J(t,e)),48);return n.rotateZ(Math.PI/2),n}},gear:{ar:"ترس",rd:1,make:n=>{const t=[];for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=Math.PI/12;[[8,o-a*.55],[10,o-a*.3],[10,o+a*.3],[8,o+a*.55]].forEach(([c,l])=>t.push([Math.cos(l)*c,Math.sin(l)*c]))}const i=Ai(t),s=new lo;return s.absarc(0,0,2.5,0,Math.PI*2,!0),i.holes.push(s),Pi(i,6,Math.min(n||0,.8))}},arch:{ar:"بوابة",rd:1,make:n=>{const t=[[-10,-10],[-5,-10]];for(let e=0;e<=16;e++){const i=Math.PI-e/16*Math.PI;t.push([Math.cos(i)*5,-3+Math.sin(i)*5])}return t.push([5,-10],[10,-10],[10,10],[-10,10]),Ua(Ai(t),10,Math.min(n||0,2))}},plus:{ar:"علامة +",rd:1,make:n=>Pi(Ai([[-3,-10],[3,-10],[3,-3],[10,-3],[10,3],[3,3],[3,10],[-3,10],[-3,3],[-10,3],[-10,-3],[-3,-3]]),6,Math.min(n||0,1.4))}},si=(n,t,e,i)=>({t:"box",s:n,p:t,c:e,r:[0,0,0]}),rs=(n,t,e,i)=>({t:"cyl",s:n,p:t,c:e,r:i||[0,0,0]}),Gr=Math.PI/2,mi={robo:{ar:"روبو",parts:[rs([.5,.3,.5],[-9,5,0],"#3A3F4B",[0,0,Gr]),rs([.5,.3,.5],[9,5,0],"#3A3F4B",[0,0,Gr]),si([1.2,1.1,.8],[0,17,0],"#1E7BFF"),si([.2,.6,.25],[-14,18,0],"#FF8A1F"),si([.2,.6,.25],[14,18,0],"#FF8A1F"),si([1,.8,.8],[0,36,0],"#00B8D9"),rs([.2,.1,.2],[-4,37,9],"#FFFFFF",[Gr,0,0]),rs([.2,.1,.2],[4,37,9],"#FFFFFF",[Gr,0,0]),si([.4,.1,.1],[0,31.5,8.5],"#3A3F4B"),rs([.1,.3,.1],[0,47,0],"#3A3F4B"),{t:"sphere",s:[.25,.25,.25],p:[0,52.5,0],c:"#E5484D",r:[0,0,0]}]},car:{ar:"عربية",parts:[si([2.4,.4,1.4],[0,9,0],"#E5484D"),si([1.2,.6,1.2],[-3,19,0],"#FFC93C"),...[[-14,-17],[14,-17],[-14,17],[14,17]].map(([n,t])=>rs([.7,.3,.7],[n,7,t],"#3A3F4B",[Gr,0,0]))]},house:{ar:"بيت",parts:[si([1.6,1.2,1.4],[0,12,0],"#FFC93C"),{t:"roof",s:[1.7,.8,1.5],p:[0,32,0],c:"#E5484D",r:[0,0,0]},si([.4,.6,.1],[0,6,14.5],"#8B5A2B")]},tree:{ar:"شجرة",parts:[rs([.4,1,.4],[0,10,0],"#8B5A2B"),{t:"cone",s:[1.6,1.4,1.6],p:[0,34,0],c:"#18B37E",r:[0,0,0]}]}},Wa=()=>getComputedStyle(document.body).fontFamily||"Tahoma, Arial, sans-serif",qr=new Map;function Mp(n,t){const e=t?pu(t):null,i=120,s=document.createElement("canvas"),r=s.getContext("2d"),o=e?e[2]+" "+i+'px "'+e[0]+'", '+Wa():"800 "+i+"px "+Wa(),a=/[\u0600-\u06FF]/.test(n);r.font=o;const c=Math.ceil(r.measureText(n).width)+24,l=Math.ceil(i*1.6);s.width=Math.max(8,c),s.height=l,r.font=o,r.direction=a?"rtl":"ltr",r.textAlign="center",r.textBaseline="middle",r.fillStyle="#000",r.fillText(n,s.width/2,l/2);const u=s.width,f=s.height,h=r.getImageData(0,0,u,f).data,p=(M,C)=>M>=0&&C>=0&&M<u&&C<f&&h[(C*u+M)*4+3]>110,g=new Map,v=(M,C)=>M+","+C,m=(M,C,I,O)=>{const D=v(M,C);(g.get(D)||g.set(D,[]).get(D)).push([I,O])};for(let M=0;M<f;M++)for(let C=0;C<u;C++)p(C,M)&&(p(C,M-1)||m(C,M,C+1,M),p(C+1,M)||m(C+1,M,C+1,M+1),p(C,M+1)||m(C+1,M+1,C,M+1),p(C-1,M)||m(C,M+1,C,M));const d=[];for(const[M,C]of g)for(;C.length;){const[I,O]=M.split(",").map(Number);let[D,U]=[I,O],[z,X]=C.shift();const Z=[[I,O]];for(let G=0;G<2e5;G++){const Q=z-D,tt=X-U;if(D=z,U=X,D===I&&U===O)break;Z.push([D,U]);const lt=g.get(v(D,U));if(!lt||!lt.length)break;let j=0;if(lt.length>1){const et=[[-tt,Q],[Q,tt],[tt,-Q]];j=Math.max(0,lt.findIndex(([vt,bt])=>vt-D===et[0][0]&&bt-U===et[0][1]))}[z,X]=lt.splice(j,1)[0]}Z.length>3&&d.push(Z)}const x=(M,C)=>{if(M.length<3)return M;const[I,O]=[M[0],M[M.length-1]];let D=0,U=0;for(let z=1;z<M.length-1;z++){const[X,Z]=M[z],G=Math.abs((O[1]-I[1])*X-(O[0]-I[0])*Z+O[0]*I[1]-O[1]*I[0])/(Math.hypot(O[0]-I[0],O[1]-I[1])||1);G>U&&(U=G,D=z)}return U>C?x(M.slice(0,D+1),C).slice(0,-1).concat(x(M.slice(D),C)):[I,O]},_=22/i,y=d.map(M=>{const C=Math.floor(M.length/2);return x(M.slice(0,C+1),.9).slice(0,-1).concat(x(M.slice(C).concat([M[0]]),.9).slice(0,-1)).map(([O,D])=>new J((O-u/2)*_,(f/2-D)*_))}).filter(M=>M.length>=3),E=M=>M.reduce((C,I,O)=>C+I.x*M[(O+1)%M.length].y-M[(O+1)%M.length].x*I.y,0)/2,T=(M,C)=>{let I=!1;for(let O=0,D=C.length-1;O<C.length;D=O++){const U=C[O],z=C[D];U.y>M.y!=z.y>M.y&&M.x<(z.x-U.x)*(M.y-U.y)/(z.y-U.y)+U.x&&(I=!I)}return I},b=y.filter(M=>E(M)<0),L=y.filter(M=>E(M)>0),S=b.map(M=>new _r(M));return L.forEach(M=>{let C=-1,I=1/0;b.forEach((O,D)=>{const U=-E(O);U<I&&T(M[0],O)&&(I=U,C=D)}),C>=0&&S[C].holes.push(new lo(M))}),S}function vE(n,t){const e=n+"|"+(t||"");if(qr.has(e))return qr.get(e);if(t){const o=pu(t);document.fonts.check(o[2]+' 120px "'+o[0]+'"',n)||vo(t,n).then(()=>{document.fonts.check(o[2]+' 120px "'+o[0]+'"',n)&&(qr.delete(e),io.clear(),Ie())})}const i=Mp(n||"?",t),s=i.length?new Qa(i,{depth:5,bevelEnabled:!1,curveSegments:1}):new fe(10,10,5);s.computeBoundingBox();const r=new w;return s.boundingBox.getCenter(r),s.translate(-r.x,-r.y,-r.z),s.computeBoundingBox(),s.computeVertexNormals(),qr.set(e,s),s}const Wi={},qi={},yE=n=>{n.computeBoundingBox();const t=new w;return n.boundingBox.getCenter(t),n.translate(-t.x,-t.y,-t.z),n.computeBoundingBox(),n.computeVertexNormals(),n},Ml=new Map;function ME(n){const t=n.n,e=n.rd||0;if(!t&&!e&&Wi[n.t])return Wi[n.t];const i=n.t+"|"+(t||"")+"|"+e;if(Ml.has(i))return Ml.get(i);let s;const r=en[n.t];return n.t==="poly"||n.t==="cyl"&&(t||e)?s=yp(t||pi,e):n.t==="cone"?s=t&&t<pi?new Ee(0,10,20,t):en.cone.make():r&&r.make?s=r.make(e):s=Wi[n.t],s=yE(s),Ml.set(i,s),s}for(const n in en){const t=en[n].poly?yp(en[n].poly,0):en[n].make(0);t.computeBoundingBox();const e=new w;t.boundingBox.getCenter(e),t.translate(-e.x,-e.y,-e.z),t.computeBoundingBox(),t.computeVertexNormals(),Wi[n]=t;const i=new w;t.boundingBox.getSize(i),qi[n]=i}const Sp={box:'<rect x="10" y="14" width="26" height="26" rx="2" fill="#4F8BFF"/><path d="M10 14l8-8h26l-8 8z" fill="#8FB6FF"/><path d="M36 14l8-8v26l-8 8z" fill="#2E64D6"/>',cyl:'<ellipse cx="24" cy="12" rx="14" ry="5" fill="#FFB547"/><path d="M10 12v24a14 5 0 0 0 28 0V12a14 5 0 0 1-28 0z" fill="#F08C00"/>',sphere:'<circle cx="24" cy="24" r="16" fill="#18B37E"/><circle cx="18" cy="18" r="5" fill="#7FE3B8"/>',cone:'<path d="M24 6L38 38a14 5 0 0 1-28 0z" fill="#E5484D"/><ellipse cx="24" cy="38" rx="14" ry="5" fill="#B5262B"/>',pyramid:'<path d="M24 6L8 36l16 6z" fill="#F7C948"/><path d="M24 6l16 30-16 6z" fill="#D4A017"/>',roof:'<path d="M18 16L34 8L44 30L28 40z" fill="#7A3FB0"/><path d="M4 40L18 16L28 40z" fill="#B06AE0"/><path d="M18 16L34 8" stroke="#E2C6F7" stroke-width="1.5"/>',tube:'<ellipse cx="24" cy="12" rx="14" ry="5" fill="#9AA6B8"/><ellipse cx="24" cy="12" rx="7" ry="2.5" fill="#EAF0FB"/><path d="M10 12v24a14 5 0 0 0 28 0V12a14 5 0 0 1-28 0z" fill="#6B778A"/>',torus:'<ellipse cx="24" cy="24" rx="17" ry="9" fill="#FF7AB6"/><ellipse cx="24" cy="23" rx="8" ry="3.5" fill="#EAF0FB"/>',star:'<path d="M24 5l5.6 12 13 1.4-9.8 8.8 2.8 12.8L24 33.6 12.4 40l2.8-12.8L5.4 18.4l13-1.4z" fill="#FFC93C"/>',heart:'<path d="M24 41S7 30 7 18a8.5 8.5 0 0 1 17-2 8.5 8.5 0 0 1 17 2c0 12-17 23-17 23z" fill="#FF4D6D"/>',wedge:'<path d="M8 40h26V14z" fill="#18B37E"/><path d="M34 14l8-6v26l-8 6z" fill="#0E8A60"/><path d="M8 40L34 14l8-6L16 34z" fill="#5FD6A8"/>',halfsph:'<path d="M6 34a18 18 0 0 1 36 0z" fill="#1E7BFF"/><ellipse cx="24" cy="34" rx="18" ry="5" fill="#1559C4"/><circle cx="17" cy="24" r="4" fill="#8FB6FF"/>',hex:'<path d="M16 8h16l8 8v16l-8 8H16l-8-8V16z" fill="#5B3DF5"/><path d="M16 8h16l8 8H8z" fill="#9C88FF"/>',tri:'<path d="M24 6L42 40H6z" fill="#7CC63B"/><path d="M24 6L42 40H30z" fill="#5A9E22"/>',pent:'<path d="M24 5l18 13-7 22H13L6 18z" fill="#8B5A2B"/><path d="M24 5l18 13-7 22H24z" fill="#6E4520"/>',hept:'<path d="M24 5l14 7 4 15-10 13H18L8 27l4-15z" fill="#FF1FA6"/><path d="M24 5l14 7 4 15-10 13H24z" fill="#D10F86"/>',oct:'<path d="M17 5h14l10 10v14L31 41H17L7 29V15z" fill="#FF8A1F"/><path d="M24 5h7l10 10v14L31 41h-7z" fill="#E06E00"/>',oval:'<ellipse cx="24" cy="24" rx="20" ry="13" fill="#7B2FD6"/><ellipse cx="18" cy="19" rx="7" ry="3.5" fill="#B48CF0"/>',rhomb:'<path d="M24 4l11 20-11 20-11-20z" fill="#22E5F0"/><path d="M24 4l11 20-11 20z" fill="#12B8C2"/>',kite:'<path d="M24 44L39 15L24 4L9 15z" fill="#FF4F7B"/><path d="M24 44L39 15L24 4z" fill="#D9325D"/>',capsule:'<rect x="15" y="5" width="18" height="38" rx="9" fill="#FF7AB6"/><rect x="19" y="9" width="5" height="14" rx="2.5" fill="#FFC2DD"/>',wheel:'<circle cx="24" cy="24" r="17" fill="#3A3F4B"/><circle cx="24" cy="24" r="10" fill="#9AA6B8"/><circle cx="24" cy="24" r="3.5" fill="#3A3F4B"/>',gear:'<path d="M21 4h6l1 5 4 2 4-3 4 4-3 4 2 4 5 1v6l-5 1-2 4 3 4-4 4-4-3-4 2-1 5h-6l-1-5-4-2-4 3-4-4 3-4-2-4-5-1v-6l5-1 2-4-3-4 4-4 4 3 4-2z" fill="#9AA6B8"/><circle cx="24" cy="24" r="6" fill="#EAF0FB"/>',arch:'<path d="M6 42V8h36v34H31V28a7 7 0 0 0-14 0v14z" fill="#FF8A1F"/>',plus:'<path d="M19 6h10v13h13v10H29v13H19V29H6V19h13z" fill="#E5484D"/>',robo:'<rect x="13" y="6" width="22" height="16" rx="3" fill="#00B8D9"/><circle cx="19" cy="14" r="2.6" fill="#fff"/><circle cx="29" cy="14" r="2.6" fill="#fff"/><path d="M24 6V2" stroke="#3A3F4B" stroke-width="2"/><circle cx="24" cy="2.5" r="2" fill="#E5484D"/><rect x="11" y="23" width="26" height="15" rx="3" fill="#1E7BFF"/><rect x="5" y="25" width="5" height="10" rx="2" fill="#FF8A1F"/><rect x="38" y="25" width="5" height="10" rx="2" fill="#FF8A1F"/><circle cx="16" cy="42" r="4.5" fill="#3A3F4B"/><circle cx="32" cy="42" r="4.5" fill="#3A3F4B"/>',car:'<rect x="14" y="10" width="16" height="12" rx="2" fill="#FFC93C"/><rect x="4" y="20" width="40" height="12" rx="3" fill="#E5484D"/><circle cx="13" cy="35" r="6" fill="#3A3F4B"/><circle cx="35" cy="35" r="6" fill="#3A3F4B"/>',house:'<path d="M4 22L24 6l20 16z" fill="#E5484D"/><rect x="9" y="22" width="30" height="20" fill="#FFC93C"/><rect x="20" y="30" width="8" height="12" fill="#8B5A2B"/>',tree:'<path d="M24 4L40 34H8z" fill="#18B37E"/><rect x="20" y="34" width="8" height="10" fill="#8B5A2B"/>'},Ep=["#E5484D","#FF8A1F","#FFC93C","#18B37E","#1E7BFF","#5B3DF5","#FF7AB6","#8B5A2B","#FFFFFF","#9AA6B8","#3A3F4B","#00B8D9"],ie=W("c3"),gi=W("stage3"),mu=new iu({canvas:ie,antialias:!0,preserveDrawingBuffer:!0});mu.setPixelRatio(Math.min(2,devicePixelRatio));const ln=new Zd;ln.background=new $t("#EAF0FB");const re=new dn(45,1,1,5e3),bp=new w(170,150,210);re.position.copy(bp);ln.add(new cM("#ffffff","#b8c4dc",1.1));const Tp=new hM("#ffffff",1.4);Tp.position.set(120,260,160);ln.add(Tp);const gu=new _t(new go(200,200),new xo({color:"#FFFFFF",roughness:1}));gu.rotation.x=-Math.PI/2;gu.position.y=-.05;ln.add(gu);const SE=new sp(200,40,"#C9D5EA","#DDE5F3");ln.add(SE);const wp=new sp(200,20,"#9FB2D6","#9FB2D6");wp.position.y=.02;ln.add(wp);const Qt=new mM(re,ie);Qt.target.set(0,10,0);Qt.enableDamping=!0;Qt.mouseButtons={LEFT:-1,MIDDLE:Ci.PAN,RIGHT:Ci.ROTATE};Qt.maxDistance=1200;Qt.minDistance=40;Qt.update();{const n=new Map;let t=null;const e=()=>{const s=[...n.values()];return[s.reduce((r,o)=>r+o[0],0)/s.length,s.reduce((r,o)=>r+o[1],0)/s.length]};ie.addEventListener("pointerdown",s=>{s.pointerType!=="mouse"&&(n.set(s.pointerId,[s.clientX,s.clientY]),n.size>=3&&(Qt.enabled=!1,t=e(),s.stopImmediatePropagation()))},!0),ie.addEventListener("pointermove",s=>{if(!n.has(s.pointerId)||(n.set(s.pointerId,[s.clientX,s.clientY]),!t||n.size<3))return;const r=e(),o=r[0]-t[0],a=r[1]-t[1];t=r;const c=ie.clientHeight||1,l=re.position.distanceTo(Qt.target),u=2*l*Math.tan(bs.degToRad(re.fov/2))/c,f=new w().setFromMatrixColumn(re.matrix,0),h=new w().setFromMatrixColumn(re.matrix,1),p=f.multiplyScalar(-o*u).add(h.multiplyScalar(a*u));re.position.add(p),Qt.target.add(p),s.stopImmediatePropagation()},!0);const i=s=>{n.delete(s.pointerId)&&(n.size<3&&t&&(t=null,n.size===0&&(Qt.enabled=!0)),n.size===0&&(Qt.enabled=!0))};ie.addEventListener("pointerup",i,!0),ie.addEventListener("pointercancel",i,!0)}const ye=new gM(re,ie);ye.setSize(.9);ln.add(ye);const Yl=new ui;ln.add(Yl);function Ap(){const n=gi.clientWidth,t=gi.clientHeight;mu.setSize(n,t,!1),re.aspect=n/Math.max(1,t),re.updateProjectionMatrix()}new ResizeObserver(Ap).observe(gi);Ap();let Rp=0;const Pp=()=>performance.now()<Rp;document.querySelector(".shapes").addEventListener("scroll",()=>{Rp=performance.now()+180},{passive:!0});(function n(){Pp()||(Qt.update(),CE&&DE(),mu.render(ln,re)),requestAnimationFrame(n)})();let Zt=[],dt=[];const ji=()=>Math.random().toString(36).slice(2,9),_e=new Map,no=new mE;no.attributes=["position","normal"];no.useGroups=!1;const io=new Map;function ic(n){const t=new Kt;return t.compose(new w(...n.p),new Ne().setFromEuler(new Ts(...n.r)),new w(...n.s)),t}function EE(n){const t=new De,e=n.index?n.toNonIndexed():n;return t.setAttribute("position",e.getAttribute("position").clone()),t.computeVertexNormals(),t}function Cp(n){const t=JSON.stringify([n.kids,n.o]);if(io.has(t))return io.get(t);let e=null,i=null;for(const o of n.kids){const a=EE(_u(o)),c=ic(o);if(a.applyMatrix4(c),c.determinant()<0){const u=a.getAttribute("position");for(let f=0;f<u.count;f+=3){const h=u.getX(f+1),p=u.getY(f+1),g=u.getZ(f+1);u.setXYZ(f+1,u.getX(f+2),u.getY(f+2),u.getZ(f+2)),u.setXYZ(f+2,h,p,g)}a.computeVertexNormals()}const l=new Wl(a);l.updateMatrixWorld(),o.h?i=i?no.evaluate(i,l,Xl):l:e=e?no.evaluate(e,l,Xl):l}const r=(e?i?no.evaluate(e,i,pp):e:i).geometry.clone();return r.translate(-n.o[0],-n.o[1],-n.o[2]),r.computeVertexNormals(),r.computeBoundingBox(),io.set(t,r),r}const _u=n=>n.t==="group"?Cp(n):n.t==="text"?vE(n.txt,n.fnt):ME(n),sc=n=>{if(n.t!=="group"&&n.t!=="text"&&!n.n&&!n.rd&&qi[n.t])return qi[n.t];const t=new w;return _u(n).boundingBox.getSize(t),t},rc=new xo({color:"#AEB7C6",transparent:!0,opacity:.6,roughness:.7,depthWrite:!1,side:tn});rc.onBeforeCompile=n=>{const t=Math.min(2,devicePixelRatio||1).toFixed(2);n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (mod(gl_FragCoord.x + gl_FragCoord.y, 22.0 * `+t+") < 11.0 * "+t+") gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.97), 0.55);")};const bE=new _o({color:"#4A5568",transparent:!0,opacity:.85,depthWrite:!1}),od=new Map,TE=n=>{let t=od.get(n.uuid);return t||(t=new Gy(n,25),od.set(n.uuid,t)),t};function wE(n){return n.h?rc:new xo({color:n.c,roughness:.55,metalness:.05,side:tn})}function Ie(){ye.detach(),_e.forEach(n=>{Yl.remove(n),n.material!==rc&&n.material.dispose()}),_e.clear();for(const n of Zt){const t=new _t(_u(n),wE(n));if(t.position.set(...n.p),t.rotation.set(...n.r),t.scale.set(...n.s),t.userData.id=n.id,t.renderOrder=n.h?2:1,n.h){const e=new su(TE(t.geometry),bE);e.raycast=()=>{},e.renderOrder=3,t.add(e)}Yl.add(t),_e.set(n.id,t)}dt=dt.filter(n=>_e.has(n)),zn()}function AE(n){const t=_e.get(n.id);n.p=t.position.toArray().map(zt),n.r=[t.rotation.x,t.rotation.y,t.rotation.z],n.s=t.scale.toArray()}const zt=n=>Math.round(n*10)/10,te=n=>Zt.find(t=>t.id===n);function Ue(n){const t=_e.get(n.id);return t.updateMatrixWorld(),new le().setFromObject(t)}let yn=[],An=-1;function oe(n=!0){yn=yn.slice(0,An+1),yn.push(JSON.stringify(Zt)),yn.length>80&&yn.shift(),An=yn.length-1,bu(),yr?XE():n&&Zi(!1)}function Lp(n){Zt=JSON.parse(n),dt=[],Ie(),bu(),Zi(!1)}W("undoBtn").onclick=()=>{An>0&&(An--,Lp(yn[An]))};W("redoBtn").onclick=()=>{An<yn.length-1&&(An++,Lp(yn[An]))};const Dp="robo-lab-3d";let Pe=(()=>{try{return JSON.parse(localStorage.getItem(Dp))||null}catch{return null}})()||{cur:null,list:[]};const xu=()=>{try{return localStorage.setItem(Dp,JSON.stringify(Pe)),!0}catch{return!1}},Ip=()=>Pe.list.find(n=>n.id===Pe.cur);function Zi(n){if(yr)return;let t=Ip();t||(t={id:ji(),name:"تصميمي",objs:[],t:0},Pe.list.unshift(t),Pe.cur=t.id),t.objs=Zt,t.name=(W("pname").value||"").trim()||"تصميمي",t.t=Date.now();const e=xu();n&&be(e?"💾 اتحفظ":"مقدرتش أحفظ على الجهاز ده")}function po(n){const t=Pe.list.find(e=>e.id===n);t&&(Pe.cur=n,xu(),W("pname").value=t.name,Zt=JSON.parse(JSON.stringify(t.objs||[])),dt=[],Ie(),yn=[],An=-1,oe(!1))}function Up(){Zi(!1);const n={id:ji(),name:"تصميم "+an(Pe.list.length+1),objs:[],t:Date.now()};Pe.list.unshift(n),po(n.id)}W("pname").addEventListener("change",()=>Zi(!1));addEventListener("beforeunload",()=>Zi(!1));const so=[];function zn(){so.forEach(n=>ln.remove(n)),so.length=0,dt.forEach(n=>{const t=new dM(_e.get(n),"#FF8A1F");ln.add(t),so.push(t)}),dt.length===1&&!te(dt[0]).lk?ye.attach(_e.get(dt[0])):ye.detach(),xi(),bu()}function _i(){so.forEach(n=>n.update())}function Yn(n,t){n?t?dt=dt.includes(n)?dt.filter(e=>e!==n):dt.concat(n):dt=[n]:dt=[],zn()}const qn=new tc,ad=new J;let In=null,He=null,Xa=0,Ya=!1,Aa={id:null,t:0};function RE(n){const t=document.querySelector(".txtEdit");t&&t.remove();const e=Ue(n),i=new w;e.getCenter(i),i.y=e.max.y;const s=i.project(re),r=ie.getBoundingClientRect(),o=gi.getBoundingClientRect(),a=document.createElement("input");a.className="txtEdit",a.dir="auto",a.maxLength=24,a.value=n.txt||"",a.setAttribute("aria-label","عدّل النص"),a.style.left=r.left-o.left+(s.x+1)/2*r.width+"px",a.style.top=r.top-o.top+(1-s.y)/2*r.height+"px",gi.appendChild(a),a.focus(),a.select();let c=!1;const l=u=>{if(c)return;c=!0;const f=a.value.trim().slice(0,24);a.remove(),u&&f&&f!==n.txt&&dt[0]===n.id&&(W("pTxt").value=f,W("pTxt").dispatchEvent(new Event("change")))};a.addEventListener("keydown",u=>{u.stopPropagation(),u.key==="Enter"?l(!0):u.key==="Escape"&&l(!1)}),a.addEventListener("blur",()=>l(!0)),be("✍️ اكتب الكلام الجديد ودوس Enter")}const As=n=>{const t=ie.getBoundingClientRect();ad.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),qn.setFromCamera(ad,re)};let Un=null;const xr=document.createElement("div");xr.className="marquee";xr.hidden=!0;gi.appendChild(xr);ie.addEventListener("contextmenu",n=>n.preventDefault());ie.addEventListener("pointerdown",n=>{if(In=[n.clientX,n.clientY],n.button!==0||ye.axis)return;As(n);const t=qn.intersectObjects([..._e.values()],!1)[0];if(!t){(n.pointerType==="mouse"||Bn)&&(Un={x:n.clientX,y:n.clientY,add:n.shiftKey||Bn,moved:!1},ie.setPointerCapture(n.pointerId),Bn&&(Qt.enabled=!1,n.stopImmediatePropagation()));return}if(n.shiftKey||Bn)return;const e=t.object.userData.id,i=te(e);if(!i)return;if(clearTimeout(Xa),Ya=!1,n.pointerType!=="mouse"){const a=dt.slice();Xa=setTimeout(()=>{if(!(He&&He.moved)){Ya=!0,He=null,Qt.enabled=!0,dt=a.includes(e)?a.filter(c=>c!==e):a.concat(e),zn();try{navigator.vibrate&&navigator.vibrate(30)}catch{}be(dt.length>1?"☑ اخترت "+an(dt.length)+" أشكال — اضغط مطوّل على شكل تاني تضيفه":"☑ اضغط مطوّل على شكل تاني عشان تختار الاتنين")}},480)}dt.includes(e)||Yn(e);const s=dt.map(te).filter(a=>a&&!a.lk);if(!s.length){i.lk&&be("🔒 الشكل مقفول");return}const r=new rn(new w(0,1,0),-t.point.y),o=new w;qn.ray.intersectPlane(r,o)&&(He={plane:r,start:o,from:s.map(a=>[a,a.p.slice()]),moved:!1},Qt.enabled=!1,ie.setPointerCapture(n.pointerId))});ie.addEventListener("pointermove",n=>{if(Un){const a=gi.getBoundingClientRect(),c=Math.min(Un.x,n.clientX),l=Math.min(Un.y,n.clientY),u=Math.abs(n.clientX-Un.x),f=Math.abs(n.clientY-Un.y);u+f>6&&(Un.moved=!0),Un.moved&&(xr.hidden=!1,Object.assign(xr.style,{left:c-a.left+"px",top:l-a.top+"px",width:u+"px",height:f+"px"}));return}if(!He)return;As(n);const t=new w;if(!qn.ray.intersectPlane(He.plane,t))return;let e=t.x-He.start.x,i=t.z-He.start.z;Math.hypot(e,i)>.5&&(He.moved=!0);const s=hi||0;s&&(e=Math.round(e/s)*s,i=Math.round(i/s)*s),He.moved&&clearTimeout(Xa),He.from.forEach(([a,c])=>{a.p[0]=zt(c[0]+e),a.p[2]=zt(c[2]+i),_e.get(a.id).position.set(...a.p)});const[r,o]=yu(He.from.map(a=>a[0]));(r||o)&&He.from.forEach(([a])=>{a.p[0]=zt(a.p[0]+r),a.p[2]=zt(a.p[2]+o),_e.get(a.id).position.set(...a.p)}),oc(!!(r||o)),_i(),ie.style.cursor="grabbing"});ie.addEventListener("pointerup",n=>{if(Un){const i=Un;if(Un=null,xr.hidden=!0,Qt.enabled=!0,i.moved){const s=ie.getBoundingClientRect(),r=Math.min(i.x,n.clientX),o=Math.max(i.x,n.clientX),a=Math.min(i.y,n.clientY),c=Math.max(i.y,n.clientY),l=Zt.filter(u=>{const f=Ue(u),h=new w;f.getCenter(h),h.project(re);const p=s.left+(h.x+1)/2*s.width,g=s.top+(1-h.y)/2*s.height;return h.z<1&&p>=r&&p<=o&&g>=a&&g<=c}).map(u=>u.id);dt=i.add?[...new Set(dt.concat(l))]:l,zn(),l.length&&be("اخترت "+an(l.length)+(l.length>1?" أشكال":" شكل")),In=null;return}}if(clearTimeout(Xa),oc(!1),Ya){Ya=!1,He=null,Qt.enabled=!0,In=null;return}if(He){const i=He.moved;if(He=null,Qt.enabled=!0,ie.style.cursor="",i){In=null,oe(),xi();return}}if(!In||Math.hypot(n.clientX-In[0],n.clientY-In[1])>5||ye.dragging){In=null;return}In=null,As(n);const t=qn.intersectObjects([..._e.values()],!1)[0],e=n.shiftKey||Bn;if(t){const i=t.object.userData.id,s=performance.now(),r=te(i);if(!e&&Aa.id===i&&s-Aa.t<450&&r&&r.t==="text"&&!r.lk){Aa={id:null,t:0},dt.includes(i)||Yn(i),RE(r);return}Aa={id:i,t:s}}t&&!e&&dt.includes(t.object.userData.id)||!t&&Bn||Yn(t?t.object.userData.id:null,e)});ie.addEventListener("pointermove",n=>{He||ye.dragging||n.buttons||(As(n),ie.style.cursor=qn.intersectObjects([..._e.values()],!1).length?"grab":"")});const vu=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,t])=>({k:"c",sx:n,sz:t})).concat([[0,-1],[1,0],[0,1],[-1,0]].map(([n,t])=>({k:"s",sx:n,sz:t})),[{k:"h",sx:0,sz:0}]),Wn=new ui;ln.add(Wn);const Vr=n=>new ws({color:n,depthTest:!1,depthWrite:!1,transparent:!0}),cd=new br(1,20,14),ld=new br(1,20,14,0,Math.PI);function PE(n){const t=new ui,e=new _t(cd,Vr(n==="c"?"#2B2F3A":"#FFFFFF"));if(e.scale.setScalar(1.4),e.renderOrder=20,t.add(e),n==="h"){const i=new _t(ld,Vr("#FFFFFF")),s=new _t(ld,Vr("#2B2F3A"));s.rotation.y=Math.PI,i.renderOrder=s.renderOrder=21,t.add(i,s),e.material=Vr("#FF8A1F")}else{const i=new _t(cd,Vr(n==="c"?"#FFFFFF":"#2B2F3A"));i.renderOrder=21,t.add(i)}return t}vu.forEach(n=>Wn.add(PE(n.k)));Wn.visible=!1;var CE=!0;let ql="",ud=null,zi=null;const ki=document.createElement("div");ki.className="hlabel";ki.hidden=!0;gi.appendChild(ki);function LE(n,t,e){const i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2;return n.k==="h"?new w(i,t.max.y,s):new w(n.sx?n.sx>0?t.max.x:t.min.x:i,t.min.y,n.sz?n.sz>0?t.max.z:t.min.z:s)}function DE(){const n=dt.length===1?te(dt[0]):null,t=n&&!n.lk?_e.get(n.id):null;if(Wn.visible=!!t,!t)return;t.updateMatrixWorld();const e=n.id+"|"+t.geometry.uuid+"|"+t.matrixWorld.elements.map(r=>r.toFixed(3)).join(",");e!==ql&&(ql=e,ud=new le().setFromObject(t));const i=2*Math.tan(bs.degToRad(re.fov/2))/Math.max(1,ie.clientHeight),s=matchMedia("(pointer:coarse)").matches?1.35:1;vu.forEach((r,o)=>{const a=Wn.children[o],c=LE(r,ud),l=re.position.distanceTo(c),u=l*i*(r.k==="h"?7.5:5.2)*s;r.k==="h"&&(c.y+=u*2.4),a.position.copy(c),a.scale.setScalar(u)})}const Np=n=>{const t=n.clone().project(re),e=ie.getBoundingClientRect();return[e.left+(t.x+1)/2*e.width,e.top+(1-t.y)/2*e.height,t.z]};ie.addEventListener("pointerdown",n=>{if(!Wn.visible||n.button!==0||zi)return;const t=n.pointerType==="mouse"?13:26;let e=-1,i=t;if(Wn.children.forEach((p,g)=>{const[v,m,d]=Np(p.position),x=Math.hypot(v-n.clientX,m-n.clientY);d<1&&x<i&&(i=x,e=g)}),e<0)return;n.stopImmediatePropagation(),n.preventDefault(),In=null;const s=te(dt[0]),r=_e.get(s.id),o=vu[e],a=new le().setFromObject(r),c=new w;a.getSize(c);const l=Wn.children[e].position.clone(),u=new rn;o.k==="h"?u.setFromNormalAndCoplanarPoint(new w(re.position.x-l.x,0,re.position.z-l.z).normalize(),l):u.set(new w(0,1,0),-a.min.y),As(n);const f=new w;if(!qn.ray.intersectPlane(u,f))return;const h=[0,1,2].map(p=>{const g=new w(p===0?1:0,p===1?1:0,p===2?1:0).applyQuaternion(r.quaternion),v=[Math.abs(g.x),Math.abs(g.y),Math.abs(g.z)];return v.indexOf(Math.max(...v))});zi={o:s,m:r,h:o,B0:a,d0:c,s0:s.s.slice(),p0:s.p.slice(),plane:u,start:f,axisMap:h},Qt.enabled=!1;try{ie.setPointerCapture(n.pointerId)}catch{}},!0);ie.addEventListener("pointermove",n=>{if(!zi)return;n.stopImmediatePropagation(),As(n);const t=new w;if(!qn.ray.intersectPlane(zi.plane,t))return;const{o:e,m:i,h:s,B0:r,d0:o,s0:a,p0:c,axisMap:l}=zi,u=t.sub(zi.start),f=hi||.1,h=E=>Math.max(1,Math.round(E/f)*f);let p=o.x,g=o.y,v=o.z;if(s.k==="h")g=h(o.y+u.y);else if(s.sx&&(p=h(o.x+u.x*s.sx)),s.sz&&(v=h(o.z+u.z*s.sz)),s.k==="c"&&(Ui||yo||n.shiftKey)){const E=Math.max(p/o.x,v/o.z);p=h(o.x*E),v=h(o.z*E)}const m=[p/(o.x||1),g/(o.y||1),v/(o.z||1)];e.s=a.map((E,T)=>E*m[l[T]]),e.p=c.slice(),i.scale.set(...e.s),i.position.set(...e.p),i.updateMatrixWorld();const d=new le().setFromObject(i),x=(E,T)=>(E.min[T]+E.max[T])/2,_=(E,T)=>T>0?r.min[E]-d.min[E]:T<0?r.max[E]-d.max[E]:x(r,E)-x(d,E);e.p=[zt(c[0]+_("x",s.sx)),zt(c[1]+r.min.y-d.min.y),zt(c[2]+_("z",s.sz))],i.position.set(...e.p),_i();const y=gi.getBoundingClientRect();ki.hidden=!1,ki.textContent=s.k==="h"?"الارتفاع "+an(zt(g))+" ملّي":s.k==="s"?(s.sx?"العرض "+an(zt(p)):"العمق "+an(zt(v)))+" ملّي":an(zt(p))+" × "+an(zt(v))+" ملّي",ki.style.left=n.clientX-y.left+16+"px",ki.style.top=n.clientY-y.top-34+"px"},!0);const Fp=n=>{zi&&(n.stopImmediatePropagation(),zi=null,ki.hidden=!0,Qt.enabled=!0,In=null,oe(),xi(),_i())};ie.addEventListener("pointerup",Fp,!0);ie.addEventListener("pointercancel",Fp,!0);let hi=1,ds=!0;const hd=3;function yu(n){if(!ds||!n.length)return[0,0];const t=new Set(n.map(r=>r.id)),e=Zt.filter(r=>!t.has(r.id));if(!e.length)return[0,0];const i=new le;n.forEach(r=>i.union(Ue(r)));const s=e.map(Ue);return["x","z"].map((r,o)=>{const a=o?"x":"z",c=[i.min[r],i.max[r],(i.min[r]+i.max[r])/2];let l=hd+1;return s.forEach(u=>{Math.max(u.min[a]-i.max[a],i.min[a]-u.max[a])>25||[u.min[r],u.max[r],(u.min[r]+u.max[r])/2].forEach(f=>c.forEach(h=>{const p=f-h;Math.abs(p)<Math.abs(l)&&(l=p)}))}),Math.abs(l)<=hd&&Math.abs(l)>.01?l:0})}let fd=!1;function oc(n){n!==fd&&(fd=n,so.forEach(t=>t.material.color.set(n?"#18B37E":"#FF8A1F")))}function Op(){ye.setTranslationSnap(hi||null),ye.setRotationSnap(bs.degToRad(15)),ye.setScaleSnap(null)}Op();W("snapSel").onchange=()=>{hi=+W("snapSel").value,Op()};W("magBtn").onclick=()=>{ds=!ds,W("magBtn").classList.toggle("on",ds),W("magBtn").setAttribute("aria-pressed",String(ds)),be(ds?"🧲 المغناطيس شغال: الأشكال بتلزق في بعض لما تقرّب":"المغناطيس اتقفل: الشكل بيتحرك بحرية")};ye.addEventListener("dragging-changed",n=>{if(Qt.enabled=!n.value,n.value||oc(!1),!n.value&&dt.length===1){const t=te(dt[0]);if(AE(t),ye.mode==="scale"&&hi){const e=sc(t);t.s=t.s.map((i,s)=>Math.max(1,Math.round(e.getComponent(s)*i/hi)*hi)/e.getComponent(s)),_e.get(t.id).scale.set(...t.s)}ye.mode!=="translate"&&Mo(t),oe(),xi(),_i()}});let yo=!1,Ui=!1,cs=null;addEventListener("keydown",n=>{n.key==="Shift"&&(yo=!0)});addEventListener("keyup",n=>{n.key==="Shift"&&(yo=!1)});addEventListener("blur",()=>yo=!1);ye.addEventListener("mouseDown",()=>{const n=ye.object;cs=n?n.scale.clone():null});ye.addEventListener("objectChange",()=>{const n=ye.object;if(n&&ye.mode==="scale"&&(yo||Ui)&&cs){const t=(ye.axis||"X").replace(/[^XYZ]/g,"")[0]||"X",e=t.toLowerCase(),i=cs[e]?n.scale[e]/cs[e]:1;n.scale.set(cs.x*i,cs.y*i,cs.z*i)}if(n&&ye.mode==="translate"&&ye.dragging&&dt.length===1){const t=te(dt[0]);if(t){const[e,i]=yu([t]);n.position.x+=e,n.position.z+=i,oc(!!(e||i))}}_i()});function ro(n){ye.setMode(n),document.querySelectorAll(".tb.mode").forEach(t=>t.classList.toggle("on",t.dataset.mode===n))}document.querySelectorAll(".tb.mode").forEach(n=>n.onclick=()=>ro(n.dataset.mode));function Mo(n){const t=Ue(n);t.min.y<0&&(n.p[1]=zt(n.p[1]-t.min.y),_e.get(n.id).position.y=n.p[1])}function Bp(){dt.length&&(dt.forEach(n=>{const t=te(n),e=Ue(t);t.p[1]=zt(t.p[1]-e.min.y),_e.get(n).position.y=t.p[1]}),_i(),oe())}W("dropBtn").onclick=Bp;function zp(n,t){const e=Zt.map(i=>Ue(i));for(let i=0;i<6;i++)for(let s=0;s<Math.max(1,i*8);s++){const r=s/Math.max(1,i*8)*Math.PI*2,o=Math.round(Math.cos(r)*i*30/5)*5,a=Math.round(Math.sin(r)*i*30/5)*5,c=new le(new w(o-n/2,0,a-t/2),new w(o+n/2,1,a+t/2));if(!e.some(l=>l.intersectsBox(c)))return[o,a]}return[0,0]}function So(n,t,e,i){if(mi[n])return IE(n,i);const s=n==="text"?W("txtFont").value:null,r=n==="text"?sc({t:n,txt:e,fnt:s}):qi[n],[o,a]=i||zp(r.x,r.z),c=i&&i[2]||0,l={id:ji(),t:n,c:t?"#8E9AAF":Ep[Zt.length%7],h:!!t,p:[o,zt(c+r.y/2),a],r:[0,0,0],s:[1,1,1]};en[n]&&en[n].poly&&(l.t="poly",l.n=en[n].poly),n==="text"&&(l.txt=e,s&&s!==Yi[0][0]&&(l.fnt=s)),Zt.push(l),Ie(),Yn(l.id),oe()}function kp(n){const t=new le;return mi[n].parts.forEach(e=>{const i=new _t(Wi[e.t]);i.position.set(...e.p),i.rotation.set(...e.r),i.scale.set(...e.s),i.updateMatrixWorld(),t.union(new le().setFromObject(i))}),t}function IE(n,t){const e=kp(n),i=new w;e.getSize(i);const[s,r]=t||zp(i.x,i.z),o=t&&t[2]||0,a=mi[n].parts.map(c=>({id:ji(),t:c.t,c:c.c,h:!1,p:[zt(c.p[0]+s),zt(c.p[1]+o-e.min.y),zt(c.p[2]+r)],r:c.r.slice(),s:c.s.slice()}));Zt.push(...a),Ie(),dt=a.map(c=>c.id),zn(),oe(),be("✨ "+mi[n].ar+" جاهز! كل جزء تقدر تغيّره، أو دوس «جمّع» يبقى قطعة واحدة")}function Hp(){if(!dt.length)return;const n=[];dt.forEach(t=>{const e=JSON.parse(JSON.stringify(te(t)));e.id=ji(),e.p[0]+=25,e.p[2]+=25,e.kids&&e.kids.forEach(i=>{i.p[0]+=25,i.p[2]+=25}),e.o&&(e.o[0]+=25,e.o[2]+=25),Zt.push(e),n.push(e.id)}),Ie(),dt=n,zn(),oe()}function Gp(){if(dt.length){if(dt.some(n=>te(n).lk)){be("🔒 فيه شكل مقفول. افتح القفل الأول");return}Zt=Zt.filter(n=>!dt.includes(n.id)),dt=[],Ie(),oe()}}function ac(){if(dt.length<2){be("اختار شكلين أو أكتر الأول (Shift + ضغطة)");return}const n=[];Zt.filter(o=>dt.includes(o.id)).forEach(o=>{if(o.t==="group"){const a=ic(o).multiply(new Kt().makeTranslation(-o.o[0],-o.o[1],-o.o[2]));o.kids.forEach(c=>n.push(Vp(c,a,o.h)))}else n.push(JSON.parse(JSON.stringify(o)))}),n.some(o=>!o.h)||n.forEach(o=>o.h=!0);const t={t:"group",kids:n,o:[0,0,0]};let e;try{e=Cp(t)}catch{be("مقدرتش أجمّع الأشكال دي، جرّب تحرّكهم شوية");return}const i=new w;e.boundingBox.getCenter(i);const s=[zt(i.x),zt(i.y),zt(i.z)],r={id:ji(),t:"group",kids:n,o:s.slice(),c:(n.find(o=>!o.h)||n[0]).c,h:n.every(o=>o.h),p:s.slice(),r:[0,0,0],s:[1,1,1]};Zt=Zt.filter(o=>!dt.includes(o.id)).concat(r),Ie(),Yn(r.id),oe(),be(n.some(o=>o.h)&&n.some(o=>!o.h)?"✨ الفتحة خرّمت الشكل!":"✨ اتجمّعوا في شكل واحد")}function Vp(n,t,e){const i=t.clone().multiply(ic(n)),s=new w,r=new Ne,o=new w;i.decompose(s,r,o);const a=new Ts().setFromQuaternion(r);return Object.assign(JSON.parse(JSON.stringify(n)),{id:ji(),p:s.toArray().map(zt),r:[a.x,a.y,a.z],s:o.toArray(),h:n.h||!!e&&n.h})}function Wp(){const n=Zt.filter(e=>dt.includes(e.id)&&e.t==="group");if(!n.length)return;let t=[];n.forEach(e=>{const i=ic(e).multiply(new Kt().makeTranslation(-e.o[0],-e.o[1],-e.o[2])),s=e.kids.map(r=>Vp(r,i));t=t.concat(s)}),Zt=Zt.filter(e=>!n.includes(e)).concat(t),Ie(),dt=t.map(e=>e.id),zn(),oe()}async function Xp(){const n=(W("txtIn").value||"").trim().slice(0,24);if(!n){be("اكتب كلمة الأول ✍️"),W("txtIn").focus();return}try{await document.fonts.load("800 120px "+Wa(),n)}catch{}await vo(W("txtFont").value,n),So("text",!1,n)}W("txtFont").innerHTML=vp(Yi[0][0]);W("pFont").innerHTML=vp(Yi[0][0]);W("txtFont").addEventListener("change",()=>{W("txtIn").style.fontFamily='"'+W("txtFont").value+'"',vo(W("txtFont").value)});W("pFont").addEventListener("change",async()=>{const n=te(dt[0]);if(!n||n.t!=="text"||n.lk)return;await vo(W("pFont").value,n.txt);const t=Math.abs(Ue(n).min.y)<.6;n.fnt=W("pFont").value,Ie(),t&&Mo(n),Yn(n.id),oe()});W("txtAdd").onclick=Xp;W("txtIn").addEventListener("keydown",n=>{n.key==="Enter"&&Xp()});W("pTxt").addEventListener("change",async()=>{const n=te(dt[0]);if(!n||n.t!=="text"||n.lk)return;const t=(W("pTxt").value||"").trim().slice(0,24);if(!t)return;try{await document.fonts.load("800 120px "+Wa(),t)}catch{}const e=Math.abs(Ue(n).min.y)<.6;n.txt=t,Ie(),e&&Mo(n),Yn(n.id),oe()});document.fonts&&Promise.all([...new Set(Zt.flatMap(n=>[n,...n.kids||[]]).filter(n=>n.fnt).map(n=>n.fnt))].map(n=>vo(n))).then(()=>document.fonts.ready).then(()=>{Zt.some(n=>n.t==="text"||(n.kids||[]).some(t=>t.t==="text"))&&(qr.clear(),io.clear(),Ie())});function UE(){const n=W("clearAll");if(Zt.length){if(n.dataset.sure!=="1"){n.dataset.sure="1",n.classList.add("armed"),be("دوس تاني عشان تمسح كل الأشكال 🧹"),setTimeout(()=>{n.dataset.sure="",n.classList.remove("armed")},2500);return}n.dataset.sure="",n.classList.remove("armed"),Zt=[],dt=[],Ie(),oe(),be("🧹 اتمسح كل حاجة (تقدر ترجّع بـ ↶)")}}W("clearAll").onclick=UE;W("ratioBtn").onclick=()=>{Ui=!Ui,W("ratioBtn").classList.toggle("on",Ui),W("ratioBtn").textContent=Ui?"🔗 نفس النسبة":"⛓️‍💥 حر",be(Ui?"🔗 المقاس هيكبر ويصغر بنفس النسبة":"كل اتجاه لوحده (Shift للنسبة)")};W("dupBtn").onclick=Hp;W("delBtn").onclick=Gp;W("groupBtn").onclick=ac;W("ungroupBtn").onclick=Wp;const Yp=n=>'<svg viewBox="0 0 48 48" aria-hidden="true">'+Sp[n]+"</svg>";W("shapeList").innerHTML=Object.keys(en).map(n=>'<button class="shp" data-s="'+n+'">'+Yp(n)+en[n].ar+"</button>").join("");W("presetList").innerHTML=Object.keys(mi).map(n=>'<button class="shp" data-s="'+n+'">'+Yp(n)+mi[n].ar+"</button>").join("");W("holeList").innerHTML=["box","cyl"].map(n=>'<button class="shp" data-h="'+n+'"><svg viewBox="0 0 48 48" aria-hidden="true" style="opacity:.55;filter:grayscale(1)">'+Sp[n]+"</svg>"+(n==="box"?"فتحة مربعة":"فتحة دايرة")+"</button>").join("");document.querySelectorAll("[data-s]").forEach(n=>n.onclick=()=>{n._dragged||performance.now()-(n._dragT||0)<600||So(n.dataset.s,!1)});document.querySelectorAll("[data-h]").forEach(n=>n.onclick=()=>{n._dragged||performance.now()-(n._dragT||0)<600||So(n.dataset.h,!0)});const NE=()=>getComputedStyle(document.querySelector(".shapes")).flexDirection==="row";document.querySelectorAll(".shp[data-s], .shp[data-h]").forEach(n=>n.addEventListener("pointerdown",t=>{if(t.button!==0)return;const e=t.clientX,i=t.clientY,s=t.pointerType!=="mouse",r=n.dataset.s||n.dataset.h,o=!!n.dataset.h;let a=null,c=null,l=null;const u=p=>{const g=p.clientX-e,v=p.clientY-i;if(!a){if(Math.hypot(g,v)<10)return;if(s&&(NE()?Math.abs(v)<Math.abs(g):Math.abs(g)<Math.abs(v))){h();return}a=document.createElement("div"),a.className="shpGhost",a.innerHTML=n.querySelector("svg").outerHTML,document.body.appendChild(a),n._dragged=!0;try{n.setPointerCapture(p.pointerId)}catch{}}p.preventDefault(),a.style.left=p.clientX+"px",a.style.top=p.clientY+"px";const m=document.elementFromPoint(p.clientX,p.clientY)===ie;a.classList.toggle("ok",m),l=m?dd(p,r,o):null,l&&!c&&(c=OE(r,o)),c&&(c.visible=!!l,l&&BE(c,r,l)),a.classList.toggle("over3d",!!l)},f=p=>{if(a){n._dragT=performance.now();const g=document.elementFromPoint(p.clientX,p.clientY)===ie;if(a.remove(),a=null,g){const v=dd(p,r,o);v&&So(r,o,void 0,v)}else be("سيب الشكل فوق مساحة التصميم");setTimeout(()=>n._dragged=!1,600)}h()},h=()=>{removeEventListener("pointermove",u),removeEventListener("pointerup",f),removeEventListener("pointercancel",f),a&&(a.remove(),a=null),c&&(ln.remove(c),c=null)};addEventListener("pointermove",u,{passive:!1}),addEventListener("pointerup",f),addEventListener("pointercancel",f)}));function dd(n,t,e){As(n);const i=new w;if(!qn.ray.intersectPlane(new rn(new w(0,1,0),0),i))return null;let s=0;if(ds&&!e){const o=qn.intersectObjects([..._e.values()],!1).find(a=>a.face&&a.face.normal.clone().transformDirection(a.object.matrixWorld).y>.6&&!te(a.object.userData.id).h);o&&(i.copy(o.point),s=zt(o.point.y))}const r=hi||1;return[Math.round(i.x/r)*r,Math.round(i.z/r)*r,s]}const FE=new xo({color:"#1E7BFF",transparent:!0,opacity:.55,roughness:.5,depthWrite:!1});function OE(n,t){const e=new ui;return mi[n]?mi[n].parts.forEach(i=>{const s=new _t(Wi[i.t],new xo({color:i.c,transparent:!0,opacity:.7,depthWrite:!1}));s.position.set(...i.p),s.rotation.set(...i.r),s.scale.set(...i.s),e.add(s)}):Wi[n]&&e.add(new _t(Wi[n],t?rc:FE)),e.renderOrder=3,ln.add(e),e}function BE(n,t,e){const i=mi[t]?-kp(t).min.y:qi[t]?qi[t].y/2:0;n.position.set(e[0],e[2]+i,e[1])}W("swatches").innerHTML=Ep.map(n=>'<button data-c="'+n+'" style="background:'+n+'" aria-label="'+n+'"></button>').join("");function xi(){const n=dt.length===1?te(dt[0]):null;if(W("props").hidden=!n,W("multi").hidden=dt.length<2,dt.length>=2&&(W("multi").innerHTML="اخترت "+an(dt.length)+' أشكال<button class="btn run small" id="mGroup">⊕ جمّعهم</button><small class="sub">لو فيهم فتحة، هتخرّم الشكل لما تجمّعهم.</small><b class="lbl">رصّهم (Align)</b><div class="alignG">'+[["X",["⇤","⊕","⇥"]],["Y",["⤓","⊕","⤒"]],["Z",["⇤","⊕","⇥"]]].map(([i,s],r)=>"<span>"+i+"</span>"+s.map((o,a)=>'<button class="tb" data-al="'+r+","+a+'" title="'+i+" "+["البداية","النص","النهاية"][a]+'">'+o+"</button>").join("")).join("")+"</div>",W("mGroup").onclick=ac,W("multi").querySelectorAll("[data-al]").forEach(i=>i.onclick=()=>{const[s,r]=i.dataset.al.split(",").map(Number);Kp(s,r)})),!n)return;W("pTitle").textContent=n.t==="group"?"مجموعة":n.t==="text"?"نص":n.t==="poly"?qp(n.n):en[n.t].ar,Mu(n),W("pTxtRow").hidden=n.t!=="text",n.t==="text"&&document.activeElement!==W("pTxt")&&(W("pTxt").value=n.txt),n.t==="text"&&(W("pFont").value=n.fnt||Yi[0][0]),W("pSolid").classList.toggle("on",!n.h),W("pHole").classList.toggle("on",n.h),W("swatches").querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.c===n.c&&!n.h));const t=sc(n);W("dW").value=zt(t.x*Math.abs(n.s[0])),W("dD").value=zt(t.z*Math.abs(n.s[2])),W("dH").value=zt(t.y*Math.abs(n.s[1]));const e=Ue(n);W("pX").value=zt(n.p[0]),W("pZ").value=zt(n.p[2]),W("pY").value=zt(e.min.y),["rX","rY","rZ"].forEach((i,s)=>W(i).value=Math.round(bs.radToDeg(n.r[s]))),["dW","dD","dH","pX","pY","pZ","rX","rY","rZ"].forEach(i=>W(i).disabled=!!n.lk)}const zE={3:"مثلث",4:"مربع",5:"خماسي",6:"سداسي",7:"سباعي",8:"ثماني",9:"تساعي",10:"عشاري",12:"اثنا عشري"},qp=n=>n>=pi?"أسطوانة":zE[n]||"مضلع "+an(n)+" أوجه",jp=n=>n.t==="poly"||n.t==="cyl"||n.t==="cone",Zp=n=>n.t==="poly"||!!(en[n.t]&&en[n.t].rd),kE=n=>n.t==="box"||n.t==="poly"||n.t==="cyl"||n.t==="oval"?9:n.t==="roof"?4:n.t==="wedge"?3:n.t==="arch"?2:1.5;function Mu(n){const t=jp(n)&&!n.lk,e=Zp(n)&&!n.lk;if(W("pShape").hidden=!t&&!e,W("pSidesRow").hidden=!t,W("pRoundRow").hidden=!e,t){const i=n.n||pi;W("pSides").value=i,W("pSidesV").textContent=i>=pi?"◯":an(i)}e&&(W("pRound").max=kE(n),W("pRound").value=n.rd||0,W("pRoundV").textContent=an(zt(n.rd||0))+" ملّي")}function $p(n,t){const e=Math.abs(Ue(n).min.y)<.6;t(),n.n>=pi&&n.t!=="poly"&&delete n.n,n.rd||delete n.rd,Ie(),e&&Mo(n),_i(),ql=""}W("pSides").addEventListener("input",()=>{const n=te(dt[0]);!n||!jp(n)||($p(n,()=>{n.n=+W("pSides").value}),Mu(n),W("pTitle").textContent=n.t==="poly"?qp(n.n||pi):en[n.t].ar)});W("pRound").addEventListener("input",()=>{const n=te(dt[0]);!n||!Zp(n)||($p(n,()=>{n.rd=zt(+W("pRound").value)}),Mu(n))});["pSides","pRound"].forEach(n=>W(n).addEventListener("change",()=>oe()));W("pClose").onclick=()=>Yn(null);W("pSolid").onclick=()=>{const n=te(dt[0]);n.h&&(n.h=!1,n.kids&&n.kids.every(t=>t.h)&&n.kids.forEach(t=>t.h=!1),Ie(),zn(),oe())};W("pHole").onclick=()=>{const n=te(dt[0]);n.h||(n.h=!0,Ie(),zn(),oe())};W("swatches").onclick=n=>{const t=n.target.closest("[data-c]");if(!t||!dt.length)return;const e=te(dt[0]);e.c=t.dataset.c,e.h=!1,Ie(),zn(),oe()};[["dW",0,"x"],["dH",1,"y"],["dD",2,"z"]].forEach(([n,t,e])=>W(n).addEventListener("change",()=>{const i=te(dt[0]);if(!i)return;const s=Math.min(400,Math.max(1,+W(n).value||1)),r=sc(i);if(i.lk)return;const o=Math.abs(Ue(i).min.y)<.6,a=Math.sign(i.s[t]||1)*s/r[e];if(Ui){const c=a/(i.s[t]||1);i.s=i.s.map(l=>l*c)}else i.s[t]=a;if(_e.get(i.id).scale.set(...i.s),o){const c=Ue(i);i.p[1]=zt(i.p[1]-c.min.y),_e.get(i.id).position.y=i.p[1]}_i(),oe(),xi()}));const wr=n=>{const t=_e.get(n.id);t.position.set(...n.p),t.rotation.set(...n.r),t.scale.set(...n.s),_i()};[["pX",0],["pZ",2]].forEach(([n,t])=>W(n).addEventListener("change",()=>{const e=te(dt[0]);!e||e.lk||(e.p[t]=zt(+W(n).value||0),wr(e),oe(),xi())}));W("pY").addEventListener("change",()=>{const n=te(dt[0]);if(!n||n.lk)return;const t=+W("pY").value||0,e=Ue(n);n.p[1]=zt(n.p[1]+t-e.min.y),wr(n),oe(),xi()});["rX","rY","rZ"].forEach((n,t)=>W(n).addEventListener("change",()=>{const e=te(dt[0]);!e||e.lk||(e.r[t]=bs.degToRad((+W(n).value||0)%360),wr(e),Mo(e),oe(),xi())}));W("lockBtn").onclick=()=>{const n=dt.map(te).filter(Boolean);if(!n.length)return;const t=!n.every(e=>e.lk);n.forEach(e=>e.lk=t),zn(),oe(),be(t?"🔒 اتقفل: مش هيتحرك ولا يتغيّر":"🔓 اتفتح")};document.querySelectorAll("[data-mirror]").forEach(n=>n.onclick=()=>{const t=te(dt[0]);!t||t.lk||(t.s[+n.dataset.mirror]*=-1,wr(t),oe())});let pd=0;function md(n,t,e){const i=dt.map(te).filter(s=>s&&!s.lk);i.length&&(i.forEach(s=>{s.p[0]=zt(s.p[0]+n),s.p[1]=zt(Math.max(s.p[1]+t,s.p[1]-Ue(s).min.y)),s.p[2]=zt(s.p[2]+e),wr(s)}),xi(),clearTimeout(pd),pd=setTimeout(()=>oe(),350))}function HE(){const n=new w().subVectors(Qt.target,re.position);n.y=0,n.normalize();const t=Math.abs(n.x)>Math.abs(n.z)?[Math.sign(n.x),0]:[0,Math.sign(n.z)];return{fwd:t,right:[-t[1],t[0]]}}function Kp(n,t){const e=dt.map(te).filter(o=>o&&!o.lk);if(e.length<2)return;const i=new le;dt.forEach(o=>i.union(Ue(te(o))));const s=["x","y","z"][n],r=t===0?i.min[s]:t===2?i.max[s]:(i.min[s]+i.max[s])/2;e.forEach(o=>{const a=Ue(o),c=t===0?a.min[s]:t===2?a.max[s]:(a.min[s]+a.max[s])/2;o.p[n]=zt(o.p[n]+r-c),wr(o)}),oe()}let qa=null;function cc(n,t){const e=re.position.clone(),i=Qt.target.clone(),s=performance.now();qa=()=>{const r=Math.min(1,(performance.now()-s)/350),o=r*(2-r);re.position.lerpVectors(e,n,o),Qt.target.lerpVectors(i,t,o),Qt.update(),r>=1&&(qa=null)}}W("homeBtn").onclick=()=>cc(bp.clone(),new w(0,10,0));W("fitBtn").onclick=()=>{const n=dt.length?dt.map(te):Zt;if(!n.length)return W("homeBtn").onclick();const t=new le;n.forEach(o=>t.union(Ue(o)));const e=new w,i=new w;t.getCenter(e),t.getSize(i);const s=Math.max(60,i.length()*1.6),r=new w().subVectors(re.position,Qt.target).normalize();cc(e.clone().add(r.multiplyScalar(s)),e)};const Jp=n=>{const t=new w().subVectors(re.position,Qt.target),e=bs.clamp(t.length()*n,Qt.minDistance,Qt.maxDistance);cc(Qt.target.clone().add(t.setLength(e)),Qt.target.clone())};W("zoomIn").onclick=()=>Jp(.75);W("zoomOut").onclick=()=>Jp(1.33);const vr=W("vcube"),Qp=new iu({canvas:vr,antialias:!0,alpha:!0});Qp.setPixelRatio(1);const Su=new Zd,cr=new dn(30,1,.1,50);function GE(n,t){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.fillStyle="rgba(108,92,231,.10)",[[0,0,128,28],[0,100,128,28],[0,28,28,72],[100,28,28,72]].forEach(r=>i.fillRect(...r)),i.fillStyle="rgba(108,92,231,.22)",[[0,0],[100,0],[0,100],[100,100]].forEach(([r,o])=>i.fillRect(r,o,28,28)),i.strokeStyle="#B9C3D6",i.lineWidth=6,i.strokeRect(3,3,122,122),i.fillStyle="#3A4256",i.font="700 26px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const s=new Ry(e);return s.colorSpace=Ge,s}const VE=[["RIGHT","#F4F6FA"],["LEFT","#F4F6FA"],["TOP","#FFFFFF"],["BOTTOM","#E9EDF4"],["FRONT","#F9FAFC"],["BACK","#F4F6FA"]],Eu=new _t(new fe(2,2,2),VE.map(([n,t])=>new ws({map:GE(n,t)})));Su.add(Eu);const tm=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];(function n(){if(Pp()){requestAnimationFrame(n);return}qa&&qa();const t=new w().subVectors(re.position,Qt.target).normalize().multiplyScalar(7.5);cr.position.copy(t),cr.up.copy(re.up),cr.lookAt(0,0,0),Qp.render(Su,cr),requestAnimationFrame(n)})();const ps=new _t(new fe(1,1,1),new ws({color:7101671,transparent:!0,opacity:.45,depthTest:!1}));ps.visible=!1;Su.add(ps);vr.addEventListener("pointermove",n=>{const t=vr.getBoundingClientRect(),e=new J((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),i=new tc;i.setFromCamera(e,cr);const s=i.intersectObject(Eu)[0];if(!s){ps.visible=!1;return}const r=tm[s.face.materialIndex],o=s.point,a=["x","y","z"].map((c,l)=>r[l]?r[l]:Math.abs(o[c])>.56?Math.sign(o[c]):0);ps.scale.set(...a.map(c=>c?.5:1.42)),ps.position.set(...a.map(c=>c*.78)),ps.visible=!0});vr.addEventListener("pointerleave",()=>ps.visible=!1);vr.addEventListener("click",n=>{const t=vr.getBoundingClientRect(),e=new J((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),i=new tc;i.setFromCamera(e,cr);const s=i.intersectObject(Eu)[0];if(!s)return;const r=s.point.clone(),o=tm[s.face.materialIndex],a=new w(...["x","y","z"].map((l,u)=>o[u]?o[u]:Math.abs(r[l])>.56?Math.sign(r[l]):0)),c=re.position.distanceTo(Qt.target);!a.x&&!a.z&&a.add(new w(0,0,.002)),cc(Qt.target.clone().add(a.normalize().multiplyScalar(c)),Qt.target.clone())});function bu(){W("undoBtn").disabled=An<=0,W("redoBtn").disabled=An>=yn.length-1,W("dupBtn").disabled=W("delBtn").disabled=W("dropBtn").disabled=!dt.length,W("groupBtn").disabled=dt.length<2,W("ungroupBtn").disabled=!dt.some(e=>(te(e)||{}).t==="group");const n=dt.map(te).filter(Boolean),t=n.length&&n.every(e=>e.lk);W("lockBtn").disabled=!n.length,W("lockBtn").classList.toggle("on",!!t),W("lockBtn").querySelector("i").textContent=t?"🔒":"🔓",W("lockBtn").querySelector("span").textContent=t?"مقفول":"قفل",W("alignBtn").disabled=dt.length<2,dt.length<2?W("alignPop").hidden=!0:W("alignPop").hidden||em()}function em(){W("alignPop").innerHTML="<b>رصّ "+an(dt.length)+' أشكال</b><div class="alignG">'+[["X ↔",["⇤ أول","⊕ نص","⇥ آخر"]],["Y ↕ ارتفاع",["⤓ تحت","⊕ نص","⤒ فوق"]],["Z ⤢ عمق",["⇤ أول","⊕ نص","⇥ آخر"]]].map(([n,t],e)=>"<span>"+n+"</span>"+t.map((i,s)=>'<button class="tb" data-al="'+e+","+s+'">'+i+"</button>").join("")).join("")+"</div>",W("alignPop").querySelectorAll("[data-al]").forEach(n=>n.onclick=()=>{const[t,e]=n.dataset.al.split(",").map(Number);Kp(t,e)})}W("alignBtn").onclick=()=>{if(dt.length<2){be("اختار شكلين أو أكتر الأول (☑ تحديد متعدد)");return}W("alignPop").hidden=!W("alignPop").hidden,W("alignPop").hidden||em()};let Bn=!1;W("multiBtn").onclick=()=>{Bn=!Bn,W("multiBtn").classList.toggle("on",Bn),W("multiBtn").setAttribute("aria-pressed",String(Bn)),be(Bn?"☑ دوس على الأشكال اللي عايزها، أو اسحب صباعك على مكان فاضي ترسم مستطيل":"رجعنا للتحديد العادي")};{const n=W("tbar"),t=W("tbGrip");let e=(()=>{try{return+localStorage.getItem("robo-3d-tbz")||1}catch{return 1}})();const i=s=>{e=Math.max(.55,Math.min(1.35,s)),n.style.zoom=e.toFixed(2);try{localStorage.setItem("robo-3d-tbz",e.toFixed(2))}catch{}};i(e),t.addEventListener("pointerdown",s=>{s.preventDefault();const r=s.clientY,o=e;t.setPointerCapture(s.pointerId),t.classList.add("on");const a=l=>i(o+(l.clientY-r)/140),c=()=>{t.classList.remove("on"),t.removeEventListener("pointermove",a),t.removeEventListener("pointerup",c),t.removeEventListener("pointercancel",c)};t.addEventListener("pointermove",a),t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}),t.addEventListener("dblclick",()=>i(1))}W("stlBtn").onclick=()=>{const n=Zt.filter(r=>!r.h);if(!n.length){be("مفيش أشكال مُصمتة تتطبع");return}Zt.some(r=>r.h)&&be("ملحوظة: الفتحات اللي مش متجمّعة مع شكل مش هتتطبع");const t=new ui;n.forEach(r=>{const o=_e.get(r.id).clone();t.add(o)}),t.rotation.x=Math.PI/2,t.updateMatrixWorld(!0);const e=new bM().parse(t,{binary:!0}),i=((W("pname").value||"robo-3d").trim().replace(/[\\/:*?"<>|]+/g,"").replace(/\s+/g,"_")||"robo-3d")+".stl",s=document.createElement("a");s.href=URL.createObjectURL(new Blob([e],{type:"model/stl"})),s.download=i,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3),be("⬇ اتنزّل "+i)};function nm(){const n=W("projList");n.innerHTML=Pe.list.map(t=>'<li class="'+(t.id===Pe.cur?"cur":"")+'"><span class="nm"><b dir="auto"></b><small>'+an((t.objs||[]).length)+' شكل</small></span><button class="btn ghost small" data-open="'+t.id+'">افتح</button><button class="btn ghost small" data-del="'+t.id+'" aria-label="امسح">🗑</button></li>').join("")||'<li class="empty">لسه مفيش تصاميم</li>',n.querySelectorAll("li b").forEach((t,e)=>t.textContent=Pe.list[e].name),n.querySelectorAll("[data-open]").forEach(t=>t.onclick=()=>{Zi(!1),po(t.dataset.open),Eo()}),n.querySelectorAll("[data-del]").forEach(t=>t.onclick=()=>{if(t.dataset.sure!=="1"){t.dataset.sure="1",t.textContent="متأكد؟";return}Pe.list=Pe.list.filter(e=>e.id!==t.dataset.del),Pe.cur===t.dataset.del&&(Pe.list.length?po(Pe.list[0].id):Up()),xu(),nm()})}const Eo=()=>{W("projModal").hidden=!0};W("myBtn").onclick=()=>{Zi(!1),nm(),W("projModal").hidden=!1,W("pmClose").focus()};W("pmClose").onclick=Eo;W("newBtn").onclick=()=>{Up(),Eo()};W("projModal").addEventListener("click",n=>{n.target.id==="projModal"&&Eo()});addEventListener("keydown",n=>{if(n.target.closest&&n.target.closest("input,select,textarea"))return;const t=n.key.toLowerCase(),e=n.ctrlKey||n.metaKey;if(e&&t==="z")n.preventDefault(),W("undoBtn").click();else if(e&&t==="y")n.preventDefault(),W("redoBtn").click();else if(e&&t==="d")n.preventDefault(),Hp();else if(e&&t==="g")n.preventDefault(),ac();else if(e&&t==="s")n.preventDefault(),Zi(!0);else if(t.startsWith("arrow")&&dt.length){n.preventDefault();const i=(hi||1)*(n.shiftKey?10:1);if(e&&(t==="arrowup"||t==="arrowdown"))md(0,t==="arrowup"?i:-i,0);else{const{fwd:s,right:r}=HE(),o=t==="arrowup"?s:t==="arrowdown"?[-s[0],-s[1]]:t==="arrowright"?r:[-r[0],-r[1]];md(o[0]*i,0,o[1]*i)}}else t==="delete"||t==="backspace"?Gp():t==="escape"?(Yn(null),Eo()):t==="w"?ro("translate"):t==="e"?ro("rotate"):t==="r"?ro("scale"):t==="d"&&Bp()});let gd=0;function be(n){const t=W("toast");t.textContent=n,t.hidden=!1,clearTimeout(gd),gd=setTimeout(()=>t.hidden=!0,2600)}const jl=new URLSearchParams(location.search),ja=n=>Ue(n),er=n=>{const t=ja(n),e=new w;return t.getSize(e),e},ci=()=>Zt.filter(n=>!n.h),_d=()=>{const n=ci();return n.some(t=>n.some(e=>{if(t===e)return!1;const i=ja(t),s=ja(e);return i.min.y>=s.max.y-2&&i.min.y>1&&i.min.x<s.max.x&&i.max.x>s.min.x&&i.min.z<s.max.z&&i.max.z>s.min.z}))},WE=()=>Zt.some(n=>n.t==="group"&&n.kids.some(t=>t.h)&&n.kids.some(t=>!t.h)&&!n.h),Ri=(n,t,e=1)=>Math.abs(n-t)<=e,Tu={k1:{t:"ضيف ٣ أشكال مختلفة 🧊",say:"دوس على ٣ أشكال مختلفة من على الجنب (مكعب، كورة، أسطوانة…).",check:()=>new Set(ci().map(n=>n.t)).size>=3},k2:{t:"لوّن الأشكال 🎨",say:"الأشكال دي كلها بيضا. دوس على كل شكل واختار له لون، وخلّي كل واحد لونه مختلف.",pre:[{t:"box",p:[-40,10,0]},{t:"sphere",p:[0,10,0]},{t:"cyl",p:[40,10,0]}].map((n,t)=>({id:"w"+t,c:"#FFFFFF",h:!1,r:[0,0,0],s:[1,1,1],...n})),check:()=>ci().every(n=>n.c!=="#FFFFFF")&&new Set(ci().map(n=>n.c)).size>=3},k3:{t:"ابني برج 🗼",say:"حط شكل فوق شكل. اسحب السهم الأخضر لفوق، أو خلّي الشكل على السطح وارفعه.",check:()=>_d()},k4:{t:"كبّر الشكل 📏",say:"دوس على شكل واكتب الارتفاع ٤٠ ملّي أو أكتر (أو استخدم «المقاس»).",check:()=>ci().some(n=>er(n).y>=39)},k5:{t:"اعمل فتحة ⬚",say:"حط مكعب، وحط فتحة دايرة جواه، واختارهم الاتنين (Shift) ودوس «جمّع».",check:()=>WE()},k6:{t:"مشروع: جسم روبو 🤖",say:"اعمل روبو: جسم وراس فوقه، و٤ أشكال على الأقل، و٢ ألوان أو أكتر.",check:()=>ci().length>=4&&_d()&&new Set(ci().map(n=>n.c)).size>=2},s1:{t:"مقاس بالظبط 📐",say:"اعمل مكعب مقاسه ٣٠ × ٣٠ × ١٠ ملّي بالظبط (العرض والعمق ٣٠، والارتفاع ١٠).",check:()=>ci().some(n=>n.t==="box"&&Ri(er(n).x,30)&&Ri(er(n).z,30)&&Ri(er(n).y,10))},s2:{t:"على السطح وفي النص 🎯",say:"خلّي أسطوانة قاعدتها على السطح بالظبط (y = 0) ومركزها في نص السطح (x = 0 و z = 0).",check:()=>ci().some(n=>n.t==="cyl"&&Ri(ja(n).min.y,0,.6)&&Ri(n.p[0],0,1)&&Ri(n.p[2],0,1))},s3:{t:"ميدالية 🏷",say:"اعمل ميدالية: شكل مسطح ارتفاعه من ٣ لـ ٦ ملّي، وفيها فتحة دايرة للسلسلة (جمّعهم).",check:()=>Zt.some(n=>n.t==="group"&&!n.h&&n.kids.some(t=>t.h)&&er(n).y>=2.5&&er(n).y<=6.5)},s4:{t:"حامل موتور ⚙️",say:"اعمل قطعة فيها فتحة دايرة قطرها ٢٤ ملّي (زي مقاس موتور صغير). استخدم «فتحة دايرة» وخلّي عرضها وعمقها ٢٤.",check:()=>Zt.some(n=>n.t==="group"&&!n.h&&n.kids.some(t=>t.h&&t.t==="cyl"&&Ri(qi.cyl.x*t.s[0],24,1)&&Ri(qi.cyl.z*t.s[2],24,1)))},s5:{t:"مشروع: صمّم هيكل عربيتك 🚗",say:"صمّم جسم عربية: قاعدة، و٤ عجلات (أسطوانات)، وفتحة واحدة على الأقل لتوصيل الأسلاك.",check:()=>Zt.filter(n=>!n.h).reduce((n,t)=>n+(t.t==="cyl"?1:t.t==="group"?t.kids.filter(e=>e.t==="cyl"&&!e.h).length:0),0)>=4&&Zt.some(n=>n.t==="group"&&n.kids.some(t=>t.h))}},yr=Tu[jl.get("task")]?jl.get("task"):null;let Zl=!1;function XE(){if(Zl)return;let n=!1;try{n=!!Tu[yr].check()}catch{}if(n){Zl=!0,W("taskBar").classList.add("done"),W("taskMsg").textContent="🎉 برافو! التصميم تمام";try{parent.postMessage({type:"robo-task",tool:"3d",task:yr,ok:!0},location.origin)}catch{}}}if(yr){const n=Tu[yr];jl.get("embed")&&document.body.classList.add("embed");const t=document.createElement("div");t.className="taskBar",t.id="taskBar",t.innerHTML='<b></b><span></span><em id="taskMsg"></em><button class="btn ghost small" id="taskReset">↺ من الأول</button>',t.querySelector("b").textContent=n.t,t.querySelector("span").textContent=n.say,document.querySelector(".stagewrap").prepend(t);const e=()=>{Zt=JSON.parse(JSON.stringify(n.pre||[])),dt=[],Ie(),yn=[],An=-1,Zl=!1,t.classList.remove("done"),W("taskMsg").textContent="",oe(!1)};W("taskReset").onclick=e,e()}else Ip()?po(Pe.cur):Pe.list.length?po(Pe.list[0].id):(Zt=[{id:ji(),t:"box",c:"#1E7BFF",h:!1,p:[0,10,0],r:[0,0,0],s:[1.5,1,1.5]}],Ie(),oe());window.__d3={handles:()=>Wn.visible?Wn.children.map(n=>Np(n.position).slice(0,2).map(Math.round)):[],magnetize:yu,worldBox:n=>{const t=Ue(te(n));return[t.min.toArray().map(zt),t.max.toArray().map(zt)]},toScreen:(n,t,e)=>{const i=new w(n,t,e).project(re),s=ie.getBoundingClientRect();return[s.left+(i.x+1)/2*s.width,s.top+(1-i.y)/2*s.height]},camera:re,apply:n=>{n(Zt),Ie(),oe()},get objs(){return Zt},select:Yn,addShape:So,group:ac,ungroup:Wp,setMode:ro,get sel(){return dt},trace:n=>Mp(n).map(t=>[t.getPoints().length,t.holes.length,(()=>{const e=new fM().setFromPoints(t.getPoints());return[e.min.x,e.min.y,e.max.x,e.max.y].map(zt)})()]),cam:()=>re.position.toArray().map(n=>Math.round(n)).join(","),geoInfo:n=>{const t=_e.get(n).geometry;t.computeBoundingBox();const e=new w;return t.boundingBox.getSize(e),[t.getAttribute("position").count,e.toArray().map(zt)]}};cm({box:document.querySelector(".d3"),a:document.querySelector(".d3 > .shapes"),b:document.querySelector(".d3 > .stagewrap"),cssVar:"--dA",key:"robo-split-3d",min:160,minB:360});
