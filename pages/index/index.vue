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
                智能工业数据分析与优化平台（iOptimizePro）是一个以人工智能技术、计算机视觉技术和数据融合技术为基础的综合性工业数据处理平台。该平台旨在帮助企业实现工业生产数据的智能化分析与优化，进而提高生产效率、降低成本并改善产品质量。
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
      <div class="page-5 paddings">
        <div class="centers">
          <div class="page-main-title">
            <h3>创新应用</h3>
            <em></em>
          </div>
        </div>
      </div>
      <div class="page-6 paddings">
        <div class="centers">
          <div class="page-main-title">
            <h3>应用场景</h3>
            <em></em>
          </div>
          <ul class="page6-nav">
            <li class="cur"><img alt="" src="~/assets/images/page6/icon1.png" />能源管理</li>
            <li class=""><img alt="" src="~/assets/images/page6/icon2.png" />设备资产管理</li>
            <li class=""><img alt="" src="~/assets/images/page6/icon3.png" />生产质量管理</li>
            <li class=""><img alt="" src="~/assets/images/page6/icon4.png" />供应链管理</li>
          </ul>
          <ul class="page6-main tab-main cur" style="display: block">
            <li>
              <img alt="能源消耗情况诊断" src="~/assets/images/page6/icon7.png" />
              <h3>能源消耗情况诊断</h3>
            </li>
            <li>
              <img alt="能耗异常值分析" src="~/assets/images/page6/icon8.png" />
              <h3>能耗异常值分析</h3>
            </li>
            <li>
              <img alt="能源质量监测" src="~/assets/images/page6/icon9.png" />
              <h3>能源质量监测</h3>
            </li>
            <li>
              <img alt="节能诊断分析" src="~/assets/images/page6/icon10.png" />
              <h3>节能诊断分析</h3>
            </li>
            <li>
              <img alt="能源效率评估" src="~/assets/images/page6/icon11.png" />
              <h3>能源效率评估</h3>
            </li>
            <li>
              <img alt="峰谷平衡优化" src="~/assets/images/page6/icon11.png" />
              <h3>峰谷平衡优化</h3>
            </li>
            <li>
              <img alt="能源预测与规划" src="~/assets/images/page6/icon11.png" />
              <h3>能源预测与规划</h3>
            </li>
            <li>
              <img alt="能源监控和报警" src="~/assets/images/page6/icon11.png" />
              <h3>能源监控和报警</h3>
            </li>
          </ul>
          <ul class="page6-main tab-main" style="display: none">
            <li>
              <img alt="设备故障诊断" src="~/assets/images/page6/icon7.png" />
              <h3>设备故障诊断</h3>
            </li>
            <li>
              <img alt="设备预测性维护" src="~/assets/images/page6/icon8.png" />
              <h3>设备预测性维护</h3>
            </li>
            <li>
              <img alt="维修保养优化" src="~/assets/images/page6/icon10.png" />
              <h3>维修保养优化</h3>
            </li>
            <li>
              <img alt="资产寿命周期管理" src="~/assets/images/page6/icon11.png" />
              <h3>资产寿命周期管理</h3>
            </li>
            <li>
              <img alt="设备利用率提升" src="~/assets/images/page6/icon11.png" />
              <h3>设备利用率提升</h3>
            </li>
            <li>
              <img alt="资产健康评估" src="~/assets/images/page6/icon11.png" />
              <h3>资产健康评估</h3>
            </li>
          </ul>
          <ul class="page6-main tab-main" style="display: none">
            <li>
              <img alt="设备健康<br>管理" src="~/assets/images/page6/icon7.png" />
              <h3>生产过程监控与优化</h3>
            </li>
            <li>
              <img alt="制造过程<br>诊断与优化" src="~/assets/images/page6/icon8.png" />
              <h3>产品质量预测与控制</h3>
            </li>
            <li>
              <img alt="工业蒸汽<br>量预测分析" src="~/assets/images/page6/icon9.png" />
              <h3>原材料异常检测</h3>
            </li>
            <li>
              <img alt="设备重过<br>载预测" src="~/assets/images/page6/icon10.png" />
              <h3>SIP标准检验规程</h3>
            </li>
            <li>
              <img alt="轮胎质量<br>相关性分析" src="~/assets/images/page6/icon11.png" />
              <h3>IQC来料检验</h3>
            </li>
            <li>
              <img alt="轮胎质量<br>相关性分析" src="~/assets/images/page6/icon11.png" />
              <h3>OQC出货检验</h3>
            </li>
            <li>
              <img alt="轮胎质量<br>相关性分析" src="~/assets/images/page6/icon11.png" />
              <h3>IPQC生产过程检验</h3>
            </li>
            <li>
              <img alt="轮胎质量<br>相关性分析" src="~/assets/images/page6/icon11.png" />
              <h3>统计过程分析</h3>
            </li>
          </ul>
          <ul class="page6-main tab-main" style="display: none">
            <li>
              <img alt="设备健康<br>管理" src="~/assets/images/page6/icon7.png" />
              <h3>需求预测与计划</h3>
            </li>
            <li>
              <img alt="制造过程<br>诊断与优化" src="~/assets/images/page6/icon8.png" />
              <h3>供应商管理与评估</h3>
            </li>
            <li>
              <img alt="工业蒸汽<br>量预测分析" src="~/assets/images/page6/icon9.png" />
              <h3>库存优化与管理</h3>
            </li>
            <li>
              <img alt="设备重过<br>载预测" src="~/assets/images/page6/icon10.png" />
              <h3>运输与物流优化</h3>
            </li>
            <li>
              <img alt="成本分析与优化" src="~/assets/images/page6/icon10.png" />
              <h3>成本分析与优化</h3>
            </li>
            <li>
              <img alt="物料效能分析" src="~/assets/images/page6/icon10.png" />
              <h3>物料效能分析</h3>
            </li>
          </ul>
        </div>
      </div>
      <div class="page-7 paddings">
        <div class="centers">
          <div class="page-main-title">
            <h3>文档与工具</h3>
            <em></em>
          </div>
          <ul class="page-main floats">
            <li>
              <a href="/" target="_blank">
                <span class="text">
                  <h3>用户帮助文档</h3>
                  <em>产品使用说明和操作指南</em>
                </span>
                <span class="img"><img alt="用户帮助文档" src="~/assets/images/page7/icon1.png" /><i></i></span>
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <span class="text">
                  <h3>常见问题解答</h3>
                  <em>解决用户常见疑问和困扰</em>
                </span>
                <span class="img"><img alt="常见问题解答" src="~/assets/images/page7/icon3.png" /><i></i></span>
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <span class="text">
                  <h3>客服热线</h3>
                  <em>提供电话客户服务通道</em>
                </span>
                <span class="img"><img alt="客服热线" src="~/assets/images/page7/icon4.png" /><i></i></span>
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
    .page-5 {
    }

    .page-6 {
      .page6-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #d5d5d5;
        padding: 0 20px;
        margin-bottom: 15px;

        li {
          position: relative;
          font-size: 18px;
          line-height: 25px;
          padding-bottom: 15px;
          cursor: pointer;

          @media screen and (max-width: 1280px) {
            font-size: 16px;
          }

          @media screen and (max-width: 768px) {
            font-size: 13px;
            padding-bottom: 8px;
          }

          img {
            position: relative;
            top: -1px;
            margin-right: 5px;
            filter: grayscale(100%);
            @media screen and (max-width: 768px) {
              display: none;
            }
          }
        }

        .cur {
          color: #317dff;

          &::before {
            width: 100%;
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -3px;
            //width: 0;
            height: 6px;
            background: #317dff;
            margin: 0 auto;
            transition: 0.5s;

            @media screen and (max-width: 1280px) {
              height: 3px;
              bottom: -2px;
            }
          }

          img {
            filter: grayscale(0%);
          }
        }
      }

      .page6-main {
        li {
          display: inline-block;
          width: 20%;
          text-align: center;
          padding: 0 30px;
          margin-top: 40px;
          box-sizing: border-box;
          cursor: pointer;

          img {
            height: 32px;
          }

          h3 {
            font-size: 16px;
            line-height: 22px;
            margin-top: 8px;
            font-weight: normal;
            height: 44px;
            overflow: hidden;
            @media screen and (max-width: 1280px) {
              font-size: 14px;
              line-height: 20px;
              height: 40px;
            }

            @media screen and (max-width: 768px) {
              font-size: 12px;
              line-height: 16px;
              height: 32px;
            }
          }
        }
      }

      .page6-main.cur {
        animation: tops 1s;

        @keyframes tops {
          0% {
            transform: translate(0px, -25px);
            opacity: 0;
          }
          100% {
            transform: translate(0px, 0px);
            opacity: 1;
          }
        }
      }
    }

    .page-7 {
      .page-main {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        li {
          width: 33%;
          margin-left: 2%;

          &:nth-child(3n-2) {
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
