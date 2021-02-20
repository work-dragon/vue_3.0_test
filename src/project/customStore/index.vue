<template>
  <div>
    <p>我是自定义的store_one值 {{ store.state.user }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { userStore } from "./store";
export default defineComponent({
  setup() {
    const store = userStore();
    store.action.updateUser("456789");
    return { store };
  },
});
</script>
<style lang="scss" scoped></style>
