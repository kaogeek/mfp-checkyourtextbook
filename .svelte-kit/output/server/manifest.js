export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/screen.png","logo/logo-16.png","logo/logo-32.png","logo/logo-64.png","manifest.json","robots.txt"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-a1d8e029.js","imports":["_app/immutable/start-a1d8e029.js","_app/immutable/chunks/vendor-ca41893a.js"],"stylesheets":["_app/immutable/assets/vendor-46863ab8.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "api/content/engagement",
				pattern: /^\/api\/content\/engagement\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/engagement/_server.ts.js')
			},
			{
				id: "api/content/post",
				pattern: /^\/api\/content\/post\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/post/_server.ts.js')
			},
			{
				id: "api/metadata/subject",
				pattern: /^\/api\/metadata\/subject\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/metadata/subject/_server.ts.js')
			},
			{
				id: "api/user/get-user-id",
				pattern: /^\/api\/user\/get-user-id\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/user/get-user-id/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
