
export default {
  // 获取正在播放歌曲的图片
  coverImgUrl (state) {
    if (typeof state.song.albummid === 'undefined') {
      return 'https://qlogo2.store.qq.com/qzone/1669514253/1669514253/100?1388689065'
    } else {
      return 'https://y.gtimg.cn/music/photo_new/T002R500x500M000' + state.song.albummid + '.jpg'
    }
  },

  // 获取现在播放歌曲的时间
  currentTime (state) {
    const minute = parseInt(state.currentTime) / 60
    const second = `0${String(state.currentTime % 60).slice(-2)}`
    return `${parseInt(String(minute))}:${second.slice(-2)}`
  },

  // 获取现在播放歌曲的总时长
  duration (state) {
    const minute = parseInt(state.duration) / 60
    const second = `0${String(state.duration % 60).slice(-2)}`
    return `${parseInt(String(minute))}:${second.slice(-2)}`
  }
}
