import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import taskReducer from './task';
import history from '../utils/history';
import loadingReducer from './ui';
import reduceDarkTheme from './darkTheme';
import modalReducers from './modal';

const rootReducer = combineReducers({
  router: connectRouter(history),
  task: taskReducer,
  loading: loadingReducer,
  dark: reduceDarkTheme,
  modal: modalReducers,
});

export default rootReducer;
