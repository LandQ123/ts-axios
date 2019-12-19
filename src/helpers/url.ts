import { isDate, isPlantObject } from './utils'
/**
 * 参数encode编码，特殊字符串不编码
 * @param val 入参param类型
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@') // 编码后的特殊字符替换回来
    .replace(/%3A/gi, ':') // 带字幕A不区分大小写，加i匹配
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
// 拼接params参数
export const buildURL = (url: string, params?: any): string => {
  if (!params) {
    return url
  }
  const parts: string[] = [] // 字符串类型的数组
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return // 跳出本次循环，循环下一次
    }
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        // 如果是日期，转换为国际标准格式
        val = val.toISOString()
      } else if (isPlantObject(val)) {
        // 如果是对象，转换为字符串
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
    let serializedParams = parts.join('&')
    if (serializedParams) {
      const markIndex = url.indexOf('#')
      if (markIndex !== -1) {
        // 如果原本有#则去掉#
        url = url.slice(0, markIndex)
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }
  })
  return url
}
