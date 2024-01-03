<script lang="ts" setup></script>

<template>
  <div class="page-1 paddings">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-1 {
  .page-main {
  }
}
</style>
