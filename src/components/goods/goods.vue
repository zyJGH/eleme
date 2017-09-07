<template>
  <div class="goods">
	  <div class="" v-for="item in good">
	  	{{item.name}}
	  </div>
  </div>
</template>

<script>
export default {
	/* eslint-disable no-undef */
	/* eslint-disable eqeqeq */
	name: 'goods',
	props: {good: JSON},
	created () {
		console.log(this.good)
	}
	
}
</script>

<style scoped>
.header {height: 1.34rem; background: rgba(0, 0, 0, .6);}
</style>
