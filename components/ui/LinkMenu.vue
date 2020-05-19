<template>
  <div>
    <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
</style>
