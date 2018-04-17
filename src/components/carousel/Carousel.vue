<template>
  <el-col :span='24' class="header-carousel">
    <el-carousel trigger="click" height="295px" :autoplay="autoplay">
      <el-carousel-item v-for="(item, index) in carouselData" :key="index">
        <img :src="item.desktopImage" alt="pic">
        <div class="carousel-text">
          <div class="text-wrapper">
            <div class="text-one" v-if='item.subtitle'>{{item.subtitle}}</div>
            <div class="text-two" v-if='item.subtext'>{{item.subtext}}</div>
            <div class="text-three" v-if='item.title'>{{item.title}}</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-col>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      carouselData: [],
      autoplay: false
    }
  },
  created() {
      let self = this
      this.$axios(this.baseUrl+'/heroCarousal')
        .then(res=>{
          let data = res.data
          if(data.code == '0') {
              this.carouselData = data.data
          }
        })
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
.header-carousel
  height 295px
  img
    width 100%
    height 100%
  .carousel-text
    position absolute
    overflow hidden
    top 0
    left 0
    text-align center
    width 100%
    height 100%
    background rgba(0,0,0,.3)
    .text-wrapper
      padding-top 60px
      .text-one
        font-size: 30px;
        line-height: 32px;
        color: #ffffff;
        font-weight: 300;
        text-transform: uppercase;
        padding-bottom: 14px;
      .text-two
        font-size: 60px;
        line-height: 62px;
        color: #ffffff;
        font-weight: 800;
        letter-spacing: 9.3px;
        text-transform: uppercase;
        padding: 8px 0 6px 0;
      .text-three
        font-size: 24px;
        line-height: 26px;
        color: #ffffff;
        letter-spacing: 1px;
        padding-top: 10px;
        text-transform: uppercase;
        margin: 0 auto;
        width: 450px;
</style>
