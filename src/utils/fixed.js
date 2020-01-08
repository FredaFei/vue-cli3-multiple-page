import { isWeChat, judgeBrowser } from './util'

function weChatInputBug() {
  // 解决微信键盘收起页面不回弹，绑定事件错位的问题
  let clock
  // wx & ios
  if (isWeChat() && judgeBrowser() === 1) {
    document.body.addEventListener('focusin', () => {
      window.clearTimeout(clock)
    })
    document.body.addEventListener('focusout', () => {
      window.clearTimeout(clock)
      clock = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }, 200)
    })
  }
}
export default weChatInputBug()