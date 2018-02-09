import Vue from 'vue'
Vue.config.productionTip = false

import Bravo from 'bravo'
Vue.use(Bravo)

import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')