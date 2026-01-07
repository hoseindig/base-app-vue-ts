<template>
  <VNavigationDrawer
    rail
    expand-on-hover
    class="min-h-screen bg-white border-r p-4"
    :width="expandedNumeric"
    :rail-width="railNumeric"
    app
  >
    <div class="brand flex items-center gap-2 mb-4">
      <!-- badge -->
      <div
        class="w-9 h-9 rounded-md bg-indigo-600 text-white grid place-items-center font-bold"
      >
        B
      </div>
      <div class="font-bold">BaseApp</div>
    </div>

    <nav class="flex flex-col gap-2">
      <RouterLink
        to="/"
        class="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
      >
        <span class="inline-flex items-center w-9 justify-center">🏠</span>
        <span>Home</span>
      </RouterLink>

      <RouterLink
        to="/weather"
        class="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
      >
        <span class="inline-flex items-center w-9 justify-center">☀️</span>
        <span>Weather</span>
      </RouterLink>

      <RouterLink
        to="/profile"
        class="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
      >
        <span class="inline-flex items-center w-9 justify-center">👤</span>
        <span>Profile</span>
      </RouterLink>

      <RouterLink
        to="/about"
        class="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
      >
        <span class="inline-flex items-center w-9 justify-center">ℹ️</span>
        <span>About</span>
      </RouterLink>
    </nav>
  </VNavigationDrawer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { VNavigationDrawer } from "vuetify/components";

const props = defineProps({
  railWidth: { type: [Number, String], default: 72 },
  expandedWidth: { type: [Number, String], default: 220 },
});

const railNumeric = computed(() =>
  typeof props.railWidth === "number"
    ? props.railWidth
    : Number(String(props.railWidth).replace(/px$/, ""))
);
const expandedNumeric = computed(() =>
  typeof props.expandedWidth === "number"
    ? props.expandedWidth
    : Number(String(props.expandedWidth).replace(/px$/, ""))
);
</script>

<style scoped>
/* Layout is now handled with Tailwind and Vuetify components; keep minimal scoped styles if necessary */

/* Hide the header (brand) when the drawer is in rail (collapsed) and not hovered */
::v-deep(.v-navigation-drawer--rail:not(:hover) .brand) {
  display: none;
}
</style>
