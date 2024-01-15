<template>
  <section class="mt-8">
    <div class="flex justify-center items-center lg:hidden">
      <div class="w-[15rem] h-[15rem]">
        <client-only>
          <Vue3Lottie :animation-data="Handshake" />
        </client-only>
      </div>
    </div>
    <div id="prices-container">
      <div id="prices" class="mt-4 min-w-min flex gap-4 lg:grid lg:grid-cols-2">
        <Box
          box-type="dark"
          custom-class="custom-border relative flex flex-col justify-between items-center pt-[3rem] pb-[1rem] sl:px-4"
        >
          <div class="tag">
            <p class="tag-text">Ingyenes konzultáció</p>
          </div>
          <h4 class="title pb-5 text-center w-[20rem] md:w-[25rem]">
            webfejlesztés
          </h4>
          <p class="price pb-5">119.990 Ft.- tól</p>
          <ul class="list pb-6">
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" /> Saját
              logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />Egyedi
              webdesign
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />Animációk
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />Domain,
              saját céges email cím
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />SEO
            </li>
          </ul>
          <Button anchor-href="#contact">érdekel</Button>
        </Box>
        <Box
          box-type="dark"
          custom-class="flex flex-col justify-between items-center pt-[3rem] pb-[1rem] sl:px-4"
        >
          <h4 class="title pb-5 text-center w-[20rem] md:w-[25rem]">
            Arculat/Logó tervezés
          </h4>
          <p class="price pb-5">19.990 Ft.- tól</p>
          <ul class="list pb-6">
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Színpaletta kiválasztása
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />Egyedi
              logó
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />Social
              Media sablonok
            </li>
            <li class="flex items-center gap-2">
              <img
                src="/icons/list-dot.svg"
                alt="Lista Jelzés Icon"
              />Névjegykártya
            </li>
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />Szórólap
              / Molinó
            </li>
          </ul>
          <Button anchor-href="#contact">érdekel</Button>
        </Box>
        <Box
          box-type="fancy"
          custom-class="flex flex-col justify-between items-center pt-[3rem] pb-[1rem] sl:px-4"
        >
          <h4
            class="title pb-5 text-center w-[20rem] sl:w-[22rem] md:w-[25rem]"
          >
            Pénzügyi tanácsadás
          </h4>
          <p class="price pb-5">Egyéni árazás</p>
          <ul class="list pb-6">
            <li class="flex items-center gap-2">
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Hitelügyintézés
            </li>
            <li class="flex items-center gap-2">
              <img
                src="/icons/list-dot.svg"
                alt="Lista Jelzés Icon"
              />Pályázatírás
            </li>
            <li class="flex items-center gap-2">
              <img
                src="/icons/list-dot.svg"
                alt="Lista Jelzés Icon"
              />Megtakarítás
            </li>
            <li class="flex items-center gap-2">
              <img
                src="/icons/list-dot.svg"
                alt="Lista Jelzés Icon"
              />Számlanyitás
            </li>
          </ul>
          <Button anchor-href="#contact">érdekel</Button>
        </Box>
        <div class="hidden lg:flex justify-center items-center">
          <div class="w-[20rem] h-[20rem]">
            <client-only>
              <Vue3Lottie :animation-data="Handshake" />
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Vue3Lottie } from "vue3-lottie";
import Handshake from "~/assets/lottie/handshake-lottie.json";
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
