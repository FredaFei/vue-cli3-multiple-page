<template>
  <div class="content">page B</div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'pageB',
  created() {
    api.getSlides().then(res => {
      console.log(res)
    }, err => { console.log(err) })
  },
}
</script>

