<template lang="pug">
  .home
    .banner-desc
      h2.g-title SLEEPED
      p.g-discribe 大数据为您提供酒店价格预测服务
    img(src="../assets/lazydog.png").banner-img
    el-button.start-btn(type="primary" round v-on:click="goSearch()") 开始体验
</template>


<script>
import { Button, CollapseTransition } from 'element-ui'
export default {
  name: "home",
  methods:{
    goSearch(){
      this.$router.push({path:"/search"})
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner   
.banner-desc
    margin 10px auto 20px
    text-align center
  .g-title
    font-size 40px 
    color #555
  .g-discribe
    margin-top 14px
    font-size var(--size-title)
    color var(--color-secondary-font)
.banner-img
  display block
  margin 20px auto
.start-btn
  display block
  width 300px 
  margin auto
@media only screen and (min-width: 320px ) 
  .banner-img
    height 240px
@media only screen and (min-width: 420px) 
  .banner-img 
    height 300px
@media only screen and (min-width: 600px) 
  .banner-img 
    height 400px

</style>