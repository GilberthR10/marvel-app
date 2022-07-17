<template>
  <div class="card layered-card" v-if="id">
    <img :src="thumbnail" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <div class="btn-container">
        <RouterLink :to="`/characters/${id}`" class="btn btn-outline-danger">
          Ver más
        </RouterLink>
        <span class="red-color">{{ modified }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
  name: {
    type: String,
  },
  modified: {
    type: String,
  },
  description: {
    type: String,
    default: "",
  },
  id: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
});
const { name, modified, description, id, thumbnail } = toRefs(props);
</script>

<style scoped>
img {
  max-width: 100%;
  border-radius: 0;
}
.card {
  width: 300px;
  margin: 2rem auto;
  border: 5px ridge#e62429;
}
.card-title {
  font-size: 2.5em;
  color: #cf2e2e;
}
.card-body {
  padding: 1rem;
  width: 100%;
  max-height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.red-color {
  color: #cf2e2e;
}
.btn-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5em;
}
.card-text {
  margin-bottom: 0;
}
.layered-card {
  position: relative;
}

.layered-card::before {
  background: #cf2e2e2d;
  content: "";

  /* Position */
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(1rem, 1rem);

  /* Size */
  height: 100%;
  width: 100%;

  /* Display under the main content */
  z-index: -1;
}
</style>
