import MoviesPage from './components/movies/';
import EditMovie from './components/movies/edit-movie';

const routes = [
  {
    ...MoviesPage,
    path: '/',
    exact: true,
  },
  {
    ...MoviesPage,
    path: '/movies',
  },
  {
    path: '/movie/:id',
    component: EditMovie,
  },
];

export default routes;
