<template>
  <button class="c-button" :class="[`c-button-${type}`,`c-button-${size}`,`icon-${iconPosition}`]" :disabled="disabled"
          @click="$emit('click',$event)">
    <c-icon class="icon" v-if="icon&&!loading" :name="icon"></c-icon>
    <c-icon class="icon loading" v-if="loading" name="loading"></c-icon>
    <div class="c-button-content">
      <slot/>
    </div>
  </button>
</template>
<script>
  import CIcon from "../icon";

  export default {
    name: "CButton",
    components: {
      CIcon
    },
    props: {
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return ['default', 'primary'].includes(value);
        }
      },
      size: {
        type: String,
        default: 'normal',
        validator(value) {
          return ['normal', 'small', 'large'].includes(value);
        }
      },
      icon: {
        type: String,
        default: ""
      },
      iconPosition: {
        type: String,
        default: "left",
        validator(value) {
          return value === "left" || value === "right";
        }
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "var";
  .c-button {
    padding: 0 1em;
    font-size: .26rem;
    border-radius: $border-radius;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border: 1px solid $button-border-color;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    & + .c-button {
      margin-left: 0.5em;
    }
    & > .loading {
      @include spin;
    }
    &.c-button-default {
      color: $color;
      background: $white;
    }
    &.c-button-primary {
      color: $white;
      background: $bg-color;
      border-color: $bg-color;
    }
    &.c-button-normal {
      line-height: .68rem;
    }
    &.c-button-small {
      font-size: .24rem;
      line-height: .58rem;
    }
    &.c-button-large {
      line-height: .9rem;
      font-size: .3rem;
      width: 100%;
    }
    &.icon-left {
      > .icon {
        order: 1;
        margin-right: 0.1em;
      }
      > .c-button-content {
        order: 2;
      }
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-left: 0.1em;
      }
      > .c-button-content {
        order: 1;
      }
    }
    &:disabled {
      background: $disabled;
      border-color: $disabled;
      cursor: not-allowed;
    }
    &:focus {
      outline: none;
    }
  }
</style>
