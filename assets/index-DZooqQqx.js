(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="171",fS=0,hg=1,hS=2,Z0=1,dS=2,vr=3,us=0,qn=1,Sr=2,ss=0,Xo=1,dg=2,pg=3,mg=4,pS=5,Vs=100,mS=101,_S=102,gS=103,vS=104,xS=200,yS=201,SS=202,MS=203,ad=204,ld=205,ES=206,TS=207,wS=208,AS=209,CS=210,RS=211,PS=212,bS=213,LS=214,ud=0,cd=1,fd=2,Zo=3,hd=4,dd=5,pd=6,md=7,fp=0,DS=1,IS=2,os=0,US=1,NS=2,FS=3,OS=4,kS=5,zS=6,BS=7,Q0=300,Qo=301,Jo=302,_d=303,gd=304,Ac=306,vd=1e3,Gs=1001,xd=1002,zi=1003,VS=1004,Ru=1005,Ki=1006,hh=1007,Ws=1008,wr=1009,J0=1010,ev=1011,al=1012,hp=1013,Ks=1014,Mr=1015,ml=1016,dp=1017,pp=1018,ea=1020,tv=35902,nv=1021,iv=1022,Oi=1023,rv=1024,sv=1025,jo=1026,ta=1027,ov=1028,mp=1029,av=1030,_p=1031,gp=1033,rc=33776,sc=33777,oc=33778,ac=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,Td=36196,wd=37492,Ad=37496,Cd=37808,Rd=37809,Pd=37810,bd=37811,Ld=37812,Dd=37813,Id=37814,Ud=37815,Nd=37816,Fd=37817,Od=37818,kd=37819,zd=37820,Bd=37821,lc=36492,Vd=36494,Hd=36495,lv=36283,Gd=36284,Wd=36285,Xd=36286,HS=3200,GS=3201,vp=0,WS=1,ts="",ai="srgb",na="srgb-linear",pc="linear",bt="srgb",Ao=7680,_g=519,XS=512,jS=513,YS=514,uv=515,qS=516,$S=517,KS=518,ZS=519,gg=35044,vg="300 es",Er=2e3,mc=2001;class ua{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,jd=180/Math.PI;function _l(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function mt(o,e,t){return Math.max(e,Math.min(t,o))}function QS(o,e){return(o%e+e)%e}function ph(o,e,t){return(1-t)*o+t*e}function Ga(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,s,a,u,c,h,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,h,d)}set(e,t,i,s,a,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=h,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],h=i[6],d=i[1],p=i[4],_=i[7],g=i[2],y=i[5],E=i[8],M=s[0],S=s[3],v=s[6],L=s[1],b=s[4],w=s[7],U=s[2],D=s[5],I=s[8];return a[0]=u*M+c*L+h*U,a[3]=u*S+c*b+h*D,a[6]=u*v+c*w+h*I,a[1]=d*M+p*L+_*U,a[4]=d*S+p*b+_*D,a[7]=d*v+p*w+_*I,a[2]=g*M+y*L+E*U,a[5]=g*S+y*b+E*D,a[8]=g*v+y*w+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*h+s*a*d-s*u*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=p*u-c*d,g=c*h-p*a,y=d*a-u*h,E=t*_+i*g+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(s*d-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=g*M,e[4]=(p*t-s*h)*M,e[5]=(s*a-c*t)*M,e[6]=y*M,e[7]=(i*h-d*t)*M,e[8]=(u*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*u+d*c)+u+e,-s*d,s*h,-s*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new st;function cv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function JS(){const o=_c("canvas");return o.style.display="block",o}const xg={};function Vo(o){o in xg||(xg[o]=!0,console.warn(o))}function eM(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function tM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yg=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sg=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const o={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===bt&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===bt&&(s.r=Yo(s.r),s.g=Yo(s.g),s.b=Yo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?pc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[na]:{primaries:e,whitePoint:i,transfer:pc,toXYZ:yg,fromXYZ:Sg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:yg,fromXYZ:Sg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const wt=iM();function Tr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Co;class rM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Co===void 0&&(Co=_c("canvas")),Co.width=e.width,Co.height=e.height;const i=Co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Co}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=Tr(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class fv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=_l(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(_h(s[u].image)):a.push(_h(s[u]))}else a=_h(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function _h(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class $n extends ua{constructor(e=$n.DEFAULT_IMAGE,t=$n.DEFAULT_MAPPING,i=Gs,s=Gs,a=Ki,u=Ws,c=Oi,h=wr,d=$n.DEFAULT_ANISOTROPY,p=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=_l(),this.name="",this.source=new fv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Gs:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Gs:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Q0;$n.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,d=h[0],p=h[4],_=h[8],g=h[1],y=h[5],E=h[9],M=h[2],S=h[6],v=h[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,w=(y+1)/2,U=(v+1)/2,D=(p+g)/4,I=(_+M)/4,O=(E+S)/4;return b>w&&b>U?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=D/i,a=I/i):w>U?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=D/s,a=O/s):U<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(U),i=I/a,s=O/a),this.set(i,s,a,t),this}let L=Math.sqrt((S-E)*(S-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(_-M)/L,this.z=(g-p)/L,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aM extends ua{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new $n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zs extends aM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hv extends $n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zi,this.minFilter=zi,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends $n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zi,this.minFilter=zi,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let h=i[s+0],d=i[s+1],p=i[s+2],_=i[s+3];const g=a[u+0],y=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=g,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(_!==M||h!==g||d!==y||p!==E){let S=1-c;const v=h*g+d*y+p*E+_*M,L=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const U=Math.sqrt(b),D=Math.atan2(U,v*L);S=Math.sin(S*D)/U,c=Math.sin(c*D)/U}const w=c*L;if(h=h*S+g*w,d=d*S+y*w,p=p*S+E*w,_=_*S+M*w,S===1-c){const U=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=U,d*=U,p*=U,_*=U}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],h=i[s+1],d=i[s+2],p=i[s+3],_=a[u],g=a[u+1],y=a[u+2],E=a[u+3];return e[t]=c*E+p*_+h*y-d*g,e[t+1]=h*E+p*g+d*_-c*y,e[t+2]=d*E+p*y+c*g-h*_,e[t+3]=p*E-c*_-h*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(i/2),p=c(s/2),_=c(a/2),g=h(i/2),y=h(s/2),E=h(a/2);switch(u){case"XYZ":this._x=g*p*_+d*y*E,this._y=d*y*_-g*p*E,this._z=d*p*E+g*y*_,this._w=d*p*_-g*y*E;break;case"YXZ":this._x=g*p*_+d*y*E,this._y=d*y*_-g*p*E,this._z=d*p*E-g*y*_,this._w=d*p*_+g*y*E;break;case"ZXY":this._x=g*p*_-d*y*E,this._y=d*y*_+g*p*E,this._z=d*p*E+g*y*_,this._w=d*p*_-g*y*E;break;case"ZYX":this._x=g*p*_-d*y*E,this._y=d*y*_+g*p*E,this._z=d*p*E-g*y*_,this._w=d*p*_+g*y*E;break;case"YZX":this._x=g*p*_+d*y*E,this._y=d*y*_+g*p*E,this._z=d*p*E-g*y*_,this._w=d*p*_-g*y*E;break;case"XZY":this._x=g*p*_-d*y*E,this._y=d*y*_-g*p*E,this._z=d*p*E+g*y*_,this._w=d*p*_+g*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],_=t[10],g=i+c+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-h)*y,this._y=(a-d)*y,this._z=(u-s)*y}else if(i>c&&i>_){const y=2*Math.sqrt(1+i-c-_);this._w=(p-h)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(a+d)/y}else if(c>_){const y=2*Math.sqrt(1+c-i-_);this._w=(a-d)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+_-i-c);this._w=(u-s)/y,this._x=(a+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+s*d-a*h,this._y=s*p+u*h+a*c-i*d,this._z=a*p+u*d+i*h-s*c,this._w=u*p-i*c-s*h-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,g=Math.sin(t*p)/d;return this._w=u*_+this._w*g,this._x=i*_+this._x*g,this._y=s*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*s-c*i),p=2*(c*t-a*s),_=2*(a*i-u*t);return this.x=t+h*d+u*_-c*p,this.y=i+h*p+c*d-a*_,this.z=s+h*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=s*h-a*c,this.y=a*u-i*h,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new q,Mg=new gl;class vl{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(a,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pu.copy(i.boundingBox)),Pu.applyMatrix4(e.matrixWorld),this.union(Pu)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),bu.subVectors(this.max,Wa),Ro.subVectors(e.a,Wa),Po.subVectors(e.b,Wa),bo.subVectors(e.c,Wa),$r.subVectors(Po,Ro),Kr.subVectors(bo,Po),bs.subVectors(Ro,bo);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-bs.z,bs.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,bs.z,0,-bs.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-bs.y,bs.x,0];return!vh(t,Ro,Po,bo,bu)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,Ro,Po,bo,bu))?!1:(Lu.crossVectors($r,Kr),t=[Lu.x,Lu.y,Lu.z],vh(t,Ro,Po,bo,bu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hr=[new q,new q,new q,new q,new q,new q,new q,new q],Ii=new q,Pu=new vl,Ro=new q,Po=new q,bo=new q,$r=new q,Kr=new q,bs=new q,Wa=new q,bu=new q,Lu=new q,Ls=new q;function vh(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){Ls.fromArray(o,a);const c=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),h=e.dot(Ls),d=t.dot(Ls),p=i.dot(Ls);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const uM=new vl,Xa=new q,xh=new q;class xl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uM.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const t=Xa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(xh)),this.expandByPoint(Xa.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dr=new q,yh=new q,Du=new q,Zr=new q,Sh=new q,Iu=new q,Mh=new q;class xp{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yh.copy(e).add(t).multiplyScalar(.5),Du.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(yh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Du),c=Zr.dot(this.direction),h=-Zr.dot(Du),d=Zr.lengthSq(),p=Math.abs(1-u*u);let _,g,y,E;if(p>0)if(_=u*h-c,g=u*c-h,E=a*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,y=_*(_+u*g+2*c)+g*(u*_+g+2*h)+d}else g=a,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*h)+d;else g=-a,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*h)+d;else g<=-E?(_=Math.max(0,-(-u*a+c)),g=_>0?-a:Math.min(Math.max(-a,-h),a),y=-_*_+g*(g+2*h)+d):g<=E?(_=0,g=Math.min(Math.max(-a,-h),a),y=g*(g+2*h)+d):(_=Math.max(0,-(u*a+c)),g=_>0?a:Math.min(Math.max(-a,-h),a),y=-_*_+g*(g+2*h)+d);else g=u>0?-a:a,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(yh).addScaledVector(Du,g),y}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const i=dr.dot(this.direction),s=dr.dot(dr)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,h=i+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(i=(e.min.x-g.x)*d,s=(e.max.x-g.x)*d):(i=(e.max.x-g.x)*d,s=(e.min.x-g.x)*d),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),_>=0?(c=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(c=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),i>h||c>s)||((c>i||i!==i)&&(i=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,i,s,a){Sh.subVectors(t,e),Iu.subVectors(i,e),Mh.crossVectors(Sh,Iu);let u=this.direction.dot(Mh),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Zr.subVectors(this.origin,e);const h=c*this.direction.dot(Iu.crossVectors(Zr,Iu));if(h<0)return null;const d=c*this.direction.dot(Sh.cross(Zr));if(d<0||h+d>u)return null;const p=-c*Zr.dot(Mh);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,i,s,a,u,c,h,d,p,_,g,y,E,M,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,h,d,p,_,g,y,E,M,S)}set(e,t,i,s,a,u,c,h,d,p,_,g,y,E,M,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=s,v[1]=a,v[5]=u,v[9]=c,v[13]=h,v[2]=d,v[6]=p,v[10]=_,v[14]=g,v[3]=y,v[7]=E,v[11]=M,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Lo.setFromMatrixColumn(e,0).length(),a=1/Lo.setFromMatrixColumn(e,1).length(),u=1/Lo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=u*p,y=u*_,E=c*p,M=c*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=y+E*d,t[5]=g-M*d,t[9]=-c*h,t[2]=M-g*d,t[6]=E+y*d,t[10]=u*h}else if(e.order==="YXZ"){const g=h*p,y=h*_,E=d*p,M=d*_;t[0]=g+M*c,t[4]=E*c-y,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+g*c,t[10]=u*h}else if(e.order==="ZXY"){const g=h*p,y=h*_,E=d*p,M=d*_;t[0]=g-M*c,t[4]=-u*_,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const g=u*p,y=u*_,E=c*p,M=c*_;t[0]=h*p,t[4]=E*d-y,t[8]=g*d+M,t[1]=h*_,t[5]=M*d+g,t[9]=y*d-E,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*d,E=c*h,M=c*d;t[0]=h*p,t[4]=M-g*_,t[8]=E*_+y,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=y*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=u*h,y=u*d,E=c*h,M=c*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=g*_+M,t[5]=u*p,t[9]=y*_-E,t[2]=E*_-y,t[6]=c*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cM,e,fM)}lookAt(e,t,i){const s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Qr.crossVectors(i,si),Qr.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Qr.crossVectors(i,si)),Qr.normalize(),Uu.crossVectors(si,Qr),s[0]=Qr.x,s[4]=Uu.x,s[8]=si.x,s[1]=Qr.y,s[5]=Uu.y,s[9]=si.y,s[2]=Qr.z,s[6]=Uu.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],h=i[8],d=i[12],p=i[1],_=i[5],g=i[9],y=i[13],E=i[2],M=i[6],S=i[10],v=i[14],L=i[3],b=i[7],w=i[11],U=i[15],D=s[0],I=s[4],O=s[8],A=s[12],R=s[1],z=s[5],J=s[9],Y=s[13],le=s[2],ue=s[6],ne=s[10],se=s[14],B=s[3],ce=s[7],oe=s[11],k=s[15];return a[0]=u*D+c*R+h*le+d*B,a[4]=u*I+c*z+h*ue+d*ce,a[8]=u*O+c*J+h*ne+d*oe,a[12]=u*A+c*Y+h*se+d*k,a[1]=p*D+_*R+g*le+y*B,a[5]=p*I+_*z+g*ue+y*ce,a[9]=p*O+_*J+g*ne+y*oe,a[13]=p*A+_*Y+g*se+y*k,a[2]=E*D+M*R+S*le+v*B,a[6]=E*I+M*z+S*ue+v*ce,a[10]=E*O+M*J+S*ne+v*oe,a[14]=E*A+M*Y+S*se+v*k,a[3]=L*D+b*R+w*le+U*B,a[7]=L*I+b*z+w*ue+U*ce,a[11]=L*O+b*J+w*ne+U*oe,a[15]=L*A+b*Y+w*se+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],_=e[6],g=e[10],y=e[14],E=e[3],M=e[7],S=e[11],v=e[15];return E*(+a*h*_-s*d*_-a*c*g+i*d*g+s*c*y-i*h*y)+M*(+t*h*y-t*d*g+a*u*g-s*u*y+s*d*p-a*h*p)+S*(+t*d*_-t*c*y-a*u*_+i*u*y+a*c*p-i*d*p)+v*(-s*c*p-t*h*_+t*c*g+s*u*_-i*u*g+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=e[9],g=e[10],y=e[11],E=e[12],M=e[13],S=e[14],v=e[15],L=_*S*d-M*g*d+M*h*y-c*S*y-_*h*v+c*g*v,b=E*g*d-p*S*d-E*h*y+u*S*y+p*h*v-u*g*v,w=p*M*d-E*_*d+E*c*y-u*M*y-p*c*v+u*_*v,U=E*_*h-p*M*h-E*c*g+u*M*g+p*c*S-u*_*S,D=t*L+i*b+s*w+a*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=L*I,e[1]=(M*g*a-_*S*a-M*s*y+i*S*y+_*s*v-i*g*v)*I,e[2]=(c*S*a-M*h*a+M*s*d-i*S*d-c*s*v+i*h*v)*I,e[3]=(_*h*a-c*g*a-_*s*d+i*g*d+c*s*y-i*h*y)*I,e[4]=b*I,e[5]=(p*S*a-E*g*a+E*s*y-t*S*y-p*s*v+t*g*v)*I,e[6]=(E*h*a-u*S*a-E*s*d+t*S*d+u*s*v-t*h*v)*I,e[7]=(u*g*a-p*h*a+p*s*d-t*g*d-u*s*y+t*h*y)*I,e[8]=w*I,e[9]=(E*_*a-p*M*a-E*i*y+t*M*y+p*i*v-t*_*v)*I,e[10]=(u*M*a-E*c*a+E*i*d-t*M*d-u*i*v+t*c*v)*I,e[11]=(p*c*a-u*_*a-p*i*d+t*_*d+u*i*y-t*c*y)*I,e[12]=U*I,e[13]=(p*M*s-E*_*s+E*i*g-t*M*g-p*i*S+t*_*S)*I,e[14]=(E*c*s-u*M*s-E*i*h+t*M*h+u*i*S-t*c*S)*I,e[15]=(u*_*s-p*c*s+p*i*h-t*_*h-u*i*g+t*c*g)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,h=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-s*h,d*h+s*c,0,d*c+s*h,p*c+i,p*h-s*u,0,d*h-s*c,p*h+s*u,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,d=a+a,p=u+u,_=c+c,g=a*d,y=a*p,E=a*_,M=u*p,S=u*_,v=c*_,L=h*d,b=h*p,w=h*_,U=i.x,D=i.y,I=i.z;return s[0]=(1-(M+v))*U,s[1]=(y+w)*U,s[2]=(E-b)*U,s[3]=0,s[4]=(y-w)*D,s[5]=(1-(g+v))*D,s[6]=(S+L)*D,s[7]=0,s[8]=(E+b)*I,s[9]=(S-L)*I,s[10]=(1-(g+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Lo.set(s[0],s[1],s[2]).length();const u=Lo.set(s[4],s[5],s[6]).length(),c=Lo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ui.copy(this);const d=1/a,p=1/u,_=1/c;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=p,Ui.elements[5]*=p,Ui.elements[6]*=p,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,t.setFromRotationMatrix(Ui),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=Er){const h=this.elements,d=2*a/(t-e),p=2*a/(i-s),_=(t+e)/(t-e),g=(i+s)/(i-s);let y,E;if(c===Er)y=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===mc)y=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=Er){const h=this.elements,d=1/(t-e),p=1/(i-s),_=1/(u-a),g=(t+e)*d,y=(i+s)*p;let E,M;if(c===Er)E=(u+a)*_,M=-2*_;else if(c===mc)E=a*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lo=new q,Ui=new zt,cM=new q(0,0,0),fM=new q(1,1,1),Qr=new q,Uu=new q,si=new q,Eg=new zt,Tg=new gl;class Bi{constructor(e=0,t=0,i=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],h=s[1],d=s[5],p=s[9],_=s[2],g=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tg.setFromEuler(this),this.setFromQuaternion(Tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const wg=new q,Do=new gl,pr=new zt,Nu=new q,ja=new q,dM=new q,pM=new gl,Ag=new q(1,0,0),Cg=new q(0,1,0),Rg=new q(0,0,1),Pg={type:"added"},mM={type:"removed"},Io={type:"childadded",child:null},Eh={type:"childremoved",child:null};class mn extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new q,t=new Bi,i=new gl,s=new q(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new st}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.multiply(Do),this}rotateOnWorldAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.premultiply(Do),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nu.copy(e):Nu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(ja,Nu,this.up):pr.lookAt(Nu,ja,this.up),this.quaternion.setFromRotationMatrix(pr),s&&(pr.extractRotation(s.matrixWorld),Do.setFromRotationMatrix(pr),this.quaternion.premultiply(Do.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pg),Io.child=e,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mM),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pg),Io.child=e,this.dispatchEvent(Io),Io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(a(e.materials,this.material[h]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mn.DEFAULT_UP=new q(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new q,mr=new q,Th=new q,_r=new q,Uo=new q,No=new q,bg=new q,wh=new q,Ah=new q,Ch=new q,Rh=new Lt,Ph=new Lt,bh=new Lt;class Fi{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ni.subVectors(e,t),s.cross(Ni);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ni.subVectors(s,t),mr.subVectors(i,t),Th.subVectors(e,t);const u=Ni.dot(Ni),c=Ni.dot(mr),h=Ni.dot(Th),d=mr.dot(mr),p=mr.dot(Th),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const g=1/_,y=(d*h-c*p)*g,E=(u*p-c*h)*g;return a.set(1-y-E,E,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,s,a,u,c,h){return this.getBarycoord(e,t,i,s,_r)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,_r.x),h.addScaledVector(u,_r.y),h.addScaledVector(c,_r.z),h)}static getInterpolatedAttribute(e,t,i,s,a,u){return Rh.setScalar(0),Ph.setScalar(0),bh.setScalar(0),Rh.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Rh,a.x),u.addScaledVector(Ph,a.y),u.addScaledVector(bh,a.z),u}static isFrontFacing(e,t,i,s){return Ni.subVectors(i,t),mr.subVectors(e,t),Ni.cross(mr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Ni.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Fi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;Uo.subVectors(s,i),No.subVectors(a,i),wh.subVectors(e,i);const h=Uo.dot(wh),d=No.dot(wh);if(h<=0&&d<=0)return t.copy(i);Ah.subVectors(e,s);const p=Uo.dot(Ah),_=No.dot(Ah);if(p>=0&&_<=p)return t.copy(s);const g=h*_-p*d;if(g<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(i).addScaledVector(Uo,u);Ch.subVectors(e,a);const y=Uo.dot(Ch),E=No.dot(Ch);if(E>=0&&y<=E)return t.copy(a);const M=y*d-h*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(i).addScaledVector(No,c);const S=p*E-y*_;if(S<=0&&_-p>=0&&y-E>=0)return bg.subVectors(a,s),c=(_-p)/(_-p+(y-E)),t.copy(s).addScaledVector(bg,c);const v=1/(S+M+g);return u=M*v,c=g*v,t.copy(i).addScaledVector(Uo,u).addScaledVector(No,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},Fu={h:0,s:0,l:0};function Lh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=QS(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Lh(u,a,e+1/3),this.g=Lh(u,a,e),this.b=Lh(u,a,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=ai){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const i=pv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return wt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(mt(Cn.r*255,0,255))*65536+Math.round(mt(Cn.g*255,0,255))*256+Math.round(mt(Cn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,a=Cn.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:h=(s-a)/_+(s<a?6:0);break;case s:h=(a-i)/_+2;break;case a:h=(i-s)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ai){wt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,s=Cn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(Fu);const i=ph(Jr.h,Fu.h,t),s=ph(Jr.s,Fu.s,t),a=ph(Jr.l,Fu.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ot;ot.NAMES=pv;let _M=0;class er extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=Xo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ad&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==Vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_g&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mv extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new q,Ou=new St;class Qi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gg,this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ou.fromBufferAttribute(this,t),Ou.applyMatrix3(e),this.setXY(t,Ou.x,Ou.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ga(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array),a=jn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),e}}class _v extends Qi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gv extends Qi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kn extends Qi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gM=0;const yi=new zt,Dh=new mn,Fo=new q,oi=new vl,Ya=new vl,hn=new q;class Vi extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?gv:_v)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new st().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new kn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];oi.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Ya.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(oi.min,Ya.min),oi.expandByPoint(hn),hn.addVectors(oi.max,Ya.max),oi.expandByPoint(hn)):(oi.expandByPoint(Ya.min),oi.expandByPoint(Ya.max))}oi.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)hn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)hn.fromBufferAttribute(c,d),h&&(Fo.fromBufferAttribute(e,d),hn.add(Fo)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let O=0;O<i.count;O++)c[O]=new q,h[O]=new q;const d=new q,p=new q,_=new q,g=new St,y=new St,E=new St,M=new q,S=new q;function v(O,A,R){d.fromBufferAttribute(i,O),p.fromBufferAttribute(i,A),_.fromBufferAttribute(i,R),g.fromBufferAttribute(a,O),y.fromBufferAttribute(a,A),E.fromBufferAttribute(a,R),p.sub(d),_.sub(d),y.sub(g),E.sub(g);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(z),S.copy(_).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(z),c[O].add(M),c[A].add(M),c[R].add(M),h[O].add(S),h[A].add(S),h[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,A=L.length;O<A;++O){const R=L[O],z=R.start,J=R.count;for(let Y=z,le=z+J;Y<le;Y+=3)v(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const b=new q,w=new q,U=new q,D=new q;function I(O){U.fromBufferAttribute(s,O),D.copy(U);const A=c[O];b.copy(A),b.sub(U.multiplyScalar(U.dot(A))).normalize(),w.crossVectors(D,A);const z=w.dot(h[O])<0?-1:1;u.setXYZW(O,b.x,b.y,b.z,z)}for(let O=0,A=L.length;O<A;++O){const R=L[O],z=R.start,J=R.count;for(let Y=z,le=z+J;Y<le;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const s=new q,a=new q,u=new q,c=new q,h=new q,d=new q,p=new q,_=new q;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),M=e.getX(g+1),S=e.getX(g+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),p.subVectors(u,a),_.subVectors(s,a),p.cross(_),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),c.add(p),h.add(p),d.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,y=t.count;g<y;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),_.subVectors(s,a),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,_=c.normalized,g=new d.constructor(h.length*p);let y=0,E=0;for(let M=0,S=h.length;M<S;M++){c.isInterleavedBufferAttribute?y=h[M]*c.data.stride+c.offset:y=h[M]*p;for(let v=0;v<p;v++)g[E++]=d[y++]}return new Qi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vi,i=this.index.array,s=this.attributes;for(const c in s){const h=s[c],d=e(h,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const h=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const g=d[p],y=e(g,i);h.push(y)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,g=d.length;_<g;_++){const y=d[_];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let g=0,y=_.length;g<y;g++)p.push(_[g].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lg=new zt,Ds=new xp,ku=new xl,Dg=new q,zu=new q,Bu=new q,Vu=new q,Ih=new q,Hu=new q,Ig=new q,Gu=new q;class ki extends mn{constructor(e=new Vi,t=new mv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Hu.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const p=c[h],_=a[h];p!==0&&(Ih.fromBufferAttribute(_,e),u?Hu.addScaledVector(Ih,p):Hu.addScaledVector(Ih.sub(t),p))}t.add(Hu)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ku.copy(i.boundingSphere),ku.applyMatrix4(a),Ds.copy(e.ray).recast(e.near),!(ku.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(ku,Dg)===null||Ds.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Lg.copy(a).invert(),Ds.copy(e.ray).applyMatrix4(Lg),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,h=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const S=g[E],v=u[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let w=L,U=b;w<U;w+=3){const D=c.getX(w),I=c.getX(w+1),O=c.getX(w+2);s=Wu(this,v,e,i,d,p,_,D,I,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let S=E,v=M;S<v;S+=3){const L=c.getX(S),b=c.getX(S+1),w=c.getX(S+2);s=Wu(this,u,e,i,d,p,_,L,b,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const S=g[E],v=u[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=L,U=b;w<U;w+=3){const D=w,I=w+1,O=w+2;s=Wu(this,v,e,i,d,p,_,D,I,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let S=E,v=M;S<v;S+=3){const L=S,b=S+1,w=S+2;s=Wu(this,u,e,i,d,p,_,L,b,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function vM(o,e,t,i,s,a,u,c){let h;if(e.side===qn?h=i.intersectTriangle(u,a,s,!0,c):h=i.intersectTriangle(s,a,u,e.side===us,c),h===null)return null;Gu.copy(c),Gu.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Gu);return d<t.near||d>t.far?null:{distance:d,point:Gu.clone(),object:o}}function Wu(o,e,t,i,s,a,u,c,h,d){o.getVertexPosition(c,zu),o.getVertexPosition(h,Bu),o.getVertexPosition(d,Vu);const p=vM(o,e,t,i,zu,Bu,Vu,Ig);if(p){const _=new q;Fi.getBarycoord(Ig,zu,Bu,Vu,_),s&&(p.uv=Fi.getInterpolatedAttribute(s,c,h,d,_,new St)),a&&(p.uv1=Fi.getInterpolatedAttribute(a,c,h,d,_,new St)),u&&(p.normal=Fi.getInterpolatedAttribute(u,c,h,d,_,new q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:h,c:d,normal:new q,materialIndex:0};Fi.getNormal(zu,Bu,Vu,g.normal),p.face=g,p.barycoord=_}return p}class yl extends Vi{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const h=[],d=[],p=[],_=[];let g=0,y=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,a,4),E("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(_,2));function E(M,S,v,L,b,w,U,D,I,O,A){const R=w/I,z=U/O,J=w/2,Y=U/2,le=D/2,ue=I+1,ne=O+1;let se=0,B=0;const ce=new q;for(let oe=0;oe<ne;oe++){const k=oe*z-Y;for(let ee=0;ee<ue;ee++){const Le=ee*R-J;ce[M]=Le*L,ce[S]=k*b,ce[v]=le,d.push(ce.x,ce.y,ce.z),ce[M]=0,ce[S]=0,ce[v]=D>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(ee/I),_.push(1-oe/O),se+=1}}for(let oe=0;oe<O;oe++)for(let k=0;k<I;k++){const ee=g+k+ue*oe,Le=g+k+ue*(oe+1),K=g+(k+1)+ue*(oe+1),fe=g+(k+1)+ue*oe;h.push(ee,Le,fe),h.push(Le,K,fe),B+=6}c.addGroup(y,B,A),y+=B,g+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function On(o){const e={};for(let t=0;t<o.length;t++){const i=ia(o[t]);for(const s in i)e[s]=i[s]}return e}function xM(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function vv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const yM={clone:ia,merge:On};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xv extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new q,Ug=new St,Ng=new St;class ui extends xv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Ug,Ng),t.subVectors(Ng,Ug)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;a+=u.offsetX*s/h,t-=u.offsetY*i/d,s*=u.width/h,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oo=-90,ko=1;class EM extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ui(Oo,ko,e,t);s.layers=this.layers,this.add(s);const a=new ui(Oo,ko,e,t);a.layers=this.layers,this.add(a);const u=new ui(Oo,ko,e,t);u.layers=this.layers,this.add(u);const c=new ui(Oo,ko,e,t);c.layers=this.layers,this.add(c);const h=new ui(Oo,ko,e,t);h.layers=this.layers,this.add(h);const d=new ui(Oo,ko,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,h]=t;for(const d of t)this.remove(d);if(e===Er)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,h,d,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,h),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(_,g,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class yv extends $n{constructor(e,t,i,s,a,u,c,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Qo,super(e,t,i,s,a,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TM extends Zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ki}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yl(5,5,5),a=new cs({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:ss});a.uniforms.tEquirect.value=t;const u=new ki(s,a),c=t.minFilter;return t.minFilter===Ws&&(t.minFilter=Ki),new EM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}class wM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Uh=new q,AM=new q,CM=new st;class ks{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Uh.subVectors(i,t).cross(AM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||CM.getNormalMatrix(e),s=this.coplanarPoint(Uh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new xl,Xu=new q;class yp{constructor(e=new ks,t=new ks,i=new ks,s=new ks,a=new ks,u=new ks){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Er){const i=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],h=s[3],d=s[4],p=s[5],_=s[6],g=s[7],y=s[8],E=s[9],M=s[10],S=s[11],v=s[12],L=s[13],b=s[14],w=s[15];if(i[0].setComponents(h-a,g-d,S-y,w-v).normalize(),i[1].setComponents(h+a,g+d,S+y,w+v).normalize(),i[2].setComponents(h+u,g+p,S+E,w+L).normalize(),i[3].setComponents(h-u,g-p,S-E,w-L).normalize(),i[4].setComponents(h-c,g-_,S-M,w-b).normalize(),t===Er)i[5].setComponents(h+c,g+_,S+M,w+b).normalize();else if(t===mc)i[5].setComponents(c,_,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Xu.x=s.normal.x>0?e.max.x:e.min.x,Xu.y=s.normal.y>0?e.max.y:e.min.y,Xu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uc extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new q,vc=new q,Fg=new zt,qa=new xp,ju=new xl,Nh=new q,Og=new q;class RM extends mn{constructor(e=new Vi,t=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)gc.fromBufferAttribute(t,s-1),vc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=gc.distanceTo(vc);e.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ju.copy(i.boundingSphere),ju.applyMatrix4(s),ju.radius+=a,e.ray.intersectsSphere(ju)===!1)return;Fg.copy(s).invert(),qa.copy(e.ray).applyMatrix4(Fg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const y=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=y,S=E-1;M<S;M+=d){const v=p.getX(M),L=p.getX(M+1),b=Yu(this,e,qa,h,v,L);b&&t.push(b)}if(this.isLineLoop){const M=p.getX(E-1),S=p.getX(y),v=Yu(this,e,qa,h,M,S);v&&t.push(v)}}else{const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let M=y,S=E-1;M<S;M+=d){const v=Yu(this,e,qa,h,M,M+1);v&&t.push(v)}if(this.isLineLoop){const M=Yu(this,e,qa,h,E-1,y);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Yu(o,e,t,i,s,a){const u=o.geometry.attributes.position;if(gc.fromBufferAttribute(u,s),vc.fromBufferAttribute(u,a),t.distanceSqToSegment(gc,vc,Nh,Og)>i)return;Nh.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Nh);if(!(h<e.near||h>e.far))return{distance:h,point:Og.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const kg=new q,zg=new q;class Bg extends RM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)kg.fromBufferAttribute(t,s),zg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kg.distanceTo(zg);e.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qa extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vg=new zt,Yd=new xp,qu=new xl,$u=new q;class Fh extends mn{constructor(e=new Vi,t=new Qa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qu.copy(i.boundingSphere),qu.applyMatrix4(s),qu.radius+=a,e.ray.intersectsSphere(qu)===!1)return;Vg.copy(s).invert(),Yd.copy(e.ray).applyMatrix4(Vg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=i.index,_=i.attributes.position;if(d!==null){const g=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=g,M=y;E<M;E++){const S=d.getX(E);$u.fromBufferAttribute(_,S),Hg($u,S,h,s,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=g,M=y;E<M;E++)$u.fromBufferAttribute(_,E),Hg($u,E,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Hg(o,e,t,i,s,a,u){const c=Yd.distanceSqToPoint(o);if(c<t){const h=new q;Yd.closestPointToPoint(o,h),h.applyMatrix4(i);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ja extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Sv extends $n{constructor(e,t,i,s,a,u,c,h,d,p=jo){if(p!==jo&&p!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===jo&&(i=Ks),i===void 0&&p===ta&&(i=ea),super(null,s,a,u,c,h,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:zi,this.minFilter=h!==void 0?h:zi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cc extends Vi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),h=Math.floor(s),d=c+1,p=h+1,_=e/c,g=t/h,y=[],E=[],M=[],S=[];for(let v=0;v<p;v++){const L=v*g-u;for(let b=0;b<d;b++){const w=b*_-a;E.push(w,-L,0),M.push(0,0,1),S.push(b/c),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<c;L++){const b=L+d*v,w=L+d*(v+1),U=L+1+d*(v+1),D=L+1+d*v;y.push(b,w,D),y.push(w,U,D)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class PM extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vp,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bM extends PM{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class LM extends er{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vp,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DM extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IM extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gg={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class UM{constructor(e,t,i){const s=this;let a=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,a===!1&&s.onStart!==void 0&&s.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,s.onProgress!==void 0&&s.onProgress(p,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=d.length;_<g;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null}}}const NM=new UM;class Sp{constructor(e){this.manager=e!==void 0?e:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const gr={};class FM extends Error{constructor(e,t){super(e),this.response=t}}class OM extends Sp{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Gg.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(gr[e]!==void 0){gr[e].push({onLoad:t,onProgress:i,onError:s});return}gr[e]=[],gr[e].push({onLoad:t,onProgress:i,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,h=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=gr[e],_=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=g?parseInt(g):0,E=y!==0;let M=0;const S=new ReadableStream({start(v){L();function L(){_.read().then(({done:b,value:w})=>{if(b)v.close();else{M+=w.byteLength;const U=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:y});for(let D=0,I=p.length;D<I;D++){const O=p[D];O.onProgress&&O.onProgress(U)}v.enqueue(w),L()}},b=>{v.error(b)})}}});return new Response(S)}else throw new FM(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c===void 0)return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(c),g=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(g);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{Gg.add(e,d);const p=gr[e];delete gr[e];for(let _=0,g=p.length;_<g;_++){const y=p[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=gr[e];if(p===void 0)throw this.manager.itemError(e),d;delete gr[e];for(let _=0,g=p.length;_<g;_++){const y=p[_];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mv extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kM extends Mv{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oh=new zt,Wg=new q,Xg=new q;class zM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wg),Xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xg),t.updateMatrixWorld(),Oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jg=new zt,$a=new q,kh=new q;class BM extends zM{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),$a.setFromMatrixPosition(e.matrixWorld),i.position.copy($a),kh.copy(i.position),kh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kh),i.updateMatrixWorld(),s.makeTranslation(-$a.x,-$a.y,-$a.z),jg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jg)}}class Ev extends Mv{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class VM extends xv{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class HM extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Yg(o,e,t,i){const s=GM(i);switch(t){case nv:return o*e;case rv:return o*e;case sv:return o*e*2;case ov:return o*e/s.components*s.byteLength;case mp:return o*e/s.components*s.byteLength;case av:return o*e*2/s.components*s.byteLength;case _p:return o*e*2/s.components*s.byteLength;case iv:return o*e*3/s.components*s.byteLength;case Oi:return o*e*4/s.components*s.byteLength;case gp:return o*e*4/s.components*s.byteLength;case rc:case sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Ed:return Math.max(o,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(o,8)*Math.max(e,8)/2;case Td:case wd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case lc:case Vd:case Hd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case lv:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wd:case Xd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GM(o){switch(o){case wr:case J0:return{byteLength:1,components:1};case al:case ev:case ml:return{byteLength:2,components:1};case dp:case pp:return{byteLength:2,components:4};case Ks:case hp:case Mr:return{byteLength:4,components:1};case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function WM(o){const e=new WeakMap;function t(c,h){const d=c.array,p=c.usage,_=d.byteLength,g=o.createBuffer();o.bindBuffer(h,g),o.bufferData(h,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function i(c,h,d){const p=h.array,_=h.updateRanges;if(o.bindBuffer(d,c),_.length===0)o.bufferSubData(d,0,p);else{_.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<_.length;y++){const E=_[g],M=_[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,_[g]=M)}_.length=g+1;for(let y=0,E=_.length;y<E;y++){const M=_[y];o.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(o.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,h),d.version=c.version}}return{get:s,remove:a,update:u}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
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
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rE=`#ifdef USE_IRIDESCENCE
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
#endif`,sE=`#ifdef USE_BUMPMAP
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_E=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,OE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,GE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,WE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e1=`#if defined( USE_POINTS_UV )
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
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
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
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,D1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,U1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q1=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,J1=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,sT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,oT=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,aT=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lT=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,uT=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cT=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,fT=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hT=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,dT=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pT=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,mT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_T=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,gT=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,vT=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,xT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ST=`uniform vec3 color;
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
}`,MT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ET=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,at={alphahash_fragment:XM,alphahash_pars_fragment:jM,alphamap_fragment:YM,alphamap_pars_fragment:qM,alphatest_fragment:$M,alphatest_pars_fragment:KM,aomap_fragment:ZM,aomap_pars_fragment:QM,batching_pars_vertex:JM,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:rE,bumpmap_pars_fragment:sE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:uE,color_fragment:cE,color_pars_fragment:fE,color_pars_vertex:hE,color_vertex:dE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:_E,displacementmap_pars_vertex:gE,displacementmap_vertex:vE,emissivemap_fragment:xE,emissivemap_pars_fragment:yE,colorspace_fragment:SE,colorspace_pars_fragment:ME,envmap_fragment:EE,envmap_common_pars_fragment:TE,envmap_pars_fragment:wE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:OE,envmap_vertex:CE,fog_vertex:RE,fog_pars_vertex:PE,fog_fragment:bE,fog_pars_fragment:LE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:IE,lights_lambert_fragment:UE,lights_lambert_pars_fragment:NE,lights_pars_begin:FE,lights_toon_fragment:kE,lights_toon_pars_fragment:zE,lights_phong_fragment:BE,lights_phong_pars_fragment:VE,lights_physical_fragment:HE,lights_physical_pars_fragment:GE,lights_fragment_begin:WE,lights_fragment_maps:XE,lights_fragment_end:jE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:KE,map_fragment:ZE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphinstance_vertex:i1,morphcolor_vertex:r1,morphnormal_vertex:s1,morphtarget_pars_vertex:o1,morphtarget_vertex:a1,normal_fragment_begin:l1,normal_fragment_maps:u1,normal_pars_fragment:c1,normal_pars_vertex:f1,normal_vertex:h1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:_1,iridescence_pars_fragment:g1,opaque_fragment:v1,packing:x1,premultiplied_alpha_fragment:y1,project_vertex:S1,dithering_fragment:M1,dithering_pars_fragment:E1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:A1,shadowmap_pars_vertex:C1,shadowmap_vertex:R1,shadowmask_pars_fragment:P1,skinbase_vertex:b1,skinning_pars_vertex:L1,skinning_vertex:D1,skinnormal_vertex:I1,specularmap_fragment:U1,specularmap_pars_fragment:N1,tonemapping_fragment:F1,tonemapping_pars_fragment:O1,transmission_fragment:k1,transmission_pars_fragment:z1,uv_pars_fragment:B1,uv_pars_vertex:V1,uv_vertex:H1,worldpos_vertex:G1,background_vert:W1,background_frag:X1,backgroundCube_vert:j1,backgroundCube_frag:Y1,cube_vert:q1,cube_frag:$1,depth_vert:K1,depth_frag:Z1,distanceRGBA_vert:Q1,distanceRGBA_frag:J1,equirect_vert:eT,equirect_frag:tT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:rT,meshbasic_frag:sT,meshlambert_vert:oT,meshlambert_frag:aT,meshmatcap_vert:lT,meshmatcap_frag:uT,meshnormal_vert:cT,meshnormal_frag:fT,meshphong_vert:hT,meshphong_frag:dT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:_T,meshtoon_frag:gT,points_vert:vT,points_frag:xT,shadow_vert:yT,shadow_frag:ST,sprite_vert:MT,sprite_frag:ET},Re={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},qi={basic:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:On([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:On([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:On([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:On([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:On([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:On([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:On([Re.common,Re.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:On([Re.lights,Re.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};qi.physical={uniforms:On([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ku={r:0,b:0,g:0},Us=new Bi,TT=new zt;function wT(o,e,t,i,s,a,u){const c=new ot(0);let h=a===!0?0:1,d,p,_=null,g=0,y=null;function E(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function M(b){let w=!1;const U=E(b);U===null?v(c,h):U&&U.isColor&&(v(U,1),w=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(b,w){const U=E(w);U&&(U.isCubeTexture||U.mapping===Ac)?(p===void 0&&(p=new ki(new yl(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:ia(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Us.copy(w.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(Us)),p.material.toneMapped=wt.getTransfer(U.colorSpace)!==bt,(_!==U||g!==U.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=U,g=U.version,y=o.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new ki(new Cc(2,2),new cs({name:"BackgroundMaterial",uniforms:ia(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=wt.getTransfer(U.colorSpace)!==bt,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||g!==U.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,_=U,g=U.version,y=o.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function v(b,w){b.getRGB(Ku,vv(o)),i.buffers.color.setClear(Ku.r,Ku.g,Ku.b,w,u)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,w=1){c.set(b),h=w,v(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,v(c,h)},render:M,addToRenderList:S,dispose:L}}function AT(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=g(null);let a=s,u=!1;function c(R,z,J,Y,le){let ue=!1;const ne=_(Y,J,z);a!==ne&&(a=ne,d(a.object)),ue=y(R,Y,J,le),ue&&E(R,Y,J,le),le!==null&&e.update(le,o.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,w(R,z,J,Y),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function p(R){return o.deleteVertexArray(R)}function _(R,z,J){const Y=J.wireframe===!0;let le=i[R.id];le===void 0&&(le={},i[R.id]=le);let ue=le[z.id];ue===void 0&&(ue={},le[z.id]=ue);let ne=ue[Y];return ne===void 0&&(ne=g(h()),ue[Y]=ne),ne}function g(R){const z=[],J=[],Y=[];for(let le=0;le<t;le++)z[le]=0,J[le]=0,Y[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:Y,object:R,attributes:{},index:null}}function y(R,z,J,Y){const le=a.attributes,ue=z.attributes;let ne=0;const se=J.getAttributes();for(const B in se)if(se[B].location>=0){const oe=le[B];let k=ue[B];if(k===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;ne++}return a.attributesNum!==ne||a.index!==Y}function E(R,z,J,Y){const le={},ue=z.attributes;let ne=0;const se=J.getAttributes();for(const B in se)if(se[B].location>=0){let oe=ue[B];oe===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),le[B]=k,ne++}a.attributes=le,a.attributesNum=ne,a.index=Y}function M(){const R=a.newAttributes;for(let z=0,J=R.length;z<J;z++)R[z]=0}function S(R){v(R,0)}function v(R,z){const J=a.newAttributes,Y=a.enabledAttributes,le=a.attributeDivisors;J[R]=1,Y[R]===0&&(o.enableVertexAttribArray(R),Y[R]=1),le[R]!==z&&(o.vertexAttribDivisor(R,z),le[R]=z)}function L(){const R=a.newAttributes,z=a.enabledAttributes;for(let J=0,Y=z.length;J<Y;J++)z[J]!==R[J]&&(o.disableVertexAttribArray(J),z[J]=0)}function b(R,z,J,Y,le,ue,ne){ne===!0?o.vertexAttribIPointer(R,z,J,le,ue):o.vertexAttribPointer(R,z,J,Y,le,ue)}function w(R,z,J,Y){M();const le=Y.attributes,ue=J.getAttributes(),ne=z.defaultAttributeValues;for(const se in ue){const B=ue[se];if(B.location>=0){let ce=le[se];if(ce===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const oe=ce.normalized,k=ce.itemSize,ee=e.get(ce);if(ee===void 0)continue;const Le=ee.buffer,K=ee.type,fe=ee.bytesPerElement,Me=K===o.INT||K===o.UNSIGNED_INT||ce.gpuType===hp;if(ce.isInterleavedBufferAttribute){const ve=ce.data,Te=ve.stride,Ue=ce.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)v(B.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Le);for(let Ze=0;Ze<B.locationSize;Ze++)b(B.location+Ze,k/B.locationSize,K,oe,Te*fe,(Ue+k/B.locationSize*Ze)*fe,Me)}else{if(ce.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)v(B.location+ve,ce.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Le);for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve,k/B.locationSize,K,oe,k*fe,k/B.locationSize*ve*fe,Me)}}else if(ne!==void 0){const oe=ne[se];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(B.location,oe);break;case 3:o.vertexAttrib3fv(B.location,oe);break;case 4:o.vertexAttrib4fv(B.location,oe);break;default:o.vertexAttrib1fv(B.location,oe)}}}}L()}function U(){O();for(const R in i){const z=i[R];for(const J in z){const Y=z[J];for(const le in Y)p(Y[le].object),delete Y[le];delete z[J]}delete i[R]}}function D(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const J in z){const Y=z[J];for(const le in Y)p(Y[le].object),delete Y[le];delete z[J]}delete i[R.id]}function I(R){for(const z in i){const J=i[z];if(J[R.id]===void 0)continue;const Y=J[R.id];for(const le in Y)p(Y[le].object),delete Y[le];delete J[R.id]}}function O(){A(),u=!0,a!==s&&(a=s,d(a.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:O,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function CT(o,e,t){let i;function s(d){i=d}function a(d,p){o.drawArrays(i,d,p),t.update(p,i,1)}function u(d,p,_){_!==0&&(o.drawArraysInstanced(i,d,p,_),t.update(p,i,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,_);let y=0;for(let E=0;E<_;E++)y+=p[E];t.update(y,i,1)}function h(d,p,_,g){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],p[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M]*g[M];t.update(E,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function RT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Oi&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const O=I===ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==wr&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Mr&&!O)}function h(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,D=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:U,maxSamples:D}}function PT(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new ks,c=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||i!==0||s;return s=g,i=_.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,y){const E=_.clippingPlanes,M=_.clipIntersection,S=_.clipShadows,v=o.get(_);if(!s||E===null||E.length===0||a&&!S)a?p(null):d();else{const L=a?0:i,b=L*4;let w=v.clippingState||null;h.value=w,w=p(E,g,b,y);for(let U=0;U!==b;++U)w[U]=t[U];v.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,y,E){const M=_!==null?_.length:0;let S=null;if(M!==0){if(S=h.value,E!==!0||S===null){const v=y+M*4,L=g.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let b=0,w=y;b!==M;++b,w+=4)u.copy(_[b]).applyMatrix4(L,c),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function bT(o){let e=new WeakMap;function t(u,c){return c===_d?u.mapping=Qo:c===gd&&(u.mapping=Jo),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===_d||c===gd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new TM(h.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Ho=4,qg=[.125,.215,.35,.446,.526,.582],Hs=20,zh=new VM,$g=new ot;let Bh=null,Vh=0,Hh=0,Gh=!1;const zs=(1+Math.sqrt(5))/2,zo=1/zs,Kg=[new q(-zs,zo,0),new q(zs,zo,0),new q(-zo,0,zs),new q(zo,0,zs),new q(0,zs,-zo),new q(0,zs,zo),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Bh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Vh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,Zu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:ml,format:Oi,colorSpace:na,depthBuffer:!1},s=Qg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LT(a)),this._blurMaterial=DT(a,e,t)}return s}_compileMaterial(e){const t=new ki(this._lodPlanes[0],e);this._renderer.compile(t,zh)}_sceneToCubeUV(e,t,i,s){const c=new ui(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor($g),p.toneMapping=os,p.autoClear=!1;const y=new mv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),E=new ki(new yl,y);let M=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,M=!0):(y.color.copy($g),M=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(c.up.set(0,h[v],0),c.lookAt(d[v],0,0)):L===1?(c.up.set(0,0,h[v]),c.lookAt(0,d[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,d[v]));const b=this._cubeSize;Zu(s,L*b,v>2?b:0,b,b),p.setRenderTarget(s),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qo||e.mapping===Jo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new ki(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;Zu(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(u,zh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Kg[(s-a-1)%Kg.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ki(this._lodPlanes[s],d),g=d.uniforms,y=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Hs-1),M=a/E,S=isFinite(a)?1+Math.floor(p*M):Hs;S>Hs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Hs}`);const v=[];let L=0;for(let I=0;I<Hs;++I){const O=I/M,A=Math.exp(-O*O/2);v.push(A),I===0?L+=A:I<S&&(L+=2*A)}for(let I=0;I<v.length;I++)v[I]=v[I]/L;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:b}=this;g.dTheta.value=E,g.mipInt.value=b-i;const w=this._sizeLods[s],U=3*w*(s>b-Ho?s-b+Ho:0),D=4*(this._cubeSize-w);Zu(t,U,D,3*w,2*w),h.setRenderTarget(t),h.render(_,zh)}}function LT(o){const e=[],t=[],i=[];let s=o;const a=o-Ho+1+qg.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let h=1/c;u>o-Ho?h=qg[u-o+Ho-1]:u===0&&(h=0),i.push(h);const d=1/(c-2),p=-d,_=1+d,g=[p,p,_,p,_,_,p,p,_,_,p,_],y=6,E=6,M=3,S=2,v=1,L=new Float32Array(M*E*y),b=new Float32Array(S*E*y),w=new Float32Array(v*E*y);for(let D=0;D<y;D++){const I=D%3*2/3-1,O=D>2?0:-1,A=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];L.set(A,M*E*D),b.set(g,S*E*D);const R=[D,D,D,D,D,D];w.set(R,v*E*D)}const U=new Vi;U.setAttribute("position",new Qi(L,M)),U.setAttribute("uv",new Qi(b,S)),U.setAttribute("faceIndex",new Qi(w,v)),e.push(U),s>Ho&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qg(o,e,t){const i=new Zs(o,e,t);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function DT(o,e,t){const i=new Float32Array(Hs),s=new q(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Jg(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function e0(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Mp(){return`

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
	`}function IT(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===_d||h===gd,p=h===Qo||h===Jo;if(d||p){let _=e.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Zg(o)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const y=c.image;return d&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new Zg(o)),_=d?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function s(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function a(c){const h=c.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function UT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Vo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function NT(o,e,t,i){const s={},a=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete s[g.id];const y=a.get(g);y&&(e.remove(y),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(_,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const y in g)e.update(g[y],o.ARRAY_BUFFER)}function d(_){const g=[],y=_.index,E=_.attributes.position;let M=0;if(y!==null){const L=y.array;M=y.version;for(let b=0,w=L.length;b<w;b+=3){const U=L[b+0],D=L[b+1],I=L[b+2];g.push(U,D,D,I,I,U)}}else if(E!==void 0){const L=E.array;M=E.version;for(let b=0,w=L.length/3-1;b<w;b+=3){const U=b+0,D=b+1,I=b+2;g.push(U,D,D,I,I,U)}}else return;const S=new(cv(g)?gv:_v)(g,1);S.version=M;const v=a.get(_);v&&e.remove(v),a.set(_,S)}function p(_){const g=a.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:h,getWireframeAttribute:p}}function FT(o,e,t){let i;function s(g){i=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function h(g,y){o.drawElements(i,y,a,g*u),t.update(y,i,1)}function d(g,y,E){E!==0&&(o.drawElementsInstanced(i,y,a,g*u,E),t.update(y,i,E))}function p(g,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,g,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];t.update(S,i,1)}function _(g,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<g.length;v++)d(g[v]/u,y[v],M[v]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,g,0,M,0,E);let v=0;for(let L=0;L<E;L++)v+=y[L]*M[L];t.update(v,i,1)}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function OT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kT(o,e,t){const i=new WeakMap,s=new Lt;function a(u,c,h){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(c);if(g===void 0||g.count!==_){let R=function(){O.dispose(),i.delete(c),c.removeEventListener("dispose",R)};var y=R;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let U=c.attributes.position.count*w,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*D*4*_),O=new hv(I,U,D,_);O.type=Mr,O.needsUpdate=!0;const A=w*4;for(let z=0;z<_;z++){const J=v[z],Y=L[z],le=b[z],ue=U*D*4*z;for(let ne=0;ne<J.count;ne++){const se=ne*A;E===!0&&(s.fromBufferAttribute(J,ne),I[ue+se+0]=s.x,I[ue+se+1]=s.y,I[ue+se+2]=s.z,I[ue+se+3]=0),M===!0&&(s.fromBufferAttribute(Y,ne),I[ue+se+4]=s.x,I[ue+se+5]=s.y,I[ue+se+6]=s.z,I[ue+se+7]=0),S===!0&&(s.fromBufferAttribute(le,ne),I[ue+se+8]=s.x,I[ue+se+9]=s.y,I[ue+se+10]=s.z,I[ue+se+11]=le.itemSize===4?s.w:1)}}g={count:_,texture:O,size:new St(U,D)},i.set(c,g),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(o,"morphTargetBaseInfluence",M),h.getUniforms().setValue(o,"morphTargetInfluences",d)}h.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function zT(o,e,t,i){let s=new WeakMap;function a(h){const d=i.render.frame,p=h.geometry,_=e.get(h,p);if(s.get(_)!==d&&(e.update(_),s.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==d&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const g=h.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return _}function u(){s=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}const wv=new $n,t0=new Sv(1,1),Av=new hv,Cv=new lM,Rv=new yv,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),o0=new Float32Array(4);function ca(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=n0[s];if(a===void 0&&(a=new Float32Array(s),n0[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function an(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function ln(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Rc(o,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function BT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function VT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;o.uniform2fv(this.addr,e),ln(t,e)}}function HT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;o.uniform3fv(this.addr,e),ln(t,e)}}function GT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;o.uniform4fv(this.addr,e),ln(t,e)}}function WT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;o0.set(i),o.uniformMatrix2fv(this.addr,!1,o0),ln(t,i)}}function XT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;s0.set(i),o.uniformMatrix3fv(this.addr,!1,s0),ln(t,i)}}function jT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;r0.set(i),o.uniformMatrix4fv(this.addr,!1,r0),ln(t,i)}}function YT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function qT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;o.uniform2iv(this.addr,e),ln(t,e)}}function $T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;o.uniform3iv(this.addr,e),ln(t,e)}}function KT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;o.uniform4iv(this.addr,e),ln(t,e)}}function ZT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function QT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;o.uniform2uiv(this.addr,e),ln(t,e)}}function JT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;o.uniform3uiv(this.addr,e),ln(t,e)}}function ew(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;o.uniform4uiv(this.addr,e),ln(t,e)}}function tw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(t0.compareFunction=uv,a=t0):a=wv,t.setTexture2D(e||a,s)}function nw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cv,s)}function iw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rv,s)}function rw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Av,s)}function sw(o){switch(o){case 5126:return BT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return $T;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return QT;case 36295:return JT;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}function ow(o,e){o.uniform1fv(this.addr,e)}function aw(o,e){const t=ca(e,this.size,2);o.uniform2fv(this.addr,t)}function lw(o,e){const t=ca(e,this.size,3);o.uniform3fv(this.addr,t)}function uw(o,e){const t=ca(e,this.size,4);o.uniform4fv(this.addr,t)}function cw(o,e){const t=ca(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function fw(o,e){const t=ca(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function hw(o,e){const t=ca(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function dw(o,e){o.uniform1iv(this.addr,e)}function pw(o,e){o.uniform2iv(this.addr,e)}function mw(o,e){o.uniform3iv(this.addr,e)}function _w(o,e){o.uniform4iv(this.addr,e)}function gw(o,e){o.uniform1uiv(this.addr,e)}function vw(o,e){o.uniform2uiv(this.addr,e)}function xw(o,e){o.uniform3uiv(this.addr,e)}function yw(o,e){o.uniform4uiv(this.addr,e)}function Sw(o,e,t){const i=this.cache,s=e.length,a=Rc(t,s);an(i,a)||(o.uniform1iv(this.addr,a),ln(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||wv,a[u])}function Mw(o,e,t){const i=this.cache,s=e.length,a=Rc(t,s);an(i,a)||(o.uniform1iv(this.addr,a),ln(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Cv,a[u])}function Ew(o,e,t){const i=this.cache,s=e.length,a=Rc(t,s);an(i,a)||(o.uniform1iv(this.addr,a),ln(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Rv,a[u])}function Tw(o,e,t){const i=this.cache,s=e.length,a=Rc(t,s);an(i,a)||(o.uniform1iv(this.addr,a),ln(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Av,a[u])}function ww(o){switch(o){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return uw;case 35674:return cw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return dw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return _w;case 5125:return gw;case 36294:return vw;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}class Aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sw(t.type)}}class Cw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ww(t.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function a0(o,e){o.seq.push(e),o.map[e.id]=e}function Pw(o,e,t){const i=o.name,s=i.length;for(Wh.lastIndex=0;;){const a=Wh.exec(i),u=Wh.lastIndex;let c=a[1];const h=a[2]==="]",d=a[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===s){a0(t,d===void 0?new Aw(c,o,e):new Cw(c,o,e));break}else{let _=t.map[c];_===void 0&&(_=new Rw(c),a0(t,_)),t=_}}}class cc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);Pw(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function l0(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const bw=37297;let Lw=0;function Dw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const u0=new st;function Iw(o){wt._getMatrix(u0,wt.workingColorSpace,o);const e=`mat3( ${u0.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(o)){case pc:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function c0(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Dw(o.getShaderSource(e),u)}else return s}function Uw(o,e){const t=Iw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nw(o,e){let t;switch(e){case US:t="Linear";break;case NS:t="Reinhard";break;case FS:t="Cineon";break;case OS:t="ACESFilmic";break;case zS:t="AgX";break;case BS:t="Neutral";break;case kS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qu=new q;function Fw(){wt.getLuminanceCoefficients(Qu);const o=Qu.x.toFixed(4),e=Qu.y.toFixed(4),t=Qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ow(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function kw(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function el(o){return o!==""}function f0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(o){return o.replace(Bw,Hw)}const Vw=new Map;function Hw(o,e){let t=at[e];if(t===void 0){const i=Vw.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qd(t)}const Gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(o){return o.replace(Gw,Ww)}function Ww(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function p0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function jw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Qo:case Jo:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function qw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case DS:e="ENVMAP_BLENDING_MIX";break;case IS:e="ENVMAP_BLENDING_ADD";break}return e}function $w(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kw(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=Xw(t),d=jw(t),p=Yw(t),_=qw(t),g=$w(t),y=Ow(t),E=kw(a),M=s.createProgram();let S,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(el).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(el).join(`
`),v.length>0&&(v+=`
`)):(S=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),v=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?at.tonemapping_pars_fragment:"",t.toneMapping!==os?Nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Uw("linearToOutputTexel",t.outputColorSpace),Fw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),u=qd(u),u=f0(u,t),u=h0(u,t),c=qd(c),c=f0(c,t),c=h0(c,t),u=d0(u),c=d0(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=L+S+u,w=L+v+c,U=l0(s,s.VERTEX_SHADER,b),D=l0(s,s.FRAGMENT_SHADER,w);s.attachShader(M,U),s.attachShader(M,D),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(z){if(o.debug.checkShaderErrors){const J=s.getProgramInfoLog(M).trim(),Y=s.getShaderInfoLog(U).trim(),le=s.getShaderInfoLog(D).trim();let ue=!0,ne=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ue=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,U,D);else{const se=c0(s,U,"vertex"),B=c0(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+se+`
`+B)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||le==="")&&(ne=!1);ne&&(z.diagnostics={runnable:ue,programLog:J,vertexShader:{log:Y,prefix:S},fragmentShader:{log:le,prefix:v}})}s.deleteShader(U),s.deleteShader(D),O=new cc(s,M),A=zw(s,M)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,bw)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=D,this}let Zw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jw(e),t.set(e,i)),i}}class Jw{constructor(e){this.id=Zw++,this.code=e,this.usedTimes=0}}function eA(o,e,t,i,s,a,u){const c=new dv,h=new Qw,d=new Set,p=[],_=s.logarithmicDepthBuffer,g=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return d.add(A),A===0?"uv":`uv${A}`}function S(A,R,z,J,Y){const le=J.fog,ue=Y.geometry,ne=A.isMeshStandardMaterial?J.environment:null,se=(A.isMeshStandardMaterial?t:e).get(A.envMap||ne),B=se&&se.mapping===Ac?se.image.height:null,ce=E[A.type];A.precision!==null&&(y=s.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const oe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,k=oe!==void 0?oe.length:0;let ee=0;ue.morphAttributes.position!==void 0&&(ee=1),ue.morphAttributes.normal!==void 0&&(ee=2),ue.morphAttributes.color!==void 0&&(ee=3);let Le,K,fe,Me;if(ce){const xt=qi[ce];Le=xt.vertexShader,K=xt.fragmentShader}else Le=A.vertexShader,K=A.fragmentShader,h.update(A),fe=h.getVertexShaderID(A),Me=h.getFragmentShaderID(A);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=Y.isInstancedMesh===!0,Ze=Y.isBatchedMesh===!0,Rt=!!A.map,pt=!!A.matcap,It=!!se,H=!!A.aoMap,Ln=!!A.lightMap,ht=!!A.bumpMap,ut=!!A.normalMap,je=!!A.displacementMap,Ct=!!A.emissiveMap,We=!!A.metalnessMap,N=!!A.roughnessMap,C=A.anisotropy>0,Q=A.clearcoat>0,pe=A.dispersion>0,_e=A.iridescence>0,he=A.sheen>0,He=A.transmission>0,we=C&&!!A.anisotropyMap,Ne=Q&&!!A.clearcoatMap,lt=Q&&!!A.clearcoatNormalMap,Se=Q&&!!A.clearcoatRoughnessMap,ke=_e&&!!A.iridescenceMap,qe=_e&&!!A.iridescenceThicknessMap,Qe=he&&!!A.sheenColorMap,ze=he&&!!A.sheenRoughnessMap,ct=!!A.specularMap,nt=!!A.specularColorMap,At=!!A.specularIntensityMap,X=He&&!!A.transmissionMap,Ae=He&&!!A.thicknessMap,ae=!!A.gradientMap,de=!!A.alphaMap,be=A.alphaTest>0,Pe=!!A.alphaHash,it=!!A.extensions;let Ft=os;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ft=o.toneMapping);const rn={shaderID:ce,shaderType:A.type,shaderName:A.name,vertexShader:Le,fragmentShader:K,defines:A.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&Y._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Y.instanceColor!==null,instancingMorph:Ue&&Y.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:na,alphaToCoverage:!!A.alphaToCoverage,map:Rt,matcap:pt,envMap:It,envMapMode:It&&se.mapping,envMapCubeUVHeight:B,aoMap:H,lightMap:Ln,bumpMap:ht,normalMap:ut,displacementMap:g&&je,emissiveMap:Ct,normalMapObjectSpace:ut&&A.normalMapType===WS,normalMapTangentSpace:ut&&A.normalMapType===vp,metalnessMap:We,roughnessMap:N,anisotropy:C,anisotropyMap:we,clearcoat:Q,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:he,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:ct,specularColorMap:nt,specularIntensityMap:At,transmission:He,transmissionMap:X,thicknessMap:Ae,gradientMap:ae,opaque:A.transparent===!1&&A.blending===Xo&&A.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:A.combine,mapUv:Rt&&M(A.map.channel),aoMapUv:H&&M(A.aoMap.channel),lightMapUv:Ln&&M(A.lightMap.channel),bumpMapUv:ht&&M(A.bumpMap.channel),normalMapUv:ut&&M(A.normalMap.channel),displacementMapUv:je&&M(A.displacementMap.channel),emissiveMapUv:Ct&&M(A.emissiveMap.channel),metalnessMapUv:We&&M(A.metalnessMap.channel),roughnessMapUv:N&&M(A.roughnessMap.channel),anisotropyMapUv:we&&M(A.anisotropyMap.channel),clearcoatMapUv:Ne&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(A.sheenRoughnessMap.channel),specularMapUv:ct&&M(A.specularMap.channel),specularColorMapUv:nt&&M(A.specularColorMap.channel),specularIntensityMapUv:At&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:Ae&&M(A.thicknessMap.channel),alphaMapUv:de&&M(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ut||C),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ue.attributes.uv&&(Rt||de),fog:!!le,useFog:A.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Rt&&A.map.isVideoTexture===!0&&wt.getTransfer(A.map.colorSpace)===bt,decodeVideoTextureEmissive:Ct&&A.emissiveMap.isVideoTexture===!0&&wt.getTransfer(A.emissiveMap.colorSpace)===bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sr,flipSided:A.side===qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:it&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&A.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return rn.vertexUv1s=d.has(1),rn.vertexUv2s=d.has(2),rn.vertexUv3s=d.has(3),d.clear(),rn}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(L(R,A),b(R,A),R.push(o.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function L(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function b(A,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),A.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),A.push(c.mask)}function w(A){const R=E[A.type];let z;if(R){const J=qi[R];z=yM.clone(J.uniforms)}else z=A.uniforms;return z}function U(A,R){let z;for(let J=0,Y=p.length;J<Y;J++){const le=p[J];if(le.cacheKey===R){z=le,++z.usedTimes;break}}return z===void 0&&(z=new Kw(o,R,A,a),p.push(z)),z}function D(A){if(--A.usedTimes===0){const R=p.indexOf(A);p[R]=p[p.length-1],p.pop(),A.destroy()}}function I(A){h.remove(A)}function O(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:w,acquireProgram:U,releaseProgram:D,releaseShaderCache:I,programs:p,dispose:O}}function tA(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,h){o.get(u)[c]=h}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function nA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function m0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(_,g,y,E,M,S){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:g,material:y,groupOrder:E,renderOrder:_.renderOrder,z:M,group:S},o[e]=v):(v.id=_.id,v.object=_,v.geometry=g,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=M,v.group=S),e++,v}function c(_,g,y,E,M,S){const v=u(_,g,y,E,M,S);y.transmission>0?i.push(v):y.transparent===!0?s.push(v):t.push(v)}function h(_,g,y,E,M,S){const v=u(_,g,y,E,M,S);y.transmission>0?i.unshift(v):y.transparent===!0?s.unshift(v):t.unshift(v)}function d(_,g){t.length>1&&t.sort(_||nA),i.length>1&&i.sort(g||m0),s.length>1&&s.sort(g||m0)}function p(){for(let _=e,g=o.length;_<g;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:h,finish:p,sort:d}}function iA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new _0,o.set(i,[u])):s>=a.length?(u=new _0,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function rA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ot};break;case"SpotLight":t={position:new q,direction:new q,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new q,halfWidth:new q,halfHeight:new q};break}return o[e.id]=t,t}}}function sA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let oA=0;function aA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function lA(o){const e=new rA,t=sA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new q);const s=new q,a=new zt,u=new zt;function c(d){let p=0,_=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let y=0,E=0,M=0,S=0,v=0,L=0,b=0,w=0,U=0,D=0,I=0;d.sort(aA);for(let A=0,R=d.length;A<R;A++){const z=d[A],J=z.color,Y=z.intensity,le=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=J.r*Y,_+=J.g*Y,g+=J.b*Y;else if(z.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(z.sh.coefficients[ne],Y);I++}else if(z.isDirectionalLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const se=z.shadow,B=t.get(z);B.shadowIntensity=se.intensity,B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,i.directionalShadow[y]=B,i.directionalShadowMap[y]=ue,i.directionalShadowMatrix[y]=z.shadow.matrix,L++}i.directional[y]=ne,y++}else if(z.isSpotLight){const ne=e.get(z);ne.position.setFromMatrixPosition(z.matrixWorld),ne.color.copy(J).multiplyScalar(Y),ne.distance=le,ne.coneCos=Math.cos(z.angle),ne.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ne.decay=z.decay,i.spot[M]=ne;const se=z.shadow;if(z.map&&(i.spotLightMap[U]=z.map,U++,se.updateMatrices(z),z.castShadow&&D++),i.spotLightMatrix[M]=se.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=se.intensity,B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=ue,w++}M++}else if(z.isRectAreaLight){const ne=e.get(z);ne.color.copy(J).multiplyScalar(Y),ne.halfWidth.set(z.width*.5,0,0),ne.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=ne,S++}else if(z.isPointLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),ne.distance=z.distance,ne.decay=z.decay,z.castShadow){const se=z.shadow,B=t.get(z);B.shadowIntensity=se.intensity,B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,B.shadowCameraNear=se.camera.near,B.shadowCameraFar=se.camera.far,i.pointShadow[E]=B,i.pointShadowMap[E]=ue,i.pointShadowMatrix[E]=z.shadow.matrix,b++}i.point[E]=ne,E++}else if(z.isHemisphereLight){const ne=e.get(z);ne.skyColor.copy(z.color).multiplyScalar(Y),ne.groundColor.copy(z.groundColor).multiplyScalar(Y),i.hemi[v]=ne,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==y||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==S||O.hemiLength!==v||O.numDirectionalShadows!==L||O.numPointShadows!==b||O.numSpotShadows!==w||O.numSpotMaps!==U||O.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=v,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+U-D,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,O.directionalLength=y,O.pointLength=E,O.spotLength=M,O.rectAreaLength=S,O.hemiLength=v,O.numDirectionalShadows=L,O.numPointShadows=b,O.numSpotShadows=w,O.numSpotMaps=U,O.numLightProbes=I,i.version=oA++)}function h(d,p){let _=0,g=0,y=0,E=0,M=0;const S=p.matrixWorldInverse;for(let v=0,L=d.length;v<L;v++){const b=d[v];if(b.isDirectionalLight){const w=i.directional[_];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),_++}else if(b.isSpotLight){const w=i.spot[y];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const w=i.rectArea[E];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(S),u.identity(),a.copy(b.matrixWorld),a.premultiply(S),u.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(S),g++}else if(b.isHemisphereLight){const w=i.hemi[M];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(S),M++}}}return{setup:c,setupView:h,state:i}}function g0(o){const e=new lA(o),t=[],i=[];function s(p){d.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:u}}function uA(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new g0(o),e.set(s,[c])):a>=u.length?(c=new g0(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
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
}`;function hA(o,e,t){let i=new yp;const s=new St,a=new St,u=new Lt,c=new DM({depthPacking:GS}),h=new IM,d={},p=t.maxTextureSize,_={[us]:qn,[qn]:us,[Sr]:Sr},g=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:cA,fragmentShader:fA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Vi;E.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ki(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let v=this.type;this.render=function(D,I,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;const A=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ss),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=v!==vr&&this.type===vr,le=v===vr&&this.type!==vr;for(let ue=0,ne=D.length;ue<ne;ue++){const se=D[ue],B=se.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ce=B.getFrameExtents();if(s.multiply(ce),a.copy(B.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ce.x),s.x=a.x*ce.x,B.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ce.y),s.y=a.y*ce.y,B.mapSize.y=a.y)),B.map===null||Y===!0||le===!0){const k=this.type!==vr?{minFilter:zi,magFilter:zi}:{};B.map!==null&&B.map.dispose(),B.map=new Zs(s.x,s.y,k),B.map.texture.name=se.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const oe=B.getViewportCount();for(let k=0;k<oe;k++){const ee=B.getViewport(k);u.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),J.viewport(u),B.updateMatrices(se,k),i=B.getFrustum(),w(I,O,B.camera,se,this.type)}B.isPointLightShadow!==!0&&this.type===vr&&L(B,O),B.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(A,R,z)};function L(D,I){const O=e.update(M);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Zs(s.x,s.y)),g.uniforms.shadow_pass.value=D.map.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(I,null,O,g,M,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(I,null,O,y,M,null)}function b(D,I,O,A){let R=null;const z=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)R=z;else if(R=O.isPointLight===!0?h:c,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const J=R.uuid,Y=I.uuid;let le=d[J];le===void 0&&(le={},d[J]=le);let ue=le[Y];ue===void 0&&(ue=R.clone(),le[Y]=ue,I.addEventListener("dispose",U)),R=ue}if(R.visible=I.visible,R.wireframe=I.wireframe,A===vr?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=o.properties.get(R);J.light=O}return R}function w(D,I,O,A,R){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===vr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),le=D.material;if(Array.isArray(le)){const ue=Y.groups;for(let ne=0,se=ue.length;ne<se;ne++){const B=ue[ne],ce=le[B.materialIndex];if(ce&&ce.visible){const oe=b(D,ce,A,R);D.onBeforeShadow(o,D,I,O,Y,oe,B),o.renderBufferDirect(O,null,Y,oe,D,B),D.onAfterShadow(o,D,I,O,Y,oe,B)}}}else if(le.visible){const ue=b(D,le,A,R);D.onBeforeShadow(o,D,I,O,Y,ue,null),o.renderBufferDirect(O,null,Y,ue,D,null),D.onAfterShadow(o,D,I,O,Y,ue,null)}}const J=D.children;for(let Y=0,le=J.length;Y<le;Y++)w(J[Y],I,O,A,R)}function U(D){D.target.removeEventListener("dispose",U);for(const O in d){const A=d[O],R=D.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const dA={[ud]:cd,[fd]:pd,[hd]:md,[Zo]:dd,[cd]:ud,[pd]:fd,[md]:hd,[dd]:Zo};function pA(o,e){function t(){let X=!1;const Ae=new Lt;let ae=null;const de=new Lt(0,0,0,0);return{setMask:function(be){ae!==be&&!X&&(o.colorMask(be,be,be,be),ae=be)},setLocked:function(be){X=be},setClear:function(be,Pe,it,Ft,rn){rn===!0&&(be*=Ft,Pe*=Ft,it*=Ft),Ae.set(be,Pe,it,Ft),de.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Ft),de.copy(Ae))},reset:function(){X=!1,ae=null,de.set(-1,0,0,0)}}}function i(){let X=!1,Ae=!1,ae=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Ft=be;be=null,this.setClear(Ft)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!X&&(o.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(Ae&&(Pe=dA[Pe]),de!==Pe){switch(Pe){case ud:o.depthFunc(o.NEVER);break;case cd:o.depthFunc(o.ALWAYS);break;case fd:o.depthFunc(o.LESS);break;case Zo:o.depthFunc(o.LEQUAL);break;case hd:o.depthFunc(o.EQUAL);break;case dd:o.depthFunc(o.GEQUAL);break;case pd:o.depthFunc(o.GREATER);break;case md:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){X=!1,ae=null,de=null,be=null,Ae=!1}}}function s(){let X=!1,Ae=null,ae=null,de=null,be=null,Pe=null,it=null,Ft=null,rn=null;return{setTest:function(xt){X||(xt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(xt){Ae!==xt&&!X&&(o.stencilMask(xt),Ae=xt)},setFunc:function(xt,Bn,Dn){(ae!==xt||de!==Bn||be!==Dn)&&(o.stencilFunc(xt,Bn,Dn),ae=xt,de=Bn,be=Dn)},setOp:function(xt,Bn,Dn){(Pe!==xt||it!==Bn||Ft!==Dn)&&(o.stencilOp(xt,Bn,Dn),Pe=xt,it=Bn,Ft=Dn)},setLocked:function(xt){X=xt},setClear:function(xt){rn!==xt&&(o.clearStencil(xt),rn=xt)},reset:function(){X=!1,Ae=null,ae=null,de=null,be=null,Pe=null,it=null,Ft=null,rn=null}}}const a=new t,u=new i,c=new s,h=new WeakMap,d=new WeakMap;let p={},_={},g=new WeakMap,y=[],E=null,M=!1,S=null,v=null,L=null,b=null,w=null,U=null,D=null,I=new ot(0,0,0),O=0,A=!1,R=null,z=null,J=null,Y=null,le=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,se=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(B)[1]),ne=se>=1):B.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ne=se>=2);let ce=null,oe={};const k=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),Le=new Lt().fromArray(k),K=new Lt().fromArray(ee);function fe(X,Ae,ae,de){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(X,Pe),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ae;it++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const Me={};Me[o.TEXTURE_2D]=fe(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ve(o.DEPTH_TEST),u.setFunc(Zo),ht(!1),ut(hg),ve(o.CULL_FACE),H(ss);function ve(X){p[X]!==!0&&(o.enable(X),p[X]=!0)}function Te(X){p[X]!==!1&&(o.disable(X),p[X]=!1)}function Ue(X,Ae){return _[X]!==Ae?(o.bindFramebuffer(X,Ae),_[X]=Ae,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ae),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(X,Ae){let ae=y,de=!1;if(X){ae=g.get(Ae),ae===void 0&&(ae=[],g.set(Ae,ae));const be=X.textures;if(ae.length!==be.length||ae[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ae[Pe]=o.COLOR_ATTACHMENT0+Pe;ae.length=be.length,de=!0}}else ae[0]!==o.BACK&&(ae[0]=o.BACK,de=!0);de&&o.drawBuffers(ae)}function Rt(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const pt={[Vs]:o.FUNC_ADD,[mS]:o.FUNC_SUBTRACT,[_S]:o.FUNC_REVERSE_SUBTRACT};pt[gS]=o.MIN,pt[vS]=o.MAX;const It={[xS]:o.ZERO,[yS]:o.ONE,[SS]:o.SRC_COLOR,[ad]:o.SRC_ALPHA,[CS]:o.SRC_ALPHA_SATURATE,[wS]:o.DST_COLOR,[ES]:o.DST_ALPHA,[MS]:o.ONE_MINUS_SRC_COLOR,[ld]:o.ONE_MINUS_SRC_ALPHA,[AS]:o.ONE_MINUS_DST_COLOR,[TS]:o.ONE_MINUS_DST_ALPHA,[RS]:o.CONSTANT_COLOR,[PS]:o.ONE_MINUS_CONSTANT_COLOR,[bS]:o.CONSTANT_ALPHA,[LS]:o.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ae,ae,de,be,Pe,it,Ft,rn,xt){if(X===ss){M===!0&&(Te(o.BLEND),M=!1);return}if(M===!1&&(ve(o.BLEND),M=!0),X!==pS){if(X!==S||xt!==A){if((v!==Vs||w!==Vs)&&(o.blendEquation(o.FUNC_ADD),v=Vs,w=Vs),xt)switch(X){case Xo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dg:o.blendFunc(o.ONE,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Xo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,b=null,U=null,D=null,I.set(0,0,0),O=0,S=X,A=xt}return}be=be||Ae,Pe=Pe||ae,it=it||de,(Ae!==v||be!==w)&&(o.blendEquationSeparate(pt[Ae],pt[be]),v=Ae,w=be),(ae!==L||de!==b||Pe!==U||it!==D)&&(o.blendFuncSeparate(It[ae],It[de],It[Pe],It[it]),L=ae,b=de,U=Pe,D=it),(Ft.equals(I)===!1||rn!==O)&&(o.blendColor(Ft.r,Ft.g,Ft.b,rn),I.copy(Ft),O=rn),S=X,A=!1}function Ln(X,Ae){X.side===Sr?Te(o.CULL_FACE):ve(o.CULL_FACE);let ae=X.side===qn;Ae&&(ae=!ae),ht(ae),X.blending===Xo&&X.transparent===!1?H(ss):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),a.setMask(X.colorWrite);const de=X.stencilWrite;c.setTest(de),de&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function ut(X){X!==fS?(ve(o.CULL_FACE),X!==z&&(X===hg?o.cullFace(o.BACK):X===hS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=X}function je(X){X!==J&&(ne&&o.lineWidth(X),J=X)}function Ct(X,Ae,ae){X?(ve(o.POLYGON_OFFSET_FILL),(Y!==Ae||le!==ae)&&(o.polygonOffset(Ae,ae),Y=Ae,le=ae)):Te(o.POLYGON_OFFSET_FILL)}function We(X){X?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function N(X){X===void 0&&(X=o.TEXTURE0+ue-1),ce!==X&&(o.activeTexture(X),ce=X)}function C(X,Ae,ae){ae===void 0&&(ce===null?ae=o.TEXTURE0+ue-1:ae=ce);let de=oe[ae];de===void 0&&(de={type:void 0,texture:void 0},oe[ae]=de),(de.type!==X||de.texture!==Ae)&&(ce!==ae&&(o.activeTexture(ae),ce=ae),o.bindTexture(X,Ae||Me[X]),de.type=X,de.texture=Ae)}function Q(){const X=oe[ce];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Le.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Le.copy(X))}function ze(X){K.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),K.copy(X))}function ct(X,Ae){let ae=d.get(Ae);ae===void 0&&(ae=new WeakMap,d.set(Ae,ae));let de=ae.get(X);de===void 0&&(de=o.getUniformBlockIndex(Ae,X.name),ae.set(X,de))}function nt(X,Ae){const de=d.get(Ae).get(X);h.get(Ae)!==de&&(o.uniformBlockBinding(Ae,de,X.__bindingPointIndex),h.set(Ae,de))}function At(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},ce=null,oe={},_={},g=new WeakMap,y=[],E=null,M=!1,S=null,v=null,L=null,b=null,w=null,U=null,D=null,I=new ot(0,0,0),O=0,A=!1,R=null,z=null,J=null,Y=null,le=null,Le.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Rt,setBlending:H,setMaterial:Ln,setFlipSided:ht,setCullFace:ut,setLineWidth:je,setPolygonOffset:Ct,setScissorTest:We,activeTexture:N,bindTexture:C,unbindTexture:Q,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:ke,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:lt,texStorage3D:Se,texSubImage2D:he,texSubImage3D:He,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Qe,viewport:ze,reset:At}}function mA(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new St,p=new WeakMap;let _;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,C){return y?new OffscreenCanvas(N,C):_c("canvas")}function M(N,C,Q){let pe=1;const _e=We(N);if((_e.width>Q||_e.height>Q)&&(pe=Q/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(pe*_e.width),He=Math.floor(pe*_e.height);_===void 0&&(_=E(he,He));const we=C?E(he,He):_;return we.width=he,we.height=He,we.getContext("2d").drawImage(N,0,0,he,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+He+")."),we}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(N,C,Q,pe,_e=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=C;if(C===o.RED&&(Q===o.FLOAT&&(he=o.R32F),Q===o.HALF_FLOAT&&(he=o.R16F),Q===o.UNSIGNED_BYTE&&(he=o.R8)),C===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(he=o.R8UI),Q===o.UNSIGNED_SHORT&&(he=o.R16UI),Q===o.UNSIGNED_INT&&(he=o.R32UI),Q===o.BYTE&&(he=o.R8I),Q===o.SHORT&&(he=o.R16I),Q===o.INT&&(he=o.R32I)),C===o.RG&&(Q===o.FLOAT&&(he=o.RG32F),Q===o.HALF_FLOAT&&(he=o.RG16F),Q===o.UNSIGNED_BYTE&&(he=o.RG8)),C===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(he=o.RG8UI),Q===o.UNSIGNED_SHORT&&(he=o.RG16UI),Q===o.UNSIGNED_INT&&(he=o.RG32UI),Q===o.BYTE&&(he=o.RG8I),Q===o.SHORT&&(he=o.RG16I),Q===o.INT&&(he=o.RG32I)),C===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(he=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(he=o.RGB16UI),Q===o.UNSIGNED_INT&&(he=o.RGB32UI),Q===o.BYTE&&(he=o.RGB8I),Q===o.SHORT&&(he=o.RGB16I),Q===o.INT&&(he=o.RGB32I)),C===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),Q===o.UNSIGNED_INT&&(he=o.RGBA32UI),Q===o.BYTE&&(he=o.RGBA8I),Q===o.SHORT&&(he=o.RGBA16I),Q===o.INT&&(he=o.RGBA32I)),C===o.RGB&&Q===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),C===o.RGBA){const He=_e?pc:wt.getTransfer(pe);Q===o.FLOAT&&(he=o.RGBA32F),Q===o.HALF_FLOAT&&(he=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(he=He===bt?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function w(N,C){let Q;return N?C===null||C===Ks||C===ea?Q=o.DEPTH24_STENCIL8:C===Mr?Q=o.DEPTH32F_STENCIL8:C===al&&(Q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ks||C===ea?Q=o.DEPTH_COMPONENT24:C===Mr?Q=o.DEPTH_COMPONENT32F:C===al&&(Q=o.DEPTH_COMPONENT16),Q}function U(N,C){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==zi&&N.minFilter!==Ki?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function D(N){const C=N.target;C.removeEventListener("dispose",D),O(C),C.isVideoTexture&&p.delete(C)}function I(N){const C=N.target;C.removeEventListener("dispose",I),R(C)}function O(N){const C=i.get(N);if(C.__webglInit===void 0)return;const Q=N.source,pe=g.get(Q);if(pe){const _e=pe[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(N),Object.keys(pe).length===0&&g.delete(Q)}i.remove(N)}function A(N){const C=i.get(N);o.deleteTexture(C.__webglTexture);const Q=N.source,pe=g.get(Q);delete pe[C.__cacheKey],u.memory.textures--}function R(N){const C=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(C.__webglFramebuffer[pe]))for(let _e=0;_e<C.__webglFramebuffer[pe].length;_e++)o.deleteFramebuffer(C.__webglFramebuffer[pe][_e]);else o.deleteFramebuffer(C.__webglFramebuffer[pe]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[pe])}else{if(Array.isArray(C.__webglFramebuffer))for(let pe=0;pe<C.__webglFramebuffer.length;pe++)o.deleteFramebuffer(C.__webglFramebuffer[pe]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pe=0;pe<C.__webglColorRenderbuffer.length;pe++)C.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[pe]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Q=N.textures;for(let pe=0,_e=Q.length;pe<_e;pe++){const he=i.get(Q[pe]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),u.memory.textures--),i.remove(Q[pe])}i.remove(N)}let z=0;function J(){z=0}function Y(){const N=z;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),z+=1,N}function le(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function ue(N,C){const Q=i.get(N);if(N.isVideoTexture&&je(N),N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){const pe=N.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,N,C);return}}t.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+C)}function ne(N,C){const Q=i.get(N);if(N.version>0&&Q.__version!==N.version){K(Q,N,C);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+C)}function se(N,C){const Q=i.get(N);if(N.version>0&&Q.__version!==N.version){K(Q,N,C);return}t.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+C)}function B(N,C){const Q=i.get(N);if(N.version>0&&Q.__version!==N.version){fe(Q,N,C);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+C)}const ce={[vd]:o.REPEAT,[Gs]:o.CLAMP_TO_EDGE,[xd]:o.MIRRORED_REPEAT},oe={[zi]:o.NEAREST,[VS]:o.NEAREST_MIPMAP_NEAREST,[Ru]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[hh]:o.LINEAR_MIPMAP_NEAREST,[Ws]:o.LINEAR_MIPMAP_LINEAR},k={[XS]:o.NEVER,[ZS]:o.ALWAYS,[jS]:o.LESS,[uv]:o.LEQUAL,[YS]:o.EQUAL,[KS]:o.GEQUAL,[qS]:o.GREATER,[$S]:o.NOTEQUAL};function ee(N,C){if(C.type===Mr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ki||C.magFilter===hh||C.magFilter===Ru||C.magFilter===Ws||C.minFilter===Ki||C.minFilter===hh||C.minFilter===Ru||C.minFilter===Ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,ce[C.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,ce[C.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,ce[C.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,oe[C.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,oe[C.minFilter]),C.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,k[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===zi||C.minFilter!==Ru&&C.minFilter!==Ws||C.type===Mr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Le(N,C){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",D));const pe=C.source;let _e=g.get(pe);_e===void 0&&(_e={},g.set(pe,_e));const he=le(C);if(he!==N.__cacheKey){_e[he]===void 0&&(_e[he]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),_e[he].usedTimes++;const He=_e[N.__cacheKey];He!==void 0&&(_e[N.__cacheKey].usedTimes--,He.usedTimes===0&&A(C)),N.__cacheKey=he,N.__webglTexture=_e[he].texture}return Q}function K(N,C,Q){let pe=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(pe=o.TEXTURE_3D);const _e=Le(N,C),he=C.source;t.bindTexture(pe,N.__webglTexture,o.TEXTURE0+Q);const He=i.get(he);if(he.version!==He.__version||_e===!0){t.activeTexture(o.TEXTURE0+Q);const we=wt.getPrimaries(wt.workingColorSpace),Ne=C.colorSpace===ts?null:wt.getPrimaries(C.colorSpace),lt=C.colorSpace===ts||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=M(C.image,!1,s.maxTextureSize);Se=Ct(C,Se);const ke=a.convert(C.format,C.colorSpace),qe=a.convert(C.type);let Qe=b(C.internalFormat,ke,qe,C.colorSpace,C.isVideoTexture);ee(pe,C);let ze;const ct=C.mipmaps,nt=C.isVideoTexture!==!0,At=He.__version===void 0||_e===!0,X=he.dataReady,Ae=U(C,Se);if(C.isDepthTexture)Qe=w(C.format===ta,C.type),At&&(nt?t.texStorage2D(o.TEXTURE_2D,1,Qe,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,null));else if(C.isDataTexture)if(ct.length>0){nt&&At&&t.texStorage2D(o.TEXTURE_2D,Ae,Qe,ct[0].width,ct[0].height);for(let ae=0,de=ct.length;ae<de;ae++)ze=ct[ae],nt?X&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,qe,ze.data):t.texImage2D(o.TEXTURE_2D,ae,Qe,ze.width,ze.height,0,ke,qe,ze.data);C.generateMipmaps=!1}else nt?(At&&t.texStorage2D(o.TEXTURE_2D,Ae,Qe,Se.width,Se.height),X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,qe,Se.data)):t.texImage2D(o.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,Se.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){nt&&At&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Qe,ct[0].width,ct[0].height,Se.depth);for(let ae=0,de=ct.length;ae<de;ae++)if(ze=ct[ae],C.format!==Oi)if(ke!==null)if(nt){if(X)if(C.layerUpdates.size>0){const be=Yg(ze.width,ze.height,C.format,C.type);for(const Pe of C.layerUpdates){const it=ze.data.subarray(Pe*be/ze.data.BYTES_PER_ELEMENT,(Pe+1)*be/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,Pe,ze.width,ze.height,1,ke,it)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Se.depth,ke,ze.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ae,Qe,ze.width,ze.height,Se.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Se.depth,ke,qe,ze.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ae,Qe,ze.width,ze.height,Se.depth,0,ke,qe,ze.data)}else{nt&&At&&t.texStorage2D(o.TEXTURE_2D,Ae,Qe,ct[0].width,ct[0].height);for(let ae=0,de=ct.length;ae<de;ae++)ze=ct[ae],C.format!==Oi?ke!==null?nt?X&&t.compressedTexSubImage2D(o.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(o.TEXTURE_2D,ae,Qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,qe,ze.data):t.texImage2D(o.TEXTURE_2D,ae,Qe,ze.width,ze.height,0,ke,qe,ze.data)}else if(C.isDataArrayTexture)if(nt){if(At&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Qe,Se.width,Se.height,Se.depth),X)if(C.layerUpdates.size>0){const ae=Yg(Se.width,Se.height,C.format,C.type);for(const de of C.layerUpdates){const be=Se.data.subarray(de*ae/Se.data.BYTES_PER_ELEMENT,(de+1)*ae/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,ke,qe,be)}C.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(C.isData3DTexture)nt?(At&&t.texStorage3D(o.TEXTURE_3D,Ae,Qe,Se.width,Se.height,Se.depth),X&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)):t.texImage3D(o.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(C.isFramebufferTexture){if(At)if(nt)t.texStorage2D(o.TEXTURE_2D,Ae,Qe,Se.width,Se.height);else{let ae=Se.width,de=Se.height;for(let be=0;be<Ae;be++)t.texImage2D(o.TEXTURE_2D,be,Qe,ae,de,0,ke,qe,null),ae>>=1,de>>=1}}else if(ct.length>0){if(nt&&At){const ae=We(ct[0]);t.texStorage2D(o.TEXTURE_2D,Ae,Qe,ae.width,ae.height)}for(let ae=0,de=ct.length;ae<de;ae++)ze=ct[ae],nt?X&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,ke,qe,ze):t.texImage2D(o.TEXTURE_2D,ae,Qe,ke,qe,ze);C.generateMipmaps=!1}else if(nt){if(At){const ae=We(Se);t.texStorage2D(o.TEXTURE_2D,Ae,Qe,ae.width,ae.height)}X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,qe,Se)}else t.texImage2D(o.TEXTURE_2D,0,Qe,ke,qe,Se);S(C)&&v(pe),He.__version=he.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function fe(N,C,Q){if(C.image.length!==6)return;const pe=Le(N,C),_e=C.source;t.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+Q);const he=i.get(_e);if(_e.version!==he.__version||pe===!0){t.activeTexture(o.TEXTURE0+Q);const He=wt.getPrimaries(wt.workingColorSpace),we=C.colorSpace===ts?null:wt.getPrimaries(C.colorSpace),Ne=C.colorSpace===ts||He===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=C.isCompressedTexture||C.image[0].isCompressedTexture,Se=C.image[0]&&C.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!lt&&!Se?ke[de]=M(C.image[de],!0,s.maxCubemapSize):ke[de]=Se?C.image[de].image:C.image[de],ke[de]=Ct(C,ke[de]);const qe=ke[0],Qe=a.convert(C.format,C.colorSpace),ze=a.convert(C.type),ct=b(C.internalFormat,Qe,ze,C.colorSpace),nt=C.isVideoTexture!==!0,At=he.__version===void 0||pe===!0,X=_e.dataReady;let Ae=U(C,qe);ee(o.TEXTURE_CUBE_MAP,C);let ae;if(lt){nt&&At&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,qe.width,qe.height);for(let de=0;de<6;de++){ae=ke[de].mipmaps;for(let be=0;be<ae.length;be++){const Pe=ae[be];C.format!==Oi?Qe!==null?nt?X&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,ze,Pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Qe,ze,Pe.data)}}}else{if(ae=C.mipmaps,nt&&At){ae.length>0&&Ae++;const de=We(ke[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,de.width,de.height)}for(let de=0;de<6;de++)if(Se){nt?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Qe,ze,ke[de].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,ke[de].width,ke[de].height,0,Qe,ze,ke[de].data);for(let be=0;be<ae.length;be++){const it=ae[be].image[de].image;nt?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Qe,ze,it.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,it.width,it.height,0,Qe,ze,it.data)}}else{nt?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,ze,ke[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Qe,ze,ke[de]);for(let be=0;be<ae.length;be++){const Pe=ae[be];nt?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Qe,ze,Pe.image[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,Qe,ze,Pe.image[de])}}}S(C)&&v(o.TEXTURE_CUBE_MAP),he.__version=_e.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Me(N,C,Q,pe,_e,he){const He=a.convert(Q.format,Q.colorSpace),we=a.convert(Q.type),Ne=b(Q.internalFormat,He,we,Q.colorSpace),lt=i.get(C),Se=i.get(Q);if(Se.__renderTarget=C,!lt.__hasExternalTextures){const ke=Math.max(1,C.width>>he),qe=Math.max(1,C.height>>he);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Ne,ke,qe,C.depth,0,He,we,null):t.texImage2D(_e,he,Ne,ke,qe,0,He,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,N),ut(C)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,_e,Se.__webglTexture,0,ht(C)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,_e,Se.__webglTexture,he),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(N,C,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,N),C.depthBuffer){const pe=C.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,he=w(C.stencilBuffer,_e),He=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ht(C);ut(C)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,he,C.width,C.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,he,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,he,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,He,o.RENDERBUFFER,N)}else{const pe=C.textures;for(let _e=0;_e<pe.length;_e++){const he=pe[_e],He=a.convert(he.format,he.colorSpace),we=a.convert(he.type),Ne=b(he.internalFormat,He,we,he.colorSpace),lt=ht(C);Q&&ut(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,Ne,C.width,C.height):ut(C)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,Ne,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(C.depthTexture);pe.__renderTarget=C,(!pe.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ue(C.depthTexture,0);const _e=pe.__webglTexture,he=ht(C);if(C.depthTexture.format===jo)ut(C)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(C.depthTexture.format===ta)ut(C)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const C=i.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),pe){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=pe}if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Te(C.__webglFramebuffer,N)}else if(Q){C.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[pe]),C.__webglDepthbuffer[pe]===void 0)C.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(C.__webglDepthbuffer[pe],N,!1);else{const _e=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=C.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,he)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),ve(C.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(N,C,Q){const pe=i.get(N);C!==void 0&&Me(pe.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Ue(N)}function Rt(N){const C=N.texture,Q=i.get(N),pe=i.get(C);N.addEventListener("dispose",I);const _e=N.textures,he=N.isWebGLCubeRenderTarget===!0,He=_e.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=C.version,u.memory.textures++),he){Q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[we]=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)Q.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else Q.__webglFramebuffer[we]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let we=0;we<C.mipmaps.length;we++)Q.__webglFramebuffer[we]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(He)for(let we=0,Ne=_e.length;we<Ne;we++){const lt=i.get(_e[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture(),u.memory.textures++)}if(N.samples>0&&ut(N)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const Ne=_e[we];Q.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[we]);const lt=a.convert(Ne.format,Ne.colorSpace),Se=a.convert(Ne.type),ke=b(Ne.internalFormat,lt,Se,Ne.colorSpace,N.isXRRenderTarget===!0),qe=ht(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,ke,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Q.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(o.TEXTURE_CUBE_MAP,C);for(let we=0;we<6;we++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)Me(Q.__webglFramebuffer[we][Ne],N,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Me(Q.__webglFramebuffer[we],N,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(C)&&v(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let we=0,Ne=_e.length;we<Ne;we++){const lt=_e[we],Se=i.get(lt);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),ee(o.TEXTURE_2D,lt),Me(Q.__webglFramebuffer,N,lt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(lt)&&v(o.TEXTURE_2D)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),ee(we,C),C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)Me(Q.__webglFramebuffer[Ne],N,C,o.COLOR_ATTACHMENT0,we,Ne);else Me(Q.__webglFramebuffer,N,C,o.COLOR_ATTACHMENT0,we,0);S(C)&&v(we),t.unbindTexture()}N.depthBuffer&&Ue(N)}function pt(N){const C=N.textures;for(let Q=0,pe=C.length;Q<pe;Q++){const _e=C[Q];if(S(_e)){const he=L(N),He=i.get(_e).__webglTexture;t.bindTexture(he,He),v(he),t.unbindTexture()}}}const It=[],H=[];function Ln(N){if(N.samples>0){if(ut(N)===!1){const C=N.textures,Q=N.width,pe=N.height;let _e=o.COLOR_BUFFER_BIT;const he=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,He=i.get(N),we=C.length>1;if(we)for(let Ne=0;Ne<C.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ne=0;Ne<C.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const lt=i.get(C[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,lt,0)}o.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,_e,o.NEAREST),h===!0&&(It.length=0,H.length=0,It.push(o.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(It.push(he),H.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<C.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const lt=i.get(C[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,lt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const C=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function ht(N){return Math.min(s.maxSamples,N.samples)}function ut(N){const C=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function je(N){const C=u.render.frame;p.get(N)!==C&&(p.set(N,C),N.update())}function Ct(N,C){const Q=N.colorSpace,pe=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==na&&Q!==ts&&(wt.getTransfer(Q)===bt?(pe!==Oi||_e!==wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}function We(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.setTexture2D=ue,this.setTexture2DArray=ne,this.setTexture3D=se,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function _A(o,e){function t(i,s=ts){let a;const u=wt.getTransfer(s);if(i===wr)return o.UNSIGNED_BYTE;if(i===dp)return o.UNSIGNED_SHORT_4_4_4_4;if(i===pp)return o.UNSIGNED_SHORT_5_5_5_1;if(i===tv)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===J0)return o.BYTE;if(i===ev)return o.SHORT;if(i===al)return o.UNSIGNED_SHORT;if(i===hp)return o.INT;if(i===Ks)return o.UNSIGNED_INT;if(i===Mr)return o.FLOAT;if(i===ml)return o.HALF_FLOAT;if(i===nv)return o.ALPHA;if(i===iv)return o.RGB;if(i===Oi)return o.RGBA;if(i===rv)return o.LUMINANCE;if(i===sv)return o.LUMINANCE_ALPHA;if(i===jo)return o.DEPTH_COMPONENT;if(i===ta)return o.DEPTH_STENCIL;if(i===ov)return o.RED;if(i===mp)return o.RED_INTEGER;if(i===av)return o.RG;if(i===_p)return o.RG_INTEGER;if(i===gp)return o.RGBA_INTEGER;if(i===rc||i===sc||i===oc||i===ac)if(u===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Sd||i===Md||i===Ed)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Td||i===wd||i===Ad)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Td||i===wd)return u===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ad)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cd||i===Rd||i===Pd||i===bd||i===Ld||i===Dd||i===Id||i===Ud||i===Nd||i===Fd||i===Od||i===kd||i===zd||i===Bd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Cd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===Vd||i===Hd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===lc)return u===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lv||i===Gd||i===Wd||i===Xd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const gA={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),v=this._getHandJoint(d,M);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=p.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&g>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(gA)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new $n,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:vA,fragmentShader:xA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ki(new Cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SA extends ua{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",h=1,d=null,p=null,_=null,g=null,y=null,E=null;const M=new yA,S=t.getContextAttributes();let v=null,L=null;const b=[],w=[],U=new St;let D=null;const I=new ui;I.viewport=new Lt;const O=new ui;O.viewport=new Lt;const A=[I,O],R=new HM;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=b[K];return fe===void 0&&(fe=new Xh,b[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=b[K];return fe===void 0&&(fe=new Xh,b[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=b[K];return fe===void 0&&(fe=new Xh,b[K]=fe),fe.getHandSpace()};function Y(K){const fe=w.indexOf(K.inputSource);if(fe===-1)return;const Me=b[fe];Me!==void 0&&(Me.update(K.inputSource,K.frame,d||u),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function le(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",ue);for(let K=0;K<b.length;K++){const fe=w[K];fe!==null&&(w[K]=null,b[K].disconnect(fe))}z=null,J=null,M.reset(),e.setRenderTarget(v),y=null,g=null,_=null,s=null,L=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",le),s.addEventListener("inputsourceschange",ue),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Zs(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:wr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Me=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?ta:jo,Me=S.stencil?ea:Ks);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};_=new XRWebGLBinding(s,t),g=_.createProjectionLayer(Te),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Zs(g.textureWidth,g.textureHeight,{format:Oi,type:wr,depthTexture:new Sv(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await s.requestReferenceSpace(c),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ue(K){for(let fe=0;fe<K.removed.length;fe++){const Me=K.removed[fe],ve=w.indexOf(Me);ve>=0&&(w[ve]=null,b[ve].disconnect(Me))}for(let fe=0;fe<K.added.length;fe++){const Me=K.added[fe];let ve=w.indexOf(Me);if(ve===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=w.length){w.push(Me),ve=Ue;break}else if(w[Ue]===null){w[Ue]=Me,ve=Ue;break}if(ve===-1)break}const Te=b[ve];Te&&Te.connect(Me)}}const ne=new q,se=new q;function B(K,fe,Me){ne.setFromMatrixPosition(fe.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const ve=ne.distanceTo(se),Te=fe.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],It=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],Ln=(Ue[8]+1)/Ue[0],ht=Ze*H,ut=Ze*Ln,je=ve/(-H+Ln),Ct=je*-H;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const We=Ze+je,N=Rt+je,C=ht-Ct,Q=ut+(ve-Ct),pe=pt*Rt/N*We,_e=It*Rt/N*We;K.projectionMatrix.makePerspective(C,Q,pe,_e,We,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let fe=K.near,Me=K.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),R.near=O.near=I.near=fe,R.far=O.far=I.far=Me,(z!==R.near||J!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,J=R.far),I.layers.mask=K.layers.mask|2,O.layers.mask=K.layers.mask|4,R.layers.mask=I.layers.mask|O.layers.mask;const ve=K.parent,Te=R.cameras;ce(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ce(Te[Ue],ve);Te.length===2?B(R,I,O):R.projectionMatrix.copy(I.projectionMatrix),oe(K,R,ve)};function oe(K,fe,Me){Me===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(K){h=K,g!==null&&(g.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let k=null;function ee(K,fe){if(p=fe.getViewerPose(d||u),E=fe,p!==null){const Me=p.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let ve=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<Me.length;Ue++){const Ze=Me[Ue];let Rt=null;if(y!==null)Rt=y.getViewport(Ze);else{const It=_.getViewSubImage(g,Ze);Rt=It.viewport,Ue===0&&(e.setRenderTargetTextures(L,It.colorTexture,g.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(L))}let pt=A[Ue];pt===void 0&&(pt=new ui,pt.layers.enable(Ue),pt.viewport=new Lt,A[Ue]=pt),pt.matrix.fromArray(Ze.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ze.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(R.matrix.copy(pt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(pt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=_.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&M.init(e,Ue,s.renderState)}}for(let Me=0;Me<b.length;Me++){const ve=w[Me],Te=b[Me];ve!==null&&Te!==void 0&&Te.update(ve,fe,d||u)}k&&k(K,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Le=new Tv;Le.setAnimationLoop(ee),this.setAnimationLoop=function(K){k=K},this.dispose=function(){}}}const Ns=new Bi,MA=new zt;function EA(o,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function i(S,v){v.color.getRGB(S.fogColor.value,vv(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function s(S,v,L,b,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(S,v):v.isMeshToonMaterial?(a(S,v),_(S,v)):v.isMeshPhongMaterial?(a(S,v),p(S,v)):v.isMeshStandardMaterial?(a(S,v),g(S,v),v.isMeshPhysicalMaterial&&y(S,v,w)):v.isMeshMatcapMaterial?(a(S,v),E(S,v)):v.isMeshDepthMaterial?a(S,v):v.isMeshDistanceMaterial?(a(S,v),M(S,v)):v.isMeshNormalMaterial?a(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&c(S,v)):v.isPointsMaterial?h(S,v,L,b):v.isSpriteMaterial?d(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===qn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===qn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),b=L.envMap,w=L.envMapRotation;b&&(S.envMap.value=b,Ns.copy(w),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),S.envMapRotation.value.setFromMatrix4(MA.makeRotationFromEuler(Ns)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function c(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,L,b){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=b*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function M(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TA(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,b){const w=b.program;i.uniformBlockBinding(L,w)}function d(L,b){let w=s[L.id];w===void 0&&(E(L),w=p(L),s[L.id]=w,L.addEventListener("dispose",S));const U=b.program;i.updateUBOMapping(L,U);const D=e.render.frame;a[L.id]!==D&&(g(L),a[L.id]=D)}function p(L){const b=_();L.__bindingPointIndex=b;const w=o.createBuffer(),U=L.__size,D=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,U,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,w),w}function _(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const b=s[L.id],w=L.uniforms,U=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let D=0,I=w.length;D<I;D++){const O=Array.isArray(w[D])?w[D]:[w[D]];for(let A=0,R=O.length;A<R;A++){const z=O[A];if(y(z,D,A,U)===!0){const J=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let ue=0;ue<Y.length;ue++){const ne=Y[ue],se=M(ne);typeof ne=="number"||typeof ne=="boolean"?(z.__data[0]=ne,o.bufferSubData(o.UNIFORM_BUFFER,J+le,z.__data)):ne.isMatrix3?(z.__data[0]=ne.elements[0],z.__data[1]=ne.elements[1],z.__data[2]=ne.elements[2],z.__data[3]=0,z.__data[4]=ne.elements[3],z.__data[5]=ne.elements[4],z.__data[6]=ne.elements[5],z.__data[7]=0,z.__data[8]=ne.elements[6],z.__data[9]=ne.elements[7],z.__data[10]=ne.elements[8],z.__data[11]=0):(ne.toArray(z.__data,le),le+=se.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,b,w,U){const D=L.value,I=b+"_"+w;if(U[I]===void 0)return typeof D=="number"||typeof D=="boolean"?U[I]=D:U[I]=D.clone(),!0;{const O=U[I];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return U[I]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function E(L){const b=L.uniforms;let w=0;const U=16;for(let I=0,O=b.length;I<O;I++){const A=Array.isArray(b[I])?b[I]:[b[I]];for(let R=0,z=A.length;R<z;R++){const J=A[R],Y=Array.isArray(J.value)?J.value:[J.value];for(let le=0,ue=Y.length;le<ue;le++){const ne=Y[le],se=M(ne),B=w%U,ce=B%se.boundary,oe=B+ce;w+=ce,oe!==0&&U-oe<se.storage&&(w+=U-oe),J.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=se.storage}}}const D=w%U;return D>0&&(w+=U-D),L.__size=w,L.__cache={},this}function M(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function S(L){const b=L.target;b.removeEventListener("dispose",S);const w=u.indexOf(b.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function v(){for(const L in s)o.deleteBuffer(s[L]);u=[],s={},a={}}return{bind:h,update:d,dispose:v}}class wA{constructor(e={}){const{canvas:t=JS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,v=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=os,this.toneMappingExposure=1;const w=this;let U=!1,D=0,I=0,O=null,A=-1,R=null;const z=new Lt,J=new Lt;let Y=null;const le=new ot(0);let ue=0,ne=t.width,se=t.height,B=1,ce=null,oe=null;const k=new Lt(0,0,ne,se),ee=new Lt(0,0,ne,se);let Le=!1;const K=new yp;let fe=!1,Me=!1;const ve=new zt,Te=new zt,Ue=new q,Ze=new Lt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function It(){return O===null?B:1}let H=i;function Ln(P,j){return t.getContext(P,j)}try{const P={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cp}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const j="webgl2";if(H=Ln(j,P),H===null)throw Ln(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ht,ut,je,Ct,We,N,C,Q,pe,_e,he,He,we,Ne,lt,Se,ke,qe,Qe,ze,ct,nt,At,X;function Ae(){ht=new UT(H),ht.init(),nt=new _A(H,ht),ut=new RT(H,ht,e,nt),je=new pA(H,ht),ut.reverseDepthBuffer&&g&&je.buffers.depth.setReversed(!0),Ct=new OT(H),We=new tA,N=new mA(H,ht,je,We,ut,nt,Ct),C=new bT(w),Q=new IT(w),pe=new WM(H),At=new AT(H,pe),_e=new NT(H,pe,Ct,At),he=new zT(H,_e,pe,Ct),Qe=new kT(H,ut,N),Se=new PT(We),He=new eA(w,C,Q,ht,ut,At,Se),we=new EA(w,We),Ne=new iA,lt=new uA(ht),qe=new wT(w,C,Q,je,he,y,h),ke=new hA(w,he,ut),X=new TA(H,Ct,ut,je),ze=new CT(H,ht,Ct),ct=new FT(H,ht,Ct),Ct.programs=He.programs,w.capabilities=ut,w.extensions=ht,w.properties=We,w.renderLists=Ne,w.shadowMap=ke,w.state=je,w.info=Ct}Ae();const ae=new SA(w,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=ht.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ht.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(ne,se,!1))},this.getSize=function(P){return P.set(ne,se)},this.setSize=function(P,j,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=P,se=j,t.width=Math.floor(P*B),t.height=Math.floor(j*B),ie===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(ne*B,se*B).floor()},this.setDrawingBufferSize=function(P,j,ie){ne=P,se=j,B=ie,t.width=Math.floor(P*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(z)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,j,ie,re){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,j,ie,re),je.viewport(z.copy(k).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(ee)},this.setScissor=function(P,j,ie,re){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,j,ie,re),je.scissor(J.copy(ee).multiplyScalar(B).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(P){je.setScissorTest(Le=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){oe=P},this.getClearColor=function(P){return P.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(P=!0,j=!0,ie=!0){let re=0;if(P){let G=!1;if(O!==null){const ye=O.texture.format;G=ye===gp||ye===_p||ye===mp}if(G){const ye=O.texture.type,Ce=ye===wr||ye===Ks||ye===al||ye===ea||ye===dp||ye===pp,Ie=qe.getClearColor(),Fe=qe.getClearAlpha(),Je=Ie.r,et=Ie.g,Xe=Ie.b;Ce?(E[0]=Je,E[1]=et,E[2]=Xe,E[3]=Fe,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=Je,M[1]=et,M[2]=Xe,M[3]=Fe,H.clearBufferiv(H.COLOR,0,M))}else re|=H.COLOR_BUFFER_BIT}j&&(re|=H.DEPTH_BUFFER_BIT),ie&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ne.dispose(),lt.dispose(),We.dispose(),C.dispose(),Q.dispose(),he.dispose(),At.dispose(),X.dispose(),He.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",to),ae.removeEventListener("sessionend",Rr),nr.stop()};function de(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const P=Ct.autoReset,j=ke.enabled,ie=ke.autoUpdate,re=ke.needsUpdate,G=ke.type;Ae(),Ct.autoReset=P,ke.enabled=j,ke.autoUpdate=ie,ke.needsUpdate=re,ke.type=G}function Pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function it(P){const j=P.target;j.removeEventListener("dispose",it),Ft(j)}function Ft(P){rn(P),We.remove(P)}function rn(P){const j=We.get(P).programs;j!==void 0&&(j.forEach(function(ie){He.releaseProgram(ie)}),P.isShaderMaterial&&He.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,ie,re,G,ye){j===null&&(j=Rt);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,Ie=Tl(P,j,ie,re,G);je.setMaterial(re,Ce);let Fe=ie.index,Je=1;if(re.wireframe===!0){if(Fe=_e.getWireframeAttribute(ie),Fe===void 0)return;Je=2}const et=ie.drawRange,Xe=ie.attributes.position;let rt=et.start*Je,Mt=(et.start+et.count)*Je;ye!==null&&(rt=Math.max(rt,ye.start*Je),Mt=Math.min(Mt,(ye.start+ye.count)*Je)),Fe!==null?(rt=Math.max(rt,0),Mt=Math.min(Mt,Fe.count)):Xe!=null&&(rt=Math.max(rt,0),Mt=Math.min(Mt,Xe.count));const Et=Mt-rt;if(Et<0||Et===1/0)return;At.setup(G,re,Ie,ie,Fe);let Bt,vt=ze;if(Fe!==null&&(Bt=pe.get(Fe),vt=ct,vt.setIndex(Bt)),G.isMesh)re.wireframe===!0?(je.setLineWidth(re.wireframeLinewidth*It()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(G.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*It()),G.isLineSegments?vt.setMode(H.LINES):G.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else G.isPoints?vt.setMode(H.POINTS):G.isSprite&&vt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,Yt=G._multiDrawCounts,_t=G._multiDrawCount,gn=Fe?pe.get(Fe).bytesPerElement:1,Ai=We.get(re).currentProgram.getUniforms();for(let In=0;In<_t;In++)Ai.setValue(H,"_gl_DrawID",In),vt.render(Ye[In]/gn,Yt[In])}else if(G.isInstancedMesh)vt.renderInstances(rt,Et,G.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Yt=Math.min(ie.instanceCount,Ye);vt.renderInstances(rt,Et,Yt)}else vt.render(rt,Et)};function xt(P,j,ie){P.transparent===!0&&P.side===Sr&&P.forceSinglePass===!1?(P.side=qn,P.needsUpdate=!0,no(P,j,ie),P.side=us,P.needsUpdate=!0,no(P,j,ie),P.side=Sr):no(P,j,ie)}this.compile=function(P,j,ie=null){ie===null&&(ie=P),v=lt.get(ie),v.init(j),b.push(v),ie.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),P!==ie&&P.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const re=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Ie=ye[Ce];xt(Ie,ie,G),re.add(Ie)}else xt(ye,ie,G),re.add(ye)}),b.pop(),v=null,re},this.compileAsync=function(P,j,ie=null){const re=this.compile(P,j,ie);return new Promise(G=>{function ye(){if(re.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){G(P);return}setTimeout(ye,10)}ht.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Bn=null;function Dn(P){Bn&&Bn(P)}function to(){nr.stop()}function Rr(){nr.start()}const nr=new Tv;nr.setAnimationLoop(Dn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(P){Bn=P,ae.setAnimationLoop(P),P===null?nr.stop():nr.start()},ae.addEventListener("sessionstart",to),ae.addEventListener("sessionend",Rr),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(j),j=ae.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,j,O),v=lt.get(P,b.length),v.init(j),b.push(v),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Me),S=Ne.get(P,L.length),S.init(),L.push(S),ae.enabled===!0&&ae.isPresenting===!0){const ye=w.xr.getDepthSensingMesh();ye!==null&&ir(ye,j,-1/0,w.sortObjects)}ir(P,j,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ce,oe),pt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pt&&qe.addToRenderList(S,P),this.info.render.frame++,fe===!0&&Se.beginShadows();const ie=v.state.shadowsArray;ke.render(ie,P,j),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,G=S.transmissive;if(v.setupLights(),j.isArrayCamera){const ye=j.cameras;if(G.length>0)for(let Ce=0,Ie=ye.length;Ce<Ie;Ce++){const Fe=ye[Ce];ms(re,G,P,Fe)}pt&&qe.render(P);for(let Ce=0,Ie=ye.length;Ce<Ie;Ce++){const Fe=ye[Ce];ps(S,P,Fe,Fe.viewport)}}else G.length>0&&ms(re,G,P,j),pt&&qe.render(P),ps(S,P,j);O!==null&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(w,P,j),At.resetDefaultState(),A=-1,R=null,b.pop(),b.length>0?(v=b[b.length-1],fe===!0&&Se.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function ir(P,j,ie,re){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){re&&Ze.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Te);const Ce=he.update(P),Ie=P.material;Ie.visible&&S.push(P,Ce,Ie,ie,Ze.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){const Ce=he.update(P),Ie=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ze.copy(P.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ze.copy(Ce.boundingSphere.center)),Ze.applyMatrix4(P.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Fe=Ce.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],rt=Ie[Xe.materialIndex];rt&&rt.visible&&S.push(P,Ce,rt,ie,Ze.z,Xe)}}else Ie.visible&&S.push(P,Ce,Ie,ie,Ze.z,null)}}const ye=P.children;for(let Ce=0,Ie=ye.length;Ce<Ie;Ce++)ir(ye[Ce],j,ie,re)}function ps(P,j,ie,re){const G=P.opaque,ye=P.transmissive,Ce=P.transparent;v.setupLightsView(ie),fe===!0&&Se.setGlobalState(w.clippingPlanes,ie),re&&je.viewport(z.copy(re)),G.length>0&&Pr(G,j,ie),ye.length>0&&Pr(ye,j,ie),Ce.length>0&&Pr(Ce,j,ie),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function ms(P,j,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Zs(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?ml:wr,minFilter:Ws,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const ye=v.state.transmissionRenderTarget[re.id],Ce=re.viewport||z;ye.setSize(Ce.z,Ce.w);const Ie=w.getRenderTarget();w.setRenderTarget(ye),w.getClearColor(le),ue=w.getClearAlpha(),ue<1&&w.setClearColor(16777215,.5),w.clear(),pt&&qe.render(ie);const Fe=w.toneMapping;w.toneMapping=os;const Je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),fe===!0&&Se.setGlobalState(w.clippingPlanes,re),Pr(P,ie,re),N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye),ht.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,rt=j.length;Xe<rt;Xe++){const Mt=j[Xe],Et=Mt.object,Bt=Mt.geometry,vt=Mt.material,Ye=Mt.group;if(vt.side===Sr&&Et.layers.test(re.layers)){const Yt=vt.side;vt.side=qn,vt.needsUpdate=!0,Ml(Et,ie,re,Bt,vt,Ye),vt.side=Yt,vt.needsUpdate=!0,et=!0}}et===!0&&(N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye))}w.setRenderTarget(Ie),w.setClearColor(le,ue),Je!==void 0&&(re.viewport=Je),w.toneMapping=Fe}function Pr(P,j,ie){const re=j.isScene===!0?j.overrideMaterial:null;for(let G=0,ye=P.length;G<ye;G++){const Ce=P[G],Ie=Ce.object,Fe=Ce.geometry,Je=re===null?Ce.material:re,et=Ce.group;Ie.layers.test(ie.layers)&&Ml(Ie,j,ie,Fe,Je,et)}}function Ml(P,j,ie,re,G,ye){P.onBeforeRender(w,j,ie,re,G,ye),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(w,j,ie,re,P,ye),G.transparent===!0&&G.side===Sr&&G.forceSinglePass===!1?(G.side=qn,G.needsUpdate=!0,w.renderBufferDirect(ie,j,re,G,P,ye),G.side=us,G.needsUpdate=!0,w.renderBufferDirect(ie,j,re,G,P,ye),G.side=Sr):w.renderBufferDirect(ie,j,re,G,P,ye),P.onAfterRender(w,j,ie,re,G,ye)}function no(P,j,ie){j.isScene!==!0&&(j=Rt);const re=We.get(P),G=v.state.lights,ye=v.state.shadowsArray,Ce=G.state.version,Ie=He.getParameters(P,G.state,ye,j,ie),Fe=He.getProgramCacheKey(Ie);let Je=re.programs;re.environment=P.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(P.isMeshStandardMaterial?Q:C).get(P.envMap||re.environment),re.envMapRotation=re.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",it),Je=new Map,re.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(re.currentProgram===et&&re.lightsStateVersion===Ce)return Hi(P,Ie),et}else Ie.uniforms=He.getUniforms(P),P.onBeforeCompile(Ie,w),et=He.acquireProgram(Ie,Fe),Je.set(Fe,et),re.uniforms=Ie.uniforms;const Xe=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),Hi(P,Ie),re.needsLights=Uc(P),re.lightsStateVersion=Ce,re.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),re.currentProgram=et,re.uniformsList=null,et}function El(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=cc.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Hi(P,j){const ie=We.get(P);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Tl(P,j,ie,re,G){j.isScene!==!0&&(j=Rt),N.resetTextureUnits();const ye=j.fog,Ce=re.isMeshStandardMaterial?j.environment:null,Ie=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:na,Fe=(re.isMeshStandardMaterial?Q:C).get(re.envMap||Ce),Je=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,et=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Xe=!!ie.morphAttributes.position,rt=!!ie.morphAttributes.normal,Mt=!!ie.morphAttributes.color;let Et=os;re.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Et=w.toneMapping);const Bt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=Bt!==void 0?Bt.length:0,Ye=We.get(re),Yt=v.state.lights;if(fe===!0&&(Me===!0||P!==R)){const Kt=P===R&&re.id===A;Se.setState(re,P,Kt)}let _t=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Yt.state.version||Ye.outputColorSpace!==Ie||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==Fe||re.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==et||Ye.morphTargets!==Xe||Ye.morphNormals!==rt||Ye.morphColors!==Mt||Ye.toneMapping!==Et||Ye.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,Ye.__version=re.version);let gn=Ye.currentProgram;_t===!0&&(gn=no(re,j,G));let Ai=!1,In=!1,_s=!1;const Pt=gn.getUniforms(),Un=Ye.uniforms;if(je.useProgram(gn.program)&&(Ai=!0,In=!0,_s=!0),re.id!==A&&(A=re.id,In=!0),Ai||R!==P){je.buffers.depth.getReversed()?(ve.copy(P.projectionMatrix),tM(ve),nM(ve),Pt.setValue(H,"projectionMatrix",ve)):Pt.setValue(H,"projectionMatrix",P.projectionMatrix),Pt.setValue(H,"viewMatrix",P.matrixWorldInverse);const Sn=Pt.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,Ue.setFromMatrixPosition(P.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,In=!0,_s=!0)}if(G.isSkinnedMesh){Pt.setOptional(H,G,"bindMatrix"),Pt.setOptional(H,G,"bindMatrixInverse");const Kt=G.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Pt.setValue(H,"boneTexture",Kt.boneTexture,N))}G.isBatchedMesh&&(Pt.setOptional(H,G,"batchingTexture"),Pt.setValue(H,"batchingTexture",G._matricesTexture,N),Pt.setOptional(H,G,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",G._indirectTexture,N),Pt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",G._colorsTexture,N));const yn=ie.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Qe.update(G,ie,gn),(In||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Pt.setValue(H,"receiveShadow",G.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Un.envMap.value=Fe,Un.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Un.envMapIntensity.value=j.environmentIntensity),In&&(Pt.setValue(H,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&wl(Un,_s),ye&&re.fog===!0&&we.refreshFogUniforms(Un,ye),we.refreshMaterialUniforms(Un,re,B,se,v.state.transmissionRenderTarget[P.id]),cc.upload(H,El(Ye),Un,N)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(cc.upload(H,El(Ye),Un,N),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Pt.setValue(H,"center",G.center),Pt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(H,"normalMatrix",G.normalMatrix),Pt.setValue(H,"modelMatrix",G.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Kt=re.uniformsGroups;for(let Sn=0,gs=Kt.length;Sn<gs;Sn++){const dt=Kt[Sn];X.update(dt,gn),X.bind(dt,gn)}}return gn}function wl(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Uc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,j,ie){We.get(P.texture).__webglTexture=j,We.get(P.depthTexture).__webglTexture=ie;const re=We.get(P);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,j){const ie=We.get(P);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,ie=0){O=P,D=j,I=ie;let re=!0,G=null,ye=!1,Ce=!1;if(P){const Fe=We.get(P);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Fe.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(Fe.__hasExternalTextures)N.rebindTextures(P,We.get(P.texture).__webglTexture,We.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xe=P.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ce=!0);const et=We.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[j])?G=et[j][ie]:G=et[j],ye=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?G=We.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[ie]:G=et,z.copy(P.viewport),J.copy(P.scissor),Y=P.scissorTest}else z.copy(k).multiplyScalar(B).floor(),J.copy(ee).multiplyScalar(B).floor(),Y=Le;if(je.bindFramebuffer(H.FRAMEBUFFER,G)&&re&&je.drawBuffers(P,G),je.viewport(z),je.scissor(J),je.setScissorTest(Y),ye){const Fe=We.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,ie)}else if(Ce){const Fe=We.get(P.texture),Je=j||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,ie||0,Je)}A=-1},this.readRenderTargetPixels=function(P,j,ie,re,G,ye,Ce){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){je.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const Fe=P.texture,Je=Fe.format,et=Fe.type;if(!ut.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-re&&ie>=0&&ie<=P.height-G&&H.readPixels(j,ie,re,G,nt.convert(Je),nt.convert(et),ye)}finally{const Fe=O!==null?We.get(O).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(P,j,ie,re,G,ye,Ce){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=We.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const Fe=P.texture,Je=Fe.format,et=Fe.type;if(!ut.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=P.width-re&&ie>=0&&ie<=P.height-G){je.bindFramebuffer(H.FRAMEBUFFER,Ie);const Xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.bufferData(H.PIXEL_PACK_BUFFER,ye.byteLength,H.STREAM_READ),H.readPixels(j,ie,re,G,nt.convert(Je),nt.convert(et),0);const rt=O!==null?We.get(O).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,rt);const Mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await eM(H,Mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ye),H.deleteBuffer(Xe),H.deleteSync(Mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,j=null,ie=0){P.isTexture!==!0&&(Vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1]);const re=Math.pow(2,-ie),G=Math.floor(P.image.width*re),ye=Math.floor(P.image.height*re),Ce=j!==null?j.x:0,Ie=j!==null?j.y:0;N.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,Ce,Ie,G,ye),je.unbindTexture()};const Al=H.createFramebuffer(),Cl=H.createFramebuffer();this.copyTextureToTexture=function(P,j,ie=null,re=null,G=0,ye=null){P.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,P=arguments[1],j=arguments[2],ye=arguments[3]||0,ie=null),ye===null&&(G!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Ce,Ie,Fe,Je,et,Xe,rt,Mt,Et;const Bt=P.isCompressedTexture?P.mipmaps[ye]:P.image;if(ie!==null)Ce=ie.max.x-ie.min.x,Ie=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,Je=ie.min.x,et=ie.min.y,Xe=ie.isBox3?ie.min.z:0;else{const yn=Math.pow(2,-G);Ce=Math.floor(Bt.width*yn),Ie=Math.floor(Bt.height*yn),P.isDataArrayTexture?Fe=Bt.depth:P.isData3DTexture?Fe=Math.floor(Bt.depth*yn):Fe=1,Je=0,et=0,Xe=0}re!==null?(rt=re.x,Mt=re.y,Et=re.z):(rt=0,Mt=0,Et=0);const vt=nt.convert(j.format),Ye=nt.convert(j.type);let Yt;j.isData3DTexture?(N.setTexture3D(j,0),Yt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(N.setTexture2DArray(j,0),Yt=H.TEXTURE_2D_ARRAY):(N.setTexture2D(j,0),Yt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=H.getParameter(H.UNPACK_ROW_LENGTH),gn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ai=H.getParameter(H.UNPACK_SKIP_PIXELS),In=H.getParameter(H.UNPACK_SKIP_ROWS),_s=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const Pt=P.isDataArrayTexture||P.isData3DTexture,Un=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const yn=We.get(P),Kt=We.get(j),Sn=We.get(yn.__renderTarget),gs=We.get(Kt.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,gs.__webglFramebuffer);for(let dt=0;dt<Fe;dt++)Pt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(P).__webglTexture,G,Xe+dt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(j).__webglTexture,ye,Et+dt)),H.blitFramebuffer(Je,et,Ce,Ie,rt,Mt,Ce,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||We.has(P)){const yn=We.get(P),Kt=We.get(j);je.bindFramebuffer(H.READ_FRAMEBUFFER,Al),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,Cl);for(let Sn=0;Sn<Fe;Sn++)Pt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,G,Xe+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,G),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.__webglTexture,ye,Et+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Kt.__webglTexture,ye),G!==0?H.blitFramebuffer(Je,et,Ce,Ie,rt,Mt,Ce,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(Yt,ye,rt,Mt,Et+Sn,Je,et,Ce,Ie):H.copyTexSubImage2D(Yt,ye,rt,Mt,Je,et,Ce,Ie);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Yt,ye,rt,Mt,Et,Ce,Ie,Fe,vt,Ye,Bt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Yt,ye,rt,Mt,Et,Ce,Ie,Fe,vt,Bt.data):H.texSubImage3D(Yt,ye,rt,Mt,Et,Ce,Ie,Fe,vt,Ye,Bt):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ye,rt,Mt,Ce,Ie,vt,Ye,Bt.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ye,rt,Mt,Bt.width,Bt.height,vt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,ye,rt,Mt,Ce,Ie,vt,Ye,Bt);H.pixelStorei(H.UNPACK_ROW_LENGTH,_t),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ai),H.pixelStorei(H.UNPACK_SKIP_ROWS,In),H.pixelStorei(H.UNPACK_SKIP_IMAGES,_s),ye===0&&j.generateMipmaps&&H.generateMipmap(Yt),je.unbindTexture()},this.copyTextureToTexture3D=function(P,j,ie=null,re=null,G=0){return P.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,P=arguments[2],j=arguments[3],G=arguments[4]||0),Vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,j,ie,re,G)},this.initRenderTarget=function(P){We.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),je.unbindTexture()},this.resetState=function(){D=0,I=0,O=null,je.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function xr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Pv(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ra={duration:.5,overwrite:!1,delay:0},Ep,Pn,Ht,Ei=1e8,Nt=1/Ei,$d=Math.PI*2,AA=$d/4,CA=0,bv=Math.sqrt,RA=Math.cos,PA=Math.sin,_n=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},Tp=function(e){return typeof e>"u"},tr=function(e){return typeof e=="object"},Kn=function(e){return e!==!1},wp=function(){return typeof window<"u"},Ju=function(e){return $t(e)||_n(e)},Lv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,Kd=/(?:-?\.?\d|\.)+/gi,Dv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Iv=/[+-]=-?[.\d]+/,Uv=/[^,'"\[\]\s]+/gi,bA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,Yi,Zd,Ap,di={},xc={},Nv,Fv=function(e){return(xc=Qs(e,di))&&ei},Cp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ll=function(e,t){return!t&&console.warn(e)},Ov=function(e,t){return e&&(di[e]=t)&&xc&&(xc[e]=t)||di},ul=function(){return 0},LA={suppressEvents:!0,isStart:!0,kill:!1},fc={suppressEvents:!0,kill:!1},DA={suppressEvents:!0},Rp={},as=[],Qd={},kv,li={},Yh={},v0=30,hc=[],Pp="",bp=function(e){var t=e[0],i,s;if(tr(t)||$t(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=hc.length;s--&&!hc[s].targetTest(t););i=hc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new lx(e[s],i)))||e.splice(s,1);return e},js=function(e){return e._gsap||bp(Ti(e))[0]._gsap},zv=function(e,t,i){return(i=e[t])&&$t(i)?e[t]():Tp(i)&&e.getAttribute&&e.getAttribute(t)||i},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},Qt=function(e){return Math.round(e*1e5)/1e5||0},pn=function(e){return Math.round(e*1e7)/1e7||0},qo=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},IA=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},yc=function(){var e=as.length,t=as.slice(0),i,s;for(Qd={},as.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Bv=function(e,t,i,s){as.length&&!Pn&&yc(),e.render(t,i,Pn&&t<0&&(e._initted||e._startAt)),as.length&&!Pn&&yc()},Vv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Uv).length<2?t:_n(e)?e.trim():e},Hv=function(e){return e},wi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},UA=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},Qs=function(e,t){for(var i in t)e[i]=t[i];return e},x0=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=tr(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},Sc=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},il=function(e){var t=e.parent||Xt,i=e.keyframes?UA(bn(e.keyframes)):wi;if(Kn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},NA=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},Gv=function(e,t,i,s,a){var u=e[s],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},Pc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t._prev,u=t._next;a?a._next=u:e[i]===t&&(e[i]=u),u?u._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},fs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},FA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jd=function(e,t,i,s){return e._startAt&&(Pn?e._startAt.revert(fc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},OA=function o(e){return!e||e._ts&&o(e.parent)},y0=function(e){return e._repeat?sa(e._tTime,e=e.duration()+e._rDelay)*e:0},sa=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Mc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bc=function(e){return e._end=pn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Nt)||0))},Lc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=pn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bc(e),i._dirty||Ys(i,e)),e},Wv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Mc(e.rawTime(),t),(!t._dur||Sl(0,t.totalDuration(),i)-t._tTime>Nt)&&t.render(i,!0)),Ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Nt}},$i=function(e,t,i,s){return t.parent&&fs(t),t._start=pn((Ar(i)?i:i||e!==Xt?Mi(e,i,t):e._time)+t._delay),t._end=pn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gv(e,t,"_first","_last",e._sort?"_start":0),ep(t)||(e._recent=t),s||Wv(e,t),e._ts<0&&Lc(e,e._tTime),e},Xv=function(e,t){return(di.ScrollTrigger||Cp("scrollTrigger",t))&&di.ScrollTrigger.create(t,e)},jv=function(e,t,i,s,a){if(Dp(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!Pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&kv!==ci.frame)return as.push(e),e._lazy=[a,s],1},kA=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},ep=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zA=function(e,t,i,s){var a=e.ratio,u=t<0||!t&&(!e._start&&kA(e)&&!(!e._initted&&ep(e))||(e._ts<0||e._dp._ts<0)&&!ep(e))?0:1,c=e._rDelay,h=0,d,p,_;if(c&&e._repeat&&(h=Sl(0,e._tDur,t),p=sa(h,c),e._yoyo&&p&1&&(u=1-u),p!==sa(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||Pn||s||e._zTime===Nt||!t&&e._zTime){if(!e._initted&&jv(e,t,s,i,h))return;for(_=e._zTime,e._zTime=t||(i?Nt:0),i||(i=t&&!_),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=h,d=e._pt;d;)d.r(u,d.d),d=d._next;t<0&&Jd(e,t,i,!0),e._onUpdate&&!i&&fi(e,"onUpdate"),h&&e._repeat&&!i&&e.parent&&fi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&fs(e,1),!i&&!Pn&&(fi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},BA=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},oa=function(e,t,i,s){var a=e._repeat,u=pn(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:pn(u*(a+1)+e._rDelay*a):u,c>0&&!s&&Lc(e,e._tTime=e._tDur*c),e.parent&&bc(e),i||Ys(e.parent,e),e},S0=function(e){return e instanceof zn?Ys(e):oa(e,e._dur)},VA={_start:0,endTime:ul,totalDuration:ul},Mi=function o(e,t,i){var s=e.labels,a=e._recent||VA,u=e.duration()>=Ei?a.endTime(!1):e._dur,c,h,d;return _n(t)&&(isNaN(t)||t in s)?(h=t.charAt(0),d=t.substr(-1)==="%",c=t.indexOf("="),h==="<"||h===">"?(c>=0&&(t=t.replace(/=/,"")),(h==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(c<0?a:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(h=parseFloat(t.charAt(c-1)+t.substr(c+1)),d&&i&&(h=h/100*(bn(i)?i[0]:i).totalDuration()),c>1?o(e,t.substr(0,c-1),i)+h:u+h)):t==null?u:+t},rl=function(e,t,i){var s=Ar(t[1]),a=(s?2:1)+(e<2?0:1),u=t[a],c,h;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,h=i;h&&!("immediateRender"in c);)c=h.vars.defaults||{},h=Kn(h.vars.inherit)&&h.parent;u.immediateRender=Kn(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new tn(t[0],u,t[a+1])},ds=function(e,t){return e||e===0?t(e):t},Sl=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!_n(e)||!(t=bA.exec(e))?"":t[1]},HA=function(e,t,i){return ds(i,function(s){return Sl(e,t,s)})},tp=[].slice,Yv=function(e,t){return e&&tr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&tr(e[0]))&&!e.nodeType&&e!==Yi},GA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var a;return _n(s)&&!t||Yv(s,1)?(a=i).push.apply(a,Ti(s)):i.push(s)})||i},Ti=function(e,t,i){return Ht&&!t&&Ht.selector?Ht.selector(e):_n(e)&&!i&&(Zd||!aa())?tp.call((t||Ap).querySelectorAll(e),0):bn(e)?GA(e,i):Yv(e)?tp.call(e,0):e?[e]:[]},np=function(e){return e=Ti(e)[0]||ll("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ti(t,i.querySelectorAll?i:i===e?ll("Invalid scope")||Ap.createElement("div"):e)}},qv=function(e){return e.sort(function(){return .5-Math.random()})},$v=function(e){if($t(e))return e;var t=tr(e)?e:{each:e},i=qs(t.ease),s=t.from||0,a=parseFloat(t.base)||0,u={},c=s>0&&s<1,h=isNaN(s)||c,d=t.axis,p=s,_=s;return _n(s)?p=_={center:.5,edges:.5,end:1}[s]||0:!c&&h&&(p=s[0],_=s[1]),function(g,y,E){var M=(E||t).length,S=u[M],v,L,b,w,U,D,I,O,A;if(!S){if(A=t.grid==="auto"?0:(t.grid||[1,Ei])[1],!A){for(I=-Ei;I<(I=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(S=u[M]=[],v=h?Math.min(A,M)*p-.5:s%A,L=A===Ei?0:h?M*_/A-.5:s/A|0,I=0,O=Ei,D=0;D<M;D++)b=D%A-v,w=L-(D/A|0),S[D]=U=d?Math.abs(d==="y"?w:b):bv(b*b+w*w),U>I&&(I=U),U<O&&(O=U);s==="random"&&qv(S),S.max=I-O,S.min=O,S.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(A>M?M-1:d?d==="y"?M/A:A:Math.max(A,M/A))||0)*(s==="edges"?-1:1),S.b=M<0?a-M:a,S.u=Rn(t.amount||t.each)||0,i=i&&M<0?sx(i):i}return M=(S[g]-S.min)/S.max||0,pn(S.b+(i?i(M):M)*S.v)+S.u}},ip=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=pn(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Ar(i)?0:Rn(i))}},Kv=function(e,t){var i=bn(e),s,a;return!i&&tr(e)&&(s=i=e.radius||Ei,e.values?(e=Ti(e.values),(a=!Ar(e[0]))&&(s*=s)):e=ip(e.increment)),ds(t,i?$t(e)?function(u){return a=e(u),Math.abs(a-u)<=s?a:u}:function(u){for(var c=parseFloat(a?u.x:u),h=parseFloat(a?u.y:0),d=Ei,p=0,_=e.length,g,y;_--;)a?(g=e[_].x-c,y=e[_].y-h,g=g*g+y*y):g=Math.abs(e[_]-c),g<d&&(d=g,p=_);return p=!s||d<=s?e[p]:u,a||p===u||Ar(u)?p:p+Rn(u)}:ip(e))},Zv=function(e,t,i,s){return ds(bn(e)?!t:i===!0?!!(i=0):!s,function(){return bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},WA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(a,u){return u(a)},s)}},XA=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},jA=function(e,t,i){return Jv(e,t,0,1,i)},Qv=function(e,t,i){return ds(i,function(s){return e[~~t(s)]})},YA=function o(e,t,i){var s=t-e;return bn(e)?Qv(e,o(0,e.length),t):ds(i,function(a){return(s+(a-e)%s)%s+e})},qA=function o(e,t,i){var s=t-e,a=s*2;return bn(e)?Qv(e,o(0,e.length-1),t):ds(i,function(u){return u=(a+(u-e)%a)%a||0,e+(u>s?a-u:u)})},cl=function(e){for(var t=0,i="",s,a,u,c;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",a=e.substr(s+7,u-s-7).match(c?Uv:Kd),i+=e.substr(t,s-t)+Zv(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=u+1;return i+e.substr(t,e.length-t)},Jv=function(e,t,i,s,a){var u=t-e,c=s-i;return ds(a,function(h){return i+((h-e)/u*c||0)})},$A=function o(e,t,i,s){var a=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!a){var u=_n(e),c={},h,d,p,_,g;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(p=[],_=e.length,g=_-2,d=1;d<_;d++)p.push(o(e[d-1],e[d]));_--,a=function(E){E*=_;var M=Math.min(g,~~E);return p[M](E-M)},i=t}else s||(e=Qs(bn(e)?[]:{},e));if(!p){for(h in t)Lp.call(c,e,h,"get",t[h]);a=function(E){return Np(E,c)||(u?e.p:e)}}}return ds(i,a)},M0=function(e,t,i){var s=e.labels,a=Ei,u,c,h;for(u in s)c=s[u]-t,c<0==!!i&&c&&a>(c=Math.abs(c))&&(h=u,a=c);return h},fi=function(e,t,i){var s=e.vars,a=s[t],u=Ht,c=e._ctx,h,d,p;if(a)return h=s[t+"Params"],d=s.callbackScope||e,i&&as.length&&yc(),c&&(Ht=c),p=h?a.apply(d,h):a.call(d),Ht=u,p},tl=function(e){return fs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pn),e.progress()<1&&fi(e,"onInterrupt"),e},Wo,ex=[],tx=function(e){if(e)if(e=!e.name&&e.default||e,wp()||e.headless){var t=e.name,i=$t(e),s=t&&!i&&e.init?function(){this._props=[]}:e,a={init:ul,render:Np,add:Lp,kill:fC,modifier:cC,rawVars:0},u={targetTest:0,get:0,getSetter:Up,aliases:{},register:0};if(aa(),e!==s){if(li[t])return;wi(s,wi(Sc(e,a),u)),Qs(s.prototype,Qs(a,Sc(e,u))),li[s.prop=t]=s,e.targetTest&&(hc.push(s),Rp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ov(t,s),e.register&&e.register(ei,s,Qn)}else ex.push(e)},Dt=255,nl={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},qh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Dt+.5|0},nx=function(e,t,i){var s=e?Ar(e)?[e>>16,e>>8&Dt,e&Dt]:0:nl.black,a,u,c,h,d,p,_,g,y,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),nl[e])s=nl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Dt,s&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(Kd),!t)h=+s[0]%360/360,d=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(d+1):p+d-p*d,a=p*2-u,s.length>3&&(s[3]*=1),s[0]=qh(h+1/3,a,u),s[1]=qh(h,a,u),s[2]=qh(h-1/3,a,u);else if(~e.indexOf("="))return s=e.match(Dv),i&&s.length<4&&(s[3]=1),s}else s=e.match(Kd)||nl.transparent;s=s.map(Number)}return t&&!E&&(a=s[0]/Dt,u=s[1]/Dt,c=s[2]/Dt,_=Math.max(a,u,c),g=Math.min(a,u,c),p=(_+g)/2,_===g?h=d=0:(y=_-g,d=p>.5?y/(2-_-g):y/(_+g),h=_===a?(u-c)/y+(u<c?6:0):_===u?(c-a)/y+2:(a-u)/y+4,h*=60),s[0]=~~(h+.5),s[1]=~~(d*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},ix=function(e){var t=[],i=[],s=-1;return e.split(ls).forEach(function(a){var u=a.match(Go)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},E0=function(e,t,i){var s="",a=(e+s).match(ls),u=t?"hsla(":"rgba(",c=0,h,d,p,_;if(!a)return e;if(a=a.map(function(g){return(g=nx(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(p=ix(e),h=i.c,h.join(s)!==p.c.join(s)))for(d=e.replace(ls,"1").split(Go),_=d.length-1;c<_;c++)s+=d[c]+(~h.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:i).shift());if(!d)for(d=e.split(ls),_=d.length-1;c<_;c++)s+=d[c]+a[c];return s+d[_]},ls=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in nl)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),KA=/hsl[a]?\(/,rx=function(e){var t=e.join(" "),i;if(ls.lastIndex=0,ls.test(t))return i=KA.test(t),e[1]=E0(e[1],i),e[0]=E0(e[0],i,ix(e[1])),!0},fl,ci=function(){var o=Date.now,e=500,t=33,i=o(),s=i,a=1e3/240,u=a,c=[],h,d,p,_,g,y,E=function M(S){var v=o()-s,L=S===!0,b,w,U,D;if((v>e||v<0)&&(i+=v-t),s+=v,U=s-i,b=U-u,(b>0||L)&&(D=++_.frame,g=U-_.time*1e3,_.time=U=U/1e3,u+=b+(b>=a?4:a-b),w=1),L||(h=d(M)),w)for(y=0;y<c.length;y++)c[y](U,g,D,S)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){Nv&&(!Zd&&wp()&&(Yi=Zd=window,Ap=Yi.document||{},di.gsap=ei,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(ei.version),Fv(xc||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),ex.forEach(tx)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&_.sleep(),d=p||function(S){return setTimeout(S,u-_.time*1e3+1|0)},fl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(h),fl=0,d=ul},lagSmoothing:function(S,v){e=S||1/0,t=Math.min(v||33,e)},fps:function(S){a=1e3/(S||240),u=_.time*1e3+a},add:function(S,v,L){var b=v?function(w,U,D,I){S(w,U,D,I),_.remove(b)}:S;return _.remove(S),c[L?"unshift":"push"](b),aa(),b},remove:function(S,v){~(v=c.indexOf(S))&&c.splice(v,1)&&y>=v&&y--},_listeners:c},_}(),aa=function(){return!fl&&ci.wake()},gt={},ZA=/^[\d.\-M][\d.\-,\s]/,QA=/["']/g,JA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],a=1,u=i.length,c,h,d;a<u;a++)h=i[a],c=a!==u-1?h.lastIndexOf(","):h.length,d=h.substr(0,c),t[s]=isNaN(d)?d.replace(QA,"").trim():+d,s=h.substr(c+1).trim();return t},eC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},tC=function(e){var t=(e+"").split("("),i=gt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[JA(t[1])]:eC(e).split(",").map(Vv)):gt._CE&&ZA.test(e)?gt._CE("",e):i},sx=function(e){return function(t){return 1-e(1-t)}},ox=function o(e,t){for(var i=e._first,s;i;)i instanceof zn?o(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?o(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},qs=function(e,t){return e&&($t(e)?e:gt[e]||tC(e))||t},eo=function(e,t,i,s){i===void 0&&(i=function(h){return 1-t(1-h)}),s===void 0&&(s=function(h){return h<.5?t(h*2)/2:1-t((1-h)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:s},u;return Zn(e,function(c){gt[c]=di[c]=a,gt[u=c.toLowerCase()]=i;for(var h in a)gt[u+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=gt[c+"."+h]=a[h]}),a},ax=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$h=function o(e,t,i){var s=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),u=a/$d*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*PA((p-u)*a)+1},h=e==="out"?c:e==="in"?function(d){return 1-c(1-d)}:ax(c);return a=$d/a,h.config=function(d,p){return o(e,d,p)},h},Kh=function o(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:ax(i);return s.config=function(a){return o(e,a)},s};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;eo(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;eo("Elastic",$h("in"),$h("out"),$h());(function(o,e){var t=1/e,i=2*t,s=2.5*t,a=function(c){return c<t?o*c*c:c<i?o*Math.pow(c-1.5/e,2)+.75:c<s?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};eo("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);eo("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});eo("Circ",function(o){return-(bv(1-o*o)-1)});eo("Sine",function(o){return o===1?1:-RA(o*AA)+1});eo("Back",Kh("in"),Kh("out"),Kh());gt.SteppedEase=gt.steps=di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),a=t?1:0,u=1-Nt;return function(c){return((s*Sl(0,u,c)|0)+a)*i}}};ra.ease=gt["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Pp+=o+","+o+"Params,"});var lx=function(e,t){this.id=CA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zv,this.set=t?t.getSetter:Up},hl=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,oa(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),fl||ci.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,oa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(aa(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Lc(this,i),!a._dp||a.parent||Wv(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Nt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Bv(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+y0(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+y0(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?sa(this._tTime,a)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?Mc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Nt?0:this._rts,this.totalTime(Sl(-Math.abs(this._delay),this._tDur,a),s!==!1),bc(this),FA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&$i(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Kn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=DA);var s=Pn;return Pn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Pn=s,this},e.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,S0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,S0(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Mi(this,i),Kn(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Kn(s))},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Nt)},e.eventCallback=function(i,s,a){var u=this.vars;return arguments.length>1?(s?(u[i]=s,a&&(u[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this;return new Promise(function(a){var u=$t(i)?i:Hv,c=function(){var d=s.then;s.then=null,$t(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=d),a(u),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){tl(this)},o}();wi(hl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var zn=function(o){Pv(e,o);function e(i,s){var a;return i===void 0&&(i={}),a=o.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=Kn(i.sortChildren),Xt&&$i(i.parent||Xt,xr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Xv(xr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,u){return rl(0,arguments,this),this},t.from=function(s,a,u){return rl(1,arguments,this),this},t.fromTo=function(s,a,u,c){return rl(2,arguments,this),this},t.set=function(s,a,u){return a.duration=0,a.parent=this,il(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new tn(s,a,Mi(this,u),1),this},t.call=function(s,a,u){return $i(this,tn.delayedCall(0,s,a),u)},t.staggerTo=function(s,a,u,c,h,d,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=d,u.onCompleteParams=p,u.parent=this,new tn(s,u,Mi(this,h)),this},t.staggerFrom=function(s,a,u,c,h,d,p){return u.runBackwards=1,il(u).immediateRender=Kn(u.immediateRender),this.staggerTo(s,a,u,c,h,d,p)},t.staggerFromTo=function(s,a,u,c,h,d,p,_){return c.startAt=u,il(c).immediateRender=Kn(c.immediateRender),this.staggerTo(s,a,c,h,d,p,_)},t.render=function(s,a,u){var c=this._time,h=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=s<=0?0:pn(s),_=this._zTime<0!=s<0&&(this._initted||!d),g,y,E,M,S,v,L,b,w,U,D,I;if(this!==Xt&&p>h&&s>=0&&(p=h),p!==this._tTime||u||_){if(c!==this._time&&d&&(p+=this._time-c,s+=this._time-c),g=p,w=this._start,b=this._ts,v=!b,_&&(d||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(D=this._yoyo,S=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,a,u);if(g=pn(p%S),p===h?(M=this._repeat,g=d):(M=~~(p/S),M&&M===p/S&&(g=d,M--),g>d&&(g=d)),U=sa(this._tTime,S),!c&&this._tTime&&U!==M&&this._tTime-U*S-this._dur<=0&&(U=M),D&&M&1&&(g=d-g,I=1),M!==U&&!this._lock){var O=D&&U&1,A=O===(D&&M&1);if(M<U&&(O=!O),c=O?0:p%d?d:p,this._lock=1,this.render(c||(I?0:pn(M*S)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&fi(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,h=this._tDur,A&&(this._lock=2,c=O?d:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;ox(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=BA(this,pn(c),pn(g)),L&&(p-=g-(g=L._start))),this._tTime=p,this._time=g,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&g&&!a&&!M&&(fi(this,"onStart"),this._tTime!==p))return this;if(g>=c&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||g>=y._start)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,a,u);if(y.render(y._ts>0?(g-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(g-y._start)*y._ts,a,u),g!==this._time||!this._ts&&!v){L=0,E&&(p+=this._zTime=-Nt);break}}y=E}else{y=this._last;for(var R=s<0?s:g;y;){if(E=y._prev,(y._act||R<=y._end)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,a,u);if(y.render(y._ts>0?(R-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(R-y._start)*y._ts,a,u||Pn&&(y._initted||y._startAt)),g!==this._time||!this._ts&&!v){L=0,E&&(p+=this._zTime=R?-Nt:Nt);break}}y=E}}if(L&&!a&&(this.pause(),L.render(g>=c?0:-Nt)._zTime=g>=c?1:-1,this._ts))return this._start=w,bc(this),this.render(s,a,u);this._onUpdate&&!a&&fi(this,"onUpdate",!0),(p===h&&this._tTime>=this.totalDuration()||!p&&c)&&(w===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(p===h&&this._ts>0||!p&&this._ts<0)&&fs(this,1),!a&&!(s<0&&!c)&&(p||c||!h)&&(fi(this,p===h&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<h&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var u=this;if(Ar(a)||(a=Mi(this,a,s)),!(s instanceof hl)){if(bn(s))return s.forEach(function(c){return u.add(c,a)}),this;if(_n(s))return this.addLabel(s,a);if($t(s))s=tn.delayedCall(0,s);else return this}return this!==s?$i(this,s,a):this},t.getChildren=function(s,a,u,c){s===void 0&&(s=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-Ei);for(var h=[],d=this._first;d;)d._start>=c&&(d instanceof tn?a&&h.push(d):(u&&h.push(d),s&&h.push.apply(h,d.getChildren(!0,a,u)))),d=d._next;return h},t.getById=function(s){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===s)return a[u]},t.remove=function(s){return _n(s)?this.removeLabel(s):$t(s)?this.killTweensOf(s):(Pc(this,s),s===this._recent&&(this._recent=this._last),Ys(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(ci.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Mi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,u){var c=tn.delayedCall(0,a||ul,u);return c.data="isPause",this._hasPause=1,$i(this,c,Mi(this,s))},t.removePause=function(s){var a=this._first;for(s=Mi(this,s);a;)a._start===s&&a.data==="isPause"&&fs(a),a=a._next},t.killTweensOf=function(s,a,u){for(var c=this.getTweensOf(s,u),h=c.length;h--;)ns!==c[h]&&c[h].kill(s,a);return this},t.getTweensOf=function(s,a){for(var u=[],c=Ti(s),h=this._first,d=Ar(a),p;h;)h instanceof tn?IA(h._targets,c)&&(d?(!ns||h._initted&&h._ts)&&h.globalTime(0)<=a&&h.globalTime(h.totalDuration())>a:!a||h.isActive())&&u.push(h):(p=h.getTweensOf(c,a)).length&&u.push.apply(u,p),h=h._next;return u},t.tweenTo=function(s,a){a=a||{};var u=this,c=Mi(u,s),h=a,d=h.startAt,p=h.onStart,_=h.onStartParams,g=h.immediateRender,y,E=tn.to(u,wi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale())||Nt,onStart:function(){if(u.pause(),!y){var S=a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale());E._dur!==S&&oa(E,S,0,1).render(E._time,!0,!0),y=1}p&&p.apply(E,_||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(s,a,u){return this.tweenTo(a,wi({startAt:{time:Mi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),M0(this,Mi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),M0(this,Mi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Nt)},t.shiftChildren=function(s,a,u){u===void 0&&(u=0);for(var c=this._first,h=this.labels,d;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(a)for(d in h)h[d]>=u&&(h[d]+=s);return Ys(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return o.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ys(this)},t.totalDuration=function(s){var a=0,u=this,c=u._last,h=Ei,d,p,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(_=u.parent;c;)d=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>h&&u._sort&&c._ts&&!u._lock?(u._lock=1,$i(u,c,p-c._delay,1)._lock=0):h=p,p<0&&c._ts&&(a-=p,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),h=0),c._end>a&&c._ts&&(a=c._end),c=d;oa(u,u===Xt&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Xt._ts&&(Bv(Xt,Mc(s,Xt)),kv=ci.frame),ci.frame>=v0){v0+=hi.autoSleep||120;var a=Xt._first;if((!a||!a._ts)&&hi.autoSleep&&ci._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ci.sleep()}}},e}(hl);wi(zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var nC=function(e,t,i,s,a,u,c){var h=new Qn(this._pt,e,t,0,1,px,null,a),d=0,p=0,_,g,y,E,M,S,v,L;for(h.b=i,h.e=s,i+="",s+="",(v=~s.indexOf("random("))&&(s=cl(s)),u&&(L=[i,s],u(L,e,t),i=L[0],s=L[1]),g=i.match(jh)||[];_=jh.exec(s);)E=_[0],M=s.substring(d,_.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==g[p++]&&(S=parseFloat(g[p-1])||0,h._pt={_next:h._pt,p:M||p===1?M:",",s:S,c:E.charAt(1)==="="?qo(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},d=jh.lastIndex);return h.c=d<s.length?s.substring(d,s.length):"",h.fp=c,(Iv.test(s)||v)&&(h.e=0),this._pt=h,h},Lp=function(e,t,i,s,a,u,c,h,d,p){$t(s)&&(s=s(a||0,e,u));var _=e[t],g=i!=="get"?i:$t(_)?d?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():_,y=$t(_)?d?aC:hx:Ip,E;if(_n(s)&&(~s.indexOf("random(")&&(s=cl(s)),s.charAt(1)==="="&&(E=qo(g,s)+(Rn(g)||0),(E||E===0)&&(s=E))),!p||g!==s||rp)return!isNaN(g*s)&&s!==""?(E=new Qn(this._pt,e,t,+g||0,s-(g||0),typeof _=="boolean"?uC:dx,0,y),d&&(E.fp=d),c&&E.modifier(c,this,e),this._pt=E):(!_&&!(t in e)&&Cp(t,s),nC.call(this,e,t,g,s,y,h||hi.stringFilter,d))},iC=function(e,t,i,s,a){if($t(e)&&(e=sl(e,a,t,i,s)),!tr(e)||e.style&&e.nodeType||bn(e)||Lv(e))return _n(e)?sl(e,a,t,i,s):e;var u={},c;for(c in e)u[c]=sl(e[c],a,t,i,s);return u},ux=function(e,t,i,s,a,u){var c,h,d,p;if(li[e]&&(c=new li[e]).init(a,c.rawVars?t[e]:iC(t[e],s,a,u,i),i,s,u)!==!1&&(i._pt=h=new Qn(i._pt,a,e,0,1,c.render,c,0,c.priority),i!==Wo))for(d=i._ptLookup[i._targets.indexOf(a)],p=c._props.length;p--;)d[c._props[p]]=h;return c},ns,rp,Dp=function o(e,t,i){var s=e.vars,a=s.ease,u=s.startAt,c=s.immediateRender,h=s.lazy,d=s.onUpdate,p=s.runBackwards,_=s.yoyoEase,g=s.keyframes,y=s.autoRevert,E=e._dur,M=e._startAt,S=e._targets,v=e.parent,L=v&&v.data==="nested"?v.vars.targets:S,b=e._overwrite==="auto"&&!Ep,w=e.timeline,U,D,I,O,A,R,z,J,Y,le,ue,ne,se;if(w&&(!g||!a)&&(a="none"),e._ease=qs(a,ra.ease),e._yEase=_?sx(qs(_===!0?a:_,ra.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!w&&!!s.runBackwards,!w||g&&!s.stagger){if(J=S[0]?js(S[0]).harness:0,ne=J&&s[J.prop],U=Sc(s,Rp),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!y?M.render(-1,!0):M.revert(p&&E?fc:LA),M._lazy=0),u){if(fs(e._startAt=tn.set(S,wi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!M&&Kn(h),startAt:null,delay:0,onUpdate:d&&function(){return fi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pn||!c&&!y)&&e._startAt.revert(fc),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),I=wi({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Kn(h),immediateRender:c,stagger:0,parent:v},U),ne&&(I[J.prop]=ne),fs(e._startAt=tn.set(S,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pn?e._startAt.revert(fc):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,Nt,Nt);else if(!t)return}for(e._pt=e._ptCache=0,h=E&&Kn(h)||h&&!E,D=0;D<S.length;D++){if(A=S[D],z=A._gsap||bp(S)[D]._gsap,e._ptLookup[D]=le={},Qd[z.id]&&as.length&&yc(),ue=L===S?D:L.indexOf(A),J&&(Y=new J).init(A,ne||U,e,ue,L)!==!1&&(e._pt=O=new Qn(e._pt,A,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(B){le[B]=O}),Y.priority&&(R=1)),!J||ne)for(I in U)li[I]&&(Y=ux(I,U,e,ue,A,L))?Y.priority&&(R=1):le[I]=O=Lp.call(e,A,I,"get",U[I],ue,L,0,s.stringFilter);e._op&&e._op[D]&&e.kill(A,e._op[D]),b&&e._pt&&(ns=e,Xt.killTweensOf(A,le,e.globalTime(t)),se=!e.parent,ns=0),e._pt&&h&&(Qd[z.id]=1)}R&&mx(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&w.render(Ei,!0,!0)},rC=function(e,t,i,s,a,u,c,h){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,g,y;if(!d)for(d=e._ptCache[t]=[],g=e._ptLookup,y=e._targets.length;y--;){if(p=g[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return rp=1,e.vars[t]="+=0",Dp(e,c),rp=0,h?ll(t+" not eligible for reset"):1;d.push(p)}for(y=d.length;y--;)_=d[y],p=_._pt||_,p.s=(s||s===0)&&!a?s:p.s+(s||0)+u*p.c,p.c=i-p.s,_.e&&(_.e=Qt(i)+Rn(_.e)),_.b&&(_.b=p.s+Rn(_.b))},sC=function(e,t){var i=e[0]?js(e[0]).harness:0,s=i&&i.aliases,a,u,c,h;if(!s)return t;a=Qs({},t);for(u in s)if(u in a)for(h=s[u].split(","),c=h.length;c--;)a[h[c]]=a[u];return a},oC=function(e,t,i,s){var a=t.ease||s||"power1.inOut",u,c;if(bn(t))c=i[e]||(i[e]=[]),t.forEach(function(h,d){return c.push({t:d/(t.length-1)*100,v:h,e:a})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},sl=function(e,t,i,s,a){return $t(e)?e.call(t,i,s,a):_n(e)&&~e.indexOf("random(")?cl(e):e},cx=Pp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fx={};Zn(cx+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return fx[o]=1});var tn=function(o){Pv(e,o);function e(i,s,a,u){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=o.call(this,u?s:il(s))||this;var h=c.vars,d=h.duration,p=h.delay,_=h.immediateRender,g=h.stagger,y=h.overwrite,E=h.keyframes,M=h.defaults,S=h.scrollTrigger,v=h.yoyoEase,L=s.parent||Xt,b=(bn(i)||Lv(i)?Ar(i[0]):"length"in s)?[i]:Ti(i),w,U,D,I,O,A,R,z;if(c._targets=b.length?bp(b):ll("GSAP target "+i+" not found. https://gsap.com",!hi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,E||g||Ju(d)||Ju(p)){if(s=c.vars,w=c.timeline=new zn({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:b}),w.kill(),w.parent=w._dp=xr(c),w._start=0,g||Ju(d)||Ju(p)){if(I=b.length,R=g&&$v(g),tr(g))for(O in g)~cx.indexOf(O)&&(z||(z={}),z[O]=g[O]);for(U=0;U<I;U++)D=Sc(s,fx),D.stagger=0,v&&(D.yoyoEase=v),z&&Qs(D,z),A=b[U],D.duration=+sl(d,xr(c),U,A,b),D.delay=(+sl(p,xr(c),U,A,b)||0)-c._delay,!g&&I===1&&D.delay&&(c._delay=p=D.delay,c._start+=p,D.delay=0),w.to(A,D,R?R(U,A,b):0),w._ease=gt.none;w.duration()?d=p=0:c.timeline=0}else if(E){il(wi(w.vars.defaults,{ease:"none"})),w._ease=qs(E.ease||s.ease||"none");var J=0,Y,le,ue;if(bn(E))E.forEach(function(ne){return w.to(b,ne,">")}),w.duration();else{D={};for(O in E)O==="ease"||O==="easeEach"||oC(O,E[O],D,E.easeEach);for(O in D)for(Y=D[O].sort(function(ne,se){return ne.t-se.t}),J=0,U=0;U<Y.length;U++)le=Y[U],ue={ease:le.e,duration:(le.t-(U?Y[U-1].t:0))/100*d},ue[O]=le.v,w.to(b,ue,J),J+=ue.duration;w.duration()<d&&w.to({},{duration:d-w.duration()})}}d||c.duration(d=w.duration())}else c.timeline=0;return y===!0&&!Ep&&(ns=xr(c),Xt.killTweensOf(b),ns=0),$i(L,xr(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(_||!d&&!E&&c._start===pn(L._time)&&Kn(_)&&OA(xr(c))&&L.data!=="nested")&&(c._tTime=-Nt,c.render(Math.max(0,-p)||0)),S&&Xv(xr(c),S),c}var t=e.prototype;return t.render=function(s,a,u){var c=this._time,h=this._tDur,d=this._dur,p=s<0,_=s>h-Nt&&!p?h:s<Nt?0:s,g,y,E,M,S,v,L,b,w;if(!d)zA(this,s,a,u);else if(_!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p){if(g=_,b=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,a,u);if(g=pn(_%M),_===h?(E=this._repeat,g=d):(E=~~(_/M),E&&E===pn(_/M)&&(g=d,E--),g>d&&(g=d)),v=this._yoyo&&E&1,v&&(w=this._yEase,g=d-g),S=sa(this._tTime,M),g===c&&!u&&this._initted&&E===S)return this._tTime=_,this;E!==S&&(b&&this._yEase&&ox(b,v),this.vars.repeatRefresh&&!v&&!this._lock&&this._time!==M&&this._initted&&(this._lock=u=1,this.render(pn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(jv(this,p?s:g,u,a,_))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==S))return this;if(d!==this._dur)return this.render(s,a,u)}if(this._tTime=_,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(w||this._ease)(g/d),this._from&&(this.ratio=L=1-L),g&&!c&&!a&&!E&&(fi(this,"onStart"),this._tTime!==_))return this;for(y=this._pt;y;)y.r(L,y.d),y=y._next;b&&b.render(s<0?s:b._dur*b._ease(g/this._dur),a,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&Jd(this,s,a,u),fi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!a&&this.parent&&fi(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&Jd(this,s,!0,!0),(s||!d)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&fs(this,1),!a&&!(p&&!c)&&(_||c||v)&&(fi(this,_===h?"onComplete":"onReverseComplete",!0),this._prom&&!(_<h&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,u,c,h){fl||ci.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Dp(this,d),p=this._ease(d/this._dur),rC(this,s,a,u,c,p,d,h)?this.resetTo(s,a,u,c,1):(Lc(this,0),this.parent||Gv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?tl(this):this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,ns&&ns.vars.overwrite!==!0)._first||tl(this),this.parent&&u!==this.timeline.totalDuration()&&oa(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,h=s?Ti(s):c,d=this._ptLookup,p=this._pt,_,g,y,E,M,S,v;if((!a||a==="all")&&NA(c,h))return a==="all"&&(this._pt=0),tl(this);for(_=this._op=this._op||[],a!=="all"&&(_n(a)&&(M={},Zn(a,function(L){return M[L]=1}),a=M),a=sC(c,a)),v=c.length;v--;)if(~h.indexOf(c[v])){g=d[v],a==="all"?(_[v]=a,E=g,y={}):(y=_[v]=_[v]||{},E=a);for(M in E)S=g&&g[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Pc(this,S,"_pt"),delete g[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&p&&tl(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return rl(1,arguments)},e.delayedCall=function(s,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,a,u){return rl(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,u){return Xt.killTweensOf(s,a,u)},e}(hl);wi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(o){tn[o]=function(){var e=new zn,t=tp.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Ip=function(e,t,i){return e[t]=i},hx=function(e,t,i){return e[t](i)},aC=function(e,t,i,s){return e[t](s.fp,i)},lC=function(e,t,i){return e.setAttribute(t,i)},Up=function(e,t){return $t(e[t])?hx:Tp(e[t])&&e.setAttribute?lC:Ip},dx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},px=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Np=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},cC=function(e,t,i,s){for(var a=this._pt,u;a;)u=a._next,a.p===s&&a.modifier(e,t,i),a=u},fC=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Pc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},hC=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},mx=function(e){for(var t=e._pt,i,s,a,u;t;){for(i=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=a},Qn=function(){function o(t,i,s,a,u,c,h,d,p){this.t=i,this.s=a,this.c=u,this.p=s,this.r=c||dx,this.d=h||this,this.set=d||Ip,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=hC,this.m=i,this.mt=a,this.tween=s},o}();Zn(Pp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Rp[o]=1});di.TweenMax=di.TweenLite=tn;di.TimelineLite=di.TimelineMax=zn;Xt=new zn({sortChildren:!1,defaults:ra,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hi.stringFilter=rx;var $s=[],dc={},dC=[],T0=0,pC=0,Zh=function(e){return(dc[e]||dC).map(function(t){return t()})},sp=function(){var e=Date.now(),t=[];e-T0>2&&(Zh("matchMediaInit"),$s.forEach(function(i){var s=i.queries,a=i.conditions,u,c,h,d;for(c in s)u=Yi.matchMedia(s[c]).matches,u&&(h=1),u!==a[c]&&(a[c]=u,d=1);d&&(i.revert(),h&&t.push(i))}),Zh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),T0=e,Zh("matchMedia"))},_x=function(){function o(t,i){this.selector=i&&np(i),this.data=[],this._r=[],this.isReverted=!1,this.id=pC++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,s,a){$t(i)&&(a=s,s=i,i=$t);var u=this,c=function(){var d=Ht,p=u.selector,_;return d&&d!==u&&d.data.push(u),a&&(u.selector=np(a)),Ht=u,_=s.apply(u,arguments),$t(_)&&u._r.push(_),Ht=d,u.selector=p,u.isReverted=!1,_};return u.last=c,i===$t?c(u,function(h){return u.add(null,h)}):i?u[i]=c:c},e.ignore=function(i){var s=Ht;Ht=null,i(this),Ht=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof tn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var a=this;if(i?function(){for(var c=a.getTweens(),h=a.data.length,d;h--;)d=a.data[h],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),h=a.data.length;h--;)d=a.data[h],d instanceof zn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof tn)&&d.revert&&d.revert(i);a._r.forEach(function(p){return p(i,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=$s.length;u--;)$s[u].id===this.id&&$s.splice(u,1)},e.revert=function(i){this.kill(i||{})},o}(),mC=function(){function o(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=o.prototype;return e.add=function(i,s,a){tr(i)||(i={matches:i});var u=new _x(0,a||this.scope),c=u.conditions={},h,d,p;Ht&&!u.selector&&(u.selector=Ht.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(d in i)d==="all"?p=1:(h=Yi.matchMedia(i[d]),h&&($s.indexOf(u)<0&&$s.push(u),(c[d]=h.matches)&&(p=1),h.addListener?h.addListener(sp):h.addEventListener("change",sp)));return p&&s(u,function(_){return u.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o}(),Ec={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return tx(s)})},timeline:function(e){return new zn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,i,s){_n(e)&&(e=Ti(e)[0]);var a=js(e||{}).get,u=i?Hv:Vv;return i==="native"&&(i=""),e&&(t?u((li[t]&&li[t].get||a)(e,t,i,s)):function(c,h,d){return u((li[c]&&li[c].get||a)(e,c,h,d))})},quickSetter:function(e,t,i){if(e=Ti(e),e.length>1){var s=e.map(function(p){return ei.quickSetter(p,t,i)}),a=s.length;return function(p){for(var _=a;_--;)s[_](p)}}e=e[0]||{};var u=li[t],c=js(e),h=c.harness&&(c.harness.aliases||{})[t]||t,d=u?function(p){var _=new u;Wo._pt=0,_.init(e,i?p+i:p,Wo,0,[e]),_.render(1,_),Wo._pt&&Np(1,Wo)}:c.set(e,h);return u?d:function(p){return d(e,h,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,a=ei.to(e,Qs((s={},s[t]="+=0.1",s.paused=!0,s),i||{})),u=function(h,d,p){return a.resetTo(t,h,d,p)};return u.tween=a,u},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qs(e.ease,ra.ease)),x0(ra,e||{})},config:function(e){return x0(hi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,a=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!li[c]&&!di[c]&&ll(t+" effect requires "+c+" plugin.")}),Yh[t]=function(c,h,d){return i(Ti(c),wi(h||{},a),d)},u&&(zn.prototype[t]=function(c,h,d){return this.add(Yh[t](c,tr(h)?h:(d=h)&&{},this),d)})},registerEase:function(e,t){gt[e]=qs(t)},parseEase:function(e,t){return arguments.length?qs(e,t):gt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new zn(e),s,a;for(i.smoothChildTiming=Kn(e.smoothChildTiming),Xt.remove(i),i._dp=0,i._time=i._tTime=Xt._time,s=Xt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof tn&&s.vars.onComplete===s._targets[0]))&&$i(i,s,s._start-s._delay),s=a;return $i(Xt,i,0),i},context:function(e,t){return e?new _x(e,t):Ht},matchMedia:function(e){return new mC(e)},matchMediaRefresh:function(){return $s.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||sp()},addEventListener:function(e,t){var i=dc[e]||(dc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=dc[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:YA,wrapYoyo:qA,distribute:$v,random:Zv,snap:Kv,normalize:jA,getUnit:Rn,clamp:HA,splitColor:nx,toArray:Ti,selector:np,mapRange:Jv,pipe:WA,unitize:XA,interpolate:$A,shuffle:qv},install:Fv,effects:Yh,ticker:ci,updateRoot:zn.updateRoot,plugins:li,globalTimeline:Xt,core:{PropTween:Qn,globals:Ov,Tween:tn,Timeline:zn,Animation:hl,getCache:js,_removeLinkedListItem:Pc,reverting:function(){return Pn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return Ep=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ec[o]=tn[o]});ci.add(zn.updateRoot);Wo=Ec.to({},{duration:0});var _C=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},gC=function(e,t){var i=e._targets,s,a,u;for(s in t)for(a=i.length;a--;)u=e._ptLookup[a][s],u&&(u=u.d)&&(u._pt&&(u=_C(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[a],s))},Qh=function(e,t){return{name:e,rawVars:1,init:function(s,a,u){u._onInit=function(c){var h,d;if(_n(a)&&(h={},Zn(a,function(p){return h[p]=1}),a=h),t){h={};for(d in a)h[d]=t(a[d]);a=h}gC(c,a)}}}},ei=Ec.registerPlugin({name:"attr",init:function(e,t,i,s,a){var u,c,h;this.tween=i;for(u in t)h=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(h||0)+"",t[u],s,a,0,0,u),c.op=u,c.b=h,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)Pn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Qh("roundProps",ip),Qh("modifiers"),Qh("snap",Kv))||Ec;tn.version=zn.version=ei.version="3.12.5";Nv=1;wp()&&aa();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var w0,is,$o,Fp,Xs,A0,Op,vC=function(){return typeof window<"u"},Cr={},Bs=180/Math.PI,Ko=Math.PI/180,Bo=Math.atan2,C0=1e8,kp=/([A-Z])/g,xC=/(left|right|width|margin|padding|x)/i,yC=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},op=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},EC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TC=function(e,t,i){return e.style[t]=i},wC=function(e,t,i){return e.style.setProperty(t,i)},AC=function(e,t,i){return e._gsap[t]=i},CC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},RC=function(e,t,i,s,a){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(a,u)},PC=function(e,t,i,s,a){var u=e._gsap;u[t]=i,u.renderTransform(a,u)},jt="transform",Jn=jt+"Origin",bC=function o(e,t){var i=this,s=this.target,a=s.style,u=s._gsap;if(e in Cr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=yr(s,c)}):this.tfm[e]=u.x?u[e]:yr(s,e),e===Jn&&(this.tfm.zOrigin=u.zOrigin);else return Zi.transform.split(",").forEach(function(c){return o.call(i,c,t)});if(this.props.indexOf(jt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Jn,t,"")),e=jt}(a||t)&&this.props.push(e,t,a[e])},xx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LC=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(kp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Op(),(!a||!a.isStart)&&!i[jt]&&(xx(i),s.zOrigin&&i[Jn]&&(i[Jn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},yx=function(e,t){var i={target:e,props:[],revert:LC,save:bC};return e._gsap||ei.core.getCache(e),t&&t.split(",").forEach(function(s){return i.save(s)}),i},Sx,ap=function(e,t){var i=is.createElementNS?is.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):is.createElement(e);return i&&i.style?i:is.createElement(e)},Ji=function o(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(kp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&o(e,la(t)||t,1)||""},R0="O,Moz,ms,Ms,Webkit".split(","),la=function(e,t,i){var s=t||Xs,a=s.style,u=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(R0[u]+e in a););return u<0?null:(u===3?"ms":u>=0?R0[u]:"")+e},lp=function(){vC()&&window.document&&(w0=window,is=w0.document,$o=is.documentElement,Xs=ap("div")||{style:{}},ap("div"),jt=la(jt),Jn=jt+"Origin",Xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sx=!!la("perspective"),Op=ei.core.reverting,Fp=1)},Jh=function o(e){var t=ap("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,a=this.style.cssText,u;if($o.appendChild(t),t.appendChild(this),this.style.display="block",e)try{u=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(u=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),$o.removeChild(t),this.style.cssText=a,u},P0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Mx=function(e){var t;try{t=e.getBBox()}catch{t=Jh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Jh||(t=Jh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+P0(e,["x","cx","x1"])||0,y:+P0(e,["y","cy","y1"])||0,width:0,height:0}:t},Ex=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mx(e))},Js=function(e,t){if(t){var i=e.style,s;t in Cr&&t!==Jn&&(t=jt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(kp,"-$1").toLowerCase())):i.removeAttribute(t)}},rs=function(e,t,i,s,a,u){var c=new Qn(e._pt,t,i,0,1,u?vx:gx);return e._pt=c,c.b=s,c.e=a,e._props.push(i),c},b0={deg:1,rad:1,turn:1},DC={grid:1,flex:1},hs=function o(e,t,i,s){var a=parseFloat(i)||0,u=(i+"").trim().substr((a+"").length)||"px",c=Xs.style,h=xC.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(h?"Width":"Height"),_=100,g=s==="px",y=s==="%",E,M,S,v;if(s===u||!a||b0[s]||b0[u])return a;if(u!=="px"&&!g&&(a=o(e,t,i,"px")),v=e.getCTM&&Ex(e),(y||u==="%")&&(Cr[t]||~t.indexOf("adius")))return E=v?e.getBBox()[h?"width":"height"]:e[p],Qt(y?a/E*_:a/100*E);if(c[h?"width":"height"]=_+(g?u:s),M=~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,v&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===is||!M.appendChild)&&(M=is.body),S=M._gsap,S&&y&&S.width&&h&&S.time===ci.time&&!S.uncache)return Qt(a/S.width*_);if(y&&(t==="height"||t==="width")){var L=e.style[t];e.style[t]=_+s,E=e[p],L?e.style[t]=L:Js(e,t)}else(y||u==="%")&&!DC[Ji(M,"display")]&&(c.position=Ji(e,"position")),M===e&&(c.position="static"),M.appendChild(Xs),E=Xs[p],M.removeChild(Xs),c.position="absolute";return h&&y&&(S=js(M),S.time=ci.time,S.width=M[p]),Qt(g?E*a/_:E&&a?_/E*a:0)},yr=function(e,t,i,s){var a;return Fp||lp(),t in Zi&&t!=="transform"&&(t=Zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Cr[t]&&t!=="transform"?(a=pl(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:wc(Ji(e,Jn))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=Tc[t]&&Tc[t](e,t,i)||Ji(e,t)||zv(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?hs(e,t,a,i)+i:a},IC=function(e,t,i,s){if(!i||i==="none"){var a=la(t,e,1),u=a&&Ji(e,a,1);u&&u!==i?(t=a,i=u):t==="borderColor"&&(i=Ji(e,"borderTopColor"))}var c=new Qn(this._pt,e.style,t,0,1,px),h=0,d=0,p,_,g,y,E,M,S,v,L,b,w,U;if(c.b=i,c.e=s,i+="",s+="",s==="auto"&&(M=e.style[t],e.style[t]=s,s=Ji(e,t)||s,M?e.style[t]=M:Js(e,t)),p=[i,s],rx(p),i=p[0],s=p[1],g=i.match(Go)||[],U=s.match(Go)||[],U.length){for(;_=Go.exec(s);)S=_[0],L=s.substring(h,_.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),S!==(M=g[d++]||"")&&(y=parseFloat(M)||0,w=M.substr((y+"").length),S.charAt(1)==="="&&(S=qo(y,S)+w),v=parseFloat(S),b=S.substr((v+"").length),h=Go.lastIndex-b.length,b||(b=b||hi.units[t]||w,h===s.length&&(s+=b,c.e+=b)),w!==b&&(y=hs(e,t,M,b)||0),c._pt={_next:c._pt,p:L||d===1?L:",",s:y,c:v-y,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=h<s.length?s.substring(h,s.length):""}else c.r=t==="display"&&s==="none"?vx:gx;return Iv.test(s)&&(c.e=0),this._pt=c,c},L0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UC=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=L0[i]||i,t[1]=L0[s]||s,t.join(" ")},NC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,a=t.u,u=i._gsap,c,h,d;if(a==="all"||a===!0)s.cssText="",h=1;else for(a=a.split(","),d=a.length;--d>-1;)c=a[d],Cr[c]&&(h=1,c=c==="transformOrigin"?Jn:jt),Js(i,c);h&&(Js(i,jt),u&&(u.svg&&i.removeAttribute("transform"),pl(i,1),u.uncache=1,xx(s)))}},Tc={clearProps:function(e,t,i,s,a){if(a.data!=="isFromStart"){var u=e._pt=new Qn(e._pt,t,i,0,0,NC);return u.u=s,u.pr=-10,u.tween=a,e._props.push(i),1}}},dl=[1,0,0,1,0,0],Tx={},wx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},D0=function(e){var t=Ji(e,jt);return wx(t)?dl:t.substr(7).match(Dv).map(Qt)},zp=function(e,t){var i=e._gsap||js(e),s=e.style,a=D0(e),u,c,h,d;return i.svg&&e.getAttribute("transform")?(h=e.transform.baseVal.consolidate().matrix,a=[h.a,h.b,h.c,h.d,h.e,h.f],a.join(",")==="1,0,0,1,0,0"?dl:a):(a===dl&&!e.offsetParent&&e!==$o&&!i.svg&&(h=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent)&&(d=1,c=e.nextElementSibling,$o.appendChild(e)),a=D0(e),h?s.display=h:Js(e,"display"),d&&(c?u.insertBefore(e,c):u?u.appendChild(e):$o.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},up=function(e,t,i,s,a,u){var c=e._gsap,h=a||zp(e,!0),d=c.xOrigin||0,p=c.yOrigin||0,_=c.xOffset||0,g=c.yOffset||0,y=h[0],E=h[1],M=h[2],S=h[3],v=h[4],L=h[5],b=t.split(" "),w=parseFloat(b[0])||0,U=parseFloat(b[1])||0,D,I,O,A;i?h!==dl&&(I=y*S-E*M)&&(O=w*(S/I)+U*(-M/I)+(M*L-S*v)/I,A=w*(-E/I)+U*(y/I)-(y*L-E*v)/I,w=O,U=A):(D=Mx(e),w=D.x+(~b[0].indexOf("%")?w/100*D.width:w),U=D.y+(~(b[1]||b[0]).indexOf("%")?U/100*D.height:U)),s||s!==!1&&c.smooth?(v=w-d,L=U-p,c.xOffset=_+(v*y+L*M)-v,c.yOffset=g+(v*E+L*S)-L):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=U,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[Jn]="0px 0px",u&&(rs(u,c,"xOrigin",d,w),rs(u,c,"yOrigin",p,U),rs(u,c,"xOffset",_,c.xOffset),rs(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+U)},pl=function(e,t){var i=e._gsap||new lx(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,a=i.scaleX<0,u="px",c="deg",h=getComputedStyle(e),d=Ji(e,Jn)||"0",p,_,g,y,E,M,S,v,L,b,w,U,D,I,O,A,R,z,J,Y,le,ue,ne,se,B,ce,oe,k,ee,Le,K,fe;return p=_=g=M=S=v=L=b=w=0,y=E=1,i.svg=!!(e.getCTM&&Ex(e)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(s[jt]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[jt]!=="none"?h[jt]:"")),s.scale=s.rotate=s.translate="none"),I=zp(e,i.svg),i.svg&&(i.uncache?(B=e.getBBox(),d=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",se=""):se=!t&&e.getAttribute("data-svg-origin"),up(e,se||d,!!se||i.originIsAbsolute,i.smooth!==!1,I)),U=i.xOrigin||0,D=i.yOrigin||0,I!==dl&&(z=I[0],J=I[1],Y=I[2],le=I[3],p=ue=I[4],_=ne=I[5],I.length===6?(y=Math.sqrt(z*z+J*J),E=Math.sqrt(le*le+Y*Y),M=z||J?Bo(J,z)*Bs:0,L=Y||le?Bo(Y,le)*Bs+M:0,L&&(E*=Math.abs(Math.cos(L*Ko))),i.svg&&(p-=U-(U*z+D*Y),_-=D-(U*J+D*le))):(fe=I[6],Le=I[7],oe=I[8],k=I[9],ee=I[10],K=I[11],p=I[12],_=I[13],g=I[14],O=Bo(fe,ee),S=O*Bs,O&&(A=Math.cos(-O),R=Math.sin(-O),se=ue*A+oe*R,B=ne*A+k*R,ce=fe*A+ee*R,oe=ue*-R+oe*A,k=ne*-R+k*A,ee=fe*-R+ee*A,K=Le*-R+K*A,ue=se,ne=B,fe=ce),O=Bo(-Y,ee),v=O*Bs,O&&(A=Math.cos(-O),R=Math.sin(-O),se=z*A-oe*R,B=J*A-k*R,ce=Y*A-ee*R,K=le*R+K*A,z=se,J=B,Y=ce),O=Bo(J,z),M=O*Bs,O&&(A=Math.cos(O),R=Math.sin(O),se=z*A+J*R,B=ue*A+ne*R,J=J*A-z*R,ne=ne*A-ue*R,z=se,ue=B),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,v=180-v),y=Qt(Math.sqrt(z*z+J*J+Y*Y)),E=Qt(Math.sqrt(ne*ne+fe*fe)),O=Bo(ue,ne),L=Math.abs(O)>2e-4?O*Bs:0,w=K?1/(K<0?-K:K):0),i.svg&&(se=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!wx(Ji(e,jt)),se&&e.setAttribute("transform",se))),Math.abs(L)>90&&Math.abs(L)<270&&(a?(y*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=g+u,i.scaleX=Qt(y),i.scaleY=Qt(E),i.rotation=Qt(M)+c,i.rotationX=Qt(S)+c,i.rotationY=Qt(v)+c,i.skewX=L+c,i.skewY=b+c,i.transformPerspective=w+u,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(s[Jn]=wc(d)),i.xOffset=i.yOffset=0,i.force3D=hi.force3D,i.renderTransform=i.svg?OC:Sx?Ax:FC,i.uncache=0,i},wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ed=function(e,t,i){var s=Rn(t);return Qt(parseFloat(t)+parseFloat(hs(e,"x",i+"px",s)))+s},FC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ax(e,t)},Fs="0deg",Ka="0px",Os=") ",Ax=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,h=i.z,d=i.rotation,p=i.rotationY,_=i.rotationX,g=i.skewX,y=i.skewY,E=i.scaleX,M=i.scaleY,S=i.transformPerspective,v=i.force3D,L=i.target,b=i.zOrigin,w="",U=v==="auto"&&e&&e!==1||v===!0;if(b&&(_!==Fs||p!==Fs)){var D=parseFloat(p)*Ko,I=Math.sin(D),O=Math.cos(D),A;D=parseFloat(_)*Ko,A=Math.cos(D),u=ed(L,u,I*A*-b),c=ed(L,c,-Math.sin(D)*-b),h=ed(L,h,O*A*-b+b)}S!==Ka&&(w+="perspective("+S+Os),(s||a)&&(w+="translate("+s+"%, "+a+"%) "),(U||u!==Ka||c!==Ka||h!==Ka)&&(w+=h!==Ka||U?"translate3d("+u+", "+c+", "+h+") ":"translate("+u+", "+c+Os),d!==Fs&&(w+="rotate("+d+Os),p!==Fs&&(w+="rotateY("+p+Os),_!==Fs&&(w+="rotateX("+_+Os),(g!==Fs||y!==Fs)&&(w+="skew("+g+", "+y+Os),(E!==1||M!==1)&&(w+="scale("+E+", "+M+Os),L.style[jt]=w||"translate(0, 0)"},OC=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,h=i.rotation,d=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,y=i.target,E=i.xOrigin,M=i.yOrigin,S=i.xOffset,v=i.yOffset,L=i.forceCSS,b=parseFloat(u),w=parseFloat(c),U,D,I,O,A;h=parseFloat(h),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,h+=p),h||d?(h*=Ko,d*=Ko,U=Math.cos(h)*_,D=Math.sin(h)*_,I=Math.sin(h-d)*-g,O=Math.cos(h-d)*g,d&&(p*=Ko,A=Math.tan(d-p),A=Math.sqrt(1+A*A),I*=A,O*=A,p&&(A=Math.tan(p),A=Math.sqrt(1+A*A),U*=A,D*=A)),U=Qt(U),D=Qt(D),I=Qt(I),O=Qt(O)):(U=_,O=g,D=I=0),(b&&!~(u+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(b=hs(y,"x",u,"px"),w=hs(y,"y",c,"px")),(E||M||S||v)&&(b=Qt(b+E-(E*U+M*I)+S),w=Qt(w+M-(E*D+M*O)+v)),(s||a)&&(A=y.getBBox(),b=Qt(b+s/100*A.width),w=Qt(w+a/100*A.height)),A="matrix("+U+","+D+","+I+","+O+","+b+","+w+")",y.setAttribute("transform",A),L&&(y.style[jt]=A)},kC=function(e,t,i,s,a){var u=360,c=_n(a),h=parseFloat(a)*(c&&~a.indexOf("rad")?Bs:1),d=h-s,p=s+d+"deg",_,g;return c&&(_=a.split("_")[1],_==="short"&&(d%=u,d!==d%(u/2)&&(d+=d<0?u:-u)),_==="cw"&&d<0?d=(d+u*C0)%u-~~(d/u)*u:_==="ccw"&&d>0&&(d=(d-u*C0)%u-~~(d/u)*u)),e._pt=g=new Qn(e._pt,t,i,s,d,SC),g.e=p,g.u="deg",e._props.push(i),g},I0=function(e,t){for(var i in t)e[i]=t[i];return e},zC=function(e,t,i){var s=I0({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,h,d,p,_,g,y,E;s.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),u[jt]=t,c=pl(i,1),Js(i,jt),i.setAttribute("transform",d)):(d=getComputedStyle(i)[jt],u[jt]=t,c=pl(i,1),u[jt]=d);for(h in Cr)d=s[h],p=c[h],d!==p&&a.indexOf(h)<0&&(y=Rn(d),E=Rn(p),_=y!==E?hs(i,h,d,E):parseFloat(d),g=parseFloat(p),e._pt=new Qn(e._pt,c,h,_,g-_,op),e._pt.u=E||0,e._props.push(h));I0(c,s)};Zn("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",s="Bottom",a="Left",u=(e<3?[t,i,s,a]:[t+a,t+i,s+i,s+a]).map(function(c){return e<2?o+c:"border"+c+o});Tc[e>1?"border"+o:o]=function(c,h,d,p,_){var g,y;if(arguments.length<4)return g=u.map(function(E){return yr(c,E,d)}),y=g.join(" "),y.split(g[0]).length===5?g[0]:y;g=(p+"").split(" "),y={},u.forEach(function(E,M){return y[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(h,y,_)}});var Cx={name:"css",register:lp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,a){var u=this._props,c=e.style,h=i.vars.startAt,d,p,_,g,y,E,M,S,v,L,b,w,U,D,I,O;Fp||lp(),this.styles=this.styles||yx(e),O=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(li[M]&&ux(M,t,i,s,e,a)))){if(y=typeof p,E=Tc[M],y==="function"&&(p=p.call(i,s,e,a),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=cl(p)),E)E(this,e,M,p,i)&&(I=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",ls.lastIndex=0,ls.test(d)||(S=Rn(d),v=Rn(p)),v?S!==v&&(d=hs(e,M,d,v)+v):S&&(p+=S),this.add(c,"setProperty",d,p,s,a,0,0,M),u.push(M),O.push(M,0,c[M]);else if(y!=="undefined"){if(h&&M in h?(d=typeof h[M]=="function"?h[M].call(i,s,e,a):h[M],_n(d)&&~d.indexOf("random(")&&(d=cl(d)),Rn(d+"")||d==="auto"||(d+=hi.units[M]||Rn(yr(e,M))||""),(d+"").charAt(1)==="="&&(d=yr(e,M))):d=yr(e,M),g=parseFloat(d),L=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),L&&(p=p.substr(2)),_=parseFloat(p),M in Zi&&(M==="autoAlpha"&&(g===1&&yr(e,"visibility")==="hidden"&&_&&(g=0),O.push("visibility",0,c.visibility),rs(this,c,"visibility",g?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=Zi[M],~M.indexOf(",")&&(M=M.split(",")[0]))),b=M in Cr,b){if(this.styles.save(M),w||(U=e._gsap,U.renderTransform&&!t.parseTransform||pl(e,t.parseTransform),D=t.smoothOrigin!==!1&&U.smooth,w=this._pt=new Qn(this._pt,c,jt,0,1,U.renderTransform,U,0,-1),w.dep=1),M==="scale")this._pt=new Qn(this._pt,U,"scaleY",U.scaleY,(L?qo(U.scaleY,L+_):_)-U.scaleY||0,op),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){O.push(Jn,0,c[Jn]),p=UC(p),U.svg?up(e,p,0,D,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==U.zOrigin&&rs(this,U,"zOrigin",U.zOrigin,v),rs(this,c,M,wc(d),wc(p)));continue}else if(M==="svgOrigin"){up(e,p,1,D,0,this);continue}else if(M in Tx){kC(this,U,M,g,L?qo(g,L+p):p);continue}else if(M==="smoothOrigin"){rs(this,U,"smooth",U.smooth,p);continue}else if(M==="force3D"){U[M]=p;continue}else if(M==="transform"){zC(this,p,e);continue}}else M in c||(M=la(M)||M);if(b||(_||_===0)&&(g||g===0)&&!yC.test(p)&&M in c)S=(d+"").substr((g+"").length),_||(_=0),v=Rn(p)||(M in hi.units?hi.units[M]:S),S!==v&&(g=hs(e,M,d,v)),this._pt=new Qn(this._pt,b?U:c,M,g,(L?qo(g,L+_):_)-g,!b&&(v==="px"||M==="zIndex")&&t.autoRound!==!1?EC:op),this._pt.u=v||0,S!==v&&v!=="%"&&(this._pt.b=d,this._pt.r=MC);else if(M in c)IC.call(this,e,M,d,L?L+p:p);else if(M in e)this.add(e,M,d||e[M],L?L+p:p,s,a);else if(M!=="parseTransform"){Cp(M,p);continue}b||(M in c?O.push(M,0,c[M]):O.push(M,1,d||e[M])),u.push(M)}}I&&mx(this)},render:function(e,t){if(t.tween._time||!Op())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:yr,aliases:Zi,getSetter:function(e,t,i){var s=Zi[t];return s&&s.indexOf(",")<0&&(t=s),t in Cr&&t!==Jn&&(e._gsap.x||yr(e,"x"))?i&&A0===i?t==="scale"?CC:AC:(A0=i||{})&&(t==="scale"?RC:PC):e.style&&!Tp(e.style[t])?TC:~t.indexOf("-")?wC:Up(e,t)},core:{_removeProperty:Js,_getMatrix:zp}};ei.utils.checkPrefix=la;ei.core.getStyleSaver=yx;(function(o,e,t,i){var s=Zn(o+","+e+","+t,function(a){Cr[a]=1});Zn(e,function(a){hi.units[a]="deg",Tx[a]=1}),Zi[s[13]]=o+","+e,Zn(i,function(a){var u=a.split(":");Zi[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){hi.units[o]="px"});ei.registerPlugin(Cx);var nn=ei.registerPlugin(Cx)||ei;nn.core.Tween;const BC=/^[og]\s*(.+)?/,VC=/^mtllib /,HC=/^usemtl /,GC=/^usemap /,U0=/\s+/,N0=new q,td=new q,F0=new q,O0=new q,Si=new q,ec=new ot;function WC(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const u=this._finalize(!1);u&&(u.inherited||u.groupCount<=0)&&this.materials.splice(u.index,1);const c={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:u!==void 0?u.smooth:this.smooth,groupStart:u!==void 0?u.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const d={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let u=this.materials.length-1;u>=0;u--)this.materials[u].groupCount<=0&&this.materials.splice(u,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,a=this.object.geometry.normals;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,a=this.object.geometry.normals;N0.fromArray(s,e),td.fromArray(s,t),F0.fromArray(s,i),Si.subVectors(F0,td),O0.subVectors(N0,td),Si.cross(O0),Si.normalize(),a.push(Si.x,Si.y,Si.z),a.push(Si.x,Si.y,Si.z),a.push(Si.x,Si.y,Si.z)},addColor:function(e,t,i){const s=this.colors,a=this.object.geometry.colors;s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&a.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[e+0],s[e+1]),a.push(s[t+0],s[t+1]),a.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,a,u,c,h,d){const p=this.vertices.length;let _=this.parseVertexIndex(e,p),g=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(_,g,y),this.addColor(_,g,y),c!==void 0&&c!==""){const E=this.normals.length;_=this.parseNormalIndex(c,E),g=this.parseNormalIndex(h,E),y=this.parseNormalIndex(d,E),this.addNormal(_,g,y)}else this.addFaceNormal(_,g,y);if(s!==void 0&&s!==""){const E=this.uvs.length;_=this.parseUVIndex(s,E),g=this.parseUVIndex(a,E),y=this.parseUVIndex(u,E),this.addUV(_,g,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const a=this.parseVertexIndex(e[i],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let a=0,u=e.length;a<u;a++)this.addVertexLine(this.parseVertexIndex(e[a],i));for(let a=0,u=t.length;a<u;a++)this.addUVLine(this.parseUVIndex(t[a],s))}};return o.startObject("",!1),o}class XC extends Sp{constructor(e){super(e),this.materials=null}load(e,t,i,s){const a=this,u=new OM(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){try{t(a.parse(c))}catch(h){s?s(h):console.error(h),a.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new WC;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let c=0,h=i.length;c<h;c++){const d=i[c].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const _=d.split(U0);switch(_[0]){case"v":t.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(ec.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),ai),t.colors.push(ec.r,ec.g,ec.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":t.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(p==="f"){const g=d.slice(1).trim().split(U0),y=[];for(let M=0,S=g.length;M<S;M++){const v=g[M];if(v.length>0){const L=v.split("/");y.push(L)}}const E=y[0];for(let M=1,S=y.length-1;M<S;M++){const v=y[M],L=y[M+1];t.addFace(E[0],v[0],L[0],E[1],v[1],L[1],E[2],v[2],L[2])}}else if(p==="l"){const _=d.substring(1).trim().split(" ");let g=[];const y=[];if(d.indexOf("/")===-1)g=_;else for(let E=0,M=_.length;E<M;E++){const S=_[E].split("/");S[0]!==""&&g.push(S[0]),S[1]!==""&&y.push(S[1])}t.addLineGeometry(g,y)}else if(p==="p"){const g=d.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((s=BC.exec(d))!==null){const _=(" "+s[0].slice(1).trim()).slice(1);t.startObject(_)}else if(HC.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(VC.test(d))t.materialLibraries.push(d.substring(7).trim());else if(GC.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=d.split(" "),s.length>1){const g=s[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const _=t.object.currentMaterial();_&&(_.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const a=new Ja;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let c=0,h=t.objects.length;c<h;c++){const d=t.objects[c],p=d.geometry,_=d.materials,g=p.type==="Line",y=p.type==="Points";let E=!1;if(p.vertices.length===0)continue;const M=new Vi;M.setAttribute("position",new kn(p.vertices,3)),p.normals.length>0&&M.setAttribute("normal",new kn(p.normals,3)),p.colors.length>0&&(E=!0,M.setAttribute("color",new kn(p.colors,3))),p.hasUVIndices===!0&&M.setAttribute("uv",new kn(p.uvs,2));const S=[];for(let L=0,b=_.length;L<b;L++){const w=_[L],U=w.name+"_"+w.smooth+"_"+E;let D=t.materials[U];if(this.materials!==null){if(D=this.materials.create(w.name),g&&D&&!(D instanceof uc)){const I=new uc;er.prototype.copy.call(I,D),I.color.copy(D.color),D=I}else if(y&&D&&!(D instanceof Qa)){const I=new Qa({size:10,sizeAttenuation:!1});er.prototype.copy.call(I,D),I.color.copy(D.color),I.map=D.map,D=I}}D===void 0&&(g?D=new uc:y?D=new Qa({size:1,sizeAttenuation:!1}):D=new LM,D.name=w.name,D.flatShading=!w.smooth,D.vertexColors=E,t.materials[U]=D),S.push(D)}let v;if(S.length>1){for(let L=0,b=_.length;L<b;L++){const w=_[L];M.addGroup(w.groupStart,w.groupCount,L)}g?v=new Bg(M,S):y?v=new Fh(M,S):v=new ki(M,S)}else g?v=new Bg(M,S[0]):y?v=new Fh(M,S[0]):v=new ki(M,S[0]);v.name=d.name,a.add(v)}else if(t.vertices.length>0){const c=new Qa({size:1,sizeAttenuation:!1}),h=new Vi;h.setAttribute("position",new kn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new kn(t.colors,3)),c.vertexColors=!0);const d=new Fh(h,c);a.add(d)}return a}}const k0={clamp:(o,e,t)=>Math.min(Math.max(o,e),t),map:(o,e,t,i,s)=>(o-e)/(t-e)*(s-i)+i,lerp:(o,e,t)=>o*(1-t)+e*t};var jC=class{constructor(){this.mouseX=0,this.mouseY=0,this.pointX=0,this.pointY=0,this.planeWidth=-Math.PI/2,this.planeHeight=Math.PI/2,this.rotation=new q(0,0,0)}lookToPoint(o){this.mouseX=o.clientX,this.mouseY=o.clientY,this.pointX=k0.map(this.mouseX,0,window.innerWidth,-this.planeWidth/2,this.planeWidth/2),this.pointY=k0.map(this.mouseY,0,window.innerHeight,-this.planeHeight/2,this.planeHeight/2),this.rotation.set(this.pointX,this.pointY,0)}};const Rx=window.innerWidth,Px=window.innerHeight,Bp=new wA({antialias:!0});Bp.setSize(Rx,Px);document.body.appendChild(Bp.domElement);const YC=60,qC=Rx/Px,$C=.1,KC=10,bx=new ui(YC,qC,$C,KC);bx.position.z=4;const Dc=new wM;var z0;const ZC=new XC;ZC.load("JaceWeyant-Website/models/icosWireframe_1.obj",o=>{z0=new bM({color:16776951,roughness:.2,metalness:.8,emissive:0}),o.traverse(function(t){t.isMesh&&(t.material=z0)}),o.position.y=-.2,nn.to(o.rotation,{y:3*Math.PI,duration:8,delay:0,ease:"power2.inOut",repeat:0}),nn.to(o.rotation,{y:"+=2 * Math.PI",duration:24,delay:8,ease:"sine.inOut",yoyo:!0,repeat:-1}),nn.fromTo(o.scale,{x:0,y:0,z:0},{x:2,y:2,z:2,duration:2.4,delay:2.4,ease:"power3.inOut",repeat:0}),Dc.add(o);var e=new jC;window.addEventListener("mousemove",t=>{e.lookToPoint(t),o.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z)})},o=>{console.log(o.loaded/o.total*100+"% loaded")},o=>{console.error("An error occured: "+o)});const Vp=new mn;Dc.add(Vp);nn.to(Vp.rotation,{y:2*Math.PI,duration:6,ease:"none",repeat:0});const fa=new Ev({color:13916696,intensity:10,decay:.3,distance:3});fa.intensity=0;fa.decay=1.4;fa.position.set(1.2,1.6,8);Vp.add(fa);nn.fromTo(fa,{intensity:0},{intensity:1,duration:10,delay:3,ease:"ease-in",repeat:0});const Hp=new Ev({color:13916696,intensity:1});Hp.intensity=1;Hp.decay=1.4;fa.position.set(-2,0,1);Dc.add(Hp);const QC=new kM({color:16777215,intensity:10});QC.intensity=2.5;function Lx(o=0){requestAnimationFrame(Lx),Bp.render(Dc,bx)}Lx();var nd={exports:{}},Za={},id={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function JC(){if(B0)return ft;B0=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(k,ee,Le){this.props=k,this.context=ee,this.refs=M,this.updater=Le||y}S.prototype.isReactComponent={},S.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(k,ee,Le){this.props=k,this.context=ee,this.refs=M,this.updater=Le||y}var b=L.prototype=new v;b.constructor=L,E(b,S.prototype),b.isPureReactComponent=!0;var w=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function O(k,ee,Le){var K,fe={},Me=null,ve=null;if(ee!=null)for(K in ee.ref!==void 0&&(ve=ee.ref),ee.key!==void 0&&(Me=""+ee.key),ee)U.call(ee,K)&&!I.hasOwnProperty(K)&&(fe[K]=ee[K]);var Te=arguments.length-2;if(Te===1)fe.children=Le;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];fe.children=Ue}if(k&&k.defaultProps)for(K in Te=k.defaultProps,Te)fe[K]===void 0&&(fe[K]=Te[K]);return{$$typeof:o,type:k,key:Me,ref:ve,props:fe,_owner:D.current}}function A(k,ee){return{$$typeof:o,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function z(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Le){return ee[Le]})}var J=/\/+/g;function Y(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):ee.toString(36)}function le(k,ee,Le,K,fe){var Me=typeof k;(Me==="undefined"||Me==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case o:case e:ve=!0}}if(ve)return ve=k,fe=fe(ve),k=K===""?"."+Y(ve,0):K,w(fe)?(Le="",k!=null&&(Le=k.replace(J,"$&/")+"/"),le(fe,ee,Le,"",function(Ze){return Ze})):fe!=null&&(R(fe)&&(fe=A(fe,Le+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(J,"$&/")+"/")+k)),ee.push(fe)),1;if(ve=0,K=K===""?".":K+":",w(k))for(var Te=0;Te<k.length;Te++){Me=k[Te];var Ue=K+Y(Me,Te);ve+=le(Me,ee,Le,Ue,fe)}else if(Ue=g(k),typeof Ue=="function")for(k=Ue.call(k),Te=0;!(Me=k.next()).done;)Me=Me.value,Ue=K+Y(Me,Te++),ve+=le(Me,ee,Le,Ue,fe);else if(Me==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ve}function ue(k,ee,Le){if(k==null)return k;var K=[],fe=0;return le(k,K,"","",function(Me){return ee.call(Le,Me,fe++)}),K}function ne(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Le){(k._status===0||k._status===-1)&&(k._status=1,k._result=Le)},function(Le){(k._status===0||k._status===-1)&&(k._status=2,k._result=Le)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var se={current:null},B={transition:null},ce={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:B,ReactCurrentOwner:D};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ue,forEach:function(k,ee,Le){ue(k,function(){ee.apply(this,arguments)},Le)},count:function(k){var ee=0;return ue(k,function(){ee++}),ee},toArray:function(k){return ue(k,function(ee){return ee})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ft.Component=S,ft.Fragment=t,ft.Profiler=s,ft.PureComponent=L,ft.StrictMode=i,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ft.act=oe,ft.cloneElement=function(k,ee,Le){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var K=E({},k.props),fe=k.key,Me=k.ref,ve=k._owner;if(ee!=null){if(ee.ref!==void 0&&(Me=ee.ref,ve=D.current),ee.key!==void 0&&(fe=""+ee.key),k.type&&k.type.defaultProps)var Te=k.type.defaultProps;for(Ue in ee)U.call(ee,Ue)&&!I.hasOwnProperty(Ue)&&(K[Ue]=ee[Ue]===void 0&&Te!==void 0?Te[Ue]:ee[Ue])}var Ue=arguments.length-2;if(Ue===1)K.children=Le;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];K.children=Te}return{$$typeof:o,type:k.type,key:fe,ref:Me,props:K,_owner:ve}},ft.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},ft.createElement=O,ft.createFactory=function(k){var ee=O.bind(null,k);return ee.type=k,ee},ft.createRef=function(){return{current:null}},ft.forwardRef=function(k){return{$$typeof:c,render:k}},ft.isValidElement=R,ft.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:ne}},ft.memo=function(k,ee){return{$$typeof:d,type:k,compare:ee===void 0?null:ee}},ft.startTransition=function(k){var ee=B.transition;B.transition={};try{k()}finally{B.transition=ee}},ft.unstable_act=oe,ft.useCallback=function(k,ee){return se.current.useCallback(k,ee)},ft.useContext=function(k){return se.current.useContext(k)},ft.useDebugValue=function(){},ft.useDeferredValue=function(k){return se.current.useDeferredValue(k)},ft.useEffect=function(k,ee){return se.current.useEffect(k,ee)},ft.useId=function(){return se.current.useId()},ft.useImperativeHandle=function(k,ee,Le){return se.current.useImperativeHandle(k,ee,Le)},ft.useInsertionEffect=function(k,ee){return se.current.useInsertionEffect(k,ee)},ft.useLayoutEffect=function(k,ee){return se.current.useLayoutEffect(k,ee)},ft.useMemo=function(k,ee){return se.current.useMemo(k,ee)},ft.useReducer=function(k,ee,Le){return se.current.useReducer(k,ee,Le)},ft.useRef=function(k){return se.current.useRef(k)},ft.useState=function(k){return se.current.useState(k)},ft.useSyncExternalStore=function(k,ee,Le){return se.current.useSyncExternalStore(k,ee,Le)},ft.useTransition=function(){return se.current.useTransition()},ft.version="18.3.1",ft}var V0;function Gp(){return V0||(V0=1,id.exports=JC()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function eR(){if(H0)return Za;H0=1;var o=Gp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,d){var p,_={},g=null,y=null;d!==void 0&&(g=""+d),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!a.hasOwnProperty(p)&&(_[p]=h[p]);if(c&&c.defaultProps)for(p in h=c.defaultProps,h)_[p]===void 0&&(_[p]=h[p]);return{$$typeof:e,type:c,key:g,ref:y,props:_,_owner:s.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var G0;function tR(){return G0||(G0=1,nd.exports=eR()),nd.exports}var dn=tR(),ol=Gp(),tc={},rd={exports:{}},Yn={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function nR(){return W0||(W0=1,function(o){function e(B,ce){var oe=B.length;B.push(ce);e:for(;0<oe;){var k=oe-1>>>1,ee=B[k];if(0<s(ee,ce))B[k]=ce,B[oe]=ee,oe=k;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ce=B[0],oe=B.pop();if(oe!==ce){B[0]=oe;e:for(var k=0,ee=B.length,Le=ee>>>1;k<Le;){var K=2*(k+1)-1,fe=B[K],Me=K+1,ve=B[Me];if(0>s(fe,oe))Me<ee&&0>s(ve,fe)?(B[k]=ve,B[Me]=oe,k=Me):(B[k]=fe,B[K]=oe,k=K);else if(Me<ee&&0>s(ve,oe))B[k]=ve,B[Me]=oe,k=Me;else break e}}return ce}function s(B,ce){var oe=B.sortIndex-ce.sortIndex;return oe!==0?oe:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var h=[],d=[],p=1,_=null,g=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ce=t(d);ce!==null;){if(ce.callback===null)i(d);else if(ce.startTime<=B)i(d),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(d)}}function w(B){if(M=!1,b(B),!E)if(t(h)!==null)E=!0,ne(U);else{var ce=t(d);ce!==null&&se(w,ce.startTime-B)}}function U(B,ce){E=!1,M&&(M=!1,v(O),O=-1),y=!0;var oe=g;try{for(b(ce),_=t(h);_!==null&&(!(_.expirationTime>ce)||B&&!z());){var k=_.callback;if(typeof k=="function"){_.callback=null,g=_.priorityLevel;var ee=k(_.expirationTime<=ce);ce=o.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(h)&&i(h),b(ce)}else i(h);_=t(h)}if(_!==null)var Le=!0;else{var K=t(d);K!==null&&se(w,K.startTime-ce),Le=!1}return Le}finally{_=null,g=oe,y=!1}}var D=!1,I=null,O=-1,A=5,R=-1;function z(){return!(o.unstable_now()-R<A)}function J(){if(I!==null){var B=o.unstable_now();R=B;var ce=!0;try{ce=I(!0,B)}finally{ce?Y():(D=!1,I=null)}}else D=!1}var Y;if(typeof L=="function")Y=function(){L(J)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=J,Y=function(){ue.postMessage(null)}}else Y=function(){S(J,0)};function ne(B){I=B,D||(D=!0,Y())}function se(B,ce){O=S(function(){B(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){E||y||(E=!0,ne(U))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var oe=g;g=ce;try{return B()}finally{g=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=g;g=B;try{return ce()}finally{g=oe}},o.unstable_scheduleCallback=function(B,ce,oe){var k=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,B){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=oe+ee,B={id:p++,callback:ce,priorityLevel:B,startTime:oe,expirationTime:ee,sortIndex:-1},oe>k?(B.sortIndex=oe,e(d,B),t(h)===null&&B===t(d)&&(M?(v(O),O=-1):M=!0,se(w,oe-k))):(B.sortIndex=ee,e(h,B),E||y||(E=!0,ne(U))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ce=g;return function(){var oe=g;g=ce;try{return B.apply(this,arguments)}finally{g=oe}}}}(od)),od}var X0;function iR(){return X0||(X0=1,sd.exports=nR()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function rR(){if(j0)return Yn;j0=1;var o=Gp(),e=iR();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(n){return h.call(_,n)?!0:h.call(p,n)?!1:d.test(n)?_[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,x,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,L);S[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,L);S[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,L);S[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,r,l,f){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var Le=!1;function K(n,r){if(!n||Le)return"";Le=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var f=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){f=te}n.call(r.prototype)}else{try{throw Error()}catch(te){f=te}n()}}catch(te){if(te&&f&&typeof te.stack=="string"){for(var m=te.stack.split(`
`),x=f.stack.split(`
`),T=m.length-1,F=x.length-1;1<=T&&0<=F&&m[T]!==x[F];)F--;for(;1<=T&&0<=F;T--,F--)if(m[T]!==x[F]){if(T!==1||F!==1)do if(T--,F--,0>F||m[T]!==x[F]){var V=`
`+m[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=F);break}}}finally{Le=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function fe(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=K(n.type,!1),n;case 11:return n=K(n.type.render,!1),n;case 1:return n=K(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case D:return"Portal";case A:return"Profiler";case O:return"StrictMode";case Y:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case J:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case ne:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Ue(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,x.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Ze(n))}function pt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ue(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function It(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,r){var l=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ln(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&b(n,"checked",r,!1)}function ut(n,r){ht(n,r);var l=Te(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ct(n,r.type,l):r.hasOwnProperty("defaultValue")&&Ct(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function je(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Ct(n,r,l){(r!=="number"||It(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var We=Array.isArray;function N(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function C(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(We(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),f=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Ne=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function lt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function qe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function Qe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=qe(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(n,r){if(r){if(ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function nt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,ae=null,de=null;function be(n){if(n=Ra(n)){if(typeof Ae!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Gl(r),Ae(n.stateNode,n.type,r))}}function Pe(n){ae?de?de.push(n):de=[n]:ae=n}function it(){if(ae){var n=ae,r=de;if(de=ae=null,be(n),r)for(n=0;n<r.length;n++)be(r[n])}}function Ft(n,r){return n(r)}function rn(){}var xt=!1;function Bn(n,r,l){if(xt)return n(r,l);xt=!0;try{return Ft(n,r,l)}finally{xt=!1,(ae!==null||de!==null)&&(rn(),it())}}function Dn(n,r){var l=n.stateNode;if(l===null)return null;var f=Gl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var to=!1;if(c)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){to=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{to=!1}function nr(n,r,l,f,m,x,T,F,V){var te=Array.prototype.slice.call(arguments,3);try{r.apply(l,te)}catch(ge){this.onError(ge)}}var ir=!1,ps=null,ms=!1,Pr=null,Ml={onError:function(n){ir=!0,ps=n}};function no(n,r,l,f,m,x,T,F,V){ir=!1,ps=null,nr.apply(Ml,arguments)}function El(n,r,l,f,m,x,T,F,V){if(no.apply(this,arguments),ir){if(ir){var te=ps;ir=!1,ps=null}else throw Error(t(198));ms||(ms=!0,Pr=te)}}function Hi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Tl(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wl(n){if(Hi(n)!==n)throw Error(t(188))}function Uc(n){var r=n.alternate;if(!r){if(r=Hi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return wl(m),n;if(x===f)return wl(m),r;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var T=!1,F=m.child;F;){if(F===l){T=!0,l=m,f=x;break}if(F===f){T=!0,f=m,l=x;break}F=F.sibling}if(!T){for(F=x.child;F;){if(F===l){T=!0,l=x,f=m;break}if(F===f){T=!0,f=x,l=m;break}F=F.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Al(n){return n=Uc(n),n!==null?Cl(n):null}function Cl(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Cl(n);if(r!==null)return r;n=n.sibling}return null}var P=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ie=e.unstable_shouldYield,re=e.unstable_requestPaint,G=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,rt=null;function Mt(n){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Xe,n,void 0,(n.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Ye,Bt=Math.log,vt=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Bt(n)/vt|0)|0}var Yt=64,_t=4194304;function gn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ai(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,x=n.pingedLanes,T=l&268435455;if(T!==0){var F=T&~m;F!==0?f=gn(F):(x&=T,x!==0&&(f=gn(x)))}else T=l&~m,T!==0?f=gn(T):x!==0&&(f=gn(x));if(f===0)return 0;if(r!==0&&r!==f&&!(r&m)&&(m=f&-f,x=r&-r,m>=x||m===16&&(x&4194240)!==0))return r;if(f&4&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Et(r),m=1<<l,f|=n[l],r&=~m;return f}function In(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _s(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-Et(x),F=1<<T,V=m[T];V===-1?(!(F&l)||F&f)&&(m[T]=In(F,r)):V<=r&&(n.expiredLanes|=F),x&=~F}}function Pt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Un(){var n=Yt;return Yt<<=1,!(Yt&4194240)&&(Yt=64),n}function yn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Kt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Et(r),n[r]=l}function Sn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Et(l),x=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~x}}function gs(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Et(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var dt=0;function Wp(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Xp,Nc,jp,Yp,qp,Fc=!1,Rl=[],br=null,Lr=null,Dr=null,ha=new Map,da=new Map,Ir=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(n,r){switch(n){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ha.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(r.pointerId)}}function pa(n,r,l,f,m,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},r!==null&&(r=Ra(r),r!==null&&Nc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Nx(n,r,l,f,m){switch(r){case"focusin":return br=pa(br,n,r,l,f,m),!0;case"dragenter":return Lr=pa(Lr,n,r,l,f,m),!0;case"mouseover":return Dr=pa(Dr,n,r,l,f,m),!0;case"pointerover":var x=m.pointerId;return ha.set(x,pa(ha.get(x)||null,n,r,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,da.set(x,pa(da.get(x)||null,n,r,l,f,m)),!0}return!1}function Kp(n){var r=vs(n.target);if(r!==null){var l=Hi(r);if(l!==null){if(r=l.tag,r===13){if(r=Tl(l),r!==null){n.blockedOn=r,qp(n.priority,function(){jp(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=kc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);At=f,l.target.dispatchEvent(f),At=null}else return r=Ra(l),r!==null&&Nc(r),n.blockedOn=l,!1;r.shift()}return!0}function Zp(n,r,l){Pl(n)&&l.delete(r)}function Fx(){Fc=!1,br!==null&&Pl(br)&&(br=null),Lr!==null&&Pl(Lr)&&(Lr=null),Dr!==null&&Pl(Dr)&&(Dr=null),ha.forEach(Zp),da.forEach(Zp)}function ma(n,r){n.blockedOn===r&&(n.blockedOn=null,Fc||(Fc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fx)))}function _a(n){function r(m){return ma(m,n)}if(0<Rl.length){ma(Rl[0],n);for(var l=1;l<Rl.length;l++){var f=Rl[l];f.blockedOn===n&&(f.blockedOn=null)}}for(br!==null&&ma(br,n),Lr!==null&&ma(Lr,n),Dr!==null&&ma(Dr,n),ha.forEach(r),da.forEach(r),l=0;l<Ir.length;l++)f=Ir[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)Kp(l),l.blockedOn===null&&Ir.shift()}var io=w.ReactCurrentBatchConfig,bl=!0;function Ox(n,r,l,f){var m=dt,x=io.transition;io.transition=null;try{dt=1,Oc(n,r,l,f)}finally{dt=m,io.transition=x}}function kx(n,r,l,f){var m=dt,x=io.transition;io.transition=null;try{dt=4,Oc(n,r,l,f)}finally{dt=m,io.transition=x}}function Oc(n,r,l,f){if(bl){var m=kc(n,r,l,f);if(m===null)tf(n,r,f,Ll,l),$p(n,f);else if(Nx(m,n,r,l,f))f.stopPropagation();else if($p(n,f),r&4&&-1<Ux.indexOf(n)){for(;m!==null;){var x=Ra(m);if(x!==null&&Xp(x),x=kc(n,r,l,f),x===null&&tf(n,r,f,Ll,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else tf(n,r,f,null,l)}}var Ll=null;function kc(n,r,l,f){if(Ll=null,n=X(f),n=vs(n),n!==null)if(r=Hi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Tl(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ll=n,null}function Qp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ye()){case Ce:return 1;case Ie:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var Ur=null,zc=null,Dl=null;function Jp(){if(Dl)return Dl;var n,r=zc,l=r.length,f,m="value"in Ur?Ur.value:Ur.textContent,x=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===m[x-f];f++);return Dl=m.slice(n,1<f?1-f:void 0)}function Il(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ul(){return!0}function em(){return!1}function ti(n){function r(l,f,m,x,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ul:em,this.isPropagationStopped=em,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),r}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bc=ti(ro),ga=oe({},ro,{view:0,detail:0}),zx=ti(ga),Vc,Hc,va,Nl=oe({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(Vc=n.screenX-va.screenX,Hc=n.screenY-va.screenY):Hc=Vc=0,va=n),Vc)},movementY:function(n){return"movementY"in n?n.movementY:Hc}}),tm=ti(Nl),Bx=oe({},Nl,{dataTransfer:0}),Vx=ti(Bx),Hx=oe({},ga,{relatedTarget:0}),Gc=ti(Hx),Gx=oe({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=ti(Gx),Xx=oe({},ro,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jx=ti(Xx),Yx=oe({},ro,{data:0}),nm=ti(Yx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Kx[n])?!!r[n]:!1}function Wc(){return Zx}var Qx=oe({},ga,{key:function(n){if(n.key){var r=qx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$x[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(n){return n.type==="keypress"?Il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jx=ti(Qx),ey=oe({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=ti(ey),ty=oe({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),ny=ti(ty),iy=oe({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),ry=ti(iy),sy=oe({},Nl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=ti(sy),ay=[9,13,27,32],Xc=c&&"CompositionEvent"in window,xa=null;c&&"documentMode"in document&&(xa=document.documentMode);var ly=c&&"TextEvent"in window&&!xa,rm=c&&(!Xc||xa&&8<xa&&11>=xa),sm=" ",om=!1;function am(n,r){switch(n){case"keyup":return ay.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var so=!1;function uy(n,r){switch(n){case"compositionend":return lm(r);case"keypress":return r.which!==32?null:(om=!0,sm);case"textInput":return n=r.data,n===sm&&om?null:n;default:return null}}function cy(n,r){if(so)return n==="compositionend"||!Xc&&am(n,r)?(n=Jp(),Dl=zc=Ur=null,so=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return rm&&r.locale!=="ko"?null:r.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!fy[n.type]:r==="textarea"}function cm(n,r,l,f){Pe(f),r=Bl(r,"onChange"),0<r.length&&(l=new Bc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var ya=null,Sa=null;function hy(n){Rm(n,0)}function Fl(n){var r=co(n);if(pt(r))return n}function dy(n,r){if(n==="change")return r}var fm=!1;if(c){var jc;if(c){var Yc="oninput"in document;if(!Yc){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Yc=typeof hm.oninput=="function"}jc=Yc}else jc=!1;fm=jc&&(!document.documentMode||9<document.documentMode)}function dm(){ya&&(ya.detachEvent("onpropertychange",pm),Sa=ya=null)}function pm(n){if(n.propertyName==="value"&&Fl(Sa)){var r=[];cm(r,Sa,n,X(n)),Bn(hy,r)}}function py(n,r,l){n==="focusin"?(dm(),ya=r,Sa=l,ya.attachEvent("onpropertychange",pm)):n==="focusout"&&dm()}function my(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(Sa)}function _y(n,r){if(n==="click")return Fl(r)}function gy(n,r){if(n==="input"||n==="change")return Fl(r)}function vy(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ci=typeof Object.is=="function"?Object.is:vy;function Ma(n,r){if(Ci(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!h.call(r,m)||!Ci(n[m],r[m]))return!1}return!0}function mm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _m(n,r){var l=mm(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=mm(l)}}function gm(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?gm(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function vm(){for(var n=window,r=It();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=It(n.document)}return r}function qc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function xy(n){var r=vm(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&gm(l.ownerDocument.documentElement,l)){if(f!==null&&qc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!n.extend&&x>f&&(m=f,f=x,x=m),m=_m(l,x);var T=_m(l,f);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),x>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yy=c&&"documentMode"in document&&11>=document.documentMode,oo=null,$c=null,Ea=null,Kc=!1;function xm(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Kc||oo==null||oo!==It(f)||(f=oo,"selectionStart"in f&&qc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ea&&Ma(Ea,f)||(Ea=f,f=Bl($c,"onSelect"),0<f.length&&(r=new Bc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=oo)))}function Ol(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ao={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Zc={},ym={};c&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function kl(n){if(Zc[n])return Zc[n];if(!ao[n])return n;var r=ao[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in ym)return Zc[n]=r[l];return n}var Sm=kl("animationend"),Mm=kl("animationiteration"),Em=kl("animationstart"),Tm=kl("transitionend"),wm=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,r){wm.set(n,r),a(r,[n])}for(var Qc=0;Qc<Am.length;Qc++){var Jc=Am[Qc],Sy=Jc.toLowerCase(),My=Jc[0].toUpperCase()+Jc.slice(1);Nr(Sy,"on"+My)}Nr(Sm,"onAnimationEnd"),Nr(Mm,"onAnimationIteration"),Nr(Em,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Tm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Cm(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,El(f,r,void 0,n),n.currentTarget=null}function Rm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var x=void 0;if(r)for(var T=f.length-1;0<=T;T--){var F=f[T],V=F.instance,te=F.currentTarget;if(F=F.listener,V!==x&&m.isPropagationStopped())break e;Cm(m,F,te),x=V}else for(T=0;T<f.length;T++){if(F=f[T],V=F.instance,te=F.currentTarget,F=F.listener,V!==x&&m.isPropagationStopped())break e;Cm(m,F,te),x=V}}}if(ms)throw n=Pr,ms=!1,Pr=null,n}function Ot(n,r){var l=r[lf];l===void 0&&(l=r[lf]=new Set);var f=n+"__bubble";l.has(f)||(Pm(r,n,2,!1),l.add(f))}function ef(n,r,l){var f=0;r&&(f|=4),Pm(l,n,f,r)}var zl="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[zl]){n[zl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Ey.has(l)||ef(l,!1,n),ef(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[zl]||(r[zl]=!0,ef("selectionchange",!1,r))}}function Pm(n,r,l,f){switch(Qp(r)){case 1:var m=Ox;break;case 4:m=kx;break;default:m=Oc}l=m.bind(null,r,l,n),m=void 0,!to||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function tf(n,r,l,f,m){var x=f;if(!(r&1)&&!(r&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;T=T.return}for(;F!==null;){if(T=vs(F),T===null)return;if(V=T.tag,V===5||V===6){f=x=T;continue e}F=F.parentNode}}f=f.return}Bn(function(){var te=x,ge=X(l),xe=[];e:{var me=wm.get(n);if(me!==void 0){var De=Bc,Be=n;switch(n){case"keypress":if(Il(l)===0)break e;case"keydown":case"keyup":De=Jx;break;case"focusin":Be="focus",De=Gc;break;case"focusout":Be="blur",De=Gc;break;case"beforeblur":case"afterblur":De=Gc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=ny;break;case Sm:case Mm:case Em:De=Wx;break;case Tm:De=ry;break;case"scroll":De=zx;break;case"wheel":De=oy;break;case"copy":case"cut":case"paste":De=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=im}var Ve=(r&4)!==0,Zt=!Ve&&n==="scroll",$=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var W=te,Z;W!==null;){Z=W;var Ee=Z.stateNode;if(Z.tag===5&&Ee!==null&&(Z=Ee,$!==null&&(Ee=Dn(W,$),Ee!=null&&Ve.push(Aa(W,Ee,Z)))),Zt)break;W=W.return}0<Ve.length&&(me=new De(me,Be,null,l,ge),xe.push({event:me,listeners:Ve}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",me&&l!==At&&(Be=l.relatedTarget||l.fromElement)&&(vs(Be)||Be[rr]))break e;if((De||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,De?(Be=l.relatedTarget||l.toElement,De=te,Be=Be?vs(Be):null,Be!==null&&(Zt=Hi(Be),Be!==Zt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=te),De!==Be)){if(Ve=tm,Ee="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=im,Ee="onPointerLeave",$="onPointerEnter",W="pointer"),Zt=De==null?me:co(De),Z=Be==null?me:co(Be),me=new Ve(Ee,W+"leave",De,l,ge),me.target=Zt,me.relatedTarget=Z,Ee=null,vs(ge)===te&&(Ve=new Ve($,W+"enter",Be,l,ge),Ve.target=Z,Ve.relatedTarget=Zt,Ee=Ve),Zt=Ee,De&&Be)t:{for(Ve=De,$=Be,W=0,Z=Ve;Z;Z=lo(Z))W++;for(Z=0,Ee=$;Ee;Ee=lo(Ee))Z++;for(;0<W-Z;)Ve=lo(Ve),W--;for(;0<Z-W;)$=lo($),Z--;for(;W--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=lo(Ve),$=lo($)}Ve=null}else Ve=null;De!==null&&bm(xe,me,De,Ve,!1),Be!==null&&Zt!==null&&bm(xe,Zt,Be,Ve,!0)}}e:{if(me=te?co(te):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Ge=dy;else if(um(me))if(fm)Ge=gy;else{Ge=my;var $e=py}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=_y);if(Ge&&(Ge=Ge(n,te))){cm(xe,Ge,l,ge);break e}$e&&$e(n,me,te),n==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&Ct(me,"number",me.value)}switch($e=te?co(te):window,n){case"focusin":(um($e)||$e.contentEditable==="true")&&(oo=$e,$c=te,Ea=null);break;case"focusout":Ea=$c=oo=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,xm(xe,l,ge);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":xm(xe,l,ge)}var Ke;if(Xc)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else so?am(n,l)&&(tt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(rm&&l.locale!=="ko"&&(so||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&so&&(Ke=Jp()):(Ur=ge,zc="value"in Ur?Ur.value:Ur.textContent,so=!0)),$e=Bl(te,tt),0<$e.length&&(tt=new nm(tt,n,null,l,ge),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=lm(l),Ke!==null&&(tt.data=Ke)))),(Ke=ly?uy(n,l):cy(n,l))&&(te=Bl(te,"onBeforeInput"),0<te.length&&(ge=new nm("onBeforeInput","beforeinput",null,l,ge),xe.push({event:ge,listeners:te}),ge.data=Ke))}Rm(xe,r)})}function Aa(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Bl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Dn(n,l),x!=null&&f.unshift(Aa(n,x,m)),x=Dn(n,r),x!=null&&f.push(Aa(n,x,m))),n=n.return}return f}function lo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bm(n,r,l,f,m){for(var x=r._reactName,T=[];l!==null&&l!==f;){var F=l,V=F.alternate,te=F.stateNode;if(V!==null&&V===f)break;F.tag===5&&te!==null&&(F=te,m?(V=Dn(l,x),V!=null&&T.unshift(Aa(l,V,F))):m||(V=Dn(l,x),V!=null&&T.push(Aa(l,V,F)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var Ty=/\r\n?/g,wy=/\u0000|\uFFFD/g;function Lm(n){return(typeof n=="string"?n:""+n).replace(Ty,`
`).replace(wy,"")}function Vl(n,r,l){if(r=Lm(r),Lm(n)!==r&&l)throw Error(t(425))}function Hl(){}var nf=null,rf=null;function sf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(n){return Dm.resolve(null).then(n).catch(Ry)}:of;function Ry(n){setTimeout(function(){throw n})}function af(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),_a(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);_a(r)}function Fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Im(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var uo=Math.random().toString(36).slice(2),Gi="__reactFiber$"+uo,Ca="__reactProps$"+uo,rr="__reactContainer$"+uo,lf="__reactEvents$"+uo,Py="__reactListeners$"+uo,by="__reactHandles$"+uo;function vs(n){var r=n[Gi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[rr]||l[Gi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Im(n);n!==null;){if(l=n[Gi])return l;n=Im(n)}return r}n=l,l=n.parentNode}return null}function Ra(n){return n=n[Gi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function co(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Gl(n){return n[Ca]||null}var uf=[],fo=-1;function Or(n){return{current:n}}function kt(n){0>fo||(n.current=uf[fo],uf[fo]=null,fo--)}function Ut(n,r){fo++,uf[fo]=n.current,n.current=r}var kr={},Mn=Or(kr),Vn=Or(!1),xs=kr;function ho(n,r){var l=n.type.contextTypes;if(!l)return kr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=r[x];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Hn(n){return n=n.childContextTypes,n!=null}function Wl(){kt(Vn),kt(Mn)}function Um(n,r,l){if(Mn.current!==kr)throw Error(t(168));Ut(Mn,r),Ut(Vn,l)}function Nm(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,ve(n)||"Unknown",m));return oe({},l,f)}function Xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,xs=Mn.current,Ut(Mn,n),Ut(Vn,Vn.current),!0}function Fm(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=Nm(n,r,xs),f.__reactInternalMemoizedMergedChildContext=n,kt(Vn),kt(Mn),Ut(Mn,n)):kt(Vn),Ut(Vn,l)}var sr=null,jl=!1,cf=!1;function Om(n){sr===null?sr=[n]:sr.push(n)}function Ly(n){jl=!0,Om(n)}function zr(){if(!cf&&sr!==null){cf=!0;var n=0,r=dt;try{var l=sr;for(dt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}sr=null,jl=!1}catch(m){throw sr!==null&&(sr=sr.slice(n+1)),P(Ce,zr),m}finally{dt=r,cf=!1}}return null}var po=[],mo=0,Yl=null,ql=0,pi=[],mi=0,ys=null,or=1,ar="";function Ss(n,r){po[mo++]=ql,po[mo++]=Yl,Yl=n,ql=r}function km(n,r,l){pi[mi++]=or,pi[mi++]=ar,pi[mi++]=ys,ys=n;var f=or;n=ar;var m=32-Et(f)-1;f&=~(1<<m),l+=1;var x=32-Et(r)+m;if(30<x){var T=m-m%5;x=(f&(1<<T)-1).toString(32),f>>=T,m-=T,or=1<<32-Et(r)+m|l<<m|f,ar=x+n}else or=1<<x|l<<m|f,ar=n}function ff(n){n.return!==null&&(Ss(n,1),km(n,1,0))}function hf(n){for(;n===Yl;)Yl=po[--mo],po[mo]=null,ql=po[--mo],po[mo]=null;for(;n===ys;)ys=pi[--mi],pi[mi]=null,ar=pi[--mi],pi[mi]=null,or=pi[--mi],pi[mi]=null}var ni=null,ii=null,Vt=!1,Ri=null;function zm(n,r){var l=xi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Bm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ni=n,ii=Fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ni=n,ii=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ys!==null?{id:or,overflow:ar}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=xi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ni=n,ii=null,!0):!1;default:return!1}}function df(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pf(n){if(Vt){var r=ii;if(r){var l=r;if(!Bm(n,r)){if(df(n))throw Error(t(418));r=Fr(l.nextSibling);var f=ni;r&&Bm(n,r)?zm(f,l):(n.flags=n.flags&-4097|2,Vt=!1,ni=n)}}else{if(df(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,ni=n}}}function Vm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function $l(n){if(n!==ni)return!1;if(!Vt)return Vm(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!sf(n.type,n.memoizedProps)),r&&(r=ii)){if(df(n))throw Hm(),Error(t(418));for(;r;)zm(n,r),r=Fr(r.nextSibling)}if(Vm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ii=Fr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ii=null}}else ii=ni?Fr(n.stateNode.nextSibling):null;return!0}function Hm(){for(var n=ii;n;)n=Fr(n.nextSibling)}function _o(){ii=ni=null,Vt=!1}function mf(n){Ri===null?Ri=[n]:Ri.push(n)}var Dy=w.ReactCurrentBatchConfig;function Pa(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(T){var F=m.refs;T===null?delete F[x]:F[x]=T},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Kl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Gm(n){var r=n._init;return r(n._payload)}function Wm(n){function r($,W){if(n){var Z=$.deletions;Z===null?($.deletions=[W],$.flags|=16):Z.push(W)}}function l($,W){if(!n)return null;for(;W!==null;)r($,W),W=W.sibling;return null}function f($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function m($,W){return $=Yr($,W),$.index=0,$.sibling=null,$}function x($,W,Z){return $.index=Z,n?(Z=$.alternate,Z!==null?(Z=Z.index,Z<W?($.flags|=2,W):Z):($.flags|=2,W)):($.flags|=1048576,W)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function F($,W,Z,Ee){return W===null||W.tag!==6?(W=oh(Z,$.mode,Ee),W.return=$,W):(W=m(W,Z),W.return=$,W)}function V($,W,Z,Ee){var Ge=Z.type;return Ge===I?ge($,W,Z.props.children,Ee,Z.key):W!==null&&(W.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ne&&Gm(Ge)===W.type)?(Ee=m(W,Z.props),Ee.ref=Pa($,W,Z),Ee.return=$,Ee):(Ee=yu(Z.type,Z.key,Z.props,null,$.mode,Ee),Ee.ref=Pa($,W,Z),Ee.return=$,Ee)}function te($,W,Z,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==Z.containerInfo||W.stateNode.implementation!==Z.implementation?(W=ah(Z,$.mode,Ee),W.return=$,W):(W=m(W,Z.children||[]),W.return=$,W)}function ge($,W,Z,Ee,Ge){return W===null||W.tag!==7?(W=Ps(Z,$.mode,Ee,Ge),W.return=$,W):(W=m(W,Z),W.return=$,W)}function xe($,W,Z){if(typeof W=="string"&&W!==""||typeof W=="number")return W=oh(""+W,$.mode,Z),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return Z=yu(W.type,W.key,W.props,null,$.mode,Z),Z.ref=Pa($,null,W),Z.return=$,Z;case D:return W=ah(W,$.mode,Z),W.return=$,W;case ne:var Ee=W._init;return xe($,Ee(W._payload),Z)}if(We(W)||ce(W))return W=Ps(W,$.mode,Z,null),W.return=$,W;Kl($,W)}return null}function me($,W,Z,Ee){var Ge=W!==null?W.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ge!==null?null:F($,W,""+Z,Ee);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case U:return Z.key===Ge?V($,W,Z,Ee):null;case D:return Z.key===Ge?te($,W,Z,Ee):null;case ne:return Ge=Z._init,me($,W,Ge(Z._payload),Ee)}if(We(Z)||ce(Z))return Ge!==null?null:ge($,W,Z,Ee,null);Kl($,Z)}return null}function De($,W,Z,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(Z)||null,F(W,$,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return $=$.get(Ee.key===null?Z:Ee.key)||null,V(W,$,Ee,Ge);case D:return $=$.get(Ee.key===null?Z:Ee.key)||null,te(W,$,Ee,Ge);case ne:var $e=Ee._init;return De($,W,Z,$e(Ee._payload),Ge)}if(We(Ee)||ce(Ee))return $=$.get(Z)||null,ge(W,$,Ee,Ge,null);Kl(W,Ee)}return null}function Be($,W,Z,Ee){for(var Ge=null,$e=null,Ke=W,tt=W=0,fn=null;Ke!==null&&tt<Z.length;tt++){Ke.index>tt?(fn=Ke,Ke=null):fn=Ke.sibling;var Tt=me($,Ke,Z[tt],Ee);if(Tt===null){Ke===null&&(Ke=fn);break}n&&Ke&&Tt.alternate===null&&r($,Ke),W=x(Tt,W,tt),$e===null?Ge=Tt:$e.sibling=Tt,$e=Tt,Ke=fn}if(tt===Z.length)return l($,Ke),Vt&&Ss($,tt),Ge;if(Ke===null){for(;tt<Z.length;tt++)Ke=xe($,Z[tt],Ee),Ke!==null&&(W=x(Ke,W,tt),$e===null?Ge=Ke:$e.sibling=Ke,$e=Ke);return Vt&&Ss($,tt),Ge}for(Ke=f($,Ke);tt<Z.length;tt++)fn=De(Ke,$,tt,Z[tt],Ee),fn!==null&&(n&&fn.alternate!==null&&Ke.delete(fn.key===null?tt:fn.key),W=x(fn,W,tt),$e===null?Ge=fn:$e.sibling=fn,$e=fn);return n&&Ke.forEach(function(qr){return r($,qr)}),Vt&&Ss($,tt),Ge}function Ve($,W,Z,Ee){var Ge=ce(Z);if(typeof Ge!="function")throw Error(t(150));if(Z=Ge.call(Z),Z==null)throw Error(t(151));for(var $e=Ge=null,Ke=W,tt=W=0,fn=null,Tt=Z.next();Ke!==null&&!Tt.done;tt++,Tt=Z.next()){Ke.index>tt?(fn=Ke,Ke=null):fn=Ke.sibling;var qr=me($,Ke,Tt.value,Ee);if(qr===null){Ke===null&&(Ke=fn);break}n&&Ke&&qr.alternate===null&&r($,Ke),W=x(qr,W,tt),$e===null?Ge=qr:$e.sibling=qr,$e=qr,Ke=fn}if(Tt.done)return l($,Ke),Vt&&Ss($,tt),Ge;if(Ke===null){for(;!Tt.done;tt++,Tt=Z.next())Tt=xe($,Tt.value,Ee),Tt!==null&&(W=x(Tt,W,tt),$e===null?Ge=Tt:$e.sibling=Tt,$e=Tt);return Vt&&Ss($,tt),Ge}for(Ke=f($,Ke);!Tt.done;tt++,Tt=Z.next())Tt=De(Ke,$,tt,Tt.value,Ee),Tt!==null&&(n&&Tt.alternate!==null&&Ke.delete(Tt.key===null?tt:Tt.key),W=x(Tt,W,tt),$e===null?Ge=Tt:$e.sibling=Tt,$e=Tt);return n&&Ke.forEach(function(cS){return r($,cS)}),Vt&&Ss($,tt),Ge}function Zt($,W,Z,Ee){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case U:e:{for(var Ge=Z.key,$e=W;$e!==null;){if($e.key===Ge){if(Ge=Z.type,Ge===I){if($e.tag===7){l($,$e.sibling),W=m($e,Z.props.children),W.return=$,$=W;break e}}else if($e.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ne&&Gm(Ge)===$e.type){l($,$e.sibling),W=m($e,Z.props),W.ref=Pa($,$e,Z),W.return=$,$=W;break e}l($,$e);break}else r($,$e);$e=$e.sibling}Z.type===I?(W=Ps(Z.props.children,$.mode,Ee,Z.key),W.return=$,$=W):(Ee=yu(Z.type,Z.key,Z.props,null,$.mode,Ee),Ee.ref=Pa($,W,Z),Ee.return=$,$=Ee)}return T($);case D:e:{for($e=Z.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===Z.containerInfo&&W.stateNode.implementation===Z.implementation){l($,W.sibling),W=m(W,Z.children||[]),W.return=$,$=W;break e}else{l($,W);break}else r($,W);W=W.sibling}W=ah(Z,$.mode,Ee),W.return=$,$=W}return T($);case ne:return $e=Z._init,Zt($,W,$e(Z._payload),Ee)}if(We(Z))return Be($,W,Z,Ee);if(ce(Z))return Ve($,W,Z,Ee);Kl($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,W!==null&&W.tag===6?(l($,W.sibling),W=m(W,Z),W.return=$,$=W):(l($,W),W=oh(Z,$.mode,Ee),W.return=$,$=W),T($)):l($,W)}return Zt}var go=Wm(!0),Xm=Wm(!1),Zl=Or(null),Ql=null,vo=null,_f=null;function gf(){_f=vo=Ql=null}function vf(n){var r=Zl.current;kt(Zl),n._currentValue=r}function xf(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function xo(n,r){Ql=n,_f=vo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Gn=!0),n.firstContext=null)}function _i(n){var r=n._currentValue;if(_f!==n)if(n={context:n,memoizedValue:r,next:null},vo===null){if(Ql===null)throw Error(t(308));vo=n,Ql.dependencies={lanes:0,firstContext:n}}else vo=vo.next=n;return r}var Ms=null;function yf(n){Ms===null?Ms=[n]:Ms.push(n)}function jm(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,yf(r)):(l.next=m.next,m.next=l),r.interleaved=l,lr(n,f)}function lr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Br=!1;function Sf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ur(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Vr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,yt&2){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,lr(n,l)}return m=f.interleaved,m===null?(r.next=r,yf(f)):(r.next=m.next,m.next=r),f.interleaved=r,lr(n,l)}function Jl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,gs(n,l)}}function qm(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=T:x=x.next=T,l=l.next}while(l!==null);x===null?m=x=r:x=x.next=r}else m=x=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function eu(n,r,l,f){var m=n.updateQueue;Br=!1;var x=m.firstBaseUpdate,T=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var V=F,te=V.next;V.next=null,T===null?x=te:T.next=te,T=V;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,F=ge.lastBaseUpdate,F!==T&&(F===null?ge.firstBaseUpdate=te:F.next=te,ge.lastBaseUpdate=V))}if(x!==null){var xe=m.baseState;T=0,ge=te=V=null,F=x;do{var me=F.lane,De=F.eventTime;if((f&me)===me){ge!==null&&(ge=ge.next={eventTime:De,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Be=n,Ve=F;switch(me=r,De=l,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){xe=Be.call(De,xe,me);break e}xe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,me=typeof Be=="function"?Be.call(De,xe,me):Be,me==null)break e;xe=oe({},xe,me);break e;case 2:Br=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,me=m.effects,me===null?m.effects=[F]:me.push(F))}else De={eventTime:De,lane:me,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ge===null?(te=ge=De,V=xe):ge=ge.next=De,T|=me;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;me=F,F=me.next,me.next=null,m.lastBaseUpdate=me,m.shared.pending=null}}while(!0);if(ge===null&&(V=xe),m.baseState=V,m.firstBaseUpdate=te,m.lastBaseUpdate=ge,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else x===null&&(m.shared.lanes=0);ws|=T,n.lanes=T,n.memoizedState=xe}}function $m(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ba={},Wi=Or(ba),La=Or(ba),Da=Or(ba);function Es(n){if(n===ba)throw Error(t(174));return n}function Mf(n,r){switch(Ut(Da,r),Ut(La,n),Ut(Wi,ba),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=He(r,n)}kt(Wi),Ut(Wi,r)}function yo(){kt(Wi),kt(La),kt(Da)}function Km(n){Es(Da.current);var r=Es(Wi.current),l=He(r,n.type);r!==l&&(Ut(La,n),Ut(Wi,l))}function Ef(n){La.current===n&&(kt(Wi),kt(La))}var Gt=Or(0);function tu(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Tf=[];function wf(){for(var n=0;n<Tf.length;n++)Tf[n]._workInProgressVersionPrimary=null;Tf.length=0}var nu=w.ReactCurrentDispatcher,Af=w.ReactCurrentBatchConfig,Ts=0,Wt=null,sn=null,un=null,iu=!1,Ia=!1,Ua=0,Iy=0;function En(){throw Error(t(321))}function Cf(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ci(n[l],r[l]))return!1;return!0}function Rf(n,r,l,f,m,x){if(Ts=x,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,nu.current=n===null||n.memoizedState===null?Oy:ky,n=l(f,m),Ia){x=0;do{if(Ia=!1,Ua=0,25<=x)throw Error(t(301));x+=1,un=sn=null,r.updateQueue=null,nu.current=zy,n=l(f,m)}while(Ia)}if(nu.current=ou,r=sn!==null&&sn.next!==null,Ts=0,un=sn=Wt=null,iu=!1,r)throw Error(t(300));return n}function Pf(){var n=Ua!==0;return Ua=0,n}function Xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Wt.memoizedState=un=n:un=un.next=n,un}function gi(){if(sn===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var r=un===null?Wt.memoizedState:un.next;if(r!==null)un=r,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?Wt.memoizedState=un=n:un=un.next=n}return un}function Na(n,r){return typeof r=="function"?r(n):r}function bf(n){var r=gi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=sn,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var T=m.next;m.next=x.next,x.next=T}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var F=T=null,V=null,te=x;do{var ge=te.lane;if((Ts&ge)===ge)V!==null&&(V=V.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),f=te.hasEagerState?te.eagerState:n(f,te.action);else{var xe={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};V===null?(F=V=xe,T=f):V=V.next=xe,Wt.lanes|=ge,ws|=ge}te=te.next}while(te!==null&&te!==x);V===null?T=f:V.next=F,Ci(f,r.memoizedState)||(Gn=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=V,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do x=m.lane,Wt.lanes|=x,ws|=x,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Lf(n){var r=gi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,x=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do x=n(x,T.action),T=T.next;while(T!==m);Ci(x,r.memoizedState)||(Gn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,f]}function Zm(){}function Qm(n,r){var l=Wt,f=gi(),m=r(),x=!Ci(f.memoizedState,m);if(x&&(f.memoizedState=m,Gn=!0),f=f.queue,Df(t_.bind(null,l,f,n),[n]),f.getSnapshot!==r||x||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,Fa(9,e_.bind(null,l,f,m,r),void 0,null),cn===null)throw Error(t(349));Ts&30||Jm(l,r,m)}return m}function Jm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function e_(n,r,l,f){r.value=l,r.getSnapshot=f,n_(r)&&i_(n)}function t_(n,r,l){return l(function(){n_(r)&&i_(n)})}function n_(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ci(n,l)}catch{return!0}}function i_(n){var r=lr(n,1);r!==null&&Di(r,n,1,-1)}function r_(n){var r=Xi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:n},r.queue=n,n=n.dispatch=Fy.bind(null,Wt,n),[r.memoizedState,n]}function Fa(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function s_(){return gi().memoizedState}function ru(n,r,l,f){var m=Xi();Wt.flags|=n,m.memoizedState=Fa(1|r,l,void 0,f===void 0?null:f)}function su(n,r,l,f){var m=gi();f=f===void 0?null:f;var x=void 0;if(sn!==null){var T=sn.memoizedState;if(x=T.destroy,f!==null&&Cf(f,T.deps)){m.memoizedState=Fa(r,l,x,f);return}}Wt.flags|=n,m.memoizedState=Fa(1|r,l,x,f)}function o_(n,r){return ru(8390656,8,n,r)}function Df(n,r){return su(2048,8,n,r)}function a_(n,r){return su(4,2,n,r)}function l_(n,r){return su(4,4,n,r)}function u_(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function c_(n,r,l){return l=l!=null?l.concat([n]):null,su(4,4,u_.bind(null,r,n),l)}function If(){}function f_(n,r){var l=gi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Cf(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function h_(n,r){var l=gi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Cf(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function d_(n,r,l){return Ts&21?(Ci(l,r)||(l=Un(),Wt.lanes|=l,ws|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=l)}function Uy(n,r){var l=dt;dt=l!==0&&4>l?l:4,n(!0);var f=Af.transition;Af.transition={};try{n(!1),r()}finally{dt=l,Af.transition=f}}function p_(){return gi().memoizedState}function Ny(n,r,l){var f=Xr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},m_(n))__(r,l);else if(l=jm(n,r,l,f),l!==null){var m=Fn();Di(l,n,f,m),g_(l,r,f)}}function Fy(n,r,l){var f=Xr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(m_(n))__(r,m);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var T=r.lastRenderedState,F=x(T,l);if(m.hasEagerState=!0,m.eagerState=F,Ci(F,T)){var V=r.interleaved;V===null?(m.next=m,yf(r)):(m.next=V.next,V.next=m),r.interleaved=m;return}}catch{}finally{}l=jm(n,r,m,f),l!==null&&(m=Fn(),Di(l,n,f,m),g_(l,r,f))}}function m_(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function __(n,r){Ia=iu=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function g_(n,r,l){if(l&4194240){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,gs(n,l)}}var ou={readContext:_i,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Oy={readContext:_i,useCallback:function(n,r){return Xi().memoizedState=[n,r===void 0?null:r],n},useContext:_i,useEffect:o_,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,ru(4194308,4,u_.bind(null,r,n),l)},useLayoutEffect:function(n,r){return ru(4194308,4,n,r)},useInsertionEffect:function(n,r){return ru(4,2,n,r)},useMemo:function(n,r){var l=Xi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Xi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=Ny.bind(null,Wt,n),[f.memoizedState,n]},useRef:function(n){var r=Xi();return n={current:n},r.memoizedState=n},useState:r_,useDebugValue:If,useDeferredValue:function(n){return Xi().memoizedState=n},useTransition:function(){var n=r_(!1),r=n[0];return n=Uy.bind(null,n[1]),Xi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Wt,m=Xi();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),cn===null)throw Error(t(349));Ts&30||Jm(f,r,l)}m.memoizedState=l;var x={value:l,getSnapshot:r};return m.queue=x,o_(t_.bind(null,f,x,n),[n]),f.flags|=2048,Fa(9,e_.bind(null,f,x,l,r),void 0,null),l},useId:function(){var n=Xi(),r=cn.identifierPrefix;if(Vt){var l=ar,f=or;l=(f&~(1<<32-Et(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Ua++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Iy++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},ky={readContext:_i,useCallback:f_,useContext:_i,useEffect:Df,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:h_,useReducer:bf,useRef:s_,useState:function(){return bf(Na)},useDebugValue:If,useDeferredValue:function(n){var r=gi();return d_(r,sn.memoizedState,n)},useTransition:function(){var n=bf(Na)[0],r=gi().memoizedState;return[n,r]},useMutableSource:Zm,useSyncExternalStore:Qm,useId:p_,unstable_isNewReconciler:!1},zy={readContext:_i,useCallback:f_,useContext:_i,useEffect:Df,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:h_,useReducer:Lf,useRef:s_,useState:function(){return Lf(Na)},useDebugValue:If,useDeferredValue:function(n){var r=gi();return sn===null?r.memoizedState=n:d_(r,sn.memoizedState,n)},useTransition:function(){var n=Lf(Na)[0],r=gi().memoizedState;return[n,r]},useMutableSource:Zm,useSyncExternalStore:Qm,useId:p_,unstable_isNewReconciler:!1};function Pi(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Uf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:oe({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var au={isMounted:function(n){return(n=n._reactInternals)?Hi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Fn(),m=Xr(n),x=ur(f,m);x.payload=r,l!=null&&(x.callback=l),r=Vr(n,x,m),r!==null&&(Di(r,n,m,f),Jl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Fn(),m=Xr(n),x=ur(f,m);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=Vr(n,x,m),r!==null&&(Di(r,n,m,f),Jl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Fn(),f=Xr(n),m=ur(l,f);m.tag=2,r!=null&&(m.callback=r),r=Vr(n,m,f),r!==null&&(Di(r,n,f,l),Jl(r,n,f))}};function v_(n,r,l,f,m,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,x,T):r.prototype&&r.prototype.isPureReactComponent?!Ma(l,f)||!Ma(m,x):!0}function x_(n,r,l){var f=!1,m=kr,x=r.contextType;return typeof x=="object"&&x!==null?x=_i(x):(m=Hn(r)?xs:Mn.current,f=r.contextTypes,x=(f=f!=null)?ho(n,m):kr),r=new r(l,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=au,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=x),r}function y_(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&au.enqueueReplaceState(r,r.state,null)}function Nf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Sf(n);var x=r.contextType;typeof x=="object"&&x!==null?m.context=_i(x):(x=Hn(r)?xs:Mn.current,m.context=ho(n,x)),m.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Uf(n,r,x,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&au.enqueueReplaceState(m,m.state,null),eu(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function So(n,r){try{var l="",f=r;do l+=fe(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:m,digest:null}}function Ff(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Of(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var By=typeof WeakMap=="function"?WeakMap:Map;function S_(n,r,l){l=ur(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){pu||(pu=!0,Qf=f),Of(n,r)},l}function M_(n,r,l){l=ur(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Of(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Of(n,r),typeof f!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function E_(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new By;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=eS.bind(null,n,r,l),r.then(n,n))}function T_(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function w_(n,r,l,f,m){return n.mode&1?(n.flags|=65536,n.lanes=m,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ur(-1,1),r.tag=2,Vr(l,r,1))),l.lanes|=1),n)}var Vy=w.ReactCurrentOwner,Gn=!1;function Nn(n,r,l,f){r.child=n===null?Xm(r,null,l,f):go(r,n.child,l,f)}function A_(n,r,l,f,m){l=l.render;var x=r.ref;return xo(r,m),f=Rf(n,r,l,f,x,m),l=Pf(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,cr(n,r,m)):(Vt&&l&&ff(r),r.flags|=1,Nn(n,r,f,m),r.child)}function C_(n,r,l,f,m){if(n===null){var x=l.type;return typeof x=="function"&&!sh(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,R_(n,r,x,f,m)):(n=yu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,!(n.lanes&m)){var T=x.memoizedProps;if(l=l.compare,l=l!==null?l:Ma,l(T,f)&&n.ref===r.ref)return cr(n,r,m)}return r.flags|=1,n=Yr(x,f),n.ref=r.ref,n.return=r,r.child=n}function R_(n,r,l,f,m){if(n!==null){var x=n.memoizedProps;if(Ma(x,f)&&n.ref===r.ref)if(Gn=!1,r.pendingProps=f=x,(n.lanes&m)!==0)n.flags&131072&&(Gn=!0);else return r.lanes=n.lanes,cr(n,r,m)}return kf(n,r,l,f,m)}function P_(n,r,l){var f=r.pendingProps,m=f.children,x=n!==null?n.memoizedState:null;if(f.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Eo,ri),ri|=l;else{if(!(l&1073741824))return n=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ut(Eo,ri),ri|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Ut(Eo,ri),ri|=f}else x!==null?(f=x.baseLanes|l,r.memoizedState=null):f=l,Ut(Eo,ri),ri|=f;return Nn(n,r,m,l),r.child}function b_(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function kf(n,r,l,f,m){var x=Hn(l)?xs:Mn.current;return x=ho(r,x),xo(r,m),l=Rf(n,r,l,f,x,m),f=Pf(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,cr(n,r,m)):(Vt&&f&&ff(r),r.flags|=1,Nn(n,r,l,m),r.child)}function L_(n,r,l,f,m){if(Hn(l)){var x=!0;Xl(r)}else x=!1;if(xo(r,m),r.stateNode===null)uu(n,r),x_(r,l,f),Nf(r,l,f,m),f=!0;else if(n===null){var T=r.stateNode,F=r.memoizedProps;T.props=F;var V=T.context,te=l.contextType;typeof te=="object"&&te!==null?te=_i(te):(te=Hn(l)?xs:Mn.current,te=ho(r,te));var ge=l.getDerivedStateFromProps,xe=typeof ge=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==f||V!==te)&&y_(r,T,f,te),Br=!1;var me=r.memoizedState;T.state=me,eu(r,f,T,m),V=r.memoizedState,F!==f||me!==V||Vn.current||Br?(typeof ge=="function"&&(Uf(r,l,ge,f),V=r.memoizedState),(F=Br||v_(r,l,F,f,me,V,te))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=V),T.props=f,T.state=V,T.context=te,f=F):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,Ym(n,r),F=r.memoizedProps,te=r.type===r.elementType?F:Pi(r.type,F),T.props=te,xe=r.pendingProps,me=T.context,V=l.contextType,typeof V=="object"&&V!==null?V=_i(V):(V=Hn(l)?xs:Mn.current,V=ho(r,V));var De=l.getDerivedStateFromProps;(ge=typeof De=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==xe||me!==V)&&y_(r,T,f,V),Br=!1,me=r.memoizedState,T.state=me,eu(r,f,T,m);var Be=r.memoizedState;F!==xe||me!==Be||Vn.current||Br?(typeof De=="function"&&(Uf(r,l,De,f),Be=r.memoizedState),(te=Br||v_(r,l,te,f,me,Be,V)||!1)?(ge||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Be,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Be,V)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Be),T.props=f,T.state=Be,T.context=V,f=te):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),f=!1)}return zf(n,r,l,f,x,m)}function zf(n,r,l,f,m,x){b_(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return m&&Fm(r,l,!1),cr(n,r,x);f=r.stateNode,Vy.current=r;var F=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=go(r,n.child,null,x),r.child=go(r,null,F,x)):Nn(n,r,F,x),r.memoizedState=f.state,m&&Fm(r,l,!0),r.child}function D_(n){var r=n.stateNode;r.pendingContext?Um(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Um(n,r.context,!1),Mf(n,r.containerInfo)}function I_(n,r,l,f,m){return _o(),mf(m),r.flags|=256,Nn(n,r,l,f),r.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function Vf(n){return{baseLanes:n,cachePool:null,transitions:null}}function U_(n,r,l){var f=r.pendingProps,m=Gt.current,x=!1,T=(r.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(m&2)!==0),F?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Ut(Gt,m&1),n===null)return pf(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(T=f.children,n=f.fallback,x?(f=r.mode,x=r.child,T={mode:"hidden",children:T},!(f&1)&&x!==null?(x.childLanes=0,x.pendingProps=T):x=Su(T,f,0,null),n=Ps(n,f,l,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Vf(l),r.memoizedState=Bf,n):Hf(r,T));if(m=n.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return Hy(n,r,T,f,F,m,l);if(x){x=f.fallback,T=r.mode,m=n.child,F=m.sibling;var V={mode:"hidden",children:f.children};return!(T&1)&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=V,r.deletions=null):(f=Yr(m,V),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?x=Yr(F,x):(x=Ps(x,T,l,null),x.flags|=2),x.return=r,f.return=r,f.sibling=x,r.child=f,f=x,x=r.child,T=n.child.memoizedState,T=T===null?Vf(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~l,r.memoizedState=Bf,f}return x=n.child,n=x.sibling,f=Yr(x,{mode:"visible",children:f.children}),!(r.mode&1)&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Hf(n,r){return r=Su({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function lu(n,r,l,f){return f!==null&&mf(f),go(r,n.child,null,l),n=Hf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Hy(n,r,l,f,m,x,T){if(l)return r.flags&256?(r.flags&=-257,f=Ff(Error(t(422))),lu(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=f.fallback,m=r.mode,f=Su({mode:"visible",children:f.children},m,0,null),x=Ps(x,m,T,null),x.flags|=2,f.return=r,x.return=r,f.sibling=x,r.child=f,r.mode&1&&go(r,n.child,null,T),r.child.memoizedState=Vf(T),r.memoizedState=Bf,x);if(!(r.mode&1))return lu(n,r,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,x=Error(t(419)),f=Ff(x,f,void 0),lu(n,r,T,f)}if(F=(T&n.childLanes)!==0,Gn||F){if(f=cn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|T)?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,lr(n,m),Di(f,n,m,-1))}return rh(),f=Ff(Error(t(421))),lu(n,r,T,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=tS.bind(null,n),m._reactRetry=r,null):(n=x.treeContext,ii=Fr(m.nextSibling),ni=r,Vt=!0,Ri=null,n!==null&&(pi[mi++]=or,pi[mi++]=ar,pi[mi++]=ys,or=n.id,ar=n.overflow,ys=r),r=Hf(r,f.children),r.flags|=4096,r)}function N_(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),xf(n.return,r,l)}function Gf(n,r,l,f,m){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function F_(n,r,l){var f=r.pendingProps,m=f.revealOrder,x=f.tail;if(Nn(n,r,f.children,l),f=Gt.current,f&2)f=f&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&N_(n,l,r);else if(n.tag===19)N_(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ut(Gt,f),!(r.mode&1))r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&tu(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Gf(r,!1,m,l,x);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&tu(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Gf(r,!0,l,null,x);break;case"together":Gf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function uu(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function cr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ws|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Yr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Yr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Gy(n,r,l){switch(r.tag){case 3:D_(r),_o();break;case 5:Km(r);break;case 1:Hn(r.type)&&Xl(r);break;case 4:Mf(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Ut(Zl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ut(Gt,Gt.current&1),r.flags|=128,null):l&r.child.childLanes?U_(n,r,l):(Ut(Gt,Gt.current&1),n=cr(n,r,l),n!==null?n.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,n.flags&128){if(f)return F_(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ut(Gt,Gt.current),f)break;return null;case 22:case 23:return r.lanes=0,P_(n,r,l)}return cr(n,r,l)}var O_,Wf,k_,z_;O_=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Wf=function(){},k_=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,Es(Wi.current);var x=null;switch(l){case"input":m=H(n,m),f=H(n,f),x=[];break;case"select":m=oe({},m,{value:void 0}),f=oe({},f,{value:void 0}),x=[];break;case"textarea":m=C(n,m),f=C(n,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Hl)}ct(l,f);var T;l=null;for(te in m)if(!f.hasOwnProperty(te)&&m.hasOwnProperty(te)&&m[te]!=null)if(te==="style"){var F=m[te];for(T in F)F.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(s.hasOwnProperty(te)?x||(x=[]):(x=x||[]).push(te,null));for(te in f){var V=f[te];if(F=m!=null?m[te]:void 0,f.hasOwnProperty(te)&&V!==F&&(V!=null||F!=null))if(te==="style")if(F){for(T in F)!F.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in V)V.hasOwnProperty(T)&&F[T]!==V[T]&&(l||(l={}),l[T]=V[T])}else l||(x||(x=[]),x.push(te,l)),l=V;else te==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(x=x||[]).push(te,V)):te==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(te,""+V):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(s.hasOwnProperty(te)?(V!=null&&te==="onScroll"&&Ot("scroll",n),x||F===V||(x=[])):(x=x||[]).push(te,V))}l&&(x=x||[]).push("style",l);var te=x;(r.updateQueue=te)&&(r.flags|=4)}},z_=function(n,r,l,f){l!==f&&(r.flags|=4)};function Oa(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Tn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function Wy(n,r,l){var f=r.pendingProps;switch(hf(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(r),null;case 1:return Hn(r.type)&&Wl(),Tn(r),null;case 3:return f=r.stateNode,yo(),kt(Vn),kt(Mn),wf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&($l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ri!==null&&(th(Ri),Ri=null))),Wf(n,r),Tn(r),null;case 5:Ef(r);var m=Es(Da.current);if(l=r.type,n!==null&&r.stateNode!=null)k_(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Tn(r),null}if(n=Es(Wi.current),$l(r)){f=r.stateNode,l=r.type;var x=r.memoizedProps;switch(f[Gi]=r,f[Ca]=x,n=(r.mode&1)!==0,l){case"dialog":Ot("cancel",f),Ot("close",f);break;case"iframe":case"object":case"embed":Ot("load",f);break;case"video":case"audio":for(m=0;m<Ta.length;m++)Ot(Ta[m],f);break;case"source":Ot("error",f);break;case"img":case"image":case"link":Ot("error",f),Ot("load",f);break;case"details":Ot("toggle",f);break;case"input":Ln(f,x),Ot("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Ot("invalid",f);break;case"textarea":Q(f,x),Ot("invalid",f)}ct(l,x),m=null;for(var T in x)if(x.hasOwnProperty(T)){var F=x[T];T==="children"?typeof F=="string"?f.textContent!==F&&(x.suppressHydrationWarning!==!0&&Vl(f.textContent,F,n),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Vl(f.textContent,F,n),m=["children",""+F]):s.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Ot("scroll",f)}switch(l){case"input":Rt(f),je(f,x,!0);break;case"textarea":Rt(f),_e(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Hl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[Gi]=r,n[Ca]=f,O_(n,r,!1,!1),r.stateNode=n;e:{switch(T=nt(l,f),l){case"dialog":Ot("cancel",n),Ot("close",n),m=f;break;case"iframe":case"object":case"embed":Ot("load",n),m=f;break;case"video":case"audio":for(m=0;m<Ta.length;m++)Ot(Ta[m],n);m=f;break;case"source":Ot("error",n),m=f;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),m=f;break;case"details":Ot("toggle",n),m=f;break;case"input":Ln(n,f),m=H(n,f),Ot("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=oe({},f,{value:void 0}),Ot("invalid",n);break;case"textarea":Q(n,f),m=C(n,f),Ot("invalid",n);break;default:m=f}ct(l,m),F=m;for(x in F)if(F.hasOwnProperty(x)){var V=F[x];x==="style"?Qe(n,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ne(n,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&lt(n,V):typeof V=="number"&&lt(n,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?V!=null&&x==="onScroll"&&Ot("scroll",n):V!=null&&b(n,x,V,T))}switch(l){case"input":Rt(n),je(n,f,!1);break;case"textarea":Rt(n),_e(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Te(f.value));break;case"select":n.multiple=!!f.multiple,x=f.value,x!=null?N(n,!!f.multiple,x,!1):f.defaultValue!=null&&N(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Hl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Tn(r),null;case 6:if(n&&r.stateNode!=null)z_(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Es(Da.current),Es(Wi.current),$l(r)){if(f=r.stateNode,l=r.memoizedProps,f[Gi]=r,(x=f.nodeValue!==l)&&(n=ni,n!==null))switch(n.tag){case 3:Vl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vl(f.nodeValue,l,(n.mode&1)!==0)}x&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Gi]=r,r.stateNode=f}return Tn(r),null;case 13:if(kt(Gt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&ii!==null&&r.mode&1&&!(r.flags&128))Hm(),_o(),r.flags|=98560,x=!1;else if(x=$l(r),f!==null&&f.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Gi]=r}else _o(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Tn(r),x=!1}else Ri!==null&&(th(Ri),Ri=null),x=!0;if(!x)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,r.mode&1&&(n===null||Gt.current&1?on===0&&(on=3):rh())),r.updateQueue!==null&&(r.flags|=4),Tn(r),null);case 4:return yo(),Wf(n,r),n===null&&wa(r.stateNode.containerInfo),Tn(r),null;case 10:return vf(r.type._context),Tn(r),null;case 17:return Hn(r.type)&&Wl(),Tn(r),null;case 19:if(kt(Gt),x=r.memoizedState,x===null)return Tn(r),null;if(f=(r.flags&128)!==0,T=x.rendering,T===null)if(f)Oa(x,!1);else{if(on!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(T=tu(n),T!==null){for(r.flags|=128,Oa(x,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)x=l,n=f,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ut(Gt,Gt.current&1|2),r.child}n=n.sibling}x.tail!==null&&G()>To&&(r.flags|=128,f=!0,Oa(x,!1),r.lanes=4194304)}else{if(!f)if(n=tu(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Oa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!Vt)return Tn(r),null}else 2*G()-x.renderingStartTime>To&&l!==1073741824&&(r.flags|=128,f=!0,Oa(x,!1),r.lanes=4194304);x.isBackwards?(T.sibling=r.child,r.child=T):(l=x.last,l!==null?l.sibling=T:r.child=T,x.last=T)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=G(),r.sibling=null,l=Gt.current,Ut(Gt,f?l&1|2:l&1),r):(Tn(r),null);case 22:case 23:return ih(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&r.mode&1?ri&1073741824&&(Tn(r),r.subtreeFlags&6&&(r.flags|=8192)):Tn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Xy(n,r){switch(hf(r),r.tag){case 1:return Hn(r.type)&&Wl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return yo(),kt(Vn),kt(Mn),wf(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Ef(r),null;case 13:if(kt(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));_o()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return kt(Gt),null;case 4:return yo(),null;case 10:return vf(r.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var cu=!1,wn=!1,jy=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Mo(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){qt(n,r,f)}else l.current=null}function Xf(n,r,l){try{l()}catch(f){qt(n,r,f)}}var B_=!1;function Yy(n,r){if(nf=bl,n=vm(),qc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var T=0,F=-1,V=-1,te=0,ge=0,xe=n,me=null;t:for(;;){for(var De;xe!==l||m!==0&&xe.nodeType!==3||(F=T+m),xe!==x||f!==0&&xe.nodeType!==3||(V=T+f),xe.nodeType===3&&(T+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===n)break t;if(me===l&&++te===m&&(F=T),me===x&&++ge===f&&(V=T),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}l=F===-1||V===-1?null:{start:F,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(rf={focusedElem:n,selectionRange:l},bl=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var Be=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Zt=Be.memoizedState,$=r.stateNode,W=$.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:Pi(r.type,Ve),Zt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){qt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return Be=B_,B_=!1,Be}function ka(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var x=m.destroy;m.destroy=void 0,x!==void 0&&Xf(r,l,x)}m=m.next}while(m!==f)}}function fu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function jf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function V_(n){var r=n.alternate;r!==null&&(n.alternate=null,V_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gi],delete r[Ca],delete r[lf],delete r[Py],delete r[by])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function H_(n){return n.tag===5||n.tag===3||n.tag===4}function G_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||H_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Hl));else if(f!==4&&(n=n.child,n!==null))for(Yf(n,r,l),n=n.sibling;n!==null;)Yf(n,r,l),n=n.sibling}function qf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(qf(n,r,l),n=n.sibling;n!==null;)qf(n,r,l),n=n.sibling}var vn=null,bi=!1;function Hr(n,r,l){for(l=l.child;l!==null;)W_(n,r,l),l=l.sibling}function W_(n,r,l){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Xe,l)}catch{}switch(l.tag){case 5:wn||Mo(l,r);case 6:var f=vn,m=bi;vn=null,Hr(n,r,l),vn=f,bi=m,vn!==null&&(bi?(n=vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):vn.removeChild(l.stateNode));break;case 18:vn!==null&&(bi?(n=vn,l=l.stateNode,n.nodeType===8?af(n.parentNode,l):n.nodeType===1&&af(n,l),_a(n)):af(vn,l.stateNode));break;case 4:f=vn,m=bi,vn=l.stateNode.containerInfo,bi=!0,Hr(n,r,l),vn=f,bi=m;break;case 0:case 11:case 14:case 15:if(!wn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,T=x.destroy;x=x.tag,T!==void 0&&(x&2||x&4)&&Xf(l,r,T),m=m.next}while(m!==f)}Hr(n,r,l);break;case 1:if(!wn&&(Mo(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){qt(l,r,F)}Hr(n,r,l);break;case 21:Hr(n,r,l);break;case 22:l.mode&1?(wn=(f=wn)||l.memoizedState!==null,Hr(n,r,l),wn=f):Hr(n,r,l);break;default:Hr(n,r,l)}}function X_(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new jy),r.forEach(function(f){var m=nS.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Li(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=n,T=r,F=T;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,bi=!1;break e;case 3:vn=F.stateNode.containerInfo,bi=!0;break e;case 4:vn=F.stateNode.containerInfo,bi=!0;break e}F=F.return}if(vn===null)throw Error(t(160));W_(x,T,m),vn=null,bi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(te){qt(m,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)j_(r,n),r=r.sibling}function j_(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Li(r,n),ji(n),f&4){try{ka(3,n,n.return),fu(3,n)}catch(Ve){qt(n,n.return,Ve)}try{ka(5,n,n.return)}catch(Ve){qt(n,n.return,Ve)}}break;case 1:Li(r,n),ji(n),f&512&&l!==null&&Mo(l,l.return);break;case 5:if(Li(r,n),ji(n),f&512&&l!==null&&Mo(l,l.return),n.flags&32){var m=n.stateNode;try{lt(m,"")}catch(Ve){qt(n,n.return,Ve)}}if(f&4&&(m=n.stateNode,m!=null)){var x=n.memoizedProps,T=l!==null?l.memoizedProps:x,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&ht(m,x),nt(F,T);var te=nt(F,x);for(T=0;T<V.length;T+=2){var ge=V[T],xe=V[T+1];ge==="style"?Qe(m,xe):ge==="dangerouslySetInnerHTML"?Ne(m,xe):ge==="children"?lt(m,xe):b(m,ge,xe,te)}switch(F){case"input":ut(m,x);break;case"textarea":pe(m,x);break;case"select":var me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var De=x.value;De!=null?N(m,!!x.multiple,De,!1):me!==!!x.multiple&&(x.defaultValue!=null?N(m,!!x.multiple,x.defaultValue,!0):N(m,!!x.multiple,x.multiple?[]:"",!1))}m[Ca]=x}catch(Ve){qt(n,n.return,Ve)}}break;case 6:if(Li(r,n),ji(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,x=n.memoizedProps;try{m.nodeValue=x}catch(Ve){qt(n,n.return,Ve)}}break;case 3:if(Li(r,n),ji(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{_a(r.containerInfo)}catch(Ve){qt(n,n.return,Ve)}break;case 4:Li(r,n),ji(n);break;case 13:Li(r,n),ji(n),m=n.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Zf=G())),f&4&&X_(n);break;case 22:if(ge=l!==null&&l.memoizedState!==null,n.mode&1?(wn=(te=wn)||ge,Li(r,n),wn=te):Li(r,n),ji(n),f&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ge&&n.mode&1)for(Oe=n,ge=n.child;ge!==null;){for(xe=Oe=ge;Oe!==null;){switch(me=Oe,De=me.child,me.tag){case 0:case 11:case 14:case 15:ka(4,me,me.return);break;case 1:Mo(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){f=me,l=me.return;try{r=f,Be.props=r.memoizedProps,Be.state=r.memoizedState,Be.componentWillUnmount()}catch(Ve){qt(f,l,Ve)}}break;case 5:Mo(me,me.return);break;case 22:if(me.memoizedState!==null){$_(xe);continue}}De!==null?(De.return=me,Oe=De):$_(xe)}ge=ge.sibling}e:for(ge=null,xe=n;;){if(xe.tag===5){if(ge===null){ge=xe;try{m=xe.stateNode,te?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=xe.stateNode,V=xe.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=qe("display",T))}catch(Ve){qt(n,n.return,Ve)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(Ve){qt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Li(r,n),ji(n),f&4&&X_(n);break;case 21:break;default:Li(r,n),ji(n)}}function ji(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(H_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(lt(m,""),f.flags&=-33);var x=G_(n);qf(n,x,m);break;case 3:case 4:var T=f.stateNode.containerInfo,F=G_(n);Yf(n,F,T);break;default:throw Error(t(161))}}catch(V){qt(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function qy(n,r,l){Oe=n,Y_(n)}function Y_(n,r,l){for(var f=(n.mode&1)!==0;Oe!==null;){var m=Oe,x=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||cu;if(!T){var F=m.alternate,V=F!==null&&F.memoizedState!==null||wn;F=cu;var te=wn;if(cu=T,(wn=V)&&!te)for(Oe=m;Oe!==null;)T=Oe,V=T.child,T.tag===22&&T.memoizedState!==null?K_(m):V!==null?(V.return=T,Oe=V):K_(m);for(;x!==null;)Oe=x,Y_(x),x=x.sibling;Oe=m,cu=F,wn=te}q_(n)}else m.subtreeFlags&8772&&x!==null?(x.return=m,Oe=x):q_(n)}}function q_(n){for(;Oe!==null;){var r=Oe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:wn||fu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!wn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Pi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&$m(r,x,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}$m(r,T,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&_a(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||r.flags&512&&jf(r)}catch(me){qt(r,r.return,me)}}if(r===n){Oe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function $_(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function K_(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{fu(4,r)}catch(V){qt(r,l,V)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(V){qt(r,m,V)}}var x=r.return;try{jf(r)}catch(V){qt(r,x,V)}break;case 5:var T=r.return;try{jf(r)}catch(V){qt(r,T,V)}}}catch(V){qt(r,r.return,V)}if(r===n){Oe=null;break}var F=r.sibling;if(F!==null){F.return=r.return,Oe=F;break}Oe=r.return}}var $y=Math.ceil,hu=w.ReactCurrentDispatcher,$f=w.ReactCurrentOwner,vi=w.ReactCurrentBatchConfig,yt=0,cn=null,Jt=null,xn=0,ri=0,Eo=Or(0),on=0,za=null,ws=0,du=0,Kf=0,Ba=null,Wn=null,Zf=0,To=1/0,fr=null,pu=!1,Qf=null,Gr=null,mu=!1,Wr=null,_u=0,Va=0,Jf=null,gu=-1,vu=0;function Fn(){return yt&6?G():gu!==-1?gu:gu=G()}function Xr(n){return n.mode&1?yt&2&&xn!==0?xn&-xn:Dy.transition!==null?(vu===0&&(vu=Un()),vu):(n=dt,n!==0||(n=window.event,n=n===void 0?16:Qp(n.type)),n):1}function Di(n,r,l,f){if(50<Va)throw Va=0,Jf=null,Error(t(185));Kt(n,l,f),(!(yt&2)||n!==cn)&&(n===cn&&(!(yt&2)&&(du|=l),on===4&&jr(n,xn)),Xn(n,f),l===1&&yt===0&&!(r.mode&1)&&(To=G()+500,jl&&zr()))}function Xn(n,r){var l=n.callbackNode;_s(n,r);var f=Ai(n,n===cn?xn:0);if(f===0)l!==null&&j(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&j(l),r===1)n.tag===0?Ly(Q_.bind(null,n)):Om(Q_.bind(null,n)),Cy(function(){!(yt&6)&&zr()}),l=null;else{switch(Wp(f)){case 1:l=Ce;break;case 4:l=Ie;break;case 16:l=Fe;break;case 536870912:l=et;break;default:l=Fe}l=og(l,Z_.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Z_(n,r){if(gu=-1,vu=0,yt&6)throw Error(t(327));var l=n.callbackNode;if(wo()&&n.callbackNode!==l)return null;var f=Ai(n,n===cn?xn:0);if(f===0)return null;if(f&30||f&n.expiredLanes||r)r=xu(n,f);else{r=f;var m=yt;yt|=2;var x=eg();(cn!==n||xn!==r)&&(fr=null,To=G()+500,Cs(n,r));do try{Qy();break}catch(F){J_(n,F)}while(!0);gf(),hu.current=x,yt=m,Jt!==null?r=0:(cn=null,xn=0,r=on)}if(r!==0){if(r===2&&(m=Pt(n),m!==0&&(f=m,r=eh(n,m))),r===1)throw l=za,Cs(n,0),jr(n,f),Xn(n,G()),l;if(r===6)jr(n,f);else{if(m=n.current.alternate,!(f&30)&&!Ky(m)&&(r=xu(n,f),r===2&&(x=Pt(n),x!==0&&(f=x,r=eh(n,x))),r===1))throw l=za,Cs(n,0),jr(n,f),Xn(n,G()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Rs(n,Wn,fr);break;case 3:if(jr(n,f),(f&130023424)===f&&(r=Zf+500-G(),10<r)){if(Ai(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Fn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=of(Rs.bind(null,n,Wn,fr),r);break}Rs(n,Wn,fr);break;case 4:if(jr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var T=31-Et(f);x=1<<T,T=r[T],T>m&&(m=T),f&=~x}if(f=m,f=G()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*$y(f/1960))-f,10<f){n.timeoutHandle=of(Rs.bind(null,n,Wn,fr),f);break}Rs(n,Wn,fr);break;case 5:Rs(n,Wn,fr);break;default:throw Error(t(329))}}}return Xn(n,G()),n.callbackNode===l?Z_.bind(null,n):null}function eh(n,r){var l=Ba;return n.current.memoizedState.isDehydrated&&(Cs(n,r).flags|=256),n=xu(n,r),n!==2&&(r=Wn,Wn=l,r!==null&&th(r)),n}function th(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function Ky(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!Ci(x(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jr(n,r){for(r&=~Kf,r&=~du,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Et(r),f=1<<l;n[l]=-1,r&=~f}}function Q_(n){if(yt&6)throw Error(t(327));wo();var r=Ai(n,0);if(!(r&1))return Xn(n,G()),null;var l=xu(n,r);if(n.tag!==0&&l===2){var f=Pt(n);f!==0&&(r=f,l=eh(n,f))}if(l===1)throw l=za,Cs(n,0),jr(n,r),Xn(n,G()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Rs(n,Wn,fr),Xn(n,G()),null}function nh(n,r){var l=yt;yt|=1;try{return n(r)}finally{yt=l,yt===0&&(To=G()+500,jl&&zr())}}function As(n){Wr!==null&&Wr.tag===0&&!(yt&6)&&wo();var r=yt;yt|=1;var l=vi.transition,f=dt;try{if(vi.transition=null,dt=1,n)return n()}finally{dt=f,vi.transition=l,yt=r,!(yt&6)&&zr()}}function ih(){ri=Eo.current,kt(Eo)}function Cs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Ay(l)),Jt!==null)for(l=Jt.return;l!==null;){var f=l;switch(hf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Wl();break;case 3:yo(),kt(Vn),kt(Mn),wf();break;case 5:Ef(f);break;case 4:yo();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:vf(f.type._context);break;case 22:case 23:ih()}l=l.return}if(cn=n,Jt=n=Yr(n.current,null),xn=ri=r,on=0,za=null,Kf=du=ws=0,Wn=Ba=null,Ms!==null){for(r=0;r<Ms.length;r++)if(l=Ms[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var T=x.next;x.next=m,f.next=T}l.pending=f}Ms=null}return n}function J_(n,r){do{var l=Jt;try{if(gf(),nu.current=ou,iu){for(var f=Wt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}iu=!1}if(Ts=0,un=sn=Wt=null,Ia=!1,Ua=0,$f.current=null,l===null||l.return===null){on=1,za=r,Jt=null;break}e:{var x=n,T=l.return,F=l,V=r;if(r=xn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var te=V,ge=F,xe=ge.tag;if(!(ge.mode&1)&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var De=T_(T);if(De!==null){De.flags&=-257,w_(De,T,F,x,r),De.mode&1&&E_(x,te,r),r=De,V=te;var Be=r.updateQueue;if(Be===null){var Ve=new Set;Ve.add(V),r.updateQueue=Ve}else Be.add(V);break e}else{if(!(r&1)){E_(x,te,r),rh();break e}V=Error(t(426))}}else if(Vt&&F.mode&1){var Zt=T_(T);if(Zt!==null){!(Zt.flags&65536)&&(Zt.flags|=256),w_(Zt,T,F,x,r),mf(So(V,F));break e}}x=V=So(V,F),on!==4&&(on=2),Ba===null?Ba=[x]:Ba.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var $=S_(x,V,r);qm(x,$);break e;case 1:F=V;var W=x.type,Z=x.stateNode;if(!(x.flags&128)&&(typeof W.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Gr===null||!Gr.has(Z)))){x.flags|=65536,r&=-r,x.lanes|=r;var Ee=M_(x,F,r);qm(x,Ee);break e}}x=x.return}while(x!==null)}ng(l)}catch(Ge){r=Ge,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function eg(){var n=hu.current;return hu.current=ou,n===null?ou:n}function rh(){(on===0||on===3||on===2)&&(on=4),cn===null||!(ws&268435455)&&!(du&268435455)||jr(cn,xn)}function xu(n,r){var l=yt;yt|=2;var f=eg();(cn!==n||xn!==r)&&(fr=null,Cs(n,r));do try{Zy();break}catch(m){J_(n,m)}while(!0);if(gf(),yt=l,hu.current=f,Jt!==null)throw Error(t(261));return cn=null,xn=0,on}function Zy(){for(;Jt!==null;)tg(Jt)}function Qy(){for(;Jt!==null&&!ie();)tg(Jt)}function tg(n){var r=sg(n.alternate,n,ri);n.memoizedProps=n.pendingProps,r===null?ng(n):Jt=r,$f.current=null}function ng(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=Xy(l,r),l!==null){l.flags&=32767,Jt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,Jt=null;return}}else if(l=Wy(l,r,ri),l!==null){Jt=l;return}if(r=r.sibling,r!==null){Jt=r;return}Jt=r=n}while(r!==null);on===0&&(on=5)}function Rs(n,r,l){var f=dt,m=vi.transition;try{vi.transition=null,dt=1,Jy(n,r,l,f)}finally{vi.transition=m,dt=f}return null}function Jy(n,r,l,f){do wo();while(Wr!==null);if(yt&6)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(Sn(n,x),n===cn&&(Jt=cn=null,xn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||mu||(mu=!0,og(Fe,function(){return wo(),null})),x=(l.flags&15990)!==0,l.subtreeFlags&15990||x){x=vi.transition,vi.transition=null;var T=dt;dt=1;var F=yt;yt|=4,$f.current=null,Yy(n,l),j_(l,n),xy(rf),bl=!!nf,rf=nf=null,n.current=l,qy(l),re(),yt=F,dt=T,vi.transition=x}else n.current=l;if(mu&&(mu=!1,Wr=n,_u=m),x=n.pendingLanes,x===0&&(Gr=null),Mt(l.stateNode),Xn(n,G()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(pu)throw pu=!1,n=Qf,Qf=null,n;return _u&1&&n.tag!==0&&wo(),x=n.pendingLanes,x&1?n===Jf?Va++:(Va=0,Jf=n):Va=0,zr(),null}function wo(){if(Wr!==null){var n=Wp(_u),r=vi.transition,l=dt;try{if(vi.transition=null,dt=16>n?16:n,Wr===null)var f=!1;else{if(n=Wr,Wr=null,_u=0,yt&6)throw Error(t(331));var m=yt;for(yt|=4,Oe=n.current;Oe!==null;){var x=Oe,T=x.child;if(Oe.flags&16){var F=x.deletions;if(F!==null){for(var V=0;V<F.length;V++){var te=F[V];for(Oe=te;Oe!==null;){var ge=Oe;switch(ge.tag){case 0:case 11:case 15:ka(8,ge,x)}var xe=ge.child;if(xe!==null)xe.return=ge,Oe=xe;else for(;Oe!==null;){ge=Oe;var me=ge.sibling,De=ge.return;if(V_(ge),ge===te){Oe=null;break}if(me!==null){me.return=De,Oe=me;break}Oe=De}}}var Be=x.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Zt=Ve.sibling;Ve.sibling=null,Ve=Zt}while(Ve!==null)}}Oe=x}}if(x.subtreeFlags&2064&&T!==null)T.return=x,Oe=T;else e:for(;Oe!==null;){if(x=Oe,x.flags&2048)switch(x.tag){case 0:case 11:case 15:ka(9,x,x.return)}var $=x.sibling;if($!==null){$.return=x.return,Oe=$;break e}Oe=x.return}}var W=n.current;for(Oe=W;Oe!==null;){T=Oe;var Z=T.child;if(T.subtreeFlags&2064&&Z!==null)Z.return=T,Oe=Z;else e:for(T=W;Oe!==null;){if(F=Oe,F.flags&2048)try{switch(F.tag){case 0:case 11:case 15:fu(9,F)}}catch(Ge){qt(F,F.return,Ge)}if(F===T){Oe=null;break e}var Ee=F.sibling;if(Ee!==null){Ee.return=F.return,Oe=Ee;break e}Oe=F.return}}if(yt=m,zr(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Xe,n)}catch{}f=!0}return f}finally{dt=l,vi.transition=r}}return!1}function ig(n,r,l){r=So(l,r),r=S_(n,r,1),n=Vr(n,r,1),r=Fn(),n!==null&&(Kt(n,1,r),Xn(n,r))}function qt(n,r,l){if(n.tag===3)ig(n,n,l);else for(;r!==null;){if(r.tag===3){ig(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Gr===null||!Gr.has(f))){n=So(l,n),n=M_(r,n,1),r=Vr(r,n,1),n=Fn(),r!==null&&(Kt(r,1,n),Xn(r,n));break}}r=r.return}}function eS(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Fn(),n.pingedLanes|=n.suspendedLanes&l,cn===n&&(xn&l)===l&&(on===4||on===3&&(xn&130023424)===xn&&500>G()-Zf?Cs(n,0):Kf|=l),Xn(n,r)}function rg(n,r){r===0&&(n.mode&1?(r=_t,_t<<=1,!(_t&130023424)&&(_t=4194304)):r=1);var l=Fn();n=lr(n,r),n!==null&&(Kt(n,r,l),Xn(n,l))}function tS(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),rg(n,l)}function nS(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),rg(n,l)}var sg;sg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Gn=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return Gn=!1,Gy(n,r,l);Gn=!!(n.flags&131072)}else Gn=!1,Vt&&r.flags&1048576&&km(r,ql,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;uu(n,r),n=r.pendingProps;var m=ho(r,Mn.current);xo(r,l),m=Rf(null,r,f,n,m,l);var x=Pf();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Hn(f)?(x=!0,Xl(r)):x=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Sf(r),m.updater=au,r.stateNode=m,m._reactInternals=r,Nf(r,f,n,l),r=zf(null,r,f,!0,x,l)):(r.tag=0,Vt&&x&&ff(r),Nn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(uu(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=rS(f),n=Pi(f,n),m){case 0:r=kf(null,r,f,n,l);break e;case 1:r=L_(null,r,f,n,l);break e;case 11:r=A_(null,r,f,n,l);break e;case 14:r=C_(null,r,f,Pi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),kf(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),L_(n,r,f,m,l);case 3:e:{if(D_(r),n===null)throw Error(t(387));f=r.pendingProps,x=r.memoizedState,m=x.element,Ym(n,r),eu(r,f,null,l);var T=r.memoizedState;if(f=T.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){m=So(Error(t(423)),r),r=I_(n,r,f,l,m);break e}else if(f!==m){m=So(Error(t(424)),r),r=I_(n,r,f,l,m);break e}else for(ii=Fr(r.stateNode.containerInfo.firstChild),ni=r,Vt=!0,Ri=null,l=Xm(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(_o(),f===m){r=cr(n,r,l);break e}Nn(n,r,f,l)}r=r.child}return r;case 5:return Km(r),n===null&&pf(r),f=r.type,m=r.pendingProps,x=n!==null?n.memoizedProps:null,T=m.children,sf(f,m)?T=null:x!==null&&sf(f,x)&&(r.flags|=32),b_(n,r),Nn(n,r,T,l),r.child;case 6:return n===null&&pf(r),null;case 13:return U_(n,r,l);case 4:return Mf(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=go(r,null,f,l):Nn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),A_(n,r,f,m,l);case 7:return Nn(n,r,r.pendingProps,l),r.child;case 8:return Nn(n,r,r.pendingProps.children,l),r.child;case 12:return Nn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,x=r.memoizedProps,T=m.value,Ut(Zl,f._currentValue),f._currentValue=T,x!==null)if(Ci(x.value,T)){if(x.children===m.children&&!Vn.current){r=cr(n,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var F=x.dependencies;if(F!==null){T=x.child;for(var V=F.firstContext;V!==null;){if(V.context===f){if(x.tag===1){V=ur(-1,l&-l),V.tag=2;var te=x.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?V.next=V:(V.next=ge.next,ge.next=V),te.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),xf(x.return,l,r),F.lanes|=l;break}V=V.next}}else if(x.tag===10)T=x.type===r.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=l,F=T.alternate,F!==null&&(F.lanes|=l),xf(T,l,r),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===r){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Nn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,xo(r,l),m=_i(m),f=f(m),r.flags|=1,Nn(n,r,f,l),r.child;case 14:return f=r.type,m=Pi(f,r.pendingProps),m=Pi(f.type,m),C_(n,r,f,m,l);case 15:return R_(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),uu(n,r),r.tag=1,Hn(f)?(n=!0,Xl(r)):n=!1,xo(r,l),x_(r,f,m),Nf(r,f,m,l),zf(null,r,f,!0,n,l);case 19:return F_(n,r,l);case 22:return P_(n,r,l)}throw Error(t(156,r.tag))};function og(n,r){return P(n,r)}function iS(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,r,l,f){return new iS(n,r,l,f)}function sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rS(n){if(typeof n=="function")return sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===ue)return 14}return 2}function Yr(n,r){var l=n.alternate;return l===null?(l=xi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function yu(n,r,l,f,m,x){var T=2;if(f=n,typeof n=="function")sh(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return Ps(l.children,m,x,r);case O:T=8,m|=8;break;case A:return n=xi(12,l,r,m|2),n.elementType=A,n.lanes=x,n;case Y:return n=xi(13,l,r,m),n.elementType=Y,n.lanes=x,n;case le:return n=xi(19,l,r,m),n.elementType=le,n.lanes=x,n;case se:return Su(l,m,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case z:T=9;break e;case J:T=11;break e;case ue:T=14;break e;case ne:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=xi(T,l,r,m),r.elementType=n,r.type=f,r.lanes=x,r}function Ps(n,r,l,f){return n=xi(7,n,f,r),n.lanes=l,n}function Su(n,r,l,f){return n=xi(22,n,f,r),n.elementType=se,n.lanes=l,n.stateNode={isHidden:!1},n}function oh(n,r,l){return n=xi(6,n,null,r),n.lanes=l,n}function ah(n,r,l){return r=xi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function sS(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function lh(n,r,l,f,m,x,T,F,V){return n=new sS(n,r,l,F,V),r===1?(r=1,x===!0&&(r|=8)):r=0,x=xi(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(x),n}function oS(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function ag(n){if(!n)return kr;n=n._reactInternals;e:{if(Hi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Hn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Hn(l))return Nm(n,l,r)}return r}function lg(n,r,l,f,m,x,T,F,V){return n=lh(l,f,!0,n,m,x,T,F,V),n.context=ag(null),l=n.current,f=Fn(),m=Xr(l),x=ur(f,m),x.callback=r??null,Vr(l,x,m),n.current.lanes=m,Kt(n,m,f),Xn(n,f),n}function Mu(n,r,l,f){var m=r.current,x=Fn(),T=Xr(m);return l=ag(l),r.context===null?r.context=l:r.pendingContext=l,r=ur(x,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Vr(m,r,T),n!==null&&(Di(n,m,T,x),Jl(n,m,T)),T}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ug(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function uh(n,r){ug(n,r),(n=n.alternate)&&ug(n,r)}var cg=typeof reportError=="function"?reportError:function(n){console.error(n)};function ch(n){this._internalRoot=n}Tu.prototype.render=ch.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Mu(n,r,null,null)},Tu.prototype.unmount=ch.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;As(function(){Mu(null,n,null,null)}),r[rr]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Yp();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Ir.length&&r!==0&&r<Ir[l].priority;l++);Ir.splice(l,0,n),l===0&&Kp(n)}};function fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fg(){}function aS(n,r,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var te=Eu(T);x.call(te)}}var T=lg(r,f,n,0,null,!1,!1,"",fg);return n._reactRootContainer=T,n[rr]=T.current,wa(n.nodeType===8?n.parentNode:n),As(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var te=Eu(V);F.call(te)}}var V=lh(n,0,!1,null,null,!1,!1,"",fg);return n._reactRootContainer=V,n[rr]=V.current,wa(n.nodeType===8?n.parentNode:n),As(function(){Mu(r,V,l,f)}),V}function Au(n,r,l,f,m){var x=l._reactRootContainer;if(x){var T=x;if(typeof m=="function"){var F=m;m=function(){var V=Eu(T);F.call(V)}}Mu(r,T,n,m)}else T=aS(l,r,n,m,f);return Eu(T)}Xp=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=gn(r.pendingLanes);l!==0&&(gs(r,l|1),Xn(r,G()),!(yt&6)&&(To=G()+500,zr()))}break;case 13:As(function(){var f=lr(n,1);if(f!==null){var m=Fn();Di(f,n,1,m)}}),uh(n,1)}},Nc=function(n){if(n.tag===13){var r=lr(n,134217728);if(r!==null){var l=Fn();Di(r,n,134217728,l)}uh(n,134217728)}},jp=function(n){if(n.tag===13){var r=Xr(n),l=lr(n,r);if(l!==null){var f=Fn();Di(l,n,r,f)}uh(n,r)}},Yp=function(){return dt},qp=function(n,r){var l=dt;try{return dt=n,r()}finally{dt=l}},Ae=function(n,r,l){switch(r){case"input":if(ut(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=Gl(f);if(!m)throw Error(t(90));pt(f),ut(f,m)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&N(n,!!l.multiple,r,!1)}},Ft=nh,rn=As;var lS={usingClientEntryPoint:!1,Events:[Ra,co,Gl,Pe,it,nh]},Ha={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uS={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Al(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Xe=Cu.inject(uS),rt=Cu}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lS,Yn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(r))throw Error(t(200));return oS(n,r,null,l)},Yn.createRoot=function(n,r){if(!fh(n))throw Error(t(299));var l=!1,f="",m=cg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=lh(n,1,!1,null,null,l,!1,f,m),n[rr]=r.current,wa(n.nodeType===8?n.parentNode:n),new ch(r)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Al(r),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return As(n)},Yn.hydrate=function(n,r,l){if(!wu(r))throw Error(t(200));return Au(null,n,r,!0,l)},Yn.hydrateRoot=function(n,r,l){if(!fh(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",T=cg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=lg(r,null,n,1,l??null,m,!1,x,T),n[rr]=r.current,wa(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Tu(r)},Yn.render=function(n,r,l){if(!wu(r))throw Error(t(200));return Au(null,n,r,!1,l)},Yn.unmountComponentAtNode=function(n){if(!wu(n))throw Error(t(40));return n._reactRootContainer?(As(function(){Au(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},Yn.unstable_batchedUpdates=nh,Yn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!wu(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Au(n,r,l,!1,f)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var Y0;function sR(){if(Y0)return rd.exports;Y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rd.exports=rR(),rd.exports}var q0;function oR(){if(q0)return tc;q0=1;var o=sR();return tc.createRoot=o.createRoot,tc.hydrateRoot=o.hydrateRoot,tc}var aR=oR();/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let $0=typeof window<"u"?ol.useLayoutEffect:ol.useEffect,K0=o=>o&&!Array.isArray(o)&&typeof o=="object",nc=[],lR={},Dx=nn;const Ic=(o,e=nc)=>{let t=lR;K0(o)?(t=o,o=null,e="dependencies"in t?t.dependencies:nc):K0(e)&&(t=e,e="dependencies"in t?t.dependencies:nc),o&&typeof o!="function"&&console.warn("First parameter must be a function or config object");const{scope:i,revertOnUpdate:s}=t,a=ol.useRef(!1),u=ol.useRef(Dx.context(()=>{},i)),c=ol.useRef(d=>u.current.add(null,d)),h=e&&e.length&&!s;return $0(()=>{if(o&&u.current.add(o,i),!h||!a.current)return()=>u.current.revert()},e),h&&$0(()=>(a.current=!0,()=>u.current.revert()),nc),{context:u.current,contextSafe:c.current}};Ic.register=o=>{Dx=o};Ic.headless=!0;const Ix="#a92500",uR="#d45a18",cR="#fffef7",fR=()=>{nn.set(".name-ctn",{scaleX:1}),nn.timeline().to(".name-ctn",{scaleX:1.2,duration:2.6,ease:"power3.out"}).to(".name-ctn",{scaleX:1,duration:1.8,delay:-1.4,ease:"power3.inOut"})},hR=()=>{nn.set(".a-logo",{opacity:0,scale:0,rotation:0}),nn.timeline().to(".a-logo",{opacity:1,scale:1,rotation:"+=540",duration:2.6,repeat:0,ease:"power3.out"}).to(".a-logo",{opacity:0,scale:0,rotation:"-=360",duration:1.8,delay:-.6,repeat:0,ease:"power3.inOut"})},dR=()=>{nn.set(".jce-txt",{opacity:0,color:Ix,textShadow:"0px 0px 0px var(--rusty)"}),nn.timeline().to(".jce-txt",{opacity:1,duration:1,delay:0,repeat:0,ease:"power3.out"}).to(".name-txt",{color:cR,textShadow:"0px 0px 40px var(--rusty)",duration:1,delay:1.6,repeat:0,ease:"ease-in-out"}).to(".name-txt",{color:uR,duration:2,repeat:0,ease:"ease-in-out"})},pR=()=>{nn.set(".a-txt",{opacity:0,scaleY:0,color:Ix,textShadow:"0px 0px 0px var(--rusty)"}),nn.timeline().to(".a-txt",{opacity:1,scaleY:1,duration:.8,delay:2.6,repeat:0,ease:"ease-in"})},mR=()=>{nn.set(".weyant-txt",{opacity:0}),nn.to(".weyant-txt",{opacity:1,duration:3,delay:.2,repeat:0,ease:"power3.in"})},_R=()=>(Ic(()=>{fR(),hR(),dR(),pR(),mR()}),dn.jsxs("div",{className:"name-ctn",children:[dn.jsx("h1",{className:"j-txt jce-txt name-txt txt-0",children:"J"}),dn.jsxs("div",{className:"a-or-logo-ctn",children:[dn.jsx("h1",{className:"a-txt name-txt txt-0",children:"A"}),dn.jsx("img",{src:"JaceWeyant-Website/assets/icosLogo_0.svg",className:" a-logo filter-rufous"})]}),dn.jsx("h1",{className:"ce-txt jce-txt name-txt txt-0",children:"CE"}),dn.jsx("h1",{className:"weyant-txt not-a-txt name-txt txt-0",children:"WEYANT"})]})),gR="#a92500",vR=o=>dn.jsx("nav",{className:"menu",children:dn.jsxs("ul",{className:"menu-items",children:[" ",o.children," "]})}),ic=({name:o,link:e})=>(Ic(()=>{nn.set(".menu",{width:"0%"}),nn.set(".menu-item",{opacity:0,color:gR}),nn.timeline().to(".menu",{width:"240px",duration:2,delay:3,ease:"power3.inOut"}).to(".menu-item",{opacity:1,duration:2.4,delay:-3,ease:"power3.inOut"})}),dn.jsx("button",{className:"menu-item txt-1",href:e,children:o})),xR=()=>dn.jsxs("div",{className:"app",children:[dn.jsx(_R,{}),dn.jsxs(vR,{children:[dn.jsx(ic,{name:"Home",link:"/"}),dn.jsx(ic,{name:"About",link:"/about"}),dn.jsx(ic,{name:"Projects",link:"/projects"}),dn.jsx(ic,{name:"Contact",link:"/contact"})]})]});aR.createRoot(document.getElementById("root")).render(dn.jsx(xR,{}));
