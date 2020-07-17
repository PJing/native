import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { WToast } from 'react-native-smart-tip'
import process from '../env'
// 接口地址
const baseUrl = process.baseUrl


// 使用create方法创建axios实例
const request = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 添加request请求拦截
request.interceptors.request.use(async (config) => {
  // loading
  // WToast.show({
  //   data: 'loading...',
  //   backgroundColor: '#555',
  //   duration: 10000, //1.SHORT 2.LONG 3.NUM
  //   position: WToast.position.CENTER, // 1.TOP 2.CENTER 3.BOTTOM
  //   // icon: <ActivityIndicator size="large" color="#0000ff" />
  // })
  try {
    const token = await AsyncStorage.getItem('token')
    config.headers['uc-token'] = token
  } catch{
    console.log('未获取到token')
  }
  console.log('请求信息：', JSON.stringify(config.data))
  return config
})
// 添加响应response拦截器
request.interceptors.response.use(response => {
  // WToast.hide()
  const res = response.data
  console.log('响应信息：', res)
  if (res.code !== 0) {
    WToast.show({data: res.msg})
    return Promise.reject(res)
  }
  return Promise.resolve(res)
}, error => {
  // WToast.hide()
  console.log('接口报错返回：', error)
})


export default request