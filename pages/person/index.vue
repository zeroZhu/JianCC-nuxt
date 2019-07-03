<template>
  <div class="person-list">
    <div class="list-main">
      <div class="list-atricle">
        <!-- 筛选框 -->
        <panel-component class="list-screen">
          <h4 class="header" slot="header">
            <span>筛选</span> 
            <el-button @click="resetHandler" type="text" style="color: #0067ED">重置筛选条件</el-button>
          </h4>
          <div class="content" slot="content">
            <div class="screen-item">
              <label class="screen-item--label">人员类型：</label>
              <div class="screen-item--content">
                <span v-for="item in personTypes" 
                :key="item.id"
                :class="{'active':personType==item.id}"
                @click="selectHandler(item.id)">{{item.label}}</span>
              </div>
              <div class="screen-item--more">
                更多 <i class="iconfont icon-xiala"></i>
              </div>
            </div>
          </div>
        </panel-component>
        <!-- 筛选结果 -->
        <panel-component class="list-result">
          <h4 class="header" slot="header">
            <span>建查查为您找到 <i style="color:#ed2221">231</i> 名相关从业人员</span>
            <ul class="header-right">
              <li :class="{'active':sortIndex==0}" @click="sortIndex=0">默认</li>
              <li v-for="item in sorts" :key="item.id"
                :class="{'active':sortIndex==item.id||sortIndex==-item.id}"
                @click="sortSelect(item.id)">{{item.label}}<i class="iconfont" :class="{'icon-arrow_down':item.id==-sortIndex,'icon-arrow_up':item.id!=-sortIndex}"></i></li>
            </ul>
          </h4>
          <ul class="content row" slot="content">
            <li class="result-item" style="width:50%" v-for="i in 8" :key="i">
              <img  class="logo" src="@/assets/img/logo-enterprise.png" alt="">
              <div class="info">
                <router-link tag="h4" to="/person/detail">
                  <span class="person-name">王二麻子</span>
                  <span class="person-code">342401**********19</span>
                </router-link>
                <p style="color:#999999;">
                  中交第四公路工程局有限公司
                </p>
                <p class="tags">
                  <span class="tag tag-blue">一建</span>
                  <span class="tag tag-red">企业法人</span>
                </p>
              </div>
              <div class="tips-qr"></div>
            </li>
          </ul>
        </panel-component>
        <!-- 分页 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          style="margin-top: 60px;text-align: center;">
        </el-pagination>
      </div>
      <div class="list-aside">
        <div style="height: 225px;border-radius: 4px;background: #ffffff;margin-bottom: 20px;"></div>
        <div style="height: 225px;border-radius: 4px;background: #ffffff;margin-bottom: 20px;"></div>
        <!-- 同地区公司 -->
        <panel-component class="nearby-list" style="margin-bottom:20px">
          <h4 class="header" slot="header">
            <span>同地区公司</span>
          </h4>
          <ul class="content" slot="content">
            <li class="list-item" v-for="i in 5" :key="i">
              <img  class="logo" src="@/assets/img/logo-enterprise.png" alt="">
              <div class="info">
                <h4>中铁五局集团建筑工程有限责任公司余杭分公司</h4>
                <p class="tags">
                  <span class="tag tag-yellow">建筑业资质</span>
                  <span class="tag tag-blue">勘察资质</span>
                </p>
              </div>
            </li>
          </ul>
        </panel-component>
        <!-- 最近浏览 -->
        <panel-component class="nearby-list">
          <h4 class="header" slot="header">
            <span>最近浏览</span>
          </h4>
          <ul class="content" slot="content">
            <li class="list-item" v-for="i in 5" :key="i">
              <img  class="logo" src="@/assets/img/logo-enterprise.png" alt="">
              <div class="info">
                <h4>中铁五局集团建筑工程有限责任公司余杭分公司</h4>
                <p class="time">
                  28分钟前
                </p>
              </div>
            </li>
          </ul>
        </panel-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personList",
  data() {
    return {
      personTypes: [
        { id: 0,label: "全部" },
        { id: 1,label: "安全三类人员" },
        { id: 2,label: "施工现场专业人员" },
        { id: 3,label: "特种作业人员" },
        { id: 4,label: "技术工人" }
      ],
      personType: 0,

      sorts: [
        { id: 1,label: "历史业绩" },
        { id: 2,label: "注册人数" },
      ],

      sortIndex: 0,  // 列表排序指标
    };
  },
  methods: {
    resetHandler() {
      this.personTypes = 0;  // 资质类型
    },
    selectHandler(v) {
      this.personType = v;
    },
    sortSelect(v) {
      v == this.sortIndex? this.sortIndex = -v: this.sortIndex = v;
    }
  }
};
</script>
