<template>
  <section class="pt-8">
    <div class="flex flex-col gap-4 lg:flex-row">
      <InfoBox
        box-type="dark"
        image-src="/icons/upwindow-icon.svg"
        image-alt="Referencia Icon - Webfejlesztés Szolgáltatás"
        title="Referencia weboldal"
        desc="Tapasztalt csapatunk a referencia weboldaladat olyan dizájnnal és funkcionalitással készíti el, ami magával ragadja a látogatókat, és maximalizálja az üzleti potenciált."
        add-text="Kapcsolat"
        add-href="#contact"
      />
      <InfoBox
        box-type="dark"
        image-src="/icons/webshop-icon.svg"
        image-alt="Webshop Icon - Webshop fejlesztés Szolgáltatás"
        title="Webshop"
        desc="Csapatunk webshopodat olyan egyedi designnal és hatékony funkcionalitással ruházza fel, ami nem csak elad, de vevőid szívét is meghódítja. Legyen webshopod a vásárlók kedvenc úti célja."
        add-text="Kapcsolat"
        add-href="#contact"
      />
      <div class="flex flex-col gap-4 lg:w-[80rem] xl:w-[120rem]">
        <GlassBox
          custom-class="relative px-[2.8rem] pt-[2rem] pb-[2rem] lg:order-2"
        >
          <h2
            class="text-white text-[1.125rem] font-bold leading-normal pb-[1.3rem] md:text-[1.25rem] lg:text-[1.5rem]"
          >
            Van ötlete?
          </h2>
          <p
            class="text-white text-[0.8125rem] font-normal leading-normal pb-[2.2rem] md:text-[0.9rem] lg:text-[1rem]"
          >
            Legyen a kapcsolatunk az első lépés a siker felé! Várjuk hívását
            vagy email-es megkeresését.
          </p>
          <div
            class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold lg:text-[1rem]"
          >
            <a href="tel:+36308754438">Hívjon most</a>
            <img
              src="/icons/arrow-right.svg"
              alt="Arrow Right - Kattintható, hogy többet megtudj."
            />
          </div>
        </GlassBox>
        <GlassBox
          custom-class="relative px-[2rem] pt-[2rem] pb-[2rem] lg:order-2"
        >
          <div
            class="flex flex-col justify-center items-center gap-4 xl:flex-row"
          >
            <img src="/icons/save-icon.svg" alt="" />
            <p
              class="text-white text-[0.9rem] font-medium leading-normal md:text-[1rem]"
            >
              Fontos, hogy nálunk a konzultációk teljes mértékben ingyenesek,
              hiszen egy találkozó kulcsfontosságú a hosszútávú
              együttműködéshez.
            </p>
          </div>
        </GlassBox>
      </div>
    </div>
  </section>
</template>

<style scoped>
.idea-box {
  border-radius: 1.25rem;
  background: linear-gradient(
    72deg,
    #000 55.56%,
    #773090 78.62%,
    #c451cf 96.97%,
    #943fe6 116.14%,
    #5e2bff 123.58%
  );
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}

.idea-box-blur {
  z-index: -9999;

  border-radius: 1.25rem;
  background-color: rgba(39, 36, 36, 0.75);
  backdrop-filter: blur(12.5px);
}
</style>
