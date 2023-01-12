import {defineStore} from "pinia";

export const mainStore = defineStore("mainstore", {
    state: () => {
        return {
            leftbarSvgNames: [
                {
                    name:'zhuzhuang',
                    path:'/src/assets/leftbar/cq-zhuzhungtu.svg'
                },
                {
                    name:'tiaoxing',
                    path:'/src/assets/leftbar/cq-tiaoxingtu.svg'
                },
                {
                    name:'meigui',
                    path:'/src/assets/leftbar/cq-meiguitu.svg'
                },
                {
                    name:'huantu',
                    path:'/src/assets/leftbar/cq-huantu.svg'
                },
                {
                    name:'wordcloud',
                    path:'/src/assets/leftbar/cq-wordcloud.svg'
                }
            ]
        }
    },
    // 类似computed，用于修饰一些值
    actions: {},
    // 类似methods，可同步异步调用方法
    getters: {},
});