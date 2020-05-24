<template>
  <div>
    <div class="statistics__container">
      <div
        class="statistics__card"
        v-for="statistic in statistics"
        :key="statistic.id"
      >
        <h2 class="card__title">
          {{ statistic.description }}
        </h2>
        <progress-bar
          v-if="!oldValue"
          :currentValue="statistic.currentValue"
          :maxValue="statistic.maxValue"
        />
        <progress-bar-double
          v-else
          :currentValue="statistic.currentValue"
          :maxValue="statistic.maxValue"
          :oldValue="statistic.oldValue"
        />
        <p class="card__info">{{ statistic.summary }}</p>
        <p class="card__source">{{ statistic.source }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '~/components/ui/ProgressBar';
import ProgressBarDouble from '~/components/ui/ProgressBarDouble';
export default {
  components: {
    'progress-bar': ProgressBar,
    'progress-bar-double': ProgressBarDouble,
  },
  computed: {
    statistics() {
      return this.$store.getters['statistics/getStatistics'];
    },
  },
};
</script>

<style scoped>
.statistics__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #efefef;
  min-height: 300px;
  min-width: 300px;
}
.statistics__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
}
.card__title {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}
.card__info {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
}
.card__source {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}
@media screen and (max-width: 1280px) {
  .statistics__card {
    min-width: 265px;
    min-height: 265px;
  }
}
@media screen and (max-width: 1024px) {
  .statistics__card {
    min-width: 208px;
    min-height: 208px;
  }
  .card__title {
    font-size: 10px;
    line-height: 14px;
  }
  .card__info {
    font-weight: 600;
    font-size: 26px;
    line-height: 30px;
  }
  .card__source {
    font-size: 10px;
    line-height: 14px;
  }
}
@media screen and (max-width: 768px) {
  .statistics__card {
    min-width: 216px;
    min-height: 216px;
  }
}
@media screen and (max-width: 320px) {
}
</style>
