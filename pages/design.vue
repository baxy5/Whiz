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
  title: "Whiz - Együtt szárnyalunk. Ügyfeleink sikeréért.",
  meta: [
    {
      name: "description",
      content:
        "Egyedi és professzionális arculat tervezés, névjegykártya és webdesign szolgáltatás. Legyen kiemelkedő és emlékezetes már első pillantásra. Szakértő csapatunk segít álmaid vizuális megjelenését valóra váltani. Fedezd fel, hogyan lendülhet fel a vállalkozásod stílusos és hatékony design segítségével.",
    },
    {
      property: "og:title",
      content: "Whiz - Együtt szárnyalunk. Ügyfeleink sikeréért.",
    },
    {
      property: "og:description",
      content:
        "Egyedi és professzionális arculat tervezés, névjegykártya és webdesign szolgáltatás. Legyen kiemelkedő és emlékezetes már első pillantásra. Szakértő csapatunk segít álmaid vizuális megjelenését valóra váltani. Fedezd fel, hogyan lendülhet fel a vállalkozásod stílusos és hatékony design segítségével.",
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
