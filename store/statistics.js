import axios from 'axios';

export const state = () => ({
  statistics: [],
  staticCard: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchStatistics(state) {
    return axios.get('https://strapi.kruzhok.io/statistics').then(response => {
      return state.commit('setState', {
        name: 'statistics',
        value: response.data,
      });
    });
  },
  fetchStatisticsCard(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/statistics/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'staticCard',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getStatistics(state) {
    return state.statistics;
  },
  getStatisticsCard(state) {
    return state.staticCard;
  },
};
