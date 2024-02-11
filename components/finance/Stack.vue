<template>
  <section class="pt-8">
    <Box
      box-type="dark"
      custom-class="pt-[2.8rem] pl-[3rem] pr-[2.6rem] pb-[2.3rem] lg:order-1 lg:col-span-2"
    >
      <blockquote
        class="text-white text-[1.25rem] font-normal leading-normal pb-[1.5rem] lg:text-[2rem] xl:text-[3rem]"
      >
        “<span class="text-[#5E2BFF]">Bankfüggetlenségem</span> lehetővé teszi,
        hogy <span class="text-[#5E2BFF]">ne a pénzintézetek</span> érdekeit
        tartsam szem előtt, így az Ügyfélnek
        <span class="text-[#5E2BFF]">személyre szabottan</span> a legjobb
        konstrukciókat tudjam <span class="text-[#5E2BFF]">biztosítani</span>.”
      </blockquote>
      <p
        class="text-white text-[1.125rem] font-normal leading-normal text-right lg:text-[1.5rem]"
      >
        ~ Tekes-Szabó Krisztina
      </p>
    </Box>
    <div
      class="flex flex-col justify-center items-center lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-4"
    >
      <div class="w-[20rem] h-[20rem] lg:w-full lg:h-full xxl:h-[40rem] xxl:w-full xxl:flex justify-center items-center">
        <ClientOnly>
          <Vue3Lottie :animation-data="Lottie" />
        </ClientOnly>
      </div>
      <Box box-type="dark" custom-class="w-full h-full py-[2rem] px-4">
        <h2
          class="text-[#5E2BFF] text-[1.75rem] font-bold pb-4 md:text-[2rem] xl:text-[3rem] xl:pb-16"
        >
          Virtuális asszisztens?
        </h2>
        <p class="text-white pb-2 md:text-[1.125rem] xl:text-[1.5rem] xl:pb-8">
          Add át a számodra
          <span class="text-[#5E2BFF]">kellemetlen feladatokat</span>: projekt
          management, <span class="text-[#5E2BFF]">e-mail kezelés</span>,
          piackutatás, időpontegyeztetések, ügyfeleiddel való kapcsolattartás,
          <span class="text-[#5E2BFF]">naptárkezelés</span>, általános
          <span class="text-[#5E2BFF]">adminisztráció</span>.
        </p>
        <p class="text-white md:text-[1.125rem] xl:text-[1.5rem]">
          A virtuális asszisztencia olyan
          <span class="text-[#5E2BFF]">innovatív megoldás</span>, amellyel
          <span class="text-[#5E2BFF]">nem szükséges</span> több alkalmazottat
          foglalkoztatnod, hiszen havi <span>pár óra munkáról</span> van szó -
          <span class="text-[#5E2BFF]">időt</span>, bérleti díjat, járulékot
          takarítasz meg. A szolgáltatás díját pedig
          <span class="text-[#5E2BFF]">100%-ban leírhatod</span> költségként.
          Így azzal tudsz foglalkozni,
          <span class="text-[#5E2BFF]">amit igazán kedvelsz</span>, a
          <span class="text-[#5E2BFF]">saját vállalkozásoddal</span>.
        </p>
        <div class="flex justify-center pt-8">
          <Button anchor-href="#contact"> érdekel </Button>
        </div>
      </Box>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import Lottie from "~/assets/lottie/vassistent-lottie.json";
</script>
<style></style>
