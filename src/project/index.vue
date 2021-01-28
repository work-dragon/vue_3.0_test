<template>
  <div>
    <p>Hello Alen Store!</p>
    <p>-----------------------------</p>
    <ADD></ADD>
    <p>-----------------------------</p>
    <SUB></SUB>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ADD from "./storeTst/store-add.vue";
import SUB from "./storeTst/store-sub.vue";

@Options({
  components: { ADD, SUB },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped></style>
