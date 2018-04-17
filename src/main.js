// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './config/axios_config';
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import  './mock/mockServer'

Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.baseUrl = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
