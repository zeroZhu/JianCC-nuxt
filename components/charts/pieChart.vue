<template>
  <div :id="id" class="pie-chart" style="width:400px;height:260px"></div>
</template>

<script>
export default {
  name: "pieChart",
  props: {
    id: {
      type: String
    },
    data: {
      type: Array,
      default: ()=> {
        return [];
      }
    }
  },
  data() {
    return {
      option: {
        title: {
          subtext: "该信息由建查查分析数据得出，仅供参考",
          left: 10,
          bottom: 13
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 40,
          bottom: 40,
          data: []
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["35%", "45%"],
            data: [],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color : ['#FFC32D','#04C254', '#396FF5', '#4D31DE', '#FF604D','#A626EA']
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
      this.option.series[0].data = this.data;
      this.option.legend.data = this.data.map(v=>{
        return v.name;
      });
    },
    initColor() {
      let colors = [];
      
    }
  }
};
</script>

