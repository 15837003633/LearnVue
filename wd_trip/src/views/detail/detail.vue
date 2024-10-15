<template>
  <div class="detail full-screen">
    <van-swipe v-show="bannerInfo" :autoplay="3000" lazy-render :height="250">
        <van-swipe-item v-for="(banerItem,index) in bannerInfo" :key="index">
            <div class="banner-item">
                <img :src="banerItem.url" />
            </div>
        </van-swipe-item>
    </van-swipe>
  </div>

</template>

<script setup>
import {getRoomDetail} from '@/service/'
import {useRoute} from 'vue-router'
import {ref, computed} from 'vue'
const route = useRoute()

const roomDetailInfo = ref()

getRoomDetail(route.params.id).then(res => {
    roomDetailInfo.value = res.data
})

const bannerInfo = computed(() => {
  return roomDetailInfo.value?.mainPart?.topModule?.housePicture?.housePics
})

</script>

<style lang="less" scoped>
.banner-item {
    img{
        width: 100%;
    }
}
</style>