import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '../select';
import { Input } from '../input';
import { Button } from '../button';

const ActionMovieCard = ({
  form,
  submitBtnText = 'submit',
  cancelBtnText = 'cancel',
  handleSubmit,
  handleCancel,
}) => (
  <>
    {form.map(({
      id,
      label,
      placeholder,
      type,
      options,
    }) => (
      (type === 'select')
        ? (
          <Select
            key={id}
            options={options}
            selectId={id}
            label={label}
          />
        )
        : (
          <Input
            key={id}
            label={label}
            placeholder={placeholder}
            type={type}
          />
        )
    ))}
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

const {
  instanceOf,
  string,
  func,
} = PropTypes;

ActionMovieCard.propTypes = {
  form: instanceOf(Array).isRequired,
  handleSubmit: func,
  handleCancel: func,
  submitBtnText: string,
  cancelBtnText: string,
};

export { ActionMovieCard };
