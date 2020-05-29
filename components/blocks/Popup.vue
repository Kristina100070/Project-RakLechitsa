<template>
  <div class="popup">
    <img
      @click="$emit('closeClick')"
      src="/images/close_image.svg"
      alt="close"
      class="popup__close"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 920px;
  border: none;
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  z-index: 2;
}

.popup__close {
  position: absolute;
  top: 43px;
  right: 43px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background: center;
  cursor: pointer;
  z-index: 2;
}
@media screen and (max-width: 767px) {
  .popup {
    padding: 15px;
  }
  .popup__close {
    top: 15px;
    right: 15px;
    width: 17.36px;
    height: 17.36px;
  }
}
</style>
