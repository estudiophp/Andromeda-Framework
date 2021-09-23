<template>
  <div class="toolbar-item">
    {{ label }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ToolbarItem",
  props: {
    label: {
      default: '',
      type: String
    }
  }
})
</script>

<style scoped>

</style>
