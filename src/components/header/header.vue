<template>
  <div class="header">
    <div class="header-top flex">
        <div class="header-pic"></div>
        <div class="header-sell flex1">
          <div class="header-brand flex">
          	<img src="../../../static/img/brand@3x.png"/>
          	<div class="flex1">周品</div>
          </div>
          <div class="header-dispatching">蜂鸟专送/23分钟</div>
          <div class="header-fullCut flex">
          	<img src="../../../static/img/decrease_1@3x.png"/>
          	<div class="flex1">在线支付满28减5</div>
          	<div class="header-more flex">
          		5个<div class="icon iconfont icon-icon"></div>
          	</div>
          </div>
        </div>
    </div>
    <div class="header-bottom flex">
    	<img src="../../../static/img/bulletin@3x.png"/>
    	<div class="flex1">周品想放弃泵人周燎周品想放弃泵人周燎周品想放弃泵人周燎</div>
    	<div class="icon iconfont icon-icon"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {background: rgba(7, 17, 27, .5); color: #fff; }
.header-top {padding: .24rem .06rem 0 .24rem; }
.header-pic {margin: 0 .16rem .18rem 0; width: .64rem; height: .64rem; background: tan; border-radius: .04rem;}
.header-sell {margin: .02rem .06rem 0 0; }
.header-brand img {width: .3rem; height: .18rem; margin-right: .06rem; }
.header-brand .flex1 {line-height: .18rem; font-size: .16rem; }
.header-dispatching {margin: .08rem 0 .1rem;}
.header-fullCut {line-height: .12rem;}
.header-fullCut img {width: .12rem; height: .12rem; margin-right: .04rem ;}
.header-fullCut .flex1 {font-size: .1rem;}
.header-more {margin-top: -.075rem; font-size: .1rem; line-height: .12rem; padding: .07rem .08rem; border-radius: .12rem; background: rgba(0, 0, 0 ,.2);}
.header-more .iconfont.icon-icon {font-size: .06rem; margin-left: .02rem;}
.header-bottom {height: .28rem; line-height: .28rem; background: rgba(7,17,27,.2); padding: 0 .12rem; }
.header-bottom img {width: .22rem; height: .12rem; margin: .075rem .04rem 0 0;}
.header-bottom .flex1 { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: .1rem;}
.header-bottom .iconfont.icon-icon {font-size: .06rem;}
</style>
 