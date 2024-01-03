<script lang="ts" setup>
const mainData = ref([
  {
    title: '全方位数据处理与分析服务',
    description:
      '基于机器学习、深度学习、自然语言处理等人工智能技术、计算机视觉技术和数据融合技术，结合云计算的分布式处理，提供全方位的工业数据处理和分析服务，满足企业生产优化需求。',
  },
  {
    title: '海量数据存储与高效处理',
    description:
      '利用分布式存储与计算，搭载Spark大数据处理引擎，实现海量工业数据的高效存储和处理，确保数据的安全性和实时性。',
  },
  {
    title: '多场景多模板的个性化选择与编辑',
    description:
      '平台提供4个大场景和24个小场景的应用选择，满足不同工业生产环境的个性化需求，帮助企业针对特定场景进行一键式的数据分析与优化。',
  },
  {
    title: '多元数据分析与预测模型',
    description:
      '平台提供多种数据分析和预测模型，涵盖故障、质量、效率等方面，帮助企业及时发现和解决生产中的问题，提高生产过程的可靠性和效率。',
  },
  {
    title: '多维度的智能优化决策',
    description: '平台支持多维度的数据分析和模型预测，为企业提供全面、准确的数据支持，帮助企业实现智能化的优化决策。',
  },
  {
    title: '跨平台移动应用支持',
    description:
      '除了Web端界面，平台还提供跨平台的移动应用支持，用户可以随时随地访问平台，查看数据分析结果、接收实时预警信息，并进行决策和操作，提高决策的时效性和便捷性。',
  },
])
</script>

<template>
  <div class="page-4 paddings">
    <div class="centers">
      <div class="page-main-title">
        <h3>产品优势</h3>
        <em></em>
      </div>
      <ul class="page-main">
        <li v-for="(item, index) in mainData" :key="index">
          <a href="/">
            <div class="text">
              <h3>{{ item.title }}</h3>
              <em>{{ item.description }}</em>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-4 {
  .page-main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    position: relative;

    li {
      box-sizing: border-box;
      width: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: url('~/assets/images/page4/cardBg.svg') center center no-repeat;
        background-size: cover;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        filter: grayscale(50%);
        transition: all 0.3s ease;

        &:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          filter: grayscale(0%);
        }

        .text {
          h3 {
            margin-bottom: 20px;
          }

          em {
            display: block;
            font-size: 16px;
            line-height: 25px;
            font-style: normal;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
