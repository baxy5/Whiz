<template>
  <section class="pt-8">
    <div class="h-full grid gap-4 md:grid-cols-3">
      <ClientOnly>
        <InfoBox
          box-type="dark"
          image-src="/icons/dev-icon.svg"
          image-alt="Fejlesztési Icon - Webfejlesztés Szolgáltatás"
          title="Webfejlesztés"
          desc="Modern, felhasználóbarát és lenyűgöző weboldalakat tervezünk, amelyek pontosan tükrözik vállalkozásod egyediségét és igényeit."
          add-text="Tudj meg többet"
          add-href="/dev"
        />
        <InfoBox
          box-type="dark"
          image-src="/icons/design-icon.svg"
          image-alt="Design Icon - Design Szolgáltatás"
          title="Arculattervezés"
          desc="Varázsoljuk álmai arculatát valósággá - Megtervezzük vállalkozása
          logóját és arculatát vagy akár arculati kézikönyvét az Ön elképzelései
          alapján."
          add-text="Tudj meg többet"
          add-href="/design"
        />
        <InfoBox
          box-type="fancy"
          image-src="/icons/finance-icon.svg"
          image-alt="Pénzügy Icon - Pénzügyi Szolgáltatás"
          title="Pénzügyi tanácsadás"
          desc="Álmaink megvalósításához útmutatásra van szükség. A pénzügyi jövőt építeni olykor kihívásokkal teli út. Mi itt vagyunk, hogy segítsünk. Lépjen előre az anyagi biztonság és a céljai felé vezető úton."
          add-text="Tudj meg többet"
          add-href="/finance"
        />
      </ClientOnly>
    </div>
    <div class="mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-3">
      <GlassBox
        custom-class="relative px-[2.8rem] pt-[2rem] pb-[2rem] lg:order-2"
      >
        <h2
          class="text-white text-[1.125rem] font-bold leading-normal pb-[1.3rem] md:text-[1.25rem] lg:text-[1.5rem]"
        >
          Van ötleted?
        </h2>
        <p
          class="text-white text-[0.8125rem] font-normal leading-normal pb-[2.2rem] md:text-[0.9rem] lg:text-[1rem]"
        >
          Lépj velünk kapcsolatba, és együtt valóra váltjuk! Várjuk hívásodat
          vagy email-edet.
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
      <Box
        box-type="dark"
        custom-class="pt-[2.8rem] pl-[3rem] pr-[2.6rem] pb-[2.3rem] lg:order-1 lg:col-span-2"
      >
        <blockquote
          class="text-white text-[1.25rem] font-normal leading-normal pb-[1.5rem] lg:text-[2rem] xl:text-[3rem]"
        >
          “Víziónk, hogy az <span class="text-[#5E2BFF]">egyszerűség</span> az
          arany középút a <span class="text-[#5E2BFF]">túl kevés</span> és a
          <span class="text-[#5E2BFF]">túl sok</span> között...”
        </blockquote>
        <p
          class="text-white text-[1.125rem] font-normal leading-normal text-right lg:text-[1.5rem]"
        >
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
