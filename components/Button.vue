<template>
  <button>
    <a :href="anchorHref">
      <slot></slot>
    </a>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  anchorHref: string;
}>();
</script>

<style scoped>
button {
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  padding: 0.75rem 2rem 0.75rem 2rem;

  border-radius: 4.375rem;
  border: 1px solid #6d6d6d;
  background: rgba(72, 72, 72, 0.75);
  backdrop-filter: blur(2px);

  transition: all 0.1s ease-in-out;
}

button:hover {
  background-color: #5e2bff;
  border: 1px solid #5e2bff;
}
</style>
