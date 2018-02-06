<template>
  <div class="lyric">
    <ul>
      <li v-for="(n,index) in currentLyric" :key="index" :class="index === 1? 'action': ''">{{n}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Base64 from '../utils/base64'

  export default {
    components: {

    },

    data () {
      return {
        lyric: null
      }
    },

    computed: {
      // 获得当前播放到的歌词
      currentLyric: function () {
        if (this.lyric !== null) {
          let that = this
          let pastLyric = []
          let i = 0
          Object.keys(this.lyric).forEach((key) => {
            const keys = key.split(':').reduce((a, b) => parseInt(a) * 60 * 100 + b.split('.')
                  .reduce((a, b) => parseInt(a) * 100 + parseInt(b))) - 120
            if (keys <= that.currentTimeStamp) {
              pastLyric.push(that.lyric[key])
            } else if (i <= 1 && that.lyric[key] !== '\n') {
              pastLyric.push(that.lyric[key])
              i++
            }
          })
          return pastLyric.slice(pastLyric.length - 4, pastLyric.length - 1)
          // return []
        }
      },

      currentTimeStamp: function () {
        let t = this.currentTime.split(':')
        return (parseInt(t[0]) * 60 + parseInt(t[1])) * 100
      }
    },

    watch: {
      // 当歌曲ID变化时获得全部歌词
      songid () {
        this.$store.dispatch('getLyric', this.songid).then((responce) => {
          // Base64转换，获得全部歌词
          this.lyric = Base64.decode(responce.data.lyric).split('[').slice(5).map(str => {
            let t = str.split(']')
            return {[t[0]]: t[1]}
          }).reduce((a, b) => {   // 遍历对象提取值，a为已遍历值的合并对象，b为当前遍历到的值
            return {...a, ...b}     // 返回一个对象
          })
        })
      }
    },

    props: {
      // 歌曲ID
      songid: {
        default: ''
      },
       // 歌曲已播放时间
      currentTime: {
        default: 0
      }
    },
    methods: {

    }
  }

</script>

<style lang="scss">
  @import "../sass/_base.scss";

  .lyric {
    height: px2rem(140);
    margin-top: px2rem(10);
    overflow: hidden;

    li {
      text-align: center;
      line-height: px2rem(50);
      color: #4d4d4d;
    }

    .action {
      color: #000;
      font-size: px2rem(16);
    }
  }

</style>
