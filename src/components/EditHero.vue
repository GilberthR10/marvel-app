<template>
  <div class="form-container p-0">
    <form @submit.prevent="handleUpdate" class="form flex-md-row mx-auto">
      <div class="image-container">
        <img :src="thumbnail" alt="" class="img-thumbnail mx-auto d-block" />
        <input
          class="form-control form-control-sm mt-3"
          id="fileInput"
          type="file"
          ref="fileImage"
          @input="saveImageInlocalStorage($event)"
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
          Editar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { toRefs, reactive, ref } from 'vue';
import useHeroes from "@/composables/heroes";
const { heroes } = useHeroes();
const emit = defineEmits(['edited'])
const props = defineProps({
  hero: {
    type: Object,
  },
});
const { hero } = toRefs(props);
const { name, description, thumbnail, id } = toRefs(hero.value);

const fileImage = ref(null);
const handleUpdate = () => {
  const updateHero = {
    name: name.value,
    description: description.value,
    thumbnail: thumbnail.value,
  };

  for (const hero of heroes.value) {
    if (hero.id === id.value) {
      hero.name = updateHero.name;
      hero.description = updateHero.description;
      hero.thumbnail = updateHero.thumbnail;
      break;
    }
  }
emit('edited')

};

const saveImageInlocalStorage = (event) => {
      let reader = new FileReader();
      reader.onload = (e) => {
        thumbnail.value = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      fileImage.value.value = ''
}
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
