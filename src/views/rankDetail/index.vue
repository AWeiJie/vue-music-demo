<template>
  <div class="rankDetail">
    <!-- 头部背景大图 -->
    <img :src="imgUrl" alt="" class="backgroundImg">
    <div class="container">
      <!-- 页面头部返回 -->
      <header :style="{background:background}" :class="{dark:isDark}"><span @click="out()"><i class="icon icon-out"></i> 排行榜</span></header>
      <!-- 空白占区容器 -->
      <div class="slot"></div>
      <!-- 大标题列表头部 -->
      <div class="header-wrapper" ref="header" v-if="list" :style="{background:gradientcolor}"
      :class="{dark:isDark}">
        <div>
          <h1>{{list.topinfo.ListName}}</h1>
          <p class="listenNum">{{(list.topinfo.listennum / 10000).toFixed(1)}}万</p>
        </div>
        <div class="icon-wrapper">
          <i class="icon icon-play" @click="play(0)"></i>
        </div>
      </div>
      <!-- 歌曲列表 -->
      <ul class="song-list">
        <li v-for="(n,index) in list.songlist" :key="index" :style="{background:color}" :class="{dark:isDark}">
          <div class="index">{{index+1}}</div>
          <div class="song" @click="play(index)">
            <p>{{n.data.songorig}}</p>
            <p class="singer" ><span v-for="(item,key) in n.data.singer" :key="key">{{item.name}}-</span>{{n.data.albumname}}</p>
          </div>
          <div class="icon-wrapper"><i>...</i></div>
        </li>
      </ul>
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
