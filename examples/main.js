import Vue from 'vue'
import Bravo from 'bravo'
import '@a/styles/index.scss'
Vue.use(Bravo)

import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')