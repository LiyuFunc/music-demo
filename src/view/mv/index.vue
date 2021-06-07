<template>
  <div class="mv">
    <div class="search">
      <input
        type="text"
        placeholder="请输入要搜索的歌曲"
        v-model="inputValue"
        @keyup.enter="search"
      />
    </div>
    <musicList ref="musicList"></musicList>
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
      // 搜索请求
      axios({
        url:
          "https://autumnfish.cn/search?type=1004&keywords=" + this.inputValue,
      }).then((backData) => {
        // console.log(backData);
        this.$refs.musicList.muiscList = backData.data.result.mvs.map((item) => {
          item.song = {
            artists: item.artists,
            album: {
              name:item.name,
          },
            duration: item.duration,
          };
          item.picUrl = item.cover;
          return item;
        });
        this.$refs.musicList.type = "mv"
      });
    },
  },
  created() {
    axios({
      url: "https://autumnfish.cn/mv/all",
    }).then((backData) => {
      // console.log(backData);
        this.$refs.musicList.type = "mv"
      this.$refs.musicList.muiscList = backData.data.data.map((item) => {
        item.song = {
          artists: item.artists,
          album: {
              name:item.name,
          },
          duration: item.duration,
        };
        item.picUrl = item.cover;
        return item;
      });
    //   console.log(this.muiscList);
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