import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/swiperTest')
    }
    // {
    //   path: '/',
    //   name: 'layout',
    //   component: () => import('../components/layout'),
    //   redirect: '/home',
    //   children: [
    //     {
    //       path: '/home',
    //       component: () => import('../views/home')
    //     }
    //   ]
    // }
  ]
});
