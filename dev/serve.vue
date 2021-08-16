<script lang="ts">
import { defineComponent } from "vue";
import {FluChoiceGroup} from '@/controllers'

export default defineComponent({
  name: "ServeDev",
  components: {
    FluChoiceGroup
  },
  data: () => ({
    checkModel: "",
    choiceModel: "",
  }),
});
</script>

<template>
  <div id="app">
    <flu-btn color="primary">Button</flu-btn>
    <flu-checkbox
      checked
      label="Mi querido checkbox"
      v-model="checkModel"
    ></flu-checkbox>
    <flu-choice-group
      name="Sexo"
      v-model="choiceModel"
      defaultValue="mujer"
      :options="[
        {
          label: 'Hombre',
          value: 'hombre'
        },
        {
          label: 'Mujer',
          value: 'mujer'
        }
      ]"
    ></flu-choice-group>
  </div>
</template>
