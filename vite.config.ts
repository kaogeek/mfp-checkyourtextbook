import { sveltekit } from '@sveltejs/kit/vite';
import { splitVendorChunkPlugin, type UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit(), splitVendorChunkPlugin()],
};

export default config;
