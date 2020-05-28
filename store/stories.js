import axios from 'axios';

export const state = () => ({
  stories: [],
  currentStories: {},
});

export const mutations = {
  setState(state, { name, value }) {
    state[name] = value;
  },
};

export const actions = {
  fetchStories(state) {
    return axios.get(process.env.baseUrl + '/stories').then(response => {
      return state.commit('setState', {
        name: 'stories',
        value: response.data,
      });
    });
  },
  fetchStoriesWithId(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          title: 'currentStories',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getStories(state) {
    return state.stories;
  },
  getCurrentLesson(state) {
    return state.currentStories;
  },
};
