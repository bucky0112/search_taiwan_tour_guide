import axios from 'axios'
import jsSHA from 'jssha'

const getAuthorizationHeader = () => {
  //  填入自己 ID、KEY 開始
  const AppID = import.meta.env.VITE_APP_ID
  const AppKey = import.meta.env.VITE_APP_KEY
  //  填入自己 ID、KEY 結束
  const GMTString = new Date().toGMTString()
  const JsSHA = jsSHA
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return { Authorization: Authorization, 'X-Date': GMTString }
}

const baseRequest = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/',
  headers: getAuthorizationHeader()
})

// 取得所有旅宿資料
export const apiGetAllHotel = (num1, num2) =>
  baseRequest.get(`Hotel?$top=${num1}&$skip=${num2}&$format=JSON`)

// 取得所有餐廳資料
export const apiGetAllRestaurant = (num1, num2) =>
  baseRequest.get(`Restaurant?$top=${num1}&$skip=${num2}&$format=JSON`)

// 取得所有餐廳資料
export const apiGetAllActive = (num1, num2) =>
  baseRequest.get(`Activity?$top=${num1}&$skip=${num2}&$format=JSON`)

// 取得指定縣市旅宿資料
export const apiGetCityHotel = (city, num1, num2) =>
  baseRequest.get(`Hotel/${city}?$top=${num1}&$skip=${num2}&$format=JSON`)

// 取得指定縣市餐廳資料
export const apiGetCityRestaurant = (city, num1, num2) =>
  baseRequest.get(`Restaurant/${city}?$top=${num1}&$skip=${num2}&$format=JSON`)

// 取得指定縣市餐廳資料
export const apiGetCityActive = (city, num1, num2) =>
  baseRequest.get(`Activity/${city}?$top=${num1}&$skip=${num2}&$format=JSON`)
