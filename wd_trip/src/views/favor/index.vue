<template>
  <div>Favor Page</div>
  <!-- 这里的scroll_el是通过ref的方式获取的，所以在script中定义的变量名必须与ref的变量名一致 -->
  <div class="content" ref="scroll_el">
    <template v-for="item in 100">
      <div>列表数据 {{item}}</div>
    </template>
  </div>
</template>

<script setup>
import useScroll from '@/hooks/useScroll';
import { onMounted, ref } from 'vue';

// 通过ref的方式获取dom中的元素对象，vue中不要通过document.getElementById获取元素对象，因为这样会导致代码耦合性太高，不利于维护
const scroll_el = ref();
useScroll(scroll_el);


onMounted(() => {
  // 获取的dom元素对象需要等待onMounted生命周期之后才能获取到. 才能使用ref
  console.log(scroll_el.value);

  // 给dom元素对象添加样式
  scroll_el.value.style.backgroundColor = 'orange';
});

</script>

<style lang="less" scoped>
.content{
  overflow-y: auto;
  height: 400px;

}
</style>