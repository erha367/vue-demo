import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import qs from 'qs';
import axios from 'axios';

Vue.use(ElementUI);
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
