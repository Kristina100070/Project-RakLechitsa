<template>
  <footer class="footer">
    <container>
      <div class="footer__info">
        <p class="footer__thanksgiving">
          Спасибо всем, кто помог состояться этому проекту
        </p>
        <main-menu class="footer__menu" />
        <div class="footer__link">
          <p class="footer_margin-bottom">Мы в Инстаграме и Youtube</p>
          <a @click="showPopupLinks" class="footer_margin-bottom"
            >Поделитесь &#8599;</a
          >
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer_margin-bottom">Рак Лечится 2020</p>
        <p class="footer_margin-bottom">Сделано студентами Яндекс Практикум</p>
      </div>
      <Popup v-if="popupLinksShown" @closeClick="closePopupLinks">
        <QuizLinks />
      </Popup>
    </container>
  </footer>
</template>

<script>
import Container from '@/components/blocks/Container.vue';
import Menu from '@/components/ui/Menu';
import QuizLinks from '@/components/blocks/QuizLinks';
import Popup from '@/components/blocks/Popup';

export default {
  components: {
    'main-menu': Menu,
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fbfbfb;
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
.footer__link {
  max-width: 300px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
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
@media screen and (max-width: 1280px) {
  .footer {
    min-height: 316px;
  }
  .footer__thanksgiving {
    font-size: 28px;
    line-height: 32px;
  }
  .footer__link {
    font-size: 16px;
  }
  .footer__copyright {
    font-size: 16px;
  }
}
@media screen and (max-width: 1024px) {
  .footer {
    min-height: 292px;
  }
  .footer__thanksgiving {
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (max-width: 320px) {
  .footer {
    min-height: 402px;
  }
  .footer__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer__thanksgiving {
    width: 100%;
    font-size: 18px;
    line-height: 21px;
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
  .footer_margin-bottom {
    margin-bottom: 18px;
  }
}
</style>
