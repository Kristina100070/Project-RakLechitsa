export const state = () => ({
  PopupShown: false,
  PopupFormShown: false,
  PopupLinksShown: false,
});

export const mutations = {
  togglePopup(state) {
    return (state.PopupShown = !state.PopupShown);
  },
  togglePopupForm(state) {
    return (state.PopupFormShown = !state.PopupFormShown);
  },
  togglePopupLinks(state) {
    return (state.PopupLinksShown = !state.PopupLinksShown);
  },
};

export const getters = {
  getPopupShown(state) {
    return state.PopupShown;
  },
  getPopupFormShown(state) {
    return state.PopupFormShown;
  },
  getPopupLinksShown(state) {
    return state.PopupLinksShown;
  },
};
