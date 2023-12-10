<script lang="ts" setup>
useSeoMeta({
  title: 'IOptimizePro',
  description: '智能工业数据分析与优化平台',
  // 搜索关键词
  keywords: '工业数据分析 优化平台',
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
}

a {
  text-decoration: none;
}
</style>
