import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../heading';
import './movieCard.scss';

const MovieCard = ({
  movie,
  handleEdit,
  handleDelete,
  handleClick,
}) => {
  const {
    banner,
    description,
    genre,
    title,
    year,
  } = movie;

  return (
    <div className="movie-card">
      <button
        type="button"
        onClick={handleClick}
      >
        <img src={banner} alt={description} />
      </button>
      <div className="movie-card__heading-holder">
        <button
          type="button"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        <Heading level="h6" title={title} />
        <span className="movie-card__year">{year}</span>
      </div>
      <p className="movie-card__genre">{genre}</p>
    </div>
  );
};

const {
  string,
  func,
  shape,
} = PropTypes;

MovieCard.propTypes = {
  movie: shape({
    banner: string.isRequired,
    description: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    genre: string.isRequired,
  }),
  handleEdit: func,
  handleDelete: func,
  handleClick: func,
};

export { MovieCard };
