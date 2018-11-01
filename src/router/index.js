import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/paging/shouye.vue'
import fujin from '@/components/paging/fujin.vue'
import dingdan from '@/components/paging/dingdan.vue'
import gengduo from '@/components/paging/gengduo.vue'

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
      path: '/gengduo',
      name: 'gengduo',
      component: gengduo
    }
  ]
})
