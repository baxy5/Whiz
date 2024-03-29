<template>
  <main class="px-3 xxl:container overflow-hidden">
    <Navbar />
    <Hero
      indicator-text="Díjmentes tanácsadás"
      indicator-src="/icons/like-icon.svg"
      indicator-alt="Like Icon"
      span-one="Egyedi, utánozhatatlan."
      span-two="Arculattervezés."
      hero-text="Képviseld céged vagy vállalkozásod stílusát /tegyedi /tlogóval és /tarculattal! Vonzd be a figyelmet egy /tkreatív és /tprofesszionális megjelenéssel, amely kiemel a tömegből, és már első pillantásra /tminőséget /tsugároz."
      showcase-image-one-src="/images/varga-logo.png"
      showcase-image-two-src="/images/hok-logo.png"
    />
    <DesignServices />
    <DesignStack />
    <DesignPrices />
    <Contact />
  </main>
</template>
<script setup>
useHead({
  htmlAttrs: { lang: "hu" },
  title: "Arculattervezés, névjegykártya és webdesign Kecskemét | Whiz",
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
        "Egyedi és professzionális arculat tervezés, névjegykártya és webdesign szolgáltatás. Legyen kiemelkedő és emlékezetes már első pillantásra. Szakértő csapatunk segít álmaid vizuális megjelenését valóra váltani. Fedezd fel, hogyan lendülhet fel a vállalkozásod stílusos és hatékony design segítségével.",
    },
    {
      name: "keywords",
      content:
        "kecskemét webfejlesztes, kecskemét webfejlsztés, kecskemet, kecskemet weboldal, kecskemet weboldal keszites ,webfejlesztés, arculattervezés, pénzügyi tanácsadás, kecskemét, kecskemét webfejlesztés, kecskemét arculat tervezés, kecskemét pénzügyi tanácsadás, kecskemét weboldal, weboldal, weboldal készítés, design készítés, arculat készítés , kecskemét webdesign, kecskemét weboldal készítés, kecskemét webdesign készítés, kecskemét pénzügy, kecskemét tanácsadás, pénzügyi terv készítés, kecsemét pénzügyi terv készítés",
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
      content: "Whiz - Arculattervezés",
    },
    {
      property: "og:description",
      content:
        "Egyedi és professzionális arculat tervezés, névjegykártya és webdesign szolgáltatás. Legyen kiemelkedő és emlékezetes már első pillantásra. Szakértő csapatunk segít álmaid vizuális megjelenését valóra váltani. Fedezd fel, hogyan lendülhet fel a vállalkozásod stílusos és hatékony design segítségével.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.whiz.hu/" },
    { property: "og:locale", content: "hu_HU" },
    { property: "og:image", content: "https://www.whiz.hu/whiz-og-design.png" },
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
