<template lang="pug">
  .model-tab
    //- 指定两种不同的查询预测模式
    ul.tabs
      li.tab(v-on:click="changeType(0)" v-bind:class="{active:index==0}") 精确预测
      li.tab(v-on:click="changeType(1)" v-bind:class="{active:index==1}") 范围查询
    //- 随上面移动的轨道和滑块
    .rail 
      .slider(v-bind:class="{right:index==1}")
</template>
<script>
export default {
  name:"modeltab",
  data(){
    return {
      index:0
    }
  },
  methods:{
    changeType(index){
      this.index = index
      this.$emit('changeType',index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.model-tab 
  box-sizing border-box
  padding 10px
  width  100%
  .tabs
    display flex
    justify-content space-around
    .tab
      color var(--color-normal-font)
      cursor pointer
      &:hover 
        color var(--color-main)
  .rail
    position relative
    margin-top 10px
    width 100%
    height 2px
    border-radius 1px 1px
    background-color #e4e7ed
    .slider
      position absolute
      width 50%
      top 0
      left 0
      transition left .2s
      height 2px
      background-color var(--color-main)
.right
  left 50%!important
.active
  color var(--color-main)!important
</style>
