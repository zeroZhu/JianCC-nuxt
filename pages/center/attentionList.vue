<template>
  <div class="personal-layout">
    <div class="list-tab mb20">
      <!-- tab头部 -->
      <div class="list-tab-item" :class="{'active':tabIndex=='enterprise'}" @click="tabIndex='enterprise'">
        <div class="tab-item-content mt20">
          <i class="iconfont icon-qiye" style="font-size:80px;color:#0067ED;"></i>
          <div class="count">
            <span>{{enterprise.total}}</span>
            <p>关注企业</p>
          </div>
        </div>
      </div>
      <div class="list-tab-item" :class="{'active':tabIndex=='person'}" @click="tabIndex='person'">
        <div class="tab-item-content mt20">
          <i class="iconfont icon-renyuan" style="font-size:85px;color:#0067ED;"></i>
          <div class="count">
            <span>{{person.total}}</span>
            <p>关注人员</p>
          </div>
        </div>
      </div>
      <div class="list-tab-item" :class="{'active':tabIndex=='project'}" @click="tabIndex='project'">
        <div class="tab-item-content mt20">
          <i class="iconfont icon-xiangmu" style="font-size:80px;color:#0067ED;"></i>
          <div class="count">
            <span>{{project.total}}</span>
            <p>关注项目</p>
          </div>
        </div>
      </div>
    </div>
    <!-- tab内容 -->
    <transition-group>
      <panel-component key="enterprise" v-if="tabIndex=='enterprise'">
        <h4 class="list-title" slot="header">
          企业动态
        </h4>
        <div class="list-content" slot="content">
          <el-table
            stripe
            :data="enterprise.list"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="企业名称"
              align="center"
              >
              <template slot-scope="scope" >
                {{scope.row.name}}
              </template>  
            </el-table-column>
            <el-table-column
              prop="time"
              label="关注时间"
              align="center">
            </el-table-column>
            <el-table-column
              prop="operte"
              align="center"
              label="操作">
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
      <panel-component key="person" v-if="tabIndex=='person'">
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
              align="center">
            </el-table-column>
            <el-table-column
              prop="time"
              label="关注时间"
              align="center">
            </el-table-column>
            <el-table-column
              prop="operate"
              align="center"
              label="操作">
              <el-button class="attent-btn">取消关注</el-button>
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
      <panel-component key="project" v-if="tabIndex=='project'">
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
              label="项目名称"
              align="center">
              <template slot-scope="scope" >
                <div style="width:100%;padding-left:42px;text-align:left">
                  {{scope.row.name}}
                </div>
              </template>  
            </el-table-column>
            <el-table-column
              prop="time"
              label="关注时间"
              align="center">
            </el-table-column>
            <el-table-column
              prop="operate"
              align="center"
              label="操作">
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
        this.enterprise.list.push({name:"安徽四库全数科技有限公司", time:"2018-01-01",content:"中央党史研究室中央党校南院小区抗震节能综合改造工程中央党史研究室骚子营4号院小区节能综合改造工程"});
        this.person.list.push({name:'何志恒', time:"2018-01-01",content:'中央党史研究室中央党校南院小区抗震节能综合改造工程中央党史研究室骚子营4号院小区节能综合改造工程'})
        this.project.list.push({name:'创新产业园二期项目', time:"2018-01-01",content:'中央党史研究室中央党校南院小区抗震节能综合改造工程中央党史研究室骚子营4号院小区节能综合改造工程'})
      }
      
    }
  }
}
</script>

