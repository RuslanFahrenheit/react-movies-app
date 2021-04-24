import {
  Home,
} from '../pages/home';
import { URLS } from '../constants';

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
];

export { routes };
