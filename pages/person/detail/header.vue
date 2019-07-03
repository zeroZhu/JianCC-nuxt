/*
 * @Author: Zero 
 * @Date: 2019-03-04 09:13:41 
 * @Last Modified by: Zero
 * @Last Modified time: 2019-04-02 17:48:02
 */
<template>
  <div class="detail-header">
    <div class="detail-header-content">
      <div class="header-content-left">
        <img src="@/assets/img/logo-enterprise.png" alt="">
        <label>浏览量：1,324次</label>
      </div>
      <div class="header-content-right">
        <h4>王力荣</h4>
        <p class="tag-list">
          <span class="tag tag-blue">一建</span><span class="tag tag-blue">企业法人</span>
        </p>
        <div class="info-list">
          <span>身份证号码：342401**********19</span>
          <span>证书注册单位：<i style="color:#0067ED">中交第四公路工程局有限公司</i></span>
          <span>学历信息：有限责任公司</span>
          <span>联系方式：************* <i style="color:#0067ED">查看</i></span>
        </div>
      </div>
    </div>
    <div class="detail-header-operate">
      <p class="update-time">
        数据更新时间：<i class="red">2019-01-12</i>
      </p>
      <p class="operate-list">
        <span><i class="iconfont icon-guanzhu"></i>关注</span>
        <span><i class="iconfont icon-shoujikan"></i>手机查看</span>
        <span><i class="iconfont icon-fankui"></i>反馈</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailHeader",
  data() {
    return {};
  },
  
}
</script>
