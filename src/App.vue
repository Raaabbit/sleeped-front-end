<template lang="pug">
  #app
    .main
      header-bar
      router-view.container 
    footer-bar.footer
</template>

<script>
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
export default {
  name: 'app',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style <style lang="stylus">

html,body
  height 100%
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select
  margin 0 
  padding 0
body
  background #fff 
  -webkit-text-size-adjust 100%
.link 
  color #2d374b 
  text-decoration none
a:hover 
  color #cd0200 
  text-decoration underline
em 
  font-style normal
li
  list-style none
img
  border 0
  vertical-align middle
table
  border-collapse collapse
  border-spacing 0
p
  word-wrap break-word

#app 
  height 100%
.main
  min-height 100%
  overflow : hidden
.container
  padding-bottom 60px

.footer
  height 60px
  margin-top -60px 

/* color-main = #409EFF */
:root
  --color-main #409eff
  --color-success #67c23a
  --color-worning #f56c6c
  --color-info #909499
  --color-main-font #303133
  --color-normal-font #606266
  --color-secondary-font #909399
  --size-main-title 20px
  --size-title 18px
  --size-second-title 16px
  --size-body 14px
  --size-tip 12px
  --font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
</style>
