export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-53469a87.js","imports":["_app/immutable/start-53469a87.js","_app/immutable/chunks/vendor-6fb4a5ea.js"],"stylesheets":["_app/immutable/assets/vendor-6cbca33d.css"]},
		nodes: [
			() => import('.//nodes/0.js'),
			() => import('.//nodes/1.js'),
			() => import('.//nodes/2.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};