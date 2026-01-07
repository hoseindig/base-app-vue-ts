<template>
  <div class="base-select">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <select
      :id="id"
      :value="modelValue"
      @change="onChange"
      class="select"
      v-bind="$attrs"
    >
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: { type: [String, Number], default: "" },
  options: {
    type: Array as () => Array<{ value: string; label: string }>,
    default: () => [],
  },
  label: { type: String, default: "" },
  id: { type: String, default: "" },
  name: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue", "change"]);

const onChange = (e: Event) => {
  const val = (e.target as HTMLSelectElement).value;
  emit("update:modelValue", val);
  emit("change", val);
};
</script>

<style scoped>
.base-select {
  display: flex;
  flex-direction: column;
}
.label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.select {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
}
</style>
