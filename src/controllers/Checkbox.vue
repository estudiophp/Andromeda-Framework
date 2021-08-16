<template>
  <label :class="{ marked: value }" class="checkbox-primary margin-y-small">
    <div class="checkmark" :class="{'checked': value}">
      <div v-if="value">
        <i class="material-icons" style="font-size: 14px">check</i>
      </div>
    </div>
    <span class="text-size-normal">
      {{ label }}
    </span>
    <input :checked="value" @change="(e) => updateValue(e)" type="checkbox" checked="checked"/>
  </label>
</template>

<script lang="ts">
import {defineComponent, toRef} from "vue";

export default defineComponent({
  name: "Checkbox",
  props: {
    label: String,
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let value = toRef(props, 'modelValue');

    function updateValue(newValue: any)
    {
      return emit('update:modelValue', newValue.target.checked)
    }

    return {value, updateValue};
  },
});
</script>