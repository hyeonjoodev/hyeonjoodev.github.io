import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // .md 파일도 처리 가능하게 설정
    }),
    Markdown() // Markdown 플러그인 추가
  ],
  build: {
    outDir: '../'
  }
});
