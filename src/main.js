import Vue from 'vue'
import App from './App.vue'

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
