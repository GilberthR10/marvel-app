<script setup>
import ListComponent from "../components/ListComponent.vue";
import Loading from "../components/Loading.vue";

</script>

<template>
  <div class="container">
    <Suspense>
      <template #default>
        <ListComponent v-motion-roll-top />
      </template>
      <template #fallback>
       <Loading />
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.footer {
  align-self: flex-end;
  width: 100%;
  height: 350px;
  margin-top: auto;
}
</style>
