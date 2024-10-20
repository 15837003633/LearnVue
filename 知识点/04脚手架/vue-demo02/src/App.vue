<template>
    <my-cpn title="aaa" button-text="bbb" @wd-click="handleWdClick"></my-cpn>
    <my-cpn title="wu" button-text="dang" @wd-click="handleWdClick"></my-cpn>
    <hr>
    <div> {{ message }} </div>
</template>

<script>
    // 这里是组件的逻辑代码
    import MyCpn from './components/MyCpn.vue'
    export default {
      data() {
        return {
          message: 'Hello Vue!'
        }
      },
      components: {
        MyCpn
      },
      methods: {
        handleWdClick(arg1, arg2) {
          console.log(arg1,arg2)
          this.message = arg1 + " " + arg2
        }
      }
    }
</script>

<style scoped>
</style>