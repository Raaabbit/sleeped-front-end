// 页面的header部分，包含logo和github
<template lang="pug">
  header.g-header
    router-link(to="/", title="title").logo.header-logo 
    a(href="https://github.com/Raaabbit/sleeped--front-end", title="title").link.link-github 
    
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
</style>
