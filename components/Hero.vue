<template>
  <section class="pt-3 lg:pt-14">
    <Box box-type="fancy">
      <div
        :class="[
          {
            'lg:pb-[8rem] xl:px-[8rem] xl:pb-[12rem] xxl:pb-[14rem]':
              !!showcaseImageOneSrc === true,
            'xl:pb-[8rem]': !!showcaseImageOneSrc === false,
          },
          'grid lg:grid-cols-2 pt-[3.5rem] pb-[3rem] px-[1.5rem] 2sl:pt-[4.5rem] lg:pt-[10rem] lg:px-[7rem] xl:pt-[13rem] xl:px-[12rem]',
        ]"
      >
        <div>
          <div class="flex items-center">
            <Indicator>
              <p>{{ indicatorText }}</p>
              <p class="flex gap-1 items-center">
                {{ indicatorDetail }}
                <img
                  class="w-4 h-4 lg:w-[1.25rem] lg:h-[1.25rem] xl:w-[1.5rem] xl:h-[1.5rem]"
                  :src="indicatorSrc"
                  :alt="indicatorAlt"
                />
              </p>
            </Indicator>
          </div>
          <div
            v-if="showcaseImageOneSrc"
            class="flex justify-center items-center mt-6 sl:mb-24 2sl:mb-56 md:mb-48 lg:hidden"
          >
            <div class="relative h-[15rem] w-full">
              <img
                class="h-auto absolute top-0 -left-6 md:w-[30rem] md:left-28 lg:w-full"
                :src="showcaseImageOneSrc"
              />
              <img
                class="h-auto absolute top-8 left-4 md:w-[30rem] md:top-[70px] md:left-44"
                :src="showcaseImageTwoSrc"
              />
              <img
                class="h-auto absolute top-24 md:w-[30rem] md:top-44 md:left-36"
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
              class="h-auto absolute -top-12 left-12 xl:w-full xl:-top-36 xxl:w-full xxl:-top-44"
              :src="showcaseImageOneSrc"
            />
            <img
              class="h-auto absolute top-4 left-8 xl:w-full xl:-top-12 xxl:w-full"
              :src="showcaseImageTwoSrc"
            />
            <img
              class="h-auto absolute top-32 left-8 xl:w-full xl:top-20 xxl:w-full"
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
