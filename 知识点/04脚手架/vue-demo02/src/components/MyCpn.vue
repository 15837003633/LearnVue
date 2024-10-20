<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="handleClick">{{ buttonText }}</button>
    </div>
</template>

<script>
    export default {
        emits:['wd-click'],
        props:{
            title: {
                type: String,
                default: 'This is my component'
            },
            buttonText: {
                type: String,
                default: 'Click me'
            }
        },
        methods: {
            handleClick() {
                // alert('Button clicked!')
                this.$emit('wd-click',this.title,this.buttonText)
            }
        }
    }
</script>

<style scoped>
</style>