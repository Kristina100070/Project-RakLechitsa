const QUESTIONS = {
  1: {
    title: 'Шаг 1 из 12',
    text: 'Как вас зовут?',
  },
  2: {
    title: 'Шаг 2 из 12',
    text: 'Было ли у вас онкологическое заболевание?',
    textAdditional:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус.',
  },
  3: {
    title: 'Шаг 3 из 12',
    text: 'Какие занятия приносят Вам наибольшее удовольствие? ',
    textAdditional:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
  },
  4: {
    title: 'Шаг 4 из 12',
    text: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
  },
  5: {
    title: 'Шаг 5 из 12',
    text: 'Какие сильные увлечения у Вас есть? ',
    textAdditional:
      'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
  },
  6: {
    title: 'Шаг 6 из 12',
    text:
      'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
  },
  7: {
    title: 'Шаг 7 из 12',
    text:
      'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно? ',
    textAdditional: 'Кроме необходимых, таких, как чистка зубов.',
  },
  8: {
    title: 'Шаг 8 из 12',
    text:
      'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
  },
  9: {
    title: 'Шаг 9 из 12',
    text: 'Что Вас успокаивает/умиротворяет лучше всего?',
  },
  10: {
    title: 'Шаг 10 из 12',
    text:
      'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
  },
  11: {
    title: 'Шаг 11 из 12',
    text: 'Как вы обычно проводите выходные?',
  },
  12: {
    title: 'Шаг 12 из 12',
    text: 'Почта или телефон для связи. ',
    textAdditional:
      'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
  },
};

export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: QUESTIONS,
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    return (state.answers[currentQuestion] = answer);
  },
  setCurrentQuestion(state, { currentQuestion }) {
    return (state.currentQuestion = currentQuestion);
  },
  setQuestions(state, questions) {
    return (state.questions = questions);
  },
};

export const actions = {
  async NEXT_QUESTION({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion + 1,
    });
  },
  async PREV_QUESTION({ commit, state }) {
    const { currentQuestion } = state;
    if (currentQuestion === 1) {
      return;
    }
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion - 1,
    });
  },
};
