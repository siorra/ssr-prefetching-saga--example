import React from 'react';
import { Route } from 'react-router';
import App from 'containers/App';
import CategoriesPage from 'containers/CategoriesPage';
import ItemsPage from 'containers/ItemsPage';

export default (
  <Route path="/" component={App}>
    <Route path="/categories" component={CategoriesPage} />
    <Route path="/items" component={ItemsPage} />
  </Route>
);
