import axios from '../../src/index'
axios({
  method: 'post',
  url: '/extend/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})
//
axios('/extend/post', {
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})

axios
  .request({
    method: 'post',
    url: '/extend/post',
    responseType: 'json',
    data: {
      a: 1,
      b: 2
    }
  })
  .then(res => {
    console.log(res)
  })
axios.get('/extend/get').then(res => {
  console.log(res)
})
axios.options('/extend/options').then(res => {
  console.log(res)
})
axios.delete('/extend/delete').then(res => {
  console.log(res)
})
axios.head('/extend/head').then(res => {
  console.log(res)
})
axios.post('/extend/post', { msg: '111' }).then(res => {
  console.log(res)
})
axios.put('/extend/put', { msg: '111' }).then(res => {
  console.log(res)
})
axios.patch('/extend/patch', { msg: '111' }).then(res => {
  console.log(res)
})

// 泛型
interface responseData<T = any> {
  code: number
  result: T
  message: string
}
interface user {
  name: string
  age: number
}
function getUser<T>() {
  return axios<responseData<T>>('/extend/user')
}
async function test() {
  const res = await getUser<user>()
  if (res.data.code === 0) {
    let data = res.data
    console.log(data.result)
    console.log('/extend/user')
  }
}
test()
