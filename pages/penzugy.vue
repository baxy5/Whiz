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
  title: "Pénzügyi tanácsadás Kecskemét | Whiz",
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=G-V2KJCV5ZPQ`,
      async: true,
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Fedezze fel a gazdasági siker kulcsait pénzügyi tanácsadásunkkal! Szakértő csapatunk segít az optimális befektetési stratégiák kialakításában és pénzügyi célok elérésében. Teremtse meg jövőjét biztonságos pénzügyi alapokon.",
    },
    {
      name: "keywords",
      content:
        "kecskemet webfejlesztes, kecskemét webfejlsztés, kecskemet weboldal, kecskemét weboldal, kecskemet weboldal keszites, kecskemét weboldal készítés, webfejlesztés, kecskemét webfejlesztés, kecskemét arculattervezés, kecskemét pénzügyi tanácsadás, kecskemét webdesign, kecskemet penzügyi terv keszites, kecskemét pénzügyi terv készítés",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "AUTHORS",
      content: "Whiz",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "theme-color",
      content: "#5e2bff",
    },
    {
      property: "og:title",
      content: "Pénzügyi tanácsadás Kecskemét | Whiz",
    },
    {
      property: "og:description",
      content:
        "Fedezze fel a gazdasági siker kulcsait pénzügyi tanácsadásunkkal! Szakértő csapatunk segít az optimális befektetési stratégiák kialakításában és pénzügyi célok elérésében. Teremtse meg jövőjét biztonságos pénzügyi alapokon.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.whiz.hu/" },
    { property: "og:locale", content: "hu_HU" },
    {
      property: "og:image",
      content: "https://www.whiz.hu/whiz-og-penzugy.png",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16.png",
    },
  ],
});
</script>
