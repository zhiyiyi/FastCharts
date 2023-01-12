<template>
  <div class="cb">
    <div class="draw" ref="chartDOM">
    </div>
  </div>
</template>

<script setup>
import emitter from "../api/emitter.js";
import {ref, onMounted, getCurrentInstance} from "vue";

import origindata from "../api/origindata.js";

let presentMode = ref('')
emitter.on('presentMode', (data) => {
  presentMode.value = data
  console.log(`centerbroad收到信息：${data}`)
})

// 挂载时直接获取到画布的DOM，并给予一个初始的柱状图示例
const {proxy} = getCurrentInstance()
const chartDOM = ref(null)
onMounted(() => {
  var chart = proxy.$echarts.init(chartDOM.value)
  let data = origindata.zhuzhuang_options
  chart.setOption(data)
})


</script>

<style scoped lang="less">
@outer-ratio: 100%;
@inner-ratio: 90%;

.cb {
  width: @outer-ratio;
  height: @outer-ratio;
  display: flex;
  justify-content: center;
  align-items: center;

  .draw {
    width: @inner-ratio;
    height: @inner-ratio;

  }
}
</style>
