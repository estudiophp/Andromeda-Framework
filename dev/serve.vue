<script lang="ts">
import {defineComponent} from "vue";
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
  FluCardSection,
  FluLink,
  FluOverlay,
  FluTable
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
    FluCardSection,
    FluLink,
    FluOverlay,
    FluTable
  },
  data: () => ({
    checkModel: "",
    choiceModel: "",
    comboValue: {},
    textEntryValue: "",
    dialogShow: false
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
      <template #activator>
        <flu-btn color="primary">Activator Dropdown</flu-btn>
      </template>
      <template #content>
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
    <flu-card class="margin-vertical-small">
      <flu-card-section>
        <h3>Lorem, ipsum dolor.</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus fuga ipsum, eligendi animi magni alias
        doloremque asperiores odit omnis sint esse nam iusto ducimus nostrum reprehenderit aliquam, harum id?
      </flu-card-section>
    </flu-card>
    <flu-link to="/app">
      Lorem ipsum dolor sit amet.
    </flu-link>
    <div class="margin-top-small">
      <flu-btn
        color="primary"
        @click="dialogShow = !dialogShow"
      >
        Open Dialog
      </flu-btn>
    </div>
    <flu-overlay :show="dialogShow">
      <flu-card flat class="background-gray-white">
        <flu-card-section>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae consectetur error eum harum, id
            laudantium libero maiores nobis repellat, reprehenderit soluta tenetur voluptatum! Alias asperiores ea
            maiores odit quaerat.
          </p>
          <flu-btn
            color="primary"
            @click="dialogShow = !dialogShow"
          >
            Close Dialog
          </flu-btn>
        </flu-card-section>
      </flu-card>
    </flu-overlay>
    <flu-list class="margin-vertical-small text-size-default">
      <flu-list-item>
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </flu-list-item>
    </flu-list>
    <flu-table>
      <template #head>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Sexo</th>
        </tr>
      </template>
      <template #body>
        <tr class="clickable">
          <td>Joe doe</td>
          <td>24</td>
          <td>Masculino</td>
        </tr>
        <tr>
          <td>Jane doe</td>
          <td>21</td>
          <td>Femenino</td>
        </tr>
        <tr>
          <td>Baby doe</td>
          <td>4</td>
          <td>Masculino</td>
        </tr>
      </template>
    </flu-table>
  </div>
</template>
