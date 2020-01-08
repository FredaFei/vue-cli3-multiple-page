<template>
  <div class="c-scroll" :class="[scrollable ?'allow':'disallowed']" :style="{height:height+'px'}" ref="scrollList" @scroll.passive="onScroll($event)" @touchmove="onTouchMove($event)">
    <div class="c-scroll-main" v-show="dataSource.length>0">
      <div class="c-scroll-body">
        <!-- top -->
        <!-- todo 下拉刷新 -->
        <slot></slot>
        <div class="c-scroll-bottom">
          <div v-if="bottomStatus=='loading'" class="load-text loading">
            <c-icon name="loading" class="load-icon"></c-icon>
            加载中
          </div>
          <div v-if="bottomStatus=='more'" class="load-text">加载完成</div>
          <div v-if="bottomStatus=='over'" class="load-text">没有数据了</div>
        </div>
      </div>
    </div>
    <div :class="['c-scroll-empty',{default: !customEmptyStatus}]" v-show="dataSource.length<=0">
      <template v-if="!customEmptyStatus">暂无数据~</template>
      <template v-else>
        <slot name="empty"></slot>
      </template>
    </div>
  </div>
</template>
<script>
import CIcon from '@/components/icon/index'

export default {
  name: 'CScroll',
  components: { CIcon },
  props: {
    onPull: {
      type: Function,
      require: true
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    height: {
      type: [String,Number]
    },
    customEmptyStatus: {
      type: Boolean,
      default: false
    },
    bottomStatus: {
      type: String,
      default: 'over',
      validator(value) {
        return ['over', 'more', 'loading'].includes(value)
      }
    },
    deltaY: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      timeoutId: null
    }
  },
  mounted() {
  },
  methods: {
    onScroll() {
      if (!this.scrollable) { return }
      this._onScroll()
    },
    onTouchMove() {
      this._onScroll()
    },
    _onScroll() {
      if (this.bottomStatus === 'loading') { return }
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // deltaY 根据使用场景自定义
      if (window.innerHeight + scrollTop - this.deltaY >= this.$refs.scrollList.offsetHeight) {
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(() => {
          this.onPullUp()
        }, 100)
      }
    },
    onPullUp() {
      if (this.bottomStatus === 'more') {
        this.$emit('pull-up')
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import "var";
.allow {
  overflow: auto;
}
.disallowed {
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  transition: all 450ms;
  backface-visibility: hidden;
  perspective: 1000;
}
.c-scroll {
  position: relative;
  color: #999;
  &-top {
    text-align: center;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }
  &-body {
    overflow: hidden;
    min-height: 100%;
  }
  &-bottom {
    text-align: center;
    line-height: 0.8rem;
    .load-text {
      width: 100%;
      flex-wrap: wrap;
      @include flex(center, center);
      @include sc(0.3rem, $gray);
      &.loading {
        .load-icon {
          margin-right: 0.1rem;
          @include spin;
        }
      }
    }
  }
  &-empty {
    &.default {
      padding: 1rem 0;
      text-align: center;
    }
  }
}
</style>