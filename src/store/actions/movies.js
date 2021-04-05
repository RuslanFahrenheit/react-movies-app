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

export const addMovieItem = (movie) => async (dispatch) => {
  const { data } = await addMovie(movie);
  dispatch(setMovies(data));
};

export const editMovieItem = (movie) => async (dispatch) => {
  const { data } = await editMovie(movie);
  dispatch(setMovies(data));
};

export const deleteMovieItem = (movie) => async (dispatch) => {
  const { data } = await deleteMovie(movie);
  dispatch(setMovies(data));
};
