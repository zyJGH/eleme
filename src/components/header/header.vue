<template>
  <div class="headerVue">
  	<div class="header-bg">
  		<img :src="seller.avatar"/>
  	</div>
    <div class="header-top flex" @click="show = !show">
        <div class="header-pic">
          <img :src="seller.avatar">
        </div>
        <div class="header-sell flex1">
          <div class="header-brand flex">
          	<img src="../../../static/img/brand@3x.png"/>
          	<div class="flex1">{{seller.name}}</div>
          </div>
          <div class="header-dispatching">{{seller.description}} / {{seller.deliveryTime}}分钟送达</div>
          <div class="header-fullCut flex" v-if="seller.supports">
          	<div class="icons" :class="support[seller.supports[0].type]"></div>
          	<div class="flex1">{{seller.supports[0].description}}</div>
          	<div class="header-more flex">
          		{{seller.supports.length}}个<div class="icon iconfont icon-icon"></div>
          	</div>
          </div>
        </div>
    </div>
    <div class="header-bottom flex flex-align">
    	<img src="../../../static/img/bulletin@3x.png"/>
    	<div class="flex1">{{seller.bulletin}}</div>
    	<div class="icon iconfont icon-icon"></div>
    </div>
    
    <transition name="slide-fade">
	    <div class="mask-box" v-if="show">
	    	<div class="mask"></div>
	    	<div class="mask-content">
	    		<div class="mask-title">{{seller.name}}</div>
	    		<div class="mask-star flex" v-if="seller.deliveryPrice">
	    			<img src="../../../static/img/star24_on@2x.png" v-for="item in starOn"/>
	    			<img src="../../../static/img/star24_half@2x.png" v-for="item in starHalf"/>
	    			<img src="../../../static/img/star24_off@2x.png" v-for="item in starOff"/>
	    		</div>
	    		<div class="discount flex flex-align">
	    			<div class="discount-line"></div>
	    			<div class="flex1 discount-text">优惠信息</div>
	    			<div class="discount-line"></div>
	    		</div>
	    		<div class="discount-box" v-if="seller.supports">
	    			<div class="flex flex-align" v-for="(item, index, key) in seller.supports">
	    				<div class="icons" :class="support[seller.supports[index].type]"></div>{{item.description}}
	    			</div>
	    		</div>
	    		<div class="discount flex flex-align">
	    			<div class="discount-line"></div>
	    			<div class="flex1 discount-text">商家公告</div>
	    			<div class="discount-line"></div>
	    		</div>
	    		<div class="discount-box seller-text" v-if="seller.bulletin">{{seller.bulletin}}</div>
	    		<div class="icon iconfont icon-chuyidong" @click="show = !show"></div>
	    		</div>
	    	</div>
	    </transition>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable no-undef */
	/* eslint-disable eqeqeq */
  name: 'headerVue',
  data () {
  	return {
  		show: false
  	}
  },
	props: {seller: Object},
	created () {
		this.support = ['decrease_1', 'discount_1', 'special_1', 'invoice_1', 'guarantee_1']
	},
	computed: {
		starOn: function () {
			return Math.floor(this.seller.deliveryPrice)
		},
		starHalf: function () {
			console.log(this.seller.deliveryPrice.toString().indexOf('.'))
			if (this.seller.deliveryPrice.toString().indexOf('.') != -1) {
				return 1
			} else {
				return 0
			}
		},
		starOff: function () {
			return 5 - this.starOn - this.starHalf
		}
	}
}
</script>

<style scoped>
.headerVue {background: rgba(7, 17, 27, .5); position: relative;}
.header-bg {position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden;}
.header-bg img {font-size: 0; width: 100%; filter: blur(2px);}
.header-top {padding: .24rem .06rem 0 .24rem; color: #fff;position: relative;}
.header-pic {margin: 0 .16rem .18rem 0; width: .64rem; height: .64rem;}
.header-pic img {width: 100%; border-radius: .04rem;}
.header-sell {margin: .02rem .06rem 0 0; }
.header-brand img {width: .3rem; height: .18rem; margin-right: .06rem;}
.header-brand .flex1 {line-height: .2rem; font-size: .16rem; }
.header-dispatching {margin: .08rem 0;font-size: .12rem;}
.header-fullCut {line-height: .1rem;}
.icons {width: .12rem; height: .12rem; margin-right: .04rem;}
.icons.decrease_1 {background: url(../../../static/img/decrease_1@3x.png); background-size: contain;}
.icons.discount_1 {background: url(../../../static/img/discount_1@3x.png); background-size: contain;}
.icons.special_1 {background: url(../../../static/img/special_1@3x.png); background-size: contain;}
.icons.invoice_1 {background: url(../../../static/img/invoice_1@3x.png); background-size: contain;}
.icons.guarantee_1 {background: url(../../../static/img/guarantee_1@3x.png); background-size: contain;}
.flex1 {font-size: .1rem; line-height: .15rem;}
.header-more {position: absolute; right: .12rem; bottom: .14rem; font-size: .1rem; padding: 0 .08rem; line-height: .24rem; border-radius: .12rem; background: rgba(0, 0, 0 ,.2);}
.header-more .iconfont.icon-icon { font-size: .08rem; margin-left: .02rem;}
.header-bottom {height: .28rem; color: #fff; background: rgba(7,17,27,.2); padding: 0 .12rem; }
.header-bottom img {width: .22rem; height: .12rem; margin-right: .04rem;}
.header-bottom .flex1 { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: .1rem;}
.header-bottom .iconfont.icon-icon {font-size: .08rem;}
.mask-box {position: fixed; top: 0; left: 0;width: 100%; height: 100vh; color: #fff;}
.mask {width: 100%; height: 100%; background: rgba(7, 17, 27, .8);}
.mask-content {width: 100%; height: 100%; position: absolute; top: 0; left: 0; text-align: center;}
.mask-title {padding: .6rem 0 .16rem; font-size: .16rem; font-weight: 700;line-height: .16rem;}
.mask-star {width: 55%; margin: 0 auto; justify-content: space-between;}
.mask-star img {width: .24rem; height: .24rem;}
.discount {margin: .28rem .36rem .24rem; text-align: center;}
.discount .discount-line {width: 1rem; height: .02rem; background: rgba(255, 255, 255, .2);}
.discount .discount-text {font-size: .14rem; margin: 0 .05rem;}
.discount-box {padding: 0 .48rem;}
.discount-box .flex {padding-bottom: .12rem; font-size: .12rem;}
.discount-box .flex:last-child {padding-bottom: 0;}
.discount-box .flex .icons {width: .16rem; height: .16rem; margin-right: .06rem;}
.seller-text {font-size: .12rem; line-height: .24rem; text-align: justify;}
.iconfont.icon-chuyidong {position: absolute; left: 50%; bottom: .32rem; font-size: .32rem; margin-left: -.16rem;}
</style>
 