<template>
  <div class="header">
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
  </div>
</template>

<script setup>
    defineProps({
        title:{
            type: String,
            default: "默认标题"
        },
        subtitle:{
            type: String,
            default: "默认副标题"
        }
    })
</script>

<style lang="less" scoped>

.header {
    h2{
      color: #333;
      font-size: 36px;
      margin: 0;
    }
    h4{
      color: #666;
      font-size: 24px;
      margin: 20px 0;
    }
  }

</style>