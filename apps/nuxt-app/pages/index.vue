<template>
  <div class="m-10 text-center">
    <h1 class="text-4xl">Nuxt.js App</h1>
    <ui-button />
  </div>
</template>

<script lang="ts">
import { Button } from "vue-ui";

export default {
  components: { "ui-button": Button },
  name: "IndexPage",
}
</script>
