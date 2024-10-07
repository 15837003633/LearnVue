<template>
  <div class="app">
    <room-section :data="highScoreData"></room-section>
    <br>
    <hr>
    <br>
    <room-section :data="highScoreData"></room-section>
  </div>
</template>

<script setup>
  import  RoomSection from "./components/RoomSection.vue";
  // 直接导入数据文件
  // import highScoreData from "./data/high_score.json";


  import { ref } from "vue";

  let highScoreData = ref();

  // 模拟网络请求异步加载数据
  setTimeout(() => {
    import("./data/high_score.json").then(res => {
      highScoreData.value = res.default;
      console.log(highScoreData.value);
    });
  }, 1000);
  
</script>

<style lang="less" scoped>
  .app {
    width: 1024px;
    margin: 0 auto;
  }

</style>