<template>
  <div class="password-box">
    <p class="title">请输入支付密码</p>
    <div class="pay">￥{{payAmount |formatAmoutn}}</div>
    <div class="pwd-box">
      <input type="number" pattern="[0-9]*" maxlength="6" class="pwd-input" autocomplete="off" @input="onInput">
      <div class="input-list clearfix">
        <input type="password" readonly="" v-for="i in 6" :key="i" :value="inputValue[i-1]">
      </div>
    </div>
    <div class="tip" @click="onLink">忘记支付密码？</div>
  </div>
</template>

<script>
import { toDecimal2 } from '@/utils/util'
export default {
  name: "cPassword",
  props: {
    payAmount: {
      type: [Number, String],
      default: 0.00
    }
  },
  filters: {
    formatAmoutn(value) {
      return toDecimal2(value)
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
  },
  methods: {
    onInput(e) {
      const { value } = e.target
      this.inputValue = value
      if (/^\d{6}$/.test(this.inputValue)) {
        this.$emit('update:password', this.inputValue)
        this.$emit('enter', this.inputValue)
        e.target.value=""
      }
    },
    onLink(){}
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.password-box {
  text-align: center;
  font-size: 0.3rem;
  .title {
    font-size: 0.34rem;
    padding: 0.2rem;
    border-bottom: 1px solid #ebebee;
  }
  .pwd-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 0 0.4rem;
  }
  .pwd-input {
    width: 100%;
    border: none;
    background: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
    letter-spacing: 1.02666667rem;
    text-align: left;
    -webkit-appearance: none;
    font-family: Courier, monospace;
    font-size: 0.53333333rem;
    opacity: 0;
    padding: 0.37333333rem 0;
    text-indent: 1px;
  }
  .input-list {
    border: 1px solid #e3e3e3;
    > input {
      height: 16.666%;
      line-height: 16.666%;
      text-align: center;
      width: 16.666%;
      border: none;
      border-right: 1px solid #e3e3e3;
      font-size: 0.64rem;
      box-sizing: border-box;
      &:last-child {
        border: none;
      }
    }
  }
  .tip {
    text-align: right;
    font-size: 0.24rem;
    color: #0072ff;
    padding: 0.3rem 0.4rem;
  }
  .pay {
    color: #333;
    font-size: 0.4rem;
    padding: 0.2rem 0;
  }
}
</style>
