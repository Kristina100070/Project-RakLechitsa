<template>
  <div>
    <nav class="menu">
      <link-menu />
      <nxt-button @btnClick="showPopup" className="button_menu">
        {{ text }}</nxt-button
      >
    </nav>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import LinkMenu from '@/components/ui/LinkMenu';
export default {
  components: {
    'nxt-button': Button,
    'link-menu': LinkMenu,
  },
  data() {
    return {
      text: 'Рассказать историю',
    };
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
}
</style>
