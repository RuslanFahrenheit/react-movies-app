import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6068771f0add490017340103.mockapi.io/api/v1/',
  responseType: 'json',
});

export const getMovies = (params) => api.get('/movies', { params });

export const addMovie = (movie) => api.post('/movies', { ...movie });

export const editMovie = (movie) => api.put('/movies', { ...movie });

export const deleteMovie = (movie) => api.delete('/movies', { data: { ...movie } });
