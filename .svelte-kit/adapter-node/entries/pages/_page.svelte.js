import { c as create_ssr_component, v as validate_component, g as add_attribute, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, i as escape, l as validate_dynamic_element, o as validate_void_dynamic_element, p as is_void, j as each, q as createEventDispatcher, s as setContext, u as onDestroy, w as tick, h as getContext } from "../../chunks/index.js";
import classNames from "classnames";
/* empty css                                                    */import { F as Frame, I as Iconinput, M as Modal, B as Badge, P, S as Swiper } from "../../chunks/core.js";
import { getDocument } from "ssr-window";
import { $ } from "dom7";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
    xl: "p-8"
  };
  const sizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPdding;
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPdding = paddings[padding];
  cardClass = classNames(
    "flex",
    sizes[size],
    reverse ? "flex-col-reverse" : "flex-col",
    horizontal && (reverse ? "md:flex-row-reverse md:max-w-xl" : "md:flex-row md:max-w-xl"),
    href && "hover:bg-gray-100 dark:hover:bg-gray-700",
    !img && innerPdding,
    $$props.class
  );
  imgClass = classNames(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-r-lg" : "md:rounded-l-lg"));
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: href ? "a" : "div",
      rounded: true,
      shadow: true,
      border: true,
      href,
      class: cardClass
    },
    {},
    {
      default: () => {
        return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt="${""}">
		<div${add_attribute("class", innerPdding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
      }
    }
  )}`;
});
const TabHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tabStyle } = $$props;
  let { tabId } = $$props;
  let { customDivClass = "" } = $$props;
  let { customUlClass = "" } = $$props;
  const divClasses = {
    default: "mb-4 border-b border-gray-200 dark:border-gray-700",
    full: "mb-4",
    icon: "mb-4 border-b border-gray-200 dark:border-gray-700",
    pill: "mb-4 ",
    underline: "mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700",
    custom: customDivClass
  };
  const ulClasses = {
    default: "flex flex-wrap -mb-px",
    full: "hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mb-1",
    icon: "flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400",
    pill: "flex flex-wrap",
    underline: "flex flex-wrap -mb-px",
    custom: customUlClass
  };
  if ($$props.tabStyle === void 0 && $$bindings.tabStyle && tabStyle !== void 0)
    $$bindings.tabStyle(tabStyle);
  if ($$props.tabId === void 0 && $$bindings.tabId && tabId !== void 0)
    $$bindings.tabId(tabId);
  if ($$props.customDivClass === void 0 && $$bindings.customDivClass && customDivClass !== void 0)
    $$bindings.customDivClass(customDivClass);
  if ($$props.customUlClass === void 0 && $$bindings.customUlClass && customUlClass !== void 0)
    $$bindings.customUlClass(customUlClass);
  return `<div${add_attribute("class", divClasses[tabStyle], 0)}><ul${add_attribute("class", ulClasses[tabStyle], 0)}${add_attribute("id", tabId, 0)} role="${"tablist"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const TabHeadItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "id",
    "tabStyle",
    "activeTabValue",
    "customActiveClass",
    "customInActiveClass",
    "customLiClass"
  ]);
  let { id } = $$props;
  let { tabStyle } = $$props;
  let { activeTabValue } = $$props;
  let { customActiveClass = "" } = $$props;
  let { customInActiveClass = "" } = $$props;
  let { customLiClass = "" } = $$props;
  const activeClasses = {
    default: "inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
    full: "inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white",
    icon: "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group",
    pill: "active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg",
    underline: "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
    custom: customActiveClass
  };
  const inactiveClasses = {
    default: "inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    full: "inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    icon: "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ",
    pill: "inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
    custom: customInActiveClass
  };
  const liClasses = {
    default: "mr-2",
    full: "w-full",
    icon: "mr-2",
    pill: "mr-2",
    underline: "mr-2",
    custom: customLiClass
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.tabStyle === void 0 && $$bindings.tabStyle && tabStyle !== void 0)
    $$bindings.tabStyle(tabStyle);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0)
    $$bindings.activeTabValue(activeTabValue);
  if ($$props.customActiveClass === void 0 && $$bindings.customActiveClass && customActiveClass !== void 0)
    $$bindings.customActiveClass(customActiveClass);
  if ($$props.customInActiveClass === void 0 && $$bindings.customInActiveClass && customInActiveClass !== void 0)
    $$bindings.customInActiveClass(customInActiveClass);
  if ($$props.customLiClass === void 0 && $$bindings.customLiClass && customLiClass !== void 0)
    $$bindings.customLiClass(customLiClass);
  return `<li${add_attribute("class", liClasses[tabStyle], 0)} role="${"presentation"}"><button${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(activeTabValue === id ? activeClasses[tabStyle] : inactiveClasses[tabStyle]))
      },
      { id: escape(id, true) + "-tabhead" },
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button></li>`;
});
const TabWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "w-full" } = $$props;
  let { tabStyle = "default" } = $$props;
  let tabId;
  let { activeTabValue } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.tabStyle === void 0 && $$bindings.tabStyle && tabStyle !== void 0)
    $$bindings.tabStyle(tabStyle);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0)
    $$bindings.activeTabValue(activeTabValue);
  return `<div${add_attribute("class", classNames(divClass, $$props.class), 0)}>${slots.default ? slots.default({ tabStyle, tabId, activeTabValue }) : ``}</div>`;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "color", "aClass"]);
  let { href = "#" } = $$props;
  let { color = "text-blue-600 dark:text-blue-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "customSize"]);
  let { tag = "h1" } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  return `${((tag$1) => {
    validate_dynamic_element(tag$1);
    return tag$1 ? (() => {
      validate_void_dynamic_element(tag$1);
      return `<${tag}${spread(
        [
          escape_object($$restProps),
          {
            class: escape_attribute_value(classNames(customSize ? customSize : textSizes[tag], color, "w-full", $$props.class))
          }
        ],
        {}
      )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}`;
    })() : "";
  })(tag)}`;
});
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "caption",
    "src",
    "srcset",
    "size",
    "alignment",
    "imgClass",
    "figClass",
    "alt",
    "effect",
    "captionClass"
  ]);
  let { caption = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { srcset = void 0 } = $$props;
  let { size = "max-w-full" } = $$props;
  let { alignment = "" } = $$props;
  let { imgClass = "h-auto" } = $$props;
  let { figClass = "max-w-lg" } = $$props;
  let { alt = "" } = $$props;
  let { effect = "" } = $$props;
  let { captionClass = "mt-2 text-sm text-center text-gray-500 dark:text-gray-400" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.figClass === void 0 && $$bindings.figClass && figClass !== void 0)
    $$bindings.figClass(figClass);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.effect === void 0 && $$bindings.effect && effect !== void 0)
    $$bindings.effect(effect);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  return `${caption ? `<figure${add_attribute("class", figClass, 0)}><img${add_attribute("class", classNames(imgClass, size, alignment, effect, $$props.class), 0)}${add_attribute("src", src, 0)}${add_attribute("srcset", srcset, 0)}${add_attribute("alt", alt, 0)}>
    <figcaption${add_attribute("class", captionClass, 0)}><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></figcaption></figure>` : `<img${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(imgClass, size, alignment, effect, $$props.class))
      },
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`}`;
});
const css$3 = {
  code: "div.bg-searcher.s-54JR_X_9pYjX{background-image:url('https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;height:320px}.s-54JR_X_9pYjX{}.s-54JR_X_9pYjX{}",
  map: null
};
const Searcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"bg-searcher bg-center bg-no-repeat rounded-lg flex flex-col justify-center self-center s-54JR_X_9pYjX"}"><div class="${"px-5 sm:px-28 md:px-42 lg:px-72 text-center s-54JR_X_9pYjX"}"><h1 class="${"text-white text-2xl mb-5 s-54JR_X_9pYjX"}">\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E49\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E44\u0E17\u0E22 \u0E22\u0E31\u0E07\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19</h1>
  <div class="${"relative s-54JR_X_9pYjX"}">${validate_component(Iconinput, "Iconinput").$$render(
    $$result,
    {
      noBorder: true,
      placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E49\u0E07\u0E46 \u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E44\u0E17\u0E22",
      class: "p-4 h-14"
    },
    {},
    {
      default: () => {
        return `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400 s-54JR_X_9pYjX"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}" class="${"s-54JR_X_9pYjX"}"></path></svg>`;
      }
    }
  )}</div></div>
</div>`;
});
const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssClass;
  let $$restProps = compute_rest_props($$props, ["placeholder", "src", "alt", "options"]);
  let { placeholder } = $$props;
  let { src } = $$props;
  let { alt } = $$props;
  let { options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
  } } = $$props;
  let imgElement;
  let path;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  path = placeholder;
  cssClass = $$props.class || "";
  return `<img${spread(
    [
      { src: escape_attribute_value(path) },
      { alt: escape_attribute_value(alt) },
      escape_object($$restProps),
      {
        class: "svelte-lazy-image " + escape(cssClass, true)
      }
    ],
    {
      classes: ""
    }
  )}${add_attribute("this", imgElement, 0)}>`;
});
const css$2 = {
  code: ".s--4EeD7J7sqEx:where(div.masonry){display:flex;justify-content:center;overflow-wrap:anywhere;box-sizing:border-box}.s--4EeD7J7sqEx:where(div.masonry div.col){display:grid;height:-webkit-max-content;height:-moz-max-content;height:max-content;width:100%}.s--4EeD7J7sqEx{}.s--4EeD7J7sqEx{}",
  map: null
};
const Masonry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nCols;
  let itemsToCols;
  let { items } = $$props;
  let { minColWidth = 330 } = $$props;
  let { maxColWidth = 500 } = $$props;
  let { gap = 20 } = $$props;
  let { masonryWidth = 0 } = $$props;
  let { masonryHeight = 0 } = $$props;
  let { animate = true } = $$props;
  let { style = `` } = $$props;
  let { duration = 200 } = $$props;
  let { columnClass = `` } = $$props;
  let { idKey = `id` } = $$props;
  let { getId = (item) => {
    if (typeof item === `string`)
      return item;
    if (typeof item === `number`)
      return item;
    return item[idKey];
  } } = $$props;
  let { class: className = `` } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.minColWidth === void 0 && $$bindings.minColWidth && minColWidth !== void 0)
    $$bindings.minColWidth(minColWidth);
  if ($$props.maxColWidth === void 0 && $$bindings.maxColWidth && maxColWidth !== void 0)
    $$bindings.maxColWidth(maxColWidth);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.masonryWidth === void 0 && $$bindings.masonryWidth && masonryWidth !== void 0)
    $$bindings.masonryWidth(masonryWidth);
  if ($$props.masonryHeight === void 0 && $$bindings.masonryHeight && masonryHeight !== void 0)
    $$bindings.masonryHeight(masonryHeight);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.columnClass === void 0 && $$bindings.columnClass && columnClass !== void 0)
    $$bindings.columnClass(columnClass);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css$2);
  nCols = Math.min(items.length, Math.floor(masonryWidth / (minColWidth + gap)) || 1);
  itemsToCols = items.reduce(
    (cols, item, idx) => {
      cols[idx % cols.length].push([item, idx]);
      return cols;
    },
    Array(nCols).fill(null).map(() => [])
  );
  return `<div class="${"masonry " + escape(className, true) + " s--4EeD7J7sqEx"}" style="${"gap: " + escape(gap, true) + "px; " + escape(style, true)}">${each(itemsToCols, (col) => {
    return `<div class="${"col " + escape(columnClass, true) + " s--4EeD7J7sqEx"}" style="${"gap: " + escape(gap, true) + "px; max-width: " + escape(maxColWidth, true) + "px;"}">${animate ? `${each(col, ([item, idx]) => {
      return `<div class="${"s--4EeD7J7sqEx"}">${slots.default ? slots.default({ idx, item }) : ``}
          </div>`;
    })}` : `${each(col, ([item, idx]) => {
      return `${slots.default ? slots.default({ idx, item }) : ``}`;
    })}`}
    </div>`;
  })}</div>`;
});
const ModalDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpenModal = false } = $$props;
  if ($$props.isOpenModal === void 0 && $$bindings.isOpenModal && isOpenModal !== void 0)
    $$bindings.isOpenModal(isOpenModal);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xl",
        autoclose: true,
        open: isOpenModal
      },
      {
        open: ($$value) => {
          isOpenModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"text-left"}">${validate_component(Badge, "Badge").$$render(
            $$result,
            {
              baseClass: "m-0 mx-1 rounded-full text-xs",
              large: true,
              color: "pink"
            },
            {},
            {
              default: () => {
                return `\u0E1A\u0E49\u0E07\u0E1B\u0E23\u0E30\u0E16\u0E21`;
              }
            }
          )}
    ${validate_component(Badge, "Badge").$$render(
            $$result,
            {
              baseClass: "m-0 mx-1 rounded-full text-xs",
              large: true,
              color: "pink"
            },
            {},
            {
              default: () => {
                return `\u0E42\u0E23\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E04\u0E38\u0E23\u0E38\u0E2A\u0E20\u0E32`;
              }
            }
          )}</div>

  <div class="${"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2"}"><div class="${"text-left"}">${validate_component(Img, "Img").$$render(
            $$result,
            {
              src: "https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg",
              class: "rounded-lg mb-2",
              alt: "eiei"
            },
            {},
            {}
          )}
      ${validate_component(Heading, "Heading").$$render($$result, { customSize: "", tag: "h4", class: "mb-2" }, {}, {
            default: () => {
              return `\u0E44\u0E2B\u0E19\u0E46 \u0E43\u0E04\u0E23\u0E27\u0E48\u0E32\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E40\u0E02\u0E35\u0E22\u0E19\u0E1C\u0E34\u0E14\u0E1A\u0E49\u0E32\u0E07 \u0E16\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E22\u0E38\u0E17\u0E18\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E01\u0E25\u0E49\u0E32\u0E2B\u0E32\u0E0D \u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27 \u0E09\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E19
        \u0E40\u0E23\u0E32\u0E19\u0E48\u0E32\u0E08\u0E30\u0E21\u0E35\u0E19\u0E34\u0E04\u0E21\u0E1A\u0E19\u0E14\u0E32\u0E27\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27\u0E27\u0E48\u0E32\u0E21\u0E31\u0E49\u0E22
      `;
            }
          })}
      <div class="${"mb-2"}">${validate_component(P, "P").$$render(
            $$result,
            {
              class: "mb-3",
              align: "left",
              size: "sm",
              space: "normal",
              weight: "light",
              opacity: 1
            },
            {},
            {
              default: () => {
                return `\u0E42\u0E14\u0E22\xA0${validate_component(A, "A").$$render($$result, { size: "xs" }, {}, {
                  default: () => {
                    return `eiei`;
                  }
                })}`;
              }
            }
          )}</div>
      ${validate_component(P, "P").$$render(
            $$result,
            {
              class: "mb-3",
              color: "text-gray-500",
              align: "left",
              size: "sm",
              space: "normal",
              weight: "light",
              opacity: 1
            },
            {},
            {
              default: () => {
                return `\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E32\u0E15\u0E34\u0E41\u0E25\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E23\u0E32\u0E0A\u0E32 \u0E21\u0E27\u0E25\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E21\u0E32\u0E1E\u0E49\u0E19\u0E20\u0E31\u0E22 \u0E02\u0E2D\u0E14\u0E39\u0E41\u0E25\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E14\u0E49\u0E27\u0E22\u0E43\u0E08
        \u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E04\u0E33\u0E2A\u0E31\u0E0D\u0E0D\u0E32 \u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E0A\u0E32\u0E15\u0E34\u0E40\u0E1C\u0E0A\u0E34\u0E0D\u0E1E\u0E32\u0E25\u0E20\u0E31\u0E22 \u0E44\u0E1F\u0E25\u0E38\u0E01\u0E42\u0E0A\u0E19\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E17\u0E38\u0E01\u0E04\u0E23\u0E32
        \u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E14\u0E34\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32 \u0E44\u0E21\u0E48\u0E2D\u0E32\u0E08\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E22\u0E44\u0E1B \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E31\u0E01\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32 \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E40\u0E27\u0E25\u0E32\u0E40\u0E17\u0E48\u0E32\u0E44\u0E23
      `;
              }
            }
          )}</div>
    <div class="${"p-3 pr-0 text-left"}">${validate_component(Heading, "Heading").$$render($$result, { class: "mb-3", customSize: "", tag: "h6" }, {}, {
            default: () => {
              return `\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`;
            }
          })}
      ${validate_component(Card, "Card").$$render(
            $$result,
            {
              size: "xl",
              padding: "sm",
              class: "rounded-lg"
            },
            {},
            {
              default: () => {
                return `<div class="${"flex align-center"}">${validate_component(Img, "Img").$$render(
                  $$result,
                  {
                    src: "https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg",
                    class: "rounded-lg w-10 mx-2",
                    alt: "eiei"
                  },
                  {},
                  {}
                )}
          ${validate_component(Heading, "Heading").$$render($$result, { customSize: "12" }, {}, {
                  default: () => {
                    return `\u0E28\u0E34\u0E27\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C`;
                  }
                })}</div>
        ${validate_component(P, "P").$$render(
                  $$result,
                  {
                    class: "mt-3",
                    color: "text-gray-500",
                    align: "left",
                    size: "sm",
                    space: "normal",
                    weight: "light",
                    opacity: 1
                  },
                  {},
                  {
                    default: () => {
                      return `\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E32\u0E15\u0E34\u0E41\u0E25\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E23\u0E32\u0E0A\u0E32 \u0E21\u0E27\u0E25\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E21\u0E32\u0E1E\u0E49\u0E19\u0E20\u0E31\u0E22 \u0E02\u0E2D\u0E14\u0E39\u0E41\u0E25\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E14\u0E49\u0E27\u0E22\u0E43\u0E08
          \u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E04\u0E33\u0E2A\u0E31\u0E0D\u0E0D\u0E32 \u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E0A\u0E32\u0E15\u0E34\u0E40\u0E1C\u0E0A\u0E34\u0E0D\u0E1E\u0E32\u0E25\u0E20\u0E31\u0E22 \u0E44\u0E1F\u0E25\u0E38\u0E01\u0E42\u0E0A\u0E19\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E17\u0E38\u0E01\u0E04\u0E23\u0E32
          \u0E02\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E14\u0E34\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32 \u0E44\u0E21\u0E48\u0E2D\u0E32\u0E08\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E22\u0E44\u0E1B \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E31\u0E01\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32 \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E40\u0E27\u0E25\u0E32\u0E40\u0E17\u0E48\u0E32\u0E44\u0E23
        `;
                    }
                  }
                )}`;
              }
            }
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const GridContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let isOpenModal = false;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section>${validate_component(Masonry, "Masonry").$$render(
      $$result,
      {
        items,
        minColWidth: 300,
        maxColWidth: 330,
        gap: 4,
        duration: 500
      },
      {},
      {
        default: ({ item }) => {
          return `<section class="${"cursor-pointer rounded-lg p-2"}">${validate_component(LazyImage, "LazyImage").$$render(
            $$result,
            {
              src: item.img,
              class: "rounded-lg mb-2",
              placeholder: "https://via.placeholder.com/500",
              alt: item.title,
              options: { threshold: 0.4 }
            },
            {},
            {}
          )}

      ${validate_component(P, "P").$$render(
            $$result,
            {
              align: "left",
              size: "xs",
              space: "normal",
              weight: "medium",
              opacity: 1
            },
            {},
            {
              default: () => {
                return `${escape(item.title)}`;
              }
            }
          )}</section>`;
        }
      }
    )}</section>

${validate_component(ModalDetail, "ModalDetail").$$render(
      $$result,
      { isOpenModal },
      {
        isOpenModal: ($$value) => {
          isOpenModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Submenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTabValue3 = 1;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(TabWrapper, "TabWrapper").$$render(
      $$result,
      {
        tabStyle: "custom",
        activeTabValue: activeTabValue3
      },
      {
        activeTabValue: ($$value) => {
          activeTabValue3 = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ tabStyle, tabId }) => {
          return `${validate_component(TabHead, "TabHead").$$render(
            $$result,
            {
              customUlClass: "flex flex-wrap -mb-px justify-center",
              tabStyle,
              tabId
            },
            {},
            {
              default: () => {
                return `${validate_component(TabHeadItem, "TabHeadItem").$$render(
                  $$result,
                  {
                    id: 1,
                    tabStyle: "underline",
                    activeTabValue: activeTabValue3
                  },
                  {},
                  {
                    default: () => {
                      return `\u0E43\u0E2B\u0E21\u0E48`;
                    }
                  }
                )}
    ${validate_component(TabHeadItem, "TabHeadItem").$$render(
                  $$result,
                  {
                    id: 2,
                    tabStyle: "underline",
                    activeTabValue: activeTabValue3
                  },
                  {},
                  {
                    default: () => {
                      return `\u0E42\u0E04\u0E15\u0E23\u0E1A\u0E49\u0E07`;
                    }
                  }
                )}
    ${validate_component(TabHeadItem, "TabHeadItem").$$render(
                  $$result,
                  {
                    id: 3,
                    tabStyle: "underline",
                    activeTabValue: activeTabValue3
                  },
                  {},
                  {
                    default: () => {
                      return `\u0E1A\u0E49\u0E07\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E25`;
                    }
                  }
                )}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document2 = getDocument();
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];
        if (!element) {
          element = document2.createElement("div");
          element.className = checkProps[key];
          swiper.$el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };
  function getEl(el) {
    let $el;
    if (el) {
      $el = $(el);
      if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }
    return $el;
  }
  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;
    if ($el && $el.length > 0) {
      $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
      if ($el[0] && $el[0].tagName === "BUTTON")
        $el[0].disabled = disabled;
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    }
  }
  function update() {
    if (swiper.params.loop)
      return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl))
      return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);
    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on("click", onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on("click", onPrevClick);
    }
    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
    if (!swiper.enabled) {
      if ($nextEl)
        $nextEl.addClass(params.lockClass);
      if ($prevEl)
        $prevEl.addClass(params.lockClass);
    }
  }
  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off("click", onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off("click", onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl) {
      $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
    if ($prevEl) {
      $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
  });
  on("click", (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });
  const enable = () => {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
    init();
    update();
  };
  const disable = () => {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__)
        target[key] = src[key];
      else
        extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames2 = "") {
  const classes = classNames2.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes.forEach((c) => {
    if (unique.indexOf(c) < 0)
      unique.push(c);
  });
  return unique.join(" ");
}
const paramsList = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom"
];
function getParams(obj = {}, splitEvents = true) {
  const params = {
    on: {}
  };
  const events = {};
  const passedParams = {};
  extend(params, Swiper.defaults);
  extend(params, Swiper.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach((key) => {
    if (typeof obj[key] === "undefined")
      return;
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      if (splitEvents) {
        events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events
  };
}
const Swiper_1$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "swiper"]);
  const dispatch = createEventDispatcher();
  let { class: className = void 0 } = $$props;
  let containerClasses = "swiper";
  let swiperInstance = null;
  let paramsData;
  let swiperParams;
  let restProps;
  let swiperEl = null;
  let prevEl = null;
  let nextEl = null;
  let scrollbarEl = null;
  let paginationEl = null;
  let virtualData = { slides: [] };
  function swiper() {
    return swiperInstance;
  }
  const setVirtualData = (data) => {
    virtualData = data;
    tick().then(() => {
      swiperInstance.$wrapperEl.children(".swiper-slide").each((el) => {
        if (el.onSwiper)
          el.onSwiper(swiperInstance);
      });
      swiperInstance.updateSlides();
      swiperInstance.updateProgress();
      swiperInstance.updateSlidesClasses();
      if (swiperInstance.lazy && swiperInstance.params.lazy.enabled) {
        swiperInstance.lazy.load();
      }
    });
  };
  const calcParams = () => {
    paramsData = getParams($$restProps);
    swiperParams = paramsData.params;
    paramsData.passedParams;
    restProps = paramsData.rest;
  };
  calcParams();
  const onBeforeBreakpoint = () => {
  };
  swiperParams.onAny = (event, ...args) => {
    dispatch(event, args);
  };
  Object.assign(swiperParams.on, {
    _beforeBreakpoint: onBeforeBreakpoint,
    _containerClasses(_swiper, classes) {
      containerClasses = classes;
    }
  });
  swiperInstance = new Swiper(swiperParams);
  setContext("swiper", swiperInstance);
  if (swiperInstance.virtual && swiperInstance.params.virtual.enabled) {
    const extendWith = {
      cache: false,
      renderExternal: (data) => {
        setVirtualData(data);
        if (swiperParams.virtual && swiperParams.virtual.renderExternal) {
          swiperParams.virtual.renderExternal(data);
        }
      },
      renderExternalUpdate: false
    };
    extend(swiperInstance.params.virtual, extendWith);
    extend(swiperInstance.originalParams.virtual, extendWith);
  }
  onDestroy(() => {
    if (typeof window !== "undefined" && swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.destroy(true, false);
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.swiper === void 0 && $$bindings.swiper && swiper !== void 0)
    $$bindings.swiper(swiper);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`))
      },
      escape_object(restProps)
    ],
    {}
  )}${add_attribute("this", swiperEl, 0)}>${slots["container-start"] ? slots["container-start"]({ virtualData }) : ``}
  <div class="${"swiper-wrapper"}">${slots["wrapper-start"] ? slots["wrapper-start"]({ virtualData }) : ``}
    ${slots.default ? slots.default({ virtualData }) : ``}
    ${slots["wrapper-end"] ? slots["wrapper-end"]({ virtualData }) : ``}</div>
  ${needsNavigation(swiperParams) ? `<div class="${"swiper-button-prev"}"${add_attribute("this", prevEl, 0)}></div>
    <div class="${"swiper-button-next"}"${add_attribute("this", nextEl, 0)}></div>` : ``}
  ${needsScrollbar(swiperParams) ? `<div class="${"swiper-scrollbar"}"${add_attribute("this", scrollbarEl, 0)}></div>` : ``}
  ${needsPagination(swiperParams) ? `<div class="${"swiper-pagination"}"${add_attribute("this", paginationEl, 0)}></div>` : ``}
  ${slots["container-end"] ? slots["container-end"]({ virtualData }) : ``}</div>`;
});
const Swiper_slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slideData;
  let $$restProps = compute_rest_props($$props, ["zoom", "virtualIndex", "class"]);
  let { zoom = void 0 } = $$props;
  let { virtualIndex = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  let slideEl = null;
  let slideClasses = "swiper-slide";
  let swiper = getContext("swiper");
  const updateClasses = (_, el, classNames2) => {
    if (el === slideEl) {
      slideClasses = classNames2;
    }
  };
  const detachEvent = () => {
    if (!swiper)
      return;
    swiper.off("_slideClass", updateClasses);
  };
  onDestroy(() => {
    if (!swiper)
      return;
    detachEvent();
  });
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.virtualIndex === void 0 && $$bindings.virtualIndex && virtualIndex !== void 0)
    $$bindings.virtualIndex(virtualIndex);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  slideData = {
    isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
    isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
    isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
    isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
    isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
  };
  return `<div${spread(
    [
      {
        class: escape_attribute_value(uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`))
      },
      {
        "data-swiper-slide-index": escape_attribute_value(virtualIndex)
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", slideEl, 0)}>${zoom ? `<div class="${"swiper-zoom-container"}"${add_attribute("data-swiper-zoom", typeof zoom === "number" ? zoom : void 0, 0)}>${slots.default ? slots.default({ data: slideData }) : ``}</div>` : `${slots.default ? slots.default({ data: slideData }) : ``}`}</div>`;
});
const Swiper_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C"
  ];
  return `${validate_component(Swiper_1$1, "Swiper").$$render(
    $$result,
    {
      slidesPerView: 6,
      spaceBetween: 10,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1200: { slidesPerView: 6 }
      },
      modules: [Navigation],
      navigation: true
    },
    {},
    {
      default: () => {
        return `${each(items, (item) => {
          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "cursor-pointer" }, {}, {
            default: () => {
              return `${validate_component(Img, "Img").$$render(
                $$result,
                {
                  src: "https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg",
                  class: "rounded-lg h-14 w-full object-cover",
                  alt: "sample 1"
                },
                {},
                {}
              )}

      <div class="${"absolute top-50 left-50"}">${validate_component(P, "P").$$render(
                $$result,
                {
                  class: "text-white",
                  align: "center",
                  space: "normal",
                  weight: "medium",
                  opacity: 1
                },
                {},
                {
                  default: () => {
                    return `${escape(item)}`;
                  }
                }
              )}</div>
    `;
            }
          })}`;
        })}`;
      }
    }
  )}`;
});
const Spinner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loading-wave-dots.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW{position:relative}.loading-wave-dots.s-I7SWpNAbCQEW .wave-item.s-I7SWpNAbCQEW{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:s-I7SWpNAbCQEW-loading-wave-dots linear 2.8s infinite;animation:s-I7SWpNAbCQEW-loading-wave-dots linear 2.8s infinite}.loading-wave-dots.s-I7SWpNAbCQEW .wave-item.s-I7SWpNAbCQEW:first-child{margin-left:-36px}.loading-wave-dots.s-I7SWpNAbCQEW .wave-item.s-I7SWpNAbCQEW:nth-child(2){margin-left:-20px;-webkit-animation-delay:0.14s;animation-delay:0.14s}.loading-wave-dots.s-I7SWpNAbCQEW .wave-item.s-I7SWpNAbCQEW:nth-child(3){margin-left:-4px;-webkit-animation-delay:0.28s;animation-delay:0.28s}.loading-wave-dots.s-I7SWpNAbCQEW .wave-item.s-I7SWpNAbCQEW:nth-child(4){margin-left:12px;-webkit-animation-delay:0.42s;animation-delay:0.42s}.loading-wave-dots.s-I7SWpNAbCQEW .wave-item.s-I7SWpNAbCQEW:last-child{margin-left:28px;-webkit-animation-delay:0.56s;animation-delay:0.56s}@-webkit-keyframes s-I7SWpNAbCQEW-loading-wave-dots{0%{transform:translateY(0);background:#bbb}10%{transform:translateY(-6px);background:#999}20%{transform:translateY(0);background:#bbb}100%{transform:translateY(0);background:#bbb}}@keyframes s-I7SWpNAbCQEW-loading-wave-dots{0%{transform:translateY(0);background:#bbb}10%{transform:translateY(-6px);background:#999}20%{transform:translateY(0);background:#bbb}100%{transform:translateY(0);background:#bbb}}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW{width:5px;height:5px;-webkit-animation:s-I7SWpNAbCQEW-loading-circles linear .75s infinite;animation:s-I7SWpNAbCQEW-loading-circles linear .75s infinite}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes s-I7SWpNAbCQEW-loading-circles{0%{background:#dfdfdf}90%{background:#505050}100%{background:#dfdfdf}}@keyframes s-I7SWpNAbCQEW-loading-circles{0%{background:#dfdfdf}90%{background:#505050}100%{background:#dfdfdf}}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW{background:#666;-webkit-animation:s-I7SWpNAbCQEW-loading-bubbles linear .75s infinite;animation:s-I7SWpNAbCQEW-loading-bubbles linear .75s infinite}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:first-child{margin-top:-12.5px;margin-left:-0.5px}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(3){margin-top:-0.5px;margin-left:11.5px}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(5){margin-top:11.5px;margin-left:-0.5px}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(7){margin-top:-0.5px;margin-left:-12.5px}.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes s-I7SWpNAbCQEW-loading-bubbles{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}100%{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes s-I7SWpNAbCQEW-loading-bubbles{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}100%{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW{position:relative;border:1px solid #999;-webkit-animation:s-I7SWpNAbCQEW-loading-rotating ease 1.5s infinite;animation:s-I7SWpNAbCQEW-loading-rotating ease 1.5s infinite}.loading-default.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW{border:2px solid #777;border-right-color:transparent;-webkit-animation:s-I7SWpNAbCQEW-loading-rotating linear .85s infinite;animation:s-I7SWpNAbCQEW-loading-rotating linear .85s infinite}@-webkit-keyframes s-I7SWpNAbCQEW-loading-rotating{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes s-I7SWpNAbCQEW-loading-rotating{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.loading-bubbles.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW,.loading-circles.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW{position:relative}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW,.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(2),.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(2){-webkit-animation-delay:0.093s;animation-delay:0.093s}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(3),.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(3){-webkit-animation-delay:0.186s;animation-delay:0.186s}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(4),.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(4){-webkit-animation-delay:0.279s;animation-delay:0.279s}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(5),.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(5){-webkit-animation-delay:0.372s;animation-delay:0.372s}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(6),.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(6){-webkit-animation-delay:0.465s;animation-delay:0.465s}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:nth-child(7),.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:nth-child(7){-webkit-animation-delay:0.558s;animation-delay:0.558s}.loading-circles.s-I7SWpNAbCQEW .circle-item.s-I7SWpNAbCQEW:last-child,.loading-bubbles.s-I7SWpNAbCQEW .bubble-item.s-I7SWpNAbCQEW:last-child{-webkit-animation-delay:0.651s;animation-delay:0.651s}.loading-bubbles.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW,.loading-circles.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW,.loading-spiral.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW,.loading-wave-dots.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW,.loading-default.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW{}.s-I7SWpNAbCQEW.s-I7SWpNAbCQEW{}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spinner = "" } = $$props;
  if ($$props.spinner === void 0 && $$bindings.spinner && spinner !== void 0)
    $$bindings.spinner(spinner);
  $$result.css.add(css$1);
  return `${spinner === "bubbles" ? `
	<span class="${"loading-bubbles s-I7SWpNAbCQEW"}"><span class="${"bubble-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"bubble-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"bubble-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"bubble-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"bubble-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"bubble-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"bubble-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"bubble-item s-I7SWpNAbCQEW"}"></span></span>` : `${spinner === "circles" ? `
	<span class="${"loading-circles s-I7SWpNAbCQEW"}"><span class="${"circle-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"circle-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"circle-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"circle-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"circle-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"circle-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"circle-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"circle-item s-I7SWpNAbCQEW"}"></span></span>` : `${spinner === "spiral" ? `
	<i class="${"loading-spiral s-I7SWpNAbCQEW"}"></i>` : `${spinner === "wavedots" ? `
	<span class="${"loading-wave-dots s-I7SWpNAbCQEW"}"><span class="${"wave-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"wave-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"wave-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"wave-item s-I7SWpNAbCQEW"}"></span>
		<span class="${"wave-item s-I7SWpNAbCQEW"}"></span></span>` : `
	<i class="${"loading-default s-I7SWpNAbCQEW"}"></i>`}`}`}`}`;
});
const InfiniteLoading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".infinite-loading-container.s-yINUOmzzJjCM{clear:both;text-align:center}.btn-try-infinite.s-yINUOmzzJjCM{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite.s-yINUOmzzJjCM:not(:active):hover{opacity:0.8}.s-yINUOmzzJjCM{}.s-yINUOmzzJjCM{}",
  map: null
};
const THROTTLE_LIMIT = 50;
const LOOP_CHECK_TIMEOUT = 1e3;
const LOOP_CHECK_MAX_CALLS = 10;
const ERROR_INFINITE_LOOP = [
  `executed the callback function more than ${LOOP_CHECK_MAX_CALLS} times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper rather than automatic searching, you can do this:`,
  "<!-- add a special attribute for the real scroll wrapper (can also be data-infinite-wrapper) -->",
  "<div infinite-wrapper>",
  "  ...",
  "  <!-- set forceUseInfiniteWrapper -->",
  "  <InfiniteLoading forceUseInfiniteWrapper>",
  "</div>",
  "or",
  '<div class="infinite-wrapper">',
  "  ...",
  "  <!-- set forceUseInfiniteWrapper as css selector of the real scroll wrapper -->",
  '  <InfiniteLoading forceUseInfiniteWrapper=".infinite-wrapper" />',
  "</div>"
].join("\n");
const thirdEventArg = (() => {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassive = { passive: true };
        return true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {
  }
  return supportsPassive;
})();
const throttler = {
  timers: [],
  caches: [],
  throttle(fn) {
    if (this.caches.indexOf(fn) === -1) {
      this.caches.push(fn);
      this.timers.push(setTimeout(
        () => {
          fn();
          this.caches.splice(this.caches.indexOf(fn), 1);
          this.timers.shift();
        },
        THROTTLE_LIMIT
      ));
    }
  },
  reset() {
    this.timers.forEach((timer) => {
      clearTimeout(timer);
    });
    this.timers.length = 0;
    this.caches = [];
  }
};
const loopTracker = {
  isChecked: false,
  timer: null,
  times: 0,
  track() {
    this.times += 1;
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => {
        this.isChecked = true;
      },
      LOOP_CHECK_TIMEOUT
    );
    if (this.times > LOOP_CHECK_MAX_CALLS) {
      console.error(ERROR_INFINITE_LOOP);
      this.isChecked = true;
    }
  }
};
const scrollBarStorage = {
  key: "_infiniteScrollHeight",
  getScrollElement(element) {
    return element === window ? document.documentElement : element;
  },
  save(element) {
    const target = this.getScrollElement(element);
    target[this.key] = target.scrollHeight;
  },
  restore(element) {
    const target = this.getScrollElement(element);
    if (typeof target[this.key] === "number") {
      target.scrollTop = target.scrollHeight - target[this.key] + target.scrollTop;
    }
    this.remove(target);
  },
  remove(element) {
    if (element[this.key] !== void 0) {
      delete element[this.key];
    }
  }
};
function isVisible(element) {
  return element && element.offsetWidth + element.offsetHeight > 0;
}
const InfiniteLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showSpinner;
  let showError;
  let showNoResults;
  let showNoMore;
  const dispatch = createEventDispatcher();
  const STATUS = {
    READY: 0,
    LOADING: 1,
    COMPLETE: 2,
    ERROR: 3
  };
  let { distance = 100 } = $$props;
  let { spinner = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { forceUseInfiniteWrapper = false } = $$props;
  let { identifier = +new Date() } = $$props;
  let isFirstLoad = true;
  let status = STATUS.READY;
  let thisElement;
  let scrollParent;
  const stateChanger = {
    loaded: async () => {
      isFirstLoad = false;
      if (direction === "top") {
        await tick();
        scrollBarStorage.restore(scrollParent);
      }
      if (status === STATUS.LOADING) {
        await tick();
        await attemptLoad(true);
      }
    },
    complete: async () => {
      status = STATUS.COMPLETE;
      await tick();
      scrollParent.removeEventListener("scroll", scrollHandler, thirdEventArg);
    },
    reset: async () => {
      status = STATUS.READY;
      isFirstLoad = true;
      scrollBarStorage.remove(scrollParent);
      scrollParent.addEventListener("scroll", scrollHandler, thirdEventArg);
      setTimeout(
        () => {
          throttler.reset();
          scrollHandler();
        },
        1
      );
    },
    error: () => {
      status = STATUS.ERROR;
      throttler.reset();
    }
  };
  function scrollHandler(event) {
    if (status === STATUS.READY) {
      if (event && event.constructor === Event && isVisible(thisElement)) {
        throttler.throttle(attemptLoad);
      } else {
        attemptLoad();
      }
    }
  }
  async function attemptLoad(isContinuousCall) {
    if (status !== STATUS.COMPLETE && isVisible(thisElement) && getCurrentDistance() <= distance) {
      status = STATUS.LOADING;
      if (direction === "top") {
        await tick();
        scrollBarStorage.save(scrollParent);
      }
      dispatch("infinite", stateChanger);
      if (isContinuousCall && !forceUseInfiniteWrapper && !loopTracker.isChecked) {
        loopTracker.track();
      }
    } else if (status === STATUS.LOADING) {
      status = STATUS.READY;
    }
  }
  function getCurrentDistance() {
    let distance2;
    if (direction === "top") {
      distance2 = typeof scrollParent.scrollTop === "number" ? scrollParent.scrollTop : scrollParent.pageYOffset;
    } else {
      const infiniteElementOffsetTopFromBottom = thisElement.getBoundingClientRect().top;
      const scrollElementOffsetTopFromBottom = scrollParent === window ? window.innerHeight : scrollParent.getBoundingClientRect().bottom;
      distance2 = infiniteElementOffsetTopFromBottom - scrollElementOffsetTopFromBottom;
    }
    return distance2;
  }
  onDestroy(() => {
  });
  if ($$props.distance === void 0 && $$bindings.distance && distance !== void 0)
    $$bindings.distance(distance);
  if ($$props.spinner === void 0 && $$bindings.spinner && spinner !== void 0)
    $$bindings.spinner(spinner);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.forceUseInfiniteWrapper === void 0 && $$bindings.forceUseInfiniteWrapper && forceUseInfiniteWrapper !== void 0)
    $$bindings.forceUseInfiniteWrapper(forceUseInfiniteWrapper);
  if ($$props.identifier === void 0 && $$bindings.identifier && identifier !== void 0)
    $$bindings.identifier(identifier);
  $$result.css.add(css);
  showSpinner = status === STATUS.LOADING;
  showError = status === STATUS.ERROR;
  showNoResults = status === STATUS.COMPLETE && isFirstLoad;
  showNoMore = status === STATUS.COMPLETE && !isFirstLoad;
  return `<div class="${"infinite-loading-container s-yINUOmzzJjCM"}"${add_attribute("this", thisElement, 0)}>${showSpinner ? `<div class="${"infinite-status-prompt s-yINUOmzzJjCM"}">${slots.spinner ? slots.spinner({ isFirstLoad }) : `
				${validate_component(Spinner, "Spinner").$$render($$result, { spinner }, {}, {})}
			`}</div>` : ``}

	${showNoResults ? `<div class="${"infinite-status-prompt s-yINUOmzzJjCM"}">${slots.noResults ? slots.noResults({}) : `
				No results :(
			`}</div>` : ``}

	${showNoMore ? `<div class="${"infinite-status-prompt s-yINUOmzzJjCM"}">${slots.noMore ? slots.noMore({}) : `
				No more data :)
			`}</div>` : ``}

	${showError ? `<div class="${"infinite-status-prompt s-yINUOmzzJjCM"}">${slots.error ? slots.error({ attemptLoad }) : `
				Oops, something went wrong :(
				<br class="${"s-yINUOmzzJjCM"}">
				<button class="${"btn-try-infinite s-yINUOmzzJjCM"}">Retry
				</button>
			`}</div>` : ``}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-1vjt001">`, ""}

<section>${validate_component(Searcher, "Searcher").$$render($$result, {}, {}, {})}</section>

<section class="${"mt-8"}">${validate_component(Submenu, "Submenu").$$render($$result, {}, {}, {})}</section>

<section class="${"mt-8"}">${validate_component(Swiper_1, "Swiper").$$render($$result, {}, {}, {})}</section>

<section class="${"mt-8 text-center"}">${validate_component(Heading, "Heading").$$render($$result, { customSize: "", tag: "h4", class: "mb-2" }, {}, {
      default: () => {
        return `\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E31\u0E19\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E49\u0E07`;
      }
    })}
	${validate_component(P, "P").$$render(
      $$result,
      {
        class: "mb-8",
        align: "center",
        size: "sm",
        space: "normal",
        weight: "medium",
        opacity: 1
      },
      {},
      {
        default: () => {
          return `\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E31\u0E19\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E49\u0E07\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E44\u0E17\u0E22`;
        }
      }
    )}
	${validate_component(GridContent, "GridContent").$$render(
      $$result,
      { items },
      {
        items: ($$value) => {
          items = $$value;
          $$settled = false;
        }
      },
      {}
    )}

	${validate_component(InfiniteLoading, "InfiniteLoading").$$render($$result, {}, {}, {})}
</section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
