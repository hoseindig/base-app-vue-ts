<template>
  <section class="welcome">
    <h1>
      {{ greeting }}, <span v-if="user">{{ user.name }}</span>
    </h1>

    <div class="clock-wrap">
      <Clock />
    </div>

    <p class="subtitle">{{ $t("common.welcomeBack") }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Clock from "./Clock.vue";

const { t } = useI18n();
const components = { Clock };

const now = new Date();
const hour = now.getHours();

const greeting = computed(() => {
  if (hour < 12) return t("common.morning");
  if (hour < 18) return t("common.afternoon");
  return t("common.evening");
});

const user = ref<{ name?: string } | null>(null);
onMounted(() => {
  try {
    const s = localStorage.getItem("baseapp.user");
    if (s) user.value = JSON.parse(s);
  } catch (e) {
    user.value = null;
  }
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
.clock-wrap {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
.subtitle {
  margin: 0;
  color: var(--color-muted);
}
</style>
