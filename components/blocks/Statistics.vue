<template>
  <container>
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
            На 28% выросла доля выявления заболеваний на ранней стадии за 10
            лет.
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
  </container>
</template>

<script>
import Container from '~/components/blocks/Container';

export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.statistics {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
}

.statistics__title {
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125em;
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
  font-size: 0.75em;
  line-height: 1.333;
  max-width: 260px;
  padding: 10px;
}

@media screen and (max-width: 1280px) {
  .statistics {
    padding: 90px 0;
  }

  .statistics__title {
    font-size: 1.75em;
    line-height: 1.143;
  }
}

@media screen and (max-width: 1024px) {
  .statistics {
    padding: 80px 0;
  }

  .statistics__title {
    font-size: 1.5em;
    line-height: 1.167;
  }

  .card__title {
    font-size: 0.625em;
    line-height: 1.4;
  }
}

@media screen and (max-width: 768px) {
  .statistics {
    padding: 80px 0;
  }

  .statistics__title {
    font-size: 1.5em;
    line-height: 1.167;
  }

  .card__title {
    font-size: 0.625em;
    line-height: 1.4;
  }
}

@media screen and (max-width: 320px) {
  .statistics {
    padding: 50px 0;
  }

  .statistics__title {
    font-size: 1.125em;
    line-height: 1.167;
  }

  .card__title {
    font-size: 0.625em;
    line-height: 1.4;
  }
}
</style>
