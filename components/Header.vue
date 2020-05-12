<template>
  <header class="header">
    <h1 class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <main-menu />
  </header>
</template>

<script>
import MainMenu from '@/components/ui/MainMenu';

export default {
  components: {
    'main-menu': MainMenu,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: gray;
  min-height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
}
.header__logo {
  max-width: 340px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  color: black;
}
</style>
