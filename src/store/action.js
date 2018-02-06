import Vue from 'vue'

import API from './create-api.js'

function apiFactory (api) {
  return (id = null) => Vue.http.jsonp(
    api.url,
    {
      params: api.params(id),
      jsonp: api.jsonp
    }
  )
}

export default {
  /* eslint-disable */

  // 推荐页面获取数据
  getRecommands({}){
    return apiFactory(API.first_page_data)()
  },

  // 排行榜页面获取数据
  getRankList({}){
    return apiFactory(API.rank_list)()
  },

  // 轮播图点击后获得专辑数据
  getAlbum({}, id){
    return apiFactory(API.album)(id)
  },

  // 获得CD页面数据
  getCdList({},id){
    return apiFactory(API.cd)(id)
  },

  // 获取排行榜详细数据
  getRankSongs({}, id){
    return apiFactory(API.rank_songs)(id)
  },

  // 获取播放歌曲的歌词
  getLyric({},id){
    return Vue.http.jsonp('https://api.darlin.me/music/lyric/'+id+'/',{
      jsonp:'callback'
    })
  },

  // 获取热门搜索词
  getHotKey({}){
    return apiFactory(API.hotkey)()
  },

  // 搜索歌曲
  search({}, key){
    return apiFactory(API.search)(key)
  },
}
