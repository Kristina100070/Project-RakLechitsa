<template>
  <div class="cover">
    <container>
      <h2 class="cover__title">#РакЛечится</h2>

      <h3 class="cover__subtitle">О проекте</h3>
      <section class="cover__section">
        <div class="cover__about">
          <p class="cover__about-project cover__content">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </p>
          <div class="cover__about-author">
            <p
              @click="clickOn"
              class="cover__link cover__content"
              :class="{ cover__link_active: !isActive }"
            >
              Рак Лечится
            </p>
            <p
              @click="clickOff"
              class="cover__link cover__content"
              :class="{ cover__link_active: isActive }"
            >
              Фонд Хабенского
            </p>
          </div>
        </div>
        <div class="cover__text">
          <p v-if="!isActive" class="cover__content">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.Рак лечится — проект Благотворительного
            Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы
            надеемся изменить отношение людей к раку и заставить каждого
            поверить: онкологическое заболевание — это не приговор.
          </p>
          <p v-if="isActive" class="cover__content">
            Благотворительный Фонд Константина Хабенского с 2008 года помогает
            детям с онкологическими и другими тяжелыми заболеваниями головного
            мозга. Фонд не только поддерживает семью заболевшего ребенка в самый
            сложный момент, оплачивая обследования, лечение и медицинские
            препараты, но и в целом меняет систему оказания помощи детям с
            опухолями мозга в России.
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
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    clickOn() {
      this.isActive = false;
    },
    clickOff() {
      this.isActive = true;
    },
  },
};
</script>

<style scoped>
.cover {
  width: 100%;
  background-color: #613a93;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
}
.cover__title {
  font-weight: 800;
  margin-top: 90px;
  margin-bottom: 70px;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
}
.cover__subtitle {
  font-weight: 600;
  margin-bottom: 32px;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
}
.cover__section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.cover__about {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1 0;
  margin-right: 40px;
}
.cover__text {
  width: 50%;
}
.cover__content {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}
.cover__about-project {
  width: 50%;
  margin-bottom: 276px;
}
.cover__about-author {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.cover__link {
  cursor: pointer;
  margin-bottom: 10px;
}
.cover__link_active {
  color: #fff;
  font-weight: 500;
}

@media screen and (max-width: 1280px) {
  .cover__title {
    margin-top: 80px;
    margin-bottom: 60px;
    font-size: 58px;
    line-height: 70px;
  }
  .cover__about-project {
    max-width: 305px;
    margin-bottom: 294px;
  }
  .cover__subtitle {
    margin-bottom: 30px;
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .cover__title {
    margin-top: 80px;
    margin-bottom: 46px;
    font-size: 52px;
    line-height: 63px;
  }
  .cover__subtitle {
    font-size: 24px;
    line-height: 28px;
  }
  .cover__content {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .cover {
    min-height: 70vh;
  }
  .cover__title {
    display: none;
  }
  .cover__subtitle {
    text-align: center;
    margin-bottom: 26px;
    margin-top: 80px;
  }
  .cover__section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    min-width: 320px;
    max-width: 380px;
  }
  .cover__about {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .cover__about-project {
    margin-bottom: 80px;
    width: 100%;
  }
  .cover__content {
    font-size: 13px;
    line-height: 16px;
  }
  .cover__about-author {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  .cover__link {
    margin-right: 30px;
  }
  .cover__link_active {
    text-decoration: underline;
  }

  .cover__text {
    width: 100%;
  }
}
@media screen and (max-width: 320px) {
  .cover {
    min-height: 50vh;
  }
  .cover__subtitle {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    margin-bottom: 16px;
    margin-top: 50px;
  }
  .cover__section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 290px;
    min-width: 120px;
  }
  .cover__about-project {
    margin-bottom: 40px;
  }
  .cover__content {
    font-size: 15px;
    line-height: 19px;
  }
  .cover__about-author {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  .cover__link {
    font-size: 13px;
    line-height: 19px;
  }
  .cover__text {
    margin-bottom: 50px;
  }
}
</style>
