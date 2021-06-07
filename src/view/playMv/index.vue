<template>
<div class="playMv">
<h3>标题</h3>
<p>歌手</p>
<video :src="mvUrl" controls autoplay width="800px"></video>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: this.$route.query.id,
            mvUrl:'',
        }
    },
    created() {
        // 通过id获取mv地址
        axios({
            url:'https://autumnfish.cn/mv/url?id=' + this.id,
        }).then(backData=>{
            // console.log(backData);
            this.mvUrl = backData.data.data.url;
        })
    },
}
</script>
<style scoped>
.playMv {
    width: 800px;
    margin: 0 auto;
    text-align: center;
}
</style>