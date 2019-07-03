import Vue from 'vue'
import footerComponent from "@/components/main/footer.vue";
import headerComponent from "@/components/main/header.vue";
import panelComponent from "@/components/panelComponent.vue";
import panelTabComponent from "@/components/panelTabComponent.vue";
import formTableComponent from "@/components/formTableComponent.vue";
// 注册轨迹图片
import trackTimeComponent from "@/components/trackTimeComponent.vue";
// 证书组件
import certificateComponent from "@/components/certificateComponent.vue";
// echarts
import nightingaleChart from "@/components/charts/nightingaleChart.vue";
import barChart from "@/components/charts/barChart.vue";
import pieChart from "@/components/charts/pieChart.vue";
// import mapChart from "@/components/charts/mapChart.vue";

// // login
// import loginDialog from "@/components/login/index.vue";
// // 手机认证
// import phoneDialog from "@/components/phoneDialog.vue"

const jccComponents = {};

jccComponents.install = Vue => {
  Vue.component("footer-component", footerComponent);
  Vue.component("header-component", headerComponent);
  Vue.component("panel-component", panelComponent);
  Vue.component("panel-tab-component", panelTabComponent);
  Vue.component("form-table-component", formTableComponent);
  Vue.component("track-time-component", trackTimeComponent);
  Vue.component("certificate-component", certificateComponent);

  Vue.component("nightingale-chart", nightingaleChart);
  Vue.component("bar-chart", barChart);
  Vue.component("pie-chart", pieChart);
  // Vue.component("map-chart", mapChart);

  // Vue.component("login-dialog", loginDialog);
  // Vue.component("phone-dialog", phoneDialog);
};

Vue.use(jccComponents);
