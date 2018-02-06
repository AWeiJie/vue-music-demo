<template>
  <div class="hello">
    <div class="search-container">
      <Search @showSearchPage="showSearchPage" @hiddenSearchPage="hiddenSearchPage" @setKeyWord="setKeyWord">

      </Search>
    </div>
    <div class="wrapper" v-show="!showSearch">
      <ul class="nav">
        <li><router-link to="/">推荐</router-link></li>
        <li><router-link to="/rank">排行榜</router-link></li>
      </ul>
      <!-- 图片轮播 -->
      <div class="swipe-container">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(n,index) in swipeData" :key="index"><img :src="n.pic" alt="" @click="jump(n.id, n.type)"></mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 热门歌单-->
      <div class="hotlist-container">
        <h1 class="title">热门歌单</h1>
        <ul class="list">
          <li v-for="(n, index) in hotList" :key="index">
            <div class="img-container">
              <img :src="n.imgurl" alt="">
              <span><i class="icon icon-listen"></i> {{(n.listennum / 10000).toFixed(1)}}万</span>
            </div>
            <p class="describe">{{n.dissname}}</p>
            <p>{{n.author}}</p>
          </li>
        </ul>
      </div>
      <!-- MV首播 -->
      <ul class="mv-container">
        <li class="title">MV首播</li>
        <li v-for="(n,index) in mvList" :key="index">
          <a :href="`https://y.qq.com/portal/mv/v/${n.vid}.html`">
            <div class="img-container">
              <img :src="n.picurl" alt="">
              <span><i class="icon icon-video"></i> {{(n.listennum / 1000).toFixed(1)}}万</span>
              <p>{{n.mvdesc}}</p>
            </div>
            <p class="name">{{n.mvtitle}}</p>
            <p>发行时间：{{n.pub_date}}</p>
          </a>
        </li>
      </ul>
    </div>

    <div class="SearchPage-container" v-show="showSearch">
      <SearchPage ref="search"></SearchPage>
    </div>
  </div>
</template>

<script>
  import index from './index'

  export default index

</script>


<style lang="scss">
  @import "./index.scss";

</style>
