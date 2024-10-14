<template>
  <div v-if="itemData" class="home-room-item-v3">
    <div class="inner">
        <div class="item">
        <div class="corver">
            <img :src="image_url" alt="">
        </div>
        <div class="location">
            <img src="@/assets/img/home/location.png" alt="">
            <span>{{itemData.location}}</span>
        </div>
        <div class="title"> {{ itemData.houseName }}</div>
        <div class="summary"> {{ itemData.summaryText }}</div>
        <div class="price">
            <div class="now-price"> {{ itemData.finalPrice }}</div>
            <div>/</div>
            <div class="original-price"> {{ itemData.productPrice }}</div>
            <div class="save-price"> 已省:{{ itemData.productPrice - itemData.finalPrice }}</div>
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
    

</script>

<style lang="less" scoped>
    .home-room-item-v3{
         width: 50%;
         .inner {
            padding: 5px;
         }
         .item {
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            overflow: hidden;

            .corver {
                img {
                    width: 100%;
                }
            }

            .location {
                display: flex;

                img{
                    width: 20px;
                }
            }

            .title {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            
            .price {
                display: flex;
                .original-price{
                    text-decoration: line-through;
                }
            }
        }


    }
</style>