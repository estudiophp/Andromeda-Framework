<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <slot name="head"/>
      </thead>
      <tbody>
        <slot name="body"/>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Table'
})
</script>
