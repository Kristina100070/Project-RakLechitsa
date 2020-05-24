<template>
  <div>
    <container class="cover">
      <h2 class="cover__title">#РакЛечится</h2>

      <h3 class="cover__subtitle">О проекте</h3>
      <section class="cover__container">
        <div class="cover__container">
          <p class="cover__about-project cover__content">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </p>
          <div class="cover__author-project">
            <p class="cover__author-title">Рак Лечится</p>
            <p class="cover__content">Фонд Хабенского</p>
          </div>
        </div>
        <div class="cover__section">
          <p class="cover__content">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </p>
          <p class="cover__content">
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </p>
        </div>
      </section>
    </container>
  </div>
</template>

<script>
import Container from '@/components/blocks/Container.vue';
export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.cover {
  width: 100%;
  background-color: #613a93;
  min-height: 650px;
  display: flex;
  flex-direction: column;
}
.cover__title {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
}
.cover__subtitle {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
}
.cover__container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.cover__content {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.cover__author-project {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.cover__author-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
.cover__section {
  width: 640px;
}
</style>
