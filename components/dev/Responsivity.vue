<template>
  <section class="pt-14 md:pt-8">
    <div class="md:grid md:grid-cols-2 items-center">
      <div class="flex justify-center">
        <img
          class="h-auto scale-150 md:scale-100"
          src="/images/mobile-mocks.png"
          alt="Mobile Mocks Responsivity"
        />
      </div>
      <div class="mt-14 md:mt-0 lg:hidden">
        <Box box-type="dark" custom-class="px-4 py-6">
          <h2 class="title pb-4">
            Mi tudjuk, hogy mennyire fontos az elérhetőség.
          </h2>
          <p class="desc pb-6" v-html="formattedDescription" />
          <div
            class="flex justify-center gap-2 items-center text-white text-[0.875rem] leading-normal font-bold lg:text-[1rem]"
          >
            <a href="tel:+36308754438">Hívjon most</a>
            <img
              src="/icons/arrow-right.svg"
              alt="Arrow Right Hívás Gomb - Kattintható, hogy többet megtudj."
            />
          </div>
        </Box>
      </div>
      <div class="hidden lg:block mt-8">
        <div class="px-4 py-6 w-[30rem] xl:w-[40rem]">
          <h2 class="title pb-4">
            Mi tudjuk, hogy mennyire fontos az elérhetőség.
          </h2>
          <p class="desc pb-6" v-html="formattedDescription" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
let text: string =
  "A weboldalad megfelelő elérhetősége érdekében a fejlesztés során /tmaximálisan /tszem /telőtt /ttartjuk, hogy minden kijelző méreten megfelelően látható legyen a weboldalad tartalma. Nem utolsó szempont a /tGoogle /telérés sem, így /toptimalizáljuk /taz /telérésed a keresőmotorok számára is.";
const descriptionSentence = ref<string>(text || "");

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

<style scoped>
.title {
  color: #5e2bff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.desc {
  color: #fff;
  font-family: "Space Grotesk";
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media only screen and (min-width: 1024px) {
  .title {
    font-size: 1.5rem;
  }
  .desc {
    font-size: 1.125rem;
  }
}

@media only screen and (min-width: 1440px) {
  .title {
    font-size: 2.5rem;
  }
  .desc {
    font-size: 1.5rem;
  }
}
</style>
