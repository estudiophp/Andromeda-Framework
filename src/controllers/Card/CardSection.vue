<template>
  <div class="card-section text-color-gray-800 text-size-default">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CardSection'
})
</script>

<style>

</style>
