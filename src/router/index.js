import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/paging/shouye.vue'
import fujin from '@/paging/fujin.vue'
import dingdan from '@/paging/dingdan.vue'
import dingdan1 from '@/paging/dingdan1.vue'
import gengduo from '@/paging/gengduo.vue'
import pinpaicaiyao from '@/jshouyecaiyao/pinpaicaiyao.vue'
import xinpintuijian from '@/jshouyecaiyao/xinpintuijian.vue'
import zhekouzhuanqu from '@/jshouyecaiyao/zhekouzhuanqu.vue'
import remencaiyao from '@/jshouyecaiyao/remencaiyao.vue'
import caipinfenlei from '@/jshouyecaiyao/caipinfenlei.vue'
import meishisousuo from '@/jshouyecaiyao/meishisousuo.vue'
import yunfushipu from '@/jcaipinfenlei/yunfushipu.vue'
import shuaigeshipu from '@/jcaipinfenlei/shuaigeshipu.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/fujin',
      name: 'fujin',
      component: fujin
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/dingdan1',
      name: 'dingdan1',
      component: dingdan1
    },
    {
      path: '/gengduo',
      name: 'gengduo',
      component: gengduo
    },
    {
      path: '/pinpaicaiyao',
      name: 'pinpaicaiyao',
      component: pinpaicaiyao
    },
    {
      path: '/xinpintuijian',
      name: 'xinpintuijian',
      component: xinpintuijian
    },
    {
      path: '/zhekouzhuanqu',
      name: 'zhekouzhuanqu',
      component: zhekouzhuanqu
    },
    {
      path: '/remencaiyao',
      name: 'remencaiyao',
      component: remencaiyao
    },
    {
      path: '/caipinfenlei',
      name: 'caipinfenlei',
      component: caipinfenlei
    },
    {
      path: '/meishisousuo',
      name: 'meishisousuo',
      component: meishisousuo
    },
    {
      path: '/yunfushipu',
      name: 'yunfushipu',
      component: yunfushipu
    },
    {
      path: '/shuaigeshipu',
      name: 'shuaigeshipu',
      component: shuaigeshipu
    }
  ]
})
