import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../heading';
import './movieCard.scss';

const MovieCard = ({
  banner,
  description,
  title,
  year,
  genre,
  handleEdit,
  handleDelete,
}) => (
  <div className="movie-card">
    <img src={banner} alt={description} />
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

const {
  string,
  func,
} = PropTypes;

MovieCard.propTypes = {
  banner: string.isRequired,
  description: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  genre: string.isRequired,
  handleEdit: func,
  handleDelete: func,
};

export { MovieCard };
