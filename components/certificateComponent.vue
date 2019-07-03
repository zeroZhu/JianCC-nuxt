<template>
  <div class="certificate-component" :class="'certificate-type--'+type">
    <h5 class="certificate-title">
      <span class="profession-type" >{{type==1?"注册职业":"安管人员"}}</span> 
      二级注册建造师
    </h5>
    <div class="certificate-info">
      <span>注册单位：安徽华立建设股份有限公司</span>
      <span>证书专业：市政工程/房屋建筑/建筑工程</span>
      <span>发证机关：新疆维吾尔族自治区住房和城乡建设厅</span>
      <span>有效期至：2017-12-31 </span>
    </div>
    <div class="certificate-bottom">
      <span>证书编号：赣20121454777886</span>
      <span>执业印章号：B05440006369</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'certificateComponent',
  props: {
    // 1:注册证书 0：非注册正式
    type:{
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="less" scoped>
.certificate-component {
  padding: 0 30px 0 34px;
  background-color: #0067ED;
  border-radius: 4px;
  font-size: 14px;
  color: #ffffff;
  &.certificate-type--0 .certificate-title .profession-type {
    background-color:rgba(255,255,255,0.3);
  }
  .certificate-title {
    padding-top: 23px;
    padding-bottom: 20px;
    font-size: 18px;
    font-weight: normal;
    display: flex;
    .profession-type {
      padding: 3px 8px 4px 9px;
      margin-right: 20px;
      border-radius: 13px;
      font-size: 14px;
      background-color:rgba(0,89,156,0.3);
    }
  }
  .certificate-info {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #0084e7;
    padding-bottom: 12px;
    span {
      width: 50%;
      text-align: left;
      line-height: 28px;
    }
  }
  .certificate-bottom {
    height: 56px;
    line-height: 56px;
    display: flex;
    span {
      flex-basis: 50%;
      text-align: left;
    }
  }
}
</style>

