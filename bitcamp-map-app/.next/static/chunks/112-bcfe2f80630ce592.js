"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{255:(e,r,t)=>{function o(e){let{moduleIds:r}=e;return null}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return o}}),t(5155),t(7650),t(5744),t(589)},2085:(e,r,t)=>{t.d(r,{F:()=>l});var o=t(2596);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,a=o.$,l=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return a(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:s}=r,i=Object.keys(l).map(e=>{let r=null==t?void 0:t[e],o=null==s?void 0:s[e];if(null===r)return null;let a=n(r)||n(o);return l[e][a]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return a(e,i,null==r||null==(o=r.compoundVariants)?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...s,...c}[r]):({...s,...c})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},2146:(e,r,t)=>{function o(e){let{reason:r,children:t}=e;return t}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return o}}),t(5262)},2596:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r)if(Array.isArray(r)){var a=r.length;for(t=0;t<a;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o);return n}(e))&&(o&&(o+=" "),o+=r);return o}},2664:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let o=t(9991),n=t(7102);function a(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let r=(0,o.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},2757:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}});let o=t(6966)._(t(8859)),n=/https?|ftp|gopher|file/;function a(e){let{auth:r,hostname:t}=e,a=e.protocol||"",l=e.pathname||"",s=e.hash||"",i=e.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?c=r+e.host:t&&(c=r+(~t.indexOf(":")?"["+t+"]":t),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(o.urlQueryToSearchParams(i)));let d=e.search||i&&"?"+i||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||n.test(a))&&!1!==c?(c="//"+(c||""),l&&"/"!==l[0]&&(l="/"+l)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),""+a+c+(l=l.replace(/[?#]/g,encodeURIComponent))+(d=d.replace("#","%23"))+s}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},3180:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},4054:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{bindSnapshot:function(){return l},createAsyncLocalStorage:function(){return a},createSnapshot:function(){return s}});let t=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class o{disable(){throw t}getStore(){}run(){throw t}exit(){throw t}enterWith(){throw t}static bind(e){return e}}let n="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function a(){return n?new n:new o}function l(e){return n?n.bind(e):o.bind(e)}function s(){return n?n.snapshot():function(e,...r){return e(...r)}}},4624:(e,r,t)=>{t.d(r,{DX:()=>l});var o=t(2115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}var a=t(5155),l=function(e){let r=function(e){let r=o.forwardRef((e,r)=>{let{children:t,...a}=e;if(o.isValidElement(t)){var l;let e,s,i=(l=t,(s=(e=Object.getOwnPropertyDescriptor(l.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.ref:(s=(e=Object.getOwnPropertyDescriptor(l,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.props.ref:l.props.ref||l.ref),c=function(e,r){let t={...r};for(let o in r){let n=e[o],a=r[o];/^on[A-Z]/.test(o)?n&&a?t[o]=(...e)=>{a(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...a}:"className"===o&&(t[o]=[n,a].filter(Boolean).join(" "))}return{...e,...t}}(a,t.props);return t.type!==o.Fragment&&(c.ref=r?function(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}(r,i):i),o.cloneElement(t,c)}return o.Children.count(t)>1?o.Children.only(null):null});return r.displayName=`${e}.SlotClone`,r}(e),t=o.forwardRef((e,t)=>{let{children:n,...l}=e,s=o.Children.toArray(n),c=s.find(i);if(c){let e=c.props.children,n=s.map(r=>r!==c?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,a.jsx)(r,{...l,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,n):null})}return(0,a.jsx)(r,{...l,ref:t,children:n})});return t.displayName=`${e}.Slot`,t}("Slot"),s=Symbol("radix.slottable");function i(e){return o.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===s}},5028:(e,r,t)=>{t.d(r,{default:()=>n.a});var o=t(6645),n=t.n(o)},5744:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"workAsyncStorage",{enumerable:!0,get:function(){return o.workAsyncStorageInstance}});let o=t(7828)},6645:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let o=t(8229)._(t(7357));function n(e,r){var t;let n={};"function"==typeof e&&(n.loader=e);let a={...n,...r};return(0,o.default)({...a,modules:null==(t=a.loadableGenerated)?void 0:t.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},6654:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=t(2115);function n(e,r){let t=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=a(e,o)),r&&(n.current=a(r,o))},[e,r])}function a(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},6874:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{default:function(){return g},useLinkStatus:function(){return y}});let o=t(6966),n=t(5155),a=o._(t(2115)),l=t(2757),s=t(5227),i=t(9818),c=t(6654),d=t(9991),u=t(5929);t(3230);let f=t(4930),p=t(2664),m=t(6634);function b(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(e){let r,t,o,[l,g]=(0,a.useOptimistic)(f.IDLE_LINK_STATUS),y=(0,a.useRef)(null),{href:v,as:x,children:k,prefetch:w=null,passHref:j,replace:P,shallow:_,scroll:O,onClick:z,onMouseEnter:E,onTouchStart:S,legacyBehavior:C=!1,onNavigate:M,ref:N,unstable_dynamicOnHover:A,...T}=e;r=k,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let I=a.default.useContext(s.AppRouterContext),R=!1!==w,L=null===w?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:U,as:D}=a.default.useMemo(()=>{let e=b(v);return{href:e,as:x?b(x):e}},[v,x]);C&&(t=a.default.Children.only(r));let F=C?t&&"object"==typeof t&&t.ref:N,$=a.default.useCallback(e=>(null!==I&&(y.current=(0,f.mountLinkInstance)(e,U,I,L,R,g)),()=>{y.current&&((0,f.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,f.unmountPrefetchableInstance)(e)}),[R,U,I,L,g]),G={ref:(0,c.useMergedRef)($,F),onClick(e){C||"function"!=typeof z||z(e),C&&t.props&&"function"==typeof t.props.onClick&&t.props.onClick(e),I&&(e.defaultPrevented||function(e,r,t,o,n,l,s){let{nodeName:i}=e.currentTarget;if(!("A"===i.toUpperCase()&&function(e){let r=e.currentTarget.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,p.isLocalURL)(r)){n&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),a.default.startTransition(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}(0,m.dispatchNavigateAction)(t||r,n?"replace":"push",null==l||l,o.current)})}}(e,U,D,y,P,O,M))},onMouseEnter(e){C||"function"!=typeof E||E(e),C&&t.props&&"function"==typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),I&&R&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){C||"function"!=typeof S||S(e),C&&t.props&&"function"==typeof t.props.onTouchStart&&t.props.onTouchStart(e),I&&R&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,d.isAbsoluteUrl)(D)?G.href=D:C&&!j&&("a"!==t.type||"href"in t.props)||(G.href=(0,u.addBasePath)(D)),o=C?a.default.cloneElement(t,G):(0,n.jsx)("a",{...T,...G,children:r}),(0,n.jsx)(h.Provider,{value:l,children:o})}t(3180);let h=(0,a.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,a.useContext)(h);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},7357:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let o=t(5155),n=t(2115),a=t(2146);function l(e){return{default:e&&"default"in e?e.default:e}}t(255);let s={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},i=function(e){let r={...s,...e},t=(0,n.lazy)(()=>r.loader().then(l)),i=r.loading;function c(e){let l=i?(0,o.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,s=!r.ssr||!!r.loading,c=s?n.Suspense:n.Fragment,d=r.ssr?(0,o.jsxs)(o.Fragment,{children:[null,(0,o.jsx)(t,{...e})]}):(0,o.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(t,{...e})});return(0,o.jsx)(c,{...s?{fallback:l}:{},children:d})}return c.displayName="LoadableComponent",c}},7828:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"workAsyncStorageInstance",{enumerable:!0,get:function(){return o}});let o=(0,t(4054).createAsyncLocalStorage)()},8859:(e,r)=>{function t(e){let r={};for(let[t,o]of e.entries()){let e=r[t];void 0===e?r[t]=o:Array.isArray(e)?e.push(o):r[t]=[e,o]}return r}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let r=new URLSearchParams;for(let[t,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)r.append(t,o(e));else r.set(t,o(n));return r}function a(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{assign:function(){return a},searchParamsToUrlQuery:function(){return t},urlQueryToSearchParams:function(){return n}})},9688:(e,r,t)=>{t.d(r,{QP:()=>ec});let o=e=>{let r=s(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||l(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),a=o?n(e.slice(1),o):void 0;if(a)return a;if(0===r.validators.length)return;let l=e.join("-");return r.validators.find(({validator:e})=>e(l))?.classGroupId},a=/^\[(.+)\]$/,l=e=>{if(a.test(e)){let r=a.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},s=e=>{let{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(let e in t)i(t[e],o,e,r);return o},i=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e)return d(e)?void i(e(o),r,t,o):void r.validators.push({validator:e,classGroupId:t});Object.entries(e).forEach(([e,n])=>{i(n,c(r,e),t,o)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,a)=>{t.set(n,a),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{prefix:r,experimentalParseClassName:t}=e,o=e=>{let r,t=[],o=0,n=0,a=0;for(let l=0;l<e.length;l++){let s=e[l];if(0===o&&0===n){if(":"===s){t.push(e.slice(a,l)),a=l+1;continue}if("/"===s){r=l;continue}}"["===s?o++:"]"===s?o--:"("===s?n++:")"===s&&n--}let l=0===t.length?e:e.substring(a),s=p(l);return{modifiers:t,hasImportantModifier:s!==l,baseClassName:s,maybePostfixModifierPosition:r&&r>a?r-a:void 0}};if(r){let e=r+":",t=o;o=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=o;o=r=>t({className:r,parseClassName:e})}return o},p=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,m=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],o=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...o.sort(),e),o=[]):o.push(e)}),t.push(...o.sort()),t}},b=e=>({cache:u(e.cacheSize),parseClassName:f(e),sortModifiers:m(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:a}=r,l=[],s=e.trim().split(g),i="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=t(r);if(c){i=r+(i.length>0?" "+i:i);continue}let m=!!p,b=o(m?f.substring(0,p):f);if(!b){if(!m||!(b=o(f))){i=r+(i.length>0?" "+i:i);continue}m=!1}let g=a(d).join(":"),h=u?g+"!":g,y=h+b;if(l.includes(y))continue;l.push(y);let v=n(b,m);for(let e=0;e<v.length;++e){let r=v[e];l.push(h+r)}i=r+(i.length>0?" "+i:i)}return i};function y(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=v(e))&&(o&&(o+=" "),o+=r);return o}let v=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=v(e[o]))&&(t&&(t+=" "),t+=r);return t},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},k=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,w=/^\((?:(\w[\w-]*):)?(.+)\)$/i,j=/^\d+\/\d+$/,P=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,O=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,z=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,E=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,S=e=>j.test(e),C=e=>!!e&&!Number.isNaN(Number(e)),M=e=>!!e&&Number.isInteger(Number(e)),N=e=>e.endsWith("%")&&C(e.slice(0,-1)),A=e=>P.test(e),T=()=>!0,I=e=>_.test(e)&&!O.test(e),R=()=>!1,L=e=>z.test(e),U=e=>E.test(e),D=e=>!$(e)&&!q(e),F=e=>ee(e,en,R),$=e=>k.test(e),G=e=>ee(e,ea,I),W=e=>ee(e,el,C),B=e=>ee(e,et,R),K=e=>ee(e,eo,U),V=e=>ee(e,ei,L),q=e=>w.test(e),Q=e=>er(e,ea),X=e=>er(e,es),Z=e=>er(e,et),J=e=>er(e,en),H=e=>er(e,eo),Y=e=>er(e,ei,!0),ee=(e,r,t)=>{let o=k.exec(e);return!!o&&(o[1]?r(o[1]):t(o[2]))},er=(e,r,t=!1)=>{let o=w.exec(e);return!!o&&(o[1]?r(o[1]):t)},et=e=>"position"===e||"percentage"===e,eo=e=>"image"===e||"url"===e,en=e=>"length"===e||"size"===e||"bg-size"===e,ea=e=>"length"===e,el=e=>"number"===e,es=e=>"family-name"===e,ei=e=>"shadow"===e;Symbol.toStringTag;let ec=function(e,...r){let t,o,n,a=function(s){return o=(t=b(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,a=l,l(s)};function l(e){let r=o(e);if(r)return r;let a=h(e,t);return n(e,a),a}return function(){return a(y.apply(null,arguments))}}(()=>{let e=x("color"),r=x("font"),t=x("text"),o=x("font-weight"),n=x("tracking"),a=x("leading"),l=x("breakpoint"),s=x("container"),i=x("spacing"),c=x("radius"),d=x("shadow"),u=x("inset-shadow"),f=x("text-shadow"),p=x("drop-shadow"),m=x("blur"),b=x("perspective"),g=x("aspect"),h=x("ease"),y=x("animate"),v=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...k(),q,$],j=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],_=()=>[q,$,i],O=()=>[S,"full","auto",..._()],z=()=>[M,"none","subgrid",q,$],E=()=>["auto",{span:["full",M,q,$]},M,q,$],I=()=>[M,"auto",q,$],R=()=>["auto","min","max","fr",q,$],L=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],U=()=>["start","end","center","stretch","center-safe","end-safe"],ee=()=>["auto",..._()],er=()=>[S,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",..._()],et=()=>[e,q,$],eo=()=>[...k(),Z,B,{position:[q,$]}],en=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ea=()=>["auto","cover","contain",J,F,{size:[q,$]}],el=()=>[N,Q,G],es=()=>["","none","full",c,q,$],ei=()=>["",C,Q,G],ec=()=>["solid","dashed","dotted","double"],ed=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],eu=()=>[C,N,Z,B],ef=()=>["","none",m,q,$],ep=()=>["none",C,q,$],em=()=>["none",C,q,$],eb=()=>[C,q,$],eg=()=>[S,"full",..._()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[A],breakpoint:[A],color:[T],container:[A],"drop-shadow":[A],ease:["in","out","in-out"],font:[D],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[A],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[A],shadow:[A],spacing:["px",C],text:[A],"text-shadow":[A],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",S,$,q,g]}],container:["container"],columns:[{columns:[C,$,q,s]}],"break-after":[{"break-after":v()}],"break-before":[{"break-before":v()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:O()}],"inset-x":[{"inset-x":O()}],"inset-y":[{"inset-y":O()}],start:[{start:O()}],end:[{end:O()}],top:[{top:O()}],right:[{right:O()}],bottom:[{bottom:O()}],left:[{left:O()}],visibility:["visible","invisible","collapse"],z:[{z:[M,"auto",q,$]}],basis:[{basis:[S,"full","auto",s,..._()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[C,S,"auto","initial","none",$]}],grow:[{grow:["",C,q,$]}],shrink:[{shrink:["",C,q,$]}],order:[{order:[M,"first","last","none",q,$]}],"grid-cols":[{"grid-cols":z()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":z()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":R()}],"auto-rows":[{"auto-rows":R()}],gap:[{gap:_()}],"gap-x":[{"gap-x":_()}],"gap-y":[{"gap-y":_()}],"justify-content":[{justify:[...L(),"normal"]}],"justify-items":[{"justify-items":[...U(),"normal"]}],"justify-self":[{"justify-self":["auto",...U()]}],"align-content":[{content:["normal",...L()]}],"align-items":[{items:[...U(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...U(),{baseline:["","last"]}]}],"place-content":[{"place-content":L()}],"place-items":[{"place-items":[...U(),"baseline"]}],"place-self":[{"place-self":["auto",...U()]}],p:[{p:_()}],px:[{px:_()}],py:[{py:_()}],ps:[{ps:_()}],pe:[{pe:_()}],pt:[{pt:_()}],pr:[{pr:_()}],pb:[{pb:_()}],pl:[{pl:_()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":_()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":_()}],"space-y-reverse":["space-y-reverse"],size:[{size:er()}],w:[{w:[s,"screen",...er()]}],"min-w":[{"min-w":[s,"screen","none",...er()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[l]},...er()]}],h:[{h:["screen",...er()]}],"min-h":[{"min-h":["screen","none",...er()]}],"max-h":[{"max-h":["screen",...er()]}],"font-size":[{text:["base",t,Q,G]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,q,W]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",N,$]}],"font-family":[{font:[X,$,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,q,$]}],"line-clamp":[{"line-clamp":[C,"none",q,W]}],leading:[{leading:[a,..._()]}],"list-image":[{"list-image":["none",q,$]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",q,$]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:et()}],"text-color":[{text:et()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ec(),"wavy"]}],"text-decoration-thickness":[{decoration:[C,"from-font","auto",q,G]}],"text-decoration-color":[{decoration:et()}],"underline-offset":[{"underline-offset":[C,"auto",q,$]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",q,$]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",q,$]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:eo()}],"bg-repeat":[{bg:en()}],"bg-size":[{bg:ea()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},M,q,$],radial:["",q,$],conic:[M,q,$]},H,K]}],"bg-color":[{bg:et()}],"gradient-from-pos":[{from:el()}],"gradient-via-pos":[{via:el()}],"gradient-to-pos":[{to:el()}],"gradient-from":[{from:et()}],"gradient-via":[{via:et()}],"gradient-to":[{to:et()}],rounded:[{rounded:es()}],"rounded-s":[{"rounded-s":es()}],"rounded-e":[{"rounded-e":es()}],"rounded-t":[{"rounded-t":es()}],"rounded-r":[{"rounded-r":es()}],"rounded-b":[{"rounded-b":es()}],"rounded-l":[{"rounded-l":es()}],"rounded-ss":[{"rounded-ss":es()}],"rounded-se":[{"rounded-se":es()}],"rounded-ee":[{"rounded-ee":es()}],"rounded-es":[{"rounded-es":es()}],"rounded-tl":[{"rounded-tl":es()}],"rounded-tr":[{"rounded-tr":es()}],"rounded-br":[{"rounded-br":es()}],"rounded-bl":[{"rounded-bl":es()}],"border-w":[{border:ei()}],"border-w-x":[{"border-x":ei()}],"border-w-y":[{"border-y":ei()}],"border-w-s":[{"border-s":ei()}],"border-w-e":[{"border-e":ei()}],"border-w-t":[{"border-t":ei()}],"border-w-r":[{"border-r":ei()}],"border-w-b":[{"border-b":ei()}],"border-w-l":[{"border-l":ei()}],"divide-x":[{"divide-x":ei()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ei()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ec(),"hidden","none"]}],"divide-style":[{divide:[...ec(),"hidden","none"]}],"border-color":[{border:et()}],"border-color-x":[{"border-x":et()}],"border-color-y":[{"border-y":et()}],"border-color-s":[{"border-s":et()}],"border-color-e":[{"border-e":et()}],"border-color-t":[{"border-t":et()}],"border-color-r":[{"border-r":et()}],"border-color-b":[{"border-b":et()}],"border-color-l":[{"border-l":et()}],"divide-color":[{divide:et()}],"outline-style":[{outline:[...ec(),"none","hidden"]}],"outline-offset":[{"outline-offset":[C,q,$]}],"outline-w":[{outline:["",C,Q,G]}],"outline-color":[{outline:et()}],shadow:[{shadow:["","none",d,Y,V]}],"shadow-color":[{shadow:et()}],"inset-shadow":[{"inset-shadow":["none",u,Y,V]}],"inset-shadow-color":[{"inset-shadow":et()}],"ring-w":[{ring:ei()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:et()}],"ring-offset-w":[{"ring-offset":[C,G]}],"ring-offset-color":[{"ring-offset":et()}],"inset-ring-w":[{"inset-ring":ei()}],"inset-ring-color":[{"inset-ring":et()}],"text-shadow":[{"text-shadow":["none",f,Y,V]}],"text-shadow-color":[{"text-shadow":et()}],opacity:[{opacity:[C,q,$]}],"mix-blend":[{"mix-blend":[...ed(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ed()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[C]}],"mask-image-linear-from-pos":[{"mask-linear-from":eu()}],"mask-image-linear-to-pos":[{"mask-linear-to":eu()}],"mask-image-linear-from-color":[{"mask-linear-from":et()}],"mask-image-linear-to-color":[{"mask-linear-to":et()}],"mask-image-t-from-pos":[{"mask-t-from":eu()}],"mask-image-t-to-pos":[{"mask-t-to":eu()}],"mask-image-t-from-color":[{"mask-t-from":et()}],"mask-image-t-to-color":[{"mask-t-to":et()}],"mask-image-r-from-pos":[{"mask-r-from":eu()}],"mask-image-r-to-pos":[{"mask-r-to":eu()}],"mask-image-r-from-color":[{"mask-r-from":et()}],"mask-image-r-to-color":[{"mask-r-to":et()}],"mask-image-b-from-pos":[{"mask-b-from":eu()}],"mask-image-b-to-pos":[{"mask-b-to":eu()}],"mask-image-b-from-color":[{"mask-b-from":et()}],"mask-image-b-to-color":[{"mask-b-to":et()}],"mask-image-l-from-pos":[{"mask-l-from":eu()}],"mask-image-l-to-pos":[{"mask-l-to":eu()}],"mask-image-l-from-color":[{"mask-l-from":et()}],"mask-image-l-to-color":[{"mask-l-to":et()}],"mask-image-x-from-pos":[{"mask-x-from":eu()}],"mask-image-x-to-pos":[{"mask-x-to":eu()}],"mask-image-x-from-color":[{"mask-x-from":et()}],"mask-image-x-to-color":[{"mask-x-to":et()}],"mask-image-y-from-pos":[{"mask-y-from":eu()}],"mask-image-y-to-pos":[{"mask-y-to":eu()}],"mask-image-y-from-color":[{"mask-y-from":et()}],"mask-image-y-to-color":[{"mask-y-to":et()}],"mask-image-radial":[{"mask-radial":[q,$]}],"mask-image-radial-from-pos":[{"mask-radial-from":eu()}],"mask-image-radial-to-pos":[{"mask-radial-to":eu()}],"mask-image-radial-from-color":[{"mask-radial-from":et()}],"mask-image-radial-to-color":[{"mask-radial-to":et()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":k()}],"mask-image-conic-pos":[{"mask-conic":[C]}],"mask-image-conic-from-pos":[{"mask-conic-from":eu()}],"mask-image-conic-to-pos":[{"mask-conic-to":eu()}],"mask-image-conic-from-color":[{"mask-conic-from":et()}],"mask-image-conic-to-color":[{"mask-conic-to":et()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:eo()}],"mask-repeat":[{mask:en()}],"mask-size":[{mask:ea()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",q,$]}],filter:[{filter:["","none",q,$]}],blur:[{blur:ef()}],brightness:[{brightness:[C,q,$]}],contrast:[{contrast:[C,q,$]}],"drop-shadow":[{"drop-shadow":["","none",p,Y,V]}],"drop-shadow-color":[{"drop-shadow":et()}],grayscale:[{grayscale:["",C,q,$]}],"hue-rotate":[{"hue-rotate":[C,q,$]}],invert:[{invert:["",C,q,$]}],saturate:[{saturate:[C,q,$]}],sepia:[{sepia:["",C,q,$]}],"backdrop-filter":[{"backdrop-filter":["","none",q,$]}],"backdrop-blur":[{"backdrop-blur":ef()}],"backdrop-brightness":[{"backdrop-brightness":[C,q,$]}],"backdrop-contrast":[{"backdrop-contrast":[C,q,$]}],"backdrop-grayscale":[{"backdrop-grayscale":["",C,q,$]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[C,q,$]}],"backdrop-invert":[{"backdrop-invert":["",C,q,$]}],"backdrop-opacity":[{"backdrop-opacity":[C,q,$]}],"backdrop-saturate":[{"backdrop-saturate":[C,q,$]}],"backdrop-sepia":[{"backdrop-sepia":["",C,q,$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":_()}],"border-spacing-x":[{"border-spacing-x":_()}],"border-spacing-y":[{"border-spacing-y":_()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",q,$]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[C,"initial",q,$]}],ease:[{ease:["linear","initial",h,q,$]}],delay:[{delay:[C,q,$]}],animate:[{animate:["none",y,q,$]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,q,$]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ep()}],"rotate-x":[{"rotate-x":ep()}],"rotate-y":[{"rotate-y":ep()}],"rotate-z":[{"rotate-z":ep()}],scale:[{scale:em()}],"scale-x":[{"scale-x":em()}],"scale-y":[{"scale-y":em()}],"scale-z":[{"scale-z":em()}],"scale-3d":["scale-3d"],skew:[{skew:eb()}],"skew-x":[{"skew-x":eb()}],"skew-y":[{"skew-y":eb()}],transform:[{transform:[q,$,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eg()}],"translate-x":[{"translate-x":eg()}],"translate-y":[{"translate-y":eg()}],"translate-z":[{"translate-z":eg()}],"translate-none":["translate-none"],accent:[{accent:et()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:et()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",q,$]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",q,$]}],fill:[{fill:["none",...et()]}],"stroke-w":[{stroke:[C,Q,G,W]}],stroke:[{stroke:["none",...et()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}})},9991:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return h},NormalizeError:function(){return b},PageNotFoundError:function(){return g},SP:function(){return f},ST:function(){return p},WEB_VITALS:function(){return t},execOnce:function(){return o},getDisplayName:function(){return i},getLocationOrigin:function(){return l},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return c},loadGetInitialProps:function(){return u},normalizeRepeatedSlashes:function(){return d},stringifyError:function(){return v}});let t=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let r,t=!1;return function(){for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];return t||(t=!0,r=e(...n)),r}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>n.test(e);function l(){let{protocol:e,hostname:r,port:t}=window.location;return e+"//"+r+(t?":"+t:"")}function s(){let{href:e}=window.location,r=l();return e.substring(r.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function d(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?"?"+r.slice(1).join("?"):"")}async function u(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await u(r.Component,r.ctx)}:{};let o=await e.getInitialProps(r);if(t&&c(t))return o;if(!o)throw Object.defineProperty(Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+o+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class h extends Error{constructor(e,r){super(),this.message="Failed to load static file for page: "+e+" "+r}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);