import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/todo.vue'),
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('../views/show.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
