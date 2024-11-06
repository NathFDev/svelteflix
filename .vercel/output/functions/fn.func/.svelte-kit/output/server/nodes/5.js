import * as universal from '../entries/pages/search/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.ts";
export const imports = ["_app/immutable/nodes/5.eF47XM6W.js","_app/immutable/chunks/api.CPSkk_H2.js","_app/immutable/chunks/runtime.CkbBmVUN.js","_app/immutable/chunks/disclose-version.DhBPWEzS.js","_app/immutable/chunks/props.BJn1IbXj.js","_app/immutable/chunks/attributes.DGkeEIjo.js","_app/immutable/chunks/lifecycle.DBvMT_G9.js","_app/immutable/chunks/ResultsPage.DTZfN4fA.js","_app/immutable/chunks/events.CVrn4ssY.js","_app/immutable/chunks/index-client.fOzE6rcE.js"];
export const stylesheets = ["_app/immutable/assets/5.5xETrnET.css","_app/immutable/assets/ResultsPage.DStTpvbq.css"];
export const fonts = [];
