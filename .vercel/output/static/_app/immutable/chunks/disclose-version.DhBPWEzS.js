import{z as _,N as d,ax as p,ay as g,P as c,F as u,D as E,j as b,E as y,az as l,m as h,b as T,Z as w,v as N,aa as x}from"./runtime.CkbBmVUN.js";function M(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function a(e,n){var r=b;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function C(e,n){var r=(n&p)!==0,t=(n&g)!==0,s,o=!e.startsWith("<!>");return()=>{if(c)return a(u,null),u;s===void 0&&(s=M(o?e:"<!>"+e),r||(s=_(s)));var i=t?document.importNode(s,!0):s.cloneNode(!0);if(r){var v=_(i),m=i.lastChild;a(v,m)}else a(i,i);return i}}function D(e=""){if(!c){var n=d(e+"");return a(n,n),n}var r=u;return r.nodeType!==3&&(r.before(r=d()),E(r)),a(r,r),r}function F(){if(c)return a(u,null),u;var e=document.createDocumentFragment(),n=document.createComment(""),r=d();return e.append(n,r),a(n,r),e}function I(e,n){if(c){b.nodes_end=u,y();return}e!==null&&e.before(n)}function P(e,n,r){if(e==null)return n(void 0),l;const t=h(()=>e.subscribe(n,r));return t.unsubscribe?()=>t.unsubscribe():t}let f=!1;function O(e,n,r){const t=r[n]??(r[n]={store:null,source:w(void 0),unsubscribe:l});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=l;else{var s=!0;t.unsubscribe=P(e,o=>{s?t.source.v=o:x(t.source,o)}),s=!1}return N(t.source)}function R(){const e={};return T(()=>{for(var n in e)e[n].unsubscribe()}),e}function S(e){var n=f;try{return f=!1,[e(),f]}finally{f=n}}const L="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(L);export{I as a,O as b,a as c,S as d,F as e,D as f,R as s,C as t};