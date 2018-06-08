export enum ActionTypes {
  LOAD_CATEGORIES = '[Categories] Load categories',
  LOAD_CATEGORIES_SUCCESS = '[Categories] Load categories success',
  LOAD_CATEGORIES_FAIL = '[Categories] Load categories fail',

  LOAD_ITEMS = '[Items] Load items',
  LOAD_ITEMS_SUCCESS = '[Items] Load items success',
  LOAD_ITEMS_FAIL = '[Items] Load items fail',
}


export type Category = {
  id: string;
  name: string;
};

export type Item = {
  id: string;
  name: string;
};


export type CategoriesAction = {
  type: ActionTypes.LOAD_CATEGORIES;
};
export type CategoriesActionSuccess = {
  type: ActionTypes.LOAD_CATEGORIES_SUCCESS;
  payload: Category[];
};

export type ItemsAction = {
  type: ActionTypes.LOAD_ITEMS;
};
export type ItemsActionSuccess = {
  type: ActionTypes.LOAD_ITEMS_SUCCESS;
  payload: Item[];
};

export type AllActions = CategoriesAction
  | CategoriesActionSuccess
  | ItemsAction
  | ItemsActionSuccess;