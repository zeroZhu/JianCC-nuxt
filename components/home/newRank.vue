<template>
  <div class="new-rank">
    <h3 class="new-rank-title mb20">
      新榜
    </h3>
    <div class="new-rank-content">
      <div class="new-rank-tab">
        <h4 v-for="(item,key) in tabConfig" :key="key" :class="{'active':index == key }" @click="index=key" >{{item.label}}</h4>
      </div>
      <ul class="new-rank-list">
        <li class="list-item" v-for="item in data[tabConfig[index].fieldName]" :key="item.id">
          <h5 class="list-item-title">{{item.name}}</h5>
          <p class="list-item-time">收录时间：{{item.time}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "newRank",
  data() {
    return {
      index: 0,
      tabConfig:[
        {
          label:"施工企业",
          fieldName: "construction"
        },
        {
          label:"勘察企业",
          fieldName: "survey"
        },
        {
          label:"设计企业",
          fieldName: "design"
        },
        {
          label:"监理企业",
          fieldName: "supervision"
        },
        {
          label:"造价企业",
          fieldName: "manufacturingCost"
        },
        {
          label:"招标代理企业",
          fieldName: "biddingAgent"
        }
      ],
      data: {
        construction: [
          { id: 0, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 1, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 2, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 3, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 4, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 5, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
        ],
        survey: [
          { id: 0, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 1, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 2, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 3, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 4, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 5, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
        ],
        supervision: [
          { id: 0, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 1, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 2, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 3, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 4, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 5, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
        ],
        design: [
          { id: 0, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 1, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 2, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 3, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 4, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 5, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
        ],
        manufacturingCost: [
          { id: 0, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 1, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 2, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 3, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 4, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 5, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
        ],
        biddingAgent: [
          { id: 0, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 1, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 2, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 3, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 4, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
          { id: 5, name: "玉田振兴工程建设管理与招标有限公司", time:"2019-03-07" },
        ]
      }
    };
  }
}
</script>

<style lang="less" scoped>
.new-rank {
  .new-rank-title {
    font-size: 22px;
    color: #222222;
    font-weight: 400;
    padding: 4px 13px 12px 7px;
    position: relative;
    border-bottom: 1px solid #EAEDF1;
  }
  .new-rank-title::after {
    content: "";
    height: 3px;
    width: 64px;
    border-radius: 2px;
    background-color: #0067ED;
    position: absolute;
    left: 0px;
    bottom: -1px;
  }
  .new-rank-content {
    display: flex;
    border: 1px solid #EAEDF1;
    background-color: #ffffff;
    .new-rank-tab {
      width: 126px;
      height: 414px;
      border-right: 1px solid #EAEDF1;
      box-sizing: border-box;
      padding-top: 34px;
      background-color: #FCFEFF;
      >h4 {
        height: 45px;
        line-height: 45px;
        margin-bottom: 15px;
        font-size: 14px;
        color: #333333;
        font-weight: normal;
        text-align: center;
        cursor: pointer;
        position: relative;
        transition: background 1s cubic-bezier(.075,.82,.165,1);
        &.active {
          width: 140px;
          font-size: 16px;
          color: #ffffff;
          position: relative;
          left: -7px;
          background-color: #0067ED !important;
        }
        &.active::before, &.active::after {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          display: block;
          border: 5px solid transparent;
        }
        &.active::before {
          border-left: 5px solid #0067ED;
          border-right: 0;
          top: 42px;
          left: 3px;
          transform:rotate(-45deg);
        }
        &.active::after {
          border-right: 5px solid #0067ED;
          border-left: 0;
          top: 42px;
          right: 3px;
          transform:rotate(45deg);
        }
      }
      >h4:hover{
        background-color: #f0f0f0;
      }
    }
    .new-rank-list {
      padding: 17px 20px;
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      .list-item {
        width: 220px;
        height: 160px;
        padding: 35px 22px 20px;
        box-sizing: border-box;
        font-size: 16px;
        border: 1px solid #EAEDF1;
        box-sizing: border-box;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        .list-item-title {
          line-height: 28px;
          font-weight: normal;
          color: #333333;
          cursor: pointer;
        }
        .list-item-title:hover {
          color: #0067ED;
        }
        .list-item-time {
          text-align: left;
          color: #999999;
          font-size: 14px;
        }
      }
      .list-item:hover {
        box-shadow: 0px 0px 11px 5px #eeeeee;
        transition: 0.5s;
      }
      .list-item:nth-child(1)::after {
        content: "";
        width: 40px;
        height: 30px;
        padding: 0 6px;
        position: absolute;
        top: -10px;
        left: 14px;
        background: url("~assets/img/home/newRank/01.png") no-repeat center;
        background-color: #ffffff;
      }
      .list-item:nth-child(2)::after {
        content: "";
        width: 40px;
        height: 30px;
        padding: 0 6px;
        position: absolute;
        top: -10px;
        left: 14px;
        background: url("~assets/img/home/newRank/02.png") no-repeat center;
        background-color: #ffffff;
      }
      .list-item:nth-child(3)::after {
        content: "";
        width: 40px;
        height: 30px;
        padding: 0 6px;
        position: absolute;
        top: -10px;
        left: 14px;
        background: url("~assets/img/home/newRank/03.png") no-repeat center;
        background-color: #ffffff;
      }
      .list-item:nth-child(4)::after {
        content: "";
        width: 40px;
        height: 30px;
        padding: 0 6px;
        position: absolute;
        top: -10px;
        left: 14px;
        background: url("~assets/img/home/newRank/04.png") no-repeat center;
        background-color: #ffffff;
      }
      .list-item:nth-child(5)::after {
        content: "";
        width: 40px;
        height: 30px;
        padding: 0 6px;
        position: absolute;
        top: -10px;
        left: 14px;
        background: url("~assets/img/home/newRank/05.png") no-repeat center;
        background-color: #ffffff;
      }
      .list-item:nth-child(6)::after {
        content: "";
        width: 40px;
        height: 30px;
        padding: 0 6px;
        position: absolute;
        top: -10px;
        left: 14px;
        background: url("~assets/img/home/newRank/06.png") no-repeat center;
        background-color: #ffffff;
      }
    }
  }
}
</style>

