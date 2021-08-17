<script lang="ts">
import { defineComponent } from "vue";
import {
  FluChoiceGroup,
  FluBtn,
  FluCheckbox,
  FluComboBox,
  FluLabel
} from "@/controllers";

export default defineComponent({
  name: "ServeDev",
  components: {
    FluChoiceGroup,
    FluBtn,
    FluCheckbox,
    FluComboBox,
    FluLabel
  },
  data: () => ({
    checkModel: "",
    choiceModel: "",
    comboValue: {}
  })
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
    <flu-combo-box
      label="Select Label"
      v-model="comboValue"
      placeholder="Seleccione una opción"
      :options="[
        { text: 'Opción 01', value: 'option01' },
        { text: 'Opción 02', value: 'option02' },
        { text: 'Opción 03', value: 'option03' },
        { text: 'Opción 04', value: 'option04' },
        { text: 'Opción 05', value: 'option05' },
        { text: 'Opción 06', value: 'option06' },
        { text: 'Opción 07', value: 'option07' },
        { text: 'Opción 08', value: 'option08' },
        { text: 'Opción 09', value: 'option09' }
      ]"
    >
    </flu-combo-box>
  </div>
</template>
