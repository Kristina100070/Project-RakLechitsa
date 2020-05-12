<template>
  <div class="root">
    <overlay v-if="PopupShown" @clickOverlay="PopupHandler"></overlay>
    <popup v-if="PopupShown" @closeClick="PopupHandler">
      <quiz></quiz>
    </popup>
    <main-header @btnClick="PopupHandler" />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/blocks/Popup';
import Quiz from '@/components/blocks/Quiz';
import Overlay from '@/components/ui/Overlay';
export default {
  components: {
    'main-header': Header,
    popup: Popup,
    quiz: Quiz,
    overlay: Overlay,
    'main-footer': Footer,
  },
  methods: {
    PopupHandler() {
      this.PopupShown = !this.PopupShown;
    },
  },
  data() {
    return {
      PopupShown: false,
    };
  },
};
</script>
<style>
.root {
  max-width: 1440px;
  margin: auto;
  font-family: 'Inter', sans-serif;
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
</style>
