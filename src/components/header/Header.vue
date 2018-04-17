<template>
  <div class="header">
    <Logo />
    <my-carousel />
    <Promise />
  </div>
</template>

<script type="text/ecmascript-6">
import Logo from '../logo/Logo'
import myCarousel from '../carousel/Carousel'
import Promise from '../promise/Promise'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Logo, 
   Promise,
   myCarousel
  }
}
</script>

<style scoped lang="stylus">
</style>
