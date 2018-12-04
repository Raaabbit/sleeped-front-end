<template lang="pug">
  .home
    .banner-desc
      h2.g-title SLEEPED
      p.g-discribe 大数据为您提供酒店价格预测服务
    .banner-img
    el-button.start-btn(type="primary" round v-on:click="goSearch()") 开始体验
</template>


<script>
import { Button, CollapseTransition } from 'element-ui'
// @ is an alias to /src
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
    font-size 18px
    color #888
.banner-img
  margin 20px auto
  background #fff url("../assets/lazydog.png") no-repeat
  background-size 100% 100%
  border-radius 10px 10px
.start-btn
  display block
  width 300px 
  margin auto
@media only screen and (min-width: 320px ) 
  .banner-img
    width 300px
    height 240px
@media only screen and (min-width: 420px) 
  .banner-img 
    width 400px
    height 300px
@media only screen and (min-width: 600px) 
  .banner-img 
    width 600px
    height 400px

</style>