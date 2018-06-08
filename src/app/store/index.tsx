import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

let resCompose: any;

try {
  resCompose = compose(
    applyMiddleware(
      sagaMiddleware
    ),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
} catch (e) {
  resCompose = compose(
    applyMiddleware(
      sagaMiddleware
    ),
  );
}

export function configureStore(initialState?: any) {
  console.log('called configureStore');

  const store = createStore(
    rootReducer,
    initialState,
    resCompose
  ) as any;

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}

export const store = configureStore();
