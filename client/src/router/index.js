import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'register',
      component: Register
    }
  ]
})
