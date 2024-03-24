<template>
  <main class="relative px-3 xxl:container overflow-hidden">
    <CookieConsent />
    <Navbar />
    <Hero
      indicator-text="Ügyfél elégedettség"
      indicator-src="/icons/star-icon.svg"
      indicator-detail="4.8"
      indicator-alt="Star Icon - Jelzi a visszajelzések értékelését ami 4.8"
      span-one="Együtt alkotunk."
      span-two="Együtt szárnyalunk."
      hero-text="Az /tonline /tjelenlét kulcsfontosságú. Képzelj csak el egy olyan /tweboldalt, amely pontosan tükrözi vállalkozásodat. /tÜgyfélbarát hozzáállásunk és a /t100%-os elégedettség elérése érdekében tett elkötelezettségünk tesz minket különlegessé."
    />
    <Services />
    <!-- <Testimonials /> -->
    <Prices />
    <Contact />
  </main>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "hu" },
  title: "Whiz - Együtt szárnyalunk, ügyfeleink sikeréért.",
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
        "Változtasd meg az online jelenlétedet velünk! Kiváló minőségű webfejlesztés és design tervezés mellett pénzügyi tanácsadás is vár rád. Hozd létre a tökéletes digitális élményt és növeld vállalkozásod sikerét egyedülálló szakértelmünk segítségével.",
    },
    {
      name: "keywords",
      content:
        "webfejlesztés, arculattervezés, pénzügyi tanácsadás, kecskemét, kecskemét webfejlesztés, kecskemét arculat tervezés, kecskemét pénzügyi tanácsadás, kecskemét weboldal, weboldal, weboldal készítés, design készítés, arculat készítés , kecskemét webdesign, kecskemét weboldal készítés, kecskemét webdesign készítés, kecskemét pénzügy, kecskemét tanácsadás, pénzügyi terv készítés, kecsemét pénzügyi terv készítés",
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
      content: "Whiz - Együtt szárnyalunk, ügyfeleink sikeréért.",
    },
    {
      property: "og:description",
      content:
        "Változtasd meg az online jelenlétedet velünk! Kiváló minőségű webfejlesztés és design tervezés mellett pénzügyi tanácsadás is vár rád. Hozd létre a tökéletes digitális élményt és növeld vállalkozásod sikerét egyedülálló szakértelmünk segítségével.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.whiz.hu/" },
    { property: "og:locale", content: "hu_HU" },
    { property: "og:image", content: "https://www.whiz.hu/whiz-og-main.png" },
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
