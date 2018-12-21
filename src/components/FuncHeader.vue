<template lang="pug">
  //- 酒店详情，查询结果页面的功能头部，作用，导航返回上一页面
  header.header
    img.back(src="../assets/back.svg" v-on:click="goBack")
    h2.title {{name}}
</template>
<script>
export default {
  name:"FuncHeader",
  props:["name"],
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    position fixed
    top 0
    left 0
    right 0
    height 60px
    background-color #fff
    z-index 10000
    .back
      height 20px
      width 20px
      margin 20px 60px 20px 20px
    .title 
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      height 20px
      font var(--size-title) var(--font-family) 
</style>
