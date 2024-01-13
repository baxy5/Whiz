<template>
  <section id="how" class="mt-4 md:grid md:grid-cols-2 md:gap-4">
    <Box
      box-type="dark"
      custom-class="h-[100vh] order-1 flex flex-col justify-center items-center py-[14.5rem] px-12"
    >
      <div class="relative">
        <div id="konzultacio">
          <h3 class="title">Konzultáció</h3>
          <p class="parag md:hidden">
            Először megismerkedünk, mert nálunk fontos az ügyféllel való
            kapcsolat. Majd alaposan átbeszéljük igényeid.
          </p>
        </div>
        <div id="tervezes" class="absolute top-0">
          <h3 class="title">Tervezés</h3>
          <p class="parag md:hidden">
            Az általad elmondottak alapján elkezdjük megtervezni a weboldalad
            kinézetét és funkcionalitását.
          </p>
        </div>
        <div id="megvalositas" class="absolute top-0">
          <h3 class="title">Megvalósítás</h3>
          <p class="parag md:hidden">
            A megtervezett weboldaladat elkezdjük építeni. Igény szerint nyomon
            tudod követni weboldalad építését egy linken keresztül.
          </p>
        </div>
        <div id="egyeztetes" class="absolute top-0">
          <h3 class="title">Egyeztetés</h3>
          <p class="parag md:hidden">
            A fejlesztés után, küldünk egy linket amin le tudod tesztelni leendő
            weboldaladat. Javítjuk a hibákat, változtatásokat, hogy kihozzuk a
            maximumot a weboldaladból.
          </p>
        </div>
        <div id="atadas" class="absolute top-0">
          <h3 class="title">Átadás</h3>
          <p class="parag md:hidden">
            A weboldalad sikeresen elkészült! Hozzáadjuk a kiválasztott
            domainedhez. És már oszthatod is.
          </p>
        </div>
      </div>
    </Box>
    <div class="hidden relative order-2 md:flex jusitfy-center items-center">
      <p id="text1" class="parag">
        Először megismerkedünk, mert nálunk fontos az ügyféllel való kapcsolat.
        Majd alaposan átbeszéljük igényeid.
      </p>
      <p id="text2" class="parag absolute">
        Az általad elmondottak alapján elkezdjük megtervezni a weboldalad
        kinézetét és funkcionalitását.
      </p>
      <p id="text3" class="parag absolute">
        A megtervezett weboldaladat elkezdjük építeni. Igény szerint nyomon
        tudod követni weboldalad építését egy linken keresztül.
      </p>
      <p id="text4" class="parag absolute">
        A fejlesztés után, küldünk egy linket amin le tudod tesztelni leendő
        weboldaladat. Javítjuk a hibákat, változtatásokat, hogy kihozzuk a
        maximumot a weboldaladból.
      </p>
      <p id="text5" class="parag absolute">
        A weboldalad sikeresen elkészült! Hozzáadjuk a kiválasztott domainedhez.
        És már oszthatod is.
      </p>
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onNuxtReady(async () => {
  let mm = gsap.matchMedia();

  mm.add("(max-width: 767px)", () => {
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

  mm.add("(min-width: 768px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#how",
        start: "top top",
        end: "+=8500",
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
      .set(["#text2", "#text3", "#text4", "#text5"], {
        opacity: 0,
        scale: 0,
      })
      .to("#konzultacio", {
        opacity: 0.5,
        y: 300,
        scale: 0.9,
      })
      .to(
        "#text1",
        {
          opacity: 0,
          scale: 0,
        },
        "<"
      )
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
        "#text2",
        {
          opacity: 4,
          scale: 1,
        },
        "<"
      )
      .to("#text2", {
        opacity: 0,
        scale: 0,
      })
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
        "#text3",
        {
          opacity: 4,
          scale: 1,
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
        "#text3",
        {
          opacity: 0,
          scale: 0,
        },
        "<"
      )
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
      .to(
        "#text4",
        {
          opacity: 4,
          scale: 1,
        },
        "<"
      )
      .to("#egyeztetes", {
        opacity: 0.5,
        scale: 0.9,
        y: 300,
      })
      .to(
        "#text4",
        {
          opacity: 0,
          scale: 0,
        },
        "<"
      )
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
      )
      .to("#text5", {
        opacity: 4,
        scale: 1,
      });
  });
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
