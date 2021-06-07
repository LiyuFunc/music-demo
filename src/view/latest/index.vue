<template>
  <div class="latest">
    <div class="search">
        <input type="text" placeholder="请输入要搜索的歌曲" v-model="inputValue" @keyup.enter="search" />
    </div>
    <musicList ref="muiscList"></musicList>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    search() {
        // 根据输入值发送请求
        axios({
            url:'https://autumnfish.cn/search?keywords='+ this.inputValue,
        }).then(backData=> {
            // console.log(backData);
            this.$refs.muiscList.muiscList = backData.data.result.songs.map(item=>{
                item.song = {
                    artists: item.artists,
                    album: item.album,
                    duration: item.duration
                }
                return item;
            })
        })
    },
  },

  created() {
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
.search {
  width: 400px;
  margin: 0 auto;
}
.search input {
    width: 100%;
}

</style>