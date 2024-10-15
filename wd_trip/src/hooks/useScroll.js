import { onMounted, onUnmounted, ref } from "vue"

const useScroll = (elRef)=>{

    let el = window

    const isReachBottom = ref(false)
    // 滚动的距离
    const scrollTop = ref(0)
    // 页面的总高度
    const scrollHeight = ref(0)

    // 页面的可视高度
    const clientHeight = ref(0)

    const handlScrollEvent = () => {

        if (el === window){
            scrollTop.value = document.documentElement.scrollTop

            scrollHeight.value = document.documentElement.scrollHeight
    
            clientHeight.value = document.documentElement.clientHeight
        }else{
            scrollTop.value = el.scrollTop

            scrollHeight.value = el.scrollHeight

            clientHeight.value = el.clientHeight
        }


        // console.log("滚动的距离:",scrollTop, scrollHeight, clientHeight)

        if (scrollTop.value >= (scrollHeight.value - clientHeight.value)){
            console.log("到达底部")
            isReachBottom.value = true
        }else{
            isReachBottom.value = false
        }
        
    }

    onMounted(()=>{
        if (elRef){
            el = elRef.value
        }
        el.addEventListener('scroll', handlScrollEvent)
    })

    onUnmounted(()=>{
        el.removeEventListener('scroll', handlScrollEvent)
    })
    return {
        isReachBottom,
        scrollTop,
        scrollHeight,
        clientHeight
    }
}

export default useScroll