import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import path from 'path';
// import { prerender } from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }), // .md 파일도 처리 가능하게 설정
    Markdown() // Markdown 플러그인 추가
    // prerender({
    //   // 프리렌더링할 경로를 지정
    //   routes: [
    //     '/', // 메인 페이지
    //     '/page' // 추가 페이지 예시
    //   ]
    // })
    // vitePrerender({
    //   staticDir: path.join(__dirname, '../'),
    //   routes: ['/', '/about', '/some/deep/nested/route']
    // })
  ],
  build: {
    outDir: '../'
  }
});
