import {
  SET_MOVIE_PREVIEW,
  CLEAR_MOVIE_PREVIEW,
} from '../actionsTypes';

export const setMoviePreview = (value) => ({ type: SET_MOVIE_PREVIEW, payload: value });
export const clearMoviePreview = (value) => ({ type: CLEAR_MOVIE_PREVIEW, payload: value });
