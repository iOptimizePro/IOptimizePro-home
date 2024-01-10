<template>
  <div id="loading">
    <div class="loader">
      <div class="box box-1">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-2">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-3">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-4">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
    </div>
    <div style="margin-top: 50px"><h2>加载中...</h2></div>
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  show()
})

function show() {
  document.body.style.overflow = 'hidden'
  let loadingDom = document.querySelector('#loading')
  loadingDom.style.opacity = 1
  loadingDom.style.display = 'flex'
  loadingDom.addEventListener('transitionend', function () {
    if (loadingDom.style.opacity === '1') {
      loadingDom.style.display = 'flex'
    }
  })
}

function close() {
  document.body.style.overflow = 'auto'
  let loadingDom = document.querySelector('#loading')
  loadingDom.style.opacity = 0
  loadingDom.addEventListener('transitionend', function () {
    if (loadingDom.style.opacity === '0') {
      loadingDom.style.display = 'none'
    }
  })
}

defineExpose({
  show,
  close,
})
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent !important;
}

#loading {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: transparent;
  backdrop-filter: blur(20px);
  overflow: hidden;
  transition: all 0.3s;
  z-index: 99999;
}

.loader {
  scale: 3;
  height: 50px;
  width: 40px;
}

.box {
  position: relative;
  opacity: 0;
  left: 10px;
}

.side-left {
  position: absolute;
  background-color: #286cb5;
  width: 19px;
  height: 5px;
  transform: skew(0deg, -25deg);
  top: 14px;
  left: 10px;
}

.side-right {
  position: absolute;
  background-color: #2f85e0;
  width: 19px;
  height: 5px;
  transform: skew(0deg, 25deg);
  top: 14px;
  left: -9px;
}

.side-top {
  position: absolute;
  background-color: #5fa8f5;
  width: 20px;
  height: 20px;
  rotate: 45deg;
  transform: skew(-20deg, -20deg);
}

.box-1 {
  animation: from-left 4s infinite;
}

.box-2 {
  animation: from-right 4s infinite;
  animation-delay: 1s;
}

.box-3 {
  animation: from-left 4s infinite;
  animation-delay: 2s;
}

.box-4 {
  animation: from-right 4s infinite;
  animation-delay: 3s;
}

@keyframes from-left {
  0% {
    z-index: 20;
    opacity: 0;
    translate: -20px -6px;
  }

  20% {
    z-index: 10;
    opacity: 1;
    translate: 0 0;
  }

  40% {
    z-index: 9;
    translate: 0 4px;
  }

  60% {
    z-index: 8;
    translate: 0 8px;
  }

  80% {
    z-index: 7;
    opacity: 1;
    translate: 0 12px;
  }

  100% {
    z-index: 5;
    translate: 0 30px;
    opacity: 0;
  }
}

@keyframes from-right {
  0% {
    z-index: 20;
    opacity: 0;
    translate: 20px -6px;
  }

  20% {
    z-index: 10;
    opacity: 1;
    translate: 0 0;
  }

  40% {
    z-index: 9;
    translate: 0 4px;
  }

  60% {
    z-index: 8;
    translate: 0 8px;
  }

  80% {
    z-index: 7;
    opacity: 1;
    translate: 0 12px;
  }

  100% {
    z-index: 5;
    translate: 0 30px;
    opacity: 0;
  }
}
</style>
