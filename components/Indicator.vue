<template>
  <div class="indicator">
    <slot></slot>
  </div>
</template>

<style scoped>
.indicator {
  width: 11rem;

  padding: 0.4rem 0.6rem 0.4rem 0.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
</style>
