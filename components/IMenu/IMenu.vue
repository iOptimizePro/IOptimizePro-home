<script lang="ts" setup>
import { ref } from 'vue'
import IMenuItems from '~/components/IMenu/components/IMenuItems.vue'

const isOpenDropdown = ref(false)

const data = ref([
  {
    name: '数据上传',
    url: '#',
  },
  {
    name: '场景列表',
    url: '#',
  },
  {
    name: '数据分析',
    url: '#',
  },
  {
    name: '通知提醒',
    url: '#',
  },
  {
    name: '人员管理',
    url: '#',
  },
  {
    name: '角色切换',
    url: '#',
  },
  {
    name: '个人中心',
    url: '#',
  },
])

function toggleDropdown() {
  document.body.style.overflow = isOpenDropdown.value ? 'auto' : 'hidden' // 禁止滚动
  isOpenDropdown.value = !isOpenDropdown.value
}
</script>

<template>
  <div class="menu">
    <div class="logo">
      <a href="#">
        <img src="~/assets/images/logo2.png" />
      </a>
    </div>
    <div class="menu-right">
      <i-menu-items :data="data" />
    </div>
    <div class="menu-right-mobile" @click="toggleDropdown">
      <Icon :size="30" icon="MenuOutlined" />
    </div>
    <div :class="['menu-dropdown', isOpenDropdown ? 'menu-dropdown-open' : '']">
      <i-menu-items :data="data" :font-size="30" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: #fff;
}

.menu {
  $menu-height: 70px;

  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: $menu-height;
  background: transparent;
  //backdrop-filter: blur(10px);
  z-index: 999;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }

  .logo {
    width: 160px;
    height: 100%;
    margin-left: 20px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .menu-right {
    width: 60vw;
    max-width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 0 10px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .menu-right-mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      font-size: 14px;
      cursor: pointer;
      z-index: 10000;
    }
  }

  .menu-dropdown {
    position: absolute;
    top: 30vh;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: #000000d0;
    backdrop-filter: blur(0px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s;
    z-index: -999;
    pointer-events: none;

    @media screen and (min-width: 768px) {
      display: none;
    }

    a {
      font-size: 25px !important;
    }
  }

  .menu-dropdown-open {
    //top: $menu-height;
    //height: calc(100vh - $menu-height);
    top: 0;
    height: 100vh;
    opacity: 1;
    backdrop-filter: blur(10px);
    z-index: 9999;
    pointer-events: all;
  }
}
</style>
