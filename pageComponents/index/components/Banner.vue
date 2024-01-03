<script lang="ts" setup></script>

<template>
  <div class="banner-container">
    <div class="banner">
      <div class="wrapper">
        <div class="inner-wrapper">
          <div class="blur-wrapper">
            <div class="title">iOptimizePro</div>
            <div class="sub-title">智能工业数据分析与优化平台</div>
            <!--<div class="desc">-->
            <!--  智能工业数据分析与优化平台（iOptimizePro）是一个以人工智能技术、计算机视觉技术和数据融合技术为基础的综合性工业数据处理平台。该平台旨在帮助企业实现工业生产数据的智能化分析与优化，进而提高生产效率、降低成本并改善产品质量。-->
            <!--</div>-->
            <div class="btn-wrapper">
              <i-button url="http://front.ioptimizepro.healwrap.cn"> 立即体验</i-button>
            </div>
          </div>
          <img class="bg" src="~/assets/images/bg2.svg" />
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
      <!--<img class="bg" src="~/assets/images/bg2.svg" />-->
      <!--<img class="bg-bg" src="~/assets/images/bg2-bg.svg" />-->
      <img class="bg-bg" src="~/assets/images/bg2-bg2.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$menu-height: 70px;

.banner-container {
  position: relative;
  display: flex;
  color: #ffffff;
  justify-content: center;
  font-size: 40px;
  height: 578px;
  //top: $menu-height;

  @media screen and (max-width: 768px) {
    height: 230px;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;

    .bg-bg {
      position: absolute;
      transform: rotateY(180deg);
      width: 100%;
      height: 100%;
      object-fit: cover;
      //z-index: 99;
      z-index: -1;
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

      .inner-wrapper {
        margin: 0 auto;
        max-width: 1200px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 20px 0;
        }
      }

      .blur-wrapper {
        //position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
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
          align-items: center;
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

        .title,
        .sub-title {
          color: #ffffff;
        }

        .title {
          font:
            bold 32px ArailMTItalic,
            serif;
          margin-bottom: 20px;
          //text-shadow: 0 0 10px #fff;

          @media screen and (max-width: 768px) {
            font-size: 18px;
          }
        }

        .sub-title {
          font-size: 22px;
          margin-bottom: 20px;
          //text-shadow: 0 0 10px #fff;

          @media screen and (max-width: 768px) {
            font-size: 15px;
          }
        }

        .desc {
          width: 400px;
          display: block;
          font-size: 14px;
          font-style: normal;
          color: #ffffff;
          opacity: 0.7;
          line-height: 24px;
          //text-shadow: 0 0 10px #fff;

          @media screen and (max-width: 768px) {
            display: none;
          }
        }

        .btn-wrapper {
          width: 100%;

          @media screen and (max-width: 768px) {
            display: flex;
            justify-content: center;
          }

          .btn {
            margin-top: 40px;
          }
        }
      }

      .bg {
        top: 15%;
        height: 100%;
        opacity: 0;
        filter: blur(10px);
        width: 650px;
        object-fit: cover;
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
        @media screen and (max-width: 1200px) {
          display: none;
        }
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>
