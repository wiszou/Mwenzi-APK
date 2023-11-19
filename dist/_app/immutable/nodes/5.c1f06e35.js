import{s as Tt,f as St,r as tt,o as Ot}from"../chunks/scheduler.542a8b70.js";import{S as Et,i as Nt,g as n,s as k,r as At,h as r,j as C,y as S,c as D,f as v,u as Mt,k as o,z as W,a as ae,x as l,B as ft,v as Lt,A as ee,d as Rt,t as It,C as $e,w as Ht,m as Ne,n as Ae,o as Me,e as qe,D as Bt}from"../chunks/index.def341b4.js";import{e as Ee,T as jt,u as Pt,s as zt,a as Vt,b as Ut,c as he,d as ze,h as ye,n as et,t as fe,p as qt,q as Ve,w as Ue,g as gt,v as Zt,o as vt,f as ge}from"../chunks/Toaster.7ae65ce8.js";import{g as Gt}from"../chunks/navigation.1913fd84.js";function pt(a,e,i){const t=a.slice();return t[42]=e[i],t}function _t(a,e,i){const t=a.slice();return t[42]=e[i],t}function xt(a,e,i){const t=a.slice();return t[42]=e[i],t}function mt(a){let e,i=a[42].id+"",t,p,s;return{c(){e=n("option"),t=Ne(i),p=k(),this.h()},l(d){e=r(d,"OPTION",{class:!0});var b=C(e);t=Ae(b,i),p=D(b),b.forEach(v),this.h()},h(){o(e,"class","rounded-xl"),e.__value=s=a[42].id,W(e,e.__value)},m(d,b){ae(d,e,b),l(e,t),l(e,p)},p(d,b){b[0]&2&&i!==(i=d[42].id+"")&&Me(t,i),b[0]&2&&s!==(s=d[42].id)&&(e.__value=s,W(e,e.__value))},d(d){d&&v(e)}}}function bt(a){let e,i="Only Me",t,p="Share to Class";return{c(){e=n("option"),e.textContent=i,t=n("option"),t.textContent=p,this.h()},l(s){e=r(s,"OPTION",{"data-svelte-h":!0}),S(e)!=="svelte-18ar71d"&&(e.textContent=i),t=r(s,"OPTION",{"data-svelte-h":!0}),S(t)!=="svelte-13zrw1x"&&(t.textContent=p),this.h()},h(){e.selected=!0,e.__value="Only Me",W(e,e.__value),t.__value="Current Class",W(t,t.__value)},m(s,d){ae(s,e,d),ae(s,t,d)},d(s){s&&(v(e),v(t))}}}function yt(a){let e,i="Only Me",t,p="Current Class";return{c(){e=n("option"),e.textContent=i,t=n("option"),t.textContent=p,this.h()},l(s){e=r(s,"OPTION",{"data-svelte-h":!0}),S(e)!=="svelte-1ybl6qu"&&(e.textContent=i),t=r(s,"OPTION",{"data-svelte-h":!0}),S(t)!=="svelte-1bsx6ml"&&(t.textContent=p),this.h()},h(){e.__value="Only Me",W(e,e.__value),t.selected=!0,t.__value="Current Class",W(t,t.__value)},m(s,d){ae(s,e,d),ae(s,t,d)},d(s){s&&(v(e),v(t))}}}function wt(a){let e,i,t,p,s=a[42].Date+"",d,b,$,Z=a[42].Title+"",M,L,V,_,U,z,T,O,R="Undo",B,A,q,E=a[42].Status=="Only Me"&&bt(),w=a[42].Status=="Current Class"&&yt();function ne(...x){return a[17](a[42],...x)}function I(...x){return a[18](a[42],...x)}return{c(){e=n("tr"),i=n("td"),t=n("h1"),p=n("span"),d=Ne(s),b=n("br"),$=k(),M=Ne(Z),L=k(),V=n("td"),_=n("select"),E&&E.c(),U=qe(),w&&w.c(),z=k(),T=n("td"),O=n("button"),O.textContent=R,B=k(),this.h()},l(x){e=r(x,"TR",{class:!0});var G=C(e);i=r(G,"TD",{class:!0});var re=C(i);t=r(re,"H1",{class:!0});var X=C(t);p=r(X,"SPAN",{class:!0});var j=C(p);d=Ae(j,s),j.forEach(v),b=r(X,"BR",{}),$=D(X),M=Ae(X,Z),X.forEach(v),re.forEach(v),L=D(G),V=r(G,"TD",{class:!0});var H=C(V);_=r(H,"SELECT",{id:!0,class:!0});var Y=C(_);E&&E.l(Y),U=qe(),w&&w.l(Y),Y.forEach(v),H.forEach(v),z=D(G),T=r(G,"TD",{class:!0});var F=C(T);O=r(F,"BUTTON",{class:!0,"data-svelte-h":!0}),S(O)!=="svelte-9hgda5"&&(O.textContent=R),F.forEach(v),B=D(G),G.forEach(v),this.h()},h(){o(p,"class","text-xs font-normal"),o(t,"class","font-medium text-left text-sm"),o(i,"class","px-2 pb-1 pt-1 w-36"),o(_,"id","selectOption"),o(_,"class","update-status-select border-gray-200 w-28 h-6 mr-1 font-medium text-sm text-center border border-gray focus:none rounded-3xl shadow-sm"),o(V,"class","text-center"),o(O,"class","px-3 bg-yellow-500 border-transparent hover:bg-yellow-600 hover:border-none text-sm text-white rounded-3xl"),o(T,"class","text-center"),o(e,"class","bg-white border-b dark:bg-gray-800 dark:border-gray-700")},m(x,G){ae(x,e,G),l(e,i),l(i,t),l(t,p),l(p,d),l(t,b),l(t,$),l(t,M),l(e,L),l(e,V),l(V,_),E&&E.m(_,null),l(_,U),w&&w.m(_,null),l(e,z),l(e,T),l(T,O),l(e,B),A||(q=[ee(_,"change",ne),ee(O,"click",I)],A=!0)},p(x,G){a=x,G[0]&16&&s!==(s=a[42].Date+"")&&Me(d,s),G[0]&16&&Z!==(Z=a[42].Title+"")&&Me(M,Z),a[42].Status=="Only Me"?E||(E=bt(),E.c(),E.m(_,U)):E&&(E.d(1),E=null),a[42].Status=="Current Class"?w||(w=yt(),w.c(),w.m(_,null)):w&&(w.d(1),w=null)},d(x){x&&v(e),E&&E.d(),w&&w.d(),A=!1,tt(q)}}}function Ct(a){let e,i="Only Me",t,p="Share to Class";return{c(){e=n("option"),e.textContent=i,t=n("option"),t.textContent=p,this.h()},l(s){e=r(s,"OPTION",{"data-svelte-h":!0}),S(e)!=="svelte-18ar71d"&&(e.textContent=i),t=r(s,"OPTION",{"data-svelte-h":!0}),S(t)!=="svelte-13zrw1x"&&(t.textContent=p),this.h()},h(){e.selected=!0,e.__value="Only Me",W(e,e.__value),t.__value="Current Class",W(t,t.__value)},m(s,d){ae(s,e,d),ae(s,t,d)},d(s){s&&(v(e),v(t))}}}function kt(a){let e,i="Only Me",t,p="Current Class";return{c(){e=n("option"),e.textContent=i,t=n("option"),t.textContent=p,this.h()},l(s){e=r(s,"OPTION",{"data-svelte-h":!0}),S(e)!=="svelte-1ybl6qu"&&(e.textContent=i),t=r(s,"OPTION",{"data-svelte-h":!0}),S(t)!=="svelte-19j1oij"&&(t.textContent=p),this.h()},h(){e.__value="Only Me",W(e,e.__value),t.selected=!0,t.__value="Current Class",W(t,t.__value)},m(s,d){ae(s,e,d),ae(s,t,d)},d(s){s&&(v(e),v(t))}}}function Dt(a){let e,i,t,p,s=a[42].Date+"",d,b,$,Z=a[42].Title+"",M,L,V,_,U,z,T,O,R='<img src="done.png" class="h-7 transform transition-transform focus:scale-100 active:scale-90" alt="..."/>',B,A,q='<img src="delete.png" class="h-7 transform transition-transform focus:scale-100 active:scale-90" alt="..."/>',E,w,ne,I=a[42].Status=="Only Me"&&Ct(),x=a[42].Status=="Current Class"&&kt();function G(...j){return a[19](a[42],...j)}function re(...j){return a[20](a[42],...j)}function X(...j){return a[21](a[42],...j)}return{c(){e=n("tr"),i=n("td"),t=n("h1"),p=n("span"),d=Ne(s),b=n("br"),$=k(),M=Ne(Z),L=k(),V=n("td"),_=n("select"),I&&I.c(),U=qe(),x&&x.c(),z=k(),T=n("td"),O=n("button"),O.innerHTML=R,B=k(),A=n("button"),A.innerHTML=q,E=k(),this.h()},l(j){e=r(j,"TR",{class:!0});var H=C(e);i=r(H,"TD",{class:!0});var Y=C(i);t=r(Y,"H1",{class:!0});var F=C(t);p=r(F,"SPAN",{class:!0});var we=C(p);d=Ae(we,s),we.forEach(v),b=r(F,"BR",{}),$=D(F),M=Ae(F,Z),F.forEach(v),Y.forEach(v),L=D(H),V=r(H,"TD",{class:!0});var u=C(V);_=r(u,"SELECT",{id:!0,class:!0});var f=C(_);I&&I.l(f),U=qe(),x&&x.l(f),f.forEach(v),u.forEach(v),z=D(H),T=r(H,"TD",{});var N=C(T);O=r(N,"BUTTON",{class:!0,"data-svelte-h":!0}),S(O)!=="svelte-i426fi"&&(O.innerHTML=R),B=D(N),A=r(N,"BUTTON",{class:!0,"data-svelte-h":!0}),S(A)!=="svelte-1rljp09"&&(A.innerHTML=q),N.forEach(v),E=D(H),H.forEach(v),this.h()},h(){o(p,"class","text-xs font-normal"),o(t,"class","font-medium text-left text-sm"),o(i,"class","px-2 pb-1 pt-1 w-36"),o(_,"id","selectOption"),o(_,"class","update-status-select border-gray-200 w-32 h-6 mr-1 font-medium text-sm text-center border border-gray focus:none rounded-3xl shadow-sm"),o(V,"class","text-right"),o(O,"class","update-status-button pl-1"),o(A,"class","delete-button"),o(e,"class","bg-white border-b dark:bg-gray-800 dark:border-gray-700")},m(j,H){ae(j,e,H),l(e,i),l(i,t),l(t,p),l(p,d),l(t,b),l(t,$),l(t,M),l(e,L),l(e,V),l(V,_),I&&I.m(_,null),l(_,U),x&&x.m(_,null),l(e,z),l(e,T),l(T,O),l(T,B),l(T,A),l(e,E),w||(ne=[ee(_,"change",G),ee(O,"click",re),ee(A,"click",X)],w=!0)},p(j,H){a=j,H[0]&8&&s!==(s=a[42].Date+"")&&Me(d,s),H[0]&8&&Z!==(Z=a[42].Title+"")&&Me(M,Z),a[42].Status=="Only Me"?I||(I=Ct(),I.c(),I.m(_,U)):I&&(I.d(1),I=null),a[42].Status=="Current Class"?x||(x=kt(),x.c(),x.m(_,null)):x&&(x.d(1),x=null)},d(j){j&&v(e),I&&I.d(),x&&x.d(),w=!1,tt(ne)}}}function Yt(a){let e,i,t='<div class="mx-6 flex flex-wrap pt-5 flex-col md:flex-row items-center"><div class="w-full flex flex-row justify-between"><nav class="flex"><img src="Mwenzi5.png" class="h-14 pb-2" alt="..."/></nav> <div class="flex flex-row"><p class="font-medium text-md my-auto mr-3" id="userName">Hi, Mwenzi Teacher</p> <button class="dropdown dropdown-end"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></svg> <ul tabindex="0" class="text-center rounded-2xl mt-2 dropdown-content shadow bg-base-100 w-24"><li class="rounded-2xl hover:bg-gray-200"><a class="py-1 flex justify-center font-medium text-md">Log out</a></li></ul></button></div></div></div>',p,s,d,b,$="Select Class",Z,M,L,V="Sort By",_,U="Recent",z,T="Old",O,R,B,A,q,E,w,ne='<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="ml-3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f2f2f2" fill-rule="evenodd" d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"></path></g></svg>',I,x,G='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier" ble-fi=""><path d="M8.707 6.707a1 1 0 0 0-1.414-1.414L4 8.586 2.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4ZM12 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H12ZM8.707 13.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 16.586l3.293-3.293a1 1 0 0 1 1.414 0ZM12 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H12Z" fill="#currentColor" class="fill-current text-gray-600 hover:text-blue-500"></path></g></svg>',re,X,j,H,Y,F,we="✕",u,f,N="Note Archives",m,g,y,te,Le='<tr><th scope="col" class="pr-5 pl-3 py-4 text-left">Note</th> <th scope="col" class="px-6 py-4 text-center">Status</th> <th scope="col" class="px-6 py-4 text-right">Action</th></tr>',Ze,Ce,Ge,ve,xe,lt='<tr><th scope="col" class="pr-5 pl-3 py-4 text-left">Note</th> <th scope="col" class="px-6 py-4 text-center">Status</th> <th scope="col" class="px-6 py-4 text-right">Action</th></tr>',Ye,ke,Fe,me,le,ce,st='<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" fill="currentColor" class="bi bi-person-fill-check text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Attendance</span>',Je,ie,at='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" class="bi bi-award-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 16 16"><path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"></path><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Points</span>',Ke,ue,ot='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" class="bi bi-sticky-fill text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 17 17"><path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"></path></svg> <span class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Notes</span>',Qe,de,nt='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" class="bi bi-grid-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 17 17"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Actions</span>',We,be,Re,Xe,rt,De=Ee(a[1]),J=[];for(let h=0;h<De.length;h+=1)J[h]=mt(xt(a,De,h));let Te=Ee(a[4]),K=[];for(let h=0;h<Te.length;h+=1)K[h]=wt(_t(a,Te,h));let Se=Ee(a[3]),Q=[];for(let h=0;h<Se.length;h+=1)Q[h]=Dt(pt(a,Se,h));return be=new jt({}),{c(){e=n("body"),i=n("header"),i.innerHTML=t,p=k(),s=n("div"),d=n("select"),b=n("option"),b.textContent=$;for(let h=0;h<J.length;h+=1)J[h].c();Z=k(),M=n("select"),L=n("option"),L.textContent=V,_=n("option"),_.textContent=U,z=n("option"),z.textContent=T,O=k(),R=n("div"),B=n("div"),A=n("div"),q=n("input"),E=k(),w=n("button"),w.innerHTML=ne,I=k(),x=n("label"),x.innerHTML=G,re=k(),X=n("input"),j=k(),H=n("div"),Y=n("div"),F=n("label"),F.textContent=we,u=k(),f=n("h3"),f.textContent=N,m=k(),g=n("div"),y=n("table"),te=n("thead"),te.innerHTML=Le,Ze=k(),Ce=n("tbody");for(let h=0;h<K.length;h+=1)K[h].c();Ge=k(),ve=n("table"),xe=n("thead"),xe.innerHTML=lt,Ye=k(),ke=n("tbody");for(let h=0;h<Q.length;h+=1)Q[h].c();Fe=k(),me=n("div"),le=n("div"),ce=n("button"),ce.innerHTML=st,Je=k(),ie=n("button"),ie.innerHTML=at,Ke=k(),ue=n("button"),ue.innerHTML=ot,Qe=k(),de=n("button"),de.innerHTML=nt,We=k(),At(be.$$.fragment),this.h()},l(h){e=r(h,"BODY",{class:!0});var P=C(e);i=r(P,"HEADER",{class:!0,"data-svelte-h":!0}),S(i)!=="svelte-1iv3hc"&&(i.innerHTML=t),p=D(P),s=r(P,"DIV",{class:!0});var c=C(s);d=r(c,"SELECT",{id:!0,class:!0});var se=C(d);b=r(se,"OPTION",{"data-svelte-h":!0}),S(b)!=="svelte-nnppqb"&&(b.textContent=$);for(let oe=0;oe<J.length;oe+=1)J[oe].l(se);se.forEach(v),Z=D(c),M=r(c,"SELECT",{id:!0,class:!0});var Ie=C(M);L=r(Ie,"OPTION",{class:!0,"data-svelte-h":!0}),S(L)!=="svelte-10xyneg"&&(L.textContent=V),_=r(Ie,"OPTION",{class:!0,"data-svelte-h":!0}),S(_)!=="svelte-1gaemxo"&&(_.textContent=U),z=r(Ie,"OPTION",{class:!0,"data-svelte-h":!0}),S(z)!=="svelte-1hgkgxy"&&(z.textContent=T),Ie.forEach(v),c.forEach(v),O=D(P),R=r(P,"DIV",{class:!0});var He=C(R);B=r(He,"DIV",{class:!0});var pe=C(B);A=r(pe,"DIV",{class:!0});var Be=C(A);q=r(Be,"INPUT",{class:!0,placeholder:!0,type:!0,name:!0}),E=D(Be),w=r(Be,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),S(w)!=="svelte-175xkdh"&&(w.innerHTML=ne),Be.forEach(v),I=D(pe),x=r(pe,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),S(x)!=="svelte-ysght"&&(x.innerHTML=G),re=D(pe),X=r(pe,"INPUT",{type:!0,id:!0,class:!0}),j=D(pe),H=r(pe,"DIV",{class:!0});var ct=C(H);Y=r(ct,"DIV",{class:!0});var Oe=C(Y);F=r(Oe,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),S(F)!=="svelte-1ikiiwu"&&(F.textContent=we),u=D(Oe),f=r(Oe,"H3",{class:!0,"data-svelte-h":!0}),S(f)!=="svelte-1x1ikme"&&(f.textContent=N),m=D(Oe),g=r(Oe,"DIV",{class:!0});var it=C(g);y=r(it,"TABLE",{class:!0});var je=C(y);te=r(je,"THEAD",{class:!0,"data-svelte-h":!0}),S(te)!=="svelte-1qptl2e"&&(te.innerHTML=Le),Ze=D(je),Ce=r(je,"TBODY",{});var ut=C(Ce);for(let oe=0;oe<K.length;oe+=1)K[oe].l(ut);ut.forEach(v),je.forEach(v),it.forEach(v),Oe.forEach(v),ct.forEach(v),pe.forEach(v),Ge=D(He),ve=r(He,"TABLE",{class:!0});var Pe=C(ve);xe=r(Pe,"THEAD",{class:!0,"data-svelte-h":!0}),S(xe)!=="svelte-1dkqbxi"&&(xe.innerHTML=lt),Ye=D(Pe),ke=r(Pe,"TBODY",{});var dt=C(ke);for(let oe=0;oe<Q.length;oe+=1)Q[oe].l(dt);dt.forEach(v),Pe.forEach(v),He.forEach(v),Fe=D(P),me=r(P,"DIV",{id:!0,class:!0});var ht=C(me);le=r(ht,"DIV",{class:!0});var _e=C(le);ce=r(_e,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),S(ce)!=="svelte-1mzz2s7"&&(ce.innerHTML=st),Je=D(_e),ie=r(_e,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),S(ie)!=="svelte-1jmo1ga"&&(ie.innerHTML=at),Ke=D(_e),ue=r(_e,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),S(ue)!=="svelte-17b896z"&&(ue.innerHTML=ot),Qe=D(_e),de=r(_e,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),S(de)!=="svelte-jmxo9m"&&(de.innerHTML=nt),_e.forEach(v),ht.forEach(v),We=D(P),Mt(be.$$.fragment,P),P.forEach(v),this.h()},h(){o(i,"class","text-gray-600 body-font svelte-1s7ow3w"),b.disabled=!0,b.selected=!0,b.__value="Select Class",W(b,b.__value),o(d,"id","classSelection"),o(d,"class","select select-bordered font-medium focus:outline-1 w-full rounded-3xl max-w-xs"),a[0]===void 0&&St(()=>a[13].call(d)),L.disabled=!0,L.selected=!0,o(L,"class","rounded-3xl"),L.__value="Sort By",W(L,L.__value),o(_,"class","rounded-xl"),_.__value="Recent",W(_,_.__value),o(z,"class","rounded-xl"),z.__value="Old",W(z,z.__value),o(M,"id","SortRec"),o(M,"class","bg-white w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"),o(s,"class","flex justify-center mt-4 mx-6"),o(q,"class","pl-4 border border-r-0 rounded-l-3xl focus:ring-0 text-sm block bg-white w-60 h-7 border-slate-300 shadow-sm focus:outline-none"),o(q,"placeholder","Add Notes"),o(q,"type","text"),o(q,"name","search12"),o(w,"id","addButton"),o(w,"class","add-button w-12 h-7 border border-slate-300 rounded-r-3xl bg-blue-500 hover:bg-blue-700 border-none transform transition-transform focus:scale-100 active:scale-95"),o(A,"class","flex flex-row items-center mt-2 justify-center"),o(x,"for","NotesArchives"),o(x,"class","mr-8 mt-2 ml-3 rounded-3xl cursor-pointer"),o(X,"type","checkbox"),o(X,"id","NotesArchives"),o(X,"class","modal-toggle"),o(F,"for","NotesArchives"),o(F,"class","btn btn-sm btn-circle absolute right-2 top-2"),o(f,"class","text-xl font-bold text-center"),o(te,"class","text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"),o(y,"class","text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"),o(g,"class","relative overflow-y-auto shadow-sm rounded-xl mx-1 mt-8 h-4/5 max-h-4/5"),o(Y,"class","modal-box relative h-4/6 max-w-3xl text-left"),o(H,"class","modal"),o(B,"class","flex flex-row ml-3 justify-center mb-2"),o(xe,"class","text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"),o(ve,"class","text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"),o(R,"class","mt-5 px-4 items-center text-center h-3/4 overflow-y-auto"),o(ce,"type","button"),o(ce,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),o(ie,"type","button"),o(ie,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),o(ue,"type","button"),o(ue,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),o(de,"type","button"),o(de,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),o(le,"class","grid h-full max-w-lg grid-cols-4 mx-auto font-medium"),o(me,"id","bottomnav"),o(me,"class","fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 svelte-1s7ow3w"),o(e,"class","0 h-screen")},m(h,P){ae(h,e,P),l(e,i),l(e,p),l(e,s),l(s,d),l(d,b);for(let c=0;c<J.length;c+=1)J[c]&&J[c].m(d,null);ft(d,a[0],!0),l(s,Z),l(s,M),l(M,L),l(M,_),l(M,z),l(e,O),l(e,R),l(R,B),l(B,A),l(A,q),W(q,a[2]),l(A,E),l(A,w),l(B,I),l(B,x),l(B,re),l(B,X),l(B,j),l(B,H),l(H,Y),l(Y,F),l(Y,u),l(Y,f),l(Y,m),l(Y,g),l(g,y),l(y,te),l(y,Ze),l(y,Ce);for(let c=0;c<K.length;c+=1)K[c]&&K[c].m(Ce,null);l(R,Ge),l(R,ve),l(ve,xe),l(ve,Ye),l(ve,ke);for(let c=0;c<Q.length;c+=1)Q[c]&&Q[c].m(ke,null);l(e,Fe),l(e,me),l(me,le),l(le,ce),l(le,Je),l(le,ie),l(le,Ke),l(le,ue),l(le,Qe),l(le,de),l(e,We),Lt(be,e,null),Re=!0,Xe||(rt=[ee(d,"change",a[13]),ee(d,"change",a[14]),ee(M,"change",a[15]),ee(q,"input",a[16]),ee(w,"click",a[10]),ee(ce,"click",a[22]),ee(ie,"click",a[23]),ee(ue,"click",a[24]),ee(de,"click",a[25])],Xe=!0)},p(h,P){if(P[0]&2){De=Ee(h[1]);let c;for(c=0;c<De.length;c+=1){const se=xt(h,De,c);J[c]?J[c].p(se,P):(J[c]=mt(se),J[c].c(),J[c].m(d,null))}for(;c<J.length;c+=1)J[c].d(1);J.length=De.length}if(P[0]&3&&ft(d,h[0]),P[0]&4&&q.value!==h[2]&&W(q,h[2]),P[0]&336){Te=Ee(h[4]);let c;for(c=0;c<Te.length;c+=1){const se=_t(h,Te,c);K[c]?K[c].p(se,P):(K[c]=wt(se),K[c].c(),K[c].m(Ce,null))}for(;c<K.length;c+=1)K[c].d(1);K.length=Te.length}if(P[0]&712){Se=Ee(h[3]);let c;for(c=0;c<Se.length;c+=1){const se=pt(h,Se,c);Q[c]?Q[c].p(se,P):(Q[c]=Dt(se),Q[c].c(),Q[c].m(ke,null))}for(;c<Q.length;c+=1)Q[c].d(1);Q.length=Se.length}},i(h){Re||(Rt(be.$$.fragment,h),Re=!0)},o(h){It(be.$$.fragment,h),Re=!1},d(h){h&&v(e),$e(J,h),$e(K,h),$e(Q,h),Ht(be),Xe=!1,tt(rt)}}}function Ft(a,e,i){function t(u){Gt(u)}let p="",s,d=[],b;async function $(u){if(s==="Select Class"){fe.error("Please select a class");return}const f=document.getElementById("selectOption").value,N=he(ge,"Subject",s,"Notes"),m=ze(N,u);console.log(u);try{const g=await ye(m);if(g.exists()){const y=g.ref;await et(y,{Status:f});const Le=(await ye(y)).data();return fe.success("Updated the status of a note"),Le}else return console.log("No such document!"),null}catch(g){throw console.error("Error updating document:",g),g}}async function Z(u){if(s==="Select Class"){fe.error("Please select a class");return}const f=he(ge,"Subject",s,"Notes"),N=ze(f,u);console.log(u);try{const m=await ye(N);if(m.exists()){const g=m.ref;await et(g,{Archive:"true"});const te=(await ye(g)).data();return fe.success("Archived a note"),te}else return console.log("No such document!"),null}catch(m){throw console.error("Error updating document:",m),m}}async function M(u){if(s==="Select Class"){fe.error("Please select a class");return}const f=he(ge,"Subject",s,"Notes"),N=ze(f,u);console.log(u);try{const m=await ye(N);if(m.exists()){const g=m.ref;await et(g,{Archive:"false"});const te=(await ye(g)).data();return fe.success("Unarchived a note"),te}else return console.log("No such document!"),null}catch(m){throw console.error("Error updating document:",m),m}}async function L(u){if(s==="Select Class"){fe.error("Please select a class");return}const f=he(ge,"Subject",s,"Notes"),N=ze(f,u);try{const m=await ye(N);if(m.exists()){const g=m.ref;return await qt(g),console.log("Document successfully deleted!"),m.data()}else return console.log("No such document!"),null}catch(m){throw console.error("Error deleting document:",m),m}}async function V(){const u=he(ge,"Subject"),f=Ve(u,Ue("teacherID","==",p)),N=await gt(f);i(1,d=N.docs.map(m=>({id:m.id,data:m.data()})))}function _(){fetch("https://worldtimeapi.org/api/timezone/Asia/Manila").then(u=>u.json()).then(u=>{var f=new Date(u.datetime),N=f.getFullYear(),m=f.getMonth()+1,g=f.getDate();b=N+"-"+m.toString().padStart(2,"0")+"-"+g.toString().padStart(2,"0"),console.log(b)}).catch(u=>{console.log("Error:",u)})}let U="";function z(){if(s==="Select Class"){fe.error("Please select a class");return}if(U.trim()!==""){const u=he(ge,"Subject",s,"Notes");Zt(u,{Title:U,Date:b,Status:"Only Me",Archive:"false"}).then(f=>{console.log("Document written with ID: ",f.id),fe.success("Note succesfully added")}).catch(f=>{console.error("Error writing document: ",f)}),i(2,U="")}else alert("Please enter a title before adding notes.")}let T=[];function O(u){const f=he(ge,"Subject",s,"Notes"),N=Ve(f,Ue("Archive","==","false"));vt(N,m=>{i(3,T=[]),m.forEach(g=>{const y=g.data();y.id=g.id,T.push(y)}),u==="Recent"&&i(3,T=T.sort((g,y)=>(console.log("Sorting Recent:",new Date(y.Date),new Date(g.Date)),new Date(y.Date)-new Date(g.Date)))),u==="Old"&&i(3,T=T.sort((g,y)=>(console.log("Sorting Old:",new Date(g.Date),new Date(y.Date)),new Date(g.Date)-new Date(y.Date)))),console.log(T)})}let R=[];function B(u){const f=he(ge,"Subject",s,"Notes"),N=Ve(f,Ue("Archive","==","true"));vt(N,m=>{i(4,R=[]),m.forEach(g=>{const y=g.data();y.id=g.id,R.push(y)}),u==="Recent"&&i(4,R=R.sort((g,y)=>(console.log("Sorting Recent:",new Date(y.Date),new Date(g.Date)),new Date(y.Date)-new Date(g.Date)))),u==="Old"&&i(4,R=R.sort((g,y)=>(console.log("Sorting Old:",new Date(g.Date),new Date(y.Date)),new Date(g.Date)-new Date(y.Date)))),console.log(R)})}async function A(){console.log(s),V(),O(0),B(0)}async function q(u){const f=he(ge,"users"),N=Ve(f,Ue("UID","==",u)),m=await gt(N);if(m.docs.length>0){const g=m.docs[0];console.log(g.data().Name),document.getElementById("userName").textContent=g.data().firstName+" "+g.data().lastName}else return"Teacher not found"}Ot(()=>{const u=Pt.subscribe(f=>(p=localStorage.getItem("userId"),console.log(p),q(p),V(),()=>{u()}));zt.subscribe(f=>{typeof localStorage<"u"&&(localStorage.subjectSelected1=f)}),Vt.subscribe(f=>{typeof localStorage<"u"&&(localStorage.timeFrom=f)}),Ut.subscribe(f=>{typeof localStorage<"u"&&(localStorage.timeTo=f)})}),_();function E(){s=Bt(this),i(0,s),i(1,d)}const w=u=>{A()},ne=u=>{O(u.target.value)};function I(){U=this.value,i(2,U)}return[s,d,U,T,R,t,$,Z,M,L,z,O,A,E,w,ne,I,(u,f)=>{$(u.id)},(u,f)=>{M(u.id)},(u,f)=>{$(u.id)},(u,f)=>{Z(u.id)},(u,f)=>{L(u.id)},u=>t("/Attendance"),u=>t("/Points"),u=>t("/Notes"),u=>t("/Actions")]}class Xt extends Et{constructor(e){super(),Nt(this,e,Ft,Yt,Tt,{},null,[-1,-1])}}export{Xt as component};