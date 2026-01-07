<template>
  <section class="profile">
    <h1>{{ $t("common.profile") }}</h1>

    <div class="field">
      <label>{{ $t("common.name") }}</label>
      <input v-model="name" />
      <button @click="saveName">{{ $t("common.add") }}</button>
    </div>

    <div class="field">
      <label>{{ $t("common.theme") }}</label>
      <select v-model="theme" @change="applyTheme">
        <option value="auto">{{ $t("common.auto") }}</option>
        <option value="light">{{ $t("common.light") }}</option>
        <option value="dark">{{ $t("common.dark") }}</option>
      </select>
    </div>

    <div class="field">
      <label>{{ $t("common.language") }}</label>
      <select v-model="lang" @change="applyLang">
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const name = ref("");
const theme = ref("auto");
const lang = ref(locale.value);

onMounted(() => {
  try {
    const s = localStorage.getItem("baseapp.user");
    if (s) name.value = JSON.parse(s).name || "";
    const settings = localStorage.getItem("baseapp.settings");
    if (settings) {
      const st = JSON.parse(settings);
      theme.value = st.theme || "auto";
      lang.value = st.language || locale.value;
    }
  } catch (e) {}
});

const saveName = () => {
  const payload = { name: name.value };
  localStorage.setItem("baseapp.user", JSON.stringify(payload));
};

const applyTheme = () => {
  try {
    const settings = JSON.parse(
      localStorage.getItem("baseapp.settings") || "{}"
    );
    settings.theme = theme.value;
    localStorage.setItem("baseapp.settings", JSON.stringify(settings));

    if (theme.value === "dark")
      document.documentElement.classList.add("theme-dark");
    else if (theme.value === "light")
      document.documentElement.classList.remove("theme-dark");
    else document.documentElement.classList.remove("theme-dark");
  } catch (e) {}
};

const applyLang = () => {
  try {
    const settings = JSON.parse(
      localStorage.getItem("baseapp.settings") || "{}"
    );
    settings.language = lang.value;
    localStorage.setItem("baseapp.settings", JSON.stringify(settings));
    locale.value = lang.value;
    if (lang.value === "fa")
      document.documentElement.setAttribute("dir", "rtl");
    else document.documentElement.setAttribute("dir", "ltr");
  } catch (e) {}
};
</script>

<style scoped>
.profile {
  max-width: 720px;
}
.field {
  margin: 0.75rem 0;
}
.field label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.field input,
.field select {
  padding: 0.5rem;
  width: 100%;
  max-width: 320px;
}
</style>
