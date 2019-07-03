<template>
  <div :id="id" class="bar-chart" style="width:400px;height:260px"></div>
</template>

<script>
export default {
  name: "barChart",
  props: {
    id:String,
    xAxis: Array,
    data: Array
  },
  data() {
    return {
      option: {
        title: {
          subtext: "*该信息由建查查分析数据得出，仅供参考",
          left: "10px",
          bottom: "13px"
        },
        xAxis: {
          type: 'category',
          show: false,
          data: ['注册房地产估价师', '注册造价工程师', '注册监理工程师', '注册建造师', '勘察设计注册工程师', '注册建筑师']        
        },
        tooltip: {
          trigger: "axis",
          axisPointer : {            
            type: "shadow"        
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110],
          type: 'bar',
          itemStyle: {
            normal:{
              color: function(params) {
                let colors = ['#FFC32D','#04C254', '#396FF5', '#4D31DE', '#FF604D','#A626EA'];
                return colors[params.dataIndex];
              }
            }
          }
        }]
      }
    };
  },
  mounted() {
    this.init();

  },
  methods: {
    init() {
      this.initOption();
      let { id, option } = this;
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(id));
      this.myChart.setOption(option);
    },
    initOption() {
      let {data, xAxis} = this;
      this.option.series[0].data = this.data;
      this.option.xAxis.data = xAxis;
    }
  }
}
</script>


