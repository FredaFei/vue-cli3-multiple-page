import Vue from 'vue'
import App from './app'
import router from './router/index'
import 'babel-polyfill'
import '@/utils/rem'
import '@/utils/fixed'
import '../../assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
