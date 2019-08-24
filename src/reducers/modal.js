import * as type from '../constants/modal';

const initialState = {
  showModal: false,
  title: '',
  component: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case type.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case type.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    }
    case type.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
