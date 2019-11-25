<template>
  <div class="qx-content">新人专享 1</div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'newcomerGift',
  created() {
    api.getSlides().then(res => {
      console.log(res)
    })
  },
}
</script>

