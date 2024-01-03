<script lang="ts" setup>
const mainData = ref([])
</script>

<template>
  <div id="page1" class="page-1 paddings">
    <div class="centers">
      <div class="page-main-title">
        <h3>产品简介</h3>
        <em></em>
      </div>
      <ul class="page-main">
        <li v-for="(item, index) in mainData" :key="index">
          <a href="/">
            <div class="text">
              <h3>{{ item.title }}</h3>
              <em>{{ item.description }}</em>
            </div>
          </a>
        </li>
      </ul>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能工业数据分析与优化平台（iOptimizePro）是一个以人工智能技术、计算机视觉技术和数据融合技术为基础的综合性工业数据处理平台。该平台旨在帮助企业实现工业生产数据的智能化分析与优化，进而提高生产效率、降低成本并改善产品质量
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-1 {
  .page-main {
  }
}
</style>
