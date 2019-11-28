import axios from 'axios'
import utils from './util'

export function addTokenAndKeyParams(options = {}) {
  const base = {
    oauth_token: utils.getQueryString('oauth_token'),
    appkey: utils.getQueryString('appkey')
  }
  return Object.assign(base, options)
}
const baseOption = {
  baseURL: process.env.NODE_ENV === 'development' ? 'https://dev.xx.cn' : '',
  timeout: 10000
}
const baseParams = {
  version: '1.0',
  ts: parseInt(new Date().getTime() / 1000)
}

function qs(data) {
  let ret = ''
  const resultData = Object.assign({ ...baseParams }, data || {})
  for (let it in resultData) {
    ret += `${encodeURIComponent(it)}=${encodeURIComponent(resultData[it])}&`
  }
  return ret
}

const http = (options = {}) => {
  if (!options.method || options.method.toLowerCase() === 'get') {
    options.params = { ...options.params, ...baseParams }
  }
  return new Promise((resolve, reject) => {
    axios({
      ...options,
      ...baseOption,
      transformRequest: [
        function(data) {
          return typeof data == 'string' ? data : qs(data)
        }
      ]
    }).then(
      res => {
        const { data } = res
        //登录失效code则返回登录页
        if (+data.res_code === 4) {
          // todo 跳登录
          return reject(data)
        }
        //请求失败
        if (+data.res_code === 0) {
          return reject(data)
        }
        return resolve(data)
      },
      error => {
        return reject(error.data)
      }
    )
  })
}
export default http

