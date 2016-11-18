import React, { PropTypes } from 'react';

import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';
import Link from 'react-router/lib/Link';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import IndexPage from 'routes/IndexPage'
import UserPage from 'routes/UserPage'

export default function({ history }) {
  return (
    <Router history={history}>
      
      <Route path="/" component={IndexPage} />
      <Route path="/user" component={UserPage} />
    </Router>
  );
};