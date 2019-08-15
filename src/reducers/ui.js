import * as typeUi from '../constants/ui';

const initialState = {
  showLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeUi.SHOW_LOADING:
      return { showLoading: true };
    case typeUi.CLOSE_LOADING:
      return { showLoading: false };
    default:
      return { ...state };
  }
};

export default loadingReducer;
