<template lang="pug">
  .about
    func-header(name="酒店详情")
    .page
      //- 基本信息
      .msg
        .name 酒店名称
        .position 酒店位置
        .advice 预计XX月XX日价格最低
        .price 低至￥200
        .detail-btn 查看详情
      //- 房型导航和预测曲线
</template>
<script>
import FuncHeader from '../components/FuncHeader';
export default {
  components:{
    FuncHeader
  },
  name:"about",
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>
<style lang="stylus" scoped>
  .about
    background #fff
    z-index 9998
</style>

