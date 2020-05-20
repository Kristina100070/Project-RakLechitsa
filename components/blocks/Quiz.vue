<template>
  <div class="quiz">
    <h3 class="quiz__title">{{ questions[currentQuestion].title }}</h3>
    <p class="quiz__text">{{ questions[currentQuestion].text }}</p>
    <Input className="quiz__input" type="text" placeholder="Напишите тут" />
    <div class="quiz__container">
      <nxt-link @click="prevQuestion" href="#">Назад</nxt-link>
      <Button @btnClick="nextQuestion">{{ btn_text }}</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Link from '@/components/ui/Link';
export default {
  props: {
    title: {
      required: true,
      default: 'Шаг 0 из 12',
      type: String,
    },
    text: {
      required: true,
      default: 'Вопрос',
      type: String,
    },
  },
  components: {
    Input,
    Button,
    'nxt-link': Link,
  },

  data() {
    return {
      btn_text: 'Далее',
    };
  },
  computed: {
    getCurrentQuestion() {
      return this.$store.getters['quiz/getCurrentQuestion'];
    },
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
.quiz__text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 130px;
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
}
</style>
