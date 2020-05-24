<template>
  <div class="quiz">
    <h3 class="quiz__title">Оставьте контакт для связи</h3>
    <p class="quiz__text_main">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <span class="quiz__text_main">Как вас зовут?</span>

    <Input
      className="quiz__input"
      type="text"
      placeholder="Напишите тут"
      v-model="answer"
    />
    <div class="quiz__contact">
      <div>
        <span class="quiz__text_main">Электронная почта</span>

        <Input
          className="quiz__input"
          type="text"
          placeholder="pochta@example.com"
          v-model="answer"
        />
      </div>
      <div>
        <span class="quiz__text_main">Телефон</span>

        <Input
          className="quiz__input"
          type="text"
          placeholder="+7 000 000 00 00"
          v-model="answer"
        />
      </div>
    </div>
    <span class="quiz__text_main"
      >Напишите, если есть предпочтительный способ связи и удобное время</span
    >

    <Input
      className="quiz__input"
      type="text"
      placeholder="Телефон / почта и удобное время"
      v-model="answer"
    />
    <div class="quiz__container">
      <Button @btnClick="sendInfo">Отправить</Button>
      <nuxt-link to="/policy" class="quiz__policy"
        >Нажимая на кнопку «отправить», вы даете согласие на обработку
        персональных данных</nuxt-link
      >
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
  display: flex;
  flex-direction: column;
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
  margin-bottom: 40px;
}
.quiz__text_main {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.quiz__container {
  display: flex;
  margin-top: 200px;
  align-items: center;
}
.quiz__input {
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid #e7e7e7;
  margin-top: 130px;
}
</style>
