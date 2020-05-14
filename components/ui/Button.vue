<template>
  <button @click="$emit('btnClick')" :class="['button', className]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    className: String,
  },
};
</script>

<style scoped>
.button {
  width: 226px;
  height: 52px;
  background: #613a93;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  border: 0;
}
.button_menu {
  width: 222px;
  height: 54px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  background-color: transparent;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.button_section {
  width: 280px;
}
</style>
