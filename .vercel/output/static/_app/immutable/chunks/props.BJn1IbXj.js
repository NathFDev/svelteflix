import{ad as x,ae as V,af as $,_ as P,ag as k,aa as h,ah as c,ai as A,v as m,j as F,aj as z,a3 as G,i as Q,Q as J,U as C,O as B,V as U,P as L,E as W,ak as X,R as p,S as ee,D as ae,C as j,F as re,al as te,am as ne,an as fe,ao as ie,m as M,ap as se,aq as ue,e as Y,ar as le,as as ve,at as _e,x as Z,a7 as de,au as ce,Z as oe}from"./runtime.CkbBmVUN.js";import{d as ge}from"./disclose-version.DhBPWEzS.js";function w(f,u=null,y){if(typeof f!="object"||f===null||x in f)return f;const b=G(f);if(b!==V&&b!==$)return f;var i=new Map,l=Q(f),d=P(0);l&&i.set("length",P(f.length));var _;return new Proxy(f,{defineProperty(t,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&k();var r=i.get(e);return r===void 0?(r=P(a.value),i.set(e,r)):h(r,w(a.value,_)),!0},deleteProperty(t,e){var a=i.get(e);if(a===void 0)e in t&&i.set(e,P(c));else{if(l&&typeof e=="string"){var r=i.get("length"),n=Number(e);Number.isInteger(n)&&n<r.v&&h(r,n)}h(a,c),H(d)}return!0},get(t,e,a){var o;if(e===x)return f;var r=i.get(e),n=e in t;if(r===void 0&&(!n||(o=A(t,e))!=null&&o.writable)&&(r=P(w(n?t[e]:c,_)),i.set(e,r)),r!==void 0){var s=m(r);return s===c?void 0:s}return Reflect.get(t,e,a)},getOwnPropertyDescriptor(t,e){var a=Reflect.getOwnPropertyDescriptor(t,e);if(a&&"value"in a){var r=i.get(e);r&&(a.value=m(r))}else if(a===void 0){var n=i.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return a},has(t,e){var s;if(e===x)return!0;var a=i.get(e),r=a!==void 0&&a.v!==c||Reflect.has(t,e);if(a!==void 0||F!==null&&(!r||(s=A(t,e))!=null&&s.writable)){a===void 0&&(a=P(r?w(t[e],_):c),i.set(e,a));var n=m(a);if(n===c)return!1}return r},set(t,e,a,r){var S;var n=i.get(e),s=e in t;if(l&&e==="length")for(var o=a;o<n.v;o+=1){var g=i.get(o+"");g!==void 0?h(g,c):o in t&&(g=P(c),i.set(o+"",g))}n===void 0?(!s||(S=A(t,e))!=null&&S.writable)&&(n=P(void 0),h(n,w(a,_)),i.set(e,n)):(s=n.v!==c,h(n,w(a,_)));var R=Reflect.getOwnPropertyDescriptor(t,e);if(R!=null&&R.set&&R.set.call(r,a),!s){if(l&&typeof e=="string"){var T=i.get("length"),E=Number(e);Number.isInteger(E)&&E>=T.v&&h(T,E+1)}H(d)}return!0},ownKeys(t){m(d);var e=Reflect.ownKeys(t).filter(n=>{var s=i.get(n);return s===void 0||s.v!==c});for(var[a,r]of i)r.v!==c&&!(a in t)&&e.push(a);return e},setPrototypeOf(){z()}})}function H(f,u=1){h(f,f.v+u)}function he(f,u,y,b=null,i=!1){L&&W();var l=f,d=null,_=null,t=null,e=i?X:0;J(()=>{if(t===(t=!!u()))return;let a=!1;if(L){const r=l.data===p;t===r&&(l=ee(),ae(l),j(!1),a=!0)}t?(d?C(d):d=B(()=>y(l)),_&&U(_,()=>{_=null})):(_?C(_):b&&(_=B(()=>b(l))),d&&U(d,()=>{d=null})),a&&j(!0)},e),L&&(l=re)}function K(f){for(var u=F,y=F;u!==null&&!(u.f&(se|ue));)u=u.parent;try{return Y(u),f()}finally{Y(y)}}function me(f,u,y,b){var q;var i=(y&le)!==0,l=(y&ve)!==0,d=(y&_e)!==0,_=(y&ce)!==0,t=!1,e;d?[e,t]=ge(()=>f[u]):e=f[u];var a=(q=A(f,u))==null?void 0:q.set,r=b,n=!0,s=!1,o=()=>(s=!0,n&&(n=!1,_?r=M(b):r=b),r);e===void 0&&b!==void 0&&(a&&l&&te(),e=o(),a&&a(e));var g;if(l)g=()=>{var v=f[u];return v===void 0?o():(n=!0,s=!1,v)};else{var R=K(()=>(i?Z:de)(()=>f[u]));R.f|=ne,g=()=>{var v=m(R);return v!==void 0&&(r=void 0),v===void 0?r:v}}if(!(y&fe))return g;if(a){var T=f.$$legacy;return function(v,I){return arguments.length>0?((!l||!I||T||t)&&a(I?g():v),v):g()}}var E=!1,S=!1,N=oe(e),O=K(()=>Z(()=>{var v=g(),I=m(N);return E?(E=!1,S=!0,I):(S=!1,N.v=v)}));return i||(O.equals=ie),function(v,I){if(arguments.length>0){const D=I?m(O):l&&d?w(v):v;return O.equals(D)||(E=!0,h(N,D),s&&r!==void 0&&(r=D),M(()=>m(O))),v}return m(O)}}export{w as a,he as i,me as p};