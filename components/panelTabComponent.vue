<template>
  <div class="panel-tab-component">
    <div class="panel-header"
      @mouseenter="listVisible=true"
      @mouseleave="listVisible=false"
    >
      <ul class="panel-title">
        <li v-for="item in titleConfig" :key="item.id" :class="{'active':hover==item.id}"
          @mouseenter="hover=item.id"
          @mouseleave="hover=0"
        >
          {{item.label}}
        </li>
      </ul>
      <ul class="panel-list" v-if="listExit" v-show="listVisible">
        <li v-for="item in titleConfig" :key="item.id" :class="{'active':hover==item.id}"
          @mouseenter="hover=item.id"
          @mouseleave="hover=0"
        >
          <ul>
            <li v-for="v in item.children" :key="v.id">
              <span>{{v.label}}</span>
              <span style="color: #0067ED">{{v.count}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "panelTabComponent",
  props: {
    titleConfig: Array
  },
  data() {
    return {
      index: 1,
      hover: 0,
      listVisible: false,
      listExit: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.listExit = this.titleConfig.some(v=> {
        return v.children&&v.children.length>0;
      })
    }
  }
}
</script>

<style lang="less" scoped>
.panel-tab-component {
  position: relative;
  .panel-header {
    .panel-title {
      height: 57px;
      line-height: 55px;
      display: flex;
      font-size: 16px;
      color: #222222;
      background: #fbfdff;
      border-bottom: 1px solid #eff2f7;
      li {
        cursor: pointer;
        position: relative;
        display: flex;
        flex: auto;
        justify-content: center;
        &.active {
          color: #0067ED;
          background: #fbfbfb;
        }
      }
      li:first-child {
        font-weight: bold;
        color: #0067ED;
      }
    }
    .panel-list {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #eff2f7;
      border-left: 1px solid #eff2f7;
      border-right: 1px solid #eff2f7;
      position: absolute;
      z-index: 998;
      background: #ffffff;
      >li {
        flex: 1;
        border-right: 1px solid #eff2f7;
        &.active {
          background: #fbfbfb;
        }
        >ul {
          padding: 0 10px;
          li{
            color: #222222;
            display: flex;
            justify-content: space-between;
            line-height: 22px;
            font-size: 12px;
            margin: 5px 0;
            cursor: pointer;
          }
        }
        >ul li:hover {
          color: #1982ee;
        }
      }
      >li:last-child {
        border-right: none;
      }
    }
  }
 
}
</style>

