<template>
  <div class="toolbar-items">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ToolbarItems"
})
</script>

<style scoped>

</style>
