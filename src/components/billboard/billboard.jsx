import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button } from '../button';
import './billboard.scss';

const Billboard = ({
  children,
  preview,
  resetPreview,
}) => {
  const {
    banner,
    title,
    year,
    duration,
    description,
  } = preview || {};
  const [moviePreview, setMoviePreview] = useState(preview);
  const hasMoviePreview = !_.isEmpty(moviePreview);

  useEffect(() => {
    setMoviePreview(preview);
  }, [preview]);

  const hidePreview = () => {
    setMoviePreview(null);
    resetPreview(null);
  };

  return (
    <div className="billboard">
      {
        hasMoviePreview ? (
          <div className="billboard__preview">
            <Button
              additionalClass="billboard__back-btn"
              variant="action"
              onClick={hidePreview}
            >
              Go Back
            </Button>

            <div className="billboard__preview-holder">
              <div className="billboard__preview-image">
                <img
                  src={banner}
                  width="250"
                  height="300"
                  alt="description"
                />
              </div>
              <div className="billboard__preview-info">
                <h2 className="billboard__preview-title">{title}</h2>
                <span className="billboard__preview-year">{year}</span>
                <span className="billboard__preview-duration">{duration}</span>
                <p>{description}</p>
              </div>
            </div>
          </div>
        ) : (
          <>{ children }</>
        )
      }
    </div>
  );
};

const {
  string,
  element,
  node,
  oneOfType,
  shape,
  func,
} = PropTypes;

Billboard.propTypes = {
  children: oneOfType([string, element, node]),
  preview: shape({
    banner: string,
    title: string,
    year: string,
    duration: string,
    description: string,
  }),
  resetPreview: func,
};

export { Billboard };
