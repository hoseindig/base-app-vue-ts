<script setup lang="ts">
import Welcome from "@/components/Welcome.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <div class="home-grid">
    <section class="left">
      <div class="welcome-center">
        <Welcome />
      </div>
    </section>
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

.welcome-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}
.welcome {
  text-align: center;
}
</style>
