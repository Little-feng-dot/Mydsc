import ajax from '@/api/ajax'

const Dsc_Base_URL = '/api'
    // const eg_Base_URL = '/api2'

export const swipeData = () => ajax("http://114.215.173.225:3000/api/v1/index/swipe")
export const categoryData = () => ajax(Dsc_Base_URL + "/catalog/list")
export const login = (params) => ajax('http://114.215.173.225:3000/api/v1/users/Login', params, 'post')
export const detail = (params) => ajax(Dsc_Base_URL + '/goods/show', params, 'post')