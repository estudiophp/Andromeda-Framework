<template>
  <div>
    <div class="comboBox" @click="optionsShow = !optionsShow">
      <div>
        {{ modelValue ? modelValue.label : label }}
      </div>
      <div class="material-icons">
        expand_more
      </div>
      <div class="options-list" v-show="optionsShow">
        <div v-for="option of options" @click="updateValue(option)" :key="option" class="options-item">
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from "vue";

export default defineComponent({
  name: "ComboBox",
  props: {
    options: {
      default: [],
      type: Array
    },
    modelValue: Object,
    label: String
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const inputValue = toRef(props, 'modelValue')
    const optionsShow = ref(false)

    function updateValue(newValue: any) {
      emit('update:modelValue', newValue)
    }

    return {inputValue, updateValue, optionsShow}
  }
});
</script>
