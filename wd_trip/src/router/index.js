import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: "/",
            redirect: "/home"
        },
        {
            name: "home",
            path: "/home",
            component: () => import("@/views/home/index.vue")
        },
        {
            name: "favor",
            path: "/favor",
            component: () => import("@/views/favor/index.vue")
        },
        {
            name: "order",
            path: "/order",
            component: () => import("@/views/order/index.vue")
        },
        {
            name: "message",
            path: "/message",
            component: () => import("@/views/message/index.vue")
        },
        {
            name: "city",
            path: "/city",
            component: () => import("@/views/city/index.vue"),
            // meta: {isHideTabbar: true}
        }
    ]
})


export default router