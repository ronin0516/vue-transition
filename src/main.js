import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/element-ui.css"
Vue.use(Element)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
