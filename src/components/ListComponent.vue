<template>
  <div class="list-container">
    <form class="d-flex my-3" role="search" @submit.prevent="searchByName">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Busca a tu héroe aquí"
        aria-label="Buscar"
        v-model="searchText"
      />
      <button class="btn btn-outline-danger btn-lg" type="submit">
        Buscar
      </button>
    </form>
    <div class="card-container" v-if="heroes">
      <template v-if="!loadingHeroes">
        <Card
          v-for="(hero, i) in heroes"
          :key="i"
          :name="hero.name"
          :modified="hero.modified"
          :description="hero.description"
          :thumbnail="hero.thumbnail"
          :id="hero.id"
        />
      </template>
      <template v-else>
        <CardLoading v-for="i in limit" />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHeroes from "@/composables/heroes";
import Card from "@/components/Card.vue";
import CardLoading from "@/components/CardLoading.vue";
import { ref, onMounted } from "vue";
import { useInfiniteScroll } from "@vueuse/core";


const loadingHeroes = ref(false);
const { getHeroes, getHeroesByName, heroes, limit, offset } = useHeroes();
//heroes.value = ref(await getHeroes(limit, offset));
onMounted(async () => {
    await getHeroes()
});

const loadHeroes = async (heroQuantity) => {
  loadingHeroes.value = true;
  let newHeroes = ref(await getHeroes(limit.value, (offset.value += heroQuantity)));
  heroes.value.push({ ...newHeroes });
  loadingHeroes.value = false;
};

useInfiniteScroll(
  window,
  async () => {
    // load more
    await loadHeroes(12);
  },
  { distance: 150 }
);

const searchText = ref("");
const searchByName = async () => {
  loadingHeroes.value = true;
  heroes.value = await getHeroesByName(searchText.value);
  searchText.value = "";
  loadingHeroes.value = false;
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  max-width: 1000px;
}
</style>
