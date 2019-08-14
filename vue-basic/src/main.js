import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Heads from "./components/Heads";
import News from "./components/News";
const routes = [
  {path:'/heads',component:Heads},
  {path:'/news',component:News},
]
const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //路由挂载
  router,
}).$mount('#app')
