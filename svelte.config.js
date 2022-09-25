import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $components: resolve('./src/lib/shared/components'),
      $core: resolve('./src/lib/core'),
      $environment: resolve('./src/lib/environments'),
      $models: resolve('./src/lib/models'),
      $ui: resolve('./src/lib/shared/ui'),
      $utils: resolve('./src/lib/utils'),
      $assets: resolve('./src/lib/assets'),
    },
  },
};

export default config;
