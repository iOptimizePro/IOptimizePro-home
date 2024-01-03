<script lang="ts" setup>
const navData = ref([
  {
    name: '产品简介',
    url: '#page1',
  },
  {
    name: '目标人群',
    url: '#page2',
  },
  {
    name: '核心功能',
    url: '#page3',
  },
  {
    name: '产品优势',
    url: '#page4',
  },
  {
    name: '创新应用',
    url: '#page5',
  },
  {
    name: '应用场景',
    url: '#page6',
  },
  {
    name: '文档与工具',
    url: '#page7',
  },
])
</script>

<template>
  <div class="navbar">
    <div class="centers">
      <div class="navbar-wrapper">
        <div v-for="item in navData" class="navbar-item">
          <a :href="item.url" class="tab">{{ item.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.04);
  background: #fff;
  z-index: 9999;
  @media screen and (max-width: 768px) {
    display: none;
  }

  .navbar-wrapper {
    display: flex;
    justify-content: center;

    .navbar-item {
      position: relative;
      width: 12.5%;
      text-align: center;
      padding: 20px;

      a {
        display: block;
        font-size: 16px;
        color: #707070;
        line-height: 36px;
        height: 36px;
        border-right: 1px solid #e5e5e5;

        @media only screen and (min-width: 1025px) and (max-width: 1456px) {
          line-height: 68px;
          height: 68px;
        }
      }

      a.active {
        color: #317dff;
      }

      &:last-child {
        a {
          border-right: none;
        }
      }
    }
  }
}
</style>
