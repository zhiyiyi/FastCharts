<template>
  <div class="rbcontainer">

  </div>
</template>

<script setup>
import emitter from "../api/emitter.js";
import {ref} from "vue";

let presentMode = ref('')
emitter.on('presentMode', (data) => {
  presentMode.value = data
  console.log(`rightbar收到信息：${data}`)
})
</script>

<style scoped lang="less">
.rbcontainer {
  width: 100%;
  height: 100%;
}
</style>
