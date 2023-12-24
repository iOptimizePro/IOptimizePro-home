<template>
  <div id="app">
    <i-menu />
    <swiper :direction="'vertical'" :modules="modules" :mousewheel="true" :speed="1500" style="height: 100vh">
      <swiper-slide>
        <div class="page page-1">
          <div class="banner">
            <div class="wrapper">
              <div class="blur-wrapper">
                <div class="title">iOptimizePro</div>
                <div class="desc">智能工业数据分析与优化平台</div>
                <button class="btn btn-primary">
                  <a href="http://front.ioptimizepro.healwrap.cn" target="_blank">立即体验</a>
                </button>
              </div>
            </div>
          </div>
          <!--第一版-->
          <!--<img src="~assets/images/bg1.png" />-->
          <!--第二版-->
          <!--客户端渲染 three.js中使用了document所以使用客户端渲染-->
          <!--<client-only>-->
          <!--  <i-background class="background" />-->
          <!--</client-only>-->
          <!--第三版-->
          <div class="background">
            <img src="~assets/images/bg2.svg" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page page-2">2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="page page-3">3</div>
      </swiper-slide>
      <swiper-slide>
        <div class="page page-4">4</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Mousewheel } from 'swiper/modules'

const modules = [Mousewheel]
</script>

<style lang="scss" scoped>
#app {
  .page {
    position: relative;
    display: flex;
    color: #ffffff;
    justify-content: center;
    font-size: 40px;
    height: 100vh;

    .background {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0;
      filter: blur(10px);
      overflow: hidden;
      animation: fadeIn 1s ease-out 2s forwards;
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

      img {
        width: 70%;
        height: 70%;

        @media screen and (max-width: 768px) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .banner {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      z-index: 1;

      .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        //justify-content: center;
        //align-items: center;
        //transform: translate(-20%, 0%);
        //@media screen and (max-width: 768px) {
        //  transform: translate(0%, 0%);
        //}

        .blur-wrapper {
          //position: absolute;
          display: flex;
          width: 60%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          //backdrop-filter: blur(10px);
          //background: #000000d0;
          //filter: blur(10px);
          //border: 2px #ffffffd0 dashed;
          padding: 50px 0;
          filter: blur(10px);
          opacity: 0;
          transform: translateY(50px);
          animation: fadeSlideIn 1s ease-out 1.2s forwards;
          //z-index: -1;

          @media screen and (max-width: 768px) {
            width: 100%;
            padding: 20px 0;
          }

          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              filter: blur(10px);
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateY(0px);
            }
          }

          .title {
            font:
              bold 60px ArailMTItalic,
              serif;
            margin-bottom: 20px;
            //text-shadow: 0 0 10px #fff;

            @media screen and (max-width: 768px) {
              font-size: 50px;
            }
          }

          .desc {
            font-size: 30px;
            margin-bottom: 20px;
            //text-shadow: 0 0 10px #fff;

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
            background: #1677ff;
            border: none;
            outline: none;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              background: #1677ff;
              //background: #000000;

              a {
                color: #fff;
              }
            }

            &:active {
              transform: scale(0.9);
            }

            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              //color: #000;
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  $colors: (
    1: #fff,
    2: #0f0,
    3: #00f,
    4: #ff0,
  );
  @each $key, $value in $colors {
    .page-#{$key} {
      background: $value;
    }
  }
}
</style>
