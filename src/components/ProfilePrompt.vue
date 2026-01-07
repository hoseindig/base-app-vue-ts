<template>
  <div v-if="show" class="overlay">
    <div class="prompt">
      <h3>{{ $t("common.name") }}</h3>
      <BaseInput v-model="name" placeholder="Your name" @keyup.enter="save" />
      <div class="actions">
        <button @click="save">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BaseInput from "./BaseInput.vue";

const show = ref(false);
const name = ref("");

const load = () => {
  try {
    const s = localStorage.getItem("baseapp.user");
    if (!s) {
      show.value = true;
    }
  } catch (e) {
    show.value = true;
  }
};

const save = () => {
  if (!name.value || !name.value.trim()) return;
  const payload = { name: name.value.trim() };
  localStorage.setItem("baseapp.user", JSON.stringify(payload));
  show.value = false;
};

onMounted(load);
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.prompt {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: 8px;
  width: 320px;
}
.prompt input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
.actions {
  text-align: right;
  margin-top: 0.5rem;
}
</style>
