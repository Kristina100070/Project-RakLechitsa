<template>
  <div class="quiz">
    <h3 :class="[!isLastPage ? 'quiz__title' : 'quiz__title_last-step']">
      {{ !isLastPage ? currentQuestion.title : 'Спасибо что приняли участие!' }}
    </h3>
    <div class="quiz__text-container">
      <span class="quiz__text">{{ currentQuestion.text }}</span>
      <span
        v-if="currentQuestion.textAdditional"
        class="quiz__text_additional"
        >{{ currentQuestion.textAdditional }}</span
      >
    </div>
    <Input
      :class="[!isLastPage ? 'quiz__input' : 'quiz__input_last']"
      type="text"
      placeholder="Напишите тут"
      v-model="answer"
    />
    <div class="quiz__container">
      <nxt-link v-if="!isLastPage" @lnkClick="prevQuestion" url="#"
        >Назад</nxt-link
      >
      <Button v-if="!isLastPage" @btnClick="nextQuestion">
        <p v-if="!isLastPage">{{ isLastQuestion ? 'Далее' : 'Отправить' }}</p>
      </Button>

      <div class="quiz__policy-container">
        <p class="quiz__policy" v-if="!isLastQuestion">
          Нажимая на кнопку «Отправить», вы даете согласие на
          <span
            ><nuxt-link v-if="!isLastQuestion" to="/policy" class="quiz__policy"
              >обработку персональных данных</nuxt-link
            ></span
          >
        </p>
      </div>

      <Button v-if="isLastPage" @btnClick="lastStep">
        <p v-if="isLastPage">{{ 'Закрыть' }}</p>
      </Button>
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
    isLastPage() {
      const { quiz } = this.$store.state;
      const { questions, currentQuestion } = quiz;
      const questionsLength = Object.keys(questions).length;
      if (currentQuestion > questionsLength) {
        return true;
      }
      return false;
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
    lastStep() {
      this.$store.commit('popup/togglePopup');
      this.$store.dispatch('quiz/LAST_STEP');
    },
  },
};
</script>

<style scoped>
.quiz {
  width: 840px;
  display: flex;
  flex-direction: column;
  height: 520px;
  position: relative;
}
.quiz__text-container {
  height: 72px;
}
.quiz__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 40px;
}
.quiz__title_last-step {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 40px;
  text-align: center;
}
.quiz__text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
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
  align-items: center;
  position: absolute;
  bottom: 0;
  justify-content: center;
}
.quiz__input {
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid #e7e7e7;
  margin-top: 74px;
}
.quiz__input_last {
  display: none;
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
.button_last-step {
  align-items: center;
}
@media screen and (max-width: 1439px) {
  .quiz {
    width: 720px;
  }
  .quiz__title {
    font-size: 28px;
    line-height: 32px;
  }
  .quiz__text {
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
  .quiz {
    width: 500px;
  }
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
  .quiz__text {
    font-size: 15px;
    line-height: 19px;
  }
  .quiz__text_additional {
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
    margin-bottom: 30px;
  }
  .quiz__text {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__text_additional {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__input {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__container {
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
