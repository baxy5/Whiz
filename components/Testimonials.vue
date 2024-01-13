<template>
  <section class="asd">
    <section id="container" class="mt-4 min-w-min flex gap-4">
      <Box box-type="fancy" custom-class="p-8">
        <h3 class="title">
          Szalai Éva - <span class="font-light">Webfejleszés</span>
        </h3>
        <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
          “Fiatalok, okosak, intelligensek, kultúráltak. Nekem ez fontos. Tenni
          akarnak és ötletelnek. Határidőre dolgoznak. Hozzák a trendet, a
          fiatalos gondolkodást, a lendületet. Szívből ajánlom Őket.” -
        </p>
      </Box>
      <Box box-type="dark" custom-class="p-8">
        <h3 class="title">
          Szalai Éva - <span class="font-light">Webfejleszés</span>
        </h3>
        <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
          “Fiatalok, okosak, intelligensek, kultúráltak. Nekem ez fontos. Tenni
          akarnak és ötletelnek. Határidőre dolgoznak. Hozzák a trendet, a
          fiatalos gondolkodást, a lendületet. Szívből ajánlom Őket.” -
        </p>
      </Box>
      <Box box-type="fancy" custom-class="p-8">
        <h3 class="title">
          Szalai Éva - <span class="font-light">Webfejleszés</span>
        </h3>
        <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
          “Fiatalok, okosak, intelligensek, kultúráltak. Nekem ez fontos. Tenni
          akarnak és ötletelnek. Határidőre dolgoznak. Hozzák a trendet, a
          fiatalos gondolkodást, a lendületet. Szívből ajánlom Őket.” -
        </p>
      </Box>
      <Box box-type="dark" custom-class="p-8">
        <h3 class="title">
          Szalai Éva - <span class="font-light">Webfejleszés</span>
        </h3>
        <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
          “Fiatalok, okosak, intelligensek, kultúráltak. Nekem ez fontos. Tenni
          akarnak és ötletelnek. Határidőre dolgoznak. Hozzák a trendet, a
          fiatalos gondolkodást, a lendületet. Szívből ajánlom Őket.” -
        </p>
      </Box>
      <Box box-type="fancy" custom-class="p-8">
        <h3 class="title">
          Szalai Éva - <span class="font-light">Webfejleszés</span>
        </h3>
        <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
          “Fiatalok, okosak, intelligensek, kultúráltak. Nekem ez fontos. Tenni
          akarnak és ötletelnek. Határidőre dolgoznak. Hozzák a trendet, a
          fiatalos gondolkodást, a lendületet. Szívből ajánlom Őket.” -
        </p>
      </Box>
      <Box box-type="dark" custom-class="p-8">
        <h3 class="title">
          Szalai Éva - <span class="font-light">Webfejleszés</span>
        </h3>
        <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
          “Fiatalok, okosak, intelligensek, kultúráltak. Nekem ez fontos. Tenni
          akarnak és ötletelnek. Határidőre dolgoznak. Hozzák a trendet, a
          fiatalos gondolkodást, a lendületet. Szívből ajánlom Őket.” -
        </p>
      </Box>
    </section>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);

onNuxtReady(async () => {
  Draggable.create("#container", {
    type: "x",
    bounds: ".asd",
  });
});
</script>

<style scoped>
.title {
  color: #fff;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding-bottom: 0.5rem;
}
.parag {
  color: #b5b5b5;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 0.95rem;
  }
  .parag {
    font-size: 0.75rem;
  }
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 1.125rem;
  }
  .parag {
    font-size: 0.95rem;
  }
}
</style>
