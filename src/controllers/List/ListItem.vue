<template>
  <div class="item">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListItem",
  setup() {}
});
</script>
