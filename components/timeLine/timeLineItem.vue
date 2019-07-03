<template>
  <div class="time-line-item" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"timeLineItem",
}
</script>

<style lang="less" scoped>
.time-line-item {
  border-left: 1px dashed #EAEDF1;
  padding-left: 20px;
  padding-top: 5px;
  position: relative;
}
.time-line-item::before {
  content: "";
  width: 9px;
  height: 9px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #0067ED;
  position: absolute;
  left: -5px;
  top: 15px;
}
</style>

