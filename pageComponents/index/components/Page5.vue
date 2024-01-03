<script lang="ts" setup>
const mainData = ref([
  {
    title: '一键式报表生成',
    description:
      '平台为业务人员提供了一键式数据报表生成功能，将数据分析结果以直观的报表形式展示。无需进行繁琐的数据整理和转换工作，节省时间和精力。',
  },
  {
    title: '可视化工业数据大屏展示',
    description:
      '平台提供直观的可视化的一站式大屏界面，展示生产实时数据、设备状态、生产计划等信息，帮助用户全面了解生产现场情况，及时做出决策。',
  },
  {
    title: '数据标签库支持',
    description:
      '平台拥有工业的数据标签库，为数据分类和分析提供基础。用户可以对数据进行标签化处理，便于后续的数据分析和模型训练。',
  },
  {
    title: '可扩展性和定制化',
    description:
      '平台具有高度的可扩展性和可定制化，可以根据不同企业的需求场景，提供定制化的功能和解决方案，满足特定企业的具体需求，帮助一站式解决难题。',
  },
  {
    title: 'AI对话式分析',
    description: '平台通过自然语言处理和人工智能技术，实现对话式的数据分析和模型预测，提高交互效率和决策准确性。',
  },
  {
    title: '视觉智能监控分析',
    description:
      '平台利用计算机视觉技术对生产现场等场景的视频数据进行实时监控和回溯分析。用户可以通过一键式操作，轻松访问过去的视频记录，无论是对某个特定事件的回溯分析还是对生产过程的全面监控，迅速获取所需的视频数据。',
  },
  {
    title: '智能化生产调度',
    description:
      '平台结合历史数据和实时数据，利用机器学习和人工智能技术，自动优化生产调度方案，提高生产效率和资源利用率。',
  },
  {
    title: '智能预警和故障诊断',
    description:
      '平台利用人工智能技术，实现对设备状态和生产过程的智能监测，提供实时预警和故障诊断服务，帮助企业及时发现和解决潜在问题，降低生产成本和风险。',
  },
  {
    title: '智能化供应链优化',
    description:
      '平台利用大数据分析技术，实现对供应链的全面监测和优化。通过实时跟踪和分析供应链各环节，提供准确的需求预测和库存管理，帮助企业实现供需平衡和成本控制。',
  },
  {
    title: '基于智能算法的节能优化',
    description:
      '平台引入基于智能算法的节能优化功能，实现能源消耗的实时监测和分析。通过结合外部环境和生产需求，自动调整设备运行参数和工艺流程，从而实现能源的最大节约和效率提高。',
  },
])
</script>

<template>
  <div id="page5" class="page-5 paddings">
    <div class="centers">
      <div class="page-main-title">
        <h3>创新应用</h3>
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
.page-5 {
  .page-main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    position: relative;
    @media (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    li {
      box-sizing: border-box;
      width: 100%;

      a {
        position: relative;
        display: block;
        box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.08);
        padding: 30px;
        background: url('~/assets/images/page5/cardBg.png') bottom center no-repeat;
        background-size: 200%;
        filter: grayscale(50%);
        transition:
          filter 0.3s ease-in-out,
          transform 0.3s ease-in-out;
        height: calc(280px + 30px * 2);

        @media screen and (max-width: 1280px) {
          padding: 20px;
          height: calc(200px + 20px * 2);
        }

        @media screen and (max-width: 768px) {
          height: auto;
        }

        &:hover {
          transform: translateY(-5px);
          filter: grayscale(0);
        }

        h3 {
          margin-bottom: 20px;
        }

        em {
          display: block;
          font-size: 16px;
          line-height: 30px;
          font-style: normal;
          color: #999;
        }
      }
    }
  }
}
</style>
