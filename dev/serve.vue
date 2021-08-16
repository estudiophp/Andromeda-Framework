<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ServeDev',
  data: () => ({
    checkModel: ''
  })
});
</script>

<template>
  <div id="app">
    <flu-btn color="primary">Button</flu-btn>
    <flu-checkbox checked label="Mi querido checkbox" v-model="checkModel"></flu-checkbox>
  </div>
</template>
