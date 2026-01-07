<template>
  <component :is="tag" :class="classes" v-bind="attrs" @click="onClick">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAttrs } from "vue";

const props = defineProps({
  variant: { type: String, default: "primary" },
  tag: { type: String, default: "button" },
});
const emit = defineEmits(["click"]);
const attrs = useAttrs();

const classes = computed(() => {
  const base =
    "inline-flex items-center justify-center rounded-md shadow-md transition focus:outline-none";
  const variants: Record<string, string> = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2",
    ghost:
      "bg-transparent border border-gray-200 hover:bg-gray-50 text-gray-800 px-3 py-1",
    danger: "bg-red-600 hover:bg-red-700 text-white px-3 py-1",
  };
  return `${base} ${variants[props.variant] || variants.primary}`;
});

const onClick = (e: Event) => emit("click", e);
</script>

<style scoped>
/* small elevation and ripple-like effect via box-shadow transition */
.shadow-md {
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.08);
}
</style>
