<template lang="pug">
	//- app 的头部
	header.header
		router-link.logo.logo-header(to="/") 
			h1
				img(src="../assets/logo.png")
		a.link(href="https://github.com/Raaabbit/sleeped-front-end")
			img.header-link(src="../assets/github.svg")
</template>
<script>
export default {
	name: "BaseHeader"
};
</script>
<style lang="stylus" scoped>
	.header
		position fixed
		top 0
		left 0
		right 0
		box-sizing border-box
		height 60px
		padding 5px 30px
		background #ffffff
		z-index 999
		a
			display inline-block
	.logo-header img
		height 50px
		float left
	.link
		float right 
	.header-link 
		height 50px
</style>