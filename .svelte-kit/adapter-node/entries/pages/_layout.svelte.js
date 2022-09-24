import { c as create_ssr_component, g as getContext, b as add_attribute, e as escape, d as compute_rest_props, s as setContext, f as spread, h as escape_object, i as escape_attribute_value, j as is_void, n as noop, k as each, v as validate_component, l as compute_slots, o as createEventDispatcher } from '../../chunks/index.js';
import classNames from 'classnames';
/* empty css                                                    */import { P } from '../../chunks/core.js';
import { B as Button } from '../../chunks/Button.js';
import '../../chunks/db.js';
import 'ssr-window';

/* node_modules/flowbite-svelte/utils/CloseButton.svelte generated by Svelte v3.50.1 */

const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const background = getContext('background');
	let { color = 'default' } = $$props;
	let { name = 'Close' } = $$props;
	let { size = 'md' } = $$props;

	const colors = {
		dark: 'hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600',
		gray: 'focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300',
		red: 'focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300',
		yellow: 'focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300',
		green: 'focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300',
		indigo: 'focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300',
		purple: 'focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300',
		pink: 'focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300',
		blue: 'focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300',
		default: 'focus:ring-gray-300 '
	};

	const sizing = {
		xs: 'm-0.5 rounded focus:ring-1 p-0.5',
		sm: 'm-0.5 rounded focus:ring-1 p-0.5',
		md: 'rounded-lg focus:ring-2 p-1.5'
	};

	let buttonClass = '';

	const svgSizes = {
		xs: 'w-3 h-3',
		sm: 'w-3.5 h-3.5',
		md: 'w-5 h-5'
	};

	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);

	buttonClass = classNames(
		'ml-auto focus:outline-none whitespace-normal',
		sizing[size],
		colors[color],
		color === 'default' && (background
		? 'hover:bg-gray-100 dark:hover:bg-gray-600'
		: 'hover:bg-gray-100 dark:hover:bg-gray-700'),
		$$props.class
	);

	return `<button type="${"button"}"${add_attribute("class", buttonClass, 0)} aria-label="${"Close"}">${slots.default
	? slots.default({})
	: `
		<span class="${"sr-only"}">${escape(name)}</span>
		<svg${add_attribute("class", svgSizes[size], 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>
	`}</button>`;
});

/* node_modules/flowbite-svelte/utils/Frame.svelte generated by Svelte v3.50.1 */

const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"tag","color","rounded","border","shadow","transition","params","node","use","options"
	]);

	setContext('background', true);
	let { tag = 'div' } = $$props;
	let { color = 'default' } = $$props;
	let { rounded = false } = $$props;
	let { border = false } = $$props;
	let { shadow = false } = $$props;
	let { transition = undefined } = $$props;
	let { params = {} } = $$props;
	let { node = undefined } = $$props;
	let { use = noop } = $$props;
	let { options = {} } = $$props;

	// your script goes here
	const bgColors = {
		gray: 'bg-gray-100 dark:bg-gray-200 ',
		red: 'bg-red-100 dark:bg-red-200',
		yellow: 'bg-yellow-100 dark:bg-yellow-200 ',
		green: 'bg-green-100 dark:bg-green-200 ',
		indigo: 'bg-indigo-100 dark:bg-indigo-200 ',
		purple: 'bg-purple-100 dark:bg-purple-200 ',
		pink: 'bg-pink-100 dark:bg-pink-200 ',
		blue: 'bg-blue-100 dark:bg-blue-200 ',
		light: 'bg-gray-50 dark:bg-gray-700',
		dark: 'bg-gray-100 dark:bg-gray-700',
		default: 'bg-white dark:bg-gray-800',
		dropdown: 'bg-white dark:bg-gray-700',
		navbar: 'bg-white dark:bg-gray-900',
		navbarUl: 'bg-gray-50 dark:bg-gray-800',
		form: 'bg-gray-50 dark:bg-gray-700',
		none: ''
	};

	const textColors = {
		gray: 'text-gray-700 dark:text-gray-800',
		red: 'text-red-700 dark:text-red-800',
		yellow: 'text-yellow-700 dark:text-yellow-800',
		green: 'text-green-700 dark:text-green-800',
		indigo: 'text-indigo-700 dark:text-indigo-800',
		purple: 'text-purple-700 dark:text-purple-800',
		pink: 'text-pink-700 dark:text-pink-800',
		blue: 'text-blue-700 dark:text-blue-800',
		light: 'text-gray-700 dark:text-gray-300',
		dark: 'text-gray-700 dark:text-gray-300',
		default: 'text-gray-500 dark:text-gray-400',
		dropdown: 'text-gray-500 dark:text-gray-400',
		navbar: 'text-gray-700 dark:text-gray-200',
		navbarUl: 'text-gray-700 dark:text-gray-400',
		from: 'text-gray-900 dark:text-white',
		none: ''
	};

	const borderColors = {
		gray: 'border-gray-500 dark:bg-gray-200 ',
		red: 'border-red-500 dark:bg-red-200 ',
		yellow: 'border-yellow-500 dark:bg-tellow-200 ',
		green: 'border-green-500 dark:bg-green-200 ',
		indigo: 'border-indigo-500 dark:bg-indigo-200 ',
		purple: 'border-purple-500 dark:bg-purple-200 ',
		pink: 'border-pink-500 dark:bg-pink-200 ',
		blue: 'border-blue-500 dark:bg-blue-200 ',
		light: 'border-gray-500',
		dark: 'border-gray-500',
		default: 'border-gray-200 dark:border-gray-700',
		dropdown: 'border-gray-100 dark:border-gray-700',
		navbar: 'border-gray-100 dark:border-gray-700',
		navbarUl: 'border-gray-100 dark:border-gray-700',
		form: 'border-gray-300 dark:border-gray-700',
		none: ''
	};

	let divClass;
	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
	if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
	if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
	if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
	if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);

	{
		setContext('color', color);
	}
	divClass = classNames(bgColors[color], textColors[color], rounded && 'rounded-lg ', border && 'border', borderColors[color], shadow && 'shadow-md', $$props.class);

	return `${(tag$1 => {
		return tag$1
		? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1)
			? ''
			: `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? '' : `</${tag$1}>`}`
		: '';
	})(tag)}`;
});

/* node_modules/flowbite-svelte/utils/Wrapper.svelte generated by Svelte v3.50.1 */

const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["show"]);
	let { show } = $$props;
	if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);

	return `${show
	? `<div${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</div>`
	: `${slots.default ? slots.default({}) : ``}`}`;
});

/* node_modules/flowbite-svelte/forms/Label.svelte generated by Svelte v3.50.1 */

const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["color","defaultClass","show"]);
	let { color = 'gray' } = $$props;
	let { defaultClass = 'text-sm font-medium block' } = $$props;
	let { show = true } = $$props;
	let node;

	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};

	let labelClass;
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);

	{
		{
			const control = node?.control;
			color = (control?.disabled) ? 'disabled' : color;
		}
	}

	labelClass = classNames(defaultClass, colorClasses[color], $$props.class);

	return `${show
	? `
	<label${spread(
			[
				escape_object($$restProps),
				{
					class: escape_attribute_value(labelClass)
				}
			],
			{}
		)}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>`
	: `${slots.default ? slots.default({}) : ``}`}`;
});

/* node_modules/flowbite-svelte/forms/Input.svelte generated by Svelte v3.50.1 */

const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["type","value","size","inputClass","color"]);
	let { type = 'text' } = $$props;
	let { value = '' } = $$props;
	let { size = 'md' } = $$props;
	let { inputClass = 'block w-full border disabled:cursor-not-allowed disabled:opacity-50 rounded-lg' } = $$props;
	let { color = 'base' } = $$props;

	const colorClasses = {
		base: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
		green: 'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
		red: 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500'
	};

	// tinted if put in component having its own background
	let background = getContext('background');

	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0) $$bindings.inputClass(inputClass);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);

	return `<input${spread(
		[
			escape_object($$restProps),
			{
				class: escape_attribute_value(classNames(
					inputClass,
					colorClasses[color],
					color === 'base' && (background
					? 'dark:bg-gray-600 dark:border-gray-500'
					: 'dark:bg-gray-700 dark:border-gray-600'),
					{
						'p-2 sm:text-xs': size === 'sm',
						'p-2.5 text-sm': size === 'md',
						'sm:text-md p-4': size === 'lg'
					},
					$$props.class
				))
			}
		],
		{}
	)}${add_attribute("value", value, 0)}>`;
});

/* node_modules/flowbite-svelte/forms/Select.svelte generated by Svelte v3.50.1 */
const common = 'block w-full';

const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"items","value","placeholder","underline","size","defaultClass","underlineClass"
	]);

	let { items = [] } = $$props;
	let { value } = $$props;
	let { placeholder = 'Choose option ...' } = $$props;
	let { underline = false } = $$props;
	let { size = 'md' } = $$props;
	let { defaultClass = 'text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' } = $$props;
	let { underlineClass = 'text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer' } = $$props;

	const sizes = {
		sm: 'text-sm p-2',
		md: 'text-sm p-2.5',
		lg: 'text-base py-3 px-4'
	};

	let selectClass;
	if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
	if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0) $$bindings.underline(underline);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0) $$bindings.underlineClass(underlineClass);
	selectClass = classNames(common, underline ? underlineClass : defaultClass, sizes[size], underline && '!px-0', $$restProps.class);

	return `<select${spread(
		[
			escape_object($$restProps),
			{
				class: escape_attribute_value(selectClass)
			}
		],
		{}
	)}><option disabled selected value="${""}">${escape(placeholder)}</option>${each(items, ({ value, name }) => {
		return `<option${add_attribute("value", value, 0)}>${escape(name)}</option>`;
	})}</select>`;
});

/* node_modules/flowbite-svelte/forms/Textarea.svelte generated by Svelte v3.50.1 */

const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["value"]);
	let $$slots = compute_slots(slots);
	const background = getContext('background');
	let { value = '' } = $$props;
	let wrapped;
	let wrapperClass;
	let textareaClass;
	const headerClass = header => classNames(header ? 'border-b' : 'border-t', 'py-2 px-3 border-gray-200 dark:border-gray-600');
	let innerWrapperClass;
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	wrapped = $$slots.header || $$slots.footer;

	wrapperClass = classNames(
		'w-full rounded-lg',
		background
		? 'bg-white dark:bg-gray-800'
		: 'bg-gray-50 dark:bg-gray-700',
		'text-gray-900 dark:placeholder-gray-400 dark:text-white ',
		'border border-gray-200 dark:border-gray-600',
		$$props.class
	);

	textareaClass = wrapped
	? classNames('block w-full', 'text-sm', 'border-0 px-0', 'bg-inherit dark:bg-inherit', 'focus:outline-none focus:ring-0')
	: classNames(wrapperClass, 'p-2.5 text-sm', 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500');

	innerWrapperClass = classNames('py-2 px-4 bg-white dark:bg-gray-800', $$slots.footer || 'rounded-b-lg', $$slots.header || 'rounded-t-lg');

	return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
		default: () => {
			return `${$$slots.header
			? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>`
			: ``}
	${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
				default: () => {
					return `<textarea${spread(
						[
							escape_object($$restProps),
							{
								class: escape_attribute_value(textareaClass)
							}
						],
						{}
					)}>${value || ""}</textarea>`;
				}
			})}
	${$$slots.footer
			? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>`
			: ``}`;
		}
	})}`;
});

/* node_modules/flowbite-svelte/modals/Modal.svelte generated by Svelte v3.50.1 */

const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$slots = compute_slots(slots);
	let { open = false } = $$props;
	let { title = undefined } = $$props;
	let { size = 'md' } = $$props;
	let { placement = 'center' } = $$props;
	let { autoclose = true } = $$props;
	let { backdropClasses = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40' } = $$props;
	createEventDispatcher();

	const sizes = {
		xs: 'max-w-md',
		sm: 'max-w-lg',
		md: 'max-w-2xl',
		lg: 'max-w-4xl',
		xl: 'max-w-7xl'
	};

	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
	if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0) $$bindings.autoclose(autoclose);
	if ($$props.backdropClasses === void 0 && $$bindings.backdropClasses && backdropClasses !== void 0) $$bindings.backdropClasses(backdropClasses);

	return `
<div tabindex="${"-1"}" class="${[
		"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full",
		(open ? "flex" : "") + ' ' + (!open ? "hidden" : "")
	].join(' ').trim()}"${add_attribute("aria-hidden", open ? undefined : 'true', 0)}${add_attribute("aria-modal", open ? 'true' : undefined, 0)}${add_attribute("role", open ? 'dialog' : undefined, 0)}><div class="${"relative p-4 w-full " + escape(sizes[size], true) + " h-full md:h-auto"}">
		${validate_component(Frame, "Frame").$$render(
		$$result,
		{
			rounded: true,
			shadow: true,
			class: "relative"
		},
		{},
		{
			default: () => {
				return `
			${$$slots.header || title
				? `<div class="${"flex justify-between items-center p-4 rounded-t border-b dark:border-gray-600"}">${slots.header
					? slots.header({})
					: `
						<h3 class="${"text-xl font-semibold text-gray-900 dark:text-white p-0"}">${escape(title)}</h3>
					`}
					${validate_component(CloseButton, "CloseButton").$$render($$result, { name: "Close modal" }, {}, {})}</div>`
				: `${validate_component(CloseButton, "CloseButton").$$render(
						$$result,
						{
							name: "Close modal",
							class: "absolute top-3 right-2.5"
						},
						{},
						{}
					)}`}
			
			<div class="${"p-6 space-y-6"}">${slots.default ? slots.default({}) : ``}</div>
			
			${$$slots.footer
				? `<div class="${"flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"}">${slots.footer ? slots.footer({}) : ``}</div>`
				: ``}`;
			}
		}
	)}</div></div>`;
});

/* src/lib/shared/ui/components/modal/modal-create/ModalCreate.svelte generated by Svelte v3.50.1 */

const ModalCreate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { isOpenModalCreate } = $$props;

	let createPost = {
		title: '',
		photo: { base64: 'mock', size: '564x493' },
		description: '',
		primaryClass: '',
		subject: '',
		hashtag: [],
		publisherName: '',
		name: ''
	};

	let selectTag = '';
	let disabled = false;
	let subjects = [];
	let classes = [];
	let hashtags = [];

	if ($$props.isOpenModalCreate === void 0 && $$bindings.isOpenModalCreate && isOpenModalCreate !== void 0) $$bindings.isOpenModalCreate(isOpenModalCreate);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${validate_component(Modal, "Modal").$$render(
			$$result,
			{
				size: "lg",
				autoclose: false,
				open: isOpenModalCreate
			},
			{
				open: $$value => {
					isOpenModalCreate = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `<div class="${"text-right"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
						default: () => {
							return `สร้าง`;
						}
					})}</div>
  <br>

  <div class="${"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"}"><div><div class="${"flex justify-center items-center w-full h-4/6 min-h-[300px]"}"><label for="${"dropzone-file"}" class="${"flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100"}"><div class="${"flex flex-col justify-center items-center pt-5 pb-6"}"><svg aria-hidden="${"true"}" class="${"mb-3 w-10 h-10 text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}"></path></svg>
            <p class="${"mb-2 text-sm text-gray-500"}"><span class="${"font-semibold"}">โยนรูปบ้งๆ เข้ามาในนี้</span></p>
            <p class="${"text-xs text-gray-500"}">SVG, PNG, JPG or GIF (ขนาดไม่เกิน 10 Mb)
            </p></div>
          <input id="${"dropzone-file"}" type="${"file"}" class="${"hidden"}"></label></div></div>

    <div>${validate_component(Input_1, "Input").$$render(
						$$result,
						{
							placeholder: "ตั้งชื่อความบ้งที่คุณพบ",
							size: "lg",
							customClass: "h-12",
							inputValue: createPost.title
						},
						{
							inputValue: $$value => {
								createPost.title = $$value;
								$$settled = false;
							}
						},
						{}
					)}

      ${validate_component(Textarea_1, "Textarea").$$render(
						$$result,
						{
							placeholder: "ตั้งชื่อความบ้งที่คุณพบ",
							rows: 4,
							inputValue: createPost.description
						},
						{
							inputValue: $$value => {
								createPost.description = $$value;
								$$settled = false;
							}
						},
						{}
					)}

      <div class="${"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"}"><div>${validate_component(Label, "Label").$$render(
						$$result,
						{
							for: "large-input",
							class: "block font-medium text-base"
						},
						{},
						{
							default: () => {
								return `ที่มาความบ้ง`;
							}
						}
					)}
          ${validate_component(Select_1, "Select").$$render(
						$$result,
						{
							placeholder: "ระดับชั้น",
							size: "md",
							items: classes,
							inputValue: createPost.primaryClass
						},
						{
							inputValue: $$value => {
								createPost.primaryClass = $$value;
								$$settled = false;
							}
						},
						{}
					)}</div>
        <div class="${"pt-[24px]"}">${validate_component(Select_1, "Select").$$render(
						$$result,
						{
							placeholder: "วิชาเรียน",
							size: "md",
							items: subjects,
							inputValue: createPost.subject
						},
						{
							inputValue: $$value => {
								createPost.subject = $$value;
								$$settled = false;
							}
						},
						{}
					)}</div></div>

      <div>${validate_component(InputIcon, "InputIcon").$$render(
						$$result,
						{
							label: "แท็ก",
							description: "ติดแท็กเพื่อให้ทุกคนช่วยกันโหวตบ้งได้ง่ายขึ้น",
							placeholder: "หาแท็กที่เกี่ยวข้องกับความบ้ง",
							customClass: "h-12",
							inputValue: selectTag
						},
						{
							inputValue: $$value => {
								selectTag = $$value;
								$$settled = false;
							}
						},
						{}
					)}
        <div class="${"mt-[-12px] mb-[14px]"}">${each(hashtags, hashtag => {
						return `<span id="${"badge-dismiss-default"}" class="${"inline-flex items-center py-1 px-3 mr-1 mt-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-2xl"}">${escape(hashtag.name)}
            </span>`;
					})}</div></div>

      ${validate_component(Input_1, "Input").$$render(
						$$result,
						{
							label: "สำนักพิมพ์",
							placeholder: "ชื่อสำนักพิมพ์ที่สร้างความบ้ง",
							size: "md",
							customClass: "h-12",
							inputValue: createPost.publisherName
						},
						{
							inputValue: $$value => {
								createPost.publisherName = $$value;
								$$settled = false;
							}
						},
						{}
					)}

      ${validate_component(Input_1, "Input").$$render(
						$$result,
						{
							label: "ผู้แจ้งบ้ง",
							description: "คุณคือหนึ่งในผู้เข้าร่วมปรับการศึกษาไทย",
							placeholder: "ไม่ต้องส่ชื่อจริงมานะ",
							size: "md",
							customClass: "h-12",
							disabled,
							inputValue: createPost.name
						},
						{
							disabled: $$value => {
								disabled = $$value;
								$$settled = false;
							},
							inputValue: $$value => {
								createPost.name = $$value;
								$$settled = false;
							}
						},
						{}
					)}</div></div>`;
				}
			}
		)}`;
	} while (!$$settled);

	return $$rendered;
});

const logo = "/_app/immutable/assets/favicon-6635dbb2.png";

/* src/lib/shared/ui/components/header/Header.svelte generated by Svelte v3.50.1 */

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { isOpenModalCreate = false } = $$props;
	if ($$props.isOpenModalCreate === void 0 && $$bindings.isOpenModalCreate && isOpenModalCreate !== void 0) $$bindings.isOpenModalCreate(isOpenModalCreate);

	return `

<nav class="${"bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0"}"><div class="${"flex flex-wrap justify-between items-center mx-auto"}"><a href="${"/"}" class="${"flex items-center"}"><img${add_attribute("src", logo, 0)} class="${"mr-3 h-8 sm:h-7"}" alt="${"Checkyourtextbook Logo"}"></a>
    <div class="${"flex md:order-2"}"><button type="${"button"}" class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}">สร้าง</button></div></div>
</nav>`;
});

/* src/lib/shared/ui/components/form/input/Input.svelte generated by Svelte v3.50.1 */

const Input_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { label = '' } = $$props;
	let { description = '' } = $$props;
	let { placeholder = '' } = $$props;
	let { customClass = '' } = $$props;
	let { size } = $$props;
	let { inputValue } = $$props;
	let { disabled = false } = $$props;
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
	if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0) $$bindings.customClass(customClass);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0) $$bindings.inputValue(inputValue);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="${"mb-6"}">${label
		? `${validate_component(Label, "Label").$$render($$result, { class: "block font-medium text-base" }, {}, {
				default: () => {
					return `${escape(label)}`;
				}
			})}`
		: ``}
  ${description
		? `${validate_component(P, "P").$$render(
				$$result,
				{
					align: "left",
					size: "xs",
					space: "normal",
					weight: "medium",
					opacity: 1,
					class: "mb-1"
				},
				{},
				{
					default: () => {
						return `${escape(description)}`;
					}
				}
			)}`
		: ``}
  ${validate_component(Input, "Input").$$render(
			$$result,
			{
				size,
				placeholder,
				class: "bg-transparent",
				customClass,
				disabled,
				value: inputValue
			},
			{
				value: $$value => {
					inputValue = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div>`;
	} while (!$$settled);

	return $$rendered;
});

/* src/lib/shared/ui/components/form/input-icon/InputIcon.svelte generated by Svelte v3.50.1 */

const InputIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { label = '' } = $$props;
	let { description = '' } = $$props;
	let { placeholder = '' } = $$props;
	let { customClass = '' } = $$props;
	let { inputValue } = $$props;
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
	if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0) $$bindings.customClass(customClass);
	if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0) $$bindings.inputValue(inputValue);

	return `<div class="${"mb-6"}">${label
	? `${validate_component(Label, "Label").$$render($$result, { class: "block font-medium text-base" }, {}, {
			default: () => {
				return `${escape(label)}`;
			}
		})}`
	: ``}
  ${description
	? `${validate_component(P, "P").$$render(
			$$result,
			{
				align: "left",
				size: "xs",
				space: "normal",
				weight: "medium",
				opacity: 1,
				class: "mb-1"
			},
			{},
			{
				default: () => {
					return `${escape(description)}`;
				}
			}
		)}`
	: ``}
  
  <div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
    <input type="${"text"}" class="${escape(customClass, true) + " bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", inputValue, 0)}></div></div>`;
});

/* src/lib/shared/ui/components/form/textarea/Textarea.svelte generated by Svelte v3.50.1 */

const Textarea_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { label = '' } = $$props;
	let { description = '' } = $$props;
	let { placeholder = '' } = $$props;
	let { customClass = '' } = $$props;
	let { rows = 1 } = $$props;
	let { inputValue } = $$props;
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
	if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0) $$bindings.customClass(customClass);
	if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0) $$bindings.rows(rows);
	if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0) $$bindings.inputValue(inputValue);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="${"mb-6"}">${label
		? `${validate_component(Label, "Label").$$render(
				$$result,
				{
					for: "large-input",
					class: "block font-medium text-base"
				},
				{},
				{
					default: () => {
						return `${escape(label)}`;
					}
				}
			)}`
		: ``}
  ${description
		? `${validate_component(P, "P").$$render(
				$$result,
				{
					align: "left",
					size: "xs",
					space: "normal",
					weight: "medium",
					opacity: 1,
					class: "mb-1"
				},
				{},
				{
					default: () => {
						return `${escape(description)}`;
					}
				}
			)}`
		: ``}

  ${validate_component(Textarea, "Textarea").$$render(
			$$result,
			{
				id: "textarea-id",
				placeholder,
				rows,
				class: customClass,
				value: inputValue
			},
			{
				value: $$value => {
					inputValue = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div>`;
	} while (!$$settled);

	return $$rendered;
});

/* src/lib/shared/ui/components/form/select/Select.svelte generated by Svelte v3.50.1 */

const Select_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { label = '' } = $$props;
	let { description = '' } = $$props;
	let { placeholder = '' } = $$props;
	let { size } = $$props;
	let { inputValue } = $$props;
	let { items = [] } = $$props;
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0) $$bindings.inputValue(inputValue);
	if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="${"mb-6"}">${label
		? `${validate_component(Label, "Label").$$render(
				$$result,
				{
					for: "large-input",
					class: "block font-medium text-base"
				},
				{},
				{
					default: () => {
						return `${escape(label)}`;
					}
				}
			)}`
		: ``}
  ${description
		? `${validate_component(P, "P").$$render(
				$$result,
				{
					align: "left",
					size: "xs",
					space: "normal",
					weight: "medium",
					opacity: 1,
					class: "mb-1"
				},
				{},
				{
					default: () => {
						return `${escape(description)}`;
					}
				}
			)}`
		: ``}

  ${validate_component(Select, "Select").$$render(
			$$result,
			{
				class: "mt-2 bg-transparent",
				size,
				placeholder,
				items,
				value: inputValue
			},
			{
				value: $$value => {
					inputValue = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div>`;
	} while (!$$settled);

	return $$rendered;
});

const app = '';

const _layout_svelte_svelte_type_style_lang = '';

/* src/routes/+layout.svelte generated by Svelte v3.50.1 */

const css = {
	code: "section.svelte-1p7gid2{min-height:calc(100vh - 60px - 68px)}",
	map: null
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let isOpenModalCreate = false;
	$$result.css.add(css);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${validate_component(Header, "Header").$$render(
			$$result,
			{ isOpenModalCreate },
			{
				isOpenModalCreate: $$value => {
					isOpenModalCreate = $$value;
					$$settled = false;
				}
			},
			{}
		)}
<main class="${"pt-[60px]"}"><section class="${"p-4 svelte-1p7gid2"}">${slots.default ? slots.default({}) : ``}</section></main>

${isOpenModalCreate
		? `${validate_component(ModalCreate, "ModalCreate").$$render(
				$$result,
				{ isOpenModalCreate },
				{
					isOpenModalCreate: $$value => {
						isOpenModalCreate = $$value;
						$$settled = false;
					}
				},
				{}
			)}`
		: ``}`;
	} while (!$$settled);

	return $$rendered;
});

export { Layout as default };