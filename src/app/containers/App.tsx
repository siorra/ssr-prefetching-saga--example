/* eslint-disable */

import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionTypes } from 'store/actions';
import { Link } from 'react-router';

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

class App extends React.PureComponent<Props, State> {
  render() {
    console.log('container App, render');
    return (
      <div>
        <h1>
          App render
        </h1>
        <div style={{padding: '20px 0'}}>
          <Link style={{marginRight: '20px'}} to="/categories">Categories</Link>
          <Link to="/items">Items</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(App);
