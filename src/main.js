// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(MintUI)
/* eslint-disable no-new */
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})