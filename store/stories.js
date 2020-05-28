import axios from 'axios';

export const state = () => ({
  stories: [],
  currentStory: {},
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
  fetchStoryWithId(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          title: 'currentStory',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getStories(state) {
    return state.stories;
  },
  getCurrentStory(state) {
    return state.currentStory;
  },
};
