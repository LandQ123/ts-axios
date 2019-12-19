import axios from '../../src/index'
// 测试params的不通类型 处理url
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['baz', 'abc']
//   }
// })
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date: new Date()
//   }
// })
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'abc'
//     }
//   }
// })
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     bar: 'abc',
//     baz: null
//   }
// })
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '$# ,:'
//   }
// })
// axios({
//   method: 'get',
//   url: '/base/get#baz',
//   params: {
//     foo: 'abc'
//   }
// })
// axios({
//   method: 'get',
//   url: '/base/get?a=123',
//   params: {
//     foo: 'abc'
//   }
// })

// 对data处理
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     foo: 'abc'
//   }
// })

// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: new Int32Array([21, 32])
// })

// 对headers处理
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     foo: 'abc'
//   }
// })
// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json',
//     Accept: 'application/json,text/plain,*/*'
//   },
//   data: {
//     foo: 'abc'
//   }
// })
// const paramsString = 'q=abcd&a=1222222'
// const searchParams = new URLSearchParams(paramsString)
// axios({
//   method: 'post',
//   url: '/base/post',
//   // 如果是URLSearchParams类型，浏览器自动判断为formData，
//   // 添加上Content-Type: application/x-www-form-urlencoded;charset=UTF-8
//   data: searchParams
// })
/**
 * 检验返回值
 */
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})
axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})
