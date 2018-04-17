<template>
      <el-col :span="24" class="header-logo">
          <div class="logo">
           <span v-html="oyologo"></span>
          </div>
          <div class="text">打造亚洲最大规模的经济连锁酒店</div>
          <div class="phone">
            <span v-html="phoneIcon"></span>
            400 8888 8888
          </div>
      </el-col>
</template>

<script type="text/ecmascript-6">
import {oyologo, phoneIcon} from '../svgicons'
export default {
  data() {
    return {
      oyologo,
      phoneIcon
    }
  },
  components: {
    
  }
}
</script>

<style scoped lang="stylus">
.header-logo
  overflow hidden
  line-height 60px
  height 60px
  display flex
  font-size 14px
  .logo
    width 120px
    text-align center
  .text
    flex 1
    padding-left 23px
    opacity .7
    font-weight bold
    letter-spacing .05em
    border-left 1px solid rgba(43,45,46,.1)
    border-right 1px solid rgba(43,45,46,.1)
  .phone
    padding-right 30px
    span 
      padding 0 13px 0 30px
</style>
