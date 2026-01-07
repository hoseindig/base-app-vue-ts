<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app-layout">
    <Sidebar />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding: 1.25rem;
}

@media (min-width: 1024px) {
  .content {
    padding: 2rem;
  }
}
</style>
