import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Heads from "./components/Heads";
import News from "./components/News";
import Contents from "./components/Content";
import User from "./components/User";
import UserAdd from "./components/User/UserAdd";
import UserList from "./components/User/UserList";

const routes = [
  {path:'/heads',component:Heads},
  {path:'/news',component:News},
  {path:'/user',component:User,children:[
      {path:'user_add',component:UserAdd},
      {path:'user_list',component:UserList},
    ]},
  {path:'/contents/:aid',component:Contents}, //动态路由
  {path:'*',redirect:'/heads'},
]
const router = new VueRouter({
  mode:'history', //默认是hash模式
  routes
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
