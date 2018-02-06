<template>
  <div class="Album">
    <img :src="albumImgUrl" alt="" class="backgroundImg">
    <div class="container">
      <Headers title="推荐"></Headers>
      <div class="top-container">
        <div class="img-container"><img :src="albumImgUrl" alt=""></div>
        <div>
          <h1 class="title">{{album.name}}-<span>{{album.singername}}</span></h1>
          <p v-if="album.list">{{album.list.length}}首歌曲</p>
          <p>{{album.genre}}&nbsp;&nbsp;{{album.lan}}</p>
          <p>发行时间:{{album.aDate}}</p>
          <p>唱片公司:{{album.company}}</p>
        </div>
      </div>
      <ul class="song-list">
        <li v-for="(n,index) in album.list" :key="index">
          <div @click="play(index)">
            <p class="songName">{{n.songorig}}</p>
            <p class="singer" v-for="(item,key) in n.singer" :key="key">{{item.name}}</p>
          </div>
          <p class="icon-container"><i class="icon">...</i></p>
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
