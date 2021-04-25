import { URLS } from '../constants';
import { Home } from '../pages/home';
import { NotFound } from '../pages/notFound';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: Home,
  },
  {
    path: `${URLS.film}/:id`,
    key: 'FILM',
    exact: true,
    component: Home,
  },
  {
    path: `${URLS.notFound}`,
    key: '404',
    exact: true,
    component: NotFound,
  },
];

export { routes };
