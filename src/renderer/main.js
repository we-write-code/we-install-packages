import Vue from 'vue'
import VueRx from 'vue-rx'
import { Axios } from 'axios-observable'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueRx)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
