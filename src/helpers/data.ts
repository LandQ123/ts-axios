import { isPlantObject } from './utils'
export function transformRequest(data: any): any {
  if (isPlantObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
/**
 * 请求没设置responseType时，返回的data为字符串，即便是对象，如果是对象则解析成对象形式
 */
export function transformResponseDatas(data: any): any {
  try {
    data = JSON.parse(data)
  } catch (e) {
    // do nothing
  }
  return data
}
