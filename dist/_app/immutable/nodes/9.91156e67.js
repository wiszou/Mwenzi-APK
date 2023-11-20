import{s as z,n as $,r as A,o as F}from"../chunks/scheduler.1f72109c.js";import{S as H,i as N,g as i,s as U,h as u,j as _,y as C,c as q,f as g,k as s,a as O,x as r,B as k,D as B}from"../chunks/index.b6362bb0.js";import{u as P,e as R,q as G,w as J,c as K,f as Q,g as W}from"../chunks/Toaster.svelte_svelte_type_style_lang.9536831a.js";import{g as X}from"../chunks/navigation.4854b6b4.js";function Y(y){let a,d,t,c,w='<a href="/.."><img src="Mwenzi5.png" class="w-64 max-w-full duration-500 hover:scale-105 hover:-translate-10" alt="..."/></a>',h,p,n,l,o,x="Student ID",v,e,D,f,V="Log In",L,j;return{c(){a=i("div"),d=i("div"),t=i("div"),c=i("div"),c.innerHTML=w,h=U(),p=i("div"),n=i("form"),l=i("div"),o=i("label"),o.textContent=x,v=U(),e=i("input"),D=U(),f=i("button"),f.textContent=V,this.h()},l(m){a=u(m,"DIV",{class:!0});var I=_(a);d=u(I,"DIV",{class:!0});var M=_(d);t=u(M,"DIV",{class:!0});var b=_(t);c=u(b,"DIV",{class:!0,"data-svelte-h":!0}),C(c)!=="svelte-15u4pny"&&(c.innerHTML=w),h=q(b),p=u(b,"DIV",{class:!0});var T=_(p);n=u(T,"FORM",{});var S=_(n);l=u(S,"DIV",{class:!0});var E=_(l);o=u(E,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),C(o)!=="svelte-1na4tmz"&&(o.textContent=x),v=q(E),e=u(E,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),E.forEach(g),D=q(S),f=u(S,"BUTTON",{class:!0,"data-svelte-h":!0}),C(f)!=="svelte-jbwt1q"&&(f.textContent=V),S.forEach(g),T.forEach(g),b.forEach(g),M.forEach(g),I.forEach(g),this.h()},h(){s(c,"class","flex justify-center"),s(o,"for","email"),s(o,"class","block mb-2 text-md font-medium text-gray"),s(e,"type","text"),e.required=!0,s(e,"name","email"),s(e,"id","email"),s(e,"placeholder","Student ID"),s(e,"class","w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-3xl focus:outline-none"),s(l,"class","mb-4"),s(f,"class","w-full px-3 py-3 text-white bg-[#2ea44f] focus:outline-none font-medium rounded-3xl hover:bg-[#1e7d3f] duration-300 hover:scale-105"),s(p,"class","m-7 mx-12"),s(t,"class","max-w-md mx-auto"),s(d,"class","container mx-auto"),s(a,"class","flex items-center justify-center min-h-screen px-5")},m(m,I){O(m,a,I),r(a,d),r(d,t),r(t,c),r(t,h),r(t,p),r(p,n),r(n,l),r(l,o),r(l,v),r(l,e),k(e,y[0]),r(n,D),r(n,f),L||(j=[B(e,"input",y[2]),B(f,"click",y[1])],L=!0)},p(m,[I]){I&1&&e.value!==m[0]&&k(e,m[0])},i:$,o:$,d(m){m&&g(a),L=!1,A(j)}}}function Z(y,a,d){let t="";async function c(){return new Promise(async(h,p)=>{if(t==""){R.error("Student ID is empty");return}R.promise((async()=>{const n=G(K(Q,"users"),J("studentID","==",t)),l=await W(n);let o=!1;try{for(const x of l.docs){o=!0;const v=x.data();if(console.log("Document data:",v),v.userRole==="student"){console.log("User is a student");const e=v.studentRFID;P.set(e);const D=localStorage.getItem("userId");X("../Student-Attendance"),h("Log In Successful");return}else throw console.log("User is not a Student"),new Error("User is not a Student")}if(!o)throw console.log("User not found"),new Error("Login failed")}catch(x){throw console.error("Error during login:",x),new Error("Login failed")}})(),{loading:"Logging In...",success:"Log In Successful",error:n=>n.message})})}F(()=>{P.subscribe(h=>{localStorage.userId=h})});function w(){t=this.value,d(0,t)}return[t,c,w]}class ne extends H{constructor(a){super(),N(this,a,Z,Y,z,{})}}export{ne as component};
