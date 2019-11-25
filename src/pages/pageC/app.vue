<template>
  <div id="app">
    <h1>header
      <router-link to="child1">child1</router-link>
      <router-link to="child2">child2</router-link>
    </h1>
    <router-view></router-view>
    <h1>footer</h1>
  </div>
</template>

<script>
export default {
  name: 'pageC',
  watch: {
    $route() {
      document.title = this.$route.meta.title || '';
    }
  },
  mounted() {
    // 微信 input 按键失灵或者键盘回弹样式不变
    const inputItems = document.querySelectorAll("input");
    inputItems.forEach(function (ele) {
      ele.addEventListener("blur", function () {
        window.scrollTo(0, 0);
      });
    });
  },
}
</script>

