<template>
  <div class="sellerVue">
	  <div>
	  	{{seller}}
	  </div>
  </div>
</template>

<script>
export default {
	/* eslint-disable no-undef */
	/* eslint-disable eqeqeq */
  name: 'sellerVue',
	props: {seller: Object}	
}
</script>

<style scoped>
.header {height: 1.34rem; background: rgba(0, 0, 0, .6);}
</style>
