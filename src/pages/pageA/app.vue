<template>
  <div id="app">
    <div class="fixed">{{text}}</div>
    <div class="page-body">
      <div class="content">
        <c-product-list view-height="500"></c-product-list>
      </div>
    </div>
  </div>
</template>

<script>
import CProductList from "./components/orderList";
import {isMobile} from '@/utils/util'
export default {
  name: 'pageA',
  components: {
    CProductList
  },
  data(){
    return {
      scrollable: false,
      height:'',
      isPC: false
    }
  },
  computed: {
    text(){
      return isMobile() ? '移动度上拉加载' : 'PC端滚动加载'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "var";
.page-body {
  margin-top: .2rem;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-y: scroll;
}
.content {
  font-size: 0.3rem;
  background: #ffffff;
  flex: 1;
}
.fixed {
  padding: 0.16rem;
  background: gray;
  font-size: 0.32rem;
  text-align: center;
}
</style>

