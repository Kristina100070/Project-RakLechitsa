<template>
  <section class="social-network">
    <div class="social-network__content">
      <h2 class="social-network__title">Инстаграм</h2>
      <p class="social-network__subtitle">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <div class="social-network__container">
      <div class="social-network__image"></div>
      <div class="social-network__image"></div>
      <div class="social-network__image"></div>
      <div class="social-network__image"></div>
      <div class="social-network__image"></div>
      <div class="social-network__image"></div>
      <div class="social-network__image"></div>
      <div class="social-network__image"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.social-network {
  padding: 100px 60px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 110px;
}

.social-network__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-decoration-line: underline;
}

.social-network__subtitle {
  padding-top: 32px;
  font-size: 18px;
  line-height: 22px;
  min-width: 345px;
  color: #666666;
}

.social-network__container {
  display: grid;
  grid-template-columns: 195px 195px 195px 195px;
  gap: 30px;
}

.social-network__image {
  background-color: #f7f7f7;
  width: 195px;
  height: 195px;
}
</style>
