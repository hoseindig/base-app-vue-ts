<script setup lang="ts">
import Welcome from "@/components/Welcome.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <div class="home-grid">
    <section class="left">
      <Welcome />
      <TodoList />
    </section>

    <aside class="right"></aside>
  </div>
</template>

<style scoped>
.home-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 1rem;
}
@media (max-width: 900px) {
  .home-grid {
    grid-template-columns: 1fr;
  }
  .right {
    order: 2;
  }
}
</style>
