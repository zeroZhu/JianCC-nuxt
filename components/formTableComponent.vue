<template>
  <div class="form-table-component">
    <ul>
      <li v-for="(value,index) in list" :key="index">
        <div class="form-table-item" v-for="v in value" :key="v.label+'label'">
          <span class="label">{{v.label}}</span>
          <span class="value">{{v.value}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'formTableComponent',
  props: {
    data: Array,
    row: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    if (this.data && this.data.length > 0) {
      this.formatData(this.data)
    }
  },
  methods: {
    formatData(v) {
      let { row, data } = this,
        list = []

      for (let arr = [], i = 0, len = data.length; i < len; i++) {
        if (arr.length == row) {
          list.push(arr)
          arr = []
        }
        arr.push(data[i])
        if (i == len - 1) {
          list.push(arr)
        }
      }

      this.list = list
    }
  }
}
</script>

<style lang="less" scoped>
.form-table-component {
  display: flex;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  ul {
    width: 100%;
    border: 1px solid #d8e8f4;
    li {
      display: flex;
      border-bottom: 1px solid #d8e8f4;
      .form-table-item + .form-table-item {
        border-left: 1px solid #d8e8f4;
      }
      .form-table-item {
        display: flex;
        flex: 1;
        span {
          padding: 16px 10px;
          display: flex;
          align-items: center;
          &.label {
            width: 112px;
            border-right: 1px solid #d8e8f4;
            background-color: #edf7ff;
            text-align: left;
          }
          &.value {
            flex: 1;
            text-align: left;
          }
        }
      }
    }
    li:last-child {
      border-bottom: none;
    }
  }
}
</style>

