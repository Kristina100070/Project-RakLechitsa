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
      <Button @click="showPopup" className="button_section">{{ text }}</Button>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    Button,
  },
  data() {
    return {
      text: 'Заполнить форму',
    };
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.your-story {
  padding: 100px 60px;
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.your-story__title {
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  max-width: 413px;
}

.your-story__subtitle {
  font-size: 1.125em;
  line-height: 1.375;
  color: #666666;
  margin-top: 30px;
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
  font-weight: 500;
  font-size: 1.125em;
  line-height: 1.375;
  padding-top: 10px;
}

.form__info {
  color: #666;
  font-size: 1.125em;
  line-height: 1.2;
}

.form__variant:first-child {
  padding: 0;
}

@media screen and (max-width: 1280px) {
  .your-story {
    padding: 90px 50px;
  }

  .your-story__form {
    margin-left: 160px;
  }

  .your-story__title {
    font-size: 1.75em;
    line-height: 1.143;
  }

  .your-story__subtitle {
    font-size: 1em;
    line-height: 1.375;
  }

  .form__variant {
    font-size: 1.125em;
    line-height: 1.222;
    padding-top: 10px;
  }

  .form__info {
    font-size: 1.125em;
    line-height: 1.222;
    max-width: 570px;
  }

  @media screen and (max-width: 1024px) {
    .your-story {
      padding: 80px 40px;
    }

    .your-story__form {
      margin-left: 99px;
    }

    .your-story__title {
      font-size: 1.5em;
      line-height: 1.167;
    }

    .your-story__subtitle {
      font-size: 0.8em;
      line-height: 1.231;
    }

    .form__variant {
      font-size: 0.938em;
      line-height: 1.267;
      padding-top: 10px;
    }

    .form__info {
      font-size: 0.938em;
      line-height: 1.267;
      max-width: 447px;
    }
  }

  @media screen and (max-width: 768px) {
    .your-story {
      padding: 80px 40px;
    }

    .your-story__form {
      margin-left: 99px;
    }

    .your-story__title {
      font-size: 1.5em;
      line-height: 1.167;
    }

    .your-story__subtitle {
      font-size: 0.8em;
      line-height: 1.231;
    }

    .form__variant {
      font-size: 0.938em;
      line-height: 1.267;
    }

    .form__info {
      font-size: 0.938em;
      line-height: 1.267;
    }
  }

  @media screen and (max-width: 320px) {
    .your-story {
      padding: 50px 15px;
    }

    .your-story__form {
      margin-left: 99px;
    }

    .your-story__title {
      font-size: 1.125em;
      line-height: 1.167;
    }

    .your-story__subtitle {
      font-size: 0.8em;
      line-height: 1.231;
    }

    .form__variant {
      font-size: 0.8em;
      line-height: 1.5;
    }

    .form__info {
      font-size: 0.8em;
      line-height: 1.5;
    }
  }
}
</style>
