<template>
  <div id="app">
    <heade></heade>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">評論</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
     <router-view></router-view> 
  </div>
</template>
<script>
import heade from './components/header/header'
import axios from 'axios'
export default {
	/* eslint-disable no-undef */
  name: 'app',
  data () {
  	return {
  		goods: {},
  		ratings: {},
  		seller: {}
  	}
  },
  created () {
		axios.get('api/goods').then(res => {
			console.log(res)
			if (res.errno === 0) {
				this.goods = res.data
				console.log(this.goods)
			}
		})
  },
  components: {
    heade: heade
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.tab {height: .4rem; text-align: center; line-height: .4rem; display: flex; width: 100%; font-size: .14rem; border-bottom: 1px solid rgba(7, 17, 27, .1)}
.tab-item {flex: 1;}
.active {color: rgb(240, 20, 20);}
</style>
