import * as typeUi from '../constants/ui';

export const showLoading = () => ({
  type: typeUi.SHOW_LOADING,
});

export const closeLoading = () => ({
  type: typeUi.CLOSE_LOADING,
});
