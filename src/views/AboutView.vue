<template>
  <section class="about">
    <div class="about-grid">
      <aside class="profile-card" aria-label="Profile">
        <div class="avatar" aria-hidden>
          <svg
            viewBox="0 0 64 64"
            class="avatar-svg"
            role="img"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="30" fill="var(--vt-c-indigo)" />
            <text
              x="50%"
              y="55%"
              text-anchor="middle"
              font-size="22"
              fill="white"
              font-family="Inter,Arial,Helvetica"
            >
              HS
            </text>
          </svg>
        </div>

        <h1 class="name">{{ $t("about.title") }}</h1>
        <a :href="`mailto:${$t('about.email')}`" class="email">{{
          $t("about.email")
        }}</a>

        <div class="profile-actions">
          <a
            :href="`mailto:${$t(
              'about.email'
            )}?subject=Please%20send%20CV&body=Hi%20Hossein`"
            class="btn"
            rel="noopener"
            target="_blank"
            >{{ $t("about.downloadCV") }}</a
          >
        </div>
      </aside>

      <main class="content">
        <p class="summary">{{ $t("about.summary") }}</p>

        <section class="skills-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading">
            {{ $t("about.skillsHeading") }} ({{ skills.length }})
          </h2>
          <ul class="skills">
            <li v-for="(s, i) in skills" :key="i" class="skill">
              {{ s }}
            </li>
          </ul>
        </section>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import i18n from "@/i18n";

const { locale } = useI18n();

const skills = computed(() => {
  try {
    const msgs = i18n.global.getLocaleMessage(locale.value as string) as any;
    return Array.isArray(msgs?.about?.skills) ? msgs.about.skills : [];
  } catch (e) {
    return [];
  }
});
</script>

<style scoped>
:root {
  --card-bg: var(--color-background-soft);
}
.about {
  padding: 1rem 0;
}
.about-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.5rem;
  align-items: start;
}

.profile-card {
  background: var(--card-bg);
  border: 1px solid var(--color-border);
  padding: 1.25rem;
  border-radius: 12px;
  text-align: center;
}
.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
}
.avatar-svg {
  width: 84px;
  height: 84px;
  border-radius: 50%;
}
.name {
  font-size: 1.1rem;
  margin: 0.35rem 0;
}
.email {
  display: inline-block;
  color: var(--vt-c-indigo);
  margin-bottom: 0.5rem;
}
.profile-actions {
  margin-top: 0.75rem;
}
.btn {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--vt-c-indigo), #3a6aa7);
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.content {
  background: transparent;
}
.summary {
  margin: 0 0 1rem 0;
  line-height: 1.6;
}
.skills-section {
  margin-top: 1rem;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0.5rem 0 0 0;
  list-style: none;
}
.skill {
  padding: 0.4rem 0.6rem;
  border-radius: 999px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .profile-card {
    text-align: left;
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .avatar {
    margin: 0;
  }
  .name {
    margin: 0;
  }
}

/* RTL support */
:root[dir="rtl"] .profile-card {
  text-align: center;
}
:root[dir="rtl"] .about-grid {
  direction: rtl;
}
</style>
