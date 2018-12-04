<template lang="pug">
  .search
    transition(name="el-zoom-in-top")
      .underlayment(v-show="load")
    form.msg-table
      input(type="text")
</template>
<script>
import { Button, CollapseTransition } from 'element-ui'
export default {
  data(){
    return {
      load:false
    }
  },
  mounted(){
    this.load = true
  },
  methods:{

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
    height 120px
    z-index -1
</style>
