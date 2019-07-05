/*
 * @Author: Zero 
 * @Date: 2019-03-04 09:05:11 
 * @Last Modified by: Zero
 * @Last Modified time: 2019-07-04 17:31:01
 */
<template>
  <div class="project-detail">
    <detail-header/>
    <detail-main />
  </div>
</template>

<script>
import detailHeader from "@/components/project/header";
import detailMain from "@/components/project/main";

export default {
  name: "projectDetail",
  components: {
    detailHeader, detailMain
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.project-detail {
  width: 1180px;
  margin: 0 auto;
}
</style>




