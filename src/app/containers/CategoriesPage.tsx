/* eslint-disable */

import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionTypes, Category } from 'store/actions';

type StateProps = {
  categories: Category[];
};
type DispatchProps = {
  loadCategories: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class CategoriesPage extends React.Component<Props, State> {
  static getDerivedStateFromProps({loadCategories, categories}: Props) {
    if (categories.length === 0) {
      console.log('******** CategoriesPage componentDidMount load action');
      loadCategories();
    }
    return {};
  }

  render() {
    const { categories } = this.props;
    console.log('container CategoriesPage, render this.props.category', categories);

    return (
      <div>
        <h1>
          CategoriesPage render
        </h1>
        <div>
          <p>Categories</p>
          {categories && categories.map((item: Category) => <div key={item.id}>{`${item.id} ${item.name},`}</div>)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  categories: state.data.categories,
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadCategories: () => {
      console.log('container CategoriesPage, pre ACTION LOAD_CATEGORIES Called!');
      dispatch({ type: ActionTypes.LOAD_CATEGORIES });
      console.log('container CategoriesPage, after ACTION LOAD_CATEGORIES Called!');
    }
  };
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(CategoriesPage);
