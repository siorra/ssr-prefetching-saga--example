
import { take, put, fork, all } from 'redux-saga/effects';

import axios from 'axios';
import { ActionTypes, Category, Item } from 'store/actions';


function* loadCategories() {
  console.log('******** saga - loadCategories load action');
  console.log('store saga loadCategories pre');
  const result = yield axios.get(`http://rti-ck.kz/rti_cat.php`);
  // console.log('store saga loadCategories after axios', result.data);

  yield put({
    type: ActionTypes.LOAD_CATEGORIES_SUCCESS,
    payload: result.data.map((category: Category) => ({ id: category.id, name: category.name }))
  });
  console.log('store saga loadCategories after put LOAD_CATEGORIES_SUCCESS');

  yield take(ActionTypes.LOAD_CATEGORIES_SUCCESS);
  console.log('store saga loadCategories after take LOAD_CATEGORIES_SUCCESS');
}

function* loadItems() {
  console.log('store saga loadItems pre');
  const result = yield axios.get(`http://rti-ck.kz/rti_items.php`);
  // const result = yield axios.get(`http://rti-ck.kz/rti_items100.php`);
  console.log('store saga loadItems after axios', result.data);

  yield put({
    type: ActionTypes.LOAD_ITEMS_SUCCESS,
    payload: result.data.map((item: Item) => ({ id: item.id, name: item.name }))
  });
  console.log('store saga loadItems after put LOAD_ITEMS_SUCCESS');

  yield take(ActionTypes.LOAD_ITEMS_SUCCESS);
  console.log('store saga loadItems after take LOAD_ITEMS_SUCCESS');
}


function* watchLoadCategories() {
  while (true) {
    yield take(ActionTypes.LOAD_CATEGORIES);
    yield fork(loadCategories);
  }
}
function* watchLoadItems() {
  while (true) {
    yield take(ActionTypes.LOAD_ITEMS);
    yield fork(loadItems);
  }
}


export default function* root() {
  console.log('store saga root pre');
  yield all([
    fork(watchLoadCategories),
    fork(watchLoadItems),
  ]);

  // console.log('store saga root pre loadCategories');
  // yield fork(loadCategories);

  // console.log('store saga root pre LOAD_CATEGORIES_SUCCESS');
  // yield take(ActionTypes.LOAD_CATEGORIES_SUCCESS);
  console.log('store saga root after');
}
