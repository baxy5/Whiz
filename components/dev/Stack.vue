<template>
  <section class="pt-8">
    <div class="md:hidden">
      <div class="px-4">
        <h3 class="title">Mi hiszünk abban, hogy bármi megoldható...</h3>
      </div>
      <div class="relative pb-32">
        <div class="box relative h-full w-max mt-8 px-3 py-4 2sl:px-8">
          <div
            class="absolute top-0 left-0 w-full h-full bg-black opacity-70 rounded-[1.25rem] -z-[9999]"
          ></div>
          <ul>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Egyedi webalkalmazás fejlesztés
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Webdesign és fejlesztés
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Egyedi animációk
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Ecommerce fejlesztés
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Strapi integráció
            </li>
            <li>
              <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
              Reszponzív webfejlesztés
            </li>
          </ul>
        </div>
        <div class="z-[9999] pt-4 pl-20 sl:pl-24 2sl:pl-44">
          <a class="button" href="#contact">Érdekel</a>
        </div>
        <img
          class="strapi-mock -z-[9999] absolute h-auto w-[65rem] -top-24 left-16 sl:left-32 sl:-top-[4.5rem] 2sl:-top-24 2sl:w-[75rem] 2sl:left-56"
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
          <a href="/penzugy">Megnézem</a>
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right - Kattintható, hogy többet megtudj."
          />
        </div>
      </GlassBox>
    </div>
    <div class="hidden relative md:flex md:gap-4 lg:pb-16 xl:pb-44">
      <GlassBox
        custom-class="relative w-[25rem] h-[17rem] px-[2.8rem] pt-[2rem] pb-[2rem] lg:w-[30rem] lg:h-[19rem] xl:w-[45rem] xl:h-full"
      >
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
          <a href="/penzugy">Megnézem</a>
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right - Kattintható, hogy többet megtudj."
          />
        </div>
      </GlassBox>
      <div class="box-big relative w-full col-span-2">
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-90 rounded-[1.25rem] -z-[9999]"
        ></div>
        <h3 class="title-big pb-8">
          Mi hiszünk abban, hogy bármi megoldható...
        </h3>
        <ul>
          <div
            class="lg:flex lg:flex-col lg:gap-8 xl:flex xl:flex-col xl:gap-8"
          >
            <div class="lg:grid lg:gap-8">
              <li>
                <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
                Egyedi webalkalmazás fejlesztés
              </li>
              <li>
                <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
                Webdesign és fejlesztés
              </li>
              <li>
                <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
                Egyedi animációk
              </li>
              <li>
                <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
                Ecommerce fejlesztés
              </li>
            </div>
            <div class="lg:flex lg:flex-col lg:gap-8">
              <li>
                <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
                Strapi integráció
              </li>
              <li>
                <img src="/icons/list-dot.svg" alt="Lista Jelzés Icon" />
                Reszponzív webfejlesztés
              </li>
            </div>
          </div>
        </ul>
      </div>
      <img
        class="strapi-mock -z-[9999] absolute h-auto w-[50rem] top-44 left-0 lg:w-[70rem] lg:top-10 xl:w-[90rem] xl:top-0"
        src="/images/strapi-mock.png"
        alt="Strapi Mock Image"
      />
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
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #5e2bff 0.02%, #b64ccd 75.54%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.button {
  padding: 0.35rem 1.25rem 0.35rem 1.25rem;
  border-radius: 4.375rem;
  border: 1px solid #6d6d6d;
  background: rgba(72, 72, 72, 0.75);
  backdrop-filter: blur(2px);
  color: #fff;
  font-family: "Space Grotesk";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
.button:hover {
  background-color: #5e2bff;
  border: 1px solid #5e2bff;
}
img {
  max-width: none;
}
.title-big {
  font-family: "Space Grotesk";
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #5e2bff 0.02%, #b64ccd 75.54%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.box-big {
  fill: rgba(29, 29, 29, 0.7);
  stroke-width: 1px;
  stroke: #535353;
  backdrop-filter: blur(25px);
  border: 1px solid #535353;
  border-radius: 1.25rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
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
@media only screen and (min-width: 1024px) {
  .title-big {
    font-size: 2.5rem;
  }
}
@media only screen and (min-width: 1440px) {
  .title-big {
    font-size: 3.5rem;
  }
  li {
    font-size: 2rem;
  }
}
</style>
