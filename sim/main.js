var K_=Object.defineProperty;var Q_=(i,e,t)=>e in i?K_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Wn=(i,e,t)=>Q_(i,typeof e!="symbol"?e+"":e,t);var Oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ou=0,jl=1,lu=2;var ws=1,cu=2,Br=3,oi=0,_n=1,On=2,li=0,kr=1,Zl=2,Jl=3,Kl=4,hu=5;var tr=100,uu=101,du=102,fu=103,pu=104,mu=200,gu=201,_u=202,vu=203,Ql=204,ec=205,yu=206,xu=207,Su=208,Mu=209,bu=210,Eu=211,wu=212,Tu=213,Au=214,Aa=0,Ca=1,Ra=2,Tr=3,Pa=4,Ia=5,Da=6,La=7,tc=0,Cu=1,Ru=2,Jn=0,nc=1,ic=2,rc=3,sc=4,ac=5,oc=6,lc=7;var cc=300,ki=301,nr=302,so=303,ao=304,Ts=306,Fa=1e3,si=1001,Na=1002,tn=1003,Pu=1004;var As=1005;var nn=1006,oo=1007;var zi=1008;var Mn=1009,hc=1010,uc=1011,zr=1012,lo=1013,Kn=1014,Qn=1015,ei=1016,co=1017,ho=1018,Vr=1020,dc=35902,fc=35899,pc=1021,mc=1022,Bn=1023,ai=1026,Vi=1027,gc=1028,uo=1029,Gi=1030,fo=1031;var po=1033,Cs=33776,Rs=33777,Ps=33778,Is=33779,mo=35840,go=35841,_o=35842,vo=35843,yo=36196,xo=37492,So=37496,Mo=37488,bo=37489,Ds=37490,Eo=37491,wo=37808,To=37809,Ao=37810,Co=37811,Ro=37812,Po=37813,Io=37814,Do=37815,Lo=37816,Fo=37817,No=37818,Uo=37819,Oo=37820,Bo=37821,ko=36492,zo=36494,Vo=36495,Go=36283,Ho=36284,Ls=36285,Wo=36286;var rs=2300,Ua=2301,wa=2302,Gl=2303,Hl=2400,Wl=2401,Xl=2402;var Iu=3200;var Xo=0,Du=1,yi="",fn="srgb",ss="srgb-linear",as="linear",Pt="srgb";var Ta=7680;var Lu=519,Fu=512,Nu=513,Uu=514,$o=515,Ou=516,Bu=517,qo=518,ku=519,zu=35044;var _c="300 es",Yn=2e3,Ar=2001;function e0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function t0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){let i=os("canvas");return i.style.display="block",i}var kh={},Cr=null;function vc(...i){let e="THREE."+i.shift();Cr?Cr("log",e,...i):console.log(e,...i)}function Gu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=Gu(i);let e="THREE."+i.shift();if(Cr)Cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=Gu(i);let e="THREE."+i.shift();if(Cr)Cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Qi(...i){let e=i.join(" ");e in kh||(kh[e]=!0,et(...i))}function Hu(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var Wu={[Aa]:Ca,[Ra]:Da,[Pa]:La,[Tr]:Ia,[Ca]:Aa,[Da]:Ra,[La]:Pa,[Ia]:Tr},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=1234567,ns=Math.PI/180,Rr=180/Math.PI;function Gr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function yc(i,e){return(i%e+e)%e}function n0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function i0(i,e,t){return i!==e?(t-i)/(e-i):0}function is(i,e,t){return(1-t)*i+t*e}function r0(i,e,t,n){return is(i,e,1-Math.exp(-t*n))}function s0(i,e=1){return e-Math.abs(yc(i,e*2)-e)}function a0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function l0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function c0(i,e){return i+Math.random()*(e-i)}function h0(i){return i*(.5-Math.random())}function u0(i){i!==void 0&&(zh=i);let e=zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d0(i){return i*ns}function f0(i){return i*Rr}function p0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function m0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _0(i,e,t,n,s){let o=Math.cos,c=Math.sin,u=o(t/2),d=c(t/2),f=o((e+n)/2),g=c((e+n)/2),y=o((e-n)/2),m=c((e-n)/2),x=o((n-e)/2),T=c((n-e)/2);switch(s){case"XYX":i.set(u*g,d*y,d*m,u*f);break;case"YZY":i.set(d*m,u*g,d*y,u*f);break;case"ZXZ":i.set(d*y,d*m,u*g,u*f);break;case"XZX":i.set(u*g,d*T,d*x,u*f);break;case"YXY":i.set(d*x,u*g,d*T,u*f);break;case"ZYZ":i.set(d*T,d*x,u*g,u*f);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Er(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xc={DEG2RAD:ns,RAD2DEG:Rr,generateUUID:Gr,clamp:gt,euclideanModulo:yc,mapLinear:n0,inverseLerp:i0,lerp:is,damp:r0,pingpong:s0,smoothstep:a0,smootherstep:o0,randInt:l0,randFloat:c0,randFloatSpread:h0,seededRandom:u0,degToRad:d0,radToDeg:f0,isPowerOfTwo:p0,ceilPowerOfTwo:m0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:_0,normalize:dn,denormalize:Er},wc=class wc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*s+e.x,this.y=o*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wc.prototype.isVector2=!0;var it=wc,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,c,u){let d=n[s+0],f=n[s+1],g=n[s+2],y=n[s+3],m=o[c+0],x=o[c+1],T=o[c+2],I=o[c+3];if(y!==I||d!==m||f!==x||g!==T){let M=d*m+f*x+g*T+y*I;M<0&&(m=-m,x=-x,T=-T,I=-I,M=-M);let _=1-u;if(M<.9995){let N=Math.acos(M),k=Math.sin(N);_=Math.sin(_*N)/k,u=Math.sin(u*N)/k,d=d*_+m*u,f=f*_+x*u,g=g*_+T*u,y=y*_+I*u}else{d=d*_+m*u,f=f*_+x*u,g=g*_+T*u,y=y*_+I*u;let N=1/Math.sqrt(d*d+f*f+g*g+y*y);d*=N,f*=N,g*=N,y*=N}}e[t]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,n,s,o,c){let u=n[s],d=n[s+1],f=n[s+2],g=n[s+3],y=o[c],m=o[c+1],x=o[c+2],T=o[c+3];return e[t]=u*T+g*y+d*x-f*m,e[t+1]=d*T+g*m+f*y-u*x,e[t+2]=f*T+g*x+u*m-d*y,e[t+3]=g*T-u*y-d*m-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(n/2),g=u(s/2),y=u(o/2),m=d(n/2),x=d(s/2),T=d(o/2);switch(c){case"XYZ":this._x=m*g*y+f*x*T,this._y=f*x*y-m*g*T,this._z=f*g*T+m*x*y,this._w=f*g*y-m*x*T;break;case"YXZ":this._x=m*g*y+f*x*T,this._y=f*x*y-m*g*T,this._z=f*g*T-m*x*y,this._w=f*g*y+m*x*T;break;case"ZXY":this._x=m*g*y-f*x*T,this._y=f*x*y+m*g*T,this._z=f*g*T+m*x*y,this._w=f*g*y-m*x*T;break;case"ZYX":this._x=m*g*y-f*x*T,this._y=f*x*y+m*g*T,this._z=f*g*T-m*x*y,this._w=f*g*y+m*x*T;break;case"YZX":this._x=m*g*y+f*x*T,this._y=f*x*y+m*g*T,this._z=f*g*T-m*x*y,this._w=f*g*y-m*x*T;break;case"XZY":this._x=m*g*y-f*x*T,this._y=f*x*y-m*g*T,this._z=f*g*T+m*x*y,this._w=f*g*y+m*x*T;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],o=t[8],c=t[1],u=t[5],d=t[9],f=t[2],g=t[6],y=t[10],m=n+u+y;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-d)*x,this._y=(o-f)*x,this._z=(c-s)*x}else if(n>u&&n>y){let x=2*Math.sqrt(1+n-u-y);this._w=(g-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(o+f)/x}else if(u>y){let x=2*Math.sqrt(1+u-n-y);this._w=(o-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+g)/x}else{let x=2*Math.sqrt(1+y-n-u);this._w=(c-s)/x,this._x=(o+f)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,o=e._z,c=e._w,u=t._x,d=t._y,f=t._z,g=t._w;return this._x=n*g+c*u+s*f-o*d,this._y=s*g+c*d+o*u-n*f,this._z=o*g+c*f+n*d-s*u,this._w=c*g-n*u-s*d-o*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(n=-n,s=-s,o=-o,c=-c,u=-u);let d=1-t;if(u<.9995){let f=Math.acos(u),g=Math.sin(f);d=Math.sin(d*f)/g,t=Math.sin(t*f)/g,this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tc=class Tc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*c,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,o=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*s-u*n),g=2*(u*t-o*s),y=2*(o*n-c*t);return this.x=t+d*f+c*y-u*g,this.y=n+d*g+u*f-o*y,this.z=s+d*y+o*g-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,o=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-o*u,this.y=o*c-n*d,this.z=n*u-s*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tc.prototype.isVector3=!0;var Z=Tc,Sl=new Z,Vh=new mn,Ac=class Ac{constructor(e,t,n,s,o,c,u,d,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,c,u,d,f)}set(e,t,n,s,o,c,u,d,f){let g=this.elements;return g[0]=e,g[1]=s,g[2]=u,g[3]=t,g[4]=o,g[5]=d,g[6]=n,g[7]=c,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,o=this.elements,c=n[0],u=n[3],d=n[6],f=n[1],g=n[4],y=n[7],m=n[2],x=n[5],T=n[8],I=s[0],M=s[3],_=s[6],N=s[1],k=s[4],R=s[7],P=s[2],D=s[5],O=s[8];return o[0]=c*I+u*N+d*P,o[3]=c*M+u*k+d*D,o[6]=c*_+u*R+d*O,o[1]=f*I+g*N+y*P,o[4]=f*M+g*k+y*D,o[7]=f*_+g*R+y*O,o[2]=m*I+x*N+T*P,o[5]=m*M+x*k+T*D,o[8]=m*_+x*R+T*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],u=e[5],d=e[6],f=e[7],g=e[8];return t*c*g-t*u*f-n*o*g+n*u*d+s*o*f-s*c*d}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],u=e[5],d=e[6],f=e[7],g=e[8],y=g*c-u*f,m=u*d-g*o,x=f*o-c*d,T=t*y+n*m+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=y*I,e[1]=(s*f-g*n)*I,e[2]=(u*n-s*c)*I,e[3]=m*I,e[4]=(g*t-s*d)*I,e[5]=(s*o-u*t)*I,e[6]=x*I,e[7]=(n*d-f*t)*I,e[8]=(c*t-n*o)*I,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,c,u){let d=Math.cos(o),f=Math.sin(o);return this.set(n*d,n*f,-n*(d*c+f*u)+c+e,-s*f,s*d,-s*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ac.prototype.isMatrix3=!0;var st=Ac,Ml=new st,Gh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function v0(){let i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Pt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?as:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:e,whitePoint:n,transfer:as,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var yt=v0();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ur,Oa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=os("canvas")),ur.width=e.width,ur.height=e.height;let s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ur}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=_i(o[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,Pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(bl(s[c].image)):o.push(bl(s[c]))}else o=bl(s);n.url=o}return t||(e.images[this.uuid]=n),n}};function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var x0=0,El=new Z,yn=class i extends Zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,o=nn,c=zi,u=Bn,d=Mn,f=i.DEFAULT_ANISOTROPY,g=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Gr(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=cc;yn.DEFAULT_ANISOTROPY=1;var Cc=class Cc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o,d=e.elements,f=d[0],g=d[4],y=d[8],m=d[1],x=d[5],T=d[9],I=d[2],M=d[6],_=d[10];if(Math.abs(g-m)<.01&&Math.abs(y-I)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+m)<.1&&Math.abs(y+I)<.1&&Math.abs(T+M)<.1&&Math.abs(f+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let k=(f+1)/2,R=(x+1)/2,P=(_+1)/2,D=(g+m)/4,O=(y+I)/4,w=(T+M)/4;return k>R&&k>P?k<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(k),s=D/n,o=O/n):R>P?R<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(R),n=D/s,o=w/s):P<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(P),n=O/o,s=w/o),this.set(n,s,o,t),this}let N=Math.sqrt((M-T)*(M-T)+(y-I)*(y-I)+(m-g)*(m-g));return Math.abs(N)<.001&&(N=1),this.x=(M-T)/N,this.y=(y-I)/N,this.z=(m-g)/N,this.w=Math.acos((f+x+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cc.prototype.isVector4=!0;var Vt=Cc,Ba=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},o=new yn(s),c=n.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ls=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ro=class ro{constructor(e,t,n,s,o,c,u,d,f,g,y,m,x,T,I,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,c,u,d,f,g,y,m,x,T,I,M)}set(e,t,n,s,o,c,u,d,f,g,y,m,x,T,I,M){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=o,_[5]=c,_[9]=u,_[13]=d,_[2]=f,_[6]=g,_[10]=y,_[14]=m,_[3]=x,_[7]=T,_[11]=I,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ro().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),o=1/dr.setFromMatrixColumn(e,1).length(),c=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,o=e.z,c=Math.cos(n),u=Math.sin(n),d=Math.cos(s),f=Math.sin(s),g=Math.cos(o),y=Math.sin(o);if(e.order==="XYZ"){let m=c*g,x=c*y,T=u*g,I=u*y;t[0]=d*g,t[4]=-d*y,t[8]=f,t[1]=x+T*f,t[5]=m-I*f,t[9]=-u*d,t[2]=I-m*f,t[6]=T+x*f,t[10]=c*d}else if(e.order==="YXZ"){let m=d*g,x=d*y,T=f*g,I=f*y;t[0]=m+I*u,t[4]=T*u-x,t[8]=c*f,t[1]=c*y,t[5]=c*g,t[9]=-u,t[2]=x*u-T,t[6]=I+m*u,t[10]=c*d}else if(e.order==="ZXY"){let m=d*g,x=d*y,T=f*g,I=f*y;t[0]=m-I*u,t[4]=-c*y,t[8]=T+x*u,t[1]=x+T*u,t[5]=c*g,t[9]=I-m*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){let m=c*g,x=c*y,T=u*g,I=u*y;t[0]=d*g,t[4]=T*f-x,t[8]=m*f+I,t[1]=d*y,t[5]=I*f+m,t[9]=x*f-T,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){let m=c*d,x=c*f,T=u*d,I=u*f;t[0]=d*g,t[4]=I-m*y,t[8]=T*y+x,t[1]=y,t[5]=c*g,t[9]=-u*g,t[2]=-f*g,t[6]=x*y+T,t[10]=m-I*y}else if(e.order==="XZY"){let m=c*d,x=c*f,T=u*d,I=u*f;t[0]=d*g,t[4]=-y,t[8]=f*g,t[1]=m*y+I,t[5]=c*g,t[9]=x*y-T,t[2]=T*y-x,t[6]=u*g,t[10]=I*y+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,M0)}lookAt(e,t,n){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Ei.crossVectors(n,An),Ei.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ei.crossVectors(n,An)),Ei.normalize(),aa.crossVectors(An,Ei),s[0]=Ei.x,s[4]=aa.x,s[8]=An.x,s[1]=Ei.y,s[5]=aa.y,s[9]=An.y,s[2]=Ei.z,s[6]=aa.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,o=this.elements,c=n[0],u=n[4],d=n[8],f=n[12],g=n[1],y=n[5],m=n[9],x=n[13],T=n[2],I=n[6],M=n[10],_=n[14],N=n[3],k=n[7],R=n[11],P=n[15],D=s[0],O=s[4],w=s[8],L=s[12],B=s[1],q=s[5],Y=s[9],J=s[13],H=s[2],te=s[6],z=s[10],se=s[14],_e=s[3],ae=s[7],V=s[11],ge=s[15];return o[0]=c*D+u*B+d*H+f*_e,o[4]=c*O+u*q+d*te+f*ae,o[8]=c*w+u*Y+d*z+f*V,o[12]=c*L+u*J+d*se+f*ge,o[1]=g*D+y*B+m*H+x*_e,o[5]=g*O+y*q+m*te+x*ae,o[9]=g*w+y*Y+m*z+x*V,o[13]=g*L+y*J+m*se+x*ge,o[2]=T*D+I*B+M*H+_*_e,o[6]=T*O+I*q+M*te+_*ae,o[10]=T*w+I*Y+M*z+_*V,o[14]=T*L+I*J+M*se+_*ge,o[3]=N*D+k*B+R*H+P*_e,o[7]=N*O+k*q+R*te+P*ae,o[11]=N*w+k*Y+R*z+P*V,o[15]=N*L+k*J+R*se+P*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],c=e[1],u=e[5],d=e[9],f=e[13],g=e[2],y=e[6],m=e[10],x=e[14],T=e[3],I=e[7],M=e[11],_=e[15],N=d*x-f*m,k=u*x-f*y,R=u*m-d*y,P=c*x-f*g,D=c*m-d*g,O=c*y-u*g;return t*(I*N-M*k+_*R)-n*(T*N-M*P+_*D)+s*(T*k-I*P+_*O)-o*(T*R-I*D+M*O)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],o=e[1],c=e[5],u=e[9],d=e[2],f=e[6],g=e[10];return t*(c*g-u*f)-n*(o*g-u*d)+s*(o*f-c*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],u=e[5],d=e[6],f=e[7],g=e[8],y=e[9],m=e[10],x=e[11],T=e[12],I=e[13],M=e[14],_=e[15],N=t*u-n*c,k=t*d-s*c,R=t*f-o*c,P=n*d-s*u,D=n*f-o*u,O=s*f-o*d,w=g*I-y*T,L=g*M-m*T,B=g*_-x*T,q=y*M-m*I,Y=y*_-x*I,J=m*_-x*M,H=N*J-k*Y+R*q+P*B-D*L+O*w;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let te=1/H;return e[0]=(u*J-d*Y+f*q)*te,e[1]=(s*Y-n*J-o*q)*te,e[2]=(I*O-M*D+_*P)*te,e[3]=(m*D-y*O-x*P)*te,e[4]=(d*B-c*J-f*L)*te,e[5]=(t*J-s*B+o*L)*te,e[6]=(M*R-T*O-_*k)*te,e[7]=(g*O-m*R+x*k)*te,e[8]=(c*Y-u*B+f*w)*te,e[9]=(n*B-t*Y-o*w)*te,e[10]=(T*D-I*R+_*N)*te,e[11]=(y*R-g*D-x*N)*te,e[12]=(u*L-c*q-d*w)*te,e[13]=(t*q-n*L+s*w)*te,e[14]=(I*k-T*P-M*N)*te,e[15]=(g*P-y*k+m*N)*te,this}scale(e){let t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),o=1-n,c=e.x,u=e.y,d=e.z,f=o*c,g=o*u;return this.set(f*c+n,f*u-s*d,f*d+s*u,0,f*u+s*d,g*u+n,g*d-s*c,0,f*d-s*u,g*d+s*c,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,c){return this.set(1,n,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,o=t._x,c=t._y,u=t._z,d=t._w,f=o+o,g=c+c,y=u+u,m=o*f,x=o*g,T=o*y,I=c*g,M=c*y,_=u*y,N=d*f,k=d*g,R=d*y,P=n.x,D=n.y,O=n.z;return s[0]=(1-(I+_))*P,s[1]=(x+R)*P,s[2]=(T-k)*P,s[3]=0,s[4]=(x-R)*D,s[5]=(1-(m+_))*D,s[6]=(M+N)*D,s[7]=0,s[8]=(T+k)*O,s[9]=(M-N)*O,s[10]=(1-(m+I))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let c=dr.set(s[0],s[1],s[2]).length(),u=dr.set(s[4],s[5],s[6]).length(),d=dr.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Xn.copy(this);let f=1/c,g=1/u,y=1/d;return Xn.elements[0]*=f,Xn.elements[1]*=f,Xn.elements[2]*=f,Xn.elements[4]*=g,Xn.elements[5]*=g,Xn.elements[6]*=g,Xn.elements[8]*=y,Xn.elements[9]*=y,Xn.elements[10]*=y,t.setFromRotationMatrix(Xn),n.x=c,n.y=u,n.z=d,this}makePerspective(e,t,n,s,o,c,u=Yn,d=!1){let f=this.elements,g=2*o/(t-e),y=2*o/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s),T,I;if(d)T=o/(c-o),I=c*o/(c-o);else if(u===Yn)T=-(c+o)/(c-o),I=-2*c*o/(c-o);else if(u===Ar)T=-c/(c-o),I=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=g,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=y,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=T,f[14]=I,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,o,c,u=Yn,d=!1){let f=this.elements,g=2/(t-e),y=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s),T,I;if(d)T=1/(c-o),I=c/(c-o);else if(u===Yn)T=-2/(c-o),I=-(c+o)/(c-o);else if(u===Ar)T=-1/(c-o),I=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=g,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=y,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=T,f[14]=I,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ro.prototype.isMatrix4=!0;var Bt=ro,dr=new Z,Xn=new Bt,S0=new Z(0,0,0),M0=new Z(1,1,1),Ei=new Z,aa=new Z,An=new Z,Wh=new Bt,Xh=new mn,vi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,o=s[0],c=s[4],u=s[8],d=s[1],f=s[5],g=s[9],y=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-y,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-gt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-g,x),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b0=0,$h=new Z,fr=new mn,di=new Bt,oa=new Z,Kr=new Z,E0=new Z,w0=new mn,qh=new Z(1,0,0),Yh=new Z(0,1,0),jh=new Z(0,0,1),Zh={type:"added"},T0={type:"removed"},pr={type:"childadded",child:null},wl={type:"childremoved",child:null},ln=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Z,t=new vi,n=new mn,s=new Z(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Kr,oa,this.up):di.lookAt(oa,Kr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(di),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),pr.child=e,this.dispatchEvent(pr),pr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T0),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,w0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let d=u.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){let y=d[f];o(e.shapes,y)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(e.materials,this.material[d]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){let d=this.animations[u];s.animations.push(o(e.animations,d))}}if(t){let u=c(e.geometries),d=c(e.materials),f=c(e.textures),g=c(e.images),y=c(e.shapes),m=c(e.skeletons),x=c(e.animations),T=c(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),g.length>0&&(n.images=g),y.length>0&&(n.shapes=y),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),T.length>0&&(n.nodes=T)}return n.object=s,n;function c(u){let d=[];for(let f in u){let g=u[f];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ln.DEFAULT_UP=new Z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},A0={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,c=null,u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(let I of e.hand.values()){let M=t.getJointPose(I,n),_=this._getHandJoint(f,I);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}let g=f.joints["index-finger-tip"],y=f.joints["thumb-tip"],m=g.position.distanceTo(y.position),x=.02,T=.005;f.inputState.pinching&&m>x+T?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=x-T&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},la={h:0,s:0,l:0};function Tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ut=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=yc(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=Tl(c,o,e+1/3),this.g=Tl(c,o,e),this.b=Tl(c,o,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(o){o!==void 0&&parseFloat(o)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return yt.workingToColorSpace(an.copy(this),e),Math.round(gt(an.r*255,0,255))*65536+Math.round(gt(an.g*255,0,255))*256+Math.round(gt(an.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(an.copy(this),t);let n=an.r,s=an.g,o=an.b,c=Math.max(n,s,o),u=Math.min(n,s,o),d,f,g=(u+c)/2;if(u===c)d=0,f=0;else{let y=c-u;switch(f=g<=.5?y/(c+u):y/(2-c-u),c){case n:d=(s-o)/y+(s<o?6:0);break;case s:d=(o-n)/y+2;break;case o:d=(n-s)/y+4;break}d/=6}return e.h=d,e.s=f,e.l=g,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=fn){yt.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(la);let n=is(wi.h,la.h,t),s=is(wi.s,la.s,t),o=is(wi.l,la.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new ut;ut.NAMES=Xu;var hs=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new Z,fi=new Z,Al=new Z,pi=new Z,mr=new Z,gr=new Z,Jh=new Z,Cl=new Z,Rl=new Z,Pl=new Z,Il=new Vt,Dl=new Vt,Ll=new Vt,Ri=class i{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){$n.subVectors(s,t),fi.subVectors(n,t),Al.subVectors(e,t);let c=$n.dot($n),u=$n.dot(fi),d=$n.dot(Al),f=fi.dot(fi),g=fi.dot(Al),y=c*f-u*u;if(y===0)return o.set(0,0,0),null;let m=1/y,x=(f*d-u*g)*m,T=(c*g-u*d)*m;return o.set(1-x-T,T,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,o,c,u,d){return this.getBarycoord(e,t,n,s,pi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,pi.x),d.addScaledVector(c,pi.y),d.addScaledVector(u,pi.z),d)}static getInterpolatedAttribute(e,t,n,s,o,c){return Il.setScalar(0),Dl.setScalar(0),Ll.setScalar(0),Il.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Ll.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Il,o.x),c.addScaledVector(Dl,o.y),c.addScaledVector(Ll,o.z),c}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),fi.subVectors(e,t),$n.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),$n.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,o=this.c,c,u;mr.subVectors(s,n),gr.subVectors(o,n),Cl.subVectors(e,n);let d=mr.dot(Cl),f=gr.dot(Cl);if(d<=0&&f<=0)return t.copy(n);Rl.subVectors(e,s);let g=mr.dot(Rl),y=gr.dot(Rl);if(g>=0&&y<=g)return t.copy(s);let m=d*y-g*f;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(n).addScaledVector(mr,c);Pl.subVectors(e,o);let x=mr.dot(Pl),T=gr.dot(Pl);if(T>=0&&x<=T)return t.copy(o);let I=x*f-d*T;if(I<=0&&f>=0&&T<=0)return u=f/(f-T),t.copy(n).addScaledVector(gr,u);let M=g*T-x*y;if(M<=0&&y-g>=0&&x-T>=0)return Jh.subVectors(o,s),u=(y-g)/(y-g+(x-T)),t.copy(s).addScaledVector(Jh,u);let _=1/(M+I+m);return c=I*_,u=m*_,t.copy(n).addScaledVector(mr,c).addScaledVector(gr,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pi=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,qn):qn.fromBufferAttribute(o,c),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),ha.subVectors(this.max,Qr),_r.subVectors(e.a,Qr),vr.subVectors(e.b,Qr),yr.subVectors(e.c,Qr),Ti.subVectors(vr,_r),Ai.subVectors(yr,vr),ji.subVectors(_r,yr);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-ji.z,ji.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,ji.z,0,-ji.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-ji.y,ji.x,0];return!Fl(t,_r,vr,yr,ha)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,_r,vr,yr,ha))?!1:(ua.crossVectors(Ti,Ai),t=[ua.x,ua.y,ua.z],Fl(t,_r,vr,yr,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],qn=new Z,ca=new Pi,_r=new Z,vr=new Z,yr=new Z,Ti=new Z,Ai=new Z,ji=new Z,Qr=new Z,ha=new Z,ua=new Z,Zi=new Z;function Fl(i,e,t,n,s){for(let o=0,c=i.length-3;o<=c;o+=3){Zi.fromArray(i,o);let u=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),d=e.dot(Zi),f=t.dot(Zi),g=n.dot(Zi);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>u)return!1}return!0}var $t=new Z,da=new it,C0=0,pn=class extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array),o=dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var us=class extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ds=class extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xt=class extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},R0=new Pi,es=new Z,Nl=new Z,Dr=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);let t=es.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Nl)),this.expandByPoint(es.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},P0=0,Un=new Bt,Ul=new ln,xr=new Z,Cn=new Pi,ts=new Pi,en=new Z,gn=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?ds:us)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new st().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,o=e.length;s<o;s++){let c=e[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let o=t[n];Cn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){let u=t[o];ts.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(Cn.min,ts.min),Cn.expandByPoint(en),en.addVectors(Cn.max,ts.max),Cn.expandByPoint(en)):(Cn.expandByPoint(ts.min),Cn.expandByPoint(ts.max))}Cn.getCenter(n);let s=0;for(let o=0,c=e.count;o<c;o++)en.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(en));if(t)for(let o=0,c=t.length;o<c;o++){let u=t[o],d=this.morphTargetsRelative;for(let f=0,g=u.count;f<g;f++)en.fromBufferAttribute(u,f),d&&(xr.fromBufferAttribute(e,f),en.add(xr)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,o=t.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==n.count)&&(c=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",c));let u=[],d=[];for(let w=0;w<n.count;w++)u[w]=new Z,d[w]=new Z;let f=new Z,g=new Z,y=new Z,m=new it,x=new it,T=new it,I=new Z,M=new Z;function _(w,L,B){f.fromBufferAttribute(n,w),g.fromBufferAttribute(n,L),y.fromBufferAttribute(n,B),m.fromBufferAttribute(o,w),x.fromBufferAttribute(o,L),T.fromBufferAttribute(o,B),g.sub(f),y.sub(f),x.sub(m),T.sub(m);let q=1/(x.x*T.y-T.x*x.y);isFinite(q)&&(I.copy(g).multiplyScalar(T.y).addScaledVector(y,-x.y).multiplyScalar(q),M.copy(y).multiplyScalar(x.x).addScaledVector(g,-T.x).multiplyScalar(q),u[w].add(I),u[L].add(I),u[B].add(I),d[w].add(M),d[L].add(M),d[B].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let w=0,L=N.length;w<L;++w){let B=N[w],q=B.start,Y=B.count;for(let J=q,H=q+Y;J<H;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let k=new Z,R=new Z,P=new Z,D=new Z;function O(w){P.fromBufferAttribute(s,w),D.copy(P);let L=u[w];k.copy(L),k.sub(P.multiplyScalar(P.dot(L))).normalize(),R.crossVectors(D,L);let q=R.dot(d[w])<0?-1:1;c.setXYZW(w,k.x,k.y,k.z,q)}for(let w=0,L=N.length;w<L;++w){let B=N[w],q=B.start,Y=B.count;for(let J=q,H=q+Y;J<H;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new Z,o=new Z,c=new Z,u=new Z,d=new Z,f=new Z,g=new Z,y=new Z;if(e)for(let m=0,x=e.count;m<x;m+=3){let T=e.getX(m+0),I=e.getX(m+1),M=e.getX(m+2);s.fromBufferAttribute(t,T),o.fromBufferAttribute(t,I),c.fromBufferAttribute(t,M),g.subVectors(c,o),y.subVectors(s,o),g.cross(y),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),f.fromBufferAttribute(n,M),u.add(g),d.add(g),f.add(g),n.setXYZ(T,u.x,u.y,u.z),n.setXYZ(I,d.x,d.y,d.z),n.setXYZ(M,f.x,f.y,f.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,o),y.subVectors(s,o),g.cross(y),n.setXYZ(m+0,g.x,g.y,g.z),n.setXYZ(m+1,g.x,g.y,g.z),n.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(u,d){let f=u.array,g=u.itemSize,y=u.normalized,m=new f.constructor(d.length*g),x=0,T=0;for(let I=0,M=d.length;I<M;I++){u.isInterleavedBufferAttribute?x=d[I]*u.data.stride+u.offset:x=d[I]*g;for(let _=0;_<g;_++)m[T++]=f[x++]}return new pn(m,g,y)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let u in s){let d=s[u],f=e(d,n);t.setAttribute(u,f)}let o=this.morphAttributes;for(let u in o){let d=[],f=o[u];for(let g=0,y=f.length;g<y;g++){let m=f[g],x=e(m,n);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,d=c.length;u<d;u++){let f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let d=this.parameters;for(let f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let d in n){let f=n[d];e.data.attributes[d]=f.toJSON(e.data)}let s={},o=!1;for(let d in this.morphAttributes){let f=this.morphAttributes[d],g=[];for(let y=0,m=f.length;y<m;y++){let x=f[y];g.push(x.toJSON(e.data))}g.length>0&&(s[d]=g,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let f in s){let g=s[f];this.setAttribute(f,g.clone(t))}let o=e.morphAttributes;for(let f in o){let g=[],y=o[f];for(let m=0,x=y.length;m<x;m++)g.push(y[m].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let f=0,g=c.length;f<g;f++){let y=c[f];this.addGroup(y.start,y.count,y.materialIndex)}let u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());let d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ol=new Z,I0=new Z,D0=new st,Rn=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ol.subVectors(n,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ol),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let c=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||D0.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},L0=0,Ii=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=kr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let c=[];for(let u in o){let d=o[u];delete d.metadata,c.push(d)}return c}if(t){let o=s(e.textures),c=s(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var gi=new Z,Bl=new Z,fa=new Z,pa=new Z,Lr=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bl.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),pa.copy(this.origin).sub(Bl);let o=e.distanceTo(t)*.5,c=-this.direction.dot(fa),u=pa.dot(this.direction),d=-pa.dot(fa),f=pa.lengthSq(),g=Math.abs(1-c*c),y,m,x,T;if(g>0)if(y=c*d-u,m=c*u-d,T=o*g,y>=0)if(m>=-T)if(m<=T){let I=1/g;y*=I,m*=I,x=y*(y+c*m+2*u)+m*(c*y+m+2*d)+f}else m=o,y=Math.max(0,-(c*m+u)),x=-y*y+m*(m+2*d)+f;else m=-o,y=Math.max(0,-(c*m+u)),x=-y*y+m*(m+2*d)+f;else m<=-T?(y=Math.max(0,-(-c*o+u)),m=y>0?-o:Math.min(Math.max(-o,-d),o),x=-y*y+m*(m+2*d)+f):m<=T?(y=0,m=Math.min(Math.max(-o,-d),o),x=m*(m+2*d)+f):(y=Math.max(0,-(c*o+u)),m=y>0?o:Math.min(Math.max(-o,-d),o),x=-y*y+m*(m+2*d)+f);else m=c>0?-o:o,y=Math.max(0,-(c*m+u)),x=-y*y+m*(m+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(Bl).addScaledVector(fa,m),x}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,o=e.radius*e.radius;if(s>o)return null;let c=Math.sqrt(o-s),u=n-c,d=n+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,c,u,d,f=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),g>=0?(o=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(o=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),n>c||o>s||((o>n||isNaN(n))&&(n=o),(c<s||isNaN(s))&&(s=c),y>=0?(u=(e.min.z-m.z)*y,d=(e.max.z-m.z)*y):(u=(e.max.z-m.z)*y,d=(e.min.z-m.z)*y),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,o){let c=this.origin,u=this.direction,d=u.x,f=u.y,g=u.z,y=e.x-c.x,m=e.y-c.y,x=e.z-c.z,T=t.x-c.x,I=t.y-c.y,M=t.z-c.z,_=n.x-c.x,N=n.y-c.y,k=n.z-c.z,R=Math.abs(d),P=Math.abs(f),D=Math.abs(g),O,w,L,B,q,Y,J,H,te,z,se,_e;if(R>=P&&R>=D?(L=d,Y=y,te=T,_e=_,d>=0?(O=f,w=g,B=m,q=x,J=I,H=M,z=N,se=k):(O=g,w=f,B=x,q=m,J=M,H=I,z=k,se=N)):P>=D?(L=f,Y=m,te=I,_e=N,f>=0?(O=g,w=d,B=x,q=y,J=M,H=T,z=k,se=_):(O=d,w=g,B=y,q=x,J=T,H=M,z=_,se=k)):(L=g,Y=x,te=M,_e=k,g>=0?(O=d,w=f,B=y,q=m,J=T,H=I,z=_,se=N):(O=f,w=d,B=m,q=y,J=I,H=T,z=N,se=_)),L===0)return null;let ae=O/L,V=w/L,ge=1/L,je=B-ae*Y,qe=q-V*Y,Ft=J-ae*te,pt=H-V*te,Ke=z-ae*_e,he=se-V*_e,fe=Ke*pt-he*Ft,ke=je*he-qe*Ke,rt=Ft*qe-pt*je;if(s){if(fe<0||ke<0||rt<0)return null}else if((fe<0||ke<0||rt<0)&&(fe>0||ke>0||rt>0))return null;let Be=fe+ke+rt;if(Be===0)return null;let ct=ge*(fe*Y+ke*te+rt*_e);return(Be>0?ct<0:ct>0)?null:this.at(ct/Be,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fs=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kh=new Bt,Ji=new Lr,ma=new Dr,Qh=new Z,ga=new Z,_a=new Z,va=new Z,kl=new Z,ya=new Z,eu=new Z,xa=new Z,Sn=class extends ln{constructor(e=new gn,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let u=this.morphTargetInfluences;if(o&&u){ya.set(0,0,0);for(let d=0,f=o.length;d<f;d++){let g=u[d],y=o[d];g!==0&&(kl.fromBufferAttribute(y,e),c?ya.addScaledVector(kl,g):ya.addScaledVector(kl.sub(t),g))}t.add(ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(o),Ji.copy(e.ray).recast(e.near),!(ma.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ma,Qh)===null||Ji.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Kh.copy(o).invert(),Ji.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let s,o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,g=o.attributes.uv1,y=o.attributes.normal,m=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let T=0,I=m.length;T<I;T++){let M=m[T],_=c[M.materialIndex],N=Math.max(M.start,x.start),k=Math.min(u.count,Math.min(M.start+M.count,x.start+x.count));for(let R=N,P=k;R<P;R+=3){let D=u.getX(R),O=u.getX(R+1),w=u.getX(R+2);s=Sa(this,_,e,n,f,g,y,D,O,w),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{let T=Math.max(0,x.start),I=Math.min(u.count,x.start+x.count);for(let M=T,_=I;M<_;M+=3){let N=u.getX(M),k=u.getX(M+1),R=u.getX(M+2);s=Sa(this,c,e,n,f,g,y,N,k,R),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let T=0,I=m.length;T<I;T++){let M=m[T],_=c[M.materialIndex],N=Math.max(M.start,x.start),k=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let R=N,P=k;R<P;R+=3){let D=R,O=R+1,w=R+2;s=Sa(this,_,e,n,f,g,y,D,O,w),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{let T=Math.max(0,x.start),I=Math.min(d.count,x.start+x.count);for(let M=T,_=I;M<_;M+=3){let N=M,k=M+1,R=M+2;s=Sa(this,c,e,n,f,g,y,N,k,R),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}}};function F0(i,e,t,n,s,o,c,u){let d;if(e.side===_n?d=n.intersectTriangle(c,o,s,!0,u):d=n.intersectTriangle(s,o,c,e.side===oi,u),d===null)return null;xa.copy(u),xa.applyMatrix4(i.matrixWorld);let f=t.ray.origin.distanceTo(xa);return f<t.near||f>t.far?null:{distance:f,point:xa.clone(),object:i}}function Sa(i,e,t,n,s,o,c,u,d,f){i.getVertexPosition(u,ga),i.getVertexPosition(d,_a),i.getVertexPosition(f,va);let g=F0(i,e,t,n,ga,_a,va,eu);if(g){let y=new Z;Ri.getBarycoord(eu,ga,_a,va,y),s&&(g.uv=Ri.getInterpolatedAttribute(s,u,d,f,y,new it)),o&&(g.uv1=Ri.getInterpolatedAttribute(o,u,d,f,y,new it)),c&&(g.normal=Ri.getInterpolatedAttribute(c,u,d,f,y,new Z),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));let m={a:u,b:d,c:f,normal:new Z,materialIndex:0};Ri.getNormal(ga,_a,va,m.normal),g.face=m,g.barycoord=y}return g}var za=class extends yn{constructor(e=null,t=1,n=1,s,o,c,u,d,f=tn,g=tn,y,m){super(null,c,u,d,f,g,s,o,y,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=new Dr,N0=new it(.5,.5),Ma=new Z,Fr=class{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,o=new Rn,c=new Rn){this.planes=[e,t,n,s,o,c]}set(e,t,n,s,o,c){let u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let s=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],f=o[3],g=o[4],y=o[5],m=o[6],x=o[7],T=o[8],I=o[9],M=o[10],_=o[11],N=o[12],k=o[13],R=o[14],P=o[15];if(s[0].setComponents(f-c,x-g,_-T,P-N).normalize(),s[1].setComponents(f+c,x+g,_+T,P+N).normalize(),s[2].setComponents(f+u,x+y,_+I,P+k).normalize(),s[3].setComponents(f-u,x-y,_-I,P-k).normalize(),n)s[4].setComponents(d,m,M,R).normalize(),s[5].setComponents(f-d,x-m,_-M,P-R).normalize();else if(s[4].setComponents(f-d,x-m,_-M,P-R).normalize(),t===Yn)s[5].setComponents(f+d,x+m,_+M,P+R).normalize();else if(t===Ar)s[5].setComponents(d,m,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=N0.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends yn{constructor(e=[],t=ki,n,s,o,c,u,d,f,g){super(e,t,n,s,o,c,u,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Di=class extends yn{constructor(e,t,n=Kn,s,o,c,u=tn,d=tn,f,g=ai,y=1){if(g!==ai&&g!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:y};super(m,s,o,c,u,d,g,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Va=class extends Di{constructor(e,t=Kn,n=ki,s,o,c=tn,u=tn,d,f=ai){let g={width:e,height:e,depth:1},y=[g,g,g,g,g,g];super(e,e,t,n,s,o,c,u,d,f),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ms=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Li=class i extends gn{constructor(e=1,t=1,n=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:c};let u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);let d=[],f=[],g=[],y=[],m=0,x=0;T("z","y","x",-1,-1,n,t,e,c,o,0),T("z","y","x",1,-1,n,t,-e,c,o,1),T("x","z","y",1,1,e,n,t,s,c,2),T("x","z","y",1,-1,e,n,-t,s,c,3),T("x","y","z",1,-1,e,t,n,s,o,4),T("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(d),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(y,2));function T(I,M,_,N,k,R,P,D,O,w,L){let B=R/O,q=P/w,Y=R/2,J=P/2,H=D/2,te=O+1,z=w+1,se=0,_e=0,ae=new Z;for(let V=0;V<z;V++){let ge=V*q-J;for(let je=0;je<te;je++){let qe=je*B-Y;ae[I]=qe*N,ae[M]=ge*k,ae[_]=H,f.push(ae.x,ae.y,ae.z),ae[I]=0,ae[M]=0,ae[_]=D>0?1:-1,g.push(ae.x,ae.y,ae.z),y.push(je/O),y.push(1-V/w),se+=1}}for(let V=0;V<w;V++)for(let ge=0;ge<O;ge++){let je=m+ge+te*V,qe=m+ge+te*(V+1),Ft=m+(ge+1)+te*(V+1),pt=m+(ge+1)+te*V;d.push(je,qe,pt),d.push(qe,Ft,pt),_e+=6}u.addGroup(x,_e,L),x+=_e,m+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},gs=class i extends gn{constructor(e=1,t=1,n=4,s=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:o},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),o=Math.max(1,Math.floor(o));let c=[],u=[],d=[],f=[],g=t/2,y=Math.PI/2*e,m=t,x=2*y+m,T=n*2+o,I=s+1,M=new Z,_=new Z;for(let N=0;N<=T;N++){let k=0,R=0,P=0,D=0;if(N<=n){let L=N/n,B=L*Math.PI/2;R=-g-e*Math.cos(B),P=e*Math.sin(B),D=-e*Math.cos(B),k=L*y}else if(N<=n+o){let L=(N-n)/o;R=-g+L*t,P=e,D=0,k=y+L*m}else{let L=(N-n-o)/n,B=L*Math.PI/2;R=g+e*Math.sin(B),P=e*Math.cos(B),D=e*Math.sin(B),k=y+m+L*y}let O=Math.max(0,Math.min(1,k/x)),w=0;N===0?w=.5/s:N===T&&(w=-.5/s);for(let L=0;L<=s;L++){let B=L/s,q=B*Math.PI*2,Y=Math.sin(q),J=Math.cos(q);_.x=-P*J,_.y=R,_.z=P*Y,u.push(_.x,_.y,_.z),M.set(-P*J,D,P*Y),M.normalize(),d.push(M.x,M.y,M.z),f.push(B+w,O)}if(N>0){let L=(N-1)*I;for(let B=0;B<s;B++){let q=L+B,Y=L+B+1,J=N*I+B,H=N*I+B+1;c.push(q,Y,J),c.push(Y,H,J)}}}this.setIndex(c),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var _s=class i extends gn{constructor(e=1,t=1,n=1,s=32,o=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d};let f=this;s=Math.floor(s),o=Math.floor(o);let g=[],y=[],m=[],x=[],T=0,I=[],M=n/2,_=0;N(),c===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(g),this.setAttribute("position",new Xt(y,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(x,2));function N(){let R=new Z,P=new Z,D=0,O=(t-e)/n;for(let w=0;w<=o;w++){let L=[],B=w/o,q=B*(t-e)+e;for(let Y=0;Y<=s;Y++){let J=Y/s,H=J*d+u,te=Math.sin(H),z=Math.cos(H);P.x=q*te,P.y=-B*n+M,P.z=q*z,y.push(P.x,P.y,P.z),R.set(te,O,z).normalize(),m.push(R.x,R.y,R.z),x.push(J,1-B),L.push(T++)}I.push(L)}for(let w=0;w<s;w++)for(let L=0;L<o;L++){let B=I[L][w],q=I[L+1][w],Y=I[L+1][w+1],J=I[L][w+1];(e>0||L!==0)&&(g.push(B,q,J),D+=3),(t>0||L!==o-1)&&(g.push(q,Y,J),D+=3)}f.addGroup(_,D,0),_+=D}function k(R){let P=T,D=new it,O=new Z,w=0,L=R===!0?e:t,B=R===!0?1:-1;for(let Y=1;Y<=s;Y++)y.push(0,M*B,0),m.push(0,B,0),x.push(.5,.5),T++;let q=T;for(let Y=0;Y<=s;Y++){let H=Y/s*d+u,te=Math.cos(H),z=Math.sin(H);O.x=L*z,O.y=M*B,O.z=L*te,y.push(O.x,O.y,O.z),m.push(0,B,0),D.x=te*.5+.5,D.y=z*.5*B+.5,x.push(D.x,D.y),T++}for(let Y=0;Y<s;Y++){let J=P+Y,H=q+Y;R===!0?g.push(H,H+1,J):g.push(H+1,H,J),w+=3}f.addGroup(_,w,R===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var er=class i extends gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let o=e/2,c=t/2,u=Math.floor(n),d=Math.floor(s),f=u+1,g=d+1,y=e/u,m=t/d,x=[],T=[],I=[],M=[];for(let _=0;_<g;_++){let N=_*m-c;for(let k=0;k<f;k++){let R=k*y-o;T.push(R,-N,0),I.push(0,0,1),M.push(k/u),M.push(1-_/d)}}for(let _=0;_<d;_++)for(let N=0;N<u;N++){let k=N+f*_,R=N+f*(_+1),P=N+1+f*(_+1),D=N+1+f*_;x.push(k,R,D),x.push(R,P,D)}this.setIndex(x),this.setAttribute("position",new Xt(T,3)),this.setAttribute("normal",new Xt(I,3)),this.setAttribute("uv",new Xt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Nr=class i extends gn{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let d=Math.min(c+u,Math.PI),f=0,g=[],y=new Z,m=new Z,x=[],T=[],I=[],M=[];for(let _=0;_<=n;_++){let N=[],k=_/n,R=c+k*u,P=e*Math.cos(R),D=Math.sqrt(e*e-P*P),O=0;_===0&&c===0?O=.5/t:_===n&&d===Math.PI&&(O=-.5/t);for(let w=0;w<=t;w++){let L=w/t,B=s+L*o;y.x=-D*Math.cos(B),y.y=P,y.z=D*Math.sin(B),T.push(y.x,y.y,y.z),m.copy(y).normalize(),I.push(m.x,m.y,m.z),M.push(L+O,1-k),N.push(f++)}g.push(N)}for(let _=0;_<n;_++)for(let N=0;N<t;N++){let k=g[_][N+1],R=g[_][N],P=g[_+1][N],D=g[_+1][N+1];(_!==0||c>0)&&x.push(k,R,D),(_!==n-1||d<Math.PI)&&x.push(R,P,D)}this.setIndex(x),this.setAttribute("position",new Xt(T,3)),this.setAttribute("normal",new Xt(I,3)),this.setAttribute("uv",new Xt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(tu(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(tu(s[0])){let o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][n]=o}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=ir(i[t]);for(let s in n)e[s]=n[s]}return e}function tu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function U0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var $u={clone:ir,merge:cn},O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new it().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ga=class extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vs=class extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ha=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wa=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],o=t[n-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=n+2;;){if(s===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(o=s,s=t[++n],e<s)break t}c=t.length;break n}if(!(e>=o)){let u=t[1];e<u&&(n=2,o=u);for(let d=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(s=o,o=t[--n-1],e>=o)break t}c=n,n=0;break n}break e}for(;n<c;){let u=n+c>>>1;e<t[u]?c=u:n=u+1}if(s=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s;for(let c=0;c!==s;++c)t[c]=n[o+c];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xa=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,n){let s=this.parameterPositions,o=e-2,c=e+1,u=s[o],d=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case Wl:o=e,u=2*t-n;break;case Xl:o=s.length-2,u=t+s[o]-s[o+1];break;default:o=e,u=n}if(d===void 0)switch(this.getSettings_().endingEnd){case Wl:c=e,d=2*n-t;break;case Xl:c=1,d=n+s[1]-s[0];break;default:c=e-1,d=t}let f=(n-t)*.5,g=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(d-n),this._offsetPrev=o*g,this._offsetNext=c*g}interpolate_(e,t,n,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,g=this._offsetPrev,y=this._offsetNext,m=this._weightPrev,x=this._weightNext,T=(n-t)/(s-t),I=T*T,M=I*T,_=-m*M+2*m*I-m*T,N=(1+m)*M+(-1.5-2*m)*I+(-.5+m)*T+1,k=(-1-x)*M+(1.5+x)*I+.5*T,R=x*M-x*I;for(let P=0;P!==u;++P)o[P]=_*c[g+P]+N*c[f+P]+k*c[d+P]+R*c[y+P];return o}},$a=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,g=(n-t)/(s-t),y=1-g;for(let m=0;m!==u;++m)o[m]=c[f+m]*y+c[d+m]*g;return o}},qa=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ya=class extends Fi{interpolate_(e,t,n,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,g=this.inTangents,y=this.outTangents;if(!g||!y){let T=(n-t)/(s-t),I=1-T;for(let M=0;M!==u;++M)o[M]=c[f+M]*I+c[d+M]*T;return o}let m=u*2,x=e-1;for(let T=0;T!==u;++T){let I=c[f+T],M=c[d+T],_=x*m+T*2,N=y[_],k=y[_+1],R=e*m+T*2,P=g[R],D=g[R+1],O=z0(n,t,N,P,s);o[T]=qu(O,I,k,D,M)}return o}};function qu(i,e,t,n,s){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*s}function k0(i,e,t,n,s){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(s-n)}function z0(i,e,t,n,s){let o=(i-e)/(s-e);for(let c=0;c<8;c++){let u=qu(o,e,t,n,s)-i;if(Math.abs(u)<1e-10)break;let d=k0(o,e,t,n,s);if(Math.abs(d)<1e-10)break;o=Math.max(0,Math.min(1,o-u/d))}return o}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),zl(e.settings)&&(n.settings={inTangents:Sr(e.settings.inTangents,Array),outTangents:Sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ya(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case rs:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case wa:t=this.InterpolantFactoryMethodSmooth;break;case Gl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;zl(this.settings)&&(nu(this.settings.inTangents,e),nu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,o=0,c=s-1;for(;o!==s&&n[o]<e;)++o;for(;c!==-1&&n[c]>t;)--c;if(++c,o!==0||c!==s){o>=c&&(c=Math.max(c,1),o=c-1);let u=this.getValueSize();this.times=n.slice(o,c),this.values=this.values.slice(o*u,c*u)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,o=n.length;o===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==o;u++){let d=n[u];if(typeof d=="number"&&isNaN(d)){nt("KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){nt("KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(s!==void 0&&t0(s))for(let u=0,d=s.length;u!==d;++u){let f=s[u];if(isNaN(f)){nt("KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wa,o=e.length-1,c=1;for(let u=1;u<o;++u){let d=!1,f=e[u],g=e[u+1];if(f!==g&&(u!==1||f!==e[0]))if(s)d=!0;else{let y=u*n,m=y-n,x=y+n;for(let T=0;T!==n;++T){let I=t[y+T];if(I!==t[m+T]||I!==t[x+T]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];let y=u*n,m=c*n;for(let x=0;x!==n;++x)t[m+x]=t[y+x]}++c}}if(o>0){e[c]=e[o];for(let u=o*n,d=c*n,f=0;f!==n;++f)t[d+f]=t[u+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,zl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ua;var Ni=class extends In{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=rs;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="color";var Za=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="number";var Ja=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(n-t)/(s-t),f=e*u;for(let g=f+u;f!==g;f+=4)mn.slerpFlat(o,0,c,f-u,c,f,d);return o}},ys=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}};ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends In{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=rs;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Ka.prototype.ValueTypeName="vector";var Qa=class{constructor(e,t,n){let s=this,o=!1,c=0,u=0,d,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(g){u++,o===!1&&s.onStart!==void 0&&s.onStart(g,c,u),o=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,y){return f.push(g,y),this},this.removeHandler=function(g){let y=f.indexOf(g);return y!==-1&&f.splice(y,2),this},this.getHandler=function(g){for(let y=0,m=f.length;y<m;y+=2){let x=f[y],T=f[y+1];if(x.global&&(x.lastIndex=0),x.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yu=new Qa,eo=class{constructor(e){this.manager=e!==void 0?e:Yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ss=class extends xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vl=new Bt,iu=new Z,ru=new Z,to=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vl,e.coordinateSystem,e.reversedDepth);let o=this._frameExtents,c=s?s.z/o.x:1,u=s?s.w/o.y:1,d=s?s.x/o.x:0,f=s?s.y/o.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+f,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+f,0,0,.5,.5,0,0,0,1),t.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ba=new Z,Ea=new mn,ri=new Z,Ms=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,Ea,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ba,Ea,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new Z,su=new it,au=new it,on=class extends Ms{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,su,au),t.subVectors(au,su)}setViewOffset(e,t,n,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let d=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/d,t-=c.offsetY*n/f,s*=c.width/d,n*=c.height/f}let u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ur=class extends Ms{constructor(e=-1,t=1,n=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-e,c=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$l=class extends to{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new $l}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Mr=-90,br=1,no=class extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Mr,br,e,t);s.layers=this.layers,this.add(s);let o=new on(Mr,br,e,t);o.layers=this.layers,this.add(o);let c=new on(Mr,br,e,t);c.layers=this.layers,this.add(c);let u=new on(Mr,br,e,t);u.layers=this.layers,this.add(u);let d=new on(Mr,br,e,t);d.layers=this.layers,this.add(d);let f=new on(Mr,br,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,o,c,u,d]=t;for(let f of t)this.remove(f);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,c,u,d,f,g]=this.children,y=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,3,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=I,e.setRenderTarget(n,5,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(y,m,x),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}},io=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Mc="\\[\\]\\.:\\/",V0=new RegExp("["+Mc+"]","g"),bc="[^"+Mc+"]",G0="[^"+Mc.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",bc),W0=/(WCOD+)?/.source.replace("WCOD",G0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),q0=new RegExp("^"+H0+W0+X0+$0+"$"),Y0=["material","materials","bones","map"],ql=class{constructor(e,t,n){let s=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(e){let t=q0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);Y0.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let c=0;c<o.length;c++){let u=o[c];if(u.name===t||u.uuid===t)return u;let d=n(u.children);if(d)return d}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===f){f=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}let c=e[s];if(c===void 0){let f=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=ql;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var db=new Float32Array(1);var Or=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Rc=class Rc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=s,this}};Rc.prototype.isMatrix2=!0;var Yl=Rc;var Es=class extends Zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ec(i,e,t,n){let s=j0(n);switch(t){case pc:return i*e;case gc:return i*e/s.components*s.byteLength;case uo:return i*e/s.components*s.byteLength;case Gi:return i*e*2/s.components*s.byteLength;case fo:return i*e*2/s.components*s.byteLength;case mc:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case po:return i*e*4/s.components*s.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(i,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(e,8)/2;case yo:case xo:case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case Ds:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ko:case zo:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Go:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ls:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j0(i){switch(i){case Mn:case hc:return{byteLength:1,components:1};case zr:case uc:case ei:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case Kn:case lo:case Qn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function gd(){let i=null,e=!1,t=null,n=null;function s(o,c){n=i.requestAnimationFrame(s),t(o,c)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function J0(i){let e=new WeakMap;function t(u,d){let f=u.array,g=u.usage,y=f.byteLength,m=i.createBuffer();i.bindBuffer(d,m),i.bufferData(d,f,g),u.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=i.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:y}}function n(u,d,f){let g=d.array,y=d.updateRanges;if(i.bindBuffer(f,u),y.length===0)i.bufferSubData(f,0,g);else{y.sort((x,T)=>x.start-T.start);let m=0;for(let x=1;x<y.length;x++){let T=y[m],I=y[x];I.start<=T.start+T.count+1?T.count=Math.max(T.count,I.start+I.count-T.start):(++m,y[m]=I)}y.length=m+1;for(let x=0,T=y.length;x<T;x++){let I=y[x];i.bufferSubData(f,I.start*g.BYTES_PER_ELEMENT,g,I.start,I.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:s,remove:o,update:c}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rv=`#ifdef USE_AOMAP
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
#endif`,sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,av=`#ifdef USE_BATCHING
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
#endif`,ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uv=`#ifdef USE_IRIDESCENCE
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
#endif`,dv=`#ifdef USE_BUMPMAP
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
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sv=`#define PI 3.141592653589793
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
} // validated`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
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
#endif`,Zv=`uniform sampler2D dfgLUT;
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
}`,Jv=`
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
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,My=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,sx=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,ox=`#define DISTANCE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,_x=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,yx=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,Mx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,Ex=`#define TOON
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
}`,wx=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:K0,alphahash_pars_fragment:Q0,alphamap_fragment:ev,alphamap_pars_fragment:tv,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:rv,aomap_pars_fragment:sv,batching_pars_vertex:av,batching_vertex:ov,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:hv,iridescence_fragment:uv,bumpmap_pars_fragment:dv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:_v,color_pars_fragment:vv,color_pars_vertex:yv,color_vertex:xv,common:Sv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:bv,displacementmap_pars_vertex:Ev,displacementmap_vertex:wv,emissivemap_fragment:Tv,emissivemap_pars_fragment:Av,colorspace_fragment:Cv,colorspace_pars_fragment:Rv,envmap_fragment:Pv,envmap_common_pars_fragment:Iv,envmap_pars_fragment:Dv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Wv,envmap_vertex:Fv,fog_vertex:Nv,fog_pars_vertex:Uv,fog_fragment:Ov,fog_pars_fragment:Bv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:zv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Gv,lights_pars_begin:Hv,lights_toon_fragment:Xv,lights_toon_pars_fragment:$v,lights_phong_fragment:qv,lights_phong_pars_fragment:Yv,lights_physical_fragment:jv,lights_physical_pars_fragment:Zv,lights_fragment_begin:Jv,lights_fragment_maps:Kv,lights_fragment_end:Qv,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ry,map_fragment:sy,map_pars_fragment:ay,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:hy,morphinstance_vertex:uy,morphcolor_vertex:dy,morphnormal_vertex:fy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:vy,normal_pars_vertex:yy,normal_vertex:xy,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:My,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:Ty,packing:Ay,premultiplied_alpha_fragment:Cy,project_vertex:Ry,dithering_fragment:Py,dithering_pars_fragment:Iy,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Uy,shadowmask_pars_fragment:Oy,skinbase_vertex:By,skinning_pars_vertex:ky,skinning_vertex:zy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Hy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:$y,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:jy,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:Ky,background_frag:Qy,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:rx,depth_frag:sx,distance_vert:ax,distance_frag:ox,equirect_vert:lx,equirect_frag:cx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:_x,meshnormal_vert:vx,meshnormal_frag:yx,meshphong_vert:xx,meshphong_frag:Sx,meshphysical_vert:Mx,meshphysical_frag:bx,meshtoon_vert:Ex,meshtoon_frag:wx,points_vert:Tx,points_frag:Ax,shadow_vert:Cx,shadow_frag:Rx,sprite_vert:Px,sprite_frag:Ix},Fe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},hi={basic:{uniforms:cn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:cn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:cn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:cn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:cn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:cn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:cn([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:cn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:cn([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:cn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:cn([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:cn([Fe.common,Fe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:cn([Fe.lights,Fe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};hi.physical={uniforms:cn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Yo={r:0,b:0,g:0},Dx=new Bt,_d=new st;_d.set(-1,0,0,0,1,0,0,0,1);function Lx(i,e,t,n,s,o){let c=new ut(0),u=s===!0?0:1,d,f,g=null,y=0,m=null;function x(N){let k=N.isScene===!0?N.background:null;if(k&&k.isTexture){let R=N.backgroundBlurriness>0;k=e.get(k,R)}return k}function T(N){let k=!1,R=x(N);R===null?M(c,u):R&&R.isColor&&(M(R,1),k=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(N,k){let R=x(k);R&&(R.isCubeTexture||R.mapping===Ts)?(f===void 0&&(f=new Sn(new Li(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ir(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=R,f.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(_d),f.material.toneMapped=yt.getTransfer(R.colorSpace)!==Pt,(g!==R||y!==R.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,g=R,y=R.version,m=i.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Sn(new er(2,2),new Pn({name:"BackgroundMaterial",uniforms:ir(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,d.material.toneMapped=yt.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||y!==R.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,g=R,y=R.version,m=i.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function M(N,k){N.getRGB(Yo,Sc(i)),t.buffers.color.setClear(Yo.r,Yo.g,Yo.b,k,o)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(N,k=1){c.set(N),u=k,M(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(N){u=N,M(c,u)},render:T,addToRenderList:I,dispose:_}}function Fx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),o=s,c=!1;function u(q,Y,J,H,te){let z=!1,se=y(q,H,J,Y);o!==se&&(o=se,f(o.object)),z=x(q,H,J,te),z&&T(q,H,J,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,R(q,Y,J,H),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function d(){return i.createVertexArray()}function f(q){return i.bindVertexArray(q)}function g(q){return i.deleteVertexArray(q)}function y(q,Y,J,H){let te=H.wireframe===!0,z=n[Y.id];z===void 0&&(z={},n[Y.id]=z);let se=q.isInstancedMesh===!0?q.id:0,_e=z[se];_e===void 0&&(_e={},z[se]=_e);let ae=_e[J.id];ae===void 0&&(ae={},_e[J.id]=ae);let V=ae[te];return V===void 0&&(V=m(d()),ae[te]=V),V}function m(q){let Y=[],J=[],H=[];for(let te=0;te<t;te++)Y[te]=0,J[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:H,object:q,attributes:{},index:null}}function x(q,Y,J,H){let te=o.attributes,z=Y.attributes,se=0,_e=J.getAttributes();for(let ae in _e)if(_e[ae].location>=0){let ge=te[ae],je=z[ae];if(je===void 0&&(ae==="instanceMatrix"&&q.instanceMatrix&&(je=q.instanceMatrix),ae==="instanceColor"&&q.instanceColor&&(je=q.instanceColor)),ge===void 0||ge.attribute!==je||je&&ge.data!==je.data)return!0;se++}return o.attributesNum!==se||o.index!==H}function T(q,Y,J,H){let te={},z=Y.attributes,se=0,_e=J.getAttributes();for(let ae in _e)if(_e[ae].location>=0){let ge=z[ae];ge===void 0&&(ae==="instanceMatrix"&&q.instanceMatrix&&(ge=q.instanceMatrix),ae==="instanceColor"&&q.instanceColor&&(ge=q.instanceColor));let je={};je.attribute=ge,ge&&ge.data&&(je.data=ge.data),te[ae]=je,se++}o.attributes=te,o.attributesNum=se,o.index=H}function I(){let q=o.newAttributes;for(let Y=0,J=q.length;Y<J;Y++)q[Y]=0}function M(q){_(q,0)}function _(q,Y){let J=o.newAttributes,H=o.enabledAttributes,te=o.attributeDivisors;J[q]=1,H[q]===0&&(i.enableVertexAttribArray(q),H[q]=1),te[q]!==Y&&(i.vertexAttribDivisor(q,Y),te[q]=Y)}function N(){let q=o.newAttributes,Y=o.enabledAttributes;for(let J=0,H=Y.length;J<H;J++)Y[J]!==q[J]&&(i.disableVertexAttribArray(J),Y[J]=0)}function k(q,Y,J,H,te,z,se){se===!0?i.vertexAttribIPointer(q,Y,J,te,z):i.vertexAttribPointer(q,Y,J,H,te,z)}function R(q,Y,J,H){I();let te=H.attributes,z=J.getAttributes(),se=Y.defaultAttributeValues;for(let _e in z){let ae=z[_e];if(ae.location>=0){let V=te[_e];if(V===void 0&&(_e==="instanceMatrix"&&q.instanceMatrix&&(V=q.instanceMatrix),_e==="instanceColor"&&q.instanceColor&&(V=q.instanceColor)),V!==void 0){let ge=V.normalized,je=V.itemSize,qe=e.get(V);if(qe===void 0)continue;let Ft=qe.buffer,pt=qe.type,Ke=qe.bytesPerElement,he=pt===i.INT||pt===i.UNSIGNED_INT||V.gpuType===lo;if(V.isInterleavedBufferAttribute){let fe=V.data,ke=fe.stride,rt=V.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<ae.locationSize;Be++)_(ae.location+Be,fe.meshPerAttribute);q.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<ae.locationSize;Be++)M(ae.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Be=0;Be<ae.locationSize;Be++)k(ae.location+Be,je/ae.locationSize,pt,ge,ke*Ke,(rt+je/ae.locationSize*Be)*Ke,he)}else{if(V.isInstancedBufferAttribute){for(let fe=0;fe<ae.locationSize;fe++)_(ae.location+fe,V.meshPerAttribute);q.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let fe=0;fe<ae.locationSize;fe++)M(ae.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let fe=0;fe<ae.locationSize;fe++)k(ae.location+fe,je/ae.locationSize,pt,ge,je*Ke,je/ae.locationSize*fe*Ke,he)}}else if(se!==void 0){let ge=se[_e];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(ae.location,ge);break;case 3:i.vertexAttrib3fv(ae.location,ge);break;case 4:i.vertexAttrib4fv(ae.location,ge);break;default:i.vertexAttrib1fv(ae.location,ge)}}}}N()}function P(){L();for(let q in n){let Y=n[q];for(let J in Y){let H=Y[J];for(let te in H){let z=H[te];for(let se in z)g(z[se].object),delete z[se];delete H[te]}}delete n[q]}}function D(q){if(n[q.id]===void 0)return;let Y=n[q.id];for(let J in Y){let H=Y[J];for(let te in H){let z=H[te];for(let se in z)g(z[se].object),delete z[se];delete H[te]}}delete n[q.id]}function O(q){for(let Y in n){let J=n[Y];for(let H in J){let te=J[H];if(te[q.id]===void 0)continue;let z=te[q.id];for(let se in z)g(z[se].object),delete z[se];delete te[q.id]}}}function w(q){for(let Y in n){let J=n[Y],H=q.isInstancedMesh===!0?q.id:0,te=J[H];if(te!==void 0){for(let z in te){let se=te[z];for(let _e in se)g(se[_e].object),delete se[_e];delete te[z]}delete J[H],Object.keys(J).length===0&&delete n[Y]}}}function L(){B(),c=!0,o!==s&&(o=s,f(o.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:L,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:I,enableAttribute:M,disableUnusedAttributes:N}}function Nx(i,e,t){let n;function s(d){n=d}function o(d,f){i.drawArrays(n,d,f),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawArraysInstanced(n,d,f,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,f,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];t.update(m,n,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Ux(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Bn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){let w=O===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Mn&&O!==Qn&&!w&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function d(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp",g=d(f);g!==f&&(et("WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);let y=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:y,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:T,maxTextureSize:I,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:N,maxVaryings:k,maxFragmentUniforms:R,maxSamples:P,samples:D}}function Ox(i){let e=this,t=null,n=0,s=!1,o=!1,c=new Rn,u=new st,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,m){let x=y.length!==0||m||n!==0||s;return s=m,n=y.length,x},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,m){t=g(y,m,0)},this.setState=function(y,m,x){let T=y.clippingPlanes,I=y.clipIntersection,M=y.clipShadows,_=i.get(y);if(!s||T===null||T.length===0||o&&!M)o?g(null):f();else{let N=o?0:n,k=N*4,R=_.clippingState||null;d.value=R,R=g(T,m,k,x);for(let P=0;P!==k;++P)R[P]=t[P];_.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=N}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(y,m,x,T){let I=y!==null?y.length:0,M=null;if(I!==0){if(M=d.value,T!==!0||M===null){let _=x+I*4,N=m.matrixWorldInverse;u.getNormalMatrix(N),(M===null||M.length<_)&&(M=new Float32Array(_));for(let k=0,R=x;k!==I;++k,R+=4)c.copy(y[k]).applyMatrix4(N,u),c.normal.toArray(M,R),M[R+3]=c.constant}d.value=M,d.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,M}}var Wr=4,Bx=6,kx=20,zx=256,Fs=new Ur,ju=new ut,Pc=null,Ic=0,Dc=0,Lc=!1,Vx=new Z,rr=new Z,Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){let{size:c=256,position:u=Vx}=o;Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pc,Ic,Dc),this._renderer.xr.enabled=Lc,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ei,format:Bn,colorSpace:ss,depthBuffer:!1},s=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gx(o)),this._blurMaterial=Wx(o,e,t),this._ggxMaterial=Hx(o,e,t)}return s}_compileMaterial(e){let t=new Sn(new gn,e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,n,s,o){let d=new on(90,1,t,n),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,m=y.autoClear,x=y.toneMapping;y.getClearColor(ju),y.toneMapping=Jn,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(s),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Li,new fs({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,M=I.material,_=!1,N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,_=!0):(M.color.copy(ju),_=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(d.up.set(0,f[k],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+g[k],o.y,o.z)):R===1?(d.up.set(0,0,f[k]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+g[k],o.z)):(d.up.set(0,f[k],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+g[k]));let P=this._cubeSize;Hr(s,R*P,k>2?P:0,P,P),y.setRenderTarget(s),_&&y.render(I,d),y.render(e,d)}y.toneMapping=x,y.autoClear=m,e.background=N}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ki||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let u=o.uniforms;u.envMap.value=e;let d=this._cubeSize;Hr(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,Fs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[n];u.material=c;let d=c.uniforms,f=n/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),y=Math.sqrt(f*f-g*g),m=f*1.25,x=y*m,{_lodMax:T}=this,I=this._sizeLods[n],M=3*I*(n>T-Wr?n-T+Wr:0),_=4*(this._cubeSize-I);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=T-t,Hr(o,M,_,3*I,2*I),s.setRenderTarget(o),s.render(u,Fs),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=T-n,Hr(e,M,_,3*I,2*I),s.setRenderTarget(e),s.render(u,Fs)}_blur(e,t,n,s){let o=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,c),this._blurPass(o,e,n,n,c)}_blurPass(e,t,n,s,o){let c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[s];d.material=u;let f=u.uniforms;f.envMap.value=e.texture,f.sigma.value=o,f.mipInt.value=this._lodMax-n;let g=this._sizeLods[s],y=3*g*(s>this._lodMax-Wr?s-this._lodMax+Wr:0),m=4*(this._cubeSize-g);Hr(t,y,m,3*g,2*g),c.setRenderTarget(t),c.render(d,Fs)}};function Gx(i){let e=[],t=[],n=i,s=i-Wr+1+Bx;for(let o=0;o<s;o++){let c=Math.pow(2,n);e.push(c);let u=1/(c-2),d=-u,f=1+u,g=[d,d,f,d,f,f,d,d,f,f,d,f],y=6,m=6,x=3,T=new Float32Array(x*m*y),I=new Float32Array(x*m*y);for(let _=0;_<y;_++){let N=_%3*2/3-1,k=_>2?0:-1,R=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];T.set(R,x*m*_);for(let P=0;P<m;P++){let D=g[P*2]*2-1,O=g[P*2+1]*2-1;_===0?rr.set(1,O,D):_===1?rr.set(-D,1,-O):_===2?rr.set(-D,O,1):_===3?rr.set(-1,O,-D):_===4?rr.set(-D,-1,O):rr.set(D,O,-1),rr.toArray(I,(_*m+P)*x)}}let M=new gn;M.setAttribute("position",new pn(T,x)),M.setAttribute("outputDirection",new pn(I,x)),t.push(new Sn(M,null)),n>Wr&&n--}return{lodMeshes:t,sizeLods:e}}function Zu(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hx(i,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Wx(i,e,t){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ju(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ku(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jo=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ps(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Li(5,5,5),o=new Pn({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:li});o.uniforms.tEquirect.value=t;let c=new Sn(s,o),u=t.minFilter;return t.minFilter===zi&&(t.minFilter=nn),new no(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(o)}};function Xx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?c(m):o(m)}function o(m){if(m&&m.isTexture){let x=m.mapping;if(x===so||x===ao)if(e.has(m)){let T=e.get(m).texture;return u(T,m.mapping)}else{let T=m.image;if(T&&T.height>0){let I=new Jo(T.height);return I.fromEquirectangularTexture(i,m),e.set(m,I),m.addEventListener("dispose",f),u(I.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){let x=m.mapping,T=x===so||x===ao,I=x===ki||x===nr;if(T||I){let M=t.get(m),_=M!==void 0?M.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return n===null&&(n=new Zo(i)),M=T?n.fromEquirectangular(m,M):n.fromCubemap(m,M),M.texture.pmremVersion=m.pmremVersion,t.set(m,M),M.texture;if(M!==void 0)return M.texture;{let N=m.image;return T&&N&&N.height>0||I&&N&&d(N)?(n===null&&(n=new Zo(i)),M=T?n.fromEquirectangular(m):n.fromCubemap(m),M.texture.pmremVersion=m.pmremVersion,t.set(m,M),m.addEventListener("dispose",g),M.texture):null}}}return m}function u(m,x){return x===so?m.mapping=ki:x===ao&&(m.mapping=nr),m}function d(m){let x=0,T=6;for(let I=0;I<T;I++)m[I]!==void 0&&x++;return x===T}function f(m){let x=m.target;x.removeEventListener("dispose",f);let T=e.get(x);T!==void 0&&(e.delete(x),T.dispose())}function g(m){let x=m.target;x.removeEventListener("dispose",g);let T=t.get(x);T!==void 0&&(t.delete(x),T.dispose())}function y(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:y}}function $x(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Qi("WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,e,t,n){let s={},o=new WeakMap;function c(y){let m=y.target;m.index!==null&&e.remove(m.index);for(let T in m.attributes)e.remove(m.attributes[T]);m.removeEventListener("dispose",c),delete s[m.id];let x=o.get(m);x&&(e.remove(x),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(y,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function d(y){let m=y.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER)}function f(y){let m=[],x=y.index,T=y.attributes.position,I=0;if(T===void 0)return;if(x!==null){let N=x.array;I=x.version;for(let k=0,R=N.length;k<R;k+=3){let P=N[k+0],D=N[k+1],O=N[k+2];m.push(P,D,D,O,O,P)}}else{let N=T.array;I=T.version;for(let k=0,R=N.length/3-1;k<R;k+=3){let P=k+0,D=k+1,O=k+2;m.push(P,D,D,O,O,P)}}let M=new(T.count>=65535?ds:us)(m,1);M.version=I;let _=o.get(y);_&&e.remove(_),o.set(y,M)}function g(y){let m=o.get(y);if(m){let x=y.index;x!==null&&m.version<x.version&&f(y)}else f(y);return o.get(y)}return{get:u,update:d,getWireframeAttribute:g}}function Yx(i,e,t){let n;function s(y){n=y}let o,c;function u(y){o=y.type,c=y.bytesPerElement}function d(y,m){i.drawElements(n,m,o,y*c),t.update(m,n,1)}function f(y,m,x){x!==0&&(i.drawElementsInstanced(n,m,o,y*c,x),t.update(m,n,x))}function g(y,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,y,0,x);let I=0;for(let M=0;M<x;M++)I+=m[M];t.update(I,n,1)}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=g}function jx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:nt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zx(i,e,t){let n=new WeakMap,s=new Vt;function o(c,u,d){let f=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0,m=n.get(u);if(m===void 0||m.count!==y){let L=function(){O.dispose(),n.delete(u),u.removeEventListener("dispose",L)};m!==void 0&&m.texture.dispose();let x=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],N=u.morphAttributes.color||[],k=0;x===!0&&(k=1),T===!0&&(k=2),I===!0&&(k=3);let R=u.attributes.position.count*k,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let D=new Float32Array(R*P*4*y),O=new ls(D,R,P,y);O.type=Qn,O.needsUpdate=!0;let w=k*4;for(let B=0;B<y;B++){let q=M[B],Y=_[B],J=N[B],H=R*P*4*B;for(let te=0;te<q.count;te++){let z=te*w;x===!0&&(s.fromBufferAttribute(q,te),D[H+z+0]=s.x,D[H+z+1]=s.y,D[H+z+2]=s.z,D[H+z+3]=0),T===!0&&(s.fromBufferAttribute(Y,te),D[H+z+4]=s.x,D[H+z+5]=s.y,D[H+z+6]=s.z,D[H+z+7]=0),I===!0&&(s.fromBufferAttribute(J,te),D[H+z+8]=s.x,D[H+z+9]=s.y,D[H+z+10]=s.z,D[H+z+11]=J.itemSize===4?s.w:1)}}m={count:y,texture:O,size:new it(R,P)},n.set(u,m),u.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let x=0;for(let I=0;I<f.length;I++)x+=f[I];let T=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function Jx(i,e,t,n,s){let o=new WeakMap;function c(f){let g=s.render.frame,y=f.geometry,m=e.get(f,y);if(o.get(m)!==g&&(e.update(m),o.set(m,g)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==g&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,g))),f.isSkinnedMesh){let x=f.skeleton;o.get(x)!==g&&(x.update(),o.set(x,g))}return m}function u(){o=new WeakMap}function d(f){let g=f.target;g.removeEventListener("dispose",d),n.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:u}}var Kx={[nc]:"LINEAR_TONE_MAPPING",[ic]:"REINHARD_TONE_MAPPING",[rc]:"CINEON_TONE_MAPPING",[sc]:"ACES_FILMIC_TONE_MAPPING",[oc]:"AGX_TONE_MAPPING",[lc]:"NEUTRAL_TONE_MAPPING",[ac]:"CUSTOM_TONE_MAPPING"};function Qx(i,e,t,n,s,o){let c=new xn(e,t,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,d=null,f=new gn;f.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let g=new Ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Sn(f,g),m=new Ur(-1,1,1,-1,0,1),x=null,T=null,I=!1,M,_=null,N=[],k=!1;this.setSize=function(R,P){c.setSize(R,P),u!==null&&u.setSize(R,P),d!==null&&d.setSize(R,P);for(let D=0;D<N.length;D++){let O=N[D];O.setSize&&O.setSize(R,P)}},this.setEffects=function(R){N=R,k=N.length>0&&N[0].isRenderPass===!0;let P=c.width,D=c.height;N.length>0&&u===null&&(u=new xn(P,D,{type:ei,depthBuffer:!1,stencilBuffer:!1}),d=new xn(P,D,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<N.length;O++){let w=N[O];w.setSize&&w.setSize(P,D)}},this.begin=function(R,P){if(I||R.toneMapping===Jn&&N.length===0)return!1;if(_=P,P!==null){let D=P.width,O=P.height;(c.width!==D||c.height!==O)&&this.setSize(D,O)}return k===!1&&R.setRenderTarget(c),M=R.toneMapping,R.toneMapping=Jn,!0},this.hasRenderPass=function(){return k},this.end=function(R,P){R.toneMapping=M,I=!0;let D=c,O=u;for(let w=0;w<N.length;w++){let L=N[w];L.enabled!==!1&&(L.render(R,O,D,P),L.needsSwap!==!1&&(D=O,O=O===u?d:u))}if(x!==R.outputColorSpace||T!==R.toneMapping){x=R.outputColorSpace,T=R.toneMapping,g.defines={},yt.getTransfer(x)===Pt&&(g.defines.SRGB_TRANSFER="");let w=Kx[T];w&&(g.defines[w]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(_),R.render(y,m),_=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),f.dispose(),g.dispose()}}var vd=new yn,Uc=new Di(1,1),yd=new ls,xd=new ka,Sd=new ps,Qu=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function $r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,o=Qu[s];if(o===void 0&&(o=new Float32Array(s),Qu[s]=o),e!==0){n.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(o,u)}return o}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=ed[e];t===void 0&&(t=new Int32Array(e),ed[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function nS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function iS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function rS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;id.set(n),i.uniformMatrix2fv(this.addr,!1,id),Jt(t,n)}}function sS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;nd.set(n),i.uniformMatrix3fv(this.addr,!1,nd),Jt(t,n)}}function aS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;td.set(n),i.uniformMatrix4fv(this.addr,!1,td),Jt(t,n)}}function oS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function cS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function hS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function uS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function fS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function pS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function mS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Uc.compareFunction=t.isReversedDepthBuffer()?qo:$o,o=Uc):o=vd,t.setTexture2D(e||o,s)}function gS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xd,s)}function _S(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sd,s)}function vS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yd,s)}function yS(i){switch(i){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return aS;case 5124:case 35670:return oS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return hS;case 5125:return uS;case 36294:return dS;case 36295:return fS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}function xS(i,e){i.uniform1fv(this.addr,e)}function SS(i,e){let t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function MS(i,e){let t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function bS(i,e){let t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function ES(i,e){let t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wS(i,e){let t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TS(i,e){let t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AS(i,e){i.uniform1iv(this.addr,e)}function CS(i,e){i.uniform2iv(this.addr,e)}function RS(i,e){i.uniform3iv(this.addr,e)}function PS(i,e){i.uniform4iv(this.addr,e)}function IS(i,e){i.uniform1uiv(this.addr,e)}function DS(i,e){i.uniform2uiv(this.addr,e)}function LS(i,e){i.uniform3uiv(this.addr,e)}function FS(i,e){i.uniform4uiv(this.addr,e)}function NS(i,e,t){let n=this.cache,s=e.length,o=el(t,s);Zt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));let c;this.type===i.SAMPLER_2D_SHADOW?c=Uc:c=vd;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function US(i,e,t){let n=this.cache,s=e.length,o=el(t,s);Zt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||xd,o[c])}function OS(i,e,t){let n=this.cache,s=e.length,o=el(t,s);Zt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Sd,o[c])}function BS(i,e,t){let n=this.cache,s=e.length,o=el(t,s);Zt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||yd,o[c])}function kS(i){switch(i){case 5126:return xS;case 35664:return SS;case 35665:return MS;case 35666:return bS;case 35674:return ES;case 35675:return wS;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return CS;case 35668:case 35672:return RS;case 35669:case 35673:return PS;case 5125:return IS;case 36294:return DS;case 36295:return LS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return BS}}var Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yS(t.type)}},Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kS(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let o=0,c=s.length;o!==c;++o){let u=s[o];u.setValue(e,t[u.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function zS(i,e,t){let n=i.name,s=n.length;for(Fc.lastIndex=0;;){let o=Fc.exec(n),c=Fc.lastIndex,u=o[1],d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===s){rd(t,f===void 0?new Oc(u,i,e):new Bc(u,i,e));break}else{let y=t.map[u];y===void 0&&(y=new kc(u),rd(t,y)),t=y}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<n;++c){let u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);zS(u,d,this)}let s=[],o=[];for(let c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){let o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,c=t.length;o!==c;++o){let u=t[o],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,o=e.length;s!==o;++s){let c=e[s];c.id in t&&n.push(c)}return n}};function sd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var VS=37297,GS=0;function HS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){let u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}var ad=new st;function WS(i){yt._getMatrix(ad,yt.workingColorSpace,i);let e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case as:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function od(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+HS(i.getShaderSource(e),u)}else return o}function XS(i,e){let t=WS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $S={[nc]:"Linear",[ic]:"Reinhard",[rc]:"Cineon",[sc]:"ACESFilmic",[oc]:"AgX",[lc]:"Neutral",[ac]:"Custom"};function qS(i,e){let t=$S[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new Z;function YS(){yt.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function ZS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(e,s),c=o.name,u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function Us(i){return i!==""}function ld(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(KS,eM)}var QS=new Map;function eM(i,e){let t=ft[e];if(t===void 0){let n=QS.get(e);if(n!==void 0)t=ft[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zc(t)}var tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(i){return i.replace(tM,nM)}function nM(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ud(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var iM={[ws]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function rM(i){return iM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sM={[ki]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE_UV"};function aM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var oM={[nr]:"ENVMAP_MODE_REFRACTION"};function lM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":oM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cM={[tc]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Ru]:"ENVMAP_BLENDING_ADD"};function hM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cM[i.combine]||"ENVMAP_BLENDING_NONE"}function uM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dM(i,e,t,n){let s=i.getContext(),o=t.defines,c=t.vertexShader,u=t.fragmentShader,d=rM(t),f=aM(t),g=lM(t),y=hM(t),m=uM(t),x=jS(t),T=ZS(o),I=s.createProgram(),M,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Us).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Us).join(`
`),_.length>0&&(_+=`
`)):(M=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),_=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?ft.tonemapping_pars_fragment:"",t.toneMapping!==Jn?qS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,XS("linearToOutputTexel",t.outputColorSpace),YS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),c=zc(c),c=ld(c,t),c=cd(c,t),u=zc(u),u=ld(u,t),u=cd(u,t),c=hd(c),u=hd(u),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let k=N+M+c,R=N+_+u,P=sd(s,s.VERTEX_SHADER,k),D=sd(s,s.FRAGMENT_SHADER,R);s.attachShader(I,P),s.attachShader(I,D),t.index0AttributeName!==void 0?s.bindAttribLocation(I,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function O(q){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(I)||"",J=s.getShaderInfoLog(P)||"",H=s.getShaderInfoLog(D)||"",te=Y.trim(),z=J.trim(),se=H.trim(),_e=!0,ae=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(_e=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,P,D);else{let V=od(s,P,"vertex"),ge=od(s,D,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+te+`
`+V+`
`+ge)}else te!==""?et("WebGLProgram: Program Info Log:",te):(z===""||se==="")&&(ae=!1);ae&&(q.diagnostics={runnable:_e,programLog:te,vertexShader:{log:z,prefix:M},fragmentShader:{log:se,prefix:_}})}s.deleteShader(P),s.deleteShader(D),w=new Xr(s,I),L=JS(s,I)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(I,VS)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GS++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=P,this.fragmentShader=D,this}var fM=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gc(e),t.set(e,n)),n}},Gc=class{constructor(e){this.id=fM++,this.code=e,this.usedTimes=0}};function pM(i){return i===Gi||i===Ds||i===Ls}function mM(i,e,t,n,s,o){let c=new cs,u=new Vc,d=new Set,f=[],g=new Map,y=n.logarithmicDepthBuffer,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return d.add(w),w===0?"uv":`uv${w}`}function I(w,L,B,q,Y,J){let H=q.fog,te=Y.geometry,z=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,se=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,_e=e.get(w.envMap||z,se),ae=_e&&_e.mapping===Ts?_e.image.height:null,V=x[w.type];w.precision!==null&&(m=n.getMaxPrecision(w.precision),m!==w.precision&&et("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let ge=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,je=ge!==void 0?ge.length:0,qe=0;te.morphAttributes.position!==void 0&&(qe=1),te.morphAttributes.normal!==void 0&&(qe=2),te.morphAttributes.color!==void 0&&(qe=3);let Ft,pt,Ke,he;if(V){let Lt=hi[V];Ft=Lt.vertexShader,pt=Lt.fragmentShader}else{Ft=w.vertexShader,pt=w.fragmentShader;let Lt=u.getVertexShaderStage(w),Et=u.getFragmentShaderStage(w);u.update(w,Lt,Et),Ke=Lt.id,he=Et.id}let fe=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),rt=Y.isInstancedMesh===!0,Be=Y.isBatchedMesh===!0,ct=!!w.map,Ht=!!w.matcap,ht=!!_e,mt=!!w.aoMap,tt=!!w.lightMap,Qe=!!w.bumpMap&&w.wireframe===!1,xt=!!w.normalMap,Ut=!!w.displacementMap,Ie=!!w.emissiveMap,Ue=!!w.metalnessMap,kt=!!w.roughnessMap,W=w.anisotropy>0,It=w.clearcoat>0,At=w.dispersion>0,U=w.retroreflectivity>0,S=w.iridescence>0,j=w.sheen>0,ne=w.transmission>0,oe=W&&!!w.anisotropyMap,we=It&&!!w.clearcoatMap,Ae=It&&!!w.clearcoatNormalMap,re=It&&!!w.clearcoatRoughnessMap,ue=S&&!!w.iridescenceMap,Ce=S&&!!w.iridescenceThicknessMap,Xe=j&&!!w.sheenColorMap,Se=j&&!!w.sheenRoughnessMap,Te=!!w.specularMap,He=!!w.specularColorMap,Je=!!w.specularIntensityMap,at=ne&&!!w.transmissionMap,X=ne&&!!w.thicknessMap,Re=!!w.gradientMap,de=!!w.alphaMap,Pe=w.alphaTest>0,Ne=!!w.alphaHash,me=!!w.extensions,Ye=Jn;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let We={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:Ft,fragmentShader:pt,defines:w.defines,customVertexShaderID:Ke,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Be,batchingColor:Be&&Y._colorsTexture!==null,instancing:rt,instancingColor:rt&&Y.instanceColor!==null,instancingMorph:rt&&Y.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Ht,envMap:ht,envMapMode:ht&&_e.mapping,envMapCubeUVHeight:ae,aoMap:mt,lightMap:tt,bumpMap:Qe,normalMap:xt,displacementMap:Ut,emissiveMap:Ie,normalMapObjectSpace:xt&&w.normalMapType===Du,normalMapTangentSpace:xt&&w.normalMapType===Xo,packedNormalMap:xt&&w.normalMapType===Xo&&pM(w.normalMap.format),metalnessMap:Ue,roughnessMap:kt,anisotropy:W,anisotropyMap:oe,clearcoat:It,clearcoatMap:we,clearcoatNormalMap:Ae,clearcoatRoughnessMap:re,dispersion:At,retroreflection:U,iridescence:S,iridescenceMap:ue,iridescenceThicknessMap:Ce,sheen:j,sheenColorMap:Xe,sheenRoughnessMap:Se,specularMap:Te,specularColorMap:He,specularIntensityMap:Je,transmission:ne,transmissionMap:at,thicknessMap:X,gradientMap:Re,opaque:w.transparent===!1&&w.blending===kr&&w.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Ne,combine:w.combine,mapUv:ct&&T(w.map.channel),aoMapUv:mt&&T(w.aoMap.channel),lightMapUv:tt&&T(w.lightMap.channel),bumpMapUv:Qe&&T(w.bumpMap.channel),normalMapUv:xt&&T(w.normalMap.channel),displacementMapUv:Ut&&T(w.displacementMap.channel),emissiveMapUv:Ie&&T(w.emissiveMap.channel),metalnessMapUv:Ue&&T(w.metalnessMap.channel),roughnessMapUv:kt&&T(w.roughnessMap.channel),anisotropyMapUv:oe&&T(w.anisotropyMap.channel),clearcoatMapUv:we&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&T(w.sheenRoughnessMap.channel),specularMapUv:Te&&T(w.specularMap.channel),specularColorMapUv:He&&T(w.specularColorMap.channel),specularIntensityMapUv:Je&&T(w.specularIntensityMap.channel),transmissionMapUv:at&&T(w.transmissionMap.channel),thicknessMapUv:X&&T(w.thicknessMap.channel),alphaMapUv:de&&T(w.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(xt||W),vertexNormals:!!te.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(ct||de),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||te.attributes.normal===void 0&&xt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ke,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:qe,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&yt.getTransfer(w.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ie&&w.emissiveMap.isVideoTexture===!0&&yt.getTransfer(w.emissiveMap.colorSpace)===Pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===On,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:me&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&w.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=d.has(1),We.vertexUv2s=d.has(2),We.vertexUv3s=d.has(3),d.clear(),We}function M(w){let L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(let B in w.defines)L.push(B),L.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(_(L,w),N(L,w),L.push(i.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function _(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function N(w,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.retroreflection&&c.enable(24),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function k(w){let L=x[w.type],B;if(L){let q=hi[L];B=$u.clone(q.uniforms)}else B=w.uniforms;return B}function R(w,L){let B=g.get(L);return B!==void 0?++B.usedTimes:(B=new dM(i,L,w,s),f.push(B),g.set(L,B)),B}function P(w){if(--w.usedTimes===0){let L=f.indexOf(w);f[L]=f[f.length-1],f.pop(),g.delete(w.cacheKey),w.destroy()}}function D(w){u.remove(w)}function O(){u.dispose()}return{getParameters:I,getProgramCacheKey:M,getUniforms:k,acquireProgram:R,releaseProgram:P,releaseShaderCache:D,programs:f,dispose:O}}function gM(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function n(c){i.delete(c)}function s(c,u,d){i.get(c)[u]=d}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function _M(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fd(){let i=[],e=0,t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function u(m,x,T,I,M,_){let N=i[e];return N===void 0?(N={id:m.id,object:m,geometry:x,material:T,materialVariant:c(m),groupOrder:I,renderOrder:m.renderOrder,z:M,group:_},i[e]=N):(N.id=m.id,N.object=m,N.geometry=x,N.material=T,N.materialVariant=c(m),N.groupOrder=I,N.renderOrder=m.renderOrder,N.z=M,N.group=_),e++,N}function d(m,x,T,I,M,_,N){N.reversedDepth===!0&&(M=-M);let k=u(m,x,T,I,M,_);T.transmission>0?n.push(k):T.transparent===!0?s.push(k):t.push(k)}function f(m,x,T,I,M,_){let N=u(m,x,T,I,M,_);T.transmission>0?n.unshift(N):T.transparent===!0?s.unshift(N):t.unshift(N)}function g(m,x){t.length>1&&t.sort(m||_M),n.length>1&&n.sort(x||dd),s.length>1&&s.sort(x||dd)}function y(){for(let m=e,x=i.length;m<x;m++){let T=i[m];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:d,unshift:f,finish:y,sort:g}}function vM(){let i=new WeakMap;function e(n,s){let o=i.get(n),c;return o===void 0?(c=new fd,i.set(n,[c])):s>=o.length?(c=new fd,o.push(c)):c=o[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function yM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new ut};break;case"SpotLight":t={position:new Z,direction:new Z,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function xM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var SM=0;function MM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bM(i){let e=new yM,t=xM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new Z);let s=new Z,o=new Bt,c=new Bt;function u(f){let g=0,y=0,m=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let x=0,T=0,I=0,M=0,_=0,N=0,k=0,R=0,P=0,D=0,O=0,w=0,L=0,B=0;f.sort(MM);for(let Y=0,J=f.length;Y<J;Y++){let H=f[Y],te=H.color,z=H.intensity,se=H.distance,_e=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Gi?_e=H.shadow.map.texture:_e=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=te.r*z,y+=te.g*z,m+=te.b*z;else if(H.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(H.sh.coefficients[ae],z);B++}else if(H.isSunLight){let ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let V=H.shadow,ge=t.get(H);ge.shadowIntensity=V.intensity,ge.shadowBias=V.bias,ge.shadowNormalBias=V.normalBias,ge.shadowRadius=V.radius,ge.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[T]=ge,n.sunShadowMap[T]=_e;let je=V.getViewportCount();for(let qe=0;qe<je;qe++)n.sunShadowMatrix[I+qe]=V.getMatrix(qe),n.sunShadowCascade[I+qe]=V._cascadeData[qe];I+=je,T++}n.sun[x]=ae,x++}else if(H.isDirectionalLight){let ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let V=H.shadow,ge=t.get(H);ge.shadowIntensity=V.intensity,ge.shadowBias=V.bias,ge.shadowNormalBias=V.normalBias,ge.shadowRadius=V.radius,ge.shadowMapSize=V.mapSize,n.directionalShadow[M]=ge,n.directionalShadowMap[M]=_e,n.directionalShadowMatrix[M]=H.shadow.matrix,P++}n.directional[M]=ae,M++}else if(H.isSpotLight){let ae=e.get(H);ae.position.setFromMatrixPosition(H.matrixWorld),ae.color.copy(te).multiplyScalar(z),ae.distance=se,ae.coneCos=Math.cos(H.angle),ae.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ae.decay=H.decay,n.spot[N]=ae;let V=H.shadow;if(H.map&&(n.spotLightMap[w]=H.map,w++,V.updateMatrices(H),H.castShadow&&L++),n.spotLightMatrix[N]=V.matrix,H.castShadow){let ge=t.get(H);ge.shadowIntensity=V.intensity,ge.shadowBias=V.bias,ge.shadowNormalBias=V.normalBias,ge.shadowRadius=V.radius,ge.shadowMapSize=V.mapSize,n.spotShadow[N]=ge,n.spotShadowMap[N]=_e,O++}N++}else if(H.isRectAreaLight){let ae=e.get(H);ae.color.copy(te).multiplyScalar(z),ae.halfWidth.set(H.width*.5,0,0),ae.halfHeight.set(0,H.height*.5,0),n.rectArea[k]=ae,k++}else if(H.isPointLight){let ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),ae.distance=H.distance,ae.decay=H.decay,H.castShadow){let V=H.shadow,ge=t.get(H);ge.shadowIntensity=V.intensity,ge.shadowBias=V.bias,ge.shadowNormalBias=V.normalBias,ge.shadowRadius=V.radius,ge.shadowMapSize=V.mapSize,ge.shadowCameraNear=V.camera.near,ge.shadowCameraFar=V.camera.far,n.pointShadow[_]=ge,n.pointShadowMap[_]=_e,n.pointShadowMatrix[_]=H.shadow.matrix,D++}n.point[_]=ae,_++}else if(H.isHemisphereLight){let ae=e.get(H);ae.skyColor.copy(H.color).multiplyScalar(z),ae.groundColor.copy(H.groundColor).multiplyScalar(z),n.hemi[R]=ae,R++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=y,n.ambient[2]=m;let q=n.hash;(q.sunLength!==x||q.directionalLength!==M||q.pointLength!==_||q.spotLength!==N||q.rectAreaLength!==k||q.hemiLength!==R||q.numSunShadows!==T||q.numDirectionalShadows!==P||q.numPointShadows!==D||q.numSpotShadows!==O||q.numSpotMaps!==w||q.numLightProbes!==B)&&(n.sun.length=x,n.directional.length=M,n.spot.length=N,n.rectArea.length=k,n.point.length=_,n.hemi.length=R,n.sunShadow.length=T,n.sunShadowMap.length=T,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=B,q.sunLength=x,q.directionalLength=M,q.pointLength=_,q.spotLength=N,q.rectAreaLength=k,q.hemiLength=R,q.numSunShadows=T,q.numDirectionalShadows=P,q.numPointShadows=D,q.numSpotShadows=O,q.numSpotMaps=w,q.numLightProbes=B,n.version=SM++)}function d(f,g){let y=0,m=0,x=0,T=0,I=0,M=0,_=g.matrixWorldInverse;for(let N=0,k=f.length;N<k;N++){let R=f[N];if(R.isSunLight){let P=n.sun[y];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(_),y++}else if(R.isDirectionalLight){let P=n.directional[m];P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),m++}else if(R.isSpotLight){let P=n.spot[T];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),T++}else if(R.isRectAreaLight){let P=n.rectArea[I];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(_),c.identity(),o.copy(R.matrixWorld),o.premultiply(_),c.extractRotation(o),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),I++}else if(R.isPointLight){let P=n.point[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(_),x++}else if(R.isHemisphereLight){let P=n.hemi[M];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(_),M++}}}return{setup:u,setupView:d,state:n}}function pd(i){let e=new bM(i),t=[],n=[],s=[];function o(m){y.camera=m,t.length=0,n.length=0,s.length=0}function c(m){t.push(m)}function u(m){n.push(m)}function d(m){s.push(m)}function f(){e.setup(t)}function g(m){e.setupView(t,m)}let y={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:y,setupLights:f,setupLightsView:g,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function EM(i){let e=new WeakMap;function t(s,o=0){let c=e.get(s),u;return c===void 0?(u=new pd(i),e.set(s,[u])):o>=c.length?(u=new pd(i),c.push(u)):u=c[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}var wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
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
}`,AM=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],CM=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],md=new Bt,Ns=new Z,Nc=new Z;function RM(i,e,t){let n=new Fr,s=new it,o=new it,c=new Vt,u=new Ha,d=new Wa,f={},g=t.maxTextureSize,y={[oi]:_n,[_n]:oi,[On]:On},m=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:wM,fragmentShader:TM}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let T=new gn;T.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Sn(T,m),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let _=this.type;this.render=function(D,O,w){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===cu&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let L=i.getRenderTarget(),B=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(li),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let J=_!==this.type;J&&O.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(te=>te.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,te=D.length;H<te;H++){let z=D[H],se=z.shadow;if(se===void 0){et("WebGLShadowMap:",z,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);let _e=se.getFrameExtents();s.multiply(_e),o.copy(se.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(o.x=Math.floor(g/_e.x),s.x=o.x*_e.x,se.mapSize.x=o.x),s.y>g&&(o.y=Math.floor(g/_e.y),s.y=o.y*_e.y,se.mapSize.y=o.y));let ae=i.state.buffers.depth.getReversed();if(se.camera._reversedDepth=ae,se.map===null||J===!0){if(se.map!==null&&(se.map.depthTexture!==null&&(se.map.depthTexture.dispose(),se.map.depthTexture=null),se.map.dispose()),this.type===Br){if(z.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}se.map=new xn(s.x,s.y,{format:Gi,type:ei,minFilter:nn,magFilter:nn,generateMipmaps:!1}),se.map.texture.name=z.name+".shadowMap",se.map.depthTexture=new Di(s.x,s.y,Qn),se.map.depthTexture.name=z.name+".shadowMapDepth",se.map.depthTexture.format=ai,se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=tn,se.map.depthTexture.magFilter=tn}else z.isPointLight?(se.map=new Jo(s.x),se.map.depthTexture=new Va(s.x,Kn)):(se.map=new xn(s.x,s.y),se.map.depthTexture=new Di(s.x,s.y,Kn)),se.map.depthTexture.name=z.name+".shadowMap",se.map.depthTexture.format=ai,this.type===ws?(se.map.depthTexture.compareFunction=ae?qo:$o,se.map.depthTexture.minFilter=nn,se.map.depthTexture.magFilter=nn):(se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=tn,se.map.depthTexture.magFilter=tn);se.camera.updateProjectionMatrix()}se.map.isWebGLCubeRenderTarget!==!0&&(se.map.width!==s.x||se.map.height!==s.y)&&se.map.setSize(s.x,s.y);let V=se.map.isWebGLCubeRenderTarget?6:se.getViewportCount();z.isPointLight!==!0&&se.updateMatrices(z,w);for(let ge=0;ge<V;ge++){let je=se.getCamera(ge);if(z.isPointLight){let qe=se.camera,Ft=se.matrix,pt=z.distance||qe.far;pt!==qe.far&&(qe.far=pt,qe.updateProjectionMatrix()),Ns.setFromMatrixPosition(z.matrixWorld),qe.position.copy(Ns),Nc.copy(qe.position),Nc.add(AM[ge]),qe.up.copy(CM[ge]),qe.lookAt(Nc),qe.updateMatrixWorld(),Ft.makeTranslation(-Ns.x,-Ns.y,-Ns.z),md.multiplyMatrices(qe.projectionMatrix,qe.matrixWorldInverse),se._frustum.setFromProjectionMatrix(md,qe.coordinateSystem,qe.reversedDepth)}if(se.map.isWebGLCubeRenderTarget)i.setRenderTarget(se.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(se.map),i.clear());let qe=se.getViewport(ge);c.set(o.x*qe.x,o.y*qe.y,o.x*qe.z,o.y*qe.w),Y.viewport(c)}n=se.getFrustum(ge),R(O,w,je,z,this.type)}se.isPointLightShadow!==!0&&this.type===Br&&N(se,w),se.needsUpdate=!1}_=this.type,M.needsUpdate=!1,i.setRenderTarget(L,B,q)};function N(D,O){let w=e.update(I);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new xn(s.x,s.y,{format:Gi,type:ei}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value.set(D.map.width,D.map.height),m.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(O,null,w,m,I,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(O,null,w,x,I,null)}function k(D,O,w,L){let B=null,q=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(q!==void 0)B=q;else if(B=w.isPointLight===!0?d:u,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let Y=B.uuid,J=O.uuid,H=f[Y];H===void 0&&(H={},f[Y]=H);let te=H[J];te===void 0&&(te=B.clone(),H[J]=te,O.addEventListener("dispose",P)),B=te}if(B.visible=O.visible,B.wireframe=O.wireframe,L===Br?B.side=O.shadowSide!==null?O.shadowSide:O.side:B.side=O.shadowSide!==null?O.shadowSide:y[O.side],B.alphaMap=O.alphaMap,B.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,B.map=O.map,B.clipShadows=O.clipShadows,B.clippingPlanes=O.clippingPlanes,B.clipIntersection=O.clipIntersection,B.displacementMap=O.displacementMap,B.displacementScale=O.displacementScale,B.displacementBias=O.displacementBias,B.wireframeLinewidth=O.wireframeLinewidth,B.linewidth=O.linewidth,w.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let Y=i.properties.get(B);Y.light=w}return B}function R(D,O,w,L,B){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&B===Br)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);let J=e.update(D),H=D.material;if(Array.isArray(H)){let te=J.groups;for(let z=0,se=te.length;z<se;z++){let _e=te[z],ae=H[_e.materialIndex];if(ae&&ae.visible){let V=k(D,ae,L,B);D.onBeforeShadow(i,D,O,w,J,V,_e),i.renderBufferDirect(w,null,J,V,D,_e),D.onAfterShadow(i,D,O,w,J,V,_e)}}}else if(H.visible){let te=k(D,H,L,B);D.onBeforeShadow(i,D,O,w,J,te,null),i.renderBufferDirect(w,null,J,te,D,null),D.onAfterShadow(i,D,O,w,J,te,null)}}let Y=D.children;for(let J=0,H=Y.length;J<H;J++)R(Y[J],O,w,L,B)}function P(D){D.target.removeEventListener("dispose",P);for(let w in f){let L=f[w],B=D.target.uuid;B in L&&(L[B].dispose(),delete L[B])}}}function PM(i,e){function t(){let X=!1,Re=new Vt,de=null,Pe=new Vt(0,0,0,0);return{setMask:function(Ne){de!==Ne&&!X&&(i.colorMask(Ne,Ne,Ne,Ne),de=Ne)},setLocked:function(Ne){X=Ne},setClear:function(Ne,me,Ye,We,Lt){Lt===!0&&(Ne*=We,me*=We,Ye*=We),Re.set(Ne,me,Ye,We),Pe.equals(Re)===!1&&(i.clearColor(Ne,me,Ye,We),Pe.copy(Re))},reset:function(){X=!1,de=null,Pe.set(-1,0,0,0)}}}function n(){let X=!1,Re=!1,de=null,Pe=null,Ne=null;return{setReversed:function(me){if(Re!==me){let Ye=e.get("EXT_clip_control");me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Re=me;let We=Ne;Ne=null,this.setClear(We)}},getReversed:function(){return Re},setTest:function(me){me?fe(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(me){de!==me&&!X&&(i.depthMask(me),de=me)},setFunc:function(me){if(Re&&(me=Wu[me]),Pe!==me){switch(me){case Aa:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=me}},setLocked:function(me){X=me},setClear:function(me){Ne!==me&&(Ne=me,Re&&(me=1-me),i.clearDepth(me))},reset:function(){X=!1,de=null,Pe=null,Ne=null,Re=!1}}}function s(){let X=!1,Re=null,de=null,Pe=null,Ne=null,me=null,Ye=null,We=null,Lt=null;return{setTest:function(Et){X||(Et?fe(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!X&&(i.stencilMask(Et),Re=Et)},setFunc:function(Et,En,kn){(de!==Et||Pe!==En||Ne!==kn)&&(i.stencilFunc(Et,En,kn),de=Et,Pe=En,Ne=kn)},setOp:function(Et,En,kn){(me!==Et||Ye!==En||We!==kn)&&(i.stencilOp(Et,En,kn),me=Et,Ye=En,We=kn)},setLocked:function(Et){X=Et},setClear:function(Et){Lt!==Et&&(i.clearStencil(Et),Lt=Et)},reset:function(){X=!1,Re=null,de=null,Pe=null,Ne=null,me=null,Ye=null,We=null,Lt=null}}}let o=new t,c=new n,u=new s,d=new WeakMap,f=new WeakMap,g={},y={},m={},x=new WeakMap,T=[],I=null,M=!1,_=null,N=null,k=null,R=null,P=null,D=null,O=null,w=new ut(0,0,0),L=0,B=!1,q=null,Y=null,J=null,H=null,te=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,_e=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(ae)[1]),se=_e>=1):ae.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),se=_e>=2);let V=null,ge={},je=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),Ft=new Vt().fromArray(je),pt=new Vt().fromArray(qe);function Ke(X,Re,de,Pe){let Ne=new Uint8Array(4),me=i.createTexture();i.bindTexture(X,me),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<de;Ye++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Re+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return me}let he={};he[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(i.DEPTH_TEST),c.setFunc(Tr),Qe(!1),xt(jl),fe(i.CULL_FACE),mt(li);function fe(X){g[X]!==!0&&(i.enable(X),g[X]=!0)}function ke(X){g[X]!==!1&&(i.disable(X),g[X]=!1)}function rt(X,Re){return m[X]!==Re?(i.bindFramebuffer(X,Re),m[X]=Re,X===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Re),X===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function Be(X,Re){let de=T,Pe=!1;if(X){de=x.get(Re),de===void 0&&(de=[],x.set(Re,de));let Ne=X.textures;if(de.length!==Ne.length||de[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Ye=Ne.length;me<Ye;me++)de[me]=i.COLOR_ATTACHMENT0+me;de.length=Ne.length,Pe=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(de)}function ct(X){return I!==X?(i.useProgram(X),I=X,!0):!1}let Ht={[tr]:i.FUNC_ADD,[uu]:i.FUNC_SUBTRACT,[du]:i.FUNC_REVERSE_SUBTRACT};Ht[fu]=i.MIN,Ht[pu]=i.MAX;let ht={[mu]:i.ZERO,[gu]:i.ONE,[_u]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[yu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[Mu]:i.ONE_MINUS_DST_COLOR,[xu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[wu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Re,de,Pe,Ne,me,Ye,We,Lt,Et){if(X===li){M===!0&&(ke(i.BLEND),M=!1);return}if(M===!1&&(fe(i.BLEND),M=!0),X!==hu){if(X!==_||Et!==B){if((N!==tr||P!==tr)&&(i.blendEquation(i.FUNC_ADD),N=tr,P=tr),Et)switch(X){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",X);break}else switch(X){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jl:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",X);break}k=null,R=null,D=null,O=null,w.set(0,0,0),L=0,_=X,B=Et}return}Ne=Ne||Re,me=me||de,Ye=Ye||Pe,(Re!==N||Ne!==P)&&(i.blendEquationSeparate(Ht[Re],Ht[Ne]),N=Re,P=Ne),(de!==k||Pe!==R||me!==D||Ye!==O)&&(i.blendFuncSeparate(ht[de],ht[Pe],ht[me],ht[Ye]),k=de,R=Pe,D=me,O=Ye),(We.equals(w)===!1||Lt!==L)&&(i.blendColor(We.r,We.g,We.b,Lt),w.copy(We),L=Lt),_=X,B=!1}function tt(X,Re){X.side===On?ke(i.CULL_FACE):fe(i.CULL_FACE);let de=X.side===_n;Re&&(de=!de),Qe(de),X.blending===kr&&X.transparent===!1?mt(li):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),o.setMask(X.colorWrite);let Pe=X.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ie(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(X){q!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),q=X)}function xt(X){X!==ou?(fe(i.CULL_FACE),X!==Y&&(X===jl?i.cullFace(i.BACK):X===lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),Y=X}function Ut(X){X!==J&&(se&&i.lineWidth(X),J=X)}function Ie(X,Re,de){X?(fe(i.POLYGON_OFFSET_FILL),(H!==Re||te!==de)&&(H=Re,te=de,c.getReversed()&&(Re=-Re),i.polygonOffset(Re,de))):ke(i.POLYGON_OFFSET_FILL)}function Ue(X){X?fe(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function kt(X){X===void 0&&(X=i.TEXTURE0+z-1),V!==X&&(i.activeTexture(X),V=X)}function W(X,Re,de){de===void 0&&(V===null?de=i.TEXTURE0+z-1:de=V);let Pe=ge[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},ge[de]=Pe),(Pe.type!==X||Pe.texture!==Re)&&(V!==de&&(i.activeTexture(de),V=de),i.bindTexture(X,Re||he[X]),Pe.type=X,Pe.texture=Re)}function It(){let X=ge[V];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function At(){try{i.compressedTexImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function S(){try{i.texSubImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function j(){try{i.texSubImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function we(){try{i.texStorage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function Ae(){try{i.texStorage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function re(){try{i.texImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function ue(){try{i.texImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function Ce(X){return y[X]!==void 0?y[X]:i.getParameter(X)}function Xe(X,Re){y[X]!==Re&&(i.pixelStorei(X,Re),y[X]=Re)}function Se(X){Ft.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Ft.copy(X))}function Te(X){pt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),pt.copy(X))}function He(X,Re){let de=f.get(Re);de===void 0&&(de=new WeakMap,f.set(Re,de));let Pe=de.get(X);Pe===void 0&&(Pe=i.getUniformBlockIndex(Re,X.name),de.set(X,Pe))}function Je(X,Re){let Pe=f.get(Re).get(X);d.get(Re)!==Pe&&(i.uniformBlockBinding(Re,Pe,X.__bindingPointIndex),d.set(Re,Pe))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},y={},V=null,ge={},m={},x=new WeakMap,T=[],I=null,M=!1,_=null,N=null,k=null,R=null,P=null,D=null,O=null,w=new ut(0,0,0),L=0,B=!1,q=null,Y=null,J=null,H=null,te=null,Ft.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:fe,disable:ke,bindFramebuffer:rt,drawBuffers:Be,useProgram:ct,setBlending:mt,setMaterial:tt,setFlipSided:Qe,setCullFace:xt,setLineWidth:Ut,setPolygonOffset:Ie,setScissorTest:Ue,activeTexture:kt,bindTexture:W,unbindTexture:It,compressedTexImage2D:At,compressedTexImage3D:U,texImage2D:re,texImage3D:ue,pixelStorei:Xe,getParameter:Ce,updateUBOMapping:He,uniformBlockBinding:Je,texStorage2D:we,texStorage3D:Ae,texSubImage2D:S,texSubImage3D:j,compressedTexSubImage2D:ne,compressedTexSubImage3D:oe,scissor:Se,viewport:Te,reset:at}}function IM(i,e,t,n,s,o,c){let u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new it,g=new WeakMap,y=new Set,m,x=new WeakMap,T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,S){return T?new OffscreenCanvas(U,S):os("canvas")}function M(U,S,j){let ne=1,oe=At(U);if((oe.width>j||oe.height>j)&&(ne=j/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let we=Math.floor(ne*oe.width),Ae=Math.floor(ne*oe.height);m===void 0&&(m=I(we,Ae));let re=S?I(we,Ae):m;return re.width=we,re.height=Ae,re.getContext("2d").drawImage(U,0,0,we,Ae),et("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+we+"x"+Ae+")."),re}else return"data"in U&&et("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),U;return U}function _(U){return U.generateMipmaps}function N(U){i.generateMipmap(U)}function k(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(U,S,j,ne,oe,we=!1){if(U!==null){if(i[U]!==void 0)return i[U];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ae;ne&&(Ae=e.get("EXT_texture_norm16"),Ae||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=S;if(S===i.RED&&(j===i.FLOAT&&(re=i.R32F),j===i.HALF_FLOAT&&(re=i.R16F),j===i.UNSIGNED_BYTE&&(re=i.R8),j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.R16_EXT),j===i.SHORT&&Ae&&(re=Ae.R16_SNORM_EXT)),S===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.R8UI),j===i.UNSIGNED_SHORT&&(re=i.R16UI),j===i.UNSIGNED_INT&&(re=i.R32UI),j===i.BYTE&&(re=i.R8I),j===i.SHORT&&(re=i.R16I),j===i.INT&&(re=i.R32I)),S===i.RG&&(j===i.FLOAT&&(re=i.RG32F),j===i.HALF_FLOAT&&(re=i.RG16F),j===i.UNSIGNED_BYTE&&(re=i.RG8),j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.RG16_EXT),j===i.SHORT&&Ae&&(re=Ae.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.RG8UI),j===i.UNSIGNED_SHORT&&(re=i.RG16UI),j===i.UNSIGNED_INT&&(re=i.RG32UI),j===i.BYTE&&(re=i.RG8I),j===i.SHORT&&(re=i.RG16I),j===i.INT&&(re=i.RG32I)),S===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.RGB8UI),j===i.UNSIGNED_SHORT&&(re=i.RGB16UI),j===i.UNSIGNED_INT&&(re=i.RGB32UI),j===i.BYTE&&(re=i.RGB8I),j===i.SHORT&&(re=i.RGB16I),j===i.INT&&(re=i.RGB32I)),S===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),j===i.UNSIGNED_INT&&(re=i.RGBA32UI),j===i.BYTE&&(re=i.RGBA8I),j===i.SHORT&&(re=i.RGBA16I),j===i.INT&&(re=i.RGBA32I)),S===i.RGB&&(j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.RGB16_EXT),j===i.SHORT&&Ae&&(re=Ae.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),S===i.RGBA){let ue=we?as:yt.getTransfer(oe);j===i.FLOAT&&(re=i.RGBA32F),j===i.HALF_FLOAT&&(re=i.RGBA16F),j===i.UNSIGNED_BYTE&&(re=ue===Pt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.RGBA16_EXT),j===i.SHORT&&Ae&&(re=Ae.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(U,S){let j;return U?S===null||S===Kn||S===Vr?j=i.DEPTH24_STENCIL8:S===Qn?j=i.DEPTH32F_STENCIL8:S===zr&&(j=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kn||S===Vr?j=i.DEPTH_COMPONENT24:S===Qn?j=i.DEPTH_COMPONENT32F:S===zr&&(j=i.DEPTH_COMPONENT16),j}function D(U,S){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==tn&&U.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function O(U){let S=U.target;S.removeEventListener("dispose",O),L(S),S.isVideoTexture&&g.delete(S),S.isHTMLTexture&&y.delete(S)}function w(U){let S=U.target;S.removeEventListener("dispose",w),q(S)}function L(U){let S=n.get(U);if(S.__webglInit===void 0)return;let j=U.source,ne=x.get(j);if(ne){let oe=ne[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&B(U),Object.keys(ne).length===0&&x.delete(j)}n.remove(U)}function B(U){let S=n.get(U);i.deleteTexture(S.__webglTexture);let j=U.source,ne=x.get(j);delete ne[S.__cacheKey],c.memory.textures--}function q(U){let S=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let oe=0;oe<S.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=U.textures;for(let ne=0,oe=j.length;ne<oe;ne++){let we=n.get(j[ne]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),c.memory.textures--),n.remove(j[ne])}n.remove(U)}let Y=0;function J(){Y=0}function H(){return Y}function te(U){Y=U}function z(){let U=Y;return U>=s.maxTextures&&et("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,U}function se(U){let S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function _e(U,S){let j=n.get(U);if(U.isVideoTexture&&W(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){let ne=U.image;if(ne===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(j,U,S);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+S)}function ae(U,S){let j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){ke(j,U,S);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+S)}function V(U,S){let j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){ke(j,U,S);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+S)}function ge(U,S){let j=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){rt(j,U,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+S)}let je={[Fa]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},qe={[tn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},Ft={[Fu]:i.NEVER,[ku]:i.ALWAYS,[Nu]:i.LESS,[$o]:i.LEQUAL,[Uu]:i.EQUAL,[qo]:i.GEQUAL,[Ou]:i.GREATER,[Bu]:i.NOTEQUAL};function pt(U,S){if(S.type===Qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===oo||S.magFilter===As||S.magFilter===zi||S.minFilter===nn||S.minFilter===oo||S.minFilter===As||S.minFilter===zi)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,je[S.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,je[S.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,je[S.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,qe[S.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,qe[S.minFilter]),S.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ft[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==As&&S.minFilter!==zi||S.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(U,S){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",O));let ne=S.source,oe=x.get(ne);oe===void 0&&(oe={},x.set(ne,oe));let we=se(S);if(we!==U.__cacheKey){oe[we]===void 0&&(oe[we]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,j=!0),oe[we].usedTimes++;let Ae=oe[U.__cacheKey];Ae!==void 0&&(oe[U.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(S)),U.__cacheKey=we,U.__webglTexture=oe[we].texture}return j}function he(U,S,j){return Math.floor(Math.floor(U/j)/S)}function fe(U,S,j,ne){let we=U.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,j,ne,S.data);else{we.sort((Xe,Se)=>Xe.start-Se.start);let Ae=0;for(let Xe=1;Xe<we.length;Xe++){let Se=we[Ae],Te=we[Xe],He=Se.start+Se.count,Je=he(Te.start,S.width,4),at=he(Se.start,S.width,4);Te.start<=He+1&&Je===at&&he(Te.start+Te.count-1,S.width,4)===Je?Se.count=Math.max(Se.count,Te.start+Te.count-Se.start):(++Ae,we[Ae]=Te)}we.length=Ae+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Xe=0,Se=we.length;Xe<Se;Xe++){let Te=we[Xe],He=Math.floor(Te.start/4),Je=Math.ceil(Te.count/4),at=He%S.width,X=Math.floor(He/S.width),Re=Je,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,at,X,Re,de,j,ne,S.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function ke(U,S,j){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);let oe=Ke(U,S),we=S.source;t.bindTexture(ne,U.__webglTexture,i.TEXTURE0+j);let Ae=n.get(we);if(we.version!==Ae.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let de=yt.getPrimaries(yt.workingColorSpace),Pe=S.colorSpace===yi?null:yt.getPrimaries(S.colorSpace),Ne=S.colorSpace===yi||de===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ue=M(S.image,!1,s.maxTextureSize);ue=It(S,ue);let Ce=o.convert(S.format,S.colorSpace),Xe=o.convert(S.type),Se=R(S.internalFormat,Ce,Xe,S.normalized,S.colorSpace,S.isVideoTexture);pt(ne,S);let Te,He=S.mipmaps,Je=S.isVideoTexture!==!0,at=Ae.__version===void 0||oe===!0,X=we.dataReady,Re=D(S,ue);if(S.isDepthTexture)Se=P(S.format===Vi,S.type),at&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Se,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Se,ue.width,ue.height,0,Ce,Xe,null));else if(S.isDataTexture)if(He.length>0){Je&&at&&t.texStorage2D(i.TEXTURE_2D,Re,Se,He[0].width,He[0].height);for(let de=0,Pe=He.length;de<Pe;de++)Te=He[de],Je?X&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,Ce,Xe,Te.data):t.texImage2D(i.TEXTURE_2D,de,Se,Te.width,Te.height,0,Ce,Xe,Te.data);S.generateMipmaps=!1}else Je?(at&&t.texStorage2D(i.TEXTURE_2D,Re,Se,ue.width,ue.height),X&&fe(S,ue,Ce,Xe)):t.texImage2D(i.TEXTURE_2D,0,Se,ue.width,ue.height,0,Ce,Xe,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Se,He[0].width,He[0].height,ue.depth);for(let de=0,Pe=He.length;de<Pe;de++)if(Te=He[de],S.format!==Bn)if(Ce!==null)if(Je){if(X)if(S.layerUpdates.size>0){let Ne=Ec(Te.width,Te.height,S.format,S.type);for(let me of S.layerUpdates){let Ye=Te.data.subarray(me*Ne/Te.data.BYTES_PER_ELEMENT,(me+1)*Ne/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,me,Te.width,Te.height,1,Ce,Ye)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,ue.depth,Ce,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Se,Te.width,Te.height,ue.depth,0,Te.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,ue.depth,Ce,Xe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Se,Te.width,Te.height,ue.depth,0,Ce,Xe,Te.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Je&&at&&t.texStorage2D(i.TEXTURE_2D,Re,Se,He[0].width,He[0].height);for(let de=0,Pe=He.length;de<Pe;de++)Te=He[de],S.format!==Bn?Ce!==null?Je?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Se,Te.width,Te.height,0,Te.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?X&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,Ce,Xe,Te.data):t.texImage2D(i.TEXTURE_2D,de,Se,Te.width,Te.height,0,Ce,Xe,Te.data)}else if(S.isDataArrayTexture)if(Je){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Se,ue.width,ue.height,ue.depth),X)if(S.layerUpdates.size>0){let de=Ec(ue.width,ue.height,S.format,S.type);for(let Pe of S.layerUpdates){let Ne=ue.data.subarray(Pe*de/ue.data.BYTES_PER_ELEMENT,(Pe+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,ue.width,ue.height,1,Ce,Xe,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ce,Xe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ue.width,ue.height,ue.depth,0,Ce,Xe,ue.data);else if(S.isData3DTexture)Je?(at&&t.texStorage3D(i.TEXTURE_3D,Re,Se,ue.width,ue.height,ue.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ce,Xe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ue.width,ue.height,ue.depth,0,Ce,Xe,ue.data);else if(S.isFramebufferTexture){if(at)if(Je)t.texStorage2D(i.TEXTURE_2D,Re,Se,ue.width,ue.height);else{let de=ue.width,Pe=ue.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Se,de,Pe,0,Ce,Xe,null),de>>=1,Pe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),ue.parentNode!==de){de.appendChild(ue),y.add(S),de.onpaint=Pe=>{let Ne=Pe.changedElements;for(let me of y)Ne.includes(me.image)&&(me.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Ne=i.RGBA,me=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,me,Ye,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(He.length>0){if(Je&&at){let de=At(He[0]);t.texStorage2D(i.TEXTURE_2D,Re,Se,de.width,de.height)}for(let de=0,Pe=He.length;de<Pe;de++)Te=He[de],Je?X&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ce,Xe,Te):t.texImage2D(i.TEXTURE_2D,de,Se,Ce,Xe,Te);S.generateMipmaps=!1}else if(Je){if(at){let de=At(ue);t.texStorage2D(i.TEXTURE_2D,Re,Se,de.width,de.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Xe,ue)}else t.texImage2D(i.TEXTURE_2D,0,Se,Ce,Xe,ue);_(S)&&N(ne),Ae.__version=we.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function rt(U,S,j){if(S.image.length!==6)return;let ne=Ke(U,S),oe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);let we=n.get(oe);if(oe.version!==we.__version||ne===!0){t.activeTexture(i.TEXTURE0+j);let Ae=yt.getPrimaries(yt.workingColorSpace),re=S.colorSpace===yi?null:yt.getPrimaries(S.colorSpace),ue=S.colorSpace===yi||Ae===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let me=0;me<6;me++)!Ce&&!Xe?Se[me]=M(S.image[me],!0,s.maxCubemapSize):Se[me]=Xe?S.image[me].image:S.image[me],Se[me]=It(S,Se[me]);let Te=Se[0],He=o.convert(S.format,S.colorSpace),Je=o.convert(S.type),at=R(S.internalFormat,He,Je,S.normalized,S.colorSpace),X=S.isVideoTexture!==!0,Re=we.__version===void 0||ne===!0,de=oe.dataReady,Pe=D(S,Te);pt(i.TEXTURE_CUBE_MAP,S);let Ne;if(Ce){X&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,at,Te.width,Te.height);for(let me=0;me<6;me++){Ne=Se[me].mipmaps;for(let Ye=0;Ye<Ne.length;Ye++){let We=Ne[Ye];S.format!==Bn?He!==null?X?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,0,0,We.width,We.height,He,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,at,We.width,We.height,0,We.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,0,0,We.width,We.height,He,Je,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,at,We.width,We.height,0,He,Je,We.data)}}}else{if(Ne=S.mipmaps,X&&Re){Ne.length>0&&Pe++;let me=At(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,at,me.width,me.height)}for(let me=0;me<6;me++)if(Xe){X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Se[me].width,Se[me].height,He,Je,Se[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,Se[me].width,Se[me].height,0,He,Je,Se[me].data);for(let Ye=0;Ye<Ne.length;Ye++){let Lt=Ne[Ye].image[me].image;X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,0,0,Lt.width,Lt.height,He,Je,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,at,Lt.width,Lt.height,0,He,Je,Lt.data)}}else{X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,He,Je,Se[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,He,Je,Se[me]);for(let Ye=0;Ye<Ne.length;Ye++){let We=Ne[Ye];X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,0,0,He,Je,We.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,at,He,Je,We.image[me])}}}_(S)&&N(i.TEXTURE_CUBE_MAP),we.__version=oe.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Be(U,S,j,ne,oe,we){let Ae=o.convert(j.format,j.colorSpace),re=o.convert(j.type),ue=R(j.internalFormat,Ae,re,j.normalized,j.colorSpace),Ce=n.get(S),Xe=n.get(j);if(Xe.__renderTarget=S,!Ce.__hasExternalTextures){let Se=Math.max(1,S.width>>we),Te=Math.max(1,S.height>>we);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,we,ue,Se,Te,S.depth,0,Ae,re,null):t.texImage2D(oe,we,ue,Se,Te,0,Ae,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),kt(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,Xe.__webglTexture,0,Ue(S)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,Xe.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(U,S,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),S.depthBuffer){let ne=S.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,we=P(S.stencilBuffer,oe),Ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(S)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(S),we,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(S),we,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,we,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,U)}else{let ne=S.textures;for(let oe=0;oe<ne.length;oe++){let we=ne[oe],Ae=o.convert(we.format,we.colorSpace),re=o.convert(we.type),ue=R(we.internalFormat,Ae,re,we.normalized,we.colorSpace);kt(S)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(S),ue,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(S),ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(U,S,j){let ne=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(S.depthTexture);if(oe.__renderTarget=S,(!oe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ne){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,S.depthTexture.addEventListener("dispose",O)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),pt(i.TEXTURE_CUBE_MAP,S.depthTexture);let Ce=o.convert(S.depthTexture.format),Xe=o.convert(S.depthTexture.type),Se;S.depthTexture.format===ai?Se=i.DEPTH_COMPONENT24:S.depthTexture.format===Vi&&(Se=i.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Se,S.width,S.height,0,Ce,Xe,null)}}else _e(S.depthTexture,0);let we=oe.__webglTexture,Ae=Ue(S),re=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,ue=S.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ai)kt(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,re,we,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,ue,re,we,0);else if(S.depthTexture.format===Vi)kt(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,re,we,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,ue,re,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(U){let S=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){let ne=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){let oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=ne}if(U.depthTexture&&!S.__autoAllocateDepthBuffer)if(j)for(let ne=0;ne<6;ne++)Ht(S.__webglFramebuffer[ne],U,ne);else{let ne=U.texture.mipmaps;ne&&ne.length>0?Ht(S.__webglFramebuffer[0],U,0):Ht(S.__webglFramebuffer,U,0)}else if(j){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[ne],U,!1);else{let oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,we)}}else{let ne=U.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,U,!1);else{let oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(U,S,j){let ne=n.get(U);S!==void 0&&Be(ne.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ht(U)}function tt(U){let S=U.texture,j=n.get(U),ne=n.get(S);U.addEventListener("dispose",w);let oe=U.textures,we=U.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,c.memory.textures++),we){j.__webglFramebuffer=[];for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[re]=[];for(let ue=0;ue<S.mipmaps.length;ue++)j.__webglFramebuffer[re][ue]=i.createFramebuffer()}else j.__webglFramebuffer[re]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)j.__webglFramebuffer[re]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let re=0,ue=oe.length;re<ue;re++){let Ce=n.get(oe[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&kt(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let re=0;re<oe.length;re++){let ue=oe[re];j.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[re]);let Ce=o.convert(ue.format,ue.colorSpace),Xe=o.convert(ue.type),Se=R(ue.internalFormat,Ce,Xe,ue.normalized,ue.colorSpace,U.isXRRenderTarget===!0),Te=Ue(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Se,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,j.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),pt(i.TEXTURE_CUBE_MAP,S);for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Be(j.__webglFramebuffer[re][ue],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else Be(j.__webglFramebuffer[re],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(S)&&N(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let re=0,ue=oe.length;re<ue;re++){let Ce=oe[re],Xe=n.get(Ce),Se=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Se=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Xe.__webglTexture),pt(Se,Ce),Be(j.__webglFramebuffer,U,Ce,i.COLOR_ATTACHMENT0+re,Se,0),_(Ce)&&N(Se)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(re=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ne.__webglTexture),pt(re,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Be(j.__webglFramebuffer[ue],U,S,i.COLOR_ATTACHMENT0,re,ue);else Be(j.__webglFramebuffer,U,S,i.COLOR_ATTACHMENT0,re,0);_(S)&&N(re),t.unbindTexture()}U.depthBuffer&&ht(U)}function Qe(U){let S=U.textures;for(let j=0,ne=S.length;j<ne;j++){let oe=S[j];if(_(oe)){let we=k(U),Ae=n.get(oe).__webglTexture;t.bindTexture(we,Ae),N(we),t.unbindTexture()}}}let xt=[],Ut=[];function Ie(U){if(U.samples>0){if(kt(U)===!1){let S=U.textures,j=U.width,ne=U.height,oe=i.COLOR_BUFFER_BIT,we=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(U),re=S.length>1;if(re)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let ue=U.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);let Xe=n.get(S[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,j,ne,0,0,j,ne,oe,i.NEAREST),d===!0&&(xt.length=0,Ut.length=0,xt.push(i.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(xt.push(we),Ut.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);let Xe=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&d){let S=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ue(U){return Math.min(s.maxSamples,U.samples)}function kt(U){let S=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function W(U){let S=c.render.frame;g.get(U)!==S&&(g.set(U,S),U.update())}function It(U,S){let j=U.colorSpace,ne=U.format,oe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==ss&&j!==yi&&(yt.getTransfer(j)===Pt?(ne!==Bn||oe!==Mn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",j)),S}function At(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=z,this.resetTextureUnits=J,this.getTextureUnits=H,this.setTextureUnits=te,this.setTexture2D=_e,this.setTexture2DArray=ae,this.setTexture3D=V,this.setTextureCube=ge,this.rebindTextures=mt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DM(i,e){function t(n,s=yi){let o,c=yt.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===Bn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===gc)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Ps||n===Is)if(c===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Cs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Cs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===mo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===xo||n===So||n===Mo||n===bo||n===Ds||n===Eo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===yo||n===xo)return c===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===So)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mo)return o.COMPRESSED_R11_EAC;if(n===bo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Ds)return o.COMPRESSED_RG11_EAC;if(n===Eo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Do||n===Lo||n===Fo||n===No||n===Uo||n===Oo||n===Bo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===wo)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===zo||n===Vo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ko)return c===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Ho||n===Ls||n===Wo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Go)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ls)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ms(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pn({vertexShader:LM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Zn{constructor(e,t){super();let n=this,s=null,o=1,c=null,u="local-floor",d=1,f=null,g=null,y=null,m=null,x=null,T=null,I=typeof XRWebGLBinding<"u",M=new Hc,_={},N=t.getContextAttributes(),k=null,R=null,P=[],D=[],O=new it,w=null,L=null,B=new on;B.viewport=new Vt;let q=new on;q.viewport=new Vt;let Y=[B,q],J=new io,H=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let fe=P[he];return fe===void 0&&(fe=new Ir,P[he]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(he){let fe=P[he];return fe===void 0&&(fe=new Ir,P[he]=fe),fe.getGripSpace()},this.getHand=function(he){let fe=P[he];return fe===void 0&&(fe=new Ir,P[he]=fe),fe.getHandSpace()};function z(he){let fe=D.indexOf(he.inputSource);if(fe===-1)return;let ke=P[fe];ke!==void 0&&(ke.update(he.inputSource,he.frame,f||c),ke.dispatchEvent({type:he.type,data:he.inputSource}))}function se(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",_e);for(let he=0;he<P.length;he++){let fe=D[he];fe!==null&&(D[he]=null,P[he].disconnect(fe))}H=null,te=null,M.reset();for(let he in _)delete _[he];if(e.setRenderTarget(k),x=null,m=null,y=null,s=null,R=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),L!==null){let he=L.camera;he.fov=L.fov,he.zoom=L.zoom,he.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){o=he,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){u=he,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(he){f=he},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return y===null&&I&&(y=new XRWebGLBinding(s,t)),y},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(he){if(s=he,s!==null){if(k=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",se),s.addEventListener("inputsourceschange",_e),N.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,rt=null,Be=null;N.depth&&(Be=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=N.stencil?Vi:ai,rt=N.stencil?Vr:Kn);let ct={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:o};y=this.getBinding(),m=y.createProjectionLayer(ct),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new xn(m.textureWidth,m.textureHeight,{format:Bn,type:Mn,depthTexture:new Di(m.textureWidth,m.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ke={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,ke),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new xn(x.framebufferWidth,x.framebufferHeight,{format:Bn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await s.requestReferenceSpace(u),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function _e(he){for(let fe=0;fe<he.removed.length;fe++){let ke=he.removed[fe],rt=D.indexOf(ke);rt>=0&&(D[rt]=null,P[rt].disconnect(ke))}for(let fe=0;fe<he.added.length;fe++){let ke=he.added[fe],rt=D.indexOf(ke);if(rt===-1){for(let ct=0;ct<P.length;ct++)if(ct>=D.length){D.push(ke),rt=ct;break}else if(D[ct]===null){D[ct]=ke,rt=ct;break}if(rt===-1)break}let Be=P[rt];Be&&Be.connect(ke)}}let ae=new Z,V=new Z;function ge(he,fe,ke){ae.setFromMatrixPosition(fe.matrixWorld),V.setFromMatrixPosition(ke.matrixWorld);let rt=ae.distanceTo(V),Be=fe.projectionMatrix.elements,ct=ke.projectionMatrix.elements,Ht=Be[14]/(Be[10]-1),ht=Be[14]/(Be[10]+1),mt=(Be[9]+1)/Be[5],tt=(Be[9]-1)/Be[5],Qe=(Be[8]-1)/Be[0],xt=(ct[8]+1)/ct[0],Ut=Ht*Qe,Ie=Ht*xt,Ue=rt/(-Qe+xt),kt=Ue*-Qe;if(fe.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(kt),he.translateZ(Ue),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Be[10]===-1)he.projectionMatrix.copy(fe.projectionMatrix),he.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let W=Ht+Ue,It=ht+Ue,At=Ut-kt,U=Ie+(rt-kt),S=mt*ht/It*W,j=tt*ht/It*W;he.projectionMatrix.makePerspective(At,U,S,j,W,It),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function je(he,fe){fe===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(fe.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(s===null)return;let fe=he.near,ke=he.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(ke=M.depthFar)),J.near=q.near=B.near=fe,J.far=q.far=B.far=ke,(H!==J.near||te!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),H=J.near,te=J.far),J.layers.mask=he.layers.mask|6,B.layers.mask=J.layers.mask&-5,q.layers.mask=J.layers.mask&-3;let rt=he.parent,Be=J.cameras;je(J,rt);for(let ct=0;ct<Be.length;ct++)je(Be[ct],rt);Be.length===2?ge(J,B,q):J.projectionMatrix.copy(B.projectionMatrix),L===null&&he.isPerspectiveCamera&&(L={camera:he,fov:he.fov,zoom:he.zoom}),qe(he,J,rt)};function qe(he,fe,ke){ke===null?he.matrix.copy(fe.matrixWorld):(he.matrix.copy(ke.matrixWorld),he.matrix.invert(),he.matrix.multiply(fe.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(fe.projectionMatrix),he.projectionMatrixInverse.copy(fe.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Rr*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(m===null&&x===null))return d},this.setFoveation=function(he){d=he,m!==null&&(m.fixedFoveation=he),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=he)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(he){return _[he]};let Ft=null;function pt(he,fe){if(g=fe.getViewerPose(f||c),T=fe,g!==null){let ke=g.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let rt=!1;ke.length!==J.cameras.length&&(J.cameras.length=0,rt=!0);for(let ht=0;ht<ke.length;ht++){let mt=ke[ht],tt=null;if(x!==null)tt=x.getViewport(mt);else{let xt=y.getViewSubImage(m,mt);tt=xt.viewport,ht===0&&(e.setRenderTargetTextures(R,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(R))}let Qe=Y[ht];Qe===void 0&&(Qe=new on,Qe.layers.enable(ht),Qe.viewport=new Vt,Y[ht]=Qe),Qe.matrix.fromArray(mt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(mt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(tt.x,tt.y,tt.width,tt.height),ht===0&&(J.matrix.copy(Qe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),rt===!0&&J.cameras.push(Qe)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){y=n.getBinding();let ht=y.getDepthInformation(ke[0]);ht&&ht.isValid&&ht.texture&&M.init(ht,s.renderState)}if(Be&&Be.includes("camera-access")&&I){e.state.unbindTexture(),y=n.getBinding();for(let ht=0;ht<ke.length;ht++){let mt=ke[ht].camera;if(mt){let tt=_[mt];tt||(tt=new ms,_[mt]=tt);let Qe=y.getCameraImage(mt);tt.sourceTexture=Qe}}}}for(let ke=0;ke<P.length;ke++){let rt=D[ke],Be=P[ke];rt!==null&&Be!==void 0&&Be.update(rt,fe,f||c)}Ft&&Ft(he,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),T=null}let Ke=new gd;Ke.setAnimationLoop(pt),this.setAnimationLoop=function(he){Ft=he},this.dispose=function(){}}},NM=new Bt,Md=new st;Md.set(-1,0,0,0,1,0,0,0,1);function UM(i,e){function t(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function n(M,_){_.color.getRGB(M.fogColor.value,Sc(i)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function s(M,_,N,k,R){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?o(M,_):_.isMeshLambertMaterial?(o(M,_),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(o(M,_),y(M,_)):_.isMeshPhongMaterial?(o(M,_),g(M,_),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(o(M,_),m(M,_),_.isMeshPhysicalMaterial&&x(M,_,R)):_.isMeshMatcapMaterial?(o(M,_),T(M,_)):_.isMeshDepthMaterial?o(M,_):_.isMeshDistanceMaterial?(o(M,_),I(M,_)):_.isMeshNormalMaterial?o(M,_):_.isLineBasicMaterial?(c(M,_),_.isLineDashedMaterial&&u(M,_)):_.isPointsMaterial?d(M,_,N,k):_.isSpriteMaterial?f(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,t(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===_n&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,t(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===_n&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,t(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,t(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);let N=e.get(_),k=N.envMap,R=N.envMapRotation;k&&(M.envMap.value=k,M.envMapRotation.value.setFromMatrix4(NM.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Md),M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,M.aoMapTransform))}function c(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform))}function u(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function d(M,_,N,k){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*N,M.scale.value=k*.5,_.map&&(M.map.value=_.map,t(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function y(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function m(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function x(M,_,N){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===_n&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.retroreflectivity>0&&(M.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function I(M,_){let N=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function OM(i,e,t,n){let s={},o={},c=[],u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,P){let D=P.program;n.uniformBlockBinding(R,D)}function f(R,P){let D=s[R.id];D===void 0&&(M(R),D=g(R),s[R.id]=D,R.addEventListener("dispose",N));let O=P.program;n.updateUBOMapping(R,O);let w=e.render.frame;o[R.id]!==w&&(m(R),o[R.id]=w)}function g(R){let P=y();R.__bindingPointIndex=P;let D=i.createBuffer(),O=R.__size,w=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,O,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,D),D}function y(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){let P=s[R.id],D=R.uniforms,O=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let w=0,L=D.length;w<L;w++){let B=D[w];if(Array.isArray(B))for(let q=0,Y=B.length;q<Y;q++)x(B[q],w,q,O);else x(B,w,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(R,P,D,O){if(I(R,P,D,O)===!0){let w=R.__offset,L=R.value;if(Array.isArray(L)){let B=0;for(let q=0;q<L.length;q++){let Y=L[q],J=_(Y);T(Y,R.__data,B),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,R.__data)}}function T(R,P,D){typeof R=="number"||typeof R=="boolean"?P[0]=R:R.isMatrix3?(P[0]=R.elements[0],P[1]=R.elements[1],P[2]=R.elements[2],P[3]=0,P[4]=R.elements[3],P[5]=R.elements[4],P[6]=R.elements[5],P[7]=0,P[8]=R.elements[6],P[9]=R.elements[7],P[10]=R.elements[8],P[11]=0):ArrayBuffer.isView(R)?P.set(new R.constructor(R.buffer,R.byteOffset,P.length)):R.toArray(P,D)}function I(R,P,D,O){let w=R.value,L=P+"_"+D;if(O[L]===void 0)return typeof w=="number"||typeof w=="boolean"?O[L]=w:ArrayBuffer.isView(w)?O[L]=w.slice():O[L]=w.clone(),!0;{let B=O[L];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return O[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(B.equals(w)===!1)return B.copy(w),!0}}return!1}function M(R){let P=R.uniforms,D=0,O=16;for(let L=0,B=P.length;L<B;L++){let q=Array.isArray(P[L])?P[L]:[P[L]];for(let Y=0,J=q.length;Y<J;Y++){let H=q[Y],te=Array.isArray(H.value)?H.value:[H.value];for(let z=0,se=te.length;z<se;z++){let _e=te[z],ae=_(_e),V=D%O,ge=V%ae.boundary,je=V+ge;D+=ge,je!==0&&O-je<ae.storage&&(D+=O-je),H.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=D,D+=ae.storage}}}let w=D%O;return w>0&&(D+=O-w),R.__size=D,R.__cache={},this}function _(R){let P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):et("WebGLRenderer: Unsupported uniform value type.",R),P}function N(R){let P=R.target;P.removeEventListener("dispose",N);let D=c.indexOf(P.__bindingPointIndex);c.splice(D,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete o[P.id]}function k(){for(let R in s)i.deleteBuffer(s[R]);c=[],s={},o={}}return{bind:d,update:f,dispose:k}}var BM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function kM(){return ci===null&&(ci=new za(BM,16,16,Gi,ei),ci.name="DFG_LUT",ci.minFilter=nn,ci.magFilter=nn,ci.wrapS=si,ci.wrapT=si,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Ko=class{constructor(e={}){let{canvas:t=Vu(),context:n=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Mn}=e;this.isWebGLRenderer=!0;let T;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=n.getContextAttributes().alpha}else T=c;let I=x,M=new Set([po,fo,uo]),_=new Set([Mn,Kn,zr,Vr,co,ho]),N=new Uint32Array(4),k=new Int32Array(4),R=new Z,P=null,D=null,O=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,q=!1,Y=null,J=null,H=null,te=null;this._outputColorSpace=fn;let z=0,se=0,_e=null,ae=-1,V=null,ge=new Vt,je=new Vt,qe=null,Ft=new ut(0),pt=0,Ke=t.width,he=t.height,fe=1,ke=null,rt=null,Be=new Vt(0,0,Ke,he),ct=new Vt(0,0,Ke,he),Ht=!1,ht=new Fr,mt=!1,tt=!1,Qe=new Bt,xt=new Z,Ut=new Vt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function kt(){return _e===null?fe:1}let W=n;function It(A,G){return t.getContext(A,G)}let At,U,S,j,ne,oe,we,Ae,re,ue,Ce,Xe,Se,Te,He,Je,at,X,Re,de,Pe,Ne,me;try{let A={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",En,!1),W===null){let G="webgl2";if(W=It(G,A),W===null)throw It(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(A){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",En,!1),nt("WebGLRenderer: "+A.message),A}function Ye(){At=new $x(W),At.init(),Pe=new DM(W,At),U=new Ux(W,At,e,Pe),S=new PM(W,At),U.reversedDepthBuffer&&m&&S.buffers.depth.setReversed(!0),J=W.createFramebuffer(),H=W.createFramebuffer(),te=W.createFramebuffer(),j=new jx(W),ne=new gM,oe=new IM(W,At,S,ne,U,Pe,j),we=new Xx(B),Ae=new J0(W),Ne=new Fx(W,Ae),re=new qx(W,Ae,j,Ne),ue=new Jx(W,re,Ae,Ne,j),X=new Zx(W,U,oe),He=new Ox(ne),Ce=new mM(B,we,At,U,Ne,He),Xe=new UM(B,ne),Se=new vM,Te=new EM(At),at=new Lx(B,we,S,ue,T,d),Je=new RM(B,ue,U),me=new OM(W,j,U,S),Re=new Nx(W,At,j),de=new Yx(W,At,j),j.programs=Ce.programs,B.capabilities=U,B.extensions=At,B.properties=ne,B.renderLists=Se,B.shadowMap=Je,B.state=S,B.info=j}I!==Mn&&(L=new Qx(I,t.width,t.height,u,s,o));let We=new Wc(B,W);this.xr=We,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(Ke,he,!1))},this.getSize=function(A){return A.set(Ke,he)},this.setSize=function(A,G,ie=!0){if(We.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=A,he=G,t.width=Math.floor(A*fe),t.height=Math.floor(G*fe),ie===!0&&(t.style.width=A+"px",t.style.height=G+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Ke*fe,he*fe).floor()},this.setDrawingBufferSize=function(A,G,ie){Ke=A,he=G,fe=ie,t.width=Math.floor(A*ie),t.height=Math.floor(G*ie),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(I===Mn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ge)},this.getViewport=function(A){return A.copy(Be)},this.setViewport=function(A,G,ie,K){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,G,ie,K),S.viewport(ge.copy(Be).multiplyScalar(fe).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,G,ie,K){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,G,ie,K),S.scissor(je.copy(ct).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(A){S.setScissorTest(Ht=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,ie=!0){let K=0;if(A){let Q=!1;if(_e!==null){let Le=_e.texture.format;Q=M.has(Le)}if(Q){let Le=_e.texture.type,be=_.has(Le),De=at.getClearColor(),Ve=at.getClearAlpha(),ze=De.r,ot=De.g,lt=De.b;be?(N[0]=ze,N[1]=ot,N[2]=lt,N[3]=Ve,W.clearBufferuiv(W.COLOR,0,N)):(k[0]=ze,k[1]=ot,k[2]=lt,k[3]=Ve,W.clearBufferiv(W.COLOR,0,k))}else K|=W.COLOR_BUFFER_BIT}G&&(K|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",En,!1),at.dispose(),Se.dispose(),Te.dispose(),ne.dispose(),we.dispose(),ue.dispose(),Ne.dispose(),me.dispose(),Ce.dispose(),We.dispose(),We.removeEventListener("sessionstart",wn),We.removeEventListener("sessionend",qr),vn.stop()};function Lt(A){A.preventDefault(),vc("WebGLRenderer: Context Lost."),q=!0}function Et(){vc("WebGLRenderer: Context Restored."),q=!1;let A=j.autoReset,G=Je.enabled,ie=Je.autoUpdate,K=Je.needsUpdate,Q=Je.type;Ye(),j.autoReset=A,Je.enabled=G,Je.autoUpdate=ie,Je.needsUpdate=K,Je.type=Q}function En(A){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function kn(A){let G=A.target;G.removeEventListener("dispose",kn),Os(G)}function Os(A){xi(A),ne.remove(A)}function xi(A){let G=ne.get(A).programs;G!==void 0&&(G.forEach(function(ie){Ce.releaseProgram(ie)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ie,K,Q,Le){G===null&&(G=Ie);let be=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,De=lr(A,G,ie,K,Q);S.setMaterial(K,be);let Ve=ie.index,ze=1;if(K.wireframe===!0){if(Ve=re.getWireframeAttribute(ie),Ve===void 0)return;ze=2}let ot=ie.drawRange,lt=ie.attributes.position,Ge=ot.start*ze,bt=(ot.start+ot.count)*ze;Le!==null&&(Ge=Math.max(Ge,Le.start*ze),bt=Math.min(bt,(Le.start+Le.count)*ze)),Ve!==null?(Ge=Math.max(Ge,0),bt=Math.min(bt,Ve.count)):lt!=null&&(Ge=Math.max(Ge,0),bt=Math.min(bt,lt.count));let Wt=bt-Ge;if(Wt<0||Wt===1/0)return;Ne.setup(Q,K,De,ie,Ve);let St,Rt=Re;if(Ve!==null&&(St=Ae.get(Ve),Rt=de,Rt.setIndex(St)),Q.isMesh)K.wireframe===!0?(S.setLineWidth(K.wireframeLinewidth*kt()),Rt.setMode(W.LINES)):Rt.setMode(W.TRIANGLES);else if(Q.isLine){let $e=K.linewidth;$e===void 0&&($e=1),S.setLineWidth($e*kt()),Q.isLineSegments?Rt.setMode(W.LINES):Q.isLineLoop?Rt.setMode(W.LINE_LOOP):Rt.setMode(W.LINE_STRIP)}else Q.isPoints?Rt.setMode(W.POINTS):Q.isSprite&&Rt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let $e=Q._multiDrawStarts,Oe=Q._multiDrawCounts,Qt=Q._multiDrawCount,Mt=Ve?Ae.get(Ve).bytesPerElement:1,hn=ne.get(K).currentProgram.getUniforms();for(let Fn=0;Fn<Qt;Fn++)hn.setValue(W,"_gl_DrawID",Fn),Rt.render($e[Fn]/Mt,Oe[Fn])}else if(Q.isInstancedMesh)Rt.renderInstances(Ge,Wt,Q.count);else if(ie.isInstancedBufferGeometry){let $e=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Oe=Math.min(ie.instanceCount,$e);Rt.renderInstances(Ge,Wt,Oe)}else Rt.render(Ge,Wt)};function rl(A,G,ie,K){Y!==null&&A.isNodeMaterial&&Y.setObject(K,A),mt===!0&&He.setState(A,ie,!1),A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,ar(A,G,K),A.side=oi,A.needsUpdate=!0,ar(A,G,K),A.side=On):ar(A,G,K)}this.compile=function(A,G,ie=null){ie===null&&(ie=A),Y!==null&&Y.renderStart(A,G,ie),D=Te.get(ie),D.init(G),w.push(D),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),A!==ie&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights(),Y!==null&&Y.updateLights(D.state.lightsArray),tt=this.localClippingEnabled,mt=He.init(this.clippingPlanes,tt),mt===!0&&He.setGlobalState(this.clippingPlanes,G),Y!==null&&Je.render(D.state.shadowsArray,ie,G);let K=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Le=Q.material;if(Le)if(Array.isArray(Le))for(let be=0;be<Le.length;be++){let De=Le[be];rl(De,ie,G,Q),K.add(De)}else rl(Le,ie,G,Q),K.add(Le)}),D=w.pop(),Y!==null&&Y.renderEnd(),K},this.compileAsync=function(A,G,ie=null){let K=this.compile(A,G,ie);return new Promise(Q=>{function Le(){if(K.forEach(function(be){let Ve=ne.get(be).currentProgram;(Ve===void 0||Ve.isReady())&&K.delete(be)}),K.size===0){Q(A);return}setTimeout(Le,10)}At.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ve=null;function xe(A){ve&&ve(A)}function wn(){vn.stop()}function qr(){vn.start()}let vn=new gd;vn.setAnimationLoop(xe),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(A){ve=A,We.setAnimationLoop(A),A===null?vn.stop():vn.start()},We.addEventListener("sessionstart",wn),We.addEventListener("sessionend",qr),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;Y!==null&&Y.renderStart(A,G);let ie=We.enabled===!0&&We.isPresenting===!0,K=L!==null&&(_e===null||ie)&&L.begin(B,_e);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,G,_e),D=Te.get(A,w.length),D.init(G),D.state.textureUnits=oe.getTextureUnits(),w.push(D),Qe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ht.setFromProjectionMatrix(Qe,Yn,G.reversedDepth),tt=this.localClippingEnabled,mt=He.init(this.clippingPlanes,tt),P=Se.get(A,O.length),P.init(),O.push(P),We.enabled===!0&&We.isPresenting===!0){let be=B.xr.getDepthSensingMesh();be!==null&&Tn(be,G,-1/0,B.sortObjects)}Tn(A,G,0,B.sortObjects),P.finish(),Y!==null&&Y.updateLights(D.state.lightsArray),B.sortObjects===!0&&P.sort(ke,rt),Ue=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ue&&at.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&He.beginShadows();let Q=D.state.shadowsArray;if(Je.render(Q,A,G),mt===!0&&He.endShadows(),(K&&L.hasRenderPass())===!1){let be=P.opaque,De=P.transmissive;if(D.setupLights(),G.isArrayCamera){let Ve=G.cameras;if(De.length>0)for(let ze=0,ot=Ve.length;ze<ot;ze++){let lt=Ve[ze];Dn(be,De,A,lt)}Ue&&at.render(A);for(let ze=0,ot=Ve.length;ze<ot;ze++){let lt=Ve[ze];Bs(P,A,lt,lt.viewport)}}else De.length>0&&Dn(be,De,A,G),Ue&&at.render(A),Bs(P,A,G)}_e!==null&&se===0&&(oe.updateMultisampleRenderTarget(_e),oe.updateRenderTargetMipmap(_e)),K&&L.end(B),A.isScene===!0&&A.onAfterRender(B,A,G),Ne.resetDefaultState(),ae=-1,V=null,w.pop(),w.length>0?(D=w[w.length-1],oe.setTextureUnits(D.state.textureUnits),mt===!0&&He.setGlobalState(B.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,Y!==null&&Y.renderEnd()};function Tn(A,G,ie,K){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ht)){K&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qe);let be=ue.update(A),De=A.material;De.visible&&P.push(A,be,De,ie,Ut.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ht))){let be=ue.update(A),De=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ut.copy(be.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(Qe)),Array.isArray(De)){let Ve=be.groups;for(let ze=0,ot=Ve.length;ze<ot;ze++){let lt=Ve[ze],Ge=De[lt.materialIndex];Ge&&Ge.visible&&P.push(A,be,Ge,ie,Ut.z,lt,G)}}else De.visible&&P.push(A,be,De,ie,Ut.z,null,G)}}let Le=A.children;for(let be=0,De=Le.length;be<De;be++)Tn(Le[be],G,ie,K)}function Bs(A,G,ie,K){let{opaque:Q,transmissive:Le,transparent:be}=A;D.setupLightsView(ie),mt===!0&&He.setGlobalState(B.clippingPlanes,ie),K&&S.viewport(ge.copy(K)),Q.length>0&&ui(Q,G,ie),Le.length>0&&ui(Le,G,ie),be.length>0&&ui(be,G,ie),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Dn(A,G,ie,K){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[K.id]===void 0){let Ge=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[K.id]=new xn(1,1,{generateMipmaps:!0,type:Ge?ei:Mn,minFilter:zi,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Le=D.state.transmissionRenderTarget[K.id],be=K.viewport||ge;Le.setSize(be.z*B.transmissionResolutionScale,be.w*B.transmissionResolutionScale);let De=B.getRenderTarget(),Ve=B.getActiveCubeFace(),ze=B.getActiveMipmapLevel();B.setRenderTarget(Le),B.getClearColor(Ft),pt=B.getClearAlpha(),pt<1&&B.setClearColor(16777215,.5),B.clear(),Ue&&at.render(ie);let ot=B.toneMapping;B.toneMapping=Jn;let lt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),D.setupLightsView(K),mt===!0&&He.setGlobalState(B.clippingPlanes,K),ui(A,ie,K),oe.updateMultisampleRenderTarget(Le),oe.updateRenderTargetMipmap(Le),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let bt=0,Wt=G.length;bt<Wt;bt++){let St=G[bt],{object:Rt,geometry:$e,material:Oe,group:Qt}=St;if(Oe.side===On&&Rt.layers.test(K.layers)){let Mt=Oe.side;Oe.side=_n,Oe.needsUpdate=!0,ks(Rt,ie,K,$e,Oe,Qt),Oe.side=Mt,Oe.needsUpdate=!0,Ge=!0}}Ge===!0&&(oe.updateMultisampleRenderTarget(Le),oe.updateRenderTargetMipmap(Le))}B.setRenderTarget(De,Ve,ze),B.setClearColor(Ft,pt),lt!==void 0&&(K.viewport=lt),B.toneMapping=ot}function ui(A,G,ie){let K=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Le=A.length;Q<Le;Q++){let be=A[Q],{object:De,geometry:Ve,group:ze}=be,ot=be.material;ot.allowOverride===!0&&K!==null&&(ot=K),De.layers.test(ie.layers)&&ks(De,G,ie,Ve,ot,ze)}}function ks(A,G,ie,K,Q,Le){Y!==null&&Q.isNodeMaterial&&Y.setObject(A,Q),A.onBeforeRender(B,G,ie,K,Q,Le),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(B,G,ie,K,A,Le),Q.transparent===!0&&Q.side===On&&Q.forceSinglePass===!1?(Q.side=_n,Q.needsUpdate=!0,B.renderBufferDirect(ie,G,K,Q,A,Le),Q.side=oi,Q.needsUpdate=!0,B.renderBufferDirect(ie,G,K,Q,A,Le),Q.side=On):B.renderBufferDirect(ie,G,K,Q,A,Le),A.onAfterRender(B,G,ie,K,Q,Le)}function ar(A,G,ie){G.isScene!==!0&&(G=Ie);let K=ne.get(A),Q=D.state.lights,Le=D.state.shadowsArray,be=Q.state.version,De=Ce.getParameters(A,Q.state,Le,G,ie,D.state.lightProbeGridArray),Ve=Ce.getProgramCacheKey(De),ze=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;let ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=we.get(A.envMap||K.environment,ot),K.envMapRotation=K.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",kn),ze=new Map,K.programs=ze);let lt=ze.get(Ve);if(lt!==void 0){if(K.currentProgram===lt&&K.lightsStateVersion===be)return zs(A,De),lt}else De.uniforms=Ce.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,ie,De),A.onBeforeCompile(De,B),lt=Ce.acquireProgram(De,Ve),ze.set(Ve,lt),K.uniforms=De.uniforms;let Ge=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=He.uniform),zs(A,De),K.needsLights=sl(A),K.lightsStateVersion=be,K.needsLights&&(Ge.ambientLightColor.value=Q.state.ambient,Ge.lightProbe.value=Q.state.probe,Ge.sunLights.value=Q.state.sun,Ge.sunLightShadows.value=Q.state.sunShadow,Ge.directionalLights.value=Q.state.directional,Ge.directionalLightShadows.value=Q.state.directionalShadow,Ge.spotLights.value=Q.state.spot,Ge.spotLightShadows.value=Q.state.spotShadow,Ge.rectAreaLights.value=Q.state.rectArea,Ge.ltc_1.value=Q.state.rectAreaLTC1,Ge.ltc_2.value=Q.state.rectAreaLTC2,Ge.pointLights.value=Q.state.point,Ge.pointLightShadows.value=Q.state.pointShadow,Ge.hemisphereLights.value=Q.state.hemi,Ge.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ge.sunShadowCascade.value=Q.state.sunShadowCascade,Ge.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Q.state.spotLightMatrix,Ge.spotLightMap.value=Q.state.spotLightMap,Ge.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.lightProbeGrid=D.state.lightProbeGridArray.length>0,K.currentProgram=lt,K.uniformsList=null,lt}function Ln(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=Xr.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function zs(A,G){let ie=ne.get(A);ie.outputColorSpace=G.outputColorSpace,ie.batching=G.batching,ie.batchingColor=G.batchingColor,ie.instancing=G.instancing,ie.instancingColor=G.instancingColor,ie.instancingMorph=G.instancingMorph,ie.skinning=G.skinning,ie.morphTargets=G.morphTargets,ie.morphNormals=G.morphNormals,ie.morphColors=G.morphColors,ie.morphTargetsCount=G.morphTargetsCount,ie.numClippingPlanes=G.numClippingPlanes,ie.numIntersection=G.numClipIntersection,ie.vertexAlphas=G.vertexAlphas,ie.vertexTangents=G.vertexTangents,ie.toneMapping=G.toneMapping}function or(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(G.matrixWorld);for(let ie=0,K=A.length;ie<K;ie++){let Q=A[ie];if(Q.texture!==null&&Q.boundingBox.containsPoint(R))return Q}return null}function lr(A,G,ie,K,Q){G.isScene!==!0&&(G=Ie),oe.resetTextureUnits();let Le=G.fog,be=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,De=_e===null?B.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:yt.workingColorSpace,Ve=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,ze=we.get(K.envMap||be,Ve),ot=K.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,lt=!!ie.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!ie.morphAttributes.position,bt=!!ie.morphAttributes.normal,Wt=!!ie.morphAttributes.color,St=Jn;K.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(St=B.toneMapping);let Rt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,$e=Rt!==void 0?Rt.length:0,Oe=ne.get(K),Qt=D.state.lights;if(mt===!0&&(tt===!0||A!==V)){let b=A===V&&K.id===ae;He.setState(K,A,b)}let Mt=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Qt.state.version||Oe.outputColorSpace!==De||Q.isBatchedMesh&&Oe.batching===!1||!Q.isBatchedMesh&&Oe.batching===!0||Q.isBatchedMesh&&Oe.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Oe.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Oe.instancing===!1||!Q.isInstancedMesh&&Oe.instancing===!0||Q.isSkinnedMesh&&Oe.skinning===!1||!Q.isSkinnedMesh&&Oe.skinning===!0||Q.isInstancedMesh&&Oe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Oe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Oe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Oe.instancingMorph===!1&&Q.morphTexture!==null||Oe.envMap!==ze||K.fog===!0&&Oe.fog!==Le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==He.numPlanes||Oe.numIntersection!==He.numIntersection)||Oe.vertexAlphas!==ot||Oe.vertexTangents!==lt||Oe.morphTargets!==Ge||Oe.morphNormals!==bt||Oe.morphColors!==Wt||Oe.toneMapping!==St||Oe.morphTargetsCount!==$e||!!Oe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Oe.__version=K.version);let hn=Oe.currentProgram;Mt===!0&&(hn=ar(K,G,Q),Y&&K.isNodeMaterial&&Y.onUpdateProgram(K,hn,Oe));let Fn=!1,zn=!1,Si=!1,Ct=hn.getUniforms(),Gt=Oe.uniforms;if(S.useProgram(hn.program)&&(Fn=!0,zn=!0,Si=!0),K.id!==ae&&(ae=K.id,zn=!0),Oe.needsLights){let b=or(D.state.lightProbeGridArray,Q);Oe.lightProbeGrid!==b&&(Oe.lightProbeGrid=b,zn=!0)}if(Fn||V!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ct.setValue(W,"projectionMatrix",A.projectionMatrix),Ct.setValue(W,"viewMatrix",A.matrixWorldInverse);let wt=Ct.map.cameraPosition;wt!==void 0&&wt.setValue(W,xt.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Ct.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ct.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,zn=!0,Si=!0)}if(Oe.needsLights&&(Qt.state.sunShadowMap.length>0&&Ct.setValue(W,"sunShadowMap",Qt.state.sunShadowMap,oe),Qt.state.directionalShadowMap.length>0&&Ct.setValue(W,"directionalShadowMap",Qt.state.directionalShadowMap,oe),Qt.state.spotShadowMap.length>0&&Ct.setValue(W,"spotShadowMap",Qt.state.spotShadowMap,oe),Qt.state.pointShadowMap.length>0&&Ct.setValue(W,"pointShadowMap",Qt.state.pointShadowMap,oe)),Q.isSkinnedMesh){Ct.setOptional(W,Q,"bindMatrix"),Ct.setOptional(W,Q,"bindMatrixInverse");let b=Q.skeleton;b&&(b.boneTexture===null&&b.computeBoneTexture(),Ct.setValue(W,"boneTexture",b.boneTexture,oe))}Q.isBatchedMesh&&(Ct.setOptional(W,Q,"batchingTexture"),Ct.setValue(W,"batchingTexture",Q._matricesTexture,oe),Ct.setOptional(W,Q,"batchingIdTexture"),Ct.setValue(W,"batchingIdTexture",Q._indirectTexture,oe),Ct.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ct.setValue(W,"batchingColorTexture",Q._colorsTexture,oe));let Vn=ie.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&X.update(Q,ie,hn),(zn||Oe.receiveShadow!==Q.receiveShadow)&&(Oe.receiveShadow=Q.receiveShadow,Ct.setValue(W,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(Gt.envMapIntensity.value=G.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=kM()),zn){if(Ct.setValue(W,"toneMappingExposure",B.toneMappingExposure),Oe.needsLights&&Yr(Gt,Si),Le&&K.fog===!0&&Xe.refreshFogUniforms(Gt,Le),Xe.refreshMaterialUniforms(Gt,K,fe,he,D.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.lightProbeGrid){let b=Oe.lightProbeGrid;Gt.probesSH.value=b.texture,Gt.probesMin.value.copy(b.boundingBox.min),Gt.probesMax.value.copy(b.boundingBox.max),Gt.probesResolution.value.copy(b.resolution)}Xr.upload(W,Ln(Oe),Gt,oe)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Xr.upload(W,Ln(Oe),Gt,oe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ct.setValue(W,"center",Q.center),Ct.setValue(W,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(W,"normalMatrix",Q.normalMatrix),Ct.setValue(W,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let b=K.uniformsGroups;for(let wt=0,Mi=b.length;wt<Mi;wt++){let Hi=b[wt];me.update(Hi,hn),me.bind(Hi,hn)}}return hn}function Yr(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return _e},this.setRenderTargetTextures=function(A,G,ie){let K=ne.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ne.get(A.texture).__webglTexture=G,ne.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ie,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){let ie=ne.get(A);ie.__webglFramebuffer=G,ie.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,ie=0){_e=A,z=G,se=ie;let K=null,Q=!1,Le=!1;if(A){let De=ne.get(A);if(De.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(W.FRAMEBUFFER,De.__webglFramebuffer),ge.copy(A.viewport),je.copy(A.scissor),qe=A.scissorTest,S.viewport(ge),S.scissor(je),S.setScissorTest(qe),ae=-1;return}else if(De.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(De.__hasExternalTextures)oe.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ot=A.depthTexture;if(De.__boundDepthTexture!==ot){if(ot!==null&&ne.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}let Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);let ze=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?K=ze[G][ie]:K=ze[G],Q=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?K=ne.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[ie]:K=ze,ge.copy(A.viewport),je.copy(A.scissor),qe=A.scissorTest}else ge.copy(Be).multiplyScalar(fe).floor(),je.copy(ct).multiplyScalar(fe).floor(),qe=Ht;if(ie!==0&&(K=J),S.bindFramebuffer(W.FRAMEBUFFER,K)&&S.drawBuffers(A,K),S.viewport(ge),S.scissor(je),S.setScissorTest(qe),Q){let De=ne.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,ie)}else if(Le){let De=G;for(let Ve=0;Ve<A.textures.length;Ve++){let ze=ne.get(A.textures[Ve]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ve,ze.__webglTexture,ie,De)}}else if(A!==null&&ie!==0){let De=ne.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,De.__webglTexture,ie)}ae=-1};function Vs(A){let G=ne.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=U.textureFormatReadable(A.format),G.__typeReadable=U.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,ie,K,Q,Le,be,De=0){if(!(A&&A.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ve=Ve[be]),Ve){S.bindFramebuffer(W.FRAMEBUFFER,Ve);try{let ze=A.textures[De],ot=ze.format,lt=ze.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);let Ge=Vs(ze);if(Ge.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-K&&ie>=0&&ie<=A.height-Q&&W.readPixels(G,ie,K,Q,Pe.convert(ot),Pe.convert(lt),Le)}finally{let ze=_e!==null?ne.get(_e).__webglFramebuffer:null;S.bindFramebuffer(W.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,G,ie,K,Q,Le,be,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ve=Ve[be]),Ve)if(G>=0&&G<=A.width-K&&ie>=0&&ie<=A.height-Q){S.bindFramebuffer(W.FRAMEBUFFER,Ve);let ze=A.textures[De],ot=ze.format,lt=ze.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);let Ge=Vs(ze);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,bt),W.bufferData(W.PIXEL_PACK_BUFFER,Le.byteLength,W.STREAM_READ),W.readPixels(G,ie,K,Q,Pe.convert(ot),Pe.convert(lt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Wt=_e!==null?ne.get(_e).__webglFramebuffer:null;S.bindFramebuffer(W.FRAMEBUFFER,Wt);let St=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Hu(W,St,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,bt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Le),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(bt),W.deleteSync(St),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,ie=0){let K=Math.pow(2,-ie),Q=Math.floor(A.image.width*K),Le=Math.floor(A.image.height*K),be=G!==null?G.x:0,De=G!==null?G.y:0;oe.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ie,0,0,be,De,Q,Le),S.unbindTexture()},this.copyTextureToTexture=function(A,G,ie=null,K=null,Q=0,Le=0){let be,De,Ve,ze,ot,lt,Ge,bt,Wt,St=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(ie!==null)be=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,Ve=ie.isBox3?ie.max.z-ie.min.z:1,ze=ie.min.x,ot=ie.min.y,lt=ie.isBox3?ie.min.z:0;else{let Gt=Math.pow(2,-Q);be=Math.floor(St.width*Gt),De=Math.floor(St.height*Gt),A.isDataArrayTexture?Ve=St.depth:A.isData3DTexture?Ve=Math.floor(St.depth*Gt):Ve=1,ze=0,ot=0,lt=0}K!==null?(Ge=K.x,bt=K.y,Wt=K.z):(Ge=0,bt=0,Wt=0);let Rt=Pe.convert(G.format),$e=Pe.convert(G.type),Oe;G.isData3DTexture?(oe.setTexture3D(G,0),Oe=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(oe.setTexture2DArray(G,0),Oe=W.TEXTURE_2D_ARRAY):(oe.setTexture2D(G,0),Oe=W.TEXTURE_2D),S.activeTexture(W.TEXTURE0),S.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),S.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),S.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);let Qt=S.getParameter(W.UNPACK_ROW_LENGTH),Mt=S.getParameter(W.UNPACK_IMAGE_HEIGHT),hn=S.getParameter(W.UNPACK_SKIP_PIXELS),Fn=S.getParameter(W.UNPACK_SKIP_ROWS),zn=S.getParameter(W.UNPACK_SKIP_IMAGES);S.pixelStorei(W.UNPACK_ROW_LENGTH,St.width),S.pixelStorei(W.UNPACK_IMAGE_HEIGHT,St.height),S.pixelStorei(W.UNPACK_SKIP_PIXELS,ze),S.pixelStorei(W.UNPACK_SKIP_ROWS,ot),S.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);let Si=A.isDataArrayTexture||A.isData3DTexture,Ct=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){let Gt=ne.get(A),Vn=ne.get(G),b=ne.get(Gt.__renderTarget),wt=ne.get(Vn.__renderTarget);S.bindFramebuffer(W.READ_FRAMEBUFFER,b.__webglFramebuffer),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Mi=0;Mi<Ve;Mi++)Si&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,Q,lt+Mi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ne.get(G).__webglTexture,Le,Wt+Mi)),W.blitFramebuffer(ze,ot,be,De,Ge,bt,be,De,W.DEPTH_BUFFER_BIT,W.NEAREST);S.bindFramebuffer(W.READ_FRAMEBUFFER,null),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||ne.has(A)){let Gt=ne.get(A),Vn=ne.get(G);S.bindFramebuffer(W.READ_FRAMEBUFFER,H),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,te);for(let b=0;b<Ve;b++)Si?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Gt.__webglTexture,Q,lt+b):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Gt.__webglTexture,Q),Ct?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Vn.__webglTexture,Le,Wt+b):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Vn.__webglTexture,Le),Q!==0?W.blitFramebuffer(ze,ot,be,De,Ge,bt,be,De,W.COLOR_BUFFER_BIT,W.NEAREST):Ct?W.copyTexSubImage3D(Oe,Le,Ge,bt,Wt+b,ze,ot,be,De):W.copyTexSubImage2D(Oe,Le,Ge,bt,ze,ot,be,De);S.bindFramebuffer(W.READ_FRAMEBUFFER,null),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ct?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Oe,Le,Ge,bt,Wt,be,De,Ve,Rt,$e,St.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Oe,Le,Ge,bt,Wt,be,De,Ve,Rt,St.data):W.texSubImage3D(Oe,Le,Ge,bt,Wt,be,De,Ve,Rt,$e,St):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Le,Ge,bt,be,De,Rt,$e,St.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Le,Ge,bt,St.width,St.height,Rt,St.data):W.texSubImage2D(W.TEXTURE_2D,Le,Ge,bt,be,De,Rt,$e,St);S.pixelStorei(W.UNPACK_ROW_LENGTH,Qt),S.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Mt),S.pixelStorei(W.UNPACK_SKIP_PIXELS,hn),S.pixelStorei(W.UNPACK_SKIP_ROWS,Fn),S.pixelStorei(W.UNPACK_SKIP_IMAGES,zn),Le===0&&G.generateMipmaps&&W.generateMipmap(Oe),S.unbindTexture()},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){z=0,se=0,_e=null,S.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var Ed={type:"change"},$c={type:"start"},Td={type:"end"},tl=new Lr,wd=new Rn,zM=Math.cos(70*xc.DEG2RAD),Kt=new Z,bn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xc=1e-6,nl=class extends Es{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new mn,this._lastTargetPosition=new Z,this._quat=new mn().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Or,this._sphericalDelta=new Or,this._scale=1,this._panOffset=new Z,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new Z,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GM.bind(this),this._onPointerDown=VM.bind(this),this._onPointerUp=HM.bind(this),this._onContextMenu=ZM.bind(this),this._onMouseWheel=$M.bind(this),this._onKeyDown=qM.bind(this),this._onTouchStart=YM.bind(this),this._onTouchMove=jM.bind(this),this._onMouseDown=WM.bind(this),this._onMouseMove=XM.bind(this),this._interceptControlDown=JM.bind(this),this._interceptControlUp=KM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Dt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ed),this.update(),this.state=Dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let u=Kt.length();c=this._clampDistance(u*this._scale);let d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){let u=new Z(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;let f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(tl.origin.copy(this.object.position),tl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tl.direction))<zM?this.object.lookAt(this.target):(wd.setFromNormalAndCoplanarPoint(this.object.up,this.target),tl.intersectPlane(wd,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xc||this._lastTargetPosition.distanceToSquared(this.target)>Xc?(this.dispatchEvent(Ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Kt.copy(s).sub(this.target);let o=Kt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,c=n.width,u=n.height;this._mouse.x=s/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new it,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function VM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function GM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function HM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Td),this.state=Dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function WM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Dt.DOLLY;break;case Oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Dt.ROTATE}break;case Oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent($c)}function XM(i){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $M(i){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(i.preventDefault(),this.dispatchEvent($c),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Td))}function qM(i){this.enabled!==!1&&this._handleKeyDown(i)}function YM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Dt.TOUCH_ROTATE;break;case Bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Dt.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent($c)}function jM(i){switch(this._trackPointer(i),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Dt.NONE}}function ZM(i){this.enabled!==!1&&i.preventDefault()}function JM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var QM=(async function(i={}){var e,t=i,n=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!o&&!s;if(o){let{createRequire:r}=await import("module");var u=r(import.meta.url)}var d=[],f="./this.program",g=(r,a)=>{throw a},y=import.meta.url,m="";function x(r){return t.locateFile?t.locateFile(r,m):m+r}var T,I;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var M=process.versions.node,_=M.split(".").slice(0,3);if(_=_[0]*1e4+_[1]*100+_[2].split("-")[0]*1,_<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+M+")");var N=u("fs");y.startsWith("file:")&&(m=u("path").dirname(u("url").fileURLToPath(y))+"/"),I=a=>{a=se(a)?new URL(a):a;var l=N.readFileSync(a);return z(Buffer.isBuffer(l)),l},T=async(a,l=!0)=>{a=se(a)?new URL(a):a;var h=N.readFileSync(a,l?void 0:"utf8");return z(l?Buffer.isBuffer(h):typeof h=="string"),h},process.argv.length>1&&(f=process.argv[1].replace(/\\/g,"/")),d=process.argv.slice(2),g=(a,l)=>{throw process.exitCode=a,l}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||s){try{m=new URL(".",y).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");s&&(I=r=>{var a=new XMLHttpRequest;return a.open("GET",r,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),T=async r=>{if(se(r))return new Promise((l,h)=>{var p=new XMLHttpRequest;p.open("GET",r,!0),p.responseType="arraybuffer",p.onload=()=>{if(p.status==200||p.status==0&&p.response){l(p.response);return}h(p.status)},p.onerror=h,p.send(null)});var a=await fetch(r,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var k=console.log.bind(console),R=console.error.bind(console),P="IDBFS is no longer included by default; build with -lidbfs.js",D="PROXYFS is no longer included by default; build with -lproxyfs.js",O="WORKERFS is no longer included by default; build with -lworkerfs.js",w="FETCHFS is no longer included by default; build with -lfetchfs.js",L="ICASEFS is no longer included by default; build with -licasefs.js",B="JSFILEFS is no longer included by default; build with -ljsfilefs.js",q="OPFS is no longer included by default; build with -lopfs.js",Y="NODEFS is no longer included by default; build with -lnodefs.js";z(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var J;typeof WebAssembly!="object"&&R("no native wasm support detected");var H=!1,te;function z(r,a){r||Se("Assertion failed"+(a?": "+a:""))}var se=r=>r.startsWith("file://");function _e(){var r=vl();z((r&3)==0),r==0&&(r+=4),Ue[r>>2]=34821223,Ue[r+4>>2]=2310721022,Ue[0]=1668509029}function ae(){if(!H){var r=vl();r==0&&(r+=4);var a=Ue[r>>2],l=Ue[r+4>>2];(a!=34821223||l!=2310721022)&&Se(`Stack overflow! Stack cookie has been overwritten at ${xi(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${xi(l)} ${xi(a)}`),Ue[0]!=1668509029&&Se("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class V extends Error{}class ge extends V{}class je extends V{constructor(a){super(a),this.excPtr=a;let l=Eh(a);this.name=l[0],this.message=l[1]}}var qe=!0;function Ft(...r){!qe&&typeof qe<"u"||console.warn(...r)}(()=>{var r=new Int16Array(1),a=new Int8Array(r.buffer);if(r[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function pt(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){Se(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Ke(r){return()=>z(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function he(r){Object.getOwnPropertyDescriptor(t,r)&&Se(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function fe(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function ke(r,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){a()}})}function rt(r,a){ke(r,()=>{wn(`\`${r}\` is not longer defined by emscripten. ${a}`)})}rt("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),rt("asm","Please use wasmExports instead");function Be(r){ke(r,()=>{var a=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=r;l.startsWith("_")||(l="$"+r),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,fe(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),wn(a)}),ct(r)}function ct(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var a=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;fe(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Se(a)}})}var Ht,ht,mt,tt,Qe,xt,Ut,Ie,Ue,kt,W,It,At,U=!1;function S(){var r=mt.buffer;tt=new Int8Array(r),xt=new Int16Array(r),Qe=new Uint8Array(r),Ut=new Uint16Array(r),Ie=new Int32Array(r),Ue=new Uint32Array(r),kt=new Float32Array(r),W=new Float64Array(r),It=new BigInt64Array(r),At=new BigUint64Array(r)}z(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function j(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)En(t.preRun.shift());pt("preRun"),Ye(Et)}function ne(){z(!U),U=!0,ae(),!t.noFSInit&&!b.initialized&&b.init(),St.init(),Yi.__wasm_call_ctors(),b.ignorePermissions=!1}function oe(){if(ae(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Lt(t.postRun.shift());pt("postRun"),Ye(We)}var we=0,Ae=null,re={},ue=null;function Ce(r){we++,t.monitorRunDependencies?.(we),r?(z(!re[r]),re[r]=1,ue===null&&typeof setInterval<"u"&&(ue=setInterval(()=>{if(H){clearInterval(ue),ue=null;return}var a=!1;for(var l in re)a||(a=!0,R("still waiting on run dependencies:")),R(`dependency: ${l}`);a&&R("(end of list)")},1e4))):R("warning: run dependency added without ID")}function Xe(r){if(we--,t.monitorRunDependencies?.(we),r?(z(re[r]),delete re[r]):R("warning: run dependency removed without ID"),we==0&&(ue!==null&&(clearInterval(ue),ue=null),Ae)){var a=Ae;Ae=null,a()}}function Se(r){t.onAbort?.(r),r="Aborted("+r+")",R(r),H=!0;var a=new WebAssembly.RuntimeError(r);throw ht?.(a),a}function Te(r,a){return(...l)=>{z(U,`native function \`${r}\` called before runtime initialization`);var h=Yi[r];return z(h,`exported native function \`${r}\` not found`),z(l.length<=a,`native function \`${r}\` called with ${l.length} args but expects ${a}`),h(...l)}}var He;function Je(){return t.locateFile?x("mujoco.wasm"):new URL("mujoco.wasm",import.meta.url).href}function at(r){if(r==He&&J)return new Uint8Array(J);if(I)return I(r);throw"both async and sync fetching of the wasm failed"}async function X(r){if(!J)try{var a=await T(r);return new Uint8Array(a)}catch{}return at(r)}async function Re(r,a){try{var l=await X(r),h=await WebAssembly.instantiate(l,a);return h}catch(p){R(`failed to asynchronously prepare wasm: ${p}`),se(He)&&R(`warning: Loading from a file URI (${He}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Se(p)}}async function de(r,a,l){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!se(a)&&!o)try{var h=fetch(a,{credentials:"same-origin"}),p=await WebAssembly.instantiateStreaming(h,l);return p}catch(v){R(`wasm streaming compile failed: ${v}`),R("falling back to ArrayBuffer instantiation")}return Re(a,l)}function Pe(){return{env:Uh,wasi_snapshot_preview1:Uh}}async function Ne(){function r(E,C){return Yi=E.exports,mt=Yi.memory,z(mt,"memory not found in wasm exports"),S(),Js=Yi.__indirect_function_table,z(Js,"table not found in wasm exports"),tm(Yi),Xe("wasm-instantiate"),Yi}Ce("wasm-instantiate");var a=t;function l(E){return z(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,r(E.instance)}var h=Pe();if(t.instantiateWasm)return new Promise((E,C)=>{try{t.instantiateWasm(h,(F,$)=>{E(r(F,$))})}catch(F){R(`Module.instantiateWasm callback failed with error: ${F}`),C(F)}});He??(He=Je());var p=await de(J,He,h),v=l(p);return v}class me{constructor(a){Wn(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var Ye=r=>{for(;r.length>0;)r.shift()(t)},We=[],Lt=r=>We.push(r),Et=[],En=r=>Et.push(r);function kn(r,a="i8"){switch(a.endsWith("*")&&(a="*"),a){case"i1":return tt[r];case"i8":return tt[r];case"i16":return xt[r>>1];case"i32":return Ie[r>>2];case"i64":return It[r>>3];case"float":return kt[r>>2];case"double":return W[r>>3];case"*":return Ue[r>>2];default:Se(`invalid type for getValue: ${a}`)}}var Os=!0,xi=r=>(z(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0"));function rl(r,a,l="i8"){switch(l.endsWith("*")&&(l="*"),l){case"i1":tt[r]=a;break;case"i8":tt[r]=a;break;case"i16":xt[r>>1]=a;break;case"i32":Ie[r>>2]=a;break;case"i64":It[r>>3]=BigInt(a);break;case"float":kt[r>>2]=a;break;case"double":W[r>>3]=a;break;case"*":Ue[r>>2]=a;break;default:Se(`invalid type for setValue: ${l}`)}}var ve=r=>Ph(r),xe=()=>Dh(),wn=r=>{wn.shown||(wn.shown={}),wn.shown[r]||(wn.shown[r]=1,o&&(r="warning: "+r),R(r))},qr=typeof TextDecoder<"u"?new TextDecoder:void 0,vn=(r,a=0,l=NaN)=>{for(var h=a+l,p=a;r[p]&&!(p>=h);)++p;if(p-a>16&&r.buffer&&qr)return qr.decode(r.subarray(a,p));for(var v="";a<p;){var E=r[a++];if(!(E&128)){v+=String.fromCharCode(E);continue}var C=r[a++]&63;if((E&224)==192){v+=String.fromCharCode((E&31)<<6|C);continue}var F=r[a++]&63;if((E&240)==224?E=(E&15)<<12|C<<6|F:((E&248)!=240&&wn("Invalid UTF-8 leading byte "+xi(E)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),E=(E&7)<<18|C<<12|F<<6|r[a++]&63),E<65536)v+=String.fromCharCode(E);else{var $=E-65536;v+=String.fromCharCode(55296|$>>10,56320|$&1023)}}return v},Tn=(r,a)=>(z(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?vn(Qe,r,a):""),Bs=(r,a,l,h)=>Se(`Assertion failed: ${Tn(r)}, at: `+[a?Tn(a):"unknown filename",l,h?Tn(h):"unknown function"]),Dn=[],ui=0,ks=r=>{var a=new or(r);return a.get_caught()||(a.set_caught(!0),ui--),a.set_rethrown(!1),Dn.push(a),ra(r),Nh(r)},ar=()=>{if(!Dn.length)return 0;var r=Dn[Dn.length-1];return ra(r.excPtr),r.excPtr},Ln=0,zs=()=>{Me(0,0),z(Dn.length>0);var r=Dn.pop();yl(r.excPtr),Ln=0};class or{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Ue[this.ptr+4>>2]=a}get_type(){return Ue[this.ptr+4>>2]}set_destructor(a){Ue[this.ptr+8>>2]=a}get_destructor(){return Ue[this.ptr+8>>2]}set_caught(a){a=a?1:0,tt[this.ptr+12]=a}get_caught(){return tt[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,tt[this.ptr+13]=a}get_rethrown(){return tt[this.ptr+13]!=0}init(a,l){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(l)}set_adjusted_ptr(a){Ue[this.ptr+16>>2]=a}get_adjusted_ptr(){return Ue[this.ptr+16>>2]}}var lr=r=>Ch(r),Yr=r=>{var a=Ln?.excPtr;if(!a)return lr(0),0;var l=new or(a);l.set_adjusted_ptr(a);var h=l.get_type();if(!h)return lr(0),a;for(var p of r){if(p===0||p===h)break;var v=l.ptr+16;if(Fh(p,h,v))return lr(p),a}return lr(h),a},sl=()=>Yr([]),Vs=r=>Yr([r]),A=(r,a)=>Yr([r,a]),G=()=>{var r=Dn.pop();r||Se("no exception to throw");var a=r.excPtr;throw r.get_rethrown()||(Dn.push(r),r.set_rethrown(!0),r.set_caught(!1),ui++),Ln=new je(a),Ln},ie=r=>{if(r){var a=new or(r);Dn.push(a),a.set_rethrown(!0),G()}},K=(r,a,l)=>{var h=new or(r);throw h.init(a,l),Ln=new je(r),ui++,Ln},Q=()=>ui,Le=r=>{throw Ln||(Ln=new je(r)),Ln},be={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(r).slice(1)},normalizeArray:(r,a)=>{for(var l=0,h=r.length-1;h>=0;h--){var p=r[h];p==="."?r.splice(h,1):p===".."?(r.splice(h,1),l++):l&&(r.splice(h,1),l--)}if(a)for(;l;l--)r.unshift("..");return r},normalize:r=>{var a=be.isAbs(r),l=r.slice(-1)==="/";return r=be.normalizeArray(r.split("/").filter(h=>!!h),!a).join("/"),!r&&!a&&(r="."),r&&l&&(r+="/"),(a?"/":"")+r},dirname:r=>{var a=be.splitPath(r),l=a[0],h=a[1];return!l&&!h?".":(h&&(h=h.slice(0,-1)),l+h)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>be.normalize(r.join("/")),join2:(r,a)=>be.normalize(r+"/"+a)},De=()=>{if(o){var r=u("crypto");return a=>r.randomFillSync(a)}return a=>crypto.getRandomValues(a)},Ve=r=>{(Ve=De())(r)},ze={resolve:(...r)=>{for(var a="",l=!1,h=r.length-1;h>=-1&&!l;h--){var p=h>=0?r[h]:b.cwd();if(typeof p!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!p)return"";a=p+"/"+a,l=be.isAbs(p)}return a=be.normalizeArray(a.split("/").filter(v=>!!v),!l).join("/"),(l?"/":"")+a||"."},relative:(r,a)=>{r=ze.resolve(r).slice(1),a=ze.resolve(a).slice(1);function l($){for(var ee=0;ee<$.length&&$[ee]==="";ee++);for(var le=$.length-1;le>=0&&$[le]==="";le--);return ee>le?[]:$.slice(ee,le-ee+1)}for(var h=l(r.split("/")),p=l(a.split("/")),v=Math.min(h.length,p.length),E=v,C=0;C<v;C++)if(h[C]!==p[C]){E=C;break}for(var F=[],C=E;C<h.length;C++)F.push("..");return F=F.concat(p.slice(E)),F.join("/")}},ot=[],lt=r=>{for(var a=0,l=0;l<r.length;++l){var h=r.charCodeAt(l);h<=127?a++:h<=2047?a+=2:h>=55296&&h<=57343?(a+=4,++l):a+=3}return a},Ge=(r,a,l,h)=>{if(z(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(h>0))return 0;for(var p=l,v=l+h-1,E=0;E<r.length;++E){var C=r.codePointAt(E);if(C<=127){if(l>=v)break;a[l++]=C}else if(C<=2047){if(l+1>=v)break;a[l++]=192|C>>6,a[l++]=128|C&63}else if(C<=65535){if(l+2>=v)break;a[l++]=224|C>>12,a[l++]=128|C>>6&63,a[l++]=128|C&63}else{if(l+3>=v)break;C>1114111&&wn("Invalid Unicode code point "+xi(C)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[l++]=240|C>>18,a[l++]=128|C>>12&63,a[l++]=128|C>>6&63,a[l++]=128|C&63,E++}}return a[l]=0,l-p},bt=(r,a,l)=>{var h=l>0?l:lt(r)+1,p=new Array(h),v=Ge(r,p,0,p.length);return a&&(p.length=v),p},Wt=()=>{if(!ot.length){var r=null;if(o){var a=256,l=Buffer.alloc(a),h=0,p=process.stdin.fd;try{h=N.readSync(p,l,0,a)}catch(v){if(v.toString().includes("EOF"))h=0;else throw v}h>0&&(r=l.slice(0,h).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;ot=bt(r,!0)}return ot.shift()},St={ttys:[],init(){},shutdown(){},register(r,a){St.ttys[r]={input:[],output:[],ops:a},b.registerDevice(r,St.stream_ops)},stream_ops:{open(r){var a=St.ttys[r.node.rdev];if(!a)throw new b.ErrnoError(43);r.tty=a,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,a,l,h,p){if(!r.tty||!r.tty.ops.get_char)throw new b.ErrnoError(60);for(var v=0,E=0;E<h;E++){var C;try{C=r.tty.ops.get_char(r.tty)}catch{throw new b.ErrnoError(29)}if(C===void 0&&v===0)throw new b.ErrnoError(6);if(C==null)break;v++,a[l+E]=C}return v&&(r.node.atime=Date.now()),v},write(r,a,l,h,p){if(!r.tty||!r.tty.ops.put_char)throw new b.ErrnoError(60);try{for(var v=0;v<h;v++)r.tty.ops.put_char(r.tty,a[l+v])}catch{throw new b.ErrnoError(29)}return h&&(r.node.mtime=r.node.ctime=Date.now()),v}},default_tty_ops:{get_char(r){return Wt()},put_char(r,a){a===null||a===10?(k(vn(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(k(vn(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,a,l){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,a){a===null||a===10?(R(vn(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(R(vn(r.output)),r.output=[])}}},Rt=r=>{Se("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},$e={ops_table:null,mount(r){return $e.createNode(null,"/",16895,0)},createNode(r,a,l,h){if(b.isBlkdev(l)||b.isFIFO(l))throw new b.ErrnoError(63);$e.ops_table||($e.ops_table={dir:{node:{getattr:$e.node_ops.getattr,setattr:$e.node_ops.setattr,lookup:$e.node_ops.lookup,mknod:$e.node_ops.mknod,rename:$e.node_ops.rename,unlink:$e.node_ops.unlink,rmdir:$e.node_ops.rmdir,readdir:$e.node_ops.readdir,symlink:$e.node_ops.symlink},stream:{llseek:$e.stream_ops.llseek}},file:{node:{getattr:$e.node_ops.getattr,setattr:$e.node_ops.setattr},stream:{llseek:$e.stream_ops.llseek,read:$e.stream_ops.read,write:$e.stream_ops.write,mmap:$e.stream_ops.mmap,msync:$e.stream_ops.msync}},link:{node:{getattr:$e.node_ops.getattr,setattr:$e.node_ops.setattr,readlink:$e.node_ops.readlink},stream:{}},chrdev:{node:{getattr:$e.node_ops.getattr,setattr:$e.node_ops.setattr},stream:b.chrdev_stream_ops}});var p=b.createNode(r,a,l,h);return b.isDir(p.mode)?(p.node_ops=$e.ops_table.dir.node,p.stream_ops=$e.ops_table.dir.stream,p.contents={}):b.isFile(p.mode)?(p.node_ops=$e.ops_table.file.node,p.stream_ops=$e.ops_table.file.stream,p.usedBytes=0,p.contents=null):b.isLink(p.mode)?(p.node_ops=$e.ops_table.link.node,p.stream_ops=$e.ops_table.link.stream):b.isChrdev(p.mode)&&(p.node_ops=$e.ops_table.chrdev.node,p.stream_ops=$e.ops_table.chrdev.stream),p.atime=p.mtime=p.ctime=Date.now(),r&&(r.contents[a]=p,r.atime=r.mtime=r.ctime=p.atime),p},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,a){var l=r.contents?r.contents.length:0;if(!(l>=a)){var h=1024*1024;a=Math.max(a,l*(l<h?2:1.125)>>>0),l!=0&&(a=Math.max(a,256));var p=r.contents;r.contents=new Uint8Array(a),r.usedBytes>0&&r.contents.set(p.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,a){if(r.usedBytes!=a)if(a==0)r.contents=null,r.usedBytes=0;else{var l=r.contents;r.contents=new Uint8Array(a),l&&r.contents.set(l.subarray(0,Math.min(a,r.usedBytes))),r.usedBytes=a}},node_ops:{getattr(r){var a={};return a.dev=b.isChrdev(r.mode)?r.id:1,a.ino=r.id,a.mode=r.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=r.rdev,b.isDir(r.mode)?a.size=4096:b.isFile(r.mode)?a.size=r.usedBytes:b.isLink(r.mode)?a.size=r.link.length:a.size=0,a.atime=new Date(r.atime),a.mtime=new Date(r.mtime),a.ctime=new Date(r.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(r,a){for(let l of["mode","atime","mtime","ctime"])a[l]!=null&&(r[l]=a[l]);a.size!==void 0&&$e.resizeFileStorage(r,a.size)},lookup(r,a){throw new b.ErrnoError(44)},mknod(r,a,l,h){return $e.createNode(r,a,l,h)},rename(r,a,l){var h;try{h=b.lookupNode(a,l)}catch{}if(h){if(b.isDir(r.mode))for(var p in h.contents)throw new b.ErrnoError(55);b.hashRemoveNode(h)}delete r.parent.contents[r.name],a.contents[l]=r,r.name=l,a.ctime=a.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,a){delete r.contents[a],r.ctime=r.mtime=Date.now()},rmdir(r,a){var l=b.lookupNode(r,a);for(var h in l.contents)throw new b.ErrnoError(55);delete r.contents[a],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,a,l){var h=$e.createNode(r,a,41471,0);return h.link=l,h},readlink(r){if(!b.isLink(r.mode))throw new b.ErrnoError(28);return r.link}},stream_ops:{read(r,a,l,h,p){var v=r.node.contents;if(p>=r.node.usedBytes)return 0;var E=Math.min(r.node.usedBytes-p,h);if(z(E>=0),E>8&&v.subarray)a.set(v.subarray(p,p+E),l);else for(var C=0;C<E;C++)a[l+C]=v[p+C];return E},write(r,a,l,h,p,v){if(z(!(a instanceof ArrayBuffer)),a.buffer===tt.buffer&&(v=!1),!h)return 0;var E=r.node;if(E.mtime=E.ctime=Date.now(),a.subarray&&(!E.contents||E.contents.subarray)){if(v)return z(p===0,"canOwn must imply no weird position inside the file"),E.contents=a.subarray(l,l+h),E.usedBytes=h,h;if(E.usedBytes===0&&p===0)return E.contents=a.slice(l,l+h),E.usedBytes=h,h;if(p+h<=E.usedBytes)return E.contents.set(a.subarray(l,l+h),p),h}if($e.expandFileStorage(E,p+h),E.contents.subarray&&a.subarray)E.contents.set(a.subarray(l,l+h),p);else for(var C=0;C<h;C++)E.contents[p+C]=a[l+C];return E.usedBytes=Math.max(E.usedBytes,p+h),h},llseek(r,a,l){var h=a;if(l===1?h+=r.position:l===2&&b.isFile(r.node.mode)&&(h+=r.node.usedBytes),h<0)throw new b.ErrnoError(28);return h},mmap(r,a,l,h,p){if(!b.isFile(r.node.mode))throw new b.ErrnoError(43);var v,E,C=r.node.contents;if(!(p&2)&&C&&C.buffer===tt.buffer)E=!1,v=C.byteOffset;else{if(E=!0,v=Rt(a),!v)throw new b.ErrnoError(48);C&&((l>0||l+a<C.length)&&(C.subarray?C=C.subarray(l,l+a):C=Array.prototype.slice.call(C,l,l+a)),tt.set(C,v))}return{ptr:v,allocated:E}},msync(r,a,l,h,p){return $e.stream_ops.write(r,a,0,h,l,!1),0}}},Oe=async r=>{var a=await T(r);return z(a,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(a)},Qt=(...r)=>b.createDataFile(...r),Mt=r=>{for(var a=r;;){if(!re[r])return r;r=a+Math.random()}},hn=[],Fn=(r,a,l,h)=>{typeof Browser<"u"&&Browser.init();var p=!1;return hn.forEach(v=>{p||v.canHandle(a)&&(v.handle(r,a,l,h),p=!0)}),p},zn=(r,a,l,h,p,v,E,C,F,$)=>{var ee=a?ze.resolve(be.join2(r,a)):r,le=Mt(`cp ${ee}`);function pe(ce){function ye(Ze){$?.(),C||Qt(r,a,Ze,h,p,F),v?.(),Xe(le)}Fn(ce,ee,ye,()=>{E?.(),Xe(le)})||ye(ce)}Ce(le),typeof l=="string"?Oe(l).then(pe,E):pe(l)},Si=r=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=a[r];if(typeof l>"u")throw new Error(`Unknown file open mode: ${r}`);return l},Ct=(r,a)=>{var l=0;return r&&(l|=365),a&&(l|=146),l},Gt=r=>Tn(Ah(r)),Vn={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},b={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(U?Gt(a):"");Wn(this,"name","ErrnoError");this.errno=a;for(var l in Vn)if(Vn[l]===a){this.code=l;break}}},FSStream:class{constructor(){Wn(this,"shared",{})}get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{constructor(r,a,l,h){Wn(this,"node_ops",{});Wn(this,"stream_ops",{});Wn(this,"readMode",365);Wn(this,"writeMode",146);Wn(this,"mounted",null);r||(r=this),this.parent=r,this.mount=r.mount,this.id=b.nextInode++,this.name=a,this.mode=l,this.rdev=h,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return b.isDir(this.mode)}get isDevice(){return b.isChrdev(this.mode)}},lookupPath(r,a={}){if(!r)throw new b.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),be.isAbs(r)||(r=b.cwd()+"/"+r);e:for(var l=0;l<40;l++){for(var h=r.split("/").filter($=>!!$),p=b.root,v="/",E=0;E<h.length;E++){var C=E===h.length-1;if(C&&a.parent)break;if(h[E]!=="."){if(h[E]===".."){if(v=be.dirname(v),b.isRoot(p)){r=v+"/"+h.slice(E+1).join("/");continue e}else p=p.parent;continue}v=be.join2(v,h[E]);try{p=b.lookupNode(p,h[E])}catch($){if($?.errno===44&&C&&a.noent_okay)return{path:v};throw $}if(b.isMountpoint(p)&&(!C||a.follow_mount)&&(p=p.mounted.root),b.isLink(p.mode)&&(!C||a.follow)){if(!p.node_ops.readlink)throw new b.ErrnoError(52);var F=p.node_ops.readlink(p);be.isAbs(F)||(F=be.dirname(v)+"/"+F),r=F+"/"+h.slice(E+1).join("/");continue e}}}return{path:v,node:p}}throw new b.ErrnoError(32)},getPath(r){for(var a;;){if(b.isRoot(r)){var l=r.mount.mountpoint;return a?l[l.length-1]!=="/"?`${l}/${a}`:l+a:l}a=a?`${r.name}/${a}`:r.name,r=r.parent}},hashName(r,a){for(var l=0,h=0;h<a.length;h++)l=(l<<5)-l+a.charCodeAt(h)|0;return(r+l>>>0)%b.nameTable.length},hashAddNode(r){var a=b.hashName(r.parent.id,r.name);r.name_next=b.nameTable[a],b.nameTable[a]=r},hashRemoveNode(r){var a=b.hashName(r.parent.id,r.name);if(b.nameTable[a]===r)b.nameTable[a]=r.name_next;else for(var l=b.nameTable[a];l;){if(l.name_next===r){l.name_next=r.name_next;break}l=l.name_next}},lookupNode(r,a){var l=b.mayLookup(r);if(l)throw new b.ErrnoError(l);for(var h=b.hashName(r.id,a),p=b.nameTable[h];p;p=p.name_next){var v=p.name;if(p.parent.id===r.id&&v===a)return p}return b.lookup(r,a)},createNode(r,a,l,h){z(typeof r=="object");var p=new b.FSNode(r,a,l,h);return b.hashAddNode(p),p},destroyNode(r){b.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var a=["r","w","rw"][r&3];return r&512&&(a+="w"),a},nodePermissions(r,a){return b.ignorePermissions?0:a.includes("r")&&!(r.mode&292)||a.includes("w")&&!(r.mode&146)||a.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!b.isDir(r.mode))return 54;var a=b.nodePermissions(r,"x");return a||(r.node_ops.lookup?0:2)},mayCreate(r,a){if(!b.isDir(r.mode))return 54;try{var l=b.lookupNode(r,a);return 20}catch{}return b.nodePermissions(r,"wx")},mayDelete(r,a,l){var h;try{h=b.lookupNode(r,a)}catch(v){return v.errno}var p=b.nodePermissions(r,"wx");if(p)return p;if(l){if(!b.isDir(h.mode))return 54;if(b.isRoot(h)||b.getPath(h)===b.cwd())return 10}else if(b.isDir(h.mode))return 31;return 0},mayOpen(r,a){return r?b.isLink(r.mode)?32:b.isDir(r.mode)&&(b.flagsToPermissionString(a)!=="r"||a&576)?31:b.nodePermissions(r,b.flagsToPermissionString(a)):44},checkOpExists(r,a){if(!r)throw new b.ErrnoError(a);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=b.MAX_OPEN_FDS;r++)if(!b.streams[r])return r;throw new b.ErrnoError(33)},getStreamChecked(r){var a=b.getStream(r);if(!a)throw new b.ErrnoError(8);return a},getStream:r=>b.streams[r],createStream(r,a=-1){return z(a>=-1),r=Object.assign(new b.FSStream,r),a==-1&&(a=b.nextfd()),r.fd=a,b.streams[a]=r,r},closeStream(r){b.streams[r]=null},dupStream(r,a=-1){var l=b.createStream(r,a);return l.stream_ops?.dup?.(l),l},doSetAttr(r,a,l){var h=r?.stream_ops.setattr,p=h?r:a;h??(h=a.node_ops.setattr),b.checkOpExists(h,63),h(p,l)},chrdev_stream_ops:{open(r){var a=b.getDevice(r.node.rdev);r.stream_ops=a.stream_ops,r.stream_ops.open?.(r)},llseek(){throw new b.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,a)=>r<<8|a,registerDevice(r,a){b.devices[r]={stream_ops:a}},getDevice:r=>b.devices[r],getMounts(r){for(var a=[],l=[r];l.length;){var h=l.pop();a.push(h),l.push(...h.mounts)}return a},syncfs(r,a){typeof r=="function"&&(a=r,r=!1),b.syncFSRequests++,b.syncFSRequests>1&&R(`warning: ${b.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=b.getMounts(b.root.mount),h=0;function p(E){return z(b.syncFSRequests>0),b.syncFSRequests--,a(E)}function v(E){if(E)return v.errored?void 0:(v.errored=!0,p(E));++h>=l.length&&p(null)}l.forEach(E=>{if(!E.type.syncfs)return v(null);E.type.syncfs(E,r,v)})},mount(r,a,l){if(typeof r=="string")throw r;var h=l==="/",p=!l,v;if(h&&b.root)throw new b.ErrnoError(10);if(!h&&!p){var E=b.lookupPath(l,{follow_mount:!1});if(l=E.path,v=E.node,b.isMountpoint(v))throw new b.ErrnoError(10);if(!b.isDir(v.mode))throw new b.ErrnoError(54)}var C={type:r,opts:a,mountpoint:l,mounts:[]},F=r.mount(C);return F.mount=C,C.root=F,h?b.root=F:v&&(v.mounted=C,v.mount&&v.mount.mounts.push(C)),F},unmount(r){var a=b.lookupPath(r,{follow_mount:!1});if(!b.isMountpoint(a.node))throw new b.ErrnoError(28);var l=a.node,h=l.mounted,p=b.getMounts(h);Object.keys(b.nameTable).forEach(E=>{for(var C=b.nameTable[E];C;){var F=C.name_next;p.includes(C.mount)&&b.destroyNode(C),C=F}}),l.mounted=null;var v=l.mount.mounts.indexOf(h);z(v!==-1),l.mount.mounts.splice(v,1)},lookup(r,a){return r.node_ops.lookup(r,a)},mknod(r,a,l){var h=b.lookupPath(r,{parent:!0}),p=h.node,v=be.basename(r);if(!v)throw new b.ErrnoError(28);if(v==="."||v==="..")throw new b.ErrnoError(20);var E=b.mayCreate(p,v);if(E)throw new b.ErrnoError(E);if(!p.node_ops.mknod)throw new b.ErrnoError(63);return p.node_ops.mknod(p,v,a,l)},statfs(r){return b.statfsNode(b.lookupPath(r,{follow:!0}).node)},statfsStream(r){return b.statfsNode(r.node)},statfsNode(r){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:b.nextInode,ffree:b.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(a,r.node_ops.statfs(r.mount.opts.root)),a},create(r,a=438){return a&=4095,a|=32768,b.mknod(r,a,0)},mkdir(r,a=511){return a&=1023,a|=16384,b.mknod(r,a,0)},mkdirTree(r,a){var l=r.split("/"),h="";for(var p of l)if(p){(h||be.isAbs(r))&&(h+="/"),h+=p;try{b.mkdir(h,a)}catch(v){if(v.errno!=20)throw v}}},mkdev(r,a,l){return typeof l>"u"&&(l=a,a=438),a|=8192,b.mknod(r,a,l)},symlink(r,a){if(!ze.resolve(r))throw new b.ErrnoError(44);var l=b.lookupPath(a,{parent:!0}),h=l.node;if(!h)throw new b.ErrnoError(44);var p=be.basename(a),v=b.mayCreate(h,p);if(v)throw new b.ErrnoError(v);if(!h.node_ops.symlink)throw new b.ErrnoError(63);return h.node_ops.symlink(h,p,r)},rename(r,a){var l=be.dirname(r),h=be.dirname(a),p=be.basename(r),v=be.basename(a),E,C,F;if(E=b.lookupPath(r,{parent:!0}),C=E.node,E=b.lookupPath(a,{parent:!0}),F=E.node,!C||!F)throw new b.ErrnoError(44);if(C.mount!==F.mount)throw new b.ErrnoError(75);var $=b.lookupNode(C,p),ee=ze.relative(r,h);if(ee.charAt(0)!==".")throw new b.ErrnoError(28);if(ee=ze.relative(a,l),ee.charAt(0)!==".")throw new b.ErrnoError(55);var le;try{le=b.lookupNode(F,v)}catch{}if($!==le){var pe=b.isDir($.mode),ce=b.mayDelete(C,p,pe);if(ce)throw new b.ErrnoError(ce);if(ce=le?b.mayDelete(F,v,pe):b.mayCreate(F,v),ce)throw new b.ErrnoError(ce);if(!C.node_ops.rename)throw new b.ErrnoError(63);if(b.isMountpoint($)||le&&b.isMountpoint(le))throw new b.ErrnoError(10);if(F!==C&&(ce=b.nodePermissions(C,"w"),ce))throw new b.ErrnoError(ce);b.hashRemoveNode($);try{C.node_ops.rename($,F,v),$.parent=F}catch(ye){throw ye}finally{b.hashAddNode($)}}},rmdir(r){var a=b.lookupPath(r,{parent:!0}),l=a.node,h=be.basename(r),p=b.lookupNode(l,h),v=b.mayDelete(l,h,!0);if(v)throw new b.ErrnoError(v);if(!l.node_ops.rmdir)throw new b.ErrnoError(63);if(b.isMountpoint(p))throw new b.ErrnoError(10);l.node_ops.rmdir(l,h),b.destroyNode(p)},readdir(r){var a=b.lookupPath(r,{follow:!0}),l=a.node,h=b.checkOpExists(l.node_ops.readdir,54);return h(l)},unlink(r){var a=b.lookupPath(r,{parent:!0}),l=a.node;if(!l)throw new b.ErrnoError(44);var h=be.basename(r),p=b.lookupNode(l,h),v=b.mayDelete(l,h,!1);if(v)throw new b.ErrnoError(v);if(!l.node_ops.unlink)throw new b.ErrnoError(63);if(b.isMountpoint(p))throw new b.ErrnoError(10);l.node_ops.unlink(l,h),b.destroyNode(p)},readlink(r){var a=b.lookupPath(r),l=a.node;if(!l)throw new b.ErrnoError(44);if(!l.node_ops.readlink)throw new b.ErrnoError(28);return l.node_ops.readlink(l)},stat(r,a){var l=b.lookupPath(r,{follow:!a}),h=l.node,p=b.checkOpExists(h.node_ops.getattr,63);return p(h)},fstat(r){var a=b.getStreamChecked(r),l=a.node,h=a.stream_ops.getattr,p=h?a:l;return h??(h=l.node_ops.getattr),b.checkOpExists(h,63),h(p)},lstat(r){return b.stat(r,!0)},doChmod(r,a,l,h){b.doSetAttr(r,a,{mode:l&4095|a.mode&-4096,ctime:Date.now(),dontFollow:h})},chmod(r,a,l){var h;if(typeof r=="string"){var p=b.lookupPath(r,{follow:!l});h=p.node}else h=r;b.doChmod(null,h,a,l)},lchmod(r,a){b.chmod(r,a,!0)},fchmod(r,a){var l=b.getStreamChecked(r);b.doChmod(l,l.node,a,!1)},doChown(r,a,l){b.doSetAttr(r,a,{timestamp:Date.now(),dontFollow:l})},chown(r,a,l,h){var p;if(typeof r=="string"){var v=b.lookupPath(r,{follow:!h});p=v.node}else p=r;b.doChown(null,p,h)},lchown(r,a,l){b.chown(r,a,l,!0)},fchown(r,a,l){var h=b.getStreamChecked(r);b.doChown(h,h.node,!1)},doTruncate(r,a,l){if(b.isDir(a.mode))throw new b.ErrnoError(31);if(!b.isFile(a.mode))throw new b.ErrnoError(28);var h=b.nodePermissions(a,"w");if(h)throw new b.ErrnoError(h);b.doSetAttr(r,a,{size:l,timestamp:Date.now()})},truncate(r,a){if(a<0)throw new b.ErrnoError(28);var l;if(typeof r=="string"){var h=b.lookupPath(r,{follow:!0});l=h.node}else l=r;b.doTruncate(null,l,a)},ftruncate(r,a){var l=b.getStreamChecked(r);if(a<0||(l.flags&2097155)===0)throw new b.ErrnoError(28);b.doTruncate(l,l.node,a)},utime(r,a,l){var h=b.lookupPath(r,{follow:!0}),p=h.node,v=b.checkOpExists(p.node_ops.setattr,63);v(p,{atime:a,mtime:l})},open(r,a,l=438){if(r==="")throw new b.ErrnoError(44);a=typeof a=="string"?Si(a):a,a&64?l=l&4095|32768:l=0;var h,p;if(typeof r=="object")h=r;else{p=r.endsWith("/");var v=b.lookupPath(r,{follow:!(a&131072),noent_okay:!0});h=v.node,r=v.path}var E=!1;if(a&64)if(h){if(a&128)throw new b.ErrnoError(20)}else{if(p)throw new b.ErrnoError(31);h=b.mknod(r,l|511,0),E=!0}if(!h)throw new b.ErrnoError(44);if(b.isChrdev(h.mode)&&(a&=-513),a&65536&&!b.isDir(h.mode))throw new b.ErrnoError(54);if(!E){var C=b.mayOpen(h,a);if(C)throw new b.ErrnoError(C)}a&512&&!E&&b.truncate(h,0),a&=-131713;var F=b.createStream({node:h,path:b.getPath(h),flags:a,seekable:!0,position:0,stream_ops:h.stream_ops,ungotten:[],error:!1});return F.stream_ops.open&&F.stream_ops.open(F),E&&b.chmod(h,l&511),t.logReadFiles&&!(a&1)&&(r in b.readFiles||(b.readFiles[r]=1)),F},close(r){if(b.isClosed(r))throw new b.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(a){throw a}finally{b.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,a,l){if(b.isClosed(r))throw new b.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new b.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new b.ErrnoError(28);return r.position=r.stream_ops.llseek(r,a,l),r.ungotten=[],r.position},read(r,a,l,h,p){if(z(l>=0),h<0||p<0)throw new b.ErrnoError(28);if(b.isClosed(r))throw new b.ErrnoError(8);if((r.flags&2097155)===1)throw new b.ErrnoError(8);if(b.isDir(r.node.mode))throw new b.ErrnoError(31);if(!r.stream_ops.read)throw new b.ErrnoError(28);var v=typeof p<"u";if(!v)p=r.position;else if(!r.seekable)throw new b.ErrnoError(70);var E=r.stream_ops.read(r,a,l,h,p);return v||(r.position+=E),E},write(r,a,l,h,p,v){if(z(l>=0),h<0||p<0)throw new b.ErrnoError(28);if(b.isClosed(r))throw new b.ErrnoError(8);if((r.flags&2097155)===0)throw new b.ErrnoError(8);if(b.isDir(r.node.mode))throw new b.ErrnoError(31);if(!r.stream_ops.write)throw new b.ErrnoError(28);r.seekable&&r.flags&1024&&b.llseek(r,0,2);var E=typeof p<"u";if(!E)p=r.position;else if(!r.seekable)throw new b.ErrnoError(70);var C=r.stream_ops.write(r,a,l,h,p,v);return E||(r.position+=C),C},mmap(r,a,l,h,p){if((h&2)!==0&&(p&2)===0&&(r.flags&2097155)!==2)throw new b.ErrnoError(2);if((r.flags&2097155)===1)throw new b.ErrnoError(2);if(!r.stream_ops.mmap)throw new b.ErrnoError(43);if(!a)throw new b.ErrnoError(28);return r.stream_ops.mmap(r,a,l,h,p)},msync(r,a,l,h,p){return z(l>=0),r.stream_ops.msync?r.stream_ops.msync(r,a,l,h,p):0},ioctl(r,a,l){if(!r.stream_ops.ioctl)throw new b.ErrnoError(59);return r.stream_ops.ioctl(r,a,l)},readFile(r,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var l=b.open(r,a.flags),h=b.stat(r),p=h.size,v=new Uint8Array(p);return b.read(l,v,0,p,0),a.encoding==="utf8"&&(v=vn(v)),b.close(l),v},writeFile(r,a,l={}){l.flags=l.flags||577;var h=b.open(r,l.flags,l.mode);if(typeof a=="string"&&(a=new Uint8Array(bt(a,!0))),ArrayBuffer.isView(a))b.write(h,a,0,a.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");b.close(h)},cwd:()=>b.currentPath,chdir(r){var a=b.lookupPath(r,{follow:!0});if(a.node===null)throw new b.ErrnoError(44);if(!b.isDir(a.node.mode))throw new b.ErrnoError(54);var l=b.nodePermissions(a.node,"x");if(l)throw new b.ErrnoError(l);b.currentPath=a.path},createDefaultDirectories(){b.mkdir("/tmp"),b.mkdir("/home"),b.mkdir("/home/web_user")},createDefaultDevices(){b.mkdir("/dev"),b.registerDevice(b.makedev(1,3),{read:()=>0,write:(h,p,v,E,C)=>E,llseek:()=>0}),b.mkdev("/dev/null",b.makedev(1,3)),St.register(b.makedev(5,0),St.default_tty_ops),St.register(b.makedev(6,0),St.default_tty1_ops),b.mkdev("/dev/tty",b.makedev(5,0)),b.mkdev("/dev/tty1",b.makedev(6,0));var r=new Uint8Array(1024),a=0,l=()=>(a===0&&(Ve(r),a=r.byteLength),r[--a]);b.createDevice("/dev","random",l),b.createDevice("/dev","urandom",l),b.mkdir("/dev/shm"),b.mkdir("/dev/shm/tmp")},createSpecialDirectories(){b.mkdir("/proc");var r=b.mkdir("/proc/self");b.mkdir("/proc/self/fd"),b.mount({mount(){var a=b.createNode(r,"fd",16895,73);return a.stream_ops={llseek:$e.stream_ops.llseek},a.node_ops={lookup(l,h){var p=+h,v=b.getStreamChecked(p),E={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>v.path},id:p+1};return E.parent=E,E},readdir(){return Array.from(b.streams.entries()).filter(([l,h])=>h).map(([l,h])=>l.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(r,a,l){r?b.createDevice("/dev","stdin",r):b.symlink("/dev/tty","/dev/stdin"),a?b.createDevice("/dev","stdout",null,a):b.symlink("/dev/tty","/dev/stdout"),l?b.createDevice("/dev","stderr",null,l):b.symlink("/dev/tty1","/dev/stderr");var h=b.open("/dev/stdin",0),p=b.open("/dev/stdout",1),v=b.open("/dev/stderr",1);z(h.fd===0,`invalid handle for stdin (${h.fd})`),z(p.fd===1,`invalid handle for stdout (${p.fd})`),z(v.fd===2,`invalid handle for stderr (${v.fd})`)},staticInit(){b.nameTable=new Array(4096),b.mount($e,{},"/"),b.createDefaultDirectories(),b.createDefaultDevices(),b.createSpecialDirectories(),b.filesystems={MEMFS:$e}},init(r,a,l){z(!b.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),b.initialized=!0,r??(r=t.stdin),a??(a=t.stdout),l??(l=t.stderr),b.createStandardStreams(r,a,l)},quit(){b.initialized=!1,_l(0);for(var r of b.streams)r&&b.close(r)},findObject(r,a){var l=b.analyzePath(r,a);return l.exists?l.object:null},analyzePath(r,a){try{var l=b.lookupPath(r,{follow:!a});r=l.path}catch{}var h={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=b.lookupPath(r,{parent:!0});h.parentExists=!0,h.parentPath=l.path,h.parentObject=l.node,h.name=be.basename(r),l=b.lookupPath(r,{follow:!a}),h.exists=!0,h.path=l.path,h.object=l.node,h.name=l.node.name,h.isRoot=l.path==="/"}catch(p){h.error=p.errno}return h},createPath(r,a,l,h){r=typeof r=="string"?r:b.getPath(r);for(var p=a.split("/").reverse();p.length;){var v=p.pop();if(v){var E=be.join2(r,v);try{b.mkdir(E)}catch(C){if(C.errno!=20)throw C}r=E}}return E},createFile(r,a,l,h,p){var v=be.join2(typeof r=="string"?r:b.getPath(r),a),E=Ct(h,p);return b.create(v,E)},createDataFile(r,a,l,h,p,v){var E=a;r&&(r=typeof r=="string"?r:b.getPath(r),E=a?be.join2(r,a):r);var C=Ct(h,p),F=b.create(E,C);if(l){if(typeof l=="string"){for(var $=new Array(l.length),ee=0,le=l.length;ee<le;++ee)$[ee]=l.charCodeAt(ee);l=$}b.chmod(F,C|146);var pe=b.open(F,577);b.write(pe,l,0,l.length,0,v),b.close(pe),b.chmod(F,C)}},createDevice(r,a,l,h){var C;var p=be.join2(typeof r=="string"?r:b.getPath(r),a),v=Ct(!!l,!!h);(C=b.createDevice).major??(C.major=64);var E=b.makedev(b.createDevice.major++,0);return b.registerDevice(E,{open(F){F.seekable=!1},close(F){h?.buffer?.length&&h(10)},read(F,$,ee,le,pe){for(var ce=0,ye=0;ye<le;ye++){var Ze;try{Ze=l()}catch{throw new b.ErrnoError(29)}if(Ze===void 0&&ce===0)throw new b.ErrnoError(6);if(Ze==null)break;ce++,$[ee+ye]=Ze}return ce&&(F.node.atime=Date.now()),ce},write(F,$,ee,le,pe){for(var ce=0;ce<le;ce++)try{h($[ee+ce])}catch{throw new b.ErrnoError(29)}return le&&(F.node.mtime=F.node.ctime=Date.now()),ce}}),b.mkdev(p,v,E)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=I(r.url),r.usedBytes=r.contents.length}catch{throw new b.ErrnoError(29)}},createLazyFile(r,a,l,h,p){class v{constructor(){Wn(this,"lengthKnown",!1);Wn(this,"chunks",[])}get(ce){if(!(ce>this.length-1||ce<0)){var ye=ce%this.chunkSize,Ze=ce/this.chunkSize|0;return this.getter(Ze)[ye]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",l,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+l+". Status: "+ce.status);var ye=Number(ce.getResponseHeader("Content-length")),Ze,_t=(Ze=ce.getResponseHeader("Accept-Ranges"))&&Ze==="bytes",dt=(Ze=ce.getResponseHeader("Content-Encoding"))&&Ze==="gzip",Ot=1024*1024;_t||(Ot=ye);var Tt=(jt,un)=>{if(jt>un)throw new Error("invalid range ("+jt+", "+un+") or no bytes requested!");if(un>ye-1)throw new Error("only "+ye+" bytes available! programmer error!");var Nt=new XMLHttpRequest;if(Nt.open("GET",l,!1),ye!==Ot&&Nt.setRequestHeader("Range","bytes="+jt+"-"+un),Nt.responseType="arraybuffer",Nt.overrideMimeType&&Nt.overrideMimeType("text/plain; charset=x-user-defined"),Nt.send(null),!(Nt.status>=200&&Nt.status<300||Nt.status===304))throw new Error("Couldn't load "+l+". Status: "+Nt.status);return Nt.response!==void 0?new Uint8Array(Nt.response||[]):bt(Nt.responseText||"",!0)},rn=this;rn.setDataGetter(jt=>{var un=jt*Ot,Nt=(jt+1)*Ot-1;if(Nt=Math.min(Nt,ye-1),typeof rn.chunks[jt]>"u"&&(rn.chunks[jt]=Tt(un,Nt)),typeof rn.chunks[jt]>"u")throw new Error("doXHR failed!");return rn.chunks[jt]}),(dt||!ye)&&(Ot=ye=1,ye=this.getter(0).length,Ot=ye,k("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ye,this._chunkSize=Ot,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!s)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var E=new v,C={isDevice:!1,contents:E}}else var C={isDevice:!1,url:l};var F=b.createFile(r,a,C,h,p);C.contents?F.contents=C.contents:C.url&&(F.contents=null,F.url=C.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var $={},ee=Object.keys(F.stream_ops);ee.forEach(pe=>{var ce=F.stream_ops[pe];$[pe]=(...ye)=>(b.forceLoadFile(F),ce(...ye))});function le(pe,ce,ye,Ze,_t){var dt=pe.node.contents;if(_t>=dt.length)return 0;var Ot=Math.min(dt.length-_t,Ze);if(z(Ot>=0),dt.slice)for(var Tt=0;Tt<Ot;Tt++)ce[ye+Tt]=dt[_t+Tt];else for(var Tt=0;Tt<Ot;Tt++)ce[ye+Tt]=dt.get(_t+Tt);return Ot}return $.read=(pe,ce,ye,Ze,_t)=>(b.forceLoadFile(F),le(pe,ce,ye,Ze,_t)),$.mmap=(pe,ce,ye,Ze,_t)=>{b.forceLoadFile(F);var dt=Rt(ce);if(!dt)throw new b.ErrnoError(48);return le(pe,tt,dt,ce,ye),{ptr:dt,allocated:!0}},F.stream_ops=$,F},absolutePath(){Se("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){Se("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){Se("FS.createLink has been removed; use FS.symlink instead")},joinPath(){Se("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){Se("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){Se("FS.standardizePath has been removed; use PATH.normalize instead")}},wt={DEFAULT_POLLMASK:5,calculateAt(r,a,l){if(be.isAbs(a))return a;var h;if(r===-100)h=b.cwd();else{var p=wt.getStreamFromFD(r);h=p.path}if(a.length==0){if(!l)throw new b.ErrnoError(44);return h}return h+"/"+a},writeStat(r,a){Ie[r>>2]=a.dev,Ie[r+4>>2]=a.mode,Ue[r+8>>2]=a.nlink,Ie[r+12>>2]=a.uid,Ie[r+16>>2]=a.gid,Ie[r+20>>2]=a.rdev,It[r+24>>3]=BigInt(a.size),Ie[r+32>>2]=4096,Ie[r+36>>2]=a.blocks;var l=a.atime.getTime(),h=a.mtime.getTime(),p=a.ctime.getTime();return It[r+40>>3]=BigInt(Math.floor(l/1e3)),Ue[r+48>>2]=l%1e3*1e3*1e3,It[r+56>>3]=BigInt(Math.floor(h/1e3)),Ue[r+64>>2]=h%1e3*1e3*1e3,It[r+72>>3]=BigInt(Math.floor(p/1e3)),Ue[r+80>>2]=p%1e3*1e3*1e3,It[r+88>>3]=BigInt(a.ino),0},writeStatFs(r,a){Ie[r+4>>2]=a.bsize,Ie[r+40>>2]=a.bsize,Ie[r+8>>2]=a.blocks,Ie[r+12>>2]=a.bfree,Ie[r+16>>2]=a.bavail,Ie[r+20>>2]=a.files,Ie[r+24>>2]=a.ffree,Ie[r+28>>2]=a.fsid,Ie[r+44>>2]=a.flags,Ie[r+36>>2]=a.namelen},doMsync(r,a,l,h,p){if(!b.isFile(a.node.mode))throw new b.ErrnoError(43);if(h&2)return 0;var v=Qe.slice(r,r+l);b.msync(a,v,p,l,h)},getStreamFromFD(r){var a=b.getStreamChecked(r);return a},varargs:void 0,getStr(r){var a=Tn(r);return a}};function Mi(r,a,l){try{var h=wt.getStreamFromFD(r);if(z(!l),h.fd===a)return-28;if(a<0||a>=b.MAX_OPEN_FDS)return-8;var p=b.getStream(a);return p&&b.close(p),b.dupStream(h,a).fd}catch(v){if(typeof b>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}var Hi=()=>{z(wt.varargs!=null);var r=Ie[+wt.varargs>>2];return wt.varargs+=4,r},cr=Hi;function kd(r,a,l){wt.varargs=l;try{var h=wt.getStreamFromFD(r);switch(a){case 0:{var p=Hi();if(p<0)return-28;for(;b.streams[p];)p++;var v;return v=b.dupStream(h,p),v.fd}case 1:case 2:return 0;case 3:return h.flags;case 4:{var p=Hi();return h.flags|=p,0}case 12:{var p=cr(),E=0;return xt[p+E>>1]=2,0}case 13:case 14:return 0}return-28}catch(C){if(typeof b>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function zd(r,a){try{return wt.writeStat(a,b.fstat(r))}catch(l){if(typeof b>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Vd(r,a,l){wt.varargs=l;try{var h=wt.getStreamFromFD(r);switch(a){case 21509:return h.tty?0:-59;case 21505:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcgets){var p=h.tty.ops.ioctl_tcgets(h),v=cr();Ie[v>>2]=p.c_iflag||0,Ie[v+4>>2]=p.c_oflag||0,Ie[v+8>>2]=p.c_cflag||0,Ie[v+12>>2]=p.c_lflag||0;for(var E=0;E<32;E++)tt[v+E+17]=p.c_cc[E]||0;return 0}return 0}case 21510:case 21511:case 21512:return h.tty?0:-59;case 21506:case 21507:case 21508:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcsets){for(var v=cr(),C=Ie[v>>2],F=Ie[v+4>>2],$=Ie[v+8>>2],ee=Ie[v+12>>2],le=[],E=0;E<32;E++)le.push(tt[v+E+17]);return h.tty.ops.ioctl_tcsets(h.tty,a,{c_iflag:C,c_oflag:F,c_cflag:$,c_lflag:ee,c_cc:le})}return 0}case 21519:{if(!h.tty)return-59;var v=cr();return Ie[v>>2]=0,0}case 21520:return h.tty?-28:-59;case 21531:{var v=cr();return b.ioctl(h,a,v)}case 21523:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tiocgwinsz){var pe=h.tty.ops.ioctl_tiocgwinsz(h.tty),v=cr();xt[v>>1]=pe[0],xt[v+2>>1]=pe[1]}return 0}case 21524:return h.tty?0:-59;case 21515:return h.tty?0:-59;default:return-28}}catch(ce){if(typeof b>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function Gd(r,a){try{return r=wt.getStr(r),wt.writeStat(a,b.lstat(r))}catch(l){if(typeof b>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Hd(r,a,l,h){try{a=wt.getStr(a);var p=h&256,v=h&4096;return h=h&-6401,z(!h,`unknown flags in __syscall_newfstatat: ${h}`),a=wt.calculateAt(r,a,v),wt.writeStat(l,p?b.lstat(a):b.stat(a))}catch(E){if(typeof b>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}function Wd(r,a,l,h){wt.varargs=h;try{a=wt.getStr(a),a=wt.calculateAt(r,a);var p=h?Hi():0;return b.open(a,l,p).fd}catch(v){if(typeof b>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}function Xd(r,a){try{return r=wt.getStr(r),wt.writeStat(a,b.stat(r))}catch(l){if(typeof b>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var $d=()=>Se("native code called abort()"),qt=r=>{for(var a="";;){var l=Qe[r++];if(!l)return a;a+=String.fromCharCode(l)}},hr={},Wi={},Gs={},jr=class extends Error{constructor(a){super(a),this.name="BindingError"}},vt=r=>{throw new jr(r)};function qd(r,a,l={}){var h=a.name;if(r||vt(`type "${h}" must have a positive integer typeid pointer`),Wi.hasOwnProperty(r)){if(l.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${h}' twice`)}if(Wi[r]=a,delete Gs[r],hr.hasOwnProperty(r)){var p=hr[r];delete hr[r],p.forEach(v=>v())}}function Nn(r,a,l={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return qd(r,a,l)}var Kc=(r,a,l)=>{switch(a){case 1:return l?h=>tt[h]:h=>Qe[h];case 2:return l?h=>xt[h>>1]:h=>Ut[h>>1];case 4:return l?h=>Ie[h>>2]:h=>Ue[h>>2];case 8:return l?h=>It[h>>3]:h=>At[h>>3];default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Xi=r=>{if(r===null)return"null";var a=typeof r;return a==="object"||a==="array"||a==="function"?r.toString():""+r},Qc=(r,a,l,h)=>{if(a<l||a>h)throw new TypeError(`Passing a number "${Xi(a)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${l}, ${h}]!`)},Yd=(r,a,l,h,p)=>{a=qt(a);let v=h===0n,E=C=>C;if(v){let C=l*8;E=F=>BigInt.asUintN(C,F),p=E(p)}Nn(r,{name:a,fromWireType:E,toWireType:(C,F)=>{if(typeof F=="number")F=BigInt(F);else if(typeof F!="bigint")throw new TypeError(`Cannot convert "${Xi(F)}" to ${this.name}`);return Qc(a,F,h,p),F},argPackAdvance:ti,readValueFromPointer:Kc(a,l,!v),destructorFunction:null})},ti=8,jd=(r,a,l,h)=>{a=qt(a),Nn(r,{name:a,fromWireType:function(p){return!!p},toWireType:function(p,v){return v?l:h},argPackAdvance:ti,readValueFromPointer:function(p){return this.fromWireType(Qe[p])},destructorFunction:null})},Zd=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),al=r=>{function a(l){return l.$$.ptrType.registeredClass.name}vt(a(r)+" instance already deleted")},ol=!1,eh=r=>{},Jd=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},th=r=>{r.count.value-=1;var a=r.count.value===0;a&&Jd(r)},nh=(r,a,l)=>{if(a===l)return r;if(l.baseClass===void 0)return null;var h=nh(r,a,l.baseClass);return h===null?null:l.downcast(h)},ih={},Kd={},Qd=(r,a)=>{for(a===void 0&&vt("ptr should not be undefined");r.baseClass;)a=r.upcast(a),r=r.baseClass;return a},ef=(r,a)=>(a=Qd(r,a),Kd[a]),tf=class extends Error{constructor(a){super(a),this.name="InternalError"}},Hs=r=>{throw new tf(r)},Ws=(r,a)=>{(!a.ptrType||!a.ptr)&&Hs("makeClassHandle requires ptr and ptrType");var l=!!a.smartPtrType,h=!!a.smartPtr;return l!==h&&Hs("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Zr(Object.create(r,{$$:{value:a,writable:!0}}))};function rh(r){var a=this.getPointee(r);if(!a)return this.destructor(r),null;var l=ef(this.registeredClass,a);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=a,l.$$.smartPtr=r,l.clone();var h=l.clone();return this.destructor(r),h}function p(){return this.isSmartPointer?Ws(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:r}):Ws(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var v=this.registeredClass.getActualType(a),E=ih[v];if(!E)return p.call(this);var C;this.isConst?C=E.constPointerType:C=E.pointerType;var F=nh(a,this.registeredClass,C.registeredClass);return F===null?p.call(this):this.isSmartPointer?Ws(C.registeredClass.instancePrototype,{ptrType:C,ptr:F,smartPtrType:this,smartPtr:r}):Ws(C.registeredClass.instancePrototype,{ptrType:C,ptr:F})}var Zr=r=>typeof FinalizationRegistry>"u"?(Zr=a=>a,r):(ol=new FinalizationRegistry(a=>{console.warn(a.leakWarning),th(a.$$)}),Zr=a=>{var l=a.$$,h=!!l.smartPtr;if(h){var p={$$:l},v=l.ptrType.registeredClass,E=new Error(`Embind found a leaked C++ instance ${v.name} <${xi(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(E,rh),p.leakWarning=E.stack.replace(/^Error: /,""),ol.register(a,p,a)}return a},eh=a=>ol.unregister(a),Zr(r)),Xs=[],nf=()=>{for(;Xs.length;){var r=Xs.pop();r.$$.deleteScheduled=!1,r.delete()}},sh,rf=()=>{let r=$s.prototype;Object.assign(r,{isAliasOf(l){if(!(this instanceof $s)||!(l instanceof $s))return!1;var h=this.$$.ptrType.registeredClass,p=this.$$.ptr;l.$$=l.$$;for(var v=l.$$.ptrType.registeredClass,E=l.$$.ptr;h.baseClass;)p=h.upcast(p),h=h.baseClass;for(;v.baseClass;)E=v.upcast(E),v=v.baseClass;return h===v&&p===E},clone(){if(this.$$.ptr||al(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Zr(Object.create(Object.getPrototypeOf(this),{$$:{value:Zd(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||al(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),eh(this),th(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||al(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),Xs.push(this),Xs.length===1&&sh&&sh(nf),this.$$.deleteScheduled=!0,this}});let a=Symbol.dispose;a&&(r[a]=r.delete)};function $s(){}var qs=(r,a)=>Object.defineProperty(a,"name",{value:r}),ll=(r,a,l)=>{if(r[a].overloadTable===void 0){var h=r[a];r[a]=function(...p){return r[a].overloadTable.hasOwnProperty(p.length)||vt(`Function '${l}' called with an invalid number of arguments (${p.length}) - expects one of (${r[a].overloadTable})!`),r[a].overloadTable[p.length].apply(this,p)},r[a].overloadTable=[],r[a].overloadTable[h.argCount]=h}},cl=(r,a,l)=>{t.hasOwnProperty(r)?((l===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[l]!==void 0)&&vt(`Cannot register public name '${r}' twice`),ll(t,r,r),t[r].overloadTable.hasOwnProperty(l)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[r].overloadTable[l]=a):(t[r]=a,t[r].argCount=l)},sf=48,af=57,of=r=>{z(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var a=r.charCodeAt(0);return a>=sf&&a<=af?`_${r}`:r};function lf(r,a,l,h,p,v,E,C){this.name=r,this.constructor=a,this.instancePrototype=l,this.rawDestructor=h,this.baseClass=p,this.getActualType=v,this.upcast=E,this.downcast=C,this.pureVirtualFunctions=[]}var Ys=(r,a,l)=>{for(;a!==l;)a.upcast||vt(`Expected null or instance of ${l.name}, got an instance of ${a.name}`),r=a.upcast(r),a=a.baseClass;return r};function cf(r,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Xi(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=a.$$.ptrType.registeredClass,h=Ys(a.$$.ptr,l,this.registeredClass);return h}function hf(r,a){var l;if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,l),l):0;(!a||!a.$$)&&vt(`Cannot pass "${Xi(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var h=a.$$.ptrType.registeredClass;if(l=Ys(a.$$.ptr,h,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?l=a.$$.smartPtr:vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)l=a.$$.smartPtr;else{var p=a.clone();l=this.rawShare(l,Yt.toHandle(()=>p.delete())),r!==null&&r.push(this.rawDestructor,l)}break;default:vt("Unsupporting sharing policy")}return l}function uf(r,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Xi(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var l=a.$$.ptrType.registeredClass,h=Ys(a.$$.ptr,l,this.registeredClass);return h}function js(r){return this.fromWireType(Ue[r>>2])}var df=()=>{Object.assign(Zs.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:ti,readValueFromPointer:js,fromWireType:rh})};function Zs(r,a,l,h,p,v,E,C,F,$,ee){this.name=r,this.registeredClass=a,this.isReference=l,this.isConst=h,this.isSmartPointer=p,this.pointeeType=v,this.sharingPolicy=E,this.rawGetPointee=C,this.rawConstructor=F,this.rawShare=$,this.rawDestructor=ee,!p&&a.baseClass===void 0?h?(this.toWireType=cf,this.destructorFunction=null):(this.toWireType=uf,this.destructorFunction=null):this.toWireType=hf}var ah=(r,a,l)=>{t.hasOwnProperty(r)||Hs("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&l!==void 0?t[r].overloadTable[l]=a:(t[r]=a,t[r].argCount=l)},oh=[],Js,Ee=r=>{var a=oh[r];return a||(oh[r]=a=Js.get(r)),z(Js.get(r)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},ni=(r,a,l=!1)=>{z(!l,"Async bindings are only supported with JSPI."),r=qt(r);function h(){var v=Ee(a);return v}var p=h();return typeof p!="function"&&vt(`unknown function pointer with signature ${r}: ${a}`),p};class ff extends Error{}var lh=r=>{var a=Th(r),l=qt(a);return Hn(a),l},$i=(r,a)=>{var l=[],h={};function p(v){if(!h[v]&&!Wi[v]){if(Gs[v]){Gs[v].forEach(p);return}l.push(v),h[v]=!0}}throw a.forEach(p),new ff(`${r}: `+l.map(lh).join([", "]))},Gn=(r,a,l)=>{r.forEach(C=>Gs[C]=a);function h(C){var F=l(C);F.length!==r.length&&Hs("Mismatched type converter count");for(var $=0;$<r.length;++$)Nn(r[$],F[$])}var p=new Array(a.length),v=[],E=0;a.forEach((C,F)=>{Wi.hasOwnProperty(C)?p[F]=Wi[C]:(v.push(C),hr.hasOwnProperty(C)||(hr[C]=[]),hr[C].push(()=>{p[F]=Wi[C],++E,E===v.length&&h(p)}))}),v.length===0&&h(p)},pf=(r,a,l,h,p,v,E,C,F,$,ee,le,pe)=>{ee=qt(ee),v=ni(p,v),C&&(C=ni(E,C)),$&&($=ni(F,$)),pe=ni(le,pe);var ce=of(ee);cl(ce,function(){$i(`Cannot construct ${ee} due to unbound types`,[h])}),Gn([r,a,l],h?[h]:[],ye=>{var Nt;ye=ye[0];var Ze,_t;h?(Ze=ye.registeredClass,_t=Ze.instancePrototype):_t=$s.prototype;var dt=qs(ee,function(...bi){if(Object.getPrototypeOf(this)!==Ot)throw new jr(`Use 'new' to construct ${ee}`);if(Tt.constructor_body===void 0)throw new jr(`${ee} has no accessible constructor`);var sa=Tt.constructor_body[bi.length];if(sa===void 0)throw new jr(`Tried to invoke ctor of ${ee} with invalid number of parameters (${bi.length}) - expected (${Object.keys(Tt.constructor_body).toString()}) parameters instead!`);return sa.apply(this,bi)}),Ot=Object.create(_t,{constructor:{value:dt}});dt.prototype=Ot;var Tt=new lf(ee,dt,Ot,pe,Ze,v,C,$);Tt.baseClass&&((Nt=Tt.baseClass).__derivedClasses??(Nt.__derivedClasses=[]),Tt.baseClass.__derivedClasses.push(Tt));var rn=new Zs(ee,Tt,!0,!1,!1),jt=new Zs(ee+"*",Tt,!1,!1,!1),un=new Zs(ee+" const*",Tt,!1,!0,!1);return ih[r]={pointerType:jt,constPointerType:un},ah(ce,dt),[rn,jt,un]})},hl=r=>{for(;r.length;){var a=r.pop(),l=r.pop();l(a)}};function ch(r){for(var a=1;a<r.length;++a)if(r[a]!==null&&r[a].destructorFunction===void 0)return!0;return!1}function mf(r,a,l,h,p){if(r<a||r>l){var v=a==l?a:`${a} to ${l}`;p(`function ${h} called with ${r} arguments, expected ${v}`)}}function gf(r,a,l,h){var p=ch(r),v=r.length-2,E=[],C=["fn"];a&&C.push("thisWired");for(var F=0;F<v;++F)E.push(`arg${F}`),C.push(`arg${F}Wired`);E=E.join(","),C=C.join(",");var $=`return function (${E}) {
`;$+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,p&&($+=`var destructors = [];
`);var ee=p?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&($+=`var thisWired = classParam['toWireType'](${ee}, this);
`);for(var F=0;F<v;++F)$+=`var arg${F}Wired = argType${F}['toWireType'](${ee}, arg${F});
`,le.push(`argType${F}`);$+=(l||h?"var rv = ":"")+`invoker(${C});
`;var pe=l?"rv":"";if(p)$+=`runDestructors(destructors);
`;else for(var F=a?1:2;F<r.length;++F){var ce=F===1?"thisWired":"arg"+(F-2)+"Wired";r[F].destructorFunction!==null&&($+=`${ce}_dtor(${ce});
`,le.push(`${ce}_dtor`))}return l&&($+=`var ret = retType['fromWireType'](rv);
return ret;
`),$+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),$=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${$}`,[le,$]}function _f(r){for(var a=r.length-2,l=r.length-1;l>=2&&r[l].optional;--l)a--;return a}function Ks(r,a,l,h,p,v){var E=a.length;E<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),z(!v,"Async bindings are only supported with JSPI.");for(var C=a[1]!==null&&l!==null,F=ch(a),$=a[0].name!=="void",ee=E-2,le=_f(a),pe=[r,vt,h,p,hl,a[0],a[1]],ce=0;ce<E-2;++ce)pe.push(a[ce+2]);if(!F)for(var ce=C?1:2;ce<a.length;++ce)a[ce].destructorFunction!==null&&pe.push(a[ce].destructorFunction);pe.push(mf,le,ee);let[ye,Ze]=gf(a,C,$,v);var _t=new Function(...ye,Ze)(...pe);return qs(r,_t)}var Qs=(r,a)=>{for(var l=[],h=0;h<r;h++)l.push(Ue[a+h*4>>2]);return l},ul=r=>{r=r.trim();let a=r.indexOf("(");return a===-1?r:(z(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,a))},vf=(r,a,l,h,p,v,E,C,F)=>{var $=Qs(l,h);a=qt(a),a=ul(a),v=ni(p,v,C),Gn([],[r],ee=>{ee=ee[0];var le=`${ee.name}.${a}`;function pe(){$i(`Cannot call ${le} due to unbound types`,$)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ce=ee.registeredClass.constructor;return ce[a]===void 0?(pe.argCount=l-1,ce[a]=pe):(ll(ce,a,le),ce[a].overloadTable[l-1]=pe),Gn([],$,ye=>{var Ze=[ye[0],null].concat(ye.slice(1)),_t=Ks(le,Ze,null,v,E,C);if(ce[a].overloadTable===void 0?(_t.argCount=l-1,ce[a]=_t):ce[a].overloadTable[l-1]=_t,ee.registeredClass.__derivedClasses)for(let dt of ee.registeredClass.__derivedClasses)dt.constructor.hasOwnProperty(a)||(dt.constructor[a]=_t);return[]}),[]})},yf=(r,a,l,h,p,v)=>{z(a>0);var E=Qs(a,l);p=ni(h,p);var C=[v],F=[];Gn([],[r],$=>{$=$[0];var ee=`constructor ${$.name}`;if($.registeredClass.constructor_body===void 0&&($.registeredClass.constructor_body=[]),$.registeredClass.constructor_body[a-1]!==void 0)throw new jr(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${$.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return $.registeredClass.constructor_body[a-1]=()=>{$i(`Cannot construct ${$.name} due to unbound types`,E)},Gn([],E,le=>(le.splice(1,0,null),$.registeredClass.constructor_body[a-1]=Ks(ee,le,null,p,v),[])),[]})},xf=(r,a,l,h,p,v,E,C,F,$)=>{var ee=Qs(l,h);a=qt(a),a=ul(a),v=ni(p,v,F),Gn([],[r],le=>{le=le[0];var pe=`${le.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),C&&le.registeredClass.pureVirtualFunctions.push(a);function ce(){$i(`Cannot call ${pe} due to unbound types`,ee)}var ye=le.registeredClass.instancePrototype,Ze=ye[a];return Ze===void 0||Ze.overloadTable===void 0&&Ze.className!==le.name&&Ze.argCount===l-2?(ce.argCount=l-2,ce.className=le.name,ye[a]=ce):(ll(ye,a,pe),ye[a].overloadTable[l-2]=ce),Gn([],ee,_t=>{var dt=Ks(pe,_t,le,v,E,F);return ye[a].overloadTable===void 0?(dt.argCount=l-2,ye[a]=dt):ye[a].overloadTable[l-2]=dt,[]}),[]})},hh=(r,a,l)=>(r instanceof Object||vt(`${l} with invalid "this": ${r}`),r instanceof a.registeredClass.constructor||vt(`${l} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||vt(`cannot call emscripten binding method ${l} on deleted object`),Ys(r.$$.ptr,r.$$.ptrType.registeredClass,a.registeredClass)),Sf=(r,a,l,h,p,v,E,C,F,$)=>{a=qt(a),p=ni(h,p),Gn([],[r],ee=>{ee=ee[0];var le=`${ee.name}.${a}`,pe={get(){$i(`Cannot access ${le} due to unbound types`,[l,E])},enumerable:!0,configurable:!0};return F?pe.set=()=>$i(`Cannot access ${le} due to unbound types`,[l,E]):pe.set=ce=>vt(le+" is a read-only property"),Object.defineProperty(ee.registeredClass.instancePrototype,a,pe),Gn([],F?[l,E]:[l],ce=>{var ye=ce[0],Ze={get(){var dt=hh(this,ee,le+" getter");return ye.fromWireType(p(v,dt))},enumerable:!0};if(F){F=ni(C,F);var _t=ce[1];Ze.set=function(dt){var Ot=hh(this,ee,le+" setter"),Tt=[];F($,Ot,_t.toWireType(Tt,dt)),hl(Tt)}}return Object.defineProperty(ee.registeredClass.instancePrototype,a,Ze),[]}),[]})},Mf=(r,a,l)=>{r=qt(r),Gn([],[a],h=>(h=h[0],t[r]=h.fromWireType(l),[]))},uh=[],ii=[0,1,,1,null,1,!0,1,!1,1],dl=r=>{r>9&&--ii[r+1]===0&&(z(ii[r]!==void 0,"Decref for unallocated handle."),ii[r]=void 0,uh.push(r))},Yt={toValue:r=>(r||vt(`Cannot use deleted val. handle = ${r}`),z(r===2||ii[r]!==void 0&&r%2===0,`invalid handle: ${r}`),ii[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let a=uh.pop()||ii.length;return ii[a]=r,ii[a+1]=1,a}}}},dh={name:"emscripten::val",fromWireType:r=>{var a=Yt.toValue(r);return dl(r),a},toWireType:(r,a)=>Yt.toHandle(a),argPackAdvance:ti,readValueFromPointer:js,destructorFunction:null},fh=r=>Nn(r,dh),bf=(r,a,l)=>{switch(a){case 1:return l?function(h){return this.fromWireType(tt[h])}:function(h){return this.fromWireType(Qe[h])};case 2:return l?function(h){return this.fromWireType(xt[h>>1])}:function(h){return this.fromWireType(Ut[h>>1])};case 4:return l?function(h){return this.fromWireType(Ie[h>>2])}:function(h){return this.fromWireType(Ue[h>>2])};default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Ef=(r,a,l,h)=>{a=qt(a);function p(){}p.values={},Nn(r,{name:a,constructor:p,fromWireType:function(v){return this.constructor.values[v]},toWireType:(v,E)=>E.value,argPackAdvance:ti,readValueFromPointer:bf(a,l,h),destructorFunction:null}),cl(a,p)},ea=(r,a)=>{var l=Wi[r];return l===void 0&&vt(`${a} has unknown type ${lh(r)}`),l},wf=(r,a,l)=>{var h=ea(r,"enum");a=qt(a);var p=h.constructor,v=Object.create(h.constructor.prototype,{value:{value:l},constructor:{value:qs(`${h.name}_${a}`,function(){})}});p.values[l]=v,p[a]=v},Tf=(r,a)=>{switch(a){case 4:return function(l){return this.fromWireType(kt[l>>2])};case 8:return function(l){return this.fromWireType(W[l>>3])};default:throw new TypeError(`invalid float width (${a}): ${r}`)}},Af=(r,a,l)=>{a=qt(a),Nn(r,{name:a,fromWireType:h=>h,toWireType:(h,p)=>{if(typeof p!="number"&&typeof p!="boolean")throw new TypeError(`Cannot convert ${Xi(p)} to ${this.name}`);return p},argPackAdvance:ti,readValueFromPointer:Tf(a,l),destructorFunction:null})},Cf=(r,a,l,h,p,v,E,C)=>{var F=Qs(a,l);r=qt(r),r=ul(r),p=ni(h,p,E),cl(r,function(){$i(`Cannot call ${r} due to unbound types`,F)},a-1),Gn([],F,$=>{var ee=[$[0],null].concat($.slice(1));return ah(r,Ks(r,ee,null,p,v,E),a-1),[]})},Rf=(r,a,l,h,p)=>{a=qt(a);let v=h===0,E=F=>F;if(v){var C=32-8*l;E=F=>F<<C>>>C,p=E(p)}Nn(r,{name:a,fromWireType:E,toWireType:(F,$)=>{if(typeof $!="number"&&typeof $!="boolean")throw new TypeError(`Cannot convert "${Xi($)}" to ${a}`);return Qc(a,$,h,p),$},argPackAdvance:ti,readValueFromPointer:Kc(a,l,h!==0),destructorFunction:null})},Pf=(r,a,l)=>{var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],p=h[a];function v(E){var C=Ue[E>>2],F=Ue[E+4>>2];return new p(tt.buffer,F,C)}l=qt(l),Nn(r,{name:l,fromWireType:v,argPackAdvance:ti,readValueFromPointer:v},{ignoreDuplicateRegistrations:!0})},If=Object.assign({optional:!0},dh),Df=(r,a)=>{Nn(r,If)},qi=(r,a,l)=>(z(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Ge(r,Qe,a,l)),Lf=(r,a)=>{a=qt(a);var l=!0;Nn(r,{name:a,fromWireType(h){var p=Ue[h>>2],v=h+4,E;if(l)for(var C=v,F=0;F<=p;++F){var $=v+F;if(F==p||Qe[$]==0){var ee=$-C,le=Tn(C,ee);E===void 0?E=le:(E+="\0",E+=le),C=$+1}}else{for(var pe=new Array(p),F=0;F<p;++F)pe[F]=String.fromCharCode(Qe[v+F]);E=pe.join("")}return Hn(h),E},toWireType(h,p){p instanceof ArrayBuffer&&(p=new Uint8Array(p));var v,E=typeof p=="string";E||ArrayBuffer.isView(p)&&p.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),l&&E?v=lt(p):v=p.length;var C=gl(4+v+1),F=C+4;if(Ue[C>>2]=v,E)if(l)qi(p,F,v+1);else for(var $=0;$<v;++$){var ee=p.charCodeAt($);ee>255&&(Hn(C),vt("String has UTF-16 code units that do not fit in 8 bits")),Qe[F+$]=ee}else Qe.set(p,F);return h!==null&&h.push(Hn,C),C},argPackAdvance:ti,readValueFromPointer:js,destructorFunction(h){Hn(h)}})},ph=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ff=(r,a)=>{z(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=r>>1,h=l+a/2,p=l;!(p>=h)&&Ut[p];)++p;if(p-l>16&&ph)return ph.decode(Ut.subarray(l,p));for(var v="",E=l;!(E>=h);++E){var C=Ut[E];if(C==0)break;v+=String.fromCharCode(C)}return v},Nf=(r,a,l)=>{if(z(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),z(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<2)return 0;l-=2;for(var h=a,p=l<r.length*2?l/2:r.length,v=0;v<p;++v){var E=r.charCodeAt(v);xt[a>>1]=E,a+=2}return xt[a>>1]=0,a-h},Uf=r=>r.length*2,Of=(r,a)=>{z(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",h=0;!(h>=a/4);h++){var p=Ie[r+h*4>>2];if(!p)break;l+=String.fromCodePoint(p)}return l},Bf=(r,a,l)=>{if(z(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),z(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<4)return 0;for(var h=a,p=h+l-4,v=0;v<r.length;++v){var E=r.codePointAt(v);if(E>65535&&v++,Ie[a>>2]=E,a+=4,a+4>p)break}return Ie[a>>2]=0,a-h},kf=r=>{for(var a=0,l=0;l<r.length;++l){var h=r.codePointAt(l);h>65535&&l++,a+=4}return a},zf=(r,a,l)=>{l=qt(l);var h,p,v,E;a===2?(h=Ff,p=Nf,E=Uf,v=C=>Ut[C>>1]):a===4&&(h=Of,p=Bf,E=kf,v=C=>Ue[C>>2]),Nn(r,{name:l,fromWireType:C=>{for(var F=Ue[C>>2],$,ee=C+4,le=0;le<=F;++le){var pe=C+4+le*a;if(le==F||v(pe)==0){var ce=pe-ee,ye=h(ee,ce);$===void 0?$=ye:($+="\0",$+=ye),ee=pe+a}}return Hn(C),$},toWireType:(C,F)=>{typeof F!="string"&&vt(`Cannot pass non-string to C++ string type ${l}`);var $=E(F),ee=gl(4+$+a);return Ue[ee>>2]=$/a,p(F,ee+4,$+a),C!==null&&C.push(Hn,ee),ee},argPackAdvance:ti,readValueFromPointer:js,destructorFunction(C){Hn(C)}})},Vf=(r,a)=>{fh(r)},Gf=(r,a)=>{a=qt(a),Nn(r,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,h)=>{}})},Hf=()=>{throw new ge},mh=(r,a,l)=>{var h=[],p=r.toWireType(h,l);return h.length&&(Ue[a>>2]=Yt.toHandle(h)),p},Wf=(r,a,l)=>(r=Yt.toValue(r),a=ea(a,"emval::as"),mh(a,l,r)),ta=[],Xf=(r,a,l,h)=>(r=ta[r],a=Yt.toValue(a),r(null,a,l,h)),$f={},fl=r=>{var a=$f[r];return a===void 0?qt(r):a},qf=(r,a,l,h,p)=>(r=ta[r],a=Yt.toValue(a),l=fl(l),r(a,a[l],h,p)),gh=()=>globalThis,Yf=r=>r===0?Yt.toHandle(gh()):(r=fl(r),Yt.toHandle(gh()[r])),jf=r=>{var a=ta.length;return ta.push(r),a},Zf=(r,a)=>{for(var l=new Array(r),h=0;h<r;++h)l[h]=ea(Ue[a+h*4>>2],`parameter ${h}`);return l},Jf=(r,a,l)=>{var h=Zf(r,a),p=h.shift();r--;var v=`return function (obj, func, destructorsRef, args) {
`,E=0,C=[];l===0&&C.push("obj");for(var F=["retType"],$=[p],ee=0;ee<r;++ee)C.push(`arg${ee}`),F.push(`argType${ee}`),$.push(h[ee]),v+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${E?"+"+E:""});
`,E+=h[ee].argPackAdvance;var le=l===1?"new func":"func.call";v+=`  var rv = ${le}(${C.join(", ")});
`,p.isVoid||(F.push("emval_returnValue"),$.push(mh),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),v+=`};
`;var pe=new Function(...F,v)(...$),ce=`methodCaller<(${h.map(ye=>ye.name).join(", ")}) => ${p.name}>`;return jf(qs(ce,pe))},Kf=(r,a)=>(r=Yt.toValue(r),a=Yt.toValue(a),Yt.toHandle(r[a])),Qf=r=>{r>9&&(ii[r+1]+=1)},ep=r=>(r=Yt.toValue(r),typeof r=="number"),tp=r=>(r=Yt.toValue(r),typeof r=="string"),np=()=>Yt.toHandle([]),ip=r=>Yt.toHandle(fl(r)),rp=r=>{var a=Yt.toValue(r);hl(a),dl(r)},sp=(r,a)=>{r=ea(r,"_emval_take_value");var l=r.readValueFromPointer(a);return Yt.toHandle(l)},ap=r=>{throw r=Yt.toValue(r),r},op=r=>r%4===0&&(r%100!==0||r%400===0),lp=[0,31,60,91,121,152,182,213,244,274,305,335],cp=[0,31,59,90,120,151,181,212,243,273,304,334],_h=r=>{var a=op(r.getFullYear()),l=a?lp:cp,h=l[r.getMonth()]+r.getDate()-1;return h},hp=9007199254740992,up=-9007199254740992,pl=r=>r<up||r>hp?NaN:Number(r);function dp(r,a){r=pl(r);var l=new Date(r*1e3);Ie[a>>2]=l.getSeconds(),Ie[a+4>>2]=l.getMinutes(),Ie[a+8>>2]=l.getHours(),Ie[a+12>>2]=l.getDate(),Ie[a+16>>2]=l.getMonth(),Ie[a+20>>2]=l.getFullYear()-1900,Ie[a+24>>2]=l.getDay();var h=_h(l)|0;Ie[a+28>>2]=h,Ie[a+36>>2]=-(l.getTimezoneOffset()*60);var p=new Date(l.getFullYear(),0,1),v=new Date(l.getFullYear(),6,1).getTimezoneOffset(),E=p.getTimezoneOffset(),C=(v!=E&&l.getTimezoneOffset()==Math.min(E,v))|0;Ie[a+32>>2]=C}var fp=function(r){var a=(()=>{var l=new Date(Ie[r+20>>2]+1900,Ie[r+16>>2],Ie[r+12>>2],Ie[r+8>>2],Ie[r+4>>2],Ie[r>>2],0),h=Ie[r+32>>2],p=l.getTimezoneOffset(),v=new Date(l.getFullYear(),0,1),E=new Date(l.getFullYear(),6,1).getTimezoneOffset(),C=v.getTimezoneOffset(),F=Math.min(C,E);if(h<0)Ie[r+32>>2]=+(E!=C&&F==p);else if(h>0!=(F==p)){var $=Math.max(C,E),ee=h>0?F:$;l.setTime(l.getTime()+(ee-p)*6e4)}Ie[r+24>>2]=l.getDay();var le=_h(l)|0;Ie[r+28>>2]=le,Ie[r>>2]=l.getSeconds(),Ie[r+4>>2]=l.getMinutes(),Ie[r+8>>2]=l.getHours(),Ie[r+12>>2]=l.getDate(),Ie[r+16>>2]=l.getMonth(),Ie[r+20>>2]=l.getYear();var pe=l.getTime();return isNaN(pe)?-1:pe/1e3})();return BigInt(a)},pp=(r,a,l,h)=>{var p=new Date().getFullYear(),v=new Date(p,0,1),E=new Date(p,6,1),C=v.getTimezoneOffset(),F=E.getTimezoneOffset(),$=Math.max(C,F);Ue[r>>2]=$*60,Ie[a>>2]=+(C!=F);var ee=ce=>{var ye=ce>=0?"-":"+",Ze=Math.abs(ce),_t=String(Math.floor(Ze/60)).padStart(2,"0"),dt=String(Ze%60).padStart(2,"0");return`UTC${ye}${_t}${dt}`},le=ee(C),pe=ee(F);z(le),z(pe),z(lt(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),z(lt(pe)<=16,`timezone name truncated to fit in TZNAME_MAX (${pe})`),F<C?(qi(le,l,17),qi(pe,h,17)):(qi(le,h,17),qi(pe,l,17))},vh=()=>performance.now(),yh=()=>Date.now(),mp=1,gp=r=>r>=0&&r<=3;function _p(r,a,l){if(a=pl(a),!gp(r))return 28;var h;if(r===0)h=yh();else if(mp)h=vh();else return 52;var p=Math.round(h*1e3*1e3);return It[l>>3]=BigInt(p),0}var na=[],vp=(r,a)=>{z(Array.isArray(na)),z(a%16==0),na.length=0;for(var l;l=Qe[r++];){var h=String.fromCharCode(l),p=["d","f","i","p"];p.push("j"),z(p.includes(h),`Invalid character ${l}("${h}") in readEmAsmArgs! Use only [${p}], and do not specify "v" for void return argument.`);var v=l!=105;v&=l!=112,a+=v&&a%8?4:0,na.push(l==112?Ue[a>>2]:l==106?It[a>>3]:l==105?Ie[a>>2]:W[a>>3]),a+=v?8:4}return na},yp=(r,a,l)=>{var h=vp(a,l);return z(wh.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),wh[r](...h)},xp=(r,a,l)=>yp(r,a,l),xh=()=>2147483648,Sp=()=>xh(),Mp=(r,a)=>(z(a,"alignment argument is required"),Math.ceil(r/a)*a),bp=r=>{var a=mt.buffer,l=(r-a.byteLength+65535)/65536|0;try{return mt.grow(l),S(),1}catch(h){R(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${r} bytes, but got error: ${h}`)}},Ep=r=>{var a=Qe.length;r>>>=0,z(r>a);var l=xh();if(r>l)return R(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${l} bytes!`),!1;for(var h=1;h<=4;h*=2){var p=a*(1+.2/h);p=Math.min(p,r+100663296);var v=Math.min(l,Mp(Math.max(r,p),65536)),E=bp(v);if(E)return!0}return R(`Failed to grow the heap from ${a} bytes to ${v} bytes, not enough memory!`),!1},ml={},wp=()=>f||"./this.program",Jr=()=>{if(!Jr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:wp()};for(var l in ml)ml[l]===void 0?delete a[l]:a[l]=ml[l];var h=[];for(var l in a)h.push(`${l}=${a[l]}`);Jr.strings=h}return Jr.strings},Tp=(r,a)=>{var l=0,h=0;for(var p of Jr()){var v=a+l;Ue[r+h>>2]=v,l+=qi(p,v,1/0)+1,h+=4}return 0},Ap=(r,a)=>{var l=Jr();Ue[r>>2]=l.length;var h=0;for(var p of l)h+=lt(p)+1;return Ue[a>>2]=h,0},Sh=0,Mh=()=>Os||Sh>0,Cp=r=>{te=r,Mh()||(t.onExit?.(r),H=!0),g(r,new me(r))},Rp=(r,a)=>{if(te=r,Hg(),Mh()&&!a){var l=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Sh}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;ht?.(l),R(l)}Cp(r)},Pp=Rp;function Ip(r){try{var a=wt.getStreamFromFD(r);return b.close(a),0}catch(l){if(typeof b>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var Dp=(r,a,l,h)=>{for(var p=0,v=0;v<l;v++){var E=Ue[a>>2],C=Ue[a+4>>2];a+=8;var F=b.read(r,tt,E,C,h);if(F<0)return-1;if(p+=F,F<C)break;typeof h<"u"&&(h+=F)}return p};function Lp(r,a,l,h){try{var p=wt.getStreamFromFD(r),v=Dp(p,a,l);return Ue[h>>2]=v,0}catch(E){if(typeof b>"u"||E.name!=="ErrnoError")throw E;return E.errno}}function Fp(r,a,l,h){a=pl(a);try{if(isNaN(a))return 61;var p=wt.getStreamFromFD(r);return b.llseek(p,a,l),It[h>>3]=BigInt(p.position),p.getdents&&a===0&&l===0&&(p.getdents=null),0}catch(v){if(typeof b>"u"||v.name!=="ErrnoError")throw v;return v.errno}}var Np=(r,a,l,h)=>{for(var p=0,v=0;v<l;v++){var E=Ue[a>>2],C=Ue[a+4>>2];a+=8;var F=b.write(r,tt,E,C,h);if(F<0)return-1;if(p+=F,F<C)break;typeof h<"u"&&(h+=F)}return p};function Up(r,a,l,h){try{var p=wt.getStreamFromFD(r),v=Np(p,a,l);return Ue[h>>2]=v,0}catch(E){if(typeof b>"u"||E.name!=="ErrnoError")throw E;return E.errno}}var Op=r=>r,Bp=r=>{var a=t["_"+r];return z(a,"Cannot call unknown function "+r+", make sure it is exported"),a},kp=(r,a)=>{z(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),tt.set(r,a)},ia=r=>Ih(r),zp=r=>{var a=lt(r)+1,l=ia(a);return qi(r,l,a),l},bh=(r,a,l,h,p)=>{var v={string:ye=>{var Ze=0;return ye!=null&&ye!==0&&(Ze=zp(ye)),Ze},array:ye=>{var Ze=ia(ye.length);return kp(ye,Ze),Ze}};function E(ye){return a==="string"?Tn(ye):a==="boolean"?!!ye:ye}var C=Bp(r),F=[],$=0;if(z(a!=="array",'Return type should not be "array".'),h)for(var ee=0;ee<h.length;ee++){var le=v[l[ee]];le?($===0&&($=xe()),F[ee]=le(h[ee])):F[ee]=h[ee]}var pe=C(...F);function ce(ye){return $!==0&&ve($),E(ye)}return pe=ce(pe),pe},Vp=(r,a,l,h)=>(...p)=>bh(r,a,l,p,h),Gp=(...r)=>b.createPath(...r),Hp=(...r)=>b.unlink(...r),Wp=(...r)=>b.createLazyFile(...r),Xp=(...r)=>b.createDevice(...r),$p=r=>ra(r),qp=r=>yl(r),Yp=r=>{var a=xe(),l=ia(4),h=ia(4);Lh(r,l,h);var p=Ue[l>>2],v=Ue[h>>2],E=Tn(p);Hn(p);var C;return v&&(C=Tn(v),Hn(v)),ve(a),[E,C]},Eh=r=>Yp(r);b.createPreloadedFile=zn,b.staticInit(),rf(),df(),z(ii.length===10),t.noExitRuntime&&(Os=t.noExitRuntime),t.preloadPlugins&&(hn=t.preloadPlugins),t.print&&(k=t.print),t.printErr&&(R=t.printErr),t.wasmBinary&&(J=t.wasmBinary),Jp(),t.arguments&&(d=t.arguments),t.thisProgram&&(f=t.thisProgram),z(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),z(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),z(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),z(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),z(typeof t.read>"u","Module.read option was removed"),z(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),z(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),z(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),z(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),z(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),z(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),z(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),z(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=Ce,t.removeRunDependency=Xe,t.ccall=bh,t.cwrap=Vp,t.FS_createPreloadedFile=zn,t.FS_unlink=Hp,t.FS_createPath=Gp,t.FS_createDevice=Xp,t.FS=b,t.FS_createDataFile=Qt,t.FS_createLazyFile=Wp,t.MEMFS=$e;var jp=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];jp.forEach(Be);var Zp=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Zp.forEach(ct),t.incrementExceptionRefcount=$p,t.decrementExceptionRefcount=qp,t.getExceptionMessage=Eh;function Jp(){he("fetchSettings")}var wh={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(a){},enumerable:!0,configurable:!0})})}},Th=Ke("___getTypeName"),gl=Ke("_malloc"),Kp=Ke("___cxa_free_exception"),_l=Ke("_fflush"),Hn=Ke("_free"),vl=Ke("_emscripten_stack_get_end"),Qp=Ke("_emscripten_stack_get_base"),Ah=Ke("_strerror"),Me=Ke("_setThrew"),Ch=Ke("__emscripten_tempret_set"),Rh=Ke("_emscripten_stack_init"),em=Ke("_emscripten_stack_get_free"),Ph=Ke("__emscripten_stack_restore"),Ih=Ke("__emscripten_stack_alloc"),Dh=Ke("_emscripten_stack_get_current"),yl=Ke("___cxa_decrement_exception_refcount"),ra=Ke("___cxa_increment_exception_refcount"),Lh=Ke("___get_exception_message"),Fh=Ke("___cxa_can_catch"),Nh=Ke("___cxa_get_exception_ptr");function tm(r){Th=Te("__getTypeName",1),gl=Te("malloc",1),Kp=Te("__cxa_free_exception",1),_l=Te("fflush",1),Hn=Te("free",1),vl=r.emscripten_stack_get_end,Qp=r.emscripten_stack_get_base,Ah=Te("strerror",1),Me=Te("setThrew",2),Ch=Te("_emscripten_tempret_set",1),Rh=r.emscripten_stack_init,em=r.emscripten_stack_get_free,Ph=r._emscripten_stack_restore,Ih=r._emscripten_stack_alloc,Dh=r.emscripten_stack_get_current,yl=Te("__cxa_decrement_exception_refcount",1),ra=Te("__cxa_increment_exception_refcount",1),Lh=Te("__get_exception_message",3),Fh=Te("__cxa_can_catch",3),Nh=Te("__cxa_get_exception_ptr",1)}var Uh={__assert_fail:Bs,__cxa_begin_catch:ks,__cxa_current_primary_exception:ar,__cxa_end_catch:zs,__cxa_find_matching_catch_2:sl,__cxa_find_matching_catch_3:Vs,__cxa_find_matching_catch_4:A,__cxa_rethrow:G,__cxa_rethrow_primary_exception:ie,__cxa_throw:K,__cxa_uncaught_exceptions:Q,__resumeException:Le,__syscall_dup3:Mi,__syscall_fcntl64:kd,__syscall_fstat64:zd,__syscall_ioctl:Vd,__syscall_lstat64:Gd,__syscall_newfstatat:Hd,__syscall_openat:Wd,__syscall_stat64:Xd,_abort_js:$d,_embind_register_bigint:Yd,_embind_register_bool:jd,_embind_register_class:pf,_embind_register_class_class_function:vf,_embind_register_class_constructor:yf,_embind_register_class_function:xf,_embind_register_class_property:Sf,_embind_register_constant:Mf,_embind_register_emval:fh,_embind_register_enum:Ef,_embind_register_enum_value:wf,_embind_register_float:Af,_embind_register_function:Cf,_embind_register_integer:Rf,_embind_register_memory_view:Pf,_embind_register_optional:Df,_embind_register_std_string:Lf,_embind_register_std_wstring:zf,_embind_register_user_type:Vf,_embind_register_void:Gf,_emscripten_throw_longjmp:Hf,_emval_as:Wf,_emval_call:Xf,_emval_call_method:qf,_emval_decref:dl,_emval_get_global:Yf,_emval_get_method_caller:Jf,_emval_get_property:Kf,_emval_incref:Qf,_emval_is_number:ep,_emval_is_string:tp,_emval_new_array:np,_emval_new_cstring:ip,_emval_run_destructors:rp,_emval_take_value:sp,_emval_throw:ap,_localtime_js:dp,_mktime_js:fp,_tzset_js:pp,clock_time_get:_p,emscripten_asm_const_int:xp,emscripten_date_now:yh,emscripten_get_heap_max:Sp,emscripten_get_now:vh,emscripten_resize_heap:Ep,environ_get:Tp,environ_sizes_get:Ap,exit:Pp,fd_close:Ip,fd_read:Lp,fd_seek:Fp,fd_write:Up,invoke_ddd:Cg,invoke_dddi:Xm,invoke_dddidi:$m,invoke_ddidi:Wm,invoke_di:qm,invoke_dii:Nm,invoke_diii:mm,invoke_diiii:Hm,invoke_diiiidd:Vm,invoke_diiiidi:vm,invoke_diiiii:hm,invoke_diiiiii:Em,invoke_diiiiiii:Ym,invoke_diiiiiiiii:Mm,invoke_diiiiiiiiiiii:bm,invoke_fiii:kg,invoke_i:um,invoke_id:bg,invoke_ii:rm,invoke_iid:rg,invoke_iidddd:Lg,invoke_iidiii:Dm,invoke_iidiiid:Pm,invoke_iidiiiiidi:Lm,invoke_iif:Dg,invoke_iii:nm,invoke_iiid:Fm,invoke_iiididdddddd:Im,invoke_iiidiiiiiiii:Rm,invoke_iiii:om,invoke_iiiidddiiiii:Zm,invoke_iiiii:pm,invoke_iiiiid:pg,invoke_iiiiii:cg,invoke_iiiiiii:ag,invoke_iiiiiiii:ig,invoke_iiiiiiiidd:mg,invoke_iiiiiiiii:zm,invoke_iiiiiiiiii:og,invoke_iiiiiiiiiidddiiiiiiiii:Cm,invoke_iiiiiiiiiii:Bg,invoke_iiiiiiiiiiii:zg,invoke_iiiiiiiiiiiii:Mg,invoke_iiij:lg,invoke_iiji:fg,invoke_j:Ug,invoke_ji:Sg,invoke_jiiii:hg,invoke_jij:xg,invoke_v:am,invoke_vi:sm,invoke_vid:sg,invoke_viddd:ug,invoke_vidddd:dg,invoke_vidi:Gm,invoke_vidiii:Tm,invoke_vii:cm,invoke_viid:Bm,invoke_viiddi:yg,invoke_viiddidi:vg,invoke_viiddii:jm,invoke_viidi:Om,invoke_viidii:_m,invoke_viidiii:tg,invoke_viidiiid:Qm,invoke_viidiiiii:Am,invoke_viidiiiiidi:ng,invoke_viidiiiiiiii:wm,invoke_viii:im,invoke_viiid:xm,invoke_viiidd:_g,invoke_viiidi:Um,invoke_viiididdddddd:eg,invoke_viiidiiiiiiii:Km,invoke_viiii:fm,invoke_viiiiddd:gg,invoke_viiiidi:Rg,invoke_viiiifi:Pg,invoke_viiiii:lm,invoke_viiiiid:ym,invoke_viiiiii:dm,invoke_viiiiiii:gm,invoke_viiiiiiii:km,invoke_viiiiiiiiii:Tg,invoke_viiiiiiiiiidddiiiiiiiii:Jm,invoke_viiiiiiiiiiid:Sm,invoke_viiiiiiiiiiiii:wg,invoke_viiiiiiiiiiiiiii:Vg,invoke_viiiiiiiiiiiiiiiiii:Ag,invoke_viiiij:Fg,invoke_viij:Ng,invoke_viijii:Og,invoke_vij:Ig,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:Eg,llvm_eh_typeid_for:Op},Yi=await Ne();function nm(r,a,l){var h=xe();try{return Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function im(r,a,l,h){var p=xe();try{Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function rm(r,a){var l=xe();try{return Ee(r)(a)}catch(h){if(ve(l),!(h instanceof V))throw h;Me(1,0)}}function sm(r,a){var l=xe();try{Ee(r)(a)}catch(h){if(ve(l),!(h instanceof V))throw h;Me(1,0)}}function am(r){var a=xe();try{Ee(r)()}catch(l){if(ve(a),!(l instanceof V))throw l;Me(1,0)}}function om(r,a,l,h){var p=xe();try{return Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function lm(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function cm(r,a,l){var h=xe();try{Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function hm(r,a,l,h,p,v){var E=xe();try{return Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function um(r){var a=xe();try{return Ee(r)()}catch(l){if(ve(a),!(l instanceof V))throw l;Me(1,0)}}function dm(r,a,l,h,p,v,E){var C=xe();try{Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function fm(r,a,l,h,p){var v=xe();try{Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;Me(1,0)}}function pm(r,a,l,h,p){var v=xe();try{return Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;Me(1,0)}}function mm(r,a,l,h){var p=xe();try{return Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function gm(r,a,l,h,p,v,E,C){var F=xe();try{Ee(r)(a,l,h,p,v,E,C)}catch($){if(ve(F),!($ instanceof V))throw $;Me(1,0)}}function _m(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function vm(r,a,l,h,p,v,E){var C=xe();try{return Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function ym(r,a,l,h,p,v,E){var C=xe();try{Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function xm(r,a,l,h,p){var v=xe();try{Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;Me(1,0)}}function Sm(r,a,l,h,p,v,E,C,F,$,ee,le,pe){var ce=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe)}catch(ye){if(ve(ce),!(ye instanceof V))throw ye;Me(1,0)}}function Mm(r,a,l,h,p,v,E,C,F,$){var ee=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$)}catch(le){if(ve(ee),!(le instanceof V))throw le;Me(1,0)}}function bm(r,a,l,h,p,v,E,C,F,$,ee,le,pe){var ce=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe)}catch(ye){if(ve(ce),!(ye instanceof V))throw ye;Me(1,0)}}function Em(r,a,l,h,p,v,E){var C=xe();try{return Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function wm(r,a,l,h,p,v,E,C,F,$,ee,le){var pe=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le)}catch(ce){if(ve(pe),!(ce instanceof V))throw ce;Me(1,0)}}function Tm(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function Am(r,a,l,h,p,v,E,C,F){var $=xe();try{Ee(r)(a,l,h,p,v,E,C,F)}catch(ee){if(ve($),!(ee instanceof V))throw ee;Me(1,0)}}function Cm(r,a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot,Tt,rn,jt){var un=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot,Tt,rn,jt)}catch(Nt){if(ve(un),!(Nt instanceof V))throw Nt;Me(1,0)}}function Rm(r,a,l,h,p,v,E,C,F,$,ee,le){var pe=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee,le)}catch(ce){if(ve(pe),!(ce instanceof V))throw ce;Me(1,0)}}function Pm(r,a,l,h,p,v,E){var C=xe();try{return Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function Im(r,a,l,h,p,v,E,C,F,$,ee,le){var pe=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee,le)}catch(ce){if(ve(pe),!(ce instanceof V))throw ce;Me(1,0)}}function Dm(r,a,l,h,p,v){var E=xe();try{return Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function Lm(r,a,l,h,p,v,E,C,F,$){var ee=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$)}catch(le){if(ve(ee),!(le instanceof V))throw le;Me(1,0)}}function Fm(r,a,l,h){var p=xe();try{return Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function Nm(r,a,l){var h=xe();try{return Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function Um(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function Om(r,a,l,h,p){var v=xe();try{Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;Me(1,0)}}function Bm(r,a,l,h){var p=xe();try{Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function km(r,a,l,h,p,v,E,C,F){var $=xe();try{Ee(r)(a,l,h,p,v,E,C,F)}catch(ee){if(ve($),!(ee instanceof V))throw ee;Me(1,0)}}function zm(r,a,l,h,p,v,E,C,F){var $=xe();try{return Ee(r)(a,l,h,p,v,E,C,F)}catch(ee){if(ve($),!(ee instanceof V))throw ee;Me(1,0)}}function Vm(r,a,l,h,p,v,E){var C=xe();try{return Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function Gm(r,a,l,h){var p=xe();try{Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function Hm(r,a,l,h,p){var v=xe();try{return Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;Me(1,0)}}function Wm(r,a,l,h,p){var v=xe();try{return Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;Me(1,0)}}function Xm(r,a,l,h){var p=xe();try{return Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function $m(r,a,l,h,p,v){var E=xe();try{return Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function qm(r,a){var l=xe();try{return Ee(r)(a)}catch(h){if(ve(l),!(h instanceof V))throw h;Me(1,0)}}function Ym(r,a,l,h,p,v,E,C){var F=xe();try{return Ee(r)(a,l,h,p,v,E,C)}catch($){if(ve(F),!($ instanceof V))throw $;Me(1,0)}}function jm(r,a,l,h,p,v,E){var C=xe();try{Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function Zm(r,a,l,h,p,v,E,C,F,$,ee,le){var pe=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee,le)}catch(ce){if(ve(pe),!(ce instanceof V))throw ce;Me(1,0)}}function Jm(r,a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot,Tt,rn,jt,un){var Nt=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot,Tt,rn,jt,un)}catch(bi){if(ve(Nt),!(bi instanceof V))throw bi;Me(1,0)}}function Km(r,a,l,h,p,v,E,C,F,$,ee,le,pe){var ce=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe)}catch(ye){if(ve(ce),!(ye instanceof V))throw ye;Me(1,0)}}function Qm(r,a,l,h,p,v,E,C){var F=xe();try{Ee(r)(a,l,h,p,v,E,C)}catch($){if(ve(F),!($ instanceof V))throw $;Me(1,0)}}function eg(r,a,l,h,p,v,E,C,F,$,ee,le,pe){var ce=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe)}catch(ye){if(ve(ce),!(ye instanceof V))throw ye;Me(1,0)}}function tg(r,a,l,h,p,v,E){var C=xe();try{Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function ng(r,a,l,h,p,v,E,C,F,$,ee){var le=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee)}catch(pe){if(ve(le),!(pe instanceof V))throw pe;Me(1,0)}}function ig(r,a,l,h,p,v,E,C){var F=xe();try{return Ee(r)(a,l,h,p,v,E,C)}catch($){if(ve(F),!($ instanceof V))throw $;Me(1,0)}}function rg(r,a,l){var h=xe();try{return Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function sg(r,a,l){var h=xe();try{Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function ag(r,a,l,h,p,v,E){var C=xe();try{return Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function og(r,a,l,h,p,v,E,C,F,$){var ee=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$)}catch(le){if(ve(ee),!(le instanceof V))throw le;Me(1,0)}}function lg(r,a,l,h){var p=xe();try{return Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function cg(r,a,l,h,p,v){var E=xe();try{return Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function hg(r,a,l,h,p){var v=xe();try{return Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;return Me(1,0),0n}}function ug(r,a,l,h,p){var v=xe();try{Ee(r)(a,l,h,p)}catch(E){if(ve(v),!(E instanceof V))throw E;Me(1,0)}}function dg(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function fg(r,a,l,h){var p=xe();try{return Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function pg(r,a,l,h,p,v){var E=xe();try{return Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function mg(r,a,l,h,p,v,E,C,F,$){var ee=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$)}catch(le){if(ve(ee),!(le instanceof V))throw le;Me(1,0)}}function gg(r,a,l,h,p,v,E,C){var F=xe();try{Ee(r)(a,l,h,p,v,E,C)}catch($){if(ve(F),!($ instanceof V))throw $;Me(1,0)}}function _g(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function vg(r,a,l,h,p,v,E,C){var F=xe();try{Ee(r)(a,l,h,p,v,E,C)}catch($){if(ve(F),!($ instanceof V))throw $;Me(1,0)}}function yg(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function xg(r,a,l){var h=xe();try{return Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;return Me(1,0),0n}}function Sg(r,a){var l=xe();try{return Ee(r)(a)}catch(h){if(ve(l),!(h instanceof V))throw h;return Me(1,0),0n}}function Mg(r,a,l,h,p,v,E,C,F,$,ee,le,pe){var ce=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe)}catch(ye){if(ve(ce),!(ye instanceof V))throw ye;Me(1,0)}}function bg(r,a){var l=xe();try{return Ee(r)(a)}catch(h){if(ve(l),!(h instanceof V))throw h;Me(1,0)}}function Eg(r,a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot,Tt,rn,jt,un,Nt,bi,sa,Xg,$g,qg,Yg,jg,Zg,Jg,Kg,Qg,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,v_,y_,x_,S_,M_,b_,E_,w_,T_,A_,C_,R_,P_,I_,D_,L_,F_,N_,U_,O_,B_,k_,z_,V_,G_,H_,W_,X_,$_,q_,Y_,j_,Z_){var J_=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot,Tt,rn,jt,un,Nt,bi,sa,Xg,$g,qg,Yg,jg,Zg,Jg,Kg,Qg,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,v_,y_,x_,S_,M_,b_,E_,w_,T_,A_,C_,R_,P_,I_,D_,L_,F_,N_,U_,O_,B_,k_,z_,V_,G_,H_,W_,X_,$_,q_,Y_,j_,Z_)}catch(Bh){if(ve(J_),!(Bh instanceof V))throw Bh;Me(1,0)}}function wg(r,a,l,h,p,v,E,C,F,$,ee,le,pe,ce){var ye=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe,ce)}catch(Ze){if(ve(ye),!(Ze instanceof V))throw Ze;Me(1,0)}}function Tg(r,a,l,h,p,v,E,C,F,$,ee){var le=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee)}catch(pe){if(ve(le),!(pe instanceof V))throw pe;Me(1,0)}}function Ag(r,a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot){var Tt=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze,_t,dt,Ot)}catch(rn){if(ve(Tt),!(rn instanceof V))throw rn;Me(1,0)}}function Cg(r,a,l){var h=xe();try{return Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function Rg(r,a,l,h,p,v,E){var C=xe();try{Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function Pg(r,a,l,h,p,v,E){var C=xe();try{Ee(r)(a,l,h,p,v,E)}catch(F){if(ve(C),!(F instanceof V))throw F;Me(1,0)}}function Ig(r,a,l){var h=xe();try{Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function Dg(r,a,l){var h=xe();try{return Ee(r)(a,l)}catch(p){if(ve(h),!(p instanceof V))throw p;Me(1,0)}}function Lg(r,a,l,h,p,v){var E=xe();try{return Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function Fg(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function Ng(r,a,l,h){var p=xe();try{Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function Ug(r){var a=xe();try{return Ee(r)()}catch(l){if(ve(a),!(l instanceof V))throw l;return Me(1,0),0n}}function Og(r,a,l,h,p,v){var E=xe();try{Ee(r)(a,l,h,p,v)}catch(C){if(ve(E),!(C instanceof V))throw C;Me(1,0)}}function Bg(r,a,l,h,p,v,E,C,F,$,ee){var le=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee)}catch(pe){if(ve(le),!(pe instanceof V))throw pe;Me(1,0)}}function kg(r,a,l,h){var p=xe();try{return Ee(r)(a,l,h)}catch(v){if(ve(p),!(v instanceof V))throw v;Me(1,0)}}function zg(r,a,l,h,p,v,E,C,F,$,ee,le){var pe=xe();try{return Ee(r)(a,l,h,p,v,E,C,F,$,ee,le)}catch(ce){if(ve(pe),!(ce instanceof V))throw ce;Me(1,0)}}function Vg(r,a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze){var _t=xe();try{Ee(r)(a,l,h,p,v,E,C,F,$,ee,le,pe,ce,ye,Ze)}catch(dt){if(ve(_t),!(dt instanceof V))throw dt;Me(1,0)}}var Oh;function Gg(){Rh(),_e()}function xl(){if(we>0){Ae=xl;return}if(Gg(),j(),we>0){Ae=xl;return}function r(){z(!Oh),Oh=!0,t.calledRun=!0,!H&&(ne(),Ht?.(t),t.onRuntimeInitialized?.(),pt("onRuntimeInitialized"),z(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),oe())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),ae()}function Hg(){var r=k,a=R,l=!1;k=R=h=>{l=!0};try{_l(0),["stdout","stderr"].forEach(h=>{var p=b.analyzePath("/dev/"+h);if(p){var v=p.object,E=v.rdev,C=St.ttys[E];C?.output?.length&&(l=!0)}})}catch{}k=r,R=a,l&&wn("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Wg(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();pt("preInit")}Wg(),xl(),U?e=t:e=new Promise((r,a)=>{Ht=r,ht=a});for(let r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){Se(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e}),Ad=QM;function eb(i,e){let t=i.mesh_vertadr[e],n=i.mesh_vertnum[e],s=i.mesh_faceadr[e],o=i.mesh_facenum[e],c=i.mesh_vert.slice(t*3,(t+n)*3),u=i.mesh_face.slice(s*3,(s+o)*3),d=new gn;return d.setAttribute("position",new pn(new Float32Array(c),3)),d.setIndex(new pn(new Uint32Array(u),1)),d.computeVertexNormals(),d}var Cd=new Bt().makeRotationX(Math.PI/2);function tb(i,e,t){switch(i){case t.PLANE:{let n=e[0]>0?e[0]*2:40,s=e[1]>0?e[1]*2:40;return new er(n,s)}case t.SPHERE:return new Nr(e[0],24,16);case t.CAPSULE:{let n=new gs(e[0],e[1]*2,8,16);return n.applyMatrix4(Cd),n}case t.CYLINDER:{let n=new _s(e[0],e[0],e[1]*2,32);return n.applyMatrix4(Cd),n}case t.BOX:return new Li(e[0]*2,e[1]*2,e[2]*2);case t.ELLIPSOID:{let n=new Nr(1,32,24);return n.scale(e[0],e[1],e[2]),n}default:return null}}function Dd(i,e){let t={PLANE:i.mjtGeom.mjGEOM_PLANE.value,SPHERE:i.mjtGeom.mjGEOM_SPHERE.value,CAPSULE:i.mjtGeom.mjGEOM_CAPSULE.value,ELLIPSOID:i.mjtGeom.mjGEOM_ELLIPSOID.value,CYLINDER:i.mjtGeom.mjGEOM_CYLINDER.value,BOX:i.mjtGeom.mjGEOM_BOX.value,MESH:i.mjtGeom.mjGEOM_MESH.value},n=3,s=new jn,o=new Array(e.ngeom).fill(null);for(let c=0;c<e.ngeom;c++){if(e.geom_group[c]===n)continue;let u=e.geom_type[c],d=e.geom_size.slice(c*3,c*3+3),f=e.geom_matid[c],g=f>=0?e.mat_rgba.slice(f*4,f*4+4):e.geom_rgba.slice(c*4,c*4+4),y;if(u===t.MESH){let T=e.geom_dataid[c];y=eb(e,T)}else y=tb(u,d,t);if(!y)continue;let m=new vs({color:new ut(g[0],g[1],g[2]),roughness:.7,metalness:.1,transparent:g[3]<1,opacity:g[3],side:u===t.PLANE?On:oi}),x=new Sn(y,m);x.matrixAutoUpdate=!0,s.add(x),o[c]=x}return{root:s,geomMeshes:o}}var Rd=new Bt,Pd=new Z,Id=new mn,nb=new Z;function Ld(i,e){for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let s=t*3,o=t*9,c=i.geom_xmat,u=i.geom_xpos;Rd.set(c[o+0],c[o+1],c[o+2],u[s+0],c[o+3],c[o+4],c[o+5],u[s+1],c[o+6],c[o+7],c[o+8],u[s+2],0,0,0,1),Rd.decompose(Pd,Id,nb),n.position.copy(Pd),n.quaternion.copy(Id)}}function ib(i,e,t){let n=i.mjtObj.mjOBJ_ACTUATOR.value,s=i.mj_id2name(e,n,t);return s&&s.length>0?s:`actuator_${t}`}function rb(i,e){let t=i.actuator_ctrlrange[e*2],n=i.actuator_ctrlrange[e*2+1];return Number.isFinite(t)&&Number.isFinite(n)&&n>t?[t,n]:[-3.14159,3.14159]}function Fd({mujoco:i,model:e,data:t,jointListEl:n,pauseBtn:s,resetBtn:o,statusLineEl:c,onReset:u,onTogglePause:d}){let f=[];for(let x=0;x<e.nu;x++){let T=ib(i,e,x),[I,M]=rb(e,x),_=document.createElement("div");_.className="joint-row";let N=document.createElement("label"),k=document.createElement("span");k.textContent=T;let R=document.createElement("span");R.className="joint-value",N.append(k,R);let P=document.createElement("input");P.type="range",P.min=String(I),P.max=String(M),P.step=String((M-I)/1e3),P.value=String(t.ctrl[x]||0);let D=O=>Number(O).toFixed(2);R.textContent=D(P.value),P.addEventListener("input",()=>{let O=parseFloat(P.value);t.ctrl[x]=O,R.textContent=D(O)}),_.append(N,P),n.appendChild(_),f.push({input:P,valueSpan:R,format:D})}function g(){for(let x=0;x<f.length;x++){let T=t.ctrl[x]||0;f[x].input.value=String(T),f[x].valueSpan.textContent=f[x].format(T)}}let y=!1;s.addEventListener("click",()=>{y=!y,s.textContent=y?"Resume":"Pause",d(y)}),o.addEventListener("click",()=>{for(let x=0;x<e.nu;x++)t.ctrl[x]=0;u(),g()});function m(x){c.textContent=x}return{syncSlidersFromCtrl:g,setStatus:m}}var qc="./model",Jc="pick_scene.xml",Nd="so101_new_calib.xml",Yc=["base_motor_holder_so101_v1.stl","base_so101_v2.stl","motor_holder_so101_base_v1.stl","motor_holder_so101_wrist_v1.stl","moving_jaw_so101_v1.stl","rotation_pitch_so101_v1.stl","sts3215_03a_no_horn_v1.stl","sts3215_03a_v1.stl","under_arm_so101_v1.stl","upper_arm_so101_v1.stl","waveshare_mounting_plate_so101_v2.stl","wrist_roll_follower_so101_v1.stl","wrist_roll_pitch_so101_v2.stl"],jc=.002,Ud=25,sb=document.getElementById("loading-overlay"),ab=document.getElementById("loading-text"),Od=document.getElementById("error-banner"),sr=document.getElementById("viewport");function il(i){ab.textContent=i}function Zc(i,e){console.error(i,e),Od.textContent=`${i}${e?`: ${e.message||e}`:""}`,Od.style.display="block"}async function Bd(i){let e=await fetch(i);if(!e.ok)throw new Error(`Failed to fetch ${i}: ${e.status}`);return e.text()}async function ob(i){let e=await fetch(i);if(!e.ok)throw new Error(`Failed to fetch ${i}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}async function lb(i){i.FS.mkdirTree("/model/assets");let[e,t]=await Promise.all([Bd(`${qc}/${Jc}`),Bd(`${qc}/${Nd}`)]);i.FS.writeFile(`/model/${Jc}`,e),i.FS.writeFile(`/model/${Nd}`,t),il(`Loading meshes (0/${Yc.length})\u2026`);let n=0;await Promise.all(Yc.map(async s=>{let o=await ob(`${qc}/assets/${s}`);i.FS.writeFile(`/model/assets/${s}`,o),n+=1,il(`Loading meshes (${n}/${Yc.length})\u2026`)}))}function cb(){let i=new Ko({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(sr.clientWidth,sr.clientHeight),i.outputColorSpace=fn,sr.appendChild(i.domElement);let e=new hs;e.background=new ut(1119514);let t=new on(45,sr.clientWidth/sr.clientHeight,.01,50);t.position.set(.9,.7,.9);let n=new jn;n.rotation.x=-Math.PI/2,e.add(n);let s=new Ss(16777215,2236962,1);e.add(s);let o=new bs(16777215,2);o.position.set(2,4,3),e.add(o);let c=new nl(t,i.domElement);c.target.set(.15,.15,0),c.enableDamping=!0,c.dampingFactor=.08,c.update();function u(){let d=sr.clientWidth,f=sr.clientHeight;t.aspect=d/f,t.updateProjectionMatrix(),i.setSize(d,f)}return window.addEventListener("resize",u),{renderer:i,scene:e,camera:t,world:n,controls:c}}async function hb(){let i;try{il("Loading MuJoCo (~10MB WebAssembly)\u2026"),i=await Ad()}catch(N){Zc("Failed to load MuJoCo WASM module",N);return}try{await lb(i)}catch(N){Zc("Failed to fetch model assets",N);return}il("Compiling model\u2026");let e,t;try{e=i.MjModel.from_xml_path(`/model/${Jc}`),t=new i.MjData(e)}catch(N){Zc("Failed to load MJCF model",N);return}let{renderer:n,scene:s,camera:o,world:c,controls:u}=cb(),{root:d,geomMeshes:f}=Dd(i,e);c.add(d);let g=document.getElementById("joint-list"),y=document.getElementById("btn-pause"),m=document.getElementById("btn-reset"),x=document.getElementById("status-line"),T=!1;Fd({mujoco:i,model:e,data:t,jointListEl:g,pauseBtn:y,resetBtn:m,statusLineEl:x,onReset:()=>i.mj_resetData(e,t),onTogglePause:N=>{T=N}}).setStatus(`${e.ngeom} geoms \xB7 ${e.nu} actuators \xB7 timestep ${jc}s`),sb.classList.add("hidden");let M=performance.now();function _(){requestAnimationFrame(_);let N=performance.now(),k=(N-M)/1e3;if(M=N,!T){k=Math.min(k,Ud*jc);let R=Math.round(k/jc);R=Math.min(R,Ud);for(let P=0;P<R;P++)i.mj_step(e,t)}Ld(t,f),u.update(),n.render(s,o)}requestAnimationFrame(_),window.addEventListener("beforeunload",()=>{t.delete(),e.delete()})}hb();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
