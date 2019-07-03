/*
 * @Author: Zero 
 * @Date: 2019-03-04 09:05:11 
 * @Last Modified by: Zero
 * @Last Modified time: 2019-03-06 16:43:20
 */
<template>
  <div class="enterprise-detail">
    <detail-header/>
    <detail-main/>
  </div>
</template>

<script>
import detailHeader from "./detail/header.vue";
import detailMain from "./detail/main.vue";

export default {
  name: "enterpriseDetail",
  components: {
    detailHeader, detailMain
  },
  data() {
    return {
      overviewIcon: require("@/assets/img/enterprise/overview.png"),
      updateIcon: require("@/assets/img/enterprise/update.png")
    }
  }
}
</script>

<style lang="less" scoped>
.enterprise-detail {
  width: 1180px;
  margin: 0 auto;
  .detail-banner {
    height: 60px;
    line-height: 60px;
    border-radius: 4px;
    display: flex;
    margin-top: 20px;
    background: #ffffff;
    .overiew, .update {
      display: flex;
      align-items: center;
      flex-basis: 50%;
      .iconfont {
        font-size: 110px;
        margin-left: 25px;
        margin-right: 30px;
      }
      p {
        font-size: 16px;
        span {
          margin-right: 20px;
          .red {
            color: #ed2221;
          }
        }
        
      }
    }
  }
}
</style>




