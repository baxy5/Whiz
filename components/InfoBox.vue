<template>
  <Box :box-type="boxType" custom-class="w-full h-full px-[2.8rem] pt-[2rem] pb-[3rem]">
    <img class="w-10 h-10 lg:w-12 lg:h-12" :src="imageSrc" :alt="imageAlt" />
    <h2
      class="text-white text-[1.125rem] font-bold leading-normal pt-6 pb-[1.3rem] lg:text-[1.5rem]"
    >
      {{ title }}
    </h2>
    <p
      class="text-[#B5B5B5] text-[0.8125rem] leading-normal font-normal pb-[1.8rem] lg:text-[1rem]"
    >
      {{ desc }}
    </p>
    <div
      class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold lg:text-[1rem]"
    >
      <a :href="addHref">{{ addText }}</a>
      <img
        src="/icons/arrow-right.svg"
        alt="Arrow Right - Kattintható, hogy többet megtudj."
      />
    </div>
  </Box>
</template>

<script setup lang="ts">
defineProps<{
  boxType: "fancy" | "dark";
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  desc: string;
  addText?: string;
  addHref?: string;
}>();
</script>
