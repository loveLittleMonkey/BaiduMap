import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main/main'
import secondary from '../components/secondary/secondary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/secondary',
      name: 'secondary',
      component: secondary
    }
  ]
})
