<template>
  <div class="play">
    <img :src="coverImgUrl" alt="" class="backgroundImg">
    <div class="container">
      <span class="hiddenPlay" @click="hiddenPlay()"><i class="icon icon-down"></i></span>
      <div class="img-wrapper">
        <img :src="coverImgUrl" alt="">
      </div>

      <div class="progressBar">
        <div class="progress"></div>
        <div class="indicater" :style="{width:indicatorPosition+'%'}"></div>
        <div class="time" v-if="currentTime">
          <span>{{currentTime}}</span>
          <span>{{duration}}</span>
        </div>
      </div>

      <h1 class="music-name">{{song.name}}</h1>
      <p class="music-author">{{song.singer | singer}}</p>

      <Lyric :songid="song.id" :currentTime="currentTime"></Lyric>

      <div class="music-ctrl">
        <p class="like-wrapper"><i class="icon" :class="playMode" @click="changePlayMode"></i></p>
        <p>
          <i class="icon icon-lastsong" @click="lastSong"></i>
          <span @click="setplay">
            <i class="icon" :class="playing? 'icon-nowplay' : 'icon-stoplay'"></i>
          </span>
          <i class="icon icon-nextsong" @click="nextSong"></i>
        </p>
        <p class="list-wrapper"><i class="icon icon-list"></i></p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapState} from 'vuex'
  import Lyric from './lyric'
  export default {
    components: {
      Lyric
    },

    filters: {
      singer: val => {
        if (typeof val === 'string') {
          return val
        } else if (val instanceof Array) {
          let singer = ''
          val.forEach(item => {
            singer = singer + item.name + ' '
          })
          return singer
        }
      }
    },

    data () {
      return {

      }
    },

    computed: {
      // 获取正在播放歌曲的图片   已播放时间    歌曲总时长
      ...mapGetters([
        'coverImgUrl', 'currentTime', 'duration'
      ]),

      ...mapState({
        // 歌曲播放链接
        songUrl (state) {
          return 'http://dl.stream.qqmusic.qq.com/C400' + state.song.mid + '.m4a?guid=5139280120&vkey=95943BDFCCD6D2446F81DBB7FBEFA23370CC767508BBE08CD8B5642116AE12BB96E44E6B853C2AB809B1D8E5E816721BE985974AA9769586'
        },
        indicatorPosition: state => state.currentTime / state.duration * 100,    // 播放进度条占比
        playing: state => state.playing,        // 播放状态
        song: state => state.song,              // 播放歌曲信息
        playMode (state) {
          let Mode = ''
          switch (state.playMode) {
            case 'single':
              Mode = 'icon-single'
              break
            case 'loop':
              Mode = 'icon-loop'
              break
            case 'random':
              Mode = 'icon-random'
              break
          }
          return Mode
        }
      })
    },

    props: {

    },
    methods: {
      // 隐藏播放页面
      hiddenPlay () {
        this.$emit('hiddenPlay')
      },

      // 播放或者暂停
      setplay () {
        // 改变播放状态
        this.$store.state.playing = !this.$store.state.playing
      },

      // 上一曲
      lastSong () {
        const state = this.$store.state
        // 通过取余的方式解决歌曲下标为0时的情况
        state.index = (state.index - 1 + state.playList.length) % state.playList.length
        state.song = state.playList[state.index]
      },

      // 下一曲
      nextSong () {
        const state = this.$store.state
        state.index = (state.index + 1 + state.playList.length) % state.playList.length
        state.song = state.playList[state.index]
      },

      // 改变播放方式
      changePlayMode () {
        const state = this.$store.state
        switch (state.playMode) {
          case 'single':
            state.playMode = 'loop'
            break
          case 'loop':
            state.playMode = 'random'
            break
          case 'random':
            state.playMode = 'single'
            break
        }
      }
    }
  }

</script>

<style lang="scss">
  @import "../sass/_base.scss";

  .play {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 5;

    .backgroundImg {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      filter: blur(25px);
    }

    .container {
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      position: relative;

      .hiddenPlay {
        position: absolute;
        left: px2rem(10);
        top: px2rem(25);
        display: inline-block;
        width: px2rem(20);
        height: px2rem(20);
        text-align: center;
        line-height: px2rem(20);
        background-color: #fff;
        border-radius: 50%;

        i {
          font-size: px2rem(18);
          color: #ccc;
        }
      }

      .img-wrapper {
        font-size: 0;
        background-color: black;

        img {
          width: 100%;
        }
      }

      .progressBar {
        position: relative;

        .progress {
          height: px2rem(5);
          background-color: #ccc;
        }

        .time {
          display: flex;
          padding: 0 px2rem(10);

          span {
            flex: 1;
          }

          span:last-child {
            text-align: right;
          }
        }

        .indicater {
          position: absolute;
          height: px2rem(5) ;
          width: 1%;
          top: 0;
          left: 0;
          background-color: #e4393c;
          z-index: 5;
        }

      }

      .music-name {
        text-align: center;
        font-size: px2rem(18);
      }

      .music-author {
        text-align: center;
        font-size: px2rem(12);
        color: #8f8f8f;
      }

      .music-ctrl {
        position: fixed;
        width: 100%;
        padding: 0 4%;
        font-size: 0;
        bottom: 0;
        height: px2rem(60);
        line-height: px2rem(60);

        p {
          display: inline-block;
          font-size: px2rem(35);
          text-align: center;
          width: 70%;

          span {
            margin: 0 px2rem(20);
          }
        }

        .like-wrapper {
          width: 10%;
        }

        .list-wrapper {
          width:10%;
          text-align: right;
        }
      }
    }
  }
</style>
