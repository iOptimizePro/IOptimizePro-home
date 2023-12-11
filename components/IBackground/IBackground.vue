<script lang="ts" setup>
import BlocksScene from './BlocksScene'

function createBlocksScene() {
  const blocksScene = new BlocksScene('.background')
  blocksScene.create()
}

onMounted(() => {
  createBlocksScene()
})
</script>

<template>
  <div ref="canvas" class="background"></div>
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
