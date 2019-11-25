import axiosMiddleware from './axiosMiddleware'
import utils from './util'

export function addTokenAndKeyParams(options = {}) {
  return Object.assign({token: utils.getStorage('localStorage', 'token') || ''}, options)
}

const http = options => {
  let {url, method = 'get', ...rest} = options
  return new Promise((resolve, reject) => {
    axiosMiddleware({url, method, ...rest}).then(
      res => {
        resolve(res.data)
      },
      err => reject(err)
    )
  })
}
export default http
