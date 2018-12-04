<template lang="pug">
	header.header
		router-link.logo.logo-header(to="/") 
			h1
				img(src="../assets/logo.png")
		a.link(href="https://github.com/Raaabbit/sleeped-front-end")
			img.header-link(src="../assets/github.svg")
</template>
<script>
export default {
	name: "headerbar"
};
</script>
<style lang="stylus">
	.header
		display flex
		justify-content space-between
		box-sizing border-box
		height 60px
		padding 5px 30px
		a
			display inline-block
	.logo-header img
		height 50px
	.header-link
		height 50px
</style>