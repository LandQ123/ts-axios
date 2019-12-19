import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../type'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponseDatas } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params) // 接口url可选属性，buildURL中必选，运行时可以判定url必定不会为undefind，加感叹号断言其不为空
}
function transformRequestData(config: AxiosRequestConfig): string {
  return transformRequest(config.data)
}
function transformHeaders(config: AxiosRequestConfig): string {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponseDatas(res.data)
  return res
}
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
