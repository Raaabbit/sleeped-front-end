<template lang="pug">
  .search
    transition(name="el-zoom-in-top")
      .underlayment(v-show="load")
    el-card.search-parm
      //- 指定两种不同的查询预测模式
      el-tabs.tabs(v-model="searchType")
        el-tab-pane.tab(label="精确预测" v-on:click="changeType(0)")
        el-tab-pane.tab(label="范围查询" v-on:click="changeType(1)")
      //- 两种不同的查询表单
      form(v-show="this.searchType==0")
        el-input.input-addr(placeholder="请输入酒店的具体名称(建议通过高德地图锁定目标）")
        el-date-picker.input-date(v-model="startDate" type="date" placeholder="预测开始日期")
        el-date-picker.input-date(v-model="endDate" type="date" placeholder="预测结束日期")
        el-button(type="primary" plain) 开始预测
      form(v-show="this.searchType==1")
        el-input.input-addr(placeholder="请输入要查询的范围（越精确越好哦）")
        el-date-picker.input-date(v-model="startDate" type="date" placeholder="预测开始日期")
        el-date-picker.input-date(v-model="endDate" type="date" placeholder="预测结束日期")
        //- 自定义的滑动轨道组件，来选择价格区间
        el-input(placeholder="价格下限（单位：￥）")
        el-input(placeholder="价格上限（单位：￥）")
        el-button(type="primary" plain) 开始预测
    .tip-img
      img(src="../assets/tip.jpeg" title="还没有输入参数")
</template>
<script>
import { Button, CollapseTransition } from 'element-ui'
export default {
  data(){
    return {
      load:false,
      startDate:"",
      endDate:"",
      searchType:0
    }
  },
  mounted(){
    this.load = true
  },
  methods:{
    changeType(type){
      this.searchType = type;
    }
  }
}
</script>
<style lang="stylus" scoped>
.search 
  position relative
  .underlayment 
    position absolute
    left 0
    right 0
    top 0
    background-color #409EFF
    z-index -1
.search-parm
  width 80%
  box-sizing border-box
  margin 10px auto
  
.msg-table
  position absolute 
  top 20px 
  left 50%
  transform translateX(-50%)
  background-color #fff
  border-radius 10px 10px 
  box-shadow gray 0 20px 60px 
@media only screen and (min-width: 320px ) 
  .underlayment
    height 140px 
  
@media only screen and (min-width: 420px) 
  .underlayment
    height 200px 
  .msg-table
    width 80%
    max-width 800px
</style>
