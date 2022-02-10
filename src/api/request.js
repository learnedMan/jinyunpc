import axios from 'axios' // 引入axios
import { Message } from 'element-ui';
import { BASE_URL } from './config'
// create an axios instance

const service = axios.create({
    baseURL: BASE_URL, // url = base url + request url
    timeout: 60000 // request timeout
})
// 请求拦截器，拦截请求前对数据进行处理
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config
}, error => {
    Message({
        showClose: true,
        message: error,
        duration:5000,
        type: "error.data.error.message"
    });
    return Promise.reject(error.data.error.message)
})

// http response 拦截器
service.interceptors.response.use(
    response => {
        // console.log(response)
        if (response.data.code == 200 || response.headers.success === 'true') {
            return response.data
        } else {
          Message({
              showClose: true,
              message: response.data.msg || decodeURI(response.headers.msg),
              type: 'error',
          })
            return Promise.reject(response.data.msg)
        }
    },
    error => {
        message.error(error)
        return Promise.reject(error)
    }
)
export default service
