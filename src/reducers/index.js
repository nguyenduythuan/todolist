import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import taskReducer from './task';
import history from '../utils/history';
import loadingReducer from './ui';
import reduceDarkTheme from './darkTheme';

const rootReducer = combineReducers({
  router: connectRouter(history),
  task: taskReducer,
  loading: loadingReducer,
  dark: reduceDarkTheme,
});

export default rootReducer;
