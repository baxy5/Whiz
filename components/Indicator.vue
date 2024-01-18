<template>
  <div class="indicator">
    <slot></slot>
  </div>
</template>

<style scoped>
.indicator {
  width: 14rem;
  padding: 0.6rem 0.6rem 0.6rem 0.6rem;

  color: #fff;
  font-size: 0.725rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-radius: 4.375rem;
  border: 1px solid #545353;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12.5px);
}

@media only screen and (min-width: 1024px) {
  .indicator {
    width: 17rem;
    font-size: 0.85rem;
  }
}
@media only screen and (min-width: 1440px) {
  .indicator {
    width: 19rem;
    font-size: 1rem;
  }
}
</style>
