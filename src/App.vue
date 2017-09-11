<template>
  <div id="app">
    <heade :seller="seller"></heade>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
     <router-view :good="goods" :ratings="ratings" :seller="seller"></router-view> 
  </div>
</template>
<script>
import heade from './components/header/header'
import axios from 'axios'
export default {
	/* eslint-disable no-undef */
	/* eslint-disable eqeqeq */
  name: 'app',
  data () {
  	return {
  		goods: [],
  		ratings: [],
  		seller: {}
  	}
  },
  created () {
		axios.get('api/goods').then(res => {
			if (res.data.errno == 0) {
				this.goods = res.data.data
			}
    })
    axios.get('api/ratings').then(res => {
			if (res.data.errno == 0) {
				this.ratings = res.data.data
			}
    })
    axios.get('api/seller').then(res => {
			if (res.data.errno == 0) {
				this.seller = res.data.data
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
.tab-item.active {color: rgb(240, 20, 20);}
</style>
