import type { Box } from '#build/components';
<template>
  <section class="pt-8 h-full w-full">
    <div class="block xl:hidden">
      <div class="relative h-full w-full grid justify-center items-center mb-4">
        <img
          class=""
          src="/images/hok-image-font.svg"
          alt="Arculati Kézikönyv Font stílus kép"
        />
        <img
          class="absolute top-10 -right-6"
          src="/images/hok-image-theme.svg"
          alt="Arculati Színskála kép"
        />
        <img
          class="absolute -top-10 -right-6"
          src="/images/hok-image.svg"
          alt="Arculati Logó kép"
        />
      </div>
      <div class="md:flex md:gap-4 md:flex-row-reverse">
        <InfoBox
          box-type="dark"
          image-src="/icons/design-qmark.svg"
          image-alt="Logo tervezés - Logó Tervezés Szolgáltatás"
          title="Nincs ötleted a logóra de megvan egy elkébzelés a fejedben?"
          desc="Ebben az esetben is keress fel minket bátran! A személyes egyeztetésen, gyakran sikerül megoldást találnunk egy adott design vagy elképzelés megvalósítására, így nem kell tartanod attól, hogy esetleg nem leszel elég felkészült, hogy belevágj egy projectbe."
          add-text="Kapcsolat"
          add-href="#contact"
        />
        <Box box-type="dark" custom-class="mt-4 py-8 md:mt-0">
          <ul
            class="w-full h-full flex flex-col justify-center items-center gap-12 lg:gap-24"
          >
            <li class="text-white text-[1.5rem] font-bold">Egységes.</li>
            <li
              class="bg-gradient-to-r from-[#C451CF] to-[#5E2BFF] bg-clip-text text-transparent text-[1.5rem] font-bold"
            >
              Letisztult.
            </li>
            <li class="text-white text-[1.5rem] font-bold">Varázslatos.</li>
          </ul>
        </Box>
      </div>
    </div>
    <div class="hidden xl:block">
      <Box box-type="dark" custom-class="mt-4 px-4 py-4 lg:px-10 lg:py-10">
        <div class="flex items-center gap-8">
          <img
            class="hidden md:block"
            src="/icons/design-qmark.svg"
            alt="Logó tervezés"
          />
          <div>
            <div class="flex gap-4 items-center pb-4">
              <img
                class="block md:hidden"
                src="/icons/question-icon.svg"
                alt="Logó tervezés"
                width="50"
                height="50"
              />
              <h3 class="title">
                Nincs ötleted a logóra de megvan egy elkézelés a fejedben?
              </h3>
            </div>
            <p class="desc" v-html="formattedLogoSentence"></p>
          </div>
        </div>
      </Box>
      <div class="mt-4 grid grid-cols-2">
        <Box box-type="dark" custom-class="mt-4 py-8 md:mt-0">
          <ul
            class="w-full h-full flex flex-col justify-center items-center gap-12 lg:gap-24"
          >
            <li class="text-white text-[2.5rem] font-bold">Egységes.</li>
            <li
              class="bg-gradient-to-r from-[#C451CF] to-[#5E2BFF] bg-clip-text text-transparent text-[2.5rem] font-bold"
            >
              Letisztult.
            </li>
            <li class="text-white text-[2.5rem] font-bold">Varázslatos.</li>
          </ul>
        </Box>
        <div
          class="relative h-full w-full grid justify-center items-center mb-4"
        >
          <img
            class=""
            src="/images/hok-image-font.svg"
            alt="Arculati Kézikönyv Font stílus kép"
          />
          <img
            class="absolute top-10 -right-6 xl:top-16 xl:right-0"
            src="/images/hok-image-theme.svg"
            alt="Arculati Színskála kép"
          />
          <img
            class="absolute -top-20 -right-6 xl:right-10"
            src="/images/hok-image.svg"
            alt="Arculati Logó kép"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
let text: string =
  "Ebben az esetben is /tkeress /tfel minket bátran! A /tszemélyes /tegyeztetésen, gyakran sikerül /tmegoldást /ttalálnunk egy adott design vagy elképzelés /tmegvalósítására, így nem kell tartanod attól, hogy esetleg nem leszel /telég /tfelkészült, hogy belevágj egy projectbe.";
const logoSentence = ref<string>(text || "");

const formatDescription = (input: Ref<string>): string => {
  const words = input.value.split(" ");

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

const formattedLogoSentence = computed(() => formatDescription(logoSentence));
</script>
<style scoped>
.title {
  color: #5e2bff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.desc {
  color: #fff;
  font-family: "Space Grotesk";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7rem;
}
</style>
