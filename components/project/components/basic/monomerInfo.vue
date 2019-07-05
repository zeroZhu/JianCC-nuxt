<template>
  <div class="content-item">
    <h4 id="monomerInfo">
      单体信息
      <span class="count">90</span>
    </h4>
    <el-table border stripe :data="data">
      <el-table-column type="index" label="序号" align="center" width="50px" ></el-table-column>
      <el-table-column prop="name" label="单体名称" align="center" width="200px"></el-table-column>
      <el-table-column prop="cost" label="总造价（万元）" align="center" width="120px"></el-table-column>
      <el-table-column prop="area" label="建筑面积" align="center"></el-table-column>
      <el-table-column prop="height" label="建筑高度" align="center"></el-table-column>
      <el-table-column prop="structure" label="结构体系" align="center"></el-table-column>
      <el-table-column prop="operate" label="操作" align="center" >
        <template  slot-scope="scope">
          <el-button type="text" @click="show(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="mt20 tl" background small layout="pager " :total="1000"></el-pagination>
    <el-dialog title="单体信息详情" custom-class="dialog-detail" :visible.sync="dialog.visible">	
      <div class="form-table-component">
        <ul>
          <li>
            <div class="form-table-item">
              <span class="label">单体建筑物<br>名称</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">单体编码</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">工程总造价<br>（万元）</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">地上建筑面积</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">地下建筑面积</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">建筑面积</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">建筑高度</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">地面层数</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">地下部分</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">长度</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">跨度</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">结构体系</span>
              <span class="value"></span>
            </div>
            <div class="form-table-item">
              <span class="label">工程等级</span>
              <span class="value"></span>
            </div>
          </li>
          <li>
            <div class="form-table-item">
              <span class="label">工程规模</span>
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
