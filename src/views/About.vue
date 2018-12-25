<template lang="pug">
  .about
    func-header(name="酒店详情")
    .page
      //- 基本信息
      .msg
        .hotal-img
          img(v-bind:src="img")
          em.hotal-name {{this.name}}
        .item.rank
          p.level {{this.level}}
          el-rate(v-model="rank"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}")
        .item.addr {{this.addr}}
        .item.advice 
          span 预计{{this.adviceDate}}价格最低
          span ￥{{this.floorPrice}}
      //- 房型导航和预测曲线
      room-card(v-for="(item,index) in detail" :key="item.id" :detail="item" :index="index")
</template>
<script>
import axios from 'axios';
import FuncHeader from '../components/FuncHeader'
import RoomCard from '../components/RoomCard';
export default {
  components:{
    FuncHeader,
    RoomCard
  },
  name:"About",
  data(){
    return {
      name:"",
      addr:"",
      rank:3,
      adviceDate:"",
      floorPrice:"",
      id:"",
      detail:[],
      startDate:"",
      endDate:"",
      img:"",
      levelArr:['差评','不太好','一般般','还不错','非常棒']
    }
  },
  computed:{
    level(){
      return this.levelArr[Math.floor(this.rank)]||"未知"
    }
  },
  async created(){
    let base = this.$route.query
    console.log(base);
    [this.id,this.startDate,this.endDate] = [base.id,base.startDate,base.endDate]
    await this.getDetail()
  },
  methods:{
    getDetail(){
      return axios.post('/exactsearch',{
        "id":this.id,
        "startDate":this.startDate,
        "endDate":this.endDate
      })
      .then((res)=>{
        let result = res.data;
        if (result.code==200) {
          // 希望可以用解构赋值改进
          result = result.data
          console.log(result)
          for (const key in result) {
            if (result.hasOwnProperty(key)) {
              const element = result[key];
              this[key] = element
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.about
  background #fff
  z-index 9998
  overflow auto
.msg
  .hotal-img
    display block
    position relative
    height 200px
    overflow hidden
    img 
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
    .hotal-name
      position absolute
      left 20px
      bottom 20px
      font bold var(--size-main-title)/1 var(--font-family)
      color #fff  
  .item
    padding  0 15px
    color var(--color-main-font)
    +.item
      border 1px solid rgb(244,244,244)
      border-width 1px 0 0
  .rank
    display flex
    justify-content space-between
    align-items center
    height 50px
    .level
      font var(--size-title) var(--font-family)
      color var(--color-main)
  .addr
    height 50px
    font var(--size-body)/50px var(--font-family)
  .advice
    display flex
    align-items center
    justify-content space-between
    height 50px
    border-bottom 10px solid rgb(244,244,244)!important
    span 
      font var(--size-body)/1 var(font-family)
      +span
        font-size var(--size-main-title)
        color var(--color-worning)
    
</style>

