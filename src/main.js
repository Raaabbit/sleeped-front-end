import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

Vue.use(VueLazyload)
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
