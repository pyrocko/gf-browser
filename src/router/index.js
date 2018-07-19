import Vue from 'vue'
import Router from 'vue-router'
import StoreList from '@/components/StoreList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StoreList',
      component: StoreList
    }
  ]
})
