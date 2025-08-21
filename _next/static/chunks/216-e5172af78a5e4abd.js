(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{667:(e,t,n)=>{"use strict";e.exports=n(2795)},674:(e,t,n)=>{"use strict";e.exports=n(8575)},1112:(e,t,n)=>{"use strict";n.d(t,{b:()=>u});var r=n(4232);n(8477);var i=n(1138),o=n(7876),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let n=(0,i.TL)(`Primitive.${t}`),a=r.forwardRef((e,r)=>{let{asChild:i,...a}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(i?n:t,{...a,ref:r})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{}),l="horizontal",s=["horizontal","vertical"],c=r.forwardRef((e,t)=>{var n;let{decorative:r,orientation:i=l,...c}=e,u=(n=i,s.includes(n))?i:l;return(0,o.jsx)(a.div,{"data-orientation":u,...r?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},...c,ref:t})});c.displayName="Separator";var u=c},1831:(e,t,n)=>{"use strict";n.d(t,{Af:()=>l,Nz:()=>i,u5:()=>s,y3:()=>f});var r=n(4232);function i(e,t,n){if(!e)return;if(!0===n(e))return e;let r=t?e.return:e.child;for(;r;){let e=i(r,t,n);if(e)return e;r=t?null:r.sibling}}function o(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?r.useLayoutEffect:r.useEffect;let a=o(r.createContext(null));class l extends r.Component{render(){return r.createElement(a.Provider,{value:this._reactInternals},this.props.children)}}function s(){let e=r.useContext(a);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=r.useId();return r.useMemo(()=>{for(let n of[e,null==e?void 0:e.alternate]){if(!n)continue;let e=i(n,!1,e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}});if(e)return e}},[e,t])}let c=Symbol.for("react.context"),u=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===c;function f(){let e=function(){let e=s(),[t]=r.useState(()=>new Map);t.clear();let n=e;for(;n;){let e=n.type;u(e)&&e!==a&&!t.has(e)&&t.set(e,r.use(o(e))),n=n.return}return t}();return r.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>i=>r.createElement(t,null,r.createElement(n.Provider,{...i,value:e.get(n)})),e=>r.createElement(l,{...e})),[e])}},1923:(e,t,n)=>{"use strict";e.exports=n(7816)},2439:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let r=n(4252),i=n(8365),o=n(7876),a=i._(n(4232)),l=r._(n(8477)),s=r._(n(9836)),c=n(4915),u=n(6904),f=n(72);n(546);let d=n(8265),p=r._(n(3829)),h=n(1026),v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/some19ice-portfolio/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function b(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let g=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:s,decoding:c,className:u,style:f,fetchPriority:d,placeholder:p,loading:v,unoptimized:g,fill:y,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:S,setShowAltText:E,sizesInput:_,onLoad:j,onError:C,...P}=e,O=(0,a.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&m(e,p,w,x,S,g,_))},[n,p,w,x,S,C,g,_]),M=(0,h.useMergedRef)(t,O);return(0,o.jsx)("img",{...P,...b(d),loading:v,width:s,height:l,decoding:c,"data-nimg":y?"fill":"1",className:u,style:f,sizes:i,srcSet:r,src:n,ref:M,onLoad:e=>{m(e.currentTarget,p,w,x,S,g,_)},onError:e=>{E(!0),"empty"!==p&&S(!0),C&&C(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...b(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(d.RouterContext),r=(0,a.useContext)(f.ImageConfigContext),i=(0,a.useMemo)(()=>{var e;let t=v||r||u.imageConfigDefault,n=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:n,deviceSizes:i,qualities:o}},[r]),{onLoad:l,onLoadingComplete:s}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let[b,w]=(0,a.useState)(!1),[x,S]=(0,a.useState)(!1),{props:E,meta:_}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{...E,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:S,sizesInput:e.sizes,ref:t}),_.priority?(0,o.jsx)(y,{isAppRouter:!n,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2648:(e,t,n)=>{"use strict";let r,i,o,a,l;n.d(t,{B:()=>L,C:()=>ee,D:()=>et,E:()=>A,a:()=>M,b:()=>O,c:()=>e_,d:()=>eC,e:()=>ec,f:()=>eH,i:()=>C,u:()=>z});var s=n(4232),c=n.t(s,2),u=n(7302),f=n(6691),d=n(4796),p=n(5712);let h=e=>{let t,n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,i,o);return o},{useSyncExternalStoreWithSelector:v}=p,m=(e,t)=>{let n=(e=>e?h(e):h)(e),r=(e,r=t)=>(function(e,t=e=>e,n){let r=v(e.subscribe,e.getState,e.getInitialState,t,n);return s.useDebugValue(r),r})(n,e,r);return Object.assign(r,n),r},b=[];function g(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}function y(e,t=null,n=!1,r={}){for(let i of(null===t&&(t=[e]),b))if(g(t,i.keys,i.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(i,"error"))throw i.error;if(Object.prototype.hasOwnProperty.call(i,"response"))return r.lifespan&&r.lifespan>0&&(i.timeout&&clearTimeout(i.timeout),i.timeout=setTimeout(i.remove,r.lifespan)),i.response;if(!n)throw i.promise}let i={keys:t,equal:r.equal,remove:()=>{let e=b.indexOf(i);-1!==e&&b.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{i.response=e,r.lifespan&&r.lifespan>0&&(i.timeout=setTimeout(i.remove,r.lifespan))}).catch(e=>i.error=e)};if(b.push(i),!n)throw i.promise}var w=n(667),x=n.n(w),S=n(1923),E=n(7876),_=n(1831);function j(e){let t=e.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}n(5364),c.act;let C=e=>e&&e.hasOwnProperty("current"),P=e=>null!=e&&("string"==typeof e||"number"==typeof e||e.isColor),O=((e,t)=>"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative"))()?s.useLayoutEffect:s.useEffect;function M(e){let t=s.useRef(e);return O(()=>void(t.current=e),[e]),t}function z(){let e=(0,_.u5)(),t=(0,_.y3)();return s.useMemo(()=>({children:n})=>{let r=(0,_.Nz)(e,!0,e=>e.type===s.StrictMode)?s.StrictMode:s.Fragment;return(0,E.jsx)(r,{children:(0,E.jsx)(t,{children:n})})},[e,t])}function L({set:e}){return O(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}let A=(e=>((e=class extends s.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}).getDerivedStateFromError=()=>({error:!0}),e))();function T(e){var t;let n="undefined"!=typeof window?null!=(t=window.devicePixelRatio)?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],n),e[1]):e}function k(e){var t;return null==(t=e.__r3f)?void 0:t.root.getState()}let I={obj:e=>e===Object(e)&&!I.arr(e)&&"function"!=typeof e,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,boo:e=>"boolean"==typeof e,und:e=>void 0===e,nul:e=>null===e,arr:e=>Array.isArray(e),equ(e,t,{arrays:n="shallow",objects:r="reference",strict:i=!0}={}){let o;if(typeof e!=typeof t||!!e!=!!t)return!1;if(I.str(e)||I.num(e)||I.boo(e))return e===t;let a=I.obj(e);if(a&&"reference"===r)return e===t;let l=I.arr(e);if(l&&"reference"===n)return e===t;if((l||a)&&e===t)return!0;for(o in e)if(!(o in t))return!1;if(a&&"shallow"===n&&"shallow"===r){for(o in i?t:e)if(!I.equ(e[o],t[o],{strict:i,objects:"reference"}))return!1}else for(o in i?t:e)if(e[o]!==t[o])return!1;if(I.und(o)){if(l&&0===e.length&&0===t.length||a&&0===Object.keys(e).length&&0===Object.keys(t).length)return!0;if(e!==t)return!1}return!0}},R=["children","key","ref"];function U(e,t,n,r){let i=null==e?void 0:e.__r3f;return!i&&(i={root:t,type:n,parent:null,children:[],props:function(e){let t={};for(let n in e)R.includes(n)||(t[n]=e[n]);return t}(r),object:e,eventCount:0,handlers:{},isHidden:!1},e&&(e.__r3f=i)),i}function D(e,t){let n=e[t];if(!t.includes("-"))return{root:e,key:t,target:n};for(let i of(n=e,t.split("-"))){var r;t=i,e=n,n=null==(r=n)?void 0:r[t]}return{root:e,key:t,target:n}}let H=/-\d+$/;function B(e,t){if(I.str(t.props.attach)){if(H.test(t.props.attach)){let n=t.props.attach.replace(H,""),{root:r,key:i}=D(e.object,n);Array.isArray(r[i])||(r[i]=[])}let{root:n,key:r}=D(e.object,t.props.attach);t.previousAttach=n[r],n[r]=t.object}else I.fun(t.props.attach)&&(t.previousAttach=t.props.attach(e.object,t.object))}function N(e,t){if(I.str(t.props.attach)){let{root:n,key:r}=D(e.object,t.props.attach),i=t.previousAttach;void 0===i?delete n[r]:n[r]=i}else null==t.previousAttach||t.previousAttach(e.object,t.object);delete t.previousAttach}let F=[...R,"args","dispose","attach","object","onUpdate","dispose"],q=new Map,W=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],G=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function V(e,t){var n,r;let i=e.__r3f,o=i&&j(i).getState(),a=null==i?void 0:i.eventCount;for(let n in t){let a=t[n];if(F.includes(n))continue;if(i&&G.test(n)){"function"==typeof a?i.handlers[n]=a:delete i.handlers[n],i.eventCount=Object.keys(i.handlers).length;continue}if(void 0===a)continue;let{root:l,key:s,target:c}=D(e,n);c instanceof f.zgK&&a instanceof f.zgK?c.mask=a.mask:c instanceof f.Q1f&&P(a)?c.set(a):null!==c&&"object"==typeof c&&"function"==typeof c.set&&"function"==typeof c.copy&&null!=a&&a.constructor&&c.constructor===a.constructor?c.copy(a):null!==c&&"object"==typeof c&&"function"==typeof c.set&&Array.isArray(a)?"function"==typeof c.fromArray?c.fromArray(a):c.set(...a):null!==c&&"object"==typeof c&&"function"==typeof c.set&&"number"==typeof a?"function"==typeof c.setScalar?c.setScalar(a):c.set(a):(l[s]=a,o&&!o.linear&&W.includes(s)&&null!=(r=l[s])&&r.isTexture&&l[s].format===f.GWd&&l[s].type===f.OUM&&(l[s].colorSpace=f.er$))}if(null!=i&&i.parent&&null!=o&&o.internal&&null!=(n=i.object)&&n.isObject3D&&a!==i.eventCount){let e=i.object,t=o.internal.interaction.indexOf(e);t>-1&&o.internal.interaction.splice(t,1),i.eventCount&&null!==e.raycast&&o.internal.interaction.push(e)}return i&&void 0===i.props.attach&&(i.object.isBufferGeometry?i.props.attach="geometry":i.object.isMaterial&&(i.props.attach="material")),i&&$(i),e}function $(e){var t;if(!e.parent)return;null==e.props.onUpdate||e.props.onUpdate(e.object);let n=null==(t=e.root)||null==t.getState?void 0:t.getState();n&&0===n.internal.frames&&n.invalidate()}let Y=e=>null==e?void 0:e.isObject3D;function X(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function Q(e,t,n,r){let i=n.get(t);i&&(n.delete(t),0===n.size&&(e.delete(r),i.target.releasePointerCapture(r)))}let J=e=>!!(null!=e&&e.render),Z=s.createContext(null);function K(){let e=s.useContext(Z);if(!e)throw Error("R3F: Hooks can only be used within the Canvas component!");return e}function ee(e=e=>e,t){return K()(e,t)}function et(e,t=0){let n=K(),r=n.getState().internal.subscribe,i=M(e);return O(()=>r(i,t,n),[t,r,n]),null}let en=new WeakMap;function er(e,t){return function(n,...r){var i;let o;return"function"==typeof n&&(null==n||null==(i=n.prototype)?void 0:i.constructor)===n?(o=en.get(n))||(o=new n,en.set(n,o)):o=n,e&&e(o),Promise.all(r.map(e=>new Promise((n,r)=>o.load(e,e=>{Y(null==e?void 0:e.scene)&&Object.assign(e,function(e){let t={nodes:{},materials:{},meshes:{}};return e&&e.traverse(e=>{e.name&&(t.nodes[e.name]=e),e.material&&!t.materials[e.material.name]&&(t.materials[e.material.name]=e.material),e.isMesh&&!t.meshes[e.name]&&(t.meshes[e.name]=e)}),t}(e.scene)),n(e)},t,t=>r(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))}}function ei(e,t,n,r){let i=Array.isArray(t)?t:[t],o=y(er(n,r),[e,...i],!1,{equal:I.equ});return Array.isArray(t)?o:o[0]}ei.preload=function(e,t,n){let r,i=Array.isArray(t)?t:[t];y(er(n),[e,...i],!0,r)},ei.clear=function(e,t){var n=[e,...Array.isArray(t)?t:[t]];if(void 0===n||0===n.length)b.splice(0,b.length);else{let e=b.find(e=>g(n,e.keys,e.equal));e&&e.remove()}};let eo={},ea=/^three(?=[A-Z])/,el=e=>`${e[0].toUpperCase()}${e.slice(1)}`,es=0;function ec(e){if("function"==typeof e){let t=`${es++}`;return eo[t]=e,t}Object.assign(eo,e)}function eu(e,t){let n=el(e),r=eo[n];if("primitive"!==e&&!r)throw Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if("primitive"===e&&!t.object)throw Error("R3F: Primitives without 'object' are invalid!");if(void 0!==t.args&&!Array.isArray(t.args))throw Error("R3F: The args prop must be an array!")}function ef(e){if(e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?B(e.parent,e):Y(e.object)&&!1!==e.props.visible&&(e.object.visible=!0),e.isHidden=!1,$(e)}}function ed(e,t,n){let r=t.root.getState();if(e.parent||e.object===r.scene){if(!t.object){var i,o;let e=eo[el(t.type)];t.object=null!=(i=t.props.object)?i:new e(...null!=(o=t.props.args)?o:[]),t.object.__r3f=t}if(V(t.object,t.props),t.props.attach)B(e,t);else if(Y(t.object)&&Y(e.object)){let r=e.object.children.indexOf(null==n?void 0:n.object);if(n&&-1!==r){let n=e.object.children.indexOf(t.object);-1!==n?(e.object.children.splice(n,1),e.object.children.splice(n<r?r-1:r,0,t.object)):(t.object.parent=e.object,e.object.children.splice(r,0,t.object),t.object.dispatchEvent({type:"added"}),e.object.dispatchEvent({type:"childadded",child:t.object}))}else e.object.add(t.object)}for(let e of t.children)ed(t,e);$(t)}}function ep(e,t){t&&(t.parent=e,e.children.push(t),ed(e,t))}function eh(e,t,n){if(!t||!n)return;t.parent=e;let r=e.children.indexOf(n);-1!==r?e.children.splice(r,0,t):e.children.push(t),ed(e,t,n)}function ev(e){if("function"==typeof e.dispose){let t=()=>{try{e.dispose()}catch{}};"undefined"!=typeof IS_REACT_ACT_ENVIRONMENT?t():(0,S.unstable_scheduleCallback)(S.unstable_IdlePriority,t)}}function em(e,t,n){if(!t)return;t.parent=null;let r=e.children.indexOf(t);-1!==r&&e.children.splice(r,1),t.props.attach?N(e,t):Y(t.object)&&Y(e.object)&&(e.object.remove(t.object),function(e,t){let{internal:n}=e.getState();n.interaction=n.interaction.filter(e=>e!==t),n.initialHits=n.initialHits.filter(e=>e!==t),n.hovered.forEach((e,r)=>{(e.eventObject===t||e.object===t)&&n.hovered.delete(r)}),n.capturedMap.forEach((e,r)=>{Q(n.capturedMap,t,e,r)})}(j(t),t.object));let i=null!==t.props.dispose&&!1!==n;for(let e=t.children.length-1;e>=0;e--){let n=t.children[e];em(t,n,i)}t.children.length=0,delete t.object.__r3f,i&&"primitive"!==t.type&&"Scene"!==t.object.type&&ev(t.object),void 0===n&&$(t)}let eb=[],eg=()=>{},ey={},ew=0,ex=function(e){let t=x()(e);return t.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:s.version}),t}({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:function(e,t,n){var r;return eu(e=el(e)in eo?e:e.replace(ea,""),t),"primitive"===e&&null!=(r=t.object)&&r.__r3f&&delete t.object.__r3f,U(t.object,n,e,t)},removeChild:em,appendChild:ep,appendInitialChild:ep,insertBefore:eh,appendChildToContainer(e,t){let n=e.getState().scene.__r3f;t&&n&&ep(n,t)},removeChildFromContainer(e,t){let n=e.getState().scene.__r3f;t&&n&&em(n,t)},insertInContainerBefore(e,t,n){let r=e.getState().scene.__r3f;t&&n&&r&&eh(r,t,n)},getRootHostContext:()=>ey,getChildHostContext:()=>ey,commitUpdate(e,t,n,r,i){var o,a,l;eu(t,r);let s=!1;if("primitive"===e.type&&n.object!==r.object||(null==(o=r.args)?void 0:o.length)!==(null==(a=n.args)?void 0:a.length)?s=!0:null!=(l=r.args)&&l.some((e,t)=>{var r;return e!==(null==(r=n.args)?void 0:r[t])})&&(s=!0),s)eb.push([e,{...r},i]);else{let t=function(e,t){let n={};for(let r in t)if(!F.includes(r)&&!I.equ(t[r],e.props[r]))for(let e in n[r]=t[r],t)e.startsWith(`${r}-`)&&(n[e]=t[e]);for(let r in e.props){if(F.includes(r)||t.hasOwnProperty(r))continue;let{root:i,key:o}=D(e.object,r);if(i.constructor&&0===i.constructor.length){let e=function(e){let t=q.get(e.constructor);try{t||(t=new e.constructor,q.set(e.constructor,t))}catch(e){}return t}(i);I.und(e)||(n[o]=e[o])}else n[o]=0}return n}(e,r);Object.keys(t).length&&(Object.assign(e.props,t),V(e.object,t))}(null===i.sibling||(4&i.flags)==0)&&function(){for(let[e]of eb){let t=e.parent;if(t)for(let n of(e.props.attach?N(t,e):Y(e.object)&&Y(t.object)&&t.object.remove(e.object),e.children))n.props.attach?N(e,n):Y(n.object)&&Y(e.object)&&e.object.remove(n.object);e.isHidden&&ef(e),e.object.__r3f&&delete e.object.__r3f,"primitive"!==e.type&&ev(e.object)}for(let[r,i,o]of eb){r.props=i;let a=r.parent;if(a){let i=eo[el(r.type)];r.object=null!=(e=r.props.object)?e:new i(...null!=(t=r.props.args)?t:[]),r.object.__r3f=r;var e,t,n=r.object;for(let e of[o,o.alternate])if(null!==e)if("function"==typeof e.ref){null==e.refCleanup||e.refCleanup();let t=e.ref(n);"function"==typeof t&&(e.refCleanup=t)}else e.ref&&(e.ref.current=n);for(let e of(V(r.object,r.props),r.props.attach?B(a,r):Y(r.object)&&Y(a.object)&&a.object.add(r.object),r.children))e.props.attach?B(r,e):Y(e.object)&&Y(r.object)&&r.object.add(e.object);$(r)}}eb.length=0}()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:e=>null==e?void 0:e.object,prepareForCommit:()=>null,preparePortalMount:e=>U(e.getState().scene,e,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:function(e){if(!e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?N(e.parent,e):Y(e.object)&&(e.object.visible=!1),e.isHidden=!0,$(e)}},unhideInstance:ef,createTextInstance:eg,hideTextInstance:eg,unhideTextInstance:eg,scheduleTimeout:"function"==typeof setTimeout?setTimeout:void 0,cancelTimeout:"function"==typeof clearTimeout?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:s.createContext(null),setCurrentUpdatePriority(e){ew=e},getCurrentUpdatePriority:()=>ew,resolveUpdatePriority(){var e;if(0!==ew)return ew;switch("undefined"!=typeof window&&(null==(e=window.event)?void 0:e.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return u.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return u.ContinuousEventPriority;default:return u.DefaultEventPriority}},resetFormInstance(){}}),eS=new Map,eE={objects:"shallow",strict:!1};function e_(e){let t,n,r=eS.get(e),i=null==r?void 0:r.fiber,o=null==r?void 0:r.store;r&&console.warn("R3F.createRoot should only be called once!");let a="function"==typeof reportError?reportError:console.error,l=o||((e,t)=>{let n,r,i=(n=(n,r)=>{let i,o=new f.Pq0,a=new f.Pq0,l=new f.Pq0;function c(e=r().camera,t=a,n=r().size){let{width:i,height:s,top:u,left:f}=n,d=i/s;t.isVector3?l.copy(t):l.set(...t);let p=e.getWorldPosition(o).distanceTo(l);if(e&&e.isOrthographicCamera)return{width:i/e.zoom,height:s/e.zoom,top:u,left:f,factor:1,distance:p,aspect:d};{let t=2*Math.tan(e.fov*Math.PI/180/2)*p,n=i/s*t;return{width:n,height:t,top:u,left:f,factor:i/n,distance:p,aspect:d}}}let u=e=>n(t=>({performance:{...t.performance,current:e}})),d=new f.I9Y;return{set:n,get:r,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(t=1)=>e(r(),t),advance:(e,n)=>t(e,n,r()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new f.zD7,pointer:d,mouse:d,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let e=r();i&&clearTimeout(i),e.performance.current!==e.performance.min&&u(e.performance.min),i=setTimeout(()=>u(r().performance.max),e.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:c},setEvents:e=>n(t=>({...t,events:{...t.events,...e}})),setSize:(e,t,i=0,o=0)=>{let l=r().camera,s={width:e,height:t,top:i,left:o};n(e=>({size:s,viewport:{...e.viewport,...c(l,a,s)}}))},setDpr:e=>n(t=>{let n=T(e);return{viewport:{...t.viewport,dpr:n,initialDpr:t.viewport.initialDpr||n}}}),setFrameloop:(e="always")=>{let t=r().clock;t.stop(),t.elapsedTime=0,"never"!==e&&(t.start(),t.elapsedTime=0),n(()=>({frameloop:e}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:s.createRef(),active:!1,frames:0,priority:0,subscribe:(e,t,n)=>{let i=r().internal;return i.priority=i.priority+ +(t>0),i.subscribers.push({ref:e,priority:t,store:n}),i.subscribers=i.subscribers.sort((e,t)=>e.priority-t.priority),()=>{let n=r().internal;null!=n&&n.subscribers&&(n.priority=n.priority-(t>0),n.subscribers=n.subscribers.filter(t=>t.ref!==e))}}}}})?m(n,r):m,o=i.getState(),a=o.size,l=o.viewport.dpr,c=o.camera;return i.subscribe(()=>{let{camera:e,size:t,viewport:n,gl:r,set:o}=i.getState();if(t.width!==a.width||t.height!==a.height||n.dpr!==l){a=t,l=n.dpr,function(e,t){!e.manual&&(e&&e.isOrthographicCamera?(e.left=-(t.width/2),e.right=t.width/2,e.top=t.height/2,e.bottom=-(t.height/2)):e.aspect=t.width/t.height,e.updateProjectionMatrix())}(e,t),n.dpr>0&&r.setPixelRatio(n.dpr);let i="undefined"!=typeof HTMLCanvasElement&&r.domElement instanceof HTMLCanvasElement;r.setSize(t.width,t.height,i)}e!==c&&(c=e,o(t=>({viewport:{...t.viewport,...t.viewport.getCurrentViewport(e)}})))}),i.subscribe(t=>e(t)),i})(eR,eU),c=i||ex.createContainer(l,u.ConcurrentRoot,null,!1,null,"",a,a,a,null);r||eS.set(e,{fiber:c,store:l});let p=!1,h=null;return{async configure(r={}){var i,o;let a;h=new Promise(e=>a=e);let{gl:s,size:c,scene:u,events:v,onCreated:m,shadows:b=!1,linear:g=!1,flat:y=!1,legacy:w=!1,orthographic:x=!1,frameloop:S="always",dpr:E=[1,2],performance:_,raycaster:j,camera:C,onPointerMissed:P}=r,O=l.getState(),M=O.gl;if(!O.gl){let t={canvas:e,powerPreference:"high-performance",antialias:!0,alpha:!0},n="function"==typeof s?await s(t):s;M=J(n)?n:new d.WebGLRenderer({...t,...s}),O.set({gl:M})}let z=O.raycaster;z||O.set({raycaster:z=new f.tBo});let{params:L,...A}=j||{};if(I.equ(A,z,eE)||V(z,{...A}),I.equ(L,z.params,eE)||V(z,{params:{...z.params,...L}}),!O.camera||O.camera===n&&!I.equ(n,C,eE)){n=C;let e=null==C?void 0:C.isCamera,t=e?C:x?new f.qUd(0,0,0,0,.1,1e3):new f.ubm(75,0,.1,1e3);!e&&(t.position.z=5,C&&(V(t,C),!t.manual&&("aspect"in C||"left"in C||"right"in C||"bottom"in C||"top"in C)&&(t.manual=!0,t.updateProjectionMatrix())),O.camera||null!=C&&C.rotation||t.lookAt(0,0,0)),O.set({camera:t}),z.camera=t}if(!O.scene){let e;null!=u&&u.isScene?U(e=u,l,"",{}):(U(e=new f.Z58,l,"",{}),u&&V(e,u)),O.set({scene:e})}v&&!O.events.handlers&&O.set({events:v(l)});let k=function(e,t){if(!t&&"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement&&e.parentElement){let{width:t,height:n,top:r,left:i}=e.parentElement.getBoundingClientRect();return{width:t,height:n,top:r,left:i}}return!t&&"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas?{width:e.width,height:e.height,top:0,left:0}:{width:0,height:0,top:0,left:0,...t}}(e,c);if(I.equ(k,O.size,eE)||O.setSize(k.width,k.height,k.top,k.left),E&&O.viewport.dpr!==T(E)&&O.setDpr(E),O.frameloop!==S&&O.setFrameloop(S),O.onPointerMissed||O.set({onPointerMissed:P}),_&&!I.equ(_,O.performance,eE)&&O.set(e=>({performance:{...e.performance,..._}})),!O.xr){let e=(e,t)=>{let n=l.getState();"never"!==n.frameloop&&eU(e,!0,n,t)},t=()=>{let t=l.getState();t.gl.xr.enabled=t.gl.xr.isPresenting,t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting?e:null),t.gl.xr.isPresenting||eR(t)},n={connect(){let e=l.getState().gl;e.xr.addEventListener("sessionstart",t),e.xr.addEventListener("sessionend",t)},disconnect(){let e=l.getState().gl;e.xr.removeEventListener("sessionstart",t),e.xr.removeEventListener("sessionend",t)}};"function"==typeof(null==(i=M.xr)?void 0:i.addEventListener)&&n.connect(),O.set({xr:n})}if(M.shadowMap){let e=M.shadowMap.enabled,t=M.shadowMap.type;if(M.shadowMap.enabled=!!b,I.boo(b))M.shadowMap.type=f.Wk7;else if(I.str(b)){let e={basic:f.bTm,percentage:f.QP0,soft:f.Wk7,variance:f.RyA};M.shadowMap.type=null!=(o=e[b])?o:f.Wk7}else I.obj(b)&&Object.assign(M.shadowMap,b);(e!==M.shadowMap.enabled||t!==M.shadowMap.type)&&(M.shadowMap.needsUpdate=!0)}return f.ppV.enabled=!w,p||(M.outputColorSpace=g?f.Zr2:f.er$,M.toneMapping=y?f.y_p:f.FV),O.legacy!==w&&O.set(()=>({legacy:w})),O.linear!==g&&O.set(()=>({linear:g})),O.flat!==y&&O.set(()=>({flat:y})),!s||I.fun(s)||J(s)||I.equ(s,M,eE)||V(M,s),t=m,p=!0,a(),this},render(n){return p||h||this.configure(),h.then(()=>{ex.updateContainer((0,E.jsx)(ej,{store:l,children:n,onCreated:t,rootElement:e}),c,null,()=>void 0)}),l},unmount(){eC(e)}}}function ej({store:e,children:t,onCreated:n,rootElement:r}){return O(()=>{let t=e.getState();t.set(e=>({internal:{...e.internal,active:!0}})),n&&n(t),e.getState().events.connected||null==t.events.connect||t.events.connect(r)},[]),(0,E.jsx)(Z.Provider,{value:e,children:t})}function eC(e,t){let n=eS.get(e),r=null==n?void 0:n.fiber;if(r){let i=null==n?void 0:n.store.getState();i&&(i.internal.active=!1),ex.updateContainer(null,r,null,()=>{i&&setTimeout(()=>{try{null==i.events.disconnect||i.events.disconnect(),null==(n=i.gl)||null==(r=n.renderLists)||null==r.dispose||r.dispose(),null==(o=i.gl)||null==o.forceContextLoss||o.forceContextLoss(),null!=(a=i.gl)&&a.xr&&i.xr.disconnect();var n,r,o,a,l=i.scene;for(let e in"Scene"!==l.type&&(null==l.dispose||l.dispose()),l){let t=l[e];(null==t?void 0:t.type)!=="Scene"&&(null==t||null==t.dispose||t.dispose())}eS.delete(e),t&&t(e)}catch(e){}},500)})}}let eP=new Set,eO=new Set,eM=new Set;function ez(e,t){if(e.size)for(let{callback:n}of e.values())n(t)}function eL(e,t){switch(e){case"before":return ez(eP,t);case"after":return ez(eO,t);case"tail":return ez(eM,t)}}function eA(e,t,n){let o=t.clock.getDelta();"never"===t.frameloop&&"number"==typeof e&&(o=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),r=t.internal.subscribers;for(let e=0;e<r.length;e++)(i=r[e]).ref.current(i.store.getState(),o,n);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),"always"===t.frameloop?1:t.internal.frames}let eT=!1,ek=!1;function eI(e){for(let n of(a=requestAnimationFrame(eI),eT=!0,o=0,eL("before",e),ek=!0,eS.values())){var t;(l=n.store.getState()).internal.active&&("always"===l.frameloop||l.internal.frames>0)&&!(null!=(t=l.gl.xr)&&t.isPresenting)&&(o+=eA(e,l))}if(ek=!1,eL("after",e),0===o)return eL("tail",e),eT=!1,cancelAnimationFrame(a)}function eR(e,t=1){var n;if(!e)return eS.forEach(e=>eR(e.store.getState(),t));(null==(n=e.gl.xr)||!n.isPresenting)&&e.internal.active&&"never"!==e.frameloop&&(t>1?e.internal.frames=Math.min(60,e.internal.frames+t):ek?e.internal.frames=2:e.internal.frames=1,eT||(eT=!0,requestAnimationFrame(eI)))}function eU(e,t=!0,n,r){if(t&&eL("before",e),n)eA(e,n,r);else for(let t of eS.values())eA(e,t.store.getState());t&&eL("after",e)}let eD={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function eH(e){let{handlePointer:t}=function(e){function t(e){return e.filter(e=>["Move","Over","Enter","Out","Leave"].some(t=>{var n;return null==(n=e.__r3f)?void 0:n.handlers["onPointer"+t]}))}function n(t){let{internal:n}=e.getState();for(let e of n.hovered.values())if(!t.length||!t.find(t=>t.object===e.object&&t.index===e.index&&t.instanceId===e.instanceId)){let r=e.eventObject.__r3f;if(n.hovered.delete(X(e)),null!=r&&r.eventCount){let n=r.handlers,i={...e,intersections:t};null==n.onPointerOut||n.onPointerOut(i),null==n.onPointerLeave||n.onPointerLeave(i)}}}function r(e,t){for(let n=0;n<t.length;n++){let r=t[n].__r3f;null==r||null==r.handlers.onPointerMissed||r.handlers.onPointerMissed(e)}}return{handlePointer:function(i){switch(i){case"onPointerLeave":case"onPointerCancel":return()=>n([]);case"onLostPointerCapture":return t=>{let{internal:r}=e.getState();"pointerId"in t&&r.capturedMap.has(t.pointerId)&&requestAnimationFrame(()=>{r.capturedMap.has(t.pointerId)&&(r.capturedMap.delete(t.pointerId),n([]))})}}return function(o){let{onPointerMissed:a,internal:l}=e.getState();l.lastEvent.current=o;let s="onPointerMove"===i,c="onClick"===i||"onContextMenu"===i||"onDoubleClick"===i,u=function(t,n){let r=e.getState(),i=new Set,o=[],a=n?n(r.internal.interaction):r.internal.interaction;for(let e=0;e<a.length;e++){let t=k(a[e]);t&&(t.raycaster.camera=void 0)}r.previousRoot||null==r.events.compute||r.events.compute(t,r);let l=a.flatMap(function(e){let n=k(e);if(!n||!n.events.enabled||null===n.raycaster.camera)return[];if(void 0===n.raycaster.camera){var r;null==n.events.compute||n.events.compute(t,n,null==(r=n.previousRoot)?void 0:r.getState()),void 0===n.raycaster.camera&&(n.raycaster.camera=null)}return n.raycaster.camera?n.raycaster.intersectObject(e,!0):[]}).sort((e,t)=>{let n=k(e.object),r=k(t.object);return n&&r&&r.events.priority-n.events.priority||e.distance-t.distance}).filter(e=>{let t=X(e);return!i.has(t)&&(i.add(t),!0)});for(let e of(r.events.filter&&(l=r.events.filter(l,r)),l)){let t=e.object;for(;t;){var s;null!=(s=t.__r3f)&&s.eventCount&&o.push({...e,eventObject:t}),t=t.parent}}if("pointerId"in t&&r.internal.capturedMap.has(t.pointerId))for(let e of r.internal.capturedMap.get(t.pointerId).values())i.has(X(e.intersection))||o.push(e.intersection);return o}(o,s?t:void 0),d=c?function(t){let{internal:n}=e.getState(),r=t.offsetX-n.initialClick[0],i=t.offsetY-n.initialClick[1];return Math.round(Math.sqrt(r*r+i*i))}(o):0;"onPointerDown"===i&&(l.initialClick=[o.offsetX,o.offsetY],l.initialHits=u.map(e=>e.eventObject)),c&&!u.length&&d<=2&&(r(o,l.interaction),a&&a(o)),s&&n(u),!function(e,t,r,i){if(e.length){let o={stopped:!1};for(let a of e){let l=k(a.object);if(l||a.object.traverseAncestors(e=>{let t=k(e);if(t)return l=t,!1}),l){let{raycaster:s,pointer:c,camera:u,internal:d}=l,p=new f.Pq0(c.x,c.y,0).unproject(u),h=e=>{var t,n;return null!=(t=null==(n=d.capturedMap.get(e))?void 0:n.has(a.eventObject))&&t},v=e=>{let n={intersection:a,target:t.target};d.capturedMap.has(e)?d.capturedMap.get(e).set(a.eventObject,n):d.capturedMap.set(e,new Map([[a.eventObject,n]])),t.target.setPointerCapture(e)},m=e=>{let t=d.capturedMap.get(e);t&&Q(d.capturedMap,a.eventObject,t,e)},b={};for(let e in t){let n=t[e];"function"!=typeof n&&(b[e]=n)}let g={...a,...b,pointer:c,intersections:e,stopped:o.stopped,delta:r,unprojectedPoint:p,ray:s.ray,camera:u,stopPropagation(){let r="pointerId"in t&&d.capturedMap.get(t.pointerId);(!r||r.has(a.eventObject))&&(g.stopped=o.stopped=!0,d.hovered.size&&Array.from(d.hovered.values()).find(e=>e.eventObject===a.eventObject)&&n([...e.slice(0,e.indexOf(a)),a]))},target:{hasPointerCapture:h,setPointerCapture:v,releasePointerCapture:m},currentTarget:{hasPointerCapture:h,setPointerCapture:v,releasePointerCapture:m},nativeEvent:t};if(i(g),!0===o.stopped)break}}}}(u,o,d,function(e){let t=e.eventObject,n=t.__r3f;if(!(null!=n&&n.eventCount))return;let a=n.handlers;if(s){if(a.onPointerOver||a.onPointerEnter||a.onPointerOut||a.onPointerLeave){let t=X(e),n=l.hovered.get(t);n?n.stopped&&e.stopPropagation():(l.hovered.set(t,e),null==a.onPointerOver||a.onPointerOver(e),null==a.onPointerEnter||a.onPointerEnter(e))}null==a.onPointerMove||a.onPointerMove(e)}else{let n=a[i];n?(!c||l.initialHits.includes(t))&&(r(o,l.interaction.filter(e=>!l.initialHits.includes(e))),n(e)):c&&l.initialHits.includes(t)&&r(o,l.interaction.filter(e=>!l.initialHits.includes(e)))}})}}}}(e);return{priority:1,enabled:!0,compute(e,t,n){t.pointer.set(e.offsetX/t.size.width*2-1,-(2*(e.offsetY/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(eD).reduce((e,n)=>({...e,[n]:t(n)}),{}),update:()=>{var t;let{events:n,internal:r}=e.getState();null!=(t=r.lastEvent)&&t.current&&n.handlers&&n.handlers.onPointerMove(r.lastEvent.current)},connect:t=>{let{set:n,events:r}=e.getState();if(null==r.disconnect||r.disconnect(),n(e=>({events:{...e.events,connected:t}})),r.handlers)for(let e in r.handlers){let n=r.handlers[e],[i,o]=eD[e];t.addEventListener(i,n,{passive:o})}},disconnect:()=>{let{set:t,events:n}=e.getState();if(n.connected){if(n.handlers)for(let e in n.handlers){let t=n.handlers[e],[r]=eD[e];n.connected.removeEventListener(r,t)}t(e=>({events:{...e.events,connected:void 0}}))}}}}},3307:(e,t)=>{"use strict";t.ConcurrentRoot=1,t.ContinuousEventPriority=8,t.DefaultEventPriority=32,t.DiscreteEventPriority=2},3657:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let r=n(4252),i=n(4915),o=n(2439),a=r._(n(3829));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/some19ice-portfolio/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=o.Image},3829:(e,t)=>{"use strict";function n(e){var t;let{config:n,src:r,width:i,quality:o}=e,a=o||(null==(t=n.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return n.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+a+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},3892:(e,t,n)=>{"use strict";let r,i;function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{N:()=>T});var a=n(4232),l=n(6691),s=n(2648);let c=new l.NRn,u=new l.Pq0;class f extends l.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new l.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new l.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new l.LuO(t,6,1);return this.setAttribute("instanceStart",new l.eHs(n,3,0)),this.setAttribute("instanceEnd",new l.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new l.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new l.eHs(r,t,0)),this.setAttribute("instanceColorEnd",new l.eHs(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new l.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new l.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),c.setFromBufferAttribute(t),this.boundingBox.union(c))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new l.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,o=e.count;i<o;i++)u.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(u)),u.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(u));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var d=n(4796);let p=parseInt(l.sPf.replace(/\D+/g,""));class h extends l.BKk{constructor(e){super({type:"LineMaterial",uniforms:l.LlO.clone(l.LlO.merge([d.UniformsLib.common,d.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new l.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${p>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let v=p>=125?"uv1":"uv2",m=new l.IUQ,b=new l.Pq0,g=new l.Pq0,y=new l.IUQ,w=new l.IUQ,x=new l.IUQ,S=new l.Pq0,E=new l.kn4,_=new l.cZY,j=new l.Pq0,C=new l.NRn,P=new l.iyt,O=new l.IUQ;function M(e,t,n){return O.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),O.multiplyScalar(1/O.w),O.x=i/n.width,O.y=i/n.height,O.applyMatrix4(e.projectionMatrixInverse),O.multiplyScalar(1/O.w),Math.abs(Math.max(O.x,O.y))}class z extends l.eaF{constructor(e=new f,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)b.fromBufferAttribute(t,e),g.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+b.distanceTo(g);let i=new l.LuO(r,2,1);return e.setAttribute("instanceDistanceStart",new l.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new l.eHs(i,1,1)),this}raycast(e,t){let n,o,a=this.material.worldUnits,s=e.camera;null!==s||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let c=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let u=this.matrixWorld,f=this.geometry,d=this.material;if(i=d.linewidth+c,null===f.boundingSphere&&f.computeBoundingSphere(),P.copy(f.boundingSphere).applyMatrix4(u),a)n=.5*i;else{let e=Math.max(s.near,P.distanceToPoint(r.origin));n=M(s,e,d.resolution)}if(P.radius+=n,!1!==r.intersectsSphere(P)){if(null===f.boundingBox&&f.computeBoundingBox(),C.copy(f.boundingBox).applyMatrix4(u),a)o=.5*i;else{let e=Math.max(s.near,C.distanceToPoint(r.origin));o=M(s,e,d.resolution)}C.expandByScalar(o),!1!==r.intersectsBox(C)&&(a?function(e,t){let n=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,s=o.attributes.instanceEnd,c=Math.min(o.instanceCount,a.count);for(let o=0;o<c;o++){_.start.fromBufferAttribute(a,o),_.end.fromBufferAttribute(s,o),_.applyMatrix4(n);let c=new l.Pq0,u=new l.Pq0;r.distanceSqToSegment(_.start,_.end,u,c),u.distanceTo(c)<.5*i&&t.push({point:u,pointOnLine:c,distance:r.origin.distanceTo(u),object:e,face:null,faceIndex:o,uv:null,[v]:null})}}(this,t):function(e,t,n){let o=t.projectionMatrix,a=e.material.resolution,s=e.matrixWorld,c=e.geometry,u=c.attributes.instanceStart,f=c.attributes.instanceEnd,d=Math.min(c.instanceCount,u.count),p=-t.near;r.at(1,x),x.w=1,x.applyMatrix4(t.matrixWorldInverse),x.applyMatrix4(o),x.multiplyScalar(1/x.w),x.x*=a.x/2,x.y*=a.y/2,x.z=0,S.copy(x),E.multiplyMatrices(t.matrixWorldInverse,s);for(let t=0;t<d;t++){if(y.fromBufferAttribute(u,t),w.fromBufferAttribute(f,t),y.w=1,w.w=1,y.applyMatrix4(E),w.applyMatrix4(E),y.z>p&&w.z>p)continue;if(y.z>p){let e=y.z-w.z,t=(y.z-p)/e;y.lerp(w,t)}else if(w.z>p){let e=w.z-y.z,t=(w.z-p)/e;w.lerp(y,t)}y.applyMatrix4(o),w.applyMatrix4(o),y.multiplyScalar(1/y.w),w.multiplyScalar(1/w.w),y.x*=a.x/2,y.y*=a.y/2,w.x*=a.x/2,w.y*=a.y/2,_.start.copy(y),_.start.z=0,_.end.copy(w),_.end.z=0;let c=_.closestPointToPointParameter(S,!0);_.at(c,j);let d=l.cj9.lerp(y.z,w.z,c),h=d>=-1&&d<=1,m=S.distanceTo(j)<.5*i;if(h&&m){_.start.fromBufferAttribute(u,t),_.end.fromBufferAttribute(f,t),_.start.applyMatrix4(s),_.end.applyMatrix4(s);let i=new l.Pq0,o=new l.Pq0;r.distanceSqToSegment(_.start,_.end,o,i),n.push({point:o,pointOnLine:i,distance:r.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,[v]:null})}}}(this,s,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(m),this.material.uniforms.resolution.value.set(m.z,m.w))}}class L extends f{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class A extends z{constructor(e=new L,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let T=a.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:c,dashed:u,...d},p){var v,m;let b=(0,s.C)(e=>e.size),g=a.useMemo(()=>c?new z:new A,[c]),[y]=a.useState(()=>new h),w=(null==n||null==(v=n[0])?void 0:v.length)===4?4:3,x=a.useMemo(()=>{let r=c?new f:new L,i=e.map(e=>{let t=Array.isArray(e);return e instanceof l.Pq0||e instanceof l.IUQ?[e.x,e.y,e.z]:e instanceof l.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof l.Q1f?e.toArray():e);r.setColors(e.flat(),w)}return r},[e,c,n,w]);return a.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),a.useLayoutEffect(()=>{u?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[u,y]),a.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),a.createElement("primitive",o({object:g,ref:p},d),a.createElement("primitive",{object:x,attach:"geometry"}),a.createElement("primitive",o({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[b.width,b.height],linewidth:null!=(m=null!=r?r:i)?m:1,dashed:u,transparent:4===w},d)))})},4587:(e,t,n)=>{e.exports=n(3657)},4915:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),n(546);let r=n(5284),i=n(6904),o=["-moz-initial","fill","none","scale-down",void 0];function a(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var n,s;let c,u,f,{src:d,sizes:p,unoptimized:h=!1,priority:v=!1,loading:m,className:b,quality:g,width:y,height:w,fill:x=!1,style:S,overrideSrc:E,onLoad:_,onLoadingComplete:j,placeholder:C="empty",blurDataURL:P,fetchPriority:O,decoding:M="async",layout:z,objectFit:L,objectPosition:A,lazyBoundary:T,lazyRoot:k,...I}=e,{imgConf:R,showAltText:U,blurComplete:D,defaultLoader:H}=t,B=R||i.imageConfigDefault;if("allSizes"in B)c=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),r=null==(n=B.qualities)?void 0:n.sort((e,t)=>e-t);c={...B,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===H)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let N=I.loader||H;delete I.loader,delete I.srcSet;let F="__next_img_default"in N;if(F){if("custom"===c.loader)throw Object.defineProperty(Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=N;N=t=>{let{config:n,...r}=t;return e(r)}}if(z){"fill"===z&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!p&&(p=t)}let q="",W=l(y),G=l(w);if((s=d)&&"object"==typeof s&&(a(s)||void 0!==s.src)){let e=a(d)?d.default:d;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,f=e.blurHeight,P=P||e.blurDataURL,q=e.src,!x)if(W||G){if(W&&!G){let t=W/e.width;G=Math.round(e.height*t)}else if(!W&&G){let t=G/e.height;W=Math.round(e.width*t)}}else W=e.width,G=e.height}let V=!v&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:q)||d.startsWith("data:")||d.startsWith("blob:"))&&(h=!0,V=!1),c.unoptimized&&(h=!0),F&&!c.dangerouslyAllowSVG&&d.split("?",1)[0].endsWith(".svg")&&(h=!0);let $=l(g),Y=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:A}:{},U?{}:{color:"transparent"},S),X=D||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:G,blurWidth:u,blurHeight:f,blurDataURL:P||"",objectFit:Y.objectFit})+'")':'url("'+C+'")',Q=o.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,J=X?{backgroundSize:Q,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:l({config:t,src:n,quality:o,width:s[u]})}}({config:c,src:d,unoptimized:h,width:W,quality:$,sizes:p,loader:N});return{props:{...I,loading:V?"lazy":m,fetchPriority:O,width:W,height:G,decoding:M,className:b,style:{...Y,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:E||Z.src},meta:{unoptimized:h,priority:v,placeholder:C,fill:x}}}},5284:(e,t)=>{"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,s=i?40*i:n,c=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5302:(e,t,n)=>{"use strict";n.d(t,{Hl:()=>f});var r=n(2648),i=n(4232),o=n(4796);function a(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}let l=["x","y","top","bottom","left","right","width","height"];var s=n(1831),c=n(7876);function u({ref:e,children:t,fallback:n,resize:s,style:u,gl:f,events:d=r.f,eventSource:p,eventPrefix:h,shadows:v,linear:m,flat:b,legacy:g,orthographic:y,frameloop:w,dpr:x,performance:S,raycaster:E,camera:_,scene:j,onPointerMissed:C,onCreated:P,...O}){i.useMemo(()=>(0,r.e)(o),[]);let M=(0,r.u)(),[z,L]=function({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){var o,s,c;let u=n||("undefined"==typeof window?class{}:window.ResizeObserver);if(!u)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[f,d]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),p=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:f,orientationHandler:null}),h=e?"number"==typeof e?e:e.scroll:null,v=e?"number"==typeof e?e:e.resize:null,m=(0,i.useRef)(!1);(0,i.useEffect)(()=>(m.current=!0,()=>void(m.current=!1)));let[b,g,y]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!p.current.element)return;let{left:n,top:i,width:o,height:a,bottom:s,right:c,x:u,y:f}=p.current.element.getBoundingClientRect(),h={left:n,top:i,width:o,height:a,bottom:s,right:c,x:u,y:f};p.current.element instanceof HTMLElement&&r&&(h.height=p.current.element.offsetHeight,h.width=p.current.element.offsetWidth),Object.freeze(h),m.current&&(e=p.current.lastBounds,t=h,!l.every(n=>e[n]===t[n]))&&d(p.current.lastBounds=h)};return[e,v?a(e,v):e,h?a(e,h):e]},[d,r,h,v]);function w(){p.current.scrollContainers&&(p.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",y,!0)),p.current.scrollContainers=null),p.current.resizeObserver&&(p.current.resizeObserver.disconnect(),p.current.resizeObserver=null),p.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",p.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",p.current.orientationHandler))}function x(){p.current.element&&(p.current.resizeObserver=new u(y),p.current.resizeObserver.observe(p.current.element),t&&p.current.scrollContainers&&p.current.scrollContainers.forEach(e=>e.addEventListener("scroll",y,{capture:!0,passive:!0})),p.current.orientationHandler=()=>{y()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",p.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",p.current.orientationHandler))}return o=y,s=!!t,(0,i.useEffect)(()=>{if(s)return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)},[o,s]),c=g,(0,i.useEffect)(()=>(window.addEventListener("resize",c),()=>void window.removeEventListener("resize",c)),[c]),(0,i.useEffect)(()=>{w(),x()},[t,y,g]),(0,i.useEffect)(()=>w,[]),[e=>{e&&e!==p.current.element&&(w(),p.current.element=e,p.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:i,overflowY:o}=window.getComputedStyle(t);return[r,i,o].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),x())},f,b]}({scroll:!0,debounce:{scroll:50,resize:0},...s}),A=i.useRef(null),T=i.useRef(null);i.useImperativeHandle(e,()=>A.current);let k=(0,r.a)(C),[I,R]=i.useState(!1),[U,D]=i.useState(!1);if(I)throw I;if(U)throw U;let H=i.useRef(null);(0,r.b)(()=>{let e=A.current;L.width>0&&L.height>0&&e&&(H.current||(H.current=(0,r.c)(e)),async function(){await H.current.configure({gl:f,scene:j,events:d,shadows:v,linear:m,flat:b,legacy:g,orthographic:y,frameloop:w,dpr:x,performance:S,raycaster:E,camera:_,size:L,onPointerMissed:(...e)=>null==k.current?void 0:k.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(p?(0,r.i)(p)?p.current:p:T.current),h&&e.setEvents({compute:(e,t)=>{let n=e[h+"X"],r=e[h+"Y"];t.pointer.set(n/t.size.width*2-1,-(2*(r/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==P||P(e)}}),H.current.render((0,c.jsx)(M,{children:(0,c.jsx)(r.E,{set:D,children:(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(r.B,{set:R}),children:null!=t?t:null})})}))}())}),i.useEffect(()=>{let e=A.current;if(e)return()=>(0,r.d)(e)},[]);let B=p?"none":"auto";return(0,c.jsx)("div",{ref:T,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:B,...u},...O,children:(0,c.jsx)("div",{ref:z,style:{width:"100%",height:"100%"},children:(0,c.jsx)("canvas",{ref:A,style:{display:"block"},children:n})})})}function f(e){return(0,c.jsx)(s.Af,{children:(0,c.jsx)(u,{...e})})}n(7302),n(667),n(1923)},5712:(e,t,n)=>{"use strict";e.exports=n(8214)},5965:(e,t,n)=>{"use strict";n.d(t,{k5:()=>s});var r=n(4232),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function s(e){return function(t){return r.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,i=e.attr,o=e.size,s=e.title,c=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}},7302:(e,t,n)=>{"use strict";e.exports=n(3307)},7816:(e,t)=>{"use strict";function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<o(i,t))e[r]=t,e[n]=i,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<i&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else if(c<i&&0>o(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,l=performance;t.unstable_now=function(){return l.now()}}else{var s=Date,c=s.now();t.unstable_now=function(){return s.now()-c}}var u=[],f=[],d=1,p=null,h=3,v=!1,m=!1,b=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var t=r(f);null!==t;){if(null===t.callback)i(f);else if(t.startTime<=e)i(f),t.sortIndex=t.expirationTime,n(u,t);else break;t=r(f)}}function S(e){if(b=!1,x(e),!m)if(null!==r(u))m=!0,L();else{var t=r(f);null!==t&&A(S,t.startTime-e)}}var E=!1,_=-1,j=5,C=-1;function P(){return!(t.unstable_now()-C<j)}function O(){if(E){var e=t.unstable_now();C=e;var n=!0;try{e:{m=!1,b&&(b=!1,y(_),_=-1),v=!0;var o=h;try{t:{for(x(e),p=r(u);null!==p&&!(p.expirationTime>e&&P());){var l=p.callback;if("function"==typeof l){p.callback=null,h=p.priorityLevel;var s=l(p.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof s){p.callback=s,x(e),n=!0;break t}p===r(u)&&i(u),x(e)}else i(u);p=r(u)}if(null!==p)n=!0;else{var c=r(f);null!==c&&A(S,c.startTime-e),n=!1}}break e}finally{p=null,h=o,v=!1}}}finally{n?a():E=!1}}}if("function"==typeof w)a=function(){w(O)};else if("undefined"!=typeof MessageChannel){var M=new MessageChannel,z=M.port2;M.port1.onmessage=O,a=function(){z.postMessage(null)}}else a=function(){g(O,0)};function L(){E||(E=!0,a())}function A(e,n){_=g(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||v||(m=!0,L())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>a?(e.sortIndex=o,n(f,e),null===r(u)&&e===r(f)&&(b?(y(_),_=-1):b=!0,A(S,o-a))):(e.sortIndex=l,n(u,e),m||v||(m=!0,L())),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},8214:(e,t,n)=>{"use strict";var r=n(4232),i=n(8806),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,l=r.useRef,s=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var f=l(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=a(e,(f=c(function(){function e(e){if(!s){if(s=!0,a=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return l=t}return l=e}if(t=l,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?(a=e,t):(a=e,l=n)}var a,l,s=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]))[0],f[1]);return s(function(){d.hasValue=!0,d.value=p},[p]),u(p),p}},8575:(e,t)=>{"use strict";function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<o(i,t))e[r]=t,e[n]=i,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<i&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else if(c<i&&0>o(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,l=performance;t.unstable_now=function(){return l.now()}}else{var s=Date,c=s.now();t.unstable_now=function(){return s.now()-c}}var u=[],f=[],d=1,p=null,h=3,v=!1,m=!1,b=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var t=r(f);null!==t;){if(null===t.callback)i(f);else if(t.startTime<=e)i(f),t.sortIndex=t.expirationTime,n(u,t);else break;t=r(f)}}function S(e){if(b=!1,x(e),!m)if(null!==r(u))m=!0,L();else{var t=r(f);null!==t&&A(S,t.startTime-e)}}var E=!1,_=-1,j=5,C=-1;function P(){return!(t.unstable_now()-C<j)}function O(){if(E){var e=t.unstable_now();C=e;var n=!0;try{e:{m=!1,b&&(b=!1,y(_),_=-1),v=!0;var o=h;try{t:{for(x(e),p=r(u);null!==p&&!(p.expirationTime>e&&P());){var l=p.callback;if("function"==typeof l){p.callback=null,h=p.priorityLevel;var s=l(p.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof s){p.callback=s,x(e),n=!0;break t}p===r(u)&&i(u),x(e)}else i(u);p=r(u)}if(null!==p)n=!0;else{var c=r(f);null!==c&&A(S,c.startTime-e),n=!1}}break e}finally{p=null,h=o,v=!1}}}finally{n?a():E=!1}}}if("function"==typeof w)a=function(){w(O)};else if("undefined"!=typeof MessageChannel){var M=new MessageChannel,z=M.port2;M.port1.onmessage=O,a=function(){z.postMessage(null)}}else a=function(){g(O,0)};function L(){E||(E=!0,a())}function A(e,n){_=g(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||v||(m=!0,L())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>a?(e.sortIndex=o,n(f,e),null===r(u)&&e===r(f)&&(b?(y(_),_=-1):b=!0,A(S,o-a))):(e.sortIndex=l,n(u,e),m||v||(m=!0,L())),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},8806:(e,t,n)=>{"use strict";e.exports=n(9429)},9429:(e,t,n)=>{"use strict";var r=n(4232),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,l=r.useLayoutEffect,s=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,u=r[1];return l(function(){i.value=n,i.getSnapshot=t,c(i)&&u({inst:i})},[e,n,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u}}]);