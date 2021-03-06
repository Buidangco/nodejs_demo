import moment from 'moment'
import { BN_API } from '@/api'

export function getDaysInMonth(month, year) {
  // Here January is 1 based
  // Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate()
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate()
}

export function formatDate({date = new Date(), format = 'YYYY-MM-DD'}) {
  return moment(date).format(format)
}

export function toVND (number = 0) {
  let x = number
  x = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'})
  return x
}

export function getPreviousMonth({date = new Date(), format = 'YYYY-MM-DD'}) {
  return moment(date).subtract(1, 'months').endOf('month').format(format)
}

/** Lấy ngày đầu tiên của tháng */
export function getFirstDayInMonth(date = null) {
  if (date) {
    date = new Date(date)
  } else {
    date = new Date()
  }

  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/** Lấy ngày cuối cùng của tháng */
export function getLastDayInMonth(date = null) {
  if (date) {
    date = new Date(date)
  } else {
    date = new Date()
  }

  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/** Check variable is Object */
export function isObject(obj = {}) {
  return typeof obj === 'object' && obj !== null
}

/** Check Object is empty */
export function isObjectEmpty(obj = {}) {
  return isObject(obj) && Object.keys(obj).length === 0 && obj.constructor === Object
}

export function isMobile() {
  let sUserAgent = navigator.userAgent.toLowerCase()
  let bIsIpad = /ipad/i.test(sUserAgent)
  let bIsIphoneOs = /iphone os/i.test(sUserAgent)
  let bIsMidp = /midp/i.test(sUserAgent)
  let bIsUc7 = /rv:1.2.3.4/i.test(sUserAgent)
  let bIsUc = /ucweb/i.test(sUserAgent)
  let bIsAndroid = /android/i.test(sUserAgent)
  let bIsCE = /windows ce/i.test(sUserAgent)
  let bIsWM = /windows mobile/i.test(sUserAgent)
  let bIsWx = /MicroMessenger/i.test(sUserAgent)

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsWx) {
    return true
  }
  return false
}

/** Get name Browser */
export function getBrowser() {
  return navigator.userAgent
}

/** Get IP v4 client */
export async function getIPv4() {
  const data = await BN_API.get('https://api.ipify.org/?format=json')

  return data
}

/** Get GEO location from IP address of client */
export async function getLocaltionGeoIP(ip = '8.8.8.8') {
  const data = await BN_API.get(`https://freegeoip.app/json/${ip}`)
  // (`https://api.ipgeolocationapi.com/geolocate/${ip}`)
  // (`http://ip-api.com/json/${ip}`)
  // (`https://freegeoip.app/json/${ip}`)

  return data
}
