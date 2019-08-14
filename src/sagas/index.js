import { fork, take, call, put } from 'redux-saga/effects';
import * as type from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants/index';
import { fecthListTaskSuccess, fecthListTaskFailed } from '../actions/task';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(type.FETCH_TASK);
    const resp = yield call(getList);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fecthListTaskSuccess(data));
    } else {
      yield put(fecthListTaskFailed(data));
    }
  }
}

function* watchCreateTaskAction() {
  console.log('create task');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
