<template>
  <div class="home-room-item-v9">
    <div class="inner">
      <div class="item">
        <img class="cover" :src="image_url" alt="">
        <div class="info">
          <span class="summary"> {{ itemData.summaryText }}</span>
          <span class="house-name"> {{ itemData.houseName }}</span>
          <div class="bottom">
            <van-rate :model-value="rate" readonly allow-half color="#fff" />
            <span> ¥{{ itemData.finalPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    itemData : {
        type:Object,
        required:true,
    }
})

const image_url = computed(()=>props.itemData?.image?.url)
const rate = computed(()=>Number(props.itemData?.commentScore))

</script>

<style lang="less" scoped>
  .home-room-item-v9 {
    width: 50%;
    .inner {
      padding: 5px;

      .item {
        position: relative;
        border-radius: 5px;
        overflow: hidden;

        .cover {
          width: 100%;
        }

        .info {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 10px;
          display: flex;
          flex-direction: column;
          color: #fff;

          .summary {
            font-size: 14px;
          }

          .house-name {
            font-size: 16px;

            // 最多两行
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
  }
</style>