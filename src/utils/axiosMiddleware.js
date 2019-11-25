import axios from 'axios'
// import router from '../router'
import Vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const baseParams = {
  version: '1.0',
  ts: parseInt(new Date().getTime() / 1000)
}

function qs(data) {
  let ret = ''
  const resultData = Object.assign({...baseParams}, data || {})
  for (let it in resultData) {
    ret += `${encodeURIComponent(it)}=${encodeURIComponent(resultData[it])}&`
  }
  return ret
}
// http://kaifa.ocepay.com
// http://moni.ocepay.com
const axiosMiddleware = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://moni.ocepay.com' : '',
  timeout: 10000
})
axiosMiddleware.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.params = Object.assign({...baseParams}, config.params || {})
    }
    if (config.method === 'post') {
      config.transformRequest = [qs]
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosMiddleware.interceptors.response.use(
  res => {
    const res_code = +res.data.res_code
    //登录失效code则返回登录页
    // if (res_code === 999) {
    //   Vue.prototype.$loading.stop()
    //   router.replace({
    //     name: 'login',
    //     query: {redirect: router.currentRoute.fullPath}
    //   })
    //   return Promise.reject(res)
    // }
    // 非交易时间
    if (res_code === 998) {
      return res
    }
    //请求失败
    if (res_code === 0) {
      Vue.prototype.$loading.stop()
      Vue.prototype.$toast(res.data.res_msg)
      return Promise.reject(res)
    }
    return res
  },
  error => {
    Vue.prototype.$loading.stop()
    Vue.prototype.$toast(error)
    return Promise.reject(error)
  }
)
export default axiosMiddleware
