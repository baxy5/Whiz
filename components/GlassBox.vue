<template>
  <div :class="[customClass, 'idea-box']">
    <div class="idea-box-blur absolute top-0 left-0 w-max h-full"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>

<style scoped>
.idea-box {
  border-radius: 1.25rem;
  background: linear-gradient(
    72deg,
    #000 55.56%,
    #773090 78.62%,
    #c451cf 96.97%,
    #943fe6 116.14%,
    #5e2bff 123.58%
  );
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}

.idea-box-blur {
  z-index: -9999;

  border-radius: 1.25rem;
  background-color: rgba(39, 36, 36, 0.75);
  backdrop-filter: blur(12.5px);
}
</style>
