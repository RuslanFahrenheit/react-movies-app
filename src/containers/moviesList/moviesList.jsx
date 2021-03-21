import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  moviesList,
  genres,
  sortingOptions,
} from '../../mocked';
import { MovieCard } from '../../components/movieCard';
import { Filter } from '../../components/filter';
import { ModalWindow } from '../../components/modalWindow';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { ActionMovieCard } from '../../components/actionMovieCard';

const MoviesList = ({ setPreview }) => {
  const [movieCard, setMovieToEdit] = useState(null);
  const isEditModalOpened = Boolean(movieCard);

  const openEditModal = (movie) => {
    setMovieToEdit(movie);
  };
  const closeEditModal = () => {
    setMovieToEdit(null);
  };

  const [deleteModalIsOpen, setDeleteIsOpen] = useState(false);

  const openDeleteModal = () => {
    setDeleteIsOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteIsOpen(false);
  };

  const [movies, setData] = useState([...moviesList]);
  const [sortType, setSortType] = useState('genres');

  useEffect(() => {
    // TODO: refactor into reusable function
    const sortArray = (type) => {
      const types = {
        genre: 'genre',
        year: 'year',
      };
      const sortProperty = types[type];
      const sorted = [...movies].sort((a, b) => {
        if (a[sortProperty] < b[sortProperty]) {
          return -1;
        }
        if (a[sortProperty] > b[sortProperty]) {
          return 1;
        }
        return 0;
      });
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  const setMoviePreview = (movie) => {
    setPreview(movie);
  };

  return (
    <>
      <Filter
        genres={genres}
        resultsCount={4}
        sortingOptions={sortingOptions}
        handleSorting={(e) => setSortType(e.target.value)}
      />

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleEdit={() => openEditModal(movie)}
          handleDelete={openDeleteModal}
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
          handleSubmit={closeEditModal}
          handleCancel={closeEditModal}
          submitBtnText="save"
          cancelBtnText="reset"
        />
      </ModalWindow>

      <ModalWindow
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
      >
        <Heading
          title="Delete movie"
          level="h2"
        />
        <p>Are you sure you want to delete this movie?</p>
        <Button
          variant="secondary"
          onClick={closeDeleteModal}
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
};

export { MoviesList };
