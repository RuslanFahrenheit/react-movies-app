import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6068771f0add490017340103.mockapi.io/api/v1/',
  responseType: 'json',
});

export const getMovies = (params) => api.get('/movies', { params });

export const addMovie = (movie) => api.post('/movies', { ...movie });

export const editMovie = (movieId, movie) => api.put(`/movies/${movieId}`, { ...movie });

export const deleteMovie = (movieId) => api.delete(`/movies/${movieId}`);
