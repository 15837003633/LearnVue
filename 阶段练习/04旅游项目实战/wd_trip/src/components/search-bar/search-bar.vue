<template>
        <div class="search-bar">
            <div class="content">
                <div class="left">
                    <div class="date">
                        <span>住</span>
                        <span>{{ startDateStr }}</span>
                    </div>
                    <div class="date">
                        <span>离</span>
                        <span>{{ endDateStr }}</span>
                    </div>
                </div>
                <div class="middle">
                    <div class="input">关键字/位置/民宿</div>
                </div>
                <div class="right">
                    <van-icon name="search" />
                </div>
            </div>
        </div>

</template>

<script setup>

import userMainStore from '@/stores/main'
import { computed } from 'vue';
import { formatDayMouth } from '@/utils/format_date'
const mainStore = userMainStore()

const startDateStr = computed(() => {
  return formatDayMouth(mainStore.startDate,"MM.DD")
})

const endDateStr = computed(() => {
  return formatDayMouth(mainStore.endDate,"MM.DD")
})  

</script>

<style lang="less" scoped>
    .search-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        // height: 60px;
        background-color: #f5f5f5;

        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 10px 5px;
            padding: 5px;
            border-radius: 5px;
            background-color: #ddd;

            .left {
                display: flex;
                flex-direction: column;
                align-items: center;

                .date {
                    display: flex;
                    align-items: center;
                }
            }
            .middle {
                flex:1;
                margin-left: 20px;
                color: #333;
            }
        }

    }

</style>