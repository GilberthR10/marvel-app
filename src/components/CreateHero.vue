<template>
  <div class="form-container p-0">
    <form @submit.prevent="handleSave" class="form flex-md-row mx-auto">
      <div class="image-container">
        <img
          :src="thumbnail || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_fantastic.jpg'"
          alt=""
          class="img-thumbnail mx-auto d-block"
          
        />
        <input
          class="form-control form-control-sm mt-3"
          id="fileInput"
          type="file"
          ref="saveImage"
          @input="saveNewHeroImage($event)"
        />
      </div>
      <div class="form-items">
        <label for="name" class="form-label lead">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          required
          accept="image/*"
        />
        <label for="description" class="form-label lead">Descripcion</label>
        <textarea
          class="form-control"
          v-model="description"
          required
        ></textarea>
        <button
          class="btn btn-outline-danger btn-lg mx-auto mt-4"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useHeroes from "@/composables/heroes";
import { useRouter } from "vue-router";
const { heroes, saveNewHero } = useHeroes();
const router = useRouter();
const emit = defineEmits(["created"]);

const name = ref("");
const description = ref("");
const thumbnail = ref("");

const saveImage = ref(null);

const handleSave = () => {
  for (const hero of heroes.value) {
    if (hero.name === name.value) {
      alert("El nombre ya existe");
      return;
    }
  }

  const newHero = {
    id: Math.ceil(Math.random()*1000000000),
    name: name.value,
    description: description.value,
    thumbnail: thumbnail.value ||
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_fantastic.jpg",
  };
  saveNewHero(newHero);
  name.value = "";
  description.value = "";
  thumbnail.value = "";
  emit("created");
  router.push(`/characters/${newHero.id}`);
};

const saveNewHeroImage = (event) => {
  let reader = new FileReader();
  reader.onload = (e) => {
    thumbnail.value = e.target.result;
  };
  reader.readAsDataURL(event.target.files[0]);
  saveImage.value.value = "";
};
</script>

<style scoped>
.form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1024px;
}
.image-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
.form-items {
  flex: 1;
  max-width: 600px;
}
textarea {
  height: 8em;
}
</style>
