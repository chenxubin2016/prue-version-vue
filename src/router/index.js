import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/components/layout'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/home')
        },
        {
          path: '/swiperTest',
          component: () => import('@/views/swiperTest')
        }
      ]
    }
  ]
});
