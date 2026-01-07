<template>
  <section class="todo">
    <h2>To‑do</h2>

    <form @submit.prevent="addTodo" class="todo-form">
      <BaseInput v-model="newText" placeholder="Add a task" />
      <BaseButton type="submit">Add</BaseButton>
    </form>

    <ul class="items">
      <li v-for="item in todos" :key="item.id" :class="{ done: item.done }">
        <label>
          <input
            type="checkbox"
            class="mx-2"
            v-model="item.done"
            @change="persist()"
          />
          <span>{{ item.text }}</span>
        </label>
        <button class="remove" variant="danger" @click="remove(item.id)">
          ✕
        </button>
      </li>
    </ul>

    <div v-if="todos.length === 0" class="empty">
      No tasks yet — enjoy your day! ✅
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const STORAGE_KEY = "baseapp.todos";

const newText = ref("");
const todos = ref<Todo[]>(
  (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  })()
);

const persist = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
};

watch(todos, persist, { deep: true });

const addTodo = () => {
  const text = newText.value && newText.value.trim();
  if (!text) return;
  todos.value.unshift({ id: Date.now(), text, done: false });
  newText.value = "";
};

const remove = (id: number) => {
  todos.value = todos.value.filter((t) => t.id !== id);
};
</script>

<style scoped>
.todo {
  background: var(--card-bg);
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: 8px;
}
.todo h2 {
  margin: 0 0 0.5rem 0;
}
.todo-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.todo-form input {
  flex: 1;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
}
.todo-form button {
  padding: 0.4rem 0.8rem;
}
.items {
  list-style: none;
  padding: 0;
  margin: 0;
}
.items li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px dashed var(--color-border);
}
.items li.done span {
  text-decoration: line-through;
  opacity: 0.7;
}
.remove {
  background: transparent;
  border: none;
  cursor: pointer;
}
.empty {
  color: var(--color-muted);
  margin-top: 0.5rem;
}
</style>
