<template>
  <div class="content container d-flex mx-auto mt-4 flex-direction-column">
    <!-- 404 page not found -->
      <div class="col-md-12 text-content">
        <h1 class="text-center">404</h1>
        <h1 class="text-center">Page not found</h1>
        <p class="text-center lead">
          La pagina que estas buscando no existe.
        </p>
      </div>
    <!-- image 404 -->
<img src="@/assets/404.gif" alt="" class="img-fluid  mx-auto" />
  </div>
</template>
<style scoped>
.text-content {
  width: 350px;
}
.content {
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-weight: bold;
  font-size: 2.5em;
  color: #cf2e2e;
  margin-bottom: 1rem;
}
</style>
