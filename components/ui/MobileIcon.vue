<template>
  <div>
    <div
      :class="[
        'mobile-icon-menu',
        { 'mobile-button_type_close': isMenuOpened },
      ]"
      @click="toggleMobile"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.mobile-icon-menu {
  width: 32px;
  height: 32px;
  background-size: cover;
  background-image: url('../../static/images/icons8-меню.svg');
}
.mobile-button_type_close {
  width: 32px;
  height: 32px;
  background-image: url('../../static/images/close_image.svg');
}
</style>
