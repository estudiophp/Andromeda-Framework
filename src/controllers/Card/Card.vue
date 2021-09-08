<template>
  <div class="card" :class="{'block': block}">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Card',
  props: {
    block: {
      default: false,
      type: Boolean
    }
  }
});
</script>

<style>
</style>
