<template>
  <div class="lb">
    <div v-for="(item,id) in svgPaths" :key="id" class="btns" :class="currentMode.id===id ? 'btns-focus':''"
         @click="changeMode(item.name,id)">
      <leftbar-btn-vue :svgNames="item.path"></leftbar-btn-vue>
    </div>
  </div>
</template>

<script setup>
import LeftbarBtnVue from "../components/LeftbarBtnVue.vue";
import {mainStore} from "../store/index.js";
import {reactive, ref} from "vue";
import emitter from "../api/emitter.js";

const store = mainStore()
const svgPaths = reactive(store.$state.leftbarSvgNames)

let currentMode = reactive({
  id: '',
  name: ''
})

// 点击按钮保持样式点亮状态，与此同时广播图表类型
let changeMode = async (name, id) => {
  currentMode.id = id
  currentMode.name = name

  // 全局事件总线，广播当前选中的图表类型
  await emitter.emit("presentMode", currentMode.name)
  console.log(id, name)
}


</script>

<style scoped lang="less">
@btn-width: 50%;
@btn-height: @btn-width;

.lb {
  display: flex;
  flex-direction: column;
  align-items: center;

  .btns {
    width: @btn-width;
    height: @btn-height;
    margin-top: 12px;
    padding: 8px;
    border-radius: 4px;

    transition: .2s ease;

    &:hover {
      background-color: aliceblue;
    }
  }

  .btns-focus {
    background-color: aliceblue;
  }
}
</style>
