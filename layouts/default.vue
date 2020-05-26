<template>
  <div class="root">
    <overlay v-if="popupShown" @clickOverlay="closePopup"></overlay>
    <popup v-if="popupShown" @closeClick="closePopup">
      <quiz />
    </popup>

    <mobile-menu v-if="isMobileMenuOpened" class="main-mobile-menu" />
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
import Popup from '@/components/blocks/Popup';
import Quiz from '@/components/blocks/Quiz';
import Overlay from '@/components/ui/Overlay';
import Menu from '@/components/ui/Menu';

export default {
  components: {
    'main-header': Header,
    popup: Popup,
    quiz: Quiz,
    overlay: Overlay,
    'main-footer': Footer,
    'mobile-menu': Menu,
  },
  methods: {
    closePopup() {
      this.$store.commit('popup/togglePopup');
      this.$store.dispatch('quiz/LAST_STEP');
    },
    closePopupLinks() {
      this.$store.commit('popup/togglePopupLinks');
    },
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    popupLinksShown() {
      return this.$store.getters['popup/getPopupLinksShown'];
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
};
</script>

<style>
.root {
  margin: 0, auto;
  font-family: 'Inter', sans-serif;
  font-style: normal;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
@media screen and (max-width: 768px) {
  .main-mobile-menu {
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
