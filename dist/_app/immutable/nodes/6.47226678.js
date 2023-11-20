import{s as $t,f as el,r as wt,o as tl}from"../chunks/scheduler.1f72109c.js";import{S as ll,i as sl,g as o,s as C,z as xt,r as al,h as r,j as _,y as E,c as k,A as mt,f as d,u as ol,k as s,B as Q,a as se,x as t,C as Vt,v as rl,D as X,d as nl,t as cl,E as bt,w as il,m as Ve,n as ze,o as Ue,e as lt,F as ul}from"../chunks/index.b6362bb0.js";import{e as Pe,T as dl}from"../chunks/Toaster.44b2d701.js";import{u as hl,s as fl,t as vl,a as gl,c as ge,d as $e,b as Oe,m as yt,e as ce,n as _l,q as et,w as tt,g as zt,p as pl,o as Ut,f as _e}from"../chunks/Toaster.svelte_svelte_type_style_lang.9536831a.js";import{g as xl}from"../chunks/navigation.4854b6b4.js";function qt(c,e,i){const l=c.slice();return l[43]=e[i],l}function Zt(c,e,i){const l=c.slice();return l[43]=e[i],l}function Gt(c,e,i){const l=c.slice();return l[43]=e[i],l}function Ft(c){let e,i=c[43].id+"",l,g,a;return{c(){e=o("option"),l=Ve(i),g=C(),this.h()},l(x){e=r(x,"OPTION",{class:!0});var L=_(e);l=ze(L,i),g=k(L),L.forEach(d),this.h()},h(){s(e,"class","rounded-xl"),e.__value=a=c[43].id,Q(e,e.__value)},m(x,L){se(x,e,L),t(e,l),t(e,g)},p(x,L){L[0]&2&&i!==(i=x[43].id+"")&&Ue(l,i),L[0]&2&&a!==(a=x[43].id)&&(e.__value=a,Q(e,e.__value))},d(x){x&&d(e)}}}function Yt(c){let e,i="Only Me",l,g="Share to Class";return{c(){e=o("option"),e.textContent=i,l=o("option"),l.textContent=g,this.h()},l(a){e=r(a,"OPTION",{"data-svelte-h":!0}),E(e)!=="svelte-18ar71d"&&(e.textContent=i),l=r(a,"OPTION",{"data-svelte-h":!0}),E(l)!=="svelte-13zrw1x"&&(l.textContent=g),this.h()},h(){e.selected=!0,e.__value="Only Me",Q(e,e.__value),l.__value="Current Class",Q(l,l.__value)},m(a,x){se(a,e,x),se(a,l,x)},d(a){a&&(d(e),d(l))}}}function Jt(c){let e,i="Only Me",l,g="Current Class";return{c(){e=o("option"),e.textContent=i,l=o("option"),l.textContent=g,this.h()},l(a){e=r(a,"OPTION",{"data-svelte-h":!0}),E(e)!=="svelte-1ybl6qu"&&(e.textContent=i),l=r(a,"OPTION",{"data-svelte-h":!0}),E(l)!=="svelte-1bsx6ml"&&(l.textContent=g),this.h()},h(){e.__value="Only Me",Q(e,e.__value),l.selected=!0,l.__value="Current Class",Q(l,l.__value)},m(a,x){se(a,e,x),se(a,l,x)},d(a){a&&(d(e),d(l))}}}function Kt(c){let e,i,l,g,a=c[43].Date+"",x,L,P,I=c[43].Title+"",W,$,M,p,R,K,O,D,H="Undo",z,U,ae,w=c[43].Status=="Only Me"&&Yt(),m=c[43].Status=="Current Class"&&Jt();function q(...y){return c[18](c[43],...y)}function B(...y){return c[19](c[43],...y)}return{c(){e=o("tr"),i=o("td"),l=o("h1"),g=o("span"),x=Ve(a),L=o("br"),P=C(),W=Ve(I),$=C(),M=o("td"),p=o("select"),w&&w.c(),R=lt(),m&&m.c(),K=C(),O=o("td"),D=o("button"),D.textContent=H,z=C(),this.h()},l(y){e=r(y,"TR",{class:!0});var A=_(e);i=r(A,"TD",{class:!0});var Z=_(i);l=r(Z,"H1",{class:!0});var oe=_(l);g=r(oe,"SPAN",{class:!0});var S=_(g);x=ze(S,a),S.forEach(d),L=r(oe,"BR",{}),P=k(oe),W=ze(oe,I),oe.forEach(d),Z.forEach(d),$=k(A),M=r(A,"TD",{class:!0});var V=_(M);p=r(V,"SELECT",{id:!0,class:!0});var G=_(p);w&&w.l(G),R=lt(),m&&m.l(G),G.forEach(d),V.forEach(d),K=k(A),O=r(A,"TD",{class:!0});var ee=_(O);D=r(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),E(D)!=="svelte-9hgda5"&&(D.textContent=H),ee.forEach(d),z=k(A),A.forEach(d),this.h()},h(){s(g,"class","text-xs font-normal"),s(l,"class","font-medium text-left text-sm"),s(i,"class","px-2 pb-1 pt-1 w-36"),s(p,"id","selectOption"),s(p,"class","update-status-select border-gray-200 w-28 h-6 mr-1 font-medium text-sm text-center border border-gray focus:none rounded-3xl shadow-sm"),s(M,"class","text-center"),s(D,"class","px-3 bg-yellow-500 border-transparent hover:bg-yellow-600 hover:border-none text-sm text-white rounded-3xl"),s(O,"class","text-center"),s(e,"class","bg-white border-b dark:bg-gray-800 dark:border-gray-700")},m(y,A){se(y,e,A),t(e,i),t(i,l),t(l,g),t(g,x),t(l,L),t(l,P),t(l,W),t(e,$),t(e,M),t(M,p),w&&w.m(p,null),t(p,R),m&&m.m(p,null),t(e,K),t(e,O),t(O,D),t(e,z),U||(ae=[X(p,"change",q),X(D,"click",B)],U=!0)},p(y,A){c=y,A[0]&16&&a!==(a=c[43].Date+"")&&Ue(x,a),A[0]&16&&I!==(I=c[43].Title+"")&&Ue(W,I),c[43].Status=="Only Me"?w||(w=Yt(),w.c(),w.m(p,R)):w&&(w.d(1),w=null),c[43].Status=="Current Class"?m||(m=Jt(),m.c(),m.m(p,null)):m&&(m.d(1),m=null)},d(y){y&&d(e),w&&w.d(),m&&m.d(),U=!1,wt(ae)}}}function Qt(c){let e,i="Only Me",l,g="Share to Class";return{c(){e=o("option"),e.textContent=i,l=o("option"),l.textContent=g,this.h()},l(a){e=r(a,"OPTION",{"data-svelte-h":!0}),E(e)!=="svelte-18ar71d"&&(e.textContent=i),l=r(a,"OPTION",{"data-svelte-h":!0}),E(l)!=="svelte-13zrw1x"&&(l.textContent=g),this.h()},h(){e.selected=!0,e.__value="Only Me",Q(e,e.__value),l.__value="Current Class",Q(l,l.__value)},m(a,x){se(a,e,x),se(a,l,x)},d(a){a&&(d(e),d(l))}}}function Wt(c){let e,i="Only Me",l,g="Current Class";return{c(){e=o("option"),e.textContent=i,l=o("option"),l.textContent=g,this.h()},l(a){e=r(a,"OPTION",{"data-svelte-h":!0}),E(e)!=="svelte-1ybl6qu"&&(e.textContent=i),l=r(a,"OPTION",{"data-svelte-h":!0}),E(l)!=="svelte-19j1oij"&&(l.textContent=g),this.h()},h(){e.__value="Only Me",Q(e,e.__value),l.selected=!0,l.__value="Current Class",Q(l,l.__value)},m(a,x){se(a,e,x),se(a,l,x)},d(a){a&&(d(e),d(l))}}}function Xt(c){let e,i,l,g,a=c[43].Date+"",x,L,P,I=c[43].Title+"",W,$,M,p,R,K,O,D,H='<img src="done.png" class="h-7 transform transition-transform focus:scale-100 active:scale-90" alt="..."/>',z,U,ae='<img src="delete.png" class="h-7 transform transition-transform focus:scale-100 active:scale-90" alt="..."/>',w,m,q,B=c[43].Status=="Only Me"&&Qt(),y=c[43].Status=="Current Class"&&Wt();function A(...S){return c[20](c[43],...S)}function Z(...S){return c[21](c[43],...S)}function oe(...S){return c[22](c[43],...S)}return{c(){e=o("tr"),i=o("td"),l=o("h1"),g=o("span"),x=Ve(a),L=o("br"),P=C(),W=Ve(I),$=C(),M=o("td"),p=o("select"),B&&B.c(),R=lt(),y&&y.c(),K=C(),O=o("td"),D=o("button"),D.innerHTML=H,z=C(),U=o("button"),U.innerHTML=ae,w=C(),this.h()},l(S){e=r(S,"TR",{class:!0});var V=_(e);i=r(V,"TD",{class:!0});var G=_(i);l=r(G,"H1",{class:!0});var ee=_(l);g=r(ee,"SPAN",{class:!0});var Ce=_(g);x=ze(Ce,a),Ce.forEach(d),L=r(ee,"BR",{}),P=k(ee),W=ze(ee,I),ee.forEach(d),G.forEach(d),$=k(V),M=r(V,"TD",{class:!0});var te=_(M);p=r(te,"SELECT",{id:!0,class:!0});var n=_(p);B&&B.l(n),R=lt(),y&&y.l(n),n.forEach(d),te.forEach(d),K=k(V),O=r(V,"TD",{});var h=_(O);D=r(h,"BUTTON",{class:!0,"data-svelte-h":!0}),E(D)!=="svelte-i426fi"&&(D.innerHTML=H),z=k(h),U=r(h,"BUTTON",{class:!0,"data-svelte-h":!0}),E(U)!=="svelte-1rljp09"&&(U.innerHTML=ae),h.forEach(d),w=k(V),V.forEach(d),this.h()},h(){s(g,"class","text-xs font-normal"),s(l,"class","font-medium text-left text-sm"),s(i,"class","px-2 pb-1 pt-1 w-36"),s(p,"id","selectOption"),s(p,"class","update-status-select border-gray-200 w-32 h-6 mr-1 font-medium text-sm text-center border border-gray focus:none rounded-3xl shadow-sm"),s(M,"class","text-right"),s(D,"class","update-status-button pl-1"),s(U,"class","delete-button"),s(e,"class","bg-white border-b dark:bg-gray-800 dark:border-gray-700")},m(S,V){se(S,e,V),t(e,i),t(i,l),t(l,g),t(g,x),t(l,L),t(l,P),t(l,W),t(e,$),t(e,M),t(M,p),B&&B.m(p,null),t(p,R),y&&y.m(p,null),t(e,K),t(e,O),t(O,D),t(O,z),t(O,U),t(e,w),m||(q=[X(p,"change",A),X(D,"click",Z),X(U,"click",oe)],m=!0)},p(S,V){c=S,V[0]&8&&a!==(a=c[43].Date+"")&&Ue(x,a),V[0]&8&&I!==(I=c[43].Title+"")&&Ue(W,I),c[43].Status=="Only Me"?B||(B=Qt(),B.c(),B.m(p,R)):B&&(B.d(1),B=null),c[43].Status=="Current Class"?y||(y=Wt(),y.c(),y.m(p,null)):y&&(y.d(1),y=null)},d(S){S&&d(e),B&&B.d(),y&&y.d(),m=!1,wt(q)}}}function ml(c){let e,i,l,g,a,x='<img src="Mwenzi5.png" class="h-14 pb-2" alt="..."/>',L,P,I,W="Hi, Mwenzi Teacher",$,M,p,R,K,O,D,H,z,U="Log out",ae,w,m,q,B="Select Class",y,A,Z,oe="Sort By",S,V="Recent",G,ee="Old",Ce,te,n,h,T,b,v,N='<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="ml-3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f2f2f2" fill-rule="evenodd" d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"></path></g></svg>',pe,ie,Ct='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier" ble-fi=""><path d="M8.707 6.707a1 1 0 0 0-1.414-1.414L4 8.586 2.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4ZM12 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H12ZM8.707 13.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 16.586l3.293-3.293a1 1 0 0 1 1.414 0ZM12 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H12Z" fill="#currentColor" class="fill-current text-gray-600 hover:text-blue-500"></path></g></svg>',st,Ne,at,Ae,ue,xe,kt="✕",ot,ke,Dt="Note Archives",rt,Me,me,De,Tt='<tr><th scope="col" class="pr-5 pl-3 py-4 text-left">Note</th> <th scope="col" class="px-6 py-4 text-center">Status</th> <th scope="col" class="px-6 py-4 text-right">Action</th></tr>',nt,Le,ct,be,Te,St='<tr><th scope="col" class="pr-5 pl-3 py-4 text-left">Note</th> <th scope="col" class="px-6 py-4 text-center">Status</th> <th scope="col" class="px-6 py-4 text-right">Action</th></tr>',it,Ie,ut,Se,le,de,Et='<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" fill="currentColor" class="bi bi-person-fill-check text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Attendance</span>',dt,he,Ot='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" class="bi bi-award-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 16 16"><path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"></path><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Points</span>',ht,fe,Nt='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" class="bi bi-sticky-fill text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 17 17"><path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"></path></svg> <span class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Notes</span>',ft,ve,At='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" class="bi bi-grid-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 17 17"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Actions</span>',vt,Ee,qe,gt,Mt,Re=Pe(c[1]),F=[];for(let f=0;f<Re.length;f+=1)F[f]=Ft(Gt(c,Re,f));let Be=Pe(c[4]),Y=[];for(let f=0;f<Be.length;f+=1)Y[f]=Kt(Zt(c,Be,f));let He=Pe(c[3]),J=[];for(let f=0;f<He.length;f+=1)J[f]=Xt(qt(c,He,f));return Ee=new dl({}),{c(){e=o("body"),i=o("header"),l=o("div"),g=o("div"),a=o("nav"),a.innerHTML=x,L=C(),P=o("div"),I=o("p"),I.textContent=W,$=C(),M=o("button"),p=xt("svg"),R=xt("path"),K=xt("path"),O=C(),D=o("ul"),H=o("li"),z=o("a"),z.textContent=U,ae=C(),w=o("div"),m=o("select"),q=o("option"),q.textContent=B;for(let f=0;f<F.length;f+=1)F[f].c();y=C(),A=o("select"),Z=o("option"),Z.textContent=oe,S=o("option"),S.textContent=V,G=o("option"),G.textContent=ee,Ce=C(),te=o("div"),n=o("div"),h=o("div"),T=o("input"),b=C(),v=o("button"),v.innerHTML=N,pe=C(),ie=o("label"),ie.innerHTML=Ct,st=C(),Ne=o("input"),at=C(),Ae=o("div"),ue=o("div"),xe=o("label"),xe.textContent=kt,ot=C(),ke=o("h3"),ke.textContent=Dt,rt=C(),Me=o("div"),me=o("table"),De=o("thead"),De.innerHTML=Tt,nt=C(),Le=o("tbody");for(let f=0;f<Y.length;f+=1)Y[f].c();ct=C(),be=o("table"),Te=o("thead"),Te.innerHTML=St,it=C(),Ie=o("tbody");for(let f=0;f<J.length;f+=1)J[f].c();ut=C(),Se=o("div"),le=o("div"),de=o("button"),de.innerHTML=Et,dt=C(),he=o("button"),he.innerHTML=Ot,ht=C(),fe=o("button"),fe.innerHTML=Nt,ft=C(),ve=o("button"),ve.innerHTML=At,vt=C(),al(Ee.$$.fragment),this.h()},l(f){e=r(f,"BODY",{class:!0});var j=_(e);i=r(j,"HEADER",{class:!0});var u=_(i);l=r(u,"DIV",{class:!0});var re=_(l);g=r(re,"DIV",{class:!0});var Ze=_(g);a=r(Ze,"NAV",{class:!0,"data-svelte-h":!0}),E(a)!=="svelte-1njl2ha"&&(a.innerHTML=x),L=k(Ze),P=r(Ze,"DIV",{class:!0});var Ge=_(P);I=r(Ge,"P",{class:!0,id:!0,"data-svelte-h":!0}),E(I)!=="svelte-kjnun9"&&(I.textContent=W),$=k(Ge),M=r(Ge,"BUTTON",{class:!0});var Fe=_(M);p=mt(Fe,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var _t=_(p);R=mt(_t,"path",{d:!0}),_(R).forEach(d),K=mt(_t,"path",{"fill-rule":!0,d:!0}),_(K).forEach(d),_t.forEach(d),O=k(Fe),D=r(Fe,"UL",{tabindex:!0,class:!0});var Lt=_(D);H=r(Lt,"LI",{class:!0});var It=_(H);z=r(It,"A",{class:!0,"data-svelte-h":!0}),E(z)!=="svelte-ajmpfp"&&(z.textContent=U),It.forEach(d),Lt.forEach(d),Fe.forEach(d),Ge.forEach(d),Ze.forEach(d),re.forEach(d),u.forEach(d),ae=k(j),w=r(j,"DIV",{class:!0});var Ye=_(w);m=r(Ye,"SELECT",{id:!0,class:!0});var pt=_(m);q=r(pt,"OPTION",{"data-svelte-h":!0}),E(q)!=="svelte-nnppqb"&&(q.textContent=B);for(let ne=0;ne<F.length;ne+=1)F[ne].l(pt);pt.forEach(d),y=k(Ye),A=r(Ye,"SELECT",{id:!0,class:!0});var Je=_(A);Z=r(Je,"OPTION",{class:!0,"data-svelte-h":!0}),E(Z)!=="svelte-10xyneg"&&(Z.textContent=oe),S=r(Je,"OPTION",{class:!0,"data-svelte-h":!0}),E(S)!=="svelte-1gaemxo"&&(S.textContent=V),G=r(Je,"OPTION",{class:!0,"data-svelte-h":!0}),E(G)!=="svelte-1hgkgxy"&&(G.textContent=ee),Je.forEach(d),Ye.forEach(d),Ce=k(j),te=r(j,"DIV",{class:!0});var Ke=_(te);n=r(Ke,"DIV",{class:!0});var ye=_(n);h=r(ye,"DIV",{class:!0});var Qe=_(h);T=r(Qe,"INPUT",{class:!0,placeholder:!0,type:!0,name:!0}),b=k(Qe),v=r(Qe,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),E(v)!=="svelte-175xkdh"&&(v.innerHTML=N),Qe.forEach(d),pe=k(ye),ie=r(ye,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(ie)!=="svelte-ysght"&&(ie.innerHTML=Ct),st=k(ye),Ne=r(ye,"INPUT",{type:!0,id:!0,class:!0}),at=k(ye),Ae=r(ye,"DIV",{class:!0});var Rt=_(Ae);ue=r(Rt,"DIV",{class:!0});var je=_(ue);xe=r(je,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(xe)!=="svelte-1ikiiwu"&&(xe.textContent=kt),ot=k(je),ke=r(je,"H3",{class:!0,"data-svelte-h":!0}),E(ke)!=="svelte-1x1ikme"&&(ke.textContent=Dt),rt=k(je),Me=r(je,"DIV",{class:!0});var Bt=_(Me);me=r(Bt,"TABLE",{class:!0});var We=_(me);De=r(We,"THEAD",{class:!0,"data-svelte-h":!0}),E(De)!=="svelte-1qptl2e"&&(De.innerHTML=Tt),nt=k(We),Le=r(We,"TBODY",{});var Ht=_(Le);for(let ne=0;ne<Y.length;ne+=1)Y[ne].l(Ht);Ht.forEach(d),We.forEach(d),Bt.forEach(d),je.forEach(d),Rt.forEach(d),ye.forEach(d),ct=k(Ke),be=r(Ke,"TABLE",{class:!0});var Xe=_(be);Te=r(Xe,"THEAD",{class:!0,"data-svelte-h":!0}),E(Te)!=="svelte-1dkqbxi"&&(Te.innerHTML=St),it=k(Xe),Ie=r(Xe,"TBODY",{});var jt=_(Ie);for(let ne=0;ne<J.length;ne+=1)J[ne].l(jt);jt.forEach(d),Xe.forEach(d),Ke.forEach(d),ut=k(j),Se=r(j,"DIV",{id:!0,class:!0});var Pt=_(Se);le=r(Pt,"DIV",{class:!0});var we=_(le);de=r(we,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),E(de)!=="svelte-1mzz2s7"&&(de.innerHTML=Et),dt=k(we),he=r(we,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),E(he)!=="svelte-1jmo1ga"&&(he.innerHTML=Ot),ht=k(we),fe=r(we,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),E(fe)!=="svelte-17b896z"&&(fe.innerHTML=Nt),ft=k(we),ve=r(we,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),E(ve)!=="svelte-jmxo9m"&&(ve.innerHTML=At),we.forEach(d),Pt.forEach(d),vt=k(j),ol(Ee.$$.fragment,j),j.forEach(d),this.h()},h(){s(a,"class","flex"),s(I,"class","font-medium text-md my-auto mr-3"),s(I,"id","userName"),s(R,"d","M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"),s(K,"fill-rule","evenodd"),s(K,"d","M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"),s(p,"xmlns","http://www.w3.org/2000/svg"),s(p,"width","28"),s(p,"height","28"),s(p,"fill","green"),s(p,"class","bi bi-person-circle"),s(p,"viewBox","0 0 16 16"),s(z,"class","py-1 flex justify-center font-medium text-sm"),s(H,"class","rounded-2xl hover:bg-gray-200"),s(D,"tabindex","0"),s(D,"class","text-center rounded-2xl mt-2 dropdown-content shadow bg-base-100 w-24"),s(M,"class","dropdown dropdown-end"),s(P,"class","flex flex-row"),s(g,"class","w-full flex flex-row justify-between"),s(l,"class","mx-6 flex flex-wrap pt-5 flex-col md:flex-row items-center"),s(i,"class","text-gray-600 body-font svelte-1s7ow3w"),q.disabled=!0,q.selected=!0,q.__value="Select Class",Q(q,q.__value),s(m,"id","classSelection"),s(m,"class","select select-bordered font-medium focus:outline-1 w-full rounded-3xl max-w-xs"),c[0]===void 0&&el(()=>c[14].call(m)),Z.disabled=!0,Z.selected=!0,s(Z,"class","rounded-3xl"),Z.__value="Sort By",Q(Z,Z.__value),s(S,"class","rounded-xl"),S.__value="Recent",Q(S,S.__value),s(G,"class","rounded-xl"),G.__value="Old",Q(G,G.__value),s(A,"id","SortRec"),s(A,"class","bg-white w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"),s(w,"class","flex justify-center mt-4 mx-6"),s(T,"class","pl-4 border border-r-0 rounded-l-3xl focus:ring-0 text-sm block bg-white w-60 h-7 border-slate-300 shadow-sm focus:outline-none"),s(T,"placeholder","Add Notes"),s(T,"type","text"),s(T,"name","search12"),s(v,"id","addButton"),s(v,"class","add-button w-12 h-7 border border-slate-300 rounded-r-3xl bg-blue-500 hover:bg-blue-700 border-none transform transition-transform focus:scale-100 active:scale-95"),s(h,"class","flex flex-row items-center mt-2 justify-center"),s(ie,"for","NotesArchives"),s(ie,"class","mr-8 mt-2 ml-3 rounded-3xl cursor-pointer"),s(Ne,"type","checkbox"),s(Ne,"id","NotesArchives"),s(Ne,"class","modal-toggle"),s(xe,"for","NotesArchives"),s(xe,"class","btn btn-sm btn-circle absolute right-2 top-2"),s(ke,"class","text-xl font-bold text-center"),s(De,"class","text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"),s(me,"class","text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"),s(Me,"class","relative overflow-y-auto shadow-sm rounded-xl mx-1 mt-8 h-4/5 max-h-4/5"),s(ue,"class","modal-box relative h-4/6 max-w-3xl text-left"),s(Ae,"class","modal"),s(n,"class","flex flex-row ml-3 justify-center mb-2"),s(Te,"class","text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"),s(be,"class","text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"),s(te,"class","mt-5 px-4 items-center text-center h-3/4 overflow-y-auto"),s(de,"type","button"),s(de,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),s(he,"type","button"),s(he,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),s(fe,"type","button"),s(fe,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),s(ve,"type","button"),s(ve,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),s(le,"class","grid h-full max-w-lg grid-cols-4 mx-auto font-medium"),s(Se,"id","bottomnav"),s(Se,"class","fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 svelte-1s7ow3w"),s(e,"class","0 h-screen")},m(f,j){se(f,e,j),t(e,i),t(i,l),t(l,g),t(g,a),t(g,L),t(g,P),t(P,I),t(P,$),t(P,M),t(M,p),t(p,R),t(p,K),t(M,O),t(M,D),t(D,H),t(H,z),t(e,ae),t(e,w),t(w,m),t(m,q);for(let u=0;u<F.length;u+=1)F[u]&&F[u].m(m,null);Vt(m,c[0],!0),t(w,y),t(w,A),t(A,Z),t(A,S),t(A,G),t(e,Ce),t(e,te),t(te,n),t(n,h),t(h,T),Q(T,c[2]),t(h,b),t(h,v),t(n,pe),t(n,ie),t(n,st),t(n,Ne),t(n,at),t(n,Ae),t(Ae,ue),t(ue,xe),t(ue,ot),t(ue,ke),t(ue,rt),t(ue,Me),t(Me,me),t(me,De),t(me,nt),t(me,Le);for(let u=0;u<Y.length;u+=1)Y[u]&&Y[u].m(Le,null);t(te,ct),t(te,be),t(be,Te),t(be,it),t(be,Ie);for(let u=0;u<J.length;u+=1)J[u]&&J[u].m(Ie,null);t(e,ut),t(e,Se),t(Se,le),t(le,de),t(le,dt),t(le,he),t(le,ht),t(le,fe),t(le,ft),t(le,ve),t(e,vt),rl(Ee,e,null),qe=!0,gt||(Mt=[X(z,"click",c[13]),X(m,"change",c[14]),X(m,"change",c[15]),X(A,"change",c[16]),X(T,"input",c[17]),X(v,"click",c[10]),X(de,"click",c[23]),X(he,"click",c[24]),X(fe,"click",c[25]),X(ve,"click",c[26])],gt=!0)},p(f,j){if(j[0]&2){Re=Pe(f[1]);let u;for(u=0;u<Re.length;u+=1){const re=Gt(f,Re,u);F[u]?F[u].p(re,j):(F[u]=Ft(re),F[u].c(),F[u].m(m,null))}for(;u<F.length;u+=1)F[u].d(1);F.length=Re.length}if(j[0]&3&&Vt(m,f[0]),j[0]&4&&T.value!==f[2]&&Q(T,f[2]),j[0]&336){Be=Pe(f[4]);let u;for(u=0;u<Be.length;u+=1){const re=Zt(f,Be,u);Y[u]?Y[u].p(re,j):(Y[u]=Kt(re),Y[u].c(),Y[u].m(Le,null))}for(;u<Y.length;u+=1)Y[u].d(1);Y.length=Be.length}if(j[0]&712){He=Pe(f[3]);let u;for(u=0;u<He.length;u+=1){const re=qt(f,He,u);J[u]?J[u].p(re,j):(J[u]=Xt(re),J[u].c(),J[u].m(Ie,null))}for(;u<J.length;u+=1)J[u].d(1);J.length=He.length}},i(f){qe||(nl(Ee.$$.fragment,f),qe=!0)},o(f){cl(Ee.$$.fragment,f),qe=!1},d(f){f&&d(e),bt(F,f),bt(Y,f),bt(J,f),il(Ee),gt=!1,wt(Mt)}}}function bl(c,e,i){function l(n){xl(n)}let g="",a,x=[],L;async function P(n){if(a==="Select Class"){ce.error("Please select a class");return}const h=document.getElementById("selectOption").value,T=ge(_e,"Subject",a,"Notes"),b=$e(T,n);console.log(n);try{const v=await Oe(b);if(v.exists()){const N=v.ref;await yt(N,{Status:h});const ie=(await Oe(N)).data();return ce.success("Updated the status of a note"),ie}else return console.log("No such document!"),null}catch(v){throw console.error("Error updating document:",v),v}}async function I(n){if(a==="Select Class"){ce.error("Please select a class");return}const h=ge(_e,"Subject",a,"Notes"),T=$e(h,n);console.log(n);try{const b=await Oe(T);if(b.exists()){const v=b.ref;await yt(v,{Archive:"true"});const pe=(await Oe(v)).data();return ce.success("Archived a note"),pe}else return console.log("No such document!"),null}catch(b){throw console.error("Error updating document:",b),b}}async function W(n){if(a==="Select Class"){ce.error("Please select a class");return}const h=ge(_e,"Subject",a,"Notes"),T=$e(h,n);console.log(n);try{const b=await Oe(T);if(b.exists()){const v=b.ref;await yt(v,{Archive:"false"});const pe=(await Oe(v)).data();return ce.success("Unarchived a note"),pe}else return console.log("No such document!"),null}catch(b){throw console.error("Error updating document:",b),b}}async function $(n){if(a==="Select Class"){ce.error("Please select a class");return}const h=ge(_e,"Subject",a,"Notes"),T=$e(h,n);try{const b=await Oe(T);if(b.exists()){const v=b.ref;await _l(v),console.log("Document successfully deleted!");const N=b.data();return ce.success("Deleted a note"),N}else return console.log("No such document!"),null}catch(b){throw console.error("Error deleting document:",b),b}}async function M(){const n=ge(_e,"Subject"),h=et(n,tt("teacherID","==",g)),T=await zt(h);i(1,x=T.docs.map(b=>({id:b.id,data:b.data()})))}function p(){fetch("https://worldtimeapi.org/api/timezone/Asia/Manila").then(n=>n.json()).then(n=>{var h=new Date(n.datetime),T=h.getFullYear(),b=h.getMonth()+1,v=h.getDate();L=T+"-"+b.toString().padStart(2,"0")+"-"+v.toString().padStart(2,"0"),console.log(L)}).catch(n=>{console.log("Error:",n)})}let R="";function K(){if(a==="Select Class"){ce.error("Please select a class");return}if(R.trim()!==""){const n=ge(_e,"Subject",a,"Notes");pl(n,{Title:R,Date:L,Status:"Only Me",Archive:"false"}).then(h=>{console.log("Document written with ID: ",h.id),ce.success("Note succesfully added")}).catch(h=>{console.error("Error writing document: ",h)}),i(2,R="")}else ce.error("Please enter a title before adding notes.")}let O=[];function D(n){const h=ge(_e,"Subject",a,"Notes"),T=et(h,tt("Archive","==","false"));Ut(T,b=>{i(3,O=[]),b.forEach(v=>{const N=v.data();N.id=v.id,O.push(N)}),n==="Recent"&&i(3,O=O.sort((v,N)=>(console.log("Sorting Recent:",new Date(N.Date),new Date(v.Date)),new Date(N.Date)-new Date(v.Date)))),n==="Old"&&i(3,O=O.sort((v,N)=>(console.log("Sorting Old:",new Date(v.Date),new Date(N.Date)),new Date(v.Date)-new Date(N.Date)))),console.log(O)})}let H=[];function z(n){const h=ge(_e,"Subject",a,"Notes"),T=et(h,tt("Archive","==","true"));Ut(T,b=>{i(4,H=[]),b.forEach(v=>{const N=v.data();N.id=v.id,H.push(N)}),n==="Recent"&&i(4,H=H.sort((v,N)=>(console.log("Sorting Recent:",new Date(N.Date),new Date(v.Date)),new Date(N.Date)-new Date(v.Date)))),n==="Old"&&i(4,H=H.sort((v,N)=>(console.log("Sorting Old:",new Date(v.Date),new Date(N.Date)),new Date(v.Date)-new Date(N.Date)))),console.log(H)})}async function U(){console.log(a),M(),D(0),z(0)}async function ae(n){const h=ge(_e,"users"),T=et(h,tt("UID","==",n)),b=await zt(T);if(b.docs.length>0){const v=b.docs[0];console.log(v.data().Name),document.getElementById("userName").textContent=v.data().firstName+" "+v.data().lastName}else return"Teacher not found"}tl(()=>{const n=hl.subscribe(h=>(g=localStorage.getItem("userId"),console.log(g),ae(g),M(),()=>{n()}));fl.subscribe(h=>{typeof localStorage<"u"&&(localStorage.subjectSelected1=h)}),vl.subscribe(h=>{typeof localStorage<"u"&&(localStorage.timeFrom=h)}),gl.subscribe(h=>{typeof localStorage<"u"&&(localStorage.timeTo=h)})}),p();const w=n=>l("/Teacher-Login");function m(){a=ul(this),i(0,a),i(1,x)}const q=n=>{U()},B=n=>{D(n.target.value)};function y(){R=this.value,i(2,R)}return[a,x,R,O,H,l,P,I,W,$,K,D,U,w,m,q,B,y,(n,h)=>{P(n.id)},(n,h)=>{W(n.id)},(n,h)=>{P(n.id)},(n,h)=>{I(n.id)},(n,h)=>{$(n.id)},n=>l("/Attendance"),n=>l("/Points"),n=>l("/Notes"),n=>l("/Actions")]}class Tl extends ll{constructor(e){super(),sl(this,e,bl,ml,$t,{},null,[-1,-1])}}export{Tl as component};
