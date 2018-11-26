import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页，具有初级查询功能
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // 详情页面，用来访问预测曲线和酒店详细数据
      path: '/detail',
      name: 'about',
      component: () => import('./views/Details.vue')
    }
  ]
})
