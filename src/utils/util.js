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

export function formatDate(date, fmt='yyyy-MM-dd hh:mm:ss') {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

export function unescapeHTML(str){
  let html = "" + str;
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}

