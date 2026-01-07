<template>
  <div class="clock" aria-live="polite">{{ time }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const time = ref(new Date().toLocaleTimeString());
let timer: number | undefined;
onMounted(() => {
  timer = window.setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.clock {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
}
</style>
