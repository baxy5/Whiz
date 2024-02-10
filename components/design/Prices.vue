<template>
  <section class="mt-8">
    <div id="prices-container">
      <div id="prices" class="mt-4 min-w-min flex gap-4 lg:grid lg:grid-cols-2">
        <Box
          box-type="dark"
          custom-class="custom-border relative flex flex-col justify-between items-center pt-[3rem] pb-[1rem] px-1 sl:px-4"
        >
          <div class="tag">
            <p class="tag-text">Legnépszerűbb</p>
          </div>
          <h4 class="title pb-5 text-center w-[20rem] md:w-[25rem]">
            Közepes logó csomag
          </h4>
          <p class="price pb-5">29.990 Ft.-tól</p>
          <ul class="list pb-6">
            <li class="flex items-center gap-2">
              <img
                src="/icons/list-dot.svg"
                alt="Lista Jelzés Icon"
              />Bonyolultabb, összetettebb logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />3-4
              koncepció logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />2
              végleges variáció a kidolgozott logóra
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />JPG, PNG,
              TIF, AI formátumú változat átadása
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />3 apróbb
              módosítás lehetősége
            </li>
          </ul>
          <Button anchor-href="#contact">érdekel</Button>
        </Box>
        <Box
          box-type="dark"
          custom-class="flex flex-col justify-between items-center pt-[3rem] pb-[1rem] sl:px-4"
        >
          <h4 class="title pb-5 text-center w-[20rem] md:w-[25rem]">
            Kis logó csomag
          </h4>
          <p class="price pb-5">19.990 Ft.-tól</p>
          <ul class="list pb-6">
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Egyszerű minimál logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />2
              koncepció logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />1
              végleges, kidolgozott logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />JPG és
              PNG formátumú változat átadása
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />2 apróbb
              módosítás lehetősége
            </li>
          </ul>
          <Button anchor-href="#contact">érdekel</Button>
        </Box>
        <GlassBox
          custom-class="w-full flex flex-col justify-between items-center pt-[3rem] pb-[1rem] px-4"
        >
          <h4
            class="title pb-5 text-center w-[20rem] sl:w-[22rem] md:w-[25rem]"
          >
            Nagy logó csomag
          </h4>
          <p class="price pb-5">59.990 Ft.-tól</p>
          <ul class="list pb-6">
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Részletgazdag logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />4-5
              koncepció logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />2-3
              végleges variáció a kidolgozott logóra
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />JPG, PDF,
              PNG, TIF, SVG, AI formátumú változat átadása
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Korlátlan módosítás lehetősége
            </li>
          </ul>
          <Button anchor-href="#contact">érdekel</Button>
        </GlassBox>
        <Box
          box-type="dark"
          custom-class="flex flex-col justify-between items-center pt-[3rem] pb-[1rem] sl:px-4"
        >
          <h4
            class="title pb-5 text-center w-[20rem] sl:w-[22rem] md:w-[25rem]"
          >
            Arculati Elemek
          </h4>
          <p class="price pb-5">Egyéni árazás</p>
          <ul class="list pb-6">
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Molinók, Roll-upok
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Névjegykártya
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Szóróanyagok
            </li>
            <li class="flex items-center gap-2">
              <img
                src="/icons/list-dot.svg"
                alt="Lista Jelzés Icon"
              />Prezentációk
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Social Media posztok
            </li>
          </ul>
          <Button anchor-href="#contact">érdekel</Button>
        </Box>
      </div>
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);

onNuxtReady(async () => {
  let mm = gsap.matchMedia();
  let draggable = Draggable.create("#prices", {
    type: "x",
    bounds: "#prices-container",
    edgeResistance: 0.65,
    autoScroll: 2,
  });

  mm.add("(max-width: 1023px)", () => {
    draggable[0].enable();
  });
  mm.add("(min-width: 1024px)", () => {
    draggable[0].disable();
  });
});
</script>
<style scoped>
.title {
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.price {
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: linear-gradient(90deg, #5e2bff 0%, #723080 115.64%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.list {
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: grid;
  gap: 1rem;
}

.tag {
  position: absolute;
  top: -1rem;
  color: #fff;
  background-color: #000;
  border: 1px solid #5e2bff;
  border-radius: 4.375rem;
}
.tag-text {
  color: #fff;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  background: linear-gradient(90deg, #5e2bff 0%, #723080 115.64%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.custom-border {
  position: relative;
  background: linear-gradient(#000, #000) padding-box,
    linear-gradient(to right, #5e2bff, #b64ccd) border-box;
  border: 1px solid transparent;
}

@media only screen and (min-width: 768px) {
  .title {
    color: #fff;
    font-size: 2rem;
  }

  .price {
    font-size: 2.5rem;
  }

  .list {
    font-size: 1rem;
  }
}
</style>
