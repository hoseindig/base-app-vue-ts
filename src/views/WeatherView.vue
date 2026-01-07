<template>
  <section class="page-center">
    <div class="container weather-page">
      <h1>{{ $t("common.weather") }}</h1>

      <WeatherSearch @select="onSelect" />

      <div v-if="loading">Loading…</div>
      <div v-if="error" class="error">{{ error }}</div>

      <div v-if="weather" class="card">
        <h2>{{ place?.name }}</h2>
        <div class="meta">{{ $t("common.currentWeather") }}</div>
        <p>Temperature: {{ weather.temperature }}°C</p>
        <p>Wind speed: {{ weather.windspeed }} m/s</p>
        <p>Weather code: {{ weather.weathercode }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WeatherSearch from "@/components/WeatherSearch.vue";

const place = ref<any>(null);
const weather = ref<any>(null);
const loading = ref(false);
const error = ref("");

const onSelect = async (p: any) => {
  place.value = p;
  weather.value = null;
  error.value = "";
  loading.value = true;
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${p.latitude}&longitude=${p.longitude}&current_weather=true&timezone=auto`
    );
    const json = await res.json();
    weather.value = json.current_weather;
  } catch (e) {
    error.value = "Failed to load weather";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.weather-page {
  max-width: 720px;
}
.card {
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}
.error {
  color: red;
}

/* center wrapper */
.page-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}
.container {
  width: 100%;
  max-width: 720px;
}
</style>
