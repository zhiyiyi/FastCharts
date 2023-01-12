<template>
  <div class="btn">
    <img :src="imgPath">
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const props = defineProps({
  svgNames: String
})

const imgPath = ref(props.svgNames)
</script>

<style scoped lang="less">
.btn {
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>