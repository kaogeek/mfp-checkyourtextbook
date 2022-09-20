import { sveltekit } from '@sveltejs/kit/vite';
import { splitVendorChunkPlugin, type UserConfig } from 'vite';

const config: UserConfig = {
  build: {
    target: 'esnext',
  },
  plugins: [sveltekit(), splitVendorChunkPlugin()],
};

export default config;
