<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    currentValue: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.currentValue / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  max-width: 260px;
  height: 40px;
  background: #f4f4f4;
  position: relative;
}
.progress-bar__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #613a93;
}
@media screen and (max-width: 1280px) {
  .progress-bar {
    max-width: 229px;
    height: 35px;
  }
}
@media screen and (max-width: 1024px) {
  .progress-bar {
    max-width: 188px;
    height: 28px;
  }
}
@media screen and (max-width: 768px) {
  .progress-bar {
    max-width: 196px;
    height: 28px;
  }
}
</style>
