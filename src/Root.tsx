import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, RouterContext } from 'react-router';


export default class Root extends Component<any, any> {
  render() {
    const { store, history, routes, type, renderProps } = this.props;

    return (
      <Provider store={store}>
        {type === 'server' ? <RouterContext {...renderProps} /> : <Router history={history} routes={routes} />}
      </Provider>
    );
  }
}