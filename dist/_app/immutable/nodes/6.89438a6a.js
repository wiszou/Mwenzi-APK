import{s as ie,f as de,r as ce,o as ue,i as Qt}from"../chunks/scheduler.542a8b70.js";import{S as he,i as fe,m as ut,g as u,s as w,r as ge,n as ht,h,j as C,y as R,c as k,f as x,u as pe,k as l,z as kt,a as Mt,x as e,B as Xt,v as ve,A as Y,d as me,t as _e,C as te,w as xe,o as wt,D as be}from"../chunks/index.def341b4.js";import{e as At,T as ye,u as we,s as ke,a as Te,b as Ee,c as bt,q as ee,w as Ht,g as It,f as yt,n as qt,t as Et,d as ae,h as le,o as Ce}from"../chunks/Toaster.7ae65ce8.js";import{g as De}from"../chunks/navigation.1913fd84.js";function se(c,o,i){const p=c.slice();return p[31]=o[i],p}function ne(c,o,i){const p=c.slice();return p[34]=o[i],p}function oe(c){let o,i=c[34].id+"",p,L,T;return{c(){o=u("option"),p=ut(i),L=w(),this.h()},l(v){o=h(v,"OPTION",{class:!0});var n=C(o);p=ht(n,i),L=k(n),n.forEach(x),this.h()},h(){l(o,"class","rounded-xl"),o.__value=T=c[34].id,kt(o,o.__value)},m(v,n){Mt(v,o,n),e(o,p),e(o,L)},p(v,n){n[0]&2&&i!==(i=v[34].id+"")&&wt(p,i),n[0]&2&&T!==(T=v[34].id)&&(o.__value=T,kt(o,o.__value))},d(v){v&&x(o)}}}function re(c){let o,i,p=c[31].ranking+"",L,T,v,n=c[31].name+"",D,Z,H,P=c[31].totalPoints+"",S,et,y,V=c[31].day+"",A,G,O,I=c[31].week+"",j,st,q,B,nt,$,a,r,_,s,t;function m(){return c[10](c[31])}function z(){return c[11](c[31])}return{c(){o=u("tr"),i=u("td"),L=ut(p),T=w(),v=u("td"),D=ut(n),Z=w(),H=u("td"),S=ut(P),et=w(),y=u("td"),A=ut(V),G=w(),O=u("td"),j=ut(I),st=w(),q=u("td"),B=u("img"),$=w(),a=u("img"),_=w(),this.h()},l(b){o=h(b,"TR",{class:!0});var f=C(o);i=h(f,"TD",{class:!0});var ot=C(i);L=ht(ot,p),ot.forEach(x),T=k(f),v=h(f,"TD",{class:!0});var ft=C(v);D=ht(ft,n),ft.forEach(x),Z=k(f),H=h(f,"TD",{id:!0,class:!0});var W=C(H);S=ht(W,P),W.forEach(x),et=k(f),y=h(f,"TD",{id:!0,class:!0});var Tt=C(y);A=ht(Tt,V),Tt.forEach(x),G=k(f),O=h(f,"TD",{id:!0,class:!0});var gt=C(O);j=ht(gt,I),gt.forEach(x),st=k(f),q=h(f,"TD",{class:!0});var F=C(q);B=h(F,"IMG",{src:!0,class:!0,alt:!0}),$=k(F),a=h(F,"IMG",{src:!0,class:!0,alt:!0}),F.forEach(x),_=k(f),f.forEach(x),this.h()},h(){l(i,"class","py-4 text-center"),l(v,"class","text-center"),l(H,"id","pointsDisplay1"),l(H,"class","pointsDisplay1 text-center"),l(y,"id","pointsDisplay2"),l(y,"class","pointsDisplay2 text-center"),y.hidden=!0,l(O,"id","pointsDisplay3"),l(O,"class","pointsDisplay3 text-center"),O.hidden=!0,Qt(B.src,nt="minus.png")||l(B,"src",nt),l(B,"class","btn btn-xs px-1 bg-transparent hover:bg-transparent border-none"),l(B,"alt","..."),Qt(a.src,r="add.png")||l(a,"src",r),l(a,"class","btn btn-xs px-1 bg-transparent hover:bg-transparent border-none"),l(a,"alt","..."),l(q,"class","text-center"),l(o,"class","bg-white border-b dark:bg-gray-800 dark:border-gray-700")},m(b,f){Mt(b,o,f),e(o,i),e(i,L),e(o,T),e(o,v),e(v,D),e(o,Z),e(o,H),e(H,S),e(o,et),e(o,y),e(y,A),e(o,G),e(o,O),e(O,j),e(o,st),e(o,q),e(q,B),e(q,$),e(q,a),e(o,_),s||(t=[Y(B,"click",m),Y(a,"click",z)],s=!0)},p(b,f){c=b,f[0]&4&&p!==(p=c[31].ranking+"")&&wt(L,p),f[0]&4&&n!==(n=c[31].name+"")&&wt(D,n),f[0]&4&&P!==(P=c[31].totalPoints+"")&&wt(S,P),f[0]&4&&V!==(V=c[31].day+"")&&wt(A,V),f[0]&4&&I!==(I=c[31].week+"")&&wt(j,I)},d(b){b&&x(o),s=!1,ce(t)}}}function Pe(c){let o,i,p,L='<div class="mx-6 flex flex-wrap pt-5 flex-col md:flex-row items-center"><div class="w-full flex flex-row justify-between"><nav class="flex"><img src="Mwenzi5.png" class="h-14 pb-2" alt="..."/></nav> <div class="flex flex-row"><p class="font-medium text-md my-auto mr-3" id="userName">Hi, Mwenzi Teacher</p> <button class="dropdown dropdown-end"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></svg> <ul tabindex="0" class="text-center rounded-2xl mt-2 dropdown-content shadow bg-base-100 w-24"><li class="rounded-2xl hover:bg-gray-200"><a class="py-1 flex justify-center font-medium text-md">Log out</a></li></ul></button></div></div></div>',T,v,n,D,Z="Select Class",H,P,S,et="Total Points",y,V="Daily",A,G="Weekly",O,I,j,st="Reset Points",q,B,nt,$,a,r,_="✕",s,t,m="Are you sure to reset all points?",z,b,f,ot="Yes",ft,W,Tt="No",gt,F,at,rt,Ut='<tr><th scope="col" class="px-6 py-4 text-center">Rank</th> <th scope="col" class="px-6 py-4 text-center">Student</th> <th scope="col" class="px-6 py-4 text-center">Points</th> <th scope="col" class="px-6 py-4 text-center">Update</th></tr>',Nt,pt,Lt,ct,U,J,Vt='<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" fill="currentColor" class="bi bi-person-fill-check text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Attendance</span>',Bt,K,$t='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" class="bi bi-award-fill text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 16 16"><path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"></path><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path></svg> <span class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Points</span>',Rt,Q,Wt='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" class="bi bi-sticky-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 17 17"><path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Notes</span>',Ot,X,Ft='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" class="bi bi-grid-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" viewBox="0 0 17 17"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg> <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Actions</span>',jt,it,Ct,zt,Yt,vt=At(c[1]),M=[];for(let g=0;g<vt.length;g+=1)M[g]=oe(ne(c,vt,g));let mt=At(c[2]),N=[];for(let g=0;g<mt.length;g+=1)N[g]=re(se(c,mt,g));return it=new ye({}),{c(){o=ut(`POINTS\r
\r
\r
\r
\r
\r
`),i=u("body"),p=u("header"),p.innerHTML=L,T=w(),v=u("div"),n=u("select"),D=u("option"),D.textContent=Z;for(let g=0;g<M.length;g+=1)M[g].c();H=w(),P=u("select"),S=u("option"),S.textContent=et,y=u("option"),y.textContent=V,A=u("option"),A.textContent=G,O=w(),I=u("div"),j=u("label"),j.textContent=st,q=w(),B=u("input"),nt=w(),$=u("div"),a=u("div"),r=u("label"),r.textContent=_,s=w(),t=u("h3"),t.textContent=m,z=w(),b=u("div"),f=u("button"),f.textContent=ot,ft=w(),W=u("label"),W.textContent=Tt,gt=w(),F=u("div"),at=u("table"),rt=u("thead"),rt.innerHTML=Ut,Nt=w(),pt=u("tbody");for(let g=0;g<N.length;g+=1)N[g].c();Lt=w(),ct=u("div"),U=u("div"),J=u("button"),J.innerHTML=Vt,Bt=w(),K=u("button"),K.innerHTML=$t,Rt=w(),Q=u("button"),Q.innerHTML=Wt,Ot=w(),X=u("button"),X.innerHTML=Ft,jt=w(),ge(it.$$.fragment),this.h()},l(g){o=ht(g,`POINTS\r
\r
\r
\r
\r
\r
`),i=h(g,"BODY",{class:!0});var E=C(i);p=h(E,"HEADER",{class:!0,"data-svelte-h":!0}),R(p)!=="svelte-hi5vrn"&&(p.innerHTML=L),T=k(E),v=h(E,"DIV",{class:!0});var d=C(v);n=h(d,"SELECT",{id:!0,class:!0});var tt=C(n);D=h(tt,"OPTION",{"data-svelte-h":!0}),R(D)!=="svelte-nnppqb"&&(D.textContent=Z);for(let dt=0;dt<M.length;dt+=1)M[dt].l(tt);tt.forEach(x),H=k(d),P=h(d,"SELECT",{id:!0,class:!0});var Dt=C(P);S=h(Dt,"OPTION",{class:!0,"data-svelte-h":!0}),R(S)!=="svelte-10rrb4u"&&(S.textContent=et),y=h(Dt,"OPTION",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-1le78di"&&(y.textContent=V),A=h(Dt,"OPTION",{class:!0,"data-svelte-h":!0}),R(A)!=="svelte-1knbarg"&&(A.textContent=G),Dt.forEach(x),d.forEach(x),O=k(E),I=h(E,"DIV",{class:!0});var _t=C(I);j=h(_t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),R(j)!=="svelte-18edy1e"&&(j.textContent=st),q=k(_t),B=h(_t,"INPUT",{type:!0,id:!0,class:!0}),nt=k(_t),$=h(_t,"DIV",{class:!0});var Zt=C($);a=h(Zt,"DIV",{class:!0});var xt=C(a);r=h(xt,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),R(r)!=="svelte-1ersbct"&&(r.textContent=_),s=k(xt),t=h(xt,"H3",{class:!0,"data-svelte-h":!0}),R(t)!=="svelte-1l74v8z"&&(t.textContent=m),z=k(xt),b=h(xt,"DIV",{class:!0});var Pt=C(b);f=h(Pt,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),R(f)!=="svelte-gybtrc"&&(f.textContent=ot),ft=k(Pt),W=h(Pt,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),R(W)!=="svelte-mpxpcw"&&(W.textContent=Tt),Pt.forEach(x),xt.forEach(x),Zt.forEach(x),_t.forEach(x),gt=k(E),F=h(E,"DIV",{class:!0});var Gt=C(F);at=h(Gt,"TABLE",{class:!0});var St=C(at);rt=h(St,"THEAD",{class:!0,"data-svelte-h":!0}),R(rt)!=="svelte-1cz47fg"&&(rt.innerHTML=Ut),Nt=k(St),pt=h(St,"TBODY",{});var Jt=C(pt);for(let dt=0;dt<N.length;dt+=1)N[dt].l(Jt);Jt.forEach(x),St.forEach(x),Gt.forEach(x),Lt=k(E),ct=h(E,"DIV",{id:!0,class:!0});var Kt=C(ct);U=h(Kt,"DIV",{class:!0});var lt=C(U);J=h(lt,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),R(J)!=="svelte-1p8q7iv"&&(J.innerHTML=Vt),Bt=k(lt),K=h(lt,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),R(K)!=="svelte-1s6zy76"&&(K.innerHTML=$t),Rt=k(lt),Q=h(lt,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),R(Q)!=="svelte-1nxhnyv"&&(Q.innerHTML=Wt),Ot=k(lt),X=h(lt,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),R(X)!=="svelte-15uwffe"&&(X.innerHTML=Ft),lt.forEach(x),Kt.forEach(x),jt=k(E),pe(it.$$.fragment,E),E.forEach(x),this.h()},h(){l(p,"class","text-gray-600 body-font view-transition-name: header; svelte-j4wpf5"),D.disabled=!0,D.selected=!0,D.__value="Select Class",kt(D,D.__value),l(n,"id","classSelection"),l(n,"class","select select-bordered font-medium focus:outline-1 w-full rounded-3xl max-w-xs"),c[0]===void 0&&de(()=>c[8].call(n)),S.selected=!0,l(S,"class","rounded-3xl"),S.__value="Total Points",kt(S,S.__value),l(y,"class","rounded-xl"),y.__value="Daily",kt(y,y.__value),l(A,"class","rounded-xl"),A.__value="Weekly",kt(A,A.__value),l(P,"id","SortRec"),l(P,"class","bg-white w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"),l(v,"class","flex justify-center mt-4 mx-6"),l(j,"for","reset"),l(j,"class","bg-red-500 rounded-3xl text-sm text-white w-32 h-7 text-center font-medium pt-1"),l(B,"type","checkbox"),l(B,"id","reset"),l(B,"class","modal-toggle"),l(r,"for","reset"),l(r,"class","btn btn-sm btn-circle absolute right-2 top-2"),l(t,"class","text-lg font-bold text-center mt-4"),l(f,"id","yesButton"),l(f,"class","bg-red-500 rounded-3xl mx-2 w-20 text-white px-4 font-medium"),l(W,"for","reset"),l(W,"class","bg-gray-200 rounded-3xl w-20 text-black font-medium text-center px-4 mx-2"),l(b,"class","mt-6 mb-1 flex justify-center"),l(a,"class","modal-box relative h-36"),l($,"class","modal"),l(I,"class","mt-6 mb-3 flex w-full justify-center"),l(rt,"class","text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"),l(at,"class","text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"),l(F,"class","mt-2 px-4 items-center text-center h-3/4 overflow-y-auto"),l(J,"type","button"),l(J,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),l(K,"type","button"),l(K,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),l(Q,"type","button"),l(Q,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),l(X,"type","button"),l(X,"class","inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"),l(U,"class","grid h-full max-w-lg grid-cols-4 mx-auto font-medium"),l(ct,"id","bottomnav"),l(ct,"class","fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 svelte-j4wpf5"),l(i,"class","h-screen")},m(g,E){Mt(g,o,E),Mt(g,i,E),e(i,p),e(i,T),e(i,v),e(v,n),e(n,D);for(let d=0;d<M.length;d+=1)M[d]&&M[d].m(n,null);Xt(n,c[0],!0),e(v,H),e(v,P),e(P,S),e(P,y),e(P,A),e(i,O),e(i,I),e(I,j),e(I,q),e(I,B),e(I,nt),e(I,$),e($,a),e(a,r),e(a,s),e(a,t),e(a,z),e(a,b),e(b,f),e(b,ft),e(b,W),e(i,gt),e(i,F),e(F,at),e(at,rt),e(at,Nt),e(at,pt);for(let d=0;d<N.length;d+=1)N[d]&&N[d].m(pt,null);e(i,Lt),e(i,ct),e(ct,U),e(U,J),e(U,Bt),e(U,K),e(U,Rt),e(U,Q),e(U,Ot),e(U,X),e(i,jt),ve(it,i,null),Ct=!0,zt||(Yt=[Y(n,"change",c[8]),Y(n,"change",c[9]),Y(P,"change",c[7]),Y(f,"click",c[4]),Y(J,"click",c[12]),Y(K,"click",c[13]),Y(Q,"click",c[14]),Y(X,"click",c[15])],zt=!0)},p(g,E){if(E[0]&2){vt=At(g[1]);let d;for(d=0;d<vt.length;d+=1){const tt=ne(g,vt,d);M[d]?M[d].p(tt,E):(M[d]=oe(tt),M[d].c(),M[d].m(n,null))}for(;d<M.length;d+=1)M[d].d(1);M.length=vt.length}if(E[0]&3&&Xt(n,g[0]),E[0]&36){mt=At(g[2]);let d;for(d=0;d<mt.length;d+=1){const tt=se(g,mt,d);N[d]?N[d].p(tt,E):(N[d]=re(tt),N[d].c(),N[d].m(pt,null))}for(;d<N.length;d+=1)N[d].d(1);N.length=mt.length}},i(g){Ct||(me(it.$$.fragment,g),Ct=!0)},o(g){_e(it.$$.fragment,g),Ct=!1},d(g){g&&(x(o),x(i)),te(M,g),te(N,g),xe(it),zt=!1,ce(Yt)}}}function Se(c,o,i){function p(a){De(a)}let L="",T,v=[],n=[],D;async function Z(){const a=bt(yt,"Subject"),r=ee(a,Ht("teacherID","==",L)),_=await It(r);i(1,v=_.docs.map(s=>({id:s.id,data:s.data()})))}async function H(){if(T==="Select Class"){Et.error("Please select a class");return}try{const a=bt(yt,"Subject",`${T}`,"Recitation");(await It(a)).forEach(async _=>{try{const s=_.ref;await qt(s,{totalPoints:0,day:null,week:null}),Et.success("Points reset successfully.")}catch(s){console.error("Error updating document:",s),Et.error("Error resetting points. Please try again.")}})}catch(a){console.error("Error fetching documents:",a),Et.error("Error fetching recitation documents. Please try again.")}}async function P(){const a=document.getElementById("SortRec").value,r=bt(yt,"Subject",`${T}`,"Recitation");return Ce(r,_=>{i(2,n=[]),_.forEach(s=>{const t=s.data(),m=s.id,z=t.totalPoints,b=t.week||0,f=t.day||0,ot={id:m,totalPoints:z,week:b,day:f};n.push(ot)}),a=="Total Points"?(n.sort((s,t)=>t.totalPoints-s.totalPoints),n.forEach((s,t)=>{s.ranking=t+1}),console.log("Updated recitation array with ranking:",n),console.log("recitation array:",n)):a=="Weekly"?(n.sort((s,t)=>t.week-s.week),n.forEach((s,t)=>{s.ranking=t+1})):a=="Daily"&&(n.sort((s,t)=>t.day-s.day),n.forEach((s,t)=>{s.ranking=t+1})),S()})}async function S(){const a=bt(yt,"users"),r=n.map(s=>s.id);(await It(a,Ht("studentRFID","in",r))).forEach(s=>{const t=s.data().studentRFID,m=s.data().firstName+" "+s.data().lastName,z=n.find(b=>b.id===t);z&&(z.name=m)}),i(2,n)}function et(){fetch("https://worldtimeapi.org/api/timezone/Asia/Manila").then(a=>a.json()).then(a=>{var r=new Date(a.datetime),_=r.getFullYear(),s=r.getMonth()+1,t=r.getDate();D=_+"-"+s.toString().padStart(2,"0")+"-"+t.toString().padStart(2,"0"),console.log(D)}).catch(a=>{console.log("Error:",a)})}async function y(a,r){const _=bt(yt,"Subject",`${T}`,"Recitation");if(a==="minus"){const s=ae(_,r),t=await le(s);if(t.exists()){const m=t.data(),z=m.totalPoints-1,b=m.week-1,f=m.day-1;await qt(s,{totalPoints:z,week:b,day:f}),console.log("Minus button clicked for document ID:",r)}}else if(a==="add"){const s=ae(_,r),t=await le(s);if(t.exists()){const m=t.data(),z=m.totalPoints+1,b=m.week+1,f=m.day+1;await qt(s,{totalPoints:z,week:b,day:f}),console.log("Minus button clicked for document ID:",r)}console.log("Add button clicked for document ID:",r)}Et.success("Updated student points")}async function V(){console.log(T),Z(),P(),G()}async function A(a){const r=bt(yt,"users"),_=ee(r,Ht("UID","==",a)),s=await It(_);if(s.docs.length>0){const t=s.docs[0];console.log(t.data().Name),document.getElementById("userName").textContent=t.data().firstName+" "+t.data().lastName}else return"Teacher not found"}async function G(){console.log("haha");const a=document.getElementById("SortRec").value,r=document.getElementsByClassName("pointsDisplay1"),_=document.getElementsByClassName("pointsDisplay2"),s=document.getElementsByClassName("pointsDisplay3");if(a==="Total Points"){for(let t=0;t<r.length;t++)r[t].hidden=!1;for(let t=0;t<_.length;t++)_[t].hidden=!0;for(let t=0;t<s.length;t++)s[t].hidden=!0;n.sort((t,m)=>m.totalPoints-t.totalPoints),n.forEach((t,m)=>{t.ranking=m+1})}if(a==="Weekly"){for(let t=0;t<r.length;t++)r[t].hidden=!0;for(let t=0;t<_.length;t++)_[t].hidden=!0;for(let t=0;t<s.length;t++)s[t].hidden=!1;n.sort((t,m)=>m.week-t.week),n.forEach((t,m)=>{t.ranking=m+1})}if(a==="Daily"){for(let t=0;t<r.length;t++)r[t].hidden=!0;for(let t=0;t<_.length;t++)_[t].hidden=!1;for(let t=0;t<s.length;t++)s[t].hidden=!0;n.sort((t,m)=>m.day-t.day),n.forEach((t,m)=>{t.ranking=m+1})}P()}ue(()=>{const a=we.subscribe(r=>(L=localStorage.getItem("userId"),console.log(L),A(L),Z(),()=>{a()}));ke.subscribe(r=>{typeof localStorage<"u"&&(localStorage.subjectSelected1=r)}),Te.subscribe(r=>{typeof localStorage<"u"&&(localStorage.timeFrom=r)}),Ee.subscribe(r=>{typeof localStorage<"u"&&(localStorage.timeTo=r)})}),et();function O(){T=be(this),i(0,T),i(1,v)}return[T,v,n,p,H,y,V,G,O,a=>{V()},a=>y("minus",a.id),a=>y("add",a.id),a=>p("/Attendance"),a=>p("/Points"),a=>p("/Notes"),a=>p("/Actions")]}class Le extends he{constructor(o){super(),fe(this,o,Se,Pe,ie,{},null,[-1,-1])}}export{Le as component};