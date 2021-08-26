<template>
  <div>
    <flu-label v-if="label">{{ label }}</flu-label>
    <div v-if="readonly" class="comboBox" :class="{ block: block }">
      <div>
        {{ modelValue.text || placeholder }}
      </div>
      <div class="material-icons" style="font-size: 17px">
        expand_more
      </div>
    </div>
    <flu-dropdown v-else>
      <template v-slot:Activator>
        <div class="comboBox" :class="{ block: block }">
          <div>
            {{ modelValue.text || placeholder }}
          </div>
          <div class="material-icons" style="font-size: 17px">
            expand_more
          </div>
        </div>
      </template>
      <template v-slot:Content>
        <flu-list>
          <flu-list-item
            v-for="option of options"
            :key="option"
            @click="updateValue(option)"
          >
            {{ option.text }}
          </flu-list-item>
        </flu-list>
      </template>
    </flu-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from "vue";
import { FluLabel, FluDropdown, FluListItem, FluList } from "@/controllers";

export default defineComponent({
  name: "ComboBox",
  components: { FluDropdown, FluLabel, FluList, FluListItem },
  props: {
    label: String,
    options: {
      default: [],
      type: Array
    },
    readonly: {
      type: Boolean,
      default: false
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
