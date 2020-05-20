<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
    <button @btnClick="$emit('btnClick')" className="button_menu">
      рассказать историю
    </button>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    button: Button,
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopUp');
    },
  },
};
</script>

<style scoped>
.menu {
  background-color: yellow;
}
.menu__link {
  margin-right: 20px;
}
</style>
