// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-awesome/icons'
// import ElementUI from 'element-ui'
// import BootstrapVue from 'bootstrap-vue'

// import lodash from 'lodash'
import VueLodash from 'vue-lodash'

// import axios from 'axios'
import VueAxios from 'vue-axios'

import Icon from 'vue-awesome/components/Icon'
// import 'element-ui/lib/theme-default/index.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(ElementUI, BootstrapVue, VueLodash, lodash, VueAxios, axios)
Vue.use(VueLodash, VueAxios)

Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
