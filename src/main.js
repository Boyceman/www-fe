// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import utils from './utils'
import router from './routes/router'
import resource from 'vue-resource'
import { getDataFromLs } from './utils/localstorage'
import progressive from 'progressive-image/dist/vue'

Vue.config.productionTip = false

Vue.use(resource)

Vue.http.interceptors.push((request, next) => {
  request.headers.set('authorization', getDataFromLs('token'))
  request.headers.set('Content-Type', 'application/x-www-form-urlencoded')
  next()
})

Vue.use(progressive, {
  removePreview: false,
  scale: true
})

Vue.mixin({
  created: function () {
    this.$utils = utils
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  utils,
  template: '<App/>',
  components: { App }
})
