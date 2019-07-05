<template>
  <div class="content-item">
    <h4>
      招投标信息
      <span class="count">90</span>
    </h4>
    <el-table border stripe :data="data">
      <el-table-column type="index" align="center" width="50px"></el-table-column>
      <el-table-column prop="certCode" label="工程名称" align="center"></el-table-column>
      <el-table-column prop="organs" label="中标单位" align="center"></el-table-column>
      <el-table-column prop="organs" label="中标金额" align="center" width="120px"></el-table-column>
      <el-table-column prop="organs" label="负责人" align="center" width="120px"></el-table-column>
      <el-table-column prop="operate" label="操作" align="center" width="80px">
        <el-button type="text" @click="show">详情</el-button>
      </el-table-column>
    </el-table>
    <el-pagination class="mt20 tl" background small layout="pager " :total="1000"></el-pagination>
    <el-dialog title="招投标详情" custom-class="dialog-detail" :visible.sync="dialog.visible">
      <div class="form-table-component">
        <ul>
          <li>
            <div class="form-table-item">
              <span class="label">
                工程名称
              </span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">招标类型</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">招标方式</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">中标日期</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">中标金额（万元）</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">招标代理单位名称</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">招标代理单位统一社会信用代码</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">中标单位名称</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">中标单位统一社会信用代码</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">项目经理</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">项目经理证件号码</span>
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
          {name: '建查查总部迪拜大楼', cost: 1000000, area: 2000000, height: 1000, structure: '牛逼结构'}
        ]
      }
    }
  },
  data() {
    return {
      dialog: {
        visible: false,
        data:{}
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
