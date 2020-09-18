import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Auth from '../views/Auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: Auth
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('user-token') == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    }
    next()
  } else {
    if (localStorage.getItem('user-token') == null) {
      next()
    } else {
      next({ name: 'home' })
    }
  }
})

export default router
