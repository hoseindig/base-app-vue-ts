<template>
  <section class="page-center">
    <div class="container">
      <h1>To‑dos</h1>
      <TodoList />
    </div>
  </section>
</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
</script>

<style scoped>
.page-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}
.container {
  width: 100%;
  max-width: 720px;
}
</style>
