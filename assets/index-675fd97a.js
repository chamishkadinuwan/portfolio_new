(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wl={exports:{}},ti={},Ql={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),lu=Symbol.for("react.portal"),su=Symbol.for("react.fragment"),cu=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),fu=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.memo"),hu=Symbol.for("react.lazy"),Ta=Symbol.iterator;function vu(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gl=Object.assign,Xl={};function on(e,t,n){this.props=e,this.context=t,this.refs=Xl,this.updater=n||Kl}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jl(){}Jl.prototype=on.prototype;function Yo(e,t,n){this.props=e,this.context=t,this.refs=Xl,this.updater=n||Kl}var Bo=Yo.prototype=new Jl;Bo.constructor=Yo;Gl(Bo,on.prototype);Bo.isPureReactComponent=!0;var Da=Array.isArray,Zl=Object.prototype.hasOwnProperty,Uo={current:null},ql={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Zl.call(t,r)&&!ql.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gn,type:e,key:o,ref:l,props:i,_owner:Uo.current}}function xu(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ho(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function yu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ra=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yu(""+e.key):t.toString(36)}function yr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gn:case lu:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bi(l,0):r,Da(i)?(n="",e!=null&&(n=e.replace(Ra,"$&/")+"/"),yr(i,t,n,"",function(p){return p})):i!=null&&(Ho(i)&&(i=xu(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ra,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Da(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+bi(o,s);l+=yr(o,t,n,c,i)}else if(c=vu(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+bi(o,s++),l+=yr(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function nr(e,t,n){if(e==null)return e;var r=[],i=0;return yr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},br={transition:null},ku={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:br,ReactCurrentOwner:Uo};function ts(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Ho(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=on;I.Fragment=su;I.Profiler=uu;I.PureComponent=Yo;I.StrictMode=cu;I.Suspense=mu;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ku;I.act=ts;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gl({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Uo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Zl.call(t,c)&&!ql.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var p=0;p<c;p++)s[p]=arguments[p+2];r.children=s}return{$$typeof:Gn,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:fu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:du,_context:e},e.Consumer=e};I.createElement=es;I.createFactory=function(e){var t=es.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:pu,render:e}};I.isValidElement=Ho;I.lazy=function(e){return{$$typeof:hu,_payload:{_status:-1,_result:e},_init:bu}};I.memo=function(e,t){return{$$typeof:gu,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};I.unstable_act=ts;I.useCallback=function(e,t){return se.current.useCallback(e,t)};I.useContext=function(e){return se.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return se.current.useDeferredValue(e)};I.useEffect=function(e,t){return se.current.useEffect(e,t)};I.useId=function(){return se.current.useId()};I.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return se.current.useMemo(e,t)};I.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};I.useRef=function(e){return se.current.useRef(e)};I.useState=function(e){return se.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return se.current.useTransition()};I.version="18.3.1";Ql.exports=I;var C=Ql.exports;const wu=au(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju=C,Nu=Symbol.for("react.element"),Su=Symbol.for("react.fragment"),Eu=Object.prototype.hasOwnProperty,zu=ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cu={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Eu.call(t,r)&&!Cu.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Nu,type:e,key:o,ref:l,props:i,_owner:zu.current}}ti.Fragment=Su;ti.jsx=ns;ti.jsxs=ns;Wl.exports=ti;var a=Wl.exports,Qi={},rs={exports:{}},ye={},is={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,F){var _=S.length;S.push(F);e:for(;0<_;){var V=_-1>>>1,X=S[V];if(0<i(X,F))S[V]=F,S[_]=X,_=V;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var F=S[0],_=S.pop();if(_!==F){S[0]=_;e:for(var V=0,X=S.length,er=X>>>1;V<er;){var ht=2*(V+1)-1,yi=S[ht],vt=ht+1,tr=S[vt];if(0>i(yi,_))vt<X&&0>i(tr,yi)?(S[V]=tr,S[vt]=_,V=vt):(S[V]=yi,S[ht]=_,V=ht);else if(vt<X&&0>i(tr,_))S[V]=tr,S[vt]=_,V=vt;else break e}}return F}function i(S,F){var _=S.sortIndex-F.sortIndex;return _!==0?_:S.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],p=[],v=1,g=null,h=3,y=!1,k=!1,u=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var F=n(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=S)r(p),F.sortIndex=F.expirationTime,t(c,F);else break;F=n(p)}}function x(S){if(u=!1,m(S),!k)if(n(c)!==null)k=!0,vi(j);else{var F=n(p);F!==null&&xi(x,F.startTime-S)}}function j(S,F){k=!1,u&&(u=!1,f(P),P=-1),y=!0;var _=h;try{for(m(F),g=n(c);g!==null&&(!(g.expirationTime>F)||S&&!ze());){var V=g.callback;if(typeof V=="function"){g.callback=null,h=g.priorityLevel;var X=V(g.expirationTime<=F);F=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(c)&&r(c),m(F)}else r(c);g=n(c)}if(g!==null)var er=!0;else{var ht=n(p);ht!==null&&xi(x,ht.startTime-F),er=!1}return er}finally{g=null,h=_,y=!1}}var E=!1,z=null,P=-1,H=5,L=-1;function ze(){return!(e.unstable_now()-L<H)}function cn(){if(z!==null){var S=e.unstable_now();L=S;var F=!0;try{F=z(!0,S)}finally{F?un():(E=!1,z=null)}}else E=!1}var un;if(typeof d=="function")un=function(){d(cn)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,ou=Aa.port2;Aa.port1.onmessage=cn,un=function(){ou.postMessage(null)}}else un=function(){w(cn,0)};function vi(S){z=S,E||(E=!0,un())}function xi(S,F){P=w(function(){S(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,vi(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var _=h;h=F;try{return S()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,F){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var _=h;h=S;try{return F()}finally{h=_}},e.unstable_scheduleCallback=function(S,F,_){var V=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?V+_:V):_=V,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=_+X,S={id:v++,callback:F,priorityLevel:S,startTime:_,expirationTime:X,sortIndex:-1},_>V?(S.sortIndex=_,t(p,S),n(c)===null&&S===n(p)&&(u?(f(P),P=-1):u=!0,xi(x,_-V))):(S.sortIndex=X,t(c,S),k||y||(k=!0,vi(j))),S},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(S){var F=h;return function(){var _=h;h=F;try{return S.apply(this,arguments)}finally{h=_}}}})(os);is.exports=os;var Pu=is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu=C,xe=Pu;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var as=new Set,In={};function Ft(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(In[e]=t,e=0;e<t.length;e++)as.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ki=Object.prototype.hasOwnProperty,_u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$a={},Oa={};function Iu(e){return Ki.call(Oa,e)?!0:Ki.call($a,e)?!1:_u.test(e)?Oa[e]=!0:($a[e]=!0,!1)}function Lu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mu(e,t,n,r){if(t===null||typeof t>"u"||Lu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vo=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vo,Wo);te[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vo,Wo);te[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vo,Wo);te[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,n,r){var i=te.hasOwnProperty(t)?te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mu(t,n,i,r)&&(n=null),r||i===null?Iu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Fu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),ls=Symbol.for("react.provider"),ss=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Xi=Symbol.for("react.suspense"),Ji=Symbol.for("react.suspense_list"),Xo=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),cs=Symbol.for("react.offscreen"),Ya=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,ki;function yn(e){if(ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ki=t&&t[1]||""}return`
`+ki+e}var wi=!1;function ji(e,t){if(!e||wi)return"";wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Au(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Lt:return"Portal";case Gi:return"Profiler";case Ko:return"StrictMode";case Xi:return"Suspense";case Ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case ls:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xo:return t=e.displayName||null,t!==null?t:Zi(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Zi(e(t))}catch{}}return null}function Tu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(t);case 8:return t===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Du(e){var t=us(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Du(e))}function ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=us(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qi(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fs(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function eo(e,t){fs(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,n):t.hasOwnProperty("defaultValue")&&to(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function to(e,t,n){(t!=="number"||_r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function no(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ha(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(bn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ps(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ln(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ru=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Ru.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function hs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $u=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,t){if(t){if($u[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ao=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Wt=null,Qt=null;function Wa(e){if(e=Zn(e)){if(typeof lo!="function")throw Error(b(280));var t=e.stateNode;t&&(t=ai(t),lo(e.stateNode,e.type,t))}}function xs(e){Wt?Qt?Qt.push(e):Qt=[e]:Wt=e}function ys(){if(Wt){var e=Wt,t=Qt;if(Qt=Wt=null,Wa(e),t)for(e=0;e<t.length;e++)Wa(t[e])}}function bs(e,t){return e(t)}function ks(){}var Ni=!1;function ws(e,t,n){if(Ni)return e(t,n);Ni=!0;try{return bs(e,t,n)}finally{Ni=!1,(Wt!==null||Qt!==null)&&(ks(),ys())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var so=!1;if(Ve)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){so=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{so=!1}function Ou(e,t,n,r,i,o,l,s,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(v){this.onError(v)}}var Nn=!1,Ir=null,Lr=!1,co=null,Yu={onError:function(e){Nn=!0,Ir=e}};function Bu(e,t,n,r,i,o,l,s,c){Nn=!1,Ir=null,Ou.apply(Yu,arguments)}function Uu(e,t,n,r,i,o,l,s,c){if(Bu.apply(this,arguments),Nn){if(Nn){var p=Ir;Nn=!1,Ir=null}else throw Error(b(198));Lr||(Lr=!0,co=p)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qa(e){if(_t(e)!==e)throw Error(b(188))}function Hu(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qa(i),e;if(o===r)return Qa(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Ns(e){return e=Hu(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ss(e);if(t!==null)return t;e=e.sibling}return null}var Es=xe.unstable_scheduleCallback,Ka=xe.unstable_cancelCallback,Vu=xe.unstable_shouldYield,Wu=xe.unstable_requestPaint,W=xe.unstable_now,Qu=xe.unstable_getCurrentPriorityLevel,Zo=xe.unstable_ImmediatePriority,zs=xe.unstable_UserBlockingPriority,Mr=xe.unstable_NormalPriority,Ku=xe.unstable_LowPriority,Cs=xe.unstable_IdlePriority,ni=null,Re=null;function Gu(e){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Zu,Xu=Math.log,Ju=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Xu(e)/Ju|0)|0}var ar=64,lr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=kn(s):(o&=l,o!==0&&(r=kn(o)))}else l=n&~i,l!==0?r=kn(l):o!==0&&(r=kn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),i=1<<n,r|=e[n],t&=~i;return r}function qu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ie(o),s=1<<l,c=i[l];c===-1?(!(s&n)||s&r)&&(i[l]=qu(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Si(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ie(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Fs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _s,ea,Is,Ls,Ms,fo=!1,sr=[],rt=null,it=null,ot=null,An=new Map,Tn=new Map,qe=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ga(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function pn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zn(t),t!==null&&ea(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rd(e,t,n,r,i){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,i),!0;case"dragenter":return it=pn(it,e,t,n,r,i),!0;case"mouseover":return ot=pn(ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return An.set(o,pn(An.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Tn.set(o,pn(Tn.get(o)||null,e,t,n,r,i)),!0}return!1}function As(e){var t=bt(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=js(n),t!==null){e.blockedOn=t,Ms(e.priority,function(){Is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ao=r,n.target.dispatchEvent(r),ao=null}else return t=Zn(n),t!==null&&ea(t),e.blockedOn=n,!1;t.shift()}return!0}function Xa(e,t,n){kr(e)&&n.delete(t)}function id(){fo=!1,rt!==null&&kr(rt)&&(rt=null),it!==null&&kr(it)&&(it=null),ot!==null&&kr(ot)&&(ot=null),An.forEach(Xa),Tn.forEach(Xa)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,id)))}function Dn(e){function t(i){return mn(i,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&mn(rt,e),it!==null&&mn(it,e),ot!==null&&mn(ot,e),An.forEach(t),Tn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)As(n),n.blockedOn===null&&qe.shift()}var Kt=Ge.ReactCurrentBatchConfig,Tr=!0;function od(e,t,n,r){var i=A,o=Kt.transition;Kt.transition=null;try{A=1,ta(e,t,n,r)}finally{A=i,Kt.transition=o}}function ad(e,t,n,r){var i=A,o=Kt.transition;Kt.transition=null;try{A=4,ta(e,t,n,r)}finally{A=i,Kt.transition=o}}function ta(e,t,n,r){if(Tr){var i=po(e,t,n,r);if(i===null)Ai(e,t,r,Dr,n),Ga(e,r);else if(rd(i,e,t,n,r))r.stopPropagation();else if(Ga(e,r),t&4&&-1<nd.indexOf(e)){for(;i!==null;){var o=Zn(i);if(o!==null&&_s(o),o=po(e,t,n,r),o===null&&Ai(e,t,r,Dr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ai(e,t,r,null,n)}}var Dr=null;function po(e,t,n,r){if(Dr=null,e=Jo(r),e=bt(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=js(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function Ts(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Zo:return 1;case zs:return 4;case Mr:case Ku:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var tt=null,na=null,wr=null;function Ds(){if(wr)return wr;var e,t=na,n=t.length,r,i="value"in tt?tt.value:tt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return wr=i.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Ja(){return!1}function be(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:Ja,this.isPropagationStopped=Ja,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=be(an),Jn=B({},an,{view:0,detail:0}),ld=be(Jn),Ei,zi,gn,ri=B({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Ei=e.screenX-gn.screenX,zi=e.screenY-gn.screenY):zi=Ei=0,gn=e),Ei)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Za=be(ri),sd=B({},ri,{dataTransfer:0}),cd=be(sd),ud=B({},Jn,{relatedTarget:0}),Ci=be(ud),dd=B({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=be(dd),pd=B({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=be(pd),gd=B({},an,{data:0}),qa=be(gd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xd[e])?!!t[e]:!1}function ia(){return yd}var bd=B({},Jn,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=be(bd),wd=B({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),el=be(wd),jd=B({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),Nd=be(jd),Sd=B({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=be(Sd),zd=B({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=be(zd),Pd=[9,13,27,32],oa=Ve&&"CompositionEvent"in window,Sn=null;Ve&&"documentMode"in document&&(Sn=document.documentMode);var Fd=Ve&&"TextEvent"in window&&!Sn,Rs=Ve&&(!oa||Sn&&8<Sn&&11>=Sn),tl=String.fromCharCode(32),nl=!1;function $s(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function _d(e,t){switch(e){case"compositionend":return Os(t);case"keypress":return t.which!==32?null:(nl=!0,tl);case"textInput":return e=t.data,e===tl&&nl?null:e;default:return null}}function Id(e,t){if(At)return e==="compositionend"||!oa&&$s(e,t)?(e=Ds(),wr=na=tt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rs&&t.locale!=="ko"?null:t.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ld[e.type]:t==="textarea"}function Ys(e,t,n,r){xs(r),t=Rr(t,"onChange"),0<t.length&&(n=new ra("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,Rn=null;function Md(e){Zs(e,0)}function ii(e){var t=Rt(e);if(ds(t))return e}function Ad(e,t){if(e==="change")return t}var Bs=!1;if(Ve){var Pi;if(Ve){var Fi="oninput"in document;if(!Fi){var il=document.createElement("div");il.setAttribute("oninput","return;"),Fi=typeof il.oninput=="function"}Pi=Fi}else Pi=!1;Bs=Pi&&(!document.documentMode||9<document.documentMode)}function ol(){En&&(En.detachEvent("onpropertychange",Us),Rn=En=null)}function Us(e){if(e.propertyName==="value"&&ii(Rn)){var t=[];Ys(t,Rn,e,Jo(e)),ws(Md,t)}}function Td(e,t,n){e==="focusin"?(ol(),En=t,Rn=n,En.attachEvent("onpropertychange",Us)):e==="focusout"&&ol()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Rn)}function Rd(e,t){if(e==="click")return ii(t)}function $d(e,t){if(e==="input"||e==="change")return ii(t)}function Od(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Od;function $n(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ki.call(t,i)||!Me(e[i],t[i]))return!1}return!0}function al(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ll(e,t){var n=al(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=al(n)}}function Hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vs(){for(var e=window,t=_r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=Vs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hs(n.ownerDocument.documentElement,n)){if(r!==null&&aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ll(n,o);var l=ll(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=Ve&&"documentMode"in document&&11>=document.documentMode,Tt=null,mo=null,zn=null,go=!1;function sl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||Tt==null||Tt!==_r(r)||(r=Tt,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&$n(zn,r)||(zn=r,r=Rr(mo,"onSelect"),0<r.length&&(t=new ra("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tt)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dt={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},_i={},Ws={};Ve&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function oi(e){if(_i[e])return _i[e];if(!Dt[e])return e;var t=Dt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ws)return _i[e]=t[n];return e}var Qs=oi("animationend"),Ks=oi("animationiteration"),Gs=oi("animationstart"),Xs=oi("transitionend"),Js=new Map,cl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Js.set(e,t),Ft(t,[e])}for(var Ii=0;Ii<cl.length;Ii++){var Li=cl[Ii],Ud=Li.toLowerCase(),Hd=Li[0].toUpperCase()+Li.slice(1);pt(Ud,"on"+Hd)}pt(Qs,"onAnimationEnd");pt(Ks,"onAnimationIteration");pt(Gs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Xs,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function ul(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uu(r,t,void 0,e),e.currentTarget=null}function Zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;ul(i,s,p),o=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,p=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;ul(i,s,p),o=c}}}if(Lr)throw e=co,Lr=!1,co=null,e}function D(e,t){var n=t[bo];n===void 0&&(n=t[bo]=new Set);var r=e+"__bubble";n.has(r)||(qs(t,e,2,!1),n.add(r))}function Mi(e,t,n){var r=0;t&&(r|=4),qs(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[dr]){e[dr]=!0,as.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Mi(n,!1,e),Mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Mi("selectionchange",!1,t))}}function qs(e,t,n,r){switch(Ts(t)){case 1:var i=od;break;case 4:i=ad;break;default:i=ta}n=i.bind(null,t,n,e),i=void 0,!so||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ai(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=bt(s),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}s=s.parentNode}}r=r.return}ws(function(){var p=o,v=Jo(n),g=[];e:{var h=Js.get(e);if(h!==void 0){var y=ra,k=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":y=kd;break;case"focusin":k="focus",y=Ci;break;case"focusout":k="blur",y=Ci;break;case"beforeblur":case"afterblur":y=Ci;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Nd;break;case Qs:case Ks:case Gs:y=fd;break;case Xs:y=Ed;break;case"scroll":y=ld;break;case"wheel":y=Cd;break;case"copy":case"cut":case"paste":y=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=el}var u=(t&4)!==0,w=!u&&e==="scroll",f=u?h!==null?h+"Capture":null:h;u=[];for(var d=p,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=Mn(d,f),x!=null&&u.push(Yn(d,x,m)))),w)break;d=d.return}0<u.length&&(h=new y(h,k,null,n,v),g.push({event:h,listeners:u}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ao&&(k=n.relatedTarget||n.fromElement)&&(bt(k)||k[We]))break e;if((y||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=p,k=k?bt(k):null,k!==null&&(w=_t(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=p),y!==k)){if(u=Za,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(u=el,x="onPointerLeave",f="onPointerEnter",d="pointer"),w=y==null?h:Rt(y),m=k==null?h:Rt(k),h=new u(x,d+"leave",y,n,v),h.target=w,h.relatedTarget=m,x=null,bt(v)===p&&(u=new u(f,d+"enter",k,n,v),u.target=m,u.relatedTarget=w,x=u),w=x,y&&k)t:{for(u=y,f=k,d=0,m=u;m;m=It(m))d++;for(m=0,x=f;x;x=It(x))m++;for(;0<d-m;)u=It(u),d--;for(;0<m-d;)f=It(f),m--;for(;d--;){if(u===f||f!==null&&u===f.alternate)break t;u=It(u),f=It(f)}u=null}else u=null;y!==null&&dl(g,h,y,u,!1),k!==null&&w!==null&&dl(g,w,k,u,!0)}}e:{if(h=p?Rt(p):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var j=Ad;else if(rl(h))if(Bs)j=$d;else{j=Dd;var E=Td}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Rd);if(j&&(j=j(e,p))){Ys(g,j,n,v);break e}E&&E(e,h,p),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&to(h,"number",h.value)}switch(E=p?Rt(p):window,e){case"focusin":(rl(E)||E.contentEditable==="true")&&(Tt=E,mo=p,zn=null);break;case"focusout":zn=mo=Tt=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,sl(g,n,v);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":sl(g,n,v)}var z;if(oa)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else At?$s(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Rs&&n.locale!=="ko"&&(At||P!=="onCompositionStart"?P==="onCompositionEnd"&&At&&(z=Ds()):(tt=v,na="value"in tt?tt.value:tt.textContent,At=!0)),E=Rr(p,P),0<E.length&&(P=new qa(P,e,null,n,v),g.push({event:P,listeners:E}),z?P.data=z:(z=Os(n),z!==null&&(P.data=z)))),(z=Fd?_d(e,n):Id(e,n))&&(p=Rr(p,"onBeforeInput"),0<p.length&&(v=new qa("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:p}),v.data=z))}Zs(g,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mn(e,n),o!=null&&r.unshift(Yn(e,o,i)),o=Mn(e,t),o!=null&&r.push(Yn(e,o,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dl(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,p=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&p!==null&&(s=p,i?(c=Mn(n,o),c!=null&&l.unshift(Yn(n,c,s))):i||(c=Mn(n,o),c!=null&&l.push(Yn(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Wd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function fl(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(Qd,"")}function fr(e,t,n){if(t=fl(t),fl(e)!==t&&n)throw Error(b(425))}function $r(){}var ho=null,vo=null;function xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,pl=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof pl<"u"?function(e){return pl.resolve(null).then(e).catch(Xd)}:yo;function Xd(e){setTimeout(function(){throw e})}function Ti(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ml(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),De="__reactFiber$"+ln,Bn="__reactProps$"+ln,We="__reactContainer$"+ln,bo="__reactEvents$"+ln,Jd="__reactListeners$"+ln,Zd="__reactHandles$"+ln;function bt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ml(e);e!==null;){if(n=e[De])return n;e=ml(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[De]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function ai(e){return e[Bn]||null}var ko=[],$t=-1;function mt(e){return{current:e}}function R(e){0>$t||(e.current=ko[$t],ko[$t]=null,$t--)}function T(e,t){$t++,ko[$t]=e.current,e.current=t}var ft={},oe=mt(ft),fe=mt(!1),St=ft;function Zt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function Or(){R(fe),R(oe)}function gl(e,t,n){if(oe.current!==ft)throw Error(b(168));T(oe,t),T(fe,n)}function ec(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Tu(e)||"Unknown",i));return B({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,St=oe.current,T(oe,e),T(fe,fe.current),!0}function hl(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=ec(e,t,St),r.__reactInternalMemoizedMergedChildContext=e,R(fe),R(oe),T(oe,e)):R(fe),T(fe,n)}var Ye=null,li=!1,Di=!1;function tc(e){Ye===null?Ye=[e]:Ye.push(e)}function qd(e){li=!0,tc(e)}function gt(){if(!Di&&Ye!==null){Di=!0;var e=0,t=A;try{var n=Ye;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,li=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),Es(Zo,gt),i}finally{A=t,Di=!1}}return null}var Ot=[],Yt=0,Br=null,Ur=0,ke=[],we=0,Et=null,Be=1,Ue="";function xt(e,t){Ot[Yt++]=Ur,Ot[Yt++]=Br,Br=e,Ur=t}function nc(e,t,n){ke[we++]=Be,ke[we++]=Ue,ke[we++]=Et,Et=e;var r=Be;e=Ue;var i=32-Ie(r)-1;r&=~(1<<i),n+=1;var o=32-Ie(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Be=1<<32-Ie(t)+i|n<<i|r,Ue=o+e}else Be=1<<o|n<<i|r,Ue=e}function la(e){e.return!==null&&(xt(e,1),nc(e,1,0))}function sa(e){for(;e===Br;)Br=Ot[--Yt],Ot[Yt]=null,Ur=Ot[--Yt],Ot[Yt]=null;for(;e===Et;)Et=ke[--we],ke[we]=null,Ue=ke[--we],ke[we]=null,Be=ke[--we],ke[we]=null}var ve=null,he=null,$=!1,_e=null;function rc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,he=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:Be,overflow:Ue}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,he=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if($){var t=he;if(t){var n=t;if(!vl(e,t)){if(wo(e))throw Error(b(418));t=at(n.nextSibling);var r=ve;t&&vl(e,t)?rc(r,n):(e.flags=e.flags&-4097|2,$=!1,ve=e)}}else{if(wo(e))throw Error(b(418));e.flags=e.flags&-4097|2,$=!1,ve=e}}}function xl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function pr(e){if(e!==ve)return!1;if(!$)return xl(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xo(e.type,e.memoizedProps)),t&&(t=he)){if(wo(e))throw ic(),Error(b(418));for(;t;)rc(e,t),t=at(t.nextSibling)}if(xl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ve?at(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=he;e;)e=at(e.nextSibling)}function qt(){he=ve=null,$=!1}function ca(e){_e===null?_e=[e]:_e.push(e)}var ef=Ge.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yl(e){var t=e._init;return t(e._payload)}function oc(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=ut(f,d),f.index=0,f.sibling=null,f}function o(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,m,x){return d===null||d.tag!==6?(d=Hi(m,f.mode,x),d.return=f,d):(d=i(d,m),d.return=f,d)}function c(f,d,m,x){var j=m.type;return j===Mt?v(f,d,m.props.children,x,m.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&yl(j)===d.type)?(x=i(d,m.props),x.ref=hn(f,d,m),x.return=f,x):(x=Fr(m.type,m.key,m.props,null,f.mode,x),x.ref=hn(f,d,m),x.return=f,x)}function p(f,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Vi(m,f.mode,x),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function v(f,d,m,x,j){return d===null||d.tag!==7?(d=Nt(m,f.mode,x,j),d.return=f,d):(d=i(d,m),d.return=f,d)}function g(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hi(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return m=Fr(d.type,d.key,d.props,null,f.mode,m),m.ref=hn(f,null,d),m.return=f,m;case Lt:return d=Vi(d,f.mode,m),d.return=f,d;case Je:var x=d._init;return g(f,x(d._payload),m)}if(bn(d)||dn(d))return d=Nt(d,f.mode,m,null),d.return=f,d;mr(f,d)}return null}function h(f,d,m,x){var j=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(f,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case rr:return m.key===j?c(f,d,m,x):null;case Lt:return m.key===j?p(f,d,m,x):null;case Je:return j=m._init,h(f,d,j(m._payload),x)}if(bn(m)||dn(m))return j!==null?null:v(f,d,m,x,null);mr(f,m)}return null}function y(f,d,m,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,s(d,f,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rr:return f=f.get(x.key===null?m:x.key)||null,c(d,f,x,j);case Lt:return f=f.get(x.key===null?m:x.key)||null,p(d,f,x,j);case Je:var E=x._init;return y(f,d,m,E(x._payload),j)}if(bn(x)||dn(x))return f=f.get(m)||null,v(d,f,x,j,null);mr(d,x)}return null}function k(f,d,m,x){for(var j=null,E=null,z=d,P=d=0,H=null;z!==null&&P<m.length;P++){z.index>P?(H=z,z=null):H=z.sibling;var L=h(f,z,m[P],x);if(L===null){z===null&&(z=H);break}e&&z&&L.alternate===null&&t(f,z),d=o(L,d,P),E===null?j=L:E.sibling=L,E=L,z=H}if(P===m.length)return n(f,z),$&&xt(f,P),j;if(z===null){for(;P<m.length;P++)z=g(f,m[P],x),z!==null&&(d=o(z,d,P),E===null?j=z:E.sibling=z,E=z);return $&&xt(f,P),j}for(z=r(f,z);P<m.length;P++)H=y(z,f,P,m[P],x),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?P:H.key),d=o(H,d,P),E===null?j=H:E.sibling=H,E=H);return e&&z.forEach(function(ze){return t(f,ze)}),$&&xt(f,P),j}function u(f,d,m,x){var j=dn(m);if(typeof j!="function")throw Error(b(150));if(m=j.call(m),m==null)throw Error(b(151));for(var E=j=null,z=d,P=d=0,H=null,L=m.next();z!==null&&!L.done;P++,L=m.next()){z.index>P?(H=z,z=null):H=z.sibling;var ze=h(f,z,L.value,x);if(ze===null){z===null&&(z=H);break}e&&z&&ze.alternate===null&&t(f,z),d=o(ze,d,P),E===null?j=ze:E.sibling=ze,E=ze,z=H}if(L.done)return n(f,z),$&&xt(f,P),j;if(z===null){for(;!L.done;P++,L=m.next())L=g(f,L.value,x),L!==null&&(d=o(L,d,P),E===null?j=L:E.sibling=L,E=L);return $&&xt(f,P),j}for(z=r(f,z);!L.done;P++,L=m.next())L=y(z,f,P,L.value,x),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?P:L.key),d=o(L,d,P),E===null?j=L:E.sibling=L,E=L);return e&&z.forEach(function(cn){return t(f,cn)}),$&&xt(f,P),j}function w(f,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Mt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case rr:e:{for(var j=m.key,E=d;E!==null;){if(E.key===j){if(j=m.type,j===Mt){if(E.tag===7){n(f,E.sibling),d=i(E,m.props.children),d.return=f,f=d;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&yl(j)===E.type){n(f,E.sibling),d=i(E,m.props),d.ref=hn(f,E,m),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===Mt?(d=Nt(m.props.children,f.mode,x,m.key),d.return=f,f=d):(x=Fr(m.type,m.key,m.props,null,f.mode,x),x.ref=hn(f,d,m),x.return=f,f=x)}return l(f);case Lt:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Vi(m,f.mode,x),d.return=f,f=d}return l(f);case Je:return E=m._init,w(f,d,E(m._payload),x)}if(bn(m))return k(f,d,m,x);if(dn(m))return u(f,d,m,x);mr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=Hi(m,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return w}var en=oc(!0),ac=oc(!1),Hr=mt(null),Vr=null,Bt=null,ua=null;function da(){ua=Bt=Vr=null}function fa(e){var t=Hr.current;R(Hr),e._currentValue=t}function No(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Vr=e,ua=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Se(e){var t=e._currentValue;if(ua!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Vr===null)throw Error(b(308));Bt=e,Vr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var kt=null;function pa(e){kt===null?kt=[e]:kt.push(e)}function lc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qe(e,n)}return i=r.interleaved,i===null?(t.next=t,pa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qe(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}function bl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wr(e,t,n,r){var i=e.updateQueue;Ze=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,p=c.next;c.next=null,l===null?o=p:l.next=p,l=c;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==l&&(s===null?v.firstBaseUpdate=p:s.next=p,v.lastBaseUpdate=c))}if(o!==null){var g=i.baseState;l=0,v=p=c=null,s=o;do{var h=s.lane,y=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,u=s;switch(h=t,y=n,u.tag){case 1:if(k=u.payload,typeof k=="function"){g=k.call(y,g,h);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=u.payload,h=typeof k=="function"?k.call(y,g,h):k,h==null)break e;g=B({},g,h);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(p=v=y,c=g):v=v.next=y,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(v===null&&(c=g),i.baseState=c,i.firstBaseUpdate=p,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ct|=l,e.lanes=l,e.memoizedState=g}}function kl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var qn={},$e=mt(qn),Un=mt(qn),Hn=mt(qn);function wt(e){if(e===qn)throw Error(b(174));return e}function ga(e,t){switch(T(Hn,t),T(Un,e),T($e,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ro(t,e)}R($e),T($e,t)}function tn(){R($e),R(Un),R(Hn)}function cc(e){wt(Hn.current);var t=wt($e.current),n=ro(t,e.type);t!==n&&(T(Un,e),T($e,n))}function ha(e){Un.current===e&&(R($e),R(Un))}var O=mt(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ri=[];function va(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var Sr=Ge.ReactCurrentDispatcher,$i=Ge.ReactCurrentBatchConfig,zt=0,Y=null,K=null,J=null,Kr=!1,Cn=!1,Vn=0,tf=0;function ne(){throw Error(b(321))}function xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function ya(e,t,n,r,i,o){if(zt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sr.current=e===null||e.memoizedState===null?af:lf,e=n(r,i),Cn){o=0;do{if(Cn=!1,Vn=0,25<=o)throw Error(b(301));o+=1,J=K=null,t.updateQueue=null,Sr.current=sf,e=n(r,i)}while(Cn)}if(Sr.current=Gr,t=K!==null&&K.next!==null,zt=0,J=K=Y=null,Kr=!1,t)throw Error(b(300));return e}function ba(){var e=Vn!==0;return Vn=0,e}function Te(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?Y.memoizedState=J=e:J=J.next=e,J}function Ee(){if(K===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=J===null?Y.memoizedState:J.next;if(t!==null)J=t,K=e;else{if(e===null)throw Error(b(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?Y.memoizedState=J=e:J=J.next=e}return J}function Wn(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,c=null,p=o;do{var v=p.lane;if((zt&v)===v)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var g={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(s=c=g,l=r):c=c.next=g,Y.lanes|=v,Ct|=v}p=p.next}while(p!==null&&p!==o);c===null?l=r:c.next=s,Me(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,Ct|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Me(o,t.memoizedState)||(de=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uc(){}function dc(e,t){var n=Y,r=Ee(),i=t(),o=!Me(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,ka(mc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Qn(9,pc.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(b(349));zt&30||fc(n,t,i)}return i}function fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pc(e,t,n,r){t.value=n,t.getSnapshot=r,gc(t)&&hc(e)}function mc(e,t,n){return n(function(){gc(t)&&hc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function hc(e){var t=Qe(e,1);t!==null&&Le(t,e,1,-1)}function wl(e){var t=Te();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,Y,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vc(){return Ee().memoizedState}function Er(e,t,n,r){var i=Te();Y.flags|=e,i.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var i=Ee();r=r===void 0?null:r;var o=void 0;if(K!==null){var l=K.memoizedState;if(o=l.destroy,r!==null&&xa(r,l.deps)){i.memoizedState=Qn(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Qn(1|t,n,o,r)}function jl(e,t){return Er(8390656,8,e,t)}function ka(e,t){return si(2048,8,e,t)}function xc(e,t){return si(4,2,e,t)}function yc(e,t){return si(4,4,e,t)}function bc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,bc.bind(null,t,e),n)}function wa(){}function wc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nc(e,t,n){return zt&21?(Me(n,t)||(n=Ps(),Y.lanes|=n,Ct|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function nf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),t()}finally{A=n,$i.transition=r}}function Sc(){return Ee().memoizedState}function rf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ec(e))zc(t,n);else if(n=lc(e,t,n,r),n!==null){var i=le();Le(n,e,r,i),Cc(n,t,r)}}function of(e,t,n){var r=ct(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))zc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Me(s,l)){var c=t.interleaved;c===null?(i.next=i,pa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=lc(e,t,i,r),n!==null&&(i=le(),Le(n,e,r,i),Cc(n,t,r))}}function Ec(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function zc(e,t){Cn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}var Gr={readContext:Se,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},af={readContext:Se,useCallback:function(e,t){return Te().memoizedState=[e,t===void 0?null:t],e},useContext:Se,useEffect:jl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Er(4194308,4,bc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Er(4194308,4,e,t)},useInsertionEffect:function(e,t){return Er(4,2,e,t)},useMemo:function(e,t){var n=Te();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Te();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Te();return e={current:e},t.memoizedState=e},useState:wl,useDebugValue:wa,useDeferredValue:function(e){return Te().memoizedState=e},useTransition:function(){var e=wl(!1),t=e[0];return e=nf.bind(null,e[1]),Te().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Te();if($){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Z===null)throw Error(b(349));zt&30||fc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jl(mc.bind(null,r,o,e),[e]),r.flags|=2048,Qn(9,pc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Te(),t=Z.identifierPrefix;if($){var n=Ue,r=Be;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:Se,useCallback:wc,useContext:Se,useEffect:ka,useImperativeHandle:kc,useInsertionEffect:xc,useLayoutEffect:yc,useMemo:jc,useReducer:Oi,useRef:vc,useState:function(){return Oi(Wn)},useDebugValue:wa,useDeferredValue:function(e){var t=Ee();return Nc(t,K.memoizedState,e)},useTransition:function(){var e=Oi(Wn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:dc,useId:Sc,unstable_isNewReconciler:!1},sf={readContext:Se,useCallback:wc,useContext:Se,useEffect:ka,useImperativeHandle:kc,useInsertionEffect:xc,useLayoutEffect:yc,useMemo:jc,useReducer:Yi,useRef:vc,useState:function(){return Yi(Wn)},useDebugValue:wa,useDeferredValue:function(e){var t=Ee();return K===null?t.memoizedState=e:Nc(t,K.memoizedState,e)},useTransition:function(){var e=Yi(Wn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:dc,useId:Sc,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function So(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),i=ct(e),o=He(r,i);o.payload=t,n!=null&&(o.callback=n),t=lt(e,o,i),t!==null&&(Le(t,e,i,r),Nr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),i=ct(e),o=He(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=lt(e,o,i),t!==null&&(Le(t,e,i,r),Nr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=ct(e),i=He(n,r);i.tag=2,t!=null&&(i.callback=t),t=lt(e,i,r),t!==null&&(Le(t,e,r,n),Nr(t,e,r))}};function Nl(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(i,o):!0}function Pc(e,t,n){var r=!1,i=ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Se(o):(i=pe(t)?St:oe.current,r=t.contextTypes,o=(r=r!=null)?Zt(e,i):ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Eo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ma(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Se(o):(o=pe(t)?St:oe.current,i.context=Zt(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(So(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),Wr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Au(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function Fc(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Do=r),zo(e,t)},n}function _c(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zo(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function El(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jf.bind(null,e,t,n),t.then(e,e))}function zl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var uf=Ge.ReactCurrentOwner,de=!1;function ae(e,t,n,r){t.child=e===null?ac(t,null,n,r):en(t,e.child,n,r)}function Pl(e,t,n,r,i){n=n.render;var o=t.ref;return Gt(t,i),r=ya(e,t,n,r,o,i),n=ba(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ke(e,t,i)):($&&n&&la(t),t.flags|=1,ae(e,t,r,i),t.child)}function Fl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ic(e,t,o,r,i)):(e=Fr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(l,r)&&e.ref===t.ref)return Ke(e,t,i)}return t.flags|=1,e=ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ic(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($n(o,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ke(e,t,i)}return Co(e,t,n,r,i)}function Lc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(Ht,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,T(Ht,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,T(Ht,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,T(Ht,ge),ge|=r;return ae(e,t,i,n),t.child}function Mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Co(e,t,n,r,i){var o=pe(n)?St:oe.current;return o=Zt(t,o),Gt(t,i),n=ya(e,t,n,r,o,i),r=ba(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ke(e,t,i)):($&&r&&la(t),t.flags|=1,ae(e,t,n,i),t.child)}function _l(e,t,n,r,i){if(pe(n)){var o=!0;Yr(t)}else o=!1;if(Gt(t,i),t.stateNode===null)zr(e,t),Pc(t,n,r),Eo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=Se(p):(p=pe(n)?St:oe.current,p=Zt(t,p));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==p)&&Sl(t,l,r,p),Ze=!1;var h=t.memoizedState;l.state=h,Wr(t,r,l,i),c=t.memoizedState,s!==r||h!==c||fe.current||Ze?(typeof v=="function"&&(So(t,n,v,r),c=t.memoizedState),(s=Ze||Nl(t,n,s,r,h,c,p))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=p,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,sc(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:Pe(t.type,s),l.props=p,g=t.pendingProps,h=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Se(c):(c=pe(n)?St:oe.current,c=Zt(t,c));var y=n.getDerivedStateFromProps;(v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||h!==c)&&Sl(t,l,r,c),Ze=!1,h=t.memoizedState,l.state=h,Wr(t,r,l,i);var k=t.memoizedState;s!==g||h!==k||fe.current||Ze?(typeof y=="function"&&(So(t,n,y,r),k=t.memoizedState),(p=Ze||Nl(t,n,p,r,h,k,c)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=c,r=p):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Po(e,t,n,r,o,i)}function Po(e,t,n,r,i,o){Mc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&hl(t,n,!1),Ke(e,t,o);r=t.stateNode,uf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=en(t,e.child,null,o),t.child=en(t,null,s,o)):ae(e,t,s,o),t.memoizedState=r.state,i&&hl(t,n,!0),t.child}function Ac(e){var t=e.stateNode;t.pendingContext?gl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gl(e,t.context,!1),ga(e,t.containerInfo)}function Il(e,t,n,r,i){return qt(),ca(i),t.flags|=256,ae(e,t,n,r),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,t,n){var r=t.pendingProps,i=O.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),T(O,i&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=fi(l,r,0,null),e=Nt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_o(n),t.memoizedState=Fo,e):ja(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return df(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ut(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ut(s,o):(o=Nt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?_o(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Fo,r}return o=e.child,e=o.sibling,r=ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ja(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&ca(r),en(t,e.child,null,n),e=ja(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Bi(Error(b(422))),gr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fi({mode:"visible",children:r.children},i,0,null),o=Nt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&en(t,e.child,null,l),t.child.memoizedState=_o(l),t.memoizedState=Fo,o);if(!(t.mode&1))return gr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(b(419)),r=Bi(o,r,void 0),gr(e,t,l,r)}if(s=(l&e.childLanes)!==0,de||s){if(r=Z,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qe(e,i),Le(r,e,i,-1))}return Pa(),r=Bi(Error(b(421))),gr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,he=at(i.nextSibling),ve=t,$=!0,_e=null,e!==null&&(ke[we++]=Be,ke[we++]=Ue,ke[we++]=Et,Be=e.id,Ue=e.overflow,Et=t),t=ja(t,r.children),t.flags|=4096,t)}function Ll(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),No(e.return,t,n)}function Ui(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=O.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ll(e,n,t);else if(e.tag===19)Ll(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(T(O,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ui(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ui(t,!0,n,null,o);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ct|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Ac(t),qt();break;case 5:cc(t);break;case 1:pe(t.type)&&Yr(t);break;case 4:ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;T(Hr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(T(O,O.current&1),t.flags|=128,null):n&t.child.childLanes?Tc(e,t,n):(T(O,O.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);T(O,O.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),T(O,O.current),r)break;return null;case 22:case 23:return t.lanes=0,Lc(e,t,n)}return Ke(e,t,n)}var Rc,Io,$c,Oc;Rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Io=function(){};$c=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wt($e.current);var o=null;switch(n){case"input":i=qi(e,i),r=qi(e,r),o=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":i=no(e,i),r=no(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}io(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var s=i[p];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(In.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var c=r[p];if(s=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&c!==s&&(c!=null||s!=null))if(p==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(p,n)),n=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(In.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&D("scroll",e),o||s===c||(o=[])):(o=o||[]).push(p,c))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};Oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pf(e,t,n){var r=t.pendingProps;switch(sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Or(),re(t),null;case 3:return r=t.stateNode,tn(),R(fe),R(oe),va(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&(Oo(_e),_e=null))),Io(e,t),re(t),null;case 5:ha(t);var i=wt(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)$c(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return re(t),null}if(e=wt($e.current),pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[De]=t,r[Bn]=o,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<wn.length;i++)D(wn[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Ba(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":Ha(r,o),D("invalid",r)}io(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",""+s]):In.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&D("scroll",r)}switch(n){case"input":ir(r),Ua(r,o,!0);break;case"textarea":ir(r),Va(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$r)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[De]=t,e[Bn]=r,Rc(e,t,!1,!1),t.stateNode=e;e:{switch(l=oo(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<wn.length;i++)D(wn[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":Ba(e,r),i=qi(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),D("invalid",e);break;case"textarea":Ha(e,r),i=no(e,r),D("invalid",e);break;default:i=r}io(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?vs(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gs(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ln(e,c):typeof c=="number"&&Ln(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(In.hasOwnProperty(o)?c!=null&&o==="onScroll"&&D("scroll",e):c!=null&&Qo(e,o,c,l))}switch(n){case"input":ir(e),Ua(e,r,!1);break;case"textarea":ir(e),Va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=wt(Hn.current),wt($e.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(o=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return re(t),null;case 13:if(R(O),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&he!==null&&t.mode&1&&!(t.flags&128))ic(),qt(),t.flags|=98560,o=!1;else if(o=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[De]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),o=!1}else _e!==null&&(Oo(_e),_e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||O.current&1?G===0&&(G=3):Pa())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),Io(e,t),e===null&&On(t.stateNode.containerInfo),re(t),null;case 10:return fa(t.type._context),re(t),null;case 17:return pe(t.type)&&Or(),re(t),null;case 19:if(R(O),o=t.memoizedState,o===null)return re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)vn(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Qr(e),l!==null){for(t.flags|=128,vn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return T(O,O.current&1|2),t.child}e=e.sibling}o.tail!==null&&W()>rn&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return re(t),null}else 2*W()-o.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=W(),t.sibling=null,n=O.current,T(O,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Ca(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function mf(e,t){switch(sa(t),t.tag){case 1:return pe(t.type)&&Or(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),R(fe),R(oe),va(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(R(O),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(O),null;case 4:return tn(),null;case 10:return fa(t.type._context),null;case 22:case 23:return Ca(),null;case 24:return null;default:return null}}var hr=!1,ie=!1,gf=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ut(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){U(e,t,r)}else n.current=null}function Lo(e,t,n){try{n()}catch(r){U(e,t,r)}}var Ml=!1;function hf(e,t){if(ho=Tr,e=Vs(),aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,p=0,v=0,g=e,h=null;t:for(;;){for(var y;g!==n||i!==0&&g.nodeType!==3||(s=l+i),g!==o||r!==0&&g.nodeType!==3||(c=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break t;if(h===n&&++p===i&&(s=l),h===o&&++v===r&&(c=l),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vo={focusedElem:e,selectionRange:n},Tr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var u=k.memoizedProps,w=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?u:Pe(t.type,u),w);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){U(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return k=Ml,Ml=!1,k}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Lo(t,n,o)}i=i.next}while(i!==r)}}function ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yc(e){var t=e.alternate;t!==null&&(e.alternate=null,Yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[Bn],delete t[bo],delete t[Jd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function Al(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}function To(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(To(e,t,n),e=e.sibling;e!==null;)To(e,t,n),e=e.sibling}var q=null,Fe=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:ie||Ut(n,t);case 6:var r=q,i=Fe;q=null,Xe(e,t,n),q=r,Fe=i,q!==null&&(Fe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Fe?(e=q,n=n.stateNode,e.nodeType===8?Ti(e.parentNode,n):e.nodeType===1&&Ti(e,n),Dn(e)):Ti(q,n.stateNode));break;case 4:r=q,i=Fe,q=n.stateNode.containerInfo,Fe=!0,Xe(e,t,n),q=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Lo(n,t,l),i=i.next}while(i!==r)}Xe(e,t,n);break;case 1:if(!ie&&(Ut(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){U(n,t,s)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Xe(e,t,n),ie=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Tl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gf),t.forEach(function(r){var i=Sf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ce(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Fe=!1;break e;case 3:q=s.stateNode.containerInfo,Fe=!0;break e;case 4:q=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(q===null)throw Error(b(160));Uc(o,l,i),q=null,Fe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(p){U(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(t,e),Ae(e),r&4){try{Pn(3,e,e.return),ui(3,e)}catch(u){U(e,e.return,u)}try{Pn(5,e,e.return)}catch(u){U(e,e.return,u)}}break;case 1:Ce(t,e),Ae(e),r&512&&n!==null&&Ut(n,n.return);break;case 5:if(Ce(t,e),Ae(e),r&512&&n!==null&&Ut(n,n.return),e.flags&32){var i=e.stateNode;try{Ln(i,"")}catch(u){U(e,e.return,u)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&fs(i,o),oo(s,l);var p=oo(s,o);for(l=0;l<c.length;l+=2){var v=c[l],g=c[l+1];v==="style"?vs(i,g):v==="dangerouslySetInnerHTML"?gs(i,g):v==="children"?Ln(i,g):Qo(i,v,g,p)}switch(s){case"input":eo(i,o);break;case"textarea":ps(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Vt(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Vt(i,!!o.multiple,o.defaultValue,!0):Vt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bn]=o}catch(u){U(e,e.return,u)}}break;case 6:if(Ce(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(u){U(e,e.return,u)}}break;case 3:if(Ce(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(u){U(e,e.return,u)}break;case 4:Ce(t,e),Ae(e);break;case 13:Ce(t,e),Ae(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ea=W())),r&4&&Tl(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(p=ie)||v,Ce(t,e),ie=p):Ce(t,e),Ae(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&e.mode&1)for(N=e,v=e.child;v!==null;){for(g=N=v;N!==null;){switch(h=N,y=h.child,h.tag){case 0:case 11:case 14:case 15:Pn(4,h,h.return);break;case 1:Ut(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(u){U(r,n,u)}}break;case 5:Ut(h,h.return);break;case 22:if(h.memoizedState!==null){Rl(g);continue}}y!==null?(y.return=h,N=y):Rl(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,c=g.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=hs("display",l))}catch(u){U(e,e.return,u)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(u){U(e,e.return,u)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ce(t,e),Ae(e),r&4&&Tl(e);break;case 21:break;default:Ce(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bc(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ln(i,""),r.flags&=-33);var o=Al(e);To(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Al(e);Ao(e,s,l);break;default:throw Error(b(161))}}catch(c){U(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){N=e,Vc(e)}function Vc(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||hr;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||ie;s=hr;var p=ie;if(hr=l,(ie=c)&&!p)for(N=i;N!==null;)l=N,c=l.child,l.tag===22&&l.memoizedState!==null?$l(i):c!==null?(c.return=l,N=c):$l(i);for(;o!==null;)N=o,Vc(o),o=o.sibling;N=i,hr=s,ie=p}Dl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Dl(e)}}function Dl(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&kl(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kl(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Dn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ie||t.flags&512&&Mo(t)}catch(h){U(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Rl(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function $l(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ui(4,t)}catch(c){U(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){U(t,i,c)}}var o=t.return;try{Mo(t)}catch(c){U(t,o,c)}break;case 5:var l=t.return;try{Mo(t)}catch(c){U(t,l,c)}}}catch(c){U(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var xf=Math.ceil,Xr=Ge.ReactCurrentDispatcher,Na=Ge.ReactCurrentOwner,Ne=Ge.ReactCurrentBatchConfig,M=0,Z=null,Q=null,ee=0,ge=0,Ht=mt(0),G=0,Kn=null,Ct=0,di=0,Sa=0,Fn=null,ue=null,Ea=0,rn=1/0,Oe=null,Jr=!1,Do=null,st=null,vr=!1,nt=null,Zr=0,_n=0,Ro=null,Cr=-1,Pr=0;function le(){return M&6?W():Cr!==-1?Cr:Cr=W()}function ct(e){return e.mode&1?M&2&&ee!==0?ee&-ee:ef.transition!==null?(Pr===0&&(Pr=Ps()),Pr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ts(e.type)),e):1}function Le(e,t,n,r){if(50<_n)throw _n=0,Ro=null,Error(b(185));Xn(e,n,r),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(di|=n),G===4&&et(e,ee)),me(e,r),n===1&&M===0&&!(t.mode&1)&&(rn=W()+500,li&&gt()))}function me(e,t){var n=e.callbackNode;ed(e,t);var r=Ar(e,e===Z?ee:0);if(r===0)n!==null&&Ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ka(n),t===1)e.tag===0?qd(Ol.bind(null,e)):tc(Ol.bind(null,e)),Gd(function(){!(M&6)&&gt()}),n=null;else{switch(Fs(r)){case 1:n=Zo;break;case 4:n=zs;break;case 16:n=Mr;break;case 536870912:n=Cs;break;default:n=Mr}n=qc(n,Wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wc(e,t){if(Cr=-1,Pr=0,M&6)throw Error(b(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Ar(e,e===Z?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var i=M;M|=2;var o=Kc();(Z!==e||ee!==t)&&(Oe=null,rn=W()+500,jt(e,t));do try{kf();break}catch(s){Qc(e,s)}while(1);da(),Xr.current=o,M=i,Q!==null?t=0:(Z=null,ee=0,t=G)}if(t!==0){if(t===2&&(i=uo(e),i!==0&&(r=i,t=$o(e,i))),t===1)throw n=Kn,jt(e,0),et(e,r),me(e,W()),n;if(t===6)et(e,r);else{if(i=e.current.alternate,!(r&30)&&!yf(i)&&(t=qr(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=$o(e,o))),t===1))throw n=Kn,jt(e,0),et(e,r),me(e,W()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:yt(e,ue,Oe);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Ea+500-W(),10<t)){if(Ar(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yo(yt.bind(null,e,ue,Oe),t);break}yt(e,ue,Oe);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ie(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xf(r/1960))-r,10<r){e.timeoutHandle=yo(yt.bind(null,e,ue,Oe),r);break}yt(e,ue,Oe);break;case 5:yt(e,ue,Oe);break;default:throw Error(b(329))}}}return me(e,W()),e.callbackNode===n?Wc.bind(null,e):null}function $o(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=qr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Oo(t)),e}function Oo(e){ue===null?ue=e:ue.push.apply(ue,e)}function yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Me(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Sa,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Ol(e){if(M&6)throw Error(b(327));Xt();var t=Ar(e,0);if(!(t&1))return me(e,W()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=$o(e,r))}if(n===1)throw n=Kn,jt(e,0),et(e,t),me(e,W()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yt(e,ue,Oe),me(e,W()),null}function za(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(rn=W()+500,li&&gt())}}function Pt(e){nt!==null&&nt.tag===0&&!(M&6)&&Xt();var t=M;M|=1;var n=Ne.transition,r=A;try{if(Ne.transition=null,A=1,e)return e()}finally{A=r,Ne.transition=n,M=t,!(M&6)&&gt()}}function Ca(){ge=Ht.current,R(Ht)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Or();break;case 3:tn(),R(fe),R(oe),va();break;case 5:ha(r);break;case 4:tn();break;case 13:R(O);break;case 19:R(O);break;case 10:fa(r.type._context);break;case 22:case 23:Ca()}n=n.return}if(Z=e,Q=e=ut(e.current,null),ee=ge=t,G=0,Kn=null,Sa=di=Ct=0,ue=Fn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}kt=null}return e}function Qc(e,t){do{var n=Q;try{if(da(),Sr.current=Gr,Kr){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kr=!1}if(zt=0,J=K=Y=null,Cn=!1,Vn=0,Na.current=null,n===null||n.return===null){G=1,Kn=t,Q=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=ee,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,v=s,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=zl(l);if(y!==null){y.flags&=-257,Cl(y,l,s,o,t),y.mode&1&&El(o,p,t),t=y,c=p;var k=t.updateQueue;if(k===null){var u=new Set;u.add(c),t.updateQueue=u}else k.add(c);break e}else{if(!(t&1)){El(o,p,t),Pa();break e}c=Error(b(426))}}else if($&&s.mode&1){var w=zl(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Cl(w,l,s,o,t),ca(nn(c,s));break e}}o=c=nn(c,s),G!==4&&(G=2),Fn===null?Fn=[o]:Fn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Fc(o,c,t);bl(o,f);break e;case 1:s=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(st===null||!st.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=_c(o,s,t);bl(o,x);break e}}o=o.return}while(o!==null)}Xc(n)}catch(j){t=j,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function Kc(){var e=Xr.current;return Xr.current=Gr,e===null?Gr:e}function Pa(){(G===0||G===3||G===2)&&(G=4),Z===null||!(Ct&268435455)&&!(di&268435455)||et(Z,ee)}function qr(e,t){var n=M;M|=2;var r=Kc();(Z!==e||ee!==t)&&(Oe=null,jt(e,t));do try{bf();break}catch(i){Qc(e,i)}while(1);if(da(),M=n,Xr.current=r,Q!==null)throw Error(b(261));return Z=null,ee=0,G}function bf(){for(;Q!==null;)Gc(Q)}function kf(){for(;Q!==null&&!Vu();)Gc(Q)}function Gc(e){var t=Zc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Xc(e):Q=t,Na.current=null}function Xc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(n=pf(n,t,ge),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);G===0&&(G=5)}function yt(e,t,n){var r=A,i=Ne.transition;try{Ne.transition=null,A=1,wf(e,t,n,r)}finally{Ne.transition=i,A=r}return null}function wf(e,t,n,r){do Xt();while(nt!==null);if(M&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(td(e,o),e===Z&&(Q=Z=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,qc(Mr,function(){return Xt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var l=A;A=1;var s=M;M|=4,Na.current=null,hf(e,n),Hc(n,e),Yd(vo),Tr=!!ho,vo=ho=null,e.current=n,vf(n),Wu(),M=s,A=l,Ne.transition=o}else e.current=n;if(vr&&(vr=!1,nt=e,Zr=i),o=e.pendingLanes,o===0&&(st=null),Gu(n.stateNode),me(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jr)throw Jr=!1,e=Do,Do=null,e;return Zr&1&&e.tag!==0&&Xt(),o=e.pendingLanes,o&1?e===Ro?_n++:(_n=0,Ro=e):_n=0,gt(),null}function Xt(){if(nt!==null){var e=Fs(Zr),t=Ne.transition,n=A;try{if(Ne.transition=null,A=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Zr=0,M&6)throw Error(b(331));var i=M;for(M|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var p=s[c];for(N=p;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:Pn(8,v,o)}var g=v.child;if(g!==null)g.return=v,N=g;else for(;N!==null;){v=N;var h=v.sibling,y=v.return;if(Yc(v),v===p){N=null;break}if(h!==null){h.return=y,N=h;break}N=y}}}var k=o.alternate;if(k!==null){var u=k.child;if(u!==null){k.child=null;do{var w=u.sibling;u.sibling=null,u=w}while(u!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,N=m;else e:for(l=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ui(9,s)}}catch(j){U(s,s.return,j)}if(s===l){N=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,N=x;break e}N=s.return}}if(M=i,gt(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{A=n,Ne.transition=t}}return!1}function Yl(e,t,n){t=nn(n,t),t=Fc(e,t,1),e=lt(e,t,1),t=le(),e!==null&&(Xn(e,1,t),me(e,t))}function U(e,t,n){if(e.tag===3)Yl(e,e,n);else for(;t!==null;){if(t.tag===3){Yl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=_c(t,e,1),t=lt(t,e,1),e=le(),t!==null&&(Xn(t,1,e),me(t,e));break}}t=t.return}}function jf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(ee&n)===n&&(G===4||G===3&&(ee&130023424)===ee&&500>W()-Ea?jt(e,0):Sa|=n),me(e,t)}function Jc(e,t){t===0&&(e.mode&1?(t=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):t=1);var n=le();e=Qe(e,t),e!==null&&(Xn(e,t,n),me(e,n))}function Nf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jc(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Jc(e,n)}var Zc;Zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,ff(e,t,n);de=!!(e.flags&131072)}else de=!1,$&&t.flags&1048576&&nc(t,Ur,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var i=Zt(t,oe.current);Gt(t,n),i=ya(null,t,r,e,i,n);var o=ba();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,Yr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ma(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Eo(t,r,e,n),t=Po(null,t,r,!0,o,n)):(t.tag=0,$&&o&&la(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zf(r),e=Pe(r,e),i){case 0:t=Co(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=Pl(null,t,r,e,n);break e;case 14:t=Fl(null,t,r,Pe(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),Co(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),_l(e,t,r,i,n);case 3:e:{if(Ac(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sc(e,t),Wr(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=nn(Error(b(423)),t),t=Il(e,t,r,n,i);break e}else if(r!==i){i=nn(Error(b(424)),t),t=Il(e,t,r,n,i);break e}else for(he=at(t.stateNode.containerInfo.firstChild),ve=t,$=!0,_e=null,n=ac(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===i){t=Ke(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return cc(t),e===null&&jo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,xo(r,i)?l=null:o!==null&&xo(r,o)&&(t.flags|=32),Mc(e,t),ae(e,t,l,n),t.child;case 6:return e===null&&jo(t),null;case 13:return Tc(e,t,n);case 4:return ga(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),Pl(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,T(Hr,r._currentValue),r._currentValue=l,o!==null)if(Me(o.value,l)){if(o.children===i.children&&!fe.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=He(-1,n&-n),c.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?c.next=c:(c.next=v.next,v.next=c),p.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),No(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(b(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),No(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gt(t,n),i=Se(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Pe(r,t.pendingProps),i=Pe(r.type,i),Fl(e,t,r,i,n);case 15:return Ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),zr(e,t),t.tag=1,pe(r)?(e=!0,Yr(t)):e=!1,Gt(t,n),Pc(t,r,i),Eo(t,r,i,n),Po(null,t,r,!0,e,n);case 19:return Dc(e,t,n);case 22:return Lc(e,t,n)}throw Error(b(156,t.tag))};function qc(e,t){return Es(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Ef(e,t,n,r)}function Fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zf(e){if(typeof e=="function")return Fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Xo)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Fa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Mt:return Nt(n.children,i,o,t);case Ko:l=8,i|=8;break;case Gi:return e=je(12,n,t,i|2),e.elementType=Gi,e.lanes=o,e;case Xi:return e=je(13,n,t,i),e.elementType=Xi,e.lanes=o,e;case Ji:return e=je(19,n,t,i),e.elementType=Ji,e.lanes=o,e;case cs:return fi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ls:l=10;break e;case ss:l=9;break e;case Go:l=11;break e;case Xo:l=14;break e;case Je:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=je(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function fi(e,t,n,r){return e=je(22,e,r,t),e.elementType=cs,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Vi(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _a(e,t,n,r,i,o,l,s,c){return e=new Cf(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ma(o),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function eu(e){if(!e)return ft;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(pe(n))return ec(e,n,t)}return t}function tu(e,t,n,r,i,o,l,s,c){return e=_a(n,r,!0,e,i,o,l,s,c),e.context=eu(null),n=e.current,r=le(),i=ct(n),o=He(r,i),o.callback=t??null,lt(n,o,i),e.current.lanes=i,Xn(e,i,r),me(e,r),e}function pi(e,t,n,r){var i=t.current,o=le(),l=ct(i);return n=eu(n),t.context===null?t.context=n:t.pendingContext=n,t=He(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=lt(i,t,l),e!==null&&(Le(e,i,l,o),Nr(e,i,l)),l}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ia(e,t){Bl(e,t),(e=e.alternate)&&Bl(e,t)}function Ff(){return null}var nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}mi.prototype.render=La.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));pi(e,t,null,null)};mi.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){pi(null,e,null,null)}),t[We]=null}};function mi(e){this._internalRoot=e}mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&As(e)}};function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ul(){}function _f(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=ei(l);o.call(p)}}var l=tu(t,r,e,0,null,!1,!1,"",Ul);return e._reactRootContainer=l,e[We]=l.current,On(e.nodeType===8?e.parentNode:e),Pt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var p=ei(c);s.call(p)}}var c=_a(e,0,!1,null,null,!1,!1,"",Ul);return e._reactRootContainer=c,e[We]=c.current,On(e.nodeType===8?e.parentNode:e),Pt(function(){pi(t,c,n,r)}),c}function hi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var c=ei(l);s.call(c)}}pi(t,l,e,i)}else l=_f(n,t,e,i,r);return ei(l)}_s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(qo(t,n|1),me(t,W()),!(M&6)&&(rn=W()+500,gt()))}break;case 13:Pt(function(){var r=Qe(e,1);if(r!==null){var i=le();Le(r,e,1,i)}}),Ia(e,1)}};ea=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=le();Le(t,e,134217728,n)}Ia(e,134217728)}};Is=function(e){if(e.tag===13){var t=ct(e),n=Qe(e,t);if(n!==null){var r=le();Le(n,e,t,r)}Ia(e,t)}};Ls=function(){return A};Ms=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};lo=function(e,t,n){switch(t){case"input":if(eo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(b(90));ds(r),eo(r,i)}}}break;case"textarea":ps(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}};bs=za;ks=Pt;var If={usingClientEntryPoint:!1,Events:[Zn,Rt,ai,xs,ys,za]},xn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lf={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{ni=xr.inject(Lf),Re=xr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ma(t))throw Error(b(200));return Pf(e,t,null,n)};ye.createRoot=function(e,t){if(!Ma(e))throw Error(b(299));var n=!1,r="",i=nu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_a(e,1,!1,null,null,n,!1,r,i),e[We]=t.current,On(e.nodeType===8?e.parentNode:e),new La(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Ns(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Pt(e)};ye.hydrate=function(e,t,n){if(!gi(t))throw Error(b(200));return hi(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Ma(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=nu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tu(t,null,e,1,n??null,i,!1,o,l),e[We]=t.current,On(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new mi(t)};ye.render=function(e,t,n){if(!gi(t))throw Error(b(200));return hi(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!gi(e))throw Error(b(40));return e._reactRootContainer?(Pt(function(){hi(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};ye.unstable_batchedUpdates=za;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gi(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return hi(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function ru(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ru)}catch(e){console.error(e)}}ru(),rs.exports=ye;var Mf=rs.exports,Hl=Mf;Qi.createRoot=Hl.createRoot,Qi.hydrateRoot=Hl.hydrateRoot;const Af=({activeSection:e,setActiveSection:t})=>{const[n,r]=C.useState(!1),[i,o]=C.useState(!1);C.useEffect(()=>{const c=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=c=>{const p=document.getElementById(c);p&&(p.scrollIntoView({behavior:"smooth"}),t(c),r(!1))},s=[{id:"home",label:"Home",icon:"🏠"},{id:"about",label:"About",icon:"👤"},{id:"skills",label:"Skills",icon:"⚡"},{id:"projects",label:"Projects",icon:"💼"},{id:"experience",label:"Experience",icon:"🚀"},{id:"education",label:"Education",icon:"🎓"},{id:"contact",label:"Contact",icon:"📧"}];return a.jsxs(a.Fragment,{children:[a.jsxs("nav",{className:`navbar ${i?"scrolled":""}`,children:[a.jsxs("div",{className:"nav-container",children:[a.jsxs("a",{href:"#home",className:"nav-logo",onClick:c=>{c.preventDefault(),l("home")},children:[a.jsx("span",{className:"logo-icon",children:"⚡"}),a.jsx("span",{className:"logo-text",children:"Portfolio"})]}),a.jsx("div",{className:`nav-menu ${n?"active":""}`,children:s.map((c,p)=>a.jsxs("a",{href:`#${c.id}`,className:`nav-link ${e===c.id?"active":""}`,onClick:v=>{v.preventDefault(),l(c.id)},style:{"--delay":`${p*.1}s`},children:[a.jsx("span",{className:"nav-icon",children:c.icon}),a.jsx("span",{className:"nav-text",children:c.label}),a.jsx("div",{className:"nav-link-bg"})]},c.id))}),a.jsxs("div",{className:`nav-hamburger ${n?"active":""}`,onClick:()=>r(!n),children:[a.jsx("span",{className:"bar"}),a.jsx("span",{className:"bar"}),a.jsx("span",{className:"bar"})]})]}),a.jsx("div",{className:`menu-overlay ${n?"active":""}`,onClick:()=>r(!1)})]}),a.jsx("style",{jsx:!0,children:`
        /* Dark Modern Navigation Styles */
        
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(6, 10, 24, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.1);
          z-index: 1000;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0.5rem 0;
        }

        .navbar.scrolled {
          background: rgba(6, 10, 24, 0.95);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          padding: 0.3rem 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          position: relative;
        }

        /* Logo Styles */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1001;
        }

        .logo-icon {
          font-size: 2rem;
          background: linear-gradient(135deg, #6366F1, #EC4899, #F59E0B);
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .nav-logo:hover .logo-icon {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
        }

        .nav-logo:hover .logo-text {
          background: linear-gradient(90deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Navigation Menu */
        .nav-menu {
          display: flex;
          gap: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #9CA3AF;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.3px;
        }

        .nav-link-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }

        .nav-icon {
          font-size: 1.1rem;
          transition: all 0.3s ease;
          filter: grayscale(1) opacity(0.7);
        }

        .nav-text {
          transition: all 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .nav-link:hover .nav-link-bg,
        .nav-link.active .nav-link-bg {
          opacity: 1;
          transform: scale(1);
        }

        .nav-link:hover .nav-icon,
        .nav-link.active .nav-icon {
          filter: grayscale(0) opacity(1);
          transform: scale(1.1);
        }

        .nav-link.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.15));
          border: 1px solid rgba(99, 102, 241, 0.3);
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
        }

        /* Hamburger Menu */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          cursor: pointer;
          z-index: 1001;
          position: relative;
        }

        .bar {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #6366F1, #EC4899);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
        }

        .nav-hamburger.active .bar:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
          background: #6366F1;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }

        .nav-hamburger.active .bar:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }

        .nav-hamburger.active .bar:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
          background: #EC4899;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }

        /* Menu Overlay */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Animations */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1.5rem;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 320px;
            background: linear-gradient(135deg, rgba(6, 10, 24, 0.98), rgba(17, 24, 39, 0.98));
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            align-items: stretch;
            padding: 6rem 2rem 2rem;
            gap: 0.5rem;
            transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-left: 1px solid rgba(99, 102, 241, 0.2);
            box-shadow: -10px 0 50px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-link {
            font-size: 1.1rem;
            padding: 1rem 1.5rem;
            border-radius: 16px;
            margin: 0.25rem 0;
            opacity: 0;
            transform: translateX(30px);
            animation: slideInRight 0.5s ease forwards;
            animation-delay: var(--delay);
          }

          .nav-hamburger {
            display: flex;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .logo-icon {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 1rem;
          }
          
          .nav-menu {
            width: 280px;
            padding: 5rem 1.5rem 2rem;
          }

          .nav-link {
            font-size: 1rem;
            padding: 0.875rem 1.25rem;
          }

          .logo-text {
            font-size: 1.2rem;
          }

          .logo-icon {
            font-size: 1.5rem;
          }
        }

        /* Dark theme enhancements */
        @media (prefers-color-scheme: dark) {
          .navbar {
            border-bottom-color: rgba(99, 102, 241, 0.15);
          }
        }

        /* Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }
      `})]})},Tf=({setActiveSection:e})=>{const[t,n]=C.useState(!1),[r,i]=C.useState({x:0,y:0}),[o,l]=C.useState(0),s=["Full Stack Developer","React Specialist","Node.js Expert","UI/UX Enthusiast"];C.useEffect(()=>{n(!0);const g=setInterval(()=>{l(y=>(y+1)%s.length)},3e3),h=y=>{i({x:(y.clientX/window.innerWidth-.5)*20,y:(y.clientY/window.innerHeight-.5)*20})};return window.addEventListener("mousemove",h),()=>{clearInterval(g),window.removeEventListener("mousemove",h)}},[]);const c=()=>{const g=document.createElement("a");g.href="/cv.pdf",g.download="chamishk-dinuwan-cv.pdf",document.body.appendChild(g),g.click(),document.body.removeChild(g)},p=g=>{const h=document.getElementById(g);h&&(h.scrollIntoView({behavior:"smooth"}),e(g))},v=[{name:"GitHub",icon:"⭐",url:"#"},{name:"LinkedIn",icon:"💼",url:"#"},{name:"Twitter",icon:"🐦",url:"#"},{name:"Email",icon:"📧",url:"mailto:chamishkadkulasinghe@gmail.com"}];return a.jsxs(a.Fragment,{children:[a.jsxs("section",{id:"home",className:"hero",children:[a.jsxs("div",{className:"hero-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"particles"})]}),a.jsxs("div",{className:"hero-container",children:[a.jsxs("div",{className:`hero-content ${t?"visible":""}`,children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("span",{className:"badge-dot"}),"Available for new opportunities"]}),a.jsxs("h1",{className:"hero-title",children:[a.jsx("span",{className:"title-line",children:"Hello, I'm"}),a.jsx("span",{className:"title-main",children:"Chamishk Dinuwan"})]}),a.jsxs("div",{className:"hero-subtitle-container",children:[a.jsx("span",{className:"subtitle-prefix",children:"A passionate"}),a.jsx("h2",{className:"hero-subtitle",children:s.map((g,h)=>a.jsx("span",{className:`role ${h===o?"active":""}`,children:g},g))})]}),a.jsx("p",{className:"hero-description",children:"Creating innovative web solutions with modern technologies and user-centered design. Passionate about crafting beautiful, functional experiences that make a difference."}),a.jsxs("div",{className:"hero-stats",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-number",children:"10+"}),a.jsx("span",{className:"stat-label",children:"Projects"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-number",children:"2+"}),a.jsx("span",{className:"stat-label",children:"Years Exp"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-number",children:"5+"}),a.jsx("span",{className:"stat-label",children:"Clients"})]})]}),a.jsxs("div",{className:"hero-buttons",children:[a.jsxs("button",{className:"btn btn-primary",onClick:()=>p("projects"),children:[a.jsx("span",{className:"btn-text",children:"View My Work"}),a.jsx("span",{className:"btn-icon",children:"🚀"})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:c,children:[a.jsx("span",{className:"btn-text",children:"Download CV"}),a.jsx("span",{className:"btn-icon",children:"📄"})]})]}),a.jsx("div",{className:"hero-social",children:v.map((g,h)=>a.jsx("a",{href:g.url,className:"social-link",title:g.name,style:{"--delay":`${h*.1}s`},children:a.jsx("span",{className:"social-icon",children:g.icon})},g.name))})]}),a.jsx("div",{className:`hero-image ${t?"visible":""}`,children:a.jsxs("div",{className:"image-container",style:{transform:`translate(${r.x*.5}px, ${r.y*.5}px)`},children:[a.jsxs("div",{className:"image-frame",children:[a.jsx("div",{className:"image-glow"}),a.jsx("img",{src:"/myimage.jpg",alt:"Chamishk Dinuwan",className:"profile-image"}),a.jsxs("div",{className:"image-overlay",children:[a.jsx("div",{className:"tech-badge",children:"React"}),a.jsx("div",{className:"tech-badge",children:"Node.js"}),a.jsx("div",{className:"tech-badge",children:"TypeScript"})]})]}),a.jsxs("div",{className:"floating-elements",children:[a.jsx("div",{className:"floating-icon",children:"💻"}),a.jsx("div",{className:"floating-icon",children:"⚡"}),a.jsx("div",{className:"floating-icon",children:"🎨"})]})]})})]}),a.jsxs("div",{className:"scroll-indicator",children:[a.jsx("div",{className:"scroll-arrow"}),a.jsx("span",{className:"scroll-text",children:"Scroll to explore"})]})]}),a.jsx("style",{jsx:!0,children:`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #EC4899, #F59E0B);
          top: 60%;
          right: 20%;
          animation-delay: -2s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #F59E0B, #10B981);
          bottom: 20%;
          left: 60%;
          animation-delay: -4s;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero-title {
          margin-bottom: 1rem;
        }

        .title-line {
          display: block;
          font-size: 1.5rem;
          color: #9CA3AF;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        .title-main {
          display: block;
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          height: 3rem;
        }

        .subtitle-prefix {
          color: #9CA3AF;
          font-size: 1.5rem;
          font-weight: 400;
        }

        .hero-subtitle {
          position: relative;
          font-size: 1.5rem;
          font-weight: 600;
          height: 2rem;
          overflow: hidden;
        }

        .role {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: linear-gradient(135deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .role.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-description {
          font-size: 1.2rem;
          color: #D1D5DB;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 90%;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #9CA3AF;
          font-weight: 500;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border: none;
          cursor: pointer;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          min-width: 160px;
          justify-content: center;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-icon {
          transform: scale(1.2);
        }

        .hero-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.6s ease forwards;
          animation-delay: var(--delay);
        }

        .social-link:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-3px);
        }

        .social-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .social-link:hover .social-icon {
          transform: scale(1.2);
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .hero-image.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .image-container {
          position: relative;
          transition: transform 0.1s ease-out;
        }

        .image-frame {
          position: relative;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(99, 102, 241, 0.3);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .image-glow {
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, #6366F1, #EC4899, #F59E0B);
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(20px);
          z-index: -1;
          animation: rotate 10s linear infinite;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(99, 102, 241, 0.1) 100%);
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-frame:hover .image-overlay {
          opacity: 1;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.9);
          color: #1F2937;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-icon {
          position: absolute;
          font-size: 2rem;
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5));
          animation: float 3s ease-in-out infinite;
        }

        .floating-icon:nth-child(1) {
          top: 10%;
          right: -10%;
          animation-delay: 0s;
        }

        .floating-icon:nth-child(2) {
          bottom: 20%;
          left: -15%;
          animation-delay: -1s;
        }

        .floating-icon:nth-child(3) {
          top: 60%;
          right: -20%;
          animation-delay: -2s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #9CA3AF;
          font-size: 0.9rem;
          animation: bounce 2s infinite;
        }

        .scroll-arrow {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, transparent, #6366F1);
          margin-bottom: 0.5rem;
          position: relative;
        }

        .scroll-arrow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 6px solid #6366F1;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            gap: 3rem;
          }

          .title-main {
            font-size: 3.5rem;
          }

          .image-frame {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 60px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
            padding: 1.5rem;
          }

          .title-main {
            font-size: 2.8rem;
          }

          .hero-subtitle-container {
            justify-content: center;
          }

          .hero-description {
            max-width: 100%;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .image-frame {
            width: 280px;
            height: 280px;
          }

          .floating-icon {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 1rem;
          }

          .title-main {
            font-size: 2.2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            min-width: 200px;
          }

          .hero-stats {
            gap: 1rem;
          }

          .image-frame {
            width: 250px;
            height: 250px;
          }
        }
      `})]})},Df=({setActiveSection:e})=>{const[t,n]=C.useState(!1),[r,i]=C.useState(null),[o,l]=C.useState({x:0,y:0}),s=C.useRef(null),c=[{number:"2+",label:"Years Experience",icon:"🚀",color:"#6366F1"},{number:"10+",label:"Projects Completed",icon:"💼",color:"#EC4899"},{number:"5+",label:"Happy Clients",icon:"😊",color:"#10B981"},{number:"15+",label:"Technologies",icon:"⚡",color:"#F59E0B"}],p=["React","Node.js","TypeScript","Python","MongoDB","PostgreSQL","AWS","Docker","GraphQL","Next.js"];return C.useEffect(()=>{const v=new IntersectionObserver(([h])=>{h.isIntersecting&&n(!0)},{threshold:.3});s.current&&v.observe(s.current);const g=h=>{if(s.current){const y=s.current.getBoundingClientRect();l({x:((h.clientX-y.left)/y.width-.5)*20,y:((h.clientY-y.top)/y.height-.5)*20})}};return window.addEventListener("mousemove",g),()=>{s.current&&v.unobserve(s.current),window.removeEventListener("mousemove",g)}},[]),a.jsxs(a.Fragment,{children:[a.jsxs("section",{id:"about",className:"about",ref:s,children:[a.jsxs("div",{className:"about-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"grid-pattern"})]}),a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:`section-header ${t?"visible":""}`,children:[a.jsxs("span",{className:"section-badge",children:[a.jsx("span",{className:"badge-icon",children:"👨‍💻"}),"Get to know me"]}),a.jsx("h2",{className:"section-title",children:"About Me"}),a.jsx("p",{className:"section-subtitle",children:"Crafting digital experiences with passion and precision"})]}),a.jsxs("div",{className:`about-content ${t?"visible":""}`,children:[a.jsxs("div",{className:"about-main",children:[a.jsxs("div",{className:"about-text",children:[a.jsxs("div",{className:"text-block",children:[a.jsx("div",{className:"text-icon",children:"💡"}),a.jsxs("p",{children:["I'm a passionate full-stack developer with ",a.jsx("span",{className:"highlight",children:"3+ years"})," of experience creating innovative web applications. I specialize in JavaScript technologies including React, Node.js, and TypeScript, with a strong focus on ",a.jsx("span",{className:"highlight",children:"responsive design"})," and exceptional user experience."]})]}),a.jsxs("div",{className:"text-block",children:[a.jsx("div",{className:"text-icon",children:"🎯"}),a.jsxs("p",{children:["My approach combines ",a.jsx("span",{className:"highlight",children:"technical expertise"})," with creative problem-solving to deliver solutions that exceed expectations. I thrive on tackling complex challenges and continuously expanding my skill set to stay ahead of industry trends."]})]}),a.jsxs("div",{className:"text-block",children:[a.jsx("div",{className:"text-icon",children:"🌟"}),a.jsxs("p",{children:["When I'm not coding, you can find me contributing to ",a.jsx("span",{className:"highlight",children:"open-source projects"}),", exploring cutting-edge technologies, or sharing knowledge through tech blogs and community events. I believe in the power of collaboration and continuous learning."]})]}),a.jsxs("div",{className:"skills-cloud",children:[a.jsx("h4",{className:"skills-title",children:"Technologies I Love"}),a.jsx("div",{className:"skills-container",children:p.map((v,g)=>a.jsx("span",{className:"skill-tag",style:{"--delay":`${g*.1}s`},children:v},v))})]})]}),a.jsx("div",{className:"about-visual",children:a.jsx("div",{className:"visual-container",style:{transform:`translate(${o.x*.3}px, ${o.y*.3}px)`},children:a.jsxs("div",{className:"code-window",children:[a.jsxs("div",{className:"window-header",children:[a.jsxs("div",{className:"window-controls",children:[a.jsx("span",{className:"control close"}),a.jsx("span",{className:"control minimize"}),a.jsx("span",{className:"control maximize"})]}),a.jsx("span",{className:"window-title",children:"about-me.js"})]}),a.jsxs("div",{className:"code-content",children:[a.jsxs("div",{className:"code-line",children:[a.jsx("span",{className:"keyword",children:"const"}),a.jsx("span",{className:"variable",children:" developer"}),a.jsx("span",{className:"operator",children:" = "}),a.jsx("span",{className:"bracket",children:"{"})]}),a.jsxs("div",{className:"code-line indent",children:[a.jsx("span",{className:"property",children:"name:"}),a.jsx("span",{className:"string",children:" 'Chamishk'"}),a.jsx("span",{className:"punctuation",children:","})]}),a.jsxs("div",{className:"code-line indent",children:[a.jsx("span",{className:"property",children:"role:"}),a.jsx("span",{className:"string",children:" 'Full Stack'"}),a.jsx("span",{className:"punctuation",children:","})]}),a.jsxs("div",{className:"code-line indent",children:[a.jsx("span",{className:"property",children:"passion:"}),a.jsx("span",{className:"string",children:" 'Innovation'"})]}),a.jsx("div",{className:"code-line",children:a.jsx("span",{className:"bracket",children:"}"})})]})]})})})]}),a.jsxs("div",{className:"stats-section",children:[a.jsx("h3",{className:"stats-title",children:"My Journey in Numbers"}),a.jsx("div",{className:"stats-grid",children:c.map((v,g)=>a.jsxs("div",{className:`stat-card ${r===g?"hovered":""}`,onMouseEnter:()=>i(g),onMouseLeave:()=>i(null),style:{"--delay":`${g*.1}s`,"--color":v.color},children:[a.jsx("div",{className:"stat-icon",children:v.icon}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h4",{className:"stat-number",children:v.number}),a.jsx("p",{className:"stat-label",children:v.label})]}),a.jsx("div",{className:"stat-glow"})]},g))})]})]})]}),a.jsxs("div",{className:"floating-elements",children:[a.jsx("div",{className:"floating-shape shape-1",children:"⚡"}),a.jsx("div",{className:"floating-shape shape-2",children:"💻"}),a.jsx("div",{className:"floating-shape shape-3",children:"🚀"}),a.jsx("div",{className:"floating-shape shape-4",children:"🎨"})]})]}),a.jsx("style",{jsx:!0,children:`
        .about {
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .about-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: -10%;
          right: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #10B981, #F59E0B);
          bottom: -5%;
          left: -5%;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #EC4899, #8B5CF6);
          top: 50%;
          left: 50%;
          animation-delay: -6s;
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #9CA3AF;
          font-weight: 400;
        }

        .about-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .about-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 6rem;
        }

        .about-text {
          color: #D1D5DB;
        }

        .text-block {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateX(-30px);
          animation: slideInLeft 0.8s ease forwards;
        }

        .text-block:nth-child(1) { animation-delay: 0.3s; }
        .text-block:nth-child(2) { animation-delay: 0.5s; }
        .text-block:nth-child(3) { animation-delay: 0.7s; }

        .text-icon {
          font-size: 1.5rem;
          min-width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-top: 0.2rem;
        }

        .text-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin: 0;
        }

        .highlight {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 600;
        }

        .skills-cloud {
          margin-top: 3rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.9s;
        }

        .skills-title {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: scale(0.8);
          animation: popIn 0.5s ease forwards;
          animation-delay: var(--delay);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
          transform: scale(1.05);
        }

        .about-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-container {
          transition: transform 0.1s ease-out;
        }

        .code-window {
          width: 350px;
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid rgba(75, 85, 99, 0.3);
          border-radius: 12px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: scale(0.9);
          animation: scaleIn 0.8s ease forwards 0.4s;
        }

        .window-header {
          background: rgba(31, 41, 55, 0.8);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(75, 85, 99, 0.3);
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .close { background: #EF4444; }
        .minimize { background: #F59E0B; }
        .maximize { background: #10B981; }

        .window-title {
          color: #9CA3AF;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .code-content {
          padding: 1.5rem;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .code-line {
          margin-bottom: 0.5rem;
        }

        .indent { padding-left: 1.5rem; }

        .keyword { color: #EC4899; }
        .variable { color: #60A5FA; }
        .operator { color: #F59E0B; }
        .property { color: #10B981; }
        .string { color: #F59E0B; }
        .bracket { color: #D1D5DB; }
        .punctuation { color: #9CA3AF; }

        .stats-section {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 1.1s;
        }

        .stats-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 3rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.6s ease forwards;
          animation-delay: var(--delay);
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .stat-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, var(--color), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover .stat-glow {
          opacity: 0.1;
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, var(--color));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
        }

        .stat-card:hover .stat-number {
          transform: scale(1.1);
        }

        .stat-label {
          color: #9CA3AF;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .floating-shape {
          position: absolute;
          font-size: 2rem;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          top: 70%;
          right: 15%;
          animation-delay: -2s;
        }

        .shape-3 {
          bottom: 20%;
          left: 80%;
          animation-delay: -4s;
        }

        .shape-4 {
          top: 40%;
          left: 5%;
          animation-delay: -1s;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }

        @keyframes gridMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-main {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .code-window {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .about-main {
            gap: 2rem;
            margin-bottom: 4rem;
          }

          .text-block {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stats-title {
            font-size: 2rem;
          }

          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .code-window {
            width: 100%;
          }

          .skills-container {
            justify-content: center;
          }
        }
      `})]})},Rf=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(null),[i,o]=C.useState("all"),[l,s]=C.useState({}),c=C.useRef(null),p=[{id:"all",name:"All Skills",icon:"⚡"},{id:"frontend",name:"Frontend",icon:"🎨"},{id:"backend",name:"Backend",icon:"⚙️"},{id:"tools",name:"Tools",icon:"🛠️"}],v=[{name:"HTML/CSS",level:95,category:"frontend",icon:"🌐",color:"#E34F26"},{name:"JavaScript",level:90,category:"frontend",icon:"⚡",color:"#F7DF1E"},{name:"React",level:88,category:"frontend",icon:"⚛️",color:"#61DAFB"},{name:"TypeScript",level:85,category:"frontend",icon:"📘",color:"#3178C6"},{name:"Node.js",level:82,category:"backend",icon:"🟢",color:"#339933"},{name:"Python",level:78,category:"backend",icon:"🐍",color:"#3776AB"},{name:"MongoDB",level:75,category:"backend",icon:"🍃",color:"#47A248"},{name:"PostgreSQL",level:72,category:"backend",icon:"🐘",color:"#336791"},{name:"Git",level:90,category:"tools",icon:"📚",color:"#F05032"},{name:"Docker",level:70,category:"tools",icon:"🐳",color:"#2496ED"},{name:"AWS",level:68,category:"tools",icon:"☁️",color:"#FF9900"},{name:"UI/UX Design",level:75,category:"frontend",icon:"🎨",color:"#FF6B6B"}],g=i==="all"?v:v.filter(u=>u.category===i);C.useEffect(()=>{const u=new IntersectionObserver(([w])=>{w.isIntersecting&&(t(!0),setTimeout(()=>{const f={};v.forEach((d,m)=>{setTimeout(()=>{f[d.name]=d.level,s(x=>({...x,[d.name]:d.level}))},m*200)})},500))},{threshold:.3});return c.current&&u.observe(c.current),()=>{c.current&&u.unobserve(c.current)}},[]);const h=u=>l[u]||0,y=u=>u>=90?"Expert":u>=80?"Advanced":u>=70?"Intermediate":"Beginner",k=u=>u>=90?"#10B981":u>=80?"#6366F1":u>=70?"#F59E0B":"#EF4444";return a.jsxs(a.Fragment,{children:[a.jsxs("section",{id:"skills",className:"skills",ref:c,children:[a.jsxs("div",{className:"skills-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"code-rain",children:[...Array(20)].map((u,w)=>a.jsx("div",{className:"code-symbol",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`},children:["</>","{}","[]","()","&&","||"][Math.floor(Math.random()*6)]},w))})]}),a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:`section-header ${e?"visible":""}`,children:[a.jsxs("span",{className:"section-badge",children:[a.jsx("span",{className:"badge-icon",children:"💪"}),"What I bring to the table"]}),a.jsx("h2",{className:"section-title",children:"Technical Skills"}),a.jsx("p",{className:"section-subtitle",children:"Mastering technologies to build exceptional digital experiences"})]}),a.jsx("div",{className:`category-filter ${e?"visible":""}`,children:p.map(u=>a.jsxs("button",{className:`filter-btn ${i===u.id?"active":""}`,onClick:()=>o(u.id),children:[a.jsx("span",{className:"filter-icon",children:u.icon}),a.jsx("span",{className:"filter-text",children:u.name}),a.jsx("div",{className:"filter-glow"})]},u.id))}),a.jsx("div",{className:`skills-grid ${e?"visible":""}`,children:g.map((u,w)=>a.jsxs("div",{className:`skill-card ${n===w?"hovered":""}`,onMouseEnter:()=>r(w),onMouseLeave:()=>r(null),style:{"--delay":`${w*.1}s`,"--skill-color":u.color,"--level":`${h(u.name)}%`},children:[a.jsxs("div",{className:"skill-header",children:[a.jsxs("div",{className:"skill-info",children:[a.jsx("div",{className:"skill-icon",children:u.icon}),a.jsxs("div",{children:[a.jsx("h3",{className:"skill-name",children:u.name}),a.jsx("span",{className:"skill-level-text",style:{color:k(u.level)},children:y(u.level)})]})]}),a.jsxs("div",{className:"skill-percentage",style:{display:"none"},children:[a.jsx("span",{className:"percentage-number",children:h(u.name)}),a.jsx("span",{className:"percentage-symbol",children:"%"})]})]}),a.jsxs("div",{className:"circular-progress",children:[a.jsxs("svg",{className:"progress-ring",width:"120",height:"120",children:[a.jsx("circle",{className:"progress-ring-background",cx:"60",cy:"60",r:"50",fill:"transparent",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"8"}),a.jsx("circle",{className:"progress-ring-progress",cx:"60",cy:"60",r:"50",fill:"transparent",stroke:u.color,strokeWidth:"8",strokeLinecap:"round",style:{strokeDasharray:`${2*Math.PI*50}`,strokeDashoffset:`${2*Math.PI*50*(1-h(u.name)/100)}`,transform:"rotate(-90deg)",transformOrigin:"50% 50%",transition:"stroke-dashoffset 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"}})]}),a.jsx("div",{className:"progress-center",children:a.jsx("span",{className:"center-icon",children:u.icon})})]}),a.jsx("div",{className:"skill-bar",children:a.jsx("div",{className:"skill-bar-background",children:a.jsx("div",{className:"skill-bar-fill",style:{width:`${h(u.name)}%`,background:`linear-gradient(90deg, ${u.color}, ${u.color}aa)`},children:a.jsx("div",{className:"skill-bar-glow"})})})}),a.jsx("div",{className:"skill-overlay",children:a.jsxs("div",{className:"overlay-content",children:[a.jsx("h4",{children:"Experience Level"}),a.jsx("div",{className:"experience-dots",children:[...Array(5)].map((f,d)=>a.jsx("div",{className:`dot ${d<Math.ceil(u.level/20)?"active":""}`},d))}),a.jsx("p",{className:"skill-description",children:u.level>=90?"Master level proficiency with extensive project experience":u.level>=80?"Advanced skills with multiple successful implementations":u.level>=70?"Solid understanding with practical application experience":"Growing expertise with hands-on learning"})]})}),a.jsx("div",{className:"card-glow",style:{background:`radial-gradient(circle, ${u.color}22 0%, transparent 70%)`}})]},u.name))}),a.jsxs("div",{className:`skills-summary ${e?"visible":""}`,children:[a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"🎯 Primary Focus"}),a.jsx("p",{children:"Full-stack JavaScript development with React and Node.js"})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"🚀 Currently Learning"}),a.jsx("p",{children:"Advanced TypeScript patterns and microservices architecture"})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"💡 Next Goals"}),a.jsx("p",{children:"Machine Learning integration and advanced DevOps practices"})]})]})]})]}),a.jsx("style",{jsx:!0,children:`
        .skills {
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .skills-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: float 10s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #10B981, #F59E0B);
          bottom: 20%;
          right: 10%;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #8B5CF6, #06B6D4);
          top: 60%;
          left: 70%;
          animation-delay: -6s;
        }

        .code-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .code-symbol {
          position: absolute;
          color: rgba(99, 102, 241, 0.1);
          font-family: 'Monaco', monospace;
          font-size: 1.2rem;
          animation: codeRain linear infinite;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #9CA3AF;
          font-weight: 400;
        }

        .category-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          flex-wrap: wrap;
        }

        .category-filter.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          color: #9CA3AF;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .filter-btn:hover {
          color: #ffffff;
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: rgba(99, 102, 241, 0.2);
          color: #ffffff;
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
        }

        .filter-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .filter-btn.active .filter-glow {
          opacity: 1;
        }

        .filter-icon {
          font-size: 1.2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .skills-grid.visible {
          opacity: 1;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.6s ease forwards;
          animation-delay: var(--delay);
        }

        .skill-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--skill-color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .skill-card:hover .card-glow {
          opacity: 1;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .skill-icon {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-name {
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }

        .skill-level-text {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
        }

        .skill-percentage {
          display: none;
        }

        .percentage-number {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .percentage-symbol {
          font-size: 1.2rem;
          color: #9CA3AF;
        }

        .circular-progress {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .progress-ring {
          transform: rotate(-90deg);
        }

        .progress-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .center-icon {
          font-size: 2rem;
          filter: drop-shadow(0 0 10px var(--skill-color));
        }

        .skill-bar {
          margin-bottom: 1rem;
        }

        .skill-bar-background {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .skill-bar-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        .skill-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-card:hover .skill-overlay {
          opacity: 1;
          transform: scale(1);
        }

        .overlay-content {
          text-align: center;
          color: #ffffff;
        }

        .overlay-content h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--skill-color);
        }

        .experience-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--skill-color);
          box-shadow: 0 0 10px var(--skill-color);
        }

        .skill-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
          margin: 0;
        }

        .skills-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
        }

        .skills-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .summary-card h3 {
          color: #ffffff;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .summary-card p {
          color: #9CA3AF;
          margin: 0;
          line-height: 1.6;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(2deg); }
          66% { transform: translateY(15px) rotate(-1deg); }
        }

        @keyframes codeRain {
          0% { 
            transform: translateY(-100px);
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(calc(100vh + 100px));
            opacity: 0;
          }
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .skills {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .category-filter {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .skills-summary {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.5rem;
          }

          .skill-card {
            padding: 1.25rem;
          }

          .circular-progress svg {
            width: 100px;
            height: 100px;
          }

          .circular-progress .progress-ring-background,
          .circular-progress .progress-ring-progress {
            r: 40;
          }

          .category-filter {
            flex-direction: column;
            align-items: center;
          }

          .code-symbol {
            display: none;
          }
        }
      `})]})},$f=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(null),[i,o]=C.useState("all"),[l,s]=C.useState(null),c=C.useRef(null),p=[{id:"all",name:"All Projects",icon:"🚀"},{id:"web",name:"Web Apps",icon:"🌐"},{id:"mobile",name:"Mobile Apps",icon:"📱"},{id:"fullstack",name:"Full Stack",icon:"⚡"}],v=[{id:1,title:"MISP E+",description:"A comprehensive full-stack e-commerce solution featuring modern React frontend, robust Node.js backend, and secure Firebase authentication. Built with scalable architecture and optimized performance.",shortDescription:"Full-stack e-commerce platform with React, Node.js, and Firebase",technologies:["React","Node.js","Firebase","Python Flask"],image:"/misp.png",github:"https://github.com/chamishkadinuwan/mispe.git",demo:"https://example.com",category:"fullstack",featured:!0,status:"completed",color:"#6366F1"},{id:2,title:"TeachMate",description:"An innovative AI-powered mobile e-learning application leveraging the Gemini API to deliver personalized lessons, interactive quizzes, and real-time learning assistance. Optimized for seamless on-the-go education.",shortDescription:"AI-powered mobile e-learning app with Gemini API integration",technologies:["React Native","Firebase","Material UI","Gemini API"],image:"/placeholder-project.jpg",github:"https://github.com/chamishkadinuwan/guru.git",demo:"https://example.com",category:"mobile",featured:!0,status:"completed",color:"#10B981"},{id:3,title:"TechPulse",description:"A cutting-edge mobile news application built with Java and Firebase, delivering real-time technology updates, personalized news feeds, and intelligent content curation for tech enthusiasts.",shortDescription:"Mobile tech news app with real-time updates and personalization",technologies:["Java","Firebase","Material UI"],image:"/techpuls2.jpeg",github:"https://github.com/chamishkadinuwan/techpulse.git",demo:"https://example.com",category:"mobile",featured:!1,status:"completed",color:"#F59E0B"},{id:4,title:"Attendese",description:"A comprehensive web-based attendance management system built with HTML, CSS, PHP, and SQL database. Features easy tracking, management, and reporting of student or employee attendance with intuitive dashboard.",shortDescription:"Web-based attendance system with comprehensive tracking features",technologies:["HTML","CSS","PHP","SQL database"],image:"/placeholder-project.jpg",github:"https://github.com/chamishkadinuwan/attendese.git",demo:"https://example.com",category:"web",featured:!1,status:"completed",color:"#EC4899"}],g=i==="all"?v:v.filter(u=>u.category===i);C.useEffect(()=>{const u=new IntersectionObserver(([w])=>{w.isIntersecting&&t(!0)},{threshold:.2});return c.current&&u.observe(c.current),()=>{c.current&&u.unobserve(c.current)}},[]);const h=u=>({React:"#61DAFB","Node.js":"#339933",Firebase:"#FFCA28","Python Flask":"#000000","React Native":"#61DAFB","Material UI":"#0081CB","Gemini API":"#4285F4",Java:"#F89820",HTML:"#E34F26",CSS:"#1572B6",PHP:"#777BB4","SQL database":"#336791"})[u]||"#6366F1",y=(u,w)=>{u.preventDefault(),u.stopPropagation(),console.log("GitHub clicked:",w),window.open(w,"_blank","noopener,noreferrer")},k=(u,w)=>{u.preventDefault(),u.stopPropagation(),console.log("Demo clicked:",w),window.open(w,"_blank","noopener,noreferrer")};return a.jsxs(a.Fragment,{children:[a.jsxs("section",{id:"projects",className:"projects",ref:c,children:[a.jsxs("div",{className:"projects-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"code-rain",children:[...Array(15)].map((u,w)=>a.jsx("div",{className:"code-symbol",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*3}s`},children:["<div>","</>","{...}","API","DB","()=>"][Math.floor(Math.random()*6)]},w))})]}),a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:`section-header ${e?"visible":""}`,children:[a.jsxs("span",{className:"section-badge",children:[a.jsx("span",{className:"badge-icon",children:"💼"}),"Crafting digital solutions"]}),a.jsx("h2",{className:"section-title",children:"Featured Projects"}),a.jsx("p",{className:"section-subtitle",children:"Showcasing innovative solutions built with modern technologies"})]}),a.jsx("div",{className:`filter-container ${e?"visible":""}`,children:p.map(u=>a.jsxs("button",{className:`filter-btn ${i===u.id?"active":""}`,onClick:()=>o(u.id),children:[a.jsx("span",{className:"filter-icon",children:u.icon}),a.jsx("span",{className:"filter-text",children:u.name}),a.jsx("div",{className:"filter-glow"})]},u.id))}),a.jsx("div",{className:`projects-grid ${e?"visible":""}`,children:g.map((u,w)=>a.jsxs("div",{className:`project-card ${n===w?"hovered":""} ${u.featured?"featured":""}`,onMouseEnter:()=>r(w),onMouseLeave:()=>r(null),style:{"--delay":`${w*.15}s`,"--project-color":u.color},children:[u.featured&&a.jsxs("div",{className:"featured-badge",children:[a.jsx("span",{className:"badge-star",children:"⭐"}),a.jsx("span",{className:"badge-text",children:"Featured"})]}),a.jsxs("div",{className:"status-badge",children:[a.jsx("div",{className:"status-dot"}),a.jsx("span",{className:"status-text",children:u.status})]}),a.jsxs("div",{className:"project-image",children:[a.jsx("img",{src:u.image,alt:u.title}),a.jsx("div",{className:"image-overlay",children:a.jsx("div",{className:"overlay-content",children:a.jsxs("div",{className:"project-links",children:[a.jsxs("button",{className:"project-link github",onClick:f=>y(f,u.github),type:"button",children:[a.jsx("span",{className:"link-icon",children:"📚"}),a.jsx("span",{children:"Code"})]}),a.jsxs("button",{className:"project-link demo",onClick:f=>k(f,u.demo),type:"button",children:[a.jsx("span",{className:"link-icon",children:"🚀"}),a.jsx("span",{children:"Live Demo"})]})]})})}),a.jsx("div",{className:"image-glow",style:{background:`radial-gradient(circle, ${u.color}33 0%, transparent 70%)`}})]}),a.jsxs("div",{className:"project-content",children:[a.jsxs("div",{className:"project-header",children:[a.jsx("h3",{className:"project-title",children:u.title}),a.jsx("button",{className:"expand-btn",onClick:()=>s(l===u.id?null:u.id),children:a.jsx("span",{className:`expand-icon ${l===u.id?"expanded":""}`,children:l===u.id?"−":"+"})})]}),a.jsx("p",{className:"project-description",children:l===u.id?u.description:u.shortDescription}),a.jsx("div",{className:"project-technologies",children:u.technologies.map((f,d)=>a.jsxs("span",{className:"tech-tag",style:{"--tech-color":h(f),"--delay":`${d*.1}s`},children:[a.jsx("span",{className:"tech-dot"}),f]},d))}),a.jsxs("div",{className:"project-stats",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-icon",children:"🔧"}),a.jsxs("span",{className:"stat-text",children:[u.technologies.length," Technologies"]})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-icon",children:"📂"}),a.jsx("span",{className:"stat-text",children:u.category.charAt(0).toUpperCase()+u.category.slice(1)})]})]})]}),a.jsx("div",{className:"card-glow",style:{background:`radial-gradient(circle, ${u.color}15 0%, transparent 70%)`}}),a.jsx("div",{className:"animated-border"})]},u.id))}),a.jsxs("div",{className:`projects-summary ${e?"visible":""}`,children:[a.jsxs("div",{className:"summary-card",children:[a.jsx("div",{className:"summary-icon",children:"📊"}),a.jsx("h3",{children:"Project Stats"}),a.jsxs("div",{className:"stat-grid",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-number",children:v.length}),a.jsx("span",{className:"stat-label",children:"Total Projects"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-number",children:v.filter(u=>u.featured).length}),a.jsx("span",{className:"stat-label",children:"Featured"})]})]})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("div",{className:"summary-icon",children:"🛠️"}),a.jsx("h3",{children:"Tech Stack"}),a.jsx("div",{className:"tech-cloud",children:[...new Set(v.flatMap(u=>u.technologies))].slice(0,6).map((u,w)=>a.jsx("span",{className:"cloud-tech",style:{"--delay":`${w*.1}s`},children:u},w))})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("div",{className:"summary-icon",children:"🎯"}),a.jsx("h3",{children:"Focus Areas"}),a.jsxs("div",{className:"focus-list",children:[a.jsx("div",{className:"focus-item",children:"Full-Stack Development"}),a.jsx("div",{className:"focus-item",children:"Mobile Applications"}),a.jsx("div",{className:"focus-item",children:"AI Integration"})]})]})]})]})]}),a.jsx("style",{jsx:!0,children:`
   .projects {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.projects-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  animation: float 12s ease-in-out infinite;
}

.orb-1 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #6366F1, #EC4899);
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.orb-2 {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #10B981, #F59E0B);
  bottom: 30%;
  right: 15%;
  animation-delay: -4s;
}

.orb-3 {
  width: 220px;
  height: 220px;
  background: linear-gradient(135deg, #8B5CF6, #06B6D4);
  top: 50%;
  left: 60%;
  animation-delay: -8s;
}

.code-rain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.code-symbol {
  position: absolute;
  color: rgba(99, 102, 241, 0.08);
  font-family: 'Monaco', monospace;
  font-size: 1rem;
  animation: codeRain linear infinite;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 1.2rem;
}

.section-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #9CA3AF;
  font-weight: 400;
}

.filter-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
  flex-wrap: wrap;
}

.filter-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: #9CA3AF;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.filter-btn:hover {
  color: #ffffff;
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: rgba(99, 102, 241, 0.2);
  color: #ffffff;
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
}

.filter-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-btn.active .filter-glow {
  opacity: 1;
}

.filter-icon {
  font-size: 1.2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
}

.projects-grid.visible {
  opacity: 1;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(20px);
  position: relative;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease forwards;
  animation-delay: var(--delay);
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: var(--project-color);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
}

.project-card.featured {
  border-color: rgba(255, 215, 0, 0.3);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #10B981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.project-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(236, 72, 153, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #1F2937;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.project-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.project-link.github {
  background: linear-gradient(135deg, #333, #000);
  color: #fff;
}

.project-link.demo {
  background: linear-gradient(135deg, #6366F1, #EC4899);
  color: #fff;
}

.link-icon {
  font-size: 1rem;
}

.image-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.project-card:hover .image-glow {
  opacity: 1;
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.expand-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  font-weight: bold;
}

.expand-btn:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.4);
  transform: scale(1.1);
}

.expand-icon {
  transition: transform 0.3s ease;
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.project-description {
  color: #9CA3AF;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(10px);
  animation: techSlideIn 0.4s ease forwards;
  animation-delay: var(--delay);
}

.tech-tag:hover {
  background: var(--tech-color);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.tech-dot {
  width: 6px;
  height: 6px;
  background: var(--tech-color);
  border-radius: 50%;
}

.project-stats {
  display: flex;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9CA3AF;
  font-size: 0.85rem;
}

.stat-icon {
  font-size: 1rem;
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: 20px;
}

.project-card:hover .card-glow {
  opacity: 1;
}

.animated-border {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, var(--project-color), transparent, var(--project-color));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: exclude;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .animated-border {
  opacity: 0.5;
}

.projects-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
}

.projects-summary.visible {
  opacity: 1;
  transform: translateY(0);
}

.summary-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
  border-color: rgba(99, 102, 241, 0.3);
}

.summary-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.summary-card h3 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #6366F1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  color: #9CA3AF;
}

.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.cloud-tech {
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  opacity: 0;
  transform: scale(0.8);
  animation: techCloudIn 0.4s ease forwards;
  animation-delay: var(--delay);
}

.focus-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.focus-item {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  border-left: 3px solid #6366F1;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(1deg); }
  66% { transform: translateY(10px) rotate(-0.5deg); }
}

@keyframes codeRain {
  0% { 
    transform: translateY(-50px);
    opacity: 0;
  }
  10% { 
    opacity: 0.8;
  }
  90% { 
    opacity: 0.8;
  }
  100% { 
    transform: translateY(calc(100vh + 50px));
    opacity: 0;
  }
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes techSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes techCloudIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 6rem 0 4rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 3rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    margin: 0 auto;
    max-width: 400px;
  }

  .filter-container {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .projects-summary {
    grid-template-columns: 1fr;
  }

  .project-links {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.5rem;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-image {
    height: 200px;
  }

  .filter-container {
    flex-direction: column;
    align-items: center;
  }

  .code-symbol {
    display: none;
  }

  .stat-grid {
    grid-template-columns: 1fr;
  }
}
      `})]})},Of=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(null),[i,o]=C.useState("all"),[l,s]=C.useState(null),c=C.useRef(null),p=[{id:"all",name:"All Experience",icon:"🚀"},{id:"frontend",name:"Frontend",icon:"🎨"},{id:"fullstack",name:"Full Stack",icon:"⚙️"},{id:"leadership",name:"Leadership",icon:"👨‍💼"}],v=[{id:1,role:"Intern Software Developer",company:"RTA Labs LLC.",duration:"Jan 2024 - Present",type:"fullstack",color:"#6366F1",icon:"💼",location:"Remote",employmentType:"Full-time",companySize:"1-10 employees",achievements:["Led development of company's flagship SaaS product using React and TypeScript","Improved application performance by 40% through code optimization and lazy loading","Mentored 5+ junior developers and conducted comprehensive code reviews","Architected micro-frontend architecture reducing deployment time by 60%","Spearheaded adoption of modern testing practices increasing code coverage to 95%"],technologies:["React","TypeScript","Next.js","Tailwind CSS","Jest","Cypress"],highlights:{impact:"40% performance improvement",team:"5+ developers mentored",coverage:"95% test coverage"}}],g=i==="all"?v:v.filter(u=>u.type===i);C.useEffect(()=>{const u=new IntersectionObserver(([w])=>{w.isIntersecting&&t(!0)},{threshold:.3});return c.current&&u.observe(c.current),()=>{c.current&&u.unobserve(c.current)}},[]);const h=()=>{const f=Math.abs(new Date-new Date("2024-06-01"));return Math.ceil(f/(1e3*60*60*24*365))},k=(()=>({totalYears:h(),totalProjects:v.reduce((u,w)=>u+(w.highlights.projects?parseInt(w.highlights.projects):8),0),totalTechnologies:[...new Set(v.flatMap(u=>u.technologies))].length}))();return a.jsxs(a.Fragment,{children:[a.jsxs("section",{id:"experience",className:"experience",ref:c,children:[a.jsxs("div",{className:"experience-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"code-rain",children:[...Array(15)].map((u,w)=>a.jsx("div",{className:"code-symbol",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*3}s`},children:["💼","🚀","⚡","🎯","💡","🔧"][Math.floor(Math.random()*6)]},w))})]}),a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:`section-header ${e?"visible":""}`,children:[a.jsxs("span",{className:"section-badge",children:[a.jsx("span",{className:"badge-icon",children:"💼"}),"My Professional Journey"]}),a.jsx("h2",{className:"section-title",children:"Work Experience"}),a.jsx("p",{className:"section-subtitle",children:"Building impactful solutions and leading teams across diverse technology stacks"})]}),a.jsxs("div",{className:`experience-stats ${e?"visible":""}`,children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"📅"}),a.jsxs("div",{className:"stat-value",children:[k.totalYears,"+"]}),a.jsx("div",{className:"stat-label",children:"Years Experience"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"🚀"}),a.jsxs("div",{className:"stat-value",children:[k.totalProjects,"+"]}),a.jsx("div",{className:"stat-label",children:"Projects Completed"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"⚡"}),a.jsxs("div",{className:"stat-value",children:[k.totalTechnologies,"+"]}),a.jsx("div",{className:"stat-label",children:"Technologies"})]})]}),a.jsx("div",{className:`experience-filter ${e?"visible":""}`,children:p.map(u=>a.jsxs("button",{className:`filter-btn ${i===u.id?"active":""}`,onClick:()=>o(u.id),children:[a.jsx("span",{className:"filter-icon",children:u.icon}),a.jsx("span",{className:"filter-text",children:u.name}),a.jsx("div",{className:"filter-glow"})]},u.id))}),a.jsxs("div",{className:`experience-timeline ${e?"visible":""}`,children:[a.jsx("div",{className:"timeline-line"}),g.map((u,w)=>a.jsxs("div",{className:`timeline-item ${n===w?"hovered":""} ${l===u.id?"selected":""}`,onMouseEnter:()=>r(w),onMouseLeave:()=>r(null),onClick:()=>s(l===u.id?null:u.id),style:{"--delay":`${w*.2}s`,"--exp-color":u.color},children:[a.jsxs("div",{className:"timeline-marker",children:[a.jsx("div",{className:"marker-icon",children:u.icon}),a.jsx("div",{className:"marker-pulse"})]}),a.jsxs("div",{className:"timeline-content",children:[a.jsxs("div",{className:"experience-header",children:[a.jsxs("div",{className:"experience-main-info",children:[a.jsx("h3",{className:"experience-role",children:u.role}),a.jsxs("div",{className:"experience-company",children:[a.jsx("span",{className:"company-name",children:u.company}),a.jsxs("span",{className:"company-details",children:[u.location," • ",u.employmentType," • ",u.companySize]})]})]}),a.jsxs("div",{className:"experience-duration",children:[a.jsx("span",{className:"duration-badge",children:u.duration}),a.jsx("div",{className:"expand-indicator",children:l===u.id?"▼":"▶"})]})]}),a.jsx("div",{className:"experience-highlights",children:Object.entries(u.highlights).map(([f,d])=>a.jsx("div",{className:"highlight-item",children:a.jsx("span",{className:"highlight-value",children:d})},f))}),a.jsxs("div",{className:"experience-technologies",children:[u.technologies.slice(0,4).map(f=>a.jsx("span",{className:"tech-badge",children:f},f)),u.technologies.length>4&&a.jsxs("span",{className:"tech-badge more",children:["+",u.technologies.length-4]})]}),a.jsxs("div",{className:`expanded-content ${l===u.id?"open":""}`,children:[a.jsxs("div",{className:"achievements-section",children:[a.jsx("h4",{children:"Key Achievements"}),a.jsx("ul",{className:"achievements-list",children:u.achievements.map((f,d)=>a.jsxs("li",{className:"achievement-item",children:[a.jsx("span",{className:"achievement-bullet",children:"✦"}),a.jsx("span",{className:"achievement-text",children:f})]},d))})]}),a.jsxs("div",{className:"all-technologies",children:[a.jsx("h4",{children:"Technologies & Tools"}),a.jsx("div",{className:"tech-grid",children:u.technologies.map(f=>a.jsx("span",{className:"tech-chip",children:f},f))})]})]}),a.jsx("div",{className:"card-glow",style:{background:`radial-gradient(circle, ${u.color}15 0%, transparent 70%)`}})]})]},u.id))]}),a.jsxs("div",{className:`experience-summary ${e?"visible":""}`,children:[a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"🎯 Current Focus"}),a.jsx("p",{children:"Leading frontend architecture and mentoring development teams"})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"🚀 Career Growth"}),a.jsxs("p",{children:["Progressed from intern to senior developer in ",h()," years"]})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"💡 Next Challenge"}),a.jsx("p",{children:"Technical leadership and scaling engineering teams"})]})]})]})]}),a.jsx("style",{jsx:!0,children:`
        .experience {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.experience-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  animation: float 12s ease-in-out infinite;
}

.orb-1 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  top: 15%;
  left: 15%;
  animation-delay: 0s;
}

.orb-2 {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #10B981, #06B6D4);
  bottom: 25%;
  right: 15%;
  animation-delay: -4s;
}

.orb-3 {
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, #F59E0B, #EF4444);
  top: 50%;
  left: 65%;
  animation-delay: -8s;
}

.code-rain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.code-symbol {
  position: absolute;
  color: rgba(99, 102, 241, 0.08);
  font-size: 1.5rem;
  animation: codeRain linear infinite;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 1.2rem;
}

.section-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #9CA3AF;
  font-weight: 400;
}

.experience-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.experience-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.1);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #9CA3AF;
  font-size: 0.95rem;
  font-weight: 500;
}

.experience-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
  flex-wrap: wrap;
}

.experience-filter.visible {
  opacity: 1;
  transform: translateY(0);
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: #9CA3AF;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.filter-btn:hover {
  color: #ffffff;
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: rgba(99, 102, 241, 0.2);
  color: #ffffff;
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
}

.filter-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-btn.active .filter-glow {
  opacity: 1;
}

.experience-timeline {
  position: relative;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
  margin-bottom: 4rem;
}

.experience-timeline.visible {
  opacity: 1;
}

.timeline-line {
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, 
    rgba(99, 102, 241, 0.5) 0%, 
    rgba(16, 185, 129, 0.5) 50%, 
    rgba(245, 158, 11, 0.5) 100%
  );
  border-radius: 2px;
  filter: blur(1px);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 6rem;
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease forwards;
  animation-delay: var(--delay);
}

.timeline-marker {
  position: absolute;
  left: 0.75rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--exp-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 0 20px var(--exp-color);
  z-index: 2;
  position: relative;
}

.marker-icon {
  position: relative;
  z-index: 3;
}

.marker-pulse {
  position: absolute;
  inset: -10px;
  border: 2px solid var(--exp-color);
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.timeline-item:hover .timeline-content {
  transform: translateY(-5px);
  border-color: var(--exp-color);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.timeline-item:hover .card-glow {
  opacity: 1;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.experience-role {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

.company-name {
  color: var(--exp-color);
  font-size: 1.1rem;
  font-weight: 600;
}

.company-details {
  display: block;
  color: #9CA3AF;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.duration-badge {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.expand-indicator {
  margin-left: 1rem;
  color: var(--exp-color);
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.timeline-item.selected .expand-indicator {
  transform: rotate(90deg);
}

.experience-highlights {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.highlight-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  white-space: nowrap;
}

.highlight-value {
  font-weight: 600;
  color: var(--exp-color);
}

.experience-technologies {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-badge.more {
  background: var(--exp-color);
  color: #ffffff;
}

.expanded-content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
}

.expanded-content.open {
  max-height: 800px;
  opacity: 1;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1.5rem;
}

.achievements-section h4,
.all-technologies h4 {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.achievements-section h4::before {
  content: '🏆';
}

.all-technologies h4::before {
  content: '🛠️';
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border-left: 3px solid var(--exp-color);
}

.achievement-bullet {
  color: var(--exp-color);
  font-size: 0.8rem;
  margin-top: 0.1rem;
}

.achievement-text {
  color: #E5E7EB;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-grid {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-chip {
  background: linear-gradient(135deg, var(--exp-color), var(--exp-color)aa);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 2px 8px var(--exp-color)33;
}

.experience-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
}

.experience-summary.visible {
  opacity: 1;
  transform: translateY(0);
}

.summary-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.summary-card h3 {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.summary-card p {
  color: #9CA3AF;
  margin: 0;
  line-height: 1.6;
}

/* Animations */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  33% { 
    transform: translateY(-30px) rotate(2deg); 
  }
  66% { 
    transform: translateY(15px) rotate(-1deg); 
  }
}

@keyframes codeRain {
  0% { 
    transform: translateY(-100px);
    opacity: 0;
  }
  10% { 
    opacity: 0.8;
  }
  90% { 
    opacity: 0.8;
  }
  100% { 
    transform: translateY(calc(100vh + 100px));
    opacity: 0;
  }
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.1;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .timeline-item {
    padding-left: 5rem;
  }
  
  .timeline-line {
    left: 1.75rem;
  }
  
  .timeline-marker {
    left: 0.5rem;
  }
}

@media (max-width: 768px) {
  .experience {
    padding: 6rem 0 4rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 3rem;
  }

  .timeline-item {
    padding-left: 4rem;
  }

  .timeline-line {
    left: 1.5rem;
  }

  .timeline-marker {
    left: 0.25rem;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .experience-filter {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .experience-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.5rem;
  }

  .timeline-item {
    padding-left: 0;
    margin-left: 0;
  }

  .timeline-line {
    display: none;
  }

  .timeline-marker {
    position: relative;
    left: auto;
    top: auto;
    margin-bottom: 1rem;
  }

  .experience-filter {
    flex-direction: column;
    align-items: center;
  }

  .code-symbol {
    display: none;
  }

  .experience-highlights {
    flex-direction: column;
    gap: 0.5rem;
  }

  .highlight-item {
    text-align: center;
  }
}
  `})]})},Yf=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(null),[i,o]=C.useState("all"),[l,s]=C.useState(null),c=C.useRef(null),p=[{id:"all",name:"All Education",icon:"🎓"},{id:"degree",name:"Degrees",icon:"🏛️"},{id:"bootcamp",name:"Bootcamps",icon:"💻"},{id:"certification",name:"Certifications",icon:"📜"}],v=[{id:1,degree:"Bachelor of ICT",institution:"University of Colombo",year:"2021 - 2025",type:"degree",color:"#6366F1",icon:"🎓",location:"Colombo, Sri Lanka",gpa:"3.1/4.0",status:"Completed",description:"Specialized in Software Engineering and Web Technologies",courses:["Advanced Algorithms & Data Structures","Software Architecture & Design Patterns","Web Technologies & Frameworks","Database Systems & Optimization","Machine Learning Fundamentals","Computer Networks & Security"],achievements:["Graduated with Distinction","Published research paper on web optimization","Teaching Assistant for 3 semesters","Winner of Annual Hackathon 2017"],skills:["React","Node.js","Python","Machine Learning","Database Design"],highlights:{duration:"4 Years",focus:"Software Engineering",research:"1 Publication"}},{id:2,degree:"AI & ML Certification",institution:"IIT University",year:"2025",type:"certification",color:"#10B981",icon:"🏛️",location:"Colombo, Sri Lanka",status:"Reading",description:"Certified in Artificial Intelligence and Machine Learning with strong foundations in data-driven problem solving and model development.",courses:["Introduction to Artificial Intelligence","Machine Learning Algorithms (Supervised & Unsupervised)","Deep Learning & Neural Networks","Python for Data Science","Data Preprocessing & Feature Engineering","Model Evaluation & Optimization"],achievements:["Built and deployed multiple ML models during certification","Achieved top performance in course projects","Presented research on AI applications in real-world scenarios","Completed capstone project on predictive analytics"],skills:["Python","TensorFlow","Scikit-learn","NumPy","Pandas","Matplotlib","Machine Learning","Deep Learning","AI Concepts"],highlights:{duration:"6 Months",honors:"Certified with Distinction",leadership:"Led final project team for AI model deployment"}},{id:3,degree:"Python Programming Bootcamp",institution:"Udemy Academy",year:"2023",type:"bootcamp",color:"#306998",icon:"🐍",location:"Online",gpa:"98%",status:"Completed",description:"Comprehensive bootcamp covering Python programming, data analysis, and automation",courses:["Python Fundamentals & Syntax","Object-Oriented Programming with Python","Data Analysis with Pandas & NumPy","Web Scraping & Automation","API Integration & Data Handling","Version Control & Deployment"],achievements:["Completed 20+ coding exercises and mini-projects","Developed automation scripts for real-world tasks","Ranked in top 2% of global students","Earned Udemy Python Mastery Certificate"],skills:["Python","Pandas","NumPy","APIs","OOP","Git"],highlights:{duration:"10 Weeks",intensity:"Self-paced",projects:"10+ Projects"}}],g=i==="all"?v:v.filter(u=>u.type===i);C.useEffect(()=>{const u=new IntersectionObserver(([w])=>{w.isIntersecting&&t(!0)},{threshold:.3});return c.current&&u.observe(c.current),()=>{c.current&&u.unobserve(c.current)}},[]);const h=()=>v.reduce((u,w)=>{const f=w.year.includes("-")?parseInt(w.year.split(" - ")[1])-parseInt(w.year.split(" - ")[0]):1;return u+f},0),k=(()=>({totalYears:h(),totalDegrees:v.filter(u=>u.type==="degree").length,totalCertifications:v.filter(u=>u.type==="bootcamp").length+v.filter(u=>u.type==="certification").length,averageGPA:"3.7"}))();return a.jsxs(a.Fragment,{children:[a.jsxs("section",{id:"education",className:"education",ref:c,children:[a.jsxs("div",{className:"education-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"knowledge-particles",children:[...Array(12)].map((u,w)=>a.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*8}s`,animationDuration:`${6+Math.random()*4}s`},children:["📚","🎓","💡","🔬","📖","✏️"][Math.floor(Math.random()*6)]},w))})]}),a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:`section-header ${e?"visible":""}`,children:[a.jsxs("span",{className:"section-badge",children:[a.jsx("span",{className:"badge-icon",children:"🎓"}),"Academic Journey"]}),a.jsx("h2",{className:"section-title",children:"Education"}),a.jsx("p",{className:"section-subtitle",children:"Building knowledge foundations through formal education and continuous learning"})]}),a.jsxs("div",{className:`education-stats ${e?"visible":""}`,children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"📅"}),a.jsx("div",{className:"stat-value",children:k.totalYears}),a.jsx("div",{className:"stat-label",children:"Years of Study"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"🏛️"}),a.jsx("div",{className:"stat-value",children:k.totalDegrees}),a.jsx("div",{className:"stat-label",children:"Academic Degrees"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"📜"}),a.jsx("div",{className:"stat-value",children:k.totalCertifications}),a.jsx("div",{className:"stat-label",children:"Certifications"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"⭐"}),a.jsx("div",{className:"stat-value",children:k.averageGPA}),a.jsx("div",{className:"stat-label",children:"Average GPA"})]})]}),a.jsx("div",{className:`education-filter ${e?"visible":""}`,children:p.map(u=>a.jsxs("button",{className:`filter-btn ${i===u.id?"active":""}`,onClick:()=>o(u.id),children:[a.jsx("span",{className:"filter-icon",children:u.icon}),a.jsx("span",{className:"filter-text",children:u.name}),a.jsx("div",{className:"filter-glow"})]},u.id))}),a.jsx("div",{className:`education-grid ${e?"visible":""}`,children:g.map((u,w)=>a.jsxs("div",{className:`education-card ${n===w?"hovered":""} ${l===u.id?"selected":""}`,onMouseEnter:()=>r(w),onMouseLeave:()=>r(null),onClick:()=>s(l===u.id?null:u.id),style:{"--delay":`${w*.2}s`,"--edu-color":u.color},children:[a.jsxs("div",{className:"education-header",children:[a.jsxs("div",{className:"education-icon",children:[a.jsx("span",{className:"icon",children:u.icon}),a.jsx("div",{className:"icon-glow"})]}),a.jsx("div",{className:"status-badge",children:u.status})]}),a.jsxs("div",{className:"education-main",children:[a.jsx("h3",{className:"education-degree",children:u.degree}),a.jsxs("div",{className:"education-institution",children:[a.jsx("span",{className:"institution-name",children:u.institution}),a.jsx("span",{className:"institution-location",children:u.location})]}),a.jsxs("div",{className:"education-meta",children:[a.jsx("span",{className:"year-badge",children:u.year}),a.jsxs("span",{className:"gpa-badge",children:["GPA: ",u.gpa]})]})]}),a.jsx("div",{className:"education-highlights",children:Object.entries(u.highlights).map(([f,d])=>a.jsxs("div",{className:"highlight-item",children:[a.jsxs("span",{className:"highlight-label",children:[f,":"]}),a.jsx("span",{className:"highlight-value",children:d})]},f))}),a.jsxs("div",{className:"skills-preview",children:[u.skills.slice(0,3).map(f=>a.jsx("span",{className:"skill-tag",children:f},f)),u.skills.length>3&&a.jsxs("span",{className:"skill-tag more",children:["+",u.skills.length-3]})]}),a.jsx("div",{className:"expand-indicator",children:l===u.id?"▼":"▶"}),a.jsxs("div",{className:`expanded-content ${l===u.id?"open":""}`,children:[a.jsx("div",{className:"description-section",children:a.jsx("p",{className:"education-description",children:u.description})}),a.jsxs("div",{className:"courses-section",children:[a.jsx("h4",{children:"📚 Key Courses"}),a.jsx("div",{className:"courses-list",children:u.courses.map((f,d)=>a.jsxs("div",{className:"course-item",children:[a.jsx("span",{className:"course-bullet",children:"▪"}),a.jsx("span",{className:"course-name",children:f})]},d))})]}),a.jsxs("div",{className:"achievements-section",children:[a.jsx("h4",{children:"🏆 Achievements"}),a.jsx("div",{className:"achievements-list",children:u.achievements.map((f,d)=>a.jsxs("div",{className:"achievement-item",children:[a.jsx("span",{className:"achievement-bullet",children:"✦"}),a.jsx("span",{className:"achievement-text",children:f})]},d))})]}),a.jsxs("div",{className:"skills-section",children:[a.jsx("h4",{children:"⚡ Skills Gained"}),a.jsx("div",{className:"skills-grid",children:u.skills.map(f=>a.jsx("span",{className:"skill-chip",children:f},f))})]})]}),a.jsx("div",{className:"progress-bar",children:a.jsx("div",{className:"progress-fill",style:{width:"100%"}})}),a.jsx("div",{className:"card-glow",style:{background:`radial-gradient(circle, ${u.color}15 0%, transparent 70%)`}})]},u.id))}),a.jsxs("div",{className:`education-summary ${e?"visible":""}`,children:[a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"🎯 Academic Excellence"}),a.jsx("p",{children:"Maintained strong academic performance across all programs with hands-on project experience"})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"🚀 Continuous Learning"}),a.jsx("p",{children:"Always expanding knowledge through formal education and industry-recognized certifications"})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"💡 Practical Application"}),a.jsx("p",{children:"Combined theoretical knowledge with real-world projects and industry best practices"})]})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Education Section Styles */
.education {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.education-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  animation: float 14s ease-in-out infinite;
}

.orb-1 {
  width: 380px;
  height: 380px;
  background: linear-gradient(135deg, #6366F1, #EC4899);
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #10B981, #06B6D4);
  bottom: 20%;
  left: 10%;
  animation-delay: -5s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #F59E0B, #8B5CF6);
  top: 60%;
  right: 60%;
  animation-delay: -10s;
}

.knowledge-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  color: rgba(99, 102, 241, 0.08);
  font-size: 1.5rem;
  animation: particleFloat linear infinite;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 1.2rem;
}

.section-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #9CA3AF;
  font-weight: 400;
}

/* Education Stats */
.education-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.education-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.1);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #9CA3AF;
  font-size: 0.95rem;
  font-weight: 500;
}

/* Filter Options */
.education-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
  flex-wrap: wrap;
}

.education-filter.visible {
  opacity: 1;
  transform: translateY(0);
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: #9CA3AF;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.filter-btn:hover {
  color: #ffffff;
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: rgba(99, 102, 241, 0.2);
  color: #ffffff;
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
}

.filter-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-btn.active .filter-glow {
  opacity: 1;
}

/* Education Grid */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
}

.education-grid.visible {
  opacity: 1;
}

/* Education Cards */
.education-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.8s ease forwards;
  animation-delay: var(--delay);
}

.education-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--edu-color);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.education-card:hover .card-glow {
  opacity: 1;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.education-icon {
  position: relative;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--edu-color);
  border-radius: 12px;
  font-size: 1.5rem;
}

.icon-glow {
  position: absolute;
  inset: -5px;
  background: var(--edu-color);
  border-radius: 16px;
  opacity: 0.2;
  filter: blur(10px);
}

.status-badge {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.education-degree {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
}

.institution-name {
  color: var(--edu-color);
  font-size: 1.1rem;
  font-weight: 600;
  display: block;
}

.institution-location {
  color: #9CA3AF;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: block;
}

.education-meta {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.year-badge, .gpa-badge {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.gpa-badge {
  background: var(--edu-color);
  border-color: var(--edu-color);
}

/* Highlights */
.education-highlights {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.highlight-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
}

.highlight-label {
  color: #9CA3AF;
  text-transform: capitalize;
}

.highlight-value {
  color: var(--edu-color);
  font-weight: 600;
}

/* Skills Preview */
.skills-preview {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.skill-tag.more {
  background: var(--edu-color);
}

/* Expand Indicator */
.expand-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--edu-color);
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.education-card.selected .expand-indicator {
  transform: rotate(90deg);
}

/* Expanded Content */
.expanded-content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
}

.expanded-content.open {
  max-height: 1000px;
  opacity: 1;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1.5rem;
}

.description-section {
  margin-bottom: 2rem;
}

.education-description {
  color: #E5E7EB;
  line-height: 1.6;
  font-size: 0.95rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--edu-color);
  margin: 0;
}

.courses-section,
.achievements-section,
.skills-section {
  margin-bottom: 2rem;
}

.courses-section h4,
.achievements-section h4,
.skills-section h4 {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.courses-list,
.achievements-list {
  display: grid;
  gap: 0.5rem;
}

.course-item,
.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}

.course-bullet,
.achievement-bullet {
  color: var(--edu-color);
  font-size: 0.8rem;
  margin-top: 0.1rem;
}

.course-name,
.achievement-text {
  color: #E5E7EB;
  font-size: 0.9rem;
  line-height: 1.5;
}

.skills-grid {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.skill-chip {
  background: linear-gradient(135deg, var(--edu-color), var(--edu-color)aa);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--edu-color);
}

/* Progress Bar */
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 20px 20px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--edu-color);
  transition: width 0.3s ease;
}

/* Education Summary */
.education-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
}

.education-summary.visible {
  opacity: 1;
  transform: translateY(0);
}

.summary-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
  border-color: rgba(99, 102, 241, 0.3);
}

.summary-card h3 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.summary-card p {
  color: #9CA3AF;
  line-height: 1.6;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

@keyframes particleFloat {
  from {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.5;
  }
  to {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .education {
    padding: 6rem 0 4rem;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .education-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .education-filter {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .education-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .education-card {
    padding: 1.5rem;
  }

  .education-degree {
    font-size: 1.2rem;
  }

  .education-summary {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .education-stats {
    grid-template-columns: 1fr;
  }

  .education-filter {
    flex-direction: column;
    align-items: center;
  }

  .filter-btn {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
}
  `})]})},Bf=()=>{const[e,t]=C.useState({name:"",email:"",message:""}),n=i=>{t({...e,[i.target.name]:i.target.value})},r=i=>{i.preventDefault(),console.log("Form submitted:",e),alert("Thank you for your message! I will get back to you soon."),t({name:"",email:"",message:""})};return a.jsx(a.Fragment,{children:a.jsxs("section",{id:"contact",className:"contact",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Get In Touch"}),a.jsxs("div",{className:"contact-content",children:[a.jsxs("div",{className:"contact-info",children:[a.jsx("h3",{children:"Let's talk about your project"}),a.jsx("p",{children:"I'm currently available for freelance work and open to full-time opportunities. Feel free to reach out if you want to collaborate on something exciting."}),a.jsxs("div",{className:"contact-details",children:[a.jsxs("div",{className:"contact-item",children:[a.jsx("strong",{children:"Email:"}),a.jsx("span",{children:"Chamishkadkulasinghe@gmail.com"})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("strong",{children:"Location:"}),a.jsx("span",{children:"Colombo, Sri Lanks"})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("strong",{children:"Phone:"}),a.jsx("span",{children:"+94 769963383"})]})]}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"https://www.linkedin.com/in/chamishka-dinuwan/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),a.jsx("a",{href:"https://github.com/chamishkadinuwan",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]}),a.jsxs("form",{className:"contact-form",onSubmit:r,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:n,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:n,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Message"}),a.jsx("textarea",{id:"message",name:"message",rows:"5",value:e.message,onChange:n,required:!0})]}),a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})]})]})]}),a.jsx("style",{jsx:!0,children:`
/* Contact.css - Premium Styling */

/* Contact Section - Dark Theme Premium Styling */

.contact {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Animated Background Elements */
.contact::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%);
  border-radius: 50%;
  filter: blur(80px);
  animation: float 14s ease-in-out infinite;
  z-index: 0;
}

.contact::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(239, 68, 68, 0.08) 100%);
  border-radius: 50%;
  filter: blur(80px);
  animation: float 14s ease-in-out infinite reverse;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Section Title */
.section-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  padding-bottom: 1.5rem;
  line-height: 1.1;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

/* Contact Content Layout */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Contact Info Section */
.contact-info {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.contact-info::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.contact-info:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  border-color: rgba(99, 102, 241, 0.2);
}

.contact-info:hover::before {
  opacity: 1;
}

.contact-info h3 {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  font-weight: 700;
}

.contact-info h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
}

.contact-info p {
  color: #9CA3AF;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  font-size: 1.1rem;
}

/* Contact Details */
.contact-details {
  margin-bottom: 3rem;
}

.contact-item {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateX(10px);
}

.contact-item strong {
  color: #6366F1;
  min-width: 80px;
  font-weight: 600;
}

.contact-item span {
  color: #E5E7EB;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.social-links a::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.social-links a:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.3);
}

.social-links a:hover::before {
  opacity: 1;
}

/* Contact Form */
.contact-form {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.contact-form::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.contact-form:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  border-color: rgba(236, 72, 153, 0.2);
}

.contact-form:hover::before {
  opacity: 1;
}

/* Form Groups */
.form-group {
  margin-bottom: 2rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  backdrop-filter: blur(10px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9CA3AF;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #6366F1;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
  font-family: 'Inter', sans-serif;
}

/* Submit Button */
.btn-primary {
  width: 100%;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #EC4899 0%, #6366F1 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary:active {
  transform: translateY(-1px);
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(180deg);
  }
  75% {
    transform: translateY(20px) rotate(270deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-info,
.contact-form {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.contact-form {
  animation-delay: 0.2s;
}

/* Responsive Design */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 6rem 0 4rem;
  }

  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .contact-info,
  .contact-form {
    padding: 2rem;
  }
  
  .social-links {
    justify-content: center;
  }

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .contact-item strong {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 5rem 0 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-info,
  .contact-form {
    padding: 1.5rem;
  }
  
  .social-links {
    flex-direction: column;
  }
  
  .social-links a {
    text-align: center;
    justify-content: center;
  }

  .contact-info h3 {
    font-size: 1.5rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 1rem;
  }
}

        `})]})})},Uf=()=>{const e=new Date().getFullYear();return a.jsx(a.Fragment,{children:a.jsxs("footer",{className:"footer",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"footer-content",children:[a.jsx("div",{className:"footer-text",children:a.jsxs("p",{children:["© ",e," John Doe. All rights reserved."]})}),a.jsxs("div",{className:"footer-social",children:[a.jsx("a",{href:"https://www.linkedin.com/in/chamishka-dinuwan/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),a.jsx("a",{href:"https://github.com/chamishkadinuwan",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]})}),a.jsx("style",{jsx:!0,children:`
          .footer {
            background-color: #111827;
            color: #f3f4f6;
            padding: 2rem 1rem;
          }

          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .footer-text p {
            margin: 0;
            font-size: 0.95rem;
            color: #9ca3af;
          }

          .footer-social a {
            color: #f3f4f6;
            margin-left: 1rem;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
          }

          .footer-social a:first-child {
            margin-left: 0;
          }

          .footer-social a:hover {
            color: #1d4ed8;
          }

          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              text-align: center;
              gap: 0.75rem;
            }

            .footer-social a {
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
          }
        `})]})})};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Vl=e=>{const t=Vf(e);return t.charAt(0).toUpperCase()+t.slice(1)},iu=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),Wf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...s},c)=>C.createElement("svg",{ref:c,...Qf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:iu("lucide",i),...!o&&!Wf(s)&&{"aria-hidden":"true"},...s},[...l.map(([p,v])=>C.createElement(p,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=(e,t)=>{const n=C.forwardRef(({className:r,...i},o)=>C.createElement(Kf,{ref:o,iconNode:t,className:iu(`lucide-${Hf(Vl(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Vl(e),n};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Wi=sn("bot",Gf);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Jf=sn("loader",Xf);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],qf=sn("maximize-2",Zf);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],tp=sn("minimize-2",ep);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],rp=sn("send",np);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],op=sn("user",ip),ap=()=>{const[e,t]=C.useState([{id:1,text:"Hi! I'm an AI assistant. Ask anything About Dinuwan",sender:"bot",timestamp:new Date}]),[n,r]=C.useState(""),[i,o]=C.useState(!1),[l,s]=C.useState(!1),[c,p]=C.useState(!1),v=C.useRef(null),g=C.useRef(null),y="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key="+"AIzaSyCPQPqOIF3RiDuH2zfsoKK0ZjHqekKLtm4";C.useEffect(()=>{const m=new IntersectionObserver(([x])=>{x.isIntersecting&&p(!0)},{threshold:.3});return g.current&&m.observe(g.current),()=>{g.current&&m.unobserve(g.current)}},[]);const k=()=>{var m;(m=v.current)==null||m.scrollIntoView({behavior:"smooth"})};C.useEffect(()=>{k()},[e]);const u=async m=>{try{const x=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`You are an AI assistant trained to answer questions only about Dinuwan.
                Known Information: 
                - Name: Chamishka Dinuwan
                - Skills: React, Vite, PHP, SQL, Java, Firebase, API integration
                - Interests: Application Development, LLM, OCR, Embedded Code, Tech Research
                - Projects: Portfolio Website, TechPulse News App (Java + Firebase), Attendese Attendance System (HTML, CSS, PHP, SQL)
                - personality : Good, friendly, helpful, and professional
                Rules:
                1. Only use this information to answer.
                2. Do not invent facts.
                3. Keep answers concise and friendly.
                4. When ask somthing about dinuwan you dont know, give the commen answer or cant give commen answer you can say sorry dont know about that like.
                
                User Question: ${m}`}]}],generationConfig:{temperature:.7,topK:40,topP:.95,maxOutputTokens:1024}})});if(!x.ok)throw new Error(`HTTP error! status: ${x.status}`);return(await x.json()).candidates[0].content.parts[0].text}catch(x){return console.error("Error calling Gemini API:",x),"Sorry, I'm having trouble connecting right now. Please try again later."}},w=async()=>{if(!n.trim())return;const m={id:Date.now(),text:n,sender:"user",timestamp:new Date};t(x=>[...x,m]),r(""),o(!0);try{const x=await u(n),j={id:Date.now()+1,text:x,sender:"bot",timestamp:new Date};t(E=>[...E,j])}catch{const j={id:Date.now()+1,text:"Sorry, I encountered an error. Please try again.",sender:"bot",timestamp:new Date};t(E=>[...E,j])}finally{o(!1)}},f=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),w())},d=m=>m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return a.jsxs("section",{id:"chat",className:`chat-section ${c?"visible":""}`,ref:g,children:[a.jsxs("div",{className:"chat-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"chat-particles",children:[...Array(8)].map((m,x)=>a.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${4+Math.random()*3}s`},children:"💬"},x))})]}),a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:`section-header ${c?"visible":""}`,children:[a.jsxs("span",{className:"section-badge",children:[a.jsx("span",{className:"badge-icon",children:"🤖"}),"AI Assistant"]}),a.jsx("h2",{className:"section-title",children:"Chat with AI"}),a.jsx("p",{className:"section-subtitle",children:"Ask me anything!"})]}),a.jsxs("div",{className:`chat-container ${l?"minimized":""} ${c?"visible":""}`,children:[a.jsxs("div",{className:"chat-header",children:[a.jsxs("div",{className:"chat-header-info",children:[a.jsx("div",{className:"bot-avatar",children:a.jsx(Wi,{size:24})}),a.jsxs("div",{className:"chat-title",children:[a.jsx("h3",{children:"AI Assistant"}),a.jsx("span",{className:"status",children:"Online"})]})]}),a.jsx("button",{className:"minimize-btn",onClick:()=>s(!l),children:l?a.jsx(qf,{size:20}):a.jsx(tp,{size:20})})]}),a.jsxs("div",{className:"chat-messages",children:[e.map(m=>a.jsxs("div",{className:`message ${m.sender}`,children:[a.jsx("div",{className:"message-avatar",children:m.sender==="bot"?a.jsx(Wi,{size:20}):a.jsx(op,{size:20})}),a.jsxs("div",{className:"message-content",children:[a.jsx("div",{className:"message-bubble",children:a.jsx("p",{children:m.text})}),a.jsx("span",{className:"message-timestamp",children:d(m.timestamp)})]})]},m.id)),i&&a.jsxs("div",{className:"message bot",children:[a.jsx("div",{className:"message-avatar",children:a.jsx(Wi,{size:20})}),a.jsx("div",{className:"message-content",children:a.jsx("div",{className:"message-bubble loading",children:a.jsxs("div",{className:"typing-indicator",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})})})]}),a.jsx("div",{ref:v})]}),a.jsx("div",{className:"chat-input",children:a.jsxs("div",{className:"input-container",children:[a.jsx("textarea",{value:n,onChange:m=>r(m.target.value),onKeyPress:f,placeholder:"Type your message here...",rows:"1",disabled:i}),a.jsx("button",{onClick:w,disabled:!n.trim()||i,className:"send-button",children:i?a.jsx(Jf,{className:"spinning",size:20}):a.jsx(rp,{size:20})})]})})]})]}),a.jsx("style",{children:`
        .chat-section {
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .chat-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.1;
          animation: float 12s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #10B981, #06B6D4);
          bottom: 30%;
          left: 15%;
          animation-delay: -4s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #F59E0B, #8B5CF6);
          top: 60%;
          right: 70%;
          animation-delay: -8s;
        }

        .chat-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          color: rgba(99, 102, 241, 0.1);
          font-size: 1.5rem;
          animation: particleFloat linear infinite;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #9CA3AF;
          font-weight: 400;
        }

        .chat-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .chat-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .chat-container.minimized .chat-messages,
        .chat-container.minimized .chat-input {
          display: none;
        }

        .chat-header {
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bot-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .chat-title h3 {
          color: #ffffff;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .status {
          color: #10B981;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .minimize-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #ffffff;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .minimize-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .chat-messages {
          height: 500px;
          overflow-y: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.3);
          border-radius: 3px;
        }

        .message {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .message.bot .message-avatar {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          color: white;
        }

        .message.user .message-avatar {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .message-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 70%;
        }

        .message.user .message-content {
          align-items: flex-end;
        }

        .message-bubble {
          padding: 1rem 1.5rem;
          border-radius: 18px;
          word-wrap: break-word;
        }

        .message.bot .message-bubble {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #ffffff;
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          color: white;
        }

        .message-bubble p {
          margin: 0;
          line-height: 1.5;
        }

        .message-bubble.loading {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .message-timestamp {
          font-size: 0.75rem;
          color: #9CA3AF;
          margin: 0 1rem;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6366F1;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        .chat-input {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .input-container {
          display: flex;
          gap: 1rem;
          align-items: flex-end;
        }

        .input-container textarea {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          color: #ffffff;
          resize: none;
          max-height: 120px;
          min-height: 44px;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-container textarea::placeholder {
          color: #9CA3AF;
        }

        .input-container textarea:focus {
          border-color: #6366F1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .send-button {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          border: none;
          border-radius: 12px;
          color: white;
          padding: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          height: 44px;
        }

        .send-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        .api-notice {
          text-align: center;
          margin-top: 2rem;
          padding: 1rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .api-notice.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .api-notice p {
          color: #F59E0B;
          margin: 0;
          font-size: 0.9rem;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes particleFloat {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .chat-section {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .chat-container {
            margin: 0;
          }

          .chat-header {
            padding: 1rem 1.5rem;
          }

          .chat-messages {
            height: 400px;
            padding: 1.5rem;
          }

          .chat-input {
            padding: 1rem 1.5rem;
          }

          .message-content {
            max-width: 85%;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .chat-messages {
            height: 300px;
            padding: 1rem;
          }

          .chat-header {
            padding: 1rem;
          }

          .chat-input {
            padding: 1rem;
          }

          .input-container {
            gap: 0.5rem;
          }

          .message-content {
            max-width: 90%;
          }
        }
      `})]})};function lp(){const[e,t]=C.useState("home");return a.jsxs("div",{className:"App",children:[a.jsx(Af,{activeSection:e,setActiveSection:t}),a.jsx(Tf,{setActiveSection:t}),a.jsx(Df,{setActiveSection:t}),a.jsx(ap,{setActiveSection:t}),a.jsx(Rf,{setActiveSection:t}),a.jsx($f,{setActiveSection:t}),a.jsx(Of,{setActiveSection:t}),a.jsx(Yf,{setActiveSection:t}),a.jsx(Bf,{setActiveSection:t}),a.jsx(Uf,{})]})}Qi.createRoot(document.getElementById("root")).render(a.jsx(wu.StrictMode,{children:a.jsx(lp,{})}));
