<template>
  <button
    @click="$emit('btnClick')"
    :class="['button', className, { button_disabled: disabled }]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    className: String,
    disabled: Boolean,
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
.button:hover {
  cursor: pointer;
}
.button_menu {
  min-width: 188px;
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
.button_disabled {
  background: grey;
}
@media screen and (max-width: 1439px) {
  .button {
    width: 200px;
    height: 48px;
  }
}
@media screen and (max-width: 1279px) {
  .button {
    width: 200px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
  .button_menu {
    font-size: 16px;
  }
}

@media screen and (max-width: 1034px) {
}
@media screen and (max-width: 767px) {
  .button {
    width: 206px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
