<template>
  <header class="header">
    <h1 class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <main-menu @btnClick="$emit('btnClick')" class="header__menu" />
    <mobile-icon class="header__mobile-icon" />
  </header>
</template>

<script>
import Container from '@/components/blocks/Container.vue';
import MobileIcon from '@/components/ui/MobileIcon.vue';
import Menu from '@/components/ui/Menu';
export default {
  components: {
    container: Container,
    'mobile-icon': MobileIcon,
    'main-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  max-width: 1440px;
  min-height: 76px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  margin: 0 auto;
}
.header__logo {
  max-width: 340px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
}
.header__menu {
  font-size: 16px;
  line-height: 20px;
  color: black;
}
.header__mobile-icon {
  display: none;
}
@media screen and (max-width: 1280px) {
  .header {
    padding: 0 50px;
  }
  .header__logo {
    line-height: 18px;
  }
}
@media screen and (max-width: 1024px) {
  .header {
    padding: 0 40px;
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
  .header {
    padding: 0 15px;
  }
  .header__logo {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
