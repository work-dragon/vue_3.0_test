<template>
  <div>
    <p>store-add</p>
    <p>当前计数器为{{ $store.state.count }}</p>
    <p>{{ $store.getters.showNum }}</p>
    <button @click="handleClickAdd">+1</button>
    <button @click="handleClickAddSync">+1 sync</button>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import _Promise from "../promise/index";
export default defineComponent({
  setup() {
    const store = useStore();
    const handleClickAdd = () => {
      store.commit("add", 10);
      new _Promise((resolve, rejece) => {
        resolve("123132");
      }).then(
        (res: any) => {
          console.log(res);
        },
        (rej: any) => {
          console.log("rej" + rej);
        },
      );
    };
    const handleClickAddSync = () => {
      store.dispatch("addSync");
    };
    return { handleClickAdd, handleClickAddSync };
  },
});
</script>
<style lang="scss"></style>
