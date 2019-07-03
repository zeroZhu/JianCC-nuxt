<template>
  <div class="news-line">
    <h3>情报</h3>
    <timeLine height="455px">
      <timeLineItem style="margin-bottom:10px;" v-for="i in 10" :key="i">
        <p>
          <span class="company">玉田振兴工程建设管理与招标有限公司</span>新增建筑装饰装修工程设计与施工二级
        </p>
        <p class="time">2019-03-07</p>
      </timeLineItem>
    </timeLine>
  </div>
</template>

<script>
import timeLine from "@/components/timeLine/timeLine.vue";
import timeLineItem from "@/components/timeLine/timeLineItem.vue";
export default {
  name: 'newsLine',
  components: {
    timeLine, timeLineItem
  }
}
</script>

<style lang="less" scoped>
.news-line {
  text-align: left;
  line-height: 28px;
  h3 {
    font-size: 22px;
    color: #222222;
    font-weight: 400;
    padding: 7px 0 9px 0;
    text-align: left;
    border-bottom: 1px solid #eaedf1;
    margin-bottom: 20px;
    position: relative;
  }
  h3::after {
    content: "";
    height: 3px;
    width: 64px;
    border-radius: 2px;
    background-color: #0067ED;
    position: absolute;
    left: 0px;
    bottom: -1px;
  }
  p {
    margin-top: 2px;
    font-size: 14px;
    color: #222222;
    line-height: 22px;
    &.time {
      margin-top: 12px;
      color: #999999;
      line-height: 1;
      text-align: right;
    }
    .company {
      color: #0067ED;
    }
  }
}
</style>


