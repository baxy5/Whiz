<template>
  <section id="container">
    <div id="content" :class="customClass">
      <slot> </slot>
    </div>
  </section>
</template>
<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);

defineProps<{
  customClass: string;
}>();

onNuxtReady(async () => {
  let mm = gsap.matchMedia();
  let draggable = Draggable.create("#content", {
    type: "x",
    bounds: "#container",
    edgeResistance: 0.65,
  });

  mm.add("(max-width: 1023px)", () => {
    draggable[0].enable();
  });
  mm.add("(min-width: 1024px)", () => {
    draggable[0].disable();
  });
});
</script>
