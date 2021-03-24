<template>
  <div>
    <p>store-add</p>
    <p>当前计数器为{{ $store.state.count }}</p>
    <p>{{ $store.getters.showNum }}</p>
    <button @click="handleClickAdd">+1</button>
    <button @click="handleClickAddSync">+1 sync</button>

    <div>
      <p>{{ firstName }}--{{ lastName }}</p>
      <input type="text" v-model="firstName" />
      <input type="text" v-model="lastName" />
    </div>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import _Promise from "../promise/index";
export default defineComponent({
  setup() {
    let timeOut = null;
    const firstName = ref("Alen");
    const lastName = ref("Hello");

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

    watch([firstName, lastName], (newValue) => {
      const [firstValue, lastValue] = newValue;
      timeOut = setTimeout(() => {
        firstName.value = firstValue;
        lastName.value = lastValue;
      }, 5000);
      clearTimeout(timeOut);
    });

    return { handleClickAdd, handleClickAddSync, firstName, lastName };
  },
});
</script>
<style lang="scss"></style>
