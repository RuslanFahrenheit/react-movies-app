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
}) => (
  <div className="movie-card">
    <img src={banner} alt={description} />
    <div className="movie-card__heading-holder">
      <Heading level="h6" title={title} />
      <span className="movie-card__year">{year}</span>
    </div>
    <p className="movie-card__genre">{genre}</p>
  </div>
);

MovieCard.propTypes = {
  banner: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export { MovieCard };
