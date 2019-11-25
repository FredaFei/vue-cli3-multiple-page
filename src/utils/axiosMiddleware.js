import axios from 'axios'

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
// http://dev.xx.com
// http://prod.xx.com
const axiosMiddleware = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://prod.xx.com' : '',
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
    if (res_code === 999) {
      // todo 跳登录
      return Promise.reject(res)
    }
    //请求失败
    if (res_code === 0) {
      return Promise.reject(res)
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default axiosMiddleware
