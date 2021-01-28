<template>
  <div>
    <p>store-sub</p>
    <p>当前计数器为{{ $store.state.count }}</p>
    <button @click="handleClickSub">-1</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const handleClickSub = () => {
      store.commit("sub", 5);
    };

    return { handleClickSub };
  },
});
</script>
<style lang="scss"></style>
