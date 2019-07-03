/*
 * @Author: Zero 
 * @Date: 2019-03-04 09:13:41 
 * @Last Modified by: Zero
 * @Last Modified time: 2019-03-06 16:50:56
 */
<template>
  <div class="detail-header">
    <div class="detail-header-content">
      <div class="header-content-left">
        <img src="@/assets/img/logo-enterprise.png" alt="">
        <label>浏览量：1,324次</label>
      </div>
      <div class="header-content-right">
        <h4>中铁五局集团建筑工程有限公司</h4>
        <p class="tag-list">
          <span class="tag tag-blue">全国领先</span>
        </p>
        <div class="info-list">
          <span>统一社会信用代码：91110000101132416J</span>
          <span>法定代表人：<i style="color:#0067ED">佩奇</i></span>
          <span>企业登记注册类型：有限责任公司</span>
          <span>企业属地：江西省 南昌市</span>
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
  }
}
</script>
