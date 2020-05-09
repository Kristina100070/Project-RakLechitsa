<template>
  <div class="container">
    <main class="content">
      <lead class="content__lead" />

      <description class="content__description" />

      <rectangle class="content__rectangle" />

      <stories class="content__stories" />

      <section class="rectangle content__rectangle">
        <h2 class="rectangle__title">
          Рассказывайте ваши истории в инстаграмм #Этонелечится
        </h2>
      </section>

      <section class="social-network content__social-network">
        <h2 class="social-network__title">Инстаграм</h2>
        <p class="social-network__subtitle">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
        <img class="social0network__image" />
      </section>

      <section class="your-story content__your-story">
        <div class="two-columns">
          <div class="two-columns__main-info">
            <h2 class="two-columns__title">Расскажите свою историю</h2>
            <p class="two-columns__subtitle">
              Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
              поделиться своей историей неизлечимых привычек, навязчивых идей и
              болезненных привязанностей.
            </p>
          </div>

          <div class="two-columns__form">
            <p class="form__variant">1-й вариант</p>
            <p class="form__variant">2-й вариант</p>
            <p class="form__info">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </p>
            <button class="form__button">Заполнить форму</button>
          </div>
        </div>
      </section>

      <section class="statistics content__statistics">
        <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
        <div class="statistics-card">
          <h2 class="statistics-card__title"></h2>
          <img class="statistics-card__image" />
          <p class="statistics-card__info"></p>
          <p class="statistics-card__source"></p>
        </div>
      </section>

      <section class="cover content__cover">
        <h2 class="cover__title">#Раклечится</h2>
        <div class="cover__about">
          <div class="cover__heading">
            <h2 class="cover__text-title">О проекте</h2>
            <p class="cover__text-subtitle">
              Этот проект был создан благотворительным фондом Константина
              Хабенского.
            </p>
          </div>

          <div class="cover__lead">
            <h3 class="cover__lead-title">Рак Лечится</h3>
            <p class="cover__lead-subtitle">Фонд Хабенского</p>
            <div class="cover__lead-text">
              <p class="cover__lead-paragraph">
                Есть вещи, которые не лечатся. Особенности характера, страстные
                увлечения, привычки, ставшие частью нашего «я», фобии, которые
                мы приобрели в детстве. Список можно продолжать до
                бесконечности, но одна болезнь в него точно не войдет. Эта
                болезнь — рак. Рак лечится, и лучшее доказательство — люди с их
                неизлечимыми особенностями, которые сумели победить рак.
              </p>
              <p class="cover__lead-paragraph">
                Рак лечится — проект Благотворительного Фонда Константина
                Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
                изменить отношение людей к раку и заставить каждого поверить:
                онкологическое заболевание — это не приговор.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Lead from '@/components/blocks/Lead';
import Description from '@/components/blocks/Description';
import Rectangle from '@/components/blocks/Rectangle';
import Stories from '@/components/blocks/Stories';
export default {
  components: {
    lead: Lead,
    description: Description,
    rectangle: Rectangle,
    stories: Stories,
  },
};
</script>

<style>
.content__lead {
  margin: 0 auto;
}

.content__description {
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 74px;
}

.content__rectangle {
  margin: 0 auto;
}

.content__stories {
  margin: 0 auto;
  padding-top: 100px;
}
</style>
