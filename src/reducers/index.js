import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as fromReducer } from 'redux-form';

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
  form: fromReducer,
});

export default rootReducer;
