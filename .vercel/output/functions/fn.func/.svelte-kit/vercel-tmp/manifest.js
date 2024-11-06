export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BVuMXoYw.js","app":"_app/immutable/entry/app.aVXxe4f5.js","imports":["_app/immutable/entry/start.BVuMXoYw.js","_app/immutable/chunks/entry.DpurpR2T.js","_app/immutable/chunks/runtime.CkbBmVUN.js","_app/immutable/entry/app.aVXxe4f5.js","_app/immutable/chunks/views.CsD7ccHN.js","_app/immutable/chunks/runtime.CkbBmVUN.js","_app/immutable/chunks/render.BrEZX-Uy.js","_app/immutable/chunks/events.CVrn4ssY.js","_app/immutable/chunks/disclose-version.DhBPWEzS.js","_app/immutable/chunks/props.BJn1IbXj.js","_app/immutable/chunks/index-client.fOzE6rcE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/movies/[view=list]",
				pattern: /^\/movies\/([^/]+?)\/?$/,
				params: [{"name":"view","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/movies/[id]",
				pattern: /^\/movies\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: list } = await import ('../output/server/entries/matchers/list.js')
			return { list };
		},
		server_assets: {}
	}
}
})();
