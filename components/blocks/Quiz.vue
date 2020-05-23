<template>
  <div class="quiz">
    <h3 class="quiz__title">{{ currentQuestion.title }}</h3>
    <p>
      <span class="quiz__text_main">{{ currentQuestion.text }}</span>
      <span
        v-if="currentQuestion.textAdditional"
        class="quiz__text_additional"
        >{{ currentQuestion.textAdditional }}</span
      >
    </p>
    <Input
      className="quiz__input"
      type="text"
      placeholder="Напишите тут"
      v-model="answer"
    />
    <div class="quiz__container">
      <nxt-link @lnkClick="prevQuestion" url="#">Назад</nxt-link>
      <Button @btnClick="nextQuestion">{{
        isLastQuestion ? 'Далее' : 'Отправить'
      }}</Button>
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
      answer: '',
    };
  },
  computed: {
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion] || '';
    },
    inicialAnswer() {
      const { quiz } = this.$store.state;
      const { currentQuestion, answers } = quiz;
      return answers[currentQuestion] || '';
    },
    isLastQuestion() {
      const { quiz } = this.$store.state;
      const { questions, currentQuestion } = quiz;
      const questionsLength = Object.keys(questions).length;
      if (questionsLength === currentQuestion) {
        return false;
      }
      return true;
    },
  },

  methods: {
    async nextQuestion() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.inicialAnswer || '';
    },
    async prevQuestion() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.inicialAnswer || '';
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
.quiz__text_main {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}
.quiz__text_additional {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
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
  width: 840px;
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid #e7e7e7;
  margin-top: 130px;
}
@media screen and (max-width: 1439px) {
  .quiz__input {
    width: 720px;
  }
  .quiz__title {
    font-size: 28px;
    line-height: 32px;
  }
  .quiz__text_main {
    font-size: 16px;
    line-height: 22px;
  }
  .quiz__text_additional {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 1279px) {
  .quiz__text_main {
    font-size: 15px;
    line-height: 22px;
  }
  .quiz__text_additional {
    font-size: 15px;
    line-height: 22px;
  }
}

@media screen and (max-width: 1023px) {
  .quiz__input {
    width: 500px;
  }
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
  .quiz__text_main {
    font-size: 15px;
    line-height: 19px;
  }
  .quiz__text_additional {
    font-size: 16px;
    line-height: 19px;
  }
}

@media screen and (max-width: 767px) {
  .quiz__input {
    width: 260px;
  }
  .quiz__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 30px;
  }
  .quiz__text_main {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__text_additional {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
