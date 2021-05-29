import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'qs';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { URLS } from '../../constants';
import { getCurrentBasePath } from '../../utils/helpers';
import {
  fetchMovies,
  editMovieItem,
  deleteMovieItem,
} from '../../store/actions/movies';
import {
  setSortBy,
  setFilterBy,
  clearFilter,
} from '../../store/actions/filters';
import { setMoviePreview } from '../../store/actions/preview';
import {
  genres,
  sortingOptions,
} from '../../mocked';
import { MovieCard } from '../../components/movieCard';
import { Filter } from '../../components/filter';
import { ModalWindow } from '../../components/modalWindow';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { ActionMovieCard } from '../../components/actionMovieCard';
import { NoMoviesFound } from '../../components/noMoviesFound';

const mapStateToProps = (state) => {
  const { movie, filter } = state;
  return { movie, filter };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDataMovies: (params) => dispatch(fetchMovies(params)),
  editDataMovie: (movieId, movie) => dispatch(editMovieItem(movieId, movie)),
  deleteDataMovie: (movieId) => dispatch(deleteMovieItem(movieId)),
  setSortByData: (params) => dispatch(setSortBy(params)),
  setFilterByData: (params) => dispatch(setFilterBy(params)),
  clearFilterData: () => dispatch(clearFilter()),
  setMoviePreviewData: (movie) => dispatch(setMoviePreview(movie)),
});

// PATTERN: Container Component
// The container does data fetching and then renders its sub-components.
export const MoviesList = ({
  fetchDataMovies,
  editDataMovie,
  deleteDataMovie,
  setSortByData,
  setFilterByData,
  clearFilterData,
  setMoviePreviewData,
}) => {
  const [movieCard, setMovieToEdit] = useState(null);
  const isEditModalOpened = Boolean(movieCard);

  const openEditModal = (movie) => {
    setMovieToEdit(movie);
  };
  const closeEditModal = () => {
    setMovieToEdit(null);
  };

  const handleEditMovie = async (movie) => {
    await editDataMovie(movie.id, movie);
    closeEditModal();
  };

  const [movieCardToDelete, setMovieToDelete] = useState(null);
  const isDeleteModalOpened = Boolean(movieCardToDelete);

  const openDeleteModal = (movie) => {
    setMovieToDelete(movie);
  };
  const closeDeleteModal = () => {
    setMovieToDelete(null);
  };
  const handleDeleteMovie = () => {
    deleteDataMovie(movieCardToDelete.id);
    closeDeleteModal();
  };

  const movies = useSelector((state) => state.movies);

  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const handleMoviePreview = (movie) => {
    history.push(`${URLS.film}/${movie.id}`);
  };

  const basePath = getCurrentBasePath(location);

  useEffect(() => {
    if (basePath === URLS.film && movies.length) {
      const selectedMovie = movies.filter((movie) => movie.id === id)[0];
      setMoviePreviewData(selectedMovie);
    } else {
      setMoviePreviewData({});
    }
  });

  const searchParams = useSelector((state) => state.filter);

  const handleSorting = (value) => {
    setSortByData(value);
  };

  const handleFiltering = (value) => {
    setFilterByData(value);
  };

  const handleResetFilter = () => {
    clearFilterData();
  };

  const searchParamsFromURL = qs.parse(location.search, { ignoreQueryPrefix: true }).search;

  useEffect(() => {
    if (!searchParamsFromURL) {
      fetchDataMovies(searchParams);
    }
  }, [searchParams]);

  return (
    <>
      <Filter
        genres={genres}
        resultsCount={movies.length}
        sortingOptions={sortingOptions}
        handleSorting={handleSorting}
        handleFiltering={handleFiltering}
        handleResetFilter={handleResetFilter}
      />

      {
        movies.length
          ? movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleEdit={() => openEditModal(movie)}
              handleDelete={() => openDeleteModal(movie)}
              handleClick={() => handleMoviePreview(movie)}
            />
          )) : <NoMoviesFound />
      }

      <ModalWindow
        isOpen={isEditModalOpened}
        onRequestClose={closeEditModal}
      >
        <p>Movie ID</p>
        <p>ID MOVIE</p>
        <ActionMovieCard
          form={movieCard}
          handleSubmit={handleEditMovie}
          handleCancel={closeEditModal}
          submitBtnText="save"
          cancelBtnText="reset"
        />
      </ModalWindow>

      <ModalWindow
        isOpen={isDeleteModalOpened}
        onRequestClose={closeDeleteModal}
      >
        <Heading
          title="Delete movie"
          level="h2"
        />
        <p>Are you sure you want to delete this movie?</p>
        <Button
          variant="secondary"
          onClick={handleDeleteMovie}
        >
          Confirm
        </Button>
      </ModalWindow>
    </>
  );
};

const {
  func,
} = PropTypes;

MoviesList.propTypes = {
  fetchDataMovies: func,
  editDataMovie: func,
  deleteDataMovie: func,
  setSortByData: func,
  setFilterByData: func,
  clearFilterData: func,
  setMoviePreviewData: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
