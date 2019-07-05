<template>
  <div class="content-item">
    <h4>
      施工图审查信息
      <span class="count">90</span>
    </h4>
    <el-table border stripe :data="data">
      <el-table-column type="index" label="序号" align="center" width="50px"></el-table-column>
      <el-table-column prop="certCode" label="工程名称" align="center"></el-table-column>
      <el-table-column prop="name" label="一次审查是否通过" align="center"></el-table-column>
      <el-table-column prop="organs" label="违反强制性标准数" align="center"></el-table-column>
      <el-table-column prop="organs" label="施工图审查机构" align="center"></el-table-column>
      <el-table-column prop="organs" label="审查完成日期" align="center"></el-table-column>
      <el-table-column prop="operate" label="操作" align="center" width="80px">
        <el-button type="text" @click="show">详情</el-button>
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
              <span class="label">施工图审查合格书编号</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">审查完成日期</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">一次审查是否通过</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">违反强制性标准数</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">时违反的强制性标准条目</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">记录登记日期</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">是否联合审查</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">施工图审查机构名称</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">施工图审查机构统一社会信用代码</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">建设规模描述</span>
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
