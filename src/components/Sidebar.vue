<template>
  <aside
    class="sidebar"
    :class="{ rail }"
    :style="{
      '--rail-width': computedRailWidth,
      '--sidebar-expanded-width': computedExpandedWidth,
    }"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="brand">
      <div class="brand-icon">B</div>
      <div class="brand-label">BaseApp</div>
    </div>

    <nav>
      <RouterLink class="nav-link" to="/">
        <span class="icon" aria-hidden>🏠</span>
        <span class="label">Home</span>
      </RouterLink>

      <RouterLink class="nav-link" to="/weather">
        <span class="icon" aria-hidden>☀️</span>
        <span class="label">Weather</span>
      </RouterLink>

      <RouterLink class="nav-link" to="/profile">
        <span class="icon" aria-hidden>👤</span>
        <span class="label">Profile</span>
      </RouterLink>

      <RouterLink class="nav-link" to="/about">
        <span class="icon" aria-hidden>ℹ️</span>
        <span class="label">About</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  rail: { type: Boolean, default: true },
  railWidth: { type: [Number, String], default: "72px" },
  expandedWidth: { type: [Number, String], default: "220px" },
});

const computedRailWidth = computed(() =>
  typeof props.railWidth === "number" ? `${props.railWidth}px` : props.railWidth
);
const computedExpandedWidth = computed(() =>
  typeof props.expandedWidth === "number"
    ? `${props.expandedWidth}px`
    : props.expandedWidth
);
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 1rem;
  background: var(--color-background);
  border-right: 1px solid var(--color-border);
  width: var(--sidebar-expanded-width);
  transition: width 200ms ease, box-shadow 200ms ease;
  z-index: 50;
  overflow: hidden;
}

/* Rail mode: collapsed by width variable and expands on hover */
.sidebar.rail {
  width: var(--rail-width);
}
.sidebar.rail:hover {
  width: var(--sidebar-expanded-width);
  box-shadow: 0 6px 20px rgba(16, 24, 40, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--vt-c-indigo);
  color: white;
  font-weight: 700;
}
.brand-label {
  font-weight: 700;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 0.25rem;
  border-radius: 6px;
}
.nav-link .icon {
  width: 36px;
  display: inline-flex;
  justify-content: center;
}
.nav-link .label {
  transition: opacity 160ms ease, transform 160ms ease;
}

/* hide labels when collapsed */
.sidebar.rail:not(:hover) .label {
  opacity: 0;
  transform: translateX(-6px);
  width: 0;
  overflow: hidden;
}

.nav-link.router-link-active {
  background: rgba(0, 0, 0, 0.04);
  font-weight: 700;
}

@media (max-width: 768px) {
  /* hide the fixed sidebar on small screens - the app uses a mobile drawer instead */
  .sidebar {
    display: none;
  }
  /* but allow usage inside the mobile drawer (App.vue) */
  .mobile-drawer .sidebar {
    display: block;
    position: static;
    width: 100%;
    height: auto;
    box-shadow: none;
    border-right: none;
    padding: 0;
  }
}
</style>
