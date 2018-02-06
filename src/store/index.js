import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playList: [],    // 播放歌曲列表
    index: 0,       // 正在播放的歌曲下标
    song: {
      name: 'MUSIC'
    },        // 正在播放歌曲歌手信息
    playing: false,    // 播放状态
    currentTime: 0,  // 已播放时间
    duration: 0,  // 总播放时长
    playMode: 'loop'   // 播放方式  单曲single 循环loop 随机random
  },

  actions,
  mutations,
  getters
})

