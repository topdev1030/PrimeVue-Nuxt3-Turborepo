<template>
  <Button label="Submit" @click="handleClick" />
</template>

<script lang="ts">
// import Vue from "vue";
import Button from 'primevue/button';

export default {
  components: { Button },
  methods: {
    handleClick: () => {
      alert("Woooha!")
    },
  },
}
</script>
