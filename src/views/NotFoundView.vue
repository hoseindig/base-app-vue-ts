<template>
  <section class="not-found">
    <h1>404</h1>
    <p>Sorry, the page you are looking for could not be found.</p>
    <router-link to="/">Go home</router-link>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  max-width: 720px;
}
.not-found h1 {
  font-size: 2rem;
}
</style>
