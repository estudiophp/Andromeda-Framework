<template>
  <div>
    <flu-label v-if="label">{{ label }}</flu-label>
    <div
      class="comboBox"
      :class="{ block: block }"
      @click="optionsShow = !optionsShow"
    >
      <div>
        {{ modelValue.text || placeholder }}
      </div>
      <div class="material-icons">
        expand_more
      </div>

      <!-- TODO: Cambiar a componente OptionsList -->
      <!-- <div class="options-list" v-show="optionsShow">
        <div
          v-for="option of options"
          @click="updateValue(option)"
          :key="option"
          class="options-item"
        >
          {{ option.text }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from "vue";
import {FluLabel} from '@/controllers'

export default defineComponent({
  name: "ComboBox",
  components: {FluLabel},
  props: {
    label: String,
    options: {
      default: [],
      type: Array
    },
    modelValue: Object,
    placeholder: String,
    block: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const inputValue = toRef(props, "modelValue");
    const optionsShow = ref(false);

    function updateValue(newValue: any) {
      emit("update:modelValue", newValue);
    }

    return { inputValue, updateValue, optionsShow };
  }
});
</script>
