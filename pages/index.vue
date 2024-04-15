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
  title: "Kecskemét Weboldal Készítés | Arculattervezés | Pénzügyi tanácsadás",
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
        "Weboldal készítés Kecskemét - Kiemelkedő webfejlesztési, arculattervezési és pénzügyi tanácsadás szolgáltatásokat nyújtunk. Növelje online jelenlétét szakértelmünkkel. Lépjen velünk kapcsolatba még ma!",
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
      content:
        "Kecskemét Weboldal Készítés | Arculattervezés | Pénzügyi tanácsadás",
    },
    {
      property: "og:description",
      content:
        "Weboldal készítés Kecskemét - Kiemelkedő webfejlesztési, arculattervezési és pénzügyi tanácsadás szolgáltatásokat nyújtunk. Növelje online jelenlétét szakértelmünkkel. Lépjen velünk kapcsolatba még ma!",
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
