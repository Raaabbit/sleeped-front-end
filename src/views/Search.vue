<template lang="pug">
  .page.search
    transition(name="el-zoom-in-top")
      .underlayment(v-show="load")
    .search-parm
      model-tab(v-on:changeType="getType")
      //- 两种不同的查询表单
      form(v-show="this.searchType==0")
        el-input.input-addr(v-model="name" placeholder="酒店的具体名称(建议通过艺龙酒店确认）")
        el-date-picker.input-date(v-model="startDate" type="date" placeholder="预测开始日期" value-format="yyyy-MM-dd" :editable="false")
        el-date-picker.input-date(v-model="endDate" type="date" placeholder="预测结束日期" value-format="yyyy-MM-dd" :editable="false")
        el-button.input-btn(v-on:click="exactSearch" type="primary" plain) 开始预测
      form(v-show="this.searchType==1")
        el-input.input-addr(v-model="addr" placeholder="请输入要查询的范围（越精确越好哦）")
        el-date-picker.input-date(v-model="startDate" type="date" placeholder="预测开始日期" value-format="yyyy-MM-dd" :editable="false")
        el-date-picker.input-date(v-model="endDate" type="date" placeholder="预测结束日期" value-format="yyyy-MM-dd" :editable="false")
        //- 自定义的滑动轨道组件，来选择价格区间
        el-input.input-price(v-model="lowPrice" placeholder="价格下限（单位：￥）")
        el-input.input-price(v-model="highPrice" placeholder="价格上限（单位：￥）")
        el-button.input-btn(v-on:click="rangeSearch" type="primary" plain) 开始预测
    .tip
      p.tip-text {{this.errorMsg}}
      img.tip-img(src="../assets/lazydog.png" title="请完整输入参数")
    
    transition(name="el-fade-in-linear")
      router-view.detail
</template>
<script>
import { Button, CollapseTransition } from "element-ui"
import BaseHeader from '../components/BaseHeader'
import ModelTab from "../components/ModelTab"
import axios from "axios";
export default {
  components: {
    BaseHeader,
    ModelTab
  },
  data() {
    return {
      load: false,
      searchType: 0,
      // 下面的一组数据是表单内容
      name:"",
      id:"",
      addr: "",
      startDate: "",
      endDate: "",
      lowPrice: "",
      highPrice: "",
      errorMsg: "",
      successSearch: false
    };
  },
  mounted() {
    this.load = true
  },
  methods: {
    getType(type) {
      // 从model-tab接受类型之后，修改查找模式
      this.searchType = type;
    },
    checkParam() {
      // 检查参数输入
      if (this.searchType == 0) {
        if (this.name == "" || this.startDate == "" || this.endDate == "") {
          return false;
        }
      } else if (this.searchType == 1) {
        this.lowPrice = this.lowPrice == "" ? this.lowPrice : 0;
        this.highPrice = this.highPrice == "" ? this.highPrice : 10000;
        if (this.addr == "" || this.startDate == "" || this.endDate == "") {
          return false;
        }
      }
      return true;
    },
    getID(){
      return axios.get('/prequery',{
        params:{
          "name":this.name
        }
      })
      .then((res)=>{
        if(res.data.code == 200){
          this.id = res.data.id
          return res.data.id
        }else if(res.data.code == 400){
          setTimeout(() => {
            this.errorMsg = "";
          }, 1000);
          this.errorMsg = "我们的数据库中没有您要查找的酒店啦";
        }
      })
      .catch((error)=>{
        console.error(error)
      })
    },
    async exactSearch() {
      if (this.checkParam()) {
        // 发起请求，查看用户要查找的酒店在不在数据库中
        // 如果有，拿到酒店的id，并转到about
        await this.getID()
        this.$router.push({path:'search/about',query:{id:this.id,startDate:this.startDate,endDate:this.endDate}})
      } else {
        setTimeout(() => {
          this.errorMsg = "";
        }, 1000);
        this.errorMsg = "请输入完整参数";
      }
    },
    rangeSearch() {
      if (this.checkParam()) {
        // 先通过高德地图api，查找一定2000m内的所有酒店，将酒店名称整理成一个json发送
        // 注意价格区间
        // 拿到返回数据后，渲染酒店基本数据列表
      } else {
        setTimeout(() => {
          this.errorMsg = "";
        }, 1000);
        this.errorMsg = "请输入完整参数";
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.search {
  position: relative;
  padding 10px 0
  .underlayment {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height 200px
    background-color: #409EFF;
    z-index: -1;
  }
}

.search-parm 
  margin: 0 auto;
  width: 90%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 10px;

  .tabs 
    width: 100%;

    .tab 
      width: 50%;


.tip {
  .tip-text {
    width: 100%;
    height: 22px;
    text-align: center;
    color: var(--color-info);
    font: var(--size-normal) / 1.1 var(--font-family);
  }

  .tip-img {
    display: block;
    margin: 20px auto;
  }
}

.detail
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 1000

@media only screen and (min-width: 320px) {
  .input-addr, .input-date, .input-btn {
    width: 100%;
  }

  .input-price {
    width: 50%;
  }

  .tip {
    width: 80%;
    margin: 10px auto 0;

    .tip-img {
      height: 200px;
    }
  }
}

@media only screen and (min-width: 400px) {

  .tip {
    width: 80%;

    .tip-img {
      height: 240px;
    }
  }
}
</style>
