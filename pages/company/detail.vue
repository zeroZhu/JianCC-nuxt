/*
 * @Author: Zero 
 * @Date: 2019-03-04 09:05:11 
 * @Last Modified by: Zero
 * @Last Modified time: 2019-07-02 18:05:33
 */
<template>
  <div class="enterprise-detail">
    <detailHeader/>
    <div class="detail-banner">
      <div class="overview" style="border-right: 1px solid #eff2f7">
        <div class="icon-overview"></div>
        <p>
          <span>资质项:<i class="red">19</i>项</span>
          <span>注册人员:<i class="red">210</i>名</span>
          <span>历史业绩:<i class="red">310</i>个</span>
        </p>
      </div>
      <div class="update">
        <div class="icon-update"></div>
        <div class="carousel-box">
          <el-carousel height="60px" direction="vertical">
            <el-carousel-item v-for="item in 3" :key="item">
              <p>
                <span>2019-02-02</span>
                <span style="color:#0067ED">新增二级注册建造师资质</span>
              </p>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <detail-main />
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
    .overview, .update {
      display: flex;
      align-items: center;
      flex-basis: 50%;
      .icon-overview, .icon-update {
        margin-left: 30px;
        margin-right: 40px;
        width: 110px;height: 26px;
        background-size: 100% 100%;
        transform: translateY(-2px);
      }
      .icon-overview {
        background: url("/img/enterprise/overview.png") no-repeat center center; 
      }
      .icon-update {
        background: url("/img/enterprise/update.png") no-repeat center center;
      }
      .carousel-box {
        width: 350px;
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




