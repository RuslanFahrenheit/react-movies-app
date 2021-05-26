import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchMovies } from '../../../store/actions/movies';
import { SET_MOVIES } from '../../../store/actionsTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResult = [{
  id: '5',
  banner: 'http://placehold.jp/250x300.png',
  title: 'Berkshire',
  year: '2021-01-19T08:52:55.688Z',
  genre: 'comedy',
  url: 'http://shanelle.name',
  overview: 'synthesize transmitter',
  runtime: 'Coves California asynchronous',
  duration: 'duration 5',
  description: 'mobile innovate',
}];

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch movies', () => {
    fetchMock.getOnce('/api/v1/movies', mockResult);

    const expectedActions = [
      {
        type: SET_MOVIES,
        payload: mockResult,
      },
    ];
    const store = mockStore([]);

    return store.dispatch(fetchMovies('', 'BERKSHIRE')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
