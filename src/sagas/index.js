import {
  fork,
  take,
  call,
  put,
  delay,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import * as type from '../constants/task';
import { getList, addTask, deleteTaskApi, editTaskApi } from '../apis/task';
import { STATUS_CODE, STATUSES } from '../constants/index';
import {
  fecthListTask,
  fecthListTaskSuccess,
  fecthListTaskFailed,
  addTaskSuccess,
  addTaskFailed,
  deleteTaskFaile,
  deleteTaskSuccess,
  editTaskSuccess,
  editTaskFaile,
} from '../actions/task';
import { showLoading, closeLoading } from '../actions/uj';
import { hideModal } from '../actions/modal';

function* watchFetchListTaskAction() {
  while (true) {
    try {
      const action = yield take(type.FETCH_TASK);
      yield put(showLoading());
      const { params } = action.payload;
      const resp = yield call(getList, params);
      const { data, status } = resp;
      if (status === STATUS_CODE.SUCCESS) {
        yield put(fecthListTaskSuccess(data));
      }
    } catch (error) {
      yield put(fecthListTaskFailed(error));
    }
    yield delay(1000);
    yield put(closeLoading());
  }
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading);
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].id,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(closeLoading());
}

function* filterTaskAction(payload) {
  yield delay(500);
  const { keyWork } = payload;
  yield put(fecthListTask({ q: keyWork }));
}

function* deleteTaskAction({ payload }) {
  const { id } = payload;
  const resp = yield call(deleteTaskApi, id);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess());
    yield put(fecthListTask());
  } else {
    yield put(deleteTaskFaile(data));
  }
}

function* editTaskAction({ payload }) {
  const { item } = payload;
  const resp = yield call(editTaskApi, item);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(editTaskSuccess());
    yield put(hideModal());
    yield put(fecthListTask());
  } else {
    yield put(editTaskFaile(data));
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeEvery(type.ADD_TASK, addTaskSaga);
  yield takeLatest(type.FILTER_TASK, filterTaskAction);
  yield takeLatest(type.DELETE_TASK, deleteTaskAction);
  yield takeLatest(type.EDIT_TASK, editTaskAction);
}

export default rootSaga;
