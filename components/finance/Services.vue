<template>
  <section class="pt-8">
    <Carousel custom-class="min-w-min flex gap-4 lg:grid lg:grid-cols-2">
      <div class="w-[20rem] sl:w-[23rem] md:w-[25rem] lg:w-full">
        <InfoBox
          box-type="dark"
          image-src="/icons/vallalkozoi-service.svg"
          image-alt="Vállalkozói tanácsadás"
          title="Vállalkozói tanácsadás"
          desc="Mentorként állunk melletted, hogy optimalizált stratégiákkal és személyre szabott tanácsokkal segítsünk a siker felé vezető úton. Szakértői iránymutatásokkal támogatunk, hogy az elkövetkező kihívásokat magabiztosan tudd kezelni."
          add-text="Kapcsolat"
          add-href="#contact"
        />
      </div>
      <div class="w-[20rem] sl:w-[23rem] md:w-[25rem] lg:w-full">
        <InfoBox
          box-type="dark"
          image-src="/icons/hitel-service.svg"
          image-alt="Hitelügyintézés"
          title="Hitelügyintézés"
          desc="Gyors és megbízható hitelügyintézés szolgáltatásunkkal könnyedén elérheted pénzügyi céljaidat. Tapasztalt csapatunk segít és gyorsan lebonyolítja az ügyintézést, hogy Te minél előbb élhess a szükséges pénzügyi támogatással."
          add-text="Kapcsolat"
          add-href="#contact"
        />
      </div>
      <div class="w-[20rem] sl:w-[23rem] md:w-[25rem] lg:w-full">
        <InfoBox
          box-type="fancy"
          image-src="/icons/befektetes-service.svg"
          image-alt="Befektetési tanácsadás"
          title="Befektetési tanácsadás"
          desc="Maximalizáld befektetéseid potenciálját. Befektetési tanácsadásunk segít a legmegfelelőbb portfólió kialakításában, optimalizálva a hozamokat, és biztosítva a pénzügyi célok elérését. Engedd, hogy szakembereink vezessenek a sikeres befektetési stratégiák világába!"
          add-text="Kapcsolat"
          add-href="#contact"
        />
      </div>
      <div class="w-[20rem] sl:w-[23rem] md:w-[25rem] lg:w-full">
        <InfoBox
          box-type="fancy"
          image-src="/icons/palyazat-service.svg"
          image-alt="Pályázatírás"
          title="Pályázatírás"
          desc="Velünk a lehetőségeid határtalanok! Segítünk megtervezni és megvalósítani a sikeres pályázati stratégiákat, biztosítva, hogy vállalkozásodhoz vagy projektjeidhez szükséges támogatást elnyerd. Bízd ránk a pályázatírás terhét!"
          add-text="Kapcsolat"
          add-href="#contact"
        />
      </div>
      <div class="w-[20rem] sl:w-[23rem] md:w-[25rem] lg:w-full">
        <InfoBox
          box-type="dark"
          image-src="/icons/biztositas-service.svg"
          image-alt="Biztosítások"
          title="Biztosítások"
          desc="Védjük, ami fontos számodra! Személyre szabott biztosítási megoldásainkkal garantáljuk, hogy életed fontos területei és értékeid mindig biztonságban legyenek. Legyen szó egészségről, vagyonról vagy jövőtervezésről, mi megtaláljuk a megoldást."
          add-text="Kapcsolat"
          add-href="#contact"
        />
      </div>
      <div class="hidden lg:grid gap-4">
        <GlassBox
          custom-class="relative px-[2.8rem] pt-[2rem] pb-[2rem] lg:order-2"
        >
          <h2
            class="text-white text-[1.125rem] font-bold leading-normal pb-[1.3rem] md:text-[1.25rem] lg:text-[1.5rem]"
          >
            Érdekel?
          </h2>
          <p
            class="text-white text-[0.8125rem] font-normal leading-normal pb-[2.2rem] md:text-[0.9rem] lg:text-[1rem]"
          >
            Egy telefonos konzultáció nagyban elő tudja segíteni az
            elképzeléseid megértését számunkra. Hívj minket most és tegyük meg
            az első lépéseket.
          </p>
          <div
            class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold lg:text-[1rem]"
          >
            <a href="tel:+36302296231">Hívjon most</a>
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
    </Carousel>
    <div class="lg:hidden pt-4 grid gap-4">
      <GlassBox
        custom-class="relative px-[2.8rem] pt-[2rem] pb-[2rem] lg:order-2"
      >
        <h2
          class="text-white text-[1.125rem] font-bold leading-normal pb-[1.3rem] md:text-[1.25rem] lg:text-[1.5rem]"
        >
          Érdekel?
        </h2>
        <p
          class="text-white text-[0.8125rem] font-normal leading-normal pb-[2.2rem] md:text-[0.9rem] lg:text-[1rem]"
        >
          Egy telefonos konzultáció nagyban elő tudja segíteni az elképzeléseid
          megértését számunkra. Hívj minket most és tegyük meg az első
          lépéseket.
        </p>
        <div
          class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold lg:text-[1rem]"
        >
          <a href="tel:+36302296231">Hívjon most</a>
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
            hiszen egy találkozó kulcsfontosságú a hosszútávú együttműködéshez.
          </p>
        </div>
      </GlassBox>
    </div>
  </section>
</template>
<script>
export default {};
</script>
