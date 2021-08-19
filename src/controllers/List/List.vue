<template>
  <div class="list">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "List",
  setup() {}
});
</script>
