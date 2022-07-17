<template>
  <div class="">
    <div
      class="hero-view content flex-md-row mx-auto"
      v-show="showHero"
    >
      <!-- Image -->
      <div class="container__image">
        <img
          class="img-thumbnail mx-auto d-block"
          :src="hero.thumbnail"
          alt=""
        />
        <div class="d-flex justify-content-between">
          <button
            class="btn btn-outline-danger btn-lg mt-3"
            @click="showHero = !showHero, showEditHero = !showEditHero"
          >
            Editar
          </button>
          <button
            class="btn btn-outline-danger btn-lg mt-3"
             @click="showHero = !showHero, showCreateHero = !showCreateHero"
          >
            Crear nuevo Heroe
          </button>
        </div>
      </div>

      <!-- Right side -->
      <div class="container__feature p-2">
        <h1>{{ hero.name }}</h1>
        <p class="lead">{{ hero.description }}</p>
        <span class="badge text-bg-danger">{{ hero.modified }}</span>
      </div>
    </div>
    <div class="">
      <EditHero
        @edited="showHero = !showHero, showEditHero = !showEditHero"
        v-show="showEditHero && !showHero && !showCreateHero"
        :hero="hero"
      />
        <CreateHero
        @created="showHero = !showHero, showCreateHero = !showCreateHero"
        v-show="showCreateHero && !showHero && !showEditHero"
        :hero="hero"
      />

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onDeactivated } from "vue";
import useHeroes from "@/composables/heroes";
import { useRoute } from "vue-router";
import EditHero from "./EditHero.vue";
import CreateHero from "./CreateHero.vue";
const showEditHero = ref(false);
const showCreateHero = ref(false);
const showHero = ref(true);

const route = useRoute();
const { getHeroById } = useHeroes();
const hero = reactive(getHeroById(route.params.id));

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      const newHero = getHeroById(route.params.id);
      hero.name = newHero.name;
      hero.thumbnail = newHero.thumbnail;
      hero.description = newHero.description;
      hero.modified = newHero.modified;
      hero.id = newHero.id;
    }
  },
  { immediate: true }
);

onDeactivated(() => {
  showEditHero.value = false;
  showCreateHero.value = false;
  showHero.value = true;
});
</script>

<style scoped>
.content {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1024px;
}

span {
  font-size: 1.3rem;
}
.container__feature {
  flex: 1;
  max-width: 600px;
}
.container__image {
  width: 300px;
}
</style>
