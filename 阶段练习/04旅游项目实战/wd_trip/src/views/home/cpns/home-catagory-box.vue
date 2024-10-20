<template>
  <div class="catagory-box">
    <template v-for="item in catagory">
        <div class="item">
            <img :src="item.pictureUrl" alt="">
            <div class="title">{{item.title}}</div>
        </div>
    </template>
  </div>
</template>

<script setup>
    import useHomeStore from '@/stores/home'
    import { storeToRefs } from 'pinia';
    const homeStore = useHomeStore()
    const { catagories : catagory } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
  .catagory-box {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    overflow-x: auto;
    text-align: center;

    // &是获取less的父选择器的一种语法

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin: 0 10px;
        width: 70px;
        height: 60px;


        img{
          width: 35px;
        }
    }
  }
</style>