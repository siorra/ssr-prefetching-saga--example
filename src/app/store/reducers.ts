import { combineReducers } from 'redux';
import { ActionTypes, AllActions, Category, Item } from './actions';


export type TInitialState = {
  categories: Category[];
  items: Item[];
};

export const initialState = {
  categories: [] as Category[],
  items: [] as Item[],
};


function dataReducer(state: TInitialState = initialState, action: AllActions) {
  switch (action.type) {
    case ActionTypes.LOAD_CATEGORIES:
      console.log('store reducers, Category LOAD_CATEGORIES, state before and state after = ', state);
      return state;
    case ActionTypes.LOAD_CATEGORIES_SUCCESS:
      // console.log('store reducers, Category LOAD_CATEGORIES_SUCCESS, state after = ', action.payload);
      console.log('store reducers, Category LOAD_CATEGORIES_SUCCESS, state after = ');
      return { ...state, categories: action.payload };

    case ActionTypes.LOAD_ITEMS:
      console.log('store reducers, Category LOAD_ITEMS, state before and state after = ', state);
      return state;
    case ActionTypes.LOAD_ITEMS_SUCCESS:
      console.log('store reducers, Category LOAD_ITEMS_SUCCESS, state after = ', action.payload);
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;
