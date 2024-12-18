import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: () => import('/src/views/PostList.vue')
    // redirect: { name: 'PostDetail' }
  },
  {
    path: '/page/:title',
    name: 'PostDetail',
    component: () => import('/src/views/PostDetail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default () => {
  return createRouter({
    history: createWebHistory(),
    routes
  });
};
