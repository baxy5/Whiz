<template>
  <section class="pt-3 lg:pt-14">
    <Box box-type="fancy">
      <div
        :class="[
          {
            'lg:pb-[8rem] xl:px-[8rem] xl:pb-[12rem] xxl:pb-[14rem]': !!showcaseImageOneSrc,
          },
          'grid lg:grid-cols-2 pt-[7.5rem] pb-[3rem] px-[1.5rem] lg:pt-[10rem] lg:px-[7rem] xl:pb-[8rem] xl:pt-[13rem] xl:px-[12rem]',
        ]"
      >
        <div>
          <Indicator>
            <div class="flex justify-between">
              <p>{{ indicatorText }}</p>
              <p class="flex gap-1 items-center">
                {{ indicatorDetail }}
                <img
                  class="w-4 h-4 lg:w-[1.25rem] lg:h-[1.25rem] xl:w-[1.5rem] xl:h-[1.5rem]"
                  :src="indicatorSrc"
                  :alt="indicatorAlt"
                />
              </p>
            </div>
          </Indicator>
          <div
            v-if="showcaseImageOneSrc"
            class="flex justify-center items-center mt-16 sl:mb-16 md:mb-44 lg:mb-80 lg:hidden"
          >
            <div class="relative h-[15rem] w-full">
              <img
                class="h-auto absolute top-0 -left-6 md:w-[30rem] md:left-28 lg:w-full lg:left-14"
                :src="showcaseImageOneSrc"
              />
              <img
                class="h-auto absolute top-2 left-4 md:w-[30rem] md:top-8 md:left-44 lg:w-[40rem] lg:top-10 lg:left-36"
                :src="showcaseImageTwoSrc"
              />
              <img
                class="h-auto absolute top-16 md:w-[30rem] md:top-32 md:left-36 lg:w-[40rem] lg:top-48 lg:left-32"
                :src="showcaseImageThreeSrc"
              />
            </div>
          </div>
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
            :class="[
              {
                'lg:w-[25rem] xl:w-[40rem] xxl:w-[50rem]':
                  !!showcaseImageOneSrc === true,
                'lg:w-[50rem] xl:w-[60rem]': !!showcaseImageOneSrc === false,
              },
              'text-[1.125rem] text-white font-normal leading-normal',
            ]"
          ></p>
        </div>
        <div
          v-if="showcaseImageOneSrc"
          class="hidden lg:flex justify-center items-center"
        >
          <div class="h-full w-full relative">
            <img
              class="h-auto absolute top-0 xl:w-[35rem] xxl:w-[40rem]"
              :src="showcaseImageOneSrc"
            />
            <img
              class="h-auto absolute top-8 left-24 xl:w-[35rem] xxl:w-[40rem]"
              :src="showcaseImageTwoSrc"
            />
            <img
              class="h-auto absolute top-44 left-12 xl:w-[35rem] xxl:w-[40rem]"
              :src="showcaseImageThreeSrc"
            />
          </div>
        </div>
      </div>
    </Box>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  indicatorText: string;
  indicatorSrc: string;
  indicatorDetail?: string;
  indicatorAlt?: string;
  spanOne: string;
  spanTwo: string;
  heroText: string;
  showcaseImageOneSrc?: string;
  showcaseImageTwoSrc?: string;
  showcaseImageThreeSrc?: string;
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
