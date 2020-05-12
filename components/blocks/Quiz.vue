<template>
  <div class="quiz">
    <h3 class="quiz__title">{{ questions[currentQuestion].title }}</h3>
    <p class="quiz__text">{{ questions[currentQuestion].text }}</p>
    <Input
      className="unput_bottom-border"
      type="text"
      placeholder="Напишите тут"
    />
    <div class="quiz__container">
      <a @click="prevQuestion" class="link" href="#">Назад</a>
      <Button @btnClick="nextQuestion">{{ btn_text }}</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
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
  },
  methods: {
    nextQuestion() {
      this.currentQuestion = this.currentQuestion + 1;
    },
    prevQuestion() {
      this.currentQuestion = this.currentQuestion - 1;
    },
  },
  data() {
    return {
      btn_text: 'Далее',
      currentQuestion: 1,
      questions: {
        1: {
          title: 'Шаг 1 из 12',
          text: 'Как вас зовут?',
        },
        2: {
          title: 'Шаг 2 из 12',
          text:
            'Было ли у вас онкологическое заболевание? Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус.',
        },
      },
    };
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
.link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #c0c0c0;
  text-decoration: none;
  margin-right: 30px;
}
.quiz__container {
  display: flex;
  margin-top: 200px;
  align-items: center;
}
</style>
