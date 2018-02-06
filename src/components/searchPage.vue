<template>
  <div class="searchPage">
    <ul class="hotkey-list" v-show="!searchData">
      <li v-for="(item,index) in hotkey" :key="index" @click="search(item.k)">
        {{index+1}} {{item.k}} <span>{{(item.n / 10000).toFixed(2)}}万</span>
      </li>
    </ul>

    <ul class="searchResult">
      <li v-for="(n,index) in searchData" :key="index">
        <h1>{{n.name}}</h1>
        <ul>
          <li v-for="(item, key) in n.itemlist" :key="key">{{item.name}}<span>-{{item.singer}}</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {

    },

    data () {
      return {
        hotkey: null,  // 热门搜索词
        searchData: null
      }
    },
    methods: {
      // 搜索歌曲
      search: function (key) {
        this.key = key
        this.$store.dispatch('search', key).then((response) => {
          this.searchData = response.data.data
        })
      }
    },

    created () {
      this.$store.dispatch('getHotKey').then((response) => {
        this.hotkey = response.data.data.hotkey.slice(0, 5)
      })
    }
  }

</script>

<style lang="scss">
  @import "../sass/_base.scss";

  .searchPage {
    background-color: #fff;

    .hotkey-list {
      font-size: px2rem(16);

      li {
        padding: px2rem(10);
      }


      span {
        float: right;
      }
    }

    .searchResult {
      h1 {
        font-size: px2rem(20);
        height: px2rem(40);
        line-height: px2rem(40);
        background-color: #eee;
        padding: 0 px2rem(10);
      }

      ul {
        li {
          padding: 0 px2rem(10);
          height: px2rem(30);
          line-height: px2rem(30);

          span {
            color: #929292;
          }
        }
      }
    }
  }

</style>
