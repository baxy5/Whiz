<template>
  <section class="pt-8">
    <div>
      <div class="px-4">
        <h3 class="title">Mi hiszünk abban, hogy bármi megoldható...</h3>
      </div>
      <div class="relative pb-24">
        <div class="box h-full w-max mt-8 px-2 py-4 2sl:px-8">
          <ul>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Egyedi Web App Fejlesztés
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Webdesign és Fejlesztés
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Egyedi animációk
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Ecommerce Fejlesztés
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Egyedi CMS
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Reszponzív webfejlesztés
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              SEO
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Google Tag Manager
            </li>
          </ul>
        </div>
        <div class="pt-4 pl-14 sl:pl-24 2sl:pl-36">
          <a class="button" href="#contact">Érdekel</a>
        </div>
        <img
          class="strapi-mock absolute h-auto w-[65rem] -top-24 sl:left-24 sl:-top-16 2sl:-top-24 2sl:w-[75rem] 2sl:left-44"
          src="/images/strapi-mock.png"
          alt="Strapi Mock Image"
        />
      </div>
      <GlassBox custom-class="relative px-[2.8rem] pt-[2rem] pb-[2rem]">
        <h2
          class="text-white text-[1.125rem] font-bold leading-normal pb-[1.3rem] md:text-[1.25rem] lg:text-[1.5rem]"
        >
          Weboldal hitelre?
        </h2>
        <p
          class="text-white text-[0.8125rem] font-normal leading-normal pb-[2.2rem] md:text-[0.9rem] lg:text-[1rem]"
        >
          Pénzügyi tanácsadóink a legkedvezőbb feltételek mellett tudnak
          támogatni weboldalad, céged vagy vállalkozásod létrjöttében.
        </p>
        <div
          class="flex gap-2 items-center text-white text-[0.875rem] leading-normal font-bold lg:text-[1rem]"
        >
          <a href="tel:+36308754438">Megnézem</a>
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right - Kattintható, hogy többet megtudj."
          />
        </div>
      </GlassBox>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-family: "Space Grotesk";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #5e2bff 0.02%, #b64ccd 75.54%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.box {
  fill: rgba(29, 29, 29, 0.7);
  stroke-width: 1px;
  stroke: #535353;
  backdrop-filter: blur(25px);
  border: 2px solid #535353;
  border-radius: 20px;
}
ul {
  display: grid;
  gap: 1.5rem;
}
li {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;

  font-family: "Space Grotesk";
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #5e2bff 0.02%, #b64ccd 75.54%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.button {
  padding: 0.25rem 1.25rem 0.25rem 1.25rem;
  border-radius: 4.375rem;
  border: 1px solid #6d6d6d;
  background: rgba(72, 72, 72, 0.75);
  backdrop-filter: blur(2px);
  color: #fff;
  font-family: "Space Grotesk";
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
img {
  max-width: none;
}
@media only screen and (min-width: 414px) {
  .title {
    font-size: 2rem;
  }
  li {
    font-size: 1.125rem;
  }
}
@media only screen and (min-width: 568px) {
  .title {
    font-size: 2.5rem;
  }
  li {
    font-size: 1.5rem;
  }
}
</style>
