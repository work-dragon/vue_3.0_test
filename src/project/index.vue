<template>
  <div>
    <p>Hello Alen Store!</p>
    <p>-----------------------------</p>
    <ADD></ADD>
    <p>-----------------------------</p>
    <SUB></SUB>
    <p>-----------------------------</p>
    <div class="one-pixel-border"></div>
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
<style lang="scss" scoped>
.one-pixel-border {
  position: relative;
  box-sizing: border-box;
}

.one-pixel-border::before {
  display: block;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  border: 1px solid red;
  transform: translate(-50%, -50%) scale(0.5, 0.5);
}
</style>
