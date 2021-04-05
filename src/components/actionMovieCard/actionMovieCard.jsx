import React, { useState } from 'react';
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
  const [formData, updateFormData] = useState(form);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Input
        name="title"
        label="title"
        placeholder="Select title"
        type="text"
        value={title || ''}
        onChange={handleChange}
      />
      <Input
        name="year"
        label="release date"
        placeholder="Select date"
        type="text"
        value={year || ''}
        onChange={handleChange}
      />
      <Input
        name="url"
        label="movie url"
        placeholder="Movie URL here"
        type="text"
        value={url || ''}
        onChange={handleChange}
      />
      <Select
        options={genres}
        id={id || ''}
        selected={genre || ''}
        label="genre"
      />
      <Input
        name="overview"
        label="overview"
        placeholder="Overview here"
        type="text"
        value={overview || ''}
        onChange={handleChange}
      />
      <Input
        name="runtime"
        label="runtime"
        placeholder="Runtime here"
        type="text"
        value={runtime || ''}
        onChange={handleChange}
      />

      <Button
        variant="secondary"
        onClick={handleCancel}
      >
        {cancelBtnText}
      </Button>
      <Button
        variant="primary"
        onClick={() => handleSubmit(formData)}
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
