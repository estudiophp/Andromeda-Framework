<template>
  <div class="toolbar">
    <div class="toolbar-container">
      <img class="toolbar-logo" :src="logo" alt="">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Toolbar",
  props: {
    logo: {
      type: String,
      default: 'https://estudiophp.com/wp-content/uploads/2019/10/estudiophp.com_.svg'
    }
  }
})
</script>

<style scoped>

</style>
