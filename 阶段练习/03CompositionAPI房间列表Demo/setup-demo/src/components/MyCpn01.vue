<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
    import { ref, reactive, computed, watch, onMounted } from 'vue';

    export default {
        // props/emits 还是和之前的规则是一样的，在选项中定义
        emits: ['increment'],
        props: ["name", "age"],

        setup(props,context) {
            
            // 两个参数 ：props 和 context 都是 Vue 实例的属性, 
            // props 包含父组件传递过来的属性
            // context 包含 非props的attrbutes,slots,emit方法等
            console.log(props,context);

            // 定义响应式数据
            const count = ref(0);
            const user = reactive({name: 'Scott', age: 28});

            // 定义计算属性
            const message = computed(() => {
                return `Hello, ${props.name}! You are ${props.age} years old.`;
            });

            // 定义watch
            watch(count, (newVal, oldVal) => {
                console.log(`count changed from ${oldVal} to ${newVal}`);
            });

            // 定义方法
            function increment() {
                count.value++;
                emit('increment', count.value);
            }

            // 定义生命周期
            onMounted(() => {
                console.log('mounted');
            });

            // 返回给模板使用
            return {
                count,user,message,increment,
            };
        }
    };
</script>

  
  <style scoped>
  </style>