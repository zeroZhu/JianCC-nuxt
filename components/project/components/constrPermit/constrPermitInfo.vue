<template>
  <div class="content-item">
    <h4>
      施工许可信息
      <span class="count">90</span>
    </h4>
    <el-table border stripe :data="data">
      <el-table-column type="index" align="center"></el-table-column>
      <el-table-column prop="certCode" label="资质证书号" align="center"></el-table-column>
      <el-table-column prop="name" label="资质名称" align="center" width="300px"></el-table-column>
      <el-table-column prop="organs" label="发证机关" align="center"></el-table-column>
      <el-table-column prop="operate" label="操作" align="center">
        <el-button type="text" @click="show" >详情</el-button>
      </el-table-column>
    </el-table>
    <el-pagination class="mt20 tl" background small layout="pager " :total="1000"></el-pagination>
    <el-dialog title="施工图审查信息详情" custom-class="dialog-detail" :visible.sync="dialog.visible">
      <div class="form-table-component">
        <ul>
          <li>
            <div class="form-table-item">
              <span class="label">工程名称</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">施工许可证编号</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">合同金额(万元)</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">建设工程规划许可证编号</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">建设用地规划许可证编号</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">相关施工单位</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">施工单位统一社会信用代码</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">相关监理单位</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">监理单位统一社会信用代码</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">面积（平方米）</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">长度（米）</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">跨度（米）</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">发证日期</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">建设规模</span>
              <span class="value"></span>
            </div>
          </li>
        </ul>
      </div>
    </el-dialog>
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
