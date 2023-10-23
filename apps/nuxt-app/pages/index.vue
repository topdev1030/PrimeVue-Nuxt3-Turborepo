<template>
  <div class="m-10 text-center">
    <h1 class="text-4xl">Nuxt.js App</h1>
    <ui-button @click="handleClick" />
    <ui-input v-model="value" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Button, InputText } from "vue-ui";

export default {
  components: { "ui-button": Button, "ui-input": InputText },
  name: "IndexPage",
  setup() {
    const value = ref('');

    const handleClick = () => {
      alert('Woooha!' + value.value);
    };

    return {
      value,
      handleClick,
    };
  },
}
</script>
