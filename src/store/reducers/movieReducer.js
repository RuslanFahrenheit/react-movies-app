import { SET_MOVIES } from '../actionsTypes';

const movieReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
};

export { movieReducer };
