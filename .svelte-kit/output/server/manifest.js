export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/screen.png","logo/logo-16.png","logo/logo-32.png","logo/logo-64.png","manifest.json","robots.txt"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-6f0bc589.js","imports":["_app/immutable/start-6f0bc589.js","_app/immutable/chunks/vendor-f9b7228d.js"],"stylesheets":["_app/immutable/assets/vendor-4e21bb54.css"]},
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
				id: "api/content/create-engagement",
				pattern: /^\/api\/content\/create-engagement\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/create-engagement/_server.ts.js')
			},
			{
				id: "api/content/create-post",
				pattern: /^\/api\/content\/create-post\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/create-post/_server.ts.js')
			},
			{
				id: "api/content/get-post",
				pattern: /^\/api\/content\/get-post\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/get-post/_server.ts.js')
			},
			{
				id: "api/content/get-recom-tag",
				pattern: /^\/api\/content\/get-recom-tag\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/content/get-recom-tag/_server.ts.js')
			},
			{
				id: "api/metadata/primary-class",
				pattern: /^\/api\/metadata\/primary-class\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/metadata/primary-class/_server.ts.js')
			},
			{
				id: "api/metadata/secondary-class",
				pattern: /^\/api\/metadata\/secondary-class\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/metadata/secondary-class/_server.ts.js')
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
