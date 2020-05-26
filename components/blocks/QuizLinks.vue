<template>
  <div class="quiz">
    <h3 class="quiz__title">Поделитесь</h3>
    <div class="quiz__link-container">
      <a href=""
        ><img
          class="quiz__social-icon"
          src="/images/icons/facebook.svg"
          alt="Fb icon"
      /></a>
      <a href=""
        ><img
          class="quiz__social-icon"
          src="/images/icons/twitter.svg"
          alt="Twitter icon"
      /></a>
      <a href=""
        ><img class="quiz__social-icon" src="/images/icons/VK.svg" alt="VK icon"
      /></a>
      <a href=""
        ><img class="quiz__social-icon" src="/images/icons/OK.svg" alt="OK icon"
      /></a>
      <a href=""
        ><img
          class="quiz__social-icon"
          src="/images/icons/Instagram.svg"
          alt="Instagram icon"
      /></a>
      <a href=""
        ><img
          class="quiz__social-icon"
          src="/images/icons/YouTube.svg"
          alt="YouTube icon"
      /></a>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
export default {
  components: {
    Input,
    Button,
  },
};
</script>

<style scoped>
.quiz {
  width: 840px;
  height: 244px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quiz__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  display: flex;
  align-items: flex-end;
  color: #000000;
  margin-bottom: 108px;
}
.quiz__link-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.quiz__social-icon {
  margin-right: 45px;
}
</style>
