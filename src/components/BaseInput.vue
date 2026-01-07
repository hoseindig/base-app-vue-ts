<template>
  <div class="base-input">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      :aria-describedby="ariaDescribedby"
      :disabled="disabled"
      :required="required"
      :name="name"
      class="input"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  id: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  name: { type: String, default: "" },
  ariaDescribedby: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue", "input"]);

const onInput = (e: Event) => {
  const val = (e.target as HTMLInputElement).value;
  emit("update:modelValue", val);
  emit("input", val);
};
</script>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
}
.label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.input {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
}
</style>
