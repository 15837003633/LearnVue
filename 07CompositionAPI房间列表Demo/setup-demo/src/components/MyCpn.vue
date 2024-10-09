<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
    import { ref, reactive, computed ,watch,onMounted} from 'vue'

    // 定义响应式数据
    const count = ref(0)
    const user = reactive({
      name: 'Scott',
      age: 28
    })

    // 定义组件的事件
    defineEmits(['increment'])

    // 定义组件的props
    defineProps({
        name: {
            type: String,
            default: 'Scott'
        }, 
        age: {
            type: Number,
            default: 28
        }
    })
     // defineProps(['name', 'age']) // 也可以数组方式定义props

    // 定义计算属性
    const message = computed(() => {
      return `Hello, ${user.name}! You are ${user.age} years old.`
    })

    // 定义watch
    watch(count, (newVal, oldVal) => {
    console.log(`count changed from ${oldVal} to ${newVal}`)
    })

    // 定义方法
     function increment() {
        count.value++
        emit('increment', count.value)
    }

    // 定义生命周期
    onMounted(() => {
        console.log('mounted')
    })
</script>

<style scoped>
</style>