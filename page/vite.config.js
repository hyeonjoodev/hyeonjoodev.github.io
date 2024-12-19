import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { plugin as markdown } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    vue(),
    markdown({
      mode: ['vue', 'html']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }

  // build: {
  //   outDir: '../'
  // }
});
