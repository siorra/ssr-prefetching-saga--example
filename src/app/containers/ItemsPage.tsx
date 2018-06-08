/* eslint-disable */

import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionTypes, Item } from 'store/actions';

type StateProps = {
  items: Item[];
};
type DispatchProps = {
  loadItems: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class ItemsPage extends React.Component<Props, State> {

  static getDerivedStateFromProps({loadItems, items}: Props) {
    if (items.length === 0) {
      console.log('******** ItemsPage componentDidMount load action');
      loadItems();
    }
    return {};
  }

  render() {
    const { items } = this.props;
    console.log('container ItemsPage, render this.props.category', items);

    return (
      <div>
        <h1>
          ItemsPage render
        </h1>
        <div>
          <p>Items</p>
          {items && items.map((item: Item) => <div key={item.id}>{`${item.id} ${item.name},`}</div>)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  items: state.data.items,
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadItems: () => {
      console.log('container ItemsPage, pre ACTION LOAD_ITEMS Called!');
      dispatch({ type: ActionTypes.LOAD_ITEMS });
      console.log('container ItemsPage, after ACTION LOAD_ITEMS Called!');
    }
  };
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ItemsPage);
