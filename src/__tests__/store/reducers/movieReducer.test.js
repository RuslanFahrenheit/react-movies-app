import { movieReducer as reducer } from '../../../store/reducers/movieReducer';
import { SET_MOVIES } from '../../../store/actionsTypes';

const payload = [
  {
    id: '1',
    year: '2021',
  },
];

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle SET_MOVIES', () => {
    expect(reducer([], {
      type: SET_MOVIES,
      payload,
    })).toEqual(payload);
  });
});
