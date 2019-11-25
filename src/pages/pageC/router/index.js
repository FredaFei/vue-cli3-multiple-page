import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/child1',
    name: 'child1',
    component: resolve => require(['@/pages/pageC/child-1'], resolve),
    meta: {
      title: 'child1'
    }
  },
  {
    path: '/child2',
    name: 'child2',
    component: resolve => require(['@/pages/pageC/child-2'], resolve),
    meta: {
      title: 'child2'
    }
  }
]
const router = new Router({routes})
export default router