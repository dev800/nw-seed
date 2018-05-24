import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  hashbang: true,
  history: true,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
