<template>
    <div class="tab-control">
        <template v-for="(item, index) in tabs" :key="item">
            <div class="tab-item"  @click="itemClick(index)"> 
                <span class="tab-title" :class="{active: index === currentIndex}">{{item}}</span>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        emits: ['tab-click'],
        data() {
            return {
                currentIndex:0
            }
        },
        props: {
            tabs: {
                type: Array,
                required: true,
                default: () => []
                
            }
        },
        methods: {
            itemClick(index) {
                console.log(index);
                this.currentIndex = index;
                this.$emit('tab-click', index);
            }
        }
    }
</script>

<style scoped>
   .tab-control {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #eee;
    }
    .tab-item {
        flex: 1;
    }
    .tab-title {
        padding: 10px 0;
    }
    .tab-title.active {
        border-bottom: 2px solid #f00;

    }
</style>