<template>
  <div>
    <label class="choice-group-item margin-y-xsmall" v-for="item of options" :key="item">
      <input :name="name" hidden type="radio" :value="item.value" @change="(e) => updateValue(e)">
      <div
        class="checkmark"
        :class="{'checked': item.value === inputValue}"
      >
        <div
          v-if="item.value === inputValue"
        >
        </div>
      </div>
      <span class="text-size-normal">{{ item.label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRef} from "vue";

export default defineComponent({
  name: 'ChoiceGroup',
  props: {
    options: {
      required: true,
    },
    modelValue: {
      required: true
    },
    defaultValue: String,
    name: {
      required: true,
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const inputValue = toRef(props, 'modelValue')

    emit('update:modelValue', props.defaultValue)

    function updateValue(event: any) {
      if (!props.readonly) emit('update:modelValue', event.target.value)
    }

    return {updateValue, inputValue}
  }
})
</script>
