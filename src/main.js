import Vue from 'vue'
import {Button} from 'mint-ui' // 加载mint-ui中的button
import app from './app'
import router from './router' // 加载路由组件
import store from './store'
import './mock/mockServer' // 加载mockServer即可
import './fiters' // 加载过滤器
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
// 注册全局组件
Vue.component(Button.name, Button)

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
