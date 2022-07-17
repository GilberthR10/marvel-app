<template>
  <div class="card" aria-hidden="true">
    <svg
      class="bd-placeholder-img card-img-top"
      width="100%"
      height="180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
    </svg>
    <div class="card-body">
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
      </h5>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
      <a
        href="#"
        tabindex="-1"
        class="btn btn-danger disabled placeholder col-6"
      ></a>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  margin: 2rem auto;
  border: 5px ridge#e62429;
}
</style>
