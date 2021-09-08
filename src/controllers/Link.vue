<template>
  <a v-if="href !== ''" :href="href" class="link">
    <slot/>
  </a>
  <router-link v-if="to !== ''" :to="to" class="link">
    <slot/>
  </router-link>
</template>

<script>
export default {
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
}
</script>

<style>

</style>
