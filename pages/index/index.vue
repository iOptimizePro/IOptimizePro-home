<template>
  <div id="app">
    <i-menu />
    <div class="banner-container">
      <div class="banner">
        <div class="wrapper">
          <div class="inner-wrapper">
            <div class="blur-wrapper">
              <div class="title">iOptimizePro</div>
              <div class="sub-title">智能工业数据分析与优化平台</div>
              <div class="desc">
                提供了从数据接入、数据探索、数据预处理、特征工程、模型构建、模型评估、模型管理、模型部署到最终的工程化应用的全流程“端对端”解决方案，为“全民数据科学家”提供自动化、智能化的分析模型构建能力。
              </div>
              <div class="btn-wrapper">
                <button class="btn btn-primary">
                  <a href="http://front.ioptimizepro.healwrap.cn" target="_blank">立即体验</a>
                </button>
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
    <div class="main">
      <div class="tx-tbi7 floats paddings">
        <div class="centers">
          <div class="tx-mains-title floats">
            <h3>文档与工具</h3>
            <em></em>
          </div>
          <ul class="tx-tbi7-main floats">
            <li>
              <a href="/" target="_blank">
                <span class="text">
                  <h3>帮助文档</h3>
                  <em>查看产品详细操作手册</em>
                </span>
                <span class="img"><img alt="帮助文档" src="~/assets/images/page5/icon1.png" /><i></i></span>
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <span class="text">
                  <h3>行业干货</h3>
                  <em>敬请期待</em>
                </span>
                <span class="img"><img alt="行业干货" src="~/assets/images/page5/icon2.png" /><i></i></span>
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <span class="text">
                  <h3>查看解决方案</h3>
                  <em>查看更多行业解决方案</em>
                </span>
                <span class="img"><img alt="查看解决方案" src="~/assets/images/page5/icon3.png" /><i></i></span>
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <span class="text">
                  <h3>在线咨询</h3>
                  <em>点此在线咨询客服</em>
                </span>
                <span class="img"><img alt="在线咨询" src="~/assets/images/page5/icon4.png" /><i></i></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ads">
      <div class="inner">
        <button class="btn btn-primary">
          <a href="/">立即体验</a>
        </button>
        <button class="btn btn-dash">
          <a href="/">方案咨询</a>
        </button>
      </div>
    </div>
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
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#app {
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

  .main {
    position: relative;
    //height: 50vh;

    .tx-tbi7-main {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      li {
        width: 23.5%;
        margin-left: 2%;

        &:nth-child(4n-3) {
          margin-left: 0;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
          margin-left: 0 !important;
          margin-bottom: 15px;
        }

        a {
          position: relative;
          display: block;
          box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.08);
          padding: 46px 32% 46px 24px;
        }

        .img {
          position: absolute;
          left: 68%;
          top: 50%;
          transform: translate(0, -50%);
          -webkit-transform: translate(0, -50%);
          -ms-transform: translate(0, -50%);
        }

        em {
          display: block;
          font-size: 16px;
          line-height: 30px;
          font-style: normal;
          color: #999;
        }
      }
    }
  }

  .ads {
    position: relative;
    display: flex;
    background: url('~/assets/images/bg3.png') center center no-repeat;
    background-size: cover;
    padding: 60px 0;
    text-align: center;

    @media screen and (max-width: 768px) {
      padding: 30px 0;
    }

    .inner {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 1200px;

      .btn {
        margin: 0 10px;
      }
    }
  }

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
}

.btn {
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  background: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 30px;
    margin-top: 0;
    font-size: 12px;
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
    color: #1677ff;
  }
}

.btn-dash {
  background: transparent;
  border: 1px #ffffff solid;

  a {
    color: #ffffff;
  }
}
</style>
