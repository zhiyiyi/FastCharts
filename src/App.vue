<template>
  <div class="container">
    <header class="header">
      <header-vue></header-vue>
    </header>
    <section class="mainbody">
      <div class="lb">
        <leftbar></leftbar>
      </div>
      <div class="cb">
        <center-broad></center-broad>
      </div>
      <div class="rb">
        <rightbar></rightbar>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeaderVue from './view/HeaderVue.vue'
import CenterBroad from './view/CenterBroadVue.vue'
import Leftbar from './view/LeftbarVue.vue'
import Rightbar from './view/RightbarVue.vue'

import emitter from "./api/emitter.js";
import {onBeforeUnmount} from 'vue'

onBeforeUnmount(() => {
  // 卸载前消除所有全局监听事件
  emitter.all.clear()
})
</script>

<style lang="less">

* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", sans-serif;
}

.container {

  background-color: ghostwhite;

  .header {
    width: 100%;
    height: 10vh;
    border-bottom: 2px solid deepskyblue;
    background-color: white;
  }

  .mainbody {
    display: flex;
    height: 90vh;

    .lb {
      flex: 1;
      background-color: white;
    }

    .cb {
      flex: 14;
      background-color: ghostwhite;
    }

    .rb {
      flex: 6;
      background-color: white;
      margin: 20px;
      border-radius: 10px;
      box-shadow: 0 0 20px 0.1px lightgray;
    }
  }
}


</style>
