import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchMovies,
  editMovieItem,
  deleteMovieItem,
} from '../../store/actions/movies';
import {
  setSortBy,
} from '../../store/actions/filters';
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

const mapStateToProps = (state) => {
  const { movie, filter } = state;
  return { movie, filter };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDataMovies: (params) => dispatch(fetchMovies(params)),
  editDataMovie: (params) => dispatch(editMovieItem(params)),
  deleteDataMovie: (params) => dispatch(deleteMovieItem(params)),
  setSortByData: (params) => dispatch(setSortBy(params)),
});

export const MoviesList = ({
  setPreview,
  fetchDataMovies,
  editDataMovie,
  deleteDataMovie,
  setSortByData,
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
    await editDataMovie(movie);
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
    deleteDataMovie(movieCardToDelete);
    closeDeleteModal();
  };

  const movies = useSelector((state) => state.movies);

  const setMoviePreview = (movie) => {
    setPreview(movie);
  };

  const searchParams = useSelector((state) => state.filter);

  const handleSorting = (value) => {
    setSortByData(value);
  };

  useEffect(() => {
    fetchDataMovies(searchParams);
  }, [searchParams]);

  return (
    <>
      <Filter
        genres={genres}
        resultsCount={4}
        sortingOptions={sortingOptions}
        handleSorting={handleSorting}
      />

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleEdit={() => openEditModal(movie)}
          handleDelete={() => openDeleteModal(movie)}
          handleClick={() => setMoviePreview(movie)}
        />
      ))}

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
  setPreview: func,
  fetchDataMovies: func,
  editDataMovie: func,
  deleteDataMovie: func,
  setSortByData: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
