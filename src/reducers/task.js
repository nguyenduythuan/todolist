import * as type from '../constants/task';
import { toasError } from '../commons/toasHelper';

const initialState = {
  listTask: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case type.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: [...action.payload.data],
      };
    case type.FETCH_TASK_FAILED:
      toasError(action.payload.error);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
