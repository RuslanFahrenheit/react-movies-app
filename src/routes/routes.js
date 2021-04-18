import {
  Home,
} from '../pages/home';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: Home,
  },
  {
    path: '/film/:id',
    key: 'FILM',
    exact: true,
    component: Home,
  },
];

export { routes };
