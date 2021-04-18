import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { NotFound } from '../pages/notFound';

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
      <Route component={() => <NotFound />} />
    </Switch>
  </>
);

export { RouteWithSubRoutes, Routes };
