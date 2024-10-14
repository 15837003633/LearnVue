import { onMounted, onUnmounted, ref } from "vue"

const useScroll = ()=>{

    const isReachBottom = ref(false)

    const handlScrollEvent = () => {
        // 滚动的距离
        const scrollTop = document.documentElement.scrollTop
        // 页面的总高度
        const scrollHeight = document.documentElement.scrollHeight

        // 页面的可视高度
        const clientHeight = document.documentElement.clientHeight

        // console.log("滚动的距离:",scrollTop, scrollHeight, clientHeight)

        if (scrollTop >= (scrollHeight - clientHeight )){
            console.log("到达底部")
            isReachBottom.value = true
        }else{
            isReachBottom.value = false
        }
        
    }

    onMounted(()=>{
        window.addEventListener('scroll', handlScrollEvent)
    })

    onUnmounted(()=>{
        window.removeEventListener('scroll', handlScrollEvent)
    })
    return {
        isReachBottom
    }
}

export default useScroll