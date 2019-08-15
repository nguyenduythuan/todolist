import * as type from '../constants/darkTheme';

const initialState = {
  darkTheme: JSON.parse(localStorage.getItem('darkTheme')),
  showDrawer: true,
};

const reduceDarkTheme = (state = initialState, action) => {
  switch (action.type) {
    case type.DARK_THEME:
      localStorage.setItem('darkTheme', !state.darkTheme);
      return {
        ...state,
        darkTheme: JSON.parse(localStorage.getItem('darkTheme')),
      };
    case type.SHOW_DRAWER:
      return { ...state, showDrawer: !state.showDrawer };
    default:
      return state;
  }
};

export default reduceDarkTheme;
