import{n as p,s as x,m as O,r as U,p as L}from"./scheduler.542a8b70.js";const f=[];function N(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const r=new Set;function o(s){if(x(e,s)&&(e=s,n)){const i=!f.length;for(const l of r)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){o(s(e))}function a(s,i=p){const l=[s,i];return r.add(l),r.size===1&&(n=t(o,c)||p),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:a}}function K(e,t,n){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return N(n,(a,s)=>{let i=!1;const l=[];let _=0,g=p;const k=()=>{if(_)return;g();const u=t(r?l[0]:l,a,s);c?a(u):g=L(u)?u:p},T=o.map((u,h)=>O(u,I=>{l[h]=I,_&=~(1<<h),i&&k()},()=>{_|=1<<h}));return i=!0,k(),function(){U(T),g(),i=!1}})}var w;const z=((w=globalThis.__sveltekit_1ektszg)==null?void 0:w.base)??"";var A;const P=((A=globalThis.__sveltekit_1ektszg)==null?void 0:A.assets)??z,V="1700433079207",$="sveltekit:snapshot",B="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1},E=location.origin;function D(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function G(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...v,"":v.hover};function R(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function X(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=R(e)}}function H(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!r||j(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===E&&e.hasAttribute("download");return{url:n,external:o,target:r,download:c}}function W(e){let t=null,n=null,r=null,o=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),o===null&&(o=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=R(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[r??"off"],preload_data:y[o??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function m(e){const t=b(e);let n=!0;function r(){n=!0,t.update(a=>a)}function o(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:r,set:o,subscribe:c}}function Y(){const{set:e,subscribe:t}=b(!1);let n;async function r(){clearTimeout(n);try{const o=await fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==V;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:r}}function j(e,t){return e.origin!==E||!e.pathname.startsWith(t)}let S;function F(e){S=e.client}function J(e){return(...t)=>S[e](...t)}const M={url:m({}),page:m({}),navigating:b(null),updated:Y()};export{C as I,v as P,B as S,$ as a,H as b,W as c,M as d,z as e,X as f,D as g,F as h,j as i,K as j,J as k,E as o,G as s,b as w};
