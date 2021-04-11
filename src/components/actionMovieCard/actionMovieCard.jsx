import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { Input } from '../input';
import { Button } from '../button';
import { Select } from '../select';
import { genres } from '../../mocked';
import './actionMovieCard.scss';

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

  const [validationErrors, setValidationErrors] = useState({});

  const formik = useFormik({
    initialValues: {
      id,
      title,
      year,
      url,
      overview,
      runtime,
      genre,
    },
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = 'The title field is required.';
      }
      if (!values.year) {
        errors.year = 'The title field is required.';
      }
      if (!values.url) {
        errors.url = 'The title field is required.';
      }
      if (!values.overview) {
        errors.overview = 'The title field is required.';
      }
      if (!values.runtime) {
        errors.runtime = 'The title field is required.';
      }

      setValidationErrors(errors);

      return errors;
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="title"
          label="title"
          placeholder="Select title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {validationErrors.title && (
          <p className="error">{validationErrors.title}</p>
        )}
        <Input
          name="year"
          label="release date"
          placeholder="Select date"
          type="text"
          value={formik.values.year}
          onChange={formik.handleChange}
        />
        {validationErrors.year && (
          <p className="error">{validationErrors.year}</p>
        )}
        <Input
          name="url"
          label="movie url"
          placeholder="Movie URL here"
          type="text"
          value={formik.values.url}
          onChange={formik.handleChange}
        />
        {validationErrors.url && (
          <p className="error">{validationErrors.url}</p>
        )}
        <Select
          options={genres}
          id={id || ''}
          selected={formik.values.genre}
          onChange={formik.handleChange}
          label="genre"
        />
        <Input
          name="overview"
          label="overview"
          placeholder="Overview here"
          type="text"
          value={formik.values.overview}
          onChange={formik.handleChange}
        />
        {validationErrors.overview && (
          <p className="error">{validationErrors.overview}</p>
        )}
        <Input
          name="runtime"
          label="runtime"
          placeholder="Runtime here"
          type="text"
          value={formik.values.runtime}
          onChange={formik.handleChange}
        />
        {validationErrors.runtime && (
          <p className="error">{validationErrors.runtime}</p>
        )}

        <Button
          variant="secondary"
          onClick={handleCancel}
        >
          {cancelBtnText}
        </Button>
        <Button
          variant="primary"
          type="submit"
        >
          {submitBtnText}
        </Button>
      </form>
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
