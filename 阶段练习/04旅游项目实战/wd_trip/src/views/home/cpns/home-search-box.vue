<template>
    <!-- 城市页面 -->
    <div class="section current-city border-bottom-line">
        <span class="left" @click="cityClick">{{ currentCity.cityName }}</span>
        <div class="right">
            <span>当前城市</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
    </div>
    <!-- 日期范围 -->
    <div class="section range border-bottom-line" @click="show_calendar = true">
        <div class="left item">
            <span>入住</span>
            <span class="date">{{ formatDayMouth(startDate) }}</span>
        </div>
        <div class="center">共{{ totalDays }}晚</div>
        <div class="right item">
            <span>离店</span>
            <span class="date">{{ formatDayMouth(endDate) }}</span>
        </div>
    </div>
    <!-- 日历组件 -->
    <van-calendar 
        v-model:show="show_calendar" 
        type="range" 
        @confirm="onConfirm" 
        color="#ff9854" 
    />
    <!-- 价格 -->
    <div class="section price border-bottom-line">
        <span class="left">价格不限</span>
        <span class="right">人数不限</span>
    </div>
    <!-- 关键词/位置/民宿名 -->
    <div class="section kewords border-bottom-line">
        <span>关键词/位置/民宿名</span>
    </div>
    <!-- 热门推荐 -->
    <div class="section hot-suggests border-bottom-line">
        <template v-for="(item, index) in hotSuggests">
            <span class="item">{{ item.tagText.text }}</span>
        </template>
    </div>
    <!-- 搜索 -->
    <div class="search" @click="searchClick">
        开始搜索
    </div>
</template>

<script setup>
import useCityStore from '@/stores/city';
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/home';
import userMainStore from '@/stores/main';
import { computed, ref } from 'vue';
import {formatDayMouth,diffDays} from '@/utils/format_date';
import { useRouter } from 'vue-router';

const router = useRouter();


const cityStore = useCityStore();
const { currentCity} = storeToRefs(cityStore)

const cityClick = () => {
    console.log('cityClick')
    router.push('/city');
}

const mainStore = userMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const totalDays = computed(() => {
    return diffDays(startDate.value, endDate.value)
})

const show_calendar = ref(false);
const onConfirm = (date) => {
    startDate.value = date[0];
    endDate.value = date[1];
    show_calendar.value = false;
}


const homeStore = useHomeStore();
const {hotSuggests} = storeToRefs(homeStore);

const searchClick = () => {
    console.log('searchClick')


    router.push({
        path: '/search',
        query: {
            startDate:formatDayMouth(startDate.value),
            endDate:formatDayMouth(endDate.value),
            city:currentCity.value.cityName
        }
    });
}

</script>

<style lang="less" scoped>
    .section{
        padding: 20px 20px;
    }

    .border-bottom-line{
        border-bottom: 1px solid #f5f5f5;
    }

    .current-city {
        display: flex;
        align-items: center;
        height: 50px;
        color: #333;

        .left {
            flex: 1;
        }

        .right {
            display: flex;
            align-items: center;
            span{
                margin-right: 10px;
            }
            img{
                height: 20px;
            }
        }
    }

    .range{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;

        .item{
            display: flex;
            flex-direction: column;
            
            .date{
                color: #777;
            }
        }

        .center{
            text-align: center;
            flex:1
        }
    }

    .price{
        display: flex;
        justify-content: space-between;
        color: #777;
    }
    .kewords{
        color: #777;
    }

    .hot-suggests{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        color: #777;
        .item{
            margin: 10px 5px;
            padding: 0 5px;
            height: 20px;
            background-color: #f5f5f5;
            border-radius: 10px;

        }
    }

    .search{
        margin: 0 20px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 20px;
        // background是一个缩写css属性，表示background
        background:  linear-gradient(90deg, #fa8c1d 0%, #fcaf3f 100%);
    }
</style>