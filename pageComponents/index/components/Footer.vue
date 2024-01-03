<script lang="ts" setup></script>

<template>
  <div class="footer">
    <div class="footer-logo">
      <div class="title">iOptimizePro</div>
    </div>
    <div class="footer-down">
      <div class="inner">
        <div class="left">
          友情链接：<a href="/" rel="nofollow" target="_blank">Vue.js官网</a>　　　
          <a href="/" rel="nofollow" target="_blank">iOptimizePro智能工业数据分析与优化平台 </a>
          <br />Created by 智造前沿 2023
        </div>
        <div class="right">
          <a href="/" target="_blank">网站地图</a><br />
          版权所有@2023
          <a href="/" rel="nofollow" target="_blank">智造前沿</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #151515;

  .footer-logo {
    padding: 38px 0;
    border-bottom: 1px solid #fff;

    @media screen and (max-width: 768px) {
      padding: 20px 0;
    }

    .title {
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      max-width: 1200px;
      color: #ffffff;
      font:
        bold 32px ArailMTItalic,
        serif;
      //text-shadow: 0 0 10px #fff;

      @media screen and (max-width: 768px) {
        justify-content: center;
        font-size: 18px;
      }
    }
  }

  .footer-down {
    background: #212121;
    padding: 26px 0;
    font-size: 14px;
    line-height: 24px;

    @media screen and (max-width: 768px) {
      padding: 12px 0;
      font-size: 12px;
    }

    .inner {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1200px;
      clear: both;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }

      div,
      span,
      a {
        color: #fff;
      }
    }
  }
}
</style>
