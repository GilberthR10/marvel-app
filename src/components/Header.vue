<template>
  <header>
    <div class="header-row">
    <IconMarvel class="brand-icon" />
    </div>
  </header>
</template>

<script setup>
import IconMarvel from "./icons/IconMarvel.vue";
</script>

<style scoped>
header {
  padding: 3rem 1.5rem;
  background-color: #0f0909d7;
  width: 100%;
}
.header-row {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  height: 120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
form {
  width: 100%;
  max-width: 1024px;
}
</style>
