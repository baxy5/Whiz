<template>
  <section class="pt-3 lg:pt-14">
    <Box
      box-type="fancy"
      custom-class="pt-[7.5rem] pb-[3rem] px-[1.5rem]
    lg:pt-[10rem] lg:px-[7rem] xl:pt-[13rem] xl:px-[12rem]"
    >
      <Indicator>
        <p>{{ indicatorText }}</p>
        <p class="flex gap-1 items-center">
          4.8
          <img
            class="w-3 h-3 lg:w-[0.85rem] lg:h-[0.85rem] xl:w-[1rem] xl:h-[1rem]"
            src="/icons/star-icon.svg"
            alt="Star Icon - Jelzi a visszajelzések értékelését ami 4.8"
          />
        </p>
      </Indicator>
      <h1 class="text-white font-normal leading-normal pt-14 pb-12">
        <span
          class="text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem]"
          >{{ spanOne }}</span
        >
        <br />
        <span
          class="text-[1.875rem] pt-2 md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem]"
          >{{ spanTwo }}</span
        >
      </h1>
      <p
        v-html="formattedDescription"
        class="text-[1.125rem] text-white font-normal leading-normal lg:w-[50rem] xl:w-[60rem]"
      ></p>
      <div class="flex justify-center pt-10 lg:pt-36 xl:pt-48">
        <img
          src="/icons/arrow-down.svg"
          alt="Arrow Down - Tudsz lefele görgetni."
        />
      </div>
    </Box>
    <div></div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  indicatorText: string;
  spanOne: string;
  spanTwo: string;
  heroText: string;
}>();

const descriptionSentence = ref<string>(props.heroText || "");

const formatDescription = (): string => {
  const words = descriptionSentence.value.split(" ");

  const formattedWords: Array<string> = words.map((word: string) => {
    if (word.startsWith("/t") && word.endsWith(",")) {
      // Takes out both "/t" and "," characters (This was needed because I didn't want this comma to have another style)
      const cleanWord = word.replace("/t", "").replace(",", "");
      return `<span class="font-bold text-[#5E2BFF]">${cleanWord}</span>,`;
    } else if (word.startsWith("/t")) {
      const cleanWord = word.replace("/t", "");
      return `<span class="font-bold text-[#5E2BFF]">${cleanWord}</span>`;
    } else {
      return word;
    }
  });

  return formattedWords.join(" ");
};

const formattedDescription = computed(() => formatDescription());
</script>
