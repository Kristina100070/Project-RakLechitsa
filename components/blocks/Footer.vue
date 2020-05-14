<template>
  <footer class="footer">
    <div class="footer__info">
      <p class="footer__thanksgiving">
        Спасибо всем, кто помог состояться этому проекту
      </p>
      <menu-link />
      <div class="footer__link">
        <p>Мы в Инстаграме и Youtube</p>
        <a>Поделитесь &#8599;</a>
      </div>
    </div>
    <div class="footer__copyright">
      <p>Рак Лечится 2020</p>
      <p>Сделано студентами Яндекс Практикум</p>
    </div>
  </footer>
</template>

<script>
import LinkMenu from '@/components/ui/LinkMenu';

export default {
  components: {
    'menu-link': LinkMenu,
  },
};
</script>

<style scoped>
.footer {
  padding-left: 60px;
  padding-right: 60px;
  width: 100%;
  height: 356px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.footer__info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer__thanksgiving {
  width: 340px;
  height: 108px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.footer__link {
  width: 300px;
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
</style>
