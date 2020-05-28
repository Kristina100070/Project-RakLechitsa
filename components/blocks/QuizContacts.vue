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
    <div class="quiz__contacts">
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
  display: inline-block;
}

.quiz__container {
  display: flex;
  align-items: center;
  margin-top: 50px;
}
.quiz__contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
}
.quiz__input {
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  font-size: 18px;
  line-height: 24px;
}
.quiz__policy {
  max-width: 378px;
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
@media screen and (max-width: 1439px) {
  .quiz {
    width: 720px;
  }
  .quiz__title {
    font-size: 28px;
    line-height: 32px;
  }
  .quiz__subtitle {
    font-size: 16px;
    line-height: 22px;
  }
  .quiz__text {
    font-size: 16px;
    line-height: 22px;
  }
  .quiz__input {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 1279px) {
  .quiz__text {
    font-size: 15px;
    line-height: 22px;
  }
  .quiz__subtitle {
    font-size: 15px;
    line-height: 22px;
  }
}

@media screen and (max-width: 1023px) {
  .quiz {
    width: 500px;
  }
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
  .quiz__subtitle {
    font-size: 15px;
    line-height: 19px;
  }
  .quiz__text {
    font-size: 15px;
    line-height: 19px;
  }
  .quiz__input {
    padding: 10px 0;
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 767px) {
  .quiz {
    width: 260px;
  }
  .quiz__title {
    font-size: 18px;
    line-height: 21px;
  }
  .quiz__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__text {
    font-size: 13px;
    line-height: 16px;
    margin: 30px 0 20px;
  }
  .quiz__contacts {
    display: flex;
    flex-direction: column;
  }
  .quiz__input {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__container {
    flex-direction: column;
    margin-top: 35px;
  }
  .quiz__policy {
    font-size: 11px;
    line-height: 13px;
  }
  .quiz__policy-container {
    margin-left: 0;
    max-width: 100%;
    margin-top: 10px;
  }
}
</style>
