<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="onBtnClick">Click me</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            message: 'Hello Vue!111'
        }
    },
    methods:{
        onBtnClick(){
            console.log('Button clicked')
            this.message = 'Button clicked'
        }
    }
}

</script>