import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000 // request timeout
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200) {
      Message.closeAll()
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message.closeAll()
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service