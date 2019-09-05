import * as type from '../constants/task';
import { toasError } from '../commons/toasHelper';

export const initialState = {
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
    case type.ADD_TASK:
      return {
        ...state,
      };
    case type.ADD_TASK_SUCCESS:
      return {
        ...state,
        listTask: [action.payload.data].concat(state.listTask),
      };
    case type.ADD_TASK_FAILED:
      toasError(action.payload.error);
      return {
        ...state,
      };
    case type.DELETE_TASK_SUCCESS:
      return {
        ...state,
      };
    case type.DELETE_TASK_FAILED:
      toasError(action.payload.error);
      return {
        ...state,
      };
    case type.GET_EDIT_TASK:
      return {
        ...state,
        taskEdit: action.payload.item,
      };
    case type.EDIT_TASK_FAILED:
      toasError(action.payload.error);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
