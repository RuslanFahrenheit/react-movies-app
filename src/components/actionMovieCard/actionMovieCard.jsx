import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../input';
import { Button } from '../button';
import { Select } from '../select';
import { genres } from '../../mocked';

const ActionMovieCard = ({
  form,
  submitBtnText = 'submit',
  cancelBtnText = 'cancel',
  handleSubmit,
  handleCancel,
}) => {
  const {
    id,
    title,
    year,
    url,
    overview,
    runtime,
    genre,
  } = form || {};

  return (
    <>
      <Input
        label="title"
        placeholder="Select title"
        type="text"
        value={title || ''}
      />
      <Input
        label="release date"
        placeholder="Select date"
        type="text"
        value={year || ''}
      />
      <Input
        label="movie url"
        placeholder="Movie URL here"
        type="text"
        value={url || ''}
      />
      <Select
        options={genres}
        id={id || ''}
        selected={genre || ''}
        label="genre"
      />
      <Input
        label="overview"
        placeholder="Overview here"
        type="text"
        value={overview || ''}
      />
      <Input
        label="runtime"
        placeholder="Runtime here"
        type="text"
        value={runtime || ''}
      />

      <Button
        variant="secondary"
        onClick={handleSubmit}
      >
        {cancelBtnText}
      </Button>
      <Button
        variant="primary"
        onClick={handleCancel}
      >
        {submitBtnText}
      </Button>
    </>
  );
};

const {
  shape,
  string,
  func,
} = PropTypes;

ActionMovieCard.propTypes = {
  form: shape({
    id: string,
    title: string,
    year: string,
    url: string,
    overview: string,
    runtime: string,
    genre: string,
  }),
  handleSubmit: func,
  handleCancel: func,
  submitBtnText: string,
  cancelBtnText: string,
};

export { ActionMovieCard };
