<template>
  <div class="content-item">
    <h4 id="particUnit">
      参与单位
      <span class="count">90</span>
    </h4>
    <el-table border stripe :data="data">
      <el-table-column type="index" label="序号" align="center" width="50px"></el-table-column>
      <el-table-column prop="certCode" label="承担角色" align="center"></el-table-column>
      <el-table-column prop="name" label="企业名称" align="center"></el-table-column>
      <el-table-column prop="organs" label="姓名" align="center" width="80px"></el-table-column>
      <el-table-column prop="organs" label="角色" align="center" width="80px"></el-table-column>
      <el-table-column prop="organs" label="信息来源" align="center" width="120px"></el-table-column>
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
  data () {
    return {
      dialog: {
        visible: false,
        data: {}
      }
    }
  },
  methods: {
    show(row) {
     this.dialog.visible = true;
    }
  }
}
</script>
