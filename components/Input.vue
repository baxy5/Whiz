<template>
  <input
    :class="[customClass, 'input']"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :value="value"
    required
    autocomplete="off"
  />
</template>
<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue";

defineProps<{
  name: string;
  type: InputTypeHTMLAttribute;
  placeholder: string;
  customClass?: string;
  value?: string;
}>();
</script>
<style scoped>
.input {
  width: 100%;
  padding: 0.25rem 1rem 0.25rem 1rem;
  border: 1px solid #000;
  background: rgba(72, 72, 72, 0.35);
  backdrop-filter: blur(2.5px);
  outline: none;

  color: #fff;
}

.input:focus {
  border: 1px solid #5f2bfd;
}
.input:active {
  border: 1px solid #5f2bfd;
}

::placeholder {
  color: rgba(255, 255, 255, 0.65);
  font-family: Space Grotesk;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

@media only screen and (min-width: 1440px) {
  .input {
    padding: 0.35rem 1rem 0.35rem 1rem;
  }
}
</style>
