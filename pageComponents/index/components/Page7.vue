<script lang="ts" setup>
const mainData = ref([
  {
    title: '用户帮助文档',
    description: '产品使用说明和操作指南',
    icon: 'icon1.png',
  },
  {
    title: '常见问题解答',
    description: '解决用户常见疑问和困扰',
    icon: 'icon3.png',
  },
  {
    title: '客服热线',
    description: '提供电话客户服务通道',
    icon: 'icon4.png',
  },
])
</script>

<template>
  <div class="page-7 paddings">
    <div class="centers">
      <div class="page-main-title">
        <h3>文档与工具</h3>
        <em></em>
      </div>
      <ul class="page-main">
        <li v-for="(item, index) in mainData" :key="index">
          <a href="/">
            <span class="text">
              <h3>{{ item.title }}</h3>
              <em>{{ item.description }}</em>
            </span>
            <span class="img">
              <img :alt="item.title" :src="importImage(`/assets/images/page7/${item.icon}`)" />
              <i></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-7 {
  .page-main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    li {
      width: 33%;
      margin-left: 2%;

      &:nth-child(3n-2) {
        margin-left: 0;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0 !important;
        margin-bottom: 15px;
      }

      a {
        position: relative;
        display: block;
        box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.08);
        padding: 46px 32% 46px 24px;

        em {
          display: block;
          font-size: 16px;
          line-height: 30px;
          font-style: normal;
          color: #999;
        }

        .img {
          position: absolute;
          left: 68%;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
  }
}
</style>
