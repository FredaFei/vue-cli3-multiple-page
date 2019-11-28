import http, {addTokenAndKeyParams} from '@/utils/http'

export const getSlides = () => {
  return http({
    url: '/rest/image/index',
    params: addTokenAndKeyParams()
  })
}