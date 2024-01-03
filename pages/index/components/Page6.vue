<script lang="ts" setup>
const cur = ref(0)
const navData = ref([
  {
    title: '能源管理',
    icon: 'icon1.png',
  },
  {
    title: '设备资产管理',
    icon: 'icon2.png',
  },
  {
    title: '生产质量管理',
    icon: 'icon3.png',
  },
  {
    title: '供应链管理',
    icon: 'icon4.png',
  },
])
const mainData = ref([
  [
    {
      title: '能源消耗情况诊断',
      icon: 'icon7.png',
    },
    {
      title: '能耗异常值分析',
      icon: 'icon8.png',
    },
    {
      title: '能源质量监测',
      icon: 'icon9.png',
    },
    {
      title: '节能诊断分析',
      icon: 'icon10.png',
    },
    {
      title: '能源效率评估',
      icon: 'icon11.png',
    },
    {
      title: '峰谷平衡优化',
      icon: 'icon11.png',
    },
    {
      title: '能源预测与规划',
      icon: 'icon11.png',
    },
    {
      title: '能源监控和报警',
      icon: 'icon11.png',
    },
  ],
  [
    {
      title: '设备故障诊断',
      icon: 'icon7.png',
    },
    {
      title: '设备预测性维护',
      icon: 'icon8.png',
    },
    {
      title: '维修保养优化',
      icon: 'icon10.png',
    },
    {
      title: '资产寿命周期管理',
      icon: 'icon11.png',
    },
    {
      title: '设备利用率提升',
      icon: 'icon11.png',
    },
    {
      title: '资产健康评估',
      icon: 'icon11.png',
    },
  ],
  [
    {
      title: '生产过程监控与优化',
      icon: 'icon7.png',
    },
    {
      title: '产品质量预测与控制',
      icon: 'icon8.png',
    },
    {
      title: '原材料异常检测',
      icon: 'icon9.png',
    },
    {
      title: 'SIP标准检验规程',
      icon: 'icon10.png',
    },
    {
      title: 'IQC来料检验',
      icon: 'icon11.png',
    },
    {
      title: 'OQC出货检验',
      icon: 'icon11.png',
    },
    {
      title: 'IPQC生产过程检验',
      icon: 'icon11.png',
    },
    {
      title: '统计过程分析',
      icon: 'icon11.png',
    },
  ],
  [
    {
      title: '需求预测与计划',
      icon: 'icon7.png',
    },
    {
      title: '供应商管理与评估',
      icon: 'icon8.png',
    },
    {
      title: '库存优化与管理',
      icon: 'icon9.png',
    },
    {
      title: '运输与物流优化',
      icon: 'icon10.png',
    },
    {
      title: '成本分析与优化',
      icon: 'icon10.png',
    },
    {
      title: '物料效能分析',
      icon: 'icon10.png',
    },
  ],
])
</script>

<template>
  <div class="page-6 paddings">
    <div class="centers">
      <div class="page-main-title">
        <h3>应用场景</h3>
        <em></em>
      </div>

      <ul class="page6-nav">
        <li v-for="(item, index) in navData" :key="index" :class="{ cur: index === cur }" @mouseover="cur = index">
          <img :src="importImage(`/assets/images/page6/${item.icon}`)" alt="" />{{ item.title }}
        </li>
      </ul>
      <ul
        v-for="(item, index) in mainData"
        :key="index"
        :class="{ cur: index === cur }"
        :style="{ display: index === cur ? 'grid' : 'none' }"
        class="page6-main tab-main"
      >
        <li v-for="(item, index) in item" :key="index">
          <img :src="importImage(`/assets/images/page6/${item.icon}`)" alt="" />
          <h3>{{ item.title }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-6 {
  .page6-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
    padding: 0 20px;
    margin-bottom: 15px;

    li {
      position: relative;
      font-size: 18px;
      line-height: 25px;
      padding-bottom: 15px;
      cursor: pointer;

      @media screen and (max-width: 1280px) {
        font-size: 16px;
      }

      @media screen and (max-width: 768px) {
        font-size: 13px;
        padding-bottom: 8px;
      }

      img {
        position: relative;
        top: -1px;
        margin-right: 5px;
        filter: grayscale(100%);
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    .cur {
      color: #317dff;

      &::before {
        width: 100%;
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        //width: 0;
        height: 6px;
        background: #317dff;
        margin: 0 auto;
        transition: 0.5s;

        @media screen and (max-width: 1280px) {
          height: 3px;
          bottom: -2px;
        }
      }

      img {
        filter: grayscale(0%);
      }
    }
  }

  .page6-main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    li {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      padding: 0 30px;
      margin-top: 40px;
      cursor: pointer;

      img {
        height: 32px;
      }

      h3 {
        font-size: 16px;
        line-height: 22px;
        margin-top: 8px;
        font-weight: normal;
        height: 44px;
        overflow: hidden;
        @media screen and (max-width: 1280px) {
          font-size: 14px;
          line-height: 20px;
          height: 40px;
        }

        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 16px;
          height: 32px;
        }
      }
    }
  }

  .page6-main.cur {
    animation: tops 1s;

    @keyframes tops {
      0% {
        transform: translate(0px, -25px);
        opacity: 0;
      }
      100% {
        transform: translate(0px, 0px);
        opacity: 1;
      }
    }
  }
}
</style>
