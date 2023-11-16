import{s as q,a as B,o as U,t as j,b as A}from"../chunks/scheduler.542a8b70.js";import{S as W,i as z,s as F,e as d,c as G,a as b,t as h,b as y,d as p,f as w,g as H,h as J,j as K,k as D,l as m,m as M,n as Q,o as X,p as L,q as E,r as v,u as I,v as R,w as P}from"../chunks/index.def341b4.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},O={},g=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),y()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),o[12](null),e&&P(e,t)}}}function x(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),y()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),o[11](null),e&&P(e,t)}}}function ee(o){let e,n,i;var s=o[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),y()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),o[10](null),e&&P(e,t)}}}function T(o){let e,n=o[6]&&V(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(o){let e;return{c(){e=M(o[7])},l(n){e=Q(n,o[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(o){let e,n,i,s,f;const t=[x,$],r=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let c=o[5]&&T(o);return{c(){n.c(),i=F(),c&&c.c(),s=d()},l(a){n.l(a),i=G(a),c&&c.l(a),s=d()},m(a,u){r[e].m(a,u),b(a,i,u),c&&c.m(a,u),b(a,s,u),f=!0},p(a,[u]){let k=e;e=l(a),e===k?r[e].p(a,u):(L(),h(r[k],1,1,()=>{r[k]=null}),y(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),p(n,1),n.m(i.parentNode,i)),a[5]?c?c.p(a,u):(c=T(a),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(a){f||(p(n),f=!0)},o(a){h(n),f=!1},d(a){a&&(w(i),w(s)),r[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;B(i.page.notify);let a=!1,u=!1,k=null;U(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),j().then(()=>{n(7,k=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){A[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){A[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function C(_){A[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,s=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,r=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(s)},[t,f,r,l,c,a,u,k,i,s,N,S,C]}class oe extends W{constructor(e){super(),z(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>g(()=>import("../nodes/0.10cf111a.js"),["..\\nodes\\0.10cf111a.js","..\\chunks\\scheduler.542a8b70.js","..\\chunks\\index.def341b4.js","..\\assets\\0.96a59e84.css"],import.meta.url),()=>g(()=>import("../nodes/1.740eb9a4.js"),["..\\nodes\\1.740eb9a4.js","..\\chunks\\scheduler.542a8b70.js","..\\chunks\\index.def341b4.js","..\\chunks\\singletons.c911c07e.js"],import.meta.url),()=>g(()=>import("../nodes/2.4377f024.js"),["..\\nodes\\2.4377f024.js","..\\chunks\\scheduler.542a8b70.js","..\\chunks\\index.def341b4.js","..\\chunks\\navigation.51511263.js","..\\chunks\\singletons.c911c07e.js","..\\assets\\navigation.3a6d0da3.css"],import.meta.url),()=>g(()=>import("../nodes/3.ed9609e4.js"),["..\\nodes\\3.ed9609e4.js","..\\chunks\\scheduler.542a8b70.js","..\\chunks\\index.def341b4.js","..\\chunks\\navigation.51511263.js","..\\chunks\\singletons.c911c07e.js","..\\assets\\navigation.3a6d0da3.css"],import.meta.url),()=>g(()=>import("../nodes/4.cabca7ec.js"),["..\\nodes\\4.cabca7ec.js","..\\chunks\\scheduler.542a8b70.js","..\\chunks\\index.def341b4.js","..\\chunks\\navigation.51511263.js","..\\chunks\\singletons.c911c07e.js","..\\assets\\navigation.3a6d0da3.css"],import.meta.url),()=>g(()=>import("../nodes/5.ec6aadd5.js"),["..\\nodes\\5.ec6aadd5.js","..\\chunks\\scheduler.542a8b70.js","..\\chunks\\index.def341b4.js","..\\chunks\\navigation.51511263.js","..\\chunks\\singletons.c911c07e.js","..\\assets\\navigation.3a6d0da3.css"],import.meta.url),()=>g(()=>import("../nodes/6.8fda96b4.js"),["..\\nodes\\6.8fda96b4.js","..\\chunks\\scheduler.542a8b70.js","..\\chunks\\index.def341b4.js","..\\chunks\\navigation.51511263.js","..\\chunks\\singletons.c911c07e.js","..\\assets\\navigation.3a6d0da3.css"],import.meta.url)],le=[],fe={"/":[2],"/Actions":[3],"/Attendance":[4],"/Notes":[5],"/Points":[6]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
