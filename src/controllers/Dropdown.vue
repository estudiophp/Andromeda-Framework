<template>
  <div style="position: relative">
    <div style="display: inline-block" @click="handleClickActivator">
      <slot name="Activator" />
    </div>
    <div class="dropdown" v-show="isShow">
      <slot name="Content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Dropdown",
  setup() {
    let isShow = ref(false);
    const handleClickActivator = () => {
      isShow.value = !isShow.value;
    };

    return { handleClickActivator, isShow };
  }
});
</script>
