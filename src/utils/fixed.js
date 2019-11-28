function inWeiXinAndIos() {
  const ua = window.navigator.userAgent
  const inWeixin = /MicroMessenger/i.test(ua)
  const inIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua)
  return inWeixin && inIos
}

function weChatInputBug() {
  // 解决微信键盘收起页面不回弹，绑定事件错位的问题
  let myFunction
  if (inWeiXinAndIos()) {
    document.body.addEventListener('focusin', () => {
      clearTimeout(myFunction)
    })
    document.body.addEventListener('focusout', () => {
      clearTimeout(myFunction)
      myFunction = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }, 200)
    })
  }
}
export default weChatInputBug()