import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Post List',
    redirect: { name: 'PostDetail' }
  },
  {
    path: '/user/:title',
    name: 'PostDetail',
    component: () => import('/src/components/HelloWorld.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
