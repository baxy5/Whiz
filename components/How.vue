<template>
  <section id="how" class="mt-4 md:grid md:grid-cols-2 md:gap-4">
    <Box
      box-type="dark"
      custom-class="h-[100vh] order-1 flex flex-col justify-center items-center py-[14.5rem] px-12"
    >
      <div class="relative">
        <div id="konzultacio" class="w-full text-center">
          <img
            class="hidden md:block w-[6rem] h-[6rem]"
            src="~/assets/icons/konzultacio.png"
            alt="Konzultáció Icon - Ha velünk dolgozol ez az első lépés."
          />
          <div class="block md:hidden">
            <h3 class="title">Konzultáció</h3>
            <p class="parag md:hidden">
              Először megismerkedünk, mert nálunk fontos az ügyféllel való
              kapcsolat. Majd alaposan átbeszéljük igényeid.
            </p>
          </div>
        </div>
        <div id="tervezes" class="w-full text-center absolute top-0">
          <img
            class="hidden md:block w-[6rem] h-[6rem]"
            src="~/assets/icons/tervezes.png"
            alt="Tervezés Icon - Ha velünk dolgozol ez a második lépés."
          />
          <div class="block md:hidden">
            <h3 class="title">Tervezés</h3>
            <p class="parag md:hidden">
              Az általad elmondottak alapján elkezdjük megtervezni a weboldalad
              kinézetét és funkcionalitását.
            </p>
          </div>
        </div>
        <div id="megvalositas" class="w-full text-center absolute top-0">
          <img
            class="hidden md:block w-[6rem] h-[6rem]"
            src="~/assets/icons/megvalositas.png"
            alt="Megvalósítás Icon - Ha velünk dolgozol ez a harmadik lépés."
          />
          <div class="block md:hidden">
            <h3 class="title">Megvalósítás</h3>
            <p class="parag md:hidden">
              A megtervezett weboldaladat elkezdjük építeni. Igény szerint
              nyomon tudod követni weboldalad építését egy linken keresztül.
            </p>
          </div>
        </div>
        <div id="egyeztetes" class="w-full text-center absolute top-0">
          <img
            class="hidden md:block w-[6rem] h-[6rem]"
            src="~/assets/icons/egyeztetes.png"
            alt="Egyeztetés Icon - Ha velünk dolgozol ez a negyedik lépés."
          />
          <div class="block md:hidden">
            <h3 class="title">Egyeztetés</h3>
            <p class="parag md:hidden">
              A fejlesztés után, küldünk egy linket amin le tudod tesztelni
              leendő weboldaladat. Javítjuk a hibákat, változtatásokat, hogy
              kihozzuk a maximumot a weboldaladból.
            </p>
          </div>
        </div>
        <div id="atadas" class="w-full text-center absolute top-0">
          <img
            class="hidden md:block w-[6rem] h-[6rem]"
            src="~/assets/icons/atadas.png"
            alt="Átadás Icon - Ha velünk dolgozol ez a végső lépés."
          />
          <div class="block md:hidden">
            <h3 class="title">Átadás</h3>
            <p class="parag md:hidden">
              A weboldalad sikeresen elkészült! Hozzáadjuk a kiválasztott
              domainedhez. És már oszthatod is.
            </p>
          </div>
        </div>
      </div>
    </Box>
    <div
      class="hidden relative order-2 md:flex jusitfy-center items-center md:pl-8 xl:pl-32"
    >
      <div id="text1" class="absolute md:w-[20rem] lg:w-[25rem] w-[30rem]">
        <h3 class="title">Konzultáció</h3>
        <p class="parag">
          Először megismerkedünk, mert nálunk fontos az ügyféllel való
          kapcsolat. Majd alaposan átbeszéljük igényeid.
        </p>
      </div>
      <div id="text2" class="absolute md:w-[20rem] lg:w-[25rem] w-[30rem]">
        <h3 class="title">Tervezés</h3>
        <p class="parag">
          Az általad elmondottak alapján elkezdjük megtervezni a weboldalad
          kinézetét és funkcionalitását.
        </p>
      </div>
      <div id="text3" class="absolute md:w-[20rem] lg:w-[25rem] w-[30rem]">
        <h3 class="title">Megvalósítás</h3>
        <p class="parag">
          A megtervezett weboldaladat elkezdjük építeni. Igény szerint nyomon
          tudod követni weboldalad építését egy linken keresztül.
        </p>
      </div>
      <div id="text4" class="absolute md:w-[20rem] lg:w-[25rem] w-[30rem]">
        <h3 class="title">Egyeztetés</h3>
        <p class="parag">
          A fejlesztés után, küldünk egy linket amin le tudod tesztelni leendő
          weboldaladat. Javítjuk a hibákat, változtatásokat, hogy kihozzuk a
          maximumot a weboldaladból.
        </p>
      </div>
      <div id="text5" class="absolute md:w-[20rem] lg:w-[25rem] w-[30rem]">
        <h3 class="title">Átadás</h3>
        <p class="parag">
          A weboldalad sikeresen elkészült! Hozzáadjuk a kiválasztott
          domainedhez. És már oszthatod is.
        </p>
      </div>
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
<style scoped>
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
