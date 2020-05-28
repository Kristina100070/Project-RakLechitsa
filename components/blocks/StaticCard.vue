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
          class="card__progress-bar"
          v-if="!statistic.oldValue"
          :currentValue="statistic.currentValue"
          :maxValue="statistic.maxValue"
        />
        <progress-bar-double
          class="card__progress-bar"
          v-else
          :currentValue="statistic.currentValue"
          :maxValue="statistic.maxValue"
          :oldValue="statistic.oldValue"
        />
        <div class="card__statistika">
          <p class="card__info">{{ statistic.summary }}</p>
          <p class="card__source">{{ statistic.source }}</p>
        </div>
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
  beforeMount() {
    this.$store.dispatch('statistics/fetchStatistics');
  },
};
</script>

<style scoped>
.statistics__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  padding: 0 60px;
  overflow: auto;
}
.statistics__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #efefef;
  min-height: 300px;
  min-width: 300px;
  position: relative;
}

.card__title {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 20px;
}
.card__progress-bar {
  align-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
}
.card__statistika {
  margin: 20px;
}
.card__info {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin-bottom: 20px;
}
.card__source {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  text-align: right;
}
@media screen and (max-width: 1280px) {
  .statistics__container {
    padding: 0 50px;
  }
  .statistics__card {
    min-width: 265px;
    min-height: 265px;
  }
  .card__title {
    margin: 18px;
  }
  .card__statistika {
    margin: 18px;
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
    margin: 10px;
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
  .card__statistika {
    margin: 10px;
  }
}
@media screen and (max-width: 768px) {
  .statistics__container {
    padding: 0 40px;
  }
  .statistics__card {
    min-width: 216px;
    min-height: 216px;
  }
}
@media screen and (max-width: 320px) {
}
.statistics__container {
  padding: 0 15px;
}
</style>
