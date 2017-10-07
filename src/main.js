// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueLodash, lodash)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:4000/api'
axios.defaults.headers.common = { 'Accept': 'application/json', 'Content-Type': 'application/json' }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
