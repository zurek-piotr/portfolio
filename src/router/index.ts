import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
