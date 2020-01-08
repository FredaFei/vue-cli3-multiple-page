<template>
  <svg class="c-icon" @click="$emit('click',$event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: "CIcon",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.c-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
