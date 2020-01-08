// import http, { addTokenAndKeyParams } from '@/utils/http'

const mockRequest = (data, time = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(data)
    }, time)
  })
}
const baseData = { res_code: '1', res_msg: '操作成功' }
const mockData = ['haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha']

export const getProduct = () => {
  // return http({
  //   url: '/product',
  //   params: addTokenAndKeyParams()
  // })
  return mockRequest(Object.assign({}, baseData, { information_list: mockData }))
}
