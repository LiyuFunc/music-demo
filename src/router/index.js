import VueRouter from 'vue-router'
import Vue from 'vue'
import find from '../view/find'
import latest from '../view/latest'
import mv from '../view/mv'
import playMusic from '../view/playMusic'
import playMv from '../view/playMv'


Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      path:'/find',
      component:find
    },
    {
        path:'/latest',
        component:latest
      },
      {
        path:'/mv',
        component:mv
      },
    {
        path:'*',
        redirect:"/find"
      },
      {
        path:'/playMusic',
        component:playMusic
      },
      {
        path:'/playMv',
        component:playMv
      },
  ]
})

export default router;