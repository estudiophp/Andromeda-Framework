<template>
  <div class="pivot">
    <div class="pivot-nav">
      <div
        :class="{ 'active': active === tab.id }"
        class="pivot-nav-item"
        v-for="tab in tabs"
        :key="tab.id"
        @click="active = tab.id"
      >
        {{ tab.label }}
      </div>
    </div>
    <template
      v-for="tab in tabs"
      :key="tab.id"
    >
      <div
        class="pivot-content"
        v-if="tab.id === active"
      >
        <slot :name="tab.id"/>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Pivot",
  props: {
    tabs: {
      default: [],
      type: Array
    },
    defaultActive: {
      default: '',
      type: String
    }
  },
  setup(props) {
    const active = ref<string>('')

    active.value = props.defaultActive

    return {active}
  }
})
</script>

<style scoped>

</style>
