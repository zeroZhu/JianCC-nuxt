<template>
  <div class="content-item">
    <h4 id="detailInfo">
      基本信息
      <span class="source">数据来源：江西住房和城乡建设厅</span>
    </h4>
    <div class="form-table-component">
      <ul>
        <li>
          <div class="form-table-item">
            <span class="label">项目名称</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">项目分类</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">项目区划</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">具体地址</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">立项文号</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">立项级别</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">立项批复机关</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">立项批复时间</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">建设单位</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">建设单位统一社会信用代码</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">建设用地规划许可证编号</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">建设工程规划许可证编号</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">资金来源</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">国有资金出资比例</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">
              总投资
              <br />（万元）
            </span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">
              总面积
              <br />（平方米）
            </span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">总长度（米）</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">工程用途</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">建设性质</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">重点项目</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">建设规模</span>
            <span class="value"></span>
          </div>
        </li>
        <li>
          <div class="form-table-item">
            <span class="label">计划开工日期</span>
            <span class="value"></span>
          </div>
          <div class="form-table-item">
            <span class="label">计划竣工日期</span>
            <span class="value"></span>
          </div>
        </li>
      </ul>
      <!-- <div v-else></div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

