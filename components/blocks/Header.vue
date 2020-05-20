<template>
  <container>
    <header class="header">
      <h1 class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </h1>
      <main-menu @btnClick="$emit('btnClick')" class="header__menu" />
      <mobile-icon class="header__mobile-icon" />
    </header>
  </container>
</template>

<script>
import Menu from '@/components/ui/Menu';
import Container from '@/components/blocks/Container.vue';
import MobileIcon from '@/components/ui/MobileIcon.vue';

export default {
  components: {
    'main-menu': Menu,
    container: Container,
    'mobile-icon': MobileIcon,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  max-width: 340px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
}
.header__mobile-icon {
  display: none;
}
@media screen and (max-width: 1280px) {
  .header__logo {
    line-height: 18px;
  }
}
@media screen and (max-width: 768px) {
  .header__logo {
    font-size: 16px;
  }
  .header__mobile-icon {
    display: block;
  }
  .header__menu {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  .header__logo {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
