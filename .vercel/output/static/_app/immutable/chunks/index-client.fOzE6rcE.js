import{ab as h,ac as k,m as u,q as _,ad as v,l as i,k as x,i as E}from"./runtime.CkbBmVUN.js";function o(t){throw new Error("lifecycle_outside_component")}function f(t,n){return t===n||(t==null?void 0:t[v])===n}function y(t={},n,c,e){return h(()=>{var r,s;return k(()=>{r=s,s=[],u(()=>{t!==c(...s)&&(n(t,...s),r&&f(c(...r),t)&&n(null,...r))})}),()=>{_(()=>{s&&f(c(...s),t)&&n(null,...s)})}}),t}function b(t){i===null&&o(),i.l!==null?m(i).m.push(t):x(()=>{const n=u(t);if(typeof n=="function")return n})}function d(t,n,{bubbles:c=!1,cancelable:e=!1}={}){return new CustomEvent(t,{detail:n,bubbles:c,cancelable:e})}function q(){const t=i;return t===null&&o(),(n,c,e)=>{var s;const r=(s=t.s.$$events)==null?void 0:s[n];if(r){const l=E(r)?r.slice():[r],a=d(n,c,e);for(const p of l)p.call(t.x,a);return!a.defaultPrevented}return!0}}function m(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{y as b,q as c,b as o};
