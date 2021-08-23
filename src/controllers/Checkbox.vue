<template>
  <label :class="{ marked: value }" class="checkbox margin-y-small">
    <div class="checkmark" :class="{'checked': value}">
      <div v-if="value">
        <i class="material-icons" style="font-size: 14px">check</i>
      </div>
    </div>
    <span class="text-size-normal">
      {{ label }}
    </span>
    <input :checked="value" @change="updateValue" type="checkbox"/>
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
    },
    checked: Boolean
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let value = toRef(props, 'modelValue');

    function updateValue(newValue: any)
    {
      emit('update:modelValue', newValue.target.checked)
    }

    emit('update:modelValue', props.checked)

    return {value, updateValue};
  },
});
</script>
