export const state = () => ({
  PopupShown: false,
});

//меняем состояние state

export const mutations = {
  togglePopup(state) {
    return (state.PopupShown = !state.PopupShown);
  },
};

//получаем данные о состоянии state

export const getters = {
  getPopupShown(state) {
    return state.PopupShown;
  },
};
