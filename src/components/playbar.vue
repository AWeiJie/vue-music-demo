<template>
  <div class="playbar">
    <ul>
      <li class="img" @click="showPlay()"><img :src="coverImgUrl" alt=""></li>
      <li class="name">{{song.name}}</li>
      <li class="icon-wrapper" @click="setplay">
        <i class="icon" :class="playing ? 'icon-nowplay' : 'icon-stoplay'"></i>
      </li>
    </ul>
    <div  v-if="$store.state.song.id">
      <audio ref="music" :src="songUrl" autoplay  @timeupdate="updateTime" @ended="playContinue"></audio>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapState, mapMutations} from 'vuex'

  export default {
    components: {

    },

    data () {
      return {

      }
    },

    computed: {
      // 获取正在播放歌曲的图片
      ...mapGetters([
        'coverImgUrl'
      ]),

      ...mapState({
        // 歌曲播放链接
        songUrl (state) {
          return 'http://dl.stream.qqmusic.qq.com/C400' + state.song.mid + '.m4a?guid=5139280120&vkey=95943BDFCCD6D2446F81DBB7FBEFA23370CC767508BBE08CD8B5642116AE12BB96E44E6B853C2AB809B1D8E5E816721BE985974AA9769586'
        },
        playing: state => state.playing,        // 播放状态
        song: state => state.song              // 播放歌曲信息
      })
    },

    props: {

    },

    watch: {
      playing () {
        const music = this.$refs.music
        if (music) {
          this.playing ? music.play() : music.pause()
        }
      }
    },

    methods: {
      // 播放或者暂停
      setplay () {
        // 改变播放状态
        this.$store.state.playing = !this.$store.state.playing
        const music = this.$refs.music
        // 翻转逻辑，待解决？？
        this.playing ? music.play() : music.pause()
      },

      // 显示播放页面
      showPlay () {
        this.$emit('showPlay')
      },

      // 歌曲播放过程触发方法 获得已播放时间 & 歌曲总时长
      updateTime () {
        const music = this.$refs.music
        this.$store.commit('updateCurrentTime', parseInt(music.currentTime))
        this.$store.commit('updateDuration', parseInt(music.duration))
      },

      // 歌曲播放完毕回调
      ...mapMutations([
        'playContinue'
      ])
    }
  }

</script>

<style lang="scss">
  @import "../sass/_base.scss";
  .playbar {
    width: 100%;
    position:fixed;
    bottom: 0;
    left: 0;
    height: px2rem(48);
    background-color: #fff;

    ul {
      height: px2rem(48);
      line-height: px2rem(48);
      display: flex;
      padding: 0 px2rem(10);

      li {
        flex: 1;
      }

      .img {
        flex: 0 0 10%;
        margin-right: px2rem(10);

        img {
          width: 100%;
          vertical-align: middle;
          border-radius: px2rem(3);
        }
      }

      .icon-wrapper {
        flex: 0 0 10%;
        line-height: px2rem(48);
        text-align: right;
        font-weight: 600;
        font-size: px2rem(18);
      }
    }
  }
</style>
