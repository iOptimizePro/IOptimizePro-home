<template>
  <div id="app">
    <i-menu />
    <div class="page">
      <div class="banner">
        <div class="wrapper">
          <div class="blur-wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="title">iOptimizePro</div>
            <div class="desc">智能工业数据分析与优化平台</div>
            <button class="btn btn-primary">立即体验</button>
          </div>
        </div>
      </div>
      <!--<img src="~assets/images/bg1.png" />-->
      <!--客户端渲染 three.js中使用了document所以使用客户端渲染-->
      <client-only placeholder="Loading...">
        <i-background class="background" />
      </client-only>
    </div>
    <div class="page">2</div>
    <div class="page">3</div>
    <div class="page">4</div>
  </div>
</template>

<script lang="ts" setup>
import IBackground from '~/components/IBackground/IBackground.vue'
</script>

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

    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .banner {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;

      .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-20%, 0%);
        @media screen and (max-width: 768px) {
          transform: translate(0%, 0%);
        }

        .blur-wrapper {
          //position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(5px);
          //background: #000000d0;
          //filter: blur(10px);
          border: 2px #ffffffd0 dashed;
          padding: 30px;
          //z-index: -1;

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
  }

  @each $key, $value in $colors {
    .page:nth-child(#{$key + 1}) {
      background: $value;
    }
  }
}
</style>
