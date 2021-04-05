import {
  SET_SORT_BY,
  SET_FILTER_BY,
  CLEAR_FILTER,
} from '../actionsTypes';

export const setSortBy = (value) => ({ type: SET_SORT_BY, payload: value });
export const setFilterBy = (value) => ({ type: SET_FILTER_BY, payload: value });
export const clearFilter = (value) => ({ type: CLEAR_FILTER, payload: value });
