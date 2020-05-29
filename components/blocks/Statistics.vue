<template>
  <section class="statistics">
    <container>
      <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    </container>
    <card />
  </section>
</template>

<script>
import Container from '~/components/blocks/Container';
import StaticCard from '~/components/blocks/StaticCard';
export default {
  components: {
    container: Container,
    card: StaticCard,
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
  margin-bottom: 70px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 380px;
}

@media screen and (max-width: 1280px) {
  .statistics {
    padding: 90px 0;
  }
  .statistics__title {
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .statistics {
    padding: 80px 0;
  }
  .statistics__title {
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (max-width: 768px) {
  .statistics {
    padding: 70px 0;
  }
  .statistics__title {
    text-align: center;
  }
}
@media screen and (max-width: 320px) {
  .statistics {
    padding: 50px 0;
  }
  .statistics__title {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
}
</style>
