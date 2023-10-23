<template>
  <div class="card flex justify-content-center">
    <!-- <InputText id="value" type="text" v-model="value" />
    <input type="text" name="value" id="value" v-model="value" />
    <Button type="submit" label="Submit" @click="handleClick" /> -->
    <div class="p-inputgroup flex-1">
      <Button type="submit" label="Submit" @click="handleClick" />
      <InputText id="value" type="text" v-model="value" placeholder="Value" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
  components: { Button, InputText },
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
