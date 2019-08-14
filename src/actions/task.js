// import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fecthListTask = () => ({
  type: taskConstants.FETCH_TASK,
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
