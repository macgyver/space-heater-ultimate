import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html PUBLIC \"-//w3c//dtd html 4.0 transitional//en\">\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"/2021","assets":"/2021"} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/2021/_app/start-66f79830.js",
			css: ["/2021/_app/assets/start-a8cd1609.css"],
			js: ["/2021/_app/start-66f79830.js","/2021/_app/chunks/vendor-3e67615a.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/2021/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: /** @param {Error & {frame?: string}} error */ (error) => {
			if (error.frame) {
				console.error(error.frame);
			}
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("../../src/routes/todos/index.json.ts")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/todos/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("../../src/routes/todos/[uid].json.ts")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	serverFetch: hooks.serverFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte"),"src/routes/todos/index.svelte": () => import("../../src/routes/todos/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/2021/_app/pages/__layout.svelte-7a980d76.js","css":["/2021/_app/assets/pages/__layout.svelte-2febf179.css"],"js":["/2021/_app/pages/__layout.svelte-7a980d76.js","/2021/_app/chunks/vendor-3e67615a.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/2021/_app/error.svelte-1b263411.js","css":[],"js":["/2021/_app/error.svelte-1b263411.js","/2021/_app/chunks/vendor-3e67615a.js"],"styles":null},"src/routes/index.svelte":{"entry":"/2021/_app/pages/index.svelte-33c09bae.js","css":["/2021/_app/assets/pages/index.svelte-b205bf21.css"],"js":["/2021/_app/pages/index.svelte-33c09bae.js","/2021/_app/chunks/vendor-3e67615a.js"],"styles":null},"src/routes/about.svelte":{"entry":"/2021/_app/pages/about.svelte-fa66754f.js","css":["/2021/_app/assets/pages/about.svelte-4db5be0d.css"],"js":["/2021/_app/pages/about.svelte-fa66754f.js","/2021/_app/chunks/vendor-3e67615a.js"],"styles":null},"src/routes/todos/index.svelte":{"entry":"/2021/_app/pages/todos/index.svelte-c9fc8367.js","css":["/2021/_app/assets/pages/todos/index.svelte-05e41044.css"],"js":["/2021/_app/pages/todos/index.svelte-c9fc8367.js","/2021/_app/chunks/vendor-3e67615a.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}