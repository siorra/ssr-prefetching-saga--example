// import '@babel/polyfill';
// React imports
import React from 'react';
import { render } from 'react-dom';

// app specific imports
import { browserHistory } from 'react-router';
import routes from './routes';
import Root from './Root';
import { configureStore } from 'store';
import root from 'store/sagas';
// import { rootSaga } from 'store/sagas';

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(root);

render(
  <Root
    store={store}
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
