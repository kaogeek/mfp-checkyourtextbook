import { h as getContext, c as create_ssr_component, r as validate_store, t as subscribe, i as escape, v as validate_component } from "../../chunks/index.js";
import "classnames";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                    */const getStores = () => {
  const stores = getContext("__svelte__");
  const readonly_stores = {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
  Object.defineProperties(readonly_stores, {
    preloading: {
      get() {
        console.error("stores.preloading is deprecated; use stores.navigating instead");
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
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.s-QcQDAQA3vV4F{position:absolute;left:1px;right:1px;top:33.333333%;text-align:center\n}h1.s-QcQDAQA3vV4F{margin-bottom:1.25rem;font-size:8rem;line-height:1;--tw-text-opacity:1;color:rgb(82 82 82 / var(--tw-text-opacity))\n}p.s-QcQDAQA3vV4F{margin-bottom:1.25rem;--tw-text-opacity:1;color:rgb(82 82 82 / var(--tw-text-opacity))\n}.s-QcQDAQA3vV4F{}.s-QcQDAQA3vV4F{}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" class="${"s-QcQDAQA3vV4F"}" data-svelte="svelte-hitzeg">`, ""}

<section class="${"s-QcQDAQA3vV4F"}"><h1 class="${"s-QcQDAQA3vV4F"}">${escape($page.status)}</h1>
  <p class="${"s-QcQDAQA3vV4F"}">${escape($page.error.message)}</p>

  ${validate_component(Button, "Button").$$render($$result, { color: "light", href: "/" }, {}, {
    default: () => {
      return `\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01`;
    }
  })}
</section>`;
});
export {
  Error$1 as default
};
