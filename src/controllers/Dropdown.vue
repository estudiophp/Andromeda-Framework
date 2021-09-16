<template>
  <div style="position: relative">
    <div @click="handleClickActivator">
      <slot name="activator" />
    </div>
    <div @click="handleClickActivator" class="dropdown" v-show="isShow">
      <slot name="content" />
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
