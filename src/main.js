import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VueMoment from 'vue-moment'
import { store } from '@/stores'

Vue.config.productionTip = false

Vue.use(VueMoment);
require('dotenv').config()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
