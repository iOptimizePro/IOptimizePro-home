<script lang="ts" setup>
// 引入公共样式
import '~/styles/styles.scss'
// 在图片加载完毕后执行
import { executeAfterImagesLoaded } from '~/utils/utils'
// 阻尼滚动
// gsap
import { initSmoothScrolling } from '~/utils/initSmoothScrolling'

useSeoMeta({
  title: 'IOptimizePro | 智能工业数据分析与优化平台',
  description: '智能工业数据分析与优化平台',
  // 搜索关键词
  keywords: '工业数据分析 优化平台',
})
useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '~/assets/logo.png' }],
})

const loadingRef = ref<any>(null)
const nuxtPage = ref(false)
nextTick(() => {
  if (process.client) {
    setTimeout(() => {
      executeAfterImagesLoaded(() => {
        nuxtPage.value = true
        setTimeout(() => {
          loadingRef.value.close()
        }, 1000)
      })
    }, 1000)
  }
})

if (process.client) {
  initSmoothScrolling()
}
</script>

<template>
  <ILoading ref="loadingRef" />
  <NuxtPage :hidden="!nuxtPage" :keepalive="{ max: 10 }" />
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
  scroll-behavior: smooth;
}

@font-face {
  font-family: ArailMTItalic;
  src: url('~/assets/fonts/Arial-MT-W04-Black-Italic.ttf');
}
</style>
