<script lang="ts" setup>
const cur = ref(0)
const navData = ref([
  {
    title: '业务人员',
    icon: 'icon1.png',
  },
  {
    title: 'IT人员',
    icon: 'icon2.png',
  },
  {
    title: '管理人员',
    icon: 'icon3.png',
  },
])
const mainData = ref([
  {
    left: {
      title: '无需专业技能，内置丰富工业场景模板',
      description: '轻松构建专属业务报表，助您一步搞定数据挖掘与图表可视化！',
      list: [
        '一站式智能分析解决方案，无需复杂的数据科学知识',
        '一键式建模功能，轻松挖掘数据、构建模型，快速实现业务优化',
        '多样化的场景模板，快速构建专属业务报表，让业务工作更加简单',
      ],
    },
    right: {
      img: 'img1.svg',
      title: '零基础也能玩转数据分析',
      description: '快速上手，一键智能到位，高效完成业务',
      list: ['低门槛', '智能化', '小白适用'],
    },
  },
  {
    left: {
      title: '智能平台，便捷数据分析工具',
      description: '让数据分析轻松高效，助您提高效率与准确性、一键成为分析大师！',
      list: [
        '一键式建模功能自动化处理数据、特征工程、算法选择和参数优化，快速进行数据分析、高效率完成自主建模，满足各类问题诉求。',
        '内置多种分析算子、五大类分析算法和海量模型，轻松应对各类场景建模，有效提高建模效率。',
      ],
    },
    right: {
      img: 'img2.svg',
      title: '不用编码也能进行数据处理',
      description: '机器学习、深度学习，人工智能技术玩转于指尖',
      list: ['自动化处理', '无代码分析', '简易操作'],
    },
  },
  {
    left: {
      title: '全面数据分析，可视化关键指标，数字化大屏看板',
      description: '解锁数据潜能，助您了解企业运营情况、发现问题、做出准确决策！',
      list: [
        '内置数字化大屏开箱即用，全流程智能可视化数据',
        '快速应用人工智能技术、计算机视觉技术等，实现智能监控分析，提高生产效率',
        'AI对话式分析，提供智能问答服务，获取精准决策支持',
      ],
    },
    right: {
      img: 'img3.svg',
      title: '无需亲临现场也能决策分析',
      description: '线上远程式管理，让监督足不出户',
      list: ['在线分析', '远程决策', '实时监控'],
    },
  },
])
</script>

<template>
  <div class="page-2 paddings">
    <div class="centers">
      <div class="page-main-title">
        <h3>目标人群</h3>
        <em></em>
      </div>
      <ul class="page-nav">
        <li v-for="(item, index) in navData" :key="index" :class="{ cur: index === cur }" @mouseover="cur = index">
          <img :alt="item.title" :src="importImage(`/assets/images/page2/${item.icon}`)" />
          <h3>{{ item.title }}</h3>
        </li>
      </ul>
      <!--<div class="tab-main cur" style="display: flex">-->
      <!--  <div class="text">-->
      <!--    <h3>业务人员智能分析，一步搞定挖掘建模</h3>-->
      <!--    <h4>内置案例开箱即用，全流程智能建模，零基础轻松玩转高阶技能</h4>-->
      <!--    <p>内置丰富的行业案例，开箱即用，引导快速构建专属的业务模型</p>-->
      <!--    <p>提供一键式建模功能，自动完成数据处理、特征工程 、算法选择和参数择优等全流程自动化实现</p>-->
      <!--    <p>有效降低技术门槛，让业务人员能够快速构建专业模型</p>-->
      <!--  </div>-->
      <!--  <div class="img">-->
      <!--    <div class="main">-->
      <!--      <img src="~/assets/images/page2/img1.png" alt="" />-->
      <!--      <h3>不懂 AI 技术也能玩转“机器学习”</h3>-->
      <!--      <span><i>零基础</i> <i>智能化</i> <i>低门槛</i> </span>-->
      <!--      <h4>三小时快速学习、一步智能建模、一键快速部署</h4>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--</div>-->

      <div v-for="(item, index) in mainData" :key="index" :class="['tab-main', index === cur ? 'cur' : '']">
        <div class="text">
          <h3>{{ item.left.title }}</h3>
          <h4>{{ item.left.description }}</h4>
          <p v-for="(item, index) in item.left.list" :key="index">{{ item }}</p>
        </div>
        <div class="img">
          <div class="main">
            <img :src="importImage(`/assets/images/page2/${item.right.img}`)" alt="" />
            <h3>{{ item.right.title }}</h3>
            <span>
              <i v-for="(item, index) in item.right.list" :key="index">{{ item }}</i>
            </span>
            <h4>{{ item.right.description }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-2 {
  .page-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
    margin-bottom: 70px;

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 85px;
      cursor: pointer;
      padding-bottom: 12px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 0;
        height: 5px;
        background: #317dff;
        bottom: -3px;
        transition: 0.5s;
      }

      h3 {
        font-size: 18px;
        line-height: 25px;
        font-weight: normal;
        margin-top: 7px;
      }

      img {
        width: 45px;
        height: 45px;
        margin-bottom: 10px;
      }
    }

    li.cur {
      &::before {
        width: 100%;
      }

      h3 {
        color: #317dff;
      }
    }
  }

  .tab-main {
    display: none;
    justify-content: space-between;
    //align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .text {
      width: 50%;
      padding-right: 65px;
      padding-bottom: 30px;
      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
      }

      h3 {
        position: relative;
        font-size: 22px;
        line-height: 22px;
        padding-bottom: 40px;
        color: #317dff;
        margin-bottom: 40px;

        &::before {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 60px;
          height: 2px;
          background: #317dff;
        }

        @media screen and (max-width: 1280px) {
          font-size: 19px;
          margin-bottom: 30px;
          padding-bottom: 25px;
        }

        @media screen and (max-width: 768px) {
          font-size: 16px;
          padding-bottom: 12px;
          margin-bottom: 15px;
          font-weight: normal;
        }
      }

      h4 {
        font-size: 18px;
        font-weight: normal;
        line-height: 22px;
        margin-bottom: 30px;
        @media screen and (max-width: 1280px) {
          font-size: 16px;
          line-height: 24px;
        }

        @media screen and (max-width: 768px) {
          font-size: 13px;
          line-height: 22px;
          margin-bottom: 12px;
        }
      }

      p {
        display: block;
        color: #999;
        font-size: 14px;
        line-height: 26px;
        margin-bottom: 15px;
        padding-left: 25px;
        background: url(~/assets/images/page2/hook.png) left 5px no-repeat;
        @media screen and (max-width: 768px) {
          line-height: 22px;
          margin-bottom: 6px;
          font-size: 13px;
          background-size: 14px 14px;
        }
      }
    }

    .img {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      box-sizing: border-box;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 15px;
      }

      .main {
        position: relative;
        box-sizing: border-box;
        display: block;
        width: calc(100% - 20px);
        height: 334px;
        margin-left: 20px;
        padding: 40px 30px;
        box-shadow: 0 3px 40px rgba(49, 125, 255, 0.21);

        @media screen and (max-width: 1280px) {
          height: 275px;
        }

        @media screen and (max-width: 768px) {
          margin-left: 0;
          width: 100%;
          height: auto;
          padding: 15px 20px;
          box-shadow: 0 0 10px rgb(49 125 255 / 13%);
        }

        img {
          position: absolute;
          left: -26px;
          top: -53px;
          width: 180px;
          height: 180px;
          max-width: 100%;

          @media screen and (max-width: 768px) {
            display: none;
          }
        }

        h3 {
          padding-left: 140px;
          margin-top: 10px;
          margin-bottom: 69px;
          font-size: 20px;
          // 多行换行
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          @media screen and (max-width: 1280px) {
            margin-bottom: 30px;
          }

          @media screen and (max-width: 768px) {
            padding-left: 0;
            margin-bottom: 12px;
            margin-top: 5px;
            font-size: 17px;
          }
        }

        span {
          display: block;
          width: 100%;
          text-align: center;

          @media screen and (max-width: 768px) {
            text-align: left;
          }

          i {
            display: inline-block;
            margin-right: 30px;
            font-size: 15px;
            line-height: 39px;
            padding: 0 30px;
            border-radius: 4px;
            font-style: normal;
            margin-bottom: 5px;

            &:nth-child(3n-2) {
              background: #eafbf1;
              color: #2fd47a;
            }

            &:nth-child(3n-1) {
              background: #eaf2ff;
              color: #317dff;
            }

            &:nth-child(3n) {
              background: #fff4f0;
              color: #ff9567;
            }

            @media screen and (max-width: 1280px) {
              font-size: 14px;
              margin-right: 15px;
              padding: 0 30px;
              margin-bottom: 5px;
            }
            @media screen and (max-width: 768px) {
              font-size: 12px;
              line-height: 30px;
              padding: 0 15px;
              margin-right: 5px;
            }
          }
        }

        h4 {
          display: block;
          font-size: 18px;
          color: #317dff;
          font-weight: normal;
          text-align: center;
          margin-top: 30px;
          padding: 0;
          // 单行换行
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          @media screen and (max-width: 1280px) {
            font-size: 17px;
            margin-top: 20px;
          }
          @media screen and (max-width: 768px) {
            font-size: 14px;
            text-align: left;
            margin-top: 12px;
          }
        }
      }
    }
  }

  .tab-main.cur {
    display: flex;

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
  }
}
</style>
