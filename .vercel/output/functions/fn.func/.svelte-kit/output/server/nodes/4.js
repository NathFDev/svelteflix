import * as universal from '../entries/pages/movies/_view_list_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movies/_view_list_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/movies/[view=list]/+page.ts";
export const imports = ["_app/immutable/nodes/4.SrXOYl-T.js","_app/immutable/chunks/api.CPSkk_H2.js","_app/immutable/chunks/runtime.CkbBmVUN.js","_app/immutable/chunks/views.CsD7ccHN.js","_app/immutable/chunks/disclose-version.DhBPWEzS.js","_app/immutable/chunks/render.BrEZX-Uy.js","_app/immutable/chunks/events.CVrn4ssY.js","_app/immutable/chunks/lifecycle.DBvMT_G9.js","_app/immutable/chunks/props.BJn1IbXj.js","_app/immutable/chunks/ResultsPage.DTZfN4fA.js","_app/immutable/chunks/attributes.DGkeEIjo.js","_app/immutable/chunks/index-client.fOzE6rcE.js"];
export const stylesheets = ["_app/immutable/assets/4.BOeD1qtK.css","_app/immutable/assets/ResultsPage.DStTpvbq.css"];
export const fonts = [];
