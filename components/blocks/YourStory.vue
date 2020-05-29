<template>
  <div class="your-story">
    <container>
      <h3 class="your-story__title">Расскажите свою историю</h3>
      <section class="your-story__section">
        <div class="your-story__info">
          <p class="your-story__option your-story__content">
            Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </p>
          <div class="your-story__select">
            <p
              @click="clickOn"
              class="your-story__link your-story__content"
              :class="{ 'your-story__link_active': !isActive }"
            >
              1-й вариант
            </p>
            <p
              @click="clickOff"
              class="your-story__link your-story__content"
              :class="{ 'your-story__link_active': isActive }"
            >
              2-й вариант
            </p>
          </div>
        </div>
        <div class="your-story__text">
          <div v-if="!isActive" class="your-story__text_content">
            <p class="your-story__content">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </p>
            <your-story-button @btnClick="showPopup" class="your-story__button">
              {{ text }}</your-story-button
            >
          </div>
          <div v-if="isActive" class="your-story__text_content">
            <p class="your-story__content">
              Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
              зададим вопросы, уточним детали вашей истории..
            </p>
            <your-story-button
              @btnClick="showPopupForm"
              class="your-story__button"
            >
              {{ text2 }}</your-story-button
            >
          </div>
          <overlay v-if="popupFormShown" @clickOverlay="closePopup"></overlay>
          <Popup v-if="popupFormShown" @closeClick="closePopupForm">
            <QuizContacts />
          </Popup>
        </div>
      </section>
    </container>
  </div>
</template>

<script>
import Container from '@/components/blocks/Container.vue';
import Button from '@/components/ui/Button';
import QuizContacts from '@/components/blocks/QuizContacts';
import Overlay from '@/components/ui/Overlay';
import Popup from '@/components/blocks/Popup';

export default {
  components: {
    container: Container,
    'your-story-button': Button,
    overlay: Overlay,
    QuizContacts,
    Popup,
  },
  data() {
    return {
      isActive: false,
      text: 'Заполнить форму',
      text2: 'Оставить контакт',
    };
  },
  methods: {
    clickOn() {
      this.isActive = false;
    },
    clickOff() {
      this.isActive = true;
    },
    showPopupForm() {
      this.$store.commit('popup/togglePopupForm');
    },
    closePopupForm() {
      this.$store.commit('popup/togglePopupForm');
    },
  },
  computed: {
    popupFormShown() {
      return this.$store.getters['popup/getPopupFormShown'];
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
};
</script>

<style scoped>
.your-story {
  width: 100%;
  background-color: #f7f7f7;
  max-height: 522px;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
}
.your-story__title {
  max-width: 413px;
  font-weight: 600;
  margin-bottom: 32px;
  font-size: 32px;
  line-height: 36px;
}
.your-story__section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.your-story__info {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 40px;
}
.your-story__text {
  width: 50%;
}
.your-story__content {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.your-story__text_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 214px;
}
.your-story__option {
  width: 50%;
}
.your-story__select {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.your-story__link {
  cursor: pointer;
  margin-bottom: 10px;
}
.your-story__link_active {
  font-weight: 500;
  color: #000;
}

@media screen and (max-width: 1280px) {
  .your-story {
    max-height: 488px;
    padding: 90px 0;
  }
  .your-story__option {
    max-width: 305px;
    margin-bottom: 294px;
  }
  .your-story__title {
    margin-bottom: 30px;
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
  }
}
@media screen and (max-width: 1024px) {
  .your-story {
    max-height: 470px;
    padding: 80px 0;
  }
  .your-story__title {
    font-size: 24px;
    line-height: 28px;
  }
  .your-story__content {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .your-story {
    min-height: 598px;
  }

  .your-story__title {
    margin-bottom: 26px;
    margin-right: auto;
    margin-left: auto;
  }
  .your-story__section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    min-width: 320px;
    max-width: 380px;
  }
  .your-story__info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .your-story__option {
    margin-bottom: 80px;
    width: 100%;
  }
  .your-story__content {
    font-size: 13px;
    line-height: 16px;
    max-width: 280px;
  }
  .your-story__select {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .your-story__link {
    margin-right: 30px;
  }
  .your-story__link_active {
    text-decoration: none;
    border-bottom: 2px solid #613a93;
  }

  .your-story__text {
    width: 100%;
  }
  .your-story__text_content {
    justify-content: space-around;
    min-height: 191px;
  }
}
@media screen and (max-width: 320px) {
  .your-story {
    min-height: 462px;
    padding: 50px 0;
  }
  .your-story__title {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    margin-bottom: 16px;
  }
  .your-story__section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 290px;
    min-width: 120px;
  }
  .your-story__option {
    margin-bottom: 40px;
  }
  .your-story__content {
    font-size: 13px;
    line-height: 16px;
  }
  .your-story__select {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .your-story__link {
    font-size: 13px;
    line-height: 19px;
  }

  .your-story__text_content {
    min-height: 166px;
  }
}
</style>
