import http, {addTokenAndKeyParams} from '@/utils/http'

export const getSlides = () => {
  return http({
    url: '/h5/adsPictureList'
  })
}