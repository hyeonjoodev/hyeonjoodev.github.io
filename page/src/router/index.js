import {
  createWebHistory,
  createMemoryHistory,
  createRouter as _createRouter
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: () => import('@/views/PostList.vue')
  },
  {
    path: '/page/:title',
    name: 'PostDetail',
    component: () => import('@/views/PostDetail.vue')
  }
];

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  });
}
