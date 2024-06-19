<template>
  <nav class="h-full w-full relative">
    <div class="nav-icon relative lg:hidden">
      <img
        @click="handleClick"
        src="/icons/menu-icon.svg"
        alt="Menu Icon - Clickable"
      />
      <div class="navbar-mobile-container" v-if="isOpen">
        <div class="navbar-mobile">
          <a href="/" class="flex">
            <img src="/icons/whiz-logo.svg" alt="Whiz Company's Logo" />
          </a>
          <ul>
            <li>
              <a href="/">Főoldal</a>
            </li>
            <li>
              <a href="/dev">Web</a>
            </li>
            <li>
              <a href="/design">Design</a>
            </li>
            <li>
              <a href="/penzugy">Pénzügy</a>
            </li>
            <li v-if="pricesHref">
              <a :href="pricesHref">Árak</a>
            </li>
            <Button anchorHref="#contact">Kapcsolat</Button>
          </ul>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex justify-center">
      <div class="navbar-desktop">
        <a href="/" class="flex">
          <img src="/icons/whiz-logo.svg" alt="Whiz Company's Logo" />
        </a>
        <ul>
          <li>
            <a href="/">Főoldal</a>
          </li>
          <li>
            <a href="/dev">Web</a>
          </li>
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/penzugy">Pénzügy</a>
          </li>
          <li v-if="pricesHref">
            <a :href="pricesHref">Árak</a>
          </li>
          <Button anchorHref="#contact">Kapcsolat</Button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps<{
  pricesHref?: string;
}>();

const isOpen = ref(false);
function handleClick() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.navbar-mobile {
  width: 11rem;
  height: 100%;

  border-radius: 0.625rem;
  background-color: rgba(39, 36, 36, 0.75);
  backdrop-filter: blur(12.5px);

  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0 1rem 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
}
.navbar-mobile-container {
  position: absolute;
  z-index: 9999;
  top: 50px;
  right: 0;
}

.nav-icon {
  position: fixed;
  z-index: 9999;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.25rem;
  cursor: pointer;

  border-radius: 0.625rem;
  background-color: rgba(39, 36, 36, 0.75);
  backdrop-filter: blur(12.5px);
}

.navbar-desktop {
  max-width: 100%;
  position: fixed;
  top: 1.5rem;
  z-index: 9999;

  display: flex;
  justify-content: space-evenly;
  gap: 2.5rem;
  align-content: center;
  padding: 0.75rem 1.5rem;

  border-radius: 4.375rem;
  border: 1px solid #545353;
  background: rgba(39, 36, 36, 0.75);
  backdrop-filter: blur(12.5px);

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }
}

a {
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  transition: all 0.1s ease-in-out;
}

a:active {
  color: #5e2bff;
}
a:focus {
  color: #5e2bff;
}

@media only screen and (min-width: 1024px) {
  a:hover {
    color: #5e2bff;
  }
}
</style>
