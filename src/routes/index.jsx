import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';
import { URLS } from '../constants';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

const Routes = () => (
  <>
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Route render={() => <Redirect to={URLS.notFound} />} />
    </Switch>
  </>
);

export { RouteWithSubRoutes, Routes };
