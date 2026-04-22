const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hizmetler-p99p6MLt.js","assets/proxy-BxMSc-Ad.js","assets/ServiceDetail-sEHHQ58e.js","assets/FAQItem-DT8xkpp1.js","assets/arrow-left-DVOEZmEa.js","assets/BlogPost-4ipl7TP-.js","assets/NotFound-BGGv37yT.js"])))=>i.map(i=>d[i]);
function ng(r,t){for(var s=0;s<t.length;s++){const d=t[s];if(typeof d!="string"&&!Array.isArray(d)){for(const o in d)if(o!=="default"&&!(o in r)){const h=Object.getOwnPropertyDescriptor(d,o);h&&Object.defineProperty(r,o,h.get?h:{enumerable:!0,get:()=>d[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const c of h.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(o){if(o.ep)return;o.ep=!0;const h=s(o);fetch(o.href,h)}})();function ag(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var yu={exports:{}},Xi={},bu={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function rg(){if(_h)return Ae;_h=1;var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),z=Symbol.iterator;function D(E){return E===null||typeof E!="object"?null:(E=z&&E[z]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,I={};function _(E,N,he){this.props=E,this.context=N,this.refs=I,this.updater=he||M}_.prototype.isReactComponent={},_.prototype.setState=function(E,N){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,N,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function q(){}q.prototype=_.prototype;function G(E,N,he){this.props=E,this.context=N,this.refs=I,this.updater=he||M}var ne=G.prototype=new q;ne.constructor=G,j(ne,_.prototype),ne.isPureReactComponent=!0;var be=Array.isArray,fe=Object.prototype.hasOwnProperty,ve={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function se(E,N,he){var ce,me={},ze=null,_e=null;if(N!=null)for(ce in N.ref!==void 0&&(_e=N.ref),N.key!==void 0&&(ze=""+N.key),N)fe.call(N,ce)&&!V.hasOwnProperty(ce)&&(me[ce]=N[ce]);var De=arguments.length-2;if(De===1)me.children=he;else if(1<De){for(var He=Array(De),pn=0;pn<De;pn++)He[pn]=arguments[pn+2];me.children=He}if(E&&E.defaultProps)for(ce in De=E.defaultProps,De)me[ce]===void 0&&(me[ce]=De[ce]);return{$$typeof:r,type:E,key:ze,ref:_e,props:me,_owner:ve.current}}function ke(E,N){return{$$typeof:r,type:E.type,key:N,ref:E.ref,props:E.props,_owner:E._owner}}function Ee(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function xe(E){var N={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(he){return N[he]})}var Ie=/\/+/g;function Ge(E,N){return typeof E=="object"&&E!==null&&E.key!=null?xe(""+E.key):N.toString(36)}function Ve(E,N,he,ce,me){var ze=typeof E;(ze==="undefined"||ze==="boolean")&&(E=null);var _e=!1;if(E===null)_e=!0;else switch(ze){case"string":case"number":_e=!0;break;case"object":switch(E.$$typeof){case r:case t:_e=!0}}if(_e)return _e=E,me=me(_e),E=ce===""?"."+Ge(_e,0):ce,be(me)?(he="",E!=null&&(he=E.replace(Ie,"$&/")+"/"),Ve(me,N,he,"",function(pn){return pn})):me!=null&&(Ee(me)&&(me=ke(me,he+(!me.key||_e&&_e.key===me.key?"":(""+me.key).replace(Ie,"$&/")+"/")+E)),N.push(me)),1;if(_e=0,ce=ce===""?".":ce+":",be(E))for(var De=0;De<E.length;De++){ze=E[De];var He=ce+Ge(ze,De);_e+=Ve(ze,N,he,He,me)}else if(He=D(E),typeof He=="function")for(E=He.call(E),De=0;!(ze=E.next()).done;)ze=ze.value,He=ce+Ge(ze,De++),_e+=Ve(ze,N,he,He,me);else if(ze==="object")throw N=String(E),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return _e}function Oe(E,N,he){if(E==null)return E;var ce=[],me=0;return Ve(E,ce,"","",function(ze){return N.call(he,ze,me++)}),ce}function we(E){if(E._status===-1){var N=E._result;N=N(),N.then(function(he){(E._status===0||E._status===-1)&&(E._status=1,E._result=he)},function(he){(E._status===0||E._status===-1)&&(E._status=2,E._result=he)}),E._status===-1&&(E._status=0,E._result=N)}if(E._status===1)return E._result.default;throw E._result}var pe={current:null},F={transition:null},Q={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:F,ReactCurrentOwner:ve};function O(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Oe,forEach:function(E,N,he){Oe(E,function(){N.apply(this,arguments)},he)},count:function(E){var N=0;return Oe(E,function(){N++}),N},toArray:function(E){return Oe(E,function(N){return N})||[]},only:function(E){if(!Ee(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Ae.Component=_,Ae.Fragment=s,Ae.Profiler=o,Ae.PureComponent=G,Ae.StrictMode=d,Ae.Suspense=y,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Ae.act=O,Ae.cloneElement=function(E,N,he){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ce=j({},E.props),me=E.key,ze=E.ref,_e=E._owner;if(N!=null){if(N.ref!==void 0&&(ze=N.ref,_e=ve.current),N.key!==void 0&&(me=""+N.key),E.type&&E.type.defaultProps)var De=E.type.defaultProps;for(He in N)fe.call(N,He)&&!V.hasOwnProperty(He)&&(ce[He]=N[He]===void 0&&De!==void 0?De[He]:N[He])}var He=arguments.length-2;if(He===1)ce.children=he;else if(1<He){De=Array(He);for(var pn=0;pn<He;pn++)De[pn]=arguments[pn+2];ce.children=De}return{$$typeof:r,type:E.type,key:me,ref:ze,props:ce,_owner:_e}},Ae.createContext=function(E){return E={$$typeof:c,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:h,_context:E},E.Consumer=E},Ae.createElement=se,Ae.createFactory=function(E){var N=se.bind(null,E);return N.type=E,N},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(E){return{$$typeof:m,render:E}},Ae.isValidElement=Ee,Ae.lazy=function(E){return{$$typeof:p,_payload:{_status:-1,_result:E},_init:we}},Ae.memo=function(E,N){return{$$typeof:f,type:E,compare:N===void 0?null:N}},Ae.startTransition=function(E){var N=F.transition;F.transition={};try{E()}finally{F.transition=N}},Ae.unstable_act=O,Ae.useCallback=function(E,N){return pe.current.useCallback(E,N)},Ae.useContext=function(E){return pe.current.useContext(E)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(E){return pe.current.useDeferredValue(E)},Ae.useEffect=function(E,N){return pe.current.useEffect(E,N)},Ae.useId=function(){return pe.current.useId()},Ae.useImperativeHandle=function(E,N,he){return pe.current.useImperativeHandle(E,N,he)},Ae.useInsertionEffect=function(E,N){return pe.current.useInsertionEffect(E,N)},Ae.useLayoutEffect=function(E,N){return pe.current.useLayoutEffect(E,N)},Ae.useMemo=function(E,N){return pe.current.useMemo(E,N)},Ae.useReducer=function(E,N,he){return pe.current.useReducer(E,N,he)},Ae.useRef=function(E){return pe.current.useRef(E)},Ae.useState=function(E){return pe.current.useState(E)},Ae.useSyncExternalStore=function(E,N,he){return pe.current.useSyncExternalStore(E,N,he)},Ae.useTransition=function(){return pe.current.useTransition()},Ae.version="18.3.1",Ae}var Nh;function $u(){return Nh||(Nh=1,bu.exports=rg()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function ig(){if(Ih)return Xi;Ih=1;var r=$u(),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(m,y,f){var p,z={},D=null,M=null;f!==void 0&&(D=""+f),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&(M=y.ref);for(p in y)d.call(y,p)&&!h.hasOwnProperty(p)&&(z[p]=y[p]);if(m&&m.defaultProps)for(p in y=m.defaultProps,y)z[p]===void 0&&(z[p]=y[p]);return{$$typeof:t,type:m,key:D,ref:M,props:z,_owner:o.current}}return Xi.Fragment=s,Xi.jsx=c,Xi.jsxs=c,Xi}var Ch;function tg(){return Ch||(Ch=1,yu.exports=ig()),yu.exports}var k=tg(),Tl={},vu={exports:{}},Vn={},pu={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function lg(){return Ph||(Ph=1,(function(r){function t(F,Q){var O=F.length;F.push(Q);e:for(;0<O;){var E=O-1>>>1,N=F[E];if(0<o(N,Q))F[E]=Q,F[O]=N,O=E;else break e}}function s(F){return F.length===0?null:F[0]}function d(F){if(F.length===0)return null;var Q=F[0],O=F.pop();if(O!==Q){F[0]=O;e:for(var E=0,N=F.length,he=N>>>1;E<he;){var ce=2*(E+1)-1,me=F[ce],ze=ce+1,_e=F[ze];if(0>o(me,O))ze<N&&0>o(_e,me)?(F[E]=_e,F[ze]=O,E=ze):(F[E]=me,F[ce]=O,E=ce);else if(ze<N&&0>o(_e,O))F[E]=_e,F[ze]=O,E=ze;else break e}}return Q}function o(F,Q){var O=F.sortIndex-Q.sortIndex;return O!==0?O:F.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var c=Date,m=c.now();r.unstable_now=function(){return c.now()-m}}var y=[],f=[],p=1,z=null,D=3,M=!1,j=!1,I=!1,_=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(F){for(var Q=s(f);Q!==null;){if(Q.callback===null)d(f);else if(Q.startTime<=F)d(f),Q.sortIndex=Q.expirationTime,t(y,Q);else break;Q=s(f)}}function be(F){if(I=!1,ne(F),!j)if(s(y)!==null)j=!0,we(fe);else{var Q=s(f);Q!==null&&pe(be,Q.startTime-F)}}function fe(F,Q){j=!1,I&&(I=!1,q(se),se=-1),M=!0;var O=D;try{for(ne(Q),z=s(y);z!==null&&(!(z.expirationTime>Q)||F&&!xe());){var E=z.callback;if(typeof E=="function"){z.callback=null,D=z.priorityLevel;var N=E(z.expirationTime<=Q);Q=r.unstable_now(),typeof N=="function"?z.callback=N:z===s(y)&&d(y),ne(Q)}else d(y);z=s(y)}if(z!==null)var he=!0;else{var ce=s(f);ce!==null&&pe(be,ce.startTime-Q),he=!1}return he}finally{z=null,D=O,M=!1}}var ve=!1,V=null,se=-1,ke=5,Ee=-1;function xe(){return!(r.unstable_now()-Ee<ke)}function Ie(){if(V!==null){var F=r.unstable_now();Ee=F;var Q=!0;try{Q=V(!0,F)}finally{Q?Ge():(ve=!1,V=null)}}else ve=!1}var Ge;if(typeof G=="function")Ge=function(){G(Ie)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Oe=Ve.port2;Ve.port1.onmessage=Ie,Ge=function(){Oe.postMessage(null)}}else Ge=function(){_(Ie,0)};function we(F){V=F,ve||(ve=!0,Ge())}function pe(F,Q){se=_(function(){F(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){j||M||(j=!0,we(fe))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return s(y)},r.unstable_next=function(F){switch(D){case 1:case 2:case 3:var Q=3;break;default:Q=D}var O=D;D=Q;try{return F()}finally{D=O}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var O=D;D=F;try{return Q()}finally{D=O}},r.unstable_scheduleCallback=function(F,Q,O){var E=r.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?E+O:E):O=E,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=O+N,F={id:p++,callback:Q,priorityLevel:F,startTime:O,expirationTime:N,sortIndex:-1},O>E?(F.sortIndex=O,t(f,F),s(y)===null&&F===s(f)&&(I?(q(se),se=-1):I=!0,pe(be,O-E))):(F.sortIndex=N,t(y,F),j||M||(j=!0,we(fe))),F},r.unstable_shouldYield=xe,r.unstable_wrapCallback=function(F){var Q=D;return function(){var O=D;D=Q;try{return F.apply(this,arguments)}finally{D=O}}}})(zu)),zu}var Wh;function sg(){return Wh||(Wh=1,pu.exports=lg()),pu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function ug(){if(Fh)return Vn;Fh=1;var r=$u(),t=sg();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,o={};function h(e,n){c(e,n),c(e+"Capture",n)}function c(e,n){for(o[e]=n,e=0;e<n.length;e++)d.add(n[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},z={};function D(e){return y.call(z,e)?!0:y.call(p,e)?!1:f.test(e)?z[e]=!0:(p[e]=!0,!1)}function M(e,n,a,i){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,a,i){if(n===null||typeof n>"u"||M(e,n,a,i))return!0;if(i)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function I(e,n,a,i,l,u,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=a,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=g}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];_[n]=new I(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(q,G);_[n]=new I(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(q,G);_[n]=new I(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(q,G);_[n]=new I(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,n,a,i){var l=_.hasOwnProperty(n)?_[n]:null;(l!==null?l.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,a,l,i)&&(a=null),i||l===null?D(n)&&(a===null?e.removeAttribute(n):e.setAttribute(n,""+a)):l.mustUseProperty?e[l.propertyName]=a===null?l.type===3?!1:"":a:(n=l.attributeName,i=l.attributeNamespace,a===null?e.removeAttribute(n):(l=l.type,a=l===3||l===4&&a===!0?"":""+a,i?e.setAttributeNS(i,n,a):e.setAttribute(n,a))))}var be=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),ve=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),xe=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),F=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,E;function N(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+e}var he=!1;function ce(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(K){var i=K}Reflect.construct(e,[],n)}else{try{n.call()}catch(K){i=K}e.call(n.prototype)}else{try{throw Error()}catch(K){i=K}e()}}catch(K){if(K&&i&&typeof K.stack=="string"){for(var l=K.stack.split(`
`),u=i.stack.split(`
`),g=l.length-1,b=u.length-1;1<=g&&0<=b&&l[g]!==u[b];)b--;for(;1<=g&&0<=b;g--,b--)if(l[g]!==u[b]){if(g!==1||b!==1)do if(g--,b--,0>b||l[g]!==u[b]){var T=`
`+l[g].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=g&&0<=b);break}}}finally{he=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?N(e):""}function me(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function ze(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case ve:return"Portal";case ke:return"Profiler";case se:return"StrictMode";case Ge:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case Ee:return(e._context.displayName||"Context")+".Provider";case Ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return n=e.displayName||null,n!==null?n:ze(e.type)||"Memo";case we:n=e._payload,e=e._init;try{return ze(e(n))}catch{}}return null}function _e(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ze(n);case 8:return n===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function De(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function He(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pn(e){var n=He(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,u=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,u.call(this,g)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vr(e){e._valueTracker||(e._valueTracker=pn(e))}function tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=He(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function Xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _r(e,n){var a=n.checked;return O({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function kt(e,n){var a=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;a=De(n.value!=null?n.value:a),e._wrapperState={initialChecked:i,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function sa(e,n){n=n.checked,n!=null&&ne(e,"checked",n,!1)}function mi(e,n){sa(e,n);var a=De(n.value),i=n.type;if(a!=null)i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Nr(e,n.type,a):n.hasOwnProperty("defaultValue")&&Nr(e,n.type,De(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function gt(e,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,a||n===e.value||(e.value=n),e.defaultValue=n}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Nr(e,n,a){(n!=="number"||Xn(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var dr=Array.isArray;function Ma(e,n,a,i){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+De(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ci(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return O({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ft(e,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(s(92));if(dr(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),a=n}e._wrapperState={initialValue:De(a)}}function ua(e,n){var a=De(n.value),i=De(n.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),n.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),i!=null&&(e.defaultValue=""+i)}function Ka(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ki(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function or(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ki(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var An,jn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,i,l){MSApp.execUnsafeLocalFunction(function(){return e(n,a,i,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(An=An||document.createElement("div"),An.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=An.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Va(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gi=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){gi.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),hr[n]=hr[e]})});function yt(e,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||hr.hasOwnProperty(e)&&hr[e]?(""+n).trim():n+"px"}function Gn(e,n){e=e.style;for(var a in n)if(n.hasOwnProperty(a)){var i=a.indexOf("--")===0,l=yt(a,n[a],i);a==="float"&&(a="cssFloat"),i?e.setProperty(a,l):e[a]=l}}var bt=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ir(e,n){if(n){if(bt[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Cr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function Pr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,ya=null,da=null;function vt(e){if(e=Pi(e)){if(typeof _a!="function")throw Error(s(280));var n=e.stateNode;n&&(n=Ct(n),_a(e.stateNode,e.type,n))}}function yi(e){ya?da?da.push(e):da=[e]:ya=e}function pt(){if(ya){var e=ya,n=da;if(da=ya=null,vt(e),n)for(e=0;e<n.length;e++)vt(n[e])}}function bi(e,n){return e(n)}function mr(){}var Na=!1;function vi(e,n,a){if(Na)return e(n,a);Na=!0;try{return bi(e,n,a)}finally{Na=!1,(ya!==null||da!==null)&&(mr(),pt())}}function cr(e,n){var a=e.stateNode;if(a===null)return null;var i=Ct(a);if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pi=!1;if(m)try{var v={};Object.defineProperty(v,"passive",{get:function(){pi=!0}}),window.addEventListener("test",v,v),window.removeEventListener("test",v,v)}catch{pi=!1}function A(e,n,a,i,l,u,g,b,T){var K=Array.prototype.slice.call(arguments,3);try{n.apply(a,K)}catch(W){this.onError(W)}}var x=!1,P=null,U=!1,ie=null,ue={onError:function(e){x=!0,P=e}};function $(e,n,a,i,l,u,g,b,T){x=!1,P=null,A.apply(ue,arguments)}function X(e,n,a,i,l,u,g,b,T){if($.apply(this,arguments),x){if(x){var K=P;x=!1,P=null}else throw Error(s(198));U||(U=!0,ie=K)}}function ae(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function ye(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function le(e){if(ae(e)!==e)throw Error(s(188))}function Te(e){var n=e.alternate;if(!n){if(n=ae(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,i=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return le(l),e;if(u===i)return le(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==i.return)a=l,i=u;else{for(var g=!1,b=l.child;b;){if(b===a){g=!0,a=l,i=u;break}if(b===i){g=!0,i=l,a=u;break}b=b.sibling}if(!g){for(b=u.child;b;){if(b===a){g=!0,a=u,i=l;break}if(b===i){g=!0,i=u,a=l;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Re(e){return e=Te(e),e!==null?an(e):null}function an(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=an(e);if(n!==null)return n;e=e.sibling}return null}var en=t.unstable_scheduleCallback,un=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Dn=t.unstable_requestPaint,Ce=t.unstable_now,kr=t.unstable_getCurrentPriorityLevel,Ln=t.unstable_ImmediatePriority,_n=t.unstable_UserBlockingPriority,Ia=t.unstable_NormalPriority,gr=t.unstable_LowPriority,oa=t.unstable_IdlePriority,ba=null,zn=null;function Be(e){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(ba,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:qe,Ca=Math.log,va=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ca(e)/va|0)|0}var pa=64,fr=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zt(e,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,u=e.pingedLanes,g=a&268435455;if(g!==0){var b=g&~l;b!==0?i=yr(b):(u&=g,u!==0&&(i=yr(u)))}else g=a&~l,g!==0?i=yr(g):u!==0&&(i=yr(u));if(i===0)return 0;if(n!==0&&n!==i&&(n&l)===0&&(l=i&-i,u=n&-n,l>=u||l===16&&(u&4194240)!==0))return n;if((i&4)!==0&&(i|=a&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)a=31-We(n),l=1<<a,i|=e[a],n&=~l;return i}function pc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var g=31-We(u),b=1<<g,T=l[g];T===-1?((b&a)===0||(b&i)!==0)&&(l[g]=pc(b,n)):T<=n&&(e.expiredLanes|=b),u&=~b}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=pa;return pa<<=1,(pa&4194240)===0&&(pa=64),e}function Wl(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zi(e,n,a){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=a}function Tc(e,n){var a=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<a;){var l=31-We(a),u=1<<l;n[l]=0,i[l]=-1,e[l]=-1,a&=~u}}function Fl(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-We(a),l=1<<i;l&n|e[i]&n&&(e[i]|=n),a&=~l}}var Pe=0;function hd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var md,Hl,cd,kd,gd,jl=!1,Tt=[],Pa=null,Wa=null,Fa=null,Ti=new Map,wi=new Map,Ha=[],wc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Ti.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(n.pointerId)}}function Si(e,n,a,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},n!==null&&(n=Pi(n),n!==null&&Hl(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Sc(e,n,a,i,l){switch(n){case"focusin":return Pa=Si(Pa,e,n,a,i,l),!0;case"dragenter":return Wa=Si(Wa,e,n,a,i,l),!0;case"mouseover":return Fa=Si(Fa,e,n,a,i,l),!0;case"pointerover":var u=l.pointerId;return Ti.set(u,Si(Ti.get(u)||null,e,n,a,i,l)),!0;case"gotpointercapture":return u=l.pointerId,wi.set(u,Si(wi.get(u)||null,e,n,a,i,l)),!0}return!1}function yd(e){var n=br(e.target);if(n!==null){var a=ae(n);if(a!==null){if(n=a.tag,n===13){if(n=ye(a),n!==null){e.blockedOn=n,gd(e.priority,function(){cd(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ll(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);fi=i,a.target.dispatchEvent(i),fi=null}else return n=Pi(a),n!==null&&Hl(n),e.blockedOn=a,!1;n.shift()}return!0}function bd(e,n,a){wt(e)&&a.delete(n)}function Ec(){jl=!1,Pa!==null&&wt(Pa)&&(Pa=null),Wa!==null&&wt(Wa)&&(Wa=null),Fa!==null&&wt(Fa)&&(Fa=null),Ti.forEach(bd),wi.forEach(bd)}function Ei(e,n){e.blockedOn===n&&(e.blockedOn=null,jl||(jl=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ec)))}function Ai(e){function n(l){return Ei(l,e)}if(0<Tt.length){Ei(Tt[0],e);for(var a=1;a<Tt.length;a++){var i=Tt[a];i.blockedOn===e&&(i.blockedOn=null)}}for(Pa!==null&&Ei(Pa,e),Wa!==null&&Ei(Wa,e),Fa!==null&&Ei(Fa,e),Ti.forEach(n),wi.forEach(n),a=0;a<Ha.length;a++)i=Ha[a],i.blockedOn===e&&(i.blockedOn=null);for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)yd(a),a.blockedOn===null&&Ha.shift()}var Wr=be.ReactCurrentBatchConfig,St=!0;function Ac(e,n,a,i){var l=Pe,u=Wr.transition;Wr.transition=null;try{Pe=1,Gl(e,n,a,i)}finally{Pe=l,Wr.transition=u}}function Dc(e,n,a,i){var l=Pe,u=Wr.transition;Wr.transition=null;try{Pe=4,Gl(e,n,a,i)}finally{Pe=l,Wr.transition=u}}function Gl(e,n,a,i){if(St){var l=Ll(e,n,a,i);if(l===null)ss(e,n,i,Et,a),fd(e,i);else if(Sc(l,e,n,a,i))i.stopPropagation();else if(fd(e,i),n&4&&-1<wc.indexOf(e)){for(;l!==null;){var u=Pi(l);if(u!==null&&md(u),u=Ll(e,n,a,i),u===null&&ss(e,n,i,Et,a),u===l)break;l=u}l!==null&&i.stopPropagation()}else ss(e,n,i,null,a)}}var Et=null;function Ll(e,n,a,i){if(Et=null,e=Pr(i),e=br(e),e!==null)if(n=ae(e),n===null)e=null;else if(a=n.tag,a===13){if(e=ye(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Et=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kr()){case Ln:return 1;case _n:return 4;case Ia:case gr:return 16;case oa:return 536870912;default:return 16}default:return 16}}var ja=null,Ul=null,At=null;function pd(){if(At)return At;var e,n=Ul,a=n.length,i,l="value"in ja?ja.value:ja.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var g=a-e;for(i=1;i<=g&&n[a-i]===l[u-i];i++);return At=l.slice(e,1<i?1-i:void 0)}function Dt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rt(){return!0}function zd(){return!1}function Nn(e){function n(a,i,l,u,g){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Rt:zd,this.isPropagationStopped=zd,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rt)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rt)},persist:function(){},isPersistent:Rt}),n}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Nn(Fr),Di=O({},Fr,{view:0,detail:0}),Rc=Nn(Di),ql,Yl,Ri,Bt=O({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ri&&(Ri&&e.type==="mousemove"?(ql=e.screenX-Ri.screenX,Yl=e.screenY-Ri.screenY):Yl=ql=0,Ri=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),Td=Nn(Bt),Bc=O({},Bt,{dataTransfer:0}),xc=Nn(Bc),Mc=O({},Di,{relatedTarget:0}),Zl=Nn(Mc),Kc=O({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vc=Nn(Kc),_c=O({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nc=Nn(_c),Ic=O({},Fr,{data:0}),wd=Nn(Ic),Cc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wc[e])?!!n[e]:!1}function $l(){return Fc}var Hc=O({},Di,{key:function(e){if(e.key){var n=Cc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?Dt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jc=Nn(Hc),Gc=O({},Bt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=Nn(Gc),Lc=O({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Uc=Nn(Lc),Oc=O({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qc=Nn(Oc),Yc=O({},Bt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zc=Nn(Yc),$c=[9,13,27,32],Jl=m&&"CompositionEvent"in window,Bi=null;m&&"documentMode"in document&&(Bi=document.documentMode);var Jc=m&&"TextEvent"in window&&!Bi,Ed=m&&(!Jl||Bi&&8<Bi&&11>=Bi),Ad=" ",Dd=!1;function Rd(e,n){switch(e){case"keyup":return $c.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function Qc(e,n){switch(e){case"compositionend":return Bd(n);case"keypress":return n.which!==32?null:(Dd=!0,Ad);case"textInput":return e=n.data,e===Ad&&Dd?null:e;default:return null}}function Xc(e,n){if(Hr)return e==="compositionend"||!Jl&&Rd(e,n)?(e=pd(),At=Ul=ja=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ed&&n.locale!=="ko"?null:n.data;default:return null}}var ek={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ek[e.type]:n==="textarea"}function Md(e,n,a,i){yi(i),n=_t(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var xi=null,Mi=null;function nk(e){Zd(e,0)}function xt(e){var n=Or(e);if(tn(n))return e}function ak(e,n){if(e==="change")return n}var Kd=!1;if(m){var Ql;if(m){var Xl="oninput"in document;if(!Xl){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Xl=typeof Vd.oninput=="function"}Ql=Xl}else Ql=!1;Kd=Ql&&(!document.documentMode||9<document.documentMode)}function _d(){xi&&(xi.detachEvent("onpropertychange",Nd),Mi=xi=null)}function Nd(e){if(e.propertyName==="value"&&xt(Mi)){var n=[];Md(n,Mi,e,Pr(e)),vi(nk,n)}}function rk(e,n,a){e==="focusin"?(_d(),xi=n,Mi=a,xi.attachEvent("onpropertychange",Nd)):e==="focusout"&&_d()}function ik(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xt(Mi)}function tk(e,n){if(e==="click")return xt(n)}function lk(e,n){if(e==="input"||e==="change")return xt(n)}function sk(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ea=typeof Object.is=="function"?Object.is:sk;function Ki(e,n){if(ea(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!y.call(n,l)||!ea(e[l],n[l]))return!1}return!0}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cd(e,n){var a=Id(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Id(a)}}function Pd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wd(){for(var e=window,n=Xn();n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xn(e.document)}return n}function es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function uk(e){var n=Wd(),a=e.focusedElem,i=e.selectionRange;if(n!==a&&a&&a.ownerDocument&&Pd(a.ownerDocument.documentElement,a)){if(i!==null&&es(a)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(e,a.value.length);else if(e=(n=a.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=a.textContent.length,u=Math.min(i.start,l);i=i.end===void 0?u:Math.min(i.end,l),!e.extend&&u>i&&(l=i,i=u,u=l),l=Cd(a,u);var g=Cd(a,i);l&&g&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),u>i?(e.addRange(n),e.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),e.addRange(n)))}}for(n=[],e=a;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)e=n[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dk=m&&"documentMode"in document&&11>=document.documentMode,jr=null,ns=null,Vi=null,as=!1;function Fd(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;as||jr==null||jr!==Xn(i)||(i=jr,"selectionStart"in i&&es(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vi&&Ki(Vi,i)||(Vi=i,i=_t(ns,"onSelect"),0<i.length&&(n=new Ol("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=jr)))}function Mt(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gr={animationend:Mt("Animation","AnimationEnd"),animationiteration:Mt("Animation","AnimationIteration"),animationstart:Mt("Animation","AnimationStart"),transitionend:Mt("Transition","TransitionEnd")},rs={},Hd={};m&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function Kt(e){if(rs[e])return rs[e];if(!Gr[e])return e;var n=Gr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hd)return rs[e]=n[a];return e}var jd=Kt("animationend"),Gd=Kt("animationiteration"),Ld=Kt("animationstart"),Ud=Kt("transitionend"),Od=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ga(e,n){Od.set(e,n),h(n,[e])}for(var is=0;is<qd.length;is++){var ts=qd[is],ok=ts.toLowerCase(),hk=ts[0].toUpperCase()+ts.slice(1);Ga(ok,"on"+hk)}Ga(jd,"onAnimationEnd"),Ga(Gd,"onAnimationIteration"),Ga(Ld,"onAnimationStart"),Ga("dblclick","onDoubleClick"),Ga("focusin","onFocus"),Ga("focusout","onBlur"),Ga(Ud,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mk=new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));function Yd(e,n,a){var i=e.type||"unknown-event";e.currentTarget=a,X(i,n,void 0,e),e.currentTarget=null}function Zd(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var u=void 0;if(n)for(var g=i.length-1;0<=g;g--){var b=i[g],T=b.instance,K=b.currentTarget;if(b=b.listener,T!==u&&l.isPropagationStopped())break e;Yd(l,b,K),u=T}else for(g=0;g<i.length;g++){if(b=i[g],T=b.instance,K=b.currentTarget,b=b.listener,T!==u&&l.isPropagationStopped())break e;Yd(l,b,K),u=T}}}if(U)throw e=ie,U=!1,ie=null,e}function Le(e,n){var a=n[cs];a===void 0&&(a=n[cs]=new Set);var i=e+"__bubble";a.has(i)||($d(n,e,2,!1),a.add(i))}function ls(e,n,a){var i=0;n&&(i|=4),$d(a,e,i,n)}var Vt="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[Vt]){e[Vt]=!0,d.forEach(function(a){a!=="selectionchange"&&(mk.has(a)||ls(a,!1,e),ls(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vt]||(n[Vt]=!0,ls("selectionchange",!1,n))}}function $d(e,n,a,i){switch(vd(n)){case 1:var l=Ac;break;case 4:l=Dc;break;default:l=Gl}a=l.bind(null,n,a,e),l=void 0,!pi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function ss(e,n,a,i,l){var u=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var b=i.stateNode.containerInfo;if(b===l||b.nodeType===8&&b.parentNode===l)break;if(g===4)for(g=i.return;g!==null;){var T=g.tag;if((T===3||T===4)&&(T=g.stateNode.containerInfo,T===l||T.nodeType===8&&T.parentNode===l))return;g=g.return}for(;b!==null;){if(g=br(b),g===null)return;if(T=g.tag,T===5||T===6){i=u=g;continue e}b=b.parentNode}}i=i.return}vi(function(){var K=u,W=Pr(a),H=[];e:{var C=Od.get(e);if(C!==void 0){var Z=Ol,ee=e;switch(e){case"keypress":if(Dt(a)===0)break e;case"keydown":case"keyup":Z=jc;break;case"focusin":ee="focus",Z=Zl;break;case"focusout":ee="blur",Z=Zl;break;case"beforeblur":case"afterblur":Z=Zl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=xc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Uc;break;case jd:case Gd:case Ld:Z=Vc;break;case Ud:Z=qc;break;case"scroll":Z=Rc;break;case"wheel":Z=Zc;break;case"copy":case"cut":case"paste":Z=Nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Sd}var re=(n&4)!==0,nn=!re&&e==="scroll",R=re?C!==null?C+"Capture":null:C;re=[];for(var S=K,B;S!==null;){B=S;var L=B.stateNode;if(B.tag===5&&L!==null&&(B=L,R!==null&&(L=cr(S,R),L!=null&&re.push(Ii(S,L,B)))),nn)break;S=S.return}0<re.length&&(C=new Z(C,ee,null,a,W),H.push({event:C,listeners:re}))}}if((n&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",C&&a!==fi&&(ee=a.relatedTarget||a.fromElement)&&(br(ee)||ee[za]))break e;if((Z||C)&&(C=W.window===W?W:(C=W.ownerDocument)?C.defaultView||C.parentWindow:window,Z?(ee=a.relatedTarget||a.toElement,Z=K,ee=ee?br(ee):null,ee!==null&&(nn=ae(ee),ee!==nn||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(Z=null,ee=K),Z!==ee)){if(re=Td,L="onMouseLeave",R="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(re=Sd,L="onPointerLeave",R="onPointerEnter",S="pointer"),nn=Z==null?C:Or(Z),B=ee==null?C:Or(ee),C=new re(L,S+"leave",Z,a,W),C.target=nn,C.relatedTarget=B,L=null,br(W)===K&&(re=new re(R,S+"enter",ee,a,W),re.target=B,re.relatedTarget=nn,L=re),nn=L,Z&&ee)n:{for(re=Z,R=ee,S=0,B=re;B;B=Lr(B))S++;for(B=0,L=R;L;L=Lr(L))B++;for(;0<S-B;)re=Lr(re),S--;for(;0<B-S;)R=Lr(R),B--;for(;S--;){if(re===R||R!==null&&re===R.alternate)break n;re=Lr(re),R=Lr(R)}re=null}else re=null;Z!==null&&Jd(H,C,Z,re,!1),ee!==null&&nn!==null&&Jd(H,nn,ee,re,!0)}}e:{if(C=K?Or(K):window,Z=C.nodeName&&C.nodeName.toLowerCase(),Z==="select"||Z==="input"&&C.type==="file")var te=ak;else if(xd(C))if(Kd)te=lk;else{te=ik;var de=rk}else(Z=C.nodeName)&&Z.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(te=tk);if(te&&(te=te(e,K))){Md(H,te,a,W);break e}de&&de(e,C,K),e==="focusout"&&(de=C._wrapperState)&&de.controlled&&C.type==="number"&&Nr(C,"number",C.value)}switch(de=K?Or(K):window,e){case"focusin":(xd(de)||de.contentEditable==="true")&&(jr=de,ns=K,Vi=null);break;case"focusout":Vi=ns=jr=null;break;case"mousedown":as=!0;break;case"contextmenu":case"mouseup":case"dragend":as=!1,Fd(H,a,W);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":Fd(H,a,W)}var oe;if(Jl)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Hr?Rd(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Ed&&a.locale!=="ko"&&(Hr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Hr&&(oe=pd()):(ja=W,Ul="value"in ja?ja.value:ja.textContent,Hr=!0)),de=_t(K,ge),0<de.length&&(ge=new wd(ge,e,null,a,W),H.push({event:ge,listeners:de}),oe?ge.data=oe:(oe=Bd(a),oe!==null&&(ge.data=oe)))),(oe=Jc?Qc(e,a):Xc(e,a))&&(K=_t(K,"onBeforeInput"),0<K.length&&(W=new wd("onBeforeInput","beforeinput",null,a,W),H.push({event:W,listeners:K}),W.data=oe))}Zd(H,n)})}function Ii(e,n,a){return{instance:e,listener:n,currentTarget:a}}function _t(e,n){for(var a=n+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=cr(e,a),u!=null&&i.unshift(Ii(e,u,l)),u=cr(e,n),u!=null&&i.push(Ii(e,u,l))),e=e.return}return i}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jd(e,n,a,i,l){for(var u=n._reactName,g=[];a!==null&&a!==i;){var b=a,T=b.alternate,K=b.stateNode;if(T!==null&&T===i)break;b.tag===5&&K!==null&&(b=K,l?(T=cr(a,u),T!=null&&g.unshift(Ii(a,T,b))):l||(T=cr(a,u),T!=null&&g.push(Ii(a,T,b)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var ck=/\r\n?/g,kk=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(ck,`
`).replace(kk,"")}function Nt(e,n,a){if(n=Qd(n),Qd(e)!==n&&a)throw Error(s(425))}function It(){}var us=null,ds=null;function os(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hs=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,fk=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(yk)}:hs;function yk(e){setTimeout(function(){throw e})}function ms(e,n){var a=n,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(i===0){e.removeChild(l),Ai(n);return}i--}else a!=="$"&&a!=="$?"&&a!=="$!"||i++;a=l}while(a);Ai(n)}function La(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function eo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),ha="__reactFiber$"+Ur,Ci="__reactProps$"+Ur,za="__reactContainer$"+Ur,cs="__reactEvents$"+Ur,bk="__reactListeners$"+Ur,vk="__reactHandles$"+Ur;function br(e){var n=e[ha];if(n)return n;for(var a=e.parentNode;a;){if(n=a[za]||a[ha]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=eo(e);e!==null;){if(a=e[ha])return a;e=eo(e)}return n}e=a,a=e.parentNode}return null}function Pi(e){return e=e[ha]||e[za],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ct(e){return e[Ci]||null}var ks=[],qr=-1;function Ua(e){return{current:e}}function Ue(e){0>qr||(e.current=ks[qr],ks[qr]=null,qr--)}function je(e,n){qr++,ks[qr]=e.current,e.current=n}var Oa={},gn=Ua(Oa),Rn=Ua(!1),vr=Oa;function Yr(e,n){var a=e.type.contextTypes;if(!a)return Oa;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in a)l[u]=n[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Bn(e){return e=e.childContextTypes,e!=null}function Pt(){Ue(Rn),Ue(gn)}function no(e,n,a){if(gn.current!==Oa)throw Error(s(168));je(gn,n),je(Rn,a)}function ao(e,n,a){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return a;i=i.getChildContext();for(var l in i)if(!(l in n))throw Error(s(108,_e(e)||"Unknown",l));return O({},a,i)}function Wt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oa,vr=gn.current,je(gn,e),je(Rn,Rn.current),!0}function ro(e,n,a){var i=e.stateNode;if(!i)throw Error(s(169));a?(e=ao(e,n,vr),i.__reactInternalMemoizedMergedChildContext=e,Ue(Rn),Ue(gn),je(gn,e)):Ue(Rn),je(Rn,a)}var Ta=null,Ft=!1,gs=!1;function io(e){Ta===null?Ta=[e]:Ta.push(e)}function pk(e){Ft=!0,io(e)}function qa(){if(!gs&&Ta!==null){gs=!0;var e=0,n=Pe;try{var a=Ta;for(Pe=1;e<a.length;e++){var i=a[e];do i=i(!0);while(i!==null)}Ta=null,Ft=!1}catch(l){throw Ta!==null&&(Ta=Ta.slice(e+1)),en(Ln,qa),l}finally{Pe=n,gs=!1}}return null}var Zr=[],$r=0,Ht=null,jt=0,Un=[],On=0,pr=null,wa=1,Sa="";function zr(e,n){Zr[$r++]=jt,Zr[$r++]=Ht,Ht=e,jt=n}function to(e,n,a){Un[On++]=wa,Un[On++]=Sa,Un[On++]=pr,pr=e;var i=wa;e=Sa;var l=32-We(i)-1;i&=~(1<<l),a+=1;var u=32-We(n)+l;if(30<u){var g=l-l%5;u=(i&(1<<g)-1).toString(32),i>>=g,l-=g,wa=1<<32-We(n)+l|a<<l|i,Sa=u+e}else wa=1<<u|a<<l|i,Sa=e}function fs(e){e.return!==null&&(zr(e,1),to(e,1,0))}function ys(e){for(;e===Ht;)Ht=Zr[--$r],Zr[$r]=null,jt=Zr[--$r],Zr[$r]=null;for(;e===pr;)pr=Un[--On],Un[On]=null,Sa=Un[--On],Un[On]=null,wa=Un[--On],Un[On]=null}var In=null,Cn=null,Ye=!1,na=null;function lo(e,n){var a=$n(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=e,n=e.deletions,n===null?(e.deletions=[a],e.flags|=16):n.push(a)}function so(e,n){switch(e.tag){case 5:var a=e.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,In=e,Cn=La(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,In=e,Cn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=pr!==null?{id:wa,overflow:Sa}:null,e.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=$n(18,null,null,0),a.stateNode=n,a.return=e,e.child=a,In=e,Cn=null,!0):!1;default:return!1}}function bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(Ye){var n=Cn;if(n){var a=n;if(!so(e,n)){if(bs(e))throw Error(s(418));n=La(a.nextSibling);var i=In;n&&so(e,n)?lo(i,a):(e.flags=e.flags&-4097|2,Ye=!1,In=e)}}else{if(bs(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ye=!1,In=e}}}function uo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;In=e}function Gt(e){if(e!==In)return!1;if(!Ye)return uo(e),Ye=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!os(e.type,e.memoizedProps)),n&&(n=Cn)){if(bs(e))throw oo(),Error(s(418));for(;n;)lo(e,n),n=La(n.nextSibling)}if(uo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(n===0){Cn=La(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}e=e.nextSibling}Cn=null}}else Cn=In?La(e.stateNode.nextSibling):null;return!0}function oo(){for(var e=Cn;e;)e=La(e.nextSibling)}function Jr(){Cn=In=null,Ye=!1}function ps(e){na===null?na=[e]:na.push(e)}var zk=be.ReactCurrentBatchConfig;function Wi(e,n,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(s(309));var i=a.stateNode}if(!i)throw Error(s(147,e));var l=i,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(g){var b=l.refs;g===null?delete b[u]:b[u]=g},n._stringRef=u,n)}if(typeof e!="string")throw Error(s(284));if(!a._owner)throw Error(s(290,e))}return e}function Lt(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ho(e){var n=e._init;return n(e._payload)}function mo(e){function n(R,S){if(e){var B=R.deletions;B===null?(R.deletions=[S],R.flags|=16):B.push(S)}}function a(R,S){if(!e)return null;for(;S!==null;)n(R,S),S=S.sibling;return null}function i(R,S){for(R=new Map;S!==null;)S.key!==null?R.set(S.key,S):R.set(S.index,S),S=S.sibling;return R}function l(R,S){return R=nr(R,S),R.index=0,R.sibling=null,R}function u(R,S,B){return R.index=B,e?(B=R.alternate,B!==null?(B=B.index,B<S?(R.flags|=2,S):B):(R.flags|=2,S)):(R.flags|=1048576,S)}function g(R){return e&&R.alternate===null&&(R.flags|=2),R}function b(R,S,B,L){return S===null||S.tag!==6?(S=hu(B,R.mode,L),S.return=R,S):(S=l(S,B),S.return=R,S)}function T(R,S,B,L){var te=B.type;return te===V?W(R,S,B.props.children,L,B.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===we&&ho(te)===S.type)?(L=l(S,B.props),L.ref=Wi(R,S,B),L.return=R,L):(L=kl(B.type,B.key,B.props,null,R.mode,L),L.ref=Wi(R,S,B),L.return=R,L)}function K(R,S,B,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==B.containerInfo||S.stateNode.implementation!==B.implementation?(S=mu(B,R.mode,L),S.return=R,S):(S=l(S,B.children||[]),S.return=R,S)}function W(R,S,B,L,te){return S===null||S.tag!==7?(S=Br(B,R.mode,L,te),S.return=R,S):(S=l(S,B),S.return=R,S)}function H(R,S,B){if(typeof S=="string"&&S!==""||typeof S=="number")return S=hu(""+S,R.mode,B),S.return=R,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fe:return B=kl(S.type,S.key,S.props,null,R.mode,B),B.ref=Wi(R,null,S),B.return=R,B;case ve:return S=mu(S,R.mode,B),S.return=R,S;case we:var L=S._init;return H(R,L(S._payload),B)}if(dr(S)||Q(S))return S=Br(S,R.mode,B,null),S.return=R,S;Lt(R,S)}return null}function C(R,S,B,L){var te=S!==null?S.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return te!==null?null:b(R,S,""+B,L);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:return B.key===te?T(R,S,B,L):null;case ve:return B.key===te?K(R,S,B,L):null;case we:return te=B._init,C(R,S,te(B._payload),L)}if(dr(B)||Q(B))return te!==null?null:W(R,S,B,L,null);Lt(R,B)}return null}function Z(R,S,B,L,te){if(typeof L=="string"&&L!==""||typeof L=="number")return R=R.get(B)||null,b(S,R,""+L,te);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case fe:return R=R.get(L.key===null?B:L.key)||null,T(S,R,L,te);case ve:return R=R.get(L.key===null?B:L.key)||null,K(S,R,L,te);case we:var de=L._init;return Z(R,S,B,de(L._payload),te)}if(dr(L)||Q(L))return R=R.get(B)||null,W(S,R,L,te,null);Lt(S,L)}return null}function ee(R,S,B,L){for(var te=null,de=null,oe=S,ge=S=0,hn=null;oe!==null&&ge<B.length;ge++){oe.index>ge?(hn=oe,oe=null):hn=oe.sibling;var Ke=C(R,oe,B[ge],L);if(Ke===null){oe===null&&(oe=hn);break}e&&oe&&Ke.alternate===null&&n(R,oe),S=u(Ke,S,ge),de===null?te=Ke:de.sibling=Ke,de=Ke,oe=hn}if(ge===B.length)return a(R,oe),Ye&&zr(R,ge),te;if(oe===null){for(;ge<B.length;ge++)oe=H(R,B[ge],L),oe!==null&&(S=u(oe,S,ge),de===null?te=oe:de.sibling=oe,de=oe);return Ye&&zr(R,ge),te}for(oe=i(R,oe);ge<B.length;ge++)hn=Z(oe,R,ge,B[ge],L),hn!==null&&(e&&hn.alternate!==null&&oe.delete(hn.key===null?ge:hn.key),S=u(hn,S,ge),de===null?te=hn:de.sibling=hn,de=hn);return e&&oe.forEach(function(ar){return n(R,ar)}),Ye&&zr(R,ge),te}function re(R,S,B,L){var te=Q(B);if(typeof te!="function")throw Error(s(150));if(B=te.call(B),B==null)throw Error(s(151));for(var de=te=null,oe=S,ge=S=0,hn=null,Ke=B.next();oe!==null&&!Ke.done;ge++,Ke=B.next()){oe.index>ge?(hn=oe,oe=null):hn=oe.sibling;var ar=C(R,oe,Ke.value,L);if(ar===null){oe===null&&(oe=hn);break}e&&oe&&ar.alternate===null&&n(R,oe),S=u(ar,S,ge),de===null?te=ar:de.sibling=ar,de=ar,oe=hn}if(Ke.done)return a(R,oe),Ye&&zr(R,ge),te;if(oe===null){for(;!Ke.done;ge++,Ke=B.next())Ke=H(R,Ke.value,L),Ke!==null&&(S=u(Ke,S,ge),de===null?te=Ke:de.sibling=Ke,de=Ke);return Ye&&zr(R,ge),te}for(oe=i(R,oe);!Ke.done;ge++,Ke=B.next())Ke=Z(oe,R,ge,Ke.value,L),Ke!==null&&(e&&Ke.alternate!==null&&oe.delete(Ke.key===null?ge:Ke.key),S=u(Ke,S,ge),de===null?te=Ke:de.sibling=Ke,de=Ke);return e&&oe.forEach(function(eg){return n(R,eg)}),Ye&&zr(R,ge),te}function nn(R,S,B,L){if(typeof B=="object"&&B!==null&&B.type===V&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:e:{for(var te=B.key,de=S;de!==null;){if(de.key===te){if(te=B.type,te===V){if(de.tag===7){a(R,de.sibling),S=l(de,B.props.children),S.return=R,R=S;break e}}else if(de.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===we&&ho(te)===de.type){a(R,de.sibling),S=l(de,B.props),S.ref=Wi(R,de,B),S.return=R,R=S;break e}a(R,de);break}else n(R,de);de=de.sibling}B.type===V?(S=Br(B.props.children,R.mode,L,B.key),S.return=R,R=S):(L=kl(B.type,B.key,B.props,null,R.mode,L),L.ref=Wi(R,S,B),L.return=R,R=L)}return g(R);case ve:e:{for(de=B.key;S!==null;){if(S.key===de)if(S.tag===4&&S.stateNode.containerInfo===B.containerInfo&&S.stateNode.implementation===B.implementation){a(R,S.sibling),S=l(S,B.children||[]),S.return=R,R=S;break e}else{a(R,S);break}else n(R,S);S=S.sibling}S=mu(B,R.mode,L),S.return=R,R=S}return g(R);case we:return de=B._init,nn(R,S,de(B._payload),L)}if(dr(B))return ee(R,S,B,L);if(Q(B))return re(R,S,B,L);Lt(R,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,S!==null&&S.tag===6?(a(R,S.sibling),S=l(S,B),S.return=R,R=S):(a(R,S),S=hu(B,R.mode,L),S.return=R,R=S),g(R)):a(R,S)}return nn}var Qr=mo(!0),co=mo(!1),Ut=Ua(null),Ot=null,Xr=null,zs=null;function Ts(){zs=Xr=Ot=null}function ws(e){var n=Ut.current;Ue(Ut),e._currentValue=n}function Ss(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function ei(e,n){Ot=e,zs=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(xn=!0),e.firstContext=null)}function qn(e){var n=e._currentValue;if(zs!==e)if(e={context:e,memoizedValue:n,next:null},Xr===null){if(Ot===null)throw Error(s(308));Xr=e,Ot.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return n}var Tr=null;function Es(e){Tr===null?Tr=[e]:Tr.push(e)}function ko(e,n,a,i){var l=n.interleaved;return l===null?(a.next=a,Es(n)):(a.next=l.next,l.next=a),n.interleaved=a,Ea(e,i)}function Ea(e,n){e.lanes|=n;var a=e.alternate;for(a!==null&&(a.lanes|=n),a=e,e=e.return;e!==null;)e.childLanes|=n,a=e.alternate,a!==null&&(a.childLanes|=n),a=e,e=e.return;return a.tag===3?a.stateNode:null}var Ya=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function go(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Aa(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Za(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Me&2)!==0){var l=i.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),i.pending=n,Ea(e,a)}return l=i.interleaved,l===null?(n.next=n,Es(i)):(n.next=l.next,l.next=n),i.interleaved=n,Ea(e,a)}function qt(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,Fl(e,a)}}function fo(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};u===null?l=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}function Yt(e,n,a,i){var l=e.updateQueue;Ya=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var T=b,K=T.next;T.next=null,g===null?u=K:g.next=K,g=T;var W=e.alternate;W!==null&&(W=W.updateQueue,b=W.lastBaseUpdate,b!==g&&(b===null?W.firstBaseUpdate=K:b.next=K,W.lastBaseUpdate=T))}if(u!==null){var H=l.baseState;g=0,W=K=T=null,b=u;do{var C=b.lane,Z=b.eventTime;if((i&C)===C){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ee=e,re=b;switch(C=n,Z=a,re.tag){case 1:if(ee=re.payload,typeof ee=="function"){H=ee.call(Z,H,C);break e}H=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=re.payload,C=typeof ee=="function"?ee.call(Z,H,C):ee,C==null)break e;H=O({},H,C);break e;case 2:Ya=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,C=l.effects,C===null?l.effects=[b]:C.push(b))}else Z={eventTime:Z,lane:C,tag:b.tag,payload:b.payload,callback:b.callback,next:null},W===null?(K=W=Z,T=H):W=W.next=Z,g|=C;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;C=b,b=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);if(W===null&&(T=H),l.baseState=T,l.firstBaseUpdate=K,l.lastBaseUpdate=W,n=l.shared.interleaved,n!==null){l=n;do g|=l.lane,l=l.next;while(l!==n)}else u===null&&(l.shared.lanes=0);Er|=g,e.lanes=g,e.memoizedState=H}}function yo(e,n,a){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],l=i.callback;if(l!==null){if(i.callback=null,i=a,typeof l!="function")throw Error(s(191,l));l.call(i)}}}var Fi={},ma=Ua(Fi),Hi=Ua(Fi),ji=Ua(Fi);function wr(e){if(e===Fi)throw Error(s(174));return e}function Ds(e,n){switch(je(ji,n),je(Hi,e),je(ma,Fi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:or(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=or(n,e)}Ue(ma),je(ma,n)}function ni(){Ue(ma),Ue(Hi),Ue(ji)}function bo(e){wr(ji.current);var n=wr(ma.current),a=or(n,e.type);n!==a&&(je(Hi,e),je(ma,a))}function Rs(e){Hi.current===e&&(Ue(ma),Ue(Hi))}var Ze=Ua(0);function Zt(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bs=[];function xs(){for(var e=0;e<Bs.length;e++)Bs[e]._workInProgressVersionPrimary=null;Bs.length=0}var $t=be.ReactCurrentDispatcher,Ms=be.ReactCurrentBatchConfig,Sr=0,$e=null,ln=null,dn=null,Jt=!1,Gi=!1,Li=0,Tk=0;function fn(){throw Error(s(321))}function Ks(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ea(e[a],n[a]))return!1;return!0}function Vs(e,n,a,i,l,u){if(Sr=u,$e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$t.current=e===null||e.memoizedState===null?Ak:Dk,e=a(i,l),Gi){u=0;do{if(Gi=!1,Li=0,25<=u)throw Error(s(301));u+=1,dn=ln=null,n.updateQueue=null,$t.current=Rk,e=a(i,l)}while(Gi)}if($t.current=el,n=ln!==null&&ln.next!==null,Sr=0,dn=ln=$e=null,Jt=!1,n)throw Error(s(300));return e}function _s(){var e=Li!==0;return Li=0,e}function ca(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?$e.memoizedState=dn=e:dn=dn.next=e,dn}function Yn(){if(ln===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=ln.next;var n=dn===null?$e.memoizedState:dn.next;if(n!==null)dn=n,ln=e;else{if(e===null)throw Error(s(310));ln=e,e={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},dn===null?$e.memoizedState=dn=e:dn=dn.next=e}return dn}function Ui(e,n){return typeof n=="function"?n(e):n}function Ns(e){var n=Yn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=ln,l=i.baseQueue,u=a.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}i.baseQueue=l=u,a.pending=null}if(l!==null){u=l.next,i=i.baseState;var b=g=null,T=null,K=u;do{var W=K.lane;if((Sr&W)===W)T!==null&&(T=T.next={lane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),i=K.hasEagerState?K.eagerState:e(i,K.action);else{var H={lane:W,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};T===null?(b=T=H,g=i):T=T.next=H,$e.lanes|=W,Er|=W}K=K.next}while(K!==null&&K!==u);T===null?g=i:T.next=b,ea(i,n.memoizedState)||(xn=!0),n.memoizedState=i,n.baseState=g,n.baseQueue=T,a.lastRenderedState=i}if(e=a.interleaved,e!==null){l=e;do u=l.lane,$e.lanes|=u,Er|=u,l=l.next;while(l!==e)}else l===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function Is(e){var n=Yn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do u=e(u,g.action),g=g.next;while(g!==l);ea(u,n.memoizedState)||(xn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,i]}function vo(){}function po(e,n){var a=$e,i=Yn(),l=n(),u=!ea(i.memoizedState,l);if(u&&(i.memoizedState=l,xn=!0),i=i.queue,Cs(wo.bind(null,a,i,e),[e]),i.getSnapshot!==n||u||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,Oi(9,To.bind(null,a,i,l,n),void 0,null),on===null)throw Error(s(349));(Sr&30)!==0||zo(a,n,l)}return l}function zo(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=$e.updateQueue,n===null?(n={lastEffect:null,stores:null},$e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function To(e,n,a,i){n.value=a,n.getSnapshot=i,So(n)&&Eo(e)}function wo(e,n,a){return a(function(){So(n)&&Eo(e)})}function So(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ea(e,a)}catch{return!0}}function Eo(e){var n=Ea(e,1);n!==null&&ta(n,e,1,-1)}function Ao(e){var n=ca();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},n.queue=e,e=e.dispatch=Ek.bind(null,$e,e),[n.memoizedState,e]}function Oi(e,n,a,i){return e={tag:e,create:n,destroy:a,deps:i,next:null},n=$e.updateQueue,n===null?(n={lastEffect:null,stores:null},$e.updateQueue=n,n.lastEffect=e.next=e):(a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e)),e}function Do(){return Yn().memoizedState}function Qt(e,n,a,i){var l=ca();$e.flags|=e,l.memoizedState=Oi(1|n,a,void 0,i===void 0?null:i)}function Xt(e,n,a,i){var l=Yn();i=i===void 0?null:i;var u=void 0;if(ln!==null){var g=ln.memoizedState;if(u=g.destroy,i!==null&&Ks(i,g.deps)){l.memoizedState=Oi(n,a,u,i);return}}$e.flags|=e,l.memoizedState=Oi(1|n,a,u,i)}function Ro(e,n){return Qt(8390656,8,e,n)}function Cs(e,n){return Xt(2048,8,e,n)}function Bo(e,n){return Xt(4,2,e,n)}function xo(e,n){return Xt(4,4,e,n)}function Mo(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ko(e,n,a){return a=a!=null?a.concat([e]):null,Xt(4,4,Mo.bind(null,n,e),a)}function Ps(){}function Vo(e,n){var a=Yn();n=n===void 0?null:n;var i=a.memoizedState;return i!==null&&n!==null&&Ks(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function _o(e,n){var a=Yn();n=n===void 0?null:n;var i=a.memoizedState;return i!==null&&n!==null&&Ks(n,i[1])?i[0]:(e=e(),a.memoizedState=[e,n],e)}function No(e,n,a){return(Sr&21)===0?(e.baseState&&(e.baseState=!1,xn=!0),e.memoizedState=a):(ea(a,n)||(a=od(),$e.lanes|=a,Er|=a,e.baseState=!0),n)}function wk(e,n){var a=Pe;Pe=a!==0&&4>a?a:4,e(!0);var i=Ms.transition;Ms.transition={};try{e(!1),n()}finally{Pe=a,Ms.transition=i}}function Io(){return Yn().memoizedState}function Sk(e,n,a){var i=Xa(e);if(a={lane:i,action:a,hasEagerState:!1,eagerState:null,next:null},Co(e))Po(n,a);else if(a=ko(e,n,a,i),a!==null){var l=wn();ta(a,e,i,l),Wo(a,n,i)}}function Ek(e,n,a){var i=Xa(e),l={lane:i,action:a,hasEagerState:!1,eagerState:null,next:null};if(Co(e))Po(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var g=n.lastRenderedState,b=u(g,a);if(l.hasEagerState=!0,l.eagerState=b,ea(b,g)){var T=n.interleaved;T===null?(l.next=l,Es(n)):(l.next=T.next,T.next=l),n.interleaved=l;return}}catch{}finally{}a=ko(e,n,l,i),a!==null&&(l=wn(),ta(a,e,i,l),Wo(a,n,i))}}function Co(e){var n=e.alternate;return e===$e||n!==null&&n===$e}function Po(e,n){Gi=Jt=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Wo(e,n,a){if((a&4194240)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,Fl(e,a)}}var el={readContext:qn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},Ak={readContext:qn,useCallback:function(e,n){return ca().memoizedState=[e,n===void 0?null:n],e},useContext:qn,useEffect:Ro,useImperativeHandle:function(e,n,a){return a=a!=null?a.concat([e]):null,Qt(4194308,4,Mo.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Qt(4194308,4,e,n)},useInsertionEffect:function(e,n){return Qt(4,2,e,n)},useMemo:function(e,n){var a=ca();return n=n===void 0?null:n,e=e(),a.memoizedState=[e,n],e},useReducer:function(e,n,a){var i=ca();return n=a!==void 0?a(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Sk.bind(null,$e,e),[i.memoizedState,e]},useRef:function(e){var n=ca();return e={current:e},n.memoizedState=e},useState:Ao,useDebugValue:Ps,useDeferredValue:function(e){return ca().memoizedState=e},useTransition:function(){var e=Ao(!1),n=e[0];return e=wk.bind(null,e[1]),ca().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,a){var i=$e,l=ca();if(Ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(Sr&30)!==0||zo(i,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,Ro(wo.bind(null,i,u,e),[e]),i.flags|=2048,Oi(9,To.bind(null,i,u,a,n),void 0,null),a},useId:function(){var e=ca(),n=on.identifierPrefix;if(Ye){var a=Sa,i=wa;a=(i&~(1<<32-We(i)-1)).toString(32)+a,n=":"+n+"R"+a,a=Li++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Tk++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Dk={readContext:qn,useCallback:Vo,useContext:qn,useEffect:Cs,useImperativeHandle:Ko,useInsertionEffect:Bo,useLayoutEffect:xo,useMemo:_o,useReducer:Ns,useRef:Do,useState:function(){return Ns(Ui)},useDebugValue:Ps,useDeferredValue:function(e){var n=Yn();return No(n,ln.memoizedState,e)},useTransition:function(){var e=Ns(Ui)[0],n=Yn().memoizedState;return[e,n]},useMutableSource:vo,useSyncExternalStore:po,useId:Io,unstable_isNewReconciler:!1},Rk={readContext:qn,useCallback:Vo,useContext:qn,useEffect:Cs,useImperativeHandle:Ko,useInsertionEffect:Bo,useLayoutEffect:xo,useMemo:_o,useReducer:Is,useRef:Do,useState:function(){return Is(Ui)},useDebugValue:Ps,useDeferredValue:function(e){var n=Yn();return ln===null?n.memoizedState=e:No(n,ln.memoizedState,e)},useTransition:function(){var e=Is(Ui)[0],n=Yn().memoizedState;return[e,n]},useMutableSource:vo,useSyncExternalStore:po,useId:Io,unstable_isNewReconciler:!1};function aa(e,n){if(e&&e.defaultProps){n=O({},n),e=e.defaultProps;for(var a in e)n[a]===void 0&&(n[a]=e[a]);return n}return n}function Ws(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:O({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nl={isMounted:function(e){return(e=e._reactInternals)?ae(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var i=wn(),l=Xa(e),u=Aa(i,l);u.payload=n,a!=null&&(u.callback=a),n=Za(e,u,l),n!==null&&(ta(n,e,l,i),qt(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=wn(),l=Xa(e),u=Aa(i,l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(e,u,l),n!==null&&(ta(n,e,l,i),qt(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=wn(),i=Xa(e),l=Aa(a,i);l.tag=2,n!=null&&(l.callback=n),n=Za(e,l,i),n!==null&&(ta(n,e,i,a),qt(n,e,i))}};function Fo(e,n,a,i,l,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,g):n.prototype&&n.prototype.isPureReactComponent?!Ki(a,i)||!Ki(l,u):!0}function Ho(e,n,a){var i=!1,l=Oa,u=n.contextType;return typeof u=="object"&&u!==null?u=qn(u):(l=Bn(n)?vr:gn.current,i=n.contextTypes,u=(i=i!=null)?Yr(e,l):Oa),n=new n(a,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=nl,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),n}function jo(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&nl.enqueueReplaceState(n,n.state,null)}function Fs(e,n,a,i){var l=e.stateNode;l.props=a,l.state=e.memoizedState,l.refs={},As(e);var u=n.contextType;typeof u=="object"&&u!==null?l.context=qn(u):(u=Bn(n)?vr:gn.current,l.context=Yr(e,u)),l.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Ws(e,n,u,a),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&nl.enqueueReplaceState(l,l.state,null),Yt(e,a,l,i),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ai(e,n){try{var a="",i=n;do a+=me(i),i=i.return;while(i);var l=a}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:l,digest:null}}function Hs(e,n,a){return{value:e,source:null,stack:a??null,digest:n??null}}function js(e,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Bk=typeof WeakMap=="function"?WeakMap:Map;function Go(e,n,a){a=Aa(-1,a),a.tag=3,a.payload={element:null};var i=n.value;return a.callback=function(){ul||(ul=!0,ru=i),js(e,n)},a}function Lo(e,n,a){a=Aa(-1,a),a.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;a.payload=function(){return i(l)},a.callback=function(){js(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(a.callback=function(){js(e,n),typeof i!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),a}function Uo(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Bk;var l=new Set;i.set(n,l)}else l=i.get(n),l===void 0&&(l=new Set,i.set(n,l));l.has(a)||(l.add(a),e=Gk.bind(null,e,n,a),n.then(e,e))}function Oo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qo(e,n,a,i,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=Aa(-1,1),n.tag=2,Za(a,n,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var xk=be.ReactCurrentOwner,xn=!1;function Tn(e,n,a,i){n.child=e===null?co(n,null,a,i):Qr(n,e.child,a,i)}function Yo(e,n,a,i,l){a=a.render;var u=n.ref;return ei(n,l),i=Vs(e,n,a,i,u,l),a=_s(),e!==null&&!xn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Da(e,n,l)):(Ye&&a&&fs(n),n.flags|=1,Tn(e,n,i,l),n.child)}function Zo(e,n,a,i,l){if(e===null){var u=a.type;return typeof u=="function"&&!ou(u)&&u.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=u,$o(e,n,u,i,l)):(e=kl(a.type,null,i,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,(e.lanes&l)===0){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ki,a(g,i)&&e.ref===n.ref)return Da(e,n,l)}return n.flags|=1,e=nr(u,i),e.ref=n.ref,e.return=n,n.child=e}function $o(e,n,a,i,l){if(e!==null){var u=e.memoizedProps;if(Ki(u,i)&&e.ref===n.ref)if(xn=!1,n.pendingProps=i=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Da(e,n,l)}return Gs(e,n,a,i,l)}function Jo(e,n,a){var i=n.pendingProps,l=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(ii,Pn),Pn|=a;else{if((a&1073741824)===0)return e=u!==null?u.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,je(ii,Pn),Pn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:a,je(ii,Pn),Pn|=i}else u!==null?(i=u.baseLanes|a,n.memoizedState=null):i=a,je(ii,Pn),Pn|=i;return Tn(e,n,l,a),n.child}function Qo(e,n){var a=n.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Gs(e,n,a,i,l){var u=Bn(a)?vr:gn.current;return u=Yr(n,u),ei(n,l),a=Vs(e,n,a,i,u,l),i=_s(),e!==null&&!xn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Da(e,n,l)):(Ye&&i&&fs(n),n.flags|=1,Tn(e,n,a,l),n.child)}function Xo(e,n,a,i,l){if(Bn(a)){var u=!0;Wt(n)}else u=!1;if(ei(n,l),n.stateNode===null)rl(e,n),Ho(n,a,i),Fs(n,a,i,l),i=!0;else if(e===null){var g=n.stateNode,b=n.memoizedProps;g.props=b;var T=g.context,K=a.contextType;typeof K=="object"&&K!==null?K=qn(K):(K=Bn(a)?vr:gn.current,K=Yr(n,K));var W=a.getDerivedStateFromProps,H=typeof W=="function"||typeof g.getSnapshotBeforeUpdate=="function";H||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==i||T!==K)&&jo(n,g,i,K),Ya=!1;var C=n.memoizedState;g.state=C,Yt(n,i,g,l),T=n.memoizedState,b!==i||C!==T||Rn.current||Ya?(typeof W=="function"&&(Ws(n,a,W,i),T=n.memoizedState),(b=Ya||Fo(n,a,b,i,C,T,K))?(H||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=T),g.props=i,g.state=T,g.context=K,i=b):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{g=n.stateNode,go(e,n),b=n.memoizedProps,K=n.type===n.elementType?b:aa(n.type,b),g.props=K,H=n.pendingProps,C=g.context,T=a.contextType,typeof T=="object"&&T!==null?T=qn(T):(T=Bn(a)?vr:gn.current,T=Yr(n,T));var Z=a.getDerivedStateFromProps;(W=typeof Z=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==H||C!==T)&&jo(n,g,i,T),Ya=!1,C=n.memoizedState,g.state=C,Yt(n,i,g,l);var ee=n.memoizedState;b!==H||C!==ee||Rn.current||Ya?(typeof Z=="function"&&(Ws(n,a,Z,i),ee=n.memoizedState),(K=Ya||Fo(n,a,K,i,C,ee,T)||!1)?(W||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(i,ee,T),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(i,ee,T)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=ee),g.props=i,g.state=ee,g.context=T,i=K):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),i=!1)}return Ls(e,n,a,i,u,l)}function Ls(e,n,a,i,l,u){Qo(e,n);var g=(n.flags&128)!==0;if(!i&&!g)return l&&ro(n,a,!1),Da(e,n,u);i=n.stateNode,xk.current=n;var b=g&&typeof a.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&g?(n.child=Qr(n,e.child,null,u),n.child=Qr(n,null,b,u)):Tn(e,n,b,u),n.memoizedState=i.state,l&&ro(n,a,!0),n.child}function eh(e){var n=e.stateNode;n.pendingContext?no(e,n.pendingContext,n.pendingContext!==n.context):n.context&&no(e,n.context,!1),Ds(e,n.containerInfo)}function nh(e,n,a,i,l){return Jr(),ps(l),n.flags|=256,Tn(e,n,a,i),n.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function ah(e,n,a){var i=n.pendingProps,l=Ze.current,u=!1,g=(n.flags&128)!==0,b;if((b=g)||(b=e!==null&&e.memoizedState===null?!1:(l&2)!==0),b?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),je(Ze,l&1),e===null)return vs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(g=i.children,e=i.fallback,u?(i=n.mode,u=n.child,g={mode:"hidden",children:g},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=g):u=gl(g,i,0,null),e=Br(e,i,a,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=Os(a),n.memoizedState=Us,e):qs(n,g));if(l=e.memoizedState,l!==null&&(b=l.dehydrated,b!==null))return Mk(e,n,g,i,b,l,a);if(u){u=i.fallback,g=n.mode,l=e.child,b=l.sibling;var T={mode:"hidden",children:i.children};return(g&1)===0&&n.child!==l?(i=n.child,i.childLanes=0,i.pendingProps=T,n.deletions=null):(i=nr(l,T),i.subtreeFlags=l.subtreeFlags&14680064),b!==null?u=nr(b,u):(u=Br(u,g,a,null),u.flags|=2),u.return=n,i.return=n,i.sibling=u,n.child=i,i=u,u=n.child,g=e.child.memoizedState,g=g===null?Os(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},u.memoizedState=g,u.childLanes=e.childLanes&~a,n.memoizedState=Us,i}return u=e.child,e=u.sibling,i=nr(u,{mode:"visible",children:i.children}),(n.mode&1)===0&&(i.lanes=a),i.return=n,i.sibling=null,e!==null&&(a=n.deletions,a===null?(n.deletions=[e],n.flags|=16):a.push(e)),n.child=i,n.memoizedState=null,i}function qs(e,n){return n=gl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function al(e,n,a,i){return i!==null&&ps(i),Qr(n,e.child,null,a),e=qs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mk(e,n,a,i,l,u,g){if(a)return n.flags&256?(n.flags&=-257,i=Hs(Error(s(422))),al(e,n,g,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=i.fallback,l=n.mode,i=gl({mode:"visible",children:i.children},l,0,null),u=Br(u,l,g,null),u.flags|=2,i.return=n,u.return=n,i.sibling=u,n.child=i,(n.mode&1)!==0&&Qr(n,e.child,null,g),n.child.memoizedState=Os(g),n.memoizedState=Us,u);if((n.mode&1)===0)return al(e,n,g,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var b=i.dgst;return i=b,u=Error(s(419)),i=Hs(u,i,void 0),al(e,n,g,i)}if(b=(g&e.childLanes)!==0,xn||b){if(i=on,i!==null){switch(g&-g){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(i.suspendedLanes|g))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Ea(e,l),ta(i,e,l,-1))}return du(),i=Hs(Error(s(421))),al(e,n,g,i)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Lk.bind(null,e),l._reactRetry=n,null):(e=u.treeContext,Cn=La(l.nextSibling),In=n,Ye=!0,na=null,e!==null&&(Un[On++]=wa,Un[On++]=Sa,Un[On++]=pr,wa=e.id,Sa=e.overflow,pr=n),n=qs(n,i.children),n.flags|=4096,n)}function rh(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Ss(e.return,n,a)}function Ys(e,n,a,i,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=a,u.tailMode=l)}function ih(e,n,a){var i=n.pendingProps,l=i.revealOrder,u=i.tail;if(Tn(e,n,i.children,a),i=Ze.current,(i&2)!==0)i=i&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rh(e,a,n);else if(e.tag===19)rh(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(je(Ze,i),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(a=n.child,l=null;a!==null;)e=a.alternate,e!==null&&Zt(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),Ys(n,!1,l,a,u);break;case"backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Zt(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Ys(n,!0,a,null,u);break;case"together":Ys(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rl(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Er|=n.lanes,(a&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=nr(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=nr(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Kk(e,n,a){switch(n.tag){case 3:eh(n),Jr();break;case 5:bo(n);break;case 1:Bn(n.type)&&Wt(n);break;case 4:Ds(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,l=n.memoizedProps.value;je(Ut,i._currentValue),i._currentValue=l;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(je(Ze,Ze.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?ah(e,n,a):(je(Ze,Ze.current&1),e=Da(e,n,a),e!==null?e.sibling:null);je(Ze,Ze.current&1);break;case 19:if(i=(a&n.childLanes)!==0,(e.flags&128)!==0){if(i)return ih(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),je(Ze,Ze.current),i)break;return null;case 22:case 23:return n.lanes=0,Jo(e,n,a)}return Da(e,n,a)}var th,Zs,lh,sh;th=function(e,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zs=function(){},lh=function(e,n,a,i){var l=e.memoizedProps;if(l!==i){e=n.stateNode,wr(ma.current);var u=null;switch(a){case"input":l=_r(e,l),i=_r(e,i),u=[];break;case"select":l=O({},l,{value:void 0}),i=O({},i,{value:void 0}),u=[];break;case"textarea":l=ci(e,l),i=ci(e,i),u=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=It)}Ir(a,i);var g;a=null;for(K in l)if(!i.hasOwnProperty(K)&&l.hasOwnProperty(K)&&l[K]!=null)if(K==="style"){var b=l[K];for(g in b)b.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else K!=="dangerouslySetInnerHTML"&&K!=="children"&&K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&K!=="autoFocus"&&(o.hasOwnProperty(K)?u||(u=[]):(u=u||[]).push(K,null));for(K in i){var T=i[K];if(b=l!=null?l[K]:void 0,i.hasOwnProperty(K)&&T!==b&&(T!=null||b!=null))if(K==="style")if(b){for(g in b)!b.hasOwnProperty(g)||T&&T.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in T)T.hasOwnProperty(g)&&b[g]!==T[g]&&(a||(a={}),a[g]=T[g])}else a||(u||(u=[]),u.push(K,a)),a=T;else K==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,b=b?b.__html:void 0,T!=null&&b!==T&&(u=u||[]).push(K,T)):K==="children"?typeof T!="string"&&typeof T!="number"||(u=u||[]).push(K,""+T):K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&(o.hasOwnProperty(K)?(T!=null&&K==="onScroll"&&Le("scroll",e),u||b===T||(u=[])):(u=u||[]).push(K,T))}a&&(u=u||[]).push("style",a);var K=u;(n.updateQueue=K)&&(n.flags|=4)}},sh=function(e,n,a,i){a!==i&&(n.flags|=4)};function qi(e,n){if(!Ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function yn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function Vk(e,n,a){var i=n.pendingProps;switch(ys(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(n),null;case 1:return Bn(n.type)&&Pt(),yn(n),null;case 3:return i=n.stateNode,ni(),Ue(Rn),Ue(gn),xs(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Gt(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,na!==null&&(lu(na),na=null))),Zs(e,n),yn(n),null;case 5:Rs(n);var l=wr(ji.current);if(a=n.type,e!==null&&n.stateNode!=null)lh(e,n,a,i,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(s(166));return yn(n),null}if(e=wr(ma.current),Gt(n)){i=n.stateNode,a=n.type;var u=n.memoizedProps;switch(i[ha]=n,i[Ci]=u,e=(n.mode&1)!==0,a){case"dialog":Le("cancel",i),Le("close",i);break;case"iframe":case"object":case"embed":Le("load",i);break;case"video":case"audio":for(l=0;l<_i.length;l++)Le(_i[l],i);break;case"source":Le("error",i);break;case"img":case"image":case"link":Le("error",i),Le("load",i);break;case"details":Le("toggle",i);break;case"input":kt(i,u),Le("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Le("invalid",i);break;case"textarea":ft(i,u),Le("invalid",i)}Ir(a,u),l=null;for(var g in u)if(u.hasOwnProperty(g)){var b=u[g];g==="children"?typeof b=="string"?i.textContent!==b&&(u.suppressHydrationWarning!==!0&&Nt(i.textContent,b,e),l=["children",b]):typeof b=="number"&&i.textContent!==""+b&&(u.suppressHydrationWarning!==!0&&Nt(i.textContent,b,e),l=["children",""+b]):o.hasOwnProperty(g)&&b!=null&&g==="onScroll"&&Le("scroll",i)}switch(a){case"input":Vr(i),gt(i,u,!0);break;case"textarea":Vr(i),Ka(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=It)}i=l,n.updateQueue=i,i!==null&&(n.flags|=4)}else{g=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ki(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=g.createElement(a,{is:i.is}):(e=g.createElement(a),a==="select"&&(g=e,i.multiple?g.multiple=!0:i.size&&(g.size=i.size))):e=g.createElementNS(e,a),e[ha]=n,e[Ci]=i,th(e,n,!1,!1),n.stateNode=e;e:{switch(g=Cr(a,i),a){case"dialog":Le("cancel",e),Le("close",e),l=i;break;case"iframe":case"object":case"embed":Le("load",e),l=i;break;case"video":case"audio":for(l=0;l<_i.length;l++)Le(_i[l],e);l=i;break;case"source":Le("error",e),l=i;break;case"img":case"image":case"link":Le("error",e),Le("load",e),l=i;break;case"details":Le("toggle",e),l=i;break;case"input":kt(e,i),l=_r(e,i),Le("invalid",e);break;case"option":l=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},l=O({},i,{value:void 0}),Le("invalid",e);break;case"textarea":ft(e,i),l=ci(e,i),Le("invalid",e);break;default:l=i}Ir(a,l),b=l;for(u in b)if(b.hasOwnProperty(u)){var T=b[u];u==="style"?Gn(e,T):u==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&jn(e,T)):u==="children"?typeof T=="string"?(a!=="textarea"||T!=="")&&Va(e,T):typeof T=="number"&&Va(e,""+T):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(o.hasOwnProperty(u)?T!=null&&u==="onScroll"&&Le("scroll",e):T!=null&&ne(e,u,T,g))}switch(a){case"input":Vr(e),gt(e,i,!1);break;case"textarea":Vr(e),Ka(e);break;case"option":i.value!=null&&e.setAttribute("value",""+De(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?Ma(e,!!i.multiple,u,!1):i.defaultValue!=null&&Ma(e,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=It)}switch(a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return yn(n),null;case 6:if(e&&n.stateNode!=null)sh(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(s(166));if(a=wr(ji.current),wr(ma.current),Gt(n)){if(i=n.stateNode,a=n.memoizedProps,i[ha]=n,(u=i.nodeValue!==a)&&(e=In,e!==null))switch(e.tag){case 3:Nt(i.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nt(i.nodeValue,a,(e.mode&1)!==0)}u&&(n.flags|=4)}else i=(a.nodeType===9?a:a.ownerDocument).createTextNode(i),i[ha]=n,n.stateNode=i}return yn(n),null;case 13:if(Ue(Ze),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Cn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)oo(),Jr(),n.flags|=98560,u=!1;else if(u=Gt(n),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ha]=n}else Jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yn(n),u=!1}else na!==null&&(lu(na),na=null),u=!0;if(!u)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ze.current&1)!==0?sn===0&&(sn=3):du())),n.updateQueue!==null&&(n.flags|=4),yn(n),null);case 4:return ni(),Zs(e,n),e===null&&Ni(n.stateNode.containerInfo),yn(n),null;case 10:return ws(n.type._context),yn(n),null;case 17:return Bn(n.type)&&Pt(),yn(n),null;case 19:if(Ue(Ze),u=n.memoizedState,u===null)return yn(n),null;if(i=(n.flags&128)!==0,g=u.rendering,g===null)if(i)qi(u,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(g=Zt(e),g!==null){for(n.flags|=128,qi(u,!1),i=g.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=a,a=n.child;a!==null;)u=a,e=i,u.flags&=14680066,g=u.alternate,g===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=g.childLanes,u.lanes=g.lanes,u.child=g.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=g.memoizedProps,u.memoizedState=g.memoizedState,u.updateQueue=g.updateQueue,u.type=g.type,e=g.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return je(Ze,Ze.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ce()>ti&&(n.flags|=128,i=!0,qi(u,!1),n.lanes=4194304)}else{if(!i)if(e=Zt(g),e!==null){if(n.flags|=128,i=!0,a=e.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),qi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Ye)return yn(n),null}else 2*Ce()-u.renderingStartTime>ti&&a!==1073741824&&(n.flags|=128,i=!0,qi(u,!1),n.lanes=4194304);u.isBackwards?(g.sibling=n.child,n.child=g):(a=u.last,a!==null?a.sibling=g:n.child=g,u.last=g)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ce(),n.sibling=null,a=Ze.current,je(Ze,i?a&1|2:a&1),n):(yn(n),null);case 22:case 23:return uu(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&(n.mode&1)!==0?(Pn&1073741824)!==0&&(yn(n),n.subtreeFlags&6&&(n.flags|=8192)):yn(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function _k(e,n){switch(ys(n),n.tag){case 1:return Bn(n.type)&&Pt(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ni(),Ue(Rn),Ue(gn),xs(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Rs(n),null;case 13:if(Ue(Ze),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ue(Ze),null;case 4:return ni(),null;case 10:return ws(n.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var il=!1,bn=!1,Nk=typeof WeakSet=="function"?WeakSet:Set,J=null;function ri(e,n){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(i){Qe(e,n,i)}else a.current=null}function $s(e,n,a){try{a()}catch(i){Qe(e,n,i)}}var uh=!1;function Ik(e,n){if(us=St,e=Wd(),es(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var g=0,b=-1,T=-1,K=0,W=0,H=e,C=null;n:for(;;){for(var Z;H!==a||l!==0&&H.nodeType!==3||(b=g+l),H!==u||i!==0&&H.nodeType!==3||(T=g+i),H.nodeType===3&&(g+=H.nodeValue.length),(Z=H.firstChild)!==null;)C=H,H=Z;for(;;){if(H===e)break n;if(C===a&&++K===l&&(b=g),C===u&&++W===i&&(T=g),(Z=H.nextSibling)!==null)break;H=C,C=H.parentNode}H=Z}a=b===-1||T===-1?null:{start:b,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(ds={focusedElem:e,selectionRange:a},St=!1,J=n;J!==null;)if(n=J,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,J=e;else for(;J!==null;){n=J;try{var ee=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var re=ee.memoizedProps,nn=ee.memoizedState,R=n.stateNode,S=R.getSnapshotBeforeUpdate(n.elementType===n.type?re:aa(n.type,re),nn);R.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var B=n.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(L){Qe(n,n.return,L)}if(e=n.sibling,e!==null){e.return=n.return,J=e;break}J=n.return}return ee=uh,uh=!1,ee}function Yi(e,n,a){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&$s(n,a,u)}l=l.next}while(l!==i)}}function tl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.create;a.destroy=i()}a=a.next}while(a!==n)}}function Js(e){var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof n=="function"?n(e):n.current=e}}function dh(e){var n=e.alternate;n!==null&&(e.alternate=null,dh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ha],delete n[Ci],delete n[cs],delete n[bk],delete n[vk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=It));else if(i!==4&&(e=e.child,e!==null))for(Qs(e,n,a),e=e.sibling;e!==null;)Qs(e,n,a),e=e.sibling}function Xs(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Xs(e,n,a),e=e.sibling;e!==null;)Xs(e,n,a),e=e.sibling}var mn=null,ra=!1;function $a(e,n,a){for(a=a.child;a!==null;)mh(e,n,a),a=a.sibling}function mh(e,n,a){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(ba,a)}catch{}switch(a.tag){case 5:bn||ri(a,n);case 6:var i=mn,l=ra;mn=null,$a(e,n,a),mn=i,ra=l,mn!==null&&(ra?(e=mn,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(ra?(e=mn,a=a.stateNode,e.nodeType===8?ms(e.parentNode,a):e.nodeType===1&&ms(e,a),Ai(e)):ms(mn,a.stateNode));break;case 4:i=mn,l=ra,mn=a.stateNode.containerInfo,ra=!0,$a(e,n,a),mn=i,ra=l;break;case 0:case 11:case 14:case 15:if(!bn&&(i=a.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var u=l,g=u.destroy;u=u.tag,g!==void 0&&((u&2)!==0||(u&4)!==0)&&$s(a,n,g),l=l.next}while(l!==i)}$a(e,n,a);break;case 1:if(!bn&&(ri(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=a.memoizedProps,i.state=a.memoizedState,i.componentWillUnmount()}catch(b){Qe(a,n,b)}$a(e,n,a);break;case 21:$a(e,n,a);break;case 22:a.mode&1?(bn=(i=bn)||a.memoizedState!==null,$a(e,n,a),bn=i):$a(e,n,a);break;default:$a(e,n,a)}}function ch(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Nk),n.forEach(function(i){var l=Uk.bind(null,e,i);a.has(i)||(a.add(i),i.then(l,l))})}}function ia(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i];try{var u=e,g=n,b=g;e:for(;b!==null;){switch(b.tag){case 5:mn=b.stateNode,ra=!1;break e;case 3:mn=b.stateNode.containerInfo,ra=!0;break e;case 4:mn=b.stateNode.containerInfo,ra=!0;break e}b=b.return}if(mn===null)throw Error(s(160));mh(u,g,l),mn=null,ra=!1;var T=l.alternate;T!==null&&(T.return=null),l.return=null}catch(K){Qe(l,n,K)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kh(n,e),n=n.sibling}function kh(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ia(n,e),ka(e),i&4){try{Yi(3,e,e.return),tl(3,e)}catch(re){Qe(e,e.return,re)}try{Yi(5,e,e.return)}catch(re){Qe(e,e.return,re)}}break;case 1:ia(n,e),ka(e),i&512&&a!==null&&ri(a,a.return);break;case 5:if(ia(n,e),ka(e),i&512&&a!==null&&ri(a,a.return),e.flags&32){var l=e.stateNode;try{Va(l,"")}catch(re){Qe(e,e.return,re)}}if(i&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,g=a!==null?a.memoizedProps:u,b=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{b==="input"&&u.type==="radio"&&u.name!=null&&sa(l,u),Cr(b,g);var K=Cr(b,u);for(g=0;g<T.length;g+=2){var W=T[g],H=T[g+1];W==="style"?Gn(l,H):W==="dangerouslySetInnerHTML"?jn(l,H):W==="children"?Va(l,H):ne(l,W,H,K)}switch(b){case"input":mi(l,u);break;case"textarea":ua(l,u);break;case"select":var C=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var Z=u.value;Z!=null?Ma(l,!!u.multiple,Z,!1):C!==!!u.multiple&&(u.defaultValue!=null?Ma(l,!!u.multiple,u.defaultValue,!0):Ma(l,!!u.multiple,u.multiple?[]:"",!1))}l[Ci]=u}catch(re){Qe(e,e.return,re)}}break;case 6:if(ia(n,e),ka(e),i&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(re){Qe(e,e.return,re)}}break;case 3:if(ia(n,e),ka(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Ai(n.containerInfo)}catch(re){Qe(e,e.return,re)}break;case 4:ia(n,e),ka(e);break;case 13:ia(n,e),ka(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(au=Ce())),i&4&&ch(e);break;case 22:if(W=a!==null&&a.memoizedState!==null,e.mode&1?(bn=(K=bn)||W,ia(n,e),bn=K):ia(n,e),ka(e),i&8192){if(K=e.memoizedState!==null,(e.stateNode.isHidden=K)&&!W&&(e.mode&1)!==0)for(J=e,W=e.child;W!==null;){for(H=J=W;J!==null;){switch(C=J,Z=C.child,C.tag){case 0:case 11:case 14:case 15:Yi(4,C,C.return);break;case 1:ri(C,C.return);var ee=C.stateNode;if(typeof ee.componentWillUnmount=="function"){i=C,a=C.return;try{n=i,ee.props=n.memoizedProps,ee.state=n.memoizedState,ee.componentWillUnmount()}catch(re){Qe(i,a,re)}}break;case 5:ri(C,C.return);break;case 22:if(C.memoizedState!==null){yh(H);continue}}Z!==null?(Z.return=C,J=Z):yh(H)}W=W.sibling}e:for(W=null,H=e;;){if(H.tag===5){if(W===null){W=H;try{l=H.stateNode,K?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(b=H.stateNode,T=H.memoizedProps.style,g=T!=null&&T.hasOwnProperty("display")?T.display:null,b.style.display=yt("display",g))}catch(re){Qe(e,e.return,re)}}}else if(H.tag===6){if(W===null)try{H.stateNode.nodeValue=K?"":H.memoizedProps}catch(re){Qe(e,e.return,re)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;W===H&&(W=null),H=H.return}W===H&&(W=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:ia(n,e),ka(e),i&4&&ch(e);break;case 21:break;default:ia(n,e),ka(e)}}function ka(e){var n=e.flags;if(n&2){try{e:{for(var a=e.return;a!==null;){if(oh(a)){var i=a;break e}a=a.return}throw Error(s(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Va(l,""),i.flags&=-33);var u=hh(e);Xs(e,u,l);break;case 3:case 4:var g=i.stateNode.containerInfo,b=hh(e);Qs(e,b,g);break;default:throw Error(s(161))}}catch(T){Qe(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ck(e,n,a){J=e,gh(e)}function gh(e,n,a){for(var i=(e.mode&1)!==0;J!==null;){var l=J,u=l.child;if(l.tag===22&&i){var g=l.memoizedState!==null||il;if(!g){var b=l.alternate,T=b!==null&&b.memoizedState!==null||bn;b=il;var K=bn;if(il=g,(bn=T)&&!K)for(J=l;J!==null;)g=J,T=g.child,g.tag===22&&g.memoizedState!==null?bh(l):T!==null?(T.return=g,J=T):bh(l);for(;u!==null;)J=u,gh(u),u=u.sibling;J=l,il=b,bn=K}fh(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,J=u):fh(e)}}function fh(e){for(;J!==null;){var n=J;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:bn||tl(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!bn)if(a===null)i.componentDidMount();else{var l=n.elementType===n.type?a.memoizedProps:aa(n.type,a.memoizedProps);i.componentDidUpdate(l,a.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&yo(n,u,i);break;case 3:var g=n.updateQueue;if(g!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}yo(n,g,a)}break;case 5:var b=n.stateNode;if(a===null&&n.flags&4){a=b;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&a.focus();break;case"img":T.src&&(a.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var K=n.alternate;if(K!==null){var W=K.memoizedState;if(W!==null){var H=W.dehydrated;H!==null&&Ai(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}bn||n.flags&512&&Js(n)}catch(C){Qe(n,n.return,C)}}if(n===e){J=null;break}if(a=n.sibling,a!==null){a.return=n.return,J=a;break}J=n.return}}function yh(e){for(;J!==null;){var n=J;if(n===e){J=null;break}var a=n.sibling;if(a!==null){a.return=n.return,J=a;break}J=n.return}}function bh(e){for(;J!==null;){var n=J;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{tl(4,n)}catch(T){Qe(n,a,T)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var l=n.return;try{i.componentDidMount()}catch(T){Qe(n,l,T)}}var u=n.return;try{Js(n)}catch(T){Qe(n,u,T)}break;case 5:var g=n.return;try{Js(n)}catch(T){Qe(n,g,T)}}}catch(T){Qe(n,n.return,T)}if(n===e){J=null;break}var b=n.sibling;if(b!==null){b.return=n.return,J=b;break}J=n.return}}var Pk=Math.ceil,ll=be.ReactCurrentDispatcher,eu=be.ReactCurrentOwner,Zn=be.ReactCurrentBatchConfig,Me=0,on=null,rn=null,cn=0,Pn=0,ii=Ua(0),sn=0,Zi=null,Er=0,sl=0,nu=0,$i=null,Mn=null,au=0,ti=1/0,Ra=null,ul=!1,ru=null,Ja=null,dl=!1,Qa=null,ol=0,Ji=0,iu=null,hl=-1,ml=0;function wn(){return(Me&6)!==0?Ce():hl!==-1?hl:hl=Ce()}function Xa(e){return(e.mode&1)===0?1:(Me&2)!==0&&cn!==0?cn&-cn:zk.transition!==null?(ml===0&&(ml=od()),ml):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e)}function ta(e,n,a,i){if(50<Ji)throw Ji=0,iu=null,Error(s(185));zi(e,a,i),((Me&2)===0||e!==on)&&(e===on&&((Me&2)===0&&(sl|=a),sn===4&&er(e,cn)),Kn(e,i),a===1&&Me===0&&(n.mode&1)===0&&(ti=Ce()+500,Ft&&qa()))}function Kn(e,n){var a=e.callbackNode;zc(e,n);var i=zt(e,e===on?cn:0);if(i===0)a!==null&&un(a),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(a!=null&&un(a),n===1)e.tag===0?pk(ph.bind(null,e)):io(ph.bind(null,e)),fk(function(){(Me&6)===0&&qa()}),a=null;else{switch(hd(i)){case 1:a=Ln;break;case 4:a=_n;break;case 16:a=Ia;break;case 536870912:a=oa;break;default:a=Ia}a=Rh(a,vh.bind(null,e))}e.callbackPriority=n,e.callbackNode=a}}function vh(e,n){if(hl=-1,ml=0,(Me&6)!==0)throw Error(s(327));var a=e.callbackNode;if(li()&&e.callbackNode!==a)return null;var i=zt(e,e===on?cn:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||n)n=cl(e,i);else{n=i;var l=Me;Me|=2;var u=Th();(on!==e||cn!==n)&&(Ra=null,ti=Ce()+500,Dr(e,n));do try{Hk();break}catch(b){zh(e,b)}while(!0);Ts(),ll.current=u,Me=l,rn!==null?n=0:(on=null,cn=0,n=sn)}if(n!==0){if(n===2&&(l=Pl(e),l!==0&&(i=l,n=tu(e,l))),n===1)throw a=Zi,Dr(e,0),er(e,i),Kn(e,Ce()),a;if(n===6)er(e,i);else{if(l=e.current.alternate,(i&30)===0&&!Wk(l)&&(n=cl(e,i),n===2&&(u=Pl(e),u!==0&&(i=u,n=tu(e,u))),n===1))throw a=Zi,Dr(e,0),er(e,i),Kn(e,Ce()),a;switch(e.finishedWork=l,e.finishedLanes=i,n){case 0:case 1:throw Error(s(345));case 2:Rr(e,Mn,Ra);break;case 3:if(er(e,i),(i&130023424)===i&&(n=au+500-Ce(),10<n)){if(zt(e,0)!==0)break;if(l=e.suspendedLanes,(l&i)!==i){wn(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=hs(Rr.bind(null,e,Mn,Ra),n);break}Rr(e,Mn,Ra);break;case 4:if(er(e,i),(i&4194240)===i)break;for(n=e.eventTimes,l=-1;0<i;){var g=31-We(i);u=1<<g,g=n[g],g>l&&(l=g),i&=~u}if(i=l,i=Ce()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Pk(i/1960))-i,10<i){e.timeoutHandle=hs(Rr.bind(null,e,Mn,Ra),i);break}Rr(e,Mn,Ra);break;case 5:Rr(e,Mn,Ra);break;default:throw Error(s(329))}}}return Kn(e,Ce()),e.callbackNode===a?vh.bind(null,e):null}function tu(e,n){var a=$i;return e.current.memoizedState.isDehydrated&&(Dr(e,n).flags|=256),e=cl(e,n),e!==2&&(n=Mn,Mn=a,n!==null&&lu(n)),e}function lu(e){Mn===null?Mn=e:Mn.push.apply(Mn,e)}function Wk(e){for(var n=e;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var i=0;i<a.length;i++){var l=a[i],u=l.getSnapshot;l=l.value;try{if(!ea(u(),l))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function er(e,n){for(n&=~nu,n&=~sl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var a=31-We(n),i=1<<a;e[a]=-1,n&=~i}}function ph(e){if((Me&6)!==0)throw Error(s(327));li();var n=zt(e,0);if((n&1)===0)return Kn(e,Ce()),null;var a=cl(e,n);if(e.tag!==0&&a===2){var i=Pl(e);i!==0&&(n=i,a=tu(e,i))}if(a===1)throw a=Zi,Dr(e,0),er(e,n),Kn(e,Ce()),a;if(a===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rr(e,Mn,Ra),Kn(e,Ce()),null}function su(e,n){var a=Me;Me|=1;try{return e(n)}finally{Me=a,Me===0&&(ti=Ce()+500,Ft&&qa())}}function Ar(e){Qa!==null&&Qa.tag===0&&(Me&6)===0&&li();var n=Me;Me|=1;var a=Zn.transition,i=Pe;try{if(Zn.transition=null,Pe=1,e)return e()}finally{Pe=i,Zn.transition=a,Me=n,(Me&6)===0&&qa()}}function uu(){Pn=ii.current,Ue(ii)}function Dr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,gk(a)),rn!==null)for(a=rn.return;a!==null;){var i=a;switch(ys(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pt();break;case 3:ni(),Ue(Rn),Ue(gn),xs();break;case 5:Rs(i);break;case 4:ni();break;case 13:Ue(Ze);break;case 19:Ue(Ze);break;case 10:ws(i.type._context);break;case 22:case 23:uu()}a=a.return}if(on=e,rn=e=nr(e.current,null),cn=Pn=n,sn=0,Zi=null,nu=sl=Er=0,Mn=$i=null,Tr!==null){for(n=0;n<Tr.length;n++)if(a=Tr[n],i=a.interleaved,i!==null){a.interleaved=null;var l=i.next,u=a.pending;if(u!==null){var g=u.next;u.next=l,i.next=g}a.pending=i}Tr=null}return e}function zh(e,n){do{var a=rn;try{if(Ts(),$t.current=el,Jt){for(var i=$e.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}Jt=!1}if(Sr=0,dn=ln=$e=null,Gi=!1,Li=0,eu.current=null,a===null||a.return===null){sn=1,Zi=n,rn=null;break}e:{var u=e,g=a.return,b=a,T=n;if(n=cn,b.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var K=T,W=b,H=W.tag;if((W.mode&1)===0&&(H===0||H===11||H===15)){var C=W.alternate;C?(W.updateQueue=C.updateQueue,W.memoizedState=C.memoizedState,W.lanes=C.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=Oo(g);if(Z!==null){Z.flags&=-257,qo(Z,g,b,u,n),Z.mode&1&&Uo(u,K,n),n=Z,T=K;var ee=n.updateQueue;if(ee===null){var re=new Set;re.add(T),n.updateQueue=re}else ee.add(T);break e}else{if((n&1)===0){Uo(u,K,n),du();break e}T=Error(s(426))}}else if(Ye&&b.mode&1){var nn=Oo(g);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),qo(nn,g,b,u,n),ps(ai(T,b));break e}}u=T=ai(T,b),sn!==4&&(sn=2),$i===null?$i=[u]:$i.push(u),u=g;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var R=Go(u,T,n);fo(u,R);break e;case 1:b=T;var S=u.type,B=u.stateNode;if((u.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ja===null||!Ja.has(B)))){u.flags|=65536,n&=-n,u.lanes|=n;var L=Lo(u,b,n);fo(u,L);break e}}u=u.return}while(u!==null)}Sh(a)}catch(te){n=te,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Th(){var e=ll.current;return ll.current=el,e===null?el:e}function du(){(sn===0||sn===3||sn===2)&&(sn=4),on===null||(Er&268435455)===0&&(sl&268435455)===0||er(on,cn)}function cl(e,n){var a=Me;Me|=2;var i=Th();(on!==e||cn!==n)&&(Ra=null,Dr(e,n));do try{Fk();break}catch(l){zh(e,l)}while(!0);if(Ts(),Me=a,ll.current=i,rn!==null)throw Error(s(261));return on=null,cn=0,sn}function Fk(){for(;rn!==null;)wh(rn)}function Hk(){for(;rn!==null&&!Ne();)wh(rn)}function wh(e){var n=Dh(e.alternate,e,Pn);e.memoizedProps=e.pendingProps,n===null?Sh(e):rn=n,eu.current=null}function Sh(e){var n=e;do{var a=n.alternate;if(e=n.return,(n.flags&32768)===0){if(a=Vk(a,n,Pn),a!==null){rn=a;return}}else{if(a=_k(a,n),a!==null){a.flags&=32767,rn=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sn=6,rn=null;return}}if(n=n.sibling,n!==null){rn=n;return}rn=n=e}while(n!==null);sn===0&&(sn=5)}function Rr(e,n,a){var i=Pe,l=Zn.transition;try{Zn.transition=null,Pe=1,jk(e,n,a,i)}finally{Zn.transition=l,Pe=i}return null}function jk(e,n,a,i){do li();while(Qa!==null);if((Me&6)!==0)throw Error(s(327));a=e.finishedWork;var l=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var u=a.lanes|a.childLanes;if(Tc(e,u),e===on&&(rn=on=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||dl||(dl=!0,Rh(Ia,function(){return li(),null})),u=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||u){u=Zn.transition,Zn.transition=null;var g=Pe;Pe=1;var b=Me;Me|=4,eu.current=null,Ik(e,a),kh(a,e),uk(ds),St=!!us,ds=us=null,e.current=a,Ck(a),Dn(),Me=b,Pe=g,Zn.transition=u}else e.current=a;if(dl&&(dl=!1,Qa=e,ol=l),u=e.pendingLanes,u===0&&(Ja=null),Be(a.stateNode),Kn(e,Ce()),n!==null)for(i=e.onRecoverableError,a=0;a<n.length;a++)l=n[a],i(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=ru,ru=null,e;return(ol&1)!==0&&e.tag!==0&&li(),u=e.pendingLanes,(u&1)!==0?e===iu?Ji++:(Ji=0,iu=e):Ji=0,qa(),null}function li(){if(Qa!==null){var e=hd(ol),n=Zn.transition,a=Pe;try{if(Zn.transition=null,Pe=16>e?16:e,Qa===null)var i=!1;else{if(e=Qa,Qa=null,ol=0,(Me&6)!==0)throw Error(s(331));var l=Me;for(Me|=4,J=e.current;J!==null;){var u=J,g=u.child;if((J.flags&16)!==0){var b=u.deletions;if(b!==null){for(var T=0;T<b.length;T++){var K=b[T];for(J=K;J!==null;){var W=J;switch(W.tag){case 0:case 11:case 15:Yi(8,W,u)}var H=W.child;if(H!==null)H.return=W,J=H;else for(;J!==null;){W=J;var C=W.sibling,Z=W.return;if(dh(W),W===K){J=null;break}if(C!==null){C.return=Z,J=C;break}J=Z}}}var ee=u.alternate;if(ee!==null){var re=ee.child;if(re!==null){ee.child=null;do{var nn=re.sibling;re.sibling=null,re=nn}while(re!==null)}}J=u}}if((u.subtreeFlags&2064)!==0&&g!==null)g.return=u,J=g;else e:for(;J!==null;){if(u=J,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Yi(9,u,u.return)}var R=u.sibling;if(R!==null){R.return=u.return,J=R;break e}J=u.return}}var S=e.current;for(J=S;J!==null;){g=J;var B=g.child;if((g.subtreeFlags&2064)!==0&&B!==null)B.return=g,J=B;else e:for(g=S;J!==null;){if(b=J,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:tl(9,b)}}catch(te){Qe(b,b.return,te)}if(b===g){J=null;break e}var L=b.sibling;if(L!==null){L.return=b.return,J=L;break e}J=b.return}}if(Me=l,qa(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(ba,e)}catch{}i=!0}return i}finally{Pe=a,Zn.transition=n}}return!1}function Eh(e,n,a){n=ai(a,n),n=Go(e,n,1),e=Za(e,n,1),n=wn(),e!==null&&(zi(e,1,n),Kn(e,n))}function Qe(e,n,a){if(e.tag===3)Eh(e,e,a);else for(;n!==null;){if(n.tag===3){Eh(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ja===null||!Ja.has(i))){e=ai(a,e),e=Lo(n,e,1),n=Za(n,e,1),e=wn(),n!==null&&(zi(n,1,e),Kn(n,e));break}}n=n.return}}function Gk(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),n=wn(),e.pingedLanes|=e.suspendedLanes&a,on===e&&(cn&a)===a&&(sn===4||sn===3&&(cn&130023424)===cn&&500>Ce()-au?Dr(e,0):nu|=a),Kn(e,n)}function Ah(e,n){n===0&&((e.mode&1)===0?n=1:(n=fr,fr<<=1,(fr&130023424)===0&&(fr=4194304)));var a=wn();e=Ea(e,n),e!==null&&(zi(e,n,a),Kn(e,a))}function Lk(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ah(e,a)}function Uk(e,n){var a=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(n),Ah(e,a)}var Dh;Dh=function(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps||Rn.current)xn=!0;else{if((e.lanes&a)===0&&(n.flags&128)===0)return xn=!1,Kk(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Ye&&(n.flags&1048576)!==0&&to(n,jt,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;rl(e,n),e=n.pendingProps;var l=Yr(n,gn.current);ei(n,a),l=Vs(null,n,i,e,l,a);var u=_s();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Bn(i)?(u=!0,Wt(n)):u=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,As(n),l.updater=nl,n.stateNode=l,l._reactInternals=n,Fs(n,i,e,a),n=Ls(null,n,i,!0,u,a)):(n.tag=0,Ye&&u&&fs(n),Tn(null,n,l,a),n=n.child),n;case 16:i=n.elementType;e:{switch(rl(e,n),e=n.pendingProps,l=i._init,i=l(i._payload),n.type=i,l=n.tag=qk(i),e=aa(i,e),l){case 0:n=Gs(null,n,i,e,a);break e;case 1:n=Xo(null,n,i,e,a);break e;case 11:n=Yo(null,n,i,e,a);break e;case 14:n=Zo(null,n,i,aa(i.type,e),a);break e}throw Error(s(306,i,""))}return n;case 0:return i=n.type,l=n.pendingProps,l=n.elementType===i?l:aa(i,l),Gs(e,n,i,l,a);case 1:return i=n.type,l=n.pendingProps,l=n.elementType===i?l:aa(i,l),Xo(e,n,i,l,a);case 3:e:{if(eh(n),e===null)throw Error(s(387));i=n.pendingProps,u=n.memoizedState,l=u.element,go(e,n),Yt(n,i,null,a);var g=n.memoizedState;if(i=g.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){l=ai(Error(s(423)),n),n=nh(e,n,i,a,l);break e}else if(i!==l){l=ai(Error(s(424)),n),n=nh(e,n,i,a,l);break e}else for(Cn=La(n.stateNode.containerInfo.firstChild),In=n,Ye=!0,na=null,a=co(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jr(),i===l){n=Da(e,n,a);break e}Tn(e,n,i,a)}n=n.child}return n;case 5:return bo(n),e===null&&vs(n),i=n.type,l=n.pendingProps,u=e!==null?e.memoizedProps:null,g=l.children,os(i,l)?g=null:u!==null&&os(i,u)&&(n.flags|=32),Qo(e,n),Tn(e,n,g,a),n.child;case 6:return e===null&&vs(n),null;case 13:return ah(e,n,a);case 4:return Ds(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Qr(n,null,i,a):Tn(e,n,i,a),n.child;case 11:return i=n.type,l=n.pendingProps,l=n.elementType===i?l:aa(i,l),Yo(e,n,i,l,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:e:{if(i=n.type._context,l=n.pendingProps,u=n.memoizedProps,g=l.value,je(Ut,i._currentValue),i._currentValue=g,u!==null)if(ea(u.value,g)){if(u.children===l.children&&!Rn.current){n=Da(e,n,a);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var b=u.dependencies;if(b!==null){g=u.child;for(var T=b.firstContext;T!==null;){if(T.context===i){if(u.tag===1){T=Aa(-1,a&-a),T.tag=2;var K=u.updateQueue;if(K!==null){K=K.shared;var W=K.pending;W===null?T.next=T:(T.next=W.next,W.next=T),K.pending=T}}u.lanes|=a,T=u.alternate,T!==null&&(T.lanes|=a),Ss(u.return,a,n),b.lanes|=a;break}T=T.next}}else if(u.tag===10)g=u.type===n.type?null:u.child;else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,b=g.alternate,b!==null&&(b.lanes|=a),Ss(g,a,n),g=u.sibling}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===n){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}Tn(e,n,l.children,a),n=n.child}return n;case 9:return l=n.type,i=n.pendingProps.children,ei(n,a),l=qn(l),i=i(l),n.flags|=1,Tn(e,n,i,a),n.child;case 14:return i=n.type,l=aa(i,n.pendingProps),l=aa(i.type,l),Zo(e,n,i,l,a);case 15:return $o(e,n,n.type,n.pendingProps,a);case 17:return i=n.type,l=n.pendingProps,l=n.elementType===i?l:aa(i,l),rl(e,n),n.tag=1,Bn(i)?(e=!0,Wt(n)):e=!1,ei(n,a),Ho(n,i,l),Fs(n,i,l,a),Ls(null,n,i,!0,e,a);case 19:return ih(e,n,a);case 22:return Jo(e,n,a)}throw Error(s(156,n.tag))};function Rh(e,n){return en(e,n)}function Ok(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,i){return new Ok(e,n,a,i)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qk(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===Oe)return 14}return 2}function nr(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function kl(e,n,a,i,l,u){var g=2;if(i=e,typeof e=="function")ou(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case V:return Br(a.children,l,u,n);case se:g=8,l|=8;break;case ke:return e=$n(12,a,n,l|2),e.elementType=ke,e.lanes=u,e;case Ge:return e=$n(13,a,n,l),e.elementType=Ge,e.lanes=u,e;case Ve:return e=$n(19,a,n,l),e.elementType=Ve,e.lanes=u,e;case pe:return gl(a,l,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ee:g=10;break e;case xe:g=9;break e;case Ie:g=11;break e;case Oe:g=14;break e;case we:g=16,i=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=$n(g,a,n,l),n.elementType=e,n.type=i,n.lanes=u,n}function Br(e,n,a,i){return e=$n(7,e,i,n),e.lanes=a,e}function gl(e,n,a,i){return e=$n(22,e,i,n),e.elementType=pe,e.lanes=a,e.stateNode={isHidden:!1},e}function hu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function mu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yk(e,n,a,i,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function cu(e,n,a,i,l,u,g,b,T){return e=new Yk(e,n,a,b,T),n===1?(n=1,u===!0&&(n|=8)):n=0,u=$n(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},As(u),e}function Zk(e,n,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:i==null?null:""+i,children:e,containerInfo:n,implementation:a}}function Bh(e){if(!e)return Oa;e=e._reactInternals;e:{if(ae(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Bn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var a=e.type;if(Bn(a))return ao(e,a,n)}return n}function xh(e,n,a,i,l,u,g,b,T){return e=cu(a,i,!0,e,l,u,g,b,T),e.context=Bh(null),a=e.current,i=wn(),l=Xa(a),u=Aa(i,l),u.callback=n??null,Za(a,u,l),e.current.lanes=l,zi(e,l,i),Kn(e,i),e}function fl(e,n,a,i){var l=n.current,u=wn(),g=Xa(l);return a=Bh(a),n.context===null?n.context=a:n.pendingContext=a,n=Aa(u,g),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Za(l,n,g),e!==null&&(ta(e,l,g,u),qt(e,l,g)),g}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ku(e,n){Mh(e,n),(e=e.alternate)&&Mh(e,n)}function $k(){return null}var Kh=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}bl.prototype.render=gu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));fl(e,n,null,null)},bl.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ar(function(){fl(null,e,null,null)}),n[za]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var n=kd();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&yd(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vh(){}function Jk(e,n,a,i,l){if(l){if(typeof i=="function"){var u=i;i=function(){var K=yl(g);u.call(K)}}var g=xh(n,i,e,0,null,!1,!1,"",Vh);return e._reactRootContainer=g,e[za]=g.current,Ni(e.nodeType===8?e.parentNode:e),Ar(),g}for(;l=e.lastChild;)e.removeChild(l);if(typeof i=="function"){var b=i;i=function(){var K=yl(T);b.call(K)}}var T=cu(e,0,!1,null,null,!1,!1,"",Vh);return e._reactRootContainer=T,e[za]=T.current,Ni(e.nodeType===8?e.parentNode:e),Ar(function(){fl(n,T,a,i)}),T}function pl(e,n,a,i,l){var u=a._reactRootContainer;if(u){var g=u;if(typeof l=="function"){var b=l;l=function(){var T=yl(g);b.call(T)}}fl(n,g,e,l)}else g=Jk(a,n,e,l,i);return yl(g)}md=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var a=yr(n.pendingLanes);a!==0&&(Fl(n,a|1),Kn(n,Ce()),(Me&6)===0&&(ti=Ce()+500,qa()))}break;case 13:Ar(function(){var i=Ea(e,1);if(i!==null){var l=wn();ta(i,e,1,l)}}),ku(e,1)}},Hl=function(e){if(e.tag===13){var n=Ea(e,134217728);if(n!==null){var a=wn();ta(n,e,134217728,a)}ku(e,134217728)}},cd=function(e){if(e.tag===13){var n=Xa(e),a=Ea(e,n);if(a!==null){var i=wn();ta(a,e,n,i)}ku(e,n)}},kd=function(){return Pe},gd=function(e,n){var a=Pe;try{return Pe=e,n()}finally{Pe=a}},_a=function(e,n,a){switch(n){case"input":if(mi(e,a),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var l=Ct(i);if(!l)throw Error(s(90));tn(i),mi(i,l)}}}break;case"textarea":ua(e,a);break;case"select":n=a.value,n!=null&&Ma(e,!!a.multiple,n,!1)}},bi=su,mr=Ar;var Qk={usingClientEntryPoint:!1,Events:[Pi,Or,Ct,yi,pt,su]},Qi={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xk={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Re(e),e===null?null:e.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||$k,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{ba=zl.inject(Xk),zn=zl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qk,Vn.createPortal=function(e,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(n))throw Error(s(200));return Zk(e,n,null,a)},Vn.createRoot=function(e,n){if(!fu(e))throw Error(s(299));var a=!1,i="",l=Kh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=cu(e,1,!1,null,null,a,!1,i,l),e[za]=n.current,Ni(e.nodeType===8?e.parentNode:e),new gu(n)},Vn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Re(n),e=e===null?null:e.stateNode,e},Vn.flushSync=function(e){return Ar(e)},Vn.hydrate=function(e,n,a){if(!vl(n))throw Error(s(200));return pl(null,e,n,!0,a)},Vn.hydrateRoot=function(e,n,a){if(!fu(e))throw Error(s(405));var i=a!=null&&a.hydratedSources||null,l=!1,u="",g=Kh;if(a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),n=xh(n,null,e,1,a??null,l,!1,u,g),e[za]=n.current,Ni(e),i)for(e=0;e<i.length;e++)a=i[e],l=a._getVersion,l=l(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,l]:n.mutableSourceEagerHydrationData.push(a,l);return new bl(n)},Vn.render=function(e,n,a){if(!vl(n))throw Error(s(200));return pl(null,e,n,!1,a)},Vn.unmountComponentAtNode=function(e){if(!vl(e))throw Error(s(40));return e._reactRootContainer?(Ar(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[za]=null})}),!0):!1},Vn.unstable_batchedUpdates=su,Vn.unstable_renderSubtreeIntoContainer=function(e,n,a,i){if(!vl(a))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return pl(e,n,a,!1,i)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Hh;function dg(){if(Hh)return vu.exports;Hh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vu.exports=ug(),vu.exports}var jh;function og(){if(jh)return Tl;jh=1;var r=dg();return Tl.createRoot=r.createRoot,Tl.hydrateRoot=r.hydrateRoot,Tl}var hg=og(),w=$u();const mg=ag(w),cg=ng({__proto__:null,default:mg},[w]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vm=r=>{throw TypeError(r)},kg=(r,t,s)=>t.has(r)||Vm("Cannot "+s),Tu=(r,t,s)=>(kg(r,t,"read from private field"),s?s.call(r):t.get(r)),gg=(r,t,s)=>t.has(r)?Vm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,s),Gh="popstate";function fg(r={}){function t(d,o){let{pathname:h,search:c,hash:m}=d.location;return st("",{pathname:h,search:c,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(d,o){return typeof o=="string"?o:fa(o)}return bg(t,s,null,r)}function Se(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Je(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yg(){return Math.random().toString(36).substring(2,10)}function Lh(r,t){return{usr:r.state,key:r.key,idx:t}}function st(r,t,s=null,d){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?sr(t):t,state:s,key:t&&t.key||d||yg()}}function fa({pathname:r="/",search:t="",hash:s=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function sr(r){let t={};if(r){let s=r.indexOf("#");s>=0&&(t.hash=r.substring(s),r=r.substring(0,s));let d=r.indexOf("?");d>=0&&(t.search=r.substring(d),r=r.substring(0,d)),r&&(t.pathname=r)}return t}function bg(r,t,s,d={}){let{window:o=document.defaultView,v5Compat:h=!1}=d,c=o.history,m="POP",y=null,f=p();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function p(){return(c.state||{idx:null}).idx}function z(){m="POP";let _=p(),q=_==null?null:_-f;f=_,y&&y({action:m,location:I.location,delta:q})}function D(_,q){m="PUSH";let G=st(I.location,_,q);f=p()+1;let ne=Lh(G,f),be=I.createHref(G);try{c.pushState(ne,"",be)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;o.location.assign(be)}h&&y&&y({action:m,location:I.location,delta:1})}function M(_,q){m="REPLACE";let G=st(I.location,_,q);f=p();let ne=Lh(G,f),be=I.createHref(G);c.replaceState(ne,"",be),h&&y&&y({action:m,location:I.location,delta:0})}function j(_){return _m(_)}let I={get action(){return m},get location(){return r(o,c)},listen(_){if(y)throw new Error("A history only accepts one active listener");return o.addEventListener(Gh,z),y=_,()=>{o.removeEventListener(Gh,z),y=null}},createHref(_){return t(o,_)},createURL:j,encodeLocation(_){let q=j(_);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:D,replace:M,go(_){return c.go(_)}};return I}function _m(r,t=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Se(s,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:fa(r);return d=d.replace(/ $/,"%20"),!t&&d.startsWith("//")&&(d=s+d),new URL(d,s)}var rt,Uh=class{constructor(r){if(gg(this,rt,new Map),r)for(let[t,s]of r)this.set(t,s)}get(r){if(Tu(this,rt).has(r))return Tu(this,rt).get(r);if(r.defaultValue!==void 0)return r.defaultValue;throw new Error("No value found for context")}set(r,t){Tu(this,rt).set(r,t)}};rt=new WeakMap;var vg=new Set(["lazy","caseSensitive","path","id","index","children"]);function pg(r){return vg.has(r)}var zg=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Tg(r){return zg.has(r)}function wg(r){return r.index===!0}function ut(r,t,s=[],d={},o=!1){return r.map((h,c)=>{let m=[...s,String(c)],y=typeof h.id=="string"?h.id:m.join("-");if(Se(h.index!==!0||!h.children,"Cannot specify children on an index route"),Se(o||!d[y],`Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`),wg(h)){let f={...h,id:y};return d[y]=Oh(f,t(f)),f}else{let f={...h,id:y,children:void 0};return d[y]=Oh(f,t(f)),h.children&&(f.children=ut(h.children,t,m,d,o)),f}})}function Oh(r,t){return Object.assign(r,{...t,...typeof t.lazy=="object"&&t.lazy!=null?{lazy:{...r.lazy,...t.lazy}}:{}})}function rr(r,t,s="/"){return it(r,t,s,!1)}function it(r,t,s,d){let o=typeof t=="string"?sr(t):t,h=Fn(o.pathname||"/",s);if(h==null)return null;let c=Im(r);Sg(c);let m=null;for(let y=0;m==null&&y<c.length;++y){let f=Ng(h);m=Vg(c[y],f,d)}return m}function Nm(r,t){let{route:s,pathname:d,params:o}=r;return{id:s.id,pathname:d,params:o,data:t[s.id],loaderData:t[s.id],handle:s.handle}}function Im(r,t=[],s=[],d="",o=!1){let h=(c,m,y=o,f)=>{let p={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:m,route:c};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(d)&&y)return;Se(p.relativePath.startsWith(d),`Absolute route path "${p.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(d.length)}let z=ga([d,p.relativePath]),D=s.concat(p);c.children&&c.children.length>0&&(Se(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),Im(c.children,t,D,z,y)),!(c.path==null&&!c.index)&&t.push({path:z,score:Mg(z,c.index),routesMeta:D})};return r.forEach((c,m)=>{var y;if(c.path===""||!((y=c.path)!=null&&y.includes("?")))h(c,m);else for(let f of Cm(c.path))h(c,m,!0,f)}),t}function Cm(r){let t=r.split("/");if(t.length===0)return[];let[s,...d]=t,o=s.endsWith("?"),h=s.replace(/\?$/,"");if(d.length===0)return o?[h,""]:[h];let c=Cm(d.join("/")),m=[];return m.push(...c.map(y=>y===""?h:[h,y].join("/"))),o&&m.push(...c),m.map(y=>r.startsWith("/")&&y===""?"/":y)}function Sg(r){r.sort((t,s)=>t.score!==s.score?s.score-t.score:Kg(t.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}var Eg=/^:[\w-]+$/,Ag=3,Dg=2,Rg=1,Bg=10,xg=-2,qh=r=>r==="*";function Mg(r,t){let s=r.split("/"),d=s.length;return s.some(qh)&&(d+=xg),t&&(d+=Dg),s.filter(o=>!qh(o)).reduce((o,h)=>o+(Eg.test(h)?Ag:h===""?Rg:Bg),d)}function Kg(r,t){return r.length===t.length&&r.slice(0,-1).every((d,o)=>d===t[o])?r[r.length-1]-t[t.length-1]:0}function Vg(r,t,s=!1){let{routesMeta:d}=r,o={},h="/",c=[];for(let m=0;m<d.length;++m){let y=d[m],f=m===d.length-1,p=h==="/"?t:t.slice(h.length)||"/",z=Ml({path:y.relativePath,caseSensitive:y.caseSensitive,end:f},p),D=y.route;if(!z&&f&&s&&!d[d.length-1].route.index&&(z=Ml({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},p)),!z)return null;Object.assign(o,z.params),c.push({params:o,pathname:ga([h,z.pathname]),pathnameBase:Pg(ga([h,z.pathnameBase])),route:D}),z.pathnameBase!=="/"&&(h=ga([h,z.pathnameBase]))}return c}function Ml(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,d]=_g(r.path,r.caseSensitive,r.end),o=t.match(s);if(!o)return null;let h=o[0],c=h.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:d.reduce((f,{paramName:p,isOptional:z},D)=>{if(p==="*"){let j=m[D]||"";c=h.slice(0,h.length-j.length).replace(/(.)\/+$/,"$1")}const M=m[D];return z&&!M?f[p]=void 0:f[p]=(M||"").replace(/%2F/g,"/"),f},{}),pathname:h,pathnameBase:c,pattern:r}}function _g(r,t=!1,s=!0){Je(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let d=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,y)=>(d.push({paramName:m,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(d.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),d]}function Ng(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Je(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function Fn(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let s=t.endsWith("/")?t.length-1:t.length,d=r.charAt(s);return d&&d!=="/"?null:r.slice(s)||"/"}function Ig({basename:r,pathname:t}){return t==="/"?r:ga([r,t])}var Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ju=r=>Pm.test(r);function Cg(r,t="/"){let{pathname:s,search:d="",hash:o=""}=typeof r=="string"?sr(r):r,h;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?h=Yh(s.substring(1),"/"):h=Yh(s,t)):h=t,{pathname:h,search:Wg(d),hash:Fg(o)}}function Yh(r,t){let s=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function wu(r,t,s,d){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wm(r){return r.filter((t,s)=>s===0||t.route.path&&t.route.path.length>0)}function Vl(r){let t=Wm(r);return t.map((s,d)=>d===t.length-1?s.pathname:s.pathnameBase)}function _l(r,t,s,d=!1){let o;typeof r=="string"?o=sr(r):(o={...r},Se(!o.pathname||!o.pathname.includes("?"),wu("?","pathname","search",o)),Se(!o.pathname||!o.pathname.includes("#"),wu("#","pathname","hash",o)),Se(!o.search||!o.search.includes("#"),wu("#","search","hash",o)));let h=r===""||o.pathname==="",c=h?"/":o.pathname,m;if(c==null)m=s;else{let z=t.length-1;if(!d&&c.startsWith("..")){let D=c.split("/");for(;D[0]==="..";)D.shift(),z-=1;o.pathname=D.join("/")}m=z>=0?t[z]:"/"}let y=Cg(o,m),f=c&&c!=="/"&&c.endsWith("/"),p=(h||c===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(f||p)&&(y.pathname+="/"),y}var ga=r=>r.join("/").replace(/\/\/+/g,"/"),Pg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Wg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Fg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Y=(r,t=302)=>{let s=t;typeof s=="number"?s={status:s}:typeof s.status>"u"&&(s.status=302);let d=new Headers(s.headers);return d.set("Location",r),new Response(null,{...s,headers:d})},ot=class{constructor(r,t,s,d=!1){this.status=r,this.statusText=t||"",this.internal=d,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function dt(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function ht(r){return r.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hm(r,t){let s=r;if(typeof s!="string"||!Pm.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let d=s,o=!1;if(Fm)try{let h=new URL(window.location.href),c=s.startsWith("//")?new URL(h.protocol+s):new URL(s),m=Fn(c.pathname,t);c.origin===h.origin&&m!=null?s=m+c.search+c.hash:o=!0}catch{Je(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:o,to:s}}var lr=Symbol("Uninstrumented");function Hg(r,t){let s={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};r.forEach(o=>o({id:t.id,index:t.index,path:t.path,instrument(h){let c=Object.keys(s);for(let m of c)h[m]&&s[m].push(h[m])}}));let d={};if(typeof t.lazy=="function"&&s.lazy.length>0){let o=ui(s.lazy,t.lazy,()=>{});o&&(d.lazy=o)}if(typeof t.lazy=="object"){let o=t.lazy;["middleware","loader","action"].forEach(h=>{let c=o[h],m=s[`lazy.${h}`];if(typeof c=="function"&&m.length>0){let y=ui(m,c,()=>{});y&&(d.lazy=Object.assign(d.lazy||{},{[h]:y}))}})}return["loader","action"].forEach(o=>{let h=t[o];if(typeof h=="function"&&s[o].length>0){let c=h[lr]??h,m=ui(s[o],c,(...y)=>Zh(y[0]));m&&(o==="loader"&&c.hydrate===!0&&(m.hydrate=!0),m[lr]=c,d[o]=m)}}),t.middleware&&t.middleware.length>0&&s.middleware.length>0&&(d.middleware=t.middleware.map(o=>{let h=o[lr]??o,c=ui(s.middleware,h,(...m)=>Zh(m[0]));return c?(c[lr]=h,c):o})),d}function jg(r,t){let s={navigate:[],fetch:[]};if(t.forEach(d=>d({instrument(o){let h=Object.keys(o);for(let c of h)o[c]&&s[c].push(o[c])}})),s.navigate.length>0){let d=r.navigate[lr]??r.navigate,o=ui(s.navigate,d,(...h)=>{let[c,m]=h;return{to:typeof c=="number"||typeof c=="string"?c:c?fa(c):".",...$h(r,m??{})}});o&&(o[lr]=d,r.navigate=o)}if(s.fetch.length>0){let d=r.fetch[lr]??r.fetch,o=ui(s.fetch,d,(...h)=>{let[c,,m,y]=h;return{href:m??".",fetcherKey:c,...$h(r,y??{})}});o&&(o[lr]=d,r.fetch=o)}return r}function ui(r,t,s){return r.length===0?null:async(...d)=>{let o=await jm(r,s(...d),()=>t(...d),r.length-1);if(o.type==="error")throw o.value;return o.value}}async function jm(r,t,s,d){let o=r[d],h;if(o){let c,m=async()=>(c?console.error("You cannot call instrumented handlers more than once"):c=jm(r,t,s,d-1),h=await c,Se(h,"Expected a result"),h.type==="error"&&h.value instanceof Error?{status:"error",error:h.value}:{status:"success",error:void 0});try{await o(m,t)}catch(y){console.error("An instrumentation function threw an error:",y)}c||await m(),await c}else try{h={type:"success",value:await s()}}catch(c){h={type:"error",value:c}}return h||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Zh(r){let{request:t,context:s,params:d,unstable_pattern:o}=r;return{request:Gg(t),params:{...d},unstable_pattern:o,context:Lg(s)}}function $h(r,t){return{currentUrl:fa(r.state.location),..."formMethod"in t?{formMethod:t.formMethod}:{},..."formEncType"in t?{formEncType:t.formEncType}:{},..."formData"in t?{formData:t.formData}:{},..."body"in t?{body:t.body}:{}}}function Gg(r){return{method:r.method,url:r.url,headers:{get:(...t)=>r.headers.get(...t)}}}function Lg(r){if(Og(r)){let t={...r};return Object.freeze(t),t}else return{get:t=>r.get(t)}}var Ug=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Og(r){if(r===null||typeof r!="object")return!1;const t=Object.getPrototypeOf(r);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===Ug}var Gm=["POST","PUT","PATCH","DELETE"],qg=new Set(Gm),Yg=["GET",...Gm],Zg=new Set(Yg),Lm=new Set([301,302,303,307,308]),$g=new Set([307,308]),Su={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Jg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},et={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Qg=r=>({hasErrorBoundary:!!r.hasErrorBoundary}),Um="remix-router-transitions",Om=Symbol("ResetLoaderData");function Xg(r){const t=r.window?r.window:typeof window<"u"?window:void 0,s=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Se(r.routes.length>0,"You must provide a non-empty routes array to createRouter");let d=r.hydrationRouteProperties||[],o=r.mapRouteProperties||Qg,h=o;if(r.unstable_instrumentations){let v=r.unstable_instrumentations;h=A=>({...o(A),...Hg(v.map(x=>x.route).filter(Boolean),A)})}let c={},m=ut(r.routes,h,void 0,c),y,f=r.basename||"/";f.startsWith("/")||(f=`/${f}`);let p=r.dataStrategy||tf,z={...r.future},D=null,M=new Set,j=null,I=null,_=null,q=r.hydrationData!=null,G=rr(m,r.history.location,f),ne=!1,be=null,fe;if(G==null&&!r.patchRoutesOnNavigation){let v=Jn(404,{pathname:r.history.location.pathname}),{matches:A,route:x}=wl(m);fe=!0,G=A,be={[x.id]:v}}else if(G&&!r.hydrationData&&mr(G,m,r.history.location.pathname).active&&(G=null),G)if(G.some(v=>v.route.lazy))fe=!1;else if(!G.some(v=>Qu(v.route)))fe=!0;else{let v=r.hydrationData?r.hydrationData.loaderData:null,A=r.hydrationData?r.hydrationData.errors:null;if(A){let x=G.findIndex(P=>A[P.route.id]!==void 0);fe=G.slice(0,x+1).every(P=>!Gu(P.route,v,A))}else fe=G.every(x=>!Gu(x.route,v,A))}else{fe=!1,G=[];let v=mr(null,m,r.history.location.pathname);v.active&&v.matches&&(ne=!0,G=v.matches)}let ve,V={historyAction:r.history.action,location:r.history.location,matches:G,initialized:fe,navigation:Su,restoreScrollPosition:r.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:r.hydrationData&&r.hydrationData.loaderData||{},actionData:r.hydrationData&&r.hydrationData.actionData||null,errors:r.hydrationData&&r.hydrationData.errors||be,fetchers:new Map,blockers:new Map},se="POP",ke=null,Ee=!1,xe,Ie=!1,Ge=new Map,Ve=null,Oe=!1,we=!1,pe=new Set,F=new Map,Q=0,O=-1,E=new Map,N=new Set,he=new Map,ce=new Map,me=new Set,ze=new Map,_e,De=null;function He(){if(D=r.history.listen(({action:v,location:A,delta:x})=>{if(_e){_e(),_e=void 0;return}Je(ze.size===0||x!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let P=ya({currentLocation:V.location,nextLocation:A,historyAction:v});if(P&&x!=null){let U=new Promise(ie=>{_e=ie});r.history.go(x*-1),_a(P,{state:"blocked",location:A,proceed(){_a(P,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),U.then(()=>r.history.go(x))},reset(){let ie=new Map(V.blockers);ie.set(P,et),tn({blockers:ie})}}),ke==null||ke.resolve(),ke=null;return}return sa(v,A)}),s){wf(t,Ge);let v=()=>Sf(t,Ge);t.addEventListener("pagehide",v),Ve=()=>t.removeEventListener("pagehide",v)}return V.initialized||sa("POP",V.location,{initialHydration:!0}),ve}function pn(){D&&D(),Ve&&Ve(),M.clear(),xe&&xe.abort(),V.fetchers.forEach((v,A)=>gi(A)),V.blockers.forEach((v,A)=>Pr(A))}function Vr(v){return M.add(v),()=>M.delete(v)}function tn(v,A={}){v.matches&&(v.matches=v.matches.map(U=>{let ie=c[U.route.id],ue=U.route;return ue.element!==ie.element||ue.errorElement!==ie.errorElement||ue.hydrateFallbackElement!==ie.hydrateFallbackElement?{...U,route:ie}:U})),V={...V,...v};let x=[],P=[];V.fetchers.forEach((U,ie)=>{U.state==="idle"&&(me.has(ie)?x.push(ie):P.push(ie))}),me.forEach(U=>{!V.fetchers.has(U)&&!F.has(U)&&x.push(U)}),[...M].forEach(U=>U(V,{deletedFetchers:x,newErrors:v.errors??null,viewTransitionOpts:A.viewTransitionOpts,flushSync:A.flushSync===!0})),x.forEach(U=>gi(U)),P.forEach(U=>V.fetchers.delete(U))}function Xn(v,A,{flushSync:x}={}){var ye,le;let P=V.actionData!=null&&V.navigation.formMethod!=null&&vn(V.navigation.formMethod)&&V.navigation.state==="loading"&&((ye=v.state)==null?void 0:ye._isRedirect)!==!0,U;A.actionData?Object.keys(A.actionData).length>0?U=A.actionData:U=null:P?U=V.actionData:U=null;let ie=A.loaderData?lm(V.loaderData,A.loaderData,A.matches||[],A.errors):V.loaderData,ue=V.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((Te,Re)=>ue.set(Re,et)));let $=Oe?!1:bi(v,A.matches||V.matches),X=Ee===!0||V.navigation.formMethod!=null&&vn(V.navigation.formMethod)&&((le=v.state)==null?void 0:le._isRedirect)!==!0;y&&(m=y,y=void 0),Oe||se==="POP"||(se==="PUSH"?r.history.push(v,v.state):se==="REPLACE"&&r.history.replace(v,v.state));let ae;if(se==="POP"){let Te=Ge.get(V.location.pathname);Te&&Te.has(v.pathname)?ae={currentLocation:V.location,nextLocation:v}:Ge.has(v.pathname)&&(ae={currentLocation:v,nextLocation:V.location})}else if(Ie){let Te=Ge.get(V.location.pathname);Te?Te.add(v.pathname):(Te=new Set([v.pathname]),Ge.set(V.location.pathname,Te)),ae={currentLocation:V.location,nextLocation:v}}tn({...A,actionData:U,loaderData:ie,historyAction:se,location:v,initialized:!0,navigation:Su,revalidation:"idle",restoreScrollPosition:$,preventScrollReset:X,blockers:ue},{viewTransitionOpts:ae,flushSync:x===!0}),se="POP",Ee=!1,Ie=!1,Oe=!1,we=!1,ke==null||ke.resolve(),ke=null,De==null||De.resolve(),De=null}async function _r(v,A){if(ke==null||ke.resolve(),ke=null,typeof v=="number"){ke||(ke=om());let Re=ke.promise;return r.history.go(v),Re}let x=ju(V.location,V.matches,f,v,A==null?void 0:A.fromRouteId,A==null?void 0:A.relative),{path:P,submission:U,error:ie}=Jh(!1,x,A),ue=V.location,$=st(V.location,P,A&&A.state);$={...$,...r.history.encodeLocation($)};let X=A&&A.replace!=null?A.replace:void 0,ae="PUSH";X===!0?ae="REPLACE":X===!1||U!=null&&vn(U.formMethod)&&U.formAction===V.location.pathname+V.location.search&&(ae="REPLACE");let ye=A&&"preventScrollReset"in A?A.preventScrollReset===!0:void 0,le=(A&&A.flushSync)===!0,Te=ya({currentLocation:ue,nextLocation:$,historyAction:ae});if(Te){_a(Te,{state:"blocked",location:$,proceed(){_a(Te,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),_r(v,A)},reset(){let Re=new Map(V.blockers);Re.set(Te,et),tn({blockers:Re})}});return}await sa(ae,$,{submission:U,pendingError:ie,preventScrollReset:ye,replace:A&&A.replace,enableViewTransition:A&&A.viewTransition,flushSync:le,callSiteDefaultShouldRevalidate:A&&A.unstable_defaultShouldRevalidate})}function kt(){De||(De=om()),or(),tn({revalidation:"loading"});let v=De.promise;return V.navigation.state==="submitting"?v:V.navigation.state==="idle"?(sa(V.historyAction,V.location,{startUninterruptedRevalidation:!0}),v):(sa(se||V.historyAction,V.navigation.location,{overrideNavigation:V.navigation,enableViewTransition:Ie===!0}),v)}async function sa(v,A,x){xe&&xe.abort(),xe=null,se=v,Oe=(x&&x.startUninterruptedRevalidation)===!0,pt(V.location,V.matches),Ee=(x&&x.preventScrollReset)===!0,Ie=(x&&x.enableViewTransition)===!0;let P=y||m,U=x&&x.overrideNavigation,ie=x!=null&&x.initialHydration&&V.matches&&V.matches.length>0&&!ne?V.matches:rr(P,A,f),ue=(x&&x.flushSync)===!0;if(ie&&V.initialized&&!we&&cf(V.location,A)&&!(x&&x.submission&&vn(x.submission.formMethod))){Xn(A,{matches:ie},{flushSync:ue});return}let $=mr(ie,P,A.pathname);if($.active&&$.matches&&(ie=$.matches),!ie){let{error:en,notFoundMatches:un,route:Ne}=da(A.pathname);Xn(A,{matches:un,loaderData:{},errors:{[Ne.id]:en}},{flushSync:ue});return}xe=new AbortController;let X=si(r.history,A,xe.signal,x&&x.submission),ae=r.getContext?await r.getContext():new Uh,ye;if(x&&x.pendingError)ye=[ir(ie).route.id,{type:"error",error:x.pendingError}];else if(x&&x.submission&&vn(x.submission.formMethod)){let en=await mi(X,A,x.submission,ie,ae,$.active,x&&x.initialHydration===!0,{replace:x.replace,flushSync:ue});if(en.shortCircuited)return;if(en.pendingActionResult){let[un,Ne]=en.pendingActionResult;if(Wn(Ne)&&dt(Ne.error)&&Ne.error.status===404){xe=null,Xn(A,{matches:en.matches,loaderData:{},errors:{[un]:Ne.error}});return}}ie=en.matches||ie,ye=en.pendingActionResult,U=Eu(A,x.submission),ue=!1,$.active=!1,X=si(r.history,X.url,X.signal)}let{shortCircuited:le,matches:Te,loaderData:Re,errors:an}=await gt(X,A,ie,ae,$.active,U,x&&x.submission,x&&x.fetcherSubmission,x&&x.replace,x&&x.initialHydration===!0,ue,ye,x&&x.callSiteDefaultShouldRevalidate);le||(xe=null,Xn(A,{matches:Te||ie,...sm(ye),loaderData:Re,errors:an}))}async function mi(v,A,x,P,U,ie,ue,$={}){or();let X=zf(A,x);if(tn({navigation:X},{flushSync:$.flushSync===!0}),ie){let le=await Na(P,A.pathname,v.signal);if(le.type==="aborted")return{shortCircuited:!0};if(le.type==="error"){if(le.partialMatches.length===0){let{matches:Re,route:an}=wl(m);return{matches:Re,pendingActionResult:[an.id,{type:"error",error:le.error}]}}let Te=ir(le.partialMatches).route.id;return{matches:le.partialMatches,pendingActionResult:[Te,{type:"error",error:le.error}]}}else if(le.matches)P=le.matches;else{let{notFoundMatches:Te,error:Re,route:an}=da(A.pathname);return{matches:Te,pendingActionResult:[an.id,{type:"error",error:Re}]}}}let ae,ye=Rl(P,A);if(!ye.route.action&&!ye.route.lazy)ae={type:"error",error:Jn(405,{method:v.method,pathname:A.pathname,routeId:ye.route.id})};else{let le=di(h,c,v,P,ye,ue?[]:d,U),Te=await Ka(v,le,U,null);if(ae=Te[ye.route.id],!ae){for(let Re of P)if(Te[Re.route.id]){ae=Te[Re.route.id];break}}if(v.signal.aborted)return{shortCircuited:!0}}if(Mr(ae)){let le;return $&&$.replace!=null?le=$.replace:le=rm(ae.response.headers.get("Location"),new URL(v.url),f,r.history)===V.location.pathname+V.location.search,await ua(v,ae,!0,{submission:x,replace:le}),{shortCircuited:!0}}if(Wn(ae)){let le=ir(P,ye.route.id);return($&&$.replace)!==!0&&(se="PUSH"),{matches:P,pendingActionResult:[le.route.id,ae,ye.route.id]}}return{matches:P,pendingActionResult:[ye.route.id,ae]}}async function gt(v,A,x,P,U,ie,ue,$,X,ae,ye,le,Te){let Re=ie||Eu(A,ue),an=ue||$||dm(Re),en=!Oe&&!ae;if(U){if(en){let We=Nr(le);tn({navigation:Re,...We!==void 0?{actionData:We}:{}},{flushSync:ye})}let Be=await Na(x,A.pathname,v.signal);if(Be.type==="aborted")return{shortCircuited:!0};if(Be.type==="error"){if(Be.partialMatches.length===0){let{matches:Ca,route:va}=wl(m);return{matches:Ca,loaderData:{},errors:{[va.id]:Be.error}}}let We=ir(Be.partialMatches).route.id;return{matches:Be.partialMatches,loaderData:{},errors:{[We]:Be.error}}}else if(Be.matches)x=Be.matches;else{let{error:We,notFoundMatches:Ca,route:va}=da(A.pathname);return{matches:Ca,loaderData:{},errors:{[va.id]:We}}}}let un=y||m,{dsMatches:Ne,revalidatingFetchers:Dn}=Qh(v,P,h,c,r.history,V,x,an,A,ae?[]:d,ae===!0,we,pe,me,he,N,un,f,r.patchRoutesOnNavigation!=null,le,Te);if(O=++Q,!r.dataStrategy&&!Ne.some(Be=>Be.shouldLoad)&&!Ne.some(Be=>Be.route.middleware&&Be.route.middleware.length>0)&&Dn.length===0){let Be=Ir();return Xn(A,{matches:x,loaderData:{},errors:le&&Wn(le[1])?{[le[0]]:le[1].error}:null,...sm(le),...Be?{fetchers:new Map(V.fetchers)}:{}},{flushSync:ye}),{shortCircuited:!0}}if(en){let Be={};if(!U){Be.navigation=Re;let We=Nr(le);We!==void 0&&(Be.actionData=We)}Dn.length>0&&(Be.fetchers=dr(Dn)),tn(Be,{flushSync:ye})}Dn.forEach(Be=>{Gn(Be.key),Be.controller&&F.set(Be.key,Be.controller)});let Ce=()=>Dn.forEach(Be=>Gn(Be.key));xe&&xe.signal.addEventListener("abort",Ce);let{loaderResults:kr,fetcherResults:Ln}=await ki(Ne,Dn,v,P);if(v.signal.aborted)return{shortCircuited:!0};xe&&xe.signal.removeEventListener("abort",Ce),Dn.forEach(Be=>F.delete(Be.key));let _n=Sl(kr);if(_n)return await ua(v,_n.result,!0,{replace:X}),{shortCircuited:!0};if(_n=Sl(Ln),_n)return N.add(_n.key),await ua(v,_n.result,!0,{replace:X}),{shortCircuited:!0};let{loaderData:Ia,errors:gr}=tm(V,x,kr,le,Dn,Ln);ae&&V.errors&&(gr={...V.errors,...gr});let oa=Ir(),ba=Cr(O),zn=oa||ba||Dn.length>0;return{matches:x,loaderData:Ia,errors:gr,...zn?{fetchers:new Map(V.fetchers)}:{}}}function Nr(v){if(v&&!Wn(v[1]))return{[v[0]]:v[1].data};if(V.actionData)return Object.keys(V.actionData).length===0?null:V.actionData}function dr(v){return v.forEach(A=>{let x=V.fetchers.get(A.key),P=nt(void 0,x?x.data:void 0);V.fetchers.set(A.key,P)}),new Map(V.fetchers)}async function Ma(v,A,x,P){Gn(v);let U=(P&&P.flushSync)===!0,ie=y||m,ue=ju(V.location,V.matches,f,x,A,P==null?void 0:P.relative),$=rr(ie,ue,f),X=mr($,ie,ue);if(X.active&&X.matches&&($=X.matches),!$){jn(v,A,Jn(404,{pathname:ue}),{flushSync:U});return}let{path:ae,submission:ye,error:le}=Jh(!0,ue,P);if(le){jn(v,A,le,{flushSync:U});return}let Te=r.getContext?await r.getContext():new Uh,Re=(P&&P.preventScrollReset)===!0;if(ye&&vn(ye.formMethod)){await ci(v,A,ae,$,Te,X.active,U,Re,ye,P&&P.unstable_defaultShouldRevalidate);return}he.set(v,{routeId:A,path:ae}),await ft(v,A,ae,$,Te,X.active,U,Re,ye)}async function ci(v,A,x,P,U,ie,ue,$,X,ae){or(),he.delete(v);let ye=V.fetchers.get(v);An(v,Tf(X,ye),{flushSync:ue});let le=new AbortController,Te=si(r.history,x,le.signal,X);if(ie){let qe=await Na(P,new URL(Te.url).pathname,Te.signal,v);if(qe.type==="aborted")return;if(qe.type==="error"){jn(v,A,qe.error,{flushSync:ue});return}else if(qe.matches)P=qe.matches;else{jn(v,A,Jn(404,{pathname:x}),{flushSync:ue});return}}let Re=Rl(P,x);if(!Re.route.action&&!Re.route.lazy){let qe=Jn(405,{method:X.formMethod,pathname:x,routeId:A});jn(v,A,qe,{flushSync:ue});return}F.set(v,le);let an=Q,en=di(h,c,Te,P,Re,d,U),un=await Ka(Te,en,U,v),Ne=un[Re.route.id];if(!Ne){for(let qe of en)if(un[qe.route.id]){Ne=un[qe.route.id];break}}if(Te.signal.aborted){F.get(v)===le&&F.delete(v);return}if(me.has(v)){if(Mr(Ne)||Wn(Ne)){An(v,xa(void 0));return}}else{if(Mr(Ne))if(F.delete(v),O>an){An(v,xa(void 0));return}else return N.add(v),An(v,nt(X)),ua(Te,Ne,!1,{fetcherSubmission:X,preventScrollReset:$});if(Wn(Ne)){jn(v,A,Ne.error);return}}let Dn=V.navigation.location||V.location,Ce=si(r.history,Dn,le.signal),kr=y||m,Ln=V.navigation.state!=="idle"?rr(kr,V.navigation.location,f):V.matches;Se(Ln,"Didn't find any matches after fetcher action");let _n=++Q;E.set(v,_n);let Ia=nt(X,Ne.data);V.fetchers.set(v,Ia);let{dsMatches:gr,revalidatingFetchers:oa}=Qh(Ce,U,h,c,r.history,V,Ln,X,Dn,d,!1,we,pe,me,he,N,kr,f,r.patchRoutesOnNavigation!=null,[Re.route.id,Ne],ae);oa.filter(qe=>qe.key!==v).forEach(qe=>{let pa=qe.key,fr=V.fetchers.get(pa),yr=nt(void 0,fr?fr.data:void 0);V.fetchers.set(pa,yr),Gn(pa),qe.controller&&F.set(pa,qe.controller)}),tn({fetchers:new Map(V.fetchers)});let ba=()=>oa.forEach(qe=>Gn(qe.key));le.signal.addEventListener("abort",ba);let{loaderResults:zn,fetcherResults:Be}=await ki(gr,oa,Ce,U);if(le.signal.aborted)return;if(le.signal.removeEventListener("abort",ba),E.delete(v),F.delete(v),oa.forEach(qe=>F.delete(qe.key)),V.fetchers.has(v)){let qe=xa(Ne.data);V.fetchers.set(v,qe)}let We=Sl(zn);if(We)return ua(Ce,We.result,!1,{preventScrollReset:$});if(We=Sl(Be),We)return N.add(We.key),ua(Ce,We.result,!1,{preventScrollReset:$});let{loaderData:Ca,errors:va}=tm(V,Ln,zn,void 0,oa,Be);Cr(_n),V.navigation.state==="loading"&&_n>O?(Se(se,"Expected pending action"),xe&&xe.abort(),Xn(V.navigation.location,{matches:Ln,loaderData:Ca,errors:va,fetchers:new Map(V.fetchers)})):(tn({errors:va,loaderData:lm(V.loaderData,Ca,Ln,va),fetchers:new Map(V.fetchers)}),we=!1)}async function ft(v,A,x,P,U,ie,ue,$,X){let ae=V.fetchers.get(v);An(v,nt(X,ae?ae.data:void 0),{flushSync:ue});let ye=new AbortController,le=si(r.history,x,ye.signal);if(ie){let Ne=await Na(P,new URL(le.url).pathname,le.signal,v);if(Ne.type==="aborted")return;if(Ne.type==="error"){jn(v,A,Ne.error,{flushSync:ue});return}else if(Ne.matches)P=Ne.matches;else{jn(v,A,Jn(404,{pathname:x}),{flushSync:ue});return}}let Te=Rl(P,x);F.set(v,ye);let Re=Q,an=di(h,c,le,P,Te,d,U),un=(await Ka(le,an,U,v))[Te.route.id];if(F.get(v)===ye&&F.delete(v),!le.signal.aborted){if(me.has(v)){An(v,xa(void 0));return}if(Mr(un))if(O>Re){An(v,xa(void 0));return}else{N.add(v),await ua(le,un,!1,{preventScrollReset:$});return}if(Wn(un)){jn(v,A,un.error);return}An(v,xa(un.data))}}async function ua(v,A,x,{submission:P,fetcherSubmission:U,preventScrollReset:ie,replace:ue}={}){x||(ke==null||ke.resolve(),ke=null),A.response.headers.has("X-Remix-Revalidate")&&(we=!0);let $=A.response.headers.get("Location");Se($,"Expected a Location header on the redirect Response"),$=rm($,new URL(v.url),f,r.history);let X=st(V.location,$,{_isRedirect:!0});if(s){let an=!1;if(A.response.headers.has("X-Remix-Reload-Document"))an=!0;else if(Ju($)){const en=_m($,!0);an=en.origin!==t.location.origin||Fn(en.pathname,f)==null}if(an){ue?t.location.replace($):t.location.assign($);return}}xe=null;let ae=ue===!0||A.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ye,formAction:le,formEncType:Te}=V.navigation;!P&&!U&&ye&&le&&Te&&(P=dm(V.navigation));let Re=P||U;if($g.has(A.response.status)&&Re&&vn(Re.formMethod))await sa(ae,X,{submission:{...Re,formAction:$},preventScrollReset:ie||Ee,enableViewTransition:x?Ie:void 0});else{let an=Eu(X,P);await sa(ae,X,{overrideNavigation:an,fetcherSubmission:U,preventScrollReset:ie||Ee,enableViewTransition:x?Ie:void 0})}}async function Ka(v,A,x,P){var ue;let U,ie={};try{U=await sf(p,v,A,P,x,!1)}catch($){return A.filter(X=>X.shouldLoad).forEach(X=>{ie[X.route.id]={type:"error",error:$}}),ie}if(v.signal.aborted)return ie;if(!vn(v.method))for(let $ of A){if(((ue=U[$.route.id])==null?void 0:ue.type)==="error")break;!U.hasOwnProperty($.route.id)&&!V.loaderData.hasOwnProperty($.route.id)&&(!V.errors||!V.errors.hasOwnProperty($.route.id))&&$.shouldCallHandler()&&(U[$.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${$.route.id}`)})}for(let[$,X]of Object.entries(U))if(yf(X)){let ae=X.result;ie[$]={type:"redirect",response:hf(ae,v,$,A,f)}}else ie[$]=await of(X);return ie}async function ki(v,A,x,P){let U=Ka(x,v,P,null),ie=Promise.all(A.map(async X=>{if(X.matches&&X.match&&X.request&&X.controller){let ye=(await Ka(X.request,X.matches,P,X.key))[X.match.route.id];return{[X.key]:ye}}else return Promise.resolve({[X.key]:{type:"error",error:Jn(404,{pathname:X.path})}})})),ue=await U,$=(await ie).reduce((X,ae)=>Object.assign(X,ae),{});return{loaderResults:ue,fetcherResults:$}}function or(){we=!0,he.forEach((v,A)=>{F.has(A)&&pe.add(A),Gn(A)})}function An(v,A,x={}){V.fetchers.set(v,A),tn({fetchers:new Map(V.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function jn(v,A,x,P={}){let U=ir(V.matches,A);gi(v),tn({errors:{[U.route.id]:x},fetchers:new Map(V.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Va(v){return ce.set(v,(ce.get(v)||0)+1),me.has(v)&&me.delete(v),V.fetchers.get(v)||Jg}function hr(v,A){Gn(v,A==null?void 0:A.reason),An(v,xa(null))}function gi(v){let A=V.fetchers.get(v);F.has(v)&&!(A&&A.state==="loading"&&E.has(v))&&Gn(v),he.delete(v),E.delete(v),N.delete(v),me.delete(v),pe.delete(v),V.fetchers.delete(v)}function yt(v){let A=(ce.get(v)||0)-1;A<=0?(ce.delete(v),me.add(v)):ce.set(v,A),tn({fetchers:new Map(V.fetchers)})}function Gn(v,A){let x=F.get(v);x&&(x.abort(A),F.delete(v))}function bt(v){for(let A of v){let x=Va(A),P=xa(x.data);V.fetchers.set(A,P)}}function Ir(){let v=[],A=!1;for(let x of N){let P=V.fetchers.get(x);Se(P,`Expected fetcher: ${x}`),P.state==="loading"&&(N.delete(x),v.push(x),A=!0)}return bt(v),A}function Cr(v){let A=[];for(let[x,P]of E)if(P<v){let U=V.fetchers.get(x);Se(U,`Expected fetcher: ${x}`),U.state==="loading"&&(Gn(x),E.delete(x),A.push(x))}return bt(A),A.length>0}function fi(v,A){let x=V.blockers.get(v)||et;return ze.get(v)!==A&&ze.set(v,A),x}function Pr(v){V.blockers.delete(v),ze.delete(v)}function _a(v,A){let x=V.blockers.get(v)||et;Se(x.state==="unblocked"&&A.state==="blocked"||x.state==="blocked"&&A.state==="blocked"||x.state==="blocked"&&A.state==="proceeding"||x.state==="blocked"&&A.state==="unblocked"||x.state==="proceeding"&&A.state==="unblocked",`Invalid blocker state transition: ${x.state} -> ${A.state}`);let P=new Map(V.blockers);P.set(v,A),tn({blockers:P})}function ya({currentLocation:v,nextLocation:A,historyAction:x}){if(ze.size===0)return;ze.size>1&&Je(!1,"A router only supports one blocker at a time");let P=Array.from(ze.entries()),[U,ie]=P[P.length-1],ue=V.blockers.get(U);if(!(ue&&ue.state==="proceeding")&&ie({currentLocation:v,nextLocation:A,historyAction:x}))return U}function da(v){let A=Jn(404,{pathname:v}),x=y||m,{matches:P,route:U}=wl(x);return{notFoundMatches:P,route:U,error:A}}function vt(v,A,x){if(j=v,_=A,I=x||null,!q&&V.navigation===Su){q=!0;let P=bi(V.location,V.matches);P!=null&&tn({restoreScrollPosition:P})}return()=>{j=null,_=null,I=null}}function yi(v,A){return I&&I(v,A.map(P=>Nm(P,V.loaderData)))||v.key}function pt(v,A){if(j&&_){let x=yi(v,A);j[x]=_()}}function bi(v,A){if(j){let x=yi(v,A),P=j[x];if(typeof P=="number")return P}return null}function mr(v,A,x){if(r.patchRoutesOnNavigation)if(v){if(Object.keys(v[0].params).length>0)return{active:!0,matches:it(A,x,f,!0)}}else return{active:!0,matches:it(A,x,f,!0)||[]};return{active:!1,matches:null}}async function Na(v,A,x,P){if(!r.patchRoutesOnNavigation)return{type:"success",matches:v};let U=v;for(;;){let ie=y==null,ue=y||m,$=c;try{await r.patchRoutesOnNavigation({signal:x,path:A,matches:U,fetcherKey:P,patch:(ye,le)=>{x.aborted||Xh(ye,le,ue,$,h,!1)}})}catch(ye){return{type:"error",error:ye,partialMatches:U}}finally{ie&&!x.aborted&&(m=[...m])}if(x.aborted)return{type:"aborted"};let X=rr(ue,A,f),ae=null;if(X){if(Object.keys(X[0].params).length===0)return{type:"success",matches:X};if(ae=it(ue,A,f,!0),!(ae&&U.length<ae.length&&vi(U,ae.slice(0,U.length))))return{type:"success",matches:X}}if(ae||(ae=it(ue,A,f,!0)),!ae||vi(U,ae))return{type:"success",matches:null};U=ae}}function vi(v,A){return v.length===A.length&&v.every((x,P)=>x.route.id===A[P].route.id)}function cr(v){c={},y=ut(v,h,void 0,c)}function pi(v,A,x=!1){let P=y==null;Xh(v,A,y||m,c,h,x),P&&(m=[...m],tn({}))}return ve={get basename(){return f},get future(){return z},get state(){return V},get routes(){return m},get window(){return t},initialize:He,subscribe:Vr,enableScrollRestoration:vt,navigate:_r,fetch:Ma,revalidate:kt,createHref:v=>r.history.createHref(v),encodeLocation:v=>r.history.encodeLocation(v),getFetcher:Va,resetFetcher:hr,deleteFetcher:yt,dispose:pn,getBlocker:fi,deleteBlocker:Pr,patchRoutes:pi,_internalFetchControllers:F,_internalSetRoutes:cr,_internalSetStateDoNotUseOrYouWillBreakYourApp(v){tn(v)}},r.unstable_instrumentations&&(ve=jg(ve,r.unstable_instrumentations.map(v=>v.router).filter(Boolean))),ve}function ef(r){return r!=null&&("formData"in r&&r.formData!=null||"body"in r&&r.body!==void 0)}function ju(r,t,s,d,o,h){let c,m;if(o){c=[];for(let f of t)if(c.push(f),f.route.id===o){m=f;break}}else c=t,m=t[t.length-1];let y=_l(d||".",Vl(c),Fn(r.pathname,s)||r.pathname,h==="path");if(d==null&&(y.search=r.search,y.hash=r.hash),(d==null||d===""||d===".")&&m){let f=ed(y.search);if(m.route.index&&!f)y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index";else if(!m.route.index&&f){let p=new URLSearchParams(y.search),z=p.getAll("index");p.delete("index"),z.filter(M=>M).forEach(M=>p.append("index",M));let D=p.toString();y.search=D?`?${D}`:""}}return s!=="/"&&(y.pathname=Ig({basename:s,pathname:y.pathname})),fa(y)}function Jh(r,t,s){if(!s||!ef(s))return{path:t};if(s.formMethod&&!pf(s.formMethod))return{path:t,error:Jn(405,{method:s.formMethod})};let d=()=>({path:t,error:Jn(400,{type:"invalid-body"})}),h=(s.formMethod||"get").toUpperCase(),c=Qm(t);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!vn(h))return d();let z=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((D,[M,j])=>`${D}${M}=${j}
`,""):String(s.body);return{path:t,submission:{formMethod:h,formAction:c,formEncType:s.formEncType,formData:void 0,json:void 0,text:z}}}else if(s.formEncType==="application/json"){if(!vn(h))return d();try{let z=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:t,submission:{formMethod:h,formAction:c,formEncType:s.formEncType,formData:void 0,json:z,text:void 0}}}catch{return d()}}}Se(typeof FormData=="function","FormData is not available in this environment");let m,y;if(s.formData)m=Uu(s.formData),y=s.formData;else if(s.body instanceof FormData)m=Uu(s.body),y=s.body;else if(s.body instanceof URLSearchParams)m=s.body,y=im(m);else if(s.body==null)m=new URLSearchParams,y=new FormData;else try{m=new URLSearchParams(s.body),y=im(m)}catch{return d()}let f={formMethod:h,formAction:c,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:y,json:void 0,text:void 0};if(vn(f.formMethod))return{path:t,submission:f};let p=sr(t);return r&&p.search&&ed(p.search)&&m.append("index",""),p.search=`?${m}`,{path:fa(p),submission:f}}function Qh(r,t,s,d,o,h,c,m,y,f,p,z,D,M,j,I,_,q,G,ne,be){var Oe;let fe=ne?Wn(ne[1])?ne[1].error:ne[1].data:void 0,ve=o.createURL(h.location),V=o.createURL(y),se;if(p&&h.errors){let we=Object.keys(h.errors)[0];se=c.findIndex(pe=>pe.route.id===we)}else if(ne&&Wn(ne[1])){let we=ne[0];se=c.findIndex(pe=>pe.route.id===we)-1}let ke=ne?ne[1].statusCode:void 0,Ee=ke&&ke>=400,xe={currentUrl:ve,currentParams:((Oe=h.matches[0])==null?void 0:Oe.params)||{},nextUrl:V,nextParams:c[0].params,...m,actionResult:fe,actionStatus:ke},Ie=ht(c),Ge=c.map((we,pe)=>{let{route:F}=we,Q=null;if(se!=null&&pe>se?Q=!1:F.lazy?Q=!0:Qu(F)?p?Q=Gu(F,h.loaderData,h.errors):nf(h.loaderData,h.matches[pe],we)&&(Q=!0):Q=!1,Q!==null)return Lu(s,d,r,Ie,we,f,t,Q);let O=!1;typeof be=="boolean"?O=be:Ee?O=!1:(z||ve.pathname+ve.search===V.pathname+V.search||ve.search!==V.search||af(h.matches[pe],we))&&(O=!0);let E={...xe,defaultShouldRevalidate:O},N=lt(we,E);return Lu(s,d,r,Ie,we,f,t,N,E,be)}),Ve=[];return j.forEach((we,pe)=>{if(p||!c.some(me=>me.route.id===we.routeId)||M.has(pe))return;let F=h.fetchers.get(pe),Q=F&&F.state!=="idle"&&F.data===void 0,O=rr(_,we.path,q);if(!O){if(G&&Q)return;Ve.push({key:pe,routeId:we.routeId,path:we.path,matches:null,match:null,request:null,controller:null});return}if(I.has(pe))return;let E=Rl(O,we.path),N=new AbortController,he=si(o,we.path,N.signal),ce=null;if(D.has(pe))D.delete(pe),ce=di(s,d,he,O,E,f,t);else if(Q)z&&(ce=di(s,d,he,O,E,f,t));else{let me;typeof be=="boolean"?me=be:Ee?me=!1:me=z;let ze={...xe,defaultShouldRevalidate:me};lt(E,ze)&&(ce=di(s,d,he,O,E,f,t,ze))}ce&&Ve.push({key:pe,routeId:we.routeId,path:we.path,matches:ce,match:E,request:he,controller:N})}),{dsMatches:Ge,revalidatingFetchers:Ve}}function Qu(r){return r.loader!=null||r.middleware!=null&&r.middleware.length>0}function Gu(r,t,s){if(r.lazy)return!0;if(!Qu(r))return!1;let d=t!=null&&r.id in t,o=s!=null&&s[r.id]!==void 0;return!d&&o?!1:typeof r.loader=="function"&&r.loader.hydrate===!0?!0:!d&&!o}function nf(r,t,s){let d=!t||s.route.id!==t.route.id,o=!r.hasOwnProperty(s.route.id);return d||o}function af(r,t){let s=r.route.path;return r.pathname!==t.pathname||s!=null&&s.endsWith("*")&&r.params["*"]!==t.params["*"]}function lt(r,t){if(r.route.shouldRevalidate){let s=r.route.shouldRevalidate(t);if(typeof s=="boolean")return s}return t.defaultShouldRevalidate}function Xh(r,t,s,d,o,h){let c;if(r){let f=d[r];Se(f,`No route found to patch children into: routeId = ${r}`),f.children||(f.children=[]),c=f.children}else c=s;let m=[],y=[];if(t.forEach(f=>{let p=c.find(z=>qm(f,z));p?y.push({existingRoute:p,newRoute:f}):m.push(f)}),m.length>0){let f=ut(m,o,[r||"_","patch",String((c==null?void 0:c.length)||"0")],d);c.push(...f)}if(h&&y.length>0)for(let f=0;f<y.length;f++){let{existingRoute:p,newRoute:z}=y[f],D=p,[M]=ut([z],o,[],{},!0);Object.assign(D,{element:M.element?M.element:D.element,errorElement:M.errorElement?M.errorElement:D.errorElement,hydrateFallbackElement:M.hydrateFallbackElement?M.hydrateFallbackElement:D.hydrateFallbackElement})}}function qm(r,t){return"id"in r&&"id"in t&&r.id===t.id?!0:r.index===t.index&&r.path===t.path&&r.caseSensitive===t.caseSensitive?(!r.children||r.children.length===0)&&(!t.children||t.children.length===0)?!0:r.children.every((s,d)=>{var o;return(o=t.children)==null?void 0:o.some(h=>qm(s,h))}):!1}var em=new WeakMap,Ym=({key:r,route:t,manifest:s,mapRouteProperties:d})=>{let o=s[t.id];if(Se(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let h=o.lazy[r];if(!h)return;let c=em.get(o);c||(c={},em.set(o,c));let m=c[r];if(m)return m;let y=(async()=>{let f=pg(r),z=o[r]!==void 0&&r!=="hasErrorBoundary";if(f)Je(!f,"Route property "+r+" is not a supported lazy route property. This property will be ignored."),c[r]=Promise.resolve();else if(z)Je(!1,`Route "${o.id}" has a static property "${r}" defined. The lazy property will be ignored.`);else{let D=await h();D!=null&&(Object.assign(o,{[r]:D}),Object.assign(o,d(o)))}typeof o.lazy=="object"&&(o.lazy[r]=void 0,Object.values(o.lazy).every(D=>D===void 0)&&(o.lazy=void 0))})();return c[r]=y,y},nm=new WeakMap;function rf(r,t,s,d,o){let h=s[r.id];if(Se(h,"No route found in manifest"),!r.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof r.lazy=="function"){let p=nm.get(h);if(p)return{lazyRoutePromise:p,lazyHandlerPromise:p};let z=(async()=>{Se(typeof r.lazy=="function","No lazy route function found");let D=await r.lazy(),M={};for(let j in D){let I=D[j];if(I===void 0)continue;let _=Tg(j),G=h[j]!==void 0&&j!=="hasErrorBoundary";_?Je(!_,"Route property "+j+" is not a supported property to be returned from a lazy route function. This property will be ignored."):G?Je(!G,`Route "${h.id}" has a static property "${j}" defined but its lazy function is also returning a value for this property. The lazy route property "${j}" will be ignored.`):M[j]=I}Object.assign(h,M),Object.assign(h,{...d(h),lazy:void 0})})();return nm.set(h,z),z.catch(()=>{}),{lazyRoutePromise:z,lazyHandlerPromise:z}}let c=Object.keys(r.lazy),m=[],y;for(let p of c){if(o&&o.includes(p))continue;let z=Ym({key:p,route:r,manifest:s,mapRouteProperties:d});z&&(m.push(z),p===t&&(y=z))}let f=m.length>0?Promise.all(m).then(()=>{}):void 0;return f==null||f.catch(()=>{}),y==null||y.catch(()=>{}),{lazyRoutePromise:f,lazyHandlerPromise:y}}async function am(r){let t=r.matches.filter(o=>o.shouldLoad),s={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,h)=>{s[t[h].route.id]=o}),s}async function tf(r){return r.matches.some(t=>t.route.middleware)?Zm(r,()=>am(r)):am(r)}function Zm(r,t){return lf(r,t,d=>{if(vf(d))throw d;return d},gf,s);function s(d,o,h){if(h)return Promise.resolve(Object.assign(h.value,{[o]:{type:"error",result:d}}));{let{matches:c}=r,m=Math.min(Math.max(c.findIndex(f=>f.route.id===o),0),Math.max(c.findIndex(f=>f.shouldCallHandler()),0)),y=ir(c,c[m].route.id).route.id;return Promise.resolve({[y]:{type:"error",result:d}})}}}async function lf(r,t,s,d,o){let{matches:h,request:c,params:m,context:y,unstable_pattern:f}=r,p=h.flatMap(D=>D.route.middleware?D.route.middleware.map(M=>[D.route.id,M]):[]);return await $m({request:c,params:m,context:y,unstable_pattern:f},p,t,s,d,o)}async function $m(r,t,s,d,o,h,c=0){let{request:m}=r;if(m.signal.aborted)throw m.signal.reason??new Error(`Request aborted: ${m.method} ${m.url}`);let y=t[c];if(!y)return await s();let[f,p]=y,z,D=async()=>{if(z)throw new Error("You may only call `next()` once per middleware");try{return z={value:await $m(r,t,s,d,o,h,c+1)},z.value}catch(M){return z={value:await h(M,f,z)},z.value}};try{let M=await p(r,D),j=M!=null?d(M):void 0;return o(j)?j:z?j??z.value:(z={value:await D()},z.value)}catch(M){return await h(M,f,z)}}function Jm(r,t,s,d,o){let h=Ym({key:"middleware",route:d.route,manifest:t,mapRouteProperties:r}),c=rf(d.route,vn(s.method)?"action":"loader",t,r,o);return{middleware:h,route:c.lazyRoutePromise,handler:c.lazyHandlerPromise}}function Lu(r,t,s,d,o,h,c,m,y=null,f){let p=!1,z=Jm(r,t,s,o,h);return{...o,_lazyPromises:z,shouldLoad:m,shouldRevalidateArgs:y,shouldCallHandler(D){return p=!0,y?typeof f=="boolean"?lt(o,{...y,defaultShouldRevalidate:f}):typeof D=="boolean"?lt(o,{...y,defaultShouldRevalidate:D}):lt(o,y):m},resolve(D){let{lazy:M,loader:j,middleware:I}=o.route,_=p||m||D&&!vn(s.method)&&(M||j),q=I&&I.length>0&&!j&&!M;return _&&(vn(s.method)||!q)?uf({request:s,unstable_pattern:d,match:o,lazyHandlerPromise:z==null?void 0:z.handler,lazyRoutePromise:z==null?void 0:z.route,handlerOverride:D,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function di(r,t,s,d,o,h,c,m=null){return d.map(y=>y.route.id!==o.route.id?{...y,shouldLoad:!1,shouldRevalidateArgs:m,shouldCallHandler:()=>!1,_lazyPromises:Jm(r,t,s,y,h),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Lu(r,t,s,ht(d),y,h,c,!0,m))}async function sf(r,t,s,d,o,h){s.some(f=>{var p;return(p=f._lazyPromises)==null?void 0:p.middleware})&&await Promise.all(s.map(f=>{var p;return(p=f._lazyPromises)==null?void 0:p.middleware}));let c={request:t,unstable_pattern:ht(s),params:s[0].params,context:o,matches:s},y=await r({...c,fetcherKey:d,runClientMiddleware:f=>{let p=c;return Zm(p,()=>f({...p,fetcherKey:d,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(s.flatMap(f=>{var p,z;return[(p=f._lazyPromises)==null?void 0:p.handler,(z=f._lazyPromises)==null?void 0:z.route]}))}catch{}return y}async function uf({request:r,unstable_pattern:t,match:s,lazyHandlerPromise:d,lazyRoutePromise:o,handlerOverride:h,scopedContext:c}){let m,y,f=vn(r.method),p=f?"action":"loader",z=D=>{let M,j=new Promise((q,G)=>M=G);y=()=>M(),r.signal.addEventListener("abort",y);let I=q=>typeof D!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${s.route.id}]`)):D({request:r,unstable_pattern:t,params:s.params,context:c},...q!==void 0?[q]:[]),_=(async()=>{try{return{type:"data",result:await(h?h(G=>I(G)):I())}}catch(q){return{type:"error",result:q}}})();return Promise.race([_,j])};try{let D=f?s.route.action:s.route.loader;if(d||o)if(D){let M,[j]=await Promise.all([z(D).catch(I=>{M=I}),d,o]);if(M!==void 0)throw M;m=j}else{await d;let M=f?s.route.action:s.route.loader;if(M)[m]=await Promise.all([z(M),o]);else if(p==="action"){let j=new URL(r.url),I=j.pathname+j.search;throw Jn(405,{method:r.method,pathname:I,routeId:s.route.id})}else return{type:"data",result:void 0}}else if(D)m=await z(D);else{let M=new URL(r.url),j=M.pathname+M.search;throw Jn(404,{pathname:j})}}catch(D){return{type:"error",result:D}}finally{y&&r.signal.removeEventListener("abort",y)}return m}async function df(r){let t=r.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?r.body==null?null:r.json():r.text()}async function of(r){var d,o,h,c,m;let{result:t,type:s}=r;if(Xu(t)){let y;try{y=await df(t)}catch(f){return{type:"error",error:f}}return s==="error"?{type:"error",error:new ot(t.status,t.statusText,y),statusCode:t.status,headers:t.headers}:{type:"data",data:y,statusCode:t.status,headers:t.headers}}return s==="error"?um(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(d=t.init)==null?void 0:d.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}:{type:"error",error:kf(t),statusCode:dt(t)?t.status:void 0,headers:(h=t.init)!=null&&h.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:dt(t)?t.status:void 0}:um(t)?{type:"data",data:t.data,statusCode:(c=t.init)==null?void 0:c.status,headers:(m=t.init)!=null&&m.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function hf(r,t,s,d,o){let h=r.headers.get("Location");if(Se(h,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ju(h)){let c=d.slice(0,d.findIndex(m=>m.route.id===s)+1);h=ju(new URL(t.url),c,o,h),r.headers.set("Location",h)}return r}function rm(r,t,s,d){let o=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Ju(r)){let h=r,c=h.startsWith("//")?new URL(t.protocol+h):new URL(h);if(o.includes(c.protocol))throw new Error("Invalid redirect location");let m=Fn(c.pathname,s)!=null;if(c.origin===t.origin&&m)return c.pathname+c.search+c.hash}try{let h=d.createURL(r);if(o.includes(h.protocol))throw new Error("Invalid redirect location")}catch{}return r}function si(r,t,s,d){let o=r.createURL(Qm(t)).toString(),h={signal:s};if(d&&vn(d.formMethod)){let{formMethod:c,formEncType:m}=d;h.method=c.toUpperCase(),m==="application/json"?(h.headers=new Headers({"Content-Type":m}),h.body=JSON.stringify(d.json)):m==="text/plain"?h.body=d.text:m==="application/x-www-form-urlencoded"&&d.formData?h.body=Uu(d.formData):h.body=d.formData}return new Request(o,h)}function Uu(r){let t=new URLSearchParams;for(let[s,d]of r.entries())t.append(s,typeof d=="string"?d:d.name);return t}function im(r){let t=new FormData;for(let[s,d]of r.entries())t.append(s,d);return t}function mf(r,t,s,d=!1,o=!1){let h={},c=null,m,y=!1,f={},p=s&&Wn(s[1])?s[1].error:void 0;return r.forEach(z=>{if(!(z.route.id in t))return;let D=z.route.id,M=t[D];if(Se(!Mr(M),"Cannot handle redirect results in processLoaderData"),Wn(M)){let j=M.error;if(p!==void 0&&(j=p,p=void 0),c=c||{},o)c[D]=j;else{let I=ir(r,D);c[I.route.id]==null&&(c[I.route.id]=j)}d||(h[D]=Om),y||(y=!0,m=dt(M.error)?M.error.status:500),M.headers&&(f[D]=M.headers)}else h[D]=M.data,M.statusCode&&M.statusCode!==200&&!y&&(m=M.statusCode),M.headers&&(f[D]=M.headers)}),p!==void 0&&s&&(c={[s[0]]:p},s[2]&&(h[s[2]]=void 0)),{loaderData:h,errors:c,statusCode:m||200,loaderHeaders:f}}function tm(r,t,s,d,o,h){let{loaderData:c,errors:m}=mf(t,s,d);return o.filter(y=>!y.matches||y.matches.some(f=>f.shouldLoad)).forEach(y=>{let{key:f,match:p,controller:z}=y;if(z&&z.signal.aborted)return;let D=h[f];if(Se(D,"Did not find corresponding fetcher result"),Wn(D)){let M=ir(r.matches,p==null?void 0:p.route.id);m&&m[M.route.id]||(m={...m,[M.route.id]:D.error}),r.fetchers.delete(f)}else if(Mr(D))Se(!1,"Unhandled fetcher revalidation redirect");else{let M=xa(D.data);r.fetchers.set(f,M)}}),{loaderData:c,errors:m}}function lm(r,t,s,d){let o=Object.entries(t).filter(([,h])=>h!==Om).reduce((h,[c,m])=>(h[c]=m,h),{});for(let h of s){let c=h.route.id;if(!t.hasOwnProperty(c)&&r.hasOwnProperty(c)&&h.route.loader&&(o[c]=r[c]),d&&d.hasOwnProperty(c))break}return o}function sm(r){return r?Wn(r[1])?{actionData:{}}:{actionData:{[r[0]]:r[1].data}}:{}}function ir(r,t){return(t?r.slice(0,r.findIndex(d=>d.route.id===t)+1):[...r]).reverse().find(d=>d.route.hasErrorBoundary===!0)||r[0]}function wl(r){let t=r.length===1?r[0]:r.find(s=>s.index||!s.path||s.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Jn(r,{pathname:t,routeId:s,method:d,type:o,message:h}={}){let c="Unknown Server Error",m="Unknown @remix-run/router error";return r===400?(c="Bad Request",d&&t&&s?m=`You made a ${d} request to "${t}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`:o==="invalid-body"&&(m="Unable to encode submission body")):r===403?(c="Forbidden",m=`Route "${s}" does not match URL "${t}"`):r===404?(c="Not Found",m=`No route matches URL "${t}"`):r===405&&(c="Method Not Allowed",d&&t&&s?m=`You made a ${d.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`:d&&(m=`Invalid request method "${d.toUpperCase()}"`)),new ot(r||500,c,new Error(m),!0)}function Sl(r){let t=Object.entries(r);for(let s=t.length-1;s>=0;s--){let[d,o]=t[s];if(Mr(o))return{key:d,result:o}}}function Qm(r){let t=typeof r=="string"?sr(r):r;return fa({...t,hash:""})}function cf(r,t){return r.pathname!==t.pathname||r.search!==t.search?!1:r.hash===""?t.hash!=="":r.hash===t.hash?!0:t.hash!==""}function kf(r){var t,s;return new ot(((t=r.init)==null?void 0:t.status)??500,((s=r.init)==null?void 0:s.statusText)??"Internal Server Error",r.data)}function gf(r){return r!=null&&typeof r=="object"&&Object.entries(r).every(([t,s])=>typeof t=="string"&&ff(s))}function ff(r){return r!=null&&typeof r=="object"&&"type"in r&&"result"in r&&(r.type==="data"||r.type==="error")}function yf(r){return Xu(r.result)&&Lm.has(r.result.status)}function Wn(r){return r.type==="error"}function Mr(r){return(r&&r.type)==="redirect"}function um(r){return typeof r=="object"&&r!=null&&"type"in r&&"data"in r&&"init"in r&&r.type==="DataWithResponseInit"}function Xu(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.headers=="object"&&typeof r.body<"u"}function bf(r){return Lm.has(r)}function vf(r){return Xu(r)&&bf(r.status)&&r.headers.has("Location")}function pf(r){return Zg.has(r.toUpperCase())}function vn(r){return qg.has(r.toUpperCase())}function ed(r){return new URLSearchParams(r).getAll("index").some(t=>t==="")}function Rl(r,t){let s=typeof t=="string"?sr(t).search:t.search;if(r[r.length-1].route.index&&ed(s||""))return r[r.length-1];let d=Wm(r);return d[d.length-1]}function dm(r){let{formMethod:t,formAction:s,formEncType:d,text:o,formData:h,json:c}=r;if(!(!t||!s||!d)){if(o!=null)return{formMethod:t,formAction:s,formEncType:d,formData:void 0,json:void 0,text:o};if(h!=null)return{formMethod:t,formAction:s,formEncType:d,formData:h,json:void 0,text:void 0};if(c!==void 0)return{formMethod:t,formAction:s,formEncType:d,formData:void 0,json:c,text:void 0}}}function Eu(r,t){return t?{state:"loading",location:r,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:r,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function zf(r,t){return{state:"submitting",location:r,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function nt(r,t){return r?{state:"loading",formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Tf(r,t){return{state:"submitting",formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text,data:t?t.data:void 0}}function xa(r){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function wf(r,t){try{let s=r.sessionStorage.getItem(Um);if(s){let d=JSON.parse(s);for(let[o,h]of Object.entries(d||{}))h&&Array.isArray(h)&&t.set(o,new Set(h||[]))}}catch{}}function Sf(r,t){if(t.size>0){let s={};for(let[d,o]of t)s[d]=[...o];try{r.sessionStorage.setItem(Um,JSON.stringify(s))}catch(d){Je(!1,`Failed to save applied view transitions in sessionStorage (${d}).`)}}}function om(){let r,t,s=new Promise((d,o)=>{r=async h=>{d(h);try{await s}catch{}},t=async h=>{o(h);try{await s}catch{}}});return{promise:s,resolve:r,reject:t}}var Kr=w.createContext(null);Kr.displayName="DataRouter";var oi=w.createContext(null);oi.displayName="DataRouterState";var Xm=w.createContext(!1);function Ef(){return w.useContext(Xm)}var nd=w.createContext({isTransitioning:!1});nd.displayName="ViewTransition";var ec=w.createContext(new Map);ec.displayName="Fetchers";var Af=w.createContext(null);Af.displayName="Await";var En=w.createContext(null);En.displayName="Navigation";var Nl=w.createContext(null);Nl.displayName="Location";var Qn=w.createContext({outlet:null,matches:[],isDataRoute:!1});Qn.displayName="Route";var ad=w.createContext(null);ad.displayName="RouteError";var nc="REACT_ROUTER_ERROR",Df="REDIRECT",Rf="ROUTE_ERROR_RESPONSE";function Bf(r){if(r.startsWith(`${nc}:${Df}:{`))try{let t=JSON.parse(r.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function xf(r){if(r.startsWith(`${nc}:${Rf}:{`))try{let t=JSON.parse(r.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new ot(t.status,t.statusText,t.data)}catch{}}function Mf(r,{relative:t}={}){Se(hi(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:d}=w.useContext(En),{hash:o,pathname:h,search:c}=ct(r,{relative:t}),m=h;return s!=="/"&&(m=h==="/"?s:ga([s,h])),d.createHref({pathname:m,search:c,hash:o})}function hi(){return w.useContext(Nl)!=null}function Hn(){return Se(hi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Nl).location}var ac="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rc(r){w.useContext(En).static||w.useLayoutEffect(r)}function mt(){let{isDataRoute:r}=w.useContext(Qn);return r?Of():Kf()}function Kf(){Se(hi(),"useNavigate() may be used only in the context of a <Router> component.");let r=w.useContext(Kr),{basename:t,navigator:s}=w.useContext(En),{matches:d}=w.useContext(Qn),{pathname:o}=Hn(),h=JSON.stringify(Vl(d)),c=w.useRef(!1);return rc(()=>{c.current=!0}),w.useCallback((y,f={})=>{if(Je(c.current,ac),!c.current)return;if(typeof y=="number"){s.go(y);return}let p=_l(y,JSON.parse(h),o,f.relative==="path");r==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ga([t,p.pathname])),(f.replace?s.replace:s.push)(p,f.state,f)},[t,s,h,o,r])}var Vf=w.createContext(null);function _f(r){let t=w.useContext(Qn).outlet;return w.useMemo(()=>t&&w.createElement(Vf.Provider,{value:r},t),[t,r])}function Ev(){let{matches:r}=w.useContext(Qn),t=r[r.length-1];return t?t.params:{}}function ct(r,{relative:t}={}){let{matches:s}=w.useContext(Qn),{pathname:d}=Hn(),o=JSON.stringify(Vl(s));return w.useMemo(()=>_l(r,JSON.parse(o),d,t==="path"),[r,o,d,t])}function Nf(r,t,s,d,o){Se(hi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=w.useContext(En),{matches:c}=w.useContext(Qn),m=c[c.length-1],y=m?m.params:{},f=m?m.pathname:"/",p=m?m.pathnameBase:"/",z=m&&m.route;{let G=z&&z.path||"";lc(f,!z||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let D=Hn(),M;M=D;let j=M.pathname||"/",I=j;if(p!=="/"){let G=p.replace(/^\//,"").split("/");I="/"+j.replace(/^\//,"").split("/").slice(G.length).join("/")}let _=rr(r,{pathname:I});return Je(z||_!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Je(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ff(_&&_.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:ga([p,h.encodeLocation?h.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?p:ga([p,h.encodeLocation?h.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),c,s,d,o)}function If(){let r=Uf(),t=dt(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,d="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:h},"ErrorBoundary")," or"," ",w.createElement("code",{style:h},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),s?w.createElement("pre",{style:o},s):null,c)}var Cf=w.createElement(If,null),ic=class extends w.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.onError?this.props.onError(r,t):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const s=xf(r.digest);s&&(r=s)}let t=r!==void 0?w.createElement(Qn.Provider,{value:this.props.routeContext},w.createElement(ad.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?w.createElement(Pf,{error:r},t):t}};ic.contextType=Xm;var Au=new WeakMap;function Pf({children:r,error:t}){let{basename:s}=w.useContext(En);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let d=Bf(t.digest);if(d){let o=Au.get(t);if(o)throw o;let h=Hm(d.location,s);if(Fm&&!Au.get(t))if(h.isExternal||d.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:d.replace}));throw Au.set(t,c),c}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return r}function Wf({routeContext:r,match:t,children:s}){let d=w.useContext(Kr);return d&&d.static&&d.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Qn.Provider,{value:r},s)}function Ff(r,t=[],s=null,d=null,o=null){if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(t.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let h=r,c=s==null?void 0:s.errors;if(c!=null){let p=h.findIndex(z=>z.route.id&&(c==null?void 0:c[z.route.id])!==void 0);Se(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),h=h.slice(0,Math.min(h.length,p+1))}let m=!1,y=-1;if(s)for(let p=0;p<h.length;p++){let z=h[p];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(y=p),z.route.id){let{loaderData:D,errors:M}=s,j=z.route.loader&&!D.hasOwnProperty(z.route.id)&&(!M||M[z.route.id]===void 0);if(z.route.lazy||j){m=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}let f=s&&d?(p,z)=>{var D,M;d(p,{location:s.location,params:((M=(D=s.matches)==null?void 0:D[0])==null?void 0:M.params)??{},unstable_pattern:ht(s.matches),errorInfo:z})}:void 0;return h.reduceRight((p,z,D)=>{let M,j=!1,I=null,_=null;s&&(M=c&&z.route.id?c[z.route.id]:void 0,I=z.route.errorElement||Cf,m&&(y<0&&D===0?(lc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,_=null):y===D&&(j=!0,_=z.route.hydrateFallbackElement||null)));let q=t.concat(h.slice(0,D+1)),G=()=>{let ne;return M?ne=I:j?ne=_:z.route.Component?ne=w.createElement(z.route.Component,null):z.route.element?ne=z.route.element:ne=p,w.createElement(Wf,{match:z,routeContext:{outlet:p,matches:q,isDataRoute:s!=null},children:ne})};return s&&(z.route.ErrorBoundary||z.route.errorElement||D===0)?w.createElement(ic,{location:s.location,revalidation:s.revalidation,component:I,error:M,children:G(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:f}):G()},null)}function rd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hf(r){let t=w.useContext(Kr);return Se(t,rd(r)),t}function id(r){let t=w.useContext(oi);return Se(t,rd(r)),t}function jf(r){let t=w.useContext(Qn);return Se(t,rd(r)),t}function td(r){let t=jf(r),s=t.matches[t.matches.length-1];return Se(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function Gf(){return td("useRouteId")}function Lf(){return id("useNavigation").navigation}function tc(){let{matches:r,loaderData:t}=id("useMatches");return w.useMemo(()=>r.map(s=>Nm(s,t)),[r,t])}function Uf(){var d;let r=w.useContext(ad),t=id("useRouteError"),s=td("useRouteError");return r!==void 0?r:(d=t.errors)==null?void 0:d[s]}function Of(){let{router:r}=Hf("useNavigate"),t=td("useNavigate"),s=w.useRef(!1);return rc(()=>{s.current=!0}),w.useCallback(async(o,h={})=>{Je(s.current,ac),s.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:t,...h}))},[r,t])}var hm={};function lc(r,t,s){!t&&!hm[r]&&(hm[r]=!0,Je(!1,s))}var mm={};function cm(r,t){!r&&!mm[t]&&(mm[t]=!0,console.warn(t))}var qf="useOptimistic",km=cg[qf],Yf=()=>{};function Zf(r){return km?km(r):[r,Yf]}function $f(r){let t={hasErrorBoundary:r.hasErrorBoundary||r.ErrorBoundary!=null||r.errorElement!=null};return r.Component&&(r.element&&Je(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:w.createElement(r.Component),Component:void 0})),r.HydrateFallback&&(r.hydrateFallbackElement&&Je(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:w.createElement(r.HydrateFallback),HydrateFallback:void 0})),r.ErrorBoundary&&(r.errorElement&&Je(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:w.createElement(r.ErrorBoundary),ErrorBoundary:void 0})),t}var Jf=["HydrateFallback","hydrateFallbackElement"],Qf=class{constructor(){this.status="pending",this.promise=new Promise((r,t)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",r(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",t(s))}})}};function Xf({router:r,flushSync:t,onError:s,unstable_useTransitions:d}){d=Ef()||d;let[h,c]=w.useState(r.state),[m,y]=Zf(h),[f,p]=w.useState(),[z,D]=w.useState({isTransitioning:!1}),[M,j]=w.useState(),[I,_]=w.useState(),[q,G]=w.useState(),ne=w.useRef(new Map),be=w.useCallback((se,{deletedFetchers:ke,newErrors:Ee,flushSync:xe,viewTransitionOpts:Ie})=>{Ee&&s&&Object.values(Ee).forEach(Ve=>{var Oe;return s(Ve,{location:se.location,params:((Oe=se.matches[0])==null?void 0:Oe.params)??{},unstable_pattern:ht(se.matches)})}),se.fetchers.forEach((Ve,Oe)=>{Ve.data!==void 0&&ne.current.set(Oe,Ve.data)}),ke.forEach(Ve=>ne.current.delete(Ve)),cm(xe===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ge=r.window!=null&&r.window.document!=null&&typeof r.window.document.startViewTransition=="function";if(cm(Ie==null||Ge,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Ie||!Ge){t&&xe?t(()=>c(se)):d===!1?c(se):w.startTransition(()=>{d===!0&&y(Ve=>gm(Ve,se)),c(se)});return}if(t&&xe){t(()=>{I&&(M==null||M.resolve(),I.skipTransition()),D({isTransitioning:!0,flushSync:!0,currentLocation:Ie.currentLocation,nextLocation:Ie.nextLocation})});let Ve=r.window.document.startViewTransition(()=>{t(()=>c(se))});Ve.finished.finally(()=>{t(()=>{j(void 0),_(void 0),p(void 0),D({isTransitioning:!1})})}),t(()=>_(Ve));return}I?(M==null||M.resolve(),I.skipTransition(),G({state:se,currentLocation:Ie.currentLocation,nextLocation:Ie.nextLocation})):(p(se),D({isTransitioning:!0,flushSync:!1,currentLocation:Ie.currentLocation,nextLocation:Ie.nextLocation}))},[r.window,t,I,M,d,y,s]);w.useLayoutEffect(()=>r.subscribe(be),[r,be]),w.useEffect(()=>{z.isTransitioning&&!z.flushSync&&j(new Qf)},[z]),w.useEffect(()=>{if(M&&f&&r.window){let se=f,ke=M.promise,Ee=r.window.document.startViewTransition(async()=>{d===!1?c(se):w.startTransition(()=>{d===!0&&y(xe=>gm(xe,se)),c(se)}),await ke});Ee.finished.finally(()=>{j(void 0),_(void 0),p(void 0),D({isTransitioning:!1})}),_(Ee)}},[f,M,r.window,d,y]),w.useEffect(()=>{M&&f&&m.location.key===f.location.key&&M.resolve()},[M,I,m.location,f]),w.useEffect(()=>{!z.isTransitioning&&q&&(p(q.state),D({isTransitioning:!0,flushSync:!1,currentLocation:q.currentLocation,nextLocation:q.nextLocation}),G(void 0))},[z.isTransitioning,q]);let fe=w.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:se=>r.navigate(se),push:(se,ke,Ee)=>r.navigate(se,{state:ke,preventScrollReset:Ee==null?void 0:Ee.preventScrollReset}),replace:(se,ke,Ee)=>r.navigate(se,{replace:!0,state:ke,preventScrollReset:Ee==null?void 0:Ee.preventScrollReset})}),[r]),ve=r.basename||"/",V=w.useMemo(()=>({router:r,navigator:fe,static:!1,basename:ve,onError:s}),[r,fe,ve,s]);return w.createElement(w.Fragment,null,w.createElement(Kr.Provider,{value:V},w.createElement(oi.Provider,{value:m},w.createElement(ec.Provider,{value:ne.current},w.createElement(nd.Provider,{value:z},w.createElement(iy,{basename:ve,location:m.location,navigationType:m.historyAction,navigator:fe,unstable_useTransitions:d},w.createElement(ey,{routes:r.routes,future:r.future,state:m,onError:s})))))),null)}function gm(r,t){return{...r,navigation:t.navigation.state!=="idle"?t.navigation:r.navigation,revalidation:t.revalidation!=="idle"?t.revalidation:r.revalidation,actionData:t.navigation.state!=="submitting"?t.actionData:r.actionData,fetchers:t.fetchers}}var ey=w.memo(ny);function ny({routes:r,future:t,state:s,onError:d}){return Nf(r,void 0,s,d,t)}function ay({to:r,replace:t,state:s,relative:d}){Se(hi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=w.useContext(En);Je(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=w.useContext(Qn),{pathname:c}=Hn(),m=mt(),y=_l(r,Vl(h),c,d==="path"),f=JSON.stringify(y);return w.useEffect(()=>{m(JSON.parse(f),{replace:t,state:s,relative:d})},[m,f,d,t,s]),null}function ry(r){return _f(r.context)}function iy({basename:r="/",children:t=null,location:s,navigationType:d="POP",navigator:o,static:h=!1,unstable_useTransitions:c}){Se(!hi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),y=w.useMemo(()=>({basename:m,navigator:o,static:h,unstable_useTransitions:c,future:{}}),[m,o,h,c]);typeof s=="string"&&(s=sr(s));let{pathname:f="/",search:p="",hash:z="",state:D=null,key:M="default"}=s,j=w.useMemo(()=>{let I=Fn(f,m);return I==null?null:{location:{pathname:I,search:p,hash:z,state:D,key:M},navigationType:d}},[m,f,p,z,D,M,d]);return Je(j!=null,`<Router basename="${m}"> is not able to match the URL "${f}${p}${z}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:w.createElement(En.Provider,{value:y},w.createElement(Nl.Provider,{children:t,value:j}))}var Bl="get",xl="application/x-www-form-urlencoded";function Il(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function ty(r){return Il(r)&&r.tagName.toLowerCase()==="button"}function ly(r){return Il(r)&&r.tagName.toLowerCase()==="form"}function sy(r){return Il(r)&&r.tagName.toLowerCase()==="input"}function uy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function dy(r,t){return r.button===0&&(!t||t==="_self")&&!uy(r)}var El=null;function oy(){if(El===null)try{new FormData(document.createElement("form"),0),El=!1}catch{El=!0}return El}var hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Du(r){return r!=null&&!hy.has(r)?(Je(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xl}"`),null):r}function my(r,t){let s,d,o,h,c;if(ly(r)){let m=r.getAttribute("action");d=m?Fn(m,t):null,s=r.getAttribute("method")||Bl,o=Du(r.getAttribute("enctype"))||xl,h=new FormData(r)}else if(ty(r)||sy(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||m.getAttribute("action");if(d=y?Fn(y,t):null,s=r.getAttribute("formmethod")||m.getAttribute("method")||Bl,o=Du(r.getAttribute("formenctype"))||Du(m.getAttribute("enctype"))||xl,h=new FormData(m,r),!oy()){let{name:f,type:p,value:z}=r;if(p==="image"){let D=f?`${f}.`:"";h.append(`${D}x`,"0"),h.append(`${D}y`,"0")}else f&&h.append(f,z)}}else{if(Il(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Bl,d=null,o=xl,c=r}return h&&o==="text/plain"&&(c=h,h=void 0),{action:d,method:s.toLowerCase(),encType:o,formData:h,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cy={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},ky=/[&><\u2028\u2029]/g;function fm(r){return r.replace(ky,t=>cy[t])}function ld(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function gy(r,t,s,d){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${d}`:o.pathname=`${o.pathname}.${d}`:o.pathname==="/"?o.pathname=`_root.${d}`:t&&Fn(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function fy(r,t){if(r.id in t)return t[r.id];try{let s=await import(r.module);return t[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function by(r,t,s){let d=await Promise.all(r.map(async o=>{let h=t.routes[o.route.id];if(h){let c=await fy(h,s);return c.links?c.links():[]}return[]}));return Ty(d.flat(1).filter(yy).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ym(r,t,s,d,o,h){let c=(y,f)=>s[f]?y.route.id!==s[f].route.id:!0,m=(y,f)=>{var p;return s[f].pathname!==y.pathname||((p=s[f].route.path)==null?void 0:p.endsWith("*"))&&s[f].params["*"]!==y.params["*"]};return h==="assets"?t.filter((y,f)=>c(y,f)||m(y,f)):h==="data"?t.filter((y,f)=>{var z;let p=d.routes[y.route.id];if(!p||!p.hasLoader)return!1;if(c(y,f)||m(y,f))return!0;if(y.route.shouldRevalidate){let D=y.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((z=s[0])==null?void 0:z.params)||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function vy(r,t,{includeHydrateFallback:s}={}){return py(r.map(d=>{let o=t.routes[d.route.id];if(!o)return[];let h=[o.module];return o.clientActionModule&&(h=h.concat(o.clientActionModule)),o.clientLoaderModule&&(h=h.concat(o.clientLoaderModule)),s&&o.hydrateFallbackModule&&(h=h.concat(o.hydrateFallbackModule)),o.imports&&(h=h.concat(o.imports)),h}).flat(1))}function py(r){return[...new Set(r)]}function zy(r){let t={},s=Object.keys(r).sort();for(let d of s)t[d]=r[d];return t}function Ty(r,t){let s=new Set;return new Set(t),r.reduce((d,o)=>{let h=JSON.stringify(zy(o));return s.has(h)||(s.add(h),d.push({key:h,link:o})),d},[])}function sc(){let r=w.useContext(Kr);return ld(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function wy(){let r=w.useContext(oi);return ld(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Cl=w.createContext(void 0);Cl.displayName="FrameworkContext";function uc(){let r=w.useContext(Cl);return ld(r,"You must render this element inside a <HydratedRouter> element"),r}function Sy(r,t){let s=w.useContext(Cl),[d,o]=w.useState(!1),[h,c]=w.useState(!1),{onFocus:m,onBlur:y,onMouseEnter:f,onMouseLeave:p,onTouchStart:z}=t,D=w.useRef(null);w.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let I=q=>{q.forEach(G=>{c(G.isIntersecting)})},_=new IntersectionObserver(I,{threshold:.5});return D.current&&_.observe(D.current),()=>{_.disconnect()}}},[r]),w.useEffect(()=>{if(d){let I=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(I)}}},[d]);let M=()=>{o(!0)},j=()=>{o(!1),c(!1)};return s?r!=="intent"?[h,D,{}]:[h,D,{onFocus:at(m,M),onBlur:at(y,j),onMouseEnter:at(f,M),onMouseLeave:at(p,j),onTouchStart:at(z,M)}]:[!1,D,{}]}function at(r,t){return s=>{r&&r(s),s.defaultPrevented||t(s)}}function Ey({page:r,...t}){let{router:s}=sc(),d=w.useMemo(()=>rr(s.routes,r,s.basename),[s.routes,r,s.basename]);return d?w.createElement(Dy,{page:r,matches:d,...t}):null}function Ay(r){let{manifest:t,routeModules:s}=uc(),[d,o]=w.useState([]);return w.useEffect(()=>{let h=!1;return by(r,t,s).then(c=>{h||o(c)}),()=>{h=!0}},[r,t,s]),d}function Dy({page:r,matches:t,...s}){let d=Hn(),{future:o,manifest:h,routeModules:c}=uc(),{basename:m}=sc(),{loaderData:y,matches:f}=wy(),p=w.useMemo(()=>ym(r,t,f,h,d,"data"),[r,t,f,h,d]),z=w.useMemo(()=>ym(r,t,f,h,d,"assets"),[r,t,f,h,d]),D=w.useMemo(()=>{if(r===d.pathname+d.search+d.hash)return[];let I=new Set,_=!1;if(t.forEach(G=>{var be;let ne=h.routes[G.route.id];!ne||!ne.hasLoader||(!p.some(fe=>fe.route.id===G.route.id)&&G.route.id in y&&((be=c[G.route.id])!=null&&be.shouldRevalidate)||ne.hasClientLoader?_=!0:I.add(G.route.id))}),I.size===0)return[];let q=gy(r,m,o.unstable_trailingSlashAwareDataRequests,"data");return _&&I.size>0&&q.searchParams.set("_routes",t.filter(G=>I.has(G.route.id)).map(G=>G.route.id).join(",")),[q.pathname+q.search]},[m,o.unstable_trailingSlashAwareDataRequests,y,d,h,p,t,r,c]),M=w.useMemo(()=>vy(z,h),[z,h]),j=Ay(z);return w.createElement(w.Fragment,null,D.map(I=>w.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...s})),M.map(I=>w.createElement("link",{key:I,rel:"modulepreload",href:I,...s})),j.map(({key:I,link:_})=>w.createElement("link",{key:I,nonce:s.nonce,..._,crossOrigin:_.crossOrigin??s.crossOrigin})))}function Ry(...r){return t=>{r.forEach(s=>{typeof s=="function"?s(t):s!=null&&(s.current=t)})}}var By=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{By&&(window.__reactRouterVersion="7.13.0")}catch{}function xy(r,t){return Xg({basename:t==null?void 0:t.basename,getContext:t==null?void 0:t.getContext,future:t==null?void 0:t.future,history:fg({window:t==null?void 0:t.window}),hydrationData:My(),routes:r,mapRouteProperties:$f,hydrationRouteProperties:Jf,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window,unstable_instrumentations:t==null?void 0:t.unstable_instrumentations}).initialize()}function My(){let r=window==null?void 0:window.__staticRouterHydrationData;return r&&r.errors&&(r={...r,errors:Ky(r.errors)}),r}function Ky(r){if(!r)return null;let t=Object.entries(r),s={};for(let[d,o]of t)if(o&&o.__type==="RouteErrorResponse")s[d]=new ot(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let h=window[o.__subType];if(typeof h=="function")try{let c=new h(o.message);c.stack="",s[d]=c}catch{}}if(s[d]==null){let h=new Error(o.message);h.stack="",s[d]=h}}else s[d]=o;return s}var dc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kn=w.forwardRef(function({onClick:t,discover:s="render",prefetch:d="none",relative:o,reloadDocument:h,replace:c,state:m,target:y,to:f,preventScrollReset:p,viewTransition:z,unstable_defaultShouldRevalidate:D,...M},j){let{basename:I,unstable_useTransitions:_}=w.useContext(En),q=typeof f=="string"&&dc.test(f),G=Hm(f,I);f=G.to;let ne=Mf(f,{relative:o}),[be,fe,ve]=Sy(d,M),V=Iy(f,{replace:c,state:m,target:y,preventScrollReset:p,relative:o,viewTransition:z,unstable_defaultShouldRevalidate:D,unstable_useTransitions:_});function se(Ee){t&&t(Ee),Ee.defaultPrevented||V(Ee)}let ke=w.createElement("a",{...M,...ve,href:G.absoluteURL||ne,onClick:G.isExternal||h?t:se,ref:Ry(j,fe),target:y,"data-discover":!q&&s==="render"?"true":void 0});return be&&!q?w.createElement(w.Fragment,null,ke,w.createElement(Ey,{page:ne})):ke});kn.displayName="Link";var Vy=w.forwardRef(function({"aria-current":t="page",caseSensitive:s=!1,className:d="",end:o=!1,style:h,to:c,viewTransition:m,children:y,...f},p){let z=ct(c,{relative:f.relative}),D=Hn(),M=w.useContext(oi),{navigator:j,basename:I}=w.useContext(En),_=M!=null&&Gy(z)&&m===!0,q=j.encodeLocation?j.encodeLocation(z).pathname:z.pathname,G=D.pathname,ne=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;s||(G=G.toLowerCase(),ne=ne?ne.toLowerCase():null,q=q.toLowerCase()),ne&&I&&(ne=Fn(ne,I)||ne);const be=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let fe=G===q||!o&&G.startsWith(q)&&G.charAt(be)==="/",ve=ne!=null&&(ne===q||!o&&ne.startsWith(q)&&ne.charAt(q.length)==="/"),V={isActive:fe,isPending:ve,isTransitioning:_},se=fe?t:void 0,ke;typeof d=="function"?ke=d(V):ke=[d,fe?"active":null,ve?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Ee=typeof h=="function"?h(V):h;return w.createElement(kn,{...f,"aria-current":se,className:ke,ref:p,style:Ee,to:c,viewTransition:m},typeof y=="function"?y(V):y)});Vy.displayName="NavLink";var _y=w.forwardRef(({discover:r="render",fetcherKey:t,navigate:s,reloadDocument:d,replace:o,state:h,method:c=Bl,action:m,onSubmit:y,relative:f,preventScrollReset:p,viewTransition:z,unstable_defaultShouldRevalidate:D,...M},j)=>{let{unstable_useTransitions:I}=w.useContext(En),_=Wy(),q=Fy(m,{relative:f}),G=c.toLowerCase()==="get"?"get":"post",ne=typeof m=="string"&&dc.test(m),be=fe=>{if(y&&y(fe),fe.defaultPrevented)return;fe.preventDefault();let ve=fe.nativeEvent.submitter,V=(ve==null?void 0:ve.getAttribute("formmethod"))||c,se=()=>_(ve||fe.currentTarget,{fetcherKey:t,method:V,navigate:s,replace:o,state:h,relative:f,preventScrollReset:p,viewTransition:z,unstable_defaultShouldRevalidate:D});I&&s!==!1?w.startTransition(()=>se()):se()};return w.createElement("form",{ref:j,method:G,action:q,onSubmit:d?y:be,...M,"data-discover":!ne&&r==="render"?"true":void 0})});_y.displayName="Form";function oc({getKey:r,storageKey:t,...s}){let d=w.useContext(Cl),{basename:o}=w.useContext(En),h=Hn(),c=tc();Hy({getKey:r,storageKey:t});let m=w.useMemo(()=>{if(!d||!r)return null;let f=qu(h,c,o,r);return f!==h.key?f:null},[]);if(!d||d.isSpaMode)return null;let y=((f,p)=>{if(!window.history.state||!window.history.state.key){let z=Math.random().toString(32).slice(2);window.history.replaceState({key:z},"")}try{let D=JSON.parse(sessionStorage.getItem(f)||"{}")[p||window.history.state.key];typeof D=="number"&&window.scrollTo(0,D)}catch(z){console.error(z),sessionStorage.removeItem(f)}}).toString();return w.createElement("script",{...s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${y})(${fm(JSON.stringify(t||Ou))}, ${fm(JSON.stringify(m))})`}})}oc.displayName="ScrollRestoration";function hc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sd(r){let t=w.useContext(Kr);return Se(t,hc(r)),t}function Ny(r){let t=w.useContext(oi);return Se(t,hc(r)),t}function Iy(r,{target:t,replace:s,state:d,preventScrollReset:o,relative:h,viewTransition:c,unstable_defaultShouldRevalidate:m,unstable_useTransitions:y}={}){let f=mt(),p=Hn(),z=ct(r,{relative:h});return w.useCallback(D=>{if(dy(D,t)){D.preventDefault();let M=s!==void 0?s:fa(p)===fa(z),j=()=>f(r,{replace:M,state:d,preventScrollReset:o,relative:h,viewTransition:c,unstable_defaultShouldRevalidate:m});y?w.startTransition(()=>j()):j()}},[p,f,z,s,d,t,r,o,h,c,m,y])}var Cy=0,Py=()=>`__${String(++Cy)}__`;function Wy(){let{router:r}=sd("useSubmit"),{basename:t}=w.useContext(En),s=Gf(),d=r.fetch,o=r.navigate;return w.useCallback(async(h,c={})=>{let{action:m,method:y,encType:f,formData:p,body:z}=my(h,t);if(c.navigate===!1){let D=c.fetcherKey||Py();await d(D,s,c.action||m,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:p,body:z,formMethod:c.method||y,formEncType:c.encType||f,flushSync:c.flushSync})}else await o(c.action||m,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:p,body:z,formMethod:c.method||y,formEncType:c.encType||f,replace:c.replace,state:c.state,fromRouteId:s,flushSync:c.flushSync,viewTransition:c.viewTransition})},[d,o,t,s])}function Fy(r,{relative:t}={}){let{basename:s}=w.useContext(En),d=w.useContext(Qn);Se(d,"useFormAction must be used inside a RouteContext");let[o]=d.matches.slice(-1),h={...ct(r||".",{relative:t})},c=Hn();if(r==null){h.search=c.search;let m=new URLSearchParams(h.search),y=m.getAll("index");if(y.some(p=>p==="")){m.delete("index"),y.filter(z=>z).forEach(z=>m.append("index",z));let p=m.toString();h.search=p?`?${p}`:""}}return(!r||r===".")&&o.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:ga([s,h.pathname])),fa(h)}var Ou="react-router-scroll-positions",Al={};function qu(r,t,s,d){let o=null;return d&&(s!=="/"?o=d({...r,pathname:Fn(r.pathname,s)||r.pathname},t):o=d(r,t)),o==null&&(o=r.key),o}function Hy({getKey:r,storageKey:t}={}){let{router:s}=sd("useScrollRestoration"),{restoreScrollPosition:d,preventScrollReset:o}=Ny("useScrollRestoration"),{basename:h}=w.useContext(En),c=Hn(),m=tc(),y=Lf();w.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),jy(w.useCallback(()=>{if(y.state==="idle"){let f=qu(c,m,h,r);Al[f]=window.scrollY}try{sessionStorage.setItem(t||Ou,JSON.stringify(Al))}catch(f){Je(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${f}).`)}window.history.scrollRestoration="auto"},[y.state,r,h,c,m,t])),typeof document<"u"&&(w.useLayoutEffect(()=>{try{let f=sessionStorage.getItem(t||Ou);f&&(Al=JSON.parse(f))}catch{}},[t]),w.useLayoutEffect(()=>{let f=s==null?void 0:s.enableScrollRestoration(Al,()=>window.scrollY,r?(p,z)=>qu(p,z,h,r):void 0);return()=>f&&f()},[s,h,r]),w.useLayoutEffect(()=>{if(d!==!1){if(typeof d=="number"){window.scrollTo(0,d);return}try{if(c.hash){let f=document.getElementById(decodeURIComponent(c.hash.slice(1)));if(f){f.scrollIntoView();return}}}catch{Je(!1,`"${c.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}o!==!0&&window.scrollTo(0,0)}},[c,d,o]))}function jy(r,t){let{capture:s}={};w.useEffect(()=>{let d=s!=null?{capture:s}:void 0;return window.addEventListener("pagehide",r,d),()=>{window.removeEventListener("pagehide",r,d)}},[r,s])}function Gy(r,{relative:t}={}){let s=w.useContext(nd);Se(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=sd("useViewTransitionState"),o=ct(r,{relative:t});if(!s.isTransitioning)return!1;let h=Fn(s.currentLocation.pathname,d)||s.currentLocation.pathname,c=Fn(s.nextLocation.pathname,d)||s.nextLocation.pathname;return Ml(o.pathname,c)!=null||Ml(o.pathname,h)!=null}const Ly="modulepreload",Uy=function(r){return"/"+r},bm={},ur=function(t,s,d){let o=Promise.resolve();if(s&&s.length>0){let c=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(z=>({status:"fulfilled",value:z}),z=>({status:"rejected",reason:z}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),y=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=c(s.map(f=>{if(f=Uy(f),f in bm)return;bm[f]=!0;const p=f.endsWith(".css"),z=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${z}`))return;const D=document.createElement("link");if(D.rel=p?"stylesheet":Ly,p||(D.as="script"),D.crossOrigin="",D.href=f,y&&D.setAttribute("nonce",y),document.head.appendChild(D),p)return new Promise((M,j)=>{D.addEventListener("load",M),D.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${f}`)))})}))}function h(c){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=c,window.dispatchEvent(m),!m.defaultPrevented)throw c}return o.then(c=>{for(const m of c||[])m.status==="rejected"&&h(m.reason);return t().catch(h)})};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,d)=>d?d.toUpperCase():s.toLowerCase()),vm=r=>{const t=qy(r);return t.charAt(0).toUpperCase()+t.slice(1)},mc=(...r)=>r.filter((t,s,d)=>!!t&&t.trim()!==""&&d.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=w.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:o="",children:h,iconNode:c,...m},y)=>w.createElement("svg",{ref:y,...Yy,width:t,height:t,stroke:r,strokeWidth:d?Number(s)*24/Number(t):s,className:mc("lucide",o),...m},[...c.map(([f,p])=>w.createElement(f,p)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(r,t)=>{const s=w.forwardRef(({className:d,...o},h)=>w.createElement(Zy,{ref:h,iconNode:t,className:mc(`lucide-${Oy(vm(r))}`,`lucide-${r}`,d),...o}));return s.displayName=vm(r),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],tr=Fe("arrow-right",$y);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Qy=Fe("book-open",Jy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],pm=Fe("check",Xy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],nb=Fe("chevron-down",eb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],rb=Fe("chevron-left",ab);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],tb=Fe("chevron-right",ib);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],sb=Fe("chevron-up",lb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],zm=Fe("clock",ub);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]],Tm=Fe("gavel",db);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],cc=Fe("globe",ob);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],mb=Fe("heart",hb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],kb=Fe("house",cb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],fb=Fe("lock",gb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],kc=Fe("mail",yb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Yu=Fe("map-pin",bb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],pb=Fe("menu",vb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Tb=Fe("message-square",zb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]],Sb=Fe("move-right",wb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Kl=Fe("phone",Eb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Db=Fe("plane",Ab);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Bb=Fe("scale",Rb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Mb=Fe("shield-check",xb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],gc=Fe("shield",Kb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],_b=Fe("star",Vb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],Ib=Fe("user-check",Nb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],wm=Fe("users",Cb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fc=Fe("x",Pb),Wb={tr:{nav_home:"Ana Sayfa",nav_about:"Hakkımızda",nav_services:"Hizmetler",nav_why_us:"Neden Biz?",nav_blog:"Blog",nav_contact:"İletişim",nav_cta:"Danışma Al",hero_title_pre:"Avukat",hero_title_main:"Hasan Doğru",hero_subtitle:"Türk Hukuku Uzmanı",hero_description:"Alman ve Türk hukuk sistemleri arasında köprü işlevi görecek deneyimli bir hukuk danışmanı arıyorsanız, uluslararası nitelikteki karmaşık hukuki süreçlerde uzman bilgi birikimim ve geniş deneyimimle hizmetinizdeyim",hero_cta_primary:"Hemen Danışın",hero_cta_secondary:"Hizmetlerimiz",stats_years_title:"15 Yıllık Deneyim",stats_years_subtitle:"Güven ve Otorite Temelinde",lawyer_role:"Türk Hukuku Avukatı",service_01_title:"Sınır Ötesi Hukuk",service_01_subtitle:"Almanya - Türkiye Hattı",service_02_title:"Kurumsal Danışmanlık",service_02_subtitle:"Ticaret ve Şirketler",service_03_title:"Etkin Dava Takibi",service_03_subtitle:"Otoriter Temsil",why_us_badge:"Neden Biz?",why_us_title:"Neden",why_us_subtitle:"DOĞRU KANZLEİ?",why_us_description:"Türkiye'deki davalarınızı Almanya'dan takip ediyoruz — Türk mahkemelerinde bizzat, aracısız, tam yetkiyle. İşte bizim avantajlarımız:",why_us_point_01_title:"Türk Mahkemelerine Dijital Erişim",why_us_point_01_desc:"UYAP sistemine kayıtlı bir avukat olarak Türkiye'deki hukuki işlemlerinizi Almanya'dan gerçek zamanlı olarak yönetiyorum. Duruşmalar, belge takibi, dava durumu. Hepsini sizin adınıza uzaktan hallediyorum. Türkiye'ye bizzat gitmenize hiç gerek yok.",why_us_point_02_title:"Çifte Baro Üyeliği",why_us_point_02_desc:"Hem Ankara Barosu hem de Karlsruhe Barosu (§207 BRAO) üyesi olarak sizi Türk mahkemelerinde doğrudan temsil ediyorum. Aracı avukata, iş ortağına gerek yok. Diğer bürolar Türkiye'deki işler için dışarıdan avukata muhtaçken ben bizzat hareket ediyorum. Bu zaman, maliyet ve iletişim kayıplarını ortadan kaldırır.",why_us_point_03_title:"70+ Google Yorumu · 5,0 Yıldız",why_us_point_03_desc:"70'ten fazla müvekkil deneyimlerini paylaştı. Tam puan olan 5,0 üzerinden 5,0 yıldızla. Bu bir tesadüf değil; tutarlı, kişisel ve sonuç odaklı çalışmanın ürünü. Kendiniz görün.",why_us_point_04_title:"Ankara'da Ofis",why_us_point_04_desc:"Almanya'daki ofisimizin yanı sıra Ankara'da gerçek bir ofisimiz bulunuyor. Bu şu anlama gelir: Türk mahkemeleri, noterler ve resmi kurumlarla doğrudan iletişim ve gerektiğinde hızlı yerinde müdahale. Dış kaynak yok. Dolaylı yol yok.",about_badge:"HAKKIMIZDA",about_title:"Hakkımda",about_subtitle:"Avukat Hasan Doğru",about_p1:"Hukuk yoluna adım atmadan önce Türk güvenlik teşkilatında yaklaşık on yıl görev yaptım — en yüksek disiplin, dayanıklılık ve Türk hukuk sistemine derin bir hakimiyet gerektiren operasyonel bir özel birimde. Bu yıllar beni şekillendirdi: Baskı altında isabetli kararlar almayı, karmaşık durumları hızla analiz etmeyi ve başkaları adına sorumluluk üstlenmeyi öğrendim. Bugün her davama tam olarak bu birikimle yaklaşıyorum.",about_p2:"Aktif görev süremdeyken paralel olarak üniversite eğitimime başladım — önce Anadolu Üniversitesi'nde Kamu Yönetimi, ardından Cyprus International University'de Hukuk (LL.B.) okudum. Ankara Barosu'na kayıt yaptırarak (Sicil No: 47068) avukatlık ruhsatımı aldıktan sonra yaşamımı Almanya'ya taşıdım.",about_p3:"Karlsruhe Barosu'na §207 BRAO kapsamında kaydımı yaptırdığımdan bu yana Mannheim ve Ankara ofislerimden müvekkillerime yalnızca Türk hukuku ve milletlerarası hukuk alanında danışmanlık ve temsil hizmeti sunmaktayım. Doğrudan, kişisel ve aracısız.",about_p4:"Beni diğerlerinden ayıran şey: Çifte baro üyeliğim sayesinde müvekkillerimi Türk mahkemeleri ve resmi kurumlar önünde bizzat temsil etme yetkisine sahibim — müvekkillerimin Türkiye'ye gitmesine gerek kalmadan. 70'i aşkın Google yorumu ve tam puan olan 5,0 yıldız, müvekkillerimin bana gösterdiği güvenin somut bir yansımasıdır.",about_cred_01:"Ankara Barosu Üyesi",about_cred_02:"Karlsruhe Barosu — §207 BRAO",about_cred_03:"Türk Mahkemelerinde Doğrudan Temsil",about_cred_04:"Mannheim & Ankara Ofisi",about_signature_role:"Kurucu Avukat",about_press_badge:"BASINDA BİZ",about_press_title:"Haberlerde",about_press_subtitle:"Doğru Kanzlei",practice_badge:"Uzmanlık Alanlarımız",practice_title:"Kapsamlı Hukuki",practice_subtitle:"Danışmanlık",practice_description:"Türkiye'deki hukuki sorunlarınız için Almanya'dan kapsamlı danışmanlık sunuyoruz. Her davayı bireysel olarak değerlendiriyor, en etkin çözümü sağlıyoruz.",practice_view_all:"TÜMÜNÜ İNCELE",practice_view_detail:"DETAYLI İNCELE",practice_cta_title:"Uluslararası Hukukta",practice_cta_title_em:"Sınır Tanımayan Çözümler",practice_cta_description:"Mannheim ve Ankara ofislerimizle her iki ülkenin hukuk sisteminde uzman danışmanlık sağlıyoruz.",practice_cta_btn:"ŞİMDİ DANIŞIN",contact_badge:"İletişim",contact_title:"Bize",contact_subtitle:"Ulaşın",contact_description:"Davanızın değerlendirilmesi ve profesyonel hukuki destek için bizimle iletişime geçin. Size en doğru hukuki yolu gösteriyoruz.",contact_form_title:"Danışma Talebi",contact_form_name:"Ad Soyad *",contact_form_email:"E-posta *",contact_form_phone:"Telefon",contact_form_area:"Hukuk Alanı",contact_form_area_placeholder:"Seçiniz...",contact_form_message:"Mesajınız *",contact_form_submit:"Mesaj Gönder",contact_success_title:"Mesajınız Alındı",contact_success_p:"En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.",contact_office_hours_tr:"Pzt–Cum: 09:00 – 18:00",contact_office_hours_de:"Pzt–Cmt: 09:00 – 18:00",contact_languages_badge:"Hizmet Dilleri",contact_calendly_btn:"Randevu Al",contact_whatsapp_btn:"WhatsApp ile Ulaşın",contact_direct_title:"Hızlı İletişim",contact_direct_p:"Bize doğrudan ulaşın veya size uygun bir zamanda görüşme ayarlayın.",testimonials_badge:"Müvekkil Yorumları",testimonials_title:"Müvekkillerimiz",testimonials_subtitle:"Ne Diyor?",testimonial_1_name:"Hatice Kul",testimonial_1_area:"Tanıma ve Tenfiz",testimonial_1_text:"Tanıma ve Tenfiz davamdaki üstün desteği için Sayın Doğru'ya içtenlikle teşekkür etmek istiyorum. En başından beri kendimi onun yanında çok güvende hissettim. Özellikle arkadaş canlısı, saygılı ve anlayışlı yaklaşımını takdir ediyorum. Zor bir durumda güven veriyor.",testimonial_2_name:"İnci Şen",testimonial_2_area:"Türk Hukuku",testimonial_2_text:"Harika bir hukuk bürosu, kesinlikle tavsiye ederim! Türkiye'deki iki davamda beni son derece başarılı bir şekilde destekleyen yetkin, teknik açıdan bilgili ve empatik bir avukat. Muazzam çalışması için çok teşekkür ederim!",testimonial_3_name:"Tuğçe Garip",testimonial_3_area:"Uluslararası Hukuk",testimonial_3_text:"Hasan Bey işini gerçekten hakkıyla yapan bir avukat. Süreci ilgiyle dinleyip bilgi ve tecrübesiyle davamın hem Türkiye hem Almanya süreçleri hakkında çok detaylı bilgiler verdi. İlgisi ve destekleri için kendisine çok teşekkür ediyorum.",testimonial_4_name:"Abdi Durna",testimonial_4_area:"Genel Danışmanlık",testimonial_4_text:"Tanıdığım en iyi Avukatlardan biri isinin ehli ve tuttuğunu koparan bir Avukat. Çok nazik ve güler yüzlü, işini titizlikle yapıyor.",testimonial_5_name:"Erkan Yerlii",testimonial_5_area:"Danışmanlık",testimonial_5_text:"İlk defa bir avukatın para odaklı olmayıp salt yardım ettiğini gördüm. Çekinerek aradığım Hasan Bey'in çözüm yöntemi ve anında cevap vermesi takdire şayan. Kesinlikle tavsiye ederim.",testimonial_6_name:"Mirsat Şahin",testimonial_6_area:"Vatandaşlık & Türk Hukuku",testimonial_6_text:"Almanya'da yaşadığım dönemde hem Türkiye'deki davalarım hem de vatandaşlık için çok yardımcı oldu. Kendisine bir teşekkürü borç bilirim.",blog_badge:"Blog & Güncel",blog_title:"Hukuki Gelişmeler",blog_subtitle:"ve Makaleler",blog_read_more:"Devamını Oku",footer_description:"Almanya ve Türkiye arasındaki hukuki köprünüz. 15 yılı aşkın deneyimle profesyonel danışmanlık.",footer_quick_links:"Hızlı Bağlantılar",footer_contact_info:"İletişim Bilgileri",footer_legal:"Yasal",footer_rights:"Tüm hakları saklıdır."},de:{nav_home:"Startseite",nav_about:"Über uns",nav_services:"Leistungen",nav_why_us:"Warum wir?",nav_blog:"Blog",nav_contact:"Kontakt",nav_cta:"Beratung anfragen",hero_title_pre:"Avukat",hero_title_main:"Hasan Doğru",hero_subtitle:"Experte für türkisches Recht",hero_description:"Suchen Sie einen kompetenten Rechtsbeistand, der die Brücke zwischen dem deutschen und dem türkischen Rechtssystem schlägt? Als spezialisierter Avukat unterstütze ich Sie bei komplexen grenzüberschreitenden Rechtsfragen mit fundierter Fachkenntnis und langjähriger Erfahrung.",hero_cta_primary:"Jetzt beraten lassen",hero_cta_secondary:"Unsere Leistungen",stats_years_title:"15 Jahre Erfahrung",stats_years_subtitle:"Auf Basis von Vertrauen und Kompetenz",lawyer_role:"Experte für türkisches Recht",service_01_title:"Grenzüberschreitendes Recht",service_01_subtitle:"Deutschland – Türkei",service_02_title:"Unternehmensberatung",service_02_subtitle:"Handel & Gesellschaftsrecht",service_03_title:"Effektive Prozessführung",service_03_subtitle:"Kompetente Vertretung",why_us_badge:"Warum wir?",why_us_title:"Warum",why_us_subtitle:"DOĞRU KANZLEİ?",why_us_description:"Sie leben in Deutschland, Ihre Rechte liegen in der Türkei. Wir sind auf beiden Seiten präsent — hier ist warum:",why_us_point_01_title:"Digitaler Zugang zu türkischen Gerichten",why_us_point_01_desc:"Als im UYAP-System registrierter Avukat verwalte ich Ihre türkischen Rechtsangelegenheiten in Echtzeit aus Deutschland. Gerichtstermine, Dokumentenverfolgung, Verfahrensstatus. Ich erledige alles remote in Ihrem Namen. Sie müssen nie persönlich in der Türkei erscheinen.",why_us_point_02_title:"Doppelte Zulassung",why_us_point_02_desc:"Als Mitglied der Anwaltskammer Ankara und der Anwaltskammer Karlsruhe (§207 BRAO) vertrete ich Sie direkt vor türkischen Gerichten. Ohne Kooperationspartner, ohne Mittelsmann. Während andere Kanzleien auf externe Anwälte in der Türkei angewiesen sind, handle ich selbst. Das spart Zeit, Kosten und Kommunikationsverluste.",why_us_point_03_title:"70+ Google-Bewertungen · 5,0 Sterne",why_us_point_03_desc:"Über 70 Mandanten haben ihre Erfahrungen mit uns geteilt. Mit der Bestnote 5,0 von 5,0 Sternen. Das ist kein Zufall, sondern das Ergebnis konsequenter, persönlicher und ergebnisorientierter Arbeit. Überzeugen Sie sich selbst.",why_us_point_04_title:"Büro in Ankara",why_us_point_04_desc:"Neben unserem Standort in Deutschland verfügen wir über ein echtes Büro in Ankara. Das bedeutet: direkte Kontakte zu türkischen Gerichten, Notaren und Behörden und schnelles Handeln vor Ort, wenn es darauf ankommt. Kein Outsourcing. Kein Umweg.",about_badge:"ÜBER UNS",about_title:"Über mich",about_subtitle:"Avukat Hasan Doğru",about_p1:"Bevor ich den Weg ins Recht einschlug, war ich fast ein Jahrzehnt im türkischen Sicherheitsdienst tätig — in einer operativen Spezialeinheit, die höchste Disziplin, Belastbarkeit und ein tiefes Verständnis für das türkische Rechtssystem erforderte. Diese Jahre haben mich geprägt: Ich habe gelernt, unter Druck präzise zu handeln, komplexe Sachverhalte schnell zu erfassen und Verantwortung für andere zu übernehmen. Genau diese Eigenschaften bringe ich heute in jedes Mandat ein.",about_p2:"Bereits während meiner aktiven Dienstzeit begann ich parallel mein Studium — zunächst Kamu Yönetimi (Öffentliche Verwaltung) an der Anadolu Üniversitesi, anschließend Rechtswissenschaften (LL.B.) an der Cyprus International University. Nach meiner Zulassung als Avukat bei der Rechtsanwaltskammer Ankara (Ankara Barosu, Sicil-Nr. 47068) verlegte ich meinen Lebensmittelpunkt nach Deutschland.",about_p3:"Seit meiner Registrierung bei der Anwaltskammer Karlsruhe gemäß §207 BRAO berate und vertrete ich Mandanten mit Kanzleistandorten in Mannheim und Ankara — ausschließlich im türkischen Recht und Völkerrecht. Direkt, persönlich und ohne Drittvermittlung.",about_p4:"Was mich von anderen unterscheidet: Durch meine Doppelzulassung bin ich berechtigt, Mandanten unmittelbar vor türkischen Gerichten und Behörden zu vertreten — ohne dass meine Mandanten dafür die Türkei bereisen müssen. Über 70 Google-Bewertungen mit 5,0 Sternen spiegeln das Vertrauen wider, das mir meine Mandanten täglich entgegenbringen.",about_cred_01:"Mitglied der Anwaltskammer Ankara",about_cred_02:"Anwaltskammer Karlsruhe — §207 BRAO",about_cred_03:"Direkte Vertretung vor türkischen Gerichten",about_cred_04:"Büros in Mannheim & Ankara",about_signature_role:"Gründer & Inhaber",about_press_badge:"PRESSE",about_press_title:"In der Presse",about_press_subtitle:"Doğru Kanzlei",practice_badge:"Unsere Fachgebiete",practice_title:"Umfassende rechtliche",practice_subtitle:"Beratung",practice_description:"Umfassende rechtliche Beratung für Ihre Angelegenheiten in der Türkei — direkt aus Deutschland. Jeden Fall bewerten wir individuell und bieten die effektivste Lösung.",practice_view_all:"ALLE ANSEHEN",practice_view_detail:"DETAILS ANSEHEN",practice_cta_title:"Grenzüberschreitende",practice_cta_title_em:"Rechtslösungen",practice_cta_description:"Mit unseren Büros in Mannheim und Ankara bieten wir fachkundige Beratung in beiden Rechtssystemen.",practice_cta_btn:"JETZT BERATEN LASSEN",contact_badge:"Kontakt",contact_title:"Kontaktieren Sie",contact_subtitle:"uns",contact_description:"Kontaktieren Sie uns für eine fundierte rechtliche Ersteinschätzung. Wir analysieren Ihren Fall und zeigen Ihnen den sichersten Weg.",contact_form_title:"Beratungsanfrage",contact_form_name:"Vor- & Nachname *",contact_form_email:"E-Mail *",contact_form_phone:"Telefon",contact_form_area:"Rechtsgebiet",contact_form_area_placeholder:"Bitte wählen...",contact_form_message:"Ihre Nachricht *",contact_form_submit:"Nachricht senden",contact_success_title:"Nachricht empfangen",contact_success_p:"Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen. Vielen Dank.",contact_office_hours_tr:"Mo–Fr: 09:00 – 18:00",contact_office_hours_de:"Mo–Sa: 09:00 – 18:00",contact_languages_badge:"Service-Sprachen",contact_calendly_btn:"Termin vereinbaren",contact_whatsapp_btn:"Kontakt per WhatsApp",contact_direct_title:"Direkter Kontakt",contact_direct_p:"Kontaktieren Sie uns direkt oder vereinbaren Sie ein Gespräch zu einem passenden Zeitpunkt.",testimonials_badge:"Mandantenstimmen",testimonials_title:"Was unsere",testimonials_subtitle:"Mandanten sagen",testimonial_1_name:"Hatice Kul",testimonial_1_area:"Anerkennung & Vollstreckung",testimonial_1_text:"Ich möchte mich herzlich bei Herrn Doğru für seine hervorragende Unterstützung in meiner Tanıma ve Tenfiz davası bedanken. Von Anfang an habe ich mich bei ihm sehr gut aufgehoben gefühlt. Besonders schätze ich seine freundliche, respektvolle und verständnisvolle Art.",testimonial_2_name:"İnci Şen",testimonial_2_area:"Türkisches Recht",testimonial_2_text:"Top Kanzlei, sehr zu empfehlen! Kompetenter, sachlich versierter und empathischer Avukat, der mich bei zwei Verfahren in der Türkei äußerst erfolgreich unterstützt hat. Vielen Dank für die hervorragende Arbeit!",testimonial_3_name:"Tuğçe Garip",testimonial_3_area:"Internationales Recht",testimonial_3_text:"Herr Hasan ist ein Avukat, der seine Arbeit wirklich mit Bravour erledigt. Er hat den Prozess aufmerksam verfolgt und mit seinem Wissen und seiner Erfahrung sehr detaillierte Informationen über die Verfahren meines Falls sowohl in der Türkei als auch in Deutschland gegeben.",testimonial_4_name:"Abdi Durna",testimonial_4_area:"Allgemeine Beratung",testimonial_4_text:"Der ist der beste Avukat den ich je kennen gelernt habe. Ist sehr nett und freundlich, geht sehr präzise vor. Er ist einfach der Beste!",testimonial_5_name:"Erkan Yerlii",testimonial_5_area:"Beratung",testimonial_5_text:"Zum ersten Mal habe ich erlebt, dass ein Avukat nicht profitorientiert ist, sondern wirklich helfen möchte. Herr Hasans Lösungsansatz und seine Eigenschaft, sofort zu antworten, sind lobenswert. Er ist definitiv empfehlenswert.",testimonial_6_name:"Mirsat Şahin",testimonial_6_area:"Staatsbürgerschaft & Türkisches Recht",testimonial_6_text:"Während meiner Zeit in Deutschland hat er mir sowohl bei meinen Fällen in der Türkei als auch in Rechtsangelegenheiten sehr geholfen. Ich bin ihm zu großem Dank verpflichtet.",blog_badge:"Blog & Aktuelles",blog_title:"Rechtliche Entwicklungen",blog_subtitle:"und Artikel",blog_read_more:"Weiterlesen",footer_description:"Ihre rechtliche Brücke zwischen Deutschland und der Türkei. Professionelle Beratung mit über 15 Jahren Erfahrung.",footer_quick_links:"Schnelllinks",footer_contact_info:"Kontaktinformationen",footer_legal:"Rechtliches",footer_rights:"Alle Rechte vorbehalten."},en:{nav_home:"Home",nav_about:"About Us",nav_services:"Services",nav_why_us:"Why Us?",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Get Legal Advice",hero_title_pre:"Attorney",hero_title_main:"Hasan Doğru",hero_subtitle:"Expert in Turkish Law",hero_description:"Are you looking for a competent legal partner who bridges the gap between the German and Turkish legal systems? As a specialized attorney, I support you with complex cross-border legal matters — backed by deep expertise and years of experience.",hero_cta_primary:"Get Legal Advice",hero_cta_secondary:"Our Services",stats_years_title:"15 Years of Experience",stats_years_subtitle:"Based on Trust and Competence",lawyer_role:"Expert in Turkish Law",service_01_title:"Cross-Border Law",service_01_subtitle:"Germany – Turkey",service_02_title:"Corporate Consulting",service_02_subtitle:"Trade & Company Law",service_03_title:"Effective Litigation",service_03_subtitle:"Competent Representation",why_us_badge:"Why Us?",why_us_title:"Why",why_us_subtitle:"DOĞRU KANZLEİ?",why_us_description:"We handle your cases in Turkey from Germany — directly before Turkish courts, without intermediaries, with full authority. Here are our advantages:",why_us_point_01_title:"Digital Access to Turkish Courts",why_us_point_01_desc:"As an attorney registered in the UYAP system, I manage your Turkish legal proceedings from Germany in real time. Hearings, document tracking, case status — all handled on your behalf. You never need to travel to Turkey.",why_us_point_02_title:"Dual Bar Membership",why_us_point_02_desc:"I am a member of both the Ankara Bar and the Karlsruhe Bar (§207 BRAO), which means I can represent you directly before Turkish courts. No intermediary attorney needed. No third-party involvement for Turkish matters — I act on your behalf personally. This eliminates delays, costs, and communication gaps.",why_us_point_03_title:"70+ Google Reviews · 5.0 Stars",why_us_point_03_desc:"Over 70 clients have shared their experiences. A perfect 5.0 rating. This is no coincidence — it reflects consistent, personal, and results-driven work. See for yourself.",why_us_point_04_title:"Office in Ankara",why_us_point_04_desc:"In addition to our German office, we have a real physical office in Ankara. This means direct, on-the-ground access to Turkish courts, notaries, and government agencies whenever needed. No middlemen. No detours.",about_badge:"ABOUT US",about_title:"About Me",about_subtitle:"Attorney Hasan Doğru",about_p1:"Before starting my career in law, I served in the Turkish security forces for nearly a decade — in an operational special unit that required the highest discipline, resilience, and deep mastery of the Turkish legal system. These years shaped me: I learned to make precise decisions under pressure, analyze complex situations quickly, and take responsibility for others. Today, I approach every case with this exact background.",about_p2:"While in active service, I simultaneously began my university education — first studying Public Administration at Anadolu University, then Law (LL.B.) at Cyprus International University. After receiving my law license and registering with the Ankara Bar Association (Registry No: 47068), I moved my life to Germany.",about_p3:"Since my registration with the Karlsruhe Bar Association under §207 BRAO, I have been providing legal consulting and representation to my clients from my Mannheim and Ankara offices, exclusively in the field of Turkish and international law. Direct, personal, and without intermediaries.",about_p4:"What sets me apart: My dual bar membership gives me the authority to represent clients personally before Turkish courts and government agencies — without my clients having to travel to Turkey. Over 70 Google reviews and a perfect 5.0 star rating reflect the trust my clients place in me.",about_cred_01:"Member of Ankara Bar",about_cred_02:"Karlsruhe Bar — §207 BRAO",about_cred_03:"Direct Representation in Turkish Courts",about_cred_04:"Mannheim & Ankara Offices",about_signature_role:"Founding Attorney",about_press_badge:"PRESS",about_press_title:"In the News",about_press_subtitle:"Doğru Kanzlei",practice_badge:"Our Areas of Expertise",practice_title:"Comprehensive Legal",practice_subtitle:"Consulting",practice_description:"We offer comprehensive legal consulting from Germany for your legal matters in Turkey. We evaluate each case individually and provide the most effective solution.",practice_view_all:"VIEW ALL",practice_view_detail:"LEARN MORE",practice_cta_title:"Cross-Border",practice_cta_title_em:"Legal Solutions",practice_cta_description:"With our offices in Mannheim and Ankara, we offer expert consulting in both legal systems.",practice_cta_btn:"GET LEGAL ADVICE",contact_badge:"Contact",contact_title:"Get in",contact_subtitle:"Touch",contact_description:"Contact us to have your case evaluated and receive professional legal support. We'll show you the right legal path forward.",contact_form_title:"Consultation Request",contact_form_name:"Full Name *",contact_form_email:"Email *",contact_form_phone:"Phone",contact_form_area:"Legal Area",contact_form_area_placeholder:"Select...",contact_form_message:"Your Message *",contact_form_submit:"Send Message",contact_success_title:"Message Received",contact_success_p:"We will get back to you as soon as possible. Thank you.",contact_office_hours_tr:"Mon–Fri: 09:00 – 18:00",contact_office_hours_de:"Mon–Sat: 09:00 – 18:00",contact_languages_badge:"Service Languages",contact_calendly_btn:"Book an Appointment",contact_whatsapp_btn:"Contact via WhatsApp",contact_direct_title:"Quick Contact",contact_direct_p:"Reach us directly or schedule a convenient consultation time.",testimonials_badge:"Client Testimonials",testimonials_title:"What Our Clients",testimonials_subtitle:"Are Saying?",testimonial_1_name:"Hatice Kul",testimonial_1_area:"Recognition & Enforcement",testimonial_1_text:"I would like to sincerely thank Mr. Doğru for his outstanding support in my Recognition & Enforcement case. From the very beginning, I felt completely safe in his hands. I especially appreciate his friendly, respectful, and understanding approach. He gives you confidence in difficult times.",testimonial_2_name:"İnci Şen",testimonial_2_area:"Turkish Law",testimonial_2_text:"A fantastic law firm — highly recommended! An extremely competent, technically knowledgeable, and empathetic attorney who supported me exceptionally well in two cases in Turkey. Thank you so much for the outstanding work!",testimonial_3_name:"Tuğçe Garip",testimonial_3_area:"International Law",testimonial_3_text:"Hasan Bey is an attorney who truly does his job with passion. He listened carefully and provided very detailed information about my case regarding both the Turkish and German processes. I am very grateful for his attention and support.",testimonial_4_name:"Abdi Durna",testimonial_4_area:"General Consulting",testimonial_4_text:"One of the best attorneys I have ever known — deeply skilled and passionate about his work. Very kind and warm-hearted, and he handles every matter with great diligence.",testimonial_5_name:"Erkan Yerlii",testimonial_5_area:"General Consulting",testimonial_5_text:"For the first time, I saw an attorney who wasn't motivated by money but genuinely wanted to help. I hesitantly reached out to Hasan Bey and was impressed by his approach and his instant responses. Highly recommended.",testimonial_6_name:"Mirsat Şahin",testimonial_6_area:"Citizenship & Turkish Law",testimonial_6_text:"He was extremely helpful with both my cases in Turkey and my citizenship matters while I was living in Germany. I owe him a debt of gratitude.",blog_badge:"Blog & News",blog_title:"Legal Updates",blog_subtitle:"and Articles",blog_read_more:"Read More",footer_description:"Your legal bridge between Germany and Turkey. Professional consulting with over 15 years of experience.",footer_quick_links:"Quick Links",footer_contact_info:"Contact Information",footer_legal:"Legal",footer_rights:"All rights reserved."}},xr=[{id:"familienrecht",slugDE:"familienrecht",slugTR:"aile-hukuku",slugEN:"family-law",icon:wm,title:"Familienrecht & Scheidung",titleTR:"Aile Hukuku ve Boşanma",seoTitleDE:"Scheidungsanwalt Mannheim | Türkisches Familienrecht | Doğru Kanzlei",seoDescriptionDE:"Scheidung nach türkischem Recht von Mannheim aus — ohne Reise in die Türkei. Avukat Hasan Doğru berät türkischstämmige Familien in Mannheim zu Familienrecht, Scheidung, Unterhalt und Sorgerecht.",seoTitleTR:"Türk Boşanma Avukatı Almanya | Boşanma Avukatı Mannheim | Avukat Hasan Doğru",seoDescriptionTR:"Mannheim'dan Türkiye'de boşanma — Türkiye'ye gitmeden. Avukat Hasan Doğru, boşanma, nafaka ve velayet davalarında Almanya'daki Türk ailelere Türk hukuku danışmanlığı verir.",description:"Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler; boşanma, velayet veya nafaka konularında sıklıkla çift taraflı bir zorlukla karşılaşır — iki hukuk sistemi, iki ülke, bir aile.",descriptionDE:"Türkischstämmige Familien in Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum stehen bei Scheidung, Sorgerecht oder Unterhalt oft vor einer besonderen Herausforderung: Zwei Rechtssysteme, zwei Länder, eine Familie. Das türkische Familienrecht unterscheidet sich in wesentlichen Punkten vom deutschen Recht — und erfordert einen Anwalt, der beide Seiten kennt.",detail:"Yalnızca Türk hukuku — uzlaşmasız uzmanlaşma · Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı · Türkiye'ye seyahat etmeden tam süreç yönetimi · Türkçe ve Almanca danışmanlık · Mannheim'da yüz yüze görüşme imkânı · Ankara'da ikinci ofis — Türk mahkemeleriyle doğrudan iş birliği",detailDE:"Ausschließlich türkisches Recht — keine Kompromisse, volle Spezialisierung · Mitglied der Ankara Barosu und registriert gemäß § 207 BRAO · Verfahren vollständig ohne Reise in die Türkei möglich · Beratung auf Türkisch und Deutsch · Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum · Zweiter Standort in Ankara für direkte Zusammenarbeit mit türkischen Gerichten",expertiseTitleDE:"Warum Doğru Kanzlei für türkisches Familienrecht in Mannheim?",expertiseTitleTR:"Mannheim'da Türk Aile Hukuku İçin Neden Doğru Kanzlei?",titleEN:"Family Law & Divorce",seoTitleEN:"Turkish Divorce Lawyer Mannheim | Family Law | Doğru Kanzlei",seoDescriptionEN:"Divorce under Turkish law from Mannheim — without traveling to Turkey. Attorney Hasan Doğru advises Turkish families in Mannheim on family law, divorce, and custody.",descriptionEN:"Turkish families in Mannheim and the region often face a unique challenge during divorce: Two legal systems, two countries, one family. We bridge that gap.",detailEN:"Turkish Law Only · Member of Ankara Bar · No Travel Required · Bilingual Support · Personal Consultation",expertiseTitleEN:"Why Choose Doğru Kanzlei for Turkish Family Law?",content:`Aile Hukuku ve Boşanma — Mannheim'da Türk Aile Hukuku

Türk Aile Hukuku & Boşanma Mannheim

Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler; boşanma, velayet veya nafaka konularında sıklıkla çift taraflı bir zorlukla karşılaşır: İki hukuk sistemi, iki ülke, bir aile. Türk aile hukuku, Alman hukukundan önemli noktalarda ayrılmaktadır — ve her iki tarafı da bilen bir avukat gerektirir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Mannheim'daki büromuz, Türkiye ile ilgili tüm aile hukuku konularında size yardımcı olmaktadır — yetkin, gizli ve Türkiye'ye seyahat etmeden.

Sizin için neler yapıyoruz:

• Almanya'dan Türkiye'de Boşanma Davası Açmak (Boşanma Davası)
Mannheim'daki pek çok Türk çift, Türkiye'ye gitmeden Türk hukukuna göre boşanmak istemektedir. Vekaletname ile tüm Türk boşanma sürecini Almanya'dan yürütüyor, sizi Türk mahkemelerinde temsil ediyor ve karar kesinleşene kadar yanınızda oluyoruz.

• Anlaşmalı Boşanma Türkiye (Anlaşmalı Boşanma)
Her iki eş de boşanmayı kabul ediyorsa, anlaşmalı boşanma en hızlı ve en ekonomik çözümdür. Boşanma protokolünü hazırlıyor, nafaka, velayet ve mal paylaşımı gibi tüm konuları netleştiriyor ve sürecin sorunsuz ilerlemesini sağlıyoruz.

• Çekişmeli Boşanma Türkiye (Çekişmeli Boşanma)
Anlaşma sağlanamadığında, çıkarlarınızı Türk mahkemelerinde kararlılıkla savunuyoruz. Özellikle Almanya ile Türkiye arasındaki sınır ötesi boşanma davalarında deneyimli hukuki temsil belirleyici olmaktadır.

• Türk Hukukuna Göre Nafaka (Nafaka)
Türk nafaka hukuku üç türü kapsar: Tedbir Nafakası (ayrılık nafakası), İştirak Nafakası (çocuk nafakası) ve Yoksulluk Nafakası (yoksulluk nafakası). Haklarınız konusunda sizi bilgilendiriyor ve bu hakları Türk mahkemelerinde takip ediyoruz — nafaka yükümlüsü ebeveyn Almanya'da yaşasa bile.

• Türkiye'de Velayet Davası (Velayet Davası)
Türkiye bağlantılı velayet anlaşmazlıkları, aile hukukunun en karmaşık davalarından biridir. Türk velayet davalarında sizi temsil ediyor ve Almanya ile Türkiye arasındaki velayet ile kişisel ilişki kararlarının uluslararası alanda tanınmasını sağlıyoruz.

• Mal Rejimi / Edinilmiş Mallara Katılma (Edinilmiş Mallara Katılma)
Boşanmada sıkça sorulan soru şudur: Kime ne kalır? Türk mal rejimi hukuku, edinilmiş mallara katılma ilkesine göre mal paylaşımını düzenler. Türkiye'deki taşınmazlar, banka hesapları ve diğer varlıkların adil paylaşımı konusunda danışmanlık veriyoruz.

• Türkiye'den Eş Getirme (Aile Birleşimi)
Eşinizi Türkiye'den Almanya'ya getirmek mi istiyorsunuz? Aile birleşimi ve eş vizesi başvurusunda belgelerinizin hazırlanmasından Almanya'ya girişe kadar tüm süreçte hukuki destek sağlıyoruz.

• Boşanma Sonrası İsim Hakkı Türkiye
Boşanma sonrasında Türk hukukuna göre isim değişikliği konusunda sorularınız olabilir. Seçenekleriniz hakkında bilgi veriyor ve Türk makamları nezdinde isim değişikliği işlemlerini yürütüyoruz.`,contentDE:`Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Unsere Kanzlei in Mannheim begleitet Sie in allen familienrechtlichen Fragen mit Bezug zur Türkei — kompetent, diskret und vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

• Scheidung in der Türkei aus Deutschland einreichen (Boşanma Davası)
Viele türkischstämmige Paare in Mannheim möchten ihre Ehe nach türkischem Recht scheiden lassen — ohne dafür in die Türkei reisen zu müssen. Wir leiten das gesamte türkische Scheidungsverfahren von Deutschland aus ein, vertreten Sie vor türkischen Gerichten per Vollmacht und begleiten Sie bis zum rechtskräftigen Urteil.

• Einvernehmliche Scheidung Türkei (Anlaşmalı Boşanma)
Wenn beide Ehepartner einer Scheidung zustimmen, ist eine einvernehmliche Scheidung nach türkischem Recht die schnellste und kostengünstigste Lösung. Wir bereiten die Scheidungsfolgenvereinbarung vor, klären alle offenen Punkte — Unterhalt, Sorgerecht, Vermögensaufteilung — and sorgen für einen reibungslosen Ablauf.

• Streitige Scheidung Türkei (Çekişmeli Boşanma)
Wenn keine Einigung möglich ist, vertreten wir Ihre Interessen konsequent vor türkischen Gerichten. Gerade bei grenzüberschreitenden Scheidungsverfahren zwischen Deutschland und der Türkei ist erfahrene anwaltliche Vertretung entscheidend.

• Unterhalt nach türkischem Recht (Nafaka)
Das türkische Unterhaltsrecht kennt drei Formen: Trennungsunterhalt (Tedbir Nafakası), Kindesunterhalt (İştirak Nafakası) und nachehelicher Unterhalt (Yoksulluk Nafakası). Wir beraten Sie zu Ihren Ansprüchen und setzen diese vor türkischen Gerichten durch — auch wenn der unterhaltspflichtige Elternteil in Deutschland lebt.

• Sorgerecht Türkei (Velayet Davası)
Sorgerechtsstreitigkeiten mit Türkeibezug gehören zu den komplexesten familienrechtlichen Verfahren überhaupt. Wir vertreten Sie in türkischen Sorgerechtverfahren und kümmern uns um die internationale Durchsetzung von Sorge- und Umgangsrechtsurteilen zwischen Deutschland und der Türkei.

• Güterrecht / Zugewinnausgleich Türkei (Edinilmiş Mallara Katılma)
Bei einer Scheidung stellt sich oft die Frage: Wem gehört was? Das türkische Güterrecht regelt die Vermögensaufteilung nach dem Prinzip der Errungenschaftsbeteiligung. Wir beraten Sie zur gerechten Aufteilung von Immobilien, Konten und sonstigem Vermögen in der Türkei.

• Ehegattennachzug aus der Türkei
Sie möchten Ihren Ehepartner aus der Türkei nach Deutschland holen? Wir begleiten Sie rechtlich beim Familiennachzug und der Beantragung des Ehegattenvisums — von der Vorbereitung der Unterlagen bis zur erfolgreichen Einreise.

• Namensrecht nach Scheidung Türkei
Nach einer Scheidung stellen sich Fragen zur Namensänderung nach türkischem Recht. Wir beraten Sie zu Ihren Optionen und übernehmen die Abwicklung der Namensänderung bei türkischen Behörden.`,faqDE:[{question:"Kann ich mich in der Türkei scheiden lassen, ohne dorthin zu reisen?",answer:"Ja. Mit einer notariellen Vollmacht können wir das gesamte türkische Scheidungsverfahren von Deutschland aus für Sie führen. Sie müssen nicht persönlich vor türkischen Gerichten erscheinen. Dies ist einer der häufigsten Gründe, warum türkischstämmige Familien aus Mannheim und dem Rhein-Neckar-Raum uns beauftragen."},{question:"Wie lange dauert eine Scheidung nach türkischem Recht?",answer:"Eine einvernehmliche Scheidung (Anlaşmalı Boşanma) dauert in der Regel 2–6 Monate. Eine streitige Scheidung (Çekişmeli Boşanma) kann 1–3 Jahre in Anspruch nehmen, abhängig von der Komplexität des Falles und dem zuständigen türkischen Gericht."},{question:"Wird eine türkische Scheidung in Deutschland anerkannt?",answer:"Eine in der Türkei ausgesprochene Scheidung muss in Deutschland anerkannt werden. Wir begleiten Sie durch das Anerkennungsverfahren (Tanıma ve Tenfiz) bei der zuständigen deutschen Behörde, damit Ihr Personenstand in Deutschland korrekt eingetragen wird."},{question:"Was passiert mit dem Sorgerecht, wenn ein Elternteil in Deutschland und einer in der Türkei lebt?",answer:"Grenzüberschreitende Sorgerechtsverfahren sind besonders komplex. Welches Gericht zuständig ist und welches Recht angewendet wird, hängt vom gewöhnlichen Aufenthaltsort des Kindes ab. Wir analysieren Ihren Fall und vertreten Sie vor dem zuständigen türkischen oder deutschen Gericht."},{question:"Muss ich für eine Erstberatung nach Mannheim kommen?",answer:"Nein. Wir bieten Erstberatungen auch per Telefon oder Video an. Viele unserer Mandanten aus dem gesamten Bundesgebiet betreuen wir vollständig auf Distanz."}],faqTR:[{question:"Türkiye'ye gitmeden Türkiye'de boşanabilir miyim?",answer:"Evet. Noter tasdikli bir vekaletname ile tüm Türk boşanma sürecini Almanya'dan sizin adınıza yürütebiliriz. Türk mahkemelerinde bizzat bulunmanız gerekmez. Bu, Mannheim ve Rhein-Neckar bölgesinden bize başvuran Türk ailelerin en sık dile getirdiği nedenlerden biridir."},{question:"Türk hukukuna göre boşanma ne kadar sürer?",answer:"Anlaşmalı boşanma (Anlaşmalı Boşanma) genellikle 2–6 ay sürer. Çekişmeli boşanma (Çekişmeli Boşanma) ise davanın karmaşıklığına ve ilgili Türk mahkemesine bağlı olarak 1–3 yıl sürebilir."},{question:"Türkiye'de gerçekleşen boşanma Almanya'da tanınır mı?",answer:"Türkiye'de verilen boşanma kararının Almanya'da tanınması gerekmektedir. Yetkili Alman makamı nezdinde tanıma ve tenfiz sürecinde (Tanıma ve Tenfiz) size eşlik ediyoruz; böylece medeni haliniz Almanya'da doğru şekilde tescil edilir."},{question:"Ebeveynlerden biri Almanya'da, diğeri Türkiye'de yaşıyorsa velayet nasıl belirlenir?",answer:"Sınır ötesi velayet davaları son derece karmaşıktır. Hangi mahkemenin yetkili olduğu ve hangi hukukun uygulanacağı, çocuğun mutad meskenine bağlıdır. Davanızı analiz ediyor ve sizi yetkili Türk veya Alman mahkemesinde temsil ediyoruz."},{question:"İlk danışma için Mannheim'a gelmem gerekiyor mu?",answer:"Hayır. İlk danışmayı telefon veya video görüşmesi yoluyla da gerçekleştirebilirsiniz. Almanya'nın dört bir yanından pek çok müvekkilimize tamamen uzaktan hizmet veriyoruz."}]},{id:"vollmacht-apostille",slugDE:"vollmacht-apostille",slugTR:"vekaletname-ve-apostil",slugEN:"power-of-attorney-apostille",icon:gc,title:"Vollmacht & Apostille",titleTR:"Vekaletname & Apostil",seoTitleDE:"Türkische Vollmacht Mannheim | Apostille Türkei | Doğru Kanzlei",seoDescriptionDE:"Vollmacht für die Türkei aus Mannheim — korrekt, apostilliert, sofort einsatzbereit. Avukat Hasan Doğru begleitet Sie durch alle Vollmachts- und Apostilleverfahren für türkische Behörden.",seoTitleTR:"Vekaletname & Apostil Türkiye Mannheim | Almanya'dan Türkiye Vekaletnamesi | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye için Almanya'dan vekaletname — doğru, apostilli, hemen kullanıma hazır. Avukat Hasan Doğru, Mannheim'dan Türk makamları için tüm vekaletname ve apostil işlemlerinde size eşlik eder.",description:"Türkiye'deki resmi kurum ve mahkemeler için hukuki güvenceli vekaletname ve apostilli belgeler — hızlı, güvenilir ve gereksiz seyahat olmadan.",descriptionDE:"Rechtssichere Vollmachten und apostillierte Dokumente für Behörden und Gerichte in der Türkei — schnell, zuverlässig und ohne unnötige Reisen.",detail:"Noter Onayı · Tasdik · Apostil · Konsolosluk İşlemleri · Tercüme · Hukuki Danışmanlık",detailDE:"Beglaubigung · Notarielle Beurkundung · Apostille · Konsularische Dienste · Übersetzung · Rechtsberatung",titleEN:"Power of Attorney & Apostille",seoTitleEN:"Turkish Power of Attorney Mannheim | Apostille Turkey | Doğru Kanzlei",seoDescriptionEN:"Power of attorney for Turkey from Mannheim — correct, apostilled, ready for use. Attorney Hasan Doğru handles all POA and apostille procedures for Turkish authorities.",descriptionEN:"Legally secure powers of attorney and apostilled documents for authorities and courts in Turkey — fast, reliable, and without unnecessary travel.",detailEN:"Notarization · Authentication · Apostille · Consular Services · Translation · Legal Advice",content:`Vekaletname ve Apostil — Mannheim'da Türkiye İçin Vekaletname

Türkiye İçin Vekaletname & Apostil Mannheim

Mannheim, Heidelberg veya Rhein-Neckar bölgesinde yaşıyor ve Türkiye'deki hukuki işlemleri halletmek istiyorsanız, genellikle apostilli noter onaylı bir vekaletnameye ihtiyaç duyarsınız. Bu belgeler olmadan Türk makamları, mahkemeler, bankalar veya noterler — miras, gayrimenkul, boşanma veya şirket kuruluşu ne olursa olsun — adınıza hiçbir işlem yapamaz.

Türk makamlarının yabancı vekaletnamelerden beklentileri katıdır ve düzenli olarak değişmektedir. Yanlış düzenlenmiş bir belge tüm sürecinizi aylarca geciktirebilir. Vekaletnamenizin başından itibaren doğru, eksiksiz ve hukuken geçerli olmasını sağlıyoruz.

Sizin için neler yapıyoruz:

- Türkiye'deki Hukuki İşlemler İçin Vekaletname
Miras, gayrimenkul, boşanma, banka işlemleri ve daha fazlası için hukuken güvenilir vekaletnameler hazırlıyoruz.

- Almanya'dan Türkiye İçin Apostil
Yetkili Alman mahkemesi veya makamı nezdinde apostil işleminin tamamını yönetiyoruz.

- Türk Makamları İçin Noter Onayı
Alman noterleri ve Türk konsoloslukları ile koordineli çalışıyoruz.

- Çeviri ve Onaylı Tercüme
Yeminli tercümanlar aracılığıyla Türkçe sertifikalı çevirilerin organizasyonunu üstleniyoruz.

- Genel Vekaletname Türkiye
Türkiye'deki tüm hukuki işlemler için kapsamlı vekaletnameler hazırlıyoruz.

- Gayrimenkul İşlemleri İçin Vekaletname
Türkiye'deki gayrimenkul alım, satım veya devirlerinde özelleşmiş vekaletnameler düzenliyoruz.

- Miras İşlemleri İçin Vekaletname
Veraset İlamı ve tapu devri dahil miras süreçleri için vekaletname hazırlıyoruz.

- Banka İşlemleri İçin Vekaletname
Türk banka hesaplarına erişim ve vefat sonrası hesap açma işlemleri için vekaletname düzenliyoruz.

- Mahkeme Yargılamaları İçin Vekaletname
Türk mahkemelerinde medeni ve aile davalarında dava vekaletnamesi hazırlıyoruz.

- Konsolosluk Onayı
Apostile alternatif olarak Almanya'daki Türk konsolosluğu aracılığıyla onay işlemi gerçekleştiriyoruz.

Önemli Uyarı:
Türk makamlarının güncel gerekliliklerini karşılamayan bir vekaletname, noter onaylı olsa dahi reddedilir. Güncel gereklilikleri biliyoruz ve belgelerinizin ilk seferde kabul edilmesini sağlıyoruz.`,contentDE:`Vollmacht & Apostille — Vollmacht für die Türkei — aus Deutschland beantragen

Apostille, Beglaubigung, Notar — wir erledigen alles für Sie.

Wer in Mannheim, Heidelberg oder dem Rhein-Neckar-Raum lebt und rechtliche Angelegenheiten in der Türkei regeln möchte, braucht in der Regel eine notariell beglaubigte Vollmacht mit Apostille. Ohne diese Dokumente können türkische Behörden, Gerichte, Banken oder Notare keine Handlungen in Ihrem Namen vornehmen — egal ob es um Erbschaft, Immobilien, Scheidung oder Unternehmensgründung geht.

Die Anforderungen türkischer Behörden an ausländische Vollmachten sind streng und ändern sich regelmäßig. Ein falsch ausgestelltes Dokument kann Ihr gesamtes Verfahren um Monate verzögern. Wir stellen sicher, dass Ihre Vollmacht von Anfang an korrekt, vollständig und rechtswirksam ist.

Was wir für Sie tun:

• Vollmacht für Rechtsgeschäfte in der Türkei — Erstellung rechtssicherer Vollmachten für Erbschaft, Immobilien, Scheidung, Bankangelegenheiten und mehr
• Apostille aus Deutschland für die Türkei — Begleitung des gesamten Apostille-Verfahrens beim zuständigen deutschen Gericht oder der Behörde
• Notarielle Beglaubigung für türkische Behörden — Koordination mit deutschen Notaren und türkischen Konsulaten
• Übersetzung und Beglaubigung — Organisation zertifizierter Übersetzungen ins Türkische durch vereidigte Übersetzer
• Generalvollmacht Türkei — Erstellung umfassender Vollmachten für alle Rechtsgeschäfte in der Türkei
• Vollmacht für Immobiliengeschäfte — Spezielle Vollmachten für Kauf, Verkauf oder Übertragung von Immobilien
• Vollmacht für Erbschaftsangelegenheiten — Für Nachlassverfahren, Veraset İlamı und Grundbuchübertragung
• Vollmacht für Bankgeschäfte — Zugriff auf türkische Bankkonten, Kontoeröffnung nach Todesfällen
• Vollmacht für Gerichtsverfahren — Prozessvollmacht für türkische Gerichte in Zivil- und Familienrechtssachen
• Konsularische Beglaubigung — Anerkennung durch das türkische Konsulat in Deutschland als Alternative zur Apostille

Wichtiger Hinweis:
Eine Vollmacht, die nicht den aktuellen Anforderungen türkischer Behörden entspricht, wird zurückgewiesen – selbst mit notarieller Beglaubigung. Wir kennen die aktuellen Vorgaben und sorgen dafür, dass Ihre Dokumente im ersten Anlauf akzeptiert werden.

Wir stehen Ihnen während des gesamten Prozesses zur Seite — schnell, zuverlässig und mit fundierter Erfahrung in der deutsch-türkischen Rechtspraxis.`,faqDE:[{question:"Was ist eine Apostille und wofür brauche ich sie?",answer:"Eine Apostille ist eine internationale Beglaubigung, die deutsche Dokumente für die Verwendung in der Türkei rechtsgültig macht. Ohne Apostille erkennen türkische Behörden, Gerichte und Banken deutsche Dokumente in der Regel nicht an."},{question:"Kann ich eine Vollmacht für die Türkei in Deutschland ausstellen lassen?",answer:"Ja. Sie können eine Vollmacht bei einem deutschen Notar beurkunden lassen — mit anschließender Apostille und beglaubigter Übersetzung ins Türkische. Wir koordinieren den gesamten Prozess und stellen sicher, dass die Vollmacht den aktuellen Anforderungen türkischer Behörden entspricht."},{question:"Wie lange ist eine Vollmacht für die Türkei gültig?",answer:"Das hängt von der Art der Vollmacht ab. Viele türkische Behörden akzeptieren Vollmachten nur, wenn sie nicht älter als 6 Monate sind. Wir beraten Sie zur optimalen Gültigkeitsdauer für Ihren konkreten Zweck."},{question:"Was passiert, wenn meine Vollmacht von türkischen Behörden abgelehnt wird?",answer:"Das passiert häufiger als man denkt — meistens wegen veralteter Formulierungen oder fehlender spezifischer Befugnisse. Wir stellen sicher, dass Ihre Vollmacht von Anfang an korrekt ausgestellt ist und alle aktuellen Anforderungen erfüllt."},{question:"Kann ich eine Vollmacht auch über das türkische Konsulat beglaubigen lassen?",answer:"Ja. Als Alternative zur Apostille kann eine Beglaubigung durch das türkische Konsulat in Deutschland erfolgen. Wir beraten Sie, welcher Weg für Ihren Fall schneller und kostengünstiger ist."}],faqTR:[{question:"Apostil nedir ve neden gereklidir?",answer:"Apostil, Alman belgelerini Türkiye'de kullanım için hukuken geçerli kılan uluslararası bir onay işlemidir. Apostil olmadan Türk makamları, mahkemeler ve bankalar Alman belgelerini genellikle kabul etmez."},{question:"Türkiye için Almanya'da vekaletname çıkarabilir miyim?",answer:"Evet. Alman noterinde vekaletname onaylattırabilirsiniz — ardından apostil ve Türkçe onaylı çeviri işlemleri yapılır. Tüm süreci koordine ediyor ve vekaletnamenin güncel Türk makamı gerekliliklerini karşıladığından emin oluyoruz."},{question:"Türkiye için vekaletname ne kadar süre geçerlidir?",answer:"Bu, vekaletnamenin türüne bağlıdır. Pek çok Türk makamı yalnızca 6 aydan eski olmayan vekaletnameleri kabul etmektedir. Belirli amacınız için en uygun geçerlilik süresi konusunda danışmanlık veriyoruz."},{question:"Vekaletnamen Türk makamlarınca reddedilirse ne olur?",answer:"Bu, düşünüldüğünden daha sık yaşanır — çoğunlukla güncelliğini yitirmiş ifadeler veya eksik yetki tanımları nedeniyle. Vekaletnamenizin başından itibaren doğru düzenlenmesini ve tüm güncel gereklilikleri karşılamasını sağlıyoruz."},{question:"Türk konsolosluğu aracılığıyla da onay yaptırabilir miyim?",answer:"Evet. Apostile alternatif olarak Almanya'daki Türk konsolosluğu aracılığıyla onay yapılabilir. Hangi yolun durumunuz için daha hızlı ve uygun maliyetli olduğu konusunda danışmanlık veriyoruz."}]},{id:"migrationsrecht",slugDE:"migrationsrecht",slugTR:"goc-hukuku",slugEN:"immigration-law",icon:Db,title:"Migrationsrecht",titleTR:"Göç Hukuku",seoTitleDE:"Migrationsrecht Mannheim | Mavi Kart Türkei | Doğru Kanzlei",seoDescriptionDE:"Aufenthaltserlaubnis, Mavi Kart und Remigration in die Türkei — rechtlich begleitet von Mannheim. Avukat Hasan Doğru berät im türkischen Migrationsrecht.",seoTitleTR:"Türk Göç Hukuku Mannheim | Mavi Kart & Türkiye'de İkamet | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'de oturma izni, Mavi Kart ve geri dönüş — Mannheim'dan hukuki rehberlik. Avukat Hasan Doğru, Türk göç hukuku konusunda danışmanlık verir.",description:"Türkiye'ye taşınmayı planlıyor, emekliliğinizi orada geçirmek istiyor ya da Mavi Kart haklarınız hakkında sorularınız mı var? Türk göç hukuku karmaşıktır — özellikle Alman pasaportu taşıyan veya çift vatandaşlığa sahip Türk kökenli kişiler için, her iki ülkedeki hak ve yükümlülüklerini bilmek büyük önem taşır.",descriptionDE:"Sie planen einen Umzug in die Türkei, möchten Ihren Ruhestand dort verbringen oder haben Fragen zu Ihrer Mavi Kart? Das türkische Migrationsrecht ist komplex — besonders für türkischstämmige Personen mit deutschem Pass oder Doppelstaatsbürgerschaft, die ihre Rechte und Pflichten in beiden Ländern kennen müssen.",detail:"Mavi Kart & Vatandaşlık · İkamet İzinleri · Geri Dönüş",detailDE:"Mavi Kart & Status · Aufenthaltstitel · Remigration",titleEN:"Immigration Law",seoTitleEN:"Turkish Immigration Law Mannheim | Blue Card Turkey | Doğru Kanzlei",seoDescriptionEN:"Residency permits, Blue Card, and remigration to Turkey — expert legal guidance from Mannheim. Attorney Hasan Doğru advises on Turkish immigration law.",descriptionEN:"Planning a move to Turkey or have questions about your Blue Card? Turkish immigration law is complex — we provide clear guidance for your transition.",detailEN:"Blue Card & Status · Residency Permits · Remigration · Citizenship",content:`Göç Hukuku — Mannheim'da Türk Göç Hukuku

Türk Göç Hukuku & Türkiye'de İkamet

Türkiye'ye taşınmayı planlıyor, emekliliğinizi orada geçirmek istiyor ya da Mavi Kart haklarınız hakkında sorularınız mı var? Türk göç hukuku karmaşıktır — özellikle Alman pasaportu taşıyan veya çift vatandaşlığa sahip Türk kökenli kişiler için, her iki ülkedeki hak ve yükümlülüklerini bilmek büyük önem taşır.

Avukat Hasan Doğru yalnızca Türk hukuku alanında danışmanlık vermektedir ve Mannheim, Heidelberg ile tüm Rhein-Neckar bölgesinden Türkiye bağlantılı göç hukuku sorunlarında insanlara yardımcı olmaktadır — yetkin ve gereksiz bürokratik süreçler olmadan.

Sizin için neler yapıyoruz:

- Türkiye'de Oturma İzni (İkamet İzni)
Kısa süreli oturma izninden uzun süreli veya daimi ikamete kadar — tüm uyruklar için Türk oturma izni sisteminde size rehberlik ediyoruz. Başvurunuzu hazırlıyor, tüm belgeleri kontrol ediyor ve Türk göç makamları nezdinde sizi temsil ediyoruz.

- Çalışma İzni ve Türkiye'de Şirket Kurulumu
Türkiye'de çalışmak veya şirket kurmak isteyenler için gerekli Türk izinleri gerekmektedir. Çalışanlar, girişimciler ve yatırımcılara Türk çalışma izni başvurularında destek veriyor ve Türkiye'de hukuki güvenli şirket kurulumu konusunda danışmanlık yapıyoruz.

- Mavi Kart — Haklar ve Yükümlülükler
Mavi Kart, Türk vatandaşlığından çıkan Türk kökenli kişiler için önemli bir araçtır. Resmi vatandaşlık olmaksızın Türkiye'de belirli haklar — taşınmaz edinme, miras, seyahat serbestisi — sağlar. Mavi Kart sahibi olarak hak ve yükümlülükleriniz konusunda kapsamlı danışmanlık veriyoruz.

- Türkiye'ye Hukuki Güvenli Geri Dönüş
Almanya'dan Türkiye'ye taşınmak yalnızca lojistik değil, aynı zamanda hukuki bir süreçtir — Almanya'dan çıkış kaydı, vergisel sonuçlar, Türkiye'de ikamet tesisi, emeklilik konuları. Geri dönüş sürecinin tüm hukuki aşamalarında size eşlik ediyor ve her şeyin doğru şekilde yürütülmesini sağlıyoruz.

- Çift Vatandaşlık ve Türkiye'de Vatandaşlığa Alınma
Almanya ile Türkiye arasındaki çift vatandaşlık soruları, Türkiye'ye yeniden vatandaşlık alımı veya Türk vatandaşlığının kaybı — Türk vatandaşlık hukukuna göre seçenekleriniz konusunda danışmanlık veriyoruz.

Mannheim'da Türk Göç Hukuku İçin Neden Doğru Kanzlei?

Türkiye bağlantılı göç hukuku soruları pek çok büroyu zorlar — çünkü Türk hukukunu bilmezler. Avukat Hasan Doğru bilir. Ankara Barosu üyesi ve § 207 BRAO kapsamında kayıtlı olarak yalnızca Türk hukuku alanında danışmanlık veriyor; Türk makam ve kurumlarına doğrudan erişimimiz bulunmaktadır.

Bizi farklı kılan:
- Yalnızca Türk hukuku — uzman bilgi
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türkiye'deki makamlarla doğrudan temas`,contentDE:`Göç Hukuku — Türkisches Migrationsrecht in Mannheim

Türkisches Migrationsrecht & Aufenthalt in der Türkei

Sie planen einen Umzug in die Türkei, möchten Ihren Ruhestand dort verbringen oder haben Fragen zu Ihrer Mavi Kart? Das türkische Migrationsrecht ist komplex — besonders für türkischstämmige Personen mit deutschem Pass oder Doppelstaatsbürgerschaft, die ihre Rechte und Pflichten in beiden Ländern kennen müssen.

Avukat Hasan Doğru berät ausschließlich im türkischen Recht und begleitet Menschen aus Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum bei allen migrationsrechtlichen Fragen mit Türkeibezug — kompetent und ohne unnötige Bürokratie.

Was wir für Sie tun:

- Aufenthaltserlaubnis in der Türkei (İkamet İzni)
Ob kurzfristiger Aufenthaltstitel, langfristige Aufenthaltserlaubnis oder Daueraufenthalt — wir begleiten Sie durch das türkische Aufenthaltserlaubnissystem für alle Staatsangehörigkeiten. Wir bereiten Ihren Antrag vor, prüfen alle Unterlagen und vertreten Sie gegenüber den türkischen Migrationsbehörden.

- Arbeitserlaubnis & Unternehmensgründung in der Türkei
Wer in der Türkei arbeiten oder ein Unternehmen gründen möchte, benötigt die entsprechenden türkischen Genehmigungen. Wir begleiten Arbeitnehmer, Unternehmer und Investoren bei der Beantragung türkischer Arbeitsgenehmigungen und beraten zur rechtssicheren Unternehmensgründung in der Türkei.

- Mavi Kart — Rechte und Pflichten
Die Mavi Kart (Blaue Karte) ist für türkischstämmige Personen, die die türkische Staatsbürgerschaft aufgegeben haben, ein wichtiges Instrument. Sie ermöglicht bestimmte Rechte in der Türkei — Grundbesitz, Erbschaft, Reisefreiheit — ohne die türkische Staatsbürgerschaft formell zu besitzen. Wir beraten Sie umfassend zu Ihren Rechten und Pflichten als Mavi-Kart-Inhaber.

- Rechtssichere Remigration in die Türkei
Ein Umzug von Deutschland in die Türkei ist nicht nur eine logistische, sondern auch eine rechtliche Herausforderung — Abmeldung in Deutschland, steuerliche Konsequenzen, Begründung des Wohnsitzes in der Türkei, Rentenangelegenheiten. Wir begleiten den gesamten rechtlichen Prozess Ihrer Remigration und sorgen dafür, dass alles korrekt abgewickelt wird.

- Doppelte Staatsbürgerschaft & Einbürgerung in der Türkei
Fragen zur doppelten Staatsbürgerschaft zwischen Deutschland und der Türkei, zur Wiedereinbürgerung in die Türkei oder zum Verlust der türkischen Staatsbürgerschaft — wir beraten Sie zu Ihren Optionen nach türkischem Staatsangehörigkeitsrecht.

Warum Doğru Kanzlei für türkisches Migrationsrecht in Mannheim?

Migrationsrechtliche Fragen mit Türkeibezug stellen viele Kanzleien vor eine Herausforderung — weil sie das türkische Recht nicht kennen. Avukat Hasan Doğru kennt es. Als Mitglied der Ankara Barosu und registriert gemäß § 207 BRAO beraten wir ausschließlich im türkischen Recht — mit direktem Zugang zu türkischen Behörden und Institutionen.

Was uns auszeichnet:
- Ausschließlich türkisches Recht — spezialisierte Expertise
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkte Behördenkontakte in der Türkei`,faqDE:[{question:"Brauche ich als deutscher Staatsbürger eine Aufenthaltserlaubnis für die Türkei?",answer:"Für Kurzaufenthalte bis 90 Tage benötigen deutsche Staatsbürger kein Visum. Wer länger in der Türkei leben möchte, benötigt eine türkische Aufenthaltserlaubnis (İkamet İzni). Wir begleiten Sie durch den Antragsprozess."},{question:"Was ist die Mavi Kart und wer hat Anspruch darauf?",answer:"Die Mavi Kart ist ein Dokument für Personen türkischer Abstammung, die die türkische Staatsbürgerschaft aufgegeben haben. Sie ermöglicht bestimmte Rechte in der Türkei — darunter Grundstückserwerb, Erbrecht und Reisefreiheit — ohne formelle Staatsbürgerschaft. Wir prüfen Ihren Anspruch und begleiten den Antrag."},{question:"Was muss ich rechtlich beachten, wenn ich von Deutschland in die Türkei umziehe?",answer:"Neben der deutschen Abmeldung sind steuerliche Fragen, die Begründung des türkischen Wohnsitzes und eventuell Rentenangelegenheiten zu klären. Wir begleiten den gesamten rechtlichen Prozess Ihrer Remigration."},{question:"Kann ich die türkische Staatsbürgerschaft wiedererlangen?",answer:"Unter bestimmten Voraussetzungen ist eine Wiedereinbürgerung in die Türkei möglich — auch wenn Sie die türkische Staatsbürgerschaft aufgegeben haben. Wir prüfen Ihre individuelle Situation und beraten Sie zu den Möglichkeiten."}],faqTR:[{question:"Alman vatandaşı olarak Türkiye'de oturma iznine ihtiyacım var mı?",answer:"90 güne kadar kısa süreli konaklamalar için Alman vatandaşları vize gerektirmez. Türkiye'de daha uzun süre yaşamak isteyenler Türk oturma izni (İkamet İzni) almak zorundadır. Başvuru sürecinde size rehberlik ediyoruz."},{question:"Mavi Kart nedir ve kimler başvurabilir?",answer:"Mavi Kart, Türk vatandaşlığından çıkan Türk kökenli kişilere verilen bir belgedir. Resmi vatandaşlık olmaksızın Türkiye'de belirli haklar — taşınmaz edinme, miras hakkı ve seyahat serbestisi dahil — tanır. Hak kazanma durumunuzu inceliyor ve başvuru sürecinizi yönetiyoruz."},{question:"Almanya'dan Türkiye'ye taşınırken hukuki açıdan nelere dikkat etmeliyim?",answer:"Almanya'dan çıkış kaydının yanı sıra vergisel konular, Türk ikamet tespiti ve emeklilik meseleleri de ele alınmalıdır. Geri dönüşünüzün tüm hukuki süreçlerine eşlik ediyoruz."},{question:"Türk vatandaşlığımı yeniden kazanabilir miyim?",answer:"Türk vatandaşlığından çıkmış olsanız bile belirli koşullar altında yeniden vatandaşlığa alınmak mümkündür. Bireysel durumunuzu değerlendiriyor ve olanaklarınız konusunda bilgilendiriyoruz."}]},{id:"strafrecht",slugDE:"strafrecht",slugTR:"ceza-hukuku",slugEN:"criminal-law",icon:Tm,title:"Strafrecht",titleTR:"Ceza Hukuku",seoTitleDE:"Strafrecht Türkei Mannheim | Vorladung & Haftbefehl | Doğru Kanzlei",seoDescriptionDE:"Vorladung, Haftbefehl oder Interpol-Ausschreibung aus der Türkei? Avukat Hasan Doğru vertritt türkischstämmige Mandanten aus Mannheim in türkischen Strafverfahren — ohne Reise.",seoTitleTR:"Türk Ceza Hukuku Mannheim | Türkiye'den Mahkeme Celbi | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'den mahkeme celbi, tutuklama müzekkeresi veya Interpol arama kararı mı aldınız? Avukat Hasan Doğru, Mannheim'daki Türk müvekkilleri Türk ceza davalarında temsil eder — Türkiye'ye seyahat etmeden.",description:"Türk ceza davalarında uzman savunma ve hukuki danışmanlık — doğrudan Mannheim'dan. Mahkeme celbi, tutuklama müzekkeresi veya Interpol arama kararı olsun: Türk ceza yargısında yanınızdayız.",descriptionDE:"Fachkundige Strafverteidigung und rechtliche Beratung in türkischen Strafverfahren — direkt aus Mannheim. Ob Vorladung, Haftbefehl oder Interpol-Ausschreibung: Wir begleiten Sie durch das türkische Strafjustizsystem.",detail:"CEZA SAVUNMASI · INTERPOL / KIRMIZI BÜLTEN · İADE",detailDE:"STRAFVERTEIDIGUNG · INTERPOL / ROTE ECKE · AUSLIEFERUNG",titleEN:"Criminal Law",seoTitleEN:"Criminal Law Turkey Mannheim | Summons & Warrants | Doğru Kanzlei",seoDescriptionEN:"Summons, arrest warrant, or Interpol notice from Turkey? Attorney Hasan Doğru represents clients in Mannheim in Turkish criminal proceedings — without travel.",descriptionEN:"Expert criminal defense and legal advice in Turkish proceedings — directly from Mannheim. We protect your rights across borders.",detailEN:"Criminal Defense · Interpol / Red Notice · Extradition · Legal Protection",content:`Almanya'dan Türkiye'deki Ceza Davalarında Savunma

Yurt Dışındaki Türkler için Türk Ceza Hukuku — Mahkeme Celbi veya Tutuklama Müzekkeresinde Ne Yapmalı?

Mannheim, Heidelberg veya Rhein-Neckar bölgesinde yaşıyorsanız ve Türkiye'den mahkeme celbi, tutuklama müzekkeresi veya Interpol arama kararı aldıysanız, ciddi bir hukuki sorunla karşı karşıyasınız demektir. Türk ceza hukuku, Alman hukukundan temelden farklıdır — uzman rehberlik olmadan Türkiye'ye hiç seyahat etmeseniz bile ağır sonuçlarla karşılaşabilirsiniz.

Türkiye'de devam eden bir ceza davası geniş çaplı sonuçlar doğurabilir: pasaport yenileme güçlükleri, Türkiye'ye girişte sorunlar, iade talepleri veya uluslararası arama sistemine (Interpol) kayıt. Bu süreçte zaman belirleyicidir — ne kadar erken harekete geçerseniz şansınız o kadar yüksek olur.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Türkiye'de bizzat bulunmanıza gerek kalmadan Türk ceza davalarında sizi tam anlamıyla temsil ediyoruz.

Sizin için neler yapıyoruz:

- Türkiye'den Gelen Mahkeme Celbi veya Tutuklama Müzekkeresinde Durum Değerlendirmesi
Türkiye'den evrak aldınız ve ne yapacağınızı bilmiyor musunuz? Durumunuzu derhal ve gizlilik içinde analiz ediyor — tutuklama müzekkeresi veya seyahat yasağı bulunup bulunmadığını kontrol ediyor, sonuçları açıklıyor ve bir sonraki adımı birlikte belirliyoruz. Bizimle konuşmadan önce hiçbir şey yapmayın.

- Türk Ceza Yargılamasında Tam Savunma (Ceza Davası)
İlk ifadeden karara ve gerektiğinde üst mahkeme aşamasına kadar Türk ceza yargılamalarında tam savunmayı üstleniyoruz. Dava vekaleti ile Türk ceza mahkemelerinde sizi temsil ediyoruz — Türkiye'de bizzat bulunmanız gerekmiyor. Türk Ceza Muhakemesi Kanunu'nu (CMK) biliyor ve savunmanız için her türlü hukuki imkânı kullanıyoruz.

- Interpol Arama Kararları ve Kırmızı Bültenlerde Temsil (Kırmızı Bülten)
Interpol Kırmızı Bülteni, 196 üye ülkenin tamamında seyahat özgürlüğünüzü kısıtlayabilir — her sınır geçişinde gözaltına alınmanıza neden olabilir. Arama kararının hukuka uygunluğunu inceliyor, Interpol Dosyaların Denetim Komisyonu'na (CCF) kaldırma veya askıya alma başvurusunda bulunuyor ve Interpol ile Türk makamları nezdinde sizi temsil ediyoruz.

- Türkiye ile Almanya Arasındaki İade Davalarında Temsil (İade)
Türkiye Almanya'ya resmi bir iade talebinde bulunursa, hızlı hareket etmek ve her iki ülkede uzman temsil almak kritik önem taşır. Alman makamları ve Türk mahkemeleriyle eş zamanlı koordinasyon sağlıyor, talebin kabul edilebilirliğini inceliyor ve haklarınızı korumak için elimizden geleni yapıyoruz.

- Türk Hukukuna Göre Uyuşturucu Suçlarında Danışmanlık (TCK m. 188, 191)
Türk Ceza Kanunu'na (TCK) göre uyuşturucu suçları suçun türüne bağlı olarak birkaç yıldan ağırlaştırılmış müebbet hapis cezasına kadar uzanan ağır yaptırımlarla karşılık bulmaktadır. Haklarınız ve olası ceza indirim nedenleri konusunda danışmanlık veriyor, Türk ceza mahkemelerinde kararlılıkla sizi temsil ediyoruz.

- Dolandırıcılık ve Güveni Kötüye Kullanma Davalarında Temsil (Dolandırıcılık, Güveni Kötüye Kullanma)
Türk ceza hukukuna göre dolandırıcılık ve güveni kötüye kullanma suçlamaları titiz ve dikkatli bir savunma stratejisi gerektirir. Olayı bütünüyle analiz ediyor, aklamanıza yönelik delilleri güvence altına alıyor ve Türk ceza yargılamalarında sizi temsil ediyoruz.

- Almanya'dan Türkiye'de Suç Duyurusu (Suç Duyurusu)
Türkiye'de bir suçun mağduru oldunuz mu — dolandırıcılık, gasp, hırsızlık, yaralama? Almanya'dan da suç duyurusunda bulunabilirsiniz. Yetkili Türk Cumhuriyet Savcılığı'na Suç Duyurusu'nu hazırlayıp sunuyor ve davayı sizin adınıza takip ediyoruz.

- Askerlik Suçlarında Danışmanlık (Bakaya, Yoklama Kaçağı)
Pek çok Almanya'lı Türk, hakkında arama kararı olduğundan habersiz olarak Türkiye'ye gidiyor. Bakaya (firar) veya Yoklama Kaçağı (kayıt dışı kalma) durumunda havalimanında anında gözaltına alınma riski bulunmaktadır. Resmi kanallar aracılığıyla askerlik statünüzü netleştiriyor, bekleyen yükümlülükleri çözüme kavuşturuyor ve Türkiye'ye güvenle seyahat edebilmenizi sağlıyoruz.

- Türk Hukukuna Göre İnternet Suçları ve Siber Suçlarda Temsil
Türk Ceza Kanunu; internette hakaret (TCK m. 125), sosyal medyada iftira ve gizlilik ihlallerini — yurt dışında yaşayan kişiler söz konusu olsa dahi — giderek daha sert yaptırımlarla karşılamaktadır. Türk internet suçu davalarında sanık veya mağdur olarak sizi temsil ediyoruz.

- Siyasi Ceza Davaları ve Basın Özgürlüğü Suçlarında Danışmanlık
Türkiye'de sosyal medya paylaşımları veya grup konuşmalarındaki mesajlar bile cezai kovuşturmaya konu olabilmektedir. Devleti aşağılama (TCK m. 301), terör propagandası (TMK m. 7/2) veya benzer suçlamalarla karşılaşıyorsanız, uzman bilgimizle yanınızdayız.

Türkiye'den Mahkeme Celbi Aldığınızda Ne Yapmalısınız?

Pek çok kişi bu durumda aynı hatayı yapıyor: Hakkında tutuklama müzekkeresi olup olmadığını bilmeden Türkiye'ye gidiyor. Bu, havalimanında anında gözaltıyla sonuçlanabilir.

Doğru adımlar:

Adım 1 — Statünüz netleşmeden Türkiye'ye gitmeyin.
Adım 2 — Derhal bizimle iletişime geçin. Tutuklama müzekkeresi, seyahat yasağı veya Interpol arama kararı bulunup bulunmadığını kontrol ediyoruz.
Adım 3 — Yürütülen davayı analiz ediyor ve seçeneklerinizi açıklıyoruz.
Adım 4 — Birlikte bir strateji belirliyoruz — savunma, beyan veya davanın düşürülmesi.
Adım 5 — Türk makamları ve mahkemeleri önünde sizi tam anlamıyla temsil ediyoruz — vekaletname ile, bizzat bulunmanız gerekmeden.

Mannheim'da Türk Ceza Hukuku İçin Neden Doğru Kanzlei?

Türk ceza hukuku; Türk Ceza Kanunu (TCK), Ceza Muhakemesi Kanunu (CMK) ve Türk yargı pratiği konusunda derinlemesine bilgi gerektiren bir uzmanlık alanıdır. Avukat Hasan Doğru, Ankara Barosu üyesi olarak Türk ceza yargısını içeriden tanımaktadır — ders kitaplarından değil, uygulamadan.

Mannheim'daki büromuz, Türk ceza davalarıyla karşılaşan Rhein-Neckar bölgesindeki Türk kökenli müvekkiller için doğrudan muhataptır. Türkçe ve Almanca konuşuyoruz. Hızlı hareket ediyoruz. Ve davanın her aşamasında sizi şeffaf biçimde bilgilendiriyoruz.

Bizi farklı kılan:

- Yalnızca Türk hukuku — Türk ceza hukukunda uzman bilgi
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Türkiye'ye seyahat etmeden tam temsil imkânı
- Mahkeme celbi veya tutuklama müzekkeresinde anında durum kontrolü
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türk ceza mahkemeleri ve makamlarına doğrudan erişim`,contentDE:`Strafverteidigung in der Türkei aus Deutschland

Türkisches Strafrecht für Auslandstürken — Was tun bei Vorladung oder Haftbefehl?

Wenn Sie in Mannheim, Heidelberg oder dem Rhein-Neckar-Raum leben und eine Vorladung, einen Haftbefehl oder eine Interpol-Ausschreibung aus der Türkei erhalten haben, stehen Sie vor einer ernsthaften rechtlichen Herausforderung. Das türkische Strafrecht unterscheidet sich grundlegend vom deutschen — ohne fachkundige Begleitung riskieren Sie schwerwiegende Konsequenzen, auch ohne jemals in die Türkei zu reisen.

Ein laufendes Strafverfahren in der Türkei kann weitreichende Folgen haben: Einschränkungen bei der Passverlängerung, Probleme bei der Einreise in die Türkei, Auslieferungsanträge oder Einträge im internationalen Fahndungssystem (Interpol). Zeit ist dabei entscheidend — je früher Sie handeln, desto besser stehen Ihre Chancen.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir vertreten Sie vollständig in türkischen Strafverfahren — auch ohne Ihre persönliche Anwesenheit in der Türkei.

Was wir für Sie tun:

- Prüfung Ihrer Situation bei Vorladung oder Haftbefehl aus der Türkei
Sie haben Post aus der Türkei erhalten und wissen nicht, was zu tun ist? Wir analysieren Ihre Situation sofort und vertraulich — prüfen ob ein Haftbefehl oder Reiseverbot besteht, erklären Ihnen die Konsequenzen und legen gemeinsam mit Ihnen den nächsten Schritt fest. Handeln Sie nicht, bevor Sie mit uns gesprochen haben.

- Vollständige Strafverteidigung im türkischen Strafverfahren (Ceza Davası)
Wir übernehmen die vollständige Verteidigung in türkischen Strafverfahren — von der ersten Einlassung bis zum Urteil und gegebenenfalls bis zur Rechtsmittelinstanz. Per Prozessvollmacht vertreten wir Sie vor türkischen Strafgerichten, ohne dass Sie persönlich in der Türkei erscheinen müssen. Wir kennen das türkische Strafprozessrecht (CMK) und nutzen jeden rechtlichen Spielraum für Ihre Verteidigung.

- Vertretung bei Interpol-Ausschreibungen und Roten Ecken (Kırmızı Bülten)
Eine Rote Ecke (Red Notice) von Interpol kann Ihre Reisefreiheit in allen 196 Mitgliedsstaaten einschränken — und dazu führen, dass Sie bei jeder Grenzüberschreitung festgehalten werden. Wir prüfen die Rechtmäßigkeit der Ausschreibung, beantragen die Löschung oder Aussetzung bei der Interpol-Kommission für die Kontrolle von Dateien (CCF) und vertreten Sie gegenüber Interpol und türkischen Behörden.

- Begleitung bei Auslieferungsverfahren zwischen der Türkei und Deutschland (İade)
Wenn die Türkei ein förmliches Auslieferungsersuchen an Deutschland stellt, sind schnelles Handeln und spezialisierte Vertretung in beiden Ländern entscheidend. Wir koordinieren mit deutschen Behörden und türkischen Gerichten gleichzeitig, prüfen die Zulässigkeit des Ersuchens und setzen alles daran, Ihre Rechte zu schützen.

- Beratung bei Betäubungsmitteldelikten nach türkischem Recht (TCK m. 188, 191)
Betäubungsmitteldelikte nach dem türkischen Strafgesetzbuch (TCK) werden mit erheblichen Freiheitsstrafen geahndet — die Strafen reichen je nach Delikt von mehreren Jahren bis zu lebenslanger Haft. Wir beraten Sie zu Ihren Rechten, möglichen Strafminderungsgründen und vertreten Sie konsequent vor türkischen Strafgerichten.

- Vertretung bei Betrug und Untreue (Dolandırıcılık, Güveni Kötüye Kullanma)
Betrugs- und Untreuevorwürfe nach türkischem Strafrecht erfordern eine differenzierte und sorgfältige Verteidigungsstrategie. Wir analysieren den Sachverhalt vollständig, sichern entlastende Beweismittel und vertreten Sie durchsetzungsstark in türkischen Strafverfahren.

- Einreichung von Strafanzeigen in der Türkei aus Deutschland (Suç Duyurusu)
Wurden Sie selbst Opfer einer Straftat in der Türkei — Betrug, Erpressung, Diebstahl, Körperverletzung — können Sie auch von Deutschland aus Strafanzeige erstatten. Wir formulieren und reichen die Suç Duyurusu bei der zuständigen türkischen Staatsanwaltschaft ein und verfolgen das Verfahren in Ihrem Auftrag.

- Beratung bei Militärdienst-Vergehen (Bakaya, Yoklama Kaçağı)
Viele Deutsch-Türken reisen sorglos in die Türkei — ohne zu wissen, dass sie wegen nicht abgeleisteten Militärdienstes gesucht werden. Bakaya (Fahnenflucht) oder Yoklama Kaçağı (Erfassungsentzug) können bei der Einreise zu sofortiger Festnahme führen. Wir klären Ihren Militärdienststatus, regeln offene Pflichten und sichern Ihnen die Möglichkeit, sicher in die Türkei zu reisen.

- Begleitung bei Internetstraftaten und Cyber-Kriminalität nach türkischem Recht
Das türkische Strafgesetzbuch ahndet Beleidigung im Internet (TCK m. 125), Verleumdung in sozialen Medien und Datenschutzverletzungen zunehmend streng — auch wenn die betreffenden Personen im Ausland leben. Wir vertreten Sie sowohl als Beschuldigten als auch als Geschädigten in türkischen Verfahren wegen Internetkriminalität.

- Beratung bei politischen Strafverfahren und Pressefreiheitsdelikten
In der Türkei werden auch Meinungsäußerungen in sozialen Medien oder Beiträge in Gruppenkonversationen strafrechtlich verfolgt. Wenn Sie wegen Beleidigung des Staates (TCK m. 301), Terrorismuspropaganda (TMK m. 7/2) oder ähnlichen Delikten verfolgt werden, stehen wir Ihnen mit spezialisierter Expertise zur Seite.

Was tun, wenn Sie eine Vorladung aus der Türkei erhalten?

Viele Menschen machen in dieser Situation denselben Fehler: Sie reisen in die Türkei, ohne zu wissen, ob ein Haftbefehl vorliegt. Das kann zur sofortigen Festnahme am Flughafen führen.

Der richtige Ablauf:

Schritt 1 — Nicht in die Türkei reisen, bevor Ihr Status geklärt ist.
Schritt 2 — Kontaktieren Sie uns sofort. Wir prüfen ob ein Haftbefehl, Reiseverbot oder eine Interpol-Ausschreibung vorliegt.
Schritt 3 — Wir analysieren das zugrundeliegende Verfahren und erklären Ihnen Ihre Optionen.
Schritt 4 — Wir entwickeln gemeinsam mit Ihnen eine Strategie — ob Einlassung, Verteidigung oder Verfahrenseinstellung.
Schritt 5 — Wir vertreten Sie vollständig vor türkischen Behörden und Gerichten — per Vollmacht, ohne Ihre Anwesenheit.

Warum Doğru Kanzlei für türkisches Strafrecht in Mannheim?

Türkisches Strafrecht ist ein Spezialgebiet, das tiefgreifende Kenntnisse des türkischen Strafgesetzbuchs (TCK), der türkischen Strafprozessordnung (CMK) und der türkischen Justizpraxis erfordert. Avukat Hasan Doğru ist Mitglied der Ankara Barosu und kennt das türkische Strafjustizsystem von innen — nicht aus Lehrbüchern, sondern aus der Praxis.

Unsere Kanzlei in Mannheim ist der direkte Ansprechpartner für türkischstämmige Mandanten im Rhein-Neckar-Raum, die mit türkischen Strafverfahren konfrontiert sind. Wir sprechen Türkisch und Deutsch. Wir handeln schnell. Und wir halten Sie in jeder Phase des Verfahrens transparent informiert.

Was uns auszeichnet:

- Ausschließlich türkisches Recht — spezialisierte Expertise im türkischen Strafrecht
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Vollständige Vertretung ohne Reise in die Türkei möglich
- Sofortige Statusprüfung bei Vorladung oder Haftbefehl
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkter Zugang zu türkischen Strafgerichten und Behörden`,faqDE:[{question:"Ich habe eine Vorladung aus der Türkei erhalten. Was soll ich tun?",answer:"Handeln Sie nicht unüberlegt und reisen Sie auf keinen Fall in die Türkei, bevor Sie Ihren Status kennen. Kontaktieren Sie uns zuerst — bevor Sie auf die Vorladung antworten oder irgendwelche Schritte unternehmen. Wir analysieren die Situation, prüfen ob ein Haftbefehl oder Reiseverbot vorliegt und legen den sichersten Weg fest."},{question:"Kann ich in die Türkei einreisen, wenn gegen mich ein Verfahren läuft?",answer:"Das hängt davon ab, ob ein Reiseverbot (Yurt Dışı Çıkış Yasağı) oder Haftbefehl (Tutuklama Müzekkeresi) vorliegt. In manchen Fällen ist die Einreise möglich, in anderen droht unmittelbare Festnahme am Flughafen. Wir prüfen Ihren Status, bevor Sie reisen — das ist in jedem Fall unverzichtbar."},{question:"Kann ich in einem türkischen Strafverfahren vertreten werden, ohne selbst zu erscheinen?",answer:"In den meisten Verfahren ja. Mit einer Prozessvollmacht (Vekaletname) vertreten wir Sie vor türkischen Strafgerichten. Ob eine persönliche Anwesenheit erforderlich ist, hängt vom Verfahrensstand, der Art des Delikts und dem Willen des Gerichts ab — wir klären das von Anfang an."},{question:"Was ist eine Interpol-Rote-Ecke und wie kann sie aufgehoben werden?",answer:"Eine Red Notice ist ein internationaler Fahndungsaufruf, der in allen 196 Interpol-Mitgliedsstaaten gilt. Sie schränkt Ihre Reisefreiheit erheblich ein. Wir beantragen die Überprüfung und Löschung der Ausschreibung bei der Interpol-Kommission für die Kontrolle von Dateien (CCF) und vertreten Sie in diesem spezialisierten Verfahren."},{question:"Was passiert, wenn ich wegen des Militärdienstes gesucht werde?",answer:"Wer als Bakaya (Fahnenflüchtiger) oder Yoklama Kaçağı (Erfassungsentzieher) registriert ist, riskiert bei der Einreise in die Türkei sofortige Festnahme. Wir klären Ihren Militärdienststatus über offizielle Kanäle, regeln offene Pflichten und ermöglichen Ihnen so eine sichere Einreise in die Türkei."},{question:"Wie lange dauert ein türkisches Strafverfahren?",answer:"Das hängt stark von der Art des Delikts, dem zuständigen Gericht und dem Verfahrensstand ab. Einfachere Verfahren können in 6–18 Monaten abgeschlossen werden, komplexe Fälle dauern mehrere Jahre. Wir informieren Sie realistisch und transparent über den Zeitrahmen Ihres konkreten Falls — ohne falsche Versprechen."},{question:"Was kostet eine Strafverteidigung nach türkischem Recht?",answer:"Die Kosten hängen vom Umfang des Verfahrens, der Anzahl der Instanzen und der Komplexität des Falls ab. Nach einer ersten Analyse erstellen wir Ihnen ein transparentes Angebot — ohne versteckte Kosten."}],faqTR:[{question:"Türkiye'den mahkeme celbi aldım. Ne yapmalıyım?",answer:"Aceleci davranmayın ve statünüzü öğrenmeden Türkiye'ye gitmeyin. Mahkeme celbine yanıt vermeden veya herhangi bir adım atmadan önce bize başvurun. Durumu analiz ediyor, tutuklama müzekkeresi ya da seyahat yasağı bulunup bulunmadığını kontrol ediyor ve en güvenli yolu belirliyoruz."},{question:"Hakkımda dava varken Türkiye'ye girebilir miyim?",answer:"Bu, seyahat yasağı (Yurt Dışı Çıkış Yasağı) veya tutuklama müzekkeresi (Tutuklama Müzekkeresi) bulunup bulunmadığına bağlıdır. Bazı durumlarda giriş mümkünken bazılarında havalimanında anında gözaltı riski söz konusudur. Seyahat etmeden önce her durumda statünüzü kontrol ediyoruz — bu vazgeçilmezdir."},{question:"Türk ceza yargılamasında bizzat bulunmadan temsil edilebilir miyim?",answer:"Pek çok davada evet. Dava vekaleti (Vekaletname) ile Türk ceza mahkemelerinde sizi temsil edebiliyoruz. Bizzat katılımın gerekip gerekmediği, davanın aşamasına, suçun niteliğine ve mahkemenin takdirine bağlıdır — bunu başından netleştiriyoruz."},{question:"Interpol Kırmızı Bülteni nedir ve nasıl kaldırılır?",answer:"Kırmızı Bülten, tüm 196 Interpol üyesi ülkede geçerli uluslararası bir arama ilanıdır. Seyahat özgürlüğünüzü ciddi ölçüde kısıtlar. Interpol Dosyaların Denetim Komisyonu'na (CCF) başvurarak arama kararının incelenmesi ve kaldırılması için talepte bulunuyor, bu özel süreçte sizi temsil ediyoruz."},{question:"Askerlik nedeniyle aranıyorsam ne olur?",answer:"Bakaya (firar) veya Yoklama Kaçağı (kayıt dışı kalma) olarak tescil edilmişseniz Türkiye'ye girişte anında gözaltı riskiyle karşılaşabilirsiniz. Resmi kanallar aracılığıyla askerlik statünüzü netleştiriyor, bekleyen yükümlülükleri çözüme kavuşturuyor ve güvenli Türkiye girişini mümkün kılıyoruz."},{question:"Bir Türk ceza davası ne kadar sürer?",answer:"Bu, suçun türüne, yetkili mahkemeye ve davanın aşamasına göre büyük farklılık gösterir. Daha basit davalar 6–18 ayda sonuçlanabilirken karmaşık davalar yıllarca sürebilir. Somut davanızın zaman çizelgesi konusunda gerçekçi ve şeffaf bilgi veriyoruz — gerçekçi olmayan vaatler yapmadan."},{question:"Türk ceza savunmasının maliyeti nedir?",answer:"Maliyet, davanın kapsamına, yargılama aşaması sayısına ve karmaşıklığına bağlıdır. İlk değerlendirmenin ardından şeffaf bir teklif sunuyoruz — gizli ücret olmaksızın."}]},{id:"tanima-ve-tenfiz",slugDE:"tanima-ve-tenfiz",slugTR:"tanima-ve-tenfiz",slugEN:"recognition-and-enforcement",icon:wm,title:"Tanıma & Tenfiz",titleTR:"Tanıma ve Tenfiz",seoTitleDE:"Tanıma & Tenfiz Mannheim | Urteil Türkei anerkennen | Doğru Kanzlei",seoDescriptionDE:"Deutsche Scheidung in der Türkei anerkennen lassen — von Mannheim aus, ohne Reise. Avukat Hasan Doğru führt das Tanıma ve Tenfiz-Verfahren vollständig für Sie durch.",seoTitleTR:"Tanıma ve Tenfiz Mannheim | Alman Boşanmasını Türkiye'de Tanıtmak | Avukat Hasan Doğru",seoDescriptionTR:"Alman boşanma kararını Türkiye'de tanıtın — Mannheim'dan, Türkiye'ye gitmeden. Avukat Hasan Doğru, Tanıma ve Tenfiz davasını baştan sona sizin için yürütür.",description:"Almanya ile Türkiye arasındaki yabancı mahkeme kararlarının tanınması ve tenfizinde uzman hukuki danışmanlık — Türkiye'ye seyahat etmeden.",descriptionDE:"Spezialisierte rechtliche Beratung bei der Anerkennung und Vollstreckung ausländischer Gerichtsentscheidungen zwischen Deutschland und der Türkei — vollständig ohne Reise.",detail:"Boşanma Tanıma Tenfiz · Türk Boşanmasının Tanınması · Gitmeden Tanıma Tenfiz · Süre ve Maliyet · Velayet Kararları · Evlat Edinme · Genel Mahkeme Kararları",detailDE:"Scheidungsanerkennung · Anerkennung türkischer Urteile · Tanıma Tenfiz (Reise nicht erforderlich) · Verfahrensdauer & Kosten · Sorgerechtsbeschlüsse · Adoptionsanerkennung · Urteilsanerkennung allgemein",titleEN:"Recognition & Enforcement",seoTitleEN:"Recognition & Enforcement Mannheim | Turkey Urteil Recognition | Doğru Kanzlei",seoDescriptionEN:"Recognize German divorce decrees in Turkey — from Mannheim, without travel. Attorney Hasan Doğru handles the Tanıma ve Tenfiz procedure fully for you.",descriptionEN:"Expert legal advice on the recognition and enforcement of foreign court decisions between Germany and Turkey — completely without travel.",detailEN:"Divorce Recognition · Turkish Decree Recognition · Recognition without Travel · Duration & Costs · Custody Orders · Adoption · General Court Orders",content:`Tanıma ve Tenfiz — Alman Boşanmasını Türkiye'de Tanıtmak

Yabancı mahkeme kararları Türkiye'de kendiliğinden geçerli olmaz — biz geçerli hale getiriyoruz.

Almanya'da boşandıysanız, bu karar Türkiye'de otomatik olarak geçerli sayılmaz. Türk hukuku açısından evliliğinizin sona ermiş sayılabilmesi için ayrı bir mahkeme süreci gereklidir — buna Tanıma ve Tenfiz denir.

Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler için bu süreç çoğunlukla bilinmemektedir — ve sonuçları ağır olabilmektedir. Tanıma yapılmadan Türk makamları sizi hâlâ evli kabul eder. Bu durum; yeniden evlenme, miras ve Türkiye'deki mal varlığının devri gibi konularda ciddi sorunlara yol açabilir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Tüm Tanıma ve Tenfiz sürecini sizin için yürütüyoruz — Türkiye'ye seyahat etmenize gerek kalmadan.

Sizin için neler yapıyoruz:

- Alman Boşanmasını Türkiye'de Tanıtmak (Tanıma)
Almanya'da boşandıysanız ve bu boşanmanın Türkiye'de de geçerli sayılmasını istiyorsanız, yetkili Türk mahkemelerinde tam Tanıma davasını yürütüyoruz — gerekli tüm belgelerin hazırlanmasından başvuruya, kararın kesinleşmesine kadar. Türkiye'de bizzat bulunmanıza gerek yoktur.

- Yabancı Kararların Türkiye'de İcrası (Tenfiz)
Yalnızca tanıma değil, aynı zamanda nafaka ödemeleri, mal paylaşımı veya velayet kararları gibi konularda icra da söz konusuysa Tenfiz davasını açıyor ve kararın Türkiye'de icra edilebilir ve fiilen uygulanabilir hale gelmesini sağlıyoruz.

- Türk Boşanmasının Almanya'da Tanınması
Türkiye'de verilen kararlar da Almanya'da otomatik geçerlilik kazanmaz. Türkiye'de boşandıysanız ve bu boşanmanın Almanya'da resmi olarak tanınmasını istiyorsanız, koşulları inceliyor ve yetkili Alman makamı nezdinde tanıma işlemini başlatıyoruz.

- Türkiye'ye Gitmeden Tanıma ve Tenfiz
Dava vekaleti ile Türk mahkemelerinde sizi tam anlamıyla temsil ediyoruz — Türkiye'de bizzat görünmeniz gerekmiyor. Mannheim ve Almanya genelindeki pek çok müvekkilimiz süreci tamamen uzaktan yürütmektedir. Belgeler, çeviriler, mahkeme yazışmaları ve süreler — tümünü biz hallediyoruz.

- Velayet Kararlarının Uluslararası Tanınması
Alman velayet ve kişisel ilişki kararları, Türkiye'de icra edilebilmesi için ayrı bir Tanıma davası yoluyla tanınmak zorundadır. Bu davayı Türk mahkemelerinde yürütüyor ve velayet düzenlemenizin Türkiye'de de geçerliliğini sağlıyoruz.

- Türkiye ile Almanya Arasında Evlat Edinme Tanıması
Sınır ötesi evlat edinmeler, her iki ülkede de evlat edinme kararının karşılıklı olarak tanınmasını gerektirmektedir. Bu süreç karmaşıktır ve her iki ülkedeki makamlarla yakın iş birliği gerektirir. Hukuki olarak her adımda yanınızdayız.

- Genel Mahkeme Kararlarının Tanınması (Genel Mahkeme Kararları)
Yalnızca boşanma kararları değil; miras hukuku, sözleşme hukuku veya nafaka ilamları gibi diğer Alman mahkeme kararları da Türkiye'de tanınıp icra edilebilir hale getirilebilir. Davanızı inceliyor ve ilgili süreci başlatıyoruz.

- Süre ve Maliyet Konusunda Şeffaf Danışmanlık
Başından itibaren gerçekçi bir değerlendirme sunuyoruz — sürecin ne kadar süreceğini, hangi belgelerin gerektiğini, ne kadara mal olacağını. Gizli ücret yok, gerçekçi olmayan vaatler yok.

Tanıma ve Tenfiz Süreci Nasıl İşler?

Adım 1 — Belge Hazırlığı:
Hangi belgelerin gerektiğini inceliyoruz — genellikle apostilli boşanma kararı ve onaylı Türkçe çevirisi — ve tüm belgelerin teminini koordine ediyoruz.

Adım 2 — Başvuru:
Tanıma talebini yetkili Türk mahkemesine (Asliye Hukuk Mahkemesi) sunuyor ve vekaleten sizin avukatınız olarak sizi temsil ediyoruz.

Adım 3 — Yargılama Süreci:
Türk mahkemesi, tanıma koşullarının karşılanıp karşılanmadığını incelemektedir — özellikle yabancı kararın kesinleşip kesinleşmediğini ve Türk kamu düzenine (ordre public) aykırı olup olmadığını.

Adım 4 — Kararın Kesinleşmesi:
Tanıma kararı kesinleştikten sonra sizi derhal bilgilendiriyoruz ve gerekli tüm sonraki adımları — örneğin Türk nüfus kayıtlarında medeni hal değişikliği — başlatıyoruz.

Mannheim'da Tanıma ve Tenfiz İçin Neden Doğru Kanzlei?

Tanıma ve Tenfiz davası teknik görünebilir — ve gerçekten öyledir. Belge hazırlığındaki hatalar, yanlış çeviriler veya kaçırılan süreler tüm süreci aylarca geciktirebilir ya da reddedilmesiyle sonuçlanabilir. Avukat Hasan Doğru, Türk mahkemelerinin gerekliliklerini yakından bilmekte ve başvurunuzun başından itibaren doğru olmasını sağlamaktadır.

Ankara Barosu üyesi olarak Mannheim'da büroya ve Ankara'da ikinci ofise sahip olan büromuz, Rhein-Neckar bölgesindeki Türk kökenli müvekkiller için doğrudan muhataptır.

Bizi farklı kılan:

- Yalnızca Türk hukuku — tanıma davalarında uzman bilgi
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Türkiye'ye seyahat etmeden tam süreç yönetimi mümkün
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türk mahkemeleriyle doğrudan iş birliği`,contentDE:`Tanıma ve Tenfiz — Deutsche Scheidung in der Türkei anerkennen lassen

Ausländische Urteile gelten in der Türkei nicht automatisch — wir machen sie rechtswirksam.

Wenn Ihre Ehe in Deutschland geschieden wurde, entfaltet dieses Urteil in der Türkei nicht automatisch seine Wirkung. Damit die Scheidung auch nach türkischem Recht als wirksam gilt, ist ein gesondertes gerichtliches Verfahren erforderlich — die sogenannte Tanıma ve Tenfiz (Anerkennung und Vollstreckung).

Für türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum ist dieses Verfahren oft unbekannt — mit weitreichenden Konsequenzen. Ohne Tanıma gilt Ihre Ehe vor türkischen Behörden weiterhin als bestehend. Das kann bei einer erneuten Heirat, bei erbrechtlichen Fragen oder bei der Übertragung von Vermögenswerten in der Türkei zu erheblichen Problemen führen.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir führen das gesamte Tanıma ve Tenfiz-Verfahren für Sie durch — vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

- Deutsche Scheidung in der Türkei anerkennen lassen (Tanıma)
Wenn Ihre Ehe in Deutschland geschieden wurde und Sie diese Scheidung auch in der Türkei wirksam machen möchten, führen wir das vollständige Tanıma-Verfahren vor den zuständigen türkischen Gerichten durch — von der Vorbereitung aller notwendigen Dokumente über die Antragstellung bis zur rechtskräftigen Anerkennung. Sie müssen nicht persönlich in der Türkei erscheinen.

- Vollstreckung ausländischer Urteile in der Türkei (Tenfiz)
Geht es nicht nur um die Anerkennung, sondern auch um die Vollstreckung eines Urteils — zum Beispiel bei Unterhaltszahlungen, Vermögensaufteilung oder Sorgerechtsentscheidungen — führen wir das Tenfiz-Verfahren ein und sorgen dafür, dass das Urteil in der Türkei vollstreckbar ist und tatsächlich umgesetzt wird.

- Türkische Scheidung in Deutschland anerkennen lassen
Auch türkische Urteile entfalten in Deutschland nicht automatisch ihre Wirkung. Wenn Sie in der Türkei geschieden wurden und diese Scheidung in Deutschland offiziell anerkannt haben möchten, prüfen wir die Voraussetzungen und leiten das Anerkennungsverfahren bei der zuständigen deutschen Behörde ein.

- Tanıma Tenfiz ohne Reise in die Türkei
Per Prozessvollmacht vertreten wir Sie vollständig vor türkischen Gerichten — kein persönliches Erscheinen in der Türkei erforderlich. Viele unserer Mandanten aus Mannheim und dem gesamten Bundesgebiet führen das Verfahren vollständig auf Distanz durch. Wir kümmern uns um Dokumente, Übersetzungen, Gerichtskorrespondenz und Fristen.

- Sorgerechtsbeschlüsse international anerkennen lassen
Deutsche Sorgerechts- und Umgangsrechtsurteile müssen in der Türkei durch ein eigenes Tanıma-Verfahren anerkannt werden, bevor sie dort vollstreckbar sind. Wir führen dieses Verfahren vor türkischen Gerichten durch und sorgen dafür, dass Ihre Sorgerechtsregelung in der Türkei Bestand hat.

- Adoptionsanerkennung zwischen der Türkei und Deutschland
Grenzüberschreitende Adoptionen erfordern die gegenseitige Anerkennung des Adoptionsbeschlusses in beiden Ländern. Dieses Verfahren ist komplex und erfordert die enge Zusammenarbeit mit Behörden in beiden Ländern. Wir begleiten Sie rechtlich durch jeden Schritt.

- Allgemeine Urteilsanerkennung (Genel Mahkeme Kararları)
Nicht nur Scheidungsurteile, sondern auch andere deutsche Gerichtsentscheidungen — etwa im Erbrecht, Vertragsrecht oder bei Unterhaltstiteln — können in der Türkei anerkannt und für vollstreckbar erklärt werden. Wir prüfen Ihren Fall und leiten das entsprechende Verfahren ein.

- Transparente Beratung zu Verfahrensdauer und Kosten
Wir geben Ihnen von Anfang an eine realistische Einschätzung — wie lange das Verfahren dauert, welche Dokumente benötigt werden, welche Kosten entstehen. Keine versteckten Gebühren, keine falschen Versprechen.

Wie läuft das Tanıma ve Tenfiz-Verfahren ab?

Schritt 1 — Dokumentenvorbereitung:
Wir prüfen welche Unterlagen benötigt werden — in der Regel das Scheidungsurteil mit Apostille und beglaubigter türkischer Übersetzung — und koordinieren die Beschaffung aller Dokumente.

Schritt 2 — Antragstellung:
Wir reichen den Tanıma-Antrag beim zuständigen türkischen Gericht (Asliye Hukuk Mahkemesi) ein und vertreten Sie als Ihren bevollmächtigten Anwalt.

Schritt 3 — Gerichtsverfahren:
Das türkische Gericht prüft ob die Voraussetzungen für eine Anerkennung erfüllt sind — insbesondere ob das ausländische Urteil rechtskräftig ist und türkischen Grundsätzen (ordre public) nicht widerspricht.

Schritt 4 — Rechtskräftige Anerkennung:
Nach positiver Entscheidung wird die Anerkennung rechtskräftig. Wir informieren Sie sofort und stellen sicher, dass alle notwendigen Folgeschritte — zum Beispiel die Änderung des Personenstands in türkischen Registern — eingeleitet werden.

Warum Doğru Kanzlei für Tanıma ve Tenfiz in Mannheim?

Das Tanıma ve Tenfiz-Verfahren klingt technisch — und ist es auch. Fehler bei der Dokumentenvorbereitung, falsche Übersetzungen oder verpasste Fristen können das gesamte Verfahren um Monate verzögern oder zur Ablehnung führen. Avukat Hasan Doğru kennt die Anforderungen türkischer Gerichte genau und stellt sicher, dass Ihr Antrag von Anfang an korrekt ist.

Als Mitglied der Ankara Barosu mit Büro in Mannheim und zweitem Standort in Ankara sind wir der direkte Ansprechpartner für türkischstämmige Mandanten im Rhein-Neckar-Raum.

Was uns auszeichnet:

- Ausschließlich türkisches Recht — spezialisierte Expertise im Anerkennungsverfahren
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Vollständiges Verfahren ohne Reise in die Türkei möglich
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkte Zusammenarbeit mit türkischen Gerichten`,faqDE:[{question:"Warum wird meine deutsche Scheidung in der Türkei nicht automatisch anerkannt?",answer:"Die Türkei ist kein EU-Mitgliedstaat und hat keine bilateralen Abkommen mit Deutschland über die automatische Urteilsanerkennung. Jedes ausländische Urteil muss durch ein eigenständiges gerichtliches Verfahren (Tanıma) in der Türkei anerkannt werden — unabhängig davon, wie lange die Scheidung in Deutschland schon rechtskräftig ist."},{question:"Was passiert konkret, wenn ich das Tanıma-Verfahren nicht durchführe?",answer:"Ohne Tanıma gilt Ihre Ehe vor türkischen Behörden, Gerichten und Standesämtern weiterhin als bestehend. Wenn Sie in der Türkei erneut heiraten möchten, werden Sie als verheiratet geführt. Bei Erbschaftsangelegenheiten hat Ihr früherer Ehepartner möglicherweise weiterhin Ansprüche. Bei der Übertragung gemeinsamer Immobilien in der Türkei wird die Mitwirkung des früheren Ehepartners verlangt."},{question:"Welche Dokumente brauche ich für das Tanıma-Verfahren?",answer:"In der Regel benötigen Sie das rechtskräftige Scheidungsurteil mit Apostille sowie eine beglaubigte Übersetzung ins Türkische. Je nach Fall können weitere Dokumente erforderlich sein — wir prüfen Ihren konkreten Fall und erstellen eine vollständige Dokumentenliste."},{question:"Wie lange dauert das Tanıma ve Tenfiz-Verfahren?",answer:"In der Regel 3–9 Monate, abhängig vom zuständigen türkischen Gericht und dessen Auslastung. Wir informieren Sie über realistische Zeitrahmen für Ihren konkreten Fall und halten Sie in jeder Phase transparent auf dem Laufenden."},{question:"Muss ich persönlich vor einem türkischen Gericht erscheinen?",answer:"Nein. Per Vollmacht vertreten wir Sie vollständig vor türkischen Gerichten. Sie bleiben in Mannheim — wir erledigen alles in der Türkei."},{question:"Kann das Verfahren auch für türkische Urteile in Deutschland durchgeführt werden?",answer:"Ja. Auch türkische Urteile — zum Beispiel eine in der Türkei ausgesprochene Scheidung — müssen in Deutschland anerkannt werden, bevor sie dort wirksam sind. Wir prüfen die Voraussetzungen und leiten das Anerkennungsverfahren bei der zuständigen deutschen Behörde ein."},{question:"Was kostet das Tanıma ve Tenfiz-Verfahren?",answer:"Die Kosten setzen sich aus Gerichtsgebühren, Übersetzungskosten und dem Anwaltshonorar zusammen. Nach einer ersten Analyse Ihres Falls erstellen wir Ihnen ein transparentes Angebot — ohne versteckte Kosten."}],faqTR:[{question:"Alman boşanmam Türkiye'de neden otomatik olarak tanınmıyor?",answer:"Türkiye AB üyesi değildir ve Almanya ile otomatik karar tanıma konusunda ikili anlaşması bulunmamaktadır. Almanya'da ne kadar süre önce boşanılmış olursa olsun, her yabancı karar bağımsız bir yargısal işlemle (Tanıma) Türkiye'de tanınmak zorundadır."},{question:"Tanıma davası açmazsam ne olur?",answer:"Tanıma yapılmadan Türk makamları, mahkemeler ve nüfus müdürlükleri sizi hâlâ evli olarak kabul eder. Türkiye'de yeniden evlenmek isterseniz evli olarak kayıtlısınızdır. Miras durumlarında eski eşinizin hak talepleri devam edebilir. Ortak Türkiye gayrimenkullerinin devrinde eski eşin katılımı talep edilir."},{question:"Tanıma davası için hangi belgeler gerekiyor?",answer:"Genellikle apostilli kesinleşmiş boşanma kararı ve onaylı Türkçe çevirisi gerekmektedir. Davaya göre ek belgeler istenebilir — somut durumunuzu inceliyor ve eksiksiz belge listesi hazırlıyoruz."},{question:"Tanıma ve Tenfiz davası ne kadar sürer?",answer:"Yetkili Türk mahkemesine ve iş yüküne göre genellikle 3–9 ay sürmektedir. Somut davanız için gerçekçi süre tahmini sunuyor ve her aşamada sizi şeffaf biçimde bilgilendiriyoruz."},{question:"Türk mahkemesinde bizzat bulunmam gerekiyor mu?",answer:"Hayır. Vekaletname ile Türk mahkemelerinde sizi tam anlamıyla temsil ediyoruz. Mannheim'da kalırsınız — Türkiye'deki her şeyi biz hallediyoruz."},{question:"Türk kararları da Almanya'da tanıtılabilir mi?",answer:"Evet. Türkiye'de verilen kararlar — örneğin Türkiye'de gerçekleştirilen boşanma — Almanya'da geçerli sayılmadan önce tanınması gerekmektedir. Koşulları inceliyor ve yetkili Alman makamı nezdinde tanıma işlemini başlatıyoruz."},{question:"Tanıma ve Tenfiz davasının maliyeti nedir?",answer:"Mahkeme harçları, çeviri giderleri ve avukatlık ücretinden oluşmaktadır. Davanızın ilk değerlendirmesinin ardından şeffaf bir teklif sunuyoruz — gizli ücret olmaksızın."}]},{id:"mavi-kart",slugDE:"mavi-kart",slugTR:"mavi-kart",slugEN:"blue-card",icon:Ib,title:"Mavi Kart (Blaue Karte)",titleTR:"Mavi Kart",seoTitleDE:"Mavi Kart Mannheim | Rechte ehemaliger Türken | Doğru Kanzlei",seoDescriptionDE:"Mavi Kart beantragen oder verlängern von Mannheim aus. Avukat Hasan Doğru berät ehemalige türkische Staatsbürger im Rhein-Neckar-Raum zu allen Mavi Kart-Rechten und -Pflichten.",seoTitleTR:"Mavi Kart Mannheim | Eski Türk Vatandaşlarının Hakları | Avukat Hasan Doğru",seoDescriptionTR:"Mannheim'dan Mavi Kart başvurusu veya yenileme. Avukat Hasan Doğru, Rhein-Neckar bölgesindeki eski Türk vatandaşlarına Mavi Kart hakları konusunda danışmanlık verir.",description:"Eski Türk vatandaşları için Mavi Kart haklarında uzman hukuki danışmanlık — Türkiye'deki ikamet ve yatırım olanaklarınızı hukuki güvenceyle koruyun.",descriptionDE:"Fachanwaltliche Beratung zu Mavi Kart-Rechten für ehemalige türkische Staatsbürger sowie zu Aufenthalts- und Investitionsmöglichkeiten in der Türkei — rechtssichere und dauerhaft.",detail:"Yerleşim Özgürlüğü · Taşınmaz Edinimi · Miras Hakları · Yatırım ve İş · Eğitim ve Sağlık · Oy Kullanma · Emeklilik",detailDE:"Aufenthaltsfreiheit · Immobilienerwerb · Erbrecht · Investition · Bildung & Gesundheit · Wahlrecht · Rente",expertiseTitleEN:"Your Expert for Blue Card (Mavi Kart) Rights",titleEN:"Blue Card (Mavi Kart)",seoTitleEN:"Blue Card Mannheim | Rights of Former Turks | Doğru Kanzlei",seoDescriptionEN:"Apply for or renew your Blue Card from Mannheim. Attorney Hasan Doğru advises former Turkish citizens on all Blue Card rights and obligations.",descriptionEN:"Expert legal advice on Blue Card rights for former Turkish citizens, residency, and investment opportunities in Turkey — legally secure and lasting.",detailEN:"Freedom of Residency · Property Acquisition · Inheritance Rights · Investment & Business · Education & Health · Voting Rights · Pension",content:`Mavi Kart — Eski Türk vatandaşlarının hak ve yükümlülükleri
Mavi Kart nedir ve kimler başvurabilir?

Mavi Kart, Alman vatandaşlığı gibi başka bir vatandaşlık edinmek için Türk vatandaşlığından çıkmak zorunda kalan eski Türk vatandaşlarına Türk devleti tarafından verilen resmi bir belgedir. Bu belge, Türk vatandaşlığını kaybettikten sonra da Türkiye'deki pek çok haktan yararlanmaya devam etmenizi sağlar.

Pek çok Almanya Türkü için Mavi Kart, Türkiye ile hukuki bağı kalıcı olarak koruyan vazgeçilmez bir belgedir. Ancak çoğu kişi kartın aktif olarak başvurulması, yenilenmesi ve belirli koşullarda iptal edilebileceğini bilmiyor — ya da haklarının basit bir oturma izninin çok ötesine geçtiğinin farkında değil.

Mavi Kart hangi hakları sağlar?
Mavi Kart sahipleri Türkiye'de Türk vatandaşlarıyla neredeyse aynı haklardan yararlanır. Bunlar özellikle şunlardır:
• İkamet ve Yerleşim Özgürlüğü — Oturma izni olmaksızın Türkiye'de sınırsız ikamet ve yerleşme hakkı
• Taşınmaz Edinimi — Türkiye'de arazi ve taşınmaz satın alma ve sahip olma hakkı
• Miras Hakları — Türk vatandaşlarıyla eşit şekilde Türk hukukuna göre tam miras hakkı
• Yatırım ve İş İmkânları — Ek izin gerekmeksizin Türkiye'de şirket kurma ve ticari faaliyet yürütme
• Eğitim ve Sağlık — Türk eğitim ve sağlık kurumlarından yerli fiyatlarla yararlanma
• Oy Kullanma Hakkı — Belirli koşullar altında Türk seçimlerine katılım hakkı
• Emeklilik Hakları — Türk emeklilik haklarını talep etme imkânı

Sizin için neler yapıyoruz:
• Mavi Kart Başvurusu — Almanya'daki eski Türk vatandaşları için ilk başvurunun baştan sona takibi
• Mavi Kart Yenileme — Mavi Kartınızın süresi dolmadan zamanında yenilenmesi ve güncellenmesi
• Türk Vatandaşlığını Yeniden Kazanma — Türk vatandaşlığına yeniden kabul für danışmanlık ve temsil
• Türkiye-Almanya Çifte Vatandaşlık — Bireysel durumunuzun ve çifte vatandaşlık olanaklarının hukuki değerlendirmesi
• Çocuklar için Mavi Kart — Eski Türk vatandaşlarının reşit olmayan çocukları için Mavi Kart başvurusu ve tescili
• Hukuki Statü Tespiti — Almanya ve Türkiye arasındaki bireysel hukuki durumunuzun netleştirilmesi
• Mavi Kart ile Taşınmaz Alımı — Mavi Kart sahibi olarak Türkiye'de taşınmaz alım veya satımında hukuki destek
• Mavi Kart ile Miras Hakları — Eski vatandaş sıfatıyla Türkiye'deki miras haklarının kullanılması
• Türkiye'de Şirket Kuruluşu — Mavi Kart ile Türkiye'de şirket kuruluşu ve yönetimi için hukuki danışmanlık
• Kayıp veya Süresi Dolmuş Mavi Kart — Belgelerinizin yeniden düzenlenmesi ve geri kazanılması

Önemli Uyarı:
Mavi Kart otomatik olarak verilmez — aktif olarak başvurulması gerekir. Pek çok eski Türk vatandaşı hak sahibi olduğunu bilmiyor ya da başvuru süresini kaçırmış oluyor. Durumunuzu değerlendiriyor ve gerekli tüm adımları başlatıyoruz.

Hukuk büromuz, Türk ve Türk-Alman hukukunda derin uzmanlığıyla yanınızda — her iki ülkeyle hukuki bağınızı güvenle korumak için.`,contentDE:`Mavi Kart — Rechte und Pflichten für ehemalige türkische Staatsbürger
Was ist die Mavi Kart und wer hat Anspruch darauf?

Die Mavi Kart (Blaue Karte) ist ein offizielles Dokument des türkischen Staates für ehemalige türkische Staatsbürger, die ihre Staatsangehörigkeit aufgegeben haben, um eine andere Staatsbürgerschaft — etwa die deutsche — zu erwerben. Sie ermöglicht es, auch nach dem Verlust der türkischen Staatsangehörigkeit weiterhin von zahlreichen Rechten in der Türkei zu profitieren.

Für viele Deutsch-Türken ist die Mavi Kart ein unverzichtbares Dokument, das die rechtliche Verbindung zur Türkei dauerhaft sichert. Doch viele wissen nicht, dass die Karte aktiv beantragt, verlängert und unter bestimmten Umständen auch entzogen werden kann — oder dass ihre Rechte weit über einen einfachen Aufenthaltstitel hinausgehen.

Welche Rechte bietet die Mavi Kart?
Inhaber der Mavi Kart genießen in der Türkei nahezu dieselben Rechte wie türkische Staatsbürger. Dazu gehören insbesondere:
• Aufenthalts- & Niederlassungsfreiheit — Unbeschränkter Aufenthalt und Wohnsitznahme in der Türkei ohne Aufenthaltstitel
• Immobilienerwerb — Kauf und Besitz von Grundstücken und Immobilien in der Türkei
• Erbrechtliche Ansprüche — Volles Erbrecht nach türkischem Recht, gleichgestellt mit türkischen Staatsbürgern
• Investitions- & Geschäftsmöglichkeiten — Unternehmensgründung und wirtschaftliche Betätigung in der Türkei ohne zusätzliche Genehmigungen
• Zugang zu Bildung & Gesundheit — Nutzung türkischer Bildungs- und Gesundheitseinrichtungen zu inländischen Konditionen
• Wahlrecht — Unter bestimmten Voraussetzungen Teilnahme an türkischen Wahlen
• Rentenansprüche — Möglichkeit, türkische Rentenansprüche geltend zu machen

Was wir für Sie tun:
• Mavi Kart beantragen — Vollständige Begleitung des Erstantrags für ehemalige türkische Staatsbürger in Deutschland
• Mavi Kart verlängern — Fristgerechte Verlängerung und Aktualisierung Ihrer Mavi Kart
• Türkische Staatsbürgerschaft zurückerlangen — Beratung und Vertretung bei der Wiedereinbürgerung in die türkische Staatsbürgerschaft
• Doppelstaatsbürgerschaft Türkei-Deutschland — Rechtliche Prüfung Ihrer individuellen Situation und Möglichkeiten zur Doppelstaatsbürgerschaft
• Mavi Kart für Kinder — Beantragung und Registrierung der Mavi Kart für minderjährige Kinder ehemaliger türkischer Staatsbürger
• Rechtsstatus klären — Klärung Ihres individuellen Rechtsstatus zwischen Deutschland und der Türkei
• Immobilienerwerb mit Mavi Kart — Rechtliche Begleitung beim Kauf oder Verkauf von Immobilien in der Türkei als Mavi Kart-Inhaber
• Erbrecht mit Mavi Kart — Durchsetzung erbrechtlicher Ansprüche in der Türkei als ehemaliger Staatsbürger
• Unternehmensgründung in der Türkei — Rechtliche Beratung zur Gründung und Führung eines Unternehmens in der Türkei mit Mavi Kart
• Mavi Kart verloren oder abgelaufen — Neuausstellung und Wiederherstellung Ihrer Dokumente

Wichtiger Hinweis:
Die Mavi Kart wird nicht automatisch ausgestellt — sie muss aktiv beantragt werden. Viele ehemalige türkische Staatsbürger wissen nicht, dass sie Anspruch haben, oder haben die Antragsfrist versäumt. Wir prüfen Ihre Situation und leiten alle notwendigen Schritte ein.

Unsere Kanzlei steht Ihnen mit fundierter Expertise im türkischen und deutsch-türkischen Recht zur Seite — für eine rechtlich sichere Verbindung zu beiden Ländern.`},{id:"icra-ve-iflas",slugDE:"icra-ve-iflas",slugTR:"icra-ve-iflas",slugEN:"debt-collection-enforcement",icon:Tm,title:"Zwangsvollstreckung & Forderungsbeitreibung in der Türkei",titleTR:"Türkiye'de İcra ve İflas",seoTitleDE:"Zwangsvollstreckung Türkei | Forderungen Mannheim | Doğru Kanzlei",seoDescriptionDE:"Forderungen in der Türkei durchsetzen — von Mannheim aus. Avukat Hasan Doğru leitet İcra-Verfahren, vollstreckt Urteile und treibt Schulden in der Türkei ein — ohne Reise.",seoTitleTR:"Türkiye'de İcra ve İflas Mannheim | Alacak Takibi Türkiye | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'deki alacakları Mannheim'dan tahsil edin. Avukat Hasan Doğru, İcra takibini başlatır, kararları icra eder ve Türkiye'deki borçları tahsil eder — seyahat etmeden.",description:"Türkiye'deki alacaklarınızın ve mahkeme kararlarınızın etkin şekilde icrası — Almanya'dan tam temsil, bizzat bulunmanıza gerek yok.",descriptionDE:"Effektive Durchsetzung Ihrer Forderungen und Urteile in der Türkei — vollständig aus Deutschland, ohne persönliche Anwesenheit vor Ort.",detail:"Alacak Tahsili · Alman Kararları İcrası · Haciz · İflas Takibi · İcra Takibi",detailDE:"Forderungsbeitreibung · Vollstreckung ausländischer Urteile · Pfändung · Insolvenzverfahren · Inkasso",titleEN:"Debt Collection & Enforcement",seoTitleEN:"Enforcement Turkey | Debt Recovery Mannheim | Doğru Kanzlei",seoDescriptionEN:"Enforce claims in Turkey — from Mannheim. Attorney Hasan Doğru initiates İcra proceedings, enforces judgments, and recovers debts in Turkey — without travel.",descriptionEN:"Effective enforcement of your claims and court judgments in Turkey — fully from Germany, without personal presence on site.",detailEN:"Debt Recovery · Enforcement of Foreign Judgments · Attachment · Insolvency Proceedings · Collection",content:`İcra ve İflas — Türk hukukuna göre icra takibi
Kararı kazandınız ama para gelmiyor mu? Türkiye'deki alacaklarınızı biz tahsil ediyoruz.

Kazanılan bir dava yalnızca ilk adımdır. Karşı taraf gönüllü olarak ödeme yapmaz veya kararı uygulamazsa asıl zorluk başlar: İcra Takibi. Türkiye'de bu süreç, İcra Müdürlüğü üzerinden yürütülen sıkı usul kurallarına tabidir ve uzmanlık gerektirir.

İster Türkiye'de bir Alman mahkeme kararını icra etmek isteyin, ister Türkiye'deki bir kişi veya şirkete karşı alacaklarınız olsun, isterseniz de bir icra takibiyle karşı karşıya kalın — sizi kapsamlı bir şekilde temsil ediyor ve haklarınızı kararlılıkla savunuyoruz.

Sizin için neler yapıyoruz:
• Almanya'dan İcra Takibi Başlatma — Türkiye'de bizzat bulunmanıza gerek kalmadan icra sürecinin tam yönetimi
• Alacak Tahsili — Türkiye'deki gerçek ve tüzel kişilere karşı vadesi geçmiş alacakların kararlı takibi
• Alman Kararlarının Türkiye'de İcrası — Alman mahkeme kararlarının tanınması ve tenfizi
• Türk Kararlarının İcrası — Kesinleşmiş Türk mahkeme kararlarının İcra Müdürlüğü aracılığıyla uygulanması
• Türkiye'de Banka Hesabı Haczi — Türk bankalarındaki hesaplara haciz konulması yoluyla malvarlığının güvence altına alınması
• Türkiye'de Gayrimenkul Haczi — İpotek tesisi ve Türk gayrimenkullerinin haczi
• İcra İşlemlerine İtiraz — Haksız icra girişimlerine karşı savunma
• İflas Hukuku (İflas) — Türk iflas süreçlerinde alacaklıların temsili
• Alacakların Güvenceye Alınması — Dava öncesinde alacağınızı güvence altına almak için ihtiyati haciz başvurusu
• Nafaka Kararlarının İcrası — İcra Müdürlüğü aracılığıyla nafaka alacaklarının tahsili
• Hakem Kararlarının İcrası — Uluslararası hakem kararlarının Türkiye'de tanınması ve tenfizi
• Mahkeme Dışı Uzlaşma — Dava açılmadan alacak tahsili için borçlularla müzakere

İcra süreci nasıl işler?
Adım 1 — Başlatma: Yetkili İcra Müdürlüğü'ne başvuruyoruz. Borçluya resmi bir ödeme emri gönderilir ve ödeme veya itiraz için 7 gün süresi vardır.
Adım 2 — İtiraz veya Ödeme: Borçlu ödeme yapmaz ve itiraz etmezse, haciz hemen başlar. İtiraz durumunda itirazın iptali davası açıyoruz.
Adım 3 — Haciz: Borçlunun Türkiye'deki banka hesapları, gayrimenkulleri, araçları veya diğer malvarlığına haciz talep ediyoruz.
Adım 4 — Paraya Çevirme: Haczedilen mallar, alacağınız tamamen ödenene kadar açık artırmayla satılır veya doğrudan devredilir.

Önemli Uyarı:
Türk icra hukukunda kesin süreler geçerlidir. Alacakların zaman aşımına uğramaması veya güvence haklarının kaybedilmemesi için fazla beklemeyin. Mümkün olan en kısa sürede bizimle iletişime geçin — ne kadar erken harekete geçersek, başarı şansınız o kadar yüksek olur.

Sonuç:
Çıkarlarınızı kararlılıkla savunuyor ve Türkiye'deki alacaklarınızı takip ediyoruz — güvenilir, şeffaf ve Almanya'dan tam hizmetle.`,contentDE:`Zwangsvollstreckung — Forderungsbeitreibung nach türkischem Recht
Sie haben ein Urteil erwirkt, aber das Geld bleibt aus? Wir treiben Ihre Forderungen in der Türkei ein.

Ein gewonnenes Urteil ist nur der erste Schritt. Wenn die Gegenseite nicht freiwillig zahlt oder das Urteil nicht umsetzt, beginnt die eigentliche Herausforderung: die Zwangsvollstreckung (İcra Takibi). In der Türkei unterliegt dieser Prozess strengen Verfahrensvorschriften über das Vollstreckungsamt (İcra Müdürlüğü) und erfordert spezialisierte Expertise.

Ob Sie ein deutsches Urteil in der Türkei vollstrecken lassen wollen, Forderungen gegen eine Person oder ein Unternehmen in der Türkei haben oder selbst mit einer Vollstreckung konfrontiert sind — wir vertreten Sie umfassend und setzen Ihre Rechte konsequent durch.

Was wir für Sie tun:
• Einleitung der Zwangsvollstreckung aus Deutschland — Vollständige Abwicklung des türkischen Vollstreckungsverfahrens ohne Ihre persönliche Anwesenheit
• Forderungsbeitreibung — Konsequente Verfolgung überfälliger Forderungen gegen natürliche und juristische Personen in der Türkei
• Vollstreckung deutscher Urteile in der Türkei — Anerkennung und Vollstreckung deutscher Gerichtsurteile
• Vollstreckung türkischer Urteile — Durchsetzung rechtskräftiger türkischer Urteile über das Vollstreckungsamt
• Kontopfändung in der Türkei — Sicherung von Vermögenswerten durch Kontopfändungen bei türkischen Banken
• Immobilienpfändung in der Türkei — Eintragung von Zwangshypotheken und Pfändung türkischer Immobilien
• Einspruch gegen Vollstreckungsmaßnahmen — Verteidigung gegen unberechtigte Vollstreckungsversuche
• Insolvenzverfahren (İflas) — Vertretung von Gläubigern in türkischen Insolvenzverfahren
• Sicherung von Forderungen — Beantragung von Arrest (ihtiyati haciz) zur Sicherung Ihrer Forderung vor Prozessbeginn
• Vollstreckung von Unterhaltsurteilen — Beitreibung von Unterhaltsforderungen über das Vollstreckungsamt
• Vollstreckung von Schiedssprüchen — Anerkennung und Vollstreckung internationaler Schiedssprüche in der Türkei
• Außergerichtliche Einigung — Verhandlung mit Schuldnern zur Forderungsbeitreibung ohne Gerichtsverfahren

Wie läuft die Zwangsvollstreckung ab?
Schritt 1 — Einleitung:
Wir stellen den Vollstreckungsantrag beim zuständigen Vollstreckungsamt. Der Schuldner erhält einen offiziellen Zahlungsbefehl and hat 7 Tage Zeit zur Zahlung oder zum Einspruch.
Schritt 2 — Einspruch oder Zahlung:
Zahlt der Schuldner nicht und legt keinen Einspruch ein, beginnt die Vollstreckung sofort. Bei Einspruch erheben wir Klage auf Aufhebung des Einspruchs.
Schritt 3 — Pfändung:
Wir beantragen die Pfändung von Bankkonten, Immobilien, Fahrzeugen oder sonstigem Vermögen des Schuldners in der Türkei.
Schritt 4 — Verwertung:
Gepfändete Vermögenswerte werden versteigert oder direkt übertragen — bis Ihre Forderung vollständig beglichen ist.

Wichtiger Hinweis:
Im türkischen Vollstreckungsrecht gelten strikte Fristen. Zögern Sie nicht zu lange, da Forderungen verjähren oder Sicherungsrechte verloren gehen können. Kontaktieren Sie uns so früh wie möglich — je schneller wir handeln, desto höher sind Ihre Erfolgsaussichten.

Fazit:
Wir vertreten Ihre Interessen konsequent und verfolgen Ihre Forderungen in der Türkei — zuverlässig, transparent und mit vollem Service aus Deutschland.`},{id:"erbrecht",slugDE:"erbrecht",slugTR:"miras-hukuku",slugEN:"inheritance-law",icon:Qy,title:"Erbrecht",titleTR:"Miras Hukuku",seoTitleDE:"Türkisches Erbrecht Mannheim | Veraset İlamı | Doğru Kanzlei",seoDescriptionDE:"Erbschaft in der Türkei von Mannheim aus regeln — ohne Reise. Avukat Hasan Doğru berät türkischstämmige Familien zu Veraset İlamı, Tapu-Übertragung und türkischem Erbrecht.",seoTitleTR:"Türk Miras Avukatı Almanya | Miras Hukuku Mannheim | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'deki mirası Almanya'dan halledin — seyahat etmeden. Avukat Hasan Doğru, Mannheim'daki Türk ailelere Veraset İlamı, tapu devri ve miras hukuku konularında danışmanlık verir.",description:"Miras Hukuku — Mannheim'da Türk Miras Hukuku. Bir yakınınız vefat ettiğinde ve Türkiye'de mülk, banka hesabı veya arazi bıraktığında — Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler karmaşık bir görevle karşı karşıya kalır.",descriptionDE:"Wenn ein Angehöriger stirbt und Vermögen in der Türkei hinterlässt — Immobilien, Bankkonten, Grundstücke — stehen türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum vor einer komplexen Aufgabe: Zwei Rechtssysteme, zwei Länder, oft wenig Zeit.",detail:"Veraset İlamı · Tapu Devri · Saklı Pay · Mirasın Reddi · İzale-i Şüyu · Veraset Vergisi",detailDE:"Erbschein · Grundbuchübertragung · Pflichtteil · Erbausschlagung · Teilungsklage · Erbschaftsteuer",expertiseTitleDE:"Warum Doğru Kanzlei für türkisches Erbrecht in Mannheim?",expertiseTitleTR:"Mannheim'da Türk Miras Hukuku İçin Neden Doğru Kanzlei?",titleEN:"Inheritance Law",seoTitleEN:"Turkish Inheritance Law Mannheim | Veraset İlamı | Doğru Kanzlei",seoDescriptionEN:"Handle inheritance in Turkey from Mannheim — without travel. Attorney Hasan Doğru advises Turkish families on Veraset İlamı, Tapu transfer, and Turkish inheritance law.",descriptionEN:"When a relative passes away and leaves assets in Turkey — property, bank accounts, land — we guide you through the two legal systems with expertise.",detailEN:"Inheritance Certificate · Title Deed Transfer · Reserved Portion · Disclaimer · Partition Action · Inheritance Tax",expertiseTitleEN:"Why Choose Doğru Kanzlei for Turkish Inheritance Law?",content:`Miras Hukuku — Mannheim'da Türk Miras Hukuku

Türk Miras Hukuku & Miras Mannheim

Bir yakınınız vefat ettiğinde ve Türkiye'de mülk, banka hesabı veya arazi bıraktığında — Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler karmaşık bir görevle karşı karşıya kalır: İki hukuk sistemi, iki ülke, çoğunlukla az zaman. Türk miras hukuku, Alman hukukundan temelden farklıdır ve uzman bilgi gerektirir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Veraset İlamı'ndan tapu devrine kadar tüm Türk miras sürecinde yanınızdayız — Türkiye'ye seyahat etmeden.

Sizin için neler yapıyoruz:

• Veraset İlamı — Türk Mirasçılık Belgesi
Veraset İlamı, Türkiye'deki her türlü varlığa — banka hesapları, gayrimenkuller, araziler — erişimin ön koşuludur. Bu belge olmadan hiçbir işlem yapılamaz. Türk noterlerinde veya Sulh Hukuk Mahkemesi'nde Veraset İlamı başvurusunu yapıyor, Almanya'da kullanım için apostil ve onaylı çeviri işlemlerini de üstleniyoruz.

• Mirasçılara Tapu Devri (Tapu Devri)
Mülk sahibinin vefatının ardından Türkiye'deki her gayrimenkulün tapusu (Tapu Sicili) mirasçılar adına tescil edilmelidir. Belge hazırlığından tapu müdürlüğünde tescile kadar tüm tapu devri sürecini yönetiyoruz — Türkiye'ye seyahat etmenize gerek kalmadan.

• Türk Hukukuna Göre Saklı Pay (Mahfuz Hisse / Tenkis Davası)
Türk miras hukuku, belirli mirasçıları saklı pay haklarıyla korur. Saklı pay sahipleri devre dışı bırakıldıysa veya saklı payı ihlal eden sağlararası bağışlar yapıldıysa tenkis davası açılabilir. Bu davalarda Türk mahkemelerinde sizi temsil ediyoruz.

• Türk Hukukuna Göre Mirası Reddetme (Mirası Reddetmek)
Her miras bir kazanç değildir — özellikle borç söz konusu olduğunda. Türk hukukuna göre mirası reddetmenin süreleri ve koşulları hakkında danışmanlık veriyor, yetkili Türk sulh mahkemesine ret beyanını iletiyoruz.

• Ortaklığın Giderilmesi Davası (İzale-i Şüyu)
Birden fazla mirasçı Türkiye'de bir mülk veya araziyi birlikte miras aldığında ve paylaşım konusunda uzlaşılamazsa, izale-i şüyu davası açılabilir. Bu davalarda sizi temsil ediyor ve mirasçılar arasındaki ortaklığın adil and hukuka uygun biçimde sona erdirilmesini sağlıyoruz.

• Türk Veraset ve İntikal Vergisi
Türkiye bağlantılı miraslar için Türk veraset ve intikal vergisi ödenmesi gerekir. Yurt dışında yaşayan mirasçılar için özel süreler geçerlidir — genellikle ölüm tarihinden itibaren 6 ay. Vergisel yükümlülükleriniz konusunda danışmanlık veriyor ve tüm sürelere uyulmasını sağlıyoruz.

• Türk Hukukuna Göre Vasiyetname (Vasiyetname)
Türk hukukuna göre geçerli bir vasiyetname, ileride yaşanabilecek anlaşmazlıklara karşı en iyi güvencedir. Türk vasiyetnamesi düzenlenmesi, saklı pay sınırları (Mahfuz Hisse) ve Almanlarda yaygın "Berliner Testament"in Türkiye'de tanınıp tanınmayacağı konularında danışmanlık veriyoruz.

• Miras Sözleşmeleri ve Sağlararası Bağışlar
Türk hukukuna göre miras paylaşımının önceden planlanması — bağışlar veya miras sözleşmeleri yoluyla — konusunda danışmanlık veriyor, hukuki güvenlik ve vergisel sonuçlar açısından değerlendirme yapıyoruz.`,contentDE:`Miras Hukuku — Türkisches Erbrecht in Mannheim

Türkisches Erbrecht & Erbschaft Mannheim

Wenn ein Angehöriger stirbt und Vermögen in der Türkei hinterlässt — Immobilien, Bankkonten, Grundstücke — stehen türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum vor einer komplexen Aufgabe: Zwei Rechtssysteme, zwei Länder, oft wenig Zeit. Das türkische Erbrecht unterscheidet sich grundlegend vom deutschen und erfordert spezialisierte Expertise.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir begleiten Sie durch das gesamte türkische Erbverfahren — von der Veraset İlamı bis zur Grundbuchübertragung — vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

• Veraset İlamı — Türkisches Erbschaftszeugnis
Das türkische Erbschaftszeugnis (Veraset İlamı) ist die Grundvoraussetzung für den Zugriff auf jedes Vermögen in der Türkei — Bankkonten, Immobilien, Grundstücke. Ohne dieses Dokument ist nichts möglich. Wir beantragen die Veraset İlamı bei türkischen Notaren oder dem Nachlassgericht (Sulh Hukuk Mahkemesi) und kümmern uns um Apostille und beglaubigte Übersetzungen für die Verwendung in Deutschland.

• Grundbuchübertragung auf Erben (Tapu Devri)
Nach dem Tod des Eigentümers muss jede Immobilie in der Türkei im Grundbuch (Tapu Sicili) auf die Erben umgeschrieben werden. Wir übernehmen den gesamten Tapu-Devri-Prozess — von der Vorbereitung der Unterlagen bis zur Eintragung beim türkischen Grundbuchamt — ohne dass Sie in die Türkei reisen müssen.

• Pflichtteil nach türkischem Recht (Mahfuz Hisse / Tenkis Davası)
Das türkische Erbrecht schützt bestimmte Erben durch Pflichtteilsrechte. Wurden Pflichtteilsberechtigte übergangen oder wurden Schenkungen zu Lebzeiten vorgenommen, die den Pflichtteil verletzen, kann eine Pflichtteilsherabsetzungsklage (Tenkis Davası) eingereicht werden. Wir vertreten Sie in diesen Verfahren vor türkischen Gerichten.

• Erbausschlagung nach türkischem Recht (Mirası Reddetmek)
Nicht jedes Erbe ist ein Gewinn — besonders wenn Schulden vorhanden sind. Wir beraten Sie zu den Fristen und Voraussetzungen der Erbausschlagung nach türkischem Recht und übernehmen die Erklärung gegenüber dem zuständigen türkischen Nachlassgericht.

• Teilungsklage bei gemeinschaftlichem Erbe (İzale-i Şüyu)
Wenn mehrere Erben gemeinsam eine Immobilie oder ein Grundstück in der Türkei erben und keine Einigung über die Aufteilung erzielt werden kann, ist eine Teilungsklage (İzale-i Şüyu) möglich. Wir vertreten Sie in diesen Verfahren und sorgen für eine faire und rechtssichere Auflösung der Erbengemeinschaft.

• Türkische Erbschaftsteuer (Veraset ve İntikal Vergisi)
Bei Erbschaften mit Bezug zur Türkei fällt türkische Erbschaftsteuer an. Für im Ausland lebende Erben gelten besondere Fristen — in der Regel 6 Monate ab dem Todesfall. Wir beraten Sie zu Ihren steuerlichen Pflichten und stellen sicher, dass alle Fristen eingehalten werden.

• Testament nach türkischem Recht (Vasiyetname)
Ein wirksames Testament nach türkischem Recht ist der beste Schutz vor späteren Streitigkeiten. Wir beraten Sie zur Errichtung eines türkischen Testaments, zu Pflichtteilsgrenzen (Mahfuz Hisse) und zur Frage, ob ein deutsches "Berliner Testament" in der Türkei anerkannt wird.

• Erbverträge & Schenkungen zu Lebzeiten
Vorweggenommene Erbfolge durch Schenkungen oder Erbverträge nach türkischem Recht — wir beraten Sie zur rechtssicheren Gestaltung und zu den steuerlichen Konsequenzen.`,faqDE:[{question:"Was ist eine Veraset İlamı und wozu brauche ich sie?",answer:"Die Veraset İlamı ist das türkische Erbschaftszeugnis. Es weist aus, wer nach türkischem Recht Erbe ist und zu welchem Anteil. Ohne dieses Dokument können Sie in der Türkei weder auf Bankkonten noch auf Immobilien zugreifen. Wir beantragen es für Sie — ohne dass Sie dafür in die Türkei reisen müssen."},{question:"Wie lange habe ich Zeit, eine türkische Erbschaft anzunehmen oder auszuschlagen?",answer:"Die Frist zur Erbausschlagung beträgt nach türkischem Recht 3 Monate ab Kenntnis des Erbfalls. Diese Frist ist streng — wer sie versäumt, gilt automatisch als Erbe, auch wenn Schulden vorhanden sind. Kontaktieren Sie uns so früh wie möglich."},{question:"Muss ich für das Erbverfahren in die Türkei reisen?",answer:"Nein. Mit einer notariellen Vollmacht können wir das gesamte türkische Erbverfahren von Deutschland aus für Sie führen — Veraset İlamı, Grundbuchübertragung, Bankkonten, Erbschaftsteuer."},{question:"Gilt mein deutsches Testament auch in der Türkei?",answer:"Nicht automatisch. Ein deutsches Testament muss in der Türkei anerkannt werden und darf das türkische Pflichtteilsrecht (Mahfuz Hisse) nicht verletzen. Wir prüfen die Wirksamkeit Ihres Testaments nach türkischem Recht und beraten Sie zu eventuell notwendigen Anpassungen."},{question:"Was kostet das türkische Erbverfahren?",answer:"Die Kosten hängen vom Umfang des Nachlasses und der Komplexität des Verfahrens ab. Wir erstellen Ihnen nach einer ersten Analyse ein transparentes Angebot — ohne versteckte Kosten."}],faqTR:[{question:"Veraset İlamı nedir ve neden gereklidir?",answer:"Veraset İlamı, Türk hukukuna göre kimin mirasçı olduğunu ve hangi oranda pay aldığını belgeleyen Türk mirasçılık belgesidir. Bu belge olmadan Türkiye'deki banka hesaplarına veya gayrimenkullere erişmek mümkün değildir. Türkiye'ye seyahat etmenize gerek kalmadan bu belgeyi sizin adınıza temin ediyoruz."},{question:"Türk mirasını kabul etmek veya reddetmek için ne kadar sürem var?",answer:"Türk hukukuna göre mirayı reddetme süresi, miras hakkının öğrenilmesinden itibaren 3 aydır. Bu süre kesindir — süreyi kaçıranlar, borç olsa bile otomatik olarak mirasçı sayılır. Mümkün olan en erken aşamada bizimle iletişime geçin."},{question:"Miras işlemleri için Türkiye'ye gitmem gerekiyor mu?",answer:"Hayır. Noter tasdikli bir vekaletname ile Veraset İlamı, tapu devri, banka hesapları ve veraset vergisi dahil tüm Türk miras sürecini Almanya'dan sizin adınıza yürütebiliyoruz."},{question:"Alman vasiyetnamen Türkiye'de geçerli mi?",answer:"Otomatik olarak geçerli değildir. Alman vasiyetnamesi Türkiye'de tanınmalı ve Türk saklı pay hukukunu (Mahfuz Hisse) ihlal etmemelidir. Vasiyetnamenizin Türk hukukuna göre geçerliliğini inceliyor ve gerektiğinde düzenleme yapılması konusunda sizi bilgilendiriyoruz."},{question:"Türk miras işlemlerinin maliyeti nedir?",answer:"Maliyet, miras kapsamına ve sürecin karmaşıklığına bağlıdır. İlk analiz sonrasında şeffaf bir teklif sunuyoruz — gizli ücret olmaksızın."}]},{seoTitleDE:"Sorgerecht Türkei Mannheim | Türkischer Anwalt | Doğru Kanzlei",seoDescriptionDE:"Sorgerecht zwischen Deutschland und der Türkei — spezialisierte Vertretung aus Mannheim. Avukat Hasan Doğru führt türkische Sorgerechtsklagen und internationale Kindesentziehungsverfahren.",seoTitleTR:"Türk Velayet Hukuku Mannheim | Almanya Türkiye Velayet Davası | Avukat Hasan Doğru",seoDescriptionTR:"Almanya ile Türkiye arasında velayet — Mannheim'dan uzman temsil. Avukat Hasan Doğru, Türk velayet davalarını ve uluslararası çocuk kaçırma davalarını yürütür.",id:"sorgerecht",slugDE:"sorgerecht",slugTR:"velayet",slugEN:"child-custody",icon:mb,title:"Sorgerecht",titleTR:"Velayet",description:"Almanya ve Türkiye arasındaki velayet davaları, çocuk yetiştirme hakları ve uluslararası çocuk kaçırma (La Haye) konularında uzman hukuki destek.",descriptionDE:"Fachanwaltliche Unterstützung bei Sorgerechtsverfahren zwischen Deutschland und der Türkei sowie bei internationaler Kindesentführung (HKÜ).",detail:"Velayet Davaları · Tanıma ve Tenfiz · La Haye",detailDE:"Sorgerechtsklagen · Anerkennung · HKÜ",titleEN:"Child Custody",seoTitleEN:"Custody Turkey Mannheim | Turkish Lawyer | Doğru Kanzlei",seoDescriptionEN:"Custody between Germany and Turkey — specialized representation from Mannheim. Attorney Hasan Doğru handles Turkish custody lawsuits and international child abduction cases.",descriptionEN:"Expert legal support for custody cases between Germany and Turkey, parenting rights, and international child abduction (Hague Convention).",detailEN:"Custody Lawsuits · Recognition & Enforcement · Hague Convention",content:`Velayet — Almanya'daki Türkler için Türk Hukukunda Velayet
Türk-Alman Aile Hukukunda Velayet

Velayet, aile hukukunun temel unsurlarından biri olup ebeveynlerin küçük çocuklarına karşı hak ve yükümlülüklerini düzenler. Almanya'da yaşayan ya da daha önce Almanya'da ikamet etmiş Türk vatandaşları için, özellikle hem Türk hem de Alman hukukunun devreye girdiği durumlarda, karmaşık hukuki sorular gündeme gelebilmektedir.

Türk Hukukunda Velayet Ne Anlama Gelir?
Türk hukukuna göre velayet; çocuğun bakımı, yetiştirilmesi ve temsil edilmesi sorumluluğunu kapsar. Boşanma halinde velayet genellikle ebeveynlerden birine bırakılır ve bu kararın merkezinde her zaman çocuğun üstün yararı yer alır.

Ebeveynlerden birinin Almanya'da, diğerinin Türkiye'de ikamet etmesi; bir Türk velayet kararının Almanya'da tanınmak istenmesi ya da Almanya'da verilen bir kararın Türkiye'de uygulanması gereken durumlarda özel hukuki güçlükler ortaya çıkmaktadır.

Size sunduğumuz hizmetler:
• Türk ve Alman hukukuna göre velayet konusunda hukuki danışmanlık
• Türk mahkemelerinde velayet davalarında temsil
• Yabancı velayet kararlarının tanınması ve tenfizi
• Uluslararası çocuk kaçırma davalarında danışmanlık (La Haye Sözleşmesi)
• Türk ve Alman makamları arasında koordinasyon

Hukuk büromuz, Türk-Alman aile hukukunda uzmanlaşmış olup her adımda profesyonel ve empatik bir yaklaşımla yanınızdadır.`,contentDE:`Velayet — Sorgerecht im türkischen Recht for Deutschlandtürken
Sorgerecht im türkisch-deutschen Familienrecht

Das Sorgerecht („Velayet") ist ein zentraler Bestandteil des Familienrechts und regelt die Rechte und Pflichten der Eltern gegenüber ihren minderjährigen Kindern. Für Deutsch-Türken, die in Deutschland leben oder gelebt haben, ergeben sich häufig komplexe Rechtsfragen – insbesondere dann, wenn sowohl deutsches als auch türkisches Recht zur Anwendung kommt.

Was bedeutet Sorgerecht im türkischen Recht?
Nach türkischem Recht umfasst das Sorgerecht die Verantwortung für Pflege, Erziehung und gesetzliche Vertretung des Kindes. Im Falle einer Scheidung wird das Sorgerecht in der Regel einem Elternteil übertragen – maßgeblich ist dabei stets das Wohl des Kindes.

Besondere Herausforderungen entstehen, wenn ein Elternteil in Deutschland und der andere in der Türkei lebt, wenn ein türkisches Sorgerechtsurteil in Deutschland anerkannt werden soll oder wenn ein deutsches Urteil in der Türkei vollstreckt werden muss.

Was wir für Sie tun:
• Rechtliche Beratung zum Sorgerecht nach türkischem und deutschem Recht
• Vertretung in Sorgerechtsklagen vor türkischen Gerichten
• Anerkennung und Vollstreckung ausländischer Sorgerechtsurteile
• Beratung bei internationalen Kindesentziehungsfällen (HKÜ)
• Koordination zwischen deutschen und türkischen Behörden

Unsere Kanzlei ist auf deutsch-türkisches Familienrecht spezialisiert und begleitet Sie kompetent und einfühlsam durch jeden Schritt des Verfahrens.`},{id:"immobilienrecht",slugDE:"immobilienrecht",slugTR:"gayrimenkul-hukuku",slugEN:"real-estate-law",icon:kb,title:"Immobilienrecht",titleTR:"Gayrimenkul Hukuku",seoTitleDE:"Immobilienrecht Türkei Mannheim | Anwalt Immobilien | Doğru Kanzlei",seoDescriptionDE:"Immobilien in der Türkei kaufen, verkaufen oder erben — rechtlich sicher von Mannheim aus. Avukat Hasan Doğru berät Deutsch-Türken zu Tapu, Grundbuch und türkischem Eigentumsrecht.",seoTitleTR:"Gayrimenkul Avukatı Almanya | Türkiye Gayrimenkul Hukuku Mannheim | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'deki mülkü Almanya'dan alın, satın veya miras alın — hukuki güvenceyle. Avukat Hasan Doğru, Mannheim'daki Türk ailelere tapu, gayrimenkul ve mülkiyet hukuku konularında danışmanlık verir.",description:"Türkiye'de mülkü bulunan, miras yoluyla taşınmaz edinen ya da gayrimenkul satın almayı planlayan vatandaşlar için tapu, kira ve mülkiyet süreçlerinde uzman destek.",descriptionDE:"Fachkundige rechtliche Begleitung für Deutsch-Türken bei Kauf, Verkauf, Grundbucheintragungen und Eigentumsstreitigkeiten von Immobilien in der Türkei.",detail:"Tapu İptali · Kira Sözleşmeleri · Şufa",detailDE:"Grundbuchberichtigung · Mietverträge · Vorkaufsrecht",titleEN:"Real Estate Law",seoTitleEN:"Real Estate Law Turkey Mannheim | Property Lawyer | Doğru Kanzlei",seoDescriptionEN:"Buy, sell, or inherit property in Turkey — legally secure from Mannheim. Attorney Hasan Doğru advises on Tapu, land registry, and Turkish property law.",descriptionEN:"Expert legal support for property owners in Turkey, those inheriting real estate, or planning a purchase — from land registry to rental agreements.",detailEN:"Title Deed Cancellation · Rental Agreements · Right of First Refusal",content:`Gayrimenkul Hukuku — Mannheim'da Türk Gayrimenkul Hukuku

Türk Gayrimenkul Hukuku & Türkiye'deki Mülkler

Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki pek çok Türk aile Türkiye'de gayrimenkul sahibidir — ya da orada almak, satmak veya miras yoluyla devralmak istemektedir. Türk gayrimenkul hukuku karmaşıktır ve tapu işlemlerinde ya da satış sözleşmelerinde yapılan küçük hatalar bile ciddi mali kayıplara ve yıllarca süren davalara yol açabilir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Türkiye bağlantılı tüm gayrimenkul hukuku konularında yanınızdayız — güvenli, güvenilir ve Türkiye'ye seyahat etmeden.

Sizin için neler yapıyoruz:

- Tapu Düzeltme ve Tescil (Tapu Tescili)
Türkiye'deki hatalı tapu kayıtları düşünüldüğünden daha yaygındır — yanlış isimler, eksik alanlar, hatalı mülkiyet payları. Tapu Sicili'ndeki hatalı kayıtlara itiraz ediyor ve Türk tapu müdürlüğünde doğru yeniden tescil işlemlerini sağlıyoruz. Tüm işlemleri vekaletname ile yürütüyoruz — Türkiye'de bizzat bulunmanıza gerek yok.

- Türkiye'de Gayrimenkul Alım ve Satımı
Türkiye'de gayrimenkul alan veya satan kişiler hukuki desteğe ihtiyaç duyar — tapu kaydının incelenmesinden satış sözleşmesine, güvenli mülkiyet devrine kadar. Tüm belgeleri inceliyor, gizli yükleri tespit ediyor ve sizi pahalı hatalardan koruyoruz.

- Kat Mülkiyeti ve Ortak Alanlar
Türk kat mülkiyeti topluluklarında ortak alanlar, yönetim veya bakım konusundaki anlaşmazlıklar sıkça yaşanmaktadır. Türk kat mülkiyeti hukuku kapsamında hak ve yükümlülüklerinizi açıklıyor ve anlaşmazlıklarda sizi temsil ediyoruz.

- Önalım Hakkı ve Ortaklığın Giderilmesi (Şufa Hakkı ve İzale-i Şüyu)
Türkiye'deki bir gayrimenkul üzerinde önalım hakkınız var mı? Yoksa bir miras ortaklığını paylaştırmak mı istiyorsunuz? Şufa hakkını Türk mahkemelerinde takip ediyor ve ortak mülkiyette izale-i şüyu davalarında sizi temsil ediyoruz.

- Müteahhit Sözleşmeleri ve Kat Karşılığı Projeler
Türk müteahhitlerle yapılan sözleşmeler çoğu zaman şeffaf değildir ve tek taraflı düzenlenmiştir. İmzalamadan önce sözleşmenizi inceliyor, düzeltmeler için müzakere yapıyor ve ayıp ya da gecikme durumlarında müteahhide karşı sizi temsil ediyoruz.

- Kamulaştırma ve Bedel Tespiti (Kamulaştırma)
Türk devleti veya bir belediye mülkünüzü kamulaştırmak istiyorsa haklarınız vardır — adil tazminat ve bedel tespitinin hukuki denetimi. Kamulaştırma süreçlerinde sizi temsil ediyor ve hakkaniyete uygun bir tazminat için mücadele ediyoruz.

- Türkiye'de Kira Sözleşmeleri ve Tahliye Davaları
Türkiye'deki gayrimenkulünüzü kiraladınız ve kira alamıyor musunuz? Ya da kiracı taşınmayı reddediyor mu? Türk kira hukuku kapsamında tahliye, fesih ve kira alacaklarınızı takip ediyoruz.

Mannheim'da Türk Gayrimenkul Hukuku İçin Neden Doğru Kanzlei?

Türkiye'deki gayrimenkul işlemleri, Almanya'daki Türkler için çoğunlukla büyük meblağlar içerir — ve hukuki destek yoksa büyük riskler barındırır. Sahte tapu belgeleri, gizli ipotekler, geçersiz satış sözleşmeleri — bunlar Türkiye pratiğinde nadir değildir.

Avukat Hasan Doğru, Türk gayrimenkul hukukunu içeriden bilmektedir. Ankara Barosu üyesi olarak Türk tapu müdürlükleri, mahkemeler ve noterlerle doğrudan çalışıyoruz — Mannheim'dan, seyahat etmenize gerek kalmadan.

Bizi farklı kılan:
- Yalnızca Türk hukuku — uzmanlıkta taviz yok
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Tüm işlemler Türkiye'ye seyahat etmeden mümkün
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türk makamlarıyla doğrudan iş birliği`,contentDE:`Gayrimenkul Hukuku — Türkisches Immobilienrecht in Mannheim

Türkisches Immobilienrecht & Immobilien in der Türkei

Viele türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum besitzen Immobilien in der Türkei — oder möchten dort kaufen, verkaufen oder erben. Das türkische Immobilienrecht (Gayrimenkul Hukuku) ist komplex, und selbst kleine Fehler bei Tapu-Verfahren oder Kaufverträgen können zu erheblichen finanziellen Verlusten und jahrelangen Gerichtsverfahren führen.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir begleiten Sie bei allen immobilienrechtlichen Fragen mit Türkeibezug — sicher, zuverlässig und vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

- Grundbuchberichtigung & Eintragung (Tapu Tescili)
Fehlerhafte Grundbucheinträge in der Türkei sind häufiger als man denkt — falsche Namen, fehlende Flächen, unrichtige Eigentumsanteile. Wir fechten fehlerhafte Einträge im Tapu Sicili an und sorgen für korrekte Neueintragungen beim türkischen Grundbuchamt. Alle Verfahren führen wir per Vollmacht durch — ohne Ihre persönliche Anwesenheit in der Türkei.

- Immobilienkauf & -verkauf in der Türkei
Wer in der Türkei eine Immobilie kauft oder verkauft, braucht rechtliche Begleitung — von der Prüfung des Tapu-Auszugs über den Kaufvertrag bis zur sicheren Eigentumsübertragung. Wir prüfen alle Unterlagen, decken versteckte Belastungen auf und schützen Sie vor teuren Fehlern.

- Wohnungseigentum & Gemeinschaftsflächen (Kat Mülkiyeti)
Streitigkeiten in türkischen Wohnungseigentümergemeinschaften über Gemeinschaftsflächen, Verwaltung oder Instandhaltung sind häufig. Wir klären Ihre Rechte und Pflichten nach türkischem Wohnungseigentumsrecht und vertreten Sie bei Streitigkeiten.

- Vorkaufsrecht & Teilungsklage (Şufa Hakkı & İzale-i Şüyu)
Haben Sie ein Vorkaufsrecht auf eine türkische Immobilie? Oder möchten Sie eine Erbengemeinschaft aufteilen? Wir setzen das Vorkaufsrecht (Şufa Hakkı) vor türkischen Gerichten durch und vertreten Sie in Teilungsklagen (İzale-i Şüyu) bei gemeinschaftlichem Eigentum.

- Bauträgerverträge & Schlüsselfertigprojekte (Kat Karşılığı)
Kaufverträge mit türkischen Bauträgern sind oft intransparent und einseitig formuliert. Wir prüfen Ihren Vertrag vor der Unterzeichnung, verhandeln Nachbesserungen und vertreten Sie bei Mängeln oder Verzögerungen gegenüber dem Bauträger.

- Enteignung & Wertermittlung (Kamulaştırma)
Wenn der türkische Staat oder eine Gemeinde Ihre Immobilie enteignen möchte, haben Sie Rechte — auf faire Entschädigung und auf rechtliche Überprüfung der Wertfestsetzung. Wir vertreten Sie in Enteignungsverfahren und kämpfen für eine angemessene Entschädigung.

- Mietverträge & Räumungsklagen in der Türkei
Sie haben eine Immobilie in der Türkei vermietet und erhalten keine Miete? Oder ein Mieter weigert sich auszuziehen? Wir setzen Ihre Ansprüche nach türkischem Mietrecht durch — Kündigung, Räumung, Mietrückstände.

Warum Doğru Kanzlei für türkisches Immobilienrecht in Mannheim?

Immobiliengeschäfte in der Türkei sind für Deutsch-Türken oft mit großen Summen verbunden — und mit großen Risiken, wenn die rechtliche Begleitung fehlt. Gefälschte Tapu-Dokumente, versteckte Grundpfandrechte, unwirksame Kaufverträge — all das ist in der türkischen Praxis keine Seltenheit.

Avukat Hasan Doğru kennt das türkische Immobilienrecht von innen. Als Mitglied der Ankara Barosu arbeiten wir direkt mit türkischen Grundbuchämtern, Gerichten und Notaren zusammen — von Mannheim aus, ohne dass Sie reisen müssen.

Was uns auszeichnet:
- Ausschließlich türkisches Recht — keine Kompromisse bei der Spezialisierung
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Alle Verfahren ohne Reise in die Türkei möglich
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkte Zusammenarbeit mit türkischen Behörden`,faqDE:[{question:"Kann ich eine Immobilie in der Türkei kaufen, ohne dorthin zu reisen?",answer:"Ja. Mit einer notariellen Vollmacht können wir den gesamten Kauf- oder Verkaufsprozess in der Türkei für Sie abwickeln — Vertragsprüfung, Tapu-Übertragung, Behördengänge. Sie müssen nicht persönlich in der Türkei anwesend sein."},{question:"Was ist der Tapu und warum ist er so wichtig?",answer:"Der Tapu ist das türkische Grundbuchdokument, das Eigentum an einer Immobilie belegt. Ohne einen korrekten Tapu-Eintrag auf Ihren Namen haben Sie in der Türkei keinen rechtlich gesicherten Eigentumsanspruch. Wir prüfen Tapu-Dokumente vor jedem Kauf auf versteckte Belastungen und Fehler."},{question:"Was passiert, wenn mehrere Erben eine Immobilie in der Türkei gemeinsam besitzen?",answer:"Wenn keine Einigung über Nutzung oder Verkauf erzielt werden kann, kann eine Teilungsklage (İzale-i Şüyu) eingereicht werden. Das Gericht ordnet dann entweder die Versteigerung oder die Realteilung an. Wir begleiten Sie durch dieses Verfahren."},{question:"Kann ein türkischer Bauträger meinen Kaufvertrag einfach ändern?",answer:"Nein — aber es kommt leider vor. Wir prüfen Ihren Bauträgervertrag vor der Unterzeichnung auf problematische Klauseln und stellen sicher, dass Ihre Rechte bei Verzögerungen oder Mängeln vertraglich gesichert sind."},{question:"Muss ich für eine Erstberatung nach Mannheim kommen?",answer:"Nein. Wir bieten Erstberatungen auch per Telefon oder Video an und betreuen viele Mandanten aus dem gesamten Bundesgebiet vollständig auf Distanz."}],faqTR:[{question:"Türkiye'ye gitmeden Türkiye'de mülk alabilir miyim?",answer:"Evet. Noter tasdikli bir vekaletname ile Türkiye'deki tüm alım veya satım sürecini sizin adınıza yürütebiliyoruz — sözleşme incelemesi, tapu devri, resmi başvurular dahil. Türkiye'de bizzat bulunmanıza gerek yoktur."},{question:"Tapu nedir ve neden bu kadar önemlidir?",answer:"Tapu, bir mülkün mülkiyetini belgeleyen Türk tapu senedidir. Adınıza doğru bir tapu kaydı olmadan Türkiye'de hukuken güvence altına alınmış bir mülkiyet hakkınız bulunmaz. Her alımdan önce tapu belgelerini gizli yükler ve hatalar açısından inceliyoruz."},{question:"Birden fazla mirasçı Türkiye'deki bir mülke ortak sahipse ne olur?",answer:"Kullanım veya satış konusunda anlaşma sağlanamazsa izale-i şüyu davası açılabilir. Mahkeme daha sonra ihaleye çıkarılmasına veya aynen taksime karar verir. Bu süreçte size eşlik ediyoruz."},{question:"Bir Türk müteahhit satış sözleşmemi tek taraflı değiştirebilir mi?",answer:"Hayır — ama maalesef bu tür durumlar yaşanmaktadır. Müteahhit sözleşmenizi imzalamadan önce sorunlu maddelere karşı inceliyor ve gecikme ya da ayıp durumlarında haklarınızın sözleşmede güvence altına alınmasını sağlıyoruz."},{question:"İlk danışma için Mannheim'a gelmem gerekiyor mu?",answer:"Hayır. İlk danışmayı telefon veya video görüşmesiyle de gerçekleştirebilirsiniz. Almanya'nın dört bir yanından pek çok müvekkilimize tamamen uzaktan hizmet veriyoruz."}]}],Sm="/assets/blog_real_estate-BsdSzrht.png",Fb="/assets/blog_veraset_ilami-Cg0VflCr.png",Em="/assets/blog_tanima_tenfiz-CEN04P7k.png",Hb="/assets/blog_sakli_pay-B_8STbJm.png",jb="/assets/blog_izale_i_suyu-CXt7Eodh.png",Gb="/assets/blog_mavi_kart-oKz4CNqU.png",Lb="/assets/blog_criminal_summons-g4zAzZLs.png",Ub="/assets/blog_criminal_complaint-BtVrdnj0.png",Ru="/assets/blog_divorce-BgSDRDb9.png",Am="/assets/blog_vekaletname-CG91CODL.png",Ob="/assets/blog_property_division-qBlzmg7O.png",Bu="/assets/inheritance_fraud_law-BxjZQ9m1.png",xu="/assets/joint_custody_law-B-FOZxII.png",qb="/assets/debt_collection_law-BB5vtc8j.png",Dm="/assets/criminal_defense_law-BDM0I72W.png",Yb="/assets/blue_card_rights_law-D0nJt0CD.png",Mu="/assets/criminal_defense_turkey-C6zILRFH.png",Zb="/assets/blue_card_professional-DaY4d0Ka.png",ud=[{slug:"almanya-turkiye-miras-hukuku-rehberi",slugDE:"erbschaft-tuerkei-deutschland-ratgeber",slugTR:"almanya-turkiye-miras-hukuku-rehberi",slugEN:"inheritance-turkey-germany-guide",titleDE:"Türkisches Erbe aus Deutschland regeln | Welche Rechte haben Erben?",titleTR:"Almanya'da Yaşarken Türkiye'de Miras mı Kaldı? Haklarınızı Kaybetmemek İçin Ne Yapmalısınız?",excerptDE:"In Deutschland leben und in der Türkei erben? Erfahren Sie alles über Fristen, Erbausschlagung, Pflichtteilsrechte und die EU-Erbrechtsverordnung.",excerptTR:"Almanya'da yaşarken Türkiye'deki miras haklarınızı nasıl koruyacağınızı öğrenin. Veraset ilamı, miras reddi ve tenkis davası hakkında kapsamlı rehber.",contentDE:`In Deutschland lebende türkische Staatsangehörige können sowohl in der Türkei als auch in Deutschland Eigentum besitzen — und türkische Verwandte können Vermögen unterschiedlichster Art hinterlassen. Diese grenzüberschreitenden Verflechtungen führen im Erbfall zu rechtlich äußerst komplexen Situationen.

Die wichtigste Tatsache vorab: Das Erbrecht ist voller Fristen. Eine versäumte Frist kann den Verlust eines Rechts bedeuten — oder im schlimmsten Fall die ungewollte Übernahme von Schulden. Als bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassener Anwalt berät die Doğru Kanzlei sowohl zu türkischen Erbrechtsangelegenheiten als auch zu den aufenthalts- und steuerrechtlichen Folgen in Deutschland.

## Die EU-Erbrechtsverordnung 650/2012

Seit dem 17. August 2015 gilt zwischen den EU-Mitgliedstaaten — mit Ausnahme Dänemarks — die EU-Erbrechtsverordnung Nr. 650/2012. Nach der wichtigsten Bestimmung der Verordnung gilt grundsätzlich das Recht des Staates, in dem der Erblasser seinen letzten gewöhnlichen Aufenthalt hatte. Für türkische Staatsangehörige, die in Deutschland leben, hat dies eine entscheidende Konsequenz: Ihr Nachlass unterliegt im Regelfall deutschem Erbrecht.

Die Verordnung eröffnet jedoch auch die Möglichkeit einer Rechtswahl zugunsten des Heimatrechts. Ein in Deutschland lebender türkischer Staatsangehöriger kann durch ein notariell beurkundetes Testament oder einen Erbvertrag bestimmen, dass auf seinen Nachlass türkisches Erbrecht Anwendung findet.

## Grundprinzipien des türkischen Erbrechts

Das türkische Erbrecht ist in den Artikeln 495–682 des Türkischen Zivilgesetzbuchs (TMK) geregelt und weist gegenüber dem deutschen BGB wesentliche Unterschiede auf.

**Gesetzliche Erben**
Die erste Ordnung bilden die Abkömmlinge des Erblassers, die zu gleichen Teilen erben. Die zweite Ordnung besteht aus den Eltern des Erblassers und deren Abkömmlingen. Der überlebende Ehegatte kann zusammen mit jeder Ordnung erben.

**Pflichtteil (Saklı Pay)**
Für Abkömmlinge beträgt der Pflichtteil die Hälfte des gesetzlichen Erbteils, für jeden Elternteil ein Viertel. Wird dieser Anteil durch Testament oder Verfügungen zu Lebzeiten unterschritten, entsteht das Recht auf Erhebung einer Pflichtteilsergänzungsklage.

**Testamentsformen**
Das notarielle Testament wird in Anwesenheit eines Notars, zweier Zeugen und des Erblassers errichtet. Das eigenhändige Testament muss von Anfang bis Ende handschriftlich verfasst und unterschrieben sein — maschinell geschriebene Texte sind ungültig. Das mündliche Testament ist nur in außerordentlichen Ausnahmesituationen mit unmittelbarer Todesgefahr gültig.

## Anwendung türkischen Rechts nach MÖHUK

Die Türkei regelt ihr internationales Privatrecht im MÖHUK, Gesetz Nr. 5718. Nach Artikel 20 MÖHUK unterliegen Erbsachen dem Heimatrecht des Erblassers zum Zeitpunkt seines Todes. Diese Regelung weicht vom Anknüpfungspunkt des letzten gewöhnlichen Aufenthalts der EU-Erbrechtsverordnung ab und erzeugt einen bedeutsamen Konfliktpunkt. Dies macht die Errichtung eines Testaments, das in beiden Ländern auf seine Wirksamkeit geprüft wurde, besonders wichtig.

## Immobilien in der Türkei aus Deutschland verkaufen

Kann ich meine Immobilie in der Türkei verkaufen, ohne dorthin zu reisen? Die Antwort lautet: Ja — jedoch nur mit einer korrekt ausgestellten Vollmacht (Vekaletname). Eine Vollmacht kann beim türkischen Konsulat in Deutschland oder bei einem deutschen Notar ausgestellt werden. Dabei ist zu beachten: Allgemeine Vollmachten, die von einem deutschen Notar ausgestellt wurden, werden vom türkischen Grundbuchamt häufig nicht anerkannt.

Auf den Verkaufserlös kann in der Türkei Wertzuwachssteuer anfallen — insbesondere wenn seit dem Erwerb der Immobilie noch keine fünf Jahre vergangen sind, kann dies einen erheblichen Betrag ausmachen. Im Rahmen des deutsch-türkischen Doppelbesteuerungsabkommens ist außerdem gesondert zu prüfen, ob in Deutschland eine Steuerpflicht entsteht.

## Erbausschlagung: Wenn das Erbe mehr Schulden als Vermögen enthält

Im türkischen Recht müssen Sie nichts tun, um ein Erbe anzunehmen. Wenn Sie es nicht fristgerecht ausschlagen, gelten Sie als Erbe — einschließlich aller Schulden.

Nach Artikel 605 TMK können Erben das Erbe innerhalb von drei Monaten nach Kenntnis vom Tod des Erblassers und ihrer Erbenstellung ausschlagen. Diese Frist gilt auch für in Deutschland lebende Erben und wird in der Regel nicht verlängert. Die Erbausschlagung erfolgt durch einen formellen Antrag beim türkischen Gericht. Ihr Anwalt kann diesen Schritt über das UYAP-System aus Mannheim in Ihrem Namen durchführen.

## Pflichtteilsergänzungsklage: Was tun, wenn Ihr Pflichtteil verletzt wurde?

Eines der häufigsten Erbstreitigkeiten: Der Erblasser hat in seinen letzten Lebensjahren Immobilien in der Türkei auf bestimmte Erben oder Dritte übertragen — und in Deutschland lebende andere Erben sind dadurch um einen Großteil ihres Erbteils gebracht worden.

Das türkische Erbrecht sieht gegen diesen Missstand einen klaren Schutzmechanismus vor: die Tenkis Davası (Pflichtteilsergänzungsklage). Nach Artikel 560 TMK kann die Aufhebung von Verfügungen, die den Pflichtteil verletzen, gerichtlich beantragt werden. Das Recht auf Erhebung der Klage muss innerhalb von einem Jahr ab Kenntnis der Pflichtteilsverletzung, spätestens jedoch innerhalb von zehn Jahren ab Eröffnung des Testaments ausgeübt werden. Die Doğru Kanzlei kann über das UYAP-System auf türkische Verfahrensakten zugreifen und das Pflichtteilsergänzungsverfahren aus dem Mannheimer Büro heraus führen.

---

**Holen Sie sich jetzt eine kostenlose Ersteinschätzung für Ihren grenzüberschreitenden Erbfall | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,contentTR:`Almanya'da yaşayan Türk vatandaşları, hem Türkiye'de hem de Almanya'da mülke sahip olabilmekte; Türkiye'deki akrabaları ise çeşitli varlıklar bırakabilmektedir. Bu kesişen bağlar, miras söz konusu olduğunda son derece karmaşık hukuki durumların ortaya çıkmasına yol açmaktadır.

En önemli gerçek şudur: Miras hukuku sürelerle doludur. Kaçırılan bir süre, kullanılmayan bir hak anlamına gelebilir — hatta bazen miras yoluyla devralınan beklenmedik borçlar anlamına gelebilir. Bu rehberde hem hukuki çerçeveyi hem de işler ters gittiğinde ne yapmanız gerektiğini ele alacağız.

→ Cezai kovuşturmaların miras üzerindeki etkilerini de araştırıyorsanız: [Türkiye'deki Ceza Davaları rehberimize](/tr/blog/turkiye-ceza-davasi-tutuklama-karari-almanya-savunma) bakınız.

## AB Miras Tüzüğü 650/2012

Avrupa Birliği üyesi devletler arasında (Danimarka hariç) 17 Ağustos 2015 tarihinden bu yana 650/2012 sayılı AB Miras Tüzüğü uygulanmaktadır. Tüzük'ün en önemli hükmüne göre, kural olarak kişinin son alışılagelen ikametgâhının bulunduğu devletin hukuku uygulanmaktadır. Almanya'da yaşayan Türk vatandaşlarının mirası, varsayılan olarak Alman miras hukukuna tabidir. Ancak Tüzük, hukuk seçimi (Rechtswahl) imkânı da tanımaktadır: Almanya'da yaşayan bir Türk vatandaşı noter huzurunda Türk miras hukukunun uygulanmasını seçebilmektedir.

## Türk Miras Hukukunun Temel İlkeleri

Türk miras hukuku 4721 sayılı Türk Medeni Kanunu'nun (TMK) 495-682. maddeleriyle düzenlenmektedir.

**Yasal Mirasçılar**
Birinci zümreyi murisin altsoyu oluşturmaktadır; bunlar eşit paylarda miras alırlar. İkinci zümreyi murisin anne ve babası ile onların altsoyu oluşturmaktadır. Sağ kalan eş her zümreyle birlikte miras alabilmektedir.

**Saklı Pay (Mahfuz Hisse)**
Altsoy için yasal miras payının 1/2'si, anne ve babanın her biri için 1/4'ü saklı pay olarak korunmaktadır. Bu pay vasiyetname veya yaşarken yapılan miras tasarrufları yoluyla ihlal edilmesi halinde tenkis davası açma hakkı doğmaktadır.

**Vasiyetname Türleri**
Resmî vasiyetname noter, iki tanık ve murisin huzurunda düzenlenmektedir. El yazılı vasiyetname başından sonuna kadar murisin el yazısıyla yazılmış ve imzalanmış olmalıdır; bilgisayarla yazılanlar geçersizdir. Sözlü vasiyetname ise yalnızca ölüm tehlikesinin yakın olduğu istisnai durumlarda geçerlidir.

## MÖHUK Kapsamında Türk Hukukunun Uygulanması

Türkiye uluslararası özel hukukunu 5718 sayılı MÖHUK ile düzenlemektedir. MÖHUK'un 20. maddesi uyarınca miras işlemleri miras bırakanın ölüm anındaki millî hukukuna tabi tutulmaktadır. Bu hüküm, AB Miras Tüzüğü'nün benimsediği son alışılagelen ikametgâh ölçütünden farklı bir çözüm üretmekte ve önemli bir çatışma noktası doğurmaktadır. Her iki ülkede de geçerliliği test edilmiş biçimde hazırlanmış bir vasiyetname düzenlenmesi bu nedenle büyük önem taşımaktadır.

## Türkiye'deki Mülkü Almanya'dan Satmak

Almanya'da yaşayan Türk vatandaşlarının en sık sorduğu sorulardan biri şudur: Türkiye'deki mülkümü Türkiye'ye gitmeden satabilir miyim? Yanıt: Evet — ancak doğru şekilde düzenlenmiş bir vekaletname (noter onaylı vekâlet belgesi) şartıyla.

Vekaletname, Almanya'daki bir Türk konsolosluğunda ya da Alman bir noterde düzenlenebilir. Ancak dikkat edilmesi gereken kritik bir nokta vardır: Türkiye'deki tapu işlemleri için kullanılacak vekaletnamenin Türk hukukunun öngördüğü şekil koşullarını eksiksiz karşılaması gerekmektedir. Almanya'da bir Alman noter tarafından düzenlenen genel vekaletnameler çoğu zaman Türk tapu sicili tarafından kabul edilmemektedir.

Satıştan elde edilen gelir üzerinden Türkiye'de değer artış kazancı vergisi doğabilmektedir; özellikle mülkün ediniminden itibaren beş yıl geçmemişse bu vergi önemli bir kalem oluşturabilir. Almanya-Türkiye arasındaki çifte vergilendirmeyi önleme anlaşması çerçevesinde Almanya'da da vergi yükümlülüğü doğup doğmayacağı ayrıca değerlendirilmelidir.

## Miras Reddi: Borçlu Bir Mirası Reddetmek

Türk hukukunda mirası kabul etmek için herhangi bir işlem yapmanıza gerek yoktur. Süresi içinde reddetmezseniz mirası kabul etmiş sayılırsınız — borçlarıyla birlikte.

TMK'nın 605. maddesi uyarınca mirasçılar, miras bırakanın ölümünü ve kendilerinin mirasçı olduğunu öğrendikleri tarihten itibaren üç ay içinde mirası reddedebilirler. Bu süre Almanya'da yaşayan mirasçılar için de geçerlidir ve kural olarak uzatılmaz. Miras bırakanın vefatından haberdar olduğunuz andan itibaren bir avukata danışmanız ve üç aylık süreyi boşa harcamamanız kritik önem taşımaktadır. Miras reddi Türk mahkemesine sunulan resmi bir dilekçeyle gerçekleştirilmektedir; avukatınız bu işlemi UYAP sistemi aracılığıyla Mannheim ofisinden sizin adınıza yürütebilmektedir.

## Tenkis Davası: Saklı Payınız İhlal Edildiyse Ne Yaparsınız?

Türkiye'deki en çok görülen miras uyuşmazlıklarından biri şu senaryodur: Miras bırakan hayatının son dönemlerinde Türkiye'deki mülklerini belirli mirasçılara ya da üçüncü kişilere devretmiş; Almanya'da yaşayan diğer mirasçılar ise miras paylarının büyük bölümünden yoksun kalmıştır.

Türk miras hukuku bu duruma karşı açık bir koruma mekanizması öngörmektedir: tenkis davası. TMK'nın 560. maddesi uyarınca, saklı payı ihlal eden tasarrufların iptali için dava açılabilmektedir. Tenkis davası açma hakkı; mirasçının tasarrufdan ve saklı payının ihlal edildiğinden haberdar olmasından itibaren bir yıl, her halükarda vasiyetnamenin açılmasından itibaren on yıl içinde kullanılmalıdır. Doğru Kanzlei olarak UYAP sistemi aracılığıyla Mannheim ofisimizden tenkis davası sürecini yürütebilmekteyiz.

---

**Sınır ötesi miras davanız için ücretsiz ön değerlendirme alın | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuzda yalnızca Türk hukuku alanında danışmanlık verilmektedir.*`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Bu,dateDE:"20. April 2026",dateTR:"20 Nisan 2026",readTimeDE:"9 Min. Lesezeit",readTimeTR:"9 dk okuma",publishedAt:"2026-04-20",keywordsDE:"Erbschaft Türkei Deutschland, türkisches Erbrecht Deutschland, Immobilien Türkei verkaufen aus Deutschland, Erbausschlagung türkisches Recht, Pflichtteilsklage Türkei",keywordsTR:"Türkiye miras hukuku Almanya, Almanya'dan Türkiye miras takibi, Türkiye tapu devri Almanya, miras reddi Türk hukuku, tenkis davası Almanya",faqDE:[{question:"Was passiert mit der Immobilie eines in Deutschland verstorbenen türkischen Staatsangehörigen in der Türkei?",answer:"Für die Immobilie in der Türkei muss beim türkischen Gericht ein Erbschein beantragt und eine Grundbucheintragung vorgenommen werden. Die EU-Erbrechtsverordnung gilt in der Türkei nicht — es findet türkisches Recht Anwendung."},{question:"Kann ich in Deutschland ein Testament mit Wahl des türkischen Rechts errichten?",answer:"Ja. Im Rahmen von Artikel 22 der EU-Erbrechtsverordnung können Sie unter Berufung auf Ihre türkische Staatsangehörigkeit ein wirksames Testament errichten, das türkisches Erbrecht wählt. Dies muss in Deutschland notariell beurkundet werden."},{question:"Kann ich die türkische Immobilie aus Deutschland verkaufen?",answer:"Ja — jedoch nur mit einer korrekt ausgestellten Vollmacht, die die formellen Anforderungen des türkischen Rechts erfüllt. Die Doğru Kanzlei kann diesen Prozess aus Mannheim in Ihrem Namen abwickeln."},{question:"Wie lange habe ich Zeit, ein Erbe auszuschlagen?",answer:"Nach türkischem Recht drei Monate — ab dem Zeitpunkt, an dem Sie von Ihrem Erbrecht Kenntnis erlangt haben. Nach Ablauf dieser Frist gelten Sie als Erbe — einschließlich aller Schulden."},{question:"Muss ich für eine Pflichtteilsergänzungsklage in die Türkei reisen?",answer:"Nein. Die Doğru Kanzlei kann die Pflichtteilsergänzungsklage über das UYAP-System aus Mannheim führen. Damit keine Fristen versäumt werden, sollten Sie jedoch so früh wie möglich handeln."}],faqTR:[{question:"Almanya'da ölen bir Türk vatandaşının Türkiye'deki taşınmazı ne olur?",answer:"Türkiye'deki taşınmaz için Türk mahkemesinden veraset ilamı alınması ve tapu siciline tescil yapılması gerekmektedir. AB Miras Tüzüğü Türkiye'de geçerli değildir; Türk hukuku uygulanır."},{question:"Türkiye'deki mülkü Almanya'dan satabilir miyim?",answer:"Evet — ancak Türk hukukunun öngördüğü şekil koşullarını karşılayan, doğru düzenlenmiş bir vekaletname şartıyla. Doğru Kanzlei bu süreci Mannheim ofisinden sizin adınıza yürütebilmektedir."},{question:"Mirası reddetmek için ne kadar sürem var?",answer:"Türk hukukuna göre üç ay. Bu süre, mirasçı olduğunuzu öğrendiğiniz tarihten itibaren işlemeye başlar. Süre geçtikten sonra reddetme hakkınız düşer ve borçlar da dahil mirası kabul etmiş sayılırsınız."},{question:"Tenkis davası açmak için Türkiye'ye gitmek zorunda mıyım?",answer:"Hayır. Doğru Kanzlei, UYAP sistemi aracılığıyla tenkis davasını Mannheim ofisinden yürütebilmektedir. Ancak süre aşımına uğramamak için en kısa sürede harekete geçilmesi gerekmektedir."}],ctaTitleDE:"Haben Sie Fragen zum türkischen Erbrecht?",ctaTitleTR:"Türkiye'deki Miras Haklarınız İçin Buradayız",ctaDescriptionDE:"Wir unterstützen Sie bei der Durchsetzung Ihrer Erbansprüche in der Türkei direkt aus Deutschland – rechtssicher und effizient.",ctaDescriptionTR:"Türkiye'deki miras haklarınızı korumak ve mülk devir işlemlerinizi Almanya'dan yönetmek için profesyonel destek sunuyoruz."},{slug:"turk-muhendis-profesyonel-almanya-mavi-kart-rehberi",slugDE:"blaue-karte-eu-beantragen-tuerkische-fachkraefte",slugTR:"turk-muhendis-profesyonel-almanya-mavi-kart-rehberi",slugEN:"apply-eu-blue-card-turkish-professionals",titleDE:"Blaue Karte EU beantragen | Was türkische Fachkräfte wissen müssen",titleTR:"Türk Mühendis ve Profesyoneller Almanya Mavi Kartı Nasıl Alır?",excerptDE:"Die Blaue Karte EU ist der schnellste Weg für türkische Fachkräfte nach Deutschland. Erfahren Sie alles über Voraussetzungen, Gehaltsschwellen und das Verfahren.",excerptTR:"Almanya Mavi Kart (Blaue Karte EU) Türk mühendisler ve profesyoneller için en hızlı çalışma izni yoludur. Maaş eşikleri ve başvuru adımlarını öğrenin.",contentDE:`Deutschland setzt seit Jahren auf gezielte Einwanderungspolitik, um den Fachkräftemangel zu bekämpfen. Eines der attraktivsten Instrumente dabei ist die Blaue Karte EU — sie ermöglicht hochqualifizierten Fachkräften aus Drittstaaten einen beschleunigten Zugang zum deutschen und europäischen Arbeitsmarkt.

Für türkische Ingenieure, Softwareentwickler, Ärzte und andere Berufsgruppen ist die Blaue Karte EU einer der vielversprechendsten Wege, um in Deutschland Fuß zu fassen. Doch der Weg ist nicht immer geradlinig. Diplomanerkennung, Gehaltsschwellen, Ablehnungsbescheide und Jobverlust sind Punkte, an denen viele Antragsteller scheitern oder Rechtsverluste erleiden.

Als bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassener Anwalt berät die Doğru Kanzlei Mandanten sowohl im türkischen Recht als auch in allen aufenthaltsrechtlichen Fragen mit Bezug zu türkischen Staatsangehörigen in Deutschland — einschließlich der gesamten Blaue-Karte-EU-Verfahren.

## Was ist die Blaue Karte EU?

Die Blaue Karte EU basiert auf § 18b AufenthG, mit dem die EU-Richtlinie 2012/98/EU umgesetzt wird. Im Vergleich zu regulären Arbeitsgenehmigungen wird die Blaue Karte EU deutlich schneller bearbeitet und bietet den außergewöhnlich schnellen Weg zur Niederlassungserlaubnis: in der Regel nach 33 Monaten, bei Nachweis von Deutschkenntnissen auf B1-Niveau sogar nach nur 21 Monaten.

## Wer kann die Blaue Karte EU beantragen? Voraussetzungen

**Bildungsvoraussetzung**
Sie benötigen einen anerkannten Hochschulabschluss einer anerkannten Universität oder einen als gleichwertig anerkannten Hochschulabschluss. Für türkische Abschlüsse empfiehlt sich eine Prüfung über die Datenbank anabin.de sowie das KÜDÖS-System.

**Jobangebot**
Sie benötigen einen verbindlichen Arbeitsvertrag oder ein konkretes Stellenangebot eines deutschen Arbeitgebers.

**Mindestgehalt**
Für das Jahr 2024 gilt eine Mindestgehaltsgrenze von 45.300 Euro brutto jährlich für allgemeine Berufe. In Mangelberufen wie Ingenieurwesen, IT, Mathematik, Medizin und Naturwissenschaften liegt die Grenze bei 35.100 Euro brutto jährlich. Die Schwellenwerte werden jährlich angepasst.

**Weitere Voraussetzungen**
Ihr Reisepass muss zum Zeitpunkt der Antragstellung noch mindestens drei Jahre ab dem Antragsdatum gültig sein. Außerdem darf kein Vorstrafenregister vorliegen und eine ausreichende Krankenversicherung muss nachgewiesen werden.

## Erforderliche Unterlagen

Ausgefülltes Antragsformular (Vordruck Aufenthaltstitel)
Gültiger Reisepass (mit beglaubigter Kopie)
Zwei biometrische Passfotos
Hochschulzeugnis (mit beglaubigter deutscher Übersetzung)
Anerkennungsbescheid (falls erforderlich)
Arbeitsvertrag oder Stellenangebot in Deutschland
Krankenversicherungsnachweis
Wohnungsnachweis (Anmeldebescheinigung) oder Wohnungszusage
Führungszeugnis aus der Türkei (Adli Sicil Belgesi; mit beglaubigter deutscher Übersetzung)

## Der Antragsprozess: Schritt für Schritt

**Schritt 1: Einreise mit Visum**
Personen, die aus der Türkei nach Deutschland kommen, müssen ein nationales Visum (Nationales Visum) für Erwerbstätigkeit beim deutschen Konsulat in Istanbul oder Ankara beantragen. Die Wartezeiten für Termine können drei bis sechs Monate betragen.

**Schritt 2: Antrag bei der Ausländerbehörde**
Nach der Einreise ist der Antrag bei der Ausländerbehörde des Wohnortes zu stellen. In Mannheim befindet sich diese Behörde im Rathaus E5.

**Schritt 3: Anerkennungsbescheid (falls erforderlich)**
Bei reglementierten Berufen oder Abschlüssen von Universitäten, die nicht automatisch anerkannt werden, kann ein Anerkennungsbescheid erforderlich sein. Da dieser Prozess Zeit in Anspruch nimmt, empfiehlt es sich, ihn vor der eigentlichen Antragstellung abzuschließen.

**Schritt 4: Entgegennahme der Blauen Karte EU**
Nach Einreichung der vollständigen Unterlagen prüft die Ausländerbehörde den Antrag. Bei Genehmigung wird die Blaue Karte EU ausgestellt. Die Karte ist in der Regel vier Jahre gültig.

## Diplomanerkennung: Der häufigste Stolperstein für türkische Absolventen

Bei nicht reglementierten Berufen können Sie über die Datenbank anabin.de prüfen, ob Ihr Abschluss anerkannt wird. Abschlüsse von Institutionen mit dem Status H+ werden in der Regel direkt anerkannt.

Bei reglementierten Berufen — Medizin, Recht, Pharmazie, Lehramt, Architektur — ist ein formeller Anerkennungsbescheid zwingend erforderlich. Dieser Prozess wird von der Zentralstelle für ausländisches Bildungswesen (ZAB) durchgeführt und kann vier bis sechs Monate dauern.

## Familiennachzug mit der Blauen Karte EU

Im Rahmen von §§ 29 und 30 AufenthG können Ehepartner und minderjährige Kinder unter bestimmten Voraussetzungen nach Deutschland nachziehen. Anders als bei regulären Aufenthaltstiteln entfällt für Inhaber der Blauen Karte EU die Pflicht des Ehepartners, vor der Einreise Deutschkenntnisse nachzuweisen. Der Ehepartner erhält zudem sofort nach der Einreise eine Arbeitserlaubnis.

## Niederlassungserlaubnis: Der schnelle Weg zum dauerhaften Aufenthaltsrecht

Unter allgemeinen Voraussetzungen reichen 33 Monate ununterbrochene Beschäftigung mit vollständigen Sozialversicherungsbeiträgen. Mit einem Deutschzertifikat auf B1-Niveau verkürzt sich diese Frist auf lediglich 21 Monate.

## Mobilität innerhalb der EU mit der Blauen Karte EU

Nach 18 Monaten Beschäftigung als Inhaber der Blauen Karte EU können Sie in anderen EU-Mitgliedstaaten nach Beschäftigungsmöglichkeiten suchen. In dem neuen Land kann erneut eine Blaue Karte EU beantragt werden.

## Was passiert, wenn Ihr Arbeitgeber Ihnen kündigt?

Dies ist eines der größten Sorgenthemen für Inhaber der Blauen Karte EU. Die Blaue Karte EU ist direkt an einen bestimmten Arbeitgeber geknüpft. Wenn Ihr Arbeitsverhältnis endet, wird Ihre Blaue Karte EU nicht automatisch ungültig — aber Sie sind verpflichtet, die Ausländerbehörde unverzüglich zu informieren.

Nach § 18b AufenthG haben Sie nach dem Jobverlust drei Monate Zeit, eine neue Stelle zu finden und die Ausländerbehörde zu benachrichtigen. Finden Sie innerhalb dieser drei Monate keine neue Beschäftigung, kann Ihre Blaue Karte EU widerrufen werden. Sie haben Anspruch auf Arbeitslosengeld (ALG I) — beantragen Sie es sofort bei der Agentur für Arbeit. Die Doğru Kanzlei unterstützt Sie aus Mannheim heraus beim Schutz Ihres Aufenthaltsstatus nach einem Jobverlust.

## Was tun, wenn Ihr Antrag auf die Blaue Karte EU abgelehnt wird?

Die häufigsten Ablehnungsgründe sind: Nichterfüllung der Gehaltsschwellen, fehlender oder unvollständiger Anerkennungsbescheid, unvollständige oder fehlerhafte Unterlagen sowie ein als unzureichend bewerteter Arbeitsvertrag.

Gegen den Ablehnungsbescheid kann Widerspruch eingelegt werden. Die Widerspruchsfrist beträgt in der Regel einen Monat ab Zustellung. Da diese Frist sehr kurz ist, sollten Sie unmittelbar nach Erhalt des Ablehnungsbescheids einen Anwalt konsultieren.

## Selbstständigkeit und Blaue Karte EU: Können Sie als Freelancer arbeiten?

Die Blaue Karte EU ist für abhängige Beschäftigung konzipiert und deckt selbstständige Tätigkeiten grundsätzlich nicht ab. Wenn Sie vollständig als Freelancer arbeiten möchten, müssen Sie in Deutschland einen gesonderten Aufenthaltstitel nach § 21 AufenthG beantragen. Eine selbstständige Tätigkeit ohne Meldung bei der Ausländerbehörde kann Ihren Aufenthaltstitel gefährden.

## Häufige Fehler bei der Beantragung der Blauen Karte EU

**Diplomanerkennung vernachlässigen:** Prüfen Sie unbedingt vor der Antragstellung, ob Ihre türkische Universität in Deutschland anerkannt wird.
**Gehaltsschwelle nicht erfüllen:** Stellen Sie sicher, dass das Bruttogehalt in Ihrem Vertrag die aktuelle Schwelle überschreitet.
**Visumsantrag verzögern:** Beantragen Sie Ihren Termin aufgrund langer Wartezeiten so früh wie möglich.
**Dokumente nicht ins Deutsche übersetzen lassen:** Alle türkischen Dokumente müssen mit beglaubigten deutschen Übersetzungen eingereicht werden.
**Jobverlust zu spät melden:** Handeln Sie nach einer Kündigung sofort — die Dreimonatsfrist lässt keinen Spielraum für Verzögerungen.
**Ohne Genehmigung freelancen:** Selbstständige Tätigkeiten ohne Zustimmung der Ausländerbehörde können Ihren Aufenthaltsstatus gefährden.

---

**Holen Sie sich jetzt eine kostenlose Ersteinschätzung für Ihre Blaue Karte EU | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,contentTR:`Almanya, nitelikli işgücü açığını kapatmak amacıyla yıllardır çeşitli çekici göç politikaları uygulamaktadır. Bu politikaların en cazip araçlarından biri olan Avrupa Birliği Mavi Kartı (Blaue Karte EU), yüksek nitelikli üçüncü ülke vatandaşlarına Almanya'da ve diğer AB üyesi devletlerde hızlandırılmış biçimde oturma ve çalışma izni edinme imkânı sunmaktadır.

Türk mühendisler, yazılım geliştiriciler, doktorlar ve diğer meslek grupları için Blaue Karte EU, Almanya'da kariyer inşa etmenin en avantajlı yollarından birini temsil etmektedir. Ancak süreç göründüğü kadar kolay değildir. Diploma denkliği, maaş eşikleri, başvuru redleri ve iş kaybı gibi kritik noktalarda pek çok kişi hak kaybı yaşamaktadır. Bu rehberde yalnızca başvuru adımlarını değil, işlerin ters gittiği anlarda ne yapmanız gerektiğini de ele alacağız.

→ Not: Bu yazı, Alman makamlarınca verilen Blaue Karte EU'yu kapsamaktadır. Türk vatandaşlığını kaybedenlere Türkiye tarafından verilen Türk Mavi Kartı için ayrı bir rehberimiz mevcuttur.

## Mavi Kart Nedir?

Avrupa Birliği Mavi Kartı (Blaue Karte EU), 2012/98/EU sayılı AB Direktifi'ni uygulayan Almanya'nın Aufenthaltsgesetz (AufenthG) §18b hükmüne dayanmaktadır. Standart çalışma izinlerine kıyasla çok daha hızlı işleme tabi tutulmakta ve olağandışı derecede hızlı bir kalıcı oturma iznine geçiş imkânı sunmaktadır: kural olarak 33 ay, Almanca B1 dil belgesine sahip olunması halinde ise yalnızca 21 ay.

## Kimler Başvurabilir?

**Eğitim Koşulu**
Tanınmış bir üniversiteden alınmış lisans diplomasına sahip olmak ya da denkliği tescil edilmiş bir yükseköğretim derecesine sahip olmak zorunludur. Türkiye'deki dereceler için anabin.de veri tabanı ve KÜDÖS sistemi üzerinden araştırma yapılması önerilmektedir.

**İş Teklifi Koşulu**
Almanya'da bir işverenle imzalanmış bağlayıcı iş sözleşmesi ya da somut ve kesin bir iş teklifine sahip olunması gerekmektedir.

**Asgari Maaş Koşulu**
2024 yılı itibarıyla genel meslekler için yıllık brüt 45.300 Euro eşiği uygulanmaktadır. Mühendislik, bilişim, matematik, tıp ve doğa bilimleri gibi alanlarda bu eşik 35.100 Euro olarak belirlenmiştir. Eşikler her yıl revize edilmektedir; başvuru öncesinde güncel rakamlar mutlaka kontrol edilmelidir.

## Gerekli Belgeler

Düzgünce doldurulmuş başvuru formu (Vordruck Aufenthaltstitel)
Geçerli pasaport (onaylı fotokopi ile birlikte)
İki adet biyometrik fotoğraf
Üniversite diploması (noter onaylı Almanca tercümesi ile birlikte)
Diploma denklik belgesi (gerekli hallerde)
Almanya'da iş sözleşmesi ya da iş teklifi mektubu
Sağlık sigortası belgesi
İkametgâh belgesi (Anmeldebescheinigung) veya konut taahhüt mektubu
Türkiye'den alınan sabıka kaydı (Adli Sicil Belgesi; noter onaylı Almanca tercümeli)

## Başvuru Süreci: Adım Adım

**Adım 1: Almanya'ya Vize ile Giriş**
Türkiye'den Almanya'ya gelen kişilerin Alman Konsolosluğu'ndan ulusal vize (Nationales Visum) almaları gerekmektedir. Konsolosluklardaki randevu bekleme süreleri 3-6 aya kadar çıkabilmektedir; bu nedenle erken başvuru şarttır.

**Adım 2: Yabancılar Dairesine Başvuru**
Almanya'ya ulaştıktan sonra ikamet edilen şehrin Ausländerbehörde'sine başvurulması gerekmektedir. Mannheim'da bu birim Rathaus E5'te bulunmaktadır.

**Adım 3: Denklik Belgesi (Gerektiğinde)**
Bazı düzenlenmiş mesleklerde ya da Almanya tarafından otomatik olarak tanınmayan üniversitelerden mezun olunması durumunda denklik belgesi alınması zorunlu olabilmektedir.

**Adım 4: Mavi Kartın Teslim Alınması**
Eksiksiz başvuru dosyasının sunulmasının ardından Yabancılar Dairesi değerlendirme yapacaktır. Onay halinde Blaue Karte EU etiketli oturma izni kartı teslim edilmektedir. Kart genellikle dört yıl süreyle geçerlidir.

## Diploma Denkliği: Türk Mezunların En Sık Takıldığı Nokta

Düzenlenmemiş mesleklerde — yazılım geliştirme, mühendislik, ekonomi gibi alanlarda — diplomanın Almanya tarafından tanınıp tanınmadığını anabin.de veri tabanı üzerinden kontrol edebilirsiniz. H+ statüsündeki kurumlardan alınan dereceler genellikle doğrudan tanınmaktadır.

Düzenlenmiş mesleklerde ise — tıp, hukuk, eczacılık, öğretmenlik, mimarlık — resmi denklik belgesi zorunludur. Bu süreç Zentralstelle für ausländisches Bildungswesen (ZAB) tarafından yürütülmektedir ve 4 ila 6 ay sürebilmektedir.

ODTÜ, Boğaziçi, İTÜ ve Hacettepe gibi köklü üniversitelerden alınan mühendislik ve tıp diplomaları büyük çoğunlukla sorunsuz tanınmaktadır. Doğru Kanzlei olarak diploma denkliği sürecinde hangi kuruma başvurmanız gerektiği konusunda Mannheim ofisimizden danışmanlık sunmaktayız.

## Mavi Kart ile Aile Birleşimi

AufenthG §29 ve §30 hükümleri çerçevesinde eş ve reşit olmayan çocuklar belirli koşullar altında Almanya'ya getirilebilmektedir. Standart oturma izinlerinden farklı olarak, eşin Almanya'ya gelmeden önce Almanca öğrenme zorunluluğu Mavi Kart sahipleri için uygulanmamaktadır. Eş, Almanya'ya gelir gelmez çalışma iznine de sahip olmaktadır.

## Kalıcı Oturma İznine (Niederlassungserlaubnis) Geçiş

Genel koşullar altında 33 ay aralıksız çalışma ve sosyal sigorta primlerini eksiksiz ödeme, Almanca B1 belgesiyle ise 21 ay yeterlidir.

## Mavi Kart ile AB Çapında Hareketlilik

18 ay boyunca Mavi Kart sahibi olarak çalışıldıktan sonra diğer AB üyesi devletlerde istihdam fırsatı aranabilmektedir. Yeni ülkede de Mavi Kart başvurusunda bulunulabilmekte; bu süreç standart göç prosedürlerine kıyasla çok daha hızlı ilerlemektedir.

## İşvereniniz Sizi İşten Çıkarırsa Ne Olur?

Mavi Kart doğrudan belirli bir işverene bağlıdır. İş ilişkiniz sona erdiğinde Mavi Kartınız otomatik olarak geçersiz hale gelmez; ancak durumu derhal yabancılar dairesine bildirme yükümlülüğünüz doğmaktadır.

AufenthG §18b uyarınca iş kaybı halinde size tanınan süre üç aydır. Bu üç ay içinde yeni bir iş bulmanız ve yabancılar dairesini bilgilendirmeniz gerekmektedir. İşsizlik sigortasına (Arbeitslosengeld) başvurma hakkınız bulunmaktadır. Eğer Niederlassungserlaubnis için gereken asgari süreyi tamamlamışsanız, kalıcı oturma iznine geçiş için başvurabilirsiniz. Doğru Kanzlei olarak iş kaybı sonrası oturma izninin korunması konusunda kapsamlı danışmanlık sunmaktayız.

## Mavi Kart Başvurusu Reddedilirse Ne Olur?

En sık görülen red gerekçeleri: maaş eşiğinin karşılanmaması, diploma denkliğinin tamamlanmamış olması, eksik veya hatalı belgeler ve iş sözleşmesinin yetersiz bulunması.

Red kararına karşı Widerspruch (itiraz) yoluna başvurulabilmektedir. İtiraz süresi genellikle tebliğden itibaren bir aydır. Bu süre son derece kısa olduğundan red kararını aldığınız andan itibaren vakit kaybetmeden bir avukata danışmanız kritik önem taşımaktadır. Doğru Kanzlei olarak Mavi Kart red kararlarına itiraz süreçlerinde müvekkillerimize Mannheim ofisimizden hukuki destek sunmaktayız.

## Serbest Meslek ve Mavi Kart: Freelancer Olabilir misiniz?

Mavi Kart ücretli çalışma için tasarlanmıştır ve doğası gereği serbest meslek faaliyetini kapsamaz. Mavi Kart sahipleri, sahip oldukları Mavi Kart kapsamında freelance ya da serbest meslek faaliyeti yürütemezler. Tam zamanlı freelance çalışmak istiyorsanız § 21 AufenthG kapsamında ayrı bir oturma izni türüne başvurmanız gerekmektedir.

Serbest meslek ile ücretli çalışma arasındaki hukuki sınır Almanya'da son derece önemlidir. Yabancılar dairesine bildirim yapmadan serbest faaliyet yürütmek oturma izninizi tehlikeye atabilmektedir.

## Mavi Kart Başvurularında Sık Yapılan Hatalar

**Diploma denkliğini ihmal etmek:** Başvurudan önce üniversitenin tanınıp tanınmadığı kesinlikle teyit edilmelidir.
**Maaş eşiğini karşılamamak:** Brüt yıllık maaşın güncel eşiğin üzerinde olduğundan emin olunmalıdır.
**Vize başvurusunu geciktirmek:** Randevu bekleme süreleri nedeniyle en kısa sürede başvurulmalıdır.
**Belgeleri Almanca'ya çevirtmemek:** Tüm Türkçe belgeler yeminli tercüman onaylı Almanca tercümeleriyle sunulmalıdır.
**İş kaybını geç bildirmek:** İşten çıkarıldığınızda üç aylık süreyi boşa harcamamak için derhal harekete geçin.
**Serbest çalışmaya izinsiz başlamak:** Yabancılar dairesinin onayı olmadan freelance faaliyet yürütmek oturma izninizi tehlikeye atabilir.

---

**Türkiye'deki ceza davanız için ücretsiz ön değerlendirme alın | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuzda yalnızca Türk hukuku alanında danışmanlık verilmektedir.*`,category:"Mavi Kart",categoryDE:"Blaue Karte",image:Zb,dateDE:"20. April 2026",dateTR:"20 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-20",keywordsDE:"Blaue Karte EU beantragen, Blaue Karte EU Voraussetzungen, türkische Fachkräfte Deutschland, Blaue Karte EU abgelehnt, Diplomanerkennung Deutschland Türkei",keywordsTR:"Almanya mavi kart, Blaue Karte EU, Türk mühendis Almanya, çalışma izni Almanya, kalıcı oturma izni, diploma denklik Almanya",faqDE:[{question:"Wie lange dauert die Bearbeitung eines Antrags auf die Blaue Karte EU?",answer:"Die Ausländerbehörde entscheidet in der Regel innerhalb von vier bis acht Wochen. Wenn zuvor noch ein Visum beantragt und der Anerkennungsprozess abgeschlossen werden muss, kann sich der Gesamtprozess auf sechs bis zwölf Monate erstrecken."},{question:"Kann ich mit der Blauen Karte EU den Arbeitgeber wechseln?",answer:"In den ersten zwei Jahren ist für einen Arbeitgeberwechsel die Genehmigung der Ausländerbehörde erforderlich. Nach zwei Jahren können Sie den Arbeitgeber ohne Genehmigung wechseln."},{question:"Ich wurde gekündigt — was passiert mit meiner Blauen Karte EU?",answer:"Sie haben drei Monate Zeit, eine neue Stelle zu finden und die Ausländerbehörde zu informieren. Wenden Sie sich sofort an einen Anwalt — dieser Prozess erfordert schnelles Handeln."},{question:"Mein Antrag auf die Blaue Karte EU wurde abgelehnt — was kann ich tun?",answer:"Sie können innerhalb eines Monats nach Zustellung des Bescheids Widerspruch einlegen. Je nach Ablehnungsgrund stehen Ihnen außerdem der Weg zum Verwaltungsgericht oder eine erneute Antragstellung nach Behebung der Mängel offen."}],faqTR:[{question:"Mavi Kart başvurusu ne kadar sürer?",answer:"Almanya'daki Yabancılar Dairesi ortalama 4-8 hafta içinde karar vermektedir. Vize ve denklik işlemlerini de hesaba katarsanız toplam süreç 6-12 aya uzayabilir."},{question:"Mavi Kart sahibiyken iş değiştirebilir miyim?",answer:"İlk iki yılda iş değişikliği için Yabancılar Dairesi'nin onayı gerekmektedir. İki yılın ardından herhangi bir onay almaksızın iş değişikliği yapabilirsiniz."},{question:"İşten çıkarıldım, Mavi Kartım ne olur?",answer:"Üç ayınız var. Bu süre içinde yeni bir iş bulmanız ve yabancılar dairesini bilgilendirmeniz gerekmektedir. Derhal bir avukata danışın."},{question:"Mavi Kart başvurum reddedildi, ne yapabilirim?",answer:"Tebliğden itibaren bir ay içinde Widerspruch (itiraz) hakkınızı kullanabilirsiniz. Red gerekçesine göre idare mahkemesine başvurma ya da eksiklikleri gidererek yeniden başvurma seçenekleri de mevcuttur."}]},{slug:"turkiye-ceza-davasi-tutuklama-karari-almanya-savunma",slugDE:"strafverfahren-tuerkei-haftbefehl-verteidigung-deutschland",slugTR:"turkiye-ceza-davasi-tutuklama-karari-almanya-savunma",slugEN:"criminal-proceedings-turkey-arrest-warrant-defense",titleDE:"Haftbefehl oder Anklage in der Türkei | Können Sie sich aus Deutschland verteidigen?",titleTR:"Türkiye'de Ceza Davası veya Tutuklama Kararı Var mı? Almanya'dan Savunmanızı Yürütebilir misiniz?",excerptDE:"Haftbefehl oder Strafverfahren in der Türkei? Erfahren Sie, wie Sie Ihre Verteidigung von Deutschland aus führen können, ohne in die Türkei reisen zu müssen.",excerptTR:"Türkiye'de hakkınızda ceza davası veya tutuklama kararı mı var? Almanya'dan Türkiye'ye gitmeden nasıl savunma yapabileceğinizi öğrenin.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

---

Hunderttausende türkische Staatsangehörige, die in Deutschland leben, sehen sich mitunter mit strafrechtlichen Ermittlungen oder Strafverfolgungsmaßnahmen in der Türkei konfrontiert – oft völlig unvorbereitet. Manchmal wohnt jemand seit Jahren hier, geht seinem Alltag nach, und weiß nicht einmal, dass in der Türkei ein Verfahren gegen ihn läuft.

Das liegt häufig an Zustellungsproblemen, nicht aktualisierten Adressen in der Türkei oder schlicht daran, dass keine Verbindung zu den türkischen Behörden mehr besteht. Ob Sie in Mannheim, Frankfurt, Berlin oder einer anderen Stadt in Deutschland leben – ein Strafverfahren in der Türkei kann sowohl Ihren rechtlichen Status dort als auch Ihren Aufenthaltstitel, Ihre Niederlassungserlaubnis oder Ihre Einbürgerung in Deutschland direkt gefährden.

Als bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassener Anwalt berät und vertritt Hasan Doğru Mandanten sowohl im türkischen Recht als auch in allen deutsch-türkischen grenzüberschreitenden Rechtsfragen – einschließlich der aufenthalts- und staatsangehörigkeitsrechtlichen Folgen türkischer Strafverfahren.

→ Wenn Sie sich auch über strafrechtliche Risiken in Bezug auf Erbschaft oder Vermögen informieren möchten: Lesen Sie unseren [Ratgeber zum deutsch-türkischen Erbrecht](/de/blog/erbrecht-leitfaden-tuerkei).

## Grundlagen des türkischen Strafrechts

Das türkische Strafrecht ist im Türkischen Strafgesetzbuch (TCK), Gesetz Nr. 5237, geregelt, das 2005 in Kraft getreten ist. Die strafprozessuale Seite regelt die Strafprozessordnung (CMK), Gesetz Nr. 5271.

Das türkische Strafverfahren gliedert sich im Wesentlichen in drei Phasen. Die erste Phase ist das Ermittlungsverfahren: Es wird von der Staatsanwaltschaft geleitet und umfasst Beweiserhebung, Vernehmungen sowie Entscheidungen über Untersuchungshaft. In der zweiten Phase, dem Hauptverfahren, wird die Anklageschrift beim Gericht eingereicht und die Hauptverhandlung beginnt. In der dritten Phase ergeht das Urteil – Verurteilung, Freispruch oder Strafaussetzung sind möglich – und dagegen kann Berufung sowie Revision beim Yargıtay eingelegt werden.

## Strafverfahren in der Türkei aus Deutschland führen

Die erste Frage, die sich stellt, lautet: Muss ich in die Türkei reisen? Die Antwort hängt von der Art des Verfahrens, seinem aktuellen Stand und dem rechtlichen Status des Beschuldigten ab.

Im türkischen Strafverfahren ist grundsätzlich die persönliche Anwesenheit des Beschuldigten bei den Verhandlungen vorgeschrieben. Allerdings erlaubt § 196 CMK unter bestimmten Voraussetzungen, dass der Beschuldigte durch seinen Anwalt vertreten wird. In manchen Fällen ist auch eine Aussage per Video- und Tonübertragung über das sogenannte SEGBİS-System möglich.

Avukat Hasan Doğru von der Doğru Kanzlei verfolgt Verhandlungen in der Türkei, greift über das UYAP-System direkt auf Verfahrensakten zu und empfängt offizielle Zustellungen über UETS — und vertritt Ihre Interessen vollständig aus Mannheim heraus, ohne dass Sie persönlich erscheinen müssen.

## Häufige Straftatbestände bei in Deutschland lebenden türkischen Staatsangehörigen

**Beleidigung und Verleumdung (TCK Art. 125–131):** Verfahren wegen Social-Media-Beiträgen, Messenger-Nachrichten und Online-Inhalten haben in den letzten Jahren deutlich zugenommen.
**Betrug und schwerer Betrug (TCK Art. 157–158):** Häufig im Zusammenhang mit Streitigkeiten aus Geschäftsbeziehungen.
**Drogenkonsum und -handel (TCK Art. 188–191):** Ein Bereich mit erheblichen Strafandrohungen – betroffen sind Personen, die während eines Türkeibesuchs festgenommen wurden oder wegen einer früheren Anschuldigung verfolgt werden.
**Bedrohung und Erpressung (TCK Art. 106–107):** Entstehen häufig aus familiären oder geschäftlichen Konflikten.
**Steuerhinterziehung und Wirtschaftsdelikte:** Relevant für Personen mit unternehmerischer Tätigkeit in der Türkei.
**Cyberkriminalität (TCK Art. 243–245):** Hacking, unberechtigter Datenzugriff und ähnliche Handlungen fallen hierunter.
**Häusliche Gewalt (TCK Art. 86):** Kommt häufig bei Streitigkeiten mit früheren Ehepartnern oder Familienmitgliedern in der Türkei vor.

## Das Zustellungsproblem: Das Risiko, unwissentlich verurteilt zu werden

Eines der kritischsten Probleme für in Deutschland lebende türkische Staatsangehörige ist die Frage der Zustellung. Wenn in der Türkei ein Verfahren eingeleitet wird, ist die Benachrichtigung der betroffenen Person durch förmliche Zustellung gesetzlich vorgeschrieben. In der Praxis kommt es dabei jedoch zu erheblichen Problemen.

Zustellungen an eine alte Adresse in der Türkei können als wirksam gelten, selbst wenn die Person längst im Ausland lebt. Nach § 21 des türkischen Zustellungsgesetzes (Tebligat Kanunu, Gesetz Nr. 7201) kann, wenn die Person nicht erreichbar ist, die Zustellung beim Nachbarn hinterlassen oder über den Dorfvorsteher (Muhtar) bewirkt werden. Das gilt rechtlich als wirksam – auch dann, wenn die betroffene Person davon tatsächlich nie erfahren hat.

Als wichtige Verteidigungsstrategie gilt: Wer im Ausland lebt und aufgrund einer fehlerhaften Zustellung nichts von seinem Verfahren wusste, kann nach § 40 CMK einen Antrag auf Wiedereinsetzung in den vorigen Stand stellen. Dass der Verteidiger dabei sofort handelt, ist für die Wahrung dieses Rechts entscheidend.

## Reisepass und Grenzrisiko: Was passiert, wenn Sie in die Türkei einreisen?

Wenn gegen Sie in der Türkei ein Haftbefehl besteht oder Ihre Daten im nationalen Fahndungssystem (GBT) erfasst sind, werden Sie bei der Einreise an der Grenze oder am Flughafen sofort identifiziert und festgehalten. Das passiert unabhängig davon, ob Sie einen deutschen oder einen türkischen Pass verwenden — die türkischen Grenzbehörden gleichen beide Pässe mit dem GBT-System ab.

Bevor Sie die Türkei besuchen, sollte über das UYAP-System oder das e-Devlet-Portal geprüft werden, ob Verfahren gegen Sie vorliegen. Avukat Hasan Doğru kann diese Abfrage direkt aus Mannheim für Sie durchführen. Darüber hinaus kann ein bestehender Haftbefehl unter bestimmten Voraussetzungen durch Ihren Anwalt beim zuständigen türkischen Gericht angefochten oder ausgesetzt werden — noch bevor Sie die Türkei betreten.

## Interpol Red Notice: Was passiert, wenn der Haftbefehl international wird?

Wenn ein türkisches Gericht einen Haftbefehl erlässt und die Person im Ausland lebt, besteht das Risiko, dass die türkischen Behörden Interpol einschalten und eine Red Notice beantragen. Eine Interpol Red Notice ist kein internationaler Haftbefehl im rechtlichen Sinne — sie verpflichtet Mitgliedsstaaten nicht zur Festnahme — aber sie erzeugt erheblichen Druck und schränkt die Reisefreiheit massiv ein.

Interpol verfügt über eine unabhängige Kontrollkommission (CCF). Bei dieser Kommission können Betroffene einen Antrag auf Löschung oder Sperrung der Red Notice stellen — insbesondere dann, wenn das zugrundeliegende Verfahren politisch motiviert ist, die rechtsstaatlichen Mindeststandards nicht erfüllt oder die Zustellung nachweislich fehlerhaft war.

Als bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassener Anwalt kann Hasan Doğru diese Verfahren sowohl auf türkischer als auch auf internationaler Ebene koordinieren. Je früher Sie handeln, desto besser.

## Rechte des Beschuldigten: Die wichtigsten Garantien nach der CMK

**Das Schweigerecht** ist in § 147 CMK verankert. Aussagen können als Beweise gegen Sie verwendet werden. Deshalb sollten Sie ohne anwaltliche Beratung keinerlei Angaben machen.
**Das Recht auf einen Verteidiger** ist in §§ 149 und 150 CMK geregelt. Jeder Beschuldigte hat das Recht, von einem Anwalt seiner Wahl vertreten zu werden. Gespräche mit dem Anwalt unterliegen der Vertraulichkeit.
**Das Recht auf ein faires Verfahren** ist durch Art. 36 der türkischen Verfassung und Art. 6 der EMRK garantiert. Es umfasst das Recht auf Verhandlung innerhalb angemessener Frist, vor einem unabhängigen Gericht, auf Konfrontation mit Belastungszeugen sowie auf die Möglichkeit, entlastende Beweise vorzulegen.
**Das Recht auf einen Dolmetscher** ist nach § 202 CMK vorgeschrieben: Wer kein Türkisch spricht oder es nicht ausreichend versteht, hat Anspruch auf einen kostenlosen Dolmetscher.

## Aussetzung der Urteilsverkündung (HAGB) und Strafaussetzung zur Bewährung

Die Aussetzung der Urteilsverkündung (HAGB) ist in § 231 CMK geregelt. Liegen bestimmte Voraussetzungen vor, kann das Gericht die Verkündung des Urteils für fünf Jahre aussetzen. Hält der Beschuldigte die Auflagen ein, wird das Verfahren eingestellt. Das Strafregister bleibt sauber — was besonders wichtig ist, um Auswirkungen auf den Aufenthaltstitel, die Niederlassungserlaubnis oder die Einbürgerung in Deutschland zu vermeiden.

Die Strafaussetzung zur Bewährung nach § 51 TCK kann bei Verurteilungen zu Freiheitsstrafen von bis zu zwei Jahren angewendet werden und verhindert, dass die Strafe tatsächlich im Gefängnis verbüßt werden muss.

## Täter-Opfer-Ausgleich und Einstellung des Verfahrens

Das in § 253 CMK geregelte Ausgleichsverfahren ist bei bestimmten Straftatbeständen anwendbar. Einigen sich die Parteien, wird das Verfahren eingestellt. Zu den ausgleichsfähigen Straftaten zählen unter anderem Beleidigung, einfache Körperverletzung, fahrlässige Körperverletzung sowie bestimmte Eigentumsdelikte.

## Berufung und Revision beim Yargıtay

Das türkische Rechtsmittelsystem im Strafverfahren ist zweistufig aufgebaut. Gegen das Urteil des erstinstanzlichen Gerichts kann beim regionalen Berufungsgericht (BAM) Berufung eingelegt werden. Gegen Entscheidungen des BAM wiederum ist Revision beim Yargıtay möglich — allerdings nur wegen Rechtsverletzungen, nicht wegen des Sachverhalts.

## Fernzugang zu türkischen Gerichten über UYAP

Das Nationale Justiz-Informationsnetzwerk (UYAP) ermöglicht es Anwälten, Schriftsätze elektronisch bei türkischen Gerichten einzureichen, Verfahrensakten online einzusehen und Verhandlungstermine in Echtzeit zu verfolgen. Dank der Integration mit UETS und KEP kann die Doğru Kanzlei türkische Mandanten direkt aus dem Mannheimer Büro heraus vor türkischen Gerichten vertreten.

## Türkische Verurteilung und Ihr Aufenthaltsrecht in Deutschland

Das deutsche Aufenthaltsgesetz (AufenthG) sieht in §§ 54 und 55 klare Regelungen vor, wann eine Straftat — auch eine im Ausland begangene — aufenthaltsrechtliche Konsequenzen hat.

Eine Niederlassungserlaubnis kann nach § 51 Abs. 1 Nr. 5 AufenthG erlöschen, wenn Sie sich länger als sechs Monate außerhalb Deutschlands aufhalten — etwa weil Sie in der Türkei inhaftiert sind. Darüber hinaus kann die Ausländerbehörde die Niederlassungserlaubnis nach § 52 AufenthG widerrufen, wenn aufgrund einer Verurteilung im Ausland schwerwiegende Gründe der öffentlichen Sicherheit vorliegen.

Nach § 54 Abs. 1 AufenthG besteht ein zwingender Ausweisungsgrund, wenn jemand wegen einer vorsätzlichen Straftat zu einer Freiheitsstrafe von mindestens zwei Jahren — ohne Bewährung — verurteilt wurde. Bei bestimmten schweren Delikten gilt dasselbe bereits ab einem Jahr.

Wer die deutsche Staatsbürgerschaft beantragt, muss nachweisen, dass er nicht wegen einer Straftat verurteilt wurde. Nach § 10 StAG führen Verurteilungen zu mehr als 90 Tagessätzen Geldstrafe oder zu Freiheitsstrafen von mehr als drei Monaten auf Bewährung zum Ausschluss. Eine türkische Verurteilung, die in Deutschland anerkannt wird, kann einen laufenden Einbürgerungsantrag sofort zum Scheitern bringen.

---

**Holen Sie sich jetzt eine kostenlose Ersteinschätzung für Ihr Strafverfahren in der Türkei | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

---

Almanya'da yaşayan yüz binlerce Türk vatandaşı, zaman zaman Türkiye'de başlatılan ceza soruşturmaları veya kovuşturmalarıyla karşı karşıya kalmaktadır. Ve çoğu zaman bunu yıllarca bilmez.

Almanya'da hayatını sürdüren, işine gücüne bakan biri, Türkiye'de aleyhine açılmış bir dava bulunduğundan habersiz olabilmektedir. Bu durum; tebligat sorunları, Türkiye'deki adres güncellemelerinin yapılmamış olması ya da dijital bir bağlantının kurulamamış olmasından kaynaklanmaktadır. Mannheim'da, Frankfurt'ta, Berlin'de ya da Almanya'nın herhangi bir şehrinde yaşıyor olmanız fark etmez — Türkiye'deki bir ceza davası hem oradaki hukuki konumunuzu hem de buradaki oturma izninizi, Niederlassungserlaubnis'inizi veya vatandaşlık sürecinizi doğrudan etkileyebilir.

Bu rehberde şunları ele alacağız: Türk ceza yargılamasının temel aşamaları, sanık olarak haklarınız, tebligat sorunlarının hukuki boyutu, Almanya'dan nasıl savunma yürütebileceğiniz, Interpol Red Notice durumunda ne yapmanız gerektiği — ve bu süreçte Ankara Barosu ve Rechtsanwaltskammer Karlsruhe'ye (§207 BRAO) kayıtlı, her iki hukuk sistemine hâkim bir avukattan neden destek almanız gerektiği.

→ Miras veya mal varlığı üzerindeki cezai riskleri de araştırıyorsanız: [Türkiye-Almanya Miras Hukuku rehberimize](/tr/blog/miras-hukuku-rehberi) göz atın.

## Türk Ceza Hukukuna Genel Bakış

Türkiye'de ceza hukuku, 2005 yılında yürürlüğe giren 5237 sayılı Türk Ceza Kanunu (TCK) çerçevesinde düzenlenmektedir. Ceza yargılamasının usul boyutu ise 5271 sayılı Ceza Muhakemesi Kanunu (CMK) ile düzenlenmektedir.

Türk ceza yargılaması üç temel aşamadan oluşur. İlk aşama olan soruşturma; Cumhuriyet Savcısı tarafından yürütülmekte, delil toplama, ifade alma ve tutukluluk kararları bu aşamada gerçekleşmektedir. İkinci aşama olan kovuşturmada iddianame mahkemeye sunulmakta ve duruşmalar başlamaktadır. Üçüncü aşama olan karar aşamasında mahkûmiyet, beraat veya ceza erteleme gibi sonuçlara ulaşılmakta; bu kararlara karşı istinaf ve Yargıtay nezdinde kanun yoluna başvurulabilmektedir.

## Türkiye'deki Ceza Davasını Almanya'dan Yönetmek

Almanya'da yaşayan bir Türk vatandaşı olarak Türkiye'de ceza davasıyla karşılaştığınızda aklınıza gelen ilk soru şudur: Türkiye'ye gitmek zorunda mıyım? Bu sorunun yanıtı; davanın türüne, bulunduğu aşamaya ve hukuki statünüze göre değişmektedir.

Türk ceza yargılamasında kural olarak sanığın duruşmalara bizzat katılması gerekmektedir. Ancak CMK'nın 196. maddesi, belirli koşullar altında sanığın avukatı aracılığıyla temsil edilmesine imkân tanımaktadır. Bunun yanı sıra bazı hallerde ses ve görüntü nakli yoluyla — yani SEGBİS sistemiyle — ifade alınması da mümkündür.

Ankara Barosu ve Rechtsanwaltskammer Karlsruhe'ye (§207 BRAO) kayıtlı avukat olarak Doğru Kanzlei, Türkiye'deki duruşmaları takip eder, UYAP sistemi üzerinden dava dosyasına doğrudan erişir ve UETS aracılığıyla resmi tebligatları alır — Mannheim ofisinden, siz Türkiye'ye adım atmadan. Bu hem Türk hukuku hem de Almanya-Türkiye sınır ötesi etkiler bakımından kapsamlı temsil ve danışmanlık imkânı sağlar.

## Almanya'daki Türklerin Türkiye'de En Sık Karşılaştığı Suç Tipleri

**Hakaret ve iftira (TCK m.125–131):** Sosyal medya paylaşımları, mesajlaşma uygulamaları ve çevrimiçi içerikler nedeniyle açılan davalar son yıllarda ciddi biçimde artmıştır.
**Dolandırıcılık ve nitelikli dolandırıcılık (TCK m.157–158):** Ticari ilişkilerden doğan anlaşmazlıklarda sıklıkla karşımıza çıkmaktadır.
**Uyuşturucu kullanımı ve ticareti (TCK m.188–191):** Türkiye ziyareti sırasında gözaltına alınan ya da geçmişteki bir suçlamadan yargılanan kişileri etkileyen, ağır yaptırımlar öngören bir alan.
**Tehdit ve şantaj (TCK m.106–107):** Genellikle aile içi ya da ticari anlaşmazlıklardan kaynaklanmaktadır.
**Vergi kaçakçılığı ve ekonomik suçlar:** Türkiye'de ticari faaliyeti olan kişileri doğrudan ilgilendirmektedir.
**Bilişim suçları (TCK m.243–245):** Hacking, izinsiz veri erişimi gibi eylemler bu kapsamda değerlendirilmektedir.
**Aile içi şiddet (TCK m.86):** Türkiye'deki eski eş ya da aile üyeleriyle yaşanan anlaşmazlıklarda sıkça gündeme gelmektedir.

## Tebligat Sorunu: Habersizce Mahkûm Olma Riski

Almanya'da yaşayan Türk vatandaşları için en kritik sorunların başında tebligat meselesi gelmektedir. Türkiye'de dava açıldığında, ilgili kişinin tebligatla haberdar edilmesi yasal bir zorunluluktur. Ancak uygulamada işler her zaman bu şekilde yürümez.

Türkiye'deki eski adrese yapılan tebligatlar, kişi yurt dışında ikamet etmesine karşın hukuken geçerli sayılabilmektedir. 7201 sayılı Tebligat Kanunu'nun 21. maddesi uyarınca, kişiye ulaşılamaması durumunda tebligat kapı komşusuna bırakılabilmekte ya da muhtar aracılığıyla yapılabilmektedir. Tebligat size gerçek anlamda ulaşmamış olsa bile bu, hukuken geçerli kabul edilebilmektedir.

Aynı kanunun 25. maddesi yurt dışı tebligata ilişkin özel hükümler içermektedir. Yurt dışındaki Türk vatandaşlarına tebligat, ilgili devletin yetkili makamları aracılığıyla yapılmalıdır. Ancak uygulamada bu kurallara her zaman titizlikle uyulmamaktadır.

Önemli bir savunma stratejisi: Yurt dışında ikamet edip usule aykırı tebligat nedeniyle davadan haberdar olmayan kişiler, CMK'nın 40. maddesi kapsamında eski hale getirme başvurusunda bulunabilir. Avukatın derhal harekete geçmesi, bu hakkın kullanılması için hayati önem taşımaktadır.

## Pasaport ve Sınır Riski: Türkiye'ye Girişte Ne Olur?

Doğru Kanzlei'ye en sık ulaşan sorulardan biri şudur: Türkiye'ye gidebilir miyim — yoksa havalimanında mı tutuklanırım?

Bu endişe son derece yerindedir. Türkiye'de hakkınızda bir tutuklama kararı varsa ya da verileriniz ulusal sorgu sistemine (GBT) işlenmişse, sınırda veya havalimanında giriş yapar yapmaz tespit edilir ve gözaltına alınırsınız. Bu durum ister Alman pasaportu ister Türk pasaportu kullanın fark etmez — Türk sınır yetkilileri her iki pasaportu da GBT sistemi üzerinden sorgular.

En tehlikeli senaryo, hakkında dava açıldığından haberi olmayan kişilerin başına gelir. Bir yakınının cenazesine ya da aile ziyaretine gitmek için uçağa binen biri, havalimanında tutuklandığında ne hazırlığı ne de hukuki desteği olmaz.

Türkiye'ye seyahat etmeden önce UYAP sistemi veya e-Devlet üzerinden hakkınızda aktif bir dava ya da tutuklama kararı bulunup bulunmadığını mutlaka kontrol ettirin. En güvenli yol, bu sorguyu UYAP erişimi olan kayıtlı bir avukat aracılığıyla yaptırmaktır. Avukat Hasan Doğru bu sorgulamayı doğrudan Mannheim ofisinden sizin adınıza gerçekleştirebilmektedir. Bunun yanı sıra mevcut bir tutuklama kararı belirli koşullar altında avukatınız tarafından ilgili Türk mahkemesinde itiraz yoluyla durdurulabilir ya da kaldırılabilir — siz Türkiye'ye adım atmadan önce.

## Interpol Red Notice: Tutuklama Kararı Uluslararası Boyut Kazanırsa Ne Olur?

Türkiye'de tutuklama kararı çıkarılan ve yurt dışında yaşayan bir kişi için Türk makamlarının Interpol'e başvurarak Red Notice talep etme riski her zaman mevcuttur. Interpol Red Notice hukuki anlamda uluslararası bir tutuklama müzekkeresi değildir — üye devletleri yasal olarak gözaltına almakla yükümlü kılmaz. Ancak pratikte sonuçları son derece ağır olabilmektedir.

Red Notice'in somut anlamı şudur: İsminiz, dünya genelinde sınır yetkililerinin erişebildiği Interpol veritabanına kaydedilir. Pek çok ülkeye — bazı AB ülkeleri dahil — girişte sorgulama, sorguya çekme veya geçici gözaltı yaşanabilir. Almanya'da Interpol Red Notice tek başına otomatik tutuklama sebebi oluşturmaz; zira Alman iade hukukunun kendi gereklilikleri vardır. Bununla birlikte Red Notice, ciddi bir baskı unsuru yaratır ve seyahat özgürlüğünü büyük ölçüde kısıtlar.

Interpol Red Notice'e nasıl itiraz edilir? Interpol'ün bağımsız bir denetim organı vardır: Dosyaların Kontrolü için Interpol Komisyonu (CCF). Bu komisyona başvurarak Red Notice'in silinmesi veya askıya alınması talep edilebilir. Özellikle şu durumlarda başvuru güçlüdür: altta yatan davanın siyasi motivasyonlu olması, hukuk devleti asgari standartlarını karşılamaması ya da tebligatın hatalı yapıldığının belgelenebilmesi.

CCF önündeki süreç teknik ve karmaşıktır; eksiksiz dava belgesiyle desteklenmiş, gerekçeli bir başvuru hazırlanmasını gerektirmektedir. Ankara Barosu ve Rechtsanwaltskammer Karlsruhe'ye (§207 BRAO) kayıtlı avukat olarak Hasan Doğru, bu süreçleri hem Türk hukuku hem de uluslararası düzeyde koordineli biçimde yürütebilmektedir. Ne kadar erken harekete geçerseniz sonuç o kadar iyi olur.

## Sanık Haklarınız: CMK Kapsamında Temel Güvenceler

**Susma hakkı** CMK'nın 147. maddesiyle güvence altına alınmıştır. Verilen her ifade aleyhte delil olarak kullanılabilir. Bu nedenle hukuki danışmanlık almadan herhangi bir beyanda bulunmamak büyük önem taşımaktadır.
**Müdafi hakkı** CMK'nın 149. ve 150. maddelerinde düzenlenmiştir. Her sanık, seçtiği bir avukat tarafından temsil edilme hakkına sahiptir.
**Adil yargılanma hakkı** Anayasa'nın 36. maddesi ve AİHS'in 6. maddesiyle güvence altına alınmıştır. Bu hak; makul sürede yargılanma, bağımsız bir mahkeme önünde yargılanma, aleyhte tanıklarla yüzleşme ve lehte delil sunabilme güvencelerini kapsamaktadır.
**Tercüman hakkı** CMK'nın 202. maddesi uyarınca, Türkçe bilmeyen ya da yeterince anlamayan sanığa ücretsiz tercüman sağlanması zorunludur.

## Hükmün Açıklanmasının Geri Bırakılması (HAGB) ve Erteleme

CMK'nın 231. maddesiyle düzenlenen HAGB, belirli koşulların bir arada bulunması halinde mahkemenin verdiği mahkûmiyet kararının açıklanmasını beş yıl süreyle erteleyen bir kurumdur. Sanık bu süre zarfında denetimli serbestlik altında kalır; süreyi ihlalsiz tamamlarsa dava düşer. Sabıka kaydı temiz kalır — bu da Almanya'daki oturma izninizi, Niederlassungserlaubnis'inizi ya da vatandaşlık başvurunuzu tehdit edecek süreçlerin önüne geçer.

TCK'nın 51. maddesiyle düzenlenen erteleme ise iki yıl veya daha az hapis cezasına mahkûm edilen sanıklara uygulanabilmekte ve cezanın fiilen cezaevinde çekilmesinin önüne geçmektedir.

## Uzlaşma ve Kovuşturmadan Vazgeçme

CMK'nın 253. maddesiyle düzenlenen uzlaşma prosedürü belirli suç tipleri için uygulanabilmektedir. Savcılık, suçun uzlaşmaya elverişli olduğunu değerlendirdiğinde tarafları uzlaşma görüşmesine davet eder. Uzlaşma sağlandığında dava düşmektedir. Hakaret, basit yaralama, taksirle yaralama ve bazı mülkiyet suçları bu kapsamda değerlendirilebilmektedir.

## Temyiz ve Yargıtay

Türk ceza yargılamasında kanun yolları iki aşamalıdır. İlk derece mahkemesi kararına karşı Bölge Adliye Mahkemesi (BAM) nezdinde istinaf yoluna başvurulabilmektedir. BAM kararlarına karşı ise yalnızca hukuka aykırılık gerekçesiyle Yargıtay'a temyiz başvurusunda bulunulabilmektedir.

## UYAP ile Uzaktan Dava Takibi

Ulusal Yargı Ağı Bilişim Sistemi (UYAP), avukatlara Türkiye'deki mahkemelere elektronik ortamda dilekçe sunma, dava dosyasına çevrimiçi erişim ve duruşma tarihlerini gerçek zamanlı takip etme imkânı sağlamaktadır. UETS ve KEP sistemiyle entegre çalışan UYAP sayesinde Doğru Kanzlei, Mannheim ofisinden Türkiye'deki davaları fiziksel varlık gerekmeksizin doğrudan yürütebilmektedir.

## Almanya'daki Hukuki Statünüzü Korumak

Almanya'nın yabancılar hukukunu düzenleyen AufenthG, §§ 54 ve 55 kapsamında yurt dışında işlenen suçların da oturma hakkını nasıl etkileyebileceğini net biçimde ortaya koymaktadır.

Niederlassungserlaubnis (süresiz oturma izni), AufenthG § 51 f.1 n.5 uyarınca Almanya dışında altı aydan fazla kalınması halinde — örneğin Türkiye'de tutuklu bulunulması nedeniyle — kendiligenden geçersiz hale gelebilmektedir.

Süreli oturma izni (Aufenthaltserlaubnis) açısından ise AufenthG § 54 f.1 uyarınca, kişi kasıtlı bir suç nedeniyle ertelemesiz en az iki yıl hapis cezasına çarptırılmışsa zorunlu sınır dışı etme gerekçesi oluşmaktadır.

Vatandaşlık başvurusu açısından ise StAG § 10 uyarınca, 90 günlük adli para cezasını veya ertelemeli üç aylık hapis cezasını aşan mahkûmiyetler başvuruyu engellemektedir. Almanya'da tanınan bir Türk mahkûmiyeti, devam eden bir vatandaşlık başvurusunu anında çökertebilir.

---

**Türkiye'deki ceza davanız için ücretsiz ön değerlendirme alın | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuzda yalnızca Türk hukuku alanında danışmanlık verilmektedir.*`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:Mu,dateDE:"20. April 2026",dateTR:"20 Nisan 2026",readTimeDE:"10 Min. Lesezeit",readTimeTR:"10 dk okuma",publishedAt:"2026-04-20",keywordsDE:"Türkei Strafverfahren Deutschland, Haftbefehl Türkei Deutschland, Interpol Red Notice Türkei, Reisepass Türkei Risiko, AufenthG Verurteilung",keywordsTR:"Türkiye ceza davası Almanya, tutuklama kararı Türkiye, Almanya'dan savunma, Interpol Red Notice Türkiye, pasaport sınır riski Türkiye",faqDE:[{question:"Wie erfahre ich, ob in der Türkei ein Strafverfahren gegen mich läuft?",answer:"Sie können über das UYAP-Bürgerportal oder das e-Devlet-Portal nach Verfahren gegen Sie suchen. Der sicherste Weg ist jedoch, über die Doğru Kanzlei eine vollständige UYAP-Abfrage durchführen zu lassen — direkt aus Mannheim."},{question:"Kann ein Strafverfahren in der Türkei meinen Aufenthaltstitel in Deutschland gefährden?",answer:"Ja. Verurteilungen, die bestimmte Schwellen nach § 54 AufenthG überschreiten, können den Aufenthaltstitel gefährden oder zum zwingenden Ausweisungsgrund werden. Bereits bei einer Verurteilung zu einem Jahr Freiheitsstrafen ohne Bewährung ist das Aufenthaltsrecht ernsthaft gefährdet."},{question:"Was ist eine Interpol Red Notice und was soll ich tun, wenn eine gegen mich besteht?",answer:"Eine Interpol Red Notice ist eine weltweite Fahndungsausschreibung auf Antrag türkischer Behörden. Sie kann bei der Interpol CCF angefochten werden — insbesondere wenn das Verfahren rechtsstaatlichen Mindeststandards nicht entspricht. Wenden Sie sich sofort an einen Anwalt."},{question:"Muss ich in die Türkei reisen?",answer:"Nicht für jedes Verfahren. Ihr Anwalt kann Sie in den meisten Fällen nach § 196 CMK vertreten oder eine Aussage per SEGBİS aus Deutschland erwirken."},{question:"Werde ich am türkischen Flughafen festgehalten, wenn gegen mich ein Haftbefehl besteht?",answer:"Ja — wenn Ihre Daten im türkischen Fahndungssystem GBT erfasst sind, werden Sie bei der Einreise sofort identifiziert, unabhängig davon ob Sie mit einem deutschen oder türkischen Pass reisen."}],faqTR:[{question:"Türkiye'de hakkımda dava açılıp açılmadığını nasıl öğrenebilirim?",answer:"UYAP Vatandaş Portalı veya e-Devlet üzerinden sorgulama yapabilirsiniz. Ancak en güvenli yol, Doğru Kanzlei aracılığıyla kapsamlı bir UYAP araması yaptırmaktır — doğrudan Mannheim ofisinden."},{question:"Türkiye'deki ceza davası Almanya'daki oturma iznimi etkiler mi?",answer:"Evet. AufenthG § 54 kapsamında belirli eşikleri aşan mahkûmiyetler oturma izninizi tehlikeye atabilir ya da zorunlu sınır dışı etme gerekçesi oluşturabilir. Ertelemesiz bir yıl hapis cezasında bile oturma hakkınız ciddi tehlike altına girer."},{question:"Interpol Red Notice nedir ve hakkımda varsa ne yapmalıyım?",answer:"Interpol Red Notice, Türk makamlarının talebiyle düzenlenen dünya genelinde bir arama kaydıdı. Davanın hukuk devleti standartlarını karşılamaması veya tebligatın hatalı yapıldığının kanıtlanması durumunda Interpol CCF'ye itiraz başvurusunda bulunulabilir. Hemen bir avukata başvurun."},{question:"Türkiye'ye gitmek zorunda mıyım?",answer:"Her dava için değil. Avukatınız çoğu durumda CMK m.196 kapsamında sizi temsil edebilir ya da SEGBİS aracılığıyla uzaktan ifade vermenizi sağlayabilir."},{question:"Türkiye'ye gidersem havalimanında tutuklanır mıyım?",answer:"Hakkınızda GBT sistemine işlenmiş bir tutuklama kararı varsa evet — ister Alman ister Türk pasaportu kullanın. Türkiye'ye seyahat etmeden önce mutlaka UYAP üzerinden bir avukat aracılığıyla kontrol ettirin."}]},{slug:"almanya-bosanma-tanima-tenfiz-davasi-rehberi",slugDE:"deutschland-scheidung-anerkennung-tuerkei-tanima-tenfiz",slugTR:"almanya-bosanma-tanima-tenfiz-davasi-rehberi",slugEN:"germany-divorce-recognition-turkey-tanima-tenfiz",titleDE:"In Deutschland geschieden – Was jetzt in der Türkei? Der vollständige Leitfaden zu Tanıma & Tenfiz (2026)",titleTR:"Almanya'da Boşandım, Türkiye'de Tanıma Tenfiz Davası Nasıl Açılır? (2026 Güncel Rehber)",excerptDE:"Anerkennung deutscher Scheidungsurteile in der Türkei (Tanıma ve Tenfiz). Ein umfassender Leitfaden zu Personenstand, Vermögensaufteilung, Sorgerecht und Unterhalt.",excerptTR:"Almanya'da boşanan Türk vatandaşları için Türkiye'de tanıma ve tenfiz davası rehberi. Nüfus kaydı, miras hakları, mal paylaşımı ve velayet süreçleri.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

---

Sie sind in Deutschland geschieden. Das Scheidungsurteil liegt vor, die Sache scheint erledigt. Dann, Monate später, stellen Sie bei einem Behördengang in der Türkei fest: **In der Türkei gelten Sie offiziell noch als verheiratet.**

Das ist kein Einzelfall. Hunderttausende türkischstämmige Menschen in Deutschland wissen nicht, dass ein deutsches Scheidungsurteil in der Türkei **nicht automatisch gilt**. Um Ihren Personenstandsstatus in der Türkei zu aktualisieren, erneut heiraten zu können, Vermögen zu regeln, Unterhaltsansprüche durchzusetzen oder Sorgerechtsfragen zu klären, ist ein gesondertes Anerkennungsverfahren vor einem türkischen Gericht erforderlich — das sogenannte **Tanıma ve Tenfiz**-Verfahren.

Dieser Leitfaden erklärt Ihnen als Person mit Wohnsitz in Deutschland umfassend, wie Sie dieses Verfahren vollständig von hier aus durchführen können — **ohne Reise in die Türkei** — und was bei Vermögensaufteilung, Sorgerecht und Unterhalt zu beachten ist.

---

## Tanıma vs. Tenfiz: Was ist der Unterschied?

Diese beiden Begriffe werden häufig verwechselt, und die falsche Einschätzung kann dazu führen, dass die falsche Klage erhoben wird — mit entsprechendem Rechtsverlust.

### Tanıma (Anerkennung)

Tanıma bedeutet, dass das deutsche Urteil in der Türkei als rechtskräftig anerkannt wird — es erlangt damit die gleiche Wirkung wie ein türkisches Gerichtsurteil. Wenn Ihr Scheidungsurteil **ausschließlich die Scheidung** ausspricht und keinerlei vollstreckbare Regelungen zu Sorgerecht, Unterhalt oder Schadensersatz enthält, ist ein Tanıma-Verfahren ausreichend. Das Ergebnis: Ihr Personenstand wird in der Türkei auf „geschieden" geändert.

### Tenfiz (Vollstreckbarerklärung)

Tenfiz geht einen Schritt weiter. Es ermöglicht, dass das ausländische Urteil in der Türkei **vollstreckt** werden kann. Wenn das deutsche Urteil neben der Scheidung auch Regelungen zu Unterhalt, Sorgerecht, Schadensersatz oder Vermögensaufteilung enthält, müssen diese Regelungen durch Tenfiz in der Türkei vollstreckbar gemacht werden.

Ohne Tenfiz kann ein Unterhaltsurteil in der Türkei nicht vollstreckt werden. Ein Sorgerechtsbeschluss wird türkischen Behörden gegenüber nicht anerkannt. Eine Vermögensregelung bleibt wirkungslos.

### Was passiert in der Praxis?

Die meisten deutschen Scheidungsurteile enthalten sowohl die Scheidung als auch Regelungen zu Unterhalt, Sorgerecht oder Vermögen. Ihr Anwalt wird daher in der Regel beide Verfahren gemeinsam beantragen. Welche Klage die richtige ist, hängt stets vom konkreten Inhalt Ihres Urteils ab und muss individuell bewertet werden.

---

## Was passiert, wenn Sie nichts unternehmen?

Die Konsequenzen können weit über eine formale Unannehmlichkeit hinausgehen:

**Personenstand:** In der Türkei gelten Sie weiterhin als verheiratet. Eine erneute Heirat ist nicht möglich. Wichtig: Das deutsche Standesamt kann bei einer erneuten Heirat eine türkische Ehefähigkeitsbescheinigung verlangen — wenn Sie in der Türkei noch als verheiratet geführt werden, erhalten Sie diese nicht.

**Erbrecht:** Ihr Ex-Partner bleibt in der Türkei gesetzlicher Erbberechtigter. Sollten Sie versterben, können Ihre Immobilien, Bankkonten und sonstigen Vermögenswerte in der Türkei an diese Person fallen. Es gibt dokumentierte Fälle, in denen Ex-Partner einen Erbschein (Veraset ilamı) erlangt und damit Vermögen übertragen haben.

**Vermögen in der Türkei:** Wenn Sie Immobilien, Grundstücke oder Bankkonten in der Türkei besitzen, kann Ihr Ex-Partner Ansprüche darauf geltend machen. Tapu Müdürlüğü (Grundbuchamt) und Banken akzeptieren ohne abgeschlossenes Tanıma-Tenfiz-Verfahren keine ausländischen Gerichtsurteile.

**Unterhalt und Sorgerecht:** Ein deutsches Unterhaltsurteil ist in der Türkei ohne Tenfiz nicht vollstreckbar. Sorgerechtsbeschlüsse werden von türkischen Behörden nicht anerkannt. Das bedeutet: Ihr Ex-Partner kann sich in der Türkei faktisch über das Urteil hinwegsetzen.

**Kinder:** Ohne anerkannten Sorgerechtsbeschluss kann es bei Reisepässen, Schulanmeldungen und Reisegenehmigungen für Ihre Kinder in der Türkei zu erheblichen bürokratischen Problemen kommen.

---

## Welche Dokumente werden benötigt?

Das ist die häufigste praktische Hürde für Menschen, die in Deutschland leben. Folgende Unterlagen aus Deutschland benötigt Ihr türkischer Anwalt:

### 1. Scheidungsurteil (Scheidungsbeschluss)

Das Original des Scheidungsurteils des zuständigen deutschen Familiengerichts, mit Stempel and Originalunterschrift. Eine Kopie oder ein Ausdruck aus dem Internet wird nicht akzeptiert. Sie müssen eine beglaubigte Ausfertigung beim Gericht anfordern.

### 2. Rechtskraftvermerk

Dies ist das wichtigste und am häufigsten übersehene Dokument — und für viele türkische Anwälte ohne Deutschland-Erfahrung unbekannt. Der Rechtskraftvermerk ist der amtliche Nachweis, dass das Urteil nicht mehr angefochten werden kann — also rechtskräftig ist. Türkische Gerichte akzeptieren das Scheidungsurteil ohne diesen Vermerk nicht, da sie die Rechtskraft als Verfahrensvoraussetzung prüfen müssen.

Den Rechtskraftvermerk erhalten Sie beim Familiengericht, das das Scheidungsurteil erlassen hat. Er wird in der Regel gegen eine Gebühr auf einer separaten Seite oder auf dem Urteil selbst ausgestellt.

### 3. Apostille

Da Deutschland dem Haager Übereinkommen zur Befreiung ausländischer öffentlicher Urkunden von der Legalisation angehört, können Dokumente mit einer Apostille versehen werden. Die Apostille bestätigt die Echtheit des Dokuments und ermöglicht seine offizielle Anerkennung in der Türkei.

In Baden-Württemberg — also wenn Sie in Mannheim oder Umgebung leben — wird die Apostille beim Oberlandesgericht Karlsruhe beantragt. In anderen Bundesländern ist die zuständige Behörde unterschiedlich (z. B. Regierungspräsidium oder Oberlandesgericht).

### 4. Beglaubigte türkische Übersetzung

Alle Dokumente müssen von einem in der Türkei zugelassenen, vereidigten Übersetzer ins Türkische übersetzt und notariell beglaubigt werden. Diese Übersetzung kann in der Türkei angefertigt werden; die Dokumente können postalisch oder digital übermittelt werden.

### 5. Vollmacht (Vekâletname)

Um das Verfahren ohne persönliche Anwesenheit in der Türkei führen zu können, erteilen Sie Ihrem Anwalt eine notarielle Vollmacht, die ausdrücklich die Befugnis zur Tanıma ve Tenfiz enthält. Diese Vollmacht kann bei einem deutschen Notar errichtet werden — zum Beispiel in Mannheim. Wichtig: Die Vollmacht muss explizit die Begriffe „Tanıma ve Tenfiz davası" enthalten; eine allgemeine Prozessvollmacht kann von einzelnen Gerichten als unzureichend betrachtet werden.

---

## Schritt für Schritt: So läuft das Verfahren ab

### Schritt 1 — Dokumente beschaffen

Sie fordern beim zuständigen deutschen Familiengericht das Scheidungsurteil (beglaubigte Ausfertigung) und den Rechtskraftvermerk an. Anschließend lassen Sie die Apostille beim zuständigen Oberlandesgericht anbringen. Dieser Schritt dauert je nach Gerichtsauslastung einige Wochen.

### Schritt 2 — Vollmacht beim deutschen Notar

Sie erteilen Ihrem türkischen Anwalt beim deutschen Notar eine Vollmacht. In Mannheim und Umgebung ist dies problemlos möglich. Eine Reise in die Türkei ist nicht erforderlich.

### Schritt 3 — Beglaubigte Übersetzung

Die Unterlagen werden durch einen in der Türkei zugelassenen vereidigten Übersetzer ins Türkische übersetzt und notariell beglaubigt.

### Schritt 4 — Klageerhebung

Ihr Anwalt erhebt beim zuständigen türkischen Familiengericht Klage auf Anerkennung (Tanıma) und/oder Vollstreckbarerklärung (Tenfiz). Haben Sie keinen festen Wohnsitz in der Türkei, kann die Klage bei den Familiengerichten in Istanbul, Ankara oder İzmir erhoben werden.

### Schritt 5 — Zustellungsphase

Die Zustellung an die Gegenseite ist die zeitaufwendigste Phase des Verfahrens. Ist die Adresse der Gegenseite bekannt und sind beide Parteien anwaltlich vertreten, kann diese Phase in wenigen Wochen abgeschlossen sein. Ist die Adresse unbekannt oder weigert sich die Gegenseite, die Zustellung anzunehmen, kann das Verfahren erheblich verlängert werden. Die korrekte Angabe der Zustelladresse ist daher von entscheidender Bedeutung.

### Schritt 6 — Verhandlung und Urteil

Ihr Anwalt nimmt an allen Verhandlungen für Sie teil. Eine persönliche Anwesenheit in der Türkei ist nicht erforderlich.

### Schritt 7 — Personenstandsänderung

Nach Rechtskraft des Urteils wird das Standesamt (Nüfus Müdürlüğü) in der Türkei informiert und Ihr Personenstand auf „geschieden" geändert.

**Durchschnittliche Dauer:** Bei vollständigen Unterlagen und anwaltlicher Vertretung beider Parteien in der Regel **3 bis 6 Monate.** Bei Zustellungsproblemen kann sich das Verfahren auf bis zu 12 Monate verlängern.

---

## Die Standesamt-Alternative: Geht es auch ohne Gericht?

Durch eine Gesetzesänderung im Jahr 2017 (Ergänzung des türkischen Personenstandsgesetzes Nr. 5490) ist es unter bestimmten Voraussetzungen möglich, die Anerkennung einer ausländischen Scheidung **ohne Gerichtsverfahren** direkt beim türkischen Standesamt (Nüfus Müdürlüğü) oder über das türkische Konsulat zu beantragen. Das ist eine wichtige Erleichterung, die viele nicht kennen.

### Wann ist dieser Weg möglich?

Dieser Weg steht offen, wenn **alle** folgenden Voraussetzungen erfüllt sind:

- Das ausländische Urteil enthält **ausschließlich die Scheidung** — keine vollstreckbaren Regelungen zu Unterhalt, Sorgerecht oder Schadensersatz
- **Beide Parteien beantragen gemeinsam** die Eintragung beim Standesamt
- Alle erforderlichen Dokumente (apostilliertes Scheidungsurteil, Rechtskraftvermerk, beglaubigte Übersetzung) liegen vollständig vor

### Wann funktioniert dieser Weg nicht?

In folgenden Fällen ist der Gerichtsweg zwingend:

- Die Gegenseite ist nicht kooperativ oder verweigert den gemeinsamen Antrag
- Das Urteil enthält Regelungen zu Unterhalt, Sorgerecht, Schadensersatz oder Vermögen
- Der Antrag beim Standesamt wird abgelehnt (dann bleibt nur der Klageweg)

### Antrag über das türkische Konsulat in Deutschland

Für in Deutschland lebende Personen besteht auch die Möglichkeit, den Antrag über das türkische Generalkonsulat (z. B. in Frankfurt, Stuttgart oder Köln) zu stellen, sofern alle Voraussetzungen erfüllt sind. Auch hierbei ist anwaltliche Begleitung empfehlenswert, um Fehler und Ablehnungen zu vermeiden.

---

## Vermögensaufteilung: Was passiert mit Immobilien in der Türkei?

Viele in Deutschland lebende Türken besitzen Immobilien, Grundstücke oder andere Vermögenswerte in der Türkei. Die Regelung dieser Vermögenswerte nach einer Scheidung ist eng mit dem Tanıma-Tenfiz-Verfahren verknüpft.

### Das deutsche Gericht hat eine Vermögensregelung getroffen

Hat das deutsche Familiengericht neben der Scheidung auch eine Vermögensaufteilung beschlossen, muss diese Regelung durch **Tenfiz** in der Türkei vollstreckbar gemacht werden. Ohne Tenfiz werden weder das Grundbuchamt (Tapu Müdürlüğü) noch Banken eine Übertragung oder sonstige Verfügung auf Basis des deutschen Urteils vornehmen. Selbst wenn das Urteil die Übertragung einer türkischen Immobilie anordnet, ist dies ohne Tenfiz in der Türkei nicht durchsetzbar.

### Das deutsche Gericht hat keine Vermögensregelung für die Türkei getroffen

Hat das deutsche Gericht nur die Scheidung ausgesprochen und keine Regelung für in der Türkei befindliche Vermögenswerte getroffen, ist in der Türkei ein separates **Güterrechtsverfahren** (Mal rejiminin tasfiyesi davası) erforderlich. Dieses setzt voraus, dass die Scheidung zunächst durch Tanıma in der Türkei anerkannt wurde.

Wichtiger Zeitpunkt: Bei der türkischen Vermögensaufteilung kommt es auf den **Zeitpunkt der Klageerhebung in Deutschland** an — also auf das Datum, an dem das deutsche Scheidungsverfahren eingeleitet wurde. Denn nur die bis zu diesem Datum erworbenen Vermögenswerte fallen in den Aufteilungsbereich. Je später Sie die Tanıma-Klage in der Türkei erheben, desto mehr kann dieser Zeitraum zu Ihrem Nachteil verschoben wirken.

### Einstweilige Verfügung: Kann Ihr Ex-Partner Immobilien in der Türkei verkaufen?

Wenn Sie befürchten, dass die Gegenseite türkische Immobilien veräußert, bevor das Verfahren abgeschlossen ist, können Sie beim türkischen Gericht eine **einstweilige Verfügung** (İhtiyati Tedbir) beantragen. Diese bewirkt, dass ein Verfügungsverbot im Grundbuch eingetragen wird, das Verkauf, Übertragung und Belastung der Immobilie verhindert. Gerade wenn die Gegenseite in der Türkei lebt, ist diese Sicherungsmaßnahme oft dringend geboten.

---

## Sorgerecht: Gilt der deutsche Sorgerechtsbeschluss in der Türkei?

Wenn Kinder im Spiel sind, gewinnt das Tanıma-Tenfiz-Verfahren eine besondere Dringlichkeit.

### Anerkennung des deutschen Sorgerechtsbeschlusses

Ein deutscher Sorgerechtsbeschluss — ob alleiniges oder gemeinsames Sorgerecht — gilt in der Türkei nicht automatisch. Ohne Tenfiz wird er von türkischen Behörden nicht berücksichtigt. Das hat konkrete Folgen:

- Reisepässe für das Kind können in der Türkei ohne Zustimmung beider Elternteile nicht ausgestellt werden
- Auslandsreisen des Kindes von der Türkei aus setzen die Einwilligung beider Eltern voraus
- Es besteht das Risiko, dass der andere Elternteil das Kind in der Türkei zurückhält

### Gemeinsames Sorgerecht

In Deutschland ist gemeinsames Sorgerecht die Regel. Auch ein solcher Beschluss kann durch Tenfiz in der Türkei wirksam gemacht werden, sodass die Rechte beider Elternteile bei türkischen Behörden geschützt sind.

### Internationale Kindesentführung

Wenn ein Elternteil das Kind ohne Zustimmung des anderen nach Deutschland bringt oder in der Türkei zurückhält, ist dies ein Fall von internationaler Kindesentführung. Sowohl Deutschland als auch die Türkei sind Vertragsstaaten des Haager Übereinkommens über die zivilrechtlichen Aspekte internationaler Kindesentführung (HKÜ). In solchen Fällen ist sofortiges anwaltliches Handeln erforderlich.

---

## Unterhalt: Deutsches Unterhaltsurteil in der Türkei vollstrecken

Hat das deutsche Gericht Unterhaltszahlungen angeordnet und hat Ihr Ex-Partner Vermögen oder Einkommen in der Türkei, können Sie dieses Urteil in der Türkei vollstrecken — aber **nur nach Tenfiz.**

### Welche Unterhaltsformen können vollstreckt werden?

- **Ehegattenunterhalt** (Yoksulluk nafakası): Unterhalt, der dem geschiedenen Ehegatten zugesprochen wurde
- **Kindesunterhalt** (İştirak nafakası): Unterhalt für minderjährige Kinder

Der **vorläufige Unterhalt** während des laufenden Scheidungsverfahrens (Tedbir nafakası) kann hingegen nicht Gegenstand des Tenfiz sein, da er nur während des schwebenden Verfahrens gilt und nicht nach Rechtskraft der Scheidung.

### Was passiert bei Nichtzahlung nach Tenfiz?

Nach Erlangung des Tenfiz-Urteils kann über ein türkisches Vollstreckungsgericht (İcra Müdürlüğü) die Zwangsvollstreckung beantragt werden. Verfügt Ihr Ex-Partner über türkische Bankkonten, ein Gehalt oder Immobilien, können diese gepfändet werden. Das türkische Recht sieht bei beharrlicher Nichtzahlung von Unterhalt auch **Beugehaft** (Tazyik hapsi) vor — ein ernstzunehmendes Druckmittel.

### Ex-Partner ist nach Türkei gezogen oder geflohen

Dies ist eine häufige Konstellation unter in Deutschland lebenden Türken. Wenn Ihr Ex-Partner nach der Scheidung in die Türkei gezogen ist oder das Land verlassen hat, ist der Weg über Tenfiz und anschließende Zwangsvollstreckung in der Türkei der richtige. Handeln Sie in diesen Fällen zügig: Je früher die Tenfiz-Klage erhoben und eine einstweilige Verfügung beantragt wird, desto geringer das Risiko eines Vermögensentzugs.

---

## Müssen Sie für dieses Verfahren in die Türkei reisen?

**Nein.** Das ist einer der größten Vorteile, wenn Sie in Deutschland leben.

Mit einer Vollmacht, die Sie beim deutschen Notar erteilen, kann Ihr türkischer Anwalt das gesamte Verfahren in Ihrem Namen führen. Sie müssen an keiner Verhandlung persönlich teilnehmen.

Wir sind als im UYAP-System registrierte Anwälte in der Lage, Ihre türkischen Gerichtsverfahren in Echtzeit aus Deutschland zu überwachen. Verhandlungstermine, Dokumentenstatus, Zustellungsfortschritt — all das beobachten wir laufend, während Sie in Mannheim oder anderswo in Deutschland Ihrem Alltag nachgehen.

---

## Was uns von türkischen Kanzleien unterscheidet

Wenn Sie eine Kanzlei beauftragen, die ausschließlich in der Türkei tätig ist, können folgende Probleme auftreten:

- Mangelnde Kenntnis des deutschen Dokumentensystems: Was ist der Rechtskraftvermerk? Wie beantragt man die Apostille in Baden-Württemberg? Wie wird eine Vollmacht beim deutschen Notar korrekt errichtet? Diese praktischen Details sind von der Türkei aus schwer zu überblicken.
- Kommunikationsbarrieren: Türkischsprachige Korrespondenz, Zeitverschiebung, verzögerte Rückmeldungen, erschwerte Rückfragen.
- Fehlende oder falsche Dokumente führen zur Verlängerung oder Abweisung der Klage.

**Unser Büro in Mannheim bedeutet:**

- **Wir begleiten den deutschen Dokumentenprozess aktiv.** Welche Unterlagen von welchem Gericht, wo die Apostille beantragt wird, wie die Vollmacht beim deutschen Notar korrekt formuliert wird — das klären wir gemeinsam, auf Deutsch oder Türkisch.
- **Doppelte Zulassung.** Wir sind Mitglied der Rechtsanwaltskammer Karlsruhe (§207 BRAO) sowie der Anwaltskammer Ankara. Wir vertreten Sie direkt vor türkischen Gerichten — ohne Zwischenhändler, ohne Mehrkosten durch Kooperationspartner.
- **UYAP-Zugang in Echtzeit.** Wir überwachen den Stand Ihrer türkischen Gerichtsverfahren direkt aus Deutschland — Verhandlungstermine, Zustellungsstatus, Entscheidungen.
- **Deutsch und Türkisch.** Wir kommunizieren fließend in beiden Sprachen. Kein Übersetzungsaufwand, keine Missverständnisse.
- **Über 70 Google-Bewertungen, 5,0 Sterne.** Die Erfahrungen unserer Mandanten sprechen für sich.

---

## Häufig gestellte Fragen

**Ich bin in Deutschland geschieden, gelte aber in der Türkei noch als verheiratet. Was muss ich tun?**
Sie müssen beim türkischen Familiengericht eine Tanıma-Klage erheben. Das ist kein neues Scheidungsverfahren, sondern ein eigenständiges Verfahren zur Anerkennung des deutschen Urteils. Eine Reise in die Türkei ist nicht erforderlich — eine notarielle Vollmacht genügt.

**Muss mein Ex-Partner am Verfahren teilnehmen?**
Nein. Das Verfahren kann einseitig eingeleitet werden. Die Gegenseite wird zugestellt; aktive Mitwirkung ist nicht erforderlich. Sind beide Parteien einverstanden und enthält das Urteil nur die Scheidung, kann alternativ der Standesamt-Weg geprüft werden.

**Wie lange dauert das Verfahren?**
Bei vollständigen Unterlagen und anwaltlicher Vertretung beider Parteien durchschnittlich 3–6 Monate. Zustellungsproblemen kann das Verfahren auf bis zu 12 Monate verlängern.

**Wo erhalte ich den Rechtskraftvermerk?**
Beim Familiengericht, das das Scheidungsurteil erlassen hat. Sie beantragen ihn schriftlich, in der Regel gegen eine geringe Gebühr. Teilen Sie dem Gericht mit, dass der Vermerk für ein internationales Anerkennungsverfahren in der Türkei benötigt wird — dann wird die Apostille in der Regel direkt miterstellt oder empfohlen.

**Kann ich die Anerkennung über das Standesamt ohne Gericht erledigen?**
In bestimmten Fällen ja — wenn das Urteil ausschließlich die Scheidung ausspricht und beide Parteien gemeinsam beantragen. Enthält das Urteil Regelungen zu Unterhalt, Sorgerecht oder Vermögen, oder ist die Gegenseite nicht kooperativ, ist der Gerichtsweg zwingend.

**Mein Ex-Partner lebt in der Türkei und zahlt keinen Unterhalt. Was kann ich tun?**
Sie benötigen zunächst ein Tenfiz-Urteil in der Türkei. Danach kann über das türkische Vollstreckungsgericht die Zwangsvollstreckung beantragt werden — Pfändung von Bankkonten, Gehalt oder Immobilien. Bei beharrlicher Zahlungsverweigerung droht nach türkischem Recht Beugehaft.

**Ich war mit einem deutschen Staatsbürger verheiratet. Gilt das auch für mich?**
Ja, wenn Sie die türkische Staatsangehörigkeit besitzen oder Inhaber eines Mavi Kart sind. Wenn Sie in Deutschland erneut heiraten möchten, kann das Standesamt eine türkische Ehefähigkeitsbescheinigung verlangen — und dafür müssen Sie in der Türkei als geschieden eingetragen sein.

**Mein Ex-Partner könnte die Immobilie in der Türkei verkaufen. Was kann ich tun?**
Beantragen Sie beim türkischen Gericht eine einstweilige Verfügung (İhtiyati Tedbir). Diese bewirkt ein Verfügungsverbot im Grundbuch und verhindert Verkauf oder Belastung der Immobilie, solange das Verfahren läuft.

**Ich bin Mavi Kart-Inhaber, aber kein türkischer Staatsangehöriger mehr. Gilt das für mich?**
Ja. Das Tanıma-Tenfiz-Verfahren ist auch für Mavi Kart-Inhaber relevant, insbesondere wenn Sie wieder heiraten möchten oder Vermögen in der Türkei haben.

---

## Ihr nächster Schritt

Sie müssen nicht in die Türkei fliegen, keinen Urlaub nehmen und keine Monate auf Rückmeldungen warten.

Stellen Sie die Unterlagen zusammen, kontaktieren Sie uns — den Rest erledigen wir.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

---

Almanya'da boşandınız. Mahkeme kararını elinize aldınız, rahatladınız. Ama birkaç ay sonra Türkiye'deki bir işlem sırasında şok edici bir gerçekle yüzleştiniz: **Türkiye'de hâlâ evli görünüyorsunuz.**

Bu, Almanya'da yaşayan yüz binlerce Türk vatandaşının bilmeden düştüğü hukuki bir tuzaktır. Alman mahkemesinin verdiği boşanma kararı, Türkiye'de otomatik olarak geçerli olmaz. Türkiye'de nüfus kaydınızın güncellenmesi, yeniden evlenebilmeniz, mal paylaşımı yapabilmeniz, nafaka ve velayet kararlarını Türkiye'de uygulayabilmeniz için ayrı bir hukuki adım atmanız zorunludur: **tanıma ve tenfiz davası.**

Bu rehberde, Almanya'da yaşayan biri olarak bu süreci Türkiye'ye adım atmadan nasıl tamamlayabileceğinizi, hangi belgelere ihtiyaç duyduğunuzu, alternatif yolları ve mal paylaşımı, velayet, nafaka gibi bağlantılı konuları kapsamlı biçimde ele alıyoruz.

---

## Tanıma mı, Tenfiz mi? İkisi Arasındaki Kritik Fark

Bu iki kavram sıkça birbirine karıştırılır ve yanlış anlaşılması davanın yanlış türde açılmasına — dolayısıyla hak kayıplarına — yol açabilir.

### Tanıma Davası

Tanıma davası, yabancı bir mahkeme tarafından verilen kararın Türkiye'de **kesin hüküm** olarak kabul edilmesini sağlar. Yani Alman mahkemesinin verdiği boşanma kararı, tanıma davası sonucunda Türk mahkemesinin kararı ile eşdeğer hale gelir.

Almanya'daki boşanma kararı **yalnızca boşanmayı** içeriyorsa — velayet, nafaka, tazminat veya mal paylaşımı gibi icrai nitelikte ek hükümler yoksa — tanıma davası açmak yeterlidir. Tanıma kararı kesinleştikten sonra nüfus müdürlüğüne bildirim yapılır ve medeni haliniz "evli"den "boşanmış"a güncellenir.

### Tenfiz Davası

Tenfiz davası ise kararın yalnızca tanınmasından bir adım öteye geçer. Yabancı mahkeme kararının Türkiye'de **icra edilebilir** hale gelmesini sağlar. Almanya mahkemesi boşanmanın yanı sıra nafakaya, velayete, tazminata veya mal paylaşımına da hükmetmişse bu kararların Türkiye'de uygulanabilmesi için tenfiz zorunludur.

Tenfiz olmadan nafaka kararı Türkiye'de icraya konulamaz. Velayet kararı tanınmaz. Mal paylaşımı hükmü tapu müdürlüklerince işleme konulmaz.

### Uygulamada Ne Olur?

Almanya'daki boşanma kararlarının büyük çoğunluğu hem boşanma hükmünü hem de ek düzenlemeleri (nafaka, velayet vb.) birlikte içerir. Bu nedenle avukatınız genellikle her iki davayı da birlikte açar. Hangi davanın açılacağı tamamen kararın içeriğine bağlıdır ve her dosya ayrı değerlendirilmelidir.

---

## Tanıma ve Tenfiz Yapmazsanız Ne Olur?

Bu adımı ertelemek ya da atlamak, yıllar sonra ortaya çıkabilecek ciddi ve çoğu zaman telafisi güç sonuçlar doğurabilir:

**Medeni hal sorunu:** Türkiye nüfus kayıtlarında hâlâ evli görünürsünüz. Bu durum yeniden evlenmenizi engeller. Üstelik Almanya'daki Standesamt bile bazen yeniden evlenme başvurusunda Türk makamlarından evlenme ehliyet belgesi talep edebilir — bu belgede Türkiye'de boşanmış görünmüyorsanız evlenemezsiniz.

**Miras riski:** Boşandığınız eş, Türkiye'de yasal mirasçınız olmaya devam eder. Türkiye'de vefat etmeniz durumunda mülkleriniz, banka hesaplarınız ve diğer varlıklarınız bu kişiye intikal edebilir. Üstelik bu durumu kötüye kullanan ve veraset ilamı çıkartan vakalar mevcuttur.

**Mal ve mülk sorunları:** Türkiye'de gayrimenkulünüz, araziniz veya banka hesabınız varsa eski eşiniz bunlar üzerinde hak iddiasında bulunabilir. Tapu müdürlükleri ve bankalar, yabancı mahkeme kararını tanıma-tenfiz işlemi yapılmadan dikkate almaz.

**Nafaka ve velayet sorunları:** Almanya'da nafakaya veya velayete ilişkin mahkeme kararı aldıysanız bu kararlar Türkiye'de tenfiz edilmeden uygulanamaz. Eski eşinizin Türkiye'de malvarlığı varsa nafaka borcu bu yolla tahsil edilemez.

**Çocuklarla ilgili sorunlar:** Velayet kararı tenfiz edilmemişse çocuğunuzun Türkiye'deki pasaport başvurusu, seyahat izni ve okul kayıt işlemlerinde ciddi bürokratik engeller çıkabilir.

---

## Almanya'ya Özgü: Hangi Belgeler Gerekiyor?

Türkiye'deki avukatınızın mahkemeye sunması için Almanya'dan temin etmeniz gereken belgeler şunlardır. Bu belgelerin her birinin nasıl temin edileceği, Almanya'daki pek çok kişi için en büyük pratik sorundur.

### 1. Scheidungsurteil / Scheidungsbeschluss (Boşanma Kararı)

Almanya aile mahkemesinin verdiği boşanma kararının aslı. Karar, mühürlü ve ıslak imzalı olmalıdır. Kararın fotokopisi veya dijital baskısı kabul edilmez; ilgili aile mahkemesinden resmi suret talep etmeniz gerekir.

### 2. Rechtskraftvermerk (Kesinleşme Şerhi)

Bu, Almanya'ya özgü en kritik belge olup Türkiye'deki pek çok avukat tarafından yeteri kadar bilinmez. Kesinleşme şerhi, boşanma kararının artık itiraz edilemez hale geldiğini — yani kesinleştiğini — belgeleyen resmi nottur. Türk mahkemeleri bu şerh olmadan davayı kabul etmez, zira kesinleşmemiş bir karara dayanarak tanıma veya tenfiz kararı veremezler.

Rechtskraftvermerk'i boşanma kararını veren aile mahkemesinden talep edebilirsiniz. Mahkeme bu şerhi kararın arkasına ayrı bir sayfayla ekler.

### 3. Apostil Şerhi

Almanya, Lahey Apostil Sözleşmesi'ne taraf olduğundan belgelerinize apostil şerhi ekletmeniz mümkündür. Apostil, belgenin uluslararası düzeyde geçerliliğini onaylar ve Türkiye'de resmi olarak kabul edilmesini sağlar.

Apostil işlemi Almanya'da her eyaletin yetkili makamında (genellikle Oberlandesgericht veya Regierungspräsidium) yapılır. Baden-Württemberg'de, yani Mannheim'da yaşıyorsanız apostil işlemini Karlsruhe'deki Oberlandesgericht'ten yaptırabilirsiniz.

### 4. Yeminli Türkçe Tercüme

Tüm belgelerin Türkiye'de yetkilendirilmiş yeminli tercüman tarafından Türkçeye çevrilmesi ve noterce onaylanması zorunludur. Bu tercümeyi Almanya'dan Türkiye'deki tercümana göndermek mümkündür; tercüman noter kanalıyla onay alır.

### 5. Vekâletname

Türkiye'ye gitmeden davayı sürdürebilmek için avukatınıza **tanıma ve tenfiz** yetkisini açıkça içeren bir vekâletname vermeniz gerekir. Bu vekâletnameyi Almanya'daki herhangi bir noterde düzenlettirmeniz mümkündür. Vekâletnamede "tanıma ve tenfiz davası açma ve takip etme" yetkisinin açıkça belirtilmesi şarttır; genel yetkili vekâletname bazı mahkemeler tarafından yeterli kabul edilmeyebilir.

---

## Süreç Nasıl İşler? Adım Adım

### Adım 1 — Belgelerin Toplanması

Almanya'daki aile mahkemesinden Scheidungsurteil ve Rechtskraftvermerk belgelerini talep edersiniz. Belgelere apostil şerhi ekletirsiniz. Bu aşamada mahkeme bürokrasisi zaman alabilir; özellikle yoğun dönemlerde mahkemeden yanıt birkaç haftayı bulabilir.

### Adım 2 — Almanya'dan Vekâletname

Mannheim'daki veya bulunduğunuz şehirdeki Alman noterinde avukatınıza vekâletname düzenlenir. Türkiye've gitmenize gerek yoktur. Vekâletnameye tercüme ekletmeniz gerekip gerekmediğini noterden öğrenin; bazı Türk mahkemeleri apostilli Alman vekâletnamelerini doğrudan kabul ederken bazıları apostilli Türkçe çeviri de isteyebilir.

### Adım 3 — Yeminli Türkçe Tercüme

Scheidungsurteil, Rechtskraftvermerk ve diğer belgelerin tamamı Türkiye'de geçerli yeminli tercüman aracılığıyla Türkçeye çevrilir.

### Adım 4 — Dava Açılması

Avukatınız yetkili Türk aile mahkemesine tanıma ve/veya tenfiz davası açar. Yetkili mahkeme, davacının Türkiye'deki ikametine göre belirlenir. Türkiye'de sabit ikamet adresiniz yoksa dava İstanbul, Ankara veya İzmir mahkemelerinde açılabilir.

### Adım 5 — Tebligat Süreci

Davanın en uzun ve en belirsiz aşamasıdır. Mahkeme, karşı tarafa tebligat yapılmasını bekler. Karşı tarafın adresi biliniyorsa ve her iki taraf da avukatla temsil ediliyorsa bu aşama birkaç haftada tamamlanabilir. Karşı tarafın adresi bilinmiyorsa, yurt dışında yaşıyorsa veya tebligatı kasıtlı olarak almıyorsa süreç aylar hatta yıllar sürebilir. Bu nedenle tebligat adresinin doğru bildirilmesi kritik önem taşır.

### Adım 6 — Mahkeme Duruşmaları

Türkiye'ye gitmenize gerek yoktur; avukatınız tüm duruşmalara sizin adınıza katılır.

### Adım 7 — Karar ve Nüfus Kaydı

Mahkeme tanıma ve/veya tenfiz kararını verdikten sonra bu karar kesinleşir ve ilgili nüfus müdürlüğüne bildirim yapılır. Medeni haliniz "boşanmış" olarak güncellenir.

**Ortalama Süre:** Belgelerin eksiksiz olması ve her iki tarafın avukatla temsil edilmesi durumunda **3 ila 6 ay.** Tebligat sorunu yaşanırsa bu süre 12 aya kadar uzayabilir.

---

## Nüfus Müdürlüğü Yolu: Mahkemeye Gitmeden Tanıma Mümkün mü?

2017 yılında 5490 sayılı Nüfus Hizmetleri Kanunu'na eklenen maddeyle birlikte belirli koşullarda tanıma işlemi mahkeme kararına gerek olmaksızın nüfus müdürlüğü aracılığıyla da yapılabilir hale geldi. Bu önemli bir kolaylıktır ve pek çok kişi bu yolun farkında değildir.

### Nüfus Müdürlüğü Yolu Ne Zaman Geçerli?

Bu yol yalnızca aşağıdaki koşulların **tamamının** sağlanması durumunda mümkündür:

- Yabancı mahkeme kararı **yalnızca boşanmayı** içermelidir (nafaka, velayet veya tazminat gibi ek hükümler bulunmamalıdır)
- **Her iki taraf birlikte** nüfus müdürlüğüne başvurmalıdır
- Gerekli belgeler eksiksiz sunulmalıdır (apostilli boşanma kararı, kesinleşme şerhi, yeminli Türkçe tercüme)

### Nüfus Müdürlüğü Yolu Ne Zaman İşe Yaramaz?

Aşağıdaki durumlarda bu yol kapalıdır ve mahkeme davası zorunludur:

- Eski eşiniz birlikte başvurmak istemiyorsa
- Karar nafaka, velayet, tazminat veya mal paylaşımı hükmü içeriyorsa
- Nüfus müdürlüğü başvurunuzu reddettiyse (bu durumda yine mahkeme yoluna gidilir)

### Almanya'dan Nüfus Müdürlüğü Başvurusu

Türkiye'deki Türk konsolosluğu üzerinden de başvuru yapılabilmektedir. Ancak eski eşinizin koşullara uyması ve belgelerinizin eksiksiz olması gerektiğini unutmayın. Bu süreçte de bir avukattan destek almak, başvurunun reddedilmesi riskini azaltır.

---

## Mal Paylaşımı: Almanya'da Boşanma Sonrası Türkiye'deki Mülkler Ne Olur?

Almanya'da boşanan pek çok çiftin Türkiye'de gayrimenkulü, arazisi veya diğer varlıkları bulunmaktadır. Bu varlıkların paylaşımı, tanıma-tenfiz davasıyla doğrudan bağlantılıdır ve dikkatli yönetilmezse ciddi hak kayıplarına yol açabilir.

### Almanya Mahkemesi Mal Paylaşımına Karar Verdiyse

Alman mahkemesi boşanmayla birlikte mal paylaşımına da hükmettiyse bu kararın Türkiye'de uygulanabilmesi için **tenfiz davası** açılması zorunludur. Tenfiz kararı olmadan tapu müdürlükleri ve bankalar yabancı mahkeme kararını dikkate almaz. Türkiye'deki bir taşınmazın devri için dahi tenfiz şarttır.

### Almanya Mahkemesi Mal Paylaşımına Karar Vermediyse

Alman mahkemesi yalnızca boşanmaya hükmetmiş, Türkiye'deki mallara ilişkin bir düzenleme yapmamışsa durum farklıdır. Bu durumda Türkiye'de ayrı bir **mal rejiminin tasfiyesi davası** açılması gerekir. Ancak bu dava, boşanmanın önce Türkiye'de tanınmasını gerektirir.

Kritik bir zaman detayı: Türkiye'deki mal paylaşımında esas alınan tarih, Almanya'da **boşanma davasının açıldığı tarihtir.** Bu tarihten sonra edinilen mallar kapsam dışında kalır. Dolayısıyla tanıma davası ne kadar geç açılırsa mal paylaşımı kapsamı o kadar daralabilir.

### İhtiyati Tedbir: Eski Eşiniz Türkiye'deki Malları Satabilir mi?

Boşanma sürecinde ya da sonrasında Türkiye'deki mal varlıklarını korumak istiyorsanız **ihtiyati tedbir** kararı talep edebilirsiniz. Tanıma veya mal paylaşımı davası açıldığında mahkemeden taşınmazların tapu kaydına tedbir konulmasını talep edebilirsiniz. Bu tedbir, taşınmazın satışını, devrini ve üzerinde işlem yapılmasını engeller. Bu önlem özellikle eski eşin Türkiye'de yaşadığı durumlarda kritik önem taşır.

---

## Velayet: Almanya'daki Karar Türkiye'de Geçerli mi?

Çocuklarınız söz konusu olduğunda tanıma ve tenfiz meselesi çok daha hassas ve acil bir hal alır.

### Alman Mahkemesinin Velayet Kararı

Almanya'da aile mahkemesi velayeti ebeveynlerden birine ya da her ikisine birlikte vermişse bu karar Türkiye'de tenfiz edilmeden Türk makamlarınca tanınmaz. Tenfiz edilmemişse:

- Çocuğun Türkiye'deki pasaport başvurusu, diğer ebeveynin onayı olmadan yapılamaz
- Çocuğun Türkiye'ye seyahati için her iki ebeveynin de rızası aranır
- Yurt dışına çıkış yasağı veya çocuğun alıkonulması gibi durumlarla karşılaşılabilir

### Ortak Velayet

Almanya'da yaygın bir düzenleme olan ortak velayet kararı da Türkiye'de tenfiz yoluyla geçerli kılınabilir. Bu sayede her iki ebeveynin de Türkiye'deki işlemlerde hakkı korunmuş olur.

### Uluslararası Çocuk Kaçırma

Velayete sahip ebeveynin izni olmadan çocuğun Türkiye'ye götürülmesi, Türkiye ve Almanya'nın her ikisinin de taraf olduğu Lahey Sözleşmesi kapsamında uluslararası çocuk kaçırma sayılır. Bu durumlarda acil hukuki müdahale gereklidir.

---

## Nafaka: Almanya'daki Nafaka Kararını Türkiye'de Uygulayabilir misiniz?

Alman mahkemesi boşanmayla birlikte nafakaya hükmettiyse ve eski eşinizin Türkiye'de malvarlığı ya da geliri varsa, bu nafaka kararını Türkiye'de icra edebilirsiniz — **ancak tenfiz kararı almış olmanız şartıyla.**

### Hangi Nafaka Türleri Tenfize Konu Olur?

- **Yoksulluk nafakası:** Boşanan eşe bağlanan nafaka
- **İştirak nafakası:** Çocuk için bağlanan nafaka

Tenfiz davası açılırken boşanmanın kesinleşmemiş olduğu dönemde bağlanan tedbir nafakası tenfize konu edilemez; zira bu nafaka boşanma kesinleşmeden önce geçici olarak hüküm ifade eder.

### Nafaka Ödenmezse Ne Olur?

Tenfiz kararı aldıktan sonra nafaka icra dairesine başvurularak tahsil edilebilir. Eski eşinizin Türkiye'de banka hesabı, maaşı veya gayrimenkulü varsa bunlara haciz uygulanabilir. Türk hukukunda nafaka borcunu ödememeye **tazyik hapsi** uygulanabilir — bu, ciddi bir yaptırımdır.

### Eski Eş Türkiye'ye Kaçtıysa?

Bu, özellikle Almanya'da yaşayan kişilerin karşılaştığı bir senaryodur. Eski eşiniz Türkiye'ye taşındıysa veya kaçtıysa nafaka ve tazminat alacaklarınızı Türkiye'deki tenfiz davası ve ardından icra takibiyle takip etmeniz mümkündür. Bunun için yetkili bir avukat aracılığıyla ihtiyati tedbir talep etmek ve tenfiz davasını geciktirmeden açmak büyük önem taşır.

---

## Türkiye've Gitmeden Bu Davayı Açabilir misiniz?

**Evet.** Ve bu, Almanya'da yaşamanın sağladığı en büyük pratik avantajdır.

Türkiye'deki avukatınıza Almanya'daki noter aracılığıyla vekâletname verirseniz, dava süreci boyunca hiçbir duruşmaya bizzat katılmanız gerekmez. Avukatınız tüm işlemleri sizin adınıza yürütür.

Biz, UYAP sistemine kayıtlı avukat olarak dava dosyalarını gerçek zamanlı olarak Almanya'dan takip ediyoruz. Mahkeme günleri, belge durumu, tebligat aşaması — hepsini siz Mannheim'daki hayatınıza devam ederken biz Türkiye'deki mahkemelerde yönetiyoruz.

---

## Almanya'da Bir Avukattan Hizmet Almanın Farkı

Türkiye'deki bir hukuk bürosundan hizmet aldığınızda karşılaşabileceğiniz sorunlar:

- Almanya'daki belge süreçlerini tam bilmiyorlar. Rechtskraftvermerk nedir, Baden-Württemberg'de apostil nerede yaptırılır, Alman noterde vekâletname nasıl düzenlenir — bunlar Türkiye'den bilmesi güç pratik detaylardır.
- İletişim farkı: Türkçe yazışma, saat farkı, geri dönüş gecikmesi ve süreci takip edememe.
- Belge eksikliği nedeniyle dava uzar veya reddedilir.

**Mannheim'da bulunmamız şu anlama gelir:**

- Almanya'daki belge süreçlerini birlikte yürütürüz. Hangi mahkemeden ne alacaksınız, apostili nerede yaptırırsınız, Alman noterde vekâletname nasıl düzenlenir — hepsini sizinle adım adım çözüyoruz.
- **Çift baro üyeliğimiz var.** Ankara Barosu ve Karlsruhe Barosu'na (§207 BRAO) kayıtlıyız. Türkiye'deki mahkemelerde bizzat temsil ediyoruz; hiçbir aracı yok.
- **UYAP erişimimiz var.** Türk mahkemelerini Almanya'dan gerçek zamanlı takip ediyoruz. Duruşma tarihleri, tebligat durumu, karar aşaması — hepsini anlık görüyoruz.
- **Türkçe ve Almanca iletişim.** İki dilde de akıcı hizmet veriyoruz. Türkçe bilmiyorsanız ya da Almanca yazışmayı tercih ediyorsanız her iki şekilde de çalışıyoruz.
- **70+ Google değerlendirmesi, 5,0 yıldız.** Müvekkil memnuniyeti en iyi referansımızdır.

---

## Bir Sonraki Adımınız

Almanya'dan Türkiye'deki boşanma kararınızı tanıtmak için Türkiye'ye gitmenize, izin almanıza ya da yıllarca beklemenize gerek yok.

Belgelerinizi toparlayın, bize ulaşın — gerisini biz halledelim.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz.

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuzda yalnızca Türk hukuku alanında danışmanlık verilmektedir.*`,category:"Tanıma ve Tenfiz",categoryDE:"Scheidungsanerkennung",image:Em,dateDE:"11. April 2026",dateTR:"11 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-11",keywordsDE:"Scheidung in Deutschland Anerkennung Türkei, Tanıma Tenfiz davası belgeler, Türkisches Recht Mannheim, Unterhalt vollstrecken Türkei, Sorgerecht Türkei Anerkennung",keywordsTR:"Almanya boşanma tanıma tenfiz, kesinleşme şerhi nedir, tanıma tenfiz davası ne kadar sürer, yurt dışı boşanma nüfus kaydı, tanıma tenfiz avukatı ankara",faqDE:[{question:"Ich bin in Deutschland geschieden, gelte aber in der Türkei noch als verheiratet. Was muss ich tun?",answer:"Sie müssen beim türkischen Familiengericht eine Tanıma-Klage erheben. Dies ist kein neues Scheidungsverfahren, sondern ein eigenständiges Verfahren zur Anerkennung des deutschen Urteils. Eine Reise in die Türkei ist nicht erforderlich; der Prozess kann vollständig über eine Anwaltsvollmacht abgewickelt werden."},{question:"Kann ich die Klage alleine einreichen? Benötige ich die Zustimmung meines Ex-Partners?",answer:"Nein, die Mitwirkung des Ex-Partners ist nicht zwingend erforderlich. Die Klage kann einseitig eingereicht werden. Dem Ex-Partner wird die Klage zugestellt, er muss jedoch nicht am Verfahren teilnehmen. Wenn beide Parteien einverstanden sind und das Urteil nur die Scheidung betrifft, kann alternativ der Weg über das Standesamt geprüft werden."},{question:"Wie lange dauert ein Tanıma ve Tenfiz Verfahren?",answer:"Bei vollständigen Unterlagen und wenn beide Seiten anwaltlich vertreten sind, dauert es durchschnittlich 3-6 Monate. Wenn die Adresse der Gegenseite unbekannt ist oder Zustellungsprobleme auftreten, kann sich der Zeitraum auf bis zu 12 Monate verlängern."},{question:"Woher bekomme ich den Rechtskraftvermerk?",answer:"Diesen beantragen Sie schriftlich bei dem deutschen Familiengericht, das das Scheidungsurteil erlassen hat. Das Gericht stellt diesen Vermerk gegen eine Gebühr aus. Geben Sie unbedingt an, dass das Dokument mit einer Apostille versehen sein muss."},{question:"Kann ich mich aufgrund der Gesetzesänderung von 2017 an das Standesamt wenden?",answer:"Ja, wenn Sie nur ein Scheidungsurteil haben und beide Parteien den Antrag gemeinsam stellen können. Wenn jedoch zusätzliche Regelungen wie Sorgerecht, Unterhalt oder Entschädigung vorliegen oder der Ex-Partner nicht gemeinsam beantragen möchte, ist das gerichtliche Verfahren zwingend erforderlich."},{question:"Ich habe Immobilien in der Türkei, kann mein Ex-Partner diese verkaufen?",answer:"Vor Einleitung des Tanıma-Tenfiz-Verfahrens können Sie beim Gericht eine einstweilige Verfügung beantragen. Diese sorgt dafür, dass ein Sperrvermerk im Grundbuch eingetragen wird, der Verkauf, Übertragung und ähnliche Transaktionen verhindert."},{question:"Ich habe einen deutschen Staatsbürger in Deutschland geheiratet und mich vor einem deutschen Gericht scheiden lassen. Muss ich dieses Verfahren auch durchführen?",answer:"Ja. Wenn Sie die türkische Staatsangehörigkeit besitzen oder Inhaber der Blaue Karte (Mavi Kart) sind, gilt dies auch für Sie. Wenn Sie in Deutschland erneut heiraten möchten, kann das Standesamt eine türkische Ehefähigkeitsbescheinigung verlangen; wenn Sie in der Türkei nicht als geschieden geführt werden, können Sie nicht erneut heiraten."},{question:"Ich habe ein Unterhaltsurteil, aber mein Ex-Partner lebt in der Türkei und möchte nicht zahlen. Was kann ich tun?",answer:"Zunächst müssen Sie in der Türkei ein Tenfiz-Verfahren einleiten und anschließend das Vollstreckungsverfahren starten. Bankkonten, Gehalt oder Immobilien des Ex-Partners in der Türkei können gepfändet werden. Zudem kann bei Nichtzahlung von Unterhalt eine Beugehaft drohen."}],faqTR:[{question:"Almanya'da boşandım ama Türkiye'de evli görünüyorum. Ne yapmalıyım?",answer:"Türk aile mahkemesinde tanıma davası açmanız gerekiyor. Bu dava yeni bir boşanma davası değildir; Almanya'daki kararı Türkiye'de geçerli kılmak için açılan ayrı bir davadır. Türkiye'ye gitmenize gerek yok, avukat vekâletnamesiyle tüm süreç yürütülür."},{question:"Davayı tek başıma açabilir miyim? Eski eşimin onayı gerekiyor mu?",answer:"Hayır, eski eşinizin katılımı zorunlu değildir. Dava tek taraflı açılabilir. Eski eşinize tebligat yapılır ancak katılmak zorunda değildir. Eğer her iki taraf da anlaşmalıysa ve karar yalnızca boşanmayı içeriyorsa, mahkeme yerine nüfus müdürlüğü yolunu da değerlendirebilirsiniz."},{question:"Tanıma ve tenfiz davası ne kadar sürer?",answer:"Belgelerin eksiksiz olması ve her iki tarafın avukatla temsil edilmesi durumunda ortalama 3-6 ay sürer. Karşı tarafın adresi bilinmiyorsa ya da tebligat sorunları yaşanırsa bu süre 12 aya kadar uzayabilir."},{question:"Rechtskraftvermerk'i nereden alırım?",answer:"Boşanma kararını veren Alman aile mahkemesine yazılı olarak başvurarak talep edersiniz. Mahkeme bu şerhi ücret karşılığında düzenler. Alacağınız belgenin apostil şerhli olması gerektiğini de belirtin."},{question:"2017'de yapılan değişiklikle nüfus müdürlüğüne başvurabilir miyim?",answer:"Yalnızca boşanma kararı aldıysanız ve her iki taraf birlikte başvurabiliyorsa evet, nüfus müdürlüğü üzerinden işlem yapılabilir. Ancak velayet, nafaka veya tazminat gibi ek hükümler varsa ya da eski eşiniz birlikte başvurmak istemiyorsa mahkeme davası zorunludur."},{question:"Türkiye'de mülküm var, eski eşim satabilir mi?",answer:"Tanıma-tenfiz davası açılmadan önce mahkemeden ihtiyati tedbir kararı talep edebilirsiniz. Bu karar, taşınmazın tapu kaydına şerh düşülmesini sağlar ve satış, devir gibi işlemleri engeller."},{question:"Almanya'da bir Alman vatandaşıyla evlendim ve Alman mahkemesinde boşandım. Ben de bu davayı açmak zorunda mıyım?",answer:"Evet. Türk vatandaşlığınız varsa ya da Mavi Kart (eski Türk vatandaşı) sahibiyseniz bu işlem sizin için de geçerlidir. Almanya'da yeniden evlenmek istediğinizde Standesamt, Türk makamlarından evlenme ehliyet belgesi isteyebilir; bu belgede Türkiye'de boşanmış görünmüyorsanız evlenemezsiniz."},{question:"Nafaka kararım var ama eski eşim Türkiye'de yaşıyor ve ödemek istemiyor. Ne yapabilirim?",answer:"Önce Türkiye'de tenfiz davası açmanız, ardından icra takibi başlatmanız gerekir. Eski eşinizin Türkiye'deki banka hesaplarına, maaşına veya taşınmazlarına haciz uygulanabilir. Aynı zamanda nafaka borcunu ödememe halinde tazyik hapsi de söz konusu olabilir."}]},{slug:"veraset-ilami-nedir-nasil-alinir",slugDE:"erbschein-tuerkei-beantragen-verfahren",slugTR:"veraset-ilami-nedir-nasil-alinir",slugEN:"certificate-of-inheritance-turkey-how-to-get",titleDE:"Erbschein (Veraset İlamı) in der Türkei: Definition, Bedeutung und Verfahren",titleTR:"Veraset İlamı (Mirasçılık Belgesi): Nedir, Nasıl Alınır ve Önemi",excerptDE:"Was ist ein Erbschein in der Türkei? Erfahren Sie alles über den Antragsprozess für EU-Bürger, die Kosten und die rechtliche Bedeutung bei Immobilienübertagungen.",excerptTR:"Veraset ilamı nedir, nereden alınır? Noter ve mahkeme süreçleri, gerekli belgeler ve miras paylaşımındaki kritik önemi hakkında kapsamlı rehber.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Erbschein (Veraset İlamı): Definition und Bedeutung

Ein Erbschein ist ein offizielles Dokument, das nach dem Tod einer Person ausgestellt wird und angibt, wer die Erben sind und wie der Nachlass verteilt werden soll. Dieses Dokument spielt eine entscheidende Rolle bei der rechtlichen Übertragung des Erbes und trägt dazu bei, die Rechte der Erben zu schützen. Es ist von großer Bedeutung, um rechtliche Unsicherheiten bei Erbschaftstransaktionen zu beseitigen und die berechtigten Personen eindeutig zu identifizieren. Was also ist ein Erbschein, wie erhält man ihn und warum ist er so wichtig? In diesem Artikel finden Sie die Antworten auf diese Fragen und erfahren Einzelheiten über den rechtlichen Rahmen des Erbscheins.

---

## Was ist ein Erbschein?
Ein Erbschein ist ein rechtliches Dokument, das nach dem Tod einer Person erforderlich ist, um die hinterlassenen Güter und Rechte auf die rechtmäßigen Erben zu übertragen. Dieses Dokument wird erstellt, um mögliche Streitigkeiten unter den Erben zu vermeiden und eine gerechte Verteilung des Erbes zu gewährleisten. Transparenz und Gerechtigkeit bei der Übertragung des Erbes werden durch die Ausstellung eines Erbscheins ermöglicht. Der Erbschein ist eine Art offizielles Erbdokument, das festlegt, an wen und in welchem Verhältnis das Erbe verteilt wird, und dieses Dokument ist ein wichtiger Schritt zum Schutz der gesetzlichen Rechte der Erben.

### Rechtliche Grundlage des Erbscheins
Der Erbschein wird im Rahmen des türkischen Zivilgesetzbuchs und des Erbrechts geregelt. Diese Gesetze schreiben die Einholung eines Erbscheins vor, um die Erben zu bestimmen und das Erbe aufzuteilen, um sicherzustellen, dass das Erbe in Übereinstimmung mit den rechtlichen Verfahren übertragen wird. Während die Gesetze die Rechte der Erben schützen, zielen sie auch darauf ab, rechtliche Probleme zu verhindern, die bei der Übertragung des Erbes auftreten können. Der Erbschein, der eine rechtliche Grundlage hat, garantiert, dass Erbschaftstransaktionen auf einer offiziellen und legalen Basis durchgeführt werden.

---

## Wie bekommt man einen Erbschein?
Um einen Erbschein zu erhalten, müssen bestimmte Schritte befolgt werden. Dieser Prozess ist wichtig, um die Erben rechtlich anzuerkennen und sicherzustellen, dass das Erbe auf die richtigen Personen übertragen wird. Hier sind die grundlegenden Schritte, die Sie in diesem Prozess berücksichtigen sollten:

### Erforderliche Dokumente
Vor der Beantragung eines Erbscheins ist es wichtig, dass die erforderlichen Unterlagen vollständig vorbereitet sind. In der Regel werden Dokumente wie ein Auszug aus dem Personenstandsregister, eine Sterbeurkunde und ein Antragschreiben verlangt. Diese Dokumente sind notwendig, um die Identität der Erben und den Umfang des Erbes eindeutig festzustellen. Die korrekte und vollständige Vorbereitung der Dokumente ist entscheidend für die Beschleunigung des Antragsprozesses und die Vermeidung möglicher Probleme.

### Bewerbungsprozess
Ein Antrag auf Erteilung eines Erbscheins kann bei den zuständigen Gerichten oder Notaren gestellt werden. Im Allgemeinen ist das Friedensgericht am Wohnsitz des Antragstellers zuständig. Besteht unter den Erben kein Streit, ist das Verfahren schneller. Besteht jedoch ein Streit zwischen den Erben, entscheidet das Gericht nach einer eingehenden Prüfung. Die eingehende Prüfung durch das Gericht stellt sicher, dass die Rechte aller Parteien gerecht geschützt werden und das Erbe innerhalb des rechtlichen Rahmens übertragen wird.

### Gebühr für den Erbschein
Für die Erteilung eines Erbscheins ist eine Gebühr zu entrichten. Diese Gebühr kann je nach Ort des Antrags und der Anzahl der Dokumente variieren. Darüber hinaus kann für Transaktionen bei Notaren eine Notargebühr verlangt werden. Daher ist es wichtig, sich vor der Antragstellung über die aktuellen Gebühren zu informieren. Die Kenntnis der Gebühren ist wichtig für die Planung des Antragsprozesses und zur Vermeidung unerwarteter Kosten.

---

## Bedeutung des Erbscheins
Der Erbschein ist äußerst wichtig, damit Erbschaftstransaktionen im Einklang mit dem Gesetz ablaufen. Die Übertragung des Erbes innerhalb des rechtlichen Rahmens und der Schutz der Berechtigten werden durch die Einholung dieses Dokuments gewährleistet. Hier sind die Hauptgründe für die Bedeutung des Erbscheins:

### Bietet rechtliche Sicherheit
Der Erbschein stellt sicher, dass das Erbe innerhalb des rechtlichen Rahmens übertragen wird und trägt zum Schutz der Rechte der Erben bei. Dieses Dokument dokumentiert die Rechte der Erben und verhindert mögliche rechtliche Streitigkeiten. Die Gewährleistung von Rechtssicherheit stellt sicher, dass Erbschaftstransaktionen reibungslos ablaufen und stellt sicher, dass Erben nicht benachteiligt werden. Gleichzeitig ist es wichtig, um rechtliche Probleme zu verhindern, die bei der Übertragung des Erbes auftreten können.

### Gewährleistet eine gerechte Verteilung des Erbes
Der Erbschein sorgt für eine gerechte Verteilung des Erbes. Dieses Dokument legt fest, wer die Erben sind und zu welchem Anteil sie am Erbe beteiligt sind. Auf diese Weise werden mögliche Streitigkeiten unter den Erben vermieden. Eine gerechte Verteilung des Erbes spielt eine entscheidende Rolle für den Frieden in der Familie und die Vermeidung langfristiger Streitigkeiten unter den Erben.

---

## Beispiel für einen Erbschein
Da der Erbschein ein offizielles Dokument ist, wird er in einem bestimmten Format erstellt. Er enthält in der Regel Informationen wie die Daten der verstorbenen Person, die Identitätsdaten der Erben und die Verteilungsquoten des Erbes. Diese Informationen sind wichtig, um Transparenz und Klarheit bei der Übertragung des Erbes zu gewährleisten. Ein Beispiel für einen Erbschein könnte wie folgt aussehen:

VERASET İLAMIDIR (ERBSCHEIN)

Erblasser: Vorname Nachname, T.C. Identitätsnummer, Geburtsdatum, Sterbedatum

Erben:
1. Vorname Nachname, T.C. Identitätsnummer, Anteilquote
2. Vorname Nachname, T.C. Identitätsnummer, Anteilquote

Verteilung des Erbes: Es wird unter den oben genannten Erben in den festgelegten Anteilen verteilt.

Dieses Beispiel dient dazu, die Struktur eines Erbscheins zu verdeullichen. Ein echter Erbschein muss ein vom Gericht oder Notar beglaubigtes offizielles Dokument sein, und die offizielle Beglaubigung ist für die Gültigkeit des Dokuments unerlässlich.

---

## Fazit
Ein Erbschein ist notwendig, damit Erbschaftstransaktionen rechtmäßig und fair ablaufen. Die Gewährleistung des rechtlichen Rahmens bei der Übertragung des Erbes und der Schutz der Rechte der Erben werden durch die Einholung dieses Dokuments ermöglicht. Dieses Dokument schützt die Rechte der Erben und regelt gleichzeitig die Verteilung des Erbes. Es ist wichtig, die erforderlichen Dokumente für die Einholung des Erbscheins vorzubereiten und den Antragsprozess korrekt zu verfolgen. Um Streitigkeiten unter den Erben zu vermeiden und eine gerechte Verteilung des Erbes zu gewährleisten, ist die Einholung eines Erbscheins erforderlich. Die Wahrung von Gerechtigkeit und Recht bei Erbschaftstransaktionen ist durch die Einholung des Erbscheins möglich, und dieses Dokument spielt eine entscheidende Rolle bei der Übertragung des Erbes.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Veraset İlamı: Tanım ve Önemi

Veraset ilamı, bir kişinin vefatının ardından, mirasçılarının kimler olduğunu ve mirasın nasıl paylaştırılacağını belirten resmi bir belgedir. Bu belge, mirasın yasal olarak devredilmesi sürecinde kritik bir rol oynar ve mirasçıların haklarının korunmasına yardımcı olur. Miras işlemlerinde hukuki belirsizliklerin ortadan kalkması ve hak sahibi kişilerin net bir şekilde ortaya konulması açısından büyük bir önem taşır. Peki, veraset ilamı nedir, nasıl alınır ve neden bu kadar önemlidir? İşte bu makalede bu soruların yanıtlarını bulacaksınız ve veraset ilamının hukuki çerçevesine dair detayları öğreneceksiniz.

---

## Veraset İlamı Nedir?
Veraset ilamı, bir kişinin ölümünden sonra, geride bıraktığı malların ve hakların yasal mirasçılarına devredilmesi için gereken hukuki bir belgedir. Bu belge, mirasçılar arasında çıkabilecek olası anlaşmazlıkları önlemek ve mirasın adil bir şekilde dağıtılmasını sağlamak amacıyla düzenlenir. Mirasın devrinde şeffaflık ve adaletin sağlanması, veraset ilamının düzenlenmesiyle mümkün olur. Veraset ilamı, mirasın kimlere ve hangi oranlarda dağıtılacağını belirten bir tür resmi miras belgesidir ve bu belge, mirasçıların yasal haklarının korunmasına yönelik önemli bir adımdır.

### Veraset İlamının Hukuki Dayanağı
Veraset ilamı, Türk Medeni Kanunu ve Miras Hukuku çerçevesinde düzenlenir. Bu kanunlar, mirasın yasal süreçlere uygun bir şekilde devredilmesini sağlamak amacıyla, mirasçıların belirlenmesi ve mirasın paylaştırılması için veraset ilamının alınmasını zorunlu kılar. Kanunlar, mirasçıların haklarını korurken, aynı zamanda mirasın devrinde yaşanabilecek hukuki sorunları da önlemeyi amaçlar. Hukuki dayanağı olan veraset ilamı, miras işlemlerinin resmi ve yasal bir zeminde gerçekleştirilmesini garanti altına alır.

---

## Veraset İlamı Nasıl Alınır?
Veraset ilamı almak için belirli adımların izlenmesi gerekmektedir. Bu süreç, mirasçıların yasal olarak tanınması ve mirasın doğru kişilere devredilmesini sağlamak için önemlidir. İşte bu süreçte dikkate almanız gereken temel adımlar:

### Gerekli Belgeler
Veraset ilamı başvurusu yapmadan önce, gerekli belgelerin eksiksiz bir şekilde hazırlanması önemlidir. Genellikle, nüfus kayıt örneği, ölüm belgesi ve başvuru dilekçesi gibi belgeler talep edilir. Bu belgeler, mirasçılarının kimliğini ve mirasın kapsamını net bir şekilde ortaya koymak için gereklidir. Belgelerin doğru ve eksiksiz hazırlanması, başvuru sürecinin hızlandırılması ve olası aksaklıkların önüne geçilmesi açısından kritiktir.

### Başvuru Süreci
Veraset ilamı almak için başvuru, yetkili mahkemelere veya noterliklere yapılabilir. Genellikle, başvuru sahibinin ikametgahının bulunduğu yerdeki Sulh Hukuk Mahkemesi yetkilidir. Başvuru sırasında, mirasçılar arasında bir anlaşmazlık yoksa süreç daha hızlı ilerler. Ancak, mirasçıların arasında bir anlaşmazlık söz konusuysa, mahkeme detaylı bir inceleme yaparak karar verir. Mahkemenin yapacağı detaylı inceleme, tüm tarafların haklarının adil bir şekilde korunmasını ve mirasın yasal çerçevede devredilmesini sağlar.

### Veraset İlamı Ücreti
Veraset ilamı almak için ödenmesi gereken bir ücret bulunmaktadır. Bu ücret, başvurunun yapıldığı yere ve belge sayısına göre değişiklik gösterebilir. Ayrıca, noterliklerde yapılan işlemler için noter ücreti de talep edilebilir. Bu nedenle, başvuru öncesinde güncel ücretler hakkında bilgi almak önemlidir. Ücretlerin bilinmesi, başvuru sürecinin planlanması ve beklenmedik masraflarla karşılaşılmaması açısından önem taşır.

---

## Veraset İlamının Önemi
Veraset ilamı, miras işlemlerinin hukuka uygun bir şekilde gerçekleşmesi için son derece önemlidir. Mirasın yasal çerçevede devredilmesi ve hak sahiplerinin korunması, bu belgenin alınmasıyla sağlanır. İşte veraset ilamının başlıca önemi:

### Hukuki Güvence Sağlar
Veraset ilamı, mirasın yasal çerçevede devredilmesini sağlar ve mirasçıların haklarının korunmasına yardımcı olur. Bu belge, mirasçıların haklarını belgeleyerek, olası hukuki anlaşmazlıkların önüne geçer. Hukuki güvence sağlanması, miras işlemlerinin sorunsuz bir şekilde yürütülmesi ve mirasçıların mağduriyet yaşamamasını temin eder. Aynı zamanda, mirasın devrinde yaşanabilecek hukuki sorunların önlenmesi açısından da önemlidir.

### Mirasın Adil Paylaştırılmasını Sağlar
Veraset ilamı, mirasın adil bir şekilde paylaştırılmasını sağlar. Bu belge, mirasçıların kimler olduğunu ve hangi oranlarda mirastan pay alacaklarını belirler. Böylece, mirasçılar arasında çıkabilecek anlaşmazlıkların önüne geçilir. Mirasın adil bir şekilde paylaştırılması, aile içi huzurun sağlanması ve mirasçıların arasında uzun süreli anlaşmazlıkların önlenmesi açısından kritik bir rol oynar.

---

## Veraset İlamı Örneği
Veraset ilamı, resmi bir belge olduğu için belirli bir formatta hazırlanır. Genellikle, miras bırakan kişinin bilgileri, mirasçıların kimlik bilgileri ve mirasın paylaştırılma oranları gibi bilgileri içerir. Bu bilgiler, mirasın devrinde şeffaflık ve netlik sağlanması açısından önemlidir. Örnek bir veraset ilamı şu şekilde olabilir:

VERASET İLAMIDIR

Miras Bırakan: Adı Soyadı, T.C. Kimlik No, Doğum Tarihi, Ölüm Tarihi

Mirasçılar:
1. Adı Soyadı, T.C. Kimlik No, Pay Oranı
2. Adı Soyadı, T.C. Kimlik No, Pay Oranı

Mirasın Paylaştırılması: Yukarıda belirtilen mirasçılar arasında, belirlenen oranlarda paylaştırılacaktır.

Bu örnek, veraset ilamının nasıl bir yapıya sahip olduğunu göstermek amacıyla verilmiştir. Gerçek bir veraset ilamı, mahkeme veya noter tarafından onaylanmış resmi bir belge olmalıdır ve resmi onay, belgenin geçerliliği için esastır.

---

## Sonuç
Veraset ilamı, miras işlemlerinin hukuka uygun ve adil bir şekilde gerçekleşmesi için gereklidir. Mirasın devrinde hukuki çerçevenin sağlanması ve mirasçıların haklarının korunması, bu belgenin alınmasıyla mümkün olur. Bu belge, mirasçıların haklarını korurken, mirasın paylaştırılmasını da düzenler. Veraset ilamı almak için gerekli belgelerin hazırlanması ve başvuru sürecinin doğru bir şekilde takip edilmesi önemlidir. Mirasçılar arasında anlaşmazlıkların önüne geçmek ve mirasın adil bir şekilde dağıtılmasını sağlamak için veraset ilamının alınması gereklidir. Miras işlemlerinde adaletin ve hukukun gözetilmesi, veraset ilamının alınmasıyla mümkün olur ve bu belge, mirasın devrinde kritik bir rol oynar.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Fb,dateDE:"11. April 2026",dateTR:"11 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-11",keywordsDE:"Erbschein Türkei beantragen, Veraset Ilami Kosten, türkisches Erbrecht für Deutsche, Immobilienüberschreibung Türkei Erbe, Anwalt Mannheim türkisches Recht",keywordsTR:"veraset ilamı nasıl alınır, veraset ilamı örneği, veraset ilamı ücreti 2026, mirasçılık belgesi nereden alınır, e-devlet veraset ilamı sorgulama",faqDE:[{question:"Müssen alle Erben gemeinsam den türkischen Erbschein beantragen?",answer:"Nein. Jeder gesetzliche Erbe kann den Erbschein (Veraset İlamı) einzeln beim Notar oder beim zuständigen Friedenszivilgericht in der Türkei beantragen. Das ausgestellte Dokument weist dann alle berechtigten Erben und deren Anteile aus."},{question:"Gilt ein deutscher Erbschein auch in der Türkei?",answer:"Ein deutscher Erbschein entfaltet in der Türkei keine automatische Wirkung. Da die Türkei kein Mitglied der EU-Erbrechtsverordnung ist, muss für Immobilien in der Türkei entweder ein neuer türkischer Erbschein beantragt oder der deutsche Erbeschein in einem Anerkennungsverfahren (Tenfiz) gerichtlich bestätigt werden."},{question:"Wie lange dauert es, einen Erbschein in der Türkei zu erhalten?",answer:"Wenn keine Unstimmigkeiten vorliegen und alle Erben im türkischen Personenstandsregister eingetragen sind, kann der Erbschein bei einem Notar in wenigen Minuten ausgestellt werden. Muss ein Gericht entscheiden (z.B. bei Auslandsbezug), kann das Verfahren einige Wochen bis Monate dauern."}],faqTR:[{question:"Veraset ilamı almak için tüm mirasçıların başvurusu gerekir mi?",answer:"Hayır. Mirasçılardan herhangi biri tek başına başvurarak tüm mirasçıları gösteren mirasçılık belgesini alabilir. Diğer mirasçıların bizzat bulunmasına veya onayına gerek yoktur."},{question:"Noterden veraset ilamı alınamazsa ne yapılmalıdır?",answer:"Eğer mirasçılar arasında soybağı uyuşmazlığı varsa veya mirasçılardan biri yabancı uyruklu ise noterler belge veremez. Bu durumda 'hasımlı' veya 'hasımsız' veraset davası açmak üzere Sulh Hukuk Mahkemesine başvurulmalıdır."},{question:"E-devletten alınan veraset ilamı resmi işlemlerde geçerli mi?",answer:"Evet. E-devlet üzerinden 'Veraset İlamı Sorgulama' yapılarak alınan barkodlu belgeler, mahkemeler ve bankalar dahil birçok resmi kurumda geçerli bir belge olarak kabul edilmektedir."}]},{slug:"mavi-kart-turkiye-miras-tasinmaz-haklari",slugDE:"blaue-karte-tuerkei-erbrecht-immobilien",slugTR:"mavi-kart-turkiye-miras-tasinmaz-haklari",slugEN:"blue-card-turkey-inheritance-property-rights",titleDE:"Erbrecht und Immobilienrechte von Inhabern der Blauen Karte in der Türkei | Update 2026",titleTR:"Mavi Kart Sahiplerinin Türkiye'deki Miras ve Taşınmaz Hakları | 2026 Güncel",excerptDE:"Haben Sie die deutsche Staatsbürgerschaft angenommen, besitzen aber eine Blaue Karte (Mavi Kart)? Ihre Rechte auf Erbe und Immobilien in der Türkei bleiben gewahrt. Wir erklären Ihnen die Details.",excerptTR:"Alman vatandaşlığına geçtiniz ama mavi kartınız var mı? Türkiye'deki miras, tapu ve velayet haklarınız korunuyor. Yargıtay kararlarıyla açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Erbrecht und Immobilienrechte von Inhabern der Blauen Karte in der Türkei

### Einleitung: Ihre Rechte sind sicher
Die größte Sorge vieler Mitbürger, die die deutsche Staatsbürgerschaft angenommen haben und Inhaber einer Blauen Karte (Mavi Kart) sind, ist, ob ihre Erbrechte und die Befugnis zum Immobilienerwerb in der Türkei fortbestehen. In diesem Leitfaden klären wir die Situation auf Basis des türkischen Staatsbürgerschaftsgesetzes Nr. 5901.

---

### 1. Was ist die Blaue Karte? Rechtlicher Status
Die Blaue Karte ist ein Dokument für Personen, die mit staatlicher Genehmigung aus der türkischen Staatsbürgerschaft ausgeschieden sind. Inhaber der Blauen Karte können in der Türkei:
- Immobilien erwerben (auch durch Erbe)
- Erbrechte vollumfänglich wahrnehmen
- Gewerblich tätig sein und das Arbeitsrecht nutzen.

Ausgenommen sind politische Rechte wie das Wahlrecht oder der Dienst im Staatsdienst.

---

### 2. Das Erbrecht: Voller Schutz
Inhaber einer Blauen Karte genießen in der Türkei exakt dieselben Erbrechte wie türkische Staatsbürger. Sie können Erbscheine beantragen und Klagen auf Erbteilung erheben. Es gibt hierbei keinerlei Beschränkungen.

---

### 3. Immobilienerwerb und Ausnahmen
Während der Landerwerb durch Ausländer nach Art. 35 des Grundbuchgesetzes beschränkt ist, sind **Inhaber der Blauen Karte von diesen Beschränkungen befreit**. Hindernisse wie das Gegenseitigkeitsprinzip oder Einschränkungen in militärischen Sperrzonen gelten für sie nicht.

---

### 4. Erbschafts- und Schenkungssteuer (2026)
Auch Inhaber der Blauen Karte unterliegen der Erbschaftssteuer. Personen mit Wohnsitz im Ausland müssen die Steuererklärung innerhalb von 6 Monaten nach dem Tod des Erblassers abgeben.

> **Aktuelles Update 2026:**
> Erbschaften an Ehegatten und Kinder sind bis zu einem Betrag von ca. **2.316.628 TL** steuerfrei. Für darüber hinausgehende Beträge fällt eine gestaffelte Steuer (1-10 %) an.

---

### 5. Häufig gestellte Fragen (FAQ)

**Ich habe eine Blaue Karte, werde aber bei E-Devlet als Ausländer geführt. Was soll ich tun?**
Dies liegt meist an einem veralteten Personenstandsregister. Sie müssen bei einem Standesamt in der Türkei beantragen, dass Ihre Daten in das "Register für Inhaber der Blauen Karte" übernommen werden.

**Verliere ich mein Erbe, wenn ich die deutsche Staatsbürgerschaft annehme?**
Nein. Solange Sie eine Blaue Karte besitzen, hat die Staatsbürgerschaft zum Zeitpunkt des Todes des Erblassers keinen Einfluss auf Ihre gesetzlichen Ansprüche.

**Können Inhaber der Blauen Karte Konten in der Türkei eröffnen?**
Ja. Die Blaue Karte wird von allen türkischen Banken als offizieller Identitätsnachweis akzeptiert.

---

### 6. Verteidigen Sie Ihre Rechte professionell
Obwohl die Blaue Karte Ihre Rechte weitgehend schützt, erfordern die praktische Umsetzung bei Grundbuchämtern und die Steuererklärungen Fachwissen. Die Doğru Kanzlei verwaltet diesen Prozess transparent mit Anwälten, die sowohl in Deutschland als auch in der Türkei zugelassen sind.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Mavi Kart Sahiplerinin Türkiye'deki Miras ve Taşınmaz Hakları

### Giriş: Haklarınız Koruma Altında
Alman vatandaşlığına geçen ancak mavi kart (eski pembe kart) sahibi olan vatandaşlarımızın en büyük endişesi, Türkiye'deki miras haklarının ve taşınmaz edinme yetkilerinin devam edip etmediğidir. Bu rehberde, 5901 sayılı Türk Vatandaşlığı Kanunu çerçevesinde konuyu netleştiriyoruz.

---

### 1. Mavi Kart Nedir? Hukuki Statüsü
Mavi kart, çıkma izni alarak Türk vatandaşlığını kaybeden kişilere verilen ve belirli hakları saklı tutan bir belgedir. Mavi kart sahipleri, Türkiye'de:
- Taşınmaz mal edinebilir (miras dahil)
- Miras hakkından yararlanabilir
- Ticari faaliyette bulunabilir ve çalışma hakkından yararlanabilir.

Seçme-seçilme ve kamu görevi gibi haklar ise kapsam dışıdır.

---

### 2. Miras Hakkı: Tam Koruma
Mavi kart sahibi kişiler, Türkiye'deki miras haklarını aynen Türk vatandaşları gibi kullanabilirler. Veraset ilamı çıkarabilir ve miras paylaşımı davası açabilirler. Bu konuda herhangi bir kısıtlama yoktur.

---

### 3. Taşınmaz Edinme ve Muafiyetler
Yabancı gerçek kişilerin Türkiye'de taşınmaz edinmesi Tapu Kanunu m.35 ile sınırlandırılmış olsa da, **mavi kart sahipleri bu kısıtlamalardan muaftır**. Mütekabiliyet (karşılıklılık) veya askeri yasak bölge gibi yabancılara uygulanan engeller mavi kartlılara uygulanmaz.

---

### 4. Veraset ve İntikal Vergisi (2026)
Mavi kart sahipleri de miras vergisine tabidir. Murisin vefatından itibaren yurt dışında ikamet edenler için 6 ay içinde beyanname verilmelidir. 

> **2026 Güncel Bilgi:**
> Eş ve çocuklara intikal eden mirasın yaklaşık **2.316.628 TL**'sine kadar olan kısmı vergiden muaftır. Bu sınırı aşan kısım için kademeli vergi (%1-10) uygulanır.

---

### 5. Sıkça Sorulan Sorular

**Mavi kartım var ama e-devlette yabancı görünüyorum, ne yapmalıyım?**
Bu durum genellikle nüfus kaydınızın güncellenmemesinden kaynaklanır. Türkiye'deki nüfus müdürlüğüne başvurarak kaydınızı "mavi kartlılar kütüğüne" aldırmanız gerekmektedir.

**Alman vatandaşı olduktan sonra kalan mirasım için hak kaybım olur mu?**
Hayır. Mavi kartınız olduğu sürece, miras bırakanın vefat tarihinde Türk vatandaşı olup olmamanız haklarınızı etkilemez.

**Mavi kart sahipleri Türkiye'de banka hesabı açabilir mi?**
Evet. Mavi kart, Türkiye'deki tüm bankalarda resmi kimlik belgesi olarak kabul edilmektedir.

---

### 6. Haklarınızı Profesyonelce Savunun
Mavi kart sahipliği haklarınızı büyük ölçüde korusa da, tapu müdürlüklerindeki pratik uygulamalar ve vergi beyannameleri uzmanlık gerektirir. Doğru Kanzlei olarak, hem Almanya hem de Türkiye barosuna kayıtlı avukatlarımızla tüm süreci şeffafça yönetiyoruz.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Yb,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Mavi Kart Erbrecht, Blaue Karte Immobilienübertragung, deutscher Staatsbürger Erbe Türkei, Rechte Blaue Karte Türkei 2026, türkischer Anwalt Mannheim",keywordsTR:"mavi kart miras hakkı, mavi kart tapu devri, Alman vatandaşı Türkiye miras, mavi kart Türkiye hakları 2026, Mannheim Türk avukat",faqDE:[{question:"Was ist die Mavi Kart und welche Rechte gewährt sie in der Türkei?",answer:"Die Mavi Kart (früher Pembe Kart) ist ein Dokument für Personen, die die türkische Staatsbürgerschaft mit Genehmigung aufgegeben haben. Sie sichert bestimmte Rechte in der Türkei: Immobilienerwerb (einschließlich Erbschaft), Erbrechte, gewerbliche Tätigkeit und Beschäftigung. Ausgeschlossen sind politische Rechte wie Wahlrecht und öffentliche Ämter."},{question:"Haben Mavi-Kart-Inhaber in der Türkei volle Erbrechte?",answer:"Ja, vollständig. Mavi-Kart-Inhaber können Erbrechte in der Türkei genauso geltend machen wie türkische Staatsangehörige. Sie können einen Erbschein (veraset ilamı) ausstellen lassen und Erbschaftsstreitigkeiten gerichtlich klären — ohne jede Einschränkung aufgrund der aufgegebenen Staatsbürgerschaft."},{question:"Können Mavi-Kart-Inhaber in der Türkei Immobilien erwerben?",answer:"Ja. Obwohl der Immobilienerwerb für Ausländer in der Türkei durch Art. 35 des Grundbuchgesetzes eingeschränkt ist, sind Mavi-Kart-Inhaber von diesen Beschränkungen ausgenommen. Für sie gelten weder das Gegenseitigkeitsprinzip noch die Verbotszonen für Ausländer."},{question:"Verliere ich meine Erbrechte in der Türkei, wenn ich die deutsche Staatsbürgerschaft angenommen habe?",answer:"Nein — sofern Sie eine Mavi Kart besitzen. Der Zeitpunkt des Staatsangehörigkeitswechsels spielt keine Rolle. Solange Ihre Mavi Kart gültig ist, bleiben Ihre Erbrechte in der Türkei vollständig erhalten, unabhängig davon, ob Sie zum Zeitpunkt des Todes des Erblassers türkischer Staatsbürger waren oder nicht."},{question:"Welche Erbschaftssteuer gilt 2026 für Mavi-Kart-Inhaber in der Türkei?",answer:"Mavi-Kart-Inhaber unterliegen der türkischen Erbschaft- und Schenkungsteuer. Für im Ausland ansässige Erben gilt eine Erklärungsfrist von 6 Monaten ab dem Todestag des Erblassers. Im Jahr 2026 sind Erbschaften an Ehegatten und Kinder bis zu einem Betrag von ca. 2.316.628 TL steuerfrei. Darüber hinausgehende Beträge werden progressiv mit 1 bis 10 % besteuert."},{question:"Was ist zu tun, wenn ich im türkischen E-Devlet-Portal als Ausländer geführt werde, obwohl ich eine Mavi Kart habe?",answer:"Das liegt in der Regel daran, dass Ihre Meldedaten nicht aktualisiert wurden. Sie müssen sich beim zuständigen Standesamt in der Türkei (nüfus müdürlüğü) melden und Ihre Eintragung in das Mavi-Kart-Register beantragen. Ohne diese Korrektur können praktische Schwierigkeiten beim Zugang zu Behördenportalen und bei Immobilientransaktionen entstehen."},{question:"Können Mavi-Kart-Inhaber in der Türkei ein Bankkonto eröffnen?",answer:"Ja. Die Mavi Kart wird von allen Banken in der Türkei als offizielles Ausweisdokument anerkannt und berechtigt zur Eröffnung eines Bankkontos."}],faqTR:[{question:"Mavi Kart nedir ve Türkiye'de hangi hakları sağlar?",answer:"Mavi Kart, Türk vatandaşlığından izinle ayrılanlara verilen bir belgedir. Türkiye'de taşınmaz edinme (miras dahil), miras hakları, ticari faaliyet ve çalışma hakkı gibi hakları saklı tutar. Siyasi haklar (seçme-seçilme) kapsam dışıdır."},{question:"Mavi Kart sahiplerinin tam miras hakkı var mıdır?",answer:"Evet. Mavi Kart sahipleri Türkiye'deki miras haklarını aynen Türk vatandaşları gibi kullanabilirler. Veraset ilamı çıkarabilir ve miras paylaşımı yapabilirler."},{question:"Mavi Kart sahipleri Türkiye'de gayrimenkul alabilir mi?",answer:"Evet. Yabancılara uygulanan kısıtlamalardan (mütekabiliyet, yasak bölgeler vb.) muaftırlar ve diledikleri gibi taşınmaz edinebilirler."},{question:"Alman vatandaşı olursam Türkiye'deki miras haklarım kaybolur mu?",answer:"Hayır. Mavi Kartınız olduğu sürece miras haklarınız tam olarak korunur. Vefat tarihinde Türk vatandaşı olup olmamanız haklarınızı etkilemez."},{question:"2026 yılında Mavi Kartlılar için miras vergisi nasıldır?",answer:"Mavi Kartlılar da vergiye tabidir. 2026 yılı için eş ve çocuklara kalan mirasın yaklaşık 2.316.628 TL'si muaftır. Aşan kısım ise %1-%10 arası kademeli vergilendirilir."},{question:"E-devlette yabancı görünüyorum, ne yapmalıyım?",answer:"Bu durum kayıtlarınızın güncel olmadığını gösterir. Türkiye'deki nüfus müdürlüğüne başvurarak 'Mavi Kartlılar Kütüğü'ne kaydınızı yaptırmanız gerekir."},{question:"Mavi Kart ile Türkiye'de banka hesabı açılabilir mi?",answer:"Evet. Mavi Kart, Türkiye'deki tüm bankalarca resmi kimlik belgesi olarak kabul edilmektedir."}]},{slug:"turkiye-ceza-davasi-almanya-savunma",slugDE:"strafverfahren-tuerkei-verteidigung-deutschland",slugTR:"turkiye-ceza-davasi-almanya-savunma",slugEN:"criminal-defense-turkey-from-germany",titleDE:"Strafverfahren in der Türkei eröffnet? Verteidigungsratgeber aus Deutschland",titleTR:"Türkiye'de Hakkınızda Ceza Davası mı Açıldı? Almanya'dan Savunma Rehberi",excerptDE:"Wurde in der Türkei ein Strafverfahren gegen Sie eingeleitet? Erfahren Sie alles über Ihre Verteidigungsrechte, die Vertretung ohne Anwesenheit und Interpol-Red-Notice-Verfahren. Direkte Hilfe aus Mannheim.",excerptTR:"Almanya'dayken Türkiye'de hakkınızda ceza davası açıldı mı? Savunma haklarınız, duruşmaya katılmadan müdafaa ve Interpol red notice süreci. Yargıtay kararlarıyla.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Strafverfahren in der Türkei eröffnet? Verteidigungsratgeber aus Deutschland

### Einleitung: Wenn Sie in Deutschland Post von türkischen Behörden erhalten
Nicht selten entdecken in Deutschland lebende türkische Staatsbürger erst bei einer Reise in die Türkei oder über das Online-Portal UYAP, dass gegen sie ein Strafverfahren eingeleitet wurde. In diesem Leitfaden erklären wir, wie Sie Ihr Strafverfahren in der Türkei von Deutschland aus steuern können und welche Verteidigungsrechte Sie haben.

---

### 1. Das Zustellungsproblem: Verfahren ohne Ihr Wissen
Nach der türkischen Strafprozessordnung (CMK) müssen Zustellungen an im Ausland lebende Personen auf diplomatischem Weg erfolgen. Dennoch führen viele Gerichte Verfahren fort, ohne die korrekte Auslandszustellung abzuwarten.

> **Yargıtay 4. Ceza Dairesi, 2021/17832 E.:**
> "Obwohl bekannt war, dass der Angeklagte im Ausland lebt, stellt die Fortsetzung des Verfahrens ohne ordnungsgemäße Auslandszustellung eine Verletzung des Verteidigungsrechts dar und ist ein absoluter Revisionsgrund."

---

### 2. Verteidigung aus Deutschland: Vertretung ohne persönliche Anwesenheit
Im türkischen Strafrecht kann bei Straftaten mit einer Mindeststrafe von unter 5 Jahren auf Antrag des Angeklagten das Verfahren ohne dessen persönliche Anwesenheit durchgeführt werden. In schwerwiegenderen Fällen kann eine Aussage per Videokonferenz (SEGBİS) aus Deutschland beantragt werden.

---

### 3. Interpol-Red-Notice: Das Risiko internationaler Fahndung
Wurde ein Haftbefehl erlassen, besteht das Risiko, dass dieser über Interpol zur internationalen Fahndung (Red Notice) ausgeschrieben wird. Gegen politisch motivierte oder rechtlich mangelhafte Ersuche gibt es Einspruchsmöglichkeiten bei der Interpol CCF (Commission for the Control of Files).

---

### 4. Verjährung und Verfahrenseinstellung
Nach dem türkischen Strafgesetzbuch (TCK) führt der Ablauf der Verjährungsfrist zur Einstellung des Verfahrens. Für im Ausland lebende Angeklagte ist es entscheidend, dass ihr Anwalt die Verjährungsfristen kontinuierlich überwacht und bei Ablauf sofort die Einstellung beantragt.

---

### 5. Häufig gestellte Fragen (FAQ)

**Muss ich zur Verteidigung in die Türkei reisen?**
In vielen Fällen reicht eine Verteidigung durch Ihren Anwalt aus. Falls eine persönliche Aussage erforderlich ist, kann diese oft per Videokonferenz (SEGBİS) aus Deutschland erfolgen.

**Wie erfahre ich, ob gegen mich ein Haftbefehl vorliegt?**
Dies kann über das UYAP-Portal veya durch eine Akteneinsicht Ihres bevollmächtigten Anwalts in der Türkei geklärt werden.

**Kann ein vor Jahren abgeschlossenes Verfahren wieder aufgenommen werden?**
Wenn eine Verurteilung ohne Ihr Wissen (in Abwesenheit) erfolgt ist, gibt es Möglichkeiten der "Wiedereinsetzung in den vorherigen Stand" und der Wiederaufnahme des Verfahrens.

---

### 6. Die Expertise der Doğru Kanzlei im Strafrecht
Unser Kanzleigründer **Hasan Doğru** war vor seiner juristischen Karriere rund 10 Jahre lang als Mitglied einer **Spezialeinheit** (Özel Harekat) im türkischen Generaldirektorat für Sicherheit tätig. Diese praktische Erfahrung bietet uns tiefgreifende Einblicke in polizeiliche Ermittlungstechniken und behördliche Abläufe, was uns ermöglicht, hocheffektive Verteidigungsstrategien zu entwickeln.

Durch unsere Zulassungen bei der Anwaltskamer Ankara und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) verfolgen wir Ihre Strafverfahren in der Türkei direkt und ohne Zwischenschaltung Dritter.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Türkiye'de Hakkınızda Ceza Davası Açıldı mı? Almanya'dan Savunma Rehberi

### Giriş: Almanya'da Yaşarken Türkiye'den Gelen Tebligat
Almanya'da yaşayan Türk vatandaşlarının bir kısmı, Türkiye'ye seyahat ettiklerinde veya UYAP portalından yaptıkları sorgulamada, haklarında açılmış bir ceza davası olduğunu keşfeder. Bu rehberde, Almanya'dan Türkiye'deki ceza davanızı nasıl takip edebileceğinizi ve savunma haklarınızı açıklıyoruz.

---

### 1. Tebligat Sorunu: Davayı Hiç Bilmeyebilirsiniz
CMK m.145 uyarınca, yurt dışında yaşayan sanıklara tebligat diplomatik yoldan yapılmalıdır. Ancak birçok mahkeme usulüne uygun tebligat yapmadan yargılamaya devam edebilmektedir.

> **Yargıtay 4. Ceza Dairesi, 2021/17832 E.:**
> "Sanığın yurt dışında ikamet ettiği bilinmesine rağmen, usulüne uygun yurt dışı tebligatı yapılmadan yargılamaya devam edilmesi, savunma hakkının ihlalidir ve mutlak bozma sebebidir."

---

### 2. Almanya'dan Müdafii Tayin Etme
Türk ceza yargılamasında, alt sınırı 5 yıldan az hapis cezasını gerektiren suçlarda, sanığın talebi üzerine duruşmaya bizzat katılmadan avukat aracılığıyla savunma yapılabilir. Ağır ceza davaları içinse SEGBİS ile uzaktan katılım talep edilebilir.

---

### 3. Interpol Kırmızı Bülten Riski
Hakkınızda yakalama kararı çıkarıldıysa, bu kararın Interpol aracılığıyla uluslararası aranmaya (Kırmızı Bülten) dönüşme riski vardır. Siyasi motivasyonlu veya hukuki standartlara uymayan taleplere karşı Interpol CCF nezdinde itiraz mekanizması mevcuttur.

---

### 4. Zamanaşımı ve Düşme Kararı
Dava zamanaşımı süresinin dolması halinde mahkeme düşme kararı verir. Almanya'da yaşayan sanıklar için avukatlarının zamanaşımını sürekli takip etmesi hayati önem taşır.

---

### 5. Sıkça Sorulan Sorular

**Davadan kurtulmak için Türkiye'ye gitmem şart mı?**
Birçok suç türünde avukatınız aracılığıyla sunacağınız savunma yeterli olmaktadır. Bizzat katılımın şart olduğu hallerde ise SEGBİS (video konferans) ile Almanya'dan ifade verebilirsiniz.

**Hakkımda yakalama kararı olup olmadığını nasıl öğrenirim?**
UYAP Vatandaş Portal üzerinden veya vekalet vereceğiniz bir avukat aracılığıyla dosya sorgulaması yapılarak öğrenilebilir.

**Yıllar önce kapanmış bir dava yeniden açılabilir mi?**
Gıyabınızda (habersizce) verilen bir mahkumiyet kararı varsa, "eski hale getirme" ve "yargılamanın yenilenmesi" yollarıyla dava yeniden görülebilir.

---

### 6. Doğru Kanzlei'nin Ceza Hukuku Deneyimi
Kurucu avukatımız **Hasan Doğru**, hukuk kariyeri öncesinde yaklaşık 10 yıl boyunca Türk Emniyet Genel Müdürlüğü bünyesinde **Özel Harekat** birimi mensubu olarak görev yapmıştır. Bu deneyim, kolluk uygulamaları ve soruşturma tekniklerine dair derinlemesine bilgi sağlayarak savunma stratejilerimize eşsiz bir güç katmaktadır.

Ankara Barosu üyeliğimiz ve Karlsruhe Barosu kaydımız sayesinde Türkiye'deki ceza davalarınızı bizzat takip ediyoruz.`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:Dm,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"9 Min. Lesezeit",readTimeTR:"9 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Strafrecht Türkei Deutschland, Verteidigung aus Deutschland, Interpol Roteckene, Türkisches Strafrecht Mannheim, Anwalt Strafrecht Deutschland",keywordsTR:"Türkiye ceza davası Almanya, Almanya'dan Türkiye savunma, Interpol kırmızı bülten, Türk ceza hukuku Mannheim, ceza davası avukat Almanya",faqDE:[{question:"Muss ich für mein Strafverfahren in der Türkei persönlich erscheinen?",answer:"In vielen Fällen nicht. Bei Straftaten mit einem Strafrahmen unter 5 Jahren Freiheitsstrafe kann die Verteidigung auf Antrag vollständig durch einen Anwalt geführt werden, ohne dass der Angeklagte persönlich erscheinen muss. Bei schwerwiegenderen Verfahren besteht die Möglichkeit, per SEGBİS (Videokonferenz) aus Deutschland an der Verhandlung teilzunehmen."},{question:"Wie erfahre ich, ob in der Türkei ein Strafverfahren gegen mich läuft?",answer:"Sie können den Stand Ihrer Akte über das UYAP-Bürgerportal abfragen oder einen Anwalt bevollmächtigen, der die Abfrage in Ihrem Namen durchführt. Viele in Deutschland lebende türkische Staatsangehörige erfahren von einem Verfahren erst bei der Einreise in die Türkei oder bei einer routinemäßigen Abfrage."},{question:"Was passiert, wenn ich nie über mein türkisches Strafverfahren informiert wurde?",answer:"Nach CMK Art. 145 muss die Zustellung an im Ausland lebende Angeklagte auf diplomatischem Weg erfolgen. Laut Yargıtay (4. Strafkammer, 2021/17832 E.) stellt eine Fortsetzung des Verfahrens ohne ordnungsgemäße Auslandszustellung eine Verletzung des Rechts auf Verteidigung dar und ist ein absoluter Revisionsgrund. Ein ergangenes Urteil kann daher angefochten werden."},{question:"Besteht das Risiko einer Interpol-Fahndung, wenn gegen mich ein türkischer Haftbefehl vorliegt?",answer:"Ja. Ein türkischer Haftbefehl kann in eine internationale Fahndung über Interpol (Red Notice) umgewandelt werden. Bei politisch motivierten oder rechtsstaatswidrigen Ersuchen besteht jedoch die Möglichkeit, beim Interpol-Kontrollgremium (CCF) Beschwerde einzulegen und die Löschung der Red Notice zu beantragen."},{question:"Kann ein abgeschlossenes türkisches Strafverfahren wieder aufgerollt werden?",answer:"Ja. Wurde ein Urteil in Abwesenheit des Angeklagten (gıyabi) gefällt, kann das Verfahren über die Rechtsinstitute der Wiedereinsetzung in den vorigen Stand (eski hale getirme) und der Wiederaufnahme des Verfahrens (yargılamanın yenilenmesi) neu aufgerollt werden."},{question:"Was passiert, wenn die Verjährungsfrist für mein türkisches Strafverfahren abläuft?",answer:"Läuft die Verjährungsfrist ab, muss das Gericht die Einstellung des Verfahrens beschließen (düşme kararı). Für in Deutschland lebende Angeklagte ist es daher wichtig, dass ihr Anwalt die Verjährungsfristen kontinuierlich überwacht — insbesondere wenn das Verfahren über Jahre hinweg ruhend geführt wird."},{question:"Welchen Vorteil bietet ein Anwalt mit Strafverfolgungserfahrung bei türkischen Strafverfahren?",answer:"Gründer Hasan Doğru war vor seiner Anwaltskarriere rund 10 Jahre Mitglied der Spezialeinheit (Özel Harekat) der türkischen Nationalpolizei. Dieses Hintergrundwissen über Ermittlungsmethoden und Strafverfolgungspraxis verleiht der Verteidigungsstrategie eine einzigartige Tiefe, die rein akademisch ausgebildeten Anwälten fehlt."}],faqTR:[{question:"Türkiye'deki ceza davam için duruşmaya bizzat gitmem gerekir mi?",answer:"Çoğu durumda hayır. 5 yılın altındaki suçlarda savunma tamamen avukat aracılığıyla yürütülebilir. Daha ağır dosyalarda ise SEGBİS ile duruşmaya katılma imkanı vardır."},{question:"Türkiye'de hakkımda dava olup olmadığını nasıl öğrenirim?",answer:"Dosyayı UYAP üzerinden sorgulayabilir veya avukatınıza sorgulama yetkisi verebilirisiniz. Gurbetçiler genellikle davayı tesadüfen öğrenirler."},{question:"Davadan hiç haberim olmazsa ne olur?",answer:"CMK m.145 uyarınca yurt dışı tebligatı diplomatik yolla yapılmalıdır. Usulüne uygun tebligat yapılmaması durumunda davanın devam etmesi savunma hakkının ihlalidir ve bozma nedenidir."},{question:"Türkiye'deki yakalama kararı Interpol aramasına dönüşür mü?",answer:"Evet. Kırmızı Bülten çıkarılabilir. Ancak hukuka aykırı bültenler için Interpol (CCF) nezdinde itiraz edilerek bültenin silinmesi mümkündür."},{question:"Bitmiş bir ceza davası tekrar açılabilir mi?",answer:"Evet. Sanığın haberi olmadan verilen mahkumiyet kararları durumunda 'eski hale getirme' ve 'yargılamanın yenilenmesi' yollarıyla dava yeniden görülebilir."},{question:"Ceza davasında zamanaşımı dolarsa ne olur?",answer:"Dava düşer. Avukatınızın zamanaşımı sürelerini titizlikle takip etmesi, özellikle yıllardır devam eden dosyalar için hayatidir."},{question:"Polislik geçmişi olan bir avukatla çalışmanın avantajı nedir?",answer:"Hasan Doğru'nun 10 yıllık Özel Harekat polisliği geçmişi, soruşturma yöntemleri hakkında derin bir bilgi sağlayarak savunma stratejilerimize eşsiz bir güç katar."}]},{slug:"almanya-turkiye-alacak-tahsili-icra",slugDE:"deutschland-tuerkei-forderungseinzug-zwangsvollstreckung",slugTR:"almanya-turkiye-alacak-tahsili-icra",slugEN:"debt-collection-germany-turkey-enforcement",titleDE:"Forderungseinzug & Zwangsvollstreckung in der Türkei | Fremdwährungsforderungen",titleTR:"Almanya'dan Türkiye'de Alacak Tahsili ve İcra Takibi | Yabancı Para Alacağı",excerptDE:"Treiben Sie Ihre Forderungen gegen Schuldner in der Türkei ein. Unser Leitfaden zur Zwangsvollstreckung, Annullierung des Widerspruchs und BGH-Urteile aus Deutschland. Direkte Vertretung aus Mannheim.",excerptTR:"Türkiye'deki borçlunuzdan alacağınızı tahsil edin. Almanya'dan icra takibi başlatma, itirazın iptali ve Yargıtay kararlarıyla rehber. Mannheim'dan doğrudan temsil.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Forderungseinzug in der Türkei aus Deutschland: Leitfaden zur Zwangsvollstreckung

### Einleitung: Treiben Sie Ihre Forderungen in der Türkei ein
Viele in Deutschland lebende Staatsbürger haben Personen in der Türkei Darlehen gewährt, Immobilien verkauft oder geschäftliche Beziehungen unterhalten, konnten ihre Forderungen jedoch bisher nicht einziehen. Dieser Leitfaden behandelt die rechtlichen Wege des Forderungseinzugs in der Türkei aus Deutschland im Lichte der Rechtsprechung des türkischen Kassationshofs.

---

### 1. Die Zwangsvollstreckung ohne Gerichtstitel (İlamsız İcra)
Nach dem türkischen Vollstreckungs- und Konkursgesetz können Sie ohne vorheriges Gerichtsurteil direkt beim Vollstreckungsamt ein Verfahren einleiten. Hierfür genügt eine Vollmacht für Ihren Anwalt in der Türkei.

Dem Schuldner wird ein Zahlungsbefehl zugestellt. Wenn dieser nicht innerhalb von 7 Tagen widerspricht, wird das Verfahren rechtskräftig und die Sachpfändung kann eingeleitet werden.

---

### 2. Klage auf Aufhebung des Widerspruchs & 20% Entschädigung
Widerspricht der Schuldner unberechtigt, muss der Gläubiger eine Klage auf Aufhebung des Widerspruchs erheben. Der größte Vorteil dieser Klage ist, dass der Schuldner zur Zahlung einer "Vollstreckungsentschädigung" von mindestens 20 % der Forderung verurteilt wird.

> **Yargıtay 19. HD, 2019/4412 E.:**
> "Ist die Forderung bestimmt, muss bei unberechtigtem Widerspruch gegen den Schuldner eine Vollstreckungsentschädigung in Höhe von 20 % verhängt werden."

---

### 3. Vollstreckung deutscher Gerichtsurteile in der Türkei
Falls Sie bereits einen Vollstreckungsbescheid aus Deutschland haben, muss dieser in der Türkei zunächst im Rahmen einer "Anerkennungs- und Vollstreckungsklage" (Tenfiz) bestätigt werden. Beachten Sie jedoch, dass deutsche Vollstreckungsbescheide aus Mahnverfahren oft nicht direkt für eine Tenfiz-Klage geeignet sind, da sie nicht auf einem streitigen Verfahren basieren.

In vielen Fällen ist es daher schneller, direkt ein neues Vollstreckungsverfahren in der Türkei ohne Gerichtstitel einzuleiten.

---

### 4. Fremdwährungsforderungen und Wechselkursrisiken
Wenn Sie ein Darlehen in Euro gewährt haben, haben Sie nach Art. 99 des türkischen Obligationenrechts das Recht, den Wechselkurs zum Zeitpunkt der tatsächlichen Zahlung zu verlangen. Dies schützt den Gläubiger vor Währungsschwankungen der Türkischen Lira.

---

### 5. Häufig gestellte Fragen (FAQ)

**Ich weiß nicht, ob der Schuldner Vermögen in der Türkei hat. Was kann man tun?**
Über das elektronische UYAP-System können wir alle Immobilien, Bankkonten, Fahrzeuge und Rentenregistrierungen des Schuldners abfragen und sofort pfänden.

**Wie lange dauert das Verfahren?**
Widerspricht der Schuldner nicht, ist das Verfahren oft in 15-20 Tagen rechtskräftig. Bei einem Widerspruch kann der anschließende Prozess je nach Arbeitsbelastung des Gerichts 1-2 Jahre dauern.

**Kann ich deutsche Dokumente als Beweis verwenden?**
Ja. Diese müssen jedoch von einem beeidigten Dolmetscher ins Türkische übersetzt und gegebenenfalls mit einer Apostille versehen werden.

---

### 6. Die Doğru Kanzlei Strategie
Als Doğru Kanzlei leiten wir den Prozess in Mannheim ein und führen die Vollstreckung über unser Büro in Ankara direkt aus. Ohne Zwischenschaltung externer Anwälte verwalten wir den gesamten Prozess transparent aus einer Hand.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Almanya'dan Türkiye'de Alacak Tahsili: İcra Takibi Rehberi

### Giriş: Türkiye'deki Alacaklarınızı Tahsil Edin
Almanya'da yaşayan birçok vatandaşımız, Türkiye'deki kişilere borç vermiş, gayrimenkul satmış veya ticari ilişki kurmuş ancak alacağını tahsil edememiştir. Bu rehberde, Almanya'dan Türkiye'de alacak tahsilinin hukuki yollarını ve Yargıtay kararları ışığında izlenmesi gereken stratejileri ele alacağız.

---

### 1. İlamsız İcra Takibi: Mahkeme Kararı Olmadan Takip Başlatma
İcra ve İflas Kanunu uyarınca, herhangi bir mahkeme kararı olmaksızın doğrudan icra dairesine başvurarak ilamsız icra takibi başlatabilirsiniz. Bunun için Türkiye'deki avukatınıza vekâletname çıkarmanız yeterlidir.

Borçluya ödeme emri tebliğ edilir. Borçlu 7 gün içinde itiraz etmezse, takip kesinleşir ve haciz işlemlerine geçilir.

---

### 2. İtirazın İptali Davası ve %20 İcra İnkar Tazminatı
Borçlu haksız yere itiraz ederse, alacaklı olarak itirazın iptali davası açmanız gerekir. Bu davanın en büyük avantajı, borçlunun alacağın %20'sinden az olmamak üzere icra inkar tazminatına mahkum edilmesidir.

> **Yargıtay 19. HD, 2019/4412 E.:**
> "İtirazın iptali davasında alacağın likit (belirli) olması halinde, haksız itiraz eden borçlu aleyhine %20 oranında icra inkar tazminatına hükmedilmesi gerekir."

---

### 3. Almanya'dan Verilen Mahkeme Kararının Türkiye'de İcrası
Eğer Almanya'da bir mahkeme kararı (*Vollstreckungsbescheid*) aldıysanız, bunun Türkiye'de icra edilmesi için önce "tenfiz" davası açılması gerekir. Ancak, Alman *Mahnverfahren* (ödeme emri prosedürü) sonucu alınan kararlar Yargıtay tarafından doğrudan tenfize elverişli bulunmayabilir.

Bu nedenle, Türkiye'de doğrudan ilamsız icra takibi başlatmak genellikle daha hızlı ve etkili bir yoldur.

---

### 4. Yabancı Para Alacağında Kur Farkı Sorunu
Türkiye'deki borçlunuza Euro cinsinden borç verdiyseniz, TBK m.99 uyarınca fiili ödeme tarihindeki kuru talep etme hakkınız bulunmaktadır. Bu, kur dalgalanmalarına karşı alacaklıyı koruyan önemli bir haktır.

---

### 5. Sıkça Sorulan Sorular

**Borçlunun Türkiye'de nesi olduğunu bilmiyorum, ne yapabiliriz?**
UYAP sistemi üzerinden borçlunun tüm taşınmazları (TAKPAS), banka hesapları, araçları ve SGK kayıtları avukatınız tarafından sorgulanabilir ve anında haciz konulabilir.

**Dava ne kadar sürer?**
İlamsız takipte borçlu itiraz etmezse takip 15-20 gün içinde kesinleşir. İtiraz halinde açılacak dava ise mahkemenin iş yüküne göre 1-2 yıl sürebilir.

**Almanca belgelerim var, bunları kullanabilir miyim?**
Evet. Ancak bu belgelerin yeminli tercüman tarafından Türkçeye çevrilmesi ve gerekirse Apostil şerhi alınması gerekmektedir.

---

### 6. Doğru Kanzlei Farkı
Doğru Kanzlei olarak Mannheim ofisimizden vekâletname sürecini başlatır, Ankara ofisimiz üzerinden doğrudan icra dairesine başvururuz. Aracı avukata gerek kalmadan tüm süreci şeffaf bir şekilde yönetiyoruz.`,category:"İcra ve İflas Hukuku",categoryDE:"Zwangsvollstreckungsrecht",image:qb,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Forderungseinzug Deutschland Türkei, Zwangsvollstreckung Türkei, Fremdwährungsforderung Vollstreckung, Anwalt Schuldeneintreibung Türkei Mannheim",keywordsTR:"Almanya'dan Türkiye icra takibi, Türkiye alacak tahsili, yabancı para alacağı icra, Almanya Türkiye borç tahsili avukat",faqDE:[{question:"Ist ein deutsches gemeinsames Sorgerecht in der Türkei direkt gültig?",answer:"Nein. Ein deutsches Sorgerechtsurteil entfaltet in der Türkei keine automatische Wirkung. Es muss zunächst durch ein türkisches Gericht im Rahmen eines Tenfiz-Verfahrens (Vollstreckbarerklärung) anerkannt werden, bevor es in der Türkei rechtliche Wirkung entfaltet."},{question:"Wurde gemeinsames Sorgerecht in der Türkei früher grundsätzlich abgelehnt?",answer:"Ja. Vor 2016 lehnte der Yargıtay (2. Zivilkammer) die Anerkennung gemeinsamer Sorgerechtsentscheidungen konsequent ab, da das türkische Recht (TMK Art. 336) vorsah, dass das Sorgerecht bei einer Scheidung nur einem Elternteil übertragen werden kann. Gemeinsames Sorgerecht galt als Verstoß gegen die türkische öffentliche Ordnung."},{question:"Hat sich die Rechtslage zum gemeinsamen Sorgerecht in der Türkei geändert?",answer:"Ja, seit 2016. Mit dem Gesetz Nr. 6684 ratifizierte die Türkei das Zusatzprotokoll zum Europäischen Übereinkommen über den Umgang mit Kindern, wodurch das Konzept des gemeinsamen Sorgerechts indirekt ins türkische Recht eingeführt wurde. Daraufhin entschied der Yargıtay (2. HD, 2016/15771 E., 2017/1737 K.), dass ausländische Sorgerechtsurteile nicht mehr pauschal als ordre-public-widrig abgelehnt werden dürfen, sondern im Einzelfall am Kindeswohl gemessen werden müssen."},{question:"Was ist der Unterschied zwischen Aufenthaltsbestimmungsrecht und gemeinsamem Sorgerecht bei der Anerkennung in der Türkei?",answer:"Im deutschen Recht wird das Aufenthaltsbestimmungsrecht — also das Recht zu entscheiden, wo das Kind lebt — häufig nur einem Elternteil übertragen, auch wenn das Sorgerecht gemeinsam bleibt. Türkische Gerichte müssen diese Unterscheidung bei der Vollstreckbarerklärung berücksichtigen, da sie erhebliche Auswirkungen darauf hat, wie das Urteil im türkischen Kontext umgesetzt wird."},{question:"Kann das Kind nach Anerkennung des gemeinsamen Sorgerechts dauerhaft in die Türkei gebracht werden?",answer:"Nein. Gemeinsames Sorgerecht bedeutet, dass beide Elternteile Mitspracherecht beim Aufwachsen des Kindes haben. Eine dauerhafte Verlegung des Wohnsitzes des Kindes in die Türkei erfordert entweder die Zustimmung beider Elternteile oder eine gerichtliche Entscheidung. Ein eigenmächtiges Verbringen des Kindes kann nach dem Haager Übereinkommen über internationale Kindesentführung strafbar sein."},{question:"Wie lange dauert das Tenfiz-Verfahren für Sorgerechtsurteile?",answer:"Bei richtiger rechtlicher Strategie dauert das Verfahren in der Regel 6 bis 12 Monate. Die tatsächliche Dauer hängt maßgeblich von den Zustellungsprozessen ab, insbesondere wenn die andere Partei in Deutschland ansässig ist."},{question:"Was muss der Tenfiz-Antrag für ein deutsches Sorgerechtsurteil enthalten?",answer:"Der Antrag muss eine detaillierte Erläuterung enthalten, wie die deutschen Sorgerechtskonzepte — insbesondere gemeinsames Sorgerecht und Aufenthaltsbestimmungsrecht — ihren türkischen rechtlichen Entsprechungen zugeordnet werden. Zudem sollte auf aktuelle Yargıtay-Rechtsprechung nach 2016 Bezug genommen werden, um eine Ablehnung als ordre-public-widrig zu vermeiden."}],faqTR:[{question:"Almanya'da verilen bir ortak velayet kararı Türkiye'de doğrudan geçerli mi?",answer:"Hayır. Almanya'da verilen bir ortak velayet kararı Türkiye'de doğrudan geçerli değildir. Türkiye'de hukuki sonuç doğurabilmesi için önce bir Türk mahkemesi tarafından tenfiz edilmesi (Vollstreckbarerklärung) gerekir."},{question:"Türkiye'de ortak velayet eskiden temelden reddediliyor muydu?",answer:"Evet. 2016 yılından önce Yargıtay, Türk hukukunda velayetin boşanma halinde sadece bir ebeveyne verilebileceği esasını gerekçe göstererek, yabancı ortak velayet kararlarını 'kamu düzenine aykırılık' nedeniyle reddediyordu."},{question:"Türkiye'de ortak velayet konusundaki hukuki durum değişti mi?",answer:"Evet, 2016'dan bu yana değişti. Çocuklarla Kişisel İlişki Kurulmasına Dair Avrupa Sözleşmesi'nin onaylanmasıyla ortak velayet kavramı dolaylı olarak Türk hukukuna girdi. Yargıtay artık bu kararların vaka bazında çocuk yararına göre değerlendirilmesine karar vermiştir."},{question:"Tenfiz sürecinde yerleşim yeri belirleme hakkı ile ortak velayet arasındaki fark nedir?",answer:"Alman hukukunda velayet ortak kalsa bile, çocuğun nerede yaşayacağına karar verme hakkı genellikle tek bir ebeveyne verilir. Türk mahkemeleri tenfiz sürecinde bu ayrımı dikkate almalıdır; çünkü bu durum kararın Türkiye'deki uygulama biçimini etkiler."},{question:"Ortak velayet tanındıktan sonra çocuk kalıcı olarak Türkiye'ye getirilebilir mi?",answer:"Hayır. Ortak velayet, her iki ebeveynin de çocuğun yetiştirilmesi konusunda söz hakkı olması demektir. Çocuğun yerleşim yerinin Türkiye'ye taşınması ya her iki ebeveynin rızasını ya da mahkeme kararını gerektirir. Diğer ebeveynin onayı olmadan çocuğun Türkiye'ye getirilmesi suç teşkil edebilir."},{question:"Velayet kararları için tenfiz davası ne kadar sürer?",answer:"Doğru hukuki strateji ile bu süreç genellikle 6 ila 12 ay sürer. Süreyi belirleyen en önemli faktör, tebligat süreçlerinin hızıdır."},{question:"Alman velayet kararı için tenfiz dilekçesi neleri içermelidir?",answer:"Dilekçe, Alman velayet kavramlarının Türk hukukundaki karşılıkları ile nasıl ilişkilendirildiğine dair detaylı açıklamalar içermelidir. Ayrıca, reddedilme riskini önlemek için 2016 sonrası güncel Yargıtay içtihatlarına atıf yapılmalıdır."}]},{slug:"almanya-ortak-velayet-turkiye-tenfiz",slugDE:"deutschland-gemeinsames-sorgerecht-tuerkei-anerkennung",slugTR:"almanya-ortak-velayet-turkiye-tenfiz",slugEN:"joint-custody-germany-turkey-enforcement",titleDE:"Gemeinsames Sorgerecht aus Deutschland | Anerkennung in der Türkei",titleTR:"Almanya'dan Verilen Ortak Velayet Kararı Türkiye'de Tenfiz Edilir mi?",excerptDE:"Sie haben das gemeinsame Sorgerecht in Deutschland erhalten, aber erkennt die Türkei dies an? Wir erklären die geänderte BGH-Rechtsprechung nach 2016. Vertretung aus Mannheim.",excerptTR:"Almanya'da ortak velayet kararı aldınız ama Türkiye tenfiz ediyor mu? 2016 sonrası değişen Yargıtay içtihadını açıklıyoruz. Mannheim'dan doğrudan temsil.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Gilt das gemeinsame Sorgerecht (Gemeinsames Sorgerecht) aus Deutschland in der Türkei?

### Einleitung: Zwei Rechtssysteme, zwei unterschiedliche Ansätze zum Sorgerecht
Eines der komplexesten Probleme für in Deutschland geschiedene türkische Familien ist die Frage, ob die Entscheidung der deutschen Gerichte über das gemeinsame Sorgerecht (Gemeinsames Sorgerecht) in der Türkei anerkannt wird. Bis 2016 gab es hierbei ernsthafte rechtliche Hürden: Da das türkische Recht das Konzept des gemeinsamen Sorgerechts nicht kannte, wurden deutsche Entscheidungen oft wegen "Verstoßes gegen die öffentliche Ordnung" (Ordre Public) abgelehnt.

Seit 2016 hat sich jedoch eine bedeutende Änderung in der Rechtsprechung vollzogen. In diesem Artikel untersuchen wir das Thema im Lichte aktueller Urteile des türkischen Kassationshofs.

---

### 1. Vor 2016: Strikt abgelehnt
Vor 2016 lehnte der 2. Zivilsenat des türkischen Kassationshofs die Anerkennung des gemeinsamen Sorgerechts konsequent ab. Die Begründung war, dass nach dem türkischen Zivilgesetzbuch (TMK Art. 336) das Sorgerecht im Falle einer Scheidung nur einem Elternteil übertragen werden könne.

---

### 2. Der Wendepunkt: Gesetz Nr. 6684 und Rechtsprechungsänderung
Mit dem Gesetz Nr. 6684, veröffentlicht im Jahr 2016, hat die Türkei das Zusatzprotokoll zum "Europäischen Übereinkommen über den persönlichen Umgang mit Kindern" ratifiziert. Dieses Protokoll führte das Konzept des gemeinsamen Sorgerechts indirekt in das türkische Rechtssystem ein.

Daraufhin änderte der 2. Zivilsenat des Kassationshofs seine Rechtsprechung:

> **Yargıtay 2. HD, 2016/15771 E.:**
> "Entscheidungen ausländischer Gerichte zum gemeinsamen Sorgerecht können nicht mehr pauschal als Verstoß gegen die öffentliche Ordnung gewertet werden. Jeder Einzelfall muss im Hinblick auf das Kindeswohl beurteilt werden."

---

### 3. Probleme in der Praxis
- **Aufenthaltsbestimmungsrecht**: Im deutschen Recht wird neben dem gemeinsamen Sorgerecht oft das "Aufenthaltsbestimmungsrecht" einem Elternteil übertragen. Türkische Gerichte müssen diese Unterscheidung bei der Anerkennung berücksichtigen.
- **Umgangsrecht**: Deutsche Gerichte legen oft umfangreichere Besuchszeiten fest als türkische Gerichte. Die Balance zu finden, ist eine Herausforderung im Anerkennungsverfahren.
- **Kindesentziehung (HKÜ)**: Trotz gemeinsamen Sorgerechts kann das Verbringen des Kindes in die Türkei ohne Zustimmung des anderen Elternteils eine Straftat nach dem Haager Kindesentführungsübereinkommen darstellen.

---

### 4. Die richtige Anerkennungsstrategie
Wenn Sie in Deutschland ein gemeinsames Sorgerecht erhalten haben, müssen im Anerkennungsantrag die deutschen Begriffe detailliert erläutert und an das türkische Recht angepasst werden. Ohne korrekte rechtliche Bezugnahme auf die neue Rechtsprechung besteht das Risiko einer Ablehnung.

Die Doğru Kanzlei betreut diese Verfahren direkt vor türkischen Gerichten und gewährleistet eine fachgerechte Übersetzung und Argumentation.

---

### 5. Sıkça Sorulan Sorular

**Ist das deutsche Sorgerechtsurteil in der Türkei automatisch gültig?**
Nein. Damit das Urteil in der Türkei Rechtswirkung entfaltet, muss eine Klage auf Anerkennung und Vollstreckung (Tenfiz) vor einem türkischen Gericht erhoben werden.

**Kann das Kind nach der Anerkennung des gemeinsamen Sorgerechts dauerhaft in die Türkei gebracht werden?**
Nein. Gemeinsames Sorgerecht bedeutet, dass beide Elternteile Mitspracherecht haben. Eine Änderung des Aufenthaltsorts des Kindes erfordert die Zustimmung beider Eltern oder eine gerichtliche Entscheidung.

**Wie lange dauert das Anerkennungsverfahren?**
Abhängig von der Zustellung der Dokumente dauert das Verfahren mit der richtigen Strategie in der Regel zwischen 6 und 12 Monaten.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Almanya'daki Ortak Velayet (Gemeinsames Sorgerecht) Kararı Türkiye'de Geçerli mi?

### Giriş: İki Hukuk Sistemi, İki Farklı Velayet Anlayışı
Almanya'da boşanan Türk ailelerin en karmaşık sorunlarından biri, Alman mahkemelerinin verdiği ortak velayet (gemeinsames Sorgerecht) kararının Türkiye'de tanınıp tanınmayacağıdır. Bu konu, 2016 yılına kadar Türk yargısında ciddi bir engelle karşılaşıyordu: Türk hukukunda ortak velayet müessesesi bulunmadığından, Alman mahkemelerinin ortak velayet kararları "kamu düzenine aykırılık" gerekçesiyle reddediliyordu.

Ancak 2016 sonrasında önemli bir içtihat değişikliği yaşanmıştır. Bu yazıda, güncel Yargıtay kararları ışığında konuyu detaylı olarak ele alıyoruz.

---

### 1. 2016 Öncesi: Kesin Red
Yargıtay 2. Hukuk Dairesi, 2016 öncesi kararlarında tutarlı bir şekilde ortak velayet kararlarının tenfizini reddetmiştir. Gerekçe, TMK m.336'ya göre boşanma halinde velayetin yalnızca anne veya babadan birine verilebileceği ve ortak velayetin Türk kamu düzenine aykırı olduğu idi.

---

### 2. Dönüm Noktası: 6684 Sayılı Kanun ve Yargıtay İçtihat Değişikliği
25 Mart 2016 tarihli Resmi Gazete'de yayımlanan 6684 sayılı Kanun ile Türkiye, "Çocuklarla Kişisel İlişki Kurulmasına Dair Avrupa Sözleşmesi"nin Ek Protokolü'nü onaylamıştır. Bu protokol, ortak velayet kavramını dolaylı olarak Türk hukuk sistemine tanıtmıştır.

Bunun ardından Yargıtay 2. Hukuk Dairesi, içtihat değişikliğine gitmiştir:

> **Yargıtay 2. HD, 2016/15771 E., 2017/1737 K.:**
> "Yabancı mahkemelerin verdiği ortak velayet kararları artık doğrudan kamu düzenine aykırı sayılamaz. Her somut olay çocuğun üstün yararı çerçevesinde değerlendirilmelidir."

---

### 3. Pratikte Karşılaşılan Sorunlar
- **Aufenthaltsbestimmungsrecht Ayrımı**: Alman hukukunda ortak velayet yanında "Aufenthaltsbestimmungsrecht" (çocuğun ikametgahını belirleme hakkı) genellikle ebeveynlerden birine verilir. Türk mahkemesi tenfiz kararı verirken bu ayrımı dikkate almalıdır.
- **Umgangsrecht vs. Kişisel İlişki**: Alman mahkemeleri genellikle daha geniş kapsamlı görüşme süreleri belirlerken, Türk mahkemeleri daha kısıtlı süreler öngörür.
- **Uluslararası Çocuk Kaçırma (HKÜ)**: Ortak velayet kararı olsa bile, çocuğun rıza dışı Türkiye'ye götürülmesi Lahey Sözleşmesi kapsamında suç oluşturabilir.

---

### 4. Doğru Tenfiz Stratejisi
Almanya'da ortak velayet kararı aldıysanız, tenfiz dilekçesinde Alman hukukundaki velayet kavramlarının Türk hukukundaki karşılıkları detaylı şekilde açıklanmalı ve güncel içtihatlara atıf yapılmalıdır. 

Doğru Kanzlei olarak, hem Alman aile hukuku kavramlarını hem de Türk hukukundaki karşılıklarını bilen bir kadroyla bu süreçleri yönetiyoruz.

---

### 5. Sıkça Sorulan Sorular

**Alman mahkemesinin ortak velayet kararı Türkiye'de doğrudan geçerli mi?**
Hayır. Bu kararın Türkiye'de hüküm doğurması için Türk mahkemelerinde "tenfiz" (icra edilebilirlik) davası açılması zorunludur.

**Ortak velayet tenfiz edilince çocuk Türkiye'ye kalıcı olarak götürülebilir mi?**
Hayır. Ortak velayet, her iki ebeveynin de çocuk üzerinde söz hakkı olması demektir. Çocuğun yerleşim yerinin değişmesi için her iki tarafın rızası veya mahkeme kararı gerekir.

**Tenfiz davası ne kadar sürer?**
Tebligat süreçlerine bağlı olmakla birlikte, doğru hukuki strateji ile genellikle 6-12 ay arasında sonuçlanmaktadır.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:xu,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Gemeinsames Sorgerecht Deutschland Türkei, Sorgerechtsanerkennung, Sorgerechtstenfiz, internationales Sorgerecht",keywordsTR:"Almanya ortak velayet Türkiye, gemeinsames Sorgerecht Türkei Anerkennung, velayet tenfizi, uluslararası velayet Almanya Türkiye"},{slug:"almanya-muris-muvazaasi-tapu-iptali",slugDE:"deutschland-muris-muvazaasi-tapu-annullierung",slugTR:"almanya-muris-muvazaasi-tapu-iptali",slugEN:"inheritance-fraud-turkey-deed-cancellation",titleDE:"Muris Muvazaası-Klage aus Deutschland | Erbschleicherei in der Türkei",titleTR:"Almanya'dan Türkiye'de Muris Muvazaası Davası | Mirastan Mal Kaçırma",excerptDE:"Haben Verwandte in der Türkei geerbte Immobilien übertragen? Erheben Sie eine Muris Muvazaası-Klage aus Deutschland, um die Eigentumsurkunde zurückzuerhalten. Wir erklären es anhand von BGH-Urteilen.",excerptTR:"Türkiye'de miras kalan taşınmazı akrabalarınız mı devretti? Almanya'dan muris muvazaası davası açarak tapuyu geri alabilirsiniz. Yargıtay kararlarıyla anlatıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Muris Muvazaası-Klage aus Deutschland: Wie man Erbschleicherei verhindert

### Einleitung: Das häufigste Erbrechtsproblem für Türken in Deutschland
Wenn Verwandte von in Deutschland lebenden türkischen Staatsbürgern in der Türkei versterben, ist eines der häufigsten rechtlichen Probleme, dass der Erblasser seine Immobilien bereits zu Lebzeiten auf bestimmte Erben oder Dritte übertragen hat. Besonders bei Familienältesten, die in Dörfern oder Kleinstädten leben, kommt es häufig vor, dass sie eine "Schenkung" als "Verkauf" tarnen, um andere Erben von ihrem rechtmäßigen Erbe auszuschließen.

Dieser Vorgang wird im türkischen Recht als "Muris Muvazaası" (Erbschleicherei durch Scheingeschäft) bezeichnet. Was können Sie als in Deutschland lebender Erbe in dieser Situation tun?

---

### 1. Was ist Muris Muvazaası?
Muris Muvazaası liegt vor, wenn der Erblasser eigentlich eine Schenkung beabsichtigt, dies aber im Grundbuch als "Verkauf" deklariert. Ziel ist es, pflichtteilsberechtigte Erben (Ehegatten, Kinder) von ihrem Erbe auszuschließen. Das Grundsatzurteil des türkischen Kassationshofs vom 01.04.1974 (1/2) bildet hierfür die rechtliche Basis:

> **Yargıtay İBK 01.04.1974, 1/2:**
> "Wird festgestellt, dass eine Person eine Immobilie als Verkauf getarnt hat, um einen Erben zu benachteiligen, ist dieser Vertrag wegen Simulation (Muvazaa) ungültig. Jeder benachteiligte Erbe kann die Annullierung der Eintragung verlangen."

---

### 2. Wie wird es aus Deutschland festgestellt?
- **a) Grundbucheinsicht**: Über E-Devlet oder Ihren Anwalt kann eine TAKPAS-Abfrage erfolgen, um alle Übertragungen vor dem Tod des Erblassers zu prüfen.
- **b) Bankfluss**: Es wird geprüft, ob der angebliche Kaufpreis tatsächlich über Banken geflossen ist. Ein zu niedriger Preis gilt als starkes Indiz für eine Simulation.
- **c) Zeugenaussagen**: Aussagen von Nachbarn, Dorfältesten und Verwandten spielen eine entscheidende Rolle, um die wahre Absicht des Erblassers zu beweisen.

---

### 3. Prozess und Verjährung
In Deutschland lebende Erben haben einen großen Vorteil: Diese Klage kann auch noch Jahre nach dem Tod erhoben werden, da sie **keiner Verjährungsfrist** unterliegt.

> **Yargıtay 1. HD, 2019/2547 E.:**
> "Der Antrag auf Löschung und Neuregistrierung aufgrund von Muris Muvazaası basiert auf dem Eigentumsrecht und unterliegt daher weder der Verjährung noch einer Ausschlussfrist."

---

### 4. Praktischer Ablauf der Klage aus Deutschland
Über das türkische Konsulat in Deutschland oder einen deutschen Notar wird eine spezialisierte Vollmacht ausgestellt. Diese muss explizit die Befugnis zur "Klage auf Aufhebung der Eigentumsurkunde" enthalten.

Als Doğru Kanzlei leiten wir den Vollmachtsprozess in unserem Büro in Mannheim ein und erheben die Klage direkt über unser Büro in Ankara. Unsere Mandanten müssen hierfür nicht in die Türkei reisen.

---

### 5. Häufig gestellte Fragen (FAQ)

**Muss ich für die Klage in die Türkei reisen?**
Nein. Mit einer speziellen Vollmacht, die Sie über das Konsulat erteilen, wird der gesamte Prozess von unseren Fachanwälten gesteuert.

**Wie lange nach dem Tod des Erblassers kann ich klagen?**
Bei dieser Klageart gibt es keine Verjährung. Auch wenn der Vorfall 10 oder 20 Jahre zurückliegt, ist eine Klage möglich.

**Kann ich sadece für meinen Pflichtteil klagen?**
Nein, bei Muris Muvazaası kann ein Erbe die Annullierung für seinen gesamten gesetzlichen Erbanteil verlangen, nicht nur für den Pflichtteil.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Almanya'dan Türkiye'de Muris Muvazaası Davası: Mirastan Mal Kaçırma Nasıl Engellenir?

### Giriş: Almanya'daki Türklerin En Sık Karşılaştığı Miras Sorunu
Almanya'da yaşayan Türk vatandaşlarının Türkiye'deki yakınları vefat ettiğinde, en çok karşılaşılan hukuki sorunlardan biri, miras bırakanın sağlığında mallarını belirli mirasçılara veya üçüncü kişilere devretmiş olmasıdır. Özellikle köyde veya kasabada yaşayan aile büyüklerinin, "satış" göstererek aslında bağışlama yaptığı ve diğer mirasçıları miras haklarından mahrum bıraktığı durumlar son derece yaygındır.

Bu hukuki işlem, Türk hukukunda "muris muvazaası" olarak adlandırılır ve Yargıtay'ın onlarca yıllık yerleşik içtihadıyla şekillenmiş özel bir dava türüdür. Peki, Almanya'da yaşayan bir mirasçı olarak bu durumda ne yapabilirsiniz?

---

### 1. Muris Muvazaası Nedir?
Muris muvazaası, miras bırakanın (murisin) gerçekte bağışlama yapmak istediği halde, tapuda "satış" olarak gösterdiği işlemdir. Amaç, saklı paylı mirasçıları (eş, çocuklar) miras haklarından yoksun bırakmaktır. Yargıtay İçtihadı Birleştirme Büyük Genel Kurulu'nun 01.04.1974 tarihli ve 1/2 sayılı kararı, bu alanda temel içtihat niteliğindedir:

> **Yargıtay İBK 01.04.1974, 1/2:**
> "Bu karara göre, bir kimsenin mirasçısını miras hakkından yoksun bırakmak amacıyla tapulu taşınmazını gerçekte bağışladığı halde satış olarak gösterdiği saptanırsa, bu sözleşme muvazaalı olduğundan geçersizdir ve miras hakkı zarar gören her mirasçı dava açarak tapu iptalini ve kendi adına tescilini talep edebilir."

---

### 2. Almanya'dan Nasıl Tespit Edilir?
- **a) Tapu Kaydı Sorgulama**: E-Devlet üzerinden veya avukatınız aracılığıyla TAKPAS (Tapu Kadastro Paylaşım Sistemi) sorgulaması yapılabilir.
- **b) Banka Hesapları ve Para Akışı**: Satış bedeli iddia edilen paranın banka kanalıyla ödenip ödenmediği araştırılmalıdır. Yargıtay, bedelin düşük olmasını güçlü muvazaa delili kabul eder.
- **c) Tanık Beyanları**: Köy halkı, komşular ve akrabaların beyanları miras bırakanın gerçek iradesini ortaya koymada kritik rol oynar.

---

### 3. Dava Süreci ve Zamanaşımı
Muris muvazaası davası, miras bırakanın ölümünden sonra açılabilir ve **herhangi bir zamanaşımı süresine tabi değildir**.

> **Yargıtay 1. HD, 2019/2547 E.:**
> "Muris muvazaasına dayalı tapu iptali ve tescil isteği, mülkiyet hakkına dayandığından zamanaşımı ve hak düşürücü süreye tabi değildir."

---

### 4. Almanya'dan Dava Açma Pratik Süreci
Almanya'daki Türk Konsolosluğundan veya Alman noterinden özel vekâletname çıkarılır. Vekâletnamede "tapu iptali ve tescil davası açma" yetkisinin açıkça yer alması şarttır. 

Doğru Kanzlei olarak Mannheim ofisimizden vekâletname sürecini başlatır, Ankara ofisimiz aracılığıyla davayı bizzat açarız. Müvekkillerimizin Türkiye'ye seyahat etmesine gerek kalmaz.

---

### 5. Sıkça Sorulan Sorular

**Davayı açmak için Türkiye'ye gelmem gerekiyor mu?**
Hayır. Konsolosluk aracılığıyla vereceğiniz özel vekaletname ile tüm süreç uzman avukatlarımız tarafından takip edilir.

**Miras bırakan öldükten ne kadar süre sonra dava açabilirim?**
Bu dava türünde zamanaşımı yoktur. Olayın üzerinden 10-20 yıl geçmiş olsa bile dava açma hakkınız mevcuttur.

**Sadece saklı payım için mi dava açabilirim?**
Hayır, muris muvazaası davasında mirasçı, saklı payı ile sınırlı olmaksızın kendi yasal miras payının tamamı için iptal isteyebilir.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Bu,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Muris Muvazaası Deutschland, Erbschleicherei Türkei, Klage auf Aufhebung und Registrierung der Eigentumsurkunde, Erbrechtsfall aus Deutschland, Erbrecht Anwalt Türkei Mannheim",keywordsTR:"muris muvazaası Almanya, mirastan mal kaçırma Türkiye, tapu iptali ve tescil davası, Almanya'dan miras davası, Türkiye miras avukatı Mannheim",faqDE:[{question:"Was ist Muris Muvazaası (Erbschaftsbetrug durch Scheinverkauf)?",answer:"Muris Muvazaası bezeichnet einen Fall, in dem der Erblasser eine Immobilie im Grundbuch als 'Verkauf' einträgt, obwohl es sich tatsächlich um eine Schenkung handelt — mit dem Ziel, pflichtteilsberechtigte Erben (Ehegatten, Kinder) um ihr Erbrecht zu bringen. Laut dem Grundsatzurteil des Yargıtay (01.04.1974, 1/2) ist ein solches Rechtsgeschäft nichtig, und jeder betroffene Erbe kann Grundbuchberichtigung und Umschreibung auf seinen Namen verlangen."},{question:"Muss ich nach der Türkei reisen, um eine Muris-Muvazaası-Klage einzureichen?",answer:"Nein. Mit einer speziellen Vollmacht, die über das türkische Konsulat in Deutschland oder einen deutschen Notar ausgestellt wird, kann der gesamte Prozess von spezialisierten Anwälten geführt werden. Die Vollmacht muss ausdrücklich die Befugnis zur 'Klage auf Grundbuchberichtigung und Umschreibung' enthalten."},{question:"Gibt es eine Verjährungsfrist für Muris-Muvazaası-Klagen?",answer:"Nein. Da die Klage auf dem Eigentumsrecht basiert, unterliegt sie laut Yargıtay (1. Zivilkammer, 2019/2547 E.) weder einer Verjährungsfrist noch einer Ausschlussfrist. Selbst wenn seit dem Todesfall 10 bis 20 Jahre vergangen sind, bleibt das Klagerecht bestehen."},{question:"Wie kann ich von Deutschland aus feststellen, ob Immobilien muvazaalı übertragen wurden?",answer:"Es gibt drei Wege: Erstens eine Grundbuchabfrage über E-Devlet oder das TAKPAS-System durch Ihren Anwalt. Zweitens die Überprüfung von Banktransaktionen, ob der angebliche Kaufpreis tatsächlich überwiesen wurde — ein auffällig niedriger Preis gilt dem Yargıtay als starkes Indiz für Muvazaa. Drittens Zeugenbefragungen aus dem Dorf oder der Nachbarschaft zur Ermittlung des wahren Willens des Erblassers."},{question:"Kann ich nur meinen Pflichtteil oder meinen gesamten Erbanteil einklagen?",answer:"Bei einer Muris-Muvazaası-Klage ist der Anspruch nicht auf den Pflichtteil beschränkt. Der Erbe kann die Aufhebung der Übertragung für seinen gesamten gesetzlichen Erbanteil verlangen — nicht nur für den Mindestpflichtteil."},{question:"Wie lange nach dem Tod des Erblassers kann ich eine Klage einreichen?",answer:"Es gibt keine Frist. Da diese Klageart keiner Verjährung unterliegt, kann sie unabhängig davon eingereicht werden, wie viel Zeit seit dem Tod des Erblassers vergangen ist."}],faqTR:[{question:"Muris Muvazaası (Mirasçıdan Mal Kaçırma) nedir?",answer:"Muris Muvazaası, miras bırakanın taşınmazını tapuda 'satış' gibi gösterip aslında bağışlaması durumudur. Amaç, çocukların veya eşin saklı pay miras haklarını engellemektir. Yargıtay'ın 1974 tarihli içtihadı uyarınca bu işlem geçersizdir ve her mirasçı kendi payı oranında dava açabilir."},{question:"Muris muvazaası davası açmak için Türkiye'ye gitmem gerekir mi?",answer:"Hayır. Almanya'daki Türk konsolosluğundan veya Alman noterinden çıkarılacak, 'Tapu İptali ve Tescili' yetkisini içeren özel bir vekaletname ile tüm süreç uzman avukatlarca yürütülebilir."},{question:"Dava açmak için bir zamanaşımı süresi var mıdır?",answer:"Hayır. Yargıtay kararlarına göre bu dava ayni hakka dayandığı için zamanaşımı veya hak düşürücü süreye tabi değildir. Vefatın üzerinden ne kadar zaman geçerse geçsin dava açılabilir."},{question:"Malların muvazaalı devredildiğini Almanya'dan nasıl anlarım?",answer:"Avukatınız aracılığıyla TAKPAS üzerinden tapu sorgulaması yapılabilir. Ayrıca satış bedelinin ödenip ödenmediği banka kayıtlarından kontrol edilir; piyasa değerinin çok altındaki bedel güçlü bir delildir."},{question:"Sadece saklı payımı mı yoksa tüm miras payımı mı alabilirim?",answer:"Muris muvazaası davasında hak talebiniz saklı payla sınırlı değildir. Mirasçı, işlemin iptalini yasal miras payının tamamı için talep edebilir."},{question:"Miras bırakanın ölümünden ne kadar süre sonra dava açılabilir?",answer:"Bu dava türü zamanaşımına tabi olmadığından, miras bırakanın ölümünden sonra herhangi bir zaman diliminde açılabilir."}]},{slug:"almanya-bosanma-turkiye-mal-paylasimi",slugDE:"almanya-scheidung-tuerkei-vermoegensaufteilung",slugTR:"almanya-bosanma-turkiye-mal-paylasimi",slugEN:"divorce-germany-turkey-property-division",titleDE:"In Deutschland geschieden: Wie teile ich das Vermögen in der Türkei auf? (Die Verjährungsfalle)",titleTR:"Almanya’da Boşandım, Türkiye’deki Malları Nasıl Paylaştırırım? (Zamanaşımı Tuzağı)",excerptDE:"Möchten Sie nach einer Scheidung in Deutschland das Vermögen in der Türkei aufteilen? Die Verjährung beginnt nicht vor der Anerkennung. Wir erklären es Ihnen praxisnah.",excerptTR:"Almanya'da boşanıp Türkiye'deki malları paylaştırmak mı istiyorsunuz? Tanıma tenfiz öncesi zamanaşımı başlamaz. Yargıtay kararlarıyla açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Die große Mehrheit der in Deutschland lebenden türkischen Staatsbürger glaubt, dass nach einem Scheidungsurteil vor deutschen Gerichten die Immobilien und Bankkonten in der Türkei automatisch aufgeteilt werden. Dies ist rechtlich gesehen eine völlig falsche Annahme. Das Scheidungsurteil des deutschen Gerichts ist nur innerhalb des deutschen Rechtssystems gültig; es hat keine direkte Wirkung auf das Vermögen in der Türkei.

Noch gefährlicher ist, dass viele unserer Mitbürger die Anerkennungs- und Vollstreckbarerklärungsverfahren (Tanıma ve Tenfiz) jahrelang hinauszögern und damit faktisch riskieren, ihre Rechte auf Vermögensaufteilung in der Türkei zu verlieren. In diesem Artikel werden wir den kritischen rechtlichen Prozess, den in Deutschland geschiedene Personen mit Immobilien oder Bankguthaben in der Türkei kennen sollten, im Lichte von Urteilen des türkischen Kassationshofs (Yargıtay) und der in der Praxis auftretenden Probleme erläutern.

### 1. Grundregel: Das deutsche Scheidungsverfahren gilt in der Türkei nicht automatisch
Gemäß den Bestimmungen des Gesetzes über das internationale Privat- und Zivilprozessrecht (MÖHUK) Nr. 5718 Art. 50 ff. muss ein ausländisches Gerichtsurteil von türkischen Gerichten anerkannt oder für vollstreckbar erklärt werden, damit es in der Türkei rechtliche Wirkungen entfaltet. Ein vom deutschen Familiengericht erlassener Beschluss wird vom türkischen Standesamt nicht bearbeitet und führt zu keiner Änderung im türkischen Grundbuch.

Daher gelten Sie im türkischen Personenstandsregister weiterhin als "verheiratet", auch wenn Sie in Deutschland geschieden sind. Diese Situation führt zu ernsthaften Rechtsverlusten wie dem Hindernis für eine Wiederverheiratung, Erbrechtsproblemen und der Unmöglichkeit, eine Vermögensaufteilung zu fordern.

### 2. Wann beginnt die Verjährung? Die kritische Rechtsprechung des Yargıtay
Die Verjährungsfrist für Klagen auf Liquidation des Güterstands beträgt gemäß Art. 178 TMK 10 Jahre ab Rechtskraft des Scheidungsurteils. Hier gibt es jedoch eine äußerst wichtige Nuance für in Deutschland Geschiedene:

**Yargıtay 8. Zivilkammer, 2015/3525 E., 2015/8509 K.:**
> "Solange über das von ausländischen Gerichten erlassene und rechtskräftig gewordene Scheidungsurteil keine Anerkennung oder Vollstreckbarerklärung durch türkische Gerichte erfolgt ist, gelten die Ehegatten nach türkischem Recht nicht als geschieden. Daher besteht in der Zwischenzeit keine Möglichkeit, bestimmte mit der Scheidung verbundene Klagerechte wie Schadensersatz, Unterhalt und Liquidation des Güterstands in der Türkei auszuüben. In dieser Hinsicht muss die Verjährungsfrist für Forderungsklagen auf Liquidation des Güterstands ab dem Datum der Rechtskraft der Anerkennungs-/Vollstreckungsentscheidung beginnen, an dem die scheidungsabhängigen Klagerechte ausübbar werden."

Dieses Urteil bedeutet in der Praxis: Wenn Sie sich 2015 in Deutschland haben scheiden lassen und noch keine Anerkennungsklage in der Türkei eingereicht haben, hat die Verjährungsfrist noch nicht begonnen. Dies bedeutet jedoch nicht, dass Sie das Recht haben, ewig zu warten.

### 3. Die verborgenen Gefahren des Wartens

**a) Die Gegenseite kann Vermögenswerte übertragen**
Obwohl Sie im Personenstandsregister in der Türkei immer noch als "verheiratet" erscheinen, kann Ihr Ex-Ehegatte die Immobilien im Grundbuch an Dritte verkaufen oder übertragen. In diesem Fall müssen Sie eine Klage auf Grundbuchberichtigung und Eintragung einreichen, wobei der Schutz des gutgläubigen Dritten (Art. 1023 TMK) ins Spiel kommen kann und Ihr Rechtsverlust irreparabel werden könnte.

**b) Risiko des Scheingeschäfts (Muris Muvazaası)**
Ihr Ex-Ehegatte kann die Immobilie im Grundbuch an Verwandte als "Verkauf" übertragen, obwohl in Wirklichkeit eine Schenkungsabsicht besteht. Nach der ständigen Rechtsprechung der 1. Zivilkammer des Yargıtay ist die Aufhebung solcher kollusiven Geschäfte zwar möglich, die Beweislast ist jedoch hoch und Beweise können verloren gehen, wenn sich der Prozess in die Länge zieht.

**c) Zustellungsproblem**
Wenn die Anerkennungsklage zu spät eingereicht wird, kann sich die Adresse des Ex-Ehegatten geändert haben, er kann die Staatsangehörigkeit gewechselt haben oder der Kontakt kann vollständig abgebrochen sein. In diesem Fall kann die diplomatische Zustellung nach Deutschland 6-8 Monate dauern. Wenn der Ex-Ehegatte die deutsche Staatsangehörigkeit angenommen hat, ist es zudem zwingend erforderlich, alle Zustellungsunterlagen ins Deutsche zu übersetzen.

### 4. Die richtige Strategie: Gleichzeitige Klageerhebung
In der Praxis ist es die gesündeste Methode, die Anerkennungs- und Vollstreckungsklage gleichzeitig mit der Klage auf Liquidation des Güterstands einzureichen und die Güterstandsklage bis zur Rechtskraft der Anerkennungsentscheidung auszusetzen. So wird sowohl das Verjährungsrisiko eliminiert als auch die Gesamtdauer des Verfahrens verkürzt, indem die Prozesse parallel geführt werden.

Darüber hinaus verhindert der Antrag auf eine einstweilige Verfügung gemäß Art. 389 ff. HMK zum Schutz der Immobilien in der Türkei, dass die Gegenseite die Vermögenswerte überträgt. Diese Verfügung kann sogar schon beantragt werden, bevor die Anerkennungsklage abgeschlossen ist.

### 5. Prozessmanagement aus Deutschland: Vorteil von UYAP und digitalem Zugang
Als Doğru Kanzlei verfolgen wir alle Gerichtsprozesse in der Türkei im Namen unserer Mandanten in Deutschland über das UYAP-System in Echtzeit. Über unsere Büros in Ankara und Mannheim führen wir sowohl die Vollmachtsgeschäfte vor deutschen Notaren/Konsulaten als auch die Verhandlungen vor türkischen Gerichten persönlich durch.

Dank unserer doppelten Zulassung bei der Anwaltskammer Ankara (Mitgliedsnr: 47068) und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) müssen Sie keinen separaten Anwalt für Ihre Klagen in der Türkei beauftragen. Dies ist ein entscheidender Vorteil, sowohl in Bezug auf Kostenersparnis als auch zur Vermeidung von Informationsverlusten.

### 6. Häufig gestellte Fragen

**Gilt die Zugewinnausgleich-Entscheidung aus Deutschland in der Türkei?**
Nein. Die Entscheidung über den Zugewinnausgleich nach deutschem Recht umfasst nicht die Immobilien in der Türkei. Für Immobilien in der Türkei muss zusätzlich eine Klage auf Liquidation des Güterstands nach türkischem Recht erhoben werden. Das anzuwendende Recht richtet sich nach dem Eheschließungsdatum: Bei Ehen vor dem 01.01.2002 gilt der Güterstand der Gütertrennung, danach der Güterstand der Beteiligung an erworbenen Gütern.

**Kann ich eine Klage einreichen, ohne in die Türkei zu reisen?**
Ja. Mit einer Vollmacht, die beim türkischen Konsulat in Deutschland oder bei einem deutschen Notar ausgestellt wird, kann der gesamte Prozess von Ihrem Anwalt durchgeführt werden. Sie müssen nicht an den Verhandlungen teilnehmen.

**Mein Ex-Ehegatte stimmt der Klageerhebung nicht zu, was kann ich tun?**
Die Anerkennungs- und Vollstreckungsklage kann einseitig erhoben werden; die Zustimmung der Gegenseite ist nicht erforderlich. Der Prozess wird durch Einreichung des rechtskräftigen deutschen Gerichtsurteils (Rechtskraftvermerk) zusammen mit der Klageschrift, der Apostille und der beglaubigten türkischen Übersetzung eingeleitet.

### 7. Fazit
Wenn Sie ein Scheidungsurteil in Deutschland erhalten haben und in der Türkei Immobilien, Bankkonten oder sonstige Vermögenswerte besitzen, ist es von großer Bedeutung, das Anerkennungs- und Liquidationverfahren unverzüglich einzuleiten. Obwohl die Verjährung nach der Rechtsprechung des Yargıtay erst ab der Rechtskraft der Anerkennung beginnt, steigt das Risiko, dass die Gegenseite die Vermögenswerte überträgt, mit jedem Tag.

Detaylı bilgi ve hukuki danışmanlık için Mannheim ofisimizden (+49 176 6122 1210) veya Ankara ofisimizden (+90 533 237 59 18) bize ulaşabilirsiniz.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Almanya'da yaşayan Türk vatandaşlarının büyük çoğunluğu, Alman mahkemelerinde boşanma kararı aldıktan sonra Türkiye'deki gayrimenkul ve banka hesaplarının otomatik olarak paylaşılacağını düşünür. Bu, hukuki açıdan tamamen yanlış bir varsayımdır. Alman mahkemesinin boşanma kararı, yalnızca Alman hukuk sistemi içinde geçerlidir; Türkiye'deki malvarlığı üzerinde hiçbir doğrudan hüküm ifade etmez.

Daha da tehlikelisi, birçok vatandaşımız tanıma ve tenfiz davasını yıllarca erteleyerek Türkiye'deki mal paylaşımı haklarını fiilen kaybetme riski ile karşı karşıya kalmaktadır. Bu yazıda, Almanya'da boşanmış olup Türkiye'de gayrimenkulü veya bankada parası bulunan vatandaşlarımızın bilmesi gereken kritik hukuki süreci, Yargıtay kararları ışığında ve pratikte yaşanan sorunlarla birlikte ele alacağız.

### 1. Temel Kural: Alman Boşanma Kararı Türkiye'de Geçerli Değildir
5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun (MÖHUK) m.50 ve devamı hükümleri uyarınca, yabancı bir mahkeme kararının Türkiye'de hüküm ve sonuç doğurabilmesi için o kararın Türk mahkemelerince tanınması veya tenfiz edilmesi zorunludur. Almanya Familiengericht tarafından verilen bir Beschluss, Türkiye nüfus müdürlüğü tarafından işleme alınmaz ve Türk tapu sicilinde herhangi bir değişikliğe yol açmaz.

Dolayısıyla Almanya'da boşanmış olsanız bile, Türkiye'deki nüfus kaydınızda "evli" olarak görünmeye devam edersiniz. Bu durum, yeniden evlenme engeli, miras hakkı sorunları ve mal paylaşımı talep edememe gibi ciddi hak kayıplarına yol açar.

### 2. Zamanaşımı Ne Zaman Başlar? Yargıtay'ın Kritik İçtihadı
Mal rejiminin tasfiyesine ilişkin davalarda zamanaşımı süresi, TMK m.178 gereğince boşanma kararının kesinleşmesinden itibaren 10 yıldır. Ancak burada Almanya'da boşananlar için son derece önemli bir nüans vardır:

**Yargıtay 8. Hukuk Dairesi, 2015/3525 E., 2015/8509 K.:**
> "Yabancı mahkemelerce verilmiş ve kesinleşmiş boşanma ilamı hakkında, Türk mahkemelerince tanıma tenfiz kararı verilmedikçe eşler Türk kanunlarına göre boşanmış sayılmayacaklarından, ara dönemde boşanmaya bağlı olarak Türkiye'de açılacak tazminat, nafaka ve mal rejiminin tasfiyesi gibi bazı dava haklarının kullanılması imkanı olmayacaktır. Bu bakımdan; mal rejiminin tasfiyesine ilişkin alacak davalarında zamanaşımı süresinin, boşanmaya bağlı dava haklarının kullanılabilir hale geldiği, tanıma/tenfiz kararının kesinleşmesi tarihinden başlatılması gerekir."

Bu karar, pratikte şu anlama gelir: Almanya'da 2015'te boşandıysanız ve henüz Türkiye'de tanıma tenfiz davası açmadıysanız, zamanaşımı süresi henüz başlamamıştır. Ancak bu, sonsuza kadar bekleme hakkınız olduğu anlamına gelmez.

### 3. Beklemenin Gizli Tehlikeleri

**a) Karşı Taraf Malları Devredebilir**
Türkiye'deki nüfus kaydında hâlâ "evli" görünseniz de, eski eşiniz tapudaki gayrimenkulleri üçüncü kişilere satabilir veya devredebilir. Bu durumda tapu iptali ve tescil davası açmanız gerekecek olup, iyi niyetli üçüncü kişi koruması (TMK m.1023) devreye geri girebilir ve hak kaybınız telafi edilemez hale gelebilir.

**b) Muris Muvazaası Riski**
Eski eşiniz, tapudaki gayrimenkulü gerçekte bağışlama niyetiyle akrabalarına "satış" olarak göstererek devredebilir. Yargıtay 1. Hukuk Dairesi'nin yerleşik içtihadına göre, bu tür muvazaalı işlemlerin iptali mümkün olmakla birlikte, ispat yükü ağırdır ve sürecin uzaması halinde deliller kaybolabilir.

**c) Tebligat Sorunu**
Tanıma tenfiz davası geç açıldığında, eski eşin adresi değişmiş, vatandaşlık değiştirmiş veya irtibat tamamen kopmuş olabilir. Bu durumda Almanya'ya yapılacak diplomatik yoldan tebligat 6-8 ay sürebilmektedir. Eski eş Alman vatandaşlığına geçmişse, tebligat evraklarının tamamının Almanca'ya tercüme edilmesi de zorunludur.

### 4. Doğru Strateji: Eş Zamanlı Dava Açmak
Pratikte en sağlıklı yöntem, tanıma ve tenfiz davası ile mal rejiminin tasfiyesi davasını eş zamanlı olarak açmak ve mal rejimi davasını tanıma tenfiz kararının kesinleşmesini bekletici mesele yapmaktır. Böylece hem zamanaşımı riski ortadan kalkar, hem de süreç paralel yürütülerek toplam dava süresi kısalır.

Ayrıca, Türkiye'deki gayrimenkullerin korunması için HMK m.389 vd. uyarınca ihtiyati tedbir talebinde bulunulması, karşı tarafın malları devretmesini engeller. Bu tedbir, tanıma tenfiz davası henüz sonuçlanmadan bile talep edilebilir.

### 5. Almanya'dan Sürecin Yönetimi: UYAP ve Dijital Erişim Avantajı
Doğru Kanzlei olarak Almanya'daki müvekkillerimiz adına Türkiye'deki tüm dava süreçlerini UYAP sistemi üzerinden anlık takip ediyoruz. Ankara ve Mannheim'daki ofislerimiz aracılığıyla hem Alman noterleri/konsoloslukları nezdinde vekâletname işlemlerini hem de Türk mahkemelerindeki duruşmaları bizzat yürütüyoruz.

Ankara Barosu (Sicil No: 47068) ve Rechtsanwaltskammer Karlsruhe (§207 BRAO) çift kaydımız sayesinde, Türkiye'deki davalarınız için ayrı bir avukat tutmanıza gerek kalmaz. Bu, hem maliyet tasarrufu hem de iletişim kaybının önlenmesi açısından kritik bir avantajdır.

### 6. Sıkça Sorulan Sorular

**Almanya'daki Zugewinnausgleich kararı Türkiye'de geçerli mi?**
Hayır. Alman hukukundaki Zugewinnausgleich (edinilmiş mallara katılım paylaşımı) kararı, Türkiye'deki taşınmazları kapsamaz. Türkiye'deki gayrimenkuller için ayrıca Türk hukukuna göre mal rejiminin tasfiyesi davası açılmalıdır. Uygulanacak hukuk, evlenme tarihine göre belirlenir: 01.01.2002 öncesi evliliklerde mal ayrılığı rejimi, sonrasında edinilmiş mallara katılma rejimi uygulanır.

**Türkiye'ye gitmeden dava açabilir miyim?**
Evet. Almanya'daki Türk Konsolosluğu veya Alman noterinden çıkarılacak vekâletname ile tüm süreç avukatınız tarafından yürütülebilir. Duruşmalara katılmanız gerekmez.

**Eski eşim dava açılmasına rıza göstermiyor, ne yapabilirim?**
Tanıma ve tenfiz davası tek taraflı açılabilir; karşı tarafın rızası aranmaz. Dava dilekçesi ile birlikte kesinleşmiş Alman mahkeme kararı (Rechtskraftvermerk), apostil şerhi ve onaylı Türkçe tercümesi sunularak süreç başlatılır.

### 7. Sonuç
Almanya'da boşanma kararı aldıysanız ve Türkiye'de gayrimenkul, banka hesabı veya herhangi bir malvarlığınız varsa, tanıma tenfiz ve mal rejimi tasfiyesi sürecini vakit kaybetmeden başlatmanız büyük önem taşımaktadır. Yargıtay içtihadı ile zamanaşımı tanıma tenfiz kesinleşmesinden itibaren başlıyor olsa da, karşı tarafın malları devretme riski her geçen gün artmaktadır.

Detaylı bilgi ve hukuki danışmanlık için Mannheim ofisimizden (+49 176 6122 1210) veya Ankara ofisimizden (+90 533 237 59 18) bize ulaşabilirsiniz.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:Ob,dateDE:"9. April 2026",dateTR:"9 Nisan 2026",readTimeDE:"10 Min. Lesezeit",readTimeTR:"10 dk okuma",publishedAt:"2026-04-09",keywordsDE:"Scheidung Deutschland Vermögensaufteilung, Türkei Liquidation Güterstand, Anerkennung Verjährung, Klage Türkei aus Deutschland, Türkischer Anwalt Mannheim",keywordsTR:"Almanya boşanma mal paylaşımı, Türkiye mal rejimi tasfiyesi, tanıma tenfiz zamanaşımı, Almanya'dan Türkiye'de dava, Mannheim Türk avukat",faqDE:[{question:"Ist ein deutsches Scheidungsurteil in der Türkei gültig?",answer:"Nein. Ein deutsches Scheidungsurteil gilt nur im deutschen Rechtssystem. Damit es in der Türkei wirksam wird, muss es von einem türkischen Gericht anerkannt und vollstreckt werden (Tanıma & Tenfiz). Ohne dieses Verfahren bleibt man im türkischen Personenstandsregister weiterhin als verheiratet eingetragen."},{question:"Was passiert mit Immobilien und Bankkonten in der Türkei nach einer Scheidung in Deutschland?",answer:"Das deutsche Scheidungsurteil hat keinerlei direkte Wirkung auf Vermögen in der Türkei. Für türkische Immobilien und Bankkonten muss separat eine Klage zur Auflösung des Güterrechts nach türkischem Recht eingereicht werden."},{question:"Wann beginnt die Verjährungsfrist für die Güterrechtsauflösung in der Türkei?",answer:"Laut einem Urteil des Yargıtay (8. Zivilkammer, 2015/3525 E.) beginnt die 10-jährige Verjährungsfrist nicht mit dem deutschen Scheidungsurteil, sondern erst mit der Rechtskraft des türkischen Anerkennungsurteils. Wer also noch kein Tanıma-Tenfiz-Verfahren eingeleitet hat, bei dem hat die Frist noch nicht begonnen."},{question:"Kann der Ex-Partner türkische Immobilien verkaufen, bevor das Verfahren abgeschlossen ist?",answer:"Ja, das ist möglich und ein reales Risiko. Da man im türkischen Grundbuch noch als verheiratet gilt, kann der Ex-Partner Immobilien an Dritte verkaufen oder übertragen. Zum Schutz kann beim türkischen Gericht ein einstweiliger Rechtsschutz (ihtiyati tedbir) beantragt werden, noch bevor das Anerkennungsverfahren abgeschlossen ist."},{question:"Gilt der deutsche Zugewinnausgleich auch für Vermögen in der Türkei?",answer:"Nein. Der Zugewinnausgleich nach deutschem Recht erfasst keine türkischen Immobilien. Für in der Türkei belegenes Vermögen muss eine eigenständige Klage zur Güterrechtsauflösung nach türkischem Recht eingereicht werden. Welches Güterrecht gilt, hängt vom Heiratsdatum ab: Vor dem 01.01.2002 gilt Gütertrennung, danach das Modell der Zugewinngemeinschaft nach türkischem Recht."},{question:"Kann ich das Verfahren führen, ohne in die Türkei zu reisen?",answer:"Ja. Mit einer Vollmacht, die beim deutschen Notar oder türkischen Konsulat in Deutschland ausgestellt wird, kann ein Anwalt das gesamte Verfahren in der Türkei stellvertretend führen. Eine persönliche Anwesenheit bei Gerichtsterminen ist nicht erforderlich."},{question:"Was ist, wenn der Ex-Partner dem Verfahren nicht zustimmt?",answer:"Das Tanıma-Tenfiz-Verfahren kann einseitig eingeleitet werden, ohne Zustimmung des Ex-Partners. Erforderlich sind das rechtskräftige deutsche Gerichtsurteil (mit Rechtskraftvermerk), eine Apostille sowie eine beglaubigte türkische Übersetzung."},{question:"Wie lange dauert das Tanıma-Tenfiz-Verfahren aus Deutschland?",answer:"Die Dauer variiert, kann sich aber erheblich verlängern, wenn der Ex-Partner schwer erreichbar ist. Eine Zustellung auf diplomatischem Weg nach Deutschland kann 6–8 Monate in Anspruch nehmen. Wurde der Ex-Partner zwischenzeitlich deutscher Staatsbürger, müssen alle Zustellungsunterlagen zusätzlich ins Deutsche übersetzt werden."}],faqTR:[{question:"Alman boşanma kararı Türkiye'de geçerli mi?",answer:"Hayır. Alman boşanma kararı sadece Alman hukuk sisteminde geçerlidir. Türkiye'de etkili olabilmesi için bir Türk mahkemesi tarafından tanınması ve tenfizi (Tanıma & Tenfiz) gerekir. Bu prosedür olmadan Türk nüfus kaydında hâlâ evli görünürsünüz."},{question:"Almanya'da boşandıktan sonra Türkiye'deki mal varlığına ne olur?",answer:"Alman boşanma kararının Türkiye'deki varlıklar üzerinde doğrudan bir etkisi yoktur. Türkiye'deki taşınmazlar ve banka hesapları için Türk hukukuna göre ayrıca bir mal rejimi tasfiyesi davası açılması gerekmektedir."},{question:"Türkiye'de mal rejimi tasfiyesi davası için zamanaşımı ne zaman başlar?",answer:"Yargıtay kararına göre, 10 yıllık zamanaşımı süresi Alman boşanma kararıyla değil, Türk tanıma kararının kesinleşmesiyle başlar. Dolayısıyla henüz tanıma-tenfiz davası açmamış olanlar için süre henüz işlemeye başlamamıştır."},{question:"Dava bitmeden eski eş Türkiye'deki malları satabilir mi?",answer:"Evet, bu mümkün ve gerçek bir risktir. Türkiye'deki tapu sicilinde hâlâ evli göründüğünüz için, eski eş taşınmazları üçüncü kişilere satabilir. Korunma amacıyla, tanıma davası sonuçlanmadan önce mahkemeden ihtiyati tedbir talep edilebilir."},{question:"Almanya'daki mal paylaşımı Türkiye'deki malları kapsar mı?",answer:"Hayır. Alman hukukuna göre yapılan mal rejimi tasfiyesi Türkiye'deki taşınmazları kapsamaz. Türkiye'de bulunan varlıklar için Türk hukukuna göre bağımsız bir mal rejimi tasfiyesi davası açılmalıdır."},{question:"Türkiye'ye gitmeden davayı yürütebilir miyim?",answer:"Evet. Almanya'dan çıkarılacak bir vekaletname ile bir avukat Türkiye'deki tüm süreci adınıza yürütebilir. Duruşmalara bizzat katılmanız gerekmez."},{question:"Eski eş boşanmanın tanınmasına onay vermezse ne olur?",answer:"Tanıma-tenfiz davası, eski eşin onayı olmadan tek taraflı olarak açılabilir. Kesinleşmiş Alman mahkeme kararı, apostil ve Türkçe tercüme yeterlidir."},{question:"Tanıma-tenfiz davası ne kadar sürer?",answer:"Süre değişebilir ancak eski eşe ulaşılamıyorsa önemli ölçüde uzayabilir. Almanya'ya diplomatik yolla tebligat yapılması 6-8 ay sürebilir."}]},{slug:"miras-hukuku-rehberi",slugDE:"erbrecht-leitfaden-tuerkei",slugTR:"miras-hukuku-rehberi",slugEN:"inheritance-law-guide-turkey",titleDE:"Erbrecht-Leitfaden für türkische Staatsangehörige in Deutschland",titleTR:"Almanya'daki Türk Vatandaşları için Kapsamlı Miras Hukuku Rehberi",excerptDE:"Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien. Wir erklären den Veraset İlamı und Testamente nach türkischem Recht.",excerptTR:"Almanya'daki Türk vatandaşları için miras hukuku rehberi. Türk hukukuna göre Veraset İlamı, vasiyetnameler ve dikkat edilmesi gereken kritik noktalar.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien in Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum – und das aus gutem Grund. Es berührt zwei völlig unterschiedliche Rechtssysteme gleichzeitig. Wer sich nicht rechtzeitig damit auseinandersetzt, riskiert monatelange Verfahren, unnötige Kosten und familiäre Konflikte in einer ohnehin schon belastenden Lebensphase.

In diesem Leitfaden erklären wir Ihnen die wichtigsten Aspekte des türkischen Erbrechts: klar, praxisnah und ohne juristischen Fachjargon.

### Welches Erbrecht gilt für Immobilien in der Türkei?

Stirbt ein türkischer Staatsangehöriger, der in Deutschland gelebt hat, gilt für sein in der Türkei befindliches unbewegliches Vermögen (Immobilien, Grundstücke) zwingend das türkische Recht. Dies ist der Grundsatz des Belegenheitsorts (lex rei sitae).

**Wichtig**: Die Türkei ist kein EU-Mitgliedstaat und hat die EU-Erbrechtsverordnung nicht ratifiziert. Türkische Gerichte wenden bei Nachlässen mit Bezug zur Türkei weiterhin eigene Kollisionsnormen an. Eine grenzüberschreitende Nachlassregelung erfordert daher fundierte Kenntnisse der türkischen Rechtspraxis.

### Die Veraset İlamı – Das türkische Erbschaftszeugnis

Ein Begriff, der in unserer Kanzlei in Mannheim fast täglich fällt: die **Veraset İlamı**. Dieses Dokument wird von einem türkischen Notar oder Nachlassgericht ausgestellt und weist aus, wer gesetzlicher Erbe nach türkischem Recht ist und zu welchem Anteil. Ohne dieses Dokument ist in der Türkei in der Regel kein Zugriff auf Konten, Immobilien oder sonstige Vermögenswerte möglich.

**Was Sie wissen müssen**:
- Die Veraset İlamı ist Voraussetzung für den Zugriff auf Bankkonten und Immobilien in der Türkei.
- Sie kann über einen türkischen Notar (**Noter**) oder das Sulh Hukuk Mahkemesi beantragt werden.
- Für die Verwendung im Ausland sind Apostille und beglaubigte Übersetzungen erforderlich.

### Gesetzliche Erbfolge in der Türkei

Wenn kein Testament vorhanden ist, richtet sich die Erbfolge nach dem türkischen Zivilgesetzbuch (TMK). In der Türkei gilt das Belegenheitsprinzip für Immobilien, was bedeutet, dass für in der Türkei belegenes Grundvermögen zwingend türkisches Erbrecht Anwendung findet.

**Die Erbfolge nach türkischem Recht**:
1. **Abkömmlinge**: Kinder und deren Nachkommen bilden die erste Parentel.
2. **Eltern**: Wenn keine Abkömmlinge vorhanden sind, erben die Eltern zu gleichen Teilen.
3. **Großeltern**: Wenn weder Abkömmlinge noch Eltern vorhanden sind, geht das Erbe an die Großeltern.
**Überlebender Ehegatte**: Sein Erbanteil variiert je nachdem, mit welcher Parentel er gemeinsam erbt (1/4 neben Abkömmlingen, 1/2 neben Eltern).

### Testament nach türkischem Recht – Warum es wichtig ist

Ein Testament ist das wirksamste Mittel, um den eigenen Nachlass nach dem eigenen Willen zu regeln. Türkische Staatsangehörige können in einem Testament ausdrücklich festlegen, wie ihr Vermögen in der Türkei verteilt werden soll.

**Achtung**: Ein deutsches "Berliner Testament" kann in der Türkei zu Problemen mit dem türkischen Pflichtteilsrecht (**Mahfuz Hisse**) führen. Wir beraten Sie gerne zur Wirksamkeit Ihrer letztwilligen Verfügungen nach türkischem Recht.

### Immobilien in der Türkei – Was passiert im Erbfall?

Viele türkischstämmige Familien besitzen Immobilien in der Türkei. Stirbt der Eigentümer, gilt das sogenannte Belegenheitsprinzip: Für Immobilien wenden türkische Gerichte zwingend türkisches Recht an.

**Das hat konkrete Konsequenzen**:
- Die Immobilie muss im türkischen Grundbuch (**Tapu Sicili**) auf die Erben umgeschrieben werden.
- Dafür ist eine türkische Veraset İlamı erforderlich.
- Türkische Erbschaftsteuer (**Veraset ve İntikal Vergisi**) muss fristgerecht angemeldet werden.

### Häufige Fehler

- **Kein Testament nach türkischem Recht** – Die gesetzliche Erbfolge entspricht selten dem tatsächlichen Willen.
- **Fristen für die Erbschaftsteuer versäumt** – Bei im Ausland lebenden Erben gelten oft 6 Monate ab Todesfall.
- **Unbeglaubigte Dokumente** – Dokumente ohne Apostille werden in der Türkei nicht anerkannt.

**Dogru Kanzlei: Ihre Experten für türkisches Recht**
Als Mitglied der Ankara Barosu und der Anwaltskammer Karlsruhe (§ 207 BRAO) führen wir Erbschaftsangelegenheiten direkt vor türkischen Behörden durch. Wir sprechen Türkisch und Deutsch. Kontaktieren Sie uns für eine professionelle Unterstützung.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Geçen ay ofisimize gelen bir müvekkili hiç unutmayacağım. Mannheim'da 30 yıldır yaşayan, emekli bir tekstil işçisi. Babası Konya'da vefat etmiş, geride bir tarla ve küçük bir dükkan bırakmış. Adam bana şunu dedi:

> **"Avukat bey, kardeşlerim Türkiye'de halleder dediler, ben de bekledim. Üç yıl geçti, hâlâ hiçbir şey çözülmedi. Şimdi ne yapacağım?"**

Bu hikâyeyi neden anlattım? Çünkü bu, bize gelen vakaların büyük çoğunluğunun tam olarak nasıl başladığını gösteriyor. Yurt dışında yaşayan Türk vatandaşları, Türkiye'deki miras meselelerinde ya çok geç harekete geçiyor, ya yanlış kişilere güveniyor, ya da hangi hukukun geçerli olduğunu bile bilmiyor.

**Bu yazıyı okuyorsanız, muhtemelen benzer bir durumdasınız ya da ileride böyle bir durumla karşılaşmaktan endişeleniyorsunuz. Her iki durumda da doğru yerdesiniz.**

---

## Önce Şunu Anlayalım: Hangi Hukuk Geçerli?

Almanya'da yaşayan bir Türk vatandaşı olarak Türkiye'de miras bıraktığınızda — ya da miras aldığınızda — karşınıza hemen ilk soru şu çıkıyor: **Türk hukuku mu geçerli, Alman hukuku mu?**

Cevap: **Her ikisi de, ama farklı konular için.**

2015 yılından itibaren Avrupa Birliği'nde uygulanan **AB Miras Tüzüğü (EU Erbrechtsverordnung 650/2012)** sayesinde bu mesele artık eskiye göre daha net. Tüzüğe göre kural şu: Kişinin hayatının son dönemini geçirdiği ülkenin hukuku esas alınır.

Yani Almanya'da ikamet eden bir Türk vatandaşı vefat ederse, prensipte **Alman miras hukuku** geçerli olur. Ama — ve bu önemli bir "ama" — kişi yaşarken bir **"hukuk seçimi"** yaparak kendi vatandaşlık hukukunun, yani Türk hukukunun uygulanmasını talep edebilir.

---

### Türkiye'deki Taşınmazlar
**Türkiye'deki taşınmazlar söz konusu olduğunda ise tablo tamamen değişiyor.** Türkiye AB üyesi olmadığından, Türkiye'deki gayrimenkullerin mirası için **Türk hukuku** uygulanıyor. Nokta.

Bize sıkça sorulan şu: *"Almanya'da vasiyetname yaptım, Türkiye'deki evim için geçerli mi?"* **Maalesef hayır** — Türkiye'deki taşınmazlar için ayrıca Türk mahkemelerinde veya noterde işlem yapılması gerekiyor.

---

## Türkiye'deki Mirasta Süreç Nasıl İşliyor?

Türkiye'de miras, kendiliğinden el değiştirmiyor. Bir yakınınız vefat ettiğinde, yasal süreçleri aktif olarak başlatmanız gerekiyor.

### 1. Veraset İlamı (Mirasçılık Belgesi) Almak
İlk adım bu. Veraset ilamı, kimin mirasçı olduğunu resmi olarak belgeleyen bir mahkeme kararı ya da noter belgesi. **Bu belge olmadan Türkiye'deki hiçbir mülke, bankadaki paraya ya da araç gibi menkul değerlere ulaşamazsınız.**

Almanya'da yaşıyorsanız bu belgeyi iki farklı yoldan alabilirsiniz:
- **Türk Konsolosluğu aracılığıyla:** Bazı konsolosluklar veraset ilamı düzenleyebiliyor, ancak bu evraklarla Türkiye'deki her kurumun çalışmadığını görüyoruz.
- **Türkiye'deki Mahkeme veya Noter aracılığıyla:** Daha güvenli ve evrensel geçerliliği olan yol. **Vekâletname vererek bu işi bir avukata yaptırabilirsiniz.**

### 2. Tapu Devri
Türkiye'de taşınmaz miras alındığında, tapu müdürlüğünde mirasçılar adına tescil yapılması gerekiyor. Bu işlem için veraset ilamı, kimlik belgeleri ve bazı durumlarda tapu harçlarının ödenmesi şart.

**Kritik Uyarı:** Eğer birden fazla mirasçı varsa ve hepsi anlaşamıyorsa, taşınmaz "müşterek mülkiyet" olarak kalıyor. Bu da ilerleyen süreçte ciddi sorunlara yol açabiliyor — özellikle birisi satmak isteyip diğerleri istemediğinde.

### 3. Bankadaki Varlıklar
Türkiye'deki bir bankada vefat eden kişinin parası varsa, mirasçıların veraset ilamıyla ilgili şubeye başvurması gerekiyor. Bankaların bir kısmı ek belge isteyebiliyor; bunları önceden öğrenmek, gereksiz yolculukların önüne geçiyor.

---

## Almanya'daki Varlıklar Ne Olacak?

Diyelim ki vefat eden kişi hem Türkiye'de hem Almanya'da mal bıraktı. Bu durumda iki ayrı ülkedeki süreci eş zamanlı yürütmek gerekiyor.

Almanya'da **Erbschein** denen miras belgesi, Türkiye'deki veraset ilamının muadili. Nachlassgericht'e başvurularak alınıyor. **Bu belge olmadan Almanya'daki banka hesaplarına, gayrimenkule veya araçlara ulaşmak mümkün değil.**

**Önemli bir detay:** Almanya'daki **miras vergisi (Erbschaftsteuer)** Türkiye'dekinden çok farklı işliyor. Eşler ve çocuklar için muafiyet sınırları var, ancak bu sınırların üzerindeki miktarlar vergilendiriliyor. 

---

## Gerçek Bir Senaryo: İki Ülkede Mülk, Üç Kardeş

Ahmet Bey, 1978'de Almanya'ya gelmiş, Duisburg'a yerleşmiş. Yıllar içinde hem Almanya'da bir daire hem de İzmir'de babadan kalma bir arsa edinmiş. 2024'te vefat ediyor; geride eşi ve üç çocuğu kalıyor. İki çocuk Almanya'da, biri Türkiye'de yaşıyor.

**Almanya tarafı:** Ahmet Bey için Alman miras hukuku devreye giriyor. Eş ve çocuklar yasal mirasçı. Erbschein için Nachlassgericht'e başvurulması gerekiyor.

**Türkiye tarafı:** İzmir'deki arsa için Türk hukuku geçerli. Türk Medeni Kanunu'na göre eş ve çocukların saklı payları var. **Türkiye'deki kardeş belki "ben buradayım, ben hallederim" dedi — ama vekâletname olmadan tek başına hiçbir şey yapamaz.**

*Sorun nerede çıkıyor?* Türkiye'deki arsa üç kardeşin ortak mülkü oluyor. Uzlaşamazlarsa mahkeme yolu açılıyor — bu da yıllarca sürebilir.

---

## En Sık Yapılan 5 Hata (ve Nasıl Önlenir)

Aynı hataları tekrar tekrar görüyoruz. Samimi olmak gerekirse, bu hatalar çoğunlukla kötü niyetten değil, bilgisizlikten kaynaklanıyor.

### Hata 1: "Türkiye'deki akrabalar halleder"
Bu en yaygın yanılgı. Yasal olarak ancak **noterden onaylı vekâletname** ile işlem yapılabilir. Vekâletname yoksa, ne kadar iyi niyetli olursa olsun, yasal olarak hiçbir şey yapılamaz.

### Hata 2: Miras Vergisini Geç Öğrenmek
Türkiye'de veraset ve intikal vergisi var. Süre geçirilirse ceza ve gecikme faizi işliyor. Almanya tarafında da Erbschaftsteuer için katı süreler mevcut.

### Hata 3: Vasiyetnameyi Her Yerde Geçerli Sanmak
**Türk hukukunda çocukların belirli bir payı garanti altında (Saklı Pay)** — baba istese de bu payı sıfıra indiremez. Almanya'daki vasiyetname her zaman Türkiye'deki taşınmazı kapsamaz.

### Hata 4: Mirası Reddetmeyi Düşünmemek
Vefat eden kişi borçlu olabiliyor. **Hem Alman hem Türk hukukunda borçlar da mirasın bir parçasıdır.** Gerektiğinde "mirasın reddi" hakkınızı kullanın — ama sürelerine dikkat!

### Hata 5: Ortak Mülkiyetle Bırakmak
"Şimdilik böyle kalsın" denilip yıllarca tapusu devredilmeyen mülkler zamanla yönetilmez hale geliyor. Mirasçı sayısı arttıkça (çocuklar, torunlar) süreç çıkmaza giriyor.

---

## Miras Planlaması: Ölümden Önce Yapılabilecekler

Asıl güçlü adım, bu süreçleri kendi hayatınızda planlamak.
- **Vasiyetname düzenleyin:** İki ülkenin hukukunu bilen bir avukattan destek alın.
- **Hukuk seçimi yapın:** Türk vatandaşı olarak Türk hukukunun uygulanmasını tercih edebilirsiniz.
- **Aile içi konuşmayı ertelemeyin:** Bu konuşmalar yapılmadığında, geride kalanlar hem yas hem de çözümsüz hukuki meselelerle baş başa kalıyor.
- **Varlık envanteri çıkartın:** Tapu belgeleri ve banka bilgilerini bir araya toplayın.

---

## Son Söz

Miras meselesi, çoğu aile için yalnızca hukuki değil aynı zamanda duygusal bir süreç. Bir kaybın hemen ardından hem yas tutmak hem de hukuki işlemlerle uğraşmak gerçekten ağır.

Bu yüzden mümkünse bu hazırlıkları önceden yapın. Vasiyetnamenizi düzenleyin, yakınlarınızla konuşun, belgelerinizi bir araya toplayın. Bu adımlar hem size hem de geride kalacaklara büyük bir rahatlama sağlıyor.

Bize gelen vakaların büyük çoğunluğu erken müdahaleyle çok daha kolay çözülebilecek meselelerdi. Yıllar geçtikten sonra, üstüne yeni vefatlar ve yeni mirasçılar eklenince, çözüm giderek zorlaşıyor.

Türkiye'de ya da Almanya'da miras konusunda bir sorunuz varsa, ilk görüşmeyi ücretsiz yapıyoruz. Her vakanın kendine özgü olduğunu biliyoruz — dolayısıyla genel bilginin ötesinde, size özel değerlendirme yapabilmek için durumunuzu dinlemekten memnuniyet duyarız.

*Bu yazı genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Her vakanın kendine özgü koşulları olduğundan, somut bir hukuki sorun için mutlaka bir avukana başvurmanızı öneririz.*`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:"https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBsaWJyYXJ5JTIwYm9va3MlMjBsZWdhbHxlbnwxfHx8fDE3NzQ2OTc3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",dateDE:"15. März 2026",dateTR:"15 Mart 2026",readTimeDE:"12 Min. Lesezeit",readTimeTR:"13 dk okuma",publishedAt:"2026-03-15",keywordsDE:"Erbrecht Türkei Deutschland, Veraset İlamı beantragen, Erbschein Türkei, Erbschaftsteuer Türkei Fristen, Türkisches Erbrecht Beratung Mannheim",keywordsTR:"Türkiye miras hukuku Almanya, veraset ilamı nasıl alınır, miras vergisi Türkiye süreler, Almanya'dan miras davası, Türk miras avukatı"},{slug:"uluslararasi-bosanma",slugDE:"internationale-scheidung-tuerkei",slugTR:"uluslararasi-bosanma",slugEN:"international-divorce-guide",titleDE:"Internationale Scheidungsverfahren – Was Sie wissen müssen",titleTR:"Uluslararası Boşanma Davalarında Bilinmesi Gerekenler",excerptDE:"Eine Scheidung zwischen Deutschland und der Türkei ist rechtlich komplex. Wir erklären Zuständigkeiten und die Anerkennung nach türkischem Recht.",excerptTR:"Almanya ve Türkiye arasındaki boşanma süreçleri hukuken karmaşıktır. Yetkili mahkemeler ve tanıma-tenfiz konularını Türk hukukuna göre açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Für türkische Staatsangehörige in Deutschland ist eine Scheidung nicht nur emotional belastend – sie ist auch rechtlich komplex. Wenn zwei Rechtssysteme berührt werden, kann ein einziger Fehler jahrelange juristische Probleme nach sich ziehen.

In diesem Artikel erläutern wir die wichtigsten Aspekte einer internationalen Scheidung aus der Sicht des türkischen Rechts.

### Gilt ein deutsches Scheidungsurteil in der Türkei automatisch?

Die kurze Antwort: Nein. Damit ein in Deutschland ausgesprochenes Scheidungsurteil in der Türkei rechtliche Wirkung entfaltet, muss vor einem türkischen Gericht ein Anerkennungs- und Vollstreckbarerklärungsverfahren (**Tanıma ve Tenfiz**) durchgeführt werden.

Ohne dieses Verfahren gilt die Person in türkischen Registern weiterhin als verheiratet. Erforderliche Dokumente nach türkischem Recht:
- Original oder beglaubigte Kopie des deutschen Urteils.
- Rechtskraftbescheinigung.
- Apostille.
- Beglaubigte türkische Übersetzung.

### Das Anerkennungsverfahren (Tanıma-Tenfiz) in der Türkei

In der Türkei sind seit 2017 Verfahren zur Anerkennung ausländischer Urteile teilweise auch über die Bevölkerungsämter möglich, sofern beide Parteien gemeinsam erscheinen. Ist dies nicht der Fall, muss die Klage vor einem türkischen Familiengericht (Aile Mahkemesi) erhoben werden.

**Rechtsgrundlage**: MÖHUK (Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun).

### Vermögensaufteilung und Kindesunterhalt nach türkischem Recht

Wird die Scheidung direkt in der Türkei geführt, gilt seit 2002 das System der Beteiligung an erworbenen Gütern (**edinilmiş mallara katılım rejimi**). 

**Wichtig**: Unterhaltsansprüche (**Nafaka**) und Sorgerechtsfragen (**Velayet**) werden von türkischen Gerichten streng nach dem türkischen Zivilgesetzbuch (TMK) und dem Kindeswohl beurteilt.

### Sıkça Yapılan Hatalar

- **Tanıma davasını ertelemek**: Offene Registereinträge in der Türkei verhindern erneute Eheschließungen oder korrekte Erbfallabwicklungen.
- **Einseitige Scheidungen**: Wenn die Gegenseite nicht ordnungsgemäß geladen wurde, kann die Anerkennung in der Türkei verweigert werden.

**Doğru Kanzlei: Ihr Partner für internationales Familienrecht**
Internationale Scheidungsverfahren sind unser Alltag. Wir führen Anerkennungsverfahren direkt vor türkischen Gerichten – oft ohne dass Sie selbst reisen müssen. Wir sprechen Türkisch und Deutsch.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Almanya'da yaşayan Türk vatandaşları için boşanma süreci, iki ülkenin hukuk sistemini ilgilendiren karmaşık bir süreçtir. 

### Almanya'da Verilen Boşanma Kararı Türkiye'de Geçerli mi?

Kısa yanıt: Hayır, otomatik olarak geçerli değildir. Almanya'da verilen bir boşanma kararının Türkiye'de hukuki sonuç doğurabilmesi için Türk mahkemelerinde **tanıma ve tenfiz** davası açılması veya nüfus müdürlükleri nezdinde idari tanıma sürecinin işletilmesi gerekmektedir.

Tanıma ve tenfiz davası için gerekli belgeler:
- Almanya'da verilen boşanma kararının aslı.
- Kararın kesinleştiğine dair belge (Rechtskraftbescheinigung).
- Apostil şerhi.
- Onaylı Türkçe tercüme.

### Mal Paylaşımı ve Nafaka (Türk Hukukuna Göre)

Türk hukukunda boşanma sonrası mal paylaşımı, 2002'den itibaren geçerli olan **edinilmiş mallara katılım rejimi** üzerinden yürütülür. Almanya'daki mal paylaşımı kararları her zaman Türkiye'deki taşınmazları kapsamayabilir.

### Velayet ve Çocuk Kaçırma

- **Velayet**: Türk mahkemeleri velayet kararlarında çocuğun üstün yararını esas alır.
- **Uluslararası çocuk kaçırma**: Çocuğun diğer ebeveynin rızası olmadan Türkiye'ye götürülmesi, Lahey Sözleşmesi kapsamında suç teşkil edebilir.

### Sıkça Yapılan Hatalar

- **Tanıma davasını ertelemek**: Resmi kaydın güncellenmemesi, Türkiye'deki miras ve evlilik haklarını kısıtlar.
- **Tebligat hataları**: Karşı tarafın Almanya'daki adresine usulüne uygun tebligat yapılmaması, davanın uzamasına neden olur.

**Neden Dogru Kanzlei Mannheim?**
Uluslararası boşanma davaları ve tanıma-tenfiz süreçleri bizim uzmanlık alanımızdır. Davanızı Türkiye'deki mahkemeler nezdinde bizzat takip ediyoruz.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsYXclMjBmaXJtJTIwY291cnR8ZW58MXx8fHwxNzc0Njk3NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",dateDE:"2. März 2026",dateTR:"2 Mart 2026",readTimeDE:"10 Min. Lesezeit",readTimeTR:"10 dk okuma",publishedAt:"2026-03-02",keywordsDE:"Internationale Scheidung Türkei, Tanıma Tenfiz davası, Anerkennung Scheidung Ausland, Scheidungsrecht Türkei, Avukat Hasan Doğru Mannheim",keywordsTR:"Uluslararası boşanma Türkiye, tanıma tenfiz davası nasıl açılır, Almanya boşanma Türkiye geçerlilik, Türk aile hukuku, boşanma avukatı Mannheim"},{slug:"gayrimenkul-haklari",slugDE:"immobilienrechte-tuerkei",slugTR:"gayrimenkul-haklari",slugEN:"real-estate-rights-turkey",titleDE:"Rechte von Ausländern beim Immobilienkauf in der Türkei",titleTR:"Yabancıların Türkiye'de Mülk Satın Alma Hakları",excerptDE:"Immobilienkauf in der Türkei: Rechtssichere Abwicklung aus Deutschland, Tapu-Prüfung und Risiken nach türkischem Recht.",excerptTR:"Türkiye'de taşınmaz edinimi: Almanya'dan vekaletle tapu devri, yasal incelemeler ve yabancı alıcılar için kritik riskler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Der Traum vom eigenen Haus oder einer Ferienwohnung in der Türkei ist für viele Menschen in Deutschland sehr real. Doch der Immobilienkauf in der Türkei unterliegt besonderen türkischen Vorschriften und erfordert eine sorgfältige rechtliche Begleitung vor Ort.

### Dürfen Ausländer in der Türkei Immobilien kaufen?

Ja. Seit 2012 ist der Erwerb von Immobilien durch ausländische Staatsangehörige (einschließlich deutscher Staatsbürger) in der Türkei liberalisiert.

**Einschränkungen nach türkischem Recht**:
- Die Immobilie darf nicht in militärischen Sperrzonen liegen.
- Es gilt eine Flächenbegrenzung (max. 30 Hektar landesweit).

### Der Kaufprozess aus Deutschland gesteuert

Dank des türkischen Vollmachtsverfahrens können wir den gesamten Kaufprozess für Sie aus Deutschland heraus steuern.

**1. Vorprüfung (Tapu-Check)**:
Wir prüfen im Grundbuchamt (**Tapu Müdürlüğü**), ob die Immobilie belastet ist (Hipotek, Haciz).

**2. Eigentumsübertragung**:
In der Türkei erfolgt die Eigentumsübertragung zwingend beim zuständigen Grundbuchamt, nicht beim Notar. Mit einer in Deutschland erstellten und apostillierten Vollmacht (**Vekaletname**) führen wir diesen Schritt für Sie durch.

### Welche Steuern fallen an?

- **Grunderwerbsteuer (Tapu Harcı)**: In der Regel 4 % des offiziellen Wertes.
- **Jährliche Grundsteuer (Emlak Vergisi)**: Wird an die jeweilige Kommune gezahlt.

**Doğru Kanzlei: Ihre Sicherheit in der Türkei**
Wir prüfen Ihre Verträge nach türkischem Recht und sorgen für eine rechtssichere Eintragung im Grundbuch. Wir sprechen Türkisch und Deutsch.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Türkiye'de taşınmaz edinimi, yabancı uyruklular ve yurt dışında yaşayan vatandaşlarımız için özel yasal prosedürlere tabidir.

### Yabancılar İçin Taşınmaz Edinimi

Alman vatandaşları ve diğer yabancı uyruklular, belirli kısıtlamalar (askeri yasak bölgeler gibi) dışında Türkiye'de mülk sahibi olabilirler.

### Süreci Almanya'dan Yönetmek

Türkiye'ye gitmenize gerek kalmadan, uzman bir avukat aracılığıyla tüm süreci yönetebilirsiniz:
- **Tapu Kaydı İncelemesi**: Mülk üzerinde haciz veya ipotek olup olmadığının kontrolü.
- **Vekaletle İntikal**: Almanya'daki noterden alınan apostilli vekaletname ile Türkiye'deki tapu devrinin tamamlanması.

### Dikkat Edilmesi Gereken Riskler

- **İskan Sorunu**: Yapı kullanma izni olmayan mülklerin devrinde sorunlar yaşanabilir.
- **Tapu Harçları**: Satış bedeli üzerinden alınan %4 harç ve yıllık emlak vergileri.

**Neden Dogru Kanzlei?**
Türkiye'deki taşınmaz hukukuna hakimiz ve işlemlerinizi doğrudan Türk makamları nezdinde takip ediyoruz.`,category:"Gayrimenkul Hukuku",categoryDE:"Immobilienrecht",image:Sm,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02",keywordsDE:"Immobilienkauf Türkei Rechte, Tapu Prüfung Türkei, Grunderwerbsteuer Türkei, Vollmacht Immobilien Türkei, Immobilienrecht Anwalt Türkei",keywordsTR:"Türkiye'de taşınmaz edinimi yabancılar, tapu sorgulama nasıl yapılır, emlak vergisi Türkiye, vekaletle tapu devri, gayrimenkul avukatı"},{slug:"tanima-tenfiz-rehberi",slugDE:"tanima-tenfiz-leitfaden",slugTR:"tanima-tenfiz-rehberi",slugEN:"recognition-enforcement-guide-turkey",titleDE:"Tanıma ve Tenfiz: Warum Ihre deutsche Scheidung in der Türkei nicht gilt",titleTR:"Tanıma ve Tenfiz: Almanya'daki Boşanma Kararınız Türkiye'de Neden Geçersiz?",excerptDE:"In Deutschland geschieden, in der Türkei noch verheiratet? Wir erklären das Anerkennungsverfahren nach türkischem Recht.",excerptTR:"Almanya'daki boşanma kararınızı Türkiye'de nasıl tanıtabilirsiniz? Tanıma ve tenfiz davası süreçlerini açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Das Problem: Statusdiskrepanz

Viele Menschen in Deutschland sind hier rechtskräftig geschieden, gelten aber in der Türkei weiterhin als verheiratet. Dies hat Folgen für das Erbrecht und erneute Eheschließungen in der Türkei.

**Rechtsgrundlage**: MÖHUK Art. 50–59.

### Voraussetzungen für die Anerkennung in der Türkei

1. **Rechtskraft**: Das deutsche Urteil muss rechtskräftig sein.
2. **Apostille**: Bestätigung der Echtheit des Dokuments.
3. **Kein Verstoß gegen den Ordre Public**: Das Urteil darf nicht gegen fundamentale Werte des türkischen Rechts verstoßen.

### Dauer und Kosten

Das Verfahren vor dem türkischen Familiengericht dauert in der Regel **3 bis 6 Monate**. Wenn beide Parteien durch Anwälte vertreten sind, kann es deutlich schneller gehen.

**Doğru Kanzlei: Direkte Vertretung vor türkischen Gerichten**
Wir führen Tanıma-Tenfiz-Verfahren persönlich vor dem türkischen Familiengericht – ohne Drittvermittlung.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Almanya'da Boşanmış, Türkiye'de Hala Evli

Alman mahkemesinin boşanma kararı Türkiye'de otomatik olarak tanınmaz. Bu kararın nüfus kayıtlarına işlenmesi için **Tanıma ve Tenfiz** davası açılmalıdır.

### Şartlar

- **Kesinleşme Şerhi**: Kararın kesinleşmiş olması.
- **Apostil**: Alman makamlarından alınan doğrulama şerhi.
- **Onaylı Tercüme**: Belgelerin Türkçeye çevrilmiş olması.

**Neden Dogru Kanzlei?**
Türkiye'deki aile mahkemeleri nezdindeki süreci bizzat yönetiyoruz.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:Em,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-02",keywordsDE:"Tanıma ve Tenfiz Deutschland, Scheidung Türkei Anerkennung, MÖHUK Art 50, Familienrecht Türkei Anwalt, Scheidung Deutschland Türkei Register",keywordsTR:"Tanıma ve tenfiz davası Almanya, boşanma kararı Türkiye'de tanıtma, kesinleşme şerhi apostil, aile mahkemesi tanıma davası, tanıma tenfiz avukatı"},{slug:"sakli-pay-tenkis-davasi",slugDE:"pflichtteil-herabsetzungsklage-tuerkei",slugTR:"sakli-pay-tenkis-davasi",slugEN:"reserved-portion-reduction-lawsuit-turkey",titleDE:"Saklı Pay im türkischen Erbrecht: Wann Erben klagen können",titleTR:"Saklı Pay ve Tenkis Davası: Mirasçıların Hakları ve Dava Süreci",excerptDE:"Pflichtteil (Saklı Pay) nach türkischem Recht verletzt? Wir erklären die Herabsetzungsklage (Tenkis Davası).",excerptTR:"Türk miras hukukunda saklı pay nedir? Tenkis davası şartları ve mirasçıların haklarını açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist der Saklı Pay (Pflichtteil)?

Im türkischen Erbrecht schützt der Saklı Pay bestimmte nahe Angehörige davor, vollständig vom Erbe ausgeschlossen zu werden.

**Rechtsgrundlage**: TMK Art. 505–512.

### Die Tenkis Davası (Herabsetzungsklage)

Wurde der Pflichtteil verletzt, kann innerhalb einer Frist von 1 Jahr ab Kenntnis (max. 10 Jahre ab Eröffnung) die **Tenkis Davası** vor einem türkischen Zivilgericht erhoben werden.

**Doğru Kanzlei: Ihr Vorteil**
Als Mitglied der Ankara Barosu führen wir diese Klagen professionell vor türkischen Gerichten.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Saklı Pay Nedir?

Türk miras hukukunda saklı pay, miras bırakanın vasiyetname ile dahi dokunamayacağı miras hissesidir.

**Hukuki Dayanak**: TMK m. 505-512.

### Tenkis Davası

Saklı payınız ihlal edilmişse, öğrenmeden itibaren 1 yıl içinde **Tenkis Davası** açarak haklarınızı talep edebilirsiniz.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Hb,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02",keywordsDE:"Saklı Pay Erbrecht Türkei, Pflichtteil verletzen Türkei, Tenkis Davası Klage, Herabsetzungsklage Türkei, Erbrecht Anwalt Mannheim Ankara",keywordsTR:"Saklı pay nedir Türk hukuku, tenkis davası şartları, miras payı ihlali dava, miras hukuku uzmanı, tenkis davası ne kadar sürer"},{slug:"izale-i-suyu-paylasim-davasi",slugDE:"teilungsklage-immobilien-tuerkei",slugTR:"izale-i-suyu-paylasim-davasi",slugEN:"partition-lawsuit-turkey-property",titleDE:"İzale-i Şüyu: Wenn Erben sich nicht einigen: Teilungsklage in der Türkei",titleTR:"İzale-i Şüyu: Miras Kalan Taşınmazlarda Ortaklığın Giderilmesi Davası",excerptDE:"İzale-i Şüyu (Teilungsklage) bei Erbimmobilien in der Türkei nach türkischem Zivilrecht.",excerptTR:"Mirasçılar arasında paylaşılamayan taşınmazlar için izale-i şüyu davası süreci ve yasal prosedürler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist İzale-i Şüyu?

Können sich Miteigentümer einer Immobilie in der Türkei nicht über Verkauf oder Nutzung einigen, kann jeder Teilhaber die Teilungsklage (**İzale-i Şüyu**) erheben.

**Rechtsgrundlage**: TMK Art. 698–699.

### Ablauf

Wenn eine Realteilung nicht möglich ist, wird das Gericht die Versteigerung der Immobilie anordnen. Der Erlös wird nach Anteilen verteilt.

**Unser Service**: Wir vertreten Sie im gesamten Versteigerungsprozess in der Türkei.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### İzale-i Şüyu (Ortaklığın Giderilmesi)

Paydaşlar arasında paylaşılamayan taşınmazlar için Sulh Hukuk Mahkemesi'nde açılan davadır.

**Hukuki Dayanak**: TMK m. 698-699.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:jb,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-02",keywordsDE:"Ortaklığın Giderilmesi davası, İzale-i Şüyu Klage Türkei, Teilungsklage Immobilien Türkei, Versteigerung Haus Türkei Erbe, Miteigentum auflösen Türkei",keywordsTR:"İzale-i şüyu davası nedir, ortaklığın giderilmesi davası süreci, miras kalan evin satışı mahkeme, izale-i şuyu davası ne kadar sürer, satış yoluyla ortaklığın giderilmesi"},{slug:"mavi-kart-haklari-rehberi",slugDE:"mavi-kart-rechte-tuerkei",slugTR:"mavi-kart-haklari-rehberi",slugEN:"blue-card-rights-guide-turkey",titleDE:"Mavi Kart: Ihre Rechte in der Türkei nach Einbürgerung in Deutschland",titleTR:"Mavi Kart: Alman Vatandaşlığına Geçiş Sonrası Türkiye'deki Haklarınız",excerptDE:"Mavi Kart — Rechte in der Türkei: Eigentum und Erbschaft nach türkischem Staatsangehörigkeitsrecht.",excerptTR:"Mavi Kart nedir? Türkiye'de mülkiyet ve miras haklarınız. 5901 sayılı Kanun kapsamında eski Türk vatandaşlarının statüsü.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist die Mavi Kart?

Ehemalige türkische Staatsbürger behalten durch die **Mavi Kart** viele ihrer Rechte in der Türkei.

**Rechtsgrundlage**: Art. 28 des türkischen Staatsangehörigkeitsgesetzes (TVK).

### Ihre Rechte in der Türkei

- **Immobilienerwerb**: Sie können wie türkische Bürger Immobilien erwerben.
- **Erbrecht**: Sie bleiben voll erbberechtigt.
- **Aufenthalt**: Visumfreier Aufenthalt in der Türkei.

**Doğru Kanzlei**: Wir beraten Sie zu allen mavkart-bezogenen Rechtsfragen in der Türkei.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Mavi Kart Hakları

Türk vatandaşlığından çıkan kişilerin Türkiye'deki haklarını koruyan statüdür.

**Hukuki Dayanak**: 5901 sayılı TVK Madde 28.`,category:"Vatandaşlık Hukuku",categoryDE:"Staatsangehörigkeitsrecht",image:Gb,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"5 Min. Lesezeit",readTimeTR:"5 dk okuma",publishedAt:"2026-04-02",keywordsDE:"Mavi Kart Rechte Türkei, 5901 TVK Madde 28, Erbrecht Mavi Kart Inhaber, Immobilienkauf Mavi Kart, Staatsangehörigkeit Türkei Mavi Kart",keywordsTR:"Mavi kartlıların hakları Türkiye, mavi kart miras hakkı, mavi kart gayrimenkul alımı, TVK madde 28 haklar, mavi kartlıların vatandaşlık hakları"},{slug:"vekaletname-rehberi-almanya",slugDE:"tuerkische-vekaletname-deutschland",slugTR:"almanya-da-vekaletname-cikarma-rehberi",slugEN:"power-of-attorney-guide-germany-turkey",titleDE:"Türkische Vollmacht aus Deutschland: Notar, Apostille und Konsulat – Der vollständige Leitfaden (2026)",titleTR:"Almanya'da Türk Vekaletnamesi: Noter, Apostil ve Konsolosluk Rehberi (2026)",excerptDE:"Ihr umfassender Leitfaden zur Erstellung einer rechtssicheren türkischen Vollmacht in Deutschland. Konsulatsweg vs. deutscher Notar, Apostille-Verfahren und Fehlervermeidung.",excerptTR:"Almanya'da Türkiye için geçerli vekaletname çıkarma rehberi. Konsolosluk ve Alman noteri yolları, apostil süreci, gerekli belgeler ve dikkat edilmesi gerekenler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

---

Sie leben in Deutschland und müssen in der Türkei eine rechtliche Angelegenheit regeln — ohne selbst hinzureisen. Ob Grundbuchübertragung, Erbschaft, Scheidungsklage, Tanıma-Tenfiz-Verfahren oder Bankgeschäfte: In allen diesen Fällen brauchen Sie zunächst dasselbe Dokument: eine **türkisch rechtsgültige Vollmacht (Vekâletname).**

Aber wie stellt man in Deutschland eine Vollmacht aus, die in der Türkei tatsächlich akzeptiert wird? Muss man zum türkischen Konsulat? Reicht ein deutscher Notar? Was ist eine Apostille, und wo bekommt man sie? Und was muss im Vollmachtstext stehen, damit die Türkei das Dokument nicht zurückweist?

Dieser Leitfaden beantwortet alle diese Fragen Schritt für Schritt — für türkischstämmige Menschen in Deutschland, die türkische Rechtsgeschäfte von hier aus erledigen möchten.

---

## Was ist eine Vekâletname und warum ist sie so wichtig?

Eine Vekâletname ist eine notarielle Vollmacht, mit der eine Person (Vollmachtgeber / Müvekkil) eine andere Person (Bevollmächtigter / Vekil) ermächtigt, in ihrem Namen bestimmte rechtliche Handlungen vorzunehmen. Im türkischen Recht ist für viele Vorgänge keine persönliche Anwesenheit erforderlich — vorausgesetzt, es liegt eine ordnungsgemäße Vollmacht vor.

Für in Deutschland lebende Türken ist die Vekâletname insbesondere in folgenden Situationen unverzichtbar:

- **Tanıma-ve-Tenfiz-Verfahren** (Anerkennung einer deutschen Scheidung in der Türkei ohne Reise)
- **Grundbuchgeschäfte** (Verkauf, Übertragung oder Belastung türkischer Immobilien)
- **Erbschaftsangelegenheiten** (Erbschein, Nachlassaufteilung, Immobilienübertragung)
- **Scheidungsklage** (Beauftragung eines Anwalts für ein Scheidungsverfahren in der Türkei)
- **Bankgeschäfte** (Verfügungen über türkische Konten)
- **Gesellschaftsrechtliche Vorgänge** (Unterzeichnungsvollmacht, Anteilsübertragung)
- **Fahrzeugkauf oder -verkauf**
- **Allgemeine Anwaltsvollmacht** (für sämtliche rechtliche Vorgänge in der Türkei)

Eine fehlerhafte oder unvollständige Vollmacht führt in der Praxis dazu, dass türkische Gerichte, Grundbuchämter oder Behörden die Vollmacht zurückweisen — mit erheblichem Zeit- und Kostenaufwand als Folge.

---

## Die zwei Wege zur türkisch gültigen Vollmacht in Deutschland

In Deutschland gibt es zwei Möglichkeiten, eine in der Türkei rechtsgültige Vollmacht auszustellen: **über das türkische Konsulat** oder **über einen deutschen Notar mit Apostille.** Beide Wege sind rechtlich anerkannt, unterscheiden sich aber in Aufwand, Kosten und Eignung je nach Situation.

---

## Weg 1: Türkisches Konsulat

### Warum ist dies der sicherste Weg?

Vollmachten, die bei türkischen Konsulaten ausgestellt werden, werden direkt nach türkischem Notarrecht erstellt und im Datenbanksystem der türkischen Notarkammer (Türkiye Noterler Birliği) erfasst. Das bedeutet:

- **Keine zusätzliche Apostille erforderlich**
- **Keine beglaubigte Übersetzung ins Türkische erforderlich**
- Das Dokument wird von türkischen Gerichten, Notaren und Behörden **direkt akzeptiert**
- Das Verfahren ist **zuverlässig und vorhersehbar**

Für rechtlich sensible Vorgänge wie Grundstücksübertragungen, Scheidungsklagen, Tanıma-Tenfiz und Erbschaftsangelegenheiten ist der Konsulatsweg daher **grundsätzlich zu bevorzugen.**

### Türkische Konsulate in Deutschland

Die Republik Türkei unterhält in Deutschland Konsulate in 13 Städten:

Berlin, Düsseldorf, Köln, Essen, Frankfurt, Hamburg, Stuttgart, Hannover, Karlsruhe, Mainz, München, Münster, Nürnberg

Wenn Sie in Mannheim oder der Metropolregion Rhein-Neckar leben, sind das Konsulat **Karlsruhe** oder **Stuttgart** Ihre nächstgelegenen Anlaufstellen.

### Termin und Ablauf

1. **Termin vereinbaren:** Online über die Konsulatswebsite oder über konsolosluk.gov.tr. In Stoßzeiten können Termine mehrere Wochen im Voraus vergeben sein — planen Sie ausreichend Vorlauf ein.

2. **Was Sie mitbringen müssen:**
   - Gültiger türkischer Personalausweis (T.C. Kimlik Kartı) oder Mavi Kart (bevorzugt) bzw. türkischer Reisepass
   - Name, Nachname und **türkische Identifikationsnummer (T.C. Kimlik No)** des Bevollmächtigten — bei Anwaltsvollmacht: Name des Anwalts, zugehörige Anwaltskammer (Baro) und **Kammernummer (Baro Sicil No)**
   - Informationen über den Gegenstand der Vollmacht (welche Immobilie, welches Verfahren, welche Bank)
   - Lichtbild: Bei Grundbuch-, Fahrzeug-, Scheidungs- und Tanıma-Tenfiz-Vollmachten sind **2 aktuelle Passfotos** Pflicht

3. **Vollmachtstext:** Die Konsulate verfügen über Standardformulare. Für rechtlich anspruchsvolle Verfahren (Tanıma-Tenfiz, Güterrecht, spezielle Bankgeschäfte) empfehlen wir dringend, den Vollmachtstext **vorab mit Ihrem Anwalt zu erarbeiten** und fertig ausformuliert mitzubringen. Ein unvollständiger Text führt zur Zurückweisung in der Türkei.

4. **Form der Beurkundung:** Das türkische Recht unterscheidet zwischen Vollmachten in „Beurkundungsform" (*düzenleme şekli*) und solchen in „Beglaubigungsform" (*onaylama şekli*). Vollmachten für Grundstücksgeschäfte müssen in Beurkundungsform und auf Deutsch abgefasst sein. Das Konsulat informiert Sie über die jeweils erforderliche Form.

---

## Weg 2: Deutscher Notar + Apostille

### Wann kommt dieser Weg in Frage?

- Wenn der nächste Konsulatsterm zu weit entfernt ist und die Angelegenheit dringend ist
- Wenn Sie keinen einfachen Zugang zum türkischen Konsulat haben
- Wenn Ihr Anwalt oder Ihr Rechtsbüro diesen Weg empfohlen hat

### Reicht ein deutscher Notar allein?

**Nein.** Eine beim deutschen Notar erstellte Vollmacht ist in der Türkei ohne Apostille **nicht gültig.** Das ist ein häufiger Fehler, der zur Ablehnung des Dokuments in der Türkei führt.

Nach Anbringung der Apostille ist das Dokument in der Türkei grundsätzlich anerkannt — erfordert aber noch einen weiteren Schritt: eine **beglaubigte türkische Übersetzung.**

### Schritt für Schritt: Deutscher Notar + Apostille

**Schritt 1 — Vollmachtstext vorbereiten**

Deutsche Notare verfügen über keine türkischen Vollmachtsvorlagen. Sie müssen den Vollmachtstext **selbst vorbereiten und dem Notar mitbringen.** Dieser Text muss nach türkischem Recht formuliert sein. Verwenden Sie dabei nicht einfach Standardformulierungen — ein zu allgemein gehaltener Text kann in der Türkei als unzureichend zurückgewiesen werden.

Besonders wichtige Formulierungen:

- Bei Anwaltsvollmacht: *„Klage zu erheben und zu verfolgen, Rechtsmittel einzulegen, auf Ansprüche zu verzichten, Vergleiche zu schließen"* — türkisches Äquivalent muss entsprechend präzise sein
- Bei Tanıma-Tenfiz: *„Tanıma ve tenfiz davası açmaya ve takip etmeye"* muss ausdrücklich enthalten sein
- Bei Grundstücksgeschäften: Katastraldaten der Immobilie (Ada, Parsel, İl, İlçe) im Text angeben

**Schritt 2 — Beurkundung beim deutschen Notar**

Sie müssen persönlich erscheinen und einen gültigen Ausweis mitbringen. Eine Vollmacht kann nicht per Post oder online unterzeichnet werden. Die bevollmächtigte Person muss nicht anwesend sein.

Für bestimmte Vorgänge (Grundstücke, Scheidung) ist eine **Beurkundung auf Deutsch** erforderlich, und es können Passfotos verlangt werden. Klären Sie diese Details vorab mit dem Notar.

**Schritt 3 — Apostille beantragen**

Die vom deutschen Notar erstellte Vollmacht muss mit einer Apostille versehen werden. In Deutschland wird die Apostille für Notarurkunden beim zuständigen **Oberlandesgericht** beantragt.

In Baden-Württemberg — also für Menschen in Mannheim, Karlsruhe, Heidelberg und Umgebung — ist das **Oberlandesgericht Karlsruhe** zuständig.

In anderen Bundesländern kann die zuständige Stelle variieren (z. B. Oberlandesgericht, Landgericht oder zuständiges Ministerium). Der Notar informiert Sie über die richtige Stelle.

**Für den Apostille-Antrag benötigen Sie in der Regel:**
- Das Original der zu beglaubigenden Urkunde
- Ein Antragsformular (auf der Website des OLG verfügbar)
- Die anfallende Bearbeitungsgebühr

Die Bearbeitungszeit beträgt je nach Auslastung wenige Tage bis mehrere Wochen.

**Schritt 4 — Beglaubigte türkische Übersetzung**

Die apostillierte Vollmacht muss in der Türkei von einem zugelassenen vereidigten Übersetzer ins Türkische übersetzt und notariell beglaubigt werden. Dies kann Ihr türkischer Anwalt koordinieren. Die Dokumente werden per Post oder Kurier übermittelt.

---

## Konsulat oder Notar — Was ist besser?

| | **Türkisches Konsulat** | **Deutscher Notar + Apostille** |
|---|---|---|
| Apostille erforderlich? | Nein | Ja |
| Türkische Übersetzung erforderlich? | Nein | Ja |
| Termindauer | Oft 2–4 Wochen Vorlauf | In der Regel 1–2 Wochen |
| Zuverlässigkeit | Sehr hoch | Hoch (mit Apostille + Übersetzung) |
| Passfoto erforderlich? | Bei bestimmten Vollmachtstypen | Bei bestimmten Vollmachtstypen |
| Empfohlen für | Grundbuch, Scheidung, Tanıma-Tenfiz | Wenn Konsulat nicht erreichbar / dringend |

**Empfehlung:** Wenn die Zeit es erlaubt, wählen Sie den Konsulatsweg. Falls dringend oder das Konsulat schwer erreichbar ist, ist der Weg über deutschen Notar + Apostille ebenfalls sicher — vorausgesetzt, der Vollmachtstext ist korrekt formuliert.

---

## Besondere Anforderungen je nach Vollmachtstyp

### Vollmacht für Tanıma-Tenfiz-Verfahren

Dies ist eine der häufigsten Vollmachtsarten für in Deutschland lebende Türken. Damit ein Anwalt in der Türkei ein Anerkennungsverfahren für eine deutsche Scheidung einleiten kann, muss die Vollmacht **ausdrücklich** folgende Befugnisse enthalten:

- Klage auf Tanıma ve Tenfiz zu erheben
- Das Verfahren in allen Instanzen zu verfolgen
- An Verhandlungen teilzunehmen
- Verzicht, Anerkennung und Vergleich zu erklären

Fehlt auch nur eine dieser Befugnisse, kann das Gericht die Vollmacht als unzureichend zurückweisen. Passfotos are bei dieser Vollmachtsart Pflicht.

### Vollmacht für Grundbuchgeschäfte (Tapu)

Für den Verkauf, die Übertragung oder Belastung türkischer Immobilien:

- Die **Katastraldaten** der Immobilie (Ada, Parsel, İl, İlçe) müssen im Vollmachtstext genannt sein
- Die Vollmacht muss in **Beurkundungsform** und auf **Deutsch** erstellt werden
- 2 aktuelle **Passfotos** sind Pflicht
- Der Konsulatsweg wird **dringend empfohlen**

### Erbschaftsvollmacht

Für Erbschaftsverfahren in der Türkei (Erbschein, Nachlassaufteilung, Grundbuchübertragung):

- Die Vollmacht muss ausdrücklich die Befugnis zur Ausstellung eines Erbscheins (Veraset İlamı) enthalten
- Befugnisse zur Nachlassaufteilung und Immobilienübertragung sind separat aufzuführen
- Bei mehreren Erben muss jeder eine eigene Vollmacht ausstellen

### Scheidungsvollmacht

Für eine Scheidungsklage in der Türkei über einen Anwalt:

- Name, Nachname, Anwaltskammer und **Kammernummer** des Anwalts sind Pflichtangaben
- Der Vollmachtsinhalt unterscheidet sich je nach einvernehmlicher oder streitiger Scheidung
- 2 aktuelle Passfotos sind Pflicht
- Der Konsulatsweg wird empfohlen

### Bank- und allgemeine Geschäftsvollmacht

Für Verfügungen über türkische Bankkonten:

- Name der Bank und Kontonummer sollten nach Möglichkeit angegeben werden
- Einige Banken verlangen ein eigenes Vollmachtsformular — fragen Sie vorab bei der zuständigen Filiale nach

---

## Wann verliert eine Vollmacht ihre Gültigkeit?

Eine Vekâletname endet in folgenden Fällen:

- **Widerruf (Azil):** Der Vollmachtgeber kann die Vollmacht jederzeit durch eine Widerrufserklärung (Azilname) widerrufen. Dies kann beim Konsulat oder bei jedem türkischen Notar erfolgen.
- **Rücktritt (İstifa):** Der Bevollmächtigte kann die Vollmacht durch schriftliche Erklärung an das Gericht oder die zuständige Stelle zurückgeben.
- **Tod:** Der Tod von Vollmachtgeber oder Bevollmächtigtem beendet die Vollmacht automatisch.

Zur **Gültigkeitsdauer:** Türkische Vollmachten sind grundsätzlich zeitlich unbegrenzt. Allerdings akzeptieren manche Stellen (insbesondere Grundbuchämter und Banken) nur Vollmachten, die nicht älter als ein bestimmtes Datum sind. Fragen Sie vorab bei der zuständigen Stelle nach.

---

## Wie übermitteln Sie die Vollmacht nach Deutschland?

Sie müssen die Vollmacht nicht persönlich nach Deutschland bringen. Folgende Übermittlungswege sind möglich:

- **Kurier (DHL, UPS usw.):** Die sicherste und zuverlässigste Methode. Das Original wird direkt an Ihren Anwalt übermittelt.
- **Einschreiben:** Einschreiben per Post ist möglich, birgt jedoch ein Verlustrisiko.
- **Digitale Vorabkopie:** Für vorbereitende Schritte kann eine eingescannte Kopie ausreichen — das Original muss jedoch spätestens zur Einreichung beim Gericht oder der Behörde vorliegen. Klären Sie das mit Ihrem Anwalt im Voraus.

---

---

## Unser Service: Vollmachtstext gemeinsam erarbeiten

Das häufigste Problem bei Vollmachten aus Deutschland ist ein fehlerhafter oder unvollständiger Text. Eine abgewiesene Vollmacht bedeutet Neuanfang — Zeit- und Kostenaufwand inklusive.

Als Kanzlei in Mannheim mit Kenntnissen beider Rechtssysteme:

- **Erarbeiten wir den Vollmachtstext gemeinsam** — passend für Ihr konkretes Anliegen
- **Informieren wir Sie genau**, welche Unterlagen Sie zum Konsulat oder deutschen Notar mitbringen müssen
- **Koordinieren wir Apostille und Übersetzung**
- **Vertreten wir Sie in der Türkei** — mit der Vollmacht, die wir gemeinsam erarbeitet haben

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

---

Almanya'da yaşıyorsunuz ve Türkiye'de bir hukuki işlem yaptırmanız gerekiyor. Tapu devri, miras, boşanma davası, tanıma-tenfiz, banka işlemleri, şirket işlemleri... Bunların hepsinde ortak bir ilk adım var: **vekâletname.**

Peki Almanya'da Türkiye için geçerli bir vekâletname nasıl çıkartılır? Türk konsolosluğuna mı gitmeniz gerekiyor? Alman noteri de yeterli mi? Apostil ne demek ve nerede yaptırılır? Vekâletname metni nasıl hazırlanmalı ki Türkiye'de geçersiz sayılmasın?

Bu rehberde tüm bu soruları adım adım yanıtlıyoruz. Almanya'da yaşayan Türk vatandaşları için hem konsolosluk yolu hem de Alman noter yolu ayrıntılı biçimde ele alınmaktadır.

---

## Vekâletname Nedir ve Neden Bu Kadar Önemlidir?

Vekâletname, bir kişinin (vekâlet veren / müvekkil) başka bir kişiyi (vekil) belirli hukuki işlemleri yapması için yetkilendirdiği resmi belgedir. Türk hukukunda pek çok işlem, tarafın bizzat bulunmasını gerektirmez — ancak bu durumda yetkili bir vekâletname zorunludur.

Almanya'da yaşayan Türk vatandaşları için vekâletname özellikle şu durumlarda kritik önem taşır:

- **Tanıma ve tenfiz davası** açılması (Türkiye'ye gitmeden Almanya'daki boşanmayı Türkiye'de geçerli kılmak)
- **Tapu işlemleri** (Türkiye'deki gayrimenkulün satışı, devri, ipotek işlemleri)
- **Miras işlemleri** (veraset ilamı çıkarılması, miras paylaşımı, taşınmaz devri)
- **Boşanma davası** (Türkiye'de avukat aracılığıyla boşanma)
- **Banka işlemleri** (Türkiye'deki banka hesaplarına ilişkin işlemler)
- **Şirket işlemleri** (Türkiye'deki şirkete yönelik imza, devir, temsil yetkileri)
- **Araç alım-satımı**
- **Genel avukatlık vekâleti** (Türkiye'deki her türlü hukuki işlem için avukata yetki)

Vekâletnamenin eksik veya hatalı düzenlenmesi, Türkiye'deki mahkeme veya kurumun işlemi reddetmesine — dolayısıyla ciddi zaman ve maliyet kayıplarına — yol açabilir.

---

## Almanya'da Vekâletname Çıkarmanın İki Yolu

Almanya'da Türkiye için geçerli bir vekâletname çıkartmanın iki temel yolu vardır: **Türk konsolosluğu** ve **Alman noter.** Her ikisinin de avantajları, dezavantajları ve dikkat edilmesi gereken farklı noktaları vardır.

---

## 1. Yol: Türk Konsolosluğu Üzerinden Vekâletname

### Neden En Güvenli Yoldur?

Türk konsolosluklarında düzenlenen vekâletnameler doğrudan Türk noterlik hukuku çerçevesinde düzenlenir ve Türkiye Noterler Birliği veri tabanına kaydedilir. Bu nedenle:

- Türkiye'de **ekstra apostil veya tercüme işlemine gerek yoktur**
- Belge Türkiye'deki tüm mahkeme, noter ve resmi kurumlarca **doğrudan kabul edilir**
- İşlem süreci daha **öngörülebilirdir**

Bu nedenle, özellikle boşanma davası, tapu işlemleri ve tanıma-tenfiz gibi hassas hukuki işlemler için **konsolosluk yolu her zaman öncelikli tercih** olmalıdır.

### Almanya'daki Türk Konsoloslukları

Türkiye Cumhuriyeti'nin Almanya'da 13 şehirde konsolosluğu bulunmaktadır:

Berlin, Düsseldorf, Köln, Essen, Frankfurt, Hamburg, Stuttgart, Hannover, Karlsruhe, Mainz, Münih, Münster, Nürnberg

Mannheim'da yaşıyorsanız size en yakın konsolosluk **Karlsruhe** veya **Stuttgart** konsolosluğudur.

### Konsoloslukta Randevu ve Süreç

1. **Randevu alın:** Konsolosluğun web sitesinden veya konsolosluk.gov.tr üzerinden online randevu alınır. Yoğun dönemlerde randevu tarihleri birkaç haftayı bulabilir; erken randevu almanızı öneririz.

2. **Hazırlamanız gerekenler:**
   - Geçerli T.C. kimlik kartı veya Mavi Kart (pasaport da kabul edilir, ancak T.C. kimlik kartı tercih edilir)
   - Vekilin adı, soyadı ve **T.C. kimlik numarası** (avukata vekâlet verilecekse: avukatın baro adı ve **baro sicil numarası**)
   - Yapılacak işlemin türüne ilişkin bilgiler (hangi taşınmaz, hangi dava, hangi banka vb.)
   - Fotoğraf: Tapu işlemleri, araç alım-satımı, boşanma ve tanıma-tenfiz vekâletnamelerinde **2 adet güncel vesikalık fotoğraf** zorunludur

3. **Vekâletname metni:** Konsolosluklarda matbu (hazır) vekâletname metinleri bulunmaktadır. Ancak özel yetkiler gerektiren işlemler için (örneğin tanıma-tenfiz, mal paylaşımı, özel banka işlemleri) **kendi hazırladığınız metni avukatınızla birlikte önceden düzenlemeniz** çok daha güvenlidir. Eksik yetki, Türkiye'de işlemin reddedilmesine yol açabilir.

4. **Düzenleme ve onay şekli:** Türk hukukuna göre bazı vekâletnameler "düzenleme şeklinde" (Alman noter dilinde: *Beurkundung*), bazıları ise "onaylama şeklinde" (*Beglaubigung*) düzenlenir. Tapu işlemlerine ilişkin vekâletnameler mutlaka düzenleme şeklinde olmalıdır ve bu durumda vekâletnamenin Almanca düzenlenmesi gerekmektedir.

---

## 2. Yol: Alman Noteri Üzerinden Vekâletname + Apostil

### Ne Zaman Bu Yola Başvurulur?

- Konsolosluk randevusu çok ilerideyse ve işleminiz acilse
- Konsolosluğa ulaşmakta güçlük çekiyorsanız
- Avukatınız veya hukuk büronuz bu yönde tavsiye verdiyse

### Alman Noteri Yeterli mi?

Alman noterinde düzenlenen vekâletname, **apostil şerhi eklenmeden Türkiye'de geçerli olmaz.** Bu kritik bir ayrıntıdır ve pek çok kişi apostil adımını atlayarak belgesinin Türkiye'de reddedilmesiyle karşılaşır.

Apostil eklendikten sonra ise belge Türkiye'de geçerlilik kazanır — ancak ek bir adım daha gereklidir: **Türkçe yeminli tercüme.**

### Adım Adım: Alman Noter + Apostil Süreci

**Adım 1 — Vekâletname metnini hazırlayın**

Alman noterin elinde Türkçe vekâletname örneği bulunmaz. Bu nedenle vekâletname metnini **siz hazırlayıp notere götürmeniz** gerekir. Bu metin Türk hukukuna uygun biçimde kaleme alınmış olmalıdır; aksi takdirde Türkiye'de eksik yetki nedeniyle işlem reddedilebilir.

Özellikle dikkat edilmesi gereken ifadeler:

- Avukatlık vekâletnamelerinde: *"davayı açmaya ve takip etmeye, Yargıtay'da temyize gitmeye, feragat etmeye, kabul etmeye, sulh olmaya"* gibi özel yetkilerin açıkça yazılması
- Tanıma-tenfiz vekâletnamesinde: *"tanıma ve tenfiz davası açmaya ve takip etmeye"* ifadesinin açıkça yer alması
- Tapu işlemlerinde: taşınmazın tapu bilgilerinin (ada, parsel, il, ilçe) vekâletname metninde belirtilmesi

**Adım 2 — Alman noterinde imzalatın**

Notere bizzat gitmeniz ve kimliğinizi (T.C. kimlik kartı veya pasaport) ibraz etmeniz zorunludur. Vekâletname posta yoluyla veya çevrimiçi imzalanamaz. Vekile ait kişinin noterde bulunmasına gerek yoktur.

Bazı işlemler için (tapu, boşanma vb.) noterin **Almanca düzenleme** yapması gerektiğini ve bazı durumlarda **fotoğraf** eklenmesi gerekebileceğini unutmayın. Bu detayları notere önceden sorun.

**Adım 3 — Apostil şerhi alın**

Alman noterin imzaladığı belgeye apostil şerhi eklenmesi gerekir. Almanya'da apostil işlemi, belgeyi düzenleyen noterin bağlı olduğu **Oberlandesgericht (bölge mahkemesi)** tarafından yapılır.

Baden-Württemberg'de — yani Mannheim, Karlsruhe, Heidelberg ve çevresinde — apostil işlemi **Oberlandesgericht Karlsruhe**'dan yaptırılır.

Bazı eyaletlerde ise bu yetki Landgericht veya yetkili bakanlıkta olabilir. Hangi makama başvuracağınızı notere sorun.

**Apostil işlemi için genellikle şunlar gerekir:**
- Apostil yaptırılacak belgenin aslı
- Başvuru formu (mahkemenin web sitesinden temin edilebilir)
- İşlem ücreti (eyalete ve belge türüne göre değişir)

Apostil süresi birkaç gün ile birkaç hafta arasında değişebilir.

**Adım 4 — Türkçe yeminli tercüme**

Apostil eklenen belge Türkiye'de Türkçeye çevrilmeli ve noter onayından geçmelidir. Bu işlemi Türkiye'deki avukatınız veya yeminli tercüman yaptırır. Belgeyi ona posta veya kurye ile gönderebilirsiniz.

---

## Konsolosluk mu, Alman Noteri mi? Hangisi Daha İyi?

| | **Konsolosluk** | **Alman Noteri + Apostil** |
|---|---|---|
| Türkiye'de ek işlem gerekir mi? | Hayır | Evet (tercüme + noter onayı) |
| Apostil şerhi gerekir mi? | Hayır | Evet |
| Randevu süresi | Uzun olabilir (2-4 hafta) | Genellikle 1-2 hafta |
| Güvenilirlik | Çok yüksek | Yüksek (apostil + tercüme ile) |
| Fotoğraf gereksinimi | Bazı vekâletnamelerde zorunlu | Bazı vekâletnamelerde zorunlu |
| Tavsiye edilen durumlar | Tapu, boşanma, tanıma-tenfiz | Acil durumlarda veya konsolosluğa erişim zorsa |

**Genel tavsiye:** Zaman baskısı yoksa konsolosluk yolunu tercih edin. Acilse veya konsolosluğa erişim güçse, Alman noter + apostil yolu da geçerli ve güvenilirdir — ancak vekâletname metninin doğru hazırlanması kritiktir.

---

## Vekâletname Türlerine Göre Özel Dikkat Edilmesi Gerekenler

### Tanıma ve Tenfiz Vekâletnamesi

Bu, Almanya'da yaşayan kişilerin en sık ihtiyaç duyduğu vekâletname türlerinden biridir. Almanya'da boşananların Türkiye'de tanıma ve tenfiz davası açtırabilmesi için avukata verecekleri vekâletnamede şu yetkiler **açıkça** bulunmalıdır:

- Tanıma ve tenfiz davası açmaya
- Davayı her aşamada takip etmeye
- Duruşmalara katılmaya
- Feragat, kabul ve sulh yetkisi

Bu yetkilerin eksik olması durumunda mahkeme vekâletnameyi yetersiz bulabilir ve davayı ilerletmeyebilir. Fotoğraf eklenmesi de bu vekâletname türünde zorunludur.

### Tapu İşlemleri Vekâletnamesi

Türkiye'deki gayrimenkulün satışı, devri veya ipotek işlemleri için verilen vekâletnamelerde:

- Taşınmazın **tapu bilgileri** (ada, parsel, il, ilçe) vekâletname metninde yer almalıdır
- Vekâletname **düzenleme şeklinde** düzenlenmeli, Almanca hazırlanmalıdır
- 2 adet **güncel vesikalık fotoğraf** zorunludur
- Konsolosluk yoluyla alınması **şiddetle tavsiye edilir**

### Miras Vekâletnamesi

Türkiye'de miras işlemleri yürütülecekse (veraset ilamı, intikal, paylaşım):

- Vekile mirasçılık belgesi çıkarma yetkisi açıkça verilmelidir
- Miras paylaşımı ve taşınmaz devri yetkileri ayrıca belirtilmelidir
- Birden fazla mirasçı varsa her birinin ayrı vekâletname düzenlemesi gerekebilir

### Boşanma Vekâletnamesi

Türkiye'de avukat aracılığıyla boşanma davası açılacaksa:

- Avukatın adı, soyadı, baro adı ve **baro sicil numarası** zorunludur
- Boşanma, anlaşmalı veya çekişmeli olmasına göre vekâletname içeriği farklılaşır
- 2 adet güncel fotoğraf zorunludur
- Konsolosluk yolu tercih edilmelidir

### Banka ve Genel İşlem Vekâletnamesi

Türkiye'deki banka hesabına ilişkin (para çekme, transfer, hesap kapatma) işlemler için:

- İlgili bankanın adı ve hesap bilgileri mümkünse belirtilmelidir
- Bazı bankalar kendi özel vekâletname formatlarını talep edebilir; işlem öncesinde ilgili banka şubesini arayarak bilgi alın

---

## Vekâletname Geçerliliğini Kaybeder mi?

Vekâletname, aşağıdaki durumlarda sona erer:

- **Azil:** Vekâlet veren, avukata ya da vekile azilname (iptal belgesi) göndererek vekâleti geri alabilir. Azilname konsolosluğa veya Türkiye'deki herhangi bir notere başvurularak düzenlenir.
- **İstifa:** Vekil, görevi kabul etmemek ya da devam etmemek isterse mahkeme veya ilgili kuruma yazılı bildirimle vekâletten çekilebilir.
- **Ölüm:** Vekâlet veren veya vekilin ölümü vekâlet ilişkisini kendiliğinden sona erdirir.

Vekâletnamenin **süresi** konusunda önemli bir nokta: Türk hukukunda vekâletnameler kural olarak süresizdir, ancak bazı kurumlar (özellikle bankalar ve tapu müdürlükleri) belirli bir süreden eski vekâletnameleri kabul etmeyebilir. İşlem yapmadan önce ilgili kuruma güncel vekâletname gerekip gerekmediğini sorun.

---

## Vekâletnameyi Türkiye'ye Nasıl Gönderirsiniz?

Vekâletnameyi bizzat götürmek zorunda değilsiniz. Aşağıdaki yöntemlerle gönderebilirsiniz:

- **Kurye (DHL, UPS vb.):** En yaygın ve güvenilir yol. Orijinal belgeler zarfla avukatınıza gönderilir.
- **Posta:** Taahhütlü posta da kabul edilir, ancak kayıp riski nedeniyle kurye önerilir.
- **Avukatın Almanya'ya gelmesi:** Bazı durumlarda avukat veya büro temsilcisi belgeyi bizzat teslim alabilir.

Vekâletnamenin dijital (taranmış) kopyasıyla işlem başlatılabilir mi? Bazı mahkemeler ön işlemlerde dijital kopyayı kabul eder, ancak orijinal belge nihayetinde sunulmalıdır. Bu konuyu avukatınızla önceden netleştirin.

---

---

## Bize Ulaşın: Vekâletname Metnini Birlikte Hazırlayalım

Almanya'da Türkiye için vekâletname çıkartmanın en sık karşılaşılan sorunu, metni yanlış veya eksik hazırlamaktır. Yanlış hazırlanan bir vekâletname Türkiye'de reddedilir; yeniden başlamak hem zaman hem de para kaybettirir.

Mannheim'da Türk ve Alman hukukunu bilen bir büro olarak:

- Durumunuza uygun **vekâletname metnini birlikte hazırlarız**
- Konsolosluğa veya Alman notere hangi bilgileri götürmeniz gerektiğini net biçimde bildiririz
- Apostil ve tercüme sürecini koordine ederiz
- Türkiye'deki işlemleri, gönderilen vekâletname ile bizzat takip ederiz

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir.*`,category:"Vekâletname · Apostil · Türk Hukuku",categoryDE:"Vollmacht · Apostille · Türkisches Recht",image:Am,dateDE:"Nisan 2026",dateTR:"Nisan 2026",readTimeDE:"20 Min. Lesezeit",readTimeTR:"20 dk okuma",publishedAt:"2026-04-12",keywordsDE:"Türkische Vekaletname Deutschland, Vollmacht Konsulat Türkei, Notar Vollmacht Türkei Apostille, Vollmacht Muster Türkei, Anwaltsvollmacht Türkei Mannheim, Tanıma Tenfiz Vekaleti",keywordsTR:"Almanya'da vekaletname çıkarma, konsolosluk vekaletname randevu, Alman noterinden vekalet apostil, vekaletname örneği Türkiye, avukat vekaletnamesi nasıl verilir, tanıma tenfiz vekaleti",faqTR:[{question:"Konsolosluk vekâletnamesi için Türkiye'ye gitmem gerekir mi?",answer:"Hayır. Almanya'daki herhangi bir Türk konsolosluğuna bizzat giderek vekâletname düzenletebilirsiniz. Bu vekâletname, ayrıca apostil veya tercüme gereksiz olmaksızın Türkiye'de doğrudan geçerlidir."},{question:"Alman noterinden aldığım vekâletname Türkiye'de geçerli mi?",answer:"Apostil şerhi eklenmesi ve Türkçeye yeminli tercümesi yapılması koşuluyla evet, geçerlidir. Apostilsiz Alman noter vekâletnamesi Türkiye'de kabul edilmez."},{question:"Almanya'da apostil işlemini nerede yaptırabilirim?",answer:"Baden-Württemberg'de (Mannheim, Karlsruhe, Heidelberg bölgesi) apostil işlemi Oberlandesgericht Karlsruhe'dan yapılır. Diğer eyaletlerde yetkili makam farklı olabilir; notere sorun."},{question:"Vekâletname metnini kim hazırlamalı?",answer:"İdeal olarak Türk hukukunu bilen bir avukat hazırlamalıdır. Hazır (matbu) metinler konsoloslukta mevcuttur, ancak özel hukuki işlemler için (tapu, dava, miras) avukat tarafından hazırlanmış metin daha güvenlidir. Eksik yetki, Türkiye'de işlemin reddedilmesine neden olabilir."},{question:"Vekâletname için fotoğraf şart mı?",answer:"Her vekâletname türü için değil, ancak tapu işlemleri, araç alım-satımı, boşanma ve tanıma-tenfiz vekâletnamelerinde fotoğraf zorunludur. Emin olmak için önceden konsolosluğa veya avukatınıza sorun."},{question:"Vekâletnameyi posta ile Türkiye'ye gönderebilir miyim?",answer:"Evet, taahhütlü posta veya kurye ile gönderebilirsiniz. Kurye daha güvenlidir."},{question:"Vekâletname ne kadar sürede çıkar?",answer:"Konsoloslukta randevu günü genellikle aynı gün düzenlenir. Alman noteri yoluyla ise noter işlemi birkaç gün içinde tamamlanabilir, apostil ise birkaç gün ile birkaç hafta arasında sürer."},{question:"Avukata genel vekâletname mi, özel vekâletname mi vermeli?",answer:"Mümkün olduğunca işleme özel vekâletname verin. Genel vekâletname bazı kurumlarca (özellikle tapu müdürlükleri) kabul edilmez. Avukatınızla hangi yetkilerin vekâletnamede yer alması gerektiğini önceden netleştirin."}],faqDE:[{question:"Muss ich für die Konsulats-Vollmacht in die Türkei reisen?",answer:"Nein. Sie gehen zum türkischen Konsulat in Deutschland (z. B. Karlsruhe oder Stuttgart), und die dort erstellte Vollmacht ist in der Türkei ohne weitere Schritte gültig."},{question:"Ist eine Vollmacht vom deutschen Notar in der Türkei gültig?",answer:"Ja, aber nur mit Apostille und beglaubigter türkischer Übersetzung. Ohne Apostille wird das Dokument in der Türkei nicht akzeptiert."},{question:"Wo beantrage ich die Apostille in Baden-Württemberg?",answer:"Beim Oberlandesgericht Karlsruhe. In anderen Bundesländern variiert die zuständige Stelle — Ihr Notar informiert Sie."},{question:"Wer sollte den Vollmachtstext verfassen?",answer:"Idealerweise ein Anwalt mit Kenntnissen im türkischen Recht. Standardformulare sind beim Konsulat erhältlich, aber für rechtlich anspruchsvolle Vorgänge (Grundbuch, Klage, Erbschaft) ist ein anwaltlich formulierter Text deutlich sicherer."},{question:"Sind Passfotos Pflicht?",answer:"Nicht bei jeder Vollmacht. Bei Grundbuch-, Fahrzeug-, Scheidungs- und Tanıma-Tenfiz-Vollmachten sind 2 aktuelle Passfotos Pflicht. Fragen Sie vorab beim Konsulat oder Ihrem Anwalt nach."},{question:"Wie lange dauert es bis die Vollmacht ausgestellt wird?",answer:"Beim Konsulat am Termintag meist noch am selben Tag. Beim deutschen Notar: wenige Tage für die Beurkundung, weitere Tage bis Wochen für die Apostille."},{question:"Soll ich eine allgemeine oder eine spezifische Vollmacht ausstellen?",answer:"Möglichst eine auf den konkreten Vorgang zugeschnittene Vollmacht. Allgemeine Vollmachten werden von manchen Stellen (insbesondere Grundbuchämtern) nicht akzeptiert."},{question:"Kann ich die Vollmacht per Post in die Türkei schicken?",answer:"Ja — per Einschreiben oder Kurier (empfohlen) an Ihren Anwalt in der Türkei."}]},{slug:"vorladung-haftbefehl-tuerkei",slugDE:"vorladung-haftbefehl-tuerkei",slugTR:"turkiye-den-tebligat-veya-yakalama-karari",slugEN:"summons-arrest-warrant-turkey",titleDE:"Vorladung oder Haftbefehl aus der Türkei: Was tun?",titleTR:"Türkiye'den Tebligat veya Yakalama Kararı mı Geldi? Almanya'dan Ne Yapmalısınız?",excerptDE:"Vorladungen oder Strafverfahren in der Türkei können auch aus Deutschland heraus nach türkischem Strafprozessrecht verteidigt werden.",excerptTR:"Türkiye'de hakkınızda açılan ceza davaları ve yakalama kararları. CMK uyarınca Almanya'dan savunma haklarınız.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Wenn Post aus der Türkei kommt

Erhalten Sie eine Vorladung oder einen Haftbefehl (**Yakalama Kararı**) aus der Türkei, ist professionelle Hilfe vor Ort in der Türkei entscheidend.

**Rechtsgrundlage**: Türkische Strafprozessordnung (CMK).

### Ihre Rechte

- **Vertretung**: Sie können sich durch einen in der Türkei zugelassenen Avukat vertreten lassen, oft ohne selbst reisen zu müssen.
- **Akteneinsicht**: Über das UYAP-System können wir den Stand Ihres Verfahrens prüfen.

**Doğru Kanzlei**: Als Mitglied der Ankara Barosu übernehmen wir Ihre Verteidigung vor türkischen Strafgerichten.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Yakalama Kararı ve Tebligatlar

Türkiye'deki ceza dosyalarınızı Almanya'dan vekalet vererek takip edebilirsiniz.

**Hukuki Dayanak**: CMK m. 145 vd.`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:Lb,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-02",keywordsDE:"Yakalama Kararı Türkei, Haftbefehl Türkei was tun, Strafverfahren Türkei Verteidigung, Strafrecht Anwalt Türkei Mannheim, Vorladung Türkei Post",keywordsTR:"Türkiye yakalama kararı sorgulama, hakkımda dava var mı Türkiye, Almanya'dan ceza davası savunma, ceza avukatı Mannheim Ankara, yakalama kararı nasıl kaldırılır"},{slug:"suc-duyurusu-tuerkei-rehberi",slugDE:"strafanzeige-tuerkei-rehber",slugTR:"turkiye-de-suc-duyurusu-rehberi",slugEN:"criminal-complaint-turkey-guide",titleDE:"Strafanzeige in der Türkei aus Deutschland stellen: Der vollständige Leitfaden (2026)",titleTR:"Almanya'dan Türkiye'deki Bir Suç İçin Şikayetçi Olmak: Suç Duyurusu Rehberi (2026)",excerptDE:"Vollständiger Leitfaden zur Strafanzeige in der Türkei aus Deutschland. Verfahren, Fristen (6 Monate) und Beweissicherung nach türkischem Recht.",excerptTR:"Almanya'dan Türkiye'de suç duyurusu nasıl yapılır? Şikayet süreleri, konsolosluk işlemleri ve savcılık süreci hakkında 2026 güncel rehber.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

In der Türkei wurde eine Straftat gegen Sie begangen. Vielleicht hat ein Verwandter Erbschaftsbetrug begangen. Vielleicht hat ein Geschäftspartner Sie um Ihr Geld gebracht. Vielleicht wurden Sie in sozialen Medien beleidigt oder bedroht. Vielleicht hat jemand Ihre türkische Immobilie ohne Ihre Zustimmung übertragen.

Sie leben in Deutschland. Sie können oder wollen nicht in die Türkei reisen. Was können Sie tun?

Dieser Leitfaden richtet sich an in Deutschland lebende Menschen, die wegen einer in der Türkei gegen sie begangenen Straftat rechtlich vorgehen möchten. Was ist eine Strafanzeige im türkischen Recht, wie wird sie aus Deutschland gestellt, welche Unterlagen sind erforderlich, welche Fristen gelten — und wie läuft das Verfahren danach ab? All das erklären wir Schritt für Schritt.

---

## Strafanzeige und Strafantrag: Was ist der Unterschied?

Im türkischen Strafrecht gibt es eine wichtige Unterscheidung zwischen **Suç Duyurusu** (allgemeine Strafanzeige) und **Şikayet** (Strafantrag).

### Suç Duyurusu (Strafanzeige / Anzeige)
Eine Strafanzeige kann von jeder Person erstattet werden, die Kenntnis von einer Straftat hat — auch ohne selbst Opfer zu sein. Die Staatsanwaltschaft entscheidet dann, ob sie von Amts wegen ermittelt.

### Şikayet (Strafantrag)
Der Strafantrag ist das Recht des unmittelbaren Opfers. Bei bestimmten Delikten — sogenannten **antragspflichtigen Straftaten** — kann die Staatsanwaltschaft ohne Strafantrag des Opfers nicht ermitteln.

**Beispiele:** Beleidigung, einfache Bedrohung, fahrlässige Körperverletzung, Hausfriedensbruch.

---

## Fristen: Der wichtigste Punkt überhaupt

**Bei antragspflichtigen Straftaten beträgt die Antragsfrist 6 Monate ab Kenntnis der Tat oder des Täters.** Nach Ablauf dieser Frist verfällt das Antragsrecht — die Staatsanwaltschaft kann das Verfahren nicht mehr einleiten.

**Önemli:** Sichern Sie Beweise mit Zeitstempel (Screenshots, E-Mails, Dokumente). Das hilft, den Beginn der Antragsfrist zu belegen.

---

## Wie stellt man aus Deutschland eine Strafanzeige in der Türkei?

1. **Über das türkische Konsulat**: Sie reichen Ihre Antragsschrift beim Konsulat ein, welches diese an die zuständige Staatsanwaltschaft weiterleitet.
2. **Über einen türkischen Anwalt**: Mit einer Vollmacht kann Ihr Anwalt die Anzeige direkt bei der Staatsanwaltschaft einreichen. Dies ist der schnellste Weg.
3. **Per Post**: Die Antragsschrift kann schriftlich gesendet werden, birgt aber Zustellungsrisiken.

---

## Was muss die Antragsschrift enthalten?

- **Adressat**: Die zuständige Staatsanwaltschaft (Cumhuriyet Başsavcılığı).
- **Angaben zum Antragsteller**: Name, T.C. Kimlik No, Adresse.
- **Angaben zum Beschuldigten**: Name, Adresse (falls bekannt).
- **Sachverhaltsschilderung**: Chronologische Darstellung der Ereignisse.
- **Beweise**: Liste der beigefügten Beweismittel.

---

## Häufige Deliktsbereiche

### Betrug (TCK Art. 157–158)
Gelderschleichung durch fingierte Immobiliengeschäfte, Identitätstäuschung oder Internetbetrug.
### Beleidigung und Bedrohung (TCK Art. 125, 106)
Straftaten über WhatsApp, Telefon oder soziale Medien.
### Erbschafts- und Grundbuchbetrug
Übertragung von Immobilien mit gefälschten Dokumenten durch Verwandte oder Bekannte.

---

## Wie läuft das Verfahren in der Türkei ab?

1. **Ermittlungsphase**: Die Staatsanwaltschaft prüft den Verdacht. Bei Ablehnung ergeht ein Einstellungsbescheid (KYOK).
2. **Rechte als Antragsteller (Müşteki)**: Akteneinsicht, Vorlage von Beweisen und Beschwerderecht.
3. **Müssen Sie in die Türkei reisen?**: Nein. Aussagen können über das türkische Konsulat im Rechtshilfeweg aufgenommen werden.
4. **Schlichtungsverfahren (Uzlaştırma)**: Bei bestimmten Delikten wird ein Schlichtungsversuch unternommen.

---

## Ihr nächster Schritt

In der Türkei wurde eine Straftat gegen Sie begangen — und Sie sind in Deutschland. Das Wichtigste, was Sie jetzt tun können: **Zeitverlust vermeiden und einen Anwalt konsultieren, bevor die 6-Monats-Frist abläuft.**

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Türkiye'de size karşı bir suç işlendi. Belki Türkiye'deki bir akrabanız miras dolandırıcılığı yaptı. Belki bir iş ortağınız sizi dolandırdı. Belki sosyal medyada size hakaret edildi ya da tehdit edildildiniz. Belki Türkiye'deki bir kişi size ait taşınmazı haksız biçimde devretti.

Siz Almanya'dasınız. Türkiye'ye gidemiyorsunuz ya da gitmek istemiyorsunuz. Peki ne yapabilirsiniz?

Bu rehber, Almanya'da yaşayan ve Türkiye'de kendilerine karşı işlenen bir suç nedeniyle hukuki yollara başvurmak isteyen kişiler için hazırlandı. Suç duyurusu nedir, Almanya'dan nasıl yapılır, hangi belgeler gereklidir, şikayet süreleri nelerdir ve sonrasında süreç nasıl işler — hepsini adım adım açıklıyoruz.

---

## Suç Duyurusu ve Şikayet: Fark Nedir?

### Suç Duyurusu (İhbar)
Suç duyurusu, suçun işlendiğinden haberdar olan kişilerin bunu yetkili makamlara bildirmesidir. Savcılık re'sen soruşturma başlatıp başlatmamaya karar verir.

### Şikayet
Şikayet, suçun doğrudan mağdurunun yetkili makamlara başvurmasıdır. Bazı suçlar yalnızca şikayet üzerine soruşturulur.

**Şikayete bağlı suçlar:** Hakaret, tehdit (basit hal), taksirle yaralama, konut dokunulmazlığının ihlali.
**Re'sen soruşturulan suçlar:** Dolandırıcılık, ağır yaralama, resmi belgede sahtecilik.

---

## Şikayet Süreleri: Dikkat Etmeniz Gereken En Kritik Nokta

**Şikayete bağlı suçlarda şikayet süresi, suçun veya failin öğrenildiği tarihten itibaren 6 aydır.** Bu süre geçtikten sonra şikayet hakkı düşer. Re'sen soruşturulan suçlarda (dolandırıcılık vb.) genel zamanaşımı süreleri (8-15 yıl) geçerlidir.

---

## Almanya'dan Türkiye'de Şikayet: Hangi Yollar Var?

1. **Türk Konsolosluğu Üzerinden Şikayet**: Şikayet dilekçenizi konsolosluğa sunarak ilgili savcılığa iletilmesini sağlayabilirsiniz.
2. **Avukat Aracılığıyla Doğrudan Savcılığa Başvuru**: Türkiye'ye gitmeksizin avukatınız aracılığıyla en hızlı ve doğrudan şikayet yoludur.
3. **Posta Yoluyla Başvuru**: Dilekçe savcılığa posta ile gönderilebilir (riskleri mevcuttur).

---

## Suç Duyurusu Dilekçesi Nasıl Hazırlanır?

Dilekçede şunlar bulunmalıdır:
- **Başlık**: İlgili Cumhuriyet Başsavcılığı'na hitaben.
- **Kimlik Bilgileri**: Şikayetçi ve biliniyorsa şüpheli bilgileri.
- **Olayın Anlatımı**: Tarih, yer ve eylem ayrıntıları.
- **Deliller**: Yazışmalar, dekontlar, ekran görüntüleri vb.
- **Talep**: Soruşturma açılması talebi.

---

## Şikayet Sonrasında Süreç Nasıl İşler?

1. **Soruşturma Aşaması**: Savcılık delilleri toplar. Kovuşturmaya yer olmadığına dair karar (KYOK) verilirse 15 gün içinde itiraz edilebilir.
2. **Müşteki Sıfatı**: Dosyaya erişim ve ek delil sunma hakkı kazanılır.
3. **İfade Verme**: Türkiye'ye gitmeden konsolosluk aracılığıyla istinabe yoluyla ifade verilebilir.
4. **Uzlaştırma**: Bazı suçlarda savcılık dosyayı uzlaştırma bürosuna gönderir.

---

## Bir Sonraki Adımınız

Türkiye'de size karşı bir suç işlendi ve Almanya'dasınız. Yapmanız gereken ilk şey, 6 aylık şikayet süresini aklınızda tutarak **vakit kaybetmeden bir avukattan değerlendirme almaktır.**

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir.*`,category:"Ceza Hukuku · Suç Duyurusu · Türk Hukuku",categoryDE:"Strafrecht · Strafanzeige · Türkisches Recht",image:Ub,dateDE:"Nisan 2026",dateTR:"Nisan 2026",readTimeDE:"18 Min. Lesezeit",readTimeTR:"18 dk okuma",publishedAt:"2026-04-12",keywordsDE:"Suç Duyurusu Türkei aus Deutschland, Strafanzeige Türkei Betrug, Ermittlungsverfahren Türkei Anwalt, Strafrecht Türkei Anzeige, Opferrechte Türkei",keywordsTR:"Türkiye'de suç duyurusu nasıl yapılır, Almanya'dan şikayetçi olmak, dolandırıcılık suç duyurusu Türkiye, ceza soruşturması takibi avukat, şikayet dilekçesi örneği",faqTR:[{question:"Almanya'dan Türkiye'deki bir kişi hakkında şikayetçi olabilir miyim?",answer:"Evet. Türk vatandaşı olup olmamanızdan bağımsız olarak, Türkiye'de size karşı işlenen suçlar için Türk savcılığına şikayetçi olabilirsiniz. Almanya'dan avukat aracılığıyla bu işlemi yapmanız mümkündür."},{question:"Türkiye'ye gitmem gerekiyor mu?",answer:"Hayır. Avukatınıza vekâletname vererek şikayet dilekçesini sundurup süreci takip ettirebilirsiniz. İfadeniz gerekirse Almanya'daki konsolosluk aracılığıyla istinabe yoluyla alınabilir."},{question:"Şikayet süresi ne kadardır?",answer:"Şikayete bağlı suçlarda suçu veya faili öğrendiğiniz tarihten itibaren 6 ay. Re'sen soruşturulan suçlarda (dolandırıcılık, sahtecilik vb.) genel zamanaşımı süreleri geçerlidir (8-15 yıl)."},{question:"Şikayetimi konsolosluktan yapabilir miyim?",answer:"Evet. Almanya'daki Türk konsolosluğuna şikayet dilekçenizi sunabilirsiniz; konsolosluk bunu ilgili savcılığa iletir."},{question:"Whatsapp veya sosyal medya üzerinden gelen tehdit veya hakaret şikayet konusu olabilir mi?",answer:"Evet. Ekran görüntüleri, tarih ve gönderici bilgisiyle birlikte delil olarak sunulabilir. Ancak hakaret suçu şikayete bağlı olduğundan 6 aylık süreyi kaçırmayın."},{question:"Maddi zararımı nasıl talep ederim?",answer:"Ceza davasına katılan sıfatıyla tazminat talebinde bulunabilirsiniz. Ayrıca Türkiye'de ayrı bir hukuk (tazminat) davası açmak da mümkündür."},{question:"Savcılık soruşturmaya yer olmadığına karar verirse ne olur?",answer:"KYOK kararına karşı 15 gün içinde sulh ceza hâkimliğine itiraz edebilirsiniz. İtiraz avukatınız aracılığıyla yapılır."}],faqDE:[{question:"Kann ich aus Deutschland eine Strafanzeige gegen jemanden in der Türkei stellen?",answer:"Ja. Als Opfer einer in der Türkei begangenen Straftat können Sie — unabhängig von Ihrer Staatsangehörigkeit — bei der türkischen Staatsanwaltschaft Anzeige erstatten. Das geht aus Deutschland über einen Anwalt mit Vollmacht."},{question:"Muss ich dafür in die Türkei reisen?",answer:"Nein. Mit einer Vollmacht kann Ihr Anwalt die Antragsschrift einreichen und das Verfahren vollständig führen. Sollte eine Aussage nötig sein, ist diese über das türkische Konsulat in Deutschland im Rechtshilfeweg möglich."},{question:"Wie lange dauert das Ermittlungsverfahren?",answer:"Das ist stark fallabhängig. Einfache Fälle können in wenigen Monaten abgeschlossen werden; komplexe Fälle dauern oft ein bis mehrere Jahre."},{question:"Was ist, wenn die Staatsanwaltschaft das Verfahren einstellt?",answer:"Sie können innerhalb von 15 Tagen Beschwerde beim Sulh Ceza Hâkimliği einlegen. Ihr Anwalt prüft, ob eine Beschwerde erfolgversprechend ist."},{question:"Kann ich Schadensersatz fordern?",answer:"Ja — als Nebenkläger im Strafverfahren oder durch eine separate Zivilklage in der Türkei. Wenn der Täter Vermögenswerte in der Türkei hat, ist die dortige Vollstreckung effektiver."},{question:"Was ist die 6-Monats-Frist genau?",answer:"Sie gilt für antragspflichtige Straftaten und beginnt ab dem Zeitpunkt, an dem Sie die Tat und den Täter kennen. Bei Unkenntnis des Täters beginnt die Frist erst mit dessen Identifizierung."},{question:"Kann mich der Beschuldigte auch gegen mich anzeigen?",answer:"Theoretisch ist das möglich. In der Praxis werden unbegründete Gegenanzeigen von der Staatsanwaltschaft meist schnell abgetrennt. Ihr Anwalt kann dieses Risiko im Vorfeld bewerten."}]},{slug:"bosanma-rehberi-tuerkiye",slugDE:"scheidung-tuerkei-ohne-reise",slugTR:"turkiye-de-bosanma-rehberi",slugEN:"divorce-guide-turkey",titleDE:"Scheidung in der Türkei aus Deutschland: Einvernehmlich oder streitig – Der vollständige Leitfaden (2026)",titleTR:"Almanya'dan Türkiye'de Boşanma: Anlaşmalı ve Çekişmeli Boşanma Rehberi (2026)",excerptDE:"Vollständiger Leitfaden zur Scheidung in der Türkei für in Deutschland lebende Türken. Einvernehmliche vs. streitige Scheidung, Kosten und Ablauf.",excerptTR:"Almanya'da yaşayanlar için Türkiye'de boşanma rehberi. Anlaşmalı ve çekişmeli boşanma farkları, SEGBİS ile duruşmaya katılım ve mal paylaşımı.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Sie leben in Deutschland. Die Entscheidung, Ihre Ehe zu beenden, ist gefallen. Aber vor Ihnen stehen mehrere Fragen — und keine einfache Antwort:

Sollen Sie sich in Deutschland oder in der Türkei scheiden lassen? Müssen Sie dafür in die Türkei reisen? Was passiert, wenn Sie und Ihr Partner sich einig sind — und was, wenn nicht? Wie werden Sorgerecht, Unterhalt und Vermögensaufteilung nach türkischem Recht geregelt?

Dieser Leitfaden richtet sich an in Deutschland lebende Türken, die eine Scheidung nach türkischem Recht in Betracht ziehen. Er erklärt die Unterschiede zwischen einvernehmlicher und streitiger Scheidung, wie das Verfahren aus Deutschland geführt werden kann und welche kritischen Fehler Sie vermeiden sollten.

---

## Die Grundsatzfrage: Deutschland oder Türkei — wo sollten Sie sich scheiden lassen?

Das ist die erste Frage, die fast jeder stellt — und die Antwort hängt vollständig von Ihrer persönlichen Situation ab.

### Scheidung in Deutschland

Bei einer Scheidung vor einem deutschen Familiengericht gilt deutsches Recht. In Deutschland ist in der Regel:

- Anwaltspflicht für beide Parteien
- Das Trennungsjahr Voraussetzung (auch bei einvernehmlicher Scheidung meist erforderlich)
- Die Verfahrensdauer 6 Monate bis 1,5 Jahre
- Das deutsche Urteil in der Türkei **nicht automatisch gültig** — ein separates Tanıma-Tenfiz-Verfahren ist erforderlich

### Scheidung in der Türkei

Auch wenn Sie in Deutschland leben, können Sie in der Türkei klagen. Türkisches Recht wird angewendet. Vorteile:

- Bei einvernehmlicher Scheidung sehr kurze Verfahrensdauer (1–3 Monate)
- Das türkische Urteil wird direkt im Personenstandsregister eingetragen — kein Tanıma-Tenfiz erforderlich
- Sorgerecht, Unterhalt und Vermögensaufteilung werden nach türkischem Recht geregelt
- Das Verfahren kann per Vollmacht geführt werden — ohne Reise in die Türkei (insbesondere bei streitiger Scheidung)

### Was ist in Ihrer Situation sinnvoll?

| | **Situation** | **Empfehlung** |
|---|---|---|
| 1 | Beide türkische Staatsbürger, Einigkeit über alle Punkte | Einvernehmliche Scheidung in der Türkei — schnell und übersichtlich |
| 2 | Trennungsverfahren in Deutschland bereits eingeleitet | Scheidung in Deutschland, danach Tanıma-Tenfiz |
| 3 | Immobilien in der Türkei, Vermögensaufteilung nötig | Scheidung oder Güterrechtsklage in der Türkei |
| 4 | Partner lebt in der Türkei, kein Einvernehmen | Streitige Klage in der Türkei |
| 5 | Beide in Deutschland, kein Einvernehmen | Deutschland oder Türkei — anwaltliche Einzelfallbewertung notwendig |

Als Faustregel: **Wenn beide Parteien sich einig sind, ist eine einvernehmliche Scheidung in der Türkei meist der schnellste und günstigste Weg.**

---

## Einvernehmliche Scheidung nach türkischem Recht (ZGB Art. 166/3)

Die einvernehmliche Scheidung setzt voraus, dass sich die Parteien über die Scheidung selbst und über alle Scheidungsfolgen geeinigt haben. Das türkische Zivilgesetzbuch (TMK) regelt dies in Art. 166 Abs. 3.

### Voraussetzungen

**1. Die Ehe muss mindestens 1 Jahr bestanden haben.**
Bei einer Ehe unter einem Jahr ist der Weg zur einvernehmlichen Scheidung gesperrt. Die Parteien können sich zwar einigen, müssen das Verfahren aber technisch als streitige Scheidung einleiten. Das Gericht kann die Einigung jedoch berücksichtigen und zügig entscheiden.

**2. Einigkeit über alle Scheidungsfolgen.**
Es reicht nicht, gemeinsam „Ja" zur Scheidung zu sagen. Es muss auch Einigkeit über Sorgerecht, Unterhalt, Vermögensaufteilung, Schadensersatz und alle weiteren Punkte bestehen. Diese Einigung muss schriftlich in einem **Scheidungsprotokoll (Boşanma Protokolü)** festgehalten werden.

**3. Das Gericht muss beide Parteien persönlich anhören.**
Das ist die wichtigste praktische Hürde bei der einvernehmlichen Scheidung aus Deutschland. Das türkische Zivilgesetzbuch verpflichtet den Richter, beide Parteien persönlich zu hören. Das bedeutet: Bei der einvernehmlichen Scheidung ist **mindestens eine Teilnahme an der Verhandlung** erforderlich.

### Muss ich für eine einvernehmliche Scheidung in die Türkei reisen?

Die ehrliche Antwort lautet: **teilweise** — aber es gibt Wege, das zu umgehen.

- **SEGBİS (Video-Anhörungssystem):** Türkische Familiengerichte können die Parteien über SEGBİS per Videokonferenz anhören. Dieses System wird zunehmend von Gerichten akzeptiert.
- **Rechtshilfe über das Konsulat (İstinabe):** Wenn Sie nicht reisen können, kann Ihre Aussage über das türkische Generalkonsulat in Deutschland aufgenommen werden. Dieses Verfahren dauert länger, ist aber möglich.
- **Streitige Klage mit einvernehmlichem Hintergrund:** Manche Anwälte führen eine Scheidung, bei der sich die Parteien einig sind, technisch als streitige Klage mit dem Klagegrund „schwerwiegende Zerrüttung der ehelichen Lebensgemeinschaft". Dies ermöglicht eine Scheidung ohne Reise in die Türkei.

### Das Scheidungsprotokoll — warum es so entscheidend ist

Das Scheidungsprotokoll (Boşanma Protokolü) ist das Herzstück der einvernehmlichen Scheidung. Es legt alle Scheidungsfolgen schriftlich fest. Folgende Punkte müssen geregelt sein:

- **Sorgerecht (Velayet):** Wer erhält das Sorgerecht für gemeinsame Kinder?
- **Umgangsrecht (Kişisel İlişki):** Wann und wie oft hat der nicht sorgeberechtigte Elternteil Kontakt?
- **Kindesunterhalt (İştirak Nafakası):** Wie hoch ist der monatliche Unterhalt?
- **Ehegattenunterhalt (Yoksulluk Nafakası):** Wird einem der Ehegatten Unterhalt gewährt?
- **Vermögensaufteilung (Mal Paylaşımı):** Wie werden Immobilien und Konten in der Türkei aufgeteilt?

Ein fehlerhaft oder unvollständig erstelltes Protokoll wird vom Richter abgelehnt. Das Protokoll muss daher von einem Anwalt mit Kenntnissen im türkischen Familienrecht erstellt werden.

---

## Streitige Scheidung nach türkischem Recht

Eine streitige Scheidung wird eingeleitet, wenn die Parteien sich weder über die Scheidung selbst noch über deren Folgen einigen können.

### Scheidungsgründe

- **Ehebruch (TMK Art. 161)**
- **Lebensgefährdung, grobe Misshandlung oder schwere Ehrverletzung (TMK Art. 162)**
- **Straftat und ehrloses Leben (TMK Art. 163)**
- **Verlassen (TMK Art. 164)**
- **Geisteskrankheit (TMK Art. 165)**
- **Schwerwiegende Zerrüttung der ehelichen Lebensgemeinschaft (TMK Art. 166/1-2)** (Der häufigste Grund)

### Streitige Scheidung aus Deutschland — Muss ich in die Türkei?

**Bei streitigen Verfahren gilt grundsätzlich: Ihr Anwalt vertritt Sie — eine persönliche Anwesenheit ist nicht erforderlich.** Ihr Anwalt nimmt an allen Verhandlungen teil, präsentiert die Beweise und übermittelt Ihre Erklärungen. Sie verfolgen das Verfahren aus Deutschland.

---

## Zuständiges Gericht: Wo wird in der Türkei geklagt?

**Bei streitiger Scheidung** ist das Familiengericht am Wohnort eines der Ehegatten veya am letzten gemeinsamen Wohnsitz zuständig. **Bei einvernehmlicher Scheidung** können die Parteien das Familiengericht frei wählen.

---

## Scheidungsfolgen: Sorgerecht, Unterhalt, Vermögen

### Sorgerecht (Velayet)
Türkische Gerichte entscheiden über das Sorgerecht nach dem **Kindeswohl-Prinzip.** Ihr Wohnsitz in Deutschland wirkt sich nicht grundsätzlich negativ auf Ihren Sorgerechtswunsch aus.

### Unterhalt (Nafaka)
- **Kindesunterhalt (İştirak Nafakası)**
- **Ehegattenunterhalt (Yoksulluk Nafakası)**
- **Vorläufiger Unterhalt (Tedbir Nafakası)** (Während des laufenden Verfahrens)

### Vermögensaufteilung (Mal Paylaşımı)
Seit 2002 gilt in der Türkei das gesetzliche Güterrecht der **Errungemschaftsgemeinschaft.** Immobilien in der Türkei müssen zwingend vor türkischen Gerichten aufgeteilt werden.

---

## Die häufigsten Fehler von in Deutschland lebenden Türken

1. **In Deutschland klagen, ohne die türkischen Konsequenzen zu bedenken.**
2. **Scheidungsprotokoll ohne Anwalt erstellen.**
3. **Vollmacht mit unzureichendem Inhalt.**
4. **Vermögensaufteilung vertagen.**

---

## Ihr nächster Schritt

Eine Scheidung aus Deutschland ist rechtlich möglich, ohne in die Türkei zu reisen. Der entscheidende Faktor ist die richtige rechtliche Begleitung von Anfang an.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Almanya'da yaşıyorsunuz. Evliliğinizi bitirme kararı verdiniz. Ama önünüzde birden fazla seçenek var ve hangisinin sizin için doğru olduğunu bilmiyorsunuz:

Almanya'da mı boşanmalısınız, yoksa Türkiye'de mi? Türkiye'de boşanmak için Türkiye'ye gitmek zorunda mısınız? Eşinizle anlaşabiliyorsanız süreç nasıl işliyor? Anlaşamıyorsanız ne olacak? Velayet, nafaka, mal paylaşımı — bunlar Türkiye'de nasıl karara bağlanıyor?

Bu rehber, Almanya'da yaşayan ve Türkiye'de boşanmayı düşünen kişiler için hazırlandı. Türk hukukuna göre anlaşmalı ve çekişmeli boşanma arasındaki farkları, Almanya'dan bu sürecin nasıl yürütüleceğini ve dikkat etmeniz gereken kritik noktaları kapsamlı biçimde ele alıyoruz.

---

## Önce Temel Soru: Almanya'da mı, Türkiye'de mi Boşanmalısınız?

Bu soru, Almanya'da yaşayan pek çok kişinin ilk sorduğu sorudur — ve doğru cevap tamamen kişisel koşullarınıza bağlıdır.

### Almanya'da Boşanmak

Almanya'da bir aile mahkemesinde (Familiengericht) boşanırsanız, Alman hukuku uygulanır. Almanya'da boşanma süreci genellikle:

- Her iki tarafın da avukatla temsil edilmesini zorunlu kılar
- Trennjahr (1 yıl ayrı yaşama) şartını arar
- Ortalama 6 ay ile 1,5 yıl sürer
- Kararın Türkiye'de geçerli sayılması için **ayrıca tanıma ve tenfiz davası** gerekir

### Türkiye'de Boşanmak

Almanya'da yaşasanız dahi Türkiye'de boşanma davası açabilirsiniz. Türk hukuku uygulanır. Avantajlar:

- Anlaşmalı davada süreç çok daha hızlıdır (1-3 ay)
- Türkiye'de kesinleşen karar doğrudan nüfus kaydına işlenir; tanıma-tenfiz gerekmez
- Velayet, nafaka ve mal paylaşımı Türk hukukuna göre karara bağlanır
- Türkiye'ye gitmeden, vekâletname ile süreç yürütülebilir

### Peki Hangisi Sizin İçin Daha Uygun?

| | **Durum** | **Öneri** |
|---|---|---|
| 1 | Her iki taraf da Türk vatandaşı, anlaşabiliyorsunuz | Türkiye'de anlaşmalı boşanma — hızlı ve temiz |
| 2 | Almanya'da zaten ayrılık süreci başladı | Almanya'da boşanıp ardından tanıma-tenfiz |
| 3 | Türkiye'de mülkünüz var, mal paylaşımı lazım | Türkiye'de boşanma veya eş zamanlı dava |
| 4 | Eşiniz Türkiye'de yaşıyor, anlaşamıyorsunuz | Türkiye'de çekişmeli dava |
| 5 | Eşiniz Almanya'da, anlaşamıyorsunuz | Almanya veya Türkiye — avukattan değerlendirme şart |

Genel bir kural olarak: **taraflar anlaşabiliyorsa Türkiye'de anlaşmalı boşanma çoğu zaman en hızlı ve en az maliyetli yoldur.**

---

## Türk Hukukunda Anlaşmalı Boşanma (TMK Madde 166/3)

Anlaşmalı boşanma, tarafların boşanma kararı ve boşanmanın tüm sonuçları üzerinde mutabık kaldığı boşanma türüdür.

### Anlaşmalı Boşanmanın Koşulları

1. **Evlilik en az 1 yıl sürmüş olmalıdır.**
2. **Taraflar boşanmanın tüm sonuçlarında anlaşmış olmalıdır.** (Velayet, nafaka, mal paylaşımı vb.)
3. **Hâkim her iki tarafı bizzat dinlemelidir.**

### Almanya'dan Anlaşmalı Boşanma: Türkiye'ye Gitmek Zorunda mısınız?

- **SEGBİS (Ses ve Görüntü Bilişim Sistemi):** Türkiye'deki aile mahkemeleri, SEGBİS aracılığıyla tarafları Almanya'dan video bağlantısıyla dinleyebilir.
- **İstinabe yolu:** Almanya'daki Türk konsolosluğu aracılığıyla ifadeniz alınabilir.
- **Çekişmeli yoldan anlaşmalı boşanma:** Dava çekişmeli olarak açılır ama protokol sunulur. Bu yol Türkiye'ye gitmeksizin boşanmayı mümkün kılabilir.

### Boşanma Protokolü Nedir ve Neden Bu Kadar Önemlidir?

Boşanma protokolü, tarafların boşanmanın tüm sonuçlarını yazılı olarak düzenlediği belgedir. Müşterek çocukların velayeti, nafakalar ve mal paylaşımı detayları burada yer alır. Protokolün mutlaka Türk aile hukukunu bilen bir avukat tarafından hazırlanması gerekir.

---

## Türk Hukukunda Çekişmeli Boşanma

Çekişmeli boşanma, tarafların boşanma ya da boşanmanın sonuçları konusunda anlaşamadığı durumlarda açılan davadır.

### Çekişmeli Boşanma Sebepleri

- **Zina (TMK m. 161)**
- **Hayata kast, pek kötü muamele (TMK m. 162)**
- **Suç işleme ve haysiyetsiz hayat sürme (TMK m. 163)**
- **Terk (TMK m. 164)**
- **Akıl hastalığı (TMK m. 165)**
- **Evlilik birliğinin temelinden sarsılması (TMK m. 166/1-2)** (Genel sebep)

### Almanya'dan Çekişmeli Boşanma: Türkiye'ye Gitmeden Mümkün mü?

**Çekişmeli davalarda kural olarak avukat sizi temsil edebilir; bizzat duruşmaya katılmanıza gerek yoktur.** Siz Almanya'dan süreci takip edersiniz; avukatınız tüm duruşmalara katılır ve delilleri sunar.

---

## Boşanmanın Hukuki Sonuçları: Velayet, Nafaka, Mal Paylaşımı

### Velayet
Türk mahkemeleri velayet kararını **çocuğun üstün yararı** ilkesine göre verir. Almanya'da yaşamanız velayet talebinizi olumsuz etkilemez.

### Nafaka
- **İştirak nafakası:** Çocuk için ödenen nafaka.
- **Yoksulluk nafakası:** Eşlerden birine bağlanan nafaka.
- **Tedbir nafakası:** Dava süresince ödenen geçici nafaka.

### Mal Paylaşımı
Türkiye'de 2002 yılından itibaren yasal mal rejimi **edinilmiş mallara katılma** rejimidir. Türkiye'deki taşınmazların paylaşımı mutlaka Türk mahkemelerinde görülür.

---

## Almanya'da Yaşayanların En Sık Yaptığı Hatalar

1. **Türkiye'ye sormadan Almanya'da davayı açmak.**
2. **Protokolü avukatsız hazırlamak.**
3. **Vekâletname metnini eksik bırakmak.**
4. **Mal paylaşımını ertelemek.**

---

## Bir Sonraki Adımınız

Sürecin en kritik adımı doğru hukuki danışmanlık almaktır. Mannheim'da Türk hukukunu bilen bir büro olarak tüm süreci sizin adınıza yönetiyoruz.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir.*`,category:"Boşanma · Aile Hukuku · Türk Hukuku",categoryDE:"Scheidung · Familienrecht · Türkisches Recht",image:Ru,dateDE:"Nisan 2026",dateTR:"Nisan 2026",readTimeDE:"22 Min. Lesezeit",readTimeTR:"22 dk okuma",publishedAt:"2026-04-12",keywordsDE:"Scheidung Türkei ohne Reise, Einvernehmliche Scheidung Türkei, Anlaşmalı Boşanma Protokoll, Scheidungsanwalt Türkei Mannheim, Boşanma davası vekalet",keywordsTR:"Türkiye'ye gitmeden boşanma davası, Almanya'dan anlaşmalı boşanma, boşanma protokolü nasıl hazırlanır, çekişmeli boşanma süreci, boşanma avukatı ücretleri",faqTR:[{question:"Almanya'da yaşıyorum, Türkiye'de boşanma davası açabilir miyim?",answer:"Evet. Türk vatandaşı olmanız yeterlidir. Avukatınıza vekâletname verirseniz Türkiye'ye gitmeden dava açılabilir."},{question:"Anlaşmalı boşanmada kesinlikle Türkiye'ye gitmem gerekiyor mu?",answer:"Hukuki olarak hâkimin tarafları bizzat dinlemesi zorunludur. Ancak SEGBİS sistemi veya konsolosluk istinabesi yoluyla bu zorunluluk bazı mahkemelerde aşılabilir. Avukatınızla birlikte değerlendirin. Türkiye'ye gidemiyorsanız çekişmeli yoldan anlaşmalı boşanma da bir seçenektir."},{question:"Çekişmeli boşanmada avukatım beni temsil edebilir mi?",answer:"Evet. Çekişmeli davalarda avukat temsili yeterlidir. Mahkemenin sizi bizzat dinlemesine karar verdiği durumlarda SEGBİS veya istinabe yoluna başvurulabilir."},{question:"Türkiye'de boşanırsam kararı Almanya'da tanıtmam gerekiyor mu?",answer:"Evet, Almanya'da yeniden evlenmek istiyorsanız Türk boşanma kararının Almanya'da tanınması gerekebilir. Bu işlem FamFG § 107 kapsamında eyalet adalet makamlarınca yürütülür."},{question:"Eşim Türkiye'de yaşıyor, ben Almanya'dayım. Türkiye'de çekişmeli boşanma açsam tebligat nasıl yapılır?",answer:"Tebligat Türkiye'deki eşinizin adresine yapılır. Türkiye'de yaşayan kişiye iç tebligat yapıldığı için bu süreç görece hızlıdır. Avukatla temsil ediliyorsa daha da hızlanır."},{question:"Boşanma protokolü hazırlamamız ne kadar sürer?",answer:"Taraflar temel konularda anlaşıyorsa avukatın yönlendirmesiyle protokol 1-2 hafta içinde hazırlanabilir. Mal paylaşımı detayları karmaşıksa daha uzun sürebilir."},{question:"Türkiye'deki taşınmazımı mal paylaşımına dahil edebilir miyim?",answer:"Evet. Evlilik süresince edinilmiş taşınmazlar kural olarak mal paylaşımına dahildir. Tapu müdürlüğü nezdinde işlem yapılabilmesi için ya boşanma protokolüne yazılmalı ya da ayrı bir mal paylaşımı davası açılmalıdır."},{question:"Her iki taraf da Almanya'da yaşıyorsa hangi ülkede boşanmak daha mantıklı?",answer:"Bu durumda her iki seçenek de mümkündür. Almanya'da boşanıp tanıma-tenfiz açmak ile Türkiye'de avukat aracılığıyla boşanmak arasındaki tercih; süre, maliyet, Türkiye'deki mal varlığı ve tarafların koşullarına göre değişir. Avukatınızla somut durumunuzu değerlendirin."}],faqDE:[{question:"Ich lebe in Deutschland. Kann ich in der Türkei eine Scheidungsklage einreichen?",answer:"Ja. Als türkischer Staatsangehöriger können Sie in der Türkei klagen. Mit einer Vollmacht kann Ihr Anwalt das Verfahren vollständig in Ihrem Namen führen."},{question:"Muss ich für eine einvernehmliche Scheidung zwingend in die Türkei reisen?",answer:"Rechtlich gesehen muss der Richter beide Parteien persönlich anhören. Über SEGBİS (Video) oder Rechtshilfe über das Konsulat kann diese Pflicht aber in vielen Fällen ohne Reise erfüllt werden. Fragen Sie Ihren Anwalt nach der Praxis des zuständigen Gerichts."},{question:"Kann mein Anwalt mich bei einer streitigen Scheidung vollständig vertreten?",answer:"Ja. Bei streitigen Verfahren ist die anwaltliche Vertretung grundsätzlich ausreichend. In Ausnahmefällen, in denen das Gericht eine persönliche Anhörung anordnet, ist SEGBİS oder Rechtshilfe über das Konsulat möglich."},{question:"Muss ein türkisches Scheidungsurteil in Deutschland anerkannt werden?",answer:"Ja, wenn Sie in Deutschland erneut heiraten möchten oder der Personenstand in Deutschland geändert werden soll, ist ein Anerkennungsverfahren nach § 107 FamFG bei der zuständigen Landesjustizverwaltung erforderlich."},{question:"Mein Partner lebt in der Türkei und zahlt keinen Unterhalt. Was kann ich tun?",answer:"Zunächst benötigen Sie ein Tenfiz-Urteil in der Türkei, falls das Unterhaltsurteil aus Deutschland stammt. Bei einem türkischen Unterhaltsurteil kann direkt die Zwangsvollstreckung in der Türkei beantragt werden — Pfändung von Bankkonten, Gehalt oder Immobilien. Bei beharrlicher Verweigerung droht nach türkischem Recht Beugehaft."},{question:"Wie lange dauert das Scheidungsprotokoll zu erstellen?",answer:"Wenn die Parteien grundsätzlich einig sind, kann ein Anwalt das Protokoll in 1–2 Wochen ausarbeiten. Bei komplexen Vermögensverhältnissen kann es länger dauern."},{question:"Wir besitzen beide Immobilien in der Türkei. Wie regeln wir das?",answer:"Diese Frage ist Teil der Vermögensaufteilung. Wenn das Protokoll die Immobilien regelt und der Richter genehmigt, kann die Übertragung direkt beim türkischen Grundbuchamt (Tapu Müdürlüğü) beantragt werden. Ist das nicht der Fall, ist eine separate Güterrechtsklage erforderlich."}]},{slug:"scheidungsanwalt-mannheim",slugDE:"scheidungsanwalt-mannheim",slugTR:"mannheim-bosanma-avukati",slugEN:"divorce-lawyer-mannheim",titleDE:"Scheidungsanwalt Mannheim: Ablauf, Kosten und türkisch-deutsche Besonderheiten",titleTR:"Mannheim'da Boşanma Avukatı: Süreç, Masraflar ve Türk-Alman Özellikleri",excerptDE:"Sie suchen einen Scheidungsanwalt in Mannheim? Hier erfahren Sie, wie eine Scheidung abläuft, was sie kostet — und was bei türkisch-deutschen Ehen zusätzlich gilt.",excerptTR:"Mannheim'da boşanma avukatı mı arıyorsunuz? Sürecin nasıl işlediğini, maliyetleri ve Türk-Alman evliliklerinde geçerli olan ek kuralları öğrenin.",contentDE:`Sie haben sich getrennt und fragen sich, wie das jetzt weitergehen soll. Welche Schritte müssen Sie wann einleiten? Was kostet eine Scheidung in Mannheim ungefähr? Und wenn Sie oder Ihr Partner türkische Staatsbürger sind: Was ist dann anders?

Ich erkläre Ihnen den Ablauf ohne Umwege.

## Kein Anwalt, keine Scheidung — so funktioniert es in Deutschland

Eine Scheidung läuft in Deutschland immer über das Familiengericht. Das bedeutet: Mindestens ein Ehepartner braucht einen Rechtsanwalt, der den Scheidungsantrag stellt. Der andere kann ohne Anwalt erscheinen — er kann aber keinen eigenen Antrag stellen.

Das Zuständige Gericht in Mannheim ist das Amtsgericht Mannheim, Familienabteilung.

## Schritt für Schritt: So läuft eine Scheidung ab

**Das Trennungsjahr.** Bevor ein Gericht die Scheidung ausspricht, müssen Sie mindestens ein Jahr getrennt gelebt haben. "Getrennt" heißt nicht zwingend, dass jemand ausgezogen ist. Es reicht, wenn die Ehe faktisch beendet ist: kein gemeinsames Wirtschaften, keine eheliche Gemeinschaft. Manche Paare trennen sich in derselben Wohnung — das ist möglich, aber oft schwierig zu beweisen.

**Scheidungsantrag.** Nach dem Trennungsjahr reicht ein Anwalt beim Familiengericht Mannheim den Scheidungsantrag ein. Der andere Partner bekommt ihn zugestellt.

**Versorgungsausgleich.** Das Gericht teilt automatisch die Rentenansprüche auf, die während der Ehe erworben wurden. Das klingt einfacher als es ist — besonders wenn einer der Partner in der Türkei Rentenansprüche aufgebaut hat. Dort gibt es eine eigene Rentenversicherung (SGK), und die Abstimmung zwischen deutschem und türkischem System dauert.

**Gerichtstermin.** Wenn nichts mehr strittig ist, dauert der Termin selbst oft unter 30 Minuten. Das Gericht prüft, ob das Trennungsjahr vorliegt, und spricht die Scheidung aus.

## Was eine Scheidung in Mannheim kostet

Die Kosten hängen vom Streitwert ab. Der Streitwert ergibt sich aus dem gemeinsamen Monatsnettoeinkommen. Grobe Orientierung:

- Einvernehmliche Scheidung, ein Anwalt: 1.500 bis 2.500 Euro
- Streitige Scheidung mit Unterhalt, Sorgerecht oder Zugewinnausgleich: 3.000 Euro aufwärts — manchmal deutlich mehr

Wer wenig verdient, kann Verfahrenskostenhilfe beantragen. Das Gericht übernimmt dann die Kosten und stellt einen Anwalt.

## Türkisch-deutsche Ehen: Drei Dinge, die anders laufen

**Welches Scheidungsrecht gilt?** Nach der EU-Verordnung Rom III gilt grundsätzlich das Recht des Landes, in dem Sie leben. Für in Deutschland lebende Paare also deutsches Recht — außer Sie haben vorher ausdrücklich eine andere Rechtswahl getroffen.

**Das Scheidungsurteil in der Türkei anerkennen lassen.** Wenn Sie nach der deutschen Scheidung in der Türkei erneut heiraten oder Ihren Personenstand im türkischen Register ändern möchten, brauchen Sie ein Anerkennungsverfahren in der Türkei — ein sogenanntes Tanıma-Tenfiz-Verfahren vor einem türkischen Gericht.

**Türkische Immobilien.** Wenn einer der Partner Grundbesitz in der Türkei hat, wird die Vermögensaufteilung komplizierter. Türkisches und deutsches Güterrecht unterscheiden sich erheblich. Das sollte früh besprochen werden.

## Warum manche Scheidungen ewig dauern

Meistens liegt es am Versorgungsausgleich — besonders wenn ausländische Rentenansprüche im Spiel sind. Der Austausch mit türkischen Behörden läuft oft langsam. Dazu kommen Streitigkeiten über Unterhalt oder Sorgerecht, die das Verfahren aufblähen können.

Eine einvernehmliche Scheidung mit einer vorab unterschriebenen Scheidungsfolgenvereinbarung ist deutlich schneller. Wenn beide Seiten die wesentlichen Punkte — Unterhalt, Kinder, Wohnung, Vermögen — vorab klar regeln, kann die Scheidung in 3 bis 6 Monaten durch sein.

## Wie die Doğru Kanzlei helfen kann

Rechtsanwalt Hasan Doğru ist sowohl bei der Ankara Barosu als auch bei der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassen. Er kennt beide Rechtssysteme und berät auf Deutsch und Türkisch — auch zu Fragen rund um Tanıma-Tenfiz, türkische Immobilien und grenzüberschreitende Unterhaltsansprüche.`,contentTR:`Ayrıldınız ve bundan sonra ne yapmanız gerektiğini merak ediyorsunuz. Hangi adımları ne zaman atmalısınız? Mannheim'da bir boşanma yaklaşık ne kadar tutar? Siz ya da eşiniz Türk vatandaşıysanız ne değişir?

Süreci doğrudan açıklıyorum.

## Avukatsız Boşanma Olmaz — Almanya'da Böyle İşliyor

Almanya'da boşanma her zaman mahkeme yoluyla gerçekleşir. En az bir eşin avukat tutup boşanma dilekçesi sunması şarttır. Diğer taraf avukatsız katılabilir, ancak kendi talebini sunamaz.

Mannheim'da yetkili mahkeme Amtsgericht Mannheim Aile Hukuku Dairesidir.

## Adım Adım Boşanma Süreci

**Ayrılık yılı.** Mahkeme boşanma kararı vermeden önce çiftlerin en az bir yıl ayrı yaşamış olması gerekir. "Ayrı yaşamak" birinin mutlaka taşınması anlamına gelmez. Fiilen evlilik sona ermişse — ortak ev yönetimi yok, evlilik birlikteliği yok — yeter. Bazı çiftler aynı evde ayrı yaşar; bu mümkün ama ispat açısından zordur.

**Boşanma dilekçesi.** Ayrılık yılının ardından avukat, Mannheim Aile Mahkemesi'ne boşanma dilekçesini sunar. Diğer tarafa tebligat yapılır.

**Emeklilik hakları paylaşımı (Versorgungsausgleich).** Mahkeme, evlilik süresince biriktirilen emeklilik haklarını otomatik olarak paylaştırır. Türkiye'deki SGK primleri de devreye girince Alman ve Türk sistemleri arasındaki koordinasyon zaman alabilir.

**Duruşma.** Tartışmalı nokta yoksa duruşma genellikle 30 dakikadan kısa sürer. Mahkeme ayrılık yılını teyit eder ve boşanma kararını verir.

## Mannheim'da Boşanmanın Maliyeti

Masraflar dava değerine göre belirlenir; dava değeri ise çiftin ortak aylık net gelirine göre hesaplanır. Genel bir tablo:

- Anlaşmalı boşanma, bir avukat: 1.500–2.500 Euro
- Nafaka, velayet veya mal paylaşımı konusunda çekişmeli boşanma: 3.000 Euro ve üzeri

Düşük gelirli kişiler Verfahrenskostenhilfe (dava yardımı) başvurabilir.

## Türk-Alman Evliliklerinde Üç Farklı Durum

**Hangi hukuk uygulanır?** AB Roma III Tüzüğü uyarınca, Almanya'da yaşayan çiftlere kural olarak Alman hukuku uygulanır; önceden başka bir hukuku seçmedilerse.

**Türkiye'de tanıma davası.** Alman boşanmasının ardından Türkiye'de yeniden evlenmek ya da Türk nüfus kaydını güncellemek istiyorsanız, Türk mahkemesinde Tanıma-Tenfiz davası açmanız gerekir.

**Türk gayrimenkulleri.** Taraflardan birinin Türkiye'de mülkü varsa mal paylaşımı karmaşıklaşır. Türk ve Alman mal rejimi hukuku arasındaki fark büyüktür; bu konuyu erken ele almak önemlidir.

## Doğru Kanzlei Nasıl Yardımcı Olur

Avukat Hasan Doğru, hem Ankara Barosu hem de Karlsruhe Barosu'na (§207 BRAO) kayıtlıdır. Her iki hukuk sistemini bilen Hasan Doğru, Tanıma-Tenfiz, Türk mülkleri ve sınır ötesi nafaka konularında da danışmanlık sunmaktadır.`,category:"family-law",categoryDE:"Familienrecht",image:Ru,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-19",keywordsDE:"scheidungsanwalt mannheim, scheidung mannheim, scheidungskosten mannheim, türkisch deutsche scheidung, scheidungsverfahren deutschland",keywordsTR:"mannheim boşanma avukatı, almanya boşanma süreci, türk alman boşanma, boşanma masrafları almanya",faqDE:[{question:"Brauche ich einen Scheidungsanwalt in Mannheim, wenn wir uns einig sind?",answer:"Ja, mindestens einer der Partner braucht einen Anwalt, um den Scheidungsantrag beim Familiengericht Mannheim einzureichen. Der andere kann ohne Anwalt erscheinen, kann aber keinen eigenen Antrag stellen."},{question:"Wie lange dauert eine Scheidung in Mannheim?",answer:"Bei einer einvernehmlichen Scheidung ohne offene Streitpunkte rechnen Sie ab Antragseinreichung mit 3 bis 6 Monaten. Gibt es Auseinandersetzungen über Unterhalt, Sorgerecht oder Vermögen, kann es 1 bis 3 Jahre dauern."},{question:"Muss ich beim Scheidungstermin persönlich erscheinen?",answer:"Grundsätzlich ja. In Ausnahmefällen — etwa bei Aufenthalt im Ausland — kann das Gericht eine Ausnahme genehmigen oder die Anhörung per Video durchführen."},{question:"Wir haben in der Türkei geheiratet. Zählt das in Deutschland?",answer:"Ja. Eine in der Türkei wirksam geschlossene Ehe wird in Deutschland anerkannt. Sie können die Scheidung dann beim deutschen Familiengericht beantragen."},{question:"Was passiert mit meiner Rente in der Türkei bei der Scheidung?",answer:"Türkische SGK-Rentenansprüche fließen in den deutschen Versorgungsausgleich ein. Das erfordert Abstimmung mit türkischen Behörden, was das Verfahren verlängern kann. Sprechen Sie Ihren Anwalt früh darauf an."}],faqTR:[{question:"Anlaşmalı boşanmada Mannheim'da avukat tutmam gerekiyor mu?",answer:"Evet, en az bir tarafın avukat tutması zorunludur. Diğer taraf avukatsız duruşmaya katılabilir ancak kendi talebini sunamaz."},{question:"Mannheim'da boşanma ne kadar sürer?",answer:"Tartışmasız, anlaşmalı bir boşanma dilekçenin sunulmasından itibaren genellikle 3–6 ay içinde sonuçlanır. Nafaka, velayet veya mülk anlaşmazlığı varsa 1–3 yıl sürebilir."},{question:"Türkiye'de evlendik. Bu evlilik Almanya'da geçerli mi?",answer:"Evet. Türk hukukuna göre geçerli şekilde Türkiye'de yapılan bir evlilik Almanya'da tanınır ve boşanma Alman mahkemesinde talep edilebilir."}],ctaTitleDE:"Scheidungsberatung in Mannheim",ctaTitleTR:"Mannheim'da Boşanma Danışmanlığı",ctaDescriptionDE:"Fragen zur Scheidung — besonders bei türkisch-deutschen Sachverhalten? Wir beraten auf Deutsch und Türkisch.",ctaDescriptionTR:"Boşanma konusunda sorularınız mı var? Almanca ve Türkçe danışmanlık sunuyoruz."},{slug:"familienrecht-beratung-mannheim",slugDE:"familienrecht-beratung-mannheim",slugTR:"mannheim-aile-hukuku-danismanligi",slugEN:"family-law-consultation-mannheim",titleDE:"Familienrecht Beratung Mannheim: Was kostet eine Erstberatung und wann lohnt sie sich?",titleTR:"Mannheim'da Aile Hukuku Danışmanlığı: İlk Görüşme Ne Kadar Tutar ve Ne Zaman Gereklidir?",excerptDE:"Familienrecht Beratung in Mannheim: Was kostet eine Erstberatung, welche Themen deckt sie ab, und was ist bei türkisch-deutschen Familien anders?",excerptTR:"Mannheim'da aile hukuku danışmanlığı: ilk görüşme ne kadar tutar, hangi konuları kapsar ve Türk-Alman ailelerde ne farklıdır?",contentDE:`Familienrechtliche Probleme tauchen meistens dann auf, wenn man sie am wenigsten gebrauchen kann. Trennung, Streit ums Kind, ausbleibender Unterhalt — und dann weiß man nicht, wo man anfangen soll.

Eine anwaltliche Erstberatung ist der einfachste erste Schritt. Sie dauert meist eine Stunde und beantwortet die Frage, die die meisten am meisten beschäftigt: Was kann ich überhaupt tun?

## Was eine Erstberatung im Familienrecht bringt

Nach einem Gespräch mit einem Familienrechtler wissen Sie drei Dinge, die Sie vorher nicht wussten:

Erstens, welches Recht auf Ihre Situation anwendbar ist. Bei Familien mit Bezug zur Türkei ist das nicht immer klar. Deutsches oder türkisches Recht? Welches Gericht ist zuständig? Das hängt davon ab, wo die Beteiligten leben, wo geheiratet wurde, wo die Kinder sind.

Zweitens, welche konkreten Ansprüche Sie haben — oder gegen Sie bestehen könnten.

Drittens, ob eine außergerichtliche Einigung möglich ist. Die meisten Familienrechtler sagen Ihnen ehrlich, ob ein Anruf beim Anwalt der Gegenseite mehr bringt als ein Gerichtsverfahren.

## Was kostet eine Familienrecht-Beratung in Mannheim?

Das Rechtsanwaltsvergütungsgesetz (RVG) begrenzt die Erstberatungsgebühr auf maximal 190 Euro zuzüglich Mehrwertsteuer. Viele Anwälte verlangen weniger. Es lohnt sich, vorher anzurufen und zu fragen.

Wenn Sie wenig verdienen, haben Sie möglicherweise Anspruch auf Beratungshilfe. Mit einem Beratungshilfeschein — ausgestellt vom Amtsgericht Mannheim — zahlen Sie beim Anwalt nur 15 Euro. Voraussetzung ist, dass Ihr Einkommen unter einer bestimmten Grenze liegt und Sie keine Rechtsschutzversicherung haben, die die Kosten deckt.

Haben Sie eine Rechtsschutzversicherung, rufen Sie vor dem Anwalttermin bei Ihrer Versicherung an. Erstberatungskosten sind häufig inbegriffen.

## Die häufigsten Familienrechtsthemen in Mannheim

**Scheidung und Trennung.** Das klassische Thema. Wichtig dabei: die Scheidung selbst ist oft der unkompliziertere Teil. Was die meisten Paare länger beschäftigt, sind die Folgen — Unterhalt, Wohnung, Vermögen, Kinder.

**Kindesunterhalt.** Der Kindesunterhalt richtet sich nach der Düsseldorfer Tabelle. Das klingt einfach, wird aber schwierig, wenn der zahlungspflichtige Elternteil in der Türkei lebt oder wechselnde Einkommen hat.

**Sorgerecht und Umgang.** Nach der Trennung behalten verheiratete Eltern grundsätzlich das gemeinsame Sorgerecht. Probleme entstehen, wenn die Kommunikation nicht mehr funktioniert oder ein Elternteil mit dem Kind ins Ausland ziehen möchte.

**Ehegattenunterhalt.** Nicht automatisch. Ob und wie viel Unterhalt nach der Scheidung gezahlt werden muss, hängt von Ehedauer, Erwerbstätigkeit und gemeinsamen Kindern ab.

## Was bei türkisch-deutschen Familien oft anders ist

Das ist ein Punkt, der in vielen allgemeinen Ratgebern untergeht. Wenn Ihre Familie einen Bezug zur Türkei hat — Staatsangehörigkeit, Wohnort, Immobilien, Rentenpunkte — können sich die Fragen deutlich verschieben.

Typische Konstellationen, die uns in der Kanzlei oft begegnen:

Ein Partner lebt in der Türkei und zahlt keinen Unterhalt. Was hilft dann: ein deutsches Urteil plus Tenfiz-Verfahren in der Türkei, oder direkt eine Klage in der Türkei? Beides hat Vor- und Nachteile.

Die Scheidung ist in Deutschland durch, aber in der Türkei gilt man noch als verheiratet. Das Tanıma-Tenfiz-Verfahren löst das — aber es kostet Zeit und Geld.

Ein Elternteil will mit dem Kind in die Türkei. Bei gemeinsamem Sorgerecht ist das ohne Zustimmung des anderen nicht erlaubt. Was passiert, wenn er oder sie trotzdem geht? Dann wird es schnell zu einem Fall nach dem Haager Kindesentführungsübereinkommen.

## Wann man nicht warten sollte

Es gibt Situationen, in denen jede Woche zählt. Wenn der andere Elternteil mit dem Kind verreisen will. Wenn Sie seit Monaten keinen Unterhalt bekommen und über Rückforderungen nachdenken. Wenn Sie eine Kündigung der Ehewohnung bekommen haben und nicht sicher sind, ob die rechtmäßig ist.

Eine Erstberatung schafft Klarheit. Das hilft — auch wenn danach kein Gerichtsverfahren folgt.`,contentTR:`Aile hukuku sorunları genellikle en az ihtiyaç duyduğunuz anda ortaya çıkar. Ayrılık, çocuk meselesi, ödenmeyen nafaka — ve nereden başlayacağınızı bilmiyorsunuzdur.

Bir avukatla ilk görüşme, en basit ilk adımdır. Genellikle bir saat sürer ve çoğu kişinin en çok merak ettiği soruyu yanıtlar: Ne yapabilirim?

## İlk Görüşme Ne İşe Yarar?

Bir aile hukukçusuyla görüştükten sonra üç şeyi bilirsiniz:

Birincisi, durumunuza hangi hukukun uygulanacağını. Türkiye bağlantılı ailelerde bu her zaman açık değildir. Alman mı Türk hukuku mu? Hangi mahkeme yetkili? Bu, tarafların nerede yaşadığına, nerede evlenildiğine ve çocukların nerede olduğuna bağlıdır.

İkincisi, sahip olduğunuz — ya da size karşı ileri sürülebilecek — somut hakları.

Üçüncüsü, mahkeme dışı uzlaşmanın mümkün olup olmadığını. Deneyimli bir aile hukukçusu, dava açmadan bir çözüme ulaşıp ulaşılamayacağını size dürüstçe söyler.

## Mannheim'da Aile Hukuku Danışması Ne Kadar Tutar?

Alman Avukatlık Ücret Kanunu (RVG) ilk danışma ücretini maksimum 190 Euro + KDV ile sınırlar. Birçok avukat daha az alır; önceden sormak mantıklıdır.

Düşük gelirli iseniz Beratungshilfe hakkından yararlanabilirsiniz. Mannheim Asliye Mahkemesi'nden alınan belgeyle avukatta yalnızca 15 Euro ödersiniz.

## Türk-Alman Ailelerde Sıkça Karşılaşılan Durumlar

Türkiye ile bağlantılı ailelerde tablo farklılaşır. Büromuzda sık karşılaştığımız durumlar:

Eş Türkiye'de yaşıyor ve nafaka ödemiyor. Ne işe yarar: Alman kararı + Türkiye'de Tenfiz davası mı, yoksa doğrudan Türkiye'de dava mı? Her ikisinin avantaj ve dezavantajları var.

Almanya'da boşanma tamamlandı ama Türkiye'de hâlâ evli görünüyorsunuz. Tanıma-Tenfiz davası bu sorunu çözer ancak zaman ve masraf gerektirir.

Bir ebeveyn çocukla Türkiye'ye gitmek istiyor. Müşterek velayette diğer ebeveynin onayı olmadan bu mümkün değildir. Yine de gidilirse, Lahey Sözleşmesi kapsamında bir dava söz konusu olabilir.

## Ne Zaman Beklememelisiniz?

Bazı durumlarda her hafta önemlidir. Diğer ebeveyn çocukla yurt dışına çıkmak istiyorsa. Aylardır nafaka almıyorsanız. Evlilik konutu konusunda belirsizlik varsa.

Bir görüşme netlik sağlar — hatta ardından dava açılmasa bile.`,category:"family-law",categoryDE:"Familienrecht",image:Mu,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-19",keywordsDE:"familienrecht beratung mannheim, familienanwalt mannheim, erstberatung familienrecht mannheim, familienrecht mannheim kosten, türkisches familienrecht",keywordsTR:"mannheim aile hukuku danışmanlığı, aile avukatı mannheim, türk alman aile hukuku, ilk görüşme aile hukuku",faqDE:[{question:"Was kostet eine Erstberatung im Familienrecht in Mannheim?",answer:"Maximal 190 Euro plus Mehrwertsteuer nach dem RVG. Mit Beratungshilfeschein (beim Amtsgericht Mannheim erhältlich) zahlen Sie nur 15 Euro. Viele Anwälte verlangen weniger als den Höchstsatz."},{question:"Muss ich beim Familiengericht Mannheim einen Anwalt haben?",answer:"Für Anträge und Verhandlungen gilt Anwaltszwang. Für eine einfache Beratung können Sie ohne Anwalt kommen — aber dann gibt es keinen Anwalt, der für Sie spricht."},{question:"Mein Ex-Partner lebt in der Türkei und zahlt keinen Unterhalt. Was sind meine Optionen?",answer:"Sie können in Deutschland klagen und das Urteil dann per Tenfiz-Verfahren in der Türkei vollstrecken lassen. Alternativ klagen Sie direkt in der Türkei. Welcher Weg schneller geht, hängt von der konkreten Situation ab."},{question:"Wie läuft eine Familienrecht-Beratung ab?",answer:"Sie schildern Ihre Situation, der Anwalt erklärt die Rechtslage, zeigt Optionen auf und schätzt ein, was realistisch ist. Am Ende wissen Sie, ob und wie Sie weiter vorgehen sollten."}],faqTR:[{question:"Mannheim'da aile hukuku ilk görüşmesi ne kadar tutar?",answer:"RVG'ye göre maksimum 190 Euro + KDV. Beratungshilfe belgesiyle yalnızca 15 Euro. Birçok avukat tavan ücretten daha az alır."},{question:"Türkiye'deki eski eşim nafaka ödemiyor, seçeneklerim neler?",answer:"Almanya'da dava açıp kararı Türkiye'de Tenfiz davası yoluyla icra ettirebilirsiniz. Ya da doğrudan Türkiye'de dava açabilirsiniz. Hangisinin daha hızlı sonuç vereceği somut duruma bağlıdır."}],ctaTitleDE:"Familienrecht-Erstberatung in Mannheim",ctaTitleTR:"Mannheim'da Aile Hukuku Danışmanlığı",ctaDescriptionDE:"Sie haben eine Frage zum Familienrecht — besonders mit türkischem Bezug? Wir beraten auf Deutsch und Türkisch.",ctaDescriptionTR:"Aile hukukuyla ilgili sorularınız mı var? Almanca ve Türkçe danışmanlık sunuyoruz."},{slug:"sorgerecht-anwalt-mannheim",slugDE:"sorgerecht-anwalt-mannheim",slugTR:"mannheim-velayet-avukati",slugEN:"custody-lawyer-mannheim",titleDE:"Sorgerecht Anwalt Mannheim: Alleinsorge, Umgang und Auslandsreisen mit dem Kind",titleTR:"Mannheim'da Velayet Avukatı: Tek Velayet, Ziyaret Hakkı ve Çocukla Yurt Dışı Seyahati",excerptDE:"Streit ums Sorgerecht in Mannheim? Wann gibt es Alleinsorge, wie wird der Umgang geregelt, und was passiert, wenn ein Elternteil mit dem Kind ins Ausland reisen will?",excerptTR:"Mannheim'da velayet uyuşmazlığı mı? Mahkeme ne zaman tek velayet verir, ziyaret hakkı nasıl düzenlenir ve bir ebeveyn çocukla yurt dışına gitmek isterse ne olur?",contentDE:`Das Sorgerecht ist das Thema, bei dem Eltern sich am häufigsten uneinig sind — und bei dem die rechtliche Lage am häufigsten missverstanden wird.

Manche glauben, die Mutter bekommt automatisch das alleinige Sorgerecht. Andere denken, man kann als Vater nichts ausrichten. Beides stimmt nicht.

## Was gemeinsames Sorgerecht in der Praxis bedeutet

Bei verheirateten Eltern gilt das gemeinsame Sorgerecht automatisch. Es bleibt auch nach der Scheidung bestehen — das ist der gesetzliche Regelfall in Deutschland.

Das gemeinsame Sorgerecht bedeutet: Beide Elternteile müssen bei allen wesentlichen Entscheidungen zustimmen. Schulwahl, medizinische Eingriffe, Umzug ins Ausland, Religionszugehörigkeit, Reisepässe. Bei kleineren Alltagsentscheidungen entscheidet der Elternteil, bei dem das Kind gerade ist.

Das funktioniert gut, wenn die Kommunikation noch halbwegs klappt. Es funktioniert schlecht, wenn Eltern sich über jeden Schritt streiten.

## Wann bekommt ein Elternteil das alleinige Sorgerecht?

Das Familiengericht überträgt das alleinige Sorgerecht nur, wenn das Kindeswohl es erfordert. Beispiele, die das Gericht ernst nimmt:

Das Kind ist häuslicher Gewalt ausgesetzt. Ein Elternteil ist aus psychischen oder suchtbedingten Gründen dauerhaft nicht erziehungsfähig. Die Kommunikation ist so zerrüttet, dass jede gemeinsame Entscheidung dem Kind schadet.

Was nicht reicht: Der Elternteil ist mir unsympathisch. Wir streiten uns viel. Er zahlt keinen Unterhalt. All das ist unangenehm, aber keine Grundlage für das alleinige Sorgerecht.

## Das Umgangsrecht: Recht des Kindes, nicht Druckmittel

Das Umgangsrecht gehört dem Kind, nicht dem Elternteil. Das klingt nach Sprachregelung, hat aber praktische Konsequenzen. Selbst wenn ein Elternteil den Unterhalt nicht zahlt, darf der andere den Umgang nicht einfach verweigern. Unterhalt und Umgang sind rechtlich unabhängig voneinander.

Der Umgang wird entweder einvernehmlich geregelt oder per Gerichtsbeschluss. Wenn sich die Eltern nicht einigen können, legt das Familiengericht Zeiten, Abhol- und Rückgabeorte und Ferienregelungen fest.

## Auslandsreise mit dem Kind: Wann brauchen Sie eine Erlaubnis?

Das ist der Punkt, an dem es in türkisch-deutschen Familien am häufigsten eskaliert.

Bei gemeinsamem Sorgerecht darf kein Elternteil das Kind ohne Zustimmung des anderen dauerhaft ins Ausland mitnehmen. Für Urlaubsreisen ins Ausland gilt: Bei kürzeren Reisen (weniger als 6 Wochen) ohne Rückkehrabsicht reicht in der Praxis die Zustimmung des anderen Elternteils — am besten schriftlich. Für einen dauerhaften Umzug mit dem Kind brauchen Sie die Zustimmung des anderen Elternteils oder einen Gerichtsbeschluss.

Reist ein Elternteil ohne Zustimmung mit dem Kind aus, ist das rechtlich eine internationale Kindesentführung — auch wenn es sich um einen leiblichen Elternteil handelt. Die Türkei hat das Haager Kindesentführungsübereinkommen unterzeichnet, was grundsätzlich Rückführungsanträge ermöglicht.

Wenn Sie in einer solchen Situation sind oder sie befürchten: Holen Sie sofort anwaltliche Hilfe. Je länger das Kind im Ausland ist, desto schwieriger wird die Rückführung.

## Türkisch-deutsches Sorgerecht: Was noch dazu kommt

Ein türkisches Sorgerechtsurteil gilt in Deutschland nicht automatisch. Es muss in einem eigenen Verfahren anerkannt werden. Dasselbe gilt umgekehrt: Ein deutsches Sorgerechtsurteil braucht in der Türkei ein Tenfiz-Verfahren, bevor es vollstreckbar ist.

Das bedeutet in der Praxis: Wenn Sie in Deutschland ein Sorgerechtsurteil erstreiten, hat das in der Türkei zunächst keine direkte Wirkung. Das muss separat beantragt werden. Die Doğru Kanzlei übernimmt diese Verfahren auf beiden Seiten.

## Was ein Sorgerechtsverfahren kostet

Das Gericht setzt den Verfahrenswert oft auf 3.000 bis 4.000 Euro fest. Anwalts- und Gerichtsgebühren zusammen ergeben bei einem unkomplizierten Fall ohne Sachverständigengutachten oft 800 bis 1.500 Euro. Mit Gutachten mehr.

Bei geringem Einkommen ist Verfahrenskostenhilfe möglich.`,contentTR:`Velayet, ebeveynlerin en sık anlaşmazlığa düştüğü konudur — ve hukuki durumun en çok yanlış anlaşıldığı alandır.

Kimileri annenin otomatik olarak tek velayeti aldığını sanır. Kimileri ise babanın hiçbir hakkının olmadığını düşünür. İkisi de doğru değildir.

## Müşterek Velayet Pratikte Ne Anlama Gelir?

Evli ebeveynlerde müşterek velayet otomatik olarak geçerlidir. Boşanmanın ardından da kural olarak devam eder — Almanya'da yasal standart budur.

Müşterek velayet şu demektir: Tüm önemli kararlar için her iki ebeveynin onayı gerekir. Okul seçimi, tıbbi müdahaleler, yurt dışına taşınma, din eğitimi, pasaport. Günlük küçük kararları ise o anda çocukla birlikte olan ebeveyn verir.

İletişim işe yarıyorsa bu düzen çalışır. Her adımda tartışma varsa çalışmaz.

## Mahkeme Ne Zaman Tek Velayeti Verir?

Aile mahkemesi, tek velayeti yalnızca çocuğun yararını gerektirdiği durumlarda devreder:

Çocuk aile içi şiddete maruz kalıyor. Bir ebeveyn psikolojik veya bağımlılık nedenlerinden kalıcı olarak ebeveynlik yapamıyor. İletişim çökmüş, her ortak karar çocuğa zarar veriyor.

Yeterli olmayan gerekçeler: Eski eşimi sevmiyorum. Çok kavga ediyoruz. Nafaka ödemiyor. Bunlar rahatsız edici ama tek velayet için yeterli değildir.

## Ziyaret Hakkı: Çocuğun Hakkı, Baskı Aracı Değil

Ziyaret hakkı çocuğa aittir, ebeveyne değil. Pratikte şu anlama gelir: Nafaka ödenmiyor olsa bile diğer ebeveyn ziyaret hakkını bloke edemez. Nafaka ve ziyaret hakkı hukuken birbirinden bağımsızdır.

Ziyaret ya anlaşmayla ya da mahkeme kararıyla düzenlenir.

## Çocukla Yurt Dışına Seyahat: Ne Zaman İzin Gerekir?

Türk-Alman ailelerde en sık kriz yaratan noktadır.

Müşterek velayette, hiçbir ebeveyn diğerinin onayı olmadan çocuğu kalıcı olarak yurt dışına götüremez. Kısa tatiller için diğer ebeveynin yazılı onayı pratik açıdan yeterlidir. Kalıcı taşınma için diğer ebeveynin onayı ya da mahkeme kararı şarttır.

Onay alınmadan çocuğun yurt dışına çıkarılması, biyolojik ebeveyn olsa bile uluslararası çocuk kaçırma sayılır. Türkiye Lahey Sözleşmesi'ni imzalamıştır — bu teorik olarak iade taleplerini mümkün kılar.

Böyle bir durumla karşı karşıyaysanız: hemen hukuki yardım alın. Çocuk ne kadar uzun süre yurt dışında kalırsa iade o kadar zorlaşır.

## Doğru Kanzlei'nin Rolü

Türk mahkemesindeki bir velayet kararı Almanya'da otomatik olarak geçerli değildir. Tanıma davası açılması gerekir. Aynısı tersi için de geçerlidir: Alman kararı, Türkiye'de Tenfiz davası olmadan icra edilemez. Doğru Kanzlei her iki taraftaki bu süreçleri yürütmektedir.`,category:"family-law",categoryDE:"Familienrecht",image:xu,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-19",keywordsDE:"sorgerecht anwalt mannheim, sorgerecht mannheim, alleinsorge beantragen, umgangsrecht mannheim, türkisches sorgerecht, kind ausland mitnehmen",keywordsTR:"mannheim velayet avukatı, tek velayet almanya, ziyaret hakkı mannheim, türk alman velayet, çocuk yurt dışı izin",faqDE:[{question:"Bekommt die Mutter automatisch das Sorgerecht nach der Scheidung?",answer:"Nein. Bei verheirateten Eltern bleibt das gemeinsame Sorgerecht nach der Scheidung bestehen. Das alleinige Sorgerecht gibt es nur, wenn ein Gericht es ausdrücklich überträgt — und dafür braucht es mehr als nur den Wunsch eines Elternteils."},{question:"Kann ich den Umgang verweigern, weil mein Ex keinen Unterhalt zahlt?",answer:"Nein. Umgangsrecht und Unterhaltsrecht sind voneinander unabhängig. Wenn Sie den Umgang verweigern, kann das gerichtliche Konsequenzen für Sie haben. Gegen ausbleibenden Unterhalt müssen Sie separat vorgehen."},{question:"Mein Kind hat die türkische Staatsbürgerschaft. Welches Recht gilt beim Sorgerecht?",answer:"Maßgeblich ist der gewöhnliche Aufenthaltsort des Kindes. Lebt das Kind in Deutschland, gilt deutsches Recht — unabhängig von der Staatsbürgerschaft."},{question:"Darf ich mit meinem Kind in die Türkei fliegen, ohne den Ex zu fragen?",answer:"Für Urlaubsreisen empfiehlt sich die schriftliche Zustimmung. Bei einem dauerhaften Umzug ist die Zustimmung des anderen Elternteils oder ein Gerichtsbeschluss notwendig. Ohne beides kann das als Kindesentführung gewertet werden."}],faqTR:[{question:"Boşanmanın ardından anne otomatik olarak velayeti mi alır?",answer:"Hayır. Evli ebeveynlerde müşterek velayet boşanmadan sonra da devam eder. Tek velayet, yalnızca mahkeme tarafından açıkça devredilirse mümkündür — ve bunun için bir ebeveynin isteği yetmez."},{question:"Eski eşim nafaka ödemediği için ziyaret hakkını reddedebilir miyim?",answer:"Hayır. Ziyaret hakkı ve nafaka hukuken birbirinden bağımsızdır. Ziyareti engellerseniz hukuki sonuçlar doğabilir. Ödenmeyen nafaka için ayrı işlem başlatmanız gerekir."},{question:"Sormadan çocukla Türkiye'ye gidebilir miyim?",answer:"Tatil amaçlı kısa seyahatler için yazılı onay almanız tavsiye edilir. Kalıcı taşınma için diğer ebeveynin onayı ya da mahkeme kararı şarttır. Bu olmadan çocuk kaçırma kapsamında değerlendirilebilir."}],ctaTitleDE:"Sorgerechtsberatung in Mannheim",ctaTitleTR:"Mannheim'da Velayet Danışmanlığı",ctaDescriptionDE:"Sorgerechtsstreit — besonders mit Bezug zur Türkei? Wir kennen beide Systeme und beraten auf Deutsch und Türkisch.",ctaDescriptionTR:"Velayet uyuşmazlığı mı var? Her iki hukuk sistemini bilen ekibimiz Almanca ve Türkçe danışmanlık sunuyor."},{slug:"vollmacht-auf-tuerkisch",slugDE:"vollmacht-auf-tuerkisch",slugTR:"turkce-vekaletname-nasil-cikarilir",slugEN:"power-of-attorney-turkish",titleDE:"Vollmacht auf Türkisch: Was Sie wirklich brauchen und welche Fehler teuer werden",titleTR:"Türkçe Vekaletname: Gerçekten Neye İhtiyacınız Var ve Hangi Hatalar Pahalıya Mal Olur?",excerptDE:"Vollmacht auf Türkisch ausstellen: Konsulat oder deutscher Notar? Was muss im Text stehen? Und welche häufigen Fehler führen dazu, dass türkische Behörden das Dokument ablehnen?",excerptTR:"Türkçe vekaletname çıkarma: konsolosluk mu, Alman noteri mi? Metinde ne yazmalı? Türk kurumlarının belgeyi reddetmesine yol açan yaygın hatalar neler?",contentDE:`Wer in Deutschland lebt und in der Türkei etwas regeln muss — Immobilienverkauf, Erbschaft, Gerichtsverfahren, Bankgeschäfte — kommt meistens nicht drum herum: Er braucht eine türkische Vollmacht, die sogenannte Vekâletname.

Das Problem dabei ist nicht, dass man eine Vollmacht braucht. Das Problem ist, dass viele Vollmachten falsch sind. Und das merkt man oft erst dann, wenn der türkische Notar oder die Behörde das Dokument zurückweist.

Hier erkläre ich, was wirklich funktioniert.

## Was eine Vollmacht auf Türkisch von einer deutschen unterscheidet

In Deutschland reicht für viele Vollmachten ein schriftliches Dokument mit Unterschrift. In der Türkei ist das anders. Für die meisten rechtlich relevanten Vorgänge brauchen Sie eine **notariell beurkundete Vekâletname** — entweder ausgestellt vom türkischen Konsulat oder durch einen deutschen Notar plus Apostille plus beglaubigte Übersetzung.

Das ist kein bürokratischer Zufall. Die Türkei schützt sich damit vor gefälschten Vollmachten, besonders bei Immobilien- und Erbschaftsgeschäften.

## Wann brauchen Sie eine türkische Vollmacht?

Immer dann, wenn Sie von Deutschland aus jemanden in der Türkei bevollmächtigen möchten, um in Ihrem Namen zu handeln. Häufige Anlässe:

- Immobilienverkauf oder -übertragung in der Türkei (Tapu Devri)
- Erbschaftsangelegenheiten — Veraset ilamı, Aufteilung, Übertragung
- Einreichung einer Scheidungsklage in der Türkei durch einen türkischen Anwalt
- Tanıma-Tenfiz-Verfahren — Anerkennung eines deutschen Urteils in der Türkei
- Bankgeschäfte auf türkischen Konten
- An- oder Abmeldung eines Fahrzeugs in der Türkei

## Konsulat oder deutscher Notar — was ist besser?

**Türkisches Konsulat.** Das ist der einfachere Weg. Die Konsulate in Frankfurt, Berlin, Stuttgart, München und anderen Städten können Vekâletnamen direkt auf Türkisch ausstellen. Das Ergebnis ist in der Türkei ohne Apostille oder Übersetzung sofort gültig.

Der Nachteil: Termine sind oft Monate im Voraus ausgebucht, und Sie müssen persönlich erscheinen.

**Deutscher Notar.** Möglich, aber aufwendiger. Der Notar beurkundet auf Deutsch, dann brauchen Sie eine Apostille beim Landgericht oder der Bezirksregierung und eine beglaubigte Übersetzung ins Türkische durch einen staatlich vereidigten Dolmetscher. Erst das komplette Paket (Original + Apostille + Übersetzung) gilt in der Türkei.

Der Nachteil: Teurer, zeitintensiver und fehleranfälliger — weil bei jedem Schritt etwas schiefgehen kann.

## Was in der Vollmacht stehen muss

Das ist der entscheidende Punkt. In der Türkei gilt: Nur was in der Vollmacht ausdrücklich steht, darf der Bevollmächtigte tun. Keine pauschalen Formulierungen wie "alle Angelegenheiten in der Türkei regeln".

Wenn die Vollmacht für einen Immobilienverkauf ist, muss sie explizit Folgendes enthalten: Befugnis zum Verkauf der konkreten Immobilie (mit Adresse und Tapu-Nummer), Befugnis zur Unterzeichnung aller notwendigen Dokumente beim Tapu-Amt und Befugnis, den Verkaufspreis zu empfangen.

Fehlt auch nur einer dieser Punkte, kann der türkische Notar oder das Grundbuchamt die Vollmacht ablehnen.

## Die häufigsten Fehler

**Zu vage formuliert.** "Alle Angelegenheiten vertreten" reicht nicht. Türkische Behörden verlangen Spezifität.

**Falscher Übersetzer.** Für die Apostille-Variante brauchen Sie einen staatlich vereidigten Übersetzer (in Deutschland: staatlich geprüfter und beeidigter Übersetzer). Eine normale Übersetzungsfirma reicht nicht.

**Vergessene Identitätsnachweise.** Die Vollmacht muss in der Türkei dem Handelsregister oder Grundbuchamt vorgelegt werden, oft zusammen mit dem türkischen Nüfus-Dokument oder Reisepass des Vollmachtgebers.

**Verjährte Vollmacht.** Immobilienvollmachten verlieren in der Türkei nach einigen Jahren ihre Gültigkeit (je nach Behörde unterschiedlich). Prüfen Sie vor einem Immobiliengeschäft, ob eine alte Vollmacht noch anerkannt wird.

## Wer formuliert den Text?

Das ist die Stelle, an der ein Anwalt mit Kenntnissen des türkischen Rechts hilft. Kein Textbaustein aus dem Internet. Keine Übersetzung einer deutschen Vollmacht. Der Text muss nach türkischem Recht formuliert sein — passgenau für den konkreten Zweck.

In der Doğru Kanzlei formulieren wir Vekâletname-Texte auf Türkisch, die türkische Notare und Behörden tatsächlich akzeptieren.`,contentTR:`Almanya'da yaşayıp Türkiye'de bir şeyler halletmeniz gerekiyorsa — gayrimenkul satışı, miras, dava, bankacılık — çoğunlukla kaçış yoktur: Türk hukukuna uygun bir vekaletname, yani Vekâletname gerekir.

Sorun vekaletname gerektirmesi değildir. Sorun, pek çok vekaleetnamenin hatalı olmasıdır. Bunu çoğu zaman Türk noteri ya da kurum belgeyi reddettiğinde anlarsınız.

Bu yazıda gerçekten ne işe yaradığını açıklıyorum.

## Türk Vekaletnamesi Neden Farklı?

Almanya'da pek çok yetki belgesi için imzalı yazılı bir belge yeterlidir. Türkiye'de durum farklıdır. Çoğu hukuki işlem için noter onaylı Vekâletname şarttır — ya Türk konsolosluğu tarafından düzenlenmiş ya da Alman noteri + apostil + yeminli çeviri şeklinde hazırlanmış.

Bu bir tesadüf değil. Türkiye, özellikle gayrimenkul ve miras işlemlerinde sahte vekaletnamelere karşı önlem alıyor.

## Ne Zaman Türkçe Vekaletname Gerekir?

Almanya'dan Türkiye'de biri adına işlem yaptırmak istediğinizde. Yaygın durumlar:

- Türkiye'deki gayrimenkul satışı veya devri (Tapu Devri)
- Miras işlemleri — veraset ilamı, taksim, devir
- Türkiye'de boşanma davası açtırmak için Türk avukata yetki vermek
- Tanıma-Tenfiz davası — Alman mahkeme kararının Türkiye'de tanınması
- Türk banka hesapları üzerinde işlem yaptırmak
- Türkiye'de araç tescil veya silme işlemi

## Konsolosluk mu, Alman Noteri mi?

**Türk Konsolosluğu.** Daha kolay yoldur. Frankfurt, Berlin, Stuttgart, Münih ve diğer şehirlerdeki konsolosluklar doğrudan Türkçe Vekâletname düzenleyebilir. Sonuç, apostil veya çeviri gerektirmeksizin Türkiye'de anında geçerlidir.

Dezavantaj: Randevular çoğu zaman aylarca önceden dolmaktadır ve bizzat gitmeniz gerekir.

**Alman Noteri.** Mümkündür ancak daha zahmetlidir. Noter Almanca düzenleme yapar; ardından Landgericht veya Bezirksregierung'dan apostil alınır ve devlet yeminli bir tercüman tarafından Türkçe'ye çevrilir. Türkiye'de geçerli olması için tüm paketin (asıl + apostil + çeviri) tam olması gerekir.

Dezavantaj: Daha pahalı, daha zaman alıcı ve her adımda hata riski daha yüksektir.

## Vekaletnamede Ne Yazmalı?

Bu kritik noktadır. Türkiye'de kural şudur: Vekaletnamede açıkça yazılan şeyleri vekil yapabilir. "Türkiye'deki tüm işleri halletmek" gibi genel ifadeler kabul edilmez.

Gayrimenkul satışı için vekaletname şunları açıkça içermelidir: Söz konusu taşınmazı satma yetkisi (adres ve tapu numarasıyla birlikte), tapu dairesinde gerekli belgeleri imzalama yetkisi, satış bedelini tahsil etme yetkisi.

Bu maddelerden biri eksikse Türk noteri veya tapu müdürlüğü belgeyi reddedebilir.

## En Sık Yapılan Hatalar

**Muğlak ifadeler.** "Tüm işleri temsil etmek" yetmez. Türk kurumları özgüllük ister.

**Yanlış tercüman.** Apostil yolunu seçtiyseniz devlet yeminli tercüman gerekir. Sıradan çeviri bürosu yetmez.

**Eski vekaletname.** Gayrimenkul vekaletnameleri Türkiye'de belirli bir süre sonra geçerliliğini yitirebilir. İşlem öncesinde eski vekaletnamenin hâlâ kabul edilip edilmeyeceğini kontrol edin.

## Metni Kim Yazmalı?

İşte burada Türk hukukunu bilen bir avukat devreye girer. İnternetten bulunan hazır şablonlar değil. Alman vekaletnamelerinin çevirisi değil. Metin, Türk hukukuna göre — somut amaca özel olarak — kaleme alınmalıdır.

Doğru Kanzlei olarak, Türk noterler ve kurumların gerçekten kabul ettiği Vekâletname metinleri hazırlıyoruz.`,category:"legal-documents",categoryDE:"Rechtsdokumente",image:Am,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-19",keywordsDE:"vollmacht auf türkisch, türkische vollmacht, vekâletname deutschland, vollmacht türkei konsulat, türkische vollmacht apostille, vekâletname text",keywordsTR:"türkçe vekaletname, almanya vekaletname nasıl çıkarılır, konsolosluk vekaletname, apostil türkiye, vekâletname metin örneği",faqDE:[{question:"Kann ich eine Vollmacht auf Türkisch einfach selbst übersetzen?",answer:"Nein. Eine selbst übersetzte Vollmacht wird von türkischen Behörden nicht anerkannt. Sie brauchen entweder eine Beurkundung durch das türkische Konsulat oder eine beglaubigte Übersetzung durch einen staatlich vereidigten Dolmetscher."},{question:"Wie lange ist eine türkische Vollmacht gültig?",answer:"Das hängt vom Verwendungszweck und der Behörde ab. Bei Immobiliengeschäften gibt es in der Praxis oft eine Grenze von 3 bis 5 Jahren. Prüfen Sie vor einem Geschäft, ob eine ältere Vollmacht noch anerkannt wird."},{question:"Welche türkischen Konsulate in Deutschland können Vollmachten ausstellen?",answer:"Alle türkischen Generalkonsulate: Frankfurt, Berlin, Hamburg, München, Stuttgart, Karlsruhe, Mainz, Hannover, Düsseldorf, Köln, Nürnberg und das Konsulat in Münster."},{question:"Was kostet eine Vekâletname beim türkischen Konsulat?",answer:"Die Konsulatsgebühr liegt je nach Umfang bei etwa 30 bis 80 Euro. Dazu kommen mögliche Kosten für Dolmetscher oder notwendige Unterlagen."},{question:"Ich bin in Deutschland und kann nicht persönlich zum Konsulat. Was sind meine Optionen?",answer:"Sie können den Weg über den deutschen Notar wählen: Beurkundung auf Deutsch, dann Apostille und beglaubigte Übersetzung. Das ist aufwendiger, funktioniert aber ohne Konsulatsbesuch. Sprechen Sie uns an, wir begleiten Sie durch den Prozess."}],faqTR:[{question:"Türkçe vekaletnameyi kendim tercüme edebilir miyim?",answer:"Hayır. Öz çeviri Türk kurumları tarafından kabul edilmez. Ya Türk konsolosluğunda düzenleme yaptırmalısınız ya da devlet yeminli tercüman onaylı çeviri kullanmalısınız."},{question:"Türkçe vekaletname ne kadar süre geçerlidir?",answer:"Kullanım amacına ve kuruma göre değişir. Gayrimenkul işlemlerinde pratikte genellikle 3–5 yıllık sınır uygulanır. İşlem öncesinde eski bir vekaleetnamenin kabul edilip edilmeyeceğini kontrol edin."},{question:"Almanya'da hangi konsolosluklar vekaletname düzenleyebilir?",answer:"Tüm Türk Başkonsoloslukları: Frankfurt, Berlin, Hamburg, Münih, Stuttgart, Karlsruhe, Mainz, Hannover, Düsseldorf, Köln, Nürnberg ve Münster."},{question:"Konsolosluğa bizzat gidemiyorum. Ne yapabilirim?",answer:"Alman noteri yolunu seçebilirsiniz: Almanca düzenleme, ardından apostil ve yeminli çeviri. Daha zahmetlidir ama konsolosluk ziyareti gerektirmez. Süreç için bize danışabilirsiniz."}],ctaTitleDE:"Vollmacht auf Türkisch richtig aufsetzen",ctaTitleTR:"Türkçe Vekaletnameyi Doğru Hazırlayın",ctaDescriptionDE:"Wir formulieren Ihre Vekâletname auf Türkisch — zweckgebunden, rechtssicher und von türkischen Behörden anerkannt.",ctaDescriptionTR:"Amacınıza özel, Türk kurumlarınca kabul edilen Vekâletname metnini sizin için hazırlıyoruz."},{slug:"mietrecht-mannheim",slugDE:"mietrecht-mannheim",slugTR:"mannheim-kira-hukuku",slugEN:"tenant-law-mannheim",titleDE:"Mietrecht Mannheim: Kündigung, Kaution und was Mieter wirklich wissen müssen",titleTR:"Mannheim'da Kira Hukuku: Fesih, Depozito ve Kiracıların Gerçekten Bilmesi Gerekenler",excerptDE:"Mietrecht in Mannheim: Wann ist eine Kündigung des Vermieters wirksam? Wie bekommen Sie Ihre Kaution zurück? Und welche Renovierungsklauseln müssen Mieter nicht erfüllen?",excerptTR:"Mannheim'da kira hukuku: Ev sahibinin feshi ne zaman geçerlidir? Depozitonuzu nasıl geri alırsınız? Hangi tamirat hükümleri kiracılar için bağlayıcı değildir?",contentDE:`Mietrecht ist das Rechtsgebiet, bei dem die meisten Menschen irgendwann einmal landen — ob als Mieter oder als Vermieter. In Mannheim, wo die Wohnungsnachfrage hoch ist, kommt es besonders häufig zu Streitigkeiten über Kündigungen, Kautionseinbehalte und Nebenkostenabrechnungen.

Ich erkläre Ihnen die wichtigsten Punkte ohne den üblichen Fachjargon.

## Kündigung durch den Vermieter: Was gilt?

Der Vermieter kann ein unbefristetes Mietverhältnis nicht einfach so kündigen. Er braucht immer einen gesetzlich anerkannten Grund.

**Eigenbedarf.** Der häufigste Kündigungsgrund. Der Vermieter oder ein naher Familienangehöriger möchte die Wohnung selbst nutzen. Die Kündigung muss schriftlich sein und den Eigenbedarf konkret benennen — wer zieht ein, aus welchem Grund. Pauschale Formulierungen reichen nicht.

**Erhebliche Pflichtverletzung.** Gemeint sind Dinge wie dauerhafter Mietrückstand von mehr als zwei Monatsmieten, schwere Ruhestörungen oder absichtliche Beschädigungen der Wohnung.

**Wirtschaftliche Verwertung.** Dieser Grund ist rechtlich komplex und in der Praxis selten erfolgreich. Der Vermieter muss nachweisen, dass er ohne Kündigung erhebliche wirtschaftliche Nachteile erleidet.

Ohne einen dieser Gründe ist die Kündigung unwirksam — auch wenn sie schriftlich ist.

### Kündigungsfristen in Mannheim

Die Kündigungsfrist richtet sich nach der Wohndauer:

- Bis zu 5 Jahren in der Wohnung: 3 Monate
- 5 bis 8 Jahre: 6 Monate
- Mehr als 8 Jahre: 9 Monate

Die Kündigung muss schriftlich beim Mieter ankommen — und zwar bis zum dritten Werktag des Monats, damit dieser Monat bei der Fristberechnung zählt.

### Widerspruch gegen die Kündigung

Wenn Ihnen die Kündigung zugestellt wurde, haben Sie in bestimmten Fällen das Recht auf Widerspruch — zum Beispiel wenn ein Umzug für Sie oder Familienangehörige aus gesundheitlichen Gründen unzumutbar ist, Sie keinen angemessenen Ersatzwohnraum in Mannheim finden oder Sie schon sehr lange in der Wohnung wohnen. Der Widerspruch muss schriftlich und spätestens 2 Monate vor Ablauf der Kündigungsfrist eingelegt werden.

## Die Kaution: Was der Vermieter darf und was nicht

Die Kaution darf höchstens drei Monatsnettokaltmieten betragen. Der Vermieter muss das Geld getrennt von seinem eigenen Vermögen anlegen — auf einem Treuhandkonto oder als gesondertes Sparbuch.

Nach dem Auszug hat er in der Regel bis zu sechs Monate Zeit, die Kaution abzurechnen und zurückzuzahlen. Er darf Teile einbehalten, wenn er konkrete, nachweisbare Ansprüche hat — etwa für tatsächliche Schäden (die über normale Abnutzung hinausgehen), offene Mietzahlungen oder ausstehende Betriebskostenposten.

**Normale Abnutzung** muss er hinnehmen. Das sind Dinge wie vergilbte Wände nach Jahren normalen Wohnens, leichte Kratzer im Parkett oder minimale Schäden, die beim gewöhnlichen Gebrauch entstehen.

Wenn die sechs Monate vergangen sind und keine Abrechnung kommt, können Sie auf Rückzahlung der gesamten Kaution klagen.

## Schönheitsreparaturen: Die meisten Klauseln sind unwirksam

Das überrascht viele Mieter. Sie glauben, am Ende der Mietzeit renovieren zu müssen — weil es im Vertrag steht. Aber der Bundesgerichtshof hat in einer Reihe von Entscheidungen festgelegt, dass viele solcher Klauseln unwirksam sind.

Unwirksam sind insbesondere:

Starre Renovierungsfristen. Wenn der Vertrag sagt "Die Küche ist alle 3 Jahre zu streichen", ist das ohne Rücksicht auf den tatsächlichen Zustand der Wohnung. Solche Klauseln sind nach der BGH-Rechtsprechung regelmäßig unwirksam.

Renovierungspflicht bei unrenovierten Wohnungen. Wer eine unrenovierte Wohnung bezogen hat, muss bei Auszug grundsätzlich nicht renovieren — egal was der Vertrag sagt.

Farbvorgaben. Klauseln, die bestimmte Farben oder Materialien vorschreiben, sind häufig unwirksam.

Was folgt daraus: Wenn Ihr Vertrag eine dieser Klauseln enthält, sollten Sie vor dem Auszug prüfen lassen, ob sie überhaupt gilt — bevor Sie Geld für eine Renovierung ausgeben, die Sie rechtlich nicht schulden.

## Nebenkostenabrechnung: Was der Vermieter verlangen darf

Die Nebenkostenabrechnung muss innerhalb von 12 Monaten nach Ende des Abrechnungszeitraums vorliegen. Kommt sie zu spät, verliert der Vermieter seinen Anspruch auf Nachzahlungen — auch wenn Sie tatsächlich zu wenig gezahlt hätten.

Welche Kosten umgelegt werden dürfen, ist in der Betriebskostenverordnung (BetrKV) abschließend geregelt. Was dort nicht steht — Verwaltungskosten, Instandhaltung, Reparaturen — darf nicht auf den Mieter umgelegt werden.

Als Mieter haben Sie das Recht, die Originalbelege zur Abrechnung einzusehen. Fragen Sie danach, wenn Ihnen etwas unklar ist.

## Mieterhöhung in Mannheim: Was ist erlaubt?

Der Vermieter kann die Miete nur bis zur ortsüblichen Vergleichsmiete erhöhen. In Mannheim ist das im Mannheimer Mietspiegel dokumentiert, den Sie online oder beim Amt für Stadtentwicklung abrufen können.

Dazu kommt die Kappungsgrenze: Innerhalb von drei Jahren darf die Miete maximal um 15 Prozent steigen. Mannheim gilt als Gebiet mit angespanntem Wohnungsmarkt, weshalb diese Grenze gilt.

Eine Mieterhöhung muss schriftlich begründet werden — mit Verweis auf den Mietspiegel oder Vergleichswohnungen. Ohne diese Begründung sind Sie nicht verpflichtet, die höhere Miete zu zahlen.

## Rechtsschutzversicherung oder Mieterverein?

Wenn Sie eine Rechtsschutzversicherung haben, sind viele mietrechtliche Streitigkeiten abgedeckt. Fragen Sie vorher bei Ihrer Versicherung an.

Der Mieterverein Mannheim bietet Mitgliedern Beratung zu einem Jahresbeitrag. Für einfache Fragen ist das eine günstige Option.

Wenn die Sache komplizierter ist — Eigenbedarfskündigung, einbehaltene Kaution, Diskriminierung — empfiehlt sich ein Rechtsanwalt für Mietrecht.`,contentTR:`Kira hukuku, er ya da geç herkesin karşılaştığı hukuk alanıdır — ister kiracı ister ev sahibi olsun. Konut talebinin yüksek olduğu Mannheim'da, fesih, depozito kesintileri ve yan gider hesaplamaları konularında çok sık anlaşmazlık yaşanıyor.

En önemli noktaları teknik jargon olmadan açıklıyorum.

## Ev Sahibinin Feshi: Hangi Kurallar Geçerli?

Ev sahibi, süresiz bir kira sözleşmesini gerekçesiz feshedemez. Her zaman yasal olarak tanınan bir gerekçeye ihtiyacı vardır.

**Kendi ihtiyacı (Eigenbedarf).** En yaygın fesih gerekçesi. Ev sahibi ya da bir yakın aile üyesi daireyi bizzat kullanmak istiyor. Fesih yazılı olmalı ve kimin neden taşınacağını somut biçimde belirtmelidir.

**Ağır yükümlülük ihlali.** İki aylık kirayı aşan süregelen borç, ciddi gürültü şikâyetleri ya da bilinçli zarar verme gibi durumlar.

Bu gerekçeler olmadan fesih, yazılı olsa bile geçersizdir.

### Mannheim'da Fesih Süreleri

Kirada kalma süresine göre:

- 5 yıla kadar: 3 ay
- 5–8 yıl: 6 ay
- 8 yıldan fazla: 9 ay

Fesih, ayın üçüncü iş günü akşamına kadar kiracıya ulaşmalıdır.

### Feshe İtiraz Hakkı

Bazı durumlarda feshe itiraz edebilirsiniz — sağlık sorunları nedeniyle taşınma olanaksız olduğunda, Mannheim'da makul alternatif konut bulamadığınızda ya da çok uzun süredir aynı dairede oturduğunuzda. İtiraz yazılı yapılmalı ve fesih süresinin bitmesinden en geç 2 ay önce ev sahibine iletilmelidir.

## Depozito: Ne Kadar, Ne Zaman Geri Alınır?

Depozito, aylık net kira bedelinin en fazla üç katı olabilir. Ev sahibi bu parayı kendi parasından ayrı tutmakla yükümlüdür.

Çıkıştan sonra ev sahibinin genellikle altı aya kadar depozitoyu hesaplayıp geri ödemesi gerekir. Somut, kanıtlanabilir talepleri varsa — gerçek hasar, açık kira borcu veya ek gider alacakları — bir kısmını mahsup edebilir.

**Normal yıpranmayı** kabul etmek zorundadır. Yıllarca normal yaşamadan kaynaklanan sararmış duvarlar, parkedeki hafif çizikler — bunlar kiracıya yüklenemez.

Altı ay geçip hesaplama gelmediyse, tüm depozito için geri ödeme davası açabilirsiniz.

## Kozmetik Tamirat: Sözleşmede Yazsa Bile Çoğu Hüküm Geçersiz

Bu pek çok kiracıyı şaşırtıyor. Sözleşmede yazıyor diye çıkarken zorunlu tamirat yapacaklarını sanıyorlar. Ancak Alman Federal Mahkemesi (BGH) pek çok kararında bu tür hükümlerin büyük çoğunluğunun geçersiz olduğunu hükme bağlamıştır.

Özellikle geçersiz olanlar:

Sabit tamirat süreleri. Sözleşme "mutfak her 3 yılda bir boyanacak" diyorsa, bu dairenin gerçek durumuna bakılmaksızın bir yükümlülük dayatmaktır — BGH içtihadına göre kural olarak geçersizdir.

Tadilatsız teslim alınan dairelerde çıkış tamiratı zorunluluğu. Tadilatsız bir daireyi devraldıysanız, sözleşme ne derse desin çıkışta tamirat yapmak zorunda değilsiniz.

Sonuç: Sözleşmenizde bu hükümler varsa, para harcamadan önce gerçekten bağlayıcı olup olmadığını bir avukata inceletin.

## Kira Artışı Mannheim'da Ne Kadar Olabilir?

Ev sahibi, kirayı yalnızca piyasa emsal kira bedeline kadar artırabilir. Mannheim'da bu rakam Mannheimer Mietspiegel'de belgelenmiştir.

Ayrıca üç yıllık dönemde kira artışı maksimum yüzde on beşle sınırlıdır. Mannheim, konut piyasasının gerilim altında olduğu bir bölge olarak bu sınıra tabidir.

Kira artışı talebi gerekçeli ve yazılı olmalıdır. Gerekçe yoksa artırılan kira bedelini ödemek zorunda değilsiniz.`,category:"tenant-law",categoryDE:"Mietrecht",image:Sm,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"9 Min. Lesezeit",readTimeTR:"9 dk okuma",publishedAt:"2026-04-19",keywordsDE:"mietrecht mannheim, kündigung mietrecht mannheim, kaution zurückfordern, schönheitsreparaturen unwirksam, mieterhöhung mannheim, eigenbedarfskündigung mannheim",keywordsTR:"mannheim kira hukuku, kiracı hakları almanya, depozito geri alma, fesih hakkı ev sahibi, kira artışı mannheim, tamirat zorunluluğu kira",faqDE:[{question:"Darf mein Vermieter mir kündigen, weil er die Wohnung verkaufen will?",answer:"Nicht direkt. Ein geplanter Verkauf ist kein eigenständiger Kündigungsgrund. Wenn der Käufer jedoch Eigenbedarf anmeldet, kann nach dem Kauf eine Eigenbedarfskündigung ausgesprochen werden — mit den gesetzlichen Fristen."},{question:"Mein Vermieter behält meine Kaution ohne Begründung ein. Was kann ich tun?",answer:"Fordern Sie schriftlich eine detaillierte Abrechnung. Gibt er keine oder eine unzureichende Begründung, können Sie auf Rückzahlung klagen. Die Beweislast für berechtigte Einbehalte liegt beim Vermieter."},{question:"Muss ich die Wohnung streichen, wenn ich ausziehe?",answer:"Nur wenn Ihr Mietvertrag eine wirksame Renovierungsklausel enthält. Viele Klauseln sind nach der BGH-Rechtsprechung unwirksam. Lassen Sie den Vertrag prüfen, bevor Sie investieren."},{question:"Was ist der Mannheimer Mietspiegel?",answer:"Der Mannheimer Mietspiegel ist eine Übersicht der ortsüblichen Vergleichsmieten in Mannheim, unterteilt nach Lage, Baujahr und Ausstattung. Er ist die Grundlage für Mieterhöhungsverlangen und kann beim Amt für Stadtentwicklung oder online abgerufen werden."},{question:"Wie lange habe ich nach dem Auszug Zeit, die Kaution zurückzufordern?",answer:"Die Verjährungsfrist für Kautionsrückforderungen beträgt in der Regel 3 Jahre, beginnend ab Ende des Jahres, in dem der Anspruch entstanden ist. Warten Sie aber nicht so lange — je früher Sie handeln, desto besser."}],faqTR:[{question:"Ev sahibim satmak istediği için beni çıkarabilir mi?",answer:"Doğrudan değil. Satış planı başlı başına bir fesih gerekçesi değildir. Ancak yeni alıcı kendi ihtiyacını ileri sürerse, satışın ardından yasal süreler dahilinde fesih bildirimi yapılabilir."},{question:"Ev sahibim gerekçe belirtmeden depozitoyu kesiyor. Ne yapabilirim?",answer:"Yazılı olarak ayrıntılı hesaplama talep edin. Yeterli gerekçe sunmazsa geri ödeme davası açabilirsiniz. Kesintilerin haklılığını ispat yükü ev sahibine aittir."},{question:"Çıkarken daireyi boyatmak zorunda mıyım?",answer:"Yalnızca sözleşmenizde geçerli bir tamirat hükmü varsa. Birçok hüküm BGH içtihadına göre geçersizdir. Harcama yapmadan önce sözleşmenizi inceletin."},{question:"Mannheimer Mietspiegel nedir?",answer:"Mannheim'daki piyasa emsal kira bedellerini konum, yapım yılı ve donanım kategorisine göre gösteren bir kılavuzdur. Kira artışı taleplerinin dayanağıdır ve çevrimiçi ya da Stadtentwicklung ofisinden temin edilebilir."}],ctaTitleDE:"Mietrechtliche Beratung in Mannheim",ctaTitleTR:"Mannheim'da Kira Hukuku Danışmanlığı",ctaDescriptionDE:"Kündigung bekommen? Kaution einbehalten? Renovierungsklausel im Vertrag? Wir prüfen Ihren Fall und erklären Ihre Rechte.",ctaDescriptionTR:"Fesih mi aldınız? Depozitonuz mu kesiliyor? Sözleşmede tamirat hükmü mü var? Durumunuzu inceler, haklarınızı açıklarız."},{slug:"kind-tuerkei-mitnehmen-sorgerecht",slugDE:"kind-tuerkei-mitnehmen-sorgerecht",slugTR:"cocukla-turkiyeye-gitmek-velayet",slugEN:"travel-to-turkey-with-child-custody",titleDE:"Kann mein Kind alleine in die Türkei fliegen? Was Eltern mit Sorgerecht wissen müssen",titleTR:"Çocuğum Türkiye'ye Yalnız Uçabilir mi? Velayeti Olan Ebeveynlerin Bilmesi Gerekenler",excerptDE:"Kind in die Türkei mitnehmen mit Sorgerecht: Welche Dokumente braucht ein Kind, wann darf ein Elternteil allein reisen, und was passiert bei fehlenden Papieren am Flughafen?",excerptTR:"Velayetle çocuğu Türkiye'ye götürmek: Çocuğun hangi belgelere ihtiyacı var, hangi ebeveyn tek başına seyahat edebilir ve havalimanında eksik evrak olursa ne olur?",contentDE:`Istanbul, Flughafen Antalya, Sommer. Eine Mutter steht am Schalter mit ihrem siebenjährigen Sohn. Der Vater lebt in Deutschland, gemeinsames Sorgerecht. Sie hat kein schriftliches Einverständnis dabei. Der Beamte schlägt die Akte auf und erklärt ihr, dass das Kind so nicht einreisen kann.

Das ist kein Einzelfall. Es passiert jedes Jahr mehrfach — und meistens hätte man es mit einem Blatt Papier verhindern können.

## Was türkische Behörden bei Kindern verlangen

Die Türkei hat seit einigen Jahren strengere Kontrollen bei der Einreise von Kindern eingeführt, besonders wenn nur ein Elternteil dabei ist. Was konkret verlangt wird, variiert je nach Grenzbeamten und Flughafen — aber das sind die Unterlagen, die Sie vorbereiten sollten:

Wenn nur ein Elternteil reist: eine notariell beglaubigte Einverständniserklärung des anderen Elternteils, übersetzt ins Türkische. Der Reisepass des Kindes. Im besten Fall auch eine Kopie des Sorgerechtsurteils oder der Sorgerechtsurkunde.

Wenn das Kind alleine reist (zum Beispiel zu den Großeltern): Dann gelten noch strengere Regeln. Die Fluggesellschaft hat eigene Anforderungen (sogenanntes "Unaccompanied Minor"-Protokoll), und am türkischen Flughafen erwartet Sie in der Regel eine Person, die vorab offiziell angemeldet wurde.

## Reist das Kind mit beiden Elternteilen — kein Problem

Wenn Vater und Mutter gemeinsam reisen, gibt es in der Regel keine Schwierigkeiten. Türkische Grenzbehörden prüfen die Familienzugehörigkeit in solchen Fällen selten.

## Was "gemeinsames Sorgerecht" bei einer Türkeireise bedeutet

Das ist der Punkt, der viele Eltern überrascht. Wenn in Deutschland gemeinsames Sorgerecht gilt, bedeutet das: Beide Elternteile müssen einer Auslandsreise des Kindes grundsätzlich zustimmen. Das steht nicht explizit im Gesetz — aber es folgt daraus, dass eine längere Auslandsreise eine "wesentliche Angelegenheit" des Kindes ist.

Für kurze Urlaubsreisen (ein paar Wochen) wird das in Deutschland in der Praxis nicht so streng gehandhabt. Aber türkische Behörden schauen auf türkisches Recht — und die sind strenger.

**Was Sie konkret tun sollten:** Holen Sie vor jeder Reise in die Türkei die schriftliche Zustimmung des anderen Elternteils. Lassen Sie diese beim Notar beglaubigen und ins Türkische übersetzen. Das klingt aufwendig, ist aber ein Nachmittag Arbeit — und erspart Ihnen eine Situation wie die am Antalya-Flughafen.

## Was wenn der andere Elternteil die Zustimmung verweigert?

Das ist leider kein seltenes Szenario. Der andere Elternteil verweigert die Unterschrift, obwohl die Reise völlig harmlos ist — Sommerferien bei den Großeltern, Familientreffen.

In diesem Fall können Sie beim Familiengericht eine einstweilige Verfügung beantragen, mit der das Gericht die fehlende Zustimmung ersetzt. Das geht schneller als viele denken — in dringenden Fällen auch ohne langen Prozess.

## Was, wenn ein Elternteil das Kind ohne Zustimmung in die Türkei bringt?

Dann wird die Situation juristisch ernst.

Wenn ein Elternteil das Kind ohne Wissen oder Zustimmung des anderen in die Türkei bringt und es dort behält, ist das nach deutschem und türkischem Recht eine internationale Kindesentführung — auch wenn es sich um den leiblichen Vater oder die leibliche Mutter handelt.

Das Haager Kindesentführungsübereinkommen (HKÜ) regelt die Rückführung zwischen Deutschland und der Türkei. Beide Länder haben es unterzeichnet. Die Praxis ist aber nicht einfach: Türkische Gerichte müssen der Rückführung zustimmen, und das kann dauern.

Wenn Sie in dieser Situation sind: Handeln Sie sofort. Jede Woche, die vergeht, macht die Rückführung schwieriger — weil Gerichte nach längerer Zeit stärker das "Wohlbefinden des Kindes in der aktuellen Umgebung" gewichten.

## Kann ein Kind alleine in die Türkei fliegen?

Ja — aber mit klaren Rahmenbedingungen.

Fluggesellschaften haben eigene "Unaccompanied Minor"-Protokolle (UM-Protokoll). Bei den meisten Airlines können Kinder ab 5 oder 6 Jahren alleine fliegen, wenn sie als begleitetes Einzelkind angemeldet werden. Das kostet meistens eine zusätzliche Gebühr, und das Kind wird vom Personal betreut.

Am türkischen Zielflughafen muss jemand das Kind abholen — und diese Person muss vorab namentlich bekannt sein. Türkische Behörden prüfen das in der Regel streng.

Beide Elternteile müssen bei gemeinsamem Sorgerecht zustimmen, dass das Kind alleine fliegt. Das ist keine formale Frage — es ist eine echte Anforderung.

## Was wenn das Kind nur die türkische Staatsangehörigkeit hat?

Türkische Staatsangehörige können mit türkischem Pass in die Türkei einreisen. Aber auch hier gelten die Regeln: Ein Kind alleine oder mit nur einem Elternteil braucht — je nach Konstellation — die Nachweise über Sorgerecht und Einverständnis des anderen Elternteils.`,contentTR:`İstanbul, Antalya Havalimanı, yaz. Bir anne yedi yaşındaki oğluyla gişede bekliyor. Baba Almanya'da, müşterek velayet var. Annenin yanında yazılı bir izin yok. Görevli dosyasına bakıyor ve çocuğun bu şekilde giriş yapamayacağını söylüyor.

Bu münferit bir vaka değil. Her yıl birkaç kez yaşanıyor — ve çoğu zaman tek bir sayfa kağıt yeterli olurdu.

## Türk Makamları Çocuklardan Ne İstiyor?

Türkiye, özellikle yalnızca bir ebeveynin refakat ettiği durumlarda çocukların girişinde son yıllarda denetimleri sıkılaştırdı. Tam olarak ne istendiği sınır görevlisine ve havalimanına göre değişebilir — ancak şu belgeleri hazır bulundurmalısınız:

Yalnızca bir ebeveyn seyahat ediyorsa: Diğer ebeveynin noter onaylı, Türkçe tercüme edilmiş muvafakatname belgesi. Çocuğun pasaportu. Mümkünse velayet kararının bir kopyası.

Çocuk tek başına seyahat ediyorsa: Kurallar daha da sıkıdır. Havayolunun kendi "Refakatsiz Küçük" protokolü (Unaccompanied Minor) geçerlidir; Türk havalimanında önceden resmi olarak bildirilen bir kişi çocuğu karşılamak zorundadır.

## Müşterek Velayet Türkiye Seyahatinde Ne Anlama Gelir?

Bu, pek çok ebeveyni şaşırtan noktadır. Almanya'da müşterek velayet geçerliyse her iki ebeveynin çocuğun yurt dışı seyahatine onay vermesi gerekir. Türk makamları Türk hukukuna göre değerlendirir — ve bu konuda daha katıdır.

**Pratik tavsiye:** Her Türkiye seyahatinden önce diğer ebeveynin yazılı onayını alın. Noterde onaylayıp Türkçeye çevirin. Kulağa zahmetli geliyor ama bir öğleden sonralık iş — ve Antalya Havalimanı'ndaki durumu yaşamamanızı sağlar.

## Diğer Ebeveyn Onay Vermiyorsa Ne Olur?

Ne yazık ki nadir değil. Aile mahkemesinden ihtiyati tedbir talep edebilirsiniz; mahkeme eksik onayın yerine geçen kararı verebilir. Acil durumlarda uzun bir dava beklemek gerekmez.

## Bir Ebeveyn Çocuğu İzinsiz Türkiye'ye Götürürse Ne Olur?

Hukuki açıdan ciddi bir duruma girilir. Diğer ebeveynin haberi veya onayı olmadan çocuğun Türkiye'ye götürülmesi ve orada tutulması — biyolojik ebeveyn olsa bile — Alman ve Türk hukukuna göre uluslararası çocuk kaçırma sayılır.

Lahey Sözleşmesi Almanya ve Türkiye arasında iade sürecini düzenler. Her iki ülke de sözleşmeyi imzalamıştır. Ancak pratikte: Türk mahkemelerinin iade onaylaması zaman alabilir ve ne kadar uzun beklenir se o kadar zorlaşır.

## Çocuk Tek Başına Türkiye'ye Uçabilir mi?

Evet — ancak net çerçeveler dahilinde.

Havayollarının kendi "Refakatsiz Küçük" protokolleri vardır. Çoğu havayolunda 5 veya 6 yaşından itibaren çocuklar kayıtlı refakatsiz yolcu olarak uçabilir; personel gözetim altında tutar.

Türk varış havalimanında birinin çocuğu karşılaması şarttır — ve bu kişinin önceden bildirilmesi gerekir.

Müşterek velayette her iki ebeveyn de çocuğun tek başına uçmasına onay vermelidir.`,category:"family-law",categoryDE:"Familienrecht",image:xu,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-19",keywordsDE:"kind türkei mitnehmen, sorgerecht türkei reise, kind alleine türkei fliegen, einverständniserklärung türkei kind, kindesentführung türkei sorgerecht",keywordsTR:"cocuk turkiyeye gotürmek velayet, turkiye seyahat velayet izin, refakatsiz küçük uçuş, çocuk kaçırma türkiye almanya",faqDE:[{question:"Was brauche ich, wenn ich mit meinem Kind alleine in die Türkei fliege?",answer:"Eine notariell beglaubigte Einverständniserklärung des anderen Elternteils, übersetzt ins Türkische, dazu der Reisepass des Kindes. Im besten Fall auch eine Kopie des Sorgerechtsurteils. Was genau am Flughafen verlangt wird, variiert — aber mit diesen Dokumenten sind Sie auf der sicheren Seite."},{question:"Mein Ex verweigert die Zustimmung zur Türkeireise. Was kann ich tun?",answer:"Sie können beim Familiengericht beantragen, dass das Gericht die fehlende Zustimmung ersetzt. Das geht in dringenden Fällen auch mit einer einstweiligen Verfügung, ohne langes Verfahren."},{question:"Was gilt, wenn das Kind nur die türkische Staatsangehörigkeit hat?",answer:"Das Kind kann mit türkischem Pass einreisen. Die Regeln zu Sorgerecht und Einverständnis des anderen Elternteils gelten trotzdem — Staatsangehörigkeit ändert nichts an den Anforderungen der Grenzbehörden."},{question:"Meine Ex-Frau hat das Kind in die Türkei mitgenommen und kommt nicht zurück. Was tue ich?",answer:"Handeln Sie sofort. Kontaktieren Sie einen Anwalt und stellen Sie über das Bundesamt für Justiz einen Rückführungsantrag nach dem Haager Kindesentführungsübereinkommen. Je schneller, desto besser — türkische Gerichte gewichten nach längerer Zeit die aktuelle Lebenssituation des Kindes stärker."}],faqTR:[{question:"Çocuğumla tek başıma Türkiye'ye uçarken ne gerekiyor?",answer:"Diğer ebeveynin noter onaylı, Türkçe çevrilmiş muvafakatnamesi ve çocuğun pasaportu. Mümkünse velayet kararının kopyası. Tam olarak ne istendiği havalimanına göre değişebilir ancak bu belgelerle güvende olursunuz."},{question:"Eski eşim Türkiye seyahatine onay vermiyor. Ne yapabilirim?",answer:"Aile mahkemesinden eksik onayın yerine geçen karar talep edebilirsiniz. Acil durumlarda uzun dava beklemeksizin ihtiyati tedbir mümkündür."},{question:"Eski eşim çocuğu Türkiye'ye götürdü ve geri dönmüyor. Ne yapmalıyım?",answer:"Derhal harekete geçin. Bir avukata danışın ve Federal Adalet Dairesi aracılığıyla Lahey Sözleşmesi kapsamında iade talebi başlatın. Ne kadar hızlı olursanız o kadar iyi — Türk mahkemeleri zaman geçtikçe çocuğun mevcut yaşam ortamına daha fazla ağırlık verir."}],ctaTitleDE:"Fragen zur Türkeireise mit Kind",ctaTitleTR:"Çocukla Türkiye Seyahati Hakkında Sorularınız mı Var?",ctaDescriptionDE:"Einverständniserklärung, Sorgerecht, Rückführungsantrag — wir kennen beide Rechtssysteme und helfen auf Deutsch und Türkisch.",ctaDescriptionTR:"Muvafakatname, velayet, iade talebi — her iki hukuk sistemini bilen ekibimiz Almanca ve Türkçe yardımcı olmaktadır."},{slug:"was-kostet-anwalt-tuerkisches-recht",slugDE:"was-kostet-anwalt-tuerkisches-recht",slugTR:"turk-hukuku-avukat-ucretleri",slugEN:"cost-of-turkish-law-lawyer",titleDE:"Was kostet ein Anwalt für türkisches Recht? Die ehrliche Antwort",titleTR:"Türk Hukuku için Avukat Ücreti Ne Kadar? Dürüst Yanıt",excerptDE:"Was kostet ein Anwalt für türkisches Recht wirklich? Stundensatz, Pauschalgebühren, Prozesskostenhilfe — niemand veröffentlicht das. Wir tun es.",excerptTR:"Türk hukuku için avukat gerçekten ne kadar tutar? Saatlik ücret, sabit ücretler, dava yardımı — kimse bunu yayımlamıyor. Biz yapıyoruz.",contentDE:`Die meisten Menschen googeln das privat und finden: nichts Konkretes. Anwaltskanzleien veröffentlichen keine Preislisten. Ratgeberseiten weichen aus. Also fragt man nicht — und geht vielleicht gar nicht erst zum Anwalt, weil man nicht weiß, ob man es sich leisten kann.

Das ist schade. Denn die Antwort ist nicht so komplex, wie viele denken.

## Wie Anwaltsgebühren in Deutschland funktionieren

Anwälte in Deutschland berechnen ihre Gebühren entweder nach dem Rechtsanwaltsvergütungsgesetz (RVG) oder nach Zeitaufwand oder einer Vereinbarung über Pauschalgebühren.

Das RVG gibt es seit Jahrzehnten. Es legt fest, wie viel ein Anwalt für bestimmte Tätigkeiten berechnen darf — abhängig vom Streit- oder Gegenstandswert. Bei einer Scheidung mit einem Gegenstandswert von 20.000 Euro ergibt sich daraus ein bestimmter Betrag. Bei einer Erbschaftsangelegenheit mit einem Nachlass von 80.000 Euro ein anderer.

Der Vorteil des RVG: Gebühren sind vorhersehbar. Der Nachteil: Bei kleinen Streitwerten kann das RVG für den Anwalt zu wenig ergeben — weshalb viele lieber Stundensätze vereinbaren.

## Was kostet eine Erstberatung zu türkischem Recht?

Die Erstberatungsgebühr ist gesetzlich auf maximal 190 Euro zuzüglich Mehrwertsteuer begrenzt. Das gilt unabhängig davon, ob es um deutsches oder türkisches Recht geht.

In der Praxis verlangen viele Anwälte weniger — 80 bis 150 Euro für ein einstündiges Gespräch ist ein realistischer Bereich. Manche bieten eine kostenlose Kurzberatung von 15 bis 20 Minuten an.

Mit Beratungshilfe (wenn Ihr Einkommen unter einer bestimmten Grenze liegt) zahlen Sie nur 15 Euro — für Erstberatungen zu türkischem Recht wie zu jedem anderen Rechtsgebiet.

## Was kosten konkrete Leistungen? Eine ehrliche Übersicht

**Vollmacht auf Türkisch formulieren lassen:** Für einen Anwalt, der den türkischen Text der Vekâletname nach türkischem Recht verfasst, liegen die Kosten typischerweise zwischen 100 und 300 Euro — je nach Umfang und Komplexität.

**Tanıma-Tenfiz-Verfahren begleiten (Anerkennung eines deutschen Urteils in der Türkei):** Das ist ein mehrstufiger Prozess — Antrag beim türkischen Gericht, Koordination mit türkischen Kollegen, Übersetzungen. Realistisch: 500 bis 1.500 Euro für die anwaltliche Begleitung in Deutschland, dazu kommen türkische Anwalts- und Gerichtskosten.

**Erbschaftsangelegenheit in der Türkei (Veraset ilamı, Grundbuchübertragung):** Kommt stark auf die Größe des Nachlasses und die Anzahl der Erben an. Für eine einfache Erbschaftsabwicklung ohne Streit: 400 bis 800 Euro für die anwaltliche Beratung in Deutschland. Hinzu kommen die türkischen Notarkosten und Grundbuchgebühren.

**Scheidungsverfahren mit türkischem Bezug:** Eine Scheidung in Deutschland mit anschließendem Tanıma-Tenfiz-Verfahren in der Türkei kostet mehr als eine rein deutsche Scheidung. RVG-Gebühren für die deutsche Scheidung: 1.500 bis 3.000 Euro (je nach Streitwert). Das türkische Verfahren kommt separat dazu.

**Sorgerechtsstreit mit Türkeibezug:** Das ist einer der teuersten Bereiche — weil er oft eskaliert, Gutachten erfordert und sich über lange Zeit zieht. Reine Anwaltskosten in Deutschland können schnell 3.000 bis 8.000 Euro erreichen, bei streitigen Verfahren auch mehr.

## Wann zahlt die Rechtsschutzversicherung?

Wenn Sie eine Rechtsschutzversicherung haben, deckt sie in der Regel Familienrechts- und Mietrechtssachen — aber nicht immer. Prüfen Sie Ihren Vertrag: Manche Policen schließen Scheidungsverfahren explizit aus. Und internationale Sachverhalte (türkisches Recht) sind manchmal ausgenommen oder erfordern eine separate Deckungsanfrage.

Rufen Sie vor dem Anwalttermin bei Ihrer Versicherung an und lassen Sie sich die Deckung schriftlich bestätigen.

## Wann gibt es Prozesskostenhilfe?

Wenn Ihr Einkommen und Vermögen unterhalb bestimmter Grenzen liegt, können Sie beim Gericht Prozesskostenhilfe beantragen. Das Gericht übernimmt dann die Gerichts- und Anwaltskosten ganz oder teilweise. Die Prozesskostenhilfe gilt auch für Verfahren mit Bezug zu türkischem Recht — solange das Verfahren in Deutschland stattfindet.

## Die ehrlichste Antwort

Was ein Anwalt für türkisches Recht kostet, hängt davon ab, was Sie brauchen. Für eine einfache Beratung oder die Formulierung einer Vollmacht zahlen Sie wenig — 100 bis 300 Euro. Für ein langes Gerichtsverfahren mit türkischem Bezug können es mehrere tausend Euro werden.

Was keine Kanzlei vorab sagen kann: wie komplex Ihr Fall wird. Manche Erbschaftssachen sind in zwei Beratungsgesprächen erledigt. Andere enden im Streit zwischen mehreren Erben und dauern Jahre.

Am besten: Vereinbaren Sie eine Erstberatung, schildern Sie Ihren Fall und fragen Sie direkt nach den zu erwartenden Kosten. Ein seriöser Anwalt gibt Ihnen eine ehrliche Einschätzung.`,contentTR:`Çoğu insan bunu özel olarak araştırır ve şunu bulur: somut hiçbir şey. Hukuk büroları fiyat listesi yayımlamaz. Rehber siteler yanıt vermekten kaçınır. Sonunda sormaktan vazgeçilir — ve belki hiç avukata gidilmez, çünkü karşılanıp karşılanamayacağı bilinmez.

Bu üzücü. Çünkü yanıt, çoğunun düşündüğü kadar karmaşık değil.

## Almanya'da Avukat Ücretleri Nasıl Hesaplanır?

Almanya'daki avukatlar ücretlerini ya Avukatlık Ücret Kanunu'na (RVG) ya saatlik hesaba ya da sabit ücret anlaşmasına göre belirler.

RVG on yıllardır geçerlidir. Belirli işlemler için avukatın talep edebileceği tutarı — dava değerine bağlı olarak — belirler. 20.000 Euro değerindeki bir boşanma davası belirli bir ücret doğurur. 80.000 Euro'luk bir miras için farklı bir ücret.

## Türk Hukukuyla İlgili İlk Danışma Ne Kadar Tutar?

İlk danışma ücreti yasal olarak maksimum 190 Euro + KDV ile sınırlıdır. Bu, Türk ya da Alman hukuku fark etmeksizin geçerlidir.

Pratikte birçok avukat daha az alır — saatlik bir görüşme için 80 ile 150 Euro arası gerçekçi bir aralıktır. Beratungshilfe belgeniz varsa yalnızca 15 Euro ödersiniz.

## Somut Hizmetler Ne Kadar Tutar? Dürüst Bir Genel Bakış

**Türkçe vekaletname metni hazırlatmak:** Türk hukukuna göre Vekâletname metni hazırlayan bir avukat için genellikle 100 ile 300 Euro arasında ücret ödenir — kapsamına ve karmaşıklığına bağlı olarak.

**Tanıma-Tenfiz sürecini yönetmek:** Çok aşamalı bir süreçtir. Almanya'daki avukatlık danışmanlığı için gerçekçi beklenti: 500 ile 1.500 Euro. Türkiye'deki avukat ve mahkeme masrafları ayrıca eklenir.

**Türkiye'deki miras işlemleri:** Mirasın büyüklüğüne ve mirasçı sayısına göre önemli ölçüde değişir. Çekişmesiz basit bir miras için Almanya'daki danışmanlık: 400 ile 800 Euro. Türk noter ve tapu ücretleri ayrıca hesaba katılmalıdır.

**Türkiye bağlantılı boşanma:** RVG'ye göre Almanya'daki boşanma: 1.500 ile 3.000 Euro (dava değerine bağlı). Türkiye'deki Tanıma-Tenfiz davası ayrıca eklenir.

**Türkiye bağlantılı velayet uyuşmazlığı:** En pahalı alanlardan biridir. Türkiye bağlantılı çekişmeli davalarda Almanya'daki avukatlık masrafları hızla 3.000 ile 8.000 Euro'ya, hatta üzerine çıkabilir.

## Dürüst Yanıt

Türk hukuku için avukat ücreti neye ihtiyacınız olduğuna bağlıdır. Basit bir danışma veya vekaletname için az ödersiniz — 100 ile 300 Euro. Türkiye bağlantılı uzun bir dava süreci birkaç bin Euro'ya ulaşabilir.

En iyi yol: İlk görüşmeyi ayarlayın, durumunuzu anlatın ve beklenen masrafları doğrudan sorun. Ciddi bir avukat dürüst bir değerlendirme yapar.`,category:"legal-info",categoryDE:"Rechtsinformationen",image:Dm,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-19",keywordsDE:"türkischer anwalt kosten, was kostet anwalt türkisches recht, anwaltskosten türkisches recht, erstberatung türkisches recht kosten, türkisches recht anwalt preis",keywordsTR:"türk hukuku avukat ücreti, avukat masrafları türk hukuku, ilk danışma ücreti türk avukat, vekâletname avukat ücret",faqDE:[{question:"Was kostet eine Erstberatung zu türkischem Recht?",answer:"Maximal 190 Euro plus Mehrwertsteuer — das ist der gesetzliche Höchstsatz nach dem RVG. Viele Anwälte verlangen weniger. Mit Beratungshilfeschein zahlen Sie nur 15 Euro."},{question:"Übernimmt die Rechtsschutzversicherung Kosten für türkisches Recht?",answer:"Das hängt von Ihrer Police ab. Manche decken internationale Sachverhalte, andere nicht. Rufen Sie vor dem Anwalttermin bei Ihrer Versicherung an und lassen Sie sich die Deckung schriftlich bestätigen."},{question:"Gibt es Prozesskostenhilfe für Verfahren mit türkischem Recht?",answer:"Ja, wenn das Verfahren in Deutschland stattfindet und Ihr Einkommen und Vermögen unter den gesetzlichen Grenzen liegt. Das gilt für alle Rechtsgebiete, auch wenn türkisches Recht eine Rolle spielt."},{question:"Warum veröffentlichen Anwälte keine Preislisten?",answer:"Weil die Kosten stark vom Einzelfall abhängen. Ein Anwalt kann vorab sagen, was eine Erstberatung kostet — aber nicht, wie komplex Ihr Fall wird. Fragen Sie direkt und lassen Sie sich eine ehrliche Einschätzung geben."}],faqTR:[{question:"Türk hukukuyla ilgili ilk danışma ne kadar tutar?",answer:"RVG'ye göre yasal tavan 190 Euro + KDV'dir. Birçok avukat daha az alır. Beratungshilfe belgesiyle yalnızca 15 Euro ödersiniz."},{question:"Hukuki koruma sigortası Türk hukuku masraflarını karşılar mı?",answer:"Poliçenize bağlıdır. Bazıları uluslararası durumları kapsar, bazıları kapsamaz. Avukat randevusundan önce sigortanızı arayın ve kapsamı yazılı olarak teyit ettirin."},{question:"Avukatlar neden fiyat listesi yayımlamıyor?",answer:"Çünkü masraflar büyük ölçüde davaya özgüdür. Bir avukat ilk danışma ücretini önceden söyleyebilir — ancak davanızın ne kadar karmaşık olacağını bilemez. Doğrudan sorun ve dürüst bir değerlendirme isteyin."}],ctaTitleDE:"Was kostet Ihr Fall? Fragen Sie uns.",ctaTitleTR:"Davanız Ne Kadar Tutar? Bize Sorun.",ctaDescriptionDE:"Wir sagen Ihnen beim ersten Gespräch ehrlich, was Sie für Ihren konkreten Fall erwarten können — ohne Überraschungen.",ctaDescriptionTR:"İlk görüşmede somut davanız için dürüstçe ne beklemeniz gerektiğini söylüyoruz — sürpriz yok."},{slug:"tuerkisches-testament-deutschland",slugDE:"tuerkisches-testament-deutschland",slugTR:"turk-vasiyetnamesi-almanya",slugEN:"turkish-will-in-germany",titleDE:"Mein Vater hat ein türkisches Testament gemacht. Gilt das auch in Deutschland?",titleTR:"Babam Türkçe Vasiyetname Yazdı. Bu Almanya'da da Geçerli mi?",excerptDE:"Türkisches Testament in Deutschland: Wann ist es gültig, wann nicht, und was müssen Erben in Deutschland sofort tun, wenn sie ein handgeschriebenes türkisches Dokument finden?",excerptTR:"Türk vasiyetnamesi Almanya'da: Ne zaman geçerli, ne zaman değil ve Almanya'daki mirasçılar el yazılı bir Türk belgesi bulduğunda hemen ne yapmalı?",contentDE:`Sie rufen in der Kanzlei an. Ihr Vater ist gestorben — in der Türkei oder in Deutschland, das variiert. Beim Durchsehen seiner Sachen finden Sie ein handgeschriebenes Dokument auf Türkisch. "Mein letzter Wille", steht oben. Darunter Namen, Immobilien, Konten, eine Unterschrift.

Ist das ein gültiges Testament? Gilt es in Deutschland? Was müssen Sie jetzt tun?

Das sind echte Fragen — und sie kommen häufig.

## Testamentsformen in der Türkei

Das türkische Recht kennt drei Testamentsformen:

Das notarielle Testament wird vor einem türkischen Notar in Anwesenheit von zwei Zeugen errichtet. Es ist die sicherste Form — weil der Notar die Identität des Erblassers prüft, den Text verliest und alles dokumentiert.

Das eigenhändige Testament — der türkische Begriff ist el yazılı vasiyetname — muss vollständig handgeschrieben, datiert und eigenhändig unterschrieben sein. Kein gedruckter Text, kein Computer. Ist auch nur ein Teil maschinell geschrieben, ist das gesamte Testament ungültig.

Das mündliche Testament gilt nur in echten Ausnahmesituationen: unmittelbare Todesgefahr, kein Notar erreichbar. Es erlischt automatisch, sobald die Gefahrensituation endet.

## Wann gilt ein türkisches Testament in Deutschland?

Das hängt davon ab, welches Erbrecht anwendbar ist — und das ist die erste Frage, die ein Anwalt stellt.

Seit 2015 gilt in Europa die EU-Erbrechtsverordnung Nr. 650/2012. Grundregel: Das Recht des Landes gilt, in dem der Erblasser zuletzt seinen gewöhnlichen Aufenthalt hatte.

Hat Ihr Vater zuletzt in Deutschland gelebt: deutsches Erbrecht gilt — sowohl für Vermögen in Deutschland als auch für Vermögen in der Türkei (mit Einschränkungen).

Hat er zuletzt in der Türkei gelebt: türkisches Erbrecht gilt.

Hat er ein eigenhändiges Testament nach türkischem Recht errichtet, das den Formanforderungen entspricht — vollständig handgeschrieben, datiert, unterschrieben — ist es grundsätzlich gültig. Ob ein deutsches Gericht oder Nachlassgericht es anerkennt, hängt dann davon ab, ob die Formalien stimmen.

## Was "gilt" konkret bedeutet

Selbst wenn das türkische Testament formal gültig ist, bedeutet das nicht, dass Sie in Deutschland damit direkt handeln können. Sie brauchen in der Regel:

Für Erbschaftsangelegenheiten in Deutschland einen deutschen Erbschein oder ein europäisches Nachlasszeugnis. Das türkische Testament alleine reicht dem deutschen Nachlassgericht meistens nicht.

Für Erbschaftsangelegenheiten in der Türkei einen türkischen Erbschein (Veraset ilamı). Das ist ein türkisches Gerichtsverfahren — und dafür brauchen Sie entweder selbst in der Türkei aktiv zu werden oder dort einen Anwalt zu bevollmächtigen.

## Was wenn das Testament Geschwister oder andere Erben benachteiligt?

Das ist ein heikler Punkt — und in türkisch-deutschen Familien häufig.

Im türkischen Erbrecht gibt es wie im deutschen einen gesetzlichen Pflichtteil (türkisch: saklı pay). Kinder haben Anspruch auf die Hälfte ihres gesetzlichen Erbteils, auch wenn das Testament ihnen weniger oder nichts zuweist.

Wenn ein türkisches Testament den Pflichtteil unterschreitet, können die übergangenen Erben eine Pflichtteilsergänzungsklage (tenkis davası) vor einem türkischen Gericht erheben. Diese Klage muss innerhalb bestimmter Fristen eingereicht werden — verstreicht die Frist, verfällt der Anspruch.

## Was tun Sie jetzt mit dem handgeschriebenen Dokument?

Lassen Sie es nicht liegen. Auch wenn Sie im Moment nicht wissen, was es bedeutet.

Erstens: Fotografieren Sie das Dokument und sichern Sie das Original.

Zweitens: Prüfen Sie, ob die Formerfordernisse erfüllt sind — vollständig handgeschrieben? Datiert? Unterschrieben? Wenn auch nur ein Teil gedruckt ist, ist das türkische Testament nach türkischem Recht ungültig.

Drittens: Sprechen Sie mit einem Anwalt, der türkisches Erbrecht kennt. Nicht weil Sie unbedingt streiten wollen — sondern weil Fristen laufen. Im türkischen Erbrecht gibt es Fristen für die Ausschlagung der Erbschaft, Fristen für die Anfechtung von Verfügungen und Fristen für Pflichtteilsklagen. Wer zu lange wartet, verliert Ansprüche, die er rechtlich hätte.

## Ein häufiges Missverständnis

Viele glauben: "Ein türkisches Testament regelt nur das Vermögen in der Türkei." Das stimmt nicht. Ein gültiges Testament kann grundsätzlich den gesamten Nachlass regeln — in der Türkei und in Deutschland — sofern das Erbrecht des richtigen Landes angewendet wird.

Das macht Nachlässe mit Bezug zu beiden Ländern komplex. Aber es bedeutet auch: Ein gut gemachtes Testament kann viel Streit verhindern.`,contentTR:`Büroyu arıyorsunuz. Babanız vefat etti — Türkiye'de mi Almanya'da mı, bu değişiyor. Eşyalarını incelerken Türkçe el yazılı bir belge buluyorsunuz. Üstte "Son irade ve vasiyetim" yazıyor. Altında isimler, taşınmazlar, hesaplar, bir imza.

Bu geçerli bir vasiyetname mi? Almanya'da geçerli mi? Şimdi ne yapmanız gerekiyor?

Bunlar gerçek sorular — ve sık soruluyorlar.

## Türkiye'de Vasiyetname Biçimleri

Türk hukuku üç vasiyetname biçimini tanır:

Resmi vasiyetname, Türk noterin huzurunda iki tanık eşliğinde düzenlenir. En güvenli biçimdir — noter kimliği doğrular, metni okur, her şeyi belgeler.

El yazılı vasiyetname — Türkçesi el yazılı vasiyetname — başından sonuna kadar tamamen el yazısıyla yazılmış, tarihli ve bizzat imzalı olmak zorundadır. Hiçbir basılı metin, hiçbir bilgisayar kabul edilmez. Tek bir bölüm bile makineyle yazılmışsa vasiyetin tamamı geçersizdir.

Sözlü vasiyetname yalnızca gerçek istisnai durumlarda geçerlidir: ölüm tehlikesi, noter ulaşılamıyor. Tehlike ortadan kalktığında otomatik olarak hükmünü yitirir.

## Türk Vasiyetnamesi Almanya'da Ne Zaman Geçerlidir?

Bu, hangi miras hukukunun uygulanacağına bağlıdır — bir avukatın sorduğu ilk soru budur.

2015'ten itibaren Avrupa'da AB Miras Tüzüğü No. 650/2012 geçerlidir. Temel kural: Miras bırakanın en son ikamet ettiği ülkenin hukuku uygulanır.

Babanız en son Almanya'da yaşıyorsa: Alman hukuku geçerlidir — hem Almanya'daki hem de Türkiye'deki mal varlığı için (bazı kısıtlamalarla).

Babanız en son Türkiye'de yaşıyorsa: Türk hukuku geçerlidir.

Türk hukukuna göre el yazılı vasiyetnamenin biçimsel gerekliliklerini karşılıyorsa — tamamen el yazısıyla yazılmış, tarihli, imzalı — prensipte geçerlidir.

## "Geçerli" Somut Olarak Ne Anlama Gelir?

Türk vasiyetnamesi biçimsel açıdan geçerli olsa bile Almanya'da bununla doğrudan işlem yapamazsınız. Genellikle şunlara ihtiyacınız olur:

Almanya'daki miras işlemleri için Alman miras belgesi (Erbschein) veya Avrupa Miras Sertifikası. Türk vasiyetnamesi tek başına Alman veraset mahkemesine genellikle yetmez.

Türkiye'deki miras işlemleri için Türk veraset ilamı. Bu bir Türk mahkeme sürecidir — ya bizzat Türkiye'de bulunmanız ya da orada bir avukatı yetkilendirmeniz gerekir.

## Vasiyetname Diğer Mirasçıları Mağdur Ediyorsa Ne Olur?

Bu hassas bir noktadır — ve Türk-Alman ailelerde sıkça karşılaşılır.

Türk miras hukukunda da Alman hukukunda olduğu gibi yasal saklı pay (saklı pay) vardır. Çocukların yasal miras payının yarısına hakkı vardır; vasiyetname onlara daha azını ya da hiçbir şey bırakmasa bile.

Türk vasiyetnamesi saklı payı ihlal ediyorsa, atlanan mirasçılar Türk mahkemesinde tenkis davası açabilir. Bu dava belirli süreler içinde açılmalıdır — süre geçerse hak düşer.

## El Yazılı Belgeyle Şimdi Ne Yapmalısınız?

Bırakmayın. Şu an ne anlama geldiğini bilmeseniz bile.

Birincisi: Belgeyi fotoğraflayın ve aslını saklayın.

İkincisi: Biçimsel gerekliliklerin karşılanıp karşılanmadığını kontrol edin — tamamen el yazısıyla mı? Tarihli mi? İmzalı mı? Tek bir bölüm bile yazıcıdan çıkmışsa Türk hukukuna göre geçersizdir.

Üçüncüsü: Türk miras hukukunu bilen bir avukatla görüşün. Mutlaka anlaşmazlık çıkacak diye değil — çünkü süreler işliyor. Mirası reddetmek için süreler var. Tasarruflara itiraz etmek için süreler var. Tenkis davası açmak için süreler var. Çok bekleyenler hukuken sahip oldukları hakları kaybeder.`,category:"inheritance-law",categoryDE:"Erbrecht",image:Bu,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-19",keywordsDE:"türkisches testament deutschland, türkisches erbrecht deutschland, testament türkei gültig, el yazılı vasiyetname almanya, türkisches testament anerkennen",keywordsTR:"türk vasiyetnamesi almanya, el yazılı vasiyetname geçerli mi, türkiye almanya miras, tenkis davası almanya, türk miras hukuku",faqDE:[{question:"Gilt ein handgeschriebenes türkisches Testament automatisch in Deutschland?",answer:"Nicht automatisch. Es hängt davon ab, welches Erbrecht anwendbar ist, ob das Testament die Formerfordernisse erfüllt und ob ein deutsches Nachlassgericht es anerkennt. In der Regel brauchen Sie zusätzlich einen deutschen Erbschein oder ein europäisches Nachlasszeugnis."},{question:"Was passiert, wenn mein Vater in Deutschland lebte, aber ein türkisches Testament hinterlassen hat?",answer:"Wenn er zuletzt in Deutschland lebte, gilt nach der EU-Erbrechtsverordnung grundsätzlich deutsches Erbrecht. Das türkische Testament muss dann nach deutschen Maßstäben beurteilt werden — Form, Inhalt, Pflichtteilsrechte."},{question:"Mein Vater hat mir im Testament alles hinterlassen, mein Bruder geht leer aus. Ist das rechtens?",answer:"Nicht unbedingt. Sowohl das türkische als auch das deutsche Erbrecht kennen einen Pflichtteil. Ihr Bruder könnte Ansprüche haben, selbst wenn das Testament ihn nicht erwähnt. Dafür gibt es Fristen — handeln Sie schnell."},{question:"Wo reiche ich ein türkisches Testament in Deutschland ein?",answer:"Bei dem für den letzten Wohnsitz des Erblassers zuständigen Nachlassgericht (in der Regel das Amtsgericht). Das Gericht eröffnet das Testament und benachrichtigt die Erben."}],faqTR:[{question:"El yazılı Türk vasiyetnamesi Almanya'da otomatik olarak geçerli midir?",answer:"Otomatik olarak geçerli değil. Hangi miras hukukunun uygulanacağına, vasiyetnamenin biçimsel gereklilikleri karşılayıp karşılamadığına ve Alman veraset mahkemesinin onu tanıyıp tanımayacağına bağlıdır. Genellikle ek olarak Alman miras belgesi (Erbschein) veya Avrupa Miras Sertifikası gerekir."},{question:"Babam bana her şeyi bıraktı, kardeşim vasiyette yok. Bu hukuka uygun mu?",answer:"Mutlaka değil. Hem Türk hem Alman hukuku saklı pay tanır. Kardeşinizin, vasiyetnamenin onu anmasa bile hakları olabilir. Bunun için süreler vardır — hızlı hareket edin."},{question:"Türk vasiyetnamesini Almanya'da nereye teslim etmem gerekiyor?",answer:"Miras bırakanın son ikametgahının bağlı olduğu veraset mahkemesine (genellikle Amtsgericht). Mahkeme vasiyetnameyi açar ve mirasçılara bildirir."}],ctaTitleDE:"Türkisches Testament gefunden? Wir helfen.",ctaTitleTR:"Türk Vasiyetnamesi mi Buldunuz? Yardımcı Oluyoruz.",ctaDescriptionDE:"Türkisches Erbrecht in Deutschland — ein komplexes Thema mit echten Fristen. Sprechen Sie uns an, bevor Ansprüche verfallen.",ctaDescriptionTR:"Almanya'da Türk miras hukuku — gerçek süreleri olan karmaşık bir konu. Haklar düşmeden önce bize ulaşın."},{slug:"scheidung-tuerkei-dauer-kosten",slugDE:"scheidung-tuerkei-dauer-kosten",slugTR:"turkiyede-bosanma-suresi-maliyeti",slugEN:"divorce-turkey-duration-cost",titleDE:"Scheidung in der Türkei: Wie lange dauert es wirklich, und was kostet es?",titleTR:"Türkiye'de Boşanma: Gerçekte Ne Kadar Sürer ve Ne Kadar Tutar?",excerptDE:"Scheidung in der Türkei: 3 Monate oder 3 Jahre? Was kostet ein türkischer Anwalt, was das Gericht? Die direkte Antwort ohne Umschweife.",excerptTR:"Türkiye'de boşanma: 3 ay mı 3 yıl mı? Türk avukat ne kadar tutar, mahkeme ne kadar? Doğrudan yanıt.",contentDE:`Drei Monate bei einer einvernehmlichen Scheidung. Bis zu drei Jahre, wenn einer der Partner nicht kooperiert oder der Fall kompliziert ist.

Das ist die kurze Antwort auf die Frage nach der Dauer. Jetzt die längere.

## Wie eine Scheidung in der Türkei abläuft

Das türkische Familienrecht unterscheidet zwei Arten der Scheidung:

**Anlaşmalı boşanma — die einvernehmliche Scheidung.** Voraussetzung ist, dass die Ehe mindestens ein Jahr gedauert hat. Beide Partner müssen persönlich vor Gericht erscheinen — oder durch einen bevollmächtigten Anwalt vertreten sein — und einem gemeinsam ausgearbeiteten Scheidungsprotokoll (protokol) zustimmen. Darin stehen: Unterhalt, Sorgerecht, Umgang, Vermögensaufteilung.

Wenn das Protokoll vollständig ist und beide zustimmen, spricht der Richter die Scheidung in der Regel bei einem einzigen Termin aus. Gesamtdauer ab Einreichung: typischerweise 2 bis 4 Monate.

**Çekişmeli boşanma — die streitige Scheidung.** Wenn ein Partner die Scheidung ablehnt oder die Folgesachen nicht geregelt sind, wird es ein Gerichtsverfahren mit mehreren Terminen, oft Gutachten und manchmal Jahren Warterei. 1 bis 3 Jahre sind realistisch, in besonders streitigen Fällen auch länger.

## Was eine Scheidung in der Türkei kostet

Das ist die Frage, die viele stellen und auf die sie selten eine klare Antwort bekommen.

**Türkischer Anwalt.** Die türkische Anwaltskammer (Türkiye Barolar Birliği) gibt jährlich Mindestgebührentabellen heraus. Für eine einvernehmliche Scheidung liegen die Anwaltsgebühren in der Türkei typischerweise zwischen 5.000 und 15.000 türkischer Lira — je nach Anwalt, Kanzlei und Stadt. Das entspricht aktuell grob 130 bis 400 Euro (Stand 2026, Kurs kann variieren).

Für streitige Scheidungen steigen die Kosten erheblich — je nach Komplexität und Dauer des Verfahrens.

**Gerichtskosten.** Die türkischen Gerichtskosten für Scheidungen sind relativ niedrig — typischerweise unter 1.000 Lira für einfache Verfahren. Dazu kommen eventuell Kosten für Übersetzungen, Sachverständige oder Vollstreckungsmaßnahmen.

**Was in Deutschland dazukommt.** Wenn Sie in Deutschland leben und die Scheidung in der Türkei durchführen lassen, fallen in Deutschland Kosten für die Koordination mit dem türkischen Anwalt, die Übersetzung von Dokumenten und — falls nötig — ein Tanıma-Verfahren zur Anerkennung der türkischen Scheidung in Deutschland an. Das ist ein separates Verfahren vor einem deutschen Gericht, das in der Regel 300 bis 800 Euro kostet.

## Muss ich persönlich in die Türkei reisen?

Bei der einvernehmlichen Scheidung in der Regel nicht — wenn Sie einen türkischen Anwalt mit einer Vekâletname (Vollmacht) bevollmächtigen. Der Anwalt erscheint dann für Sie vor Gericht.

Bei der streitigen Scheidung kann das Gericht eine persönliche Anhörung anordnen. Ob das in Ihrem Fall nötig ist, hängt von den konkreten Umständen ab.

## Scheidung in der Türkei oder in Deutschland — was ist besser?

Das ist keine allgemeine Frage mit einer allgemeinen Antwort. Es hängt davon ab, wo Sie und Ihr Partner leben, wo Ihre Kinder sind, wo Ihr Vermögen ist und welche rechtlichen Konsequenzen die Scheidung haben soll.

Wenn Sie in Deutschland leben: Eine Scheidung in Deutschland ist in vielen Fällen einfacher, weil sie direkt in das deutsche System eingebettet ist. Die Anerkennung in der Türkei (Tanıma-Tenfiz) ist dann ein zusätzlicher Schritt.

Wenn Sie oder Ihr Partner in der Türkei leben: Eine Scheidung in der Türkei kann sinnvoller sein — weil das Urteil dort sofort vollstreckbar ist und keine separates Tanıma-Verfahren braucht.

Oft ist der entscheidende Faktor: Wo lebt das Kind? Das Gericht dort hat in der Regel die bessere Möglichkeit, Sorgerecht und Unterhalt zu regeln.

## Was mit einem türkischen Scheidungsurteil in Deutschland passiert

Ein türkisches Scheidungsurteil gilt in Deutschland nicht automatisch. Es muss in einem Anerkennungsverfahren nach § 107 FamFG von der zuständigen Landesjustizverwaltung anerkannt werden.

Das Verfahren ist bürokratisch, aber in der Regel nicht schwierig — wenn das türkische Urteil formal korrekt ist. Es dauert typischerweise 3 bis 6 Monate.

Ohne diese Anerkennung gilt man in Deutschland noch als verheiratet — auch wenn man in der Türkei rechtskräftig geschieden ist.`,contentTR:`Anlaşmalı boşanmada üç ay. Taraflardan biri işbirliği yapmıyorsa ya da dava karmaşıksa üç yıla kadar.

Süre sorusunun kısa yanıtı bu. Şimdi uzun yanıtı.

## Türkiye'de Boşanma Nasıl İşler?

Türk aile hukuku iki tür boşanmayı ayırt eder:

**Anlaşmalı boşanma.** Evliliğin en az bir yıl sürmüş olması gerekir. Her iki taraf mahkemede bizzat ya da vekâletname ile yetkilendirilen avukat aracılığıyla hazırlanan boşanma protokolünü onaylamalıdır. Protokolde nafaka, velayet, ziyaret hakkı ve mal paylaşımı yer alır.

Protokol eksiksiz ve her iki tarafın onayı mevcutsa, hâkim genellikle tek celsede boşanmayı hükme bağlar. Dilekçenin sunulmasından itibaren toplam süre: genellikle 2 ile 4 ay.

**Çekişmeli boşanma.** Taraflardan biri boşanmayı reddediyorsa ya da sonuçlar konusunda anlaşmazlık varsa, birden fazla duruşmalı, çoğu kez bilirkişi gerektiren ve bazen yıllara uzayan bir yargılama söz konusu olur. 1 ile 3 yıl gerçekçidir; özellikle çekişmeli davalarda daha uzun da sürebilir.

## Türkiye'de Boşanma Ne Kadar Tutar?

Pek çok kişinin sorduğu ve nadiren net yanıt aldığı soru budur.

**Türk avukatı.** Türkiye Barolar Birliği her yıl asgari ücret tarifesi yayımlar. Anlaşmalı boşanma için Türkiye'deki avukatlık ücretleri genellikle 5.000 ile 15.000 Türk Lirası arasında değişir — avukata, bürosu ve şehre göre. Bu, 2026 itibarıyla yaklaşık 130 ile 400 Euro'ya denk düşüyor (kur değişkendir).

Çekişmeli boşanmalarda masraflar karmaşıklığa ve süreye bağlı olarak önemli ölçüde artar.

**Mahkeme masrafları.** Türk mahkeme masrafları boşanma davaları için görece düşüktür — basit davalar için genellikle 1.000 Lira'nın altında. Buna çeviri, bilirkişi veya icra masrafları eklenebilir.

**Almanya'dan eklenecekler.** Almanya'da yaşıyorsanız ve boşanmayı Türkiye'de yaptırıyorsanız, Türk avukatıyla koordinasyon, belge çevirisi ve — gerekirse — Türk boşanma kararının Almanya'da tanınması için Tanıma davası masrafları eklenir. Bu ayrı bir Alman mahkeme sürecidir ve genellikle 300 ile 800 Euro tutar.

## Kişisel Olarak Türkiye'ye Gitmem Gerekiyor mu?

Anlaşmalı boşanmada genellikle gerekmiyor — Vekâletname ile bir Türk avukatı yetkilendirirseniz avukat mahkemede sizi temsil eder.

Çekişmeli boşanmada mahkeme bizzat dinleme isteyebilir. Bu somut koşullara bağlıdır.

## Türkiye'deki Boşanma Kararı Almanya'da Ne Anlama Gelir?

Türk boşanma kararı Almanya'da otomatik olarak geçerli değildir. § 107 FamFG kapsamında ilgili Eyalet Adalet İdaresi tarafından tanınması gerekir.

Süreç bürokratiktir ama Türk kararı biçimsel açıdan doğruysa genellikle güç değildir. Tipik olarak 3 ile 6 ay sürer.

Bu tanıma olmadan Türkiye'de kesinleşmiş boşanma kararı olsa bile Almanya'da hâlâ evli sayılırsınız.`,category:"family-law",categoryDE:"Familienrecht",image:Ru,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-19",keywordsDE:"scheidung türkei dauer, scheidung türkei kosten, scheidung türkei wie lange, türkische scheidung anerkennung deutschland, anwalt scheidung türkei",keywordsTR:"türkiyede bosanma suresi, türkiyede bosanma masraflari, anlaşmalı boşanma türkiye, türk boşanma kararı almanya tanıma",faqDE:[{question:"Wie lange dauert eine einvernehmliche Scheidung in der Türkei?",answer:"Typischerweise 2 bis 4 Monate ab Einreichung des Antrags beim türkischen Familiengericht — vorausgesetzt, das Scheidungsprotokoll ist vollständig und beide Partner stimmen zu."},{question:"Muss ich für eine Scheidung in der Türkei persönlich dort erscheinen?",answer:"Bei einer einvernehmlichen Scheidung nicht zwingend — wenn Sie einen türkischen Anwalt per Vekâletname bevollmächtigen. Bei einer streitigen Scheidung kann das Gericht eine persönliche Anhörung anordnen."},{question:"Wie viel kostet ein türkischer Anwalt für eine Scheidung?",answer:"Für eine einvernehmliche Scheidung in der Türkei typischerweise 5.000 bis 15.000 türkische Lira — aktuell grob 130 bis 400 Euro. Für streitige Verfahren steigen die Kosten erheblich."},{question:"Gilt meine türkische Scheidung automatisch in Deutschland?",answer:"Nein. Ein türkisches Scheidungsurteil muss in Deutschland nach § 107 FamFG anerkannt werden. Das dauert in der Regel 3 bis 6 Monate. Ohne diese Anerkennung gelten Sie in Deutschland noch als verheiratet."},{question:"Ist es besser, in der Türkei oder in Deutschland zu scheiden?",answer:"Das hängt davon ab, wo Sie und Ihr Partner leben, wo die Kinder sind und wo das Vermögen liegt. Es gibt keine allgemeine Antwort. Ein Anwalt kann das für Ihren konkreten Fall einschätzen."}],faqTR:[{question:"Türkiye'de anlaşmalı boşanma ne kadar sürer?",answer:"Türk aile mahkemesine dilekçe sunulmasından itibaren tipik olarak 2 ile 4 ay — boşanma protokolü eksiksizse ve her iki taraf onaylıyorsa."},{question:"Türkiye'deki boşanma için bizzat orada bulunmam gerekiyor mu?",answer:"Anlaşmalı boşanmada zorunlu değil — Vekâletname ile Türk avukatı yetkilendirirseniz avukat sizi mahkemede temsil eder. Çekişmeli boşanmada mahkeme bizzat dinleme isteyebilir."},{question:"Türk boşanma kararım Almanya'da otomatik geçerli mi?",answer:"Hayır. Türk boşanma kararı Almanya'da § 107 FamFG kapsamında tanınmalıdır. Genellikle 3 ile 6 ay sürer. Bu tanıma olmadan Almanya'da hâlâ evli sayılırsınız."}],ctaTitleDE:"Scheidung in der Türkei — wir koordinieren beides",ctaTitleTR:"Türkiye'de Boşanma — İki Tarafı Birden Koordine Ediyoruz",ctaDescriptionDE:"Türkische Scheidung plus Anerkennung in Deutschland — wir kennen beide Systeme und beraten auf Deutsch und Türkisch.",ctaDescriptionTR:"Türk boşanması artı Almanya'da tanıma — her iki sistemi biliyor, Almanca ve Türkçe danışmanlık sunuyoruz."},{slug:"tuerkischer-anwalt-mannheim-erstberatung",slugDE:"tuerkischer-anwalt-mannheim-erstberatung",slugTR:"mannheim-turk-avukat-ilk-gorusme",slugEN:"turkish-lawyer-mannheim-initial-consultation",titleDE:"Beim ersten Gespräch mit einem türkischen Anwalt: Was bringt mir was?",titleTR:"Türk Bir Avukatla İlk Görüşmede: Neyi Nasıl Değerlendirmelisiniz?",excerptDE:"Türkischer Anwalt Mannheim Erstberatung: Was passiert im ersten Gespräch, welche Dokumente sollen Sie mitbringen, und woran erkennen Sie, ob ein Anwalt wirklich türkisches Recht beherrscht?",excerptTR:"Mannheim'da Türk avukatla ilk görüşme: İlk görüşmede neler olur, hangi belgeleri getirmeniz gerekir ve bir avukatın gerçekten Türk hukukunu bilip bilmediğini nasıl anlarsınız?",contentDE:`Die meisten Menschen gehen zum ersten Mal zu einem Anwalt, wenn die Lage schon etwas eskaliert ist. Dann ist man nervös, weiß nicht genau, was man sagen soll, und verlässt das Gespräch manchmal verwirrt — obwohl der Anwalt formell alles richtig gemacht hat.

Das muss nicht so sein. Hier erkläre ich, was bei der Erstberatung eines türkischen Anwalts passiert und wie Sie das Gespräch so führen, dass Sie am Ende wirklich wissen, wo Sie stehen.

## Was in einer Erstberatung passiert — realistisch beschrieben

Eine Erstberatung ist kein Beratungsgespräch im weiteren Sinne. Sie ist ein Erstgespräch zur Einschätzung. Das heißt: Der Anwalt hört zu, stellt Fragen, ordnet Ihren Fall rechtlich ein und erklärt, was aus seiner Sicht die sinnvollen nächsten Schritte sind.

Was er Ihnen am Ende eines guten Erstgesprächs sagen kann:
- Welches Recht auf Ihren Fall anwendbar ist
- Ob und welche Ansprüche Sie haben (oder gegen Sie bestehen könnten)
- Was realistische Optionen sind — und welche davon Zeit und Geld kostet
- Ob Sie überhaupt einen Anwalt brauchen oder ob sich die Sache anders lösen lässt

Was er Ihnen nicht versprechen wird — und wenn er es tut, sollten Sie vorsichtig sein: Garantien über den Ausgang. Kein seriöser Anwalt sagt "das gewinnen Sie sicher".

## Was Sie vorbereiten sollten

Je besser vorbereitet Sie kommen, desto mehr bekommen Sie aus dem Gespräch. Das bedeutet nicht: einen mehrseitigen Bericht schreiben. Es bedeutet: die wesentlichen Fakten im Kopf haben und relevante Dokumente dabei.

Für die meisten türkisch-deutschen Rechtsfragen hilft es, mitzubringen:

Personaldokumente. Ihren Personalausweis oder Reisepass, türkischen Nüfus-Auszug falls vorhanden. Bei Familiensachen die Heiratsurkunde, eventuell Geburtsurkunden der Kinder.

Relevante Schriftstücke. Wenn es um eine Erbschaft geht: das Testament, den türkischen Veraset-Bescheid, Tapu-Dokumente. Bei Scheidung: den Scheidungsbeschluss oder laufende Anträge. Bei einer Vollmacht: das bestehende Dokument.

Eine Zeitlinie. Wann ist was passiert? Wann hat Ihr Vater das Testament gemacht? Wann hat sich die Ehe getrennt? Wann kam der Brief vom Gericht? Das hilft dem Anwalt, Fristen zu erkennen.

## Woran erkennen Sie, ob ein Anwalt türkisches Recht wirklich beherrscht?

Das ist eine berechtigt schwierige Frage — weil "türkisches Recht" kein offizieller Fachanwaltstitel in Deutschland ist. Jeder Anwalt, der in Deutschland zugelassen ist, darf grundsätzlich über türkisches Recht beraten.

Was einen Unterschied macht:

Zulassung bei einer türkischen Rechtsanwaltskammer. Wenn ein Anwalt zusätzlich zu seiner deutschen Zulassung auch bei einer türkischen Barosu zugelassen ist, darf er in der Türkei vor Gericht auftreten. Das ist ein konkreter Hinweis auf echte Kenntnisse des türkischen Systems.

Erfahrung mit konkreten Verfahren. Fragen Sie: "Haben Sie schon ein Tanıma-Tenfiz-Verfahren begleitet? Haben Sie schon türkische Immobilien in einem Erbschaftsfall abgewickelt?" Antworten, die klar und konkret sind, sprechen für echte Praxiserfahrung.

Kommunikation. Kann der Anwalt auf Türkisch kommunizieren — mit Ihnen, aber auch mit türkischen Gerichten und Anwälten? Das ist kein reines Komfortmerkmal: Türkische Behörden kommunizieren auf Türkisch.

## Was Sie nach der Erstberatung wissen sollten

Wenn Sie nach einem einstündigen Gespräch nicht wissen, ob und wie Ihre Sache weitergeht, war das Gespräch nicht hilfreich genug. Das kann am Anwalt liegen — oder daran, dass Sie den Fall noch nicht vollständig geschildert haben.

Fragen Sie am Ende direkt: "Was ist der nächste Schritt für mich?" Und: "Was kostet dieser nächste Schritt ungefähr?"

Ein Anwalt, der auf diese Fragen ausweicht, macht sich keinen Gefallen.

## Türkischer Anwalt in Mannheim: Was die Doğru Kanzlei anbietet

Rechtsanwalt Hasan Doğru ist sowohl bei der Rechtsanwaltskammer Karlsruhe (§ 207 BRAO) als auch bei der Ankara Barosu zugelassen. Das bedeutet: Er ist berechtigt, in der Türkei vor Gericht aufzutreten, nicht nur zu beraten.

Die Erstberatung findet auf Deutsch oder Türkisch statt — je nachdem, was für Sie angenehmer ist. Im Anschluss bekommen Sie eine klare Einschätzung: was Ihre Lage rechtlich bedeutet, welche Optionen realistisch sind und was der nächste Schritt ist.`,contentTR:`Çoğu insan ilk kez avukata gittiğinde durum biraz tırmanmış oluyor. Sinirlisiniz, ne söyleyeceğinizi tam bilmiyorsunuz ve bazen görüşmeden daha da kafanız karışmış ayrılıyorsunuz — avukat biçimsel açıdan her şeyi doğru yapmış olsa da.

Bu böyle olmak zorunda değil. Burada, Türk bir avukatla ilk görüşmede neler yaşandığını ve görüşmeyi, çıkarken gerçekten nerede durduğunuzu bileceğiniz şekilde nasıl yönlendirebileceğinizi açıklıyorum.

## İlk Görüşmede Gerçekte Ne Olur?

İlk danışma geniş anlamda bir rehberlik görüşmesi değildir. İlk değerlendirme görüşmesidir. Avukat dinler, sorular sorar, davanızı hukuki açıdan sınıflandırır ve en uygun sonraki adımların neler olduğunu açıklar.

İyi bir ilk görüşmenin sonunda avukatın size söyleyebilecekleri:
- Davanıza hangi hukukun uygulanacağı
- Hangi haklarınız olduğu — ya da size karşı ne ileri sürülebileceği
- Gerçekçi seçeneklerin neler olduğu ve hangilerinin zaman ve para gerektirdiği
- Gerçekten avukata ihtiyacınız olup olmadığı ya da konunun başka türlü çözülüp çözülemeyeceği

Söylemeyeceği — ve söylüyorsa dikkatli olun: Sonucu garantilemek. Ciddi hiçbir avukat "bunu kesinlikle kazanırsınız" demez.

## Ne Hazırlamalısınız?

Ne kadar hazırlıklı gelirseniz görüşmeden o kadar çok şey alırsınız. Bu çok sayfalık rapor yazmak demek değil — önemli gerçekleri aklınızda tutmak ve ilgili belgeleri getirmek demek.

Çoğu Türk-Alman hukuki sorusu için şunları getirmeniz yardımcı olur:

Kimlik belgeleri. Pasaportunuz, varsa Türk nüfus cüzdanı ya da nüfus kaydı. Aile davalarında evlilik cüzdanı, mümkünse çocukların doğum belgeleri.

İlgili belgeler. Miras söz konusuysa: vasiyetname, Türk veraset ilamı, tapu belgeleri. Boşanma söz konusuysa: boşanma kararı ya da sürmekte olan talepler. Vekaletname söz konusuysa: mevcut belge.

Zaman çizelgesi. Ne zaman ne oldu? Babanız vasiyeti ne zaman yazdı? Evlilik ne zaman bozuldu? Mahkeme mektubu ne zaman geldi? Bu, avukatın süreleri fark etmesine yardımcı olur.

## Bir Avukatın Türk Hukukunu Gerçekten Bilip Bilmediğini Nasıl Anlarsınız?

Bu haklı ve zor bir sorudur — çünkü "Türk hukuku" Almanya'da resmi bir uzmanlık unvanı değildir. Almanya'da ruhsat sahibi her avukat prensipte Türk hukuku hakkında danışmanlık verebilir.

Fark yaratan şeyler:

Türk barosuna üyelik. Bir avukat Alman ruhsatına ek olarak bir Türk Barosu'na da kayıtlıysa, Türkiye'de mahkemede temsil yetkisine sahiptir. Bu, Türk sistemine dair gerçek bilginin somut bir göstergesidir.

Somut deneyim. Sorun: "Daha önce Tanıma-Tenfiz sürecini yürüttünüz mü? Miras davasında Türk tapu işlemlerini gerçekleştirdiniz mi?" Net ve somut yanıtlar gerçek pratik deneyimi gösterir.

İletişim. Avukat Türkçe iletişim kurabiliyor mu — sizinle, ama aynı zamanda Türk mahkeme ve avukatlarıyla? Bu yalnızca konfor meselesi değil: Türk kurumları Türkçe iletişim kurar.

## İlk Görüşmeden Sonra Ne Bilmeniz Gerekir?

Saatlik bir görüşmenin ardından davanızın nasıl ilerleyeceğini bilmiyorsanız, görüşme yeterince verimli değildi. Bu avukattan kaynaklanıyor olabilir — ya da davayı henüz tam olarak anlatmamış olabilirsiniz.

Sonunda doğrudan sorun: "Benim için bir sonraki adım ne?" Ve: "Bu adım yaklaşık ne kadar tutar?"

Bu sorudan kaçınan bir avukat kendine iyilik etmiyor.

## Mannheim'da Türk Avukat: Doğru Kanzlei Ne Sunuyor?

Avukat Hasan Doğru, hem Karlsruhe Barosu'na (§207 BRAO) hem de Ankara Barosu'na kayıtlıdır. Bu, yalnızca danışmanlık vermekle kalmayıp Türkiye'de mahkemede temsil yetkisine sahip olduğu anlamına gelir.

İlk görüşme Almanca veya Türkçe yapılır — hangisi sizin için daha rahatsanız. Ardından net bir değerlendirme alırsınız: hukuki durumunuz ne anlama geliyor, gerçekçi seçenekler neler ve bir sonraki adım ne.`,category:"legal-info",categoryDE:"Rechtsinformationen",image:Mu,dateDE:"19. April 2026",dateTR:"19 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-19",keywordsDE:"türkischer anwalt mannheim, türkischer anwalt erstberatung, anwalt türkisches recht mannheim, türkischer rechtsanwalt erstgespräch, türkisch deutscher anwalt",keywordsTR:"mannheim türk avukat, türk avukat ilk görüşme, türk hukuku avukat mannheim, türk alman avukat ilk danışma",faqDE:[{question:"Was kostet die Erstberatung bei einem türkischen Anwalt in Mannheim?",answer:"Maximal 190 Euro plus Mehrwertsteuer nach dem RVG. Mit Beratungshilfeschein (beim Amtsgericht erhältlich) nur 15 Euro. Fragen Sie vorher, was konkret berechnet wird."},{question:"Was ist der Unterschied zwischen einem Anwalt mit türkischer Barosu-Zulassung und einem ohne?",answer:"Ein Anwalt mit Zulassung bei einer türkischen Barosu ist berechtigt, in der Türkei vor Gericht aufzutreten — nicht nur zu beraten. Das ist relevant, wenn Ihr Fall türkische Gerichtsverfahren erfordert, zum Beispiel Tanıma-Tenfiz oder türkische Erbschaftsangelegenheiten."},{question:"Welche Dokumente soll ich zur Erstberatung mitbringen?",answer:"Personalausweis oder Reisepass, türkischer Nüfus-Auszug falls vorhanden, und alle Dokumente, die direkt mit Ihrem Anliegen zusammenhängen — Testament, Scheidungsbeschluss, Mietvertrag, Vollmacht. Eine kurze Zeitlinie der Ereignisse hilft dem Anwalt, schneller einzusteigen."},{question:"Kann ich die Erstberatung auch auf Türkisch führen?",answer:"Bei der Doğru Kanzlei ja. Das Gespräch findet auf Deutsch oder Türkisch statt — je nachdem, was für Sie angenehmer ist."}],faqTR:[{question:"Mannheim'da Türk avukatla ilk görüşme ne kadar tutar?",answer:"RVG'ye göre maksimum 190 Euro + KDV. Beratungshilfe belgesiyle yalnızca 15 Euro. Önceden ne kadar ücret alındığını sormanızı öneririm."},{question:"Türk barosuna kayıtlı avukat ile kayıtsız arasındaki fark nedir?",answer:"Türk barosuna kayıtlı avukat Türkiye'de mahkemede temsil yetkisine sahiptir — yalnızca danışmanlık vermekle kalmaz. Tanıma-Tenfiz veya Türkiye'deki miras işlemleri gibi Türk mahkeme süreçleri gerekiyorsa bu önemlidir."},{question:"İlk görüşmeye hangi belgeleri getirmeliyim?",answer:"Pasaport veya kimlik belgesi, varsa Türk nüfus cüzdanı ve doğrudan ilginizi ilgilendiren tüm belgeler — vasiyetname, boşanma kararı, kira sözleşmesi, vekaletname. Olayların kısa bir zaman çizelgesi avukatın daha hızlı değerlendirme yapmasına yardımcı olur."},{question:"İlk görüşmeyi Türkçe yapabilir miyim?",answer:"Doğru Kanzlei'de evet. Görüşme Almanca veya Türkçe yapılabilir — hangisi sizin için daha rahatsanız."}],ctaTitleDE:"Erstgespräch mit einem türkischen Anwalt in Mannheim",ctaTitleTR:"Mannheim'da Türk Avukatla İlk Görüşme",ctaDescriptionDE:"Rechtsanwalt Hasan Doğru ist bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe zugelassen. Erstberatung auf Deutsch oder Türkisch.",ctaDescriptionTR:"Avukat Hasan Doğru, Ankara Barosu ve Karlsruhe Barosu'na kayıtlıdır. İlk görüşme Almanca veya Türkçe yapılabilir."}],yc=w.createContext(void 0);function $b(r,t,s){var c,m;let d=r.replace(`/${t}`,`/${s}`);t==="tr"&&s==="de"?(d=d.replace("/hizmetler","/leistungen"),d=d.replace("/gizlilik-politikasi","/datenschutz"),d=d.replace("/yasal-bilgiler","/impressum"),d=d.replace("/hakkimizda","/ueber-uns")):t==="de"&&s==="tr"?(d=d.replace("/leistungen","/hizmetler"),d=d.replace("/datenschutz","/gizlilik-politikasi"),d=d.replace("/impressum","/yasal-bilgiler"),d=d.replace("/ueber-uns","/hakkimizda")):s==="en"?(d=d.replace("/hizmetler","/services"),d=d.replace("/leistungen","/services"),d=d.replace("/gizlilik-politikasi","/privacy-policy"),d=d.replace("/datenschutz","/privacy-policy"),d=d.replace("/yasal-bilgiler","/legal-notice"),d=d.replace("/impressum","/legal-notice"),d=d.replace("/hakkimizda","/about-us"),d=d.replace("/ueber-uns","/about-us")):t==="en"&&(s==="de"?(d=d.replace("/services","/leistungen"),d=d.replace("/privacy-policy","/datenschutz"),d=d.replace("/legal-notice","/impressum"),d=d.replace("/about-us","/ueber-uns")):(d=d.replace("/services","/hizmetler"),d=d.replace("/privacy-policy","/gizlilik-politikasi"),d=d.replace("/legal-notice","/yasal-bilgiler"),d=d.replace("/about-us","/hakkimizda")));const o=s==="de"?"/leistungen/":s==="en"?"/services/":"/hizmetler/";if(d.includes(o)){const y=(c=d.split(o)[1])==null?void 0:c.split(/[?#]/)[0];if(y){const f=xr.find(p=>t==="de"?p.slugDE===y:t==="en"?p.slugEN===y:p.slugTR===y);if(f){const p=s==="de"?f.slugDE:s==="en"?f.slugEN:f.slugTR;d=d.replace(y,p)}}}const h="/blog/";if(d.includes(h)){const y=(m=d.split(h)[1])==null?void 0:m.split(/[?#]/)[0];if(y){const f=ud.find(p=>t==="de"?p.slugDE===y:t==="en"?p.slugEN===y:p.slugTR===y);if(f){const p=s==="de"?f.slugDE:s==="en"?f.slugEN:f.slugTR;d=d.replace(y,p)}}}return d}const Jb=({language:r,children:t})=>{const s=mt(),d=Hn(),o=m=>{if(m===r)return;const y=$b(d.pathname,r,m)+d.search+d.hash;s(y)},h=m=>Wb[r][m]||m,c=w.useMemo(()=>{const m=`/${r}`,y=r==="de"?"leistungen":r==="en"?"services":"hizmetler";return{home:m,services:`${m}/${y}`,service:f=>{const p=xr.find(D=>D.id===f),z=p?r==="de"?p.slugDE:r==="en"?p.slugEN:p.slugTR:f;return`${m}/${y}/${z}`},blog:`${m}/blog`,blogPost:f=>{const p=ud.find(D=>D.slug===f),z=p?r==="de"?p.slugDE:r==="en"?p.slugEN:p.slugTR:f;return`${m}/blog/${z}`},datenschutz:r==="de"?`${m}/datenschutz`:r==="en"?`${m}/privacy-policy`:`${m}/gizlilik-politikasi`,impressum:r==="de"?`${m}/impressum`:r==="en"?`${m}/legal-notice`:`${m}/yasal-bilgiler`,about:r==="de"?`${m}/ueber-uns`:r==="en"?`${m}/about-us`:`${m}/hakkimizda`,whyUs:`${m}/#neden-biz`,blogSection:`${m}/#blog`,contact:`${m}/#iletisim`}},[r]);return k.jsx(yc.Provider,{value:{language:r,setLanguage:o,t:h,paths:c},children:t})},la=()=>{const r=w.useContext(yc);if(r===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return r},bc="/assets/logo-eRLlm_XN.avif",Rm="https://calendly.com/hasand9366/30min";function Qb(){const[r,t]=w.useState(!1),[s,d]=w.useState(!1),{language:o,setLanguage:h,t:c,paths:m}=la(),{pathname:y,hash:f}=Hn(),p=mt(),z=[{label:c("nav_home"),href:m.home},{label:c("nav_about"),href:m.about},{label:c("nav_services"),href:m.services},{label:c("nav_why_us"),href:m.whyUs},{label:c("nav_blog"),href:m.blog},{label:c("nav_contact"),href:m.contact}],D=y===`/${o}`||y===`/${o}/`;w.useEffect(()=>{const _=()=>t(window.scrollY>40);return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[]),w.useEffect(()=>{if(f){const _=f.replace("#",""),q=document.getElementById(_);if(q){const G=setTimeout(()=>{q.scrollIntoView({behavior:"smooth"})},150);return()=>clearTimeout(G)}}},[f]),w.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]);const M=_=>{d(!1);const q=_.indexOf("#");if(q!==-1){const G=_.substring(0,q),ne=_.substring(q+1),be=y.replace(/\/$/,""),fe=G.replace(/\/$/,"");if(be===fe||D&&fe===`/${o}`){const ve=document.getElementById(ne);if(ve){ve.scrollIntoView({behavior:"smooth"});return}}p(_)}else p(_),window.scrollTo({top:0,behavior:"smooth"})},j=y.includes("/blog/"),I=!D||r||s||j;return k.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:1e3,transition:"background 0.3s, box-shadow 0.3s",background:I?"#ffffff":"transparent",boxShadow:I?"0 1px 24px rgba(0,0,0,0.07)":"none",borderBottom:I?"1px solid #f0f0f0":"1px solid rgba(255,255,255,0.1)"},children:[k.jsxs("div",{className:"relative z-50 max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[80px]",children:[k.jsxs(kn,{to:m.home,"aria-label":`Doğru Kanzlei - ${c("nav_home")}`,onClick:_=>{D&&(_.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},style:{textDecoration:"none",display:"flex",alignItems:"center",gap:12},children:[k.jsx("img",{src:bc,alt:"Doğru Kanzlei Logo",width:44,height:44,fetchPriority:"high",style:{height:44,width:"auto",display:"block",filter:I?"none":"brightness(0) invert(1)",transition:"filter 0.3s"}}),k.jsxs("div",{className:"flex flex-col",children:[k.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:20,fontWeight:600,color:I?"#1C3829":"#ffffff",letterSpacing:"0.05em",textTransform:"uppercase",transition:"color 0.3s",lineHeight:1},children:"DOGRU"}),k.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:9,fontWeight:700,color:"#7A5F20",letterSpacing:"0.2em",textTransform:"uppercase",marginTop:2},children:"Kanzlei"})]})]}),k.jsxs("nav",{className:"hidden lg:flex items-center gap-8","aria-label":o==="de"?"Hauptnavigation":"Ana navigasyon",children:[z.map(_=>k.jsx("button",{onClick:()=>M(_.href),"aria-label":_.label,style:{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:I?"#3a3a3a":"rgba(255,255,255,0.9)",textDecoration:"none",transition:"color 0.2s",padding:"8px 0"},onMouseEnter:q=>q.target.style.color="#7A5F20",onMouseLeave:q=>q.target.style.color=I?"#3a3a3a":"rgba(255,255,255,0.9)",children:_.label},_.href)),k.jsx("div",{style:{width:1,height:18,background:I?"#e0e0e0":"rgba(255,255,255,0.2)"}}),k.jsxs("button",{onClick:()=>h(o==="tr"?"de":o==="de"?"en":"tr"),"aria-label":o==="de"?"Sprache wechseln":o==="en"?"Change language":"Dili değiştir",style:{display:"flex",alignItems:"center",gap:5,background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:I?"#3a3a3a":"#ffffff",textTransform:"uppercase"},children:[k.jsx(cc,{size:13,color:"#7A5F20","aria-hidden":"true"}),o==="tr"?"DE":o==="de"?"EN":"TR"]}),k.jsx("button",{onClick:()=>window.open(Rm,"_blank"),style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#ffffff",background:"#8B6E2A",padding:"12px 24px",textDecoration:"none",transition:"transform 0.2s, background 0.2s",border:"none",cursor:"pointer"},onMouseEnter:_=>{_.target.style.background="#7A5F20",_.target.style.transform="translateY(-1px)"},onMouseLeave:_=>{_.target.style.background="#8B6E2A",_.target.style.transform="translateY(0)"},children:c("nav_cta")})]}),k.jsxs("div",{className:"flex items-center gap-4 lg:hidden",children:[k.jsx("button",{onClick:()=>h(o==="tr"?"de":o==="de"?"en":"tr"),"aria-label":o==="de"?"Sprache wechseln":o==="en"?"Change language":"Dili değiştir",style:{display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",fontFamily:"'Lato', sans-serif",fontSize:12,fontWeight:700,color:I?"#3a3a3a":"#ffffff",textTransform:"uppercase"},children:o==="tr"?"DE":o==="de"?"EN":"TR"}),k.jsx("button",{onClick:()=>d(!s),"aria-label":s?"Hauptmenü schließen":"Hauptmenü öffnen",style:{background:"none",border:"none",cursor:"pointer",color:I?"#1C3829":"#ffffff",padding:4},children:s?k.jsx(fc,{size:24}):k.jsx(pb,{size:24})})]})]}),k.jsx("div",{className:`fixed inset-0 bg-[#1C3829] z-40 transition-transform duration-500 ease-in-out lg:hidden ${s?"translate-x-0":"translate-x-full"}`,style:{top:0,height:"100vh"},children:k.jsxs("div",{className:"flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto",children:[k.jsx("div",{className:"flex flex-col gap-6 flex-grow",children:z.map((_,q)=>k.jsx("button",{onClick:()=>M(_.href),style:{transitionDelay:`${q*100}ms`},className:`text-left font-serif text-3xl font-medium text-white hover:text-[#8B6E2A] transition-all duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:_.label},_.href))}),k.jsxs("div",{className:`mt-auto pt-8 border-t border-white/10 transition-all duration-500 delay-500 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[k.jsx("p",{className:"font-sans text-[11px] text-white/50 tracking-[0.2em] uppercase mb-4",children:o==="de"?"Direkter Kontakt":"Doğrudan İletişim"}),k.jsx("p",{className:"font-sans text-white mb-1",children:"info@hasandogru.de"}),k.jsx("p",{className:"font-sans text-white mb-2",children:"Avukat.hasandogru@outlook.de"}),k.jsx("p",{className:"font-sans text-white mb-8",children:"+4917661221210"}),k.jsx("button",{onClick:()=>window.open(Rm,"_blank"),className:"w-full bg-[#8B6E2A] text-white font-sans text-xs font-bold tracking-[0.15em] uppercase py-5 text-center transition-colors hover:bg-[#7A5F20]",children:c("nav_cta")})]})]})})]})}const Bm="dogru_kanzlei_consent",xm="1";function Xb(){const[r,t]=w.useState("pending"),[s,d]=w.useState({essential:!0,functional:!1,analytics:!1}),[o,h]=w.useState(!1);w.useEffect(()=>{try{const z=localStorage.getItem(Bm);if(z){const D=JSON.parse(z);if(D.version===xm){d(D.consent),t(D.status),h(!1);return}}}catch{}h(!0)},[]);const c=(z,D)=>{const M={version:xm,consent:z,status:D};localStorage.setItem(Bm,JSON.stringify(M)),d(z),t(D),h(!1)};return{showBanner:o,status:r,consent:s,acceptAll:()=>{c({essential:!0,functional:!0,analytics:!0},"accepted")},rejectAll:()=>{c({essential:!0,functional:!1,analytics:!1},"rejected")},saveCustom:(z,D)=>{c({essential:!0,functional:z,analytics:D},"custom")},openSettings:()=>{h(!0)}}}const vc=w.createContext(null);function ev({children:r}){const t=Xb();return k.jsx(vc.Provider,{value:t,children:r})}function dd(){const r=w.useContext(vc);if(!r)throw new Error("useConsent must be used within ConsentProvider");return r}function nv(){const{t:r,language:t,paths:s}=la(),{openSettings:d}=dd(),o=new Date().getFullYear(),h=[{label:r("nav_about"),href:s.about},{label:r("nav_services"),href:s.services},{label:r("nav_why_us"),href:s.whyUs},{label:r("nav_blog"),href:s.blog},{label:r("nav_contact"),href:s.contact}],c=t==="de"?[{label:"Familienrecht",href:s.service("familienrecht")},{label:"Erbrecht",href:s.service("erbrecht")},{label:"Strafrecht",href:s.service("strafrecht")}]:t==="tr"?[{label:"Aile Hukuku",href:s.service("familienrecht")},{label:"Miras Hukuku",href:s.service("erbrecht")},{label:"Ceza Hukuku",href:s.service("strafrecht")}]:[{label:"Family Law",href:s.service("familienrecht")},{label:"Inheritance Law",href:s.service("erbrecht")},{label:"Criminal Law",href:s.service("strafrecht")}];return k.jsxs("footer",{style:{background:"#111d17",padding:"64px 32px 32px"},children:[k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2.5fr 1fr 1fr 1.5fr",gap:48,paddingBottom:48,borderBottom:"1px solid rgba(255,255,255,0.06)"},className:"footer-grid",children:[k.jsxs("div",{children:[k.jsxs(kn,{to:s.home,"aria-label":`Doğru Kanzlei - ${r("nav_home")}`,style:{marginBottom:20,display:"flex",alignItems:"center",gap:10,textDecoration:"none"},children:[k.jsx("img",{src:bc,alt:"Doğru Kanzlei Logo",width:48,height:48,style:{height:48,width:"auto",display:"block",filter:"brightness(0) invert(1)"}}),k.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:"#ffffff",letterSpacing:"0.05em",textTransform:"uppercase"},children:"DOGRU Kanzlei"})]}),k.jsx("p",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.55)",lineHeight:1.7,maxWidth:320,marginBottom:24},children:r("footer_description")}),k.jsxs("div",{style:{display:"flex",gap:14},children:[k.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(184,150,62,0.1)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(184,150,62,0.2)"},children:k.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#B8963E"}})}),k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.6)",letterSpacing:"0.05em"},children:"Mannheim · Ankara"})]})]}),k.jsxs("div",{children:[k.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#B8963E",marginBottom:24},children:r("footer_quick_links")}),h.map(m=>k.jsx(kn,{to:m.href,style:{display:"block",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.7)",textDecoration:"none",marginBottom:12,transition:"color 0.2s"},onMouseEnter:y=>y.target.style.color="#ffffff",onMouseLeave:y=>y.target.style.color="rgba(255,255,255,0.7)",children:m.label},m.label))]}),k.jsxs("div",{children:[k.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#B8963E",marginBottom:24},children:r("hero_cta_secondary")}),c.map(m=>k.jsx(kn,{to:m.href,style:{display:"block",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.7)",textDecoration:"none",marginBottom:12,transition:"color 0.2s"},onMouseEnter:y=>y.target.style.color="#ffffff",onMouseLeave:y=>y.target.style.color="rgba(255,255,255,0.7)",children:m.label},m.label))]}),k.jsxs("div",{children:[k.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#8B6E2A",marginBottom:24},children:r("footer_contact_info")}),k.jsxs("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.7)",lineHeight:1.7},children:[k.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14},children:[k.jsx(kc,{size:14,color:"#8B6E2A",style:{marginTop:4}}),k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[k.jsx("a",{href:"mailto:info@hasandogru.de",style:{color:"inherit",textDecoration:"none"},children:"info@hasandogru.de"}),k.jsx("a",{href:"mailto:Avukat.hasandogru@outlook.de",style:{color:"inherit",textDecoration:"none"},children:"Avukat.hasandogru@outlook.de"})]})]}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[k.jsx(Kl,{size:14,color:"#8B6E2A"}),k.jsx("a",{href:"https://wa.me/4917661221210","aria-label":"Kontakt per WhatsApp",style:{color:"inherit",textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:"+4917661221210"})]}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[k.jsx(Kl,{size:14,color:"#8B6E2A"}),k.jsx("span",{children:"+905332375918"})]}),k.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14},children:[k.jsx(Yu,{size:14,color:"#8B6E2A",style:{marginTop:4}}),k.jsx("span",{children:"R1 2,3, 68161 Mannheim, Deutschland"})]}),k.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10},children:[k.jsx(Yu,{size:14,color:"#8B6E2A",style:{marginTop:4}}),k.jsx("span",{children:"Aşağı Öveçler Mahallesi 1322 Cadde 45/9, Çankaya Ankara"})]})]})]})]}),k.jsx("div",{style:{marginTop:80,marginBottom:20},children:k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:40},className:"footer-disclaimer-grid",children:[k.jsxs("div",{children:[k.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Rechtlicher Hinweis"}),k.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"Die Kanzlei berät ausschließlich im türkischen Recht. Eine Beratung oder Vertretung im deutschen Recht findet nicht statt. Registriert als ausländischer Anwalt gemäß § 207 BRAO."})]}),k.jsxs("div",{lang:"tr",children:[k.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Yasal Uyarı"}),k.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir. Alman hukuku konusunda danışmanlık veya temsil hizmeti verilmemektedir. § 207 BRAO uyarınca kayıtlı yabancı avukat."})]}),k.jsxs("div",{children:[k.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Legal Notice"}),k.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"The firm provides legal advice exclusively in Turkish law. We do not provide advice or representation in German law. Registered as a foreign lawyer according to § 207 BRAO."})]})]})}),k.jsxs("div",{style:{paddingTop:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16},children:[k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[k.jsxs("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.2)"},children:["© ",o," DOGRU Kanzlei · ",r("hero_title_pre")," Hasan Dogru. ",r("footer_rights")]}),k.jsxs("a",{href:"https://nüll.com",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"4px",fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:400,color:"rgba(255,255,255,0.4)",textDecoration:"none",transition:"all 0.2s ease"},onMouseEnter:m=>{const y=m.currentTarget;y.style.color="rgba(255,255,255,0.7)"},onMouseLeave:m=>{const y=m.currentTarget;y.style.color="rgba(255,255,255,0.4)"},children:["Site made by",k.jsxs("span",{style:{display:"flex",alignItems:"center",color:"rgba(255,255,255,0.8)",fontWeight:800,marginLeft:2,letterSpacing:"-0.02em",fontFamily:"var(--font-sans)"},children:["nüll",k.jsx("span",{style:{color:"#3B82F6"},children:"."}),"com"]})]})]}),k.jsxs("div",{style:{display:"flex",gap:24},children:[[{label:t==="de"?"Impressum":t==="en"?"Legal Notice":"Yasal Bilgiler",href:s.impressum},{label:t==="de"?"Datenschutz":t==="en"?"Privacy Policy":"Gizlilik Politikası",href:s.datenschutz}].map(m=>k.jsx(kn,{to:m.href,style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.6)",textDecoration:"none",transition:"color 0.2s"},onMouseEnter:y=>y.target.style.color="rgba(255,255,255,0.4)",onMouseLeave:y=>y.target.style.color="rgba(255,255,255,0.2)",children:m.label},m.label)),k.jsx("button",{onClick:d,style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.2)",textDecoration:"none",background:"none",border:"none",padding:0,cursor:"pointer",transition:"color 0.2s"},onMouseEnter:m=>m.target.style.color="rgba(255,255,255,0.4)",onMouseLeave:m=>m.target.style.color="rgba(255,255,255,0.2)",children:t==="de"?"Cookie-Einstellungen":t==="tr"?"Çerez Ayarları":"Cookie Settings"})]})]})]}),k.jsx("style",{children:`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          .footer-disclaimer-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})}function av(){const{t:r}=la(),[t,s]=w.useState(!1);return k.jsxs("a",{href:"https://wa.me/4917661221210",target:"_blank",rel:"noopener noreferrer","aria-label":"Kontakt per WhatsApp",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),className:"fixed z-[200] flex items-center gap-3 bg-[#25D366] text-white no-underline rounded-full shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all duration-300 bottom-6 right-6 md:bottom-8 md:right-8",style:{padding:t?"14px 26px":"14px 14px",transform:t?"scale(1.05)":"scale(1)"},children:[k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:22,height:22,style:{flexShrink:0},children:k.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"12px",fontWeight:"600",letterSpacing:"0.1em",textTransform:"uppercase",whiteSpace:"nowrap",maxWidth:t?180:0,opacity:t?1:0,overflow:"hidden",transition:"max-width 0.3s ease, opacity 0.2s ease",display:"inline-block"},children:r("contact_whatsapp_btn")})]})}const Mm={de:{title:"Ihre Privatsphäre",subtitle:"Wir respektieren Ihre Daten",description:"Diese Website verwendet Cookies und ähnliche Technologien. Einige sind notwendig, andere helfen uns, Ihnen einen besseren Service zu bieten. Gemäß §25 TDDDG und DSGVO benötigen wir Ihre Einwilligung.",essential:"Technisch notwendig",essentialDesc:"Erforderlich für die Grundfunktionen der Website. Kann nicht deaktiviert werden.",functional:"Funktional",functionalDesc:"Ermöglicht externe Dienste wie Calendly (Terminbuchung) und WhatsApp.",analytics:"Analyse",analyticsDesc:"Hilft uns, die Nutzung der Website zu verstehen (z.B. Google Analytics). Aktuell nicht aktiv.",acceptAll:"Alle akzeptieren",rejectAll:"Nur notwendige",saveCustom:"Auswahl speichern",customize:"Anpassen",alwaysOn:"Immer aktiv",privacyLink:"Datenschutzerklärung",imprintLink:"Impressum"},tr:{title:"Gizliliğiniz",subtitle:"Verilerinize saygı duyuyoruz",description:"Bu web sitesi çerezler ve benzer teknolojiler kullanmaktadır. Bazıları zorunlu, bazıları daha iyi hizmet sunmamıza yardımcı olmaktadır. GDPR ve §25 TDDDG kapsamında onayınızı talep ediyoruz.",essential:"Teknik Zorunlu",essentialDesc:"Web sitesinin temel işlevleri için gereklidir. Devre dışı bırakılamaz.",functional:"İşlevsel",functionalDesc:"Calendly (randevu) ve WhatsApp gibi harici hizmetlere olanak tanır.",analytics:"Analitik",analyticsDesc:"Web sitesi kullanımını anlamamıza yardımcı olur (örn. Google Analytics). Şu anda aktif değil.",acceptAll:"Tümünü kabul et",rejectAll:"Yalnızca zorunlu",saveCustom:"Seçimi kaydet",customize:"Özelleştir",alwaysOn:"Her zaman aktif",privacyLink:"Gizlilik Politikası",imprintLink:"Künye"}};function rv(){const{showBanner:r,consent:t,acceptAll:s,rejectAll:d,saveCustom:o}=dd(),{language:h,paths:c}=la(),m=Mm[h]??Mm.de,[y,f]=w.useState(!1),[p,z]=w.useState(t.functional),[D,M]=w.useState(t.analytics);return r?k.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none",style:{paddingBottom:"0",animation:"cookieFadeIn 0.2s ease forwards"},children:[k.jsx("div",{className:"absolute inset-0 bg-black/20 pointer-events-auto"}),k.jsx("div",{className:"relative pointer-events-auto w-full max-w-4xl mx-auto bg-white shadow-2xl border-t-4 border-[#8B6E2A]",style:{maxHeight:"90vh",overflowY:"auto",animation:"cookieSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"},children:k.jsxs("div",{className:"p-8 lg:p-12",children:[k.jsx("div",{className:"flex items-start justify-between gap-6 mb-8",children:k.jsxs("div",{className:"flex items-start gap-5",children:[k.jsx("div",{className:"w-12 h-12 bg-[#1C3829] flex items-center justify-center shrink-0",children:k.jsx(gc,{size:22,className:"text-[#8B6E2A]"})}),k.jsxs("div",{children:[k.jsx("div",{className:"flex items-center gap-3 mb-1",children:k.jsx("span",{className:"font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A5F20]",children:"Doğru Kanzlei"})}),k.jsx("h2",{className:"font-serif text-2xl lg:text-3xl text-[#1C3829] font-medium leading-tight",children:m.title}),k.jsx("p",{className:"font-sans text-sm text-[#6a6a6a] mt-1",children:m.subtitle})]})]})}),k.jsx("p",{className:"font-sans text-[14px] text-[#4a4a4a] leading-relaxed mb-8 max-w-2xl",children:m.description}),k.jsxs("button",{onClick:()=>f(!y),className:"flex items-center gap-2 font-sans text-[12px] font-bold tracking-widest text-[#7A5F20] uppercase mb-6 hover:text-[#1C3829] transition-colors",children:[y?k.jsx(sb,{size:14}):k.jsx(nb,{size:14}),m.customize]}),k.jsx("div",{className:"overflow-hidden mb-8 transition-all duration-300 ease-in-out",style:{maxHeight:y?"500px":"0px",opacity:y?1:0},children:k.jsxs("div",{className:"space-y-4 border border-[#1C3829]/5 p-6 bg-[#F7F5F0]",children:[k.jsx(Ku,{title:m.essential,description:m.essentialDesc,checked:!0,disabled:!0,alwaysOnLabel:m.alwaysOn,onChange:()=>{}}),k.jsx(Ku,{title:m.functional,description:m.functionalDesc,checked:p,onChange:z}),k.jsx(Ku,{title:m.analytics,description:m.analyticsDesc,checked:D,onChange:M})]})}),k.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-6",children:[k.jsxs("button",{onClick:s,className:"flex-1 flex items-center justify-center gap-2 py-4 bg-[#1C3829] text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#8B6E2A] transition-colors",children:[k.jsx(pm,{size:14}),m.acceptAll]}),y?k.jsxs("button",{onClick:()=>o(p,D),className:"flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829] text-[#1C3829] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#F7F5F0] transition-colors",children:[k.jsx(pm,{size:14}),m.saveCustom]}):k.jsxs("button",{onClick:d,className:"flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829]/30 text-[#6a6a6a] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#1C3829] hover:text-[#1C3829] transition-colors",children:[k.jsx(fc,{size:14}),m.rejectAll]})]}),k.jsxs("div",{className:"flex gap-4 font-sans text-[11px] text-[#6a6a6a]",children:[k.jsx(kn,{to:c.datenschutz,className:"hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline",onClick:d,children:m.privacyLink}),k.jsx("span",{children:"·"}),k.jsx(kn,{to:c.impressum,className:"hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline",onClick:d,children:m.imprintLink})]})]})}),k.jsx("style",{children:`
        @keyframes cookieFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cookieSlideUp {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `})]}):null}function Ku({title:r,description:t,checked:s,disabled:d=!1,alwaysOnLabel:o,onChange:h}){return k.jsxs("div",{className:"flex items-start justify-between gap-4 py-4 border-b border-[#1C3829]/5 last:border-0",children:[k.jsxs("div",{className:"flex-grow",children:[k.jsx("div",{className:"font-sans text-[13px] font-bold text-[#1C3829] mb-1",children:r}),k.jsx("div",{className:"font-sans text-[12px] text-[#6a6a6a] leading-relaxed",children:t})]}),k.jsx("div",{className:"shrink-0 pt-1",children:d?k.jsx("span",{className:"font-sans text-[10px] font-bold tracking-widest text-[#8B6E2A] uppercase",children:o}):k.jsx("button",{role:"switch","aria-checked":s,"aria-label":r,onClick:()=>h(!s),className:`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${s?"bg-[#1C3829]":"bg-[#d4cfc6]"}`,children:k.jsx("span",{className:`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${s?"translate-x-6":"translate-x-0"}`})})})]})}function Zu({data:r,id:t="schema-org-jsonld"}){return w.useEffect(()=>{const s=t;let d=document.getElementById(s);return d||(d=document.createElement("script"),d.id=s,d.type="application/ld+json",document.head.appendChild(d)),d.textContent=JSON.stringify(r),()=>{const o=document.getElementById(s);o&&o.remove()}},[r,t]),null}function Vu(){const{pathname:r}=Hn(),t=r.startsWith("/tr")?"tr":r.startsWith("/de")?"de":r.startsWith("/en")?"en":null;return t?(w.useEffect(()=>{window.scrollTo(0,0)},[r]),w.useEffect(()=>{t&&(document.documentElement.lang=t)},[t]),k.jsx(Jb,{language:t,children:k.jsx(ev,{children:k.jsxs("div",{style:{fontFamily:"var(--font-sans)",margin:0,padding:0,minHeight:"100vh",overflowX:"hidden",display:"flex",flexDirection:"column"},children:[k.jsx(oc,{}),k.jsx(Zu,{}),k.jsx(Qb,{}),k.jsx("main",{style:{flex:1},children:k.jsx(ry,{})}),k.jsx(nv,{}),k.jsx(av,{}),k.jsx(rv,{})]})})})):k.jsx(ay,{to:"/de",replace:!0})}const Km="/assets/hero-Bn0oq0cB.avif",iv="https://calendly.com/hasand9366/30min";function tv(){const r=mt(),{t,paths:s}=la(),d=o=>{if(o.startsWith("#")){const h=document.querySelector(o);h&&h.scrollIntoView({behavior:"smooth"})}else r(o)};return k.jsxs("section",{className:"relative min-h-screen bg-[#1C3829] overflow-hidden flex flex-col justify-center pt-40 pb-0 lg:pt-0",children:[k.jsx("style",{children:`
        @keyframes heroImageIn { from { opacity: 0; } to { opacity: 1; } }
      `}),k.jsx("div",{className:"absolute inset-0 z-0",children:k.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden opacity-100 transition-opacity duration-500",children:[k.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#B8963E_1px,transparent_1px),linear-gradient(to_bottom,#B8963E_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"}),k.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1C3829]/70 via-[#1C3829]/40 to-[#1a3326] pointer-events-none z-0"}),k.jsxs("div",{className:"absolute inset-0 z-0 lg:hidden","aria-hidden":"true",children:[k.jsx("img",{src:Km,alt:"",width:622,height:528,loading:"eager",fetchPriority:"high",decoding:"sync",className:"w-full h-full object-cover object-top opacity-30 mix-blend-overlay"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/80 to-transparent"})]})]})}),k.jsx("div",{className:"hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none","aria-hidden":"true"}),k.jsxs("div",{className:"relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center flex-grow py-12 lg:py-20",children:[k.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-center z-20",children:[k.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[k.jsx("span",{className:"w-12 h-[1px] bg-[#8B6E2A]"}),k.jsx("span",{className:"font-sans text-[11px] font-bold tracking-[0.2em] text-[#7A5F20] uppercase",children:"Mannheim · Ankara"})]}),k.jsxs("h1",{className:"font-serif text-5xl md:text-[4.8rem] lg:text-[5.2rem] font-medium leading-[1] text-white mb-8 tracking-tight",children:[k.jsx("span",{className:"block text-white/80 mb-3 font-normal text-2xl md:text-4xl lg:text-[2.8rem] tracking-normal",children:t("hero_title_pre")}),t("hero_title_main")]}),k.jsx("div",{className:"w-24 h-[2px] bg-[#8B6E2A] mb-8"}),k.jsx("p",{className:"font-serif text-2xl md:text-[28px] font-light italic text-white/90 leading-snug mb-8 max-w-lg",children:t("hero_subtitle")}),k.jsx("p",{className:"font-sans text-[15px] font-light text-white/60 leading-relaxed max-w-md mb-12",children:t("hero_description")}),k.jsxs("div",{className:"flex flex-wrap gap-5",children:[k.jsxs("button",{onClick:()=>window.open(iv,"_blank"),"aria-label":t("hero_cta_primary"),className:"group relative overflow-hidden bg-[#8B6E2A] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all hover:bg-[#7A5F20] flex items-center gap-3",children:[t("hero_cta_primary"),k.jsx(tr,{className:"w-4 h-4 transition-transform group-hover:translate-x-1","aria-hidden":"true"})]}),k.jsx("button",{onClick:()=>d(s.services),"aria-label":t("hero_cta_secondary"),className:"group border border-white/20 text-white hover:border-[#8B6E2A] hover:text-[#7A5F20] font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all bg-white/5 backdrop-blur-sm",children:t("hero_cta_secondary")})]})]}),k.jsx("div",{className:"lg:col-span-7 relative hidden md:flex justify-center lg:justify-end",style:{animation:"heroImageIn 0.8s ease 0.2s both"},children:k.jsxs("div",{className:"relative w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[540px] aspect-[4/5] z-10 mt-12 lg:mt-32",children:[k.jsx("div",{className:"absolute -top-5 -right-5 w-full h-full border border-[#8B6E2A]/40 z-0 transition-transform duration-700 hover:translate-x-2 hover:-translate-y-2"}),k.jsxs("div",{className:"relative w-full h-full bg-[#152a1e] border border-white/10 overflow-hidden z-10 shadow-2xl",children:[k.jsx("img",{src:Km,alt:"Avukat Hasan Doğru - Doğru Kanzlei Mannheim",width:540,height:675,fetchPriority:"high",decoding:"async",className:"w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 hover:scale-105"}),k.jsx("div",{className:"absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/60 to-transparent opacity-90"}),k.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-8 border-t border-[#8B6E2A]/20 bg-[#1C3829]/40 backdrop-blur-md",children:[k.jsxs("div",{className:"font-serif text-2xl font-medium text-white mb-2 tracking-wide",children:[t("hero_title_pre")," Hasan Doğru"]}),k.jsx("div",{className:"font-sans text-[11px] tracking-[0.2em] uppercase text-[#7A5F20]",children:t("lawyer_role")})]})]})]})})]})]})}const lv="/assets/tanima-vd2xoGN-.avif",sv="/assets/migration-G7ApS8jw.avif",uv="/assets/inheritance-CD7T1bo4.avif",dv="/assets/custody-D3gHhtt3.avif",ov="/assets/criminal-BOLXiXxA.avif",hv=`
  .fade-in-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-in-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-in-card:nth-child(2) { transition-delay: 0.1s; }
  .fade-in-card:nth-child(3) { transition-delay: 0.2s; }
  .fade-in-card:nth-child(4) { transition-delay: 0.3s; }
  .fade-in-card:nth-child(5) { transition-delay: 0.4s; }
`;function mv(r){w.useEffect(()=>{const t=r.current;if(!t)return;const s=t.querySelectorAll(".fade-in-card"),d=new IntersectionObserver(o=>{o.forEach(h=>{h.isIntersecting&&(h.target.classList.add("visible"),d.unobserve(h.target))})},{threshold:.1});return s.forEach(o=>d.observe(o)),()=>d.disconnect()},[r])}function cv(){const{t:r,language:t,paths:s}=la(),d=w.useRef(null);mv(d);const o=xr.find(f=>f.id==="migrationsrecht"),h=xr.find(f=>f.id==="tanima-ve-tenfiz"),c=xr.find(f=>f.id==="strafrecht"),m=xr.find(f=>f.id==="erbrecht"),y=xr.find(f=>f.id==="sorgerecht");return k.jsxs("section",{id:"hizmetler",className:"bg-[#FDFCFB] py-16 md:py-24 px-6",children:[k.jsx("style",{children:hv}),k.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[k.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16",children:[k.jsxs("div",{className:"max-w-xl",children:[k.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[k.jsx("div",{className:"w-8 h-[1px] bg-[#8B6E2A]"}),k.jsx("span",{className:"font-sans text-[9px] font-bold tracking-[0.25em] text-[#7A5F20] uppercase",children:r("practice_badge")})]}),k.jsxs("h2",{className:"font-serif text-4xl md:text-5xl text-[#1C3829] leading-tight",children:[r("practice_title")," ",k.jsx("br",{})," ",k.jsx("em",{className:"italic font-normal",children:r("practice_subtitle")})]})]}),k.jsxs(kn,{to:s.services,className:"group inline-flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.2em] text-[#1C3829] uppercase border-b border-black/10 pb-1 hover:border-[#8B6E2A] transition-all",children:[r("practice_view_all")," ",k.jsx(Sb,{size:14,className:"group-hover:translate-x-1 transition-transform"})]})]}),k.jsxs("div",{ref:d,className:"grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(260px,auto)]",children:[h&&k.jsx(kn,{to:s.service(h.id),className:"md:col-span-3 group block",children:k.jsxs("div",{className:"fade-in-card h-full bg-white p-10 md:p-14 border-l-[3px] border-[#8B6E2A] flex flex-col justify-center relative transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.02] overflow-hidden",children:[k.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[k.jsx("img",{src:lv,alt:t==="tr"?"Tanıma ve Tenfiz hizmeti görseli":"Anerkennung und Vollstreckung Dienstleistungsbild",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),k.jsxs("div",{className:"relative z-10",children:[k.jsx("div",{className:"mb-8",children:(()=>{const f=h.icon;return f?k.jsx(f,{size:32,strokeWidth:1,className:"text-[#8B6E2A]","aria-hidden":"true"}):null})()}),k.jsx("h3",{className:"font-serif text-3xl md:text-4xl text-white md:text-[#1C3829] mb-6",children:t==="de"?h.title:t==="en"?h.titleEN:h.titleTR}),k.jsx("p",{className:"font-sans text-[15px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light max-w-2xl",children:t==="de"?h.descriptionDE:t==="en"?h.descriptionEN:h.description}),k.jsx("div",{className:"absolute bottom-10 right-10 text-white md:text-[#1C3829] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1",children:k.jsx(tr,{size:20,"aria-hidden":"true"})})]})]})}),o&&k.jsx(kn,{to:s.service(o.id),className:"md:col-span-1 group block",children:k.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[k.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[k.jsx("img",{src:sv,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),k.jsxs("div",{className:"relative z-10",children:[k.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:t==="de"?o.title:t==="en"?o.titleEN:o.titleTR}),k.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:t==="de"?o.descriptionDE:t==="en"?o.descriptionEN:o.description}),k.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:k.jsx(tr,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),m&&k.jsx(kn,{to:s.service(m.id),className:"md:col-span-1 group block",children:k.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[k.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[k.jsx("img",{src:uv,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),k.jsxs("div",{className:"relative z-10",children:[k.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:t==="de"?m.title:t==="en"?m.titleEN:m.titleTR}),k.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:t==="de"?m.descriptionDE:t==="en"?m.descriptionEN:m.description}),k.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:k.jsx(tr,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),y&&k.jsx(kn,{to:s.service(y.id),className:"md:col-span-1 group block",children:k.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[k.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[k.jsx("img",{src:dv,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),k.jsxs("div",{className:"relative z-10",children:[k.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:t==="de"?y.title:t==="en"?y.titleEN:y.titleTR}),k.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:t==="de"?y.descriptionDE:t==="en"?y.descriptionEN:y.description}),k.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:k.jsx(tr,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),c&&k.jsx(kn,{to:s.service(c.id),className:"md:col-span-2 group block",children:k.jsxs("div",{className:"fade-in-card h-full bg-[#1C3829] p-10 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-500 hover:brightness-110",children:[k.jsx("div",{className:"absolute right-[-20px] bottom-[-20px] opacity-[0.03] text-white pointer-events-none hidden md:block",children:(()=>{const f=c.icon;return f?k.jsx(f,{size:200,strokeWidth:.5,"aria-hidden":"true"}):null})()}),k.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[k.jsx("img",{src:ov,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),k.jsxs("div",{className:"relative z-10",children:[k.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-white mb-6",children:t==="de"?c.title:t==="en"?c.titleEN:c.titleTR}),k.jsx("p",{className:"font-sans text-[14px] text-white/70 leading-relaxed font-light max-w-md",children:t==="de"?c.descriptionDE:t==="en"?c.descriptionEN:c.description}),k.jsxs("div",{className:"mt-8 inline-flex items-center gap-3 text-[#B8963E] font-sans text-[9px] font-bold tracking-widest uppercase hover:text-white transition-all duration-500 group-hover:translate-x-1",children:[r("practice_view_detail")," ",k.jsx(tr,{size:14,"aria-hidden":"true"})]})]})]})})]})]})]})}function kv(){const{t:r}=la(),t=[{icon:Mb,title:r("why_us_point_01_title"),description:r("why_us_point_01_desc")},{icon:Bb,title:r("why_us_point_02_title"),description:r("why_us_point_02_desc")},{icon:Tb,title:r("why_us_point_03_title"),description:r("why_us_point_03_desc")},{icon:cc,title:r("why_us_point_04_title"),description:r("why_us_point_04_desc")}];return k.jsxs("section",{id:"neden-biz",className:"whyus-section",style:{background:"#1C3829",position:"relative",overflow:"hidden"},children:[k.jsx("div",{style:{position:"absolute",top:0,right:0,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(184,150,62,0.07) 0%, transparent 70%)",transform:"translate(30%, -30%)",pointerEvents:"none"}}),k.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(184,150,62,0.05) 0%, transparent 70%)",transform:"translate(-30%, 30%)",pointerEvents:"none"}}),k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",position:"relative"},children:[k.jsxs("div",{style:{textAlign:"center",marginBottom:64},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[k.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:800,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:r("why_us_badge")}),k.jsx("div",{style:{width:32,height:1,background:"#B8963E"}})]}),k.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#ffffff",lineHeight:1.15,margin:"0 0 20px",textAlign:"center"},children:[r("why_us_title"),k.jsx("br",{}),k.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:r("why_us_subtitle")})]}),k.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,fontWeight:500,color:"rgba(255,255,255,0.85)",lineHeight:1.8,maxWidth:500,margin:"0 auto"},children:r("why_us_description")})]}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:2},className:"why-grid",children:t.map((s,d)=>{const o=s.icon;return k.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"44px 40px",position:"relative",transition:"background 0.3s, border-color 0.3s"},className:`why-item-${d+1}`,onMouseEnter:h=>{h.currentTarget.style.background="rgba(255,255,255,0.06)",h.currentTarget.style.borderColor="rgba(184,150,62,0.3)"},onMouseLeave:h=>{h.currentTarget.style.background="rgba(255,255,255,0.03)",h.currentTarget.style.borderColor="rgba(255,255,255,0.06)"},children:[k.jsx("div",{style:{position:"absolute",top:28,right:32,fontFamily:"'Cormorant Garamond', serif",fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.85)",lineHeight:1,userSelect:"none"},children:String(d+1).padStart(2,"0")}),k.jsx("div",{style:{width:52,height:52,border:"1px solid rgba(184,150,62,0.35)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:28},children:k.jsx(o,{size:22,style:{color:"#B8963E",strokeWidth:1.5}})}),k.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontWeight:600,color:"#ffffff",lineHeight:1.2,marginBottom:16},children:s.title}),k.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.8)",lineHeight:1.8,margin:0},children:s.description})]},s.title)})})]}),k.jsx("style",{children:`
        .whyus-section {
          padding: 100px 32px;
        }
        @media (max-width: 768px) {
          .whyus-section {
            padding: 64px 24px;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .why-grid > div {
            grid-column: auto !important;
          }
        }
      `})]})}const Dl=[5,1,2,3,4,6];function gv(){const{t:r}=la(),[t,s]=w.useState(0),d=()=>s(c=>c===0?Dl.length-1:c-1),o=()=>s(c=>c===Dl.length-1?0:c+1),h=Dl[t];return k.jsxs("section",{className:"testimonials-section",style:{background:"#F7F5F0"},children:[k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[k.jsxs("div",{style:{marginBottom:64},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[k.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:r("testimonials_badge")})]}),k.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#1C3829",lineHeight:1.15,margin:0},children:[r("testimonials_title"),k.jsx("br",{}),k.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:r("testimonials_subtitle")})]})]}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:64,alignItems:"center"},className:"testimonial-grid",children:[k.jsxs("div",{className:"testimonial-nav",children:[k.jsx("div",{className:"testimonial-nav-list",style:{marginBottom:40},children:Dl.map((c,m)=>k.jsxs("button",{onClick:()=>s(m),className:`testimonial-nav-button ${m===t?"active":""}`,style:{display:"block",width:"100%",background:"none",border:"none",borderLeft:`2px solid ${m===t?"#B8963E":"#d4cfc6"}`,padding:"12px 20px",textAlign:"left",cursor:"pointer",marginBottom:4,transition:"border-color 0.2s"},children:[k.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:m===t?700:500,color:m===t?"#1C3829":"#9a9a8a",transition:"color 0.2s, font-weight 0.2s"},children:r(`testimonial_${c}_name`)}),k.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:11,color:m===t?"#B8963E":"#bbb8b0",marginTop:2,transition:"color 0.2s"},children:r(`testimonial_${c}_area`)})]},c))}),k.jsxs("div",{className:"testimonial-nav-controls",style:{display:"flex",gap:8},children:[k.jsx("button",{onClick:d,"aria-label":"Vorheriges Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:c=>{var m;c.currentTarget.style.borderColor="#1C3829",c.currentTarget.style.background="#1C3829",(m=c.currentTarget.querySelector("svg"))==null||m.setAttribute("color","#fff")},onMouseLeave:c=>{var m;c.currentTarget.style.borderColor="#d4cfc6",c.currentTarget.style.background="none",(m=c.currentTarget.querySelector("svg"))==null||m.setAttribute("color","#1C3829")},children:k.jsx(rb,{size:18,color:"#1C3829"})}),k.jsx("button",{onClick:o,"aria-label":"Nächstes Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:c=>{var m;c.currentTarget.style.borderColor="#1C3829",c.currentTarget.style.background="#1C3829",(m=c.currentTarget.querySelector("svg"))==null||m.setAttribute("color","#fff")},onMouseLeave:c=>{var m;c.currentTarget.style.borderColor="#d4cfc6",c.currentTarget.style.background="none",(m=c.currentTarget.querySelector("svg"))==null||m.setAttribute("color","#1C3829")},children:k.jsx(tb,{size:18,color:"#1C3829"})})]})]}),k.jsxs("div",{className:"testimonial-active-card",style:{background:"#ffffff",position:"relative",borderLeft:"3px solid #B8963E"},children:[k.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:120,fontWeight:400,color:"#f0ece4",lineHeight:.7,marginBottom:24,userSelect:"none"},children:'"'}),k.jsx("div",{style:{display:"flex",gap:4,marginBottom:24},children:Array.from({length:5}).map((c,m)=>k.jsx(_b,{size:14,style:{fill:"#B8963E",color:"#B8963E"}},m))}),k.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(20px, 2.5vw, 22px)",fontWeight:400,fontStyle:"italic",color:"#2a2a2a",lineHeight:1.6,marginBottom:36},children:['"',r(`testimonial_${h}_text`),'"']}),k.jsxs("div",{style:{borderTop:"1px solid #f0ece4",paddingTop:24},children:[k.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,color:"#1C3829",letterSpacing:"0.04em"},children:r(`testimonial_${h}_name`)}),k.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:600,color:"#555555",marginTop:4,letterSpacing:"0.06em"},children:r(`testimonial_${h}_area`)})]})]},t)]})]}),k.jsx("style",{children:`
        .testimonials-section {
          padding: 100px 32px;
        }
        .testimonial-active-card {
          padding: 56px 52px;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 64px 24px 100px 24px;
          }
          .testimonial-grid {
            display: flex !important;
            flex-direction: column-reverse;
            gap: 40px !important;
          }
          .testimonial-active-card {
            padding: 32px 24px;
            border-left: none !important;
            border-top: 3px solid #B8963E;
          }
          .testimonial-nav-list {
            display: flex;
            overflow-x: auto;
            padding-bottom: 16px;
            margin-bottom: 24px !important;
            gap: 20px;
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }
          .testimonial-nav-list::-webkit-scrollbar {
            display: none;
          }
          .testimonial-nav-button {
            border-left: none !important;
            border-bottom: 2px solid #e5e5e5 !important;
            min-width: 180px;
            flex-shrink: 0;
            margin-bottom: 0 !important;
            padding: 12px 0 16px 0 !important;
            scroll-snap-align: start;
            display: flex !important;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            white-space: normal;
          }
          .testimonial-nav-button.active {
            border-bottom-color: #B8963E !important;
          }
          .testimonial-nav-controls {
            justify-content: center;
            margin-top: 16px;
          }
        }
      `})]})}function fv(){const{t:r,language:t,paths:s}=la();return k.jsxs("section",{id:"blog",className:"hidden md:block",style:{background:"#ffffff",padding:"100px 32px"},children:[k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:64,flexWrap:"wrap",gap:24},children:[k.jsxs("div",{children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[k.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:15,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:r("blog_badge")})]}),k.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#1C3829",lineHeight:1.15,margin:0},children:[r("blog_title"),k.jsx("br",{}),k.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:r("blog_subtitle")})]})]}),k.jsxs(kn,{to:s.blog,"aria-label":t==="de"?"Alle Blogbeiträge lesen":t==="en"?"Read all blog posts":"Tüm blog yazılarını oku",style:{fontFamily:"var(--font-sans)",fontSize:12,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#1C3829",textDecoration:"none",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #1C3829",paddingBottom:2,transition:"color 0.2s, border-color 0.2s"},onMouseEnter:d=>{d.currentTarget.style.color="#B8963E",d.currentTarget.style.borderColor="#B8963E"},onMouseLeave:d=>{d.currentTarget.style.color="#1C3829",d.currentTarget.style.borderColor="#1C3829"},children:[t==="de"?"Alle Beiträge lesen":t==="en"?"Read all posts":"Tüm yazıları oku",k.jsx(tr,{size:14})]})]}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32},className:"blog-grid",children:ud.slice(0,3).map(d=>k.jsx("article",{className:"text-left",children:k.jsxs(kn,{to:s.blogPost(d.slug),className:"group block no-justify",style:{textDecoration:"none",textAlign:"left"},children:[k.jsx("div",{style:{overflow:"hidden",marginBottom:24,height:220,background:"#e8e4dc"},children:k.jsx("img",{src:d.image,alt:t==="de"?d.titleDE:t==="en"?d.titleEN||d.titleDE:d.titleTR,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},className:"group-hover:scale-[1.04]"})}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14,textAlign:"left"},children:[k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#B8963E"},children:t==="de"?d.categoryDE:t==="en"?d.categoryEN||d.categoryDE:d.category}),k.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#d4cfc6",display:"inline-block"}}),k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:12,fontWeight:400,color:"#888680"},children:t==="de"?d.dateDE:t==="en"?d.dateEN||d.dateDE:d.dateTR})]}),k.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:"#1C3829",lineHeight:1.3,marginBottom:12,transition:"color 0.2s",textAlign:"left"},className:"group-hover:!text-[#B8963E] no-justify",children:t==="de"?d.titleDE:t==="en"?d.titleEN||d.titleDE:d.titleTR}),k.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:"#5a5a5a",lineHeight:1.7,marginBottom:20,textAlign:"left"},className:"no-justify",children:t==="de"?d.excerptDE:t==="en"?d.excerptEN||d.excerptDE:d.excerptTR}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"'Lato', sans-serif",fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#1C3829"},children:[k.jsx("span",{children:r("blog_read_more")}),k.jsx(tr,{size:13})]})]})},d.slug))})]}),k.jsx("style",{children:`
        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})}function yv(){const{t:r,language:t}=la(),{consent:s,openSettings:d}=dd(),o=[{city:"Mannheim",country:t==="tr"?"Almanya":t==="en"?"Germany":"Deutschland",address:`R1 2,3
68161 Mannheim, Deutschland`,phone:"+4917661221210",emails:["info@hasandogru.de","Avukat.hasandogru@outlook.de"],hours:t==="tr"?"Pzt–Cmt: 09:00 – 18:00":t==="en"?"Mon–Sat: 09:00 – 18:00":"Mo–Sa: 09:00 – 18:00",mapLink:"https://www.google.com/maps/search/?api=1&query=R1+2+3+68161+Mannheim+Deutschland"},{city:"Ankara",country:t==="tr"?"Türkiye":t==="en"?"Turkey":"Türkei",address:`Aşağı Öveçler Mahallesi 1322 Cadde 45/9
Çankaya / Ankara, Türkiye`,phone:"+905332375918",emails:["info@hasandogru.de","Avukat.hasandogru@outlook.de"],hours:t==="tr"?"Pzt–Cum: 09:00 – 18:00":t==="en"?"Mon–Fri: 09:00 – 18:00":"Mo–Fr: 09:00 – 18:00",mapLink:"https://www.google.com/maps/search/?api=1&query=Aşağı+Öveçler+Mahallesi+1322+Cadde+45/9+Çankaya+Ankara+Türkiye"}];return k.jsxs("section",{id:"iletisim",className:"contact-section",style:{background:"#ffffff"},children:[k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[k.jsxs("div",{style:{textAlign:"center",marginBottom:80},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[k.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),k.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:r("contact_badge")}),k.jsx("div",{style:{width:32,height:1,background:"#B8963E"}})]}),k.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 4vw, 52px)",fontWeight:500,color:"#1C3829",lineHeight:1.1,margin:"0 0 16px"},children:[r("contact_title"),k.jsx("br",{}),k.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:r("contact_subtitle")})]}),k.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:16,color:"#6a6a6a",lineHeight:1.8,maxWidth:600,margin:"0 auto"},children:r("contact_description")})]}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"},className:"contact-grid",children:[k.jsxs("div",{style:{background:"#F7F5F0",padding:48,borderLeft:"4px solid #B8963E"},children:[k.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:32,color:"#1C3829",marginBottom:16},children:r("contact_direct_title")}),k.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,color:"#6a6a6a",marginBottom:40,lineHeight:1.6},children:r("contact_direct_p")}),k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[s.functional?k.jsxs("a",{href:"https://calendly.com/hasand9366/30min",target:"_blank",rel:"noopener noreferrer","aria-label":r("contact_calendly_btn"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#1C3829",color:"#ffffff",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:m=>m.currentTarget.style.background="#8B6E2A",onMouseLeave:m=>m.currentTarget.style.background="#1C3829",children:[k.jsx(zm,{size:18}),r("contact_calendly_btn")]}):k.jsxs("button",{onClick:d,"aria-label":"Cookie-Einstellungen öffnen",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#e8e4dc",color:"#6a6a6a",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:"none",cursor:"pointer",width:"100%"},children:[k.jsx(fb,{size:18}),t==="de"?"Cookie-Einwilligung erforderlich":t==="en"?"Cookie consent required":"Çerez izni gerekli"]}),k.jsxs("a",{href:"https://wa.me/4917661221210",target:"_blank",rel:"noopener noreferrer","aria-label":"Kontakt per WhatsApp",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#ffffff",border:"1px solid #1C3829",color:"#1C3829",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:m=>{m.currentTarget.style.background="#1C3829",m.currentTarget.style.color="#ffffff"},onMouseLeave:m=>{m.currentTarget.style.background="#ffffff",m.currentTarget.style.color="#1C3829"},children:[k.jsx(Kl,{size:18}),r("contact_whatsapp_btn")]})]}),k.jsxs("div",{style:{marginTop:48,borderTop:"1px solid #d4cfc6",paddingTop:32},children:[k.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:"#B8963E",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:16},children:r("contact_languages_badge")}),k.jsx("div",{style:{display:"flex",gap:12},children:["Türkçe","Deutsch","English"].map(m=>k.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,color:"#1C3829",background:"#ffffff",padding:"6px 16px",border:"1px solid #e0ddd5"},children:m},m))})]})]}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:32},children:o.map((m,y)=>k.jsxs("div",{style:{paddingBottom:y===0?32:0,borderBottom:y===0?"1px solid #f0ece4":"none"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:16},children:[k.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:500,color:"#1C3829",margin:0},children:m.city}),k.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:11,color:"#B8963E",textTransform:"uppercase",letterSpacing:"0.1em"},children:m.country})]}),k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[k.jsxs("div",{style:{display:"flex",gap:12},children:[k.jsx(Yu,{size:16,color:"#B8963E",style:{flexShrink:0,marginTop:4}}),k.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#6a6a6a",lineHeight:1.6,whiteSpace:"pre-line"},children:m.address})]}),k.jsxs("div",{style:{display:"flex",gap:12},children:[k.jsx(Kl,{size:16,color:"#B8963E",style:{flexShrink:0}}),k.jsx("a",{href:`tel:${m.phone.replace(/\s/g,"")}`,style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#4a4a4a",textDecoration:"none",fontWeight:500},children:m.phone})]}),k.jsxs("div",{style:{display:"flex",gap:12},children:[k.jsx(kc,{size:16,color:"#B8963E",style:{flexShrink:0}}),k.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:m.emails.map(f=>k.jsx("a",{href:`mailto:${f}`,style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#4a4a4a",textDecoration:"none",transition:"color 0.2s ease"},onMouseEnter:p=>p.currentTarget.style.color="#B8963E",onMouseLeave:p=>p.currentTarget.style.color="#4a4a4a",children:f},f))})]}),k.jsxs("div",{style:{display:"flex",gap:12},children:[k.jsx(zm,{size:16,color:"#B8963E",style:{flexShrink:0}}),k.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#6a6a6a"},children:m.hours})]})]})]},y))})]})]}),k.jsx("style",{children:`
        .contact-section {
          padding: 120px 32px;
        }
        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 24px;
          }
        }
      `})]})}const tt="https://www.hasandogru.de";function Sn(r,t,s=!1){const d=s?"name":"property";let o=document.querySelector(`meta[${d}="${r}"]`);o||(o=document.createElement("meta"),o.setAttribute(d,r),document.head.appendChild(o)),o.content=t}function Ba(r,t,s={}){const d=Object.entries(s).map(([h,c])=>`[${h}="${c}"]`).join("");let o=document.querySelector(`link[rel="${r}"]${d}`);o||(o=document.createElement("link"),o.rel=r,Object.entries(s).forEach(([h,c])=>o.setAttribute(h,c)),document.head.appendChild(o)),o.href=t}function bv(r){w.useEffect(()=>{var y;document.title=r.title,Sn("description",r.description,!0),r.keywords&&Sn("keywords",r.keywords,!0);const t=r.canonical||window.location.origin+window.location.pathname;Ba("canonical",t),Sn("og:title",r.title),Sn("og:description",r.description),Sn("og:url",t),Sn("og:type",r.ogType||"website");const s={de:"de_DE",tr:"tr_TR",en:"en_US"};Sn("og:locale",s[r.lang]);const d=Object.entries(s).filter(([f])=>f!==r.lang).map(([,f])=>f);document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(f=>f.remove()),d.forEach(f=>{const p=document.createElement("meta");p.setAttribute("property","og:locale:alternate"),p.content=f,document.head.appendChild(p)}),Sn("og:site_name","Doğru Kanzlei");const o=`${tt}/logo.png`,h=r.ogImage||o;Sn("og:image",h),Sn("twitter:card","summary_large_image",!0),Sn("twitter:title",r.title,!0),Sn("twitter:description",r.description,!0),Sn("twitter:image",h,!0),r.alternateLangs&&(r.alternateLangs.forEach(f=>{Ba("alternate",f.href,{hreflang:f.lang})}),Ba("alternate",t,{hreflang:r.lang})),r.lang==="de"?(Ba("alternate",t,{hreflang:"de-DE"}),Ba("alternate",t,{hreflang:"de-CH"}),Ba("alternate",t,{hreflang:"de-AT"})):r.lang==="en"&&(Ba("alternate",t,{hreflang:"en-GB"}),Ba("alternate",t,{hreflang:"en-US"}));const c=(y=r.alternateLangs)==null?void 0:y.find(f=>f.lang==="de"),m=r.xDefault||(r.lang==="de"?t:c==null?void 0:c.href);m&&Ba("alternate",m,{hreflang:"x-default"}),r.noindex?Sn("robots","noindex, nofollow",!0):Sn("robots","index, follow",!0)},[r.title,r.description,r.canonical,r.ogImage,r.ogType,r.lang,r.alternateLangs,r.noindex])}function vv(r=!0){w.useEffect(()=>{const t="prerender-ready",s=setTimeout(()=>{if(!document.getElementById(t)){const d=document.createElement("div");d.id=t,d.style.display="none",document.body.appendChild(d),document.dispatchEvent(new Event("render-event"))}},2e3);return()=>clearTimeout(s)},[r])}const pv={"@context":"https://schema.org","@type":["LegalService","LocalBusiness"],name:"Doğru Kanzlei",alternateName:"Avukat Hasan Doğru",url:"https://hasandogru.de",logo:"https://www.hasandogru.de/assets/logo-eRLlm_XN.avif",image:"https://www.hasandogru.de/assets/hero-Bn0oq0cB.avif",description:"Auf türkisches Recht spezialisierte Kanzlei in Mannheim. Beratung in Erbrecht, Familienrecht, Strafrecht und Migrationsrecht zwischen Deutschland, der Schweiz und der Türkei.",areaServed:["DE","CH","AT","TR"],availableLanguage:["Turkish","German"],priceRange:"$$",telephone:"+4917661221210",email:"info@hasandogru.de",address:{"@type":"PostalAddress",streetAddress:"R1 2,3",addressLocality:"Mannheim",postalCode:"68161",addressCountry:"DE"},geo:{"@type":"GeoCoordinates",latitude:49.4875,longitude:8.466},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"18:00"}],aggregateRating:{"@type":"AggregateRating",ratingValue:"5.0",reviewCount:"70",bestRating:"5",worstRating:"1"},sameAs:["https://maps.app.goo.gl/GujBeApHPpj1Vzjd9","https://www.anwalt.de/hasan-dogru","https://kilimgazetesi.de/haber/avukat-hasan-dogru-mannheim-da-turk-hukukunda-kopru-gorevi-ustleniyor"]},zv={"@context":"https://schema.org","@type":"Person",name:"Hasan Doğru",jobTitle:"Rechtsanwalt / Avukat",worksFor:{"@type":"LegalService",name:"Doğru Kanzlei"},memberOf:[{"@type":"Organization",name:"Ankara Barosu",identifier:"47068"},{"@type":"Organization",name:"Rechtsanwaltskammer Karlsruhe"}],knowsLanguage:["Turkish","German","English"],url:"https://hasandogru.de/de/ueber-uns",image:"https://www.hasandogru.de/assets/hero-Bn0oq0cB.avif"};function _u(){const{language:r}=la();return vv(),bv({title:r==="de"?"Türkischer Anwalt Mannheim | Avukat Hasan Doğru | Doğru Kanzlei":r==="tr"?"Türk Avukat Mannheim | Mannheim Türk Avukatlar | Avukat Hasan Doğru":"Turkish Lawyer Mannheim | Legal Advice Turkish Law | Hasan Doğru",description:r==="de"?"Türkischer Anwalt in Mannheim für türkisches Recht. Avukat Hasan Doğru berät türkischstämmige Familien in Deutschland und der Schweiz zu Scheidung, Erbrecht und türkischem Familienrecht — ohne Reise in die Türkei.":r==="tr"?"Almanya ve İsviçre'deki Türk avukatı arıyorsanız doğru yerdesiniz. Avukat Hasan Doğru, boşanma, miras ve Türk hukuku konularında Almanya'dan hizmet verir. Türkiye'ye seyahat gerekmez.":"Specialized attorney for Turkish law in Mannheim. Hasan Doğru provides legal counsel on divorce, inheritance, and criminal law between Germany and Turkey — without travel required.",lang:r,canonical:`${tt}/${r}`,alternateLangs:[{lang:"de",href:`${tt}/de`},{lang:"tr",href:`${tt}/tr`},{lang:"en",href:`${tt}/en`}]}),k.jsxs(k.Fragment,{children:[k.jsx(Zu,{data:pv}),k.jsx(Zu,{data:zv,id:"schema-org-person"}),k.jsx(tv,{}),k.jsx(cv,{}),k.jsx(kv,{}),k.jsx(gv,{}),k.jsx(fv,{}),k.jsx(yv,{})]})}const Nu=w.lazy(()=>ur(()=>import("./Hizmetler-p99p6MLt.js"),__vite__mapDeps([0,1])).then(r=>({default:r.Hizmetler}))),Iu=w.lazy(()=>ur(()=>import("./ServiceDetail-sEHHQ58e.js"),__vite__mapDeps([2,3,1,4])).then(r=>({default:r.ServiceDetail}))),Cu=w.lazy(()=>ur(()=>import("./BlogPage-Dk0lzii8.js"),[]).then(r=>({default:r.BlogPage}))),Pu=w.lazy(()=>ur(()=>import("./BlogPost-4ipl7TP-.js"),__vite__mapDeps([5,3,1,4])).then(r=>({default:r.BlogPost}))),Wu=w.lazy(()=>ur(()=>import("./Datenschutz-D4pWZZhv.js"),[]).then(r=>({default:r.Datenschutz}))),Fu=w.lazy(()=>ur(()=>import("./Impressum-DEw0OtAD.js"),[]).then(r=>({default:r.Impressum}))),Hu=w.lazy(()=>ur(()=>import("./AboutPage-CW_4GriB.js"),[]).then(r=>({default:r.AboutPage}))),Tv=w.lazy(()=>ur(()=>import("./NotFound-BGGv37yT.js"),__vite__mapDeps([6,4])).then(r=>({default:r.NotFound}))),Xe=r=>t=>k.jsx(w.Suspense,{fallback:k.jsx("div",{className:"min-h-screen bg-[#1C3829]"}),children:k.jsx(r,{...t})}),wv=xy([{path:"/",loader:()=>Y("/de")},{path:"/familienrecht",loader:()=>Y("/de/leistungen/familienrecht")},{path:"/erbrecht",loader:()=>Y("/de/leistungen/erbrecht")},{path:"/immobilienrecht",loader:()=>Y("/de/leistungen/immobilienrecht")},{path:"/scheidungsverfahren",loader:()=>Y("/de/leistungen")},{path:"/schuldrecht",loader:()=>Y("/de/leistungen")},{path:"/kontakt",loader:()=>Y("/de/#iletisim")},{path:"/meine-vision",loader:()=>Y("/de/#hakkimizda")},{path:"/blog",loader:()=>Y("/de/blog")},{path:"/blogartikel",loader:()=>Y("/de/blog")},{path:"/datenschutz",loader:()=>Y("/de/datenschutz")},{path:"/impressum",loader:()=>Y("/de/impressum")},{path:"/book-online",loader:()=>Y("/de/#iletisim")},{path:"/treffen",loader:()=>Y("/de/#iletisim")},{path:"/schlüsselthemen",loader:()=>Y("/de/leistungen")},{path:"/en/team-3",loader:()=>Y("/de/ueber-uns")},{path:"/team-3",loader:()=>Y("/de/ueber-uns")},{path:"/en/general-5",loader:()=>Y("/de")},{path:"/kopyası-familienrecht",loader:()=>Y("/de/leistungen/familienrecht")},{path:"/contact-5",loader:()=>Y("/de/#iletisim")},{path:"/contact-8",loader:()=>Y("/de/#iletisim")},{path:"/registration",loader:()=>Y("/de")},{path:"/tr/familienrecht",loader:()=>Y("/tr/hizmetler/aile-hukuku")},{path:"/tr/immobilienrecht",loader:()=>Y("/tr/hizmetler/gayrimenkul-hukuku")},{path:"/tr/schuldrecht",loader:()=>Y("/tr/hizmetler")},{path:"/tr/schlüsselthemen",loader:()=>Y("/tr/hizmetler")},{path:"/kopyası-internati",loader:()=>Y("/de/leistungen/immobilienrecht")},{path:"/tr/hizmetler/erbrecht",loader:()=>Y("/tr/hizmetler/miras-hukuku")},{path:"/tr/hizmetler/familienrecht",loader:()=>Y("/tr/hizmetler/aile-hukuku")},{path:"/tr/hizmetler/immobilienrecht",loader:()=>Y("/tr/hizmetler/gayrimenkul-hukuku")},{path:"/tr/hizmetler/migrationsrecht",loader:()=>Y("/tr/hizmetler/goc-hukuku")},{path:"/tr/hizmetler/sorgerecht",loader:()=>Y("/tr/hizmetler/velayet")},{path:"/tr/hizmetler/strafrecht",loader:()=>Y("/tr/hizmetler/ceza-hukuku")},{path:"/tr/hizmetler/vollmacht-apostille",loader:()=>Y("/tr/hizmetler/vekaletname-ve-apostil")},{path:"/de/blog/vekaletname-rehberi-almanya",loader:()=>Y("/de/blog/tuerkische-vekaletname-deutschland")},{path:"/de/blog/veraset-ilami-nedir",loader:()=>Y("/de/blog/erbrecht-leitfaden-tuerkei")},{path:"/de/blog/vorladung-haftbefehl-tuerkel",loader:()=>Y("/de/blog/vorladung-haftbefehl-tuerkei")},{path:"/author/*",loader:()=>Y("/de/ueber-uns")},{path:"/category/*",loader:()=>Y("/de/blog")},{path:"/tag/*",loader:()=>Y("/de/blog")},{path:"/blog/page/*",loader:()=>Y("/de/blog")},{path:"/about",loader:()=>Y("/de/ueber-uns")},{path:"/about/*",loader:()=>Y("/de/ueber-uns")},{path:"/contact",loader:()=>Y("/de/#iletisim")},{path:"/contact-2",loader:()=>Y("/de/#iletisim")},{path:"/en/about",loader:()=>Y("/en/about-us")},{path:"/en/service",loader:()=>Y("/en/services")},{path:"/en/blog",loader:()=>Y("/en/blog")},{path:"/en/blog/*",loader:()=>Y("/en/blog")},{path:"/en/impressum",loader:()=>Y("/en/legal-notice")},{path:"/en/contact-2",loader:()=>Y("/en/#iletisim")},{path:"/tr/contact-2",loader:()=>Y("/tr/#iletisim")},{path:"/de/contact-2",loader:()=>Y("/de/#iletisim")},{path:"/de/about",loader:()=>Y("/de/ueber-uns")},{path:"/de/service",loader:()=>Y("/de/leistungen")},{path:"/de/category/*",loader:()=>Y("/de/blog")},{path:"/de/tag/*",loader:()=>Y("/de/blog")},{path:"/general-clean",loader:()=>Y("/de")},{path:"/tr/blogartikel",loader:()=>Y("/tr/blog")},{path:"/tr/arbeitsrecht",loader:()=>Y("/tr/hizmetler")},{path:"/de/arbeitsrecht",loader:()=>Y("/de/leistungen")},{path:"/arbeitsrecht",loader:()=>Y("/de/leistungen")},{path:"/en/internationales-erbrecht",loader:()=>Y("/de/leistungen/erbrecht")},{path:"/en/arbeitsrecht",loader:()=>Y("/de/leistungen")},{path:"/en/erbrecht",loader:()=>Y("/de/leistungen/erbrecht")},{path:"/tr/book-online",loader:()=>Y("/tr/#iletisim")},{path:"/en/grundstucksrecht",loader:()=>Y("/de/leistungen/immobilienrecht")},{path:"/kopyası-familienrecht-1",loader:()=>Y("/de/leistungen/familienrecht")},{path:"/en/familienrecht",loader:()=>Y("/de/leistungen/familienrecht")},{path:"/en/meine-vision",loader:()=>Y("/de/ueber-uns")},{path:"/grundstucksrecht",loader:()=>Y("/de/leistungen/immobilienrecht")},{path:"/en/kopyası-arbeitsrecht-im-türkischen-r",loader:()=>Y("/de/leistungen")},{path:"/en/kopyası-home-1",loader:()=>Y("/de")},{path:"/en/erbschein",loader:()=>Y("/de/leistungen/erbrecht")},{path:"/category/service/*",loader:()=>Y("/de/leistungen")},{path:"/en/category/service/*",loader:()=>Y("/de/leistungen")},{path:"/xmlrpc.php",loader:()=>Y("/de")},{path:"/feed",loader:()=>Y("/de/blog")},{path:"/comments/feed",loader:()=>Y("/de/blog")},{path:"/en/contact",loader:()=>Y("/en/#iletisim")},{path:"/de",Component:Vu,children:[{index:!0,Component:_u},{path:"leistungen",Component:Xe(Nu)},{path:"leistungen/:id",Component:Xe(Iu)},{path:"blog",Component:Xe(Cu)},{path:"blog/:slug",Component:Xe(Pu)},{path:"datenschutz",Component:Xe(Wu)},{path:"impressum",Component:Xe(Fu)},{path:"ueber-uns",Component:Xe(Hu)}]},{path:"/tr",Component:Vu,children:[{index:!0,Component:_u},{path:"hizmetler",Component:Xe(Nu)},{path:"hizmetler/:id",Component:Xe(Iu)},{path:"blog",Component:Xe(Cu)},{path:"blog/:slug",Component:Xe(Pu)},{path:"gizlilik-politikasi",Component:Xe(Wu)},{path:"yasal-bilgiler",Component:Xe(Fu)},{path:"hakkimizda",Component:Xe(Hu)}]},{path:"/en",Component:Vu,children:[{index:!0,Component:_u},{path:"services",Component:Xe(Nu)},{path:"services/:id",Component:Xe(Iu)},{path:"blog",Component:Xe(Cu)},{path:"blog/:slug",Component:Xe(Pu)},{path:"privacy-policy",Component:Xe(Wu)},{path:"legal-notice",Component:Xe(Fu)},{path:"about-us",Component:Xe(Hu)}]},{path:"*",Component:Xe(Tv)}]);function Sv(){return k.jsx(Xf,{router:wv})}hg.createRoot(document.getElementById("root")).render(k.jsx(Sv,{}));export{tr as A,zm as C,kn as L,tt as S,vv as a,bv as b,Fe as c,Ev as d,Zu as e,ud as f,nb as g,k as j,w as r,xr as s,la as u};
