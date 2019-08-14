import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
    : compose;

export default function configureStore() {
  const middlewares = [thunk];
  const composeMiddleware = [applyMiddleware(...middlewares)];
  const store = createStore(
    rootReducer,
    composeEnhancers(...composeMiddleware),
  );

  return store;
}
