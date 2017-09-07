import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  routes: [
    {
      path: '/seller',
      name: '商家',
      component: seller
    },
    {
      path: '/goods',
      name: '商品',
      component: goods
    },
    {
      path: '/ratings',
      name: '評論',
      component: ratings
    }
  ]
})
