import {
  SET_MOVIE_PREVIEW,
  CLEAR_MOVIE_PREVIEW,
} from '../actionsTypes';

const previewReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MOVIE_PREVIEW:
      return action.payload;
    case CLEAR_MOVIE_PREVIEW:
      return {};
    default:
      return state;
  }
};

export { previewReducer };
