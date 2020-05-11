<template>
  <section class="your-story">
    <div class="your-story__main-info">
      <h2 class="your-story__title">Расскажите свою историю</h2>
      <p class="your-story__subtitle">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </p>
    </div>
    <div class="your-story__form">
      <div class="form__variants">
        <p class="form__variant">1-й вариант</p>
        <p class="form__variant">2-й вариант</p>
      </div>
      <p class="form__info">
        Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
      </p>
      <button class="form__button">Заполнить форму</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.your-story {
  padding: 100px 60px;
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 185px;
}

.your-story__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
}

.your-story__subtitle {
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  padding: 32px 0 0 35px;
  max-width: 372px;
}

.your-story__form {
  display: grid;
  grid-template-columns: 120px 580px;
  grid-column-gap: 30px;
  padding-top: 104px;
  grid-row-gap: 78px;
}

.form__variants {
  grid-row-start: 1;
  grid-row-end: 3;
}

.form__variant {
  font-size: 18px;
  line-height: 22px;
  padding-top: 10px;
}

.form__variant:first-child {
  padding: 0;
}
</style>
