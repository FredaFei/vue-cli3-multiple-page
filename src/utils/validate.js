export default class Validator {
  constructor() {}

  static add(name, fn) {
    Validator.prototype[name] = fn
  }

  validate(data, rules) {
    let errors = {}
    rules.forEach(ruleItem => {
      let value = data[ruleItem.key]
      if (ruleItem.required) {
        let errorText = this.required(value)
        if (errorText) {
          ensureArray(errors, ruleItem.key)
          errors[ruleItem.key].push(errorText)
          return
        }
      }
      let validators = Object.keys(ruleItem).filter(
        key => key !== 'key' && key !== 'required'
      )
      validators.forEach(validator => {
        if (validator) {
          let errorText = this[validator](value, ruleItem[validator])
          if (errorText) {
            ensureArray(errors, ruleItem.key)
            errors[ruleItem.key].push(errorText)
          }
        } else {
          throw `不存在的验证器${validator}`
        }
      })
    })
    return errors
  }

  isEmpty(errors) {
    return Object.keys(errors).length <= 0
  }

  required(value) {
    if (!value && value !== 0) {
      return '必填'
    }
  }

  pattern(value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern === 'phone') {
      pattern = /^1\d{10}$/
    }
    if (pattern === 'idCard') {
      pattern = /(^[1-9]\d{14}$)|(^[1-9]\d{16}([0-9]|X)$)/
    }
    if (pattern === 'idBank') {
      pattern = /^[1-9]\d{14,20}$/
    }
    if (pattern.test(value) === false) {
      return '格式不正确'
    }
  }

  minLength(value, minLength) {
    if (value.length < minLength) {
      return `长度不能小于${minLength}位`
    }
  }

  maxLength(value, maxLength) {
    if (value.length > maxLength) {
      return `长度不能大于${maxLength}位`
    }
  }
}

function ensureArray(obj, key) {
  if (Object.prototype.toString.call(obj[key]) !== '[object Array]') {
    obj[key] = []
  }
}
