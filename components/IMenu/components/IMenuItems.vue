<script lang="ts" setup>
declare type DataType = {
  name: string
  url: string
}
defineProps<{
  fontSize?: number
  data: DataType[]
}>()
</script>

<template>
  <div class="menu-item">
    <a :style="{ fontSize: `${fontSize}px` }" href="#">首页</a>
  </div>
  <template v-for="item in data" :key="item">
    <div class="menu-item">
      <a :href="item.url" :style="{ fontSize: `${fontSize}px` }">{{ item.name }}</a>
    </div>
  </template>
  <div class="menu-item">
    <a href="#">
      <img
        :style="`width: ${fontSize ? fontSize * 1.2 : 30}px; height: ${
          fontSize ? fontSize * 1.2 : 30
        }px; object-fit: cover`"
        class="icon-user"
        src="~assets/icon/user.png"
      />
    </a>
  </div>
  <div class="menu-item">
    <a :style="{ fontSize: `${fontSize}px` }" class="login-link" href="#">登录</a>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;

  a {
    font-size: 18px;
    overflow: hidden;
    color: #ffffff;
    padding: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.3s;

    @media screen and (max-width: 768px) {
      &:hover {
        border-bottom: 1px #fff solid;
      }

      .icon-user {
        display: none;
      }
    }
  }

  .login-link {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
}
</style>
