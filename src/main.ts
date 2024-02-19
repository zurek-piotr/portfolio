import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';

import './registerServiceWorker'
import router from './router'
import i18n from './i18n'

import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);
Vue.use(VueCookies);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
