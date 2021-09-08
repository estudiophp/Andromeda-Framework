<template>
  <div class="overlay" v-show="show">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Overlay",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>

</style>
