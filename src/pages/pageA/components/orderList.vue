<template>
  <c-scroll :data-source="listData" @pull-up="onPullUp" :bottom-status="bottomStatus" :scrollable="scrollable" :height="height">
    <div class="product-list">
      <h2 v-for="(item,index) in listData" :key="index" :type="type">{{item}}-{{index}}</h2>
    </div>
  </c-scroll>
</template>
<script>
import CScroll from '@/components/scroll/index'
import api from '@/api/index'
import {isMobile} from '@/utils/util'

export default {
  name: 'COrderList',
  components: {
    CScroll
  },
  props: {
    type: {
      type: String,
      default: '1'
    },
    viewHeight: {
      type: String
    }
  },
  data() {
    return {
      bottomStatus: 'more',
      listData: [],
      page: 1,
      pageSize: 10,
      isAll: false
    }
  },
  created() {
    this.loadMore(true)
  },
  computed: {
    scrollable(){
      return !isMobile()
    },
    height(){
      return !isMobile() ? this.viewHeight : 'auto'
    }
  },
  methods: {
    onPullUp() {
      if (this.isAll) { return false }
      this.loadMore()
    },
    loadMore(initial = false) {
      this.bottomStatus = 'loading'
      api.getProduct({
        page: this.page,
        pageSize: this.pageSize
      }).then(res => {
        const { information_list } = res
        if (information_list.length < this.pageSize) {
          this.isAll = true
          this.bottomStatus = 'over'
        } else {
          this.page++
          this.isAll = false
          this.bottomStatus = 'more'
        }
        this.listData = !initial ? this.listData.concat(information_list) : [].concat(information_list)
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.product-list {
  padding-left: 0.3rem;
  background: #a99;
  h2{line-height: 0.8rem;color: #333333;}
}
</style>