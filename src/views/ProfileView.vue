<template>
  <section class="page-center">
    <div class="container profile">
      <h1>{{ $t("common.profile") }}</h1>

      <div class="field">
        <BaseInput v-model="name" :label="$t('common.name')" />
        <BaseButton @click="saveName">{{ $t("common.add") }}</BaseButton>
      </div>

      <div class="field">
        <BaseSelect
          v-model="theme"
          :label="$t('common.theme')"
          :options="themeOptions"
          @change="applyTheme"
        />
      </div>

      <div class="field">
        <BaseSelect
          v-model="lang"
          :label="$t('common.language')"
          :options="langOptions"
          @change="applyLang"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseButton from "@/components/BaseButton.vue";
const { locale, t } = useI18n();

const name = ref("");
const theme = ref("auto");
const lang = ref(locale.value);

const themeOptions = computed(() => [
  { value: "auto", label: t("common.auto") },
  { value: "light", label: t("common.light") },
  { value: "dark", label: t("common.dark") },
]);

const langOptions = computed(() => [
  { value: "en", label: "English" },
  { value: "fa", label: "فارسی" },
]);

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
