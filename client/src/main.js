import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

Vue.config.productionTip = false

const instance = axios.create({
  baseURL: 'http://localhost:8081/api'
})

Vue.use(VueAxios, instance)
Vue.use(VueLodash, { name: 'custom', lodash: lodash })
Vue.use(VueToast)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
