<template>
  <div class="search">
    <label>{{ $t("common.searchCity") }}</label>
    <BaseInput v-model="query" @input="onInput" placeholder="e.g. Tehran" />

    <ul v-if="results.length" class="suggestions">
      <li v-for="r in results" :key="r.id" @click="select(r)">
        <strong>{{ r.name }}</strong>
        <span v-if="r.country"> — {{ r.country }}</span>
      </li>
    </ul>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";
function debounce(fn: (...args: any[]) => void, delay = 300) {
  let t: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

interface Place {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
}

const query = ref("");
const results = ref<Place[]>([]);
const error = ref("");

const search = async (q: string) => {
  if (!q || q.length < 2) {
    results.value = [];
    return;
  }
  try {
    error.value = "";
    const encoded = encodeURIComponent(q);
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encoded}&count=6&language=en&format=json`
    );
    const json = await res.json();
    results.value = (json.results || []).map((r: any) => ({
      id: `${r.latitude}_${r.longitude}`,
      name: r.name + (r.admin1 ? `, ${r.admin1}` : ""),
      latitude: r.latitude,
      longitude: r.longitude,
      country: r.country,
    }));
  } catch (e) {
    error.value = "Failed to search cities";
    results.value = [];
  }
};

const debounced = debounce(search, 300);
const onInput = () => debounced(query.value);

const select = (p: Place) => {
  results.value = [];
  query.value = p.name;
  // emit event
  (emit as any)("select", p);
};

const emit = defineEmits<{
  (e: "select", place: Place): void;
}>();
</script>

<style scoped>
.search {
  position: relative;
}
.suggestions {
  position: absolute;
  left: 0;
  right: 0;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  max-height: 200px;
  overflow: auto;
  list-style: none;
  padding: 0.25rem 0;
  margin: 0.25rem 0 0 0;
}
.suggestions li {
  padding: 0.5rem;
  cursor: pointer;
}
.suggestions li:hover {
  background: rgba(0, 0, 0, 0.04);
}
.error {
  color: red;
  margin-top: 0.5rem;
}
</style>
