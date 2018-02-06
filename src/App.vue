<template>
  <div id="app">
    <transition name="page-slide">
     <router-view></router-view>
    </transition>
     <PlayBar @showPlay="playPage"></PlayBar>
     <transition name="play-slide">
      <Play @hiddenPlay="playPage" v-show="showPlay"></Play>
     </transition>
  </div>
</template>

<script>
import PlayBar from './components/playbar'
import Play from './components/play'

export default {
  name: 'app',

  data () {
    return {
      showPlay: false
    }
  },

  components: {
    PlayBar,
    Play
  },

  methods: {
    // 显示隐藏播放页面
    playPage () {
      this.showPlay = !this.showPlay
    },

    // 隐藏搜索框
    hiddenSearch () {
      this.shhowSearch = false
    }
  }
}
</script>

<style lang="scss">
@import "./sass/_reset.scss";
@import "./sass/_base.scss";

#app {
  font-size: px2rem(14);
  padding-bottom: px2rem(48);

  .search-wrapper {
    position: fixed;
    width: 100%;
    z-index: 4;
  }
}

  .page-slide-enter-active {
    transition: all .3s ease;
  }

  .page-slide-leave-active {
    transition: all .3s ease-out;
  }

  .page-slide-enter, .page-slide-leave-active {
    transform: translateX(-100%);
  }

  .play-slide-enter-active {
    transition: all .3s ease;
  }

  .play-slide-leave-active {
    transition: all .3s ease-out;
  }

  .play-slide-enter, .play-slide-leave-active {
    transform: translateY(100vh);
  }

</style>
