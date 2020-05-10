<template>
  <section class="statistics">
    <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    <div class="statistics__container">
      <div class="statistics__card">
        <h2 class="card__title">
          Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
          000 человек.
        </h2>
        <img class="card__image" />
        <p class="card__info"></p>
        <p class="card__source"></p>
      </div>
      <div class="statistics__card">
        <h2 class="card__title">2,6% Россиян имеют онкозаболевания.</h2>
        <img class="card__image" />
        <p class="card__info"></p>
        <p class="card__source"></p>
      </div>
      <div class="statistics__card">
        <h2 class="card__title">
          На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.
        </h2>
        <img class="card__image" />
        <p class="card__info"></p>
        <p class="card__source"></p>
      </div>
      <div class="statistics__card">
        <h2 class="card__title">
          На 25% снизилась смертность в течение первого года после постановки
          диагноза.
        </h2>
        <img class="card__image" />
        <p class="card__info"></p>
        <p class="card__source"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.statistics {
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
}

.statistics__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 380px;
}

.statistics__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
}

.statistics__card {
  border: 1px solid #efefef;
  min-height: 300px;
}

.card__title {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  max-width: 260px;
  padding: 10px;
}
</style>
