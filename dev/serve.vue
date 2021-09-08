<script lang="ts">
import { defineComponent } from "vue";
import {
  FluChoiceGroup,
  FluBtn,
  FluCheckbox,
  FluComboBox,
  FluLabel,
  FluDropdown,
  FluList,
  FluListItem,
  FluTextEntry,
  FluCard,
  FluCardSection
} from "@/controllers";

export default defineComponent({
  name: "ServeDev",
  components: {
    FluChoiceGroup,
    FluBtn,
    FluCheckbox,
    FluComboBox,
    FluLabel,
    FluDropdown,
    FluList,
    FluListItem,
    FluTextEntry,
    FluCard,
    FluCardSection
  },
  data: () => ({
    checkModel: "",
    choiceModel: "",
    comboValue: {},
    textEntryValue: ""
  })
});
</script>

<template>
  <div id="app" class="container">
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
    <flu-dropdown class="margin-top-small">
      <template v-slot:activator>
        <flu-btn color="primary">Activator Dropdown</flu-btn>
      </template>
      <template v-slot:content>
        <flu-list>
          <flu-list-item>Item 01</flu-list-item>
        </flu-list>
      </template>
    </flu-dropdown>
    <flu-text-entry
      v-model="textEntryValue"
      class="margin-top-small"
      type="text"
      placeholder="Escriba su email"
    />
    <flu-card class="margin-y-small">
      <flu-card-section>
        <h3>Lorem, ipsum dolor.</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus fuga ipsum, eligendi animi magni alias doloremque asperiores odit omnis sint esse nam iusto ducimus nostrum reprehenderit aliquam, harum id?
      </flu-card-section>
    </flu-card>
  </div>
</template>
