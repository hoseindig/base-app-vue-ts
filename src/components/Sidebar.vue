<template>
  <aside class="sidebar">
    <div class="brand">BaseApp</div>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/weather" class="nav-link">Weather</router-link>
      <router-link to="/profile" class="nav-link">Profile</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar {
  width: 220px;
  min-width: 160px;
  padding: 1.25rem;
  border-right: 1px solid var(--color-border);
  height: 100vh;
  box-sizing: border-box;
}
.brand {
  font-weight: 700;
  margin-bottom: 1rem;
}
.nav-link {
  display: block;
  padding: 0.5rem 0.25rem;
  color: var(--color-text);
  text-decoration: none;
}
.nav-link.router-link-active {
  font-weight: 700;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
