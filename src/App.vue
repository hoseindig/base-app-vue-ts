<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import ProfilePrompt from "./components/ProfilePrompt.vue";
import { ref } from "vue";

const drawer = ref(false);
</script>

<template>
  <v-app class="app-layout mx-3">
    <v-main class="content">
      <RouterView />
    </v-main>

    <ProfilePrompt />

    <!-- drawer for mobile sidebar -->
    <transition name="fade">
      <div v-if="drawer" class="drawer-backdrop" @click="drawer = false"></div>
    </transition>
    <aside :class="['mobile-drawer', { open: drawer }]">
      <Sidebar />
    </aside>
  </v-app>
</template>

<style scoped>
.drawer-toggle {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 60;
}
.mobile-drawer {
  position: fixed;
  right: -100%;
  top: 0;
  height: 100vh;
  width: 320px;
  background: var(--color-background);
  transition: right 0.25s ease;
  z-index: 70;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
}
.mobile-drawer.open {
  right: 0;
}
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 65;
}

/* ensure button visuals via BaseButton; fallback styles */
.btn-fallback {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
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
