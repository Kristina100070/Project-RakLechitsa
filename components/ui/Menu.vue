<template>
  <div>
    <nav class="menu">
      <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
      <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
      <nxt-button v-if="show" @btnClick="showPopup" className="button_menu">
        {{ text }}</nxt-button
      >
    </nav>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-button': Button,
  },
  data() {
    return {
      text: 'Рассказать историю',
      show: true,
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
  width: 100%;
  display: flex;
  align-items: center;
}
.menu__link {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-right: 40px;
  color: #121212;
  text-decoration: none;
}
.nuxt-link-exact-active {
  text-decoration: underline;
}
@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
    margin-right: 30px;
  }
}
@media screen and (max-width: 768px) {
  .menu {
    margin: 18px 50px;
  }
  .menu__link {
    font-size: 16px;
    line-height: 24px;
    margin-right: 30px;
  }
}
@media screen and (max-width: 320px) {
  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .menu__link {
    font-size: 13px;
    line-height: 16px;
    margin: 18px 15px;
  }
}
</style>
