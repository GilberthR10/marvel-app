<template>
  <div class="container content">
  <button @click="$router.back()"  class="btn btn-outline-danger btn-lg mt-2 mx-auto" to="/"><ArrowBack /> </button>
    <Suspense>
      <template #default>
        <Hero />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import Loading from "../components/Loading.vue";
import ArrowBack from "../components/icons/ArrowBack.vue";

</script>
<style scoped>
.content {
    max-width: 1024px;
}
</style>

