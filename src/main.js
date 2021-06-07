import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
// 导入elementUI插件
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
// 注册
Vue.use(elementUI);

Vue.filter('formatTime', (time) => {
  return moment(time).format("mm:ss")
})
Vue.filter('formatName', (arr) => {
  return arr.map(item => item.name).join('&');
})

// 全局注册插件
import musicList from './components/muiscList'
Vue.component("musicList",musicList);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
