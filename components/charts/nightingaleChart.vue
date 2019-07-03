<template>
  <div :id="id" class="nightingale-chart" style="width:400px;height:260px"></div>
</template>

<script>
export default {
  name: "nightingaleChart",
  props: {
    id: String,
    data: Array
  },
  data() {
    return {
      myChart: null,
      option: {
        title: {
          subtext: "*该信息由建查查分析数据得出，仅供参考",
          left: "10px",
          bottom: "13px"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "right",
          y: "center",
          width: "50",
          data: [
            "注册房地产估价师",
            "注册造价工程师",
            "注册监理工程师",
            "注册建造师",
            "勘察设计注册工程师",
            "注册建筑师"
          ]
        },
        calculable: true,
        series: [
          {
            name: "人员绝对值",
            type: "pie",
            radius: [20, 80],
            center: ["35%", "50%"],
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 10, name: "注册房地产估价师" },
              { value: 25, name: "注册造价工程师" },
              { value: 20, name: "注册监理工程师" },
              { value: 35, name: "注册建造师" },
              { value: 30, name: "勘察设计注册工程师" },
              { value: 40, name: "注册建筑师" }
            ]
          }
        ],
        color: ['#FFC32D','#04C254', '#396FF5', '#4D31DE', '#FF604D','#A626EA']
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let { id, option } = this;
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(id));
      this.myChart.setOption(option);
    }
  }
};
</script>

