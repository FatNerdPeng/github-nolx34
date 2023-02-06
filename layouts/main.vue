<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"> </el-aside>

      <el-main>
        <div class="main-body">
          <slot />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
const system = useSystem();
</script>

<style lang="scss">
.common-layout {
  //   background: url('~/assets/img/app_background.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;

  .common-layout-video {
    position: absolute;
    width: 100%;
  }
}

.el-container {
  height: 100%;
  position: relative;
}

.el-aside {
  border-right: 1px solid $theme-color;
  color: $theme-color;
  text-align: center;
  width: 10%;
  position: relative;
}

.aside-header-text {
  display: inline-block;
  font-size: xxx-large;
  margin-top: 20px;
}

.aside-wallet {
  margin-top: 20px;
}

.aside-function {
  border-top: 1px solid $theme-color;
  margin-top: 20px;
}

.el-main {
  height: 100%;
  position: relative;
  text-align: center;
  width: 90%;
}

.main-header {
  border-bottom: 1px solid $theme-color;
  display: inline-block;
  height: 10%;
  width: 1000px;
}

.main-body {
  height: 90%;
  left: 50%;
  margin-top: 50px;
  position: absolute;
  text-align: justify;
  transform: translateX(-50%);
  width: 60%;
}

.main-header-search-div {
  width: 50%;
}

// 隐藏dom，用来调整垂直高度的
.hide {
  height: 25%;
}

.aside-wallet-list {
  cursor: pointer;
  display: flex;
  font-size: 30px;
  height: 50px;
  left: 50%;
  margin-top: 30px;
  position: inherit;
  transform: translateX(-50%);
  width: 95%;

  .el-icon {
    align-self: center;
    margin-left: 20px;
  }

  .aside-wallet-list-span {
    align-self: center;
    margin-left: 20px;
  }
}

.el-menu {
  margin: 10px;
  height: 80px;
  background-color: transparent;
  border: 0px;
  display: flex;
  cursor: pointer;

  .aside-menu-div {
    align-self: center;
    display: flex;
    font-size: 30px;

    .el-icon {
      align-self: center;
      margin-left: 20px;
    }

    .aside-menu-div-span {
      align-self: center;
      margin-left: 30px;
    }
  }
}
</style>
