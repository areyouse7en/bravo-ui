import Vue from 'vue'

import Bravo from 'bravo'
import '@a/styles/index.scss'
Vue.use(Bravo)

import router from "./router"

import App from './App'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')