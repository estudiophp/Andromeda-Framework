<template>
  <div :class="`text-size-${size} text-color-${color} text-weight-${weight}`" class="margin-bottom-xsmall">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Label",
  props: {
    color: {
      type: String,
      default: "gray-900"
    },
    size: {
      type: String,
      default: "normal"
    },
    weight: {
      type: String,
      default: "bold"
    }
  }
});
</script>
