<script lang="ts" setup>
const cur = ref(0)
const navData = ref(['创建数据仓', '数据接入', '数据标签库', '数据处理', '数据分析', '模型部署', '个人中心'])
const mainData = ref([
  {
    img: 'img1.png',
    title: '创建数据仓',
    description: '建立用于存储和管理数据的中心化数据仓库',
    list: ['人员信息', '设备台账', '故障档案', '物料效据', '仓储数据'],
  },
  {
    img: 'img2.png',
    title: '数据接入',
    description: '接入各种工业数据源，实现企业数据导入和整合',
    list: [
      '时序数据',
      '图像数据',
      '文本数据',
      '数值数据',
      '结构化数据',
      '非结构化数据',
      '历史数据',
      '实时数据',
      '报警数据',
    ],
  },
  {
    img: 'img3.png',
    title: '数据标签库',
    description: '轻量化打造标签库，助力企业高质量发展',
    list: ['排产排程', '制造执行', '工艺管理', '质量管理', '质量管理', '模具管理'],
  },
  {
    img: 'img4.png',
    title: '数据处理',
    description: '高效处理数据，快速提升工业数据利用率',
    list: ['高效清洗', '数据整合', '特征提取'],
  },
  {
    img: 'img5.png',
    title: '数据分析',
    description: '深度分析数据，支持企业决策智能化',
    list: ['深度挖掘', '可视化展现', '洞察决策'],
  },
  {
    img: 'img6.png',
    title: '模型部署',
    description: '快速部署模型，有效提高业务效率',
    list: ['自动化部署', '实时更新', '稳定运行'],
  },
  {
    img: 'img7.png',
    title: '个人中心',
    description: '个性化设置，一键升级用户体验感',
    list: ['个人信息管理', '通知管理', '任务管理', '帮助与支持'],
  },
])
</script>

<template>
  <div id="page3" class="page-3 paddings">
    <div class="centers">
      <div class="page-main-title">
        <h3>产品功能展示</h3>
        <em></em>
      </div>
      <div class="page-nav">
        <ul class="nav-tab" data-bigl="8">
          <li
            v-for="(item, index) in navData"
            :key="index"
            :class="{ cur: index === cur }"
            style="width: 14.2857%; padding: 0px"
            @mouseover="cur = index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-for="(item, index) in mainData" :key="index" :class="['tab-main', index === cur ? 'cur' : '']">
        <div class="img">
          <img :src="importImage(`/assets/images/page3/${item.img}`)" alt="数据接入" />
        </div>
        <div class="text">
          <h3>{{ item.title }}</h3>
          <em>{{ item.description }}</em>
          <span>
            <i v-for="(item, index) in item.list" :key="index">{{ item }}</i>
          </span>
          <a href="/" target="_blank">立即体验</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-3 {
  background: url('~/assets/images/page3/bg.png') no-repeat center;
  background-size: cover;

  .page-main-title {
    h3 {
      color: #fff;
    }

    em {
      background: #fff;
    }
  }

  .page-nav {
    background: #fff;
    padding: 15px 30px;
    border-radius: 99px;
    margin-bottom: 36px;
    overflow: hidden;

    @media screen and (max-width: 1280px) {
      padding: 12px 25px;
    }

    @media screen and (max-width: 768px) {
      padding: 6px 12px;
      border-radius: 6px;
      margin-bottom: 15px;
    }

    .nav-tab {
      display: flex;
      justify-content: center;

      li {
        padding: 0 22px;
        white-space: nowrap;
        line-height: 53px;
        text-align: center;
        font-size: 16px;
        border-radius: 99px;
        margin: 0 5px;
        cursor: pointer;
        transition: 0.5s;

        @media screen and (max-width: 1280px) {
          font-size: 14px;
          line-height: 38px;
        }

        @media screen and (max-width: 768px) {
          font-size: 12px;
          margin: 2px 0;
          width: 25%;
          line-height: 25px;
        }
      }

      li.cur {
        background: #317dff;
        color: #fff;
      }
    }
  }

  .tab-main {
    display: none;
    margin-bottom: 10px;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .img {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 62.16%;
      height: 449px;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 8px 8px 35px rgba(0, 33, 124, 0.19);
      background: #fff;

      @media screen and (max-width: 1280px) {
        width: 58%;
        height: 363px;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        height: 54.5vw;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 14px 14px 0 0;
        height: 49px;
        width: 100%;
        box-shadow: 8px 8px 35px rgba(0, 33, 124, 0.19);
        background: #fff url(~/assets/images/page3/imgBg.png) left center no-repeat;
        background-size: auto 100%;
      }

      img {
        margin-top: 49px;
        max-width: 100%;
        max-height: 100%;

        @media screen and (max-width: 1280px) {
          margin-top: 40px;
        }
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 37.82%;
      padding-right: 50px;
      color: #fff;
      padding-top: 45px;
      @media screen and (max-width: 1280px) {
        width: 42%;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
        margin-top: 20px;
      }

      h3 {
        font-size: 20px;
        margin-bottom: 20px;

        @media screen and (max-width: 1280px) {
          font-size: 18px;
        }

        @media screen and (max-width: 768px) {
          font-size: 17px;
          margin-bottom: 10px;
        }
      }

      em {
        display: block;
        font-size: 16px;
        line-height: 25px;
        font-style: normal;
        margin-bottom: 42px;

        @media screen and (max-width: 1280px) {
          font-size: 14px;
          margin-bottom: 35px;
        }

        @media screen and (max-width: 768px) {
          font-size: 13px;
          margin-bottom: 12px;
        }
      }

      i {
        display: inline-block;
        line-height: 34px;
        padding: 0 26px;
        font-style: normal;
        font-size: 14px;
        border-radius: 99px;
        background: #72a3ff;
        margin-right: 13px;
        margin-bottom: 24px;

        @media screen and (max-width: 1280px) {
          font-size: 12px;
          line-height: 30px;
          margin-bottom: 16px;
        }

        @media screen and (max-width: 768px) {
          line-height: 26px;
          padding: 0 15px;
          margin-right: 8px;
          margin-bottom: 6px;
        }
      }

      a {
        display: inline-block;
        font-size: 18px;
        color: #317dff;
        line-height: 45px;
        width: 136px;
        border-radius: 5px;
        background: #fff;
        text-align: center;
        margin-top: 46px;

        @media screen and (max-width: 1280px) {
          font-size: 15px;
          line-height: 40px;
          margin-top: 38px;
        }

        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 30px;
          width: 100px;
          margin-top: 12px;
        }
      }
    }
  }

  .tab-main.cur {
    display: flex;

    .img {
      animation: rights 1s;
      @keyframes rights {
        0% {
          transform: translate(25px, 0);
          opacity: 0;
        }

        100% {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
    }

    .text {
      animation: lefts 1s;
      @keyframes lefts {
        0% {
          transform: translate(-25px, 0);
          opacity: 0;
        }
        100% {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
    }
  }
}
</style>
