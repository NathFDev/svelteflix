import{a as H,t as w}from"./disclose-version.DhBPWEzS.js";import{p as W,a8 as n,t as d,a as j,a9 as q,s as A,v as t,aa as p,c as z,r as M}from"./runtime.CkbBmVUN.js";import{e as C}from"./events.CVrn4ssY.js";import{p as B,i as F}from"./props.BJn1IbXj.js";import{e as G,i as I,m as J}from"./api.CPSkk_H2.js";import{s as g}from"./attributes.DGkeEIjo.js";import{c as K,o as L,b as D}from"./index-client.fOzE6rcE.js";import{i as N}from"./lifecycle.DBvMT_G9.js";function E(o,s,a,_){var v=o.__styles??(o.__styles={});v[s]!==a&&(v[s]=a,a==null?o.style.removeProperty(s):o.style.setProperty(s,a,""))}var O=w('<a class="svelte-4psko2"><img class="svelte-4psko2"></a>'),Q=w('<a class="svelte-4psko2">next page</a>'),U=w('<div class="viewport svelte-4psko2"><div class="results svelte-4psko2"></div> <!></div>');function at(o,s){W(s,!1);let a=B(s,"movies",8),_=B(s,"next",8);const v=K();let i=n(),u=n(),c,f=4,b=n(0),x=n(a().length),y=n(0),T=n(0);function k(){const e=t(u).firstChild;e.offsetWidth,c=e.offsetHeight,f=4,P()}function P(){t(i).scrollHeight-(t(i).scrollTop+t(i).clientHeight)<400&&v("end"),p(b,Math.floor(t(i).scrollTop/c)*f),p(x,Math.ceil((t(i).scrollTop+t(i).clientHeight)/c)*f),p(y,Math.floor(t(b)/f)*c),p(T,Math.floor((a().length-t(x))/f)*c)}L(k),N();var m=U();C("resize",q,k);var r=z(m);G(r,5,()=>a().slice(t(b),t(x)),I,(e,l)=>{var h=O(),R=z(h);d(()=>g(R,"src",J(t(l).poster_path,500))),M(h),d(()=>{g(h,"href",`/movies/${t(l).id??""}`),g(R,"alt",t(l).title)}),H(e,h)}),M(r),D(r,e=>p(u,e),()=>t(u));var S=A(r,2);F(S,_,e=>{var l=Q();d(()=>g(l,"href",_())),H(e,l)}),M(m),D(m,e=>p(i,e),()=>t(i)),d(()=>{E(r,"padding-top",`${t(y)??""}px`),E(r,"padding-bottom",`${t(T)??""}px`)}),C("scroll",m,P),H(o,m),j()}export{at as R};