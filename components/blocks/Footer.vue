<template>
  <footer class="footer">
    <container class="footer__container">
      <div class="footer__info">
        <p class="footer__thanksgiving">
          Спасибо всем, кто помог состояться этому проекту
        </p>
        <div class="footer__menu">
          <nuxt-link to="/" class="footer__navigation">Главная</nuxt-link>
          <nuxt-link to="/stories" class="footer__navigation"
            >Истории</nuxt-link
          >
        </div>

        <div class="footer__link">
          <p class="footer__link_bottom">
            Мы в
            <a
              href="https://www.instagram.com/raklechitsa/"
              class="footer__link_outside"
              target="_blank"
              >Инстаграме</a
            >
            и
            <a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              class="footer__link_outside"
              target="_blank"
              >Youtube</a
            >
          </p>
          <a class="footer__link_bottom" @click="showPopupLinks"
            >Поделитесь &#8599;</a
          >
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer_margin-bottom">Рак Лечится 2020</p>
        <p class="footer_margin-bottom">
          Сделано студентами
          <a
            href="https://praktikum.yandex.ru/"
            target="_blank"
            class="footer__copyright_link"
            >Яндекс Практикум</a
          >
        </p>
      </div>
      <Popup v-if="popupLinksShown" @closeClick="closePopupLinks">
        <QuizLinks />
      </Popup>
    </container>
  </footer>
</template>

<script>
import Container from '@/components/blocks/Container.vue';
import QuizLinks from '@/components/blocks/QuizLinks';
import Popup from '@/components/blocks/Popup';

export default {
  components: {
    container: Container,
    QuizLinks,
    Popup,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopupLinks() {
      this.$store.commit('popup/togglePopupLinks');
    },
    closePopupLinks() {
      this.$store.commit('popup/togglePopupLinks');
    },
  },
  computed: {
    popupLinksShown() {
      return this.$store.getters['popup/getPopupLinksShown'];
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  min-height: 356px;
  background: #fbfbfb;
  padding: 60px 0;
}
.footer__container {
  min-height: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.footer__info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer__thanksgiving {
  max-width: 380px;
  margin-right: 72px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.footer__menu {
  flex: 1 0;
}
.footer__navigation {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-right: 40px;
  color: #121212;
  text-decoration: none;
}
.footer__link {
  max-width: 300px;
  height: 108px;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
.footer__link_outside {
  color: #121212;
}
.footer__copyright {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}
.footer__copyright_link {
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  text-decoration: none;
  cursor: pointer;
}
.footer__link_bottom {
  margin-bottom: 44px;
}
@media screen and (max-width: 1280px) {
  .footer {
    min-height: 316px;
    padding: 50px 0;
  }
  .footer__container {
    min-height: 216px;
  }
  .footer__thanksgiving {
    font-size: 28px;
    line-height: 32px;
  }
  .footer__navigation {
    font-size: 16px;
  }
  .footer__link {
    font-size: 16px;
  }

  .footer__copyright {
    font-size: 16px;
  }
  .footer__copyright_link {
    font-size: 16px;
  }
}
@media screen and (max-width: 1024px) {
  .footer {
    min-height: 292px;
  }
  .footer__container {
    min-height: 192px;
  }
  .footer__thanksgiving {
    font-size: 24px;
    line-height: 28px;
  }
  .footer__link_bottom {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 768px) {
  .footer__thanksgiving {
    max-width: 268px;
    min-width: 230px;
    margin-right: 30px;
  }
  .footer__link_bottom {
    margin-bottom: 14px;
  }
  .footer__menu {
    display: flex;
    flex-direction: column;
  }
  .footer__navigation {
    margin-bottom: 14px;
  }
}
@media screen and (max-width: 520px) {
  .footer__info {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .footer__thanksgiving {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 320px) {
  .footer {
    min-height: 402px;
  }

  .footer__thanksgiving {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 50px;
  }
  .footer__navigation {
    font-size: 13px;
    line-height: 15px;
  }
  .footer__link {
    font-size: 13px;
    line-height: 15px;
    justify-content: flex-start;
  }
  .footer__copyright {
    font-size: 13px;
    line-height: 18px;
    flex-direction: column;
  }
  .footer__copyright_link {
    font-size: 13px;
    line-height: 18px;
  }
  .footer_margin-bottom {
    margin-bottom: 18px;
  }
}
</style>
