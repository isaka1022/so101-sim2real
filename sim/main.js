var tx=Object.defineProperty;var nx=(n,e,t)=>e in n?tx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var kr=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var si=(n,e,t)=>nx(n,typeof e!="symbol"?e+"":e,t);var wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,qu=1,Lf=2;var ja=1,Df=2,Ws=3,zi=0,Xn=1,gi=2,Vi=0,Xs=1,Yu=2,ju=3,Zu=4,Ff=5;var $r=100,Nf=101,Uf=102,Of=103,Bf=104,kf=200,zf=201,Vf=202,Gf=203,Ju=204,Ku=205,Hf=206,Wf=207,Xf=208,$f=209,qf=210,Yf=211,jf=212,Zf=213,Jf=214,sl=0,al=1,ol=2,Ls=3,ll=4,cl=5,ul=6,hl=7,Qu=0,Kf=1,Qf=2,Ii=0,eh=1,th=2,nh=3,ih=4,rh=5,sh=6,ah=7;var oh=300,Er=301,qr=302,Ol=303,Bl=304,Za=306,dl=1e3,Bi=1001,fl=1002,Sn=1003,ep=1004;var Ja=1005;var Mn=1006,kl=1007;var Tr=1008;var Kn=1009,lh=1010,ch=1011,$s=1012,zl=1013,Li=1014,Di=1015,Fi=1016,Vl=1017,Gl=1018,qs=1020,uh=35902,hh=35899,dh=1021,fh=1022,_i=1023,ki=1026,Ar=1027,ph=1028,Hl=1029,Cr=1030,Wl=1031;var Xl=1033,Ka=33776,Qa=33777,eo=33778,to=33779,$l=35840,ql=35841,Yl=35842,jl=35843,Zl=36196,Jl=37492,Kl=37496,Ql=37488,ec=37489,no=37490,tc=37491,nc=37808,ic=37809,rc=37810,sc=37811,ac=37812,oc=37813,lc=37814,cc=37815,uc=37816,hc=37817,dc=37818,fc=37819,pc=37820,mc=37821,gc=36492,_c=36494,vc=36495,yc=36283,xc=36284,io=36285,bc=36286;var Ca=2300,pl=2301,il=2302,zu=2303,Vu=2400,Gu=2401,Hu=2402;var tp=3200;var Sc=0,np=1,tr="",Vn="srgb",Ra="srgb-linear",Pa="linear",qt="srgb";var rl=7680;var ip=519,rp=512,sp=513,ap=514,wc=515,op=516,lp=517,Mc=518,cp=519,up=35044;var mh="300 es",Ci=2e3,Ds=2001;function ix(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hp(){let n=Ia("canvas");return n.style.display="block",n}var cf={},Fs=null;function gh(...n){let e="THREE."+n.shift();Fs?Fs("log",e,...n):console.log(e,...n)}function dp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function dt(...n){n=dp(n);let e="THREE."+n.shift();if(Fs)Fs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ft(...n){n=dp(n);let e="THREE."+n.shift();if(Fs)Fs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Wr(...n){let e=n.join(" ");e in cf||(cf[e]=!0,dt(...n))}function fp(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var pp={[sl]:al,[ol]:ul,[ll]:hl,[Ls]:cl,[al]:sl,[ul]:ol,[hl]:ll,[cl]:Ls},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uf=1234567,Ta=Math.PI/180,Ns=180/Math.PI;function Ys(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function _h(n,e){return(n%e+e)%e}function sx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ax(n,e,t){return n!==e?(t-n)/(e-n):0}function Aa(n,e,t){return(1-t)*n+t*e}function ox(n,e,t,i){return Aa(n,e,1-Math.exp(-t*i))}function lx(n,e=1){return e-Math.abs(_h(n,e*2)-e)}function cx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ux(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function dx(n,e){return n+Math.random()*(e-n)}function fx(n){return n*(.5-Math.random())}function px(n){n!==void 0&&(uf=n);let e=uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mx(n){return n*Ta}function gx(n){return n*Ns}function _x(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function vx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xx(n,e,t,i,r){let o=Math.cos,l=Math.sin,u=o(t/2),h=l(t/2),d=o((e+i)/2),m=l((e+i)/2),_=o((e-i)/2),p=l((e-i)/2),y=o((i-e)/2),E=l((i-e)/2);switch(r){case"XYX":n.set(u*m,h*_,h*p,u*d);break;case"YZY":n.set(h*p,u*m,h*_,u*d);break;case"ZXZ":n.set(h*_,h*p,u*m,u*d);break;case"XZX":n.set(u*m,h*E,h*y,u*d);break;case"YXY":n.set(h*y,u*m,h*E,u*d);break;case"ZYZ":n.set(h*E,h*y,u*m,u*d);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vh={DEG2RAD:Ta,RAD2DEG:Ns,generateUUID:Ys,clamp:Lt,euclideanModulo:_h,mapLinear:sx,inverseLerp:ax,lerp:Aa,damp:ox,pingpong:lx,smoothstep:cx,smootherstep:ux,randInt:hx,randFloat:dx,randFloatSpread:fx,seededRandom:px,degToRad:mx,radToDeg:gx,isPowerOfTwo:_x,ceilPowerOfTwo:vx,floorPowerOfTwo:yx,setQuaternionFromProperEuler:xx,normalize:zn,denormalize:Ps},wh=class wh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wh.prototype.isVector2=!0;var pt=wh,Hn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,l,u){let h=i[r+0],d=i[r+1],m=i[r+2],_=i[r+3],p=o[l+0],y=o[l+1],E=o[l+2],F=o[l+3];if(_!==F||h!==p||d!==y||m!==E){let S=h*p+d*y+m*E+_*F;S<0&&(p=-p,y=-y,E=-E,F=-F,S=-S);let v=1-u;if(S<.9995){let U=Math.acos(S),k=Math.sin(U);v=Math.sin(v*U)/k,u=Math.sin(u*U)/k,h=h*v+p*u,d=d*v+y*u,m=m*v+E*u,_=_*v+F*u}else{h=h*v+p*u,d=d*v+y*u,m=m*v+E*u,_=_*v+F*u;let U=1/Math.sqrt(h*h+d*d+m*m+_*_);h*=U,d*=U,m*=U,_*=U}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,r,o,l){let u=i[r],h=i[r+1],d=i[r+2],m=i[r+3],_=o[l],p=o[l+1],y=o[l+2],E=o[l+3];return e[t]=u*E+m*_+h*y-d*p,e[t+1]=h*E+m*p+d*_-u*y,e[t+2]=d*E+m*y+u*p-h*_,e[t+3]=m*E-u*_-h*p-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,l=e._order,u=Math.cos,h=Math.sin,d=u(i/2),m=u(r/2),_=u(o/2),p=h(i/2),y=h(r/2),E=h(o/2);switch(l){case"XYZ":this._x=p*m*_+d*y*E,this._y=d*y*_-p*m*E,this._z=d*m*E+p*y*_,this._w=d*m*_-p*y*E;break;case"YXZ":this._x=p*m*_+d*y*E,this._y=d*y*_-p*m*E,this._z=d*m*E-p*y*_,this._w=d*m*_+p*y*E;break;case"ZXY":this._x=p*m*_-d*y*E,this._y=d*y*_+p*m*E,this._z=d*m*E+p*y*_,this._w=d*m*_-p*y*E;break;case"ZYX":this._x=p*m*_-d*y*E,this._y=d*y*_+p*m*E,this._z=d*m*E-p*y*_,this._w=d*m*_+p*y*E;break;case"YZX":this._x=p*m*_+d*y*E,this._y=d*y*_+p*m*E,this._z=d*m*E-p*y*_,this._w=d*m*_-p*y*E;break;case"XZY":this._x=p*m*_-d*y*E,this._y=d*y*_-p*m*E,this._z=d*m*E+p*y*_,this._w=d*m*_+p*y*E;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],l=t[1],u=t[5],h=t[9],d=t[2],m=t[6],_=t[10],p=i+u+_;if(p>0){let y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(m-h)*y,this._y=(o-d)*y,this._z=(l-r)*y}else if(i>u&&i>_){let y=2*Math.sqrt(1+i-u-_);this._w=(m-h)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(o+d)/y}else if(u>_){let y=2*Math.sqrt(1+u-i-_);this._w=(o-d)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(h+m)/y}else{let y=2*Math.sqrt(1+_-i-u);this._w=(l-r)/y,this._x=(o+d)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,l=e._w,u=t._x,h=t._y,d=t._z,m=t._w;return this._x=i*m+l*u+r*d-o*h,this._y=r*m+l*h+o*u-i*d,this._z=o*m+l*d+i*h-r*u,this._w=l*m-i*u-r*h-o*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,l=e._w,u=this.dot(e);u<0&&(i=-i,r=-r,o=-o,l=-l,u=-u);let h=1-t;if(u<.9995){let d=Math.acos(u),m=Math.sin(d);h=Math.sin(h*d)/m,t=Math.sin(t*d)/m,this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+o*t,this._w=this._w*h+l*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+o*t,this._w=this._w*h+l*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mh=class Mh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,l=e.y,u=e.z,h=e.w,d=2*(l*r-u*i),m=2*(u*t-o*r),_=2*(o*i-l*t);return this.x=t+h*d+l*_-u*m,this.y=i+h*m+u*d-o*_,this.z=r+h*_+o*m-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,l=t.x,u=t.y,h=t.z;return this.x=r*h-o*u,this.y=o*l-i*h,this.z=i*u-r*l,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mh.prototype.isVector3=!0;var ie=Mh,yu=new ie,hf=new Hn,Eh=class Eh{constructor(e,t,i,r,o,l,u,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,l,u,h,d)}set(e,t,i,r,o,l,u,h,d){let m=this.elements;return m[0]=e,m[1]=r,m[2]=u,m[3]=t,m[4]=o,m[5]=h,m[6]=i,m[7]=l,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,l=i[0],u=i[3],h=i[6],d=i[1],m=i[4],_=i[7],p=i[2],y=i[5],E=i[8],F=r[0],S=r[3],v=r[6],U=r[1],k=r[4],R=r[7],D=r[2],A=r[5],O=r[8];return o[0]=l*F+u*U+h*D,o[3]=l*S+u*k+h*A,o[6]=l*v+u*R+h*O,o[1]=d*F+m*U+_*D,o[4]=d*S+m*k+_*A,o[7]=d*v+m*R+_*O,o[2]=p*F+y*U+E*D,o[5]=p*S+y*k+E*A,o[8]=p*v+y*R+E*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],d=e[7],m=e[8];return t*l*m-t*u*d-i*o*m+i*u*h+r*o*d-r*l*h}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],d=e[7],m=e[8],_=m*l-u*d,p=u*h-m*o,y=d*o-l*h,E=t*_+i*p+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let F=1/E;return e[0]=_*F,e[1]=(r*d-m*i)*F,e[2]=(u*i-r*l)*F,e[3]=p*F,e[4]=(m*t-r*h)*F,e[5]=(r*o-u*t)*F,e[6]=y*F,e[7]=(i*h-d*t)*F,e[8]=(l*t-i*o)*F,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,l,u){let h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*l+d*u)+l+e,-r*d,r*h,-r*(-d*l+h*u)+u+t,0,0,1),this}scale(e,t){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xu.makeScale(e,t)),this}rotate(e){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;var wt=Eh,xu=new wt,df=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ff=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bx(){let n={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===qt&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===qt&&(r.r=Is(r.r),r.g=Is(r.g),r.b=Is(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Pa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ra]:{primaries:e,whitePoint:i,transfer:Pa,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:qt,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),n}var zt=bx();function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _s,ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Ia("canvas")),_s.width=e.width,_s.height=e.height;let r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ia("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Qi(o[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sx=0,Us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(bu(r[l].image)):o.push(bu(r[l]))}else o=bu(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ml.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}var wx=0,Su=new ie,jn=class n extends Pi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Bi,r=Bi,o=Mn,l=Tr,u=_i,h=Kn,d=n.DEFAULT_ANISOTROPY,m=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ys(),this.name="",this.source=new Us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=oh;jn.DEFAULT_ANISOTROPY=1;var Th=class Th{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,h=e.elements,d=h[0],m=h[4],_=h[8],p=h[1],y=h[5],E=h[9],F=h[2],S=h[6],v=h[10];if(Math.abs(m-p)<.01&&Math.abs(_-F)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+p)<.1&&Math.abs(_+F)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let k=(d+1)/2,R=(y+1)/2,D=(v+1)/2,A=(m+p)/4,O=(_+F)/4,T=(E+S)/4;return k>R&&k>D?k<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(k),r=A/i,o=O/i):R>D?R<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(R),i=A/r,o=T/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=O/o,r=T/o),this.set(i,r,o,t),this}let U=Math.sqrt((S-E)*(S-E)+(_-F)*(_-F)+(p-m)*(p-m));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(_-F)/U,this.z=(p-m)/U,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Th.prototype.isVector4=!0;var ln=Th,gl=class extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},o=new jn(r),l=i.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Us(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends gl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},La=class extends jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ul=class Ul{constructor(e,t,i,r,o,l,u,h,d,m,_,p,y,E,F,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,l,u,h,d,m,_,p,y,E,F,S)}set(e,t,i,r,o,l,u,h,d,m,_,p,y,E,F,S){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=o,v[5]=l,v[9]=u,v[13]=h,v[2]=d,v[6]=m,v[10]=_,v[14]=p,v[3]=y,v[7]=E,v[11]=F,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),o=1/vs.setFromMatrixColumn(e,1).length(),l=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r),m=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){let p=l*m,y=l*_,E=u*m,F=u*_;t[0]=h*m,t[4]=-h*_,t[8]=d,t[1]=y+E*d,t[5]=p-F*d,t[9]=-u*h,t[2]=F-p*d,t[6]=E+y*d,t[10]=l*h}else if(e.order==="YXZ"){let p=h*m,y=h*_,E=d*m,F=d*_;t[0]=p+F*u,t[4]=E*u-y,t[8]=l*d,t[1]=l*_,t[5]=l*m,t[9]=-u,t[2]=y*u-E,t[6]=F+p*u,t[10]=l*h}else if(e.order==="ZXY"){let p=h*m,y=h*_,E=d*m,F=d*_;t[0]=p-F*u,t[4]=-l*_,t[8]=E+y*u,t[1]=y+E*u,t[5]=l*m,t[9]=F-p*u,t[2]=-l*d,t[6]=u,t[10]=l*h}else if(e.order==="ZYX"){let p=l*m,y=l*_,E=u*m,F=u*_;t[0]=h*m,t[4]=E*d-y,t[8]=p*d+F,t[1]=h*_,t[5]=F*d+p,t[9]=y*d-E,t[2]=-d,t[6]=u*h,t[10]=l*h}else if(e.order==="YZX"){let p=l*h,y=l*d,E=u*h,F=u*d;t[0]=h*m,t[4]=F-p*_,t[8]=E*_+y,t[1]=_,t[5]=l*m,t[9]=-u*m,t[2]=-d*m,t[6]=y*_+E,t[10]=p-F*_}else if(e.order==="XZY"){let p=l*h,y=l*d,E=u*h,F=u*d;t[0]=h*m,t[4]=-_,t[8]=d*m,t[1]=p*_+F,t[5]=l*m,t[9]=y*_-E,t[2]=E*_-y,t[6]=u*m,t[10]=F*_+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mx,e,Ex)}lookAt(e,t,i){let r=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ur.crossVectors(i,ai),ur.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ur.crossVectors(i,ai)),ur.normalize(),Bo.crossVectors(ai,ur),r[0]=ur.x,r[4]=Bo.x,r[8]=ai.x,r[1]=ur.y,r[5]=Bo.y,r[9]=ai.y,r[2]=ur.z,r[6]=Bo.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,l=i[0],u=i[4],h=i[8],d=i[12],m=i[1],_=i[5],p=i[9],y=i[13],E=i[2],F=i[6],S=i[10],v=i[14],U=i[3],k=i[7],R=i[11],D=i[15],A=r[0],O=r[4],T=r[8],N=r[12],H=r[1],Z=r[5],W=r[9],Y=r[13],q=r[2],j=r[6],X=r[10],ce=r[14],be=r[3],de=r[7],$=r[11],ye=r[15];return o[0]=l*A+u*H+h*q+d*be,o[4]=l*O+u*Z+h*j+d*de,o[8]=l*T+u*W+h*X+d*$,o[12]=l*N+u*Y+h*ce+d*ye,o[1]=m*A+_*H+p*q+y*be,o[5]=m*O+_*Z+p*j+y*de,o[9]=m*T+_*W+p*X+y*$,o[13]=m*N+_*Y+p*ce+y*ye,o[2]=E*A+F*H+S*q+v*be,o[6]=E*O+F*Z+S*j+v*de,o[10]=E*T+F*W+S*X+v*$,o[14]=E*N+F*Y+S*ce+v*ye,o[3]=U*A+k*H+R*q+D*be,o[7]=U*O+k*Z+R*j+D*de,o[11]=U*T+k*W+R*X+D*$,o[15]=U*N+k*Y+R*ce+D*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],l=e[1],u=e[5],h=e[9],d=e[13],m=e[2],_=e[6],p=e[10],y=e[14],E=e[3],F=e[7],S=e[11],v=e[15],U=h*y-d*p,k=u*y-d*_,R=u*p-h*_,D=l*y-d*m,A=l*p-h*m,O=l*_-u*m;return t*(F*U-S*k+v*R)-i*(E*U-S*D+v*A)+r*(E*k-F*D+v*O)-o*(E*R-F*A+S*O)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[1],l=e[5],u=e[9],h=e[2],d=e[6],m=e[10];return t*(l*m-u*d)-i*(o*m-u*h)+r*(o*d-l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],d=e[7],m=e[8],_=e[9],p=e[10],y=e[11],E=e[12],F=e[13],S=e[14],v=e[15],U=t*u-i*l,k=t*h-r*l,R=t*d-o*l,D=i*h-r*u,A=i*d-o*u,O=r*d-o*h,T=m*F-_*E,N=m*S-p*E,H=m*v-y*E,Z=_*S-p*F,W=_*v-y*F,Y=p*v-y*S,q=U*Y-k*W+R*Z+D*H-A*N+O*T;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/q;return e[0]=(u*Y-h*W+d*Z)*j,e[1]=(r*W-i*Y-o*Z)*j,e[2]=(F*O-S*A+v*D)*j,e[3]=(p*A-_*O-y*D)*j,e[4]=(h*H-l*Y-d*N)*j,e[5]=(t*Y-r*H+o*N)*j,e[6]=(S*R-E*O-v*k)*j,e[7]=(m*O-p*R+y*k)*j,e[8]=(l*W-u*H+d*T)*j,e[9]=(i*H-t*W-o*T)*j,e[10]=(E*A-F*R+v*U)*j,e[11]=(_*R-m*A-y*U)*j,e[12]=(u*N-l*Z-h*T)*j,e[13]=(t*Z-i*N+r*T)*j,e[14]=(F*k-E*D-S*U)*j,e[15]=(m*D-_*k+p*U)*j,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,l=e.x,u=e.y,h=e.z,d=o*l,m=o*u;return this.set(d*l+i,d*u-r*h,d*h+r*u,0,d*u+r*h,m*u+i,m*h-r*l,0,d*h-r*u,m*h+r*l,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,l=t._y,u=t._z,h=t._w,d=o+o,m=l+l,_=u+u,p=o*d,y=o*m,E=o*_,F=l*m,S=l*_,v=u*_,U=h*d,k=h*m,R=h*_,D=i.x,A=i.y,O=i.z;return r[0]=(1-(F+v))*D,r[1]=(y+R)*D,r[2]=(E-k)*D,r[3]=0,r[4]=(y-R)*A,r[5]=(1-(p+v))*A,r[6]=(S+U)*A,r[7]=0,r[8]=(E+k)*O,r[9]=(S-U)*O,r[10]=(1-(p+F))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let l=vs.set(r[0],r[1],r[2]).length(),u=vs.set(r[4],r[5],r[6]).length(),h=vs.set(r[8],r[9],r[10]).length();o<0&&(l=-l),Ei.copy(this);let d=1/l,m=1/u,_=1/h;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=m,Ei.elements[5]*=m,Ei.elements[6]*=m,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,t.setFromRotationMatrix(Ei),i.x=l,i.y=u,i.z=h,this}makePerspective(e,t,i,r,o,l,u=Ci,h=!1){let d=this.elements,m=2*o/(t-e),_=2*o/(i-r),p=(t+e)/(t-e),y=(i+r)/(i-r),E,F;if(h)E=o/(l-o),F=l*o/(l-o);else if(u===Ci)E=-(l+o)/(l-o),F=-2*l*o/(l-o);else if(u===Ds)E=-l/(l-o),F=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=F,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,r,o,l,u=Ci,h=!1){let d=this.elements,m=2/(t-e),_=2/(i-r),p=-(t+e)/(t-e),y=-(i+r)/(i-r),E,F;if(h)E=1/(l-o),F=l/(l-o);else if(u===Ci)E=-2/(l-o),F=-(l+o)/(l-o);else if(u===Ds)E=-1/(l-o),F=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=0,d[12]=p,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=F,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ul.prototype.isMatrix4=!0;var rn=Ul,vs=new ie,Ei=new rn,Mx=new ie(0,0,0),Ex=new ie(1,1,1),ur=new ie,Bo=new ie,ai=new ie,pf=new rn,mf=new Hn,er=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,o=r[0],l=r[4],u=r[8],h=r[1],d=r[5],m=r[9],_=r[2],p=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Lt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mf.setFromEuler(this),this.setFromQuaternion(mf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};er.DEFAULT_ORDER="XYZ";var Da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tx=0,gf=new ie,ys=new Hn,Yi=new rn,ko=new ie,Sa=new ie,Ax=new ie,Cx=new Hn,_f=new ie(1,0,0),vf=new ie(0,1,0),yf=new ie(0,0,1),xf={type:"added"},Rx={type:"removed"},xs={type:"childadded",child:null},wu={type:"childremoved",child:null},Nn=class n extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new ie,t=new er,i=new Hn,r=new ie(1,1,1);function o(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rn},normalMatrix:{value:new wt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(vf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return gf.copy(e).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(vf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ko.copy(e):ko.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Sa,ko,this.up):Yi.lookAt(ko,Sa,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Yi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),xs.child=e,this.dispatchEvent(xs),xs.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rx),wu.child=e,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,Ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,Cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*r,o[13]+=i-o[1]*t-o[5]*i-o[9]*r,o[14]+=r-o[2]*t-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let h=u.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){let _=h[d];o(e.shapes,_)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(o(e.materials,this.material[h]));r.material=u}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){let h=this.animations[u];r.animations.push(o(e.animations,h))}}if(t){let u=l(e.geometries),h=l(e.materials),d=l(e.textures),m=l(e.images),_=l(e.shapes),p=l(e.skeletons),y=l(e.animations),E=l(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),p.length>0&&(i.skeletons=p),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=r,i;function l(u){let h=[];for(let d in u){let m=u[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new ie(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Px={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,l=null,u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(let F of e.hand.values()){let S=t.getJointPose(F,i),v=this._getHandJoint(d,F);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}let m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],p=m.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&p>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var At=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=zt.workingColorSpace){if(e=_h(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,l=2*i-o;this.r=Mu(l,o,e+1/3),this.g=Mu(l,o,e),this.b=Mu(l,o,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vn){function i(o){o!==void 0&&parseFloat(o)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){let i=mp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return zt.workingToColorSpace(Dn.copy(this),e),Math.round(Lt(Dn.r*255,0,255))*65536+Math.round(Lt(Dn.g*255,0,255))*256+Math.round(Lt(Dn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Dn.copy(this),t);let i=Dn.r,r=Dn.g,o=Dn.b,l=Math.max(i,r,o),u=Math.min(i,r,o),h,d,m=(u+l)/2;if(u===l)h=0,d=0;else{let _=l-u;switch(d=m<=.5?_/(l+u):_/(2-l-u),l){case i:h=(r-o)/_+(r<o?6:0);break;case r:h=(o-i)/_+2;break;case o:h=(i-r)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Vn){zt.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,i=Dn.g,r=Dn.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+t,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hr),e.getHSL(zo);let i=Aa(hr.h,zo.h,t),r=Aa(hr.s,zo.s,t),o=Aa(hr.l,zo.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new At;At.NAMES=mp;var Fa=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new ie,ji=new ie,Eu=new ie,Zi=new ie,bs=new ie,Ss=new ie,bf=new ie,Tu=new ie,Au=new ie,Cu=new ie,Ru=new ln,Pu=new ln,Iu=new ln,mr=class n{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ti.subVectors(e,t),r.cross(Ti);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Ti.subVectors(r,t),ji.subVectors(i,t),Eu.subVectors(e,t);let l=Ti.dot(Ti),u=Ti.dot(ji),h=Ti.dot(Eu),d=ji.dot(ji),m=ji.dot(Eu),_=l*d-u*u;if(_===0)return o.set(0,0,0),null;let p=1/_,y=(d*h-u*m)*p,E=(l*m-u*h)*p;return o.set(1-y-E,E,y)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,r,o,l,u,h){return this.getBarycoord(e,t,i,r,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Zi.x),h.addScaledVector(l,Zi.y),h.addScaledVector(u,Zi.z),h)}static getInterpolatedAttribute(e,t,i,r,o,l){return Ru.setScalar(0),Pu.setScalar(0),Iu.setScalar(0),Ru.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,i),Iu.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Ru,o.x),l.addScaledVector(Pu,o.y),l.addScaledVector(Iu,o.z),l}static isFrontFacing(e,t,i,r){return Ti.subVectors(i,t),ji.subVectors(e,t),Ti.cross(ji).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Ti.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,l,u;bs.subVectors(r,i),Ss.subVectors(o,i),Tu.subVectors(e,i);let h=bs.dot(Tu),d=Ss.dot(Tu);if(h<=0&&d<=0)return t.copy(i);Au.subVectors(e,r);let m=bs.dot(Au),_=Ss.dot(Au);if(m>=0&&_<=m)return t.copy(r);let p=h*_-m*d;if(p<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(i).addScaledVector(bs,l);Cu.subVectors(e,o);let y=bs.dot(Cu),E=Ss.dot(Cu);if(E>=0&&y<=E)return t.copy(o);let F=y*d-h*E;if(F<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(i).addScaledVector(Ss,u);let S=m*E-y*_;if(S<=0&&_-m>=0&&y-E>=0)return bf.subVectors(o,r),u=(_-m)/(_-m+(y-E)),t.copy(r).addScaledVector(bf,u);let v=1/(S+F+p);return l=F*v,u=p*v,t.copy(i).addScaledVector(bs,l).addScaledVector(Ss,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gr=class{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Ai):Ai.fromBufferAttribute(o,l),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Go.subVectors(this.max,wa),ws.subVectors(e.a,wa),Ms.subVectors(e.b,wa),Es.subVectors(e.c,wa),dr.subVectors(Ms,ws),fr.subVectors(Es,Ms),zr.subVectors(ws,Es);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-zr.y,zr.x,0];return!Lu(t,ws,Ms,Es,Go)||(t=[1,0,0,0,1,0,0,0,1],!Lu(t,ws,Ms,Es,Go))?!1:(Ho.crossVectors(dr,fr),t=[Ho.x,Ho.y,Ho.z],Lu(t,ws,Ms,Es,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ji=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ai=new ie,Vo=new gr,ws=new ie,Ms=new ie,Es=new ie,dr=new ie,fr=new ie,zr=new ie,wa=new ie,Go=new ie,Ho=new ie,Vr=new ie;function Lu(n,e,t,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Vr.fromArray(n,o);let u=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),h=e.dot(Vr),d=t.dot(Vr),m=i.dot(Vr);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>u)return!1}return!0}var mn=new ie,Wo=new pt,Ix=0,Gn=class extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=up,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),r=zn(r,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Na=class extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ua=class extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dn=class extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Lx=new gr,Ma=new ie,Du=new ie,Bs=class{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lx.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Du)),this.expandByPoint(Ma.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dx=0,mi=new rn,Fu=new Nn,Ts=new ie,oi=new gr,Ea=new gr,bn=new ie,Wn=class n extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?Ua:Na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new wt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,i){return mi.makeTranslation(e,t,i),this.applyMatrix4(mi),this}scale(e,t,i){return mi.makeScale(e,t,i),this.applyMatrix4(mi),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let l=e[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new dn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];oi.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){let i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){let u=t[o];Ea.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(oi.min,Ea.min),oi.expandByPoint(bn),bn.addVectors(oi.max,Ea.max),oi.expandByPoint(bn)):(oi.expandByPoint(Ea.min),oi.expandByPoint(Ea.max))}oi.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)bn.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(bn));if(t)for(let o=0,l=t.length;o<l;o++){let u=t[o],h=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)bn.fromBufferAttribute(u,d),h&&(Ts.fromBufferAttribute(e,d),bn.add(Ts)),r=Math.max(r,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new Gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new ie,h[T]=new ie;let d=new ie,m=new ie,_=new ie,p=new pt,y=new pt,E=new pt,F=new ie,S=new ie;function v(T,N,H){d.fromBufferAttribute(i,T),m.fromBufferAttribute(i,N),_.fromBufferAttribute(i,H),p.fromBufferAttribute(o,T),y.fromBufferAttribute(o,N),E.fromBufferAttribute(o,H),m.sub(d),_.sub(d),y.sub(p),E.sub(p);let Z=1/(y.x*E.y-E.x*y.y);isFinite(Z)&&(F.copy(m).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(Z),S.copy(_).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(Z),u[T].add(F),u[N].add(F),u[H].add(F),h[T].add(S),h[N].add(S),h[H].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let T=0,N=U.length;T<N;++T){let H=U[T],Z=H.start,W=H.count;for(let Y=Z,q=Z+W;Y<q;Y+=3)v(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let k=new ie,R=new ie,D=new ie,A=new ie;function O(T){D.fromBufferAttribute(r,T),A.copy(D);let N=u[T];k.copy(N),k.sub(D.multiplyScalar(D.dot(N))).normalize(),R.crossVectors(A,N);let Z=R.dot(h[T])<0?-1:1;l.setXYZW(T,k.x,k.y,k.z,Z)}for(let T=0,N=U.length;T<N;++T){let H=U[T],Z=H.start,W=H.count;for(let Y=Z,q=Z+W;Y<q;Y+=3)O(e.getX(Y+0)),O(e.getX(Y+1)),O(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,y=i.count;p<y;p++)i.setXYZ(p,0,0,0);let r=new ie,o=new ie,l=new ie,u=new ie,h=new ie,d=new ie,m=new ie,_=new ie;if(e)for(let p=0,y=e.count;p<y;p+=3){let E=e.getX(p+0),F=e.getX(p+1),S=e.getX(p+2);r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,F),l.fromBufferAttribute(t,S),m.subVectors(l,o),_.subVectors(r,o),m.cross(_),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,F),d.fromBufferAttribute(i,S),u.add(m),h.add(m),d.add(m),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(F,h.x,h.y,h.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let p=0,y=t.count;p<y;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),m.subVectors(l,o),_.subVectors(r,o),m.cross(_),i.setXYZ(p+0,m.x,m.y,m.z),i.setXYZ(p+1,m.x,m.y,m.z),i.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(u,h){let d=u.array,m=u.itemSize,_=u.normalized,p=new d.constructor(h.length*m),y=0,E=0;for(let F=0,S=h.length;F<S;F++){u.isInterleavedBufferAttribute?y=h[F]*u.data.stride+u.offset:y=h[F]*m;for(let v=0;v<m;v++)p[E++]=d[y++]}return new Gn(p,m,_)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let u in r){let h=r[u],d=e(h,i);t.setAttribute(u,d)}let o=this.morphAttributes;for(let u in o){let h=[],d=o[u];for(let m=0,_=d.length;m<_;m++){let p=d[m],y=e(p,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let u=0,h=l.length;u<h;u++){let d=l[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let h in i){let d=i[h];e.data.attributes[h]=d.toJSON(e.data)}let r={},o=!1;for(let h in this.morphAttributes){let d=this.morphAttributes[h],m=[];for(let _=0,p=d.length;_<p;_++){let y=d[_];m.push(y.toJSON(e.data))}m.length>0&&(r[h]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));let u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let d in r){let m=r[d];this.setAttribute(d,m.clone(t))}let o=e.morphAttributes;for(let d in o){let m=[],_=o[d];for(let p=0,y=_.length;p<y;p++)m.push(_[p].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;let l=e.groups;for(let d=0,m=l.length;d<m;d++){let _=l[d];this.addGroup(_.start,_.count,_.materialIndex)}let u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nu=new ie,Fx=new ie,Nx=new wt,li=class{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Nu.subVectors(i,t).cross(Fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Nu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let l=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Nx.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ux=0,_r=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Xs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=Ku,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let l=[];for(let u in o){let h=o[u];delete h.metadata,l.push(h)}return l}if(t){let o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ki=new ie,Uu=new ie,Xo=new ie,$o=new ie,ks=class{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uu.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),$o.copy(this.origin).sub(Uu);let o=e.distanceTo(t)*.5,l=-this.direction.dot(Xo),u=$o.dot(this.direction),h=-$o.dot(Xo),d=$o.lengthSq(),m=Math.abs(1-l*l),_,p,y,E;if(m>0)if(_=l*h-u,p=l*u-h,E=o*m,_>=0)if(p>=-E)if(p<=E){let F=1/m;_*=F,p*=F,y=_*(_+l*p+2*u)+p*(l*_+p+2*h)+d}else p=o,_=Math.max(0,-(l*p+u)),y=-_*_+p*(p+2*h)+d;else p=-o,_=Math.max(0,-(l*p+u)),y=-_*_+p*(p+2*h)+d;else p<=-E?(_=Math.max(0,-(-l*o+u)),p=_>0?-o:Math.min(Math.max(-o,-h),o),y=-_*_+p*(p+2*h)+d):p<=E?(_=0,p=Math.min(Math.max(-o,-h),o),y=p*(p+2*h)+d):(_=Math.max(0,-(l*o+u)),p=_>0?o:Math.min(Math.max(-o,-h),o),y=-_*_+p*(p+2*h)+d);else p=l>0?-o:o,_=Math.max(0,-(l*p+u)),y=-_*_+p*(p+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Uu).addScaledVector(Xo,p),y}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let i=Ki.dot(this.direction),r=Ki.dot(Ki)-i*i,o=e.radius*e.radius;if(r>o)return null;let l=Math.sqrt(o-r),u=i-l,h=i+l;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,l,u,h,d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,p=this.origin;return d>=0?(i=(e.min.x-p.x)*d,r=(e.max.x-p.x)*d):(i=(e.max.x-p.x)*d,r=(e.min.x-p.x)*d),m>=0?(o=(e.min.y-p.y)*m,l=(e.max.y-p.y)*m):(o=(e.max.y-p.y)*m,l=(e.min.y-p.y)*m),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),_>=0?(u=(e.min.z-p.z)*_,h=(e.max.z-p.z)*_):(u=(e.max.z-p.z)*_,h=(e.min.z-p.z)*_),i>h||u>r)||((u>i||i!==i)&&(i=u),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,r,o){let l=this.origin,u=this.direction,h=u.x,d=u.y,m=u.z,_=e.x-l.x,p=e.y-l.y,y=e.z-l.z,E=t.x-l.x,F=t.y-l.y,S=t.z-l.z,v=i.x-l.x,U=i.y-l.y,k=i.z-l.z,R=Math.abs(h),D=Math.abs(d),A=Math.abs(m),O,T,N,H,Z,W,Y,q,j,X,ce,be;if(R>=D&&R>=A?(N=h,W=_,j=E,be=v,h>=0?(O=d,T=m,H=p,Z=y,Y=F,q=S,X=U,ce=k):(O=m,T=d,H=y,Z=p,Y=S,q=F,X=k,ce=U)):D>=A?(N=d,W=p,j=F,be=U,d>=0?(O=m,T=h,H=y,Z=_,Y=S,q=E,X=k,ce=v):(O=h,T=m,H=_,Z=y,Y=E,q=S,X=v,ce=k)):(N=m,W=y,j=S,be=k,m>=0?(O=h,T=d,H=_,Z=p,Y=E,q=F,X=v,ce=U):(O=d,T=h,H=p,Z=_,Y=F,q=E,X=U,ce=v)),N===0)return null;let de=O/N,$=T/N,ye=1/N,et=H-de*W,Je=Z-$*W,Dt=Y-de*j,mt=q-$*j,Ee=X-de*be,se=ce-$*be,fe=Ee*mt-se*Dt,Pe=et*se-Je*Ee,Ge=Dt*Je-mt*et;if(r){if(fe<0||Pe<0||Ge<0)return null}else if((fe<0||Pe<0||Ge<0)&&(fe>0||Pe>0||Ge>0))return null;let we=fe+Pe+Ge;if(we===0)return null;let gt=ye*(fe*W+Pe*j+Ge*be);return(we>0?gt<0:gt>0)?null:this.at(gt/we,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oa=class extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sf=new rn,Gr=new ks,qo=new Bs,wf=new ie,Yo=new ie,jo=new ie,Zo=new ie,Ou=new ie,Jo=new ie,Mf=new ie,Ko=new ie,Jn=class extends Nn{constructor(e=new Wn,t=new Oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let u=this.morphTargetInfluences;if(o&&u){Jo.set(0,0,0);for(let h=0,d=o.length;h<d;h++){let m=u[h],_=o[h];m!==0&&(Ou.fromBufferAttribute(_,e),l?Jo.addScaledVector(Ou,m):Jo.addScaledVector(Ou.sub(t),m))}t.add(Jo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(o),Gr.copy(e.ray).recast(e.near),!(qo.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(qo,wf)===null||Gr.origin.distanceToSquared(wf)>(e.far-e.near)**2))&&(Sf.copy(o).invert(),Gr.copy(e.ray).applyMatrix4(Sf),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,i){let r,o=this.geometry,l=this.material,u=o.index,h=o.attributes.position,d=o.attributes.uv,m=o.attributes.uv1,_=o.attributes.normal,p=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,F=p.length;E<F;E++){let S=p[E],v=l[S.materialIndex],U=Math.max(S.start,y.start),k=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let R=U,D=k;R<D;R+=3){let A=u.getX(R),O=u.getX(R+1),T=u.getX(R+2);r=Qo(this,v,e,i,d,m,_,A,O,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{let E=Math.max(0,y.start),F=Math.min(u.count,y.start+y.count);for(let S=E,v=F;S<v;S+=3){let U=u.getX(S),k=u.getX(S+1),R=u.getX(S+2);r=Qo(this,l,e,i,d,m,_,U,k,R),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let E=0,F=p.length;E<F;E++){let S=p[E],v=l[S.materialIndex],U=Math.max(S.start,y.start),k=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let R=U,D=k;R<D;R+=3){let A=R,O=R+1,T=R+2;r=Qo(this,v,e,i,d,m,_,A,O,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{let E=Math.max(0,y.start),F=Math.min(h.count,y.start+y.count);for(let S=E,v=F;S<v;S+=3){let U=S,k=S+1,R=S+2;r=Qo(this,l,e,i,d,m,_,U,k,R),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}};function Ox(n,e,t,i,r,o,l,u){let h;if(e.side===Xn?h=i.intersectTriangle(l,o,r,!0,u):h=i.intersectTriangle(r,o,l,e.side===zi,u),h===null)return null;Ko.copy(u),Ko.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(Ko);return d<t.near||d>t.far?null:{distance:d,point:Ko.clone(),object:n}}function Qo(n,e,t,i,r,o,l,u,h,d){n.getVertexPosition(u,Yo),n.getVertexPosition(h,jo),n.getVertexPosition(d,Zo);let m=Ox(n,e,t,i,Yo,jo,Zo,Mf);if(m){let _=new ie;mr.getBarycoord(Mf,Yo,jo,Zo,_),r&&(m.uv=mr.getInterpolatedAttribute(r,u,h,d,_,new pt)),o&&(m.uv1=mr.getInterpolatedAttribute(o,u,h,d,_,new pt)),l&&(m.normal=mr.getInterpolatedAttribute(l,u,h,d,_,new ie),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let p={a:u,b:h,c:d,normal:new ie,materialIndex:0};mr.getNormal(Yo,jo,Zo,p.normal),m.face=p,m.barycoord=_}return m}var vl=class extends jn{constructor(e=null,t=1,i=1,r,o,l,u,h,d=Sn,m=Sn,_,p){super(null,l,u,h,d,m,r,o,_,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hr=new Bs,Bx=new pt(.5,.5),el=new ie,zs=class{constructor(e=new li,t=new li,i=new li,r=new li,o=new li,l=new li){this.planes=[e,t,i,r,o,l]}set(e,t,i,r,o,l){let u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){let r=this.planes,o=e.elements,l=o[0],u=o[1],h=o[2],d=o[3],m=o[4],_=o[5],p=o[6],y=o[7],E=o[8],F=o[9],S=o[10],v=o[11],U=o[12],k=o[13],R=o[14],D=o[15];if(r[0].setComponents(d-l,y-m,v-E,D-U).normalize(),r[1].setComponents(d+l,y+m,v+E,D+U).normalize(),r[2].setComponents(d+u,y+_,v+F,D+k).normalize(),r[3].setComponents(d-u,y-_,v-F,D-k).normalize(),i)r[4].setComponents(h,p,S,R).normalize(),r[5].setComponents(d-h,y-p,v-S,D-R).normalize();else if(r[4].setComponents(d-h,y-p,v-S,D-R).normalize(),t===Ci)r[5].setComponents(d+h,y+p,v+S,D+R).normalize();else if(t===Ds)r[5].setComponents(h,p,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);let t=Bx.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ba=class extends jn{constructor(e=[],t=Er,i,r,o,l,u,h,d,m){super(e,t,i,r,o,l,u,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var vr=class extends jn{constructor(e,t,i=Li,r,o,l,u=Sn,h=Sn,d,m=ki,_=1){if(m!==ki&&m!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:_};super(p,r,o,l,u,h,m,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},yl=class extends vr{constructor(e,t=Li,i=Er,r,o,l=Sn,u=Sn,h,d=ki){let m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,i,r,o,l,u,h,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yr=class n extends Wn{constructor(e=1,t=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};let u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);let h=[],d=[],m=[],_=[],p=0,y=0;E("z","y","x",-1,-1,i,t,e,l,o,0),E("z","y","x",1,-1,i,t,-e,l,o,1),E("x","z","y",1,1,e,i,t,r,l,2),E("x","z","y",1,-1,e,i,-t,r,l,3),E("x","y","z",1,-1,e,t,i,r,o,4),E("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(h),this.setAttribute("position",new dn(d,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(_,2));function E(F,S,v,U,k,R,D,A,O,T,N){let H=R/O,Z=D/T,W=R/2,Y=D/2,q=A/2,j=O+1,X=T+1,ce=0,be=0,de=new ie;for(let $=0;$<X;$++){let ye=$*Z-Y;for(let et=0;et<j;et++){let Je=et*H-W;de[F]=Je*U,de[S]=ye*k,de[v]=q,d.push(de.x,de.y,de.z),de[F]=0,de[S]=0,de[v]=A>0?1:-1,m.push(de.x,de.y,de.z),_.push(et/O),_.push(1-$/T),ce+=1}}for(let $=0;$<T;$++)for(let ye=0;ye<O;ye++){let et=p+ye+j*$,Je=p+ye+j*($+1),Dt=p+(ye+1)+j*($+1),mt=p+(ye+1)+j*$;h.push(et,Je,mt),h.push(Je,Dt,mt),be+=6}u.addGroup(y,be,N),y+=be,p+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},za=class n extends Wn{constructor(e=1,t=1,i=4,r=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:o},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),o=Math.max(1,Math.floor(o));let l=[],u=[],h=[],d=[],m=t/2,_=Math.PI/2*e,p=t,y=2*_+p,E=i*2+o,F=r+1,S=new ie,v=new ie;for(let U=0;U<=E;U++){let k=0,R=0,D=0,A=0;if(U<=i){let N=U/i,H=N*Math.PI/2;R=-m-e*Math.cos(H),D=e*Math.sin(H),A=-e*Math.cos(H),k=N*_}else if(U<=i+o){let N=(U-i)/o;R=-m+N*t,D=e,A=0,k=_+N*p}else{let N=(U-i-o)/i,H=N*Math.PI/2;R=m+e*Math.sin(H),D=e*Math.cos(H),A=e*Math.sin(H),k=_+p+N*_}let O=Math.max(0,Math.min(1,k/y)),T=0;U===0?T=.5/r:U===E&&(T=-.5/r);for(let N=0;N<=r;N++){let H=N/r,Z=H*Math.PI*2,W=Math.sin(Z),Y=Math.cos(Z);v.x=-D*Y,v.y=R,v.z=D*W,u.push(v.x,v.y,v.z),S.set(-D*Y,A,D*W),S.normalize(),h.push(S.x,S.y,S.z),d.push(H+T,O)}if(U>0){let N=(U-1)*F;for(let H=0;H<r;H++){let Z=N+H,W=N+H+1,Y=U*F+H,q=U*F+H+1;l.push(Z,W,Y),l.push(W,q,Y)}}}this.setIndex(l),this.setAttribute("position",new dn(u,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Va=class n extends Wn{constructor(e=1,t=1,i=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h};let d=this;r=Math.floor(r),o=Math.floor(o);let m=[],_=[],p=[],y=[],E=0,F=[],S=i/2,v=0;U(),l===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(p,3)),this.setAttribute("uv",new dn(y,2));function U(){let R=new ie,D=new ie,A=0,O=(t-e)/i;for(let T=0;T<=o;T++){let N=[],H=T/o,Z=H*(t-e)+e;for(let W=0;W<=r;W++){let Y=W/r,q=Y*h+u,j=Math.sin(q),X=Math.cos(q);D.x=Z*j,D.y=-H*i+S,D.z=Z*X,_.push(D.x,D.y,D.z),R.set(j,O,X).normalize(),p.push(R.x,R.y,R.z),y.push(Y,1-H),N.push(E++)}F.push(N)}for(let T=0;T<r;T++)for(let N=0;N<o;N++){let H=F[N][T],Z=F[N+1][T],W=F[N+1][T+1],Y=F[N][T+1];(e>0||N!==0)&&(m.push(H,Z,Y),A+=3),(t>0||N!==o-1)&&(m.push(Z,W,Y),A+=3)}d.addGroup(v,A,0),v+=A}function k(R){let D=E,A=new pt,O=new ie,T=0,N=R===!0?e:t,H=R===!0?1:-1;for(let W=1;W<=r;W++)_.push(0,S*H,0),p.push(0,H,0),y.push(.5,.5),E++;let Z=E;for(let W=0;W<=r;W++){let q=W/r*h+u,j=Math.cos(q),X=Math.sin(q);O.x=N*X,O.y=S*H,O.z=N*j,_.push(O.x,O.y,O.z),p.push(0,H,0),A.x=j*.5+.5,A.y=X*.5*H+.5,y.push(A.x,A.y),E++}for(let W=0;W<r;W++){let Y=D+W,q=Z+W;R===!0?m.push(q,q+1,Y):m.push(q+1,q,Y),T+=3}d.addGroup(v,T,R===!0?1:2),v+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xr=class n extends Wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,l=t/2,u=Math.floor(i),h=Math.floor(r),d=u+1,m=h+1,_=e/u,p=t/h,y=[],E=[],F=[],S=[];for(let v=0;v<m;v++){let U=v*p-l;for(let k=0;k<d;k++){let R=k*_-o;E.push(R,-U,0),F.push(0,0,1),S.push(k/u),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let U=0;U<u;U++){let k=U+d*v,R=U+d*(v+1),D=U+1+d*(v+1),A=U+1+d*v;y.push(k,R,A),y.push(R,D,A)}this.setIndex(y),this.setAttribute("position",new dn(E,3)),this.setAttribute("normal",new dn(F,3)),this.setAttribute("uv",new dn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vs=class n extends Wn{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let h=Math.min(l+u,Math.PI),d=0,m=[],_=new ie,p=new ie,y=[],E=[],F=[],S=[];for(let v=0;v<=i;v++){let U=[],k=v/i,R=l+k*u,D=e*Math.cos(R),A=Math.sqrt(e*e-D*D),O=0;v===0&&l===0?O=.5/t:v===i&&h===Math.PI&&(O=-.5/t);for(let T=0;T<=t;T++){let N=T/t,H=r+N*o;_.x=-A*Math.cos(H),_.y=D,_.z=A*Math.sin(H),E.push(_.x,_.y,_.z),p.copy(_).normalize(),F.push(p.x,p.y,p.z),S.push(N+O,1-k),U.push(d++)}m.push(U)}for(let v=0;v<i;v++)for(let U=0;U<t;U++){let k=m[v][U+1],R=m[v][U],D=m[v+1][U],A=m[v+1][U+1];(v!==0||l>0)&&y.push(k,R,A),(v!==i-1||h<Math.PI)&&y.push(R,D,A)}this.setIndex(y),this.setAttribute("position",new dn(E,3)),this.setAttribute("normal",new dn(F,3)),this.setAttribute("uv",new dn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Yr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Ef(r))r.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Ef(r[0])){let o=[];for(let l=0,u=r.length;l<u;l++)o[l]=r[l].clone();e[t][i]=o}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Un(n){let e={};for(let t=0;t<n.length;t++){let i=Yr(n[t]);for(let r in i)e[r]=i[r]}return e}function Ef(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}var gp={clone:Yr,merge:Un},zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new At().setHex(r.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ie().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ln().fromArray(r.value);break;case"m3":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new rn().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xl=class extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ga=class extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var bl=class extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sl=class extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function As(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Bu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var xr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];e:{t:{let l;n:{i:if(!(e<r)){for(let u=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=r,r=t[++i],e<r)break t}l=t.length;break n}if(!(e>=o)){let u=t[1];e<u&&(i=2,o=u);for(let h=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(r=o,o=t[--i-1],e>=o)break t}l=i,i=0;break n}break e}for(;i<l;){let u=i+l>>>1;e<t[u]?l=u:i=u+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let l=0;l!==r;++l)t[l]=i[o+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends xr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,l=e+1,u=r[o],h=r[l];if(u===void 0)switch(this.getSettings_().endingStart){case Gu:o=e,u=2*t-i;break;case Hu:o=r.length-2,u=t+r[o]-r[o+1];break;default:o=e,u=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Gu:l=e,h=2*i-t;break;case Hu:l=1,h=i+r[1]-r[0];break;default:l=e-1,h=t}let d=(i-t)*.5,m=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(h-i),this._offsetPrev=o*m,this._offsetNext=l*m}interpolate_(e,t,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,h=e*u,d=h-u,m=this._offsetPrev,_=this._offsetNext,p=this._weightPrev,y=this._weightNext,E=(i-t)/(r-t),F=E*E,S=F*E,v=-p*S+2*p*F-p*E,U=(1+p)*S+(-1.5-2*p)*F+(-.5+p)*E+1,k=(-1-y)*S+(1.5+y)*F+.5*E,R=y*S-y*F;for(let D=0;D!==u;++D)o[D]=v*l[m+D]+U*l[d+D]+k*l[h+D]+R*l[_+D];return o}},Ml=class extends xr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,h=e*u,d=h-u,m=(i-t)/(r-t),_=1-m;for(let p=0;p!==u;++p)o[p]=l[d+p]*_+l[h+p]*m;return o}},El=class extends xr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Tl=class extends xr{interpolate_(e,t,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,h=e*u,d=h-u,m=this.inTangents,_=this.outTangents;if(!m||!_){let E=(i-t)/(r-t),F=1-E;for(let S=0;S!==u;++S)o[S]=l[d+S]*F+l[h+S]*E;return o}let p=u*2,y=e-1;for(let E=0;E!==u;++E){let F=l[d+E],S=l[h+E],v=y*p+E*2,U=_[v],k=_[v+1],R=e*p+E*2,D=m[R],A=m[R+1],O=Hx(i,t,U,D,r);o[E]=_p(O,F,k,A,S)}return o}};function _p(n,e,t,i,r){let o=1-n;return o*o*o*e+3*o*o*n*t+3*o*n*n*i+n*n*n*r}function Gx(n,e,t,i,r){let o=1-n;return 3*o*o*(t-e)+6*o*n*(i-t)+3*n*n*(r-i)}function Hx(n,e,t,i,r){let o=(n-e)/(r-e);for(let l=0;l<8;l++){let u=_p(o,e,t,i,r)-n;if(Math.abs(u)<1e-10)break;let h=Gx(o,e,t,i,r);if(Math.abs(h)<1e-10)break;o=Math.max(0,Math.min(1,o-u/h))}return o}var ui=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Bu(e.settings)&&(i.settings={inTangents:As(e.settings.inTangents,Array),outTangents:As(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case zu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return dt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Bu(this.settings)&&(Tf(this.settings.inTangents,e),Tf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,o=0,l=r-1;for(;o!==r&&i[o]<e;)++o;for(;l!==-1&&i[l]>t;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);let u=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*u,l*u)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let u=0;u!==o;u++){let h=i[u];if(typeof h=="number"&&isNaN(h)){ft("KeyframeTrack: Time is not a valid number.",this,u,h),e=!1;break}if(l!==null&&l>h){ft("KeyframeTrack: Out of order keys.",this,u,h,l),e=!1;break}l=h}if(r!==void 0&&rx(r))for(let u=0,h=r.length;u!==h;++u){let d=r[u];if(isNaN(d)){ft("KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===il,o=e.length-1,l=1;for(let u=1;u<o;++u){let h=!1,d=e[u],m=e[u+1];if(d!==m&&(u!==1||d!==e[0]))if(r)h=!0;else{let _=u*i,p=_-i,y=_+i;for(let E=0;E!==i;++E){let F=t[_+E];if(F!==t[p+E]||F!==t[y+E]){h=!0;break}}}if(h){if(u!==l){e[l]=e[u];let _=u*i,p=l*i;for(let y=0;y!==i;++y)t[p+y]=t[_+y]}++l}}if(o>0){e[l]=e[o];for(let u=o*i,h=l*i,d=0;d!==i;++d)t[h+d]=t[u+d];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Bu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Tf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=pl;var br=class extends ui{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=Ca;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends ui{constructor(e,t,i,r){super(e,t,i,r)}};Al.prototype.ValueTypeName="color";var Cl=class extends ui{constructor(e,t,i,r){super(e,t,i,r)}};Cl.prototype.ValueTypeName="number";var Rl=class extends xr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,h=(i-t)/(r-t),d=e*u;for(let m=d+u;d!==m;d+=4)Hn.slerpFlat(o,0,l,d-u,l,d,h);return o}},Ha=class extends ui{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Sr=class extends ui{constructor(e,t,i){super(e,t,i)}};Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=Ca;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends ui{constructor(e,t,i,r){super(e,t,i,r)}};Pl.prototype.ValueTypeName="vector";var Il=class{constructor(e,t,i){let r=this,o=!1,l=0,u=0,h,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){u++,o===!1&&r.onStart!==void 0&&r.onStart(m,l,u),o=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,u),l===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return d.push(m,_),this},this.removeHandler=function(m){let _=d.indexOf(m);return _!==-1&&d.splice(_,2),this},this.getHandler=function(m){for(let _=0,p=d.length;_<p;_+=2){let y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(m))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new Il,Ll=class{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wa=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xa=class extends Wa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ku=new rn,Af=new ie,Cf=new ie,Dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Af.setFromMatrixPosition(e.matrixWorld),t.position.copy(Af),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ku.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ku,e.coordinateSystem,e.reversedDepth);let o=this._frameExtents,l=r?r.z/o.x:1,u=r?r.w/o.y:1,h=r?r.x/o.x:0,d=r?r.y/o.y:0;e.coordinateSystem===Ds||e.reversedDepth?t.set(.5*l,0,0,.5*l+h,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+h,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),t.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tl=new ie,nl=new Hn,Oi=new ie,$a=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(tl,nl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pr=new ie,Rf=new pt,Pf=new pt,Fn=class extends $a{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Pf),t.subVectors(Pf,Rf)}setViewOffset(e,t,i,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let h=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/h,t-=l.offsetY*i/d,r*=l.width/h,i*=l.height/d}let u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gs=class extends $a{constructor(e=-1,t=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,l=i+e,u=r+t,h=r-t;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wu=class extends Dl{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qa=class extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cs=-90,Rs=1,Fl=class extends Nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Fn(Cs,Rs,e,t);r.layers=this.layers,this.add(r);let o=new Fn(Cs,Rs,e,t);o.layers=this.layers,this.add(o);let l=new Fn(Cs,Rs,e,t);l.layers=this.layers,this.add(l);let u=new Fn(Cs,Rs,e,t);u.layers=this.layers,this.add(u);let h=new Fn(Cs,Rs,e,t);h.layers=this.layers,this.add(h);let d=new Fn(Cs,Rs,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,l,u,h]=t;for(let d of t)this.remove(d);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,l,u,h,d,m]=this.children,_=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;let F=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,2,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=F,e.setRenderTarget(i,5,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,p,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}},Nl=class extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xh="\\[\\]\\.:\\/",Wx=new RegExp("["+xh+"]","g"),bh="[^"+xh+"]",Xx="[^"+xh.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",bh),qx=/(WCOD+)?/.source.replace("WCOD",Xx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Zx=new RegExp("^"+$x+qx+Yx+jx+"$"),Jx=["material","materials","bones","map"],Xu=class{constructor(e,t,i){let r=i||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},an=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(e){let t=Zx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);Jx.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(o){for(let l=0;l<o.length;l++){let u=o[l];if(u.name===t||u.uuid===t)return u;let h=i(u.children);if(h)return h}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===d){d=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let l=e[r];if(l===void 0){let d=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=Xu;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QT=new Float32Array(1);var Hs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ah=class Ah{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=r,this}};Ah.prototype.isMatrix2=!0;var $u=Ah;var Ya=class extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Sh(n,e,t,i){let r=Kx(i);switch(t){case dh:return n*e;case ph:return n*e/r.components*r.byteLength;case Hl:return n*e/r.components*r.byteLength;case Cr:return n*e*2/r.components*r.byteLength;case Wl:return n*e*2/r.components*r.byteLength;case fh:return n*e*3/r.components*r.byteLength;case _i:return n*e*4/r.components*r.byteLength;case Xl:return n*e*4/r.components*r.byteLength;case Ka:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:case jl:return Math.max(n,16)*Math.max(e,8)/4;case $l:case Yl:return Math.max(n,8)*Math.max(e,8)/2;case Zl:case Jl:case Ql:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kl:case no:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gc:case _c:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case io:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kx(n){switch(n){case Kn:case lh:return{byteLength:1,components:1};case $s:case ch:case Fi:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case Li:case zl:case Di:return{byteLength:4,components:1};case uh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zp(){let n=null,e=!1,t=null,i=null;function r(o,l){i=n.requestAnimationFrame(r),t(o,l)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function eb(n){let e=new WeakMap;function t(u,h){let d=u.array,m=u.usage,_=d.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,d,m),u.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,h,d){let m=h.array,_=h.updateRanges;if(n.bindBuffer(d,u),_.length===0)n.bufferSubData(d,0,m);else{_.sort((y,E)=>y.start-E.start);let p=0;for(let y=1;y<_.length;y++){let E=_[p],F=_[y];F.start<=E.start+E.count+1?E.count=Math.max(E.count,F.start+F.count-E.start):(++p,_[p]=F)}_.length=p+1;for(let y=0,E=_.length;y<E;y++){let F=_[y];n.bufferSubData(d,F.start*m.BYTES_PER_ELEMENT,m,F.start,F.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let h=e.get(u);h&&(n.deleteBuffer(h.buffer),e.delete(u))}function l(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:r,remove:o,update:l}}var tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
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
#endif`,ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
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
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pb=`#ifdef USE_IRIDESCENCE
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
#endif`,mb=`#ifdef USE_BUMPMAP
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mb=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Eb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Qb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eS=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
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
#endif`,ES=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,IS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,zS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,VS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,XS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZS=`#ifdef USE_TRANSMISSION
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nw=`uniform sampler2D t2D;
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
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`#include <common>
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
}`,lw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cw=`#define DISTANCE
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
}`,uw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`uniform float scale;
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
}`,pw=`uniform vec3 diffuse;
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
}`,mw=`#include <common>
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
}`,gw=`uniform vec3 diffuse;
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
}`,_w=`#define LAMBERT
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
}`,vw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,yw=`#define MATCAP
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
}`,xw=`#define MATCAP
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
}`,bw=`#define NORMAL
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
}`,Sw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ww=`#define PHONG
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
}`,Mw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ew=`#define STANDARD
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
}`,Tw=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Aw=`#define TOON
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
}`,Cw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Rw=`uniform float size;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Iw=`#include <common>
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
}`,Lw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Dw=`uniform float rotation;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:tb,alphahash_pars_fragment:nb,alphamap_fragment:ib,alphamap_pars_fragment:rb,alphatest_fragment:sb,alphatest_pars_fragment:ab,aomap_fragment:ob,aomap_pars_fragment:lb,batching_pars_vertex:cb,batching_vertex:ub,begin_vertex:hb,beginnormal_vertex:db,bsdfs:fb,iridescence_fragment:pb,bumpmap_pars_fragment:mb,clipping_planes_fragment:gb,clipping_planes_pars_fragment:_b,clipping_planes_pars_vertex:vb,clipping_planes_vertex:yb,color_fragment:xb,color_pars_fragment:bb,color_pars_vertex:Sb,color_vertex:wb,common:Mb,cube_uv_reflection_fragment:Eb,defaultnormal_vertex:Tb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Cb,emissivemap_fragment:Rb,emissivemap_pars_fragment:Pb,colorspace_fragment:Ib,colorspace_pars_fragment:Lb,envmap_fragment:Db,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Nb,envmap_pars_vertex:Ub,envmap_physical_pars_fragment:qb,envmap_vertex:Ob,fog_vertex:Bb,fog_pars_vertex:kb,fog_fragment:zb,fog_pars_fragment:Vb,gradientmap_pars_fragment:Gb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Wb,lights_lambert_pars_fragment:Xb,lights_pars_begin:$b,lights_toon_fragment:Yb,lights_toon_pars_fragment:jb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Jb,lights_physical_fragment:Kb,lights_physical_pars_fragment:Qb,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,lightprobes_pars_fragment:iS,logdepthbuf_fragment:rS,logdepthbuf_pars_fragment:sS,logdepthbuf_pars_vertex:aS,logdepthbuf_vertex:oS,map_fragment:lS,map_pars_fragment:cS,map_particle_fragment:uS,map_particle_pars_fragment:hS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:pS,morphcolor_vertex:mS,morphnormal_vertex:gS,morphtarget_pars_vertex:_S,morphtarget_vertex:vS,normal_fragment_begin:yS,normal_fragment_maps:xS,normal_pars_fragment:bS,normal_pars_vertex:SS,normal_vertex:wS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:ES,clearcoat_normal_fragment_maps:TS,clearcoat_pars_fragment:AS,iridescence_pars_fragment:CS,opaque_fragment:RS,packing:PS,premultiplied_alpha_fragment:IS,project_vertex:LS,dithering_fragment:DS,dithering_pars_fragment:FS,roughnessmap_fragment:NS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:BS,shadowmap_vertex:kS,shadowmask_pars_fragment:zS,skinbase_vertex:VS,skinning_pars_vertex:GS,skinning_vertex:HS,skinnormal_vertex:WS,specularmap_fragment:XS,specularmap_pars_fragment:$S,tonemapping_fragment:qS,tonemapping_pars_fragment:YS,transmission_fragment:jS,transmission_pars_fragment:ZS,uv_pars_fragment:JS,uv_pars_vertex:KS,uv_vertex:QS,worldpos_vertex:ew,background_vert:tw,background_frag:nw,backgroundCube_vert:iw,backgroundCube_frag:rw,cube_vert:sw,cube_frag:aw,depth_vert:ow,depth_frag:lw,distance_vert:cw,distance_frag:uw,equirect_vert:hw,equirect_frag:dw,linedashed_vert:fw,linedashed_frag:pw,meshbasic_vert:mw,meshbasic_frag:gw,meshlambert_vert:_w,meshlambert_frag:vw,meshmatcap_vert:yw,meshmatcap_frag:xw,meshnormal_vert:bw,meshnormal_frag:Sw,meshphong_vert:ww,meshphong_frag:Mw,meshphysical_vert:Ew,meshphysical_frag:Tw,meshtoon_vert:Aw,meshtoon_frag:Cw,points_vert:Rw,points_frag:Pw,shadow_vert:Iw,shadow_frag:Lw,sprite_vert:Dw,sprite_frag:Fw},$e={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Hi={basic:{uniforms:Un([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Un([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Un([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Un([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Un([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new At(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Un([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Un([$e.points,$e.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Un([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Un([$e.common,$e.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Un([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Un([$e.sprite,$e.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:Un([$e.common,$e.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:Un([$e.lights,$e.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Hi.physical={uniforms:Un([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};var Ec={r:0,b:0,g:0},Nw=new rn,Vp=new wt;Vp.set(-1,0,0,0,1,0,0,0,1);function Uw(n,e,t,i,r,o){let l=new At(0),u=r===!0?0:1,h,d,m=null,_=0,p=null;function y(U){let k=U.isScene===!0?U.background:null;if(k&&k.isTexture){let R=U.backgroundBlurriness>0;k=e.get(k,R)}return k}function E(U){let k=!1,R=y(U);R===null?S(l,u):R&&R.isColor&&(S(R,1),k=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function F(U,k){let R=y(k);R&&(R.isCubeTexture||R.mapping===Za)?(d===void 0&&(d=new Jn(new yr(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Yr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Vp),d.material.toneMapped=zt.getTransfer(R.colorSpace)!==qt,(m!==R||_!==R.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,m=R,_=R.version,p=n.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Jn(new Xr(2,2),new ci({name:"BackgroundMaterial",uniforms:Yr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.toneMapped=zt.getTransfer(R.colorSpace)!==qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||_!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,m=R,_=R.version,p=n.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function S(U,k){U.getRGB(Ec,yh(n)),t.buffers.color.setClear(Ec.r,Ec.g,Ec.b,k,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(U,k=1){l.set(U),u=k,S(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(U){u=U,S(l,u)},render:E,addToRenderList:F,dispose:v}}function Ow(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null),o=r,l=!1;function u(Z,W,Y,q,j){let X=!1,ce=_(Z,q,Y,W);o!==ce&&(o=ce,d(o.object)),X=y(Z,q,Y,j),X&&E(Z,q,Y,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(X||l)&&(l=!1,R(Z,W,Y,q),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return n.createVertexArray()}function d(Z){return n.bindVertexArray(Z)}function m(Z){return n.deleteVertexArray(Z)}function _(Z,W,Y,q){let j=q.wireframe===!0,X=i[W.id];X===void 0&&(X={},i[W.id]=X);let ce=Z.isInstancedMesh===!0?Z.id:0,be=X[ce];be===void 0&&(be={},X[ce]=be);let de=be[Y.id];de===void 0&&(de={},be[Y.id]=de);let $=de[j];return $===void 0&&($=p(h()),de[j]=$),$}function p(Z){let W=[],Y=[],q=[];for(let j=0;j<t;j++)W[j]=0,Y[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:q,object:Z,attributes:{},index:null}}function y(Z,W,Y,q){let j=o.attributes,X=W.attributes,ce=0,be=Y.getAttributes();for(let de in be)if(be[de].location>=0){let ye=j[de],et=X[de];if(et===void 0&&(de==="instanceMatrix"&&Z.instanceMatrix&&(et=Z.instanceMatrix),de==="instanceColor"&&Z.instanceColor&&(et=Z.instanceColor)),ye===void 0||ye.attribute!==et||et&&ye.data!==et.data)return!0;ce++}return o.attributesNum!==ce||o.index!==q}function E(Z,W,Y,q){let j={},X=W.attributes,ce=0,be=Y.getAttributes();for(let de in be)if(be[de].location>=0){let ye=X[de];ye===void 0&&(de==="instanceMatrix"&&Z.instanceMatrix&&(ye=Z.instanceMatrix),de==="instanceColor"&&Z.instanceColor&&(ye=Z.instanceColor));let et={};et.attribute=ye,ye&&ye.data&&(et.data=ye.data),j[de]=et,ce++}o.attributes=j,o.attributesNum=ce,o.index=q}function F(){let Z=o.newAttributes;for(let W=0,Y=Z.length;W<Y;W++)Z[W]=0}function S(Z){v(Z,0)}function v(Z,W){let Y=o.newAttributes,q=o.enabledAttributes,j=o.attributeDivisors;Y[Z]=1,q[Z]===0&&(n.enableVertexAttribArray(Z),q[Z]=1),j[Z]!==W&&(n.vertexAttribDivisor(Z,W),j[Z]=W)}function U(){let Z=o.newAttributes,W=o.enabledAttributes;for(let Y=0,q=W.length;Y<q;Y++)W[Y]!==Z[Y]&&(n.disableVertexAttribArray(Y),W[Y]=0)}function k(Z,W,Y,q,j,X,ce){ce===!0?n.vertexAttribIPointer(Z,W,Y,j,X):n.vertexAttribPointer(Z,W,Y,q,j,X)}function R(Z,W,Y,q){F();let j=q.attributes,X=Y.getAttributes(),ce=W.defaultAttributeValues;for(let be in X){let de=X[be];if(de.location>=0){let $=j[be];if($===void 0&&(be==="instanceMatrix"&&Z.instanceMatrix&&($=Z.instanceMatrix),be==="instanceColor"&&Z.instanceColor&&($=Z.instanceColor)),$!==void 0){let ye=$.normalized,et=$.itemSize,Je=e.get($);if(Je===void 0)continue;let Dt=Je.buffer,mt=Je.type,Ee=Je.bytesPerElement,se=mt===n.INT||mt===n.UNSIGNED_INT||$.gpuType===zl;if($.isInterleavedBufferAttribute){let fe=$.data,Pe=fe.stride,Ge=$.offset;if(fe.isInstancedInterleavedBuffer){for(let we=0;we<de.locationSize;we++)v(de.location+we,fe.meshPerAttribute);Z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let we=0;we<de.locationSize;we++)S(de.location+we);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let we=0;we<de.locationSize;we++)k(de.location+we,et/de.locationSize,mt,ye,Pe*Ee,(Ge+et/de.locationSize*we)*Ee,se)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<de.locationSize;fe++)v(de.location+fe,$.meshPerAttribute);Z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<de.locationSize;fe++)S(de.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let fe=0;fe<de.locationSize;fe++)k(de.location+fe,et/de.locationSize,mt,ye,et*Ee,et/de.locationSize*fe*Ee,se)}}else if(ce!==void 0){let ye=ce[be];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(de.location,ye);break;case 3:n.vertexAttrib3fv(de.location,ye);break;case 4:n.vertexAttrib4fv(de.location,ye);break;default:n.vertexAttrib1fv(de.location,ye)}}}}U()}function D(){N();for(let Z in i){let W=i[Z];for(let Y in W){let q=W[Y];for(let j in q){let X=q[j];for(let ce in X)m(X[ce].object),delete X[ce];delete q[j]}}delete i[Z]}}function A(Z){if(i[Z.id]===void 0)return;let W=i[Z.id];for(let Y in W){let q=W[Y];for(let j in q){let X=q[j];for(let ce in X)m(X[ce].object),delete X[ce];delete q[j]}}delete i[Z.id]}function O(Z){for(let W in i){let Y=i[W];for(let q in Y){let j=Y[q];if(j[Z.id]===void 0)continue;let X=j[Z.id];for(let ce in X)m(X[ce].object),delete X[ce];delete j[Z.id]}}}function T(Z){for(let W in i){let Y=i[W],q=Z.isInstancedMesh===!0?Z.id:0,j=Y[q];if(j!==void 0){for(let X in j){let ce=j[X];for(let be in ce)m(ce[be].object),delete ce[be];delete j[X]}delete Y[q],Object.keys(Y).length===0&&delete i[W]}}}function N(){H(),l=!0,o!==r&&(o=r,d(o.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:N,resetDefaultState:H,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:F,enableAttribute:S,disableUnusedAttributes:U}}function Bw(n,e,t){let i;function r(h){i=h}function o(h,d){n.drawArrays(i,h,d),t.update(d,i,1)}function l(h,d,m){m!==0&&(n.drawArraysInstanced(i,h,d,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y];t.update(p,i,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function kw(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(O){return!(O!==_i&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){let T=O===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Kn&&O!==Di&&!T&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp",m=h(d);m!==d&&(dt("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);let _=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),F=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),U=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),k=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:E,maxTextureSize:F,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:U,maxVaryings:k,maxFragmentUniforms:R,maxSamples:D,samples:A}}function zw(n){let e=this,t=null,i=0,r=!1,o=!1,l=new li,u=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,p){let y=_.length!==0||p||i!==0||r;return r=p,i=_.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,p){t=m(_,p,0)},this.setState=function(_,p,y){let E=_.clippingPlanes,F=_.clipIntersection,S=_.clipShadows,v=n.get(_);if(!r||E===null||E.length===0||o&&!S)o?m(null):d();else{let U=o?0:i,k=U*4,R=v.clippingState||null;h.value=R,R=m(E,p,k,y);for(let D=0;D!==k;++D)R[D]=t[D];v.clippingState=R,this.numIntersection=F?this.numPlanes:0,this.numPlanes+=U}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,p,y,E){let F=_!==null?_.length:0,S=null;if(F!==0){if(S=h.value,E!==!0||S===null){let v=y+F*4,U=p.matrixWorldInverse;u.getNormalMatrix(U),(S===null||S.length<v)&&(S=new Float32Array(v));for(let k=0,R=y;k!==F;++k,R+=4)l.copy(_[k]).applyMatrix4(U,u),l.normal.toArray(S,R),S[R+3]=l.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=F,e.numIntersection=0,S}}var Zs=4,Vw=6,Gw=20,Hw=256,ro=new Gs,yp=new At,Ch=null,Rh=0,Ph=0,Ih=!1,Ww=new ie,jr=new ie,Ac=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:l=256,position:u=Ww}=o;Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,r,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Rh,Ph),this._renderer.xr.enabled=Ih,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Fi,format:_i,colorSpace:Ra,depthBuffer:!1},r=xp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,t,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xw(o)),this._blurMaterial=qw(o,e,t),this._ggxMaterial=$w(o,e,t)}return r}_compileMaterial(e){let t=new Jn(new Wn,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,i,r,o){let h=new Fn(90,1,t,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,p=_.autoClear,y=_.toneMapping;_.getClearColor(yp),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new yr,new Oa({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));let F=this._backgroundBox,S=F.material,v=!1,U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,v=!0):(S.color.copy(yp),v=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(h.up.set(0,d[k],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[k],o.y,o.z)):R===1?(h.up.set(0,0,d[k]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[k],o.z)):(h.up.set(0,d[k],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[k]));let D=this._cubeSize;js(r,R*D,k>2?D:0,D,D),_.setRenderTarget(r),v&&_.render(F,h),_.render(e,h)}_.toneMapping=y,_.autoClear=p,e.background=U}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Er||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());let o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let u=o.uniforms;u.envMap.value=e;let h=this._cubeSize;js(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(l,ro)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[i];u.material=l;let h=l.uniforms,d=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-m*m),p=d*1.25,y=_*p,{_lodMax:E}=this,F=this._sizeLods[i],S=3*F*(i>E-Zs?i-E+Zs:0),v=4*(this._cubeSize-F);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=E-t,js(o,S,v,3*F,2*F),r.setRenderTarget(o),r.render(u,ro),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=E-i,js(e,S,v,3*F,2*F),r.setRenderTarget(e),r.render(u,ro)}_blur(e,t,i,r){let o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,i,l),this._blurPass(o,e,i,i,l)}_blurPass(e,t,i,r,o){let l=this._renderer,u=this._blurMaterial,h=this._lodMeshes[r];h.material=u;let d=u.uniforms;d.envMap.value=e.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let m=this._sizeLods[r],_=3*m*(r>this._lodMax-Zs?r-this._lodMax+Zs:0),p=4*(this._cubeSize-m);js(t,_,p,3*m,2*m),l.setRenderTarget(t),l.render(h,ro)}};function Xw(n){let e=[],t=[],i=n,r=n-Zs+1+Vw;for(let o=0;o<r;o++){let l=Math.pow(2,i);e.push(l);let u=1/(l-2),h=-u,d=1+u,m=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,p=6,y=3,E=new Float32Array(y*p*_),F=new Float32Array(y*p*_);for(let v=0;v<_;v++){let U=v%3*2/3-1,k=v>2?0:-1,R=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];E.set(R,y*p*v);for(let D=0;D<p;D++){let A=m[D*2]*2-1,O=m[D*2+1]*2-1;v===0?jr.set(1,O,A):v===1?jr.set(-A,1,-O):v===2?jr.set(-A,O,1):v===3?jr.set(-1,O,-A):v===4?jr.set(-A,-1,O):jr.set(A,O,-1),jr.toArray(F,(v*p+D)*y)}}let S=new Wn;S.setAttribute("position",new Gn(E,y)),S.setAttribute("outputDirection",new Gn(F,y)),t.push(new Jn(S,null)),i>Zs&&i--}return{lodMeshes:t,sizeLods:e}}function xp(n,e,t){let i=new Zn(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $w(n,e,t){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function qw(n,e,t){return new ci({name:"SphericalGaussianBlur",defines:{SAMPLES:Gw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function bp(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Sp(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cc=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ba(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),o=new ci({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Vi});o.uniforms.tEquirect.value=t;let l=new Jn(r,o),u=t.minFilter;return t.minFilter===Tr&&(t.minFilter=Mn),new Fl(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(o)}};function Yw(n){let e=new WeakMap,t=new WeakMap,i=null;function r(p,y=!1){return p==null?null:y?l(p):o(p)}function o(p){if(p&&p.isTexture){let y=p.mapping;if(y===Ol||y===Bl)if(e.has(p)){let E=e.get(p).texture;return u(E,p.mapping)}else{let E=p.image;if(E&&E.height>0){let F=new Cc(E.height);return F.fromEquirectangularTexture(n,p),e.set(p,F),p.addEventListener("dispose",d),u(F.texture,p.mapping)}else return null}}return p}function l(p){if(p&&p.isTexture){let y=p.mapping,E=y===Ol||y===Bl,F=y===Er||y===qr;if(E||F){let S=t.get(p),v=S!==void 0?S.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==v)return i===null&&(i=new Ac(n)),S=E?i.fromEquirectangular(p,S):i.fromCubemap(p,S),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),S.texture;if(S!==void 0)return S.texture;{let U=p.image;return E&&U&&U.height>0||F&&U&&h(U)?(i===null&&(i=new Ac(n)),S=E?i.fromEquirectangular(p):i.fromCubemap(p),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),p.addEventListener("dispose",m),S.texture):null}}}return p}function u(p,y){return y===Ol?p.mapping=Er:y===Bl&&(p.mapping=qr),p}function h(p){let y=0,E=6;for(let F=0;F<E;F++)p[F]!==void 0&&y++;return y===E}function d(p){let y=p.target;y.removeEventListener("dispose",d);let E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function m(p){let y=p.target;y.removeEventListener("dispose",m);let E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:_}}function jw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Wr("WebGLRenderer: "+i+" extension not supported."),r}}}function Zw(n,e,t,i){let r={},o=new WeakMap;function l(_){let p=_.target;p.index!==null&&e.remove(p.index);for(let E in p.attributes)e.remove(p.attributes[E]);p.removeEventListener("dispose",l),delete r[p.id];let y=o.get(p);y&&(e.remove(y),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(_,p){return r[p.id]===!0||(p.addEventListener("dispose",l),r[p.id]=!0,t.memory.geometries++),p}function h(_){let p=_.attributes;for(let y in p)e.update(p[y],n.ARRAY_BUFFER)}function d(_){let p=[],y=_.index,E=_.attributes.position,F=0;if(E===void 0)return;if(y!==null){let U=y.array;F=y.version;for(let k=0,R=U.length;k<R;k+=3){let D=U[k+0],A=U[k+1],O=U[k+2];p.push(D,A,A,O,O,D)}}else{let U=E.array;F=E.version;for(let k=0,R=U.length/3-1;k<R;k+=3){let D=k+0,A=k+1,O=k+2;p.push(D,A,A,O,O,D)}}let S=new(E.count>=65535?Ua:Na)(p,1);S.version=F;let v=o.get(_);v&&e.remove(v),o.set(_,S)}function m(_){let p=o.get(_);if(p){let y=_.index;y!==null&&p.version<y.version&&d(_)}else d(_);return o.get(_)}return{get:u,update:h,getWireframeAttribute:m}}function Jw(n,e,t){let i;function r(_){i=_}let o,l;function u(_){o=_.type,l=_.bytesPerElement}function h(_,p){n.drawElements(i,p,o,_*l),t.update(p,i,1)}function d(_,p,y){y!==0&&(n.drawElementsInstanced(i,p,o,_*l,y),t.update(p,i,y))}function m(_,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,_,0,y);let F=0;for(let S=0;S<y;S++)F+=p[S];t.update(F,i,1)}this.setMode=r,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function Kw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=u*(o/3);break;case n.LINES:t.lines+=u*(o/2);break;case n.LINE_STRIP:t.lines+=u*(o-1);break;case n.LINE_LOOP:t.lines+=u*o;break;case n.POINTS:t.points+=u*o;break;default:ft("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Qw(n,e,t){let i=new WeakMap,r=new ln;function o(l,u,h){let d=l.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0,p=i.get(u);if(p===void 0||p.count!==_){let N=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",N)};p!==void 0&&p.texture.dispose();let y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,F=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],U=u.morphAttributes.color||[],k=0;y===!0&&(k=1),E===!0&&(k=2),F===!0&&(k=3);let R=u.attributes.position.count*k,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let A=new Float32Array(R*D*4*_),O=new La(A,R,D,_);O.type=Di,O.needsUpdate=!0;let T=k*4;for(let H=0;H<_;H++){let Z=S[H],W=v[H],Y=U[H],q=R*D*4*H;for(let j=0;j<Z.count;j++){let X=j*T;y===!0&&(r.fromBufferAttribute(Z,j),A[q+X+0]=r.x,A[q+X+1]=r.y,A[q+X+2]=r.z,A[q+X+3]=0),E===!0&&(r.fromBufferAttribute(W,j),A[q+X+4]=r.x,A[q+X+5]=r.y,A[q+X+6]=r.z,A[q+X+7]=0),F===!0&&(r.fromBufferAttribute(Y,j),A[q+X+8]=r.x,A[q+X+9]=r.y,A[q+X+10]=r.z,A[q+X+11]=Y.itemSize===4?r.w:1)}}p={count:_,texture:O,size:new pt(R,D)},i.set(u,p),u.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let y=0;for(let F=0;F<d.length;F++)y+=d[F];let E=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function eM(n,e,t,i,r){let o=new WeakMap;function l(d){let m=r.render.frame,_=d.geometry,p=e.get(d,_);if(o.get(p)!==m&&(e.update(p),o.set(p,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==m&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,m))),d.isSkinnedMesh){let y=d.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return p}function u(){o=new WeakMap}function h(d){let m=d.target;m.removeEventListener("dispose",h),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}var tM={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[sh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function nM(n,e,t,i,r,o){let l=new Zn(e,t,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,h=null,d=new Wn;d.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new dn([0,2,0,0,2,0],2));let m=new xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Jn(d,m),p=new Gs(-1,1,1,-1,0,1),y=null,E=null,F=!1,S,v=null,U=[],k=!1;this.setSize=function(R,D){l.setSize(R,D),u!==null&&u.setSize(R,D),h!==null&&h.setSize(R,D);for(let A=0;A<U.length;A++){let O=U[A];O.setSize&&O.setSize(R,D)}},this.setEffects=function(R){U=R,k=U.length>0&&U[0].isRenderPass===!0;let D=l.width,A=l.height;U.length>0&&u===null&&(u=new Zn(D,A,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),h=new Zn(D,A,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<U.length;O++){let T=U[O];T.setSize&&T.setSize(D,A)}},this.begin=function(R,D){if(F||R.toneMapping===Ii&&U.length===0)return!1;if(v=D,D!==null){let A=D.width,O=D.height;(l.width!==A||l.height!==O)&&this.setSize(A,O)}return k===!1&&R.setRenderTarget(l),S=R.toneMapping,R.toneMapping=Ii,!0},this.hasRenderPass=function(){return k},this.end=function(R,D){R.toneMapping=S,F=!0;let A=l,O=u;for(let T=0;T<U.length;T++){let N=U[T];N.enabled!==!1&&(N.render(R,O,A,D),N.needsSwap!==!1&&(A=O,O=O===u?h:u))}if(y!==R.outputColorSpace||E!==R.toneMapping){y=R.outputColorSpace,E=R.toneMapping,m.defines={},zt.getTransfer(y)===qt&&(m.defines.SRGB_TRANSFER="");let T=tM[E];T&&(m.defines[T]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(v),R.render(_,p),v=null,F=!1},this.isCompositing=function(){return F},this.dispose=function(){l.dispose(),u!==null&&u.dispose(),h!==null&&h.dispose(),d.dispose(),m.dispose()}}var Gp=new jn,Fh=new vr(1,1),Hp=new La,Wp=new _l,Xp=new Ba,wp=[],Mp=[],Ep=new Float32Array(16),Tp=new Float32Array(9),Ap=new Float32Array(4);function Ks(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=wp[r];if(o===void 0&&(o=new Float32Array(r),wp[r]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(o,u)}return o}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ic(n,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function sM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function aM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function oM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,i))return;Ap.set(i),n.uniformMatrix2fv(this.addr,!1,Ap),yn(t,i)}}function lM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,i))return;Tp.set(i),n.uniformMatrix3fv(this.addr,!1,Tp),yn(t,i)}}function cM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(vn(t,i))return;Ep.set(i),n.uniformMatrix4fv(this.addr,!1,Ep),yn(t,i)}}function uM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function fM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function pM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function gM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function vM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Fh.compareFunction=t.isReversedDepthBuffer()?Mc:wc,o=Fh):o=Gp,t.setTexture2D(e||o,r)}function yM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wp,r)}function xM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xp,r)}function bM(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hp,r)}function SM(n){switch(n){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return aM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return hM;case 35668:case 35672:return dM;case 35669:case 35673:return fM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return bM}}function wM(n,e){n.uniform1fv(this.addr,e)}function MM(n,e){let t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function EM(n,e){let t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function TM(n,e){let t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function AM(n,e){let t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CM(n,e){let t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RM(n,e){let t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PM(n,e){n.uniform1iv(this.addr,e)}function IM(n,e){n.uniform2iv(this.addr,e)}function LM(n,e){n.uniform3iv(this.addr,e)}function DM(n,e){n.uniform4iv(this.addr,e)}function FM(n,e){n.uniform1uiv(this.addr,e)}function NM(n,e){n.uniform2uiv(this.addr,e)}function UM(n,e){n.uniform3uiv(this.addr,e)}function OM(n,e){n.uniform4uiv(this.addr,e)}function BM(n,e,t){let i=this.cache,r=e.length,o=Ic(t,r);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=Fh:l=Gp;for(let u=0;u!==r;++u)t.setTexture2D(e[u]||l,o[u])}function kM(n,e,t){let i=this.cache,r=e.length,o=Ic(t,r);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Wp,o[l])}function zM(n,e,t){let i=this.cache,r=e.length,o=Ic(t,r);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Xp,o[l])}function VM(n,e,t){let i=this.cache,r=e.length,o=Ic(t,r);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Hp,o[l])}function GM(n){switch(n){case 5126:return wM;case 35664:return MM;case 35665:return EM;case 35666:return TM;case 35674:return AM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return IM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return FM;case 36294:return NM;case 36295:return UM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return VM}}var Nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}},Uh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,l=r.length;o!==l;++o){let u=r[o];u.setValue(e,t[u.id],i)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function Cp(n,e){n.seq.push(e),n.map[e.id]=e}function HM(n,e,t){let i=n.name,r=i.length;for(Lh.lastIndex=0;;){let o=Lh.exec(i),l=Lh.lastIndex,u=o[1],h=o[2]==="]",d=o[3];if(h&&(u=u|0),d===void 0||d==="["&&l+2===r){Cp(t,d===void 0?new Nh(u,n,e):new Uh(u,n,e));break}else{let _=t.map[u];_===void 0&&(_=new Oh(u),Cp(t,_)),t=_}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let u=e.getActiveUniform(t,l),h=e.getUniformLocation(t,u.name);HM(u,h,this)}let r=[],o=[];for(let l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,l=t.length;o!==l;++o){let u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let l=e[r];l.id in t&&i.push(l)}return i}};function Rp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var WM=37297,XM=0;function $M(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){let u=l+1;i.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return i.join(`
`)}var Pp=new wt;function qM(n){zt._getMatrix(Pp,zt.workingColorSpace,n);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(n)){case Pa:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ip(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+$M(n.getShaderSource(e),u)}else return o}function YM(n,e){let t=qM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jM={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[sh]:"AgX",[ah]:"Neutral",[rh]:"Custom"};function ZM(n,e){let t=jM[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tc=new ie;function JM(){zt.getLuminanceCoefficients(Tc);let n=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function QM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),l=o.name,u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:u}}return t}function ao(n){return n!==""}function Lp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(n){return n.replace(tE,iE)}var nE=new Map;function iE(n,e){let t=Rt[e];if(t===void 0){let i=nE.get(e);if(i!==void 0)t=Rt[i],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bh(t)}var rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(n){return n.replace(rE,sE)}function sE(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Np(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var aE={[ja]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function oE(n){return aE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lE={[Er]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function cE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":lE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var uE={[qr]:"ENVMAP_MODE_REFRACTION"};function hE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dE={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[Qf]:"ENVMAP_BLENDING_ADD"};function fE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dE[n.combine]||"ENVMAP_BLENDING_NONE"}function pE(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function mE(n,e,t,i){let r=n.getContext(),o=t.defines,l=t.vertexShader,u=t.fragmentShader,h=oE(t),d=cE(t),m=hE(t),_=fE(t),p=pE(t),y=KM(t),E=QM(o),F=r.createProgram(),S,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ao).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ao).join(`
`),v.length>0&&(v+=`
`)):(S=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),v=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Rt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?ZM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,YM("linearToOutputTexel",t.outputColorSpace),JM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),l=Bh(l),l=Lp(l,t),l=Dp(l,t),u=Bh(u),u=Lp(u,t),u=Dp(u,t),l=Fp(l),u=Fp(u),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let k=U+S+l,R=U+v+u,D=Rp(r,r.VERTEX_SHADER,k),A=Rp(r,r.FRAGMENT_SHADER,R);r.attachShader(F,D),r.attachShader(F,A),t.index0AttributeName!==void 0?r.bindAttribLocation(F,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(F,0,"position"),r.linkProgram(F);function O(Z){if(n.debug.checkShaderErrors){let W=r.getProgramInfoLog(F)||"",Y=r.getShaderInfoLog(D)||"",q=r.getShaderInfoLog(A)||"",j=W.trim(),X=Y.trim(),ce=q.trim(),be=!0,de=!0;if(r.getProgramParameter(F,r.LINK_STATUS)===!1)if(be=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,F,D,A);else{let $=Ip(r,D,"vertex"),ye=Ip(r,A,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(F,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+j+`
`+$+`
`+ye)}else j!==""?dt("WebGLProgram: Program Info Log:",j):(X===""||ce==="")&&(de=!1);de&&(Z.diagnostics={runnable:be,programLog:j,vertexShader:{log:X,prefix:S},fragmentShader:{log:ce,prefix:v}})}r.deleteShader(D),r.deleteShader(A),T=new Js(r,F),N=eE(r,F)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(F,WM)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(F),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XM++,this.cacheKey=e,this.usedTimes=1,this.program=F,this.vertexShader=D,this.fragmentShader=A,this}var gE=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zh(e),t.set(e,i)),i}},zh=class{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}};function _E(n){return n===Cr||n===no||n===io}function vE(n,e,t,i,r,o){let l=new Da,u=new kh,h=new Set,d=[],m=new Map,_=i.logarithmicDepthBuffer,p=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return h.add(T),T===0?"uv":`uv${T}`}function F(T,N,H,Z,W,Y){let q=Z.fog,j=W.geometry,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Z.environment:null,ce=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,be=e.get(T.envMap||X,ce),de=be&&be.mapping===Za?be.image.height:null,$=y[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let ye=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,et=ye!==void 0?ye.length:0,Je=0;j.morphAttributes.position!==void 0&&(Je=1),j.morphAttributes.normal!==void 0&&(Je=2),j.morphAttributes.color!==void 0&&(Je=3);let Dt,mt,Ee,se;if($){let $t=Hi[$];Dt=$t.vertexShader,mt=$t.fragmentShader}else{Dt=T.vertexShader,mt=T.fragmentShader;let $t=u.getVertexShaderStage(T),Bt=u.getFragmentShaderStage(T);u.update(T,$t,Bt),Ee=$t.id,se=Bt.id}let fe=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ge=W.isInstancedMesh===!0,we=W.isBatchedMesh===!0,gt=!!T.map,Qt=!!T.matcap,St=!!be,_t=!!T.aoMap,ct=!!T.lightMap,ut=!!T.bumpMap&&T.wireframe===!1,Mt=!!T.normalMap,Yt=!!T.displacementMap,Ve=!!T.emissiveMap,Ye=!!T.metalnessMap,Zt=!!T.roughnessMap,J=T.anisotropy>0,Wt=T.clearcoat>0,je=T.dispersion>0,z=T.retroreflectivity>0,w=T.iridescence>0,ne=T.sheen>0,le=T.transmission>0,pe=J&&!!T.anisotropyMap,Fe=Wt&&!!T.clearcoatMap,Oe=Wt&&!!T.clearcoatNormalMap,me=Wt&&!!T.clearcoatRoughnessMap,ve=w&&!!T.iridescenceMap,Be=w&&!!T.iridescenceThicknessMap,it=ne&&!!T.sheenColorMap,Ie=ne&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,tt=!!T.specularColorMap,lt=!!T.specularIntensityMap,yt=le&&!!T.transmissionMap,Q=le&&!!T.thicknessMap,ke=!!T.gradientMap,xe=!!T.alphaMap,ze=T.alphaTest>0,Xe=!!T.alphaHash,Se=!!T.extensions,rt=Ii;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=n.toneMapping);let nt={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Dt,fragmentShader:mt,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:we,batchingColor:we&&W._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,instancingMorph:Ge&&W.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:gt,matcap:Qt,envMap:St,envMapMode:St&&be.mapping,envMapCubeUVHeight:de,aoMap:_t,lightMap:ct,bumpMap:ut,normalMap:Mt,displacementMap:Yt,emissiveMap:Ve,normalMapObjectSpace:Mt&&T.normalMapType===np,normalMapTangentSpace:Mt&&T.normalMapType===Sc,packedNormalMap:Mt&&T.normalMapType===Sc&&_E(T.normalMap.format),metalnessMap:Ye,roughnessMap:Zt,anisotropy:J,anisotropyMap:pe,clearcoat:Wt,clearcoatMap:Fe,clearcoatNormalMap:Oe,clearcoatRoughnessMap:me,dispersion:je,retroreflection:z,iridescence:w,iridescenceMap:ve,iridescenceThicknessMap:Be,sheen:ne,sheenColorMap:it,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:tt,specularIntensityMap:lt,transmission:le,transmissionMap:yt,thicknessMap:Q,gradientMap:ke,opaque:T.transparent===!1&&T.blending===Xs&&T.alphaToCoverage===!1,alphaMap:xe,alphaTest:ze,alphaHash:Xe,combine:T.combine,mapUv:gt&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:ct&&E(T.lightMap.channel),bumpMapUv:ut&&E(T.bumpMap.channel),normalMapUv:Mt&&E(T.normalMap.channel),displacementMapUv:Yt&&E(T.displacementMap.channel),emissiveMapUv:Ve&&E(T.emissiveMap.channel),metalnessMapUv:Ye&&E(T.metalnessMap.channel),roughnessMapUv:Zt&&E(T.roughnessMap.channel),anisotropyMapUv:pe&&E(T.anisotropyMap.channel),clearcoatMapUv:Fe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:it&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&E(T.sheenRoughnessMap.channel),specularMapUv:Ne&&E(T.specularMap.channel),specularColorMapUv:tt&&E(T.specularColorMap.channel),specularIntensityMapUv:lt&&E(T.specularIntensityMap.channel),transmissionMapUv:yt&&E(T.transmissionMap.channel),thicknessMapUv:Q&&E(T.thicknessMap.channel),alphaMapUv:xe&&E(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Mt||J),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!j.attributes.uv&&(gt||xe),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&Mt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Je,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:gt&&T.map.isVideoTexture===!0&&zt.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:Ve&&T.emissiveMap.isVideoTexture===!0&&zt.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===gi,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Se&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&T.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return nt.vertexUv1s=h.has(1),nt.vertexUv2s=h.has(2),nt.vertexUv3s=h.has(3),h.clear(),nt}function S(T){let N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(let H in T.defines)N.push(H),N.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(v(N,T),U(N,T),N.push(n.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function v(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numSunLights),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numSunLightShadows),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function U(T,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.retroreflection&&l.enable(24),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),T.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),N.hasPositionAttribute&&l.enable(23),T.push(l.mask)}function k(T){let N=y[T.type],H;if(N){let Z=Hi[N];H=gp.clone(Z.uniforms)}else H=T.uniforms;return H}function R(T,N){let H=m.get(N);return H!==void 0?++H.usedTimes:(H=new mE(n,N,T,r),d.push(H),m.set(N,H)),H}function D(T){if(--T.usedTimes===0){let N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),m.delete(T.cacheKey),T.destroy()}}function A(T){u.remove(T)}function O(){u.dispose()}return{getParameters:F,getProgramCacheKey:S,getUniforms:k,acquireProgram:R,releaseProgram:D,releaseShaderCache:A,programs:d,dispose:O}}function yE(){let n=new WeakMap;function e(l){return n.has(l)}function t(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function i(l){n.delete(l)}function r(l,u,h){n.get(l)[u]=h}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function xE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Op(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function l(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function u(p,y,E,F,S,v){let U=n[e];return U===void 0?(U={id:p.id,object:p,geometry:y,material:E,materialVariant:l(p),groupOrder:F,renderOrder:p.renderOrder,z:S,group:v},n[e]=U):(U.id=p.id,U.object=p,U.geometry=y,U.material=E,U.materialVariant=l(p),U.groupOrder=F,U.renderOrder=p.renderOrder,U.z=S,U.group=v),e++,U}function h(p,y,E,F,S,v,U){U.reversedDepth===!0&&(S=-S);let k=u(p,y,E,F,S,v);E.transmission>0?i.push(k):E.transparent===!0?r.push(k):t.push(k)}function d(p,y,E,F,S,v){let U=u(p,y,E,F,S,v);E.transmission>0?i.unshift(U):E.transparent===!0?r.unshift(U):t.unshift(U)}function m(p,y){t.length>1&&t.sort(p||xE),i.length>1&&i.sort(y||Up),r.length>1&&r.sort(y||Up)}function _(){for(let p=e,y=n.length;p<y;p++){let E=n[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:h,unshift:d,finish:_,sort:m}}function bE(){let n=new WeakMap;function e(i,r){let o=n.get(i),l;return o===void 0?(l=new Op,n.set(i,[l])):r>=o.length?(l=new Op,o.push(l)):l=o[r],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function SE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new At};break;case"SpotLight":t={position:new ie,direction:new ie,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[e.id]=t,t}}}function wE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ME=0;function EE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function TE(n){let e=new SE,t=wE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ie);let r=new ie,o=new rn,l=new rn;function u(d){let m=0,_=0,p=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let y=0,E=0,F=0,S=0,v=0,U=0,k=0,R=0,D=0,A=0,O=0,T=0,N=0,H=0;d.sort(EE);for(let W=0,Y=d.length;W<Y;W++){let q=d[W],j=q.color,X=q.intensity,ce=q.distance,be=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===Cr?be=q.shadow.map.texture:be=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)m+=j.r*X,_+=j.g*X,p+=j.b*X;else if(q.isLightProbe){for(let de=0;de<9;de++)i.probe[de].addScaledVector(q.sh.coefficients[de],X);H++}else if(q.isSunLight){let de=e.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let $=q.shadow,ye=t.get(q);ye.shadowIntensity=$.intensity,ye.shadowBias=$.bias,ye.shadowNormalBias=$.normalBias,ye.shadowRadius=$.radius,ye.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[E]=ye,i.sunShadowMap[E]=be;let et=$.getViewportCount();for(let Je=0;Je<et;Je++)i.sunShadowMatrix[F+Je]=$.getMatrix(Je),i.sunShadowCascade[F+Je]=$._cascadeData[Je];F+=et,E++}i.sun[y]=de,y++}else if(q.isDirectionalLight){let de=e.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let $=q.shadow,ye=t.get(q);ye.shadowIntensity=$.intensity,ye.shadowBias=$.bias,ye.shadowNormalBias=$.normalBias,ye.shadowRadius=$.radius,ye.shadowMapSize=$.mapSize,i.directionalShadow[S]=ye,i.directionalShadowMap[S]=be,i.directionalShadowMatrix[S]=q.shadow.matrix,D++}i.directional[S]=de,S++}else if(q.isSpotLight){let de=e.get(q);de.position.setFromMatrixPosition(q.matrixWorld),de.color.copy(j).multiplyScalar(X),de.distance=ce,de.coneCos=Math.cos(q.angle),de.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),de.decay=q.decay,i.spot[U]=de;let $=q.shadow;if(q.map&&(i.spotLightMap[T]=q.map,T++,$.updateMatrices(q),q.castShadow&&N++),i.spotLightMatrix[U]=$.matrix,q.castShadow){let ye=t.get(q);ye.shadowIntensity=$.intensity,ye.shadowBias=$.bias,ye.shadowNormalBias=$.normalBias,ye.shadowRadius=$.radius,ye.shadowMapSize=$.mapSize,i.spotShadow[U]=ye,i.spotShadowMap[U]=be,O++}U++}else if(q.isRectAreaLight){let de=e.get(q);de.color.copy(j).multiplyScalar(X),de.halfWidth.set(q.width*.5,0,0),de.halfHeight.set(0,q.height*.5,0),i.rectArea[k]=de,k++}else if(q.isPointLight){let de=e.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity),de.distance=q.distance,de.decay=q.decay,q.castShadow){let $=q.shadow,ye=t.get(q);ye.shadowIntensity=$.intensity,ye.shadowBias=$.bias,ye.shadowNormalBias=$.normalBias,ye.shadowRadius=$.radius,ye.shadowMapSize=$.mapSize,ye.shadowCameraNear=$.camera.near,ye.shadowCameraFar=$.camera.far,i.pointShadow[v]=ye,i.pointShadowMap[v]=be,i.pointShadowMatrix[v]=q.shadow.matrix,A++}i.point[v]=de,v++}else if(q.isHemisphereLight){let de=e.get(q);de.skyColor.copy(q.color).multiplyScalar(X),de.groundColor.copy(q.groundColor).multiplyScalar(X),i.hemi[R]=de,R++}}k>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$e.LTC_FLOAT_1,i.rectAreaLTC2=$e.LTC_FLOAT_2):(i.rectAreaLTC1=$e.LTC_HALF_1,i.rectAreaLTC2=$e.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=p;let Z=i.hash;(Z.sunLength!==y||Z.directionalLength!==S||Z.pointLength!==v||Z.spotLength!==U||Z.rectAreaLength!==k||Z.hemiLength!==R||Z.numSunShadows!==E||Z.numDirectionalShadows!==D||Z.numPointShadows!==A||Z.numSpotShadows!==O||Z.numSpotMaps!==T||Z.numLightProbes!==H)&&(i.sun.length=y,i.directional.length=S,i.spot.length=U,i.rectArea.length=k,i.point.length=v,i.hemi.length=R,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=F,i.sunShadowCascade.length=F,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.directionalShadowMatrix.length=D,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=O,i.spotShadowMap.length=O,i.spotLightMatrix.length=O+T-N,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=H,Z.sunLength=y,Z.directionalLength=S,Z.pointLength=v,Z.spotLength=U,Z.rectAreaLength=k,Z.hemiLength=R,Z.numSunShadows=E,Z.numDirectionalShadows=D,Z.numPointShadows=A,Z.numSpotShadows=O,Z.numSpotMaps=T,Z.numLightProbes=H,i.version=ME++)}function h(d,m){let _=0,p=0,y=0,E=0,F=0,S=0,v=m.matrixWorldInverse;for(let U=0,k=d.length;U<k;U++){let R=d[U];if(R.isSunLight){let D=i.sun[_];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(v),_++}else if(R.isDirectionalLight){let D=i.directional[p];D.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(v),p++}else if(R.isSpotLight){let D=i.spot[E];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(v),E++}else if(R.isRectAreaLight){let D=i.rectArea[F];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),l.identity(),o.copy(R.matrixWorld),o.premultiply(v),l.extractRotation(o),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(l),D.halfHeight.applyMatrix4(l),F++}else if(R.isPointLight){let D=i.point[y];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),y++}else if(R.isHemisphereLight){let D=i.hemi[S];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(v),S++}}}return{setup:u,setupView:h,state:i}}function Bp(n){let e=new TE(n),t=[],i=[],r=[];function o(p){_.camera=p,t.length=0,i.length=0,r.length=0}function l(p){t.push(p)}function u(p){i.push(p)}function h(p){r.push(p)}function d(){e.setup(t)}function m(p){e.setupView(t,p)}let _={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:_,setupLights:d,setupLightsView:m,pushLight:l,pushShadow:u,pushLightProbeGrid:h}}function AE(n){let e=new WeakMap;function t(r,o=0){let l=e.get(r),u;return l===void 0?(u=new Bp(n),e.set(r,[u])):o>=l.length?(u=new Bp(n),l.push(u)):u=l[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}var CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],IE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],kp=new rn,so=new ie,Dh=new ie;function LE(n,e,t){let i=new zs,r=new pt,o=new pt,l=new ln,u=new bl,h=new Sl,d={},m=t.maxTextureSize,_={[zi]:Xn,[Xn]:zi,[gi]:gi},p=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:CE,fragmentShader:RE}),y=p.clone();y.defines.HORIZONTAL_PASS=1;let E=new Wn;E.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let F=new Jn(E,p),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let v=this.type;this.render=function(A,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||A.length===0)return;this.type===Df&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ja);let N=n.getRenderTarget(),H=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Vi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Y=v!==this.type;Y&&O.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(j=>j.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,j=A.length;q<j;q++){let X=A[q],ce=X.shadow;if(ce===void 0){dt("WebGLShadowMap:",X,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;r.copy(ce.mapSize);let be=ce.getFrameExtents();r.multiply(be),o.copy(ce.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/be.x),r.x=o.x*be.x,ce.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/be.y),r.y=o.y*be.y,ce.mapSize.y=o.y));let de=n.state.buffers.depth.getReversed();if(ce.camera._reversedDepth=de,ce.map===null||Y===!0){if(ce.map!==null&&(ce.map.depthTexture!==null&&(ce.map.depthTexture.dispose(),ce.map.depthTexture=null),ce.map.dispose()),this.type===Ws){if(X.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ce.map=new Zn(r.x,r.y,{format:Cr,type:Fi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),ce.map.texture.name=X.name+".shadowMap",ce.map.depthTexture=new vr(r.x,r.y,Di),ce.map.depthTexture.name=X.name+".shadowMapDepth",ce.map.depthTexture.format=ki,ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Sn,ce.map.depthTexture.magFilter=Sn}else X.isPointLight?(ce.map=new Cc(r.x),ce.map.depthTexture=new yl(r.x,Li)):(ce.map=new Zn(r.x,r.y),ce.map.depthTexture=new vr(r.x,r.y,Li)),ce.map.depthTexture.name=X.name+".shadowMap",ce.map.depthTexture.format=ki,this.type===ja?(ce.map.depthTexture.compareFunction=de?Mc:wc,ce.map.depthTexture.minFilter=Mn,ce.map.depthTexture.magFilter=Mn):(ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Sn,ce.map.depthTexture.magFilter=Sn);ce.camera.updateProjectionMatrix()}ce.map.isWebGLCubeRenderTarget!==!0&&(ce.map.width!==r.x||ce.map.height!==r.y)&&ce.map.setSize(r.x,r.y);let $=ce.map.isWebGLCubeRenderTarget?6:ce.getViewportCount();X.isPointLight!==!0&&ce.updateMatrices(X,T);for(let ye=0;ye<$;ye++){let et=ce.getCamera(ye);if(X.isPointLight){let Je=ce.camera,Dt=ce.matrix,mt=X.distance||Je.far;mt!==Je.far&&(Je.far=mt,Je.updateProjectionMatrix()),so.setFromMatrixPosition(X.matrixWorld),Je.position.copy(so),Dh.copy(Je.position),Dh.add(PE[ye]),Je.up.copy(IE[ye]),Je.lookAt(Dh),Je.updateMatrixWorld(),Dt.makeTranslation(-so.x,-so.y,-so.z),kp.multiplyMatrices(Je.projectionMatrix,Je.matrixWorldInverse),ce._frustum.setFromProjectionMatrix(kp,Je.coordinateSystem,Je.reversedDepth)}if(ce.map.isWebGLCubeRenderTarget)n.setRenderTarget(ce.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(ce.map),n.clear());let Je=ce.getViewport(ye);l.set(o.x*Je.x,o.y*Je.y,o.x*Je.z,o.y*Je.w),W.viewport(l)}i=ce.getFrustum(ye),R(O,T,et,X,this.type)}ce.isPointLightShadow!==!0&&this.type===Ws&&U(ce,T),ce.needsUpdate=!1}v=this.type,S.needsUpdate=!1,n.setRenderTarget(N,H,Z)};function U(A,O){let T=e.update(F);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null?A.mapPass=new Zn(r.x,r.y,{format:Cr,type:Fi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),p.uniforms.shadow_pass.value=A.map.depthTexture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(O,null,T,p,F,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value.set(A.map.width,A.map.height),y.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(O,null,T,y,F,null)}function k(A,O,T,N){let H=null,Z=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(Z!==void 0)H=Z;else if(H=T.isPointLight===!0?h:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let W=H.uuid,Y=O.uuid,q=d[W];q===void 0&&(q={},d[W]=q);let j=q[Y];j===void 0&&(j=H.clone(),q[Y]=j,O.addEventListener("dispose",D)),H=j}if(H.visible=O.visible,H.wireframe=O.wireframe,N===Ws?H.side=O.shadowSide!==null?O.shadowSide:O.side:H.side=O.shadowSide!==null?O.shadowSide:_[O.side],H.alphaMap=O.alphaMap,H.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,H.map=O.map,H.clipShadows=O.clipShadows,H.clippingPlanes=O.clippingPlanes,H.clipIntersection=O.clipIntersection,H.displacementMap=O.displacementMap,H.displacementScale=O.displacementScale,H.displacementBias=O.displacementBias,H.wireframeLinewidth=O.wireframeLinewidth,H.linewidth=O.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let W=n.properties.get(H);W.light=T}return H}function R(A,O,T,N,H){if(A.visible===!1)return;if(A.layers.test(O.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&H===Ws)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let Y=e.update(A),q=A.material;if(Array.isArray(q)){let j=Y.groups;for(let X=0,ce=j.length;X<ce;X++){let be=j[X],de=q[be.materialIndex];if(de&&de.visible){let $=k(A,de,N,H);A.onBeforeShadow(n,A,O,T,Y,$,be),n.renderBufferDirect(T,null,Y,$,A,be),A.onAfterShadow(n,A,O,T,Y,$,be)}}}else if(q.visible){let j=k(A,q,N,H);A.onBeforeShadow(n,A,O,T,Y,j,null),n.renderBufferDirect(T,null,Y,j,A,null),A.onAfterShadow(n,A,O,T,Y,j,null)}}let W=A.children;for(let Y=0,q=W.length;Y<q;Y++)R(W[Y],O,T,N,H)}function D(A){A.target.removeEventListener("dispose",D);for(let T in d){let N=d[T],H=A.target.uuid;H in N&&(N[H].dispose(),delete N[H])}}}function DE(n,e){function t(){let Q=!1,ke=new ln,xe=null,ze=new ln(0,0,0,0);return{setMask:function(Xe){xe!==Xe&&!Q&&(n.colorMask(Xe,Xe,Xe,Xe),xe=Xe)},setLocked:function(Xe){Q=Xe},setClear:function(Xe,Se,rt,nt,$t){$t===!0&&(Xe*=nt,Se*=nt,rt*=nt),ke.set(Xe,Se,rt,nt),ze.equals(ke)===!1&&(n.clearColor(Xe,Se,rt,nt),ze.copy(ke))},reset:function(){Q=!1,xe=null,ze.set(-1,0,0,0)}}}function i(){let Q=!1,ke=!1,xe=null,ze=null,Xe=null;return{setReversed:function(Se){if(ke!==Se){let rt=e.get("EXT_clip_control");Se?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),ke=Se;let nt=Xe;Xe=null,this.setClear(nt)}},getReversed:function(){return ke},setTest:function(Se){Se?fe(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!Q&&(n.depthMask(Se),xe=Se)},setFunc:function(Se){if(ke&&(Se=pp[Se]),ze!==Se){switch(Se){case sl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ze=Se}},setLocked:function(Se){Q=Se},setClear:function(Se){Xe!==Se&&(Xe=Se,ke&&(Se=1-Se),n.clearDepth(Se))},reset:function(){Q=!1,xe=null,ze=null,Xe=null,ke=!1}}}function r(){let Q=!1,ke=null,xe=null,ze=null,Xe=null,Se=null,rt=null,nt=null,$t=null;return{setTest:function(Bt){Q||(Bt?fe(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Bt){ke!==Bt&&!Q&&(n.stencilMask(Bt),ke=Bt)},setFunc:function(Bt,En,$n){(xe!==Bt||ze!==En||Xe!==$n)&&(n.stencilFunc(Bt,En,$n),xe=Bt,ze=En,Xe=$n)},setOp:function(Bt,En,$n){(Se!==Bt||rt!==En||nt!==$n)&&(n.stencilOp(Bt,En,$n),Se=Bt,rt=En,nt=$n)},setLocked:function(Bt){Q=Bt},setClear:function(Bt){$t!==Bt&&(n.clearStencil(Bt),$t=Bt)},reset:function(){Q=!1,ke=null,xe=null,ze=null,Xe=null,Se=null,rt=null,nt=null,$t=null}}}let o=new t,l=new i,u=new r,h=new WeakMap,d=new WeakMap,m={},_={},p={},y=new WeakMap,E=[],F=null,S=!1,v=null,U=null,k=null,R=null,D=null,A=null,O=null,T=new At(0,0,0),N=0,H=!1,Z=null,W=null,Y=null,q=null,j=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ce=!1,be=0,de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(be=parseFloat(/^WebGL (\d)/.exec(de)[1]),ce=be>=1):de.indexOf("OpenGL ES")!==-1&&(be=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ce=be>=2);let $=null,ye={},et=n.getParameter(n.SCISSOR_BOX),Je=n.getParameter(n.VIEWPORT),Dt=new ln().fromArray(et),mt=new ln().fromArray(Je);function Ee(Q,ke,xe,ze){let Xe=new Uint8Array(4),Se=n.createTexture();n.bindTexture(Q,Se),n.texParameteri(Q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<xe;rt++)Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?n.texImage3D(ke,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Xe):n.texImage2D(ke+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Xe);return Se}let se={};se[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),fe(n.DEPTH_TEST),l.setFunc(Ls),ut(!1),Mt(qu),fe(n.CULL_FACE),_t(Vi);function fe(Q){m[Q]!==!0&&(n.enable(Q),m[Q]=!0)}function Pe(Q){m[Q]!==!1&&(n.disable(Q),m[Q]=!1)}function Ge(Q,ke){return p[Q]!==ke?(n.bindFramebuffer(Q,ke),p[Q]=ke,Q===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ke),Q===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ke),!0):!1}function we(Q,ke){let xe=E,ze=!1;if(Q){xe=y.get(ke),xe===void 0&&(xe=[],y.set(ke,xe));let Xe=Q.textures;if(xe.length!==Xe.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,rt=Xe.length;Se<rt;Se++)xe[Se]=n.COLOR_ATTACHMENT0+Se;xe.length=Xe.length,ze=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,ze=!0);ze&&n.drawBuffers(xe)}function gt(Q){return F!==Q?(n.useProgram(Q),F=Q,!0):!1}let Qt={[$r]:n.FUNC_ADD,[Nf]:n.FUNC_SUBTRACT,[Uf]:n.FUNC_REVERSE_SUBTRACT};Qt[Of]=n.MIN,Qt[Bf]=n.MAX;let St={[kf]:n.ZERO,[zf]:n.ONE,[Vf]:n.SRC_COLOR,[Ju]:n.SRC_ALPHA,[qf]:n.SRC_ALPHA_SATURATE,[Xf]:n.DST_COLOR,[Hf]:n.DST_ALPHA,[Gf]:n.ONE_MINUS_SRC_COLOR,[Ku]:n.ONE_MINUS_SRC_ALPHA,[$f]:n.ONE_MINUS_DST_COLOR,[Wf]:n.ONE_MINUS_DST_ALPHA,[Yf]:n.CONSTANT_COLOR,[jf]:n.ONE_MINUS_CONSTANT_COLOR,[Zf]:n.CONSTANT_ALPHA,[Jf]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(Q,ke,xe,ze,Xe,Se,rt,nt,$t,Bt){if(Q===Vi){S===!0&&(Pe(n.BLEND),S=!1);return}if(S===!1&&(fe(n.BLEND),S=!0),Q!==Ff){if(Q!==v||Bt!==H){if((U!==$r||D!==$r)&&(n.blendEquation(n.FUNC_ADD),U=$r,D=$r),Bt)switch(Q){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFunc(n.ONE,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ju:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zu:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",Q);break}k=null,R=null,A=null,O=null,T.set(0,0,0),N=0,v=Q,H=Bt}return}Xe=Xe||ke,Se=Se||xe,rt=rt||ze,(ke!==U||Xe!==D)&&(n.blendEquationSeparate(Qt[ke],Qt[Xe]),U=ke,D=Xe),(xe!==k||ze!==R||Se!==A||rt!==O)&&(n.blendFuncSeparate(St[xe],St[ze],St[Se],St[rt]),k=xe,R=ze,A=Se,O=rt),(nt.equals(T)===!1||$t!==N)&&(n.blendColor(nt.r,nt.g,nt.b,$t),T.copy(nt),N=$t),v=Q,H=!1}function ct(Q,ke){Q.side===gi?Pe(n.CULL_FACE):fe(n.CULL_FACE);let xe=Q.side===Xn;ke&&(xe=!xe),ut(xe),Q.blending===Xs&&Q.transparent===!1?_t(Vi):_t(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),l.setFunc(Q.depthFunc),l.setTest(Q.depthTest),l.setMask(Q.depthWrite),o.setMask(Q.colorWrite);let ze=Q.stencilWrite;u.setTest(ze),ze&&(u.setMask(Q.stencilWriteMask),u.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),u.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Ve(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(Q){Z!==Q&&(Q?n.frontFace(n.CW):n.frontFace(n.CCW),Z=Q)}function Mt(Q){Q!==If?(fe(n.CULL_FACE),Q!==W&&(Q===qu?n.cullFace(n.BACK):Q===Lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),W=Q}function Yt(Q){Q!==Y&&(ce&&n.lineWidth(Q),Y=Q)}function Ve(Q,ke,xe){Q?(fe(n.POLYGON_OFFSET_FILL),(q!==ke||j!==xe)&&(q=ke,j=xe,l.getReversed()&&(ke=-ke),n.polygonOffset(ke,xe))):Pe(n.POLYGON_OFFSET_FILL)}function Ye(Q){Q?fe(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function Zt(Q){Q===void 0&&(Q=n.TEXTURE0+X-1),$!==Q&&(n.activeTexture(Q),$=Q)}function J(Q,ke,xe){xe===void 0&&($===null?xe=n.TEXTURE0+X-1:xe=$);let ze=ye[xe];ze===void 0&&(ze={type:void 0,texture:void 0},ye[xe]=ze),(ze.type!==Q||ze.texture!==ke)&&($!==xe&&(n.activeTexture(xe),$=xe),n.bindTexture(Q,ke||se[Q]),ze.type=Q,ze.texture=ke)}function Wt(){let Q=ye[$];Q!==void 0&&Q.type!==void 0&&(n.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function w(){try{n.texSubImage2D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function ne(){try{n.texSubImage3D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function Fe(){try{n.texStorage2D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function Oe(){try{n.texStorage3D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function me(){try{n.texImage2D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function ve(){try{n.texImage3D(...arguments)}catch(Q){ft("WebGLState:",Q)}}function Be(Q){return _[Q]!==void 0?_[Q]:n.getParameter(Q)}function it(Q,ke){_[Q]!==ke&&(n.pixelStorei(Q,ke),_[Q]=ke)}function Ie(Q){Dt.equals(Q)===!1&&(n.scissor(Q.x,Q.y,Q.z,Q.w),Dt.copy(Q))}function Ne(Q){mt.equals(Q)===!1&&(n.viewport(Q.x,Q.y,Q.z,Q.w),mt.copy(Q))}function tt(Q,ke){let xe=d.get(ke);xe===void 0&&(xe=new WeakMap,d.set(ke,xe));let ze=xe.get(Q);ze===void 0&&(ze=n.getUniformBlockIndex(ke,Q.name),xe.set(Q,ze))}function lt(Q,ke){let ze=d.get(ke).get(Q);h.get(ke)!==ze&&(n.uniformBlockBinding(ke,ze,Q.__bindingPointIndex),h.set(ke,ze))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},_={},$=null,ye={},p={},y=new WeakMap,E=[],F=null,S=!1,v=null,U=null,k=null,R=null,D=null,A=null,O=null,T=new At(0,0,0),N=0,H=!1,Z=null,W=null,Y=null,q=null,j=null,Dt.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:fe,disable:Pe,bindFramebuffer:Ge,drawBuffers:we,useProgram:gt,setBlending:_t,setMaterial:ct,setFlipSided:ut,setCullFace:Mt,setLineWidth:Yt,setPolygonOffset:Ve,setScissorTest:Ye,activeTexture:Zt,bindTexture:J,unbindTexture:Wt,compressedTexImage2D:je,compressedTexImage3D:z,texImage2D:me,texImage3D:ve,pixelStorei:it,getParameter:Be,updateUBOMapping:tt,uniformBlockBinding:lt,texStorage2D:Fe,texStorage3D:Oe,texSubImage2D:w,texSubImage3D:ne,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Ie,viewport:Ne,reset:yt}}function FE(n,e,t,i,r,o,l){let u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new pt,m=new WeakMap,_=new Set,p,y=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function F(z,w){return E?new OffscreenCanvas(z,w):Ia("canvas")}function S(z,w,ne){let le=1,pe=je(z);if((pe.width>ne||pe.height>ne)&&(le=ne/Math.max(pe.width,pe.height)),le<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let Fe=Math.floor(le*pe.width),Oe=Math.floor(le*pe.height);p===void 0&&(p=F(Fe,Oe));let me=w?F(Fe,Oe):p;return me.width=Fe,me.height=Oe,me.getContext("2d").drawImage(z,0,0,Fe,Oe),dt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Fe+"x"+Oe+")."),me}else return"data"in z&&dt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),z;return z}function v(z){return z.generateMipmaps}function U(z){n.generateMipmap(z)}function k(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(z,w,ne,le,pe,Fe=!1){if(z!==null){if(n[z]!==void 0)return n[z];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Oe;le&&(Oe=e.get("EXT_texture_norm16"),Oe||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=w;if(w===n.RED&&(ne===n.FLOAT&&(me=n.R32F),ne===n.HALF_FLOAT&&(me=n.R16F),ne===n.UNSIGNED_BYTE&&(me=n.R8),ne===n.UNSIGNED_SHORT&&Oe&&(me=Oe.R16_EXT),ne===n.SHORT&&Oe&&(me=Oe.R16_SNORM_EXT)),w===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(me=n.R8UI),ne===n.UNSIGNED_SHORT&&(me=n.R16UI),ne===n.UNSIGNED_INT&&(me=n.R32UI),ne===n.BYTE&&(me=n.R8I),ne===n.SHORT&&(me=n.R16I),ne===n.INT&&(me=n.R32I)),w===n.RG&&(ne===n.FLOAT&&(me=n.RG32F),ne===n.HALF_FLOAT&&(me=n.RG16F),ne===n.UNSIGNED_BYTE&&(me=n.RG8),ne===n.UNSIGNED_SHORT&&Oe&&(me=Oe.RG16_EXT),ne===n.SHORT&&Oe&&(me=Oe.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(me=n.RG8UI),ne===n.UNSIGNED_SHORT&&(me=n.RG16UI),ne===n.UNSIGNED_INT&&(me=n.RG32UI),ne===n.BYTE&&(me=n.RG8I),ne===n.SHORT&&(me=n.RG16I),ne===n.INT&&(me=n.RG32I)),w===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(me=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(me=n.RGB16UI),ne===n.UNSIGNED_INT&&(me=n.RGB32UI),ne===n.BYTE&&(me=n.RGB8I),ne===n.SHORT&&(me=n.RGB16I),ne===n.INT&&(me=n.RGB32I)),w===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),ne===n.UNSIGNED_INT&&(me=n.RGBA32UI),ne===n.BYTE&&(me=n.RGBA8I),ne===n.SHORT&&(me=n.RGBA16I),ne===n.INT&&(me=n.RGBA32I)),w===n.RGB&&(ne===n.UNSIGNED_SHORT&&Oe&&(me=Oe.RGB16_EXT),ne===n.SHORT&&Oe&&(me=Oe.RGB16_SNORM_EXT),ne===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),ne===n.UNSIGNED_INT_10F_11F_11F_REV&&(me=n.R11F_G11F_B10F)),w===n.RGBA){let ve=Fe?Pa:zt.getTransfer(pe);ne===n.FLOAT&&(me=n.RGBA32F),ne===n.HALF_FLOAT&&(me=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(me=ve===qt?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT&&Oe&&(me=Oe.RGBA16_EXT),ne===n.SHORT&&Oe&&(me=Oe.RGBA16_SNORM_EXT),ne===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function D(z,w){let ne;return z?w===null||w===Li||w===qs?ne=n.DEPTH24_STENCIL8:w===Di?ne=n.DEPTH32F_STENCIL8:w===$s&&(ne=n.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Li||w===qs?ne=n.DEPTH_COMPONENT24:w===Di?ne=n.DEPTH_COMPONENT32F:w===$s&&(ne=n.DEPTH_COMPONENT16),ne}function A(z,w){return v(z)===!0||z.isFramebufferTexture&&z.minFilter!==Sn&&z.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function O(z){let w=z.target;w.removeEventListener("dispose",O),N(w),w.isVideoTexture&&m.delete(w),w.isHTMLTexture&&_.delete(w)}function T(z){let w=z.target;w.removeEventListener("dispose",T),Z(w)}function N(z){let w=i.get(z);if(w.__webglInit===void 0)return;let ne=z.source,le=y.get(ne);if(le){let pe=le[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&H(z),Object.keys(le).length===0&&y.delete(ne)}i.remove(z)}function H(z){let w=i.get(z);n.deleteTexture(w.__webglTexture);let ne=z.source,le=y.get(ne);delete le[w.__cacheKey],l.memory.textures--}function Z(z){let w=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(w.__webglFramebuffer[le]))for(let pe=0;pe<w.__webglFramebuffer[le].length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[le][pe]);else n.deleteFramebuffer(w.__webglFramebuffer[le]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[le])}else{if(Array.isArray(w.__webglFramebuffer))for(let le=0;le<w.__webglFramebuffer.length;le++)n.deleteFramebuffer(w.__webglFramebuffer[le]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let le=0;le<w.__webglColorRenderbuffer.length;le++)w.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[le]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ne=z.textures;for(let le=0,pe=ne.length;le<pe;le++){let Fe=i.get(ne[le]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),l.memory.textures--),i.remove(ne[le])}i.remove(z)}let W=0;function Y(){W=0}function q(){return W}function j(z){W=z}function X(){let z=W;return z>=r.maxTextures&&dt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+r.maxTextures),W+=1,z}function ce(z){let w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function be(z,w){let ne=i.get(z);if(z.isVideoTexture&&J(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ne.__version!==z.version){let le=z.image;if(le===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(ne,z,w);return}}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+w)}function de(z,w){let ne=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Pe(ne,z,w);return}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+w)}function $(z,w){let ne=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Pe(ne,z,w);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+w)}function ye(z,w){let ne=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ne.__version!==z.version){Ge(ne,z,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+w)}let et={[dl]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},Je={[Sn]:n.NEAREST,[ep]:n.NEAREST_MIPMAP_NEAREST,[Ja]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[kl]:n.LINEAR_MIPMAP_NEAREST,[Tr]:n.LINEAR_MIPMAP_LINEAR},Dt={[rp]:n.NEVER,[cp]:n.ALWAYS,[sp]:n.LESS,[wc]:n.LEQUAL,[ap]:n.EQUAL,[Mc]:n.GEQUAL,[op]:n.GREATER,[lp]:n.NOTEQUAL};function mt(z,w){if(w.type===Di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===kl||w.magFilter===Ja||w.magFilter===Tr||w.minFilter===Mn||w.minFilter===kl||w.minFilter===Ja||w.minFilter===Tr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,et[w.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,et[w.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,et[w.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,Je[w.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,Je[w.minFilter]),w.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,Dt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==Ja&&w.minFilter!==Tr||w.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(z,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(z,w){let ne=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",O));let le=w.source,pe=y.get(le);pe===void 0&&(pe={},y.set(le,pe));let Fe=ce(w);if(Fe!==z.__cacheKey){pe[Fe]===void 0&&(pe[Fe]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,ne=!0),pe[Fe].usedTimes++;let Oe=pe[z.__cacheKey];Oe!==void 0&&(pe[z.__cacheKey].usedTimes--,Oe.usedTimes===0&&H(w)),z.__cacheKey=Fe,z.__webglTexture=pe[Fe].texture}return ne}function se(z,w,ne){return Math.floor(Math.floor(z/ne)/w)}function fe(z,w,ne,le){let Fe=z.updateRanges;if(Fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,ne,le,w.data);else{Fe.sort((it,Ie)=>it.start-Ie.start);let Oe=0;for(let it=1;it<Fe.length;it++){let Ie=Fe[Oe],Ne=Fe[it],tt=Ie.start+Ie.count,lt=se(Ne.start,w.width,4),yt=se(Ie.start,w.width,4);Ne.start<=tt+1&&lt===yt&&se(Ne.start+Ne.count-1,w.width,4)===lt?Ie.count=Math.max(Ie.count,Ne.start+Ne.count-Ie.start):(++Oe,Fe[Oe]=Ne)}Fe.length=Oe+1;let me=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let it=0,Ie=Fe.length;it<Ie;it++){let Ne=Fe[it],tt=Math.floor(Ne.start/4),lt=Math.ceil(Ne.count/4),yt=tt%w.width,Q=Math.floor(tt/w.width),ke=lt,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),t.pixelStorei(n.UNPACK_SKIP_ROWS,Q),t.texSubImage2D(n.TEXTURE_2D,0,yt,Q,ke,xe,ne,le,w.data)}z.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,me),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be)}}function Pe(z,w,ne){let le=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=n.TEXTURE_3D);let pe=Ee(z,w),Fe=w.source;t.bindTexture(le,z.__webglTexture,n.TEXTURE0+ne);let Oe=i.get(Fe);if(Fe.version!==Oe.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+ne),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let xe=zt.getPrimaries(zt.workingColorSpace),ze=w.colorSpace===tr?null:zt.getPrimaries(w.colorSpace),Xe=w.colorSpace===tr||xe===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=S(w.image,!1,r.maxTextureSize);ve=Wt(w,ve);let Be=o.convert(w.format,w.colorSpace),it=o.convert(w.type),Ie=R(w.internalFormat,Be,it,w.normalized,w.colorSpace,w.isVideoTexture);mt(le,w);let Ne,tt=w.mipmaps,lt=w.isVideoTexture!==!0,yt=Oe.__version===void 0||pe===!0,Q=Fe.dataReady,ke=A(w,ve);if(w.isDepthTexture)Ie=D(w.format===Ar,w.type),yt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,Ie,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Be,it,null));else if(w.isDataTexture)if(tt.length>0){lt&&yt&&t.texStorage2D(n.TEXTURE_2D,ke,Ie,tt[0].width,tt[0].height);for(let xe=0,ze=tt.length;xe<ze;xe++)Ne=tt[xe],lt?Q&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Be,it,Ne.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Ne.width,Ne.height,0,Be,it,Ne.data);w.generateMipmaps=!1}else lt?(yt&&t.texStorage2D(n.TEXTURE_2D,ke,Ie,ve.width,ve.height),Q&&fe(w,ve,Be,it)):t.texImage2D(n.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Be,it,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Ie,tt[0].width,tt[0].height,ve.depth);for(let xe=0,ze=tt.length;xe<ze;xe++)if(Ne=tt[xe],w.format!==_i)if(Be!==null)if(lt){if(Q)if(w.layerUpdates.size>0){let Xe=Sh(Ne.width,Ne.height,w.format,w.type);for(let Se of w.layerUpdates){let rt=Ne.data.subarray(Se*Xe/Ne.data.BYTES_PER_ELEMENT,(Se+1)*Xe/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Se,Ne.width,Ne.height,1,Be,rt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,ve.depth,Be,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Ne.width,Ne.height,ve.depth,0,Ne.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,ve.depth,Be,it,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Ne.width,Ne.height,ve.depth,0,Be,it,Ne.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{lt&&yt&&t.texStorage2D(n.TEXTURE_2D,ke,Ie,tt[0].width,tt[0].height);for(let xe=0,ze=tt.length;xe<ze;xe++)Ne=tt[xe],w.format!==_i?Be!==null?lt?Q&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Be,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ie,Ne.width,Ne.height,0,Ne.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Q&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Be,it,Ne.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Ne.width,Ne.height,0,Be,it,Ne.data)}else if(w.isDataArrayTexture)if(lt){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Ie,ve.width,ve.height,ve.depth),Q)if(w.layerUpdates.size>0){let xe=Sh(ve.width,ve.height,w.format,w.type);for(let ze of w.layerUpdates){let Xe=ve.data.subarray(ze*xe/ve.data.BYTES_PER_ELEMENT,(ze+1)*xe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ze,ve.width,ve.height,1,Be,it,Xe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Be,it,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ve.width,ve.height,ve.depth,0,Be,it,ve.data);else if(w.isData3DTexture)lt?(yt&&t.texStorage3D(n.TEXTURE_3D,ke,Ie,ve.width,ve.height,ve.depth),Q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Be,it,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ve.width,ve.height,ve.depth,0,Be,it,ve.data);else if(w.isFramebufferTexture){if(yt)if(lt)t.texStorage2D(n.TEXTURE_2D,ke,Ie,ve.width,ve.height);else{let xe=ve.width,ze=ve.height;for(let Xe=0;Xe<ke;Xe++)t.texImage2D(n.TEXTURE_2D,Xe,Ie,xe,ze,0,Be,it,null),xe>>=1,ze>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ve.parentNode!==xe){xe.appendChild(ve),_.add(w),xe.onpaint=ze=>{let Xe=ze.changedElements;for(let Se of _)Xe.includes(Se.image)&&(Se.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{let Xe=n.RGBA,Se=n.RGBA,rt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Xe,Se,rt,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(tt.length>0){if(lt&&yt){let xe=je(tt[0]);t.texStorage2D(n.TEXTURE_2D,ke,Ie,xe.width,xe.height)}for(let xe=0,ze=tt.length;xe<ze;xe++)Ne=tt[xe],lt?Q&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Be,it,Ne):t.texImage2D(n.TEXTURE_2D,xe,Ie,Be,it,Ne);w.generateMipmaps=!1}else if(lt){if(yt){let xe=je(ve);t.texStorage2D(n.TEXTURE_2D,ke,Ie,xe.width,xe.height)}Q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,it,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Be,it,ve);v(w)&&U(le),Oe.__version=Fe.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Ge(z,w,ne){if(w.image.length!==6)return;let le=Ee(z,w),pe=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+ne);let Fe=i.get(pe);if(pe.version!==Fe.__version||le===!0){t.activeTexture(n.TEXTURE0+ne);let Oe=zt.getPrimaries(zt.workingColorSpace),me=w.colorSpace===tr?null:zt.getPrimaries(w.colorSpace),ve=w.colorSpace===tr||Oe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Be=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let Se=0;Se<6;Se++)!Be&&!it?Ie[Se]=S(w.image[Se],!0,r.maxCubemapSize):Ie[Se]=it?w.image[Se].image:w.image[Se],Ie[Se]=Wt(w,Ie[Se]);let Ne=Ie[0],tt=o.convert(w.format,w.colorSpace),lt=o.convert(w.type),yt=R(w.internalFormat,tt,lt,w.normalized,w.colorSpace),Q=w.isVideoTexture!==!0,ke=Fe.__version===void 0||le===!0,xe=pe.dataReady,ze=A(w,Ne);mt(n.TEXTURE_CUBE_MAP,w);let Xe;if(Be){Q&&ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,yt,Ne.width,Ne.height);for(let Se=0;Se<6;Se++){Xe=Ie[Se].mipmaps;for(let rt=0;rt<Xe.length;rt++){let nt=Xe[rt];w.format!==_i?tt!==null?Q?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,0,0,nt.width,nt.height,tt,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,yt,nt.width,nt.height,0,nt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,0,0,nt.width,nt.height,tt,lt,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,yt,nt.width,nt.height,0,tt,lt,nt.data)}}}else{if(Xe=w.mipmaps,Q&&ke){Xe.length>0&&ze++;let Se=je(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,yt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(it){Q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ie[Se].width,Ie[Se].height,tt,lt,Ie[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,yt,Ie[Se].width,Ie[Se].height,0,tt,lt,Ie[Se].data);for(let rt=0;rt<Xe.length;rt++){let $t=Xe[rt].image[Se].image;Q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,0,0,$t.width,$t.height,tt,lt,$t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,yt,$t.width,$t.height,0,tt,lt,$t.data)}}else{Q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,tt,lt,Ie[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,yt,tt,lt,Ie[Se]);for(let rt=0;rt<Xe.length;rt++){let nt=Xe[rt];Q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,0,0,tt,lt,nt.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,yt,tt,lt,nt.image[Se])}}}v(w)&&U(n.TEXTURE_CUBE_MAP),Fe.__version=pe.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function we(z,w,ne,le,pe,Fe){let Oe=o.convert(ne.format,ne.colorSpace),me=o.convert(ne.type),ve=R(ne.internalFormat,Oe,me,ne.normalized,ne.colorSpace),Be=i.get(w),it=i.get(ne);if(it.__renderTarget=w,!Be.__hasExternalTextures){let Ie=Math.max(1,w.width>>Fe),Ne=Math.max(1,w.height>>Fe);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Fe,ve,Ie,Ne,w.depth,0,Oe,me,null):t.texImage2D(pe,Fe,ve,Ie,Ne,0,Oe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,z),Zt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,pe,it.__webglTexture,0,Ye(w)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,pe,it.__webglTexture,Fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(z,w,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,z),w.depthBuffer){let le=w.depthTexture,pe=le&&le.isDepthTexture?le.type:null,Fe=D(w.stencilBuffer,pe),Oe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Zt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(w),Fe,w.width,w.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(w),Fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,z)}else{let le=w.textures;for(let pe=0;pe<le.length;pe++){let Fe=le[pe],Oe=o.convert(Fe.format,Fe.colorSpace),me=o.convert(Fe.type),ve=R(Fe.internalFormat,Oe,me,Fe.normalized,Fe.colorSpace);Zt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(w),ve,w.width,w.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(w),ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qt(z,w,ne){let le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(w.depthTexture);if(pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),mt(n.TEXTURE_CUBE_MAP,w.depthTexture);let Be=o.convert(w.depthTexture.format),it=o.convert(w.depthTexture.type),Ie;w.depthTexture.format===ki?Ie=n.DEPTH_COMPONENT24:w.depthTexture.format===Ar&&(Ie=n.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ie,w.width,w.height,0,Be,it,null)}}else be(w.depthTexture,0);let Fe=pe.__webglTexture,Oe=Ye(w),me=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+ne:n.TEXTURE_2D,ve=w.depthTexture.format===Ar?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===ki)Zt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,me,Fe,0,Oe):n.framebufferTexture2D(n.FRAMEBUFFER,ve,me,Fe,0);else if(w.depthTexture.format===Ar)Zt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,me,Fe,0,Oe):n.framebufferTexture2D(n.FRAMEBUFFER,ve,me,Fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(z){let w=i.get(z),ne=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){let le=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){let pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",pe)};le.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=le}if(z.depthTexture&&!w.__autoAllocateDepthBuffer)if(ne)for(let le=0;le<6;le++)Qt(w.__webglFramebuffer[le],z,le);else{let le=z.texture.mipmaps;le&&le.length>0?Qt(w.__webglFramebuffer[0],z,0):Qt(w.__webglFramebuffer,z,0)}else if(ne){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=n.createRenderbuffer(),gt(w.__webglDepthbuffer[le],z,!1);else{let pe=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=w.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,Fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Fe)}}else{let le=z.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),gt(w.__webglDepthbuffer,z,!1);else{let pe=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(z,w,ne){let le=i.get(z);w!==void 0&&we(le.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&St(z)}function ct(z){let w=z.texture,ne=i.get(z),le=i.get(w);z.addEventListener("dispose",T);let pe=z.textures,Fe=z.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=w.version,l.memory.textures++),Fe){ne.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[me]=[];for(let ve=0;ve<w.mipmaps.length;ve++)ne.__webglFramebuffer[me][ve]=n.createFramebuffer()}else ne.__webglFramebuffer[me]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)ne.__webglFramebuffer[me]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let me=0,ve=pe.length;me<ve;me++){let Be=i.get(pe[me]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),l.memory.textures++)}if(z.samples>0&&Zt(z)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){let ve=pe[me];ne.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[me]);let Be=o.convert(ve.format,ve.colorSpace),it=o.convert(ve.type),Ie=R(ve.internalFormat,Be,it,ve.normalized,ve.colorSpace,z.isXRRenderTarget===!0),Ne=Ye(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ie,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ne.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(ne.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Fe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),mt(n.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)we(ne.__webglFramebuffer[me][ve],z,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else we(ne.__webglFramebuffer[me],z,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(w)&&U(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let me=0,ve=pe.length;me<ve;me++){let Be=pe[me],it=i.get(Be),Ie=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ie=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,it.__webglTexture),mt(Ie,Be),we(ne.__webglFramebuffer,z,Be,n.COLOR_ATTACHMENT0+me,Ie,0),v(Be)&&U(Ie)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(me=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,le.__webglTexture),mt(me,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)we(ne.__webglFramebuffer[ve],z,w,n.COLOR_ATTACHMENT0,me,ve);else we(ne.__webglFramebuffer,z,w,n.COLOR_ATTACHMENT0,me,0);v(w)&&U(me),t.unbindTexture()}z.depthBuffer&&St(z)}function ut(z){let w=z.textures;for(let ne=0,le=w.length;ne<le;ne++){let pe=w[ne];if(v(pe)){let Fe=k(z),Oe=i.get(pe).__webglTexture;t.bindTexture(Fe,Oe),U(Fe),t.unbindTexture()}}}let Mt=[],Yt=[];function Ve(z){if(z.samples>0){if(Zt(z)===!1){let w=z.textures,ne=z.width,le=z.height,pe=n.COLOR_BUFFER_BIT,Fe=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(z),me=w.length>1;if(me)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);let ve=z.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Be]);let it=i.get(w[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,ne,le,0,0,ne,le,pe,n.NEAREST),h===!0&&(Mt.length=0,Yt.length=0,Mt.push(n.COLOR_ATTACHMENT0+Be),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Mt.push(Fe),Yt.push(Fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Be]);let it=i.get(w[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&h){let w=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ye(z){return Math.min(r.maxSamples,z.samples)}function Zt(z){let w=i.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function J(z){let w=l.render.frame;m.get(z)!==w&&(m.set(z,w),z.update())}function Wt(z,w){let ne=z.colorSpace,le=z.format,pe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ne!==Ra&&ne!==tr&&(zt.getTransfer(ne)===qt?(le!==_i||pe!==Kn)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",ne)),w}function je(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.getTextureUnits=q,this.setTextureUnits=j,this.setTexture2D=be,this.setTexture2DArray=de,this.setTexture3D=$,this.setTextureCube=ye,this.rebindTextures=_t,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NE(n,e){function t(i,r=tr){let o,l=zt.getTransfer(r);if(i===Kn)return n.UNSIGNED_BYTE;if(i===Vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lh)return n.BYTE;if(i===ch)return n.SHORT;if(i===$s)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===Fi)return n.HALF_FLOAT;if(i===dh)return n.ALPHA;if(i===fh)return n.RGB;if(i===_i)return n.RGBA;if(i===ki)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===Hl)return n.RED_INTEGER;if(i===Cr)return n.RG;if(i===Wl)return n.RG_INTEGER;if(i===Xl)return n.RGBA_INTEGER;if(i===Ka||i===Qa||i===eo||i===to)if(l===qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===ql||i===Yl||i===jl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===$l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zl||i===Jl||i===Kl||i===Ql||i===ec||i===no||i===tc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Zl||i===Jl)return l===qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Kl)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ql)return o.COMPRESSED_R11_EAC;if(i===ec)return o.COMPRESSED_SIGNED_R11_EAC;if(i===no)return o.COMPRESSED_RG11_EAC;if(i===tc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===nc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gc||i===_c||i===vc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===gc)return l===qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yc||i===xc||i===io||i===bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===yc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===io)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var UE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ci({vertexShader:UE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends Pi{constructor(e,t){super();let i=this,r=null,o=1,l=null,u="local-floor",h=1,d=null,m=null,_=null,p=null,y=null,E=null,F=typeof XRWebGLBinding<"u",S=new Vh,v={},U=t.getContextAttributes(),k=null,R=null,D=[],A=[],O=new pt,T=null,N=null,H=new Fn;H.viewport=new ln;let Z=new Fn;Z.viewport=new ln;let W=[H,Z],Y=new Nl,q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let fe=D[se];return fe===void 0&&(fe=new Os,D[se]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(se){let fe=D[se];return fe===void 0&&(fe=new Os,D[se]=fe),fe.getGripSpace()},this.getHand=function(se){let fe=D[se];return fe===void 0&&(fe=new Os,D[se]=fe),fe.getHandSpace()};function X(se){let fe=A.indexOf(se.inputSource);if(fe===-1)return;let Pe=D[fe];Pe!==void 0&&(Pe.update(se.inputSource,se.frame,d||l),Pe.dispatchEvent({type:se.type,data:se.inputSource}))}function ce(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",be);for(let se=0;se<D.length;se++){let fe=A[se];fe!==null&&(A[se]=null,D[se].disconnect(fe))}q=null,j=null,S.reset();for(let se in v)delete v[se];if(e.setRenderTarget(k),y=null,p=null,_=null,r=null,R=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),N!==null){let se=N.camera;se.fov=N.fov,se.zoom=N.zoom,se.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){o=se,i.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){u=se,i.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(se){d=se},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return _===null&&F&&(_=new XRWebGLBinding(r,t)),_},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(k=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",be),U.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),F&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Ge=null,we=null;U.depth&&(we=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=U.stencil?Ar:ki,Ge=U.stencil?qs:Li);let gt={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:o};_=this.getBinding(),p=_.createProjectionLayer(gt),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Zn(p.textureWidth,p.textureHeight,{format:_i,type:Kn,depthTexture:new vr(p.textureWidth,p.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Pe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,Pe),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Zn(y.framebufferWidth,y.framebufferHeight,{format:_i,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await r.requestReferenceSpace(u),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function be(se){for(let fe=0;fe<se.removed.length;fe++){let Pe=se.removed[fe],Ge=A.indexOf(Pe);Ge>=0&&(A[Ge]=null,D[Ge].disconnect(Pe))}for(let fe=0;fe<se.added.length;fe++){let Pe=se.added[fe],Ge=A.indexOf(Pe);if(Ge===-1){for(let gt=0;gt<D.length;gt++)if(gt>=A.length){A.push(Pe),Ge=gt;break}else if(A[gt]===null){A[gt]=Pe,Ge=gt;break}if(Ge===-1)break}let we=D[Ge];we&&we.connect(Pe)}}let de=new ie,$=new ie;function ye(se,fe,Pe){de.setFromMatrixPosition(fe.matrixWorld),$.setFromMatrixPosition(Pe.matrixWorld);let Ge=de.distanceTo($),we=fe.projectionMatrix.elements,gt=Pe.projectionMatrix.elements,Qt=we[14]/(we[10]-1),St=we[14]/(we[10]+1),_t=(we[9]+1)/we[5],ct=(we[9]-1)/we[5],ut=(we[8]-1)/we[0],Mt=(gt[8]+1)/gt[0],Yt=Qt*ut,Ve=Qt*Mt,Ye=Ge/(-ut+Mt),Zt=Ye*-ut;if(fe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Zt),se.translateZ(Ye),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),we[10]===-1)se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let J=Qt+Ye,Wt=St+Ye,je=Yt-Zt,z=Ve+(Ge-Zt),w=_t*St/Wt*J,ne=ct*St/Wt*J;se.projectionMatrix.makePerspective(je,z,w,ne,J,Wt),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function et(se,fe){fe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(fe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let fe=se.near,Pe=se.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Pe=S.depthFar)),Y.near=Z.near=H.near=fe,Y.far=Z.far=H.far=Pe,(q!==Y.near||j!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),q=Y.near,j=Y.far),Y.layers.mask=se.layers.mask|6,H.layers.mask=Y.layers.mask&-5,Z.layers.mask=Y.layers.mask&-3;let Ge=se.parent,we=Y.cameras;et(Y,Ge);for(let gt=0;gt<we.length;gt++)et(we[gt],Ge);we.length===2?ye(Y,H,Z):Y.projectionMatrix.copy(H.projectionMatrix),N===null&&se.isPerspectiveCamera&&(N={camera:se,fov:se.fov,zoom:se.zoom}),Je(se,Y,Ge)};function Je(se,fe,Pe){Pe===null?se.matrix.copy(fe.matrixWorld):(se.matrix.copy(Pe.matrixWorld),se.matrix.invert(),se.matrix.multiply(fe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ns*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(p===null&&y===null))return h},this.setFoveation=function(se){h=se,p!==null&&(p.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(se){return v[se]};let Dt=null;function mt(se,fe){if(m=fe.getViewerPose(d||l),E=fe,m!==null){let Pe=m.views;y!==null&&(e.setRenderTargetFramebuffer(R,y.framebuffer),e.setRenderTarget(R));let Ge=!1;Pe.length!==Y.cameras.length&&(Y.cameras.length=0,Ge=!0);for(let St=0;St<Pe.length;St++){let _t=Pe[St],ct=null;if(y!==null)ct=y.getViewport(_t);else{let Mt=_.getViewSubImage(p,_t);ct=Mt.viewport,St===0&&(e.setRenderTargetTextures(R,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(R))}let ut=W[St];ut===void 0&&(ut=new Fn,ut.layers.enable(St),ut.viewport=new ln,W[St]=ut),ut.matrix.fromArray(_t.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(_t.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ct.x,ct.y,ct.width,ct.height),St===0&&(Y.matrix.copy(ut.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ge===!0&&Y.cameras.push(ut)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&F){_=i.getBinding();let St=_.getDepthInformation(Pe[0]);St&&St.isValid&&St.texture&&S.init(St,r.renderState)}if(we&&we.includes("camera-access")&&F){e.state.unbindTexture(),_=i.getBinding();for(let St=0;St<Pe.length;St++){let _t=Pe[St].camera;if(_t){let ct=v[_t];ct||(ct=new ka,v[_t]=ct);let ut=_.getCameraImage(_t);ct.sourceTexture=ut}}}}for(let Pe=0;Pe<D.length;Pe++){let Ge=A[Pe],we=D[Pe];Ge!==null&&we!==void 0&&we.update(Ge,fe,d||l)}Dt&&Dt(se,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),E=null}let Ee=new zp;Ee.setAnimationLoop(mt),this.setAnimationLoop=function(se){Dt=se},this.dispose=function(){}}},BE=new rn,$p=new wt;$p.set(-1,0,0,0,1,0,0,0,1);function kE(n,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function i(S,v){v.color.getRGB(S.fogColor.value,yh(n)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function r(S,v,U,k,R){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?o(S,v):v.isMeshLambertMaterial?(o(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(o(S,v),_(S,v)):v.isMeshPhongMaterial?(o(S,v),m(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(o(S,v),p(S,v),v.isMeshPhysicalMaterial&&y(S,v,R)):v.isMeshMatcapMaterial?(o(S,v),E(S,v)):v.isMeshDepthMaterial?o(S,v):v.isMeshDistanceMaterial?(o(S,v),F(S,v)):v.isMeshNormalMaterial?o(S,v):v.isLineBasicMaterial?(l(S,v),v.isLineDashedMaterial&&u(S,v)):v.isPointsMaterial?h(S,v,U,k):v.isSpriteMaterial?d(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Xn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Xn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);let U=e.get(v),k=U.envMap,R=U.envMapRotation;k&&(S.envMap.value=k,S.envMapRotation.value.setFromMatrix4(BE.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply($p),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function l(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function u(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,U,k){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*U,S.scale.value=k*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function p(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,U){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.retroreflectivity>0&&(S.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function F(S,v){let U=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zE(n,e,t,i){let r={},o={},l=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,D){let A=D.program;i.uniformBlockBinding(R,A)}function d(R,D){let A=r[R.id];A===void 0&&(S(R),A=m(R),r[R.id]=A,R.addEventListener("dispose",U));let O=D.program;i.updateUBOMapping(R,O);let T=e.render.frame;o[R.id]!==T&&(p(R),o[R.id]=T)}function m(R){let D=_();R.__bindingPointIndex=D;let A=n.createBuffer(),O=R.__size,T=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,O,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,A),A}function _(){for(let R=0;R<u;R++)if(l.indexOf(R)===-1)return l.push(R),R;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){let D=r[R.id],A=R.uniforms,O=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let T=0,N=A.length;T<N;T++){let H=A[T];if(Array.isArray(H))for(let Z=0,W=H.length;Z<W;Z++)y(H[Z],T,Z,O);else y(H,T,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(R,D,A,O){if(F(R,D,A,O)===!0){let T=R.__offset,N=R.value;if(Array.isArray(N)){let H=0;for(let Z=0;Z<N.length;Z++){let W=N[Z],Y=v(W);E(W,R.__data,H),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,R.__data)}}function E(R,D,A){typeof R=="number"||typeof R=="boolean"?D[0]=R:R.isMatrix3?(D[0]=R.elements[0],D[1]=R.elements[1],D[2]=R.elements[2],D[3]=0,D[4]=R.elements[3],D[5]=R.elements[4],D[6]=R.elements[5],D[7]=0,D[8]=R.elements[6],D[9]=R.elements[7],D[10]=R.elements[8],D[11]=0):ArrayBuffer.isView(R)?D.set(new R.constructor(R.buffer,R.byteOffset,D.length)):R.toArray(D,A)}function F(R,D,A,O){let T=R.value,N=D+"_"+A;if(O[N]===void 0)return typeof T=="number"||typeof T=="boolean"?O[N]=T:ArrayBuffer.isView(T)?O[N]=T.slice():O[N]=T.clone(),!0;{let H=O[N];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return O[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(H.equals(T)===!1)return H.copy(T),!0}}return!1}function S(R){let D=R.uniforms,A=0,O=16;for(let N=0,H=D.length;N<H;N++){let Z=Array.isArray(D[N])?D[N]:[D[N]];for(let W=0,Y=Z.length;W<Y;W++){let q=Z[W],j=Array.isArray(q.value)?q.value:[q.value];for(let X=0,ce=j.length;X<ce;X++){let be=j[X],de=v(be),$=A%O,ye=$%de.boundary,et=$+ye;A+=ye,et!==0&&O-et<de.storage&&(A+=O-et),q.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=de.storage}}}let T=A%O;return T>0&&(A+=O-T),R.__size=A,R.__cache={},this}function v(R){let D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",R),D}function U(R){let D=R.target;D.removeEventListener("dispose",U);let A=l.indexOf(D.__bindingPointIndex);l.splice(A,1),n.deleteBuffer(r[D.id]),delete r[D.id],delete o[D.id]}function k(){for(let R in r)n.deleteBuffer(r[R]);l=[],r={},o={}}return{bind:h,update:d,dispose:k}}var VE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function GE(){return Gi===null&&(Gi=new vl(VE,16,16,Cr,Fi),Gi.name="DFG_LUT",Gi.minFilter=Mn,Gi.magFilter=Mn,Gi.wrapS=Bi,Gi.wrapT=Bi,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Rc=class{constructor(e={}){let{canvas:t=hp(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:p=!1,outputBufferType:y=Kn}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=l;let F=y,S=new Set([Xl,Wl,Hl]),v=new Set([Kn,Li,$s,qs,Vl,Gl]),U=new Uint32Array(4),k=new Int32Array(4),R=new ie,D=null,A=null,O=[],T=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,Z=!1,W=null,Y=null,q=null,j=null;this._outputColorSpace=Vn;let X=0,ce=0,be=null,de=-1,$=null,ye=new ln,et=new ln,Je=null,Dt=new At(0),mt=0,Ee=t.width,se=t.height,fe=1,Pe=null,Ge=null,we=new ln(0,0,Ee,se),gt=new ln(0,0,Ee,se),Qt=!1,St=new zs,_t=!1,ct=!1,ut=new rn,Mt=new ie,Yt=new ln,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Zt(){return be===null?fe:1}let J=i;function Wt(I,K){return t.getContext(I,K)}let je,z,w,ne,le,pe,Fe,Oe,me,ve,Be,it,Ie,Ne,tt,lt,yt,Q,ke,xe,ze,Xe,Se;try{let I={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",$t,!1),t.addEventListener("webglcontextrestored",Bt,!1),t.addEventListener("webglcontextcreationerror",En,!1),J===null){let K="webgl2";if(J=Wt(K,I),J===null)throw Wt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(I){throw t.removeEventListener("webglcontextlost",$t,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),ft("WebGLRenderer: "+I.message),I}function rt(){je=new jw(J),je.init(),ze=new NE(J,je),z=new kw(J,je,e,ze),w=new DE(J,je),z.reversedDepthBuffer&&p&&w.buffers.depth.setReversed(!0),Y=J.createFramebuffer(),q=J.createFramebuffer(),j=J.createFramebuffer(),ne=new Kw(J),le=new yE,pe=new FE(J,je,w,le,z,ze,ne),Fe=new Yw(H),Oe=new eb(J),Xe=new Ow(J,Oe),me=new Zw(J,Oe,ne,Xe),ve=new eM(J,me,Oe,Xe,ne),Q=new Qw(J,z,pe),tt=new zw(le),Be=new vE(H,Fe,je,z,Xe,tt),it=new kE(H,le),Ie=new bE,Ne=new AE(je),yt=new Uw(H,Fe,w,ve,E,h),lt=new LE(H,ve,z),Se=new zE(J,ne,z,w),ke=new Bw(J,je,ne),xe=new Jw(J,je,ne),ne.programs=Be.programs,H.capabilities=z,H.extensions=je,H.properties=le,H.renderLists=Ie,H.shadowMap=lt,H.state=w,H.info=ne}F!==Kn&&(N=new nM(F,t.width,t.height,u,r,o));let nt=new Gh(H,J);this.xr=nt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let I=je.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=je.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(I){I!==void 0&&(fe=I,this.setSize(Ee,se,!1))},this.getSize=function(I){return I.set(Ee,se)},this.setSize=function(I,K,ue=!0){if(nt.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=I,se=K,t.width=Math.floor(I*fe),t.height=Math.floor(K*fe),ue===!0&&(t.style.width=I+"px",t.style.height=K+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(Ee*fe,se*fe).floor()},this.setDrawingBufferSize=function(I,K,ue){Ee=I,se=K,fe=ue,t.width=Math.floor(I*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,I,K)},this.setEffects=function(I){if(F===Kn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let K=0;K<I.length;K++)if(I[K].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(ye)},this.getViewport=function(I){return I.copy(we)},this.setViewport=function(I,K,ue,ae){I.isVector4?we.set(I.x,I.y,I.z,I.w):we.set(I,K,ue,ae),w.viewport(ye.copy(we).multiplyScalar(fe).round())},this.getScissor=function(I){return I.copy(gt)},this.setScissor=function(I,K,ue,ae){I.isVector4?gt.set(I.x,I.y,I.z,I.w):gt.set(I,K,ue,ae),w.scissor(et.copy(gt).multiplyScalar(fe).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(I){w.setScissorTest(Qt=I)},this.setOpaqueSort=function(I){Pe=I},this.setTransparentSort=function(I){Ge=I},this.getClearColor=function(I){return I.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,ue=!0){let ae=0;if(I){let re=!1;if(be!==null){let He=be.texture.format;re=S.has(He)}if(re){let He=be.texture.type,Ce=v.has(He),We=yt.getClearColor(),Ke=yt.getClearAlpha(),qe=We.r,xt=We.g,bt=We.b;Ce?(U[0]=qe,U[1]=xt,U[2]=bt,U[3]=Ke,J.clearBufferuiv(J.COLOR,0,U)):(k[0]=qe,k[1]=xt,k[2]=bt,k[3]=Ke,J.clearBufferiv(J.COLOR,0,k))}else ae|=J.COLOR_BUFFER_BIT}K&&(ae|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ae|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&J.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),W=I},this.dispose=function(){t.removeEventListener("webglcontextlost",$t,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),yt.dispose(),Ie.dispose(),Ne.dispose(),le.dispose(),Fe.dispose(),ve.dispose(),Xe.dispose(),Se.dispose(),Be.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Tn),nt.removeEventListener("sessionend",nr),An.stop()};function $t(I){I.preventDefault(),gh("WebGLRenderer: Context Lost."),Z=!0}function Bt(){gh("WebGLRenderer: Context Restored."),Z=!1;let I=ne.autoReset,K=lt.enabled,ue=lt.autoUpdate,ae=lt.needsUpdate,re=lt.type;rt(),ne.autoReset=I,lt.enabled=K,lt.autoUpdate=ue,lt.needsUpdate=ae,lt.type=re}function En(I){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function $n(I){let K=I.target;K.removeEventListener("dispose",$n),Ir(K)}function Ir(I){xi(I),le.remove(I)}function xi(I){let K=le.get(I).programs;K!==void 0&&(K.forEach(function(ue){Be.releaseProgram(ue)}),I.isShaderMaterial&&Be.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,ue,ae,re,He){K===null&&(K=Ve);let Ce=re.isMesh&&re.matrixWorld.determinantAffine()<0,We=ar(I,K,ue,ae,re);w.setMaterial(ae,Ce);let Ke=ue.index,qe=1;if(ae.wireframe===!0){if(Ke=me.getWireframeAttribute(ue),Ke===void 0)return;qe=2}let xt=ue.drawRange,bt=ue.attributes.position,Qe=xt.start*qe,kt=(xt.start+xt.count)*qe;He!==null&&(Qe=Math.max(Qe,He.start*qe),kt=Math.min(kt,(He.start+He.count)*qe)),Ke!==null?(Qe=Math.max(Qe,0),kt=Math.min(kt,Ke.count)):bt!=null&&(Qe=Math.max(Qe,0),kt=Math.min(kt,bt.count));let tn=kt-Qe;if(tn<0||tn===1/0)return;Xe.setup(re,ae,We,ue,Ke);let Ft,Xt=ke;if(Ke!==null&&(Ft=Oe.get(Ke),Xt=xe,Xt.setIndex(Ft)),re.isMesh)ae.wireframe===!0?(w.setLineWidth(ae.wireframeLinewidth*Zt()),Xt.setMode(J.LINES)):Xt.setMode(J.TRIANGLES);else if(re.isLine){let st=ae.linewidth;st===void 0&&(st=1),w.setLineWidth(st*Zt()),re.isLineSegments?Xt.setMode(J.LINES):re.isLineLoop?Xt.setMode(J.LINE_LOOP):Xt.setMode(J.LINE_STRIP)}else re.isPoints?Xt.setMode(J.POINTS):re.isSprite&&Xt.setMode(J.TRIANGLES);if(re.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Xt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let st=re._multiDrawStarts,Ze=re._multiDrawCounts,fn=re._multiDrawCount,Nt=Ke?Oe.get(Ke).bytesPerElement:1,cn=le.get(ae).currentProgram.getUniforms();for(let Rn=0;Rn<fn;Rn++)cn.setValue(J,"_gl_DrawID",Rn),Xt.render(st[Rn]/Nt,Ze[Rn])}else if(re.isInstancedMesh)Xt.renderInstances(Qe,tn,re.count);else if(ue.isInstancedBufferGeometry){let st=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ze=Math.min(ue.instanceCount,st);Xt.renderInstances(Qe,tn,Ze)}else Xt.render(Qe,tn)};function is(I,K,ue,ae){W!==null&&I.isNodeMaterial&&W.setObject(ae,I),_t===!0&&tt.setState(I,ue,!1),I.transparent===!0&&I.side===gi&&I.forceSinglePass===!1?(I.side=Xn,I.needsUpdate=!0,rr(I,K,ae),I.side=zi,I.needsUpdate=!0,rr(I,K,ae),I.side=gi):rr(I,K,ae)}this.compile=function(I,K,ue=null){ue===null&&(ue=I),W!==null&&W.renderStart(I,K,ue),A=Ne.get(ue),A.init(K),T.push(A),ue.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),I!==ue&&I.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),A.setupLights(),W!==null&&W.updateLights(A.state.lightsArray),ct=this.localClippingEnabled,_t=tt.init(this.clippingPlanes,ct),_t===!0&&tt.setGlobalState(this.clippingPlanes,K),W!==null&&lt.render(A.state.shadowsArray,ue,K);let ae=new Set;return I.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let He=re.material;if(He)if(Array.isArray(He))for(let Ce=0;Ce<He.length;Ce++){let We=He[Ce];is(We,ue,K,re),ae.add(We)}else is(He,ue,K,re),ae.add(He)}),A=T.pop(),W!==null&&W.renderEnd(),ae},this.compileAsync=function(I,K,ue=null){let ae=this.compile(I,K,ue);return new Promise(re=>{function He(){if(ae.forEach(function(Ce){let Ke=le.get(Ce).currentProgram;(Ke===void 0||Ke.isReady())&&ae.delete(Ce)}),ae.size===0){re(I);return}setTimeout(He,10)}je.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Te=null;function Ae(I){Te&&Te(I)}function Tn(){An.stop()}function nr(){An.start()}let An=new zp;An.setAnimationLoop(Ae),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(I){Te=I,nt.setAnimationLoop(I),I===null?An.stop():An.start()},nt.addEventListener("sessionstart",Tn),nt.addEventListener("sessionend",nr),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;W!==null&&W.renderStart(I,K);let ue=nt.enabled===!0&&nt.isPresenting===!0,ae=N!==null&&(be===null||ue)&&N.begin(H,be);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(K),K=nt.getCamera()),I.isScene===!0&&I.onBeforeRender(H,I,K,be),A=Ne.get(I,T.length),A.init(K),A.state.textureUnits=pe.getTextureUnits(),T.push(A),ut.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),St.setFromProjectionMatrix(ut,Ci,K.reversedDepth),ct=this.localClippingEnabled,_t=tt.init(this.clippingPlanes,ct),D=Ie.get(I,O.length),D.init(),O.push(D),nt.enabled===!0&&nt.isPresenting===!0){let Ce=H.xr.getDepthSensingMesh();Ce!==null&&On(Ce,K,-1/0,H.sortObjects)}On(I,K,0,H.sortObjects),D.finish(),W!==null&&W.updateLights(A.state.lightsArray),H.sortObjects===!0&&D.sort(Pe,Ge),Ye=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Ye&&yt.addToRenderList(D,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&tt.beginShadows();let re=A.state.shadowsArray;if(lt.render(re,I,K),_t===!0&&tt.endShadows(),(ae&&N.hasRenderPass())===!1){let Ce=D.opaque,We=D.transmissive;if(A.setupLights(),K.isArrayCamera){let Ke=K.cameras;if(We.length>0)for(let qe=0,xt=Ke.length;qe<xt;qe++){let bt=Ke[qe];qn(Ce,We,I,bt)}Ye&&yt.render(I);for(let qe=0,xt=Ke.length;qe<xt;qe++){let bt=Ke[qe];ir(D,I,bt,bt.viewport)}}else We.length>0&&qn(Ce,We,I,K),Ye&&yt.render(I),ir(D,I,K)}be!==null&&ce===0&&(pe.updateMultisampleRenderTarget(be),pe.updateRenderTargetMipmap(be)),ae&&N.end(H),I.isScene===!0&&I.onAfterRender(H,I,K),Xe.resetDefaultState(),de=-1,$=null,T.pop(),T.length>0?(A=T[T.length-1],pe.setTextureUnits(A.state.textureUnits),_t===!0&&tt.setGlobalState(H.clippingPlanes,A.state.camera)):A=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,W!==null&&W.renderEnd()};function On(I,K,ue,ae){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)ue=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLightProbeGrid)A.pushLightProbeGrid(I);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(St)){ae&&Yt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ut);let Ce=ve.update(I),We=I.material;We.visible&&D.push(I,Ce,We,ue,Yt.z,null,K)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(St))){let Ce=ve.update(I),We=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Yt.copy(I.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Yt.copy(Ce.boundingSphere.center)),Yt.applyMatrix4(I.matrixWorld).applyMatrix4(ut)),Array.isArray(We)){let Ke=Ce.groups;for(let qe=0,xt=Ke.length;qe<xt;qe++){let bt=Ke[qe],Qe=We[bt.materialIndex];Qe&&Qe.visible&&D.push(I,Ce,Qe,ue,Yt.z,bt,K)}}else We.visible&&D.push(I,Ce,We,ue,Yt.z,null,K)}}let He=I.children;for(let Ce=0,We=He.length;Ce<We;Ce++)On(He[Ce],K,ue,ae)}function ir(I,K,ue,ae){let{opaque:re,transmissive:He,transparent:Ce}=I;A.setupLightsView(ue),_t===!0&&tt.setGlobalState(H.clippingPlanes,ue),ae&&w.viewport(ye.copy(ae)),re.length>0&&ti(re,K,ue),He.length>0&&ti(He,K,ue),Ce.length>0&&ti(Ce,K,ue),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function qn(I,K,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ae.id]===void 0){let Qe=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ae.id]=new Zn(1,1,{generateMipmaps:!0,type:Qe?Fi:Kn,minFilter:Tr,samples:Math.max(4,z.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let He=A.state.transmissionRenderTarget[ae.id],Ce=ae.viewport||ye;He.setSize(Ce.z*H.transmissionResolutionScale,Ce.w*H.transmissionResolutionScale);let We=H.getRenderTarget(),Ke=H.getActiveCubeFace(),qe=H.getActiveMipmapLevel();H.setRenderTarget(He),H.getClearColor(Dt),mt=H.getClearAlpha(),mt<1&&H.setClearColor(16777215,.5),H.clear(),Ye&&yt.render(ue);let xt=H.toneMapping;H.toneMapping=Ii;let bt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),A.setupLightsView(ae),_t===!0&&tt.setGlobalState(H.clippingPlanes,ae),ti(I,ue,ae),pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He),je.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let kt=0,tn=K.length;kt<tn;kt++){let Ft=K[kt],{object:Xt,geometry:st,material:Ze,group:fn}=Ft;if(Ze.side===gi&&Xt.layers.test(ae.layers)){let Nt=Ze.side;Ze.side=Xn,Ze.needsUpdate=!0,Wi(Xt,ue,ae,st,Ze,fn),Ze.side=Nt,Ze.needsUpdate=!0,Qe=!0}}Qe===!0&&(pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He))}H.setRenderTarget(We,Ke,qe),H.setClearColor(Dt,mt),bt!==void 0&&(ae.viewport=bt),H.toneMapping=xt}function ti(I,K,ue){let ae=K.isScene===!0?K.overrideMaterial:null;for(let re=0,He=I.length;re<He;re++){let Ce=I[re],{object:We,geometry:Ke,group:qe}=Ce,xt=Ce.material;xt.allowOverride===!0&&ae!==null&&(xt=ae),We.layers.test(ue.layers)&&Wi(We,K,ue,Ke,xt,qe)}}function Wi(I,K,ue,ae,re,He){W!==null&&re.isNodeMaterial&&W.setObject(I,re),I.onBeforeRender(H,K,ue,ae,re,He),I.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),re.onBeforeRender(H,K,ue,ae,I,He),re.transparent===!0&&re.side===gi&&re.forceSinglePass===!1?(re.side=Xn,re.needsUpdate=!0,H.renderBufferDirect(ue,K,ae,re,I,He),re.side=zi,re.needsUpdate=!0,H.renderBufferDirect(ue,K,ae,re,I,He),re.side=gi):H.renderBufferDirect(ue,K,ae,re,I,He),I.onAfterRender(H,K,ue,ae,re,He)}function rr(I,K,ue){K.isScene!==!0&&(K=Ve);let ae=le.get(I),re=A.state.lights,He=A.state.shadowsArray,Ce=re.state.version,We=Be.getParameters(I,re.state,He,K,ue,A.state.lightProbeGridArray),Ke=Be.getProgramCacheKey(We),qe=ae.programs;ae.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?K.environment:null,ae.fog=K.fog;let xt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ae.envMap=Fe.get(I.envMap||ae.environment,xt),ae.envMapRotation=ae.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,qe===void 0&&(I.addEventListener("dispose",$n),qe=new Map,ae.programs=qe);let bt=qe.get(Ke);if(bt!==void 0){if(ae.currentProgram===bt&&ae.lightsStateVersion===Ce)return rs(I,We),bt}else We.uniforms=Be.getUniforms(I),W!==null&&I.isNodeMaterial&&W.build(I,ue,We),I.onBeforeCompile(We,H),bt=Be.acquireProgram(We,Ke),qe.set(Ke,bt),ae.uniforms=We.uniforms;let Qe=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qe.clippingPlanes=tt.uniform),rs(I,We),ae.needsLights=ha(I),ae.lightsStateVersion=Ce,ae.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.sunLights.value=re.state.sun,Qe.sunLightShadows.value=re.state.sunShadow,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.sunShadowMatrix.value=re.state.sunShadowMatrix,Qe.sunShadowCascade.value=re.state.sunShadowCascade,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=A.state.lightProbeGridArray.length>0,ae.currentProgram=bt,ae.uniformsList=null,bt}function Cn(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=Js.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function rs(I,K){let ue=le.get(I);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function sr(I,K){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;R.setFromMatrixPosition(K.matrixWorld);for(let ue=0,ae=I.length;ue<ae;ue++){let re=I[ue];if(re.texture!==null&&re.boundingBox.containsPoint(R))return re}return null}function ar(I,K,ue,ae,re){K.isScene!==!0&&(K=Ve),pe.resetTextureUnits();let He=K.fog,Ce=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?K.environment:null,We=be===null?H.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:zt.workingColorSpace,Ke=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,qe=Fe.get(ae.envMap||Ce,Ke),xt=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,bt=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!ue.morphAttributes.position,kt=!!ue.morphAttributes.normal,tn=!!ue.morphAttributes.color,Ft=Ii;ae.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ft=H.toneMapping);let Xt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,st=Xt!==void 0?Xt.length:0,Ze=le.get(ae),fn=A.state.lights;if(_t===!0&&(ct===!0||I!==$)){let M=I===$&&ae.id===de;tt.setState(ae,I,M)}let Nt=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==fn.state.version||Ze.outputColorSpace!==We||re.isBatchedMesh&&Ze.batching===!1||!re.isBatchedMesh&&Ze.batching===!0||re.isBatchedMesh&&Ze.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ze.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ze.instancing===!1||!re.isInstancedMesh&&Ze.instancing===!0||re.isSkinnedMesh&&Ze.skinning===!1||!re.isSkinnedMesh&&Ze.skinning===!0||re.isInstancedMesh&&Ze.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ze.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ze.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ze.instancingMorph===!1&&re.morphTexture!==null||Ze.envMap!==qe||ae.fog===!0&&Ze.fog!==He||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==tt.numPlanes||Ze.numIntersection!==tt.numIntersection)||Ze.vertexAlphas!==xt||Ze.vertexTangents!==bt||Ze.morphTargets!==Qe||Ze.morphNormals!==kt||Ze.morphColors!==tn||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==st||!!Ze.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Nt=!0):(Nt=!0,Ze.__version=ae.version);let cn=Ze.currentProgram;Nt===!0&&(cn=rr(ae,K,re),W&&ae.isNodeMaterial&&W.onUpdateProgram(ae,cn,Ze));let Rn=!1,Pn=!1,bi=!1,Vt=cn.getUniforms(),Jt=Ze.uniforms;if(w.useProgram(cn.program)&&(Rn=!0,Pn=!0,bi=!0),ae.id!==de&&(de=ae.id,Pn=!0),Ze.needsLights){let M=sr(A.state.lightProbeGridArray,re);Ze.lightProbeGrid!==M&&(Ze.lightProbeGrid=M,Pn=!0)}if(Rn||$!==I){w.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Vt.setValue(J,"projectionMatrix",I.projectionMatrix),Vt.setValue(J,"viewMatrix",I.matrixWorldInverse);let Ut=Vt.map.cameraPosition;Ut!==void 0&&Ut.setValue(J,Mt.setFromMatrixPosition(I.matrixWorld)),z.logarithmicDepthBuffer&&Vt.setValue(J,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(J,"isOrthographic",I.isOrthographicCamera===!0),$!==I&&($=I,Pn=!0,bi=!0)}if(Ze.needsLights&&(fn.state.sunShadowMap.length>0&&Vt.setValue(J,"sunShadowMap",fn.state.sunShadowMap,pe),fn.state.directionalShadowMap.length>0&&Vt.setValue(J,"directionalShadowMap",fn.state.directionalShadowMap,pe),fn.state.spotShadowMap.length>0&&Vt.setValue(J,"spotShadowMap",fn.state.spotShadowMap,pe),fn.state.pointShadowMap.length>0&&Vt.setValue(J,"pointShadowMap",fn.state.pointShadowMap,pe)),re.isSkinnedMesh){Vt.setOptional(J,re,"bindMatrix"),Vt.setOptional(J,re,"bindMatrixInverse");let M=re.skeleton;M&&(M.boneTexture===null&&M.computeBoneTexture(),Vt.setValue(J,"boneTexture",M.boneTexture,pe))}re.isBatchedMesh&&(Vt.setOptional(J,re,"batchingTexture"),Vt.setValue(J,"batchingTexture",re._matricesTexture,pe),Vt.setOptional(J,re,"batchingIdTexture"),Vt.setValue(J,"batchingIdTexture",re._indirectTexture,pe),Vt.setOptional(J,re,"batchingColorTexture"),re._colorsTexture!==null&&Vt.setValue(J,"batchingColorTexture",re._colorsTexture,pe));let ni=ue.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Q.update(re,ue,cn),(Pn||Ze.receiveShadow!==re.receiveShadow)&&(Ze.receiveShadow=re.receiveShadow,Vt.setValue(J,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&K.environment!==null&&(Jt.envMapIntensity.value=K.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=GE()),Pn){if(Vt.setValue(J,"toneMappingExposure",H.toneMappingExposure),Ze.needsLights&&Lr(Jt,bi),He&&ae.fog===!0&&it.refreshFogUniforms(Jt,He),it.refreshMaterialUniforms(Jt,ae,fe,se,A.state.transmissionRenderTarget[I.id]),Ze.needsLights&&Ze.lightProbeGrid){let M=Ze.lightProbeGrid;Jt.probesSH.value=M.texture,Jt.probesMin.value.copy(M.boundingBox.min),Jt.probesMax.value.copy(M.boundingBox.max),Jt.probesResolution.value.copy(M.resolution)}Js.upload(J,Cn(Ze),Jt,pe)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Js.upload(J,Cn(Ze),Jt,pe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(J,"center",re.center),Vt.setValue(J,"modelViewMatrix",re.modelViewMatrix),Vt.setValue(J,"normalMatrix",re.normalMatrix),Vt.setValue(J,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){let M=ae.uniformsGroups;for(let Ut=0,fi=M.length;Ut<fi;Ut++){let Ui=M[Ut];Se.update(Ui,cn),Se.bind(Ui,cn)}}return cn}function Lr(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.sunLights.needsUpdate=K,I.sunLightShadows.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function ha(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return be},this.setRenderTargetTextures=function(I,K,ue){let ae=le.get(I);ae.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(I.texture).__webglTexture=K,le.get(I.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){let ue=le.get(I);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,ue=0){be=I,X=K,ce=ue;let ae=null,re=!1,He=!1;if(I){let We=le.get(I);if(We.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(J.FRAMEBUFFER,We.__webglFramebuffer),ye.copy(I.viewport),et.copy(I.scissor),Je=I.scissorTest,w.viewport(ye),w.scissor(et),w.setScissorTest(Je),de=-1;return}else if(We.__webglFramebuffer===void 0)pe.setupRenderTarget(I);else if(We.__hasExternalTextures)pe.rebindTextures(I,le.get(I.texture).__webglTexture,le.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let xt=I.depthTexture;if(We.__boundDepthTexture!==xt){if(xt!==null&&le.has(xt)&&(I.width!==xt.image.width||I.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(I)}}let Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(He=!0);let qe=le.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(qe[K])?ae=qe[K][ue]:ae=qe[K],re=!0):I.samples>0&&pe.useMultisampledRTT(I)===!1?ae=le.get(I).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[ue]:ae=qe,ye.copy(I.viewport),et.copy(I.scissor),Je=I.scissorTest}else ye.copy(we).multiplyScalar(fe).floor(),et.copy(gt).multiplyScalar(fe).floor(),Je=Qt;if(ue!==0&&(ae=Y),w.bindFramebuffer(J.FRAMEBUFFER,ae)&&w.drawBuffers(I,ae),w.viewport(ye),w.scissor(et),w.setScissorTest(Je),re){let We=le.get(I.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K,We.__webglTexture,ue)}else if(He){let We=K;for(let Ke=0;Ke<I.textures.length;Ke++){let qe=le.get(I.textures[Ke]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Ke,qe.__webglTexture,ue,We)}}else if(I!==null&&ue!==0){let We=le.get(I.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,We.__webglTexture,ue)}de=-1};function Dr(I){let K=le.get(I);return(K.__readFormat!==I.format||K.__readType!==I.type)&&(K.__readFormat=I.format,K.__readType=I.type,K.__formatReadable=z.textureFormatReadable(I.format),K.__typeReadable=z.textureTypeReadable(I.type)),K}this.readRenderTargetPixels=function(I,K,ue,ae,re,He,Ce,We=0){if(!(I&&I.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ke=Ke[Ce]),Ke){w.bindFramebuffer(J.FRAMEBUFFER,Ke);try{let qe=I.textures[We],xt=qe.format,bt=qe.type;I.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+We);let Qe=Dr(qe);if(Qe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-ae&&ue>=0&&ue<=I.height-re&&J.readPixels(K,ue,ae,re,ze.convert(xt),ze.convert(bt),He)}finally{let qe=be!==null?le.get(be).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(I,K,ue,ae,re,He,Ce,We=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ke=Ke[Ce]),Ke)if(K>=0&&K<=I.width-ae&&ue>=0&&ue<=I.height-re){w.bindFramebuffer(J.FRAMEBUFFER,Ke);let qe=I.textures[We],xt=qe.format,bt=qe.type;I.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+We);let Qe=Dr(qe);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,kt),J.bufferData(J.PIXEL_PACK_BUFFER,He.byteLength,J.STREAM_READ),J.readPixels(K,ue,ae,re,ze.convert(xt),ze.convert(bt),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let tn=be!==null?le.get(be).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,tn);let Ft=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await fp(J,Ft,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,kt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,He),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(kt),J.deleteSync(Ft),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,ue=0){let ae=Math.pow(2,-ue),re=Math.floor(I.image.width*ae),He=Math.floor(I.image.height*ae),Ce=K!==null?K.x:0,We=K!==null?K.y:0;pe.setTexture2D(I,0),J.copyTexSubImage2D(J.TEXTURE_2D,ue,0,0,Ce,We,re,He),w.unbindTexture()},this.copyTextureToTexture=function(I,K,ue=null,ae=null,re=0,He=0){let Ce,We,Ke,qe,xt,bt,Qe,kt,tn,Ft=I.isCompressedTexture?I.mipmaps[He]:I.image;if(ue!==null)Ce=ue.max.x-ue.min.x,We=ue.max.y-ue.min.y,Ke=ue.isBox3?ue.max.z-ue.min.z:1,qe=ue.min.x,xt=ue.min.y,bt=ue.isBox3?ue.min.z:0;else{let Jt=Math.pow(2,-re);Ce=Math.floor(Ft.width*Jt),We=Math.floor(Ft.height*Jt),I.isDataArrayTexture?Ke=Ft.depth:I.isData3DTexture?Ke=Math.floor(Ft.depth*Jt):Ke=1,qe=0,xt=0,bt=0}ae!==null?(Qe=ae.x,kt=ae.y,tn=ae.z):(Qe=0,kt=0,tn=0);let Xt=ze.convert(K.format),st=ze.convert(K.type),Ze;K.isData3DTexture?(pe.setTexture3D(K,0),Ze=J.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(pe.setTexture2DArray(K,0),Ze=J.TEXTURE_2D_ARRAY):(pe.setTexture2D(K,0),Ze=J.TEXTURE_2D),w.activeTexture(J.TEXTURE0),w.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,K.flipY),w.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),w.pixelStorei(J.UNPACK_ALIGNMENT,K.unpackAlignment);let fn=w.getParameter(J.UNPACK_ROW_LENGTH),Nt=w.getParameter(J.UNPACK_IMAGE_HEIGHT),cn=w.getParameter(J.UNPACK_SKIP_PIXELS),Rn=w.getParameter(J.UNPACK_SKIP_ROWS),Pn=w.getParameter(J.UNPACK_SKIP_IMAGES);w.pixelStorei(J.UNPACK_ROW_LENGTH,Ft.width),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ft.height),w.pixelStorei(J.UNPACK_SKIP_PIXELS,qe),w.pixelStorei(J.UNPACK_SKIP_ROWS,xt),w.pixelStorei(J.UNPACK_SKIP_IMAGES,bt);let bi=I.isDataArrayTexture||I.isData3DTexture,Vt=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){let Jt=le.get(I),ni=le.get(K),M=le.get(Jt.__renderTarget),Ut=le.get(ni.__renderTarget);w.bindFramebuffer(J.READ_FRAMEBUFFER,M.__webglFramebuffer),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let fi=0;fi<Ke;fi++)bi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,le.get(I).__webglTexture,re,bt+fi),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,le.get(K).__webglTexture,He,tn+fi)),J.blitFramebuffer(qe,xt,Ce,We,Qe,kt,Ce,We,J.DEPTH_BUFFER_BIT,J.NEAREST);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(re!==0||I.isRenderTargetTexture||le.has(I)){let Jt=le.get(I),ni=le.get(K);w.bindFramebuffer(J.READ_FRAMEBUFFER,q),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,j);for(let M=0;M<Ke;M++)bi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Jt.__webglTexture,re,bt+M):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Jt.__webglTexture,re),Vt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ni.__webglTexture,He,tn+M):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ni.__webglTexture,He),re!==0?J.blitFramebuffer(qe,xt,Ce,We,Qe,kt,Ce,We,J.COLOR_BUFFER_BIT,J.NEAREST):Vt?J.copyTexSubImage3D(Ze,He,Qe,kt,tn+M,qe,xt,Ce,We):J.copyTexSubImage2D(Ze,He,Qe,kt,qe,xt,Ce,We);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Vt?I.isDataTexture||I.isData3DTexture?J.texSubImage3D(Ze,He,Qe,kt,tn,Ce,We,Ke,Xt,st,Ft.data):K.isCompressedArrayTexture?J.compressedTexSubImage3D(Ze,He,Qe,kt,tn,Ce,We,Ke,Xt,Ft.data):J.texSubImage3D(Ze,He,Qe,kt,tn,Ce,We,Ke,Xt,st,Ft):I.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,He,Qe,kt,Ce,We,Xt,st,Ft.data):I.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,He,Qe,kt,Ft.width,Ft.height,Xt,Ft.data):J.texSubImage2D(J.TEXTURE_2D,He,Qe,kt,Ce,We,Xt,st,Ft);w.pixelStorei(J.UNPACK_ROW_LENGTH,fn),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Nt),w.pixelStorei(J.UNPACK_SKIP_PIXELS,cn),w.pixelStorei(J.UNPACK_SKIP_ROWS,Rn),w.pixelStorei(J.UNPACK_SKIP_IMAGES,Pn),He===0&&K.generateMipmaps&&J.generateMipmap(Ze),w.unbindTexture()},this.initRenderTarget=function(I){le.get(I).__webglFramebuffer===void 0&&pe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?pe.setTextureCube(I,0):I.isData3DTexture?pe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?pe.setTexture2DArray(I,0):pe.setTexture2D(I,0),w.unbindTexture()},this.resetState=function(){X=0,ce=0,be=null,w.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}};var Yp={type:"change"},Wh={type:"start"},Zp={type:"end"},Lc=new ks,jp=new li,HE=Math.cos(70*vh.DEG2RAD),xn=new ie,Qn=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6,Dc=class extends Ya{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new ie,this.cursor=new ie,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ie,this._lastQuaternion=new Hn,this._lastTargetPosition=new ie,this._quat=new Hn().setFromUnitVectors(e.up,new ie(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hs,this._sphericalDelta=new Hs,this._scale=1,this._panOffset=new ie,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new ie,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XE.bind(this),this._onPointerDown=WE.bind(this),this._onPointerUp=$E.bind(this),this._onContextMenu=QE.bind(this),this._onMouseWheel=jE.bind(this),this._onKeyDown=ZE.bind(this),this._onTouchStart=JE.bind(this),this._onTouchMove=KE.bind(this),this._onMouseDown=qE.bind(this),this._onMouseMove=YE.bind(this),this._interceptControlDown=eT.bind(this),this._interceptControlUp=tT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yp),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;xn.copy(t).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Qn:i>Math.PI&&(i-=Qn),r<-Math.PI?r+=Qn:r>Math.PI&&(r-=Qn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),t.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let u=xn.length();l=this._clampDistance(u*this._scale);let h=u-l;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){let u=new ie(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;let d=new ie(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),l=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<HE?this.object.lookAt(this.target):(jp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(jp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(Yp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xn.setFromMatrixColumn(t,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,t){this.screenSpacePanning===!0?xn.setFromMatrixColumn(t,1):(xn.setFromMatrixColumn(t,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;xn.copy(r).sub(this.target);let o=xn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,l=i.width,u=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function WE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function XE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $E(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zp),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=jt.DOLLY;break;case wr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}break;case wr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Wh)}function YE(n){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jE(n){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(n.preventDefault(),this.dispatchEvent(Wh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zp))}function ZE(n){this.enabled!==!1&&this._handleKeyDown(n)}function JE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=jt.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=jt.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Wh)}function KE(n){switch(this._trackPointer(n),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=jt.NONE}}function QE(n){this.enabled!==!1&&n.preventDefault()}function eT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nT=(async function(n={}){var e,t=n,i=typeof window=="object",r=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!i&&!o&&!r;if(o){let{createRequire:s}=await import("module");var u=s(import.meta.url)}var h=[],d="./this.program",m=(s,a)=>{throw a},_=import.meta.url,p="";function y(s){return t.locateFile?t.locateFile(s,p):p+s}var E,F;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var S=process.versions.node,v=S.split(".").slice(0,3);if(v=v[0]*1e4+v[1]*100+v[2].split("-")[0]*1,v<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+S+")");var U=u("fs");_.startsWith("file:")&&(p=u("path").dirname(u("url").fileURLToPath(_))+"/"),F=a=>{a=ce(a)?new URL(a):a;var c=U.readFileSync(a);return X(Buffer.isBuffer(c)),c},E=async(a,c=!0)=>{a=ce(a)?new URL(a):a;var f=U.readFileSync(a,c?void 0:"utf8");return X(c?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),h=process.argv.slice(2),m=(a,c)=>{throw process.exitCode=a,c}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(i||r){try{p=new URL(".",_).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(F=s=>{var a=new XMLHttpRequest;return a.open("GET",s,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),E=async s=>{if(ce(s))return new Promise((c,f)=>{var g=new XMLHttpRequest;g.open("GET",s,!0),g.responseType="arraybuffer",g.onload=()=>{if(g.status==200||g.status==0&&g.response){c(g.response);return}f(g.status)},g.onerror=f,g.send(null)});var a=await fetch(s,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var k=console.log.bind(console),R=console.error.bind(console),D="IDBFS is no longer included by default; build with -lidbfs.js",A="PROXYFS is no longer included by default; build with -lproxyfs.js",O="WORKERFS is no longer included by default; build with -lworkerfs.js",T="FETCHFS is no longer included by default; build with -lfetchfs.js",N="ICASEFS is no longer included by default; build with -licasefs.js",H="JSFILEFS is no longer included by default; build with -ljsfilefs.js",Z="OPFS is no longer included by default; build with -lopfs.js",W="NODEFS is no longer included by default; build with -lnodefs.js";X(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var Y;typeof WebAssembly!="object"&&R("no native wasm support detected");var q=!1,j;function X(s,a){s||Ie("Assertion failed"+(a?": "+a:""))}var ce=s=>s.startsWith("file://");function be(){var s=gu();X((s&3)==0),s==0&&(s+=4),Ye[s>>2]=34821223,Ye[s+4>>2]=2310721022,Ye[0]=1668509029}function de(){if(!q){var s=gu();s==0&&(s+=4);var a=Ye[s>>2],c=Ye[s+4>>2];(a!=34821223||c!=2310721022)&&Ie(`Stack overflow! Stack cookie has been overwritten at ${xi(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${xi(c)} ${xi(a)}`),Ye[0]!=1668509029&&Ie("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class $ extends Error{}class ye extends ${}class et extends ${constructor(a){super(a),this.excPtr=a;let c=qd(a);this.name=c[0],this.message=c[1]}}var Je=!0;function Dt(...s){!Je&&typeof Je<"u"||console.warn(...s)}(()=>{var s=new Int16Array(1),a=new Int8Array(s.buffer);if(s[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function mt(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){Ie(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Ee(s){return()=>X(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function se(s){Object.getOwnPropertyDescriptor(t,s)&&Ie(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function fe(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function Pe(s,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){a()}})}function Ge(s,a){Pe(s,()=>{Tn(`\`${s}\` is not longer defined by emscripten. ${a}`)})}Ge("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Ge("asm","Please use wasmExports instead");function we(s){Pe(s,()=>{var a=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=s;c.startsWith("_")||(c="$"+s),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,fe(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Tn(a)}),gt(s)}function gt(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var a=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;fe(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ie(a)}})}var Qt,St,_t,ct,ut,Mt,Yt,Ve,Ye,Zt,J,Wt,je,z=!1;function w(){var s=_t.buffer;ct=new Int8Array(s),Mt=new Int16Array(s),ut=new Uint8Array(s),Yt=new Uint16Array(s),Ve=new Int32Array(s),Ye=new Uint32Array(s),Zt=new Float32Array(s),J=new Float64Array(s),Wt=new BigInt64Array(s),je=new BigUint64Array(s)}X(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function ne(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)En(t.preRun.shift());mt("preRun"),rt(Bt)}function le(){X(!z),z=!0,de(),!t.noFSInit&&!M.initialized&&M.init(),Ft.init(),Br.__wasm_call_ctors(),M.ignorePermissions=!1}function pe(){if(de(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)$t(t.postRun.shift());mt("postRun"),rt(nt)}var Fe=0,Oe=null,me={},ve=null;function Be(s){Fe++,t.monitorRunDependencies?.(Fe),s?(X(!me[s]),me[s]=1,ve===null&&typeof setInterval<"u"&&(ve=setInterval(()=>{if(q){clearInterval(ve),ve=null;return}var a=!1;for(var c in me)a||(a=!0,R("still waiting on run dependencies:")),R(`dependency: ${c}`);a&&R("(end of list)")},1e4))):R("warning: run dependency added without ID")}function it(s){if(Fe--,t.monitorRunDependencies?.(Fe),s?(X(me[s]),delete me[s]):R("warning: run dependency removed without ID"),Fe==0&&(ve!==null&&(clearInterval(ve),ve=null),Oe)){var a=Oe;Oe=null,a()}}function Ie(s){t.onAbort?.(s),s="Aborted("+s+")",R(s),q=!0;var a=new WebAssembly.RuntimeError(s);throw St?.(a),a}function Ne(s,a){return(...c)=>{X(z,`native function \`${s}\` called before runtime initialization`);var f=Br[s];return X(f,`exported native function \`${s}\` not found`),X(c.length<=a,`native function \`${s}\` called with ${c.length} args but expects ${a}`),f(...c)}}var tt;function lt(){return t.locateFile?y("mujoco.wasm"):new URL("mujoco.wasm",import.meta.url).href}function yt(s){if(s==tt&&Y)return new Uint8Array(Y);if(F)return F(s);throw"both async and sync fetching of the wasm failed"}async function Q(s){if(!Y)try{var a=await E(s);return new Uint8Array(a)}catch{}return yt(s)}async function ke(s,a){try{var c=await Q(s),f=await WebAssembly.instantiate(c,a);return f}catch(g){R(`failed to asynchronously prepare wasm: ${g}`),ce(tt)&&R(`warning: Loading from a file URI (${tt}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Ie(g)}}async function xe(s,a,c){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!ce(a)&&!o)try{var f=fetch(a,{credentials:"same-origin"}),g=await WebAssembly.instantiateStreaming(f,c);return g}catch(b){R(`wasm streaming compile failed: ${b}`),R("falling back to ArrayBuffer instantiation")}return ke(a,c)}function ze(){return{env:af,wasi_snapshot_preview1:af}}async function Xe(){function s(C,L){return Br=C.exports,_t=Br.memory,X(_t,"memory not found in wasm exports"),w(),ms=Br.__indirect_function_table,X(ms,"table not found in wasm exports"),r0(Br),it("wasm-instantiate"),Br}Be("wasm-instantiate");var a=t;function c(C){return X(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,s(C.instance)}var f=ze();if(t.instantiateWasm)return new Promise((C,L)=>{try{t.instantiateWasm(f,(B,te)=>{C(s(B,te))})}catch(B){R(`Module.instantiateWasm callback failed with error: ${B}`),L(B)}});tt??(tt=lt());var g=await xe(Y,tt,f),b=c(g);return b}class Se{constructor(a){si(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var rt=s=>{for(;s.length>0;)s.shift()(t)},nt=[],$t=s=>nt.push(s),Bt=[],En=s=>Bt.push(s);function $n(s,a="i8"){switch(a.endsWith("*")&&(a="*"),a){case"i1":return ct[s];case"i8":return ct[s];case"i16":return Mt[s>>1];case"i32":return Ve[s>>2];case"i64":return Wt[s>>3];case"float":return Zt[s>>2];case"double":return J[s>>3];case"*":return Ye[s>>2];default:Ie(`invalid type for getValue: ${a}`)}}var Ir=!0,xi=s=>(X(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0"));function is(s,a,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":ct[s]=a;break;case"i8":ct[s]=a;break;case"i16":Mt[s>>1]=a;break;case"i32":Ve[s>>2]=a;break;case"i64":Wt[s>>3]=BigInt(a);break;case"float":Zt[s>>2]=a;break;case"double":J[s>>3]=a;break;case"*":Ye[s>>2]=a;break;default:Ie(`invalid type for setValue: ${c}`)}}var Te=s=>Qd(s),Ae=()=>tf(),Tn=s=>{Tn.shown||(Tn.shown={}),Tn.shown[s]||(Tn.shown[s]=1,o&&(s="warning: "+s),R(s))},nr=typeof TextDecoder<"u"?new TextDecoder:void 0,An=(s,a=0,c=NaN)=>{for(var f=a+c,g=a;s[g]&&!(g>=f);)++g;if(g-a>16&&s.buffer&&nr)return nr.decode(s.subarray(a,g));for(var b="";a<g;){var C=s[a++];if(!(C&128)){b+=String.fromCharCode(C);continue}var L=s[a++]&63;if((C&224)==192){b+=String.fromCharCode((C&31)<<6|L);continue}var B=s[a++]&63;if((C&240)==224?C=(C&15)<<12|L<<6|B:((C&248)!=240&&Tn("Invalid UTF-8 leading byte "+xi(C)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),C=(C&7)<<18|L<<12|B<<6|s[a++]&63),C<65536)b+=String.fromCharCode(C);else{var te=C-65536;b+=String.fromCharCode(55296|te>>10,56320|te&1023)}}return b},On=(s,a)=>(X(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?An(ut,s,a):""),ir=(s,a,c,f)=>Ie(`Assertion failed: ${On(s)}, at: `+[a?On(a):"unknown filename",c,f?On(f):"unknown function"]),qn=[],ti=0,Wi=s=>{var a=new sr(s);return a.get_caught()||(a.set_caught(!0),ti--),a.set_rethrown(!1),qn.push(a),Uo(s),sf(s)},rr=()=>{if(!qn.length)return 0;var s=qn[qn.length-1];return Uo(s.excPtr),s.excPtr},Cn=0,rs=()=>{De(0,0),X(qn.length>0);var s=qn.pop();_u(s.excPtr),Cn=0};class sr{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Ye[this.ptr+4>>2]=a}get_type(){return Ye[this.ptr+4>>2]}set_destructor(a){Ye[this.ptr+8>>2]=a}get_destructor(){return Ye[this.ptr+8>>2]}set_caught(a){a=a?1:0,ct[this.ptr+12]=a}get_caught(){return ct[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,ct[this.ptr+13]=a}get_rethrown(){return ct[this.ptr+13]!=0}init(a,c){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(c)}set_adjusted_ptr(a){Ye[this.ptr+16>>2]=a}get_adjusted_ptr(){return Ye[this.ptr+16>>2]}}var ar=s=>Jd(s),Lr=s=>{var a=Cn?.excPtr;if(!a)return ar(0),0;var c=new sr(a);c.set_adjusted_ptr(a);var f=c.get_type();if(!f)return ar(0),a;for(var g of s){if(g===0||g===f)break;var b=c.ptr+16;if(rf(g,f,b))return ar(g),a}return ar(f),a},ha=()=>Lr([]),Dr=s=>Lr([s]),I=(s,a)=>Lr([s,a]),K=()=>{var s=qn.pop();s||Ie("no exception to throw");var a=s.excPtr;throw s.get_rethrown()||(qn.push(s),s.set_rethrown(!0),s.set_caught(!1),ti++),Cn=new et(a),Cn},ue=s=>{if(s){var a=new sr(s);qn.push(a),a.set_rethrown(!0),K()}},ae=(s,a,c)=>{var f=new sr(s);throw f.init(a,c),Cn=new et(s),ti++,Cn},re=()=>ti,He=s=>{throw Cn||(Cn=new et(s)),Cn},Ce={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(s).slice(1)},normalizeArray:(s,a)=>{for(var c=0,f=s.length-1;f>=0;f--){var g=s[f];g==="."?s.splice(f,1):g===".."?(s.splice(f,1),c++):c&&(s.splice(f,1),c--)}if(a)for(;c;c--)s.unshift("..");return s},normalize:s=>{var a=Ce.isAbs(s),c=s.slice(-1)==="/";return s=Ce.normalizeArray(s.split("/").filter(f=>!!f),!a).join("/"),!s&&!a&&(s="."),s&&c&&(s+="/"),(a?"/":"")+s},dirname:s=>{var a=Ce.splitPath(s),c=a[0],f=a[1];return!c&&!f?".":(f&&(f=f.slice(0,-1)),c+f)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Ce.normalize(s.join("/")),join2:(s,a)=>Ce.normalize(s+"/"+a)},We=()=>{if(o){var s=u("crypto");return a=>s.randomFillSync(a)}return a=>crypto.getRandomValues(a)},Ke=s=>{(Ke=We())(s)},qe={resolve:(...s)=>{for(var a="",c=!1,f=s.length-1;f>=-1&&!c;f--){var g=f>=0?s[f]:M.cwd();if(typeof g!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!g)return"";a=g+"/"+a,c=Ce.isAbs(g)}return a=Ce.normalizeArray(a.split("/").filter(b=>!!b),!c).join("/"),(c?"/":"")+a||"."},relative:(s,a)=>{s=qe.resolve(s).slice(1),a=qe.resolve(a).slice(1);function c(te){for(var oe=0;oe<te.length&&te[oe]==="";oe++);for(var ge=te.length-1;ge>=0&&te[ge]==="";ge--);return oe>ge?[]:te.slice(oe,ge-oe+1)}for(var f=c(s.split("/")),g=c(a.split("/")),b=Math.min(f.length,g.length),C=b,L=0;L<b;L++)if(f[L]!==g[L]){C=L;break}for(var B=[],L=C;L<f.length;L++)B.push("..");return B=B.concat(g.slice(C)),B.join("/")}},xt=[],bt=s=>{for(var a=0,c=0;c<s.length;++c){var f=s.charCodeAt(c);f<=127?a++:f<=2047?a+=2:f>=55296&&f<=57343?(a+=4,++c):a+=3}return a},Qe=(s,a,c,f)=>{if(X(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(f>0))return 0;for(var g=c,b=c+f-1,C=0;C<s.length;++C){var L=s.codePointAt(C);if(L<=127){if(c>=b)break;a[c++]=L}else if(L<=2047){if(c+1>=b)break;a[c++]=192|L>>6,a[c++]=128|L&63}else if(L<=65535){if(c+2>=b)break;a[c++]=224|L>>12,a[c++]=128|L>>6&63,a[c++]=128|L&63}else{if(c+3>=b)break;L>1114111&&Tn("Invalid Unicode code point "+xi(L)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[c++]=240|L>>18,a[c++]=128|L>>12&63,a[c++]=128|L>>6&63,a[c++]=128|L&63,C++}}return a[c]=0,c-g},kt=(s,a,c)=>{var f=c>0?c:bt(s)+1,g=new Array(f),b=Qe(s,g,0,g.length);return a&&(g.length=b),g},tn=()=>{if(!xt.length){var s=null;if(o){var a=256,c=Buffer.alloc(a),f=0,g=process.stdin.fd;try{f=U.readSync(g,c,0,a)}catch(b){if(b.toString().includes("EOF"))f=0;else throw b}f>0&&(s=c.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;xt=kt(s,!0)}return xt.shift()},Ft={ttys:[],init(){},shutdown(){},register(s,a){Ft.ttys[s]={input:[],output:[],ops:a},M.registerDevice(s,Ft.stream_ops)},stream_ops:{open(s){var a=Ft.ttys[s.node.rdev];if(!a)throw new M.ErrnoError(43);s.tty=a,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,a,c,f,g){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var b=0,C=0;C<f;C++){var L;try{L=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(L===void 0&&b===0)throw new M.ErrnoError(6);if(L==null)break;b++,a[c+C]=L}return b&&(s.node.atime=Date.now()),b},write(s,a,c,f,g){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var b=0;b<f;b++)s.tty.ops.put_char(s.tty,a[c+b])}catch{throw new M.ErrnoError(29)}return f&&(s.node.mtime=s.node.ctime=Date.now()),b}},default_tty_ops:{get_char(s){return tn()},put_char(s,a){a===null||a===10?(k(An(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){s.output?.length>0&&(k(An(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,a,c){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,a){a===null||a===10?(R(An(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){s.output?.length>0&&(R(An(s.output)),s.output=[])}}},Xt=s=>{Ie("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},st={ops_table:null,mount(s){return st.createNode(null,"/",16895,0)},createNode(s,a,c,f){if(M.isBlkdev(c)||M.isFIFO(c))throw new M.ErrnoError(63);st.ops_table||(st.ops_table={dir:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr,lookup:st.node_ops.lookup,mknod:st.node_ops.mknod,rename:st.node_ops.rename,unlink:st.node_ops.unlink,rmdir:st.node_ops.rmdir,readdir:st.node_ops.readdir,symlink:st.node_ops.symlink},stream:{llseek:st.stream_ops.llseek}},file:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr},stream:{llseek:st.stream_ops.llseek,read:st.stream_ops.read,write:st.stream_ops.write,mmap:st.stream_ops.mmap,msync:st.stream_ops.msync}},link:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr,readlink:st.node_ops.readlink},stream:{}},chrdev:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr},stream:M.chrdev_stream_ops}});var g=M.createNode(s,a,c,f);return M.isDir(g.mode)?(g.node_ops=st.ops_table.dir.node,g.stream_ops=st.ops_table.dir.stream,g.contents={}):M.isFile(g.mode)?(g.node_ops=st.ops_table.file.node,g.stream_ops=st.ops_table.file.stream,g.usedBytes=0,g.contents=null):M.isLink(g.mode)?(g.node_ops=st.ops_table.link.node,g.stream_ops=st.ops_table.link.stream):M.isChrdev(g.mode)&&(g.node_ops=st.ops_table.chrdev.node,g.stream_ops=st.ops_table.chrdev.stream),g.atime=g.mtime=g.ctime=Date.now(),s&&(s.contents[a]=g,s.atime=s.mtime=s.ctime=g.atime),g},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,a){var c=s.contents?s.contents.length:0;if(!(c>=a)){var f=1024*1024;a=Math.max(a,c*(c<f?2:1.125)>>>0),c!=0&&(a=Math.max(a,256));var g=s.contents;s.contents=new Uint8Array(a),s.usedBytes>0&&s.contents.set(g.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,a){if(s.usedBytes!=a)if(a==0)s.contents=null,s.usedBytes=0;else{var c=s.contents;s.contents=new Uint8Array(a),c&&s.contents.set(c.subarray(0,Math.min(a,s.usedBytes))),s.usedBytes=a}},node_ops:{getattr(s){var a={};return a.dev=M.isChrdev(s.mode)?s.id:1,a.ino=s.id,a.mode=s.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=s.rdev,M.isDir(s.mode)?a.size=4096:M.isFile(s.mode)?a.size=s.usedBytes:M.isLink(s.mode)?a.size=s.link.length:a.size=0,a.atime=new Date(s.atime),a.mtime=new Date(s.mtime),a.ctime=new Date(s.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(s,a){for(let c of["mode","atime","mtime","ctime"])a[c]!=null&&(s[c]=a[c]);a.size!==void 0&&st.resizeFileStorage(s,a.size)},lookup(s,a){throw new M.ErrnoError(44)},mknod(s,a,c,f){return st.createNode(s,a,c,f)},rename(s,a,c){var f;try{f=M.lookupNode(a,c)}catch{}if(f){if(M.isDir(s.mode))for(var g in f.contents)throw new M.ErrnoError(55);M.hashRemoveNode(f)}delete s.parent.contents[s.name],a.contents[c]=s,s.name=c,a.ctime=a.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,a){delete s.contents[a],s.ctime=s.mtime=Date.now()},rmdir(s,a){var c=M.lookupNode(s,a);for(var f in c.contents)throw new M.ErrnoError(55);delete s.contents[a],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,a,c){var f=st.createNode(s,a,41471,0);return f.link=c,f},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,a,c,f,g){var b=s.node.contents;if(g>=s.node.usedBytes)return 0;var C=Math.min(s.node.usedBytes-g,f);if(X(C>=0),C>8&&b.subarray)a.set(b.subarray(g,g+C),c);else for(var L=0;L<C;L++)a[c+L]=b[g+L];return C},write(s,a,c,f,g,b){if(X(!(a instanceof ArrayBuffer)),a.buffer===ct.buffer&&(b=!1),!f)return 0;var C=s.node;if(C.mtime=C.ctime=Date.now(),a.subarray&&(!C.contents||C.contents.subarray)){if(b)return X(g===0,"canOwn must imply no weird position inside the file"),C.contents=a.subarray(c,c+f),C.usedBytes=f,f;if(C.usedBytes===0&&g===0)return C.contents=a.slice(c,c+f),C.usedBytes=f,f;if(g+f<=C.usedBytes)return C.contents.set(a.subarray(c,c+f),g),f}if(st.expandFileStorage(C,g+f),C.contents.subarray&&a.subarray)C.contents.set(a.subarray(c,c+f),g);else for(var L=0;L<f;L++)C.contents[g+L]=a[c+L];return C.usedBytes=Math.max(C.usedBytes,g+f),f},llseek(s,a,c){var f=a;if(c===1?f+=s.position:c===2&&M.isFile(s.node.mode)&&(f+=s.node.usedBytes),f<0)throw new M.ErrnoError(28);return f},mmap(s,a,c,f,g){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var b,C,L=s.node.contents;if(!(g&2)&&L&&L.buffer===ct.buffer)C=!1,b=L.byteOffset;else{if(C=!0,b=Xt(a),!b)throw new M.ErrnoError(48);L&&((c>0||c+a<L.length)&&(L.subarray?L=L.subarray(c,c+a):L=Array.prototype.slice.call(L,c,c+a)),ct.set(L,b))}return{ptr:b,allocated:C}},msync(s,a,c,f,g){return st.stream_ops.write(s,a,0,f,c,!1),0}}},Ze=async s=>{var a=await E(s);return X(a,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(a)},fn=(...s)=>M.createDataFile(...s),Nt=s=>{for(var a=s;;){if(!me[s])return s;s=a+Math.random()}},cn=[],Rn=(s,a,c,f)=>{typeof Browser<"u"&&Browser.init();var g=!1;return cn.forEach(b=>{g||b.canHandle(a)&&(b.handle(s,a,c,f),g=!0)}),g},Pn=(s,a,c,f,g,b,C,L,B,te)=>{var oe=a?qe.resolve(Ce.join2(s,a)):s,ge=Nt(`cp ${oe}`);function Me(_e){function Re(at){te?.(),L||fn(s,a,at,f,g,B),b?.(),it(ge)}Rn(_e,oe,Re,()=>{C?.(),it(ge)})||Re(_e)}Be(ge),typeof c=="string"?Ze(c).then(Me,C):Me(c)},bi=s=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=a[s];if(typeof c>"u")throw new Error(`Unknown file open mode: ${s}`);return c},Vt=(s,a)=>{var c=0;return s&&(c|=365),a&&(c|=146),c},Jt=s=>On(Zd(s)),ni={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(z?Jt(a):"");si(this,"name","ErrnoError");this.errno=a;for(var c in ni)if(ni[c]===a){this.code=c;break}}},FSStream:class{constructor(){si(this,"shared",{})}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,a,c,f){si(this,"node_ops",{});si(this,"stream_ops",{});si(this,"readMode",365);si(this,"writeMode",146);si(this,"mounted",null);s||(s=this),this.parent=s,this.mount=s.mount,this.id=M.nextInode++,this.name=a,this.mode=c,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,a={}){if(!s)throw new M.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),Ce.isAbs(s)||(s=M.cwd()+"/"+s);e:for(var c=0;c<40;c++){for(var f=s.split("/").filter(te=>!!te),g=M.root,b="/",C=0;C<f.length;C++){var L=C===f.length-1;if(L&&a.parent)break;if(f[C]!=="."){if(f[C]===".."){if(b=Ce.dirname(b),M.isRoot(g)){s=b+"/"+f.slice(C+1).join("/");continue e}else g=g.parent;continue}b=Ce.join2(b,f[C]);try{g=M.lookupNode(g,f[C])}catch(te){if(te?.errno===44&&L&&a.noent_okay)return{path:b};throw te}if(M.isMountpoint(g)&&(!L||a.follow_mount)&&(g=g.mounted.root),M.isLink(g.mode)&&(!L||a.follow)){if(!g.node_ops.readlink)throw new M.ErrnoError(52);var B=g.node_ops.readlink(g);Ce.isAbs(B)||(B=Ce.dirname(b)+"/"+B),s=B+"/"+f.slice(C+1).join("/");continue e}}}return{path:b,node:g}}throw new M.ErrnoError(32)},getPath(s){for(var a;;){if(M.isRoot(s)){var c=s.mount.mountpoint;return a?c[c.length-1]!=="/"?`${c}/${a}`:c+a:c}a=a?`${s.name}/${a}`:s.name,s=s.parent}},hashName(s,a){for(var c=0,f=0;f<a.length;f++)c=(c<<5)-c+a.charCodeAt(f)|0;return(s+c>>>0)%M.nameTable.length},hashAddNode(s){var a=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[a],M.nameTable[a]=s},hashRemoveNode(s){var a=M.hashName(s.parent.id,s.name);if(M.nameTable[a]===s)M.nameTable[a]=s.name_next;else for(var c=M.nameTable[a];c;){if(c.name_next===s){c.name_next=s.name_next;break}c=c.name_next}},lookupNode(s,a){var c=M.mayLookup(s);if(c)throw new M.ErrnoError(c);for(var f=M.hashName(s.id,a),g=M.nameTable[f];g;g=g.name_next){var b=g.name;if(g.parent.id===s.id&&b===a)return g}return M.lookup(s,a)},createNode(s,a,c,f){X(typeof s=="object");var g=new M.FSNode(s,a,c,f);return M.hashAddNode(g),g},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var a=["r","w","rw"][s&3];return s&512&&(a+="w"),a},nodePermissions(s,a){return M.ignorePermissions?0:a.includes("r")&&!(s.mode&292)||a.includes("w")&&!(s.mode&146)||a.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var a=M.nodePermissions(s,"x");return a||(s.node_ops.lookup?0:2)},mayCreate(s,a){if(!M.isDir(s.mode))return 54;try{var c=M.lookupNode(s,a);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,a,c){var f;try{f=M.lookupNode(s,a)}catch(b){return b.errno}var g=M.nodePermissions(s,"wx");if(g)return g;if(c){if(!M.isDir(f.mode))return 54;if(M.isRoot(f)||M.getPath(f)===M.cwd())return 10}else if(M.isDir(f.mode))return 31;return 0},mayOpen(s,a){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(a)!=="r"||a&576)?31:M.nodePermissions(s,M.flagsToPermissionString(a)):44},checkOpExists(s,a){if(!s)throw new M.ErrnoError(a);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var a=M.getStream(s);if(!a)throw new M.ErrnoError(8);return a},getStream:s=>M.streams[s],createStream(s,a=-1){return X(a>=-1),s=Object.assign(new M.FSStream,s),a==-1&&(a=M.nextfd()),s.fd=a,M.streams[a]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,a=-1){var c=M.createStream(s,a);return c.stream_ops?.dup?.(c),c},doSetAttr(s,a,c){var f=s?.stream_ops.setattr,g=f?s:a;f??(f=a.node_ops.setattr),M.checkOpExists(f,63),f(g,c)},chrdev_stream_ops:{open(s){var a=M.getDevice(s.node.rdev);s.stream_ops=a.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,a)=>s<<8|a,registerDevice(s,a){M.devices[s]={stream_ops:a}},getDevice:s=>M.devices[s],getMounts(s){for(var a=[],c=[s];c.length;){var f=c.pop();a.push(f),c.push(...f.mounts)}return a},syncfs(s,a){typeof s=="function"&&(a=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&R(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=M.getMounts(M.root.mount),f=0;function g(C){return X(M.syncFSRequests>0),M.syncFSRequests--,a(C)}function b(C){if(C)return b.errored?void 0:(b.errored=!0,g(C));++f>=c.length&&g(null)}c.forEach(C=>{if(!C.type.syncfs)return b(null);C.type.syncfs(C,s,b)})},mount(s,a,c){if(typeof s=="string")throw s;var f=c==="/",g=!c,b;if(f&&M.root)throw new M.ErrnoError(10);if(!f&&!g){var C=M.lookupPath(c,{follow_mount:!1});if(c=C.path,b=C.node,M.isMountpoint(b))throw new M.ErrnoError(10);if(!M.isDir(b.mode))throw new M.ErrnoError(54)}var L={type:s,opts:a,mountpoint:c,mounts:[]},B=s.mount(L);return B.mount=L,L.root=B,f?M.root=B:b&&(b.mounted=L,b.mount&&b.mount.mounts.push(L)),B},unmount(s){var a=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(a.node))throw new M.ErrnoError(28);var c=a.node,f=c.mounted,g=M.getMounts(f);Object.keys(M.nameTable).forEach(C=>{for(var L=M.nameTable[C];L;){var B=L.name_next;g.includes(L.mount)&&M.destroyNode(L),L=B}}),c.mounted=null;var b=c.mount.mounts.indexOf(f);X(b!==-1),c.mount.mounts.splice(b,1)},lookup(s,a){return s.node_ops.lookup(s,a)},mknod(s,a,c){var f=M.lookupPath(s,{parent:!0}),g=f.node,b=Ce.basename(s);if(!b)throw new M.ErrnoError(28);if(b==="."||b==="..")throw new M.ErrnoError(20);var C=M.mayCreate(g,b);if(C)throw new M.ErrnoError(C);if(!g.node_ops.mknod)throw new M.ErrnoError(63);return g.node_ops.mknod(g,b,a,c)},statfs(s){return M.statfsNode(M.lookupPath(s,{follow:!0}).node)},statfsStream(s){return M.statfsNode(s.node)},statfsNode(s){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(a,s.node_ops.statfs(s.mount.opts.root)),a},create(s,a=438){return a&=4095,a|=32768,M.mknod(s,a,0)},mkdir(s,a=511){return a&=1023,a|=16384,M.mknod(s,a,0)},mkdirTree(s,a){var c=s.split("/"),f="";for(var g of c)if(g){(f||Ce.isAbs(s))&&(f+="/"),f+=g;try{M.mkdir(f,a)}catch(b){if(b.errno!=20)throw b}}},mkdev(s,a,c){return typeof c>"u"&&(c=a,a=438),a|=8192,M.mknod(s,a,c)},symlink(s,a){if(!qe.resolve(s))throw new M.ErrnoError(44);var c=M.lookupPath(a,{parent:!0}),f=c.node;if(!f)throw new M.ErrnoError(44);var g=Ce.basename(a),b=M.mayCreate(f,g);if(b)throw new M.ErrnoError(b);if(!f.node_ops.symlink)throw new M.ErrnoError(63);return f.node_ops.symlink(f,g,s)},rename(s,a){var c=Ce.dirname(s),f=Ce.dirname(a),g=Ce.basename(s),b=Ce.basename(a),C,L,B;if(C=M.lookupPath(s,{parent:!0}),L=C.node,C=M.lookupPath(a,{parent:!0}),B=C.node,!L||!B)throw new M.ErrnoError(44);if(L.mount!==B.mount)throw new M.ErrnoError(75);var te=M.lookupNode(L,g),oe=qe.relative(s,f);if(oe.charAt(0)!==".")throw new M.ErrnoError(28);if(oe=qe.relative(a,c),oe.charAt(0)!==".")throw new M.ErrnoError(55);var ge;try{ge=M.lookupNode(B,b)}catch{}if(te!==ge){var Me=M.isDir(te.mode),_e=M.mayDelete(L,g,Me);if(_e)throw new M.ErrnoError(_e);if(_e=ge?M.mayDelete(B,b,Me):M.mayCreate(B,b),_e)throw new M.ErrnoError(_e);if(!L.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(te)||ge&&M.isMountpoint(ge))throw new M.ErrnoError(10);if(B!==L&&(_e=M.nodePermissions(L,"w"),_e))throw new M.ErrnoError(_e);M.hashRemoveNode(te);try{L.node_ops.rename(te,B,b),te.parent=B}catch(Re){throw Re}finally{M.hashAddNode(te)}}},rmdir(s){var a=M.lookupPath(s,{parent:!0}),c=a.node,f=Ce.basename(s),g=M.lookupNode(c,f),b=M.mayDelete(c,f,!0);if(b)throw new M.ErrnoError(b);if(!c.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(g))throw new M.ErrnoError(10);c.node_ops.rmdir(c,f),M.destroyNode(g)},readdir(s){var a=M.lookupPath(s,{follow:!0}),c=a.node,f=M.checkOpExists(c.node_ops.readdir,54);return f(c)},unlink(s){var a=M.lookupPath(s,{parent:!0}),c=a.node;if(!c)throw new M.ErrnoError(44);var f=Ce.basename(s),g=M.lookupNode(c,f),b=M.mayDelete(c,f,!1);if(b)throw new M.ErrnoError(b);if(!c.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(g))throw new M.ErrnoError(10);c.node_ops.unlink(c,f),M.destroyNode(g)},readlink(s){var a=M.lookupPath(s),c=a.node;if(!c)throw new M.ErrnoError(44);if(!c.node_ops.readlink)throw new M.ErrnoError(28);return c.node_ops.readlink(c)},stat(s,a){var c=M.lookupPath(s,{follow:!a}),f=c.node,g=M.checkOpExists(f.node_ops.getattr,63);return g(f)},fstat(s){var a=M.getStreamChecked(s),c=a.node,f=a.stream_ops.getattr,g=f?a:c;return f??(f=c.node_ops.getattr),M.checkOpExists(f,63),f(g)},lstat(s){return M.stat(s,!0)},doChmod(s,a,c,f){M.doSetAttr(s,a,{mode:c&4095|a.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(s,a,c){var f;if(typeof s=="string"){var g=M.lookupPath(s,{follow:!c});f=g.node}else f=s;M.doChmod(null,f,a,c)},lchmod(s,a){M.chmod(s,a,!0)},fchmod(s,a){var c=M.getStreamChecked(s);M.doChmod(c,c.node,a,!1)},doChown(s,a,c){M.doSetAttr(s,a,{timestamp:Date.now(),dontFollow:c})},chown(s,a,c,f){var g;if(typeof s=="string"){var b=M.lookupPath(s,{follow:!f});g=b.node}else g=s;M.doChown(null,g,f)},lchown(s,a,c){M.chown(s,a,c,!0)},fchown(s,a,c){var f=M.getStreamChecked(s);M.doChown(f,f.node,!1)},doTruncate(s,a,c){if(M.isDir(a.mode))throw new M.ErrnoError(31);if(!M.isFile(a.mode))throw new M.ErrnoError(28);var f=M.nodePermissions(a,"w");if(f)throw new M.ErrnoError(f);M.doSetAttr(s,a,{size:c,timestamp:Date.now()})},truncate(s,a){if(a<0)throw new M.ErrnoError(28);var c;if(typeof s=="string"){var f=M.lookupPath(s,{follow:!0});c=f.node}else c=s;M.doTruncate(null,c,a)},ftruncate(s,a){var c=M.getStreamChecked(s);if(a<0||(c.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(c,c.node,a)},utime(s,a,c){var f=M.lookupPath(s,{follow:!0}),g=f.node,b=M.checkOpExists(g.node_ops.setattr,63);b(g,{atime:a,mtime:c})},open(s,a,c=438){if(s==="")throw new M.ErrnoError(44);a=typeof a=="string"?bi(a):a,a&64?c=c&4095|32768:c=0;var f,g;if(typeof s=="object")f=s;else{g=s.endsWith("/");var b=M.lookupPath(s,{follow:!(a&131072),noent_okay:!0});f=b.node,s=b.path}var C=!1;if(a&64)if(f){if(a&128)throw new M.ErrnoError(20)}else{if(g)throw new M.ErrnoError(31);f=M.mknod(s,c|511,0),C=!0}if(!f)throw new M.ErrnoError(44);if(M.isChrdev(f.mode)&&(a&=-513),a&65536&&!M.isDir(f.mode))throw new M.ErrnoError(54);if(!C){var L=M.mayOpen(f,a);if(L)throw new M.ErrnoError(L)}a&512&&!C&&M.truncate(f,0),a&=-131713;var B=M.createStream({node:f,path:M.getPath(f),flags:a,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return B.stream_ops.open&&B.stream_ops.open(B),C&&M.chmod(f,c&511),t.logReadFiles&&!(a&1)&&(s in M.readFiles||(M.readFiles[s]=1)),B},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(a){throw a}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,a,c){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,a,c),s.ungotten=[],s.position},read(s,a,c,f,g){if(X(c>=0),f<0||g<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var b=typeof g<"u";if(!b)g=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var C=s.stream_ops.read(s,a,c,f,g);return b||(s.position+=C),C},write(s,a,c,f,g,b){if(X(c>=0),f<0||g<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var C=typeof g<"u";if(!C)g=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var L=s.stream_ops.write(s,a,c,f,g,b);return C||(s.position+=L),L},mmap(s,a,c,f,g){if((f&2)!==0&&(g&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!a)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,a,c,f,g)},msync(s,a,c,f,g){return X(c>=0),s.stream_ops.msync?s.stream_ops.msync(s,a,c,f,g):0},ioctl(s,a,c){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,a,c)},readFile(s,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var c=M.open(s,a.flags),f=M.stat(s),g=f.size,b=new Uint8Array(g);return M.read(c,b,0,g,0),a.encoding==="utf8"&&(b=An(b)),M.close(c),b},writeFile(s,a,c={}){c.flags=c.flags||577;var f=M.open(s,c.flags,c.mode);if(typeof a=="string"&&(a=new Uint8Array(kt(a,!0))),ArrayBuffer.isView(a))M.write(f,a,0,a.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");M.close(f)},cwd:()=>M.currentPath,chdir(s){var a=M.lookupPath(s,{follow:!0});if(a.node===null)throw new M.ErrnoError(44);if(!M.isDir(a.node.mode))throw new M.ErrnoError(54);var c=M.nodePermissions(a.node,"x");if(c)throw new M.ErrnoError(c);M.currentPath=a.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(f,g,b,C,L)=>C,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ft.register(M.makedev(5,0),Ft.default_tty_ops),Ft.register(M.makedev(6,0),Ft.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),a=0,c=()=>(a===0&&(Ke(s),a=s.byteLength),s[--a]);M.createDevice("/dev","random",c),M.createDevice("/dev","urandom",c),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var a=M.createNode(s,"fd",16895,73);return a.stream_ops={llseek:st.stream_ops.llseek},a.node_ops={lookup(c,f){var g=+f,b=M.getStreamChecked(g),C={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>b.path},id:g+1};return C.parent=C,C},readdir(){return Array.from(M.streams.entries()).filter(([c,f])=>f).map(([c,f])=>c.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(s,a,c){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),a?M.createDevice("/dev","stdout",null,a):M.symlink("/dev/tty","/dev/stdout"),c?M.createDevice("/dev","stderr",null,c):M.symlink("/dev/tty1","/dev/stderr");var f=M.open("/dev/stdin",0),g=M.open("/dev/stdout",1),b=M.open("/dev/stderr",1);X(f.fd===0,`invalid handle for stdin (${f.fd})`),X(g.fd===1,`invalid handle for stdout (${g.fd})`),X(b.fd===2,`invalid handle for stderr (${b.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(st,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:st}},init(s,a,c){X(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,s??(s=t.stdin),a??(a=t.stdout),c??(c=t.stderr),M.createStandardStreams(s,a,c)},quit(){M.initialized=!1,mu(0);for(var s of M.streams)s&&M.close(s)},findObject(s,a){var c=M.analyzePath(s,a);return c.exists?c.object:null},analyzePath(s,a){try{var c=M.lookupPath(s,{follow:!a});s=c.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=M.lookupPath(s,{parent:!0});f.parentExists=!0,f.parentPath=c.path,f.parentObject=c.node,f.name=Ce.basename(s),c=M.lookupPath(s,{follow:!a}),f.exists=!0,f.path=c.path,f.object=c.node,f.name=c.node.name,f.isRoot=c.path==="/"}catch(g){f.error=g.errno}return f},createPath(s,a,c,f){s=typeof s=="string"?s:M.getPath(s);for(var g=a.split("/").reverse();g.length;){var b=g.pop();if(b){var C=Ce.join2(s,b);try{M.mkdir(C)}catch(L){if(L.errno!=20)throw L}s=C}}return C},createFile(s,a,c,f,g){var b=Ce.join2(typeof s=="string"?s:M.getPath(s),a),C=Vt(f,g);return M.create(b,C)},createDataFile(s,a,c,f,g,b){var C=a;s&&(s=typeof s=="string"?s:M.getPath(s),C=a?Ce.join2(s,a):s);var L=Vt(f,g),B=M.create(C,L);if(c){if(typeof c=="string"){for(var te=new Array(c.length),oe=0,ge=c.length;oe<ge;++oe)te[oe]=c.charCodeAt(oe);c=te}M.chmod(B,L|146);var Me=M.open(B,577);M.write(Me,c,0,c.length,0,b),M.close(Me),M.chmod(B,L)}},createDevice(s,a,c,f){var L;var g=Ce.join2(typeof s=="string"?s:M.getPath(s),a),b=Vt(!!c,!!f);(L=M.createDevice).major??(L.major=64);var C=M.makedev(M.createDevice.major++,0);return M.registerDevice(C,{open(B){B.seekable=!1},close(B){f?.buffer?.length&&f(10)},read(B,te,oe,ge,Me){for(var _e=0,Re=0;Re<ge;Re++){var at;try{at=c()}catch{throw new M.ErrnoError(29)}if(at===void 0&&_e===0)throw new M.ErrnoError(6);if(at==null)break;_e++,te[oe+Re]=at}return _e&&(B.node.atime=Date.now()),_e},write(B,te,oe,ge,Me){for(var _e=0;_e<ge;_e++)try{f(te[oe+_e])}catch{throw new M.ErrnoError(29)}return ge&&(B.node.mtime=B.node.ctime=Date.now()),_e}}),M.mkdev(g,b,C)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=F(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,a,c,f,g){class b{constructor(){si(this,"lengthKnown",!1);si(this,"chunks",[])}get(_e){if(!(_e>this.length-1||_e<0)){var Re=_e%this.chunkSize,at=_e/this.chunkSize|0;return this.getter(at)[Re]}}setDataGetter(_e){this.getter=_e}cacheLength(){var _e=new XMLHttpRequest;if(_e.open("HEAD",c,!1),_e.send(null),!(_e.status>=200&&_e.status<300||_e.status===304))throw new Error("Couldn't load "+c+". Status: "+_e.status);var Re=Number(_e.getResponseHeader("Content-length")),at,Ot=(at=_e.getResponseHeader("Accept-Ranges"))&&at==="bytes",Ct=(at=_e.getResponseHeader("Content-Encoding"))&&at==="gzip",nn=1024*1024;Ot||(nn=Re);var Gt=(_n,kn)=>{if(_n>kn)throw new Error("invalid range ("+_n+", "+kn+") or no bytes requested!");if(kn>Re-1)throw new Error("only "+Re+" bytes available! programmer error!");var en=new XMLHttpRequest;if(en.open("GET",c,!1),Re!==nn&&en.setRequestHeader("Range","bytes="+_n+"-"+kn),en.responseType="arraybuffer",en.overrideMimeType&&en.overrideMimeType("text/plain; charset=x-user-defined"),en.send(null),!(en.status>=200&&en.status<300||en.status===304))throw new Error("Couldn't load "+c+". Status: "+en.status);return en.response!==void 0?new Uint8Array(en.response||[]):kt(en.responseText||"",!0)},In=this;In.setDataGetter(_n=>{var kn=_n*nn,en=(_n+1)*nn-1;if(en=Math.min(en,Re-1),typeof In.chunks[_n]>"u"&&(In.chunks[_n]=Gt(kn,en)),typeof In.chunks[_n]>"u")throw new Error("doXHR failed!");return In.chunks[_n]}),(Ct||!Re)&&(nn=Re=1,Re=this.getter(0).length,nn=Re,k("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Re,this._chunkSize=nn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var C=new b,L={isDevice:!1,contents:C}}else var L={isDevice:!1,url:c};var B=M.createFile(s,a,L,f,g);L.contents?B.contents=L.contents:L.url&&(B.contents=null,B.url=L.url),Object.defineProperties(B,{usedBytes:{get:function(){return this.contents.length}}});var te={},oe=Object.keys(B.stream_ops);oe.forEach(Me=>{var _e=B.stream_ops[Me];te[Me]=(...Re)=>(M.forceLoadFile(B),_e(...Re))});function ge(Me,_e,Re,at,Ot){var Ct=Me.node.contents;if(Ot>=Ct.length)return 0;var nn=Math.min(Ct.length-Ot,at);if(X(nn>=0),Ct.slice)for(var Gt=0;Gt<nn;Gt++)_e[Re+Gt]=Ct[Ot+Gt];else for(var Gt=0;Gt<nn;Gt++)_e[Re+Gt]=Ct.get(Ot+Gt);return nn}return te.read=(Me,_e,Re,at,Ot)=>(M.forceLoadFile(B),ge(Me,_e,Re,at,Ot)),te.mmap=(Me,_e,Re,at,Ot)=>{M.forceLoadFile(B);var Ct=Xt(_e);if(!Ct)throw new M.ErrnoError(48);return ge(Me,ct,Ct,_e,Re),{ptr:Ct,allocated:!0}},B.stream_ops=te,B},absolutePath(){Ie("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){Ie("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){Ie("FS.createLink has been removed; use FS.symlink instead")},joinPath(){Ie("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){Ie("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){Ie("FS.standardizePath has been removed; use PATH.normalize instead")}},Ut={DEFAULT_POLLMASK:5,calculateAt(s,a,c){if(Ce.isAbs(a))return a;var f;if(s===-100)f=M.cwd();else{var g=Ut.getStreamFromFD(s);f=g.path}if(a.length==0){if(!c)throw new M.ErrnoError(44);return f}return f+"/"+a},writeStat(s,a){Ve[s>>2]=a.dev,Ve[s+4>>2]=a.mode,Ye[s+8>>2]=a.nlink,Ve[s+12>>2]=a.uid,Ve[s+16>>2]=a.gid,Ve[s+20>>2]=a.rdev,Wt[s+24>>3]=BigInt(a.size),Ve[s+32>>2]=4096,Ve[s+36>>2]=a.blocks;var c=a.atime.getTime(),f=a.mtime.getTime(),g=a.ctime.getTime();return Wt[s+40>>3]=BigInt(Math.floor(c/1e3)),Ye[s+48>>2]=c%1e3*1e3*1e3,Wt[s+56>>3]=BigInt(Math.floor(f/1e3)),Ye[s+64>>2]=f%1e3*1e3*1e3,Wt[s+72>>3]=BigInt(Math.floor(g/1e3)),Ye[s+80>>2]=g%1e3*1e3*1e3,Wt[s+88>>3]=BigInt(a.ino),0},writeStatFs(s,a){Ve[s+4>>2]=a.bsize,Ve[s+40>>2]=a.bsize,Ve[s+8>>2]=a.blocks,Ve[s+12>>2]=a.bfree,Ve[s+16>>2]=a.bavail,Ve[s+20>>2]=a.files,Ve[s+24>>2]=a.ffree,Ve[s+28>>2]=a.fsid,Ve[s+44>>2]=a.flags,Ve[s+36>>2]=a.namelen},doMsync(s,a,c,f,g){if(!M.isFile(a.node.mode))throw new M.ErrnoError(43);if(f&2)return 0;var b=ut.slice(s,s+c);M.msync(a,b,g,c,f)},getStreamFromFD(s){var a=M.getStreamChecked(s);return a},varargs:void 0,getStr(s){var a=On(s);return a}};function fi(s,a,c){try{var f=Ut.getStreamFromFD(s);if(X(!c),f.fd===a)return-28;if(a<0||a>=M.MAX_OPEN_FDS)return-8;var g=M.getStream(a);return g&&M.close(g),M.dupStream(f,a).fd}catch(b){if(typeof M>"u"||b.name!=="ErrnoError")throw b;return-b.errno}}var Ui=()=>{X(Ut.varargs!=null);var s=Ve[+Ut.varargs>>2];return Ut.varargs+=4,s},Xi=Ui;function mo(s,a,c){Ut.varargs=c;try{var f=Ut.getStreamFromFD(s);switch(a){case 0:{var g=Ui();if(g<0)return-28;for(;M.streams[g];)g++;var b;return b=M.dupStream(f,g),b.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var g=Ui();return f.flags|=g,0}case 12:{var g=Xi(),C=0;return Mt[g+C>>1]=2,0}case 13:case 14:return 0}return-28}catch(L){if(typeof M>"u"||L.name!=="ErrnoError")throw L;return-L.errno}}function go(s,a){try{return Ut.writeStat(a,M.fstat(s))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function _o(s,a,c){Ut.varargs=c;try{var f=Ut.getStreamFromFD(s);switch(a){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var g=f.tty.ops.ioctl_tcgets(f),b=Xi();Ve[b>>2]=g.c_iflag||0,Ve[b+4>>2]=g.c_oflag||0,Ve[b+8>>2]=g.c_cflag||0,Ve[b+12>>2]=g.c_lflag||0;for(var C=0;C<32;C++)ct[b+C+17]=g.c_cc[C]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var b=Xi(),L=Ve[b>>2],B=Ve[b+4>>2],te=Ve[b+8>>2],oe=Ve[b+12>>2],ge=[],C=0;C<32;C++)ge.push(ct[b+C+17]);return f.tty.ops.ioctl_tcsets(f.tty,a,{c_iflag:L,c_oflag:B,c_cflag:te,c_lflag:oe,c_cc:ge})}return 0}case 21519:{if(!f.tty)return-59;var b=Xi();return Ve[b>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var b=Xi();return M.ioctl(f,a,b)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var Me=f.tty.ops.ioctl_tiocgwinsz(f.tty),b=Xi();Mt[b>>1]=Me[0],Mt[b+2>>1]=Me[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(_e){if(typeof M>"u"||_e.name!=="ErrnoError")throw _e;return-_e.errno}}function vo(s,a){try{return s=Ut.getStr(s),Ut.writeStat(a,M.lstat(s))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Yc(s,a,c,f){try{a=Ut.getStr(a);var g=f&256,b=f&4096;return f=f&-6401,X(!f,`unknown flags in __syscall_newfstatat: ${f}`),a=Ut.calculateAt(s,a,b),Ut.writeStat(c,g?M.lstat(a):M.stat(a))}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function yo(s,a,c,f){Ut.varargs=f;try{a=Ut.getStr(a),a=Ut.calculateAt(s,a);var g=f?Ui():0;return M.open(a,c,g).fd}catch(b){if(typeof M>"u"||b.name!=="ErrnoError")throw b;return-b.errno}}function jc(s,a){try{return s=Ut.getStr(s),Ut.writeStat(a,M.stat(s))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var ss=()=>Ie("native code called abort()"),un=s=>{for(var a="";;){var c=ut[s++];if(!c)return a;a+=String.fromCharCode(c)}},$i={},Si={},Fr={},or=class extends Error{constructor(a){super(a),this.name="BindingError"}},Pt=s=>{throw new or(s)};function da(s,a,c={}){var f=a.name;if(s||Pt(`type "${f}" must have a positive integer typeid pointer`),Si.hasOwnProperty(s)){if(c.ignoreDuplicateRegistrations)return;Pt(`Cannot register type '${f}' twice`)}if(Si[s]=a,delete Fr[s],$i.hasOwnProperty(s)){var g=$i[s];delete $i[s],g.forEach(b=>b())}}function Bn(s,a,c={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return da(s,a,c)}var fa=(s,a,c)=>{switch(a){case 1:return c?f=>ct[f]:f=>ut[f];case 2:return c?f=>Mt[f>>1]:f=>Yt[f>>1];case 4:return c?f=>Ve[f>>2]:f=>Ye[f>>2];case 8:return c?f=>Wt[f>>3]:f=>je[f>>3];default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},vt=s=>{if(s===null)return"null";var a=typeof s;return a==="object"||a==="array"||a==="function"?s.toString():""+s},lr=(s,a,c,f)=>{if(a<c||a>f)throw new TypeError(`Passing a number "${vt(a)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${c}, ${f}]!`)},xo=(s,a,c,f,g)=>{a=un(a);let b=f===0n,C=L=>L;if(b){let L=c*8;C=B=>BigInt.asUintN(L,B),g=C(g)}Bn(s,{name:a,fromWireType:C,toWireType:(L,B)=>{if(typeof B=="number")B=BigInt(B);else if(typeof B!="bigint")throw new TypeError(`Cannot convert "${vt(B)}" to ${this.name}`);return lr(a,B,f,g),B},argPackAdvance:ht,readValueFromPointer:fa(a,c,!b),destructorFunction:null})},ht=8,pa=(s,a,c,f)=>{a=un(a),Bn(s,{name:a,fromWireType:function(g){return!!g},toWireType:function(g,b){return b?c:f},argPackAdvance:ht,readValueFromPointer:function(g){return this.fromWireType(ut[g])},destructorFunction:null})},Tt=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),as=s=>{function a(c){return c.$$.ptrType.registeredClass.name}Pt(a(s)+" instance already deleted")},Nr=!1,ma=s=>{},bo=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},ga=s=>{s.count.value-=1;var a=s.count.value===0;a&&bo(s)},wi=(s,a,c)=>{if(a===c)return s;if(c.baseClass===void 0)return null;var f=wi(s,a,c.baseClass);return f===null?null:c.downcast(f)},So={},wo={},Zc=(s,a)=>{for(a===void 0&&Pt("ptr should not be undefined");s.baseClass;)a=s.upcast(a),s=s.baseClass;return a},Jc=(s,a)=>(a=Zc(s,a),wo[a]),Kc=class extends Error{constructor(a){super(a),this.name="InternalError"}},os=s=>{throw new Kc(s)},ls=(s,a)=>{(!a.ptrType||!a.ptr)&&os("makeClassHandle requires ptr and ptrType");var c=!!a.smartPtrType,f=!!a.smartPtr;return c!==f&&os("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Ur(Object.create(s,{$$:{value:a,writable:!0}}))};function Mo(s){var a=this.getPointee(s);if(!a)return this.destructor(s),null;var c=Jc(this.registeredClass,a);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=a,c.$$.smartPtr=s,c.clone();var f=c.clone();return this.destructor(s),f}function g(){return this.isSmartPointer?ls(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:s}):ls(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var b=this.registeredClass.getActualType(a),C=So[b];if(!C)return g.call(this);var L;this.isConst?L=C.constPointerType:L=C.pointerType;var B=wi(a,this.registeredClass,L.registeredClass);return B===null?g.call(this):this.isSmartPointer?ls(L.registeredClass.instancePrototype,{ptrType:L,ptr:B,smartPtrType:this,smartPtr:s}):ls(L.registeredClass.instancePrototype,{ptrType:L,ptr:B})}var Ur=s=>typeof FinalizationRegistry>"u"?(Ur=a=>a,s):(Nr=new FinalizationRegistry(a=>{console.warn(a.leakWarning),ga(a.$$)}),Ur=a=>{var c=a.$$,f=!!c.smartPtr;if(f){var g={$$:c},b=c.ptrType.registeredClass,C=new Error(`Embind found a leaked C++ instance ${b.name} <${xi(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(C,Mo),g.leakWarning=C.stack.replace(/^Error: /,""),Nr.register(a,g,a)}return a},ma=a=>Nr.unregister(a),Ur(s)),cs=[],Qc=()=>{for(;cs.length;){var s=cs.pop();s.$$.deleteScheduled=!1,s.delete()}},Eo,eu=()=>{let s=us.prototype;Object.assign(s,{isAliasOf(c){if(!(this instanceof us)||!(c instanceof us))return!1;var f=this.$$.ptrType.registeredClass,g=this.$$.ptr;c.$$=c.$$;for(var b=c.$$.ptrType.registeredClass,C=c.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;b.baseClass;)C=b.upcast(C),b=b.baseClass;return f===b&&g===C},clone(){if(this.$$.ptr||as(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=Ur(Object.create(Object.getPrototypeOf(this),{$$:{value:Tt(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||as(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Pt("Object already scheduled for deletion"),ma(this),ga(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||as(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Pt("Object already scheduled for deletion"),cs.push(this),cs.length===1&&Eo&&Eo(Qc),this.$$.deleteScheduled=!0,this}});let a=Symbol.dispose;a&&(s[a]=s.delete)};function us(){}var hs=(s,a)=>Object.defineProperty(a,"name",{value:s}),_a=(s,a,c)=>{if(s[a].overloadTable===void 0){var f=s[a];s[a]=function(...g){return s[a].overloadTable.hasOwnProperty(g.length)||Pt(`Function '${c}' called with an invalid number of arguments (${g.length}) - expects one of (${s[a].overloadTable})!`),s[a].overloadTable[g.length].apply(this,g)},s[a].overloadTable=[],s[a].overloadTable[f.argCount]=f}},va=(s,a,c)=>{t.hasOwnProperty(s)?((c===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[c]!==void 0)&&Pt(`Cannot register public name '${s}' twice`),_a(t,s,s),t[s].overloadTable.hasOwnProperty(c)&&Pt(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[s].overloadTable[c]=a):(t[s]=a,t[s].argCount=c)},tu=48,nu=57,iu=s=>{X(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var a=s.charCodeAt(0);return a>=tu&&a<=nu?`_${s}`:s};function ru(s,a,c,f,g,b,C,L){this.name=s,this.constructor=a,this.instancePrototype=c,this.rawDestructor=f,this.baseClass=g,this.getActualType=b,this.upcast=C,this.downcast=L,this.pureVirtualFunctions=[]}var ds=(s,a,c)=>{for(;a!==c;)a.upcast||Pt(`Expected null or instance of ${c.name}, got an instance of ${a.name}`),s=a.upcast(s),a=a.baseClass;return s};function su(s,a){if(a===null)return this.isReference&&Pt(`null is not a valid ${this.name}`),0;a.$$||Pt(`Cannot pass "${vt(a)}" as a ${this.name}`),a.$$.ptr||Pt(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=a.$$.ptrType.registeredClass,f=ds(a.$$.ptr,c,this.registeredClass);return f}function au(s,a){var c;if(a===null)return this.isReference&&Pt(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,c),c):0;(!a||!a.$$)&&Pt(`Cannot pass "${vt(a)}" as a ${this.name}`),a.$$.ptr||Pt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&Pt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var f=a.$$.ptrType.registeredClass;if(c=ds(a.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&Pt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?c=a.$$.smartPtr:Pt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)c=a.$$.smartPtr;else{var g=a.clone();c=this.rawShare(c,hn.toHandle(()=>g.delete())),s!==null&&s.push(this.rawDestructor,c)}break;default:Pt("Unsupporting sharing policy")}return c}function ou(s,a){if(a===null)return this.isReference&&Pt(`null is not a valid ${this.name}`),0;a.$$||Pt(`Cannot pass "${vt(a)}" as a ${this.name}`),a.$$.ptr||Pt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&Pt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var c=a.$$.ptrType.registeredClass,f=ds(a.$$.ptr,c,this.registeredClass);return f}function fs(s){return this.fromWireType(Ye[s>>2])}var lu=()=>{Object.assign(ps.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},argPackAdvance:ht,readValueFromPointer:fs,fromWireType:Mo})};function ps(s,a,c,f,g,b,C,L,B,te,oe){this.name=s,this.registeredClass=a,this.isReference=c,this.isConst=f,this.isSmartPointer=g,this.pointeeType=b,this.sharingPolicy=C,this.rawGetPointee=L,this.rawConstructor=B,this.rawShare=te,this.rawDestructor=oe,!g&&a.baseClass===void 0?f?(this.toWireType=su,this.destructorFunction=null):(this.toWireType=ou,this.destructorFunction=null):this.toWireType=au}var To=(s,a,c)=>{t.hasOwnProperty(s)||os("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&c!==void 0?t[s].overloadTable[c]=a:(t[s]=a,t[s].argCount=c)},Ao=[],ms,Le=s=>{var a=Ao[s];return a||(Ao[s]=a=ms.get(s)),X(ms.get(s)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},pi=(s,a,c=!1)=>{X(!c,"Async bindings are only supported with JSPI."),s=un(s);function f(){var b=Le(a);return b}var g=f();return typeof g!="function"&&Pt(`unknown function pointer with signature ${s}: ${a}`),g};class cu extends Error{}var Co=s=>{var a=jd(s),c=un(a);return Mi(a),c},qi=(s,a)=>{var c=[],f={};function g(b){if(!f[b]&&!Si[b]){if(Fr[b]){Fr[b].forEach(g);return}c.push(b),f[b]=!0}}throw a.forEach(g),new cu(`${s}: `+c.map(Co).join([", "]))},ii=(s,a,c)=>{s.forEach(L=>Fr[L]=a);function f(L){var B=c(L);B.length!==s.length&&os("Mismatched type converter count");for(var te=0;te<s.length;++te)Bn(s[te],B[te])}var g=new Array(a.length),b=[],C=0;a.forEach((L,B)=>{Si.hasOwnProperty(L)?g[B]=Si[L]:(b.push(L),$i.hasOwnProperty(L)||($i[L]=[]),$i[L].push(()=>{g[B]=Si[L],++C,C===b.length&&f(g)}))}),b.length===0&&f(g)},uu=(s,a,c,f,g,b,C,L,B,te,oe,ge,Me)=>{oe=un(oe),b=pi(g,b),L&&(L=pi(C,L)),te&&(te=pi(B,te)),Me=pi(ge,Me);var _e=iu(oe);va(_e,function(){qi(`Cannot construct ${oe} due to unbound types`,[f])}),ii([s,a,c],f?[f]:[],Re=>{var en;Re=Re[0];var at,Ot;f?(at=Re.registeredClass,Ot=at.instancePrototype):Ot=us.prototype;var Ct=hs(oe,function(...cr){if(Object.getPrototypeOf(this)!==nn)throw new or(`Use 'new' to construct ${oe}`);if(Gt.constructor_body===void 0)throw new or(`${oe} has no accessible constructor`);var Oo=Gt.constructor_body[cr.length];if(Oo===void 0)throw new or(`Tried to invoke ctor of ${oe} with invalid number of parameters (${cr.length}) - expected (${Object.keys(Gt.constructor_body).toString()}) parameters instead!`);return Oo.apply(this,cr)}),nn=Object.create(Ot,{constructor:{value:Ct}});Ct.prototype=nn;var Gt=new ru(oe,Ct,nn,Me,at,b,L,te);Gt.baseClass&&((en=Gt.baseClass).__derivedClasses??(en.__derivedClasses=[]),Gt.baseClass.__derivedClasses.push(Gt));var In=new ps(oe,Gt,!0,!1,!1),_n=new ps(oe+"*",Gt,!1,!1,!1),kn=new ps(oe+" const*",Gt,!1,!0,!1);return So[s]={pointerType:_n,constPointerType:kn},To(_e,Ct),[In,_n,kn]})},ya=s=>{for(;s.length;){var a=s.pop(),c=s.pop();c(a)}};function Ro(s){for(var a=1;a<s.length;++a)if(s[a]!==null&&s[a].destructorFunction===void 0)return!0;return!1}function gs(s,a,c,f,g){if(s<a||s>c){var b=a==c?a:`${a} to ${c}`;g(`function ${f} called with ${s} arguments, expected ${b}`)}}function x(s,a,c,f){var g=Ro(s),b=s.length-2,C=[],L=["fn"];a&&L.push("thisWired");for(var B=0;B<b;++B)C.push(`arg${B}`),L.push(`arg${B}Wired`);C=C.join(","),L=L.join(",");var te=`return function (${C}) {
`;te+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,g&&(te+=`var destructors = [];
`);var oe=g?"destructors":"null",ge=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(te+=`var thisWired = classParam['toWireType'](${oe}, this);
`);for(var B=0;B<b;++B)te+=`var arg${B}Wired = argType${B}['toWireType'](${oe}, arg${B});
`,ge.push(`argType${B}`);te+=(c||f?"var rv = ":"")+`invoker(${L});
`;var Me=c?"rv":"";if(g)te+=`runDestructors(destructors);
`;else for(var B=a?1:2;B<s.length;++B){var _e=B===1?"thisWired":"arg"+(B-2)+"Wired";s[B].destructorFunction!==null&&(te+=`${_e}_dtor(${_e});
`,ge.push(`${_e}_dtor`))}return c&&(te+=`var ret = retType['fromWireType'](rv);
return ret;
`),te+=`}
`,ge.push("checkArgCount","minArgs","maxArgs"),te=`if (arguments.length !== ${ge.length}){ throw new Error(humanName + "Expected ${ge.length} closure arguments " + arguments.length + " given."); }
${te}`,[ge,te]}function P(s){for(var a=s.length-2,c=s.length-1;c>=2&&s[c].optional;--c)a--;return a}function G(s,a,c,f,g,b){var C=a.length;C<2&&Pt("argTypes array size mismatch! Must at least get return value and 'this' types!"),X(!b,"Async bindings are only supported with JSPI.");for(var L=a[1]!==null&&c!==null,B=Ro(a),te=a[0].name!=="void",oe=C-2,ge=P(a),Me=[s,Pt,f,g,ya,a[0],a[1]],_e=0;_e<C-2;++_e)Me.push(a[_e+2]);if(!B)for(var _e=L?1:2;_e<a.length;++_e)a[_e].destructorFunction!==null&&Me.push(a[_e].destructorFunction);Me.push(gs,ge,oe);let[Re,at]=x(a,L,te,b);var Ot=new Function(...Re,at)(...Me);return hs(s,Ot)}var V=(s,a)=>{for(var c=[],f=0;f<s;f++)c.push(Ye[a+f*4>>2]);return c},ee=s=>{s=s.trim();let a=s.indexOf("(");return a===-1?s:(X(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,a))},he=(s,a,c,f,g,b,C,L,B)=>{var te=V(c,f);a=un(a),a=ee(a),b=pi(g,b,L),ii([],[s],oe=>{oe=oe[0];var ge=`${oe.name}.${a}`;function Me(){qi(`Cannot call ${ge} due to unbound types`,te)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var _e=oe.registeredClass.constructor;return _e[a]===void 0?(Me.argCount=c-1,_e[a]=Me):(_a(_e,a,ge),_e[a].overloadTable[c-1]=Me),ii([],te,Re=>{var at=[Re[0],null].concat(Re.slice(1)),Ot=G(ge,at,null,b,C,L);if(_e[a].overloadTable===void 0?(Ot.argCount=c-1,_e[a]=Ot):_e[a].overloadTable[c-1]=Ot,oe.registeredClass.__derivedClasses)for(let Ct of oe.registeredClass.__derivedClasses)Ct.constructor.hasOwnProperty(a)||(Ct.constructor[a]=Ot);return[]}),[]})},Ue=(s,a,c,f,g,b)=>{X(a>0);var C=V(a,c);g=pi(f,g);var L=[b],B=[];ii([],[s],te=>{te=te[0];var oe=`constructor ${te.name}`;if(te.registeredClass.constructor_body===void 0&&(te.registeredClass.constructor_body=[]),te.registeredClass.constructor_body[a-1]!==void 0)throw new or(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${te.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return te.registeredClass.constructor_body[a-1]=()=>{qi(`Cannot construct ${te.name} due to unbound types`,C)},ii([],C,ge=>(ge.splice(1,0,null),te.registeredClass.constructor_body[a-1]=G(oe,ge,null,g,b),[])),[]})},ot=(s,a,c,f,g,b,C,L,B,te)=>{var oe=V(c,f);a=un(a),a=ee(a),b=pi(g,b,B),ii([],[s],ge=>{ge=ge[0];var Me=`${ge.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),L&&ge.registeredClass.pureVirtualFunctions.push(a);function _e(){qi(`Cannot call ${Me} due to unbound types`,oe)}var Re=ge.registeredClass.instancePrototype,at=Re[a];return at===void 0||at.overloadTable===void 0&&at.className!==ge.name&&at.argCount===c-2?(_e.argCount=c-2,_e.className=ge.name,Re[a]=_e):(_a(Re,a,Me),Re[a].overloadTable[c-2]=_e),ii([],oe,Ot=>{var Ct=G(Me,Ot,ge,b,C,B);return Re[a].overloadTable===void 0?(Ct.argCount=c-2,Re[a]=Ct):Re[a].overloadTable[c-2]=Ct,[]}),[]})},Et=(s,a,c)=>(s instanceof Object||Pt(`${c} with invalid "this": ${s}`),s instanceof a.registeredClass.constructor||Pt(`${c} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||Pt(`cannot call emscripten binding method ${c} on deleted object`),ds(s.$$.ptr,s.$$.ptrType.registeredClass,a.registeredClass)),It=(s,a,c,f,g,b,C,L,B,te)=>{a=un(a),g=pi(f,g),ii([],[s],oe=>{oe=oe[0];var ge=`${oe.name}.${a}`,Me={get(){qi(`Cannot access ${ge} due to unbound types`,[c,C])},enumerable:!0,configurable:!0};return B?Me.set=()=>qi(`Cannot access ${ge} due to unbound types`,[c,C]):Me.set=_e=>Pt(ge+" is a read-only property"),Object.defineProperty(oe.registeredClass.instancePrototype,a,Me),ii([],B?[c,C]:[c],_e=>{var Re=_e[0],at={get(){var Ct=Et(this,oe,ge+" getter");return Re.fromWireType(g(b,Ct))},enumerable:!0};if(B){B=pi(L,B);var Ot=_e[1];at.set=function(Ct){var nn=Et(this,oe,ge+" setter"),Gt=[];B(te,nn,Ot.toWireType(Gt,Ct)),ya(Gt)}}return Object.defineProperty(oe.registeredClass.instancePrototype,a,at),[]}),[]})},gn=(s,a,c)=>{s=un(s),ii([],[a],f=>(f=f[0],t[s]=f.fromWireType(c),[]))},Yn=[],pn=[0,1,,1,null,1,!0,1,!1,1],ri=s=>{s>9&&--pn[s+1]===0&&(X(pn[s]!==void 0,"Decref for unallocated handle."),pn[s]=void 0,Yn.push(s))},hn={toValue:s=>(s||Pt(`Cannot use deleted val. handle = ${s}`),X(s===2||pn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),pn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let a=Yn.pop()||pn.length;return pn[a]=s,pn[a+1]=1,a}}}},Po={name:"emscripten::val",fromWireType:s=>{var a=hn.toValue(s);return ri(s),a},toWireType:(s,a)=>hn.toHandle(a),argPackAdvance:ht,readValueFromPointer:fs,destructorFunction:null},Io=s=>Bn(s,Po),xa=(s,a,c)=>{switch(a){case 1:return c?function(f){return this.fromWireType(ct[f])}:function(f){return this.fromWireType(ut[f])};case 2:return c?function(f){return this.fromWireType(Mt[f>>1])}:function(f){return this.fromWireType(Yt[f>>1])};case 4:return c?function(f){return this.fromWireType(Ve[f>>2])}:function(f){return this.fromWireType(Ye[f>>2])};default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Ag=(s,a,c,f)=>{a=un(a);function g(){}g.values={},Bn(s,{name:a,constructor:g,fromWireType:function(b){return this.constructor.values[b]},toWireType:(b,C)=>C.value,argPackAdvance:ht,readValueFromPointer:xa(a,c,f),destructorFunction:null}),va(a,g)},Lo=(s,a)=>{var c=Si[s];return c===void 0&&Pt(`${a} has unknown type ${Co(s)}`),c},Cg=(s,a,c)=>{var f=Lo(s,"enum");a=un(a);var g=f.constructor,b=Object.create(f.constructor.prototype,{value:{value:c},constructor:{value:hs(`${f.name}_${a}`,function(){})}});g.values[c]=b,g[a]=b},Rg=(s,a)=>{switch(a){case 4:return function(c){return this.fromWireType(Zt[c>>2])};case 8:return function(c){return this.fromWireType(J[c>>3])};default:throw new TypeError(`invalid float width (${a}): ${s}`)}},Pg=(s,a,c)=>{a=un(a),Bn(s,{name:a,fromWireType:f=>f,toWireType:(f,g)=>{if(typeof g!="number"&&typeof g!="boolean")throw new TypeError(`Cannot convert ${vt(g)} to ${this.name}`);return g},argPackAdvance:ht,readValueFromPointer:Rg(a,c),destructorFunction:null})},Ig=(s,a,c,f,g,b,C,L)=>{var B=V(a,c);s=un(s),s=ee(s),g=pi(f,g,C),va(s,function(){qi(`Cannot call ${s} due to unbound types`,B)},a-1),ii([],B,te=>{var oe=[te[0],null].concat(te.slice(1));return To(s,G(s,oe,null,g,b,C),a-1),[]})},Lg=(s,a,c,f,g)=>{a=un(a);let b=f===0,C=B=>B;if(b){var L=32-8*c;C=B=>B<<L>>>L,g=C(g)}Bn(s,{name:a,fromWireType:C,toWireType:(B,te)=>{if(typeof te!="number"&&typeof te!="boolean")throw new TypeError(`Cannot convert "${vt(te)}" to ${a}`);return lr(a,te,f,g),te},argPackAdvance:ht,readValueFromPointer:fa(a,c,f!==0),destructorFunction:null})},Dg=(s,a,c)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],g=f[a];function b(C){var L=Ye[C>>2],B=Ye[C+4>>2];return new g(ct.buffer,B,L)}c=un(c),Bn(s,{name:c,fromWireType:b,argPackAdvance:ht,readValueFromPointer:b},{ignoreDuplicateRegistrations:!0})},Fg=Object.assign({optional:!0},Po),Ng=(s,a)=>{Bn(s,Fg)},Or=(s,a,c)=>(X(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Qe(s,ut,a,c)),Ug=(s,a)=>{a=un(a);var c=!0;Bn(s,{name:a,fromWireType(f){var g=Ye[f>>2],b=f+4,C;if(c)for(var L=b,B=0;B<=g;++B){var te=b+B;if(B==g||ut[te]==0){var oe=te-L,ge=On(L,oe);C===void 0?C=ge:(C+="\0",C+=ge),L=te+1}}else{for(var Me=new Array(g),B=0;B<g;++B)Me[B]=String.fromCharCode(ut[b+B]);C=Me.join("")}return Mi(f),C},toWireType(f,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var b,C=typeof g=="string";C||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1||Pt("Cannot pass non-string to std::string"),c&&C?b=bt(g):b=g.length;var L=pu(4+b+1),B=L+4;if(Ye[L>>2]=b,C)if(c)Or(g,B,b+1);else for(var te=0;te<b;++te){var oe=g.charCodeAt(te);oe>255&&(Mi(L),Pt("String has UTF-16 code units that do not fit in 8 bits")),ut[B+te]=oe}else ut.set(g,B);return f!==null&&f.push(Mi,L),L},argPackAdvance:ht,readValueFromPointer:fs,destructorFunction(f){Mi(f)}})},Od=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Og=(s,a)=>{X(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=s>>1,f=c+a/2,g=c;!(g>=f)&&Yt[g];)++g;if(g-c>16&&Od)return Od.decode(Yt.subarray(c,g));for(var b="",C=c;!(C>=f);++C){var L=Yt[C];if(L==0)break;b+=String.fromCharCode(L)}return b},Bg=(s,a,c)=>{if(X(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),X(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??(c=2147483647),c<2)return 0;c-=2;for(var f=a,g=c<s.length*2?c/2:s.length,b=0;b<g;++b){var C=s.charCodeAt(b);Mt[a>>1]=C,a+=2}return Mt[a>>1]=0,a-f},kg=s=>s.length*2,zg=(s,a)=>{X(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",f=0;!(f>=a/4);f++){var g=Ve[s+f*4>>2];if(!g)break;c+=String.fromCodePoint(g)}return c},Vg=(s,a,c)=>{if(X(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),X(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??(c=2147483647),c<4)return 0;for(var f=a,g=f+c-4,b=0;b<s.length;++b){var C=s.codePointAt(b);if(C>65535&&b++,Ve[a>>2]=C,a+=4,a+4>g)break}return Ve[a>>2]=0,a-f},Gg=s=>{for(var a=0,c=0;c<s.length;++c){var f=s.codePointAt(c);f>65535&&c++,a+=4}return a},Hg=(s,a,c)=>{c=un(c);var f,g,b,C;a===2?(f=Og,g=Bg,C=kg,b=L=>Yt[L>>1]):a===4&&(f=zg,g=Vg,C=Gg,b=L=>Ye[L>>2]),Bn(s,{name:c,fromWireType:L=>{for(var B=Ye[L>>2],te,oe=L+4,ge=0;ge<=B;++ge){var Me=L+4+ge*a;if(ge==B||b(Me)==0){var _e=Me-oe,Re=f(oe,_e);te===void 0?te=Re:(te+="\0",te+=Re),oe=Me+a}}return Mi(L),te},toWireType:(L,B)=>{typeof B!="string"&&Pt(`Cannot pass non-string to C++ string type ${c}`);var te=C(B),oe=pu(4+te+a);return Ye[oe>>2]=te/a,g(B,oe+4,te+a),L!==null&&L.push(Mi,oe),oe},argPackAdvance:ht,readValueFromPointer:fs,destructorFunction(L){Mi(L)}})},Wg=(s,a)=>{Io(s)},Xg=(s,a)=>{a=un(a),Bn(s,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,f)=>{}})},$g=()=>{throw new ye},Bd=(s,a,c)=>{var f=[],g=s.toWireType(f,c);return f.length&&(Ye[a>>2]=hn.toHandle(f)),g},qg=(s,a,c)=>(s=hn.toValue(s),a=Lo(a,"emval::as"),Bd(a,c,s)),Do=[],Yg=(s,a,c,f)=>(s=Do[s],a=hn.toValue(a),s(null,a,c,f)),jg={},hu=s=>{var a=jg[s];return a===void 0?un(s):a},Zg=(s,a,c,f,g)=>(s=Do[s],a=hn.toValue(a),c=hu(c),s(a,a[c],f,g)),kd=()=>globalThis,Jg=s=>s===0?hn.toHandle(kd()):(s=hu(s),hn.toHandle(kd()[s])),Kg=s=>{var a=Do.length;return Do.push(s),a},Qg=(s,a)=>{for(var c=new Array(s),f=0;f<s;++f)c[f]=Lo(Ye[a+f*4>>2],`parameter ${f}`);return c},e_=(s,a,c)=>{var f=Qg(s,a),g=f.shift();s--;var b=`return function (obj, func, destructorsRef, args) {
`,C=0,L=[];c===0&&L.push("obj");for(var B=["retType"],te=[g],oe=0;oe<s;++oe)L.push(`arg${oe}`),B.push(`argType${oe}`),te.push(f[oe]),b+=`  var arg${oe} = argType${oe}.readValueFromPointer(args${C?"+"+C:""});
`,C+=f[oe].argPackAdvance;var ge=c===1?"new func":"func.call";b+=`  var rv = ${ge}(${L.join(", ")});
`,g.isVoid||(B.push("emval_returnValue"),te.push(Bd),b+=`  return emval_returnValue(retType, destructorsRef, rv);
`),b+=`};
`;var Me=new Function(...B,b)(...te),_e=`methodCaller<(${f.map(Re=>Re.name).join(", ")}) => ${g.name}>`;return Kg(hs(_e,Me))},t_=(s,a)=>(s=hn.toValue(s),a=hn.toValue(a),hn.toHandle(s[a])),n_=s=>{s>9&&(pn[s+1]+=1)},i_=s=>(s=hn.toValue(s),typeof s=="number"),r_=s=>(s=hn.toValue(s),typeof s=="string"),s_=()=>hn.toHandle([]),a_=s=>hn.toHandle(hu(s)),o_=s=>{var a=hn.toValue(s);ya(a),ri(s)},l_=(s,a)=>{s=Lo(s,"_emval_take_value");var c=s.readValueFromPointer(a);return hn.toHandle(c)},c_=s=>{throw s=hn.toValue(s),s},u_=s=>s%4===0&&(s%100!==0||s%400===0),h_=[0,31,60,91,121,152,182,213,244,274,305,335],d_=[0,31,59,90,120,151,181,212,243,273,304,334],zd=s=>{var a=u_(s.getFullYear()),c=a?h_:d_,f=c[s.getMonth()]+s.getDate()-1;return f},f_=9007199254740992,p_=-9007199254740992,du=s=>s<p_||s>f_?NaN:Number(s);function m_(s,a){s=du(s);var c=new Date(s*1e3);Ve[a>>2]=c.getSeconds(),Ve[a+4>>2]=c.getMinutes(),Ve[a+8>>2]=c.getHours(),Ve[a+12>>2]=c.getDate(),Ve[a+16>>2]=c.getMonth(),Ve[a+20>>2]=c.getFullYear()-1900,Ve[a+24>>2]=c.getDay();var f=zd(c)|0;Ve[a+28>>2]=f,Ve[a+36>>2]=-(c.getTimezoneOffset()*60);var g=new Date(c.getFullYear(),0,1),b=new Date(c.getFullYear(),6,1).getTimezoneOffset(),C=g.getTimezoneOffset(),L=(b!=C&&c.getTimezoneOffset()==Math.min(C,b))|0;Ve[a+32>>2]=L}var g_=function(s){var a=(()=>{var c=new Date(Ve[s+20>>2]+1900,Ve[s+16>>2],Ve[s+12>>2],Ve[s+8>>2],Ve[s+4>>2],Ve[s>>2],0),f=Ve[s+32>>2],g=c.getTimezoneOffset(),b=new Date(c.getFullYear(),0,1),C=new Date(c.getFullYear(),6,1).getTimezoneOffset(),L=b.getTimezoneOffset(),B=Math.min(L,C);if(f<0)Ve[s+32>>2]=+(C!=L&&B==g);else if(f>0!=(B==g)){var te=Math.max(L,C),oe=f>0?B:te;c.setTime(c.getTime()+(oe-g)*6e4)}Ve[s+24>>2]=c.getDay();var ge=zd(c)|0;Ve[s+28>>2]=ge,Ve[s>>2]=c.getSeconds(),Ve[s+4>>2]=c.getMinutes(),Ve[s+8>>2]=c.getHours(),Ve[s+12>>2]=c.getDate(),Ve[s+16>>2]=c.getMonth(),Ve[s+20>>2]=c.getYear();var Me=c.getTime();return isNaN(Me)?-1:Me/1e3})();return BigInt(a)},__=(s,a,c,f)=>{var g=new Date().getFullYear(),b=new Date(g,0,1),C=new Date(g,6,1),L=b.getTimezoneOffset(),B=C.getTimezoneOffset(),te=Math.max(L,B);Ye[s>>2]=te*60,Ve[a>>2]=+(L!=B);var oe=_e=>{var Re=_e>=0?"-":"+",at=Math.abs(_e),Ot=String(Math.floor(at/60)).padStart(2,"0"),Ct=String(at%60).padStart(2,"0");return`UTC${Re}${Ot}${Ct}`},ge=oe(L),Me=oe(B);X(ge),X(Me),X(bt(ge)<=16,`timezone name truncated to fit in TZNAME_MAX (${ge})`),X(bt(Me)<=16,`timezone name truncated to fit in TZNAME_MAX (${Me})`),B<L?(Or(ge,c,17),Or(Me,f,17)):(Or(ge,f,17),Or(Me,c,17))},Vd=()=>performance.now(),Gd=()=>Date.now(),v_=1,y_=s=>s>=0&&s<=3;function x_(s,a,c){if(a=du(a),!y_(s))return 28;var f;if(s===0)f=Gd();else if(v_)f=Vd();else return 52;var g=Math.round(f*1e3*1e3);return Wt[c>>3]=BigInt(g),0}var Fo=[],b_=(s,a)=>{X(Array.isArray(Fo)),X(a%16==0),Fo.length=0;for(var c;c=ut[s++];){var f=String.fromCharCode(c),g=["d","f","i","p"];g.push("j"),X(g.includes(f),`Invalid character ${c}("${f}") in readEmAsmArgs! Use only [${g}], and do not specify "v" for void return argument.`);var b=c!=105;b&=c!=112,a+=b&&a%8?4:0,Fo.push(c==112?Ye[a>>2]:c==106?Wt[a>>3]:c==105?Ve[a>>2]:J[a>>3]),a+=b?8:4}return Fo},S_=(s,a,c)=>{var f=b_(a,c);return X(Yd.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Yd[s](...f)},w_=(s,a,c)=>S_(s,a,c),Hd=()=>2147483648,M_=()=>Hd(),E_=(s,a)=>(X(a,"alignment argument is required"),Math.ceil(s/a)*a),T_=s=>{var a=_t.buffer,c=(s-a.byteLength+65535)/65536|0;try{return _t.grow(c),w(),1}catch(f){R(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${s} bytes, but got error: ${f}`)}},A_=s=>{var a=ut.length;s>>>=0,X(s>a);var c=Hd();if(s>c)return R(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${c} bytes!`),!1;for(var f=1;f<=4;f*=2){var g=a*(1+.2/f);g=Math.min(g,s+100663296);var b=Math.min(c,E_(Math.max(s,g),65536)),C=T_(b);if(C)return!0}return R(`Failed to grow the heap from ${a} bytes to ${b} bytes, not enough memory!`),!1},fu={},C_=()=>d||"./this.program",ba=()=>{if(!ba.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:C_()};for(var c in fu)fu[c]===void 0?delete a[c]:a[c]=fu[c];var f=[];for(var c in a)f.push(`${c}=${a[c]}`);ba.strings=f}return ba.strings},R_=(s,a)=>{var c=0,f=0;for(var g of ba()){var b=a+c;Ye[s+f>>2]=b,c+=Or(g,b,1/0)+1,f+=4}return 0},P_=(s,a)=>{var c=ba();Ye[s>>2]=c.length;var f=0;for(var g of c)f+=bt(g)+1;return Ye[a>>2]=f,0},Wd=0,Xd=()=>Ir||Wd>0,I_=s=>{j=s,Xd()||(t.onExit?.(s),q=!0),m(s,new Se(s))},L_=(s,a)=>{if(j=s,$v(),Xd()&&!a){var c=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${Wd}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;St?.(c),R(c)}I_(s)},D_=L_;function F_(s){try{var a=Ut.getStreamFromFD(s);return M.close(a),0}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var N_=(s,a,c,f)=>{for(var g=0,b=0;b<c;b++){var C=Ye[a>>2],L=Ye[a+4>>2];a+=8;var B=M.read(s,ct,C,L,f);if(B<0)return-1;if(g+=B,B<L)break;typeof f<"u"&&(f+=B)}return g};function U_(s,a,c,f){try{var g=Ut.getStreamFromFD(s),b=N_(g,a,c);return Ye[f>>2]=b,0}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return C.errno}}function O_(s,a,c,f){a=du(a);try{if(isNaN(a))return 61;var g=Ut.getStreamFromFD(s);return M.llseek(g,a,c),Wt[f>>3]=BigInt(g.position),g.getdents&&a===0&&c===0&&(g.getdents=null),0}catch(b){if(typeof M>"u"||b.name!=="ErrnoError")throw b;return b.errno}}var B_=(s,a,c,f)=>{for(var g=0,b=0;b<c;b++){var C=Ye[a>>2],L=Ye[a+4>>2];a+=8;var B=M.write(s,ct,C,L,f);if(B<0)return-1;if(g+=B,B<L)break;typeof f<"u"&&(f+=B)}return g};function k_(s,a,c,f){try{var g=Ut.getStreamFromFD(s),b=B_(g,a,c);return Ye[f>>2]=b,0}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return C.errno}}var z_=s=>s,V_=s=>{var a=t["_"+s];return X(a,"Cannot call unknown function "+s+", make sure it is exported"),a},G_=(s,a)=>{X(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ct.set(s,a)},No=s=>ef(s),H_=s=>{var a=bt(s)+1,c=No(a);return Or(s,c,a),c},$d=(s,a,c,f,g)=>{var b={string:Re=>{var at=0;return Re!=null&&Re!==0&&(at=H_(Re)),at},array:Re=>{var at=No(Re.length);return G_(Re,at),at}};function C(Re){return a==="string"?On(Re):a==="boolean"?!!Re:Re}var L=V_(s),B=[],te=0;if(X(a!=="array",'Return type should not be "array".'),f)for(var oe=0;oe<f.length;oe++){var ge=b[c[oe]];ge?(te===0&&(te=Ae()),B[oe]=ge(f[oe])):B[oe]=f[oe]}var Me=L(...B);function _e(Re){return te!==0&&Te(te),C(Re)}return Me=_e(Me),Me},W_=(s,a,c,f)=>(...g)=>$d(s,a,c,g,f),X_=(...s)=>M.createPath(...s),$_=(...s)=>M.unlink(...s),q_=(...s)=>M.createLazyFile(...s),Y_=(...s)=>M.createDevice(...s),j_=s=>Uo(s),Z_=s=>_u(s),J_=s=>{var a=Ae(),c=No(4),f=No(4);nf(s,c,f);var g=Ye[c>>2],b=Ye[f>>2],C=On(g);Mi(g);var L;return b&&(L=On(b),Mi(b)),Te(a),[C,L]},qd=s=>J_(s);M.createPreloadedFile=Pn,M.staticInit(),eu(),lu(),X(pn.length===10),t.noExitRuntime&&(Ir=t.noExitRuntime),t.preloadPlugins&&(cn=t.preloadPlugins),t.print&&(k=t.print),t.printErr&&(R=t.printErr),t.wasmBinary&&(Y=t.wasmBinary),e0(),t.arguments&&(h=t.arguments),t.thisProgram&&(d=t.thisProgram),X(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),X(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),X(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),X(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),X(typeof t.read>"u","Module.read option was removed"),X(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),X(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),X(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),X(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),X(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),X(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),X(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),X(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=Be,t.removeRunDependency=it,t.ccall=$d,t.cwrap=W_,t.FS_createPreloadedFile=Pn,t.FS_unlink=$_,t.FS_createPath=X_,t.FS_createDevice=Y_,t.FS=M,t.FS_createDataFile=fn,t.FS_createLazyFile=q_,t.MEMFS=st;var K_=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];K_.forEach(we);var Q_=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Q_.forEach(gt),t.incrementExceptionRefcount=j_,t.decrementExceptionRefcount=Z_,t.getExceptionMessage=qd;function e0(){se("fetchSettings")}var Yd={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(a){},enumerable:!0,configurable:!0})})}},jd=Ee("___getTypeName"),pu=Ee("_malloc"),t0=Ee("___cxa_free_exception"),mu=Ee("_fflush"),Mi=Ee("_free"),gu=Ee("_emscripten_stack_get_end"),n0=Ee("_emscripten_stack_get_base"),Zd=Ee("_strerror"),De=Ee("_setThrew"),Jd=Ee("__emscripten_tempret_set"),Kd=Ee("_emscripten_stack_init"),i0=Ee("_emscripten_stack_get_free"),Qd=Ee("__emscripten_stack_restore"),ef=Ee("__emscripten_stack_alloc"),tf=Ee("_emscripten_stack_get_current"),_u=Ee("___cxa_decrement_exception_refcount"),Uo=Ee("___cxa_increment_exception_refcount"),nf=Ee("___get_exception_message"),rf=Ee("___cxa_can_catch"),sf=Ee("___cxa_get_exception_ptr");function r0(s){jd=Ne("__getTypeName",1),pu=Ne("malloc",1),t0=Ne("__cxa_free_exception",1),mu=Ne("fflush",1),Mi=Ne("free",1),gu=s.emscripten_stack_get_end,n0=s.emscripten_stack_get_base,Zd=Ne("strerror",1),De=Ne("setThrew",2),Jd=Ne("_emscripten_tempret_set",1),Kd=s.emscripten_stack_init,i0=s.emscripten_stack_get_free,Qd=s._emscripten_stack_restore,ef=s._emscripten_stack_alloc,tf=s.emscripten_stack_get_current,_u=Ne("__cxa_decrement_exception_refcount",1),Uo=Ne("__cxa_increment_exception_refcount",1),nf=Ne("__get_exception_message",3),rf=Ne("__cxa_can_catch",3),sf=Ne("__cxa_get_exception_ptr",1)}var af={__assert_fail:ir,__cxa_begin_catch:Wi,__cxa_current_primary_exception:rr,__cxa_end_catch:rs,__cxa_find_matching_catch_2:ha,__cxa_find_matching_catch_3:Dr,__cxa_find_matching_catch_4:I,__cxa_rethrow:K,__cxa_rethrow_primary_exception:ue,__cxa_throw:ae,__cxa_uncaught_exceptions:re,__resumeException:He,__syscall_dup3:fi,__syscall_fcntl64:mo,__syscall_fstat64:go,__syscall_ioctl:_o,__syscall_lstat64:vo,__syscall_newfstatat:Yc,__syscall_openat:yo,__syscall_stat64:jc,_abort_js:ss,_embind_register_bigint:xo,_embind_register_bool:pa,_embind_register_class:uu,_embind_register_class_class_function:he,_embind_register_class_constructor:Ue,_embind_register_class_function:ot,_embind_register_class_property:It,_embind_register_constant:gn,_embind_register_emval:Io,_embind_register_enum:Ag,_embind_register_enum_value:Cg,_embind_register_float:Pg,_embind_register_function:Ig,_embind_register_integer:Lg,_embind_register_memory_view:Dg,_embind_register_optional:Ng,_embind_register_std_string:Ug,_embind_register_std_wstring:Hg,_embind_register_user_type:Wg,_embind_register_void:Xg,_emscripten_throw_longjmp:$g,_emval_as:qg,_emval_call:Yg,_emval_call_method:Zg,_emval_decref:ri,_emval_get_global:Jg,_emval_get_method_caller:e_,_emval_get_property:t_,_emval_incref:n_,_emval_is_number:i_,_emval_is_string:r_,_emval_new_array:s_,_emval_new_cstring:a_,_emval_run_destructors:o_,_emval_take_value:l_,_emval_throw:c_,_localtime_js:m_,_mktime_js:g_,_tzset_js:__,clock_time_get:x_,emscripten_asm_const_int:w_,emscripten_date_now:Gd,emscripten_get_heap_max:M_,emscripten_get_now:Vd,emscripten_resize_heap:A_,environ_get:R_,environ_sizes_get:P_,exit:D_,fd_close:F_,fd_read:U_,fd_seek:O_,fd_write:k_,invoke_ddd:Iv,invoke_dddi:Y0,invoke_dddidi:j0,invoke_ddidi:q0,invoke_di:Z0,invoke_dii:B0,invoke_diii:v0,invoke_diiii:$0,invoke_diiiidd:W0,invoke_diiiidi:b0,invoke_diiiii:f0,invoke_diiiiii:A0,invoke_diiiiiii:J0,invoke_diiiiiiiii:E0,invoke_diiiiiiiiiiii:T0,invoke_fiii:Gv,invoke_i:p0,invoke_id:Tv,invoke_ii:o0,invoke_iid:ov,invoke_iidddd:Uv,invoke_iidiii:N0,invoke_iidiiid:D0,invoke_iidiiiiidi:U0,invoke_iif:Nv,invoke_iii:s0,invoke_iiid:O0,invoke_iiididdddddd:F0,invoke_iiidiiiiiiii:L0,invoke_iiii:u0,invoke_iiiidddiiiii:Q0,invoke_iiiii:_0,invoke_iiiiid:_v,invoke_iiiiii:dv,invoke_iiiiiii:cv,invoke_iiiiiiii:av,invoke_iiiiiiiidd:vv,invoke_iiiiiiiii:H0,invoke_iiiiiiiiii:uv,invoke_iiiiiiiiiidddiiiiiiiii:I0,invoke_iiiiiiiiiii:Vv,invoke_iiiiiiiiiiii:Hv,invoke_iiiiiiiiiiiii:Ev,invoke_iiij:hv,invoke_iiji:gv,invoke_j:kv,invoke_ji:Mv,invoke_jiiii:fv,invoke_jij:wv,invoke_v:c0,invoke_vi:l0,invoke_vid:lv,invoke_viddd:pv,invoke_vidddd:mv,invoke_vidi:X0,invoke_vidiii:R0,invoke_vii:d0,invoke_viid:V0,invoke_viiddi:Sv,invoke_viiddidi:bv,invoke_viiddii:K0,invoke_viidi:z0,invoke_viidii:x0,invoke_viidiii:rv,invoke_viidiiid:nv,invoke_viidiiiii:P0,invoke_viidiiiiidi:sv,invoke_viidiiiiiiii:C0,invoke_viii:a0,invoke_viiid:w0,invoke_viiidd:xv,invoke_viiidi:k0,invoke_viiididdddddd:iv,invoke_viiidiiiiiiii:tv,invoke_viiii:g0,invoke_viiiiddd:yv,invoke_viiiidi:Lv,invoke_viiiifi:Dv,invoke_viiiii:h0,invoke_viiiiid:S0,invoke_viiiiii:m0,invoke_viiiiiii:y0,invoke_viiiiiiii:G0,invoke_viiiiiiiiii:Rv,invoke_viiiiiiiiiidddiiiiiiiii:ev,invoke_viiiiiiiiiiid:M0,invoke_viiiiiiiiiiiii:Cv,invoke_viiiiiiiiiiiiiii:Wv,invoke_viiiiiiiiiiiiiiiiii:Pv,invoke_viiiij:Ov,invoke_viij:Bv,invoke_viijii:zv,invoke_vij:Fv,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:Av,llvm_eh_typeid_for:z_},Br=await Xe();function s0(s,a,c){var f=Ae();try{return Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function a0(s,a,c,f){var g=Ae();try{Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function o0(s,a){var c=Ae();try{return Le(s)(a)}catch(f){if(Te(c),!(f instanceof $))throw f;De(1,0)}}function l0(s,a){var c=Ae();try{Le(s)(a)}catch(f){if(Te(c),!(f instanceof $))throw f;De(1,0)}}function c0(s){var a=Ae();try{Le(s)()}catch(c){if(Te(a),!(c instanceof $))throw c;De(1,0)}}function u0(s,a,c,f){var g=Ae();try{return Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function h0(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function d0(s,a,c){var f=Ae();try{Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function f0(s,a,c,f,g,b){var C=Ae();try{return Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function p0(s){var a=Ae();try{return Le(s)()}catch(c){if(Te(a),!(c instanceof $))throw c;De(1,0)}}function m0(s,a,c,f,g,b,C){var L=Ae();try{Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function g0(s,a,c,f,g){var b=Ae();try{Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;De(1,0)}}function _0(s,a,c,f,g){var b=Ae();try{return Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;De(1,0)}}function v0(s,a,c,f){var g=Ae();try{return Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function y0(s,a,c,f,g,b,C,L){var B=Ae();try{Le(s)(a,c,f,g,b,C,L)}catch(te){if(Te(B),!(te instanceof $))throw te;De(1,0)}}function x0(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function b0(s,a,c,f,g,b,C){var L=Ae();try{return Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function S0(s,a,c,f,g,b,C){var L=Ae();try{Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function w0(s,a,c,f,g){var b=Ae();try{Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;De(1,0)}}function M0(s,a,c,f,g,b,C,L,B,te,oe,ge,Me){var _e=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me)}catch(Re){if(Te(_e),!(Re instanceof $))throw Re;De(1,0)}}function E0(s,a,c,f,g,b,C,L,B,te){var oe=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te)}catch(ge){if(Te(oe),!(ge instanceof $))throw ge;De(1,0)}}function T0(s,a,c,f,g,b,C,L,B,te,oe,ge,Me){var _e=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me)}catch(Re){if(Te(_e),!(Re instanceof $))throw Re;De(1,0)}}function A0(s,a,c,f,g,b,C){var L=Ae();try{return Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function C0(s,a,c,f,g,b,C,L,B,te,oe,ge){var Me=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge)}catch(_e){if(Te(Me),!(_e instanceof $))throw _e;De(1,0)}}function R0(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function P0(s,a,c,f,g,b,C,L,B){var te=Ae();try{Le(s)(a,c,f,g,b,C,L,B)}catch(oe){if(Te(te),!(oe instanceof $))throw oe;De(1,0)}}function I0(s,a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn,Gt,In,_n){var kn=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn,Gt,In,_n)}catch(en){if(Te(kn),!(en instanceof $))throw en;De(1,0)}}function L0(s,a,c,f,g,b,C,L,B,te,oe,ge){var Me=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe,ge)}catch(_e){if(Te(Me),!(_e instanceof $))throw _e;De(1,0)}}function D0(s,a,c,f,g,b,C){var L=Ae();try{return Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function F0(s,a,c,f,g,b,C,L,B,te,oe,ge){var Me=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe,ge)}catch(_e){if(Te(Me),!(_e instanceof $))throw _e;De(1,0)}}function N0(s,a,c,f,g,b){var C=Ae();try{return Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function U0(s,a,c,f,g,b,C,L,B,te){var oe=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te)}catch(ge){if(Te(oe),!(ge instanceof $))throw ge;De(1,0)}}function O0(s,a,c,f){var g=Ae();try{return Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function B0(s,a,c){var f=Ae();try{return Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function k0(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function z0(s,a,c,f,g){var b=Ae();try{Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;De(1,0)}}function V0(s,a,c,f){var g=Ae();try{Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function G0(s,a,c,f,g,b,C,L,B){var te=Ae();try{Le(s)(a,c,f,g,b,C,L,B)}catch(oe){if(Te(te),!(oe instanceof $))throw oe;De(1,0)}}function H0(s,a,c,f,g,b,C,L,B){var te=Ae();try{return Le(s)(a,c,f,g,b,C,L,B)}catch(oe){if(Te(te),!(oe instanceof $))throw oe;De(1,0)}}function W0(s,a,c,f,g,b,C){var L=Ae();try{return Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function X0(s,a,c,f){var g=Ae();try{Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function $0(s,a,c,f,g){var b=Ae();try{return Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;De(1,0)}}function q0(s,a,c,f,g){var b=Ae();try{return Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;De(1,0)}}function Y0(s,a,c,f){var g=Ae();try{return Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function j0(s,a,c,f,g,b){var C=Ae();try{return Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function Z0(s,a){var c=Ae();try{return Le(s)(a)}catch(f){if(Te(c),!(f instanceof $))throw f;De(1,0)}}function J0(s,a,c,f,g,b,C,L){var B=Ae();try{return Le(s)(a,c,f,g,b,C,L)}catch(te){if(Te(B),!(te instanceof $))throw te;De(1,0)}}function K0(s,a,c,f,g,b,C){var L=Ae();try{Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function Q0(s,a,c,f,g,b,C,L,B,te,oe,ge){var Me=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe,ge)}catch(_e){if(Te(Me),!(_e instanceof $))throw _e;De(1,0)}}function ev(s,a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn,Gt,In,_n,kn){var en=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn,Gt,In,_n,kn)}catch(cr){if(Te(en),!(cr instanceof $))throw cr;De(1,0)}}function tv(s,a,c,f,g,b,C,L,B,te,oe,ge,Me){var _e=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me)}catch(Re){if(Te(_e),!(Re instanceof $))throw Re;De(1,0)}}function nv(s,a,c,f,g,b,C,L){var B=Ae();try{Le(s)(a,c,f,g,b,C,L)}catch(te){if(Te(B),!(te instanceof $))throw te;De(1,0)}}function iv(s,a,c,f,g,b,C,L,B,te,oe,ge,Me){var _e=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me)}catch(Re){if(Te(_e),!(Re instanceof $))throw Re;De(1,0)}}function rv(s,a,c,f,g,b,C){var L=Ae();try{Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function sv(s,a,c,f,g,b,C,L,B,te,oe){var ge=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe)}catch(Me){if(Te(ge),!(Me instanceof $))throw Me;De(1,0)}}function av(s,a,c,f,g,b,C,L){var B=Ae();try{return Le(s)(a,c,f,g,b,C,L)}catch(te){if(Te(B),!(te instanceof $))throw te;De(1,0)}}function ov(s,a,c){var f=Ae();try{return Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function lv(s,a,c){var f=Ae();try{Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function cv(s,a,c,f,g,b,C){var L=Ae();try{return Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function uv(s,a,c,f,g,b,C,L,B,te){var oe=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te)}catch(ge){if(Te(oe),!(ge instanceof $))throw ge;De(1,0)}}function hv(s,a,c,f){var g=Ae();try{return Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function dv(s,a,c,f,g,b){var C=Ae();try{return Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function fv(s,a,c,f,g){var b=Ae();try{return Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;return De(1,0),0n}}function pv(s,a,c,f,g){var b=Ae();try{Le(s)(a,c,f,g)}catch(C){if(Te(b),!(C instanceof $))throw C;De(1,0)}}function mv(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function gv(s,a,c,f){var g=Ae();try{return Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function _v(s,a,c,f,g,b){var C=Ae();try{return Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function vv(s,a,c,f,g,b,C,L,B,te){var oe=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te)}catch(ge){if(Te(oe),!(ge instanceof $))throw ge;De(1,0)}}function yv(s,a,c,f,g,b,C,L){var B=Ae();try{Le(s)(a,c,f,g,b,C,L)}catch(te){if(Te(B),!(te instanceof $))throw te;De(1,0)}}function xv(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function bv(s,a,c,f,g,b,C,L){var B=Ae();try{Le(s)(a,c,f,g,b,C,L)}catch(te){if(Te(B),!(te instanceof $))throw te;De(1,0)}}function Sv(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function wv(s,a,c){var f=Ae();try{return Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;return De(1,0),0n}}function Mv(s,a){var c=Ae();try{return Le(s)(a)}catch(f){if(Te(c),!(f instanceof $))throw f;return De(1,0),0n}}function Ev(s,a,c,f,g,b,C,L,B,te,oe,ge,Me){var _e=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me)}catch(Re){if(Te(_e),!(Re instanceof $))throw Re;De(1,0)}}function Tv(s,a){var c=Ae();try{return Le(s)(a)}catch(f){if(Te(c),!(f instanceof $))throw f;De(1,0)}}function Av(s,a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn,Gt,In,_n,kn,en,cr,Oo,Yv,jv,Zv,Jv,Kv,Qv,ey,ty,ny,iy,ry,sy,ay,oy,ly,cy,uy,hy,dy,fy,py,my,gy,_y,vy,yy,xy,by,Sy,wy,My,Ey,Ty,Ay,Cy,Ry,Py,Iy,Ly,Dy,Fy,Ny,Uy,Oy,By,ky,zy,Vy,Gy,Hy,Wy,Xy,$y,qy,Yy,jy,Zy,Jy,Ky,Qy){var ex=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn,Gt,In,_n,kn,en,cr,Oo,Yv,jv,Zv,Jv,Kv,Qv,ey,ty,ny,iy,ry,sy,ay,oy,ly,cy,uy,hy,dy,fy,py,my,gy,_y,vy,yy,xy,by,Sy,wy,My,Ey,Ty,Ay,Cy,Ry,Py,Iy,Ly,Dy,Fy,Ny,Uy,Oy,By,ky,zy,Vy,Gy,Hy,Wy,Xy,$y,qy,Yy,jy,Zy,Jy,Ky,Qy)}catch(lf){if(Te(ex),!(lf instanceof $))throw lf;De(1,0)}}function Cv(s,a,c,f,g,b,C,L,B,te,oe,ge,Me,_e){var Re=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me,_e)}catch(at){if(Te(Re),!(at instanceof $))throw at;De(1,0)}}function Rv(s,a,c,f,g,b,C,L,B,te,oe){var ge=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe)}catch(Me){if(Te(ge),!(Me instanceof $))throw Me;De(1,0)}}function Pv(s,a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn){var Gt=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at,Ot,Ct,nn)}catch(In){if(Te(Gt),!(In instanceof $))throw In;De(1,0)}}function Iv(s,a,c){var f=Ae();try{return Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function Lv(s,a,c,f,g,b,C){var L=Ae();try{Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function Dv(s,a,c,f,g,b,C){var L=Ae();try{Le(s)(a,c,f,g,b,C)}catch(B){if(Te(L),!(B instanceof $))throw B;De(1,0)}}function Fv(s,a,c){var f=Ae();try{Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function Nv(s,a,c){var f=Ae();try{return Le(s)(a,c)}catch(g){if(Te(f),!(g instanceof $))throw g;De(1,0)}}function Uv(s,a,c,f,g,b){var C=Ae();try{return Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function Ov(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function Bv(s,a,c,f){var g=Ae();try{Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function kv(s){var a=Ae();try{return Le(s)()}catch(c){if(Te(a),!(c instanceof $))throw c;return De(1,0),0n}}function zv(s,a,c,f,g,b){var C=Ae();try{Le(s)(a,c,f,g,b)}catch(L){if(Te(C),!(L instanceof $))throw L;De(1,0)}}function Vv(s,a,c,f,g,b,C,L,B,te,oe){var ge=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe)}catch(Me){if(Te(ge),!(Me instanceof $))throw Me;De(1,0)}}function Gv(s,a,c,f){var g=Ae();try{return Le(s)(a,c,f)}catch(b){if(Te(g),!(b instanceof $))throw b;De(1,0)}}function Hv(s,a,c,f,g,b,C,L,B,te,oe,ge){var Me=Ae();try{return Le(s)(a,c,f,g,b,C,L,B,te,oe,ge)}catch(_e){if(Te(Me),!(_e instanceof $))throw _e;De(1,0)}}function Wv(s,a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at){var Ot=Ae();try{Le(s)(a,c,f,g,b,C,L,B,te,oe,ge,Me,_e,Re,at)}catch(Ct){if(Te(Ot),!(Ct instanceof $))throw Ct;De(1,0)}}var of;function Xv(){Kd(),be()}function vu(){if(Fe>0){Oe=vu;return}if(Xv(),ne(),Fe>0){Oe=vu;return}function s(){X(!of),of=!0,t.calledRun=!0,!q&&(le(),Qt?.(t),t.onRuntimeInitialized?.(),mt("onRuntimeInitialized"),X(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),pe())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),de()}function $v(){var s=k,a=R,c=!1;k=R=f=>{c=!0};try{mu(0),["stdout","stderr"].forEach(f=>{var g=M.analyzePath("/dev/"+f);if(g){var b=g.object,C=b.rdev,L=Ft.ttys[C];L?.output?.length&&(c=!0)}})}catch{}k=s,R=a,c&&Tn("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function qv(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();mt("preInit")}qv(),vu(),z?e=t:e=new Promise((s,a)=>{Qt=s,St=a});for(let s of Object.keys(t))s in n||Object.defineProperty(n,s,{configurable:!0,get(){Ie(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e}),Jp=nT;function iT(n,e){let t=n.mesh_vertadr[e],i=n.mesh_vertnum[e],r=n.mesh_faceadr[e],o=n.mesh_facenum[e],l=n.mesh_vert.slice(t*3,(t+i)*3),u=n.mesh_face.slice(r*3,(r+o)*3),h=new Wn;return h.setAttribute("position",new Gn(new Float32Array(l),3)),h.setIndex(new Gn(new Uint32Array(u),1)),h.computeVertexNormals(),h}var Kp=new rn().makeRotationX(Math.PI/2);function rT(n,e,t){switch(n){case t.PLANE:{let i=e[0]>0?e[0]*2:40,r=e[1]>0?e[1]*2:40;return new Xr(i,r)}case t.SPHERE:return new Vs(e[0],24,16);case t.CAPSULE:{let i=new za(e[0],e[1]*2,8,16);return i.applyMatrix4(Kp),i}case t.CYLINDER:{let i=new Va(e[0],e[0],e[1]*2,32);return i.applyMatrix4(Kp),i}case t.BOX:return new yr(e[0]*2,e[1]*2,e[2]*2);case t.ELLIPSOID:{let i=new Vs(1,32,24);return i.scale(e[0],e[1],e[2]),i}default:return null}}function nm(n,e){let t={PLANE:n.mjtGeom.mjGEOM_PLANE.value,SPHERE:n.mjtGeom.mjGEOM_SPHERE.value,CAPSULE:n.mjtGeom.mjGEOM_CAPSULE.value,ELLIPSOID:n.mjtGeom.mjGEOM_ELLIPSOID.value,CYLINDER:n.mjtGeom.mjGEOM_CYLINDER.value,BOX:n.mjtGeom.mjGEOM_BOX.value,MESH:n.mjtGeom.mjGEOM_MESH.value},i=3,r=new Ri,o=new Array(e.ngeom).fill(null);for(let l=0;l<e.ngeom;l++){if(e.geom_group[l]===i)continue;let u=e.geom_type[l],h=e.geom_size.slice(l*3,l*3+3),d=e.geom_matid[l],m=d>=0?e.mat_rgba.slice(d*4,d*4+4):e.geom_rgba.slice(l*4,l*4+4),_;if(u===t.MESH){let E=e.geom_dataid[l];_=iT(e,E)}else _=rT(u,h,t);if(!_)continue;let p=new Ga({color:new At(m[0],m[1],m[2]),roughness:.7,metalness:.1,transparent:m[3]<1,opacity:m[3],side:u===t.PLANE?gi:zi}),y=new Jn(_,p);y.matrixAutoUpdate=!0,r.add(y),o[l]=y}return{root:r,geomMeshes:o}}var Qp=new rn,em=new ie,tm=new Hn,sT=new ie;function im(n,e){for(let t=0;t<e.length;t++){let i=e[t];if(!i)continue;let r=t*3,o=t*9,l=n.geom_xmat,u=n.geom_xpos;Qp.set(l[o+0],l[o+1],l[o+2],u[r+0],l[o+3],l[o+4],l[o+5],u[r+1],l[o+6],l[o+7],l[o+8],u[r+2],0,0,0,1),Qp.decompose(em,tm,sT),i.position.copy(em),i.quaternion.copy(tm)}}function aT(n,e,t){let i=n.mjtObj.mjOBJ_ACTUATOR.value,r=n.mj_id2name(e,i,t);return r&&r.length>0?r:`actuator_${t}`}function oT(n,e){let t=n.actuator_ctrlrange[e*2],i=n.actuator_ctrlrange[e*2+1];return Number.isFinite(t)&&Number.isFinite(i)&&i>t?[t,i]:[-3.14159,3.14159]}function rm({mujoco:n,model:e,data:t,jointListEl:i,pauseBtn:r,resetBtn:o,statusLineEl:l,policySelectEl:u,randomizeBtn:h,onReset:d,onRandomizeBlock:m,onSelectPolicy:_,onTogglePause:p}){let y=[],E=[];for(let D=0;D<e.nu;D++){let A=aT(n,e,D),[O,T]=oT(e,D),N=document.createElement("div");N.className="joint-row";let H=document.createElement("label"),Z=document.createElement("span");Z.textContent=A;let W=document.createElement("span");W.className="joint-value",H.append(Z,W);let Y=document.createElement("input");Y.type="range",Y.min=String(O),Y.max=String(T),Y.step=String((T-O)/1e3),Y.value=String(t.ctrl[D]||0);let q=j=>Number(j).toFixed(2);W.textContent=q(Y.value),Y.addEventListener("input",()=>{let j=parseFloat(Y.value);t.ctrl[D]=j,W.textContent=q(j)}),N.append(H,Y),i.appendChild(N),y.push({input:Y,valueSpan:W,format:q})}function F(){for(let D=0;D<y.length;D++){let A=t.ctrl[D]||0;y[D].input.value=String(A),y[D].valueSpan.textContent=y[D].format(A)}}function S(D){for(let A of y)A.input.disabled=!D;i.classList.toggle("disabled",!D)}function v(D){E=D;for(let[A,O]of D.entries()){let T=document.createElement("option");T.value=String(A);let N=O.success_rate;T.textContent=N===void 0?O.name:`${O.name} \u2014 ${(N*100).toFixed(0)}% success`,u.appendChild(T)}u.disabled=D.length===0}u.addEventListener("change",()=>{let D=Number(u.value);_(Number.isNaN(D)||D<0?null:E[D])}),h.addEventListener("click",()=>{m(),F()});let U=!1;r.addEventListener("click",()=>{U=!U,r.textContent=U?"Resume":"Pause",p(U)}),o.addEventListener("click",()=>{d(),F()});function k(D){l.textContent=D}function R(){u.value="-1"}return{syncSlidersFromCtrl:F,setSlidersEnabled:S,setPolicies:v,clearPolicySelection:R,setStatus:k}}function lT(n,e,t){for(let r=0;r<t;r++){let o=r,l=Math.abs(n[r*t+r]);for(let h=r+1;h<t;h++){let d=Math.abs(n[h*t+r]);d>l&&(l=d,o=h)}if(l===0)throw new Error("IK normal equations are singular");if(o!==r){for(let d=r;d<t;d++){let m=n[r*t+d];n[r*t+d]=n[o*t+d],n[o*t+d]=m}let h=e[r];e[r]=e[o],e[o]=h}let u=n[r*t+r];for(let h=r+1;h<t;h++){let d=n[h*t+r]/u;if(d!==0){for(let m=r;m<t;m++)n[h*t+m]-=d*n[r*t+m];e[h]-=d*e[r]}}}let i=new Float64Array(t);for(let r=t-1;r>=0;r--){let o=e[r];for(let l=r+1;l<t;l++)o-=n[r*t+l]*i[l];i[r]=o/n[r*t+r]}return i}function sm(n,e,t,i,r,o,{damping:l=.1,maxIterations:u=20,tolerance:h=1e-4}={}){let d=r.length,m=e.nv,_=new Float64Array(d);for(let k=0;k<d;k++)_[k]=t.qpos[r[k]];let p=Float64Array.from(_),y=new n.DoubleBuffer(3*m),E=new n.DoubleBuffer(3*m),F=new Float64Array(3*d),S=new Float64Array(d*d),v=new Float64Array(d),U=new Float64Array(3);try{for(let k=0;k<u;k++){for(let O=0;O<d;O++)t.qpos[r[O]]=p[O];n.mj_forward(e,t);let R=0;for(let O=0;O<3;O++)U[O]=o[O]-t.site_xpos[i*3+O],R+=U[O]*U[O];if(Math.sqrt(R)<h)break;n.mj_jacSite(e,t,y,E,i);let D=y.GetView();for(let O=0;O<3;O++)for(let T=0;T<d;T++)F[O*d+T]=D[O*m+r[T]];for(let O=0;O<d;O++){let T=0;for(let N=0;N<3;N++)T+=F[N*d+O]*U[N];v[O]=T;for(let N=0;N<d;N++){let H=0;for(let Z=0;Z<3;Z++)H+=F[Z*d+O]*F[Z*d+N];S[O*d+N]=H+(O===N?l:0)}}let A=lT(S,v,d);for(let O=0;O<d;O++){let T=p[O]+A[O],N=e.jnt_range[r[O]*2],H=e.jnt_range[r[O]*2+1];N<H&&(T=Math.min(Math.max(T,N),H)),p[O]=T}}}finally{y.delete(),E.delete()}for(let k=0;k<d;k++)t.qpos[r[k]]=_[k];return n.mj_forward(e,t),p}var Qs=["shoulder_pan","shoulder_lift","elbow_flex","wrist_flex","wrist_roll"],Xh="gripper",cT="gripperframe",$h="so101/ee_pos",qh="block",lm="block",am=[[.1,-.3,0],[.5,.3,.4]],uT=1e-6,Fc=50,om=[0,0,0,0,0],hT=.1,dT=20;function ei(n,e,t,i){let r=n.mj_name2id(e,n.mjtObj[t].value,i);if(r<0)throw new Error(`${t} "${i}" is not in the model`);return r}function fT(n,e,t){let i=1-Math.min(Math.max(n,0),1);return e+i*(t-e)}function Nc(n,e,t,{actionScale:i}){if(!(i>0))throw new Error(`actionScale must be positive, got ${i}`);let r=Qs.map(S=>ei(n,e,"mjOBJ_JOINT",S)),o=Qs.map(S=>ei(n,e,"mjOBJ_ACTUATOR",S)),l=ei(n,e,"mjOBJ_ACTUATOR",Xh),u=ei(n,e,"mjOBJ_SITE",cT),h=ei(n,e,"mjOBJ_SENSOR",$h),d=e.sensor_adr[h],m=e.actuator_ctrlrange[l*2],_=e.actuator_ctrlrange[l*2+1],p=new Float64Array(3),y=!1;function E(){n.mj_resetData(e,t);for(let S=0;S<r.length;S++)t.qpos[r[S]]=om[S],t.ctrl[o[S]]=om[S];n.mj_forward(e,t);for(let S=0;S<3;S++)p[S]=t.sensordata[d+S];y=!1}function F(S){let[v,U,k,R]=S,A=Math.sqrt(v*v+U*U+k*k)<uT;if(A&&!y)for(let T=0;T<3;T++)p[T]=t.site_xpos[u*3+T];else A||(p[0]+=v*i,p[1]+=U*i,p[2]+=k*i);y=A;for(let T=0;T<3;T++)p[T]=Math.min(Math.max(p[T],am[0][T]),am[1][T]);t.ctrl[l]=fT(R,m,_);let O=sm(n,e,t,u,r,p,{damping:hT,maxIterations:dT});for(let T=0;T<o.length;T++){let N=o[T],H=e.actuator_ctrlrange[N*2],Z=e.actuator_ctrlrange[N*2+1];t.ctrl[N]=Math.min(Math.max(O[T],H),Z)}return O}return{reset:E,applyAction:F,armJointIds:r,armCtrlIds:o,eeSiteId:u,targetEePos:p}}var pT="block_pos",ea=[...Qs.map(n=>`qpos_${n}`),...Qs.map(n=>`qvel_${n}`),"gripper_pose","ee_x","ee_y","ee_z","block_x","block_y","block_z"],ta=ea.length;function cm(n,e){let t=ei(n,e,"mjOBJ_SENSOR",$h),i=ei(n,e,"mjOBJ_SENSOR",pT),r=ei(n,e,"mjOBJ_ACTUATOR",Xh);return{armJointIds:Qs.map(o=>ei(n,e,"mjOBJ_JOINT",o)),gripperCtrlId:r,gripperLo:e.actuator_ctrlrange[r*2],gripperHi:e.actuator_ctrlrange[r*2+1],eePosAdr:e.sensor_adr[t],blockPosAdr:e.sensor_adr[i]}}function Yh(n,e,t,i){let r=new Float32Array(ta),o=i.armJointIds.length;for(let u=0;u<o;u++)r[u]=t.qpos[i.armJointIds[u]],r[o+u]=t.qvel[i.armJointIds[u]];let l=t.ctrl[i.gripperCtrlId];r[2*o]=2*(l-i.gripperLo)/(i.gripperHi-i.gripperLo)-1;for(let u=0;u<3;u++)r[2*o+1+u]=t.sensordata[i.eePosAdr+u],r[2*o+4+u]=t.sensordata[i.blockPosAdr+u];return r}function um(n,e="policy"){if(!Array.isArray(n))throw new Error(`${e}: obs_order metadata is missing`);if(n.length!==ta||n.some((i,r)=>i!==ea[r]))throw new Error(`${e}: obs_order does not match the viewer's observation layout
  policy: ${n.join(", ")}
  viewer: ${ea.join(", ")}`)}var md=Object.defineProperty,mT=Object.getOwnPropertyDescriptor,gT=Object.getOwnPropertyNames,_T=Object.prototype.hasOwnProperty,vT=(n=>typeof kr<"u"?kr:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof kr<"u"?kr:e)[t]}):n)(function(n){if(typeof kr<"u")return kr.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),Ht=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}},Xc=(n,e)=>{for(var t in e)md(n,t,{get:e[t],enumerable:!0})},yT=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of gT(e))!_T.call(n,r)&&r!==t&&md(n,r,{get:()=>e[r],enumerable:!(i=mT(e,r))||i.enumerable});return n},ud=n=>yT(md({},"__esModule",{value:!0}),n),oo,Rr,Gc,hm,Rm,Pm=Ht(()=>{"use strict";oo=new Map,Rr=[],Gc=(n,e,t)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let i=oo.get(n);if(i===void 0)oo.set(n,{backend:e,priority:t});else{if(i.priority>t)return;if(i.priority===t&&i.backend!==e)throw new Error(`cannot register backend "${n}" using priority ${t}`)}if(t>=0){let r=Rr.indexOf(n);r!==-1&&Rr.splice(r,1);for(let o=0;o<Rr.length;o++)if(oo.get(Rr[o]).priority<=t){Rr.splice(o,0,n);return}Rr.push(n)}return}throw new TypeError("not a valid backend")},hm=async n=>{let e=oo.get(n);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let t=!!e.initPromise;try{return t||(e.initPromise=e.backend.init(n)),await e.initPromise,e.initialized=!0,e.backend}catch(i){return t||(e.error=`${i}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},Rm=async n=>{let e=n.executionProviders||[],t=e.map(h=>typeof h=="string"?h:h.name),i=t.length===0?Rr:t,r,o=[],l=new Set;for(let h of i){let d=await hm(h);typeof d=="string"?o.push({name:h,err:d}):(r||(r=d),r===d&&l.add(h))}if(!r)throw new Error(`no available backend found. ERR: ${o.map(h=>`[${h.name}] ${h.err}`).join(", ")}`);for(let{name:h,err:d}of o)t.includes(h)&&console.warn(`removing requested execution provider "${h}" from session options because it is not available: ${d}`);let u=e.filter(h=>l.has(typeof h=="string"?h:h.name));return[r,new Proxy(n,{get:(h,d)=>d==="executionProviders"?u:Reflect.get(h,d)})]}}),xT=Ht(()=>{"use strict";Pm()}),Im,bT=Ht(()=>{"use strict";Im="1.29.0"}),jh,wn,Lm=Ht(()=>{"use strict";bT(),jh="warning",wn={wasm:{},webgl:{},webgpu:{},versions:{common:Im},set logLevel(n){if(n!==void 0){if(typeof n!="string"||["verbose","info","warning","error","fatal"].indexOf(n)===-1)throw new Error(`Unsupported logging level: ${n}`);jh=n}},get logLevel(){return jh}},Object.defineProperty(wn,"logLevel",{enumerable:!0})}),sn,ST=Ht(()=>{"use strict";Lm(),sn=wn}),Dm,Fm,wT=Ht(()=>{"use strict";Dm=(n,e)=>{let t=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);t.width=n.dims[3],t.height=n.dims[2];let i=t.getContext("2d");if(i!=null){let r,o;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=n.dims[2],o=n.dims[3]):(r=n.dims[3],o=n.dims[2]);let l=e?.format!==void 0?e.format:"RGB",u=e?.norm,h,d;u===void 0||u.mean===void 0?h=[255,255,255,255]:typeof u.mean=="number"?h=[u.mean,u.mean,u.mean,u.mean]:(h=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(h[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let m=o*r,_=0,p=m,y=m*2,E=-1;l==="RGBA"?(_=0,p=m,y=m*2,E=m*3):l==="RGB"?(_=0,p=m,y=m*2):l==="RBG"&&(_=0,y=m,p=m*2);for(let F=0;F<o;F++)for(let S=0;S<r;S++){let v=(n.data[_++]-d[0])*h[0],U=(n.data[p++]-d[1])*h[1],k=(n.data[y++]-d[2])*h[2],R=E===-1?255:(n.data[E++]-d[3])*h[3];i.fillStyle="rgba("+v+","+U+","+k+","+R+")",i.fillRect(S,F,1,1)}if("toDataURL"in t)return t.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Fm=(n,e)=>{let t=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(t!=null){let r,o,l;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=n.dims[2],o=n.dims[1],l=n.dims[3]):(r=n.dims[3],o=n.dims[2],l=n.dims[1]);let u=e!==void 0&&e.format!==void 0?e.format:"RGB",h=e?.norm,d,m;h===void 0||h.mean===void 0?d=[255,255,255,255]:typeof h.mean=="number"?d=[h.mean,h.mean,h.mean,h.mean]:(d=[h.mean[0],h.mean[1],h.mean[2],255],h.mean[3]!==void 0&&(d[3]=h.mean[3])),h===void 0||h.bias===void 0?m=[0,0,0,0]:typeof h.bias=="number"?m=[h.bias,h.bias,h.bias,h.bias]:(m=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(m[3]=h.bias[3]));let _=o*r;if(e!==void 0&&(e.format!==void 0&&l===4&&e.format!=="RGBA"||l===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,y=0,E=1,F=2,S=3,v=0,U=_,k=_*2,R=-1;u==="RGBA"?(v=0,U=_,k=_*2,R=_*3):u==="RGB"?(v=0,U=_,k=_*2):u==="RBG"&&(v=0,k=_,U=_*2),i=t.createImageData(r,o);for(let D=0;D<o*r;y+=p,E+=p,F+=p,S+=p,D++)i.data[y]=(n.data[v++]-m[0])*d[0],i.data[E]=(n.data[U++]-m[1])*d[1],i.data[F]=(n.data[k++]-m[2])*d[2],i.data[S]=R===-1?255:(n.data[R++]-m[3])*d[3]}else throw new Error("Can not access image data");return i}}),Uc,Nm,Um,Om,Bm,km,MT=Ht(()=>{"use strict";gd(),Uc=(n,e)=>{if(n===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:t,width:i}=e,r=e.norm??{mean:255,bias:0},o,l;typeof r.mean=="number"?o=[r.mean,r.mean,r.mean,r.mean]:o=[r.mean[0],r.mean[1],r.mean[2],r.mean[3]??255],typeof r.bias=="number"?l=[r.bias,r.bias,r.bias,r.bias]:l=[r.bias[0],r.bias[1],r.bias[2],r.bias[3]??0];let u=e.format!==void 0?e.format:"RGBA",h=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",d=t*i,m=h==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),_=4,p=0,y=1,E=2,F=3,S=0,v=d,U=d*2,k=-1;u==="RGB"&&(_=3,p=0,y=1,E=2,F=-1),h==="RGBA"?k=d*3:h==="RBG"?(S=0,U=d,v=d*2):h==="BGR"&&(U=0,v=d,S=d*2);for(let R=0;R<d;R++,p+=_,E+=_,y+=_,F+=_)m[S++]=(n[p]+l[0])/o[0],m[v++]=(n[y]+l[1])/o[1],m[U++]=(n[E]+l[2])/o[2],k!==-1&&F!==-1&&(m[k++]=(n[F]+l[3])/o[3]);return h==="RGBA"?new di("float32",m,[1,4,t,i]):new di("float32",m,[1,3,t,i])},Nm=async(n,e)=>{let t=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,i=typeof ImageData<"u"&&n instanceof ImageData,r=typeof ImageBitmap<"u"&&n instanceof ImageBitmap,o=typeof n=="string",l,u=e??{},h=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(t){let m=h();m.width=n.width,m.height=n.height;let _=d(m);if(_!=null){let p=n.height,y=n.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(p=e.resizedHeight,y=e.resizedWidth),e!==void 0){if(u=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=p,u.width=y}else u.tensorFormat="RGBA",u.height=p,u.width=y;_.drawImage(n,0,0),l=_.getImageData(0,0,y,p).data}else throw new Error("Can not access image data")}else if(i){let m,_;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(m=e.resizedHeight,_=e.resizedWidth):(m=n.height,_=n.width),e!==void 0&&(u=e),u.format="RGBA",u.height=m,u.width=_,e!==void 0){let p=h();p.width=_,p.height=m;let y=d(p);if(y!=null)y.putImageData(n,0,0),l=y.getImageData(0,0,_,m).data;else throw new Error("Can not access image data")}else l=n.data}else if(r){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=h();m.width=n.width,m.height=n.height;let _=d(m);if(_!=null){let p=n.height,y=n.width;return _.drawImage(n,0,0,y,p),l=_.getImageData(0,0,y,p).data,u.height=p,u.width=y,Uc(l,u)}else throw new Error("Can not access image data")}else{if(o)return new Promise((m,_)=>{let p=h(),y=d(p);if(!n||!y)return _();let E=new Image;E.crossOrigin="Anonymous",E.src=n,E.onload=()=>{p.width=E.width,p.height=E.height,y.drawImage(E,0,0,p.width,p.height);let F=y.getImageData(0,0,p.width,p.height);u.height=p.height,u.width=p.width,m(Uc(F.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(l!==void 0)return Uc(l,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Um=(n,e)=>{let{width:t,height:i,download:r,dispose:o}=e,l=[1,i,t,4];return new di({location:"texture",type:"float32",texture:n,dims:l,download:r,dispose:o})},Om=(n,e)=>{let{dataType:t,dims:i,download:r,dispose:o}=e;return new di({location:"gpu-buffer",type:t??"float32",gpuBuffer:n,dims:i,download:r,dispose:o})},Bm=(n,e)=>{let{dataType:t,dims:i,download:r,dispose:o}=e;return new di({location:"ml-tensor",type:t??"float32",mlTensor:n,dims:i,download:r,dispose:o})},km=(n,e,t)=>new di({location:"cpu-pinned",type:n,data:e,dims:t??[e.length]})}),es,ho,Zh,zm,ET=Ht(()=>{"use strict";es=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ho=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Zh=!1,zm=()=>{if(!Zh){Zh=!0;let n=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,t=globalThis.Float16Array,i=typeof t<"u"&&t.from;n&&(es.set("int64",BigInt64Array),ho.set(BigInt64Array,"int64")),e&&(es.set("uint64",BigUint64Array),ho.set(BigUint64Array,"uint64")),i?(es.set("float16",t),ho.set(t,"float16")):es.set("float16",Uint16Array)}}}),Vm,Gm,TT=Ht(()=>{"use strict";gd(),Vm=n=>{let e=1;for(let t=0;t<n.length;t++){let i=n[t];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${t}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${t}] must be a non-negative integer, got: ${i}`);e*=i}return e},Gm=(n,e)=>{switch(n.location){case"cpu":return new di(n.type,n.data,e);case"cpu-pinned":return new di({location:"cpu-pinned",data:n.data,type:n.type,dims:e});case"texture":return new di({location:"texture",texture:n.texture,type:n.type,dims:e});case"gpu-buffer":return new di({location:"gpu-buffer",gpuBuffer:n.gpuBuffer,type:n.type,dims:e});case"ml-tensor":return new di({location:"ml-tensor",mlTensor:n.mlTensor,type:n.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${n.location} is not supported`)}}}),di,gd=Ht(()=>{"use strict";wT(),MT(),ET(),TT(),di=class{constructor(n,e,t){zm();let i,r;if(typeof n=="object"&&"location"in n)switch(this.dataLocation=n.location,i=n.type,r=n.dims,n.location){case"cpu-pinned":{let l=es.get(i);if(!l)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(n.data instanceof l))throw new TypeError(`buffer should be of type ${l.name}`);this.cpuData=n.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=n.texture,this.downloader=n.download,this.disposer=n.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=n.gpuBuffer,this.downloader=n.download,this.disposer=n.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=n.mlTensor,this.downloader=n.download,this.disposer=n.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let l,u;if(typeof n=="string")if(i=n,u=t,n==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");l=e}else{let h=es.get(n);if(h===void 0)throw new TypeError(`Unsupported tensor type: ${n}.`);if(Array.isArray(e)){if(n==="float16"&&h===Uint16Array||n==="uint4"||n==="int4")throw new TypeError(`Creating a ${n} tensor from number array is not supported. Please use ${h.name} as data.`);n==="uint64"||n==="int64"?l=h.from(e,BigInt):l=h.from(e)}else if(e instanceof h)l=e;else if(e instanceof Uint8ClampedArray)if(n==="uint8")l=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(n==="float16"&&e instanceof Uint16Array&&h!==Uint16Array)l=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${i} tensor's data must be type of ${h}`)}else if(u=e,Array.isArray(n)){if(n.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let h=typeof n[0];if(h==="string")i="string",l=n;else if(h==="boolean")i="bool",l=Uint8Array.from(n);else throw new TypeError(`Invalid element type of data array: ${h}.`)}else if(n instanceof Uint8ClampedArray)i="uint8",l=Uint8Array.from(n);else{let h=ho.get(n.constructor);if(h===void 0)throw new TypeError(`Unsupported type for tensor data: ${n.constructor}.`);i=h,l=n}if(u===void 0)u=[l.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");r=u,this.cpuData=l,this.dataLocation="cpu"}let o=Vm(r);if(this.cpuData&&o!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=r,this.size=o}static async fromImage(n,e){return Nm(n,e)}static fromTexture(n,e){return Um(n,e)}static fromGpuBuffer(n,e){return Om(n,e)}static fromMLTensor(n,e){return Bm(n,e)}static fromPinnedBuffer(n,e,t){return km(n,e,t)}toDataURL(n){return Dm(this,n)}toImageData(n){return Fm(this,n)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(n){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,n&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(n){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Gm(this,n)}}}),yi,Hm=Ht(()=>{"use strict";gd(),yi=di}),hd,Jh,sa,aa,oa,la,Wm=Ht(()=>{"use strict";Lm(),hd=(n,e)=>{(typeof wn.trace>"u"?!wn.wasm.trace:!wn.trace)||console.timeStamp(`${n}::ORT::${e}`)},Jh=(n,e)=>{let t=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let r=0;r<t.length;r++){if(i&&!t[r].includes("TRACE_FUNC")){let o=`FUNC_${n}::${t[r].trim().split(" ")[1]}`;e&&(o+=`::${e}`),hd("CPU",o);return}t[r].includes("TRACE_FUNC")&&(i=!0)}},sa=n=>{(typeof wn.trace>"u"?!wn.wasm.trace:!wn.trace)||Jh("BEGIN",n)},aa=n=>{(typeof wn.trace>"u"?!wn.wasm.trace:!wn.trace)||Jh("END",n)},oa=n=>{(typeof wn.trace>"u"?!wn.wasm.trace:!wn.trace)||console.time(`ORT::${n}`)},la=n=>{(typeof wn.trace>"u"?!wn.wasm.trace:!wn.trace)||console.timeEnd(`ORT::${n}`)}}),Xm,AT=Ht(()=>{"use strict";Pm(),Hm(),Wm(),Xm=class $m{constructor(e){this.handler=e}async run(e,t,i){sa(),oa("InferenceSession.run");let r={},o={};if(typeof e!="object"||e===null||e instanceof yi||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof t=="object"){if(t===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof yi)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(t.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let d of t){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);r[d]=null}if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,m=Object.getOwnPropertyNames(t);for(let _ of this.outputNames)if(m.indexOf(_)!==-1){let p=t[_];(p===null||p instanceof yi)&&(d=!0,l=!1,r[_]=p)}if(d){if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else o=t}}else if(typeof t<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof e[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(l)for(let d of this.outputNames)r[d]=null;let u=await this.handler.run(e,r,o),h={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let m=u[d];m instanceof yi?h[d]=m:h[d]=new yi(m.type,m.data,m.dims)}return la("InferenceSession.run"),aa(),h}async release(){return this.handler.dispose()}static async create(e,t,i,r){sa(),oa("InferenceSession.create");let o,l={};if(typeof e=="string"){if(o=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(o=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let m=e,_=0,p=e.byteLength;if(typeof t=="object"&&t!==null)l=t;else if(typeof t=="number"){if(_=t,!Number.isSafeInteger(_))throw new RangeError("'byteOffset' must be an integer.");if(_<0||_>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(p=e.byteLength-_,typeof i=="number"){if(p=i,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||_+p>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-_}].`);if(typeof r=="object"&&r!==null)l=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof t<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(m,_,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,h]=await Rm(l),d=await u.createInferenceSessionHandler(o,h);return la("InferenceSession.create"),aa(),new $m(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),$c,CT=Ht(()=>{"use strict";AT(),$c=Xm}),RT=Ht(()=>{"use strict"}),PT=Ht(()=>{"use strict"}),IT=Ht(()=>{"use strict"}),LT=Ht(()=>{"use strict"}),DT={};Xc(DT,{InferenceSession:()=>$c,TRACE:()=>hd,TRACE_EVENT_BEGIN:()=>oa,TRACE_EVENT_END:()=>la,TRACE_FUNC_BEGIN:()=>sa,TRACE_FUNC_END:()=>aa,Tensor:()=>yi,env:()=>sn,registerBackend:()=>Gc});var ts=Ht(()=>{"use strict";xT(),ST(),CT(),Hm(),RT(),PT(),Wm(),IT(),LT()}),_d=Ht(()=>{"use strict"}),qm={};Xc(qm,{default:()=>Ym});var Kh,Qh,Ym,FT=Ht(()=>{"use strict";og(),ca(),vd(),Kh="ort-wasm-proxy-worker",Qh=globalThis.self?.name===Kh,Qh&&(self.onmessage=n=>{let{type:e,in:t}=n.data;try{switch(e){case"init-wasm":yd(t.wasm).then(()=>{Md(t).then(()=>{postMessage({type:e})},i=>{postMessage({type:e,err:i})})},i=>{postMessage({type:e,err:i})});break;case"init-ep":{let{epName:i,env:r}=t;Ed(r,i).then(()=>{postMessage({type:e})},o=>{postMessage({type:e,err:o})});break}case"copy-from":{let{buffer:i}=t,r=Wc(i);postMessage({type:e,out:r});break}case"create":{let{model:i,options:r}=t;Td(i,r).then(o=>{postMessage({type:e,out:o})},o=>{postMessage({type:e,err:o})});break}case"release":Ad(t),postMessage({type:e});break;case"run":{let{sessionId:i,inputIndices:r,inputs:o,outputIndices:l,options:u}=t;Cd(i,r,o,l,new Array(l.length).fill(null),u).then(h=>{h.some(d=>d[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:h},Pd([...o,...h]))},h=>{postMessage({type:e,err:h})});break}case"end-profiling":Rd(t),postMessage({type:e});break;default:}}catch(i){postMessage({type:e,err:i})}}),Ym=Qh?null:n=>new Worker(n??hi,{type:"module",name:Kh})}),jm={};Xc(jm,{default:()=>Zm});async function dm(n={}){var e=n,t=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,r=i&&self.name?.startsWith("em-pthread");e.mountExternalData=(x,P)=>{x.startsWith("./")&&(x=x.substring(2)),(e.Rb||(e.Rb=new Map)).set(x,P)},e.unmountExternalData=()=>{delete e.Rb,delete e.kc,delete e.jc,delete e.lc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;var o,l,u=(x,P)=>{throw P},h=import.meta.url,d="";if(t||i){try{d=new URL(".",h).href}catch{}i&&(l=x=>{var P=new XMLHttpRequest;return P.open("GET",x,!1),P.responseType="arraybuffer",P.send(null),new Uint8Array(P.response)}),o=async x=>{if(D(x))return new Promise((G,V)=>{var ee=new XMLHttpRequest;ee.open("GET",x,!0),ee.responseType="arraybuffer",ee.onload=()=>{ee.status==200||ee.status==0&&ee.response?G(ee.response):V(ee.status)},ee.onerror=V,ee.send(null)});var P=await fetch(x,{credentials:"same-origin"});if(P.ok)return P.arrayBuffer();throw Error(P.status+" : "+P.url)}}var m,_,p,y,E,F,S=console.log.bind(console),v=console.error.bind(console),U=S,k=v,R=!1,D=x=>x.startsWith("file://");function A(){J.buffer!=N.buffer&&de()}if(r){let x=function(P){try{var G=P.data,V=G.Pb;if(V==="load"){let ee=[];self.onmessage=he=>ee.push(he),F=()=>{postMessage({Pb:"loaded"});for(let he of ee)x(he);self.onmessage=x};for(let he of G.Zb)e[he]&&!e[he].proxy||(e[he]=(...Ue)=>{postMessage({Pb:"callHandler",Yb:he,args:Ue})},he=="print"&&(U=e[he]),he=="printErr"&&(k=e[he]));J=G.dc,de(),_=G.ec,Je(),gs()}else if(V==="run"){(function(ee){var he=(A(),Y)[ee+52>>>2>>>0];ee=(A(),Y)[ee+56>>>2>>>0],xo(he,he-ee),ht(he)})(G.Ob),Si(G.Ob,0,0,1,0,0),Ve(),ti(G.Ob),T||(T=!0);try{z(G.bc,G.Tb)}catch(ee){if(ee!="unwind")throw ee}}else G.target!=="setimmediate"&&(V==="checkMailbox"?T&&Wi():V&&(k(`worker: received unknown command ${V}`),k(G)))}catch(ee){throw Fr(),ee}};var O=x,T=!1;self.onunhandledrejection=P=>{throw P.reason||P},self.onmessage=x}var N,H,Z,W,Y,q,j,X,ce,be=!1;function de(){var x=J.buffer;e.HEAP8=N=new Int8Array(x),Z=new Int16Array(x),e.HEAPU8=H=new Uint8Array(x),new Uint16Array(x),e.HEAP32=W=new Int32Array(x),e.HEAPU32=Y=new Uint32Array(x),q=new Float32Array(x),j=new Float64Array(x),X=new BigInt64Array(x),new BigUint64Array(x)}function $(){be=!0,r?F():wi.Ta()}function ye(x){throw k(x="Aborted("+x+")"),R=!0,x=new WebAssembly.RuntimeError(x+". Build with -sASSERTIONS for more info."),E?.(x),x}function et(){return{a:{T:Zc,f:le,w:Fe,e:it,k:Ie,h:Ne,L:tt,b:lt,G:yt,ta:ke,j:xe,M:rt,Ja:nt,pa:$t,ra:Bt,Ka:En,Ha:$n,Aa:Ir,Ga:xi,Z:is,qa:Te,na:Ae,Ia:Tn,oa:nr,Pa:An,Da:On,la:rr,ua:rs,ia:sr,U:ar,Ca:ti,Ma:Lr,xa:ha,ya:ue,za:ae,va:re,wa:He,ja:Ke,Ra:xt,Oa:kt,W:Ft,V:Xt,Na:bt,F:st,La:Ze,ma:fn,u:We,H:Nt,R:Jt,ka:ni,ba:Vt,Sa:M,Ea:Xi,Fa:mo,sa:St,I:go,Y:_o,Ba:vo,X:yo,$:ya,N:cu,aa:uu,O:pi,v:su,d:ls,m:Kc,n:Jc,r:va,ca:Ao,E:To,o:cs,P:ms,C:Co,J:ps,da:lu,ea:fs,z:tu,Q:ou,fa:au,y:ru,D:Le,c:os,q:Ur,i:Mo,_:Ro,l:Eo,p:eu,s:Qc,t:us,x:nu,S:ds,A:qi,K:iu,B:ii,ga:_a,ha:hs,g:jc,a:J,Qa:gt}}}async function Je(){function x(V,ee){return wi=V.exports,wi=(function(){var he=wi,Ue=Et=>()=>Et()>>>0,ot=Et=>It=>Et(It)>>>0;return(he=Object.assign({},he)).sb=Ue(he.sb),he.ub=ot(he.ub),he.Ib=ot(he.Ib),he.Jb=Ue(he.Jb),he.Nb=ot(he.Nb),he})(),ut.push(wi.vb),V=wi,e._OrtInit=V.Ua,e._OrtGetLastError=V.Va,e._OrtCreateSessionOptions=V.Wa,e._OrtAppendExecutionProvider=V.Xa,e._OrtAddFreeDimensionOverride=V.Ya,e._OrtAddSessionConfigEntry=V.Za,e._OrtReleaseSessionOptions=V._a,e._OrtCreateSession=V.$a,e._OrtReleaseSession=V.ab,e._OrtGetInputOutputCount=V.bb,e._OrtGetInputOutputMetadata=V.cb,e._OrtFree=V.db,e._OrtCreateTensor=V.eb,e._OrtGetTensorData=V.fb,e._OrtReleaseTensor=V.gb,e._OrtCreateRunOptions=V.hb,e._OrtAddRunConfigEntry=V.ib,e._OrtReleaseRunOptions=V.jb,e._OrtCreateBinding=V.kb,e._OrtBindInput=V.lb,e._OrtBindOutput=V.mb,e._OrtClearBoundOutputs=V.nb,e._OrtReleaseBinding=V.ob,e._OrtRunWithBinding=V.pb,e._OrtRun=V.qb,e._OrtEndProfiling=V.rb,ss=V.sb,un=e._free=V.tb,$i=e._malloc=V.ub,Si=V.xb,Fr=V.yb,or=V.zb,Pt=V.Ab,da=V.Bb,Bn=V.Cb,fa=V.Db,vt=V.Eb,lr=V.Fb,xo=V.Gb,ht=V.Hb,pa=V.Ib,Tt=V.Jb,as=V.Kb,Nr=V.Lb,ma=V.Mb,bo=V.Nb,ga=V.wb,_=ee,wi}var P,G=et();return e.instantiateWasm?new Promise(V=>{e.instantiateWasm(G,(ee,he)=>{V(x(ee,he))})}):r?x(new WebAssembly.Instance(_,et()),_):(ce??(ce=e.locateFile?e.locateFile?e.locateFile("ort-wasm-simd-threaded.wasm",d):d+"ort-wasm-simd-threaded.wasm":new URL("ort-wasm-simd-threaded.wasm",import.meta.url).href),P=await(async function(V){var ee=ce;if(!m&&!D(ee))try{var he=fetch(ee,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(he,V)}catch(Ue){k(`wasm streaming compile failed: ${Ue}`),k("falling back to ArrayBuffer instantiation")}return(async function(Ue,ot){try{var Et=await(async function(It){if(!m)try{var gn=await o(It);return new Uint8Array(gn)}catch{}if(It==ce&&m)It=new Uint8Array(m);else{if(!l)throw"both async and sync fetching of the wasm failed";It=l(It)}return It})(Ue);return await WebAssembly.instantiate(Et,ot)}catch(It){k(`failed to asynchronously prepare wasm: ${It}`),ye(It)}})(ee,V)})(G),x(P.instance,P.module))}class Dt{constructor(P){si(this,"name","ExitStatus");this.message=`Program terminated with exit(${P})`,this.status=P}}var mt=x=>{x.terminate(),x.onmessage=()=>{}},Ee=[],se=0,fe=null,Pe=x=>{_t.length==0&&(Zt(),Ye(_t[0]));var P=_t.pop();if(!P)return 6;ct.push(P),Mt[x.Ob]=P,P.Ob=x.Ob;var G={Pb:"run",bc:x.ac,Tb:x.Tb,Ob:x.Ob};return P.postMessage(G,x.Xb),0},Ge=0,we=(x,P,...G)=>{var V,ee=16*G.length,he=Tt(),Ue=pa(ee),ot=Ue>>>3;for(V of G)typeof V=="bigint"?((A(),X)[ot++>>>0]=1n,(A(),X)[ot++>>>0]=V):((A(),X)[ot++>>>0]=0n,(A(),j)[ot++>>>0]=V);return x=or(x,0,ee,Ue,P),ht(he),x};function gt(x){if(r)return we(0,1,x);if(p=x,!(0<Ge)){for(var P of ct)mt(P);for(P of _t)mt(P);_t=[],ct=[],Mt={},R=!0}u(0,new Dt(x))}function Qt(x){if(r)return we(1,0,x);St(x)}var St=x=>{if(p=x,r)throw Qt(x),"unwind";gt(x)},_t=[],ct=[],ut=[],Mt={},Yt=x=>{var P=x.Ob;delete Mt[P],_t.push(x),ct.splice(ct.indexOf(x),1),x.Ob=0,Pt(P)};function Ve(){ut.forEach(x=>x())}var Ye=x=>new Promise(P=>{x.onmessage=ee=>{var he=ee.data;if(ee=he.Pb,he.Sb&&he.Sb!=ss()){var Ue=Mt[he.Sb];Ue?Ue.postMessage(he,he.Xb):k(`Internal error! Worker sent a message "${ee}" to target pthread ${he.Sb}, but that thread no longer exists!`)}else ee==="checkMailbox"?Wi():ee==="spawnThread"?Pe(he):ee==="cleanupThread"?ir(()=>{Yt(Mt[he.cc])}):ee==="loaded"?(x.loaded=!0,P(x)):he.target==="setimmediate"?x.postMessage(he):ee==="uncaughtException"?x.onerror(he.error):ee==="callHandler"?e[he.Yb](...he.args):ee&&k(`worker sent an unknown command ${ee}`)},x.onerror=ee=>{throw k(`worker sent an error! ${ee.filename}:${ee.lineno}: ${ee.message}`),ee};var G,V=[];for(G of[])e.propertyIsEnumerable(G)&&V.push(G);x.postMessage({Pb:"load",Zb:V,dc:J,ec:_})});function Zt(){var x=new Worker((()=>{let P=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new P("ort.wasm.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});_t.push(x)}var J,Wt=[],je=x=>{var P=Wt[x];return P||(Wt[x]=P=ga.get(x)),P},z=(x,P)=>{Ge=0,x=je(x)(P),0<Ge?p=x:da(x)},w=[],ne=0;function le(x){var P=new ve(x>>>=0);return(A(),N)[P.Qb+12>>>0]==0&&(Oe(P,!0),ne--),me(P,!1),w.push(P),bo(x)}var pe=0,Fe=()=>{vt(0,0);var x=w.pop();as(x.Ub),pe=0};function Oe(x,P){P=P?1:0,(A(),N)[x.Qb+12>>>0]=P}function me(x,P){P=P?1:0,(A(),N)[x.Qb+13>>>0]=P}class ve{constructor(P){this.Ub=P,this.Qb=P-24}}var Be=x=>{var P=pe;if(!P)return lr(0),0;var G=new ve(P);(A(),Y)[G.Qb+16>>>2>>>0]=P;var V=(A(),Y)[G.Qb+4>>>2>>>0];if(!V)return lr(0),P;for(var ee of x){if(ee===0||ee===V)break;if(ma(ee,V,G.Qb+16))return lr(ee),P}return lr(V),P};function it(){return Be([])}function Ie(x){return Be([x>>>0])}function Ne(x,P,G,V){return Be([x>>>0,P>>>0,G>>>0,V>>>0])}var tt=()=>{var x=w.pop();x||ye("no exception to throw");var P=x.Ub;throw(A(),N)[x.Qb+13>>>0]==0&&(w.push(x),me(x,!0),Oe(x,!1),ne++),Nr(P),pe=P};function lt(x,P,G){var V=new ve(x>>>=0);throw P>>>=0,G>>>=0,(A(),Y)[V.Qb+16>>>2>>>0]=0,(A(),Y)[V.Qb+4>>>2>>>0]=P,(A(),Y)[V.Qb+8>>>2>>>0]=G,Nr(x),ne++,pe=x}var yt=()=>ne;function Q(x,P,G,V){return r?we(2,1,x,P,G,V):ke(x,P,G,V)}function ke(x,P,G,V){if(x>>>=0,P>>>=0,G>>>=0,V>>>=0,!globalThis.SharedArrayBuffer)return 6;var ee=[];return r&&ee.length===0?Q(x,P,G,V):(x={ac:G,Ob:x,Tb:V,Xb:ee},r?(x.Pb="spawnThread",postMessage(x,ee),0):Pe(x))}function xe(x){throw pe||(pe=x>>>0),pe}var ze=globalThis.TextDecoder&&new TextDecoder,Xe=(x,P=0,G,V)=>{var ee=P>>>=0;if(G=ee+G,V)V=G;else{for(;x[ee]&&!(ee>=G);)++ee;V=ee}if(16<V-P&&x.buffer&&ze)return ze.decode(x.buffer instanceof ArrayBuffer?x.subarray(P,V):x.slice(P,V));for(ee="";P<V;)if(128&(G=x[P++])){var he=63&x[P++];if((224&G)==192)ee+=String.fromCharCode((31&G)<<6|he);else{var Ue=63&x[P++];65536>(G=(240&G)==224?(15&G)<<12|he<<6|Ue:(7&G)<<18|he<<12|Ue<<6|63&x[P++])?ee+=String.fromCharCode(G):(G-=65536,ee+=String.fromCharCode(55296|G>>10,56320|1023&G))}}else ee+=String.fromCharCode(G);return ee},Se=(x,P,G)=>(x>>>=0)?Xe((A(),H),x,P,G):"";function rt(x,P,G){return r?we(3,1,x,P,G):0}function nt(x,P){if(r)return we(4,1,x,P)}function $t(x,P){if(r)return we(5,1,x,P)}function Bt(x,P,G){if(r)return we(6,1,x,P,G)}function En(x,P,G){return r?we(7,1,x,P,G):0}function $n(x,P){if(r)return we(8,1,x,P)}function Ir(x,P,G){if(r)return we(9,1,x,P,G)}function xi(x,P,G,V){if(r)return we(10,1,x,P,G,V)}function is(x,P,G,V){if(r)return we(11,1,x,P,G,V)}function Te(x,P,G,V){if(r)return we(12,1,x,P,G,V)}function Ae(x){if(r)return we(13,1,x)}function Tn(x,P){if(r)return we(14,1,x,P)}function nr(x,P,G){if(r)return we(15,1,x,P,G)}var An=()=>ye("");function On(x){Si(x>>>0,!i,1,!t,131072,!1),Ve()}var ir=x=>{if(!R)try{if(x(),!(0<Ge))try{r?ss()&&da(p):St(p)}catch(P){P instanceof Dt||P=="unwind"||u(0,P)}}catch(P){P instanceof Dt||P=="unwind"||u(0,P)}},qn=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ti(x){x>>>=0,qn||(Atomics.waitAsync((A(),W),x>>>2,x).value.then(Wi),x+=128,Atomics.store((A(),W),x>>>2,1))}var Wi=()=>ir(()=>{var x=ss();x&&(ti(x),fa())});function rr(x,P){(x>>>=0)==P>>>0?setTimeout(Wi):r?postMessage({Sb:x,Pb:"checkMailbox"}):(x=Mt[x])&&x.postMessage({Pb:"checkMailbox"})}var Cn=[];function rs(x,P,G,V,ee){for(P>>>=0,ee>>>=0,Cn.length=0,G=ee>>>3,V=ee+V>>>3;G<V;){var he;he=(A(),X)[G++>>>0]?(A(),X)[G++>>>0]:(A(),j)[G++>>>0],Cn.push(he)}return(P?wo[P]:So[x])(...Cn)}var sr=()=>{Ge=0};function ar(x){x>>>=0,r?postMessage({Pb:"cleanupThread",cc:x}):Yt(Mt[x])}function Lr(x){}function ha(x,P){x=-9007199254740992>x||9007199254740992<x?NaN:Number(x),P>>>=0,x=new Date(1e3*x),(A(),W)[P>>>2>>>0]=x.getUTCSeconds(),(A(),W)[P+4>>>2>>>0]=x.getUTCMinutes(),(A(),W)[P+8>>>2>>>0]=x.getUTCHours(),(A(),W)[P+12>>>2>>>0]=x.getUTCDate(),(A(),W)[P+16>>>2>>>0]=x.getUTCMonth(),(A(),W)[P+20>>>2>>>0]=x.getUTCFullYear()-1900,(A(),W)[P+24>>>2>>>0]=x.getUTCDay(),x=(x.getTime()-Date.UTC(x.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(A(),W)[P+28>>>2>>>0]=x}var Dr=x=>x%4==0&&(x%100!=0||x%400==0),I=[0,31,60,91,121,152,182,213,244,274,305,335],K=[0,31,59,90,120,151,181,212,243,273,304,334];function ue(x,P){x=-9007199254740992>x||9007199254740992<x?NaN:Number(x),P>>>=0,x=new Date(1e3*x),(A(),W)[P>>>2>>>0]=x.getSeconds(),(A(),W)[P+4>>>2>>>0]=x.getMinutes(),(A(),W)[P+8>>>2>>>0]=x.getHours(),(A(),W)[P+12>>>2>>>0]=x.getDate(),(A(),W)[P+16>>>2>>>0]=x.getMonth(),(A(),W)[P+20>>>2>>>0]=x.getFullYear()-1900,(A(),W)[P+24>>>2>>>0]=x.getDay();var G=(Dr(x.getFullYear())?I:K)[x.getMonth()]+x.getDate()-1|0;(A(),W)[P+28>>>2>>>0]=G,(A(),W)[P+36>>>2>>>0]=-60*x.getTimezoneOffset(),G=new Date(x.getFullYear(),6,1).getTimezoneOffset();var V=new Date(x.getFullYear(),0,1).getTimezoneOffset();x=0|(G!=V&&x.getTimezoneOffset()==Math.min(V,G)),(A(),W)[P+32>>>2>>>0]=x}function ae(x){x>>>=0;var P=new Date((A(),W)[x+20>>>2>>>0]+1900,(A(),W)[x+16>>>2>>>0],(A(),W)[x+12>>>2>>>0],(A(),W)[x+8>>>2>>>0],(A(),W)[x+4>>>2>>>0],(A(),W)[x>>>2>>>0],0),G=(A(),W)[x+32>>>2>>>0],V=P.getTimezoneOffset(),ee=new Date(P.getFullYear(),6,1).getTimezoneOffset(),he=new Date(P.getFullYear(),0,1).getTimezoneOffset(),Ue=Math.min(he,ee);return 0>G?(A(),W)[x+32>>>2>>>0]=+(ee!=he&&Ue==V):0<G!=(Ue==V)&&(ee=Math.max(he,ee),P.setTime(P.getTime()+6e4*((0<G?Ue:ee)-V))),(A(),W)[x+24>>>2>>>0]=P.getDay(),G=(Dr(P.getFullYear())?I:K)[P.getMonth()]+P.getDate()-1|0,(A(),W)[x+28>>>2>>>0]=G,(A(),W)[x>>>2>>>0]=P.getSeconds(),(A(),W)[x+4>>>2>>>0]=P.getMinutes(),(A(),W)[x+8>>>2>>>0]=P.getHours(),(A(),W)[x+12>>>2>>>0]=P.getDate(),(A(),W)[x+16>>>2>>>0]=P.getMonth(),(A(),W)[x+20>>>2>>>0]=P.getYear(),x=P.getTime(),BigInt(isNaN(x)?-1:x/1e3)}function re(x,P,G,V,ee,he,Ue){return r?we(16,1,x,P,G,V,ee,he,Ue):-52}function He(x,P,G,V,ee,he){if(r)return we(17,1,x,P,G,V,ee,he)}var Ce={},We=()=>performance.timeOrigin+performance.now();function Ke(x,P){if(r)return we(18,1,x,P);if(Ce[x]&&(clearTimeout(Ce[x].id),delete Ce[x]),!P)return 0;var G=setTimeout(()=>{delete Ce[x],ir(()=>Bn(x,performance.timeOrigin+performance.now()))},P);return Ce[x]={id:G,mc:P},0}var qe=(x,P,G)=>{var V=(A(),H);if(P>>>=0,0<G){var ee=P;G=P+G-1;for(var he=0;he<x.length;++he){var Ue=x.codePointAt(he);if(127>=Ue){if(P>=G)break;V[P++>>>0]=Ue}else if(2047>=Ue){if(P+1>=G)break;V[P++>>>0]=192|Ue>>6,V[P++>>>0]=128|63&Ue}else if(65535>=Ue){if(P+2>=G)break;V[P++>>>0]=224|Ue>>12,V[P++>>>0]=128|Ue>>6&63,V[P++>>>0]=128|63&Ue}else{if(P+3>=G)break;V[P++>>>0]=240|Ue>>18,V[P++>>>0]=128|Ue>>12&63,V[P++>>>0]=128|Ue>>6&63,V[P++>>>0]=128|63&Ue,he++}}V[P>>>0]=0,x=P-ee}else x=0;return x};function xt(x,P,G,V){x>>>=0,P>>>=0,G>>>=0,V>>>=0;var ee=new Date().getFullYear(),he=new Date(ee,0,1).getTimezoneOffset();ee=new Date(ee,6,1).getTimezoneOffset();var Ue=Math.max(he,ee);(A(),Y)[x>>>2>>>0]=60*Ue,(A(),W)[P>>>2>>>0]=+(he!=ee),x=(P=ot=>{var Et=Math.abs(ot);return`UTC${0<=ot?"-":"+"}${String(Math.floor(Et/60)).padStart(2,"0")}${String(Et%60).padStart(2,"0")}`})(he),P=P(ee),ee<he?(qe(x,G,17),qe(P,V,17)):(qe(x,V,17),qe(P,G,17))}var bt=()=>Date.now(),Qe=1;function kt(x,P,G){if(G>>>=0,!(0<=x&&3>=x))return 28;if(x===0)x=Date.now();else{if(!Qe)return 52;x=performance.timeOrigin+performance.now()}return x=Math.round(1e6*x),(A(),X)[G>>>3>>>0]=BigInt(x),0}var tn=[];function Ft(x,P,G){x>>>=0,P>>>=0,G>>>=0,tn.length=0;for(var V;V=(A(),H)[P++>>>0];){var ee=V!=105;G+=(ee&=V!=112)&&G%8?4:0,tn.push(V==112?(A(),Y)[G>>>2>>>0]:V==106?(A(),X)[G>>>3>>>0]:V==105?(A(),W)[G>>>2>>>0]:(A(),j)[G>>>3>>>0]),G+=ee?8:4}return wo[x](...tn)}var Xt=()=>{};function st(x,P){return k(Se(x>>>0,P>>>0))}var Ze=()=>{throw Ge+=1,"unwind"};function fn(){return 4294901760}var Nt=()=>navigator.hardwareConcurrency,cn={},Rn=x=>{for(var P=0,G=0;G<x.length;++G){var V=x.charCodeAt(G);127>=V?P++:2047>=V?P+=2:55296<=V&&57343>=V?(P+=4,++G):P+=3}return P},Pn=x=>{var P;return(P=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(x))?+P[1]:(P=/:(\d+):\d+(?:\)|$)/.exec(x))?2147483648|+P[1]:0},bi=x=>{for(var P of x)(x=Pn(P))&&(cn[x]=P)};function Vt(){var x=Error().stack.toString().split(`
`);return x[0]=="Error"&&x.shift(),bi(x),cn.Vb=Pn(x[3]),cn.$b=x,cn.Vb}function Jt(x){if(!(x=cn[x>>>0]))return 0;var P;if(P=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(x))x=P[1];else if(P=/^\s+at (.*) \(.*\)$/.exec(x))x=P[1];else{if(!(P=/^(.+?)@/.exec(x)))return 0;x=P[1]}un(Jt.Wb??0),P=Rn(x)+1;var G=$i(P);return G&&qe(x,G,P),Jt.Wb=G,Jt.Wb}function ni(x){x>>>=0;var P=(A(),H).length;if(x<=P||4294901760<x)return!1;for(var G=1;4>=G;G*=2){var V=P*(1+.2/G);V=Math.min(V,x+100663296);e:{V=(Math.min(4294901760,65536*Math.ceil(Math.max(x,V)/65536))-J.buffer.byteLength+65535)/65536|0;try{J.grow(V),de();var ee=1;break e}catch{}ee=void 0}if(ee)return!0}return!1}function M(x,P,G){if(x>>>=0,P>>>=0,cn.Vb==x)var V=cn.$b;else(V=Error().stack.toString().split(`
`))[0]=="Error"&&V.shift(),bi(V);for(var ee=3;V[ee]&&Pn(V[ee])!=x;)++ee;for(x=0;x<G&&V[x+ee];++x)(A(),W)[P+4*x>>>2>>>0]=Pn(V[x+ee]);return x}var Ut,fi={},Ui=()=>{if(!Ut){var x,P={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(x in fi)fi[x]===void 0?delete P[x]:P[x]=fi[x];var G=[];for(x in P)G.push(`${x}=${P[x]}`);Ut=G}return Ut};function Xi(x,P){if(r)return we(19,1,x,P);x>>>=0,P>>>=0;var G,V=0,ee=0;for(G of Ui()){var he=P+V;(A(),Y)[x+ee>>>2>>>0]=he,V+=qe(G,he,1/0)+1,ee+=4}return 0}function mo(x,P){if(r)return we(20,1,x,P);x>>>=0,P>>>=0;var G=Ui();for(var V of((A(),Y)[x>>>2>>>0]=G.length,x=0,G))x+=Rn(V)+1;return(A(),Y)[P>>>2>>>0]=x,0}function go(x){return r?we(21,1,x):52}function _o(x,P,G,V){return r?we(22,1,x,P,G,V):52}function vo(x,P,G,V){return r?we(23,1,x,P,G,V):70}var Yc=[null,[],[]];function yo(x,P,G,V){if(r)return we(24,1,x,P,G,V);P>>>=0,G>>>=0,V>>>=0;for(var ee=0,he=0;he<G;he++){var Ue=(A(),Y)[P>>>2>>>0],ot=(A(),Y)[P+4>>>2>>>0];P+=8;for(var Et=0;Et<ot;Et++){var It=x,gn=(A(),H)[Ue+Et>>>0],Yn=Yc[It];gn===0||gn===10?((It===1?U:k)(Xe(Yn)),Yn.length=0):Yn.push(gn)}ee+=ot}return(A(),Y)[V>>>2>>>0]=ee,0}function jc(x){return x>>>0}r||(function(){for(var x=e.numThreads-1;x--;)Zt();Ee.push(async()=>{var P=(async function(){if(!r)return Promise.all(_t.map(Ye))})();se++,await P,--se==0&&fe&&(P=fe,fe=null,P())})})(),r||(J=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),de()),e.wasmBinary&&(m=e.wasmBinary),e.stackSave=()=>Tt(),e.stackRestore=x=>ht(x),e.stackAlloc=x=>pa(x),e.setValue=function(x,P,G="i8"){switch(G.endsWith("*")&&(G="*"),G){case"i1":case"i8":(A(),N)[x>>>0]=P;break;case"i16":(A(),Z)[x>>>1>>>0]=P;break;case"i32":(A(),W)[x>>>2>>>0]=P;break;case"i64":(A(),X)[x>>>3>>>0]=BigInt(P);break;case"float":(A(),q)[x>>>2>>>0]=P;break;case"double":(A(),j)[x>>>3>>>0]=P;break;case"*":(A(),Y)[x>>>2>>>0]=P;break;default:ye(`invalid type for setValue: ${G}`)}},e.getValue=function(x,P="i8"){switch(P.endsWith("*")&&(P="*"),P){case"i1":case"i8":return(A(),N)[x>>>0];case"i16":return(A(),Z)[x>>>1>>>0];case"i32":return(A(),W)[x>>>2>>>0];case"i64":return(A(),X)[x>>>3>>>0];case"float":return(A(),q)[x>>>2>>>0];case"double":return(A(),j)[x>>>3>>>0];case"*":return(A(),Y)[x>>>2>>>0];default:ye(`invalid type for getValue: ${P}`)}},e.UTF8ToString=Se,e.stringToUTF8=qe,e.lengthBytesUTF8=Rn;var ss,un,$i,Si,Fr,or,Pt,da,Bn,fa,vt,lr,xo,ht,pa,Tt,as,Nr,ma,bo,ga,wi,So=[gt,Qt,Q,rt,nt,$t,Bt,En,$n,Ir,xi,is,Te,Ae,Tn,nr,re,He,Ke,Xi,mo,go,_o,vo,yo],wo={1011284:(x,P,G,V,ee)=>{if(e===void 0||!e.Rb)return 1;if((x=Se(Number(x>>>0))).startsWith("./")&&(x=x.substring(2)),!(x=e.Rb.get(x)))return 2;if(P=Number(P>>>0),G=Number(G>>>0),V=Number(V>>>0),P+G>x.byteLength)return 3;try{let he=x.subarray(P,P+G);switch(ee){case 0:(A(),H).set(he,V>>>0);break;case 1:e.fc?e.fc(V,he):e.ic(V,he);break;default:return 4}return 0}catch{return 4}},1012108:()=>typeof wasmOffsetConverter<"u"};function Zc(){return typeof wasmOffsetConverter<"u"}function Jc(x,P,G,V){var ee=Tt();try{return je(x)(P,G,V)}catch(he){if(ht(ee),he!==he+0)throw he;vt(1,0)}}function Kc(x,P,G){var V=Tt();try{return je(x)(P,G)}catch(ee){if(ht(V),ee!==ee+0)throw ee;vt(1,0)}}function os(x){var P=Tt();try{je(x)()}catch(G){if(ht(P),G!==G+0)throw G;vt(1,0)}}function ls(x,P){var G=Tt();try{return je(x)(P)}catch(V){if(ht(G),V!==V+0)throw V;vt(1,0)}}function Mo(x,P,G){var V=Tt();try{je(x)(P,G)}catch(ee){if(ht(V),ee!==ee+0)throw ee;vt(1,0)}}function Ur(x,P){var G=Tt();try{je(x)(P)}catch(V){if(ht(G),V!==V+0)throw V;vt(1,0)}}function cs(x,P,G,V,ee,he,Ue){var ot=Tt();try{return je(x)(P,G,V,ee,he,Ue)}catch(Et){if(ht(ot),Et!==Et+0)throw Et;vt(1,0)}}function Qc(x,P,G,V,ee,he){var Ue=Tt();try{je(x)(P,G,V,ee,he)}catch(ot){if(ht(Ue),ot!==ot+0)throw ot;vt(1,0)}}function Eo(x,P,G,V){var ee=Tt();try{je(x)(P,G,V)}catch(he){if(ht(ee),he!==he+0)throw he;vt(1,0)}}function eu(x,P,G,V,ee){var he=Tt();try{je(x)(P,G,V,ee)}catch(Ue){if(ht(he),Ue!==Ue+0)throw Ue;vt(1,0)}}function us(x,P,G,V,ee,he,Ue){var ot=Tt();try{je(x)(P,G,V,ee,he,Ue)}catch(Et){if(ht(ot),Et!==Et+0)throw Et;vt(1,0)}}function hs(x,P,G,V,ee,he,Ue){var ot=Tt();try{je(x)(P,G,V,ee,he,Ue)}catch(Et){if(ht(ot),Et!==Et+0)throw Et;vt(1,0)}}function _a(x,P,G,V,ee,he,Ue,ot){var Et=Tt();try{je(x)(P,G,V,ee,he,Ue,ot)}catch(It){if(ht(Et),It!==It+0)throw It;vt(1,0)}}function va(x,P,G,V,ee){var he=Tt();try{return je(x)(P,G,V,ee)}catch(Ue){if(ht(he),Ue!==Ue+0)throw Ue;vt(1,0)}}function tu(x,P,G){var V=Tt();try{return je(x)(P,G)}catch(ee){if(ht(V),ee!==ee+0)throw ee;vt(1,0)}}function nu(x,P,G,V,ee,he,Ue,ot){var Et=Tt();try{je(x)(P,G,V,ee,he,Ue,ot)}catch(It){if(ht(Et),It!==It+0)throw It;vt(1,0)}}function iu(x,P,G,V,ee,he,Ue,ot,Et,It,gn,Yn){var pn=Tt();try{je(x)(P,G,V,ee,he,Ue,ot,Et,It,gn,Yn)}catch(ri){if(ht(pn),ri!==ri+0)throw ri;vt(1,0)}}function ru(x,P,G){var V=Tt();try{return je(x)(P,G)}catch(ee){if(ht(V),ee!==ee+0)throw ee;return vt(1,0),0n}}function ds(x,P,G,V,ee,he,Ue,ot,Et){var It=Tt();try{je(x)(P,G,V,ee,he,Ue,ot,Et)}catch(gn){if(ht(It),gn!==gn+0)throw gn;vt(1,0)}}function su(x){var P=Tt();try{return je(x)()}catch(G){if(ht(P),G!==G+0)throw G;vt(1,0)}}function au(x,P){var G=Tt();try{return je(x)(P)}catch(V){if(ht(G),V!==V+0)throw V;return vt(1,0),0n}}function ou(x){var P=Tt();try{return je(x)()}catch(G){if(ht(P),G!==G+0)throw G;return vt(1,0),0n}}function fs(x,P,G,V){var ee=Tt();try{return je(x)(P,G,V)}catch(he){if(ht(ee),he!==he+0)throw he;vt(1,0)}}function lu(x,P,G,V,ee){var he=Tt();try{return je(x)(P,G,V,ee)}catch(Ue){if(ht(he),Ue!==Ue+0)throw Ue;vt(1,0)}}function ps(x,P,G,V,ee,he){var Ue=Tt();try{return je(x)(P,G,V,ee,he)}catch(ot){if(ht(Ue),ot!==ot+0)throw ot;vt(1,0)}}function To(x,P,G,V,ee,he){var Ue=Tt();try{return je(x)(P,G,V,ee,he)}catch(ot){if(ht(Ue),ot!==ot+0)throw ot;vt(1,0)}}function Ao(x,P,G,V,ee,he){var Ue=Tt();try{return je(x)(P,G,V,ee,he)}catch(ot){if(ht(Ue),ot!==ot+0)throw ot;vt(1,0)}}function ms(x,P,G,V,ee,he,Ue,ot){var Et=Tt();try{return je(x)(P,G,V,ee,he,Ue,ot)}catch(It){if(ht(Et),It!==It+0)throw It;vt(1,0)}}function Le(x,P,G,V,ee){var he=Tt();try{return je(x)(P,G,V,ee)}catch(Ue){if(ht(he),Ue!==Ue+0)throw Ue;return vt(1,0),0n}}function pi(x,P,G,V){var ee=Tt();try{return je(x)(P,G,V)}catch(he){if(ht(ee),he!==he+0)throw he;vt(1,0)}}function cu(x,P,G,V){var ee=Tt();try{return je(x)(P,G,V)}catch(he){if(ht(ee),he!==he+0)throw he;vt(1,0)}}function Co(x,P,G,V,ee,he,Ue,ot,Et,It,gn,Yn){var pn=Tt();try{return je(x)(P,G,V,ee,he,Ue,ot,Et,It,gn,Yn)}catch(ri){if(ht(pn),ri!==ri+0)throw ri;vt(1,0)}}function qi(x,P,G,V,ee,he,Ue,ot,Et,It,gn){var Yn=Tt();try{je(x)(P,G,V,ee,he,Ue,ot,Et,It,gn)}catch(pn){if(ht(Yn),pn!==pn+0)throw pn;vt(1,0)}}function ii(x,P,G,V,ee,he,Ue,ot,Et,It,gn,Yn,pn,ri,hn,Po){var Io=Tt();try{je(x)(P,G,V,ee,he,Ue,ot,Et,It,gn,Yn,pn,ri,hn,Po)}catch(xa){if(ht(Io),xa!==xa+0)throw xa;vt(1,0)}}function uu(x,P,G){var V=Tt();try{return je(x)(P,G)}catch(ee){if(ht(V),ee!==ee+0)throw ee;vt(1,0)}}function ya(x,P,G){var V=Tt();try{return je(x)(P,G)}catch(ee){if(ht(V),ee!==ee+0)throw ee;vt(1,0)}}function Ro(x,P,G,V){var ee=Tt();try{je(x)(P,G,V)}catch(he){if(ht(ee),he!==he+0)throw he;vt(1,0)}}function gs(){if(0<se)fe=gs;else if(r)y?.(e),$();else{for(var x=Ee;0<x.length;)x.shift()(e);0<se?fe=gs:(e.calledRun=!0,R||($(),y?.(e)))}}return r||(wi=await Je(),gs()),e.PTR_SIZE=4,be?e:new Promise((x,P)=>{y=x,E=P})}var Zm,fm,NT=Ht(()=>{"use strict";Zm=dm,fm=globalThis.self?.name?.startsWith("em-pthread"),fm&&dm()}),ed,dd,pm,hi,Jm,Oc,mm,gm,td,_m,nd,Km,id,Qm,vd=Ht(()=>{"use strict";_d(),ed=typeof location>"u"?void 0:location.origin,dd=import.meta.url>"file:"&&import.meta.url<"file;",pm=()=>{if(dd){let n=URL;return new URL(new n("ort.wasm.bundle.min.mjs",import.meta.url).href,ed).href}return import.meta.url},hi=pm(),Jm=()=>{if(hi&&!hi.startsWith("blob:"))return hi.substring(0,hi.lastIndexOf("/")+1)},Oc=(n,e)=>{try{let t=e??hi;return(t?new URL(n,t):new URL(n)).origin===ed}catch{return!1}},mm=(n,e)=>{let t=e??hi;try{return(t?new URL(n,t):new URL(n)).href}catch{return}},gm=(n,e)=>`${e??"./"}${n}`,td=async n=>{let e=await(await fetch(n,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},_m=async n=>(await import(n)).default,nd=(FT(),ud(qm)).default,Km=async()=>{if(!hi)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Oc(hi))return[void 0,nd()];let n=await td(hi);return[n,nd(n)]},id=(NT(),ud(jm)).default,Qm=async(n,e,t,i)=>{let r=id&&!(n||e);if(r)if(hi)r=Oc(hi)||i&&!t;else if(i&&!t)r=!0;else throw new Error("cannot determine the script source URL.");if(r)return[void 0,id];{let o="ort-wasm-simd-threaded.mjs",l=n??mm(o,e),u=t&&l&&!Oc(l,e),h=u?await td(l):l??gm(o,e);return[u?h:void 0,await _m(h)]}}}),rd,Bc,lo,sd,vm,ym,xm,yd,on,ca=Ht(()=>{"use strict";vd(),Bc=!1,lo=!1,sd=!1,vm=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ym=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},xm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},yd=async n=>{if(Bc)return Promise.resolve();if(lo)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(sd)throw new Error("previous call to 'initializeWebAssembly()' failed.");lo=!0;let e=n.initTimeout,t=n.numThreads;if(n.simd!==!1){if(n.simd==="relaxed"){if(!xm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ym())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=vm();t>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+t+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),n.numThreads=t=1);let r=n.wasmPaths,o=typeof r=="string"?r:void 0,l=r?.mjs,u=l?.href??l,h=r?.wasm,d=h?.href??h,m=n.wasmBinary,[_,p]=await Qm(u,o,t>1,!!m||!!d),y=!1,E=[];if(e>0&&E.push(new Promise(F=>{setTimeout(()=>{y=!0,F()},e)})),E.push(new Promise((F,S)=>{let v={numThreads:t};if(m)v.wasmBinary=m,v.locateFile=U=>U;else if(d||o)v.locateFile=U=>d??o+U;else if(u&&u.indexOf("blob:")!==0)v.locateFile=U=>new URL(U,u).href;else if(_){let U=Jm();U&&(v.locateFile=k=>U+k)}p(v).then(U=>{lo=!1,Bc=!0,rd=U,F(),_&&URL.revokeObjectURL(_)},U=>{lo=!1,sd=!0,S(U)})})),await Promise.race(E),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},on=()=>{if(Bc&&rd)return rd;throw new Error("WebAssembly is not initialized yet.")}}),Ni,Hc,Kt,xd=Ht(()=>{"use strict";ca(),Ni=(n,e)=>{let t=on(),i=t.lengthBytesUTF8(n)+1,r=t._malloc(i);return t.stringToUTF8(n,r,i),e.push(r),r},Hc=(n,e,t,i)=>{if(typeof n=="object"&&n!==null){if(t.has(n))throw new Error("Circular reference in options");t.add(n)}Object.entries(n).forEach(([r,o])=>{let l=e?e+r:r;if(typeof o=="object")Hc(o,l+".",t,i);else if(typeof o=="string"||typeof o=="number")i(l,o.toString());else if(typeof o=="boolean")i(l,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},Kt=n=>{let e=on(),t=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetLastError(r,r+i);let o=Number(e.getValue(r,i===4?"i32":"i64")),l=e.getValue(r+i,"*"),u=l?e.UTF8ToString(l):"";throw new Error(`${n} ERROR_CODE: ${o}, ERROR_MESSAGE: ${u}`)}finally{e.stackRestore(t)}}}),eg,UT=Ht(()=>{"use strict";ca(),xd(),eg=n=>{let e=on(),t=0,i=[],r=n||{};try{if(n?.logSeverityLevel===void 0)r.logSeverityLevel=2;else if(typeof n.logSeverityLevel!="number"||!Number.isInteger(n.logSeverityLevel)||n.logSeverityLevel<0||n.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${n.logSeverityLevel}`);if(n?.logVerbosityLevel===void 0)r.logVerbosityLevel=0;else if(typeof n.logVerbosityLevel!="number"||!Number.isInteger(n.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${n.logVerbosityLevel}`);n?.terminate===void 0&&(r.terminate=!1);let o=0;return n?.tag!==void 0&&(o=Ni(n.tag,i)),t=e._OrtCreateRunOptions(r.logSeverityLevel,r.logVerbosityLevel,!!r.terminate,o),t===0&&Kt("Can't create run options."),n?.extra!==void 0&&Hc(n.extra,"",new WeakSet,(l,u)=>{let h=Ni(l,i),d=Ni(u,i);e._OrtAddRunConfigEntry(t,h,d)!==0&&Kt(`Can't set a run config entry: ${l} - ${u}.`)}),[t,i]}catch(o){throw t!==0&&e._OrtReleaseRunOptions(t),i.forEach(l=>e._free(l)),o}}}),bm,Sm,wm,Zr,Mm,tg,OT=Ht(()=>{"use strict";ca(),xd(),bm=n=>{switch(n){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${n}`)}},Sm=n=>{switch(n){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${n}`)}},wm=n=>{n.extra||(n.extra={}),n.extra.session||(n.extra.session={});let e=n.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),n.executionProviders&&n.executionProviders.some(t=>(typeof t=="string"?t:t.name)==="webgpu")&&(n.enableMemPattern=!1)},Zr=(n,e,t,i)=>{let r=Ni(e,i),o=Ni(t,i);on()._OrtAddSessionConfigEntry(n,r,o)!==0&&Kt(`Can't set a session config entry: ${e} - ${t}.`)},Mm=async(n,e,t)=>{let i=e.executionProviders;for(let r of i){let o=typeof r=="string"?r:r.name,l=[];switch(o){case"webnn":if(o="WEBNN",Zr(n,"session.disable_quant_qdq","1",t),Zr(n,"session.disable_qdq_constant_folding","1",t),typeof r!="string"){let _=r?.deviceType;_&&Zr(n,"deviceType",_,t)}break;case"webgpu":if(o="JS",typeof r!="string"){let _=r;if(_?.preferredLayout){if(_.preferredLayout!=="NCHW"&&_.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${_.preferredLayout}`);Zr(n,"preferredLayout",_.preferredLayout,t)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let u=Ni(o,t),h=l.length,d=0,m=0;if(h>0){d=on()._malloc(h*on().PTR_SIZE),t.push(d),m=on()._malloc(h*on().PTR_SIZE),t.push(m);for(let _=0;_<h;_++)on().setValue(d+_*on().PTR_SIZE,l[_][0],"*"),on().setValue(m+_*on().PTR_SIZE,l[_][1],"*")}await on()._OrtAppendExecutionProvider(n,u,d,m,h)!==0&&Kt(`Can't append execution provider: ${o}.`)}},tg=async n=>{let e=on(),t=0,i=[],r=n||{};wm(r);try{let o=bm(r.graphOptimizationLevel??"all"),l=Sm(r.executionMode??"sequential"),u=typeof r.logId=="string"?Ni(r.logId,i):0,h=r.logSeverityLevel??2;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log severity level is not valid: ${h}`);let d=r.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let m=typeof r.optimizedModelFilePath=="string"?Ni(r.optimizedModelFilePath,i):0;if(t=e._OrtCreateSessionOptions(o,!!r.enableCpuMemArena,!!r.enableMemPattern,l,!!r.enableProfiling,0,u,h,d,m),t===0&&Kt("Can't create session options."),r.executionProviders&&await Mm(t,r,i),r.enableGraphCapture!==void 0){if(typeof r.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);Zr(t,"enableGraphCapture",r.enableGraphCapture.toString(),i)}if(r.freeDimensionOverrides)for(let[_,p]of Object.entries(r.freeDimensionOverrides)){if(typeof _!="string")throw new Error(`free dimension override name must be a string: ${_}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let y=Ni(_,i);e._OrtAddFreeDimensionOverride(t,y,p)!==0&&Kt(`Can't set a free dimension override: ${_} - ${p}.`)}return r.extra!==void 0&&Hc(r.extra,"",new WeakSet,(_,p)=>{Zr(t,_,p,i)}),[t,i]}catch(o){throw t!==0&&e._OrtReleaseSessionOptions(t)!==0&&Kt("Can't release session options."),i.forEach(l=>e._free(l)),o}}}),ia,Vc,ra,ng,ig,bd,Sd,rg,sg=Ht(()=>{"use strict";ia=n=>{switch(n){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${n}`)}},Vc=n=>{switch(n){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${n}`)}},ra=(n,e)=>{let t=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][n],i=typeof e=="number"?e:e.reduce((r,o)=>r*o,1);return t>0?Math.ceil(i*t):void 0},ng=n=>{switch(n){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${n}`)}},ig=n=>{switch(n){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${n}`)}},bd=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",Sd=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint64"||n==="int8"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",rg=n=>{switch(n){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${n}`)}}}),wd,ag=Ht(()=>{"use strict";_d(),wd=async n=>{if(typeof n=="string"){let e=await fetch(n);if(!e.ok)throw new Error(`failed to load external data file: ${n}`);let t=e.headers.get("Content-Length"),i=t?parseInt(t,10):0;if(i<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${n}, no response body.`);let r=e.body.getReader(),o;try{o=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let h=Math.ceil(i/65536);o=new WebAssembly.Memory({initial:h,maximum:h}).buffer}else throw u}let l=0;for(;;){let{done:u,value:h}=await r.read();if(u)break;let d=h.byteLength;new Uint8Array(o,l,d).set(h),l+=d}return new Uint8Array(o,0,i)}}else return n instanceof Blob?new Uint8Array(await n.arrayBuffer()):n instanceof Uint8Array?n:new Uint8Array(n)}}),Em,Md,Ed,Jr,Tm,ad,Wc,Td,Ad,od,Cd,Rd,Pd,og=Ht(()=>{"use strict";ts(),UT(),OT(),sg(),ca(),xd(),ag(),Em=(n,e)=>{on()._OrtInit(n,e)!==0&&Kt("Can't initialize onnxruntime.")},Md=async n=>{Em(n.wasm.numThreads,ig(n.logLevel))},Ed=async(n,e)=>{on().asyncInit?.();let t=n.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=n.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let r=n.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:r}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},Jr=new Map,Tm=n=>{let e=on(),t=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetInputOutputCount(n,r,r+i)!==0&&Kt("Can't get session input/output count.");let o=i===4?"i32":"i64";return[Number(e.getValue(r,o)),Number(e.getValue(r+i,o))]}finally{e.stackRestore(t)}},ad=(n,e)=>{let t=on(),i=t.stackSave(),r=0;try{let o=t.PTR_SIZE,l=t.stackAlloc(2*o);t._OrtGetInputOutputMetadata(n,e,l,l+o)!==0&&Kt("Can't get session input/output metadata.");let u=Number(t.getValue(l,"*"));r=Number(t.getValue(l+o,"*"));let h=t.HEAP32[r/4];if(h===0)return[u,0];let d=t.HEAPU32[r/4+1],m=[];for(let _=0;_<d;_++){let p=Number(t.getValue(r+8+_*o,"*"));m.push(p!==0?t.UTF8ToString(p):Number(t.getValue(r+8+(_+d)*o,"*")))}return[u,h,m]}finally{t.stackRestore(i),r!==0&&t._OrtFree(r)}},Wc=n=>{let e=on(),t=e._malloc(n.byteLength);if(t===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${n.byteLength}.`);return e.HEAPU8.set(n,t),[t,n.byteLength]},Td=async(n,e)=>{let t,i,r=on();Array.isArray(n)?[t,i]=n:n.buffer===r.HEAPU8.buffer?[t,i]=[n.byteOffset,n.byteLength]:[t,i]=Wc(n);let o=0,l=0,u=0,h=[],d=[],m=[];try{if([l,h]=await tg(e),e?.externalData&&r.mountExternalData){let k=[];for(let R of e.externalData){let D=typeof R=="string"?R:R.path,A=typeof R=="string"?R:R.data;k.push(wd(A).then(O=>{r.mountExternalData(D,O)}))}await Promise.all(k)}for(let k of e?.executionProviders??[])if((typeof k=="string"?k:k.name)==="webnn"){if(r.shouldTransferToMLTensor=!1,typeof k!="string"){let R=k,D=R?.context,A=R?.gpuDevice,O=R?.deviceType,T=R?.powerPreference;D?r.currentContext=D:A?r.currentContext=await r.webnnCreateMLContext(A):r.currentContext=await r.webnnCreateMLContext({deviceType:O,powerPreference:T})}else r.currentContext=await r.webnnCreateMLContext();break}o=await r._OrtCreateSession(t,i,l),r.webgpuOnCreateSession?.(o),o===0&&Kt("Can't create a session."),r.jsepOnCreateSession?.(),r.currentContext&&(r.webnnRegisterMLContext(o,r.currentContext),r.currentContext=void 0,r.shouldTransferToMLTensor=!0);let[_,p]=Tm(o),y=!!e?.enableGraphCapture,E=[],F=[],S=[],v=[],U=[];for(let k=0;k<_;k++){let[R,D,A]=ad(o,k);R===0&&Kt("Can't get an input name."),d.push(R);let O=r.UTF8ToString(R);E.push(O),S.push(D===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:Vc(D),shape:A})}for(let k=0;k<p;k++){let[R,D,A]=ad(o,k+_);R===0&&Kt("Can't get an output name."),m.push(R);let O=r.UTF8ToString(R);F.push(O),v.push(D===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:Vc(D),shape:A})}return Jr.set(o,[o,d,m,null,y,!1]),[o,E,F,S,v]}catch(_){throw d.forEach(p=>r._OrtFree(p)),m.forEach(p=>r._OrtFree(p)),u!==0&&r._OrtReleaseBinding(u)!==0&&Kt("Can't release IO binding."),o!==0&&r._OrtReleaseSession(o)!==0&&Kt("Can't release session."),_}finally{r._free(t),l!==0&&r._OrtReleaseSessionOptions(l)!==0&&Kt("Can't release session options."),h.forEach(_=>r._free(_)),r.unmountExternalData?.()}},Ad=n=>{let e=on(),t=Jr.get(n);if(!t)throw new Error(`cannot release session. invalid session id: ${n}`);let[i,r,o,l,u]=t;l&&(u&&e._OrtClearBoundOutputs(l.handle)!==0&&Kt("Can't clear bound outputs."),e._OrtReleaseBinding(l.handle)!==0&&Kt("Can't release IO binding.")),e.jsepOnReleaseSession?.(n),e.webnnOnReleaseSession?.(n),e.webgpuOnReleaseSession?.(n),r.forEach(h=>e._OrtFree(h)),o.forEach(h=>e._OrtFree(h)),e._OrtReleaseSession(i)!==0&&Kt("Can't release session."),Jr.delete(n)},od=async(n,e,t,i,r,o,l=!1)=>{if(!n){e.push(0);return}let u=on(),h=u.PTR_SIZE,d=n[0],m=n[1],_=n[3],p=_,y,E;if(d==="string"&&(_==="gpu-buffer"||_==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(l&&_!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(_==="gpu-buffer"){let v=n[2].gpuBuffer;E=ra(ia(d),m);{let U=u.jsepRegisterBuffer;if(!U)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=U(i,o,v,E)}}else if(_==="ml-tensor"){let v=n[2].mlTensor;E=ra(ia(d),m);let U=u.webnnRegisterMLTensor;if(!U)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=U(i,v,ia(d),m)}else{let v=n[2];if(Array.isArray(v)){E=h*v.length,y=u._malloc(E),t.push(y);for(let U=0;U<v.length;U++){if(typeof v[U]!="string")throw new TypeError(`tensor data at index ${U} is not a string`);u.setValue(y+U*h,Ni(v[U],t),"*")}}else{let U=u.webnnIsGraphInput,k=u.webnnIsGraphOutput;if(d!=="string"&&U&&k){let R=u.UTF8ToString(r);if(U(i,R)||k(i,R)){let D=ia(d);E=ra(D,m),p="ml-tensor";let A=u.webnnCreateTemporaryTensor,O=u.webnnUploadTensor;if(!A||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let T=await A(i,D,m);O(T,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=T}else E=v.byteLength,y=u._malloc(E),t.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,E),y)}else E=v.byteLength,y=u._malloc(E),t.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,E),y)}}let F=u.stackSave(),S=u.stackAlloc(4*m.length);try{m.forEach((U,k)=>u.setValue(S+k*h,U,h===4?"i32":"i64"));let v=u._OrtCreateTensor(ia(d),y,E,S,m.length,rg(p));v===0&&Kt(`Can't create tensor for input/output. session=${i}, index=${o}.`),e.push(v)}finally{u.stackRestore(F)}},Cd=async(n,e,t,i,r,o)=>{let l=on(),u=l.PTR_SIZE,h=Jr.get(n);if(!h)throw new Error(`cannot run inference. invalid session id: ${n}`);let d=h[0],m=h[1],_=h[2],p=h[3],y=h[4],E=h[5],F=e.length,S=i.length,v=0,U=[],k=[],R=[],D=[],A=[],O=l.stackSave(),T=l.stackAlloc(F*u),N=l.stackAlloc(F*u),H=l.stackAlloc(S*u),Z=l.stackAlloc(S*u);try{[v,U]=eg(o),oa("wasm prepareInputOutputTensor");for(let j=0;j<F;j++)await od(t[j],k,D,n,m[e[j]],e[j],y);for(let j=0;j<S;j++)await od(r[j],R,D,n,_[i[j]],F+i[j],y);la("wasm prepareInputOutputTensor");for(let j=0;j<F;j++)l.setValue(T+j*u,k[j],"*"),l.setValue(N+j*u,m[e[j]],"*");for(let j=0;j<S;j++)l.setValue(H+j*u,R[j],"*"),l.setValue(Z+j*u,_[i[j]],"*");l.jsepOnRunStart?.(d),l.webnnOnRunStart?.(d);let W;W=await l._OrtRun(d,N,T,F,Z,S,H,v),W!==0&&Kt("failed to call OrtRun().");let Y=[],q=[];oa("wasm ProcessOutputTensor");for(let j=0;j<S;j++){let X=Number(l.getValue(H+j*u,"*"));if(X===R[j]||A.includes(R[j])){Y.push(r[j]),X!==R[j]&&l._OrtReleaseTensor(X)!==0&&Kt("Can't release tensor.");continue}let ce=l.stackSave(),be=l.stackAlloc(4*u),de=!1,$,ye=0;try{l._OrtGetTensorData(X,be,be+u,be+2*u,be+3*u)!==0&&Kt(`Can't access output tensor data on index ${j}.`);let et=u===4?"i32":"i64",Je=Number(l.getValue(be,et));ye=l.getValue(be+u,"*");let Dt=l.getValue(be+u*2,"*"),mt=Number(l.getValue(be+u*3,et)),Ee=[];for(let Pe=0;Pe<mt;Pe++)Ee.push(Number(l.getValue(Dt+Pe*u,et)));l._OrtFree(Dt)!==0&&Kt("Can't free memory for tensor dims.");let se=Ee.reduce((Pe,Ge)=>Pe*Ge,1);$=Vc(Je);let fe=p?.outputPreferredLocations[i[j]];if($==="string"){if(fe==="gpu-buffer"||fe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Pe=[];for(let Ge=0;Ge<se;Ge++){let we=l.getValue(ye+Ge*u,"*"),gt=l.getValue(ye+(Ge+1)*u,"*"),Qt=Ge===se-1?void 0:gt-we;Pe.push(l.UTF8ToString(we,Qt))}Y.push([$,Ee,Pe,"cpu"])}else if(fe==="gpu-buffer"&&se>0){let Pe=l.jsepGetBuffer;if(!Pe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ge=Pe(ye),we=ra(Je,se);if(we===void 0||!bd($))throw new Error(`Unsupported data type: ${$}`);de=!0,Y.push([$,Ee,{gpuBuffer:Ge,download:l.jsepCreateDownloader(Ge,we,$),dispose:()=>{l._OrtReleaseTensor(X)!==0&&Kt("Can't release tensor.")}},"gpu-buffer"])}else if(fe==="ml-tensor"&&se>0){let Pe=l.webnnEnsureTensor,Ge=l.webnnIsGraphInputOutputTypeSupported;if(!Pe||!Ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ra(Je,se)===void 0||!Sd($))throw new Error(`Unsupported data type: ${$}`);if(!Ge(n,$,!1))throw new Error(`preferredLocation "ml-tensor" for ${$} output is not supported by current WebNN Context.`);let we=await Pe(n,ye,Je,Ee,!1);de=!0,Y.push([$,Ee,{mlTensor:we,download:l.webnnCreateMLTensorDownloader(ye,$),dispose:()=>{l.webnnReleaseTensorId(ye),l._OrtReleaseTensor(X)}},"ml-tensor"])}else if(fe==="ml-tensor-cpu-output"&&se>0){let Pe=l.webnnCreateMLTensorDownloader(ye,$)(),Ge=Y.length;de=!0,q.push((async()=>{let we=[Ge,await Pe];return l.webnnReleaseTensorId(ye),l._OrtReleaseTensor(X),we})()),Y.push([$,Ee,[],"cpu"])}else{let Pe=ng($),Ge=new Pe(se);new Uint8Array(Ge.buffer,Ge.byteOffset,Ge.byteLength).set(l.HEAPU8.subarray(ye,ye+Ge.byteLength)),Y.push([$,Ee,Ge,"cpu"])}}finally{l.stackRestore(ce),$==="string"&&ye&&l._free(ye),de||l._OrtReleaseTensor(X)}}p&&!y&&(l._OrtClearBoundOutputs(p.handle)!==0&&Kt("Can't clear bound outputs."),Jr.set(n,[d,m,_,p,y,!1]));for(let[j,X]of await Promise.all(q))Y[j][2]=X;return la("wasm ProcessOutputTensor"),Y}finally{l.webnnOnRunEnd?.(d),l.stackRestore(O),k.forEach(W=>l._OrtReleaseTensor(W)),R.forEach(W=>l._OrtReleaseTensor(W)),D.forEach(W=>l._free(W)),v!==0&&l._OrtReleaseRunOptions(v),U.forEach(W=>l._free(W))}},Rd=n=>{let e=on(),t=Jr.get(n);if(!t)throw new Error("invalid session id");let i=t[0],r=e._OrtEndProfiling(i);r===0&&Kt("Can't get an profile file name."),e._OrtFree(r)},Pd=n=>{let e=[];for(let t of n){let i=t[2];!Array.isArray(i)&&"buffer"in i&&e.push(i.buffer)}return e}}),Pr,vi,na,co,uo,kc,ld,zc,Kr,Qr,Am,lg,cg,ug,hg,dg,fg,pg,mg=Ht(()=>{"use strict";ts(),og(),ca(),vd(),Pr=()=>!!sn.wasm.proxy&&typeof document<"u",na=!1,co=!1,uo=!1,zc=new Map,Kr=(n,e)=>{let t=zc.get(n);t?t.push(e):zc.set(n,[e])},Qr=()=>{if(na||!co||uo||!vi)throw new Error("worker not ready")},Am=n=>{switch(n.data.type){case"init-wasm":na=!1,n.data.err?(uo=!0,ld[1](n.data.err)):(co=!0,ld[0]()),kc&&(URL.revokeObjectURL(kc),kc=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=zc.get(n.data.type);n.data.err?e.shift()[1](n.data.err):e.shift()[0](n.data.out);break}default:}},lg=async()=>{if(!co){if(na)throw new Error("multiple calls to 'initWasm()' detected.");if(uo)throw new Error("previous call to 'initWasm()' failed.");if(na=!0,Pr())return new Promise((n,e)=>{vi?.terminate(),Km().then(([t,i])=>{try{vi=i,vi.onerror=o=>e(o),vi.onmessage=Am,ld=[n,e];let r={type:"init-wasm",in:sn};!r.in.wasm.wasmPaths&&(t||dd)&&(r.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.wasm",import.meta.url).href}),vi.postMessage(r),kc=t}catch(r){e(r)}},e)});try{await yd(sn.wasm),await Md(sn),co=!0}catch(n){throw uo=!0,n}finally{na=!1}}},cg=async n=>{if(Pr())return Qr(),new Promise((e,t)=>{Kr("init-ep",[e,t]);let i={type:"init-ep",in:{epName:n,env:sn}};vi.postMessage(i)});await Ed(sn,n)},ug=async n=>Pr()?(Qr(),new Promise((e,t)=>{Kr("copy-from",[e,t]);let i={type:"copy-from",in:{buffer:n}};vi.postMessage(i,[n.buffer])})):Wc(n),hg=async(n,e)=>{if(Pr()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Qr(),new Promise((t,i)=>{Kr("create",[t,i]);let r={type:"create",in:{model:n,options:{...e}}},o=[];n instanceof Uint8Array&&o.push(n.buffer),vi.postMessage(r,o)})}else return Td(n,e)},dg=async n=>{if(Pr())return Qr(),new Promise((e,t)=>{Kr("release",[e,t]);let i={type:"release",in:n};vi.postMessage(i)});Ad(n)},fg=async(n,e,t,i,r,o)=>{if(Pr()){if(t.some(l=>l[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(r.some(l=>l))throw new Error("pre-allocated output tensor is not supported for proxy.");return Qr(),new Promise((l,u)=>{Kr("run",[l,u]);let h=t,d={type:"run",in:{sessionId:n,inputIndices:e,inputs:h,outputIndices:i,options:o}};vi.postMessage(d,Pd(h))})}else return Cd(n,e,t,i,r,o)},pg=async n=>{if(Pr())return Qr(),new Promise((e,t)=>{Kr("end-profiling",[e,t]);let i={type:"end-profiling",in:n};vi.postMessage(i)});Rd(n)}}),cd,Cm,gg,BT=Ht(()=>{"use strict";ts(),mg(),sg(),_d(),ag(),cd=(n,e)=>{switch(n.location){case"cpu":return[n.type,n.dims,n.data,"cpu"];case"gpu-buffer":return[n.type,n.dims,{gpuBuffer:n.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[n.type,n.dims,{mlTensor:n.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${n.location} for ${e()}`)}},Cm=n=>{switch(n[3]){case"cpu":return new yi(n[0],n[2],n[1]);case"gpu-buffer":{let e=n[0];if(!bd(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:t,download:i,dispose:r}=n[2];return yi.fromGpuBuffer(t,{dataType:e,dims:n[1],download:i,dispose:r})}case"ml-tensor":{let e=n[0];if(!Sd(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:t,download:i,dispose:r}=n[2];return yi.fromMLTensor(t,{dataType:e,dims:n[1],download:i,dispose:r})}default:throw new Error(`invalid data location: ${n[3]}`)}},gg=class{async fetchModelAndCopyToWasmMemory(n){return ug(await wd(n))}async loadModel(n,e){sa();let t;typeof n=="string"?t=await this.fetchModelAndCopyToWasmMemory(n):t=n,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await hg(t,e),aa()}async dispose(){return dg(this.sessionId)}async run(n,e,t){sa();let i=[],r=[];Object.entries(n).forEach(_=>{let p=_[0],y=_[1],E=this.inputNames.indexOf(p);if(E===-1)throw new Error(`invalid input '${p}'`);i.push(y),r.push(E)});let o=[],l=[];Object.entries(e).forEach(_=>{let p=_[0],y=_[1],E=this.outputNames.indexOf(p);if(E===-1)throw new Error(`invalid output '${p}'`);o.push(y),l.push(E)});let u=i.map((_,p)=>cd(_,()=>`input "${this.inputNames[r[p]]}"`)),h=o.map((_,p)=>_?cd(_,()=>`output "${this.outputNames[l[p]]}"`):null),d=await fg(this.sessionId,r,u,l,h,t),m={};for(let _=0;_<d.length;_++)m[this.outputNames[l[_]]]=o[_]??Cm(d[_]);return aa(),m}startProfiling(){}endProfiling(){pg(this.sessionId)}}}),_g={};Xc(_g,{OnnxruntimeWebAssemblyBackend:()=>pd,initializeFlags:()=>fd,wasmBackend:()=>vg});var fd,pd,vg,kT=Ht(()=>{"use strict";ts(),mg(),BT(),fd=()=>{(typeof sn.wasm.initTimeout!="number"||sn.wasm.initTimeout<0)&&(sn.wasm.initTimeout=0);let n=sn.wasm.simd;if(typeof n!="boolean"&&n!==void 0&&n!=="fixed"&&n!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${n}". Reset it to \`false\` and ignore SIMD feature checking.`),sn.wasm.simd=!1),typeof sn.wasm.proxy!="boolean"&&(sn.wasm.proxy=!1),typeof sn.wasm.trace!="boolean"&&(sn.wasm.trace=!1),typeof sn.wasm.numThreads!="number"||!Number.isInteger(sn.wasm.numThreads)||sn.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)sn.wasm.numThreads=1;else{let e=typeof navigator>"u"?vT("node:os").cpus().length:navigator.hardwareConcurrency;sn.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},pd=class{async init(n){fd(),await lg(),await cg(n)}async createInferenceSessionHandler(n,e){let t=new gg;return await t.loadModel(n,e),t}},vg=new pd});ts();ts();ts();var zT="1.29.0";{let n=(kT(),ud(_g)).wasmBackend;Gc("cpu",n,10),Gc("wasm",n,10)}Object.defineProperty(sn.versions,"web",{value:zT,enumerable:!0});var yg=4;sn.wasm.numThreads=1;sn.wasm.wasmPaths=new URL("./ort/",import.meta.url).href;function fo(n,e){let t=0,i=0;for(;;){let r=n[e++];if(t+=(r&127)*2**i,i+=7,(r&128)===0)return[t,e]}}function GT(n){let e={},t=new TextDecoder,i=0;for(;i<n.length;){let r;[r,i]=fo(n,i);let o=r>>>3,l=r&7;if(l===2){let u;if([u,i]=fo(n,i),o===14){let h=n.subarray(i,i+u),d=0,m="",_="";for(;d<h.length;){let p;[p,d]=fo(h,d);let y;[y,d]=fo(h,d);let E=t.decode(h.subarray(d,d+y));d+=y,p>>>3===1?m=E:p>>>3===2&&(_=E)}m&&(e[m]=_)}i+=u}else if(l===0)[,i]=fo(n,i);else if(l===5)i+=4;else if(l===1)i+=8;else throw new Error(`unsupported protobuf wire type ${l} in ONNX header`)}return e}async function HT(n){let e=await fetch(n);if(!e.ok)throw new Error(`Failed to fetch ${n}: ${e.status}`);return e.json()}async function xg(n){let e=await HT(n);if(!Array.isArray(e))throw new Error(`${n} is not a list of policies`);return e.map(t=>({...t,url:new URL(t.file,new URL(n,location.href)).href}))}async function bg(n){let e=await fetch(n.url);if(!e.ok)throw new Error(`Failed to fetch ${n.url}: ${e.status}`);let t=new Uint8Array(await e.arrayBuffer()),i=GT(t);um(i.obs_order?JSON.parse(i.obs_order):null,n.id);let r=Number(i.action_scale);if(!(r>0))throw new Error(`${n.id}: ONNX action_scale is ${i.action_scale}`);if(n.action_scale!==void 0&&Math.abs(n.action_scale-r)>1e-12)throw new Error(`${n.id}: manifest action_scale ${n.action_scale} != ONNX ${r}`);return{session:await $c.create(t,{executionProviders:["wasm"]}),actionScale:r,envVersion:i.env_version,trainCommit:i.train_commit}}async function Sg(n,e){if(e.length!==ta)throw new Error(`expected ${ta} observations, got ${e.length}`);let t=n.inputNames[0],i=n.outputNames[0],o=(await n.run({[t]:new yi("float32",e,[1,ta])}))[i].data;if(o.length!==yg)throw new Error(`expected ${yg} action dims, got ${o.length}`);return o}var Id="./model",WT="./policies/manifest.json",Ud="pick_scene.xml",wg="so101_new_calib.xml",Ld=["base_motor_holder_so101_v1.stl","base_so101_v2.stl","motor_holder_so101_base_v1.stl","motor_holder_so101_wrist_v1.stl","moving_jaw_so101_v1.stl","rotation_pitch_so101_v1.stl","sts3215_03a_no_horn_v1.stl","sts3215_03a_v1.stl","under_arm_so101_v1.stl","upper_arm_so101_v1.stl","waveshare_mounting_plate_so101_v2.stl","wrist_roll_follower_so101_v1.stl","wrist_roll_pitch_so101_v2.stl"],Dd=.002,Mg=25,ua=[[.2,-.1],[.4,.1]],XT=2e3,Fd=ea.indexOf("ee_x"),Nd=ea.indexOf("block_x"),$T=document.getElementById("loading-overlay"),qT=document.getElementById("loading-text"),Eg=document.getElementById("error-banner"),ns=document.getElementById("viewport");function qc(n){qT.textContent=n}function po(n,e){console.error(n,e),Eg.textContent=`${n}${e?`: ${e.message||e}`:""}`,Eg.style.display="block"}async function Tg(n){let e=await fetch(n);if(!e.ok)throw new Error(`Failed to fetch ${n}: ${e.status}`);return e.text()}async function YT(n){let e=await fetch(n);if(!e.ok)throw new Error(`Failed to fetch ${n}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}async function jT(n){n.FS.mkdirTree("/model/assets");let[e,t]=await Promise.all([Tg(`${Id}/${Ud}`),Tg(`${Id}/${wg}`)]);n.FS.writeFile(`/model/${Ud}`,e),n.FS.writeFile(`/model/${wg}`,t),qc(`Loading meshes (0/${Ld.length})\u2026`);let i=0;await Promise.all(Ld.map(async r=>{let o=await YT(`${Id}/assets/${r}`);n.FS.writeFile(`/model/assets/${r}`,o),i+=1,qc(`Loading meshes (${i}/${Ld.length})\u2026`)}))}function ZT(){let n=new Rc({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(ns.clientWidth,ns.clientHeight),n.outputColorSpace=Vn,ns.appendChild(n.domElement);let e=new Fa;e.background=new At(1119514);let t=new Fn(45,ns.clientWidth/ns.clientHeight,.01,50);t.position.set(.9,.7,.9);let i=new Ri;i.rotation.x=-Math.PI/2,e.add(i);let r=new Xa(16777215,2236962,1);e.add(r);let o=new qa(16777215,2);o.position.set(2,4,3),e.add(o);let l=new Dc(t,n.domElement);l.target.set(.15,.15,0),l.enableDamping=!0,l.dampingFactor=.08,l.update();function u(){let h=ns.clientWidth,d=ns.clientHeight;t.aspect=h/d,t.updateProjectionMatrix(),n.setSize(h,d)}return window.addEventListener("resize",u),{renderer:n,scene:e,camera:t,world:i,controls:l}}async function JT(){let n;try{qc("Loading MuJoCo (~10MB WebAssembly)\u2026"),n=await Jp()}catch(Ee){po("Failed to load MuJoCo WASM module",Ee);return}try{await jT(n)}catch(Ee){po("Failed to fetch model assets",Ee);return}qc("Compiling model\u2026");let e,t;try{e=n.MjModel.from_xml_path(`/model/${Ud}`),t=new n.MjData(e)}catch(Ee){po("Failed to load MJCF model",Ee);return}let{renderer:i,scene:r,camera:o,world:l,controls:u}=ZT(),{root:h,geomMeshes:d}=nm(n,e);l.add(h);let m=Nc(n,e,t,{actionScale:1}),_=cm(n,e),p=e.jnt_qposadr[ei(n,e,"mjOBJ_JOINT",qh)],y=e.jnt_dofadr[ei(n,e,"mjOBJ_JOINT",qh)],E=e.geom_size[ei(n,e,"mjOBJ_GEOM",lm)*3+2],F=[.3,0];function S(Ee){F=Ee,t.qpos[p]=Ee[0],t.qpos[p+1]=Ee[1],t.qpos[p+2]=E,t.qpos[p+3]=1;for(let se=4;se<7;se++)t.qpos[p+se]=0;for(let se=0;se<6;se++)t.qvel[y+se]=0;n.mj_forward(e,t)}function v(Ee=F){Z+=1,H=!1,m.reset(),S(Ee),W=Fc,ce.syncSlidersFromCtrl()}let U=document.getElementById("joint-list"),k=document.getElementById("btn-pause"),R=document.getElementById("btn-reset"),D=document.getElementById("status-line"),A=document.getElementById("policy-select"),O=document.getElementById("btn-randomize-block"),T=!1,N=null,H=!1,Z=0,W=Fc,Y=0,q=0,j=0,X=performance.now(),ce=rm({mujoco:n,model:e,data:t,jointListEl:U,pauseBtn:k,resetBtn:R,statusLineEl:D,policySelectEl:A,randomizeBtn:O,onReset:()=>v(),onRandomizeBlock:()=>v([ua[0][0]+Math.random()*(ua[1][0]-ua[0][0]),ua[0][1]+Math.random()*(ua[1][1]-ua[0][1])]),onSelectPolicy:Ee=>{$(Ee).catch(se=>po("Failed to load policy",se))},onTogglePause:Ee=>{T=Ee}}),be=`${e.ngeom} geoms \xB7 ${e.nu} actuators \xB7 timestep ${Dd}s`;ce.setStatus(be);function de(){N=null,H=!1,m=Nc(n,e,t,{actionScale:1}),ce.clearPolicySelection(),ce.setSlidersEnabled(!0),ce.setStatus(be)}async function $(Ee){let se=++Z;if(N=null,H=!1,Y=0,q=0,!Ee){de();return}ce.setSlidersEnabled(!1),ce.setStatus(`Loading ${Ee.name}\u2026`);let fe;try{fe=await bg(Ee)}catch(Pe){throw se===Z&&de(),Pe}se===Z&&(m=Nc(n,e,t,{actionScale:fe.actionScale}),N={...fe,name:Ee.name},v(),ce.setStatus(`${Ee.name} \xB7 action_scale ${fe.actionScale} \xB7 env ${fe.envVersion}`),console.log(`[policy] ${Ee.name} loaded (train_commit ${fe.trainCommit}, action_scale ${fe.actionScale})`))}try{ce.setPolicies(await xg(WT))}catch(Ee){console.warn("No policies available",Ee)}v(),$T.classList.add("hidden");function ye(){let Ee=Yh(n,e,t,_);return Math.hypot(Ee[Nd]-Ee[Fd],Ee[Nd+1]-Ee[Fd+1],Ee[Nd+2]-Ee[Fd+2])}function et(){H=!0;let Ee=Yh(n,e,t,_),se=performance.now(),fe=N,Pe=Z,Ge=()=>N!==fe||Pe!==Z;Sg(fe.session,Ee).then(we=>{Ge()||T||(q+=performance.now()-se,Y+=1,m.applyAction(we),W=0,ce.syncSlidersFromCtrl())}).catch(we=>{po("Policy inference failed",we),Ge()||de()}).finally(()=>{Ge()||(H=!1)})}function Je(Ee){let se=(Ee-X)/1e3,fe=j/se,Pe=Y>0?q/Y:0;console.log(`[policy] ${N.name} \xB7 inference ${Pe.toFixed(2)} ms (mean of ${Y}) \xB7 ${fe.toFixed(1)} fps \xB7 ee\u2192block ${ye().toFixed(4)} m`),j=0,X=Ee}let Dt=performance.now();function mt(){requestAnimationFrame(mt);let Ee=performance.now(),se=(Ee-Dt)/1e3;if(Dt=Ee,j+=1,!T){se=Math.min(se,Mg*Dd);let fe=Math.min(Math.round(se/Dd),Mg);if(N)for(;fe>0&&!H;){if(W>=Fc){et();break}n.mj_step(e,t),W+=1,fe-=1}else for(let Pe=0;Pe<fe;Pe++)n.mj_step(e,t)}N&&Ee-X>=XT&&Je(Ee),im(t,d),u.update(),i.render(r,o)}requestAnimationFrame(mt),window.addEventListener("beforeunload",()=>{t.delete(),e.delete()})}JT();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

onnxruntime-web/dist/ort.wasm.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.29.0
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)
*/
