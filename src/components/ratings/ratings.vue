<template>
  <div class="ratingsVue">
    <div>
      {{ratings}}
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable no-undef */
	/* eslint-disable eqeqeq */
  name: 'ratingsVue',
  props: {ratings: Array},
  created () {
    console.log(this.ratings)
  }

}
</script>

<style scoped>
.header {height: 1.34rem; background: rgba(0, 0, 0, .6);}
</style>
