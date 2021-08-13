<template>
  <div style="display: flex;align-items: center;justify-content: center;height: 100vh">
    <button class="btn-primary block" disabled>My Button</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
body {
  margin: 0;
  padding: 10px;
}
</style>
