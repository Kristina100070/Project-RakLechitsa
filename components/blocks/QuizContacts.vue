<template>
  <div class="quiz">
    <h3 class="quiz__title">Оставьте контакт для связи</h3>
    <p class="quiz__subtitle">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <span class="quiz__text">Как вас зовут?</span>

    <Input
      className="quiz__input"
      type="text"
      placeholder="Напишите тут"
      v-model="answer"
    />
    <div class="quiz__contact">
      <div>
        <span class="quiz__text">Электронная почта</span>

        <Input
          className="quiz__input"
          type="text"
          placeholder="pochta@example.com"
          v-model="answer"
        />
      </div>
      <div>
        <span class="quiz__text">Телефон</span>

        <Input
          className="quiz__input"
          type="text"
          placeholder="+7 000 000 00 00"
          v-model="answer"
        />
      </div>
    </div>
    <span class="quiz__text"
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
      <div class="quiz__policy-container">
        <p class="quiz__policy">
          Нажимая на кнопку «Отправить», вы даете согласие на
          <span
            ><nuxt-link to="/policy" class="quiz__policy"
              >обработку персональных данных</nuxt-link
            ></span
          >
        </p>
      </div>
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
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
.quiz__subtitle {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
}
.quiz__text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin: 40px 0;
}

.quiz__container {
  display: flex;
  align-items: center;
  margin-top: 50px;
}
.quiz__contact {
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  margin-top: 40px;
}
.quiz__input {
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
}
.quiz__policy {
  width: 378px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}
.quiz__policy-container {
  margin-left: 30px;
}
</style>
