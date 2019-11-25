import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/child1',
    name: 'child1',
    component: resolve => require(['@/pages/demo/child-1'], resolve),
    meta: {
      title: '4'
    }
  },
  {
    path: '/child2',
    name: 'child2',
    component: resolve => require(['@/pages/demo/child-2'], resolve)
  }
]
const router = new Router({routes})
export default router