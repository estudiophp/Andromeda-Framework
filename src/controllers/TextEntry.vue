<template>
  <div>
    <flu-label v-if="label !== '' || label">{{ label }}</flu-label>
    <input @input="handleInput" :value="inputValue" :placeholder="placeholder" :type="type" class="textEntry" />
  </div>
</template>

<script lang="ts">
import { FluLabel } from "@/controllers";
import { defineComponent, toRef } from "vue";

export default defineComponent({
  name: "TextEntry",
  components: {
    FluLabel
  },
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const inputValue = toRef(props, "modelValue");

    function handleInput(event: any) {
      emit("update:modelValue", event.target.value);
    }

    return { handleInput, inputValue };
  }
});
</script>
