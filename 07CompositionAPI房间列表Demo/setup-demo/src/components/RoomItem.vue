<template>
  <div class="item">
    <div class="inner">
        <div class="cover">
            <img :src="roomInfo.picture_url" alt="">
        </div>
        <div class="info">
            <div class="title">{{ title}}</div>
            <div class="subtitle"> {{  roomInfo.name }}</div>
            <div class="price">{{ roomInfo.price_format + "/晚" }}</div>
            <div class="bottom" :style = "bottomStyle">{{ roomInfo.bottom_info.content }}</div>
        </div>
    </div>

  </div>
</template>

<script setup>
    import { computed } from 'vue'
    const props =  defineProps({
        roomInfo: {
            type: Object,
            required: true,
            default:()=>({})
        }
    })
    const title = computed(()=>{
        return props.roomInfo.verify_info.messages.join(" ")
    })

    const bottomStyle = computed(()=>{
        return {
            color: props.roomInfo.bottom_info.content_color,
            fontSize: props.roomInfo.bottom_info.font_size + "px",
        }
    })


</script>

<style scoped>
   .item {
        width: 33.33%;
   }

   .inner {
        margin: 8px;
        .cover {
                border-radius: 5px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }

        .info {
            .subtitle {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 14px;
                color: #999;
            }

            .bottom {
                margin-top: 5px;
            }
        }
   }
</style>