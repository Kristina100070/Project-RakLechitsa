<template>
  <header class="header">
    <h1 class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <main-menu @btnClick="$emit('btnClick')" />
  </header>
</template>

<script>
import Menu from '@/components/ui/Menu';

export default {
  components: {
    'main-menu': Menu,
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
