<template>
  <button :class="[`btn-${color}`, `${block ? 'block' : ''}`]" :type="type" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    color: String,
    disabled: Boolean,
    block: Boolean,
    type: String
  }
}
</script>