import"./kbfix-4gRYHd6_.js";import{s as og}from"./split-DJAd-vnY.js";import{t as ag}from"./task-peek-5dTstnx6.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lu="160",Hi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cg=0,vh=1,lg=2,fp=1,ug=2,vi=3,ri=0,ln=1,an=2,Ji=0,Er=1,yh=2,Mh=3,Sh=4,hg=5,Ms=100,fg=101,dg=102,Eh=103,bh=104,pg=200,mg=201,gg=202,_g=203,eu=204,nu=205,xg=206,vg=207,yg=208,Mg=209,Sg=210,Eg=211,bg=212,wg=213,Tg=214,Ag=0,Pg=1,Cg=2,ec=3,Rg=4,Lg=5,Ig=6,Dg=7,dp=0,Ug=1,Fg=2,Qi=0,Ng=1,Og=2,Bg=3,zg=4,kg=5,Hg=6,pp=300,Ar=301,Pr=302,iu=303,su=304,Sc=306,ru=1e3,Yn=1001,ou=1002,on=1003,wh=1004,Hc=1005,Cn=1006,Gg=1007,Eo=1008,ts=1009,Vg=1010,Wg=1011,Iu=1012,mp=1013,Yi=1014,ji=1015,bo=1016,gp=1017,_p=1018,As=1020,Xg=1021,jn=1023,qg=1024,Yg=1025,Ps=1026,Cr=1027,jg=1028,xp=1029,Zg=1030,vp=1031,yp=1033,Gc=33776,Vc=33777,Wc=33778,Xc=33779,Th=35840,Ah=35841,Ph=35842,Ch=35843,Mp=36196,Rh=37492,Lh=37496,Ih=37808,Dh=37809,Uh=37810,Fh=37811,Nh=37812,Oh=37813,Bh=37814,zh=37815,kh=37816,Hh=37817,Gh=37818,Vh=37819,Wh=37820,Xh=37821,qc=36492,qh=36494,Yh=36495,Kg=36283,jh=36284,Zh=36285,Kh=36286,Sp=3e3,Cs=3001,$g=3200,Jg=3201,Ep=0,Qg=1,Ln="",Xe="srgb",Ai="srgb-linear",Du="display-p3",Ec="display-p3-linear",nc="linear",_e="srgb",ic="rec709",sc="p3",Gs=7680,$h=519,t0=512,e0=513,n0=514,bp=515,i0=516,s0=517,r0=518,o0=519,Jh=35044,Qh="300 es",au=1035,wi=2e3,rc=2001;class Os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tf=1234567;const br=Math.PI/180,wo=180/Math.PI;function Bs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function Uu(n,t){return(n%t+t)%t}function a0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function c0(n,t,e){return n!==t?(e-n)/(t-n):0}function lo(n,t,e){return(1-e)*n+e*t}function l0(n,t,e,i){return lo(n,t,1-Math.exp(-e*i))}function u0(n,t=1){return t-Math.abs(Uu(n,t*2)-t)}function h0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function f0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function d0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function p0(n,t){return n+Math.random()*(t-n)}function m0(n){return n*(.5-Math.random())}function g0(n){n!==void 0&&(tf=n);let t=tf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _0(n){return n*br}function x0(n){return n*wo}function cu(n){return(n&n-1)===0&&n!==0}function v0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function y0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),h=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rs={DEG2RAD:br,RAD2DEG:wo,generateUUID:Bs,clamp:Ne,euclideanModulo:Uu,mapLinear:a0,inverseLerp:c0,lerp:lo,damp:l0,pingpong:u0,smoothstep:h0,smootherstep:f0,randInt:d0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:_0,radToDeg:x0,isPowerOfTwo:cu,ceilPowerOfTwo:v0,floorPowerOfTwo:oc,setQuaternionFromProperEuler:y0,normalize:sn,denormalize:mr};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],x=s[1],_=s[4],y=s[7],E=s[2],w=s[5],b=s[8];return r[0]=o*v+a*x+c*E,r[3]=o*m+a*_+c*w,r[6]=o*d+a*y+c*b,r[1]=l*v+u*x+f*E,r[4]=l*m+u*_+f*w,r[7]=l*d+u*y+f*b,r[2]=h*v+p*x+g*E,r[5]=h*m+p*_+g*w,r[8]=h*d+p*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,p=l*r-o*c,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*l-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new Kt;function wp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ac(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M0(){const n=ac("canvas");return n.style.display="block",n}const ef={};function uo(n){n in ef||(ef[n]=!0,console.warn(n))}const nf=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sf=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xo={[Ai]:{transfer:nc,primaries:ic,toReference:n=>n,fromReference:n=>n},[Xe]:{transfer:_e,primaries:ic,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ec]:{transfer:nc,primaries:sc,toReference:n=>n.applyMatrix3(sf),fromReference:n=>n.applyMatrix3(nf)},[Du]:{transfer:_e,primaries:sc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sf),fromReference:n=>n.applyMatrix3(nf).convertLinearToSRGB()}},S0=new Set([Ai,Ec]),he={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!S0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Xo[t].toReference,s=Xo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Xo[n].primaries},getTransfer:function(n){return n===Ln?nc:Xo[n].transfer}};function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vs;class Tp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vs===void 0&&(Vs=ac("canvas")),Vs.width=t.width,Vs.height=t.height;const i=Vs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ac("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(wr(e[i]/255)*255):e[i]=wr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let E0=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Bs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zc(s[o].image)):r.push(Zc(s[o]))}else r=Zc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class mn extends Os{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,i=Yn,s=Yn,r=Cn,o=Eo,a=jn,c=ts,l=mn.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Bs(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cs?Xe:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ru:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ru:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?Cs:Sp}set encoding(t){uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Cs?Xe:Ln}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=pp;mn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(p+1)/2,E=(d+1)/2,w=(u+h)/4,b=(f+v)/4,L=(g+m)/4;return _>y&&_>E?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=w/i,r=b/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=L/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=b/r,s=L/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w0 extends Os{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Cs?Xe:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ap(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends w0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Pp extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class T0 extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class De{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==h||l!==p||u!==g){let m=1-a;const d=c*h+l*p+u*g+f*v,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const E=Math.sqrt(_),w=Math.atan2(E,d*x);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const y=a*x;if(c=c*m+h*y,l=l*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*p-l*h,t[e+1]=c*g+u*h+l*f-a*p,t[e+2]=l*g+u*p+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,i=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new T,rf=new De;class de{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(t.matrixWorld),this.union(qo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),Yo.subVectors(this.max,Vr),Ws.subVectors(t.a,Vr),Xs.subVectors(t.b,Vr),qs.subVectors(t.c,Vr),Ii.subVectors(Xs,Ws),Di.subVectors(qs,Xs),ls.subVectors(Ws,qs);let e=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-ls.z,ls.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,ls.z,0,-ls.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-ls.y,ls.x,0];return!$c(e,Ws,Xs,qs,Yo)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,Ws,Xs,qs,Yo))?!1:(jo.crossVectors(Ii,Di),e=[jo.x,jo.y,jo.z],$c(e,Ws,Xs,qs,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ui=[new T,new T,new T,new T,new T,new T,new T,new T],Hn=new T,qo=new de,Ws=new T,Xs=new T,qs=new T,Ii=new T,Di=new T,ls=new T,Vr=new T,Yo=new T,jo=new T,us=new T;function $c(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){us.fromArray(n,r);const a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=t.dot(us),l=e.dot(us),u=i.dot(us);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const A0=new de,Wr=new T,Jc=new T;class Lo{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):A0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wr.subVectors(t,this.center);const e=Wr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Wr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wr.copy(t.center).add(Jc)),this.expandByPoint(Wr.copy(t.center).sub(Jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new T,Qc=new T,Zo=new T,Ui=new T,tl=new T,Ko=new T,el=new T;class Or{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Qc.copy(t).add(e).multiplyScalar(.5),Zo.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(Qc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zo),a=Ui.dot(this.direction),c=-Ui.dot(Zo),l=Ui.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qc).addScaledVector(Zo,h),p}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){tl.subVectors(e,t),Ko.subVectors(i,t),el.crossVectors(tl,Ko);let o=this.direction.dot(el),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,t);const c=a*this.direction.dot(Ko.crossVectors(Ui,Ko));if(c<0)return null;const l=a*this.direction.dot(tl.cross(Ui));if(l<0||c+l>o)return null;const u=-a*Ui.dot(el);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,s,r,o,a,c,l,u,f,h,p,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,f,h,p,g,v,m)}set(t,e,i,s,r,o,a,c,l,u,f,h,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,p=c*f,g=l*u,v=l*f;e[0]=h+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,p=c*f,g=l*u,v=l*f;e[0]=h-v*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*f+g,e[10]=h-v*f}else if(t.order==="XZY"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(P0,t,C0)}lookAt(t,e,i){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Fi.crossVectors(i,xn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Fi.crossVectors(i,xn)),Fi.normalize(),$o.crossVectors(xn,Fi),s[0]=Fi.x,s[4]=$o.x,s[8]=xn.x,s[1]=Fi.y,s[5]=$o.y,s[9]=xn.y,s[2]=Fi.z,s[6]=$o.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],x=i[3],_=i[7],y=i[11],E=i[15],w=s[0],b=s[4],L=s[8],S=s[12],M=s[1],R=s[5],D=s[9],O=s[13],I=s[2],U=s[6],k=s[10],X=s[14],Z=s[3],V=s[7],tt=s[11],et=s[15];return r[0]=o*w+a*M+c*I+l*Z,r[4]=o*b+a*R+c*U+l*V,r[8]=o*L+a*D+c*k+l*tt,r[12]=o*S+a*O+c*X+l*et,r[1]=u*w+f*M+h*I+p*Z,r[5]=u*b+f*R+h*U+p*V,r[9]=u*L+f*D+h*k+p*tt,r[13]=u*S+f*O+h*X+p*et,r[2]=g*w+v*M+m*I+d*Z,r[6]=g*b+v*R+m*U+d*V,r[10]=g*L+v*D+m*k+d*tt,r[14]=g*S+v*O+m*X+d*et,r[3]=x*w+_*M+y*I+E*Z,r[7]=x*b+_*R+y*U+E*V,r[11]=x*L+_*D+y*k+E*tt,r[15]=x*S+_*O+y*X+E*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*c*f-s*l*f-r*a*h+i*l*h+s*a*p-i*c*p)+v*(+e*c*p-e*l*h+r*o*h-s*o*p+s*l*u-r*c*u)+m*(+e*l*f-e*a*p-r*o*f+i*o*p+r*a*u-i*l*u)+d*(-s*a*u-e*c*f+e*a*h+s*o*f-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],x=f*m*l-v*h*l+v*c*p-a*m*p-f*c*d+a*h*d,_=g*h*l-u*m*l-g*c*p+o*m*p+u*c*d-o*h*d,y=u*v*l-g*f*l+g*a*p-o*v*p-u*a*d+o*f*d,E=g*f*c-u*v*c-g*a*h+o*v*h+u*a*m-o*f*m,w=e*x+i*_+s*y+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=x*b,t[1]=(v*h*r-f*m*r-v*s*p+i*m*p+f*s*d-i*h*d)*b,t[2]=(a*m*r-v*c*r+v*s*l-i*m*l-a*s*d+i*c*d)*b,t[3]=(f*c*r-a*h*r-f*s*l+i*h*l+a*s*p-i*c*p)*b,t[4]=_*b,t[5]=(u*m*r-g*h*r+g*s*p-e*m*p-u*s*d+e*h*d)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*b,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*p+e*c*p)*b,t[8]=y*b,t[9]=(g*f*r-u*v*r-g*i*p+e*v*p+u*i*d-e*f*d)*b,t[10]=(o*v*r-g*a*r+g*i*l-e*v*l-o*i*d+e*a*d)*b,t[11]=(u*a*r-o*f*r-u*i*l+e*f*l+o*i*p-e*a*p)*b,t[12]=E*b,t[13]=(u*v*s-g*f*s+g*i*h-e*v*h-u*i*m+e*f*m)*b,t[14]=(g*a*s-o*v*s-g*i*c+e*v*c+o*i*m-e*a*m)*b,t[15]=(o*f*s-u*a*s+u*i*c-e*f*c-o*i*h+e*a*h)*b,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,p=r*u,g=r*f,v=o*u,m=o*f,d=a*f,x=c*l,_=c*u,y=c*f,E=i.x,w=i.y,b=i.z;return s[0]=(1-(v+d))*E,s[1]=(p+y)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(h+d))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+_)*b,s[9]=(m-x)*b,s[10]=(1-(h+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ys.set(s[0],s[1],s[2]).length();const o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);const l=1/r,u=1/o,f=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,e.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wi){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let p,g;if(a===wi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===rc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wi){const c=this.elements,l=1/(e-t),u=1/(i-s),f=1/(o-r),h=(e+t)*l,p=(i+s)*u;let g,v;if(a===wi)g=(o+r)*f,v=-2*f;else if(a===rc)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ys=new T,Gn=new se,P0=new T(0,0,0),C0=new T(1,1,1),Fi=new T,$o=new T,xn=new T,of=new se,af=new De;class Li{constructor(t=0,e=0,i=0,s=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return of.makeRotationFromQuaternion(t),this.setFromRotationMatrix(of,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return af.setFromEuler(this),this.setFromQuaternion(af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let R0=0;const cf=new T,js=new De,fi=new se,Jo=new T,Xr=new T,L0=new T,I0=new De,lf=new T(1,0,0),uf=new T(0,1,0),hf=new T(0,0,1),D0={type:"added"},U0={type:"removed"};class Ce extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new T,e=new Li,i=new De,s=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(lf,t)}rotateY(t){return this.rotateOnAxis(uf,t)}rotateZ(t){return this.rotateOnAxis(hf,t)}translateOnAxis(t,e){return cf.copy(t).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lf,t)}translateY(t){return this.translateOnAxis(uf,t)}translateZ(t){return this.translateOnAxis(hf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jo.copy(t):Jo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Xr,Jo,this.up):fi.lookAt(Jo,Xr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(fi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(D0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U0)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,L0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,I0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new T(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new T,di=new T,nl=new T,pi=new T,Zs=new T,Ks=new T,ff=new T,il=new T,sl=new T,rl=new T;let Qo=!1;class xe{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Vn.subVectors(t,e),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Vn.subVectors(s,e),di.subVectors(i,e),nl.subVectors(t,e);const o=Vn.dot(Vn),a=Vn.dot(di),c=Vn.dot(nl),l=di.dot(di),u=di.dot(nl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(t,e,i,s,r,o,a,c){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static isFrontFacing(t,e,i,s){return Vn.subVectors(i,e),di.subVectors(t,e),Vn.cross(di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),xe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return xe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Zs.subVectors(s,i),Ks.subVectors(r,i),il.subVectors(t,i);const c=Zs.dot(il),l=Ks.dot(il);if(c<=0&&l<=0)return e.copy(i);sl.subVectors(t,s);const u=Zs.dot(sl),f=Ks.dot(sl);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Zs,o);rl.subVectors(t,r);const p=Zs.dot(rl),g=Ks.dot(rl);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Ks,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ff.subVectors(r,s),a=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(ff,a);const d=1/(m+v+h);return o=v*d,a=h*d,e.copy(i).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ta={h:0,s:0,l:0};function ol(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ie{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Uu(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ol(o,r,t+1/3),this.g=ol(o,r,t),this.b=ol(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=Cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}copyLinearToSRGB(t){return this.r=jc(t.r),this.g=jc(t.g),this.b=jc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return he.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ne(Ze.r*255,0,255))*65536+Math.round(Ne(Ze.g*255,0,255))*256+Math.round(Ne(Ze.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ze.copy(this),e);const i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Xe){he.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,s=Ze.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(ta);const i=lo(Ni.h,ta.h,e),s=lo(Ni.s,ta.s,e),r=lo(Ni.l,ta.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ie;ie.NAMES=Cp;let F0=0;class Br extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Er,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=nu,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eu&&(i.blendSrc=this.blendSrc),this.blendDst!==nu&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ec&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zs extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new T,ea=new Q;class Je{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jh&&(t.usage=this.usage),t}}class Rp extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Lp extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class le extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}}let N0=0;const wn=new se,al=new Ce,$s=new T,vn=new de,qr=new de,We=new T;class Be extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wp(t)?Lp:Rp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new de);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(vn.min,qr.min),vn.expandByPoint(We),We.addVectors(vn.max,qr.max),vn.expandByPoint(We)):(vn.expandByPoint(qr.min),vn.expandByPoint(qr.max))}vn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)We.fromBufferAttribute(a,l),c&&($s.fromBufferAttribute(t,l),We.add($s)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let M=0;M<a;M++)l[M]=new T,u[M]=new T;const f=new T,h=new T,p=new T,g=new Q,v=new Q,m=new Q,d=new T,x=new T;function _(M,R,D){f.fromArray(s,M*3),h.fromArray(s,R*3),p.fromArray(s,D*3),g.fromArray(o,M*2),v.fromArray(o,R*2),m.fromArray(o,D*2),h.sub(f),p.sub(f),v.sub(g),m.sub(g);const O=1/(v.x*m.y-m.x*v.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(O),x.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(O),l[M].add(d),l[R].add(d),l[D].add(d),u[M].add(x),u[R].add(x),u[D].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let M=0,R=y.length;M<R;++M){const D=y[M],O=D.start,I=D.count;for(let U=O,k=O+I;U<k;U+=3)_(i[U+0],i[U+1],i[U+2])}const E=new T,w=new T,b=new T,L=new T;function S(M){b.fromArray(r,M*3),L.copy(b);const R=l[M];E.copy(R),E.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(L,R);const O=w.dot(u[M])<0?-1:1;c[M*4]=E.x,c[M*4+1]=E.y,c[M*4+2]=E.z,c[M*4+3]=O}for(let M=0,R=y.length;M<R;++M){const D=y[M],O=D.start,I=D.count;for(let U=O,k=O+I;U<k;U+=3)S(i[U+0]),S(i[U+1]),S(i[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,u=new T,f=new T;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Je(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new se,hs=new Or,na=new Lo,pf=new T,Js=new T,Qs=new T,tr=new T,cl=new T,ia=new T,sa=new Q,ra=new Q,oa=new Q,mf=new T,gf=new T,_f=new T,aa=new T,ca=new T;class pt extends Ce{constructor(t=new Be,e=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(cl.fromBufferAttribute(f,t),o?ia.addScaledVector(cl,u):ia.addScaledVector(cl.sub(e),u))}e.add(ia)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(na.containsPoint(hs.origin)===!1&&(hs.intersectSphere(na,pf)===null||hs.origin.distanceToSquared(pf)>(t.far-t.near)**2))&&(df.copy(r).invert(),hs.copy(t.ray).applyMatrix4(df),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,E=_;y<E;y+=3){const w=a.getX(y),b=a.getX(y+1),L=a.getX(y+2);s=la(this,d,t,i,l,u,f,w,b,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=la(this,o,t,i,l,u,f,x,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,E=_;y<E;y+=3){const w=y,b=y+1,L=y+2;s=la(this,d,t,i,l,u,f,w,b,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=m,_=m+1,y=m+2;s=la(this,o,t,i,l,u,f,x,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function O0(n,t,e,i,s,r,o,a){let c;if(t.side===ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ri,a),c===null)return null;ca.copy(a),ca.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ca);return l<e.near||l>e.far?null:{distance:l,point:ca.clone(),object:n}}function la(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Js),n.getVertexPosition(c,Qs),n.getVertexPosition(l,tr);const u=O0(n,t,e,i,Js,Qs,tr,aa);if(u){s&&(sa.fromBufferAttribute(s,a),ra.fromBufferAttribute(s,c),oa.fromBufferAttribute(s,l),u.uv=xe.getInterpolation(aa,Js,Qs,tr,sa,ra,oa,new Q)),r&&(sa.fromBufferAttribute(r,a),ra.fromBufferAttribute(r,c),oa.fromBufferAttribute(r,l),u.uv1=xe.getInterpolation(aa,Js,Qs,tr,sa,ra,oa,new Q),u.uv2=u.uv1),o&&(mf.fromBufferAttribute(o,a),gf.fromBufferAttribute(o,c),_f.fromBufferAttribute(o,l),u.normal=xe.getInterpolation(aa,Js,Qs,tr,mf,gf,_f,new T),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new T,materialIndex:0};xe.getNormal(Js,Qs,tr,f.normal),u.face=f}return u}class me extends Be{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function g(v,m,d,x,_,y,E,w,b,L,S){const M=y/b,R=E/L,D=y/2,O=E/2,I=w/2,U=b+1,k=L+1;let X=0,Z=0;const V=new T;for(let tt=0;tt<k;tt++){const et=tt*R-O;for(let ut=0;ut<U;ut++){const j=ut*M-D;V[v]=j*x,V[m]=et*_,V[d]=I,l.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[d]=w>0?1:-1,u.push(V.x,V.y,V.z),f.push(ut/b),f.push(1-tt/L),X+=1}}for(let tt=0;tt<L;tt++)for(let et=0;et<b;et++){const ut=h+et+U*tt,j=h+et+U*(tt+1),nt=h+(et+1)+U*(tt+1),vt=h+(et+1)+U*tt;c.push(ut,j,vt),c.push(j,nt,vt),Z+=6}a.addGroup(p,Z,S),p+=Z,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function rn(n){const t={};for(let e=0;e<n.length;e++){const i=Rr(n[e]);for(const s in i)t[s]=i[s]}return t}function B0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ip(n){return n.getRenderTarget()===null?n.outputColorSpace:he.workingColorSpace}const z0={clone:Rr,merge:rn};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ds extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=B0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Dp extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends Dp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const er=-90,nr=1;class G0 extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(er,nr,t,e);s.layers=this.layers,this.add(s);const r=new yn(er,nr,t,e);r.layers=this.layers,this.add(r);const o=new yn(er,nr,t,e);o.layers=this.layers,this.add(o);const a=new yn(er,nr,t,e);a.layers=this.layers,this.add(a);const c=new yn(er,nr,t,e);c.layers=this.layers,this.add(c);const l=new yn(er,nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Up extends mn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ar,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class V0 extends Is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Cs?Xe:Ln),this.texture=new Up(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new me(5,5,5),r=new Ds({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ji});r.uniforms.tEquirect.value=e;const o=new pt(s,r),a=e.minFilter;return e.minFilter===Eo&&(e.minFilter=Cn),new G0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ll=new T,W0=new T,X0=new Kt;class fn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ll.subVectors(i,e).cross(W0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||X0.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Lo,ua=new T;class Nu{constructor(t=new fn,e=new fn,i=new fn,s=new fn,r=new fn,o=new fn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],x=s[13],_=s[14],y=s[15];if(i[0].setComponents(c-r,h-l,m-p,y-d).normalize(),i[1].setComponents(c+r,h+l,m+p,y+d).normalize(),i[2].setComponents(c+o,h+u,m+g,y+x).normalize(),i[3].setComponents(c-o,h-u,m-g,y-x).normalize(),i[4].setComponents(c-a,h-f,m-v,y-_).normalize(),e===wi)i[5].setComponents(c+a,h+f,m+v,y+_).normalize();else if(e===rc)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function q0(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,u){const f=l.array,h=l.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),l.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,f){const h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,l),p.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){const d=g[v];e?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}class Io extends Be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const x=d*h-o;for(let _=0;_<l;_++){const y=_*f-r;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<a;x++){const _=x+l*d,y=x+l*(d+1),E=x+1+l*(d+1),w=x+1+l*d;p.push(_,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.widthSegments,t.heightSegments)}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`#ifdef USE_BATCHING
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
#endif`,n_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,i_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o_=`#ifdef USE_IRIDESCENCE
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
#endif`,a_=`#ifdef USE_BUMPMAP
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,g_=`#define PI 3.141592653589793
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
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,x_=`vec3 transformedNormal = objectNormal;
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
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`
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
}`,w_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U_=`#ifdef USE_GRADIENTMAP
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
}`,F_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z_=`uniform bool receiveShadow;
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
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,H_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
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
#endif`,q_=`struct PhysicalMaterial {
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
}`,Y_=`
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ix=`#if defined( USE_POINTS_UV )
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
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
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
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lx=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,tv=`#define DISTANCE
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
}`,ev=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 diffuse;
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
}`,cv=`#define LAMBERT
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
}`,lv=`#define LAMBERT
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
}`,uv=`#define MATCAP
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
}`,hv=`#define MATCAP
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
}`,fv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
}`,xv=`#define TOON
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
}`,vv=`#define TOON
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
}`,yv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,Ev=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,wv=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Y0,alphahash_pars_fragment:j0,alphamap_fragment:Z0,alphamap_pars_fragment:K0,alphatest_fragment:$0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:t_,batching_pars_vertex:e_,batching_vertex:n_,begin_vertex:i_,beginnormal_vertex:s_,bsdfs:r_,iridescence_fragment:o_,bumpmap_pars_fragment:a_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:l_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:h_,color_fragment:f_,color_pars_fragment:d_,color_pars_vertex:p_,color_vertex:m_,common:g_,cube_uv_reflection_fragment:__,defaultnormal_vertex:x_,displacementmap_pars_vertex:v_,displacementmap_vertex:y_,emissivemap_fragment:M_,emissivemap_pars_fragment:S_,colorspace_fragment:E_,colorspace_pars_fragment:b_,envmap_fragment:w_,envmap_common_pars_fragment:T_,envmap_pars_fragment:A_,envmap_pars_vertex:P_,envmap_physical_pars_fragment:k_,envmap_vertex:C_,fog_vertex:R_,fog_pars_vertex:L_,fog_fragment:I_,fog_pars_fragment:D_,gradientmap_pars_fragment:U_,lightmap_fragment:F_,lightmap_pars_fragment:N_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:B_,lights_pars_begin:z_,lights_toon_fragment:H_,lights_toon_pars_fragment:G_,lights_phong_fragment:V_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:q_,lights_fragment_begin:Y_,lights_fragment_maps:j_,lights_fragment_end:Z_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:J_,logdepthbuf_vertex:Q_,map_fragment:tx,map_pars_fragment:ex,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:sx,metalnessmap_pars_fragment:rx,morphcolor_vertex:ox,morphnormal_vertex:ax,morphtarget_pars_vertex:cx,morphtarget_vertex:lx,normal_fragment_begin:ux,normal_fragment_maps:hx,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:xx,iridescence_pars_fragment:vx,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:Ex,dithering_fragment:bx,dithering_pars_fragment:wx,roughnessmap_fragment:Tx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Cx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Lx,skinbase_vertex:Ix,skinning_pars_vertex:Dx,skinning_vertex:Ux,skinnormal_vertex:Fx,specularmap_fragment:Nx,specularmap_pars_fragment:Ox,tonemapping_fragment:Bx,tonemapping_pars_fragment:zx,transmission_fragment:kx,transmission_pars_fragment:Hx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Yx,backgroundCube_vert:jx,backgroundCube_frag:Zx,cube_vert:Kx,cube_frag:$x,depth_vert:Jx,depth_frag:Qx,distanceRGBA_vert:tv,distanceRGBA_frag:ev,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:ov,meshbasic_frag:av,meshlambert_vert:cv,meshlambert_frag:lv,meshmatcap_vert:uv,meshmatcap_frag:hv,meshnormal_vert:fv,meshnormal_frag:dv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:xv,meshtoon_frag:vv,points_vert:yv,points_frag:Mv,shadow_vert:Sv,shadow_frag:Ev,sprite_vert:bv,sprite_frag:wv},_t={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ni={basic:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ie(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:rn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:rn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ie(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:rn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:rn([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:rn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:rn([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:rn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:rn([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:rn([_t.common,_t.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:rn([_t.lights,_t.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ni.physical={uniforms:rn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ha={r:0,b:0,g:0};function Tv(n,t,e,i,s,r,o){const a=new ie(0);let c=r===!0?0:1,l,u,f=null,h=0,p=null;function g(m,d){let x=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Sc)?(u===void 0&&(u=new pt(new me(1,1,1),new Ds({name:"BackgroundCubeMaterial",uniforms:Rr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=he.getTransfer(_.colorSpace)!==_e,(f!==_||h!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new pt(new Io(2,2),new Ds({name:"BackgroundMaterial",uniforms:Rr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=he.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,d){m.getRGB(ha,Ip(n)),i.buffers.color.setClear(ha.r,ha.g,ha.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function Av(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function f(I,U,k,X,Z){let V=!1;if(o){const tt=v(X,k,U);l!==tt&&(l=tt,p(l.object)),V=d(I,X,k,Z),V&&x(I,X,k,Z)}else{const tt=U.wireframe===!0;(l.geometry!==X.id||l.program!==k.id||l.wireframe!==tt)&&(l.geometry=X.id,l.program=k.id,l.wireframe=tt,V=!0)}Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,L(I,U,k,X),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,U,k){const X=k.wireframe===!0;let Z=a[I.id];Z===void 0&&(Z={},a[I.id]=Z);let V=Z[U.id];V===void 0&&(V={},Z[U.id]=V);let tt=V[X];return tt===void 0&&(tt=m(h()),V[X]=tt),tt}function m(I){const U=[],k=[],X=[];for(let Z=0;Z<s;Z++)U[Z]=0,k[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:X,object:I,attributes:{},index:null}}function d(I,U,k,X){const Z=l.attributes,V=U.attributes;let tt=0;const et=k.getAttributes();for(const ut in et)if(et[ut].location>=0){const nt=Z[ut];let vt=V[ut];if(vt===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(vt=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(vt=I.instanceColor)),nt===void 0||nt.attribute!==vt||vt&&nt.data!==vt.data)return!0;tt++}return l.attributesNum!==tt||l.index!==X}function x(I,U,k,X){const Z={},V=U.attributes;let tt=0;const et=k.getAttributes();for(const ut in et)if(et[ut].location>=0){let nt=V[ut];nt===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));const vt={};vt.attribute=nt,nt&&nt.data&&(vt.data=nt.data),Z[ut]=vt,tt++}l.attributes=Z,l.attributesNum=tt,l.index=X}function _(){const I=l.newAttributes;for(let U=0,k=I.length;U<k;U++)I[U]=0}function y(I){E(I,0)}function E(I,U){const k=l.newAttributes,X=l.enabledAttributes,Z=l.attributeDivisors;k[I]=1,X[I]===0&&(n.enableVertexAttribArray(I),X[I]=1),Z[I]!==U&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),Z[I]=U)}function w(){const I=l.newAttributes,U=l.enabledAttributes;for(let k=0,X=U.length;k<X;k++)U[k]!==I[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function b(I,U,k,X,Z,V,tt){tt===!0?n.vertexAttribIPointer(I,U,k,Z,V):n.vertexAttribPointer(I,U,k,X,Z,V)}function L(I,U,k,X){if(i.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const Z=X.attributes,V=k.getAttributes(),tt=U.defaultAttributeValues;for(const et in V){const ut=V[et];if(ut.location>=0){let j=Z[et];if(j===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const nt=j.normalized,vt=j.itemSize,wt=e.get(j);if(wt===void 0)continue;const bt=wt.buffer,Ot=wt.type,zt=wt.bytesPerElement,At=i.isWebGL2===!0&&(Ot===n.INT||Ot===n.UNSIGNED_INT||j.gpuType===mp);if(j.isInterleavedBufferAttribute){const kt=j.data,N=kt.stride,ht=j.offset;if(kt.isInstancedInterleavedBuffer){for(let K=0;K<ut.locationSize;K++)E(ut.location+K,kt.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let K=0;K<ut.locationSize;K++)y(ut.location+K);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let K=0;K<ut.locationSize;K++)b(ut.location+K,vt/ut.locationSize,Ot,nt,N*zt,(ht+vt/ut.locationSize*K)*zt,At)}else{if(j.isInstancedBufferAttribute){for(let kt=0;kt<ut.locationSize;kt++)E(ut.location+kt,j.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let kt=0;kt<ut.locationSize;kt++)y(ut.location+kt);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let kt=0;kt<ut.locationSize;kt++)b(ut.location+kt,vt/ut.locationSize,Ot,nt,vt*zt,vt/ut.locationSize*kt*zt,At)}}else if(tt!==void 0){const nt=tt[et];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(ut.location,nt);break;case 3:n.vertexAttrib3fv(ut.location,nt);break;case 4:n.vertexAttrib4fv(ut.location,nt);break;default:n.vertexAttrib1fv(ut.location,nt)}}}}w()}function S(){D();for(const I in a){const U=a[I];for(const k in U){const X=U[k];for(const Z in X)g(X[Z].object),delete X[Z];delete U[k]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;const U=a[I.id];for(const k in U){const X=U[k];for(const Z in X)g(X[Z].object),delete X[Z];delete U[k]}delete a[I.id]}function R(I){for(const U in a){const k=a[U];if(k[I.id]===void 0)continue;const X=k[I.id];for(const Z in X)g(X[Z].object),delete X[Z];delete k[I.id]}}function D(){O(),u=!0,l!==c&&(l=c,p(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:D,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function Pv(n,t,e,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,f){n.drawArrays(r,u,f),e.update(f,r,1)}function c(u,f,h){if(h===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,f,h),e.update(f,r,h)}function l(u,f,h){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Cv(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||t.has("OES_texture_float"),E=_&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:w}}function Rv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new fn,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const x=r?0:i,_=x*4;let y=d.clippingState||null;c.value=y,y=u(g,h,_,p);for(let E=0;E!==_;++E)y[E]=e[E];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Lv(n){let t=new WeakMap;function e(o,a){return a===iu?o.mapping=Ar:a===su&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===iu||a===su)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new V0(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Np extends Dp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gr=4,xf=[.125,.215,.35,.446,.526,.582],Ss=20,ul=new Np,vf=new ie;let hl=null,fl=0,dl=0;const xs=(1+Math.sqrt(5))/2,ir=1/xs,yf=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,xs,ir),new T(0,xs,-ir),new T(ir,0,xs),new T(-ir,0,xs),new T(xs,ir,0),new T(-xs,ir,0)];class Mf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,fl,dl),t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ar||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:bo,format:jn,colorSpace:Ai,depthBuffer:!1},s=Sf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iv(r)),this._blurMaterial=Dv(r,t,e)}return s}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,i,s){const a=new yn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(vf),u.toneMapping=Qi,u.autoClear=!1;const p=new zs({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new pt(new me,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(vf),v=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):x===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const _=this._cubeSize;fa(s,x*_,d>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ar||t.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;fa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ul)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yf[(s-1)%yf.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pt(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ss-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const d=[];let x=0;for(let b=0;b<Ss;++b){const L=b/v,S=Math.exp(-L*L/2);d.push(S),b===0?x+=S:b<m&&(x+=2*S)}for(let b=0;b<d.length;b++)d[b]=d[b]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[s],E=3*y*(s>_-gr?s-_+gr:0),w=4*(this._cubeSize-y);fa(e,E,w,3*y,2*y),c.setRenderTarget(e),c.render(f,ul)}}function Iv(n){const t=[],e=[],i=[];let s=n;const r=n-gr+1+xf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-gr?c=xf[o-n+gr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,L=w>2?0:-1,S=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];x.set(S,v*g*w),_.set(h,m*g*w);const M=[w,w,w,w,w,w];y.set(M,d*g*w)}const E=new Be;E.setAttribute("position",new Je(x,v)),E.setAttribute("uv",new Je(_,m)),E.setAttribute("faceIndex",new Je(y,d)),t.push(E),s>gr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sf(n,t,e){const i=new Is(n,t,e);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Dv(n,t,e){const i=new Float32Array(Ss),s=new T(0,1,0);return new Ds({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ef(){return new Ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function bf(){return new Ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function Uv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===iu||c===su,u=c===Ar||c===Pr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Mf(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&s(f)){e===null&&(e=new Mf(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Fv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Nv(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],n.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const E=x[_+0],w=x[_+1],b=x[_+2];h.push(E,w,w,b,b,E)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const E=_+0,w=_+1,b=_+2;h.push(E,w,w,b,b,E)}}else return;const m=new(wp(h)?Lp:Rp)(h,1);m.version=v;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Ov(n,t,e,i){const s=i.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(r,g,a,p*c),e.update(g,r,1)}function f(p,g,v){if(v===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,v),e.update(g,r,v)}function h(p,g,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<v;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let d=0;for(let x=0;x<v;x++)d+=g[x];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Bv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function zv(n,t){return n[0]-t[0]}function kv(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Hv(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ve,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let I=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let S=u.attributes.position.count*L,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*M*4*g),D=new Pp(R,S,M,g);D.type=ji,D.needsUpdate=!0;const O=L*4;for(let U=0;U<g;U++){const k=E[U],X=w[U],Z=b[U],V=S*M*4*U;for(let tt=0;tt<k.count;tt++){const et=tt*O;x===!0&&(o.fromBufferAttribute(k,tt),R[V+et+0]=o.x,R[V+et+1]=o.y,R[V+et+2]=o.z,R[V+et+3]=0),_===!0&&(o.fromBufferAttribute(X,tt),R[V+et+4]=o.x,R[V+et+5]=o.y,R[V+et+6]=o.z,R[V+et+7]=0),y===!0&&(o.fromBufferAttribute(Z,tt),R[V+et+8]=o.x,R[V+et+9]=o.y,R[V+et+10]=o.z,R[V+et+11]=Z.itemSize===4?o.w:1)}}v={count:g,texture:D,size:new Q(S,M)},r.set(u,v),u.addEventListener("dispose",I)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const p=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<p;_++){const y=g[_];y[0]=_,y[1]=h[_]}g.sort(kv);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(zv);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let _=0;_<8;_++){const y=a[_],E=y[0],w=y[1];E!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+_)!==v[E]&&u.setAttribute("morphTarget"+_,v[E]),m&&u.getAttribute("morphNormal"+_)!==m[E]&&u.setAttribute("morphNormal"+_,m[E]),s[_]=w,d+=w):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const x=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Gv(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Op extends mn{constructor(t,e,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:Ps,u!==Ps&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ps&&(i=Yi),i===void 0&&u===Cr&&(i=As),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bp=new mn,zp=new Op(1,1);zp.compareFunction=bp;const kp=new Pp,Hp=new T0,Gp=new Up,wf=[],Tf=[],Af=new Float32Array(16),Pf=new Float32Array(9),Cf=new Float32Array(4);function zr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function bc(n,t){let e=Tf[t];e===void 0&&(e=new Int32Array(t),Tf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Vv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function Yv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),He(e,i)}}function jv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,i))return;Pf.set(i),n.uniformMatrix3fv(this.addr,!1,Pf),He(e,i)}}function Zv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),He(e,i)}}function Kv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function Jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function Qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function ty(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function ny(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function sy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?zp:Bp;e.setTexture2D(t||r,s)}function ry(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hp,s)}function oy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gp,s)}function ay(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kp,s)}function cy(n){switch(n){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return jv;case 35676:return Zv;case 5124:case 35670:return Kv;case 35667:case 35671:return $v;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return ty;case 36294:return ey;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ay}}function ly(n,t){n.uniform1fv(this.addr,t)}function uy(n,t){const e=zr(t,this.size,2);n.uniform2fv(this.addr,e)}function hy(n,t){const e=zr(t,this.size,3);n.uniform3fv(this.addr,e)}function fy(n,t){const e=zr(t,this.size,4);n.uniform4fv(this.addr,e)}function dy(n,t){const e=zr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function py(n,t){const e=zr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function my(n,t){const e=zr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gy(n,t){n.uniform1iv(this.addr,t)}function _y(n,t){n.uniform2iv(this.addr,t)}function xy(n,t){n.uniform3iv(this.addr,t)}function vy(n,t){n.uniform4iv(this.addr,t)}function yy(n,t){n.uniform1uiv(this.addr,t)}function My(n,t){n.uniform2uiv(this.addr,t)}function Sy(n,t){n.uniform3uiv(this.addr,t)}function Ey(n,t){n.uniform4uiv(this.addr,t)}function by(n,t,e){const i=this.cache,s=t.length,r=bc(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bp,r[o])}function wy(n,t,e){const i=this.cache,s=t.length,r=bc(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hp,r[o])}function Ty(n,t,e){const i=this.cache,s=t.length,r=bc(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gp,r[o])}function Ay(n,t,e){const i=this.cache,s=t.length,r=bc(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kp,r[o])}function Py(n){switch(n){case 5126:return ly;case 35664:return uy;case 35665:return hy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return xy;case 35669:case 35673:return vy;case 5125:return yy;case 36294:return My;case 36295:return Sy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}class Cy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cy(e.type)}}class Ry{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Py(e.type)}}class Ly{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Rf(n,t){n.seq.push(t),n.map[t.id]=t}function Iy(n,t,e){const i=n.name,s=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),o=pl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rf(e,l===void 0?new Cy(a,n,t):new Ry(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Ly(a),Rf(e,f)),e=f}}}class Ya{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Iy(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Lf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Dy=37297;let Uy=0;function Fy(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Ny(n){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(n);let i;switch(t===e?i="":t===sc&&e===ic?i="LinearDisplayP3ToLinearSRGB":t===ic&&e===sc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case Ec:return[i,"LinearTransferOETF"];case Xe:case Du:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function If(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fy(n.getShaderSource(t),o)}else return s}function Oy(n,t){const e=Ny(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function By(n,t){let e;switch(t){case Ng:e="Linear";break;case Og:e="Reinhard";break;case Bg:e="OptimizedCineon";break;case zg:e="ACESFilmic";break;case Hg:e="AgX";break;case kg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function zy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function ky(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function Hy(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function _r(n){return n!==""}function Df(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(n){return n.replace(Vy,Xy)}const Wy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xy(n,t){let e=Yt[t];if(e===void 0){const i=Wy.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return lu(e)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(n){return n.replace(qy,Yy)}function Yy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ug?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function Zy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ar:case Pr:t="ENVMAP_TYPE_CUBE";break;case Sc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ky(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function $y(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dp:t="ENVMAP_BLENDING_MULTIPLY";break;case Ug:t="ENVMAP_BLENDING_MIX";break;case Fg:t="ENVMAP_BLENDING_ADD";break}return t}function Jy(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Qy(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=jy(e),l=Zy(e),u=Ky(e),f=$y(e),h=Jy(e),p=e.isWebGL2?"":zy(e),g=ky(e),v=Hy(r),m=s.createProgram();let d,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_r).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_r).join(`
`),x.length>0&&(x+=`
`)):(d=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),x=[p,Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Qi?By("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Oy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),o=lu(o),o=Df(o,e),o=Uf(o,e),a=lu(a),a=Df(a,e),a=Uf(a,e),o=Ff(o),a=Ff(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+d+o,E=_+x+a,w=Lf(s,s.VERTEX_SHADER,y),b=Lf(s,s.FRAGMENT_SHADER,E);s.attachShader(m,w),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(w).trim(),U=s.getShaderInfoLog(b).trim();let k=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,w,b);else{const Z=If(s,w,"vertex"),V=If(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+Z+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||U==="")&&(X=!1);X&&(D.diagnostics={runnable:k,programLog:O,vertexShader:{log:I,prefix:d},fragmentShader:{log:U,prefix:x}})}s.deleteShader(w),s.deleteShader(b),S=new Ya(s,m),M=Gy(s,m)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,Dy)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uy++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}let tM=0;class eM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new nM(t),e.set(t,i)),i}}class nM{constructor(t){this.id=tM++,this.code=t,this.usedTimes=0}}function iM(n,t,e,i,s,r,o){const a=new Fu,c=new eM,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,M,R,D,O){const I=D.fog,U=O.geometry,k=S.isMeshStandardMaterial?D.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),Z=X&&X.mapping===Sc?X.image.height:null,V=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=tt!==void 0?tt.length:0;let ut=0;U.morphAttributes.position!==void 0&&(ut=1),U.morphAttributes.normal!==void 0&&(ut=2),U.morphAttributes.color!==void 0&&(ut=3);let j,nt,vt,wt;if(V){const tn=ni[V];j=tn.vertexShader,nt=tn.fragmentShader}else j=S.vertexShader,nt=S.fragmentShader,c.update(S),vt=c.getVertexShaderID(S),wt=c.getFragmentShaderID(S);const bt=n.getRenderTarget(),Ot=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,At=!!S.map,kt=!!S.matcap,N=!!X,ht=!!S.aoMap,K=!!S.lightMap,ct=!!S.bumpMap,$=!!S.normalMap,Ct=!!S.displacementMap,yt=!!S.emissiveMap,P=!!S.metalnessMap,A=!!S.roughnessMap,G=S.anisotropy>0,at=S.clearcoat>0,st=S.iridescence>0,it=S.sheen>0,Tt=S.transmission>0,xt=G&&!!S.anisotropyMap,Mt=at&&!!S.clearcoatMap,Ut=at&&!!S.clearcoatNormalMap,Vt=at&&!!S.clearcoatRoughnessMap,rt=st&&!!S.iridescenceMap,$t=st&&!!S.iridescenceThicknessMap,F=it&&!!S.sheenColorMap,ot=it&&!!S.sheenRoughnessMap,gt=!!S.specularMap,lt=!!S.specularColorMap,Rt=!!S.specularIntensityMap,Jt=Tt&&!!S.transmissionMap,re=Tt&&!!S.thicknessMap,jt=!!S.gradientMap,mt=!!S.alphaMap,B=S.alphaTest>0,ft=!!S.alphaHash,dt=!!S.extensions,Nt=!!U.attributes.uv1,Lt=!!U.attributes.uv2,ae=!!U.attributes.uv3;let ce=Qi;return S.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ce=n.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:nt,defines:S.defines,customVertexShaderID:vt,customFragmentShaderID:wt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:zt,instancing:Ot,instancingColor:Ot&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ai,map:At,matcap:kt,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:Z,aoMap:ht,lightMap:K,bumpMap:ct,normalMap:$,displacementMap:h&&Ct,emissiveMap:yt,normalMapObjectSpace:$&&S.normalMapType===Qg,normalMapTangentSpace:$&&S.normalMapType===Ep,metalnessMap:P,roughnessMap:A,anisotropy:G,anisotropyMap:xt,clearcoat:at,clearcoatMap:Mt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Vt,iridescence:st,iridescenceMap:rt,iridescenceThicknessMap:$t,sheen:it,sheenColorMap:F,sheenRoughnessMap:ot,specularMap:gt,specularColorMap:lt,specularIntensityMap:Rt,transmission:Tt,transmissionMap:Jt,thicknessMap:re,gradientMap:jt,opaque:S.transparent===!1&&S.blending===Er,alphaMap:mt,alphaTest:B,alphaHash:ft,combine:S.combine,mapUv:At&&v(S.map.channel),aoMapUv:ht&&v(S.aoMap.channel),lightMapUv:K&&v(S.lightMap.channel),bumpMapUv:ct&&v(S.bumpMap.channel),normalMapUv:$&&v(S.normalMap.channel),displacementMapUv:Ct&&v(S.displacementMap.channel),emissiveMapUv:yt&&v(S.emissiveMap.channel),metalnessMapUv:P&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:xt&&v(S.anisotropyMap.channel),clearcoatMapUv:Mt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:F&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ot&&v(S.sheenRoughnessMap.channel),specularMapUv:gt&&v(S.specularMap.channel),specularColorMapUv:lt&&v(S.specularColorMap.channel),specularIntensityMapUv:Rt&&v(S.specularIntensityMap.channel),transmissionMapUv:Jt&&v(S.transmissionMap.channel),thicknessMapUv:re&&v(S.thicknessMap.channel),alphaMapUv:mt&&v(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:Lt,vertexUv3s:ae,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(At||mt),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:At&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===an,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:dt&&S.extensions.derivatives===!0,extensionFragDepth:dt&&S.extensions.fragDepth===!0,extensionDrawBuffers:dt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const M=g[S.type];let R;if(M){const D=ni[M];R=z0.clone(D.uniforms)}else R=S.uniforms;return R}function E(S,M){let R;for(let D=0,O=l.length;D<O;D++){const I=l[D];if(I.cacheKey===M){R=I,++R.usedTimes;break}}return R===void 0&&(R=new Qy(n,M,S,r),l.push(R)),R}function w(S){if(--S.usedTimes===0){const M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),S.destroy()}}function b(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:L}}function sM(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function rM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Of(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,h,p,g,v,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),t++,d}function a(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(f,h){e.length>1&&e.sort(f||rM),i.length>1&&i.sort(h||Of),s.length>1&&s.sort(h||Of)}function u(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function oM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Bf,n.set(i,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function aM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new ie};break;case"SpotLight":e={position:new T,direction:new T,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new T,halfWidth:new T,halfHeight:new T};break}return n[t.id]=e,e}}}function cM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let lM=0;function uM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function hM(n,t){const e=new aM,i=cM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new T);const r=new T,o=new se,a=new se;function c(u,f){let h=0,p=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let v=0,m=0,d=0,x=0,_=0,y=0,E=0,w=0,b=0,L=0,S=0;u.sort(uM);const M=f===!0?Math.PI:1;for(let D=0,O=u.length;D<O;D++){const I=u[D],U=I.color,k=I.intensity,X=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*k*M,p+=U.g*k*M,g+=U.b*k*M;else if(I.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(I.sh.coefficients[V],k);S++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const tt=I.shadow,et=i.get(I);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,s.directionalShadow[v]=et,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=I.shadow.matrix,y++}s.directional[v]=V,v++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(U).multiplyScalar(k*M),V.distance=X,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,s.spot[d]=V;const tt=I.shadow;if(I.map&&(s.spotLightMap[b]=I.map,b++,tt.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[d]=tt.matrix,I.castShadow){const et=i.get(I);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,s.spotShadow[d]=et,s.spotShadowMap[d]=Z,w++}d++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(U).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),s.rectArea[x]=V,x++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*M),V.distance=I.distance,V.decay=I.decay,I.castShadow){const tt=I.shadow,et=i.get(I);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,s.pointShadow[m]=et,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=I.shadow.matrix,E++}s.point[m]=V,m++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(k*M),V.groundColor.copy(I.groundColor).multiplyScalar(k*M),s.hemi[_]=V,_++}}x>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const R=s.hash;(R.directionalLength!==v||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==x||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==E||R.numSpotShadows!==w||R.numSpotMaps!==b||R.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=w+b-L,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=S,R.directionalLength=v,R.pointLength=m,R.spotLength=d,R.rectAreaLength=x,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=E,R.numSpotShadows=w,R.numSpotMaps=b,R.numLightProbes=S,s.version=lM++)}function l(u,f){let h=0,p=0,g=0,v=0,m=0;const d=f.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const y=u[x];if(y.isDirectionalLight){const E=s.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),h++}else if(y.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const E=s.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function zf(n,t){const e=new hM(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fM(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new zf(n,t),e.set(r,[c])):o>=a.length?(c=new zf(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class dM extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pM extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
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
}`;function _M(n,t,e){let i=new Nu;const s=new Q,r=new Q,o=new ve,a=new dM({depthPacking:Jg}),c=new pM,l={},u=e.maxTextureSize,f={[ri]:ln,[ln]:ri,[an]:an},h=new Ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fp;let d=this.type;this.render=function(w,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ji),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=d!==vi&&this.type===vi,I=d===vi&&this.type!==vi;for(let U=0,k=w.length;U<k;U++){const X=w[U],Z=X.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const V=Z.getFrameExtents();if(s.multiply(V),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,Z.mapSize.y=r.y)),Z.map===null||O===!0||I===!0){const et=this.type!==vi?{minFilter:on,magFilter:on}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Is(s.x,s.y,et),Z.map.texture.name=X.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const tt=Z.getViewportCount();for(let et=0;et<tt;et++){const ut=Z.getViewport(et);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),D.viewport(o),Z.updateMatrices(X,et),i=Z.getFrustum(),y(b,L,Z.camera,X,this.type)}Z.isPointLightShadow!==!0&&this.type===vi&&x(Z,L),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,R)};function x(w,b){const L=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Is(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,L,h,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,L,p,v,null)}function _(w,b,L,S){let M=null;const R=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=M.uuid,O=b.uuid;let I=l[D];I===void 0&&(I={},l[D]=I);let U=I[O];U===void 0&&(U=M.clone(),I[O]=U,b.addEventListener("dispose",E)),M=U}if(M.visible=b.visible,M.wireframe=b.wireframe,S===vi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=L}return M}function y(w,b,L,S,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===vi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const O=t.update(w),I=w.material;if(Array.isArray(I)){const U=O.groups;for(let k=0,X=U.length;k<X;k++){const Z=U[k],V=I[Z.materialIndex];if(V&&V.visible){const tt=_(w,V,S,M);w.onBeforeShadow(n,w,b,L,O,tt,Z),n.renderBufferDirect(L,null,O,tt,w,Z),w.onAfterShadow(n,w,b,L,O,tt,Z)}}}else if(I.visible){const U=_(w,I,S,M);w.onBeforeShadow(n,w,b,L,O,U,null),n.renderBufferDirect(L,null,O,U,w,null),w.onAfterShadow(n,w,b,L,O,U,null)}}const D=w.children;for(let O=0,I=D.length;O<I;O++)y(D[O],b,L,S,M)}function E(w){w.target.removeEventListener("dispose",E);for(const L in l){const S=l[L],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function xM(n,t,e){const i=e.isWebGL2;function s(){let B=!1;const ft=new ve;let dt=null;const Nt=new ve(0,0,0,0);return{setMask:function(Lt){dt!==Lt&&!B&&(n.colorMask(Lt,Lt,Lt,Lt),dt=Lt)},setLocked:function(Lt){B=Lt},setClear:function(Lt,ae,ce,Ge,tn){tn===!0&&(Lt*=Ge,ae*=Ge,ce*=Ge),ft.set(Lt,ae,ce,Ge),Nt.equals(ft)===!1&&(n.clearColor(Lt,ae,ce,Ge),Nt.copy(ft))},reset:function(){B=!1,dt=null,Nt.set(-1,0,0,0)}}}function r(){let B=!1,ft=null,dt=null,Nt=null;return{setTest:function(Lt){Lt?zt(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(Lt){ft!==Lt&&!B&&(n.depthMask(Lt),ft=Lt)},setFunc:function(Lt){if(dt!==Lt){switch(Lt){case Ag:n.depthFunc(n.NEVER);break;case Pg:n.depthFunc(n.ALWAYS);break;case Cg:n.depthFunc(n.LESS);break;case ec:n.depthFunc(n.LEQUAL);break;case Rg:n.depthFunc(n.EQUAL);break;case Lg:n.depthFunc(n.GEQUAL);break;case Ig:n.depthFunc(n.GREATER);break;case Dg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=Lt}},setLocked:function(Lt){B=Lt},setClear:function(Lt){Nt!==Lt&&(n.clearDepth(Lt),Nt=Lt)},reset:function(){B=!1,ft=null,dt=null,Nt=null}}}function o(){let B=!1,ft=null,dt=null,Nt=null,Lt=null,ae=null,ce=null,Ge=null,tn=null;return{setTest:function(ge){B||(ge?zt(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(ge){ft!==ge&&!B&&(n.stencilMask(ge),ft=ge)},setFunc:function(ge,en,Jn){(dt!==ge||Nt!==en||Lt!==Jn)&&(n.stencilFunc(ge,en,Jn),dt=ge,Nt=en,Lt=Jn)},setOp:function(ge,en,Jn){(ae!==ge||ce!==en||Ge!==Jn)&&(n.stencilOp(ge,en,Jn),ae=ge,ce=en,Ge=Jn)},setLocked:function(ge){B=ge},setClear:function(ge){tn!==ge&&(n.clearStencil(ge),tn=ge)},reset:function(){B=!1,ft=null,dt=null,Nt=null,Lt=null,ae=null,ce=null,Ge=null,tn=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,d=!1,x=null,_=null,y=null,E=null,w=null,b=null,L=null,S=new ie(0,0,0),M=0,R=!1,D=null,O=null,I=null,U=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Z=V>=1):tt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Z=V>=2);let et=null,ut={};const j=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),vt=new ve().fromArray(j),wt=new ve().fromArray(nt);function bt(B,ft,dt,Nt){const Lt=new Uint8Array(4),ae=n.createTexture();n.bindTexture(B,ae),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<dt;ce++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(ft,0,n.RGBA,1,1,Nt,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(ft+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return ae}const Ot={};Ot[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ot[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ot[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ot[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),zt(n.DEPTH_TEST),c.setFunc(ec),yt(!1),P(vh),zt(n.CULL_FACE),$(Ji);function zt(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function At(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function kt(B,ft){return p[B]!==ft?(n.bindFramebuffer(B,ft),p[B]=ft,i&&(B===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ft),B===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ft)),!0):!1}function N(B,ft){let dt=v,Nt=!1;if(B)if(dt=g.get(ft),dt===void 0&&(dt=[],g.set(ft,dt)),B.isWebGLMultipleRenderTargets){const Lt=B.texture;if(dt.length!==Lt.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,ce=Lt.length;ae<ce;ae++)dt[ae]=n.COLOR_ATTACHMENT0+ae;dt.length=Lt.length,Nt=!0}}else dt[0]!==n.COLOR_ATTACHMENT0&&(dt[0]=n.COLOR_ATTACHMENT0,Nt=!0);else dt[0]!==n.BACK&&(dt[0]=n.BACK,Nt=!0);Nt&&(e.isWebGL2?n.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ht(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const K={[Ms]:n.FUNC_ADD,[fg]:n.FUNC_SUBTRACT,[dg]:n.FUNC_REVERSE_SUBTRACT};if(i)K[Eh]=n.MIN,K[bh]=n.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(K[Eh]=B.MIN_EXT,K[bh]=B.MAX_EXT)}const ct={[pg]:n.ZERO,[mg]:n.ONE,[gg]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[Sg]:n.SRC_ALPHA_SATURATE,[yg]:n.DST_COLOR,[xg]:n.DST_ALPHA,[_g]:n.ONE_MINUS_SRC_COLOR,[nu]:n.ONE_MINUS_SRC_ALPHA,[Mg]:n.ONE_MINUS_DST_COLOR,[vg]:n.ONE_MINUS_DST_ALPHA,[Eg]:n.CONSTANT_COLOR,[bg]:n.ONE_MINUS_CONSTANT_COLOR,[wg]:n.CONSTANT_ALPHA,[Tg]:n.ONE_MINUS_CONSTANT_ALPHA};function $(B,ft,dt,Nt,Lt,ae,ce,Ge,tn,ge){if(B===Ji){d===!0&&(At(n.BLEND),d=!1);return}if(d===!1&&(zt(n.BLEND),d=!0),B!==hg){if(B!==x||ge!==R){if((_!==Ms||w!==Ms)&&(n.blendEquation(n.FUNC_ADD),_=Ms,w=Ms),ge)switch(B){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,E=null,b=null,L=null,S.set(0,0,0),M=0,x=B,R=ge}return}Lt=Lt||ft,ae=ae||dt,ce=ce||Nt,(ft!==_||Lt!==w)&&(n.blendEquationSeparate(K[ft],K[Lt]),_=ft,w=Lt),(dt!==y||Nt!==E||ae!==b||ce!==L)&&(n.blendFuncSeparate(ct[dt],ct[Nt],ct[ae],ct[ce]),y=dt,E=Nt,b=ae,L=ce),(Ge.equals(S)===!1||tn!==M)&&(n.blendColor(Ge.r,Ge.g,Ge.b,tn),S.copy(Ge),M=tn),x=B,R=!1}function Ct(B,ft){B.side===an?At(n.CULL_FACE):zt(n.CULL_FACE);let dt=B.side===ln;ft&&(dt=!dt),yt(dt),B.blending===Er&&B.transparent===!1?$(Ji):$(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);const Nt=B.stencilWrite;l.setTest(Nt),Nt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),G(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?zt(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(B){D!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),D=B)}function P(B){B!==cg?(zt(n.CULL_FACE),B!==O&&(B===vh?n.cullFace(n.BACK):B===lg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),O=B}function A(B){B!==I&&(Z&&n.lineWidth(B),I=B)}function G(B,ft,dt){B?(zt(n.POLYGON_OFFSET_FILL),(U!==ft||k!==dt)&&(n.polygonOffset(ft,dt),U=ft,k=dt)):At(n.POLYGON_OFFSET_FILL)}function at(B){B?zt(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function st(B){B===void 0&&(B=n.TEXTURE0+X-1),et!==B&&(n.activeTexture(B),et=B)}function it(B,ft,dt){dt===void 0&&(et===null?dt=n.TEXTURE0+X-1:dt=et);let Nt=ut[dt];Nt===void 0&&(Nt={type:void 0,texture:void 0},ut[dt]=Nt),(Nt.type!==B||Nt.texture!==ft)&&(et!==dt&&(n.activeTexture(dt),et=dt),n.bindTexture(B,ft||Ot[B]),Nt.type=B,Nt.texture=ft)}function Tt(){const B=ut[et];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function xt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(B){vt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),vt.copy(B))}function Jt(B){wt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),wt.copy(B))}function re(B,ft){let dt=f.get(ft);dt===void 0&&(dt=new WeakMap,f.set(ft,dt));let Nt=dt.get(B);Nt===void 0&&(Nt=n.getUniformBlockIndex(ft,B.name),dt.set(B,Nt))}function jt(B,ft){const Nt=f.get(ft).get(B);u.get(ft)!==Nt&&(n.uniformBlockBinding(ft,Nt,B.__bindingPointIndex),u.set(ft,Nt))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},et=null,ut={},p={},g=new WeakMap,v=[],m=null,d=!1,x=null,_=null,y=null,E=null,w=null,b=null,L=null,S=new ie(0,0,0),M=0,R=!1,D=null,O=null,I=null,U=null,k=null,vt.set(0,0,n.canvas.width,n.canvas.height),wt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:zt,disable:At,bindFramebuffer:kt,drawBuffers:N,useProgram:ht,setBlending:$,setMaterial:Ct,setFlipSided:yt,setCullFace:P,setLineWidth:A,setPolygonOffset:G,setScissorTest:at,activeTexture:st,bindTexture:it,unbindTexture:Tt,compressedTexImage2D:xt,compressedTexImage3D:Mt,texImage2D:gt,texImage3D:lt,updateUBOMapping:re,uniformBlockBinding:jt,texStorage2D:F,texStorage3D:ot,texSubImage2D:Ut,texSubImage3D:Vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:$t,scissor:Rt,viewport:Jt,reset:mt}}function vM(n,t,e,i,s,r,o){const a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):ac("canvas")}function v(P,A,G,at){let st=1;if((P.width>at||P.height>at)&&(st=at/Math.max(P.width,P.height)),st<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const it=A?oc:Math.floor,Tt=it(st*P.width),xt=it(st*P.height);f===void 0&&(f=g(Tt,xt));const Mt=G?g(Tt,xt):f;return Mt.width=Tt,Mt.height=xt,Mt.getContext("2d").drawImage(P,0,0,Tt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Tt+"x"+xt+")."),Mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return cu(P.width)&&cu(P.height)}function d(P){return a?!1:P.wrapS!==Yn||P.wrapT!==Yn||P.minFilter!==on&&P.minFilter!==Cn}function x(P,A){return P.generateMipmaps&&A&&P.minFilter!==on&&P.minFilter!==Cn}function _(P){n.generateMipmap(P)}function y(P,A,G,at,st=!1){if(a===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let it=A;if(A===n.RED&&(G===n.FLOAT&&(it=n.R32F),G===n.HALF_FLOAT&&(it=n.R16F),G===n.UNSIGNED_BYTE&&(it=n.R8)),A===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.R8UI),G===n.UNSIGNED_SHORT&&(it=n.R16UI),G===n.UNSIGNED_INT&&(it=n.R32UI),G===n.BYTE&&(it=n.R8I),G===n.SHORT&&(it=n.R16I),G===n.INT&&(it=n.R32I)),A===n.RG&&(G===n.FLOAT&&(it=n.RG32F),G===n.HALF_FLOAT&&(it=n.RG16F),G===n.UNSIGNED_BYTE&&(it=n.RG8)),A===n.RGBA){const Tt=st?nc:he.getTransfer(at);G===n.FLOAT&&(it=n.RGBA32F),G===n.HALF_FLOAT&&(it=n.RGBA16F),G===n.UNSIGNED_BYTE&&(it=Tt===_e?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function E(P,A,G){return x(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==Cn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){return P===on||P===wh||P===Hc?n.NEAREST:n.LINEAR}function b(P){const A=P.target;A.removeEventListener("dispose",b),S(A),A.isVideoTexture&&u.delete(A)}function L(P){const A=P.target;A.removeEventListener("dispose",L),R(A)}function S(P){const A=i.get(P);if(A.__webglInit===void 0)return;const G=P.source,at=h.get(G);if(at){const st=at[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(P),Object.keys(at).length===0&&h.delete(G)}i.remove(P)}function M(P){const A=i.get(P);n.deleteTexture(A.__webglTexture);const G=P.source,at=h.get(G);delete at[A.__cacheKey],o.memory.textures--}function R(P){const A=P.texture,G=i.get(P),at=i.get(A);if(at.__webglTexture!==void 0&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(G.__webglFramebuffer[st]))for(let it=0;it<G.__webglFramebuffer[st].length;it++)n.deleteFramebuffer(G.__webglFramebuffer[st][it]);else n.deleteFramebuffer(G.__webglFramebuffer[st]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[st])}else{if(Array.isArray(G.__webglFramebuffer))for(let st=0;st<G.__webglFramebuffer.length;st++)n.deleteFramebuffer(G.__webglFramebuffer[st]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let st=0;st<G.__webglColorRenderbuffer.length;st++)G.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[st]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let st=0,it=A.length;st<it;st++){const Tt=i.get(A[st]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(A[st])}i.remove(A),i.remove(P)}let D=0;function O(){D=0}function I(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function U(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function k(P,A){const G=i.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const at=P.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(G,P,A);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+A)}function X(P,A){const G=i.get(P);if(P.version>0&&G.__version!==P.version){vt(G,P,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+A)}function Z(P,A){const G=i.get(P);if(P.version>0&&G.__version!==P.version){vt(G,P,A);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+A)}function V(P,A){const G=i.get(P);if(P.version>0&&G.__version!==P.version){wt(G,P,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+A)}const tt={[ru]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[ou]:n.MIRRORED_REPEAT},et={[on]:n.NEAREST,[wh]:n.NEAREST_MIPMAP_NEAREST,[Hc]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Gg]:n.LINEAR_MIPMAP_NEAREST,[Eo]:n.LINEAR_MIPMAP_LINEAR},ut={[t0]:n.NEVER,[o0]:n.ALWAYS,[e0]:n.LESS,[bp]:n.LEQUAL,[n0]:n.EQUAL,[r0]:n.GEQUAL,[i0]:n.GREATER,[s0]:n.NOTEQUAL};function j(P,A,G){if(G?(n.texParameteri(P,n.TEXTURE_WRAP_S,tt[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,tt[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,tt[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,et[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,et[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Yn||A.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==on&&A.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ut[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===on||A.minFilter!==Hc&&A.minFilter!==Eo||A.type===ji&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===bo&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(P,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function nt(P,A){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",b));const at=A.source;let st=h.get(at);st===void 0&&(st={},h.set(at,st));const it=U(A);if(it!==P.__cacheKey){st[it]===void 0&&(st[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[it].usedTimes++;const Tt=st[P.__cacheKey];Tt!==void 0&&(st[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(A)),P.__cacheKey=it,P.__webglTexture=st[it].texture}return G}function vt(P,A,G){let at=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(at=n.TEXTURE_3D);const st=nt(P,A),it=A.source;e.bindTexture(at,P.__webglTexture,n.TEXTURE0+G);const Tt=i.get(it);if(it.version!==Tt.__version||st===!0){e.activeTexture(n.TEXTURE0+G);const xt=he.getPrimaries(he.workingColorSpace),Mt=A.colorSpace===Ln?null:he.getPrimaries(A.colorSpace),Ut=A.colorSpace===Ln||xt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Vt=d(A)&&m(A.image)===!1;let rt=v(A.image,Vt,!1,s.maxTextureSize);rt=yt(A,rt);const $t=m(rt)||a,F=r.convert(A.format,A.colorSpace);let ot=r.convert(A.type),gt=y(A.internalFormat,F,ot,A.colorSpace,A.isVideoTexture);j(at,A,$t);let lt;const Rt=A.mipmaps,Jt=a&&A.isVideoTexture!==!0&&gt!==Mp,re=Tt.__version===void 0||st===!0,jt=E(A,rt,$t);if(A.isDepthTexture)gt=n.DEPTH_COMPONENT,a?A.type===ji?gt=n.DEPTH_COMPONENT32F:A.type===Yi?gt=n.DEPTH_COMPONENT24:A.type===As?gt=n.DEPTH24_STENCIL8:gt=n.DEPTH_COMPONENT16:A.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ps&&gt===n.DEPTH_COMPONENT&&A.type!==Iu&&A.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Yi,ot=r.convert(A.type)),A.format===Cr&&gt===n.DEPTH_COMPONENT&&(gt=n.DEPTH_STENCIL,A.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=As,ot=r.convert(A.type))),re&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,gt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,gt,rt.width,rt.height,0,F,ot,null));else if(A.isDataTexture)if(Rt.length>0&&$t){Jt&&re&&e.texStorage2D(n.TEXTURE_2D,jt,gt,Rt[0].width,Rt[0].height);for(let mt=0,B=Rt.length;mt<B;mt++)lt=Rt[mt],Jt?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,lt.width,lt.height,F,ot,lt.data):e.texImage2D(n.TEXTURE_2D,mt,gt,lt.width,lt.height,0,F,ot,lt.data);A.generateMipmaps=!1}else Jt?(re&&e.texStorage2D(n.TEXTURE_2D,jt,gt,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,F,ot,rt.data)):e.texImage2D(n.TEXTURE_2D,0,gt,rt.width,rt.height,0,F,ot,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Jt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,jt,gt,Rt[0].width,Rt[0].height,rt.depth);for(let mt=0,B=Rt.length;mt<B;mt++)lt=Rt[mt],A.format!==jn?F!==null?Jt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,lt.width,lt.height,rt.depth,F,lt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,gt,lt.width,lt.height,rt.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,lt.width,lt.height,rt.depth,F,ot,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,gt,lt.width,lt.height,rt.depth,0,F,ot,lt.data)}else{Jt&&re&&e.texStorage2D(n.TEXTURE_2D,jt,gt,Rt[0].width,Rt[0].height);for(let mt=0,B=Rt.length;mt<B;mt++)lt=Rt[mt],A.format!==jn?F!==null?Jt?e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,lt.width,lt.height,F,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,lt.width,lt.height,F,ot,lt.data):e.texImage2D(n.TEXTURE_2D,mt,gt,lt.width,lt.height,0,F,ot,lt.data)}else if(A.isDataArrayTexture)Jt?(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,jt,gt,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,F,ot,rt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,rt.width,rt.height,rt.depth,0,F,ot,rt.data);else if(A.isData3DTexture)Jt?(re&&e.texStorage3D(n.TEXTURE_3D,jt,gt,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,F,ot,rt.data)):e.texImage3D(n.TEXTURE_3D,0,gt,rt.width,rt.height,rt.depth,0,F,ot,rt.data);else if(A.isFramebufferTexture){if(re)if(Jt)e.texStorage2D(n.TEXTURE_2D,jt,gt,rt.width,rt.height);else{let mt=rt.width,B=rt.height;for(let ft=0;ft<jt;ft++)e.texImage2D(n.TEXTURE_2D,ft,gt,mt,B,0,F,ot,null),mt>>=1,B>>=1}}else if(Rt.length>0&&$t){Jt&&re&&e.texStorage2D(n.TEXTURE_2D,jt,gt,Rt[0].width,Rt[0].height);for(let mt=0,B=Rt.length;mt<B;mt++)lt=Rt[mt],Jt?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,F,ot,lt):e.texImage2D(n.TEXTURE_2D,mt,gt,F,ot,lt);A.generateMipmaps=!1}else Jt?(re&&e.texStorage2D(n.TEXTURE_2D,jt,gt,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,F,ot,rt)):e.texImage2D(n.TEXTURE_2D,0,gt,F,ot,rt);x(A,$t)&&_(at),Tt.__version=it.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function wt(P,A,G){if(A.image.length!==6)return;const at=nt(P,A),st=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const it=i.get(st);if(st.version!==it.__version||at===!0){e.activeTexture(n.TEXTURE0+G);const Tt=he.getPrimaries(he.workingColorSpace),xt=A.colorSpace===Ln?null:he.getPrimaries(A.colorSpace),Mt=A.colorSpace===Ln||Tt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Vt=A.image[0]&&A.image[0].isDataTexture,rt=[];for(let mt=0;mt<6;mt++)!Ut&&!Vt?rt[mt]=v(A.image[mt],!1,!0,s.maxCubemapSize):rt[mt]=Vt?A.image[mt].image:A.image[mt],rt[mt]=yt(A,rt[mt]);const $t=rt[0],F=m($t)||a,ot=r.convert(A.format,A.colorSpace),gt=r.convert(A.type),lt=y(A.internalFormat,ot,gt,A.colorSpace),Rt=a&&A.isVideoTexture!==!0,Jt=it.__version===void 0||at===!0;let re=E(A,$t,F);j(n.TEXTURE_CUBE_MAP,A,F);let jt;if(Ut){Rt&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,re,lt,$t.width,$t.height);for(let mt=0;mt<6;mt++){jt=rt[mt].mipmaps;for(let B=0;B<jt.length;B++){const ft=jt[B];A.format!==jn?ot!==null?Rt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,0,0,ft.width,ft.height,ot,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,lt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,0,0,ft.width,ft.height,ot,gt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,lt,ft.width,ft.height,0,ot,gt,ft.data)}}}else{jt=A.mipmaps,Rt&&Jt&&(jt.length>0&&re++,e.texStorage2D(n.TEXTURE_CUBE_MAP,re,lt,rt[0].width,rt[0].height));for(let mt=0;mt<6;mt++)if(Vt){Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,rt[mt].width,rt[mt].height,ot,gt,rt[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,rt[mt].width,rt[mt].height,0,ot,gt,rt[mt].data);for(let B=0;B<jt.length;B++){const dt=jt[B].image[mt].image;Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,0,0,dt.width,dt.height,ot,gt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,lt,dt.width,dt.height,0,ot,gt,dt.data)}}else{Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ot,gt,rt[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,ot,gt,rt[mt]);for(let B=0;B<jt.length;B++){const ft=jt[B];Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,0,0,ot,gt,ft.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,lt,ot,gt,ft.image[mt])}}}x(A,F)&&_(n.TEXTURE_CUBE_MAP),it.__version=st.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function bt(P,A,G,at,st,it){const Tt=r.convert(G.format,G.colorSpace),xt=r.convert(G.type),Mt=y(G.internalFormat,Tt,xt,G.colorSpace);if(!i.get(A).__hasExternalTextures){const Vt=Math.max(1,A.width>>it),rt=Math.max(1,A.height>>it);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,it,Mt,Vt,rt,A.depth,0,Tt,xt,null):e.texImage2D(st,it,Mt,Vt,rt,0,Tt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),$(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,st,i.get(G).__webglTexture,0,ct(A)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,st,i.get(G).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(P,A,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let at=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||$(A)){const st=A.depthTexture;st&&st.isDepthTexture&&(st.type===ji?at=n.DEPTH_COMPONENT32F:st.type===Yi&&(at=n.DEPTH_COMPONENT24));const it=ct(A);$(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,at,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,at,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,at,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const at=ct(A);G&&$(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,A.width,A.height):$(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const at=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0;st<at.length;st++){const it=at[st],Tt=r.convert(it.format,it.colorSpace),xt=r.convert(it.type),Mt=y(it.internalFormat,Tt,xt,it.colorSpace),Ut=ct(A);G&&$(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,Mt,A.width,A.height):$(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,Mt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const at=i.get(A.depthTexture).__webglTexture,st=ct(A);if(A.depthTexture.format===Ps)$(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(A.depthTexture.format===Cr)$(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function At(P){const A=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");zt(A.__webglFramebuffer,P)}else if(G){A.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[at]),A.__webglDepthbuffer[at]=n.createRenderbuffer(),Ot(A.__webglDepthbuffer[at],P,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Ot(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(P,A,G){const at=i.get(P);A!==void 0&&bt(at.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&At(P)}function N(P){const A=P.texture,G=i.get(P),at=i.get(A);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=A.version,o.memory.textures++);const st=P.isWebGLCubeRenderTarget===!0,it=P.isWebGLMultipleRenderTargets===!0,Tt=m(P)||a;if(st){G.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[xt]=[];for(let Mt=0;Mt<A.mipmaps.length;Mt++)G.__webglFramebuffer[xt][Mt]=n.createFramebuffer()}else G.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let xt=0;xt<A.mipmaps.length;xt++)G.__webglFramebuffer[xt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(it)if(s.drawBuffers){const xt=P.texture;for(let Mt=0,Ut=xt.length;Mt<Ut;Mt++){const Vt=i.get(xt[Mt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&$(P)===!1){const xt=it?A:[A];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Mt=0;Mt<xt.length;Mt++){const Ut=xt[Mt];G.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Mt]);const Vt=r.convert(Ut.format,Ut.colorSpace),rt=r.convert(Ut.type),$t=y(Ut.internalFormat,Vt,rt,Ut.colorSpace,P.isXRRenderTarget===!0),F=ct(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,F,$t,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,G.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ot(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),j(n.TEXTURE_CUBE_MAP,A,Tt);for(let xt=0;xt<6;xt++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)bt(G.__webglFramebuffer[xt][Mt],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Mt);else bt(G.__webglFramebuffer[xt],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(A,Tt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const xt=P.texture;for(let Mt=0,Ut=xt.length;Mt<Ut;Mt++){const Vt=xt[Mt],rt=i.get(Vt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),j(n.TEXTURE_2D,Vt,Tt),bt(G.__webglFramebuffer,P,Vt,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,0),x(Vt,Tt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?xt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,at.__webglTexture),j(xt,A,Tt),a&&A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)bt(G.__webglFramebuffer[Mt],P,A,n.COLOR_ATTACHMENT0,xt,Mt);else bt(G.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,xt,0);x(A,Tt)&&_(xt),e.unbindTexture()}P.depthBuffer&&At(P)}function ht(P){const A=m(P)||a,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let at=0,st=G.length;at<st;at++){const it=G[at];if(x(it,A)){const Tt=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(it).__webglTexture;e.bindTexture(Tt,xt),_(Tt),e.unbindTexture()}}}function K(P){if(a&&P.samples>0&&$(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,at=P.height;let st=n.COLOR_BUFFER_BIT;const it=[],Tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(P),Mt=P.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Ut=0;Ut<A.length;Ut++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ut=0;Ut<A.length;Ut++){it.push(n.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&it.push(Tt);const Vt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Vt===!1&&(P.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),Mt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Ut]),Vt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),Mt){const rt=i.get(A[Ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,G,at,0,0,G,at,st,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Ut=0;Ut<A.length;Ut++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Ut]);const Vt=i.get(A[Ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function ct(P){return Math.min(s.maxSamples,P.samples)}function $(P){const A=i.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(P){const A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function yt(P,A){const G=P.colorSpace,at=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===au||G!==Ai&&G!==Ln&&(he.getTransfer(G)===_e?a===!1?t.has("EXT_sRGB")===!0&&at===jn?(P.format=au,P.minFilter=Cn,P.generateMipmaps=!1):A=Tp.sRGBToLinear(A):(at!==jn||st!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}this.allocateTextureUnit=I,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=$}function yM(n,t,e){const i=e.isWebGL2;function s(r,o=Ln){let a;const c=he.getTransfer(o);if(r===ts)return n.UNSIGNED_BYTE;if(r===gp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===_p)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Vg)return n.BYTE;if(r===Wg)return n.SHORT;if(r===Iu)return n.UNSIGNED_SHORT;if(r===mp)return n.INT;if(r===Yi)return n.UNSIGNED_INT;if(r===ji)return n.FLOAT;if(r===bo)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xg)return n.ALPHA;if(r===jn)return n.RGBA;if(r===qg)return n.LUMINANCE;if(r===Yg)return n.LUMINANCE_ALPHA;if(r===Ps)return n.DEPTH_COMPONENT;if(r===Cr)return n.DEPTH_STENCIL;if(r===au)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jg)return n.RED;if(r===xp)return n.RED_INTEGER;if(r===Zg)return n.RG;if(r===vp)return n.RG_INTEGER;if(r===yp)return n.RGBA_INTEGER;if(r===Gc||r===Vc||r===Wc||r===Xc)if(c===_e)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Th||r===Ah||r===Ph||r===Ch)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Th)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ah)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mp)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rh||r===Lh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Rh)return c===_e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Lh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Dh||r===Uh||r===Fh||r===Nh||r===Oh||r===Bh||r===zh||r===kh||r===Hh||r===Gh||r===Vh||r===Wh||r===Xh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ih)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Oh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xh)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qc||r===qh||r===Yh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===qc)return c===_e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kg||r===jh||r===Zh||r===Kh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===qc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===As?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class MM extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ti extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ti;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class EM extends Os{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const v=e.getContextAttributes();let m=null,d=null;const x=[],_=[],y=new Q;let E=null;const w=new yn;w.layers.enable(1),w.viewport=new ve;const b=new yn;b.layers.enable(2),b.viewport=new ve;const L=[w,b],S=new MM;S.layers.enable(1),S.layers.enable(2);let M=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=x[j];return nt===void 0&&(nt=new ml,x[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=x[j];return nt===void 0&&(nt=new ml,x[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=x[j];return nt===void 0&&(nt=new ml,x[j]=nt),nt.getHandSpace()};function D(j){const nt=_.indexOf(j.inputSource);if(nt===-1)return;const vt=x[nt];vt!==void 0&&(vt.update(j.inputSource,j.frame,l||o),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",I);for(let j=0;j<x.length;j++){const nt=_[j];nt!==null&&(_[j]=null,x[j].disconnect(nt))}M=null,R=null,t.setRenderTarget(m),p=null,h=null,f=null,s=null,d=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Is(p.framebufferWidth,p.framebufferHeight,{format:jn,type:ts,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let nt=null,vt=null,wt=null;v.depth&&(wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=v.stencil?Cr:Ps,vt=v.stencil?As:Yi);const bt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(bt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),d=new Is(h.textureWidth,h.textureHeight,{format:jn,type:ts,depthTexture:new Op(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Ot=t.properties.get(d);Ot.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(j){for(let nt=0;nt<j.removed.length;nt++){const vt=j.removed[nt],wt=_.indexOf(vt);wt>=0&&(_[wt]=null,x[wt].disconnect(vt))}for(let nt=0;nt<j.added.length;nt++){const vt=j.added[nt];let wt=_.indexOf(vt);if(wt===-1){for(let Ot=0;Ot<x.length;Ot++)if(Ot>=_.length){_.push(vt),wt=Ot;break}else if(_[Ot]===null){_[Ot]=vt,wt=Ot;break}if(wt===-1)break}const bt=x[wt];bt&&bt.connect(vt)}}const U=new T,k=new T;function X(j,nt,vt){U.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(vt.matrixWorld);const wt=U.distanceTo(k),bt=nt.projectionMatrix.elements,Ot=vt.projectionMatrix.elements,zt=bt[14]/(bt[10]-1),At=bt[14]/(bt[10]+1),kt=(bt[9]+1)/bt[5],N=(bt[9]-1)/bt[5],ht=(bt[8]-1)/bt[0],K=(Ot[8]+1)/Ot[0],ct=zt*ht,$=zt*K,Ct=wt/(-ht+K),yt=Ct*-ht;nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(yt),j.translateZ(Ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const P=zt+Ct,A=At+Ct,G=ct-yt,at=$+(wt-yt),st=kt*At/A*P,it=N*At/A*P;j.projectionMatrix.makePerspective(G,at,st,it,P,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;S.near=b.near=w.near=j.near,S.far=b.far=w.far=j.far,(M!==S.near||R!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,R=S.far);const nt=j.parent,vt=S.cameras;Z(S,nt);for(let wt=0;wt<vt.length;wt++)Z(vt[wt],nt);vt.length===2?X(S,w,b):S.projectionMatrix.copy(w.projectionMatrix),V(j,S,nt)};function V(j,nt,vt){vt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let tt=null;function et(j,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let wt=!1;vt.length!==S.cameras.length&&(S.cameras.length=0,wt=!0);for(let bt=0;bt<vt.length;bt++){const Ot=vt[bt];let zt=null;if(p!==null)zt=p.getViewport(Ot);else{const kt=f.getViewSubImage(h,Ot);zt=kt.viewport,bt===0&&(t.setRenderTargetTextures(d,kt.colorTexture,h.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(d))}let At=L[bt];At===void 0&&(At=new yn,At.layers.enable(bt),At.viewport=new ve,L[bt]=At),At.matrix.fromArray(Ot.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Ot.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(zt.x,zt.y,zt.width,zt.height),bt===0&&(S.matrix.copy(At.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),wt===!0&&S.cameras.push(At)}}for(let vt=0;vt<x.length;vt++){const wt=_[vt],bt=x[vt];wt!==null&&bt!==void 0&&bt.update(wt,nt,l||o)}tt&&tt(j,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ut=new Fp;ut.setAnimationLoop(et),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}}function bM(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ip(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,x,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wM(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function l(x,_){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(x,E);const w=t.render.frame;r[x.id]!==w&&(h(x),r[x.id]=w)}function u(x){const _=f();x.__bindingPointIndex=_;const y=n.createBuffer(),E=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=s[x.id],y=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,b=y.length;w<b;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,M=L.length;S<M;S++){const R=L[S];if(p(R,w,S,E)===!0){const D=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let I=0;for(let U=0;U<O.length;U++){const k=O[U],X=v(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,D+I,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,I),I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,_,y,E){const w=x.value,b=_+"_"+y;if(E[b]===void 0)return typeof w=="number"||typeof w=="boolean"?E[b]=w:E[b]=w.clone(),!0;{const L=E[b];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return E[b]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(x){const _=x.uniforms;let y=0;const E=16;for(let b=0,L=_.length;b<L;b++){const S=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,R=S.length;M<R;M++){const D=S[M],O=Array.isArray(D.value)?D.value:[D.value];for(let I=0,U=O.length;I<U;I++){const k=O[I],X=v(k),Z=y%E;Z!==0&&E-Z<X.boundary&&(y+=E-Z),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=X.storage}}}const w=y%E;return w>0&&(y+=E-w),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Bu{constructor(t={}){const{canvas:e=M0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const _=this;let y=!1,E=0,w=0,b=null,L=-1,S=null;const M=new ve,R=new ve;let D=null;const O=new ie(0);let I=0,U=e.width,k=e.height,X=1,Z=null,V=null;const tt=new ve(0,0,U,k),et=new ve(0,0,U,k);let ut=!1;const j=new Nu;let nt=!1,vt=!1,wt=null;const bt=new se,Ot=new Q,zt=new T,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return b===null?X:1}let N=i;function ht(C,H){for(let q=0;q<C.length;q++){const Y=C[q],W=e.getContext(Y,H);if(W!==null)return W}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lu}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),N=ht(H,C),N===null)throw ht(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let K,ct,$,Ct,yt,P,A,G,at,st,it,Tt,xt,Mt,Ut,Vt,rt,$t,F,ot,gt,lt,Rt,Jt;function re(){K=new Fv(N),ct=new Cv(N,K,t),K.init(ct),lt=new yM(N,K,ct),$=new xM(N,K,ct),Ct=new Bv(N),yt=new sM,P=new vM(N,K,$,yt,ct,lt,Ct),A=new Lv(_),G=new Uv(_),at=new q0(N,ct),Rt=new Av(N,K,at,ct),st=new Nv(N,at,Ct,Rt),it=new Gv(N,st,at,Ct),F=new Hv(N,ct,P),Vt=new Rv(yt),Tt=new iM(_,A,G,K,ct,Rt,Vt),xt=new bM(_,yt),Mt=new oM,Ut=new fM(K,ct),$t=new Tv(_,A,G,$,it,h,c),rt=new _M(_,it,ct),Jt=new wM(N,Ct,ct,$),ot=new Pv(N,K,Ct,ct),gt=new Ov(N,K,Ct,ct),Ct.programs=Tt.programs,_.capabilities=ct,_.extensions=K,_.properties=yt,_.renderLists=Mt,_.shadowMap=rt,_.state=$,_.info=Ct}re();const jt=new EM(_,N);this.xr=jt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=K.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=K.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(U,k,!1))},this.getSize=function(C){return C.set(U,k)},this.setSize=function(C,H,q=!0){if(jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,k=H,e.width=Math.floor(C*X),e.height=Math.floor(H*X),q===!0&&(e.style.width=C+"px",e.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(U*X,k*X).floor()},this.setDrawingBufferSize=function(C,H,q){U=C,k=H,X=q,e.width=Math.floor(C*q),e.height=Math.floor(H*q),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,H,q,Y){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,H,q,Y),$.viewport(M.copy(tt).multiplyScalar(X).floor())},this.getScissor=function(C){return C.copy(et)},this.setScissor=function(C,H,q,Y){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,H,q,Y),$.scissor(R.copy(et).multiplyScalar(X).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){$.setScissorTest(ut=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){V=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(C=!0,H=!0,q=!0){let Y=0;if(C){let W=!1;if(b!==null){const St=b.texture.format;W=St===yp||St===vp||St===xp}if(W){const St=b.texture.type,It=St===ts||St===Yi||St===Iu||St===As||St===gp||St===_p,Bt=$t.getClearColor(),Ht=$t.getClearAlpha(),Zt=Bt.r,Xt=Bt.g,qt=Bt.b;It?(p[0]=Zt,p[1]=Xt,p[2]=qt,p[3]=Ht,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Zt,g[1]=Xt,g[2]=qt,g[3]=Ht,N.clearBufferiv(N.COLOR,0,g))}else Y|=N.COLOR_BUFFER_BIT}H&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Mt.dispose(),Ut.dispose(),yt.dispose(),A.dispose(),G.dispose(),it.dispose(),Rt.dispose(),Jt.dispose(),Tt.dispose(),jt.dispose(),jt.removeEventListener("sessionstart",tn),jt.removeEventListener("sessionend",ge),wt&&(wt.dispose(),wt=null),en.stop()};function mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ct.autoReset,H=rt.enabled,q=rt.autoUpdate,Y=rt.needsUpdate,W=rt.type;re(),Ct.autoReset=C,rt.enabled=H,rt.autoUpdate=q,rt.needsUpdate=Y,rt.type=W}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function dt(C){const H=C.target;H.removeEventListener("dispose",dt),Nt(H)}function Nt(C){Lt(C),yt.remove(C)}function Lt(C){const H=yt.get(C).programs;H!==void 0&&(H.forEach(function(q){Tt.releaseProgram(q)}),C.isShaderMaterial&&Tt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,q,Y,W,St){H===null&&(H=At);const It=W.isMesh&&W.matrixWorld.determinant()<0,Bt=ng(C,H,q,Y,W);$.setMaterial(Y,It);let Ht=q.index,Zt=1;if(Y.wireframe===!0){if(Ht=st.getWireframeAttribute(q),Ht===void 0)return;Zt=2}const Xt=q.drawRange,qt=q.attributes.position;let Le=Xt.start*Zt,_n=(Xt.start+Xt.count)*Zt;St!==null&&(Le=Math.max(Le,St.start*Zt),_n=Math.min(_n,(St.start+St.count)*Zt)),Ht!==null?(Le=Math.max(Le,0),_n=Math.min(_n,Ht.count)):qt!=null&&(Le=Math.max(Le,0),_n=Math.min(_n,qt.count));const Ve=_n-Le;if(Ve<0||Ve===1/0)return;Rt.setup(W,Y,Bt,q,Ht);let li,Se=ot;if(Ht!==null&&(li=at.get(Ht),Se=gt,Se.setIndex(li)),W.isMesh)Y.wireframe===!0?($.setLineWidth(Y.wireframeLinewidth*kt()),Se.setMode(N.LINES)):Se.setMode(N.TRIANGLES);else if(W.isLine){let Qt=Y.linewidth;Qt===void 0&&(Qt=1),$.setLineWidth(Qt*kt()),W.isLineSegments?Se.setMode(N.LINES):W.isLineLoop?Se.setMode(N.LINE_LOOP):Se.setMode(N.LINE_STRIP)}else W.isPoints?Se.setMode(N.POINTS):W.isSprite&&Se.setMode(N.TRIANGLES);if(W.isBatchedMesh)Se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Se.renderInstances(Le,Ve,W.count);else if(q.isInstancedBufferGeometry){const Qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Oc=Math.min(q.instanceCount,Qt);Se.renderInstances(Le,Ve,Oc)}else Se.render(Le,Ve)};function ae(C,H,q){C.transparent===!0&&C.side===an&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,Wo(C,H,q),C.side=ri,C.needsUpdate=!0,Wo(C,H,q),C.side=an):Wo(C,H,q)}this.compile=function(C,H,q=null){q===null&&(q=C),m=Ut.get(q),m.init(),x.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==q&&C.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(_._useLegacyLights);const Y=new Set;return C.traverse(function(W){const St=W.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){const Bt=St[It];ae(Bt,q,W),Y.add(Bt)}else ae(St,q,W),Y.add(St)}),x.pop(),m=null,Y},this.compileAsync=function(C,H,q=null){const Y=this.compile(C,H,q);return new Promise(W=>{function St(){if(Y.forEach(function(It){yt.get(It).currentProgram.isReady()&&Y.delete(It)}),Y.size===0){W(C);return}setTimeout(St,10)}K.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ce=null;function Ge(C){ce&&ce(C)}function tn(){en.stop()}function ge(){en.start()}const en=new Fp;en.setAnimationLoop(Ge),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(C){ce=C,jt.setAnimationLoop(C),C===null?en.stop():en.start()},jt.addEventListener("sessionstart",tn),jt.addEventListener("sessionend",ge),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),jt.enabled===!0&&jt.isPresenting===!0&&(jt.cameraAutoUpdate===!0&&jt.updateCamera(H),H=jt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,H,b),m=Ut.get(C,x.length),m.init(),x.push(m),bt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,nt=Vt.init(this.clippingPlanes,vt),v=Mt.get(C,d.length),v.init(),d.push(v),Jn(C,H,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Z,V),this.info.render.frame++,nt===!0&&Vt.beginShadows();const q=m.state.shadowsArray;if(rt.render(q,C,H),nt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(v,C),m.setupLights(_._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let W=0,St=Y.length;W<St;W++){const It=Y[W];dh(v,C,It,It.viewport)}}else dh(v,C,H);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(_,C,H),Rt.resetDefaultState(),L=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Jn(C,H,q,Y){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){Y&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const It=it.update(C),Bt=C.material;Bt.visible&&v.push(C,It,Bt,q,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const It=it.update(C),Bt=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),zt.copy(It.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(Bt)){const Ht=It.groups;for(let Zt=0,Xt=Ht.length;Zt<Xt;Zt++){const qt=Ht[Zt],Le=Bt[qt.materialIndex];Le&&Le.visible&&v.push(C,It,Le,q,zt.z,qt)}}else Bt.visible&&v.push(C,It,Bt,q,zt.z,null)}}const St=C.children;for(let It=0,Bt=St.length;It<Bt;It++)Jn(St[It],H,q,Y)}function dh(C,H,q,Y){const W=C.opaque,St=C.transmissive,It=C.transparent;m.setupLightsView(q),nt===!0&&Vt.setGlobalState(_.clippingPlanes,q),St.length>0&&eg(W,St,H,q),Y&&$.viewport(M.copy(Y)),W.length>0&&Vo(W,H,q),St.length>0&&Vo(St,H,q),It.length>0&&Vo(It,H,q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function eg(C,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const St=ct.isWebGL2;wt===null&&(wt=new Is(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?bo:ts,minFilter:Eo,samples:St?4:0})),_.getDrawingBufferSize(Ot),St?wt.setSize(Ot.x,Ot.y):wt.setSize(oc(Ot.x),oc(Ot.y));const It=_.getRenderTarget();_.setRenderTarget(wt),_.getClearColor(O),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Bt=_.toneMapping;_.toneMapping=Qi,Vo(C,q,Y),P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt);let Ht=!1;for(let Zt=0,Xt=H.length;Zt<Xt;Zt++){const qt=H[Zt],Le=qt.object,_n=qt.geometry,Ve=qt.material,li=qt.group;if(Ve.side===an&&Le.layers.test(Y.layers)){const Se=Ve.side;Ve.side=ln,Ve.needsUpdate=!0,ph(Le,q,Y,_n,Ve,li),Ve.side=Se,Ve.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt)),_.setRenderTarget(It),_.setClearColor(O,I),_.toneMapping=Bt}function Vo(C,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let W=0,St=C.length;W<St;W++){const It=C[W],Bt=It.object,Ht=It.geometry,Zt=Y===null?It.material:Y,Xt=It.group;Bt.layers.test(q.layers)&&ph(Bt,H,q,Ht,Zt,Xt)}}function ph(C,H,q,Y,W,St){C.onBeforeRender(_,H,q,Y,W,St),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(_,H,q,Y,C,St),W.transparent===!0&&W.side===an&&W.forceSinglePass===!1?(W.side=ln,W.needsUpdate=!0,_.renderBufferDirect(q,H,Y,W,C,St),W.side=ri,W.needsUpdate=!0,_.renderBufferDirect(q,H,Y,W,C,St),W.side=an):_.renderBufferDirect(q,H,Y,W,C,St),C.onAfterRender(_,H,q,Y,W,St)}function Wo(C,H,q){H.isScene!==!0&&(H=At);const Y=yt.get(C),W=m.state.lights,St=m.state.shadowsArray,It=W.state.version,Bt=Tt.getParameters(C,W.state,St,H,q),Ht=Tt.getProgramCacheKey(Bt);let Zt=Y.programs;Y.environment=C.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(C.isMeshStandardMaterial?G:A).get(C.envMap||Y.environment),Zt===void 0&&(C.addEventListener("dispose",dt),Zt=new Map,Y.programs=Zt);let Xt=Zt.get(Ht);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===It)return gh(C,Bt),Xt}else Bt.uniforms=Tt.getUniforms(C),C.onBuild(q,Bt,_),C.onBeforeCompile(Bt,_),Xt=Tt.acquireProgram(Bt,Ht),Zt.set(Ht,Xt),Y.uniforms=Bt.uniforms;const qt=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=Vt.uniform),gh(C,Bt),Y.needsLights=sg(C),Y.lightsStateVersion=It,Y.needsLights&&(qt.ambientLightColor.value=W.state.ambient,qt.lightProbe.value=W.state.probe,qt.directionalLights.value=W.state.directional,qt.directionalLightShadows.value=W.state.directionalShadow,qt.spotLights.value=W.state.spot,qt.spotLightShadows.value=W.state.spotShadow,qt.rectAreaLights.value=W.state.rectArea,qt.ltc_1.value=W.state.rectAreaLTC1,qt.ltc_2.value=W.state.rectAreaLTC2,qt.pointLights.value=W.state.point,qt.pointLightShadows.value=W.state.pointShadow,qt.hemisphereLights.value=W.state.hemi,qt.directionalShadowMap.value=W.state.directionalShadowMap,qt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qt.spotShadowMap.value=W.state.spotShadowMap,qt.spotLightMatrix.value=W.state.spotLightMatrix,qt.spotLightMap.value=W.state.spotLightMap,qt.pointShadowMap.value=W.state.pointShadowMap,qt.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function mh(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Ya.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function gh(C,H){const q=yt.get(C);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function ng(C,H,q,Y,W){H.isScene!==!0&&(H=At),P.resetTextureUnits();const St=H.fog,It=Y.isMeshStandardMaterial?H.environment:null,Bt=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ai,Ht=(Y.isMeshStandardMaterial?G:A).get(Y.envMap||It),Zt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qt=!!q.morphAttributes.position,Le=!!q.morphAttributes.normal,_n=!!q.morphAttributes.color;let Ve=Qi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ve=_.toneMapping);const li=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=li!==void 0?li.length:0,Qt=yt.get(Y),Oc=m.state.lights;if(nt===!0&&(vt===!0||C!==S)){const bn=C===S&&Y.id===L;Vt.setState(Y,C,bn)}let Te=!1;Y.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Oc.state.version||Qt.outputColorSpace!==Bt||W.isBatchedMesh&&Qt.batching===!1||!W.isBatchedMesh&&Qt.batching===!0||W.isInstancedMesh&&Qt.instancing===!1||!W.isInstancedMesh&&Qt.instancing===!0||W.isSkinnedMesh&&Qt.skinning===!1||!W.isSkinnedMesh&&Qt.skinning===!0||W.isInstancedMesh&&Qt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Qt.instancingColor===!1&&W.instanceColor!==null||Qt.envMap!==Ht||Y.fog===!0&&Qt.fog!==St||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Vt.numPlanes||Qt.numIntersection!==Vt.numIntersection)||Qt.vertexAlphas!==Zt||Qt.vertexTangents!==Xt||Qt.morphTargets!==qt||Qt.morphNormals!==Le||Qt.morphColors!==_n||Qt.toneMapping!==Ve||ct.isWebGL2===!0&&Qt.morphTargetsCount!==Se)&&(Te=!0):(Te=!0,Qt.__version=Y.version);let as=Qt.currentProgram;Te===!0&&(as=Wo(Y,H,W));let _h=!1,Gr=!1,Bc=!1;const Ye=as.getUniforms(),cs=Qt.uniforms;if($.useProgram(as.program)&&(_h=!0,Gr=!0,Bc=!0),Y.id!==L&&(L=Y.id,Gr=!0),_h||S!==C){Ye.setValue(N,"projectionMatrix",C.projectionMatrix),Ye.setValue(N,"viewMatrix",C.matrixWorldInverse);const bn=Ye.map.cameraPosition;bn!==void 0&&bn.setValue(N,zt.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&Ye.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ye.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Gr=!0,Bc=!0)}if(W.isSkinnedMesh){Ye.setOptional(N,W,"bindMatrix"),Ye.setOptional(N,W,"bindMatrixInverse");const bn=W.skeleton;bn&&(ct.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ye.setValue(N,"boneTexture",bn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ye.setOptional(N,W,"batchingTexture"),Ye.setValue(N,"batchingTexture",W._matricesTexture,P));const zc=q.morphAttributes;if((zc.position!==void 0||zc.normal!==void 0||zc.color!==void 0&&ct.isWebGL2===!0)&&F.update(W,q,as),(Gr||Qt.receiveShadow!==W.receiveShadow)&&(Qt.receiveShadow=W.receiveShadow,Ye.setValue(N,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(cs.envMap.value=Ht,cs.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),Gr&&(Ye.setValue(N,"toneMappingExposure",_.toneMappingExposure),Qt.needsLights&&ig(cs,Bc),St&&Y.fog===!0&&xt.refreshFogUniforms(cs,St),xt.refreshMaterialUniforms(cs,Y,X,k,wt),Ya.upload(N,mh(Qt),cs,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ya.upload(N,mh(Qt),cs,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ye.setValue(N,"center",W.center),Ye.setValue(N,"modelViewMatrix",W.modelViewMatrix),Ye.setValue(N,"normalMatrix",W.normalMatrix),Ye.setValue(N,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const bn=Y.uniformsGroups;for(let kc=0,rg=bn.length;kc<rg;kc++)if(ct.isWebGL2){const xh=bn[kc];Jt.update(xh,as),Jt.bind(xh,as)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return as}function ig(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function sg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,H,q){yt.get(C.texture).__webglTexture=H,yt.get(C.depthTexture).__webglTexture=q;const Y=yt.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,H){const q=yt.get(C);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,q=0){b=C,E=H,w=q;let Y=!0,W=null,St=!1,It=!1;if(C){const Ht=yt.get(C);Ht.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1):Ht.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ht.__hasExternalTextures&&P.rebindTextures(C,yt.get(C.texture).__webglTexture,yt.get(C.depthTexture).__webglTexture);const Zt=C.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);const Xt=yt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?W=Xt[H][q]:W=Xt[H],St=!0):ct.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?W=yt.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[q]:W=Xt,M.copy(C.viewport),R.copy(C.scissor),D=C.scissorTest}else M.copy(tt).multiplyScalar(X).floor(),R.copy(et).multiplyScalar(X).floor(),D=ut;if($.bindFramebuffer(N.FRAMEBUFFER,W)&&ct.drawBuffers&&Y&&$.drawBuffers(C,W),$.viewport(M),$.scissor(R),$.setScissorTest(D),St){const Ht=yt.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ht.__webglTexture,q)}else if(It){const Ht=yt.get(C.texture),Zt=H||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.__webglTexture,q||0,Zt)}L=-1},this.readRenderTargetPixels=function(C,H,q,Y,W,St,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=yt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){$.bindFramebuffer(N.FRAMEBUFFER,Bt);try{const Ht=C.texture,Zt=Ht.format,Xt=Ht.type;if(Zt!==jn&&lt.convert(Zt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=Xt===bo&&(K.has("EXT_color_buffer_half_float")||ct.isWebGL2&&K.has("EXT_color_buffer_float"));if(Xt!==ts&&lt.convert(Xt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===ji&&(ct.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Y&&q>=0&&q<=C.height-W&&N.readPixels(H,q,Y,W,lt.convert(Zt),lt.convert(Xt),St)}finally{const Ht=b!==null?yt.get(b).__webglFramebuffer:null;$.bindFramebuffer(N.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(C,H,q=0){const Y=Math.pow(2,-q),W=Math.floor(H.image.width*Y),St=Math.floor(H.image.height*Y);P.setTexture2D(H,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,C.x,C.y,W,St),$.unbindTexture()},this.copyTextureToTexture=function(C,H,q,Y=0){const W=H.image.width,St=H.image.height,It=lt.convert(q.format),Bt=lt.convert(q.type);P.setTexture2D(q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment),H.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,C.x,C.y,W,St,It,Bt,H.image.data):H.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,It,H.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Y,C.x,C.y,It,Bt,H.image),Y===0&&q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,H,q,Y,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=C.max.x-C.min.x+1,It=C.max.y-C.min.y+1,Bt=C.max.z-C.min.z+1,Ht=lt.convert(Y.format),Zt=lt.convert(Y.type);let Xt;if(Y.isData3DTexture)P.setTexture3D(Y,0),Xt=N.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)P.setTexture2DArray(Y,0),Xt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const qt=N.getParameter(N.UNPACK_ROW_LENGTH),Le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_n=N.getParameter(N.UNPACK_SKIP_PIXELS),Ve=N.getParameter(N.UNPACK_SKIP_ROWS),li=N.getParameter(N.UNPACK_SKIP_IMAGES),Se=q.isCompressedTexture?q.mipmaps[W]:q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(Xt,W,H.x,H.y,H.z,St,It,Bt,Ht,Zt,Se.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Xt,W,H.x,H.y,H.z,St,It,Bt,Ht,Se.data)):N.texSubImage3D(Xt,W,H.x,H.y,H.z,St,It,Bt,Ht,Zt,Se),N.pixelStorei(N.UNPACK_ROW_LENGTH,qt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_n),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,li),W===0&&Y.generateMipmaps&&N.generateMipmap(Xt),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){E=0,w=0,b=null,$.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Du?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?Cs:Sp}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Cs?Xe:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class TM extends Bu{}TM.prototype.isWebGL1Renderer=!0;class Vp extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Do extends Br{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kf=new T,Hf=new T,Gf=new se,gl=new Or,da=new Lo;class yi extends Ce{constructor(t=new Be,e=new Do){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)kf.fromBufferAttribute(e,s-1),Hf.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=kf.distanceTo(Hf);t.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Gf.copy(s).invert(),gl.copy(t.ray).applyMatrix4(Gf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new T,u=new T,f=new T,h=new T,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=p){const E=g.getX(_),w=g.getX(_+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,w),gl.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(h);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=p){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),gl.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(h);w<t.near||w>t.far||e.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Vf=new T,Wf=new T;class zu extends yi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vf.fromBufferAttribute(e,s),Wf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vf.distanceTo(Wf);t.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class AM extends mn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Q:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new T,s=[],r=[],o=[],a=new T,c=new se;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ne(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ne(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ku extends ai{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const i=e||new Q,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class PM extends ku{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hu(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const pa=new T,_l=new Hu,xl=new Hu,vl=new Hu;class CM extends ai{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new T){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=pa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),_l.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,v,m),xl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,v,m),vl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),xl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),vl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(_l.calc(c),xl.calc(c),vl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xf(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function RM(n,t){const e=1-n;return e*e*t}function LM(n,t){return 2*(1-n)*n*t}function IM(n,t){return n*n*t}function ho(n,t,e,i){return RM(n,t)+LM(n,e)+IM(n,i)}function DM(n,t){const e=1-n;return e*e*e*t}function UM(n,t){const e=1-n;return 3*e*e*n*t}function FM(n,t){return 3*(1-n)*n*n*t}function NM(n,t){return n*n*n*t}function fo(n,t,e,i,s){return DM(n,t)+UM(n,e)+FM(n,i)+NM(n,s)}class Wp extends ai{constructor(t=new Q,e=new Q,i=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class OM extends ai{constructor(t=new T,e=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new T){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y),fo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xp extends ai{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class BM extends ai{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qp extends ai{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zM extends ai{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y),ho(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yp extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Xf(a,c.x,l.x,u.x,f.x),Xf(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var uu=Object.freeze({__proto__:null,ArcCurve:PM,CatmullRomCurve3:CM,CubicBezierCurve:Wp,CubicBezierCurve3:OM,EllipseCurve:ku,LineCurve:Xp,LineCurve3:BM,QuadraticBezierCurve:qp,QuadraticBezierCurve3:zM,SplineCurve:Yp});class kM extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uu[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new uu[s.type]().fromJSON(s))}return this}}class To extends kM{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Xp(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new qp(this.currentPoint.clone(),new Q(t,e),new Q(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Wp(this.currentPoint.clone(),new Q(t,e),new Q(i,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Yp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new ku(t,e,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Tr extends Be{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new T,h=new Q,p=new T,g=new T,v=new T;let m=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let x=0;x<=e;x++){const _=i+x*u*s,y=Math.sin(_),E=Math.cos(_);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*y,f.y=t[w].y,f.z=t[w].x*E,o.push(f.x,f.y,f.z),h.x=x/e,h.y=w/(t.length-1),a.push(h.x,h.y);const b=c[3*w+0]*y,L=c[3*w+1],S=c[3*w+0]*E;l.push(b,L,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const y=_+x*t.length,E=y,w=y+t.length,b=y+t.length+1,L=y+1;r.push(E,w,L),r.push(b,L,w)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.points,t.segments,t.phiStart,t.phiLength)}}class Gu extends Tr{constructor(t=1,e=1,i=4,s=8){const r=new To;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Gu(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ae extends Be{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const v=[],m=i/2;let d=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(p,2));function x(){const y=new T,E=new T;let w=0;const b=(e-t)/i;for(let L=0;L<=r;L++){const S=[],M=L/r,R=M*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,I=O*c+a,U=Math.sin(I),k=Math.cos(I);E.x=R*U,E.y=-M*i+m,E.z=R*k,f.push(E.x,E.y,E.z),y.set(U,b,k).normalize(),h.push(y.x,y.y,y.z),p.push(O,1-M),S.push(g++)}v.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=v[S][L],R=v[S+1][L],D=v[S+1][L+1],O=v[S][L+1];u.push(M,R,O),u.push(R,D,O),w+=6}l.addGroup(d,w,0),d+=w}function _(y){const E=g,w=new Q,b=new T;let L=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const I=D/s*c+a,U=Math.cos(I),k=Math.sin(I);b.x=S*k,b.y=m*M,b.z=S*U,f.push(b.x,b.y,b.z),h.push(0,M,0),w.x=U*.5+.5,w.y=k*.5*M+.5,p.push(w.x,w.y),g++}for(let D=0;D<s;D++){const O=E+D,I=R+D;y===!0?u.push(I,I+1,O):u.push(I+1,I,O),L+=3}l.addGroup(d,L,y===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vu extends Be{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new T,y=new T,E=new T;for(let w=0;w<e.length;w+=3)p(e[w+0],_),p(e[w+1],y),p(e[w+2],E),c(_,y,E,x)}function c(x,_,y,E){const w=E+1,b=[];for(let L=0;L<=w;L++){b[L]=[];const S=x.clone().lerp(y,L/w),M=_.clone().lerp(y,L/w),R=w-L;for(let D=0;D<=R;D++)D===0&&L===w?b[L][D]=S:b[L][D]=S.clone().lerp(M,D/R)}for(let L=0;L<w;L++)for(let S=0;S<2*(w-L)-1;S++){const M=Math.floor(S/2);S%2===0?(h(b[L][M+1]),h(b[L+1][M]),h(b[L][M])):(h(b[L][M+1]),h(b[L+1][M+1]),h(b[L+1][M]))}}function l(x){const _=new T;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(x),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){const x=new T;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const y=m(x)/2/Math.PI+.5,E=d(x)/Math.PI+.5;o.push(y,1-E)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const _=o[x+0],y=o[x+2],E=o[x+4],w=Math.max(_,y,E),b=Math.min(_,y,E);w>.9&&b<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function p(x,_){const y=x*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const x=new T,_=new T,y=new T,E=new T,w=new Q,b=new Q,L=new Q;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),E.copy(x).add(_).add(y).divideScalar(3);const R=m(E);v(w,M+0,x,R),v(b,M+2,_,R),v(L,M+4,y,R)}}function v(x,_,y,E){E<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vu(t.vertices,t.indices,t.radius,t.details)}}const ma=new T,ga=new T,yl=new T,_a=new xe;class HM extends Be{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(br*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:d}=_a;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),_a.getNormal(yl),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=f[x],E=f[_],w=_a[u[x]],b=_a[u[_]],L=`${y}_${E}`,S=`${E}_${y}`;S in h&&h[S]?(yl.dot(h[S].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(b.x,b.y,b.z)),h[S]=null):L in h||(h[L]={index0:l[x],index1:l[_],normal:yl.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];ma.fromBufferAttribute(a,v),ga.fromBufferAttribute(a,m),p.push(ma.x,ma.y,ma.z),p.push(ga.x,ga.y,ga.z)}this.setAttribute("position",new le(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Lr extends To{constructor(t){super(t),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new To().fromJSON(s))}return this}}const GM={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=jp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,p;if(i&&(r=YM(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)f=n[g],h=n[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return Ao(r,o,e,a,c,p,0),o}};function jp(n,t,e,i,s){let r,o;if(s===sS(n,t,e,i)>0)for(r=t;r<e;r+=i)o=qf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=qf(r,n[r],n[r+1],o);return o&&wc(o,o.next)&&(Co(o),o=o.next),o}function Us(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(wc(e,e.next)||we(e.prev,e,e.next)===0)){if(Co(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ao(n,t,e,i,s,r,o){if(!n)return;!o&&r&&JM(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?WM(n,i,s,r):VM(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Co(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=XM(Us(n),t,e),Ao(n,t,e,i,s,r,2)):o===2&&qM(n,t,e,i,s,r):Ao(Us(n),t,e,i,s,r,1);break}}}function VM(n){const t=n.prev,e=n,i=n.next;if(we(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&xr(s,a,r,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function WM(n,t,e,i){const s=n.prev,r=n,o=n.next;if(we(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,p=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,v=a>c?a>l?a:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,d=hu(p,g,t,e,i),x=hu(v,m,t,e,i);let _=n.prevZ,y=n.nextZ;for(;_&&_.z>=d&&y&&y.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&xr(a,u,c,f,l,h,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&xr(a,u,c,f,l,h,y.x,y.y)&&we(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&xr(a,u,c,f,l,h,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&xr(a,u,c,f,l,h,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function XM(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!wc(s,r)&&Zp(s,i,i.next,r)&&Po(s,r)&&Po(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Co(i),Co(i.next),i=n=r),i=i.next}while(i!==n);return Us(i)}function qM(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&eS(o,a)){let c=Kp(o,a);o=Us(o,o.next),c=Us(c,c.next),Ao(o,t,e,i,s,r,0),Ao(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function YM(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=jp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(tS(l));for(s.sort(jM),r=0;r<s.length;r++)e=ZM(s[r],e);return e}function jM(n,t){return n.x-t.x}function ZM(n,t){const e=KM(n,t);if(!e)return t;const i=Kp(e,n);return Us(i,i.next),Us(e,e.next)}function KM(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&xr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Po(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&$M(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function $M(n,t){return we(n.prev,n,t.prev)<0&&we(t.next,n,n.next)<0}function JM(n,t,e,i){let s=n;do s.z===0&&(s.z=hu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,QM(s)}function QM(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function hu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function tS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function xr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function eS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!nS(n,t)&&(Po(n,t)&&Po(t,n)&&iS(n,t)&&(we(n.prev,n,t.prev)||we(n,t.prev,t))||wc(n,t)&&we(n.prev,n,n.next)>0&&we(t.prev,t,t.next)>0)}function we(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function wc(n,t){return n.x===t.x&&n.y===t.y}function Zp(n,t,e,i){const s=va(we(n,t,e)),r=va(we(n,t,i)),o=va(we(e,i,n)),a=va(we(e,i,t));return!!(s!==r&&o!==a||s===0&&xa(n,e,t)||r===0&&xa(n,i,t)||o===0&&xa(e,n,i)||a===0&&xa(e,t,i))}function xa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function va(n){return n>0?1:n<0?-1:0}function nS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Zp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Po(n,t){return we(n.prev,n,n.next)<0?we(n,t,n.next)>=0&&we(n,n.prev,t)>=0:we(n,t,n.prev)<0||we(n,n.next,t)<0}function iS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Kp(n,t){const e=new fu(n.i,n.x,n.y),i=new fu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function qf(n,t,e,i){const s=new fu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Co(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fu(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sS(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class po{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return po.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Yf(t),jf(i,t);let o=t.length;e.forEach(Yf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,jf(i,e[c]);const a=GM.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Yf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function jf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Tc extends Be{constructor(t=new Lr([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:rS;let _,y=!1,E,w,b,L;d&&(_=d.getSpacedPoints(u),y=!0,h=!1,E=d.computeFrenetFrames(u,!1),w=new T,b=new T,L=new T),h||(m=0,p=0,g=0,v=0);const S=a.extractPoints(l);let M=S.shape;const R=S.holes;if(!po.isClockWise(M)){M=M.reverse();for(let N=0,ht=R.length;N<ht;N++){const K=R[N];po.isClockWise(K)&&(R[N]=K.reverse())}}const O=po.triangulateShape(M,R),I=M;for(let N=0,ht=R.length;N<ht;N++){const K=R[N];M=M.concat(K)}function U(N,ht,K){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ht,K)}const k=M.length,X=O.length;function Z(N,ht,K){let ct,$,Ct;const yt=N.x-ht.x,P=N.y-ht.y,A=K.x-N.x,G=K.y-N.y,at=yt*yt+P*P,st=yt*G-P*A;if(Math.abs(st)>Number.EPSILON){const it=Math.sqrt(at),Tt=Math.sqrt(A*A+G*G),xt=ht.x-P/it,Mt=ht.y+yt/it,Ut=K.x-G/Tt,Vt=K.y+A/Tt,rt=((Ut-xt)*G-(Vt-Mt)*A)/(yt*G-P*A);ct=xt+yt*rt-N.x,$=Mt+P*rt-N.y;const $t=ct*ct+$*$;if($t<=2)return new Q(ct,$);Ct=Math.sqrt($t/2)}else{let it=!1;yt>Number.EPSILON?A>Number.EPSILON&&(it=!0):yt<-Number.EPSILON?A<-Number.EPSILON&&(it=!0):Math.sign(P)===Math.sign(G)&&(it=!0),it?(ct=-P,$=yt,Ct=Math.sqrt(at)):(ct=yt,$=P,Ct=Math.sqrt(at/2))}return new Q(ct/Ct,$/Ct)}const V=[];for(let N=0,ht=I.length,K=ht-1,ct=N+1;N<ht;N++,K++,ct++)K===ht&&(K=0),ct===ht&&(ct=0),V[N]=Z(I[N],I[K],I[ct]);const tt=[];let et,ut=V.concat();for(let N=0,ht=R.length;N<ht;N++){const K=R[N];et=[];for(let ct=0,$=K.length,Ct=$-1,yt=ct+1;ct<$;ct++,Ct++,yt++)Ct===$&&(Ct=0),yt===$&&(yt=0),et[ct]=Z(K[ct],K[Ct],K[yt]);tt.push(et),ut=ut.concat(et)}for(let N=0;N<m;N++){const ht=N/m,K=p*Math.cos(ht*Math.PI/2),ct=g*Math.sin(ht*Math.PI/2)+v;for(let $=0,Ct=I.length;$<Ct;$++){const yt=U(I[$],V[$],ct);bt(yt.x,yt.y,-K)}for(let $=0,Ct=R.length;$<Ct;$++){const yt=R[$];et=tt[$];for(let P=0,A=yt.length;P<A;P++){const G=U(yt[P],et[P],ct);bt(G.x,G.y,-K)}}}const j=g+v;for(let N=0;N<k;N++){const ht=h?U(M[N],ut[N],j):M[N];y?(b.copy(E.normals[0]).multiplyScalar(ht.x),w.copy(E.binormals[0]).multiplyScalar(ht.y),L.copy(_[0]).add(b).add(w),bt(L.x,L.y,L.z)):bt(ht.x,ht.y,0)}for(let N=1;N<=u;N++)for(let ht=0;ht<k;ht++){const K=h?U(M[ht],ut[ht],j):M[ht];y?(b.copy(E.normals[N]).multiplyScalar(K.x),w.copy(E.binormals[N]).multiplyScalar(K.y),L.copy(_[N]).add(b).add(w),bt(L.x,L.y,L.z)):bt(K.x,K.y,f/u*N)}for(let N=m-1;N>=0;N--){const ht=N/m,K=p*Math.cos(ht*Math.PI/2),ct=g*Math.sin(ht*Math.PI/2)+v;for(let $=0,Ct=I.length;$<Ct;$++){const yt=U(I[$],V[$],ct);bt(yt.x,yt.y,f+K)}for(let $=0,Ct=R.length;$<Ct;$++){const yt=R[$];et=tt[$];for(let P=0,A=yt.length;P<A;P++){const G=U(yt[P],et[P],ct);y?bt(G.x,G.y+_[u-1].y,_[u-1].x+K):bt(G.x,G.y,f+K)}}}nt(),vt();function nt(){const N=s.length/3;if(h){let ht=0,K=k*ht;for(let ct=0;ct<X;ct++){const $=O[ct];Ot($[2]+K,$[1]+K,$[0]+K)}ht=u+m*2,K=k*ht;for(let ct=0;ct<X;ct++){const $=O[ct];Ot($[0]+K,$[1]+K,$[2]+K)}}else{for(let ht=0;ht<X;ht++){const K=O[ht];Ot(K[2],K[1],K[0])}for(let ht=0;ht<X;ht++){const K=O[ht];Ot(K[0]+k*u,K[1]+k*u,K[2]+k*u)}}i.addGroup(N,s.length/3-N,0)}function vt(){const N=s.length/3;let ht=0;wt(I,ht),ht+=I.length;for(let K=0,ct=R.length;K<ct;K++){const $=R[K];wt($,ht),ht+=$.length}i.addGroup(N,s.length/3-N,1)}function wt(N,ht){let K=N.length;for(;--K>=0;){const ct=K;let $=K-1;$<0&&($=N.length-1);for(let Ct=0,yt=u+m*2;Ct<yt;Ct++){const P=k*Ct,A=k*(Ct+1),G=ht+ct+P,at=ht+$+P,st=ht+$+A,it=ht+ct+A;zt(G,at,st,it)}}}function bt(N,ht,K){c.push(N),c.push(ht),c.push(K)}function Ot(N,ht,K){At(N),At(ht),At(K);const ct=s.length/3,$=x.generateTopUV(i,s,ct-3,ct-2,ct-1);kt($[0]),kt($[1]),kt($[2])}function zt(N,ht,K,ct){At(N),At(ht),At(ct),At(ht),At(K),At(ct);const $=s.length/3,Ct=x.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);kt(Ct[0]),kt(Ct[1]),kt(Ct[3]),kt(Ct[1]),kt(Ct[2]),kt(Ct[3])}function At(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function kt(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return oS(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new uu[s.type]().fromJSON(s)),new Tc(i,t.options)}}const rS={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new Q(r,o),new Q(a,c),new Q(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-f),new Q(h,1-g),new Q(v,1-d)]:[new Q(a,1-c),new Q(u,1-f),new Q(p,1-g),new Q(m,1-d)]}};function oS(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vr extends Vu{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class kr extends Be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new T,h=new T,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const x=[],_=d/i;let y=0;d===0&&o===0?y=.5/e:d===i&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const w=E/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),f.y=t*Math.cos(o+_*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(w+y,1-_),x.push(l++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<e;x++){const _=u[d][x+1],y=u[d][x],E=u[d+1][x],w=u[d+1][x+1];(d!==0||o>0)&&p.push(_,y,w),(d!==i-1||c<Math.PI)&&p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wi extends Be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new T,f=new T,h=new T;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(v,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Uo extends Br{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $p extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class aS extends $p{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ml=new se,Zf=new T,Kf=new T;class cS{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nu,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),Kf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kf),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lS extends cS{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uS extends $p{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new lS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ac{constructor(t,e,i=0,s=1/0){this.ray=new Or(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return du(t,this,i,e),i.sort($f),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)du(t[s],this,i,e);return i.sort($f),i}}function $f(n,t){return n.distance-t.distance}function du(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)du(s[r],t,e,!0)}}class Jf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qf=new Q;class hS{constructor(t=new Q(1/0,1/0),e=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qf.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qf).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const td=new T,ya=new T;class On{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){td.subVectors(t,this.start),ya.subVectors(this.end,this.start);const i=ya.dot(ya);let r=ya.dot(td)/i;return e&&(r=Ne(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Jp extends zu{constructor(t=10,e=10,i=4473924,s=8947848){i=new ie(i),s=new ie(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,p=0,g=-a;h<=e;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const v=h===r?i:s;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const u=new Be;u.setAttribute("position",new le(c,3)),u.setAttribute("color",new le(l,3));const f=new Do({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ma=new de;class fS extends zu{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Be;r.setIndex(new Je(i,1)),r.setAttribute("position",new Je(s,3)),super(r,new Do({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ma.setFromObject(this.object),Ma.isEmpty())return;const e=Ma.min,i=Ma.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);const ed={type:"change"},Sl={type:"start"},nd={type:"end"},Sa=new Or,id=new fn,dS=Math.cos(70*rs.DEG2RAD);class pS extends Os{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",it),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",it),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ed),i.update(),r=s.NONE},this.update=function(){const F=new T,ot=new De().setFromUnitVectors(t.up,new T(0,1,0)),gt=ot.clone().invert(),lt=new T,Rt=new De,Jt=new T,re=2*Math.PI;return function(mt=null){const B=i.object.position;F.copy(B).sub(i.target),F.applyQuaternion(ot),a.setFromVector3(F),i.autoRotate&&r===s.NONE&&R(S(mt)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ft=i.minAzimuthAngle,dt=i.maxAzimuthAngle;isFinite(ft)&&isFinite(dt)&&(ft<-Math.PI?ft+=re:ft>Math.PI&&(ft-=re),dt<-Math.PI?dt+=re:dt>Math.PI&&(dt-=re),ft<=dt?a.theta=Math.max(ft,Math.min(dt,a.theta)):a.theta=a.theta>(ft+dt)/2?Math.max(ft,a.theta):Math.min(dt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*l),F.setFromSpherical(a),F.applyQuaternion(gt),B.copy(i.target).add(F),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Nt=!1;if(i.zoomToCursor&&w){let Lt=null;if(i.object.isPerspectiveCamera){const ae=F.length();Lt=V(ae*l);const ce=ae-Lt;i.object.position.addScaledVector(y,ce),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ae=new T(E.x,E.y,0);ae.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Nt=!0;const ce=new T(E.x,E.y,0);ce.unproject(i.object),i.object.position.sub(ce).add(ae),i.object.updateMatrixWorld(),Lt=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Lt).add(i.object.position):(Sa.origin.copy(i.object.position),Sa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Sa.direction))<dS?t.lookAt(i.target):(id.setFromNormalAndCoplanarPoint(i.object.up,i.target),Sa.intersectPlane(id,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Nt=!0);return l=1,w=!1,Nt||lt.distanceToSquared(i.object.position)>o||8*(1-Rt.dot(i.object.quaternion))>o||Jt.distanceToSquared(i.target)>0?(i.dispatchEvent(ed),lt.copy(i.object.position),Rt.copy(i.object.quaternion),Jt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Mt),i.domElement.removeEventListener("pointerdown",yt),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",st),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",A),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",it),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Jf,c=new Jf;let l=1;const u=new T,f=new Q,h=new Q,p=new Q,g=new Q,v=new Q,m=new Q,d=new Q,x=new Q,_=new Q,y=new T,E=new Q;let w=!1;const b=[],L={};function S(F){return F!==null?2*Math.PI/60*i.autoRotateSpeed*F:2*Math.PI/60/60*i.autoRotateSpeed}function M(F){const ot=Math.abs(F)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ot)}function R(F){c.theta-=F}function D(F){c.phi-=F}const O=function(){const F=new T;return function(gt,lt){F.setFromMatrixColumn(lt,0),F.multiplyScalar(-gt),u.add(F)}}(),I=function(){const F=new T;return function(gt,lt){i.screenSpacePanning===!0?F.setFromMatrixColumn(lt,1):(F.setFromMatrixColumn(lt,0),F.crossVectors(i.object.up,F)),F.multiplyScalar(gt),u.add(F)}}(),U=function(){const F=new T;return function(gt,lt){const Rt=i.domElement;if(i.object.isPerspectiveCamera){const Jt=i.object.position;F.copy(Jt).sub(i.target);let re=F.length();re*=Math.tan(i.object.fov/2*Math.PI/180),O(2*gt*re/Rt.clientHeight,i.object.matrix),I(2*lt*re/Rt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(gt*(i.object.right-i.object.left)/i.object.zoom/Rt.clientWidth,i.object.matrix),I(lt*(i.object.top-i.object.bottom)/i.object.zoom/Rt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(F){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(F){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(F,ot){if(!i.zoomToCursor)return;w=!0;const gt=i.domElement.getBoundingClientRect(),lt=F-gt.left,Rt=ot-gt.top,Jt=gt.width,re=gt.height;E.x=lt/Jt*2-1,E.y=-(Rt/re)*2+1,y.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(F){return Math.max(i.minDistance,Math.min(i.maxDistance,F))}function tt(F){f.set(F.clientX,F.clientY)}function et(F){Z(F.clientX,F.clientX),d.set(F.clientX,F.clientY)}function ut(F){g.set(F.clientX,F.clientY)}function j(F){h.set(F.clientX,F.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ot=i.domElement;R(2*Math.PI*p.x/ot.clientHeight),D(2*Math.PI*p.y/ot.clientHeight),f.copy(h),i.update()}function nt(F){x.set(F.clientX,F.clientY),_.subVectors(x,d),_.y>0?k(M(_.y)):_.y<0&&X(M(_.y)),d.copy(x),i.update()}function vt(F){v.set(F.clientX,F.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),U(m.x,m.y),g.copy(v),i.update()}function wt(F){Z(F.clientX,F.clientY),F.deltaY<0?X(M(F.deltaY)):F.deltaY>0&&k(M(F.deltaY)),i.update()}function bt(F){let ot=!1;switch(F.code){case i.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),ot=!0;break;case i.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),ot=!0;break;case i.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),ot=!0;break;case i.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),ot=!0;break}ot&&(F.preventDefault(),i.update())}function Ot(F){if(b.length===1)f.set(F.pageX,F.pageY);else{const ot=$t(F),gt=.5*(F.pageX+ot.x),lt=.5*(F.pageY+ot.y);f.set(gt,lt)}}function zt(F){if(b.length===1)g.set(F.pageX,F.pageY);else{const ot=$t(F),gt=.5*(F.pageX+ot.x),lt=.5*(F.pageY+ot.y);g.set(gt,lt)}}function At(F){const ot=$t(F),gt=F.pageX-ot.x,lt=F.pageY-ot.y,Rt=Math.sqrt(gt*gt+lt*lt);d.set(0,Rt)}function kt(F){i.enableZoom&&At(F),i.enablePan&&zt(F)}function N(F){i.enableZoom&&At(F),i.enableRotate&&Ot(F)}function ht(F){if(b.length==1)h.set(F.pageX,F.pageY);else{const gt=$t(F),lt=.5*(F.pageX+gt.x),Rt=.5*(F.pageY+gt.y);h.set(lt,Rt)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ot=i.domElement;R(2*Math.PI*p.x/ot.clientHeight),D(2*Math.PI*p.y/ot.clientHeight),f.copy(h)}function K(F){if(b.length===1)v.set(F.pageX,F.pageY);else{const ot=$t(F),gt=.5*(F.pageX+ot.x),lt=.5*(F.pageY+ot.y);v.set(gt,lt)}m.subVectors(v,g).multiplyScalar(i.panSpeed),U(m.x,m.y),g.copy(v)}function ct(F){const ot=$t(F),gt=F.pageX-ot.x,lt=F.pageY-ot.y,Rt=Math.sqrt(gt*gt+lt*lt);x.set(0,Rt),_.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),k(_.y),d.copy(x);const Jt=(F.pageX+ot.x)*.5,re=(F.pageY+ot.y)*.5;Z(Jt,re)}function $(F){i.enableZoom&&ct(F),i.enablePan&&K(F)}function Ct(F){i.enableZoom&&ct(F),i.enableRotate&&ht(F)}function yt(F){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(F.pointerId),i.domElement.addEventListener("pointermove",P),i.domElement.addEventListener("pointerup",A)),Ut(F),F.pointerType==="touch"?Tt(F):G(F))}function P(F){i.enabled!==!1&&(F.pointerType==="touch"?xt(F):at(F))}function A(F){Vt(F),b.length===0&&(i.domElement.releasePointerCapture(F.pointerId),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",A)),i.dispatchEvent(nd),r=s.NONE}function G(F){let ot;switch(F.button){case 0:ot=i.mouseButtons.LEFT;break;case 1:ot=i.mouseButtons.MIDDLE;break;case 2:ot=i.mouseButtons.RIGHT;break;default:ot=-1}switch(ot){case Hi.DOLLY:if(i.enableZoom===!1)return;et(F),r=s.DOLLY;break;case Hi.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enablePan===!1)return;ut(F),r=s.PAN}else{if(i.enableRotate===!1)return;tt(F),r=s.ROTATE}break;case Hi.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enableRotate===!1)return;tt(F),r=s.ROTATE}else{if(i.enablePan===!1)return;ut(F),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Sl)}function at(F){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;j(F);break;case s.DOLLY:if(i.enableZoom===!1)return;nt(F);break;case s.PAN:if(i.enablePan===!1)return;vt(F);break}}function st(F){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(F.preventDefault(),i.dispatchEvent(Sl),wt(F),i.dispatchEvent(nd))}function it(F){i.enabled===!1||i.enablePan===!1||bt(F)}function Tt(F){switch(rt(F),b.length){case 1:switch(i.touches.ONE){case Gi.ROTATE:if(i.enableRotate===!1)return;Ot(F),r=s.TOUCH_ROTATE;break;case Gi.PAN:if(i.enablePan===!1)return;zt(F),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Gi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;kt(F),r=s.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(F),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Sl)}function xt(F){switch(rt(F),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;ht(F),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;K(F),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$(F),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ct(F),i.update();break;default:r=s.NONE}}function Mt(F){i.enabled!==!1&&F.preventDefault()}function Ut(F){b.push(F.pointerId)}function Vt(F){delete L[F.pointerId];for(let ot=0;ot<b.length;ot++)if(b[ot]==F.pointerId){b.splice(ot,1);return}}function rt(F){let ot=L[F.pointerId];ot===void 0&&(ot=new Q,L[F.pointerId]=ot),ot.set(F.pageX,F.pageY)}function $t(F){const ot=F.pointerId===b[0]?b[1]:b[0];return L[ot]}i.domElement.addEventListener("contextmenu",Mt),i.domElement.addEventListener("pointerdown",yt),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",st,{passive:!1}),this.update()}}const ds=new Ac,Ke=new T,Oi=new T,Me=new De,sd={X:new T(1,0,0),Y:new T(0,1,0),Z:new T(0,0,1)},El={type:"change"},rd={type:"mouseDown"},od={type:"mouseUp",mode:null},ad={type:"objectChange"};class mS extends Ce{constructor(t,e){super(),e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const i=new MS;this._gizmo=i,this.add(i);const s=new SS;this._plane=s,this.add(s);const r=this;function o(x,_){let y=_;Object.defineProperty(r,x,{get:function(){return y!==void 0?y:_},set:function(E){y!==E&&(y=E,s[x]=E,i[x]=E,r.dispatchEvent({type:x+"-changed",value:E}),r.dispatchEvent(El))}}),r[x]=_,s[x]=_,i[x]=_}o("camera",t),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new T,c=new T,l=new De,u=new De,f=new T,h=new De,p=new T,g=new T,v=new T,m=0,d=new T;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",u),o("cameraPosition",f),o("cameraQuaternion",h),o("pointStart",p),o("pointEnd",g),o("rotationAxis",v),o("rotationAngle",m),o("eye",d),this._offset=new T,this._startNorm=new T,this._endNorm=new T,this._cameraScale=new T,this._parentPosition=new T,this._parentQuaternion=new De,this._parentQuaternionInv=new De,this._parentScale=new T,this._worldScaleStart=new T,this._worldQuaternionInv=new De,this._worldScale=new T,this._positionStart=new T,this._quaternionStart=new De,this._scaleStart=new T,this._getPointer=gS.bind(this),this._onPointerDown=xS.bind(this),this._onPointerHover=_S.bind(this),this._onPointerMove=vS.bind(this),this._onPointerUp=yS.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;ds.setFromCamera(t,this.camera);const e=bl(this._gizmo.picker[this.mode],ds);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t.button!==0)&&this.axis!==null){ds.setFromCamera(t,this.camera);const e=bl(this._plane,ds,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,rd.mode=this.mode,this.dispatchEvent(rd)}}pointerMove(t){const e=this.axis,i=this.mode,s=this.object;let r=this.space;if(i==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t.button!==-1)return;ds.setFromCamera(t,this.camera);const o=bl(this._plane,ds,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Me.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Ke.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Ke.setFromMatrixPosition(s.parent.matrixWorld))));else if(i==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Oi.set(a,a,a)}else Ke.copy(this.pointStart),Oi.copy(this.pointEnd),Ke.applyQuaternion(this._worldQuaternionInv),Oi.applyQuaternion(this._worldQuaternionInv),Oi.divide(Ke),e.search("X")===-1&&(Oi.x=1),e.search("Y")===-1&&(Oi.y=1),e.search("Z")===-1&&(Oi.z=1);s.scale.copy(this._scaleStart).multiply(Oi),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Ke.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ke.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(sd[e]),Ke.copy(sd[e]),r==="local"&&Ke.applyQuaternion(this.worldQuaternion),Ke.cross(this.eye),Ke.length()===0?c=!0:this.rotationAngle=this._offset.dot(Ke.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(El),this.dispatchEvent(ad)}}pointerUp(t){t.button===0&&(this.dragging&&this.axis!==null&&(od.mode=this.mode,this.dispatchEvent(od)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(El),this.dispatchEvent(ad),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ds}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function gS(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const t=this.domElement.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width*2-1,y:-(n.clientY-t.top)/t.height*2+1,button:n.button}}}function _S(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function xS(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function vS(n){this.enabled&&this.pointerMove(this._getPointer(n))}function yS(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function bl(n,t,e){const i=t.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||e)return i[s];return!1}const Ea=new Li,pe=new T(0,1,0),cd=new T(0,0,0),ld=new se,ba=new De,ja=new De,Qn=new T,ud=new se,ro=new T(1,0,0),vs=new T(0,1,0),oo=new T(0,0,1),wa=new T,Yr=new T,jr=new T;class MS extends Ce{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new zs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Do({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const f=t.clone();f.opacity=.25;const h=t.clone();h.color.setHex(16776960),h.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const v=new Ae(0,.04,.1,12);v.translate(0,.05,0);const m=new me(.08,.08,.08);m.translate(0,.04,0);const d=new Be;d.setAttribute("position",new le([0,0,0,1,0,0],3));const x=new Ae(.0075,.0075,.5,3);x.translate(0,.25,0);function _(U,k){const X=new Wi(U,.0075,3,64,k*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function y(){const U=new Be;return U.setAttribute("position",new le([0,0,0,1,1,1],3)),U}const E={X:[[new pt(v,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(v,r),[-.5,0,0],[0,0,Math.PI/2]],[new pt(x,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pt(v,o),[0,.5,0]],[new pt(v,o),[0,-.5,0],[Math.PI,0,0]],[new pt(x,o)]],Z:[[new pt(v,a),[0,0,.5],[Math.PI/2,0,0]],[new pt(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pt(x,a),null,[Math.PI/2,0,0]]],XYZ:[[new pt(new vr(.1,0),f.clone()),[0,0,0]]],XY:[[new pt(new me(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new pt(new me(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new me(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new pt(new Ae(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new Ae(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new Ae(.2,0,.6,4),i),[0,.3,0]],[new pt(new Ae(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new Ae(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pt(new Ae(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pt(new vr(.2,0),i)]],XY:[[new pt(new me(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pt(new me(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new me(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},b={START:[[new pt(new vr(.01,2),s),null,null,null,"helper"]],END:[[new pt(new vr(.01,2),s),null,null,null,"helper"]],DELTA:[[new yi(y(),s),null,null,null,"helper"]],X:[[new yi(d,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new yi(d,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new yi(d,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new pt(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new pt(_(.5,.5),r)]],Y:[[new pt(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pt(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pt(_(.75,1),h),null,[0,Math.PI/2,0]]]},S={AXIS:[[new yi(d,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new pt(new kr(.25,10,8),i)]],X:[[new pt(new Wi(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pt(new Wi(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pt(new Wi(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pt(new Wi(.75,.1,2,24),i)]]},R={X:[[new pt(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(x,r),[0,0,0],[0,0,-Math.PI/2]],[new pt(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pt(m,o),[0,.5,0]],[new pt(x,o)],[new pt(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pt(m,a),[0,0,.5],[Math.PI/2,0,0]],[new pt(x,a),[0,0,0],[Math.PI/2,0,0]],[new pt(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pt(new me(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pt(new me(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new me(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new me(.1,.1,.1),f.clone())]]},D={X:[[new pt(new Ae(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new Ae(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new Ae(.2,0,.6,4),i),[0,.3,0]],[new pt(new Ae(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new Ae(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pt(new Ae(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pt(new me(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pt(new me(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new me(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new me(.2,.2,.2),i),[0,0,0]]]},O={X:[[new yi(d,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new yi(d,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new yi(d,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(U){const k=new Ce;for(const X in U)for(let Z=U[X].length;Z--;){const V=U[X][Z][0].clone(),tt=U[X][Z][1],et=U[X][Z][2],ut=U[X][Z][3],j=U[X][Z][4];V.name=X,V.tag=j,tt&&V.position.set(tt[0],tt[1],tt[2]),et&&V.rotation.set(et[0],et[1],et[2]),ut&&V.scale.set(ut[0],ut[1],ut[2]),V.updateMatrix();const nt=V.geometry.clone();nt.applyMatrix4(V.matrix),V.geometry=nt,V.renderOrder=1/0,V.position.set(0,0,0),V.rotation.set(0,0,0),V.scale.set(1,1,1),k.add(V)}return k}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(E)),this.add(this.gizmo.rotate=I(L)),this.add(this.gizmo.scale=I(R)),this.add(this.picker.translate=I(w)),this.add(this.picker.rotate=I(M)),this.add(this.picker.scale=I(D)),this.add(this.helper.translate=I(b)),this.add(this.helper.rotate=I(S)),this.add(this.helper.scale=I(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ja;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Me.setFromEuler(Ea.set(0,0,0)),o.quaternion.copy(i).multiply(Me),Math.abs(pe.copy(ro).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Me.setFromEuler(Ea.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Me),Math.abs(pe.copy(vs).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Me.setFromEuler(Ea.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Me),Math.abs(pe.copy(oo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Me.setFromEuler(Ea.set(0,Math.PI/2,0)),pe.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(ld.lookAt(cd,pe,vs)),o.quaternion.multiply(Me),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ke.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ke.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ke),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(pe.copy(ro).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(pe.copy(vs).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(pe.copy(oo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(pe.copy(oo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(pe.copy(ro).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(pe.copy(vs).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ba.copy(i),pe.copy(this.eye).applyQuaternion(Me.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(ld.lookAt(this.eye,cd,vs)),o.name==="X"&&(Me.setFromAxisAngle(ro,Math.atan2(-pe.y,pe.z)),Me.multiplyQuaternions(ba,Me),o.quaternion.copy(Me)),o.name==="Y"&&(Me.setFromAxisAngle(vs,Math.atan2(pe.x,pe.z)),Me.multiplyQuaternions(ba,Me),o.quaternion.copy(Me)),o.name==="Z"&&(Me.setFromAxisAngle(oo,Math.atan2(pe.y,pe.x)),Me.multiplyQuaternions(ba,Me),o.quaternion.copy(Me))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class SS extends pt{constructor(){super(new Io(1e5,1e5,2,2),new zs({visible:!1,wireframe:!0,side:an,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),wa.copy(ro).applyQuaternion(e==="local"?this.worldQuaternion:ja),Yr.copy(vs).applyQuaternion(e==="local"?this.worldQuaternion:ja),jr.copy(oo).applyQuaternion(e==="local"?this.worldQuaternion:ja),pe.copy(Yr),this.mode){case"translate":case"scale":switch(this.axis){case"X":pe.copy(this.eye).cross(wa),Qn.copy(wa).cross(pe);break;case"Y":pe.copy(this.eye).cross(Yr),Qn.copy(Yr).cross(pe);break;case"Z":pe.copy(this.eye).cross(jr),Qn.copy(jr).cross(pe);break;case"XY":Qn.copy(jr);break;case"YZ":Qn.copy(wa);break;case"XZ":pe.copy(jr),Qn.copy(Yr);break;case"XYZ":case"E":Qn.set(0,0,0);break}break;case"rotate":default:Qn.set(0,0,0)}Qn.length()===0?this.quaternion.copy(this.cameraQuaternion):(ud.lookAt(Ke.set(0,0,0),Qn,pe),this.quaternion.setFromRotationMatrix(ud)),super.updateMatrixWorld(t)}}class ES{parse(t,e={}){e=Object.assign({binary:!1},e);const i=e.binary,s=[];let r=0;t.traverse(function(d){if(d.isMesh){const x=d.geometry,_=x.index,y=x.getAttribute("position");r+=_!==null?_.count/3:y.count/3,s.push({object3d:d,geometry:x})}});let o,a=80;if(i===!0){const d=r*2+r*3*4*4+80+4,x=new ArrayBuffer(d);o=new DataView(x),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;const c=new T,l=new T,u=new T,f=new T,h=new T,p=new T;for(let d=0,x=s.length;d<x;d++){const _=s[d].object3d,y=s[d].geometry,E=y.index,w=y.getAttribute("position");if(E!==null)for(let b=0;b<E.count;b+=3){const L=E.getX(b+0),S=E.getX(b+1),M=E.getX(b+2);g(L,S,M,w,_)}else for(let b=0;b<w.count;b+=3){const L=b+0,S=b+1,M=b+2;g(L,S,M,w,_)}}return i===!1&&(o+=`endsolid exported
`),o;function g(d,x,_,y,E){c.fromBufferAttribute(y,d),l.fromBufferAttribute(y,x),u.fromBufferAttribute(y,_),E.isSkinnedMesh===!0&&(E.applyBoneTransform(d,c),E.applyBoneTransform(x,l),E.applyBoneTransform(_,u)),c.applyMatrix4(E.matrixWorld),l.applyMatrix4(E.matrixWorld),u.applyMatrix4(E.matrixWorld),v(c,l,u),m(c),m(l),m(u),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function v(d,x,_){f.subVectors(_,x),h.subVectors(d,x),f.cross(h).normalize(),p.copy(f).normalize(),i===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):(o+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,o+=`		outer loop
`)}function m(d){i===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):o+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}const Zr=new T;function Tn(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Zr.copy(t),Zr[i]=0,Zr.normalize();const l=.5*o/(o+a),u=1-Zr.angleTo(n)/c;return Math.sign(Zr[e])===1?u*l:a/(o+a)+l+l*(1-u)}class bS extends me{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new T,c=new T,l=new T(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,p=u.length/6,g=new T,v=.5/s;for(let m=0,d=0;m<u.length;m+=3,d+=2)switch(a.fromArray(u,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),u[m+0]=l.x*Math.sign(a.x)+c.x*r,u[m+1]=l.y*Math.sign(a.y)+c.y*r,u[m+2]=l.z*Math.sign(a.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),h[d+0]=Tn(g,c,"z","y",r,i),h[d+1]=1-Tn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),h[d+0]=1-Tn(g,c,"z","y",r,i),h[d+1]=1-Tn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),h[d+0]=1-Tn(g,c,"x","z",r,t),h[d+1]=Tn(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),h[d+0]=1-Tn(g,c,"x","z",r,t),h[d+1]=1-Tn(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),h[d+0]=1-Tn(g,c,"x","y",r,t),h[d+1]=1-Tn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),h[d+0]=Tn(g,c,"x","y",r,t),h[d+1]=1-Tn(g,c,"y","x",r,e);break}}}const Qp=0,wS=1,TS=2,hd=2,wl=1.25,fd=1,mo=6*4+4+4,Pc=65535,AS=Math.pow(2,-24),Tl=Symbol("SKIP_GENERATION");function PS(n){return n.index?n.index.count:n.attributes.position.count}function Hr(n){return PS(n)/3}function CS(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function RS(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=CS(e,i);n.setIndex(new Je(s,1));for(let r=0;r<e;r++)s[r]=r}}function tm(n){const t=Hr(n),e=n.drawRange,i=e.start/3,s=(e.start+e.count)/3,r=Math.max(0,i),o=Math.min(t,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function em(n){if(!n.groups||!n.groups.length)return tm(n);const t=[],e=new Set,i=n.drawRange,s=i.start/3,r=(i.start+i.count)/3;for(const a of n.groups){const c=a.start/3,l=(a.start+a.count)/3;e.add(Math.max(s,c)),e.add(Math.min(r,l))}const o=Array.from(e.values()).sort((a,c)=>a-c);for(let a=0;a<o.length-1;a++){const c=o[a],l=o[a+1];t.push({offset:Math.floor(c),count:Math.floor(l-c)})}return t}function LS(n){if(n.groups.length===0)return!1;const t=Hr(n),e=em(n).sort((r,o)=>r.offset-o.offset),i=e[e.length-1];i.count=Math.min(t-i.offset,i.count);let s=0;return e.forEach(({count:r})=>s+=r),t!==s}function Al(n,t,e,i,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,p=1/0,g=-1/0,v=-1/0,m=-1/0;for(let d=t*6,x=(t+e)*6;d<x;d+=6){const _=n[d+0],y=n[d+1],E=_-y,w=_+y;E<r&&(r=E),w>c&&(c=w),_<f&&(f=_),_>g&&(g=_);const b=n[d+2],L=n[d+3],S=b-L,M=b+L;S<o&&(o=S),M>l&&(l=M),b<h&&(h=b),b>v&&(v=b);const R=n[d+4],D=n[d+5],O=R-D,I=R+D;O<a&&(a=O),I>u&&(u=I),R<p&&(p=R),R>m&&(m=R)}i[0]=r,i[1]=o,i[2]=a,i[3]=c,i[4]=l,i[5]=u,s[0]=f,s[1]=h,s[2]=p,s[3]=g,s[4]=v,s[5]=m}function IS(n,t=null,e=null,i=null){const s=n.attributes.position,r=n.index?n.index.array:null,o=Hr(n),a=s.normalized;let c;t===null?(c=new Float32Array(o*6*4),e=0,i=o):(c=t,e=e||0,i=i||o);const l=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let p=e;p<e+i;p++){const g=p*3,v=p*6;let m=g+0,d=g+1,x=g+2;r&&(m=r[m],d=r[d],x=r[x]),a||(m=m*f+u,d=d*f+u,x=x*f+u);for(let _=0;_<3;_++){let y,E,w;a?(y=s[h[_]](m),E=s[h[_]](d),w=s[h[_]](x)):(y=l[m+_],E=l[d+_],w=l[x+_]);let b=y;E<b&&(b=E),w<b&&(b=w);let L=y;E>L&&(L=E),w>L&&(L=w);const S=(L-b)/2,M=_*2;c[v+M+0]=b+S,c[v+M+1]=S+(Math.abs(b)+S)*AS}}return c}function Ee(n,t,e){return e.min.x=t[n],e.min.y=t[n+1],e.min.z=t[n+2],e.max.x=t[n+3],e.max.y=t[n+4],e.max.z=t[n+5],e}function dd(n){let t=-1,e=-1/0;for(let i=0;i<3;i++){const s=n[i+3]-n[i];s>e&&(e=s,t=i)}return t}function pd(n,t){t.set(n)}function md(n,t,e){let i,s;for(let r=0;r<3;r++){const o=r+3;i=n[r],s=t[r],e[r]=i<s?i:s,i=n[o],s=t[o],e[o]=i>s?i:s}}function Ta(n,t,e){for(let i=0;i<3;i++){const s=t[n+2*i],r=t[n+2*i+1],o=s-r,a=s+r;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function Kr(n){const t=n[3]-n[0],e=n[4]-n[1],i=n[5]-n[2];return 2*(t*e+e*i+i*t)}const Mi=32,DS=(n,t)=>n.candidate-t.candidate,Bi=new Array(Mi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Aa=new Float32Array(6);function US(n,t,e,i,s,r){let o=-1,a=0;if(r===Qp)o=dd(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===wS)o=dd(n),o!==-1&&(a=FS(e,i,s,o));else if(r===TS){const c=Kr(n);let l=wl*s;const u=i*6,f=(i+s)*6;for(let h=0;h<3;h++){const p=t[h],m=(t[h+3]-p)/Mi;if(s<Mi/4){const d=[...Bi];d.length=s;let x=0;for(let y=u;y<f;y+=6,x++){const E=d[x];E.candidate=e[y+2*h],E.count=0;const{bounds:w,leftCacheBounds:b,rightCacheBounds:L}=E;for(let S=0;S<3;S++)L[S]=1/0,L[S+3]=-1/0,b[S]=1/0,b[S+3]=-1/0,w[S]=1/0,w[S+3]=-1/0;Ta(y,e,w)}d.sort(DS);let _=s;for(let y=0;y<_;y++){const E=d[y];for(;y+1<_&&d[y+1].candidate===E.candidate;)d.splice(y+1,1),_--}for(let y=u;y<f;y+=6){const E=e[y+2*h];for(let w=0;w<_;w++){const b=d[w];E>=b.candidate?Ta(y,e,b.rightCacheBounds):(Ta(y,e,b.leftCacheBounds),b.count++)}}for(let y=0;y<_;y++){const E=d[y],w=E.count,b=s-E.count,L=E.leftCacheBounds,S=E.rightCacheBounds;let M=0;w!==0&&(M=Kr(L)/c);let R=0;b!==0&&(R=Kr(S)/c);const D=fd+wl*(M*w+R*b);D<l&&(o=h,l=D,a=E.candidate)}}else{for(let _=0;_<Mi;_++){const y=Bi[_];y.count=0,y.candidate=p+m+_*m;const E=y.bounds;for(let w=0;w<3;w++)E[w]=1/0,E[w+3]=-1/0}for(let _=u;_<f;_+=6){let w=~~((e[_+2*h]-p)/m);w>=Mi&&(w=Mi-1);const b=Bi[w];b.count++,Ta(_,e,b.bounds)}const d=Bi[Mi-1];pd(d.bounds,d.rightCacheBounds);for(let _=Mi-2;_>=0;_--){const y=Bi[_],E=Bi[_+1];md(y.bounds,E.rightCacheBounds,y.rightCacheBounds)}let x=0;for(let _=0;_<Mi-1;_++){const y=Bi[_],E=y.count,w=y.bounds,L=Bi[_+1].rightCacheBounds;E!==0&&(x===0?pd(w,Aa):md(w,Aa,Aa)),x+=E;let S=0,M=0;x!==0&&(S=Kr(Aa)/c);const R=s-x;R!==0&&(M=Kr(L)/c);const D=fd+wl*(S*x+M*R);D<l&&(o=h,l=D,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function FS(n,t,e,i){let s=0;for(let r=t,o=t+e;r<o;r++)s+=n[r*6+i*2];return s/e}class Pl{constructor(){this.boundingData=new Float32Array(6)}}function NS(n,t,e,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let f=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=f}for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function OS(n,t,e,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=n[o];n[o]=n[a],n[a]=u;for(let f=0;f<6;f++){let h=e[o*6+f];e[o*6+f]=e[a*6+f],e[a*6+f]=h}o++,a--}else return o}}function pn(n,t){return t[n+15]===65535}function Mn(n,t){return t[n+6]}function In(n,t){return t[n+14]}function Dn(n){return n+8}function Un(n,t){return t[n+6]}function nm(n,t){return t[n+7]}let im,ao,Za,sm;const BS=Math.pow(2,32);function pu(n){return"count"in n?1:1+pu(n.left)+pu(n.right)}function zS(n,t,e){return im=new Float32Array(e),ao=new Uint32Array(e),Za=new Uint16Array(e),sm=new Uint8Array(e),mu(n,t)}function mu(n,t){const e=n/4,i=n/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)im[e+o]=r[o];if(s)if(t.buffer){const o=t.buffer;sm.set(new Uint8Array(o),n);for(let a=n,c=n+o.byteLength;a<c;a+=mo){const l=a/2;pn(l,Za)||(ao[a/4+6]+=e)}return n+o.byteLength}else{const o=t.offset,a=t.count;return ao[e+6]=o,Za[i+14]=a,Za[i+15]=Pc,n+mo}else{const o=t.left,a=t.right,c=t.splitAxis;let l;if(l=mu(n+mo,o),l/4>BS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ao[e+6]=l/4,l=mu(l,a),ao[e+7]=c,l}}function kS(n,t){const e=(n.index?n.index.count:n.attributes.position.count)/3,i=e>2**16,s=i?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function HS(n,t,e,i,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=s,f=n._indirectBuffer,h=n.geometry,p=h.index?h.index.array:null,g=u?OS:NS,v=Hr(h),m=new Float32Array(6);let d=!1;const x=new Pl;return Al(t,e,i,x.boundingData,m),y(x,e,i,m),x;function _(E){l&&l(E/v)}function y(E,w,b,L=null,S=0){if(!d&&S>=r&&(d=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),b<=a||S>=r)return _(w+b),E.offset=w,E.count=b,E;const M=US(E.boundingData,L,t,w,b,c);if(M.axis===-1)return _(w+b),E.offset=w,E.count=b,E;const R=g(f,p,t,w,b,M);if(R===w||R===w+b)_(w+b),E.offset=w,E.count=b;else{E.splitAxis=M.axis;const D=new Pl,O=w,I=R-w;E.left=D,Al(t,O,I,D.boundingData,m),y(D,O,I,m,S+1);const U=new Pl,k=R,X=b-I;E.right=U,Al(t,k,X,U.boundingData,m),y(U,k,X,m,S+1)}return E}}function GS(n,t){const e=n.geometry;t.indirect&&(n._indirectBuffer=kS(e,t.useSharedArrayBuffer),LS(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||RS(e,t);const i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=IS(e),r=t.indirect?tm(e):em(e);n._roots=r.map(o=>{const a=HS(n,s,o.offset,o.count,t),c=pu(a),l=new i(mo*c);return zS(0,a,l),l})}class Pi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}setFromPoints(t,e){let i=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}Pi.prototype.setFromBox=function(){const n=new T;return function(e,i){const s=i.min,r=i.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){n.x=s.x*c+r.x*(1-c),n.y=s.y*l+r.y*(1-l),n.z=s.z*u+r.z*(1-u);const f=e.dot(n);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const VS=function(){const n=new T,t=new T,e=new T;return function(s,r,o){const a=s.start,c=n,l=r.start,u=t;e.subVectors(a,l),n.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(c),p=u.dot(u),g=e.dot(c),m=c.dot(c)*p-h*h;let d,x;m!==0?d=(f*h-g*p)/m:d=0,x=(f+d*h)/p,o.x=d,o.y=x}}(),Wu=function(){const n=new Q,t=new T,e=new T;return function(s,r,o,a){VS(s,r,n);let c=n.x,l=n.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;const h=t,p=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=p.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(p);return}}}}(),WS=function(){const n=new T,t=new T,e=new fn,i=new On;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:f}=o;if(i.start=l,i.end=u,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a||(i.start=l,i.end=f,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a)||(i.start=u,i.end=f,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a))return!0;const v=o.getPlane(e);if(Math.abs(v.distanceToPoint(c))<=a){const d=v.projectPoint(c,t);if(o.containsPoint(d))return!0}return!1}}(),XS=1e-15;function Cl(n){return Math.abs(n)<XS}class zn extends xe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new T),this.satBounds=new Array(4).fill().map(()=>new Pi),this.points=[this.a,this.b,this.c],this.sphere=new Lo,this.plane=new fn,this.needsUpdate=!0}intersectsSphere(t){return WS(t,this)}update(){const t=this.a,e=this.b,i=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);const f=r[2],h=o[2];f.subVectors(e,i),h.setFromPoints(f,s);const p=r[3],g=o[3];p.subVectors(i,t),g.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}zn.prototype.closestPointToSegment=function(){const n=new T,t=new T,e=new On;return function(s,r=null,o=null){const{start:a,end:c}=s,l=this.points;let u,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[p]),Wu(e,s,n,t),u=n.distanceToSquared(t),u<f&&(f=u,r&&r.copy(n),o&&o.copy(t))}return this.closestPointToPoint(a,n),u=a.distanceToSquared(n),u<f&&(f=u,r&&r.copy(n),o&&o.copy(a)),this.closestPointToPoint(c,n),u=c.distanceToSquared(n),u<f&&(f=u,r&&r.copy(n),o&&o.copy(c)),Math.sqrt(f)}}();zn.prototype.intersectsTriangle=function(){const n=new zn,t=new Array(3),e=new Array(3),i=new Pi,s=new Pi,r=new T,o=new T,a=new T,c=new T,l=new T,u=new On,f=new On,h=new On,p=new T;function g(v,m,d){const x=v.points;let _=0,y=-1;for(let E=0;E<3;E++){const{start:w,end:b}=u;w.copy(x[E]),b.copy(x[(E+1)%3]),u.delta(o);const L=Cl(m.distanceToPoint(w));if(Cl(m.normal.dot(o))&&L){d.copy(u),_=2;break}const S=m.intersectLine(u,p);if(!S&&L&&p.copy(w),(S||L)&&!Cl(p.distanceTo(b))){if(_<=1)(_===1?d.start:d.end).copy(p),L&&(y=_);else if(_>=2){(y===1?d.start:d.end).copy(p),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,d=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(n.copy(m),n.update(),m=n);const _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const E=this.satBounds,w=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let S=0;S<4;S++){const M=E[S],R=w[S];if(i.setFromPoints(R,e),M.isSeparated(i))return!1}const b=m.satBounds,L=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let S=0;S<4;S++){const M=b[S],R=L[S];if(i.setFromPoints(R,t),M.isSeparated(i))return!1}for(let S=0;S<4;S++){const M=w[S];for(let R=0;R<4;R++){const D=L[R];if(r.crossVectors(M,D),i.setFromPoints(r,t),s.setFromPoints(r,e),i.isSeparated(s))return!1}}return d&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const E=g(this,y,f);if(E===1&&m.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(E!==2)return!1;const w=g(m,_,h);if(w===1&&this.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(w!==2)return!1;if(f.delta(a),h.delta(c),a.dot(c)<0){let O=h.start;h.start=h.end,h.end=O}const b=f.start.dot(a),L=f.end.dot(a),S=h.start.dot(a),M=h.end.dot(a),R=L<S,D=b<M;return b!==M&&S!==L&&R===D?!1:(d&&(l.subVectors(f.start,h.start),l.dot(a)>0?d.start.copy(f.start):d.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(a)<0?d.end.copy(f.end):d.end.copy(h.end)),!0)}}}();zn.prototype.distanceToPoint=function(){const n=new T;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();zn.prototype.distanceToTriangle=function(){const n=new T,t=new T,e=["a","b","c"],i=new On,s=new On;return function(o,a=null,c=null){const l=a||c?i:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h;const p=e[f],g=o[p];this.closestPointToPoint(g,n),h=g.distanceToSquared(n),h<u&&(u=h,a&&a.copy(n),c&&c.copy(g));const v=this[p];o.closestPointToPoint(v,n),h=v.distanceToSquared(n),h<u&&(u=h,a&&a.copy(v),c&&c.copy(n))}for(let f=0;f<3;f++){const h=e[f],p=e[(f+1)%3];i.set(this[h],this[p]);for(let g=0;g<3;g++){const v=e[g],m=e[(g+1)%3];s.set(o[v],o[m]),Wu(i,s,n,t);const d=n.distanceToSquared(t);d<u&&(u=d,a&&a.copy(n),c&&c.copy(t))}}return Math.sqrt(u)}}();class hn{constructor(t,e,i){this.isOrientedBox=!0,this.min=new T,this.max=new T,this.matrix=new se,this.invMatrix=new se,this.points=new Array(8).fill().map(()=>new T),this.satAxes=new Array(3).fill().map(()=>new T),this.satBounds=new Array(3).fill().map(()=>new Pi),this.alignedSatBounds=new Array(3).fill().map(()=>new Pi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}hn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,i=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*l|2*u|4*f,p=s[h];p.x=l?i.x:e.x,p.y=u?i.y:e.y,p.z=f?i.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){const u=o[l],f=r[l],h=1<<l,p=s[h];u.subVectors(a,p),f.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();hn.prototype.intersectsBox=function(){const n=new Pi;return function(e){this.needsUpdate&&this.update();const i=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=s.x,a[0].isSeparated(n)||(n.min=i.y,n.max=s.y,a[1].isSeparated(n))||(n.min=i.z,n.max=s.z,a[2].isSeparated(n)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(n.setFromBox(l,e),u.isSeparated(n))return!1}return!0}}();hn.prototype.intersectsTriangle=function(){const n=new zn,t=new Array(3),e=new Pi,i=new Pi,s=new T;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const p=a[h],g=c[h];if(e.setFromPoints(g,t),p.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){const p=l[h],g=u[h];if(e.setFromPoints(g,f),p.isSeparated(e))return!1}for(let h=0;h<3;h++){const p=c[h];for(let g=0;g<4;g++){const v=u[g];if(s.crossVectors(p,v),e.setFromPoints(s,t),i.setFromPoints(s,f),e.isSeparated(i))return!1}}return!0}}();hn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();hn.prototype.distanceToPoint=function(){const n=new T;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();hn.prototype.distanceToBox=function(){const n=["x","y","z"],t=new Array(12).fill().map(()=>new On),e=new Array(12).fill().map(()=>new On),i=new T,s=new T;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,i),o.closestPointToPoint(i,s),c&&c.copy(i),l&&l.copy(s)),0;const u=a*a,f=o.min,h=o.max,p=this.points;let g=1/0;for(let m=0;m<8;m++){const d=p[m];s.copy(d).clamp(f,h);const x=d.distanceToSquared(s);if(x<g&&(g=x,c&&c.copy(d),l&&l.copy(s),x<u))return Math.sqrt(x)}let v=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){const _=(m+1)%3,y=(m+2)%3,E=d<<_|x<<y,w=1<<m|d<<_|x<<y,b=p[E],L=p[w];t[v].set(b,L);const M=n[m],R=n[_],D=n[y],O=e[v],I=O.start,U=O.end;I[M]=f[M],I[R]=d?f[R]:h[R],I[D]=x?f[D]:h[R],U[M]=h[M],U[R]=d?f[R]:h[R],U[D]=x?f[D]:h[R],v++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){s.x=m?h.x:f.x,s.y=d?h.y:f.y,s.z=x?h.z:f.z,this.closestPointToPoint(s,i);const _=s.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(i),l&&l.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const d=t[m];for(let x=0;x<12;x++){const _=e[x];Wu(d,_,i,s);const y=i.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(i),l&&l.copy(s),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}}();class Xu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class qS extends Xu{constructor(){super(()=>new zn)}}const Fn=new qS;class YS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ye=new YS;let Zi,yr;const sr=[],Pa=new Xu(()=>new de);function jS(n,t,e,i,s,r){Zi=Pa.getPrimitive(),yr=Pa.getPrimitive(),sr.push(Zi,yr),ye.setBuffer(n._roots[t]);const o=gu(0,n.geometry,e,i,s,r);ye.clearBuffer(),Pa.releasePrimitive(Zi),Pa.releasePrimitive(yr),sr.pop(),sr.pop();const a=sr.length;return a>0&&(yr=sr[a-1],Zi=sr[a-2]),o}function gu(n,t,e,i,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=ye;let u=n*2;if(pn(u,c)){const h=Mn(n,l),p=In(u,c);return Ee(n,a,Zi),i(h,p,!1,o,r+n,Zi)}else{let M=function(D){const{uint16Array:O,uint32Array:I}=ye;let U=D*2;for(;!pn(U,O);)D=Dn(D),U=D*2;return Mn(D,I)},R=function(D){const{uint16Array:O,uint32Array:I}=ye;let U=D*2;for(;!pn(U,O);)D=Un(D,I),U=D*2;return Mn(D,I)+In(U,O)};const h=Dn(n),p=Un(n,l);let g=h,v=p,m,d,x,_;if(s&&(x=Zi,_=yr,Ee(g,a,x),Ee(v,a,_),m=s(x),d=s(_),d<m)){g=p,v=h;const D=m;m=d,d=D,x=_}x||(x=Zi,Ee(g,a,x));const y=pn(g*2,c),E=e(x,y,m,o+1,r+g);let w;if(E===hd){const D=M(g),I=R(g)-D;w=i(D,I,!0,o+1,r+g,x)}else w=E&&gu(g,t,e,i,s,r,o+1);if(w)return!0;_=yr,Ee(v,a,_);const b=pn(v*2,c),L=e(_,b,d,o+1,r+v);let S;if(L===hd){const D=M(v),I=R(v)-D;S=i(D,I,!0,o+1,r+v,_)}else S=L&&gu(v,t,e,i,s,r,o+1);return!!S}}const $r=new T,Rl=new T;function ZS(n,t,e={},i=0,s=1/0){const r=i*i,o=s*s;let a=1/0,c=null;if(n.shapecast({boundsTraverseOrder:u=>($r.copy(t).clamp(u.min,u.max),$r.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,$r);const h=t.distanceToSquared($r);return h<a&&(Rl.copy($r),a=h,c=f),h<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(Rl):e.point=Rl.clone(),e.distance=l,e.faceIndex=c,e}const rr=new T,or=new T,ar=new T,Ca=new Q,Ra=new Q,La=new Q,gd=new T,_d=new T,xd=new T,Ia=new T;function KS(n,t,e,i,s,r){let o;return r===ln?o=n.intersectTriangle(i,e,t,!0,s):o=n.intersectTriangle(t,e,i,r!==an,s),o===null?null:{distance:n.origin.distanceTo(s),point:s.clone()}}function $S(n,t,e,i,s,r,o,a,c){rr.fromBufferAttribute(t,r),or.fromBufferAttribute(t,o),ar.fromBufferAttribute(t,a);const l=KS(n,rr,or,ar,Ia,c);if(l){i&&(Ca.fromBufferAttribute(i,r),Ra.fromBufferAttribute(i,o),La.fromBufferAttribute(i,a),l.uv=xe.getInterpolation(Ia,rr,or,ar,Ca,Ra,La,new Q)),s&&(Ca.fromBufferAttribute(s,r),Ra.fromBufferAttribute(s,o),La.fromBufferAttribute(s,a),l.uv1=xe.getInterpolation(Ia,rr,or,ar,Ca,Ra,La,new Q)),e&&(gd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,o),xd.fromBufferAttribute(e,a),l.normal=xe.getInterpolation(Ia,rr,or,ar,gd,_d,xd,new T),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:r,b:o,c:a,normal:new T,materialIndex:0};xe.getNormal(rr,or,ar,u.normal),l.face=u,l.faceIndex=r}return l}function Cc(n,t,e,i,s){const r=i*3;let o=r+0,a=r+1,c=r+2;const l=n.index;n.index&&(o=l.getX(o),a=l.getX(a),c=l.getX(c));const{position:u,normal:f,uv:h,uv1:p}=n.attributes,g=$S(e,u,f,h,p,o,a,c,t);return g?(g.faceIndex=i,s&&s.push(g),g):null}function Oe(n,t,e,i){const s=n.a,r=n.b,o=n.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=i.getX(a),s.y=i.getY(a),s.z=i.getZ(a),r.x=i.getX(c),r.y=i.getY(c),r.z=i.getZ(c),o.x=i.getX(l),o.y=i.getY(l),o.z=i.getZ(l)}function JS(n,t,e,i,s,r){const{geometry:o,_indirectBuffer:a}=n;for(let c=i,l=i+s;c<l;c++)Cc(o,t,e,c,r)}function QS(n,t,e,i,s){const{geometry:r,_indirectBuffer:o}=n;let a=1/0,c=null;for(let l=i,u=i+s;l<u;l++){let f;f=Cc(r,t,e,l),f&&f.distance<a&&(c=f,a=f.distance)}return c}function tE(n,t,e,i,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=n,f=t+n;u<f;u++){let h;if(h=u,Oe(o,h*3,c,l),o.needsUpdate=!0,i(o,h,s,r))return!0}return!1}function eE(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){const v=h*2;if(a[v+15]===Pc){const d=o[h+6],x=a[v+14];let _=1/0,y=1/0,E=1/0,w=-1/0,b=-1/0,L=-1/0;for(let S=3*d,M=3*(d+x);S<M;S++){let R=i[S];const D=s.getX(R),O=s.getY(R),I=s.getZ(R);D<_&&(_=D),D>w&&(w=D),O<y&&(y=O),O>b&&(b=O),I<E&&(E=I),I>L&&(L=I)}return c[h+0]!==_||c[h+1]!==y||c[h+2]!==E||c[h+3]!==w||c[h+4]!==b||c[h+5]!==L?(c[h+0]=_,c[h+1]=y,c[h+2]=E,c[h+3]=w,c[h+4]=b,c[h+5]=L,!0):!1}else{const d=h+8,x=o[h+6],_=d+p,y=x+p;let E=g,w=!1,b=!1;t?E||(w=t.has(_),b=t.has(y),E=!w&&!b):(w=!0,b=!0);const L=E||w,S=E||b;let M=!1;L&&(M=f(d,p,E));let R=!1;S&&(R=f(x,p,E));const D=M||R;if(D)for(let O=0;O<3;O++){const I=d+O,U=x+O,k=c[I],X=c[I+3],Z=c[U],V=c[U+3];c[h+O]=k<Z?k:Z,c[h+O+3]=X>V?X:V}return D}}}const vd=new de;function ns(n,t,e,i){return Ee(n,t,vd),e.intersectBox(vd,i)}function nE(n,t,e,i,s,r){const{geometry:o,_indirectBuffer:a}=n;for(let c=i,l=i+s;c<l;c++){let u=a?a[c]:c;Cc(o,t,e,u,r)}}function iE(n,t,e,i,s){const{geometry:r,_indirectBuffer:o}=n;let a=1/0,c=null;for(let l=i,u=i+s;l<u;l++){let f;f=Cc(r,t,e,o?o[l]:l),f&&f.distance<a&&(c=f,a=f.distance)}return c}function sE(n,t,e,i,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=n,f=t+n;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Oe(o,h*3,c,l),o.needsUpdate=!0,i(o,h,s,r))return!0}return!1}const yd=new T;function rE(n,t,e,i,s){ye.setBuffer(n._roots[t]),_u(0,n,e,i,s),ye.clearBuffer()}function _u(n,t,e,i,s){const{float32Array:r,uint16Array:o,uint32Array:a}=ye,c=n*2;if(pn(c,o)){const u=Mn(n,a),f=In(c,o);JS(t,e,i,u,f,s)}else{const u=Dn(n);ns(u,r,i,yd)&&_u(u,t,e,i,s);const f=Un(n,a);ns(f,r,i,yd)&&_u(f,t,e,i,s)}}const Md=new T,oE=["x","y","z"];function aE(n,t,e,i){ye.setBuffer(n._roots[t]);const s=xu(0,n,e,i);return ye.clearBuffer(),s}function xu(n,t,e,i){const{float32Array:s,uint16Array:r,uint32Array:o}=ye;let a=n*2;if(pn(a,r)){const l=Mn(n,o),u=In(a,r);return QS(t,e,i,l,u)}else{const l=nm(n,o),u=oE[l],h=i.direction[u]>=0;let p,g;h?(p=Dn(n),g=Un(n,o)):(p=Un(n,o),g=Dn(n));const m=ns(p,s,i,Md)?xu(p,t,e,i):null;if(m){const _=m.point[u];if(h?_<=s[g+l]:_>=s[g+l+3])return m}const x=ns(g,s,i,Md)?xu(g,t,e,i):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const Da=new de,cr=new zn,lr=new zn,Jr=new se,Sd=new hn,Ua=new hn;function cE(n,t,e,i){ye.setBuffer(n._roots[t]);const s=vu(0,n,e,i);return ye.clearBuffer(),s}function vu(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ye;let c=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Sd.set(e.boundingBox.min,e.boundingBox.max,i),s=Sd),pn(c,o)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,g=e.attributes.position,v=Mn(n,a),m=In(c,o);if(Jr.copy(i).invert(),e.boundsTree)return Ee(n,r,Ua),Ua.matrix.copy(Jr),Ua.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Ua.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let _=v*3,y=(m+v)*3;_<y;_+=3)if(Oe(lr,_,f,h),lr.needsUpdate=!0,x.intersectsTriangle(lr))return!0;return!1}});for(let d=v*3,x=(m+v)*3;d<x;d+=3){Oe(cr,d,f,h),cr.a.applyMatrix4(Jr),cr.b.applyMatrix4(Jr),cr.c.applyMatrix4(Jr),cr.needsUpdate=!0;for(let _=0,y=p.count;_<y;_+=3)if(Oe(lr,_,p,g),lr.needsUpdate=!0,cr.intersectsTriangle(lr))return!0}}else{const u=n+8,f=a[n+6];return Ee(u,r,Da),!!(s.intersectsBox(Da)&&vu(u,t,e,i,s)||(Ee(f,r,Da),s.intersectsBox(Da)&&vu(f,t,e,i,s)))}}const Fa=new se,Ll=new hn,Qr=new hn,lE=new T,uE=new T,hE=new T,fE=new T;function dE(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ll.set(t.boundingBox.min,t.boundingBox.max,e),Ll.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=Fn.getPrimitive(),p=Fn.getPrimitive();let g=lE,v=uE,m=null,d=null;s&&(m=hE,d=fE);let x=1/0,_=null,y=null;return Fa.copy(e).invert(),Qr.matrix.copy(Fa),n.shapecast({boundsTraverseOrder:E=>Ll.distanceToBox(E),intersectsBounds:(E,w,b)=>b<x&&b<o?(w&&(Qr.min.copy(E.min),Qr.max.copy(E.max),Qr.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:L=>Qr.distanceToBox(L),intersectsBounds:(L,S,M)=>M<x&&M<o,intersectsRange:(L,S)=>{for(let M=L,R=L+S;M<R;M++){Oe(p,3*M,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let D=E,O=E+w;D<O;D++){Oe(h,3*D,l,c),h.needsUpdate=!0;const I=h.distanceToTriangle(p,g,m);if(I<x&&(v.copy(g),d&&d.copy(m),x=I,_=D,y=M),I<r)return!0}}}});{const b=Hr(t);for(let L=0,S=b;L<S;L++){Oe(p,3*L,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let M=E,R=E+w;M<R;M++){Oe(h,3*M,l,c),h.needsUpdate=!0;const D=h.distanceToTriangle(p,g,m);if(D<x&&(v.copy(g),d&&d.copy(m),x=D,_=M,y=L),D<r)return!0}}}}}),Fn.releasePrimitive(h),Fn.releasePrimitive(p),x===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=x,i.faceIndex=_,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(Fa),v.applyMatrix4(Fa),s.distance=v.sub(s.point).length(),s.faceIndex=y),i)}function pE(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){const v=h*2;if(a[v+15]===Pc){const d=o[h+6],x=a[v+14];let _=1/0,y=1/0,E=1/0,w=-1/0,b=-1/0,L=-1/0;for(let S=d,M=d+x;S<M;S++){const R=3*n.resolveTriangleIndex(S);for(let D=0;D<3;D++){let O=R+D;O=i?i[O]:O;const I=s.getX(O),U=s.getY(O),k=s.getZ(O);I<_&&(_=I),I>w&&(w=I),U<y&&(y=U),U>b&&(b=U),k<E&&(E=k),k>L&&(L=k)}}return c[h+0]!==_||c[h+1]!==y||c[h+2]!==E||c[h+3]!==w||c[h+4]!==b||c[h+5]!==L?(c[h+0]=_,c[h+1]=y,c[h+2]=E,c[h+3]=w,c[h+4]=b,c[h+5]=L,!0):!1}else{const d=h+8,x=o[h+6],_=d+p,y=x+p;let E=g,w=!1,b=!1;t?E||(w=t.has(_),b=t.has(y),E=!w&&!b):(w=!0,b=!0);const L=E||w,S=E||b;let M=!1;L&&(M=f(d,p,E));let R=!1;S&&(R=f(x,p,E));const D=M||R;if(D)for(let O=0;O<3;O++){const I=d+O,U=x+O,k=c[I],X=c[I+3],Z=c[U],V=c[U+3];c[h+O]=k<Z?k:Z,c[h+O+3]=X>V?X:V}return D}}}const Ed=new T;function mE(n,t,e,i,s){ye.setBuffer(n._roots[t]),yu(0,n,e,i,s),ye.clearBuffer()}function yu(n,t,e,i,s){const{float32Array:r,uint16Array:o,uint32Array:a}=ye,c=n*2;if(pn(c,o)){const u=Mn(n,a),f=In(c,o);nE(t,e,i,u,f,s)}else{const u=Dn(n);ns(u,r,i,Ed)&&yu(u,t,e,i,s);const f=Un(n,a);ns(f,r,i,Ed)&&yu(f,t,e,i,s)}}const bd=new T,gE=["x","y","z"];function _E(n,t,e,i){ye.setBuffer(n._roots[t]);const s=Mu(0,n,e,i);return ye.clearBuffer(),s}function Mu(n,t,e,i){const{float32Array:s,uint16Array:r,uint32Array:o}=ye;let a=n*2;if(pn(a,r)){const l=Mn(n,o),u=In(a,r);return iE(t,e,i,l,u)}else{const l=nm(n,o),u=gE[l],h=i.direction[u]>=0;let p,g;h?(p=Dn(n),g=Un(n,o)):(p=Un(n,o),g=Dn(n));const m=ns(p,s,i,bd)?Mu(p,t,e,i):null;if(m){const _=m.point[u];if(h?_<=s[g+l]:_>=s[g+l+3])return m}const x=ns(g,s,i,bd)?Mu(g,t,e,i):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const Na=new de,ur=new zn,hr=new zn,to=new se,wd=new hn,Oa=new hn;function xE(n,t,e,i){ye.setBuffer(n._roots[t]);const s=Su(0,n,e,i);return ye.clearBuffer(),s}function Su(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ye;let c=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),wd.set(e.boundingBox.min,e.boundingBox.max,i),s=wd),pn(c,o)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,g=e.attributes.position,v=Mn(n,a),m=In(c,o);if(to.copy(i).invert(),e.boundsTree)return Ee(n,r,Oa),Oa.matrix.copy(to),Oa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Oa.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let _=v,y=m+v;_<y;_++)if(Oe(hr,3*t.resolveTriangleIndex(_),f,h),hr.needsUpdate=!0,x.intersectsTriangle(hr))return!0;return!1}});for(let d=v,x=m+v;d<x;d++){const _=t.resolveTriangleIndex(d);Oe(ur,3*_,f,h),ur.a.applyMatrix4(to),ur.b.applyMatrix4(to),ur.c.applyMatrix4(to),ur.needsUpdate=!0;for(let y=0,E=p.count;y<E;y+=3)if(Oe(hr,y,p,g),hr.needsUpdate=!0,ur.intersectsTriangle(hr))return!0}}else{const u=n+8,f=a[n+6];return Ee(u,r,Na),!!(s.intersectsBox(Na)&&Su(u,t,e,i,s)||(Ee(f,r,Na),s.intersectsBox(Na)&&Su(f,t,e,i,s)))}}const Ba=new se,Il=new hn,eo=new hn,vE=new T,yE=new T,ME=new T,SE=new T;function EE(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Il.set(t.boundingBox.min,t.boundingBox.max,e),Il.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=Fn.getPrimitive(),p=Fn.getPrimitive();let g=vE,v=yE,m=null,d=null;s&&(m=ME,d=SE);let x=1/0,_=null,y=null;return Ba.copy(e).invert(),eo.matrix.copy(Ba),n.shapecast({boundsTraverseOrder:E=>Il.distanceToBox(E),intersectsBounds:(E,w,b)=>b<x&&b<o?(w&&(eo.min.copy(E.min),eo.max.copy(E.max),eo.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(t.boundsTree){const b=t.boundsTree;return b.shapecast({boundsTraverseOrder:L=>eo.distanceToBox(L),intersectsBounds:(L,S,M)=>M<x&&M<o,intersectsRange:(L,S)=>{for(let M=L,R=L+S;M<R;M++){const D=b.resolveTriangleIndex(M);Oe(p,3*D,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let O=E,I=E+w;O<I;O++){const U=n.resolveTriangleIndex(O);Oe(h,3*U,l,c),h.needsUpdate=!0;const k=h.distanceToTriangle(p,g,m);if(k<x&&(v.copy(g),d&&d.copy(m),x=k,_=O,y=M),k<r)return!0}}}})}else{const b=Hr(t);for(let L=0,S=b;L<S;L++){Oe(p,3*L,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let M=E,R=E+w;M<R;M++){const D=n.resolveTriangleIndex(M);Oe(h,3*D,l,c),h.needsUpdate=!0;const O=h.distanceToTriangle(p,g,m);if(O<x&&(v.copy(g),d&&d.copy(m),x=O,_=M,y=L),O<r)return!0}}}}}),Fn.releasePrimitive(h),Fn.releasePrimitive(p),x===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=x,i.faceIndex=_,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(Ba),v.applyMatrix4(Ba),s.distance=v.sub(s.point).length(),s.faceIndex=y),i)}function bE(){return typeof SharedArrayBuffer<"u"}const go=new ye.constructor,cc=new ye.constructor,Vi=new Xu(()=>new de),fr=new de,dr=new de,Dl=new de,Ul=new de;let Fl=!1;function wE(n,t,e,i){if(Fl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Fl=!0;const s=n._roots,r=t._roots;let o,a=0,c=0;const l=new se().copy(e).invert();for(let u=0,f=s.length;u<f;u++){go.setBuffer(s[u]),c=0;const h=Vi.getPrimitive();Ee(0,go.float32Array,h),h.applyMatrix4(l);for(let p=0,g=r.length;p<g&&(cc.setBuffer(r[u]),o=Wn(0,0,e,l,i,a,c,0,0,h),cc.clearBuffer(),c+=r[p].length,!o);p++);if(Vi.releasePrimitive(h),go.clearBuffer(),a+=s[u].length,o)break}return Fl=!1,o}function Wn(n,t,e,i,s,r=0,o=0,a=0,c=0,l=null,u=!1){let f,h;u?(f=cc,h=go):(f=go,h=cc);const p=f.float32Array,g=f.uint32Array,v=f.uint16Array,m=h.float32Array,d=h.uint32Array,x=h.uint16Array,_=n*2,y=t*2,E=pn(_,v),w=pn(y,x);let b=!1;if(w&&E)u?b=s(Mn(t,d),In(t*2,x),Mn(n,g),In(n*2,v),c,o+t,a,r+n):b=s(Mn(n,g),In(n*2,v),Mn(t,d),In(t*2,x),a,r+n,c,o+t);else if(w){const L=Vi.getPrimitive();Ee(t,m,L),L.applyMatrix4(e);const S=Dn(n),M=Un(n,g);Ee(S,p,fr),Ee(M,p,dr);const R=L.intersectsBox(fr),D=L.intersectsBox(dr);b=R&&Wn(t,S,i,e,s,o,r,c,a+1,L,!u)||D&&Wn(t,M,i,e,s,o,r,c,a+1,L,!u),Vi.releasePrimitive(L)}else{const L=Dn(t),S=Un(t,d);Ee(L,m,Dl),Ee(S,m,Ul);const M=l.intersectsBox(Dl),R=l.intersectsBox(Ul);if(M&&R)b=Wn(n,L,e,i,s,r,o,a,c+1,l,u)||Wn(n,S,e,i,s,r,o,a,c+1,l,u);else if(M)if(E)b=Wn(n,L,e,i,s,r,o,a,c+1,l,u);else{const D=Vi.getPrimitive();D.copy(Dl).applyMatrix4(e);const O=Dn(n),I=Un(n,g);Ee(O,p,fr),Ee(I,p,dr);const U=D.intersectsBox(fr),k=D.intersectsBox(dr);b=U&&Wn(L,O,i,e,s,o,r,c,a+1,D,!u)||k&&Wn(L,I,i,e,s,o,r,c,a+1,D,!u),Vi.releasePrimitive(D)}else if(R)if(E)b=Wn(n,S,e,i,s,r,o,a,c+1,l,u);else{const D=Vi.getPrimitive();D.copy(Ul).applyMatrix4(e);const O=Dn(n),I=Un(n,g);Ee(O,p,fr),Ee(I,p,dr);const U=D.intersectsBox(fr),k=D.intersectsBox(dr);b=U&&Wn(S,O,i,e,s,o,r,c,a+1,D,!u)||k&&Wn(S,I,i,e,s,o,r,c,a+1,D,!u),Vi.releasePrimitive(D)}}return b}const za=new hn,Td=new de,TE={strategy:Qp,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class qu{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,s=t._roots,r=t._indirectBuffer,o=i.getIndex();let a;return e.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:s,index:o.array,indirectBuffer:r},a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:s,roots:r,indirectBuffer:o}=t,a=new qu(e,{...i,[Tl]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const c=e.getIndex();if(c===null){const l=new Je(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...TE,[Tl]:!1},e),e.useSharedArrayBuffer&&!bE())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Tl]||(GS(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new de)));const{_indirectBuffer:i}=this;this.resolveTriangleIndex=e.indirect?s=>i[s]:s=>s}refit(t=null){return(this.indirect?pE:eE)(this,t)}traverse(t,e=0){const i=this._roots[e],s=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,c=0){const l=a*2,u=r[l+15]===Pc;if(u){const f=s[a+6],h=r[l+14];t(c,u,new Float32Array(i,a*4,6),f,h)}else{const f=a+mo/4,h=s[a+6],p=s[a+7];t(c,u,new Float32Array(i,a*4,6),p)||(o(f,c+1),o(h,c+1))}}}raycast(t,e=ri){const i=this._roots,s=this.geometry,r=[],o=e.isMaterial,a=Array.isArray(e),c=s.groups,l=o?e.side:e,u=this.indirect?mE:rE;for(let f=0,h=i.length;f<h;f++){const p=a?e[c[f].materialIndex].side:l,g=r.length;if(u(this,f,p,t,r),a){const v=c[f].materialIndex;for(let m=g,d=r.length;m<d;m++)r[m].face.materialIndex=v}}return r}raycastFirst(t,e=ri){const i=this._roots,s=this.geometry,r=e.isMaterial,o=Array.isArray(e);let a=null;const c=s.groups,l=r?e.side:e,u=this.indirect?_E:aE;for(let f=0,h=i.length;f<h;f++){const p=o?e[c[f].materialIndex].side:l,g=u(this,f,p,t);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=c[f].materialIndex))}return a}intersectsGeometry(t,e){let i=!1;const s=this._roots,r=this.indirect?xE:cE;for(let o=0,a=s.length;o<a&&(i=r(this,o,t,e),!i);o++);return i}shapecast(t){const e=Fn.getPrimitive(),i=this.indirect?sE:tE;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const f=o;o=(h,p,g,v,m)=>f(h,p,g,v,m)?!0:i(h,p,this,a,g,v,e)}else o||(a?o=(f,h,p,g)=>i(f,h,this,a,p,g,e):o=(f,h,p)=>p);let c=!1,l=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const p=u[f];if(c=jS(this,f,r,o,s,l),c)break;l+=p.byteLength}return Fn.releasePrimitive(e),c}bvhcast(t,e,i){let{intersectsRanges:s,intersectsTriangles:r}=i;const o=Fn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const v=this.resolveTriangleIndex(g);Oe(o,v*3,a,c)}:g=>{Oe(o,g*3,a,c)},u=Fn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,p=t.indirect?g=>{const v=t.resolveTriangleIndex(g);Oe(u,v*3,f,h)}:g=>{Oe(u,g*3,f,h)};if(r){const g=(v,m,d,x,_,y,E,w)=>{for(let b=d,L=d+x;b<L;b++){p(b),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=v,M=v+m;S<M;S++)if(l(S),o.needsUpdate=!0,r(o,u,S,b,_,y,E,w))return!0}return!1};if(s){const v=s;s=function(m,d,x,_,y,E,w,b){return v(m,d,x,_,y,E,w,b)?!0:g(m,d,x,_,y,E,w,b)}}else s=g}return wE(this,t,e,s)}intersectsBox(t,e){return za.set(t.min,t.max,e),za.needsUpdate=!0,this.shapecast({intersectsBounds:i=>za.intersectsBox(i),intersectsTriangle:i=>za.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},s={},r=0,o=1/0){return(this.indirect?EE:dE)(this,t,e,i,s,r,o)}closestPointToPoint(t,e={},i=0,s=1/0){return ZS(this,t,e,i,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{Ee(0,new Float32Array(i),Td),t.union(Td)}),t}}const rm=1e-6,AE=rm*.5,om=Math.pow(10,-Math.log10(rm)),PE=AE*om;function ii(n){return~~(n*om+PE)}function CE(n){return`${ii(n.x)},${ii(n.y)}`}function Ad(n){return`${ii(n.x)},${ii(n.y)},${ii(n.z)}`}function RE(n){return`${ii(n.x)},${ii(n.y)},${ii(n.z)},${ii(n.w)}`}function LE(n,t,e){e.direction.subVectors(t,n).normalize();const i=n.dot(e.direction);return e.origin.copy(n).addScaledVector(e.direction,-i),e}function am(){return typeof SharedArrayBuffer<"u"}function IE(n){if(n.buffer instanceof SharedArrayBuffer)return n;const t=n.constructor,e=n.buffer,i=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(i).set(s,0),new t(i)}function DE(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function UE(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=DE(e,i);n.setIndex(new Je(s,1));for(let r=0;r<e;r++)s[r]=r}}function FE(n){return n.index?n.index.count:n.attributes.position.count}function Yu(n){return FE(n)/3}const NE=1e-8,OE=new T;function BE(n){return~~(n/3)}function zE(n){return n%3}function Pd(n,t){return n.start-t.start}function Cd(n,t){return OE.subVectors(t,n.origin).dot(n.direction)}function kE(n,t,e,i=NE){n.sort(Pd),t.sort(Pd);for(let a=0;a<n.length;a++){const c=n[a];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||n.splice(a+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const f=c.end;c.end=u.start,u.start=f}else if(c.start>=u.start&&c.end>=u.end){const f=u.end;u.end=c.start,c.start=f}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),o(u)&&(t.splice(l,1),l--),o(c)){n.splice(a,1),a--;break}}}s(n),s(t);function s(a){for(let c=0;c<a.length;c++)o(a[c])&&(a.splice(c,1),c--)}function r(a,c){return Math.abs(c-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const Rd=1e-5,Ld=1e-4;class HE{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,i=t.clone();i.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(o(u,t)&&o(u,i))continue;const f=a(u,t),h=a(u,i),p=Math.min(f,h);p<s&&(s=p,r=u)}return r;function o(c,l){const u=c.origin.distanceTo(l.origin)>Rd;return c.direction.angleTo(l.direction)>Ld||u}function a(c,l){const u=c.origin.distanceTo(l.origin),f=c.direction.angleTo(l.direction);return u/Rd+f/Ld}}}const Nl=new T,Ol=new T,ka=new Or;function GE(n,t,e){const i=n.attributes,s=n.index,r=i.position,o=new Map,a=new Map,c=Array.from(t),l=new HE;for(let u=0,f=c.length;u<f;u++){const h=c[u],p=BE(h),g=zE(h);let v=3*p+g,m=3*p+(g+1)%3;s&&(v=s.getX(v),m=s.getX(m)),Nl.fromBufferAttribute(r,v),Ol.fromBufferAttribute(r,m),LE(Nl,Ol,ka);let d,x=l.findClosestRay(ka);x===null&&(x=ka.clone(),l.addRay(x)),a.has(x)||a.set(x,{forward:[],reverse:[],ray:x}),d=a.get(x);let _=Cd(x,Nl),y=Cd(x,Ol);_>y&&([_,y]=[y,_]),ka.direction.dot(x.direction)<0?d.reverse.push({start:_,end:y,index:h}):d.forward.push({start:_,end:y,index:h})}return a.forEach(({forward:u,reverse:f},h)=>{kE(u,f,o,e),u.length===0&&f.length===0&&a.delete(h)}),{disjointConnectivityMap:o,fragmentMap:a}}const VE=new Q,Bl=new T,WE=new ve,zl=["","",""];class XE{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:i,matchDisjointEdges:s,degenerateEpsilon:r}=this,o=e?_:x,a=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,f=c.position;let h=Yu(t);const p=h;let g=0;i&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(h=~~(t.drawRange.count/3)));let v=this.data;(!v||v.length<3*p)&&(v=new Int32Array(3*p)),v.fill(-1);let m=0,d=new Set;for(let y=g,E=h*3+g;y<E;y+=3){const w=y;for(let b=0;b<3;b++){let L=w+b;u&&(L=u.getX(L)),zl[b]=o(L)}for(let b=0;b<3;b++){const L=(b+1)%3,S=zl[b],M=zl[L],R=`${M}_${S}`;if(a.has(R)){const D=w+b,O=a.get(R);v[D]=O,v[O]=D,a.delete(R),m+=2,d.delete(O)}else{const D=`${S}_${M}`,O=w+b;a.set(D,O),d.add(O)}}}if(s){const{fragmentMap:y,disjointConnectivityMap:E}=GE(t,d,r);d.clear(),y.forEach(({forward:w,reverse:b})=>{w.forEach(({index:L})=>d.add(L)),b.forEach(({index:L})=>d.add(L))}),this.unmatchedDisjointEdges=y,this.disjointConnections=E,m=h*3-d.size}this.matchedEdges=m,this.unmatchedEdges=d.size,this.data=v;function x(y){return Bl.fromBufferAttribute(f,y),Ad(Bl)}function _(y){let E="";for(let w=0,b=l.length;w<b;w++){const L=c[l[w]];let S;switch(L.itemSize){case 1:S=ii(L.getX(y));break;case 2:S=CE(VE.fromBufferAttribute(L,y));break;case 3:S=Ad(Bl.fromBufferAttribute(L,y));break;case 4:S=RE(WE.fromBufferAttribute(L,y));break}E!==""&&(E+="|"),E+=S}return E}}}class lc extends pt{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new se,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,i=t.elements,s=e.elements;for(let r=0;r<16;r++)if(i[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,i=am();if(i)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=IE(r.array)}if(t.boundsTree||(UE(t,{useSharedArrayBuffer:i}),t.boundsTree=new qu(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:i})),t.halfEdges||(t.halfEdges=new XE(t)),!t.groupIndices){const s=Yu(t),r=new Uint16Array(s),o=t.groups;for(let a=0,c=o.length;a<c;a++){const{start:l,count:u}=o[a];for(let f=l/3,h=(l+u)/3;f<h;f++)r[f]=a}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const qE=1e-14,kl=new T,Id=new T,Dd=new T;function Xi(n,t=qE){kl.subVectors(n.b,n.a),Id.subVectors(n.c,n.a),Dd.subVectors(n.b,n.c);const e=kl.angleTo(Id),i=kl.angleTo(Dd),s=Math.PI-e-i;return Math.abs(e)<t||Math.abs(i)<t||Math.abs(s)<t||n.a.distanceToSquared(n.b)<t||n.a.distanceToSquared(n.c)<t||n.b.distanceToSquared(n.c)<t}const Hl=1e-10,no=1e-10,YE=1e-10,mi=new On,Ie=new On,gi=new T,Gl=new T,Ud=new T,Ha=new fn,Vl=new zn;class jE{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new xe),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class ZE{constructor(){this.trianglePool=new jE,this.triangles=[],this.normal=new T,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:i,normal:s}=this;if(Array.isArray(t))for(let r=0,o=t.length;r<o;r++){const a=t[r];if(r===0)a.getNormal(s);else if(Math.abs(1-a.getNormal(gi).dot(s))>Hl)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=i.getTriangle();c.copy(a),e.push(c)}else{t.getNormal(s);const r=i.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:i}=this;if(t.getNormal(Gl).normalize(),Math.abs(1-Math.abs(Gl.dot(e)))<YE){this.coplanarTriangleUsed=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const o=(r+1)%3,a=s[r],c=s[o];gi.subVectors(c,a).normalize(),Ud.crossVectors(Gl,gi),Ha.setFromNormalAndCoplanarPoint(Ud,a),this.splitByPlane(Ha,t)}}else t.getPlane(Ha),this.splitByPlane(Ha,t)}splitByPlane(t,e){const{triangles:i,trianglePool:s}=this;Vl.copy(e),Vl.needsUpdate=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];if(!Vl.intersectsTriangle(a,mi,!0))continue;const{a:c,b:l,c:u}=a;let f=0,h=-1,p=!1,g=[],v=[];const m=[c,l,u];for(let d=0;d<3;d++){const x=(d+1)%3;mi.start.copy(m[d]),mi.end.copy(m[x]);const _=t.distanceToPoint(mi.start),y=t.distanceToPoint(mi.end);if(Math.abs(_)<no&&Math.abs(y)<no){p=!0;break}if(_>0?g.push(d):v.push(d),Math.abs(_)<no)continue;let E=!!t.intersectLine(mi,gi);!E&&Math.abs(y)<no&&(gi.copy(mi.end),E=!0),E&&!(gi.distanceTo(mi.start)<Hl)&&(gi.distanceTo(mi.end)<Hl&&(h=d),f===0?Ie.start.copy(gi):Ie.end.copy(gi),f++)}if(!p&&f===2&&Ie.distance()>no)if(h!==-1){h=(h+1)%3;let d=0;d===h&&(d=(d+1)%3);let x=d+1;x===h&&(x=(x+1)%3);const _=s.getTriangle();_.a.copy(m[x]),_.b.copy(Ie.end),_.c.copy(Ie.start),Xi(_)||i.push(_),a.a.copy(m[d]),a.b.copy(Ie.start),a.c.copy(Ie.end),Xi(a)&&(i.splice(r,1),r--,o--)}else{const d=g.length>=2?v[0]:g[0];if(d===0){let w=Ie.start;Ie.start=Ie.end,Ie.end=w}const x=(d+1)%3,_=(d+2)%3,y=s.getTriangle(),E=s.getTriangle();m[x].distanceToSquared(Ie.start)<m[_].distanceToSquared(Ie.end)?(y.a.copy(m[x]),y.b.copy(Ie.start),y.c.copy(Ie.end),E.a.copy(m[x]),E.b.copy(m[_]),E.c.copy(Ie.start)):(y.a.copy(m[_]),y.b.copy(Ie.start),y.c.copy(Ie.end),E.a.copy(m[x]),E.b.copy(m[_]),E.c.copy(Ie.end)),a.a.copy(m[d]),a.b.copy(Ie.end),a.c.copy(Ie.start),Xi(y)||i.push(y),Xi(E)||i.push(E),Xi(a)&&(i.splice(r,1),r--,o--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function KE(n){return n=~~n,n+4-n%4}class Fd{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,i=am()?SharedArrayBuffer:ArrayBuffer,s=new e(new i(KE(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:i}=this;i+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[i+s]=t[s];this.length+=t.length}clear(){this.length=0}}class $E{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:i}=this;let s=0;for(let r=0;r<e;r++){const o=i[r];s+=o[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const i=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in i){const o=i[r],a=new Fd(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,s[r]=a}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:i}=this;if(!i[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,i,s){const{groupAttributes:r}=this,a=r[0][t];if(a){if(a.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=i,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new Fd(e);u.itemSize=i,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const i in e)e[i].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class Nd{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:i,ids:s}=this;i[t]||(i[t]=[],s.push(t)),i[t].push(e)}}const uc=0,ju=1,JE=2,QE=3,tb=4,cm=5,lm=6,An=new Or,Od=new se,nn=new xe,_i=new T,Bd=new ve,zd=new ve,kd=new ve,Wl=new ve,Ga=new ve,Va=new ve,Hd=new On,Xl=new T,ql=1e-8,eb=1e-15,Es=-1,bs=1,Ka=-2,$a=2,_o=0,ps=1,Zu=2,nb=1e-14;let Ja=null;function Gd(n){Ja=n}function um(n,t){n.getMidpoint(An.origin),n.getNormal(An.direction);const e=t.raycastFirst(An,an);return!!(e&&An.direction.dot(e.face.normal)>0)?Es:bs}function ib(n,t){function e(){return Math.random()-.5}n.getNormal(Xl),An.direction.copy(Xl),n.getMidpoint(An.origin);const i=3;let s=0,r=1/0;for(let o=0;o<i;o++){An.direction.x+=e()*ql,An.direction.y+=e()*ql,An.direction.z+=e()*ql,An.direction.multiplyScalar(-1);const a=t.raycastFirst(An,an);if(!!(a&&An.direction.dot(a.face.normal)>0)&&s++,a!==null&&(r=Math.min(r,a.distance)),r<=eb)return a.face.normal.dot(Xl)>0?$a:Ka;if(s/i>.5||(o-s+1)/i>.5)break}return s/i>.5?Es:bs}function sb(n,t){const e=new Nd,i=new Nd;return Od.copy(n.matrixWorld).invert().multiply(t.matrixWorld),n.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Od,{intersectsTriangles(s,r,o,a){if(!Xi(s)&&!Xi(r)){let c=s.intersectsTriangle(r,Hd,!0);if(!c){const l=s.plane,u=r.plane,f=l.normal,h=u.normal;f.dot(h)===1&&Math.abs(l.constant-u.constant)<nb&&(c=!0)}if(c){let l=n.geometry.boundsTree.resolveTriangleIndex(o),u=t.geometry.boundsTree.resolveTriangleIndex(a);e.add(l,u),i.add(u,l),Ja&&(Ja.addEdge(Hd),Ja.addIntersectingTriangles(o,s,a,r))}}return!1}}),{aIntersections:e,bIntersections:i}}function rb(n,t,e,i,s,r,o=!1){const a=e.attributes,c=e.index,l=n*3,u=c.getX(l+0),f=c.getX(l+1),h=c.getX(l+2);for(const p in r){const g=a[p],v=r[p];if(!(p in a))throw new Error(`CSG Operations: Attribute ${p} not available on geometry.`);const m=g.itemSize;p==="position"?(nn.a.fromBufferAttribute(g,u).applyMatrix4(i),nn.b.fromBufferAttribute(g,f).applyMatrix4(i),nn.c.fromBufferAttribute(g,h).applyMatrix4(i),Yl(nn.a,nn.b,nn.c,t,3,v,o)):p==="normal"?(nn.a.fromBufferAttribute(g,u).applyNormalMatrix(s),nn.b.fromBufferAttribute(g,f).applyNormalMatrix(s),nn.c.fromBufferAttribute(g,h).applyNormalMatrix(s),o&&(nn.a.multiplyScalar(-1),nn.b.multiplyScalar(-1),nn.c.multiplyScalar(-1)),Yl(nn.a,nn.b,nn.c,t,3,v,o,!0)):(Bd.fromBufferAttribute(g,u),zd.fromBufferAttribute(g,f),kd.fromBufferAttribute(g,h),Yl(Bd,zd,kd,t,m,v,o))}}function ob(n,t,e,i,s,r,o,a=!1){jl(n,i,s,r,o,a),jl(a?e:t,i,s,r,o,a),jl(a?t:e,i,s,r,o,a)}function hm(n,t,e=!1){switch(n){case uc:if(t===bs||t===$a&&!e)return ps;break;case ju:if(e){if(t===Es)return _o}else if(t===bs||t===Ka)return ps;break;case JE:if(e){if(t===bs||t===Ka)return ps}else if(t===Es)return _o;break;case tb:if(t===Es)return _o;if(t===bs)return ps;break;case QE:if(t===Es||t===$a&&!e)return ps;break;case cm:if(!e&&(t===bs||t===Ka))return ps;break;case lm:if(!e&&(t===Es||t===$a))return ps;break;default:throw new Error(`Unrecognized CSG operation enum "${n}".`)}return Zu}function Yl(n,t,e,i,s,r,o=!1,a=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};Wl.set(0,0,0,0).addScaledVector(n,i.a.x).addScaledVector(t,i.a.y).addScaledVector(e,i.a.z),Ga.set(0,0,0,0).addScaledVector(n,i.b.x).addScaledVector(t,i.b.y).addScaledVector(e,i.b.z),Va.set(0,0,0,0).addScaledVector(n,i.c.x).addScaledVector(t,i.c.y).addScaledVector(e,i.c.z),a&&(Wl.normalize(),Ga.normalize(),Va.normalize()),c(Wl),o?(c(Va),c(Ga)):(c(Ga),c(Va))}function jl(n,t,e,i,s,r=!1){for(const o in s){const a=t[o],c=s[o];if(!(o in t))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const l=a.itemSize;o==="position"?(_i.fromBufferAttribute(a,n).applyMatrix4(e),c.push(_i.x,_i.y,_i.z)):o==="normal"?(_i.fromBufferAttribute(a,n).applyNormalMatrix(i),r&&_i.multiplyScalar(-1),c.push(_i.x,_i.y,_i.z)):(c.push(a.getX(n)),l>1&&c.push(a.getY(n)),l>2&&c.push(a.getZ(n)),l>3&&c.push(a.getW(n)))}}class ab{constructor(t){this.triangle=new xe().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new xe().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const i in e)t.push(e[i]);return t}}class Vd{constructor(){this.data={}}addTriangleIntersection(t,e,i,s){const{data:r}=this;r[t]||(r[t]=new ab(e)),r[t].addTriangle(i,s)}getTrianglesAsArray(t=null){const{data:e}=this,i=[];if(t!==null)t in e&&i.push(e[t].triangle);else for(const s in e)i.push(e[s].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(t=null,e=null){const{data:i}=this,s=new Set,r=[],o=a=>{if(i[a])if(e!==null)i[a].intersects[e]&&r.push(i[a].intersects[e]);else{const c=i[a].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)o(t);else for(const a in i)o(a);return r}reset(){this.data={}}}class cb{constructor(){this.enabled=!1,this.triangleIntersectsA=new Vd,this.triangleIntersectsB=new Vd,this.intersectionEdges=[]}addIntersectingTriangles(t,e,i,s){const{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(t,e,i,s),o.addTriangleIntersection(i,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Gd(this))}complete(){this.enabled&&Gd(null)}}const Ki=new se,hc=new Kt,ms=new xe,Wa=new xe,zi=new xe,Xa=new xe,Zn=[],Rs=[];function lb(n){for(const t of n)return t}function ub(n,t,e,i,s,r={}){const{useGroups:o=!0}=r,{aIntersections:a,bIntersections:c}=sb(n,t),l=[];let u=null,f;return f=o?0:-1,Wd(n,t,a,e,!1,i,s,f),Xd(n,t,a,e,!1,s,f),e.findIndex(p=>p!==lm&&p!==cm)!==-1&&(f=o?n.geometry.groups.length||1:-1,Wd(t,n,c,e,!0,i,s,f),Xd(t,n,c,e,!0,s,f)),Zn.length=0,Rs.length=0,{groups:l,materials:u}}function Wd(n,t,e,i,s,r,o,a=0){const c=n.matrixWorld.determinant()<0;Ki.copy(t.matrixWorld).invert().multiply(n.matrixWorld),hc.getNormalMatrix(n.matrixWorld).multiplyScalar(c?-1:1);const l=n.geometry.groupIndices,u=n.geometry.index,f=n.geometry.attributes.position,h=t.geometry.boundsTree,p=t.geometry.index,g=t.geometry.attributes.position,v=e.ids,m=e.intersectionSet;for(let d=0,x=v.length;d<x;d++){const _=v[d],y=a===-1?0:l[_]+a,E=3*_,w=u.getX(E+0),b=u.getX(E+1),L=u.getX(E+2);ms.a.fromBufferAttribute(f,w).applyMatrix4(Ki),ms.b.fromBufferAttribute(f,b).applyMatrix4(Ki),ms.c.fromBufferAttribute(f,L).applyMatrix4(Ki),r.reset(),r.initialize(ms);const S=m[_];for(let R=0,D=S.length;R<D;R++){const O=3*S[R],I=p.getX(O+0),U=p.getX(O+1),k=p.getX(O+2);Wa.a.fromBufferAttribute(g,I),Wa.b.fromBufferAttribute(g,U),Wa.c.fromBufferAttribute(g,k),r.splitByTriangle(Wa)}const M=r.triangles;for(let R=0,D=M.length;R<D;R++){const O=M[R],I=r.coplanarTriangleUsed?ib(O,h):um(O,h);Zn.length=0,Rs.length=0;for(let U=0,k=i.length;U<k;U++){const X=hm(i[U],I,s);X!==Zu&&(Rs.push(X),Zn.push(o[U].getGroupAttrSet(y)))}if(Zn.length!==0){ms.getBarycoord(O.a,Xa.a),ms.getBarycoord(O.b,Xa.b),ms.getBarycoord(O.c,Xa.c);for(let U=0,k=Zn.length;U<k;U++){const X=Zn[U],V=Rs[U]===_o;rb(_,Xa,n.geometry,n.matrixWorld,hc,X,c!==V)}}}}return v.length}function Xd(n,t,e,i,s,r,o=0){const a=n.matrixWorld.determinant()<0;Ki.copy(t.matrixWorld).invert().multiply(n.matrixWorld),hc.getNormalMatrix(n.matrixWorld).multiplyScalar(a?-1:1);const c=t.geometry.boundsTree,l=n.geometry.groupIndices,u=n.geometry.index,f=n.geometry.attributes,h=f.position,p=[],g=n.geometry.halfEdges,v=new Set,m=Yu(n.geometry);for(let d=0,x=m;d<x;d++)d in e.intersectionSet||v.add(d);for(;v.size>0;){const d=lb(v);v.delete(d),p.push(d);const x=3*d,_=u.getX(x+0),y=u.getX(x+1),E=u.getX(x+2);zi.a.fromBufferAttribute(h,_).applyMatrix4(Ki),zi.b.fromBufferAttribute(h,y).applyMatrix4(Ki),zi.c.fromBufferAttribute(h,E).applyMatrix4(Ki);const w=um(zi,c);Rs.length=0,Zn.length=0;for(let b=0,L=i.length;b<L;b++){const S=hm(i[b],w,s);S!==Zu&&(Rs.push(S),Zn.push(r[b]))}for(;p.length>0;){const b=p.pop();for(let L=0;L<3;L++){const S=g.getSiblingTriangleIndex(b,L);S!==-1&&v.has(S)&&(p.push(S),v.delete(S))}if(Zn.length!==0){const L=3*b,S=u.getX(L+0),M=u.getX(L+1),R=u.getX(L+2),D=o===-1?0:l[b]+o;if(zi.a.fromBufferAttribute(h,S),zi.b.fromBufferAttribute(h,M),zi.c.fromBufferAttribute(h,R),!Xi(zi))for(let O=0,I=Zn.length;O<I;O++){const U=Rs[O],k=Zn[O].getGroupAttrSet(D),X=U===_o;ob(S,M,R,f,n.matrixWorld,hc,k,X!==a)}}}}}function hb(n){for(let t=0;t<n.length-1;t++){const e=n[t],i=n[t+1];if(e.materialIndex===i.materialIndex){const s=e.start,r=i.start+i.count;i.start=s,i.count=r-s,n.splice(t,1),t--}}}function fb(n,t,e,i){e.clear();const s=n.attributes;for(let r=0,o=i.length;r<o;r++){const a=i[r],c=s[a];e.initializeArray(a,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)i.includes(r)||e.delete(r);for(const r in t.attributes)i.includes(r)||(t.deleteAttribute(r),t.dispose())}function db(n,t,e){let i=!1,s=-1;const r=n.attributes,o=t.groupAttributes[0];for(const c in o){const l=t.getTotalLength(c),u=t.getType(c),f=t.getItemSize(c),h=t.getNormalized(c);let p=r[c];(!p||p.array.length<l)&&(p=new Je(new u(l),f,h),n.setAttribute(c,p),i=!0);let g=0;for(let v=0,m=Math.min(e.length,t.groupCount);v<m;v++){const d=e[v].index,{array:x,type:_,length:y}=t.groupAttributes[d][c],E=new _(x.buffer,0,y);p.array.set(E,g),g+=E.length}p.needsUpdate=!0,s=l/p.itemSize}if(n.index){const c=n.index.array;if(c.length<s)n.index=null,i=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let a=0;n.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:f}=e[c],h=t.getCount(u);h!==0&&(n.addGroup(a,h,f),a+=h)}n.setDrawRange(0,s),n.boundsTree=null,i&&n.dispose()}function qd(n,t){let e=t;return Array.isArray(t)||(e=[],n.forEach(i=>{e[i.materialIndex]=t})),e}class pb{constructor(){this.triangleSplitter=new ZE,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new cb}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,i,s=new lc){let r=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s],r=!1),s.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:c,useGroups:l,consolidateGroups:u,debug:f}=this;for(;a.length<s.length;)a.push(new $E);s.forEach((d,x)=>{fb(t.geometry,d.geometry,a[x],c)}),f.init(),ub(t,e,i,o,a,{useGroups:l}),f.complete();const h=this.getGroupRanges(t.geometry),p=qd(h,t.material),g=this.getGroupRanges(e.geometry),v=qd(g,e.material);g.forEach(d=>d.materialIndex+=p.length);let m=[...h,...g].map((d,x)=>({...d,index:x}));if(l){const d=[...p,...v];u&&(m=m.map(_=>{const y=d[_.materialIndex];return _.materialIndex=d.indexOf(y),_}).sort((_,y)=>_.materialIndex-y.materialIndex));const x=[];for(let _=0,y=d.length;_<y;_++){let E=!1;for(let w=0,b=m.length;w<b;w++){const L=m[w];L.materialIndex===_&&(E=!0,L.materialIndex=x.length)}E&&x.push(d[_])}s.forEach(_=>{_.material=x})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(d=>{d.material=p[0]});return s.forEach((d,x)=>{const _=d.geometry;db(_,a[x],m),u&&hb(_.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new lc){t.updateMatrixWorld(!0);const i=(r,o)=>{const a=r.children;for(let c=0,l=a.length;c<l;c++){const u=a[c];u.isOperationGroup?i(u,o):o(u)}},s=r=>{const o=r.children;let a=!1;for(let l=0,u=o.length;l<u;l++){const f=o[l];a=s(f)||a}const c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let l;return i(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return a||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const is=[["Baloo Bhaijaan 2","بالو · Baloo",800,"ar"],["Cairo","القاهرة · Cairo",800,"ar"],["Lalezar","لاله‌زار · Lalezar",400,"ar"],["Changa","تشانجا · Changa",800,"ar"],["Reem Kufi","ريم كوفي · Reem Kufi",700,"ar"],["El Messiri","المسيري · Messiri",700,"ar"],["Marhey","مرحي · Marhey",700,"ar"],["Rakkas","رقّاص · Rakkas",400,"ar"],["Aref Ruqaa","رقعة · Ruqaa",700,"ar"],["Amiri","أميري · Amiri",700,"ar"],["Fredoka","Fredoka",700,"en"],["Bungee","Bungee",400,"en"],["Bebas Neue","Bebas Neue",400,"en"],["Pacifico","Pacifico",400,"en"],["Lobster","Lobster",400,"en"],["Permanent Marker","Permanent Marker",400,"en"],["Press Start 2P","Press Start 2P",400,"en"]],mb="/vendor/fonts/css2?"+is.map(([n,,t])=>"family="+n.replace(/ /g,"+")+":wght@"+t).join("&")+"&display=swap";function gb(){if(document.getElementById("kidFonts"))return;const n=document.createElement("link");n.id="kidFonts",n.rel="stylesheet",n.href=mb,document.head.appendChild(n)}const Ku=n=>is.find(t=>t[0]===n)||is[0],fm=n=>is.map(([t,e,,i])=>'<option value="'+t+'"'+(t===n?" selected":"")+` style="font-family:'`+t+`'">`+(i==="en"?"🔤 ":"ع ")+e+"</option>").join("");async function Fo(n,t){const[e,,i]=Ku(n);try{await document.fonts.load(i+' 120px "'+e+'"',t||"aبج")}catch{}}gb();const z=n=>document.getElementById(n),_b="٠١٢٣٤٥٦٧٨٩",Pe=n=>String(n).replace(/\d/g,t=>_b[t]);function ti(n){const t=new Lr;return n.forEach(([e,i],s)=>s?t.lineTo(e,i):t.moveTo(e,i)),t.closePath(),t}const Qa=(n,t,e)=>new Tc(n,e?{depth:Math.max(.2,t-2*e),bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:5,curveSegments:24}:{depth:t,bevelEnabled:!1,curveSegments:24});function ei(n,t,e){const i=Qa(n,t,Math.min(e||0,t/2-.1));return i.rotateX(-Math.PI/2),i}const Ci=33;function dm(n,t){n=Math.max(3,Math.min(Ci,n|0));const e=n>=Ci;if(!t)return e?new Ae(10,10,20,64):new Ae(10,10,20,n);const i=new Lr;if(e)i.absarc(0,0,10,0,Math.PI*2,!1);else for(let s=0;s<n;s++){const r=Math.PI/2+s*2*Math.PI/n;s?i.lineTo(Math.cos(r)*10,Math.sin(r)*10):i.moveTo(Math.cos(r)*10,Math.sin(r)*10)}return ei(i,20,Math.min(t,9))}const cn={box:{ar:"مكعب",rd:1,make:n=>n?new bS(20,20,20,5,Math.min(n,9.5)):new me(20,20,20)},cyl:{ar:"أسطوانة",rd:1,sides:1,make:()=>new Ae(10,10,20,48)},sphere:{ar:"كورة",make:()=>new kr(10,48,32)},cone:{ar:"مخروط",sides:1,make:()=>new Ae(0,10,20,48)},pyramid:{ar:"هرم",make:()=>{const n=new Ae(0,20/Math.SQRT2,20,4);return n.rotateY(Math.PI/4),n}},roof:{ar:"سقف",rd:1,make:n=>Qa(ti([[-10,-10],[10,-10],[0,10]]),20,Math.min(n||0,4))},tri:{ar:"مثلث",poly:3},pent:{ar:"خماسي",poly:5},hex:{ar:"سداسي",poly:6},hept:{ar:"سباعي",poly:7},oct:{ar:"ثماني",poly:8},oval:{ar:"بيضاوي",rd:1,make:n=>{const t=new Lr;return t.absellipse(0,0,14,9,0,Math.PI*2,!1),ei(t,20,n)}},rhomb:{ar:"معيّن",rd:1,make:n=>ei(ti([[0,-12],[8,0],[0,12],[-8,0]]),6,n)},kite:{ar:"طيارة ورق",rd:1,make:n=>ei(ti([[0,-13],[9,4],[0,9],[-9,4]]),6,n)},tube:{ar:"ماسورة",make:()=>new Tr([[6,-10],[10,-10],[10,10],[6,10],[6,-10]].map(([n,t])=>new Q(n,t)),48)},torus:{ar:"حلقة",make:()=>{const n=new Wi(7,3,24,64);return n.rotateX(Math.PI/2),n}},star:{ar:"نجمة",rd:1,make:n=>{const t=[];for(let e=0;e<10;e++){const i=e%2?4.5:10,s=Math.PI/2+e*Math.PI/5;t.push([Math.cos(s)*i,Math.sin(s)*i])}return ei(ti(t),6,Math.min(n||0,1.2))}},heart:{ar:"قلب",rd:1,make:n=>{const t=new Lr;return t.moveTo(0,-9),t.bezierCurveTo(-4,-5,-11,-1,-10,4),t.bezierCurveTo(-9,9,-2,10,0,5),t.bezierCurveTo(2,10,9,9,10,4),t.bezierCurveTo(11,-1,4,-5,0,-9),ei(t,6,n)}},wedge:{ar:"منحدر",rd:1,make:n=>Qa(ti([[-10,-10],[10,-10],[-10,10]]),20,Math.min(n||0,3))},halfsph:{ar:"نص كورة",make:()=>{const n=[new Q(0,0)];for(let t=0;t<=24;t++){const e=t/24*Math.PI/2;n.push(new Q(t===24?0:Math.cos(e)*10,Math.sin(e)*10))}return new Tr(n,48)}},capsule:{ar:"كبسولة",make:()=>new Gu(6,8,10,32)},wheel:{ar:"عجلة",make:()=>{const n=new Tr([[2.5,-3],[10,-3],[10,3],[2.5,3],[2.5,-3]].map(([t,e])=>new Q(t,e)),48);return n.rotateZ(Math.PI/2),n}},gear:{ar:"ترس",rd:1,make:n=>{const t=[];for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=Math.PI/12;[[8,o-a*.55],[10,o-a*.3],[10,o+a*.3],[8,o+a*.55]].forEach(([c,l])=>t.push([Math.cos(l)*c,Math.sin(l)*c]))}const i=ti(t),s=new To;return s.absarc(0,0,2.5,0,Math.PI*2,!0),i.holes.push(s),ei(i,6,Math.min(n||0,.8))}},arch:{ar:"بوابة",rd:1,make:n=>{const t=[[-10,-10],[-5,-10]];for(let e=0;e<=16;e++){const i=Math.PI-e/16*Math.PI;t.push([Math.cos(i)*5,-3+Math.sin(i)*5])}return t.push([5,-10],[10,-10],[10,10],[-10,10]),Qa(ti(t),10,Math.min(n||0,2))}},plus:{ar:"علامة +",rd:1,make:n=>ei(ti([[-3,-10],[3,-10],[3,-3],[10,-3],[10,3],[3,3],[3,10],[-3,10],[-3,3],[-10,3],[-10,-3],[-3,-3]]),6,Math.min(n||0,1.4))}},xi=(n,t,e,i)=>({t:"box",s:n,p:t,c:e,r:[0,0,0]}),gs=(n,t,e,i)=>({t:"cyl",s:n,p:t,c:e,r:i||[0,0,0]}),io=Math.PI/2,Ri={robo:{ar:"روبو",parts:[gs([.5,.3,.5],[-9,5,0],"#3A3F4B",[0,0,io]),gs([.5,.3,.5],[9,5,0],"#3A3F4B",[0,0,io]),xi([1.2,1.1,.8],[0,17,0],"#1E7BFF"),xi([.2,.6,.25],[-14,18,0],"#FF8A1F"),xi([.2,.6,.25],[14,18,0],"#FF8A1F"),xi([1,.8,.8],[0,36,0],"#00B8D9"),gs([.2,.1,.2],[-4,37,9],"#FFFFFF",[io,0,0]),gs([.2,.1,.2],[4,37,9],"#FFFFFF",[io,0,0]),xi([.4,.1,.1],[0,31.5,8.5],"#3A3F4B"),gs([.1,.3,.1],[0,47,0],"#3A3F4B"),{t:"sphere",s:[.25,.25,.25],p:[0,52.5,0],c:"#E5484D",r:[0,0,0]}]},car:{ar:"عربية",parts:[xi([2.4,.4,1.4],[0,9,0],"#E5484D"),xi([1.2,.6,1.2],[-3,19,0],"#FFC93C"),...[[-14,-17],[14,-17],[-14,17],[14,17]].map(([n,t])=>gs([.7,.3,.7],[n,7,t],"#3A3F4B",[io,0,0]))]},house:{ar:"بيت",parts:[xi([1.6,1.2,1.4],[0,12,0],"#FFC93C"),{t:"roof",s:[1.7,.8,1.5],p:[0,32,0],c:"#E5484D",r:[0,0,0]},xi([.4,.6,.1],[0,6,14.5],"#8B5A2B")]},tree:{ar:"شجرة",parts:[gs([.4,1,.4],[0,10,0],"#8B5A2B"),{t:"cone",s:[1.6,1.4,1.6],p:[0,34,0],c:"#18B37E",r:[0,0,0]}]}},fc=()=>getComputedStyle(document.body).fontFamily||"Tahoma, Arial, sans-serif",co=new Map;function pm(n,t){const e=t?Ku(t):null,i=120,s=document.createElement("canvas"),r=s.getContext("2d"),o=e?e[2]+" "+i+'px "'+e[0]+'", '+fc():"800 "+i+"px "+fc(),a=/[\u0600-\u06FF]/.test(n);r.font=o;const c=Math.ceil(r.measureText(n).width)+24,l=Math.ceil(i*1.6);s.width=Math.max(8,c),s.height=l,r.font=o,r.direction=a?"rtl":"ltr",r.textAlign="center",r.textBaseline="middle",r.fillStyle="#000",r.fillText(n,s.width/2,l/2);const u=s.width,f=s.height,h=r.getImageData(0,0,u,f).data,p=(M,R)=>M>=0&&R>=0&&M<u&&R<f&&h[(R*u+M)*4+3]>110,g=new Map,v=(M,R)=>M+","+R,m=(M,R,D,O)=>{const I=v(M,R);(g.get(I)||g.set(I,[]).get(I)).push([D,O])};for(let M=0;M<f;M++)for(let R=0;R<u;R++)p(R,M)&&(p(R,M-1)||m(R,M,R+1,M),p(R+1,M)||m(R+1,M,R+1,M+1),p(R,M+1)||m(R+1,M+1,R,M+1),p(R-1,M)||m(R,M+1,R,M));const d=[];for(const[M,R]of g)for(;R.length;){const[D,O]=M.split(",").map(Number);let[I,U]=[D,O],[k,X]=R.shift();const Z=[[D,O]];for(let V=0;V<2e5;V++){const tt=k-I,et=X-U;if(I=k,U=X,I===D&&U===O)break;Z.push([I,U]);const ut=g.get(v(I,U));if(!ut||!ut.length)break;let j=0;if(ut.length>1){const nt=[[-et,tt],[tt,et],[et,-tt]];j=Math.max(0,ut.findIndex(([vt,wt])=>vt-I===nt[0][0]&&wt-U===nt[0][1]))}[k,X]=ut.splice(j,1)[0]}Z.length>3&&d.push(Z)}const x=(M,R)=>{if(M.length<3)return M;const[D,O]=[M[0],M[M.length-1]];let I=0,U=0;for(let k=1;k<M.length-1;k++){const[X,Z]=M[k],V=Math.abs((O[1]-D[1])*X-(O[0]-D[0])*Z+O[0]*D[1]-O[1]*D[0])/(Math.hypot(O[0]-D[0],O[1]-D[1])||1);V>U&&(U=V,I=k)}return U>R?x(M.slice(0,I+1),R).slice(0,-1).concat(x(M.slice(I),R)):[D,O]},_=22/i,y=d.map(M=>{const R=Math.floor(M.length/2);return x(M.slice(0,R+1),.9).slice(0,-1).concat(x(M.slice(R).concat([M[0]]),.9).slice(0,-1)).map(([O,I])=>new Q((O-u/2)*_,(f/2-I)*_))}).filter(M=>M.length>=3),E=M=>M.reduce((R,D,O)=>R+D.x*M[(O+1)%M.length].y-M[(O+1)%M.length].x*D.y,0)/2,w=(M,R)=>{let D=!1;for(let O=0,I=R.length-1;O<R.length;I=O++){const U=R[O],k=R[I];U.y>M.y!=k.y>M.y&&M.x<(k.x-U.x)*(M.y-U.y)/(k.y-U.y)+U.x&&(D=!D)}return D},b=y.filter(M=>E(M)<0),L=y.filter(M=>E(M)>0),S=b.map(M=>new Lr(M));return L.forEach(M=>{let R=-1,D=1/0;b.forEach((O,I)=>{const U=-E(O);U<D&&w(M[0],O)&&(D=U,R=I)}),R>=0&&S[R].holes.push(new To(M))}),S}function mm(n,t){const e=n+"|"+(t||"");if(co.has(e))return co.get(e);if(t){const o=Ku(t);document.fonts.check(o[2]+' 120px "'+o[0]+'"',n)||Fo(t,n).then(()=>{document.fonts.check(o[2]+' 120px "'+o[0]+'"',n)&&(co.delete(e),xo.clear(),Re())})}const i=pm(n||"?",t),s=i.length?new Tc(i,{depth:5,bevelEnabled:!1,curveSegments:1}):new me(10,10,5);s.computeBoundingBox();const r=new T;return s.boundingBox.getCenter(r),s.translate(-r.x,-r.y,-r.z),s.computeBoundingBox(),s.computeVertexNormals(),co.set(e,s),s}const es={},ss={},Eu=n=>{n.computeBoundingBox();const t=new T;return n.boundingBox.getCenter(t),n.translate(-t.x,-t.y,-t.z),n.computeBoundingBox(),n.computeVertexNormals(),n},Zl=new Map;function xb(n){const t=n.n,e=n.rd||0;if(!t&&!e&&es[n.t])return es[n.t];const i=n.t+"|"+(t||"")+"|"+e;if(Zl.has(i))return Zl.get(i);let s;const r=cn[n.t];return n.t==="poly"||n.t==="cyl"&&(t||e)?s=dm(t||Ci,e):n.t==="cone"?s=t&&t<Ci?new Ae(0,10,20,t):cn.cone.make():r&&r.make?s=r.make(e):s=es[n.t],s=Eu(s),Zl.set(i,s),s}for(const n in cn){const t=cn[n].poly?dm(cn[n].poly,0):cn[n].make(0);t.computeBoundingBox();const e=new T;t.boundingBox.getCenter(e),t.translate(-e.x,-e.y,-e.z),t.computeBoundingBox(),t.computeVertexNormals(),es[n]=t;const i=new T;t.boundingBox.getSize(i),ss[n]=i}const gm={box:'<rect x="10" y="14" width="26" height="26" rx="2" fill="#4F8BFF"/><path d="M10 14l8-8h26l-8 8z" fill="#8FB6FF"/><path d="M36 14l8-8v26l-8 8z" fill="#2E64D6"/>',cyl:'<ellipse cx="24" cy="12" rx="14" ry="5" fill="#FFB547"/><path d="M10 12v24a14 5 0 0 0 28 0V12a14 5 0 0 1-28 0z" fill="#F08C00"/>',sphere:'<circle cx="24" cy="24" r="16" fill="#18B37E"/><circle cx="18" cy="18" r="5" fill="#7FE3B8"/>',cone:'<path d="M24 6L38 38a14 5 0 0 1-28 0z" fill="#E5484D"/><ellipse cx="24" cy="38" rx="14" ry="5" fill="#B5262B"/>',pyramid:'<path d="M24 6L8 36l16 6z" fill="#F7C948"/><path d="M24 6l16 30-16 6z" fill="#D4A017"/>',roof:'<path d="M18 16L34 8L44 30L28 40z" fill="#7A3FB0"/><path d="M4 40L18 16L28 40z" fill="#B06AE0"/><path d="M18 16L34 8" stroke="#E2C6F7" stroke-width="1.5"/>',tube:'<ellipse cx="24" cy="12" rx="14" ry="5" fill="#9AA6B8"/><ellipse cx="24" cy="12" rx="7" ry="2.5" fill="#EAF0FB"/><path d="M10 12v24a14 5 0 0 0 28 0V12a14 5 0 0 1-28 0z" fill="#6B778A"/>',torus:'<ellipse cx="24" cy="24" rx="17" ry="9" fill="#FF7AB6"/><ellipse cx="24" cy="23" rx="8" ry="3.5" fill="#EAF0FB"/>',star:'<path d="M24 5l5.6 12 13 1.4-9.8 8.8 2.8 12.8L24 33.6 12.4 40l2.8-12.8L5.4 18.4l13-1.4z" fill="#FFC93C"/>',heart:'<path d="M24 41S7 30 7 18a8.5 8.5 0 0 1 17-2 8.5 8.5 0 0 1 17 2c0 12-17 23-17 23z" fill="#FF4D6D"/>',wedge:'<path d="M8 40h26V14z" fill="#18B37E"/><path d="M34 14l8-6v26l-8 6z" fill="#0E8A60"/><path d="M8 40L34 14l8-6L16 34z" fill="#5FD6A8"/>',halfsph:'<path d="M6 34a18 18 0 0 1 36 0z" fill="#1E7BFF"/><ellipse cx="24" cy="34" rx="18" ry="5" fill="#1559C4"/><circle cx="17" cy="24" r="4" fill="#8FB6FF"/>',hex:'<path d="M16 8h16l8 8v16l-8 8H16l-8-8V16z" fill="#5B3DF5"/><path d="M16 8h16l8 8H8z" fill="#9C88FF"/>',tri:'<path d="M24 6L42 40H6z" fill="#7CC63B"/><path d="M24 6L42 40H30z" fill="#5A9E22"/>',pent:'<path d="M24 5l18 13-7 22H13L6 18z" fill="#8B5A2B"/><path d="M24 5l18 13-7 22H24z" fill="#6E4520"/>',hept:'<path d="M24 5l14 7 4 15-10 13H18L8 27l4-15z" fill="#FF1FA6"/><path d="M24 5l14 7 4 15-10 13H24z" fill="#D10F86"/>',oct:'<path d="M17 5h14l10 10v14L31 41H17L7 29V15z" fill="#FF8A1F"/><path d="M24 5h7l10 10v14L31 41h-7z" fill="#E06E00"/>',oval:'<ellipse cx="24" cy="24" rx="20" ry="13" fill="#7B2FD6"/><ellipse cx="18" cy="19" rx="7" ry="3.5" fill="#B48CF0"/>',rhomb:'<path d="M24 4l11 20-11 20-11-20z" fill="#22E5F0"/><path d="M24 4l11 20-11 20z" fill="#12B8C2"/>',kite:'<path d="M24 44L39 15L24 4L9 15z" fill="#FF4F7B"/><path d="M24 44L39 15L24 4z" fill="#D9325D"/>',capsule:'<rect x="15" y="5" width="18" height="38" rx="9" fill="#FF7AB6"/><rect x="19" y="9" width="5" height="14" rx="2.5" fill="#FFC2DD"/>',wheel:'<circle cx="24" cy="24" r="17" fill="#3A3F4B"/><circle cx="24" cy="24" r="10" fill="#9AA6B8"/><circle cx="24" cy="24" r="3.5" fill="#3A3F4B"/>',gear:'<path d="M21 4h6l1 5 4 2 4-3 4 4-3 4 2 4 5 1v6l-5 1-2 4 3 4-4 4-4-3-4 2-1 5h-6l-1-5-4-2-4 3-4-4 3-4-2-4-5-1v-6l5-1 2-4-3-4 4-4 4 3 4-2z" fill="#9AA6B8"/><circle cx="24" cy="24" r="6" fill="#EAF0FB"/>',arch:'<path d="M6 42V8h36v34H31V28a7 7 0 0 0-14 0v14z" fill="#FF8A1F"/>',plus:'<path d="M19 6h10v13h13v10H29v13H19V29H6V19h13z" fill="#E5484D"/>',robo:'<rect x="13" y="6" width="22" height="16" rx="3" fill="#00B8D9"/><circle cx="19" cy="14" r="2.6" fill="#fff"/><circle cx="29" cy="14" r="2.6" fill="#fff"/><path d="M24 6V2" stroke="#3A3F4B" stroke-width="2"/><circle cx="24" cy="2.5" r="2" fill="#E5484D"/><rect x="11" y="23" width="26" height="15" rx="3" fill="#1E7BFF"/><rect x="5" y="25" width="5" height="10" rx="2" fill="#FF8A1F"/><rect x="38" y="25" width="5" height="10" rx="2" fill="#FF8A1F"/><circle cx="16" cy="42" r="4.5" fill="#3A3F4B"/><circle cx="32" cy="42" r="4.5" fill="#3A3F4B"/>',car:'<rect x="14" y="10" width="16" height="12" rx="2" fill="#FFC93C"/><rect x="4" y="20" width="40" height="12" rx="3" fill="#E5484D"/><circle cx="13" cy="35" r="6" fill="#3A3F4B"/><circle cx="35" cy="35" r="6" fill="#3A3F4B"/>',house:'<path d="M4 22L24 6l20 16z" fill="#E5484D"/><rect x="9" y="22" width="30" height="20" fill="#FFC93C"/><rect x="20" y="30" width="8" height="12" fill="#8B5A2B"/>',tree:'<path d="M24 4L40 34H8z" fill="#18B37E"/><rect x="20" y="34" width="8" height="10" fill="#8B5A2B"/>'},$u=["#E5484D","#FF8A1F","#FFC93C","#18B37E","#1E7BFF","#5B3DF5","#FF7AB6","#8B5A2B","#FFFFFF","#9AA6B8","#3A3F4B","#00B8D9"],te=z("c3"),Sn=z("stage3"),Ju=new Bu({canvas:te,antialias:!0,preserveDrawingBuffer:!0});Ju.setPixelRatio(Math.min(2,devicePixelRatio));const un=new Vp;un.background=new ie("#EAF0FB");const oe=new yn(45,1,1,5e3),_m=new T(170,150,210);oe.position.copy(_m);un.add(new aS("#ffffff","#b8c4dc",1.1));const xm=new uS("#ffffff",1.4);xm.position.set(120,260,160);un.add(xm);const Qu=new pt(new Io(200,200),new Uo({color:"#FFFFFF",roughness:1}));Qu.rotation.x=-Math.PI/2;Qu.position.y=-.05;un.add(Qu);const vb=new Jp(200,40,"#C9D5EA","#DDE5F3");un.add(vb);const vm=new Jp(200,20,"#9FB2D6","#9FB2D6");vm.position.y=.02;un.add(vm);const Wt=new pS(oe,te);Wt.target.set(0,10,0);Wt.enableDamping=!0;Wt.mouseButtons={LEFT:-1,MIDDLE:Hi.PAN,RIGHT:Hi.ROTATE};Wt.maxDistance=1200;Wt.minDistance=40;Wt.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN};Wt.update();te.addEventListener("pointerdown",n=>{const t=n.pointerType!=="mouse";Wt.rotateSpeed=t?.55:1,Wt.zoomSpeed=t?1.2:1},!0);{const n=new Map;let t=null;const e=()=>{const s=[...n.values()];return[s.reduce((r,o)=>r+o[0],0)/s.length,s.reduce((r,o)=>r+o[1],0)/s.length]};te.addEventListener("pointerdown",s=>{s.pointerType!=="mouse"&&(n.set(s.pointerId,[s.clientX,s.clientY]),n.size>=3&&(Wt.enabled=!1,t=e(),s.stopImmediatePropagation()))},!0),te.addEventListener("pointermove",s=>{if(!n.has(s.pointerId)||(n.set(s.pointerId,[s.clientX,s.clientY]),!t||n.size<3))return;const r=e(),o=r[0]-t[0],a=r[1]-t[1];t=r;const c=te.clientHeight||1,l=oe.position.distanceTo(Wt.target),u=2*l*Math.tan(rs.degToRad(oe.fov/2))/c,f=new T().setFromMatrixColumn(oe.matrix,0),h=new T().setFromMatrixColumn(oe.matrix,1),p=f.multiplyScalar(-o*u).add(h.multiplyScalar(a*u));oe.position.add(p),Wt.target.add(p),s.stopImmediatePropagation()},!0);const i=s=>{n.delete(s.pointerId)&&(n.size<3&&t&&(t=null,n.size===0&&(Wt.enabled=!0)),n.size===0&&(Wt.enabled=!0))};te.addEventListener("pointerup",i,!0),te.addEventListener("pointercancel",i,!0)}const Pt=new mS(oe,te);Pt.setSize(1.45);un.add(Pt);let dc=matchMedia("(pointer:coarse)").matches;te.addEventListener("pointerdown",n=>{if(n.pointerType==="mouse"||(dc||(dc=!0,Pt.setSize(1.9)),!Pt.object||!Pt.enabled||!Pt.visible||n.button!==0||Pt.dragging))return;const t=Pt._getPointer(n);if(Pt.pointerHover(t),Pt.axis)return;const e=te.getBoundingClientRect();for(const i of[12,22,32])for(let s=0;s<8;s++){const r=s*Math.PI/4,o={x:t.x+Math.cos(r)*i/e.width*2,y:t.y+Math.sin(r)*i/e.height*2,button:0};if(Pt.pointerHover(o),!!Pt.axis){n.stopImmediatePropagation();try{te.setPointerCapture(n.pointerId)}catch{}te.addEventListener("pointermove",Pt._onPointerMove),Pt.pointerDown(t);return}}Pt.axis=null},!0);dc&&Pt.setSize(1.9);const ze=new Ce;un.add(ze);Wt.addEventListener("end",()=>{Pt.object===ze&&J.length===1&&!Pt.dragging&&No(ee.get(J[0]))});const ym=new T;let Mr=null,tc=null;function No(n){n.updateMatrixWorld();const t=new de().setFromObject(n),e=new T,i=new T;t.getCenter(e),t.getSize(i);const s=new T().subVectors(Wt.target,oe.position);s.y=0,s.lengthSq()<1e-6&&s.set(0,0,-1),s.normalize();const r=new T(-s.z,0,s.x),o=Math.hypot(i.x,i.z)/2+9;ze.position.set(e.x+r.x*o,t.min.y,e.z+r.z*o),ym.subVectors(ze.position,n.position)}const yb={translate:1.45,rotate:1.1,scale:1};function Mm(){const n=J.length===1&&!Gt(J[0]).lk?ee.get(J[0]):null;if(!n){Pt.detach();return}Pt.setSize(yb[Pt.mode]||1),Pt.mode==="translate"?(No(n),Pt.setTranslationSnap(null),Pt.attach(ze)):(Pt.setTranslationSnap($n||null),Pt.attach(n)),Pt.mode==="rotate"&&Pt.detach(),Pt.showX=Pt.showZ=!0}const Ir=new Ti;un.add(Ir);function Sm(){const n=Sn.clientWidth,t=Sn.clientHeight;Ju.setSize(n,t,!1),oe.aspect=n/Math.max(1,t),oe.updateProjectionMatrix()}new ResizeObserver(Sm).observe(Sn);Sm();let Em=0;const bm=()=>performance.now()<Em;document.querySelector(".shapes").addEventListener("scroll",()=>{Em=performance.now()+180},{passive:!0});(function n(){if(!bm()){if(Wt.update(),Pt.object===ze&&!Pt.dragging&&J.length===1){const t=ee.get(J[0]);t&&ze.position.copy(t.position).add(ym)}Ab&&Cb(),Ju.render(un,oe)}requestAnimationFrame(n)})();let Ft=[],J=[];const kn=()=>Math.random().toString(36).slice(2,9),ee=new Map,Ls=new pb;Ls.attributes=["position","normal"];Ls.useGroups=!1;const xo=new Map;function Rc(n){const t=new se;return t.compose(new T(...n.p),new De().setFromEuler(new Li(...n.r)),new T(...n.s)),t}function wm(n){const t=new Be,e=n.index?n.toNonIndexed():n;return t.setAttribute("position",e.getAttribute("position").clone()),t.computeVertexNormals(),t}function Tm(n){const t=JSON.stringify([n.kids,n.o]);if(xo.has(t))return xo.get(t);let e=null,i=null;for(const o of n.kids){const a=wm(th(o)),c=Rc(o);if(a.applyMatrix4(c),c.determinant()<0){const u=a.getAttribute("position");for(let f=0;f<u.count;f+=3){const h=u.getX(f+1),p=u.getY(f+1),g=u.getZ(f+1);u.setXYZ(f+1,u.getX(f+2),u.getY(f+2),u.getZ(f+2)),u.setXYZ(f+2,h,p,g)}a.computeVertexNormals()}const l=new lc(a);l.updateMatrixWorld(),o.h?i=i?Ls.evaluate(i,l,uc):l:e=e?Ls.evaluate(e,l,uc):l}const r=(e?i?Ls.evaluate(e,i,ju):e:i).geometry.clone();return r.translate(-n.o[0],-n.o[1],-n.o[2]),r.computeVertexNormals(),r.computeBoundingBox(),xo.set(t,r),r}const th=n=>n.t==="group"?Tm(n):n.t==="text"?mm(n.txt,n.fnt):n.t==="draw"?Gm(n):xb(n),Oo=n=>{if(n.t!=="group"&&n.t!=="text"&&n.t!=="draw"&&!n.n&&!n.rd&&ss[n.t])return ss[n.t];const t=new T;return th(n).boundingBox.getSize(t),t},Lc=new Uo({color:"#AEB7C6",transparent:!0,opacity:.6,roughness:.7,depthWrite:!1,side:an});Lc.onBeforeCompile=n=>{const t=Math.min(2,devicePixelRatio||1).toFixed(2);n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (mod(gl_FragCoord.x + gl_FragCoord.y, 22.0 * `+t+") < 11.0 * "+t+") gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.97), 0.55);")};const Mb=new Do({color:"#4A5568",transparent:!0,opacity:.85,depthWrite:!1}),Yd=new Map,Sb=n=>{let t=Yd.get(n.uuid);return t||(t=new HM(n,25),Yd.set(n.uuid,t)),t};function Eb(n){return n.h?Lc:new Uo({color:n.c,roughness:.55,metalness:.05,side:an})}const Dr=new Map;function jd(n,t){const e=wm(n);if(e.applyMatrix4(t),t.determinant()<0){const s=e.getAttribute("position");for(let r=0;r<s.count;r+=3){const o=s.getX(r+1),a=s.getY(r+1),c=s.getZ(r+1);s.setXYZ(r+1,s.getX(r+2),s.getY(r+2),s.getZ(r+2)),s.setXYZ(r+2,o,a,c)}e.computeVertexNormals()}const i=new lc(e);return i.updateMatrixWorld(),i}const Zd=n=>n.geometry.uuid+":"+n.matrixWorld.elements.map(t=>t.toFixed(2)).join(","),bu=n=>(n.geometry.boundingBox||n.geometry.computeBoundingBox(),n.geometry.boundingBox.clone().applyMatrix4(n.matrixWorld));function Kl(n){const t=Dr.get(n);t&&(t.view.parent&&(t.view.parent.material.visible=!0,t.view.parent.remove(t.view)),t.view.geometry.dispose(),t.view.material.dispose(),Dr.delete(n))}function Ic(){Ir.updateMatrixWorld(!0);const n=Ft.filter(t=>t.h&&ee.has(t.id)).map(t=>{const e=ee.get(t.id);return{m:e,box:bu(e)}});for(const t of Ft){const e=ee.get(t.id);if(!e||t.h){Kl(t.id);continue}const i=bu(e),s=n.filter(u=>u.box.intersectsBox(i));if(!s.length){Kl(t.id);continue}const r=Zd(e)+"|"+s.map(u=>Zd(u.m)).join("|"),o=Dr.get(t.id);if(o&&o.key===r&&o.view.parent===e)continue;let a;try{let u=null;for(const f of s){const h=jd(f.m.geometry,f.m.matrixWorld);u=u?Ls.evaluate(u,h,uc):h}a=Ls.evaluate(jd(e.geometry,e.matrixWorld),u,ju)}catch{continue}Kl(t.id);const c=a.geometry.clone();c.applyMatrix4(e.matrixWorld.clone().invert()),c.computeVertexNormals(),c.computeBoundingBox();const l=new pt(c,e.material.clone());l.material.visible=!0,l.raycast=()=>{},l.renderOrder=1,e.material.visible=!1,e.add(l),Dr.set(t.id,{key:r,view:l})}wu()}function Am(){if(J.length!==1)return null;const n=Gt(J[0]);if(!n||n.lk)return null;Ir.updateMatrixWorld(!0);const t=r=>bu(ee.get(r)),e=(r,o)=>o.filter(a=>t(a.id).intersectsBox(t(r.id))),i=Ft.filter(r=>r.h&&ee.has(r.id)),s=Ft.filter(r=>!r.h&&ee.has(r.id));if(n.h){const r=e(n,s);return r.length?{solids:r,holesOf:o=>e(o,i)}:null}return Dr.has(n.id)?{solids:[n],holesOf:r=>e(r,i)}:null}function bb(){const n=Am();if(!n)return;const t=new Set,e=[];n.solids.forEach(i=>{const s=n.holesOf(i);if(!s.length)return;s.forEach(o=>t.add(o.id));const r=s.map(o=>{const a=JSON.parse(JSON.stringify(o));return a.id=kn(),a});Ft.push(...r),J=[i.id,...r.map(o=>o.id)],Ho(!0),e.push(J[0])}),Ft=Ft.filter(i=>!t.has(i.id)),Re(),J=e.slice(0,1),Qe(),ne(),ue("✂️ الفتحة اتنفّذت! الشكل بقى قطعة واحدة")}function wu(){const n=z("pApplyHole");n&&(n.hidden=!Am())}z("pApplyHole").onclick=bb;let $l=0;function Dc(){$l||($l=setTimeout(()=>{$l=0,Ic()},90))}function Re(){Pt.detach(),ee.forEach(n=>{Ir.remove(n),n.material!==Lc&&n.material.dispose()}),ee.clear();for(const n of Ft){const t=new pt(th(n),Eb(n));if(t.position.set(...n.p),t.rotation.set(...n.r),t.scale.set(...n.s),t.userData.id=n.id,t.renderOrder=n.h?2:1,n.h){const e=new zu(Sb(t.geometry),Mb);e.raycast=()=>{},e.renderOrder=3,t.add(e)}Ir.add(t),ee.set(n.id,t)}J=J.filter(n=>ee.has(n)),Qe(),Ic()}function wb(n){const t=ee.get(n.id);n.p=t.position.toArray().map(Dt),n.r=[t.rotation.x,t.rotation.y,t.rotation.z],n.s=t.scale.toArray()}const Dt=n=>Math.round(n*10)/10,Gt=n=>Ft.find(t=>t.id===n);function fe(n){const t=ee.get(n.id);return t.updateMatrixWorld(),new de().setFromObject(t)}let dn=[],gn=-1;function ne(n=!0){Ic(),dn=dn.slice(0,gn+1),dn.push(JSON.stringify(Ft)),dn.length>80&&dn.shift(),gn=dn.length-1,hh(),Nr?Zb():n&&os(!1)}function Pm(n){Ft=JSON.parse(n),J=J.filter(t=>Ft.some(e=>e.id===t)),Re(),Qe(),hh(),os(!1)}z("undoBtn").onclick=()=>{gn>0&&(gn--,Pm(dn[gn]))};z("redoBtn").onclick=()=>{gn<dn.length-1&&(gn++,Pm(dn[gn]))};const Cm="robo-lab-3d";let be=(()=>{try{return JSON.parse(localStorage.getItem(Cm))||null}catch{return null}})()||{cur:null,list:[]};const Uc=()=>{try{return localStorage.setItem(Cm,JSON.stringify(be)),!0}catch{return!1}},Rm=()=>be.list.find(n=>n.id===be.cur);function os(n){if(Nr)return;let t=Rm();t||(t={id:kn(),name:"تصميمي",objs:[],t:0},be.list.unshift(t),be.cur=t.id),t.objs=Ft,t.name=(z("pname").value||"").trim()||"تصميمي",t.t=Date.now();const e=Uc();n&&ue(e?"💾 اتحفظ":"مقدرتش أحفظ على الجهاز ده")}function pc(n){const t=be.list.find(e=>e.id===n);t&&(be.cur=n,Uc(),z("pname").value=t.name,Ft=JSON.parse(JSON.stringify(t.objs||[])),J=[],Re(),dn=[],gn=-1,ne(!1))}function Lm(){os(!1);const n={id:kn(),name:"تصميم "+Pe(be.list.length+1),objs:[],t:Date.now()};be.list.unshift(n),pc(n.id)}z("pname").addEventListener("change",()=>os(!1));addEventListener("beforeunload",()=>os(!1));const vo=[];function Qe(){vo.forEach(n=>un.remove(n)),vo.length=0,J.forEach(n=>{const t=new fS(ee.get(n),"#FF8A1F");un.add(t),vo.push(t)}),Mm(),En(),hh(),typeof wu=="function"&&wu()}function ci(){vo.forEach(n=>n.update())}function Bn(n,t){n?t?J=J.includes(n)?J.filter(e=>e!==n):J.concat(n):J=[n]:J=[],Qe()}const oi=new Ac,Kd=new Q;let Xn=null,Fe=null,mc=0,gc=!1,_s={id:null,t:0};function Im(n){const t=document.querySelector(".txtEdit");t&&t.remove();const e=fe(n),i=new T;e.getCenter(i),i.y=e.max.y;const s=i.project(oe),r=te.getBoundingClientRect(),o=Sn.getBoundingClientRect(),a=document.createElement("input");a.className="txtEdit",a.dir="auto",a.maxLength=24,a.value=n.txt||"",a.setAttribute("aria-label","عدّل النص"),a.style.left=r.left-o.left+(s.x+1)/2*r.width+"px",a.style.top=r.top-o.top+(1-s.y)/2*r.height+"px",Sn.appendChild(a),a.focus(),a.select();const c=n.txt;let l=0;a.addEventListener("input",()=>{clearTimeout(l),l=setTimeout(()=>{const h=a.value.trim().slice(0,24);h&&h!==n.txt&&So(n,h,!1)},200)});let u=!1;const f=h=>{if(u)return;u=!0,clearTimeout(l);const p=a.value.trim().slice(0,24);a.remove(),h&&p?p!==n.txt?So(n,p,!0):dn[gn]!==JSON.stringify(Ft)&&ne():n.txt!==c&&So(n,c,!1)};a.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Enter"?f(!0):h.key==="Escape"&&f(!1)}),a.addEventListener("blur",()=>f(!0)),ue("✍️ اكتب الكلام الجديد ودوس Enter")}const ks=n=>{const t=te.getBoundingClientRect();Kd.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),oi.setFromCamera(Kd,oe)};let Pn=null;const Ur=document.createElement("div");Ur.className="marquee";Ur.hidden=!0;Sn.appendChild(Ur);te.addEventListener("contextmenu",n=>n.preventDefault());te.addEventListener("pointerdown",n=>{if(Xn=[n.clientX,n.clientY],n.button!==0||Pt.axis)return;ks(n);const t=oi.intersectObjects([...ee.values()],!1)[0];if(!t){(n.pointerType==="mouse"||Rn)&&(Pn={x:n.clientX,y:n.clientY,add:n.shiftKey||Rn,moved:!1},te.setPointerCapture(n.pointerId),Rn&&(Wt.enabled=!1,n.stopImmediatePropagation()));return}if(n.shiftKey||Rn)return;const e=t.object.userData.id,i=Gt(e);if(!i)return;if(clearTimeout(mc),gc=!1,n.pointerType!=="mouse"){const a=J.slice();mc=setTimeout(()=>{if(!(Fe&&Fe.moved)){gc=!0,Fe=null,Wt.enabled=!0,J=a.includes(e)?a.filter(c=>c!==e):a.concat(e),Qe();try{navigator.vibrate&&navigator.vibrate(30)}catch{}ue(J.length>1?"☑ اخترت "+Pe(J.length)+" أشكال — اضغط مطوّل على شكل تاني تضيفه":"☑ اضغط مطوّل على شكل تاني عشان تختار الاتنين")}},480)}J.includes(e)||Bn(e);const s=J.map(Gt).filter(a=>a&&!a.lk);if(!s.length){i.lk&&ue("🔒 الشكل مقفول");return}const r=new fn(new T(0,1,0),-t.point.y),o=new T;oi.ray.intersectPlane(r,o)&&(Fe={plane:r,start:o,from:s.map(a=>[a,a.p.slice()]),moved:!1},Wt.enabled=!1,te.setPointerCapture(n.pointerId))});te.addEventListener("pointermove",n=>{if(Pn){const a=Sn.getBoundingClientRect(),c=Math.min(Pn.x,n.clientX),l=Math.min(Pn.y,n.clientY),u=Math.abs(n.clientX-Pn.x),f=Math.abs(n.clientY-Pn.y);u+f>6&&(Pn.moved=!0),Pn.moved&&(Ur.hidden=!1,Object.assign(Ur.style,{left:c-a.left+"px",top:l-a.top+"px",width:u+"px",height:f+"px"}));return}if(!Fe)return;ks(n);const t=new T;if(!oi.ray.intersectPlane(Fe.plane,t))return;let e=t.x-Fe.start.x,i=t.z-Fe.start.z;Math.hypot(e,i)>.5&&(Fe.moved=!0);const s=$n||0;s&&(e=Math.round(e/s)*s,i=Math.round(i/s)*s),Fe.moved&&clearTimeout(mc),Fe.from.forEach(([a,c])=>{a.p[0]=Dt(c[0]+e),a.p[2]=Dt(c[2]+i),ee.get(a.id).position.set(...a.p)});const[r,o]=vc(Fe.from.map(a=>a[0]));(r||o)&&Fe.from.forEach(([a])=>{a.p[0]=Dt(a.p[0]+r),a.p[2]=Dt(a.p[2]+o),ee.get(a.id).position.set(...a.p)}),Ro(!!(r||o)),ci(),te.style.cursor="grabbing"});te.addEventListener("pointerup",n=>{if(Pn){const i=Pn;if(Pn=null,Ur.hidden=!0,Wt.enabled=!0,i.moved){const s=te.getBoundingClientRect(),r=Math.min(i.x,n.clientX),o=Math.max(i.x,n.clientX),a=Math.min(i.y,n.clientY),c=Math.max(i.y,n.clientY),l=Ft.filter(u=>{const f=fe(u),h=new T;f.getCenter(h),h.project(oe);const p=s.left+(h.x+1)/2*s.width,g=s.top+(1-h.y)/2*s.height;return h.z<1&&p>=r&&p<=o&&g>=a&&g<=c}).map(u=>u.id);J=i.add?[...new Set(J.concat(l))]:l,Qe(),l.length&&ue("اخترت "+Pe(l.length)+(l.length>1?" أشكال":" شكل")),Xn=null;return}}if(clearTimeout(mc),Ro(!1),gc){gc=!1,Fe=null,Wt.enabled=!0,Xn=null;return}if(Fe){const i=Fe.moved;if(Fe=null,Wt.enabled=!0,te.style.cursor="",i){Xn=null,ne(),En();return}}if(!Xn||Math.hypot(n.clientX-Xn[0],n.clientY-Xn[1])>5||Pt.dragging){Xn=null;return}Xn=null,ks(n);const t=oi.intersectObjects([...ee.values()],!1)[0],e=n.shiftKey||Rn;if(t){const i=t.object.userData.id,s=performance.now(),r=Gt(i);if(!e&&_s.id===i&&s-_s.t<450&&r&&r.t==="text"&&!r.lk){_s={id:null,t:0},J.includes(i)||Bn(i),Im(r);return}if(!e&&_s.id===i&&s-_s.t<450&&r&&r.t==="draw"&&!r.lk){_s={id:null,t:0},J.includes(i)||Bn(i),oh("pen",r);return}_s={id:i,t:s}}t&&!e&&J.includes(t.object.userData.id)||!t&&Rn||Bn(t?t.object.userData.id:null,e)});te.addEventListener("pointermove",n=>{Fe||Pt.dragging||n.buttons||(ks(n),te.style.cursor=oi.intersectObjects([...ee.values()],!1).length?"grab":"")});const _c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,t])=>({k:"c",sx:n,sz:t})).concat([[0,-1],[1,0],[0,1],[-1,0]].map(([n,t])=>({k:"s",sx:n,sz:t})),[{k:"h",sx:0,sz:0}]),si=new Ti;un.add(si);const so=n=>new zs({color:n,depthTest:!1,depthWrite:!1,transparent:!0}),$d=new kr(1,20,14),Jd=new kr(1,20,14,0,Math.PI);function Tb(n){const t=new Ti,e=new pt($d,so(n==="c"?"#2B2F3A":"#FFFFFF"));if(e.scale.setScalar(1.4),e.renderOrder=20,t.add(e),n==="h"){const i=new pt(Jd,so("#FFFFFF")),s=new pt(Jd,so("#2B2F3A"));s.rotation.y=Math.PI,i.renderOrder=s.renderOrder=21,t.add(i,s),e.material=so("#FF8A1F")}else{const i=new pt($d,so(n==="c"?"#FFFFFF":"#2B2F3A"));i.renderOrder=21,t.add(i)}return t}_c.forEach(n=>si.add(Tb(n.k)));si.visible=!1;var Ab=!0;let Tu="",xc=null,Kn=null;const Nn=document.createElement("div");Nn.className="hlabel";Nn.hidden=!0;Sn.appendChild(Nn);function Pb(n,t,e){const i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2;return n.k==="h"?new T(i,t.max.y,s):new T(n.sx?n.sx>0?t.max.x:t.min.x:i,t.min.y,n.sz?n.sz>0?t.max.z:t.min.z:s)}let yo=!1;te.addEventListener("pointermove",n=>{if(n.pointerType!=="mouse"||Kn||!xc||J.length!==1){yo&&(yo=!1);return}const t=[],e=xc;for(const o of[e.min.x,e.max.x])for(const a of[e.min.y,e.max.y])for(const c of[e.min.z,e.max.z])t.push(Fs(new T(o,a,c)));const i=t.map(o=>o[0]),s=t.map(o=>o[1]),r=70;yo=n.clientX<Math.min(...i)-r||n.clientX>Math.max(...i)+r||n.clientY<Math.min(...s)-r-40||n.clientY>Math.max(...s)+r});te.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&!Kn&&(yo=!0)});function Cb(){const n=J.length===1?Gt(J[0]):null,t=n&&!n.lk?ee.get(n.id):null;if(si.visible=!!t&&!yo,!t)return;t.updateMatrixWorld();const e=n.id+"|"+t.geometry.uuid+"|"+t.matrixWorld.elements.map(r=>r.toFixed(3)).join(",");e!==Tu&&(Tu=e,xc=new de().setFromObject(t));const i=2*Math.tan(rs.degToRad(oe.fov/2))/Math.max(1,te.clientHeight),s=dc?1.35:1;_c.forEach((r,o)=>{const a=si.children[o],c=Pb(r,xc),l=oe.position.distanceTo(c),u=l*i*(r.k==="h"?7.5:5.2)*s;r.k==="h"&&(c.y+=u*2.4),a.position.copy(c),a.scale.setScalar(u)})}const Fs=n=>{const t=n.clone().project(oe),e=te.getBoundingClientRect();return[e.left+(t.x+1)/2*e.width,e.top+(1-t.y)/2*e.height,t.z]};te.addEventListener("pointerdown",n=>{if(!si.visible||n.button!==0||Kn)return;const t=n.pointerType==="mouse"?13:26;let e=-1,i=1/0;if(si.children.forEach((p,g)=>{const[v,m,d]=Fs(p.position),x=Math.hypot(v-n.clientX,m-n.clientY),_=x+(_c[g].k==="h"?t*.6:0);d<1&&x<t&&_<i&&(i=_,e=g)}),e<0)return;n.stopImmediatePropagation(),n.preventDefault(),Xn=null;const s=Gt(J[0]),r=ee.get(s.id),o=_c[e],a=new de().setFromObject(r),c=new T;a.getSize(c);const l=si.children[e].position.clone(),u=new fn;o.k==="h"?u.setFromNormalAndCoplanarPoint(new T(oe.position.x-l.x,0,oe.position.z-l.z).normalize(),l):u.set(new T(0,1,0),-a.min.y),ks(n);const f=new T;if(!oi.ray.intersectPlane(u,f))return;const h=[0,1,2].map(p=>{const g=new T(p===0?1:0,p===1?1:0,p===2?1:0).applyQuaternion(r.quaternion),v=[Math.abs(g.x),Math.abs(g.y),Math.abs(g.z)];return v.indexOf(Math.max(...v))});Kn={o:s,m:r,h:o,B0:a,d0:c,s0:s.s.slice(),p0:s.p.slice(),plane:u,start:f,axisMap:h},Wt.enabled=!1;try{te.setPointerCapture(n.pointerId)}catch{}{const p=Sn.getBoundingClientRect();Nn.hidden=!1,Nn.textContent=o.k==="h"?"الارتفاع "+Pe(Dt(c.y))+" ملّي":"العرض "+Pe(Dt(c.x))+" × العمق "+Pe(Dt(c.z))+" ملّي",Nn.style.left=n.clientX-p.left+16+"px",Nn.style.top=n.clientY-p.top-34+"px"}},!0);te.addEventListener("pointermove",n=>{if(!Kn)return;n.stopImmediatePropagation(),ks(n);const t=new T;if(!oi.ray.intersectPlane(Kn.plane,t))return;const{o:e,m:i,h:s,B0:r,d0:o,s0:a,p0:c,axisMap:l}=Kn,u=t.sub(Kn.start),f=$n||.1,h=E=>Math.max(1,Math.round(E/f)*f);let p=o.x,g=o.y,v=o.z;if(s.k==="h")g=h(o.y+u.y);else if(s.sx&&(p=h(o.x+u.x*s.sx)),s.sz&&(v=h(o.z+u.z*s.sz)),s.k==="c"&&(qi||Bo||n.shiftKey)){const E=Math.max(p/o.x,v/o.z);p=h(o.x*E),v=h(o.z*E)}const m=[p/(o.x||1),g/(o.y||1),v/(o.z||1)];e.s=a.map((E,w)=>E*m[l[w]]),e.p=c.slice(),i.scale.set(...e.s),i.position.set(...e.p),i.updateMatrixWorld();const d=new de().setFromObject(i),x=(E,w)=>(E.min[w]+E.max[w])/2,_=(E,w)=>w>0?r.min[E]-d.min[E]:w<0?r.max[E]-d.max[E]:x(r,E)-x(d,E);e.p=[Dt(c[0]+_("x",s.sx)),Dt(c[1]+r.min.y-d.min.y),Dt(c[2]+_("z",s.sz))],i.position.set(...e.p),ci(),Dc();const y=Sn.getBoundingClientRect();Nn.hidden=!1,Nn.textContent=s.k==="h"?"الارتفاع "+Pe(Dt(g))+" ملّي":s.k==="s"?(s.sx?"العرض "+Pe(Dt(p)):"العمق "+Pe(Dt(v)))+" ملّي":Pe(Dt(p))+" × "+Pe(Dt(v))+" ملّي",Nn.style.left=n.clientX-y.left+16+"px",Nn.style.top=n.clientY-y.top-34+"px"},!0);const Dm=n=>{Kn&&(n.stopImmediatePropagation(),Kn=null,Nn.hidden=!0,Wt.enabled=!0,Xn=null,ne(),En(),ci())};te.addEventListener("pointerup",Dm,!0);te.addEventListener("pointercancel",Dm,!0);let $n=1,ws=!0;const Qd=3;function vc(n){if(!ws||!n.length)return[0,0];const t=new Set(n.map(r=>r.id)),e=Ft.filter(r=>!t.has(r.id));if(!e.length)return[0,0];const i=new de;n.forEach(r=>i.union(fe(r)));const s=e.map(fe);return["x","z"].map((r,o)=>{const a=o?"x":"z",c=[i.min[r],i.max[r],(i.min[r]+i.max[r])/2];let l=Qd+1;return s.forEach(u=>{Math.max(u.min[a]-i.max[a],i.min[a]-u.max[a])>25||[u.min[r],u.max[r],(u.min[r]+u.max[r])/2].forEach(f=>c.forEach(h=>{const p=f-h;Math.abs(p)<Math.abs(l)&&(l=p)}))}),Math.abs(l)<=Qd&&Math.abs(l)>.01?l:0})}let tp=!1;function Ro(n){n!==tp&&(tp=n,vo.forEach(t=>t.material.color.set(n?"#18B37E":"#FF8A1F")))}function Um(){Pt.setTranslationSnap(Pt.object===ze?null:$n||null),Pt.setRotationSnap(rs.degToRad(15)),Pt.setScaleSnap(null)}Um();z("snapSel").onchange=()=>{$n=+z("snapSel").value,Um()};z("magBtn").onclick=()=>{ws=!ws,z("magBtn").classList.toggle("on",ws),z("magBtn").setAttribute("aria-pressed",String(ws)),ue(ws?"🧲 المغناطيس شغال: الأشكال بتلزق في بعض لما تقرّب":"المغناطيس اتقفل: الشكل بيتحرك بحرية")};Pt.addEventListener("dragging-changed",n=>{if(Wt.enabled=!n.value,n.value||Ro(!1),!n.value&&J.length===1){const t=Gt(J[0]);if(wb(t),Pt.mode==="scale"&&$n){const e=Oo(t);t.s=t.s.map((i,s)=>Math.max(1,Math.round(e.getComponent(s)*i/$n)*$n)/e.getComponent(s)),ee.get(t.id).scale.set(...t.s)}Pt.mode!=="translate"&&zo(t),Mr=null,ne(),En(),ci(),Pt.object===ze&&No(ee.get(t.id))}});let Bo=!1,qi=!1,ys=null;addEventListener("keydown",n=>{n.key==="Shift"&&(Bo=!0)});addEventListener("keyup",n=>{n.key==="Shift"&&(Bo=!1)});addEventListener("blur",()=>Bo=!1);Pt.addEventListener("mouseDown",()=>{const n=Pt.object;ys=n?n.scale.clone():null,n===ze&&J.length===1&&(Mr=ee.get(J[0]).position.clone(),tc=ze.position.clone())});Pt.addEventListener("objectChange",()=>{Dc();const n=Pt.object;if(n&&Pt.mode==="scale"&&(Bo||qi)&&ys){const t=(Pt.axis||"X").replace(/[^XYZ]/g,"")[0]||"X",e=t.toLowerCase(),i=ys[e]?n.scale[e]/ys[e]:1;n.scale.set(ys.x*i,ys.y*i,ys.z*i)}if(n===ze&&Pt.dragging&&J.length===1&&Mr){const t=ee.get(J[0]),e=$n||0,i=r=>e?Math.round(r/e)*e:r;t.position.set(i(Mr.x+ze.position.x-tc.x),i(Mr.y+ze.position.y-tc.y),i(Mr.z+ze.position.z-tc.z));const s=Gt(J[0]);if(s){const[r,o]=vc([s]);t.position.x+=r,t.position.z+=o,Ro(!!(r||o))}}else if(n&&Pt.mode==="translate"&&Pt.dragging&&J.length===1){const t=Gt(J[0]);if(t){const[e,i]=vc([t]);n.position.x+=e,n.position.z+=i,Ro(!!(e||i))}}ci()});const $e=document.createElement("div");$e.className="turnKnob";$e.hidden=!0;$e.innerHTML='<button class="tkGrip" title="اسحبني حوالين الشكل عشان تلفّه بأي زاوية" aria-label="لف بأي زاوية"><i>⟳</i><b>٠°</b></button><button class="tkBig" data-q="y" title="لفّه ربع لفة"><i>↻</i><span>لف</span></button><button class="tkBig" data-q="tip" title="نيّمه على وشّه"><i>⤵</i><span>نيّمه</span></button><button class="tkBig" data-q="side" title="نيّمه على جنبه"><i>⤿</i><span>على جنبه</span></button><span class="tkSep" aria-hidden="true"></span><button class="tkBig" data-q="dup" title="نسخة (Ctrl+D)"><i>⧉</i><span>نسخة</span></button><button class="tkBig danger" data-q="del" title="امسح (Delete)"><i>🗑</i><span>امسح</span></button>';Sn.appendChild($e);const qn=document.createElement("div");qn.className="turnRing";qn.hidden=!0;Sn.appendChild(qn);const Fm=new T(0,1,0),eh=n=>{const t=ee.get(n.id),e=fe(n);return{m:t,q0:t.quaternion.clone(),c0:e.getCenter(new T),y0:Math.max(0,e.min.y)}};function nh(n,t,e,i=Fm){const{m:s,q0:r,c0:o,y0:a}=t;s.quaternion.copy(r).premultiply(new De().setFromAxisAngle(i,e));const c=new Li().setFromQuaternion(s.quaternion),l=h=>{const p=Math.round(h/(Math.PI/180))*(Math.PI/180);return Math.abs(p-h)<1e-4?p:h};n.r=[l(c.x),l(c.y),l(c.z)],s.rotation.set(...n.r),s.updateMatrixWorld();const u=fe(n).getCenter(new T);n.p=[Dt(n.p[0]+o.x-u.x),n.p[1],Dt(n.p[2]+o.z-u.z)],s.position.set(...n.p);const f=fe(n);n.p[1]=Dt(n.p[1]+a-f.min.y),s.position.y=n.p[1],s.updateMatrixWorld(),ci(),Dc()}let Jl=!1;function Ql(n,t,e){if(Jl)return;Jl=!0;const i=eh(n),s=performance.now(),r=280;(function o(){const a=Math.min(1,(performance.now()-s)/r),c=a<1?1-Math.pow(1-a,3):1;nh(n,i,e*c,t),a<1?requestAnimationFrame(o):(Jl=!1,ne(),En(),Pt.object===ze&&No(ee.get(n.id)))})()}const Rb=()=>{const{fwd:n,right:t}=Ym();return{fwd:new T(n[0],0,n[1]),right:new T(t[0],0,t[1])}};function Lb(n){const t=Gt(J[0]);if(!t)return;if(n==="dup")return sh();if(n==="del")return Fc();if(t.lk){ue("🔒 الشكل مقفول");return}const{fwd:e,right:i}=Rb();n==="y"?Ql(t,Fm,-Math.PI/2):n==="tip"?Ql(t,i,Math.PI/2):Ql(t,e,-Math.PI/2)}$e.querySelectorAll("[data-q]").forEach(n=>n.onclick=()=>Lb(n.dataset.q));const Ib=()=>J.length===1&&Gt(J[0])&&!(Fe&&Fe.moved)&&!Pt.dragging&&!Kn&&!Pn,Db=n=>(n<0?"−":"")+Pe(Math.abs(Math.round(n)))+"°";let qe=null;function Ub(){if(!Ib()){$e.hidden=qn.hidden=!0;return}const n=Gt(J[0]),t=fe(n),e=t.getCenter(new T),i=e.clone();i.y=t.max.y;const s=Sn.getBoundingClientRect(),[r,o]=Fs(e),[a,c,l]=Fs(i);if(l>1){$e.hidden=qn.hidden=!0;return}$e.hidden=!1,$e.classList.toggle("rot",Pt.mode==="rotate"&&!n.lk),$e.classList.toggle("lk",!!n.lk);const u=$e.offsetWidth||300,f=Math.max(u/2+8,Math.min(s.width-u/2-8,a-s.left)),h=Math.max(78,c-s.top-40);if($e.style.left=f+"px",$e.style.top=h+"px",qe){qn.hidden=!1;const p=Math.max(46,Math.hypot(qe.px-r,qe.py-o));qn.style.left=r-s.left+"px",qn.style.top=o-s.top+"px",qn.style.width=qn.style.height=2*p+"px"}else qn.hidden=!0}const Ns=$e.querySelector(".tkGrip");Ns.addEventListener("pointerdown",n=>{const t=Gt(J[0]);if(!t||t.lk)return;n.preventDefault(),n.stopPropagation(),Ns.setPointerCapture(n.pointerId);const e=fe(t),[i,s]=Fs(e.getCenter(new T));qe={o:t,st:eh(t),cx:i,cy:s,a0:Math.atan2(n.clientY-s,n.clientX-i),px:n.clientX,py:n.clientY,d:0},Wt.enabled=!1,$e.classList.add("on")});Ns.addEventListener("pointermove",n=>{if(!qe)return;qe.px=n.clientX,qe.py=n.clientY;let t=Math.atan2(n.clientY-qe.cy,n.clientX-qe.cx)-qe.a0;t=Math.atan2(Math.sin(t),Math.cos(t));const e=oe.position.y>=Wt.target.y?1:-1,i=n.shiftKey?1:15,s=Math.round(-t*e*180/Math.PI/i)*i;s!==qe.d&&(qe.d=s,nh(qe.o,qe.st,rs.degToRad(s)),Ns.querySelector("b").textContent=Db(s))});const Nm=()=>{if(!qe)return;const n=qe.d!==0;qe=null,Wt.enabled=!0,$e.classList.remove("on"),Ns.querySelector("b").textContent="٠°",n&&(ne(),En())};Ns.addEventListener("pointerup",Nm);Ns.addEventListener("pointercancel",Nm);(function n(){Ub(),requestAnimationFrame(n)})();function Mo(n){Pt.setMode(n),Mm(),n==="rotate"&&J.length===1&&ue("دوس ↻ «لف» يلفّه ربع لفة، أو اسحب الزرار ⟳ حوالين الشكل لأي زاوية"),document.querySelectorAll(".tb.mode").forEach(t=>t.classList.toggle("on",t.dataset.mode===n))}document.querySelectorAll(".tb.mode").forEach(n=>n.onclick=()=>Mo(n.dataset.mode));function zo(n){const t=fe(n);t.min.y<0&&(n.p[1]=Dt(n.p[1]-t.min.y),ee.get(n.id).position.y=n.p[1])}function Om(){J.length&&(J.forEach(n=>{const t=Gt(n),e=fe(t);t.p[1]=Dt(t.p[1]-e.min.y),ee.get(n).position.y=t.p[1]}),ci(),ne())}z("dropBtn").onclick=Om;function ih(n,t){const e=Ft.map(i=>fe(i));for(let i=0;i<6;i++)for(let s=0;s<Math.max(1,i*8);s++){const r=s/Math.max(1,i*8)*Math.PI*2,o=Math.round(Math.cos(r)*i*30/5)*5,a=Math.round(Math.sin(r)*i*30/5)*5,c=new de(new T(o-n/2,0,a-t/2),new T(o+n/2,1,a+t/2));if(!e.some(l=>l.intersectsBox(c)))return[o,a]}return[0,0]}function ko(n,t,e,i){if(Ri[n])return Fb(n,i);const s=n==="text"&&!e;s&&(e="نص");const r=n==="text"?z("txtFont").value:null,o=n==="text"?Oo({t:n,txt:e,fnt:r}):ss[n],[a,c]=i||ih(o.x,o.z),l=i&&i[2]||0,u={id:kn(),t:n,c:t?"#8E9AAF":$u[Ft.length%7],h:!!t,p:[a,Dt(l+o.y/2),c],r:[0,0,0],s:[1,1,1]};cn[n]&&cn[n].poly&&(u.t="poly",u.n=cn[n].poly),n==="text"&&(u.txt=e,r&&r!==is[0][0]&&(u.fnt=r)),Ft.push(u),Re(),Bn(u.id),ne(),n==="text"&&s&&setTimeout(()=>Im(u),60)}function Bm(n){const t=new de;return Ri[n].parts.forEach(e=>{const i=new pt(es[e.t]);i.position.set(...e.p),i.rotation.set(...e.r),i.scale.set(...e.s),i.updateMatrixWorld(),t.union(new de().setFromObject(i))}),t}function Fb(n,t){const e=Bm(n),i=new T;e.getSize(i);const[s,r]=t||ih(i.x,i.z),o=t&&t[2]||0,a=Ri[n].parts.map(c=>({id:kn(),t:c.t,c:c.c,h:!1,p:[Dt(c.p[0]+s),Dt(c.p[1]+o-e.min.y),Dt(c.p[2]+r)],r:c.r.slice(),s:c.s.slice()}));Ft.push(...a),Re(),J=a.map(c=>c.id),Qe(),ne(),ue("✨ "+Ri[n].ar+" جاهز! كل جزء تقدر تغيّره، أو دوس «جمّع» يبقى قطعة واحدة")}function sh(){if(!J.length)return;const n=[];J.forEach(t=>{const e=JSON.parse(JSON.stringify(Gt(t)));e.id=kn(),e.p[0]+=25,e.p[2]+=25,e.kids&&e.kids.forEach(i=>{i.p[0]+=25,i.p[2]+=25}),e.o&&(e.o[0]+=25,e.o[2]+=25),Ft.push(e),n.push(e.id)}),Re(),J=n,Qe(),ne()}function Fc(){if(J.length){if(J.some(n=>Gt(n).lk)){ue("🔒 فيه شكل مقفول. افتح القفل الأول");return}Ft=Ft.filter(n=>!J.includes(n.id)),J=[],Re(),ne()}}function Ho(n){if(n=n===!0,J.length<2){ue("اختار شكلين أو أكتر الأول (Shift + ضغطة)");return}const t=[];Ft.filter(a=>J.includes(a.id)).forEach(a=>{if(a.t==="group"){const c=Rc(a).multiply(new se().makeTranslation(-a.o[0],-a.o[1],-a.o[2]));a.kids.forEach(l=>t.push(zm(l,c,a.h)))}else t.push(JSON.parse(JSON.stringify(a)))}),t.some(a=>!a.h)||t.forEach(a=>a.h=!0);const e={t:"group",kids:t,o:[0,0,0]};let i;try{i=Tm(e)}catch{ue("مقدرتش أجمّع الأشكال دي، جرّب تحرّكهم شوية");return}const s=new T;i.boundingBox.getCenter(s);const r=[Dt(s.x),Dt(s.y),Dt(s.z)],o={id:kn(),t:"group",kids:t,o:r.slice(),c:(t.find(a=>!a.h)||t[0]).c,h:t.every(a=>a.h),p:r.slice(),r:[0,0,0],s:[1,1,1]};if(Ft=Ft.filter(a=>!J.includes(a.id)).concat(o),n){J=[o.id];return}Re(),Bn(o.id),ne(),ue(t.some(a=>a.h)&&t.some(a=>!a.h)?"✨ الفتحة خرّمت الشكل!":"✨ اتجمّعوا في شكل واحد")}function zm(n,t,e){const i=t.clone().multiply(Rc(n)),s=new T,r=new De,o=new T;i.decompose(s,r,o);const a=new Li().setFromQuaternion(r);return Object.assign(JSON.parse(JSON.stringify(n)),{id:kn(),p:s.toArray().map(Dt),r:[a.x,a.y,a.z],s:o.toArray(),h:n.h||!!e&&n.h})}function rh(){const n=Ft.filter(e=>J.includes(e.id)&&e.t==="group");if(!n.length)return;let t=[];n.forEach(e=>{const i=Rc(e).multiply(new se().makeTranslation(-e.o[0],-e.o[1],-e.o[2])),s=e.kids.map(r=>zm(r,i));t=t.concat(s)}),Ft=Ft.filter(e=>!n.includes(e)).concat(t),Re(),J=t.map(e=>e.id),Qe(),ne()}async function km(){const n=(z("txtIn").value||"").trim().slice(0,24);if(!n){ue("اكتب كلمة الأول ✍️"),z("txtIn").focus();return}try{await document.fonts.load("800 120px "+fc(),n)}catch{}await Fo(z("txtFont").value,n),ko("text",!1,n)}z("txtFont").innerHTML=fm(is[0][0]);z("pFont").innerHTML=fm(is[0][0]);z("txtFont").addEventListener("change",()=>{z("txtIn").style.fontFamily='"'+z("txtFont").value+'"',Fo(z("txtFont").value)});z("pFont").addEventListener("change",async()=>{const n=Gt(J[0]);if(!n||n.t!=="text"||n.lk)return;await Fo(z("pFont").value,n.txt);const t=Math.abs(fe(n).min.y)<.6;n.fnt=z("pFont").value,Re(),t&&zo(n),Bn(n.id),ne()});z("txtAdd").onclick=km;z("txtIn").addEventListener("keydown",n=>{n.key==="Enter"&&km()});const $i=100,bi=400,Nb=bi/$i;function Hm(n,t=10){const e=n.length,i=[];for(let s=0;s<e;s++){const r=n[(s-1+e)%e],o=n[s],a=n[(s+1)%e],c=n[(s+2)%e];for(let l=0;l<t;l++){const u=l/t,f=u*u,h=f*u;i.push([0,1].map(p=>.5*(2*o[p]+(-r[p]+a[p])*u+(2*r[p]-5*o[p]+4*a[p]-c[p])*f+(-r[p]+3*o[p]-3*a[p]+c[p])*h)))}}return i}const qa=new Map;function Ob(n,t){const e=n.filter((h,p)=>!p||Math.hypot(h[0]-n[p-1][0],h[1]-n[p-1][1])>1e-6),i=e.length;if(i<2)return null;const s=h=>{const p=e[h],g=e[h+1],v=Math.hypot(g[0]-p[0],g[1]-p[1])||1;return[(g[0]-p[0])/v,(g[1]-p[1])/v]},r=[],o=[];for(let h=0;h<i;h++){const p=s(Math.max(0,h-1)),g=s(Math.min(i-2,h)),v=[-p[1],p[0]],m=[-g[1],g[0]];let d=v[0]+m[0],x=v[1]+m[1];const _=Math.hypot(d,x)||1;d/=_,x/=_;const y=t/Math.max(.45,d*m[0]+x*m[1]);r.push([e[h][0]+d*y,e[h][1]+x*y]),o.push([e[h][0]-d*y,e[h][1]-x*y])}const a=(h,p,g=8)=>{const v=[];for(let m=1;m<g;m++){const d=p-Math.PI*m/g;v.push([h[0]+Math.cos(d)*t,h[1]+Math.sin(d)*t])}return v},c=s(i-2),l=s(0),u=Math.atan2(c[0],-c[1]),f=Math.atan2(-l[0],l[1]);return r.concat(a(e[i-1],u),o.reverse(),a(e[0],f))}function Gm(n){const t=JSON.stringify([n.pts,n.sm?1:0,n.rd||0,n.open?n.lw||3:0]);if(qa.has(t))return qa.get(t);if(n.open){let s;try{const r=Ob(n.pts.map(([o,a])=>[o,-a]),(n.lw||3)/2);s=ei(ti(r),10,0)}catch{s=new me(10,10,10)}return s=Eu(s),qa.set(t,s),s}const e=(n.sm?Hm(n.pts):n.pts).map(([s,r])=>[s,-r]);let i;try{i=ei(ti(e),10,Math.min(n.rd||0,2))}catch{i=new me(10,10,10)}return i=Eu(i),qa.set(t,i),i}function Au(n,t){if(n.length<3)return n;const e=n[0],i=n[n.length-1];let s=0,r=0;for(let o=1;o<n.length-1;o++){const[a,c]=n[o],l=Math.abs((i[1]-e[1])*a-(i[0]-e[0])*c+i[0]*e[1]-i[1]*e[0])/(Math.hypot(i[0]-e[0],i[1]-e[1])||1);l>r&&(r=l,s=o)}return r>t?Au(n.slice(0,s+1),t).slice(0,-1).concat(Au(n.slice(s),t)):[e,i]}let Et=null;function oh(n,t){let e=z("drawModal");if(!e){e=document.createElement("div"),e.className="modal",e.id="drawModal",e.hidden=!0,e.innerHTML='<div class="mcard drawcard" role="dialog" aria-modal="true" aria-labelledby="drT"><h2 id="drT"></h2><p class="sub" id="drSay"></p><div class="drmodes" role="radiogroup" aria-label="الأداة"><button class="btn ghost small" data-dm="free">✏️ رسم حر</button><button class="btn ghost small" data-dm="pen">🖊️ قلم</button><label class="drsm" id="drSmL"><input type="checkbox" id="drSm"> منحني</label></div><canvas id="drCan" width="'+bi+'" height="'+bi+'" aria-label="مساحة الرسم: ١٠٠ × ١٠٠ ملّي"></canvas><div class="drrow"><label>الارتفاع <input type="number" id="drH" min="1" max="100" step="1" value="10"> ملّي</label><label id="drWL">سُمك الخط <input type="number" id="drW" min="1" max="20" step="0.5" value="3"> ملّي</label><span class="sub" id="drSize"></span></div><div class="drrow"><button class="btn ghost small" id="drUndo">↶ آخر نقطة</button><button class="btn ghost small" id="drClear">🧹 امسح</button><span style="flex:1"></span><button class="btn ghost small" id="drCancel">إلغاء</button><button class="btn run small" id="drOk">✓ حطه في التصميم</button></div></div>',document.body.appendChild(e);const i=z("drCan");e.querySelectorAll("[data-dm]").forEach(o=>o.onclick=()=>{Et.mode=o.dataset.dm,Et.pts=[],ep()}),z("drSm").onchange=()=>{Et.sm=z("drSm").checked,Si()},z("drW").oninput=()=>{Et.lw=Math.max(1,Math.min(20,+z("drW").value||3)),Si()},z("drUndo").onclick=()=>{Et.pts.pop(),Si()},z("drClear").onclick=()=>{Et.pts=[],Si()},z("drCancel").onclick=()=>{e.hidden=!0,Et=null},e.addEventListener("click",o=>{o.target===e&&(e.hidden=!0,Et=null)}),z("drOk").onclick=np;const s=o=>{const a=i.getBoundingClientRect();return[Math.round(((o.clientX-a.left)/a.width*$i-$i/2)*2)/2,Math.round(((o.clientY-a.top)/a.height*$i-$i/2)*2)/2]};i.addEventListener("pointerdown",o=>{if(!Et)return;o.preventDefault(),i.setPointerCapture(o.pointerId);const a=s(o);if(Et.mode==="free")Et.pts=[a],Et.down=!0;else{const c=Et.pts.findIndex(l=>Math.hypot(l[0]-a[0],l[1]-a[1])<3.5);if(c===0&&Et.pts.length>=3){np();return}c>=0?Et.move=c:(Et.pts.push(a),Et.move=Et.pts.length-1)}Si()}),i.addEventListener("pointermove",o=>{if(!Et)return;const a=s(o);if(Et.mode==="free"&&Et.down){const c=Et.pts[Et.pts.length-1];Math.hypot(c[0]-a[0],c[1]-a[1])>=1&&(Et.pts.push(a),Si())}else Et.mode==="pen"&&Et.move!=null&&(Et.pts[Et.move]=a,Si())});const r=()=>{Et&&(Et.mode==="free"&&Et.down&&(Et.down=!1,Et.pts=Au(Et.pts,.5),Si()),Et.move=null)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("contextmenu",o=>o.preventDefault())}Et={mode:n,pts:t?t.pts.map(i=>i.slice()):[],sm:t?!!t.sm:!1,edit:t||null,move:null,lw:t&&t.lw||3},t&&(Et.mode=t.open?"free":"pen"),z("drW").value=Et.lw,z("drH").value=t?Math.max(1,Math.round(10*(t.s[1]||1))):10,e.hidden=!1,ep()}function ep(){z("drT").textContent=Et.edit?"✏️ عدّل الرسمة":Et.mode==="free"?"✏️ رسم حر":"🖊️ القلم",z("drSay").textContent=Et.mode==="free"?"ارسم بصباعك أو بالماوس، والخط بيطلع مجسّم زي ما رسمته بالظبط (مش بيتقفل). ارسم تاني لو عايز تبدأ من الأول.":"دوس عشان تحط نقط، واسحب أي نقطة تحرّكها. دوس على أول نقطة (أو «حطه») عشان تقفل الشكل.",document.querySelectorAll("#drawModal [data-dm]").forEach(n=>n.setAttribute("aria-checked",String(n.dataset.dm===Et.mode))||n.classList.toggle("on",n.dataset.dm===Et.mode)),z("drSmL").hidden=Et.mode!=="pen",z("drWL").hidden=Et.mode!=="free",z("drSm").checked=Et.sm,z("drUndo").hidden=Et.mode!=="pen",Si()}function Bb(){return Et.mode==="pen"&&Et.sm&&Et.pts.length>=3?Hm(Et.pts):Et.pts}function Si(){const n=z("drCan").getContext("2d"),t=Nb,e=o=>(o+$i/2)*t;n.clearRect(0,0,bi,bi),n.fillStyle="#fff",n.fillRect(0,0,bi,bi);for(let o=0;o<=$i;o+=5)n.strokeStyle=o%10?"#EEF1F8":"#DCE2EF",o===$i/2&&(n.strokeStyle="#B9C3D8"),n.lineWidth=1,n.beginPath(),n.moveTo(o*t+.5,0),n.lineTo(o*t+.5,bi),n.moveTo(0,o*t+.5),n.lineTo(bi,o*t+.5),n.stroke();const i=Bb();if(!i.length){z("drSize").textContent="";return}n.beginPath(),i.forEach(([o,a],c)=>c?n.lineTo(e(o),e(a)):n.moveTo(e(o),e(a))),Et.mode==="free"?(n.strokeStyle="rgba(30,123,255,.55)",n.lineWidth=Math.max(2,(Et.lw||3)*t),n.lineJoin=n.lineCap="round",n.stroke(),n.lineCap="butt"):(i.length>=3&&(n.closePath(),n.fillStyle="rgba(30,123,255,.18)",n.fill()),n.strokeStyle="#1E7BFF",n.lineWidth=3,n.lineJoin="round",n.stroke()),Et.mode==="pen"&&Et.pts.forEach(([o,a],c)=>{n.beginPath(),n.arc(e(o),e(a),c===0?8:6,0,Math.PI*2),n.fillStyle=c===0?"#FF8A1F":"#fff",n.fill(),n.strokeStyle="#1E7BFF",n.lineWidth=2.5,n.stroke()});const s=i.map(o=>o[0]),r=i.map(o=>o[1]);z("drSize").textContent=i.length>=(Et.mode==="free"?2:3)?Pe(Math.round(Math.max(...s)-Math.min(...s)))+" × "+Pe(Math.round(Math.max(...r)-Math.min(...r)))+" ملّي":""}function np(){if(!Et)return;let n=Et.pts;const t=Et.mode==="free",e=Et.lw||3;if(n.length<(t?2:3)){ue(t?"ارسم خط أطول شوية ✏️":"محتاج ٣ نقط على الأقل 🖊️");return}const i=n.map(l=>l[0]),s=n.map(l=>l[1]);if(t?Math.max(Math.max(...i)-Math.min(...i),Math.max(...s)-Math.min(...s))<2:Math.max(...i)-Math.min(...i)<2||Math.max(...s)-Math.min(...s)<2){ue("الشكل صغير قوي، ارسمه أكبر شوية");return}const r=(Math.max(...i)+Math.min(...i))/2,o=(Math.max(...s)+Math.min(...s))/2;n=n.map(([l,u])=>[Math.round((l-r)*2)/2,Math.round((u-o)*2)/2]);const a=Math.max(1,Math.min(100,+z("drH").value||10)),c=Et.mode==="pen"&&Et.sm;if(Et.edit){const l=Et.edit;ch(l,()=>{l.pts=n,l.sm=c,l.s=[1,a/10,1],t?(l.open=1,l.lw=e):(delete l.open,delete l.lw)})}else{const l=Gm(t?{pts:n,open:1,lw:e}:{pts:n,sm:c}),u=new T;l.boundingBox.getSize(u);const[f,h]=ih(u.x,u.z),p={id:kn(),t:"draw",pts:n,sm:c,c:$u[Ft.length%7],h:!1,p:[f,Dt(a/2),h],r:[0,0,0],s:[1,a/10,1]};t&&(p.open=1,p.lw=e,delete p.sm),Ft.push(p),Re(),Bn(p.id),ne()}z("drawModal").hidden=!0,Et=null}z("drawFree").onclick=()=>oh("free");z("drawPen").onclick=()=>oh("pen");z("textTool")&&(z("textTool").onclick=()=>{const n=z("txtRow");n.hidden=!n.hidden,z("textTool").classList.toggle("on",!n.hidden),n.hidden||z("txtIn").focus()});async function So(n,t,e){if(!n||n.t!=="text"||n.lk||!t)return;try{await document.fonts.load("800 120px "+fc(),t)}catch{}if(!Ft.includes(n)&&!Gt(n.id))return;const i=Math.abs(fe(n).min.y)<.6;n.txt=t,Re(),i&&zo(n),J[0]===n.id&&Qe(),e&&ne()}z("pTxt").addEventListener("change",()=>{const n=Gt(J[0]),t=(z("pTxt").value||"").trim().slice(0,24);!n||!t||(t!==n.txt?So(n,t,!0):dn[gn]!==JSON.stringify(Ft)&&ne())});{let n=0;z("pTxt").addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>{const t=Gt(J[0]),e=(z("pTxt").value||"").trim().slice(0,24);t&&e&&e!==t.txt&&So(t,e,!1)},250)})}document.fonts&&Promise.all([...new Set(Ft.flatMap(n=>[n,...n.kids||[]]).filter(n=>n.fnt).map(n=>n.fnt))].map(n=>Fo(n))).then(()=>document.fonts.ready).then(()=>{Ft.some(n=>n.t==="text"||(n.kids||[]).some(t=>t.t==="text"))&&(co.clear(),xo.clear(),Re())});function zb(){const n=z("clearAll");if(Ft.length){if(n.dataset.sure!=="1"){n.dataset.sure="1",n.classList.add("armed"),ue("دوس تاني عشان تمسح كل الأشكال 🧹"),setTimeout(()=>{n.dataset.sure="",n.classList.remove("armed")},2500);return}n.dataset.sure="",n.classList.remove("armed"),Ft=[],J=[],Re(),ne(),ue("🧹 اتمسح كل حاجة (تقدر ترجّع بـ ↶)")}}z("clearAll").onclick=zb;z("ratioBtn").onclick=()=>{qi=!qi,z("ratioBtn").classList.toggle("on",qi),z("ratioBtn").textContent=qi?"🔗 نفس النسبة":"⛓️‍💥 حر",ue(qi?"🔗 المقاس هيكبر ويصغر بنفس النسبة":"كل اتجاه لوحده (Shift للنسبة)")};z("dupBtn").onclick=sh;z("delBtn").onclick=Fc;z("groupBtn").onclick=Ho;z("ungroupBtn").onclick=rh;const Vm=n=>'<svg viewBox="0 0 48 48" aria-hidden="true">'+gm[n]+"</svg>",tu=n=>'<button class="shp" data-s="'+n+'">'+Vm(n)+cn[n].ar+"</button>";z("shapeList").innerHTML=tu("box")+tu("cyl")+'<button class="shp" data-s="text"><svg viewBox="0 0 48 48" aria-hidden="true"><text class="txtIco" x="24" y="31" text-anchor="middle">نص</text></svg>نص</button>'+Object.keys(cn).filter(n=>n!=="box"&&n!=="cyl").map(tu).join("");z("presetList").innerHTML=Object.keys(Ri).map(n=>'<button class="shp" data-s="'+n+'">'+Vm(n)+Ri[n].ar+"</button>").join("");z("holeList").innerHTML=["box","cyl"].map(n=>'<button class="shp" data-h="'+n+'"><svg viewBox="0 0 48 48" aria-hidden="true" style="opacity:.55;filter:grayscale(1)">'+gm[n]+"</svg>"+(n==="box"?"فتحة مربعة":"فتحة دايرة")+"</button>").join("");document.querySelectorAll("[data-s]").forEach(n=>n.onclick=()=>{n._dragged||performance.now()-(n._dragT||0)<600||ko(n.dataset.s,!1)});document.querySelectorAll("[data-h]").forEach(n=>n.onclick=()=>{n._dragged||performance.now()-(n._dragT||0)<600||ko(n.dataset.h,!0)});const kb=()=>getComputedStyle(document.querySelector(".shapes")).flexDirection==="row";document.querySelectorAll(".shp[data-s], .shp[data-h]").forEach(n=>n.addEventListener("pointerdown",t=>{if(t.button!==0)return;const e=t.clientX,i=t.clientY,s=t.pointerType!=="mouse",r=n.dataset.s||n.dataset.h,o=!!n.dataset.h;let a=null,c=null,l=null;const u=p=>{const g=p.clientX-e,v=p.clientY-i;if(!a){if(Math.hypot(g,v)<10)return;if(s&&(kb()?Math.abs(v)<Math.abs(g):Math.abs(g)<Math.abs(v))){h();return}a=document.createElement("div"),a.className="shpGhost",a.innerHTML=n.querySelector("svg").outerHTML,document.body.appendChild(a),n._dragged=!0;try{n.setPointerCapture(p.pointerId)}catch{}}p.preventDefault(),a.style.left=p.clientX+"px",a.style.top=p.clientY+"px";const m=document.elementFromPoint(p.clientX,p.clientY)===te;a.classList.toggle("ok",m),l=m?ip(p,r,o):null,l&&!c&&(c=Hb(r,o)),c&&(c.visible=!!l,l&&Gb(c,r,l)),a.classList.toggle("over3d",!!l)},f=p=>{if(a){n._dragT=performance.now();const g=document.elementFromPoint(p.clientX,p.clientY)===te;if(a.remove(),a=null,g){const v=ip(p,r,o);v&&ko(r,o,void 0,v)}else ue("سيب الشكل فوق مساحة التصميم");setTimeout(()=>n._dragged=!1,600)}h()},h=()=>{removeEventListener("pointermove",u),removeEventListener("pointerup",f),removeEventListener("pointercancel",f),a&&(a.remove(),a=null),c&&(un.remove(c),c=null)};addEventListener("pointermove",u,{passive:!1}),addEventListener("pointerup",f),addEventListener("pointercancel",f)}));function ip(n,t,e){ks(n);const i=new T;if(!oi.ray.intersectPlane(new fn(new T(0,1,0),0),i))return null;let s=0;if(ws&&!e){const o=oi.intersectObjects([...ee.values()],!1).find(a=>a.face&&a.face.normal.clone().transformDirection(a.object.matrixWorld).y>.6&&!Gt(a.object.userData.id).h);o&&(i.copy(o.point),s=Dt(o.point.y))}const r=$n||1;return[Math.round(i.x/r)*r,Math.round(i.z/r)*r,s]}const sp=new Uo({color:"#1E7BFF",transparent:!0,opacity:.55,roughness:.5,depthWrite:!1});function Hb(n,t){const e=new Ti;if(Ri[n])Ri[n].parts.forEach(i=>{const s=new pt(es[i.t],new Uo({color:i.c,transparent:!0,opacity:.7,depthWrite:!1}));s.position.set(...i.p),s.rotation.set(...i.r),s.scale.set(...i.s),e.add(s)});else if(es[n])e.add(new pt(es[n],t?Lc:sp));else if(n==="text")try{e.add(new pt(mm("نص",z("txtFont").value),sp))}catch{}return e.renderOrder=3,un.add(e),e}function Gb(n,t,e){const i=Ri[t]?-Bm(t).min.y:ss[t]?ss[t].y/2:t==="text"?Oo({t:"text",txt:"نص",fnt:z("txtFont").value}).y/2:0;n.position.set(e[0],e[2]+i,e[1])}z("swatches").innerHTML=$u.map(n=>'<button data-c="'+n+'" style="background:'+n+'" aria-label="'+n+'"></button>').join("");function En(){const n=J.length===1?Gt(J[0]):null;if(z("props").hidden=!n,z("multi").hidden=J.length<2,J.length>=2&&(z("multi").innerHTML="اخترت "+Pe(J.length)+' أشكال<button class="btn run small" id="mGroup">⊕ جمّعهم</button><small class="sub">«جمّعهم» بيخليهم قطعة واحدة تتحرك مع بعض.</small><b class="lbl">رصّهم (Align)</b><div class="alignG">'+[["X",["⇤","⊕","⇥"]],["Y",["⤓","⊕","⤒"]],["Z",["⇤","⊕","⇥"]]].map(([i,s],r)=>"<span>"+i+"</span>"+s.map((o,a)=>'<button class="tb" data-al="'+r+","+a+'" title="'+i+" "+["البداية","النص","النهاية"][a]+'">'+o+"</button>").join("")).join("")+"</div>",z("mGroup").onclick=Ho,z("multi").querySelectorAll("[data-al]").forEach(i=>i.onclick=()=>{const[s,r]=i.dataset.al.split(",").map(Number);jm(s,r)})),!n)return;z("pTitle").textContent=n.t==="group"?"مجموعة":n.t==="text"?"نص":n.t==="draw"?"رسمة":n.t==="poly"?Wm(n.n):cn[n.t].ar,ah(n),z("pTxtRow").hidden=n.t!=="text",n.t==="text"&&document.activeElement!==z("pTxt")&&(z("pTxt").value=n.txt),n.t==="text"&&(z("pFont").value=n.fnt||is[0][0]),z("pSolid").classList.toggle("on",!n.h),z("pHole").classList.toggle("on",n.h),z("swatches").querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.c===n.c&&!n.h));const t=Oo(n);z("dW").value=Dt(t.x*Math.abs(n.s[0])),z("dD").value=Dt(t.z*Math.abs(n.s[2])),z("dH").value=Dt(t.y*Math.abs(n.s[1]));const e=fe(n);z("pX").value=Dt(n.p[0]),z("pZ").value=Dt(n.p[2]),z("pY").value=Dt(e.min.y),["rX","rY","rZ"].forEach((i,s)=>z(i).value=Math.round(rs.radToDeg(n.r[s]))),["dW","dD","dH","pX","pY","pZ","rX","rY","rZ"].forEach(i=>z(i).disabled=!!n.lk)}const Vb={3:"مثلث",4:"مربع",5:"خماسي",6:"سداسي",7:"سباعي",8:"ثماني",9:"تساعي",10:"عشاري",12:"اثنا عشري"},Wm=n=>n>=Ci?"أسطوانة":Vb[n]||"مضلع "+Pe(n)+" أوجه",Xm=n=>n.t==="poly"||n.t==="cyl"||n.t==="cone",qm=n=>n.t==="poly"||!!(cn[n.t]&&cn[n.t].rd),Wb=n=>n.t==="box"||n.t==="poly"||n.t==="cyl"||n.t==="oval"?9:n.t==="roof"?4:n.t==="wedge"?3:n.t==="arch"?2:1.5;function ah(n){const t=Xm(n)&&!n.lk,e=qm(n)&&!n.lk;if(z("pShape").hidden=!t&&!e,z("pSidesRow").hidden=!t,z("pRoundRow").hidden=!e,t){const i=n.n||Ci;z("pSides").value=i,z("pSidesV").textContent=i>=Ci?"◯":Pe(i)}e&&(z("pRound").max=Wb(n),z("pRound").value=n.rd||0,z("pRoundV").textContent=Pe(Dt(n.rd||0))+" ملّي")}function ch(n,t){const e=Math.abs(fe(n).min.y)<.6;t(),n.n>=Ci&&n.t!=="poly"&&delete n.n,n.rd||delete n.rd,Re(),e&&zo(n),ci(),Tu=""}z("pSides").addEventListener("input",()=>{const n=Gt(J[0]);!n||!Xm(n)||(ch(n,()=>{n.n=+z("pSides").value}),ah(n),z("pTitle").textContent=n.t==="poly"?Wm(n.n||Ci):cn[n.t].ar)});z("pRound").addEventListener("input",()=>{const n=Gt(J[0]);!n||!qm(n)||(ch(n,()=>{n.rd=Dt(+z("pRound").value)}),ah(n))});["pSides","pRound"].forEach(n=>z(n).addEventListener("change",()=>ne()));z("pClose").onclick=()=>Bn(null);z("pFold").onclick=()=>{const n=z("props").classList.toggle("folded"),t=z("pFold");t.setAttribute("aria-expanded",String(!n)),t.title=n?"افتح القائمة":"اطوي القائمة",t.setAttribute("aria-label",t.title)};z("pSolid").onclick=()=>{const n=Gt(J[0]);n.h&&(n.h=!1,n.kids&&n.kids.every(t=>t.h)&&n.kids.forEach(t=>t.h=!1),Re(),Qe(),ne())};z("pHole").onclick=()=>{const n=Gt(J[0]);n.h||(n.h=!0,Re(),Qe(),ne())};z("swatches").onclick=n=>{const t=n.target.closest("[data-c]");if(!t||!J.length)return;const e=Gt(J[0]);e.c=t.dataset.c,e.h=!1,Re(),Qe(),ne()};[["dW",0,"x"],["dH",1,"y"],["dD",2,"z"]].forEach(([n,t,e])=>z(n).addEventListener("change",()=>{const i=Gt(J[0]);if(!i)return;const s=Math.min(400,Math.max(1,+z(n).value||1)),r=Oo(i);if(i.lk)return;const o=Math.abs(fe(i).min.y)<.6,a=Math.sign(i.s[t]||1)*s/r[e];if(qi){const c=a/(i.s[t]||1);i.s=i.s.map(l=>l*c)}else i.s[t]=a;if(ee.get(i.id).scale.set(...i.s),o){const c=fe(i);i.p[1]=Dt(i.p[1]-c.min.y),ee.get(i.id).position.y=i.p[1]}ci(),ne(),En()}));const Hs=n=>{const t=ee.get(n.id);t.position.set(...n.p),t.rotation.set(...n.r),t.scale.set(...n.s),ci(),Dc()};[["pX",0],["pZ",2]].forEach(([n,t])=>z(n).addEventListener("change",()=>{const e=Gt(J[0]);!e||e.lk||(e.p[t]=Dt(+z(n).value||0),Hs(e),ne(),En())}));z("pY").addEventListener("change",()=>{const n=Gt(J[0]);if(!n||n.lk)return;const t=+z("pY").value||0,e=fe(n);n.p[1]=Dt(n.p[1]+t-e.min.y),Hs(n),ne(),En()});["rX","rY","rZ"].forEach((n,t)=>z(n).addEventListener("change",()=>{const e=Gt(J[0]);!e||e.lk||(e.r[t]=rs.degToRad((+z(n).value||0)%360),Hs(e),zo(e),ne(),En())}));document.querySelectorAll("[data-turn]").forEach(n=>n.onclick=()=>{const t=Gt(J[0]);if(!t||t.lk)return;const[e,i]=n.dataset.turn.split(","),s=ee.get(t.id),r=new T(e==="x"?1:0,e==="y"?1:0,e==="z"?1:0),o=fe(t),a=o.getCenter(new T);s.quaternion.premultiply(new De().setFromAxisAngle(r,(e==="y"?-1:1)*+i*Math.PI/2));const c=new Li().setFromQuaternion(s.quaternion),l=h=>{const p=Math.round(h/(Math.PI/12))*(Math.PI/12);return Math.abs(p-h)<1e-4?p:h};t.r=[l(c.x),l(c.y),l(c.z)],s.rotation.set(...t.r),s.updateMatrixWorld();const u=fe(t).getCenter(new T);t.p=[Dt(t.p[0]+a.x-u.x),t.p[1],Dt(t.p[2]+a.z-u.z)],s.position.set(...t.p);const f=fe(t);t.p[1]=Dt(t.p[1]+Math.max(0,o.min.y)-f.min.y),s.position.y=t.p[1],Hs(t),ne(),En(),Pt.object===ze&&No(s)});z("lockBtn").onclick=()=>{const n=J.map(Gt).filter(Boolean);if(!n.length)return;const t=!n.every(e=>e.lk);n.forEach(e=>e.lk=t),Qe(),ne(),ue(t?"🔒 اتقفل: مش هيتحرك ولا يتغيّر":"🔓 اتفتح")};document.querySelectorAll("[data-mirror]").forEach(n=>n.onclick=()=>{const t=Gt(J[0]);!t||t.lk||(t.s[+n.dataset.mirror]*=-1,Hs(t),ne())});let rp=0;function op(n,t,e){const i=J.map(Gt).filter(s=>s&&!s.lk);i.length&&(i.forEach(s=>{s.p[0]=Dt(s.p[0]+n),s.p[1]=Dt(Math.max(s.p[1]+t,s.p[1]-fe(s).min.y)),s.p[2]=Dt(s.p[2]+e),Hs(s)}),En(),clearTimeout(rp),rp=setTimeout(()=>ne(),350))}function Ym(){const n=new T().subVectors(Wt.target,oe.position);n.y=0,n.normalize();const t=Math.abs(n.x)>Math.abs(n.z)?[Math.sign(n.x),0]:[0,Math.sign(n.z)];return{fwd:t,right:[-t[1],t[0]]}}function jm(n,t){const e=J.map(Gt).filter(o=>o&&!o.lk);if(e.length<2)return;const i=new de;J.forEach(o=>i.union(fe(Gt(o))));const s=["x","y","z"][n],r=t===0?i.min[s]:t===2?i.max[s]:(i.min[s]+i.max[s])/2;e.forEach(o=>{const a=fe(o),c=t===0?a.min[s]:t===2?a.max[s]:(a.min[s]+a.max[s])/2;o.p[n]=Dt(o.p[n]+r-c),Hs(o)}),ne()}let yc=null;function Nc(n,t){const e=oe.position.clone(),i=Wt.target.clone(),s=performance.now();yc=()=>{const r=Math.min(1,(performance.now()-s)/350),o=r*(2-r);oe.position.lerpVectors(e,n,o),Wt.target.lerpVectors(i,t,o),Wt.update(),r>=1&&(yc=null)}}z("homeBtn").onclick=()=>Nc(_m.clone(),new T(0,10,0));z("fitBtn").onclick=()=>{const n=J.length?J.map(Gt):Ft;if(!n.length)return z("homeBtn").onclick();const t=new de;n.forEach(o=>t.union(fe(o)));const e=new T,i=new T;t.getCenter(e),t.getSize(i);const s=Math.max(60,i.length()*1.6),r=new T().subVectors(oe.position,Wt.target).normalize();Nc(e.clone().add(r.multiplyScalar(s)),e)};const Zm=n=>{const t=new T().subVectors(oe.position,Wt.target),e=rs.clamp(t.length()*n,Wt.minDistance,Wt.maxDistance);Nc(Wt.target.clone().add(t.setLength(e)),Wt.target.clone())};z("zoomIn").onclick=()=>Zm(.75);z("zoomOut").onclick=()=>Zm(1.33);const Fr=z("vcube"),Km=new Bu({canvas:Fr,antialias:!0,alpha:!0});Km.setPixelRatio(1);const lh=new Vp,Sr=new yn(30,1,.1,50);function Xb(n,t){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.fillStyle="rgba(108,92,231,.10)",[[0,0,128,28],[0,100,128,28],[0,28,28,72],[100,28,28,72]].forEach(r=>i.fillRect(...r)),i.fillStyle="rgba(108,92,231,.22)",[[0,0],[100,0],[0,100],[100,100]].forEach(([r,o])=>i.fillRect(r,o,28,28)),i.strokeStyle="#B9C3D6",i.lineWidth=6,i.strokeRect(3,3,122,122),i.fillStyle="#3A4256",i.font="700 26px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const s=new AM(e);return s.colorSpace=Xe,s}const qb=[["RIGHT","#F4F6FA"],["LEFT","#F4F6FA"],["TOP","#FFFFFF"],["BOTTOM","#E9EDF4"],["FRONT","#F9FAFC"],["BACK","#F4F6FA"]],uh=new pt(new me(2,2,2),qb.map(([n,t])=>new zs({map:Xb(n,t)})));lh.add(uh);const $m=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];(function n(){if(bm()){requestAnimationFrame(n);return}yc&&yc();const t=new T().subVectors(oe.position,Wt.target).normalize().multiplyScalar(7.5);Sr.position.copy(t),Sr.up.copy(oe.up),Sr.lookAt(0,0,0),Km.render(lh,Sr),requestAnimationFrame(n)})();const Ts=new pt(new me(1,1,1),new zs({color:7101671,transparent:!0,opacity:.45,depthTest:!1}));Ts.visible=!1;lh.add(Ts);Fr.addEventListener("pointermove",n=>{const t=Fr.getBoundingClientRect(),e=new Q((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),i=new Ac;i.setFromCamera(e,Sr);const s=i.intersectObject(uh)[0];if(!s){Ts.visible=!1;return}const r=$m[s.face.materialIndex],o=s.point,a=["x","y","z"].map((c,l)=>r[l]?r[l]:Math.abs(o[c])>.56?Math.sign(o[c]):0);Ts.scale.set(...a.map(c=>c?.5:1.42)),Ts.position.set(...a.map(c=>c*.78)),Ts.visible=!0});Fr.addEventListener("pointerleave",()=>Ts.visible=!1);Fr.addEventListener("click",n=>{const t=Fr.getBoundingClientRect(),e=new Q((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),i=new Ac;i.setFromCamera(e,Sr);const s=i.intersectObject(uh)[0];if(!s)return;const r=s.point.clone(),o=$m[s.face.materialIndex],a=new T(...["x","y","z"].map((l,u)=>o[u]?o[u]:Math.abs(r[l])>.56?Math.sign(r[l]):0)),c=oe.position.distanceTo(Wt.target);!a.x&&!a.z&&a.add(new T(0,0,.002)),Nc(Wt.target.clone().add(a.normalize().multiplyScalar(c)),Wt.target.clone())});function hh(){z("undoBtn").disabled=gn<=0,z("redoBtn").disabled=gn>=dn.length-1,z("dupBtn").disabled=z("delBtn").disabled=z("dropBtn").disabled=!J.length,z("groupBtn").disabled=J.length<2,z("ungroupBtn").disabled=!J.some(e=>(Gt(e)||{}).t==="group");const n=J.map(Gt).filter(Boolean),t=n.length&&n.every(e=>e.lk);z("lockBtn").disabled=!n.length,z("lockBtn").classList.toggle("on",!!t),z("lockBtn").querySelector("i").textContent=t?"🔒":"🔓",z("lockBtn").querySelector("span").textContent=t?"مقفول":"قفل",z("alignBtn").disabled=J.length<2,J.length<2?z("alignPop").hidden=!0:z("alignPop").hidden||Jm()}function Jm(){z("alignPop").innerHTML="<b>رصّ "+Pe(J.length)+' أشكال</b><div class="alignG">'+[["X ↔",["⇤ أول","⊕ نص","⇥ آخر"]],["Y ↕ ارتفاع",["⤓ تحت","⊕ نص","⤒ فوق"]],["Z ⤢ عمق",["⇤ أول","⊕ نص","⇥ آخر"]]].map(([n,t],e)=>"<span>"+n+"</span>"+t.map((i,s)=>'<button class="tb" data-al="'+e+","+s+'">'+i+"</button>").join("")).join("")+"</div>",z("alignPop").querySelectorAll("[data-al]").forEach(n=>n.onclick=()=>{const[t,e]=n.dataset.al.split(",").map(Number);jm(t,e)})}z("alignBtn").onclick=()=>{if(J.length<2){ue("اختار شكلين أو أكتر الأول (☑ تحديد متعدد)");return}z("alignPop").hidden=!z("alignPop").hidden,z("alignPop").hidden||Jm()};let Rn=!1;z("multiBtn").onclick=()=>{Rn=!Rn,Rn||Bn(null),z("multiBtn").classList.toggle("on",Rn),z("multiBtn").setAttribute("aria-pressed",String(Rn)),ue(Rn?"☑ دوس على الأشكال اللي عايزها، أو اسحب صباعك على مكان فاضي ترسم مستطيل":"رجعنا للتحديد العادي، واتلغى التحديد")};{const n=z("tbar"),t=z("tbGrip");let e=(()=>{try{return+localStorage.getItem("robo-3d-tbz")||1}catch{return 1}})();const i=s=>{e=Math.max(.55,Math.min(1.35,s)),n.style.zoom=e.toFixed(2);try{localStorage.setItem("robo-3d-tbz",e.toFixed(2))}catch{}};i(e),t.addEventListener("pointerdown",s=>{s.preventDefault();const r=s.clientY,o=e;t.setPointerCapture(s.pointerId),t.classList.add("on");const a=l=>i(o+(l.clientY-r)/140),c=()=>{t.classList.remove("on"),t.removeEventListener("pointermove",a),t.removeEventListener("pointerup",c),t.removeEventListener("pointercancel",c)};t.addEventListener("pointermove",a),t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}),t.addEventListener("dblclick",()=>i(1))}z("stlBtn").onclick=()=>{const n=Ft.filter(r=>!r.h);if(!n.length){ue("مفيش أشكال مُصمتة تتطبع");return}Ic(),Ir.updateMatrixWorld(!0);const t=new Ti;n.forEach(r=>{const o=ee.get(r.id),a=Dr.get(r.id),c=new pt(a?a.view.geometry:o.geometry);c.matrixAutoUpdate=!1,c.matrix.copy(o.matrixWorld),t.add(c)}),t.rotation.x=Math.PI/2,t.updateMatrixWorld(!0);const e=new ES().parse(t,{binary:!0}),i=((z("pname").value||"robo-3d").trim().replace(/[\\/:*?"<>|]+/g,"").replace(/\s+/g,"_")||"robo-3d")+".stl",s=document.createElement("a");s.href=URL.createObjectURL(new Blob([e],{type:"model/stl"})),s.download=i,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3),ue("⬇ اتنزّل "+i)};function Qm(){const n=z("projList");n.innerHTML=be.list.map(t=>'<li class="'+(t.id===be.cur?"cur":"")+'"><span class="nm"><b dir="auto"></b><small>'+Pe((t.objs||[]).length)+' شكل</small></span><button class="btn ghost small" data-open="'+t.id+'">افتح</button><button class="btn ghost small" data-del="'+t.id+'" aria-label="امسح">🗑</button></li>').join("")||'<li class="empty">لسه مفيش تصاميم</li>',n.querySelectorAll("li b").forEach((t,e)=>t.textContent=be.list[e].name),n.querySelectorAll("[data-open]").forEach(t=>t.onclick=()=>{os(!1),pc(t.dataset.open),Go()}),n.querySelectorAll("[data-del]").forEach(t=>t.onclick=()=>{if(t.dataset.sure!=="1"){t.dataset.sure="1",t.textContent="متأكد؟";return}be.list=be.list.filter(e=>e.id!==t.dataset.del),be.cur===t.dataset.del&&(be.list.length?pc(be.list[0].id):Lm()),Uc(),Qm()})}const Go=()=>{z("projModal").hidden=!0};z("myBtn").onclick=()=>{os(!1),Qm(),z("projModal").hidden=!1,z("pmClose").focus()};z("pmClose").onclick=Go;z("newBtn").onclick=()=>{Lm(),Go()};z("projModal").addEventListener("click",n=>{n.target.id==="projModal"&&Go()});const tg="robo-3d-clip";let Pu=0;function ap(n){if(!J.length)return;const t=J.map(Gt).filter(Boolean);try{localStorage.setItem(tg,JSON.stringify(t))}catch{}if(Pu=0,n){if(t.some(e=>e.lk)){ue("🔒 فيه شكل مقفول. افتح القفل الأول");return}Fc(),ue("✂️ اتقص. دوس Ctrl+V عشان تحطه")}else ue("📋 اتنسخ "+(t.length>1?Pe(t.length)+" أشكال":"الشكل")+". دوس Ctrl+V عشان تلزقه")}function Yb(){let n=null;try{n=JSON.parse(localStorage.getItem(tg)||"null")}catch{}if(!Array.isArray(n)||!n.length){ue("مفيش حاجة منسوخة. اختار شكل ودوس Ctrl+C");return}Pu++;const t=20*Pu,e=[];n.forEach(i=>{const s=JSON.parse(JSON.stringify(i));s.id=kn(),delete s.lk,s.p[0]=Dt(s.p[0]+t),s.p[2]=Dt(s.p[2]+t),s.kids&&s.kids.forEach(r=>{r.p[0]+=t,r.p[2]+=t}),s.o&&(s.o[0]+=t,s.o[2]+=t),Ft.push(s),e.push(s.id)}),Re(),J=e,Qe(),ne(),ue("📌 اتلزق")}addEventListener("keydown",n=>{if(n.target.closest&&n.target.closest("input,select,textarea,[contenteditable]"))return;const t=n.ctrlKey||n.metaKey,e=n.code,i=n.key.toLowerCase();if(Et&&!z("drawModal").hidden){t&&e==="KeyZ"?(n.preventDefault(),z("drUndo").click()):i==="escape"&&z("drCancel").click();return}if(t&&e==="KeyZ")n.preventDefault(),z(n.shiftKey?"redoBtn":"undoBtn").click();else if(t&&e==="KeyY")n.preventDefault(),z("redoBtn").click();else if(t&&e==="KeyC")n.preventDefault(),ap(!1);else if(t&&e==="KeyX")n.preventDefault(),ap(!0);else if(t&&e==="KeyV")n.preventDefault(),Yb();else if(t&&e==="KeyD")n.preventDefault(),sh();else if(t&&e==="KeyA")n.preventDefault(),J=Ft.map(s=>s.id),Qe();else if(t&&e==="KeyG")n.preventDefault(),n.shiftKey?rh():Ho();else if(t&&e==="KeyS")n.preventDefault(),os(!0);else if(i.startsWith("arrow")&&J.length){n.preventDefault();const s=($n||1)*(n.shiftKey?10:1);if(t&&(i==="arrowup"||i==="arrowdown"))op(0,i==="arrowup"?s:-s,0);else{const{fwd:r,right:o}=Ym(),a=i==="arrowup"?r:i==="arrowdown"?[-r[0],-r[1]]:i==="arrowright"?o:[-o[0],-o[1]];op(a[0]*s,0,a[1]*s)}}else{if(t)return;if(i==="delete"||i==="backspace")Fc();else if(i==="escape")Bn(null),Go();else if(e==="KeyW")Mo("translate");else if(e==="KeyE")Mo("rotate");else if(e==="KeyR")Mo("scale");else if(e==="KeyD")Om();else if(e==="BracketLeft"||e==="BracketRight"){const s=Gt(J[0]);s&&!s.lk&&J.length===1&&(nh(s,eh(s),(e==="BracketLeft"?1:-1)*Math.PI/12),ne(),En())}}});setTimeout(()=>document.body.classList.add("quiet"),3e4);z("keysBtn").onclick=()=>{z("keysModal").hidden=!1,z("kmClose").focus()};z("kmClose").onclick=()=>{z("keysModal").hidden=!0};z("keysModal").addEventListener("click",n=>{n.target===z("keysModal")&&(z("keysModal").hidden=!0)});addEventListener("keydown",n=>{n.key==="Escape"&&!z("keysModal").hidden&&(z("keysModal").hidden=!0)});let cp=0;function ue(n){const t=z("toast");t.textContent=n,t.hidden=!1,clearTimeout(cp),cp=setTimeout(()=>t.hidden=!0,2600)}const Cu=new URLSearchParams(location.search),Mc=n=>fe(n),pr=n=>{const t=Mc(n),e=new T;return t.getSize(e),e},Ei=()=>Ft.filter(n=>!n.h),lp=()=>{const n=Ei();return n.some(t=>n.some(e=>{if(t===e)return!1;const i=Mc(t),s=Mc(e);return i.min.y>=s.max.y-2&&i.min.y>1&&i.min.x<s.max.x&&i.max.x>s.min.x&&i.min.z<s.max.z&&i.max.z>s.min.z}))},jb=()=>Ft.some(n=>n.t==="group"&&n.kids.some(t=>t.h)&&n.kids.some(t=>!t.h)&&!n.h),ki=(n,t,e=1)=>Math.abs(n-t)<=e,fh={k1:{t:"ضيف ٣ أشكال مختلفة 🧊",say:"دوس على ٣ أشكال مختلفة من على الجنب (مكعب، كورة، أسطوانة…).",check:()=>new Set(Ei().map(n=>n.t)).size>=3},k2:{t:"لوّن الأشكال 🎨",say:"الأشكال دي كلها بيضا. دوس على كل شكل واختار له لون، وخلّي كل واحد لونه مختلف.",pre:[{t:"box",p:[-40,10,0]},{t:"sphere",p:[0,10,0]},{t:"cyl",p:[40,10,0]}].map((n,t)=>({id:"w"+t,c:"#FFFFFF",h:!1,r:[0,0,0],s:[1,1,1],...n})),check:()=>Ei().every(n=>n.c!=="#FFFFFF")&&new Set(Ei().map(n=>n.c)).size>=3},k3:{t:"ابني برج 🗼",say:"حط شكل فوق شكل. اسحب السهم الأخضر لفوق، أو خلّي الشكل على السطح وارفعه.",check:()=>lp()},k4:{t:"كبّر الشكل 📏",say:"دوس على شكل واكتب الارتفاع ٤٠ ملّي أو أكتر (أو استخدم «المقاس»).",check:()=>Ei().some(n=>pr(n).y>=39)},k5:{t:"اعمل فتحة ⬚",say:"حط مكعب، وحط «فتحة دايرة» جواه: هتشوفها بتخرّم المكعب لوحدها. وبعدين دوس «✂️ نفّذ الفتحة».",check:()=>jb()},k6:{t:"مشروع: جسم روبو 🤖",say:"اعمل روبو: جسم وراس فوقه، و٤ أشكال على الأقل، و٢ ألوان أو أكتر.",check:()=>Ei().length>=4&&lp()&&new Set(Ei().map(n=>n.c)).size>=2},s1:{t:"مقاس بالظبط 📐",say:"اعمل مكعب مقاسه ٣٠ × ٣٠ × ١٠ ملّي بالظبط (العرض والعمق ٣٠، والارتفاع ١٠).",check:()=>Ei().some(n=>n.t==="box"&&ki(pr(n).x,30)&&ki(pr(n).z,30)&&ki(pr(n).y,10))},s2:{t:"على السطح وفي النص 🎯",say:"خلّي أسطوانة قاعدتها على السطح بالظبط (y = 0) ومركزها في نص السطح (x = 0 و z = 0).",check:()=>Ei().some(n=>n.t==="cyl"&&ki(Mc(n).min.y,0,.6)&&ki(n.p[0],0,1)&&ki(n.p[2],0,1))},s3:{t:"ميدالية 🏷",say:"اعمل ميدالية: شكل مسطح ارتفاعه من ٣ لـ ٦ ملّي، وفيها فتحة دايرة للسلسلة، وبعدين دوس «✂️ نفّذ الفتحة».",check:()=>Ft.some(n=>n.t==="group"&&!n.h&&n.kids.some(t=>t.h)&&pr(n).y>=2.5&&pr(n).y<=6.5)},s4:{t:"حامل موتور ⚙️",say:"اعمل قطعة فيها فتحة دايرة قطرها ٢٤ ملّي (زي مقاس موتور صغير). استخدم «فتحة دايرة» وخلّي عرضها وعمقها ٢٤، وبعدين دوس «✂️ نفّذ الفتحة».",check:()=>Ft.some(n=>n.t==="group"&&!n.h&&n.kids.some(t=>t.h&&t.t==="cyl"&&ki(ss.cyl.x*t.s[0],24,1)&&ki(ss.cyl.z*t.s[2],24,1)))},s5:{t:"مشروع: صمّم هيكل عربيتك 🚗",say:"صمّم جسم عربية: قاعدة، و٤ عجلات (أسطوانات)، وفتحة واحدة على الأقل لتوصيل الأسلاك (حط الفتحة ودوس «✂️ نفّذ الفتحة»).",check:()=>Ft.filter(n=>!n.h).reduce((n,t)=>n+(t.t==="cyl"?1:t.t==="group"?t.kids.filter(e=>e.t==="cyl"&&!e.h).length:0),0)>=4&&Ft.some(n=>n.t==="group"&&n.kids.some(t=>t.h))}},Nr=fh[Cu.get("task")]?Cu.get("task"):null;let Ru=!1;function Zb(){if(Ru)return;let n=!1;try{n=!!fh[Nr].check()}catch{}if(n){Ru=!0,z("taskBar").classList.add("done"),z("taskMsg").textContent="🎉 برافو! التصميم تمام";try{parent.postMessage({type:"robo-task",tool:"3d",task:Nr,ok:!0},location.origin)}catch{}}}var up,hp;if(Nr){const n=fh[Nr];Cu.get("embed")&&document.body.classList.add("embed");const t=document.createElement("div");t.className="taskBar",t.id="taskBar",t.innerHTML='<b></b><span></span><em id="taskMsg"></em><button class="btn ghost small" id="taskReset">↺ من الأول</button>',t.querySelector("b").textContent=n.t,t.querySelector("span").textContent=n.say,document.querySelector(".stagewrap").prepend(t);const e=()=>{Ft=JSON.parse(JSON.stringify(n.pre||[])),J=[],Re(),dn=[],gn=-1,Ru=!1,t.classList.remove("done"),z("taskMsg").textContent="",ne(!1)};ag(t),z("taskReset").onclick=e,e()}else{const n=document.createElement("button");n.id="sideTog",n.type="button";const t=s=>{document.body.classList.toggle("noSide",s),n.textContent=s?"◀":"▶",n.title=s?"اظهر لوحة الأشكال":"اخفي لوحة الأشكال وكبّر مكان الرسم",n.setAttribute("aria-label",n.title),n.setAttribute("aria-expanded",String(!s));try{localStorage.setItem("robo-3d-noside",s?"1":"")}catch{}requestAnimationFrame(()=>dispatchEvent(new Event("resize")))};n.onclick=()=>t(!document.body.classList.contains("noSide")),(up=document.querySelector(".camtools"))==null||up.prepend(n);let e=!1;try{e=localStorage.getItem("robo-3d-noside")==="1"}catch{}t(e);const i=document.createElement("button");i.id="fullBtn",i.type="button",i.title="كبّر مكان الرسم على الشاشة كلها",i.setAttribute("aria-label",i.title),i.textContent="⛶",i.onclick=()=>{var r;const s=document.documentElement;document.fullscreenElement?(r=document.exitFullscreen)==null||r.call(document):(s.requestFullscreen?s.requestFullscreen():Promise.reject()).catch(()=>{document.body.classList.toggle("bigStage"),dispatchEvent(new Event("resize"))})},document.addEventListener("fullscreenchange",()=>{document.body.classList.toggle("bigStage",!!document.fullscreenElement),i.textContent=document.fullscreenElement?"🗗":"⛶",dispatchEvent(new Event("resize"))}),(hp=document.querySelector(".camtools"))==null||hp.appendChild(i)}{const n=e=>JSON.stringify(e.objs||[]);be.list=be.list.filter(e=>!(e.blank&&e.blank===n(e))),be.list.forEach(e=>{delete e.blank}),be.cur=null;const t={id:kn(),name:"تصميم "+Pe(be.list.length+1),objs:[{id:kn(),t:"box",c:"#1E7BFF",h:!1,p:[0,10,0],r:[0,0,0],s:[1.5,1,1.5]}],t:Date.now()};be.list.unshift(t),pc(t.id);{const e=Rm();e&&(e.blank=n(e),Uc())}}window.__d3={arrow:n=>{const t=oe.position.distanceTo(ze.position),e=t*Math.min(1.9*Math.tan(Math.PI*oe.fov/360),7)*Pt.size/4*.55,i=ze.position.clone();return i.setComponent(n,i.getComponent(n)+e),Fs(i).slice(0,2)},handles:()=>si.visible?si.children.map(n=>Fs(n.position).slice(0,2).map(Math.round)):[],magnetize:vc,worldBox:n=>{const t=fe(Gt(n));return[t.min.toArray().map(Dt),t.max.toArray().map(Dt)]},toScreen:(n,t,e)=>{const i=new T(n,t,e).project(oe),s=te.getBoundingClientRect();return[s.left+(i.x+1)/2*s.width,s.top+(1-i.y)/2*s.height]},camera:oe,apply:n=>{n(Ft),Re(),ne()},get objs(){return Ft},select:Bn,addShape:ko,group:Ho,ungroup:rh,setMode:Mo,get sel(){return J},trace:n=>pm(n).map(t=>[t.getPoints().length,t.holes.length,(()=>{const e=new hS().setFromPoints(t.getPoints());return[e.min.x,e.min.y,e.max.x,e.max.y].map(Dt)})()]),cam:()=>oe.position.toArray().map(n=>Math.round(n)).join(","),geoInfo:n=>{const t=ee.get(n).geometry;t.computeBoundingBox();const e=new T;return t.boundingBox.getSize(e),[t.getAttribute("position").count,e.toArray().map(Dt)]}};og({box:document.querySelector(".d3"),a:document.querySelector(".d3 > .shapes"),b:document.querySelector(".d3 > .stagewrap"),cssVar:"--dA",key:"robo-split-3d",min:160,minB:360});
