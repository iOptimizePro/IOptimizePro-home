<template>
  <div id="app">
    <i-menu />
    <div class="page">
      <div class="banner">
        <div class="wrapper">
          <div class="title">iOptimizePro</div>
          <div class="desc">智能工业数据分析与优化平台</div>
          <button class="btn btn-primary">立即体验</button>
        </div>
      </div>
      <img src="~assets/images/bg1.png" />
    </div>
    <div class="page">2</div>
    <div class="page">3</div>
    <div class="page">4</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#app {
  $colors: (
    1: transparent,
    2: #0f0,
    3: #00f,
    4: #ff0,
  );

  .page {
    position: relative;
    display: flex;
    color: #ffffff;
    justify-content: center;
    font-size: 40px;
    height: 100vh;
    background: #fff;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }

    .banner {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;

      .wrapper {
        z-index: 1;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        transform: translate(-20%, 0%);
        @media screen and (max-width: 768px) {
          transform: translate(0%, 0%);
        }

        .title {
          font-size: 60px;
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 0 0 10px #fff;

          @media screen and (max-width: 768px) {
            font-size: 50px;
          }
        }

        .desc {
          font-size: 30px;
          margin-bottom: 20px;
          text-shadow: 0 0 10px #fff;

          @media screen and (max-width: 768px) {
            font-size: 20px;
          }
        }

        .btn {
          width: 200px;
          height: 50px;
          border-radius: 5px;
          font-size: 20px;
          font-weight: bold;
          background: #fff;
          color: #000;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            background: #1677ffff;
            color: #fff;
          }

          &:active {
            transform: scale(0.9);
          }
        }
      }
    }
  }

  @each $key, $value in $colors {
    .page:nth-child(#{$key + 1}) {
      background: $value;
    }
  }
}
</style>
