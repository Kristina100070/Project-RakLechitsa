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
import Menu from '@/components/ui/Menu';

export default {
  components: {
    'menu-link': Menu,
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 356px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
}
.footer__info {
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
  display: flex;
  flex-direction: column;
}
.footer__copyright {
  justify-content: space-around;
  flex-direction: column;
}
</style>
