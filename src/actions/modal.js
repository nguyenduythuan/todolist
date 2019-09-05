import * as type from '../constants/modal';

export const showModal = () => ({
  type: type.SHOW_MODAL,
});

export const hideModal = () => ({
  type: type.HIDE_MODAL,
});

export const getModalTitle = title => ({
  type: type.CHANGE_MODAL_TITLE,
  payload: {
    title,
  },
});

export const getModalContent = component => ({
  type: type.CHANGE_MODAL_CONTENT,
  payload: {
    component,
  },
});
