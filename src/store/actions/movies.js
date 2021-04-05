import {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
} from '../../utils/api';
import { SET_MOVIES } from '../actionsTypes';

export const setMovies = (value) => ({ type: SET_MOVIES, payload: value });

export const fetchMovies = (params) => async (dispatch) => {
  const { data } = await getMovies(params);
  dispatch(setMovies(data));
};

export const addMovieItem = (movie) => async (dispatch, getState) => {
  const currentFilterOptions = getState().filter;
  await addMovie(movie);
  const { data } = await getMovies(currentFilterOptions);
  dispatch(setMovies(data));
};

export const editMovieItem = (movieId, movie) => async (dispatch, getState) => {
  const currentFilterOptions = getState().filter;
  await editMovie(movieId, movie);
  const { data } = await getMovies(currentFilterOptions);
  dispatch(setMovies(data));
};

export const deleteMovieItem = (movieId) => async (dispatch, getState) => {
  const currentFilterOptions = getState().filter;
  await deleteMovie(movieId);
  const { data } = await getMovies(currentFilterOptions);
  dispatch(setMovies(data));
};
