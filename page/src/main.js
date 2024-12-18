// import { createApp } from 'vue';
import { createSSRApp } from 'vue';
import App from './App.vue';
import createRouter from './router/index';

// createApp(App).use(router).mount('#app');

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
