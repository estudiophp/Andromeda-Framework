<template>
  <a v-if="href !== ''" :href="href" class="link">
    <slot/>
  </a>
  <router-link v-if="to !== ''" :to="to" class="link">
    <slot/>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Link',
  props: {
    to: {
      default: '',
      type: String || Object
    },
    href: {
      default: '',
      type: String
    }
  }
})
</script>

<style>

</style>
