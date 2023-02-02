import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {Menu,MenuItem,Submenu} from 'element-ui'

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);


import BootstrapVue from 'bootstrap-vue'

import API from '@/api'
Vue.prototype.$API = API
 
Vue.use(BootstrapVue)
 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Slider from '@/components/Slider'

import 'swiper/css/swiper.css';

Vue.component('slider',Slider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
