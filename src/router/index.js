import Vue from 'vue'
import Router from 'vue-router'
import StoreList from '@/components/StoreList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:id?',
      name: 'StoreList',
      component: StoreList
    }
  ]
})
