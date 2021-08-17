<script lang="ts">
import { defineComponent } from "vue";
import { FluChoiceGroup, FluBtn, FluCheckbox, FluComboBox } from "@/controllers";

export default defineComponent({
  name: "ServeDev",
  components: {
    FluChoiceGroup,
    FluBtn,
    FluCheckbox,
    FluComboBox
  },
  data: () => ({
    checkModel: "",
    choiceModel: "",
    comboValue: ""
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
      v-model="comboValue"
      label="Seleccione una opción"
      :options="[
        {label: 'Opción 01', value: 'option01'},
        {label: 'Opción 02', value: 'option02'},
        {label: 'Opción 03', value: 'option03'},
        {label: 'Opción 04', value: 'option04'},
        {label: 'Opción 05', value: 'option05'},
        {label: 'Opción 06', value: 'option06'},
        {label: 'Opción 07', value: 'option07'},
        {label: 'Opción 08', value: 'option08'},
        {label: 'Opción 09', value: 'option09'},
      ]"
    >

    </flu-combo-box>
  </div>
</template>
