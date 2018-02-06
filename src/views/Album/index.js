import Headers from '../../components/header'

export default {
  name: 'Album',
  components: {
    Headers
  },

  data () {
    return {
      album: '',
      id: this.$route.query.id
    }
  },

  computed: {
    albumImgUrl: function () {
      return 'http://y.gtimg.cn/music/photo_new/T002R300x300M000' + this.id + '.jpg?max_age=2592000'
    }
  },

  methods: {
    // 播放歌曲
    play (index) {
      let list = []
      this.album.list.forEach(item => {
        list.push({
          id: item.songid,    // 歌曲ID
          mid: item.songmid,   //
          name: item.songorig, // 歌曲名称
          singer: item.singer, // 歌手信息
          albummid: item.albummid  // 歌曲描述
        })
      })
      // 使用vuex进行赋值
      this.$store.commit('setPlayList', {
        index: index,
        list: list
      })
      // 改变播放状态为播放中
      this.$store.commit('play')
    }
  },

  mounted () {

  },

  created () {
    this.$store.dispatch('getAlbum', this.id).then((response) => {
      this.album = response.data.data
      console.log(this.album)
    })
  }
}
