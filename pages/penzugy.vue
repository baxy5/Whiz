<template>
  <main class="px-3 xxl:container overflow-hidden">
    <Navbar />
    <Hero
      indicator-text="Ingyenes konzultáció"
      indicator-src="/icons/paper-icon.svg"
      indicator-alt="Paper Icon"
      span-one="Biztonság, tudatosság."
      span-two="Pénzügyi tanácsadás."
      hero-text="Innovatív /tpénzügyi /tstratégiákkal és /tszemélyre /tszabott /ttanácsokkal segítünk a sikeres megtakarítások és /tkölcsönök elérésében. Legyen a pénzügyi jövőd /telőre /tmegtervezett és /tkiegyensúlyozott, hogy nyugodtan élvezhesd a jelen pillanatait, miközben felkészülsz a /tjövő /tlépéseire."
    />
    <FinanceServices />
    <FinanceStack />
    <Contact />
  </main>
</template>
<script setup>
useHead({
  htmlAttrs: { lang: "hu" },
  title: "Whiz - Együtt szárnyalunk. Ügyfeleink sikeréért.",
  meta: [
    {
      name: "description",
      content:
        "Fedezze fel a gazdasági siker kulcsait pénzügyi tanácsadásunkkal! Szakértő csapatunk segít az optimális befektetési stratégiák kialakításában és pénzügyi célok elérésében. Teremtse meg jövőjét biztonságos pénzügyi alapokon.",
    },
    {
      property: "og:title",
      content: "Whiz - Együtt szárnyalunk. Ügyfeleink sikeréért.",
    },
    {
      property: "og:description",
      content:
        "Fedezze fel a gazdasági siker kulcsait pénzügyi tanácsadásunkkal! Szakértő csapatunk segít az optimális befektetési stratégiák kialakításában és pénzügyi célok elérésében. Teremtse meg jövőjét biztonságos pénzügyi alapokon.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.whiz.hu/" },
    { property: "og:locale", content: "hu_HU" },
    { property: "og:image", content: "https://www.whiz.hu/whiz-logo.png" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/whiz-logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/whiz-logo.png",
    },
  ],
});
</script>
