(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9641],{49641:function(e,t,n){"use strict";n.r(t),n.d(t,{FocusScope:function(){return g},useFocusManager:function(){return v},getFocusableTreeWalker:function(){return S},createFocusManager:function(){return D},FocusRing:function(){return C},FocusableProvider:function(){return N},useFocusable:function(){return I},useFocusRing:function(){return M},focusSafely:function(){return c}});var r=n(67294),o=n(83952),u=n(27354),i=n(86010);function s(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var a={};s(a,"FocusScope",(()=>g)),s(a,"useFocusManager",(()=>v)),s(a,"getFocusableTreeWalker",(()=>S)),s(a,"createFocusManager",(()=>D));function c(e){if("virtual"===(0,u.Jz)()){let t=document.activeElement;(0,o.runAfterTransition)((()=>{document.activeElement===t&&document.contains(e)&&(0,o.focusWithoutScrolling)(e)}))}else(0,o.focusWithoutScrolling)(e)}function l(e,t){return"#comment"!==e.nodeName&&function(e){if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){const{getComputedStyle:t}=e.ownerDocument.defaultView;let{display:n,visibility:o}=t(e);r="none"!==n&&"hidden"!==o&&"collapse"!==o}return r}(e)&&function(e,t){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!t||"SUMMARY"===t.nodeName||e.hasAttribute("open"))}(e,t)&&(!e.parentElement||l(e.parentElement,e))}s({},"focusSafely",(()=>c));const d=r.createContext(null);let f=null,p=new Map;function g(e){let{children:t,contain:n,restoreFocus:u,autoFocus:i}=e,s=(0,r.useRef)(),a=(0,r.useRef)(),c=(0,r.useRef)([]),l=(0,r.useContext)(d),g=null==l?void 0:l.scopeRef;(0,o.useLayoutEffect)((()=>{let e=s.current.nextSibling,t=[];for(;e&&e!==a.current;)t.push(e),e=e.nextSibling;c.current=t}),[t,g]),(0,o.useLayoutEffect)((()=>(p.set(c,g),()=>{c!==f&&!P(c,f)||g&&!p.has(g)||(f=g),p.delete(c)})),[c,g]),function(e,t){let n=(0,r.useRef)(),u=(0,r.useRef)(null);(0,o.useLayoutEffect)((()=>{let r=e.current;if(!t)return;let o=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||e!==f)return;let n=document.activeElement,r=e.current;if(!h(n,r))return;let o=S(y(r),{tabbable:!0},r);o.currentNode=n;let u=t.shiftKey?o.previousNode():o.nextNode();u||(o.currentNode=t.shiftKey?r[r.length-1].nextElementSibling:r[0].previousElementSibling,u=t.shiftKey?o.previousNode():o.nextNode()),t.preventDefault(),u&&w(u,!0)},i=t=>{!f||P(f,e)?(f=e,n.current=t.target):e!==f||T(t.target,e)?e===f&&(n.current=t.target):n.current?n.current.focus():f&&L(f.current)},s=t=>{u.current=requestAnimationFrame((()=>{e!==f||T(document.activeElement,e)||(f=e,n.current=t.target,n.current.focus())}))};return document.addEventListener("keydown",o,!1),document.addEventListener("focusin",i,!1),r.forEach((e=>e.addEventListener("focusin",i,!1))),r.forEach((e=>e.addEventListener("focusout",s,!1))),()=>{document.removeEventListener("keydown",o,!1),document.removeEventListener("focusin",i,!1),r.forEach((e=>e.removeEventListener("focusin",i,!1))),r.forEach((e=>e.removeEventListener("focusout",s,!1)))}}),[e,t]),(0,r.useEffect)((()=>()=>cancelAnimationFrame(u.current)),[u])}(c,n),function(e,t,n){const u=(0,r.useRef)("undefined"!=typeof document?document.activeElement:null);(0,o.useLayoutEffect)((()=>{let r=u.current;if(!t)return;let o=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey)return;let n=document.activeElement;if(!h(n,e.current))return;let o=S(document.body,{tabbable:!0});o.currentNode=n;let u=t.shiftKey?o.previousNode():o.nextNode();if(document.body.contains(r)&&r!==document.body||(r=null),(!u||!h(u,e.current))&&r){o.currentNode=r;do{u=t.shiftKey?o.previousNode():o.nextNode()}while(h(u,e.current));t.preventDefault(),t.stopPropagation(),u?w(u,!0):!function(e){for(let t of p.keys())if(h(e,t.current))return!0;return!1}(r)?n.blur():w(r,!0)}};return n||document.addEventListener("keydown",o,!0),()=>{n||document.removeEventListener("keydown",o,!0),t&&r&&h(document.activeElement,e.current)&&requestAnimationFrame((()=>{document.body.contains(r)&&w(r)}))}}),[e,t,n])}(c,u,n),function(e,t){const n=r.useRef(t);(0,r.useEffect)((()=>{n.current&&(f=e,h(document.activeElement,f.current)||L(e.current)),n.current=!1}),[])}(c,i);let v=function(e){return{focusNext(t={}){let n=e.current,{from:r,tabbable:o,wrap:u}=t,i=r||document.activeElement,s=n[0].previousElementSibling,a=S(y(n),{tabbable:o},n);a.currentNode=h(i,n)?i:s;let c=a.nextNode();return!c&&u&&(a.currentNode=s,c=a.nextNode()),c&&w(c,!0),c},focusPrevious(t={}){let n=e.current,{from:r,tabbable:o,wrap:u}=t,i=r||document.activeElement,s=n[n.length-1].nextElementSibling,a=S(y(n),{tabbable:o},n);a.currentNode=h(i,n)?i:s;let c=a.previousNode();return!c&&u&&(a.currentNode=s,c=a.previousNode()),c&&w(c,!0),c},focusFirst(t={}){let n=e.current,{tabbable:r}=t,o=S(y(n),{tabbable:r},n);o.currentNode=n[0].previousElementSibling;let u=o.nextNode();return u&&w(u,!0),u},focusLast(t={}){let n=e.current,{tabbable:r}=t,o=S(y(n),{tabbable:r},n);o.currentNode=n[n.length-1].nextElementSibling;let u=o.previousNode();return u&&w(u,!0),u}}}(c);return r.createElement(d.Provider,{value:{scopeRef:c,focusManager:v}},r.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:s}),t,r.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:a}))}function v(){var e;return null===(e=(0,r.useContext)(d))||void 0===e?void 0:e.focusManager}const m=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],b=m.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";m.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const E=m.join(':not([hidden]):not([tabindex="-1"]),');function y(e){return e[0].parentElement}function h(e,t){return t.some((t=>t.contains(e)))}function T(e,t){for(let n of p.keys())if((n===t||P(t,n))&&h(e,n.current))return!0;return!1}function P(e,t){let n=p.get(t);return!!n&&(n===e||P(e,n))}function w(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{c(e)}catch(e){}}function L(e){let t=e[0].previousElementSibling,n=S(y(e),{tabbable:!0},e);n.currentNode=t,w(n.nextNode())}function S(e,t,n){let r=(null==t?void 0:t.tabbable)?E:b,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t||null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:!e.matches(r)||!l(e)||n&&!h(e,n)||(null==t?void 0:t.accept)&&!t.accept(e)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}function D(e,t={}){return{focusNext(n={}){let r=e.current;if(!r)return;let{from:o,tabbable:u=t.tabbable,wrap:i=t.wrap,accept:s=t.accept}=n,a=o||document.activeElement,c=S(r,{tabbable:u,accept:s});r.contains(a)&&(c.currentNode=a);let l=c.nextNode();return!l&&i&&(c.currentNode=r,l=c.nextNode()),l&&w(l,!0),l},focusPrevious(n=t){let r=e.current;if(!r)return;let{from:o,tabbable:u=t.tabbable,wrap:i=t.wrap,accept:s=t.accept}=n,a=o||document.activeElement,c=S(r,{tabbable:u,accept:s});if(!r.contains(a)){let e=K(c);return e&&w(e,!0),e}c.currentNode=a;let l=c.previousNode();return!l&&i&&(c.currentNode=r,l=K(c)),l&&w(l,!0),l},focusFirst(n=t){let r=e.current;if(!r)return;let{tabbable:o=t.tabbable,accept:u=t.accept}=n,i=S(r,{tabbable:o,accept:u}).nextNode();return i&&w(i,!0),i},focusLast(n=t){let r=e.current;if(!r)return;let{tabbable:o=t.tabbable,accept:u=t.accept}=n,i=K(S(r,{tabbable:o,accept:u}));return i&&w(i,!0),i}}}function K(e){let t,n;do{n=e.lastChild(),n&&(t=n)}while(n);return t}s({},"FocusRing",(()=>C));function M(e={}){let{autoFocus:t=!1,isTextInput:n,within:o}=e,i=(0,r.useRef)({isFocused:!1,isFocusVisible:t||(0,u.E)()}),[s,a]=(0,r.useState)(!1),[c,l]=(0,r.useState)((()=>i.current.isFocused&&i.current.isFocusVisible)),d=(0,r.useCallback)((()=>l(i.current.isFocused&&i.current.isFocusVisible)),[]),f=(0,r.useCallback)((e=>{i.current.isFocused=e,a(e),d()}),[d]);(0,u.mG)((e=>{i.current.isFocusVisible=e,d()}),[],{isTextInput:n});let{focusProps:p}=(0,u.KK)({isDisabled:o,onFocusChange:f}),{focusWithinProps:g}=(0,u.L_)({isDisabled:!o,onFocusWithinChange:f});return{isFocused:s,isFocusVisible:i.current.isFocused&&c,focusProps:o?g:p}}function C(e){let{children:t,focusClass:n,focusRingClass:u}=e,{isFocused:s,isFocusVisible:a,focusProps:c}=M(e),l=r.Children.only(t);return r.cloneElement(l,(0,o.mergeProps)(l.props,{...c,className:(0,i.Z)({[n||""]:s,[u||""]:a})}))}s({},"useFocusRing",(()=>M));var F={};s(F,"FocusableProvider",(()=>N)),s(F,"useFocusable",(()=>I));let O=r.createContext(null);function k(e,t){let{children:n,...o}=e,u={...o,ref:t};return r.createElement(O.Provider,{value:u},n)}let N=r.forwardRef(k);function I(e,t){let{focusProps:n}=(0,u.KK)(e),{keyboardProps:i}=(0,u.v5)(e),s=(0,o.mergeProps)(n,i),a=function(e){let t=(0,r.useContext)(O)||{};(0,o.useSyncRef)(t,e);let{ref:n,...u}=t;return u}(t),l=e.isDisabled?{}:a,d=(0,r.useRef)(e.autoFocus);return(0,r.useEffect)((()=>{d.current&&t.current&&c(t.current),d.current=!1}),[t]),{focusableProps:(0,o.mergeProps)({...s,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},l)}}},27354:function(e,t,n){"use strict";n.d(t,{KK:function(){return L},E:function(){return H},Jz:function(){return W},mG:function(){return z},L_:function(){return U},XI:function(){return Y},Fc:function(){return X},v5:function(){return J},r7:function(){return g},TA:function(){return $}});var r=n(61264),o=n(67294);let u="default",i="",s=new WeakMap;function a(e){(0,r.gn)()?("default"===u&&(i=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),u="disabled"):(e instanceof HTMLElement||e instanceof SVGElement)&&(s.set(e,e.style.userSelect),e.style.userSelect="none")}function c(e){if((0,r.gn)()){if("disabled"!==u)return;u="restoring",setTimeout((()=>{(0,r.QB)((()=>{"restoring"===u&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=i||""),i="",u="default")}))}),300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&s.has(e)){let t=s.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),s.delete(e)}}function l(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}class d{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function f(e){let t=(0,o.useRef)({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,(0,r.bt)((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]),(0,o.useCallback)((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,r=e=>{var r,o;t.current.isFocused=!1,n.disabled&&(null===(o=(r=t.current).onBlur)||void 0===o||o.call(r,new d("blur",e))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",r,{once:!0}),t.current.observer=new MutationObserver((()=>{t.current.isFocused&&n.disabled&&(t.current.observer.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[])}const p=o.createContext(null);function g(e){let{onPress:t,onPressChange:n,onPressStart:u,onPressEnd:i,onPressUp:s,isDisabled:d,isPressed:f,preventFocusOnPress:g,shouldCancelOnPointerExit:P,allowTextSelectionOnPress:w,ref:L,...S}=function(e){let t=(0,o.useContext)(p);if(t){let{register:n,...o}=t;e=(0,r.dG)(o,e),n()}return(0,r.lE)(t,e.ref),e}(e),D=(0,o.useRef)(null);D.current={onPress:t,onPressChange:n,onPressStart:u,onPressEnd:i,onPressUp:s,isDisabled:d,shouldCancelOnPointerExit:P};let[K,M]=(0,o.useState)(!1),C=(0,o.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:F,removeAllGlobalListeners:O}=(0,r.xi)(),k=(0,o.useMemo)((()=>{let e=C.current,t=(t,n)=>{let{onPressStart:r,onPressChange:o,isDisabled:u}=D.current;u||e.didFirePressStart||(r&&r({type:"pressstart",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),o&&o(!0),e.didFirePressStart=!0,M(!0))},n=(t,n,r=!0)=>{let{onPressEnd:o,onPressChange:u,onPress:i,isDisabled:s}=D.current;e.didFirePressStart&&(e.ignoreClickAfterPress=!0,e.didFirePressStart=!1,o&&o({type:"pressend",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),u&&u(!1),M(!1),i&&r&&!s&&i({type:"press",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}))},o=(e,t)=>{let{onPressUp:n,isDisabled:r}=D.current;r||n&&n({type:"pressup",pointerType:t,target:e.currentTarget,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})},u=t=>{e.isPressed&&(e.isOverTarget&&n(E(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,O(),w||c(e.target))},i={onKeyDown(n){m(n.nativeEvent,n.currentTarget)&&n.currentTarget.contains(n.target)?(T(n.target,n.key)&&n.preventDefault(),n.stopPropagation(),e.isPressed||n.repeat||(e.target=n.currentTarget,e.isPressed=!0,t(n,"keyboard"),F(document,"keyup",s,!1))):"Enter"===n.key&&v(n.currentTarget)&&n.stopPropagation()},onKeyUp(t){m(t.nativeEvent,t.currentTarget)&&!t.repeat&&t.currentTarget.contains(t.target)&&o(E(e.target,t),"keyboard")},onClick(u){u&&!u.currentTarget.contains(u.target)||u&&0===u.button&&(u.stopPropagation(),d&&u.preventDefault(),e.ignoreClickAfterPress||e.ignoreEmulatedMouseEvents||"virtual"!==e.pointerType&&!l(u.nativeEvent)||(d||g||(0,r.Ao)(u.currentTarget),t(u,"virtual"),o(u,"virtual"),n(u,"virtual")),e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1)}},s=t=>{if(e.isPressed&&m(t,e.target)){T(t.target,t.key)&&t.preventDefault(),t.stopPropagation(),e.isPressed=!1;let r=t.target;n(E(e.target,t),"keyboard",e.target.contains(r)),O(),e.target instanceof HTMLElement&&e.target.contains(r)&&(v(e.target)||"link"===e.target.getAttribute("role"))&&e.target.click()}};if("undefined"!=typeof PointerEvent){i.onPointerDown=n=>{var o;0===n.button&&n.currentTarget.contains(n.target)&&(0===(o=n.nativeEvent).width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType?e.pointerType="virtual":(h(n.currentTarget)&&n.preventDefault(),e.pointerType=n.pointerType,n.stopPropagation(),e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=n.pointerId,e.target=n.currentTarget,d||g||(0,r.Ao)(n.currentTarget),w||a(e.target),t(n,e.pointerType),F(document,"pointermove",s,!1),F(document,"pointerup",l,!1),F(document,"pointercancel",f,!1))))},i.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(h(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},i.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&y(t,t.currentTarget)&&o(t,e.pointerType||t.pointerType)};let s=r=>{r.pointerId===e.activePointerId&&(y(r,e.target)?e.isOverTarget||(e.isOverTarget=!0,t(E(e.target,r),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(E(e.target,r),e.pointerType,!1),D.current.shouldCancelOnPointerExit&&u(r)))},l=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(y(t,e.target)?n(E(e.target,t),e.pointerType):e.isOverTarget&&n(E(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,O(),w||c(e.target))},f=e=>{u(e)};i.onDragStart=e=>{e.currentTarget.contains(e.target)&&u(e)}}else{i.onMouseDown=n=>{0===n.button&&n.currentTarget.contains(n.target)&&(h(n.currentTarget)&&n.preventDefault(),n.stopPropagation(),e.ignoreEmulatedMouseEvents||(e.isPressed=!0,e.isOverTarget=!0,e.target=n.currentTarget,e.pointerType=l(n.nativeEvent)?"virtual":"mouse",d||g||(0,r.Ao)(n.currentTarget),t(n,e.pointerType),F(document,"mouseup",s,!1)))},i.onMouseEnter=n=>{n.currentTarget.contains(n.target)&&(n.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,t(n,e.pointerType)))},i.onMouseLeave=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,n(t,e.pointerType,!1),D.current.shouldCancelOnPointerExit&&u(t)))},i.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||o(t,e.pointerType))};let s=t=>{0===t.button&&(e.isPressed=!1,O(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(y(t,e.target)?n(E(e.target,t),e.pointerType):e.isOverTarget&&n(E(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};i.onTouchStart=n=>{if(!n.currentTarget.contains(n.target))return;n.stopPropagation();let o=function(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}(n.nativeEvent);o&&(e.activePointerId=o.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=n.currentTarget,e.pointerType="touch",d||g||(0,r.Ao)(n.currentTarget),w||a(e.target),t(n,e.pointerType),F(window,"scroll",f,!0))},i.onTouchMove=r=>{if(!r.currentTarget.contains(r.target))return;if(r.stopPropagation(),!e.isPressed)return;let o=b(r.nativeEvent,e.activePointerId);o&&y(o,r.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,t(r,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(r,e.pointerType,!1),D.current.shouldCancelOnPointerExit&&u(r))},i.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(t.stopPropagation(),!e.isPressed)return;let r=b(t.nativeEvent,e.activePointerId);r&&y(r,t.currentTarget)?(o(t,e.pointerType),n(t,e.pointerType)):e.isOverTarget&&n(t,e.pointerType,!1),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,w||c(e.target),O()},i.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&u(t))};let f=t=>{e.isPressed&&t.target.contains(e.target)&&u({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};i.onDragStart=e=>{e.currentTarget.contains(e.target)&&u(e)}}return i}),[F,d,g,O,w]);return(0,o.useEffect)((()=>()=>{w||c(C.current.target)}),[w]),{isPressed:f||K,pressProps:(0,r.dG)(S,k)}}function v(e){return"A"===e.tagName&&e.hasAttribute("href")}function m(e,t){const{key:n,code:r}=e,o=t,u=o.getAttribute("role");return!("Enter"!==n&&" "!==n&&"Spacebar"!==n&&"Space"!==r||o instanceof HTMLInputElement&&!w(o,n)||o instanceof HTMLTextAreaElement||o.isContentEditable||v(o)&&("button"!==u||"Enter"===n)||"link"===u&&"Enter"!==n)}function b(e,t){const n=e.changedTouches;for(let e=0;e<n.length;e++){const r=n[e];if(r.identifier===t)return r}return null}function E(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function y(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=e.width/2||e.radiusX||0,n=e.height/2||e.radiusY||0;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return u=r,!((o=n).left>u.right||u.left>o.right||o.top>u.bottom||u.top>o.bottom);var o,u}function h(e){return!(e instanceof HTMLElement&&e.draggable)}function T(e,t){return e instanceof HTMLInputElement?!w(e,t):!(e instanceof HTMLButtonElement)||"submit"!==e.type}p.displayName="PressResponderContext";const P=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function w(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:P.has(e.type)}function L(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:u}=e;const i=(0,o.useCallback)((e=>{if(e.target===e.currentTarget)return r&&r(e),u&&u(!1),!0}),[r,u]),s=f(i),a=(0,o.useCallback)((e=>{e.target===e.currentTarget&&(n&&n(e),u&&u(!0),s(e))}),[u,n,s]);return{focusProps:{onFocus:!t&&(n||u||r)?a:void 0,onBlur:t||!r&&!u?null:i}}}let S=null,D=new Set,K=!1,M=!1,C=!1;const F={Tab:!0,Escape:!0};function O(e,t){for(let n of D)n(e,t)}function k(e){M=!0,function(e){return!(e.metaKey||!(0,r.V5)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(S="keyboard",O("keyboard",e))}function N(e){S="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(M=!0,O("pointer",e))}function I(e){l(e)&&(M=!0,S="virtual")}function R(e){e.target!==window&&e.target!==document&&(M||C||(S="virtual",O("virtual",e)),M=!1,C=!1)}function x(){M=!1,C=!0}function A(){if("undefined"==typeof window||K)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){M=!0,e.apply(this,arguments)},document.addEventListener("keydown",k,!0),document.addEventListener("keyup",k,!0),document.addEventListener("click",I,!0),window.addEventListener("focus",R,!0),window.addEventListener("blur",x,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",N,!0),document.addEventListener("pointermove",N,!0),document.addEventListener("pointerup",N,!0)):(document.addEventListener("mousedown",N,!0),document.addEventListener("mousemove",N,!0),document.addEventListener("mouseup",N,!0)),K=!0}function H(){return"pointer"!==S}function W(){return S}function z(e,t,n){A(),(0,o.useEffect)((()=>{let t=(t,r)=>{(function(e,t,n){return!(e&&"keyboard"===t&&n instanceof KeyboardEvent&&!F[n.key])})(null==n?void 0:n.isTextInput,t,r)&&e(H())};return D.add(t),()=>{D.delete(t)}}),t)}function U(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:u}=e,i=(0,o.useRef)({isFocusWithin:!1}),s=(0,o.useCallback)((e=>{i.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(e),u&&u(!1))}),[n,u,i]),a=f(s),c=(0,o.useCallback)((e=>{i.current.isFocusWithin||(r&&r(e),u&&u(!0),i.current.isFocusWithin=!0,a(e))}),[r,u,a]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:c,onBlur:s}}}"undefined"!=typeof document&&("loading"!==document.readyState?A():document.addEventListener("DOMContentLoaded",A));let V=!1,_=0;function G(){V=!0,setTimeout((()=>{V=!1}),50)}function B(e){"touch"===e.pointerType&&G()}function j(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",B):document.addEventListener("touchend",G),_++,()=>{_--,_>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",B):document.removeEventListener("touchend",G))}}function Y(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:u}=e,[i,s]=(0,o.useState)(!1),a=(0,o.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,o.useEffect)(j,[]);let{hoverProps:c,triggerHoverEnd:l}=(0,o.useMemo)((()=>{let e=(e,r)=>{if(a.pointerType=r,u||"touch"===r||a.isHovered||!e.currentTarget.contains(e.target))return;a.isHovered=!0;let o=e.currentTarget;a.target=o,t&&t({type:"hoverstart",target:o,pointerType:r}),n&&n(!0),s(!0)},o=(e,t)=>{if(a.pointerType="",a.target=null,"touch"===t||!a.isHovered)return;a.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),s(!1)},i={};return"undefined"!=typeof PointerEvent?(i.onPointerEnter=t=>{V&&"mouse"===t.pointerType||e(t,t.pointerType)},i.onPointerLeave=e=>{!u&&e.currentTarget.contains(e.target)&&o(e,e.pointerType)}):(i.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},i.onMouseEnter=t=>{a.ignoreEmulatedMouseEvents||V||e(t,"mouse"),a.ignoreEmulatedMouseEvents=!1},i.onMouseLeave=e=>{!u&&e.currentTarget.contains(e.target)&&o(e,"mouse")}),{hoverProps:i,triggerHoverEnd:o}}),[t,n,r,u,a]);return(0,o.useEffect)((()=>{u&&l({currentTarget:a.target},a.pointerType)}),[u]),{hoverProps:c,isHovered:i}}function X(e){let{ref:t,onInteractOutside:n,isDisabled:r,onInteractOutsideStart:u}=e,i=(0,o.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1,onInteractOutside:n,onInteractOutsideStart:u}).current;i.onInteractOutside=n,i.onInteractOutsideStart=u,(0,o.useEffect)((()=>{if(r)return;let e=e=>{Z(e,t)&&i.onInteractOutside&&(i.onInteractOutsideStart&&i.onInteractOutsideStart(e),i.isPointerDown=!0)};if("undefined"!=typeof PointerEvent){let n=e=>{i.isPointerDown&&i.onInteractOutside&&Z(e,t)&&(i.isPointerDown=!1,i.onInteractOutside(e))};return document.addEventListener("pointerdown",e,!0),document.addEventListener("pointerup",n,!0),()=>{document.removeEventListener("pointerdown",e,!0),document.removeEventListener("pointerup",n,!0)}}{let n=e=>{i.ignoreEmulatedMouseEvents?i.ignoreEmulatedMouseEvents=!1:i.isPointerDown&&i.onInteractOutside&&Z(e,t)&&(i.isPointerDown=!1,i.onInteractOutside(e))},r=e=>{i.ignoreEmulatedMouseEvents=!0,i.onInteractOutside&&i.isPointerDown&&Z(e,t)&&(i.isPointerDown=!1,i.onInteractOutside(e))};return document.addEventListener("mousedown",e,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",r,!0),()=>{document.removeEventListener("mousedown",e,!0),document.removeEventListener("mouseup",n,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("touchend",r,!0)}}}),[t,i,r])}function Z(e,t){if(e.button>0)return!1;if(e.target){const t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target))return!1}return t.current&&!t.current.contains(e.target)}function q(e){if(!e)return;let t=!0;return n=>{let r={...n,preventDefault(){n.preventDefault()},isDefaultPrevented(){return n.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&n.stopPropagation()}}function J(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:q(e.onKeyDown),onKeyUp:q(e.onKeyUp)}}}const Q=500;function $(e){let{isDisabled:t,onLongPressStart:n,onLongPressEnd:u,onLongPress:i,threshold:s=Q,accessibilityDescription:a}=e;const c=(0,o.useRef)(null);let{addGlobalListener:l,removeGlobalListener:d}=(0,r.xi)(),{pressProps:f}=g({isDisabled:t,onPressStart(e){if(("mouse"===e.pointerType||"touch"===e.pointerType)&&(n&&n({...e,type:"longpressstart"}),c.current=setTimeout((()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),i&&i({...e,type:"longpress"}),c.current=null}),s),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};l(e.target,"contextmenu",t,{once:!0}),l(window,"pointerup",(()=>{setTimeout((()=>{d(e.target,"contextmenu",t)}),30)}),{once:!0})}},onPressEnd(e){c.current&&clearTimeout(c.current),!u||"mouse"!==e.pointerType&&"touch"!==e.pointerType||u({...e,type:"longpressend"})}}),p=(0,r.PK)(i&&!t?a:null);return{longPressProps:(0,r.dG)(f,p)}}},83952:function(e,t,n){"use strict";n.r(t),n.d(t,{useId:function(){return d},mergeIds:function(){return f},useSlotId:function(){return p},chain:function(){return g},mergeProps:function(){return v},mergeRefs:function(){return m},filterDOMProps:function(){return h},focusWithoutScrolling:function(){return T},getOffset:function(){return w},clamp:function(){return i.uZ},snapValueToStep:function(){return i.N4},runAfterTransition:function(){return M},useDrag1D:function(){return F},useGlobalListeners:function(){return O},useLabels:function(){return k},useObjectRef:function(){return N},useUpdateEffect:function(){return I},useLayoutEffect:function(){return c},useResizeObserver:function(){return R},useSyncRef:function(){return x},getScrollParent:function(){return A},useViewportSize:function(){return z},useDescription:function(){return G},isMac:function(){return X},isIPhone:function(){return Z},isIPad:function(){return q},isIOS:function(){return J},isAppleDevice:function(){return Q},isWebKit:function(){return $},isChrome:function(){return ee},isAndroid:function(){return te},useEvent:function(){return ne},useValueEffect:function(){return re},scrollIntoView:function(){return oe}});var r=n(67294),o=n(78831),u=n(86010),i=n(72242);function s(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var a={};s(a,"useId",(()=>d)),s(a,"mergeIds",(()=>f)),s(a,"useSlotId",(()=>p));s({},"useLayoutEffect",(()=>c));const c="undefined"!=typeof window?r.useLayoutEffect:()=>{};let l=new Map;function d(e){let[t,n]=(0,r.useState)(e),u=(0,r.useRef)(null),i=(0,o.gP)(t),s=(0,r.useCallback)((e=>{u.current=e}),[]);return l.set(i,s),c((()=>{let e=i;return()=>{l.delete(e)}}),[i]),(0,r.useEffect)((()=>{let e=u.current;e&&(u.current=null,n(e))})),i}function f(e,t){if(e===t)return e;let n=l.get(e);if(n)return n(t),t;let r=l.get(t);return r?(r(e),e):t}function p(e=[]){let t=d(),[n,o]=re(t),u=(0,r.useCallback)((()=>{o((function*(){yield t,yield document.getElementById(t)?t:null}))}),[t,o]);return c(u,[t,u,...e]),n}function g(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}s({},"chain",(()=>g));function v(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=g(n,o):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof o?"id"===e&&n&&o?t.id=f(n,o):t[e]=void 0!==o?o:n:t[e]=(0,u.Z)(n,o)}}return t}s({},"mergeProps",(()=>v));function m(...e){return t=>{for(let n of e)"function"==typeof n?n(t):null!=n&&(n.current=t)}}s({},"mergeRefs",(()=>m));s({},"filterDOMProps",(()=>h));const b=new Set(["id"]),E=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),y=/^(data-.*)$/;function h(e,t={}){let{labelable:n,propNames:r}=t,o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(b.has(t)||n&&E.has(t)||(null==r?void 0:r.has(t))||y.test(t))&&(o[t]=e[t]);return o}function T(e){if(function(){if(null==P){P=!1;try{document.createElement("div").focus({get preventScroll(){return P=!0,!0}})}catch(e){}}return P}())e.focus({preventScroll:!0});else{let t=function(e){var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}s({},"focusWithoutScrolling",(()=>T));let P=null;function w(e,t,n="horizontal"){let r=e.getBoundingClientRect();return t?"horizontal"===n?r.right:r.bottom:"horizontal"===n?r.left:r.top}s({},"getOffset",(()=>w));var L={};s(L,"clamp",(()=>i.uZ)),s(L,"snapValueToStep",(()=>i.N4));s({},"runAfterTransition",(()=>M));let S=new Map,D=new Set;function K(){if("undefined"==typeof window)return;let e=t=>{let n=S.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),S.delete(t.target)),0===S.size)){for(let e of D)e();D.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=S.get(t.target);n||(n=new Set,S.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}function M(e){requestAnimationFrame((()=>{0===S.size?e():D.add(e)}))}"undefined"!=typeof document&&("loading"!==document.readyState?K():document.addEventListener("DOMContentLoaded",K));s({},"useDrag1D",(()=>F));const C=[];function F(e){console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");let{containerRef:t,reverse:n,orientation:o,onHover:u,onDrag:i,onPositionChange:s,onIncrement:a,onDecrement:c,onIncrementToMax:l,onDecrementToMin:d,onCollapseToggle:f}=e,p=e=>{let r=w(t.current,n,o),u=(e=>"horizontal"===o?e.clientX:e.clientY)(e);return n?r-u:u-r},g=(0,r.useRef)(!1),v=(0,r.useRef)(0),m=(0,r.useRef)({onPositionChange:s,onDrag:i});m.current.onDrag=i,m.current.onPositionChange=s;let b=e=>{e.preventDefault();let t=p(e);g.current||(g.current=!0,m.current.onDrag&&m.current.onDrag(!0),m.current.onPositionChange&&m.current.onPositionChange(t)),v.current!==t&&(v.current=t,s&&s(t))},E=e=>{const t=e.target;g.current=!1;let n=p(e);m.current.onDrag&&m.current.onDrag(!1),m.current.onPositionChange&&m.current.onPositionChange(n),C.splice(C.indexOf(t),1),window.removeEventListener("mouseup",E,!1),window.removeEventListener("mousemove",b,!1)};return{onMouseDown:e=>{const t=e.currentTarget;C.some((e=>t.contains(e)))||(C.push(t),window.addEventListener("mousemove",b,!1),window.addEventListener("mouseup",E,!1))},onMouseEnter:()=>{u&&u(!0)},onMouseOut:()=>{u&&u(!1)},onKeyDown:e=>{switch(e.key){case"Left":case"ArrowLeft":"horizontal"===o&&(e.preventDefault(),c&&!n?c():a&&n&&a());break;case"Up":case"ArrowUp":"vertical"===o&&(e.preventDefault(),c&&!n?c():a&&n&&a());break;case"Right":case"ArrowRight":"horizontal"===o&&(e.preventDefault(),a&&!n?a():c&&n&&c());break;case"Down":case"ArrowDown":"vertical"===o&&(e.preventDefault(),a&&!n?a():c&&n&&c());break;case"Home":e.preventDefault(),d&&d();break;case"End":e.preventDefault(),l&&l();break;case"Enter":e.preventDefault(),f&&f()}}}}function O(){let e=(0,r.useRef)(new Map),t=(0,r.useCallback)(((t,n,r,o)=>{let u=(null==o?void 0:o.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:u,options:o}),t.addEventListener(n,r,o)}),[]),n=(0,r.useCallback)(((t,n,r,o)=>{var u;let i=(null===(u=e.current.get(r))||void 0===u?void 0:u.fn)||r;t.removeEventListener(n,i,o),e.current.delete(r)}),[]),o=(0,r.useCallback)((()=>{e.current.forEach(((e,t)=>{n(e.eventTarget,e.type,t,e.options)}))}),[n]);return(0,r.useEffect)((()=>o),[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}s({},"useGlobalListeners",(()=>O));function k(e,t){let{id:n,"aria-label":r,"aria-labelledby":o}=e;if(n=d(n),o&&r){let e=new Set([...o.trim().split(/\s+/),n]);o=[...e].join(" ")}else o&&(o=o.trim().split(/\s+/).join(" "));return r||o||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":o}}s({},"useLabels",(()=>k));function N(e){const t=(0,r.useRef)();return c((()=>{e&&("function"==typeof e?e(t.current):e.current=t.current)}),[e]),t}s({},"useObjectRef",(()=>N));function I(e,t){const n=(0,r.useRef)(!0);(0,r.useEffect)((()=>{n.current?n.current=!1:e()}),t)}s({},"useUpdateEffect",(()=>I));function R(e){const{ref:t,onResize:n}=e;(0,r.useEffect)((()=>{let e=null==t?void 0:t.current;if(e){if(void 0===window.ResizeObserver)return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{const t=new window.ResizeObserver((e=>{e.length&&n()}));return t.observe(e),()=>{e&&t.unobserve(e)}}}}),[n,t])}s({},"useResizeObserver",(()=>R));function x(e,t){c((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}}),[e,t])}s({},"useSyncRef",(()=>x));function A(e){for(;e&&!H(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function H(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}s({},"getScrollParent",(()=>A));s({},"useViewportSize",(()=>z));let W="undefined"!=typeof window&&window.visualViewport;function z(){let[e,t]=(0,r.useState)((()=>U()));return(0,r.useEffect)((()=>{let e=()=>{t((e=>{let t=U();return t.width===e.width&&t.height===e.height?e:t}))};return W?W.addEventListener("resize",e):window.addEventListener("resize",e),()=>{W?W.removeEventListener("resize",e):window.removeEventListener("resize",e)}}),[]),e}function U(){return{width:(null==W?void 0:W.width)||window.innerWidth,height:(null==W?void 0:W.height)||window.innerHeight}}s({},"useDescription",(()=>G));let V=0;const _=new Map;function G(e){let[t,n]=(0,r.useState)(null);return c((()=>{if(!e)return;let t=_.get(e);if(t)n(t.element.id);else{let r="react-aria-description-"+V++;n(r);let o=document.createElement("div");o.id=r,o.style.display="none",o.textContent=e,document.body.appendChild(o),t={refCount:0,element:o},_.set(e,t)}return t.refCount++,()=>{0==--t.refCount&&(t.element.remove(),_.delete(e))}}),[e]),{"aria-describedby":e?t:void 0}}var B={};function j(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function Y(e){return"undefined"!=typeof window&&null!=window.navigator&&e.test((window.navigator.userAgentData||window.navigator).platform)}function X(){return Y(/^Mac/i)}function Z(){return Y(/^iPhone/i)}function q(){return Y(/^iPad/i)||X()&&navigator.maxTouchPoints>1}function J(){return Z()||q()}function Q(){return X()||J()}function $(){return j(/AppleWebKit/i)&&!ee()}function ee(){return j(/Chrome/i)}function te(){return j(/Android/i)}s(B,"isMac",(()=>X)),s(B,"isIPhone",(()=>Z)),s(B,"isIPad",(()=>q)),s(B,"isIOS",(()=>J)),s(B,"isAppleDevice",(()=>Q)),s(B,"isWebKit",(()=>$)),s(B,"isChrome",(()=>ee)),s(B,"isAndroid",(()=>te));function ne(e,t,n,o){let u=(0,r.useRef)(n);u.current=n;let i=null==n;(0,r.useEffect)((()=>{if(i)return;let n=e.current,r=e=>u.current.call(this,e);return n.addEventListener(t,r,o),()=>{n.removeEventListener(t,r,o)}}),[e,t,o,i])}s({},"useEvent",(()=>ne));function re(e){let[t,n]=(0,r.useState)(e),o=(0,r.useRef)(t),u=(0,r.useRef)(null);o.current=t;let i=(0,r.useRef)(null);i.current=()=>{let e=u.current.next();e.done?u.current=null:t===e.value?i.current():n(e.value)},c((()=>{u.current&&i.current()}));let s=(0,r.useCallback)((e=>{u.current=e(o.current),i.current()}),[u,i]);return[t,s]}s({},"useValueEffect",(()=>re));function oe(e,t){let n=ue(e,t,"left"),r=ue(e,t,"top"),o=t.offsetWidth,u=t.offsetHeight,i=e.scrollLeft,s=e.scrollTop,a=i+e.offsetWidth,c=s+e.offsetHeight;n<=i?i=n:n+o>a&&(i+=n+o-a),r<=s?s=r:r+u>c&&(s+=r+u-c),e.scrollLeft=i,e.scrollTop=s}function ue(e,t,n){const r="left"===n?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}s({},"scrollIntoView",(()=>oe))}}]);
//# sourceMappingURL=//http2.mlstatic.com/frontend-assets/search-nordic/9641.f9634ba8.js.map