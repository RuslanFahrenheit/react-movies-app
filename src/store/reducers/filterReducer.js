import { SET_SORT_BY } from '../actionsTypes';

const initialState = {
  sortBy: 'year',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      const filter = {
        sortBy: action.payload,
      };
      return { ...state, ...filter };
    }
    default:
      return state;
  }
};

export { filterReducer };
