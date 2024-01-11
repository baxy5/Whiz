<template>
  <section class="pt-8">
    <div class="flex flex-col gap-4 md:flex-row">
      <Box box-type="dark" custom-class="px-[2.8rem] pt-[2rem] pb-[3rem]">
        <img
          class="w-10 h-10"
          src="/icons/dev-icon.svg"
          alt="Development Icon - Webdevelopment Service"
        />
        <h2
          class="text-white text-[1.125rem] font-bold leading-normal pt-6 pb-[1.3rem]"
        >
          Webfejlesztés
        </h2>
        <p
          class="text-white text-[0.8125rem] leading-normal font-normal pb-[1.8rem]"
        >
          Nem mindennapi weboldalakat készítünk modern, felhasználóbarát és
          letisztult külsővel, kifejezetten az Ön igényeire szabva.
        </p>
        <div
          class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold"
        >
          <a href="/dev">Tudj meg többet</a>
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right - Clickable for know more"
          />
        </div>
      </Box>
      <Box box-type="dark" custom-class="px-[2.8rem] pt-[2rem] pb-[3rem]">
        <img
          class="w-10 h-10"
          src="/icons/design-icon.svg"
          alt="Design Icon - Design Service" />
        <h2
          class="text-white text-[1.125rem] font-bold leading-normal pt-6 pb-[1.3rem]"
        >
          Arculattervezés
        </h2>
        <p
          class="text-white text-[0.8125rem] leading-normal font-normal pb-[1.8rem]"
        >
          Varázsoljuk álmai arculatát valósággá - Megtervezzük vállalkozása
          logóját és arculatát vagy akár arculati kézikönyvét az Ön elképzelései
          alapján.
        </p>
        <div
          class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold"
        >
          <a href="/design">Tudj meg többet</a>
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right - Clickable for know more"
          /></div
      ></Box>
      <Box box-type="fancy" custom-class="px-[2.8rem] pt-[2rem] pb-[3rem]">
        <img
          class="w-10 h-10"
          src="/icons/finance-icon.svg"
          alt="Finance Icon - Finance Service"
        />
        <h2
          class="text-white text-[1.125rem] font-bold leading-normal pt-6 pb-[1.3rem]"
        >
          Pénzügyi tanácsadás
        </h2>
        <p
          class="text-white text-[0.8125rem] leading-normal font-normal pb-[1.8rem]"
        >
          Varázsoljuk álmai arculatát valósággá - Megtervezzük vállalkozása
          logóját és arculatát vagy akár arculati kézikönyvét az Ön elképzelései
          alapján.
        </p>
        <div
          class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold"
        >
          <a href="/finance">Tudj meg többet</a>
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right - Clickable for know more"
          />
        </div>
      </Box>
    </div>
    <div class="mt-4 flex flex-col gap-4 lg:flex-row-reverse">
      <div class="idea-box px-[2.8rem] pt-[2rem] pb-[2rem]">
        <h2
          class="text-white text-[1.125rem] font-bold leading-normal pb-[1.3rem]"
        >
          Van ötlete?
        </h2>
        <p
          class="text-white text-[0.8125rem] font-normal leading-normal pb-[2.2rem]"
        >
          Legyen a kapcsolatunk az első lépés a siker felé! Várjuk hívását vagy
          email-es megkeresését.
        </p>
        <div
          class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold"
        >
          <a href="tel:+36308754438">Hívjon most</a>
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right - Clickable for know more"
          />
        </div>
      </div>
      <Box box-type="dark" custom-class="pt-[2.8rem] pl-[3rem] pr-[2.6rem] pb-[2.3rem]">
        <blockquote
          class="text-white text-[1.25rem] font-normal leading-normal pb-[1.5rem]"
        >
          “Víziónk, hogy az <span class="text-[#5E2BFF]">egyszerűség</span> az
          arany középút a <span class="text-[#5E2BFF]">túl kevés</span> és a
          <span class="text-[#5E2BFF]">túl sok</span> között...”
        </blockquote>
        <p class="text-white text-[1.125rem] font-normal leading-normal text-right">
          ~ Whiz csapat
        </p>
      </Box>
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
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}
</style>
