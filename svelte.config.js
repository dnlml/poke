import adapter from '@sveltejs/adapter-auto';
import autoPreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: autoPreprocess({}),

  kit: {
    adapter: adapter()
  }
};

export default config;
