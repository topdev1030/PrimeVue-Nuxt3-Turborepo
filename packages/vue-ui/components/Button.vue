<template>
  <div class="card flex justify-content-center">
    <InputText id="value" type="text" v-model="value" />
    <Button type="submit" label="Submit" @click="handleClick" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
  components: { Button },
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
