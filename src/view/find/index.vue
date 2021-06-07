<template>
  <div class="find">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item, index) in picList" :key="index">
        <img class="img" :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <h3>推荐音乐</h3>
    <!-- 音乐列表 -->
    <musicList ref="muiscList"></musicList>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      picList: [],
    };
  },
  created() {
    // 获取轮播图
    axios({
      url: "https://autumnfish.cn/banner?3456rge=" + Date.now(),
    }).then((backData) => {
      // console.log(backData);
      this.picList = backData.data.banners;
    });
    // 获取列表接口
    axios({
      url: "https://autumnfish.cn/personalized/newsong?35dfge=" + Date.now(),
    }).then((backData) => {
      // console.log(backData);
      this.$refs.muiscList.muiscList = backData.data.result;
    });
  },
};
</script>
<style scoped>

.find .img {
  width: 100%;
  object-fit: cover;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

</style>