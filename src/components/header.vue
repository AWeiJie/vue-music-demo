<template>
  <div class="header">
    <header>
      <b @click="out()"><{{title}}</b>
      <span v-if="title === '推荐'"><i class="icon icon-search"></i></span>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {

    },

    data () {
      return {

      }
    },

    props: {
      title: {
        default: '首页'
      }
    },
    methods: {
      out () {
        this.$router.go(-1)
      }
    }
  }

</script>

<style lang="scss">
  @import "../sass/_base.scss";

  .header {
    height: px2rem(40);
    line-height: px2rem(40);
    padding: 0 px2rem(15);

    span {
      float: right;
      font-size: px2rem(20);
    }
  }

</style>
