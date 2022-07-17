<template>
        <div class="d-flex justify-content-center loading">
          <div class="spinner-border text-danger spinner" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
</template>

<style scoped> 
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}
.spinner {
    width: 10rem;
    height: 10rem;
}
</style>