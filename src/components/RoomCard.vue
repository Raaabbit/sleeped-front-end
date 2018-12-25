<template lang="pug">
  .card
    p.type {{this.detail.room}}
    .advice(v-on:click="showMore")
      span 预计{{this.date}}价格最低
      span ￥{{this.price}}
    el-collapse-transition  
      .box(v-show="show")
        canvas.my-canvas(v-bind:id="specialId")

</template>
<script>
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
const F2 = require('@antv/f2')
const Core = require('@antv/f2/lib/core')
require('@antv/f2/lib/geom/line'); // 只加载折线图
export default {
  name:"RoomCard",
  props:["detail","index"],
  data() {
    return {
      specialId:"",
      type:"",
      price:"",
      date:"",
      F2data:[],
      show:false
    }
  },
  async created(){
    this.specialId = `myChart${this.index}`
    this.init();
    // 利用map找到最低价格,，然后标注这天的时间
    let priceArr = this.F2data.map((i)=>{
      return i.price
    })
    this.price = Math.min.apply(null,priceArr)
    this.F2data.forEach(i=>{
      if (i.price==this.price) {
        this.date=i.date
        return
      }
    })
  },
  methods:{
    init(){
      // 将数据整理成容易绘图的格式
      for (const key in this.detail.priceMap) {
        if (this.detail.priceMap.hasOwnProperty(key)) {
          let tempObj = {}
          tempObj.date = key
          tempObj.price = parseFloat(this.detail.priceMap[key]) 
          this.F2data.push(tempObj)
        }
      }
    },
    showMore(){
      this.show = !this.show
      setTimeout(this.makeChart,800)
    },
    makeChart(){
      const data = this.F2data
      var chart = new F2.Chart({
        id: this.specialId,
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data, {
        price: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3
        }
      });
      chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [2]
        }
      });
      chart.axis('date', {
        label: function label(text, index, total) {
          var textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.line().position('date*price');
      chart.render();
    }
  }
}
</script>
<style lang="stylus" scoped>
.card
  padding 10px 15px
  +.card
    border 1px solid rgb(244,244,244)
    border-width 1px 0 0
  .type
    font var(--size-title)/1 var(--font-family)
  .advice
    display flex
    align-items center
    justify-content space-between
    min-height 30px
    span 
      font var(--size-body)/1 var(font-family)
      color var(--color-normal-font)
      +span
        font-size var(--size-main-title)
        color var(--color-worning)
  .my-canvas
    display block
    width 100%
    height 220px
    margin auto      
</style>
