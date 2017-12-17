// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import vueECharts from 'vue-echarts'
// import mock from './mockjs/index'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
let vm = ''
// 添加请求拦截
axios.interceptors.request.use(config => {
  console.log('请求前')
  return config
}, error => {
  console.log('请求前错误')
  return Promise.reject(error)
})
// 添加响应拦截
axios.interceptors.response.use(response => {
  console.log('请求后')
  return response.data
}, ({response}) => {
  if (response.status === 403) {
    vm.$router.replace('/login')
  } else {
    vm.$message.error(response.data.msg)
  }
  return Promise.reject(response)
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueECharts)
Vue.component('chart', vueECharts)
Vue.config.baseUrl = 'http://www.baidu.com'
if (process.env.NODE_ENV === 'development') { // 生产环境
  Vue.config.baseUrl = ''
  // mock.bootStrap()
}
/* eslint-disable no-new */
vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
