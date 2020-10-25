import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  afterEach(to, from) {
    window.history.pushState('', '', '/');
  },
  routes: [
    {
      path: '/',
    },
    {
      path: '/about',
      redirect: '/#about',
    },
    {
      path: '/omnie',
      redirect: '/#about',
    },
    {
      path: '/o-mnie',
      redirect: '/#about',
    },
    {
      path: '/projects',
      redirect: '/#projects',
    },
    {
      path: '/projekty',
      redirect: '/#projects',
    },
    {
      path: '/contact',
      redirect: '/#contact',
    },
    {
      path: '/kontakt',
      redirect: '/#contact',
    },
    {
      path: '/videoplayer',
      redirect: '/videoplayer/',
    },
  ],
});
