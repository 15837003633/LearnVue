<template>
  <div v-if="isLoading" class="mask" @click="isLoading = false">
    <div class="loading">
        <img src="@/assets/img/home/full-screen-loading.gif">
    </div>
  </div>
</template>

<script setup>
    import useMainStore from '@/stores/main'
    import { storeToRefs } from 'pinia';
    const mainStore = useMainStore()
    const { isLoading } = storeToRefs(mainStore)
</script>

<style lang="less" scoped>
 .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999;
    text-align: center;
    color: #fff;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        background: url('@/assets/img/home/loading-bg.png') left top / 100% 100%;
        img {
            width: 50px;
        }
    }

 }
</style>