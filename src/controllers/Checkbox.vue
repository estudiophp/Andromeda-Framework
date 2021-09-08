<template>
  <label :class="{ marked: value }" class="checkbox margin-y-small">
    <div class="checkmark" :class="{ checked: value }">
      <div v-if="value">
        <i class="material-icons" style="font-size: 14px">check</i>
      </div>
    </div>
    <span class="text-size-default">
      {{ label }}
    </span>
    <input :checked="value" @change="updateValue" type="checkbox" />
  </label>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
  name: "Checkbox",
  props: {
    label: String,
    modelValue: {
      type: Boolean,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    checked: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let value = toRef(props, "modelValue");

    function updateValue(event: any) {
      if (!props.readonly) emit("update:modelValue", event.target.checked);
    }

    emit("update:modelValue", props.checked);

    return { value, updateValue };
  }
});
</script>
