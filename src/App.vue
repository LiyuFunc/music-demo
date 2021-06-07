<template>
  <el-container class="el">
    <el-header class="header"> 黑土音乐 </el-header>
    <el-container>
      <el-aside width="200px" class="left">
        <el-menu :default-active="$route.path" router class="el-menu-vertical-demo">
          <el-menu-item index="/find">
            <i class="el-icon-search"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <el-menu-item index="/latest">
            <i class="el-icon-tickets"></i>
            <span slot="title">最新音乐</span>
          </el-menu-item>
          <el-menu-item index="/mv">
            <i class="el-icon-video-camera"></i>
            <span slot="title">最新MV</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <!-- 路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>
<style scoped>
.el {
  /* height: 1000px; */
  background-color: #ededed;
  width: 100%;
}
.header {
  font-size: 30px;
  text-align: center;
  line-height: 60px;
}
.main {
  background-color: #fff;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>