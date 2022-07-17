<template>
  <div class="container-fluid p-0">
    <footer
      class="d-flex flex-wrap justify-content-center align-items-center py-3 border-top"
    >
      <IconMarvel />
      <span class="ms-3 red-color">Data provided by Marvel. © 2022 Marvel</span>
    </footer>
  </div>
</template>
<script setup>
import IconMarvel from "./icons/IconMarvel.vue";
</script>
<style scoped>
.container-fluid {
  background-color: #0f0909d7;
}
footer {
  height: 100px;
  max-width: 1440px;
}
.red-color {
  color: #cf2e2e;
}
</style>
