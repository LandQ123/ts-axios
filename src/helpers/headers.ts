import { isPlantObject } from './utils'
function normalizeHederName(headers: any, normalizeHederName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizeHederName && name.toUpperCase === normalizeHederName.toUpperCase) {
      headers[normalizeHederName] = headers[name]
      delete headers[name]
    }
  })
}
export function processHeaders(headers: any, data: any): any {
  normalizeHederName(headers, 'Content-Type')
  if (isPlantObject(data)) {
    if (headers && !headers['Content-Type']) {
      // 如果没有传Content-Type，默认application/json;charset=utf-8
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
/**返回的headers是字符串形式，解析成对象行使
 * date: Sun, 20 Oct 2019 07:39:32 GMT↵etag: W/"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k↵connection: keep-alive↵x-powered-by: Express↵
 */
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) return
  headers.split('\r\n').forEach(line => {
    // 通过回车换行符分隔开
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) return
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
