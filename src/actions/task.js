// import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fecthListTask = (params = {}) => ({
  type: taskConstants.FETCH_TASK,
  payload: {
    params,
  },
});

export const fecthListTaskSuccess = data => ({
  type: taskConstants.FETCH_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const fecthListTaskFailed = error => ({
  type: taskConstants.FETCH_TASK_FAILED,
  payload: {
    error,
  },
});

export const filterTask = keyWork => ({
  type: taskConstants.FILTER_TASK,
  keyWork,
});

export const addTask = (title, description) => ({
  type: taskConstants.ADD_TASK,
  payload: {
    title,
    description,
  },
});

export const addTaskSuccess = data => ({
  type: taskConstants.ADD_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskFailed = error => ({
  type: taskConstants.ADD_TASK_FAILED,
  payload: {
    error,
  },
});

export const deleteTask = id => ({
  type: taskConstants.DELETE_TASK,
  payload: {
    id,
  },
});

export const deleteTaskSuccess = () => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
});

export const deleteTaskFaile = error => ({
  type: taskConstants.DELETE_TASK_FAILED,
  payload: {
    error,
  },
});

export const getTaskEdit = item => ({
  type: taskConstants.GET_EDIT_TASK,
  payload: {
    item,
  },
});

export const editTask = item => ({
  type: taskConstants.EDIT_TASK,
  payload: {
    item,
  },
});

export const editTaskSuccess = () => ({
  type: taskConstants.EDIT_TASK_SUCCESS,
});

export const editTaskFaile = error => ({
  type: taskConstants.EDIT_TASK_FAILED,
  payload: {
    error,
  },
});

// export const fecthListTaskRequest = () => dispatch => {
//   dispatch(fecthListTask());
//   taskApis
//     .getList()
//     .then(response => {
//       dispatch(fecthListTaskSuccess(response.data));
//     })
//     .catch(err => {
//       dispatch(fecthListTaskFailed(err));
//     });
// };
