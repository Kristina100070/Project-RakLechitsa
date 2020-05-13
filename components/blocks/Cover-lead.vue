<template>
  <section class="cover__lead">
    <h3 class="lead__title">#РакЛечится</h3>
    <p class="lead__subtitle">О проекте</p>
    <div class="lead__container">
      <p class="lead__paragraph lead__paragraph_about-project">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </p>
      <div class="lead__author-project">
        <p class="lead__paragraph lead__paragraph_name-project">Рак Лечится</p>
        <p class="lead__paragraph">Фонд Хабенского</p>
      </div>
      <div class="lead__text">
        <p class="lead__paragraph">
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак.
        </p>
        <p class="lead__paragraph">
          Рак лечится — проект Благотворительного Фонда Константина Хабенского и
          Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей
          к раку и заставить каждого поверить: онкологическое заболевание — это
          не приговор.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cover__lead {
  display: flex;
  flex-direction: column;
  background-color: #613a93;
  color: #ffffff;
}

.lead__title {
  margin: 90px auto 0;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
}

.lead__container {
  display: flex;
  margin: 32px 60px 100px;
}

.lead__paragraph {
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.lead__paragraph_about-project {
  max-width: 268px;
}

.lead__paragraph_name-project {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.lead__subtitle {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 70px 60px 0;
}

.lead__text {
  display: flex;
  flex-direction: column;
  max-width: 649px;
  margin-left: 40px;
}

.lead__paragraph:last-child {
  padding-top: 10px;
}

.lead__author-project {
  min-width: 160px;
  text-align: right;
  margin-left: 210px;
}
</style>
