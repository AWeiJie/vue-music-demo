import Headers from '../../components/header'

export default {
  name: 'rankDetail',
  components: {
    Headers
  },

  data () {
    return {
      id: this.$route.query.id,
      list: '',
      opacity: 0
    }
  },

  computed: {
    // 获得顶部背景图片链接
    imgUrl: function () {
      if (this.list) {
        return this.list.topinfo.pic_album
      }
    },

    // 获得整体颜色基础
    color: function () {
      if (this.list) {
        var fixed = '00000' + this.list.color.toString(16)
        return '#' + fixed.substr(fixed.length - 6)
      } else {
        return '#ffffff'
      }
    },

    r: function () {
      return parseInt(this.color.slice(1, 3), 16)
    },

    g: function () {
      return parseInt(this.color.slice(3, 5), 16)
    },

    b: function () {
      return parseInt(this.color.slice(5, 7), 16)
    },

    // 获得标题头部的背景颜色
    gradientcolor: function () {
      return '-webkit-linear-gradient(top, rgba(' + this.r + ',' + this.g + ',' + this.b + ', 0), ' + this.color + ')'
    },

    // 获取字体颜色 判断是否为白色
    isDark: function () {
      var grayLevel = this.r * 0.299 + this.g * 0.587 + this.b * 0.114
      return (grayLevel < 192)
    },

    // 获得页面返回顶部的背景颜色   动态获取透明度
    background: function () {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.opacity + ')'
    }
  },

  methods: {
    // 返回上一页
    out () {
      this.$router.go(-1)
    },

    // 播放歌曲
    play (index) {
      let list = []
      this.list.songlist.forEach(item => {
        list.push({
          id: item.data.songid,    // 歌曲ID
          mid: item.data.songmid,   //
          name: item.data.songorig, // 歌曲名称
          singer: item.data.singer, // 歌手信息
          albummid: item.data.albummid  // 歌曲描述
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
    // 获取页面歌曲列表数据
    this.$store.dispatch('getRankSongs', this.id).then((response) => {
      this.list = response.data
      console.log(this.list)
    })

    // 根据滚动页面获得透明度
    let that = this
    window.onscroll = function () {
      const headerWrapper = that.$refs.header
      if (headerWrapper) {
        // 页面滚动的高度 / 标题头部的高度
        that.opacity = window.pageYOffset / headerWrapper.offsetHeight
      } else {
        that.opacity = 0
      }
    }
  }
}
