import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.u8N5SW7j.js","_app/immutable/chunks/api.CPSkk_H2.js","_app/immutable/chunks/runtime.CkbBmVUN.js","_app/immutable/chunks/disclose-version.DhBPWEzS.js","_app/immutable/chunks/lifecycle.DBvMT_G9.js","_app/immutable/chunks/props.BJn1IbXj.js","_app/immutable/chunks/views.CsD7ccHN.js","_app/immutable/chunks/Carousel.CFhIwPV_.js","_app/immutable/chunks/render.BrEZX-Uy.js","_app/immutable/chunks/events.CVrn4ssY.js","_app/immutable/chunks/attributes.DGkeEIjo.js"];
export const stylesheets = ["_app/immutable/assets/2.CDtvkbf6.css","_app/immutable/assets/Carousel.CCWZ5IBK.css"];
export const fonts = [];
