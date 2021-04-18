import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { Button } from '../button';
import './billboard.scss';
import { clearMoviePreview } from '../../store/actions/preview';

const mapStateToProps = (state) => {
  const { movie, filter } = state;
  return { movie, filter };
};

const mapDispatchToProps = (dispatch) => ({
  clearMoviePreviewData: () => dispatch(clearMoviePreview()),
});

const Billboard = ({
  children,
  clearMoviePreviewData,
}) => {
  const moviePreview = useSelector((state) => state.preview);
  const hasMoviePreview = !_.isEmpty(moviePreview);
  const {
    banner,
    title,
    year,
    duration,
    description,
  } = moviePreview;

  const history = useHistory();

  const hidePreview = () => {
    clearMoviePreviewData();
    history.push('/');
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
  func,
} = PropTypes;

Billboard.propTypes = {
  children: oneOfType([string, element, node]),
  clearMoviePreviewData: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
