<template>
  <div id="app">
    <i-menu />
    <Banner />
    <div class="main">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <page7 />
    </div>
    <div class="ads">
      <div class="inner">
        <i-button url="/"> 立即体验</i-button>
        <i-button type="dashed" url="/"> 方案咨询</i-button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '~/pages/index/components/Footer.vue'
import Page1 from '~/pages/index/components/Page1.vue'
import Page2 from '~/pages/index/components/Page2.vue'
import Page3 from '~/pages/index/components/page3.vue'
import Page4 from '~/pages/index/components/Page4.vue'
import Page5 from '~/pages/index/components/Page5.vue'
import Page6 from '~/pages/index/components/Page6.vue'
import Page7 from '~/pages/index/components/Page7.vue'
import Banner from '~/pages/index/components/Banner.vue'
import IButton from '~/components/IButton/IButton.vue'
</script>

<style lang="scss" scoped>
#app {
  .main {
    position: relative;
    //height: 50vh;
    .page-5 {
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
}
</style>
