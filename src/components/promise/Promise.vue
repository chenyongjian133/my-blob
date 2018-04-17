<template>
  <el-col class="header-promise" :span='24'>
    <div class="promise-wrapper">
      <span class="title">{{title}}</span>
      <div class='line'></div>
      <div class="item-wrapper">
        <div v-for="item in promise" class='item'>
          <svg class="icon">
            <use :xlink:href="item.id"></use>
          </svg>
          <i v-html="item.icon" v-show='false'></i>
          <div class='text'>{{item.text}}</div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script type="text/ecmascript-6">
import {bedIcon,wifiIcon,toiletryIcon,staffIcon,videoIcon,sportlessroomIcon,breakfastIcon} from '../svgicons'
export default {
  data() {
    return {
      title: '',
      promise: [],
      bedIcon
    }
  },
  created() {
    let arr = [bedIcon,wifiIcon,toiletryIcon,staffIcon,videoIcon,sportlessroomIcon,breakfastIcon]
    let brr = ["#bedIcon","#wifiIcon","#toiletryIcon","#staffIcon","#videoIcon","#sportlessroomIcon","#breakfastIcon"]
    let self = this
    this.$axios.get(this.baseUrl+'/oyoPromises')
      .then(res=>{
        let data = res.data
        if(data.code=='0'){
          self.title = data.data.title
          data.data.promises.forEach((element,index) => {
            self.promise.push({
              text: element.text,
              icon: arr[index],
              id: brr[index]
            })
          })
        }
      })
  },
  components: {
  }
}
</script>

<style scoped lang="stylus">
svg
  width 56px
  height 23px
.header-promise
  background-image: linear-gradient(94deg, #d11450, #ef4123);
  height 85px
  line-height 85px
  color #fff
  font-size 14px
  .promise-wrapper
    width 70%
    margin 0 auto
    display flex
    height 100%
    aligin-item center
    .title
      font-weight bold
    .line
      width 1px
      height 26px
      margin 0 50px
      background #fff
    .item-wrapper
      font-weight 300
      display flex
      height 100%
      flex-direction column
      align-items center
      justify-content center



</style>
