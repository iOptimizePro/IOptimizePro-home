<template>
  <div id="app">
    <i-menu />
    <div class="page page-1">
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
      <!--<div class="page-1">-->
      <!--  <div class="centers">-->
      <!--    <div class="tx-mains-title floats">-->
      <!--      <h3>人人可参与、人人可分析</h3>-->
      <!--      <em></em>-->
      <!--    </div>-->
      <!--    <ul class="tx-ai1-nav tab-navs floats">-->
      <!--      <li class="">-->
      <!--        <img class="img1" src="/uploadfile/2022/0217/20220217062214297.png" alt="" />-->
      <!--        <img class="img2" src="/uploadfile/2022/0217/20220217062222523.png" alt="" />-->
      <!--        <h3>业务人员</h3>-->
      <!--      </li>-->
      <!--      <li class="">-->
      <!--        <img class="img1" src="/uploadfile/2022/0217/20220217062127429.png" alt="" />-->
      <!--        <img class="img2" src="/uploadfile/2022/0224/20220224040212370.png" alt="" />-->
      <!--        <h3>数据分析师</h3>-->
      <!--      </li>-->
      <!--      <li class="cur">-->
      <!--        <img class="img1" src="/uploadfile/2022/0217/20220217062036139.png" alt="" />-->
      <!--        <img class="img2" src="/uploadfile/2022/0217/20220217062044765.png" alt="" />-->
      <!--        <h3>数据科学家</h3>-->
      <!--      </li>-->
      <!--    </ul>-->
      <!--    <div class="tx-ai1-main tab-mains floats" style="display: none">-->
      <!--      <div class="text fl">-->
      <!--        <h3>业务人员智能分析，一步搞定挖掘建模</h3>-->
      <!--        <h4>内置案例开箱即用，全流程智能建模，零基础轻松玩转高阶技能</h4>-->
      <!--        <p>内置丰富的行业案例，开箱即用，引导快速构建专属的业务模型</p>-->
      <!--        <p>提供一键式建模功能，自动完成数据处理、特征工程 、算法选择和参数择优等全流程自动化实现</p>-->
      <!--        <p>有效降低技术门槛，让业务人员能够快速构建专业模型</p>-->
      <!--      </div>-->
      <!--      <div class="img fr">-->
      <!--        <div class="main">-->
      <!--          <img src="/statics/mlsj2022/img/ai1-img1.png" alt="" />-->
      <!--          <h3>不懂 AI 技术也能玩转“机器学习”</h3>-->
      <!--          <span><i>零基础</i> <i>智能化</i> <i>低门槛</i> </span>-->
      <!--          <h4>三小时快速学习、一步智能建模、一键快速部署</h4>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--    <div class="tx-ai1-main tab-mains floats" style="display: none">-->
      <!--      <div class="text fl">-->
      <!--        <h3>数据分析人员快速拖拽, 高效率完成自主建模</h3>-->
      <!--        <h4>200+分析算子，自动学习机制，轻松玩转各类场景建模</h4>-->
      <!--        <p>-->
      <!--          内置数据接入、数据处理、特征工程、算法模型、模型评估等全流程节点，简单拖拽配置，快速完成业务分析与模型构建-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          9大算法类型、30+数据处理节点、120+分布式算法、5种独创算法、15种文本算法、多种行业算法，强大的分析能力满足各类问题诉求-->
      <!--        </p>-->
      <!--        <p>内置各类自动学习机制，有效提高建模效率</p>-->
      <!--      </div>-->
      <!--      <div class="img fr">-->
      <!--        <div class="main">-->
      <!--          <img src="/statics/mlsj2022/img/ai1-img2.png" alt="" />-->
      <!--          <h3>不懂编码也能开展深度数据分析</h3>-->
      <!--          <span><i>零编码</i> <i>拖拽式</i> <i>自动化</i> </span>-->
      <!--          <h4>透明、可追溯、易复用的可视化建模过程</h4>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--    <div class="tx-ai1-main tab-mains floats cur" style="display: flex">-->
      <!--      <div class="text fl">-->
      <!--        <h3>复杂场景的灵活建模，满足数据科学家编码式分析需求</h3>-->
      <!--        <h4>多语言的编程体系，多形式的嵌入方式，自定义玩转个性化分析需求</h4>-->
      <!--        <p>内置SQL、Java、Python、R、Scala、Matlab编程节点，满足个性化数据处理和分析</p>-->
      <!--        <p>插件化系统结构、灵活快速集成自有算法，沉淀企业自有算法知识库</p>-->
      <!--        <p>Notebook交互式编程模式，让代码的编写和调试更简单</p>-->
      <!--      </div>-->
      <!--      <div class="img fr">-->
      <!--        <div class="main">-->
      <!--          <img src="/statics/mlsj2022/img/ai1-img3.png" alt="" />-->
      <!--          <h3>让数据科学家专注分析，释放更大潜能</h3>-->
      <!--          <span><i>自由拓展</i> <i>快速集成</i> <i>灵活编码</i> </span>-->
      <!--          <h4>编码式建模 ，过程更灵活，知识易沉淀</h4>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#app {
  $menu-height: 70px;

  .page-1 {
    position: relative;
    display: flex;
    color: #ffffff;
    justify-content: center;
    font-size: 40px;
    height: 578px;
    top: $menu-height;

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
          width: 50%;
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
              width: 200px;
              height: 50px;
              border-radius: 5px;
              font-size: 20px;
              font-weight: bold;
              background: #ffffff;
              border: none;
              outline: none;
              cursor: pointer;
              margin-top: 40px;
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
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }

  .main {
    .page-1 {
    }
  }
}
</style>
