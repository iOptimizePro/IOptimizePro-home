<script lang="ts" setup>
// swiper 样式
import 'swiper/css'

useSeoMeta({
  title: 'IOptimizePro | 智能工业数据分析与优化平台',
  description: '智能工业数据分析与优化平台',
  // 搜索关键词
  keywords: '工业数据分析 优化平台',
})
useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
})
</script>

<template>
  <NuxtPage :keepalive="{ max: 10 }" />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  color: #000;
  //文字禁止选中
  user-select: none; /* 标准语法 */
}

a {
  text-decoration: none;
}

html,
body {
  //overflow-x: hidden;
}

@font-face {
  font-family: ArailMTItalic;
  src: url('~/assets/fonts/Arial-MT-W04-Black-Italic.ttf');
}
</style>
