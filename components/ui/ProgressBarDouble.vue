<template>
  <div class="progress-bar-double">
    <div class="progress-bar-double__old">
      <div class="progress-bar-double__fill" :style="styleOld"></div>
    </div>
    <div class="progress-bar-double__new">
      <div
        class="progress-bar-double__fill progress-bar-double__fill_violet"
        :style="styleNew"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    oldValue: Number,
    currentValue: Number,
    maxValue: Number,
  },
  computed: {
    styleOld() {
      return `width: ${(this.oldValue / this.maxValue) * 100}%;`;
    },
    styleNew() {
      return `width: ${(this.newValue / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar-double {
  max-width: 260px;
  height: 40px;
  position: relative;
}
.progress-bar-double__old,
.progress-bar-double__new {
  background: transparent;
  position: relative;
  height: 50%;
}
.progress-bar-double__fill {
  background: #f4f4f4;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
.progress-bar-double__fill_violet {
  background: #613a93;
}
@media screen and (max-width: 1280px) {
  .progress-bar-double {
    max-width: 229px;
    height: 35px;
  }
}
@media screen and (max-width: 1024px) {
  .progress-bar-double {
    max-width: 188px;
    height: 28px;
  }
}
@media screen and (max-width: 768px) {
  .progress-bar-double {
    max-width: 196px;
    height: 28px;
  }
}
</style>
