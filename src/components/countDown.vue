<template>
  <div class="count-down-wrap">
    <div class="count-down clearfix" v-if="countStyle==='clock'">
      <div class="box hour">{{hour}}</div>
      <div class="split">:</div>
      <div class="box minute">{{minute}}</div>
      <div class="split">:</div>
      <div class="box second">{{second}}</div>
    </div>
    <span class="text-time" v-if="countStyle==='text'">{{minute}}分{{second}}秒</span>
  </div>
</template>
<script>
export default {
  name: "CCountDown",
  props: {
    leftTime: {
      type: [Number,String],
      default: 0
    },
    countStyle: {
      type: String,
      default: "clock"
    }
  },
  data() {
    return {
      initTime: +this.leftTime, //剩余时间
      hour: "00",
      minute: "00",
      second: "00",
      clock: null
    };
  },
  watch: {
    leftTime(val) {
      this.leftTime = val;
      this.initTime = val;
    }
  },
  mounted() {
    this.countDown();
  },
  destroyed() {
    clearTimeout(this.clock);
  },
  methods: {
    countDown() {
      if (this.initTime < 0) {
        this.$emit("update:start");
        clearTimeout(this.clock);
        return false;
      }
      let oneHour = 60 * 60; // 一小时
      let hour = Math.floor(this.initTime / oneHour);
      let minute = Math.floor((this.initTime / 60) % 60);
      let second = Math.floor(this.initTime % 60);
      this.initTime--;
      this.hour = hour < 10 ? `0${hour}` : hour;
      this.minute = minute < 10 ? `0${minute}` : minute;
      this.second = second < 10 ? `0${second}` : second;
      this.clock = setTimeout(() => {
        this.countDown();
      }, 1000);
    }
  }
};
</script>
<style lang="scss">
.count-down-wrap {
  display: inline-block;
  .count-down {
    display: inline-block;
    vertical-align: top;
    .split {
      float: left;
      margin: 0 0.04rem;
    }
    .box {
      float: left;
      width: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      background: #f5f5f5;
      border-radius: 0.1rem;
      font-size: 0.24rem;
      color: #aaa;
    }
  }
}
</style>
