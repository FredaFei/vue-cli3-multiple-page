import Vue from 'vue'
import App from './app'
import 'babel-polyfill'
import '@/utils/rem'
import '../../assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
