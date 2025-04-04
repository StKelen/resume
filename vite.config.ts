import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ["**/*.glb", "**/*.jpg"],
  plugins: [
    sveltekit(),
    // {
    //   name: 'client-config',
    //   config(config) {
    //     if (config.build?.ssr) return config;
    //     config.build = config.build ?? {};
    //     config.build.rollupOptions = config.build?.rollupOptions ?? {};
    //     config.build.rollupOptions.output = {
    //       ...config.build.rollupOptions.output,
    //       chunkFileNames: '_app/immutable/chunks/[name]_[hash].js',
    //       manualChunks(id) {
    //         if (id.includes('node_modules/svelte')) return 'svelte';
    //         else if (id.includes('node_modules/motion')) return 'motion';
    //         else if (id.includes('node_modules')) return 'shared';
    //         else if (id.includes('assets/')) return 'assets';
    //         return 'index';
    //       },
    //     };
    //     return config;
    //   },
    // },
  ],
});
