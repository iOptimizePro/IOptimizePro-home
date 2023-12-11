<script lang="ts" setup>
import BlocksScene from './BlocksScene'

function createBlocksScene() {
  const blocksScene = new BlocksScene('.background')
  blocksScene.create()
}

nextTick(() => {
  createBlocksScene()
})
</script>

<template>
  <div ref="canvas" class="background"></div>
</template>

<style lang="scss" scoped></style>
