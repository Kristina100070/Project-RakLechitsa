<template>
  <section class="cover__lead">
    <h3 class="lead__title">#РакЛечится</h3>
    <p class="lead__subtitle">О проекте</p>
    <div class="lead__container">
      <p class="lead__container-title">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </p>
      <div class="lead__author-project">
        <p class="lead__author-title">Рак Лечится</p>
        <p class="lead__author-subtitle">Фонд Хабенского</p>
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
  font-size: 4em;
  line-height: 1.2;
  text-transform: uppercase;
}
.lead__subtitle {
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  margin: 70px 60px 0;
}
.lead__container {
  display: flex;
  margin: 32px 60px 100px;
}
.lead__container-title {
  font-weight: normal;
  font-size: 1.125em;
  line-height: 1.2;
  max-width: 340px;
}
.lead__author-title {
  font-weight: 500;
  font-size: 1.125em;
  line-height: 1.2;
}
.lead__author-subtitle {
  font-size: 1.125em;
  line-height: 1.2;
  margin-top: 10px;
}
.lead__paragraph {
  font-size: 1.125em;
  line-height: 1.2;
  color: #dedede;
}
.lead__text {
  display: flex;
  flex-direction: column;
  max-width: 649px;
  margin-left: 40px;
}
.lead__paragraph:last-child {
  margin-top: 10px;
}
.lead__author-project {
  text-align: right;
  margin-left: 90px;
  min-width: 154px;
}
@media screen and (max-width: 1280px) {
  .lead__title {
    font-size: 3.625em;
    line-height: 1.2;
  }
  .lead__subtitle {
    font-size: 1.75em;
    line-height: 1.143;
  }
  .lead__container-title {
    font-size: 1em;
    line-height: 1.25;
  }
}
@media screen and (max-width: 1024px) {
  .lead__title {
    font-size: 3.25em;
    line-height: 1.2;
  }
  .lead__subtitle {
    font-size: 1.5em;
    line-height: 1.167;
  }
  .lead__container-title {
    font-size: 0.8em;
    line-height: 1.231;
  }
  .lead__author-title {
    font-size: 0.882em;
    line-height: 1.267;
  }
  .lead__author-subtitle {
    font-size: 0.882em;
    line-height: 1.267;
  }
  .lead__paragraph {
    font-size: 0.882em;
    line-height: 1.267;
  }
}
@media screen and (max-width: 768px) {
  .lead__title {
    display: none;
  }
  .lead__subtitle {
    font-size: 1.5em;
    line-height: 1.167;
  }
  .lead__container-title {
    font-size: 13px;
    line-height: 16px;
  }
  .lead__author-title {
    font-size: 0.8em;
    line-height: 1.462;
  }
  .lead__author-subtitle {
    font-size: 0.8em;
    line-height: 1.462;
  }
  .lead__paragraph {
    font-size: 0.8em;
    line-height: 1.462;
  }
}
@media screen and (max-width: 320px) {
  .lead__title {
    display: none;
  }
  .lead__subtitle {
    font-size: 1.125em;
    line-height: 1.167;
  }
  .lead__container-title {
    font-size: 0.8em;
    line-height: 1.231;
  }
  .lead__author-title {
    font-size: 0.8em;
    line-height: 1.231;
  }
  .lead__author-subtitle {
    font-size: 0.8em;
    line-height: 1.231;
  }
  .lead__paragraph {
    font-size: 0.938em;
    line-height: 1.267;
  }
}
</style>
