<template>
  <div class="overlay">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Overlay"
})
</script>

<style scoped>

</style>
