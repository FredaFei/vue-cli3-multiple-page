class Utils {
  setStorage(storage, storageKey, value) {
    window[storage] && window[storage].setItem(storageKey, JSON.stringify(value))
  }

  getStorage(storage, key) {
    return window[storage].getItem(key) && JSON.parse(window[storage].getItem(key))
  }

  concatSearch(params = {}) {
    let str = '?'
    for (let key in params) {
      str += `${key}=${params[key]}&`
    }
    const len = str.length - 1
    return len > 0 ? str.substr(0, len) : str.substr(0)
  }

  getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = this._getSearch().match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return null
  }
  _getSearch() {
    const href = window.location.href
    const index = href.indexOf('?')
    return index >= 0 ? href.substr(index + 1) : ''
  }
  parseQuery() {
    let search = this._getSearch()
    if (!search) {
      return false
    }
    let reg = /([^&=\s]+)[=\s]?([^&=\s]*)/g
    let obj = {}
    while (reg.exec(search)) {
      let key = RegExp.$1
      let value = RegExp.$2
      if (obj.hasOwnProperty(key) && value !== '') {
        obj[key] = [obj[key], value]
        continue
      }
      obj[key] = value
    }
    return obj
  }
}

export default new Utils()

export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
/**
 * 保留n位小数去尾
 */
export function toDecimal2(n) {
  if (typeof n === 'number' || typeof n === 'string') {
    const str = (Math.round(n * 100) / 100).toString()
    const index = str.indexOf('.')
    if (index === -1) {
      return str + '.00'
    }
    const result = str.substr(0, index + 1)
    return str.length - (index + 1) >= 2 ? result + str.substr(index + 1, 2) : result + str.substr(index + 1) + '0'
  }
  console.error('参数n的类型 只能是number或string')
  return -1
}
export function isWeChat() {
  return /MicroMessenger/i.test(window.navigator.userAgent)
}
/**
 * @return 1是ios，2是安卓
 */
export const judgeBrowser = ()=> {
  return /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(window.navigator.userAgent) ? 1 : 2
}
/**
 * PC or Mobile
 */
export const isMobile = ()=> {
  return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(window.navigator.userAgent) 
}
export function unescapeHTML(str) {
  let html = '' + str
  return html
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}
