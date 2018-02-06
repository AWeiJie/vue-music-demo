import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/hello/index.vue'
import Rank from '@/views/Rank/index.vue'
import RankDetail from '@/views/rankDetail/index.vue'
import Album from '@/views/Album/index.vue'
import CD from '@/views/cd/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/rankdetail',
      name: 'RankDetail',
      component: RankDetail
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/cd',
      name: 'CD',
      component: CD
    }
  ]
})
