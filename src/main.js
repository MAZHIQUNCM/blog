// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

//==>// 将 axios 添加的 Vue 原型上后就不需要再在每个需要使用它的页面引入了
Vue.prototype.$http = axios; 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
