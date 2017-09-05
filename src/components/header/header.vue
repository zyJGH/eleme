<template>
  <div class="header">
    <div class="header-top">
        <div class="header-pic"></div>
        <div class="header-sell">
            
        </div>
    </div>
    <div class="header-bottom">22</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {height: 1.1rem; background: rgba(7, 17, 27, .5); color: #fff; display: flex; padding: .24rem .06rem 0 .24rem;}
.header-pic {margin-right: .16rem; width: .64rem; height: .64rem; background: tan; border-radius: .04rem;}
.header-sell {margin: .02rem .06rem 0 0; background: red; flex: 1;}
.header-bottom {height: .28rem; line-height: .28rem; font-size: .2rem; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
</style>
 