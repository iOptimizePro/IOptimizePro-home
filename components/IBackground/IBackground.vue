<script lang="ts" setup>
import { onMounted } from 'vue'

function createBlocksScene() {
  let BlocksScene: any = null
  // 动态加载模块，nuxt 干的好事
  if (process.client) {
    import('./BlocksScene')
      .then((module) => {
        BlocksScene = module.default
        const blocksScene = new BlocksScene!('.background')
        blocksScene.create()
      })
      .catch((error) => {
        console.error('模块加载失败:', error)
      })
  }
}

onMounted(() => {
  createBlocksScene()
})
</script>

<template>
  <div class="background"></div>
</template>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0;
  filter: blur(10px);
  overflow: hidden;
  animation: fadeIn 1s ease-out 1.2s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      filter: blur(10px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
}
</style>
