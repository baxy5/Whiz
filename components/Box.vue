<template>
  <div
    :class="[
      {
        fancy: boxType === 'fancy',
        dark: boxType === 'dark',
      },
      customClass,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  customClass?: string;
  boxType: "fancy" | "dark";
}>();
</script>

<style scoped>
.fancy {
  width: 100%;
  position: relative;

  padding-top: 7.5rem;
  padding-bottom: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  border-radius: 1.25rem;
  background: linear-gradient(
    71deg,
    #000 45.67%,
    #773090 62.23%,
    #c451cf 75.41%,
    #943fe6 89.18%,
    #5e2bff 94.52%
  );
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25) inset;
}

.dark {
  width: 100%;
  position: relative;

  /* padding-top: 11.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem; */

  border-radius: 1.25rem;
  background: #000;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25) inset;
}

@media only screen and (min-width: 768px) {
  .fancy {
    height: 100%;
    padding-bottom: 3rem;
  }
}

@media only screen and (min-width: 1024px) {
  .fancy {
    height: 100%;
    padding-top: 10rem;
    padding-bottom: 3rem;
    padding-left: 7rem;
    padding-right: 7rem;
  }
}

@media only screen and (min-width: 1440px) {
  .fancy {
    height: 100%;
    padding-top: 13rem;
    padding-left: 12rem;
    padding-right: 12rem;
  }
}
</style>
