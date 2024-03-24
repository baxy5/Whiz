<template>
  <main class="px-3 xxl:container overflow-hidden">
    <Navbar />
    <Hero
      indicator-text="Ingyenes személyes konzultáció"
      indicator-src="/icons/check-icon.svg"
      indicator-alt="Check Icon"
      span-one="Egyedülálló, stílusos."
      span-two="Webfejlesztés."
      hero-text="Legyen a /tweboldalad a /tsikered /tkulcsa! Professzionális webfejlesztésünk a brandedet emeli ki az online zajból, és /tsegít /ta /tcéljaid /telérésében.  "
      showcase-image-one-src="/images/eniranyitok-mock.png"
      showcase-image-two-src="/images/ani-mock.png"
      showcase-image-three-src="/images/doodle-mock.png"
    />
    <DevServices />
    <DevResponsivity />
    <DevStack />
    <Contact />
  </main>
</template>
<script setup>
useHead({
  htmlAttrs: { lang: "hu" },
  title: "Whiz - Webfejlesztés",
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
        "Webfejlesztésben mi nem csak technológiát, hanem varázslatot is alkalmazunk. Modern eszközeinkkel és egyedi megközelítésünkkel nem csak weboldalt hozunk létre, hanem egy élményt, ami magával ragadja és lenyűgözi látogatóit. Gyors, látványos és intuitív - web, az Ön elképzelése szerint.",
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
      content: "Whiz - Webfejlesztés",
    },
    {
      property: "og:description",
      content:
        "Webfejlesztésben mi nem csak technológiát, hanem varázslatot is alkalmazunk. Modern eszközeinkkel és egyedi megközelítésünkkel nem csak weboldalt hozunk létre, hanem egy élményt, ami magával ragadja és lenyűgözi látogatóit. Gyors, látványos és intuitív - web, az Ön elképzelése szerint.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.whiz.hu/" },
    { property: "og:locale", content: "hu_HU" },
    { property: "og:image", content: "https://www.whiz.hu/whiz-og-dev.png" },
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
