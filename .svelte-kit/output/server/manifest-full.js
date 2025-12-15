export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.dLkaGu_v.js",app:"_app/immutable/entry/app.CK9pJk26.js",imports:["_app/immutable/entry/start.dLkaGu_v.js","_app/immutable/chunks/Cbq7K6vO.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/entry/app.CK9pJk26.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/chunks/X7aOcs68.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/mock/comments/[id]",
				pattern: /^\/api\/mock\/comments\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mock/comments/_id_/_server.ts.js'))
			},
			{
				id: "/api/mock/replies/[id]",
				pattern: /^\/api\/mock\/replies\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mock/replies/_id_/_server.ts.js'))
			},
			{
				id: "/api/mock/shorts/[id]",
				pattern: /^\/api\/mock\/shorts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mock/shorts/_id_/_server.ts.js'))
			},
			{
				id: "/api/mock/stream",
				pattern: /^\/api\/mock\/stream\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mock/stream/_server.ts.js'))
			},
			{
				id: "/api/mock/users/[id]",
				pattern: /^\/api\/mock\/users\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mock/users/_id_/_server.ts.js'))
			},
			{
				id: "/api/mock/videos/[id]",
				pattern: /^\/api\/mock\/videos\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mock/videos/_id_/_server.ts.js'))
			},
			{
				id: "/api/mock/video/[id]",
				pattern: /^\/api\/mock\/video\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mock/video/_id_/_server.ts.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
