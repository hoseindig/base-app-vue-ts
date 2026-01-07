<template>
  <section class="welcome">
    <h1>{{ greeting }},</h1>
    <p class="subtitle">Welcome back — here's what's next.</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const now = new Date();
const hour = now.getHours();

const greeting = computed(() => {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
});
</script>

<style scoped>
.welcome {
  margin-bottom: 1.25rem;
}
.welcome h1 {
  margin: 0 0 0.25rem 0;
  font-size: 1.75rem;
}
.subtitle {
  margin: 0;
  color: var(--color-muted);
}
</style>
