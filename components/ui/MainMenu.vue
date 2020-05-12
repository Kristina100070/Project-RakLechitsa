<template>
  <div>
    <nav class="menu">
      <menu-link />
      <a href="" class="menu_link">Рассказать историю</a>
    </nav>
  </div>
</template>

<script>
import Menu from '@/components/ui/Menu';

export default {
  components: {
    'menu-link': Menu,
  },
};
</script>

<style scoped>
.menu {
  display: flex;
}
.menu_link {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-right: 60px;
  color: #121212;
  text-decoration: none;
}
</style>
