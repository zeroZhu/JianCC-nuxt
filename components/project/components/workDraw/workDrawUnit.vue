<template>
  <div class="content-item">
    <h4>
      施工图审查相关单位
      <span class="count">90</span>
    </h4>
    <el-table border stripe :data="data">
      <el-table-column type="index" label="序号" align="center" width="50px"></el-table-column>
      <el-table-column prop="certCode" label="勘察单位" align="center"></el-table-column>
      <el-table-column prop="name" label="设计单位" align="center"></el-table-column>
      <el-table-column prop="organs" label="施工图审查机构" align="center"></el-table-column>
      <el-table-column prop="organs" label="合格书编号" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            name: '建查查总部迪拜大楼',
            cost: 1000000,
            area: 2000000,
            height: 1000,
            structure: '牛逼结构'
          }
        ]
      }
    }
  },
  data() {
    return {
      dialog: {
        visible: false,
        data: {}
      }
    }
  },
  methods: {
    show(row) {
      this.dialog.visible = true
    }
  }
}
</script>
