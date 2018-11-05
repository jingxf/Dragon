import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/paging/shouye.vue'
import fujin from '@/paging/fujin.vue'
import dingdan from '@/paging/dingdan.vue'
import gengduo from '@/paging/gengduo.vue'
import pinpaicaiyao from '@/jshouyecaiyao/pinpaicaiyao.vue'
import ditu from '@/ditu/ditu.vue'
Vue.use(Router)

export default new Router({
  routes: [{
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
      path: '/ditu',
      name: 'ditu',
      component: ditu
    }
  ]
})
