import { onMounted, onUnmounted, ref } from "vue"

const useScroll = ()=>{

    const isReachBottom = ref(false)
    // 滚动的距离
    const scrollTop = ref(0)
    // 页面的总高度
    const scrollHeight = ref(document.documentElement.scrollHeight)

    // 页面的可视高度
    const clientHeight = ref(document.documentElement.clientHeight)

    const handlScrollEvent = () => {

        scrollTop.value = document.documentElement.scrollTop

        scrollHeight.value = document.documentElement.scrollHeight


        clientHeight.value = document.documentElement.clientHeight

        // console.log("滚动的距离:",scrollTop, scrollHeight, clientHeight)

        if (scrollTop.value >= (scrollHeight.value - clientHeight.value)){
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
        isReachBottom,
        scrollTop,
        scrollHeight,
        clientHeight
    }
}

export default useScroll