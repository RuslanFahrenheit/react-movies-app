import {
  SET_SORT_BY,
  SET_FILTER_BY,
} from '../actionsTypes';

export const setSortBy = (value) => ({ type: SET_SORT_BY, payload: value });
export const setFilterBy = (value) => ({ type: SET_FILTER_BY, payload: value });
