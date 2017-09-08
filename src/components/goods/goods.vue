<template>
  <div class="goodsVue">
	  <div>
	  	{{good}}
	  </div>
  </div>
</template>

<script>
export default {
	/* eslint-disable no-undef */
	/* eslint-disable eqeqeq */
  name: 'goodsVue',
	props: {good: Array}	
}
</script>

<style scoped>
.header {height: 1.34rem; background: rgba(0, 0, 0, .6);}
</style>
