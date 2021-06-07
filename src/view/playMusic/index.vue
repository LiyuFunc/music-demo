<template>
  <div class="playMusic" v-if="musicUrl">
    <h3>{{list.al.name}}</h3>
    <p>{{list.ar | formatName}}</p>
    <img :src="list.al.picUrl" alt="" />
    <audio :src="musicUrl" controls autoplay></audio>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: this.$route.query.id,
      musicUrl: "",
      list:[],
    };
  },
  created() {
      // 根据id发送url请求
        axios({
              url:'https://autumnfish.cn/song/url?id='+this.id
          }).then(backData=>{
            //   console.log(backData);
            this.musicUrl = backData.data.data[0].url;
          })
        // 根据id获取详细信息
        axios({
              url:'https://autumnfish.cn/song/detail?ids='+this.id
          }).then(backData=>{
            //   console.log(backData);
            this.list = backData.data.songs[0];
          })
  },
};
</script>
<style scoped>
audio {
    width: 100%;
}
.playMusic {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
img {
  width: 100%;
}
</style>