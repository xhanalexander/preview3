var we=Object.defineProperty;var ge=(l,e,t)=>e in l?we(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var s=(l,e,t)=>(ge(l,typeof e!="symbol"?e+"":e,t),t);import{d as I,W as xe,S as ye,P as be,O as ce,a as Se,G as Ce,V as L,b as Me,R as Pe,D as ze,C as k,c as Y,B as Le,e as O}from"./vendor.12f422d4.js";const Oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};Oe();class A{constructor(){}}s(A,"LG",0),s(A,"XS",1);const J=class{constructor(){}static get instance(){return this._instance||(this._instance=new J),this._instance}random(e,t){return Math.random()*(t-e)+e}random2(e,t){let n=Math.random()*(t-e)+e;return this.hit(2)&&(n*=-1),n}randomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}hit(e=0){return e<2&&(e=2),this.randomInt(0,e-1)==0}randomArr(e){return e[this.randomInt(0,e.length-1)]}range(e){return this.random(-e,e)}clamp(e,t,n){return Math.min(n,Math.max(e,t))}map(e,t,n,i,r){if(e<=i)return t;if(e>=r)return n;const c=(n-t)/(r-i);return(e-i)*c+t}mix(e,t,n){return e*(1-n)+t*n}radian(e){return e*Math.PI/180}degree(e){return e*180/Math.PI}shuffle(e){let t=e.length;for(;--t;){let n=Math.floor(Math.random()*(t+1));if(t==n)continue;let i=e[t];e[t]=e[n],e[n]=i}}replaceAll(e,t,n){return e.split(t).join(n)}sort(e,t,n=!0){n?e.sort((i,r)=>r[t]-i[t]):e.sort((i,r)=>i[t]-r[t])}distance(e,t,n,i){const r=e-n,c=t-i;return Math.sqrt(r*r+c*c)}numStr(e,t){let n=String(e);if(n.length>=t)return n;const i=t-n.length;let r=0;for(;r<i;)n="0"+n,r++;return n}isIE(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1||e.indexOf("edge")!=-1}isIE2(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1}isWin(){return window.navigator.platform.indexOf("Win")!=-1}isChrome(){return window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1}isFF(){return window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1}isSafari(){return window.navigator.userAgent.toLowerCase().indexOf("safari")!=-1&&!this.isChrome()}useWebGL(){try{const e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(window.WebGLRenderingContext&&t&&t.getShaderPrecisionFormat)}catch{return!1}}getQuery(e){e=e.replace(/[€[]/,"\u20AC\u20AC\u20AC[").replace(/[€]]/,"\u20AC\u20AC\u20AC]");const n=new RegExp("[\u20AC\u20AC?&]"+e+"=([^&//]*)").exec(window.location.href);return n==null?"":n[1]}isTouchDevice(){return"ontouchstart"in window||navigator!=null&&navigator.maxTouchPoints>0}isPc(){return I.mobile()==!1}isSp(){return I.mobile()}isAod(){return I.android()}isIPhone(){return I.iphone()}isIPad(){return I.tablet()}};let a=J;s(a,"_instance");const Z=class{constructor(){s(this,"FLG_PARAM",!1);s(this,"FLG_STATS",this.FLG_PARAM);s(this,"FLG_TEST",this.FLG_PARAM);s(this,"PATH_IMG","./assets/img/");s(this,"USE_TOUCH",a.instance.isTouchDevice());s(this,"BREAKPOINT",768);s(this,"LG_PSD_WIDTH",1600);s(this,"XS_PSD_WIDTH",750);s(this,"IS_SIMPLE",a.instance.isPc()&&a.instance.isSafari());s(this,"IS_PC",a.instance.isPc());s(this,"IS_SP",a.instance.isSp());s(this,"IS_AND",a.instance.isAod());s(this,"IS_TAB",a.instance.isIPad());s(this,"USE_ROLLOVER",a.instance.isPc()&&!a.instance.isIPad());s(this,"OUTLINE_WIDTH",.5);s(this,"OUTLINE_OFFSET",.045)}static get instance(){return this._instance||(this._instance=new Z),this._instance}};let h=Z;s(h,"_instance");const $=class{constructor(){s(this,"_useFullScreen",!1)}static get instance(){return this._instance||(this._instance=new $),this._instance}ratio(){return window.devicePixelRatio||1}px(e){return e+"px"}useScreen(){return screen!=null}sw(){return window.innerWidth}sh(){return this._useFullScreen?screen.height:window.innerHeight}screenOffsetY(){return(window.innerHeight-this.sh())*.5}screen(){return window.innerWidth<=h.instance.BREAKPOINT?A.XS:A.LG}isXS(){return this.screen()==A.XS}isLG(){return this.screen()==A.LG}val(e,t){return this.isXS()?e:t}r(e){const t=this.val(h.instance.XS_PSD_WIDTH,h.instance.LG_PSD_WIDTH);return e/t*this.sw()}sin1(e){return Math.sin(e)+Math.sin(2*e)}sin2(e){return(Math.sin(e)+Math.sin(2.2*e+5.52)+Math.sin(2.9*e+.93)+Math.sin(4.6*e+8.94))/4}};let b=$;s(b,"_instance");class Ae{constructor(e={}){s(this,"opt");s(this,"el");this.opt=e,this.el=this.opt.el}init(){}dispose(){this.opt=null,this.el=null}getEl(){return this.el}hasData(e){return this.getEl().getAttribute(e)!=null}getData(e,t){const n=this.getEl().getAttribute(e);return n==null?t:n}qs(e){return this.el.querySelector(e)}qsAll(e){return this.el.querySelectorAll(e)}hasClass(e){return this.el.classList.contains(e)}addClass(e){this.el.classList.add(e)}attachClass(e,t){e!=null&&e.classList.add(t)}detachClass(e,t){e!=null&&e.classList.remove(t)}removeClass(e){this.el.classList.remove(e)}getWidth(e){var n;let t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null).width;return Number(t==null?void 0:t.replace("px",""))}getHeight(e){var t;if(e==null)return 0;{let n=(t=document.defaultView)==null?void 0:t.getComputedStyle(e,null).height;return Number(n==null?void 0:n.replace("px",""))}}getRect(e){var n;const t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null);return t!=null?{width:Number(t.width.replace("px","")),height:Number(t.height.replace("px",""))}:{}}getDataNumber(e){const t=this.getEl().getAttribute(e);return t==null?0:Number(t)}getOffsetTop(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n}getOffset(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return{y:t.top+n,x:t.left}}_call(e,t=null){e!=null&&(t!=null?e(t):e())}}const ee=class{constructor(){s(this,"cnt",0);s(this,"_updateList",[]);s(this,"play",!0);s(this,"_update",()=>{if(this.play){this.cnt++;for(var e of this._updateList)e!=null&&e();window.requestAnimationFrame(this._update)}});window.requestAnimationFrame(this._update)}static get instance(){return this._instance||(this._instance=new ee),this._instance}add(e){this._updateList.push(e)}remove(e){const t=[];this._updateList.forEach(n=>{n!=e&&t.push(n)}),this._updateList=t}};let S=ee;s(S,"_instance");class Q{constructor(e=0,t=0,n=0,i=0){s(this,"x",0);s(this,"y",0);s(this,"width",0);s(this,"height",0);this.x=e,this.y=t,this.width=n,this.height=i}}const te=class{constructor(){s(this,"_list",[]);s(this,"_timer",null);s(this,"_isReadyCall",!1);s(this,"size",new Q);s(this,"oldSize",new Q);s(this,"_call",()=>{for(var e of this._list)e!=null&&e()});window.addEventListener("resize",()=>{this._eResize()},!1)}static get instance(){return this._instance||(this._instance=new te),this._instance}_eResize(){this._isReadyCall||(this._setStageSize(),this._timer!=null&&(clearInterval(this._timer),this._timer=null),this._timer=setTimeout(()=>{this._call(),this.oldSize.width=this.size.width,this.oldSize.height=this.size.height,this._isReadyCall=!1},1500),this._isReadyCall=!0)}_setStageSize(){this.size.width=window.innerWidth,this.size.height=window.innerHeight}add(e){this._list.push(e)}remove(e){const t=[];this._list.forEach(n=>{n!=e&&t.push(n)}),this._list=t}};let E=te;s(E,"_instance");class P{constructor(e=0,t=0){s(this,"x",0);s(this,"y",0);this.x=e,this.y=t}set(e=0,t=0){this.x=e,this.y=t}copy(e){this.x=e.x,this.y=e.y}}class Ee extends Ae{constructor(e={}){super(e);s(this,"_updateHandler");s(this,"_resizeHandler");s(this,"_c",0);s(this,"_isEnter",!1);s(this,"_isOneEnter",!1);s(this,"_observer");s(this,"_elPos",new P(0,9999));s(this,"_eRollOverHandler");s(this,"_eRollOutHandler");(e.isDefEvent==null||e.isDefEvent)&&(this._updateHandler=this._update.bind(this),S.instance.add(this._updateHandler),this._resizeHandler=this._resize.bind(this),E.instance.add(this._resizeHandler))}init(){super.init()}_setHover(){this._eRollOverHandler=this._eRollOver.bind(this),this._eRollOutHandler=this._eRollOut.bind(this),this.getEl().addEventListener("mouseenter",this._eRollOverHandler),this.getEl().addEventListener("mouseleave",this._eRollOutHandler)}_disposeHover(){this._eRollOverHandler!=null&&(this.getEl().removeEventListener("mouseenter",this._eRollOverHandler),this.getEl().removeEventListener("mouseleave",this._eRollOutHandler),this._eRollOverHandler=null,this._eRollOutHandler=null)}_eRollOver(){}_eRollOut(){}_setObserver(){this._observer=new IntersectionObserver(e=>{e!=null&&e.forEach(t=>{t!=null&&t.intersectionRatio>0?this._eEnter():this._eLeave()})},{root:null}),setTimeout(()=>{if(this._observer!=null&&this._observer!=null){const e=this.getEl();e!=null&&this._observer.observe(e)}},100)}_eEnter(){this._isEnter=!0}_eLeave(){this._isEnter=!1}_disposeObserver(){(this._observer!=null||this._observer!=null)&&(this._observer.unobserve(this.getEl()),this._observer=null)}dispose(){this._updateHandler!=null&&(S.instance.remove(this._updateHandler),this._updateHandler=null),this._resizeHandler!=null&&(E.instance.remove(this._resizeHandler),this._resizeHandler=null),this._disposeHover(),this._disposeObserver(),super.dispose()}css(e,t){const n=e.style;for(var i in t)n[i]=t[i]}_update(){this._c++}_resize(){}}class De extends Ee{constructor(e={}){super(e);s(this,"camera");s(this,"renderer");s(this,"mainScene");s(this,"isRender",!0);s(this,"renderSize",new Q);let t={canvas:this.el,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"};this.renderer=new xe(t),this.renderer.autoClear=!0,this.renderer.setClearColor(16777215,1),this.mainScene=new ye,this.camera=this._makeCamera(),this.updateCamera(this.camera,10,10)}init(){super.init()}_makeCamera(){return new be(80,1,1e-7,5e4)}updateCamera(e,t=10,n=10){this._updateOrthCamera(e,t,n)}_updateOrthCamera(e,t=10,n=10){e.aspect=t/n,e.updateProjectionMatrix(),e.position.z=n/Math.tan(e.fov*Math.PI/360)/2}_update(){super._update()}_setUni(e,t,n){const i=this._getUni(e);i[t].value=n}_getUni(e){return e.material.uniforms}}var He=`precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

uniform float size;
uniform float time;
uniform float trail;
uniform float useMouse;
uniform vec3 dist;
uniform vec3 mouse;

attribute vec3 position;
attribute vec3 centerPos;
attribute vec3 info;
attribute vec3 distPos;
attribute vec3 lineColor;
attribute vec3 lineColor2;

varying float vDist;
varying float vMouse;
varying vec3 vColor;
varying vec3 vColor2;
varying vec3 vInfo;

float map(float value, float beforeMin, float beforeMax, float afterMin, float afterMax) {
  return afterMin + (afterMax - afterMin) * ((value - beforeMin) / (beforeMax - beforeMin));
}

vec3 rotate(vec3 p, float angle, vec3 axis){
    vec3 a = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float r = 1.0 - c;
    mat3 m = mat3(
        a.x * a.x * r + c,
        a.y * a.x * r + a.z * s,
        a.z * a.x * r - a.y * s,
        a.x * a.y * r - a.z * s,
        a.y * a.y * r + c,
        a.z * a.y * r + a.x * s,
        a.x * a.z * r + a.y * s,
        a.y * a.z * r - a.x * s,
        a.z * a.z * r + c
    );
    return m * p;
}

vec3 rgb2hsb(vec3 c){
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz),vec4(c.gb, K.xy),step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r),vec4(c.r, p.yzx),step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),d / (q.x + e),q.x);
}

vec3 hsb2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

float ease(float t) {
  t *= 2.0;
  if (t < 1.0) {
    return -0.5 * (sqrt(1.0 - t * t) - 1.0);
  }
  t -= 2.0;
  return 0.5 * (sqrt(1.0 - t * t) + 1.0);
}

void main(){
  vec3 p = vec3(0.0);

  p.x = position.x;
  p.y = position.y;

  vec3 centerPos2 = centerPos;
  
  
  

  float mdx = mouse.x - centerPos2.x;
  float mdy = mouse.y - centerPos2.y;
  float mdist = sqrt(mdx * mdx + mdy * mdy);
  float power = map(mdist, 1.0, 0.0, 0.0, 1.0);
  power = pow(power, 10.0);
  power = clamp(power, 0.0, 1.0);
  power *= useMouse;
  vMouse = power;

  float tapRadius = 0.5;
  centerPos2.x += power * 1.5 * mdx * -1.0 * tapRadius;
  centerPos2.y += power * 5.5 * mdy * -1.0 * tapRadius;

  
  float time2 = time * info.z * 1.1;

  float rad = info.x + time2 * 0.05;
  float trailDist = ease(map(sin(rad), -1.0, 1.0, 0.0, 1.0));
  vDist = trailDist;

  p.x = mix(p.x, p.x + distPos.x * trailDist, info.y);
  p.y = mix(p.y, p.y + distPos.y * trailDist, info.y);

  p = rotate(p, radians(info.z + time2 * 1.0), vec3(0.0, 0.0, 1.0));

  
  
  float radiusPower = mix(1.0, ease(map(sin(rad * -0.25), -1.0, 1.0, 0.0, 1.0)), distPos.z);
  
  p.x *= radiusPower;
  p.y *= radiusPower;

  p.x += centerPos2.x;
  p.y += centerPos2.y;

  p.x -= step(info.x, 0.0) * 9999.0;

  vInfo = info;

  
  

  vColor = lineColor;
  vColor2 = lineColor2;

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  float s = size * (0.0 + pow((power * 10.0), 1.0));
  
  gl_PointSize = s;
  
  
}`,Re=`precision highp float;

uniform vec3 color;
uniform vec3 dist;
uniform float size;
uniform float time;

varying float vDist;
varying float vMouse;
varying vec3 vColor;
varying vec3 vColor2;
varying vec3 vInfo;

float map(float value, float beforeMin, float beforeMax, float afterMin, float afterMax) {
  return afterMin + (afterMax - afterMin) * ((value - beforeMin) / (beforeMax - beforeMin));
}

vec3 rgb2hsb(vec3 c){
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz),vec4(c.gb, K.xy),step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r),vec4(c.r, p.yzx),step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),d / (q.x + e),q.x);
}

vec3 hsb2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

void main(void) {
  vec4 dest = vec4(vColor, 1.0);
  float ef = mix(1.0, map(vDist, 0.0, 1.0, 0.0, 1.0), vInfo.y);

  vec3 hsb = rgb2hsb(vColor);
  
  

  hsb.x *= ef;
  hsb.y = 1.0;
  hsb.z = 1.0;

  dest.rgb = hsb2rgb(hsb);
  

  

  gl_FragColor = dest;
}`;class Ie extends ce{constructor(){super();s(this,"_updateHandler");s(this,"_layoutHandler");s(this,"_c",0);this._updateHandler=this._update.bind(this),S.instance.add(this._updateHandler),this._layoutHandler=this._resize.bind(this),E.instance.add(this._layoutHandler)}init(){}dispose(){S.instance.remove(this._updateHandler),this._updateHandler=null,E.instance.remove(this._layoutHandler),this._layoutHandler=null}_update(){this._c++}_resize(){}_getUni(e){return e.material.uniforms}_setUni(e,t,n){const i=this._getUni(e);i[t].value=n}_call(e){e!=null&&e()}}class W{constructor(){}}s(W,"HIGH",0),s(W,"MIDDLE",1),s(W,"LOW",2);const ne=class{constructor(){s(this,"fps",W.MIDDLE);s(this,"debug",document.querySelector(".l-debug"));s(this,"ang",0);s(this,"_dat");s(this,"_stats");s(this,"col",20);s(this,"bunkatu",20);s(this,"trail",10);s(this,"outlineNum",10);s(this,"outlineFrame",20);s(this,"isSimpleOrder",!0);s(this,"isColorGrad",!1);s(this,"isColorRep",!0);s(this,"mesh",{bg:{value:0,type:"color"},color:{value:0,type:"color"},s:{value:100,min:0,max:200}});h.instance.FLG_PARAM&&this.makeParamGUI(),h.instance.FLG_STATS&&(this._stats=Se(),document.body.appendChild(this._stats.domElement)),S.instance.add(()=>{this._update()})}_update(){this._stats!=null&&this._stats.update()}static get instance(){return this._instance||(this._instance=new ne),this._instance}makeParamGUI(){this._dat==null&&(this._dat=new Ce,this._add(this.mesh,"mesh"))}_add(e,t){const n=this._dat.addFolder(t);for(var i in e){const r=e[i];r.use==null&&(r.type=="color"?n.addColor(r,"value").name(i):r.list!=null?n.add(r,"value",r.list).name(i):n.add(r,"value",r.min,r.max).name(i))}}};let u=ne;s(u,"_instance");const se=class{constructor(){s(this,"x",window.innerWidth*.5);s(this,"y",window.innerHeight*.5);s(this,"old",new P);s(this,"normal",new P);s(this,"easeNormal",new P);s(this,"start",new P);s(this,"moveDist",new P);s(this,"power",0);s(this,"isDown",!1);s(this,"usePreventDefault",!0);s(this,"onSwipe");s(this,"_updateHandler");if(a.instance.isTouchDevice()){const e=document.querySelector("#js-con");e!=null&&(e.addEventListener("touchstart",(t={})=>{this._eTouchStart(t)},{passive:!1}),e.addEventListener("touchend",()=>{this._eTouchEnd()},{passive:!1}),e.addEventListener("touchmove",(t={})=>{this._eTouchMove(t)},{passive:!1}))}else window.addEventListener("mousedown",(e={})=>{this._eDown(e)}),window.addEventListener("mouseup",()=>{this._eUp()}),window.addEventListener("mousemove",(e={})=>{this._eMove(e)});this._updateHandler=this._update.bind(this),S.instance.add(this._updateHandler)}static get instance(){return this._instance||(this._instance=new se),this._instance}_eTouchStart(e={}){this.isDown=!0,this._eTouchMove(e);const t=this._getTouchPoint(e);this.start.x=t.x,this.start.y=t.y}_eTouchEnd(){this.isDown=!1;const e=this.old.x-this.x,t=this.old.y-this.y;(Math.abs(t)>0||Math.abs(e)>0)&&this.onSwipe!=null&&this.onSwipe({move:t})}_eTouchMove(e={}){const t=this._getTouchPoint(e);this.old.x=this.x,this.old.y=this.y,this.x=t.x,this.y=t.y,this.usePreventDefault&&e.preventDefault()}_eDown(e={}){this.isDown=!0,this._eMove(e),this.start.x=this.x,this.start.y=this.y}_eUp(){this.isDown=!1}_eMove(e={}){this.old.x=this.x,this.old.y=this.y,this.x=e.clientX,this.y=e.clientY}_getTouchPoint(e){const t=new P,n=e.touches;return n!=null&&n.length>0&&(t.x=n[0].pageX,t.y=n[0].pageY),t}_update(){this.isDown?(this.moveDist.x=this.start.x-this.x,this.moveDist.y=this.start.y-this.y):(this.moveDist.x+=(0-this.moveDist.x)*.25,this.moveDist.y+=(0-this.moveDist.y)*.25),this.normal.x=a.instance.map(this.x,-1,1,0,window.innerWidth),this.normal.y=a.instance.map(this.y,-1,1,0,window.innerHeight);const e=.1;this.easeNormal.x+=(this.normal.x-this.easeNormal.x)*e,this.easeNormal.y+=(this.normal.y-this.easeNormal.y)*e;const t=this.old.x-this.x,n=this.old.y-this.y,i=Math.sqrt(t*t+n*n);this.power+=(i-this.power)*.1}};let T=se;s(T,"_instance");class Te{constructor(){s(this,"h",0);s(this,"s",0);s(this,"l",0)}}class qe extends Ie{constructor(){super();s(this,"_table",[]);s(this,"_mesh");s(this,"_blockSize",0);s(this,"_colors",[]);this._makeColors();const e=u.instance.col,t=1,n=t/e;for(let i=0;i<e*e;i++){const r=~~(i%e),c=~~(i/e);let _=n*r,d=n*c;_-=t*.5-n*.5,d-=t*.5-n*.5,!u.instance.isSimpleOrder&&r%2==0&&(d-=n*.5),this._table.push(new L(_,d))}this._blockSize=n*.5,this._mesh=new Me(this.getGeo(),new Pe({vertexShader:He,fragmentShader:Re,transparent:!0,side:ze,depthTest:!1,uniforms:{alpha:{value:1},color:{value:new k(16777215)},size:{value:h.instance.OUTLINE_WIDTH},time:{value:0},viewSize:{value:new Y},trail:{value:1},useMouse:{value:1},dist:{value:new Y},mouse:{value:new Y}}})),this.add(this._mesh)}_makeColors(){this._colors=[],this._colors.push(new k(a.instance.random(0,1),a.instance.random(0,1),a.instance.random(0,1))),this._colors.push(new k(a.instance.random(0,1),a.instance.random(0,1),a.instance.random(0,1)))}_update(){super._update();const e=T.instance.normal.x*.5,t=T.instance.normal.y*.5,n=b.instance.sw(),i=b.instance.sh(),r=this._mesh.material.uniforms,c=b.instance.ratio();r.size.value=h.instance.OUTLINE_WIDTH*c,r.time.value+=1;let _=T.instance.isDown?1:0;h.instance.USE_ROLLOVER&&(_=1),r.useMouse.value+=(_-r.useMouse.value)*.1;const d=.2;r.mouse.value.x+=(e-r.mouse.value.x)*d,n>i?r.mouse.value.y+=(t*-1*(i/n)-r.mouse.value.y)*d:r.mouse.value.y+=(t*-1*1-r.mouse.value.y)*d;const w=Math.max(n,i)*1;this.scale.set(w,w,w)}getGeo(){let e=u.instance.trail,t=u.instance.bunkatu;const n=this._table.length,i=n*u.instance.outlineNum*t*e;console.log("num",i);const r=new Le,c=new Float32Array(i*3),_=new Float32Array(i*3),d=new Float32Array(i*3),w=new Float32Array(i*3),q=new Float32Array(i*3),F=new Float32Array(i*3),D=this._colors.length,ue=D<=2,ie=u.instance.outlineFrame!=1;let o=0,H=0;for(;H<n;){let re=~~(H/u.instance.col),U=~~(H%u.instance.col);const ae=this._table[H];let p=a.instance.randomArr(this._colors);const K=a.instance.randomArr(this._colors),he=a.instance.random2(.5,1)*1.5,de=a.instance.hit(5)?.25:1,B=t;if(u.instance.isColorGrad){const m=new Te,g=~~(re/2)%D;p=this._colors[g],p.getHSL(m);const N=.2,G=.8;g%2==0?m.l=a.instance.map(U,N,G,0,u.instance.col-1):m.l=a.instance.map(U,G,N,0,u.instance.col-1),m.l=a.instance.clamp(m.l,0,1),p.setHSL(m.h,m.s,m.l)}if(D>=4&&u.instance.isColorRep){const m=~~(re/2)%D,g=~~(U/2)%D;m%2==0?p=this._colors[g%2]:p=this._colors[2+g%2]}let z=0,V=u.instance.outlineNum;for(;z<V;){ue&&(p=a.instance.randomArr(this._colors));let m=ie?u.instance.outlineFrame:a.instance.random(.25,.9),g=a.instance.random(.25,1);const N=ie?0:a.instance.randomArr([0,1]),G=a.instance.hit(8),oe=this._blockSize*h.instance.OUTLINE_OFFSET,C=[];for(let x=0;x<360;x++){const f=a.instance.radian(z*30+360/B*x);let v=Math.sin(f)*oe,y=Math.cos(f)*oe;C.push([v,y])}const me=a.instance.randomInt(0,360);let M=0;const fe=a.instance.random(.01,.2);for(;M<B;){let x=0;for(;x<e;){let f=new L(C[M][0],C[M][1]),v;M!=B-1?v=new L(C[M+1][0],C[M+1][1]):v=new L(C[0][0],C[0][1]),G&&(v=new L(0,0));const y=new L(0,0);let R=a.instance.map(z,0,m,0,V-1);R*=de,f.x+=(y.x-f.x)*R,f.y+=(y.y-f.y)*R,v.x+=(y.x-v.x)*R,v.y+=(y.y-v.y)*R;const le=a.instance.map(z,0,me,0,V-1);f.rotateAround(y,a.instance.radian(le)),v.rotateAround(y,a.instance.radian(le));let ve=f.x,_e=f.y;const X=(v.x-f.x)*g,j=(v.y-f.y)*g;let pe=Math.sqrt(X*X+j*j);c[o*3+0]=ve,c[o*3+1]=_e,c[o*3+2]=0,_[o*3+0]=ae.x,_[o*3+1]=ae.y,_[o*3+2]=pe,d[o*3+0]=X,d[o*3+1]=j,d[o*3+2]=N,w[o*3+0]=1+z*1+x*fe,w[o*3+1]=a.instance.map(x,0,1,0,e-1),w[o*3+2]=he,q[o*3+0]=p.r,q[o*3+1]=p.g,q[o*3+2]=p.b,F[o*3+0]=K.r,F[o*3+1]=K.g,F[o*3+2]=K.b,o++,x++}M++}z++}H++}return r.setAttribute("position",new O(c,3)),r.setAttribute("centerPos",new O(_,3)),r.setAttribute("info",new O(w,3)),r.setAttribute("distPos",new O(d,3)),r.setAttribute("lineColor",new O(q,3)),r.setAttribute("lineColor2",new O(F,3)),r.computeBoundingSphere(),r}}class Fe extends De{constructor(e){super(e);s(this,"_con");s(this,"_item");this._con=new ce,this.mainScene.add(this._con),this._item=new qe,this._con.add(this._item),this._resize()}_update(){super._update(),this._con.position.y=b.instance.screenOffsetY()*-1,this.isNowRenderFrame()&&this._render()}_render(){this.renderer.setClearColor(u.instance.mesh.bg.value,1),this.renderer.render(this.mainScene,this.camera)}isNowRenderFrame(){return this.isRender}_resize(e=!0){super._resize();const t=b.instance.sw(),n=b.instance.sh();if((h.instance.IS_SP||h.instance.IS_TAB)&&t==this.renderSize.width&&this.renderSize.height*2>n)return;this.renderSize.width=t,this.renderSize.height=n,this.updateCamera(this.camera,t,n);let i=window.devicePixelRatio||1;this.renderer.setPixelRatio(i),this.renderer.setSize(t,n),this.renderer.clear(),e&&this._render()}}new Fe({el:document.querySelector("#js-con")});
