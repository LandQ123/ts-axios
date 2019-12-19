const toString = Object.prototype.toString
export function isDate(val: any): val is Date {
  // 类型保护
  return toString.call(val) === '[object Date]'
}
// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }
// 普通对象
export function isPlantObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
// 混合类型拷贝
export function extend<T, U>(to: T, from: U): T & U {
  for (let key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
