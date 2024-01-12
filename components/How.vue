<template>
  <section id="how" class="mt-4">
    <Box
      box-type="dark"
      custom-class="h-[100vh] flex flex-col justify-center items-center py-[14.5rem] px-12"
    >
      <div class="relative">
        <div id="konzultacio">
          <h3 class="title">Konzultáció</h3>
          <p class="parag">
            Először megismerkedünk, mert nálunk fontos az ügyféllel való
            kapcsolat. Majd alaposan átbeszéljük igényeid.
          </p>
        </div>
        <div id="tervezes" class="absolute top-0">
          <h3 class="title">Tervezés</h3>
          <p class="parag">
            Az általad elmondottak alapján elkezdjük megtervezni a weboldalad
            kinézetét és funkcionalitását.
          </p>
        </div>
        <div id="megvalositas" class="absolute top-0">
          <h3 class="title">Megvalósítás</h3>
          <p class="parag">
            A megtervezett weboldaladat elkezdjük építeni. Igény szerint nyomon
            tudod követni weboldalad építését egy linken keresztül.
          </p>
        </div>
        <div id="egyeztetes" class="absolute top-0">
          <h3 class="title">Egyeztetés</h3>
          <p class="parag">
            A fejlesztés után, küldünk egy linket amin le tudod tesztelni leendő
            weboldaladat. Javítjuk a hibákat, változtatásokat, hogy kihozzuk a
            maximumot a weboldaladból.
          </p>
        </div>
        <div id="atadas" class="absolute top-0">
          <h3 class="title">Átadás</h3>
          <p class="parag">
            A weboldalad sikeresen elkészült! Hozzáadjuk a kiválasztott
            domainedhez. És már oszthatod is.
          </p>
        </div>
      </div>
    </Box>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onNuxtReady(async () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#how",
      start: "top top",
      end: "+=3500",
      scrub: 1,
      pin: "#how",
    },
  });

  tl.set("#tervezes", {
    opacity: 0.5,
    y: -300,
    scale: 0.9,
  })
    .set(["#megvalositas", "#egyeztetes", "#atadas"], {
      opacity: 0,
      y: -300,
      scale: 0,
    })
    .to("#konzultacio", {
      opacity: 0.5,
      y: 300,
      scale: 0.9,
    })
    .to(
      "#tervezes",
      {
        opacity: 4,
        y: 0,
        scale: 1,
      },
      "<"
    )
    .to(
      "#megvalositas",
      {
        opacity: 0.5,
        scale: 0.9,
      },
      "<"
    )
    .to("#konzultacio", {
      opacity: 0,
      scale: 0,
    })
    .to(
      "#tervezes",
      {
        opacity: 0.5,
        y: 300,
        scale: 0.9,
      },
      "<"
    )
    .to(
      "#megvalositas",
      {
        opacity: 4,
        y: 0,
        scale: 1,
      },
      "<"
    )
    .to(
      "#egyeztetes",
      {
        opacity: 0.5,
        scale: 0.9,
      },
      "<"
    )
    .to("#tervezes", {
      opacity: 0,
      scale: 0,
    })
    .to(
      "#megvalositas",
      {
        opacity: 0.5,
        y: 300,
        scale: 0.9,
      },
      "<"
    )
    .to(
      "#egyeztetes",
      {
        opacity: 4,
        y: 0,
        scale: 1,
      },
      "<"
    )
    .to(
      "#atadas",
      {
        opacity: 0.5,
        scale: 0.9,
      },
      "<"
    )
    .to("#egyeztetes", {
      opacity: 0.5,
      scale: 0.9,
      y: 300,
    })
    .to(
      "#megvalositas",
      {
        opacity: 0,
        scale: 0,
      },
      "<"
    )
    .to(
      "#atadas",
      {
        opacity: 4,
        y: 0,
        scale: 1,
      },
      "<"
    )
    .to(
      "#egyeztetes",
      {
        opacity: 0,
        scale: 0,
      },
      "<"
    );
});
</script>
<style>
.title {
  color: #5e2bff;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 1rem;
}
.parag {
  color: #fff;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
