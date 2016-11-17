import React, { PropTypes } from 'react';

import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';
import Link from 'react-router/lib/Link';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import RoutePage from 'routes/RoutePage'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={RoutePage} />
    </Router>
  );
};