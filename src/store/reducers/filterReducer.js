import {
  SET_SORT_BY,
  SET_FILTER_BY,
  CLEAR_FILTER,
} from '../actionsTypes';

const initialState = {
  sortBy: 'year',
  filter: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      const filter = {
        sortBy: action.payload,
      };
      return { ...state, ...filter };
    }
    case SET_FILTER_BY: {
      const { sortBy } = state;
      const filter = {
        filter: action.payload,
        sortBy,
      };
      return { ...state, ...filter };
    }
    case CLEAR_FILTER: {
      const { sortBy } = state;
      const filter = {
        filter: '',
        sortBy,
      };
      return { ...state, ...filter };
    }
    default:
      return state;
  }
};

export { filterReducer };
