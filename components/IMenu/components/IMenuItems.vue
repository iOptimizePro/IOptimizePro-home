<template>
  <div class="menu-item">
    <a href="#">首页</a>
  </div>
  <div class="menu-item">
    <a href="#">数据上传</a>
  </div>
  <div class="menu-item">
    <a href="#">场景列表</a>
  </div>
  <div class="menu-item">
    <a href="#">数据分析</a>
  </div>
  <div class="menu-item">
    <a href="#">通知提醒</a>
  </div>
  <div class="menu-item">
    <a href="#">人员管理</a>
  </div>
  <div class="menu-item">
    <a href="#">角色切换</a>
  </div>
  <div class="menu-item">
    <a href="#">个人中心</a>
  </div>
  <div class="menu-item">
    <a href="#">
      <img
        src="~assets/icon/user.png"
        style="width: 30px; height: 30px; object-fit: cover"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;

  a {
    font-size: 18px;
    overflow: hidden;
    color: #ffffff;
    padding: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.3s;

    &:hover {
    }
  }
}
</style>
