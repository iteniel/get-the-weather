import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import SearchPage from './containers/SearchPage';
import NotFoundPage from './containers/NotFoundPage.js';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={SearchPage}/>
      <Route path="search" component={SearchPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);