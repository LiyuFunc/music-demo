<template>
  <table class="list">
    <tr class="item">
      <th class="i1">音乐标题</th>
      <th class="i2">歌手</th>
      <th class="i3">专辑</th>
      <th class="i4">时长</th>
    </tr>
    <tr
      class="item"
      v-for="(item, index) in muiscList"
      :key="index"
      @click="trClick(item.id)"
    >
      <td class="i1">
        <div class="i1-item">
          {{ index + 1 }} <img :src="item.picUrl" alt="" class="pic" />
          {{ item.name }}
        </div>
      </td>
      <td class="i2">{{ item.song.artists[0].name }}</td>
      <td class="i3">{{ item.song.album.name }}</td>
      <td class="i4">{{ item.song.duration | formatTime }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  data() {
    return {
      muiscList: [],
      type: "music",
    };
  },
  methods: {
    trClick(id) {
      // console.log(id);
      // 封装成组件后，组件是不知道你传递的路由是什么
      // 所以 需要加一个判断
      if (this.type === "music") {
        this.$router.push("/playMusic?id=" + id);
      } else {
        this.$router.push("/playMv?id=" + id);
      }
    },
  },
};
</script>
<style scoped>
.pic {
  width: 70px;
  height: 70px;
}
.i1-item {
  display: flex;
  align-items: center;
}
.list {
  width: 100%;
  margin-top: 20px;
}
.item th {
  text-align: left;
}
.item th.i1 {
  padding-left: 120px;
}
</style>