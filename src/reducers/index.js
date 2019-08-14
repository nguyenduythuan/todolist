import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import taskReducer from './task';
import history from '../utils/history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  task: taskReducer,
});

export default rootReducer;
