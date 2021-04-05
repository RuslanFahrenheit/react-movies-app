import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  filter: filterReducer,
});

export { rootReducer };
