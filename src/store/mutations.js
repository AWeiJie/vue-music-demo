export default {
  // 获得播放歌曲数据  playList接收的是一个对象
  setPlayList (state, playList) {
    state.playList = playList.list
    state.index = playList.index
    state.song = state.playList[state.index]
    console.log(state.song.mid)
  },

  // 改变播放状态
  play (state) {
    state.playing = true
  },

  // 获得歌曲已播放时间
  updateCurrentTime (state, time) {
    state.currentTime = time
  },

  // 获得歌曲全部播放时长
  updateDuration (state, time) {
    state.duration = time
  },

  // 歌曲播放完毕回调
  playContinue (state) {
    switch (state.playMode) {
      case 'single':
        break
      case 'loop':
        state.index = (state.index + 1) % state.playList.length
        state.song = state.playList[state.index]
        break
      case 'random':
        state.index = Math.floor(Math.random() * state.playList.length)
        state.song = state.playList[state.index]
        break
    }
  }
}
