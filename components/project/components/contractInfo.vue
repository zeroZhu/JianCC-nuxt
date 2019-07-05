<template>
  <div class="content-item">
    <h4>
      合同备案
      <span class="count">90</span>
    </h4>
    <el-table border stripe :data="data">
      <el-table-column type="index" align="center"></el-table-column>
      <el-table-column prop="certCode" label="合同类别" align="center"></el-table-column>
      <el-table-column prop="name" label="工程名称" align="center" width="300px"></el-table-column>
      <el-table-column prop="organs" label="合同金额" align="center"></el-table-column>
      <el-table-column prop="organs" label="发包单位" align="center"></el-table-column>
      <el-table-column prop="organs" label="承包单位" align="center"></el-table-column>
      <el-table-column prop="operate" label="操作" align="center">
        <el-button type="text">详情</el-button>
      </el-table-column>
    </el-table>
    <el-pagination class="mt20 tl" background small layout="pager " :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {name: '建查查总部迪拜大楼', cost: 1000000, area: 2000000, height: 1000, structure: '牛逼结构'}
        ]
      }
    }
  },
  data() {
    return {}
  }
}
</script>