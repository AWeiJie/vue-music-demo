<template>
  <div class="rank">
    <div class="search-container">
       <Search @showSearchPage="showSearchPage" @hiddenSearchPage="hiddenSearchPage" @setKeyWord="setKeyWord"></Search>
    </div>

    <div class="wrapper" v-show="!showSearch">
      <ul class="nav">
        <li><router-link to="/">推荐</router-link></li>
        <li><router-link to="/rank">排行榜</router-link></li>
      </ul>
      <ul class="rank-list">
        <li v-for="(item,index) in rankList" :key="index" :id="item.id" @click="showRank(item.id)">
          <div class="img-container">
            <img :src="item.picUrl" alt="">
            <span><i class="icon icon-listen"></i> {{(item.listenCount / 10000).toFixed(1)}}万</span>
          </div>
          <div>
            <h2>{{item.topTitle}}</h2>
            <p v-for="(n,key) in item.songList" :key="key">
              {{key+1}} <span class="name">{{n.songname}}</span> - {{n.singername}}
            </p>
          </div>
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
