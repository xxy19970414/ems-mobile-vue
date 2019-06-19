// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueCookie from 'vue-cookie'
import httpRequest from '@/utils/httpRequest'
import $ from 'jquery'

Vue.use(VueCookie)
Vue.prototype.$http = httpRequest// ajax请求方法
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
