import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../App.vue')
    },
    {
      path: '/about',
      redirect: '/#about'
    },
    {
      path: '/omnie',
      redirect: '/#about'
    },
    {
      path: '/o-mnie',
      redirect: '/#about'
    },
    {
      path: '/projects',
      redirect: '/#projects'
    },
    {
      path: '/projekty',
      redirect: '/#projects'
    },
    {
      path: '/contact',
      redirect: '/#contact'
    },
    {
      path: '/kontakt',
      redirect: '/#contact'
    }
  ]
})

export default router
