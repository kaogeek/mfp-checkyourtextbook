import { g as getContext, c as create_ssr_component, p as subscribe, e as escape, v as validate_component } from '../../chunks/index.js';
import 'classnames';
import { B as Button } from '../../chunks/Button.js';
/* empty css                                                    */
/**
 * @type {import('$app/stores').getStores}
 */
const getStores = () => {
	const stores = getContext('__svelte__');

	const readonly_stores = {
		page: {
			subscribe: stores.page.subscribe
		},
		navigating: {
			subscribe: stores.navigating.subscribe
		},
		updated: stores.updated
	};

	// TODO remove this for 1.0
	Object.defineProperties(readonly_stores, {
		preloading: {
			get() {
				console.error('stores.preloading is deprecated; use stores.navigating instead');
				return {
					subscribe: stores.navigating.subscribe
				};
			},
			enumerable: false
		},
		session: {
			get() {
				removed_session();
				return {};
			},
			enumerable: false
		}
	});

	return readonly_stores;
};

/** @type {typeof import('$app/stores').page} */
const page = {
	/** @param {(value: any) => void} fn */
	subscribe(fn) {
		const store = getStores().page;
		return store.subscribe(fn);
	}
};

function removed_session() {
	// TODO remove for 1.0
	throw new Error(
		'stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883'
	);
}

const _error_svelte_svelte_type_style_lang = '';

/* src/routes/+error.svelte generated by Svelte v3.50.1 */

const css = {
	code: "section.svelte-1r1ofos{position:absolute;left:1px;right:1px;top:33.333333%;text-align:center\n}h1.svelte-1r1ofos{margin-bottom:1.25rem;font-size:8rem;line-height:1\n}p.svelte-1r1ofos{margin-bottom:1.25rem\n}",
	map: null
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, value => $page = value);
	$$result.css.add(css);
	$$unsubscribe_page();

	return `${($$result.head += `${($$result.title = `<title>เกิดข้อผิดพลาด</title>`, "")}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-hitzeg">`, "")}

<section class="${"svelte-1r1ofos"}"><h1 class="${"svelte-1r1ofos"}">${escape($page.status)}</h1>
  <p class="${"svelte-1r1ofos"}">${escape($page?.error?.message)}</p>

  ${validate_component(Button, "Button").$$render($$result, { color: "light", href: "/" }, {}, {
		default: () => {
			return `กลับสู่หน้าหลัก`;
		}
	})}
</section>`;
});

export { Error$1 as default };