<template>
  <div class="search">
    <i class="icon icon-search"></i>
    <input type="text" placeholder="搜索 歌曲/专辑/歌手" @click="showSearchPage" v-model="keyWord">
    <span v-show="showSearch && !keyWord" @click="hiddenSearchPage">取消</span>
    <span v-show="keyWord" @click="setKeyWord">搜索</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    Search
  } from 'mint-ui'

  export default {
    components: {
      Search
    },

    data () {
      return {
        keyWord: '',
        showSearch: false
      }
    },
    methods: {
      showSearchPage () {
        this.showSearch = true
        this.$emit('showSearchPage')
      },

      hiddenSearchPage () {
        this.showSearch = false
        this.$emit('hiddenSearchPage')
      },

      setKeyWord () {
        this.$emit('setKeyWord', this.keyWord)
      }
    }
  }

</script>

<style lang="scss">
  @import "../sass/_base.scss";

  .search {
    position: relative;
    background-color: #fff;
    text-align: center;
    line-height: px2rem(60);
    display: flex;
    padding: px2rem(10);

    .icon-search {
      position: absolute;
      font-size: px2rem(25);
      top: px2rem(18);
      color: #949090;
    }


    input {
      flex: 1;
      height: px2rem(40);
      margin: 0 auto;
      border: none;
      background: #eee;
      font-size: px2rem(15);
      border-radius: 5px;
      outline: none;
      padding-left: px2rem(30);
    }

    span {
      flex: 0 0 10%;
      height: px2rem(40);
      line-height: px2rem(40);
      text-align: center;
    }
  }

</style>
