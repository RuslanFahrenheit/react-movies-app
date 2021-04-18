import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { filterReducer } from './filterReducer';
import { previewReducer } from './previewReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  filter: filterReducer,
  preview: previewReducer,
});

export { rootReducer };
