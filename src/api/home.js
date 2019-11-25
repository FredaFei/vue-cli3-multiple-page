import http, {addTokenAndKeyParams} from '@/utils/http'

export const getSlides = () => {
  return http({
    url: '/h5/adsPictureList'
  })
}
export const getCurrencyList = (data) => {
  return http({
    url: '/h5/currencyExchangeList',
    params: data
  })
}
export const getPartner = () => {
  return http({
    url: '/h5/partnerList'
  })
}
export const getSiteList = (params) => {
  return http({
    url: '/h5/findSiteList',
    params
  })
}