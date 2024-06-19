<template>
  <div
    class="w-full py-4"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <Splide :options="computedOptions" :extensions="{ AutoScroll }">
      <SplideSlide>
        <Box box-type="fancy" custom-class="p-8 h-[247px]">
          <h3 class="title">
            Szalai Éva - <span class="font-light">Webfejleszés</span>
          </h3>
          <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
            “Fiatalok, okosak, intelligensek, kultúráltak. Nekem ez fontos.
            Tenni akarnak és ötletelnek. Határidőre dolgoznak. Hozzák a trendet,
            a fiatalos gondolkodást, a lendületet. Szívből ajánlom Őket.” -
          </p>
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box box-type="dark" custom-class="p-8 h-[247px]">
          <h3 class="title">
            Suba Attila - <span class="font-light">Webfejleszés</span>
          </h3>
          <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
            “Fiatalos csapatuk rendkívül precíz és ügyfélcentrikus, mindig
            figyelnek az igényeinkre. Öröm volt velük dolgozni, és biztosan
            ajánljuk őket mindenkinek, aki minőségi szolgáltatásra vágyik!” -
          </p>
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box box-type="fancy" custom-class="p-8 h-[247px]">
          <h3 class="title">
            Nagy Péter - <span class="font-light">Webfejleszés</span>
          </h3>
          <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
            “A csapatukkal való együttműködés egy igazi élmény volt számunkra! A
            webfejlesztésben és arculattervezésben mutatott szaktudásuk
            lenyűgöző, webdesignjük pedig modern és professzionális. Biztosan
            továbbra is velük dolgozunk.” -
          </p>
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box box-type="dark" custom-class="p-8 h-[247px]">
          <h3 class="title">
            Varga Alexandra - <span class="font-light">Design</span>
          </h3>
          <p class="parag w-[17rem] md:w-[19rem] lg:w-[30rem]">
            “Nagyon különleges logót szerettem volna. Jó pár tervezőt végig
            jártam, mindtől ugyan azt a választ kaptam hogy ezt nem tudják nekem
            megvalósítani nézzek mást,egyszerűbbet. Mindezek után tettem még egy
            próbát Kiss Csabánál. Megbeszéltük mit hogy szeretnék, el is készült
            a vázlatokkal. Kellemes meglepetésemre már a vázlat felűlmúlta az
            elképzeléseimet. Teljes mértékben elégedett vagyok. Mindenkinek csak
            ajánlani tudom, ha igazán egyedi logót szeretnétek keressétek
            bátran. ” -
          </p>
        </Box>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const sliderSpeed = ref(1);

const options = ref({
  type: "loop",
  drag: "free",
  gap: 16,
  autoWidth: true,
  autoScroll: {
    speed: sliderSpeed.value,
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: false,
  },
  arrows: false,
  pagination: false,
});

const computedOptions = computed(() => ({
  ...options.value,
  autoScroll: {
    ...options.value.autoScroll,
    speed: sliderSpeed.value,
  },
}));

const handleMouseEnter = () => (sliderSpeed.value = 0.25);
const handleMouseLeave = () => (sliderSpeed.value = 1);
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

@media only screen and (min-width: 1024px) {
  .title {
    font-size: 1.125rem;
  }
  .parag {
    font-size: 0.95rem;
  }
}
</style>
