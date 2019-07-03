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
    return{
      list:[
        [
          {label: "单位名称",value: "单位名称1"},
          {label: "编号",value: "编号1"}
        ],
        [
          {label: "主要负责人",value: "主要负责人1"},
          {label: "单位地址",value: "单位地址1"}
        ],
        [
          {label: "经济类型",value: "经济类型1"},
          {label: "许可范围",value: "许可范围1"}
        ],
        [
          {label: "有效期起始",value: "有效期起始1"},
          {label: "有效期截止",value: "有效期截止1"}
        ],
        [
          {label: "发证日期",value: "发证日期1"},
          {label: "发证机关",value: "发证机关1"}
        ]
      ]
    };
  },
  mounted() {
    if(this.data&&this.data.length>0){
      this.formatData(this.data);
    }
  },
  methods: {
    formatData (v){
      let { row, data } = this, list = [];

      for(let arr=[],i=0,len=data.length;i<len;i++){
        if(arr.length==row) {
          list.push(arr);
          arr = [];
        }
        arr.push(data[i]);
        if(i==len-1) {
          list.push(arr);
        }
      }

      this.list = list;
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
    border: 1px solid #D8E8F4;
    li {
      display: flex;
      .form-table-item {    
        display: flex;
        flex: 1;
        span {
          padding: 16px 10px;
          border-right: 1px solid #D8E8F4;
          border-bottom: 1px solid #D8E8F4;
          display: flex;
          &.label{
            width: 112px;
            box-sizing: border-box;
            background-color: #EDF7FF;
            text-align: left;
          }
          &.value {
            flex: 1;
            text-align: left;
          }
        }
      }
    }
    tr:nth-child(even) {
      background-color: #F7FBFF;
    }
  }
}
</style>

