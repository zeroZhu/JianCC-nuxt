<template>
  <div class="personal-layout">
    <div class="list-tab mb14">
      <!-- tab头部 -->
      <div class="list-tab-item" :class="{'active':tabIndex=='enterprise'}" @click="tabIndex='enterprise'">
        <h4 class="tab-item-title">企业动态</h4>
        <div class="tab-item-content">
          <i class="iconfont icon-qiye" style="font-size:80px;color:#0067ED;"></i>
          <div class="count">
            <span>{{enterprise.total}}<i v-if="enterprise.increment != 0" class="iconfont icon-shangsheng"></i></span>
            <p v-if="enterprise.increment == 0">暂无更新</p>
            <p v-else style="color:#ED2221">今日新增 {{enterprise.increment}} 条</p>
          </div>
        </div>
      </div>
      <div class="list-tab-item" :class="{'active':tabIndex=='person'}" @click="tabIndex='person'">
        <h4 class="tab-item-title">人员动态</h4>
        <div class="tab-item-content">
          <i class="iconfont icon-renyuan" style="font-size:85px;color:#0067ED;"></i>
          <div class="count">
            <span>{{person.total}}<i v-if="person.increment != 0" class="iconfont icon-shangsheng"></i></span>
            <p v-if="person.increment == 0">暂无更新</p>
            <p v-else style="color:#ED2221">今日新增 {{person.increment}} 条</p>
          </div>
        </div>
      </div>
      <div class="list-tab-item" :class="{'active':tabIndex=='project'}" @click="tabIndex='project'">
        <h4 class="tab-item-title">项目动态</h4>
        <div class="tab-item-content">
          <i class="iconfont icon-xiangmu" style="font-size:80px;color:#0067ED;"></i>
          <div class="count">
            <span>{{project.total}}<i v-if="project.increment != 0" class="iconfont icon-shangsheng"></i></span>
            <p v-if="project.increment == 0">暂无更新</p>
            <p v-else style="color:#ED2221">今日新增 {{project.increment}} 条</p>
          </div>
        </div>
      </div>
    </div>
    <!-- tab内容 -->
    <transition-group name="show" mode="out-in">
      <panel-component key="enterprise" v-show="tabIndex=='enterprise'">
        <h4 class="list-title" slot="header">
          企业动态
        </h4>
        <div class="list-content" slot="content">
          <el-table
            stripe
            :data="enterprise.list"
            style="width: 100%">
            <el-table-column prop="name" label="企业名称" align="center" width="250">
              <template slot-scope="scope" >
                <div style="width:100%;padding-left:42px;text-align:left">
                  {{scope.row.name}}
                </div>
              </template>  
            </el-table-column>
            <el-table-column prop="type" label="事项类型" align="center" width="120">
            </el-table-column>
            <el-table-column prop="content" label="变更内容" align="center">
              <template slot-scope="scope" >
                <div style="width:100%;padding:0 15px;text-align:left">
                  {{scope.row.content}}
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            class="el-pagination--middle"
            layout="prev, pager, next"
            :total="1000"
            style="margin: 24px 20px;text-align:right">
          </el-pagination>
        </div>
      </panel-component>
      <panel-component key="person" v-show="tabIndex=='person'">
        <h4 class="list-title" slot="header">
          人员动态
        </h4>
        <div class="list-content" slot="content">
          <el-table
            stripe
            :data="person.list"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="人员名称"
              align="center"
              width="120">
            </el-table-column>
            <el-table-column
              prop="type"
              label="事项类型"
              align="center"
              width="120">
            </el-table-column>
            <el-table-column
              prop="content"
              label="变更内容">
            </el-table-column>
          </el-table>
          <el-pagination
            background
            class="el-pagination--middle"
            layout="prev, pager, next"
            :total="1000"
            style="margin: 24px 20px;text-align:right">
          </el-pagination>
        </div>
      </panel-component>
      <panel-component key="project" v-show="tabIndex=='project'">
        <h4 class="list-title" slot="header">
          项目动态
        </h4>
        <div class="list-content" slot="content">
          <el-table
            stripe
            :data="project.list"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="企业名称"
              align="center"
              width="250">
              <template slot-scope="scope" >
                <div style="width:100%;padding-left:42px;text-align:left">
                  {{scope.row.name}}
                </div>
              </template>  
            </el-table-column>
            
            <el-table-column
              prop="type"
              label="事项类型"
              align="center"
              width="120">
            </el-table-column>
            <el-table-column
              prop="content"
              label="变更内容">
            </el-table-column>
          </el-table>
          <el-pagination
            background
            class="el-pagination--middle"
            layout="prev, pager, next"
            :total="1000"
            style="margin: 24px 20px;text-align:right">
          </el-pagination>
        </div>
      </panel-component>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 'enterprise',
      enterprise: {
        total: 20,    // 总量
        increment: 20, // 每日增量
        list: []      // 动态列表
      },
      person: {
        total: 20,    // 总量
        increment: 0, // 每日增量
        list: []      // 动态列表
      },
      project: {
        total: 20,    // 总量
        increment: 20, // 每日增量
        list: []      // 动态列表
      },
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      // 虚拟数据
      for(let i = 0;i < 10; i++){
        this.enterprise.list.push({name:"安徽四库全数科技有限公司", type:"业绩新增",content:"中央党史研究室中央党校南院小区抗震节能综合改造工程中央党史研究室骚子营4号院小区节能综合改造工程"});
        this.person.list.push({name:'何志恒', type:'业绩新增',content:'中央党史研究室中央党校南院小区抗震节能综合改造工程中央党史研究室骚子营4号院小区节能综合改造工程'})
        this.project.list.push({name:'创新产业园二期项目', type:'业绩新增',content:'中央党史研究室中央党校南院小区抗震节能综合改造工程中央党史研究室骚子营4号院小区节能综合改造工程'})
      }
      
    }
  }
}
</script>
